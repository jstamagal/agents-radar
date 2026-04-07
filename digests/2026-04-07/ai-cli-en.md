# AI CLI Tools Community Digest 2026-04-07

> Generated: 2026-04-07 00:13 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem Report: April 7, 2026

## 1. Ecosystem Overview
The AI CLI landscape is undergoing a phase of consolidation and refinement, shifting from rapid capability expansion to platform stability and integration depth. The community focus has pivotally turned toward **UX friction**—specifically terminal responsiveness, scrollback management, and multi-agent visual stability—suggesting that raw model power is no longer sufficient for developer retention. There is a clear industry-wide trend toward **Model Context Protocol (MCP) maturity**, with tools racing to fix bugs and enhance features related to external tool integration. Additionally, **cost and token efficiency** have re-emerged as critical differentiation points, as high-tier users express frustration with "burning tokens" due to inefficient background polling and context management.

## 2. Activity Comparison

| Tool | Issue Activity | PR Progress | Release Status | Focus Trend |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **High** (437+ comments on billing/UX regression) | **Medium** (Plugin ecosystem expansion) | **Stable** (No recent release; regression anxiety) | **UX Regression & Session Mgmt** |
| **OpenAI Codex** | **High** (Token waste & Remote Dev requests) | **High** (Internal refactoring & Analytics) | **Active** (Alpha `v0.119.0`) | **Token Efficiency & Architecture** |
| **Charm Crush** | **Medium** (LSP UI regression & Local models) | **High** (Undo/redo & feature parity) | **Active** (`v0.55.1` patch) | **Competitive Parity & Local LLMs** |
| **Gemini CLI** | **Medium** (Freeze/Crash & Policy mgmt) | **High** (Policy engine strictness) | **Active** (`v0.36.0-nightly`) | **Enterprise Policy & Stability** |
| **GitHub Copilot CLI** | **Low** (Most issues closed) | **Low** (No recent PR updates) | **Stable** (`v1.0.19`) | **Observability & Maintenance** |
| **Kimi Code** | **Low** (Theme & Async bugs) | **Medium** (Critical hotfixes) | **Stable** (No new release) | **Usability & Stability** |
| **OpenCode** | **High** (Startup hangs & Data loss) | **High** (Proxy support & Migration fixes) | **Active** (`v1.3.17` patch) | **Platform Stability & Plugins** |
| **Qwen Code** | **Medium** (UI flicker & Parity requests) | **High** (Review & Focus serialization) | **Stable** (Nightly build fail) | **Agent Experience & Parity** |

## 3. Shared Feature Directions

*   **Multi-Agent Workflow Stability (Critical)**
    *   *Affected:* **OpenAI Codex**, **Qwen Code**, **Kimi Code**.
    *   *Specific Needs:* Fixing "input storms" where parallel subagents capture keyboard focus simultaneously (Qwen Code), preventing "stall detection" logic from redoing completed work (OpenAI Codex), and resolving event-loop blocking during background tasks (Kimi Code).
*   **Terminal UX & Scrollback Preservation**
    *   *Affected:* **Claude Code**, **Charm Crush**, **Kimi Code**.
    *   *Specific Needs:* Users strongly object to "alternate screen buffer" implementations that destroy native terminal scrollback history (Claude Code). Additionally, there is a universal demand for better visual stability and fixing "flickering" during parallel execution (Qwen Code).
*   **Cost & Token Optimization**
    *   *Affected:* **OpenAI Codex**, **Kimi Code**, **Claude Code**.
    *   *Specific Needs:* Eliminating "burning tokens" via background polling (OpenAI Codex), implementing "zero-cost" context compression via memory files (Kimi Code), and resolving metering bugs where session limits drain abnormally fast (Claude Code).
*   **Model Context Protocol (MCP) & Tooling Maturity**
    *   *Affected:* **Charm Crush**, **GitHub Copilot CLI**, **OpenCode**, **Qwen Code**.
    *   *Specific Needs:* Auto-detection of local servers (Charm Crush), persistence of enable/disable states (GitHub Copilot), enterprise policy enforcement (Copilot/Gemini), and fixing schema coercion/validation issues (Qwen Code).

## 4. Differentiation Analysis

*   **Claude Code & OpenAI Codex** are currently battling ** growing pains regarding resource management**. Codex is focused on architectural fixes (Rust refactoring) to solve token inefficiency, while Claude Code is facing a "value crisis" where users feel recent updates degrade quality for complex tasks.
*   **Charm Crush** is positioning itself as the **"Open Source Power User"** alternative. It is rapidly iterating on features that competitors lack (like undo/redo support) and prioritizing local model compatibility (Ollama/LM Studio) to appeal to developers wanting offline or private inference.
*   **OpenCode** and **Qwen Code** are targeting **"Agentic Completeness."** OpenCode is focusing on deep integration (proxies, Cloudflare Workers, lifecycle hooks), whereas Qwen Code is aggressively building out "Slash Command" feature parity (e.g., `/plan`, `/review`, `/thinkback`) to match the proprietary giants.
*   **GitHub Copilot CLI** and **Gemini CLI** skew heavily toward **Enterprise & Policy**. Copilot is focusing on stability and observability (telemetry), while Gemini is implementing strict TOML-based policy engines to enforce safe "modes" for corporate environments.

## 5. Community Momentum & Maturity

*   **Highest Tension:** **Claude Code** and **OpenAI Codex**. Both have the highest engagement (comment counts) but also the highest negativity regarding regressions (scrollback, token billing, reasoning quality). This suggests a passionate but currently frustrated user base.
*   **Highest Velocity:** **OpenCode** and **Qwen Code**. These tools are pushing the highest volume of PRs (including complex features like proxy support and subagent serialization), indicating a race to capture market share through feature depth.
*   **Stable & Maturing:** **GitHub Copilot CLI**. The low issue count and closed status of recent tickets suggest it is entering a maintenance phase, focusing on polish rather than radical new features.

## 6. Trend Signals

1.  **The "Agent UI" Problem:** The industry has hit a wall regarding how to display multi-agent workflows in a terminal. Flickering screens, input conflicts, and lost scrollback indicate that the TUI (Terminal User Interface) pattern needs a fundamental redesign to handle concurrent agents effectively.
2.  **"Bring Your Own Model" (BYOM) is Table Stakes:** Support for local models (via Ollama, LM Studio) and the flexibility to switch between providers (OpenRouter, Bedrock) are no longer niche features but expected core functionality.
3.  **Shift from "Auto-Pilot" to "Co-Pilot":** Users are increasingly requesting features like "Undo," manual command injection (`!`), and granular permission control ("YOLO mode"). This indicates a shift toward trusting the AI as an assistant rather than an autonomous agent, with a strong desire for safety nets to prevent data loss.
4.  **Audio & Multimodal Demands:** Feature requests for audio cues (Codex) and clipboard image pasting (Gemini, Kimi) signal that the CLI is evolving into a multimedia, multi-sensory interface, moving beyond text-only interaction.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** April 2026 | **Source:** `anthropics/skills`

---

## 1. Top Skills Ranking (Most Discussed PRs)

Based on community engagement via Pull Requests, the following Skills have generated the most visibility and technical discussion:

