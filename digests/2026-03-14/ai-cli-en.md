# AI CLI Tools Community Digest 2026-03-14

> Generated: 2026-03-14 00:10 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Report: 2026-03-14

## 1. Ecosystem Overview
The AI CLI tools ecosystem is currently undergoing a critical maturation phase, shifting from rapid feature addition to deep stability and workflow integration. Today’s landscape is defined by a universal struggle with **Agent Reliability**—specifically regarding "silent failures" and "runaway loops"—indicating that raw model capabilities are outpacing the tooling required to control them. While major players like **OpenAI Codex** and **Claude Code** grapple with platform-specific instability (Windows/Intel Mac support) and authentication regressions, ecosystem extensions like **Gemini CLI** and **Pi Mono-Repo** are driving innovation in "Agent Skills" and multi-model reasoning protocols. Simultaneously, vertical market tools like **Kimi Code** and **LLXprt** are optimizing for specific operational edges (context management, reasoning blocks) that the general-purpose tools have yet to address effectively.

## 2. Activity Comparison

| Tool | Repository | Issue Activity | PR Progress | Release Status | Focus Trend |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | `anthropics/claude-code` | High (Clipboard, Auth, MCP regressions) | Moderate (Plugin extensibility focus) | **v2.1.75** (Patch cadence) | Workflow Friction & Plugin Extensibility |
| **OpenAI Codex** | `openai/codex` | Critical (Windows data loss, 401 Auth) | High (Rust core refactoring) | **v0.115.0-alpha** (Rapid-fire) | Platform Parity & Infrastructure Hardening |
| **Gemini CLI** | `google-gemini/gemini-cli` | Moderate (Plan Mode reliability) | High (A2A Protocols & Memory) | **v0.35.0-nightly** | Agent Memory & Communication Protocols |
| **GitHub Copilot** | `github/copilot-cli` | Elevated (Autopilot loops, MCP breaks) | Low (No PRs merged in 24h) | **v1.0.5** (Feature release) | Agent Control & UI Stability |
| **Kimi Code** | `MoonshotAI/kimi-cli` | Low (6 updated issues) | Moderate (E2E testing & Shell) | **v1.22.0** | Input Stability & Prompt Handling |
| **OpenCode** | `anomalyco/opencode` | Critical (Memory leaks, macOS panics) | High (Plugin SDK & SDK) | **v1.2.26** | Resource Management & Extensibility |
| **Qwen Code** | `QwenLM/qwen-code` | Moderate (Shell exits, Tool calls) | High (Agent Arena & SEA Binaries) | **v0.12.3** | Competitive Evaluation & Distribution |
| **LLXprt-Code** | `vybestack/llxprt-code` | Focused (Claude thinking block bugs) | Focused (Upstream Sync) | *No release* | Reasoning Model Parsing |
| **Pi Mono-Repo** | `badlogic/pi-mono` | Elevated (TUI artifacts, Token counts) | High (LLM Edge Case Handling) | *No release* | Multi-model Support & Extension APIs |

