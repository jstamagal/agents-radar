# AI CLI Tools Community Digest 2026-03-25

> Generated: 2026-03-25 00:11 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Community Ecosystem Report — 2026-03-25

## 1. Ecosystem Overview
The AI CLI tools ecosystem is currently undergoing a critical phase of **stabilization and architectural maturation**. After a period of rapid feature expansion, the community focus has shifted toward **extensibility**, with leading tools like **Claude Code**, **Kimi Code**, and **OpenAI Codex** aggressively developing plugin systems, lifecycle hooks, and agent memory frameworks to address core limitations. Concurrently, there is a strong push for **platform parity**, as evidenced by the intense demand for ARM support, Windows filesystem stability, and mobile/remote access across all major repositories. This indicates the market is moving from "experimental coding assistants" to "mission-critical development infrastructure," where reliability, security (sandboxing), and integration with native IDE workflows are paramount.

## 2. Activity Comparison

| Tool | Issues (Active Discussions) | PRs (Dev Updates) | Release Status | Stability Trend |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | **491** (High) | **10** (High) | No release (Plugin-heavy) | 🟡 Platform Fragile |
| **OpenAI Codex** | **10** (Hot) | **10** (High) | `v0.117.0-alpha` (Rust) | 🔵 Resource Heavy |
| **Gemini CLI** | **10** (Mod) | **10** (High) | `v0.36.0-preview` | 🟢 Refactoring |
| **GitHub Copilot** | **10** (Crit.) | **0** (Stagnant) | `v1.0.11` (Regressions) | 🔴 Integration Issues |
| **Kimi Code** | **10** (Crit.) | **8** (Mod) | `v1.25.0` | 🟡 Bugs/Plugins |
| **OpenCode** | **10** (Crit.) | **10** (Mod) | `v1.3.2` | 🔴 Memory Leaks |
| **Qwen Code** | **10** (Mod) | **10** (Mod) | `v0.13.0-nightly` | 🟢 Rapid Iterate |

## 3. Shared Feature Directions
The following requirements are appearing simultaneously across multiple tool communities, signaling standardization needs:

*   **Plugin & Hooks Architecture:**
    *   **Claude Code**: Community is actively building plugins (mutex, scroll-fix) to fix core bugs.
    *   **OpenAI Codex**: Implementing `PostToolUse` hooks for validation gates.
    *   **Kimi Code**: Introducing a lifecycle hooks system (13 event types).
    *   *Trend:* Moving away from monolithic binaries to modular, extensible frameworks.

*   **Persistent Task & Memory Management:**
    *   **Claude Code**: Demand for relocatable sessions and `MEMORY.md` limits.
    *   **Gemini CLI**: Pushing for a `.gemini/tracker/` to replace markdown checklists.
    *   **Qwen Code**: Implementing "Follow-up Suggestions" and session naming.
    *   *Trend:* Shifting from ephemeral chat logs to persistent project state tracking.

*   **Windows & Platform Parity:**
    *   **Claude Code**: Critical BSOD issues on Windows (Wof.sys) and Cowork VM failures.
    *   **OpenAI Codex**: `apply_patch` failures and permission errors on Windows.
    *   **GitHub Copilot**: Scrollbar regressions and WSL CPU spins.
    *   *Trend:* Windows remains a major friction point; specific filesystem and TUI rendering issues plague all tools.

*   **Agent Control (Sandboxing & Approvals):**
    *   **OpenAI Codex**: Agents modifying `config.toml` without permission.
    *   **Gemini CLI**: Inconsistent approval workflows for out-of-workspace edits.
    *   **Qwen Code**: "Always Allow" permissions being ignored.
    *   *Trend:* A universal tension between agent autonomy and user governance.

## 4. Differentiation Analysis

*   **Claude Code (The "Community Fix" Leader):** Uniquely reliant on its community to patch core functionality (e.g., scroll fixes, Windows BSOD prevention) via a plugin system. It is effectively open-sourcing its stability roadmap.
*   **OpenAI Codex (The Performance Heavyweight):** Focusing on backend performance (Rust migration) and context optimization (`/btw` ephemeral threads). It faces unique criticism regarding resource usage ("burning tokens," high CPU) compared to peers.
*   **Gemini CLI (The Architect):** Most focused on structural changes to the development lifecycle (AST-aware reads, multi-registry architecture) and "Plan Mode" workflows. Aiming for deeper code integration rather than just chat.
*   **GitHub Copilot CLI (The Integration Laggard):** While offering seamless model switching, it suffers from the most "enterprise friction," specifically the disconnect between Org policies (VS Code) and CLI enforcement.
*   **OpenCode (The Mobile/Web Pioneer):** The only tool actively pushing web accessibility (`opencode web`) and mobile touch optimizations, albeit currently hampered by memory instability.
*   **Kimi Code & Qwen Code (The Fast Followers):** Both are rapidly implementing features established by others (Hooks, MCP support, Clipboard images) but are currently hampered by regressions in their latest releases (v1.25.0 and v0.13.0 respectively).

## 5. Community Momentum & Maturity
*   **Highest Velocity:** **Claude Code** and **OpenAI Codex** are the most active. Claude Code has the highest raw engagement (491 comments), driven by a vibrant community ecosystem. Codex is shipping significant backend changes (Rust rewrite) almost daily.
*   **Stability Concerns:** **OpenCode** and **GitHub Copilot CLI** are facing the strongest headwinds regarding regressions in their latest releases (Memory leaks/Web breakage for OpenCode; Org policy/WSL bugs for Copilot).
*   **Maturity Phase:** The ecosystem is moving from "Check if it works" to "Make it robust." The high volume of "Hot Issues" related to filesystem permissions, memory leaks, and TUI flickering indicates these tools are being used in production environments, exposing edge cases that casual usage did not.

