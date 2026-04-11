# AI CLI Tools Community Digest 2026-04-11

> Generated: 2026-04-11 00:12 UTC | Tools covered: 8

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

## Cross-Tool Community Digest: Analysis for 2026-04-11

### 1. Ecosystem Overview
The AI CLI tools ecosystem is currently undergoing a transition from experimental "toys" to essential enterprise infrastructure, heavily emphasizing **stability**, **security**, and **workflow integration**. Developers are moving beyond simple code generation into complex **agentic workflows**, requiring tools that handle long-running tasks, state management, and multi-modal inputs (images/audio) without crashing. Simultaneously, a divide is emerging between **cloud-first** enterprise tools (Claude Code, Copilot, Codex) grappling with auth/sandbox complexities and **local-first** tools (Charm Crush, OpenCode) prioritizing token efficiency and UI polish. The "ChatOps" paradigm is solidifying, but friction remains regarding cost transparency, permissions fatigue, and cross-platform compatibility (specifically Windows/WSL and macOS Intel).

### 2. Activity Comparison

| Tool | Issue Activity | PR Velocity | Release Status | Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **High** (Critical capacity/regression issues) | **High** (10+ merged) | v2.1.101 | Enterprise Collab & Auth |
| **OpenAI Codex** | **High** (Sandbox/Auth blockers) | **High** (10+ merged) | rust-v0.119.0 | Realtime Voice & MCP Apps |
| **Charm Crush** | **Medium** (Specific stability bugs) | **Medium** (8 merged) | Nightly builds | Token Optimization & UX |
| **Gemini CLI** | **Medium** (UI regressions) | **High** (Architectural refactors) | v0.39.0-nightly | State Management & SSH |
| **GitHub Copilot** | **Medium** (Billing/Enterprise friction) | **Low** (Direct releases) | v1.0.24 | Agent Config & Hooks |
| **Kimi Code** | **Medium** (Perf/Auth) | **Medium** (8 merged) | v1.31.0 | UI Stability & Tools |
| **OpenCode** | **Medium** (Integration reqs) | **High** (Internal refactors) | v1.4.3 | Observability & Effects |
| **Qwen Code** | **Medium** (Session mgmt) | **Medium** (Feature focused) | v0.14.3 | Session Naming & TUI |

### 3. Shared Feature Directions
*   **Granular Permission Management (Safe Mode)**
    *   *Tools:* **GitHub Copilot**, **OpenAI Codex**, **Claude Code**, **Qwen Code**.
    *   *Trend:* Users are frustrated by "All or Nothing" approval flows. There is a universal demand for "Allow Safe Commands" (whitelisting read-only ops like `git status` or `grep`) while maintaining strict approval for destructive writes.
*   **Project-Scoped Configuration & MCP**
    *   *Tools:* **GitHub Copilot**, **Claude Code**, **OpenCode**, **Kimi Code**.
    *   *Trend:* Moving away from global `~/.config` to repository-level settings (e.g., `.copilot/`, local MCP servers) to ensure project-specific tooling and "works-on-my-machine" consistency for teams.
*   **Background Notification Hooks**
    *   *Tools:* **Claude Code** (notify-on-complete), **Qwen Code**, **Charm Crush**.
    *   *Trend:* As AI agents perform longer tasks, developers require OS-level notifications (audio or visual) to context-switch away from the terminal without missing completion events.
*   **Session State & History Persistence**
    *   *Tools:* **Qwen Code**, **Kimi Code**, **OpenCode**, **Claude Code**.
    *   *Trend:* Users demand the ability to name, save, and restore sessions (`/chat`, `/sessions`) and preserve context even when project directories are renamed or moved.

### 4. Differentiation Analysis

| Feature Dimension | **Claude Code / Copilot** (Enterprise Leaders) | **OpenCode / Charm Crush** (TUI Power Users) | **OpenAI Codex** (Platform Play) |
| :--- | :--- | :--- | :--- |
| **Target User** | Enterprise teams needing compliance & scaling. | Individual hackers & terminal enthusiasts. | Users deep in the OpenAI/ChatGPT ecosystem. |
| **Key Differentiator** | **Deep Model Integration:** Best-in-class reasoning models (Sonnet 4.6) with enterprise security (SSO, TLS, CA certs). | **Efficiency & Control:** Extreme token optimization (Crush), local model support (OpenCode), and keyboard-centric workflows. | **Voice & Mobile:** Unique focus on WebRTC voice input and mobile-to-desktop bridging. |
| **Technical Approach** | "Batteries-included" proprietary agents. | Modular, plugin-based architectures (MCP, Effects). | "Agent-as-a-Service" via ChatGPT backend integration. |

### 5. Community Momentum & Maturity
*   **Most Active & Iterating:** **OpenAI Codex** and **Claude Code** are seeing the highest volume of changes, though this is partly driven by complex infrastructure overhauls (Sandboxes, WebRTC) and fixing regressions introduced by rapid updates.
*   **High Stability Focus:** **Charm Crush** and **Qwen Code** communities are highly focused on polishing the TUI experience (flicker reduction, theming), signaling a maturation of the user experience for terminal-based workflows.
*   **Enterprise Friction:** **GitHub Copilot** and **Claude Code** face significant headwinds regarding billing transparency ( runaway costs) and authentication complexity, indicating growing pains as these tools move into corporate environments.
*   **Local-First Rising:** **OpenCode** is rapidly iterating on observability (OTel) and local model support (Ollama, Gemma 4), capturing the segment of developers prioritizing data sovereignty and offline capabilities.

### 6. Trend Signals for Developers
1.  **The "MCP" Standard is Winning:** Across almost all major tools (Codex, Claude, OpenCode, Copilot), **Model Context Protocol (MCP)** is becoming the de-facto standard for extending AI capabilities. Developers should invest in building MCP servers rather than tool-specific plugins.
2.  **Token Efficiency is Critical:** With rising costs and "Max" subscription limits, features that minimize token usage—like **short tool descriptions** (Charm Crush) or **prompt caching flags** (Claude Code)—are moving from "nice-to-have" to essentials.
3.  **Cross-Platform is Hard:** Windows support (WSL, PowerShell, Intel vs. ARM) remains a major pain point across all tools. Developers relying on Windows should expect a second-class experience compared to macOS/Linux.
4.  **"Agentic" Failure Modes:** As tools delegate more autonomy to agents, new failure modes are emerging (permission flakiness, "stuck" loops, silent failures in MCP tools). Developers building on these tools need robust monitoring and "interrupt" capabilities.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Data as of 2026-04-11
**Source:** `anthropics/skills` Repository Activity

## 1. Top Skills Ranking
*Based on pull request activity, topical relevance, and complexity.*

*   **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)** (Open)
    *   **Functionality:** Enforces typographic quality in AI-generated documents, preventing orphaned words, widow paragraphs, and numbering misalignment.
    *   **Highlights:** Addresses a ubiquitous "polish" issue in AI outputs; focuses on visual structure integrity.
    *   **Status:** Open (Proposed Mar 4, 2026)

