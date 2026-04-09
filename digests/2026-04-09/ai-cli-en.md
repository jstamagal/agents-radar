# AI CLI Tools Community Digest 2026-04-09

> Generated: 2026-04-09 00:11 UTC | Tools covered: 8

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

## AI CLI Tools Ecosystem Analysis: Cross-Tool Community Digest
**Date:** 2026-04-09
**Analyst:** Senior Technical Analyst, AI DevTools

---

### 1. Ecosystem Overview
The AI CLI landscape is currently undergoing a "platformization" phase, shifting from simple autocomplete to agentic workflows. Development is universally focused on **Context Management** (handling large token windows efficiently) and **UI Stability** (fixing TUI rendering artifacts). There is a clear industry trend toward **Model Context Protocol (MCP)** standardization, with tools racing to support custom servers while debugging policy blocks and schema validation. Security concerns are rising, evidenced by multiple initiatives regarding sandboxing (OpenCode) and granular permission controls.

### 2. Activity Comparison

| Tool | Release Status | Issue Focus | PR Focus | Community Sentiment |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.97 (Active) | Billing anomalies, Model regression | Open sourcing, Accessibility | Strained (High engagement on negative issues) |
| **OpenAI Codex** | v0.119.0-alpha (Rust Core) | Token burn, Windows/Linux bugs | Sandbox refactoring, Gov API | Anxious (Cost/Performance concerns) |
| **Charm Crush** | v0.56.0 (Feature) | Context overflow, JSON Schema | Agent Kernel, Self-configuration | Architectural (Focus on "Brain" logic) |
| **Gemini CLI** | v0.39.0-nightly (UI Fix) | Ghosting, Sandbox paths | ContextManager refactor, macOS Symlinks | Recovering (Fixing critical regressions) |
| **GitHub Copilot** | v1.0.22-0 (Stability) | MCP Policy blocks, Hooks | Agentic Triage, Installer guards | Enterprise (Policy friction dominant) |
| **Kimi Code** | No Release (UX Polish) | UX lag, Shell freezes | TypeScript rewrite (Bun) | Frustrated (Performance lag) |
| **OpenCode** | v1.4.0 (Breaking) | Memory leaks, Undo logic | macOS Sandbox, Voice Mode | Experimental (High activity, instability) |
| **Qwen Code** | v0.14.2 (IDE Fix) | Input lag, LSP diagnostics | Context API, Session Forking | Improving (IDE integration focus) |

