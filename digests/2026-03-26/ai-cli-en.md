# AI CLI Tools Community Digest 2026-03-26

> Generated: 2026-03-26 00:12 UTC | Tools covered: 7

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

## AI CLI Tools Ecosystem Report: 2026-03-26

### 1. Ecosystem Overview
The AI CLI tool landscape is currently in a volatile "growth and consolidation" phase. While innovation is accelerating—with a strong industry-wide shift toward "Agentic" architectures (background tasks, remote workspaces, and MCP integrations)—maturity is lagging. A striking 80% of the major tools tracked today reported critical regressions in their latest releases, ranging from broken input methods on Linux to memory leaks and orphaned processes. The community is moving beyond simple "chat-in-terminal" functionality, demanding robust enterprise management, cross-platform parity (especially Windows/ARM), and reliable remote control capabilities.

### 2. Activity Comparison

| Tool | Release Status | Issue Activity | PR Activity | Trending Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **v2.1.83** (Active) | **High** (Critical Regressions) | **High** (Plugin Ecosystem) | **Enterprise Policy** & Hook Events |
| **OpenAI Codex** | **v0.117.0-alpha.x** (Rapid Fire) | **High** (Sandbox/Billing) | **High** (Core Refactoring) | **Infrastructure** & Transport Stability |
| **Gemini CLI** | **v0.35.1** (Stable) | **Medium** (Agent Loops) | **Medium** (UX Fixes) | **Remote Workspaces** (GCP) |
| **GitHub Copilot** | **v1.0.12-1** (Patch) | **Low** (Policy/UI Friction) | **None** | **MCP Stability** & IDE Integration |
| **Kimi Code** | **v1.26.0** (Beta Plugins) | **Medium** (File Context) | **High** (Shell Integration) | **Network Resilience** & JSON Parsing |
| **OpenCode** | *No Release* | **Medium** (Memory/DB) | **High** (Effect Refactor) | **Architecture** ("Effectify") |
| **Qwen Code** | **v0.14.0-pre** (Preview) | **Medium** (Process Mgmt) | **High** (ACP/Permissions) | **IDE Stability** & Automation |

### 3. Shared Feature Directions
The community feedback loops reveal three dominant, cross-tool requirements:

*   **Agentic Workflow Automation (The "Background" Shift)**
    *   *Tools:* **Claude Code** (CwdChanged hooks), **OpenCode** (Loop/Ralph fixes), **Qwen Code** (New `/loop` command), **Kimi Code** (Yolo mode).
    *   *Need:* Users want agents that can monitor, react, and execute tasks (e.g., CI/CD loops) in the background without blocking the active terminal session.

*   **Remote Control & "Second Screen" Workflows**
    *   *Tools:* **OpenAI Codex** (Issue #9224), **Claude Code** (WhatsApp plugin), **Qwen Code** (Telegram/WeChat PR).
    *   *Need:* A strong desire to control desktop CLI agents via mobile devices or messaging apps, effectively using the phone as a "second screen" or remote trigger for heavy compute tasks.

*   **IDE & Protocol Standardization (MCP)**
    *   *Tools:* **GitHub Copilot**, **OpenCode**, **OpenAI Codex**.
    *   *Need:* MCP (Model Context Protocol) has become the de-facto standard for extensibility. Communities are universally requesting better MCP stability, auto-discovery, and support for `mcp.json`.

### 4. Differentiation Analysis

*   **Claude Code (The Enterprise Agentic Tool):** Focused on "reactive environments" (hooks for `direnv`) and enterprise policy management (`managed-settings.d`). Its community is the most active in building third-party plugins (WhatsApp, memory monitors).
*   **OpenAI Codex (The Infrastructure Play):** Despite being in "Alpha," it is the only tool undergoing deep architectural refactoring (Transport/App Server layers). However, it suffers from the most severe "sandbox fatigue," with Linux `bwrap` issues rendering it unstable for secure environments.
*   **Gemini CLI (The Cloud-Native Workspace):** Unique focus on remote GCP workspaces and "Plan-to-Execute" model switching (Flash -> Pro). It is positioning itself as a cloud-offload engine rather than just a local assistant.
*   **OpenCode (The Architect's Choice):** Distinct for its "Effectify" refactoring (using Functional Reactive programming patterns). It appeals to technical users prioritizing architectural correctness and local model support (LM Studio) over ease of use.
*   **Kimi Code & Qwen Code (The UI/UX Iterators):** These tools are actively competing on "CLI comfort" features (e.g., `Shift+Enter` support, Vim navigation) and fixing basic parser strictness (JSON handling), indicating a focus on developer experience refinement.

### 5. Community Momentum & Maturity
*   **Highest Velocity (Raw Activity):** **Claude Code** and **OpenAI Codex**. Both have high issue volume, high PR churn, and rapid release cadence.
*   **Highest Stability (Lowest Friction):** **GitHub Copilot CLI**. While less feature-rich, it has the lowest number of "critical" bugs reported today. However, its lack of PR activity suggests a slower iteration cycle compared to the "Alpha/Beta" tools.
*   **Maturity Warning:** **OpenAI Codex** and **OpenCode**. Despite being powerful, both are reporting "fundamentally broken" sub-systems (Sandbox on Linux, Database Corruption on NFS) that suggest they are not yet production-ready for critical workflows.

### 6. Trend Signals
*   **The "Yolo" Anxiety:** As tools become more autonomous (auto-executing scripts), users are reporting "safety scares" (e.g., Gemini CLI deleting project files). There is a signaled market need for **"Undo" capabilities** and **Dry-Run modes** for autonomous agents.
*   **Windows is First-Class No Longer:** Historically CLI tools were POSIX-first. Today, specific Windows issues (ARM64 failures, ACL corruption, Gatekeeper friction) represent a significant portion (~30%) of critical bugs.
*   **Token Economy Anxiety:** Users across **OpenAI Codex** and **Claude Code** are hyper-aware of token consumption, complaining about inefficient backend models that burn quotas without results. This suggests a market opportunity for "Token-Efficient" AI modes.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Period:** 2025-10-17 to 2026-03-26 | **Repository:** anthropics/skills

## 1. Top Skills Ranking
Based on the repository's "Popular Pull Requests" (sorted by comments), the following submissions represent the community's most active areas of development and discussion.

### 🔥 Most Active Discussions

**1. document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514))
*   **Status:** Open (Created: 2026-03-04)
*   **Functionality:** Implements quality control for AI-generated documents to prevent "orphans" (words spilling to new lines), "widows" (stranded headers), and numbering misalignment.
*   **Highlights:** Addresses a universal pain point in AI-generated documentation. Currently the top PR by activity volume in the provided dataset.

