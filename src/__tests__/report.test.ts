import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import fs from "node:fs";
import { is429, saveFile, autoGenFooter } from "../report.ts";

// ---------------------------------------------------------------------------
// is429
// ---------------------------------------------------------------------------

describe("is429", () => {
  it("detects status 429 from error-like objects", () => {
    expect(is429({ status: 429 })).toBe(true);
  });

  it("detects 429 from string representation", () => {
    expect(is429(new Error("Request failed with 429"))).toBe(true);
  });

  it("returns false for other status codes", () => {
    expect(is429({ status: 500 })).toBe(false);
    expect(is429({ status: 200 })).toBe(false);
  });

  it("returns false for null/undefined", () => {
    expect(is429(null)).toBe(false);
    expect(is429(undefined)).toBe(false);
  });

  it("returns false for unrelated errors", () => {
    expect(is429(new Error("Something else"))).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// saveFile
// ---------------------------------------------------------------------------

describe("saveFile", () => {
  beforeEach(() => {
    vi.spyOn(fs, "mkdirSync").mockReturnValue(undefined);
    vi.spyOn(fs, "writeFileSync").mockReturnValue(undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the expected file path", () => {
    const result = saveFile("content", "2026-03-09", "ai-cli.md");
    expect(result).toBe("digests/2026-03-09/ai-cli.md");
  });

  it("creates parent directories recursively", () => {
    saveFile("content", "2026-03-09", "ai-cli.md");
    expect(fs.mkdirSync).toHaveBeenCalledWith("digests/2026-03-09", { recursive: true });
  });

  it("writes content as utf-8", () => {
    saveFile("hello world", "2026-03-09", "test.md");
    expect(fs.writeFileSync).toHaveBeenCalledWith("digests/2026-03-09/test.md", "hello world", "utf-8");
  });
});

// ---------------------------------------------------------------------------
// autoGenFooter
// ---------------------------------------------------------------------------

describe("autoGenFooter", () => {
  const originalEnv = process.env["DIGEST_REPO"];

  afterEach(() => {
    if (originalEnv !== undefined) {
      process.env["DIGEST_REPO"] = originalEnv;
    } else {
      delete process.env["DIGEST_REPO"];
    }
  });

  it("returns empty string when DIGEST_REPO is not set", () => {
    delete process.env["DIGEST_REPO"];
    expect(autoGenFooter()).toBe("");
  });

  it("returns empty string when DIGEST_REPO is empty", () => {
    process.env["DIGEST_REPO"] = "";
    expect(autoGenFooter()).toBe("");
  });

  it("returns Chinese footer when DIGEST_REPO is set", () => {
    process.env["DIGEST_REPO"] = "user/repo";
    const result = autoGenFooter("zh");
    expect(result).toContain("agents-radar");
    expect(result).toContain("github.com/user/repo");
    expect(result).toContain("自动生成");
  });

  it("returns English footer when lang is en", () => {
    process.env["DIGEST_REPO"] = "user/repo";
    const result = autoGenFooter("en");
    expect(result).toContain("auto-generated");
    expect(result).toContain("agents-radar");
  });
});
