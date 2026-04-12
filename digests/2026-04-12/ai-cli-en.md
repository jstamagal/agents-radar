# AI CLI Tools Community Digest 2026-04-12

> Generated: 2026-04-12 00:13 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem Report — 2026-04-12

## 1. Ecosystem Overview
The AI CLI landscape is currently undergoing a critical "stability vs. feature expansion" phase. While established tools like **Claude Code** and **OpenAI Codex** face severe community backlash regarding model degradation, silent feature removals, and resource instability, rapidly iterating tools like **Kimi Code CLI** and **Charm Crush** are capturing developer mindshare by aggressively implementing quality-of-life features (e.g., `/loop`, `/delete`) and deep protocol integrations (ACP, MCP). Across the board, there is a universal shift toward "Agentic Control"—moving beyond simple chat interfaces to complex, multi-step autonomous workflows—with a heavy emphasis on cost control (token optimization) and session management hygiene.

## 2. Activity Comparison

| Tool | Issues (Active/Hot) | PRs (Updated/Merged) | Release Status | Stability Signal |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | High (10 critical) | Low (4 open, heavy legacy) | Stagnant (No releases) | **Critical** (Model regression, feature removal) |
| **OpenAI Codex** | Medium (9 active) | High (10 merged/updated) | Active (v0.120.0 Stable) | **Moderate** (Cost/Token bugs) |
| **Charm Crush** | Low (2 tracked) | High (7 significant) | Stagnant (No releases) | **Positive** (Optimization focus) |
| **Gemini CLI** | High (10 tracked) | High (10 merged) | Active (Nightly builds) | **Moderate** (Win/SSH fragility) |
| **GitHub Copilot** | High (10 critical) | Very Low (1 updated) | Stagnant (No releases) | **Critical** (Infinite loops, 400 errors) |
| **Kimi Code CLI** | Medium (10 tracked) | **Very High** (10 active) | Stagnant (No releases) | **Positive** (High responsiveness) |
| **OpenCode** | High (10 tracked) | High (10 merged) | Stagnant (No releases) | **Moderate** (Windows instability) |
| **Qwen Code** | High (10 tracked) | High (9 merged) | Active (Nightly builds) | **Moderate** (Locale/Filter issues) |

## 3. Shared Feature Directions
*   **Cost & Token Optimization:**
    *   **Charm Crush** is leading with aggressive tool description trimming (saving ~120k tokens/session).
    *   **OpenCode** users are demanding "Chat/Ask Modes" to bypass expensive tool injection.
    *   **OpenAI Codex** users are rebelling against "visual meters," demanding exact token percentages for cost visibility.
*   **Advanced Session Management:**
    *   **Kimi Code CLI** is implementing `/delete` and `/loop` commands.
    *   **Qwen Code** is adding `/rename`, `/delete`, and better resume flows.
    *   **OpenCode** users are requesting ACP over WebSocket for better remote session handling.
*   **Context Hierarchy (Global vs. Project):**
    *   **Gemini CLI** and **Charm Crush** are both implementing logic to separate global user preferences (`~/.config`) from project-specific rules to prevent instruction contamination.
*   **Protocol Standardization (MCP/ACP):**
    *   **Kimi Code CLI**, **Charm Crush**, and **OpenCode** are all heavily investing in **ACP (Agentic Control Protocol)** server support and stabilization.
    *   **Claude Code** and **OpenAI Codex** communities are pushing for more robust **MCP (Model Context Protocol)** reconnection and tool handling.

## 4. Differentiation Analysis
*   **Claude Code:** Positioned as the "Premium" choice, but currently suffering from an identity crisis. The silent removal of `/buddy` and reports of "Opus 4.6 brain fog" have damaged trust. It remains the tool for complex reasoning, but only if the stability issues are resolved.
*   **OpenAI Codex:** Focused on "Realtime" feedback and enterprise integration (GitHub PR views in TUI). However, it is plagued by "quota anxiety" due to billing bugs and high GPU usage in the desktop app.
*   **Kimi Code CLI:** The "Community Favorite" for rapid iteration. It is prioritizing developer UX (fixing slash menus, adding `/loop`) and resolving technical debt (MCP truncation) quickly. It is positioning itself as the reliable alternative for power users.
*   **Charm Crush:** The "Efficiency Expert." Focusing heavily on backend performance (token reduction) and interoperability (acting as an ACP server). It appeals to users who want raw speed and control over flashy UI.
*   **Qwen Code:** The "Localization Leader." Struggling with unique challenges regarding i18n (Chinese agent names) and aggressive safety filters ("DataInspectionFailed"), but offering unique features like Telegram voice support and global OpenAI key management.
*   **OpenCode:** The "Architecture Pioneer." heavily focused on internal refactoring (Effect services) and observability (OTLP telemetry). It attracts technical users willing to tolerate UI bugs for advanced backend capabilities.

## 5. Community Momentum & Maturity
*   **Highest Positive Momentum:** **Kimi Code CLI** and **Charm Crush**. Both projects are showing high PR velocity with clear, community-driven feature implementation (e.g., fixes for timeouts, truncation, and command UX).
*   **Negative Momentum / Risk:** **Claude Code** and **GitHub Copilot CLI**. Both are facing "crisis-level" threads (1000+ upvotes) regarding model degradation and infinite loops. **GitHub Copilot CLI** in particular appears dangerously stagnant, with only 1 PR updated despite critical billing bugs.
*   **Maturity:** **OpenAI Codex** and **Gemini CLI** represent the most mature ecosystems, handling complex challenges like XDG standards, AST-aware analysis, and cross-platform TUI rendering, but they are slower to react to daily user frustration compared to the nimbler Kimi/Qwen clients.

## 6. Trend Signals
*   **The Rise of "Agentic" Control:** Users are no longer satisfied with simple chat. The demand for `/loop` (scheduled tasks), strict sandboxing, and hierarchical configuration indicates developers are building fully autonomous agents, not just copilots.
*   **Platform Parity is Lagging:** **Windows** support remains the Achilles' heel for almost every tool (OpenAI, Gemini, OpenCode, Copilot). Issues range from clipboard failures to text scrambling and CRLF corruption.
*   **Trust Through Transparency:** The backlash against **Claude Code's** silent removal of `/buddy` and **OpenAI Codex's** "visual meters" (which hide exact token usage) signals a market trend: developers demand data transparency and open communication over "black box" UX.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Analysis of github.com/anthropics/skills activity as of 2026-04-12*

## 1. Top Skills Ranking
Based on the most recent and actively discussed Pull Requests in the community queue:

*   **[document-typography](https://github.com/anthropics/skills/pull/514)** (Status: Open)
    *   **Functionality:** A quality control Skill that fixes common AI-generated document issues, including orphaned word wraps, widow paragraphs (headers at page bottom), and numbering misalignment.
    *   **Highlights:** Addresses a universal pain point in AI output formatting. Author notes these issues "affect every document Claude generates."

*   **[ODT Skill](https://github.com/anthropics/skills/pull/486)** (Status: Open)
    *   **Functionality:** Enables creation, reading, and template filling for `.odt` (OpenDocument Text) files, compatible with LibreOffice and open standards.
    *   **Highlights:** Expands Claude's interoperability beyond Microsoft Office (DOCX) to open-source ISO standards.

*   **[SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** (Status: Open)
    *   **Functionality:** Integrates SAP’s open-source tabular foundation model for predictive analytics on business data.
    *   **Highlights:** Represents a growing trend of connecting Claude with specialized large tabular models for enterprise data.

*   **[shodh-memory](https://github.com/anthropics/skills/pull/154)** (Status: Open)
    *   **Functionality:** A persistent memory system allowing AI agents to maintain context across different conversation sessions.
    *   **Highlights:** Solves the "stateless" limitation of AI chats by persisting context for future retrieval.

*   **[plan-task](https://github.com/anthropics/skills/pull/522)** (Status: Open)
    *   **Functionality:** Persists multi-step plans and task progress to Markdown files, allowing work to continue across different sessions.
    *   **Highlights:** Addresses the "Claude Code starts every session from scratch" problem by tracking long-running tasks.

*   **[skill-creator Fixes](https://github.com/anthropics/skills/pull/539)** (Status: Open)
    *   **Functionality:** Adds validation to prevent silent YAML parsing failures in Skill descriptions caused by unquoted special characters.
    *   **Highlights:** Improves the reliability of the Skill creation toolchain itself.

## 2. Community Demand Trends
Derived from the most active Issues and proposals:

*   **Governance & Safety:** There is significant discussion around **agent-governance** (Issue [#412](https://github.com/anthropics/skills/issues/412)), indicating demand for Skills that handle policy enforcement, threat detection, and audit trails for autonomous agents.
*   **Workflow & Automation:** Users are actively seeking automation improvements, such as **org-wide skill sharing** (Issue [#228](https://github.com/anthropics/skills/issues/228)) and native OS automation (PR [#806](https://github.com/anthropics/skills/pull/806)), signaling a desire to move from single-file tasks to integrated team workflows.
*   **Quality Assurance:** The high activity around **[quality-playbook](https://github.com/anthropics/skills/pull/659)** and **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** suggests a push for Skills that can audit and improve other codebases, not just generate new code.
*   **Trust & Security:** Community members are concerned about trust boundaries, specifically regarding namespace confusion and security validation of community Skills (Issue [#492](https://github.com/anthropics/skills/issues/492)).

## 3. High-Potential Pending Skills
Active PRs that have garnered attention and are likely candidates for merging:

*   **[Frontend Design Clarity](https://github.com/anthropics/skills/pull/210):** Aims to refactor the `frontend-design` skill to be more actionable and coherent for Claude to follow.
*   **[Codebase Inventory Audit](https://github.com/anthropics/skills/pull/147):** A workflow skill for identifying orphaned code and documentation gaps, generating a `CODEBASE-STATUS.md` report.
*   **[Sensory Skill (macOS Automation)](https://github.com/anthropics/skills/pull/806):** Teaches Claude to use `osascript` for native control, offering an alternative to screenshot-based UI interaction.

## 4. Skills Ecosystem Insight
The community is moving beyond basic code generation toward **persistence and state management**, with high demand for Skills that maintain context across sessions (memory, planning) and ensure output quality (typography, QA).

---

# Claude Code Community Digest — 2026-04-12

## Today's Highlights
The community is currently in an uproar following the silent removal of the `/buddy` feature in v2.1.97, with a consolidation plea garnering nearly 500 upvotes. Simultaneously, users are reporting severe performance regressions in model quality for complex engineering tasks, marked by excessive token consumption and "brain fog" on Opus 4.6. On the feature front, developers are pushing for better session management and subagent integration to prevent code generation that fails at integration boundaries.

## Releases
No new releases detected in the last 24 hours.

## Hot Issues

1.  **Bring Back Buddy — A Consolidated Plea from the Community**
    *   **Status:** Open | **Reaction:** 476👍
    *   **Why it matters:** This is the highest-engagement issue currently open. The removal of the `/buddy` companion feature without a changelog entry has caused significant frustration. Users are demanding transparency and the return of the status-line companion.
    *   [Link](https://github.com/anthropics/claude-code/issues/45596)

2.  **[MODEL] Claude Code is unusable for complex engineering tasks with the Feb updates**
    *   **Status:** Closed | **Reaction:** 1372👍
    *   **Why it matters:** Despite being closed, this thread remains the most active (289 comments). It highlights a critical perceived drop in reasoning capabilities for complex tasks, correlating with February updates. High concurrency concerns.
    *   [Link](https://github.com/anthropics/claude-code/issues/42796)

3.  **[BUG] [URGENT!!!] Claude Code is hanging / freezing / stuck on heaps of prompts**
    *   **Status:** Open | **Reaction:** 96👍
    *   **Why it matters:** Workflow disruption is the primary pain point. Users are reporting blocking freezes lasting 5–20 minutes, effectively rendering the tool unusable for active development sessions.
    *   [Link](https://github.com/anthropics/claude-code/issues/26224)

4.  **[FEATURE] Claude can reconnect to a broken MCP in a manner similar to how it performs other actions**
    *   **Status:** Open | **Reaction:** 34👍
    *   **Why it matters:** As users rely more on the Model Context Protocol (MCP), connection fragility has become a bottleneck. Automating reconnection is a high-priority request for maintaining flow state.
    *   [Link](https://github.com/anthropics/claude-code/issues/10071)

5.  **Subagent-driven development produces code that doesn't integrate with existing codebase**
    *   **Status:** Open
    *   **Why it matters:** This highlights a architectural weakness in the current agent dispatching system. Subagents are "reinventing the wheel" rather than adhering to existing project patterns, creating technical debt rather than solving it.
    *   [Link](https://github.com/anthropics/claude-code/issues/46797)

6.  **[BUG] WebSearch and subagents fail with 'Extra usage required for 1M context' on Max plan**
    *   **Status:** Open
    *   **Why it matters:** Paying users on the "Max" plan are hitting artificial usage limits when using 1M context with tools like WebSearch. This appears to be a billing logic error rather than a true quota issue.
    *   [Link](https://github.com/anthropics/claude-code/issues/44117)

7.  **[BUG] Claude Code bypasses Plan Mode and operates under "Ask before edits" Mode**
    *   **Status:** Open
    *   **Why it matters:** A critical safety and control issue. When developers explicitly set "Plan Mode," they expect non-destructive operation. Bypassing this to edit files undermines trust in the tool's safety mechanisms.
    *   [Link](https://github.com/anthropics/claude-code/issues/42143)

8.  **Feature Request - refresh status line on an interval**
    *   **Status:** Closed | **Reaction:** 33👍
    *   **Why it matters:** Developers want the TUI status line (e.g., git branch status) to update automatically without requiring user interaction, keeping their dashboard relevant during long-running tasks.
    *   [Link](https://github.com/anthropics/claude-code/issues/5685)

9.  **Write deny rules not enforced via managed settings**
    *   **Status:** Open
    *   **Why it matters:** A security/regression issue for enterprise deployments. Write permissions managed via macOS configuration profiles are being ignored, while Bash permissions work correctly.
    *   [Link](https://github.com/anthropics/claude-code/issues/46809)

10. **[FEATURE] Add extra usage metric to telemetry**
    *   **Status:** Open
    *   **Why it matters:** Users lack visibility into token consumption and billing metrics. Better telemetry is requested to help teams manage costs effectively.
    *   [Link](https://github.com/anthropics/claude-code/issues/46790)

## Key PR Progress

1.  **feat: open source claude code ✨**
    *   **Status:** Open
    *   **Details:** A longstanding community request to fully open-source the codebase. This PR aims to address multiple issues related to transparency and self-hosting.
    *   [Link](https://github.com/anthropics/claude-code/pull/41447)

2.  **Add Rafid Prompt Tool - AI-powered prompt optimization app**
    *   **Status:** Open
    *   **Details:** Integration of a Next.js application designed to optimize AI prompts using Claude. It introduces "Quick Optimise" and "Deep Build" modes for iterative refinement.
    *   [Link](https://github.com/anthropics/claude-code/pull/46620)

3.  **feat: add automated issue triage and weekly digest via Claude API**
    *   **Status:** Open
    *   **Details:** A meta-tooling proposal to use Haiku 4.5 for triaging issues and Sonnet 4.6 for generating summaries (similar to this digest), with cost controls in place.
    *   [Link](https://github.com/anthropics/claude-code/pull/28714)

4.  **Enhance README documentation**
    *   **Status:** Open
    *   **Details:** General improvements to project documentation to aid onboarding and usage.
    *   [Link](https://github.com/anthropics/claude-code/pull/46732)

## Feature Request Trends

*   **Feature Restoration:** The dominant trend is a demand to restore the `/buddy` feature, which provided ambient status line feedback.
*   **Session Management:** Multiple requests (Issues #46529, #46791) indicate a need for better handling of sessions across different projects, specifically fixing `/resume` behavior to avoid cross-project contamination.
*   **Visual/UI Improvements:** Users are requesting manual reordering of sessions in the sidebar (Issue #46810) and general TUI refreshes (Issue #5685).
*   **Agent Context Awareness:** Developers are asking for subagents to respect existing codebases and patterns rather than generating isolated or conflicting code (Issue #46797).

## Developer Pain Points

*   **Silent Feature Removal:** The removal of `/buddy` without communication has damaged trust. Developers fear useful features will vanish arbitrarily.
*   **Model Degradation & Cost:** There is a strong sentiment that Opus 4.6 has become "lazy" or "sabotaging" tasks (Issues #42796, #43052), with reports of excessive token burning ("eating tokens for the IPO") alongside slower performance.
*   **Platform Instability:** Critical bugs like freezing (Issue #26224) and memory leaks (Issue #34424) are blocking core development workflows.
*   **MCP Reliability:** Authentication tokens for MCP integrations are expiring too frequently, requiring manual `/mcp` reconnects that break automation pipelines (Issue #43789).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-12

## 1. Today's Highlights
The Codex ecosystem is seeing rapid iteration on the `v0.121.0` alpha channel alongside the stable `v0.120.0` release, which introduces significant improvements to Realtime V2 streaming and TUI visibility for background hooks. Community discourse is dominated by concerns over high token consumption rates (Issue #14593) and inconsistent behavior between the native App and CLI environments regarding thread history persistence. Developers are also actively debating the usability of recent context meters and requesting deeper integration with GitHub workflows directly within the CLI.

## 2. Releases
**rust-v0.120.0 (Stable)**
*   **Realtime V2 Improvements:** Background agent progress can now stream while work is running (#17264, #17306).
*   **TUI Enhancements:** Hook activity is easier to scan, with live running hooks separated and completed output preserved.
*   **[Release on GitHub](https://github.com/openai/codex/releases/tag/rust-v0.120.0)**

**rust-v0.121.0-alpha.2 & v0.121.0-alpha.1**
*   Pre-releases for the upcoming feature set.

## 3. Hot Issues

*   **[#14593 - Burning tokens very fast](https://github.com/openai/codex/issues/14593)** [Bug]
    *   **Why it matters:** This is the most active thread (520+ comments) regarding the `gpt-5.4` model consuming credits excessively.
    *   **Reaction:** Users are frustrated with the cost efficiency, specifically on Business subscriptions.
*   **[#17313 - New progress bar indicator is a downgrade](https://github.com/openai/codex/issues/17313)** [Enhancement/Bug]
    *   **Why it matters:** Users prefer precise numerical percentages over the new visual "remaining context" bar introduced in `v0.119.0-alpha`.
    *   **Reaction:** High demand for reverting to the percentage display for better precision.
*   **[#17354 - Thread history wiped in App, present in CLI](https://github.com/openai/codex/issues/17354)** [Bug]
    *   **Why it matters:** Indicates a data sync discrepancy where the desktop App loses months of history while the CLI retains it.
    *   **Reaction:** Critical data loss concern for App users on MacOS.
*   **[#14860 - Error running remote compact task](https://github.com/openai/codex/issues/14860)** [Bug]
    *   **Why it matters:** A frequent blocker for CLI users causing hangs or errors during context management on Linux.
    *   **Reaction:** Users are linking similar timeout issues occurring on Windows and WSL2.
*   **[#16857 - High GPU usage while app is “thinking”](https://github.com/openai/codex/issues/16857)** [Bug]
    *   **Why it matters:** The desktop app is maxing GPU usage allegedly for simple animations, causing laptop overheating/battery drain.
    *   **Reaction:** Users request an option to disable UI animations.
*   **[#17496 - Memory read path ignores cwd](https://github.com/openai/codex/issues/17496)** [Bug]
    *   **Why it matters:** A newly reported architecture bug where Codex's `MEMORY.md` feature injects global context rather than project-specific (`cwd`) context.
    *   **Reaction:** Technical concern regarding context contamination in multi-project workspaces.
*   **[#10070 - Timeout waiting for child process](https://github.com/openai/codex/issues/10070)** [Bug]
    *   **Why it matters:** A persistent legacy issue for Windows/WSL users regarding tool calls and child processes hanging.
*   **[#17449 - Clear redundant approvals](https://github.com/openai/codex/issues/17449)** [Enhancement]
    *   **Why it matters:** Quality of life request to auto-clear pending approvals if one is accepted for the session.
*   **[#13517 - Changes Aborted Hides Suggested Changes](https://github.com/openai/codex/issues/13517)** [Enhancement]
    *   **Why it matters:** UX frustration where rejecting a code change hides the diff, preventing the user from reviewing what they just rejected.
*   **[#8852 - Windows TUI missing shaded background](https://github.com/openai/codex/issues/8852)** [Bug]
    *   **Why it matters:** Long-standing visual regression on native Windows terminals where the input box lacks a background color, making it hard to read.

## 4. Key PR Progress

*   **[#17499 - Add clear-context plan implementation](https://github.com/openai/codex/pull/17499)** [Feat]
    *   Proposes a workflow where "exploratory planning" context can be discarded when moving to implementation, keeping the working context clean.
*   **[#17472 - Show current GitHub PR in TUI](https://github.com/openai/codex/pull/17472)** [Feat]
    *   Integrates `gh` CLI to display the associated Pull Request number and URL in the TUI status bar.
*   **[#17415 - Restore codex-tui resume hint](https://github.com/openai/codex/pull/17415)** [Fix]
    *   Fixes a regression where the standalone TUI stopped printing the `codex resume ...` command on exit.
*   **[#17416 - Clear /ps after /stop](https://github.com/openai/codex/pull/17416)** [Fix]
    *   Ensures that stopping background processes immediately clears the process list cache in the UI.
*   **[#16251 - Add request_permissions_tool "always allow"](https://github.com/openai/codex/pull/16251)** [Feat]
    *   Implements functionality to persist permission choices, reducing repetitive approval prompts.
*   **[#17266 - Improve hook status rendering](https://github.com/openai/codex/pull/17266)** [Refactor]
    *   Reduces noise in the TUI by separating live hook activity from completed history.
*   **[#17489 - Unique millisecond timestamps](https://github.com/openai/codex/pull/17489)** [Chore]
    *   Updates backend sorting/pagination logic to use millisecond-precision timestamps for unique cursors.
*   **[#17404 - Register all mcp tools with namespace](https://github.com/openai/codex/pull/17404)** [Fix]
    *   Fixes a bug where MCP tools (Model Context Protocol) were registered inconsistently in the tool catalog.
*   **[#15979 - Managed deny-read patterns](https://github.com/openai/codex/pull/15979)** [Feat]
    *   Adds support for pattern-based "deny read" sandbox policies to restrict access to sensitive files.
*   **[#17486 - Changing decision semantics after guardian timeout](https://github.com/openai/codex/pull/17486)** [Fix]
    *   Clarifies the UX when an approval (Guardian) request times out versus being explicitly denied.

## 5. Feature Request Trends
*   **UX Precision over Visuals:** There is a strong pushback against "visual meters" (e.g., context usage) in favor of exact numerical data (percentages).
*   **Workflow Continuity:** Users want diffs to remain visible after rejection, and they want the ability to "execute plan in clean session" rather than carrying over all planning context.
*   **IDE Integration:** Requests are increasing for tighter GitHub integration (viewing PRs in TUI) and better file navigation (worktree creation).

## 6. Developer Pain Points
*   **Resource Management:** High GPU usage in the App and runaway token consumption in the CLI are top frustrations.
*   **Platform Parity:** Windows users continue to experience rendering issues (missing backgrounds) and stability issues (timeouts) that do not occur on macOS/Linux.
*   **State Synchronization:** Users are annoyed by data inconsistencies, such as the Desktop App losing chat history that persists in the CLI, or the TUI clearing diffs unexpectedly.

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest — 2026-04-12

**Today's Highlights**
Today's update cycle focuses heavily on backend optimization and quality-of-life improvements. Significant efforts are underway to drastically reduce token consumption in tool calls and improve state synchronization between terminal sessions. Additionally, developers are moving forward with ACP (Agentic Control Protocol) server support, signaling a shift towards more integrated, multi-process workflows.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues

1.  **[Issue #2600: Support for OpenCode go provider](https://github.com/charmbracelet/crush/issues/2600)**
    *   **Status:** Open
    *   **Why it matters:** Users are looking for interoperability between Crush and other emerging developer ecosystems, specifically requesting provider support for the `OpenCode` Go implementation.

2.  **[Issue #1191: [os: windows] Why doesn’t right-click paste work in Crush CLI on Windows 10?](https://github.com/charmbracelet/crush/issues/1191)**
    *   **Status:** Closed
    *   **Why it matters:** Despite being closed, this remains a top discussion point regarding Windows UX. The community reaction highlights a desire for native console behavior without requiring workarounds like `Shift+Right-Click`.

## Key PR Progress

1.  **[PR #2592: [area: tools] chore(tools): reduce tool call descriptions, behind a flag](https://github.com/charmbracelet/crush/pull/2592)**
    *   **Details:** A major optimization targeting token efficiency.
    *   **Impact:** By shrinking tool descriptions by ~98% (excluding Bash), developers can expect savings of approximately **120K tokens per session**. This is currently opt-in via `CRUSH_SHORT_TOOL_DESCRIPTIONS=1`.

2.  **[PR #2579: feat(tool): add `ask-user-questions` tool](https://github.com/charmbracelet/crush/pull/2579)**
    *   **Details:** Adds a new interactive system tool.
    *   **Impact:** Inspired by recent analysis of competitors like Claude Code, this tool enables the agent to dynamically query the user for missing context during execution.

3.  **[PR #2553: [provider: openai chatgpt] feat: add OpenAI Codex subscription login and usage limits in CLI/TUI](https://github.com/charmbracelet/crush/pull/2553)**
    *   **Details:** End-to-end support for managing OpenAI subscriptions within the CLI.
    *   **Impact:** Unifies account management directly into the interface, allowing users to track usage limits without leaving the terminal. (Recently Closed).

4.  **[PR #2601: [area: session] fix: refresh TUI when session is updated by an external process](https://github.com/charmbracelet/crush/pull/2601)**
    *   **Details:** Fixes pubsub broker limitations.
    *   **Impact:** Solves a critical workflow issue where running `crush run --continue` in a second terminal would not update the primary TUI. This ensures real-time synchronization across multiple terminal instances.

5.  **[PR #1669: feat(config): load user-level context files](https://github.com/charmbracelet/crush/pull/1669)**
    *   **Details:** Loads `~/.config/AGENTS.md` and `~/.config/crush/CRUSH.md`.
    *   **Impact:** Differentiates global user preferences from project-specific rules, preventing prompt conflicts when project guidelines differ from developer habits.

6.  **[PR #2450: feat: run Crush as an ACP server](https://github.com/charmbracelet/crush/pull/2450)**
    *   **Details:** Adds `crush acp` command and full lifecycle support for the Agentic Control Protocol.
    *   **Impact:** Positions Crush to act as a server, enabling tool/result streaming and event translation for more complex agent architectures.

7.  **[PR #2602: feat(ui): add exit alias to quit command](https://github.com/charmbracelet/crush/pull/2602)**
    *   **Details:** Adds `exit` as an alias for the `Quit` command.
    *   **Impact:** A small UX enhancement allowing users to type standard commands like `exit` to close the command picker, aligning with standard shell muscle memory.

## Feature Request Trends
*   **Protocol Interoperability:** There is a growing demand for Crush to support external providers and protocols, specifically highlighted by requests for an "OpenCode go provider" and the ongoing implementation of ACP server capabilities.
*   **Context Hierarchy:** Developers are increasingly interested in separating global user preferences (`~/.config`) from local project rules to ensure instructions do not conflict.

## Developer Pain Points
*   **Windows Console UX:** Issues with standard interactions (like right-click paste) on Windows continue to friction the experience for non-Unix users.
*   **Multi-terminal Synchronization:** The inability to see live updates in the TUI when a background process modifies the session has historically been a frustration, though fixes are currently in progress (PR #2601).
*   **Token Economy:** High token usage per session is driving a push for "short descriptions" and more efficient prompt engineering, indicating that cost and context-window management are top priorities for heavy users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-04-12

## 1. Today's Highlights
Today's daily build focuses heavily on stability, addressing critical bugs related to encoding (UTF-8/API errors) and platform compatibility (OpenSSL 3.x, Windows PTY). Long-term architectural efforts continue, with significant discussion and prototyping around "AST-aware" codebase analysis to improve the precision of file reading and search tools. Additionally, the community is actively pushing for enhanced workflow support, including hierarchical `.env` configurations and bulk extension management.

## 2. Releases
**v0.39.0-nightly.20260411** was released.
*   **Encoding Fixes:** Resolved issues with decoding `Uint8Array` and multi-byte UTF-8 characters in API error messages ([#23341](https://github.com/google-gemini/gemini-cli/pull/23341)).
*   **UI Improvements:** New debugging options added to the UI.
*   **Documentation:** Automated documentation audits were integrated.

## 3. Hot Issues
*   **[AST Investigation](https://github.com/google-gemini/gemini-cli/issues/22745)**: An Epic issue has been opened to assess the value of Abstract Syntax Tree (AST) aware file reads. The goal is to reduce noise and "turns" by allowing the CLI to read method bounds precisely rather than reading entire files.
*   **[Permission Looping](https://github.com/google-gemini/gemini-cli/issues/24916)**: Users are reporting frustration with the CLI repeatedly asking for permissions on the same file, even after "allowing for all future sessions."
*   **[UI Rendering Glitches](https://github.com/google-gemini/gemini-cli/issues/24915)**: Visual artifacts like "thick black borders" are appearing in the prompt bar, degrading the user experience.
*   **[SSH Text Scrambling](https://github.com/google-gemini/gemini-cli/issues/24202)**: Critical usability issue for Windows users running the CLI via SSH to gLinux cloudtops, resulting in scrambled text.
*   **[Subagent "Success" Lies](https://github.com/google-gemini/gemini-cli/issues/22323)**: A Priority 1 bug where subagents report "success" upon hitting `MAX_TURNS`, masking the fact that the task was actually interrupted or incomplete.
*   **[Plan Mode Hook Regression](https://github.com/google-gemini/gemini-cli/issues/25054)**: A recent change (#22737) broke `exit_plan_mode` hooks by replacing absolute paths with filenames, breaking user workflows for auto-archiving plans.
*   **[Memory Routing Logic](https://github.com/google-gemini/gemini-cli/issues/22819)**: A proposal to implement smarter memory routing, distinguishing between global user preferences and project-specific context.
*   **[Destructive Behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**: Community concern regarding the model's tendency to use dangerous commands like `git reset --force` or `--force` in DB management.
*   **[Minified React Error #185](https://github.com/google-gemini/gemini-cli/issues/24917)**: Users are encountering generic React errors that halt execution, requiring investigation into the specific cause.
*   **[Color Customization Broken](https://github.com/google-gemini/gemini-cli/issues/25171)**: Updates since v0.35.0 appear to have broken the ability for users to inherit custom text colors from their terminal profiles.

## 4. Key PR Progress
*   **[Hierarchical .env Support](https://github.com/google-gemini/gemini-cli/pull/25160)**: A major feature addition to support multi-scope `.env` loading. Currently, a project-level `.env` overwrites global ones; this PR ensures proper merging.
*   **[Fix Windows PTY Binary Detection](https://github.com/google-gemini/gemini-cli/pull/25191)**: Addresses a regression where Windows PTY streams (containing ANSI/VT control sequences) were incorrectly flagged as binary, resulting in empty output from shell commands.
*   **[XDG Directory Support](https://github.com/google-gemini/gemini-cli/pull/25181)**: Moves the CLI to respect XDG standards for config, cache, and tmp directories, while allowing explicit overrides via environment variables.
*   **[OpenSSL 3.x Retry Logic](https://github.com/google-gemini/gemini-cli/pull/25187)**: Fixes streaming failures caused by updated error strings in OpenSSL 3.x (`ERR_SSL_SSL/TLS_ALERT_BAD_RECORD_MAC`), which were previously not classified as retryable.
*   **[Ctrl+C Double-Press Delay](https://github.com/google-gemini/gemini-cli/pull/12766)**: Implements a configurable delay for the double-press Ctrl+C exit mechanism to prevent accidental termination.
*   **[`/enhance` Command](https://github.com/google-gemini/gemini-cli/pull/25135)**: Introduces a new command to help users refine and expand their prompts using the LLM itself.
*   **[Ghostty/OAuth Fix](https://github.com/google-gemini/gemini-cli/pull/25026)**: Resolves a bug where the OAuth flow would falsely report "cancelled by user" when running inside the Ghostty terminal or VS Code WSL.
*   **[ToolDisplay Refactoring](https://github.com/google-gemini/gemini-cli/pull/25186)**: Migrates core tools to a native `ToolDisplay` property to improve UI rendering predictability.
*   **[Bulk Extension Management](https://github.com/google-gemini/gemini-cli/pull/24661)**: Adds functionality to enable/disable multiple extensions in a single command.
*   **[Fast Mode Implementation](https://github.com/google-gemini/gemini-cli/pull/24717)**: Merges a `--fast` flag designed to minimize overhead for quick, one-shot prompts by skipping pre-flight checks and telemetry saving.

## 5. Feature Request Trends
*   **Project vs. Global Context:** There is a clear trend toward better isolation and management of settings. Users are asking for hierarchical settings (`.env` merging) and "memory routing" (Issue #22819) to distinguish between personal preferences and project-specific rules.
*   **Enhanced Workflow Tools:** Requests for bulk actions (Bulk Extension Management) and workflow helpers (`/enhance` command) indicate users want to spend less time configuring and more time coding.
*   **Deeper Code Understanding:** The "AST-aware" investigation (Issue #22745) reflects a desire for the agent to move beyond simple text search and actually understand code structure (methods, classes) to reduce noise and token usage.

## 6. Developer Pain Points
*   **Terminal Compatibility:** "Scrambled text" (SSH) and "Binary detection" (Windows PTY) issues suggest the terminal UI layer is fragile across different environments, particularly when piping output or using Windows subsystems.
*   **Permission Fatigue:** The recurring issue of the CLI asking for permissions on the same file repeatedly (Issue #24916) is a major friction point in the daily workflow.
*   **Unpredictable Behavior:** Issues regarding "Minified React Errors" and "Subagent Success Lies" (where failure is reported as success) erode trust in the tool's reliability and make debugging difficult for the end-user.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-12

## Today's Highlights
Today's digest highlights significant concerns regarding resource usage and session management, alongside a push for improved workflow ergonomics. The community has identified a critical "infinite loop" bug consuming excessive quota requests per session, while simultaneously requesting enhanced user controls for queued commands and input text selection. Additionally, users are reporting persistent issues with auto-updates and extension stability on exit.

## Releases
*No new releases were published in the last 24 hours.*

## Hot Issues

1.  **[Infinite Premium Requests Consumption (#2591)](https://github.com/github/copilot-cli/issues/2591)**
    *   **Why it matters:** A critical billing bug where a single agent invocation triggers a loop, consuming 80-100 requests per "thinking step" or tool use.
    *   **Reaction:** Users are alarmed (👍 9) at the potential rapid depletion of their quota.

2.  **[Persistent 400 Invalid Request Errors (#1274)](https://github.com/github/copilot-cli/issues/1274)**
    *   **Why it matters:** Code reviews and diff operations are failing 95% of the time with server-side validation errors, blocking a core workflow.
    *   **Reaction:** High frustration (👍 7) as the CLI appears to be crafting invalid requests during standard tasks.

3.  **[Feature Request: Alt+V to Paste Images (#476)](https://github.com/github/copilot-cli/issues/476)**
    *   **Why it matters:** Users want parity with Claude Code to easily paste images from the clipboard into the CLI interface.
    *   **Reaction:** Highly requested (👍 57) quality-of-life improvement.

4.  **[Sandbox Mode for File Access (#892)](https://github.com/github/copilot-cli/issues/892)**
    *   **Why it matters:** Developers are asking for a security feature to restrict the agent's file access to a specific workspace root, preventing unintended modifications.
    *   **Reaction:** Strong demand (👍 30) for better safety rails.

5.  **[Cancel/Remove Enqueued Messages (#1857)](https://github.com/github/copilot-cli/issues/1857)**
    *   **Why it matters:** Once a message is queued via shortcut, it cannot be stopped. Users want the ability to manage the queue before execution.
    *   **Reaction:** Significant (👍 13) request for control over agent execution flow.

6.  **[Input Text Selection Support (#2644)](https://github.com/github/copilot-cli/issues/2644)**
    *   **Why it matters:** The CLI input box does not support standard text selection shortcuts (Shift+Arrows, Ctrl+A), making editing difficult.
    *   **Reaction:** A basic UX expectation that is currently missing.

7.  **[Copilot Update Command Broken (#2583)](https://github.com/github/copilot-cli/issues/2583)**
    *   **Why it matters:** The self-updating mechanism (`copilot update`) is failing in recent versions (1.0.20+).
    *   **Reaction:** Users are unable to easily maintain their installation.

8.  **[BYOK (Bring Your Own Key) Failures (#2637)](https://github.com/github/copilot-cli/issues/2637)**
    *   **Why it matters:** Users attempting to use custom providers (e.g., z.ai) via environment variables are hitting model compatibility errors.
    *   **Reaction:** Blocks extensibility for enterprise or custom setups.

9.  **[Windows Crash (Access Violation 0xc0000005) (#2608)](https://github.com/github/copilot-cli/issues/2608)**
    *   **Why it matters:** Version 1.0.22-0 introduced a native addon causing consistent crashes on Windows x64.
    *   **Reaction:** Regression causing instability for Windows users.

10. **[Transient API Errors / Retries (#2641)](https://github.com/github/copilot-cli/issues/2641)**
    *   **Why it matters:** Users are experiencing infinite retry loops on "transient" errors, causing the agent to hang during generation.
    *   **Reaction:** Disrupts long-running agent tasks.

## Key PR Progress
*   **[Install: Guard against duplicate PATH entries (#2565)](https://github.com/github/copilot-cli/pull/2565)**
    *   **Description:** Fixes a bug where running the installer multiple times appends duplicate PATH variables to the shell profile.
    *   **Impact:** Prevents shell configuration pollution during reinstalls or updates.

*(Note: Only 1 PR was updated in the last 24 hours, listed above.)*

## Feature Request Trends
*   **Ergonomics & Input Handling:** There is a clear trend toward improving the TUI input experience, specifically requesting standard GUI text selection capabilities ([#2644](https://github.com/github/copilot-cli/issues/2644)) and clipboard image integration ([#476](https://github.com/github/copilot-cli/issues/476)).
*   **User Control & Visibility:** Users are demanding more agency over the agent's execution, specifically the ability to cancel queued commands ([#1857](https://github.com/github/copilot-cli/issues/1857)) and visibility into which underlying models are being used ([#2646](https://github.com/github/copilot-cli/issues/2646)).
*   **Security & Sandboxing:** The request for a "Sandbox Mode" ([#892](https://github.com/github/copilot-cli/issues/892)) reflects a growing desire to constrain AI agent capabilities to specific directories to ensure safety.

## Developer Pain Points
*   **Quota Anxiety:** The "infinite request" bug ([#2591](https://github.com/github/copilot-cli/issues/2591)) is a major pain point, turning a single session into a costly mistake due to tool invocation loops.
*   **Reliability & Stability:** Frequent 400 errors ([#1274](https://github.com/github/copilot-cli/issues/1274)), transient API retry loops ([#2641](https://github.com/github/copilot-cli/issues/2641)), and hard crashes on Windows ([#2608](https://github.com/github/copilot-cli/issues/2608)) suggest stability is currently the biggest hurdle for adoption.
*   **Extension Lifecycle:** Developers are reporting "write EPIPE" errors and stream destruction issues every time they close a session when extensions are installed ([#2639](https://github.com/github/copilot-cli/issues/2639)), making the exit process noisy and concerning.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-12

## 1. Today's Highlights
The **Kimi Code CLI** repository is highly active today, with significant momentum toward resolving feature requests and usability bugs. Key highlights include the implementation of the community-requested `/delete` and `/loop` commands, as well as critical fixes for the slash command menu behavior and the MCP tool output handling to prevent context overflows. There is also a strong focus on configuration flexibility, with new PRs addressing hardcoded timeouts for both approvals and shell operations.

## 2. Releases
*No new releases detected in the last 24 hours.*

## 3. Hot Issues
1.  **[Feature Request] Add /delete command to remove sessions [#1783](https://github.com/MoonshotAI/kimi-cli/issues/1783)**
    *   **Why it matters:** Users currently have to manually delete files in `~/.kimi/sessions/` to manage chat history. This request seeks a native CLI command (`/delete`) for better hygiene and security.
    *   **Reaction:** High utility request; implementation PR is already open.

2.  **[Bug] Slash command completion menu should appear for exact match (e.g. /editor) [#1752](https://github.com/MoonshotAI/kimi-cli/issues/1752)**
    *   **Why it matters:** Affects workflow efficiency. Typing an exact command match (e.g., `/editor`) hides the completion menu, preventing users from seeing aliases or sub-options.
    *   **Reaction:** Annoying UX friction; fix is currently in review.

3.  **[Bug] Kimi-CLI does not seem to respect task timeout parameters [#1761](https://github.com/MoonshotAI/kimi-cli/issues/1761)**
    *   **Why it matters:** Users on Linux (v1.30) report that timeouts are being ignored, causing processes to hang longer than configured.
    *   **Reaction:** Critical for long-running tasks; fix for timeout aliasing has been proposed.

4.  **[Bug] VSCode extension Can't slash skills before type something [#1830](https://github.com/MoonshotAI/kimi-cli/issues/1830)**
    *   **Why it matters:** In VSCode (v1.31.0), selecting a slash completion immediately submits an empty prompt rather than filling the command.
    *   **Reaction:** Breaks standard editor interaction patterns.

5.  **Feature Request: Configurable Approval Request Timeout [#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823)**
    *   **Why it matters:** The 5-minute (300s) hardcoded timeout is too short for long reviews, or conversely, users want the option to disable it entirely for unattended operation.
    *   **Reaction:** +1 Upvote; PR to make this configurable is open.

6.  **[Bug] SetTodoList storm problem still exists in version 1.31.0 [#1835](https://github.com/MoonshotAI/kimi-cli/issues/1835)**
    *   **Why it matters:** Users are experiencing "storm" behavior (likely infinite loops or excessive verbosity) with the `SetTodoList` tool in the latest release.
    *   **Reaction:** High priority bug affecting stability.

7.  **[Enhancement] Feature Request: /loop command functionality [#1833](https://github.com/MoonshotAI/kimi-cli/issues/1833)**
    *   **Why it matters:** Users want feature parity with Claude Code to run prompts on a schedule (e.g., "check deploy status every 5 minutes").
    *   **Reaction:** Popular feature request; implementation is pending.

8.  **MCP Tool Output Handling**
    *   **Why it matters:** Tools like Playwright can return massive outputs (500KB+), causing API 400 errors or UI stalls. PR #1843 addresses this.
    *   **Reaction:** Essential for integrating browser automation tools.

9.  **ACP Authentication Refactor**
    *   **Why it matters:** PR #1512 (Closed) introduced a robust OAuth Device Flow. Issues suggest users are eager for stability in login flows.
    *   **Reaction:** Major architectural improvement.

10. **YOLO Mode Interaction**
    *   **Why it matters:** Users report confusion about when `YOLO` mode prompts for feedback vs. when it auto-approves. PR #1836 aims to fix these semantics.
    *   **Reaction:** Important for clarifying non-interactive behavior.

## 4. Key PR Progress
1.  **[feat] add /delete command for session removal [#1839](https://github.com/MoonshotAI/kimi-cli/pull/1839)**
    *   Adds `/delete [session_id]` (aliased as `/remove`) to resolve #1783. Includes safety checks to prevent deleting the active session.

2.  **[fix] show completion menu for exact command matches [#1841](https://github.com/MoonshotAI/kimi-cli/pull/1841)**
    *   Resolves #1752. Removes the early-return logic that hid the menu when an exact command match was typed, restoring the full list of options.

3.  **[feat] make approval timeout configurable [#1837](https://github.com/MoonshotAI/kimi-cli/pull/1837)**
    *   Implements #1823. Adds `approval.timeout_s` configuration. Supports `timeout_s=0` for unlimited wait times.

4.  **[feat] add /loop command for scheduled prompt repetition [#1834](https://github.com/MoonshotAI/kimi-cli/pull/1834)**
    *   Implements #1833. Adds `/loop [interval] [prompt]` to run tasks repeatedly (e.g., `/loop 5m check logs`).

5.  **[fix] prevent immediate submit when selecting /skill completions [#1838](https://github.com/MoonshotAI/kimi-cli/pull/1838)**
    *   Resolves #1830. Fixes the VSCode issue where selecting a slash skill command would trigger immediate execution without waiting for further input.

6.  **[fix] normalize timeout_s alias for shell/acp timeouts [#1840](https://github.com/MoonshotAI/kimi-cli/pull/1840)**
    *   Addresses #1761. Standardizes the handling of `timeout` vs `timeout_s` parameters across the shell and ACP tools, ensuring configurations are respected.

7.  **[fix] truncate MCP tool output [#1843](https://github.com/MoonshotAI/kimi-cli/pull/1843)**
    *   Adds a 100K character budget for MCP tool results (like Playwright DOM dumps) to prevent context overflow errors.

8.  **[docs] update en/zh docs for new features and tool changes [#1842](https://github.com/MoonshotAI/kimi-cli/pull/1842)**
    *   Comprehensive documentation updates covering new tools (ReadMediaFile), timeout parameters, and sensitive file filtering.

9.  **[feat] Rewrite ACP authentication flow [#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512)**
    *   (Recently Closed) Implements full terminal login and OAuth Device Flow for ACP servers, standardizing authentication logic.

10. **[fix] interactive YOLO plan review semantics [#1836](https://github.com/MoonshotAI/kimi-cli/pull/1836)**
    *   Clarifies the behavior of `YOLO` mode, ensuring that `AskUserQuestion` and plan reviews are handled correctly in interactive vs. print modes.

## 5. Feature Request Trends
*   **Workflow Automation:** Users are actively requesting features that bridge the gap with "Claude Code," specifically the ability to run recurring tasks via the `/loop` command.
*   **Configuration Granularity:** There is a clear trend toward demanding control over timeouts—both for session approvals and tool execution (requesting unlimited timeouts or specific second-based delays).
*   **Session Management:** Developers want better lifecycle management for their sessions, specifically the ability to programmatically delete sessions via `/delete` rather than managing files manually.

## 6. Developer Pain Points
*   **UX Inconsistency in Slash Commands:** Users are frustrated by the slash command menu disappearing on exact matches or triggering premature submission in VSCode.
*   **Timeout Unreliability:** A recurring source of pain is the tool ignoring timeout parameters, leading to hanging processes that developers cannot kill or control effectively.
*   **MCP Integration Stability:** As users integrate complex MCP tools (like browser automation), the large output volumes are breaking the context window or stalling the wire protocol, requiring truncation fixes.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-12

## 1. Today's Highlights
OpenCode is undergoing significant internal refactoring, specifically targeting the migration to "Effect" services to improve runtime handling and telemetry. While the core architecture shifts, users are reporting stability issues with the Windows desktop client (session history loss) and the VSCode extension (provider errors). Mobile and web UI responsiveness remains a focal point for ongoing improvements.

## 2. Releases
**No new releases detected in the last 24 hours.**

## 3. Hot Issues
*   **[#13984](https://github.com/anomalyco/opencode/issues/13984) - CLI Copy/Paste Failure**
    Users are reporting a critical workflow breakage where the copy-to-clipboard function appears to succeed (`copied to clipboard`) but pasting yields no content. This high-activity thread suggests a regression in core CLI interaction handling.

*   **[#10119](https://github.com/anomalyco/opencode/issues/10119) - VSCode Extension "Data Provider" Error**
    The new "OpenCode Beta" VSCode extension is currently broken for many users, displaying a persistent "There is no data provider registered" error in the side panel. This blocks adoption for developers relying on the VSCode integration.

*   **[#17765](https://github.com/anomalyco/opencode/issues/17765) - Windows Session History Loss**
    A frustrating data persistence bug has emerged where the Windows Desktop client clears all visible session history upon restart, despite the data still existing in `opencode.db`. This indicates a UI/database retrieval synchronization issue.

*   **[#4672](https://github.com/anomalyco/opencode/issues/4672) - GitHub Agent Stuck**
    Users are experiencing hangs when the agent attempts to send messages, specifically noting "Sending Message to opencode..." indefinitely. This points to potential network timeout or API instability issues.

*   **[#16685](https://github.com/anomalyco/opencode/issues/16685) - Kimi K2.5 Provider Errors**
    Specific configurations using the Kimi K2.5 model via OpenCode Go on Windows are consistently returning "Provider returned error." This suggests compatibility issues with newer reasoning model configurations.

*   **[#21910](https://github.com/anomalyco/opencode/issues/21910) - ACP Message Duplication**
    Users utilizing `opencode acp` on Windows are seeing duplicated requests or responses. This appears unique to the OpenCode ACP implementation, as other clients (Gemini CLI, Copilot) work correctly.

*   **[#6348](https://github.com/anomalyco/opencode/issues/6348) - Windows Whitespace Mess**
    Editing files on Windows is corrupting whitespace and line endings (CRLF/LF), likely due to interactions between Git Bash defaults and the editor tool. This creates unnecessary diffs for developers working in mixed teams.

*   **[#1573](https://github.com/anomalyco/opencode/issues/1573) - Token Usage Inefficiency**
    A recurring complaint regarding the "bloated" context window. Users note that simple prompts like "hi" cost thousands of tokens due to forced tool/agent injection, requesting a "Chat/Ask Mode" that bypasses tools to save costs.

*   **[#22014](https://github.com/anomalyco/opencode/issues/22014) - VSCode Integration Scrolling Broken**
    The VSCode integrated view is missing scrollbars or scroll functionality once the conversation exceeds the viewport height, effectively making long sessions unreadable without external intervention.

*   **[#8820](https://github.com/anomalyco/opencode/issues/8820) - "Other" Provider Missing**
    Documentation suggests an "Other" provider option exists for custom configurations, but the UI does not display it when running `/connect`, preventing advanced users from configuring custom endpoints.

## 4. Key PR Progress
*   **[#22097](https://github.com/anomalyco/opencode/pull/22097) - AI SDK Telemetry to OTLP**
    *Authored by kitlangton*
    A major enhancement for observability. This PR bridges AI SDK experimental telemetry with OpenTelemetry (OTLP), allowing developers to export `ai.*` spans and traces to local endpoints for debugging and performance analysis.

*   **[#22090](https://github.com/anomalyco/opencode/pull/22090) - Refactor: Destroy FileTime Facade**
    *Authored by kitlangton*
    Part of a larger effort to remove "facade" patterns in favor of `ManagedRuntime`. This cleanup simplifies file time handling logic and reduces dependency overhead in the runtime layer.

*   **[#22094](https://github.com/anomalyco/opencode/pull/22094) - Effect Service Adoption Cleanup**
    *Authored by kitlangton*
    Completes the migration of smaller services (config, provider) to the new Effect-based `AppFileSystem`. This standardizes error handling and runtime management across the codebase.

*   **[#20775](https://github.com/anomalyco/opencode/pull/20775) - Fix: Sanitize Array Schemas**
    *Authored by Krishnachaitanyakc*
    Addresses a critical bug where MCP servers returning array schemas without defined `items` would crash the system. This fix sanitizes schemas across all providers to ensure stability.

*   **[#22096](https://github.com/anomalyco/opencode/pull/22096) - Webfetch OAuth (RFC 9728)**
    *Authored by irvinebroque*
    Adds support for OAuth-based authentication flows in the `webfetch` tool, allowing the agent to access protected resources that require RFC 9728 compliant authorization headers.

*   **[#22088](https://github.com/anomalyco/opencode/pull/22088) - RTL Text Layout Support**
    *Authored by uriva*
    Improves internationalization by converting hardcoded CSS physical properties (e.g., `padding-left`) to logical properties (e.g., `padding-inline-start`). This fixes layout issues for Right-to-Left (RTL) languages.

*   **[#18767](https://github.com/anomalyco/opencode/pull/18767) - Mobile Touch Optimization**
    *Authored by noahbentusi*
    A broad feature set aimed at improving the mobile experience. This includes resizing touch targets, preventing accidental zooms, and ensuring the chat interface remains usable on smaller viewports.

*   **[#21756](https://github.com/anomalyco/opencode/pull/21756) - Bash Tool Env Parameters**
    *Authored by taxilian*
    Adds an `env` parameter to the bash tool, allowing plugins to spawn processes with specific environment variables. This is crucial for tools that require isolated or specific runtime configurations.

*   **[#21492](https://github.com/anomalyco/opencode/pull/21492) - Fix: Preserve Tool Context**
    *Authored by GuestAUser*
    Fixes a bug where tool context was lost during prompt compaction or multi-turn conversation loops. This ensures that agents maintain the correct state across complex interactions.

*   **[#13854](https://github.com/anomalyco/opencode/pull/13854) - Fix: TUI Markdown Streaming**
    *Authored by mocksoul*
    Resolves a rendering issue in `opentui` where the last row of a table or code block was skipped because the streaming state didn't properly terminate when a message completed.

## 5. Feature Request Trends
*   **BMAD / Agile Workflow Integration:** There is a growing demand for structured workflows, specifically requesting a plugin to handle "BMAD" (Business Model Agile Development) tasks like Epic definition, Sprint Planning, and PRD generation directly within OpenCode ([#21842](https://github.com/anomalyco/opencode/issues/21842)).
*   **Context-Aware Prompting:** Users want "Prompt Enhancement" features (similar to Kilo Code) that automatically inject relevant context or transform brief prompts into detailed queries based on the current file structure ([#10237](https://github.com/anomalyco/opencode/issues/10237)).
*   **ACP over WebSocket:** To improve remote access, requests are being made to expose the Agent Client Protocol (ACP) over WebSockets, allowing connections without local port forwarding ([#13388](https://github.com/anomalyco/opencode/issues/13388)).

## 6. Developer Pain Points
*   **Windows Environment Instability:** Windows remains a "second-class citizen" regarding stability. Issues range from session history wiping (#17765), clipboard failures (#13984), and specific agent provider errors (#16685) to line-ending corruption (#6348).
*   **UI Responsiveness in VSCode:** The VSCode extension is currently struggling with basic functionality, notably the inability to scroll through chat history (#22014) and data provider errors blocking the view entirely (#10119).
*   **Token Bloat:** Developers are increasingly frustrated with the high token cost of simple interactions due to the automatic inclusion of tools and agents, leading to requests for a "Lite" or "Chat-only" mode (#1573).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-12

## 1. Today's Highlights
The **v0.14.3-nightly** series continues with daily builds addressing immediate stability concerns, specifically focusing on recursive file search limits and input handling edge cases. Significant developer activity is visible in session management improvements (`/chat` and `/resume` flows) and internationalization (i18n) support, while the community is actively debating API reliability regarding "content inspection" errors and requesting better GUI/GUI-based configuration options.

## 2. Releases
*   **v0.14.3-nightly.20260411** ([Compare](https://github.com/QwenLM/qwen-code/compare/v0.14.3...v0.14.3-nightly.20260411.55bcec70d))
    *   **Stability:** Includes fixes for critical OOM issues in the recursive file crawler and channel proxy handling.

## 3. Hot Issues
*   [#3149](https://github.com/QwenLM/qwen-code/issues/3149) | **[BUG] Chinese Agent Names Unusable**
    *   **Why it matters:** Users discovered that sub-agents defined with Chinese names (`name: 项目管理`) cannot be invoked or managed via commands, whereas English names work fine.
    *   **Reaction:** Community frustration is evident ("A Chinese team developed software that doesn't test Chinese...").
*   [#3119](https://github.com/QwenLM/qwen-code/issues/3119) & [#3145](https://github.com/QwenLM/qwen-code/issues/3145) | **API Error 400: DataInspectionFailed**
    *   **Why it matters:** Multiple users report false positives where safe code/input text is flagged as "inappropriate content" by the upstream API, blocking development work.
    *   **Reaction:** High concern; users are unable to proceed with tasks due to aggressive filtering.
*   [#3153](https://github.com/QwenLM/qwen-code/issues/3153) | **[BUG] Infinite Loop on Script Rejection**
    *   **Why it matters:** After rejecting a proposed Python script, Qwen Code enters an infinite loop re-attempting the exact same script without respecting the rejection.
    *   **Reaction:** Critical workflow breaker for agents requiring approval.
*   [#3152](https://github.com/QwenLM/qwen-code/issues/3152) | **[BUG] /resume Creates Duplicate Sessions**
    *   **Why it matters:** Using the "continue" feature from `PROJECT_SUMMARY.md` creates a new session instead of reopening the existing one, fragmenting conversation history.
    *   **Reaction:** Major usability issue for long-running projects.
*   [#3143](https://github.com/QwenLM/qwen-code/issues/3143) | **[FEAT] Request for Graphical Interface**
    *   **Why it matters:** Non-terminal users are struggling with configuration (e.g., switching models, setting `settings.xml`) and are requesting a GUI.
    *   **Reaction:** Highlights a barrier to entry for less technical users.
*   [#3144](https://github.com/QwenLM/qwen-code/issues/3144) | **[BUG] Terminal Scroll "Bouncing"**
    *   **Why it matters:** During agent execution, the terminal scroll view jumps rapidly between top and bottom, making the output unreadable.
    *   **Reaction:** Significant UX degradation during streaming.
*   [#3128](https://github.com/QwenLM/qwen-code/issues/3128) | **[FEAT] GitHub Copilot Support**
    *   **Why it matters:** Users want to utilize their existing GitHub Copilot accounts/models directly within Qwen Code.
    *   **Reaction:** Popular request for model provider flexibility.
*   [#3140](https://github.com/QwenLM/qwen-code/issues/3140) | **[QUESTION] Support for `agents.md`?**
    *   **Why it matters:** Users migrating from other tools (like iflow) want to know if `agents.md` is auto-injected or if they must manually rename files to `qwen.md`.
    *   **Reaction:** Migration friction point.
*   [#3142](https://github.com/QwenLM/qwen-code/issues/3142) | **[FEAT] `respectGitignore` Setting**
    *   **Why it matters:** Currently, `@` file mentions ignore `.gitignore`. Users want an option to respect it to avoid indexing `node_modules` or build artifacts.
    *   **Reaction:** Request for feature parity with competitors like Claude Code.
*   [#146](https://github.com/QwenLM/qwen-code/issues/146) | **[FEAT] Global OpenAI Key Config**
    *   **Why it matters:** Users want to set a default API Key/URL globally instead of per-project or env vars.
    *   **Reaction:** Persistent quality-of-life request.

## 4. Key PR Progress
*   [#3138](https://github.com/QwenLM/qwen-code/pull/3138) | **[MERGED] Cap Recursive File Crawler**
    *   **Details:** Adds a 100k entry limit to the file crawler to prevent Out-Of-Memory (OOM) crashes when autocomplete is triggered on large directories (e.g., `node_modules`).
*   [#3103](https://github.com/QwenLM/qwen-code/pull/3103) | **Fix Shift+Enter for Newlines**
    *   **Details:** Resolves terminal inconsistencies where `Shift+Enter` could not be used to insert new lines without sending the message.
*   [#3150](https://github.com/QwenLM/qwen-code/pull/3150) | **Voice Message Support (Telegram)**
    *   **Details:** Adds handling for `message:voice` in the Telegram adapter, allowing users to send voice notes which are transcribed/processed.
*   [#3146](https://github.com/QwenLM/qwen-code/pull/3146) | **Sandbox Image Configuration**
    *   **Details:** Adds support for `tools.sandboxImage` in `settings.json`, allowing persistent configuration of the sandbox environment.
*   [#3151](https://github.com/QwenLM/qwen-code/pull/3151) | **Fix Follow-up Suggestions**
    *   **Details:** Fixes 5 distinct bugs causing the "fast model" follow-up suggestions to fail silently on OpenAI-compatible providers.
*   [#3141](https://github.com/QwenLM/qwen-code/pull/3141) | **i18n Expansion**
    *   **Details:** Adds localization support for `arena`, `copy`, `export`, `restore`, and `vim` commands.
*   [#3136](https://github.com/QwenLM/qwen-code/pull/3136) | **Fix Channel Proxy Settings**
    *   **Details:** Forces Telegram and other channels to respect the `--proxy` flag and `HTTPS_PROXY` env vars.
*   [#3132](https://github.com/QwenLM/qwen-code/pull/3132) | **Parallelize Release Workflow**
    *   **Details:** Optimizes CI/CD by running validation paths in parallel.
*   [#3093](https://github.com/QwenLM/qwen-code/pull/3093) | **Session Management UX**
    *   **Details:** Implements `/rename` and `/delete` commands for sessions, along with auto-title generation.
*   [#3095](https://github.com/QwenLM/qwen-code/pull/3095) | **Input Editing Queue**
    *   **Details:** Allows users to pop and edit queued messages using `Up Arrow` or `ESC` before they are sent to the LLM.

## 5. Feature Request Trends
*   **GUI & Configuration Ease:** There is a strong push for Graphical Interfaces (Issue #3143) and easier global configuration methods (Issues #146, #577) to reduce reliance on terminal commands and environment variables.
*   **Model Provider Flexibility:** Users are eager for native support for **GitHub Copilot** (Issue #3128) and better handling of OpenAI-compatible endpoints.
*   **Context & File Control:** Developers want granular control over file indexing, specifically requesting a toggle to **respect `.gitignore`** during file searches (Issue #3142).
*   **Session Portability:** Requests for importing `agents.md` (Issue #3140) and better session history management indicate a desire for easier migration and state persistence.

## 6. Developer Pain Points
*   **Input Handling Fragility:** Recurring bugs involving special characters (like `@latest`) causing crashes (Issue #3130) and the inability to stop a rejected agent loop (Issue #3153) are disrupting coding flow.
*   **Localization Glitches:** The fact that Chinese characters break agent naming (Issue #3149) in a tool primarily developed by a Chinese team is a significant source of irony and frustration.
*   **API False Positives:** The "DataInspectionFailed" error (Issue #3119) is blocking legitimate work, suggesting the safety filter is overly aggressive.
*   **Terminal Instability:** The "scroll bouncing" issue (Issue #3144) makes the current terminal experience visually jarring and difficult to read during long operations.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*