## 3. Shared Feature Directions
*   **Agent Control & "Stop" Mechanisms:**
    *   **GitHub Copilot** (#1532) and **Gemini CLI** (#21925) are struggling with "Runaway Agents," where Autopilot or Plan modes ignore user instructions to stop or enter infinite loops.
    *   **Claude Code** (#16561) seeks granular permissions to interrupt compound bash commands, while **Pi Mono-Repo** (#2119) needs better handling of agent loop hangs.
*   **Reliability & Verification (The "Silent Failure" Epidemic):**
    *   **Claude Code** (#32755) and **OpenCode** (#17318) are prioritizing verification hooks to ensure edits actually happened.
    *   **Qwen Code** (#2360) and **Pi Mono-Repo** (#2118) are actively fixing edge cases where Tool Calling protocols break or API providers return malformed responses.
*   **Enhanced Extensibility (Plugin/Skills Ecosystems):**
    *   **Claude Code**, **Gemini CLI**, and **Qwen Code** are all rapidly developing "Agent Skills" or "Plugin" systems to allow users to define custom behaviors and tools.
    *   **OpenCode** is expanding its Plugin SDK to allow deeper access to AI context and routing.
*   **Resource & Session Management:**
    *   **Kimi Code** (v1.22.0), **OpenCode** (v1.2.26), and **Pi Mono-Repo** (#2130) are heavily focused on session persistence, preventing memory leaks, and handling large context windows without crashing.

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User Profile | Technical Differentiator |
| :--- | :--- | :--- | :--- |
| **OpenAI Codex** | **Ecosystem Dominance** | Enterprise Teams locked into O365/Azure | Rust-based "App Server" architecture & ChatGPT integration. |
| **Claude Code** | **Coding Friction** | Frontend/Backend Developers needing high-context edits | MCP (Model Context Protocol) native support & large context windows (Sonnet 1M). |
| **OpenCode** | **Provider Agnostic** | "Power Users" & Infrastructure Engineers | Universal Model Adapter (supports 20+ providers) & robust extensibility. |
| **Pi Mono-Repo** | **Prototypers** | Researchers & Agent Developers | Extension-first architecture allowing in-CLI runtime modification. |
| **Gemini CLI** | **Agentic Workflows** | Early Adopters testing "Agent-to-Agent" logic | Advanced Memory compression & A2A communication protocols. |
| **Kimi Code** | **Interface Polish** | Developers valuing UI/UX and Shell integration | Advanced Slash Command menus & robust "Prompt Placeholder" management. |
| **GitHub Copilot** | **IDE Native** | VS Code / GitHub ecosystem loyalists | Deep integration with `.github` workflows and Copilot "Plans." |

## 5. Community Momentum & Maturity
*   **High Maturity, High Friction:** **OpenAI Codex** and **Claude Code** possess the largest user bases but are currently facing the most significant "growing pains," specifically regarding platform instability (Windows support for Codex, Clipboard/Theme bugs for Claude) and authentication. Their communities are loud and active because the tools are business-critical.
*   **Rapid Iterators:** **Gemini CLI** and **Qwen Code** are displaying the highest velocity of feature development (Nightly builds, "Agent Arena" features), suggesting a willingness to experiment with new agentic paradigms (A2A, Multi-model comparison) that the incumbents are moving slower on.
*   **Niche Stability:** Tools like **Pi Mono-Repo** and **OpenCode** foster highly technical communities focused on "building on top of" the tool (extensions, multi-tenant wrappers), resulting in more sophisticated bug reports regarding API specs and architectural limits rather than UI complaints.

## 6. Trend Signals
*   **The "Thinking" Problem:** As models like Claude Sonnet and GPT-5.3 move toward "Chain of Thought" (reasoning tokens), CLI tools are racing to standardize how they parse, display, and charge for these "thinking blocks." Issues in **LLXprt**, **Pi Mono-Repo**, and **Gemini CLI** all indicate that the current text-streaming UI paradigm is breaking when handling mixed reasoning/content responses.
*   **Local-First & Offline Capabilities:** There is a marked increase in requests for **Local MCP Servers**, **Binary-only distributions** (Qwen SEA support), and **Air-gapped compatibility** (OpenCode Web UI issues). Developers are signaling a preference for tools that do not require phoning home for basic operations.
*   **OS-Level Integration Fatigue:** Users are increasingly intolerant of tools that do not respect OS conventions. The top-voted issues across **Claude Code** (Clipboard/Theme), **Kimi Code** (macOS Shortcuts), and **OpenAI Codex** (Windows Menus) are all about the tool feeling like a "native" part of the OS rather than a web-app wrapper.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of March 14, 2026*

## 1. Top Skills Ranking
Based on the most active discussions in the community, these Skills are leading the ecosystem in innovation and utility.

*   **[shodh-memory skill](https://github.com/anthropics/skills/pull/154)** by @varun29ankuS
    *   **Functionality:** A persistent memory system for AI agents, maintaining context across conversations by surfacing relevant memories proactively.
    *   **Status:** Open
    *   **Insight:** Addresses one of the most critical gaps in AI workflows—persistence and context continuity.

*   **[masonry-generate-image-and-videos skill](https://github.com/anthropics/skills/pull/335)** by @junaid1460
    *   **Functionality:** CLI integration for AI-powered generation (Imagen 3.0, Veo 3.1), including job management and history tracking.
    *   **Status:** Open
    *   **Insight:** High demand for multi-modal content generation directly within the coding environment.

*   **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** by @eovidiu
    *   **Functionality:** Meta-skills that evaluate other skills across structure, documentation, security, and stability dimensions.
    *   **Status:** Open
    *   **Insight:** Essential for maintaining ecosystem health as the number of community skills grows.

*   **[codebase-inventory-audit skill](https://github.com/anthropics/skills/pull/147)** by @p19dixon
    *   **Functionality:** Systematic 10-step workflow to identify orphaned code, unused files, and documentation gaps.
    *   **Status:** Open
    *   **Insight:** Reflects a strong community desire for automated maintenance and cleanup of complex projects.

*   **[document-typography skill](https://github.com/anthropics/skills/pull/514)** by @PGTBoos
    *   **Functionality:** Quality control for generated documents, fixing orphan/widow lines and numbering misalignment.
    *   **Status:** Open
    *   **Insight:** Focuses on professional polish for AI-generated content, addressing a niche but frequent user complaint.

## 2. Community Demand Trends
Analysis of active Issues reveals where the community is pushing for future capabilities.

*   **Core Infrastructure Improvements:** There is significant noise regarding stability, specifically API errors (500s) when deleting or uploading skills (Issues [#403](https://github.com/anthropics/skills/issues/403), [#406](https://github.com/anthropics/skills/issues/406)).
*   **Governance and Security:** Users are requesting "agent-governance" patterns for safety, policy enforcement, and audit trails (Issue [#412](https://github.com/anthropics/skills/issues/412)). Additionally, concerns are rising about namespace impersonation (Issue [#492](https://github.com/anthropics/skills/issues/492)).
*   **Sandbox and Evaluation:** Developers are asking for better tooling to test skills locally. The `skill-creator` is criticized for being too "documentarian" rather than operational, and `run_eval.py` is reported to have a 0% trigger rate (Issues [#202](https://github.com/anthropics/skills/issues/202), [#556](https://github.com/anthropics/skills/issues/556)).

## 3. High-Potential Pending Skills
The following Pull Requests have recent activity and are likely to impact the ecosystem soon:

*   **[ODT skill (OpenDocument Text)](https://github.com/anthropics/skills/pull/486)**: Adds support for ISO standard ODT files, enabling template filling and parsing to HTML. Critical for enterprise/LibreOffice users.
*   **[record-knowledge skill](https://github.com/anthropics/skills/pull/521)**: Solves session-loss by allowing Claude to record tagged knowledge in `.claude/knowledge/entries/`, ensuring persistence across sessions.
*   **[SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)**: Bridges the gap between Claude and SAP data using the open-source tabular foundation model.
*   **[Google Workspaces skills (gog-email, etc.)](https://github.com/anthropics/skills/pull/299)**: A suite of 6 agent skills functioning as a personal assistant for emails, calendars, and tasks.

## 4. Skills Ecosystem Insight
The community is currently prioritizing **Infrastructure and Persistence**—shifting focus from simple content generation tools to complex systems that maintain memory, ensure security, and integrate deeply with enterprise data sources (SAP, ODT) and external APIs (MCP, Google Workspace).

---

# Claude Code Community Digest — 2026-03-14

## 1. Today's Highlights
The community remains intensely focused on core usability friction points, with a **terminal copy/paste bug** accumulating 98 upvotes and significant discussion regarding **MCP tool parallelization** regressing to sequential execution. On the extensibility front, several critical plugin Pull Requests have opened, including a highly requested **Sessions management plugin** and an **Edit Verifier** to prevent silent code-edit failures, indicating a strong push to improve the developer workflow via community extensions.

## 2. Releases
**v2.1.75** was released today. While specific patch notes are not detailed in the data, the release coincides with reports of continued scrolling jitter and potential plugin caching regressions.

## 3. Hot Issues

*   [#18170: Copy/paste from terminal includes unwanted indentation and trailing spaces](https://github.com/anthropics/claude-code/issues/18170)
    *   **Why it matters:** Affects basic developer workflows. Copying code from the TUI introduces visual indentation artifacts, breaking code execution and requiring manual cleanup.
    *   **Reaction:** The most active thread (51 comments) with 98 upvotes.

*   [#2990: Automatic light/dark theme selection](https://github.com/anthropics/claude-code/issues/2990)
    *   **Why it matters:** Users struggle with legibility when switching between system themes, as Claude Code requires manual theme adjustment.
    *   **Reaction:** Long-standing request with 174 upvotes.

*   [#17087: Claude Code creates empty read-only dotfiles](https://github.com/anthropics/claude-code/issues/17087)
    *   **Why it matters:** Bug causes clutter in working directories during Bash tool execution, creating read-only files that annoy developers and potentially dirty git repos.
    *   **Reaction:** 69 upvotes; recently marked as closed.

*   [#16561: Parse compound Bash commands against permissions](https://github.com/anthropics/claude-code/issues/16561)
    *   **Why it matters:** Current permission logic treats `cmd1 && cmd2` as a single block, forcing approval for safe commands. Granular parsing would significantly reduce interrupt friction.
    *   **Reaction:** 78 upvotes.

*   [#26428: Sonnet 1M context window disappeared](https://github.com/anthropics/claude-code/issues/26428)
    *   **Why it matters:** Regression for Max plan users losing access to high-context models.
    *   **Reaction:** Closed, but generated 48 comments from paid users.

*   [#14353: MCP tools running sequentially instead of in parallel](https://github.com/anthropics/claude-code/issues/14353)
    *   **Why it matters:** Critical performance regression for users relying on fast, concurrent MCP tool execution.
    *   **Reaction:** 11 upvotes; impacts agent efficiency.

*   [#34167: High-frequency version polling requests (~2-4/min)](https://github.com/anthropics/claude-code/issues/34167)
    *   **Why it matters:** Excessive network polling creates noise and potential resource usage concerns.
    *   **Reaction:** New issue, currently being triaged.

*   [#34178: DISABLE_TELEMETRY disables Opus 1M model](https://github.com/anthropics/claude-code/issues/34178)
    *   **Why it matters:** Users setting privacy flags are inadvertently losing access to premium model features.
    *   **Reaction:** Critical configuration bug for Enterprise/Max users.

*   [#32726: VSCode extension panel steals focus](https://github.com/anthropics/claude-code/issues/32726)
    *   **Why it matters:** Disrupts typing flow when the extension auto-reveals.
    *   **Reaction:** High-impact UX friction for IDE users.

*   [#30640: Native installer doesn't work on FreeBSD](https://github.com/anthropics/claude-code/issues/30640)
    *   **Why it matters:** Highlights portability gaps for non-standard operating systems.
    *   **Reaction:** 19 upvotes; bot closed without discussion.

## 4. Key PR Progress

*   [#34168: feat(plugins): Sessions plugin](https://github.com/anthropics/claude-code/pull/34168)
    *   **Description:** Adds project-scoped `/sessions:list` and `/sessions:delete` commands.
    *   **Impact:** Addresses the top request for session management, allowing devs to clean up history without leaving the terminal.

*   [#32755: feat(plugins): add edit-verifier plugin](https://github.com/anthropics/claude-code/pull/32755)
    *   **Description:** Implements a PostToolUse hook to verify that text edits actually changed files.
    *   **Impact:** Solves the "silent failure" problem where Claude proceeds assuming an edit worked when it didn't.

*   [#23348: feat(plugin): Add windows-null-redirect-fix](https://github.com/anthropics/claude-code/pull/23348)
    *   **Description:** Prevents creation of literal files named `nul` on Windows when redirecting output.
    *   **Impact:** Fixes a specific, high-frequency annoyance for Windows Git Bash users.

*   [#33918: feat: add voice-mode plugin](https://github.com/anthropics/claude-code/pull/33918)
    *   **Description:** Bridges the gap for the `/voice` command in versions where it returns "Unknown skill".
    *   **Impact:** Restores functionality for voice input users via community plugin.

*   [#34010: Add three new client websites...](https://github.com/anthropics/claude-code/pull/34010)
    *   **Description:** Adds full projects (Landing pages, Building Inspection AI) to the repo.
    *   **Impact:** Expands the repository's showcase examples and demo capabilities.

*   [#33710: Add complete town simulator game](https://github.com/anthropics/claude-code/pull/33710)
    *   **Description:** Contributes a complex JS/Canvas game simulation.
    *   **Impact:** Provides a substantial codebase for testing complex agentic capabilities.

*   [#30596: docs: add CLAUDE.md](https://github.com/anthropics/claude-code/pull/30596)
    *   **Description:** Comprehensive documentation for repo structure and conventions.
    *   **Impact:** Critical for onboarding AI agents and new contributors to the codebase standards.

## 5. Feature Request Trends
*   **State & Session Management:** There is a distinct demand for better control over Claude Code's persistent state, specifically the ability to programmatically list, delete, and archive sessions (Issues #30869, #34168, #34199).
*   **System Integration:** Users want tighter OS integration, specifically automatic theme switching (Issue #2990) and proper handling of OS-level input/output quirks (Issue #18170).
*   **Granular Permissions:** Developers are seeking finer control over agent permissions, particularly regarding compound bash commands (Issue #16561) and stricter verification of tool results (Issue #32755).

## 6. Developer Pain Points
*   **Clipboard Artifacts:** The TUI copy/paste behavior (Issue #18170) remains the single largest annoyance, breaking the flow of moving code from the terminal to the editor.
*   **Silent Failures:** A lack of verification in the tool chain—specifically the Edit tool and MCP connectors—leads to confusing "black box" failures where the AI assumes success but the system fails (Issues #32755, #32450).
*   **Platform Instability:** FreeBSD support is broken (Issue #30640), Windows users face "nul" file creation (Issue #23348), and Linux aarch64 users are reporting broken authentication (Issue #34203), indicating a need for broader platform testing.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-03-14

## 1. Today's Highlights
The Codex ecosystem is seeing rapid iteration on the Rust backend (v0.115.0-alpha series) alongside significant architectural shifts in the Python SDK and execution handling. Community attention is focused on critical Windows desktop app stability issues, ranging from runtime failures to severe file deletion bugs, while feature demand remains high for Intel Mac support and remote development capabilities.

## 2. Releases
**Rust Core & CLI (v0.115.0-alpha.21 -> .15)**
*   **Status:** Rapid-fire alpha releases (7 versions in 24 hours).
*   **Focus:** These releases likely correspond to ongoing infrastructure work regarding `unified-exec` and `app-server` routing seen in recent PRs. While specific release notes are sparse in the feed, the frequency suggests active patching of core daemon processes and shell integration.

## 3. Hot Issues
**Top Community Concerns & Bugs**

*   **[#10450 Remote Development in Desktop App](https://github.com/openai/codex/issues/10450)** (338 👍)
    *   **Why it matters:** The most requested enhancement. Users want the Desktop App to support remote development workflows (SSH/WSL) comparable to VS Code, rather than being restricted to local filesystems.
*   **[#8745 LSP Integration (Auto-detect) for CLI](https://github.com/openai/codex/issues/8745)** (173 👍)
    *   **Why it matters:** Users want the CLI to automatically utilize Language Server Protocol (LSP) for richer code intelligence and diagnostics, reducing the "blind spots" Codex has regarding project structure.
*   **[#10410 macOS Intel (x86_64) Support](https://github.com/openai/codex/issues/10410)** (157 👍)
    *   **Why it matters:** Despite the shift to Apple Silicon, a significant portion of the enterprise user base remains on Intel Macs and are currently unable to use the Desktop App.
*   **[#14487 Critical: Unexpected File Deletion on Windows](https://github.com/openai/codex/issues/14487)** (Critical Bug)
    *   **Why it matters:** A report of the `D:` drive being wiped during execution. This is a critical safety concern for any developer using Codex on Windows.
*   **[#14593 Fast Token Burn with Extension Update](https://github.com/openai/codex/issues/14593)** (High Engagement)
    *   **Why it matters:** Users report that the latest VS Code extension (v26.311.21342) is consuming tokens at an alarming rate, burning through budgets faster than expected.
*   **[#14450 Windows Top Menu Bar Unresponsive](https://github.com/openai/codex/issues/14450)** (13 👍)
    *   **Why it matters:** A regression where the main application menu (File, Edit, View, etc.) fails to respond to clicks on Windows, rendering standard UI interactions impossible.
*   **[#12764 401 Unauthorized in CLI](https://github.com/openai/codex/issues/12764)** (68 comments)
    *   **Why it matters:** A persistent authentication issue where the CLI returns a 401 error when connecting to the backend, blocking workflows for Plus/API users.
*   **[#14198 Codex Stuck on Model 5.4](https://github.com/openai/codex/issues/14198)**
    *   **Why it matters:** Users updating to v0.113.0 are experiencing hangs or "stuck" states specifically when using the `gpt-5.4` model.
*   **[#14628 Support Error Caused Rate Limit Spike](https://github.com/openai/codex/issues/14628)**
    *   **Why it matters:** A user reports that an internal OpenAI error caused their token usage to skyrocket, highlighting concerns about billing safeguards during outages.
*   **[#14364 Windows Runtime Dependency Missing](https://github.com/openai/codex/issues/14364)**
    *   **Why it matters:** The Windows store package fails to launch (error `0xC0000135`), likely due to missing C++ runtime dependencies in the installer.

## 4. Key PR Progress
**Internal Development & Architecture**

*   **[#14615 refactor(tui): move skills loading onto app-server](https://github.com/openai/codex/pull/14615)**
    *   Refactoring the TUI to rely on the app-server for skills API, removing duplicated logic and event handling in the terminal client.
*   **[#14648 Publish Python SDK Core & Bundled Packages](https://github.com/openai/codex/pull/14648)**
    *   Major packaging update splitting the Python SDK into `codex-app-server-sdk-core` and a bundled metapackage, streamlining dependency management.
*   **[#12481 fix(core): auto-unarchive resume targets safely](https://github.com/openai/codex/pull/12481)**
    *   Addresses a bug where archived threads/rollouts could not be safely resumed; adds specific lookup logic to validate archived candidates before restoring them.
*   **[#14619 fix: persist future network host approvals](https://github.com/openai/codex/pull/14619)**
    *   Ensures that "Allow this host in the future" approvals for the managed network proxy persist across sessions, improving workflow continuity.
*   **[#13465 Standardize context fragment handling](https://github.com/openai/codex/pull/13465)**
    *   Unifies model-visible context injection using typed fragments (`DeveloperEnvelope`/`ContextualUserEnvelope`). This is likely the backend fix for various context "leak" or "stale" issues.
*   **[#14643 Add exec-server transport for unified exec](https://github.com/openai/codex/pull/14643)**
    *   Introduces a new `codex-exec-server` crate using stdio JSON-RPC for command execution. This abstracts how Codex runs shell commands, potentially fixing Windows/Linux execution discrepancies.
*   **[#13678 feat(core): add watchdog runtime and prompts](https://github.com/openai/codex/pull/13678)**
    *   Adds a "watchdog" runtime for agent threads, designed to monitor and manage long-running agent tasks with specific prompts and overrides.
*   **[#14609 Move plugin/skill instructions into dev msg](https://github.com/openai/codex/pull/14609)**
    *   Prompt engineering improvement: moves instructions for Apps/Skills/Plugins out of the user message and into the developer message, ensuring they cannot be tampered with by the user or model.
*   **[#14611 Add auth 401 recovery observability](https://github.com/openai/codex/pull/14611)**
    *   Adds detailed logging to Sentry to diagnose the widespread 401 authentication errors reported in issues like #12764.
*   **[#14644 feat: add macOS Mach service sandbox permissions](https://github.com/openai/codex/pull/14644)**
    *   Implements turn-scoped permission requests for macOS Mach services, allowing sandboxed commands in the Desktop App to request specific IPC access securely.

## 5. Feature Request Trends
*   **Cross-Platform Parity:** There is a massive divide between Apple Silicon support and Intel/Windows support. Users are demanding stability and feature parity (Universal Binaries for Mac, stable WSL/Remote support).
*   **IDE Feature Parity:** Users moving from VS Code to the Codex Desktop App miss "Remote Development" (SSH/Containers).
*   **Workflow Integration:** Requests for tighter ChatGPT integration (#2153) and multi-account support (#12029) indicate developers want to fluidly move between "research" (ChatGPT) and "coding" (Codex) without switching accounts or apps.

## 6. Developer Pain Points
*   **Windows Instability:** The Windows experience is currently described as "alpha quality" at best, with critical bugs involving file deletion, unresponsive menus, and launch failures dominating the recent issue tracker.
*   **Authentication Drift:** A significant number of developers are facing 401 Unauthorized errors on the CLI, effectively blocking their ability to work.
*   **Context Management:** While architectural fixes (PR #13465) are in progress, users are still reporting "context compaction" issues and the agent answering old, unrelated questions mid-turn (#14513).
*   **Usage/Billing Anxiety:** High-frequency complaints about tokens burning too fast (#14593) or usage being counted against the wrong models (#13854) suggest a lack of transparency or bugs in the billing metering.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest**
**Date:** 2026-03-14
**Analyst:** AI Technical Reporter

---

### 1. Today's Highlights
The `google-gemini/gemini-cli` repository has released **v0.35.0-nightly** and **v0.34.0-preview.3**, focusing primarily on documentation updates and critical stability patches. In the development ecosystem, significant effort is being directed toward **Agent-to-Agent (A2A)** communication protocols, with new PRs proposing trust validation mechanisms and registry improvements. Meanwhile, user-reported issues highlight growing friction with **Plan Mode** reliability and session continuity during long-running agent tasks.

---

### 2. Releases
*   **v0.35.0-nightly.20260313**:
    *   **Docs:** Updated theme screenshots and added missing themes.
    *   **Refactor:** Internal renaming of the 'return' key to 'enter' for consistency.
    *   [Changelog](https://github.com/google-gemini/gemini-cli/pull/20689)
*   **v0.34.0-preview.3**:
    *   **Patch:** Cherry-pick of `24adacd` to the previous preview branch to address stability issues.
    *   [Changelog](https://github.com/google-gemini/gemini-cli/pull/22391)

---

### 3. Hot Issues
Here are the top issues generating community discussion and maintenance focus:

*   **[#22266](https://github.com/google-gemini/gemini-cli/issues/22266) - Agent "ghosts" context after `/plan` approval**
    *   **Impact:** Critical workflow disruption. Users report that after generating and approving a plan, the agent drops context and fails to execute the steps.
*   **[#21925](https://github.com/google-gemini/gemini-cli/issues/21925) - False "Action Required" hand icon**
    *   **Impact:** UX Confusion. The CLI incorrectly signals that user intervention is needed during long-running shell scripts, causing unnecessary alarm.
*   **[#21779](https://github.com/google-gemini/gemini-cli/issues/21779) - Normalize "reload" vs "refresh"**
    *   **Impact:** Developer Experience. A request to standardize command naming conventions to reduce cognitive load.
*   **[#22028](https://github.com/google-gemini/gemini-cli/issues/22028) - VS Code CLI scrolling bug**
    *   **Impact:** Usability. Clicking anywhere in the terminal forces the scroll to the top, making navigation difficult.
*   **[#21792](https://github.com/google-gemini/gemini-cli/issues/21792) - Epic: Session Continuity**
    *   **Impact:** Strategic. A major initiative addressing context window limitations and memory degradation in long sessions.
*   **[#21688](https://github.com/google-gemini/gemini-cli/issues/21688) - Sub-agent thought formatting**
    *   **Impact:** Readability. Sub-agent status messages are concatenated without spaces, creating unreadable text blocks.
*   **[#21461](https://github.com/google-gemini/gemini-cli/issues/21461) - Shell alias support**
    *   **Impact:** Environment integration. The CLI fails to recognize shell aliases (e.g., from `.bash_profile`), breaking established user workflows.
*   **[#22307](https://github.com/google-gemini/gemini-cli/issues/22307) - Plan mode shows stale plan**
    *   **Impact:** Logic Error. The agent displays the plan from the *previous* request rather than the current one.
*   **[#22191](https://github.com/google-gemini/gemini-cli/issues/22191) - Plan Mode incompatible with ACP**
    *   **Impact:** Integration. Plan Mode enters an infinite loop trying to write files when used with ACP (Abstract Command Protocol?).
*   **[#21421](https://github.com/google-gemini/gemini-cli/issues/21421) - Auto-recommend skill creation**
    *   **Impact:** Intelligence. Request for the agent to proactively suggest creating "Skills" based on user behavior patterns.

---

### 4. Key PR Progress
*   **[#22393](https://github.com/google-gemini/gemini-cli/pull/22393) - Changelog for v0.34.0-preview.3**
    *   Status: Open. Preparing the release notes for the latest preview.
*   **[#21115](https://github.com/google-gemini/gemini-cli/pull/21115) - Audio Waveform Visualizer**
    *   Status: Open. Implements `<AudioWaveform>` component for voice mode state feedback (listening, processing, speaking).
*   **[#22332](https://github.com/google-gemini/gemini-cli/pull/22332) - Move keychain fallback**
    *   Status: Closed. Security hardening to ensure encrypted files are created for all keychain clients.
*   **[#22382](https://github.com/google-gemini/gemini-cli/pull/22382) - Session-specific temp directories**
    *   Status: Closed. Fixes #22198. Prevents task tracker collisions in concurrent sessions.
*   **[#20231](https://github.com/google-gemini/gemini-cli/pull/20231) - MCP OAuth Validation Fix**
    *   Status: Closed. Fixes authentication failures for MCP servers with trailing slashes in URLs.
*   **[#22305](https://github.com/google-gemini/gemini-cli/pull/22305) - LSP Post-Write File Hook**
    *   Status: Closed. Innovative feature that runs Language Server Protocol diagnostics immediately after a file write, giving the agent instant feedback on code errors.
*   **[#21146](https://github.com/google-gemini/gemini-cli/pull/21146) - Support 'ask' decision for BeforeTool hooks**
    *   Status: Open. Enhances the extensibility model, allowing hooks to prompt the user for input dynamically.
*   **[#21812](https://github.com/google-gemini/gemini-cli/pull/21812) - Preserve saved memory in compression**
    *   Status: Open. Critical fix to ensure that durable user memory is not lost during context compression snapshots.
*   **[#21941](https://github.com/google-gemini/gemini-cli/pull/21941) - Disable "Always Allow" option**
    *   Status: Closed. Adds `security.disableAlwaysAllow` setting to harden security against prompt injection attacks.
*   **[#22389](https://github.com/google-gemini/gemini-cli/pull/22389) - A2A Agent Acknowledgment**
    *   Status: Open. Enhances Agent-to-Agent communication with trust validation and registry improvements.

---

### 5. Feature Request Trends
*   **Compression & Memory Management:** A clear trend toward improving how the CLI handles long context windows. Issues #21890, #21892, and #21888 all request better control over summarization and history pruning.
*   **Plan Mode Maturity:** With the rollout of Plan Mode, users are requesting finer control over file paths, tool isolation, and specifically "Self-Awareness" (#21432) so the agent knows how to use Plan Mode itself.
*   **Agent Skills & Discovery:** Users are looking for a more robust ecosystem for installing and managing agent skills (PR #22388) and automatic discovery of local agents via directory structure (PR #22386).

---

### 6. Developer Pain Points
*   **The "Ghosting" Agent:** The most significant frustration today is the agent appearing to accept a plan or command and then silently stalling or dropping context (Issue #22266).
*   **Terminal Noise:** Developers are struggling with "excessive scrolling" and unreadable sub-agent logs. PR #21503 attempts to address this with a "Topic-Action-Summary" model to reduce verbosity.
*   **Shell Integration:** The inability to use standard shell aliases (Issue #21461) and the "Action Required" hand icon appearing during long background tasks (Issue #21925) are breaking the flow of development work.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-14

## 1. Today's Highlights
The release of **v1.0.5** brings immediate quality-of-life improvements, including better path support for file mentions (`@~/...`) and a new `/extensions` command for managing CLI tools. However, the release is shadowed by an uptick in bugs related to **Autopilot mode** (infinite loops) and **Plan mode** logic failures, alongside persistent complaints regarding authorization errors and MCP server connectivity.

## 2. Releases
**v1.0.5 (2026-03-13)**
The latest release focuses on workflow flexibility and system stability.
*   **New `/extensions` Command:** Users can now view, enable, and disable CLI extensions directly from the interface.
*   **Enhanced File Mentions:** The `@` symbol now supports absolute paths (e.g., `@/usr/...`), home directory shortcuts (`@~/...`), and relative parent paths (`@../...`), allowing easier context inclusion from outside the project root.
*   **UI Refinements:** Terminal titles now reset correctly after running `/clear` or `/new`.

## 3. Hot Issues
Below are the top issues from the last 24 hours, selected based on user impact and community activity.

*   **[#1202 Screen flickers with cursor blink](https://github.com/github/copilot-cli/issues/1202)** ⭐ 34
    *   **Issue:** Windows Terminal users experience severe screen flashing and buffer flooding when selecting "No, and tell Copilot what to do differently."
    *   **Impact:** High visual disruption makes the CLI unusable for specific workflows in PowerShell v7.
*   **[#679 Local MCP server is not working as expected](https://github.com/github/copilot-cli/issues/679)** ⭐ 5
    *   **Issue:** Locally configured MCP servers stopped being detected starting in v0.0.359.
    *   **Impact:** Breaks critical integrations; users are requesting a status command to verify server connectivity.
*   **[#1532 Autopilot mode infinite loop](https://github.com/github/copilot-cli/issues/1532)** ⭐ 2
    *   **Issue:** Autopilot enters an infinite loop consuming "premium requests" if the `task_complete` tool is unavailable.
    *   **Impact:** Users face unexpected quota consumption (reportedly ~20%) due to agent logic failures.
*   **[#2002 Passing init from command line broken](https://github.com/github/copilot-cli/issues/2002)**
    *   **Issue:** Running `copilot init` externally creates the folder but fails to generate the `.md` file, exiting prematurely.
    *   **Impact:** Blocks automation scripts and initialization workflows.
*   **[#2022 Changelog Mentions "/extensions" but does nothing](https://github.com/github/copilot-cli/issues/2022)**
    *   **Issue:** The newly released `/extensions` command is unrecognized by the CLI, despite being in the v1.0.5 changelog.
    *   **Impact:** Confusion regarding release parity and documentation.
*   **[#2017 Plan mode ignores exit selection](https://github.com/github/copilot-cli/issues/2017)** ⭐ 1
    *   **Issue:** Selecting "Exit plan mode and I will prompt myself" triggers implementation anyway.
    *   **Impact:** Loss of user control; the agent forces execution against the user's intent.
*   **[#2018 Scroll and selection broken after editing plan](https://github.com/github/copilot-cli/issues/2018)**
    *   **Issue:** Using `ctrl+y` to view/edit a plan breaks terminal scrolling and text selection upon exiting.
    *   **Impact:** Significantly degrades the terminal experience after using the plan editor.
*   **[#1897 You are not authorized](https://github.com/github/copilot-cli/issues/1897)**
    *   **Issue:** Users with Copilot Pro are incorrectly told they lack enterprise/org policies.
    *   **Impact:** Access denials for paid subscribers.
*   **[#1675 Checkpoint restore deletes untracked files](https://github.com/github/copilot-cli/issues/1675)**
    *   **Issue:** Restoring a checkpoint runs `git clean -fd`, permanently deleting untracked files without warning.
    *   **Impact:** Potential data loss during rollback operations.
*   **[#1157 Global Hooks Configuration](https://github.com/github/copilot-cli/issues/1157)** ⭐ 14
    *   **Issue:** Hooks are repo-specific; users want global configuration for `UserPromptSubmit` and `Stop` events.
    *   **Impact:** High demand for consistency across projects.

## 4. Key PR Progress
*No Pull Requests were updated or merged in the last 24 hours based on the current data set.*

## 5. Feature Request Trends
Based on the open issues, the community is strongly advocating for the following enhancements:

*   **Granular Permissions (Security):** There is a push for **per-file operation approval** rather than the current directory-level (`/add-dir`) whitelisting ([#2015](https://github.com/github/copilot-cli/issues/2015)).
*   **Advanced UX/UI:**
    *   **Status Bar:** Users want a rich status bar displaying Model, Context usage (e.g., 45k/200k), and Mode ([#2023](https://github.com/github/copilot-cli/issues/2023)).
    *   **Session Management:** Requests for commands to delete specific sessions from history ([#2019](https://github.com/github/copilot-cli/issues/2019)).
*   **Model & Provider Flexibility:**
    *   Bring-your-own-key (BYOK) support for custom models and providers ([#973](https://github.com/github/copilot-cli/issues/973)).
    *   Ability to disable built-in agent types to prioritize custom agents ([#2024](https://github.com/github/copilot-cli/issues/2024)).
*   **Workflow Optimization:**
    *   True non-blocking message queues for multi-turn sessions ([#2025](https://github.com/github/copilot-cli/issues/2025)).
    *   Queuing work via `Enter` key (remapping) to prevent accidental interruption of current tasks ([#2020](https://github.com/github/copilot-cli/issues/2020)).

## 6. Developer Pain Points
*   **State instability:** The terminal is frequently left in a broken state after quitting (printing raw character sequences like `4;5u`), requiring manual `reset` commands ([#2009](https://github.com/github/copilot-cli/issues/2009)).
*   **Agent Autonomy失控 (Runaway Agents):** Developers are frustrated with Autopilot and Plan modes ignoring explicit instructions to stop or exit, leading to wasted compute and unintended file changes ([#1532](https://github.com/github/copilot-cli/issues/1532), [#2017](https://github.com/github/copilot-cli/issues/2017)).
*   **Authentication Friction:** Excessive auth prompts for MCP servers at startup are blocking workflow entry; users prefer on-demand auth ([#2026](https://github.com/github/copilot-cli/issues/2026)).
*   **Regression Anxiety:** Recent updates (e.g., v0.0.359, v1.0.5) have broken previously working features (MCP servers, command-line init), making developers hesitant to update.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-03-14

## 1. Today's Highlights
Version **1.22.0** has been released, focusing heavily on **session management**, **prompt handling**, and the **shell user experience**. This release introduces a new `PromptPlaceholderManager` to streamline how text and images are handled in the CLI, alongside significant enhancements to the slash command menu. Concurrently, the community has raised several critical UI/UX bugs regarding version 1.21.0, specifically focusing on input stability and cross-platform clipboard support.

## 2. Releases
**Version 1.22.0**
*   **Release Focus:** Enhanced Shell Interaction & Prompt Architecture
*   **Key Changes:**
    *   **Shell Experience:** Improved the slash command completer and menu functionality for faster command discovery.
    *   **Prompt Management:** Introduced `PromptPlaceholderManager` to better handle text and image resolution within custom prompt sessions.
    *   **Reliability:** Added end-to-end tests for shell PTY and session management to ensure stability.
*   *See [PR #1432](https://github.com/MoonshotAI/kimi-cli/pull/1432) for full release details.*

## 3. Hot Issues
*(Note: As only 6 issues were updated in the last 24h, all are listed below)*

*   **[#1383](https://github.com/MoonshotAI/kimi-cli/issues/1383): Membership & Multi-Agent Concurrency Limits**
    *   **Why it matters:** A user reports hitting API rate limits ("restriction") when running two concurrent agent sessions, despite having membership privileges that supposedly support multi-agent scenarios.
    *   **Reaction:** Active discussion (6 comments) suggests confusion about the specific SKU limits versus CLI capabilities.

*   **[#1428](https://github.com/MoonshotAI/kimi-cli/issues/1428): Web UI Attachment Button Triggers Unwanted Submit**
    *   **Why it matters:** Usability bug where clicking the attachment button inadvertently submits the current form, interrupting the user workflow.

*   **[#1433](https://github.com/MoonshotAI/kimi-cli/issues/1433): Clipboard Image Paste Fails on macOS (Cmd+V)**
    *   **Why it matters:** The CLI only handles `Ctrl+V` for images, ignoring the standard macOS `Cmd+V` shortcut. This breaks core functionality for Mac developers.
    *   **Reaction:** High impact issue for macOS users in the latest version.

*   **[#1429](https://github.com/MoonshotAI/kimi-cli/issues/1429): Windows Concurrent Write Permission Errors**
    *   **Why it matters:** Developers on Windows 11 are experiencing `Permission denied` errors, likely due to file locking during concurrent write operations.

*   **[#1427](https://github.com/MoonshotAI/kimi-cli/issues/1427): Verbose Logging on Startup**
    *   **Why it matters:** The CLI outputs excessive log-like content upon launch, cluttering the terminal and potentially hiding relevant information.

*   **[#1426](https://github.com/MoonshotAI/kimi-cli/issues/1426): Input Area Content Disappears (Regression in 1.21.0)**
    *   **Why it matters:** A critical regression where text typed in the input area vanishes once the agent finishes outputting. This disrupts the "interrupt and type" workflow introduced in the previous version.

## 4. Key PR Progress
*(Note: As only 6 PRs were updated in the last 24h, all are listed below)*

*   **[#1432](https://github.com/MoonshotAI/kimi-cli/pull/1432): [Merged] Release Bump to 1.22.0**
    *   **Status:** Closed
    *   **Description:** Official version bump synchronizing `kimi-cli` and `kimi-code` to 1.22.0.

*   **[#1430](https://github.com/MoonshotAI/kimi-cli/pull/1430): [Merged] Refactor Prompt Handling**
    *   **Status:** Closed
    *   **Description:** Introduced `PromptPlaceholderManager` to separate the management of text and image placeholders, improving the robustness of custom prompt sessions and clipboard interactions.

*   **[#1431](https://github.com/MoonshotAI/kimi-cli/pull/1431): [Merged] Shell Slash Command Enhancement**
    *   **Status:** Closed
    *   **Description:** Significant improvement to the shell command completer logic and the menu functionality, making CLI commands easier to discover and execute.

*   **[#1424](https://github.com/MoonshotAI/kimi-cli/pull/1424): [Merged] E2E Testing for Shell PTY**
    *   **Status:** Closed
    *   **Description:** Added comprehensive end-to-end tests specifically for shell PTY operations and session management, addressing stability in the core shell loop.

*   **[#884](https://github.com/MoonshotAI/kimi-cli/pull/884): [Open] Dependency Bump (Ruff 0.15.0)**
    *   **Status:** Open
    *   **Description:** Automated Dependabot PR to update the linter `ruff` from 0.14.14 to 0.15.0.

*   **[#1131](https://github.com/MoonshotAI/kimi-cli/pull/1131): [Open] AgentHooks Support**
    *   **Status:** Open
    *   **Description:** An advanced feature proposal adding `AgentHooks` for extensibility. Includes built-in hooks for security (blocking dangerous commands) and QA (enforcing tests), currently open for dogfooding.

## 5. Feature Request Trends
Based on the issue tracker, the community is asking for:
*   **Cross-Platform Input Parity:** Users demand equal support for macOS shortcuts (e.g., `Cmd+V`) to match Windows/Linux behavior.
*   **Robust Multi-Agent Support:** Clarification and implementation of true concurrent multi-agent capabilities that match membership entitlements.

## 6. Developer Pain Points
*   **Regression Anxiety:** The update to v1.21.0 introduced specific regressions (input clearing) that actively disrupt the developer workflow, creating hesitation to update immediately.
*   **Platform-Specific Bugs:** Developers are facing friction regarding basic OS integration, specifically clipboard handling on macOS and file permissions on Windows.
*   **Noisy Output:** Excessive logging on startup is degrading the user experience, making it harder to focus on actual development tasks within the terminal.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-03-14

**Data Source:** `github.com/anomalyco/opencode`

---

## 1. Today's Highlights

The release of **v1.2.26** focuses on core stability, introducing schema conversion bridges and fixes for session persistence following `git init` operations. Community discourse remains dominated by concerns over resource management, specifically regarding memory leaks causing kernel panics on macOS and a controversial Copilot authentication logic change impacting premium API quotas. Concurrently, the ecosystem is expanding with new plugin capabilities, including authentication hooks and MCP Apps integration.

## 2. Releases

**v1.2.26** (Latest Release)
*   **Schema & Serialization:** Scaffolding for an `effect-to-zod` bridge to assist with schema conversion and improved configuration serialization for Bun installations.
*   **Performance:** Implemented pagination for session history to reduce server load.
*   **Bug Fixes:** Resolved a critical issue where sessions were lost after running `git init` in an existing project.

## 3. Hot Issues

*   **[#8030](https://github.com/anomalyco/opencode/issues/8030) — Copilot Auth Consuming Premium Quota**
    *   **Impact:** Users are reporting that GitHub Copilot integration is incorrectly flagging agent-initiated requests as "user" requests, rapidly depleting monthly quotas.
    *   **Reaction:** Highly critical (176 comments). A PR (#17431) was opened today to explicitly mark compaction messages as agent-initiated to mitigate this.
*   **[#12687](https://github.com/anomalyco/opencode/issues/12687) — macOS Kernel Panic & Memory Leaks**
    *   **Impact:** Reports of "severe memory leak" and disk swelling leading to total system instability (kernel panics) on macOS during intensive use.
    *   **Reaction:** Major concern for developers working on large codebases; highlights a critical need for resource lifecycle management.
*   **[#4340](https://github.com/anomalyco/opencode/issues/4340) — Windows ARM64 Support**
    *   **Impact:** Persistent lack of native support for Windows on ARM architecture.
    *   **Reaction:** High demand (23 👍); as Windows ARM devices become more common, this is a blocking issue for many enterprise developers.
*   **[#7602](https://github.com/anomalyco/opencode/issues/7602) — Native Model Fallback**
    *   **Impact:** OpenCode currently lacks a mechanism to retry a request with a different model if the primary model fails or rate-limits.
    *   **Reaction:** Strong desire for robust failover logic (51 👍) to prevent long-running agent tasks from failing.
*   **[#14289](https://github.com/anomalyco/opencode/issues/14289) — Claude Opus 4.6 Vision Support**
    *   **Impact:** The new Anthropic Opus 4.6 model is not currently flagged as supporting vision within OpenCode, blocking multimodal capabilities.
    *   **Reaction:** Urgent request for developers relying on the latest Claude model for image-heavy tasks.
*   **[#5034](https://github.com/anomalyco/opencode/issues/5030) — Ministral 3 Compatibility**
    *   **Impact:** Integration with Mistral's latest release (Ministral 3) is broken due to role strictness ("system" role not supported).
    *   **Reaction:** Highlights the fragility of provider-specific integrations when new models are released.
*   **[#17318](https://github.com/anomalyco/opencode/issues/17318) — SSE Read Timeouts**
    *   **Impact:** Frequent "SSE read timed out" errors causing file write failures during agent operations.
    *   **Reaction:** Affects core reliability; PR #17414 addresses this by raising default timeouts.
*   **[#17376](https://github.com/anomalyco/opencode/issues/17376) — Web Terminal Auth Loop**
    *   **Impact:** Users are stuck in an infinite authentication loop when trying to open the terminal in OpenCode Web (v1.2.25).
    *   **Reaction:** Breaking workflow for users relying on the web interface for terminal access.
*   **[#17412](https://github.com/anomalyco/opencode/issues/17412) — Plugin Hooks for AI Context**
    *   **Impact:** Plugins cannot inject messages into the AI context, limiting extensibility.
    *   **Reaction:** Developers want more control over the agent's "thought process" via plugins.
*   **[#17406](https://github.com/anomalyco/opencode/issues/17406) — Web UI Requires Internet**
    *   **Impact:** The Web UI proxies assets to a CDN (`app.opencode.ai`), breaking usage in air-gapped or offline environments.
    *   **Reaction:** Critical security and usability concern for enterprise environments.

## 4. Key PR Progress

*   **[#17431](https://github.com/anomalyco/opencode/pull/17431) — Fix Compaction Request Classification**
    *   Ensures synthetic messages sent during context compaction are tracked as "agent-initiated" to stop them from consuming premium user quota.
*   **[#15646](https://github.com/anomalyco/opencode/pull/15646) — Fix Memory Leaks (SSE, LSP, Bus)**
    *   Addresses the root causes of unbounded memory growth, specifically targeting cleanup for SSE streams, LSP clients, and the process bus.
*   **[#15926](https://github.com/anomalyco/opencode/pull/15926) — MCP Apps Support**
    *   Integrates the MCP Apps protocol, allowing servers to render rich, interactive UIs within sandboxes iframes.
*   **[#16941](https://github.com/anomalyco/opencode/pull/16941) — Extend Plugin SDK**
    *   Adds `getAuth`, routing, and model selection to the SDK, essential for building complex provider plugins (like GitLab).
*   **[#17404](https://github.com/anomalyco/opencode/pull/17404) — Fix xAI/Grok Tool Payloads**
    *   Prevents Grok tool payloads from exceeding grammar complexity limits, fixing errors with this provider.
*   **[#17151](https://github.com/anomalyco/opencode/pull/17151) — Fix Long Filename UI**
    *   CSS fix to prevent long filenames from overlapping action buttons in the review modal and diff viewer.
*   **[#17414](https://github.com/anomalyco/opencode/pull/17414) — Provider Error Handling**
    *   Raises the default SSE chunk timeout to 5 minutes and adds retries for `TypeValidationError` to improve stability with slow/proxied models.
*   **[#17198](https://github.com/anomalyco/opencode/pull/17198) — `/btw` Background Session Command**
    *   Adds a slash command to fire lightweight tasks without interrupting the current context.
*   **[#12822](https://github.com/anomalyco/opencode/pull/12822) — Remove Env Namespace**
    *   Removes the `Env` abstraction layer in favor of direct `process.env` access to fix persistent configuration bugs.
*   **[#14975](https://github.com/anomalyco/opencode/pull/14975) — Print Concrete Plugin Versions**
    *   Updates the status output to show the actual installed version of plugins rather than just the version specifier, aiding debugging.

## 5. Feature Request Trends

*   **Enhanced Plugin System:** There is a clear push to make the Plugin SDK more powerful. Requests include injecting messages into AI context (#17412), adding voice input hooks (#17425), and accessing authentication tokens (#16941).
*   **Robustness & Reliability:** Users are demanding features that improve reliability, such as native model fallback/failover (#7602) and better timeout handling (#17414).
*   **Self-Management:** Features allowing users to manage OpenCode's footprint are trending, such as the request for a workspace delete script (#17427) and configurable snapshot pruning intervals (#17423).

## 6. Developer Pain Points

*   **Resource Exhaustion:** A significant portion of the community is battling high memory usage (Leaks) and disk "swelling," which in severe cases causes macOS Kernel Panics (#12687, #15646).
*   **Platform & Environment Fragility:** Support for non-standard environments is lagging. Users are frustrated by crashes on Windows ARM64 (#4340), failures in air-gapped environments due to CDN dependencies (#17406), and permission handling errors (#8225).
*   **Session Management:** While basic sessioning works, edge cases like sessions lost after `git init` (#v1.2.26), sessions getting mixed up in worktrees (#13782), and web sessions disappearing (#16864) remain persistent annoyances.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-03-14

## 1. Today's Highlights
The Qwen Code community is actively addressing stability in **v0.12.3**, focusing on resolving critical MCP OAuth flows and fixing connection issues within the VSCode IDE Companion. Simultaneously, the project is pushing toward feature-rich upcoming releases (v0.13.0), introducing significant capabilities such as **Agent Arena** for competitive model testing and **Node SEA binary support** for standalone executable distribution.

## 2. Releases
*   **v0.12.3 (Latest Stable)**
    *   **MCP Enhancements**: Improved OAuth authentication UX with post-auth feedback, internationalization (i18n), and clearer auth flow management (PR #2327).
    *   **IDE Stability**: Resolved connection issues affecting specific VSCode clients and optimized connection configuration lookups (PR by @yiliang114).
    *   *View Release*: [v0.12.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.3)
*   **v0.12.2-preview.1 & Nightly**
    *   Includes the same MCP and IDE fixes backported to the preview and nightly channels.

## 3. Hot Issues
*   **[#2236 CLOSED] Ctrl+F "^F" Artifact in Focus Mode**
    *   A highly annoying bug where toggling focus mode leaked control characters into the terminal.
    *   *Fix*: PR #2350 prevents the `^F` keystroke from leaking to the PTY.
*   **[#2282 OPEN] Shell Command Causes Exit**
    *   Users reported that Qwen Code terminates unexpectedly with "Command terminated by signal: 1" when executing shell commands on Linux. This is a critical stability blocker for CLI users.
*   **[#2342 OPEN] Request for `/undo` Command**
    *   High-demand request for a standard `/undo` feature to revert agent changes, essential for workflow safety and error recovery.
*   **[#2279 CLOSED] IDE Companion Connection Failures (v0.12.0)**
    *   Addressed in recent releases; users were experiencing "Preparing Qwen Code..." infinite loops.
*   **[#2341 OPEN] `/insight` Command Generates Incomplete HTML**
    *   The HTML report output is truncated, showing only the header. This affects the usability of project analysis features.
    *   *Fix In Progress*: PR #2361 addresses LLM failure handling during insight generation.
*   **[#2339 OPEN] Telegram Bot Mode**
    *   Community proposal for a `--telegram` flag to run Qwen Code as a remote bot, allowing interaction via Telegram messenger.
*   **[#2251 OPEN] VSCode Extension Internal Error (-32603)**
    *   Post-OAuth connection errors (`Connection error`) are preventing the IDE extension from functioning for some users.
*   **[#2343 CLOSED] Skills Auto-loading Failure**
    *   Skills placed in `.qwen/skills/` were not being loaded despite documentation claims. (Closed/Fixed).
*   **[#2360 OPEN] API Error 400 (Tool Response Validation)**
    *   Users encountering `messages with role "tool" must be a response...` errors, indicating issues with the tool calling protocol validation.
*   **[#2329 OPEN] `AskUserQuestion` Formatting Bug**
    *   Questions in Skill markdown files are not being wrapped in arrays, breaking the expected input format.

## 4. Key PR Progress
*   **[#2357 OPEN] Node SEA Binary Build Support**
    *   Adds scripts to build standalone Single Executable Application (SEA) binaries. This is a major step for distribution, allowing users to run Qwen Code without installing Node.js.
*   **[#2348 OPEN] Bundled `/review` Skill**
    *   Introduces a "bundled" skill level to the system and ships a default `/review` skill for out-of-the-box code review capabilities, removing the need for manual configuration.
*   **[#1912 OPEN] [0.13.0] Agent Collaboration Arena**
    *   A flagship feature for the next minor version: runs tasks across multiple models in parallel (using Git worktrees) to compare results side-by-side.
*   **[#2362 OPEN] Fix DeepSeek-R1 Token Limits**
    *   Updates the regex patterns in `tokenLimits.ts` to correctly recognize `deepseek-r1` (64k output capacity), preventing it from defaulting to 8k.
*   **[#2352 OPEN] Hooks Extension Mechanism**
    *   Implements a new lifecycle event system ("hooks") allowing extensions to execute commands at specific events (e.g., `UserPromptSubmit`).
*   **[#2364 OPEN] Fix `convertOpenAIResponseToGemini` Crash**
    *   Adds guards against empty `choices` arrays, preventing crashes when providers return malformed responses.
*   **[#2356 OPEN] Auto-detect `max_tokens`**
    *   Automatically detects token limits for non-Qwen models (Claude, GPT, etc.) to prevent response truncation when `samplingParams` are not explicitly set.
*   **[#2300 OPEN] Fix Path Corruption in Qwen 3.5 Models**
    *   Resolves an issue where mixed Chinese/Latin characters in file paths caused illegal space insertion, breaking file operations.
*   **[#2188 CLOSED] VSCode Sidebar & Multi-position Chat**
    *   Merged significant UI improvements for the VSCode extension, adding sidebar views and drag-and-drop chat repositioning.
*   **[#2328 OPEN] [0.13.0] Export Metadata Tracking**
    *   Enhances the HTML export feature to include session statistics (tokens used, files modified) and metadata.

## 5. Feature Request Trends
*   **Workflow Utilities**: There is a strong push for fundamental CLI tools, specifically the `/undo` command (#2342) and `/worktree` support for isolated sessions (#2194).
*   **Binary Distribution**: Users are eager for a standalone binary executable (#2359) to simplify deployment in environments where Node.js is not installed.
*   **Protocol Extensions**: Developers are looking for ways to integrate Qwen Code into wider ecosystems, evidenced by requests for a **Telegram Bot** mode (#2339) and a generic **Webhook** tool (mentioned in associated discussions).
*   **Bundled Capabilities**: Requests for built-in skills, specifically a default `/review` skill (#2346), indicate a desire for functionality that works out-of-the-box rather than requiring custom setup.

## 6. Developer Pain Points
*   **Tool Calling & API Stability**: Recurring issues with the Tool Calling protocol (e.g., #2360, #2329) suggest that the interaction layer between the agent and LLM providers is fragile and prone to validation errors.
*   **Shell Execution Environment**: Multiple reports (#2282, #2244, #2222) highlight instability in the shell execution environment, ranging from unexpected exits and empty outputs on Windows to incorrect handling of quoted arguments.
*   **IDE Extension Reliability**: While the VSCode extension receives frequent updates, connection errors (#2251, #2279) remain a top friction point for developers trying to integrate Qwen Code into their daily editors.
*   **Model Context Handling**: Developers are frustrated with inconsistent context window limits and path corruption (#2300) when using non-standard or mixed-language prompts.

</details>

<details>
<summary><strong>LLXprt-Code</strong> — <a href="https://github.com/vybestack/llxprt-code">vybestack/llxprt-code</a></summary>

# LLXprt-Code Community Digest: 2026-03-14

**1. Today's Highlights**
Development activity is sharply focused on stabilizing advanced reasoning workflows. A critical fix for Anthropic Claude’s "thinking block" handling has been proposed to prevent the model from stopping prematurely after reasoning. Concurrently, the team is syncing with upstream `gemini-cli` (v0.24.5) to introduce the new Agent Skills system, signaling a push toward more agentic capabilities.

**2. Releases**
*No new releases published in the last 24 hours.*

**3. Hot Issues**
*   **[[Loopbreaker] claude stopping after thinking block again #1729](https://github.com/vybestack/llxprt-code/issues/1729)**
    *Why it matters:* Users are experiencing a workflow break where Claude stops execution immediately after the thinking block, returning control to the user without performing actions.
    *Community Reaction:* Active discussion (6 comments) suggests this is a high-severity regression for users relying on reasoning models.

*   **[Centralize thinking/visible-output detection (0.10.0 refactor) #1730](https://github.com/vybestack/llxprt-code/issues/1730)**
    *Why it matters:* Following the fix for #1729, this issue proposes architectural changes to make the parsing of thinking vs. visible output more robust, reducing fragility in future code refactors.
    *Community Reaction:* Early stage (1 comment), but flagged as a priority for the 0.10.0 milestone.

**4. Key PR Progress**
*   **[fix(anthropic): prevent thinking-only responses from silently ending the turn #1731](https://github.com/vybestack/llxprt-code/pull/1731)**
    *Description:* Addresses the critical bug where Claude models would output a thinking block and then halt. This PR ensures that control is returned correctly and mixed thinking+text responses render properly.
    *Status:* Open, pending review.

*   **[Upstream sync: gemini-cli v0.23.0 to v0.24.5 #1717](https://github.com/vybestack/llxprt-code/pull/1717)**
    *Description:* A massive sync incorporating 121 upstream commits. Key highlights include the integration of the **Agent Skills system** (activation tools, status bar) and improvements to the MCP inspector.
    *Status:* Open, currently merging changes.

*   **[feat(tools): add .backups snapshots for edit and ast_edit #1710](https://github.com/vybestack/llxprt-code/pull/1710)**
    *Description:* Enhances file safety by automatically creating snapshots in a `.backups/` directory before using `edit` or `ast_edit`, allowing users to revert changes easily.
    *Status:* Open, recently updated.

**5. Feature Request Trends**
*   **Architectural Robustness for Reasoning Models:** There is a clear demand for more resilient parsing of "thinking" blocks versus standard output to prevent UI/loop breaking.
*   **Upstream Agentic Capabilities:** The merge with `gemini-cli` indicates a trend toward incorporating "Agent Skills" and tooling status indicators.

**6. Developer Pain Points**
*   **Model Premature Halt:** The most significant pain point currently is the "Loopbreaker" triggering prematurely when Claude models enter thinking modes, effectively stopping the agent mid-task.
*   **Code Fragility:** Developers are concerned about the fragility of parsing logic across different chunks of code, prompting requests for centralization (as seen in #1730) to prevent future regressions.

</details>

<details>
<summary><strong>Pi Mono-Repo</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Mono-Repo Community Digest: 2026-03-14

## 1. Today's Highlights
The Pi Mono-Repo community saw a flurry of activity focused on stabilizing LLM integrations and refining the TUI user experience. Critical fixes were merged to handle edge cases in OpenAI's GPT-5 reasoning tokens and Anthropic's extended thinking blocks, preventing session failures during multi-turn conversations. Simultaneously, the TUI received significant quality-of-life improvements, including terminal focus awareness and better handling of paste markers, while the core Session Manager was enhanced to support custom session IDs for multi-tenant platforms.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
*   **Numpad Character Recognition** [#2070](https://github.com/badlogic/pi-mono/issues/2070)
    *   **Why it matters:** Users cannot input numbers or operators via the numpad, breaking basic workflow interaction.
    *   **Reaction:** 8 comments in 48 hours; high friction for terminal users.
*   **GPT-5 Intermittent Reasoning Errors** [#2118](https://github.com/badlogic/pi-mono/issues/2118)
    *   **Why it matters:** Azure OpenAI's `gpt-5.3-codex` sometimes returns empty reasoning summaries, causing 400 errors during conversation replay.
    *   **Reaction:** Critical for users relying on Azure OpenAI; resolved in PR #2114.
*   **Context Token Tracking Broken** [#2128](https://github.com/badlogic/pi-mono/issues/2128)
    *   **Why it matters:** The context usage display incorrectly shows "0/262k", preventing users from monitoring token consumption.
    *   **Reaction:** Fixed in PR #2127; high impact for cost management.
*   **Tool Output Bricks Sessions** [#2122](https://github.com/badlogic/pi-mono/issues/2122)
    *   **Why it matters:** Exceeding Anthropic's 10 MB string limit permanently crashes the session.
    *   **Reaction:** Highlights the need for safeguards when reading large files.
*   **System Prompt Timestamp Busts Cache** [#2013](https://github.com/badlogic/pi-mono/issues/2013) & [#2131](https://github.com/badlogic/pi-mono/issues/2131)
    *   **Why it matters:** Including the current time in the system prompt prevents effective prefix caching, increasing costs and latency.
    *   **Reaction:** Users strongly desire a toggle to disable timestamps.
*   **Forking During Streaming** [#2125](https://github.com/badlogic/pi-mono/issues/2125)
    *   **Why it matters:** Users cannot fork a conversation until the LLM finishes streaming, interrupting iterative coding flow.
    *   **Reaction:** Popular request for faster branching.
*   **Leaked Secrets in Pod Setup** [#2094](https://github.com/badlogic/pi-mono/issues/2094)
    *   **Why it matters:** `pi pods setup` inadvertently exposes `HF_TOKEN` and `PI_API_KEY` in bashrc and process args.
    *   **Reaction:** Critical security concern for cloud deployments.
*   **Tree Navigation Artifacts** [#2126](https://github.com/badlogic/pi-mono/issues/2126)
    *   **Why it matters:** Navigating the session tree leaves stale messages on screen, confusing the user context.
    *   **Reaction:** TUI stability issue affecting large session management.
*   **Paste Marker Content Access** [#2084](https://github.com/badlogic/pi-mono/issues/2084)
    *   **Why it matters:** Extension API `getEditorText()` returns `[paste #1]` markers instead of the actual text content.
    *   **Reaction:** Blocks extension development requiring text analysis.
*   **Agent Loop Hangs** [#2119](https://github.com/badlogic/pi-mono/issues/2119)
    *   **Why it matters:** Malformed LLM responses or network timeouts cause the agent loop to hang silently rather than erroring out.
    *   **Reaction:** Affects reliability when running behind proxies like LiteLLM.

## 4. Key PR Progress
*   **Handle Empty GPT-5 Reasoning** [#2114](https://github.com/badlogic/pi-mono/pull/2114)
    *   Prevents 400 errors during replay by sanitizing empty reasoning summaries returned by Azure OpenAI.
*   **Terminal Focus Awareness** [#2129](https://github.com/badlogic/pi-mono/pull/2129)
    *   Adds focus reporting (DECSET 1004) to dim the caret when the terminal loses focus; exposes state to extensions.
*   **Fix Context Token Usage** [#2127](https://github.com/badlogic/pi-mono/pull/2127)
    *   Corrects the logic in `openai-completions` to ensure usage stats are always requested during streaming.
*   **Custom Session IDs** [#2130](https://github.com/badlogic/pi-mono/pull/2130) & [#2095](https://github.com/badlogic/pi-mono/pull/2095)
    *   Allows `newSession()` to accept an optional `id` parameter, enabling multi-tenant agent platforms to sync DB IDs with Pi runtime.
*   **Normalize Tool Schema** [#2115](https://github.com/badlogic/pi-mono/pull/2115)
    *   Fixes OpenAI 400 errors by ensuring JSON Schemas for tools always include a `required` field, even if empty.
*   **Runtime CWD Changes** [#2101](https://github.com/badlogic/pi-mono/pull/2101)
    *   Adds `ctx.setCwd()` to the Extension API, allowing tools like `pi-worktree` to change the working directory dynamically.
*   **Atomic Paste Markers** [#2111](https://github.com/badlogic/pi-mono/pull/2111)
    *   Treats paste markers (`[paste #1 +123 lines]`) as single atoms in the editor, preventing partial deletion.
*   **Fix Anthropic Thinking Blocks** [#2096](https://github.com/badlogic/pi-mono/pull/2096)
    *   Corrects signature handling and block accumulation to prevent "cannot be modified" errors in multi-turn conversations.
*   **Handle "End" Finish Reason** [#2116](https://github.com/badlogic/pi-mono/pull/2116) & [#2106](https://github.com/badlogic/pi-mono/pull/2106)
    *   Ensures OpenAI-compatible providers returning `finish_reason: "end"` are treated as normal stops.
*   **Markdown Streaming Optimization** [#2067](https://github.com/badlogic/pi-mono/issues/2067) (Proposal)
    *   A proposal to cache completed markdown blocks to avoid CPU-heavy full re-parses on every token delta.

## 5. Feature Request Trends
*   **Fine-grained Forking Control:** Users are asking for the ability to fork conversations *while* the agent is still generating a response, rather than waiting for completion.
*   **Performance & Caching:** There is a strong push to optimize prompt caching, specifically requesting the removal of dynamic timestamps from the system prompt and incremental markdown rendering to reduce CPU overhead.
*   **Multi-tenant Architecture:** Extension developers are requesting APIs to supply external IDs for sessions and agents, indicating a trend towards building managed platforms on top of the Pi core.

## 6. Developer Pain Points
*   **LLM API Fragility:** A significant portion of recent issues stems from inconsistent behaviors between LLM providers (e.g., GPT-5 empty reasoning, Anthropic string limits, OpenAI schema validation). Developers are spending time handling these edge cases rather than building features.
*   **TUI Rendering Artifacts:** Issues with scrollback clearing, stale content during tree navigation, and emoji misalignment suggest the TUI rendering layer is becoming a bottleneck for user satisfaction.
*   **Extension API Limitations:** Extension authors are hitting walls, specifically unable to change the working directory at runtime or access actual text content when paste markers are present.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*