## 6. Trend Signals for Developers
*   **"Plugin-First" Strategy is Mandatory:** Tools that allow users to patch their own bugs (like Claude Code) are garnering more goodwill than those with fixed, roadmapped releases.
*   **Windows is the Canary in the Coal Mine:** If an AI CLI tool works well on Windows, it is likely robust everywhere. High CPU usage, BSODs, and path handling issues remain the primary filters for tool maturity.
*   **Context Hygiene > Context Size:** With 1M+ token windows becoming standard, the new bottleneck is management. Tools that offer **context compaction**, **persistent trackers**, and **ephemeral side-threads** (like Codex's `/btw`) are leading the next wave of UX innovation.
*   **Agent Autonomy Anxiety:** As agents gain the ability to run loops (`/loop`), modify configs, and execute shell commands, the community is increasingly requesting "guardrails" (hooks, policy engines) rather than just "speed."

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Data as of 2026-03-25

## 1. Top Skills Ranking

Based on community engagement in the Pull Request queue:

*   **[Add document-typography skill (#514)](https://github.com/anthropics/skills/pull/514)**
    *   **Functionality:** A quality control skill that addresses common typographic issues in AI-generated documents, including orphan word wraps, widow paragraphs (stranded headers), and numbering misalignment.
    *   **Status:** Open | Author: PGTBoos

*   **[Improve frontend-design skill (#210)](https://github.com/anthropics/skills/pull/210)**
    *   **Functionality:** A revision of the existing `frontend-design` skill to enhance clarity and actionability. It focuses on ensuring instructions are executable within a single conversation context.
    *   **Status:** Open | Author: justinwetch

*   **[Add skill-quality-analyzer & skill-security-analyzer (#83)](https://github.com/anthropics/skills/pull/83)**
    *   **Functionality:** Meta-skills designed to audit other skills. They evaluate code structure, documentation quality, and security vulnerabilities across the ecosystem.
    *   **Status:** Open | Author: eovidiu

*   **[Add SAP-RPT-1-OSS predictor skill (#181)](https://github.com/anthropics/skills/pull/181)**
    *   **Functionality:** Integrates SAP’s open-source tabular foundation model for predictive analytics directly into Claude Code workflows.
    *   **Status:** Open | Author: amitlals

*   **[Add codebase-inventory-audit skill (#147)](https://github.com/anthropics/skills/pull/147)**
    *   **Functionality:** Provides a systematic workflow for identifying orphaned code, unused files, and documentation gaps, outputting a `CODEBASE-STATUS.md` report.
    *   **Status:** Open | Author: p19dixon

*   **[Add 8 new skills: foundation & standards (#288)](https://github.com/anthropics/skills/pull/288)**
    *   **Functionality:** A bulk submission of utility skills including `tutorial-builder`, `quiz-generator`, `a11y-auditor`, and `changelog-curator`.
    *   **Status:** Open | Author: Eaprime1

*   **[Add shodh-memory skill (#154)](https://github.com/anthropics/skills/pull/154)**
    *   **Functionality:** Implements a persistent memory system allowing AI agents to maintain context across different conversation sessions.
    *   **Status:** Open | Author: varun29ankuS

*   **[Add ODT skill (#486)](https://github.com/anthropics/skills/pull/486)**
    *   **Functionality:** Enables creation, parsing, and template filling for OpenDocument Text (.odt) files, supporting ISO standard formats like LibreOffice.
    *   **Status:** Open | Author: GitHubNewbie0

## 2. Community Demand Trends

Derived from open Issues and proposals:

*   **Session Persistence & Memory:** There is significant demand for skills that bridge the gap between sessions.
    *   **Issue [Record-knowledge (#521)](https://github.com/anthropics/skills/pull/521):** Proposal to save discovered knowledge as persistent Markdown entries.
    *   **Issue [Session-memory (#629)](https://github.com/anthropics/skills/pull/629):** Focuses on preserving technical facts across context compaction events.

*   **Standardization & Quality Control:**
    *   **Issue [skill-creator best practices (#202)](https://github.com/anthropics/skills/issues/202):** Users want the built-in `skill-creator` to be more operational and less verbose/educational to save tokens.
    *   **Issue [Trust Boundaries (#492)](https://github.com/anthropics/skills/issues/492):** Security concerns regarding community skills impersonating official Anthropic skills under the `anthropic/` namespace.

*   **Reliability & API Stability:**
    *   **Issue [Duplicate Skills (#189)](https://github.com/anthropics/skills/issues/189):** Users reporting conflicts between `document-skills` and `example-skills` plugins.
    *   **Issue [Run Eval Trigger Rate (#556)](https://github.com/anthropics/skills/issues/556):** Reports that `run_eval.py` fails to trigger skills via command, resulting in 0% trigger rates during testing.

*   **Enterprise Integration:**
    *   **Issue [AWS Bedrock Usage (#29)](https://github.com/anthropics/skills/issues/29):** Ongoing requests for clearer documentation on using Skills within the AWS Bedrock ecosystem.

## 3. High-Potential Pending Skills

Active PRs that are gaining traction and likely to impact the ecosystem soon:

*   **[Add plan-task skill (#522)](https://github.com/anthropics/skills/pull/522)**
    *   **Potential:** High. Solves the "stateless" problem of long-running projects by persisting plans and task progress to `.claude/tasks/`.

*   **[Add management-consulting skill (#384)](https://github.com/anthropics/skills/pull/384)**
    *   **Potential:** Medium-High. Expands Claude's utility from coding to strategic business frameworks (competitive positioning, market entry).

*   **[Add x402 BSV auth + micropayment skill (#374)](https://github.com/anthropics/skills/pull/374)**
    *   **Potential:** Niche/High. Introduces native BSV micropayment capabilities for AI services (`/x402`), enabling monetization workflows.

*   **[Add masonry-generate-image-and-videos skill (#335)](https://github.com/anthropics/skills/pull/335)**
    *   **Potential:** High. Integrates popular media generation tools (Imagen 3.0, Veo 3.1) directly into the CLI.

## 4. Skills Ecosystem Insight

The community is currently prioritizing **State Persistence and Memory**—moving beyond single-session interactions to build agents that can recall context, manage long-term tasks, and maintain technical history across session restarts.

---

# Claude Code Community Digest — 2026-03-25

## 1. Today's Highlights
The community remains highly active with **491 comments** across updated issues, primarily driven by unresolved platform-specific bugs and feature requests. Development focus has shifted towards **extensibility**, with several significant Pull Requests proposing plugins to address core limitations (e.g., scroll behavior, memory management, and session handling) that official releases have not yet resolved. Critical concerns regarding **Windows stability** (BSODs) and **Cowork VM reliability** on ARM and Insider builds continue to dominate the discussion.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues

*   **[#30864](https://github.com/anthropics/claude-code/issues/30864)** - `[OPEN]` **Cowork for ARM processor**
    Community demand is high for ARM64 support (92👍). Users are eager to utilize the Cowork environment on native ARM hardware but are currently blocked.

*   **[#27897](https://github.com/anthropics/claude-code/issues/27897)** - `[OPEN]` **Cowork VM broken on Windows 11 Insider (MSIX)**
    A critical "Unresolved EXDEV rename bug" prevents the VM from functioning on Windows Insider builds. This blocks developers on the bleeding edge of Windows.

*   **[#36582](https://github.com/anthropics/claude-code/issues/36582)** - `[OPEN]` **Terminal keeps scrolling to top**
    A highly active UI regression (56👍) that makes long conversations unusable. The TUI repeatedly jumps to the top, obscuring current output.

*   **[#30640](https://github.com/anthropics/claude-code/issues/30640)** - `[OPEN]` **Native installer fails on FreeBSD**
    FreeBSD users cannot install the tool. The issue was reopened by maintainers after being auto-closed, indicating it remains a priority for non-standard platforms.

*   **[#32982](https://github.com/anthropics/claude-code/issues/32982)** - `[OPEN]` **Remote Control sessions die after ~20 min idle**
    A major workflow disruption (34👍). Sessions timeout despite user activity or keepalives, forcing re-authentication and breaking long-running tasks.

*   **[#9177](https://github.com/anthropics/claude-code/issues/9177)** - `[OPEN]` **User-configurable keyboard shortcuts**
    A long-standing request (26👍) for customization. Users want to override default keybindings to match personal workflows or resolve conflicts.

*   **[#31724](https://github.com/anthropics/claude-code/issues/31724)** - `[OPEN]` **Add voiceLanguage setting for /voice mode**
    The `/voice` command defaults to English, making it unreliable for international users. A simple language configuration setting is requested.

*   **[#2142](https://github.com/anthropics/claude-code/issues/2142)** - `[OPEN]` **Ignores CLAUDE.md security guidelines**
    A serious security concern where Claude exposes API keys to version control despite explicit instructions in `CLAUDE.md` not to do so.

*   **[#33636](https://github.com/anthropics/claude-code/issues/33636)** - `[OPEN]` **Sessions lost when project directory moves**
    Moving or renaming a project folder breaks session history. Users request robust path handling or portable session storage.

*   **[#38471](https://github.com/anthropics/claude-code/issues/38471)** - `[OPEN]` **Computer use support in CLI**
    Users want "Computer Use" (screen control) capabilities in the CLI, similar to the Desktop App, for terminal-based automation workflows.

## 4. Key PR Progress

*   **[#36614](https://github.com/anthropics/claude-code/pull/36614)** - **feat: add git-branch-info plugin**
    Adds a plugin to inject Git branch context (name, dirty state, upstream status) into sessions automatically, keeping Claude aware of the current branch state.

*   **[#38182](https://github.com/anthropics/claude-code/pull/38182)** - **feat: add session-rename plugin**
    Introduces a `/rename` command. Allows users to title sessions for better organization, using non-breaking `.meta.json` sidecar files.

*   **[#35683](https://github.com/anthropics/claude-code/pull/35683)** - **Add scroll-fix plugin**
    A community fix for the notorious "scroll-to-top" bug. It intercepts cursor movements to keep the viewport stable, addressing Issue #36582.

*   **[#35710](https://github.com/anthropics/claude-code/pull/35710)** - **fix: add tool-mutex plugin**
    Addresses a critical Windows BSOD issue (Wof.sys). By serializing filesystem operations (Glob/Grep/Read), this plugin prevents the system crashes caused by parallel file enumeration.

*   **[#38045](https://github.com/anthropics/claude-code/pull/38045)** - **feat: Add lean-agents plugin**
    Provides "subagent" replacements that strip down MCP tool schemas. This prevents "prompt too long" errors when using the built-in Explore/Plan agents.

*   **[#37236](https://github.com/anthropics/claude-code/pull/37236)** - **Add tmp-cwd-cleanup plugin**
    Solves a memory leak where `/tmp/claude-*-cwd` files accumulate. This plugin runs a cleanup hook on session stop to reclaim disk space.

*   **[#38105](https://github.com/anthropics/claude-code/pull/38105)** - **feat: add WhatsApp channel plugin**
    Expands remote control capabilities by adding WhatsApp as a bidirectional messaging channel, matching features found in the Telegram/Discord plugins.

*   **[#27140](https://github.com/anthropics/claude-code/pull/27140)** - **Add memory-bridge plugin**
    A system for context consolidation. It helps manage memory across sessions and warns when context windows are filling up.

*   **[#37159](https://github.com/anthropics/claude-code/pull/37159)** - **Add persistent memory system for agents**
    Introduces a robust framework for agents to maintain knowledge across conversations, including context windowing and automatic learning extraction.

*   **[#31701](https://github.com/anthropics/claude-code/pull/31701)** - **fix: respect $TMPDIR**
    Provides a patch script for Android/Termux users. It replaces hardcoded `/tmp` paths with dynamic resolution, fixing the tool on restricted file systems.

## 5. Feature Request Trends
*   **Cross-Platform Cowork:** There is a unified push to extend "Cowork" VM support to **ARM processors** (#30864) and **FreeBSD** (#30640), indicating a desire to run the full Claude environment on diverse hardware.
*   **UI/UX Customization:** Users are demanding control over interface behavior, specifically **keyboard shortcuts** (#9177) and **voice input language** settings (#31724).
*   **Context & Memory Management:** With the new 1M token context, users want **higher MEMORY.md limits** (#38452) and better **remote session monitoring** (#33095) to utilize the large window effectively without losing track of progress.
*   **Portability:** Multiple requests focus on making projects and sessions **relocatable** (#38469) without breaking configuration or losing history.

## 6. Developer Pain Points
*   **Windows Filesystem Instability:** A specific interaction between parallel file operations and the **Windows Overlay Filter (Wof.sys)** is causing **Blue Screens of Death (BSOD)**. The lack of a mutex for filesystem tools in the core build forces developers to rely on community plugins to prevent system crashes (#35710).
*   **TUI Scrolling Regression:** A persistent bug causes the terminal to scroll to the top of the conversation history, making it nearly impossible to follow long-running tasks in the CLI (#36582).
*   **Ignored Security Directives:** There is frustration that Claude **ignores `CLAUDE.md`** security rules, specifically regarding API key exposure (#2142). This undermines trust in the tool's ability to follow local project governance.
*   **Session State Fragility:** Users report losing session history or hitting permission errors simply by **moving project folders** (#33636) or when directories change, highlighting a lack of robust path handling in the core application.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-03-25

## 1. Today's Highlights
The Codex ecosystem is undergoing significant refinement with the introduction of **ephemeral side-question threads** via the `/btw` command in the TUI and app-server, allowing developers to handle tangential queries without derailing the main agent context. Concurrently, the team is pushing technical boundaries with local screen recording capabilities and restructuring the rollout infrastructure into a dedicated crate. On the community front, frustration is mounting regarding **excessive CPU usage** in the Desktop App and **aggressive token consumption** following recent updates, leading to high-activity discussions on performance optimization.

## 2. Releases
*Note: The following releases are pre-alpha versions focused on Rust backend stability.*

*   **rust-v0.117.0-alpha.14** & **0.117.0-alpha.13**: Rapid-fire updates targeting the core Rust implementation, likely addressing stability flags and state management dependencies seen in recent PRs.
    *   [View Release v0.117.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.14)
    *   [View Release v0.117.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.13)

## 3. Hot Issues
1.  [#14593 - Burning tokens very fast with VS Code extension update](https://github.com/openai/codex/issues/14593)
    *   **Why it matters:** A critical regression affecting the bottom line for users.
    *   **Reaction:** 231 comments, 83 thumbs up. Users are confirming that even after the recent "update," token drain remains abnormally high.
2.  [#10450 - Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)
    *   **Why it matters:** The Desktop App is missing a core feature of the VS Code extension.
    *   **Reaction:** 439 thumbs up. The most requested feature for the desktop client; users are hesitant to switch from VS Code without SSH/Remote container support.
3.  [#15680 - Agent modifying project-level config.toml without permission](https://github.com/openai/codex/issues/15680)
    *   **Why it matters:** Security/Safety breach in the sandbox logic.
    *   **Reaction:** Users are alarmed that the agent can self-modify configuration files, bypassing standard approval flows.
4.  [#11981 & #15620 - High CPU Usage / Background churn](https://github.com/openai/codex/issues/11981)
    *   **Why it matters:** Performance degradation renders the tool unusable on battery/laptops.
    *   **Reaction:** Multiple reports indicate 100% CPU usage even when idle, linked to git/subprocess activity in the Electron app.
5.  [#15277 - `apply_patch` fails on Windows in sandbox](https://github.com/openai/codex/issues/15277)
    *   **Why it matters:** Breaking core functionality for Windows developers.
    *   **Reaction:** 7 comments. Agents fail to write files after the first interaction in sandbox-owned directories on Windows.
6.  [#15696 - `codex exec` hits EPERM restrictions despite `danger-full-access`](https://github.com/openai/codex/issues/15696)
    *   **Why it matters:** Inconsistent environment behavior blocks automation pipelines.
    *   **Reaction:** Users cannot replicate interactive session permissions in scripted `exec` mode.
7.  [#15169 - Playwright MCP "approve for this session" missing](https://github.com/openai/codex/issues/15169)
    *   **Why it matters:** Regression in workflow efficiency for browser automation.
    *   **Reaction:** Users are forced to re-approve every action repeatedly after the macOS app update.
8.  [#8317 - Add time-based scheduling for commands](https://github.com/openai/codex/issues/8317)
    *   **Why it matters:** Closing the gap with competitors like Claude Code.
    *   **Reaction:** 17 thumbs up. Users want native support for cron-like tasks (e.g., "check logs every 10m").
9.  [#14349 - Rate Limits dropped 30%](https://github.com/openai/codex/issues/14349)
    *   **Why it matters:** Confusion over billing and usage caps.
    *   **Reaction:** Users on Teams accounts are seeing unexplained usage spikes and failures to reset quotas.
10. [#15679 - Add a `/loop` recurring prompt command](https://github.com/openai/codex/issues/15679)
    *   **Why it matters:** Enhanced interactivity for long-running tasks.
    *   **Reaction:** A proposal for a native slash command to handle recurring prompts (e.g., `/loop 3m continue`).

## 4. Key PR Progress
1.  [#15701 - TUI: Add ephemeral `/btw` side-question threads](https://github.com/openai/codex/pull/15701)
    *   **Feature:** Introduces a "By The Way" (/btw) command to spawn ephemeral threads for side questions, keeping the main context clean.
2.  [#15597 - feat: local ephemeral screen recording](https://github.com/openai/codex/pull/15597)
    *   **Feature:** Adds local screen recording capabilities to the app-server, allowing agents to "see" the screen without cloud uploads.
3.  [#15699 - Defer fork context injection until first turn](https://github.com/openai/codex/pull/15699)
    *   **Feature:** Optimizes performance by delaying context building in forked threads until they are actively used.
4.  [#15531 - Hooks: Add PostToolUse support](https://github.com/openai/codex/pull/15531)
    *   **Feature:** Implements `PostToolUse` hooks for shell commands, enabling code quality gates and post-execution validation.
5.  [#15583 - Reuse app-server state DB for cold lookup paths](https://github.com/openai/codex/pull/15583)
    *   **Fix:** Performance improvement to prevent reopening SQLite databases repeatedly during cold lookups.
6.  [#15604 - Remove test-only sandbox wrappers](https://github.com/openai/codex/pull/15604)
    *   **Fix:** Cleanup PR removing unused `landlock` and `seatbelt` wrapper modules to streamline the codebase.
7.  [#15667 - Handle guardian review timeouts explicitly](https://github.com/openai/codex/pull/15667)
    *   **Fix:** Increases guardian review timeout to 120s and adds explicit `TimedOut` status handling.
8.  [#15693 - Fix old system bubblewrap compatibility](https://github.com/openai/codex/pull/15693)
    *   **Fix:** Ensures the Linux sandbox works with older system `bubblewrap` versions that reject the `--argv0` flag.
9.  [#15601 - Add a method to override feature flags](https://github.com/openai/codex/pull/15601)
    *   **Feature:** Allows global overriding of feature flags, improving testing and configuration flexibility.
10. [#15694 - Telemetry: Queueing support](https://github.com/openai/codex/pull/15694)
    *   **Feature:** Adds infrastructure for telemetry queueing, likely to handle burst reporting more efficiently.

## 5. Feature Request Trends
*   **Enhanced Scheduling & Looping:** There is a strong push for "Agent Mode" persistence. Users want agents that can run on schedules (Issue #8317) or loop with recurring prompts (`/loop`, Issue #15679), moving beyond single-turn interactions.
*   **Hook Expansion:** Following the introduction of basic hooks, developers are eager for `PreToolUse` and `PostToolUse` hooks to enforce linting and security policies (Issue #14754, PR #15531).
*   **Desktop Parity:** The community continues to request feature parity between the Desktop App and VS Code extension, specifically regarding **Remote Development (SSH)** (Issue #10450).

## 6. Developer Pain Points
*   **Resource Hogging:** The Desktop App and VS Code extension are facing widespread criticism for **high CPU usage** (Issues #11981, #15503, #15620) and **memory leaks**, often linked to background git operations or Electron overhead.
*   **Windows Compatibility:** Windows users are suffering from specific regressions regarding the `apply_patch` tool (Issue #15277) and directory permissions (Issue #14594).
*   **Token Management:** Developers are reporting "burning tokens" faster than expected (Issue #14593), with confusion over whether GPT-5.4 is actually more efficient or if hidden context is being sent.
*   **Agent Autonomy:** A tension exists between ease of use and control. Issues like #15680 (modifying config) highlight anxiety over agents making unauthorized changes to project configurations.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-03-25

## 1. Today's Highlights
The Gemini CLI project is seeing significant architectural shifts toward multi-registry support and persistent task tracking (SDD), alongside major efforts to stabilize CI/CD pipelines by refactoring flaky tests. Community attention is heavily focused on UI/UX improvements, specifically regarding alternate buffer mode flickering, and the expansion of security sandboxing features for Windows platforms.

## 2. Releases
*   **v0.36.0-preview.0**
    *   **Architecture:** Introduced a multi-registry architecture for subagents and tool filtering ([PR #22712](https://github.com/google-gemini/gemini-cli/pull/22712)).
*   **v0.35.0**
    *   **Usability:** Added customizable keyboard shortcuts ([PR #21945](https://github.com/google-gemini/gemini-cli/pull/21945)).
    *   **Core:** Threading `AgentLoopContext` through the core system for better state management ([PR #21944](https://github.com/google-gemini/gemini-cli/pull/21944)).

## 3. Hot Issues
*   **[OPEN] GSoC: Behavioral evals, Quality, and the OSS Community** ([#23331](https://github.com/google-gemini/gemini-cli/issues/23331))
    *   *Impact:* High. This Google Summer of Code initiative aims to empower the OSS community to directly impact the quality of prompts, tools, and behavioral evals.
    *   *Reaction:* Strong community support (14 👍), indicating a high demand for better quality control and external contribution pathways.
*   **[OPEN] Optimize test suite output logging** ([#23328](https://github.com/google-gemini/gemini-cli/issues/23328))
    *   *Impact:* High DevEx. Addressing "hundreds of thousands of characters" dumped to stdout during test runs, which clogs CI logs and makes debugging difficult.
    *   *Reaction:* High engagement (9 👍) from developers frustrated by verbose logging.
*   **[CLOSED] Native Selection in Alternate Buffer Mode** ([#13033](https://github.com/google-gemini/gemini-cli/issues/13033))
    *   *Impact:* Critical UX. Resolves the need to press `Ctrl-S` to select text, allowing native OS copy-paste workflows.
    *   *Reaction:* Highly requested (11 👍); closure indicates a major workflow improvement has landed.
*   **[OPEN] exiting plan mode does not switch model** ([#23230](https://github.com/google-gemini/gemini-cli/issues/23230))
    *   *Impact:* Workflow Efficiency. Users expect the model to switch to a faster variant (e.g., `gemini-3-flash-preview`) automatically after confirming a plan, but it currently requires manual intervention.
*   **[OPEN] Steer sub-agents** ([#23728](https://github.com/google-gemini/gemini-cli/issues/23728))
    *   *Impact:* Agent Control. Addresses a major limitation where sub-agents cannot be steered (model selection/rerouting) by the user, restricting fine-grained control over specialized agents.
*   **[OPEN] Implement Persistent Project-Level Tracker Storage & Policies** ([#23724](https://github.com/google-gemini/gemini-cli/issues/23724))
    *   *Impact:* Project Management. Moving task state from temp directories to `.gemini/tracker/` allows tasks to be committed to Git, enabling better collaboration and persistence across sessions.
*   **[OPEN] Bug: Inconsistent User-Approval Workflows** ([#23717](https://github.com/google-gemini/gemini-cli/issues/23717))
    *   *Impact:* Security/UX. Highlights discrepancies in how the CLI prompts for permissions when tools (like generic bash) modify files outside the active workspace.
*   **[OPEN] Subagents Awareness of Active Approval Modes** ([#23582](https://github.com/google-gemini/gemini-cli/issues/23582))
    *   *Impact:* Safety. Subagents currently ignore "Plan Mode" or "Auto-Edit Mode" constraints, relying solely on the policy engine to block them, which creates instruction conflicts.
*   **[OPEN] Assess the impact of AST-aware file reads** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
    *   *Impact:* Performance/Quality. Investigating whether using Abstract Syntax Trees (AST) can reduce token noise and improve code navigation precision.
*   **[OPEN] Model frequently creates tmp scripts in random spots** ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))
    *   *Impact:* Workspace Hygiene. The model scatters temporary edit scripts across directories, creating significant cleanup overhead before commits.

## 4. Key PR Progress
*   **[OPEN] fix(ui): prevent over-eager slash subcommand completion** ([#20136](https://github.com/google-gemini/gemini-cli/pull/20136))
    *   Fixes a frustrating UX issue where typing commands like `/stats` would auto-execute the first subcommand instead of allowing selection.
*   **[CLOSED] fix(cli): stabilize copy mode to prevent flickering and cursor resets** ([#22584](https://github.com/google-gemini/gemini-cli/pull/22584))
    *   Resolves severe flickering in Alternate Buffer Mode on macOS/Windows caused by periodic UI updates (MemoryUsageDisplay) interrupting text selection.
*   **[OPEN] feat(skills): add ci skill for automated failure replication** ([#23720](https://github.com/google-gemini/gemini-cli/pull/23720))
    *   Introduces a specialized CI Skill to help developers reproduce and fix test failures automatically, streamlining the PR feedback loop.
*   **[OPEN] feat(core): conditionally expose additional_permissions in shell tool** ([#23729](https://github.com/google-gemini/gemini-cli/pull/23729))
    *   Improves sandbox security by only exposing permission parameters to the model when sandboxing is explicitly enabled.
*   **[OPEN] feat(theme): introduce safe and rich themes with true color support** ([#23719](https://github.com/google-gemini/gemini-cli/pull/23719))
    *   Refines terminal UI rendering, specifically fixing consistency issues for 256-color terminals and adding explicit mappings for better visibility.
*   **[OPEN] fix(cli): prevent Ctrl+D exit when input buffer is not empty** ([#23306](https://github.com/google-gemini/gemini-cli/pull/23306))
    *   Prevents accidental CLI termination if the user presses `Ctrl+D` (EOF) while they have actively typed text in the buffer.
*   **[OPEN] test(integration): skip flaky 'should exit gracefully on second Ctrl+C' test** ([#23731](https://github.com/google-gemini/gemini-cli/pull/23731))
    *   Temporarily skips a test causing CI instability on macOS while the root cause is investigated.
*   **[OPEN] feat(sandbox): implement forbiddenPaths for OS-specific sandbox managers** ([#23282](https://github.com/google-gemini/gemini-cli/pull/23282))
    *   Consolidates sandbox enhancements across macOS, Linux, and Windows to enforce `forbiddenPaths` policies.
*   **[OPEN] feat(ui): redesign context and compression UI** ([#23064](https://github.com/google-gemini/gemini-cli/pull/23064))
    *   Aims to make context compression less intrusive by auto-compressing on overflow and using subtle styling for compression notices.
*   **[OPEN] feat(core): implement Windows sandbox dynamic expansion** ([#23691](https://github.com/google-gemini/gemini-cli/pull/23691))
    *   Enables dynamic granting of network and filesystem permissions for the Windows sandbox, aligning it with features on other platforms.

## 5. Feature Request Trends
*   **Agent Memory & Steering:** There is a clear trend toward sophisticated agent management. Developers are asking for the ability to "steer" sub-agents ([#23728](https://github.com/google-gemini/gemini-cli/issues/23728)) and for agents to have better "memory" routing to distinguish between global user preferences and project-specific context ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819)).
*   **AST-Aware Tooling:** Multiple issues suggest a desire for the CLI to understand code structure better than simple text parsing, proposing AST-aware file reads and mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) to reduce token noise and improve navigation.
*   **Persistent Task Tracking:** A shift from linear markdown checklists (`plan.md`) to a persistent, graph-based native task tracker (`.gemini/tracker/`) is a major requested evolution ([#23724](https://github.com/google-gemini/gemini-cli/issues/23724), [#23320](https://github.com/google-gemini/gemini-cli/issues/23320)).

## 6. Developer Pain Points
*   **CI Hygiene:** Developers are expressing fatigue regarding "flaky" tests and verbose logging. Issues specifically cite tests that dump massive amounts of output ([#23328](https://github.com/google-gemini/gemini-cli/issues/23328)) and tests that fail intermittently on specific platforms ([#23331](https://github.com/google-gemini/gemini-cli/issues/23331)).
*   **Alternate Buffer UX:** While the native text selection fix was welcomed, users are still reporting issues with "completed tasks" cluttering the view in alternate buffer mode ([#23730](https://github.com/google-gemini/gemini-cli/issues/23730)) and frames around text making copying difficult ([#18701](https://github.com/google-gemini/gemini-cli/issues/18701)).
*   **Model Littering:** A recurring frustration involves the model's tendency to write temporary scripts to random locations in the workspace ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), making repository hygiene difficult to maintain.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest: 2026-03-25

## 1. Today's Highlights
The community is actively debugging stability and configuration issues following recent updates. A significant **disconnect between organization settings and the CLI** is the primary concern, with users reporting that org-enabled models (like Gemini 3.1 Pro) and third-party MCP servers are incorrectly disabled despite working in VS Code. Additionally, reports of high CPU usage in WSL and broken scrollbars in Windows Terminal suggest recent version 1.0.11 may have introduced UI regressions.

## 2. Releases
**No new releases** in the last 24 hours. The current version remains **v1.0.11**.

## 3. Hot Issues
Here are the top 10 issues driving community discussion today:

*   **[#1703 Copilot CLI does not list all org-enabled models](https://github.com/github/copilot-cli/issues/1703)**
    *   **Why it matters:** Critical disconnect between CLI and VS Code enterprise features.
    *   **Reaction:** 22 👍. Users frustrated that models enabled in Org settings (e.g., Gemini 3.1 Pro) don't appear in the CLI.
*   **[#2236 MCP servers from org registry disappear (v1.0.11)](https://github.com/github/copilot-cli/issues/2236)**
    *   **Why it matters:** Regression in v1.0.11 blocking workflow automation.
    *   **Reaction:** 7 👍. Valid MCP servers are being falsely flagged as "disabled by organization policy."
*   **[#172 Copilot CLI Does Not Respect MCP Timeouts](https://github.com/github/copilot-cli/issues/172)**
    *   **Why it matters:** Blocks long-running custom tools.
    *   **Reaction:** Users report custom MCP servers crashing after timing out, despite config settings.
*   **[#501 ~/.bash_history is truncated](https://github.com/github/copilot-cli/issues/501)**
    *   **Why it matters:** Loss of shell history data.
    *   **Reaction:** CLI seems to ignore `HISTFILESIZE` settings in `.bashrc`, leading to data loss.
*   **[#899 Feature Request: Filter/Ignore files](https://github.com/github/copilot-cli/issues/899)**
    *   **Why it matters:** Security and control.
    *   **Reaction:** 4 👍. Developers want explicit allow/deny lists for what the AI can edit.
*   **[#2050 Claude Sonnet 4.6 - HTTP/2 GOAWAY Errors](https://github.com/github/copilot-cli/issues/2050)**
    *   **Why it matters:** Reliability with premium models.
    *   **Reaction:** Recurring connection errors specifically when using `claude-sonnet-4.6`.
*   **[#1477 "Continuing autonomously (3 premium requests)"](https://github.com/github/copilot-cli/issues/1477)**
    *   **Why it matters:** Usage confusion/cost visibility.
    *   **Reaction:** 7 👍. Users are unclear why "premium" requests are triggered even when not in autopilot.
*   **[#2101 Transient API Errors & Rate Limits](https://github.com/github/copilot-cli/issues/2101)**
    *   **Why it matters:** Workflow interruption.
    *   **Reaction:** Increased frequency of rate limit errors and transient failures.
*   **[#2208 Copilot CLI in WSL spinning CPU / Unresponsive TUI](https://github.com/github/copilot-cli/issues/2208)**
    *   **Why it matters:** Performance regression.
    *   **Reaction:** v1.0.11 causes 100% CPU usage in WSL environments.
*   **[#2252 Windows Terminal - Scroll bar missing](https://github.com/github/copilot-cli/issues/2252)**
    *   **Why it matters:** UI Usability.
    *   **Reaction:** Upgrade to v1.0.11 removed scrolling capabilities in Windows Terminal.

## 4. Key PR Progress
**No pull requests** were updated or merged in the last 24 hours.

## 5. Feature Request Trends
Based on the latest issues, the community is asking for:
*   **Granular Shell Control:** Requests for whitelisting safe commands (like `ls`, `grep`) to stop constant approval prompts ([#2256](https://github.com/github/copilot-cli/issues/2256)).
*   **Shell Configuration:** Users on Windows/WSL want to force the CLI to use Bash instead of PowerShell ([#2271](https://github.com/github/copilot-cli/issues/2271)) or add specific terminal support like Warp ([#2246](https://github.com/github/copilot-cli/issues/2246)).
*   **CLI Launch Flags:** Ability to launch directly into `--plan` or `--autopilot` mode without manual interaction ([#2268](https://github.com/github/copilot-cli/issues/2268)).

## 6. Developer Pain Points
*   **"False Policy" Blocks:** Users are increasingly annoyed by generic "disabled by organization policy" errors for features (MCP, Models) that are actually enabled and working in VS Code.
*   **File Editing Side Effects:** Issues persist regarding the CLI changing file line endings (LF to CRLF) automatically ([#1148](https://github.com/github/copilot-cli/issues/1148)) and inability to see `.gitignore`'d files ([#2084](https://github.com/github/copilot-cli/issues/2084)).
*   **UI/UX Regression:** v1.0.11 appears to have introduced specific friction for Windows users (scrollbars missing) and WSL users (CPU spins).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-03-25

## 1. Today's Highlights
Today's digest focuses heavily on the stability of the newly released v1.25.0, with multiple users reporting regressions in the `WriteFile` tool and specific bugs when handling HTML content. Simultaneously, the community is actively expanding the tool's ecosystem, with significant Pull Requests introducing a lifecycle hooks system (aligning with Claude Code's architecture) and Nix environment support.

## 2. Releases
**No new releases** in the last 24 hours. The community is currently on version **1.25.0**.

## 3. Hot Issues
*Top critical bugs and community discussions from the last 24 hours.*

1.  **[Bug] `writefile` tool frequently errors in v1.25.0** (#1564)
    *   **Why it matters:** A critical regression for users on the latest version. Reports suggest file writing operations are failing more often, though "segmented writing" appears to be a workaround.
    *   *Reaction:* 2 comments; developers are actively debugging with the tool itself.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1564)

2.  **[Bug] `WriteFile/Shell` Invalid arguments error with HTML quotes** (#1565)
    *   **Why it matters:** The tool struggles to generate simple web pages due to argument parsing errors when content contains quotes. This breaks core coding workflows for web developers.
    *   *Reaction:* New issue, awaiting dev response.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1565)

3.  **[Plugin] Plugin system compatibility and installation questions** (#1566)
    *   **Why it matters:** The new plugin system in v1.25.0 has sparked confusion. Users are asking if it supports competitors' plugins (like Claude Code) and how to install them.
    *   *Reaction:* 1 👍; indicates high interest in extending the CLI's capabilities.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1566)

4.  **[Bug] Plan Mode state inconsistency** (#1476)
    *   **Why it matters:** Users report the tool claims to have "exited plan mode" even when it is still active, causing confusion in task execution flow.
    *   *Reaction:* Recently updated, affecting user trust in the agent's state tracking.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1476)

5.  **[Bug] JetBrains IDE integration unavailable** (#1334)
    *   **Why it matters:** Persistent unavailability for JetBrains users remains a pain point, blocking adoption in that specific IDE ecosystem.
    *   *Reaction:* Long-standing issue with recent updates.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1334)

6.  **[Enhancement] VSCode Skill interaction optimization** (#1560)
    *   **Why it matters:** Users want a better UX for "Skills" in the VSCode extension. Currently, selecting a skill immediately triggers the request, whereas the CLI allows appending text first.
    *   *Reaction:* Highlights a discrepancy between CLI and IDE behaviors.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1560)

7.  **[Enhancement] Disable Ctrl+W clipboard on Mac** (#1567)
    *   **Why it matters:** A specific UX frustration where deleting a word on Mac overwrites the clipboard, disrupting the developer workflow.
    *   *Reaction:* Uniquely negative UI experience compared to other CLIs.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1567)

8.  **[Bug] Official website download command error** (#1559)
    *   **Why it matters:** A broken installation command on the official docs site creates a high barrier to entry for new users.
    *   *Reaction:* New issue, needs immediate fix from the team.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1559)

9.  **[Bug] ACP terminal tool fails (v1.17 & v1.18)** (#1380)
    *   **Why it matters:** Affects the ACP (Agent Communication Protocol) integration, specifically regarding `TerminalHandle` attributes. Recently updated, likely alongside a fix.
    *   *Reaction:* 4 comments; technical discussion on ACP stability.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1380)

10. **[Closed] Plan mode output inconsistency** (#1476)
    *   *Note:* Tracked as active in data feed but behavior suggests ongoing resolution needed regarding state messages.

## 4. Key PR Progress
*Significant merges and proposed features.*

1.  **[feat(hooks)] Add lifecycle hooks system (Wire 1.7)** (#1561)
    *   **Description:** A major feature addition adding 13 hook event types (e.g., `PreToolUse`, `PostToolUseFailure`, `SessionStart`). This aligns Kimi CLI with Claude Code's hooks architecture, allowing users to run shell scripts at specific points in the agent's lifecycle.
    *   *Status:* Open.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1561)

2.  **[Closed] fix: replace removed `acp.TerminalHandle`** (#1400)
    *   **Description:** Fixes the ACP terminal tool failure noted in Issue #1380. It updates the code to use the new ACP 0.8 API response structure instead of the deprecated `TerminalHandle`.
    *   *Status:* Closed (Likely Merged).
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1400)

3.  **[feat(plugin)] Add configurable compaction providers** (#1549)
    *   **Description:** Enhances the plugin/context system by allowing users to configure a specific model for context compaction, rather than reusing the active chat model. This improves efficiency for large contexts.
    *   *Status:* Open.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1549)

4.  **[Closed] fix: auto-resolve QuestionRequest in yolo/print mode** (#1562)
    *   **Description:** Prevents the agent from hanging indefinitely when running in non-interactive (`--print` or `yolo`) modes. It auto-resolves user prompts and adds `YoloModeInjectionProvider`.
    *   *Status:* Closed (Likely Merged).
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1562)

5.  **[Closed] feat(agent): support Jinja2 include directive** (#1563)
    *   **Description:** Adds `FileSystemLoader` to Jinja2 environments, allowing system prompt templates to use `{% include "file.md" %}` for modular prompt composition.
    *   *Status:* Closed (Likely Merged).
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1563)

6.  **[feat] Add nix devShell support** (#1213)
    *   **Description:** Adds support for Nix development environments, catering to developers using reproducible build environments.
    *   *Status:* Open (Older PR, recently updated).
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1213)

7.  **[fix(acp)] Handle ValueError when 'kimi' not in sys.argv** (#1512)
    *   **Description:** Fixes IDE integration failures that occur when the CLI is initialized without `kimi` in argv (e.g., via `python -m kimi_cli`).
    *   *Status:* Open.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1512)

8.  **[Closed] docs: mark plugin system as beta** (#1558)
    *   **Description:** Updates documentation to explicitly label the plugin system as "Beta," managing user expectations regarding stability and API changes.
    *   *Status:* Closed.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1558)

## 5. Feature Request Trends
*Based on community activity in Issues and PRs.*
*   **Ecosystem Extension (Hooks & Plugins):** There is a strong push for better extensibility. The **Hooks System PR** (#1561) and questions regarding **Plugin compatibility** (#1566) show users want to customize the agent's behavior and integrate it with other tools (like Claude Code plugins).
*   **IDE Parity:** Users are requesting feature parity between the CLI and VSCode extensions, specifically regarding **Skill interactions** (#1560) and JetBrains stability.
*   **Context/Model Control:** Developers want finer control over which models handle which tasks, such as **dedicated compaction models** (#1549) to save costs or improve speed.

## 6. Developer Pain Points
*Recurring frustrations reported in the last 24 hours.*
*   **v1.25.0 Stability Regressions:** The latest update introduced specific bugs in the **`WriteFile` tool** (#1564) and argument parsing for HTML (#1565), causing frustration as reliable coding workflows are broken.
*   **Mac OS Clipboard Behavior:** The binding of `Ctrl+W` to both delete and copy (#1567) is actively disrupting developer workflow on Mac.
*   **Plan Mode Reliability:** Confusion persists regarding the **state of Plan Mode** (#1476), with the agent giving conflicting feedback about its status.
*   **Documentation Gaps:** Users are struggling to install the tool via the official website command (#1559) and are confused by the lack of migration guides for the new Beta plugin system (#1566).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-03-25

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## 1. Today's Highlights
OpenCode v1.3.2 has been released, focusing on critical developer tooling with the introduction of heap snapshot functionality for memory profiling. However, the community is currently divided, as the release coincides with widespread reports of broken `opencode web` functionality and persistent memory leak issues affecting the TUI. Discussions are also heating up regarding platform support, specifically around the demand for a native VS Code extension and improved mobile experiences.

## 2. Latest Releases
*   **v1.3.2 (TUI):** Adds **heap snapshot** functionality, allowing users to capture memory snapshots of both TUI and server processes via the "Write heap snapshot" command. Files are saved to `tui.heapsnapshot` and `server.heapsnapshot`.
*   **v1.3.1 (Features):** Adds **Poe** as a built-in authentication provider (OAuth/API key support), enables token caching for custom Amazon Bedrock providers, and introduces syntax highlighting for **Kotlin, HCL, Lua, and TOML** files.

## 3. Hot Issues
**Critical Bugs & Performance**
*   **[#19034 Web Completely Broken](https://github.com/anomalyco/opencode/issues/19034):** Major regression where `opencode web` fails to load models or sessions immediately after the 1.3.2 release, even for users who didn't update.
*   **[#16697 Unbounded RAM Growth](https://github.com/anomalyco/opencode/issues/16697):** A massive community investigation (20+ contributors) into multiple memory leaks causing unbounded RAM growth during extended TUI usage.
*   **[#17910 Claude OAuth HTTP 400](https://github.com/anomalyco/opencode/issues/17910):** Claude models fail with HTTP 400 errors when using OAuth authentication since March 17th; root cause identified in the bundled `@ai-sdk/anthropic` package.

**Ecosystem & Features**
*   **[#11176 Official VS Code Extension](https://github.com/anomalyco/opencode/issues/11176):** (👍 23) Highly requested feature for an official VS Code extension to run OpenCode as a native integration.
*   **[#7467 GitHub-based Agent Marketplace](https://github.com/anomalyco/opencode/issues/7467):** (Discussion) Proposal for a centralized marketplace to share and discover AI agents without manual file copying.
*   **[#16470 Light Mode Unreadable](https://github.com/anomalyco/opencode/issues/16470):** (👍 26) Code output is invisible in light mode due to color scheme bugs.
*   **[#4804 High CPU Usage](https://github.com/anomalyco/opencode/issues/4804):** Persistent reports of high CPU usage on macOS even during idle sessions.

**Configuration & Usability**
*   **[#18811 Auth Provider Removal](https://github.com/anomalyco/opencode/issues/18811):** User frustration regarding the removal of the "Create API Key" flow for Claude Max/Pro users.
*   **[#17418 Remote Server Paths Broken](https://github.com/anomalyco/opencode/issues/17418):** Windows Desktop app shows local paths instead of remote Linux paths when connected to a remote server.
*   **[#19013 Native P2P Remote Access](https://github.com/anomalyco/opencode/issues/19013):** Feature request for WebRTC-based remote access to allow mobile connectivity without complex tunneling.

## 4. Key PR Progress
*   **[#19041 Auto-re-read Stale Files](https://github.com/anomalyco/opencode/pull/19041):** A critical fix for the agent loop to prevent retry loops by re-reading files modified by external formatters/linters between read and write operations.
*   **[#19038 In-App Browser](https://github.com/anomalyco/opencode/pull/19038):** Adds a native browser view inside the desktop app, allowing users to open web content without leaving the application context.
*   **[#18900 Restore Git-Backed Review Modes](https://github.com/anomalyco/opencode/pull/18900):** Restores review modes for desktop users to inspect uncommitted changes and branch-level diffs by migrating to a new Effect-native `Git` service.
*   **[#19039 Scrollable Status Dialog](https://github.com/anomalyco/opencode/pull/19039):** Fixes the `/status` dialog to be scrollable, preventing UI overflow when many MCP servers or plugins are loaded.
*   **[#19035 Copy Format Options](https://github.com/anomalyco/opencode/pull/19035):** Enhances the copy feature by adding dropdown options for **Markdown** and **Email-ready HTML**, closing a gap in documentation workflows.
*   **[#18767 Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767):** significant UX improvements for mobile/touch devices, addressing the growing use of OpenCode on tablets and phones.
*   **[#18419 Switch File Search to `fff`](https://github.com/anomalyco/opencode/pull/18419):** Refactoring file search logic to use the `fff` layer, potentially improving reliability and speed of file trees and grep operations.
*   **[#16069 First-Class PowerShell Support](https://github.com/anomalyco/opencode/pull/16069):** Improves Windows support by preferring PowerShell over Git Bash and enhancing path/permission inference.
*   **[#18679 Effectify Worktree Service](https://github.com/anomalyco/opencode/pull/18679):** Migrates the Worktree service to the Effect service pattern for safer concurrency and better error handling.
*   **[#13239 Fix System Theme Contrast](https://github.com/anomalyco/opencode/pull/13239):** Addresses the "black on light" dialog issues by ensuring only the app background is transparent, fixing contrast on light themes.

## 5. Feature Request Trends
*   **Integration & Portability:** Users are strongly requesting better integration into existing IDEs, specifically via a **VS Code Extension** (#11176).
*   **Mobile & Web Accessibility:** There is a clear trend toward making OpenCode accessible remotely and on mobile devices, driven by requests for **P2P/WebRTC remote access** (#19013) and **Touch Optimization** (#18767).
*   **Agent Ecosystem:** Developers want a standardized way to share agents, leading to the proposal for a **GitHub-based Agent Marketplace** (#7467).
*   **Voice & Multimodal:** Requests for server-backed TTS (Edge TTS) (#19025) suggest users want richer voice interaction than the browser currently allows.

## 6. Developer Pain Points
*   **Memory Instability:** The "Unbounded RAM Growth" issue (#16697) remains a top frustration, with developers experiencing crashes during long coding sessions.
*   **Web Breakage:** The recent release cycle has caused instability in the Web UI (#19034), disrupting workflows for users relying on the browser interface.
*   **Windows Path Handling:** Recurring issues with permission pathing (#7279) and remote server paths (#17418) indicate that cross-platform path normalization is still a significant friction point.
*   **Theme Contrast:** Visual bugs in light mode (#16470) and system themes (#12184) continue to plague users, making the tool unusable in certain lighting conditions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-03-25

## 1. Today's Highlights
The Qwen Code repository is undergoing significant refinement as it approaches the **v0.14.0** milestone, with a strong focus on Agent Collaboration Protocol (ACP) stability and shell integration. The latest nightly release (`v0.13.0-nightly.20260324`) addresses critical stability issues, including process orphaning in IDEs and PTY race conditions on Linux/macOS. Simultaneously, feature development is accelerating with the introduction of "Follow-up Suggestions" and experimental support for periodic task execution loops.

## 2. Releases
**Version:** `v0.13.0-nightly.20260324.aebe889b3`
**Changelog Highlights:**
*   **ACP Stability:** Resolved issues where subagent-triggered diff tabs would remain stuck in IDEs after user decisions.
*   **Shell Fixes:** Improved handling of Git Bash/MSYS2 environments on Windows and addressed PTY race conditions that caused crashes during shell command execution.
*   **Core Logic:** Enhanced stream validation to accept thought-only responses, preventing errors with thinking models.
[View Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.13.0...v0.13.0-nightly.20260324.aebe889b3)

## 3. Hot Issues
*   **[#2626 (Open)](https://github.com/QwenLM/qwen-code/issues/2626): CLI Crashes on Linux Permission Requests**
    Users on Ubuntu Server are reporting "Terminated" crashes when the shell attempts to prompt for command execution permissions in version 0.13.0.
*   **[#2632 (Open)](https://github.com/QwenLM/qwen-code/issues/2632): Agent "Hallucinations" / Infinite Loops**
    A critical report shows the agent entering a state of non-stop generation ("thinking" or repetitive text) for 10-15 minutes without completing a task, requiring manual intervention.
*   **[#241 (Open)](https://github.com/QwenLM/qwen-code/issues/241): `Shift+Enter` UX Inconsistency**
    High community demand (👍4) to align input behavior with standard coding tools (like Claude/Vim), where `Shift+Enter` inserts a newline instead of sending the message.
*   **[#2640 (Open)](https://github.com/QwenLM/qwen-code/issues/2640): "Always Allow" Permissions Ignored**
    Users are frustrated that "Allow in this project" prompts for shell commands reappear every time within a single session, ignoring previous whitelisting decisions.
*   **[#2629 (Open)](https://github.com/QwenLM/qwen-code/issues/2629): VSCode Extension Regression**
    A recent update broke file reading capabilities, consistently throwing `params must have required property 'file_path'` errors.
*   **[#1897 (Open)](https://github.com/QwenLM/qwen-code/issues/1897): Path Handling with Chinese Characters**
    The agent incorrectly inserts spaces into Chinese paths (e.g., `DNF 私服研究` instead of `DNF私服研究`), causing tool validation failures.
*   **[#1370 (Open)](https://github.com/QwenLM/qwen-code/issues/1370): VSCode Extension Settings Missing**
    Users cannot find a Settings UI or command for the new VSCode extension, leading to confusion about configuration.
*   **[#2605 (Open)](https://github.com/QwenLM/qwen-code/issues/2605): Clipboard Image Paste (Windows)**
    Request to add support for pasting images directly from the clipboard in the Windows CLI.
*   **[#2530 (Open)](https://github.com/QwenLM/qwen-code/issues/2530): API Stream Errors**
    Users connecting via OpenRouter report "Model stream ended with empty response text" and tool calling failures.
*   **[#2619 (Open)](https://github.com/QwenLM/qwen-code/issues/2619): Session Naming in VSCode**
    Request for the ability to rename/chat topics to better organize conversation history.

## 4. Key PR Progress
*   **[#2643 (Open)](https://github.com/QwenLM/qwen-code/pull/2643): `/loop` Command for Periodic Tasks**
    A new feature adding a `/loop` slash command to execute prompts periodically (e.g., every 10 seconds), useful for monitoring or repetitive tasks.
*   **[#2637 (Open)](https://github.com/QwenLM/qwen-code/pull/2637): Human-Readable Permissions UX**
    Improves the permission system by changing cryptic error messages (e.g., `Read(//Users/**)`) into human-readable descriptions and surfacing "deny" rule feedback.
*   **[#2645 (Open)](https://github.com/QwenLM/qwen-code/pull/2645): Windows Shell Detection**
    Fixes environment detection for Git Bash/MSYS2 on Windows, ensuring bash is used instead of `cmd.exe` when appropriate.
*   **[#2628 (Open)](https://github.com/QwenLM/qwen-code/pull/2628): Telegram Channel Integration**
    Introduces a "Channels" feature to interact with Qwen Code via Telegram using the Agent Client Protocol (ACP) bridge.
*   **[#2525 (Open)](https://github.com/QwenLM/qwen-code/pull/2525): Follow-up Suggestions**
    Implementation of "Next-Step Suggestions" (similar to Claude Code), offering actionable buttons like "Run tests" or "Commit this" after a task finishes.
*   **[#2631 (Open)](https://github.com/QwenLM/qwen-code/pull/2631): Stale Diff Confirmation Fix**
    Resolves a bug where IDE diff tabs would remain stuck waiting for confirmation after a user had already accepted/rejected changes triggered by a subagent.
*   **[#2548 (Open)](https://github.com/QwenLM/qwen-code/pull/2548): `/skills` Secondary Picker**
    Enhances the VSCode extension to show a secondary selection menu when using the `/skills` command.
*   **[#2636 (Open)](https://github.com/QwenLM/qwen-code/pull/2636): Gemini Stream Validation Fix**
    Fixes `InvalidStreamError` thrown when models return only "thought" content without text output.
*   **[#2642 (Open)](https://github.com/QwenLM/qwen-code/pull/2642): MCP Trust Permissions Restore**
    Restores the `trust: true` functionality for MCP servers which was broken during the v0.13.0 permission system refactor.
*   **[#2612 (Open)](https://github.com/QwenLM/qwen-code/pull/2612): Kitty Keyboard Protocol Fix**
    Adds a timeout mechanism for keyboard sequences to prevent input buffer corruption, improving IME reliability in integrated terminals.

## 5. Feature Request Trends
*   **Clipboard & Multimedia Support:** There is a sustained trend of requests (e.g., #2605, #1951, #1891) to enable pasting images directly from the clipboard across all platforms (CLI, Windows, VSCode).
*   **UX & Workflow Efficiency:** Users are heavily requesting workflow improvements, including "Follow-up Suggestions" (#2523), Session Renaming (#2619), and customizable System Prompts via settings (#2552).
*   **Platform Specifics:** Windows users are asking for better shell integration (#2605), while Linux users are focused on stability issues (#2626).
*   **Autonomy & Safety:** Several requests point towards features like "Policy Engine" support (#1933) and persistent permission whitelisting (#2335) to balance autonomy with safety.

## 6. Developer Pain Points
*   **Reliability of File System Operations:** A major source of frustration is the agent's inability to handle files correctly, whether it's failing to find valid config files (#2498), hallucinating spaces in non-ASCII paths (#1897), or crashing on read operations (#2505).
*   **Permission Fatigue:** The permission system is currently causing significant friction, with reports of it failing to remember "Always Allow" choices (#2640) and breaking workflows with "Plan Mode" rejections (#2522).
*   **Agent Stability:** Reports of infinite loops (#2632), non-terminating streams (#2632), and crashes on Linux (#2626) indicate that the underlying agent loop and shell handling need robustness improvements.
*   **Input Handling:** Inconsistent keybindings (like `Shift+Enter` in #241) and broken autocomplete/file search interactions (#2518) are disrupting the core coding experience.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*