# AI CLI Tools Community Digest 2026-03-23

> Generated: 2026-03-23 00:11 UTC | Tools covered: 7

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

## AI CLI Tools Ecosystem Analysis — 2026-03-23

### 1. Ecosystem Overview
The AI CLI landscape is currently undergoing a **stability and maturity correction**, shifting from rapid feature addition to resolving "platform debt" and user experience friction. While agentic capabilities (multi-step workflows, sub-agents) are becoming standard across all major tools, **Terminal User Interface (TUI) rendering** and **OS-level integration** (clipboard, file systems, signals) have emerged as the primary bottlenecks causing user frustration. There is a visible convergence toward **standardization**—specifically regarding LSP integration for code intelligence and interoperability protocols like ACP (Agent Communication Protocol)—while simultaneously, tools are diverging in their approach to **autonomy and safety**, with heated debates over "YOLO modes" versus strict approval workflows.

### 2. Activity Comparison

| Tool | Issue Volume | PR Velocity | Release Status | Stability Sentiment |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | High (Critical friction) | Moderate | **No Release** | **Low** (Windows BSOD, Cowork limits) |
| **OpenAI Codex** | Moderate | **High** (Active Dev) | **No Release** | Medium (TUI regressions, Sandbox issues) |
| **Gemini CLI** | Moderate | **High** (Refactoring) | **No Release** | Medium (Stuck states, Noisy output) |
| **GitHub Copilot** | **High** (Critical bugs) | Stalled | **No Release** | **Low** (File ops broken, Clipboard broken) |
| **Kimi Code** | Low-Medium | Low-Medium | **No Release** | Medium (Network resilience focus) |
| **OpenCode** | **High** (Auth outage) | **High** (Merging) | **v1.3.0 Released** | Medium (Major Auth bugs) |
| **Qwen Code** | Low | Moderate | **Nightly** (v0.13.0) | High (Pipeline fixes) |

