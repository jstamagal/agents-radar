# AI CLI Tools Community Digest 2026-04-08

> Generated: 2026-04-08 00:14 UTC | Tools covered: 8

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

## Cross-Tool Community Analysis: 2026-04-08

### 1. Ecosystem Overview
The AI CLI tool ecosystem is currently undergoing a critical phase of **stabilization and architectural maturation**. While the initial hype phase has passed, development velocity remains high, with tools shifting from "feature adding" to "engineering hardening." The landscape is fiercely competitive, with feature parity becoming the norm; tools are now distinguishing themselves through **platform resilience (especially Windows)**, **enterprise observability**, and **advanced agentic capabilities (multi-agent, hooks, and MCP)**. A clear divide is emerging between vendor-locked solutions (Claude, Copilot) focusing on seamless enterprise integration, and open-source alternatives (OpenCode, Charm, Qwen) chasing interoperability and extensibility.

---

### 2. Activity Comparison

| Tool | Issue Activity | PR Velocity | Release Status | Stability Trend |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **High** (Critical Auth Regressions) | Moderate (Community forks) | **v2.1.94** (Regression) | ⚠️ **Declining** (Windows/Auth issues) |
| **OpenAI Codex** | **High** (Token burn/Leaks) | **High** (Rust alphas) | `v0.119.0-alpha` | 🔄 **Stabilizing** (Rust rewrite churn) |
| **Charm Crush** | Moderate (SQLite/Schema bugs) | **High** (Hotfixes merged) | Nightly / `v0.55.1` | ➡️ **Stable** (Rapid bug fixing) |
| **Gemini CLI** | Moderate (Memory leaks) | **High** (Perf bounds) | `v0.37.0-p.2` | ↗️ **Improving** (Mem management focus) |
| **GitHub Copilot**| Moderate (Copy/Auth UX) | Low (Release driven) | **v1.0.21** (Polish) | ➡️ **Stable** (UX refinements) |
| **Kimi Code** | **High** (Connectivity/MCP) | **High** (Major refactor props) | `v1.30.0` | ⚠️ **Volatile** (Proposed TS rewrite) |
| **OpenCode** | **High** (Session bleeds) | **High** (Voice/Perf feats) | No release | ↗️ **Maturing** (Architectural shifts) |
| **Qwen Code** | Moderate (VS Code crashes) | Moderate (CJK/Plan feats) | `v0.14.2` (Hotfix) | ↗️ **Improving** (Rapid patching) |

---

### 3. Shared Feature Directions

*   **Observability & Enterprise Control (OpenTelemetry)**
    *   **Tools:** *Claude Code, GitHub Copilot CLI, OpenAI Codex*
    *   **Trend:** Enterprises are demanding insights into token usage and agent behavior. Copilot added OTel monitoring; Claude Code is facing heat over billing metering accuracy.
*   **The "Hooks" Lifecycle (Extensibility)**
    *   **Tools:** *Kimi Code, OpenCode, Claude Code (via plugins)*
    *   **Trend:** Moving beyond simple chat to programmable agents. Developers want `PreToolUse`, `PostToolUse`, and `UserPromptSubmit` hooks to inject custom logic (e.g., linting, notifications).
*   **Model Context Protocol (MCP) Integration**
    *   **Tools:** *OpenAI Codex, Charm Crush, GitHub Copilot, Kimi Code*
    *   **Trend:** MCP is becoming the standard for tool context. Efforts are focused on stabilizing sessions (Crush) and supporting server-driven elicitation (Codex).
*   **Platform Parity (Windows & Intel macOS)**
    *   **Tools:** *OpenAI Codex, Claude Code, Qwen Code, Gemini CLI*
    *   **Trend:** Significant friction remains. Codex faces crash-on-launch bugs; Claude Code is plagued by cross-device rename errors; Qwen is fixing MSYS2 crashes.
*   **Memory & Context Management**
    *   **Tools:** *Gemini CLI, Qwen Code, OpenCode, GitHub Copilot*
    *   **Trend:** Users are hitting hard limits. There is a unified push for "Auto-compact," "Context Usage Tools," and separating "Global vs. Project" memory to prevent session loss and API 400 errors.

---

### 4. Differentiation Analysis

| Tool | Strategic Focus | Technical Differentiator |
| :--- | :--- | :--- |
| **Claude Code** | **"The Enterprise Default"** | Deep IDE integration (Cowork), "Buddy" UI, but currently suffering from closed-source stagnation issues. |
| **OpenAI Codex** | **"The Agentic Platform"** | Moving to a **Rust backend** for performance. Focuses on *remote control* (ChatGPT -> CLI) and advanced sandboxing. |
| **Charm Crush** | **"The TUI Aesthete"** | Best-in-class terminal UX (Bubble Tea). Focuses on visual polish, mouse support, and "delightful" developer experiences. |
| **OpenCode** | **"The Open-Source Powerhouse"** | Pursuing **Voice Control** and **DB-backed Multi-Agent** orchestration. Positioning itself as the open, modular alternative to Claude. |
| **Kimi Code** | **"The Disruptor"** | Currently debating a **TypeScript rewrite** to fix Python performance debts. Aggressively adding hooks and compatibility layers. |
| **GitHub Copilot** | **"The Standardizer"** | Focused on stability, standard terminal practices (OTel), and deep integration with the GitHub ecosystem. |

---

### 5. Community Momentum & Maturity

*   **Most Rapidly Iterating:** **OpenAI Codex** and **Charm Crush**.
    *   *Codex* is shipping multiple Rust alphas daily to fix memory leaks.
    *   *Crush* is merging PRs at a breakneck pace (Auth flows, Schema fixes).
*   **Highest Community Tension:** **Claude Code**.
    *   Dominated by debates on open-sourcing, severe billing anxiety, and platform regressions. The community is demanding more control than Anthropic currently offers.
*   **Most Volatile Direction:** **Kimi Code**.
    *   A controversial proposal to rewrite the CLI in TypeScript ("Python was a failure") indicates a massive pivot point that could disrupt users or solve major perf debts.
*   **Steadiest Hand:** **GitHub Copilot CLI**.
    *   Focused on incremental polish (copy-paste, spinners) and enterprise features. Lower drama, high reliability focus.

---

### 6. Trend Signals for Developers

1.  **The End of "Chat-Only" Interfaces:**
    The leading edge of development is no longer about conversation quality, but about **Agent Orchestration**.
    *   *Signal:* OpenCode's "Coordinator Shell" and Kimi's "Side Questions" (`/btw`) indicate users want agents that can handle background tasks and hierarchical workflows, not just linear chats.
2.  **Local-First & Hybrid Workflows:**
    There is a massive push to run models locally or on private infrastructure.
    *   *Signal:* Requests for **Local AI support** (Copilot), **Ollama/LM Studio** integration (OpenCode, Qwen), and strict **Secret Leakage** prevention (Claude Code) highlight that enterprises are moving toward air-gapped or hybrid environments.
3.  **"Scriptability" is the New "Smartness":**
    The most requested features are about control, not intelligence.
    *   *Signal:* The demand for **Lifecycle Hooks** (Kimi, OpenCode) and **AST-aware edits** (Gemini) suggests developers want to trust the tool to follow strict rules (linting, security policies) rather than hoping it codes correctly.
4.  **Performance is the New Bottleneck:**
    As model capabilities saturate, **CLI latency** is the new frustration.
    *   *Signal:* OpenAI rewriting the CLI in Rust, Qwen optimizing GPU token escalation, and Charm fixing TUI startup latency prove that the tooling itself has become the bottleneck, not the LLM.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Date:** April 8, 2026
**Data Source:** github.com/anthropics/skills

## 1. Top Skills Ranking
Based on the repository activity, the following Skills have garnered the most attention and discussion from the community (sorted by PR activity and topical relevance):

