/**
 * Weekly and monthly rollup report generator.
 * Reads existing daily digest files — no GitHub API calls needed.
 */

import fs from "node:fs";
import path from "node:path";
import { callLlm, saveFile, autoGenFooter, LLM_TOKENS_ROLLUP } from "./report.ts";
import {
  buildWeeklyPrompt,
  buildMonthlyPrompt,
  buildHighlightsPrompt,
  buildRangeSignalsPrompt,
  type RangeDayDigest,
  type ReportHighlights,
} from "./prompts-data.ts";
import { createGitHubIssue } from "./github.ts";
import { toCstDateStr, toUtcStr } from "./date.ts";
import { type Lang, WEEKLY_REPORT, MONTHLY_REPORT, SIGNALS_REPORT, ISSUE_LABELS } from "./i18n.ts";

const DIGESTS_DIR = "digests";
const MAX_CHARS_PER_REPORT = 2500;
/** Max chars read per source file for range signals (multiple sources × multiple days). */
const MAX_CHARS_SIGNALS_SOURCE = 1500;

// Source report types to read for rollups (in priority order)
const ROLLUP_SOURCES = ["ai-cli", "ai-agents", "ai-trending", "ai-hn", "ai-web"];

/** Signal source report types to include in the range panorama. */
const SIGNALS_SOURCES = ["ai-trending", "ai-hn", "ai-cli", "ai-agents", "ai-web"];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getDateDirs(): string[] {
  if (!fs.existsSync(DIGESTS_DIR)) return [];
  return fs
    .readdirSync(DIGESTS_DIR)
    .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && fs.statSync(path.join(DIGESTS_DIR, d)).isDirectory())
    .sort()
    .reverse();
}

/** Read and truncate a daily digest file. Returns null if not found. */
function readDailyDigest(date: string): string | null {
  for (const type of ROLLUP_SOURCES) {
    const p = path.join(DIGESTS_DIR, date, `${type}.md`);
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, "utf-8");
      const truncated = content.slice(0, MAX_CHARS_PER_REPORT);
      return truncated.length < content.length ? truncated + "\n...[摘要截断]" : truncated;
    }
  }
  return null;
}

/** Read a weekly report file. Returns null if not found. */
function readWeeklyDigest(date: string): string | null {
  const p = path.join(DIGESTS_DIR, date, "ai-weekly.md");
  if (!fs.existsSync(p)) return null;
  const content = fs.readFileSync(p, "utf-8");
  return content.slice(0, 3000) + (content.length > 3000 ? "\n...[截断]" : "");
}