### 3. Shared Feature Directions
*   **Deep Code Intelligence (LSP/AST):**
    *   **Tools:** *OpenAI Codex, Gemini CLI, Qwen Code*
    *   **Requirement:** Communities are demanding the CLI move beyond text-file manipulation. The top request for Codex (#8745) and active PRs in Gemini (#23464) indicate a race to integrate Language Server Protocol (LSP) and Abstract Syntax Tree (AST) analysis for precise symbol navigation and refactoring.
*   **Resilient "Agentic" Task Management:**
    *   **Tools:** *Claude Code, Gemini CLI, OpenCode*
    *   **Requirement:** Moving away from static Markdown plans. Users are requesting persistent, state-aware task trackers (Gemini "Tracker", OpenCode "Git-backed sessions") and robust sub-agent limits (Claude #36727) to prevent infinite loops and cost overruns.
*   **Terminal UX Fundamentals:**
    *   **Tools:** *All (Specifically GitHub Copilot, OpenAI Codex, Claude Code)*
    *   **Requirement:** A cross-platform crisis regarding clipboard handling (Ctrl+Shift+C), text selection, and scrolling stability. Users are rejecting implementations that break standard terminal workflows.
*   **Multi-Account & Context Management:**
    *   **Tools:** *Claude Code, OpenAI Codex*
    *   **Requirement:** Enterprise workflows require support for multiple connector accounts (Claude #27302) and seamless session hand-offs between CLI and Web interfaces (Codex #2153).

### 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Approach |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **Deep Workflow Integration** ("Cowork") | Enterprise / Complex Orchestration | Heavy focus on "Connectors" and sub-agents, but currently plagued by platform strictness (symlink/blocking issues). |
| **OpenAI Codex** | **Safety & Governance** | Security-Conscious Teams | heavily investing in "Guardian Approval" profiles and permission persistence to satisfy enterprise safety standards. |
| **Gemini CLI** | **Architectural Purity** | Infrastructure / Power Users | Focused on internal architecture (TrackerService, MessageBus) and "Thinking Mode" integration; prioritizes distinct planning/pro phases. |
| **GitHub Copilot CLI** | **IDE Ecosystem Synergy** | GitHub / VSCode Native Users | Aims for parity with VS Code extensions, but currently struggling with basic API stability and TUI implementation quality. |
| **Kimi Code** | **Unattended Autonomy ("YOLO")** | Individual / Freelance Developers | Leaning into "YOLO mode" (auto-approval) and network resilience, catering to users who want speed over safety guardrails. |
| **OpenCode** | **Universal Agentic Bus** | Integration-Focused Developers | Focuses on GitLab agents and ACP (Agent Communication Protocol) standards, acting as a hub for disparate workflows. |
| **Qwen Code** | **Cost-Efficiency & Customization** | Budget-Conscious / Tinkerers | Focuses on aggressive context optimization (masking, dynamic truncation) and system prompt customization. |

### 5. Community Momentum & Maturity
*   **Highest Velocity:** **Gemini CLI** and **OpenCode** show the strongest development momentum, with active refactoring and feature-rich PRs (LSP, OAuth, Task Trackers) despite bugs.
*   **Most Stability Concerns:** **GitHub Copilot CLI** and **Claude Code** are facing the strongest headwinds. Copilot is dealing with critical file-operation bugs, while Claude Code is battling platform-level crashes (Windows BSOD) and UX regressions in its new "Cowork" feature.
*   **Steady Growth:** **Kimi Code** and **Qwen Code** maintain smaller but highly engaged communities, focusing on specific niche needs (long-context reliability and cost-saving optimizations, respectively).

### 6. Trend Signals
1.  **The "Platformization" of CLI:** AI CLIs are no longer just chat interfaces; they are evolving into **operating systems for agents**. The demand for LSP support, interactive shells (sudo/stdin), and multi-agent task trackers signals a shift toward using the CLI as a primary development environment, not just an assistant.
2.  **Auth & Identity is a Bottleneck:** The widespread "Invalid Token" outage in **OpenCode** and the "Auth Refresh" errors in **Codex** highlight a fragility in how these tools handle cloud identity. Reliability is now defined by auth stability as much as model output.
3.  **Demand for "Safe Autonomy":** There is a clear tension between the desire for speed (YOLO modes, auto-approval) and the need for safety (permission profiles, sandbox limits). The most successful tools will be those that offer granular, configurable layers of "human-in-the-loop" control without breaking the flow state.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Period:** 2025-10-17 to 2026-03-23
**Source:** anthropics/skills repository

---

### 1. Top Skills Ranking
Based on community engagement and discussion volume in Pull Requests:

*   **[#514 document-typography](https://github.com/anthropics/skills/pull/514)**
    *   **Function:** Typographic quality control for AI-generated documents, fixing orphan word wrap, widow paragraphs, and numbering misalignment.
    *   **Status:** Open | Created: 2026-03-04
    *   **Insight:** Addresses a universal quality issue in AI outputs that users rarely explicitly request but always appreciate.

*   **[#509 CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)**
    *   **Function:** Adds a contribution guide to address the repository's low community health score (25%).
    *   **Status:** Open | Created: 2026-03-03
    *   **Insight:** High priority for repository maintainers to streamline community submissions.

*   **[#664 claude-obsidian-reporter](https://github.com/anthropics/skills/pull/664)**
    *   **Function:** Automated daily, weekly, and monthly Git report generation integrated directly into Obsidian vaults.
    *   **Status:** Open | Created: 2026-03-16
    *   **Insight:** Strong interest in automated personal knowledge management (PKM) workflows.

*   **[#210 frontend-design improvement](https://github.com/anthropics/skills/pull/210)**
    *   **Function:** Refines the `frontend-design` skill to be more actionable and coherent within a single conversation.
    *   **Status:** Open | Created: 2026-01-05
    *   **Insight:** Focuses on "actionability" rather than abstract theory for AI agent execution.

*   **[#629 session-memory](https://github.com/anthropics/skills/pull/629)**
    *   **Function:** Preserves critical technical facts across context compaction and session restarts without external dependencies.
    *   **Status:** Open | Created: 2026-03-13
    *   **Insight:** Tackles the critical "amnesia" problem in long coding sessions caused by context window limits.

*   **[#147 codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)**
    *   **Function:** Systematic 10-step workflow to identify orphaned code, unused files, and documentation gaps.
    *   **Status:** Open | Created: 2025-12-16
    *   **Insight:** Meets the demand for maintaining large, legacy codebases efficiently.

---

### 2. Community Demand Trends
Derived from Issue discussions and proposal requests:

*   **Cross-Session Memory (Context Persistence):**
    *   Users are actively seeking robust solutions to maintain context across "context compaction" events.
    *   *Example:* The session-memory skill (#629) and shodh-memory skill (#154) are highly active areas of development.
*   **Evaluation & Quality Assurance:**
    *   Significant demand for tools to audit and validate other Skills.
    *   *Example:* Issue #202 and PR #83 (skill-quality-analyzer) highlight the need to ensure community skills meet best practices.
*   **Integration with Ecosystems (Obsidian/Git):**
    *   Developers want seamless integration between coding workflows and documentation tools like Obsidian.
    *   *Example:* PR #664 (claude-obsidian-reporter).
*   **Security & Trust Boundaries:**
    *   Concerns regarding namespace impersonation (#492) and the need for "agent governance" patterns (#412) are rising.

---

### 3. High-Potential Pending Skills
Active Open PRs likely to influence the ecosystem soon:

*   **[Masonry AI (#335)](https://github.com/anthropics/skills/pull/335):** Image and video generation skill (Veo 3.1, Imagen 3.0) — indicates demand for multimodal capabilities.
*   **[ODT Support (#486)](https://github.com/anthropics/skills/pull/486):** OpenDocument text creation/parsing — addresses open-standard interoperability.
*   **[SAP-RPT-1-OSS Predictor (#181)](https://github.com/anthropics/skills/pull/181):** Predictive analytics on SAP business data — signifies enterprise penetration.

---

### 4. Skills Ecosystem Insight
The community is currently concentrating its demand on **"Agent Reliability and Persistence"**—specifically, skills that help AI agents maintain context over long sessions, audit codebases accurately, and integrate deeply with existing developer tools (like Git and Obsidian).

---

# Claude Code Community Digest — 2026-03-23

## 1. Today's Highlights

Today's digest highlights significant ongoing community friction regarding platform stability and user experience. A critical **Windows BSOD (Blue Screen of Death)** issue caused by parallel file system enumeration has an open pull request for a "tool-mutex" plugin fix. Meanwhile, discussions around **Cowork** functionality and **Sub-agent token limits** reveal growing pains as users push the tool's capabilities in complex, multi-agent workflows.

## 2. Releases

**No new releases** in the last 24 hours.

## 3. Hot Issues

*   **[#24964](https://github.com/anthropics/claude-code/issues/24964) - [BUG] Cowork: Folder picker rejects folders outside home directory**
    The most active thread (135👍) highlights a regression where Cowork blocks access to projects outside the user's home directory and prevents the use of symlinks or junctions. This significantly hampers developers managing disparate project structures on Windows and macOS.
*   **[#27302](https://github.com/anthropics/claude-code/issues/27302) - [FEATURE] Support multiple Connector accounts**
    A highly requested enhancement (84👍) asking for the ability to use multiple accounts for the same Connector (e.g., GitHub) within the web interface. This addresses enterprise workflows where developers need to operate across different organizations or personas.
*   **[#1486](https://github.com/anthropics/claude-code/issues/1486) - [BUG] View intermittently jumps to top of terminal**
    A persistent bug (87👍) affecting the TUI where the terminal view jumps to the top while scrolling back through code edits during a streaming response. This disrupts the code review process significantly.
*   **[#33367](https://github.com/anthropics/claude-code/issues/33367) - [Bug] Scroll position jumps when Claude streams output**
    Related to the above, this issue (47👍) specifically calls out "scrolling jitter" introduced in recent updates, making it difficult to read output while the model is still generating.
*   **[#9488](https://github.com/anthropics/claude-code/issues/9488) - [FEATURE] Expose Thinking Mode Status in StatusLine**
    Users want better visibility into the AI's state. This request (41👍) asks for the StatusLine JSON input to include whether "Thinking Mode" is active, allowing for better integration with custom status bars.
*   **[#37273](https://github.com/anthropics/claude-code/issues/37273) - Cowork: Context compaction permanently removes history**
    A critical UX concern for the new Cowork feature. When context limits are reached, the conversation history is summarized and the full history is deleted from the UI, preventing users from scrolling back to review previous interactions.
*   **[#36727](https://github.com/anthropics/claude-code/issues/36727) - Sub-agent has no tool call / token limits**
    A costly oversight identified by a user where a dispatched sub-agent entered an unbounded loop, consuming excessive tokens without limits. The user requests configurable caps for sub-agents to prevent billing surprises.
*   **[#34622](https://github.com/anthropics/claude-code/issues/34622) - Malware campaign impersonating Claude Code via Google Ads**
    A security alert warning the community about a fake "Claude Code" install page promoted via Google Ads that delivers macOS credential stealers.
*   **[#37594](https://github.com/anthropics/claude-code/issues/37594) - API Error: Rate limit reached**
    Multiple reports (duplicates noted) of users hitting "Rate limit reached" errors despite being far below their actual usage limits, suggesting a backend metric issue.
*   **[#21236](https://github.com/anthropics/claude-code/issues/21236) - Option to disable automatic git worktree creation**
    Users want more control over repository isolation, specifically requesting the ability to disable the automatic creation of git worktrees when linking repositories.

## 4. Key PR Progress

*   **[#35710](https://github.com/anthropics/claude-code/pull/35710) - Fix: Add tool-mutex plugin to prevent Wof.sys BSOD**
    A critical fix attempting to resolve Windows system crashes caused by concurrent file system operations. It introduces a mutex to serialize `Glob`, `Grep`, `Read`, and `Bash` tool calls.
*   **[#37082](https://github.com/anthropics/claude-code/pull/37082) - Feat: Add agentmarkup plugin**
    Introduces a plugin to make websites more readable for AI agents. It provides a `/agentmarkup` command to help set up `llms.txt`, `JSON-LD`, and crawler directives.
*   **[#37241](https://github.com/anthropics/claude-code/pull/37241) - Add agents-md plugin**
    A cross-tool compatibility plugin that automatically loads `AGENTS.md` at session start. This addresses the gap between Claude Code and other editors like Cursor or VS Code which use this standard.
*   **[#36253](https://github.com/anthropics/claude-code/pull/36253) - Add hook examples**
    Adds documentation and practical examples for using hooks, specifically for file guards, session primers, and notifications, addressing complaints that the current documentation is unclear.

## 5. Feature Request Trends

*   **Observability & Cost Control:** There is a clear demand for better visibility into resource usage. Requests for exposing "Thinking Mode" status in the status bar and adding hard limits to sub-agent token consumption indicate developers want to avoid "black box" billing surprises.
*   **Workflow Integration:** Users are pushing for better integration with standard development tools. The `agents-md` plugin PR and the request for multiple Connector accounts suggest a desire to make Claude Code a seamless part of a larger, multi-account IDE workflow.
*   **UI/UX Stability:** A significant portion of the top issues relates to the TUI—specifically scrolling instability. The community is vocal about needing smooth, predictable text rendering, especially when the model is streaming output.

## 6. Developer Pain Points

*   **Platform Instability on Windows:** Windows users are facing the brunt of critical issues, ranging from the BSOD caused by file system racing to the Cowork feature failing due to Hypervisor errors on specific hardware.
*   **Cowork Limitations:** While the "Cowork" feature is new, it is introducing friction points. Users are reporting that it breaks standard workflows (blocking symlinks, restricting folder paths) and destroys chat history via aggressive context compaction.
*   **Plugin & Hook Reliability:** While the plugin system is powerful, developers are encountering bugs with plugins not loading skills correctly (`/reload-plugins` issues) and finding the hook system difficult to implement due to misleading documentation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-03-23

## 1. Today's Highlights
The community is currently focused on critical stability issues regarding the **Codex CLI 0.116.0** update, specifically targeting text rendering artifacts in the TUI and JSON schema validation failures. Simultaneously, a heated debate has emerged regarding **autonomous agent safety**, following reports that Codex created public GitHub repositories by default. On the feature front, significant development effort is visible in Pull Requests related to **execution approval profiles**, suggesting a move toward more granular permission controls for sandbox operations.

## 2. Latest Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues

1.  **[#12661 Markdown `file://` links open in external browser](https://github.com/openai/codex/issues/12661)** 👍 28
    *   **Why it matters:** Breaks workflow continuity for Windows users. Local documentation links open in Edge instead of the editor, preventing seamless navigation between code and docs.
    *   **Reaction:** High frustration from VS Code users; specific to Windows 11/VS Code environment.

2.  **[#8745 LSP integration for Codex CLI](https://github.com/openai/codex/issues/8745)** 👍 200
    *   **Why it matters:** The most highly requested feature. Users want Codex to act as a full IDE assistant by leveraging Language Server Protocol for symbol intelligence and diagnostics, rather than just code generation.
    *   **Reaction:** Immense support (200 upvotes); developers want deeper editor integration.

3.  **[#15476 Codex created public GitHub repo by default](https://github.com/openai/codex/issues/15476)** 👍 0
    *   **Why it matters:** Critical security/safety concern. Autonomous actions should default to the most private setting.
    *   **Reaction:** High alarm; users expect "Safe by Default" behavior for autonomous agent actions.

4.  **[#9634 Auth Token Refresh Error](https://github.com/openai/codex/issues/9634)** 👍 4
    *   **Why it matters:** Persistent authentication bug preventing Pro users from maintaining sessions.
    *   **Reaction:** Recurring issue; users forced to log out/in repeatedly.

5.  **[#10901 TUI Responses Cut Off](https://github.com/openai/codex/issues/10901)** 👍 17
    *   **Why it matters:** Core readability regression in the CLI TUI.
    *   **Reaction:** Visual bug degrading the terminal experience; screenshots confirm text truncation.

6.  **[#15449 Markdown tables not rendered in TUI](https://github.com/openai/codex/issues/15449)** 👍 0
    *   **Why it matters:** Markdown tables display as raw text, making complex data output unreadable in the terminal.
    *   **Reaction:** UX friction; developers expect aligned tables for structured output.

7.  **[#5237 Sandbox escapes working directory (Windows)](https://github.com/openai/codex/issues/5237)** 👍 16
    *   **Why it matters:** Security boundary violation. The agent is reading files outside the designated project root.
    *   **Reaction:** "Permission without my permission" is a major trust issue for local file access.

8.  **[#2153 ChatGPT Integration](https://github.com/openai/codex/issues/2153)** 👍 94
    *   **Why it matters:** Users want a fluid hand-off between terminal coding and browser-based research/brainstorming.
    *   **Reaction:** Strong desire for a unified interface moving from CLI to Web UI.

9.  **[#13802 FreeBSD Support Removed](https://github.com/openai/codex/issues/13802)** 👍 2
    *   **Why it matters:** Regression in platform support; NPM installs are failing for FreeBSD users.
    *   **Reaction:** Niche but vocal segment of the community impacted by platform drops.

10. **[#11555 TUI auto-fills with `MallocSt...` text](https://github.com/openai/codex/issues/11555)** 👍 4
    *   **Why it matters:** Input field corruption where debug/error text spills into the user prompt area.
    *   **Reaction:** Bizarre bug causing confusion during typing.

## 4. Key PR Progress

1.  **[#15464 Remove smart_approvals alias migration](https://github.com/openai/codex/pull/15464)** (Closed)
    *   **Change:** Cleanup of legacy config migrations (`smart_approvals` -> `guardian_approval`).
    *   **Impact:** Simplifies config loading logic and prevents legacy settings from being rewritten.

2.  **[#15465 CodeMode: Manage turn worker shutdown](https://github.com/openai/codex/pull/15465)** (Open)
    *   **Change:** Codifies the shutdown of "turn workers" to ensure only one processes at a time.
    *   **Impact:** Improves resource management and stability during concurrent operations.

3.  **[#15470 Add request_permissions profile persistence core support](https://github.com/openai/codex/pull/15470)** (Open)
    *   **Change:** Core logic to support persistent permission profiles for requests.
    *   **Impact:** Foundation for remembering user security choices across sessions.

4.  **[#15471 Add request_permissions UI support](https://github.com/openai/codex/pull/15471)** (Open)
    *   **Change:** UI implementation for the new permission request system.
    *   **Impact:** Users will see new interfaces for granting/denying specific agent capabilities.

5.  **[#15472 Add exec approval profile persistence core support](https://github.com/openai/codex/pull/15472)** (Open)
    *   **Change:** Backend logic to save execution approval preferences.
    *   **Impact:** Allows for granular control over which commands/execution paths are pre-approved.

6.  **[#15473 Add exec approval app-server support](https://github.com/openai/codex/pull/15473)** (Open)
    *   **Change:** Server-side handling for the new execution approval profiles.
    *   **Impact:** Completes the loop for the permissions feature set.

7.  **[#14835 TUI: Centralize slash command serialization](https://github.com/openai/codex/pull/14835)** (Open)
    *   **Change:** Refactors how slash commands are parsed and invoked in the TUI.
    *   **Impact:** Reduces code duplication and prepares for easier addition of new commands.

8.  **[#15312 Fix TUI: restore clean agent thread replay](https://github.com/openai/codex/pull/15312)** (Open)
    *   **Change:** Fixes corruption in agent thread views by prioritizing completed message payloads over legacy deltas.
    *   **Impact:** Users should see fewer visual glitches and broken histories during agent runs.

9.  **[#15438 Feat: include marketplace loading error in plugin/list](https://github.com/openai/codex/pull/15438)** (Open)
    *   **Change:** Exposes specific error messages when plugin marketplaces fail to load.
    *   **Impact:** Improves debuggability for plugin connectivity issues.

10. **[#15475 Increase unified_exec=>apply_patch test timeout](https://github.com/openai/codex/pull/15475)** (Open)
    *   **Change:** Addresses a flaky test on Darwin (macOS) builds by increasing timeout.
    *   **Impact:** Stabilizes the CI pipeline, though suggests underlying performance issues with patching on macOS.

## 5. Feature Request Trends

*   **Deep Editor Integration (LSP):** The overwhelming demand (Issue #8745) is for Codex CLI to move beyond static file analysis and integrate with Language Servers. Developers want the CLI to understand project symbols, definitions, and real-time diagnostics.
*   **UI Hand-off (CLI <-> Web):** Users want to seamlessly move sessions from the terminal to the ChatGPT web interface (Issue #2153) to utilize web search or advanced UI brainstorming before returning to code.
*   **Native Diff Visualization:** Developers are unhappy with side-bar diffs (Issue #2932) and want native VS Code diff viewer integration for reviewing Codex changes.

## 6. Developer Pain Points

*   **Windows Sandboxing & File Access:** There is a cluster of issues (Issues #5237, #8537, #12343) indicating the Windows sandbox implementation is unstable. Reports range from reading files outside the working directory to improper path handling in PowerShell.
*   **TUI Rendering Regressions:** Recent updates (v0.116.0) introduced text wrapping bugs, truncation, and markdown table rendering failures (Issues #10901, #15449, #8258). The terminal experience is currently described as "cumbersome" due to poor formatting.
*   **Autonomous Safety Defaults:** The community is pushing back against unsafe defaults in autonomous modes (Issue #15476), emphasizing that repository creation and sandboxing must be "private/secure by default."

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-03-23

## 1. Today's Highlights

Today’s activity focuses heavily on architectural improvements to the "Tracker" task management system and advanced agent capabilities. The community is actively discussing the integration of AST-aware tooling for better code comprehension and tackling significant UI/UX friction points regarding subagent failures and configuration management. While no new stable releases were pushed, a surge of Pull Requests indicates a push toward stabilizing the `v0.32.x` stream with better LSP integration and robust testing utilities.

## 2. Releases

**No new releases detected in the last 24 hours.**
*The latest stable version remains **v0.32.1**. Users on Android 15 (Termux) should note the current P1 issue regarding stuck states after request cancellation.*

## 3. Hot Issues

### Community & Developer Impact
*   **[#21096](https://github.com/google-gemini/gemini-cli/issues/21096) - Request stuck after cancellation (P1)**
    *   **Why it matters:** Affects user control over the agent, specifically on Android/Termux environments. Users find the CLI unresponsive after stopping a generation.
    *   **Reaction:** High engagement (37 comments), significant frustration (👍 13).

### Architecture & Features
*   **[#23316](https://github.com/google-gemini/gemini-cli/issues/23316) - Long-Context Coding Evaluation Dataset**
    *   **Why it matters:** As current benchmarks saturate, Google is proposing a new, harder dataset (175 hours) to evaluate next-gen reasoning capabilities.
    *   **Reaction:** Interest in the "Innovation" track and how this will raise the bar for agent performance.
*   **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) & [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) - AST-Aware Tooling**
    *   **Why it matters:** Moving from text-based search to Abstract Syntax Tree (AST) analysis will drastically improve the agent's ability to understand code structure and dependencies without "noise."
    *   **Reaction:** Technical community is eager for more precise code mapping.
*   **[#22855](https://github.com/google-gemini/gemini-cli/issues/22855) - Support passing prompt to `/plan`**
    *   **Why it matters:** Quality of life improvement. Currently, `/plan` opens a separate box; users want to initialize a plan with a direct command (e.g., `/plan refactor the auth module`).
*   **[#23320](https://github.com/google-gemini/gemini-cli/issues/23320) - SDD Phase 3: Tasks Integration**
    *   **Why it matters:** A major internal shift to replace static Markdown checklists with a persistent, DAG-based `TrackerService`. This implies a move away from `plan.md` to a native task database.

### Bug Reports & UX Friction
*   **[#23230](https://github.com/google-gemini/gemini-cli/issues/23230) - Exiting plan mode does not switch model**
    *   **Why it matters:** Workflow breaker. The agent promises to switch from a planning model (likely Flash) back to a Pro model after confirmation, but fails to do so.
*   **[#23175](https://github.com/google-gemini/gemini-cli/issues/23175) - Deduplicate startup extension warnings**
    *   **Why it matters:** "Clutter" issue. Users are seeing double warnings for deprecated extensions (like `conductor`), making the CLI startup feel noisy.
*   **[#22933](https://github.com/google-gemini/gemini-cli/issues/22933) - Fix the loop problem**
    *   **Why it matters:** Agent gets stuck in a logic loop regarding session IDs and policy checks, preventing it from writing files.
*   **[#23245](https://github.com/google-gemini/gemini-cli/issues/23245) - Context-Aware Persistent Policy Approvals**
    *   **Why it matters:** Security vs. UX. Current "Allow all" settings apply globally, which can be dangerous in "Plan Mode." Users want granular control over when permissions persist.

## 4. Key PR Progress

*   **[#23464](https://github.com/google-gemini/gemini-cli/pull/23464) - Standalone LSP Integration**
    *   **Impact:** A major feature addition. The CLI will now natively support LSP (Language Server Protocol) for compiler diagnostics and semantic queries (go-to-definition, find-references) without needing an IDE.
*   **[#23490](https://github.com/google-gemini/gemini-cli/pull/23490) - Global Cross-Folder Session Resume**
    *   **Impact:** Enhances portability. Users can now resume a session (`gemini --resume <id>`) from any folder, not just the original directory where the session started.
*   **[#23493](https://github.com/google-gemini/gemini-cli/pull/23493) - Fix OAuth MCP Sessions in Chat**
    *   **Impact:** Stability fix. Ensures that OAuth credentials for MCP (Model Context Protocol) servers refresh correctly during active long-running chats, preventing sudden tool failures.
*   **[#23491](https://github.com/google-gemini/gemini-cli/pull/23491) & [#23475](https://github.com/google-gemini/gemini-cli/pull/23475) - Test Utilities & Noise Reduction**
    *   **Impact:** Developer experience. Adds `MockMcpServerBuilder` and utilities to silence console noise in tests, signaling a focus on cleaner CI/CD and more reliable integration testing.
*   **[#23161](https://github.com/google-gemini/gemini-cli/pull/23161) - Fix Subagent Tool Updates**
    *   **Impact:** Fixes a bug where changing a subagent's config (like model or temperature) mid-session wouldn't apply until a restart.
*   **[#23187](https://github.com/google-gemini/gemini-cli/pull/23187) - Fix Subagent Failure UI**
    *   **Impact:** UI Accuracy. Previously, failed shell commands in subagents showed as "Success" (green check). This PR ensures exit codes are propagated correctly to show failure.
*   **[#23487](https://github.com/google-gemini/gemini-cli/pull/23487) - UX Extension**
    *   **Impact:** Meta-tooling. An internal extension for the Google team to automate UX standard enforcement within the CLI's own codebase.
*   **[#23482](https://github.com/google-gemini/gemini-cli/pull/23482) - Optimize MessageBus Debug Logs**
    *   **Impact:** Performance. Debug logging was dumping full JSON payloads on every hook, causing slowdowns. This replaces dumps with concise summaries.

## 5. Feature Request Trends

*   **Unified "Tracker" / Task System:** There is a clear convergence of issues (#23320, #23133, #23131) requesting the replacement of static `plan.md` files with a native, interactive task list (TrackerService) that supports DAGs, progress bars, and real-time status updates.
*   **AST & Semantic Intelligence:** Multiple threads (#22745, #22746, #23464) indicate a push for the CLI to "understand" code better via LSP and AST, rather than just treating files as raw text.
*   **Smarter Plan Mode:** Users want Plan mode to be more robust, specifically requesting direct prompt initialization (#22855) and stricter policy isolation (#23245) to prevent accidental global approvals.

## 6. Developer Pain Points

*   **"Noisy" Output:** Developers are frustrated with duplicate warnings (#23175) and excessive debug logs (#23482, #23470) that clutter the terminal, making it hard to find actual signal.
*   **Agent Looping & Stuck States:** Several issues report the agent getting stuck in logic loops (#22933) or failing to switch states/models correctly after a plan is confirmed (#23230).
*   **Brittle Session Management:** Users face friction when resuming sessions across different folders (#23490) or when MCP servers disconnect due to token expiration (#23493).
*   **Subagent Opacity:** When a subagent fails a shell command, the UI often shows success (#23187), leading to confusion about why the overall task failed.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest: 2026-03-23

## 1. Today's Highlights
Today's digest is dominated by significant stability concerns in **v1.0.10**, specifically regarding "transient API errors" breaking file writes and session corruption after crashes. Additionally, user experience friction continues to mount with reports that the new TUI implementation breaks standard clipboard workflows on both Linux and macOS. There were no new releases or merged pull requests in the last 24 hours.

## 2. Releases
**Status:** No new releases in the last 24 hours.
*Note: Users are currently reporting issues on the latest v1.0.10.*

## 3. Hot Issues
Here are 10 noteworthy issues updated in the last day, highlighting critical bugs and user friction:

1.  **[Request failed... transient API error](https://github.com/github/copilot-cli/issues/2189)**
    *   *Impact:* High. Users are unable to complete basic file operations using the Claude Opus 4.6 model. The tool repeatedly fails when writing plans to the `/doc` folder.
2.  **[Copilot CLI 1.0.10 not able to CREATE or EDIT files](https://github.com/github/copilot-cli/issues/2214)**
    *   *Impact:* Critical. A regression in the latest version appears to have broken core editing functionality, leaving the AI stuck in a retry loop.
3.  **[ctrl+shift+c no longer copies to clipboard on Linux](https://github.com/github/copilot-cli/issues/2082)**
    *   *Impact:* High. Breaks standard muscle memory for Linux users (Ubuntu 24.04) who rely on this shortcut for text selection.
4.  **[Session fails to load after crash — trailing null bytes](https://github.com/github/copilot-cli/issues/2217)**
    *   *Impact:* Medium-High. Highlights fragility in session state management. If the CLI crashes, it appears to corrupt `events.jsonl` with null bytes, preventing session recovery.
5.  **[Copilot CLI does not list all org-enabled models](https://github.com/github/copilot-cli/issues/1703)**
    *   *Impact:* High (👍 20). Users are frustrated that models available in VS Code Copilot (e.g., Gemini 3.1 Pro) do not appear in the CLI, despite being enabled in org settings.
6.  **[macOS Cmd+C copy broken (alt-screen)](https://github.com/github/copilot-cli/issues/1585)**
    *   *Impact:* High (👍 6). The new default "alt-screen" mode in experimental builds is blocking native macOS copy commands due to mouse reporting conflicts.
7.  **[Copying text gets hidden BOM prepended](https://github.com/github/copilot-cli/issues/2218)**
    *   *Impact:* Medium. A sneaky bug where copied text includes invisible Byte Order Marks (BOM), causing pasted commands to fail in the shell.
8.  **[Long-lived session shows as corrupted despite valid events.jsonl](https://github.com/github/copilot-cli/issues/2209)**
    *   *Impact:* Medium. Heavy sessions are falsely reporting as corrupted even when the underlying JSON file is valid, blocking workflow continuity.
9.  **[Text selection highlight has very low contrast](https://github.com/github/copilot-cli/issues/2216)**
    *   *Impact:* Low-Medium. UX friction where the selection color is too dark on terminal backgrounds, making it hard to see what has been selected.
10. **[Extension hooks replaced instead of merged](https://github.com/github/copilot-cli/issues/2210)**
    *   *Impact:* Medium (Developer Tooling). A bug where multiple extensions registering the same hook type silently override each other rather than merging, breaking extensibility.

## 4. Key PR Progress
**No new pull requests** were updated or merged in the last 24 hours.

## 5. Feature Request Trends
Based on the open issues, the community is asking for:

*   **Model Parity:** A strong demand for the CLI to support the same wide range of models (Gemini, Claude) available in the IDE Copilot experience (Issue #1703, #2045).
*   **Session Management:** Advanced features like "Session Branching" (Issue #1313) are highly requested to preserve conversation history while experimenting with different paths.
*   **Multimodal Input:** Users want to paste images directly from the clipboard into prompts (Issue #1276) to debug UI or visual logs faster.

## 6. Developer Pain Points
The current data reflects three major areas of frustration for developers using Copilot CLI:

1.  **Terminal Interaction Regression:**
    The TUI updates are inadvertently breaking core terminal behaviors. Specifically, **clipboard copy/paste shortcuts (Ctrl+Shift+C, Cmd+C)** are failing across Linux and macOS because the interface is capturing mouse events incorrectly.
2.  **File Operation Fragility:**
    There are recurring reports of the "Transient API Error" loop when the tool attempts to write or edit files. This is compounded by issues with **session corruption** after crashes, which undermines trust in the tool for long-running tasks.
3.  **Inconsistent Ecosystem Experience:**
    Developers are annoyed by the discrepancy between the VS Code Copilot and CLI environments—specifically regarding **model availability** and **IntelliJ terminal scrolling** quirks.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-23

## 1. Today's Highlights
Development activity remains high despite the absence of a new release in the last 24 hours. The community is currently focused on improving network reliability, with several pull requests addressing session interruptions during unstable connections. Additionally, there is a strong push to enhance the "YOLO mode" (auto-approval) experience, addressing both persistence and integration gaps in editors like Zed.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Hot Issues
The following issues have generated significant discussion or highlight critical user pain points:

*   **[#1540 Generation terminates on unstable networks](https://github.com/MoonshotAI/kimi-cli/issues/1540)**
    *   **Why it matters:** Critical UX issue for remote workers or users on unstable Wi-Fi. Users report that the CLI simply exits instead of retrying, losing context.
    *   **Reaction:** 2 comments; users requesting a retry mechanism similar to standard HTTP clients.
*   **[#1548 Model performance degradation in recent update](https://github.com/MoonshotAI/kimi-cli/issues/1548)**
    *   **Why it matters:** Reports of "effect" drop or latency issues following update to v1.24.0.
    *   **Reaction:** Freshly opened, developers investigating if this is a local config issue or upstream model regression.
*   **[#1547 Authorization failed mid-generation](https://github.com/MoonshotAI/kimi-cli/issues/1547)**
    *   **Why it matters:** Affects v1.24.0 users on Linux. Session validity appears to expire or check incorrectly during long-running generations.
    *   **Reaction:** High priority; relates to token refresh logic.
*   **[#1542 YOLO mode support & API errors in Zed ACP](https://github.com/MoonshotAI/kimi-cli/issues/1542)**
    *   **Why it matters:** Highlights feature parity gaps between the standalone CLI and the Zed editor integration (ACP). specifically regarding the "YOLO" (auto-approve) mode.
    *   **Reaction:** Highlights demand for better ACP protocol support.
*   **[#1541 Persist YOLO mode data locally](https://github.com/MoonshotAI/kimi-cli/issues/1541)**
    *   **Why it matters:** Users want "YOLO mode" to be a persistent setting, not a per-session toggle.
    *   **Reaction:** echoes the desire for a global configuration file to store trusted states.
*   **[#1536 Feature Request: /title command](https://github.com/MoonshotAI/kimi-cli/issues/1536)**
    *   **Why it matters:** Auto-generated titles often fail to capture complex project contexts.
    *   **Reaction:** Positive feedback; developers want manual control over session naming.
*   **[#38 (Linked) Cannot handle CTRL+Z signal](https://github.com/MoonshotAI/kimi-cli/issues/38)**
    *   **Why it matters:** Foundational terminal bug regarding backgrounding tasks (`SIGTSTP`).
    *   **Reaction:** Recently addressed via PR #1545; a long-standing annoyance for terminal power users.

## 4. Key PR Progress
*   **[#1544 fix: retry on protocol errors and 504 during streaming](https://github.com/MoonshotAI/kimi-cli/pull/1544)**
    *   **Status:** Open
    *   **Impact:** Directly addresses Issue #1540. Implements a retry wrapper for streaming requests to handle network blips without killing the session.
*   **[#1543 feat(shell): add /title slash command](https://github.com/MoonshotAI/kimi-cli/pull/1543)**
    *   **Status:** Open
    *   **Impact:** Implements the feature requested in #1536. Allows manual renaming of sessions via `/title <name>`.
*   **[#1545 fix(keyboard): clear ISIG/IEXTEN in raw mode](https://github.com/MoonshotAI/kimi-cli/pull/1545)**
    *   **Status:** Open
    *   **Impact:** Fixes `CTRL+Z` handling. Prevents the CLI from entering an uninterruptible state where standard terminal signals are ignored.
*   **[#1525 feat: add yolo mode option in approval dialog](https://github.com/MoonshotAI/kimi-cli/pull/1525)**
    *   **Status:** Closed
    *   **Impact:** Adds a "Approve all (enable yolo mode)" button to the approval prompt. This was recently merged (likely in v1.24.0) and is sparking follow-up requests for persistence (#1541).
*   **[#1549 feat(plugin): add configurable compaction providers](https://github.com/MoonshotAI/kimi-cli/pull/1549)**
    *   **Status:** Open
    *   **Impact:** Advanced feature allowing users to specify a specific model for context compaction (summarization), potentially saving costs or improving accuracy.
*   **[#1131 feat: add AgentHooks support](https://github.com/MoonshotAI/kimi-cli/pull/1131)**
    *   **Status:** Closed
    *   **Impact:** Adds an extensibility layer for "dogfooding" and security. Includes built-in hooks like `block-dangerous-commands`.

## 5. Feature Request Trends
Based on the latest issues and community feedback, the top requested feature directions are:
1.  **Resilience & Retry Logic:** Users are demanding robust network handling. The tool should seamlessly reconnect or retry on `504` or connection drops rather than crashing.
2.  **YOLO Mode Enhancement:** There is a clear trend toward wanting "YOLO mode" (auto-approval of shell commands/file edits) to be a persistent, toggle-able setting, rather than a temporary session state.
3.  **Session Management:** Users want better control over session metadata, specifically the ability to manually name/rename sessions (`/title`).

## 6. Developer Pain Points
*   **Network Instability:** The most frequent complaint (Issues #1540, #1547) involves the CLI failing to handle mobile hotspots or high-latency networks, resulting in authorization errors or generation termination.
*   **Configuration Persistence:** Developers are frustrated that certain preferences (like YOLO mode) must be re-enabled every time the CLI starts.
*   **Editor Integration UX:** Users of the **Zed** editor (via ACP) feel like second-class citizens, noting that features available in the standalone CLI (like YOLO mode) do not always translate to the editor integration.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-03-23

## 1. Today's Highlights
OpenCode v1.3.0 has been released, officially introducing the **GitLab Agent Platform** for automatic workflow discovery and WebSocket-based tool execution. Despite the release, the community is currently grappling with a widespread **Claude Pro/Max authentication failure** (HTTP 400 errors) affecting the `core` module, which has become the most discussed topic in the last 24 hours. Additionally, significant architectural discussions are underway regarding Interactive Shell support and ACP (Agent Communication Protocol) lifecycle management.

## 2. Releases
### **v1.3.0** (2026-03-23)
*   **GitLab Agent Platform (#18014):** Full support for automatic discovery of workflow models from GitLab instances. Workflow models can now utilize OpenCode's local tools (file read/write, shell) over WebSocket.
*   **Git-backed Session Review:** A new feature allowing for session reviews backed by git, improving traceability and history management.

## 3. Hot Issues
Here are the top 10 issues drawing significant community attention:

1.  **[#18342](https://github.com/anomalyco/opencode/issues/18342) - [bug, core] Invalid code on Claude Pro/Max**
    *   **Why it matters:** Users are completely blocked from using Anthropic’s latest models via the official auth flow.
    *   **Reaction:** 37👍. Users report copying tokens from the auth link results immediately in an "INVALID CODE" error.

2.  **[#18315](https://github.com/anomalyco/opencode/issues/18315) - [bug, core] Claude Pro/Max auth flow returns Invalid token**
    *   **Why it matters:** Follow-up to the above; indicates a systemic failure in the auth/refresh token logic for Anthropic providers.
    *   **Reaction:** 28👍. Reinstalling and clearing cache does not fix the issue.

3.  **[#3472](https://github.com/anomalyco/opencode/issues/3472) - [bug] Context awareness**
    *   **Why it matters:** Core promise of the IDE extension is questioned. Users report the agent is unaware of text selected in the VSCode editor.
    *   **Reaction:** 18👍. Users are asking for documentation on how to properly utilize this feature if it exists.

4.  **[#17910](https://github.com/anomalyco/opencode/issues/17910) - [core] OAuth auth + cache_control ephemeral causes HTTP 400**
    *   **Why it matters:** Technical deep-dive identifying the root cause of the Claude failures as an interaction between `@ai-sdk/anthropic` and `cache_control` headers.
    *   **Reaction:** 2👍. Confirmed issue start date of 2026-03-17.

5.  **[#4672](https://github.com/anomalyco/opencode/issues/4672) - [bug] OpenCode Github Agent Stuck!**
    *   **Why it matters:** Affects users trying to integrate OpenCode directly with GitHub repositories, rendering the agent non-functional.
    *   **Reaction:** High activity (17 comments), users stuck at "Sending Message to opencode...".

6.  **[#9808](https://github.com/anomalyco/opencode/issues/9808) - feat: Support for sudo and password-requiring commands**
    *   **Why it matters:** Major limitation for DevOps workflows. The agent cannot handle interactive prompts like `sudo` passwords.
    *   **Reaction:** 18👍. High demand for stdin passthrough or TTY allocation.

7.  **[#12405](https://github.com/anomalyco/opencode/issues/12405) - [bug, windows] Error: Connection reset by server**
    *   **Why it matters:** Affects Windows users behind proxies, preventing initialization.
    *   **Reaction:** 13 comments.

8.  **[#10616](https://github.com/anomalyco/opencode/issues/10616) - [bug] tool_use ids without tool_result**
    *   **Why it matters:** Intermittent bug breaking conversation flow, specifically related to tool usage parsing.
    *   **Reaction:** 10 comments.

9.  **[#17505](https://github.com/anomalyco/opencode/issues/17505) - [core, acp] session/update notifications sent after end_turn**
    *   **Why it matters:** Breaking the ACP spec lifecycle causes clients like Fabriqa to close turns prematurely, resulting in incomplete content in the UI.
    *   **Reaction:** 1👍. Critical for integration partners.

10. **[#3228](https://github.com/anomalyco/opencode/issues/3228) - [Feature] Allow the user to run their favorite shell**
    *   **Why it matters:** Developer experience enhancement. Users want to replace the default shell with `bash`, `zsh`, or `fish`.
    *   **Reaction:** 4👍.

## 4. Key PR Progress
1.  **[#18670](https://github.com/anomalyco/opencode/pull/18670) - fix(opencode): avoid symlink-loop recursion**
    *   **Detail:** Fixes critical stalling issues during skill discovery when symlink loops are present in external directories.

2.  **[#18679](https://github.com/anomalyco/opencode/pull/18679) - effectify Worktree service**
    *   **Detail:** Major refactor migrating the Worktree service to the "Effect" pattern (Service/Interface/Layer), removing direct `fs` imports in favor of `FileSystem` layers.

3.  **[#18660](https://github.com/anomalyco/opencode/pull/18660) - tui: prevent project avatar popover flicker**
    *   **Detail:** UX fix ensuring smooth navigation when switching projects from the sidebar.

4.  **[#18678](https://github.com/anomalyco/opencode/pull/18678) - tui: keep patch tool counts visible**
    *   **Detail:** UI improvement to handle long filenames gracefully without obscuring tool counts/info.

5.  **[#17712](https://github.com/anomalyco/opencode/pull/17712) - fix(provider): drop empty content messages**
    *   **Detail:** Fixes a bug where the interleaved reasoning filter would leave behind empty content blocks, potentially breaking model responses.

6.  **[#6097](https://github.com/anomalyco/opencode/pull/6097) - feat: experimental TPS for model responses**
    *   **Detail:** Adds experimental Tokens Per Second (TPS) metrics for model responses, accessible via the `OPENCODE_EXPERIMENTAL_TPS` flag.

7.  **[#5657](https://github.com/anomalyco/opencode/pull/5657) - feat: toggle transparent background**
    *   **Detail:** Adds a command palette command to dynamically toggle background transparency for themes.

8.  **[#5422](https://github.com/anomalyco/opencode/pull/5422) - provider-specific cache configuration**
    *   **Detail:** Implements a system for provider-specific caching to reduce token usage (significant improvements reported for Claude Opus).

9.  **[#5266](https://github.com/anomalyco/opencode/pull/5266) - glob: stop ripgrep when results sufficient**
    *   **Detail:** Performance optimization to stop `rg --files` processes early when enough results are found, preventing CPU pegging.

10. **[#5245](https://github.com/anomalyco/opencode/pull/5245) - feat: integrate OpenTelemetry**
    *   **Detail:** Adds OpenTelemetry support for better observability and tracing.

## 5. Feature Request Trends
Based on the activity in the Issues tracker, the community is strongly advocating for:
*   **Interactive Shell Capabilities:** There is a surge in requests for handling `sudo`, passwords, and general interactive stdin input (Issues #9808, #18659, #3228).
*   **Model Routing & State Management:** Developers want plugins to be able to change the active model persistently and dynamically (Issues #18666, #18644).
*   **Automation Loops:** Users desire "agents" that can run tasks iteratively without manual prompting (Issue #18001 - `/loop` command).

## 6. Developer Pain Points
*   **Anthropic Integration Instability:** The "Invalid Token" and HTTP 400 errors on Claude models are causing significant disruption for power users relying on Anthropic's API.
*   **ACP (Agent Communication Protocol) Lifecycle Compliance:** Integration partners are struggling with OpenCode sending `session/update` notifications *after* the turn ends, violating the protocol and breaking UI finalization (Issues #17505, #18672).
*   **Windows Proxy Support:** Users on Windows behind corporate proxies continue to face "Connection reset" errors that prevent basic connectivity (Issue #12405).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest**
**Date:** 2026-03-23
**Source:** [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

### 1. Today's Highlights
The project released nightly version `v0.13.0-nightly.20260322`, focusing on pipeline stability and system prompt customization. Active development is concentrated on significantly enhancing the VSCode IDE Companion feature set—adding native `/insight` and `/export` commands—while core contributors are aggressively optimizing context management for large-scale agentic sessions through dynamic truncation and tool output masking.

### 2. Releases
*   **[v0.13.0-nightly.20260322](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.0-nightly.20260322.38caa0b21)**
    *   **Pipeline Fix:** Resolved an issue where duplicate `finish_reason` chunks from OpenRouter were not handled correctly, which could cause streaming interruptions ([PR #2403](https://github.com/QwenLM/qwen-code/pull/2403)).
    *   **Feature:** Added options for system prompt customization.
    *   **Maintenance:** Version bump to 0.13.0.

### 3. Hot Issues
*   **[#2589](https://github.com/QwenLM/qwen-code/issues/2589) - [Feature Request] Allow multiple Qwen plugin instances in VSCode**
    *   **Why it matters:** Users comparing Qwen to competitors (like Claude Code) find the single-instance restriction limiting for parallel workflows.
    *   **Reaction:** Users want to handle multiple queries simultaneously without switching contexts.

*   **[#2596](https://github.com/QwenLM/qwen-code/issues/2596) - [Bug] Qwen CLI keeps appending `

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*