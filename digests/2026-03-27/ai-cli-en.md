# AI CLI Tools Community Digest 2026-03-27

> Generated: 2026-03-27 00:12 UTC | Tools covered: 7

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

## AI CLI Tools Ecosystem Report: 2026-03-27

### 1. Ecosystem Overview
The AI CLI landscape is currently undergoing a critical transition from basic command-line wrappers to robust, agentic development platforms. The dominant theme for this cycle is **workflow integration and extensibility**, with major players like Claude Code, OpenAI Codex, and Kimi CLI heavily investing in Plugin and Hook systems to allow deep customization of agent lifecycles. Simultaneously, there is a strong industry-wide focus on **standardization**, specifically through the adoption of the Model Context Protocol (MCP), though implementation friction persists. While functional capabilities are expanding rapidly, **stability and resource management**—particularly surrounding sandboxing, memory leaks, and UI rendering—remain the primary bottlenecks to enterprise adoption across all tools.

### 2. Activity Comparison

| Tool | Release Status | Issue Activity (High Severity) | PR Velocity | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **Active** (v2.1.85) | **High** (10 Critical bugs, 315👍 top issue) | **Moderate** (Plugin ecosystem growth) | Ecosystem Expansion, Enterprise Auth |
| **OpenAI Codex** | **Active** (v0.117.0) | **Critical** (Burning tokens, ACL corruption) | **High** (Refactoring/Modularity) | Plugin Architecture, Core Refactoring |
| **Gemini CLI** | **Patch** (v0.35.2 / v0.36.0-pre) | **High** (Silent hangs, Memory bloat) | **High** (Performance hotfixes) | Stability & Memory Optimization |
| **GitHub Copilot CLI** | **Patch** (v1.0.12-2) | **Medium** (UI flickering, Latency) | **Low** (Maintenance/Env vars) | Hooks & Environment Extensibility |
| **Kimi Code CLI** | **Stable** (v1.17.0) | **Medium** (Schema incompatibility, Memory leaks) | **High** (Major Auth/Hooks rewrites) | Lifecycle Hooks, Protocol Compatibility |
| **OpenCode** | **Active** (v1.3.3) | **High** (Infinite loops, Provider errors) | **Moderate** (Architectural shifts) | TUI Performance, Vendor Decoupling |
| **Qwen Code** | **Preview** (v0.13.1-pre) | **Medium** (Context bloat, Platform bugs) | **High** (LSP/Channels features) | Platform Parity, IDE Integration |

### 3. Shared Feature Directions
*   **Extensibility (Hooks & Plugins):** There is a universal shift toward **event-driven architectures**.
    *   **Claude Code** is solidifying its Plugin ecosystem with documentation and lifecycle management.
    *   **Kimi CLI** is proposing a comprehensive "Lifecycle Hooks" system (PreToolUse, PostToolUseFailure).
    *   **GitHub Copilot CLI** is introducing Plugin Hooks with new template variables (`{{project_dir}}`).
*   **MCP (Model Context Protocol) Integration:** Interoperability is a top priority, but tooling is catching up.
    *   **OpenAI Codex** is extracting MCP into a dedicated `codex-mcp` crate for better modularity.
    *   **Kimi CLI** faces critical friction due to its proprietary "Moonshot Flavored" JSON Schema conflicting with standard MCP.
*   **"Plan Mode" vs. "Auto Mode":** Tools are struggling to balance safety with autonomy.
    *   **Claude Code** and **Gemini CLI** are both plagued by bugs where "Plan Mode" agents accidentally modify files despite read-only constraints.
    *   **OpenAI Codex** and **Kimi CLI** users are requesting robust "Auto-Edit" flows that can handle tool errors gracefully without halting the entire session.

### 4. Differentiation Analysis
*   **Claude Code:** Focused on the **"Agentic Enterprise"**. It is leading in native PowerShell support and complex MCP server configurations, positioning itself as the choice for sophisticated, multi-model environments.
*   **OpenAI Codex:** Focused on **Architecture & Performance**. The team is undertaking heavy refactoring (Rust crates, removing legacy TUI splits) to build a modular, high-performance foundation, though currently hampered by resource inefficiencies ("Burning tokens").
*   **Gemini CLI:** Focused on **Stability & UI Performance**. The engineering team is currently in "crunch mode" fixing critical memory bloat (280MB leaks) and infinite rendering loops, prioritizing a smooth TUI experience over new features.
*   **GitHub Copilot CLI:** Focused on **IDE Integration & Convenience**. It is tightly coupled with the GitHub ecosystem but lags behind in standalone innovation, focusing instead on environment hooks and CLI quality-of-life (clipboard, status lines).
*   **OpenCode:** The **"Universal Client"**. Prioritizing vendor decoupling (moving away from Bun, supporting GPT-5.4 fast mode) and offering a TUI-first experience. It serves users who want to switch between providers (OpenAI, Anthropic, local) seamlessly.
*   **Qwen Code:** Focused on **Niche Localization & Chat Ops**. Uniquely integrating with messaging platforms (Telegram/WeChat) via "Channels," targeting Asian markets and specific enterprise workflows (Alibaba Cloud).

### 5. Community Momentum & Maturity
*   **High Maturity / Slowing:** **GitHub Copilot CLI**. Activity is mostly maintenance-based; the tool is stable but lacks the rapid innovation seen elsewhere.
*   **High Maturity / High Growth:** **Claude Code**. Despite critical bugs (context compaction deadlocks), the community is booming with plugin development, indicating strong developer buy-in.
*   **Rapid Iteration / Volatile:** **OpenAI Codex** and **Kimi CLI**. Both are undergoing significant architectural changes (Codex's refactoring, Kimi's Auth rewrites). High PR velocity suggests active development but introduces instability.
*   **Stabilizing:** **Gemini CLI**. Shifting from feature addition to performance optimization, attempting to solidify the user experience.

### 6. Trend Signals
*   **The "Context Compaction" Crisis:** As models handle longer sessions, **Context Window Management** is becoming the single biggest technical hurdle. Reports of deadlocks during compaction (Claude), context drift (OpenAI), and excessive token usage on simple prompts (Qwen) suggest current compression algorithms are failing to meet production demands.
*   **Sandbox Friction is the New Dependency Hell:** While security is paramount, **Over-Sandboxing** is breaking core workflows.
    *   ACL corruption on Windows (OpenAI).
    *   Read-only Git directories preventing commits (Qwen/OpenAI).
    *   "Plan Mode" deadlocks unable to create plan files (Gemini).
    *   *Signal:* Developers are demanding "trust-based" or configurable security boundaries rather than rigid default sandboxes.
