# AI CLI Tools Community Digest 2026-04-18

> Generated: 2026-04-18 00:14 UTC | Tools covered: 8

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

# Cross-Tool Comparison Report: AI CLI Ecosystem — 2026-04-18

## 1. Ecosystem Overview

The AI CLI ecosystem is currently undergoing a critical architectural transition period, moving from bundled scripting solutions toward native binary execution and robust local model support (e.g., Claude Code v2.1.113, Gemini Gemma 4, Qwen ACP). While vendors are aggressively pushing agentic capabilities and extended "thinking" modes, user sentiment is increasingly cautious; developers are expressing significant fatigue regarding rising token costs, opaque metering logic, and regressions introduced by rapid release cycles. There is a palpable industry-wide struggle with "configuration fragility," where basic integration points (keybindings, auth, and permissions) are failing, distracting from the core value proposition of AI-assisted coding.

## 2. Activity Comparison

| Tool | Release Activity | Issue Load | PR Velocity | Stability Status |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **High** (Major Arch v2.1.113) | **Critical** (Billing/Keybindings) | Moderate | **Fragile** (Regressions reported) |
| **OpenAI Codex** | **High** (Alpha churn 0.122.x) | **High** (Token spikes/UI bugs) | High (Core refactoring) | **Unstable** (Windows/Mac issues) |
| **Charm Crush** | **Low** (v0.60.0) | **Low** (UI rendering fixes) | Low (Targeted bugfixes) | **Stable** (Polish phase) |
| **Gemini CLI** | **Medium** (Gemma 4/Hotfix) | **Medium** (Startup/Shell hangs) | High (Feature rich) | **Moderate** (Logic bugs present) |
| **GitHub Copilot** | **Low** (v1.0.32) | **Critical** (Billing/Rate limits) | Very Low | **Concerning** (Billing trust) |
| **Kimi Code** | **Medium** (v1.36.0) | **High** (Model "Rumination") | High (Churny/Reverts) | **Volatile** (Behavior shifts) |
| **OpenCode** | **High** (Hotfixes v1.4.10) | **Critical** (Startup freezes) | High (Refactoring to v2) | **Regressed** (v1.4.8 issues) |
| **Qwen Code** | **Medium** (Preview v0.15.0) | **High** (Auth/Policy changes) | Moderate (Integration focus) | **Mixed** (Auth instability) |

## 3. Shared Feature Directions

*   **"Thinking" & Reasoning Visibility**
    *   **Tools:** Claude Code, Kimi Code, Gemini CLI, Charm Crush.
    *   **Trend:** All tools are implementing extended reasoning (Opus 4.7, Gemma 4, K2.6). However, a universal user request is for **incremental streaming** of these thoughts (vs. hidden processing) to reduce perceived latency and allow early error intervention.
*   **Local Model & Privacy First**
    *   **Tools:** Gemini CLI (Gemma), OpenCode (OTEL/Private), Kimi Code.
    *   **Trend:** Huge demand for local inference (`gemini gemma`) and stricter control over data routing (regional locking, "denyDomains") to ensure code privacy.
*   **Cost & Token Optimization**
    *   **Tools:** OpenAI Codex, GitHub Copilot, Charm Crush, Qwen Code.
    *   **Trend:** Developers are rebelling against "Token explosions." Specific requests for "Lazy loading" contexts, manual `/compact` commands, and usage caps indicate that efficiency is now valued over new features.
*   **Authentication & Configuration Frustration**
    *   **Tools:** Qwen Code, GitHub Copilot, OpenCode, Claude Code.
    *   **Trend:** A shared cry for stable configuration management (XDG standards, `settings.json` respect) and reliable auth (OAuth vs. API Key friction).

## 4. Differentiation Analysis

| Tool | Technical Approach | Target User | Key Differentiator |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **Native Binary** (New Arch) | Enterprise/Pro | **Deep System Integration.** Moving away from Node bundling to interact deeply with OS-level permissions and MCP servers. |
| **OpenAI Codex** | **Rust/Core Refactor** | Early Adopter | **Performance focused.** Heavy investment in Rust rewrites (`codex-uds`, device keys) suggests a focus on raw speed and security. |
| **Charm Crush** | **Terminal UX (Bubbletea)** | TUI Purists | **Aesthetic & Protocol.** Focuses on beautiful terminal rendering and broad provider compatibility (OpenAI/Ollama) rather than a specific model. |
| **Gemini CLI** | **AST-Aware / Hybrid** | Google Ecosystem | **Intelligence.** Pushing the boundary on AST-aware parsing (vs. raw text) and distinct "Global vs. Project" memory architecture. |
| **GitHub Copilot** | **Managed Service** | VS Code Devs | **Convenience.** Deep integration with the Microsoft ecosystem, but currently lagging in CLI stability and trust. |
| **Kimi Code** | **High-Agentic** | Power Users | **"Planning".** Heavy focus on multi-step reasoning (high step counts) and agent orchestration, though currently suffering from "over-thinking." |
| **OpenCode** | **Effect-TS (v2 Arch)** | TypeScript Devs | **Extensibility.** Strongest plugin system and "Remote Control" capabilities (Tailscale), ideal for managing complex dev environments. |
| **Qwen Code** | **Standards Based (ACP)** | Cost-conscious | **Interoperability.** Rapidly adopting standards like ACP hooks and Markdown for Agents to avoid vendor lock-in. |

## 5. Community Momentum & Maturity

*   **High Momentum / Rapid Iteration:**
    *   **OpenAI Codex** and **OpenCode** are showing the most aggressive development velocity (Alpha channels, core refactors). This attracts developers wanting cutting-edge features but exposes them to volatility.
    *   **Claude Code** remains the most discussed tool but is currently facing a trust deficit due to billing transparency issues and the removal of popular features (`/buddy`).
*   **Stable / Mature:**
    *   **Charm Crush** stands out as the most stable option today, focusing on specific UI bugs rather than architectural explosions.
*   **At Risk:**
    *   **GitHub Copilot CLI** and **Kimi Code** are facing significant community backlash regarding billing/model behavior ("rumination"), respectively.
    *   **Qwen Code** faces a pivotal moment with its proposed OAuth pricing changes, which could alienate its free-tier user base.

## 6. Trend Signals

1.  **The "Black Box" Backlash:** Developers are demanding metering transparency. Issues like "Max Plan Limits Exhausted Abnormally Fast" (Claude) and "Infinite Premium Consumption" (Copilot) indicate that **trust** is currently the scarcest resource in the ecosystem.
2.  **Standardization over Proprietary Lock-in:** The rapid adoption of **OpenAI-compatible endpoints** (Charm Crush) and **Anthropic Context Protocol (ACP)** (Qwen) suggests a market trend toward interoperable agents rather than walled gardens.
3.  **Performance > Intelligence:** There is a shifting preference toward models that are "dumb but fast" versus "smart but slow/expensive." The complaints regarding K2.6 and OpenAI v0.121.0 (token spike) reinforce that **latency and cost** are primary adoption blockers.
4.  **CLI as a Remote Controller:** Features like **OpenCode Remote** and **Gemini SSH** indicate that the CLI is evolving into a control plane for remote development environments, not just a local script runner.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Data as of 2026-04-18 | **Source:** anthropics/skills repository

---

## 1. Top Skills Ranking
Based on community engagement (Issues + high-impact PRs), the following Skills are currently the most discussed.