1.  **[Add document-typography skill #514](https://github.com/anthropics/skills/pull/514)**
    *   **Functionality:** Enforces typographic quality in AI-generated documents, fixing orphans (single words on new lines), widows (stranded headers), and numbering alignment.
    *   **Status:** Open
    *   **Highlights:** Addresses a universal friction point in AI document generation by teaching Claude layout-aware formatting rules.

2.  **[Add ODT skill #486](https://github.com/anthropics/skills/pull/486)**
    *   **Functionality:** Enables creation, parsing, and template filling of `.odt` (OpenDocument Text) files, bridging Claude with LibreOffice/OpenOffice ecosystems.
    *   **Status:** Open
    *   **Highlights:** Significant expansion of document interoperability beyond DOCX/PDF, targeting open-standard office suites.

3.  **[Add codebase-inventory-audit skill #147](https://github.com/anthropics/skills/pull/147)**
    *   **Functionality:** A systematic workflow to identify orphaned code, unused files, and documentation gaps, outputting a `CODEBASE-STATUS.md` report.
    *   **Status:** Open
    *   **Highlights:** Responds to the need for "hygiene" tools in large codebases maintained by AI agents.

4.  **[Add SAP-RPT-1-OSS predictor skill #181](https://github.com/anthropics/skills/pull/181)**
    *   **Functionality:** Integrates SAP’s open-source tabular foundation model for predictive analytics on business data.
    *   **Status:** Open
    *   **Highlights:** Represents a trend toward integrating specialized external AI models (domain-specific tabular data) via Skills.

5.  **[Add quality-playbook skill #659](https://github.com/anthropics/skills/pull/659)**
    *   **Functionality:** Revives traditional Quality Engineering practices (automated quality system generation from requirements) rather than just code-based testing.
    *   **Status:** Open
    *   **Highlights:** A shift from "test generation" to "quality assurance" based on requirements, not just source code.

---

## 2. Community Demand Trends (Issues Analysis)

Analysis of open Issues reveals three primary vectors of demand:

*   **Workflow Automation & OS Integration**
    Users are requesting deeper OS integration. Issues like **[#806 feat: add sensory skill](https://github.com/anthropics/skills/pull/806)** propose using native macOS automation (`osascript`/AppleScript) instead of fragile screenshot-based computer use. This indicates a desire for Skills that provide reliable, permission-tiered system control.

*   **Tooling Reliability & Validation**
    There is strong emphasis on fixing the plumbing of Skills. Issues **[#539](https://github.com/anthropics/skills/pull/539)** and **[#36](https://github.com/anthropics/skills/pull/36)** focus on preventing YAML frontmatter errors and fixing `docx` corruption. This suggests the community is moving from "experimentation" to "production-grade" reliability.

*   **Governance & Security**
    Issue **[#492 Security: Community skills distributed under anthropic/ namespace](https://github.com/anthropics/skills/issues/492)** highlights a critical trust boundary vulnerability. Users are demanding clearer separation between official Anthropic skills and community submissions to prevent namespace impersonation.

---

## 3. High-Potential Pending Skills

These PRs are active and represent likely upcoming additions to the ecosystem:

*   **[feat: add testing-patterns skill #723](https://github.com/anthropics/skills/pull/723)**
    *   *Potential:* High. Standardizes the "Testing Trophy" philosophy and AAA patterns for Claude, moving beyond simple test generation to structural testing wisdom.

*   **[docs: add CONTRIBUTING.md #509](https://github.com/anthropics/skills/pull/509)**
    *   *Potential:* High. Addresses the "Community Health Gap" (Issue #452). This is infrastructure that will likely accelerate future community contributions.

*   **[Add skill-quality-analyzer and skill-security-analyzer #83](https://github.com/anthropics/skills/pull/83)**
    *   *Potential:* High. Meta-skills that validate other skills. As the ecosystem grows, "Skills about Skills" become essential for maintenance.

---

## 4. Skills Ecosystem Insight

The community is pivoting from **generic content generation** to **specialized, tool-agnostic orchestration**, with high demand for skills that ensure reliability (validation), interoperability (ODT/LibreOffice), and system-level governance (security/quality engineering).

---

# Claude Code Community Digest: 2026-04-07

## Today's Highlights
The community is currently focused on significant usability regressions introduced in late March and early April, specifically regarding the new Terminal User Interface (TUI) and perceived degradation in model reasoning quality. Developers are reporting critical issues with session limits draining abnormally fast and a "Critical UX Regression" where the new fullscreen TUI blocks access to terminal scrollback history. Despite these friction points, the ecosystem continues to mature with ongoing security enhancements and expanded plugin support.

## Latest Releases
**No new releases** in the last 24 hours. The community is currently operating on the latest available versions, with several users reporting issues persisting or appearing after updates in late March/early April (post-v2.1.77).

## Hot Issues

### 1. Critical Regression: Max Plan Session Limits Draining Fast
**[#38335](https://github.com/anthropics/claude-code/issues/38335)** (437 comments, 346 👍)
*Impact:* High. Users on the CLI are reporting that Claude Max plan session limits are being exhausted "abnormally fast" since March 23. This suggests a potential billing or metering bug affecting high-tier subscribers.

### 2. Unusable for Complex Engineering Tasks
**[#42796](https://github.com/anthropics/claude-code/issues/42796)** (Closed, 65 comments, 365 👍)
*Impact:* High. Although closed, this issue sparked significant discussion regarding a drop in performance for complex tasks following February updates. Users report the model struggles with multi-file reasoning and maintaining context.

### 3. Cowork VM Service Failure Persists
**[#27801](https://github.com/anthropics/claude-code/issues/27801)** (57 comments, 33 👍)
*Impact:* Medium. Users are unable to start "Claude's workspace" due to a VM service not running. The issue persists across reboots, indicating a deep-seated installation/service configuration problem.

### 4. Broken "Skip Permissions" Workflow
**[#36168](https://github.com/anthropics/claude-code/issues/36168)** (39 comments, 45 👍)
*Impact:* Medium-High. A regression introduced after v2.1.77 has broken the ability to bypass permissions (YOLO mode). This disrupts the workflow of power users who prefer automated approval for trusted tasks.

### 5. Feature: Custom Terminal Themes
**[#1302](https://github.com/anthropics/claude-code/issues/1302)** (29 comments, 122 👍)
*Impact:* Medium. A highly requested feature to allow custom themes beyond the 6 built-in options. Users want better integration with their specific terminal environments (e.g., Rio Terminal).

### 6. SSH Remote Host Support for macOS
**[#26694](https://github.com/anthropics/claude-code/issues/26694)** (13 comments, 37 👍)
*Impact:* Medium. Currently, SSH remote sessions only support Linux hosts. Developers are requesting support for macOS (darwin) as a remote host, which is blocked by the platform check.

### 7. Critical UX Regression: No Scrollback in TUI
**[#42670](https://github.com/anthropics/claude-code/issues/42670)** (4 comments, 9 👍)
*Impact:* High. Since v2.1.89, the CLI uses an alternate screen buffer that destroys native terminal scrollback. Users cannot review conversation history or logs, a significant change from previous behavior.

### 8. Cloud Scheduled Tasks Cannot Access MCP
**[#43397](https://github.com/anthropics/claude-code/issues/43397)** (8 comments, 6 👍)
*Impact:* Medium. Scheduled tasks running in the cloud fail to load Model Context Protocol (MCP) tools, limiting automation capabilities for cloud-hosted workflows.

### 9. Model Ignores Constraints on Context Resume
**[#41148](https://github.com/anthropics/claude-code/issues/41148)** (6 comments)
*Impact:* Medium-High. When resuming from a compressed context, the model appears to ignore "review-before-acting" constraints, executing file writes without user confirmation. This poses a safety risk.

### 10. Windows Cowork Share Fails (Plan9)
**[#44436](https://github.com/anthropics/claude-code/issues/44436)** (2 comments)
*Impact:* Niche (Windows users). Cowork functionality fails on Windows (Microsoft Store install) with a Plan9 share error (`HRESULT 0x80070005`).

## Key PR Progress

### 1. 14 Revolutionary Claude Code Plugins
**[#41661](https://github.com/anthropics/claude-code/pull/41661)** (Closed)
*Status:* A massive contribution proposing 14 new plugins covering security, performance, and fullstack automation. While currently closed (possibly pending review or format changes), it highlights strong community interest in expanding the plugin ecosystem.

### 2. Java Security Patterns
**[#44159](https://github.com/anthropics/claude-code/pull/44159)** (Open)
*Status:* Enhances the `security-guidance` plugin by adding 5 Java-specific security rules (SQL Injection, XXE, Deserialization, JNDI, Command Injection).

### 3. DevContainer Support for Linux/macOS
**[#41938](https://github.com/anthropics/claude-code/pull/41938)** (Open)
*Status:* Adds a Bash script to launch DevContainers on Unix-like systems, addressing the previous Windows-only limitation.

### 4. Fix: YAML Block Scalars for Agents
**[#44055](https://github.com/anthropics/claude-code/pull/44055)** (Open)
*Status:* Fixes a parsing error in the `pr-review-toolkit` where agent descriptions contained invalid YAML characters (colons), preventing agent loading.

### 5. Fix: Respect DAYS_BACK in Scripts
**[#44393](https://github.com/anthropics/claude-code/pull/44393)** (Open)
*Status:* A maintenance fix ensuring internal scripts correctly process the `DAYS_BACK` environment variable for issue filtering.

### 6. Open Source Claude Code (Movement)
**[#41447](https://github.com/anthropics/claude-code/pull/41447)** (Open)
*Status:* A symbolic PR pushing for the full open-sourcing of the Claude Code tooling, referencing several related feature requests.

### 7. ReadMe Capitalization Fix
**[#44071](https://github.com/anthropics/claude-code/pull/44071)** (Open)
*Status:* Minor documentation polish, ensuring "Get Started" follows title case conventions.

### 8. Add Missing Source
**[#41611](https://github.com/anthropics/claude-code/pull/41611)** (Open)
*Status:* Addresses missing source files in the repository.

## Feature Request Trends
Based on the latest activity, the community is prioritizing the following feature directions:
1.  **Platform Flexibility:** Strong demand for macOS SSH remote host support (**[#26694](https://github.com/anthropics/claude-code/issues/26694)**) and better macOS/Linux integration in general.
2.  **UI/UX Customization:** Users want control over their interface, specifically requesting **custom terminal themes** (**[#1302](https://github.com/anthropics/claude-code/issues/1302)**) and visual distinction for user messages in scrollback (**[#34269](https://github.com/anthropics/claude-code/issues/34269)**).
3.  **Workflow & Session Management:** Requests for **unarchiving sessions** (**[#30869](https://github.com/anthropics/claude-code/issues/30869)**) and **multi-account switching** (**[#30031](https://github.com/anthropics/claude-code/issues/30031)**) indicate users are managing complex, multi-context workflows.
4.  **Permission Control:** There is a recurring desire to integrate "YOLO mode" (bypass permissions) into the standard permission cycle shortcuts (**[#15898](https://github.com/anthropics/claude-code/issues/15898)**), reflecting a tension between safety and speed for experienced users.

## Developer Pain Points
*   **UI Regressions:** The shift to an alternate screen buffer in v2.1.89+ has caused significant frustration by **removing scrollback history**, making it difficult to debug or review long sessions (**[#42670](https://github.com/anthropics/claude-code/issues/42670)**).
*   **Perceived Quality Degradation:** A significant portion of the community feels the model's reasoning and execution quality has dropped in recent updates, particularly for complex, multi-step tasks (**[#42796](https://github.com/anthropics/claude-code/issues/42796)**, **[#42361](https://github.com/anthropics/claude-code/issues/42361)**).
*   **Session & Billing Anxiety:** Reports of session limits draining "abnormally fast" are causing concern about value for money and potential metering bugs (**[#38335](https://github.com/anthropics/claude-code/issues/38335)**).
*   **Cowork Stability:** The "Cowork" feature seems brittle, with users facing persistent VM service failures (**[#27801](https://github.com/anthropics/claude-code/issues/27801)**) and Windows-specific file share errors (**[#44436](https://github.com/anthropics/claude-code/issues/44436)**).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-07

## 1. Today's Highlights
The community is increasingly concerned about **token inefficiency** and **context management**, with "burning tokens" during polling loops and context window compaction errors dominating the discussions. Development activity is focused on **refactoring internal Rust configurations**, **enhancing analytics via a new installation ID**, and **improving sub-agent orchestration** to prevent duplicate work. Users also saw a new alpha release (`rust-v0.119.0-alpha.12`) alongside continued reports of stability issues in the Desktop App and Windows environment.

## 2. Releases
- **rust-v0.119.0-alpha.12**
  - *Release Note:* Release 0.119.0-alpha.12
  - [View Release](https://github.com/openai/codex/releases)

## 3. Hot Issues
1. [#14593 - Burning tokens very fast](https://github.com/openai/codex/issues/14593)
   - **Why it matters:** A major friction point for users; background polling is reportedly triggering full API round-trips with conversation history, depleting quotas rapidly.
   - **Reaction:** 450 comments; high urgency (170 👍).

2. [#10450 - Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)
   - **Why it matters:** Top feature request. Users want the Desktop App to support remote development workflows (SSH/Containers) similar to VS Code.
   - **Reaction:** 103 comments; 499 👍.

3. [#10601 - Sandbox setup error on Windows](https://github.com/openai/codex/issues/10601)
   - **Why it matters:** Critical blocker for Windows users trying to use the CLI sandbox features.
   - **Reaction:** 41 comments.

4. [#3962 - Play a sound when Codex finishes a prompt](https://github.com/openai/codex/issues/3962)
   - **Why it matters:** High-demand UX enhancement for developers who multitask while waiting for long-running tasks.
   - **Reaction:** 36 comments; 131 👍.

5. [#13733 - Background process polling wastes tokens](https://github.com/openai/codex/issues/13733)
   - **Why it matters:** Technical deep dive into *why* tokens are wasted; specific concern regarding `write_stdin` polls triggering full history resubmission.
   - **Reaction:** 9 comments.

6. [#14936 - bwrap: Approval prompt shown for almost every command](https://github.com/openai/codex/issues/14936)
   - **Why it matters:** Regression in the Linux sandbox (bwrap) causing excessive approval prompts, breaking the flow for CLI users.
   - **Reaction:** 32 comments.

7. [#16900 - Long-running healthy subagents prematurely treated as stalled](https://github.com/openai/codex/issues/16900)
   - **Why it matters:** New architectural bug where parent agents redo work already completed by healthy subagents, wasting tokens and bloating context.
   - **Reaction:** 3 comments (Newly raised).

8. [#14513 - Codex stops execution mid turn](https://github.com/openai/codex/issues/14513)
   - **Why it matters:** Reliability issue where execution halts unexpectedly and answers unrelated questions.
   - **Reaction:** 7 comments.

9. [#16158 - App almost unresponsive for 5 mins after starting up](https://github.com/openai/codex/issues/16158)
   - **Why it matters:** Performance regression in the Desktop App affecting macOS users immediately after launch.
   - **Reaction:** 10 comments.

10. [#16936 - Worktree creation times out, leaves orphaned trees](https://github.com/openai/codex/issues/16936)
    - **Why it matters:** Developer workflow blocker where the Git integration fails silently, leaving messy filesystem states.
    - **Reaction:** 2 comments (Newly raised).

## 4. Key PR Progress
1. [#16962 - Refactor config types into a separate crate](https://github.com/openai/codex/pull/16962)
   - **Description:** Moves configuration types to a separate crate to manage expanding macro code size. Aims to improve build modularity.

2. [#16949 - Use model metadata for Fast Mode support](https://github.com/openai/codex/pull/16949)
   - **Description:** Decouples "Fast Mode" UI rendering from fixed model slugs by adding `supportsFastMode` to the app-server model list.

3. [#16950 - Preserve accidental /clear recovery via /resume](https://github.com/openai/codex/pull/16950)
   - **Description:** Adds a safety net for users who accidentally run `/clear` or `/new`, allowing them to recover the previous session via `/resume`.

4. [#16912 - Generate an installation_id and pass in responses](https://github.com/openai/codex/pull/16912)
   - **Description:** Implements a stable UUID (`installation_id`) persisted locally and passed in API metadata for better analytics and debugging.

5. [#16960 - Add app-server realtime call creation](https://github.com/openai/codex/pull/16960)
   - **Description:** Adds experimental support for creating WebRTC realtime calls, routing auth through the new backend proxy.

6. [#16953 - Add alarm tool](https://github.com/openai/codex/pull/16953)
   - **Description:** Introduces a cross-client alarm mechanism for `/loop`-style scheduling, allowing prompts to run on a thread after a delay.

7. [#16875 - Support anyOf and enum in JsonSchema](https://github.com/openai/codex/pull/16875)
   - **Description:** Updates the JSON schema support to align with OpenAI's Structured Outputs specification (supporting `anyOf` and `enum`).

8. [#16944 - Expand tool search to custom MCPs](https://github.com/openai/codex/pull/16944)
   - **Description:** Extends the tool search functionality to include custom MCP (Model Context Protocol) tools.

9. [#16937 - Surface remote startup exec approvals](https://github.com/openai/codex/pull/16937)
   - **Description:** Plumbing for remote unified exec approvals, allowing the core approval flow to resolve remote startup permissions before spawning processes.

10. [#16640 - [codex-analytics] feature plumbing and emittance](https://github.com/openai/codex/pull/16640)
    - **Description:** Implements custom core-emitted facts for turn configuration data and ingests events (start, complete, interrupt) for analytics purposes.

## 5. Feature Request Trends
- **Remote Development:** There is a massive, sustained demand for the **Codex Desktop App** to support remote development (SSH, WSL, Dev Containers), as users find the current local-only limitation a regression from VS Code.
- **Audio Cues:** Users consistently request audible notifications (sounds) when long-running tasks complete, helping them manage context switching.
- **Markdown Export:** Requests continue for the ability to easily export or copy TUI conversations as Markdown for documentation purposes.

## 6. Developer Pain Points
- **Token Economy & Context Management:** The most significant pain point today is the **waste of tokens**. Users report that background polling and agent sub-processes are triggering expensive full-history re-evaluations. Coupled with context window "OOM" errors that fail to compact correctly, this is causing frustration and financial cost.
- **Platform Instability (Windows/macOS):** Windows users are facing sandbox errors (`bwrap`) and high memory usage in idle processes, while macOS users are reporting that the Desktop App becomes unresponsive on startup.
- **Sub-Agent Reliability:** Newer multi-agent features are exhibiting "stall" detection logic that is too aggressive, causing parent agents to restart work that sub-agents are still actively performing.

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest | 2026-04-07

## 1. Today's Highlights
The Crush community is currently focused on refining local model compatibility and addressing UI regressions introduced in v0.55.0. A patch release (v0.55.1) was issued to support local LLMs like LM Studio, while maintainers are actively triaging a bug affecting LSP display visibility. Simultaneously, significant development effort is progressing toward feature parity with competitors like Claude Code, specifically regarding session "undo/redo" capabilities and manual command execution.

## 2. Releases
**v0.55.1**
*   **Local Model Compatibility:** Contributor @Kartik33 implemented fixes for local model providers (LM Studio, Ollama). The release addresses issues where `max_tokens = 0` was rejected by local apps and resolves parameter validation errors for custom models.
*   *Release Details:* [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## 3. Hot Issues
*   **[#1300 Add an undo/redo or restore feature](https://github.com/charmbracelet/crush/issues/1300)**
    *   **Why it matters:** Users are demanding parity with "Opencode" and "Claude Code." The request highlights a need for non-destructive workflow management, specifically the ability to revert prompts and restore file states without losing conversation context.
    *   **Reaction:** High interest (4 👍) with 11 comments discussing implementation details.
*   **[#2560 v0.55.0 breaks LSP UI display](https://github.com/charmbracelet/crush/issues/2560)**
    *   **Why it matters:** A critical regression in the latest release prevents the LSP status from displaying correctly, obstructing developers relying on Language Server Protocol features for code intelligence.
    *   **Reaction:** Quickly identified with a proposed fix provided in the issue thread.
*   **[#824 Context limit not respected in requests](https://github.com/charmbracelet/crush/issues/824)**
    *   **Why it matters:** A persistent bug where `context_window` configuration is ignored, leading to API failures and infinite request loops when tokens exceed limits.
    *   **Reaction:** High priority (8 👍); remains open despite recent updates.
*   **[#2567 Feature Request: Support MCP Elicitation capability](https://github.com/charmbracelet/crush/issues/2567)**
    *   **Why it matters:** Requests support for interactive flows within the Model Context Protocol (MCP), allowing agents to request structured user input (e.g., confirming a commit message) during tool execution.
*   **[#1196 Manually run commands like Claude Code's bash mode](https://github.com/charmbracelet/crush/issues/1196)**
    *   **Why it matters:** Users want to inject command output into the context manually (using `!`) rather than letting the agent execute commands, improving control and efficiency.

## 4. Key PR Progress
*   **[#2563 feat: add undo/redo support for session messages](https://github.com/charmbracelet/crush/pull/2563)**
    *   **Changes:** Implements the "undo/redo" logic requested in #1300. It uses a `revert_message_id` marker to hide messages without deleting them (allowing redo) and leverages the existing `history` table for file restoration.
*   **[#2565 fix(ui): subscribe to app.LSPEvent instead of workspace.LSPEvent](https://github.com/charmbracelet/crush/pull/2565)**
    *   **Changes:** Fixes the critical LSP display bug found in v0.55.0 by updating the event subscription path from `workspace.LSPEvent` to `app.LSPEvent`.
*   **[#2554 fix: support local models with unknown max_tokens](https://github.com/charmbracelet/crush/pull/2554)**
    *   **Changes:** Merged fix for local models. Ensures `MaxOutputTokens` is only sent when positive and resolves "Immediate EOF" errors caused by unknown context windows in LM Studio and llama.cpp.
*   **[#2449 fix: Auto-detect Ollama and available models on startup](https://github.com/charmbracelet/crush/pull/2449)**
    *   **Changes:** Enhances UX by automatically registering a running Ollama instance and its models at startup, removing the need for manual provider configuration.
*   **[#2561 feat(tools): view active crush config and logs](https://github.com/charmbracelet/crush/pull/2561)**
    *   **Changes:** Introduces `crush_info` and `crush_logs` tools, allowing the LLM to inspect its own configuration and logs for better self-debugging capabilities.
*   **[#2562 feat(skills): add dialog to command palette](https://github.com/charmbracelet/crush/pull/2562)**
    *   **Changes:** Adds a UI dialog to the command palette for browsing and attaching skills, improving the discoverability of built-in and user-configured capabilities.
*   **[#2568 feat: support Bedrock cross-region inference](https://github.com/charmbracelet/crush/pull/2568)**
    *   **Changes:** Updates AWS Bedrock provider to support cross-region inference model IDs and annotates 1M context window models (Opus/Sonnet 4.6).

## 5. Feature Request Trends
*   **Competitive Parity:** A distinct trend toward matching features in "Claude Code" and "Opencode," specifically around undo mechanisms and manual shell execution control.
*   **Local Model Maturity:** Continued demand for better integration with local providers (Ollama, LM Studio), focusing on auto-detection and robust parameter handling.
*   **MCP Enhancements:** Requests for deeper Model Context Protocol integration, specifically bi-directional communication (elicitation) between the agent and the user.

## 6. Developer Pain Points
*   **Fragile Context Handling:** Developers are frustrated with context limits not being respected (Issue #824), causing crashes and loops.
*   **Regression Anxiety:** The v0.55.0 release breaking LSP display (Issue #2560) highlights a pain point regarding stability in core developer tools.
*   **Lack of Workflow Control:** The volume of requests for "undo" features and manual command execution suggests users feel the current agent-driven workflow is too rigid and lacks safety nets for correcting mistakes.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-07

## 1. Today's Highlights
Today's daily build (`v0.36.0-nightly`) focuses heavily on core stability, introducing **auto-memory configuration** and **terminal serializer optimizations** to address persistent CLI responsiveness issues. In the ecosystem, there is significant activity around **Enterprise Policy Management**, with maintainers pushing to enforce stricter "mode" requirements in TOML configurations to prevent unsafe defaults, while also fixing a critical regression where environment variable allowlists were being ignored.

## 2. Latest Releases
**v0.36.0-nightly.20260406 (Released 2026-04-06)**
*   **Memory Management:** Implemented automatic memory configuration logic to handle resource allocation dynamically.
*   **Terminal Performance:** Optimized the serializer responsible for terminal output to reduce latency.
*   **Code Hygiene:** cleaned up unused error variables in catch blocks.
*   [View Release](https://github.com/google-gemini/gemini-cli/releases)

## 3. Hot Issues
*   **[#16060](https://github.com/google-gemini/gemini-cli/issues/16060) - Freeze/Crash after updating (P1)**
    *   *Impact:* High. Users report complete CLI freezes during long-running chats (10+ mins), requiring force-kill because CTRL+C fails.
    *   *Reaction:* 22 comments, high frustration with stability.

*   **[#21847](https://github.com/google-gemini/gemini-cli/issues/21847) - BeforeModel Hook Override Broken (P1)**
    *   *Impact:* High. Critical automation workflow failure; `llm_request.model` overrides in hooks are currently ignored.
    *   *Reaction:* 15 comments; actively being addressed in PR #24784.

*   **[#23264](https://github.com/google-gemini/gemini-cli/issues/23264) - Flash Preview Quota Blocks Pro Usage**
    *   *Impact:* Medium. A logic error causes `gemini-3-flash-preview` quota limits to incorrectly block requests to `gemini-3.1-pro-preview`, preventing paid users from working.
    *   *Reaction:* Confusing split-brain behavior; users forced to manage CLI quota limits manually.

*   **[#24734](https://github.com/google-gemini/gemini-cli/issues/24734) - 403 PERMISSION_DENIED on Google AI Pro (P1)**
    *   *Impact:* High. New "Google AI Pro" subscribers are successfully authenticating via OAuth but receiving 403 errors when querying.
    *   *Reaction:* 3 comments, 3 upvotes; indicates a recent backend/CLI handshake regression.

*   **[#12446](https://github.com/google-gemini/gemini-cli/issues/12446) - "Auto" Model Fails to Detect Pro**
    *   *Impact:* Medium. CLI ignores "Google AI Pro" subscriptions, defaulting to the basic `auto` model instead of `gemini-2.5-pro`.
    *   *Reaction:* Persistent issue; users expect subscription status to automatically unlock better models.

*   **[#15051](https://github.com/google-gemini/gemini-cli/issues/15051) - Direct Image Paste (Alt+V)**
    *   *Impact:* Feature Request. Users want the ability to paste images directly from the clipboard rather than uploading files manually.
    *   *Reaction:* 9 upvotes; high demand for feature parity with "Codex CLI" and "Claude Code".

*   **[#18302](https://github.com/google-gemini/gemini-cli/issues/18302) - Security Config Override Broken**
    *   *Impact:* Security. Despite explicit allowlist configs, the CLI continues to redact environment variables.
    *   *Reaction:* Fixed in today's PR #24767.

*   **[#24796](https://github.com/google-gemini/gemini-cli/issues/24796) - Leaking ptys on macOS**
    *   *Impact:* System Stability. Users observing hundreds of leaking pseudo-terminals (lsof count ~498) associated with the CLI process.
    *   *Reaction:* Potential resource exhaustion bug.

*   **[#22863](https://github.com/google-gemini/gemini-cli/issues/22863) - Unsafe Object Cloning**
    *   *Impact:* Code Quality. The model frequently generates code using unsafe clones (partial type implementation).
    *   *Reaction:* Addressed by new behavioral evals in PR #24457.

*   **[#20394](https://github.com/google-gemini/gemini-cli/issues/20394) - Image Upload Infinite Loop**
    *   *Impact:* High. Uploading images exposes internal thought chains and triggers infinite loops.
    *   *Reaction:* Highlights fragility in vision/multimodal tooling.

## 4. Key PR Progress
*   **[#24784](https://github.com/google-gemini/gemini-cli/pull/24784) - Fix BeforeModel Hook Propagation**
    *   Completes the fix for Issue #21847. Ensures `llm_request.model` overrides in hooks actually propagate to the API call site.
*   **[#24758](https://github.com/google-gemini/gemini-cli/pull/24758) - Policy Engine: Require 'modes' Field**
    *   **Breaking Change:** Mandates the `modes` field in TOML policy rules to prevent "apply to all" defaults, significantly improving security posture for enterprise environments.
*   **[#24767](https://github.com/google-gemini/gemini-cli/pull/24767) - Fix Environment Variable Redaction**
    *   Fixes a critical bug where `settings.security.environmentVariableRedaction.allowed` was ignored.
*   **[#24489](https://github.com/google-gemini/gemini-cli/pull/24489) - Refactor to Unified `invoke_agent` Tool**
    *   Consolidates specialized subagent tools into a single `invoke_agent` tool and updates the Policy Engine to support virtual tool aliases.
*   **[#24793](https://github.com/google-gemini/gemini-cli/pull/24793) - Selective Topic Expansion**
    *   Enhances history UX by allowing users to toggle individual topic summaries via click, while maintaining global Ctrl+O functionality.
*   **[#24664](https://github.com/google-gemini/gemini-cli/pull/24664) - ACP Host Input Requests**
    *   Adds an opt-in path for ACP (Agent Control Protocol) clients to handle user prompts (`ask_user`) and exit modes autonomously.
*   **[#24457](https://github.com/google-gemini/gemini-cli/pull/24457) - Fix Unsafe Cloning Behavior**
    *   Introduces a behavioral evaluation and prompt improvements to stop the model from generating partial, unsafe object clones.
*   **[#24795](https://github.com/google-gemini/gemini-cli/pull/24795) - Fix Tmux Detection**
    *   Corrects a logic error that caused false compatibility warnings for users running tmux but not using alternate buffer mode.
*   **[#24794](https://github.com/google-gemini/gemini-cli/pull/24794) - Isolate Concurrent Browser Agents**
    *   Fixes a race condition where concurrent `browser_agent` calls shared a singleton manager, causing navigation conflicts.
*   **[#24752](https://github.com/google-gemini/gemini-cli/pull/24752) - ContextManager and Sidecar Architecture**
    *   Introduces a decoupled architecture to fix circular dependency issues in subagent context management.

## 5. Feature Request Trends
*   **Image Handling Usability:** There is a distinct trend toward improving image interactions.
    *   *Requests:* Clipboard pasting (`Alt+V`), fixing infinite loops on upload, and hiding internal thought chains during vision tasks.
*   **Enterprise Policy Granularity:**
    *   *Requests:* Refactoring TOML complexity (Issues #24798, #24769) and enforcing mandatory modes to prevent accidental "allow-all" rules.
*   **Model Subscription Sync:**
    *   *Requests:* CLI should automatically detect and switch to `gemini-2.5-pro` or `3.1-pro` when a "Google AI Pro" subscription is detected, rather than sticking to "auto" (Issue #12446).
*   **Extension Management:**
    *   *Requests:* Bulk enable/disable commands and in-cli linking of extensions (Issue #16037).

## 6. Developer Pain Points
*   **The "Split-Brain" Quota Issue:** Developers are frustrated that running out of quota on the free `flash-preview` model blocks execution on the `pro-preview` model they explicitly selected, despite having available quota there.
*   **Hook Reliability:** Advanced users relying on `BeforeModel` hooks for workflow automation are currently unable to override models, breaking custom scripts.
*   **SSH & TTY Instability:** There are recurring reports of scrambled text and "pty leaking" when running the CLI via SSH or in complex terminal multiplexers (tmux), suggesting low-level I/O handling needs review.
*   **Security Redaction Aggression:** The security defaults are too aggressive; even when users whitelist environment variables in settings, the CLI redacts them, breaking local MCP server configurations.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-07 | **Source:** github.com/github/copilot-cli

---

### 1. Today's Highlights

The Copilot CLI team released **v1.0.19** today, focusing on stability and enterprise-ready features. Key updates include the persistence of `mcp enable` settings across sessions, enhanced OpenTelemetry monitoring for subagent spans, and a critical fix for plugin hook script permissions on macOS. Additionally, the release improves session management by preventing IDE auto-connect conflicts and enriching slash command timelines with specific command names for better context.

---

### 2. Releases

**v1.0.19 & v1.0.19-0 (2026-04-06)**
*   **MCP Configuration:** `/mcp enable` and `/mcp disable` states now persist across sessions.
*   **Observability:** OpenTelemetry monitoring updated; subagent spans use the `INTERNAL` kind, and chat spans now include `github.copilot.time_to_first_chunk` attributes.
*   **Platform Fixes:** Resolved an issue where plugin hook scripts with missing execute permissions would fail to run correctly on macOS.
*   **UX Improvements:** Slash command timeline entries now explicitly display the command name (e.g., "Review", "Plan").

---

### 3. Hot Issues

**Top Community Discussions (Updated < 24h)**

1.  **[#679 Local MCP server detection](https://github.com/github/copilot-cli/issues/679)**
    *   **Issue:** Users reported that locally configured MCP servers stopped being detected starting in version 0.0.359.
    *   **Reaction:** High engagement (18 comments) requesting a status check command to verify server connectivity.
    *   *Status: CLOSED*

2.  **[#566 Auto Update Request](https://github.com/github/copilot-cli/issues/566)**
    *   **Issue:** Users want a built-in auto-updater or a tooltip notification for new versions to avoid manual checks.
    *   **Reaction:** Highly requested (10 👍) to streamline the update workflow.
    *   *Status: CLOSED*

3.  **[#713 Custom Instructions Not Loading](https://github.com/github/copilot-cli/issues/713)**
    *   **Issue:** Despite documentation claiming support, `.github/instructions` and `CLAUDE.md` files were not being automatically included in prompts.
    *   **Reaction:** Significant concern (18 👍) regarding documentation vs. reality parity.
    *   *Status: CLOSED*

4.  **[#599 Enterprise MCP Policy Support](https://github.com/github/copilot-cli/issues/599)**
    *   **Issue:** Enterprise users require enforcement of MCP allowlists and policies before enabling tools.
    *   **Reaction:** Critical for enterprise adoption (6 👍).
    *   *Status: CLOSED*

5.  **[#475 WSL Terminal Setup](https://github.com/github/copilot-cli/issues/475)**
    *   **Issue:** Lack of native support for Windows Subsystem for Linux (WSL) terminal setup.
    *   **Reaction:** Windows users expressed confusion over the omission in a Microsoft product.
    *   *Status: CLOSED*

6.  **[#714 Session History Search](https://github.com/github/copilot-cli/issues/714)**
    *   **Issue:** No built-in method to search past sessions stored in `~/.copilot/session-state/`.
    *   **Reaction:** Strong demand (9 👍) for the ability to resume or search previous workflows.
    *   *Status: CLOSED*

7.  **[#688 Shell Config Sourcing](https://github.com/github/copilot-cli/issues/688)**
    *   **Issue:** The `bash` tool does not respect `BASH_ENV`, `~/.bashrc`, or user aliases.
    *   **Reaction:** Users want safety wrappers and custom functions available during AI execution.
    *   *Status: CLOSED*

8.  **[#547 & #562 Text Readability (Grey on White)](https://github.com/github/copilot-cli/issues/547)**
    *   **Issue:** Light grey text on white backgrounds made the CLI output unreadable on macOS.
    *   **Reaction:** Multiple reports regarding accessibility and contrast.
    *   *Status: CLOSED*

9.  **[#693 Agent Tools Visibility](https://github.com/github/copilot-cli/issues/693)**
    *   **Issue:** When an agent is defined via an MCP server, the underlying MCP tools (e.g., `test-mcp-get-greeting`) were not visible to the agent in newer versions.
    *   **Reaction:** Technical breakdown of agent vs. tool hierarchy.
    *   *Status: CLOSED*

10. **[#844 Per-Request Model Selection](https://github.com/github/copilot-cli/issues/844)**
    *   **Issue:** Users want to run specific requests inside different models (e.g., Opus) without changing the global session model (e.g., Claude 4.5).
    *   **Reaction:** Desire for granular control over model usage.
    *   *Status: OPEN*

---

### 4. Key PR Progress

*No Pull Requests were updated in the last 24 hours.*

---

### 5. Feature Request Trends

Based on the recent issue activity, the community is driving the following feature directions:

*   **Workflow Continuity:** Users are demanding features that preserve state and history, specifically **Auto-Updates** (#566) and **Session History Search** (#714).
*   **Environment & Configuration Integration:** There is a clear trend toward deeper shell integration, specifically supporting **WSL** (#475), sourcing **.bashrc** (#688), and reading **~/.github** user instructions (#670).
*   **Granular Model Control:** Developers are asking for more flexibility in model usage, moving away from global session settings to **per-request model selection** (#844).

---

### 6. Developer Pain Points

*   **Visual Accessibility:** A recurring frustration involved "grey text on white" backgrounds (#547, #562), rendering the tool unusable in specific terminal themes.
*   **Permission Fatigue:** Users reported redundant permission prompts for the same file operations (#528) and confusing logic where XML code in commands was misinterpreted as file paths (#616).
*   **Configuration Fragility:** Several issues stemmed from configuration detection failures, specifically local MCP servers not being found (#679) and custom instruction files being ignored despite documentation claims (#713).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-04-07

## 1. Today's Highlights
The Kimi CLI community is currently debating a proposal to rewrite the entire codebase from Python to TypeScript/Bun, while active development continues on stabilizing the current Python release. Users are reporting critical usability issues regarding terminal theme compatibility and background multi-agent execution stability, prompting maintainers to push rapid fixes for tool message formatting and error handling.

## 2. Releases
**No new releases in the last 24 hours.**

## 3. Hot Issues

*   **[#1691: Incremental session memory / zero-cost context compression](https://github.com/MoonshotAI/kimi-cli/issues/1691)**
    *   **Why it matters:** Addressing the high cost and potential failure of summarizing long contexts. The user proposes building a structured "memory file" in the background during the session to allow for zero-cost compression when limits are reached.
*   **[#781: Windows Terminal paste (Ctrl+V) support for images](https://github.com/MoonshotAI/kimi-cli/issues/781)**
    *   **Why it matters:** High-impact UX friction for Windows users. Since Windows Terminal hijacks `Ctrl+V`, users cannot paste images directly. A suggestion has been made to support `Alt+V` as an alternative.
    *   **Reaction:** 2 👍; indicates a shared pain point for Windows developers.
*   **[#1770: Dark theme mismatch in light terminal environments](https://github.com/MoonshotAI/kimi-cli/issues/1770)**
    *   **Why it matters:** Code readability is critical. The CLI is forcing a dark color scheme even when the host terminal (e.g., GNOME Terminal) uses a light scheme, rendering the output unreadable.
*   **[#1768: Background multi-agent runs causing CLI stalls](https://github.com/MoonshotAI/kimi-cli/issues/1768)**
    *   **Why it matters:** Technical stability report. Multi-agent background tasks are stalling the main event loop, leading to cascading timeouts and unresponsive states.
*   **[#1765: User interruptions on mouse clicks](https://github.com/MoonshotAI/kimi-cli/issues/1765)**
    *   **Why it matters:** A closed bug report (version 1.30.0) highlighting that simply clicking inside the terminal window during execution triggered an "interrupted by user" error. (Closed by author, likely a false alarm).

## 4. Key PR Progress

*   **[#1707: Refactor: Rewrite from Python to Bun + TypeScript + React Ink](https://github.com/MoonshotAI/kimi-cli/pull/1707)**
    *   **Status:** Open
    *   **Description:** A radical proposal arguing that the Python implementation is a "complete failure." The PR offers a full rewrite in TypeScript using Bun and React Ink, claiming ~32k lines of new code and a fully functional terminal-native agent.
*   **[#1771: Fix: Stringify tool message content in Chat Completions](https://github.com/MoonshotAI/kimi-cli/pull/1771)**
    *   **Status:** Open
    *   **Description:** A critical hotfix for the OpenAI API integration. Ensures that tool results are always sent as strings, preventing 400 errors when `ContentPart` arrays were mistakenly passed.
*   **[#1769: Fix: Graceful degradation for MCP server failures](https://github.com/MoonshotAI/kimi-cli/pull/1769)**
    *   **Status:** Open
    *   **Description:** Addresses the "stuck in thinking" state caused by unhandled `MCPRuntimeError` exceptions. This ensures the CLI catches connection errors (e.g., port conflicts) and reports them gracefully to the user.
*   **[#1709: Fix: Align inline highlight offsets with tab-expanded text](https://github.com/MoonshotAI/kimi-cli/pull/1709)**
    *   **Status:** Open
    *   **Description:** A usability fix for the diff viewer to ensure code highlights align correctly when tabs are expanded, preventing visual misalignment in the terminal.

## 5. Feature Request Trends
*   **Cost & Performance Optimization:** Developers are actively seeking ways to reduce token usage and latency, specifically through "zero-cost" context compression mechanisms (#1691).
*   **Platform Integration:** Users are demanding deeper integration with OS-specific terminal behaviors, particularly regarding clipboard handling on Windows (#781).

## 6. Developer Pain Points
*   **UI/UX Inconsistency:** The lack of automatic theme detection (forcing dark mode on light terminals) is a major readability blocker (#1770).
*   **Stability of Async Operations:** There are recurring reports of the event loop blocking during background tasks, leading to provider timeouts and unresponsive interfaces (#1768).
*   **Platform-Specific Bugs:** Input handling issues (like mouse clicks causing false interruptions #1765) continue to affect the user experience.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-07

## 1. Today's Highlights

OpenCode has released **v1.3.17**, focusing on stability improvements for the TUI on Windows and enhanced error reporting for Cloudflare Workers integrations. Concurrent with the release, the community is actively troubleshooting a critical regression in **v1.3.15** that causes startup hangs when plugins are loaded, alongside several high-severity UI bugs affecting session management and model interactions.

## 2. Releases

- **v1.3.17**
  - **TUI:** Restored default kitty keyboard handling on Windows terminals to resolve input issues caused by previous workarounds.
  - **Core:** Enhanced Cloudflare Workers AI integration to prompt for missing account details and display clear errors when required environment variables are missing.
- **v1.3.16**
  - **Core:** Added support for Azure model options across chat and response paths. Exposed session model and mode configurations via ACP. Fixed output token calculation discrepancies when reasoning tokens are reported.

## 3. Hot Issues

- **[#21141](https://github.com/anomalyco/opencode/issues/21141) | [BUG] Plugins cause OpenCode v1.3.15 hang at startup**
  - **Impact:** Critical. Users cannot launch the app with plugins enabled after updating to v1.3.15 (Homebrew).
  - **Reaction:** Confirmed by multiple users; affects the popular `superpowers` plugin.

- **[#21236](https://github.com/anomalyco/opencode/issues/21236) | [CRITICAL] Accidental session deletion via Ctrl+Shift+Backspace**
  - **Impact:** High risk of data loss. A common key chord (near `Ctrl+Backspace`) permanently deletes sessions without confirmation.
  - **Reaction:** Community demands an "undo" feature or confirmation dialog immediately.

- **[#13768](https://github.com/anomalyco/opencode/issues/13768) | [BUG] Opus 4.6 assistant message prefill errors**
  - **Impact:** Frequent workflow interruptions. OpenCode stops with "This model does not support assistant message prefill."
  - **Reaction:** Highly active (52 comments), suggests compatibility issues with Github Copilot/Opus.

- **[#20650](https://github.com/anomalyco/opencode/issues/20650) | [BUG] Kimi k2.5 tool calling failures**
  - **Impact:** Model instability. JSON parsing errors and attempts to call unavailable 'invalid' tools.
  - **Reaction:** Highlights fragility in the tool-calling abstraction layer for newer models.

- **[#21215](https://github.com/anomalyco/opencode/issues/21215) | [BUG] Concurrent sessions crash with SQLITE_BUSY**
  - **Impact:** Breaks automation/CI. Concurrent `opencode run` sessions fail silently.
  - **Reaction:** Critical for users running parallel agents.

- **[#21100](https://github.com/anomalyco/opencode/issues/21100) | [BUG] "e.diffs.map is not a function" in Web UI**
  - **Impact:** Breaks the diff viewer in v1.3.15 web interface.
  - **Reaction:** Indicates a regression in session rendering logic.

- **[#21098](https://github.com/anomalyco/opencode/issues/21098) | [BUG] NPM plugin install fails behind proxy**
  - **Impact:** Enterprise users cannot install plugins due to strict proxy URL validation.
  - **Reaction:** Blocks adoption in restricted network environments.

- **[#21156](https://github.com/anomalyco/opencode/issues/21156) | [BUG] Session lost after update**
  - **Impact:** User data loss. Active line sessions disappeared after updating from v1.3.13 to v1.3.15.
  - **Reaction:** Raises concerns about database migration safety.

- **[#21164](https://github.com/anomalyco/opencode/issues/21164) | [CORE] Qwen 3.6 rate limiting**
  - **Impact:** "Request rate increased too quickly" errors cancel work.
  - **Reaction:** Users request configurable rate limits to avoid upstream bans.

- **[#21249](https://github.com/anomalyco/opencode/issues/21249) | [BUG] Markdown preview breaks with nested code fences**
  - **Impact:** Rendering corruption when AI generates code examples within code blocks.
  - **Reaction:** Affects documentation-heavy workflows.

## 4. Key PR Progress

- **[#21232](https://github.com/anomalyco/opencode/pull/21232) | Fix: Migrate sessions when project ID changes**
  - Addresses the "Session Lost" issue by ensuring sessions persist when a project ID changes (e.g., after `git init`).

- **[#21246](https://github.com/anomalyco/opencode/pull/21246) | Fix: Guard against undefined agents/MCP during bootstrap**
  - Improves TUI stability by preventing crashes during async plugin loading (related to #21141).

- **[#21244](https://github.com/anomalyco/opencode/pull/21244) | Refactor: Store unified patches in file diffs**
  - Optimization for memory/storage. Stores snapshot metadata as unified patches rather than full `before`/`after` content.

- **[#21239](https://github.com/anomalyco/opencode/pull/21239) | Refactor: Add full HTTP proxy support**
  - Overhauls the workspace adaptor interface to support proper HTTP proxying and WebSockets (vital for web app terminals).

- **[#13854](https://github.com/anomalyco/opencode/pull/13854) | Fix: Stop streaming markdown after message completes**
  - TUI rendering fix. Ensures completed messages render final table rows correctly by deriving streaming state from completion time.

- **[#8156](https://github.com/anomalyco/opencode/pull/8156) | Fix: Allow Ctrl+Space to work as leader key**
  - Keybinding fix. Normalizes `Ctrl+Space` (NUL) events to function correctly as the leader key.

- **[#19135](https://github.com/anomalyco/opencode/pull/19135) | Fix: Restore Home/End prompt navigation**
  - Corrects TUI behavior so Home/End keys move the cursor within the prompt input rather than jumping sessions.

- **[#18007](https://github.com/anomalyco/opencode/pull/18007) | Feat: Add session.start lifecycle hook**
  - Adds `startup`, `resume`, and `compact` triggers for plugins, enabling deeper integration into session management.

- **[#21242](https://github.com/anomalyco/opencode/pull/21242) | Fix: Bump OpenRouter AI SDK**
  - Resolves console warnings bleeding into TUI and token reporting issues with OpenRouter/Claude models.

- **[#21243](https://github.com/anomalyco/opencode/pull/21243) | Feat: Add basePath support on web app**
  - Enables hosting the web app on a sub-path (e.g., `domain.com/opencode`) rather than root.

## 5. Feature Request Trends

- **Model Controls:**
  - Requests for GPT-5.4 "Fast Mode" (`/fast`) integration via slash commands ([#16499](https://github.com/anomalyco/opencode/issues/16499)).
  - "LLM Council" support for multi-model voting/consensus ([#4789](https://github.com/anomalyco/opencode/issues/4789)).

- **Observability & Debugging:**
  - Demand for a `/dump-context` command to inspect the exact prompt context sent to providers ([#14674](https://github.com/anomalyco/opencode/issues/14674)).
  - Plugin hooks for pre/post API calls to handle secrets redaction ([#19425](https://github.com/anomalyco/opencode/issues/19425), [#21240](https://github.com/anomalyco/opencode/issues/21240)).

- **UI/UX Workflow:**
  - `/reload` command to refresh config without restarting ([#6719](https://github.com/anomalyco/opencode/issues/6719)).
  - Ability to expand collapsed pasted text `[Pasted ~1 lines]` for editing ([#8501](https://github.com/anomalyco/opencode/issues/8501)).
  - "YOLO mode" (`--dangerously-skip-permissions`) for automated trusted workflows ([#8463](https://github.com/anomalyco/opencode/issues/8463)).

## 6. Developer Pain Points

- **Platform Instability:** The release of v1.3.15 introduced significant friction, specifically on **macOS Desktop** (hanging on launch) and **Windows TUI** (keyboard handling failures). The community is vocal about the need for more rigorous pre-release testing for these platforms.
- **Plugin System Fragility:** Recent changes have broken plugin loading (startup hangs) and npm installations (proxy issues). Developers relying on a stable plugin ecosystem are currently blocked.
- **Session Management Anxiety:** Issues surrounding data loss—whether through accidental key chords (`Ctrl+Shift+Backspace`) or database migration errors (`git init`)—are eroding confidence. Developers require stronger safeguards (confirmations, backups) for session state.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code Community Digest: 2026-04-07

### 1. Today's Highlights
The Qwen Code project is currently in an active development phase without a new stable release today, focusing heavily on refining the agentic user experience and CLI stability. Significant efforts are underway to enhance the `/review` command to compete with industry standards like Copilot and Claude Code, alongside critical fixes for parallel subagent execution that previously caused input conflicts and UI flickering. The community is also actively requesting parity with competitors regarding model availability and UI customization.

### 2. Releases
*No new releases were published in the last 24 hours. A recent nightly build (`v0.14.1-nightly.20260406`) encountered a deployment failure.*

### 3. Hot Issues
*   **Parallel Subagent UI Instability** ([#2928](https://github.com/QwenLM/qwen-code/issues/2928), [#2903](https://github.com/QwenLM/qwen-code/issues/2903))
    *   **Summary:** Users reported severe TUI flickering and screen flashing in JetBrains terminals when the model executes parallel subagents.
    *   **Impact:** High. This affects visual stability and usability during complex multi-agent tasks.
*   **Input Conflicts in Concurrent Confirmations** ([#2929](https://github.com/QwenLM/qwen-code/issues/2929))
    *   **Summary:** When multiple subagents request approval simultaneously, they all capture keyboard focus, causing a single keypress to trigger actions in all prompts.
    *   **Impact:** Critical. This creates a safety risk where users might accidentally approve unintended actions.
*   **Model Version Parity (3.6-plus)** ([#2844](https://github.com/QwenLM/qwen-code/issues/2844))
    *   **Summary:** Users request the update of the coding plan model list to include `3.6-plus`, which is currently stuck on `3.5-plus`.
    *   **Impact:** Medium. Limits access to the latest model capabilities for coding workflows.
*   **Subagent Feature Parity** ([#2409](https://github.com/QwenLM/qwen-code/issues/2409))
    *   **Summary:** A comprehensive request to bring Qwen Code's subagent system to feature parity with Claude Code (currently estimated at ~40-45% parity).
    *   **Impact:** Strategic. Highlights a key area for competitive development.
*   **Default Auto-Expose for MCP Tools** ([#2672](https://github.com/QwenLM/qwen-code/issues/2672))
    *   **Summary:** Users want web research tools (`search_web`, `read_url`) to be exposed by default without manual configuration.
    *   **Impact:** Medium. Improves out-of-the-box productivity for web-related tasks.
*   **Git Status Approval Bypass** ([#2927](https://github.com/QwenLM/qwen-code/issues/2927))
    *   **Summary:** `git status` executes without user approval regardless of the approval mode setting (Default/Auto-Edit).
    *   **Impact:** Low/Medium. A bug that breaks user trust in the permission system, though the command itself is read-only.
*   **Session Renaming UI** ([#2933](https://github.com/QwenLM/qwen-code/issues/2933))
    *   **Summary:** Request for a `/rename` command and `Ctrl+R` shortcut to manage session names.
    *   **Impact:** Low. Quality-of-life improvement for project management.
*   **WeChat Login Interface Error** ([#2882](https://github.com/QwenLM/qwen-code/issues/2882))
    *   **Summary:** Users receive "please upgrade WeChat interface version" errors during login.
    *   **Impact:** Medium. Blocks authentication for a specific segment of users.
*   **Legacy System Support (CentOS 7)** ([#2926](https://github.com/QwenLM/qwen-code/issues/2926))
    *   **Summary:** Installation fails on CentOS 7 due to missing `GLIBC_2.27`.
    *   **Impact:** Low. Highlights compatibility issues with older enterprise Linux distributions.

### 4. Key PR Progress
*   **Enhanced `/review` Command** ([#2932](https://github.com/QwenLM/qwen-code/pull/2932))
    *   Aims to implement deterministic analysis, autofix capabilities, and security hardening to close the gap with Copilot Code Review and Claude Code's `/ultrareview`.
*   **Fix Subagent Focus Serialization** ([#2930](https://github.com/QwenLM/qwen-code/pull/2930))
    *   **Critical Fix:** Addresses the input conflict bug where multiple parallel confirmation prompts received focus simultaneously.
*   **Compact/Verbose Mode Toggle (`Ctrl+O`)** ([#2770](https://github.com/QwenLM/qwen-code/pull/2770))
    *   Introduces a `Ctrl+O` shortcut to toggle between compact (clean) and verbose (detailed) output modes, significantly improving readability during long agent runs.
*   **New `/plan` Command** ([#2921](https://github.com/QwenLM/qwen-code/pull/2921))
    *   Adds a dedicated slash command for Plan Mode, allowing for quicker access to planning workflows and better persistence of plan files.
*   **New `/thinkback` Command** ([#2917](https://github.com/QwenLM/qwen-code/pull/2917))
    *   Uses the LLM to analyze conversation history and generate a structured timeline of decisions and changes, a feature currently lacking in Claude Code.
*   **VSCode ACP Session Hardening** ([#2874](https://github.com/QwenLM/qwen-code/pull/2874), [#2875](https://github.com/QwenLM/qwen-code/pull/2875))
    *   Fixes a bug where the "New Session" button in VSCode reused the old session context. Also adds defensive checks for context-usage displays.
*   **MCP Tool Schema Coercion** ([#2858](https://github.com/QwenLM/qwen-code/pull/2858))
    *   Fixes validation failures for MCP tools using `anyOf`/`oneOf` (e.g., Python's `list[str] | None`) by coercing stringified JSON values back to intended types.
*   **Context Usage API** ([#2916](https://github.com/QwenLM/qwen-code/pull/2916))
    *   Exposes token/context usage data in non-interactive SDK mode, allowing developers to programmatically monitor context window utilization.
*   **Windows Permission Persistence Fix** ([#2670](https://github.com/QwenLM/qwen-code/pull/2670))
    *   Resolves a bug where "Always allow" rules failed to persist on Windows due to case-sensitive path comparisons on a case-insensitive filesystem.
*   **SDK Interrupt Handling** ([#2771](https://github.com/QwenLM/qwen-code/pull/2771))
    *   Implements handling for SDK `canUseTool` interruptions, ensuring that denied tool calls immediately terminate related pending operations.

### 5. Feature Request Trends
*   **Competitive Parity:** Users are actively tracking features in Claude Code and requesting specific gaps to be filled (e.g., Subagent feature depth [#2409](https://github.com/QwenLM/qwen-code/issues/2409)).
*   **UI/UX Refinements:** There is a clear trend toward customizing the interface, with requests for custom status lines [#2923](https://github.com/QwenLM/qwen-code/pull/2923), session renaming [#2933](https://github.com/QwenLM/qwen-code/issues/2933), and better markdown rendering [#2914](https://github.com/QwenLM/qwen-code/pull/2914).
*   **MCP & Tooling:** Ease of use for Model Context Protocol (MCP) servers is a priority, specifically regarding auto-exposure of tools and schema flexibility [#2672](https://github.com/QwenLM/qwen-code/issues/2672).

### 6. Developer Pain Points
*   **Concurrency Instability:** The most significant friction point involves the UI behavior when running parallel agents, specifically flickering screens and "input storms" where one keystroke affects multiple prompts.
*   **Approval Mode Inconsistencies:** Developers are frustrated by inconsistencies in the approval system, such as `git status` bypassing rules or permission settings not saving correctly on Windows.
*   **Model Management:** Confusion and limitations regarding available model versions (e.g., the lack of 3.6-plus in plans) and quota visibility for free tiers.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*