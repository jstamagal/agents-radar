# AI CLI Tools Community Digest 2026-04-14

> Generated: 2026-04-14 00:18 UTC | Tools covered: 8

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

# AI Developer Tools Ecosystem Report: 2026-04-14

## 1. Ecosystem Overview
The AI CLI ecosystem is currently undergoing a critical "stability and orchestration" phase. As these tools move from experimental novelties to core development infrastructure, the community focus has shifted from raw capability to **operational reliability**. Specifically, the ecosystem is grappling with three core challenges: **resource exhaustion** (CPU/RAM overruns and "token burn" billing bugs), **sandbox governance** (balancing agent autonomy with safety), and **interoperability** (standardization via the Model Context Protocol). While feature innovation continues, dominant themes indicate a push toward better session management, cost observability, and seamless multi-agent workflows.

## 2. Activity Comparison

| Tool | Issue Vol. | PR Vol. | Release Cadence | Status Notes |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI Codex** | Very High | High | Alpha (Rapid) | Highly active, but plagued by performance regressions (CPU/WebSockets). |
| **Charm Crush** | Low | Moderate | Steady | Heavy architectural refactoring (JSON hooks, split-pane) in progress. |
| **Gemini CLI** | Moderate | High | Patching (v0.37.2) | Focused on infra stability (offline mode, RipGrep bundling). |
| **GitHub Copilot CLI** | Moderate | None * | Stable (v1.0.25) | New MCP features released, but community concern over billing logic is high. |
| **Kimi Code CLI** | Low | Moderate | Rapid (v1.33.0) | Iterating quickly on UI/UX (thinking traces) and session management. |
| **OpenCode** | **Critical** | Moderate | Stalled | Dominated by critical "compaction loop" bugs and Windows instability. |
| **Qwen Code** | Low | High | Patching (v0.14.4) | Addressing agent stability (loops) and IDE performance. |

*\*No PRs updated in the last 24h for Copilot CLI based on current data.*

## 3. Shared Feature Directions
Across the ecosystem, specific requirements are emerging as de facto standards:

*   **Standardized Orchestration & Hooks:**
    *   **Charm Crush** is implementing a JSON-based lifecycle interceptor pattern.
    *   **Kimi Code** and **OpenCode** are expanding hooks systems (`PreToolUse`, `PostLLM`) for workflow automation.
    *   **Trend:** Users are demanding the ability to programmatically control the CLI, moving away from purely interactive usage towards autonomous agents.

*   **Enhanced Context & Cost Controls:**
    *   **OpenCode** users are demanding configurable context limits to prevent compaction bugs.
    *   **GitHub Copilot CLI** and **OpenAI Codex** users are reporting "token burn" anxiety, requesting real-time usage dashboards.
    *   **Trend:** "Token Economics" is a primary friction point; developers want granular control over *what* is sent to the LLM and *how much* it costs.

*   **Session Management "Time Travel":**
    *   **Qwen Code** and **Kimi Code** users are explicitly requesting conversation history rollback and branching (similar to `git` for chat).
    *   **OpenCode** is struggling to implement basic session compaction without crashing.
    *   **Trend:** Long-running sessions are the norm. Users need robust tools to manage, prune, and revert complex conversation histories.

*   **Multimodal Input (Images):**
    *   **GitHub Copilot CLI** and **OpenAI Codex** users are requesting clipboard image support.
    *   **Charm Crush** is fixing issues with image limits causing session deadlocks.
    *   **Trend:** Visual debugging is becoming essential for CLI workflows.

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Differentiator |
| :--- | :--- | :--- | :--- |
| **OpenAI Codex** | **Ecosystem Dominance** | Enterprise / Generalist | Deepest IDE integration (VS Code), but currently suffering from "bloat" (performance regressions). |
| **Charm Crush** | **Terminal Power User** | CLI Enthusiasts / Indie Devs | Building a "Terminal IDE" (multiplexing, split panes). Prioritizes aesthetic (theming) and performance (Sonic JSON). |
| **Gemini CLI** | **Reliability & Offline** | Corporate / Restricted Env | Focus on air-gapped stability (bundled binaries) and "YOLO mode" for rapid iteration. |
| **GitHub Copilot CLI** | **Workflow Integration** | GitHub Enterprise | Strong integration with MCP and existing Copilot policies, but rigid UI behaviors frustrate power users. |
| **Kimi Code CLI** | **Reasoning Transparency** | Researchers / Backend Devs | Unique focus on "Thinking" traces (Compact vs. Full modes). Strong support for MCP tool output validation. |
| **OpenCode** | **Multi-Model Tinkerer** | Framework Switchers | Highly customizable environment support, but currently hampered by severe architectural bugs (compaction). |
| **Qwen Code** | **Cost Efficiency** | Performance-Conscious Teams | Focus on context sharing (Fork Subagents) and caching to minimize latency and token usage. |

## 5. Community Momentum & Maturity

*   **High Maturity / High Activity (The Heavyweights):**
    *   **OpenAI Codex** and **GitHub Copilot CLI** have the largest user bases, evidenced by high comment counts on billing and access issues. However, momentum is currently **negative** regarding sentiment due to performance and billing bugs.
    *   **OpenCode** has a highly vocal community regarding architectural flaws (compaction loops), suggesting high engagement with the product's limits.

*   **High Innovation / Rapid Iteration:**
    *   **Charm Crush** and **Kimi Code CLI** are releasing updates frequently (weekly/daily). They are addressing feature requests (themes, session management) at a faster pace than the enterprise tools.
    *   **Qwen Code** is actively solving deep technical problems (loop detection, performance profiling) which indicates a maturing codebase.

*   **Stability Focus:**
    *   **Gemini CLI** is in a consolidation phase, bundling dependencies and fixing telemetry. This indicates a move toward a "production-ready" LTS mindset.

## 6. Trend Signals for Developers
Based on the community feedback from 2026-04-14, technical decision-makers should note:

1.  **MCP (Model Context Protocol) is the Win:** The rapid adoption of MCP server installation in **GitHub Copilot CLI** and the proliferation of MCP-related bug fixes in **Kimi Code** and **OpenAI Codex** confirm that MCP is the standard for extending AI tools.
2.  **"Local-First" is a Requirement:** The intense frustration with **OpenAI Codex** (WebSocket drops) and **Gemini CLI** (RipGrep downloads) highlights that reliability is more important than features. Tools that can function offline or without constant cloud handshakes are winning hearts.
3.  **The "Compaction" Crisis:** The severe issues in **OpenCode** regarding context compaction signal a broader industry challenge: **Long-term memory is hard.** Teams building AI agents need to prioritize robust context management strategies early in development, rather than treating it as an afterthought.
4.  **Agent Looping is the #1 Reliability Risk:** Issues in **OpenCode**, **Qwen Code**, and **Charm Code** all point to agents entering infinite retry loops when tools fail. Implementing strict circuit breakers and deterministic loop detection is no longer optional.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-04-14** | **Source:** anthropics/skills repository

---

## 1. Top Skills Ranking
Based on the most active Pull Request discussions and community interest.