*   **[document-typography](https://github.com/anthropics/skills/pull/514)** (OPEN)
    *   **Functionality:** Acts as a quality control agent for AI-generated documents, specifically targeting typographic flaws such as orphan word wraps (words spilling onto new lines), widow paragraphs (headers stranded at page bottoms), and numbering misalignment.
    *   **Highlights:** Addresses a ubiquitous visual quality issue in AI outputs that standard LLM instructions often miss.
*   **[ODT (OpenDocument Text)](https://github.com/anthropics/skills/pull/486)** (OPEN)
    *   **Functionality:** Enables the creation, parsing, and template filling of `.odt` files (LibreOffice/OpenOffice format) and conversion to HTML.
    *   **Highlights:** Expands Claude's compatibility beyond Microsoft Office (DOCX) to open-source ISO standards, filling a gap for enterprise and government users requiring open formats.
*   **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (OPEN)
    *   **Functionality:** "Meta-skills" designed to audit other Skills. They evaluate structure, documentation, security (e.g., shell injection risks), and YAML compliance.
    *   **Highlights:** Responds to the community's need for self-regulation and trust in a growing ecosystem of user-generated code.
*   **[frontend-design (Revision)](https://github.com/anthropics/skills/pull/210)** (OPEN)
    *   **Functionality:** A major revision to the existing frontend-design skill to improve clarity and "actionability" for Claude.
    *   **Highlights:** Focuses on converting abstract design concepts into concrete, executable instructions within the context window.
*   **[SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** (OPEN)
    *   **Functionality:** Integrates SAP's open-source tabular foundation model for predictive analytics on business data.
    *   **Highlights:** Represents a trend toward "Model-on-Model" collaboration, using Claude to orchestrate specialized predictive models.
*   **[shodh-memory](https://github.com/anthropics/skills/pull/154)** (OPEN)
    *   **Functionality:** A persistent context system for AI agents, allowing memories and context to be retrieved across different conversation sessions.
    *   **Highlights:** Tackles the limitation of stateless interactions by enabling long-term memory for agents.

## 2. Community Demand Trends
Analyzing the Issues and proposals reveals three primary vectors of demand:

*   **Reliability & Safety (Security & Parsing):**
    There is significant concern regarding the safety of the skills ecosystem. Issues like [#492 (Security: Namespace Impersonation)](https://github.com/anthropics/skills/issues/492) highlight fears that community skills could abuse trust boundaries. Additionally, bugs in YAML parsing ([#556](https://github.com/anthropics/skills/issues/556)) and validation ([#539](https://github.com/anthropics/skills/pull/539)) are high-priority friction points.
*   **Enterprise Interoperability:**
    Users are aggressively pushing for integration with heavy enterprise platforms. The [ServiceNow skill](https://github.com/anthropics/skills/pull/568) proposal (covering ITSM, SecOps, and HRSD) and requests for [AWS Bedrock compatibility](https://github.com/anthropics/skills/issues/29) indicate a desire to use Claude as an orchestration layer for complex existing stacks.
*   **Workflow & Governance:**
    Users are looking for "agentic" behaviors that go beyond simple code generation. Proposals for [Agent Governance](https://github.com/anthropics/skills/issues/412) (safety patterns for AI systems) and [Codebase Inventory Audits](https://github.com/anthropics/skills/pull/147) show a demand for Skills that manage process, security, and technical debt.

## 3. High-Potential Pending Skills
These Pull Requests are active and open, signaling they may be merged into the official repository soon:

*   **[ServiceNow Platform Skill](https://github.com/anthropics/skills/pull/568)**: A comprehensive assistant for the ServiceNow ecosystem, moving beyond simple scripting to architecture and SecOps.
*   **[Testing Patterns](https://github.com/anthropics/skills/pull/723)**: A dedicated skill for the full testing stack (Unit, Integration, E2E), emphasizing philosophy and modern frameworks like Testing Library.
*   **[Masonry AI (Image/Video Gen)](https://github.com/anthropics/skills/pull/335)**: Integrates Imagen 3.0 and Veo 3.1 for multimodal generation workflows.
*   **[Sensory (macOS Automation)](https://github.com/anthropics/skills/pull/806)**: A native automation skill using `osascript` (AppleScript) to control macOS apps, offering a more efficient alternative to vision-based clicking.

## 4. Skills Ecosystem Insight
The community is moving beyond basic "tools" toward **defensive, professional-grade infrastructure**—with the highest engagement surrounding Skills that ensure output quality (typography), ensure system safety (security analyzers), and bridge the gap to enterprise platforms (ServiceNow, SAP).

---

# Claude Code Community Digest: 2026-04-08

## 1. Today's Highlights
Today's digest is dominated by significant concerns regarding **AWS Bedrock authentication regressions** introduced in the latest `v2.1.94` release, specifically breaking Bearer Token workflows (`ABSK`) which previously functioned in `v2.1.91`. Concurrently, the community is rallying behind a substantial push for **open-sourcing Claude Code**, with multiple competing PRs attempting to extract and build the source from shipped artifacts.

## 2. Releases
### v2.1.94
**Key Changes:**
*   **Amazon Bedrock (Mantle):** Added support for Amazon Bedrock powered by Mantle. Enable via `CLAUDE_CODE_USE_MANTLE=1`.
*   **Default Effort Level:** Changed default effort from "medium" to "high" for API-key, Bedrock, Vertex, Foundry, Team, and Enterprise users (control via `/effort`).
*   **UI Compact Mode:** Introduced a compact header format for `Slacked #channel`.
*   **⚠️ Regression Alert:** This release appears to have introduced breaking changes for `AWS_BEARER_TOKEN_BEDROCK` authentication.

## 3. Hot Issues

### 🚨 Critical Regressions & Platform Bugs
1.  **[#44929](https://github.com/anthropics/claude-code/issues/44929) [BUG] Bedrock Bearer Token (ABSK) authentication broken in v2.1.94**
    *   **Why it matters:** Critical enterprise blocker. Users migrating to `v2.1.94` (perhaps for Mantle support) are finding their AWS Bearer Token auth completely broken.
2.  **[#44910](https://github.com/anthropics/claude-code/issues/44910) [BUG] `AWS_BEARER_TOKEN_BEDROCK` auth broken in 2.1.92+**
    *   **Why it matters:** Confirms the regression timeline starts earlier than .94; users are forced to pin to `v2.1.91`.
3.  **[#44668](https://github.com/anthropics/claude-code/issues/44668) [BUG] Cowork Windows: EXDEV cross-device rename failure causes machine crashes**
    *   **Why it matters:** Affects all MSIX installs on Windows; the app crashes and relaunches specifically during bundle updates due to cross-device link failures.

### 💸 Cost & Session Management
4.  **[#38335](https://github.com/anthropics/claude-code/issues/38335) [BUG] Max plan session limits exhausted abnormally fast since March 23**
    *   **Why it matters:** High engagement (456 comments). Users suspect a billing metering bug affecting the Max plan.
5.  **[#44926](https://github.com/anthropics/claude-code/issues/44926) [BUG] Claude Code CLI admits to double burning my tokens**
    *   **Why it matters:** Highlights anxiety regarding token efficiency; users are auditing their usage logs.
6.  **[#43678](https://github.com/anthropics/claude-code/issues/43678) [BUG] Pro plan consumes promotional credits despite session limit not reached**
    *   **Why it matters:** Confusion persists regarding how credits are applied versus session limits.

### 🔧 Core Functionality & Security
7.  **[#44868](https://github.com/anthropics/claude-code/issues/44868) [BUG] Exposes secrets from .env / .dev.vars despite CLAUDE.md prohibitions**
    *   **Why it matters:** Security concern. The tool ignores instructions to avoid `.env` files and echoes secrets into the transcript via `grep` or `Read` tools.
8.  **[#42796](https://github.com/anthropics/claude-code/issues/42796) [MODEL] Unusable for complex engineering tasks with Feb updates**
    *   **Why it matters:** High visibility (757 👍). Users report a degradation in model capability for complex tasks compared to previous versions.
9.  **[#24964](https://github.com/anthropics/claude-code/issues/24964) [BUG] Cowork: Folder picker rejects folders outside home directory**
    *   **Why it matters:** Persistent friction in Windows/macOS IDE integration; valid symlink/junction workflows are blocked.
10. **[#42776](https://github.com/anthropics/claude-code/issues/42776) [BUG] Desktop fails to Relaunch on Windows due to orphaned process file lock**
    *   **Why it matters:** Requires user intervention (killing orphaned processes) to restart the app on Windows.

## 4. Key PR Progress

### 🔐 Security & Core Fixes
1.  **[#44742](https://github.com/anthropics/claude-code/pull/44742) fix: diagnostic tool + root cause analysis for session persistence data loss**
    *   Adds a diagnostic script to help users and devs investigate why conversation history disappears on IDE restart/update.
2.  **[#44681](https://github.com/anthropics/claude-code/pull/44681) fix(security-guidance): remove stale exec guidance**
    *   Cleanup of security documentation to remove outdated execution guidelines.
3.  **[#1](https://github.com/anthropics/claude-code/pull/1) Create SECURITY.md**
    *   Establishes a standard security policy for the repository.

### 🎨 Features & Plugins
4.  **[#44874](https://github.com/anthropics/claude-code/pull/44874) feat: add wmux-orchestrator plugin**
    *   Introduces a multi-agent orchestration plugin that decomposes complex tasks into parallel "waves" of Claude Code agents.
5.  **[#44676](https://github.com/anthropics/claude-code/pull/44676) fix(plugin-dev): add missing plugin manifest**
    *   Fixes the missing `plugin.json` for the bundled `plugin-dev` plugin to align it with marketplace entries.

### 🔓 Open Source Initiative
6.  **[#41447](https://github.com/anthropics/claude-code/pull/41447) feat: open source claude code ✨**
    *   A community effort to fully open-source the codebase.
7.  **[#41518](https://github.com/anthropics/claude-code/pull/41518) Fully Open Source Claude Code**
    *   An attempt to extract and build the project from the shipped `cli.js.map` (57MB) using Bun, claiming successful local builds.
8.  **[#41611](https://github.com/anthropics/claude-code/pull/41611) add the missing source to claude code**
    *   Another attempt to restore missing source files.

### 🛠️ Tooling & Quality of Life
9.  **[#39148](https://github.com/anthropics/claude-code/pull/39148) feat: add preserve-session plugin**
    *   A plugin to maintain session history continuity when project directories are renamed or moved using path-independent UUIDs.
10. **[#41938](https://github.com/anthropics/claude-code/pull/41938) Add Linux/macOS Bash script for DevContainer startup**
    *   Adds parity for non-Windows users launching DevContainers.

## 5. Feature Request Trends
*   **Authentication Resilience:** There is a strong demand for more robust error handling and recovery paths for OAuth tokens (e.g., Issue #44930), specifically when 401 errors occur and the browser flow fails to initiate.
*   **Cowork Workspace Flexibility:** Users are requesting the ability to pick folders outside the home directory and use symlinks (Issue #24964), indicating a desire to treat Cowork as a more standard dev environment.
*   **Buddy Customization:** Requests for customizing the "Buddy" avatar appearance and name persist (Issues #41766, #44728).

## 6. Developer Pain Points
*   **Windows Integration Friction:** Windows users are facing a "death by a thousand cuts" scenario. Between Cowork folder restrictions, cross-device rename crashes (EXDEV errors), and orphaned process locks preventing relaunch, the Windows experience is currently described as fragile.
*   **Data Loss Anxiety:** There is significant frustration regarding "session persistence" (Issue #44742) and history loss. Developers rely on context continuity, and when `/clear` or IDE updates wipe history without warning, it breaks the workflow loop.
*   **Secret Leakage:** Despite best efforts in `CLAUDE.md`, the tool's tendency to grep or read `.env` files and output secrets into the chat log (Issue #44868) remains a major trust issue for security-conscious engineers.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-08

## 1. Today's Highlights
The repository has seen a flurry of activity addressing **performance bottlenecks** in the TUI and **extending MCP (Model Context Protocol) capabilities**. Key engineering efforts include moving sandbox orchestration to the `exec-server` and resolving a critical Windows Firewall regression that was breaking elevated sandbox setups. Meanwhile, the community remains intensely focused on **token management efficiency** and cross-platform stability, particularly regarding Intel macOS support.

## 2. Releases
**`rust-v0.119.0-alpha` Series** (Alpha 13–17)
The last 24 hours have seen a rapid succession of five alpha releases (`0.119.0-alpha.13` through `17`). While specific changelogs were not provided in the feed, this cadence suggests active stabilization of the Rust backend, likely addressing the memory and latency issues reported in recent issues.

## 3. Hot Issues

*   **[#14593: Burning tokens very fast](https://github.com/openai/codex/issues/14593)** 🔥 (464 comments)
    *   **Why it matters:** This is the most active thread, indicating a critical cost/efficiency problem for users on the Business plan.
    *   **Community Reaction:** Widespread frustration with token consumption rates, suggesting a regression or inefficient context handling in recent versions.
*   **[#10410: macOS Intel (x86_64) support](https://github.com/openai/codex/issues/10410)** (165 comments, 243 👍)
    *   **Why it matters:** A top feature request. Intel Mac users are effectively locked out of the Desktop App experience.
    *   **Community Reaction:** High demand for Universal binaries or explicit x86_64 support, as Apple Silicon transitions leave older hardware behind.
*   **[#16231: High CPU usage on macOS (M5 Pro)](https://github.com/openai/codex/issues/16231)** (18 comments, 29 👍)
    *   **Why it matters:** A regression in version `26.325.31654` causing thermal throttling and battery drain on premium hardware.
    *   **Community Reaction:** Users are blaming the latest VS Code extension update for severe performance degradation.
*   **[#12764: CLI 401 Unauthorized](https://github.com/openai/codex/issues/12764)** (93 comments)
    *   **Why it matters:** A persistent authentication issue blocking `codex-cli` usage.
    *   **Community Reaction:** Reports of `stream disconnected` errors suggest instability in the auth token refresh flow or API gateway.
*   **[#9224: Codex Remote Control](https://github.com/openai/codex/issues/9224)** (37 comments, 246 👍)
    *   **Why it matters:** A visionary feature request to control a desktop CLI session remotely via the ChatGPT mobile app.
    *   **Community Reaction:** Highly upvoted; users want seamless transition between mobile (reviewing) and desktop (executing).
*   **[#13993: Standalone Windows Installer](https://github.com/openai/codex/issues/13993)** (17 comments, 56 👍)
    *   **Why it matters:** Enterprise users often cannot access the Microsoft Store due to corporate policies.
    *   **Community Reaction:** Strong request for a traditional `.exe` installer to bypass Store restrictions and enable offline installs.
*   **[#16502: Codex Desktop closes immediately (Windows)](https://github.com/openai/codex/issues/16502)** (4 comments)
    *   **Why it matters:** A critical "crash-on-launch" bug affecting Windows 10/11 users on the latest build.
    *   **Community Reaction:** Users are unable to use the app at all; looking for workarounds involving WSL or alternative installation methods.
*   **[#16553: Unresponsive with large SSH config](https://github.com/openai/codex/issues/16553)** (5 comments)
    *   **Why it matters:** Codex hangs on startup if `~/.ssh/config` is large, affecting developers with complex infrastructure.
    *   **Community Reaction:** Points to a lack of async parsing or efficient file handling in the startup sequence.
*   **[#16904: Stale busy spinner in TUI (Linux/tmux)](https://github.com/openai/codex/issues/16904)** (11 comments)
    *   **Why it matters:** A UI state bug where the terminal interface doesn't reset correctly after a subagent finishes.
    *   **Community Reaction:** Indicates a race condition in the TUI event loop when handling subagent lifecycles.
*   **[#16799: Cross-project state leak](https://github.com/openai/codex/issues/16799)** (4 comments)
    *   **Why it matters:** A security concern where command paths from one project leak into another.
    *   **Community Reaction:** Major concern regarding session isolation and security boundaries in local development.

## 4. Key PR Progress

*   **[#17039: Reduce TUI startup latency](https://github.com/openai/codex/pull/17039)** (Author: fcoury-oai)
    *   **Change:** Refactored TUI bootstrap to fetch rate limits asynchronously.
    *   **Impact:** Significantly faster startup times; the UI no longer freezes waiting for account checks.
*   **[#17053: Fix Windows Firewall rules](https://github.com/openai/codex/pull/17053)** (Author: iceweasel-oai)
    *   **Change:** Corrected the remote address format used in Windows Firewall rules for elevated sandboxes.
    *   **Impact:** Fixes a critical regression where sandboxes would fail with `0xd000000d` on Windows.
*   **[#17036: Allow limited git writes in sandbox](https://github.com/openai/codex/pull/17036)** (Author: viyatb-oai)
    *   **Change:** Added `allow_limited_git_writes` config option.
    *   **Impact:** Codex can now update repo metadata (e.g., commits) inside a sandbox without needing full write access to hooks/configs.
*   **[#17043: Support server-driven MCP elicitations](https://github.com/openai/codex/pull/17043)** (Author: mzeng-openai)
    *   **Change:** Extended MCP support to handle server-driven elicitation and approval persistence.
    *   **Impact:** Improves integration with custom MCP servers, allowing richer interactions and approval flows.
*   **[#16736: Move unified-exec sandbox launch](https://github.com/openai/codex/pull/16736)** (Author: starr-openai)
    *   **Change:** Shifted remote sandbox launch logic to `codex-exec-server`.
    *   **Impact:** Architectural improvement to centralize sandbox management, likely enabling better resource isolation and networking.
*   **[#16276: Add memory extensions](https://github.com/openai/codex/pull/16276)** (Author: kliu128)
    *   **Change:** Introduces external memory capabilities.
    *   **Impact:** Advanced feature allowing Codex to retain context or access external data structures more efficiently.
*   **[#16949: Use model metadata for Fast Mode status](https://github.com/openai/codex/pull/16949)** (Author: pash-openai)
    *   **Change:** Decoupled "Fast Mode" status from hardcoded model names.
    *   **Impact:** Future-proofs the UI to correctly display speed tiers for new model versions dynamically.
*   **[#17052: Add regression tests for JsonSchema](https://github.com/openai/codex/pull/17052)** (Author: vivi)
    *   **Change:** Expanded test coverage for JSON schema parsing and coercion.
    *   **Impact:** Improves reliability of tool definition handling and reduces regressions in input validation.
*   **[#16706 / #16640: Add analytics/steering metadata](https://github.com/openai/codex/pull/16706)** (Author: rhan-oai)
    *   **Change:** Telemetry improvements to track steering and token usage.
    *   **Impact:** Internal observability enhancement, likely leading to better rate-limit handling and model selection.
*   **[#17048: Apply patches through executor filesystem](https://github.com/openai/codex/pull/17048)** (Author: pakrym-oai)
    *   **Change:** Refactored `apply_patch` to use the executor filesystem in remote environments.
    *   **Impact:** Fixes how files are written in remote/sandboxed environments, ensuring consistency with local behavior.

## 5. Feature Request Trends

*   **Universal Binaries & Enterprise Support:** The top requests focus on installation flexibility. Users are demanding **Intel macOS builds** (#10410) and **Standalone Windows Installers** (#13993) to bypass the Microsoft Store.
*   **Remote Control Workflow:** There is a clear trend toward "hybrid" workflows. Users want to start tasks on the ChatGPT mobile app and execute them on a powerful desktop CLI via **"Remote Control"** (#9224).
*   **Machine-Readable Event Surface:** Developers are building complex automations *on top of* Codex. They need **Official Hooks/Events** (#16484, #16301) for things like `PermissionRequest` to enable fully automated "auto-approve" flows similar to competitors.

## 6. Developer Pain Points

*   **Platform Instability:** Windows and Intel macOS users feel like second-class citizens. Issues range from **immediate crashes** (#16502) to **extreme CPU usage** (#16231) and **sandbox network failures** (#11095).
*   **Resource Exhaustion:** High token burn (#14593) is causing friction, possibly due to inefficient context management or loop behaviors in the agent.
*   **State Management Bugs:** Developers are frustrated with "sticky" state issues, such as **stale spinners** (#16904) or **leaked configurations** across projects (#16799), which disrupt the flow and pose security risks.

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest: 2026-04-08

## 1. Today's Highlights
The Crush community is currently focused on stabilizing the `v0.55.1` release, addressing a critical SQLite database locking error affecting Arch/AUR users. Development activity is high, with significant momentum behind improving the user experience for Hyper provider authentication and adding internal "self-awareness" tools for debugging. Meanwhile, maintainers are pushing forward with architectural changes, including a new PubSub-based broker service to handle async requests.

## 2. Releases
**Nightly Build Available**
*   **Status:** A new `nightly` release has been published.
*   **Note:** The release asset verification section in the source data was incomplete; users downloading the nightly build should refer to the standard `checksums.txt` procedure provided in the repository documentation.

## 3. Hot Issues
*   **[#2576](https://github.com/charmbracelet/crush/issues/2576): SQLITE_BUSY on v0.55.1 (Arch/AUR)**
    *   **Impact:** High. Users on Linux distributions are reporting that the application fails to start immediately due to a database lock (`SQLITE_BUSY`).
*   **[#2573](https://github.com/charmbracelet/crush/issues/2573): Broken JSON Schema**
    *   **Impact:** Moderate. Following the merge of #2521, the public configuration schema (`crush.json`) is failing validation, likely breaking IDE integrations relying on this schema.
*   **[#2572](https://github.com/charmbracelet/crush/issues/2572): Gemini Ignores Interstitial Messages**
    *   **Impact:** Moderate. Google Gemini models appear to drop context when new messages are injected while the model is processing, requiring users to re-prompt.
*   **[#2570](https://github.com/charmbracelet/crush/issues/2570): Edit Approval UI Obscures Context**
    *   **Impact:** UX. The popup for approving file edits covers the output it is supposed to explain, making it impossible for users to verify changes before accepting.
*   **[#2559](https://github.com/charmbracelet/crush/issues/2559): Outdated Chutes LLM List**
    *   **Impact:** Moderate. The built-in list of models for the "Chutes" provider references deprecated models (e.g., `moonshotai/Kimi-K2-Instruct`), resulting in 404 errors.

## 4. Key PR Progress
*   **[#2577](https://github.com/charmbracelet/crush/pull/2577): Hyper Provider Error Handling (Closed)**
    *   **Status:** Merged. Adds custom error messages to clarify when Hyper authentication fails, improving user feedback over generic errors.
*   **[#2578](https://github.com/charmbracelet/crush/pull/2578): Auto-Trigger Hyper Auth (Closed)**
    *   **Status:** Merged. Automatically opens the OAuth dialog when the Hyper provider returns a `401 Unauthorized` status, streamlining the re-login flow.
*   **[#2574](https://github.com/charmbracelet/crush/pull/2574): Fix Schema Generation**
    *   **Status:** Open. A hotfix intended to resolve the broken `crush.json` schema by correcting the pointer receiver usage on `csync.Map`.
*   **[#2561](https://github.com/charmbracelet/crush/pull/2561): Self-Awareness Tools (`crush_info`, `crush_logs`)**
    *   **Status:** Open. Implements internal tools allowing the LLM to inspect its own active configuration and logs, a significant leap towards "agentic" debugging capabilities.
*   **[#2579](https://github.com/charmbracelet/crush/pull/2579): Internal "Ask" Broker Service (WIP)**
    *   **Status:** Open. A major architectural refactor introducing a PubSub broker to handle asynchronous question/answer interactions within the app.
*   **[#2575](https://github.com/charmbracelet/crush/pull/2575): MCP Session Timeout Fixes**
    *   **Status:** Open. Replaces complex `time.AfterFunc` logic with standard `context.WithTimeout` to correctly distinguish between cancellations and timeouts in MCP sessions.
*   **[#2527](https://github.com/charmbracelet/crush/pull/2527): Mouse Support for Permissions**
    *   **Status:** Open. Adds hitbox computation and click handlers for permission dialogs (Allow/Deny), moving the TUI toward full mouse interactivity.
*   **[#2525](https://github.com/charmbracelet/crush/pull/2525): Enhanced Clipboard Support**
    *   **Status:** Open. Refines clipboard logic to prefer native OS clipboard support over terminal magic, ensuring "Copy" success messages are accurate.
*   **[#2350](https://github.com/charmbracelet/crush/pull/2350): Robust Skill Parsing**
    *   **Status:** Open. Improves the parsing of "Skills" (frontmatter) to handle UTF-8 BOMs and blank lines, while optimizing XML rendering performance.
*   **[#2512](https://github.com/charmbracelet/crush/pull/2512): Nix Flake Support**
    *   **Status:** Open. Adds a `flake.nix` for reproducible development environments, catering to the NixOS community.

## 5. Feature Request Trends
*   **Enhanced Mouse & UI Interactivity:** Users are demanding full mouse support for complex dialogs, specifically for permission prompts ([#2527](https://github.com/charmbracelet/crush/pull/2527)) and better clipboard handling.
*   **Provider Configuration Management:** There is a push for better tools to manage and visualize config. This includes the request for self-inspection tools ([#2561](https://github.com/charmbracelet/crush/pull/2561)) and updating hardcoded model lists ([#2559](https://github.com/charmbracelet/crush/issues/2559)).
*   **Seamless Authentication:** The rapid merging of PRs regarding Hyper authentication ([#2577](https://github.com/charmbracelet/crush/pull/2577), [#2578](https://github.com/charmbracelet/crush/pull/2578)) indicates a trend toward eliminating friction in API key management.

## 6. Developer Pain Points
*   **Database Instability:** The `SQLITE_BUSY` error in v0.55.1 suggests a regression in how file locks or concurrent database access is handled, which is a blocker for users on Arch/AUR.
*   **Schema & IDE Integration:** Breaking changes in the JSON schema generation ([#2573](https://github.com/charmbracelet/crush/issues/2573)) disrupt developers who rely on LSPs/IDEs for auto-completion and validation of `crush.json`.
*   **Visual Obstruction:** The "edit approval" popup blocking the view of code changes ([#2570](https://github.com/charmbracelet/crush/issues/2570)) highlights a recurring UX tension between modal dialogs and context visibility in TUIs.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-04-08

## 1. Today's Highlights
The `v0.37.0-preview.2` release was published today, primarily serving as a patch for the previous preview version. The community is highly focused on resource management, with significant discussion surrounding memory leaks in the `Scheduler` component, performance regression tests for large chats, and UX improvements for long-scrolling sessions and SSH environments.

## 2. Releases
*   **v0.37.0-preview.2**: A hotfix release cherry-picked from commit `cb7f7d6` to patch issues in the previous `v0.37.0-preview.1`.
    *   [Release Notes](https://github.com/google-gemini/gemini-cli/pull/24842)
*   **v0.36.0-nightly.20260407**: Added role-specific metrics to `/stats` and implemented context splitting.
    *   [Full Changelog](https://github.com/google-gemini/gemini-cli/pull/24842)

## 3. Hot Issues
*   **[#24535](https://github.com/google-gemini/gemini-cli/issues/24535) - "Invalid session identifier" error**
    *   **Why it matters:** Users reporting failures when trying to resume previous conversations despite having valid API keys. It highlights fragility in session persistence.
*   **[#24863](https://github.com/google-gemini/gemini-cli/issues/24863) - Scheduler instances leak McpProgress listeners**
    *   **Why it matters:** Identified a critical memory leak where `Scheduler` instances register permanent listeners on `coreEvents` that are never disposed, leading to resource exhaustion.
*   **[#24349](https://github.com/google-gemini/gemini-cli/issues/24349) - Custom plans directory outside project root**
    *   **Why it matters:** Users want flexibility in defining where "plans" are stored, specifically to support custom directories that break the current rigid project-root assumption.
*   **[#24732](https://github.com/google-gemini/gemini-cli/issues/24732) - CRITICAL: Unhandled Promise Rejection**
    *   **Why it matters:** High-impact crash related to custom plan directories throwing unhandled exceptions, requiring immediate triage.
*   **[#24202](https://github.com/google-gemini/gemini-cli/issues/24202) - Text scrambled over SSH**
    *   **Why it matters:** Specific environment bug affecting Windows users SSH'ing into Linux environments; the CLI becomes unusable due to rendering artifacts.
*   **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) - AST-aware file reads and mapping**
    *   **Why it matters:** Strategic direction for the Agent to use Abstract Syntax Trees (AST) for more precise code navigation rather than raw text processing.
*   **[#23582](https://github.com/google-gemini/gemini-cli/issues/23582) - Subagents Awareness of Active Approval Modes**
    *   **Why it matters:** Agents are currently violating Plan/Auto-Edit modes because they are unaware of active policy constraints, leading to blocked tool calls.
*   **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819) - Implement memory routing: global vs. project**
    *   **Why it matters:** Enhancement request to distinguish between user-global preferences (e.g., "concise commits") and project-specific rules in the memory system.
*   **[#24864](https://github.com/google-gemini/gemini-cli/issues/24864) - Create Performance Regression tests**
    *   **Why it matters:** Initiative to prevent performance degradation in the full CLI loop by establishing automated benchmarks with mocked models.
*   **[#24860](https://github.com/google-gemini/gemini-cli/issues/24860) - Switch to ctrl+G for external editor**
    *   **Why it matters:** UX alignment with industry standards (vs. current `ctrl+X`).

## 4. Key PR Progress
*   **[#24870](https://github.com/google-gemini/gemini-cli/pull/24870) - Dispose Scheduler to prevent McpProgress listener leak**
    *   **Impact:** Addresses the critical leak identified in Issue #24863 and #21006 by ensuring `Scheduler` instances properly unsubscribe from events.
*   **[#24862](https://github.com/google-gemini/gemini-cli/pull/24862) - Bound memory growth in high-volume components**
    *   **Impact:** Prevents CLI crashes during long sessions by limiting the number of lines retained in `AnsiOutput` and `text-buffer` reducers.
*   **[#24861](https://github.com/google-gemini/gemini-cli/pull/24861) - Switch to ctrl+G from ctrl-X**
    *   **Impact:** Updates the external editor keybinding to `Ctrl+G` and migrates the old debug command to `F4`.
*   **[#24859](https://github.com/google-gemini/gemini-cli/pull/24859) - Added flag for EPT size and increased default size**
    *   **Impact:** Configuration update to allow larger default processing thresholds.
*   **[#24858](https://github.com/google-gemini/gemini-cli/pull/24858) - Prevent legitimate content from disappearing**
    *   **Impact:** Fixes a bug where conversational responses (e.g., poems) were hidden if immediately followed by a tool execution.
*   **[#24853](https://github.com/google-gemini/gemini-cli/pull/24853) - Preserve OAuth URLs in terminal auth flows**
    *   **Impact:** Fixes authentication failures where long OAuth URLs were truncated in narrow terminal windows.
*   **[#24763](https://github.com/google-gemini/gemini-cli/pull/24763) - Ensure robust sandbox cleanup**
    *   **Impact:** Wraps process execution in `try...finally` to ensure sidecar processes and temp files are terminated reliably.
*   **[#20406](https://github.com/google-gemini/gemini-cli/pull/20406) - Improve memory management for large tool output**
    *   **Impact:** Alleviates Out of Memory (OOM) errors by writing large shell outputs directly to disk rather than holding them in V8 memory.
*   **[#24397](https://github.com/google-gemini/gemini-cli/pull/24397) - Clean up slash command IDE listeners**
    *   **Impact:** Fixes a race condition where unmounting a hook before async initialization left listeners dangling.
*   **[#24752](https://github.com/google-gemini/gemini-cli/pull/24752) - Introduce decoupled ContextManager**
    *   **Impact:** Architectural improvement to separate context management from the sidecar process.

## 5. Feature Request Trends
*   **Performance at Scale:** Users are demanding better handling of "large chats" (60MB+ / 1400+ items). There is a clear push for performance regression tests and memory optimization.
*   **AST Integration:** Multiple issues suggest moving the agent towards AST (Abstract Syntax Tree) aware operations for more accurate code reading and mapping.
*   **Global vs. Project Memory:** Developers want the "Memory" feature to be context-aware, distinguishing between personal user preferences and specific project conventions.

## 6. Developer Pain Points
*   **Memory Leaks:** Recurring reports of listeners (McpProgress) and schedulers not being disposed, causing the CLI to consume increasing amounts of memory over time.
*   **SSH/Terminal Compatibility:** Persistent issues with text rendering (scrambling) and scrolling when the CLI is run inside SSH sessions, Tmux, or complex terminal buffers.
*   **Scrolling UX:** Users report "flashing" and "jumping" scrollbars when navigating long chat histories, degrading the experience significantly.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest: 2026-04-08

## 1. Today's Highlights
The Copilot CLI team is rapidly addressing user experience friction points, releasing two updates (v1.0.20 and v1.0.21) within 24 hours. The focus is clearly on stabilizing the terminal rendering engine—specifically fixing input handling, spinner synchronization, and the controversial mouse reporting/copy-paste behavior—while simultaneously expanding enterprise capabilities with OpenTelemetry monitoring support.

## 2. Releases
**v1.0.21 (2026-04-07)**
*   **New Command:** Added `copilot mcp` for direct server management.
*   **UX Fixes:** Fixed a "stuck" spinner during async shell commands and eliminated flickering in the slash command picker.
*   **Enterprise:** Fixed keyboard input submission for GitHub Enterprise URLs in the login flow.
*   *Link:* [github.com/github/copilot-cli/releases](https://github.com/github/copilot-cli)

**v1.0.20 (2026-04-07)**
*   **Observability:** Added `copilot help monitoring` with OpenTelemetry (OTel) configuration details (Parity with Claude Code).
*   **Performance:** Spinner now stays active until background agents finish, with user input available throughout.
*   **Azure:** Azure OpenAI BYOK now defaults to the GA versionless v1 route.
*   *Link:* [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

## 3. Hot Issues
1.  **[Authentication Regression] Auto-accepting Keychain prompts** ([#2494](https://github.com/github/copilot-cli/issues/2494))
    *   **Why it matters:** A critical regression in v1.0.16 causes `copilot login` to bypass user confirmation for keychain access, breaking expected security flows.
    *   **Reaction:** 8 comments in 4 days; users are blocked on authentication.

2.  **[Input/Copy] Copy-on-select and `/copy` broken** ([#2344](https://github.com/github/copilot-cli/issues/2344), [#2472](https://github.com/github/copilot-cli/issues/2472))
    *   **Why it matters:** The introduction of mouse reporting (v1.0.15+) broke native terminal copy-on-select features and caused the `/copy` command to fail or return text with encoding artifacts.
    *   **Reaction:** High frustration; 7 upvotes on #2344.

3.  **[Sessions] `/resume` doesn't show recent sessions** ([#2446](https://github.com/github/copilot-cli/issues/2446))
    *   **Why it matter:** A bug in `initializeWorkspace()` skips git context detection, causing valid sessions to be missing from the resume picker.
    *   **Reaction:** Significant workflow disruption for multi-session users.

4.  **[MCP] Support MCP Sampling** ([#1748](https://github.com/github/copilot-cli/issues/1748))
    *   **Why it matters:** Users want feature parity with GitHub Copilot Chat to utilize the full capabilities of the MCP (Model Context Protocol) ecosystem.
    *   **Reaction:** 3 upvotes; highly requested by power users.

5.  **[Tools] Infinite loop on empty bash tool call** ([#1444](https://github.com/github/copilot-cli/issues/1444))
    *   **Why it matters:** The CLI enters an infinite loop issuing 5000+ failed calls if a bash command is invoked with empty args.
    *   **Reaction:** Critical stability bug.

6.  **[Enterprise] OTel telemetry support** ([#2471](https://github.com/github/copilot-cli/issues/2471))
    *   **Why it matters:** Addressed in v1.0.20. Enterprises need observability (metrics, token usage) for CLI agents, similar to Claude Code.
    *   **Reaction:** Met with approval by enterprise users.

7.  **[Models] Support for Local AI** ([#2531](https://github.com/github/copilot-cli/issues/2531))
    *   **Why it matters:** Developers want the flexibility to run Copilot CLI against local backends (Ollama, LM Studio) for privacy or cost reasons.
    *   **Reaction:** Recurring feature request trend.

8.  **[Cancellation] "Stuck in Cancelling" state** ([#2502](https://github.com/github/copilot-cli/issues/2502), [#2557](https://github.com/github/copilot-cli/issues/2557))
    *   **Why it matters:** Pressing Escape or double-Escape to cancel an operation hangs the CLI indefinitely, forcing a process kill.
    *   **Reaction:** Major usability frustration.

9.  **[Context] Auto-compact to prevent API 400 errors** ([#2008](https://github.com/github/copilot-cli/issues/2008))
    *   **Why it matters:** Long sessions (>190 messages) crash with a 400 Bad Request; users want automatic context management to prevent data loss.
    *   **Reaction:** 3 upvotes.

10. **[UI] Disable bottom-aligned input** ([#2529](https://github.com/github/copilot-cli/issues/2529))
    *   **Why it matters:** The input area jumps up/down when slash commands are used, causing visual distraction (motion sickness/accessibility).
    *   **Reaction:** Users requesting a toggle or static positioning.

## 4. Key PR Progress
1.  **Guard against duplicate PATH entries** ([#2565](https://github.com/github/copilot-cli/pull/2565))
    *   **Change:** The installer logic has been updated to prevent appending the PATH configuration multiple times if the installer is run consecutively without a shell restart.
    *   **Status:** Open.

2.  **Developer skill** ([#2556](https://github.com/github/copilot-cli/pull/2556))
    *   **Change:** "Level up skills" – likely an enhancement to the core agent skill set or internal prompting.
    *   **Status:** Open.

*(Note: Most closed issues in the digest were resolved via internal commits or releases v1.0.20/21 rather than distinct, open PRs listed in the last 24h).*

## 5. Feature Request Trends
*   **Observability & Enterprise Control:** There is a strong push for "Enterprise Parity" with other AI coding tools. Requests for **OpenTelemetry (OTel)** integration, **persistent permissions**, and **SSO/plugin authentication** fixes dominate the enterprise conversation.
*   **Local & Custom Model Support:** Users are increasingly asking to decouple the CLI from the hosted GitHub backend, requesting support for **Local AI (Ollama)** and explicit model selection in agent frontmatter.
*   **UX/Accessibility Customization:** Users want control over the "visuals" of the CLI, specifically requesting toggles for **bottom-aligned input**, **mouse reporting**, and **terminal bells**.

## 6. Developer Pain Points
*   **The "Copy" Crisis:** The most significant pain point right now is the broken clipboard interaction. Changes made to support mouse rendering (alt-screen) have destroyed standard terminal workflows (copy-on-select), and the internal `/copy` command is pasting Byte Order Marks (BOMs) or failing entirely.
*   **Flaky Authentication:** Developers are facing repeated regressions with `copilot login`, specifically regarding keychain prompts and Enterprise SSO redirects during plugin installation.
*   **Unstoppable Agents:** The inability to reliably cancel operations (getting stuck in "Cancelling" state) and agents entering infinite loops on empty tool calls is causing fear of running complex tasks.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-04-08

## 1. Today's Highlights

The Kimi Code CLI community is currently grappling with significant **stability concerns in version 1.30.0**, specifically regarding API connectivity, MCP (Model Context Protocol) errors, and the reliability of the new Hooks system. Despite these issues, development velocity remains high with major architectural proposals on the table, including a community-driven proposal to rewrite the CLI in TypeScript and the introduction of a "Three-tier Rules System" for better project management.

## 2. Releases

**No new releases** in the last 24 hours. The current latest version is **v1.30.0**.

## 3. Hot Issues

*   **[#1775: Connection Error (v1.30.0)](https://github.com/MoonshotAI/kimi-cli/issues/1775)**  
    **Impact:** Critical. Users on the latest version are experiencing fundamental connectivity issues with the `kimi-for-coding` model. The high comment count on similar recent errors suggests this is a widespread blocker for developers attempting to work today.

*   **[#1344 & #778: Persistent "Invalid Request Error" (400)](https://github.com/MoonshotAI/kimi-cli/issues/1344)**  
    **Impact:** High. These long-standing threads (dating back to March and January) continue to be active, indicating a systemic issue with how the CLI handles API requests under certain conditions, affecting users across Darwin and Windows platforms.

*   **[#1785: MCP Structured Content Error](https://github.com/MoonshotAI/kimi-cli/issues/1785)**  
    **Impact:** High. As users attempt to integrate advanced tools via MCP, they are hitting "Field name duplicated" errors in the structured content parsing. This breaks the tool-using capability which is central to the CLI's value proposition.

*   **[#1779: `UserPromptSubmit` Hook Bug](https://github.com/MoonshotAI/kimi-cli/issues/1779)**  
    **Impact:** Medium. The recently introduced Hooks system has a bug where the `prompt` field is sent empty. This prevents external tools and scripts from reacting to user input correctly, breaking the workflow for automation-heavy users.

*   **[#1774: File Mention Path Resolution Error](https://github.com/MoonshotAI/kimi-cli/issues/1774)**  
    **Impact:** Medium. Users are finding that the `@` file mention feature fails to locate files correctly in v1.30.0, specifically when using the Kimi Web interface integration. This hinders the ability to contextually code.

*   **[#1772: Request for Lifecycle Hooks](https://github.com/MoonshotAI/kimi-cli/issues/1772)**  
    **Impact:** Strategic. Users want deeper integration points (`sessionStart/End`, `PromptInput`) to monitor and manage the CLI agent externally. This indicates a desire to treat the CLI as a programmable interface rather than just a chat tool.

*   **[#1747: Three-tier Rules System Proposal](https://github.com/MoonshotAI/kimi-cli/issues/1747)**  
    **Impact:** Strategic. A strong proposal to implement Global, User, and Project-level rules to match feature parity with competitors like Claude Code. This is highly requested for better context management in large monorepos.

*   **[#1375: File Mentions "Can't Find Files" (Closed)](https://github.com/MoonshotAI/kimi-cli/issues/1375)**  
    **Impact:** Medium (Historical). While closed, this issue highlights the difficulty of file discovery in large repos. It was resolved by optimizing file traversal, a fix that likely improved performance for many users.

*   **[#1773: Function Name Validation Error](https://github.com/MoonshotAI/kimi-cli/issues/1773)**  
    **Impact:** Low/Medium. Users encountering "function name is invalid" errors suggest a mismatch between the CLI's generated tool calls and the API's validation logic.

*   **[#1783 & #1782: Session Management and Memory](https://github.com/MoonshotAI/kimi-cli/issues/1783)**  
    **Impact:** Usability. Users are requesting commands like `/delete` to manage sessions and better persistence mechanisms to "restore work sites" after shutdowns.

## 4. Key PR Progress

*   **[#1707: Rewrite to Bun + TypeScript + React Ink](https://github.com/MoonshotAI/kimi-cli/pull/1707)**  
    **Status:** Open. This is a massive, controversial proposal (`"kimicli用python是彻底的失败"` - "Using Python for kimicli was a complete failure"). It suggests a complete rewrite of the CLI using modern JS infrastructure for better performance and UI rendering. It is currently under intense discussion.

*   **[#1784: AWS Bedrock Mantle Support](https://github.com/MoonshotAI/kimi-cli/pull/1784)**  
    **Status:** Open. Adds AWS Bedrock Mantle as a first-class platform in the `/login` flow, expanding the infrastructure options for enterprise users.

*   **[#1780: Fix MCP Worker Crashes](https://github.com/MoonshotAI/kimi-cli/pull/1780)**  
    **Status:** Open. A critical fix that gracefully handles MCP connection failures (e.g., port conflicts) so the entire CLI worker doesn't crash, leaving messages in a permanent "thinking" state.

*   **[#1781: Fix Hooks Empty Prompt](https://github.com/MoonshotAI/kimi-cli/pull/1781)**  
    **Status:** Open. Addresses the bug where `UserPromptSubmit` sends an empty string. It involves updating `kimisoul.py` to correctly extract text from `ContentPart` lists passed by the Shell UI.

*   **[#1715: Claude-Compatible Local Plugin Support](https://github.com/MoonshotAI/kimi-cli/pull/1715)**  
    **Status:** Open (Draft). Adds a compatibility layer to discover and load local Claude Plugins (`--plugin-dir`), significantly expanding the ecosystem of available tools for Kimi users.

*   **[#1743: `/btw` Side Question Command](https://github.com/MoonshotAI/kimi-cli/pull/1743)**  
    **Status:** Closed/Merged. A major UX addition allowing users to ask "side questions" without interrupting the main agent's context or workflow. Great for quick queries.

*   **[#1756: Diagnostic Logging & Export](https://github.com/MoonshotAI/kimi-cli/pull/1756)**  
    **Status:** Closed/Merged. Adds `logger.warning/error` at 25+ key error paths and bundles these logs when users run `kimi export`. This is a huge win for debugging user issues remotely.

*   **[#1751: `PermissionRequest` Hook](https://github.com/MoonshotAI/kimi-cli/pull/1751)**  
    **Status:** Open. Introduces a new hook that pauses execution for tool approval, enabling desktop notifications or remote approval workflows.

*   **[#1777: Three-tier Rules System Implementation](https://github.com/MoonshotAI/kimi-cli/pull/1777)**  
    **Status:** Open. The implementation PR for the rules management proposal. It aims to bring Kimi to feature parity with other AI coding agents regarding global/project specific instructions.

*   **[#1588: Git Ls-Files Optimization](https://github.com/MoonshotAI/kimi-cli/pull/1588)**  
    **Status:** Closed. Fixes the performance issue where `@` file mentions failed in large repositories (65k+ files) by switching from `os.walk` to `git ls-files`.

## 5. Feature Request Trends

*   **Advanced Session Management:** Multiple users are requesting better control over sessions, including commands to `/delete` or `/remove` old sessions (#1783) and the ability to save/restore specific memory "branches" or contexts (#1782).
*   **Rules & Context Hierarchy:** There is a clear demand for a "Three-tier Rules System" (#1747) to manage guidelines at Global, User, and Project levels, moving away from flat configuration files.
*   **Lifecycle Hooks:** Developers want to hook into the CLI lifecycle (#1772) to build custom workflows, such as triggering external actions when a prompt is submitted or a session ends.

## 6. Developer Pain Points

*   **Frequent API/Connection Errors:** A surge in issues regarding 400 errors (#1344, #778) and generic connection errors (#1775) in v1.30.0 suggests instability in the client-server communication layer.
*   **MCP Instability:** While powerful, the Model Context Protocol integration is fragile. Issues range from connection failures crashing the worker (#1780) to parsing errors in structured content (#1785).
*   **File Mention Reliability:** Despite recent fixes, file mentions remain a pain point. Users are reporting path resolution errors (#1774) and discovery failures, which are critical for coding agents that need to read file contents.
*   **Platform Fatigue (Windows/Darwin):** Several issues highlight specific frustrations on Windows (Powerhell context) and Darwin (arm64) environments, indicating that cross-platform parity needs attention.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-08

## 1. Today's Highlights
Today's digest highlights significant stability concerns with the `opencode serve` command and session management in multi-instance environments. On the feature front, core refactoring of the tool and snapshot systems has been merged to simplify agent initialization, while new proposals for "Coordinator shells" and DB-backed agent teams signal a push toward more complex, multi-agent architectures.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues
Here are 10 noteworthy issues updated in the last 24 hours:

1.  **[#21372 [bug] Session File Change Summary Not Isolated Per Session](https://github.com/anomalyco/opencode/issues/21372)**
    *   **Why it matters:** A critical state management bug where running multiple OpenCode sessions simultaneously causes file change summaries to leak across sessions, confusing users about what actually changed in the current context.
2.  **[#21375 [bug] opencode serve stops polling](https://github.com/anomalyco/opencode/issues/21375)**
    *   **Why it matters:** Reports of `opencode serve` entering a zombie state where it listens but stops responding to HTTP requests. The process must be restarted, indicating a serious event loop or socket handling regression.
3.  **[#21164 [core] Qwen 3.6 plus rate limits](https://github.com/anomalyco/opencode/issues/21164)**
    *   **Why it matters:** High community engagement (29 comments). Users utilizing Alibaba's Qwen models face "request rate increased" errors leading to job cancellation. There is a strong demand for OpenCode to handle automatic retries with backoff.
4.  **[#8140 [enhancement] Configurable context limits](https://github.com/anomalyco/opencode/issues/8140)**
    *   **Why it matters:** A long-standing top request (35 👍). Users want granular control over context limits and auto-compaction triggers to optimize costs and prevent "context nearly full" errors during long coding sessions.
5.  **[#12472 Native Claude Code hooks compatibility](https://github.com/anomalyco/opencode/issues/12472)**
    *   **Why it matters:** As OpenCode positions itself as a drop-in replacement for Claude Code, users are requesting support for `PreToolUse` and `PostToolUse` hooks found in `~/.claude/settings.js` to allow custom logic injection.
6.  **[#17505 [core, acp] session/update notifications timing](https://github.com/anomalyco/opencode/issues/17505)**
    *   **Why it matters:** Affects integrations using the ACP (Agent Communication Protocol). Notifications arrive *after* the turn ends, causing clients like Fabriqa to display incomplete content.
7.  **[#7926 [opentui] Disable mouse capture](https://github.com/anomalyco/opencode/issues/7926)**
    *   **Why it matters:** High UX demand (15 👍). The TUI currently hijacks mouse input, breaking native terminal copy/paste in multiplexers like tmux or Zellij.
8.  **[#21034 [bug] Gemma-4 interaction loops](https://github.com/anomalyco/opencode/issues/21034)**
    *   **Why it matters:** Users running local Gemma-4 models (via llama.cpp or LM Studio) are experiencing "tool loops" where the agent gets stuck in a failure cycle despite recent tokenizer fixes.
9.  **[#19215 [FEATURE] DB-backed agent team coordination](https://github.com/anomalyco/opencode/issues/19215)**
    *   **Why it matters:** Architects are looking beyond simple sub-agents. This proposal requests a database-backed system to coordinate parallel agents, shared messaging, and memory, moving toward full multi-agent orchestration.
10. **[#20368 [FEATURE] Coordinator shell + fork mode](https://github.com/anomalyco/opencode/issues/20368)**
    *   **Why it matters:** A proposal to evolve the "Task" tool into a "Coordinator" that can fork processes, suggesting a desire for OpenCode to manage complex, hierarchical workflows rather than linear chats.

## 4. Key PR Progress
Significant Pull Request activity includes:

1.  **[#21244 refactor(snapshot): store unified patches](https://github.com/anomalyco/opencode/pull/21244)**
    *   **Status:** Closed (Merged)
    *   **Impact:** A significant backend change. Instead of storing full file snapshots (`before`/`after`), OpenCode now stores unified patches. This reduces storage overhead and prepares the system for more robust diff handling in VCS integrations.
2.  **[#21052 core: refactor tool system](https://github.com/anomalyco/opencode/pull/21052)**
    *   **Status:** Closed (Merged)
    *   **Impact:** Simplifies tool initialization by removing agent context dependencies. This makes tool behavior more predictable and fixes issues where tools might behave differently depending on the active agent.
3.  **[#21377 docs: add opencode-claude-commands](https://github.com/anomalyco/opencode/pull/21377)**
    *   **Status:** Open
    *   **Impact:** Documentation update for a new plugin (`opencode-claude-commands`) that allows usage of commands defined in `.claude` directories, improving interoperability with existing Claude configurations.
4.  **[#21399 feat: Context usage tool + New Session tool](https://github.com/anomalyco/opencode/pull/21399)**
    *   **Status:** Open
    *   **Impact:** Adds tools to explicitly check context usage and start new sessions. This allows users to build custom workflows for managing long-running tasks without relying on auto-compaction.
5.  **[#20677 feat: voice mode](https://github.com/anomalyco/opencode/pull/20677)**
    *   **Status:** Open (Active)
    *   **Impact:** A massive feature addition implementing Speech-to-Text (STT), Text-to-Speech (TTS), Voice Activity Detection (VAD), and "barge-in" (interrupting the AI). It moves OpenCode toward a full voice-controlled IDE experience.
6.  **[#20676 feat: web performance optimizations](https://github.com/anomalyco/opencode/pull/20676)**
    *   **Status:** Open
    *   **Impact:** Introduces `webMode` and `webUrl` config options. This allows decoupling the frontend delivery (CDN/Proxy) from the core server, improving load times and remote access performance.
7.  **[#21192 fix(tui): sentence case for theme mode](https://github.com/anomalyco/opencode/pull/21192)**
    *   **Status:** Closed (Merged)
    *   **Impact:** Minor UI polish to standardize capitalization in the command palette.
8.  **[#20939 fix(skill): read plugin-modified config](https://github.com/anomalyco/opencode/pull/20939)**
    *   **Status:** Open
    *   **Impact:** Fixes a bug where plugins registering skill directories via config hooks were ignored, preventing custom skill paths from being discovered correctly.
9.  **[#21339 fix(tui): simplify console org display](https://github.com/anomalyco/opencode/pull/21339)**
    *   **Status:** Open
    *   **Impact:** A UI cleanup to remove redundant organization icons and suffixes in the console, reducing visual clutter for enterprise users.
10. **[#20491 feat: add Kiro provider](https://github.com/anomalyco/opencode/pull/20491)**
    *   **Status:** Open
    *   **Impact:** Adds support for the "Kiro" provider (AWS CodeWhisperer), utilizing the AWS Event Stream binary protocol.

## 5. Feature Request Trends
Based on the latest issues, the community is strongly advocating for:
*   **Multi-Agent Orchestration:** There is a clear shift from single-agent chats to complex systems. Requests for "Coordinator shells," "DB-backed team coordination," and "parallel sub-agents" suggest users want OpenCode to manage distributed AI teams.
*   **Rate Limit Handling:** With the rise of cheaper/free hosted models (like Qwen/Alibaba), users are requesting intelligent "retry with backoff" logic to handle strict API rate limits without crashing the session.
*   **Claude Compatibility:** Deepening integration with the Claude ecosystem continues to be a priority, specifically regarding Hooks (`PreToolUse`) and settings parity.

## 6. Developer Pain Points
*   **Session Context Bleeding:** The issue regarding file change summaries appearing across different sessions (#21372) indicates frustration with state isolation when multitasking.
*   **TUX (Terminal User Experience) Friction:** Users are increasingly annoyed by the TUI capturing mouse input, preventing standard terminal operations like copy/paste in multiplexers.
*   **Local Model Reliability:** Issues with Gemma-4 tool loops and Ollama integration (`read_file` tool mismatches) suggest that while local LLM support is popular, it remains brittle compared to API-based solutions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-08

## 1. Today's Highlights
The Qwen Code community is actively addressing stability concerns following the **v0.14.1** release, specifically a critical **VS Code extension blank screen bug** (#2959) which has already been patched in v0.14.2. Concurrently, the development team is pushing forward with significant enhancements to the CLI experience, including the introduction of a deterministic `/plan` mode, improved CJK text navigation, and an adaptive output token strategy designed to optimize GPU costs.

## 2. Releases
*   **v0.14.1 & v0.14.1-preview.0**: These releases focused on internal stability.
    *   **Changes**: Cleanup of abort listeners in error handlers (@chinesepowered) and a fix for the CLI to commit pending AI responses before adding hook system messages (@pic4xiu).
*   **v0.14.2 (Patch)**: Although not listed in the "Latest Releases" timeline, PR #2959 confirms a bump to v0.14.2 to address the critical blank screen issue affecting the VS Code extension.

## 3. Hot Issues
*   **[#2956 (CLOSED)](https://github.com/QwenLM/qwen-code/issues/2956): VS Code 0.14.1 Blank Screen**
    *   **Impact**: Critical. Users reported the Qwen panel became completely unresponsive after upgrading.
    *   **Reaction**: High engagement (8 comments, 2 👍). Rapidly resolved in PR #2959 (v0.14.2).
*   **[#1922 (CLOSED)](https://github.com/QwenLM/qwen-code/issues/1922): Edit Tool Failures**
    *   **Impact**: High. Regression where the edit tool failed to modify Python files.
    *   **Reaction**: 11 comments. User noted this was a recurring issue previously fixed in v0.10.5.
*   **[#2605 (OPEN)](https://github.com/QwenLM/qwen-code/issues/2605): Windows Clipboard Image Support**
    *   **Impact**: Medium. Feature request to paste images directly from the clipboard in the Windows CLI.
    *   **Reaction**: 10 comments. High demand for better multimodal input support on Windows.
*   **[#93 (CLOSED)](https://github.com/QwenLM/qwen-code/issues/93): Aggressive Code Deletion**
    *   **Impact**: High Trust/Safety. User reported AI deleting large chunks of code (2k lines -> 40 lines) during optimization.
    *   **Reaction**: 6 comments. Highlights concerns about agent autonomy and context handling.
*   **[#2947 (OPEN)](https://github.com/QwenLM/qwen-code/issues/2947): PDF Support in Multimodal Models**
    *   **Impact**: Medium. The `read_file` tool does not support PDFs, forcing users to convert files manually.
    *   **Reaction**: Users expect "Multimodal" capabilities to include standard document formats like PDF natively.
*   **[#2339 (OPEN)](https://github.com/QwenLM/qwen-code/issues/2339): Telegram Bot Mode**
    *   **Impact**: Feature Request. Proposal for a `--telegram` flag to run Qwen Code as a bot.
    *   **Reaction**: 3 comments, 2 👍. Indicates desire for remote/async interaction workflows.
*   **[#2951 (OPEN)](https://github.com/QwenLM/qwen-code/issues/2951): Global .qwen Directory Configuration**
    *   **Impact**: Environment Flexibility. Request for an environment variable to change the default `~/.qwen` path for storage on mounted drives.
*   **[#2935 (OPEN)](https://github.com/QwenLM/qwen-code/issues/2935): Stability Issues (Crashes)**
    *   **Impact**: Stability. App crashed twice while checking WSL/Podman configs on Windows.
    *   **Reaction**: Users are prioritizing core stability over new features.
*   **[#2867 (OPEN)](https://github.com/QwenLM/qwen-code/issues/2867): Severe Hallucinations**
    *   **Impact**: High. Report of AI claiming not to see files and randomly deleting code.
    *   **Reaction**: Highlights ongoing challenges with context grounding.
*   **[#2909 (OPEN)](https://github.com/QwenLM/qwen-code/issues/2909): PowerShell vs CMD**
    *   **Impact**: Workflow. AI ignores system prompts to use PowerShell when the default terminal is CMD on Windows.

## 4. Key PR Progress
*   **[#2959 (Fix): VS Code Blank Screen](https://github.com/QwenLM/qwen-code/pull/2959)**
    *   **Status**: Merged (v0.14.2). Fixed esbuild `external` config that was accidentally bundling Node.js modules into the browser extension.
*   **[#2921 (Feat): /plan Command](https://github.com/QwenLM/qwen-code/pull/2921)**
    *   **Status**: Open. Introduces a dedicated `/plan` slash command for a disk-based planning workflow, enhancing the existing "Plan Mode" with better structure and approval options.
*   **[#2932 (Feat): Enhanced /review](https://github.com/QwenLM/qwen-code/pull/2932)**
    *   **Status**: Open. Adds deterministic analysis, autofix capabilities, and security hardening to the `/review` command to compete with Copilot/Claude.
*   **[#2942 (Feat): CJK Word Segmentation](https://github.com/QwenLM/qwen-code/pull/2942)**
    *   **Status**: Open. Implements intelligent segmentation for Chinese/Japanese/Korean text, enabling correct `Ctrl+Arrow` navigation in the CLI.
*   **[#2898 (Feat): Adaptive Output Token Escalation](https://github.com/QwenLM/qwen-code/pull/2898)**
    *   **Status**: Open. Optimizes server concurrency by defaulting to 8K output tokens and escalating to 64K only upon truncation, saving GPU resources.
*   **[#2904 (Feat): Contextual Tips System](https://github.com/QwenLM/qwen-code/pull/2904)**
    *   **Status**: Open. Proactively warns users when context usage exceeds 80% or 95%, suggesting commands like `/compress`.
*   **[#2826 (Fix): MSYS2 Crash](https://github.com/QwenLM/qwen-code/pull/2826)**
    *   **Status**: Open. Fixes application crashes on Windows when running inside MSYS2 UCRT environments by correcting bash path detection.
*   **[#2949 (Feat): Skill Model Override](https://github.com/QwenLM/qwen-code/pull/2949)**
    *   **Status**: Open. Allows specific skills to define which model executes them via YAML frontmatter (e.g., forcing a heavy model for specific complex tasks).
*   **[#2923 (Feat): Customizable Status Line](https://github.com/QwenLM/qwen-code/pull/2923)**
    *   **Status**: Open. Adds a `/statusline` command allowing users to configure shell commands to display dynamic info in the footer.
*   **[#2917 (Feat): /thinkback Command](https://github.com/QwenLM/qwen-code/pull/2917)**
    *   **Status**: Open. A new slash command that uses the LLM to generate a structured timeline of decisions and changes from the session history.

## 5. Feature Request Trends
*   **UI/UX Workflow Control**: There is a strong demand for features that allow users to inspect and control the AI's planning process (e.g., `/plan`, `/thinkback`) and reduce interface noise (compact mode, fixing scroll flickering).
*   **Environment Flexibility**: Users are requesting more control over their runtime environments, specifically supporting **PowerShell** natively on Windows and allowing **environment variables** to configure paths like `.qwen`.
*   **Notification Systems**: Requests are emerging for hooks/notifications (sound or callbacks) when long-running tasks complete or errors occur.

## 6. Developer Pain Points
*   **Permission Fatigue**: Multiple reports (#2946, #2906) indicate frustration with the agent asking for access permission repeatedly (sometimes dozens of times per session), interrupting the flow of research or refactoring tasks.
*   **Terminal/UI Stability**: Issues with "screen flickering" (#2903, #2924) and "infinite scrolling" (#2972) suggest the TUI rendering logic needs attention, especially during high-frequency updates or git operations.
*   **Autonomy vs. Safety**: A recurring tension exists where users want the AI to be more autonomous ("stop asking for permission") but are simultaneously frustrated when the AI makes unapproved destructive changes (deleting code).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*