*   **[Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (Open)
    *   **Functionality:** Meta-tools for auditing Skills across five dimensions (structure, docs, examples, security, implementation).
    *   **Highlights:** High-value "dogfooding" tools that empower the community to self-regulate quality and security.
    *   **Status:** Open (Proposed Nov 6, 2025)

*   **[Add ODT skill](https://github.com/anthropics/skills/pull/486)** (Open)
    *   **Functionality:** creation, template filling, and HTML parsing for OpenDocument Text (.odt) format (LibreOffice standard).
    *   **Highlights:** Expands interoperability beyond MS Office formats; crucial for open-source workflow integration.
    *   **Status:** Open (Proposed Mar 1, 2026)

*   **[Add comprehensive system documentation and flowcharts](https://github.com/anthropics/skills/pull/95)** (Open)
    *   **Functionality:** Generates detailed documentation, including architecture overviews and evidence card lifecycles.
    *   **Highlights:** Satisfies a deep need for system visualization and architectural consistency in complex projects.
    *   **Status:** Open (Proposed Nov 11, 2025)

*   **[Improve frontend-design skill](https://github.com/anthropics/skills/pull/210)** (Open)
    *   **Functionality:** Revises existing frontend-design skill to be more actionable and coherent for Claude within a single context.
    *   **Highlights:** Focuses on "prompt engineering" refinement—ensuring Claude can execute instructions rather than just reading them.
    *   **Status:** Open (Proposed Jan 5, 2026)

*   **[Add x402 BSV auth + micropayment skill](https://github.com/anthropics/skills/pull/374)** (Open)
    *   **Functionality:** enables discovery, authentication, and micropayment for AI services via BSV (Bitcoin SV) directly from natural language.
    *   **Highlights:** A unique entry into monetization and crypto-payment protocols for AI agents.
    *   **Status:** Open (Proposed Feb 12, 2026)

## 2. Community Demand Trends
*Derived from high-engagement Issues and proposals.*

*   **Reliability & Stability (Operational Excellence):** The most commented issue (**#62**) involves Skills disappearing, indicating the community prioritizes stability and data persistence over new features.
*   **Cross-Session Memory:** Issues and PRs (e.g., **#521**, **#154**) show a strong desire for "persistent context" so knowledge gained in one session isn't lost in the next.
*   **Quality Assurance:** There is a clear trend toward tooling that validates other Skills (**#83**, **Issue #202**), suggesting the ecosystem is maturing and needs governance.
*   **Enterprise Integration:** Issues regarding AWS Bedrock (**#29**) and organization-wide sharing (**#228**) highlight a demand for better enterprise adoption paths.

## 3. High-Potential Pending Skills
*Active proposals likely to impact the ecosystem soon.*

*   **[feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** (Open)
    *   Adds a comprehensive testing stack (Trophy model, AAA pattern) to code generation workflows.
*   **[feat: add sensory skill — macOS automation](https://github.com/anthropics/skills/pull/806)** (Open)
    *   Introduces native macOS automation via AppleScript, offering a robust alternative to screenshot-based UI interaction.
*   **[Add shodh-memory skill](https://github.com/anthropics/skills/pull/154)** (Open)
    *   A proposed persistent memory system allowing agents to surface relevant past context proactively.

## 4. Skills Ecosystem Insight
The community is shifting from purely functional expansion (adding tools for specific file formats) toward **systemic resilience and governance**, demanding persistent memory, robust skill validation, and stable deployment environments.

---

# Claude Code Community Digest: 2026-04-11

## Today's Highlights
The release of **v2.1.101** focuses on team collaboration and enterprise compatibility, introducing `/team-onboarding` and OS-native CA certificate trust. However, the community is highly focused on recovering the recently removed `/buddy` feature and troubleshooting several regressions, including critical MCP (Model Context Protocol) plugin failures and cost tracking anomalies in the status line.

## Releases
**v2.1.101 & v2.1.100**
- **Enterprise TLS Support:** Added default trust for OS CA certificate stores to support corporate proxies without extra configuration (revertable via `CLAUDE_CODE_CERT_STORE=bundled`).
- **Team Onboarding:** New `/team-onboarding` command generates ramp-up guides based on local usage history.
- **Incomplete Changelog:** The release notes for v2.1.101 cut off abruptly at `/ultrapl`, indicating potential documentation haste.

## Hot Issues

1.  **[#16157 Instantly hitting usage limits with Max subscription](https://github.com/anthropics/claude-code/issues/16157)** (1442 comments)
    *   **Why it matters:** A critical, long-standing issue regarding the Max subscription plan. Users report exhausting their token limits almost immediately despite normal usage.
    *   **Community Reaction:** Extremely high frustration; 671 upvotes indicate this is the single most pressing billing/capacity issue.

2.  **[#42796 Claude Code unusable for complex tasks with Feb updates](https://github.com/anthropics/claude-code/issues/42796)** (263 comments)
    *   **Why it matters:** Users report a degradation in model reasoning capabilities for complex engineering tasks following updates in February.
    *   **Community Reaction:** High concern regarding model regression; 1213 upvotes reflect a severe impact on developer productivity.

3.  **[#45596 Bring Back Buddy](https://github.com/anthropics/claude-code/issues/45596)** (114 comments)
    *   **Why it matters:** The `/buddy` adversarial code reviewer feature was silently removed in v2.1.97. Users found it uniquely effective for improving code quality.
    *   **Community Reaction:** Passioned demand for its return as a permanent opt-in feature (see also #45612). 426 upvotes show strong attachment to this specific capability.

4.  **[#36582 Terminal keeps scrolling to top](https://github.com/anthropics/claude-code/issues/36582)** (38 comments)
    *   **Why it matters:** A UI regression where long conversations cause the terminal to auto-scroll to the top, making the tool difficult to use.
    *   **Community Reaction:** Major usability friction; 122 upvotes suggest this affects daily workflows significantly.

5.  **[#36503 --channels plugin ignores inbound notifications](https://github.com/anthropics/claude-code/issues/36503)** (40 comments)
    *   **Why it matters:** The `--channels` feature for plugins (e.g., Telegram) connects successfully but fails to trigger on inbound messages, breaking bi-directional communication.
    *   **Community Reaction:** Blocks automation workflows; users are forced to poll manually.

6.  **[#46406 MCP tools no longer exposed via --channels (Regression)](https://github.com/anthropics/claude-code/issues/46406)** (Closed)
    *   **Why it matters:** v2.1.101 broke the ability for plugins loaded via `--channels` to expose their MCP tools (e.g., iMessage).
    *   **Community Reaction:** While closed, this highlights fragility in the plugin subsystem introduced in the latest release.

7.  **[#26408 Issue with selected model (claude-sonnet-4-6)](https://github.com/anthropics/claude-code/issues/26408)** (14 comments)
    *   **Why it matters:** Users encountering errors specifically when interacting with the Sonnet 4.6 model.
    *   **Community Reaction:** Concerns about model stability and selection logic.

8.  **[#2054 Insert new line with Enter key](https://github.com/anthropics/claude-code/issues/2054)** (14 comments)
    *   **Why it matters:** CJK (Japanese, Chinese, Korean) users struggle because the 'Enter' key sends messages instead of inserting newlines, leading to incomplete prompts.
    *   **Community Reaction:** Long-standing request for better internationalization (i18n) support in the TUI.

9.  **[#46466 Status line cost counter resets on compaction](https://github.com/anthropics/claude-code/issues/46466)** (1 comment)
    *   **Why it matters:** Developers tracking session costs lose data when the context compacts; the counter resets to $0.00, hiding true spend.
    *   **Community Reaction:** Undermines trust in the cost tracking features essential for "Max" subscribers.

10. **[#46467 Status line renders raw ANSI escape codes](https://github.com/anthropics/claude-code/issues/46467)** (1 comment)
    *   **Why it matters:** A visual bug in the status bar displays literal escape sequences (e.g., `\033[0m`) instead of formatting text.
    *   **Community Reaction:** Minor but noticeable aesthetic degradation in the terminal UI.

## Key PR Progress

1.  **[#46351 Enable PowerShell tool on macOS/Linux](https://github.com/anthropics/claude-code/pull/46351)**
    *   Adds support for the PowerShell tool on non-Windows platforms if `pwsh` is installed, gated by the `CLAUDE_CODE_USE_POWERSHELL_TOOL=1` flag.
    *   Addresses cross-platform workflow consistency.

2.  **[#46450 Optimized duplicate comment finding](https://github.com/anthropics/claude-code/pull/46450)**
    *   Refines internal logic to handle duplicate comments more efficiently using a backward loop.
    *   Improves performance on large conversation histories.

3.  **[#32979 feat: explain-architecture plugin](https://github.com/anthropics/claude-code/pull/32979)**
    *   A proposed plugin to scan repositories and generate Mermaid/PlantUML architecture diagrams by parsing imports.
    *   High value for documentation and onboarding.

4.  **[#32980 feat: create-test command and plugin](https://github.com/anthropics/claude-code/pull/32980)**
    *   Automates unit test generation using two specialized agents to analyze code and generate tests.
    *   Addresses a common developer pain point.

5.  **[#39148 preserve-session plugin](https://github.com/anthropics/claude-code/pull/39148)**
    *   Allows session history to persist even if project directories are renamed or moved, using a path-independent UUID.
    *   Solves the annoyance of losing context when refactoring folder structures.

6.  **[#45621 notify-on-complete plugin](https://github.com/anthropics/claude-code/pull/45621)**
    *   A stop-hook plugin that sends OS notifications when Claude finishes a long-running response.
    *   Improves UX for multi-tasking developers.

7.  **[#29461 Constrain dedupe candidates to canonical open issues](https://github.com/anthropics/claude-code/pull/29461)**
    *   Updates the "dedupe" bot logic to avoid creating circular duplicate references and ensure better targeting.
    *   Maintenance to improve issue tracker hygiene.

8.  **[#32931 Fix hookify rules from project root](https://github.com/anthropics/claude-code/pull/32931)**
    *   Ensures hookify rules are resolved relative to the actual project root, fixing issues when the process starts in a nested directory.
    *   Increases reliability of local hook scripts.

9.  **[#46025 Add Linux subprocess isolation docs](https://github.com/anthropics/claude-code/pull/46025)**
    *   Documents security features like PID namespace isolation and `CLAUDE_CODE_SCRIPT_CAPS`.
    *   Valuable for enterprise security teams.

10. **[#46024 Document prompt caching flags](https://github.com/anthropics/claude-code/pull/46024)**
    *   Clarifies `--exclude-dynamic-system-prompt-sections` for better cache hits in Print mode.
    *   Helps optimize token usage and latency.

## Feature Request Trends
*   **Restoration of `/buddy`:** The silent removal of the `/buddy` feature has sparked a concentrated movement to reinstate it as a permanent, opt-in capability.
*   **Cross-Platform Power:** There is a strong push to leverage available tools regardless of OS (e.g., PowerShell on macOS/Linux).
*   **Workflow Automation:** Requests are trending toward plugins that manage session state (renaming, preserving history across paths) and environment awareness.

## Developer Pain Points
*   **Regression Anxiety:** The community is sensitive to feature regressions, specifically the removal of `/buddy` and the breaking of MCP tools in `--channels` in the latest patch.
*   **Cost Visibility:** Users are actively debugging token counting, frustrated by phantom costs (Issue #45515) and status line counters that reset, making it impossible to track actual spend against the "Max" subscription limits.
*   **Stability of "Complex" Tasks:** A significant portion of the user base feels the model's performance has degraded for complex engineering tasks, leading to unusable outputs in newer versions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-11

## 1. Today's Highlights
The Codex ecosystem is seeing significant evolution in voice capabilities and agent identity management. The release of **rust-v0.119.0** introduces a new default v2 WebRTC path for realtime voice sessions and advances support for MCP Apps. Meanwhile, the repository is actively addressing complex infrastructure challenges regarding sandbox security (Linux `bwrap` and Windows), agent authentication protocols, and macOS-specific network proxying issues.

## 2. Releases
**rust-v0.119.0** ([#16960](https://github.com/openai/codex/pull/16960))
This release marks a stabilization of the realtime voice stack.
*   **Realtime Voice:** Now defaults to the v2 WebRTC path, featuring configurable transport options, voice selection, and native TUI media support.
*   **Infrastructure:** App-server coverage has been expanded to support the new flow.
*   **MCP:** Continued integration of "MCP Apps" and custom MCP servers.

## 3. Hot Issues

1.  **[#10410: Codex Desktop App: macOS Intel (x86_64) support](https://github.com/openai/codex/issues/10410)** *(174 comments)*
    *   **Impact:** Highly requested by users stuck on Intel hardware.
    *   **Sentiment:** Strong demand for a Universal binary or dedicated x86_64 build, as the current focus appears to be Apple Silicon.

2.  **[#10450: Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)** *(109 comments)*
    *   **Impact:** Critical for enterprise developers utilizing SSH/WSL.
    *   **Sentiment:** Users view the lack of remote development support as a major regression compared to VS Code.

3.  **[#12764: The codex cli giving: 401 unauthorized](https://github.com/openai/codex/issues/12764)** *(94 comments)*
    *   **Impact:** Breaking login flow for CLI users.
    *   **Sentiment:** High frustration; reports suggest the issue is related to `chatgpt.com` backend-api authentication handling.

4.  **[#2847: A way to exclude sensitive files (.codexignore)](https://github.com/openai/codex/issues/2847)** *(67 comments)*
    *   **Impact:** Security and privacy compliance.
    *   **Sentiment:** A long-standing request (Aug 2025) for a `.codexignore` feature to prevent sensitive files from being scraped.

5.  **[#13041: WebSocket upgrade succeeds then server closes with 1008 Policy](https://github.com/openai/codex/issues/13041)** *(57 comments)*
    *   **Impact:** Connectivity instability forcing fallback to HTTPS.
    *   **Sentiment:** Users on Linux/Arch are experiencing forced downgrades from websocket transport.

6.  **[#14936: bwrap: Approval prompt shown for almost every command](https://github.com/openai/codex/issues/14936)** *(40 comments)*
    *   **Impact:** Usability regression in Linux sandbox (v0.115.0+).
    *   **Sentiment:** The "don't ask again" feature appears broken, disrupting workflow.

7.  **[#9224: Codex Remote Control](https://github.com/openai/codex/issues/9224)** *(39 comments)*
    *   **Impact:** Mobile-to-Desktop workflow integration.
    *   **Sentiment:** Users want to control their desktop `codex` CLI via the ChatGPT mobile app.

8.  **[#14919: bwrap: Failed RTM_NEWADDR: Operation not permitted](https://github.com/openai/codex/issues/14919)** *(30 comments)*
    *   **Impact:** Linux sandbox completely broken in v0.115.0.
    *   **Sentiment:** Subagents cannot execute commands; a critical blocker for Linux users.

9.  **[#13822: macOS Input Bug: Control-F cursor movement broken](https://github.com/openai/codex/issues/13822)** *(15 comments)*
    *   **Impact:** Text editing efficiency on macOS.
    *   **Sentiment:** Basic TUI cursor navigation is non-functional in the desktop app.

10. **[#16335: TUI/CLI performance regression from 116 to 117](https://github.com/openai/codex/issues/16335)** *(11 comments)*
    *   **Impact:** Perceived lag in the terminal interface.
    *   **Sentiment:** Users are experiencing sluggishness specifically after upgrading to v0.117.0.

## 4. Key PR Progress

1.  **[#17294: Run exec-server fs operations through sandbox helper](https://github.com/openai/codex/pull/17294)**
    *   Refactors filesystem RPCs to run through a `codex-fs` helper, improving isolation for `DangerFullAccess` scenarios.

2.  **[#17370: fix(network-proxy): unblock private DNS in macOS sandbox](https://github.com/openai/codex/pull/17370)**
    *   Addresses DNS lookup failures (`dig`) in macOS proxy sandboxes by adding a narrow port-53 carveout.

3.  **[#17386 & #17387: Register agent identities/tasks behind use_agent_identity](https://github.com/openai/codex/pull/17386)**
    *   Part of a 4-PR stack to implement feature-gated agent identity support, allowing agents to register tasks and attach assertions for authorization.

4.  **[#17087: Add marketplace command](https://github.com/openai/codex/pull/17087)**
    *   Introduces `codex marketplace add`, enabling users to install plugins from local directories, GitHub shorthand, or git URLs.

5.  **[#17381: Representing guardian review timeouts in protocol types](https://github.com/openai/codex/pull/17381)**
    *   Adds `TimedOut` status to review decisions and regenerates JSON/TypeScript schemas, improving robustness of async review processes.

6.  **[#17295: fix(linux-sandbox): recreate symlink aliases for writable roots](https://github.com/openai/codex/pull/17295)**
    *   A critical fix for the Linux `bwrap` sandbox ensuring that relative symlinks and writable roots work safely, addressing recent regressions.

7.  **[#17314: Pass turn id with feedback uploads](https://github.com/openai/codex/pull/17314)**
    *   Enhances telemetry by merging client-provided tags with system fields in Sentry feedback.

8.  **[#17364: [mcp] Support MCP Apps part 3 - Add mcp tool call support](https://github.com/openai/codex/pull/17364)**
    *   Implements an app-server method allowing MCP Apps to invoke their own MCP servers directly.

9.  **[#17382: Add Bash PermissionRequest hooks](https://github.com/openai/codex/pull/17382)**
    *   Extends the hook system to cover permission prompts (Bash approval), allowing hooks to approve/deny commands automatically.

10. **[#15981: fix(permissions): fix symlinked writable roots in sandbox permissions](https://github.com/openai/codex/pull/15981)**
    *   (Closed/Merged) Preserves logical symlink paths during permission normalization, preventing nested symlink escapes.

## 5. Feature Request Trends

*   **Platform Parity:** There is a massive push for **macOS Intel (x86_64)** support and **Remote Development (SSH/WSL)** capabilities in the Desktop App, highlighting a divide between the current Electron-first release and the needs of pro users.
*   **Privacy Controls:** The request for a **`.codexignore`** mechanism (to exclude sensitive files from agent context) remains one of the highest-voted enhancement requests.
*   **Mobile Integration:** Users are looking for ways to bridge the Desktop CLI with the **Mobile App** (Remote Control), suggesting a desire for "on-the-go" monitoring of local coding sessions.

## 6. Developer Pain Points

*   **Sandbox Instability:** Linux developers are facing significant friction with the `bwrap` sandbox in recent versions (0.115.0+), encountering errors like `Failed RTM_NEWADDR` and repetitive approval prompts.
*   **Authentication & Networking:** A noticeable uptick in **401 Unauthorized** errors and **WebSocket Policy Violations (1008)** suggests instability in the backend API or transport layer configurations.
*   **TUI Experience:** Basic text editing capabilities in the Terminal UI (TUI) and Desktop App are regressing, specifically regarding **cursor movement (Control-F)** and **backspace** behaviors on macOS.

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest: 2026-04-11

## 1. Today's Highlights
The Crush repository is seeing significant activity focused on stability and UI enhancements. Developers have pushed critical fixes for session lockups caused by malformed API responses and introduced major features like a theming system and user-level context loading. There is also a strong push towards optimization, with new flags available to drastically reduce token usage during tool calls.

## 2. Releases
No stable releases were published in the last 24 hours; however, `nightly` builds are available for testing the latest features.

## 3. Hot Issues
*   **[#1782: Session permanent lockup on "Invalid Request" (non-ASCII base64)](https://github.com/charmbracelet/crush/issues/1782)**
    *   **Impact:** Critical. Users are experiencing complete session freezes when the Anthropic API returns a 400 error due to invalid base64 characters (often from image data).
    *   **Reaction:** Highly active discussion (6 comments), indicating this is a blocking issue for developers using multimodal tools like Playwright.
*   **[#2533: Terminal shortcut conflicts](https://github.com/charmbracelet/crush/issues/2533)**
    *   **Impact:** UX Friction. Users cannot access Crush's clipboard features (e.g., `Ctrl+V`) when their terminal emulator hijacks these shortcuts.
    *   **Reaction:** Community is requesting a configurable keymapping system to resolve conflicts without changing terminal settings.
*   **[#2570: Hide edit approval popup](https://github.com/charmbracelet/crush/issues/2570)**
    *   **Impact:** Workflow Disruption. The approval dialog obscures the code generated by the model, preventing users from verifying changes before accepting.
    *   **Reaction:** This highlights a need for better non-blocking UI elements or transparency modes for edit reviews.

## 4. Key PR Progress
*   **[#2597: Prevent session corruption due to malformed image data](https://github.com/charmbracelet/crush/pull/2597)**
    *   Addresses the critical lockup issue found in #1782 by validating base64 strings before sending them to the provider. Invalid data is replaced with a placeholder to protect session integrity.
*   **[#2598: Hooks (currently only PreToolUse)](https://github.com/charmbracelet/crush/pull/2598)**
    *   Introduces an extensibility layer allowing users to run custom shell scripts before tool execution. This is a major step toward user customization and automation workflows.
*   **[#2592: Reduce tool call descriptions](https://github.com/charmbracelet/crush/pull/2592)**
    *   Implements `CRUSH_SHORT_TOOL_DESCRIPTIONS=1` to slash tool prompt sizes by ~98%, potentially saving ~120k tokens per session.
*   **[#2593: Add theme support (Charmtone & Gruvbox)](https://github.com/charmbracelet/crush/pull/2593)**
    *   Decouples UI colors from hardcoded values, allowing users to switch themes via the command palette. Ships with `charmtone` (default) and `gruvbox-dark`.
*   **[#1669: Load user-level context files](https://github.com/charmbracelet/crush/pull/1669)**
    *   Adds support for global context files (`~/.config/AGENTS.md` and `~/.config/crush/CRUSH.md`), ensuring user preferences persist across different projects.
*   **[#2582: Prevent context limit overflow](https://github.com/charmbracelet/crush/pull/2582)**
    *   A multi-layered fix to handle large contexts by capping output tokens and re-queueing prompts with summarization when limits are reached.
*   **[#2595: Prevent session lockup from stuck provider requests](https://github.com/charmbracelet/crush/pull/2595)**
    *   An attempt to handle non-200 provider responses that brick sessions immediately. (Note: Author notes this may be a WIP regarding timeout vs. error handling).
*   **[#2527: Mouse click handling for permissions](https://github.com/charmbracelet/crush/pull/2527)**
    *   Enhances the TUI by adding mouse support for permission dialogs ("Allow/Deny"), calculating hitboxes for better interaction.
*   **[#2525: Enhance clipboard functionality](https://github.com/charmbracelet/crush/pull/2525)**
    *   Improves clipboard reliability by preferring native clipboard support over OSC-52 escape sequences in supported environments.

## 5. Feature Request Trends
*   **Customization & Theming:** There is a clear demand for personalizing the interface, evidenced by the rapid progress on the theming system ([#2593](https://github.com/charmbracelet/crush/pull/2593)) and requests for custom shortcut mappings ([#2533](https://github.com/charmbracelet/crush/issues/2533)).
*   **Global Configuration:** Users want their agent preferences to travel with them, leading to features like user-level context loading ([#1669](https://github.com/charmbracelet/crush/pull/1669)) rather than relying solely on project-specific files.

## 6. Developer Pain Points
*   **Multimodal Stability:** Developers integrating image-based tools (like screenshots or Playwright) are facing session crashes due to encoding errors. The rapid response in PR #2597 indicates this is a top priority for the maintainers.
*   **Token Cost & Efficiency:** High token usage remains a friction point, driving the adoption of optimizations like short tool descriptions (#2592) and better context management (#2582).
*   **Modal UI Blocking:** The "approval popup" issue (#2570) suggests that the current modal UI flow hinders rather than helps when reviewing large code changes, pointing to a need for better UI information density.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-04-11

**Today's Highlights**
Today's digest highlights a major architectural proposal for a decoupled `ContextManager` to resolve complex state management issues, alongside the introduction of the `/memory inbox` for skill patching. On the stability front, the team is actively addressing a cluster of UI regressions affecting scroll behavior and screen reader layouts, while the latest nightly release refactors Linux sandbox path resolution and introduces subagent improvements.

---

### 1. Releases
*   **v0.39.0-nightly.20260410** [Release Notes](https://github.com/google-gemini/gemini-cli/releases)
    *   **Core Refactoring:** Centralized path resolution for the Linux sandbox to improve stability.
    *   **UX Enhancement:** Added support for `ctrl+shift+g`.
    *   **Subagents:** Continued refactoring of the subagent tool to a unified implementation.

---

### 2. Hot Issues
Here are the top 10 issues drawing significant attention or impacting core workflows:

1.  **[CLOSED] Login Failures & API Errors** [#2253](https://github.com/google-gemini/gemini-cli/issues/2253)
    *   **Impact:** Users were abruptly logged out and faced `cloudcode-pa.googleapis.com` failures.
    *   **Reaction:** High engagement (11 👍) from users unable to re-authenticate successfully.
2.  **Regression: Auto-scroll Jumps to Start** [#19468](https://github.com/google-gemini/gemini-cli/issues/19468)
    *   **Impact:** The terminal scroll position jumps to the top every few seconds, making the CLI difficult to use.
    *   **Status:** Multiple reports suggest this is a widespread regression in recent versions.
3.  **Feature Request: `CTRL+S` for Diff View** [#17437](https://github.com/google-gemini/gemini-cli/issues/17437)
    *   **Impact:** Users want to review changes before confirming.
    *   **Reaction:** Windows users specifically noted the removal of this workflow, requesting its return.
4.  **Crash: Rust Files with Replacement Character** [#24547](https://github.com/google-gemini/gemini-cli/issues/24547)
    *   **Impact:** The CLI crashes severely when encountering the '�' character in Rust source files.
    *   **Technical:** Likely a binary detection false positive; users expect stability with standard Unicode characters.
5.  **P2: Tables Break in Screen Reader Mode** [#24675](https://github.com/google-gemini/gemini-cli/issues/24675)
    *   **Impact:** Visual corruption in "simple" screen reader mode when no content follows the "Model:" header.
    *   **Reaction:** Accessibility concern affecting developers relying on this mode.
6.  **P2: Infinite Loop on "Trust New Folder"** [#24689](https://github.com/google-gemini/gemini-cli/issues/24689)
    *   **Impact:** Pressing 'r' to trust a new folder fails, forcing manual config updates for every new directory.
    *   **Status:** High priority (P1) workflow blocker.
7.  **Permission Prompts Repeating** [#24916](https://github.com/google-gemini/gemini-cli/issues/24916)
    *   **Impact:** "Allow for all future sessions" is not respected; the CLI repeatedly asks for permissions on the same file.
8.  **Visual: Thick Black Borders on Prompt Bar** [#24915](https://github.com/google-gemini/gemini-cli/issues/24915)
    *   **Impact:** Visual glitch showing thick borders at the top and bottom of the prompt area.
9.  **SSH/Cloudtop: Scrambled Text** [#24202](https://github.com/google-gemini/gemini-cli/issues/24202)
    *   **Impact:** Windows users SSH'ing into gLinux cloudtops experience scrambled text, making the CLI unusable.
10. **Docs: `enforcedAuthType` Mismatch** [#22783](https://github.com/google-gemini/gemini-cli/issues/22783)
    *   **Impact:** Documentation refers to a non-existent field; the correct field is `security.auth.enforcedType`.
    *   **Status:** Recently closed, fix pending in docs.

---

### 3. Key PR Progress
Significant proposed changes and fixes currently under review:

1.  **Arch: Decoupled ContextManager** [#24752](https://github.com/google-gemini/gemini-cli/pull/24752)
    *   **Summary:** Introduces a new architecture to decouple context management, addressing complex state issues (#24751).
2.  **Fix: Screen Reader Table Breakage** [#24706](https://github.com/google-gemini/gemini-cli/pull/24706)
    *   **Summary:** Adds explicit width constraints to tables in screen reader mode to prevent layout collapse (Fixes #24675).
3.  **Fix: False Positive Binary Detection** [#24685](https://github.com/google-gemini/gemini-cli/pull/24685)
    *   **Summary:** Replaces naive binary detection heuristics with proper UTF-8 validation to fix crashes on files with '�' (Fixes #24547).
4.  **Feat: Tool-Controlled Display Protocol** [#25134](https://github.com/google-gemini/gemini-cli/pull/25134)
    *   **Summary:** Allows tools to provide structured visual metadata (e.g., diffs) directly to the UI, replacing ad-hoc frontend logic.
5.  **Feat: `/memory` Inbox & Skill Patching** [#25148](https://github.com/google-gemini/gemini-cli/pull/25148)
    *   **Summary:** Enables the extraction agent to propose updates to global/workspace skills via a new `/memory inbox` integration.
6.  **ACP: Host Input Requests** [#24664](https://github.com/google-gemini/gemini-cli/pull/24664)
    *   **Summary:** Adds an ACP (Agent Client Protocol) path for hosts to answer `ask_user` and `exit_plan_mode` prompts programmatically (Fixes #24663).
7.  **Perf: Windows Sandbox ACL Optimization** [#25077](https://github.com/google-gemini/gemini-cli/pull/25077)
    *   **Summary:** Offloads file system ACL modifications to a native C# helper, significantly improving Windows sandbox initialization speed.
8.  **Chore: Switch to `@github/keytar`** [#25143](https://github.com/google-gemini/gemini-cli/pull/25143)
    *   **Summary:** Migrates from the deprecated `keytar` to the maintained `@github/keytar` fork.
9.  **Docs: Tabbed Layouts for Install/Auth** [#25155](https://github.com/google-gemini/gemini-cli/pull/25155)
    *   **Summary:** Migrates installation and authentication docs to MDX with dynamic tabbed layouts for better UX.
10. **Fix: Update Topic Queue Inflation** [#24945](https://github.com/google-gemini/gemini-cli/pull/24945)
    *   **Summary:** Centralizes tool visibility logic to prevent the `update_topic` tool from inflating the confirmation queue count.

---

### 4. Feature Request Trends
Based on community activity in the issues tracker:
*   **SSH & Remote Environment Support:** There is a strong demand for better handling of SSH sessions (specifically Windows -> gLinux) where text rendering currently breaks (#24202).
*   **Keyboard Shortcuts & Workflow:** Users are requesting specific keybindings (like `CTRL+S` to view diffs) to return (#17437), indicating a friction point with the current review workflow.
*   **Memory & Skill Management:** Developers are looking for finer control over how the CLI remembers preferences (Global vs. Project) and updates agent skills (#22819, #25148).

---

### 5. Developer Pain Points
*   **UI Stability (Scrolling & Layout):** There is significant frustration regarding "jumping" scroll positions (#19468, #24602) and "thick black borders" (#24915). These regressions are disrupting the coding flow.
*   **Binary Detection Crashes:** The CLI's handling of specific Unicode characters (U+FFFD) in Rust files is causing crashes (#24547), while other tools (like the Rust toolchain) handle them fine.
*   **Permission Fatigue:** The "Trust" prompts are appearing redundantly (#24916) or failing to resolve correctly for new folders (#24689), forcing users to manually intervene in configuration files.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-11 | **Source:** github.com/github/copilot-cli

## 1. Today's Highlights

The latest patch release **v1.0.24** focuses on critical stability improvements, specifically addressing the restoration of terminal states (alt screen, raw mode) and fixing hooks to properly respect `modifiedArgs` and `additionalContext`. A significant improvement to custom agent configuration has also landed, allowing the `model` field to now accept display names (e.g., "Claude Sonnet 4.5") and vendor suffixes.

Meanwhile, the community issues list highlights growing friction regarding **Enterprise permissions** and **billing transparency**, with several reports of "Copilot Requests" permissions missing for org tokens and unexpected charges during trial periods.

## 2. Releases

**v1.0.24 & v1.0.24-0 (2026-04-10)**
*   **Hooks Update:** `preToolUse` hooks now correctly respect `modifiedArgs`, `updatedInput`, and `additionalContext` fields.
*   **Model Configuration:** Custom agents now support friendly model display names (e.g., "Claude Sonnet 4.5", "GPT-5.4 (copilot)").
*   **Terminal Stability:** Fixed a bug where the terminal state (alt screen, cursor position, raw mode) was not restored correctly after sessions.
*   **UI Polish:** The exit screen has been redesigned with the Copilot mascot and a cleaner usage summary.

**v1.0.23 (2026-04-10)**
*   **New Flags:** Added `--mode`, `--autopilot`, and `--plan` to start the CLI directly in specific agent modes.
*   **Path Parsing:** Fixed false positives where Bazel/Buck build target labels (e.g., `//package:target`) were misidentified as file paths.
*   **UX Fix:** `Ctrl+L` now correctly clears the screen without wiping conversation history.

## 3. Hot Issues

*   [#223](https://github.com/github/copilot-cli/issues/223) - **"Copilot Requests" permission missing for Org tokens**
    *   **Why it matters:** Enterprises cannot create automation tokens without exposing individual user PATs.
    *   **Reaction:** 62 👍. High demand for security compliance in corporate environments.
*   [#2591](https://github.com/github/copilot-cli/issues/2591) - **Single session consumes infinite premium requests**
    *   **Why it matters:** Users report a single request consuming 80-100 premium requests due to billing on every tool invocation/thinking step.
    *   **Reaction:** 6 👍. Major billing concern; users are afraid to use the CLI for complex tasks.
*   [#1274](https://github.com/github/copilot-cli/issues/1274) - **Constant 400 errors during code reviews**
    *   **Why it matters:** Core functionality is breaking; 95% of attempts to review diffs result in invalid request body errors.
    *   **Reaction:** 6 👍. Blocks workflow significantly.
*   [#2498](https://github.com/github/copilot-cli/issues/2498) - **MCP servers blocked by Enterprise policy**
    *   **Why it matters:** GHE instances returning 404 on `/copilot/mcp_registry` block all non-default MCP servers.
    *   **Reaction:** 3 👍. Affects extensibility on GitHub Enterprise.
*   [#1973](https://github.com/github/copilot-cli/issues/1973) - **Feature Request: Tool whitelist for Interactive Mode**
    *   **Why it matters:** Users are tired of approving read-only commands (grep/cat) repeatedly but fear using `/allow-all` for destructive commands.
    *   **Reaction:** 10 👍. Highly requested quality-of-life feature.
*   [#2099](https://github.com/github/copilot-cli/issues/2099) - **Model name resolution failures**
    *   **Why it matters:** Agents defined with "Claude Sonnet 4.5" fail to load, falling back to defaults unexpectedly.
    *   **Reaction:** 2 👍. Partially addressed by v1.0.24 updates, but validation issues persist.
*   [#1291](https://github.com/github/copilot-cli/issues/1291) - **Repository-level MCP configuration**
    *   **Why it matters:** Currently, MCP servers can only be configured globally, making project-specific tooling difficult to manage.
    *   **Reaction:** 16 👍. Developers want per-folder config parity with VS Code.
*   [#443](https://github.com/github/copilot-cli/issues/443) - **Built-in PDF Reading Support**
    *   **Why it matters:** Inability to read PDFs limits utility for academic and documentation-heavy workflows.
    *   **Reaction:** 27 👍. One of the most upvoted feature requests.
*   [#2636](https://github.com/github/copilot-cli/issues/2636) - **HTML stripped from MCP tool parameters**
    *   **Why it matters:** Data integrity issue; HTML content is stripped from strings before reaching the MCP server.
    *   **Reaction:** New report; critical for tools generating web content.
*   [#2619](https://github.com/github/copilot-cli/issues/2619) - **Unexpected charges during trial period**
    *   **Why it matters:** User received a $2.90 bill during a free trial.
    *   **Reaction:** Highlights confusion around credit consumption vs. trial limits.

## 4. Key PR Progress

*No Pull Requests were updated or merged in the last 24 hours based on the provided data.* Recent changes appear to have been released directly via version tags (v1.0.24, v1.0.23).

## 5. Feature Request Trends

1.  **Granular Permission Controls:** There is a clear trend toward requesting middle-ground permissions between "manual approval for everything" and "allow all." Users want whitelists for safe commands (grep, git status) and safeguards for destructive ones.
2.  **Model Routing & Configuration:** Developers are asking for more control over which models run which agents, including global model routing and per-agent selection that respects the `agent.md` configuration.
3.  **Localization of Configuration:** Users want to move away from global (`~/.copilot`) configurations to repository-level configurations (`.copilot/`, `.mcp.json`) to ensure projects work consistently across different machines.

## 6. Developer Pain Points

*   **Billing Anxiety:** A recurring fear of "runaway costs" due to requests being counted per tool invocation/thinking step rather than per user prompt (Issue #2591).
*   **Enterprise friction:** GitHub Enterprise users face specific hurdles regarding MCP registries (404 errors) and token permissions, making the CLI harder to adopt in corporate environments.
*   **Input Validation:** Frequent reports of "400 Bad Request" errors and input schema failures (particularly with MCP tools using `$ref` or HTML content) suggest the client-side validation logic is struggling with complex tool inputs.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-04-11

## 1. Today's Highlights
Version **1.31.0** has been released, focusing on UI stability (fixing background color leaks in Rich) and file reading capabilities (`tail` mode). A significant fix for large directory handling was merged to prevent token limit errors caused by `node_modules`, alongside improvements to OAuth token lifecycle management to reduce forced re-logins.

## 2. Releases
* **[1.31.0](https://github.com/MoonshotAI/kimi-cli/releases)**
  *   **UI Fix:** Resolved an issue where Rich markdown styles leaked background colors ([#1739](https://github.com/MoonshotAI/kimi-cli/pull/1739)).
  *   **Tools Enhancement:** Added `totalLines` and `tail` mode to the `ReadFile` tool ([#1740](https://github.com/MoonshotAI/kimi-cli/pull/1740)).

## 3. Hot Issues
*   **[#778 API Error 400](https://github.com/MoonshotAI/kimi-cli/issues/778)** (Bug): Users are experiencing persistent `invalid_request_error` messages on Windows PowerShell. Despite being opened in January, recent comments suggest this remains a blocking issue for some developers on the latest version.
*   **[#1786 UI Lags on File Writes](https://github.com/MoonshotAI/kimi-cli/issues/1786)** (Performance): Critical performance report where the CLI UI lags "minutes to tens of minutes" behind actual disk writes for files around 800 lines. The content is written correctly, but the TUI becomes unresponsive.
*   **[#1327 Max Steps Reached](https://github.com/MoonshotAI/kimi-cli/issues/1327)** (Enhancement): Users are hitting the default `100` step limit prematurely (often at <50% context usage). There is a strong community request to raise this default or make it context-aware.
*   **[#1814 Session Management CLI Args](https://github.com/MoonshotAI/kimi-cli/issues/1814)** (Enhancement): A request to add CLI arguments (e.g., `--list-sessions`) to query and restore sessions without first entering the tool, improving workflow integration.
*   **[#1830 VSCode Extension Slash Skills](https://github.com/MoonshotAI/kimi-cli/issues/1830)** (Bug): Reported in 1.31.0, the VSCode extension fails to trigger slash skills unless the user types something first, breaking the expected "command palette" behavior.
*   **[#1823 Configurable Approval Timeout](https://github.com/MoonshotAI/kimi-cli/issues/1823)** (Feature): Users want the ability to disable or extend the hardcoded 300-second (5-minute) timeout for approval requests, which currently cancels long-running tasks automatically.
*   **[#1809 Token Limit in Empty Context](https://github.com/MoonshotAI/kimi-cli/issues/1809)** (Bug - **CLOSED**): A bug where `list_directory` injected thousands of entries (e.g., from `node_modules`) into the system prompt, exceeding token limits. This was fixed by capping entries at 500.
*   **[#1794 Pointless Session Picker](https://github.com/MoonshotAI/kimi-cli/issues/1794)** (UX - **CLOSED**): Users complained that invoking `/sessions` when only one session exists shows a confusing picker. This has been fixed to return early with a message.

## 4. Key PR Progress
*   **[#1827 Cap list_directory to 500 entries](https://github.com/MoonshotAI/kimi-cli/pull/1827)** (**CLOSED** - Merged): Vital fix preventing the CLI from crashing or hitting token limits when started in directories with massive file trees. Limits context injection and suggests using `Glob` or `Shell` for deeper exploration.
*   **[#1826 Blocking Update Gate](https://github.com/MoonshotAI/kimi-cli/pull/1826)** (**CLOSED** - Merged): Improves update UX by adding a full-screen prompt on startup if a newer version is cached, allowing immediate upgrade via `uv tool` or the ability to dismiss it.
*   **[#1822 Cross-process Token Lock](https://github.com/MoonshotAI/kimi-cli/pull/1822)** (**CLOSED** - Merged): Adds a file lock mechanism for token refresh. This resolves race conditions and authentication errors when running multiple instances (Terminal + VS Code + Web) simultaneously.
*   **[#1825 Slash Commands During Streaming](https://github.com/MoonshotAI/kimi-cli/pull/1825)** (**OPEN**): Addresses a UX friction point where commands like `/task` were dropped during tool streaming. This PR aims to allow shell-level interrupts during long operations.
*   **[#1790 Prefer pwsh on Windows](https://github.com/MoonshotAI/kimi-cli/pull/1790)** (**OPEN**): Modernizes the Shell tool on Windows by prioritizing PowerShell Core (`pwsh`) over the legacy `powershell.exe`, improving compatibility with modern scripts.
*   **[#1767 YOLO Mode for Web](https://github.com/MoonshotAI/kimi-cli/pull/1767)** (**OPEN**): Extends the "YOLO" (auto-approve) mode to the Web UI, allowing users to toggle non-interactive operation directly from the browser interface.
*   **[#1831 PyInstaller Lazy Subcommands](https://github.com/MoonshotAI/kimi-cli/pull/1831)** (**CLOSED** - Merged): Fixes a packaging regression where lazy-loaded CLI subcommands were missing from the standalone executable, ensuring feature parity in the binary build.
*   **[#1832 Fix UserPromptSubmit Hook](https://github.com/MoonshotAI/kimi-cli/pull/1832)** (**OPEN**): A bug fix ensuring that third-party hooks capturing user input actually receive the prompt text, which was previously being lost when input was a list of content parts.
*   **[#1789 Render Mermaid in Web](https://github.com/MoonshotAI/kimi-cli/pull/1789)** (**OPEN**): Adds native rendering for Mermaid diagrams in the Web UI chat, enhancing the visualization of flowcharts and architecture diagrams generated by the AI.
*   **[#1709 Diff Alignment Fix](https://github.com/MoonshotAI/kimi-cli/pull/1709)** (**OPEN**): Addresses visual discrepancies in inline highlights caused by tab expansion, ensuring the "diff" view accurately reflects the actual file content.

## 5. Feature Request Trends
*   **Session Management:** There is a clear demand for better session handling outside of the interactive shell, specifically the ability to list, query, and switch sessions via command-line flags (#1814).
*   **Long-Running Operations:** Users are requesting the removal of hard limits, specifically regarding the "Approval Timeout" (#1823) and the default "Max Steps" (#1327), to allow for unattended, longer-duration automation tasks.
*   **Interruption & Control:** Developers want more control while the AI is "thinking" or streaming, specifically the ability to inject slash commands (#1825) or manage approval workflows dynamically.

## 6. Developer Pain Points
*   **Performance Degradation:** A recurring frustration involves the UI lagging significantly behind the actual file system state (#1786), making the tool feel sluggish during edits on large files.
*   **Authentication Fragility:** Multiple issues (#778, #1824) and PRs regarding auth token lifecycle indicate that logging in and staying authenticated across different platforms (VS Code, CLI, Web) has been unstable, requiring frequent re-logins.
*   **UX Confusion:** Users are reporting "dead-end" UI states, such as single-item pickers (#1794) or unresponsive slash commands in VS Code (#1830), which break the development flow.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-11

## 1. Today's Highlights

**OpenCode v1.4.3** has been released, bringing critical fixes for OpenAI OAuth authentication, Bash command interruption handling, and the restoration of the TUI session scrollbar. Development activity is heavily focused on internal refactoring, specifically migrating the codebase to a `Tool.defineEffect` pattern to improve error handling and type safety, while the community continues to push for better Windows support and agentic capabilities.

## 2. Releases

### **v1.4.3**
*Release Date: 2026-04-11*
**Core Updates:**
*   **Authentication Fix:** Resolved an issue preventing `agent create` for OpenAI accounts using OAuth.
*   **Bash Improvements:** Interrupted Bash commands now retain final output and truncation details instead of terminating as "aborted."
*   **Model Speed:** Added fast mode variants for supported Claude and GPT models.
**TUI Updates:**
*   Restored functionality for the hidden session scrollbar.
*Release Link:* [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## 3. Hot Issues

1.  **[#11176 Open Code VS Code Extension](https://github.com/anomalyco/opencode/issues/11176)** (👍 37)
    *   **Discussion:** Users are requesting an official, native Visual Studio Code extension to integrate OpenCode directly into the most popular IDE, eliminating the need for workarounds.
2.  **[#5635 Desktop app via WSL on Windows](https://github.com/anomalyco/opencode/issues/5635)** (👍 33)
    *   **Feature Request:** Windows developers want the Tauri desktop app to spawn its backend within WSL, as many toolchains and projects reside there rather than on the native Windows OS.
3.  **[#20995 Gemma 4 Tool Calling Failure](https://github.com/anomalyco/opencode/issues/20995)** (👍 27)
    *   **Bug:** Integration with local models via Ollama is failing. Specifically, OpenCode is not recognizing `tool_calls` from the new Gemma 4 model when streamed through the OpenAI-compatible API.
4.  **[#6209 Scrolling Issues in iTerm](https://github.com/anomalyco/opencode/issues/6209)** (👍 17)
    *   **Bug:** TUI users on iTerm2 report that scrolling behavior is broken; it moves the input box but fails to scroll the main conversation history.
5.  **[#13984 Copy/Paste Broken in CLI](https://github.com/anomalyco/opencode/issues/13984)** (👍 8)
    *   **Bug:** A critical regression where the clipboard notification appears, but pasting yields no content, severely impacting workflow.
6.  **[#4406 Edit Tool vs Read Tool](https://github.com/anomalyco/opencode/issues/4406)** (Comments: 33)
    *   **Discussion:** High engagement regarding the mandatory "Read before Edit" rule. Users question the efficiency of re-reading AI-generated files that are already in context.
7.  **[#2047 LM Studio Model Refresh](https://github.com/anomalyco/opencode/issues/2047)** (Comments: 14)
    *   **Bug:** OpenCode does not detect model changes (additions/removals) in LM Studio, forcing users to re-authenticate to see updates.
8.  **[#21100 Web UI Crash (`diffs.map`)](https://github.com/anomalyco/opencode/issues/21100)** (👍 3)
    *   **Bug:** A critical `TypeError` is breaking the web interface session view, preventing users from accessing their coding history.
9.  **[#15825 MCP Tool Output Invisible](https://github.com/anomalyco/opencode/issues/15825)** (👍 6)
    *   **Bug:** Tools utilizing the Model Context Protocol (MCP) execute correctly, but their output is consumed by the LLM and not displayed to the user, creating a "black box" experience.
10. **[#21908 PDF Tool Logic Flaw](https://github.com/anomalyco/opencode/issues/21908)**
    *   **Bug:** Valid PDF data is being stripped out when passed to models that don't explicitly support PDF input, even though the data has already been processed by the `read` tool.

## 4. Key PR Progress

1.  **[#21799 OTel Tracer Bridge](https://github.com/anomalyco/opencode/pull/21799)** (Closed)
    *   Added a bridge for OpenTelemetry (OTel) tracing. This enables AI SDK telemetry spans to be exported alongside standard OTLP spans, significantly improving observability for debugging.
2.  **[#21918 Task Spec Refactor](https://github.com/anomalyco/opencode/pull/21918)** (Closed)
    *   A major architectural change to split the `task` tool's specification from its prompt execution logic, breaking cyclic dependencies between `TaskTool` and `SessionPrompt`.
3.  **[#21953 AppRuntime Composition](https://github.com/anomalyco/opencode/pull/21953)** (Closed)
    *   Introduced a unified `AppRuntime` using `ManagedRuntime` to compose service layers (SessionPrompt, VCS, Worktree) into a single, deduplicated list. This stabilizes service initialization.
4.  **[#21954 Effect Logger](https://github.com/anomalyco/opencode/pull/21954)** (Open)
    *   Added an `EffectLogger` helper to maintain structured logging formats while exporting logs to the `motel` observability platform.
5.  **[#21936/21937/21938 Tool Refactoring](https://github.com/anomalyco/opencode/pull/21936)** (Closed)
    *   Continued migration of core tools (`SkillTool`, `GrepTool`, `apply_patch`) from `Tool.define` to `Tool.defineEffect`. This improves error handling consistency across the codebase.
6.  **[#21917 Fix PDF Attachments](https://github.com/anomalyco/opencode/pull/21917)** (Open)
    *   Addresses the logic flaw where processed PDF results were being incorrectly filtered out when sent to models lacking explicit PDF support.
7.  **[#21950 Preserve Prompt Drafts](https://github.com/anomalyco/opencode/pull/21950)** (Open)
    *   Fixes a frustrating TUI bug where text entered in the input box would be lost if a permission prompt appeared before submission.
8.  **[#18767 Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)** (Open)
    *   A large ongoing effort to optimize the OpenCode App interface for mobile and touch devices, ensuring the UI remains responsive on smaller screens.
9.  **[#21907 Free Model Resolution](https://github.com/anomalyco/opencode/pull/21907)** (Open)
    *   Implements logic for the `--model free` flag, automatically resolving to zero-cost hosted OpenCode models.
10. **[#21866 Harden Plan Mode](https://github.com/anomalyco/opencode/pull/21866)** (Open)
    *   Introduces safeguards to the "Plan Mode," preventing sub-agents from exiting the planning phase and ensuring users are shown a preview before execution begins.

## 5. Feature Request Trends

*   **IDE Integration:** The massive upvotes on **#11176** (VS Code Extension) and **#21757** (Timeline in Ctrl-P) indicate a strong desire for tighter integration into standard developer workflows and shortcuts, rather than relying solely on the standalone TUI or App.
*   **Windows & WSL Maturity:** Issues **#5635** and **#20251** highlight that Windows support is still a pain point. Users specifically want the desktop app to play nicely with WSL environments.
*   **Agentic Orchestration:** Developers are looking beyond single-agent tasks. Issue **#17994** (Multi-agent orchestration) reflects a growing interest in having OpenCode manage "teams" of specialized agents in isolated workspaces.

## 6. Developer Pain Points

*   **Clipboard & Input Stability:** Critical bugs like **#13984** (clipboard failure) and **#9790** (dragging window crashes) are causing significant friction, leading to data loss or application crashes.
*   **TUI Scrolling:** The recurring issue in **#6209** regarding iTerm2 scrolling suggests the terminal interface still lacks polish for users with long output logs.
*   **Local Model Compatibility:** The issues with **Gemma 4** (#20995, #21746) and **LM Studio** (#2047) reveal that integrating local LLMs is still a trial-and-error process, often requiring manual intervention or suffering from silent failures.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-11

## 1. Today's Highlights
The Qwen Code project released **v0.14.3** today, focusing on UI stability and input handling. This release addresses critical race conditions in the tool call UI and removes unused state components to streamline performance. Concurrently, the community is actively debating improvements to session management and TUI responsiveness, with significant PR activity aimed at fixing long-standing terminal flicker issues and enhancing user control over sessions.

## 2. Releases
**v0.14.3 (Latest)**
*   **Changelog:** Fixes dead directory states and unused hook parameters in `InputPrompt`. Resolves a race condition where accepting a buffer via "Enter" could leak tool call UI elements.
*   **Nightly (v0.14.2-nightly):** Continues to track these stability fixes for the next minor cycle.
*   *View Release:* [v0.14.3](https://github.com/QwenLM/qwen-code/releases)

## 3. Hot Issues
*   **[#241] Shift+Enter behavior controversy**
    *   **Summary:** Users report that `Shift+Enter` sends messages instead of inserting newlines, breaking standard coding CLI conventions.
    *   **Reaction:** High engagement (5 👍); strong community desire for standard text-editor key bindings.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/241)

*   **[#3025] Request for `iflow` style `/chat` command**
    *   **Summary:** Users want a dedicated `/chat` command to manually save, browse, and delete named sessions, arguing that auto-generated names are indistinguishable.
    *   **Reaction:** 4 comments; highlights frustration with current session management (`/resume`).
    *   [Link](https://github.com/QwenLM/qwen-code/issues/3025)

*   **[#2950] Infinite scrolling on long contexts**
    *   **Summary:** When a session context becomes long, the TUI enters a state of continuous vertical scrolling ("screen washing") without user intervention.
    *   **Reaction:** Critical UX bug affecting workflow continuity.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2950)

*   **[#2928] TUI flickering during parallel agent execution**
    *   **Summary:** The Terminal UI flashes frequently when the model spawns parallel sub-agents, stopping only when execution completes.
    *   **Reaction:** Visual stability is a major concern for users relying on the TUI.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2928)

*   **[#3073] `run_shell_command` permission flakiness**
    *   **Summary:** Standard shell commands are intermittently denied by permission rules unpredictably, disrupting development flow.
    *   **Reaction:** Points to inconsistencies in the permission sandboxing logic.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/3073)

*   **[#2723] "Always Allow" ignored**
    *   **Summary:** Despite selecting "Always Allow" for MCP tools/shell, users are re-prompted for permission every time.
    *   **Reaction:** 2 👍; indicates a breakdown in persistent state storage for permissions.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2723)

*   **[#2922] Request for Notification Hooks**
    *   **Summary:** Developers want audio/callback hooks when long tasks finish or errors occur, so they can context-switch without staring at the terminal.
    *   **Reaction:** High-value request for background productivity.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/2922)

*   **[#3099] Indistinguishable history in `/resume`**
    *   **Summary:** The resume menu lacks metadata (folder name, topic), making it impossible to identify specific sessions.
    *   **Reaction:** Reinforces the need for better session metadata (see #3025).
    *   [Link](https://github.com/QwenLM/qwen-code/issues/3099)

*   **[#3118] Window switching causes flickering**
    *   **Summary:** Switching back to the Qwen Code window (Alt+Tab) triggers persistent UI flashing and session length expansion.
    *   **Reaction:** Suggests event handling issues when the terminal regains focus.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/3118)

*   **[#3114] WebFetch performance**
    *   **Summary:** Users report `WebFetch` taking 3+ minutes for two pages, significantly slower than competitors like Codex.
    *   **Reaction:** Performance bottleneck hindering the utility of web-search capabilities.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/3114)

## 4. Key PR Progress
*   **[#3105] feat: `/chat` command for session management**
    *   Adds `/chat save`, `/chat list`, `/chat resume`, and `/chat delete` to give users granular control over session history, addressing the "indistinguishable sessions" complaint.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/3105)

*   **[#3013] fix(ui): Prevent terminal flickering**
    *   Introduces `SlicingMaxSizedBox` to prevent the UI from re-rendering massive tool outputs (e.g., 5000-line logs) entirely, which causes the "flicker" seen in issues #2928 and #2950.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/3013)

*   **[#3103] fix(cli): Shift+Enter for newline**
    *   Attempts to fix Issue #241 by implementing multiple mechanisms to detect Shift+Enter, allowing users to insert newlines without sending the message.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/3103)

*   **[#3115] feat: Commit attribution (AI tracking)**
    *   Adds a feature to track AI-generated changes per file, potentially prepending commit messages with AI attribution. Useful for enterprise compliance.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/3115)

*   **[#3101] feat: Add folder and branch to CLI footer**
    *   Displays the current working directory and git branch in the CLI status bar to prevent context confusion in multi-window setups.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/3101)

*   **[#3120] feat: Model picker for Fast Model**
    *   Replaces the raw text input for "Fast Model" in settings with a browsable model picker, improving UX.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/3120)

*   **[#3126] feat(i18n): French (fr-FR) locale**
    *   Adds comprehensive French translation support to the CLI.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/3126)

*   **[#3079] feat(skills): `/batch` skill**
    *   Introduces a `/batch` command for orchestrating parallel file changes across a codebase using glob patterns.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/3079)

*   **[#3109] fix: Token count on resume**
    *   Fixes a bug where resuming a compressed session showed stale (lower) token counts instead of the actual current usage.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/3109)

*   **[#3100] feat: Compact mode UX optimization**
    *   Improves the "Compact Mode" (Ctrl+O) by adding shortcuts, syncing settings correctly, and adding safety warnings.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/3100)

## 5. Feature Request Trends
*   **Session Management & Naming:** There is a clear trend of requests (Issues #3025, #3099) demanding better ways to name, save, and restore sessions. Users find the current auto-generated names useless for organizing work.
*   **Audio/Haptic Feedback:** Multiple requests (Issues #2922, #3106) ask for sound notifications when tasks complete, indicating a desire to treat the CLI as a background worker.
*   **Enhanced CLI Context:** Users are asking for more metadata in the CLI interface, specifically Branch Names and Current Folder (Issue #3102/PR #3101), to prevent context errors.

## 6. Developer Pain Points
*   **TUI Instability:** The "scrolling flicker" and "screen washing" (Issues #2950, #2928) are the most significant visual detractors, often making the tool unusable during long outputs.
*   **Permission Fatigue:** The "Always Allow" feature appears broken (Issue #2723), forcing developers to repeatedly approve safe, local commands.
*   **Input Ergonomics:** The deviation from standard norms (Shift+Enter behavior) is a constant friction point for developers migrating from other IDEs or Terminals.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*