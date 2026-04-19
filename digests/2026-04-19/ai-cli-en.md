# AI CLI Tools Community Digest 2026-04-19

> Generated: 2026-04-19 00:14 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Charm Crush](https://github.com/charmbracelet/crush)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Community Digest Report: 2026-04-19

## 1. Ecosystem Overview
The AI CLI tools ecosystem is currently navigating a complex phase of **rapid iteration mixed with instability**. While vendors are aggressively pushing "autonomous" capabilities (agentic workflows, persistent background tasks, and advanced reasoning modes), the community is paying a tax of **regressions, platform-specific bugs, and API inconsistencies**. There is a clear bifurcation: tools deeply integrated into specific cloud ecosystems (e.g., Kimi, Qwen) are struggling with authentication transitions and policy changes, while aggregator tools (e.g., OpenCode, Charm Crush) face the challenge of maintaining stability across diverse, shifting provider APIs. The user demand has shifted from simple code completion to reliable multi-step agent orchestration, yet tool reliability remains the primary bottleneck.

## 2. Activity Comparison

| Tool | Issue Activity (Hot Issues) | PR Progress | Release Status | Trending Sentiment |
| :--- | :---: | :---: | :---: | :--- |
| **Claude Code** | 10 Major Issues (High Instability) | 4 Merged | **v2.1.114** (Broken) | ⚠️ **Negative** (Model regression & macOS breakage) |
| **OpenAI Codex** | 10 Major Issues | 7 Active | **v0.122.0-alpha.10** | ⚡ **Feature Heavy** (Goal Mode) / ⚠️ (Resource Usage) |
| **Charm Crush** | 3 Issues | 5 Merged | **Nightly** Only | 🔧 **Refining** (Focus on TUX/UI polish) |
| **Gemini CLI** | 10 Major Issues | 10 Active | None (Stable) | 🐛 **Bug Fixing** (Platform/Process focus) |
| **GitHub Copilot CLI** | 10 Major Issues | 0 Active | **v1.0.27 - v1.0.32** | 😕 **Frustrated** (Rate Limits & UI Regressions) |
| **Kimi Code CLI** | 10 Major Issues | 5 Active | None (Range 1.9.0 - 1.36.0) | 📉 **Declining** (K2.6 model rejection) |
| **OpenCode** | 10 Major Issues | 7 Merged | **v1.4.11** (Infra broken on 1.4.12) | ⚠️ **Mixed** (Fast features, infra gaps) |
| **Qwen Code** | 10 Major Issues | 10 Active | **v0.14.5-nightly** | 🔥 **Crisis** (Auth/Policy transition) |

## 3. Shared Feature Directions
Several requirements are appearing simultaneously across different tool communities, indicating a maturation of developer needs:

*   **Thinking/Reasoning Transparency**
    *   **Tools:** Charm Crush, OpenCode, Kimi Code.
    *   **Specific Need:** Users are demanding granular control over how extended thinking ("thoughts") is displayed. While **Kimi** users want hidden thoughts streamed incrementally, **OpenCode** users want to ensure specific thinking blocks are summarized for cost control, and **Charm Crush** just fixed a bug preventing reasoning tokens from rendering at all.
*   **Authentication & Usage Flexibility**
    *   **Tools:** Qwen, OpenCode, GitHub Copilot, Kimi.
    *   **Specific Need:** As free tiers disappear (Qwen) or rate limits tighten (Copilot), developers are demanding unified ways to track usage (`/usage` command) and easier ways to manage API keys/OAuth flows without friction.
*   **Session Persistence & "Resident" Modes**
    *   **Tools:** OpenAI Codex, Kimi, OpenCode.
    *   **Specific Need:** Moving beyond ephemeral chats. **Codex** is building "Goal Mode" with SQLite persistence, **Kimi** users are requesting "Resident servers," and **OpenCode** is fighting sync bugs to keep sessions alive.
*   **Agent Control & "Yolo" Mode Refinement**
    *   **Tools:** Kimi, Qwen.
    *   **Specific Need:** Refining auto-approval logic. **Kimi** is refining "Yolo" to separate *action* approval from *plan* review, while **Qwen** is hardening Yolo mode to strip dangerous patterns (like `rm -rf`) even when auto-approve is on.

## 4. Differentiation Analysis

| Feature Focus | Leaders | Differentiation Strategy |
| :--- | :--- | :--- |
| **Autonomous Architecture** | **OpenAI Codex** | Building a full OS-level agent runtime (SQLite backing, token accounting, "Goal Mode") rather than just a CLI wrapper. |
| **Universal Integration** | **OpenCode** | Aggregating *every* provider (Claude, OpenAI, Gemini, Local, AWS Bedrock) into a single TUI with unified usage tracking. |
| **Terminal Experience (TUX)** | **Charm Crush** | Prioritizing advanced terminal UI features (CamelHumps navigation, minimal mode, real-time rendering) over agentic features. |
| **Enterprise Ecosystem** | **Claude Code** | Deep integration with AWS Bedrock and enterprise permissioning, though currently plagued by platform bugs. |
| **Consumer AI** | **Kimi / Qwen** | Heavily dependent on proprietary cloud models; currently struggling with the transition from free/growth tiers to paid stability. |

## 5. Community Momentum & Maturity

*   **High Maturity, High Instability:** **Claude Code** and **GitHub Copilot CLI** have the largest user bases but are facing the strongest backlash due to regressions (Opus 4.6 vs 4.7, Copilot Rate Limits). Users are locked in but vocal.
*   **High Innovation Velocity:** **OpenAI Codex** and **OpenCode** are rapidly iterating. Codex is defining the future of persistent agents, while OpenCode is moving fast to bridge the gap between disparate providers.
*   **Niche/Stable:** **Charm Crush** maintains a smaller, highly focused community dedicated to the terminal interface, resulting in fewer "noise" complaints and more focused feature requests.
*   **Transitioning:** **Kimi** and **Qwen** are experiencing growing pains. Qwen's community is currently in crisis due to the discontinuation of free OAuth, leading to a spike in negative sentiment and support tickets.

## 6. Trend Signals
*   **The "Hype Tax" is Real:** Communities are rejecting the newest "Smartest" models (Claude Opus 4.7, Kimi K2.6) in favor of older versions (4.6, K2.5) due to **reasoning latency** and **instruction following regression**. Developers value speed and reliability over theoretical IQ.
*   **Desktop is the New Battleground:** CLI tools are all rushing to Desktop apps (Electron/Tauri), and **Windows support is the major pain point**. Issues like ACL corruption (OpenAI), blank windows (OpenCode), and path resolution (Gemini) suggest the ecosystem is Mac-centric and struggling to adapt to the broader enterprise environment.
*   **Platform Fatigue:** There is a clear trend away from proprietary "agent commands" (like `/buddy`) toward standard protocols (MCP) or flexible configuration. Developers want tools that work *their* way, not another persona to chat with.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Analysis Period: Data through 2026-04-19*

## 1. Top Skills Ranking
*Based on technical interest, issue correlation, and submission freshness.*

### **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** (OPEN)
*   **Functionality:** Enforces typographic quality control (prevents orphan word wraps, widow paragraphs, numbering misalignment).
*   **Highlights:** Addresses a universal "unspoken" pain point in AI-generated documents. High visibility due to applicability across all document generation tasks.
*   **Status:** Open (Proposed)

### **[#83 skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (OPEN)
*   **Functionality:** Meta-skills that evaluate other skills across structure, documentation, and security dimensions.
*   **Highlights:** Reflects a maturing ecosystem moving from "add more features" to "improve quality/security." Ties to **Issue #492** regarding trust boundaries and namespace safety.
*   **Status:** Open (Proposed)

### **[#486 odt](https://github.com/anthropics/skills/pull/486)** (OPEN)
*   **Functionality:** Support for OpenDocument Text (.odt) creation, template filling, and HTML conversion.
*   **Highlights:** Fills a gap for open-source/LibreOffice workflows. Critical for users requiring ISO-standard formats who cannot rely on proprietary DOCX.
*   **Status:** Open (Proposed)

### **[#210 frontend-design (Improvement)](https://github.com/anthropics/skills/pull/210)** (OPEN)
*   **Functionality:** Refactors the frontend-design skill for better clarity, actionability, and instruction-following.
*   **Highlights:** Addresses **Issue #202** (skill-creator best practices) by pivoting from "educational documentation" to "operational instructions," prioritizing token efficiency.
*   **Status:** Open (Proposed)

### **[#181 SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** (OPEN)
*   **Functionality:** Tabular data prediction using SAP's open-source foundation model.
*   **Highlights:** Represents a high-value vertical integration (Enterprise/SAP data) directly within Claude Code.
*   **Status:** Open (Proposed)

---

## 2. Community Demand Trends
*Derived from Issues and PR activity.*

*   **Skill Discovery & Management:**
    *   **Issue #228** (9 comments) is the top-requested feature: **Org-wide skill sharing**. Users are frustrated by the manual download/upload process and want a centralized library or direct sharing links.
    *   **Issue #666** highlights the need to resolve **duplicate skills** across repositories (`skills` vs `claude-plugins-official`).
*   **Quality, Testing, & Security:**
    *   Strong demand for "Meta-Skills" that analyze the ecosystem (**PR #83**).
    *   **Issue #492** raises critical security concerns about namespace impersonation (community skills posing as official Anthropic skills).
    *   **Issue #556** reports a critical bug where `run_eval.py` has a **0% trigger rate**, causing concern over the reliability of skill evaluation.
*   **Persistence & Context:**
    *   Multiple PRs (**#154 shodh-memory**, **#521 record-knowledge**) focus on **persistent context**. Users want Claude to "remember" discoveries across sessions, moving beyond ephemeral conversations.
*   **Platform Stability:**
    *   Issues **#62** (Skills disappeared), **#406**, and **#403** (API 500 errors) indicate instability in skill uploading and management APIs.

---

## 3. High-Potential Pending Skills
*Active discussions or high-value utility; likely to be influential.*

*   **[#541 docx: fix tracked changes collision](https://github.com/anthropics/skills/pull/541)**: A highly specific fix for document corruption. Critical for enterprise users relying on tracked changes.
*   **[#723 testing-patterns](https://github.com/anthropics/skills/pull/723)**: A comprehensive testing stack (Trophy model, AAA patterns, React testing). High value for dev workflows.
*   **[#806 sensory (macOS Automation)](https://github.com/anthropics/skills/pull/806)**: Native automation via `osascript`/AppleScript. Moves away from brittle screenshot-based interaction.
*   **[#147 codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)**: Addresses "technical debt" and "bloat" detection—highly valuable for maintaining large projects.

---

## 4. Skills Ecosystem Insight
The community is shifting from ad-hoc skill creation to **infrastructure, standardization, and enterprise-grade reliability**, demanding better management tools, quality assurance, and persistent memory systems.

---

# Claude Code Community Digest: 2026-04-19

## Today's Highlights
The community is facing significant instability following the latest releases. Multiple reports indicate that **v2.1.114 has broken compatibility with macOS 11 (Big Sur)**, causing crashes due to missing dyld symbols. Simultaneously, a massive discussion (529+ comments) has erupted regarding the usability of Opus 4.7 for complex engineering tasks, with developers claiming the February updates have introduced severe regressions in model reasoning and instruction following compared to Opus 4.6.

## Releases
**v2.1.114** is the latest release. It includes a single fix:
- **Fixed:** A crash in the permission dialog when an agent teammate requested tool permission.

*Note: While this release fixed a specific crash, it inadvertently introduced breaking changes for macOS 11 users (see Hot Issues).*

## Hot Issues
Here are the 10 most noteworthy issues from the last 24 hours:

1. **[#42796](https://github.com/anthropics/claude-code/issues/42796) - MODEL: Claude Code unusable for complex tasks (👍 1963)**
   *Status:* CLOSED
   The most active thread in recent history (529 comments). Users report that the February updates severely degraded Opus's ability to handle complex engineering tasks.

2. **[#50456](https://github.com/anthropics/claude-code/issues/50456) - Auto-updater broke Claude Code on macOS 11 Big Sur**
   *Status:* OPEN
   Reports indicate the latest update silently broke installations on macOS 11, likely due to native binary compilation requiring macOS 13.0+.

3. **[#50546](https://github.com/anthropics/claude-code/issues/50546) - Opus 4.7 ignores explicit user directives**
   *Status:* OPEN
   Urgent report claiming Opus 4.7 acknowledges instructions but immediately ignores them during execution, a critical regression for workflow reliability.

4. **[#38896](https://github.com/anthropics/claude-code/issues/38896) - Rate limit reached despite 0% usage**
   *Status:* OPEN
   Users on Opus 4.6 are unable to make requests even with empty context and 0% usage bars, indicating a potential billing or metering backend bug.

5. **[#40281](https://github.com/anthropics/claude-code/issues/40281) - Dispatch: SendUserMessage tool not loadable**
   *Status:* OPEN
   Cowork agents generate responses, but the `SendUserMessage` tool is unavailable, preventing responses from reaching the Dispatch UI.

6. **[#39027](https://github.com/anthropics/claude-code/issues/39027) - Background task notifications trigger autonomous API calls**
   *Status:* OPEN
   A high-priority bug where background task notifications trigger synthetic user messages, causing the model to execute tools autonomously as if it were the user.

7. **[#41530](https://github.com/anthropics/claude-code/issues/41530) - Skills broken in 2.1.88**
   *Status:* CLOSED
   Custom skills (`.claude/skills/*/SKILL.md`) stopped loading in v2.1.88. Users had to downgrade to v2.1.87 to restore functionality.

8. **[#14200](https://github.com/anthropics/claude-code/issues/14200) - Feature: Add rules support to Plugins (👍 58)**
   *Status:* OPEN
   A highly requested enhancement to allow custom rules enforcement within the plugin system.

9. **[#28795](https://github.com/anthropics/claude-code/issues/28795) - Feature: AWS Bedrock + SSO in remote-control (👍 53)**
   *Status:* OPEN
   Enterprise users are requesting official support for AWS Bedrock authentication integration.

10. **[#45732](https://github.com/anthropics/claude-code/issues/45732) - Bring Back /buddy**
    *Status:* OPEN
    A passionate plea to restore the `/buddy` command, with users providing a "case study" on its value for developer oversight.

## Key PR Progress
1. **[#50301](https://github.com/anthropics/claude-code/pull/50301) - Add flappy-claude terminal game**
   A community contribution adding a Flappy Bird clone via a `/flappy-claude` slash command using Python and curses.

2. **[#50293](https://github.com/anthropics/claude-code/pull/50293) - Fix: ipset add duplicate entry errors**
   Infrastructure fix using the `-exist` flag to prevent firewall script failures during re-runs.

3. **[#46024](https://github.com/anthropics/claude-code/pull/46024) - Docs: Add prompt caching section**
   Improves documentation regarding `--exclude-dynamic-system-prompt-sections` to optimize cache reuse.

4. **[#50565](https://github.com/anthropics/claude-code/pull/50565) - Copilot/fix configuration**
   Active maintenance on the Copilot integration configuration.

## Feature Request Trends
Based on issue activity, the community is strongly requesting:
*   **Platform Stability:** A clear demand to fix regressions in newer models (Opus 4.7 vs 4.6) and restore the reliability of the "Feb updates."
*   **Plugin Extensibility:** High interest in features like "Rules support for Plugins" (#14200) and the return of the `/buddy` command (#45732).
*   **Enterprise Auth:** Continued requests for AWS Bedrock and SSO support (#28795).

## Developer Pain Points
*   **Platform Compatibility:** The v2.1.114 release has created a "broken on macOS 11" situation, blocking users from upgrading.
*   **Model Reliability:** There is a sentiment that Opus 4.7 is "literally just a retard" (sic) and "trash" compared to 4.6, with specific complaints about ignoring explicit instructions.
*   **Tool Availability:** Critical tools like `SendUserMessage` are failing to load in Dispatch, breaking agent workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-19

## 1. Today's Highlights
The OpenAI Codex ecosystem is seeing significant architectural shifts with the introduction of "Goal Mode" in the CLI, designed to handle persistent, token-budget-aware autonomous tasks. On the desktop front, the community is highly vocal regarding performance regressions on both macOS and Windows, specifically concerning CPU usage and UI responsiveness, while a new release (`rust-v0.122.0-alpha.10`) attempts to address stability.

## 2. Releases
*   **rust-v0.122.0-alpha.10**: A minor alpha release has been pushed. Specific changelog details were not provided in the feed, but users on Intel Macs are hopeful this addresses UI rendering artifacts found in previous `.0.122` versions. [Release Link](https://github.com/openai/codex/releases)

## 3. Hot Issues

*   **[#10410] macOS Intel (x86_64) Support** [CLOSED]
    *   **Why it matters:** After months of requests, the issue regarding support for Intel Macs was finally closed.
    *   **Reaction:** Massive community engagement (288 thumbs up). While closed, users are still reporting lingering GUI issues on Intel architectures in other threads.
    *   [Link](https://github.com/openai/codex/issues/10410)

*   **[#11981] 100% CPU Usage on macOS** [OPEN]
    *   **Why it matters:** A critical performance bug where the app consumes max CPU even with a single agent.
    *   **Reaction:** Users are frustrated as this impacts battery life and system responsiveness, calling it a "resource hog."
    *   [Link](https://github.com/openai/codex/issues/11981)

*   **[#18264] 8-Second Message Delay** [CLOSED]
    *   **Why it matters:** Users experienced significant latency when sending messages in new sessions.
    *   **Reaction:** High urgency (29 comments) led to a quick close, indicating a hotfix was likely deployed in version `26.415.21839`.
    *   [Link](https://github.com/openai/codex/issues/18264)

*   **[#18258] "Computer Use" Plugin Unavailable** [OPEN]
    *   **Why it matters:** A persistent bug where the app fails to load bundled plugins correctly.
    *   **Reaction:** Users have resorted to manual config workarounds (`features.apps = true`) to restore functionality while waiting for a patch.
    *   [Link](https://github.com/openai/codex/issues/18258)

*   **[#15777] Windows Sandbox ACL Corruption** [OPEN]
    *   **Why it matters:** The Windows sandbox installer is corrupting Access Control Lists (ACL) on `AppData`.
    *   **Reaction:** Security-conscious users are alarmed; 23 comments discuss permissions errors preventing the app from running correctly.
    *   [Link](https://github.com/openai/codex/issues/15777)

*   **[#17322] Windows App Hit-Testing & Exit Issues** [OPEN]
    *   **Why it matters:** Closing the window (X) doesn't exit the app on Windows 11, and the sidebar "New Chat" button has hit-detection issues.
    *   **Reaction:** Users report having to force-kill the process via Task Manager, damaging the UX flow.
    *   [Link](https://github.com/openai/codex/issues/17322)

*   **[#12773] Multi-Window Support for macOS** [OPEN]
    *   **Why it matters:** Developers want to view code and chat simultaneously.
    *   **Reaction:** A top feature request (20 thumbs up) arguing that single-window restriction limits productivity compared to other IDEs.
    *   [Link](https://github.com/openai/codex/issues/12773)

*   **[#18467] macOS CPU Spike & Lag (Latest Update)** [OPEN]
    *   **Why it matters:** A new report linking the latest update directly to system-wide lag and fans spinning up.
    *   **Reaction:** Confirms that the CPU issues (#11981) are affecting a broad user base, likely a regression in the `26.4xx` build series.
    *   [Link](https://github.com/openai/codex/issues/18467)

*   **[#18357] "Out of Messages" for Pro Users** [OPEN]
    *   **Why it matters:** Users on the 5x Pro plan are incorrectly seeing limit messages immediately after upgrading.
    *   **Reaction:** High frustration; users are effectively blocked from using the service they just paid for.
    *   [Link](https://github.com/openai/codex/issues/18357)

*   **[#10695] GitHub Fix CI Skill Broken** [OPEN]
    *   **Why it matters:** The sandbox cannot access `GH_TOKEN` or keychain, breaking automated CI fixes.
    *   **Reaction:** Highlights a fundamental gap in how the desktop sandbox handles local secrets compared to the CLI.
    *   [Link](https://github.com/openai/codex/issues/10695)

## 4. Key PR Progress

*   **[#18076 - #18077] Goal Mode Stack (5 PRs)** [OPEN]
    *   **Feature:** Introduction of a complete "Goal Mode" runtime. This adds persistence (SQLite), token accounting, and budget stopping to allow agents to work toward long-term goals autonomously.
    *   **Impact:** Moves Codex from a chat interface to a persistent task agent.
    *   [Core Runtime](https://github.com/openai/codex/pull/18076) | [TUI/UX](https://github.com/openai/codex/pull/18077)

*   **[#17578 - #17580] Persistent Thread Timers & Queues** [CLOSED]
    *   **Feature:** Implementation of durable SQLite storage for timers and queued external messages. Includes `codex queue --thread` CLI commands.
    *   **Impact:** Enables time-based triggers and delayed message injection into threads.
    *   [Storage](https://github.com/openai/codex/pull/17581) | [Delivery](https://github.com/openai/codex/pull/17580)

*   **[#18500] Support `codex app` on macOS (Intel) and Windows** [OPEN]
    *   **Fix:** Updates the `codex app` command to be platform-aware, ensuring Intel Mac users don't accidentally download the Apple Silicon DMG.
    *   **Impact:** Resolves installation confusion for the Intel user base.
    *   [Link](https://github.com/openai/codex/pull/18500)

*   **[#18504] Rebrand "Guardian" to "Auto-review"** [OPEN]
    *   **Change:** Canonical configuration naming for the auto-review feature is being updated from legacy `guardian_*` terms to `auto_review_*`.
    *   **Impact:** Cleans up API and config consistency.
    *   [Link](https://github.com/openai/codex/pull/18504)

*   **[#18413] Add Namespaces to Dynamic Tools** [OPEN]
    *   **Feature:** Allows dynamic tools to carry explicit namespaces through the app-server protocol.
    *   **Impact:** Improves tool organization and prevents naming collisions in complex tool chains.
    *   [Link](https://github.com/openai/codex/pull/18413)

*   **[#18499] Fix Plugin Cache Panic** [OPEN]
    *   **Fix:** Resolves a crash that occurred after long-running tasks (11h+) when the cache path was normalized incorrectly.
    *   **Impact:** Improves stability for heavy users.
    *   [Link](https://github.com/openai/codex/pull/18499)

*   **[#18441] Avoid False Shell Snapshot Warnings** [OPEN]
    *   **Fix:** Corrects logic in temp file handling during shell snapshot creation to prevent spurious cleanup warnings.
    *   **Impact:** Reduces log noise for developers debugging shell interactions.
    *   [Link](https://github.com/openai/codex/pull/18441)

## 5. Feature Request Trends
*   **Platform Parity:** Strong demand for feature parity between macOS Silicon and Intel/Windows versions.
*   **Multi-Window UI:** Users are requesting the ability to detach chats or open multiple project windows simultaneously.
*   **Refined Control:** Several requests for better control over agent delegation (e.g., "Orchestrator mode") and approvals for MCP servers.
*   **Context Management:** Requests for better handling of context windows to prevent "ran out of room" errors early in sessions.

## 6. Developer Pain Points
*   **Windows Stability:** The Windows experience is described as fragile, with issues ranging from ACL corruption (Permissions) to the app not closing properly.
*   **Resource Usage:** High CPU usage and battery drain on macOS are recurring themes, making the tool difficult to run on laptops for long periods.
*   **Sandbox Limitations:** The sandbox environment is causing friction, specifically regarding access to local environment variables (GH_TOKEN) and git operations in read-only modes.
*   **Rate Limiting Confusion:** Users upgrading to Pro plans are frustrated by incorrect "out of messages" errors or confusing UI regarding their 5x limits.

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest: 2026-04-19

## 1. Today's Highlights
Development activity remains focused on UI refinement and TUX (Terminal User Experience) fixes. Notably, the "CamelHumps" navigation feature has been proposed to enhance code editing efficiency, while significant fixes for streaming reasoning display and auto-follow scrolling are under review. The community is also discussing customization limits regarding screen real estate and model configuration overrides.

## 2. Releases
No new stable releases were published in the last 24 hours; only the `nightly` build is available.

## 3. Hot Issues
*Note: Only 3 issues were updated in the last 24 hours; all are listed below.*

*   **[#2649 Custom model ID overrides](https://github.com/charmbracelet/crush/issues/2649)**
    *   **Why it matters:** Users relying on custom configurations for specific providers are finding that embedded catalog aliases override their manual `crush.json` settings, even when auto-updates are disabled. This breaks reproducibility for developers trying to pin specific model versions.
*   **[#2648 Status line customization](https://github.com/charmbracelet/crush/issues/2648)**
    *   **Why it matters:** As TUI applications grow complex, screen real estate is at a premium. This request highlights the need for a "minimal mode" to hide header branding and maximize the viewing area for code and chat output on smaller terminals.
*   **[#1248 Context Compaction Strategy](https://github.com/charmbracelet/crush/issues/1248)** (CLOSED/Updated)
    *   **Why it matters:** Users are requesting that context truncation happen from the *middle* of the conversation rather than the beginning. This preserves recent context and the initial system prompt, which is often critical for maintaining instruction adherence during long sessions.

## 4. Key PR Progress
*Note: Only 5 PRs were updated in the last 24 hours; all are listed below.*

*   **[#2646 feat(ui): add CamelHumps editing](https://github.com/charmbracelet/crush/pull/2646)**
    *   **Description:** Introduces CamelHump-aware navigation for `ctrl` key combinations (left/right/backspace/delete). This allows users to jump between sub-word segments (e.g., jumping from `Camel` to `Humps` in `CamelHumps`) while keeping `alt` keys for whole-word navigation.
*   **[#2643 fix: enable real-time reasoning display](https://github.com/charmbracelet/crush/pull/2643)**
    *   **Description:** Fixes a critical UI bug where "thinking" or "reasoning" tokens (from models like Claude/DeepSeek) were not rendering during streaming. The PR addresses a render cache key issue that prevented the TUI from updating dynamically.
*   **[#2647 fix(ui): fix AtBottom() early exit](https://github.com/charmbracelet/crush/pull/2647)**
    *   **Description:** Resolves an issue where "auto-follow" mode would desynchronize, causing the UI to stop scrolling automatically even when the user manually returned to the bottom of the output.
*   **[#2579 feat(tool): add `ask-user-questions` tool](https://github.com/charmbracelet/crush/pull/2579)**
    *   **Description:** Continues work on a system tool that allows the AI agent to prompt the user for clarification mid-task, improving interactive workflows.
*   **[#2640 feat(hyper): use openai-compatible endpoint](https://github.com/charmbracelet/crush/pull/2640)** (CLOSED)
    *   **Description:** Merged support for the Hyper provider via the OpenAI-compatible endpoint, expanding the range of supported backends.

## 5. Feature Request Trends
Based on recent activity, the community is pushing for:
*   **Editor Efficiency:** A strong demand for advanced text manipulation in the terminal, specifically "CamelHumps" navigation (PR #2646).
*   **UI Minimalism:** Users want the ability to hide decorative elements (status lines, headers) to reclaim vertical space for code (Issue #2648).
*   **Context Management:** Developers are interested in smarter context window management, specifically "middle-out" truncation to keep system prompts and recent messages while dropping middle conversation history (Issue #1248).

## 6. Developer Pain Points
*   **Configuration Overrides:** Developers are frustrated that custom provider configurations are being silently overridden by the internal catalog, reducing the utility of manual config files (Issue #2649).
*   **Layout Constraints:** On smaller screens, the split between input, status, and output is cumbersome, leading to requests for hideable UI chrome (Issue #2648).
*   **Scrolling Desync:** The auto-scroll mechanism in the TUI has been unreliable, requiring manual intervention to see new output (PR #2647).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-19

## Today's Highlights
The community is actively addressing reliability and performance concerns in the latest build, with a strong focus on fixing process management and UI responsiveness. Several high-quality Pull Requests from contributors aim to resolve signal handling in child processes and environment variable configuration. Meanwhile, issues regarding authentication consistency—specifically around Google AI Pro subscriptions—and terminal rendering artifacts remain top discussion points.

## Releases
No new releases have been published in the last 24 hours.

## Hot Issues
1.  **[API Error Requested entity was not found #12441](https://github.com/google-gemini/gemini-cli/issues/12441)**
    *   **Why it matters:** A persistent 404 error is blocking users from making API requests despite correct configuration.
    *   **Reaction:** High engagement (16 comments), indicating a widespread or critical blocker.

2.  **[Google AI Pro subscription cannot be used #25644](https://github.com/google-gemini/gemini-cli/issues/25644)**
    *   **Why it matters:** Critical authentication failure where valid Google AI Pro subscriptions result in 403 PERMISSION_DENIED errors, while API keys work fine.
    *   **Reaction:** Users are frustrated that the "Login with Google" flow does not correctly entitle their subscription.

3.  **[Gemini failed to open in a temporary path A:\ #25216](https://github.com/google-gemini/gemini-cli/issues/25216)**
    *   **Why it matters:** Highlights a critical crash (`EISDIR`) on Windows when the tool attempts to resolve specific temporary paths.
    *   **Reaction:** Technical deep-dive into Node.js `fs/promises` behavior on Windows environments.

4.  **[Shell command execution gets stuck #25166](https://github.com/google-gemini/gemini-cli/issues/25166)**
    *   **Why it matters:** The CLI incorrectly reports "Waiting input" for simple, non-interactive shell commands, causing the workflow to hang.
    *   **Reaction:** 2 upvotes; confirms issues with command state detection.

5.  **[Path must be within one of the workspace directories #17049](https://github.com/google-gemini/gemini-cli/issues/17049)**
    *   **Why it matters:** Even with "Yolo mode" enabled, the tool refuses to access folders outside the project directory (e.g., for PATH modifications), limiting automation capabilities.
    *   **Reaction:** Users expect sandbox modes to behave differently regarding file system access.

6.  **[Gemini CLI keeps asking for permissions #24916](https://github.com/google-gemini/gemini-cli/issues/24916)**
    *   **Why it matters:** A regression where "Allow for all future sessions" fails to persist, requiring repeated re-authorization for the same files.
    *   **Reaction:** Significant friction point for daily workflow.

7.  **[Thick black border at the top and bottom of prompt bar #24915](https://github.com/google-gemini/gemini-cli/issues/24915)**
    *   **Why it matters:** Visual regression affecting the UI layout.
    *   **Reaction:** Users are reporting aesthetic degradation in the terminal interface.

8.  **[Subagent recovery after MAX_TURNS hides interruption #22323](https://github.com/google-gemini/gemini-cli/issues/22323)**
    *   **Why it matters:** Subagents report "Success" when they actually hit the turn limit and failed to complete the task. This masks real failures from the user.
    *   **Reaction:** Critical for agent reliability; 2 upvotes from maintainers.

9.  **[Running SSH the text is scrambled #24202](https://github.com/google-gemini/gemini-cli/issues/24202)**
    *   **Why it matters:** The TUI is unusable when run over SSH on Windows due to rendering corruption.
    *   **Reaction:** Highlights a gap in terminal compatibility testing.

10. **[Assess impact of AST-aware file reads #22745](https://github.com/google-gemini/gemini-cli/issues/22745)**
    *   **Why it matters:** An internal initiative to improve codebase navigation. AST awareness could drastically reduce token noise and improve precision.
    *   **Reaction:** Strategic direction for future agent capabilities.

## Key PR Progress
1.  **[fix(cli): forward termination signals to relaunched child process #25642](https://github.com/google-gemini/gemini-cli/pull/25642)**
    *   **Change:** Fixes a bug where killing the parent process left orphaned child processes running.
    *   **Impact:** Improves system stability and resource management.

2.  **[fix(shell): throttle text output updates to prevent UI jank #25643](https://github.com/google-gemini/gemini-cli/pull/25643)**
    *   **Change:** Introduces throttling for high-volume shell output to prevent React re-renders on every data event.
    *   **Impact:** Fixes UI freezes during builds or tests with large output.

3.  **[feat(cli): add /bug-memory command #25639](https://github.com/google-gemini/gemini-cli/pull/25639)**
    *   **Change:** Adds V8 heap snapshot capture via `/bug-memory` and auto-captures if RSS exceeds 2GB.
    *   **Impact:** Significant enhancement for debugging memory leaks in production.

4.  **[fix(config): coerce env var strings to booleans #25641](https://github.com/google-gemini/gemini-cli/pull/25641)**
    *   **Change:** Fixes `settings.json` to correctly parse environment variables (e.g., `"true"` to boolean `true`).
    *   **Impact:** Resolves configuration errors for users relying on `.env` files.

5.  **[feat(cli): add Machine Hostname to footer #25637](https://github.com/google-gemini/gemini-cli/pull/25637)**
    *   **Change:** Displays the machine hostname in the CLI footer.
    *   **Impact:** Useful quality-of-life improvement for developers managing multiple remote environments.

6.  **[Refactor: Eliminate `no-unsafe-return` suppressions #20668](https://github.com/google-gemini/gemini-cli/pull/20668)**
    *   **Change:** Removes unsafe type suppressions in favor of strict runtime validation.
    *   **Impact:** Improves overall code safety and type integrity.

7.  **[fix(cli): use ansi-derived semantic colors #25223](https://github.com/google-gemini/gemini-cli/pull/25223)**
    *   **Change:** Corrects ANSI themes to use semantic color names instead of hardcoded hex values.
    *   **Impact:** Fixes contrast issues in terminal themes.

8.  **[fix(cli): preserve legacy auto memory behavior #25625](https://github.com/google-gemini/gemini-cli/pull/25625)**
    *   **Change:** Restores backward compatibility for the `experimental.memoryManager` setting.
    *   **Impact:** Prevents breaking changes for existing users upgrading to newer versions.

9.  **[Fix/windows ripgrep eftype #25378](https://github.com/google-gemini/gemini-cli/pull/25378)**
    *   **Change:** Addresses `spawn EFTYPE` errors on Windows by checking binary architecture compatibility.
    *   **Impact:** Restores search functionality for Windows users on mixed architectures.

10. **[feat(core): add Zod runtime validation for ConversationRecord #25524](https://github.com/google-gemini/gemini-cli/pull/25524)**
    *   **Change:** Implements Zod schemas for chat logs.
    *   **Impact:** Part of a GSoC 2026 initiative to standardize chat-log-to-eval translation pipelines.

## Feature Request Trends
*   **Memory & Context Management:** There is a strong push for smarter memory handling, specifically distinguishing between global user preferences and project-specific context (Issues #22819, #22809).
*   **Workspace Flexibility:** Users are requesting more granular control over workspace boundaries, particularly the ability to modify system paths or install dependencies outside the strict project directory (Issue #17049).
*   **AST Integration:** Developers are interested in leveraging Abstract Syntax Trees (AST) for more accurate code reading and mapping, signaling a desire for "smart" codebase navigation rather than raw text reading (Issue #22745).

## Developer Pain Points
*   **Platform Instability:** Windows users continue to face hurdles, ranging from path resolution errors (`A:\`) to binary spawning errors (`ripgrep`) and UI scrambling over SSH.
*   **Configuration Drift:** A recurring theme is the tool's configuration being brittle—specifically environment variables being treated as strings instead of booleans/numbers, and permission settings not persisting between sessions.
*   **Process Reliability:** Issues regarding stuck processes (both shell commands hanging and child processes not terminating) suggest that the CLI's process management layer needs attention.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-19

## 1. Today's Highlights

The community is currently highly active, primarily reporting regressions and friction points in the latest v1.0.27-v1.0.32 releases. The most significant discussions revolve around **Model Capabilities**, where users report that the GPT-5.4 model picker hides the `xhigh` (extra high) reasoning level despite it still functioning technically. Additionally, there is widespread frustration regarding **Rate Limiting** (HTTP 429s) affecting paid Pro+ users and inconsistent **UI/UX changes** in recent versions, such as missing agent names and new prompt visualizations.

## 2. Releases

**No new releases** in the last 24 hours. The community is currently running on versions **1.0.27 through 1.0.32**.

## 3. Hot Issues

Here are the top 10 issues driving community discussion today:

1.  **[GPT-5.4 /model picker hides Extra High](https://github.com/github/copilot-cli/issues/2725)** (*21 comments*)
    Users on v1.0.27+ noticed that the `/model` selector for GPT-5.4 only shows Low/Medium/High effort levels, despite the `xhigh` parameter still working if manually configured. This UI limitation is blocking access to maximum reasoning capabilities for power users.

2.  **[Feature Request: /ask mode](https://github.com/github/copilot-cli/issues/92)** (*9 comments*)
    A long-standing request with renewed interest. Users want a distinct `/ask` command that queries the LLM without triggering "Agent Mode" (which automatically edits code or runs terminal commands), providing a safer way to get quick answers.

3.  **[Copilot Update Command Is Not Working (Windows)](https://github.com/github/copilot-cli/issues/2583)** (*8 comments*)
    Users on Windows (v1.0.20+) report that `copilot update` and `/update` are failing, breaking the standard update workflow.

4.  **[Implement proper HTTP retry logic for 429 responses](https://github.com/github/copilot-cli/issues/2760)** (*5 comments*)
    The CLI is exhibiting aggressive retry behavior when rate-limited, closing connections and retrying immediately without backoff. This creates a loop of rapid failures that exacerbates rate limiting issues.

5.  **[Copilot Pro+ Weekly Rate Limit Not Resetting](https://github.com/github/copilot-cli/issues/2769)** (*5 comments*)
    Paid users are reporting that their weekly rate limits are not resetting at the expected time, preventing usage despite having an active token allocation.

6.  **[xhigh reasoning removed for gpt-5.4 and gpt-5.3-codex](https://github.com/github/copilot-cli/issues/2739)** (*2 comments*)
    Users are expressing strong dissatisfaction ("unacceptable") regarding the removal of the extra high reasoning tier for the latest models, citing reduced utility.

7.  **[Persistent Global 429 Rate Limit on Paid Pro+](https://github.com/github/copilot-cli/issues/2742)** (*2 comments*)
    Reports of "critical" persistent rate limiting across all interfaces for paid users, lasting for hours even after machine reboots.

8.  **[Agent name is not visible anymore (v1.0.31)](https://github.com/github/copilot-cli/issues/2777)** (*2 comments*)
    A regression in v1.0.31 removed the visual indicator showing which active agent is running, making it harder for users to track context.

9.  **[Feature Request: /btw command](https://github.com/github/copilot-cli/issues/2078)** (*2 comments, 26 👍*)
    A high-demand feature request to add a `/btw` command, likely for context-aware chatter or side-queries without disrupting the main task flow.

10. **[Improve rate limit UI for all types of rate limit](https://github.com/github/copilot-cli/issues/2827)** (*1 comment*)
    Users are requesting better visibility into current quota usage (e.g., a progress bar) rather than being surprised by hard blocks when the limit is reached.

## 4. Key PR Progress

**No Pull Requests** were updated or merged in the last 24 hours. Development focus appears to be on triaging the influx of issues regarding rate limiting and model configuration.

## 5. Feature Request Trends

*   **Granular Control over Agent Behavior:**
    There is a clear push for commands that limit the AI's scope.
    *   **`/ask`**: Query-only mode without file edits or terminal execution.
    *   **`/btw`**: A command for conversational context or "chitchat."
*   **UI Customization & Rendering:**
    *   **Themes:** Requests for custom color palettes beyond just dark/light modes.
    *   **Verbose Output:** Toggles to collapse/expand agent "thinking" and tool calls for cleaner terminals.
    *   **Clipboard Support:** Enabling Ctrl+V for image input (currently only drag-and-drop works).
*   **MCP (Model Context Protocol) Management:**
    Users want easier toggles for MCP servers, similar to how Skills are managed.

## 6. Developer Pain Points

*   **Rate Limiting & Subscription Clarity:** The biggest pain point today is the inconsistency of rate limiting. Paid users (Pro+) are encountering 429 errors that don't reset correctly or retry too aggressively, making the tool unreliable during heavy usage.
*   **Regression Anxiety:** Recent updates (1.0.27 -> 1.0.31) have introduced regressions, such as breaking the update mechanism on Windows, hiding the agent name, and removing UI elements (status bars/themes) that users preferred.
*   **Configuration Drift:** Users are frustrated that switching models via `/model` resets their `effortLevel` configuration, requiring manual adjustments to maintain their preferred reasoning depth.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-04-19

## 1. Today's Highlights
Today's activity highlights significant friction points regarding the new Kimi K2.6 model, with users reporting severe usability issues and API errors (`invalid temperature`). Concurrently, the community is actively pushing for workflow improvements, specifically addressing subagent working directory inheritance and streamlining the "yolo" mode to respect plan review stages. A critical bug fix regarding large payload streaming was also merged to improve CLI responsiveness.

## 2. Releases
**No new releases published in the last 24 hours.**
*Note: Users are currently running versions ranging from 1.9.0 to 1.36.0 based on issue reports.*

## 3. Hot Issues
Here are the top issues updated in the last 24 hours:

*   **[#1925 OPEN] Kimi K2.5 vs K2.6**
    *   **Why it matters:** User feedback on the latest K2.6 model is highly critical. Reports suggest the "thinking" process is drowning out creativity and increasing hallucinations, with a perceived loss of model personality.
    *   **Reaction:** Users are requesting the ability to revert to K2.5.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1925)

*   **[#1924 OPEN] API Bug: invalid temperature**
    *   **Why it matters:** A critical regression where the API returns `invalid temperature: only 0.6 is allowed` for *all* temperature values, including 0.6 itself.
    *   **Reaction:** Confirmed across raw curl, OpenAI SDK, and Hermes Agent.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1924)

*   **[#1923 OPEN] Bad Interactivity**
    *   **Why it matters:** Users are frustrated by extensive internal reasoning that is hidden, surfacing only minimal responses. This makes error detection and review difficult.
    *   **Reaction:** Request for incremental streaming of reasoning steps.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1923)

*   **[#1931 OPEN] Subagent does not inherit parent's current working directory**
    *   **Why it matters:** Breaks workflows involving Git worktrees. When a root agent `cd`s into a subdirectory, subagents still spawn in the root.
    *   **Reaction:** Functional blocker for complex project structures.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1931)

*   **[#1927 OPEN] Subagent wireless loop**
    *   **Why it matters:** Reports of infinite loops where the subagent reads the same file hundreds of times.
    *   **Reaction:** Critical stability bug on macOS (Darwin 25.4.0).
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1927)

*   **[#1934 OPEN] Feature Request: Voice Input Mode**
    *   **Why it matters:** Users want parity with competitors like Claude Code, requesting hands-free voice interaction for brainstorming.
    *   **Reaction:** New feature request, no comments yet.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1934)

*   **[#1930 OPEN] Support for Allegretto "Professional Database"**
    *   **Why it matters:** Users want CLI access to high-value financial data (Tonghuashun/Tianyancha) available on the web.
    *   **Reaction:** Feature request for data integration.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1930)

*   **[#1929 CLOSED] Resident server**
    *   **Why it matters:** Users want a persistent session server (similar to `codex app server`) to avoid re-authentication and context loading.
    *   **Reaction:** Closed, but summary suggests demand for stateful CLI experiences.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1929)

*   **[#1916 OPEN] Win11 WSL2 Support**
    *   **Why it matters:** Login flow is broken for users running Ubuntu-24.04 under Windows WSL2.
    *   **Reaction:** Environment-specific bug blocking adoption.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1916)

*   **[#1672 CLOSED] Plan mode experience in VSCode**
    *   **Why it matters:** Users criticized the disjointed workflow of generating plan MD files rather than inline chat interaction.
    *   **Reaction:** Strong negative feedback on the "plan" mode UX.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1672)

## 4. Key PR Progress
*   **[#1933 OPEN] feat(subagents): add work_dir override for subagent dispatch**
    *   **Details:** Adds an optional `work_dir` parameter to the Agent tool, allowing subagents to spawn in the correct directory (Fix for #1931).
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1933)

*   **[#1928 OPEN] fix(streaming): avoid replaying large tool call payloads**
    *   **Details:** Targets the lag issue caused by re-sending full tool-call arguments on every update. Significantly improves performance for file operations.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1928)

*   **[#1932 OPEN] refactor(yolo): refine yolo scope to preserve plan review**
    *   **Details:** Adjusts `--yes` mode so it auto-approves *actions* but still requires user review for *plans*, preventing accidental acceptance of massive changes.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1932)

*   **[#1935 OPEN] feat(hooks): support updatedInput for transparent command rewriting**
    *   **Details:** Adds `hookSpecificOutput.updatedInput` to PreToolUse hooks, allowing developers to rewrite commands transparently.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1935)

*   **[#1917 CLOSED] revert: undo accidentally-pushed anthropic thinking effort refactor**
    *   **Details:** A hotfix revert of commits that bypassed review, affecting "thinking effort" levels (xhigh/max) and adaptive logic.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1917)

## 5. Feature Request Trends
Based on the latest issues, the community is strongly requesting:
1.  **Model Rollback/Selection:** Explicit ability to switch between Kimi K2.5 and K2.6 due to dissatisfaction with the latest model's "thinking" behavior.
2.  **Workflow & Session Management:** Requests for persistent "resident servers" to maintain state and faster voice input capabilities.
3.  **Subagent Logic Improvements:** Better handling of working directories and preventing infinite loops during file operations.
4.  **Streaming Transparency:** Making the model's internal reasoning process visible incrementally rather than hiding it until completion.

## 6. Developer Pain Points
*   **API Instability:** The `invalid temperature` error is blocking developers using the API programmatically (SDK/Curl).
*   **Agent Looping:** Subagents entering infinite loops reading files is consuming compute resources and halting progress.
*   **Opaque Reasoning:** The lack of streaming for the model's "thought process" makes debugging difficult and feels unresponsive.
*   **Cross-Platform Auth:** Authentication issues persist in specific environments like Windows WSL2.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-19

## 1. Today's Highlights
The **v1.4.11** release was deployed to address critical routing and session synchronization failures, though a distribution error for **v1.4.12** caused significant installation friction via Homebrew (404 errors). Community attention remains sharply focused on stability issues, specifically "frozen" TUI states, missing UI rendering in the Desktop client on macOS Tahoe, and persistent input lag in the terminal interface.

## 2. Releases
**v1.4.11 (Latest)**
*   **Workspace Routing:** Fixed a core issue where requests were being routed to the incorrect workspace instance.
*   **Share Sync:** Stopped sync attempts for sessions that were never shared, reducing unnecessary background overhead.
*   *Note:* v1.4.12 was tagged but assets were not uploaded to GitHub, causing Homebrew installation failures for users attempting to upgrade.

## 3. Hot Issues

**Critical Install & Regression Bugs**
*   [#23315](https://github.com/anomalyco/opencode/issues/23315) **No release for version 1.4.12**
    *   **Impact:** Homebrew users facing 404 errors;无法升级。
    *   **Reaction:** High urgency (👍 9), requires immediate infra fix.
*   [#23211](https://github.com/anomalyco/opencode/issues/23211) **1.4.7+ onward fails to render UI and read existing session**
    *   **Impact:** Users losing configuration (logged-in models) and ability to load previous chats.
    *   **Reaction:** High anxiety regarding data loss and regression.
*   [#23305](https://github.com/anomalyco/opencode/issues/23305) **OPENCODE_FAST_BOOT breaks using a custom agent**
    *   **Impact:** Developers using custom agents via `--agent` flag are locked out.
    *   **Reaction:** Critical for advanced workflows.

**Desktop & UI Stability**
*   [#22630](https://github.com/anomalyco/opencode/issues/22630) **Blank window on macOS 26.4 (Tahoe)**
    *   **Impact:** Desktop app completely unresponsive on latest macOS beta.
    *   **Reaction:** OS compatibility is a major blocker for early adopters.
*   [#5485](https://github.com/anomalyco/opencode/issues/5485) **OpenCode becomes stuck all of a sudden**
    *   **Impact:** Chronic issue where the tool hangs, forcing users to consider uninstalling to reset.
    *   **Reaction:** 49 comments indicate deep frustration with reliability.

**Workflow & Integration**
*   [#22408](https://github.com/anomalyco/opencode/issues/22408) **Kimi K2.6 integration**
    *   **Impact:** Request to support new code-capable models.
    *   **Reaction:** High demand (👍 16).
*   [#9281](https://github.com/anomalyco/opencode/issues/9281) **Add unified usage tracking via /usage**
    *   **Impact:** Currently impossible to view plan limits/usage for Copilot/Claude inside TUI.
    *   **Reaction:** Highly requested (👍 21) for production management.
*   [#9922](https://github.com/anomalyco/opencode/issues/9922) **Impossible to paste API key after /connect**
    *   **Impact:** severe DX hurdle for Windows/Ubuntu users connecting providers.
    *   **Reaction:** "Really difficult" to perform basic setup.
*   [#23327](https://github.com/anomalyco/opencode/issues/23327) **LM Studio provider auto-detect models**
    *   **Impact:** Request to query `/v1/models` instead of using hardcoded lists.
    *   **Reaction:** Necessary for local model flexibility.

## 4. Key PR Progress

**Core Fixes & Routing**
*   [#23355](https://github.com/anomalyco/opencode/pull/23355) **Don't hang TUI when reattaching to a deleted session**
    *   Fixes a critical lockup where running `opencode -s <deleted-id>` required killing the terminal.
*   [#23356](https://github.com/anomalyco/opencode/pull/23356) **Prevent auto-updating session timestamps on metadata changes**
    *   Stops minor edits from bubbling sessions to the "top" of the list, improving history management.
*   [#23357](https://github.com/anomalyco/opencode/pull/23357) **OpenCode run waits for plugins to finish before stopping**
    *   Ensures graceful shutdown of plugin processes rather than cutting them off abruptly.

**Provider & Model Support**
*   [#23352](https://github.com/anomalyco/opencode/pull/23352) **Gate zai/zhipuai thinking injection**
    *   Fixes a bug where non-reasoning models from Z.ai/ZhipuAI were returning empty responses due to forced thinking headers.
*   [#23335](https://github.com/anomalyco/opencode/pull/23335) **Restore reasoning variants for DeepSeek, GLM, and Minimax**
    *   Restores `low`/`medium`/`high` controls for these providers via the OpenAI-compatible router.
*   [#23343](https://github.com/anomalyco/opencode/pull/23343) **Ensure display: summarized is sent by default for Bedrock**
    *   Fixes thinking block visibility for AWS Bedrock users.

**Developer Experience**
*   [#9545](https://github.com/anomalyco/opencode/pull/9545) **Unified usage tracking with auth refresh**
    *   Implementation of the `/usage` command to track rate limits across Codex, Copilot, and Claude.
*   [#23337](https://github.com/anomalyco/opencode/pull/23337) **Add LangSmith-tracing and Contexty plugins**
    *   Expands ecosystem documentation to include LangSmith integration and context visualization.
*   [#7119](https://github.com/anomalyco/opencode/pull/7119) **Display dynamically registered MCP servers in status**
    *   Fixes TUI `/status` to show MCP servers registered via API, not just config files.

## 5. Feature Request Trends
*   **Provider Flexibility:** Users are demanding dynamic model discovery (e.g., LM Studio) and support for new localized models like Kimi K2.6, rather than relying on hardcoded lists.
*   **Usage Visibility:** There is a strong push for unified CLI/TUI visibility into token usage and rate limits (Issue #9281) to manage costs effectively.
*   **Thinking Mode Controls:** Multiple requests indicate users want granular control over "thinking" blocks (visibility, summarization) across different providers, not just Claude.

## 6. Developer Pain Points
*   **The "Blank Window" Phenomenon:** Multiple reports (macOS Tahoe, Windows) indicate the Desktop app is entering an unrendered state where the UI fails to load entirely, forcing a process kill.
*   **TUI Responsiveness:** Reports of severe input lag (Issue #23330) and "frozen" states where keybindings (Ctrl+C) fail to interrupt the agent are eroding trust in the terminal interface.
*   **Installation Fragility:** The 404 error on the v1.4.12 Homebrew formula highlights a breakdown in the release pipeline, preventing developers from accessing the latest tooling.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-19

## 1. Today's Highlights
The community is currently navigating a significant **service disruption** regarding Qwen OAuth, with a surge of `401 invalid access token` errors reported following the recent discontinuation of the free tier. Despite the instability, the development team released **v0.14.5-nightly** featuring enhanced ACP hooks and compact mode UX improvements, while ongoing PRs indicate a strong push toward better error handling, CLI performance (reduced input lag), and authentication flexibility.

## 2. Latest Releases
**v0.14.5-nightly.20260418**
The latest nightly release focuses on integration capabilities and user experience quality-of-life improvements.
*   **ACP Integration:** Added complete hooks support for the Agent Communication Protocol (ACP) by @DennisYu07 ([#3248](https://github.com/QwenLM/qwen-code/pull/3248)).
*   **UX Optimization:** Refined compact mode with better shortcuts, settings synchronization, and safety measures by @chiga0 in ([#3100](https://github.com/QwenLM/qwen-code/pull/3100)).
*   **HTTP Hooks:** Initial support for HTTP hooks (truncated in log).

## 3. Hot Issues
The issue tracker is dominated by an authentication crisis. Below are the 10 most noteworthy items:

1.  **[Widespread Outage] Internal error: 401 invalid access token** ([#3314](https://github.com/QwenLM/qwen-code/issues/3314), [#3403](https://github.com/QwenLM/qwen-code/issues/3403), [#3396](https://github.com/QwenLM/qwen-code/issues/3396))
    *   **Why it matters:** A massive spike in `401` errors is affecting users on `v0.12.0` through `v0.14.5`. Users report "Successfully logged in" status, but the API immediately rejects requests.
    *   **Reaction:** High frustration; the issue appears linked to the OAuth free tier phase-out.

2.  **OAuth Free Tier Policy Adjustment** ([#3203](https://github.com/QwenLM/qwen-code/issues/3203))
    *   **Why it matters:** The official proposal to reduce the free quota from 1,000 to 100 requests/day and phase out the free tier entirely.
    *   **Reaction:** 97 comments indicate strong community concern regarding the sudden reduction in accessibility.

3.  **Startup hangs on "Initializing..." with Checkpointing** ([#2862](https://github.com/QwenLM/qwen-code/issues/2862))
    *   **Why it matters:** Users are unable to use the CLI if checkpointing is enabled, requiring force-quit.
    *   **Reaction:** Critical P0 bug affecting workflow continuity.

4.  **VSCode Extension: Chat Messages in Wrong Order** ([#3273](https://github.com/QwenLM/qwen-code/issues/3273))
    *   **Why it matters:** UI regression where new questions appear *above* previous answers, breaking conversational flow.
    *   **Reaction:** Highly disruptive to the chat experience in the IDE.

5.  **Unable to add OpenAI-compatible local LLM** ([#3384](https://github.com/QwenLM/qwen-code/issues/3384))
    *   **Why it matters:** Users attempting to use local VLLM instances (e.g., Qwen3.6-35B-A3B) are failing to configure the provider correctly.
    *   **Reaction:** Highlights friction in local model setup vs. cloud usage.

6.  **Fireworks provider unavailable on `qwen auth`** ([#3413](https://github.com/QwenLM/qwen-code/issues/3413))
    *   **Why it matters:** Documentation references Fireworks as a migration path after OAuth discontinuation, but the provider is missing from the auth list.
    *   **Reaction:** Documentation/reality gap causing confusion during the OAuth transition.

7.  **API Error each time after restart (Key not persisted)** ([#3417](https://github.com/QwenLM/qwen-code/issues/3417))
    *   **Why it matters:** Users must re-enter API keys (Bailian/Alibaba) on every restart despite `settings.json` configuration.
    *   **Reaction:** Major usability failure for API key users.

8.  **VSCode Plugin: `contextPercentageThreshold` not honored** ([#3426](https://github.com/QwenLM/qwen-code/issues/3426))
    *   **Why it matters:** Chat compression settings are being ignored, leading to context overflow and API failures.
    *   **Reaction:** Technical breakdown in memory management features.

9.  **Docs Feedback: "Authentication" page outdated** ([#3382](https://github.com/QwenLM/qwen-code/issues/3382))
    *   **Why it matters:** Official docs still reference the discontinued free tier (ended April 15), misleading new users.
    *   **Reaction:** Request to update docs to match current policy reality.

10. **Missing `/auth` command in VSCode** ([#3274](https://github.com/QwenLM/qwen-code/issues/3274))
    *   **Why it matters:** Users are instructed to type `/auth` to add API keys, but the command is unrecognized in the extension.
    *   **Reaction:** Feature parity gap between CLI and VSCode extension.

## 4. Key PR Progress
Developers are actively fixing bugs and enhancing performance. Here are 10 significant PRs:

1.  **[feat] Add tool execution progress messages** ([#3155](https://github.com/QwenLM/qwen-code/pull/3155))
    *   Addresses UX blindness during long tasks (e.g., `npm install`) by adding elapsed time and status indicators to prevent user interruption.
2.  **[feat] Strip dangerous patterns from YOLO auto-approve** ([#3156](https://github.com/QwenLM/qwen-code/pull/3156))
    *   **Critical Safety Update:** YOLO mode will now block potentially catastrophic commands (like `rm -rf /`) even when auto-approval is on.
3.  **[feat] Replace OAuth with Coding Plan / API Key setup** ([#3398](https://github.com/QwenLM/qwen-code/pull/3398))
    *   Updates the VSCode extension to remove the broken OAuth flow and replaces it with interactive setup for Alibaba Cloud Coding Plan and API keys.
4.  **[fix] CLI `/clear` dismisses `/btw` side-question** ([#3431](https://github.com/QwenLM/qwen-code/pull/3431))
    *   Fixes a state bug where using `/reset` or `/clear` left the "side-question" UI active and orphaned.
5.  **[feat] Add API preconnect to reduce latency** ([#3318](https://github.com/QwenLM/qwen-code/pull/3318))
    *   Implements a "fire-and-forget" HEAD request during startup to warm up TCP/TLS connections, reducing first-call latency by 100-200ms.
6.  **[fix] Handle missing `xdg-open` gracefully** ([#1675](https://github.com/QwenLM/qwen-code/pull/1675))
    *   Prevents crashes on headless Linux environments (e.g., RISC-V) where browser launch tools are missing.
7.  **[feat] Add Markdown for Agents support to WebFetch** ([#2734](https://github.com/QwenLM/qwen-code/pull/2734))
    *   Implements Cloudflare's "Markdown for Agents" spec, potentially reducing token usage by 80% when fetching web content.
8.  **[feat] Add early input capture to REPL** ([#3319](https://github.com/QwenLM/qwen-code/pull/3319))
    *   Fixes a UX gap where keystrokes typed during the 200ms startup window were lost. Now buffers and replays them.
9.  **[feat] Detect Zed.app on macOS** ([#3303](https://github.com/QwenLM/qwen-code/pull/3303))
    *   Fixes editor detection for Zed on macOS, which previously failed if the CLI wasn't in the PATH.
10. **[feat] Enable Plan Mode toggle in VSCode** ([#2551](https://github.com/QwenLM/qwen-code/pull/2551))
    *   Brings "Plan Mode" to the VSCode extension, allowing users to review agent plans before execution (Parity with CLI).

## 5. Feature Request Trends
Based on the open issues and PR discussions:
*   **Authentication Flexibility:** High demand for diverse auth methods (OpenRouter, standard API keys) as users migrate away from the deprecated Qwen OAuth.
*   **IDE Parity:** Users are requesting VSCode features that currently exist only in the CLI, such as Plan Mode, `/export`, and robust `/auth` handling.
*   **Context Management:** Requests for better handling of large contexts, including reliable compression triggers and context window limits.

## 6. Developer Pain Points
*   **Authentication Fragility:** The transition away from the free OAuth tier has been rocky. Developers are facing `401` errors, persistence issues (having to re-enter keys), and confusion over which provider to use.
*   **Input Lag & UX Glitches:** Issues ranging from severe typing lag (5s delay) to REPL initialization keystroke loss and UI state bugs (orphaned dialogs) are degrading the "feel" of the tool.
*   **Reliability of "Safe" Modes:** While "YOLO" mode is being hardened for safety, other modes like checkpointing are causing hangs, and the review mode needs explicit forcing of parallel agents for weaker models.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*