**🛡️ Agent Governance**
*   **Functionality:** A proposed skill for AI safety patterns, covering policy enforcement, threat detection, trust scoring, and audit trails for agentic systems.
*   **Discussion Highlights:** The community identified a "safety gap" in the current ecosystem, which focuses heavily on creative and technical workflows but lacks robust security patterns. Users are eager for standardized governance.
*   **Status:** Proposal (Issue #412 - Closed as completed/stale).

**📁 Skill Organization (Multi-skill Focus)**
*   **Functionality:** Addresses "Enable org-wide skill sharing" – allowing teams to share skills without manual file transfer (Slack/Email).
*   **Discussion Highlights:** Currently the **#2 most discussed issue** (9 comments). Enterprises are finding it operationally painful to distribute `.skill` files manually to every team member.
*   **Status:** Request (Issue #228 - Open).

**🎨 Document Typography**
*   **Functionality:** Quality control for generated documents (fixing orphaned words, widow paragraphs, and numbering misalignment).
*   **Discussion Highlights:** This PR leads the repository's recent activity. It addresses a ubiquitous pain point: "Every document Claude generates" suffers from these formatting flaws.
*   **Status:** Open (PR #514).

**🔍 Skill Quality & Security Analyzers**
*   **Functionality:** "Meta-skills" designed to audit other skills for structure, documentation quality, and security vulnerabilities.
*   **Discussion Highlights:** High engagement reflects the community's desire to self-regulate and maintain high standards as the number of community skills grows.
*   **Status:** Open (PR #83).

**📋 Documentation Standards (CONTRIBUTING.md)**
*   **Functionality:** Addition of a `CONTRIBUTING.md` to address community health scores (currently 25%).
*   **Discussion Highlights:** Strong support for establishing clear rules to streamline the submission process and reduce maintainer burden.
*   **Status:** Open (PR #509).

---

## 2. Community Demand Trends
Analysis of open Issues reveals strong user intent for the following directions:

*   **Workflow & Enterprise Integration:** Users are demanding better support for enterprise workflows. Top requests include **org-wide skill sharing** ([#228](https://github.com/anthropics/skills/issues/228)) and persistent knowledge/record keeping across sessions ([#521](https://github.com/anthropics/skills/pull/521)).
*   **Security & Trust:** There is significant concern regarding **security vulnerabilities** in community skills. The community is actively requesting skills to detect security flaws ([#492](https://github.com/anthropics/skills/issues/492)) and wants better namespace protections to prevent official skill impersonation.
*   **Bug Fixing & Stability:** A major trend involves fixing critical bugs in the infrastructure itself (e.g., `skill-creator` validation issues, 500 Internal Server Errors on skill deletion).
*   **Native OS Integration:** There is a push towards deeper OS integration, evidenced by skills like **Sensory** (macOS automation via AppleScript) ([#806](https://github.com/anthropics/skills/pull/806)) and **x402** (micropayments).

---

## 3. High-Potential Pending Skills
The following Pull Requests are active and open, indicating they may be merged soon or represent active development efforts.

*   **[PR #514: Document Typography](https://github.com/anthropics/skills/pull/514)**
    *   *Potential:* High. Solves a universal formatting problem.
*   **[PR #541: DOCX Fix](https://github.com/anthropics/skills/pull/541)**
    *   *Potential:* Critical. Prevents document corruption when tracked changes collide with bookmarks.
*   **[PR #509: CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)**
    *   *Potential:* High Impact. Foundational documentation that helps the entire ecosystem scale.
*   **[PR #723: Testing Patterns](https://github.com/anthropics/skills/pull/723)**
    *   *Potential:* High. Addresses the "Testing Trophy" philosophy and modern React testing needs.
*   **[PR #83: Skill Analyzers](https://github.com/anthropics/skills/pull/83)**
    *   *Potential:* High. Provides the tooling necessary for community-led quality control.

---

## 4. Skills Ecosystem Insight
The community is coalescing around **infrastructure, quality, and enterprise readiness**—moving beyond basic novelty skills to demand robust tooling that ensures security (analyzers), operational stability (bug fixes), and seamless team collaboration (sharing).

---

# Claude Code Community Digest: 2026-04-18

## 1. Today's Highlights

The release of **v2.1.113** marks a significant architectural shift for the CLI, replacing the bundled JavaScript implementation with a native binary execution model. While this update addresses performance, it arrives alongside reports of serious regression bugs affecting custom keybindings and the Bedrock integration. Community sentiment remains split; while architectural improvements are welcomed, the sudden removal of the `/buddy` feature continues to dominate discussions.

## 2. Releases

**v2.1.113**
*   **Core Architecture:** Moved CLI to spawn a native Claude Code binary via per-platform optional dependencies, replacing the previous bundled JavaScript approach. This suggests a move towards better performance and platform integration.
*   **Security:** Added `sandbox.network.deniedDomains` setting, allowing users to block specific domains even if a wildcard `allowedDomains` rule exists.
*   **[Release Note / Commit](https://github.com/anthropics/claude-code/releases)**

## 3. Hot Issues

*   **[#38335 Max Plan Limits Exhausted Abnormally Fast](https://github.com/anthropics/claude-code/issues/38335)** (👍 425)
    *   *Why it matters:* Affects billing and usage trust. Users report session limits depleting at illogical rates since late March.
    *   *Reaction:* Community is demanding transparency on metering logic.

*   **[#45596 Bring Back Buddy](https://github.com/anthropics/claude-code/issues/45596)** (👍 840)
    *   *Why it matters:* Highest-voted active issue. The silent removal of the `/buddy` companion feature has caused significant user distress.
    *   *Reaction:* Users are pleading for its restoration or at least an official explanation.

*   **[#49238 Opus 4.7 Broken on Bedrock](https://github.com/anthropics/claude-code/issues/49238)** (👍 97)
    *   *Why it matters:* Critical compatibility failure for enterprise users relying on AWS Bedrock.
    *   *Reaction:* Recently closed, implying a fix may be imminent or already deployed.

*   **[#30112 Network Egress Allowlist Broken](https://github.com/anthropics/claude-code/issues/30112)** (👍 38)
    *   *Why it matters:* Security friction. Custom domains are being incorrectly blocked with `403 blocked-by-allowlist` errors despite valid configurations.
    *   *Reaction:* Long-standing issue causing frustration in restricted network environments.

*   **[#50020 Custom Keybindings Regression](https://github.com/anthropics/claude-code/issues/50020)** (👍 0)
    *   *Why it matters:* Recent regression (v2.1.105+). Custom keybindings in `Chat` context are silently ignored.
    *   *Reaction:* Power users are reporting broken workflows following recent updates.

*   **[#49138 Bedrock Startup Latency](https://github.com/anthropics/claude-code/issues/49138)**
    *   *Why it matters:* Performance degradation. Tier probing adds 4.3 seconds to CLI startup for Bedrock users.
    *   *Reaction:* Developers are asking for caching or async probing to improve startup time.

*   **[#42393 Claude Desktop Fails on Local Projects (macOS)](https://github.com/anthropics/claude-code/issues/42393)** (👍 4)
    *   *Why it matters:* Integration failure. The Desktop app fails to work with local projects on macOS.
    *   *Reaction:* Users are forced to use the CLI instead of the GUI.

*   **[#50215 Chrome CLI Connection Failure](https://github.com/anthropics/claude-code/issues/50215)**
    *   *Why it matters:* Web integration break. `claude --chrome` cannot connect to the native host socket on macOS.
    *   *Reaction:* Affects users trying to bridge browser context with the CLI.

*   **[#43406 Edit Tool Permission Bypass Ignored](https://github.com/anthropics/claude-code/issues/43406)** (👍 1)
    *   *Why it matters:* Configuration defiance. The Edit tool prompts for approval even when `bypassPermissions` and `--dangerously-skip-permissions` are set.
    *   *Reaction:* Breaks automation scripts expecting zero-interaction modes.

*   **[#35789 VSCode Model Picker Mismatch](https://github.com/anthropics/claude-code/issues/35789)** (👍 2)
    *   *Why it matters:* UX confusion. Selecting "Default" in VSCode shows Opus 4.6 but actually sets Sonnet 4.6.
    *   *Reaction:* Causes model selection errors for users relying on the GUI picker.

## 4. Key PR Progress

*   **[#39148 preserve-session Plugin](https://github.com/anthropics/claude-code/pull/39148)**
    *   Adds a plugin to maintain session history when project directories are renamed or moved. Crucial for maintaining context during project reorganization.

*   **[#49825 Devcontainer Firewall Fix](https://github.com/anthropics/claude-code/pull/49825)**
    *   Fixes init script errors in devcontainers caused by duplicate IP additions. Increases stability for containerized development environments.

*   **[#49767 Warp Marketplace Docs](https://github.com/anthropics/claude-code/pull/49767)**
    *   Documentation addition for the Warp terminal marketplace plugin, including setup and verification steps.

*   **[#1 SECURITY.md Created](https://github.com/anthropics/claude-code/pull/1)**
    *   Establishes a formal security policy for the project, a standard requirement for enterprise adoption.

## 5. Feature Request Trends

*   **Context & Token Management:** Users are increasingly concerned with "hidden" token costs.
    *   *Request:* Better visibility into MCP tool schema consumption ([#50061](https://github.com/anthropics/claude-code/issues/50061)).
    *   *Request:* Lazy loading for context components to reduce startup overhead ([#44536](https://github.com/anthropics/claude-code/issues/44536)).

*   **Workflow Automation:** Developers want more programmatic control over the CLI environment.
    *   *Request:* Timestamp injection for time-aware reasoning ([#49084](https://github.com/anthropics/claude-code/issues/49084)).
    *   *Request:* Programmatic session naming via hooks ([#44786](https://github.com/anthropics/claude-code/issues/44786)).
    *   *Request:* Configurable slash command priority to handle collisions ([#41088](https://github.com/anthropics/claude-code/issues/41088)).

*   **Localization:**
    *   *Request:* Russian language support for voice input in the desktop app ([#50214](https://github.com/anthropics/claude-code/issues/50214)).

## 6. Developer Pain Points

*   **Configuration Fragility:** There are recurring reports of settings (`bypassPermissions`, `keybindings.json`, `allowedDomains`) being silently ignored or reset, forcing developers to constantly debug their tooling rather than their code.
*   **Platform Inconsistencies:** The "works on my machine" problem is rampant. Issues specific to Windows (Cowork tab missing), macOS (Chrome socket failures), and Bedrock (startup latency) suggest a lack of cross-platform integration test coverage.
*   **The "Black Box" Metering:** Users are expressing distrust regarding token counting, specifically discrepancies between `/context` reports and actual billing, as well as confusing logic regarding session limit exhaustion.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-18

## 1. Today's Highlights
The OpenAI Codex ecosystem is seeing rapid iteration on the `0.122.0-alpha` channel,伴随着 significant foundational work on local key management (`codex-device-key`) and async Unix socket handling. In the community, a major dispute has erupted regarding a 60% increase in token usage in CLI version `0.121.0`, while Desktop users are reporting intermittent UI freezes and file-link regressions following recent updates.

## 2. Releases
*   **rust-v0.122.0-alpha.9 / alpha.8 / alpha.7 / alpha.6**: A rapid succession of alpha releases has been pushed to the `rust` channel. While specific release notes are sparse in the feed, the cadence suggests active stabilization of features currently in development, likely correlating with the recent flurry of `app-server` and security-related pull requests.

## 3. Hot Issues
*   **[Token Usage Spike] #18345**: Regression in v0.121.0 causing ~60% more token consumption vs v0.116.0.
    *   *Why it matters*: Direct impact on developer costs and API quotas.
    *   *Community Reaction*: Users are demanding a rollback to v0.116.0; "efficient" behavior is highly preferred over new features if it burns budget.
*   **[Rate Limits] #14593**: "Burning tokens very fast" - High community traffic (550+ comments).
    *   *Why it matters*: Persistent frustration with token efficiency and rate limiting logic.
*   **[Feature Request] #10450**: Remote Development in Codex Desktop App.
    *   *Why it matters*: Top-voted request (565👍). Users want the Desktop App to support SSH/Remote development workflows similar to VS Code.
*   **[App Regression] #16374**: Windows desktop app intermittently freezes the OS shell/UI.
    *   *Why it matters*: Severe usability bug affecting Windows 11 users; temporarily opening "Settings" seems to halt the freeze, providing a quirky workaround.
*   **[Context Window] #17313**: New progress bar indicator for context remaining is a "downgrade".
    *   *Why it matters*: UI/UX friction; users feel the new visualization obscures critical context limit information compared to previous versions.
*   **[Sandbox/Bubblewrap] #14936**: `bwrap: Approval prompt shown for almost every command`.
    *   *Why it matters*: Disrupts workflow; the sandboxing mechanism on Linux is being overly aggressive, requiring excessive user intervention.
*   **[macOS Bug] #18258**: 'Computer Use plugin unavailable' despite files existing.
    *   *Why it matters*: Blocking advanced macOS users from utilizing local "Computer Use" features; workarounds involving `config.toml` edits are being shared.
*   **[MCP Performance] #18333**: Desktop repeatedly starts full MCP stacks, causing slowdowns.
    *   *Why it matters*: Memory pressure and startup lag in the Desktop App due to improper lifecycle management of Model Context Protocol (MCP) servers.
*   **[Session Lag] #18264**: Message send delayed ~8 seconds in new sessions (macOS).
    *   *Why it matters*: Performance degradation in the latest desktop build (`26.415.21839`) affecting responsiveness.
*   **[File Links] #17649**: File references in VS Code extension chat not working.
    *   *Why it matters*: Regression breaking core navigation; clicking links in chat fails to open files in the editor.

## 4. Key PR Progress
*   **[#18429] Add `codex-device-key` crate**:
    *   Introduces a dedicated crate for device-key storage and signing to separate security-sensitive operations from general routing logic.
*   **[#18431/18430] Implement macOS Device Key Provider**:
    *   Adds platform-specific support for macOS to utilize Secure Enclave for hardware-backed keys, enhancing local security.
*   **[#18428] Define Device Key v2 Protocol**:
    *   Establishes the app-server protocol for device enrollment, distinguishing between hardware-backed and OS-protected keys.
*   **[#18254] Add Async Unix Socket Crate**:
    *   Introduces `codex-uds` with wrappers for `UnixListener` and `UnixStream`, modernizing the CLI's local transport capabilities.
*   **[#18298] Budget Skill Metadata**:
    *   Caps the model-visible skills section to prevent context window overflow, surfacing warnings when skills are trimmed.
*   **[#18419] Reserve .git at Runtime (Linux)**:
    *   Security fix to prevent `git init` inside a bubblewrap sandbox from creating metadata outside protected paths.
*   **[#18212] Wire Executor-Backed MCP stdio**:
    *   Improves how the Model Context Protocol (MCP) handles stdio transport, likely addressing stability issues with external tools.
*   **[#18413] Route Self-Namespaced Dynamic Tools**:
    *   Fixes a routing gap where dynamic tools discovered by the model might fail to execute if called with a specific namespace format.
*   **[#18221] Workspace Owner Usage Nudge UI**:
    *   Frontend implementation to prompt users when they hit rate limits, allowing them to request increases or notify workspace owners.
*   **[#17891] TUI Config Migration Prompt**:
    *   Adds a startup flow for the TUI to help users migrate external agent configurations (skills, plugins) into the new environment.

## 5. Feature Request Trends
*   **Remote Development (#10450)**: The highest-voted enhancement remains the desire for first-class remote development (SSH/Container) support within the Codex Desktop App, comparable to VS Code Remote.
*   **Manual Context Management**: Continued requests for manual `/compact` commands or better controls over context window management (#11325, #17313), as users feel the automations are inefficient or opaque.
*   **Sandbox Usability**: Users are requesting granular control over sandbox permissions (#15300, #17716), specifically asking for "remember this decision" functionality and better handling of network approvals.

## 6. Developer Pain Points
*   **Resource Inefficiency**: The "Token Explosion" in v0.121.0 (#18345) and general high token usage (#14593) are top concerns. Developers feel the tool is becoming too expensive to run for routine tasks.
*   **Windows WSL & Sandbox Issues**: Multiple critical issues regarding the Windows sandbox environment (#14585, #14936, #13762). The sandbox is setting incorrect ACLs, causing approval fatigue, and confusing file paths between WSL and Windows.
*   **UI Regressions**: The Desktop App is suffering from "broken window" issues—blurry overlays on Intel Macs (#18341), broken file links in chat (#17649), and "stuck" permission dropdowns (#15300).
*   **Agent/MCP Instability**: Power users leveraging sub-agents and MCP are experiencing severe slowdowns (#18333) and leaks (#18335), suggesting the orchestration layer needs optimization.

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest: 2026-04-18

## 1. Today's Highlights
The latest **v0.60.0** release introduces enhanced interoperability with OpenAI-compatible endpoints for the Hyper provider. On the UI front, significant progress is being made to fix real-time rendering of "thinking" or reasoning chains from models like Claude and DeepSeek, alongside efforts to resolve long-standing text visibility issues in light-mode terminals.

## 2. Releases
**v0.60.0**
*   **feat(hyper): use openai-compatible endpoint for hyper**: Update (`#2640`) standardizes the Hyper provider to use an OpenAI-compatible API endpoint, improving compatibility and simplifying provider configurations.
    *   *Commit*: `ea86101bf6c61ee05ca3e887ea65d2f5ff9e68d7`
    *   *Author*: [@andreynering](https://github.com/andreynering)

## 3. Hot Issues
*   **[#909](https://github.com/charmbracelet/crush/issues/909) - [CLOSED] Tool not found with `gpt-oss` and `ollama`**
    *   *Impact*: Integration friction. Users attempting to use generic OpenAI structs with local Ollama models faced "Tool not found" errors. Closure indicates tool definitions have been fixed for this provider chain.
*   **[#462](https://github.com/charmbracelet/crush/issues/462) - [CLOSED] OpenRouter provider selection strategy**
    *   *Impact*: Cost control. Users on OpenRouter faced unpredictable pricing due to default provider selection policies. This issue requests strict selection options to prevent cost overruns.
*   **[#2623](https://github.com/charmbracelet/crush/issues/2623) - [OPEN] Thinking mode not supported with Ollama Qwen models**
    *   *Impact*: Feature compatibility. Users attempting to enable "thinking" mode on Qwen models via Ollama are receiving unsupported errors, despite potential capability in the model itself.
*   **[#2282](https://github.com/charmbracelet/crush/issues/2282) - [OPEN] Retry/recovery strategy requests**
    *   *Impact*: Reliability & Token cost. With complex multi-step tasks, network blips or timeouts can waste tokens. This issue requests documentation or implementation of robust retry mechanisms.
*   **[#1669](https://github.com/charmbracelet/crush/pull/1669) - [OPEN] User-level context files (`~/.config/AGENTS.md`)**
    *   *Impact*: Personalization. A highly requested feature to distinguish between "project rules" and "user preferences" (e.g., coding style), allowing global defaults to override project contexts.

## 4. Key PR Progress
*   **[#2643](https://github.com/charmbracelet/crush/pull/2643) - [OPEN] Fix real-time reasoning display**
    *   *Detail*: Addresses a critical UI bug where reasoning/thinking content from models (Claude, DeepSeek) was cached incorrectly and not visible during streaming.
*   **[#2644](https://github.com/charmbracelet/crush/pull/2644) - [OPEN] Fix invisible text in light mode**
    *   *Detail*: Tackles a persistent UI bug where syntax highlighting in markdown blocks results in invisible text for users with light terminal backgrounds.
*   **[#2642](https://github.com/charmbracelet/crush/pull/2642) - [CLOSED] Fix clipboard on non-Osc52 terminals**
    *   *Detail*: Fixes OAuth copy-to-clipboard failures on terminals like Apple Terminal that lack `osc52` support.
*   **[#2639](https://github.com/charmbracelet/crush/pull/2639) - [OPEN] Streamline `fetch` into `jq`**
    *   *Detail*: A pipeline optimization allowing the `fetch` tool to pass data directly to `jq`, reducing token usage and tool call overhead for JSON processing.
*   **[#2641](https://github.com/charmbracelet/crush/pull/2641) - [CLOSED] Enable progress bar on iTerm2**
    *   *Detail*: Adds native progress bar support for iTerm2 users.

## 5. Feature Request Trends
*   **Local Model Stability**: There is a distinct focus on ensuring "thinking" modes and complex tools work reliably with local providers (Ollama) rather than just cloud APIs.
*   **UI/UX Refinements**: The community is actively pushing for fixes regarding "light mode" visibility and better rendering of chain-of-thought (reasoning) data in the TUI.
*   **Cost & Token Optimization**: Requests for better provider selection logic (OpenRouter) and efficient tool chaining (`fetch` -> `jq`) indicate a desire to minimize token usage and cost.

## 6. Developer Pain Points
*   **Provider Inconsistency**: Developers are frustrated by differing feature support across providers (e.g., "Thinking" working on cloud but failing on Ollama, or tools missing in generic OpenAI implementations).
*   **Terminal Compatibility**: While modern terminal features are great, basic compatibility (like clipboard support and light mode visibility) is breaking for users on standard environments like Apple Terminal.
*   **Error Recovery**: The lack of a clear retry strategy for long-running tasks is a concern for developers relying on the agent for multi-step refactors.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-04-18

## 1. Today's Highlights
The Gemini CLI ecosystem is seeing significant expansion in model support and local tooling. Major developments today include the integration of **Gemma 4** models with advanced "Thinking" capabilities and the introduction of a streamlined `gemini gemma` setup command for local model inference. Simultaneously, the community is actively vocal about stability issues, particularly regarding shell execution hangs and agent behavior at token limits.

## 2. Releases
### v0.38.2 (Latest)
**Summary**: A hotfix patch released to address stability in the `v0.38.1` branch.
**What's Changed**:
*   **Core Patch**: Cherry-picked commit `14b2f35` to resolve unspecified critical issues in the previous release.
*   **Link**: [github.com/google-gemini/gemini-cli/pull/25585](https://github.com/google-gemini/gemini-cli/pull/25585)

## 3. Hot Issues
Here are the top 10 issues drawing community and maintainer attention:

1.  **[Failing to download RipGrep slows startup](https://github.com/google-gemini/gemini-cli/issues/25323)**
    *   **Why it matters**: Users facing network issues experience 2+ minute hangs during startup because the CLI fails to "fail fast" on RipGrep download errors.
    *   **Reaction**: High frustration; users request bundling RipGrep to avoid network dependencies.
2.  **[Subagent recovery reported as success after MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)**
    *   **Why it matters**: A critical logic bug where agents hitting a turn limit report "Goal Success" instead of "Interruption," hiding failures from the user.
    *   **Reaction**: Marked Priority 1 (P1).
3.  **[Shell command execution gets stuck "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**
    *   **Why it matters**: The CLI enters a zombie state where simple shell commands appear active and await input despite having already finished.
    *   **Reaction**: High engagement (👍 2); major workflow blocker.
4.  **[Gemini cli keeps asking for permissions](https://github.com/google-gemini/gemini-cli/issues/24916)**
    *   **Why it matters**: "Allow for all future sessions" prompt fails to persist, forcing users to approve the same file repeatedly.
    *   **Reaction**: Breaking trust in the permission system.
5.  **[Assess impact of AST-aware file reads](https://github.com/google-gemini/gemini-cli/issues/22745)**
    *   **Why it matters**: An Epic proposal to use Abstract Syntax Trees (AST) for codebase mapping, which could drastically reduce noise and token usage.
    *   **Reaction**: High interest (👍 1) in smarter code parsing.
6.  **[Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**
    *   **Why it matters**: Configuration files (`maxTurns`, etc.) are not being respected by the Browser Agent, stripping user control.
7.  **[Model creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)**
    *   **Why it matters**: The model scatters temporary edit scripts across the workspace, creating significant cleanup overhead before commits.
8.  **[Implement memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819)**
    *   **Why it matters**: A proposal to distinguish between user-specific preferences (Global) and codebase-specific context (Project).
    *   **Reaction**: Strong support (👍 2) for better memory architecture.
9.  **[Table renders incrementally during streaming](https://github.com/google-gemini/gemini-cli/issues/25218)**
    *   **Why it matters**: Streaming re-renders tables on every chunk, breaking layout in screen reader mode and causing visual flicker.
10. **[Text scrambled when running SSH](https://github.com/google-gemini/gemini-cli/issues/24202)**
    *   **Why it matters**: The CLI is unusable on Windows laptops connecting to gLinux via SSH due to rendering corruption.

## 4. Key PR Progress
Significant pull requests and merges from the last 24 hours:

1.  **[feat(core): add support for Gemma 4 models](https://github.com/google-gemini/gemini-cli/pull/25604)**
    *   Adds `gemma-4-31b-it` and `gemma-4-26b-a4b-it`, enabling the new "Thinking" capabilities in the model family.
2.  **[feat(cli): add streamlined `gemini gemma` local model setup](https://github.com/google-gemini/gemini-cli/pull/25498)**
    *   Introduces a dedicated command to manage local models and view LiteRT server logs, simplifying local inference.
3.  **[feat(config): split memoryManager flag into autoMemory](https://github.com/google-gemini/gemini-cli/pull/25601)**
    *   Decouples the `MemoryManagerAgent` from background skill-extraction services, allowing for granular feature control.
4.  **[feat(ci): revive bundling and unleash 16-core test speed](https://github.com/google-gemini/gemini-cli/pull/25426)**
    *   Modernizes CI infrastructure with artifact-centric paths and parallelized testing.
5.  **[fix(core): silently handle EPERM when listing dir structure](https://github.com/google-gemini/gemini-cli/pull/25066)**
    *   Resolves crashes (e.g., on macOS `~/.Trash`) caused by restricted directory permissions.
6.  **[Fix/strip redundant plan prefix](https://github.com/google-gemini/gemini-cli/pull/25587)**
    *   Addresses a "Plan Mode" bug where agents created redundant nested folders (e.g., `plan/conductor/product.md` -> `plan/plan/...`).
7.  **[feat: implement universal RTL/BiDi support](https://github.com/google-gemini/gemini-cli/pull/25243)**
    *   Comprehensive support for Right-to-Left languages (Arabic, Hebrew) with ANSI-safe rendering to prevent style breaking.
8.  **[feat(vertex): add vertexLocation config setting](https://github.com/google-gemini/gemini-cli/pull/25362)**
    *   Allows users to override the default Vertex AI region, crucial for accessing preview models only available in `global`.
9.  **[feat(vertex): add settings for Vertex AI request routing](https://github.com/google-gemini/gemini-cli/pull/25513)**
    *   Adds support for configuring billing headers (`X-Vertex-AI-LLM-Request-Type`) via `settings.json`.
10. **[fix(core): resolve nested plan directory duplication](https://github.com/google-gemini/gemini-cli/pull/25138)**
    *   Centralizes path resolution to handle relative paths correctly and respect security policies.

## 5. Feature Request Trends
Based on issue activity, the community is strongly advocating for:
*   **AST-Aware Tooling**: There is a significant push (Issues #22745, #22746) to move from text-based search to Abstract Syntax Tree (AST) based mapping. Users want the CLI to understand code structure (methods, classes) rather than treating files as plain text.
*   **Local Model & Privacy Control**: The demand for local models is high. PRs regarding `gemini gemma` setup and issues regarding data security (routing) indicate developers want to run agents offline or in specific cloud regions.
*   **Better Memory Architecture**: Users are requesting a distinction between "Global" (user preferences) and "Project" (codebase specific) memory, rather than a flat memory store.

## 6. Developer Pain Points
Recurring frustrations reported by developers in the last 24 hours:
*   **"Zombie" Shell Processes**: A critical UX failure where the CLI waits for input on a process that has already exited, requiring manual intervention to continue.
*   **Config Ignorance**: Agents (specifically the Browser Agent) ignoring `settings.json` overrides is a major pain point, making it difficult to tune agent behavior (e.g., `maxTurns`) for specific tasks.
*   **Startup Latency**: Network dependency on downloading tools like RipGrep is causing multi-minute delays during startup for users with restricted internet access.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-18

## 1. Today's Highlights

The Copilot CLI v1.0.32 release introduces a new `auto` model selection feature designed to optimize performance by picking the best available model per session, alongside usability improvements for session resumption and feedback handling. However, the community is currently focused on significant stability and billing concerns, particularly reports of "infinite" premium request consumption during single agent tool invocations and a critical, persistent 429 rate limit affecting Pro+ users.

## 2. Releases

**v1.0.32 (2026-04-17)**
This update focuses on workflow optimization and debugging capabilities:
*   **Smart Model Selection:** You can now select `auto` as your model to let Copilot automatically choose the best available model for each session.
*   **Improved Session Management:** The `--resume` flag and `/resume` command now accept short session ID prefixes (7+ hex characters) instead of requiring the full ID.
*   **Resilient Feedback:** The `/feedback` command now defaults to saving bundles to the TEMP directory if the current working directory is not writable.
*   **Debug Tools:** Added `--print-debug-info` flag to display version, terminal capabilities, and environment variables for troubleshooting.
*   **Usage Alerts:** Warnings are now displayed when approaching 75% and 90% of your weekly usage limit.
*   *Links:* [Release v1.0.32](https://github.com/github/copilot-cli/releases/tag/v1.0.32)

## 3. Hot Issues

**[#2591 Single session request consumes infinite premium requests](https://github.com/github/copilot-cli/issues/2591)**
*   **Why it matters:** A critical billing bug where a single user request triggers a loop of tool invocations, consuming 80-100 premium requests. This is effectively draining user quotas rapidly.
*   **Community:** Users are alarmed by the "infinite" consumption rates, with +12 reactions confirming the severity.

**[#2742 Persistent Global 429 Rate Limit on Paid Pro+](https://github.com/github/copilot-cli/issues/2742)**
*   **Why it matters:** Paid Pro+ users report being completely locked out by 429 errors for hours despite having active token allocations and rebooting environments.
*   **Community:** Highlighted as "Critical," affecting user trust in the service's reliability for paid tiers.

**[#1703 Model Discrepancy: CLI vs VS Code](https://github.com/github/copilot-cli/issues/1703)**
*   **Why it matters:** Organization-enabled models (e.g., Gemini 3.1 Pro) appear in VS Code but are missing from the CLI model list, creating an inconsistent dev environment.
*   **Community:** Highly requested (+33 reactions), indicating a strong desire for feature parity between IDE and CLI interfaces.

**[#2725 GPT-5.4 Model Picker Hides "Extra High"](https://github.com/github/copilot-cli/issues/2725)**
*   **Why it matters:** While `xhigh` effort levels work technically for GPT-5.4, the UI picker only displays Low/Medium/High, confusing users who want maximum reasoning capability.
*   **Community:** +15 reactions suggest power users rely on these hidden effort levels.

**[#575 Bash execution environment hangs](https://github.com/github/copilot-cli/issues/575)**
*   **Why it matter:** A persistent issue (originating from late 2025) where the shell hangs indefinitely on macOS 15.6.1 M1.
*   **Community:** Recently marked CLOSED, but remains a top discussion point regarding stability on Apple Silicon.

**[#2336 Strange rate limit message](https://github.com/github/copilot-cli/issues/2336)**
*   **Why it matters:** Users report receiving vague rate limit errors during moderate usage, suggesting the tracking logic may be too aggressive or unclear.
*   **Community:** Users are frustrated by the lack of clarity in quota management.

**[#1838 Hangs in Nix/direnv environments](https://github.com/github/copilot-cli/issues/1838)**
*   **Why it matters:** The CLI enters a subprocess I/O deadlock when used with Nix flake-based environments managed by direnv.
*   **Community:** A niche but important segment of developers using reproducible environments are blocked (+9 reactions).

**[#1160 Text editor improvements](https://github.com/github/copilot-cli/issues/1160)**
*   **Why it matters:** Lack of basic text editing support (e.g., Ctrl+Backspace, text selection/cut) in the CLI prompt makes the experience painful compared to VS Code.
*   **Community:** Despite being CLOSED recently, comments indicate users still find the inline editing experience lacking.

**[#2692 Web Search tool error (MCP)](https://github.com/github/copilot-cli/issues/2692)**
*   **Why it matters:** Integration with `github-mcp-server` for web search is failing with HTTP errors, breaking a key agentic capability.
*   **Community:** Highlights fragility in the emerging MCP ecosystem integration.

**[#2625 Poor rendering performance](https://github.com/github/copilot-cli/issues/2625)**
*   **Why it matters:** As conversations grow, the terminal becomes laggy, hanging for 30-45 seconds, rendering the tool unusable for long sessions.
*   **Community:** A frequent complaint that impacts daily workflow efficiency.

## 4. Key PR Progress

**[#2800 Add initial devcontainer configuration](https://github.com/github/copilot-cli/pull/2800)**
*   **Status:** Open
*   **Impact:** This PR lays the groundwork for a standardized development environment using Dev Containers. It will significantly lower the barrier to entry for new contributors wanting to build or debug the CLI tool locally.

*(Note: The current data set shows limited PR activity in the last 24 hours; PR #2800 is the primary entry).*

## 5. Feature Request Trends

Based on the chatter in Issues and PRs:

*   **Agent/Model Autonomy & Control:** Users want fine-grained control over agent behavior. This includes requests for a "Review Mode" (Issue #1529) and fixing "General Purpose" agent overrides (Issue #935).
*   **Configuration Standardization (XDG):** There is a strong push for the CLI to respect Linux/Unix standards correctly. Multiple Issues (#1750, #1347, #1954) demand proper `XDG_CONFIG_HOME` support without dot-prefixed subdirectories.
*   **Model Parity:** A recurring theme is the gap between the CLI and VS Code. Users are demanding access to the same models (Gemini 3.1 Pro) and UI effort levels (Extra High) available in the IDE.

## 6. Developer Pain Points

*   **Usage Quota Anxiety:** The community is expressing significant frustration regarding "usage limits." Between the "infinite consumption" bug, confusing "strange rate limit" messages, and negative percentages displayed after hitting limits (Issue #2797), developers feel they cannot trust the billing or usage metering.
*   **Environment Compatibility:** Developers working in specialized environments—specifically **Nix/direnv** users and **Windows (PuTTY/SSH)** users—are facing frequent hangs and broken copy-paste functionality, suggesting the CLI struggles with diverse subprocess handling.
*   **Terminal UX Lag:** The rendering performance degrades severely during long sessions (Issue #2625), forcing users to clear their history to regain typing speed. This interrupts "flow states" for developers.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-04-18

## 1. Today's Highlights
The release of **v1.36.0** addresses critical UI bugs in the web interface and significantly increases the default reasoning budget (`max_steps_per_turn` from 100 to 500). However, the community is currently vocal about the **K2.6 model's behavior**, specifically citing excessive "rumination" (over-thinking) and loss of interactivity, which appears to be a breaking change for many established workflows.

## 2. Releases
**Version 1.36.0**
*   **Core Logic**: Increased the default `max_steps_per_turn` from 100 to 500. This allows the agent to handle more complex tasks requiring longer chains of thought before timing out ([#1908](https://github.com/MoonshotAI/kimi-cli/pull/1908)).
*   **Shell UX**: Implemented a fallback "moon spinner" during active turn gaps to improve perceived responsiveness ([#1909](https://github.com/MoonshotAI/kimi-cli/pull/1909)).
*   **Dependencies**: Bumps `kosong` to v0.50.0 to support extended thinking effort levels (xhigh, max) for newer models like Opus 4.7 ([#1922](https://github.com/MoonshotAI/kimi-cli/pull/1922)).

## 3. Hot Issues
*   **[Bug] Rumination / Over-thinking Loops** ([#1926](https://github.com/MoonshotAI/kimi-cli/issues/1926))
    *   *Impact*: Users report the model enters an infinite loop of internal thinking without producing output.
    *   *Reaction*: Critical frustration; described as "不停反刍" (ceaseless ruminating).
*   **[Model Behavior] K2.6-Code-Preview Thinking Length** ([#1874](https://github.com/MoonshotAI/kimi-cli/issues/1874))
    *   *Impact*: Reports of sub-agents running for **51 turns** and consuming **60k+ output tokens** on simple tasks.
    *   *Reaction:* High concern (👍 1); users feel their workflow is disrupted by "meaningless thinking."
*   **[Model Behavior] K2.6 vs K2.5 Personality Loss** ([#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925))
    *   *Impact:* Users claim K2.6 has "lost all personality" and drowns creativity in reasoning.
    *   *Reaction:* Users requesting the ability to downgrade/fallback to K2.5 system prompts.
*   **[Bug] API Error 400 - Invalid Temperature** ([#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903), [#1924](https://github.com/MoonshotAI/kimi-cli/issues/1924))
    *   *Impact:* API returns `invalid temperature: only 0.6 is allowed` regardless of the setting.
    *   *Reaction:* Blocks usage of varied temperature settings; confirmed across different SDKs.
*   **[Bug] K2.6 Problems in Claude Code** ([#1888](https://github.com/MoonshotAI/kimi-cli/issues/1888))
    *   *Impact:* K2.6 makes excessive calls when used within the Claude Code environment.
*   **[Bug] MCP Server JSON Parsing** ([#1919](https://github.com/MoonshotAI/kimi-cli/issues/1919))
    *   *Impact:* CLI fails to retrieve information from MCP servers if it is not strictly `content.text`.
*   **[Bug] WSL2 Support** ([#1916](https://github.com/MoonshotAI/kimi-cli/issues/1916))
    *   *Impact:* Login process redirects to a subscription page within WSL2 Ubuntu-24.04, blocking CLI usage.
*   **[Feature] Project-Level System Prompts** ([#1856](https://github.com/MoonshotAI/kimi-cli/issues/1856))
    *   *Impact:* Request for a `\system_prompt.md` in the project root to override defaults.
    *   *Reaction:* High demand (👍 1) for granular control.
*   **[Bug] Installation in China/GitHub-Restricted Regions** ([#1914](https://github.com/MoonshotAI/kimi-cli/issues/1914))
    *   *Impact:* The `uv` installer bootstraps from GitHub Releases, causing failures in regions where GitHub is blocked.
*   **[Enhancement] Bad Interactivity** ([#1923](https://github.com/MoonshotAI/kimi-cli/issues/1923))
    *   *Impact:* Internal reasoning is not streamed, making it hard to review steps or catch errors early.

## 4. Key PR Progress
*   **[feat] CLI/UI Fixes & Buttons** ([#1920](https://github.com/MoonshotAI/kimi-cli/pull/1920), [#1921](https://github.com/MoonshotAI/kimi-cli/pull/1921))
    *   Restores functionality for copy, download, and preview buttons in code blocks and fixes markdown spacing in the Web UI.
*   **[feat] Anthropic Opus 4.7 Support** ([#1911](https://github.com/MoonshotAI/kimi-cli/pull/1911), [#1918](https://github.com/MoonshotAI/kimi-cli/pull/1918))
    *   Implements adaptive thinking support for Claude Opus 4.7, fixing a bug where it was forced to use legacy thinking formats.
*   **[feat] Soul-Level `/btw` Command** ([#1876](https://github.com/MoonshotAI/kimi-cli/pull/1876))
    *   Registers `/btw` as a universal command available in all execution modes (print, web, ACP), not just the interactive shell.
*   **[fix] Accidental Revert** ([#1917](https://github.com/MoonshotAI/kimi-cli/pull/1917))
    *   Reverted an accidental direct push to `main` regarding the Anthropic thinking effort refactor to ensure proper PR review flow.
*   **[feat] Web Session Status** ([#1701](https://github.com/MoonshotAI/kimi-cli/pull/1701))
    *   Added visual pulsing dot indicators in the web UI sidebar to show if a session is "busy" or "idle".
*   **[feat] Web Custom Agent** ([#1712](https://github.com/MoonshotAI/kimi-cli/pull/1712))
    *   Added `--agent-file` option to `kimi web` to launch sessions with custom agent YAML configurations.
*   **[fix] PyInstaller Build** ([#1912](https://github.com/MoonshotAI/kimi-cli/pull/1912))
    *   Fixed `onedir` build mode to correctly resolve built-in skills paths in frozen environments.
*   **[fix] Permission Errors** ([#1692](https://github.com/MoonshotAI/kimi-cli/pull/1692))
    *   Fixed HTTP 500 errors when the web server encounters permission-denied directories (like `~/.Trash` on macOS).
*   **[feat] Telemetry Integration** ([#1798](https://github.com/MoonshotAI/kimi-cli/pull/1798))
    *   Integrates telemetry tracking across interactive and web modes (currently Open).
*   **[docs] TOML Configuration** ([#1870](https://github.com/MoonshotAI/kimi-cli/pull/1870))
    *   Clarified that providers and models containing dots in their names must use quoted TOML keys.

## 5. Feature Request Trends
*   **Granular Model Control**: Users want to select specific model versions (e.g., revert to K2.5) and access `system_prompt.md` at the project level to override default behaviors.
*   **Improved Thinking Visibility**: There is a strong demand for streaming internal reasoning steps incrementally rather than hiding them, allowing for early error detection.
*   **VSCode/UX Polish**: Requests for independent font resizing in the VSCode plugin and moving "Plan" mode output directly into the chat interface rather than a separate markdown file.

## 6. Developer Pain Points
*   **Uncontrolled Reasoning Costs**: The most significant pain point today is the "K2.6" update, which developers claim generates excessive internal thinking loops (rumination), leading to high latency and token costs without delivering better code.
*   **Environment Fragility**: Installation failures due to network restrictions (GitHub/uv dependency) and permission errors in WSL2/macOS TCC environments are blocking onboarding.
*   **Integration Instability**: Issues with MCP servers losing JSON data and hard-coded API temperature errors are breaking developer toolchains.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-18

## 1. Today's Highlights

OpenCode has released v1.4.10, focusing on stabilizing remote workspace connectivity and OpenTelemetry (OTEL) support for managed environments. The release cadence has been rapid to address regressions introduced in v1.4.8, specifically regarding provider loading (Bedrock/LLM Gateway) and plugin deadlocks during startup. Concurrently, the "Effect-Zod" refactor continues to advance rapidly, laying the groundwork for the v2 architecture by overhauling schema validation and event handling.

## 2. Releases

- **v1.4.10 (Latest)**
  - **Core:** Restored workspace history on connect to ensure existing sessions sync correctly before live updates resume.
  - **Core:** Passed OTEL exporter settings into managed workspaces, enabling telemetry support in isolated environments.
  - **Core:** Normalized provider metadata defaults to prevent model loading failures when catalog data is incomplete.
- **v1.4.9**
  - **Core:** Added LLM Gateway as a provider, including configuration support and model usage reporting.
  - **Core:** Limited GitHub Copilot Opus 4.7 models to "medium" reasoning effort to avoid API errors with unsupported variants.
  - **Core:** Improved remote workspace reconnection with exponential backoff logic.
- **v1.4.8**
  - **Core:** Fixed a crash triggered by experimental mode.
  - **Core:** Allowed plugin tools to return metadata in execution results.
  - **UI:** Fixed revert diffs showing `/dev/null` instead of real filenames.

## 3. Hot Issues

- **[#23110 Regression in 1.4.7/1.4.8: No providers load (Bedrock)](https://github.com/anomalyco/opencode/issues/23110)**
  - **Why it matters:** A critical regression preventing AWS Bedrock models from appearing in the TUI. The community is actively discussing downgrading to v1.4.6 as a workaround.
  - **Reaction:** High urgency; reported as a blocker for professional workflows.

- **[#23098 Splashscreen freeze on 1.4.8](https://github.com/anomalyco/opencode/issues/23098)**
  - **Why it matters:** Users are completely locked out of the desktop app after updating from 1.4.4, receiving no UI past the splash screen.
  - **Reaction:** Significant frustration regarding QA for auto-updates.

- **[#23147 Plugins deadlock on startup](https://github.com/anomalyco/opencode/issues/23147)**
  - **Why it matters:** v1.4.8 introduced a deadlock if plugins call `client.app.log()` during initialization, rendering the TUI unresponsive.
  - **Reaction:** Highlighted as a major regression for plugin developers.

- **[#16100 Numpad keys ignored in VS Code terminal](https://github.com/anomalyco/opencode/issues/16100)**
  - **Why it matters:** A persistent input handling bug where the Numpad is unresponsive within VS Code's integrated terminal.
  - **Reaction:** 10 upvotes; affects users relying on VS Code as their primary shell.

- **[#23200 Cmd+V triggers app exit instead of paste](https://github.com/anomalyco/opencode/issues/23200)**
  - **Why it matters:** A critical UX bug on macOS where pasting text in the prompt textarea accidentally terminates the application.
  - **Reaction:** High annoyance factor; a fix PR (#23202) was opened immediately.

- **[#22862 Glob tool WebAssembly error (WSL2)](https://github.com/anomalyco/opencode/issues/22862)**
  - **Why it matters:** The file globbing tool fails completely in WSL2 due to WASM SIMD requirements, breaking file search features.
  - **Reaction:** Technical discussion indicates a need for a WASM fallback or environment detection.

- **[#3680 Light themes removed](https://github.com/anomalyco/opencode/issues/3680)**
  - **Why it matters:** Longstanding request (8 upvotes) questioning the removal of light theme support.
  - **Reaction:** Recently closed, but continues to generate discussion regarding UI customization.

- **[#4821 Feature: Ability to unqueue messages](https://github.com/anomalyco/opencode/issues/4821)**
  - **Why it matters:** Users want the ability to cancel queued prompts before the agent processes them.
  - **Reaction:** High demand (34 upvotes); reflects a desire for more control over agent execution loops.

- **[#22630 Blank window on macOS Tahoe (26.4)](https://github.com/anomalyco/opencode/issues/22630)**
  - **Why it matters:** Compatibility issue with the latest macOS beta (Tahoe) resulting in a non-functional desktop app.
  - **Reaction:** Critical for early adopters on Apple hardware.

- **[#23009 High CPU Usage & FileWatcher Timeout](https://github.com/anomalyco/opencode/issues/23009)**
  - **Why it matters:** The desktop app consumes excessive resources on startup due to the file watcher attempting to scan root directories.
  - **Reaction:** Performance concerns are rising as the codebase grows.

## 4. Key PR Progress

- **[#23207 feat(effect-zod): translate Schema.withDecodingDefault](https://github.com/anomalyco/opencode/pull/23207)**
  - **Impact:** Unblocks the migration of `config/keybinds.ts` by ensuring optional Effect Schema fields with defaults produce Zod `.default()` values.
  - **Status:** Open (Vouched).

- **[#23205 fix: refresh changes panel when files are modified externally](https://github.com/anomalyco/opencode/pull/23205)**
  - **Impact:** Fixes a UX lag where the "Changes" panel in the desktop app wouldn't update if a file was edited in VSCode simultaneously.
  - **Status:** Open.

- **[#23202 fix: Cmd+V makes exit instead of paste](https://github.com/anomalyco/opencode/pull/23202)**
  - **Impact:** Rapid response to issue #23200. Modifies the prompt textarea to specifically catch `Cmd+V` before it hits the global exit handler.
  - **Status:** Open.

- **[#12856 feat: bugfix to snapshot pruning and config](https://github.com/anomalyco/opencode/pull/12856)**
  - **Impact:** Resolves long-standing issues (closes multiple linked issues) regarding snapshot retention, ensuring old directories are actually pruned to save disk space.
  - **Status:** Open.

- **[#22676 feat: Use proper globbing for permissions](https://github.com/anomalyco/opencode/pull/22676)**
  - **Impact:** Enhances security and granularity for file access permissions (edit, read) by supporting proper glob patterns instead of wildcards.
  - **Status:** Open.

- **[#19545 feat: opencode remote control + opencode serve](https://github.com/anomalyco/opencode/pull/19545)**
  - **Impact:** A major feature addition allowing OpenCode to act as a controllable server over a network (via Tailscale/Tailscale SSH).
  - **Status:** Beta (Open).

- **[#23186 feat(effect-zod): add catchall support](https://github.com/anomalyco/opencode/pull/23186)**
  - **Impact:** Core infrastructure update enabling the Zod walker to handle `Schema.StructWithRest`, essential for the v2 migration.
  - **Status:** Closed (Merged).

- **[#23198 refactor(server): align route-span attrs with OTel](https://github.com/anomalyco/opencode/pull/23198)**
  - **Impact:** Standardizes telemetry naming conventions to match OpenTelemetry standards (e.g., renaming `opencode.sessionID` to `session.id`).
  - **Status:** Closed (Merged).

- **[#5134 feat: add support for JSONC in user theme files](https://github.com/anomalyco/opencode/pull/5134)**
  - **Impact:** Adds consistency for theme developers by allowing comments in JSON theme files.
  - **Status:** Open.

- **[#23191 fix(tui): fail fast on missing session](https://github.com/anomalyco/opencode/pull/23191)**
  - **Impact:** Prevents the TUI from freezing if launched with a non-existent session ID.
  - **Status:** Open.

## 5. Feature Request Trends

**Enhanced Agent Control**
Users are increasingly asking for granular control over agent execution. Top requests include the ability to **unqueue messages** ([#4821](https://github.com/anomalyco/opencode/issues/4821)) and audio notifications when tasks complete ([#23184](https://github.com/anomalyco/opencode/issues/23184)), indicating a desire to manage long-running, unattended tasks more efficiently.

**Theming and UI Customization**
There is a persistent push for better theming capabilities. Requests range from bringing back **light themes** ([#3680](https://github.com/anomalyco/opencode/issues/3680)) to supporting **source-level context details** in the UI ([#20631](https://github.com/anomalyco/opencode/issues/20631)) and allowing two-line session titles ([#22480](https://github.com/anomalyco/opencode/issues/22480)).

**Configuration Flexibility**
Developers want more control over their configuration environment. This includes supporting themes in config directories ([#23157](https://github.com/anomalyco/opencode/issues/23157)) and using macOS-native clipboard tools ([#12800](https://github.com/anomalyco/opencode/issues/12800)).

## 6. Developer Pain Points

**Update Anxiety**
The release of v1.4.8 has caused significant friction. Multiple users reported "downgrade" workflows to v1.4.6 due to regressions involving provider loading ([#23110](https://github.com/anomalyco/opencode/issues/23110)), startup deadlocks ([#23147](https://github.com/anomalyco/opencode/issues/23147)), and blank windows ([#23098](https://github.com/anomalyco/opencode/issues/23098)). The community is concerned about the stability of the rapid release cycle.

**Input Handling Instability**
Basic terminal interaction remains a friction point. Issues with **Numpad support** in VS Code ([#16100](https://github.com/anomalyco/opencode/issues/16100)) and **paste commands** crashing the app ([#23200](https://github.com/anomalyco/opencode/issues/23200)) suggest underlying weaknesses in the TUI input layer.

**Performance and Resource Management**
Users are reporting higher CPU usage, specifically linked to the FileWatcher service scanning root directories ([#23009](https://github.com/anomalyco/opencode/issues/23009)) and WASM parsing errors in WSL2 ([#22862](https://github.com/anomalyco/opencode/issues/22862)). These issues indicate that the tool's resource footprint is becoming a concern for users working in large repositories or constrained environments.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-18

## 1. Today's Highlights

The release of **v0.15.0-preview.0** introduces major advancements, including complete **ACP (Anthropic Context Protocol) hooks support**, allowing for deeper integrations, and a significantly optimized **Compact Mode UX**. The community is currently highly focused on a contentious proposal to reduce the free OAuth quota, which has sparked intense debate, alongside widespread reports of authentication errors affecting both legacy and nightly builds.

## 2. Releases

**v0.15.0-preview.0**
*   **ACP Integration:** Adds full hooks support for the Anthropic Context Protocol (PR #3248), expanding extensibility.
*   **UX Improvements:** Compact mode receives shortcuts, settings sync, and safety optimizations (PR #3100).
*   **HTTP Hooks:** New capabilities for HTTP hook handling.
*   **Nightly (v0.14.5-nightly.20260417):** Backports these features to the nightly channel for immediate testing.

## 3. Hot Issues

*   **[#3203: Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** - **High Impact.** A proposal to cut the daily free request quota from 1,000 to 100 and phase out the free tier entirely. With 93 comments in 5 days, this is the community's primary concern regarding accessibility and pricing.
*   **[#3348: Internal error 401 invalid access token](https://github.com/QwenLM/qwen-code/issues/3348)** - **Critical Bug.** Users reporting sudden 401 errors on previously working setups (v0.14.5+). High engagement (👍 7) suggests a widespread regression in token handling.
*   **[#1855: OAuth session persists after switching to API key](https://github.com/QwenLM/qwen-code/issues/1855)** - **Authentication Logic.** Users experiencing "ghost" OAuth sessions that override valid Coding Plan API keys, leading to 401 errors even after paying.
*   **[#3281: OAuth says auth succeeded, but requests fail](https://github.com/QwenLM/qwen-code/issues/3281)** - **UX/Confusion.** Highlights a disconnect between the client reporting successful authentication and the backend API rejecting requests due to quota limits.
*   **[#3267: Requests limits overview](https://github.com/QwenLM/qwen-code/issues/3267)** - **Transparency.** Users are confused by opaque quota counters ("0 remaining" despite light usage) and are requesting better visibility into consumption.
*   **[#2409: Bring subagent system to parity with Claude Code](https://github.com/QwenLM/qwen-code/issues/2409)** - **Feature Gap.** A detailed comparison showing Qwen Code implements ~40-45% of Claude's subagent features. High demand for feature completion (👍 3).
*   **[#3144: Terminal scroll jumps up/down rapidly](https://github.com/QwenLM/qwen-code/issues/3144)** - **Stability.** A bug causing the terminal to flicker violently during agent execution, impacting usability for TUI users.
*   **[#3342: Shell output returns empty for Zhipu AI/GLM-5.1](https://github.com/QwenLM/qwen-code/issues/3342)** - **Model Compatibility.** Reports that Qwen Code fails to read shell output correctly when using Zhipu AI's models, causing the agent to hallucinate empty results.
*   **[#2034: Customize or Disable "Thinking" Quotes](https://github.com/QwenLM/qwen-code/issues/2034)** - **Personalization.** Request to remove or change the rotating quotes in the TUI during processing (👍 5).
*   **[#2987: Suggestion to add Todo task list in CLI](https://github.com/QwenLM/qwen-code/issues/2987)** - **Workflow.** Users want a persistent task list to monitor progress without scrolling up, which currently triggers screen flicker bugs.

## 4. Key PR Progress

*   **[#3248: feat(acp): add complete hooks support](https://github.com/QwenLM/qwen-code/pull/3248)** - **Merged.** Implements full hooks for ACP integration, a major step for plugin interoperability.
*   **[#3100: feat: optimize compact mode UX](https://github.com/QwenLM/qwen-code/pull/3100)** - **Merged.** Enhances the compact interface with better shortcuts and sync.
*   **[#3381: fix(cli): reduce terminal redraw cursor movement](https://github.com/QwenLM/qwen-code/pull/3381)** - **Closed.** Addresses the "scroll jumping" issue by optimizing multiline redraw sequences in the CLI.
*   **[#3242: fix(cli): preserve startup input](https://github.com/QwenLM/qwen-code/pull/3242)** - **Open.** Fixes a bug where keystrokes entered during CLI startup are dropped. Includes regression tests.
*   **[#2734: feat(tools): add Markdown for Agents support](https://github.com/QwenLM/qwen-code/pull/2734)** - **Open.** Adds support for Cloudflare's "Markdown for Agents" spec to the WebFetch tool, promising up to 80% token reduction.
*   **[#3178: feat(core): detect tool validation retry loops](https://github.com/QwenLM/qwen-code/pull/3178)** - **Open.** Introduces logic to stop infinite loops when the model repeatedly fails tool schema validation.
*   **[#3165: feat: add MiniMax provider support](https://github.com/QwenLM/qwen-code/pull/3165)** - **Open.** Adds MiniMax as a new model provider option.
*   **[#3404: feat(cli): add /doctor diagnostic command](https://github.com/QwenLM/qwen-code/pull/3404)** - **Open.** Introduces a CLI command to perform health checks on the environment (Node version, auth, config), aiding troubleshooting.
*   **[#3297: fix(tool-registry): add lazy factory registration](https://github.com/QwenLM/qwen-code/pull/3297)** - **Open.** Fixes a critical concurrency bug (P0) where tools could be instantiated twice, causing listener leaks.
*   **[#3398: feat(vscode): replace OAuth with Coding Plan setup](https://github.com/QwenLM/qwen-code/pull/3398)** - **Open.** Updates the VSCode extension to remove the deprecated OAuth flow in favor of Coding Plan/API Key setup, matching the CLI experience.

## 5. Feature Request Trends

*   **Authentication Flexibility:** There is a strong push to decouple the client from proprietary auth methods. Users are demanding robust support for OpenAI-compatible and custom API keys (e.g., Zhipu, local LLMs) to avoid "vendor lock-in" and authentication instability.
*   **Subagent Capabilities:** Users are comparing Qwen Code directly to Claude Code. There is a clear trend towards requesting feature parity in subagent management (markdown configs, plugin subagents) and orchestration (e.g., Issue #2409).
*   **IDE Parity (VSCode):** A recurring theme involves bringing CLI-exclusive features (like Plan Mode, `/export`, and performance optimizations) to the VSCode extension.

## 6. Developer Pain Points

*   **Token Management Anxiety:** The combination of proposed quota cuts (#3203) and confusing quota counters (#3267) has created significant anxiety among free-tier users regarding the sustainability of their workflows.
*   **Authentication Instability:** A surge in "401 invalid token" errors across different versions (stable vs. nightly) and auth methods (OAuth vs. API Key) is causing major disruption. The inability to switch smoothly from OAuth to API Keys (#1855) exacerbates this.
*   **UI/UX Flicker:** The "terminal scroll jumping" bug (#3144) remains a top annoyance for CLI users, making the tool physically difficult to use during long agent runs.
*   **Tool Output Parsing:** Users relying on alternative models (like GLM-5.1) are frustrated by the agent's inability to correctly parse shell output, leading to "hallucinated empty states" where the agent claims tools failed despite visible output.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*