**2. frontend-design (Improvement)** ([PR #210](https://github.com/anthropics/skills/pull/210))
*   **Status:** Open (Created: 2026-01-05)
*   **Functionality:** Revises the frontend-design skill to ensure every instruction is actionable within a single conversation and improves internal coherence.
*   **Highlights:** Focuses on "steerability" and token efficiency, moving the skill from educational documentation to operational instructions.

**3. skill-quality-analyzer & skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
*   **Status:** Open (Created: 2025-11-06)
*   **Functionality:** Meta-tools for evaluating Skills across five dimensions (Structure, Documentation, Instruction Quality, Robustness, Safety) and analyzing security threats (Prompt Injection, Privilege Escalation).
*   **Highlights:** Essential infrastructure for maintaining the health and safety of the growing skills marketplace.

**4. codebase-inventory-audit** ([PR #147](https://github.com/anthropics/skills/pull/147))
*   **Status:** Open (Created: 2025-12-16)
*   **Functionality:** A systematic 10-step workflow to identify orphaned code, unused files, and documentation gaps, outputting a `CODEBASE-STATUS.md`.
*   **Highlights:** Addresses technical debt and legacy project maintenance, a high-value use case for enterprise users.

**5. session-memory** ([PR #629](https://github.com/anthropics/skills/pull/629))
*   **Status:** Open (Created: 2026-03-13)
*   **Functionality:** Preserves critical technical facts across context compaction and session restarts with zero external dependencies.
*   **Highlights:** Solves the "stateless" nature of Claude Code sessions by persisting key context windows.

## 2. Community Demand Trends
Analysis of high-activity Issues reveals the following critical demands from the user base:

*   **Governance & Security:** There is significant concern regarding trust boundaries. [Issue #492](https://github.com/anthropics/skills/issues/492) highlights a vulnerability where community skills distributed under the `anthropic/` namespace can impersonate official skills. Users are demanding better verification mechanisms.
*   **Enterprise Usability & Reliability:** High-activity issues ([#62](https://github.com/anthropics/skills/issues/62), [#61](https://github.com/anthropics/skills/issues/61), [#406](https://github.com/anthropics/skills/issues/406)) report frequent 404/500 errors when uploading, deleting, or loading skills. The community is requesting API stability and better support for Enterprise SSO users (who lack `ANTHROPIC_API_KEY` for local tooling).
*   **Workflow Automation & State Persistence:** Issues like [#412](https://github.com/anthropics/skills/issues/412) (Agent Governance) and related PRs (#521, #522) indicate a strong trend toward multi-session planning and persistent memory. Users want skills that can handle long-running projects beyond a single context window.
*   **Standardization:** [Issue #202](https://github.com/anthropics/skills/issues/202) calls for an update to `skill-creator` to move from "developer documentation" style to "operational instruction" style, reflecting a maturation of the ecosystem from experimental to production-ready.

## 3. High-Potential Pending Skills
The following PRs are active and may be merged soon, representing cutting-edge additions to the ecosystem:

*   **[plan-task](https://github.com/anthropics/skills/pull/522):** Persists multi-step plans and task progress to `.claude/tasks/` so sessions can be resumed. *Status: Open*
*   **[record-knowledge](https://github.com/anthropics/skills/pull/521):** Allows recording of discovered workarounds/knowledge as Markdown entries for team persistence. *Status: Open*
*   **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181):** Integrates SAP's open-source tabular foundation model for predictive analytics on business data. *Status: Open*
*   **[shodh-memory](https://github.com/anthropics/skills/pull/154):** Implements a persistent memory system that surfaces relevant memories (`proactive_context`) on every user message. *Status: Open*
*   **[management-consulting](https://github.com/anthropics/skills/pull/384):** Adds structured problem-solving and strategic frameworks for business use cases. *Status: Open*

## 4. Skills Ecosystem Insight
The community's most concentrated demand is for **State Persistence and Enterprise Reliability**—users are actively building tools to bridge the gap between stateless AI sessions and long-term project workflows, while simultaneously requesting the stability and security features required for enterprise adoption.

---

# Claude Code Community Digest | 2026-03-26

## Today's Highlights

Release **v2.1.83** introduces significant infrastructure capabilities for enterprise policy management and environment reactivity via drop-in configuration directories and new hook events. However, the release has also introduced several critical regressions affecting Linux (uppercase input), MacOS (voice crashing on M1, CLI piping), and Windows (platform detection), alongside an ongoing failure of the Remote Control feature. The community remains highly active, with developers building new plugins for WhatsApp integration, parallel workspace management, and memory monitoring while continuing to report fundamental dissatisfaction with the permissions system.

## Releases

**v2.1.83**
- **Enterprise Management:** Added `managed-settings.d/` drop-in directory to support merging policy fragments alphabetically, allowing separate teams to deploy independent configurations.
- **Environment Reactivity:** Added `CwdChanged` and `FileChanged` hook events, enabling integration with tools like `direnv` for reactive environment management.
- **Platform Regressions:** Users report this release introduced specific issues: `xterm` uppercase handling on Linux, AVX-related crashes for `/voice` on MacOS M1, and `-p` flag returning empty results.

## Hot Issues

1.  **[#826](https://github.com/anthropics/claude-code/issues/826) - Console scrolling jumps to top of history**
    *   *Status:* Open (Top Trending)
    *   *Why:* The most discussed issue in the tracker (658 thumbs up). The TUI experience degrades significantly when text is added, forcing users to manually scroll back to the cursor. A duplicate issue #33814 was also updated today, indicating the problem persists across versions.
    *   *Reaction:* Extremely high community frustration; 344 comments reflect this as a primary UX blocker.

2.  **[#30519](https://github.com/anthropics/claude-code/issues/30519) - Permissions matching fundamentally broken**
    *   *Status:* Open
    *   *Why:* Users report the permission system has been non-functional since mid-2025. Despite 30+ related issues, there has been minimal staff engagement.
    *   *Reaction:* Community is resorting to writing custom `PreTool` scripts as workarounds. 56 thumbs up indicates this is a critical workflow bottleneck.

3.  **[#38842](https://github.com/anthropics/claude-code/issues/38842) - v2.1.83 breaks uppercase letters in xterm (Linux)**
    *   *Status:* Open (Regression)
    *   *Why:* A critical regression in the latest release preventing Linux users from typing uppercase letters in `xterm`.
    *   *Reaction:* Immediate backlash; users unable to perform standard development tasks without downgrading.

4.  **[#38808](https://github.com/anthropics/claude-code/issues/38808) - /voice crashes on Apple M1 (v2.1.83)**
    *   *Status:* Open (Regression)
    *   *Why:* The latest update triggers a 'CPU lacks AVX support' panic on Apple Silicon, a platform that does not support AVX.
    *   *Reaction:* High impact for MacOS users; `--version` warns, but `/voice` crashes completely.

5.  **[#39053](https://github.com/anthropics/claude-code/issues/39053) - v2.1.83: `-p` flag regression (returns empty)**
    *   *Status:* Closed (but significant)
    *   *Why:* CI/CD pipelines and scripting workflows relying on `claude -p` broke because the tool returned an empty `result` field despite generating tokens.
    *   *Reaction:* Critical for automation; quick closure suggests a fast patch is imminent or already deployed.

6.  **[#39037](https://github.com/anthropics/claude-code/issues/39037) - Remote Control feature fails silently**
    *   *Status:* Open
    *   *Why:* The Remote Control feature, heavily marketed for interactivity, reportedly fails ~90% of the time while still showing "active" status.
    *   *Reaction:* Users question the reliability of networking features in the current release.

7.  **[#2266](https://github.com/anthropics/claude-code/issues/2266) - Terminal Graphics Protocol Support**
    *   *Status:* Open
    *   *Why:* Highly requested enhancement to view charts/diagrams directly in the terminal (Sixel, Kitty, iTerm2).
    *   *Reaction:* 31 thumbs up; strong desire for richer terminal visualization beyond text.

8.  **[#16082](https://github.com/anthropics/claude-code/issues/16082) - Menu Bar Only Mode**
    *   *Status:* Open
    *   *Why:* MacOS users want to run Claude Code purely in the menu bar without a Dock icon to save screen space.
    *   *Reaction:* 62 thumbs up; popular quality-of-life request for MacOS power users.

9.  **[#38092](https://github.com/anthropics/claude-code/issues/38092) - Telegram plugin CPU loop**
    *   *Status:* Open
    *   *Why:* The official Telegram plugin spawns a process that consumes 99% CPU while idle.
    *   *Reaction:* Specific but critical performance warning for plugin users.

10. **[#39045](https://github.com/anthropics/claude-code/issues/39045) - Cowork failures on Windows ARM64**
    *   *Status:* Open
    *   *Why:* Multiple issues (39029, 38396, 39045) highlight that the Cowork VM/service architecture is failing on Windows 11 Pro (ARM64 and x64), often due to filesystem virtualization issues (`luafv`).
    *   *Reaction:* Windows support is described as "fundamentally broken" by some users in this segment.

## Key PR Progress

1.  **[#38105](https://github.com/anthropics/claude-code/pull/38105) - feat: add WhatsApp channel plugin**
    *   Adds a new channel plugin using the Baileys protocol, enabling remote control via WhatsApp Web. This expands the remote control ecosystem beyond Telegram and Discord.
2.  **[#38728](https://github.com/anthropics/claude-code/pull/38728) - Add memory-alert plugin**
    *   Introduces a utility plugin to monitor Claude Code's own RSS memory usage and alert when it exceeds thresholds. Addresses stability concerns for long-running sessions.
3.  **[#38636](https://github.com/anthropics/claude-code/pull/38636) - Add multi-setup plugin for parallel workspaces**
    *   A tool to clone the current repository into a parallel development workspace. Useful for testing changes in isolation without leaving the current session.
4.  **[#23853](https://github.com/anthropics/claude-code/pull/23853) - Fix: Replace deprecated npm install in Dockerfile**
    *   Updates the devcontainer setup to use the native installer script (`curl ... | bash`) rather than the deprecated `npm install -g` method.
5.  **[#38182](https://github.com/anthropics/claude-code/pull/38182) - feat: add session-rename plugin (CLOSED)**
    *   Adds a `/rename` command to manage session titles via `.meta.json` sidecars. Demonstrates community iteration on session management features.
6.  **[#39043](https://github.com/anthropics/claude-code/pull/39043) - Remove "retro-futuristic" recommendation**
    *   Updates the Frontend Design Skill to remove a specific stylistic recommendation.
7.  **[#39041](https://github.com/anthropics/claude-code/pull/39041) - Remove retro futuristic**
    *   Similar to above, cleansing prompt defaults.

## Feature Request Trends

- **Terminal UI Enhancements:** There is a sustained push for better graphical support (Issue #2266) and cosmetic improvements (Menu Bar only mode, #16082).
- **Plugin Extensibility:** The community is actively filling gaps in functionality, specifically in session management (renaming, #38182), memory monitoring (#38728), and communications (WhatsApp, #38105).
- **Context Management:** Users are increasingly requesting visibility into context usage (#38971) and the ability to inherit extended context windows (1M) for subagents (#39047).

## Developer Pain Points

- **Regressions in v2.1.83:** This release is causing significant friction. Developers are facing broken input methods on Linux, crashes on MacOS M1, and empty outputs in CLI pipes. The "Hot Issues" list is dominated by failures introduced in the last 24 hours.
- **Permissions Fatigue:** The permissions system is described as "fundamentally broken" (#30519), with developers expressing exhaustion at having to build custom tooling to bypass or fix permission matching logic.
- **Windows Instability:** The Cowork feature appears virtually unusable on Windows 11 (Pro/ARM64), with deep incompatibilities arising from filesystem virtualization layers (`luafv`) and service initialization failures.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-03-26

## 1. Today's Highlights
The Codex ecosystem is undergoing rapid alpha iterations, with **five new Rust releases** (`v0.117.0-alpha.15` through `19`) pushed in the last 24 hours, suggesting a focus on stabilizing the core client infrastructure. While engineering efforts focus on backend improvements (transport layers, MCP metrics, and keyring storage), community sentiment is increasingly negative due to **widespread reports of aggressive token consumption** and **sandbox regressions** on Linux and Windows.

## 2. Releases
**`rust-v0.117.0-alpha.15` to `rust-v0.117.0-alpha.19`**
Five rapid-fire alpha versions of the Rust crate were released.
*   **Impact:** Users should expect potential instability; these releases likely correlate with ongoing active development in the transport and app-server modules seen in today's PRs.
*   **Download:** [rust-v0.117.0-alpha.19](https://github.com/openai/codex/releases)

## 3. Hot Issues

### **Critical: Rate Limiting & Cost**
1.  **[#14593 Burning tokens very fast](https://github.com/openai/codex/issues/14593)** (👍 86 | Comments: 262)
    *   **Why it matters:** The highest activity thread in the last 24 hours. Users report their quotas are being exhausted at an alarming rate, sparking fears of billing bugs or inefficient backend models.
2.  **[#14762 Paid Usage Still Dropping too Quickly](https://github.com/openai/codex/issues/14762)** (👍 21 | Comments: 20)
    *   **Why it matters:** A specific report of losing 80% of credits ($40 worth) for minimal work. Confirms the trend in #14593.

### **Critical: Sandbox & Security Regressions**
3.  **[#14936 bwrap: Approval prompt shown for almost every command](https://github.com/openai/codex/issues/14936)** (👍 13 | Comments: 25)
    *   **Why it matters:** A recent change (likely `0.115.0`) broke the "remember my choice" functionality for the Linux sandbox, forcing users to approve every single command execution manually.
4.  **[#14919 bwrap: Failed RTM_NEWADDR: Operation not permitted](https://github.com/openai/codex/issues/14919)** (👍 30 | Comments: 15)
    *   **Why it matters:** High-priority regression where the Linux bubblewrap sandbox fails entirely, preventing subagents from executing commands.
5.  **[#15777 Codex sandbox installation corrupts ACL on AppData\Local](https://github.com/openai/codex/issues/15777)** (👍 6 | Comments: 6)
    *   **Why it matters:** A scary Windows bug where installing Codex breaks GPU sandboxing in other browsers (Chrome/Opera) due to permission corruption.

### **High Demand: Authentication & UX**
6.  **[#12764 The codex cli giving: 401 unauthorized](https://github.com/openai/codex/issues/12764)** (👍 4 | Comments: 88)
    *   **Why it matters:** Persistent authentication failures are rendering the CLI unusable for many developers.
7.  **[#10450 Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)** (👍 445 | Comments: 81)
    *   **Why it matters:** The most upvoted open issue. Users are demanding SSH/Remote development support in the Desktop app to match VS Code capabilities.

### **High Demand: Features**
8.  **[#8745 LSP integration (auto-detect + auto-install) for Codex CLI](https://github.com/openai/codex/issues/8745)** (👍 212 | Comments: 42)
    *   **Why it matters:** Users want the CLI to be "IDE-aware" by utilizing Language Servers for better code intelligence.
9.  **[#9224 Codex Remote Control](https://github.com/openai/codex/issues/9224)** (👍 213 | Comments: 25)
    *   **Why it matters:** A popular request to control a desktop CLI agent remotely via a phone interface.
10. **[#15684 Codex stuck on Dark Theme](https://github.com/openai/codex/issues/15684)** (👍 9 | Comments: 12)
    *   **Why it matters:** Recent regression in the VS Code extension where the UI ignores system themes.

## 4. Key PR Progress

### **Core & Architecture**
*   **[#15810 Organize app-server to allow more transports](https://github.com/openai/codex/pull/15810)** (Closed)
    *   Refactored the app-server to consolidate logic for stdio and websocket transports, likely paving the way for new connection methods.
*   **[#15811 Split transport module](https://github.com/openai/codex/pull/15811)**
    *   Breaking up the monolithic `transport.rs` into separate files to improve code maintainability.

### **Security & Auth**
*   **[#15693 Fix old system bubblewrap compatibility](https://github.com/openai/codex/pull/15693)**
    *   **Fix:** Addresses the Linux sandbox crashes (Issue #14919) by handling older system `bwrap` versions that reject the `--argv0` flag.
*   **[#15632 Split JSON storage (keyring-store)](https://github.com/openai/codex/pull/15632)**
    *   **Feature:** Standardizing how credentials are stored securely, unifying logic for MCP OAuth and CLI auth.

### **Telemetry & Observability**
*   **[#15805 Add MCP connector metrics](https://github.com/openai/codex/pull/15805)**
    *   Adds detailed metrics (`tool`, `connector_id`, `duration_ms`) for Model Context Protocol calls, helping debug performance issues in external tools.
*   **[#15804 Queue data / #15591 Turn event](https://github.com/openai/codex/pull/15804)**
    *   Internal telemetry improvements to track out-of-band events and queue states.

### **Features**
*   **[#15561 Add CLI /create-api-key slash command](https://github.com/openai/codex/pull/15561)**
    *   **Feature:** Allows users to generate API keys directly via the CLI using an OAuth flow.
*   **[#15800 Improve custom MCP elicitation](https://github.com/openai/codex/pull/15800)**
    *   **UX Fix:** Adds a "Don't ask again" option for custom MCP tool prompts, preventing constant approval interruptions.

## 5. Feature Request Trends
Based on issue activity, the community is pushing for three specific capabilities:
1.  **"Desktop Parity":** Users are treating the Codex Desktop App as a potential VS Code replacement but are blocked by the lack of **Remote Development (SSH)** support (Issue #10450).
2.  **IDE Intelligence in Terminal:** There is a strong desire for the CLI to hook into **LSP (Language Server Protocol)** to provide context-aware refactoring rather than simple text generation (Issue #8745).
3.  **Cross-Device Control:** Users want to initiate jobs on a powerful desktop machine but control them via mobile devices (Issue #9224).

## 6. Developer Pain Points
*   **Sandbox Fatigue:** Recent updates have broken `bwrap` on Linux and introduced aggressive permission prompting (Issue #14936, #14919). Developers running agents in restricted environments are finding the tool unusable.
*   **Token Economy anxiety:** A significant portion of the user base believes the token counting logic is broken or aggressively throttled (Issue #14593, #14762). The "value per dollar" metric is a primary concern.
*   **Windows Environment Fragility:** Issues with ACL corruption (Issue #15777) and font rendering bugs (Issue #11469) suggest the Windows experience is currently fragile compared to macOS/Linux.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest: 2026-03-26**

**Today's Highlights**
The latest release cycle focuses on stability with `v0.35.1` and a new preview for `v0.36.0-preview.3`. Developer attention is currently divided between addressing critical performance regressions in the agent loop and welcoming the introduction of high-performance remote development workspaces. Community sentiment highlights a need for "agent guardrails" following reports of unintended file deletions.

**Releases**
*   **v0.35.1 & v0.36.0-preview.3**: Two versions were released recently. v0.35.1 addresses stability from the previous version, while v0.36.0-preview.3 includes a specific patch cherry-picked for the release candidate.
    *   [View Release v0.35.1](https://github.com/google-gemini/gemini-cli/compare/v0.35.0...v0.35.1)
    *   [View Release v0.36.0-preview.3](https://github.com/google-gemini/gemini-cli/pull/23723)

**Hot Issues**
1.  [#22141 - Performance Degradation](https://github.com/google-gemini/gemini-cli/issues/22141)
    *   **Impact**: High. Users report the agent hanging for over an hour on trivial tasks.
    *   **Reaction**: 25 thumbs up; widespread frustration with "agent loop + model response delays."
2.  [#23837 - "Yolo Mode" File Deletion](https://github.com/google-gemini/gemini-cli/issues/23837)
    *   **Impact**: Critical safety concern. Agent created a cleanup script that wiped project contents.
    *   **Reaction**: Highlights the dangers of autonomous execution without adequate safeguards.
3.  [#23230 - Plan Mode Model Switching](https://github.com/google-gemini/gemini-cli/issues/23230)
    *   **Impact**: Workflow friction. The model fails to switch from planning (Flash) to execution (Pro) automatically.
    *   **Reaction**: Users have to manually interrupt to force the correct model context.
4.  [#23815 - Cloudtop UI Bug](https://github.com/google-gemini/gemini-cli/issues/23815)
    *   **Impact**: Usability. The `f12` debug toggle fails to render display updates.
    *   **Reaction**: Confusing for developers debugging internal issues.
5.  [#23838 - Model Access for Subscribers](https://github.com/google-gemini/gemini-cli/issues/23838)
    *   **Impact**: Access. Google AI Plus subscribers cannot access "Gemini 3.1 Pro" despite UI claims.
    *   **Reaction**: Confusion over subscription tiers and model availability.
6.  [#22855 - `/plan` Command UX](https://github.com/google-gemini/gemini-cli/issues/22855)
    *   **Impact**: Efficiency. Users want to pass text directly to `/plan` rather than entering a separate mode.
    *   **Reaction**: 2 thumbs up; desire for faster workflows.
7.  [#23571 - Temporary Script Cleanup](https://github.com/google-gemini/gemini-cli/issues/23571)
    *   **Impact**: Workspace hygiene. The model generates excessive temporary scripts in random directories.
    *   **Reaction**: Clutters the workspace and makes clean commits difficult.
8.  [#22745 - AST Investigation](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **Impact**: Technical debt. The team is investigating using Abstract Syntax Trees (AST) for precise code reading to reduce token noise.
    *   **Reaction**: Positive technical direction for improving context understanding.
9.  [#23175 - Duplicate Warnings](https://github.com/google-gemini/gemini-cli/issues/23175)
    *   **Impact**: Noise. Startup warnings (e.g., missing config) are displayed twice.
    *   **Reaction**: Minor annoyance affecting new user experience.
10. [#23839 - Unresponsive Agent](https://github.com/google-gemini/gemini-cli/issues/23839)
    *   **Impact**: Blocking. Complete failure to get a response from the CLI.

**Key PR Progress**
1.  [#22714 - Remote Workspaces (Merged)](https://github.com/google-gemini/gemini-cli/pull/22714)
    *   **Feature**: Introduces high-performance remote development workspaces on GCP, allowing resource-intensive tasks to be offloaded.
2.  [#23692 - Dynamic Linux Sandbox](https://github.com/google-gemini/gemini-cli/pull/23692)
    *   **Feature**: Brings Linux sandbox manager to feature parity with macOS (Seatbelt), adding dynamic path resolution and Git worktree support.
3.  [#23836 - Extension Trackers](https://github.com/google-gemini/gemini-cli/pull/23836)
    *   **Feature**: Allows extensions to contribute their own task tracking directories, paving the way for advanced "SDD" workflows.
4.  [#23693 - UI Height Fixes]((https://github.com/google-gemini/gemini-cli/pull/23693))
    *   **Fix**: Refactors dialogs (like `AskUserDialog`) to take full advantage of available window height, improving visibility in tall terminals.
5.  [#20974 - Compact Tool Output](https://github.com/google-gemini/gemini-cli/pull/20974)
    *   **Feature**: Implements a compact, high-signal rendering mode for tool outputs to reduce visual noise.
6.  [#20289 - Policy Symlink Support](https://github.com/google-gemini/gemini-cli/pull/20289)
    *   **Fix**: Ensures policy files (`*.toml`) discovered via symbolic links are loaded correctly.
7.  [#23818 - ACP Config Isolation](https://github.com/google-gemini/gemini-cli/pull/23818)
    *   **Feature**: Adds separate storage for "Always Allow" settings for different IDEs/clients (ACP), preventing configuration leaks.
8.  [#23751 - Shell Memory Fix](https://github.com/google-gemini/gemini-cli/pull/23751)
    *   **Fix**: Mitigates unbounded buffer growth in shell execution that was causing crashes/memory bloat.
9.  [#23831 - A2A Server Policy Fix](https://github.com/google-gemini/gemini-cli/pull/23831)
    *   **Fix**: Ensures the A2A server correctly executes "ask" policies in interactive mode.
10. [#23785 - Skills Empty State](https://github.com/google-gemini/gemini-cli/pull/23785)
    *   **Fix**: Adds helpful guidance/docs links when a user runs `/skills` with no configured skills.

**Feature Request Trends**
*   **Workflow Automation**: There is a strong push toward "Spec-to-Tracker" bridges (Issues #23802, #23804), indicating a desire to move from manual markdown checklists to dynamic, persistent DAG (Directed Acyclic Graph) based task tracking.
*   **Memory & Context Management**: Multiple requests exist for routing "memory" correctly (global vs. project-specific) (Issue #22819) and improving how the agent reads code using AST (Issue #22745).
*   **UX Refinements**: Users want cleaner inputs, such as passing arguments directly to `/plan` (Issue #22855) and hiding raw technical UUIDs from chat output (Issue #23803).

**Developer Pain Points**
*   **The "Yolo" Danger**: The most alarming pain point is the agent's ability to execute destructive commands (like deleting project directories) without sufficient pause or validation, as seen in Issue #23837.
*   **Latency/Stalling**: Despite being a CLI, users are experiencing severe lag (1+ hours) on simple tasks, often attributed to the "agent loop" getting stuck.
*   **Model Confusion**: Difficulties in getting the CLI to switch models automatically (e.g., staying in Flash mode when Pro is needed) or accessing subscription benefits remain persistent friction points.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-26

**Today’s Highlights**
GitHub Copilot CLI received a minor update today (**v1.0.12-1**), focusing on integration fixes for VS Code terminals and PowerShell environments. The community is currently focused on resolving persistent MCP (Model Context Protocol) connectivity issues and navigating recent enterprise policy changes that appear to be disabling third-party servers for some organizations.

## 1. Releases
**v1.0.12-1** (Mar 26, 2026)
*   **Fixed:** OSC 8 hyperlinks are now correctly clickable in VS Code terminals.
*   **Fixed:** PowerShell arguments (e.g., `/all`, `/enum-devices`) are no longer mistakenly parsed as file paths.
*   **Improved:** Status line payloads now include the `session_name` field for better session tracking.

*See previous release (v1.0.12-0) for UI enhancements including the full-screen model picker.*

## 2. Hot Issues
Here are the top 10 issues driving community discussion today:

1.  **[MCP Servers Blocked by Org Policy](https://github.com/github/copilot-cli/issues/2236)** (👍 17)
    *   *Impact:* Users report that MCP servers configured via an organizational registry are disappearing, accompanied by a false warning: *"Third-party MCP servers are disabled by your organization."*
    *   *Reaction:* High frustration as this breaks existing workflows that were working previously.

2.  **[Gatekeeper Blocking Updates on macOS](https://github.com/github/copilot-cli/issues/970)** (👍 18)
    *   *Impact:* Every Homebrew update triggers a macOS malware warning, forcing users to manually approve the app in system settings.
    *   *Reaction:* A long-standing request for proper code signing/signing notarization to streamline updates.

3.  **[Support for Gemini 3.1 Pro](https://github.com/github/copilot-cli/issues/1664)** (👍 16)
    *   *Impact:* Feature request to add Google’s latest model to the model picker.
    *   *Reaction:* Strong interest in diversifying model options beyond the default providers.

4.  **[SHIFT+ENTER Executes Prompt](https://github.com/github/copilot-cli/issues/1481)** (👍 10)
    *   *Impact:* The CLI uses `CTRL+ENTER` for line breaks, deviating from the standard `SHIFT+ENTER` used in most chat apps.
    *   *Reaction:* Users are finding this muscle-memory switch "mildly annoying."

5.  **[MCP Not Available Since Update](https://github.com/github/copilot-cli/issues/2176)** (👍 1)
    *   *Impact:* `/mcp show` lists servers as enabled, but the LLM cannot access the tools.
    *   *Reaction:* Adds to the growing concern regarding MCP stability in recent versions.

6.  **[German Keyboard Layout Bug](https://github.com/github/copilot-cli/issues/1999)** (👍 2)
    *   *Impact:* Users cannot type `@` (Alt-Gr + Q), making the CLI unusable for certain inputs.
    *   *Reaction:* Critical accessibility blocker for European users.

7.  **[Excessive OAuth Permissions](https://github.com/github/copilot-cli/issues/953)** (👍 1)
    *   *Impact:* Authentication requests full Read/Write access to all user repos, even when working in a single repository.
    *   *Reaction:* Security-conscious users want granular permissions.

8.  **[Ctrl+C Cancels Operations](https://github.com/github/copilot-cli/issues/1422)** (👍 0)
    *   *Impact:* The UI states "Esc to cancel," yet `Ctrl+C` also triggers cancellation.
    *   *Reaction:* Users report accidentally killing operations because `Ctrl+C` is the standard "break" in terminal emulators, creating a conflict.

9.  **[Transient API Errors & Rate Limits](https://github.com/github/copilot-cli/issues/2101)** (👍 2)
    *   *Impact:* Frequent "transient API errors" that quickly lead to rate limiting, even on paid Pro plans.

10. **[Session Branching](https://github.com/github/copilot-cli/issues/1313)** (👍 5)
    *   *Impact:* Request to "branch" a session to explore a different path without losing the original conversation history.

## 3. Key PR Progress
*No pull requests were updated in the last 24 hours.*

## 4. Feature Request Trends
*   **Configuration Granularity:** Developers want more control over settings, specifically the ability to limit OAuth scopes to specific repositories rather than giving global access.
*   **UI/UX Standardization:** There is a strong push for the CLI to adhere to standard keyboard shortcuts found in other chat interfaces (e.g., `SHIFT+ENTER` for newlines).
*   **Plugin Management:** Users are requesting bulk update commands (`/plugin update all`) and notifications for outdated plugins to streamline maintenance.
*   **Auto-Naming:** Requests for the AI to auto-generate session names based on conversation context rather than requiring manual renaming.

## 5. Developer Pain Points
*   **MCP Instability:** A significant portion of the open issues relates to MCP servers failing to load, being blocked by organization policies, or failing to pass schemas to GPT models.
*   **IDE Integration:** Failures with the `/ide` command ("No active IDE workspaces found") and difficulties with the `--config-dir` silently ignoring agent files are causing friction.
*   **Input Handling:** Bugs preventing basic character input (like `@` on German keyboards) or conflicting with standard terminal signals (Ctrl+C) are blocking core usability for some users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-03-26

## 1. Today's Highlights
The **v1.26.0** release landed today, focusing on stability improvements and marking the new Plugin System as **Beta**. The release addresses critical developer frustrations, including persistent JSON parsing errors with control characters and generation interruptions on unstable networks. Simultaneously, significant Pull Requests are open to optimize shell interactions and file handling in large repositories.

## 2. Releases
**[v1.26.0] (Latest)**
*   **Plugin System:** Marked as Beta.
*   **Bug Fixes:**
    *   Fixed JSON parsing crashes when tool calls contain control characters (e.g., literal newlines in shell commands).
    *   Replaced deprecated `acp.TerminalHandle` with Client terminal methods.
    *   Auto-resolve logic for `yolo/` mode improved.
*   *View full changes:* [github.com/MoonshotAI/kimi-cli/pull/1558](https://github.com/MoonshotAI/kimi-cli/pull/1558)

## 3. Hot Issues
1.  **File Mentions Broken in Large Repos** [#1375](https://github.com/MoonshotAI/kimi-cli/issues/1375)
    *   **Impact:** High. Users report the `@` file mention feature fails to locate files, specifically since v1.18.0.
    *   **Community:** Needs a fix for reliable file context injection.

2.  **Keyboard Shortcuts & UX Friction** [#1585](https://github.com/MoonshotAI/kimi-cli/issues/1585), [#1574](https://github.com/MoonshotAI/kimi-cli/issues/1574)
    *   **Impact:** Medium-High. Multiple requests to support `Shift+Enter` for newlines instead of the current defaults (`Ctrl-J`/`Alt-Enter`). Users migrating from other IDEs find the current binding unintuitive.
    *   **Community:** Strong desire for customizable keybindings.

3.  **Plugin System Compatibility** [#1566](https://github.com/MoonshotAI/kimi-cli/issues/1566)
    *   **Impact:** Medium. With the new plugin system in Beta, users are asking if it supports competitors' plugins (Claude Code, Open Code) and how to install them.
    *   **Community:** Seeking documentation and interoperability standards.

4.  **Web-to-CLI Message Sync** [#1569](https://github.com/MoonshotAI/kimi-cli/issues/1569)
    *   **Impact:** Medium. Requests that queued messages from the Web UI be immediately sent to the CLI queue to prevent data loss on refresh or disconnect.
    *   **Community:** Workflow continuity concern.

5.  **Terminal/Shell Freezing** [#1531](https://github.com/MoonshotAI/kimi-cli/issues/1531)
    *   **Impact:** High. Reports of the CLI hanging when the terminal produces output during task execution.
    *   **Community:** Critical stability blocker for local execution.

6.  **Generation Interruptions on Unstable Networks** [#1540](https://github.com/MoonshotAI/kimi-cli/issues/1540) (Closed)
    *   **Impact:** High. Previously, network drops killed the generation session. Now fixed to retry/resume.
    *   **Community:** Appreciation for the retry logic implemented in v1.26.

7.  **Invalid Tools in Web Search** [#1572](https://github.com/MoonshotAI/kimi-cli/issues/1572)
    *   **Impact:** Medium. Error messages citing `kimi_cli.tools.web:SearchWeb` as invalid appearing in v1.25.0.
    *   **Community:** Investigating configuration issues.

8.  **JetBrains Integration Unavailable** [#1334](https://github.com/MoonshotAI/kimi-cli/issues/1334)
    *   **Impact:** Niche. Users reporting the Kimi plugin fails within JetBrains IDEs.
    *   **Community:** IDE-specific support needed.

9.  **Request: Task Queuing vs. Interruption** [#1583](https://github.com/MoonshotAI/kimi-cli/issues/1583)
    *   **Impact:** Medium. Users want the ability to queue new tasks via input while a current task is running (similar to Claude Code), rather than having to interrupt via `Esc`.
    *   **Community:** Requesting better asynchronous workflow management.

10. **Feature Request: Persistent Memory** [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
    *   **Impact:** Strategic. Request for a "Memory System" to maintain context and project patterns across different CLI sessions.
    *   **Community:** Long-term contextual awareness improvement.

## 4. Key PR Progress
1.  **Fix Shell File Mention Performance** [#1588](https://github.com/MoonshotAI/kimi-cli/pull/1588)
    *   **Status:** Open (Draft).
    *   **Detail:** Addresses file discovery failures in large repositories (e.g., 65k+ files) by replacing the walk method with `git ls-files`. Fixes #1375.

2.  **Enhanced Shell Mode Context** [#1587](https://github.com/MoonshotAI/kimi-cli/pull/1587)
    *   **Status:** Open.
    *   **Detail:** Injects shell mode output (`Ctrl+X`) directly into conversation context. Also makes `cd` persistent by syncing real shell state with the session.

3.  **ACP Authentication Overhaul** [#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512)
    *   **Status:** Open.
    *   **Detail:** Complete rewrite of ACP authentication flow to support terminal login and OAuth Device Flow, improving connection robustness.

4.  **Network Retry & Stability** [#1544](https://github.com/MoonshotAI/kimi-cli/pull/1544), [#1577](https://github.com/MoonshotAI/kimi-cli/pull/1577)
    *   **Status:** Merged/Closed.
    *   **Detail:** Implemented retry logic for `httpx.ProtocolError` and HTTP 504 Gateway Timeouts during streaming.

5.  **Strict JSON Parsing Relaxation** [#1580](https://github.com/MoonshotAI/kimi-cli/pull/1580)
    *   **Status:** Merged/Closed.
    *   **Detail:** Switched LLM output parsing to `json.loads(strict=False)` to handle control characters (newlines/tabs) in tool arguments without crashing.

6.  **Background Task Real-time Output** [#1576](https://github.com/MoonshotAI/kimi-cli/pull/1576)
    *   **Status:** Merged/Closed.
    *   **Detail:** Fixed background task output to stream in real-time to `output.log` rather than waiting for completion.

7.  **MCP Debug Cleanup** [#1581](https://github.com/MoonshotAI/kimi-cli/pull/1581)
    *   **Status:** Merged/Closed.
    *   **Detail:** Redirects stderr before loading MCP servers to prevent verbose OAuth/protocol logs from polluting the terminal.

8.  **Google Gemini Compatibility** [#1582](https://github.com/MoonshotAI/kimi-cli/pull/1582)
    *   **Status:** Merged/Closed.
    *   **Detail:** Strips the `id` field from `FunctionCall`/`FunctionResponse` payloads to prevent HTTP 400 errors when using Gemini models.

9.  **Multi-path Skills Support** [#1578](https://github.com/MoonshotAI/kimi-cli/pull/1578)
    *   **Status:** Merged/Closed.
    *   **Detail:** `--skills-dir` now accepts multiple paths (appendable) instead of overriding, allowing for better skill organization.

10. **Web Search Crash Prevention** [#1586](https://github.com/MoonshotAI/kimi-cli/pull/1586)
    *   **Status:** Open.
    *   **Detail:** Adds exception handling for `aiohttp.ClientError` in `SearchWeb` to prevent unhandled crashes during network failures.

## 5. Feature Request Trends
*   **UX Customization:** A clear trend towards making the CLI environment adaptable. Developers are specifically asking for customizable keybindings (shift+enter) and shell behaviors.
*   **Context & Memory:** Users are looking for ways to make the AI "remember" more—both across sessions (Memory System #1283) and within active workflows (Shell context injection #1587).
*   **Workflow Integration:** Requests for better Web-CLI handoff (Queueing #1569) and compatibility with existing tools (JetBrains, Claude/Open Code plugins) are rising.

## 6. Developer Pain Points
*   **Shell/TTY Stability:** The interaction between the CLI's shell tools and the host terminal remains a friction point. Issues range from TTY input competition (#1481) to subprocess hangs (#1579) and freezing on output (#1531).
*   **Network Resilience:** While retry logic was added in v1.26, developers using mobile or unstable connections are still sensitive to any interruption in generation or tool execution.
*   **JSON/Parser Strictness:** A significant amount of recent fixes (#1580, #1378) revolve around the CLI being too strict with LLM outputs, causing crashes on valid-but-unconventional formatting.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-03-26

## 1. Today's Highlights
Development activity is surging around **architectural refactoring**, with a significant push to "effectify" core services (Config, Bus, LSP) using the `Effect` system to improve state management and concurrency handling. On the user-facing side, critical attention is focused on **memory leaks** (WebKit renderer and MCP processes) and **database corruption** issues on NFS filesystems. Additionally, new support for enterprise macOS deployments and mobile touch optimizations indicates a push for broader platform support.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
Here are the top issues sparking discussion and concern in the community:

*   **[Core Bug] SQLite Database Corruption on NFS** [#14970](https://github.com/anomalyco/opencode/issues/14970)
    *   **Impact:** Critical data loss for users with network-mounted home directories.
    *   **Details:** Concurrent sessions in the same repo corrupt the SQLite DB.
*   **[Security] Default Privilege Risks** [#5076](https://github.com/anomalyco/opencode/issues/5076)
    *   **Impact:** High (Security).
    *   **Reaction:** 48 👍. The community is debating whether OpenCode's "allow-by-default" permission model poses a remote control risk.
*   **[Perf] Desktop App Memory Leak** [#19167](https://github.com/anomalyco/opencode/issues/19167)
    *   **Impact:** System stability.
    *   **Details:** The WebKit renderer process is consuming excessive RAM (~7.5GB reported) over time.
*   **[Perf] MCP Process Leaks** [#19168](https://github.com/anomalyco/opencode/issues/19168)
    *   **Impact:** Resource exhaustion.
    *   **Details:** Local MCP servers spawn a new process per session but never terminate them, leading to zombie processes.
*   **[Bug] "Opencode" paths replaced by "Claude"** [#10567](https://github.com/anomalyco/opencode/issues/10567)
    *   **Impact:** Visual confusion/Path handling.
    *   **Details:** A string replacement bug causes directories named "opencode" to display as "Claude" when using Anthropic models.
*   **[Feature] Dark/Light Mode OS Sync** [#480](https://github.com/anomalyco/opencode/issues/480)
    *   **Impact:** UX Quality.
    *   **Reaction:** 6 👍. Long-standing request for the TUI to respect system theme preferences.
*   **[Bug] GitHub Copilot Auth Failures** [#13740](https://github.com/anomalyco/opencode/issues/13740)
    *   **Impact:** Workflow interruption.
    *   **Details:** Users running multiple instances of OpenCode are facing frequent `unauthorized` errors.
*   **[Feature] Vim-style Navigation (TUI)** [#7056](https://github.com/anomalyco/opencode/issues/7056)
    *   **Impact:** Developer ergonomics.
    *   **Reaction:** 13 👍. Request for Ctrl+J/Ctrl+K navigation in the menu bar.
*   **[Bug] BigPickle Usage Exceeded** [#15714](https://github.com/anomalyco/opencode/issues/15714)
    *   **Impact:** Confusion over Zen tier.
    *   **Details:** Users are hitting usage limits unexpectedly; clarity is needed on free vs. paid tiers.
*   **[Feature] Tokens Per Second Display** [#6096](https://github.com/anomalyco/opencode/issues/6096)
    *   **Impact:** Performance monitoring.
    *   **Reaction:** 22 👍. Users want experimental TPS (Tokens Per Second) metrics displayed in the UI.

## 4. Key PR Progress
Significant development work is focused on internal refactoring and platform support:

*   **Refactor: "Effectify" Services (LSP)** [#19150](https://github.com/anomalyco/opencode/pull/19150)
    *   Migrating the LSP service to the `Effect` runtime pattern with `InstanceState` for better lifecycle management.
*   **Refactor: "Effectify" Bus Service** [#18579](https://github.com/anomalyco/opencode/pull/18579)
    *   Moving the internal event bus to `Effect` PubSub, replacing manual subscription maps with unbounded queues.
*   **Refactor: "Effectify" Config Service** [#19139](https://github.com/anomalyco/opencode/pull/19139)
    *   Backing the `Config` service with `InstanceState` to handle per-instance resolution and invalidation.
*   **Fix: Windows E2E Stability** [#19163](https://github.com/anomalyco/opencode/pull/19163)
    *   Addresses flaky tests on Windows by fixing `CrossSpawnSpawner` and session race guards.
*   **Feat: Dynamic Model Discovery** [#17670](https://github.com/anomalyco/opencode/pull/17670)
    *   Adds support for dynamically populating model lists for local providers (LM Studio, llama.cpp) via the `/models` API.
*   **Feat: macOS Managed Preferences** [#19178](https://github.com/anomalyco/opencode/pull/19178)
    *   Adds enterprise support for reading macOS managed preferences deployed via MDM (Jamf, Kandji, etc.).
*   **Feat: Mobile Touch Optimization** [#18767](https://github.com/anomalyco/opencode/pull/18767)
    *   Optimizes the web app for mobile/touch devices while preserving desktop layouts.
*   **Fix: MCP Lifecycle & Reconnection** [#19042](https://github.com/anomalyco/opencode/pull/19042)
    *   Fixes MCP servers disappearing after transient errors by implementing a background reconnection fiber.
*   **Fix: Session Title Generation** [#19177](https://github.com/anomalyco/opencode/pull/19177)
    *   Ensures sessions fallback to a timestamp-based title if the AI-generated title fails.
*   **Feat: Support `mcp.json`** [#19180](https://github.com/anomalyco/opencode/pull/19180)
    *   Adds support for the standard `mcp.json` configuration file used by Cursor/Claude.

## 5. Feature Request Trends
Based on community activity, the most requested feature directions are:

1.  **UX & Polish:** Strong demand for **OS theme syncing** (Dark/Light mode) in the TUI and better visual indicators for performance (TPS).
2.  **Platform Reach:** Users are eager for **mobile/tablet optimization** and better integration with **local model providers** (LM Studio, Ollama).
3.  **Developer Ergonomics:** Frequent requests for **Vim-style navigation** within the TUI and better filtering capabilities for session lists.

## 6. Developer Pain Points
Recurring frustrations reported by the community include:

*   **Resource Management:** Significant complaints regarding **memory leaks** in the desktop client (WebKit) and zombie processes from MCP servers.
*   **Concurrency Stability:** Issues with **SQLite database corruption** when multiple sessions access the same repository (especially on NFS) are causing data anxiety.
*   **Model Compatibility:** Ongoing issues with provider-specific bugs, particularly regarding **Gemini/Vertex AI** tool schemas and GitHub Copilot authentication handling when multiple instances are running.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-03-26

## 1. Today's Highlights
The Qwen Code project has released **v0.14.0-preview.0**, signaling the start of the next development cycle. Current engineering efforts are heavily focused on **IDE stability**, specifically targeting a critical bug where closing the VSCode chat tab fails to terminate the underlying Agent Client Protocol (ACP) child process, leaving orphaned instances running in the background.

## 2. Latest Releases
**v0.14.0-preview.0**
*   **Status**: Released.
*   **Key Changes**: Full changelog available [here](https://github.com/QwenLM/qwen-code/compare/v0.13.0...v0.14.0-preview.0).
*   **Nightly (v0.13.0-nightly)**: Added support for non-GitHub git URLs in extension installation ([PR #2539](https://github.com/QwenLM/qwen-code/pull/2539)).

## 3. Hot Issues
1.  **[#2640](https://github.com/QwenLM/qwen-code/issues/2640) [Bug] Permission Prompts Re-Prompting**
    *   **Impact**: High annoyance factor. Users selecting "Always allow in this project" are being asked repeatedly for permission within the same session.
    *   **Reaction**: 7 👍; indicates this breaks workflow continuity significantly.
2.  **[#2626](https://github.com/QwenLM/qwen-code/issues/2626) [Bug] Linux CLI Crashes on Permission Request**
    *   **Impact**: Critical stability issue on Ubuntu Server. The CLI terminates immediately when prompting for shell command execution in v0.13.0.
3.  **[#2621](https://github.com/QwenLM/qwen-code/issues/2621) [Bug] Context Not Clearing on New Session**
    *   **Impact**: Resource management. Starting a "New Session" in the VSCode plugin does not clear context usage, leading to hit token limits unnecessarily.
4.  **[#2669](https://github.com/QwenLM/qwen-code/issues/2669) [Bug] Windows 11 Permission Persistence Failure**
    *   **Impact**: "Always allow" options do not persist on Windows 11 CMD, requiring constant re-approval.
5.  **[#2657](https://github.com/QwenLM/qwen-code/issues/2657) [Bug] Ralph Loop Persists Across Sessions**
    *   **Impact**: Background automation loops started in one session continue running even after opening a new session.
6.  **[#2665](https://github.com/QwenLM/qwen-code/issues/2665) [Bug] Orphan ACP Processes in VSCode**
    *   **Impact**: Closing the chat tab leaves the ACP process running, consuming system resources indefinitely.
7.  **[#2530](https://github.com/QwenLM/qwen-code/issues/2530) [Bug] API Stream Ends Empty / Tool Calling Issues**
    *   **Impact**: Functional breakdown with non-standard APIs (e.g., OpenRouter). The tool reports success (file created) but performs no action.
8.  **[#2605](https://github.com/QwenLM/qwen-code/issues/2605) [Feature] Clipboard Image Paste (Windows CLI)**
    *   **Impact**: UX request to allow pasting images directly from the clipboard in `cmd.exe`.
9.  **[#2561](https://github.com/QwenLM/qwen-code/issues/2561) [Feature] Vim Mode Navigation**
    *   **Impact**: Accessibility for Vim users who want `Ctrl+n`/`Ctrl+p` support for autocomplete menus.
10. **[#2658](https://github.com/QwenLM/qwen-code/issues/2658) [Bug] `/insight` Command Crashing**
    *   **Impact**: The `/insight` command is failing with "Cannot convert undefined or null to object".

## 4. Key PR Progress
1.  **[#2643](https://github.com/QwenLM/qwen-code/pull/2643) feat(cli): add /loop command**
    *   **Status**: Open (Target: 0.15.0).
    *   **Detail**: Introduces a `/loop` slash command for periodic task execution (e.g., monitoring CI pipelines). Adds a `LoopManager` for state management.
2.  **[#2662](https://github.com/QwenLM/qwen-code/pull/2662) fix: prevent orphan ACP processes**
    *   **Status**: Open.
    *   **Detail**: Addresses the critical issue of orphaned child processes when the IDE disconnects or tabs are closed. Includes cleanup for MCP subprocesses.
3.  **[#2670](https://github.com/QwenLM/qwen-code/pull/2670) Fix permission persistence (Windows)**
    *   **Status**: Open.
    *   **Detail**: Fixes a bug where case-sensitive path comparisons on Windows prevented "Always allow" rules from saving correctly.
4.  **[#2656](https://github.com/QwenLM/qwen-code/pull/2656) fix: resolve /clear and ESC lag**
    *   **Status**: Open.
    *   **Detail**: Optimizes the hooks system to remove blocking `await` calls, fixing performance lag when stopping generation or clearing the screen.
5.  **[#2659](https://github.com/QwenLM/qwen-code/pull/2659) fix: improve /compress for tool-heavy chats**
    *   **Status**: Open.
    *   **Detail**: Fixes the `/compress` command failing near context limits. The new algorithm respects tool call boundaries for better split points.
6.  **[#2628](https://github.com/QwenLM/qwen-code/pull/2628) feat(channels): Telegram and WeChat support**
    *   **Status**: Open.
    *   **Detail**: Adds a "Channels" feature allowing Qwen Code to interact via messaging platforms (Telegram/WeChat) using ACP.
7.  **[#2668](https://github.com/QwenLM/qwen-code/pull/2668) feat(auth): Alibaba Cloud Standard API Key**
    *   **Status**: Open.
    *   **Detail**: Adds a dedicated setup flow for Alibaba Cloud Model Studio API keys within the `/auth` command, supporting region selection.
8.  **[#2666](https://github.com/QwenLM/qwen-code/pull/2666) feat(vscode): ACP auto-reconnect**
    *   **Status**: Open.
    *   **Detail**: Implements robust retry logic and exponential backoff for the VSCode ACP connection to handle transient network failures.
9.  **[#2525](https://github.com/QwenLM/qwen-code/pull/2525) feat(cli, webui): follow-up suggestions**
    *   **Status**: Open.
    *   **Detail**: Adds "Claude-style" next-step suggestions (e.g., "commit this", "run tests") after task completion.
10. **[#2637](https://github.com/QwenLM/qwen-code/pull/2637) feat: human-readable permission labels**
    *   **Status**: Open (Target: 0.13.1).
    *   **Detail**: Improves UX by replacing raw permission syntax (e.g., `Read(/path/**)`) with human-readable text in confirmation dialogs.

## 5. Feature Request Trends
*   **External Platform Integrations**: Strong demand for **Alibaba Cloud Yunxiao (Codeup)** CI/CD templates ([#2649](https://github.com/QwenLM/qwen-code/issues/2649)) to match existing GitHub Actions support.
*   **Workflow Automation**: Users are requesting features for **periodic execution** (see `/loop` command) and better **Web Research** tools (auto-exposing MCP search tools) ([#2672](https://github.com/QwenLM/qwen-code/issues/2672)).
*   **Input Flexibility**: Continued requests for **Clipboard Image Support** on Windows CLI ([#2605](https://github.com/QwenLM/qwen-code/issues/2605)) and **Vim-mode** friendly keybindings ([#2561](https://github.com/QwenLM/qwen-code/issues/2561)).

## 6. Developer Pain Points
*   **Process Management (The "Zombie Process" Issue)**: A significant cluster of bugs involves processes not terminating when they should. Whether it's the **Agent Client Protocol (ACP)** leaving orphans in VSCode ([#2665](https://github.com/QwenLM/qwen-code/issues/2665)) or **Loops** persisting across sessions ([#2657](https://github.com/QwenLM/qwen-code/issues/2657)), resource leaks are a top concern.
*   **Permission System Fatigue**: The permission prompting system is currently overly aggressive. Users report that **"Always Allow" rules are ignored** ([#2640](https://github.com/QwenLM/qwen-code/issues/2640), [#2669](https://github.com/QwenLM/qwen-code/issues/2669)) and that the prompts break flow, requiring constant re-authentication for the same tasks.
*   **Context Window & Compression**: Managing long sessions remains difficult. Users are facing issues where **manual compression fails** near limits ([#2647](https://github.com/QwenLM/qwen-code/issues/2647)) and context doesn't clear on "New Session" ([#2621](https://github.com/QwenLM/qwen-code/issues/2621)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*