### 3. Shared Feature Directions
*   **Context Window Optimization (Charm Crush, Claude Code, OpenAI Codex, Qwen Code)**
    *   *Specifics:* Developers are demanding better handling of the 200k+ token context windows. Qwen is introducing "micro-compaction" (PR #3006), while Charm Crush is implementing "three-layer safeguards" (PR #2582) to prevent crashes from overflow.
*   **Model Context Protocol (MCP) Standardization (GitHub Copilot, OpenAI Codex, Kimi Code)**
    *   *Specifics:* Rapid adoption of MCP servers is driving feature requests. GitHub Copilot is plagued by false-positive policy blocks (#2236), while OpenAI Codex is working to include custom MCPs in tool searches (PR #16944).
*   **Session Management & Memory (Qwen Code, OpenCode, Claude Code, Gemini CLI)**
    *   *Specifics:* Users are moving away from "infinite chat" toward structured session management. Requests for "Project vs. Global" memory separation (Gemini #22819), Session Forking (Qwen #3022), and manual history management are trending across all repositories.
*   **"Thinking" Transparency (Claude Code, OpenCode)**
    *   *Specifics:* Users want visibility into the model's reasoning chain. Claude Code has high demand for "Always Show Thinking" (#8477), while OpenCode is debugging "think-only" response handling (PR #1801).

### 4. Differentiation Analysis
*   **Architectural Split (Rust vs. TS/Python):**
    *   **OpenAI Codex** is heavily investing in a **Rust rewrite** (alpha v0.119.0), prioritizing core engine performance and extensibility.
    *   **Kimi Code** is exploring a community-driven rewrite to **Bun + TypeScript** (PR #1707) to shed the legacy Python codebase, prioritizing modularity over raw speed.
*   **Target User Experience:**
    *   **Charm Crush** focuses on "Conversational Configuration" (v0.56.0), targeting users who want the agent to self-configure via natural language.
    *   **GitHub Copilot CLI** is strictly **Enterprise/Policy** focused, dealing with complex auth flows (FedRAMP in PR #17171) and organizational restrictions.
    *   **OpenCode** targets the "Power User/Hacker" demographic with features like macOS `sandbox-exec` (PR #21538) and experimental Voice Mode (PR #20677).
*   **IDE vs. CLI Purity:**
    *   **Qwen Code** and **Gemini CLI** are deeply integrated with their respective Desktop/IDE experiences, leading to specific "Ghosting" or "WebView" bugs.
    *   **Claude Code** remains primarily CLI-first, with its issues focusing on TTY rendering and Brew integration rather than WebView bridges.

### 5. Community Momentum & Maturity
*   **Mature & Stable:** **GitHub Copilot CLI** and **Claude Code**. These have the highest issue volume and engaged communities but are currently battling "scaling pains" (billing, policy blocks).
*   **Rapidly Iterating:** **Charm Crush** and **OpenCode**. Both are pushing significant architectural changes (Agent Kernels, Voice Mode, Rewrites) indicative of early-to-mid-stage growth.
*   **Stabilizing:** **Qwen Code**. The focus on specific UI lag fixes and LSP diagnostics suggests the tool is moving from "feature addition" to "polish."
*   **Transitioning:** **OpenAI Codex**. The aggressive shift to Rust alpha releases suggests a turbulent transition period as they rebuild the core engine.

### 6. Trend Signals (For Technical Decision Makers)
1.  **The "Undo" Paradox (OpenCode #5474, Claude Code):** Atomic reversion of *both* chat history and file system changes is an unsolved problem in current AI agents. Teams building internal tools should prioritize state management architecture.
2.  **Multi-Agent Orchestration:** Issues regarding "context clearing" during multi-agent batch launches (Claude Code #45493) suggest that simply running multiple LLMs in parallel creates UI race conditions. The industry is moving toward "Agent Kernels" (Charm Crush PR #2580) to coordinate these workflows.
3.  **Windows as a Canary:** Linux and macOS generally offer stable TTY experiences, but **Windows** is universally revealing weaknesses in PTY handling, sandbox implementations, and symlink logic. If a tool supports Windows well, the core architecture is likely robust.
4.  **Cost Visibility Anxiety:** The "Token Burning" issues (OpenAI Codex #14593, Claude Code #38335) indicate a lack of trust in usage metering. Developers will increasingly demand "Context Meters" (OpenAI Codex PR #17170) and real-time cost feedback loops.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Data as of 2026-04-09
**Source:** anthropics/skills repository

---

## 1. Top Skills Ranking

*Note: The provided data lists PRs but contains `undefined` values for explicit comment counts. The ranking below infers "most-discussed" status based on list order, summary complexity, and associated Issue activity.*

### 1. **Document Typography (PR #514)**
*   **Status:** Open
*   **Functionality:** A quality control skill designed to fix common typographic flaws in AI-generated documents, such as orphaned words, widow paragraphs, and numbering misalignment.
*   **Link:** [anthropics/skills#514](https://github.com/anthropics/skills/pull/514)

### 2. **Skill Quality & Security Analyzers (PR #83)**
*   **Status:** Open
*   **Functionality:** Introduces "meta-skills" that evaluate other skills. It analyzes structure, documentation, examples, and security risks across five dimensions.
*   **Link:** [anthropics/skills#83](https://github.com/anthropics/skills/pull/83)

### 3. **Frontend Design Skill Improvements (PR #210)**
*   **Status:** Open
*   **Functionality:** Refines the `frontend-design` skill to ensure instructions are actionable, clear, and capable of being executed within a single conversation context.
*   **Link:** [anthropics/skills#210](https://github.com/anthropics/skills/pull/210)

### 4. **ODT (OpenDocument Text) Skill (PR #486)**
*   **Status:** Open
*   **Functionality:** Enables creation, manipulation, and parsing of `.odt` files (LibreOffice/OpenOffice format), including filling templates and converting ODT to HTML.
*   **Link:** [anthropics/skills#486](https://github.com/anthropics/skills/pull/486)

### 5. **DOCX Bookmark Fix (PR #541)**
*   **Status:** Open
*   **Functionality:** A critical bug fix for the DOCX skill to prevent tracked change ID collisions with existing bookmarks, which causes document corruption.
*   **Link:** [anthropics/skills#541](https://github.com/anthropics/skills/pull/541)

### 6. **SAP-RPT-1-OSS Predictor (PR #181)**
*   **Status:** Open
*   **Functionality:** Integrates SAP’s open-source tabular foundation model for predictive analytics directly on SAP business data.
*   **Link:** [anthropics/skills#181](https://github.com/anthropics/skills/pull/181)

### 7. **Contributing Guidelines (PR #509)**
*   **Status:** Open
*   **Functionality:** Adds a `CONTRIBUTING.md` to address community health metrics and guide new contributors.
*   **Link:** [anthropics/skills#509](https://github.com/anthropics/skills/pull/509)

### 8. **Masonry AI - Image & Video Generation (PR #335)**
*   **Status:** Open
*   **Functionality:** Integrates with Masonry CLI to generate images (Imagen 3.0) and videos (Veo 3.1) and manage generation jobs.
*   **Link:** [anthropics/skills#335](https://github.com/anthropics/skills/pull/335)

---

## 2. Community Demand Trends

Based on the activity in Issues, the community is pushing for the following directions:

*   **Enterprise Organization & Sharing (Issue #228):**
    There is strong demand for org-wide skill sharing. Users want to share skills directly within `claude.ai` teams without manually exchanging files, indicating a push for better enterprise collaboration features.

*   **Reliability & Quality Assurance (Issue #202, Issue #556):**
    Users are concerned about the reliability of skills. Discussions highlight the need for the `skill-creator` to move from "documentation" to "operational instructions," and critical bugs in evaluation scripts (`run_eval.py`) suggest a desire for rigorous testing frameworks for skills before deployment.

*   **Namespace Security & Trust (Issue #492):**
    A significant security concern has been raised regarding community skills distributed under the `anthropic/` namespace. The community is demanding clear distinctions between official and community skills to prevent trust boundary abuse.

*   **Cross-Platform Integration (Issue #16, Issue #29):**
    There are recurring requests to expose Skills via **MCP (Model Context Protocol)** and to ensure compatibility with **AWS Bedrock**, signaling a desire for skills to be portable across different AI hosting environments.

---

## 3. High-Potential Pending Skills

The following PRs are active and have not yet been merged, representing features likely to land soon:

*   **Testing Patterns (PR #723):** A comprehensive skill covering the testing philosophy (Trophy model), unit testing (AAA pattern), and React component testing. This addresses a major gap in development workflows.
*   **macOS Automation via AppleScript (PR #806):** A "sensory" skill that allows Claude to use `osascript` for native macOS automation, offering a more robust alternative to screenshot-based computer use.
*   **Codebase Inventory Audit (PR #147):** A workflow skill for identifying orphaned code, unused files, and documentation gaps, useful for large project maintenance.
*   **Persistent Memory (PR #154, PR #521):** Two distinct skills (`shodh-memory` and `record-knowledge`) aiming to solve the "context loss" problem by allowing Claude to record and retrieve knowledge across sessions.

---

## 4. Skills Ecosystem Insight

The community's current demand is heavily concentrated on **raising the engineering maturity of the Skills ecosystem**, moving beyond simple scripts toward **enterprise-grade governance (security namespaces, team sharing), reliability (meta-testing, bug fixes), and deep tool integration (ODT, SAP, Bedrock, MCP).**

---

# Claude Code Community Digest: 2026-04-09

## 1. Today's Highlights
The latest releases (v2.1.96 and v2.1.97) focus heavily on UI refinement, introducing a new `Ctrl+O` focus view toggle to minimize visual noise and fixing a critical authentication regression for Bedrock users. Meanwhile, community sentiment remains strained due to ongoing debates regarding model performance degradation and persistent billing/session limit anomalies affecting paid tiers.

## 2. Releases
**v2.1.97 & v2.1.96**
*   **New Focus View (`Ctrl+O`):** In `NO_FLICKER` mode, users can now toggle a streamlined view showing only the prompt, one-line tool summaries with diff stats, and the final response. [Diff](https://github.com/anthropics/claude-code/releases/v2.1.97)
*   **Status Line Enhancements:** Added `refreshInterval` to periodically re-run status commands and `workspace.git_worktree` support.
*   **Bedrock Auth Fix:** Resolved a regression in v2.1.94 that caused 403 "Authorization header missing" errors when using `AWS_BEARER_TOKEN_BEDROCK`. [Diff](https://github.com/anthropics/claude-code/releases/v2.1.96)

## 3. Hot Issues

### Critical & Widely Discussed
1.  **[#42796](https://github.com/anthropics/claude-code/issues/42796) - Claude Code unusable for complex tasks** (948 👍)
    *   *Why:* **CLOSED**. Reports that February updates rendered the tool ineffective for complex engineering tasks. High engagement suggests a significant portion of the userbase feels the tool's utility has regressed.
2.  **[#38335](https://github.com/anthropics/claude-code/issues/38335) - Max plan session limits exhausted abnormally fast** (369 👍)
    *   *Why:* **OPEN**. Users report drastic, unexplained increases in token consumption or session counting since March 23. Major concern for developers relying on "Max" tier for daily work.
3.  **[#41930](https://github.com/anthropics/claude-code/issues/41930) - Widespread abnormal usage limit drain** (35 👍)
    *   *Why:* **OPEN**. A meta-issue aggregating reports of usage draining across all paid tiers. Highlights a lack of official communication regarding the root cause.

### Platform & Tooling Stability
4.  **[#11405](https://github.com/anthropics/claude-code/issues/11405) - macOS: Brew update conflict** (112 👍)
    *   *Why:* **CLOSED**. Persistent friction point where the TUI prompts for an update, but Homebrew is already up-to-date. Confuses users and breaks workflow continuity.
5.  **[#1486](https://github.com/anthropics/claude-code/issues/1486) - View jumps to top during code review** (97 👍)
    *   *Why:* **CLOSED**. A long-standing UX annoyance where scrolling up to review diffs causes the view to snap back to the top, making it difficult to accept/reject changes.
6.  **[#45493](https://github.com/anthropics/claude-code/issues/45493) - Multi-agent batch launches clear UI context** (New)
    *   *Why:* **OPEN**. High-activity agent sessions cause the chat history to vanish from the UI (Ctrl+O/Ctrl+E show nothing). A severe regression for power users running parallel agents.
7.  **[#45503](https://github.com/anthropics/claude-code/issues/45503) - CoWork fails to start on Windows (Plan9 conflict)** (New)
    *   *Why:* **OPEN**. CoWork VM fails to start due to drive conflicts. Indicates lingering instability in the Windows CoWork environment.

### Features & Requests
8.  **[#8477](https://github.com/anthropics/claude-code/issues/8477) - Option to Always Show "Thinking"** (195 👍)
    *   *Why:* **OPEN**. Users want transparency into the model's reasoning process (extended thinking) rather than staring at a spinner.
9.  **[#30660](https://github.com/anthropics/claude-code/issues/30660) - Stream extended thinking in real-time** (19 👍)
    *   *Why:* **OPEN**. Related to #8477. Requests streaming the thought process during the "reasoning" phase for better feedback loops.
10. **[#12443](https://github.com/anthropics/claude-code/issues/12443) - Remove malware warning in Read tool** (14 👍)
    *   *Why:* **OPEN**. Users find the security warning overly verbose when reading known safe files, requesting a way to suppress it.

## 4. Key PR Progress
1.  **[#41447](https://github.com/anthropics/claude-code/pull/41447) - feat: open source claude code**
    *   Ongoing community effort to fully open-source the CLI, addressing transparency and customization requests.
2.  **[#40322](https://github.com/anthropics/claude-code/pull/40322) - feat(devcontainer): enhance firewall**
    *   Improves stability for developers using Claude inside DevContainers by fixing IP management and firewall initialization.
3.  **[#45150](https://github.com/anthropics/claude-code/pull/45150) - docs: expand CLAUDE_CODE_ACCESSIBILITY**
    *   Improves documentation for screen readers and accessibility modes, a win for inclusive development.
4.  **[#26328](https://github.com/anthropics/claude-code/pull/26328) - feat: add session-manager plugin**
    *   Addresses the lack of native session management by adding a plugin to list, delete, and clean up sessions.
5.  **[#45156](https://github.com/anthropics/claude-code/pull/45156) - docs: fix accidental strikethrough**
    *   Fixes formatting errors in Korean documentation, improving international UX.

## 5. Feature Request Trends
*   **Thinking Visibility:** There is a strong desire for the model's "thinking" process to be visible and streamed in real-time, rather than hidden behind a loading state.
*   **Session Management:** Users are asking for robust tools to manage (delete, search, organize) chat sessions, either natively or via plugins.
*   **Customizable Security:** Developers want more granular control over security warnings (e.g., suppressing "malware" warnings for trusted projects).

## 6. Developer Pain Points
*   **Reliability Anxiety:** A significant portion of the community is vocal about "regressions," citing degraded model quality for complex tasks and unexplained usage spikes.
*   **Windows & CoWork Instability:** Windows users continue to report specific friction points regarding CoWork VM drive mounting (Plan9 shares) and EFI partition conflicts.
*   **Multi-Agent Overload:** As users push the limits of multi-agent workflows, the UI struggles to render high-volume outputs, leading to lost context and blank screens.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-09

## 1. Today's Highlights
The repository has seen a rapid succession of **Rust alpha releases** (v0.119.0-alpha.19 through v0.119.0-alpha.24), indicating active development on the CLI core. Meanwhile, the community is intensely focused on **token consumption bugs**, with several issues highlighting high CPU usage and rate limit concerns impacting Business and Pro subscribers.

## 2. Releases
*   **rust-v0.119.0-alpha series (19–24):** The team pushed six rapid-fire alpha releases for the Rust crate. While specific changelogs are not detailed in the feed, the frequency suggests a push to stabilize a specific feature or fix a regression in the `0.119` branch.

## 3. Hot Issues
1.  **[#14593](https://github.com/openai/codex/issues/14593) - Burning tokens very fast (491 comments)**
    *   **Impact:** Users with Business subscriptions report excessive token usage, specifically noting they may be excluded from limit resets.
    *   **Reaction:** High community anxiety regarding cost management and API quota accuracy.

2.  **[#10410](https://github.com/openai/codex/issues/10410) - macOS Intel support (170 comments)**
    *   **Impact:** The Desktop App currently lacks support for Intel-based Macs (x86_64), limiting adoption for users who haven't migrated to Apple Silicon.
    *   **Reaction:** Highly requested feature with 248 upvotes.

3.  **[#10450](https://github.com/openai/codex/issues/10450) - Remote Development in Desktop App (105 comments)**
    *   **Impact:** Users want the Desktop App to support SSH/Remote development workflows similar to VS Code.
    *   **Reaction:** A major pain point for developers transitioning from full IDEs to the Codex App.

4.  **[#8648](https://github.com/openai/codex/issues/8648) - Codex replies to earlier messages (38 comments)**
    *   **Impact:** A context/retrieval bug where the agent responds to outdated messages instead of the latest prompt, disrupting conversation flow.
    *   **Reaction:** Frustration with model "memory" reliability in multi-turn chats.

5.  **[#13476](https://github.com/openai/codex/issues/13476) - Excessive approval prompts (Playwright MCP) (24 comments)**
    *   **Impact:** A regression in the MCP (Model Context Protocol) integration, specifically for Playwright, causing an annoying number of permission popups.
    *   **Reaction:** Developers working with browser automation tools are finding the tool nearly unusable.

6.  **[#13993](https://github.com/openai/codex/issues/13993) - Standalone Windows Installer (19 comments)**
    *   **Impact:** Windows users in restricted environments cannot install the app via the Microsoft Store.
    *   **Reaction:** Strong demand for a traditional `.exe` installer for enterprise compatibility.

7.  **[#13542](https://github.com/openai/codex/issues/13542) - Windows `rg` Access Denied (13 comments)**
    *   **Impact:** The bundled `ripgrep` binary in the Codex Desktop App fails with permission errors in the integrated PowerShell terminal.
    *   **Reaction:** Affects basic terminal workflow efficiency on Windows.

8.  **[#16849](https://github.com/openai/codex/issues/16849) - VSCode Extension CPU Loop (12 comments)**
    *   **Impact:** The VS Code extension hits 100% CPU due to an error loop in `open-in-targets` handlers.
    *   **Reaction:** Critical performance degradation for IDE users.

9.  **[#16904](https://github.com/openai/codex/issues/16904) - Linux TUI Stale Spinners (11 comments)**
    *   **Impact:** The Terminal UI (TUI) leaves spinners running and blocks input after a subagent completes on Linux/tmux.
    *   **Reaction:** Usability blocker for heavy CLI users.

10. **[#16402](https://github.com/openai/codex/issues/16402) - 0.118.0 Sandbox Write Regression (8 comments)**
    *   **Impact:** A recent update broke the ability to write to the sandbox on Linux.
    *   **Reaction:** Critical functionality regression for the CLI.

## 4. Key PR Progress
1.  **[#17155](https://github.com/openai/codex/pull/17155) - Compaction Analytics**
    *   Adds new analytics events specifically for tracking context "compaction" events, likely to help diagnose the token usage issues reported in #14593.

2.  **[#17171](https://github.com/openai/codex/pull/17171) - FedRAMP Gov API Routing**
    *   Implements logic to probe and route API-key logins to a dedicated Gov API base URL for FedRAMP compliant organizations.

3.  **[#16736](https://github.com/openai/codex/pull/16736) - Unified-Exec Sandbox Launch**
    *   Refactors the sandbox launching mechanism, moving logic to `codex-exec-server`. This aims to standardize how remote and local sandboxes are initialized.

4.  **[#17170](https://github.com/openai/codex/pull/17170) - Statusline Context Meter**
    *   UI improvement for the TUI/App status bar, changing context usage from a percentage text to a visual "meter" to avoid confusion with token quotas.

5.  **[#16944](https://github.com/openai/codex/pull/16944) - Expand Tool Search to Custom MCPs**
    *   Enhances the Model Context Protocol (MCP) integration to allow searching within custom MCP servers, not just default ones.

6.  **[#17165](https://github.com/openai/codex/pull/17165) - Default Realtime Prompt**
    *   Moves the default prompt template for "realtime" voice/mode interactions into the core logic for better consistency.

7.  **[#17164](https://github.com/openai/codex/pull/17164) - Auto-Approve MCP in Full Access**
    *   Updates the approval logic so that when running in "Full Access" mode, MCP server elicitations are auto-approved, consistent with other tool permissions.

8.  **[#17087](https://github.com/openai/codex/pull/17087) - Marketplace Command**
    *   Introduces a new CLI command `codex marketplace add` to install plugin marketplaces from local directories or Git URLs.

9.  **[#10109](https://github.com/openai/codex/pull/10109) - Linux Sandbox Async Fix**
    *   Addresses a hang in SQLite/asyncio within the Linux sandbox by allowing specific `sendto` syscalls required for self-pipe wakeups.

10. **[#15134](https://github.com/openai/codex/pull/15134) - Stale App-Server Request Dismissal**
    *   Fixes a TUI bug where approval overlays would remain stale after being resolved by another client.

## 5. Feature Request Trends
*   **Desktop Parity:** There is a massive push for the Codex Desktop App to reach feature parity with VS Code. Top requests include **Remote Development (SSH)** support and **Intel (x86_64) macOS** support.
*   **Enterprise Distribution:** Windows users are requesting a **Standalone Installer** (`.exe`) to bypass Microsoft Store restrictions common in corporate environments.
*   **MCP & Tooling:** Users want more granular control over **Model Context Protocol (MCP)** tools, specifically requesting that custom MCPs be included in tool searches (#16944) and approval flows be smoothed out.

## 6. Developer Pain Points
*   **Token Management & Cost:** A recurring theme involves "Burning tokens" and confusion over rate limits (#14593, #17157). Developers feel they are hitting limits faster than expected or that resets aren't working for Business tiers.
*   **Windows App Instability:** The Windows ecosystem is suffering from specific glitches, including **Access Denied errors** for bundled tools (#13542), **Shell Freezes** (#16374), and the **App reopening itself** after closure (#15949).
*   **Sandbox Regressions:** Recent updates (0.117-0.118) appear to have introduced **Linux Sandbox regressions** (#16402, #17079), breaking write access and causing startup failures for users with complex file-systems (symlinks).

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest
**Date:** 2026-04-09
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

---

### 1. Today's Highlights
Charmbracelet Crush released **v0.56.0**, focusing on "getting better at Crush" by enhancing the agent's ability to self-configure via natural language prompts. Concurrently, the repository is buzzing with activity regarding core infrastructure stability, specifically addressing a critical **JSON Schema generation error** introduced in v0.55.1 and implementing safeguards against **context window overflow**. The community is also actively discussing long-term architectural improvements, including a proposed "Agent Kernel" and a new internal service for handling Ask/Answer interactions.

---

### 2. Releases
*   **[v0.56.0](https://github.com/charmbracelet/crush/releases/tag/v0.56.0)**
    *   **Theme:** "Crush better at Crush".
    *   **Details:** Builds upon the "built-in skill" introduced in v0.55.0. This update refines how users can instruct Crush to configure itself—adding custom providers, LSPs, or MCPs—directly through prompts, making the setup process more conversational and intuitive.

---

### 3. Hot Issues
Below are the most discussed or impactful issues from the last 24 hours.

1.  **[#2581](https://github.com/charmbracelet/crush/issues/2581): [os: windows] context windows to big?**
    *   **Why it matters:** Highlights a regression where context window calculations may be incorrect, specifically affecting Windows users. It references the ongoing fixes in PR #2582.

2.  **[#2560](https://github.com/charmbracelet/crush/issues/2560): [area: lsp] v0.55.0 breaks LSP UI display**
    *   **Why it matters:** A significant regression where the LSP status appeared inactive in the UI despite functioning. The swift community response identified it as a simple event subscription fix.

3.  **[#2559](https://github.com/charmbracelet/crush/issues/2559): Chutes LLM List is Severely Outdated**
    *   **Why it matters:** Users are facing "model not found" errors (specifically `moonshotai/Kimi-K2-Instruct-0905`), indicating that the hardcoded model lists for providers are drifting from actual availability.

4.  **[#2481](https://github.com/charmbracelet/crush/issues/2481): [area: mouse] bug: chat sometimes stops auto-following**
    *   **Why it matters:** A UX friction point affecting longer sessions. Users expect the chat to auto-scroll when returning to the bottom, but it sometimes gets stuck, disrupting the flow.

5.  **[#2573](https://github.com/charmbracelet/crush/issues/2573): JSON Schema is broken**
    *   **Why it matters:** A tooling breakage for users relying on the published JSON schema at `charm.land/crush.json` for configuration validation. It was caused by a pointer receiver change in a recent commit.

---

### 4. Key PR Progress
Significant pull requests updated or closed in the last 24 hours.

1.  **[#2582](https://github.com/charmbracelet/crush/pull/2582): fix(agent): prevent context limit overflow with three-layer safeguard** [OPEN]
    *   **Impact:** Introduces a robust error handler (`IsContextTooLarge`) and caps output tokens to prevent crashes. This PR addresses multiple long-standing issues (#824, #1521) regarding context management.

2.  **[#2574](https://github.com/charmbracelet/crush/pull/2574): Fix crush.json schema generation** [CLOSED]
    *   **Impact:** Fixes the schema generation error by correcting the receiver for `JSONSchemaAlias()` on `csync.Map`. This restores the ability to validate config files.

3.  **[#2565](https://github.com/charmbracelet/crush/pull/2565): fix(ui): subscribe to app.LSPEvent** [CLOSED]
    *   **Impact:** The rapid fix for the LSP UI display bug (#2560), ensuring the UI correctly listens to LSP events after they were moved to the `app` package.

4.  **[#2583](https://github.com/charmbracelet/crush/pull/2583): feat(config): support `HYPER_API_KEY`** [OPEN]
    *   **Impact:** Adds support for the `HYPER_API_KEY` environment variable, allowing for non-interactive authentication workflows for the Hyper provider.

5.  **[#2561](https://github.com/charmbracelet/crush/pull/2561): feat(tools): view active crush config and logs** [CLOSED]
    *   **Impact:** Adds introspection tools (`crush_info` and `crush_logs`) so the agent can understand its own configuration and debug itself.

6.  **[#2580](https://github.com/charmbracelet/crush/pull/2580): feat: comprehensive agent kernel and coordination system** [OPEN]
    *   **Impact:** A massive architectural proposal adding hybrid brain coordination, task classifiers, and a permission grade system. This represents the future direction of the agent's core logic.

7.  **[#2557](https://github.com/charmbracelet/crush/pull/2557): docs(readme): mention `AVIAN_API_KEY`** [CLOSED]
    *   **Impact:** Formalizes support for the "Avian" provider, adding DeepSeek V3.2, Kimi K2.5, and GLM-5 to the list of available models.

8.  **[#2242](https://github.com/charmbracelet/crush/pull/2242): fix(app): derive shutdown context** [CLOSED]
    *   **Impact:** Ensures the app shuts down gracefully by deriving the shutdown context from `context.Background()` rather than a potentially cancelled global context.

9.  **[#2579](https://github.com/charmbracelet/crush/pull/2579): feat: adding `internal/ask_question` service** [OPEN]
    *   **Impact:** Refactoring the "Ask" mechanism into a Broker service using PubSub patterns, improving how the UI handles agent queries.

10. **[#2564](https://github.com/charmbracelet/crush/pull/2564): chore(deps): bump the all group** [CLOSED]
    *   **Impact:** Routine dependency updates for `catwalk`, `go-git`, and `sqlite`, keeping the project up to date with upstream fixes.

---

### 5. Feature Request Trends
Based on the activity, the community is driving the following feature directions:

*   **Introspection & Self-Awareness:** There is a clear push (PR #2561) to make the AI "aware" of its own state. Developers want tools that let the agent inspect its active configuration and logs to better debug itself.
*   **Robust Context Management:** Following various context overflow issues, developers are prioritizing features that prevent crashes and manage large context windows intelligently (PR #2582).
*   **Agent Coordination & Architecture:** Early-stage development is focusing on complex agent behaviors, such as "Kernels" and "Schedulers" (PR #2580), moving toward multi-step reasoning and permission-based execution.

---

### 6. Developer Pain Points
*   **Context Window Drift:** There is ongoing frustration with context limits being hit or calculated incorrectly, particularly on Windows (Issue #2581). Developers want reliable context handling that doesn't result in "model not found" or truncation errors.
*   **UX Glitches:** Long-duration sessions are plagued by UI bugs, specifically the chat log failing to auto-scroll (Issue #2481) or LSP indicators disappearing (Issue #2560).
*   **Schema & Config Validation:** Developers relying on IDE integration for configuration validation were blocked by the broken JSON schema (Issue #2573), emphasizing the need for stability in tooling support alongside the main application.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-09

## 1. Today's Highlights
The **v0.39.0-nightly** and **v0.38.0-preview** releases arrived today, focusing on UI refinements for hook systems and slash command reliability. A critical hotfix was issued in **[PR #24974](https://github.com/google-gemini/gemini-cli/pull/24974)** to restore file path visibility in Edit and WriteFile tools, which had disappeared in recent UI updates. Additionally, the repository is seeing significant architectural traction with the introduction of a decoupled **ContextManager** and ongoing efforts to stabilize sandbox environments across Windows and macOS.

## 2. Releases

*   **v0.39.0-nightly.20260408**:
    *   **UI Enhancements**: Added "Approve" button functionality and visual improvements for hook system messages ([#24645](https://github.com/google-gemini/gemini-cli/pull/24645), [#24616](https://github.com/google-gemini/gemini-cli/pull/24616)).
    *   **Core Fixes**: Ensured `BeforeModel` hook overrides propagate correctly end-to-end.
*   **v0.38.0-preview.0**:
    *   **UX Polish**: Fixed an issue where `/skills reload` failed to refresh the slash command list ([#24454](https://github.com/google-gemini/gemini-cli/pull/24454)).
    *   **Reliability**: Ensured the `complete_task` tool functions as expected.

## 3. Hot Issues

*   **[UI Ghosting & Text Corruption](https://github.com/google-gemini/gemini-cli/issues/24935)**
    *(Updated: Today)*
    Users are reporting screen corruption and "ghost" text states after exiting external editors (like Vim) in `terminalBuffer` mode. A full screen refresh force-fix is being discussed to resolve rendering artifacts.
*   **[Tool Confirmations Missing File Paths](https://github.com/google-gemini/gemini-cli/issues/24936)**
    *(Updated: Yesterday)*
    A critical regression where the `Edit` and `WriteFile` tools stopped displaying the target file path in the confirmation prompt. This blocked users from verifying what they were about to change. *(Hotfixed in v0.39.0-nightly)*.
*   **[Permission Loop Glitch](https://github.com/google-gemini/gemini-cli/issues/24916)**
    *(Updated: Yesterday)*
    Reports of the CLI repeatedly asking for permissions for the same file, ignoring "allow for all future sessions" instructions. This indicates a potential breakdown in the local trust store persistence.
*   **[SSH Session Scrambling](https://github.com/google-gemini/gemini-cli/issues/24202)**
    *(Updated: Yesterday)*
    Windows users running CLI via SSH to cloud environments are experiencing scrambled text and unusable interfaces. An SSH detection helper is now in development to mitigate this.
*   **[Windows Interactive Shell Crashes](https://github.com/google-gemini/gemini-cli/issues/20675)**
    *(Updated: Yesterday)*
    A long-standing issue where using arrow keys in interactive subshells (e.g., `pnpm create vite`) causes the window to crash or disappear. A fix involving PTY handling has been pushed to PR.
*   **[Subscription & Model Access Confusion](https://github.com/google-gemini/gemini-cli/issues/20498)**
    *(Updated: Yesterday)*
    Paying users are frustrated by the lack of clarity regarding access to "Gemini 3" or "3.1" models versus the free tier, highlighting communication gaps in feature tiers.
*   **[Agent Memory Routing](https://github.com/google-gemini/gemini-cli/issues/22819)**
    *(Updated: Yesterday)*
    Developers are requesting a distinction between "Global" (`~/.gemini/`) and "Project" (`.gemini/`) memory storage so that agents can better contextualize user preferences versus project-specific conventions.
*   **[Agent Destructive Behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**
    *(Updated: Yesterday)*
    Concerns that agents are too eager to use `git reset --force` or destructive DB commands. There is a push to enforce "safe mode" constraints by default.
*   **[AST-Aware Tooling Investigation](https://github.com/google-gemini/gemini-cli/issues/22745)**
    *(Updated: Yesterday)*
    An epic issue tracking the potential value of Abstract Syntax Tree (AST) aware tools. The goal is to reduce token noise and improve precision when reading method bounds.
*   **[macOS Sandbox Path Support](https://github.com/google-gemini/gemini-cli/issues/24991)**
    *(Updated: Today)*
    Feature request to support absolute paths for the `SEATBELT_PROFILE` environment variable on macOS, allowing developers to point to custom sandbox profiles more easily.

## 4. Key PR Progress

*   **[Hotfix: Restore File Path in Tool Confirmations](https://github.com/google-gemini/gemini-cli/pull/24974)**
    *(Merged)*
    Restores the critical file path display in `Edit` and `WriteFile` prompts that was lost during a recent UI refactor.
*   **[Refactor: Decoupled ContextManager & Sidecar](https://github.com/google-gemini/gemini-cli/pull/24752)**
    *(Open)*
    Introduces a major architectural shift to decouple the `ContextManager` from the core client. This aims to fix complex state management issues and improve modularity.
*   **[Fix: Resolve Windows Symlink Bypass in Sandbox](https://github.com/google-gemini/gemini-cli/pull/24834)**
    *(Merged)*
    Closes a security vulnerability where Windows sandboxed processes could bypass `forbiddenPaths` restrictions by accessing files via symlinks.
*   **[Fix: Windows Arrow Key Navigation](https://github.com/google-gemini/gemini-cli/pull/23505)**
    *(Open)*
    Addresses the PTY crash on Windows when running interactive shells. It handles `PSReadLine` interference and terminal buffer resizing.
*   **[Fix: Update Ink to v6.6.9](https://github.com/google-gemini/gemini-cli/pull/24980)**
    *(Open)*
    Updates the underlying React-based UI library to fix clipping bugs in the input prompt and improve general rendering stability.
*   **[Refactor: Centralized Sandbox Path Resolution](https://github.com/google-gemini/gemini-cli/pull/24985)**
    *(Open)*
    Unifies how the Linux sandbox handles path resolution and symlink expansion, removing redundant logic and simplifying the codebase.
*   **[Fix: Dynamic Session ID Injection](https://github.com/google-gemini/gemini-cli/pull/24972)**
    *(Open)*
    Fixes a bug where `/stats session` would report a new, incorrect ID instead of the resumed session ID, improving debugging continuity.
*   **[Fix: Clear OAuth Timeouts](https://github.com/google-gemini/gemini-cli/pull/24968)**
    *(Open)*
    Addresses a memory leak where 5-minute timeouts in the OAuth flow were not being cleared upon successful authentication.
*   **[Feat: Refine Shell Tool Descriptions](https://github.com/google-gemini/gemini-cli/pull/24903)**
    *(Open)*
    Improves the shell tool's logic to dynamically choose between showing raw commands or natural language descriptions based on complexity.
*   **[Feat: Generalize Evals Infra](https://github.com/google-gemini/gemini-cli/pull/24941)**
    *(Open)*
    Expands the evaluation framework to support "suites," allowing developers to run specific groups of behavioral or component-level tests.

## 5. Feature Request Trends
*   **Memory & Context Persistence**: There is a strong demand for the CLI to remember user preferences across sessions (Global Memory) and distinct project contexts (Project Memory).
*   **AST Integration**: Users are asking for "smarter" code reading that understands code structure (AST) rather than just treating files as text blocks.
*   **Startup Performance**: Developers are requesting faster startup times, with one PR aiming to cut launch time by ~1.1 seconds using a lightweight parent process.

## 6. Developer Pain Points
*   **Terminal & UI Instability**: A significant portion of recent issues relates to text rendering bugs, specifically "ghosting," corrupted output after exiting editors, and specific struggles with Windows terminal emulation (PTY).
*   **Sandbox Complexity**: Developers are hitting friction with sandbox configurations, specifically around absolute paths on macOS and symlink handling on Windows.
*   **Agent Safety**: There is recurring frustration with agents performing destructive actions (like `git reset --force`) without explicit warning or constraint.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest**
*Date: 2026-04-09 | Source: github.com/github/copilot-cli*

### 1. Today's Highlights
The **v1.0.22-0** release addresses stability concerns by introducing sub-agent depth limits and fixing a critical V8 engine segmentation bug that caused crashes. Community attention remains focused on **Model Context Protocol (MCP)** server management, with widespread reports of "false positive" policy blocks preventing valid enterprise and individual users from accessing their tools.

### 2. Releases: v1.0.22-0
*   **Agent Safety:** Implemented concurrency and depth limits to prevent runaway agent spawning loops.
*   **Session Management:** Added warnings when resuming a session already active in another CLI.
*   **Critical Fix:** Resolved crashes on systems affected by the V8 engine grapheme segmentation bug.
*   **Fixes:** Patched incomplete handling for `sessionStart` and `sessionEnd` events.

### 3. Hot Issues
Here are the top 10 issues driving community discussion today:

*   [#2236](https://github.com/github/copilot-cli/issues/2236) – **MCP servers falsely disabled by organization policy** (67 👍)
    *   **Impact:** Users report that valid MCP servers configured via org registry are being blocked by a false warning claiming they are "disabled by your organization's Copilot policy."
*   [#1157](https://github.com/github/copilot-cli/issues/1157) – **Global Hooks Configuration** (25 👍)
    *   **Impact:** Strong demand for a global hooks system to avoid repetitive configuration in every repository.
*   [#2479](https://github.com/github/copilot-cli/issues/2479) – **MCP policy fetch fails for Individual users (404)** (12 👍)
    *   **Impact:** Copilot Pro users are seeing "blocked by policy" errors when settings are enabled, likely due to a 404 error on the individual registry endpoint.
*   [#1128](https://github.com/github/copilot-cli/issues/1128) – **Feature Request: `awaitingUserInput` hook** (22 👍)
    *   **Impact:** Developers want a hook that triggers when the CLI is waiting for input, improving automation capabilities.
*   [#2498](https://github.com/github/copilot-cli/issues/2498) – **All MCP servers blocked on GHE (404)** (3 👍)
    *   **Impact:** GitHub Enterprise users are blocked because their instances return 404 for the unsupported `/copilot/mcp_registry` endpoint.
*   [#1897](https://github.com/github/copilot-cli/issues/1897) – **"Not authorized" errors** (11 comments)
    *   **Impact:** Users with valid Copilot Pro licenses are suddenly told they are not authorized to use CLI features.
*   [#2583](https://github.com/github/copilot-cli/issues/2583) – **`copilot update` command broken** (4 comments)
    *   **Impact:** The self-update mechanism appears non-functional for users on v1.0.20.
*   [#2434](https://github.com/github/copilot-cli/issues/2434) – **Restore Gemini Pro Support** (7 👍)
    *   **Impact:** Users are requesting the return of `gemini-3-pro-preview`, which was dropped in v1.0.14.
*   [#2551](https://github.com/github/copilot-cli/issues/2551) – **HTTP/2 GOAWAY errors with Claude 4.5** (5 comments)
    *   **Impact:** Usage of Claude Opus/Sonnet 4.5 results in connection termination errors after several rounds of interaction.
*   [#2573](https://github.com/github/copilot-cli/issues/2573) – **Orphaned `pwsh.exe` processes** (2 comments)
    *   **Impact:** v1.0.20 is failing to close child PowerShell processes, leading to resource leaks.

### 4. Key PR Progress
*   [#2587](https://github.com/github/copilot-cli/pull/2587) – **Automated Issue Classification**
    *   Introduces a GitHub Agentic Workflow to automatically label issues with `area:` and `triage` tags, helping maintainers manage the high volume of incoming bug reports.
*   [#2565](https://github.com/github/copilot-cli/pull/2565) – **Install Path Guard**
    *   A fix for the installer script to prevent duplicate `PATH` entries when reinstalling the CLI without restarting the shell.
*   [#2556](https://github.com/github/copilot-cli/pull/2556) – **Developer Skill**
    *   Enhancements to the built-in "developer" skill, specifically aimed at "leveling up" coding capabilities.

### 5. Feature Request Trends
*   **Configuration Granularity:** There is a significant push for moving configuration from the global/user level to the repository level. Users are requesting **per-repository MCP configuration** (e.g., `.github/mcp.json`) similar to how LSP servers or custom instructions work, rather than relying solely on global user configs.
*   **Advanced Hooks:** Users want more robust event-driven automation, specifically requesting **Global Hooks** and new event types like `awaitingUserInput` to better integrate the CLI into their dev workflows.

### 6. Developer Pain Points
*   **MCP Policy Fragility:** The most significant friction point today is the reliability of the MCP registry. Both Enterprise and Individual users are experiencing "false positive" blocks, where valid servers are disabled due to 404 errors or policy misinterpretations.
*   **Model Support & Stability:** Developers are frustrated by inconsistent model availability (e.g., removal of Gemini) and connection stability issues (HTTP/2 GOAWAY errors) with newer Claude models.
*   **Linux/Shell UX:** Issues persist regarding console handling on Linux, specifically where the CLI blocks standard right-click menus or spawns orphaned child processes.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-04-09

**Source:** github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights

The repository is seeing a surge of activity focused on refining the shell/user experience (UX) and resolving backend reliability issues. Significant effort has been applied to fixing session management quirks—such as streamlining slash command completions and enhancing the session picker—while maintainers are also addressing critical stability bugs related to streaming timeouts and process lifecycle management.

## 2. Releases

**No new releases detected in the last 24 hours.**

---

## 3. Hot Issues

Here are 10 noteworthy issues updated recently, highlighting UX friction points and stability concerns:

1.  **[Enhancement] Three-tier Rules System** [#1747](https://github.com/MoonshotAI/kimi-cli/issues/1747)
    *   **Why it matters:** Users want feature parity with competitors (like Claude Code) regarding rule management.
    *   **Request:** Implement a hierarchy for development guidelines (Global > User > Project).

2.  **[Bug] TTY Input Freeze in Ghostty** [#1807](https://github.com/MoonshotAI/kimi-cli/issues/1807)
    *   **Why it matters:** Affects terminal responsiveness on macOS.
    *   **Details:** Input freezes when running commands, likely related to raw mode handling not restoring correctly.

3.  **[Bug] UI Lags Behind File Writes** [#1786](https://github.com/MoonshotAI/kimi-cli/issues/1786)
    *   **Why it matters:** Significant performance degradation.
    *   **Details:** UI lags "minutes" behind actual disk writes for ~800 line files, rendering the tool nearly unusable for longer edits.

4.  **[Bug] Image Upload Redundant Params** [#1791](https://github.com/MoonshotAI/kimi-cli/issues/1791)
    *   **Why it matters:** Compatibility issue with third-party providers.
    *   **Details:** Image uploads fail or contain extra parameters when using custom/OpenAI-compatible providers.

5.  **[UX] `/sessions` Shows Pointless Picker** [#1794](https://github.com/MoonshotAI/kimi-cli/issues/1794)
    *   **Why it matters:** Confusing UX workflow.
    *   **Details:** When `/sessions` is run with only the current session available, it shows a picker instead of a simple message.

6.  **[UX] Directory Scope for Sessions** [#1796](https://github.com/MoonshotAI/kimi-cli/issues/1796)
    *   **Why it matters:** Developer workflow efficiency.
    *   **Request:** Add a toggle (Ctrl+A) to view sessions from "All Directories" vs "Current Directory" in the picker.

7.  **[Bug] Slash Command Extra Enter Presses** [#1795](https://github.com/MoonshotAI/kimi-cli/issues/1795)
    *   **Why it matters:** Disruptive flow.
    *   **Details:** Autocomplete for slash commands requires 3 Enter presses to execute instead of 1.

8.  **[Bug] Infinite Exception on CWD Removal** [#1621](https://github.com/MoonshotAI/kimi-cli/issues/1621)
    *   **Why it matters:** App crash stability.
    *   **Details:** Unplugging an external drive (the CWD) causes infinite exceptions in the bottom toolbar rendering.

9.  **[Feature] YOLO Mode for Web Interface** [#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767) *(PR)*
    *   **Why it matters:** Feature parity across interfaces.
    *   **Request:** Extend the popular `--yolo` (auto-approve) mode functionality to the Web UI.

10. **[Enhancement] MCP Tool Name Sanitization** [#1806](https://github.com/MoonshotAI/kimi-cli/issues/1806)
    *   **Why it matters:** Protocol compatibility.
    *   **Details:** MCP tools starting with numbers (e.g., `21st_magic...`) fail API calls; needs client-side sanitization.

---

## 4. Key PR Progress

Top 10 PRs illustrating the current focus on shell stability and feature expansion:

1.  **Refactor: Rewrite to Bun + TypeScript** [#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707)
    *   **Status:** Open (Draft)
    *   **Impact:** A massive community proposal to rewrite the Python codebase in TypeScript/Bun (166 files, ~32k LOC).

2.  **Fix: Slash Command Completion** [#1793](https://github.com/MoonshotAI/kimi-cli/pull/1793)
    *   **Status:** Closed (Merged)
    *   **Change:** Reduced Enter presses from 3 to 1 when accepting slash command completions.

3.  **Fix: Session Picker UX** [#1792](https://github.com/MoonshotAI/kimi-cli/pull/1792)
    *   **Status:** Closed (Merged)
    *   **Change:** Skips the picker entirely if no other sessions exist.

4.  **Feat: Directory Scope Toggle** [#1797](https://github.com/MoonshotAI/kimi-cli/pull/1797)
    *   **Status:** Closed (Merged)
    *   **Change:** Added `Ctrl+A` to the `/sessions` picker to toggle between "Current" and "All" directories.

5.  **Fix: CWD Removal Crash** [#1622](https://github.com/MoonshotAI/kimi-cli/pull/1622)
    *   **Status:** Closed (Merged)
    *   **Change:** Graceful exit with a crash report when the working directory is unplugged/removed.

6.  **Fix: Stream Timeout & Recovery** [#1803](https://github.com/MoonshotAI/kimi-cli/pull/1803)
    *   **Status:** Closed (Merged)
    *   **Change:** Increased LLM read timeout to 30 mins and improved partial stream recovery.

7.  **Fix: Think-Only Response Handling** [#1801](https://github.com/MoonshotAI/kimi-cli/pull/1801)
    *   **Status:** Open
    *   **Change:** Treats "think-only" model responses as errors/incomplete rather than silent stops.

8.  **Fix: Background Task Loop** [#1802](https://github.com/MoonshotAI/kimi-cli/pull/1802)
    *   **Status:** Open
    *   **Change:** Prevents the agent loop from exiting prematurely while background tasks are still running.

9.  **Feat: MCP Tool Sanitization** [#1805](https://github.com/MoonshotAI/kimi-cli/pull/1805)
    *   **Status:** Closed (Merged)
    *   **Change:** Auto-sanitizes MCP tool names starting with numbers to ensure API compatibility.

10. **Feat: Claude-Compatible Local Plugins** [#1715](https://github.com/MoonshotAI/kimi-cli/pull/1715)
    *   **Status:** Open (Draft)
    *   **Impact:** Adds a compatibility layer to load local Claude plugins directly into Kimi CLI.

---

## 5. Feature Request Trends

Based on the latest data, the community is driving towards:

*   **Claude Code Parity:** There is a strong push for features that match Claude Code, specifically the **Three-tier Rules System** and **Local Plugin Support**.
*   **Workflow Flexibility:** Users desire more control over session management, specifically the ability to toggle scopes (current vs. all directories) and better handling of session persistence.
*   **Protocol Compatibility:** Enhancing support for **MCP (Model Context Protocol)** servers and **third-party OpenAI-compatible providers** is a high priority.

---

## 6. Developer Pain Points

*   **UX Friction in the Shell:** Developers are frustrated by the "sticky" or "clunky" nature of the TTY interface, specifically citing extra key presses for commands, confusing pickers, and input freezing (raw mode issues).
*   **Performance Lag:** The UI rendering engine struggles with longer outputs (~800 lines), lagging minutes behind the actual state, which disrupts the "flow" state.
*   **Stability on Edge Cases:** Common environment changes, such as unplugging a drive (CWD removal) or momentary network hiccups during streaming, result in crashes or silent failures rather than graceful recoveries.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-09

## 1. Today's Highlights

The release of **OpenCode v1.4.0** introduces breaking changes to the SDK's data model to address performance issues, specifically modifying how diff metadata is stored. Community focus remains heavily split between mitigating persistent memory leaks—affecting both core and subagent processes—and refining the "Plan Mode" to better mimic competitor workflows. Additionally, a new macOS sandboxing feature has been proposed via Pull Request to enhance security for bash commands.

## 2. Releases

**v1.4.0 (Latest)**
This release prioritizes performance optimization over backward compatibility.
*   **Breaking Changes:** The SDK data model for edit and patch tools has changed. Diff metadata will no longer include `to` and `from` fields containing full file contents, aiming to reduce payload size and improve processing speed.
*   [View Release Details](https://github.com/anomalyco/opencode/releases)

## 3. Hot Issues

*   **[#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (👍 19)
    *   **Impact:** Critical. The core team is aggregating scattered reports of memory leaks into a central investigation.
    *   **Community:** Developers are being asked to provide heap snapshots rather than anecdotal solutions.
*   **[#3743 Loop in certain models](https://github.com/anomalyco/opencode/issues/3743)** (👍 10)
    *   **Impact:** High. Users report infinite loops with specific models (KIMI, MiniMax, GLM) where the agent repeats the same tool call indefinitely.
*   **[#2632 Default permissions allow editing files and executing any commands](https://github.com/anomalyco/opencode/issues/2632)** (👍 3)
    *   **Impact:** Security/Workflow. A debate on whether OpenCode should default to "deny all" for file edits and critical commands, similar to other AI coding tools.
*   **[#5474 & #4704 `/undo` command inconsistencies](https://github.com/anomalyco/opencode/issues/5474)**
    *   **Impact:** UX frustration. The `/undo` command currently rolls back chat history but fails to revert actual file changes, causing state mismatches.
*   **[#3844 Plan mode questions like claude code](https://github.com/anomalyco/opencode/issues/3844)** (👍 123)
    *   **Impact:** Feature Request. The most upvoted recent issue requests the ability for the agent to ask clarifying questions during "Plan Mode," a feature popular in Claude Code.
*   **[#20995 Gemma 4 tool calling fails via Ollama](https://github.com/anomalyco/opencode/issues/20995)** (👍 26)
    *   **Impact:** Compatibility. OpenCode fails to recognize streaming `tool_calls` from Gemma 4 when run through Ollama's OpenAI-compatible API.
*   **[#12741 Opencode not auto-detecting skills](https://github.com/anomalyco/opencode/issues/12741)** (👍 7)
    *   **Impact:** Functionality. Users report that skills placed in the standard `~/.agents/skills/**` directory are not being picked up despite documentation claims.
*   **[#9808 Support for sudo and password-requiring commands](https://github.com/anomalyco/opencode/issues/9808)** (👍 19)
    *   **Impact:** DevEx. The Bash tool ignores stdin, breaking commands requiring interactive passwords (e.g., `sudo`, `ansible-playbook`).
*   **[#21578 Restore per-session auto-accept permissions](https://github.com/anomalyco/opencode/issues/21578)**
    *   **Impact:** Regression. In v1.4.0, the auto-accept toggle was moved to global settings; users want it back at the session level for flexible security.
*   **[#21550 Agent shell commands crash backend on Windows](https://github.com/anomalyco/opencode/issues/21550)**
    *   **Impact:** Stability. Running parallel or heavy analysis tools (like `dart analyze`) causes the OpenCode server to crash specifically on Windows.

## 4. Key PR Progress

*   **[#21538 Add macOS bash commands sandboxing](https://github.com/anomalyco/opencode/pull/21538)**
    *   **Status:** Open. introduces an experimental `sandbox-exec` feature for macOS, restricting shell commands to specific rulesets (e.g., network, file writing) for enhanced security.
*   **[#21589 Normalize missing array items in tool schemas](https://github.com/anomalyco/opencode/pull/21589)**
    *   **Status:** Open. Aims to fix validation failures with OpenAI-compatible providers (like MCP tools) by automatically normalizing schemas missing `items` definitions.
*   **[#21490 Move PTY connection to custom auth check](https://github.com/anomalyco/opencode/pull/21490)**
    *   **Status:** Closed (Merged?). Addresses critical connectivity issues between the web server and terminalPTYs following the Bun to Node migration.
*   **[#21586 Add trigger words for inline image attachments](https://github.com/anomalyco/opencode/pull/21586)**
    *   **Status:** Open. Fixes auto-activation of vision skills by injecting trigger words (e.g., "analyze", "screenshot") when users send inline images.
*   **[#20491 Add Kiro provider](https://github.com/anomalyco/opencode/pull/20491)**
    *   **Status:** Open. Adds support for AWS CodeWhisperer (Kiro), which requires a custom binary event stream protocol handler rather than standard SSE.
*   **[#18767 Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)**
    *   **Status:** Open. A significant UI overhaul to improve responsiveness for touch devices, addressing mobile web app usage.
*   **[#13321 Robust subagent completion propagation](https://github.com/anomalyco/opencode/pull/13321)**
    *   **Status:** Open. Targets the "hanging subagent" bug where the main session freezes because the subagent completion signal is lost.
*   **[#20677 Voice Mode (STT/TTS)](https://github.com/anomalyco/opencode/pull/20677)**
    *   **Status:** Open. A major feature addition implementing Speech-to-Text, Text-to-Speech, and continuous voice activity detection (VAD) for voice-controlled coding.
*   **[#20675 Harden serve mode](https://github.com/anomalyco/opencode/pull/20675)**
    *   **Status:** Open. Implements a "next-generation" permission system with granular tool and directory controls to make remote server usage safer.
*   **[#21572 Sort messages by creation time](https://github.com/anomalyco/opencode/pull/21572)**
    *   **Status:** Open. Fixes logic errors in session history where message IDs were assumed to be chronological, leading to messages appearing out of order.

## 5. Feature Request Trends

*   **"Claude Code" Parity:** There is a strong trend of requesting features observed in Anthropic's Claude Code, specifically interactive **Plan Mode** questioning and utilizing its source code for optimization ideas.
*   **Security & Granularity:** Users are demanding finer control over permissions. The shift from session-level to global settings in v1.4.0 was negatively received; developers want to configure security boundaries per-project or per-session.
*   **Model Interoperability:** Requests are increasing for better support for diverse local and API providers (Ollama, Kiro/AWS, Gemma), specifically around streaming tool calls and avoiding provider-specific header pollution.

## 6. Developer Pain Points

*   **The `/undo` Paradox:** A major source of friction is the disconnect between the chat history and the file system. Users expect "Undo" to be atomic—reverting both conversation and code—but currently, it only reverts the conversation.
*   **Subagent Opacity:** Developers are frustrated by subagents (explore/tasks) that hang, crash, or provide responses that never propagate back to the main agent session.
*   **Platform Instability:** Windows users are reporting a disproportionate number of critical bugs compared to macOS/Linux, ranging from backend crashes during analysis to the web UI failing to load lists.
*   **Memory Bloat:** Despite the "Megathread" efforts, memory consumption remains the top performance concern, particularly during long coding sessions or when using the "compact" operation.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-09

## 1. Today's Highlights
The Qwen Code team released **v0.14.2**, prioritizing stability fixes for the VS Code IDE companion, specifically resolving a "blank screen" issue in the webview (PR #2959) and correcting exit code handling for signal kills. While the release stream was temporarily hampered by workflow failures, significant development progress continues in the background, focusing on LSP diagnostics reliability, terminal UI performance (flickering fixes), and advanced context management features like micro-compaction.

## 2. Releases
*   **v0.14.2** (Stable)
    *   **Fix (IDE):** Resolves critical blank screen bug in VS Code 0.14.1 webview caused by webview initialization failures ([#2959](https://github.com/QwenLM/qwen-code/pull/2959)).
    *   **Fix (Core):** Prevents signal kills (e.g., SIGTERM) from incorrectly collapsing to exit code 0, ensuring accurate termination status reporting ([PR Link](https://github.com/QwenLM/qwen-code/pull/)).
*   **v0.14.1-nightly** & **v0.14.0-preview.6**
    *   Both channels cherry-picked the VS Code webview fix to stabilize the user experience across development and preview branches.

## 3. Hot Issues
1.  **[#2395](https://github.com/QwenLM/qwen-code/issues/2395) - Input Lag (Priority P1)**
    *   **Impact:** Users report severe latency (5+ seconds) in the chat window on Windows 11.
    *   **Reaction:** High priority (P1); significantly affects typing usability.
2.  **[#3032](https://github.com/QwenLM/qwen-code/issues/3032) - No Native Chat Deletion**
    *   **Impact:** VS Code users cannot delete chats via the UI; forced to manually scrub files in `~/.qwen/`.
    *   **Reaction:** Highly requested basic hygiene feature for workspace management.
3.  **[#2973](https://github.com/QwenLM/qwen-code/issues/2973) - Poor System Prompt Adherence**
    *   **Impact:** The model frequently ignores specific instructions defined in system prompts.
    *   **Reaction:** Raises concerns about agent reliability and controllability.
4.  **[#2721](https://github.com/QwenLM/qwen-code/issues/2721) - "iflow CLI" Feature Requests**
    *   **Impact:** Users asking to adopt specific features from the deprecated `iflow` CLI (better session management `/chat`).
    *   **Reaction:** Indicates demand for manual session control over auto-saving.
5.  **[#3033](https://github.com/QwenLM/qwen-code/issues/3033) - MCP Incompatibility**
    *   **Impact:** VS Code extension fails to work with Unity MCP, though CLI works fine.
    *   **Reaction:** Highlights integration gaps between the CLI and IDE extensions.
6.  **[#3007](https://github.com/QwenLM/qwen-code/issues/3007) - Interface Flickering**
    *   **Impact:** TUI flickers when losing focus or expanding tool calls (`Ctrl+E`).
    *   **Reaction:** Major UX friction point; "affects user experience" was emphasized.
7.  **[#2951](https://github.com/QwenLM/qwen-code/issues/2951) - Hardcoded Configuration Paths**
    *   **Impact:** `~/.qwen` is hardcoded; breaks workflows using external network mounts for persistent storage.
    *   **Reaction:** Developers need `ENV` variable support for config paths.
8.  **[#3029](https://github.com/QwenLM/qwen-code/issues/3029) - Empty LSP Diagnostics**
    *   **Impact:** `diagnostics` for TypeScript/vtsls return empty results, breaking code analysis.
    *   **Reaction:** Critical for users relying on Qwen Code for project-aware diagnostics.
9.  **[#66](https://github.com/QwenLM/qwen-code/issues/66) - Repetitive File Reading Loops**
    *   **Impact:** Agent gets stuck reading the same file content repeatedly in hidden loops.
    *   **Reaction:** "Unusable" performance on larger files; indicates tokenizer/context handling bug.
10. **[#2955](https://github.com/QwenLM/qwen-code/issues/2955) - Command Permission Truncation**
    *   **Impact:** Long commands (e.g., chained shell scripts with `&&`) are truncated in permission prompts.
    *   **Reaction:** Security risk as users cannot see the full command they are approving.

## 4. Key PR Progress
1.  **[#2916](https://github.com/QwenLM/qwen-code/pull/2916) - Context Usage API**
    *   **Feature:** Exposes `/context` command and `getContextUsage()` API for non-interactive/SDK modes.
    *   **Value:** Enables monitoring token consumption programmatically, essential for automation.
2.  **[#3034](https://github.com/QwenLM/qwen-code/pull/3034) - LSP Diagnostics Fallback**
    *   **Fix:** Caches `textDocument/publishDiagnostics` and uses them as fallback when pull requests fail.
    *   **Value:** Significantly improves reliability of code analysis for servers like TypeScript.
3.  **[#3013](https://github.com/QwenLM/qwen-code/pull/3013) - Terminal UI Stability**
    *   **Fix:** Adds `SlicingMaxSizedBox` to prevent rendering stuttering on large tool outputs (e.g., `npm install`).
    *   **Value:** Directly addresses "Interface Flickering" complaints; smoother TUI experience.
4.  **[#3006](https://github.com/QwenLM/qwen-code/pull/3006) - Context Micro-compaction**
    *   **Feature:** Automatically clears old tool results from history after 60 mins of idle time.
    *   **Value:** Reduces token costs and context drift during long-running sessions.
5.  **[#2932](https://github.com/QwenLM/qwen-code/pull/2932) - Enhanced `/review`**
    *   **Feature:** Upgrades review agent with deterministic analysis, autofix, and security hardening.
    *   **Value:** Brings Qwen's review capabilities closer to enterprise tools like Copilot.
6.  **[#3022](https://github.com/QwenLM/qwen-code/pull/3022) - Session Forking (`/branch`)**
    *   **Feature:** Adds `/branch` command to fork the current conversation into an independent session.
    *   **Value:** Allows exploration of different solutions without losing the original context.
7.  **[#2850](https://github.com/QwenLM/qwen-code/pull/2850) - Permission Rule Matching**
    *   **Fix:** Normalizes shell commands with environment variables (e.g., `VAR=1 cmd`) to match saved permission rules.
    *   **Value:** Stops annoying repeated permission prompts for allowed commands.
8.  **[#2949](https://github.com/QwenLM/qwen-code/pull/2949) - Model Override in Skills**
    *   **Feature:** Skills can now specify a `model` field in frontmatter to override the session default.
    *   **Value:** Enables fine-tuned control (e.g., using a cheaper model for specific steps).
9.  **[#3031](https://github.com/QwenLM/qwen-code/pull/3031) - IDE Diff Fallback**
    *   **Fix:** If IDE diff fails (disconnection/MCP error), falls back to CLI confirmation.
    *   **Value:** Prevents the agent from halting if the VS Code extension disconnects.
10. **[#2548](https://github.com/QwenLM/qwen-code/pull/2548) - Secondary Picker for `/skills`**
    *   **Feature:** Visual picker for skills in VSCode instead of typing the full command.
    *   **Value:** Improves discoverability and usability of skills in the IDE.

## 5. Feature Request Trends
*   **CLI vs. IDE Parity:** A strong trend (Issues #2721, #3025) requesting features from `iflow` CLI (specifically manual session management via commands like `/chat`) to be integrated into Qwen Code. Users find the auto-save naming convention difficult to manage.
*   **Workflow Management:** Users are demanding better state management, including deleting chats (#3032), restoring previous approval modes (#3008), and manual configuration paths (#2951).

## 6. Developer Pain Points
*   **UI Instability:** "Flickering" and "Input Lag" remain top complaints. The PR #3013 attempts to fix flickering, but lag (#2395) is still outstanding.
*   **Context Loss:** Issues with "loops" (#66) and "bad context usage" (#2973) suggest the context window management is still aggressive, often discarding vital instructions or getting stuck in read loops.
*   **Environment Configuration:** The lack of environment variable support for standard directories (like `.qwen`) is a blocker for developers using non-standard filesystems or network storage.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*