*   **Rise of "Permissions Fatigue":** Across **Claude Code**, **Kimi**, and **Qwen**, users are reporting exhaustion with constant permission prompts. The trend is moving toward **"Set-and-Forget"** policies (e.g., "Always allow" rules) and AI-driven risk assessment (Claude Code's "Bark" hook) to reduce friction.
*   **Multi-Modal in CLI:** Image support is maturing from "experimental" to "expected."
    *   **OpenCode** and **Qwen** are addressing clipboard image pasting.
    *   **Claude Code** is fixing 20MB+ image upload crashes.
    *   *Signal:* Vision capabilities are now a baseline requirement for competitive CLI tools.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Data as of 2026-03-27
**Repository:** anthropics/skills

---

## 1. Top Skills Ranking
*Based on PR visibility and community interaction signals.*

**#514: document-typography**
*   **Function:** Quality control for generated documents (fixes orphan words, widow paragraphs, numbering misalignment).
*   **Status:** [OPEN](https://github.com/anthropics/skills/pull/514)
*   **Highlights:** Addresses a ubiquitous friction point in AI output—users rarely request better typography but consistently require it. This PR targets structural polish rather than just content generation.

**#210: frontend-design (Improvement)**
*   **Function:** Refines the `frontend-design` skill for better clarity, actionability, and coherence.
*   **Status:** [OPEN](https://github.com/anthropics/skills/pull/210)
*   **Highlights:** Focuses on token efficiency and executable instructions. The author argues the current skill is too "educational" and not operational enough for Claude to follow effectively in a single session.

**#83: skill-quality-analyzer & skill-security-analyzer**
*   **Function:** Meta-tools for analyzing Skills across structure, documentation, security, and performance.
*   **Status:** [OPEN](https://github.com/anthropics/skills/pull/83)
*   **Highlights:** A "bootstrapping" effort to improve the ecosystem quality. These skills aim to automate the review process for community submissions, critical as the repository scales.

**#486: ODT (OpenDocument Text)**
*   **Function:** Create, fill templates, and parse `.odt` files (LibreOffice/OpenOffice standard).
*   **Status:** [OPEN](https://github.com/anthropics/skills/pull/486)
*   **Highlights:** Expands format support beyond Markdown/Office to an open ISO standard. Offers practical utility for enterprise and government environments locked into LibreOffice ecosystems.

**#536: roadmap-pilot**
*   **Function:** Incremental codebase cleanup autopilot. Executes one task per session to prevent context overflow.
*   **Status:** [OPEN](https://github.com/anthropics/skills/pull/536)
*   **Highlights:** Tackles the "large refactoring" problem in LLMs by breaking tasks into atomic, commit-ready units. Highly relevant for maintaining large codebases.

**#509: CONTRIBUTING.md**
*   **Function:** Adds official contribution guidelines to address community health metrics.
*   **Status:** [OPEN](https://github.com/anthropics/skills/pull/509)
*   **Highlights:** Addresses the lack of documentation that currently holds the repo back (25% community health score). This is a foundational maintenance PR.

---

## 2. Community Demand Trends
*Derived from high-activity Issues.*

*   **Skill Ecosystem Maintenance (Quality & Security):**
    *   **Issue #202:** Community demand for the `skill-creator` to be updated to follow best practices. It currently reads like documentation rather than an executable skill.
    *   **Issue #189:** Concerns about duplicate skills inflating context windows.
    *   **Issue #492:** Security warnings regarding namespace impersonation (community skills using `anthropic/`).

*   **Workflow Automation & Persistence:**
    *   **Issue #154:** High interest in `shodh-memory` (persistent context across conversations).
    *   **Issue #536:** Demand for long-running project management ("roadmap-pilot") to handle tasks larger than the context window.

*   **Infrastructure Stability:**
    *   **Issues #62, #406, #403, #389:** Significant friction regarding skill loading errors, API 500 errors, and general instability in managing custom skills via the UI and API.

*   **Enterprise Integration:**
    *   **Issue #29 & #532:** Requests for AWS Bedrock compatibility and fixes for Enterprise SSO users (who lack API keys).

---

## 3. High-Potential Pending Skills
*Active PRs that have not yet merged but show strong utility.*

*   **#288: Foundation Series**
    *   Adds 8 distinct skills including `a11y-auditor`, `changelog-curator`, and `quiz-generator`. A bulk update of fundamental capabilities.
    *   [PR #288](https://github.com/anthropics/skills/pull/288)

*   #147: codebase-inventory-audit
    *   A systematic workflow for cleaning up orphaned code and documenting project state. Useful for legacy project onboarding.
    *   [PR #147](https://github.com/anthropics/skills/pull/147)

*   #374: x402 (BSV Micropayments)
    *   Enables AI agents to discover, authenticate, and pay for services (like storage or compute) autonomously via BSV. A novel approach to agent autonomy.
    *   [PR #374](https://github.com/anthropics/skills/pull/374)

*   #419: Buildr (Telegram Bridge)
    *   Bridges Claude Code to Telegram for remote monitoring and control.
    *   [PR #419](https://github.com/anthropics/skills/pull/419)

---

## 4. Skills Ecosystem Insight
The community is shifting from *requesting novel creative tools* to *demanding infrastructure for reliability and maintenance*, specifically targeting persistent memory, incremental codebase refactoring, and standardized skill quality/security validation.

---

# Claude Code Community Digest: 2026-03-27

## 1. Today's Highlights
Recent releases (v2.1.84–v2.1.85) introduce PowerShell support for Windows and enhanced MCP server configuration via environment variables. On the community side, a significant documentation push for the plugin ecosystem has landed, alongside a surge of plugins targeting frontend workflows and agent lifecycle management. Persistent stability issues surrounding "Auto Mode" permissions and context compaction continue to dominate user discussions.

## 2. Latest Releases
**v2.1.85**
*   **MCP Enhancements:** Added `CLAUDE_CODE_MCP_SERVER_NAME` and `CLAUDE_CODE_MCP_SERVER_URL` environment variables to `headersHelper` scripts, allowing a single helper to serve multiple servers.
*   **Hooks Filter:** Added conditional `if` field for hooks using permission rule syntax (e.g., `Bash(git *)`) to filter execution.

**v2.1.84**
*   **Windows Preview:** Added a PowerShell tool for Windows as an opt-in preview.
*   **Model Overrides:** Added `ANTHROPIC_DEFAULT_{OPUS,SONNET,HAIKU}_MODEL_SUPPORTS` environment variables to override effort/thinking capability detection for pinned default models.

## 3. Hot Issues
**Top Community Concerns**

1.  **[BUG] Conversation compaction intermittently fails or deadlocks chats** [#20696](https://github.com/anthropics/claude-code/issues/20696) *(56 comments)*
    A regression causing permanent conversation locks. High impact for long-running sessions.

2.  **[BUG] Claude Code does not respect the XDG Base Directory specification** [#1455](https://github.com/anthropics/claude-code/issues/1455) *(53 comments, 315👍)*
    Long-standing request for Linux standard compliance. Cache clutter in `~/.claude` remains a top-voted frustration.

3.  **[BUG] Oversized image breaks conversation permanently** [#13480](https://github.com/anthropics/claude-code/issues/13480) *(29 comments)*
    Uploading a large image (approx. 20MB+) breaks the session context permanently with no recovery option other than restarting.

4.  **[BUG] VS Code: "Not responding - try stopping" offers no way to actually stop** [#39381](https://github.com/anthropics/claude-code/issues/39381) *(28 comments)*
    Critical UX failure in the VS Code extension where the "stop" mechanism is non-functional during hangs.

5.  **[BUG] Auto mode temporarily unavailable** [#33587](https://github.com/anthropics/claude-code/issues/33587) *(23 comments)*
    Users are unable to enter `auto` mode via `Shift+Tab` or config. Related to permission prompts blocking the mode transition.

6.  **[BUG] Bypass/dangerously skip permissions now broken** [#36168](https://github.com/anthropics/claude-code/issues/36168) *(16 comments)*
    The `--dangerously-skip-permissions` flag functionality has regressed in versions newer than v2.1.77, affecting CI/CD workflows.

7.  **[BUG] Agent Teams: Spawned teammates don't inherit model configuration** [#32368](https://github.com/anthropics/claude-code/issues/32368) *(14 comments)*
    When using custom/internal endpoints, agent teammates default to `claude-opus-4-6` instead of inheriting the team lead's config, causing 403 errors.

8.  **[BUG] Session name lost after context compaction** [#29922](https://github.com/anthropics/claude-code/issues/29922) *(7 comments)*
    Context compaction logic inadvertently drops the session name, disrupting workflow continuity.

9.  **[BUG] Chrome extension reconnect fails due to CSP** [#34331](https://github.com/anthropics/claude-code/issues/34331) *(6 comments)*
    The `/chrome` reconnect flow breaks because inline scripts on `claude.ai` are blocked by the site's own Content Security Policy.

10. **[BUG] Claude Code does not follow MCP tools/list pagination** [#39586](https://github.com/anthropics/claude-code/issues/39586) *(2 comments)*
    Recent oversight where the client fails to use `nextCursor` for paginated tool lists, causing tools to be missing.

## 4. Key PR Progress
**Notable Community Contributions**

*   **Modernize pr-review-toolkit** [#39559](https://github.com/anthropics/claude-code/pull/39559)
    Overhaul of the popular PR review agents to align with the latest Claude Code capabilities.
*   **Frontend Design System Plugin** [#39370](https://github.com/anthropics/claude-code/pull/39370)
    Introduces a design-first workflow plugin (wireframes, OKLCH tokens) preceding code implementation.
*   **Preserve-Session Plugin** [#39148](https://github.com/anthropics/claude-code/pull/39148)
    A utility plugin to maintain history links when project directories are renamed or moved using path-independent UUIDs.
*   **Bark: AI-powered Permission Hook** [#39320](https://github.com/anthropics/claude-code/pull/39320)
    Adds a community hook that uses AI to dynamically assess the risk level of tool calls before asking the user.
*   **Terminal-Restore Plugin** [#39132](https://github.com/anthropics/claude-code/pull/39132)
    Workaround for terminal state issues (Kitty keyboard protocol) that breaks Ctrl-C/Ctrl-D in Kitty/Ghostty after Claude exits.
*   **Plugin Dev Documentation & Lifecycle** [#39159](https://github.com/anthropics/claude-code/pull/39159), [#39160](https://github.com/anthropics/claude-code/pull/39160)
    Significant docs improvements covering `npm` publishing, versioning, and lifecycle management for plugin authors.
*   **Hook Reliability & Path Quoting** [#39166](https://github.com/anthropics/claude-code/pull/39166), [#39174](https://github.com/anthropics/claude-code/pull/39174)
    Fixes for handling spaces in plugin paths and validation updates to prevent unsafe hook script commands.

## 5. Feature Request Trends
*   **Amazon Bedrock Support:** [#32668](https://github.com/anthropics/claude-code/issues/32668) continues to gain traction as enterprise users seek backend parity between the CLI and Desktop apps.
*   **Auto-Mode UX:** Users want reliable "Auto Mode" functionality that doesn't get blocked by permission loops or require constant re-engagement.
*   **Skill Scoping:** [#39579](https://github.com/anthropics/claude-code/issues/39579) highlights a desire for agents to only load relevant skills to preserve context budget.
*   **Linux Cleanup:** Continued requests for automatic cleanup of old versions (#14980) and XDG compliance (#1455).

## 6. Developer Pain Points
*   **Fragility of "Plan Mode":** Reports (#38255) indicate that models are editing files directly despite Plan Mode being active, undermining trust in the feature.
*   **Context Loss:** Compaction is proving dangerous, either deadlocking chats (#20696) or stripping metadata like session names (#29922).
*   **Permission Fatigue:** Windows users (#39560) and those in "Auto Mode" (#33587) report excessive or broken permission prompts that halt productivity.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-03-27

## 1. Today's Highlights
The `v0.117.0` release represents a major milestone for extensibility, introducing "Plugins" as a first-class workflow that allows Codex to sync, install, and manage product-scoped tools natively. Concurrently, the engineering team is undertaking significant refactoring efforts to extract the Model Context Protocol (MCP) into dedicated crates (`codex-mcp`) and standardize tool schemas, likely to improve modularity for third-party integrations. On the community front, Windows sandbox stability and token management remain critical pain points, with users reporting high CPU usage and ACL corruption issues following recent updates.

## 2. Releases
*   **rust-v0.117.0**: The highlight of this release is the native **Plugin Workflow**. Codex can now sync product-scoped plugins at startup, browse them via a dedicated `/plugins` directory, and handle installation/removal with improved authorization and setup handling. This addresses a long-standing request for better extensibility (previously seen in Issue #8512).
    *   *See PRs:* #15041, #15042, #15195, #15215, #15217, #15264, #15275, #15342, #15580, #15606, #15802

## 3. Hot Issues
*   **[#14593 Burning tokens very fast](https://github.com/openai/codex/issues/14593)** (👍 96, 💬 288)
    *   **Why it matters:** The most active thread by a massive margin. Users are reporting excessive token consumption, which leads to unexpected costs and quota limits.
    *   **Reaction:** Frustration is high among business and pro users who feel the token efficiency has regressed in recent versions.

*   **[#15777 Windows Sandbox corrupts ACL on AppData\Local](https://github.com/openai/codex/issues/15777)** (👍 0, 💬 22)
    *   **Why it matters:** A critical regression where the Codex sandbox installation breaks the Access Control Lists (ACL) on Windows. This subsequently breaks the GPU sandbox in Chromium-based browsers (Chrome, Opera).
    *   **Reaction:** High urgency for Windows users as it affects other development tools beyond Codex.

*   **[#11981 Codex app 100% CPU Usage](https://github.com/openai/codex/issues/11981)** (👍 0, 💬 21)
    *   **Why it matters:** Performance degradation where the App consumes max CPU even with minimal load (one agent).
    *   **Reaction:** Users are requesting better resource throttling and process management.

*   **[#3049 Configurable Hotkeys Support](https://github.com/openai/codex/issues/3049)** (👍 64, 💬 18)
    *   **Why it matters:** A top quality-of-life request. Hardcoded shortcuts (Ctrl+J, Ctrl+H) conflict with other IDE tools.
    *   **Reaction:** High demand for customization to improve workflow accessibility.

*   **[#13993 Support standalone Windows installer](https://github.com/openai/codex/issues/13993)** (👍 47, 💬 14)
    *   **Why it matters:** Enterprise users often cannot use the Microsoft Store due to corporate policies or offline environments.
    *   **Reaction:** Strong support for a traditional `.exe` installer option.

*   **[#8648 Context drift in conversations](https://github.com/openai/codex/issues/8648)** (👍 14, 💬 22)
    *   **Why it matters:** Codex replies to earlier messages instead of the latest prompt, breaking the flow of multi-turn conversations.
    *   **Reaction:** Annoyance at the loss of context awareness in the "gpt-5.2-xhigh" model.

*   **[#15340 Codex looking for bwrap in wrong place](https://github.com/openai/codex/issues/15340)** (👍 14, 💬 10)
    *   **Why it matters:** Linux users face installation friction because the CLI cannot locate the `bubblewrap` sandbox binary even when installed.
    *   **Reaction:** Users are requesting better environment detection or hardcoded fallbacks for standard Linux paths.

*   **[#12919 Scheduled automations cannot access GitHub API](https://github.com/openai/codex/issues/12919)** (👍 5, 💬 4)
    *   **Why it matters:** DevOps workflows are blocked. Scheduled tasks fail to hit GitHub APIs despite having valid tokens, likely due to strict sandboxing.
    *   **Reaction:** Users want clearer documentation on how to allowlist specific domains for automation tasks.

*   **[#14338 Allow writable gitdir in sandboxed workspace](https://github.com/openai/codex/issues/14338)** (👍 4, 💬 3)
    *   **Why it matters:** The Linux sandbox mounts `.git` as read-only, preventing Codex from making commits even in "workspace-write" mode.
    *   **Reaction:** A logical inconsistency that hinders "vibe-coding" features where the AI manages git state.

*   **[#15318 Codex outputs identical response from previous turn](https://github.com/openai/codex/issues/15318)** (👍 6, 💬 3)
    *   **Why it matters:** A confusing loop behavior where the AI repeats a completed task's output instead of addressing the new instruction.
    *   **Reaction:** Highlights instability in the context management logic.

## 4. Key PR Progress
*   **[#15919 Extract MCP into codex-mcp crate](https://github.com/openai/codex/pull/15919)**
    *   Moves the MCP (Model Context Protocol) server and configuration logic out of `codex-core` into a standalone crate. This improves separation of concerns and makes the codebase more modular.
*   **[#15928 codex-tools: extract MCP schema adapters](https://github.com/openai/codex/pull/15928)**
    *   Normalizes how tool schemas from MCP are handled, ensuring `structuredContent` is wrapped correctly. This is a follow-up to #15919 to standardize tool inputs.
*   **[#15917 Support Codex CLI stdin piping](https://github.com/openai/codex/pull/15917)**
    *   Adds a highly requested feature for power users: `echo "input" | codex exec "prompt"`. This aligns Codex CLI capabilities with competitors like Claude Code.
*   **[#15918 Remove macOS seatbelt extension profiles](https://github.com/openai/codex/pull/15918)**
    *   Cleans up the `PermissionProfile` by removing macOS-specific "Seatbelt" extensions that were causing approval friction. This aims to simplify the permission model.
*   **[#15922 Remove the legacy TUI split](https://github.com/openai/codex/pull/15922)**
    *   Deletes the legacy `tui` directory, marking the final step in merging the TUI and app-server architectures. This simplifies the codebase by removing deprecated feature flags.
*   **[#15197 Add Codex Apps sediment file remapping](https://github.com/openai/codex/pull/15197)**
    *   Implements a bridge for file uploads in Apps tools, allowing local file paths to be rewritten and masked properly before being sent to the model.
*   **[#15522 Re-organize bazelrc](https://github.com/openai/codex/pull/15522)**
    *   Infrastructure improvement. Consolidates CI build configurations into the main `.bazelrc` file, simplifying GitHub workflows and build metadata management.
*   **[#12276 fix(core): preserve managed network constraint semantics](https://github.com/openai/codex/pull/12276)**
    *   Fixes a logic error in network handling. Ensures that managed network requirements (allowlists) act as constraints rather than being overwritten by user config, improving security compliance.
*   **[#15525 Add ChatGPT device-code login to app server](https://github.com/openai/codex/pull/15525)**
    *   Enables "headless" login flows for VS Code and the CLI, allowing users to authenticate via a device code (displayed in the terminal) rather than requiring a browser callback.
*   **[#15909 fix(network-proxy): fail closed on DNS errors](https://github.com/openai/codex/pull/15909)**
    *   A security hardening fix. Previously, if the network proxy failed a DNS lookup, it would "fail open" (allow the request). This PR changes the behavior to "fail closed" (block the request) to prevent data leakage.

## 5. Feature Request Trends
*   **Customization & Control:** There is a strong push for "Configurable Everything." Specifically, users want **Configurable Hotkeys** (#3049) and **Custom Open Destinations** on macOS (#15373) to use specific editor wrappers.
*   **Platform Parity (Windows):** Windows users feel left behind regarding installation methods. The request for a **Standalone Installer** (#13993) is a direct response to the over-reliance on the Microsoft Store.
*   **Sandbox Flexibility:** While security is appreciated, the current sandbox implementation is seen as brittle. Users are asking for **Writable Git Directories** (#14338) and better **ACL handling** (#15777) so that development workflows aren't broken by security policies.

## 6. Developer Pain Points
*   **Sandbox Instability:** The sandbox is the primary source of bugs. Whether it's **ACL corruption on Windows** (#15777), **Missing bubblewrap on Linux** (#15340), or **Read-only filesystems** (#15505), the sandboxing layer is actively preventing developers from working.
*   **Resource Management:** Developers are experiencing **"Burning tokens"** (#14593) and **100% CPU usage** (#11981), making the tool expensive and computationally heavy to run.
*   **Context & State Management:** The AI frequently loses the plot, replying to old messages (#8648) or hallucinating previous outputs (#15318). This inconsistency breaks the "flow" state required for effective pair programming.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-03-27

## 1. Today's Highlights
The `google-gemini/gemini-cli` repository is seeing significant activity focused on stability and performance. The team released `v0.36.0-preview.4` alongside a patch for the stable channel (`v0.35.2`), addressing critical UI rendering loops and memory allocation issues. Meanwhile, the community is voicing strong concerns regarding authentication stability with the new `g1-pro-tier` (Google One AI Pro) and performance degradation in the `gemini-3.1-pro-preview` model, which appears to hang indefinitely during MCP OAuth flows.

## 2. Releases
*   **[v0.36.0-preview.4](https://github.com/google-gemini/gemini-cli/compare/v0.36.0-preview.3...v0.36.0-preview.4)**: The latest preview release.
*   **[v0.35.2](https://github.com/google-gemini/gemini-cli/compare/v0.35.1...v0.35.2)**: A rapid patch release for the stable channel.

## 3. Hot Issues
*   **[#22648](https://github.com/google-gemini/gemini-cli/issues/22648) - `429 RESOURCE_EXHAUSTED` on Google One AI Pro (Silent Hangs)**
    *   **Why it matters:** Users are experiencing silent hangs when using `oauth-personal` auth with the `g1-pro-tier`. The CLI catches `429` errors but fails to surface them, making debugging impossible.
    *   **Reaction:** High urgency (👍 10).
*   **[#23943](https://github.com/google-gemini/gemini-cli/issues/23943) - `gemini-3.1-pro-preview` hangs on MCP OAuth (macOS)**
    *   **Why it matters:** A regression where the new model hangs immediately after a prompt, stuck on an MCP authentication loop.
*   **[#23328](https://github.com/google-gemini/gemini-cli/issues/23328) - Optimize Test Suite Output**
    *   **Why it matters:** The test suite is dumping hundreds of thousands of characters to stdout/stderr, making CI logs difficult to read.
*   **[#23858](https://github.com/google-gemini/gemini-cli/issues/23858) - Plan Mode Editing Files**
    *   **Why it matters:** A critical workflow bug where "Plan Mode" (which should be read-only) is modifying files and ignoring safety constraints.
*   **[#23962](https://github.com/google-gemini/gemini-cli/issues/23962) - Extreme Latency (15 mins to say "hello")**
    *   **Why it matters:** Users are reporting degradation to the point of unusability on standard `0.35.2` builds.
*   **[#23887](https://github.com/google-gemini/gemini-cli/issues/23887) - 429 Workaround via `/compress`**
    *   **Why it matters:** Community discussion on mitigating rate limits, suggesting the `/compress` flag helps bypass 429 errors.
*   **[#23958](https://github.com/google-gemini/gemini-cli/issues/23958) - Plan Mode Deadlock with Sandboxes**
    *   **Why it matters:** Sandbox restrictions prevent creating the plan file if the parent directory doesn't exist, causing a deadlock.
*   **[#23741](https://github.com/google-gemini/gemini-cli/issues/23741) - Terminal UI Memory Bloat**
    *   **Why it matters:** V8 heap usage is bloating by ~280MB due to per-character object allocations in the `ink` dependency.
*   **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) - Random Tmp Script Generation**
    *   **Why it matters:** The model is cluttering workspaces with temporary scripts in random directories instead of a centralized temp folder.
*   **[#22855](https://github.com/google-gemini/gemini-cli/issues/22855) - Support Passing Prompt to `/plan`**
    *   **Why it matters:** A feature request to allow `/plan [prompt]` to kick off planning in a single action, rather than entering a separate mode.

## 4. Key PR Progress
*   **[#23961](https://github.com/google-gemini/gemini-cli/pull/23961) - ACP Structured Terminal Lifecycle**
    *   Implements a structured lifecycle for the Agent Control Protocol (ACP), ensuring shell tools consistently return exit codes and signals.
*   **[#23917](https://github.com/google-gemini/gemini-cli/pull/23917) - `StyleSpan` Abstraction for UI**
    *   Addresses Issue #23741. Introduces a Run-Length Encoding (RLE) approach to terminal styling, eliminating the 280MB+ memory bloat caused by per-character allocations.
*   **[#23946](https://github.com/google-gemini/gemini-cli/pull/23946) - Fix Compression Endless Loop ("Ralph Loops")**
    *   A P0 fix preventing infinite compression loops in long agentic sessions where `tryCompressChat` fires repeatedly on sub-turns.
*   **[#23948](https://github.com/google-gemini/gemini-cli/pull/23948) - Fix Infinite Re-render Loop**
    *   Fixes a critical "lockup" bug in `useFlickerDetector` and `useSessionResume` caused by missing dependency arrays in `useEffect` hooks.
*   **[#23851](https://github.com/google-gemini/gemini-cli/pull/23851) - Debug Command**
    *   Extends DevTools to allow enabling the Node debugger directly from the UI (F12).
*   **[#23952](https://github.com/google-gemini/gemini-cli/pull/23952) - Prevent ACP Crash on Empty Response**
    *   Fixes a crash in ACP mode when the model returns an empty stream (treats as end-of-turn).
*   **[#23957](https://github.com/google-gemini/gemini-cli/pull/23957) - Hooks Context Aggregation**
    *   Implements `additionalContext` for `BeforeModel` hooks, allowing extensions to inject context more robustly.
*   **[#23953](https://github.com/google-gemini/gemini-cli/pull/23953) - Fix Missing Config Dir**
    *   Resolves an `ENOENT` crash on startup by ensuring the global config directory is created recursively.
*   **[#23956](https://github.com/google-gemini/gemini-cli/pull/23956) - Autocomplete Execution Fix**
    *   Fixes a regression where users got "stuck" on command suggestions, ensuring immediate execution or disclosure of subcommands.
*   **[#23843](https://github.com/google-gemini/gemini-cli/pull/23843) - Ink 6.5.0 Update**
    *   Updates the `ink` dependency to support `renderBuffer` to reduce UI flicker (foundation for future UI improvements).

## 5. Feature Request Trends
*   **Persistent Task Tracking:** Significant internal effort (Issues #23724, #23320) is moving towards a file-based "Tracker" system to replace ephemeral markdown checklists in the SDD (Software Design & Development) workflow.
*   **Global vs. Project Memory:** Users and maintainers are refining how "Memory" is routed (Issue #22819), distinguishing between user preferences (global) and project-specific context (local).
*   **Approval Modes for Subagents:** There is a push to make subagents aware of "Plan Mode" or "Auto-Edit" constraints (Issue #23582) so they don't attempt blocked actions.

## 6. Developer Pain Points
*   **429 Rate Limiting & Opaque Errors:** Users are frustrated by silent failures when hitting rate limits (Issue #22648), particularly with the new Google One AI Pro tier. The error handling masks the root cause.
*   **Sandboxing Friction:** The sandbox implementation is causing friction, preventing valid file operations (Issue #23958) and complicating shell execution logic.
*   **Model Performance:** The `gemini-3.1-pro-preview` model is reported to be significantly slower or prone to hanging compared to previous versions.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-27

## 1. Today's Highlights
The Copilot CLI team released **v1.0.12** and a subsequent patch **v1.0.12-2**, focusing heavily on environment extensibility by introducing Plugin Hooks and new template variables (`{{project_dir}}`, `{{plugin_data_dir}}). The community continues to flag **UI stability** as the primary friction point, with long-standing issues regarding screen flickering and "seizure-inducing" scrolling during long operations resurfacing in the top discussions.

## 2. Releases
* **v1.0.12** (2026-03-26)
    * **Fixed:** Resolved clipboard issues on Windows when a non-system `clip.exe` shadows the system path.
    * **Fixed:** Corrected `/diff` view rendering to ensure all lines appear when intra-line highlighting is active.
    * **Fixed:** MCP servers defined in `.mcp.json` now initialize correctly when the working directory is the git root.
* **v1.0.12-2** (2026-03-26)
    * **Added:** Plugin Hooks now receive `CLAUDE_PROJECT_DIR` and `CLAUDE_PLUGIN_DATA` environment variables.
    * **Added:** Support for `{{project_dir}}` and `{{plugin_data_dir}}` template variables in hook configurations.
    * **Improved:** Model display header now indicates the active reasoning effort level (e.g., "(high)").

## 3. Hot Issues
* **[#239 Screen flickering / starts scrolling](https://github.com/github/copilot-cli/issues/239)** (36 comments)
  * **Impact:** High. This is the most upvoted issue (66 👍). Users report that as conversation length grows (>10 messages), the terminal becomes unusable due to flickering and duplication.
* **[#1584 Incessant Scrolling during long operations](https://github.com/github/copilot-cli/issues/1584)** (12 comments)
  * **Impact:** High. Users report the terminal "scrolls all over the place" during long tasks, describing it as a UI hazard.
* **[#960 Performance Very Slow compared with Chat](https://github.com/github/copilot-cli/issues/960)** (10 comments)
  * **Impact:** High. Users report the CLI taking 12-14 minutes for tasks that Copilot Chat completes in 1-2 minutes using identical configurations.
* **[#2082 ctrl+shift+c no longer copies on Linux](https://github.com/github/copilot-cli/issues/2082)** (10 comments)
  * **Impact:** Medium. Regression of standard Linux terminal behavior (Ubuntu 24.04), forcing users to adapt to new copy workflows.
* **[#2101 Transient API errors / Rate Limits](https://github.com/github/copilot-cli/issues/2101)** (8 comments)
  * **Impact:** Medium. Users hitting repeated "Request failed" errors leading to rate limit locks, potentially related to the retry logic.
* **[#424 Copilot suddenly doesn't recognize MCP servers](https://github.com/github/copilot-cli/issues/424)** (8 comments)
  * **Impact:** Medium. despite `~/.bashrc` loading issues, users report MCP tools disappearing intermittently after relaunching.
* **[#1113 Support for custom slash commands via markdown](https://github.com/github/copilot-cli/issues/1113)** (6 comments)
  * **Impact:** Medium. Feature request (11 👍) to allow defining custom commands via `.md` files (similar to Claude Code).
* **[#2176 MCP servers not available since latest update](https://github.com/github/copilot-cli/issues/2176)** (2 comments)
  * **Impact:** High. Fresh reports indicate that while `/mcp show` lists servers, the LLM cannot actually see or invoke the tools.
* **[#2285 Copying commands includes invisible characters](https://github.com/github/copilot-cli/issues/2285)** (2 comments)
  * **Impact:** Medium. Code blocks copied via `ctrl+c` contain invisible chars, causing "command not found" errors in external terminals.
* **[#2307 Prerelease versions shown as updates](https://github.com/github/copilot-cli/issues/2307)** (Closed)
  * **Impact:** Low. Status bar incorrectly surfaced prerelease `v1.0.12-1` to stable users.

## 4. Key PR Progress
* **[#2331 Sort git tags when determining prerelease version](https://github.com/github/copilot-cli/pull/2331)** (Closed)
  * **Details:** Addresses the logic where `git ls-remote` sorted tags lexicographically (`v1.0.9` before `v1.0.12`), causing the update check logic to fail. This fixes the version mismatch reported in Issue #2327.
* **[#2316 Dev](https://github.com/github/copilot-cli/pull/2316)** (Open)
  * **Details:** Appears to be a maintenance/update PR involving Dev Container features (`ghcr.io/devcontainers/features/github-cli:1`).

## 5. Feature Request Trends
* **Terminal UX & Customization:** Users want more control over the interface, specifically requesting **customizable status lines** (Issue #1311, #2326) and **prompt symbols** (Issue #2329), similar to tools like Starship.
* **Richer Interaction:** There is a recurring demand for **image pasting support** directly from snipping tools (Issue #2328) and better **session management** summaries (Issue #2330).
* **Extensibility:** Requests continue for **custom slash commands** via markdown files (Issue #1113) and resolving incompatibilities with VS Code Chat regarding agent array syntax (Issue #2133).
* **LSP Configuration:** Users are asking for better documentation on setting up language servers, specifically C# (Issue #2204).

## 6. Developer Pain Points
* **Context Window Management:** Users are frustrated with hardcoded **auto-compaction at 95%** context (Issue #2333), requesting a toggle to manage the context window manually without auto-triggering.
* **State Drift:** Several reports indicate the CLI "losing track" of the current task when being steered by the user (Issue #2248) or authorized states flickering in/out (Issue #2306).
* **Input Sanitization:** Copy/paste remains a major pain point, with "garbage strings" being inserted on paste (Issue #1733) and invisible characters breaking copied commands (Issue #2285).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-03-27

## 1. Today's Highlights
Today's ecosystem update focuses heavily on **ecosystem compatibility and architectural robustness**. Key developments include a proposal for a lifecycle hooks system to rival competitors like Claude Code, critical fixes for the **ACP authentication flow**, and significant discourse regarding the incompatibility between the Kimi API's proprietary JSON Schema subset and the standard MCP protocol. Additionally, memory performance issues in the VSCode extension are surfacing as a concern for macOS users.

## 2. Releases
No new releases were detected in the last 24 hours.

## 3. Hot Issues

**1. JSON Schema Incompatibility with MCP Servers [#1595]**
*   **Issue:** The Kimi API enforces a strict subset of JSON Schema ("Moonshot Flavored"), requiring explicit `type` definitions for all properties. This breaks compatibility with standard MCP servers where `type` is optional.
*   **Impact:** High. This limits the tool's interoperability within the wider agent ecosystem.
*   **Link:** [MoonshotAI/kimi-cli#1595](https://github.com/MoonshotAI/kimi-cli/issues/1595)

**2. VSCode Extension Memory Leak [#1592]**
*   **Issue:** Users on macOS (Darwin arm64) report excessive memory consumption during long-running tasks in VSCode.
*   **Impact:** Medium. Affects stability and resource usage for developers working in IDEs.
*   **Link:** [MoonshotAI/kimi-cli#1592](https://github.com/MoonshotAI/kimi-cli/issues/1592)

**3. Web Init Function Stuck [#1594]**
*   **Issue:** The `/init` command in the web interface hangs during "shell action" execution on both Windows and Debian.
*   **Impact:** Medium. Blocks core workflow initialization for web users.
*   **Link:** [MoonshotAI/kimi-cli#1594](https://github.com/MoonshotAI/kimi-cli/issues/1594)

**4. Request: Resilient Tool Execution [#1589]**
*   **Issue:** Users want the ability to skip tool call errors and continue execution, particularly in "Yolo" (auto-pilot) mode, rather than halting the entire task.
*   **Impact:** Medium/High. Directly addresses the reliability of autonomous coding sessions.
*   **Link:** [MoonshotAI/kimi-cli#1589](https://github.com/MoonshotAI/kimi-cli/issues/1589)

**5. ACP Session Initialization Failure [#1355]**
*   **Issue:** An intermittent `Internal error: "list.index(x): x not in list"` prevents ACP sessions from starting (reported on v1.17.0).
*   **Impact:** Medium. Affects login reliability.
*   **Link:** [MoonshotAI/kimi-cli#1355](https://github.com/MoonshotAI/kimi-cli/issues/1355)

## 4. Key PR Progress

**1. Lifecycle Hooks System (Wire 1.7) [#1561]**
*   **Description:** A major feature addition introducing 13 distinct hook event types (e.g., `PreToolUse`, `PostToolUseFailure`), allowing users to execute shell commands at specific agent lifecycle points.
*   **Significance:** Drastically increases extensibility and automation potential.
*   **Link:** [MoonshotAI/kimi-cli#1561](https://github.com/MoonshotAI/kimi-cli/pull/1561)

**2. Async Feedback Submission [#1593]**
*   **Description:** Implements an asynchronous `/feedback` command flow that captures session metadata and falls back to GitHub issues if the API submission fails.
*   **Significance:** Improves user support loops and error reporting.
*   **Link:** [MoonshotAI/kimi-cli#1593](https://github.com/MoonshotAI/kimi-cli/pull/1593)

**3. Rewrite: ACP Authentication & OAuth Device Flow [#1512]**
*   **Description:** A comprehensive overhaul of the ACP server authentication system, introducing robust terminal login flows and OAuth Device 2.0 support.
*   **Significance:** Critical for resolving login stability issues mentioned in the bug reports.
*   **Link:** [MoonshotAI/kimi-cli#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512)

**4. Fix: Wire Server Race Condition [#1591]**
*   **Description:** Fixes a bug where "steer" messages received after a turn ends but before cleanup are silently lost (`status=steered` but never consumed).
*   **Significance:** Ensures reliability in control flow during interactive sessions.
*   **Link:** [MoonshotAI/kimi-cli#1591](https://github.com/MoonshotAI/kimi-cli/pull/1591)

**5. OSC 9 Terminal Notifications [#1345]**
*   **Description:** Adds support for OSC 9 escape sequences to trigger native desktop notifications (task completion/approval) in compatible terminals (iTerm2, WezTerm).
*   **Significance:** Enhances UX for terminal-native workflows.
*   **Link:** [MoonshotAI/kimi-cli#1345](https://github.com/MoonshotAI/kimi-cli/pull/1345)

**6. HTTP Proxy Support [#1479]**
*   **Description:** Enables `aiohttp.ClientSession` to respect proxy environment variables (`HTTP_PROXY`, `HTTPS_PROXY`).
*   **Significance:** Essential for enterprise users behind corporate firewalls.
*   **Link:** [MoonshotAI/kimi-cli#1479](https://github.com/MoonshotAI/kimi-cli/pull/1479)

**7. Trust Env Configuration [#1236]**
*   **Description:** Enables `trust_env` in HTTP client creation, aiding in credential management.
*   **Significance:** Improves compatibility with various environment configurations.
*   **Link:** [MoonshotAI/kimi-cli#1236](https://github.com/MoonshotAI/kimi-cli/pull/1236)

**8. Global/Local Config Merging [#1590]**
*   **Description:** Intelligent merging of agent configurations from `~/.kimi/AGENTS.md` and local project directories.
*   **Significance:** Allows for better separation of personal and project-specific agent rules.
*   **Link:** [MoonshotAI/kimi-cli#1590](https://github.com/MoonshotAI/kimi-cli/pull/1590)

## 5. Feature Request Trends
*   **Resilience & Error Handling:** There is a clear demand for "graceful degradation" (e.g., skipping tool errors to continue execution) rather than failing fast.
*   **Protocol Compatibility:** Users are pushing for better adherence to open standards (specifically MCP) to avoid vendor lock-in and friction.
*   **Configuration Flexibility:** Requests for more granular control over agent behaviors (hooks, global vs. local config merging) are trending.

## 6. Developer Pain Points
*   **Schema Rigidity:** The strict "Moonshot Flavored JSON Schema" is a major blocker for developers trying to integrate standard MCP tools.
*   **Resource Instability:** Memory leaks in the VSCode extension and hanging web commands (`/init`) suggest stability issues in the UI layers.
*   **Authentication Flakiness:** Persistent issues with ACP session initialization indicate the auth stack is still fragile despite recent rewrites.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-03-27

## 1. Today's Highlights
OpenCode v1.3.3 has been released, focusing on performance improvements for the TUI and tighter WebUI integration in the Desktop client. Critical attention is focused on multiple reported infinite loops caused by non-standard `finish_reason` handling ("unknown") from various LLM providers, with community patches already circulating. Additionally, the project is taking significant steps to decouple from the Bun runtime, moving towards Hono/NPM-based architectures for better server stability.

## 2. Releases
**OpenCode v1.3.3**
*   **TUI Updates:** Bypassed local SSE event streaming in workers to significantly improve rendering performance (#19183). Fixed image paste support on Windows Terminal 1.25+ when kitty keyboard protocol is enabled (#17674).
*   **Desktop Updates:** Embedded the WebUI directly into the binary with configurable proxy flags (#19299). Fixed agent normalization issues.
*   [View Release](https://github.com/anomalyco/opencode)

## 3. Hot Issues

*   [#19339: Bug - Infinite loop when provider returns finishReason "unknown"](https://github.com/anomalyco/opencode/issues/19339)
    *   **Impact:** Critical. Causes the TUI to hang indefinitely when providers (like GLM-5 Turbo or z.ai) return non-standard finish reasons.
    *   **Reaction:** Users affected by API freezes; a fix PR (#19342) was submitted within hours.
*   [#18813: Bug - "model_context_window_exceeded" treated as unknown](https://github.com/anomalyco/opencode/issues/18813)
    *   **Impact:** High. Context limits are not respected, leading to unexpected behavior or crashes instead of graceful stops.
*   [#13768: Bug - "Assistant message prefill" errors with Opus 4.6](https://github.com/anomalyco/opencode/issues/13768)
    *   **Impact:** High. Breaks workflows using GitHub Copilot or Opus 4.6, preventing conversation continuity.
*   [#6930: Discussion - Anthropic OAuth violates ToS](https://github.com/anomalyco/opencode/issues/6930)
    *   **Impact:** Policy Risk. Users report account bans when using Anthropic OAuth through OpenCode, highlighting tension between third-party clients and vendor ToS.
*   [#16499: Feature - Add GPT-5.4 fast mode (/fast)](https://github.com/anomalyco/opencode/issues/16499)
    *   **Impact:** Feature Request. High demand (42👍) to expose GPT-5.4's native "fast" reasoning mode within the TUI.
*   [#16992: Feature - Add /btw command](https://github.com/anomalyco/opencode/issues/16992)
    *   **Impact:** UX. Popular request (32👍) to match competitor Claude Code's feature for asynchronous context expansion.
*   [#19340: Regression - /sessions ignores working directory](https://github.com/anomalyco/opencode/issues/19340)
    *   **Impact:** Workflow. Breaking change in session management prevents filtering by project path.
*   [#13515: Bug - Kimi 2.5 Reasoning cutoff via NVIDIA API](https://github.com/anomalyco/opencode/issues/13515)
    *   **Impact:** Integration. "Thinking" tokens are dropped, rendering reasoning models ineffective.
*   [#17356: Security - XSS via unescaped Markdown links](https://github.com/anomalyco/opencode/issues/17356)
    *   **Impact:** Security. Identifies a vulnerability in the desktop electron app where crafted links can execute scripts.
*   [#4754: Bug - Copy/Paste behavior on Linux](https://github.com/anomalyco/opencode/issues/4754)
    *   **Impact:** UX. Long-standing frustration with clipboard buffers (Primary vs Clipboard) in the TUI.

## 4. Key PR Progress

*   [#19342: Fix - Treat unknown finishReason as terminal](https://github.com/anomalyco/opencode/pull/19342)
    *   Addresses the infinite loop bug (#19339) by forcing the prompt loop to stop when "unknown" is received.
*   [#19347: TUI Plugins](https://github.com/anomalyco/opencode/pull/19347)
    *   Establishes the technical reference for the new TUI plugin system, allowing external packages to hook into the `@opencode-ai/plugin/tui` entry point.
*   [#18335: Refactor - Replace Bun serve with Hono](https://github.com/anomalyco/opencode/pull/18335)
    *   Major architectural shift decoupling the HTTP server from the Bun runtime, using `@hono/node-server` for better stability and standard node compatibility.
*   [#13321: Fix - Robust subagent completion propagation](https://github.com/anomalyco/opencode/pull/13321)
    *   Fixes a "hanging" bug where the main agent waits indefinitely for subagents (Task tool) to finish.
*   [#19345: Feat - Move reasoning level to separate switcher](https://github.com/anomalyco/opencode/pull/19345)
    *   Improves model selection UX by separating model variants (reasoning levels) from the base model selector.
*   [#18767: Feat - Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)
    *   Adds touch-friendly controls and responsive design adjustments to the desktop app (Electron).
*   [#19335: Feat - Integrate workspace routing into server](https://github.com/anomalyco/opencode/pull/19335)
    *   Refactors routing to support workspaces natively via the server layer, a prerequisite for multi-workspace management.
*   [#13854: Fix - Stop streaming markdown after message completes](https://github.com/anomalyco/opencode/pull/13854)
    *   Fixes a TUI rendering bug where finished messages would fail to render the last line of code/text.
*   [#19336: Fix - Disambiguate submodule identities](https://github.com/anomalyco/opencode/pull/19336)
    *   Resolves an issue where Git submodules could not be opened individually in the desktop app.
*   [#12042: Feat - Provide SDK v2](https://github.com/anomalyco/opencode/pull/12042)
    *   Introduces a second generation SDK for plugins, maintaining backwards compatibility (v1) while enabling new capabilities.

## 5. Feature Request Trends
*   **Vim/Keyboard Navigation:** Significant interest in adding Vim-style keybindings (Ctrl+J/Ctrl+K) to menu bars (#7056).
*   **Provider Parity:** Users are aggressively requesting support for the latest model features, specifically GPT-5.4 fast mode (#16499) and Anthropic's `/btw` command (#16992).
*   **Session Management:** There is a clear demand for better archival tools (#6680) and directory-scoped session filtering (#19340).

## 6. Developer Pain Points
*   **API Stability:** Developers are increasingly frustrated by "black box" errors related to message formatting (e.g., "assistant message prefill" #13768) and non-standard finish reasons causing infinite loops (#19339).
*   **Clipboard Inconsistency:** The disparity in copy/paste behavior between Windows, Linux (middle-click vs Ctrl+V), and specific terminals (Konsole, Windows Terminal) remains a top usability gripe.
*   **Proxy/Network Connectivity:** Issues with proxies resetting connections (#12405) and agent normalization in complex network environments persist in the latest release.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-03-27

## 1. Today's Highlights
The `v0.13.1-preview.0` release is now available, addressing critical stability issues including PTY race conditions on Unix systems and permission persistence bugs on Windows. Significant ecosystem expansions are in progress, including a new **Channels** feature for integration with Telegram/WeChat and advanced hooks for custom workflows. Concurrently, the community is actively troubleshooting high-impact bugs related to LSP support for C++/Java and aggressive context window consumption in CLI sessions.

## 2. Releases
**v0.13.1-preview.0**
*   **Extension Compatibility:** Fixed installation of extensions from non-GitHub Git URLs (e.g., GitLab, self-hosted).
*   **CLI Memory:** The `/memory show --project` and `--global` commands now correctly display all configured context files.
*   **Platform Stability:** Includes fixes for Git Bash shell detection on Windows and PTY race condition handling on Linux/macOS to prevent crashes.
*   **ACP Integration:** Improved connection handling and error reporting for the VS Code IDE Companion.

## 3. Hot Issues
1.  **[Permission Persistence on Windows](https://github.com/QwenLM/qwen-code/issues/2669)** (Open)
    *   **Why it matters:** Users on Windows 11 CMD cannot save "Always allow" preferences, forcing manual approval for every tool execution.
    *   **Reaction:** High frustration; a fix for path case-sensitivity has already been pushed to `main` via PR #2670.

2.  **[Excessive Context Usage on "Hello"](https://github.com/QwenLM/qwen-code/issues/2685)** (Open)
    *   **Why it matters:** A simple greeting in a new session is consuming 20% of the context window, likely due to fallback context size logic.
    *   **Reaction:** Critical concern for token efficiency; users suspect the system is defaulting to a massive fallback prompt.

3.  **[LSP Support Broken for C++/Java](https://github.com/QwenLM/qwen-code/issues/1873)** (Closed)
    *   **Why it matters:** `lsp documentSymbol` failed for C++ and Java files because `textDocument/didOpen` notifications weren't being sent.
    *   **Reaction:** Resolved in recent PRs, vital for multi-language repo support.

4.  **[Git Bash Switches to PowerShell](https://github.com/QwenLM/qwen-code/issues/2537)** (Closed)
    *   **Why it matters:** Windows developers using Git Bash were forced into PowerShell sessions when starting `qwen`.
    *   **Reaction:** Fixed by adding MSYS2/MinTTY environment detection.

5.  **[ACP Process Crashes on IDE Start](https://github.com/QwenLM/qwen-code/issues/2634)** (Open)
    *   **Why it matters:** VS Code extension fails to connect to the agent if the background process exits with SIGTERM.
    *   **Reaction:** Affects workflow continuity; PR #2666 proposes auto-reconnect logic.

6.  **[Clipboard Image Paste on Windows CLI](https://github.com/QwenLM/qwen-code/issues/2605)** (Open)
    *   **Why it matters:** Developers want to paste images directly into the terminal for vision tasks instead of typing file paths.
    *   **Reaction:** Popular feature request for improving CLI usability.

7.  **[Debug Mode Logging](https://github.com/QwenLM/qwen-code/issues/2660)** (Closed)
    *   **Why it matters:** Users were unable to disable verbose "Debug mode enabled" messages and log file generation in production environments.
    *   **Reaction:** Addressed via documentation updates.

8.  **[Chinese/Filename Handling Spaces](https://github.com/QwenLM/qwen-code/issues/2688)** (Open)
    *   **Why it matters:** The tool incorrectly inserts spaces between Chinese and English characters in filenames, breaking file paths.
    *   **Reaction:** High annoyance for non-English users; highlights encoding/parsing issues.

9.  **[Ripgrep Incompatibility on ARM64](https://github.com/QwenLM/qwen-code/issues/2676)** (Open)
    *   **Why it matters:** Qwen Code fails to start on ARM64 systems with 64K page sizes (e.g., Kunpeng 920) due to the bundled ripgrep binary.
    *   **Reaction:** Blocks adoption on specific server hardware architectures.

10. **[STDOUT Buffering Issues](https://github.com/QwenLM/qwen-code/issues/2682)** (Open)
    *   **Why it matters:** When using Qwen Code in a PIPE, output is fully buffered and only displays after execution completes, rather than streaming line-by-line.
    *   **Reaction:** Critical for CI/CD integration scenarios.

## 4. Key PR Progress
1.  **[feat(channels): add Telegram, WeChat, DingTalk support](https://github.com/QwenLM/qwen-code/pull/2628)** (Open)
    *   Introduces a "Channels" feature allowing the Qwen agent to interact via messaging apps using the Agent Client Protocol (ACP).

2.  **[fix(acp): align permission flow across clients](https://github.com/QwenLM/qwen-code/pull/2690)** (Open)
    *   Unifies permission handling between CLI and VS Code, ensuring "Always allow" rules are respected consistently and fixing shell permission UX.

3.  **[feat: human-readable permission labels & deny feedback](https://github.com/QwenLM/qwen-code/pull/2637)** (Closed)
    *   Improves security UX by showing readable rules (e.g., "read files in /Users/alice/") instead of raw regex syntax.

4.  **[Enhance /review: add verification & PR comments](https://github.com/QwenLM/qwen-code/pull/2687)** (Open)
    *   Upgrades the `/review` command to include false positive control, a dedicated verification step, and the ability to post comments directly to GitHub PRs.

5.  **[fix(shell): handle PTY race condition gracefully](https://github.com/QwenLM/qwen-code/pull/2611)** (Closed)
    *   Prevents crashes caused by `EIO` or `EBADF` errors when the shell process exits during I/O operations.

6.  **[docs: add hooks documentation and UI refactor](https://github.com/QwenLM/qwen-code/pull/2679)** (Closed)
    *   Adds comprehensive docs for the Hooks system and refines the UI for managing hooks within the CLI.

7.  **[fix(lsp): improve C++/Java/Python support](https://github.com/QwenLM/qwen-code/pull/2547)** (Closed)
    *   Ensures `textDocument/didOpen` is sent, fixing empty results for document symbols and definitions in non-TypeScript languages.

8.  **[fix(windows): support git bash detection](https://github.com/QwenLM/qwen-code/pull/2645)** (Closed)
    *   Detects MSYS2/MinTTY environments on Windows to prevent forcing users into PowerShell.

9.  **[fix: parse EDITOR env var for arguments](https://github.com/QwenLM/qwen-code/pull/2683)** (Open)
    *   Fixes external editor support (Ctrl+X) to handle commands with arguments like `emacsclient -c` or `code --wait`.

10. **[feat(vscode): add retry logic and auto-reconnect for ACP](https://github.com/QwenLM/qwen-code/pull/2666)** (Open)
    *   Implements exponential backoff and auto-reconnect for the VS Code extension, preventing "Failed to connect" locks.

## 5. Feature Request Trends
*   **Ecosystem Integration:** Strong demand for Alibaba Cloud (Yunxiao/DevOps) CI/CD templates and webhook support.
*   **CLI Usability:** Requests for Windows clipboard image pasting and better PIPE/streaming support (line buffering).
*   **Workflow Customization:** Users want **Hooks** and the ability to trigger workflows via messaging platforms (Telegram/WeChat) via the new Channels feature.

## 6. Developer Pain Points
*   **Tool Reliability:** Issues with tool calls "forgetting" parameters (e.g., missing `new_string` in edits) or the AI getting stuck in loops.
*   **IDE Synchronization:** "Ghost" diffs where sub-agents wait for confirmation after a user has already accepted changes in the IDE.
*   **Platform Specifics:** Persistent bugs with Windows path handling and permission storage, as well as ARM64 hardware compatibility.
*   **Context Management:** Complaints regarding high context usage for trivial interactions, reducing effective token limits for actual coding tasks.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*