### 1. Document Typography (#514)
**Functionality:** Automated quality control for AI-generated documents, preventing "orphans" (single words spilling to new lines), "widows" (stranded headers), and numbering misalignment.
**Highlights:** Addresses a universal friction point in AI-generated content; targets visual polish that users rarely explicitly request but always expect.
**Status:** Open | [PR #514](https://github.com/anthropics/skills/pull/514)

### 2. ODT Skill — OpenDocument Text (#486)
**Functionality:** Creation, template filling, and parsing of `.odt` files (ISO standard LibreOffice/OpenOffice format) to HTML.
**Highlights:** Expands Claude's document export capabilities beyond proprietary formats (DOCX/Markdown) to open standards, critical for enterprise and government interoperability.
**Status:** Open | [PR #486](https://github.com/anthropics/skills/pull/486)

### 3. Skill Quality & Security Analyzers (#83)
**Functionality:** Meta-skills that evaluate other skills across Structure, Documentation, Functionality, Security, and Performance.
**Highlights:** A "linter for skills," this proposal aims to maintain high standards in the community marketplace by providing automated auditing of skill submissions.
**Status:** Open | [PR #83](https://github.com/anthropics/skills/pull/83)

### 4. Codebase Inventory Audit (#147)
**Functionality:** A systematic 10-step workflow to identify orphaned code, unused files, documentation gaps, and infrastructure bloat, outputting a `CODEBASE-STATUS.md`.
**Highlights:** Addresses technical debt management, moving Claude from a code-writing tool to a code-maintaining tool.
**Status:** Open | [PR #147](https://github.com/anthropics/skills/pull/147)

### 5. Document Typography Fixes (#538, #541)
**Functionality:** Critical bug fixes for the PDF and DOCX skills, specifically handling case-sensitivity in file references and ID collisions in tracked changes.
**Highlights:** demonstrates active maintenance of core document handling skills;作者是 Lubrsy706, who has contributed multiple fixes.
**Status:** Open | [PR #538](https://github.com/anthropics/skills/pull/538), [PR #541](https://github.com/anthropics/skills/pull/541)

---

## 2. Community Demand Trends
Derived from the most discussed Issues, indicating where users want Skills to go next.

*   **Workflow Automation & Multi-Tool Orchestration:**
    *   **Issue #228:** High demand for *org-wide skill sharing*. Users want to bypass manual file transfers (Slack/Teams → Settings) and share skills directly via links or a central library.
*   **System Stability & Developer Experience (DX):**
    *   **Issue #202 & #556:** Significant friction exists regarding the `skill-creator` itself. Users want it to function as an operational tool rather than educational documentation. There are also reports of `run_eval.py` failing to trigger skills (0% trigger rate), highlighting a need for better debugging tools.
*   **Cross-Platform & Standards Support:**
    *   **Issue #29 & #189:** Users are actively trying to integrate skills with non-standard environments (AWS Bedrock) and reporting conflicts in plugin distribution (duplicate skills between `document-skills` and `example-skills`).
*   **Security & Trust Boundaries:**
    *   **Issue #492:** Community concern about "namespace squatting"—community skills impersonating official Anthropic skills under the `anthropic/` namespace, creating security risks.

---

## 3. High-Potential Pending Skills
Active PRs that are generating discussion and may merge soon.

*   **[Testing Patterns (#723)](https://github.com/anthropics/skills/pull/723)**
    *   **Potential:** High. Covers the full testing stack (Unit, Component, E2E) and philosophy (Testing Trophy). Fills a major gap in the "AI Engineering" workflow.
*   **[Frontend Design Clarity (#210)](https://github.com/anthropics/skills/pull/210)**
    *   **Potential:** High. Aims to make the `frontend-design` skill more actionable and coherent for Claude in a single conversation context.
*   **[SAP-RPT-1-OSS Predictor (#181)](https://github.com/anthropics/skills/pull/181)**
    *   **Potential:** Niche but Strategic. Brings tabular foundation model capabilities (SAP business data) to Claude Code, marking a trend toward integrating specific external AI models.
*   **[Sensory / macOS Automation (#806)](https://github.com/anthropics/skills/pull/806)**
    *   **Potential:** High. Teaches Claude `osascript` for native macOS automation, bypassing slower/screenshot-based computer use methods.

---

## 4. Skills Ecosystem Insight
The community is moving beyond simple task execution into **system maintenance, standards interoperability, and workflow governance**. There is a strong push to make Claude Code not just a generator of code/content, but a reliable maintainer of complex environments (via audit skills) and a team player (via sharing capabilities).

**Summary Sentence:** The highest community demand is currently centered on **enterprise-grade reliability**—specifically tools for auditing codebases, sharing workflows securely within organizations, and fixing stability issues in core document handling skills.

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-14

## 1. Today's Highlights
Today's digest focuses heavily on critical performance regressions and resource management within the Codex ecosystem. Significant community attention is directed toward high CPU usage and overheating issues in the VS Code extension (`v26.31x`), alongside persistent frustrations regarding WebSocket connectivity and token burn rates. On the development side, the team is actively pushing updates to the Rust core (`v0.121.0-alpha`), focusing on sandbox file system routing, V8 initialization stability, and marketplace management RPCs.

## 2. Releases
**rust-v0.121.0-alpha.6 & v0.121.0-alpha.4**
Two new alpha versions of the Rust core were released today. While specific changelogs were not provided in the release notes, recent Pull Requests associated with this version indicate a focus on patch application routing through the environment filesystem and improvements to remote sandbox execution stability.

## 3. Hot Issues
Here are the top 10 issues drawing significant community engagement:

*   **[#14593 Burning tokens very fast](https://github.com/openai/codex/issues/14593)** (530 comments)
    *   **Impact:** High cost/efficiency concerns.
    *   **Summary:** Users report that recent versions are consuming tokens at an alarming rate, depleting quotas much faster than expected during standard development sessions.
*   **[#10450 Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)** (112 comments)
    *   **Impact:** Workflow limitation.
    *   **Summary:** A highly requested feature for remote development support (SSH/WSL) in the new Desktop App, which is currently lacking compared to the VS Code extension experience.
*   **[#13041 WebSocket upgrade succeeds then server closes with 1008 Policy](https://github.com/openai/codex/issues/13041)** (58 comments)
    *   **Impact:** Connectivity instability.
    *   **Summary:** Reports of WebSocket connections to `chatgpt.com` being immediately terminated by server policy (1008), forcing fallback to slower HTTPS polling.
*   **[#13476 Excessive approval prompts for Playwright MCP](https://github.com/openai/codex/issues/13476)** (27 comments)
    *   **Impact:** Developer friction.
    *   **Summary:** A regression causing an overwhelming number of approval prompts for users utilizing the Playwright Model Context Protocol (MCP).
*   **[#15764 Code Helper exceeds 100% when applying code patch](https://github.com/openai/codex/issues/15764)** (21 comments)
    *   **Impact:** Performance/Blocking.
    *   **Summary:** Critical performance regression in VS Code extension versions > `26.313.41514` where the Code Helper (Renderer) process spikes to 100%+ CPU during code patches.
*   **[#3049 Configurable Hotkeys Support](https://github.com/openai/codex/issues/3049)** (20 comments)
    *   **Impact:** Usability.
    *   **Summary:** Long-standing request to allow customization of hardcoded keybindings (Ctrl+J, Ctrl+H) in the TUI and IDE.
*   **[#15393 High CPU utilization with IDE extension](https://github.com/openai/codex/issues/15393)** (15 comments)
    *   **Impact:** Hardware strain.
    *   **Summary:** Ongoing reports of excessive CPU usage on Linux and macOS running the `openai.chatgpt` VS Code extension.
*   **[#16849 VSCode extension open-in-targets error loop](https://github.com/openai/codex/issues/16849)** (19 comments)
    *   **Impact:** Battery/Performance.
    *   **Summary:** A specific bug in the `open-in-targets` handler throws errors repeatedly, causing high CPU usage due to a 1-minute retry interval.
*   **[#15706 MacBook Air M4 overheating](https://github.com/openai/codex/issues/15706)** (10 comments)
    *   **Impact:** Hardware safety/Comfort.
    *   **Summary:** Users on Apple Silicon (M4) report significant overheating and fan noise specifically when running the VS Code extension.
*   **[#17615 Keep throwing "I'm sorry, but I cannot assist with that request"](https://github.com/openai/codex/issues/17615)** (9 comments)
    *   **Impact:** Blocker.
    *   **Summary:** Users on Azure/API subscriptions are receiving false-positive refusal errors, possibly related to safety checks or rate limits.

## 4. Key PR Progress
*   **[#17674 Route apply_patch through the environment filesystem](https://github.com/openai/codex/pull/17674)**
    *   **Summary:** Refactors the `apply_patch` command to route through the environment filesystem. This aims to fix regression issues where patch application was failing or timing out in sandboxed environments.
*   **[#17709 Initialize ICU data for code mode V8](https://github.com/openai/codex/pull/17709)**
    *   **Summary:** A critical stability fix linking ICU data into code mode. Without this, locale-dependent methods in V8 could cause panics and crashes.
*   **[#17727 Show ChatGPT organization and groups in TUI startup header](https://github.com/openai/codex/pull/17727)**
    *   **Summary:** Adds account metadata (Organization, Groups) to the TUI header, making it easier for users in large teams to know which context they are operating in.
*   **[#17286 Prefix Compaction](https://github.com/openai/codex/pull/17286)**
    *   **Summary:** Implements background prewarming for context compaction. This should reduce UI lag when long-running sessions reach the context window limit.
*   **[#17725 Fix remote apply-patch timeout regression](https://github.com/openai/codex/pull/17725)**
    *   **Summary:** Addresses a specific regression where remote patch applications were timing out by ensuring the `codex-linux-sandbox` helper is correctly discovered.
*   **[#17563 Add PermissionRequest hooks support](https://github.com/openai/codex/pull/17563)**
    *   **Summary:** Introduces a new hook mechanism allowing developers to programmatically allow or deny shell/network approval prompts, enabling more automated workflows.
*   **[#17724 Config for log_macos_seatbelt_denials](https://github.com/openai/codex/pull/17724)**
    *   **Summary:** Adds a feature to log macOS "Seatbelt" sandbox denials, helping developers debug why certain operations (like file access) are failing in the sandbox.
*   **[#17711 & #17718 Add marketplace/add app-server RPC](https://github.com/openai/codex/pull/17711)**
    *   **Summary:** Moves the `marketplace add` functionality to a shared core RPC. This allows the desktop app and CLI to use the same underlying logic for installing plugins.
*   **[#17644 danger-full-access sandbox blocks Metal/GPU IOKit access](https://github.com/openai/codex/issues/17644)**
    *   *Note: Issue highlighted due to critical nature of PR context.*
    *   **Context:** Related to PRs fixing sandbox access. Full-access mode was crashing MLX on macOS because it blocked access to GPU hardware (IOKit).
*   **[#17714 Support original-detail metadata on MCP image outputs](https://github.com/openai/codex/pull/17714)**
    *   **Summary:** Adds support for high-fidelity image inputs via the Model Context Protocol (MCP), ensuring detail settings are respected across the pipeline.

## 5. Feature Request Trends
*   **Remote Development:** The overwhelming top request is full support for SSH/Remote containers in the Codex Desktop App ([#10450](https://github.com/openai/codex/issues/10450)), moving it to parity with VS Code Remote.
*   **Customization:** Users are demanding configurable hotkeys ([#3049](https://github.com/openai/codex/issues/3049)) to override default Codex bindings that conflict with existing muscle memory or other tools.
*   **Visual Generation:** There is a niche but active push for image generation capabilities directly within Codex for creating app assets ([#8758](https://github.com/openai/codex/issues/8758)).
*   **Looping Tasks:** A request for a `/loop` command ([#15679](https://github.com/openai/codex/issues/15679)) to run recurring prompts (e.g., "summarize progress every 5m").

## 6. Developer Pain Points
*   **Resource Exhaustion:** The "Token Burn" ([#14593](https://github.com/openai/codex/issues/14593)) and "High CPU" ([#15764](https://github.com/openai/codex/issues/15764), [#15706](https://github.com/openai/codex/issues/15706)) issues dominate the conversation. Developers are facing hardware throttling and increased API costs due to inefficient extension handling.
*   **Platform Instability:** Windows users are reporting specific UI regressions where buttons become unclickable ([#17596](https://github.com/openai/codex/issues/17596)) and the app fails to close correctly ([#17322](https://github.com/openai/codex/issues/17322)).
*   **Sandbox Friction:** While the sandbox improves security, the implementation is causing friction, specifically with false positive safety denials ([#17615](https://github.com/openai/codex/issues/17615)) and hardware access denial for local ML tools ([#17644](https://github.com/openai/codex/issues/17644)).

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest: 2026-04-14

## Today's Highlights
The Crush project is rapidly evolving core infrastructure to support heavy enterprise workflows. Significant efforts are underway to implement a **JSON-based hooks system** for external orchestration (aligned with tools like Cursor/Claude Code) and to introduce **terminal multiplexing** via split-pane views. Concurrently, the team is focusing on stability, specifically resolving **session deadlock issues** caused by exceeding provider image limits and hardening session integrity against corruption.

---

## Releases

### v0.57.0: Session Hardening, Token Savings
The latest release focuses on stability and efficiency.
*   **Session Integrity:** Includes "serious work" on guarding against session corruptions and hardening session management.
*   **Token Savings:** Introduces an *opt-in* preview feature for reducing token usage (specific implementation details truncated in source, likely related to context trimming).
*   **Link:** [v0.57.0 Release Notes](https://github.com/charmbracelet/crush/releases/tag/v0.57.0)

---

## Hot Issues

1.  **[#2604](https://github.com/charmbracelet/crush/issues/2604) [Images] Chat becomes unusable after exceeding image limit**
    *   **Impact:** Critical. Users report that if a conversation exceeds a model's image limit (e.g., Gemini's 10-image cap), the session enters a permanent failure state.
    *   **Reaction:** High urgency; PR #2613 was opened immediately to address this with automatic pruning.

2.  **[#2546](https://github.com/charmbracelet/crush/issues/2546) No longer works with latest LM Studio**
    *   **Impact:** Compatibility regression. Users attempting to load larger models (like Qwen 30B) via LM Studio are encountering "Operation canceled" errors.
    *   **Reaction:** Issue was recently closed, suggesting a fix has been merged or identified.

3.  **[#1189](https://github.com/charmbracelet/crush/issues/1189) [Session] Automatic session naming broken**
    *   **Impact:** UX degradation. A persistent issue where auto-renaming of sessions stopped functioning post-v0.10.3.
    *   **Reaction:** 2 upvotes; reopened discussion suggests it requires another look.

4.  **[#2617](https://github.com/charmbracelet/crush/issues/2617) Clicking multiline links opens only the first line**
    *   **Impact:** Usability frustration. The terminal interface fails to concatenate URLs that wrap across lines, forcing users to manually copy/paste.
    *   **Reaction:** New issue, likely to be prioritized for UI polish.

5.  **[#1222](https://github.com/charmbracelet/crush/issues/1222) Support for Copilot's instruction files**
    *   **Impact:** Workflow integration. Users want support for repo-specific instruction files (similar to GitHub Copilot).
    *   **Reaction:** 1 upvote; indicates a desire for vendor-agnostic configuration standardization.

---

## Key PR Progress

1.  **[#2612](https://github.com/charmbracelet/crush/pull/2612) JSON-based compatibility layer and lifecycle hooks**
    *   **Description:** Implements a **"JSON-Configured Lifecycle Interceptor Pattern"** to allow external managers (like "Agent-of-Empires") to orchestrate Crush. This aligns Crush with standards used by **Claude Code** and **Cursor**.
    *   **Status:** Open.

2.  **[#2606](https://github.com/charmbracelet/crush/pull/2606) Split-pane tree, tab manager, and cross-platform PTY**
    *   **Description:** A massive foundational update adding terminal multiplexing capabilities. Includes independent split panes, a tab manager, and a cross-platform PTY implementation.
    *   **Status:** Open.

3.  **[#2613](https://github.com/charmbracelet/crush/pull/2613) Prune excess images from history**
    *   **Description:** A hotfix for Issue #2604. Automatically removes the oldest images from context when the limit is exceeded, preventing session deadlock.
    *   **Status:** Open.

4.  **[#2593](https://github.com/charmbracelet/crush/pull/2593) Theme support (Charmtone & Gruvbox Dark)**
    *   **Description:** Decouples UI colors from hardcoded values, introducing a theming system with a default `charmtone` theme and `gruvbox-dark`.
    *   **Status:** Open.

5.  **[#2598](https://github.com/charmbracelet/crush/pull/2598) PreToolUse hook**
    *   **Description:** The initial pass on a hook implementation (currently shell script based), allowing actions to trigger before tool use.
    *   **Status:** Open.

6.  **[#2607](https://github.com/charmbracelet/crush/pull/2607) Render diff output as diffs**
    *   **Description:** Intelligent rendering. Detects output that looks like a diff (e.g., from the GitHub MCP server) and renders it syntax-highlighted rather than raw text.
    *   **Status:** Open.

7.  **[#2549](https://github.com/charmbracelet/crush/pull/2549) Improve JSON parsing performance**
    *   **Description:** Replaces the standard library `encoding/json` with `bytedance/sonic` (JIT-accelerated) for significant performance improvements in parsing.
    *   **Status:** Open.

8.  **[#2584](https://github.com/charmbracelet/crush/pull/2584) Configure agent model size**
    *   **Description:** Allows users to configure which model size (small/large) the Task Agent and Coder Agent use, addressing complaints about cost/speed.
    *   **Status:** Open.

9.  **[#2615](https://github.com/charmbracelet/crush/pull/2615) Validate tool calls/results + strip tags**
    *   **Description:** Fixes corruption issues where tool results lacked matching calls. Also removes XML tags from session titles.
    *   **Status:** Closed (Merged).

10. **[#2384](https://github.com/charmbracelet/crush/pull/2384) Skills discovery status in sidebar**
    *   **Description:** Adds visibility for "Skills" in the UI, showing loaded/errored states with status icons.
    *   **Status:** Open.

---

## Feature Request Trends
*   **Orchestration & Hooks:** There is a clear trend toward making Crush an "agent-able" host. The requests for JSON hooks (PR #2612) and Copilot instruction files (#1222) indicate developers want to build workflows *on top* of Crush, not just use it as a standalone CLI.
*   **UI/UX Customization:** Multiple requests for themes (#2593) and better handling of visual data (diffs in #2607) suggest a maturing user base that demands a polished, personalized interface.
*   **Resource Management:** Users are sensitive to model usage. Requests to configure agent model sizes (#2584) and fix image/token limits (#2613) are prominent.

## Developer Pain Points
*   **Session Fragility:** The most critical pain point reported today is **Session Deadlock**. If an agent accidentally sends too many images or context, the entire session dies unrecoverably (#2604).
*   **Tooling Integration:** Developers are struggling with external integrations, evidenced by the LM Studio breakage (#2546) and the request for standardized instruction files (#1222).
*   **Model Costs:** The default use of "large" models for background tasks is causing friction, leading to requests for granular control over agent model sizing (#2584).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-04-14

## 1. Today's Highlights

Today's digest focuses on critical infrastructure stability and performance improvements. The team is aggressively addressing failures related to **RipGrep downloads** in offline environments, with multiple PRs (#25342, #25332) proposing to bundle binaries directly into the Single Executable Application (SEA) to prevent startup hangs. Additionally, significant strides are being made in **Telemetry** with new architectural changes to decouple tracing and implement safer data truncation, while "YOLO mode" is receiving necessary policy engine guardrails.

## 2. Releases

*   **v0.37.2**: A rapid patch release addressing version synchronization.
    *   **Details**: This release cherry-picks commit `9d741ab` to patch `v0.37.1`, ensuring stability on the release branch.
    *   **[Compare Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.37.1...v0.37.2)**

## 3. Hot Issues

Here are the top 10 issues generating discussion or requiring immediate attention:

1.  **[Startup Latency due to RipGrep](https://github.com/google-gemini/gemini-cli/issues/25323)** (6 comments)
    *   **Why it matters**: Users experiencing network restrictions (e.g., corporate firewalls) face 2+ minute hangs during startup because the CLI attempts to download RipGrep repeatedly. The community wants a "fail-fast" approach or bundled binaries.
2.  **[AST-aware Codebase Mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (5 comments)
    *   **Why it matters**: The team is investigating using Abstract Syntax Trees (AST) to drastically improve code understanding and navigation, potentially reducing token noise and misaligned file reads.
3.  **[Permission Looping](https://github.com/google-gemini/gemini-cli/issues/24916)** (3 comments)
    *   **Why it matters**: A persistent bug where the CLI repeatedly asks for file access permissions even after "Allow for all future sessions" is selected.
4.  **[Shell Execution Hangs](https://github.com/google-gemini/gemini-cli/issues/25166)** (2 comments)
    *   **Why it matters**: The CLI enters a hanging state ("Awaiting user input") even after simple shell commands have completed, blocking the workflow.
5.  **[Tmp Script Sprawl](https://github.com/google-gemini/gemini-cli/issues/23571)** (1 comment)
    *   **Why it matters**: The model tends to create excessive temporary scripts in random directories, creating significant overhead for developers trying to clean their workspace before committing.
6.  **[Memory Routing Strategy](https://github.com/google-gemini/gemini-cli/issues/22819)** (1 comment)
    *   **Why it matters**: Defining the architecture for how the AI remembers user preferences—distinguishing between global user settings and project-specific conventions.
7.  **[Subagent Approval Awareness](https://github.com/google-gemini/gemini-cli/issues/23582)** (1 comment)
    *   **Why it matters**: Subagents often try to execute tools that violate the current active approval mode (e.g., Plan Mode), leading to unnecessary rejections and loops.
8.  **[SSH Text Rendering](https://github.com/google-gemini/gemini-cli/issues/24202)** (1 comment)
    *   **Why it matters**: Critical usability issue for remote developers; the terminal UI becomes unusable with scrambled text when running via SSH.
9.  **[Dependency Visualization](https://github.com/google-gemini/gemini-cli/issues/22816)** (1 comment)
    *   **Why it matters**: Users want a clearer, multi-level tree view of file dependencies rather than the current flattened view.
10. **[Destructive Behavior Warnings](https://github.com/google-gemini/gemini-cli/issues/22672)** (1 comment)
    *   **Why it matters**: Concerns that the model is too eager to use `--force` or `git reset` without understanding the irreversible consequences.

## 4. Key PR Progress

Significant Pull Requests updated in the last 24 hours:

1.  **[Bundle RipGrep Binaries](https://github.com/google-gemini/gemini-cli/pull/25342)** ([scidomino](https://github.com/scidomino))
    *   **Impact**: Directly addresses the startup hang issues by embedding `ripgrep` into the SEA for Linux, macOS, and Windows.
2.  **[Decouple Telemetry Traces](https://github.com/google-gemini/gemini-cli/pull/25343)** ([spencer426](https://github.com/spencer426))
    *   **Impact**: Adds a `telemetry.traces` flag to allow developers to opt-in to detailed tracing without incurring the overhead of heavy monitoring by default.
3.  **[YOLO Mode Guardrails](https://github.com/google-gemini/gemini-cli/pull/25341)** ([galz10](https://github.com/galz10))
    *   **Impact**: Fixes a bug where YOLO mode (auto-approval) was incorrectly downgraded to manual approval (`ASK_USER`) when a heuristic flagged a command as dangerous.
4.  **[Voice Mode Implementation](https://github.com/google-gemini/gemini-cli/pull/24174)** ([Abhijit-2592](https://github.com/Abhijit-2592))
    *   **Impact**: A major feature addition enabling real-time voice input via Cloud API or local Whisper (`whisper.cpp`).
5.  **[Watcher-Based File Recommendations](https://github.com/google-gemini/gemini-cli/pull/25256)** ([prassamin](https://github.com/prassamin))
    *   **Impact**: Improves UX by updating file suggestions (`@`) dynamically via a file watcher, removing the need to wait for a full project re-crawl.
6.  **[Sandbox Governance Override](https://github.com/google-gemini/gemini-cli/pull/25338)** ([galz10](https://github.com/galz10))
    *   **Impact**: Ensures that explicit write permissions granted by the user can override default "read-only" protections on sensitive files (like `.git`) within sandboxes.
7.  **[Core Tool Display Refactor](https://github.com/google-gemini/gemini-cli/pull/25186)** ([mbleigh](https://github.com/mbleigh))
    *   **Impact**: Migrates core tools to a native `ToolDisplay` property, fixing UI rendering inconsistencies and deprecating legacy adapters.
8.  **[Bounded Truncation for Telemetry](https://github.com/google-gemini/gemini-cli/pull/25344)** ([spencer426](https://github.com/spencer426))
    *   **Impact**: Prevents crashes/OOM errors by implementing smarter truncation of telemetry payloads before sending them.
9.  **[Large Conversation Performance Tests](https://github.com/google-gemini/gemini-cli/pull/25331)** ([cynthialong0-0](https://github.com/cynthialong0-0))
    *   **Impact**: Adds specific tests for 60MB+ chat histories to measure typing latency and load times, ensuring the CLI scales for heavy users.
10. **[ACP Host Input Requests](https://github.com/google-gemini/gemini-cli/pull/24664)** ([benjaminwestern](https://github.com/benjaminwestern))
    *   **Impact**: Enhances the Anthropic Computer Protocol (ACP) integration, allowing the host client to answer `ask_user` prompts, enabling more autonomous agents.

## 5. Feature Request Trends

*   **Offline/Reliability First**: There is a strong push towards removing external network dependencies for core functionality (e.g., bundling RipGrep) to ensure the CLI works in air-gapped or unstable network environments.
*   **Memory & Personalization**: Developers want the CLI to be smarter about context. Issues regarding "Memory Routing" (Global vs. Project) and "Proactive Memory Writes" indicate a desire for the agent to learn user preferences (e.g., code style, commit habits) automatically.
*   **AST Integration**: A high-level technical direction is forming around using Abstract Syntax Trees (AST) for codebase mapping, suggesting a move from text-based search to semantic code understanding.

## 6. Developer Pain Points

*   **Start-up Failures**: The #1 complaint today is the CLI freezing for 2+ minutes if a binary download fails. This is a blocker for productivity.
*   **"Thick" Borders & UI Glitches**: Multiple reports (#24915, #25216) point to rendering artifacts like black borders or broken layouts, particularly on Windows or complex terminal setups (tmux/SSH).
*   **Cleanup Overhead**: Developers are frustrated with the "mess" left behind—specifically temporary scripts created by the agent in random directories (#23571), which complicates version control.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-14

**Today's Highlights**
Today's digest is dominated by the release of **v1.0.25**, which brings native support for installing MCP (Model Context Protocol) servers via the registry. However, the release is shadowed by significant user friction regarding **resource consumption**; users are reporting that single agent sessions are consuming "infinite" premium requests due to tool invocation billing logic. Additionally, there is strong community sentiment regarding **clipboard support**, with a high volume of requests for image-pasting capabilities.

## 1. Releases
**v1.0.25 (2026-04-13)**
This release focuses on protocol support and session stability.
*   **MCP Integration:** Users can now install MCP servers directly from the registry with guided configuration in the CLI.
*   **Session Stability:** Fixed a bug where the `Esc` key failed to function correctly after a failed `/resume` session lookup.
*   **Model Persistence:** Resolved models are now persisted in session history, and model changes are deferred during active turns to prevent interruption.
*   **ACP Clients:** Enhanced support for ACP clients providing MCP servers (stdio).

## 2. Hot Issues
Here are the top 10 issues driving community discussion today:

1.  **[Infinite Premium Requests Consumed](https://github.com/github/copilot-cli/issues/2591)** ⚠️ *High Impact*
    Users are reporting that a single request is triggering 80-100 premium request charges. The issue appears linked to billing logic that counts every "thinking step" or tool invocation as a separate request.
    *Reaction:* 25 comments. High urgency; users are concerned about depleting enterprise quotas unexpectedly.*

2.  **[Enterprise Policy Blocking Models](https://github.com/github/copilot-cli/issues/1595)** ⚠️ *High Impact*
    Enterprise users with valid subscriptions are unable to list models (`/models`) due to "Copilot policy" access denied errors, despite having quota remaining.
    *Reaction:* 18 comments. Suggests friction between enterprise policy enforcement and CLI capabilities.*

3.  **[SHIFT + ENTER Behavior](https://github.com/github/copilot-cli/issues/1481)**
    The community is debating the default keybinding for multi-line input. The CLI uses `CTRL+ENTER` for new lines, but `SHIFT+ENTER` (standard in other chat apps) executes the prompt prematurely.
    *Reaction:* 22 comments. Users are requesting adherence to universal UI standards.*

4.  **[Paste Images from Clipboard](https://github.com/github/copilot-cli/issues/1276)** 📈 *Highly Requested*
    A feature request to support pasting images (e.g., screenshots, logs) directly into the CLI prompt.
    *Reaction:* 9 comments. Crucial for debugging visual bugs; currently requires saving files first.*

5.  **[Permissions: Fine-Grained Tokens](https://github.com/github/copilot-cli/issues/223)**
    The "Copilot Requests" permission is not visible when creating Organization-owned PATs, forcing corporate users to rely on individual tokens.
    *Reaction:* 63 upvotes. Significant request for enterprise security compliance.*

6.  **[Sandbox Mode / File Access Restrictions](https://github.com/github/copilot-cli/issues/892)**
    Request to add a sandbox mode that restricts the CLI agent's file access to a specified working directory to prevent unauthorized reads/writes.
    *Reaction:* 31 upvotes. Critical for users concerned about AI agent safety.*

7.  **[Linux Console Right-Click Bug](https://github.com/github/copilot-cli/issues/2158)**
    Copilot CLI captures the right-click menu on Linux, causing the "copy" function to fail with `spawn xclip ENOENT`.
    *Reaction:* Users are frustrated that standard terminal functionality is being overridden.*

8.  **[Usage Statistics Persistence](https://github.com/github/copilot-cli/issues/1394)**
    Enterprise users cannot see persistent usage statistics (requests/tokens) in the dashboard; stats are only shown once on CLI exit.
    *Reaction:* Users want better observability for budget management.*

9.  **[Global Hooks Configuration](https://github.com/github/copilot-cli/issues/1157)**
    Request for global hooks configuration (e.g., `UserPromptSubmit`) rather than per-repository `.github/copilot-hooks.json` files.
    *Reaction:* 25 upvotes. Developers want to avoid repetitive configuration across projects.*

10. **[Access from Phone](https://github.com/github/copilot-cli/issues/1687)**
    A request to access active Copilot CLI sessions remotely (e.g., from a phone) to monitor long-running jobs.
    *Reaction:* 34 upvotes. Highlights a desire for remote monitoring capabilities.*

## 3. Key PR Progress
*No pull requests were updated in the last 24 hours based on current data.*

## 4. Feature Request Trends
Based on the latest activity, the community is strongly advocating for the following directions:

*   **Enhanced Observability:** There is a clear trend toward better telemetry. Users want persistent usage dashboards ([#1394](https://github.com/github/copilot-cli/issues/1394)) and even parity with Claude Code regarding OTel support ([#2471](https://github.com/github/copilot-cli/issues/2471)).
*   **Multimodal Inputs:** Support for image inputs is rapidly becoming a standard expectation. Multiple issues ([#1276](https://github.com/github/copilot-cli/issues/1276), [#2409](https://github.com/github/copilot-cli/issues/2409), [#2675](https://github.com/github/copilot-cli/issues/2675)) are requesting clipboard image pasting.
*   **Granular Access Control:** Developers are asking for more control over the agent's environment. This includes sandboxing file access ([#892](https://github.com/github/copilot-cli/issues/892)) and proper enterprise token scoping ([#223](https://github.com/github/copilot-cli/issues/223)).

## 5. Developer Pain Points
*   **Billing Anxiety:** The reports of "infinite requests" ([#2591](https://github.com/github/copilot-cli/issues/2591)) combined with the inability to easily track persistent usage ([#1394](https://github.com/github/copilot-cli/issues/1394)) are creating anxiety around cost management, particularly for Enterprise users.
*   **UI/UX Inconsistency:** The deviation from standard shell and chat UI behaviors (Right-click issues on Linux [#2158](https://github.com/github/copilot-cli/issues/2158), Shift+Enter execution [#1481](https://github.com/github/copilot-cli/issues/1481), and Ctrl+L clearing conversation [#853](https://github.com/github/copilot-cli/issues/853)) is a constant source of friction.
*   **Enterprise Rigidity:** Users are struggling with enterprise policies that block valid model access ([#1595](https://github.com/github/copilot-cli/issues/1595)) and lack of support for organization-level permissions ([#223](https://github.com/github/copilot-cli/issues/223)), making the CLI difficult to adopt in regulated environments.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-04-14

**Data Source:** github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
The **Kimi Code CLI** has seen a rapid succession of releases (v1.32.0 and v1.33.0) focusing on UI refinement and stability. The community is actively debating the visibility of "thinking" traces—specifically requesting compact modes versus full transparency—while simultaneously pushing for enhanced project-level customization and session management features.

## 2. Releases
*   **v1.33.0** ([PR #1861](https://github.com/MoonshotAI/kimi-cli/pull/1861))
    *   **Refactor:** Unified the display of managed models to the brand name "Kimi for Code," removing hardcoded version references (e.g., `kimi-k2.5`) from the welcome screen and login tips.
*   **v1.32.0** ([PR #1858](https://github.com/MoonshotAI/kimi-cli/pull/1858))
    *   **Shell:** Introduced a "compact thinking" mode with an animated indicator to reduce visual clutter.
    *   **Tools:** Fixed a truncation issue for MCP tool output (limit 100k chars) and improved handling of unsupported content types.
    *   **Installer:** Fixed a PyInstaller bug where lazy CLI subcommands were missing from the binary.

## 3. Hot Issues

1.  **[#1864: Missing Full Thinking Traces](https://github.com/MoonshotAI/kimi-cli/issues/1864)**
    *   **Impact:** Users want full transparency.
    *   **Reaction:** Following the "compact" update, users are requesting an option to toggle between the new compact view and a detailed view to see the full reasoning process of `kimi-for-coding`.

2.  **[#1632: Option to Hide Thinking Content](https://github.com/MoonshotAI/kimi-cli/issues/1632)**
    *   **Impact:** UI/UX preferences.
    *   **Reaction:** This older request gained traction recently; users want to suppress the "Thinking..." spinner and text entirely if they find it distracting, highlighting a divide between those who want more detail vs. less clutter.

3.  **[#1814: CLI Args to List/Restore Sessions](https://github.com/MoonshotAI/kimi-cli/issues/1814)**
    *   **Impact:** Workflow efficiency.
    *   **Reaction:** Users find the current method (opening the CLI and running `/sessions`) cumbersome. They request a shell-level command (e.g., `kimi-cli --list-sessions`) to quickly find and attach to previous sessions without entering the TUI first.

4.  **[#1859: Missing Thinking Process (Chinese)](https://github.com/MoonshotAI/kimi-cli/issues/1859)**
    *   **Impact:** Localization/User confusion.
    *   **Reaction:** A user reported that the thinking process vanished entirely in v1.32.0, suggesting possible confusion regarding the new compact feature or a potential regression in the latest release.

5.  **[#1830: VSCode Extension Slash Commands Broken](https://github.com/MoonshotAI/kimi-cli/issues/1830)**
    *   **Impact:** IDE integration.
    *   **Reaction:** Users reported an inability to trigger slash skills or commands in the VSCode extension unless they type something first, breaking expected "command-first" workflows.

6.  **[#823: Authorization Timeout Loop](https://github.com/MoonshotAI/kimi-cli/issues/823)**
    *   **Impact:** Critical stability.
    *   **Reaction:** A persistent bug where the CLI throws authorization errors after a few chat rounds, forcing users to restart the terminal to regain access.

7.  **[#1856: Project-Level System Prompts](https://github.com/MoonshotAI/kimi-cli/issues/1856)**
    *   **Impact:** Customization.
    *   **Reaction:** High demand for a `.system_prompt.md` file in the project root to define context-specific rules, avoiding the need to re-paste instructions for every session.

8.  **[#1774: @mention File Path Error](https://github.com/MoonshotAI/kimi-cli/issues/1774)**
    *   **Impact:** File operations.
    *   **Reaction:** Users are experiencing errors when trying to `@mention` files, specifically related to path resolution (e.g., using `~` in paths).

9.  **[#778: API Error 400](https://github.com/MoonshotAI/kimi-cli/issues/778)**
    *   **Impact:** Compatibility.
    *   **Reaction:** Reports of `Invalid Request Error` when interacting with certain models (like `claude-sonnet-4-5`), likely related to prompt formatting or API handling changes.

10. **[#1853: Multi-Session Status in TUI](https://github.com/MoonshotAI/kimi-cli/issues/1853)**
    *   **Impact:** Advanced Session Management.
    *   **Reaction:** Users want the TUI to display the status of *multiple* sessions simultaneously (e.g., TODO progress, reasoning status) to switch between active tasks without losing context, noting that the WebUI often loses focus/input.

## 4. Key PR Progress

1.  **[PR #1860: Unify Model Display](https://github.com/MoonshotAI/kimi-cli/pull/1860)**
    *   **Merged:** Refactored the CLI to refer to the managed model simply as "Kimi for Code," removing hardcoded `kimi-k2.5` strings to future-proof version updates.
2.  **[PR #1857: Compact Thinking Indicator](https://github.com/MoonshotAI/kimi-cli/pull/1857)**
    *   **Merged:** Streamlined the thinking output into a single-line status with animated dots and token throughput metrics.
3.  **[PR #1843: Truncate MCP Tool Output](https://github.com/MoonshotAI/kimi-cli/pull/1843)**
    *   **Merged:** Implemented a 100k character limit for MCP tool outputs and added error handling for unsupported content types to prevent crashes.
4.  **[PR #1831: Fix PyInstaller Subcommands](https://github.com/MoonshotAI/kimi-cli/pull/1831)**
    *   **Merged:** Fixed a bug where the binary build (PyInstaller) failed to include lazy-loaded CLI subcommands.
5.  **[PR #1839: Add `/delete` Command](https://github.com/MoonshotAI/kimi-cli/pull/1839)**
    *   **Open:** Implements `#1783`, adding a `/delete [session_id]` command to remove old sessions directly from the shell.
6.  **[PR #1863: Fix FetchURL Duplicates](https://github.com/MoonshotAI/kimi-cli/pull/1863)**
    *   **Open:** Addresses a bug where fetching GitHub issues resulted in duplicated text if the extracted comments matched the main body.
7.  **[PR #1767: YOLO Mode for Web UI](https://github.com/MoonshotAI/kimi-cli/pull/1767)**
    *   **Open:** Extends the "YOLO" (auto-approve) mode to the Web Interface, allowing users to toggle automatic execution of commands via a browser UI toggle.
8.  **[PR #1738: WriteFile Format Validation](https://github.com/MoonshotAI/kimi-cli/pull/1738)**
    *   **Merged:** Adds automatic validation for JSON, XML, and Markdown files immediately after they are written or appended by the agent.
9.  **[PR #1852: Log Hook Exceptions](https://github.com/MoonshotAI/kimi-cli/pull/1852)**
    *   **Open:** Improves debuggability by ensuring hook task exceptions (PreToolUse, PostLLM, etc.) are logged to `logger.error` instead of being silently discarded.
10. **[PR #1854: Safer Glob Patterns](https://github.com/MoonshotAI/kimi-cli/pull/1854)**
    *   **Open:** A prompt engineering fix to instruct the model never to start glob patterns with `**` to prevent unsafe file system operations.

## 5. Feature Request Trends
*   **Session Management:** Users want command-line tools (`--list-sessions`) and TUI capabilities to manage multiple active sessions concurrently.
*   **Customization:** There is a strong push for local configuration files, specifically project-level system prompts (`.system_prompt.md`) and custom headers/providers.
*   **Command Execution Control:** Requests for cross-shell command preference (PowerShell vs. Bash) and safer "YOLO" mode toggles are prominent.

## 6. Developer Pain Points
*   **Thinking Visibility:** The v1.32.0 update created confusion; some users want the "Thinking" process hidden entirely, while others want *full* expanded traces, indicating that the current binary toggle is insufficient.
*   **CLI Stability:** Recurring authorization timeouts (`#823`) and installation issues (missing subcommands) are disrupting daily workflows.
*   **Cross-Platform Pathing:** Issues with `~` expansion in file mentions and correct shell command execution (Bash vs. PowerShell) on Windows remain high-friction points.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-14

## 1. Today's Highlights
The community is actively addressing a critical regression regarding GitHub Copilot authentication, where agent-initiated requests are incorrectly consuming premium user quotas. Simultaneously, the development team is pushing significant refactoring efforts to the core, focusing on `Effect`-ifying services and resolving complex session compaction bugs that have plagued recent releases.

## 2. Releases
*No new releases detected in the last 24 hours.*

## 3. Hot Issues

**1. [#8030 - Copilot auth sets far too many "user" requests](https://github.com/anomalyco/opencode/issues/8030)**
*   **Impact:** Critical. Users are reporting that agent-initiated requests are being tagged as "user" requests, rapidly consuming monthly quotas.
*   **Reaction:** 215 comments, 79 👍. High urgency due to direct financial impact on developers.

**2. [#13768 - Opus 4.6 "assistant message prefill" bug](https://github.com/anomalyco/opencode/issues/13768)**
*   **Impact:** High. Frequent session stops with "model does not support assistant message prefill" errors when using Opus 4.6.
*   **Reaction:** 57 comments, 23 👍. Indicates a compatibility breakdown with the latest model iteration.

**3. [#11112 - Always stuck at "Preparing write..."](https://github.com/anomalyco/opencode/issues/11112)**
*   **Impact:** High. Agents enter an infinite loop trying to write files, aborting tool execution repeatedly.
*   **Reaction:** 53 comments, 22 👍. A major workflow blocker for file manipulation tasks.

**4. [#8140 - Feature: Configurable context limit & auto-compaction](https://github.com/anomalyco/opencode/issues/8140)**
*   **Impact:** Enhancement. Users want control over context limits to optimize costs and trigger compaction earlier than the default.
*   **Reaction:** 20 comments, 39 👍. Strong demand for cost-optimization features.

**5. [#15533 - Auto-compaction infinite loop](https://github.com/anomalyco/opencode/issues/15533)**
*   **Impact:** High. When compaction triggers after a natural turn end, the system injects "Continue..." causing a loop.
*   **Reaction:** 13 comments. Highlights instability in the context management logic.

**6. [#11301 - Processing stops after compaction](https://github.com/anomalyco/opencode/issues/11301)**
*   **Impact:** High. Processing consistently halts after every compaction event on Windows.
*   **Reaction:** 11 comments. Confirms persistent issues with the compaction lifecycle.

**7. [#17516 - `opencode run` hangs indefinitely](https://github.com/anomalyco/opencode/issues/17516)**
*   **Impact:** Medium. The CLI process does not exit after tool calls complete, requiring manual kills.
*   **Reaction:** 11 comments. Affects CI/CD pipelines and scripting workflows.

**8. [#11409 - Feature: Native Jupyter (.ipynb) support](https://github.com/anomalyco/opencode/issues/11409)**
*   **Impact:** Feature Request. Native handling of Jupyter notebooks is currently missing.
*   **Reaction:** 10 comments, 13 👍. Highly requested by data science users.

**9. [#20859 - Subagent models ignored with GitHub Copilot](https://github.com/anomalyco/opencode/issues/20859)**
*   **Impact:** Billing/Architecture. When using GitHub Copilot, subagent requests are billed as the expensive orchestrator model (Opus 4.6).
*   **Reaction:** 5 comments. Critical for cost management in multi-agent setups.

**10. [#22361 - Hook for compaction continue logic](https://github.com/anomalyco/opencode/issues/22361)**
*   **Impact:** Architecture. A discussion/open issue regarding how to fix the "continue" logic post-compaction.
*   **Reaction:** Recent activity, likely linked to the compaction bugs above.

## 4. Key PR Progress

**1. [#22361 - Hook for compaction continue logic](https://github.com/anomalyco/opencode/pull/22361)**
*   **Status:** Open (Vouched). Aims to fix the loop issues by adding a specific hook for handling continuation after compaction.

**2. [#22359 - Core: effectify Env service](https://github.com/anomalyco/opencode/pull/22359)**
*   **Status:** Open. Converts the `Env` service to use `InstanceState.make` to resolve Async Local Storage (ALS) errors.

**3. [#22357 - Add experimental question HttpApi slice](https://github.com/anomalyco/opencode/pull/22357)**
*   **Status:** Open (Contributor). Adds an experimental API endpoint for the "question" tool and migrates schemas to Effect Schema.

**4. [#22277 - App: Use TanStack Query for session VCS state](https://github.com/anomalyco/opencode/pull/22277)**
*   **Status:** Open (Beta). Replaces ad-hoc state management with TanStack Query for session VCS status to fix loading bugs.

**5. [#22355 - Add isolated shell job service](https://github.com/anomalyco/opencode/pull/22355)**
*   **Status:** Open (Contributor). Introduces a dedicated `ShellJob` service to manage background shell processes (spooling, output capture, killing).

**6. [#22326 - Fix: Prune LSP clients for deleted roots](https://github.com/anomalyco/opencode/pull/22326)**
*   **Status:** Open (Contributor). Ensures LSP clients are shut down when their workspace root is deleted, freeing resources.

**7. [#21415 - Cache Copilot plugin to unblock UI thread](https://github.com/anomalyco/opencode/pull/21415)**
*   **Status:** Open. Addresses TUI blocking on startup by caching the Copilot provider model.

**8. [#22079 - App: Add markdown preview/source toggle](https://github.com/anomalyco/opencode/pull/22079)**
*   **Status:** Open. Adds a toggle button in the file viewer to switch between raw source and rendered Markdown.

**9. [#9871 - Feat: Add /reload slash command](https://github.com/anomalyco/opencode/pull/9871)**
*   **Status:** Open. Allows hot-reloading of configuration and plugins without restarting the TUI.

**10. [#13854 - Fix: Stop streaming markdown/code after message completes](https://github.com/anomalyco/opencode/pull/13854)**
*   **Status:** Open. Fixes a TUI bug where finished messages would not render the last row/table correctly.

## 5. Feature Request Trends

*   **Context & Cost Management:** There is a strong push for granular control over context windows (#8140). Users want to define custom limits and auto-compaction thresholds to prevent "silent" cost overruns and context limit errors.
*   **Session Transparency:** Users are demanding better visibility into session usage (#6152), specifically a TUI dialog (similar to Claude's `/context`) to show token consumption and file usage in real-time.
*   **Workflow Integration:** Requests for deeper integration with specific developer workflows are rising, specifically **Jupyter Notebook support** (#11409) and **BMAD product management workflows** (#21842).
*   **Historical Navigation:** A recurring request is the implementation of `Ctrl+R` (reverse-i-search) for prompt history (#5062), indicating frustration with the default arrow-key navigation.

## 6. Developer Pain Points

*   **Compaction Instability:** The most significant technical friction point is the **session compaction logic**. Multiple distinct issues (#11112, #15533, #11301, #17911) report that compaction either causes infinite loops, stops processing, or crashes the session. This suggests a fundamental fragility in the current context-truncation implementation.
*   **Windows Compatibility:** Windows users are facing a disproportionate number of critical bugs, ranging from **MCP timeouts** (#22310) and **Defender blocking execution** (#22300) to **UI rendering corruption** (#22261).
*   **Model Compatibility:** As model providers update (Opus 4.6, GPT 5.4), OpenCode is facing "breaking" regressions. Issues include unsupported message prefill (#13768) and invalid parameter injection for `reasoningSummary` (#22351).
*   **Billing Anxiety:** The misattribution of agent requests to user quotas (#8030, #20859) combined with the lack of clear cost controls (#8140) is creating anxiety for users relying on paid premium API tiers.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-14

## 1. Today's Highlights
Qwen Code v0.14.4 has been released, focusing on improved CLI ergonomics for CJK users and critical fixes for the VSCode extension's ACP session handling. Concurrently, the maintainers are aggressively addressing stability concerns, with significant progress on loop detection mechanisms to prevent infinite agent retries and performance profiling tools to diagnose startup bottlenecks.

## 2. Latest Releases
**v0.14.4 (Latest)**
*   **CLI Enhancements:** Implemented optimized word segmentation for CJK languages and improved Ctrl+arrow key navigation (#2942).
*   **VSCode Fixes:** Patched an issue where the "new-session" action failed to force a fresh ACP (Agent Communication Protocol) session, potentially causing state contamination (#2874).
*   *Note:* Changes also propagated to `v0.14.4-preview.0` and nightly builds.

## 3. Hot Issues

### Stability & Reliability
*   [#3238](https://github.com/QwenLM/qwen-code/issues/3238) - **[BUG] Loop when failing on simple tasks**
    Users are reporting critical failures where the agent enters infinite loops during simple file edits, often consuming maximum token context without recovery.
*   [#1922](https://github.com/QwenLM/qwen-code/issues/1922) - **[BUG] The edit tool is unable to edit files**
    A recurring high-friction bug (previously fixed) has resurfaced, causing failures when modifying Python files.

### Feature Requests
*   [#3137](https://github.com/QwenLM/qwen-code/issues/3137) - **Replace fdir with git ls-files + ripgrep**
    A highly requested technical improvement to switch the file search backend to `git ls-files` for better performance and accuracy in git repositories.
*   [#3186](https://github.com/QwenLM/qwen-code/issues/3186) - **Feature Request: Conversation History Rollback**
    Users want the ability to "time travel" within a session (similar to Claude Code's ESC functionality) to revert to previous conversation states.
*   [#2342](https://github.com/QwenLM/qwen-code/issues/2342) - **Feature Request: /undo command**
    Strong community demand for a standardized `/undo` command to recover from erroneous agent actions.

### Platform & UX
*   [#2247](https://github.com/QwenLM/qwen-code/issues/2247) - **JetBrains Plugin Request**
    Users are frustrated by the lack of an IntelliJ/IDEA plugin, noting that the current ACP implementation is difficult to use compared to the VSCode extension.
*   [#3144](https://github.com/QwenLM/qwen-code/issues/3144) - **Terminal Scroll Jumps**
    A UI bug causing the terminal view to bounce rapidly during agent execution is impacting usability.

## 4. Key PR Progress

### Core Agent Logic
*   [#3236](https://github.com/QwenLM/qwen-code/pull/3236) - **Enhanced Loop Detection**
    Actively developing improved loop detection to catch stagnation and validation-retry cycles, addressing the infinite loop issues reported in #3238.
*   [#2936](https://github.com/QwenLM/qwen-code/pull/2936) - **Fork Subagent for Context Sharing**
    Implementation of a "Fork Subagent" feature (P0 priority) allowing background agents to inherit parent context and share prompt cache, significantly reducing latency.
*   [#3087](https://github.com/QwenLM/qwen-code/pull/3087) - **Managed Auto-Memory System**
    Introduction of an autonomous background system that extracts memory and updates context without manual user intervention.

### CLI & SDK
*   [#3190](https://github.com/QwenLM/qwen-code/pull/3190) - **Project-Level /chat Commands**
    Adding file-based session management (`/chat -s`, `/chat -l`) to save, list, and resume conversations by name.
*   [#3232](https://github.com/QwenLM/qwen-code/pull/3232) - **Startup Performance Profiler**
    Adding instrumentation to `main()` to measure and report startup times, addressing the P1 priority performance optimizations.

### VSCode Integration
*   [#2550](https://github.com/QwenLM/qwen-code/pull/2550) - **Fix Input Lag in Long Conversations**
    Optimizes the React rendering pipeline to prevent 5+ second delays in the IDE companion during long sessions.
*   [#2592](https://github.com/QwenLM/qwen-code/pull/2592) - **Native /export session command**
    bringing CLI-parity export features directly to the VSCode extension.

## 5. Feature Request Trends
*   **Conversation Management:** There is a clear trend towards better session control. Users are requesting **undo capabilities**, **naming/indexing conversations** (#3234), and **history rollback/branching** (#3186).
*   **IDE Parity:** The gap between the CLI and VSCode experiences is narrowing (e.g., `/export` support), but users are now loudly requesting **JetBrains/IntelliJ support** (#2247).
*   **Performance:** Moving away from Node.js filesystem crawlers (`fdir`) to native git tools (`ripgrep`/`git ls-files`) is a major community request for efficiency (#3137).

## 6. Developer Pain Points
*   **Agent Stability:** The most critical pain point is the agent's tendency to enter **infinite loops** when encountering errors or validation failures, wasting quota and time (#3238).
*   **Edit Reliability:** The core editing tool is perceived as fragile, with regressions causing it to fail on simple file modifications (#1922).
*   **Startup Latency:** Performance issues at startup are significant enough to warrant a dedicated profiler and P1 priority label (#3219).
*   **Hook Consistency:** Developers are encountering discrepancies where hooks trigger in the CLI but fail in the VSCode extension (#3205), indicating fragmentation in the extension architecture.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*