/** Format a date as ISO week string, e.g. "2026-W10". */
export function toWeekStr(date: Date): string {
  // ISO week: week containing the first Thursday of the year
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

// ---------------------------------------------------------------------------
// Helpers (range signals)
// ---------------------------------------------------------------------------

/**
 * Read all available signal sources for a single date from stored digest files.
 * Returns a map of source-id → truncated content.
 *
 * @param date            ISO date string, e.g. "2026-03-19"
 * @param overrideReports Optional fresh in-memory reports (today's not-yet-saved data).
 *                        These take precedence over anything on disk.
 */
function readDaySignalSources(
  date: string,
  overrideReports?: Record<string, string>,
): Record<string, string> {
  const sources: Record<string, string> = {};
  for (const sourceId of SIGNALS_SOURCES) {
    if (overrideReports?.[sourceId]) {
      const raw = overrideReports[sourceId]!;
      const truncated = raw.slice(0, MAX_CHARS_SIGNALS_SOURCE);
      sources[sourceId] = truncated.length < raw.length ? truncated + "\n*[truncated]*" : truncated;
      continue;
    }
    const p = path.join(DIGESTS_DIR, date, `${sourceId}.md`);
    if (fs.existsSync(p)) {
      const raw = fs.readFileSync(p, "utf-8");
      const truncated = raw.slice(0, MAX_CHARS_SIGNALS_SOURCE);
      sources[sourceId] = truncated.length < raw.length ? truncated + "\n*[truncated]*" : truncated;
    }
  }
  return sources;
}

// ---------------------------------------------------------------------------
// Range Signals Panorama
// ---------------------------------------------------------------------------

/**
 * Generate a wide-angle AI Signals Panorama spanning a date range.
 *
 * Reads stored digest files for all dates in the range and synthesises them
 * into a single multi-day panorama report (zh + en saved in parallel).
 *
 * @param todayDate       Today's date string, e.g. "2026-04-05" (used as toDate if toDate not set).
 * @param todayReports    Today's fresh in-memory reports (not yet on disk) keyed by lang.
 * @param fromDate        Start of range (inclusive). Defaults to 21 days before todayDate.
 * @param toDate          End of range (inclusive). Defaults to todayDate.
 */
export async function runRangeSignals(
  todayDate: string,
  todayReports: Record<Lang, Record<string, string>>,
  fromDate?: string,
  toDate?: string,
): Promise<void> {
  const now = new Date();
  const utcStr = toUtcStr(now);
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  const effectiveToDate = toDate ?? todayDate;
  const effectiveFromDate =
    fromDate ??
    (() => {
      const d = new Date(effectiveToDate + "T00:00:00Z");
      d.setUTCDate(d.getUTCDate() - 20); // 21-day window (inclusive of today)
      return d.toISOString().slice(0, 10);
    })();

  console.log(`[signals-range] Generating panorama for ${effectiveFromDate} ~ ${effectiveToDate}`);

  // Collect all date directories within the range
  const allDates = getDateDirs().filter((d) => d >= effectiveFromDate && d <= effectiveToDate);

  if (allDates.length === 0) {
    console.log("[signals-range] No digest dates found in range, skipping.");
    return;
  }

  // Build per-day digests (newest first)
  const zhDays: RangeDayDigest[] = [];
  const enDays: RangeDayDigest[] = [];
  for (const date of allDates) {
    const isToday = date === todayDate;
    const zhSources = readDaySignalSources(date, isToday ? todayReports.zh : undefined);
    const enSources = readDaySignalSources(
      date,
      isToday
        ? // Build en-suffixed sources for today from in-memory en reports
          Object.fromEntries(Object.entries(todayReports.en).map(([id, v]) => [id, v]))
        : (() => {
            // For past dates, prefer -en files; fall back to zh files
            const s: Record<string, string> = {};
            for (const sourceId of SIGNALS_SOURCES) {
              for (const suffix of ["-en", ""]) {
                const p = path.join(DIGESTS_DIR, date, `${sourceId}${suffix}.md`);
                if (fs.existsSync(p)) {
                  const raw = fs.readFileSync(p, "utf-8");
                  const truncated = raw.slice(0, MAX_CHARS_SIGNALS_SOURCE);
                  s[sourceId] = truncated.length < raw.length ? truncated + "\n*[truncated]*" : truncated;
                  break;
                }
              }
            }
            return s;
          })(),
    );
    if (Object.keys(zhSources).length > 0) zhDays.push({ date, sources: zhSources });
    if (Object.keys(enSources).length > 0) enDays.push({ date, sources: enSources });
  }

  if (zhDays.length === 0) {
    console.log("[signals-range] No source data found in range, skipping.");
    return;
  }

  console.log(
    `[signals-range] Synthesising ${zhDays.length} days of data across ${effectiveFromDate} ~ ${effectiveToDate}`,
  );

  // Generate zh and en panoramas in parallel
  const [zhSummary, enSummary] = await Promise.all([
    callLlm(buildRangeSignalsPrompt(zhDays, effectiveFromDate, effectiveToDate, "zh"), LLM_TOKENS_ROLLUP),
    callLlm(buildRangeSignalsPrompt(enDays, effectiveFromDate, effectiveToDate, "en"), LLM_TOKENS_ROLLUP),
  ]);

  const footer = autoGenFooter("zh");
  const enFooter = autoGenFooter("en");

  const zhContent =
    `# ${SIGNALS_REPORT.title.zh} ${effectiveFromDate} ~ ${effectiveToDate}\n\n` +
    `> ${SIGNALS_REPORT.sources.zh} | ` +
    `覆盖 ${zhDays.length} 天数据 | 生成时间: ${utcStr} UTC\n\n` +
    `---\n\n` +
    zhSummary +
    footer;

  const enContent =
    `# ${SIGNALS_REPORT.title.en} ${effectiveFromDate} ~ ${effectiveToDate}\n\n` +
    `> ${SIGNALS_REPORT.sources.en} | ` +
    `${zhDays.length} days of data | Generated: ${utcStr} UTC\n\n` +
    `---\n\n` +
    enSummary +
    enFooter;

  // Save in today's date folder so it appears in the manifest for today
  console.log(`  Saved ${saveFile(zhContent, todayDate, "ai-signals.md")}`);
  console.log(`  Saved ${saveFile(enContent, todayDate, "ai-signals-en.md")}`);

  if (digestRepo) {
    const zhUrl = await createGitHubIssue(
      SIGNALS_REPORT.rangeIssueTitle(effectiveFromDate, effectiveToDate, "zh"),
      zhContent,
      ISSUE_LABELS.signals.zh,
    );
    console.log(`  Created signals range issue (zh): ${zhUrl}`);
    const enUrl = await createGitHubIssue(
      SIGNALS_REPORT.rangeIssueTitle(effectiveFromDate, effectiveToDate, "en"),
      enContent,
      ISSUE_LABELS.signals.en,
    );
    console.log(`  Created signals range issue (en): ${enUrl}`);
  }

  console.log(`[signals-range] Done!`);
}

// ---------------------------------------------------------------------------
// Helpers (rollup)
// ---------------------------------------------------------------------------

async function generateRollupHighlights(
  zhContent: string,
  enContent: string,
  reportId: string,
  dateStr: string,
  itemsPerReport: number,
): Promise<void> {
  console.log(`  [${reportId}] Generating highlights for Telegram...`);
  const highlights: Record<Lang, ReportHighlights> = { zh: {}, en: {} };
  try {
    const [zhRaw, enRaw] = await Promise.all([
      callLlm(buildHighlightsPrompt({ [reportId]: zhContent }, "zh", itemsPerReport), 1024),
      callLlm(buildHighlightsPrompt({ [reportId]: enContent }, "en", itemsPerReport), 1024),
    ]);
    highlights.zh = JSON.parse(
      zhRaw
        .replace(/```json?\n?/g, "")
        .replace(/```/g, "")
        .trim(),
    );
    highlights.en = JSON.parse(
      enRaw
        .replace(/```json?\n?/g, "")
        .replace(/```/g, "")
        .trim(),
    );
  } catch (err) {
    console.error(`  [${reportId}] Highlights generation failed: ${err}`);
  }
  const p = saveFile(JSON.stringify(highlights, null, 2), dateStr, "highlights.json");
  console.log(`  Saved ${p}`);
}

// ---------------------------------------------------------------------------
// Weekly rollup
// ---------------------------------------------------------------------------

export async function runWeeklyRollup(): Promise<void> {
  const now = new Date();
  const dateStr = toCstDateStr(now);
  const utcStr = toUtcStr(now);
  const weekStr = toWeekStr(new Date(now.getTime() + 8 * 60 * 60 * 1000));
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  console.log(`[weekly] Generating rollup for ${weekStr} (date: ${dateStr})`);

  // Collect last 7 days of daily digests
  const allDates = getDateDirs();
  const last7 = allDates.slice(0, 7);

  const dailyDigests: Record<string, string> = {};
  for (const date of last7) {
    const content = readDailyDigest(date);
    if (content) dailyDigests[date] = content;
  }

  if (Object.keys(dailyDigests).length === 0) {
    console.log("[weekly] No daily digests found, skipping.");
    return;
  }

  console.log(
    `[weekly] Found ${Object.keys(dailyDigests).length} daily digests: ${Object.keys(dailyDigests).join(", ")}`,
  );

  // Generate ZH and EN in parallel
  console.log("[weekly] Calling LLM for ZH and EN weekly reports in parallel...");
  const [zhSummary, enSummary] = await Promise.all([
    callLlm(buildWeeklyPrompt(dailyDigests, weekStr, "zh"), LLM_TOKENS_ROLLUP),
    callLlm(buildWeeklyPrompt(dailyDigests, weekStr, "en"), LLM_TOKENS_ROLLUP),
  ]);

  const footer = autoGenFooter("zh");
  const enFooter = autoGenFooter("en");

  const zhContent =
    `# ${WEEKLY_REPORT.title.zh} ${weekStr}\n\n` +
    `> ${WEEKLY_REPORT.coverage.zh}: ${last7[last7.length - 1]} ~ ${last7[0]} | 生成时间: ${utcStr} UTC\n\n` +
    `---\n\n` +
    zhSummary +
    footer;

  const enContent =
    `# ${WEEKLY_REPORT.title.en} ${weekStr}\n\n` +
    `> ${WEEKLY_REPORT.coverage.en}: ${last7[last7.length - 1]} ~ ${last7[0]} | Generated: ${utcStr} UTC\n\n` +
    `---\n\n` +
    enSummary +
    enFooter;

  console.log(`  Saved ${saveFile(zhContent, dateStr, "ai-weekly.md")}`);
  console.log(`  Saved ${saveFile(enContent, dateStr, "ai-weekly-en.md")}`);

  await generateRollupHighlights(zhContent, enContent, "ai-weekly", dateStr, 6);

  if (digestRepo) {
    const url = await createGitHubIssue(WEEKLY_REPORT.issueTitle(weekStr), zhContent, "weekly");
    console.log(`  Created weekly issue: ${url}`);
  }

  console.log("[weekly] Done!");
}

// ---------------------------------------------------------------------------
// Monthly rollup
// ---------------------------------------------------------------------------

export async function runMonthlyRollup(): Promise<void> {
  const now = new Date();
  const cstDate = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  // Monthly report covers the PREVIOUS month
  const prevMonth = new Date(Date.UTC(cstDate.getUTCFullYear(), cstDate.getUTCMonth() - 1, 1));
  const monthStr = prevMonth.toISOString().slice(0, 7); // "2026-02"
  const dateStr = toCstDateStr(now);
  const utcStr = toUtcStr(now);
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  console.log(`[monthly] Generating rollup for ${monthStr} (date: ${dateStr})`);

  const allDates = getDateDirs();

  // Prefer weekly reports from the target month
  const monthDates = allDates.filter((d) => d.startsWith(monthStr));
  const weeklyDates = monthDates.filter((d) => fs.existsSync(path.join(DIGESTS_DIR, d, "ai-weekly.md")));

  let sourceDigests: Record<string, string>;
  let sourceLabel: { zh: string; en: string };

  if (weeklyDates.length >= 2) {
    // Use weekly reports
    sourceLabel = {
      zh: `${weeklyDates.length} 份周报`,
      en: `${weeklyDates.length} weekly reports`,
    };
    sourceDigests = {};
    for (const date of weeklyDates) {
      const content = readWeeklyDigest(date);
      if (content) sourceDigests[date] = content;
    }
  } else {
    // Sample daily reports: every 4th day, max 10
    const sampled = monthDates.filter((_, i) => i % 4 === 0).slice(0, 10);
    sourceLabel = {
      zh: `${sampled.length} 份日报（每4日采样）`,
      en: `${sampled.length} daily reports (sampled every 4 days)`,
    };
    sourceDigests = {};
    for (const date of sampled) {
      const content = readDailyDigest(date);
      if (content) sourceDigests[date] = content;
    }
  }

  if (Object.keys(sourceDigests).length === 0) {
    console.log(`[monthly] No source digests found for ${monthStr}, skipping.`);
    return;
  }

  console.log(`[monthly] Source: ${sourceLabel.zh}`);

  // Generate ZH and EN in parallel
  console.log("[monthly] Calling LLM for ZH and EN monthly reports in parallel...");
  const [zhSummary, enSummary] = await Promise.all([
    callLlm(buildMonthlyPrompt(sourceDigests, monthStr, "zh"), LLM_TOKENS_ROLLUP),
    callLlm(buildMonthlyPrompt(sourceDigests, monthStr, "en"), LLM_TOKENS_ROLLUP),
  ]);

  const footer = autoGenFooter("zh");
  const enFooter = autoGenFooter("en");

  const zhContent =
    `# ${MONTHLY_REPORT.title.zh} ${monthStr}\n\n` +
    `> 数据来源: ${sourceLabel.zh} | 生成时间: ${utcStr} UTC\n\n` +
    `---\n\n` +
    zhSummary +
    footer;

  const enContent =
    `# ${MONTHLY_REPORT.title.en} ${monthStr}\n\n` +
    `> Sources: ${sourceLabel.en} | Generated: ${utcStr} UTC\n\n` +
    `---\n\n` +
    enSummary +
    enFooter;

  console.log(`  Saved ${saveFile(zhContent, dateStr, "ai-monthly.md")}`);
  console.log(`  Saved ${saveFile(enContent, dateStr, "ai-monthly-en.md")}`);

  await generateRollupHighlights(zhContent, enContent, "ai-monthly", dateStr, 6);

  if (digestRepo) {
    const url = await createGitHubIssue(MONTHLY_REPORT.issueTitle(monthStr), zhContent, "monthly");
    console.log(`  Created monthly issue: ${url}`);
  }

  console.log("[monthly] Done!");
}
