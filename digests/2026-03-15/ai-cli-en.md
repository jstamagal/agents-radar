# AI CLI Tools Community Digest 2026-03-15

> Generated: 2026-03-15 00:11 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [LLXprt-Code](https://github.com/vybestack/llxprt-code)
- [Pi Mono-Repo](https://github.com/badlogic/pi-mono)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Community Digest Report: 2026-03-15

## 1. Ecosystem Overview
The AI CLI ecosystem is currently undergoing a critical **stability vs. feature expansion** phase. As tools mature from basic chat interfaces to autonomous agents, architectural debt—particularly in Terminal User Interface (TUI) rendering and context management—is causing widespread user friction. Across the board, developers are prioritizing **"Agent 2.0" capabilities**, such as MCP (Model Context Protocol) extensibility and multi-step session management, while simultaneously battling critical regressions in UI flickering, context window "bloat," and platform-specific bugs (especially on Windows/WSL). The landscape is highly active, with rapid iteration (nightly/alpha builds) becoming the norm to address these growing pains.

## 2. Activity Comparison

| Tool | Status | Issues Tracked | Active PRs | Release Activity | Stability Trend |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 🔴 High Friction | Critical (1.2k+) | High | **v2.1.76** (MCP Elicitation) | ⚠️ Regression (UI/Context) |
| **OpenAI Codex** | 🟠 Refactoring | Moderate | High | **v0.115.0-alpha** (Rust) | ⚠️ Unstable (Alpha churn) |
| **Gemini CLI** | 🟠 Stabilizing | Low | Moderate | **v0.35.0-nightly** | ➡️ Maintenance |
| **GitHub Copilot** | 🟢 Maintenance | Low | None | **No Release** (24h) | ➡️ Stable |
| **Kimi Code** | 🟡 Patching | Low | Low | **No Release** (24h) | ➡️ Patching (Win/Mac) |
| **OpenCode** | 🔴 Critical Issues | High (Hot topics) | High | **v1.2.25** (Regression) | 🔻 Declining (Mem leak/SSE) |
| **Qwen Code** | 🟢 Feature Heavy | Moderate | High | **v0.12.3-nightly** | ⬆️ Improving (UI/Ext) |
| **LLXprt-Code** | 🟢 Syncing | Low | Low | **v0.10.0-nightly** | ➡️ Stable (Hotfix) |
| **Pi Mono-Repo** | 🟢 Expansion | Moderate | High | **v0.58.1** (Hotfix) | ⬆️ Improving (TUI/Ext) |

## 3. Shared Feature Directions

*   **Multi-Model & "Arbitrator" Architectures:**
    *   **Qwen Code** is leading with PR #2376 (Multi-model code review with an arbitrator).
    *   **OpenCode** and **Pi Mono-Repo** are refining complex model switching logic.
    *   *Trend:* Moving away from single-model dependency to routing specialized tasks (reasoning vs. utility) to different models.
*   **MCP (Model Context Protocol) & Extensibility:**
    *   **Claude Code** introduced "MCP Elicitation" (v2.1.76).
    *   **GitHub Copilot** and **OpenCode** communities are demanding hierarchical MCP configs (#288, #17482).
    *   *Trend:* A shift toward "Agent Skills" where tools are loaded dynamically rather than monolithic contexts.
*   **Session Hygiene & Management:**
    *   **Claude Code** added a `/sessions:delete` plugin (PR #34168).
    *   **OpenCode** merged session list sorting by time (PR #17526).
    *   **OpenCode & GitHub Copilot** users are demanding "Chat Tree/Branching" views.
    *   *Trend:* As usage scales, "chat history" is becoming a liability; users need database-like controls (list, delete, branch, merge).
*   **Observability & Debugging:**
    *   **Gemini CLI** is implementing a `/perf` dashboard (PR #22485).
    *   **Claude Code** is adding subagent status monitors (PR #34251).
    *   *Trend:* "Black box" AI agents are unacceptable for production; developers need TUI-native dashboards to inspect memory and tool calls.

## 4. Differentiation Analysis

| Tool | Differentiation Focus | Target User | Technical Approach |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **Protocol Innovation** | Enterprise / Power Users | Aggressively expanding MCP. Building an "OS" for agents with hooks (Elicitation, PreToolUse). |
| **OpenAI Codex** | **Infrastructure Refactoring** | DevOps / Backend Devs | Heavily investing in Rust (`app-server` unification). Focus on "Watchdog" runtimes and robust backend architecture. |
| **OpenCode** | **Local-First / Privacy** | Privacy-Conscious Devs | Focus on local model support (DeepSeek, Ollama) and efficient token usage. Currently struggling with resource leaks. |
| **Pi Mono-Repo** | **TUI & Editor Polish** | Terminal Power Users | Best-in-class TUI features (Ghost Text, Vim motions). Prioritizing 1M token context windows and parallel execution. |
| **Qwen Code** | **Customizable "Skills"** | Framework Engineers | Innovating on "Skills" composition (extending bundled skills). Strong focus on VS Code integration layouts. |
| **Kimi / LLXprt** | **Upstream Integration** | Niche / Adopters | Kimi focuses on cross-platform shell fixes; LLXprt acts as a feature-sync layer for `gemini-cli`. |

## 5. Community Momentum & Maturity

*   **Highest Velocity:** **Qwen Code** and **Pi Mono-Repo**.
    *   Qwen is shipping high-demand features (Sidebar flexibility, multi-model review) at a rapid pace.
    *   Pi is successfully executing complex features (1M context, Ghost Text) with quick hotfix turnarounds.
*   **Most Active/Distressed:** **Claude Code** and **OpenCode**.
    *   Both communities are highly engaged but driven by "pain." Critical bugs (flickering, memory leaks) are generating massive comment threads, indicating a passionate but frustrated user base.
*   **Most Stable:** **GitHub Copilot CLI**.
    *   Activity is lower and focused on configuration/refinement rather than critical bugs, suggesting a more mature, albeit slower-moving, product.

## 6. Trend Signals

1.  **The "Flickering" Crisis:** A shocking number of tools (**Claude Code**, **OpenCode**, **GitHub Copilot**, **Gemini CLI**) are experiencing severe TUI rendering bugs (flickering, scrolling jumps). This indicates that the underlying terminal rendering libraries (e.g., Ink, React-based TUIs) are struggling to handle the high-frequency updates of streaming AI agents.
2.  **Token Economy Panic:** With context windows growing (Pi at 1M, Claude at 200k+), developers are hypersensitive to "token waste." Issues regarding "redundant file notes" (Claude) and "lazy loading schemas" (OpenCode) suggest that **Context Management** will be the primary battleground for the next generation of tools.
3.  **The "Agent-OS" Paradigm:** The conversation has shifted from "Chat with Code" to "Manage an Agent." Features like `/btw` (Qwen), `/perf` (Gemini), and "Sensitive File Guards" (Claude) signal that these tools are evolving into operating systems that require resource monitoring, security policies, and lifecycle management.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Data as of 2026-03-15
**Source:** github.com/anthropics/skills

## 1. Top Skills Ranking
*Based on engagement and visibility in the "Most Watched" feed.*

1.  **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)**
    *   **Functionality:** Enforces typographic quality control (orphans, widows, numbering alignment) for AI-generated documents.
    *   **Highlights:** Addresses a universal pain point in AI output; ranked #1 in the "Most Watched" feed.
    *   **Status:** Open (Authored by @PGTBoos)

2.  **[Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**
    *   **Functionality:** Meta-skills that evaluate other skills across 5 dimensions (structure, security, performance, API safety, compatibility).
    *   **Highlights:** A "governing" skill that proposes a standard for skill vetting within the community.
    *   **Status:** Open (Authored by @eovidiu)

3.  **[Add shodh-memory skill](https://github.com/anthropics/skills/pull/154)**
    *   **Functionality:** Implements a persistent memory system (proactive context) for AI agents across conversations.
    *   **Highlights:** Tackles the context window limitation by enabling long-term memory retention.
    *   **Status:** Open (Authored by @varun29ankuS)

4.  **[Improve frontend-design skill](https://github.com/anthropics/skills/pull/210)**
    *   **Highlights:** Focuses on operational clarity and actionability rather than abstract concepts.
    *   **Status:** Open (Authored by @justinwetch)

5.  **[Add ODT skill](https://github.com/anthropics/skills/pull/486)**
    *   **Functionality:** Creation and parsing of OpenDocument Text (.odt) files and templates.
    *   **Highlights:** Fills a gap for open-source document format interoperability (LibreOffice/Apache OpenOffice).
    *   **Status:** Open (Authored by @GitHubNewbie0)

6.  **[Add masonry-generate-image-and-videos skill](https://github.com/anthropics/skills/pull/335)**
    *   **Functionality:** CLI skill for AI-powered image and video generation (Imagen 3.0, Veo 3.1).
    *   **Highlights:** Expands Claude's capabilities into multimedia generation.
    *   **Status:** Open (Authored by @junaid1460)

7.  **[Add SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)**
    *   **Functionality:** Predictive analytics on SAP business data using the open-source tabular foundation model.
    *   **Highlights:** Bridges enterprise ERP data with AI analysis.
    *   **Status:** Open (Authored by @amitlals)

## 2. Community Demand Trends
*Derived from popular Issues and PR discussions.*

*   **Ecosystem Stability & Tooling (High Demand):** There is significant friction with the current development workflow. Users are requesting better tools to validate YAML frontmatter ([#361](https://github.com/anthropics/skills/pull/361)), manage encoding ([#284](https://github.com/anthropics/skills/pull/284)), and clarify naming conventions ([#356](https://github.com/anthropics/skills/pull/356)). The call for a robust `CONTRIBUTING.md` ([#509](https://github.com/anthropics/skills/pull/509)) highlights a need for streamlined onboarding.
*   **Governance and Security:** Following the proposal for an **agent-governance** skill ([#412](https://github.com/anthropics/skills/issues/412)), the community is actively seeking patterns for AI safety, policy enforcement, and audit trails.
*   **Enterprise Integration:** High interest in integrating with specific enterprise platforms, particularly Google Workspace ([#299](https://github.com/anthropics/skills/pull/299)) and AWS Bedrock ([#29](https://github.com/anthropics/skills/issues/29)).
*   **Memory & Context:** Persistent memory systems remain a top priority to enable more complex, multi-session agent workflows ([#154](https://github.com/anthropics/skills/pull/154)).

## 3. High-Potential Pending Skills
*Active PRs with strong momentum or utility.*

*   **[Add x402 BSV auth + micropayment skill](https://github.com/anthropics/skills/pull/374)**: Introduces a natural language interface for AI service micropayments.
*   **[Codebase Inventory Audit](https://github.com/anthropics/skills/pull/147)**: A systematic workflow for identifying orphaned code and documentation gaps.
*   **[Meta-Analysis Suite](https://github.com/anthropics/skills/pull/83)**: The `skill-quality-analyzer` and `skill-security-analyzer` represent a maturation of the ecosystem, moving from simple skills to self-improving tooling.

## 4. Skills Ecosystem Insight
The community is currently prioritizing **foundational stability and interoperability**—shifting focus from pure novelty to tools that ensure persistent memory ([PR #154](https://github.com/anthropics/skills/pull/154)), open-format document support ([PR #486](https://github.com/anthropics/skills/pull/486)), and rigorous meta-validation of the skills ecosystem itself ([PR #83](https://github.com/anthropics/skills/pull/83)).

---

# Claude Code Community Digest: 2026-03-15

## 1. Today's Highlights

The latest release **v2.1.76** introduces a significant evolution in the Model Context Protocol (MCP) ecosystem with "MCP elicitation support," enabling servers to request structured input mid-task via interactive dialogs. This release also exposes new `Elicitation` and `ElicitationResult` hooks for developers to intercept and override responses. Meanwhile, the community continues to struggle with persistent UI flickering bugs and critical context management issues affecting the VS Code extension and macOS platforms.

## 2. Releases

**v2.1.76**
- **MCP Elicitation Support:** MCP servers can now initiate interactive dialogs (form fields or browser URLs) to request structured input during task execution, rather than failing silently.
- **New Hooks:** Added `Elicitation` and `ElicitationResult` hooks, allowing developers to intercept and override responses before they are returned to the MCP server.
- **CLI Update:** Added a `-n` / `--nam...` (truncated in source, likely naming/project flag).

## 3. Hot Issues

**[BUG] Console scrolling top of history when claude add text to the console** [#826](https://github.com/anthropics/claude-code/issues/826)
*Community Reaction: 586👍, 324 comments*
A critical UX regression on macOS (iTerm2) where text insertion forces the console view to jump to the top of the scrollback history, disrupting workflow continuity. This is the most upvoted issue currently tracked.

**[BUG] In-progress Call causes Screen Flickering** [#769](https://github.com/anthropics/claude-code/issues/769)
*Community Reaction: 281👍, 291 comments*
Severe screen flickering (2-3 times per second) occurring on Windows and Ubuntu during active LLM calls. Reports indicate this is intense enough to cause physical discomfort, highlighting a fundamental TUI rendering loop issue.

**[FEATURE] Support multiple Connector accounts** [#27302](https://github.com/anthropics/claude-code/issues/27302)
*Community Reaction: 50👍, 46 comments*
Users are requesting the ability to authenticate multiple accounts for the same connector (e.g., two different Google Drive accounts) within `claude.ai/code`, currently restricted to single-account instances.

**[BUG] Remote control (/rc) not supported in VS Code extension** [#28951](https://github.com/anthropics/claude-code/issues/28951)
*Community Reaction: 24👍, 41 comments*
Feature parity gap between the CLI and VS Code extension. Users cannot utilize the `/rc` (remote control) workflow to shift sessions from desktop to mobile/web when using the VS Code integration.

**[FEATURE] Automatic light/dark theme selection** [#2990](https://github.com/anthropics/claude-code/issues/2990)
*Community Reaction: 174👍, 32 comments*
High-demand request for the TUI to automatically detect system theme changes. Currently, users must manually toggle themes, leading to unreadable text (white-on-white) when the OS theme shifts.

**[BUG] Opus 1m context returns "long context beta not available" on Max subscription** [#23472](https://github.com/anthropics/claude-code/issues/23472)
*Community Reaction: 15👍, 28 comments*
Subscription tiers are not correctly mapping to the Opus 4.6 1M context window feature, resulting in denials for users on Max plans who should have access.

**[BUG] Hundreds of lines of modified file notes injected into context** [#16021](https://github.com/anthropics/claude-code/issues/16021)
*Community Reaction: 24 comments*
A significant token economy issue where `<system-reminder>` tags are injecting massive amounts of file metadata into the context window on every user message, unnecessarily inflating costs and latency.

**[BUG] Native Windows binary fails — EEXIST in OAuth token path** [#27791](https://github.com/anthropics/claude-code/issues/27791)
*Community Reaction: 3👍, 17 comments*
The native Windows binary is crashing immediately upon startup due to a file system race condition or error handling failure in the OAuth token creation path.

**[FEATURE] Delete Claude Code sessions** [#13514](https://github.com/anthropics/claude-code/issues/13514)
*Community Reaction: 49👍, 30 comments*
Users lack native controls to delete or manage historical sessions, leading to privacy concerns and cluttered interfaces.

**[BUG] Image base64 size exceeds API limit** [#20021](https://github.com/anthropics/claude-code/issues/20021)
*Community Reaction: 8👍, 19 comments*
Client-side image validation is missing; users encounter API errors when uploading images >5MB because the tool fails to pre-check or compress files before sending them to the endpoint.

## 4. Key PR Progress

**feat(plugins): Sessions plugin for listing and deleting sessions** [#34168](https://github.com/anthropics/claude-code/pull/34168)
Addresses the top feature request for session hygiene. This plugin introduces `/sessions:list` and `/sessions:delete` commands, scoped by default to the current project directory (with `--all` available), giving users control over their chat history storage.

**Add sensitive-file-guard plugin to protect infrastructure files** [#34257](https://github.com/anthropics/claude-code/pull/34257)
A defensive feature adding a `PreToolUse` hook to prevent accidental modification of critical files (e.g., `.env`, infrastructure-as-code). It creates an allowlist mechanism to require explicit confirmation before editing sensitive paths.

**Harden sensitive file guard confirmation flow** [#34286](https://github.com/anthropics/claude-code/pull/34286)
A hardening of the sensitive file guard PR above, moving to structured `PreToolUse` permission decisions with specific `deny/ask/allow` risk levels. It ensures that medium-risk files are only allowlisted after the exact tool call succeeds.

**feat(plugins): add agent-status plugin for subagent monitoring** [#34251](https://github.com/anthropics/claude-code/pull/34251)
Improves observability for the "subagents" feature. This plugin audits agent status and outputs logs, addressing "silent failures" where subagents would terminate without trace, leaving developers confused about task failures.

## 5. Feature Request Trends

1.  **Session Management Hygiene:** There is a clear trend toward needing better lifecycle management for chat sessions, specifically the ability to list and delete them (Issues #13514, PR #34168).
2.  **Platform Parity:** A significant number of high-engagement issues highlight gaps between the CLI/TUI experience and the VS Code extension experience (e.g., Issue #28951 for Remote Control, Issue #32450 for Connectors).
3.  **Multi-Account Connector Support:** As enterprise adoption grows, the limitation of single-account connectors (e.g., Google Drive) is becoming a blocker (Issue #27302).
4.  **Theme Automation:** Users expect the tool to adapt to their environment automatically, specifically regarding dark/light mode detection (Issue #2990).

## 6. Developer Pain Points

*   **UI Stability:** The recurring "screen flickering" bug (Issues #769, #18084) across Windows and macOS terminals is a major usability blocker, often described as severe enough to cause physical discomfort.
*   **Context "Bloat":** Developers are frustrated by inefficiencies in token usage. Specifically, the injection of massive `<system-reminder>` blocks (Issue #16021) and repeated cache reads of `CLAUDE.md` (Issue #24147) are consuming quota without adding value.
*   **Subagent Visibility:** There is a lack of transparency into what custom subagents are doing. When they fail, they often do so "silently," making debugging difficult (prompting PR #34251).
*   **Safety vs. Friction:** While file guards are being introduced to prevent disasters (PR #34257), developers are simultaneously annoyed by excessive permission dialogs and "approval spam" (Issue #31373), suggesting a need for smarter trust boundaries.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-03-15

## 1. Today's Highlights
The repository is seeing significant architectural work aimed at unifying the CLI TUI with the app-server, evidenced by multiple Pull Requests attempting to route thread lifecycle events through a central server. While this infrastructure refactoring takes place, users are reporting critical stability issues with the latest releases, specifically regarding rapid token consumption during code review and "hanging" context compaction on the GPT-5.4 model.

## 2. Releases
* **Rust v0.115.0-alpha.24 / 23 / 22**
  Three rapid-fire alpha releases were pushed in the last 24 hours. While specific changelogs were not provided in the release notes, these updates coincide with active development on the `app-server` and TUI routing logic. Users on alpha channels should expect potential friction with symlinked directories and `apply_patch` functionality.

## 3. Hot Issues

### 🔥 Critical Stability & Billing
* **[Token Burning on Review (#14681)](https://github.com/openai/codex/issues/14681)**
  *Why it matters:* Users on the Pro plan are reporting that the `/review` task is consuming double the expected tokens. Given the high volume of usage for this feature, this impacts billing directly.
  *Reaction:* Issue marked as closed, suggesting a fix may have been deployed in recent alphas.
* **[Context Compaction Hanging (#14346, #14425)](https://github.com/openai/codex/issues/14346)**
  *Why it matters:* A critical bug where the context window fills up rapidly and compaction hangs indefinitely at <16%, effectively stalling the CLI.
  *Reaction:* High engagement (15+ comments), confirmed across macOS and Linux environments.

### 🛠️ Developer Experience
* **[macOS Intel Support (#10410)](https://github.com/openai/codex/issues/10410)**
  *Why it matters:* The most upvoted issue (163👍) requests support for Intel Macs, which are currently sidelined in favor of Apple Silicon.
  *Reaction:* Community frustration is high as Intel hardware is still prevalent in enterprise environments.
* **[Configurable Hotkeys (#3049)](https://github.com/openai/codex/issues/3049)**
  *Why it matters:* Hardcoded keybindings (Ctrl+J, Ctrl+H) conflict with existing developer workflows.
  *Reaction:* A long-standing request (63👍) seeing renewed discussion.
* **[Chat Tree/Branching (#12450)](https://github.com/openai/codex/issues/12450)**
  *Why it matters:* Advanced users want the ability to manage conversation branches (forks) visually, similar to other LLM IDE tools.
  *Reaction:* 8 comments recently, indicating demand for better session management.

### 🪟 Windows & WSL Friction
* **[Worktree Support Failures (#13618, #14703)](https://github.com/openai/codex/issues/13618)**
  *Why it matters:* Codex fails to recognize valid Git worktrees in WSL environments on Windows, falsely asking to "Create git repository."
  *Reaction:* Multiple reports suggest the Git integration logic breaks specifically with WSL-backed repos.
* **[False Encoding Corruption (#13755)](https://github.com/openai/codex/issues/13755)**
  *Why it matters:* Code review incorrectly flags files as "Turkish encoding corruption" on Windows PowerShell.
  *Reaction:* Annoying false positives that reduce trust in the review tool.

### 🔧 Architecture & Bugs
* **[Symlinked `~/.codex` Breaking (#14694)](https://github.com/openai/codex/issues/14694)**
  *Why it matters:* The new "memories" feature causes `apply_patch` to fail if the Codex config directory is a symlink.
  *Reaction:* Highlights fragility introduced by new memory features.
* **[Local Task History Loss (#3417)](https://github.com/openai/codex/issues/3417)**
  *Why it matters:* Local tasks disappear from history after restarting the IDE/Cursor.
  *Reaction:* Closed, but comments suggest it may still be occurring.

## 4. Key PR Progress

* **[Move TUI on top of app server (#14710, #14717)](https://github.com/openai/codex/pull/14710)**
  *Description:* A major refactor to move the Terminal UI logic onto the existing app-server infrastructure. This aims to unify the transport layer between the GUI and CLI.
  *Status:* Open (In Progress).
* **[Route Thread Lifecycle via App-Server (#14699)](https://github.com/openai/codex/pull/14699)**
  *Description:* Fresh sessions will now use the `thread/start` RPC, ensuring skills-changed events and notifications are consistent across clients.
  *Status:* Open.
* **[Reuse Guardian Session (#14668)](https://github.com/openai/codex/pull/14668)**
  *Description:* Optimizes the approval process by reusing the "guardian" session cache, reducing latency and startup overhead for code reviews.
  *Status:* Open.
* **[Add Auth 401 Recovery Observability (#14611)](https://github.com/openai/codex/pull/14611)**
  *Description:* Adds telemetry to track 401 authentication errors in Sentry, helping diagnose login issues.
  *Status:* Closed.
* **[Watchdog Runtime & Prompts (#13678)](https://github.com/openai/codex/pull/13678)**
  *Description:* Introduces a "watchdog" runtime for managing agent threads, including specific model overrides and lifecycle management.
  *Status:* Open.
* **[Preserve Background Terminals (#14602)](https://github.com/openai/codex/pull/14602)**
  *Description:* Fixes a behavior where hitting Ctrl+C would kill background dev servers. Renames the cleanup command to `/stop`.
  *Status:* Open.
* **[Subagent Inbox Delivery (#13657)](https://github.com/openai/codex/pull/13657)**
  *Description:* Enables structured message delivery between subagents (inbox), formalizing how agents hand off tasks.
  *Status:* Open.
* **[Trust-Gate Project Hooks (#14718)](https://github.com/openai/codex/pull/14718)**
  *Description:* Security fix to ensure untrusted project `.codex` layers (hooks/policies) remain disabled until explicitly trusted.
  *Status:* Open.
* **[Fix Symlinked Writable Roots (#14674)](https://github.com/openai/codex/pull/14674)**
  *Description:* Addresses the sandbox issue where symlinked directories caused failures in `apply_patch`.
  *Status:* Closed.

## 5. Feature Request Trends
* **Session Management:** There is a strong push for "tmux-like" session management in the CLI (#6500) and the ability to sync sessions between devices (#14722).
* **Customization:** Developers are demanding granular control over keybindings (#3049) and model behavior (#11912 - custom compaction hooks).
* **Multi-Root Workspaces:** Support for VS Code multi-root workspaces remains a highly requested feature (#2909).
* **Remote Control:** Users want to control CLI sessions from mobile devices, similar to competitor tools (#14721).

## 6. Developer Pain Points
* **Windows/WSL Compatibility:** Git worktrees and file linking logic are breaking consistently on Windows, particularly for users using WSL paths.
* **Token Efficiency:** "Burning" tokens unnecessarily during review tasks and context compaction is a major financial and efficiency concern.
* **Agent Reliability:** Issues with the "watchdog" and subagents not respecting configuration (e.g., #14671) suggest the multi-agent architecture is still maturing.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-15

## 1. Today's Highlights
The community is heavily focused on **Agent reliability** and **Session Continuity** today, with multiple reports of the `/plan` command failing to execute and the CLI hanging on the `gemini-3.1-pro-preview` model. On the feature front, significant work is progressing on observability and debugging, with PRs open for a native **`/perf` dashboard**, a **Debug Companion**, and a **Linux Bubblewrap sandbox**.

## 2. Releases
*   **v0.35.0-nightly.20260314.3038fdce2**: The latest nightly build has been released. The official changelog references backports and stability updates from `v0.33.1` (PR #22235).
    *   [Compare Changes](https://github.com/google-gemini/gemini-cli/compare/v0.35.0-nightly.20260313.bb060d7a9...v0.35.0-nightly.20260314.3038fdce2)

## 3. Hot Issues
*   **[#22266 Agent "ghosts" after /plan approval](https://github.com/google-gemini/gemini-cli/issues/22266)** (6 comments)
    *   **Why it matters**: A critical regression where the agent successfully generates a plan but silently drops context immediately after user approval, blocking the execution phase entirely.
*   **[#21925 False "Action Required" Hand Icon](https://github.com/google-gemini/gemini-cli/issues/21925)** (5 comments)
    *   **Why it matters**: UX confusion where long-running shell scripts trigger the "Action Required" notification even when the agent is waiting, leading users to think they need to intervene when they don't.
*   **[#22415 CLI hangs on "This is taking a bit longer"](https://github.com/google-gemini/gemini-cli/issues/22415)** (4 comments)
    *   **Why it matters**: Users are experiencing indefinite hangs with `gemini-3.1-pro-preview`, likely caused by a retry loop that doesn't terminate on failure.
*   **[#22458 gemini-cli stops responding](https://github.com/google-gemini/gemini-cli/issues/22458)** (4 comments)
    *   **Why it matters**: Reports of the interactive mode freezing completely without clear error messages, requiring a force quit.
*   **[#22483 Feature: `/perf` Performance Dashboard](https://github.com/google-gemini/gemini-cli/issues/22483)** (2 comments)
    *   **Why it matters**: A highly requested feature to add native CLI observability (memory, API stats, timing) to debug performance bottlenecks without external tools.
*   **[#22028 CLI Scrolling Glitch in VS Code](https://github.com/google-gemini/gemini-cli/issues/22028)** (3 comments)
    *   **Why it matters**: A frustrating UX bug where clicking anywhere in the VS Code window causes the terminal to snap to the top of the history.
*   **[#22307 Plan Mode shows stale data](https://github.com/google-gemini/gemini-cli/issues/22307)** (2 comments)
    *   **Why it matters**: Plan mode appears to be caching previous requests, displaying a plan based on the *prior* prompt rather than the current one.
*   **[#21688 Sub-agent thoughts concatenated without spaces](https://github.com/google-gemini/gemini-cli/issues/21688)** (2 comments)
    *   **Why it matters**: Real-time progress updates from sub-agents are unreadable due to missing line breaks/spaces in the "thought" bubbles.
*   **[#21461 Shell Aliases not supported](https://github.com/google-gemini/gemini-cli/issues/21461)** (2 comments)
    *   **Why it matters**: Users cannot execute standard shell aliases (e.g., `! baz`) because the CLI runs in a restricted shell environment, breaking developer workflows.
*   **[#21792 Epic: Session Continuity](https://github.com/google-gemini/gemini-cli/issues/21792)** (2 comments)
    *   **Why it matters**: A major engineering epic addressing how the CLI handles long sessions, context degradation, and memory loss.

## 4. Key PR Progress
*   **[#22485 feat(cli): add /perf performance monitoring dashboard](https://github.com/google-gemini/gemini-cli/pull/22485)**
    *   Implements the requested `/perf` command, providing real-time stats on memory, heap usage, and tool execution latency directly in the TUI.
*   **[#22399 feat(sandbox): implement native bubblewrap (bwrap) sandbox](https://github.com/google-gemini/gemini-cli/pull/22399)**
    *   Adds a high-performance Linux sandbox using `bubblewrap`, offering a zero-dependency alternative to Docker/Podman for secure command execution.
*   **[#22472 feat(debug): add Debug Companion](https://github.com/google-gemini/gemini-cli/pull/22472)**
    *   Introduces an AI-powered debugging subsystem (Idea #7) to help troubleshoot the CLI itself, including DAP integration and specialized debug tools.
*   **[#22456 feat(ui): add new interactive policies dialog](https://github.com/google-gemini/gemini-cli/pull/22456)**
    *   Replaces text-based policy output with a searchable, tabbed interface for managing "Allow/Ask/Deny" rules within the terminal.
*   **[#22484 fix(core): merge user settings with extension-provided MCP servers](https://github.com/google-gemini/gemini-cli/pull/22484)**
    *   Fixes a bug where user-defined settings (like `excludeTools`) were ignored for MCP servers provided by extensions.
*   **[#22467 fix(cli): cap shell output at 10 MB](https://github.com/google-gemini/gemini-cli/pull/22467)**
    *   Prevents `RangeError` crashes by limiting the size of shell command outputs processed by the agent.
*   **[#22480 fix(core): handle ENAMETOOLONG in robustRealpath](https://github.com/google-gemini/gemini-cli/pull/22480)**
    *   Resolves a critical crash (unhandled rejection) caused by pasting or inputting extremely long strings starting with `@`.
*   **[#21439 feat(cli): add active checkpoint tag fallback](https://github.com/google-gemini/gemini-cli/pull/21439)**
    *   Improves the `/chat save` workflow by automatically reusing the most recent active checkpoint tag if none is specified.
*   **[#22482 fix(test): isolate ACP clientName tests](https://github.com/google-gemini/gemini-cli/pull/22482)**
    *   Stabilizes the test suite by ensuring environment variables from the host IDE (like Cursor) don't leak into tests.
*   **[#21102 fix(cli): prevent ! from triggering shell mode when pasted](https://github.com/google-gemini/gemini-cli/pull/21102)**
    *   Fixes a bug on terminals without bracketed paste support (e.g., Termux) where pasting text starting with `!` would corrupt the input.

## 5. Feature Request Trends
*   **Observability & Debugging**: There is a strong push for better internal tools. Requests range from simple `/perf` dashboards to advanced "Debug Companions" that can introspect the agent's state.
*   **Context Management**: Users are demanding better handling of long sessions. This includes everything from fixing "Guided Compression" to ensuring sub-agents don't isolate their tools in a way that breaks the main workflow.
*   **Security & Sandboxing**: The move toward native Linux sandboxing (`bubblewrap`) indicates a desire for secure local execution without the overhead of container engines.

## 6. Developer Pain Points
*   **The "Ghosting" Agent**: The most significant frustration today is the agent's apparent instability during transition states (specifically Plan -> Execute).
*   **Terminal UX Flicker**: Issues with scrolling, resizing (flicker), and status display (concatenated thoughts) suggest the underlying TUI framework (Ink/React) is struggling with high-frequency updates.
*   **Tool Isolation**: Developers are finding that sub-agents either have too much access (security risk) or too little (can't access docs), leading to a friction-heavy experience.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-15 | **Source:** github.com/github/copilot-cli

---

### 1. Today's Highlights
The repository is experiencing a high volume of triage activity with 20 issues updated in the last 24 hours, indicating active maintenance alongside user feedback. While no new release was published today, the community is intensely focused on granular configuration—specifically regarding model selection, MCP (Model Context Protocol) server handling, and shell tool security. Several bugs affecting workflow continuity, such as model switching failures and session state errors, were also prominent discussion points.

### 2. Releases
**No new releases** were published in the last 24 hours.

### 3. Hot Issues
*Selected issues based on community engagement, technical impact, and feature requests.*

*   **[#288 Repo/Folder-specific MCP configs](https://github.com/github/copilot-cli/issues/288)** ⭐ *High Demand*
    *   **Why it matters:** Users are adopting complex, project-specific MCP server architectures (e.g., neo4j) and need a way to merge global and local configurations without conflict.
    *   **Reaction:** 5 upvotes; strong request for hierarchical config support.

*   **[#1599 UI Bug: Output flickering during streaming](https://github.com/github/copilot-cli/issues/1599)** ⭐ *UX Critical*
    *   **Why it matters:** The "visual trembling" effect during text generation makes the tool physically difficult to use, impacting readability significantly.
    *   **Reaction:** 7 upvotes; priority for UI stability fixes.

*   **[#2032 Configurable models for sub-tasks](https://github.com/github/copilot-cli/issues/2032)**
    *   **Why it matters:** Advanced users want to decouple "reasoning" models from "utility" models (e.g., using cheaper/faster models for summarization/compaction).
    *   **Reaction:** New feature proposal gaining traction for cost and latency optimization.

*   **[#196 CLI not able to run any commands (Windows)](https://github.com/github/copilot-cli/issues/196)**
    *   **Why it matters:** A critical regression affecting Windows users where the CLI fails to execute shell commands (Powershell/CMD), effectively blocking usage.
    *   **Reaction:** Recently closed (14 comments), but highlights ongoing Windows compatibility struggles.

*   **[#2041 Model switch failure in-session](https://github.com/github/copilot-cli/issues/2041)**
    *   **Why it matters:** Users attempting to switch models (e.g., from `gpt-5-mini` to `Sonnet-4.6`) mid-session find the CLI reverting to the initial model, violating user expectations.
    *   **Reaction:** 0 upvotes, but a high-severity functional bug.

*   **[#2040 Skills not loaded in -p/--prompt mode](https://github.com/github/copilot-cli/issues/2040)**
    *   **Why it matters:** Automation workflows relying on the non-interactive `-p` flag are broken because slash commands (`/my-skill`) are not resolved.
    *   **Reaction:** Breaks scripting capabilities; urgent for CI/CD users.

*   **[#2029 Autopilot mode should be non-blocking](https://github.com/github/copilot-cli/issues/2029)**
    *   **Why it matters:** "Autopilot" currently pauses for user input, defeating the purpose of autonomous execution.
    *   **Reaction:** Key workflow improvement for unattended agent usage.

*   **[#2037 Shell filter granularity](https://github.com/github/copilot-cli/issues/2037)**
    *   **Why it matters:** Security-conscious users cannot restrict sub-commands (e.g., allowing `deno task` but blocking `deno install`).
    *   **Reaction:** Critical for implementing least-privilege security policies in agents.

*   **[#2036 Redundant MCP OAuth Flows](https://github.com/github/copilot-cli/issues/2036)**
    *   **Why it matters:** Users with multiple MCP servers using the same Client ID are spammed with auth prompts.
    *   **Reaction:** Quality of life improvement requested for auth token de-duplication.

*   **[#2027 /pr fix does not close feedback](https://github.com/github/copilot-cli/issues/2027)**
    *   **Why it matters:** The `/pr fix` command automates code changes but requires manual cleanup of GitHub comments, adding friction.
    *   **Reaction:** Request to close the loop fully on PR automation.

### 4. Key PR Progress
**No pull requests** were updated in the last 24 hours.

### 5. Feature Request Trends
Based on the issues updated today, the community is pushing for three specific enhancements:

1.  **Configuration Hierarchy:** Merging global and project-specific configurations for both MCP servers and agents.
2.  **Model Granularity:** Ability to assign different AI models to specific internal sub-tasks (compaction, summarization) versus the main "chat" model.
3.  **Security & Safety:** Enhanced filtering for shell tools to restrict specific sub-commands (e.g., `deno task` only) and better non-blocking behaviors for autopilot modes.

### 6. Developer Pain Points
*   **Visual Instability:** The severe text flickering during streaming (Issue #1599) remains a top complaint for daily users.
*   **Windows Support:** Reports of the CLI failing to execute any commands on Windows (Issue #196) suggest underlying shell integration issues.
*   **State Management:** Frustrations are mounting over "state" issues—ranging from sessions not respecting model changes (Issue #2041) to `XDG_CONFIG_HOME` paths being ignored (Issue #2035) during agent creation.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-15

**Status Report:** Development activity remains robust with a strong focus on stability across different operating systems (Windows/macOS/Linux) and maintenance of underlying core dependencies.

## 1. Today's Highlights
Today's updates primarily address cross-platform compatibility and file handling stability. Key fixes include a patch for Windows-specific concurrent file locking errors and a long-awaited fix for macOS image pasting (`Cmd+V`). Additionally, the team is pushing forward with modernizing the terminal handling code to align with the latest ACP 0.8 API standards.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
*Based on the last 24 hours of activity.*

*   **[#1437 Enter key appends `[13u` instead of sending message](https://github.com/MoonshotAI/kimi-cli/issues/1437)** ⚠️ **Linux/VSCode**
    Users on Linux (specifically Arch) running Kimi inside the VS Code integrated terminal are experiencing a critical input failure where pressing 'Enter' prints raw escape codes instead of executing the prompt.
*   **[#1436 Gitbash start kimi failed](https://github.com/MoonshotAI/kimi-cli/issues/1436)** ⚠️ **Windows**
    Users attempting to launch the CLI via Git Bash on Windows are encountering startup failures, preventing the tool from loading entirely.
*   **[#1433 clipboard only considers the Ctrl + V shortcut... ignoring Cmd + V](https://github.com/MoonshotAI/kimi-cli/issues/1433)** ⭐ **macOS**
    A highly requested usability fix for macOS users. The CLI previously failed to recognize images pasted via the standard `Cmd+V` shortcut, treating them as text input.
*   **[#1427 cli will output a large amount of log-like content when it is started](https://github.com/MoonshotAI/kimi-cli/issues/1427)** 🗣️ **macOS**
    Users report noisy console output on startup (Darwin 24.6.0), cluttering the terminal interface before the session begins.
*   **[#1435 Feature Request: Add PicoClaw support](https://github.com/MoonshotAI/kimi-cli/issues/1435)** 🚀 **Integration**
    A request to open the "Kimi For Coding" API to allow compatibility with **PicoClaw**, an open-source AI agent project.

## 4. Key PR Progress
*Active maintenance and fixes merged or proposed in the last 24 hours.*

*   **[#1434 fix(shell): handle Cmd+V image paste via BracketedPaste event](https://github.com/MoonshotAI/kimi-cli/pull/1434)** 🛠️ **Fix**
    *Targeting Issue #1433.* This PR updates the shell input handling to intercept the "Bracketed Paste" event generated by terminals when `Cmd+V` is used on macOS, ensuring images are correctly processed rather than inserted as text paths.
*   **[#1438 fix: add asyncio.Lock to Context to prevent concurrent file write errors on Windows](https://github.com/MoonshotAI/kimi-cli/pull/1438)** 🛠️ **Stability**
    *Targeting Issue #1429.* Addresses `PermissionError` crashes on Windows by introducing an `asyncio.Lock` to the `Context` class, preventing race conditions when multiple async tasks attempt to write to `context.jsonl` simultaneously.
*   **[#1400 fix: replace removed acp.TerminalHandle with Client terminal methods](https://github.com/MoonshotAI/kimi-cli/pull/1400)** ♻️ **Refactor**
    A significant update to the core logic (`tools.py` and `kaos.py`) to remove deprecated `acp.TerminalHandle` usage in favor of the new ACP 0.8 request/response API. This future-proofs the codebase against breaking changes in dependencies.
*   **[#1439 docs: clarify dev setup](https://github.com/MoonshotAI/kimi-cli/pull/1439)** 📝 **Docs**
    Improves the contributor experience by updating `CONTRIBUTING.md` with clearer instructions on running the Web UI from source and enabling hot reload.

## 5. Feature Request Trends
*   **API Flexibility:** Users are looking for ways to integrate their "Kimi For Coding" subscriptions with third-party agent tools (e.g., **PicoClaw**).
*   **Configuration Control:** A recurring request is the ability to fine-tune environment constraints, specifically the desire for a **`/timeout`** flag to adjust operation limits beyond the default 60s.

## 6. Developer Pain Points
*   **Cross-Platform Shell Inconsistencies:** Input handling varies wildly between terminals. Issues range from raw escape codes printing in Linux/VSCode (`[13u`) to clipboard failures on macOS (`Cmd+V`), suggesting a need for a more unified abstraction layer for shell events.
*   **Windows File Locking:** The architecture on Windows is prone to concurrency issues with file access, leading to `PermissionError` exceptions during async operations.
*   **Noisy Logs:** Users on macOS are frustrated with excessive logging output at startup, which degrades the user experience.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-03-15

**Today's Highlights**
The community is actively addressing stability concerns in the latest v1.2.25 release, specifically regarding aggressive timeouts and SSE errors impacting local models. Concurrently, significant strides are being made in User Experience (UX) improvements, with multiple Pull Requests merging features like reverse-search in the TUI and fixes for session list sorting.

## 1. Today's Highlights
Despite no official release in the last 24 hours, the `anomalyco/opencode` repository is buzzing with activity addressing critical regressions in v1.2.25 and refining the Terminal User Interface (TUI). Developers are rallying to fix timeout issues affecting larger local contexts, while contributors have successfully merged quality-of-life improvements such as `Ctrl+R` reverse search and session sorting logic. The discussion around resource management—specifically MCP tool schema loading and memory leaks—remains a top priority for the core team.

## 2. Releases
**Latest Release:** None (last 24h)

## 3. Hot Issues
*These issues have garnered significant attention and upvotes in the last day.*

1.  **[#8030: Copilot auth consuming premium requests rapidly](https://github.com/anomalyco/opencode/issues/8030)** *(OPEN, 179 comments)*
    *   **Why it matters:** A critical billing issue for users. Agent-initiated requests are allegedly being tagged as "user" requests, exhausting monthly quotas unexpectedly.
    *   **Reaction:** High community frustration (62 👍).

2.  **[#5361: TUI freezes periodically on WSL2 (regression)](https://github.com/anomalyco/opencode/issues/5361)** *(OPEN, 30 comments)*
    *   **Why it matters:** Usability regression in v1.0.129+ causing 10-second freezes during input on WSL2.
    *   **Reaction:** Users reporting disrupted workflows; impact focused on Windows Subsystem for Linux.

3.  **[#12687: Severe Memory Leak/Disk Swell on macOS](https://github.com/anomalyco/opencode/issues/12687)** *(OPEN, 28 comments)*
    *   **Why it matters:** Reports of kernel panics due to resource mismanagement during intensive use. Critical for system stability.
    *   **Reaction:** High urgency; users seeking mitigation strategies immediately.

4.  **[#17318: SSE read timed out (v1.2.25)](https://github.com/anomalyco/opencode/issues/17318)** *(OPEN, 22 comments)*
    *   **Why it matters:** A direct regression in the latest version causing errors during file writing operations.

5.  **[#16470: Code output unreadable in light mode](https://github.com/anomalyco/opencode/issues/16470)** *(OPEN, 21 comments)*
    *   **Why it matters:** Visual regression making formatted code invisible in light themes, effectively blocking usage for affected developers.

6.  **[#13217: Stops after compaction](https://github.com/anomalyco/opencode/issues/13217)** *(OPEN, 10 comments)*
    *   **Why it matters:** Disrupts long-running tasks. The agent halts mid-task after context compaction, requiring manual intervention ("keep going") to resume.

7.  **[#17307: 1.2.25 timeouts too aggressive for local models](https://github.com/anomalyco/opencode/issues/17307)** *(OPEN, 5 comments)*
    *   **Why it matters:** New timeout defaults are breaking workflows for users running local LLMs with large contexts (100k+ tokens).

8.  **[#17482: Feature Request - Dynamic/Lazy Loading for MCP Tool Schemas](https://github.com/anomalyco/opencode/issues/17482)** *(OPEN, 3 comments)*
    *   **Why it matters:** Proposal to fix token inefficiency. Currently, entire tool schemas are injected into context, causing bloat.
    *   **Reaction:** Positive reception for performance optimization ideas.

9.  **[#17516: `opencode run` hangs after completing tool calls](https://github.com/anomalyco/opencode/issues/17516)** *(OPEN, 3 comments)*
    *   **Why it matters:** Breaks automation scripts/CI pipelines by not exiting properly after completion.

10. **[#17531: Copilot session auto-titling fails if gpt-5-mini is disabled](https://github.com/anomalyco/opencode/issues/17531)** *(OPEN, 2 comments)*
    *   **Why it matters:** Enterprise users with strict model policies cannot use the auto-titling feature, forcing manual session management.

## 4. Key PR Progress
*Notable pull requests updated or merged in the last 24 hours.*

1.  **[#17525: feat(tui): add Ctrl+R reverse search](https://github.com/anomalyco/opencode/pull/17525)** *(CLOSED - Merged)*
    *   **Change:** Implements `bash`-style reverse-i-search for prompt history navigation.
    *   **Impact:** Massive UX win for power users managing complex prompt chains.

2.  **[#17526: fix(app): sort session list by updated time](https://github.com/anomalyco/opencode/pull/17526)** *(CLOSED - Merged)*
    *   **Change:** Alters session sorting logic from `id` to `time.updated`.
    *   **Impact:** Fixes confusing UX where active sessions appeared buried in the list.

3.  **[#17528: fix(tui): show prompt when viewing subagent sessions](https://github.com/anomalyco/opencode/pull/17528)** *(CLOSED - Merged)*
    *   **Change:** Corrects visibility logic so the prompt is displayed when viewing subagent sessions.
    *   **Impact:** Improves debuggability and transparency of agent tasks.

4.  **[#16625: fix(ui): prevent mobile scroll flickering](https://github.com/anomalyco/opencode/pull/16625)** *(OPEN)*
    *   **Change:** Adds touch event support to prevent infinite loops during AI streaming on mobile.
    *   **Impact:** Critical for the usability of the WebUI on mobile devices.

5.  **[#13795: feat(session): add messageCount endpoint](https://github.com/anomalyco/opencode/pull/13795)** *(OPEN)*
    *   **Change:** Introduces efficient `SELECT COUNT(*)` method for session stats.
    *   **Impact:** Performance improvement for plugins/UI elements needing message counts.

6.  **[#12679: feat(tui): vim motions in prompt input](https://github.com/anomalyco/opencode/pull/12679)** *(OPEN)*
    *   **Change:** Optional Vim motions for the TUI prompt input.
    *   **Impact:** Highly anticipated feature for Vim-users (toggleable).

7.  **[#17529: fix: DeepSeek API reasoning_content error](https://github.com/anomalyco/opencode/pull/17529)** *(OPEN)*
    *   **Change:** Corrects transformation of reasoning blocks for DeepSeek API compatibility.
    *   **Impact:** Restores functionality for users of DeepSeek models.

8.  **[#17520: fix(app): desktop comments via button click](https://github.com/anomalyco/opencode/pull/17520)** *(OPEN)*
    *   **Change:** Fixes mouse interaction for code comments in Desktop App/Safari.
    *   **Impact:** Resolves #11947; restores the review workflow on macOS/Safari.

9.  **[#15685: feat(tui): support --command flag](https://github.com/anomalyco/opencode/pull/15685)** *(OPEN)*
    *   **Change:** Allows passing commands to TUI on startup.
    *   **Impact:** Enables automation and aliasing within the TUI environment.

10. **[#17517: fix: await plugin event hooks](https://github.com/anomalyco/opencode/pull/17517)** *(OPEN)*
    *   **Change:** Ensures plugin hooks are awaited and errors are handled.
    *   **Impact:** Improves stability of the plugin system and prevents silent failures.

## 5. Feature Request Trends
Based on issue activity, the community is driving development in these directions:

*   **Mobile & Web UI Optimization:** There is a persistent push for better mobile support (Issues #10288, #16625) and native mobile apps (Issue #6536).
*   **Plugin Architecture:** Users want deeper integration, specifically Native StatusLine Hooks (Issue #8619) and Context-Free display areas to avoid context bloat.
*   **TUI Power User Features:** High demand for Vim keybindings (PR #12679) and better history management (PR #17525).
*   **Token/Performance Efficiency:** A growing trend toward "Lazy Loading" or "Dynamic" context management, specifically for MCP Tool Schemas (Issue #17482).

## 6. Developer Pain Points
*Recurring themes causing frustration for OpenCode developers.*

*   **Cost & Billing Management:** The controversy over request classification (Issue #8030) highlights anxiety regarding API costs and "premium" request consumption.
*   **Stability of Latest Versions:** The v1.2.25 release introduced regressions (timeouts, SSE errors, UI rendering) that are disrupting daily workflows for several users.
*   **Clipboard & Input Hijacking:** Long-standing requests to disable custom clipboard overrides (Issue #2845, #10780) indicate that OpenCode's handling of text selection conflicts with developer OS workflows.
*   **Resource Exhaustion:** Reports of memory leaks (Issue #12687) and kernel panics suggest that long-running sessions with large contexts are currently unstable.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-03-15

## 1. Today's Highlights
The Qwen Code community is actively addressing stability concerns in the v0.12.3 release, specifically focusing on fixing a P0 "Internal error" related to tool_call handling during retries and prompt cancellations. Significant progress is being made on the extensibility front, with the introduction of a bundled `/review` skill and a new `/btw` command for ephemeral context queries. Additionally, the VS Code extension has received a major update, finally enabling flexible sidebar positioning for the chat interface.

## 2. Releases
**v0.12.3-nightly.20260314**
A new nightly build (`f1ee4638`) was released today. This specific hotfix iteration focuses on stabilizing the tool response mechanism and resolving race conditions in the VS Code interface.
*   **Changelog**: https://github.com/QwenLM/qwen-code/compare/v0.12.3...v0.12.3-nightly.20260314.f1ee4638

## 3. Hot Issues
*   **[#2381 Internal Error Frequency](https://github.com/QwenLM/qwen-code/issues/2381)** (P0)
    Users are experiencing persistent "Internal error (code: -32603)" messages after stopping generations or during multi-turn chats, specifically regarding missing tool response IDs.
*   **[#2360 API Error 400](https://github.com/QwenLM/qwen-code/issues/2360)** (P0)
    Reports of "tool_calls must be followed by tool messages" errors blocking workflow continuity, highlighting a critical bug in the conversation state management.
*   **[#2198 CLI Spacebar Bug](https://github.com/QwenLM/qwen-code/issues/2198)**
    A widely reported usability issue where the spacebar fails to input characters in the CLI, effectively blocking command input.
*   **[#1870 Sidebar Flexibility](https://github.com/QwenLM/qwen-code/issues/1870)** (Closed)
    A highly requested feature (7+ upvotes) for moving the Qwen Chat to the primary or secondary sidebar in VS Code.
*   **[#1308 Activity Bar Integration](https://github.com/QwenLM/qwen-code/issues/1308)**
    Users are asking for the ability to dock the Qwen Code window into the Activity Bar, similar to other AI coding tools like Copilot.
*   **[#2194 Git Worktree Support](https://github.com/QwenLM/qwen-code/issues/2194)**
    A feature request to add a `--worktree` flag, allowing isolated parallel Qwen Code sessions to prevent conflicts when working on the same repo.
*   **[#2342 Request for /undo](https://github.com/QwenLM/qwen-code/issues/2342)**
    Strong community demand for a `/undo` command to revert agent changes, deemed "extremely important" for recovery from mistakes.
*   **[#2338 Skills Context Confusion](https://github.com/QwenLM/qwen-code/issues/2338)**
    Users report that installed skills (e.g., `shadcn/ui`) are not activating automatically based on conversation context as expected.
*   **[#2373 Portable Chat History](https://github.com/QwenLM/qwen-code/issues/2373)**
    Request for project-local history storage (`.qwen/chat-history`) to enable better portability and sharing of contexts across machines.
*   **[#2379/2380 Extending Bundled Skills](https://github.com/QwenLM/qwen-code/issues/2379)**
    Users want to append custom dimensions (e.g., Accessibility) to the new bundled `/review` skill without completely overriding the default configuration.

## 4. Key PR Progress
*   **[#2367 Fix Core: Strip Orphaned User Entries](https://github.com/QwenLM/qwen-code/pull/2367)** (Open)
    Addresses the P0 "tool_calls must be followed by tool messages" error by fixing logic during retry operations.
*   **[#2380 Feat: Skills Extends Bundled](https://github.com/QwenLM/qwen-code/pull/2380)** (Open)
    Implements `extends: bundled` logic, allowing users to customize system skills (like `/review`) rather than replacing them entirely.
*   **[#2188 Feat: VS Code Sidebar & Layouts](https://github.com/QwenLM/qwen-code/pull/2188)** (Closed)
    Merged functionality to move the Qwen Chat to the Activity Bar, Primary Sidebar, or Secondary Sidebar, resolving top community requests.
*   **[#2376 Feat: Multi-Model Code Review](https://github.com/QwenLM/qwen-code/pull/2376)** (Open)
    Enhances the `/review` skill to run multiple LLMs in parallel with an "arbitrator" model to merge findings into a unified report.
*   **[#2371 Feat: /btw Slash Command](https://github.com/QwenLM/qwen-code/pull/2371)** (Open)
    Adds a `/btw` command for asking side questions that do not pollute the main conversation history or consume tool resources.
*   **[#2374 Fix VS Code: Race Conditions](https://github.com/QwenLM/qwen-code/pull/2374)** (Open)
    Fixes specific race conditions in the VS Code extension that caused malformed history when cancelling prompts mid-stream.
*   **[#2300 Fix: Path Corruption](https://github.com/QwenLM/qwen-code/pull/2300)** (Open)
    Resolves an issue where `qwen3.5-plus` incorrectly inserted spaces into file paths containing mixed Chinese and Latin characters.
*   **[#2356 Fix: Auto-detect Max Tokens](https://github.com/QwenLM/qwen-code/pull/2356)** (Open)
    Ensures non-Qwen models (Claude, GPT) automatically use their maximum token capacity if not explicitly defined in provider settings, preventing truncation.
*   **[#2348 Feat: Bundled /review Skill](https://github.com/QwenLM/qwen-code/pull/2348)** (Closed)
    Introduces the "bundled" skill level and ships the first official `/review` skill for out-of-the-box code analysis.
*   **[#1912 Feat: Agent Arena](https://github.com/QwenLM/qwen-code/pull/1912)** (Open)
    A forward-looking feature for v0.13.0 that runs tasks across multiple models in parallel using isolated Git worktrees for comparison.

## 5. Feature Request Trends
*   **UI Customization:** There is a massive push for flexible IDE layouts, specifically docking the chat interface in different sidebars and customizing activity bar icons.
*   **Advanced Skills Management:** Users are moving beyond basic skill usage to request composability—specifically the ability to extend or "inherit" from built-in skills (like `/review`) rather than rewriting them from scratch.
*   **State Management & Recovery:** Developers are heavily requesting robust state management tools, specifically `/undo` commands for reverting code changes and reliable history persistence across projects.

## 6. Developer Pain Points
*   **API Reliability:** A significant number of developers are facing `Internal error (code: -32603)`, which disrupts the workflow and requires retries. This appears to be related to how the tool handles message role sequencing after interruptions.
*   **Input Glitches:** Basic input failures, such as the inability to type spaces in the CLI or paste API keys, are causing frustration at the fundamental usability level.
*   **Context Confusion:** There is confusion regarding how the AI resolves context conflicts (e.g., between `.qwen/QWEN.md` and `/QWEN.md`) and how/when "Skills" activate automatically.

</details>

<details>
<summary><strong>LLXprt-Code</strong> — <a href="https://github.com/vybestack/llxprt-code">vybestack/llxprt-code</a></summary>

# LLXprt-Code Community Digest: 2026-03-15

**1. Today's Highlights**
The latest nightly release (`v0.10.0-nightly.260314`) addresses a critical disruption in the Anthropic integration where reasoning models would silently halt after thinking blocks, failing to execute subsequent actions. Maintainer @acoliver successfully merged a hotfix (PR #1731) to ensure thinking-only responses properly trigger control flow, while simultaneously preparing a significant upstream sync with `gemini-cli` v0.24.5.

**2. Releases**
*   **[v0.10.0-nightly.260314.49ddce5f0](https://github.com/vybestack/llxprt-code/releases)**
    *   **Fix:** Resolved an issue where "thinking-only" responses from AI models would silently end the interaction turn without returning output or tool use.

**3. Hot Issues**
*   **[#1729: [Loopbreaker] claude stopping after thinking block again](https://github.com/vybestack/llxprt-code/issues/1729)** (Closed)
    *   **Impact:** Users experienced workflow interruptions when Claude models entered a "thinking" state but failed to return text or tool calls, effectively stalling the coding agent.
    *   **Reaction:** The issue was flagged as a critical "Loopbreaker" failure, prompting an immediate fix in the subsequent nightly build.

**4. Key PR Progress**
*   **[#1731: fix(anthropic): prevent thinking-only responses from silently ending the turn](https://github.com/vybestack/llxprt-code/pull/1731)** (Closed)
    *   **Details:** This PR fixes the logic for handling Anthropic's extended thinking mode. It ensures that if a model returns a thinking block without a subsequent text block, the system handles the turn completion correctly rather than stopping silently. It also addresses rendering issues for mixed thinking+text responses.
*   **[#1717: Upstream sync: gemini-cli v0.23.0 to v0.24.5](https://github.com/vybestack/llxprt-code/pull/1717)** (Open)
    *   **Details:** A major update incorporating 121 upstream commits. Key features include the new "Agent Skills" system, which introduces core infrastructure for skill activation, system prompt integration, and a dedicated status bar for agent activity.

**5. Feature Request Trends**
*   **Agent Skills System:** There is a strong focus on modular agent capabilities, driven by the incoming `gemini-cli` sync which adds "Skills" as a core primitive (activation tools, status bars).
*   **Model Resilience:** Users are prioritizing robustness in reasoning models, specifically requesting better handling of "thinking" protocols to prevent silent failures during long-chain reasoning tasks.

**6. Developer Pain Points**
*   **Silent Failures in Reasoning Chains:** The primary frustration this week involves the reliability of "thinking" modes (e.g., OpusThinkingBucketed). Developers reported that the tool would consume tokens for reasoning but then stop without producing the expected code or summary, breaking the "Loopbreaker" safety net.
*   **Upstream Lag:** The maintenance team is actively working to reduce the delay between upstream dependency updates (`gemini-cli`) and LLXprt, currently syncing a backlog of 121 commits to bring features like the Agent Skills system to users.

</details>

<details>
<summary><strong>Pi Mono-Repo</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Mono-Repo Community Digest: 2026-03-15

## 1. Today's Highlights
The Pi Mono-Repo has seen significant activity with the release of **v0.58.0** and a hotfix **v0.58.1**, headlined by a massive expansion of the context window for Claude Opus and Sonnet models to **1M tokens**. Community focus is heavily split between resolving platform-specific bugs (particularly Windows/WSL clipboard interactions) and refining the TUI experience, with several high-quality pull requests addressing scrollback behavior and editor extensibility merging today.

## 2. Releases
### v0.58.1 (Hotfix)
*   **Fixed:** Resolved issues with the OpenAI Codex websocket protocol, ensuring proper header inclusion and SSE stream termination ([#1961](https://github.com/badlogic/pi-mono/issues/1961)).
*   **Added:** Convenience alias `pi uninstall` for `pi install --uninstall` to match standard CLI conventions.

### v0.58.0 (Major Feature Update)
*   **New Features:** Anthropic Claude Opus 4.6 and Sonnet 4.6 (and related Bedrock models) now support a **1M token context window**, a massive increase from the previous 200K limit ([#2135](https://github.com/badlogic/pi-mono/pull/2135)).
*   **Performance:** Extension tool calls now execute in parallel by default, improving agent efficiency.

## 3. Hot Issues
*   **[#2070](https://github.com/badlogic/pi-mono/issues/2070) - Numpad Input Failure**
    *   **Why it matters:** Affects basic usability for developers relying on numpads for input.
    *   **Reaction:** Highly requested fix; printable characters (0-9, +, -, *, /) were incorrectly returning unrecognizable tokens.
*   **[#2110](https://github.com/badlogic/pi-mono/issues/2110) - Agent Lifecycle Events**
    *   **Why it matters:** Critical for extension developers needing to hook into the exact moment an agent finishes processing.
    *   **Reaction:** Request for an `agent_settled` event to signal the true end of a turn beyond `agent_end`.
*   **[#2062](https://github.com/badlogic/pi-mono/issues/2062) - Streaming Usage Config Ignored**
    *   **Why it matters:** Breaks cost tracking and usage metrics for extensions.
    *   **Reaction:** Schema mismatch between code and documentation caused `supportsUsageInStreaming` in `models.json` to be ignored.
*   **[#1722](https://github.com/badlogic/pi-mono/issues/1722) - WSL Clipboard Image Paste**
    *   **Why it matters:** Blocks a common workflow for developers running Pi inside WSL.
    *   **Reaction:** Windows screenshots fail to paste because WSL tools (`wl-paste`) cannot access the Windows clipboard.
*   **[#2024](https://github.com/badlogic/pi-mono/issues/2024) - `/resume` Directory Context**
    *   **Why it matters:** Causes tools to execute in the wrong directory when switching workspaces.
    *   **Reaction:** Resuming from "All" scope loads history but fails to update the Current Working Directory (CWD).
*   **[#2143](https://github.com/badlogic/pi-mono/issues/2143) - Background Task Execution**
    *   **Why it matters:** Limits the ability to run long-running server processes.
    *   **Reaction:** Agents using `nohup` to background tasks are finding the processes killed/timing out after 30s.
*   **[#2140](https://github.com/badlogic/pi-mono/issues/2140) - TUI Cursor Style Reset**
    *   **Why it matters:** Visual regression affecting terminal state.
    *   **Reaction:** The TUI hides the cursor but fails to restore its "blink" style upon exit, leaving it static.
*   **[#2163](https://github.com/badlogic/pi-mono/issues/2163) - Headless OAuth Breakage**
    *   **Why it matters:** Blocks CI/CD and Docker workflows.
    *   **Reaction:** v0.58.0 changes to OAuth broke manual code-paste flows required for headless environments.
*   **[#2168](https://github.com/badlogic/pi-mono/issues/2168) - Content Filtering Masquerading**
    *   **Why it matters:** Obfuscates safety failures.
    *   **Reaction:** The finish reason `content_filter` is being rewritten as `error`, making it difficult for frontends to handle moderation correctly.
*   **[#2161](https://github.com/badlogic/pi-mono/issues/2161) - Model Switching Limits**
    *   **Why it matters:** Creates a "lock-in" effect when hitting usage caps.
    *   **Reaction:** Hitting a usage limit on one provider prevents switching to another provider/model.

## 4. Key PR Progress
*   **[#2165](https://github.com/badlogic/pi-mono/pull/2165) - Ghost Text API**
    *   Adds a `GhostTextProvider` to the TUI Editor, allowing extensions to provide AI-powered inline suggestions (accepted via Tab), similar to GitHub Copilot.
*   **[#2155](https://github.com/badlogic/pi-mono/pull/2155) - Stale Scrollback Fix**
    *   Fixes TUI rendering artifacts where previous session content remains visible when switching sessions via `/resume`.
*   **[#2152](https://github.com/badlogic/pi-mono/pull/2152) - Markdown Spacing**
    *   Refines TUI markdown rendering to remove trailing blank lines after code blocks, tables, and blockquotes, significantly improving copy-paste fidelity.
*   **[#2154](https://github.com/badlogic/pi-mono/pull/2154) - Select List UX**
    *   Makes column sizing in TUI select lists configurable and improves defaults for autocomplete.
*   **[#2138](https://github.com/badlogic/pi-mono/pull/2138) - Hold Condition API**
    *   Introduces `setHoldCondition()` for extensions, allowing background agents to finish work before the headless/print mode exits.
*   **[#2148](https://github.com/badlogic/pi-mono/pull/2148) - Token Cost Fix**
    *   Corrects `calculateCost` logic to stop double-billing for cached tokens.
*   **[#1966](https://github.com/badlogic/pi-mono/pull/1966) - Windows Path Handling**
    *   A major refactor to route shell commands through Pi's abstraction and normalize Windows paths, fixing issues with backslashes in Git Bash.
*   **[#2146](https://github.com/badlogic/pi-mono/pull/2146) - Web UI Build Fix**
    *   Switched from `tsgo` to `tsc` to prevent stripping of `@state()` decorators in Lit components, fixing broken browser rendering.
*   **[#2130](https://github.com/badlogic/pi-mono/pull/2130) - Custom Session IDs**
    *   Allows passing a custom `id` to `newSession()`, enabling better server-side session synchronization.
*   **[#2166](https://github.com/badlogic/pi-mono/pull/2166) - Keyboard Protocol Docs**
    *   Documents known limitations regarding keyboard protocols in terminals like xfce4-terminal and terminator.

## 5. Feature Request Trends
*   **Extensibility of the TUI:** There is a strong push to make the Terminal UI more modular. Top requests include "Ghost Text" for autocomplete and exposing internal `BashOperations` for extensions ([#2170](https://github.com/badlogic/pi-mono/issues/2170)).
*   **Headless/CI Support:** Users are demanding robust workflows for environments without browsers. This includes fixing OAuth flows ([#2163](https://github.com/badlogic/pi-mono/issues/2163)) and adding a Nix flake for reproducible installs ([#2167](https://github.com/badlogic/pi-mono/issues/2167)).
*   **Native File Handling:** Requests are emerging to handle provider-native file IDs (e.g., OpenAI/Anthropic file uploads) to avoid re-sending large files in multi-turn conversations ([#2136](https://github.com/badlogic/pi-mono/issues/2136)).

## 6. Developer Pain Points
*   **Windows & WSL Compatibility:** A significant portion of daily issues relates to Windows. Specific pain points include path handling (slashes vs backslashes), clipboard image pasting in WSL, and test failures specific to the Windows environment.
*   **TUI Polish:** While functional, the TUI has lingering "polish" bugs that frustrate users, specifically trailing spaces when copying text, stale content remaining on screen after navigation, and cursor state management.
*   **Agent Lifecycle & Clarity:** Developers are finding it difficult to track exactly when an agent is "done" (`agent_settled` vs `agent_end`) and are frustrated by vague finish reasons (e.g., `content_filter` appearing as generic `error`).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*