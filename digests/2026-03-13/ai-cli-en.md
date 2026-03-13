# AI CLI Tools Community Digest 2026-03-13

> Generated: 2026-03-13 06:24 UTC | Tools covered: 9

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

## AI CLI Tools Ecosystem Report: 2026-03-13

### 1. Ecosystem Overview
The AI CLI tools landscape is currently undergoing a pivotal transition from experimental features to robust platform engineering. Development is heavily focused on **multi-agent orchestration** and **subagent architectures**, as seen in OpenCode, Qwen Code, and Kimi CLI, indicating a shift toward complex, autonomous workflows rather than single-shot code generation. Simultaneously, **platform maturity** is becoming a critical differentiator; while tools like Claude Code and OpenAI Codex grapple with critical stability bugs (memory leaks, context loss), smaller players like Pi Mono-Repo are prioritizing enterprise-grade concerns such as **multi-tenancy** and **security auditing**. There is also a clear industry-wide trend toward **unifying IDE and CLI experiences**, with OpenAI Codex migrating its TUI to a shared app-server and GitHub Copilot facing community backlash over workflow-breaking changes.

### 2. Activity Comparison

| Tool | Issue Activity | PR Velocity | Release Status | Primary Focus Today |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | High (Critical bugs on Max plan) | Medium | **No Release** | Cost transparency, Plugin ecosystem refinement |
| **OpenAI Codex** | **Critical** (Context loss, Segfaults) | **High** (7 Alphas) | Nightly Only | TUI App-server migration, Python SDK |
| **Gemini CLI** | Medium | High | **v0.35.0-nightly** | Agent architecture (`AgentSession`), V8 performance |
| **GitHub Copilot** | **High** (Viral negative feedback) | Low | **v1.0.5-0** | Dynamic Retrieval, Syntax Highlighting |
| **Kimi Code** | Medium | Medium | **v1.21.0** | Windows support, Interactive session management |
| **OpenCode** | High (Governance concerns) | High | **v1.2.25** | Type safety, Azure support, Memory leak fixes |
| **Qwen Code** | Medium | High | **v0.12.2** | Event Hooks system, Agent Collaboration Arena |
| **LLXprt-Code** | Low | Low | No Release | Upstream sync, Code maintenance |
| **Pi Mono-Repo** | Medium | **High** | No Release | Security hardening, Multi-tenancy support |

### 3. Shared Feature Directions
*   **Advanced Multi-Agent Systems:**
    *   **Gemini CLI, Qwen Code:** Developing dedicated subagent configurations and policies (e.g., "Planning Subagent").
    *   **Kimi CLI:** Implementing `AgentHooks` for extensibility and blocking dangerous commands.
    *   **OpenCode:** Focusing on parallel execution arenas and model comparison tools.

*   **Workflow Control & Safety:**
    *   **Plan Mode:** High demand across **OpenCode** and **Gemini CLI** to default to "Read-Only/Plan" modes to prevent accidental edits.
    *   **YOLO/Auto-Approval:** Requested in **Kimi Code** and **OpenCode** to reduce friction for trusted operations via toggles.
    *   **Undo Functionality:** **Qwen Code** users are aggressively requesting an `/undo` command to recover from errors.

*   **Cross-Platform Stability:**
    *   **Windows Pain Points:** **Pi Mono-Repo**, **Qwen Code**, and **OpenAI Codex** are all battling specific regressions on Windows (path handling, input blocking, UI freezes).
    *   **Memory Management:** **Claude Code**, **OpenCode**, and **OpenAI Codex** are all addressing leaks or OOM kills during extended sessions.

*   **Observability & Debugging:**
    *   **Gemini CLI** and **OpenCode** are investing in diagnostic tooling and "Reasoning Depth" indicators to help users understand agent behavior.

### 4. Differentiation Analysis
*   **OpenAI Codex** is positioning itself as an infrastructure leader, aggressively moving toward a **unified app-server backend** (Node/Rust) to support both CLI and IDE interfaces identically. Its rapid release cadence (7 alpha builds/day) suggests a heavy focus on underlying architectural stability over immediate feature polish.
*   **Claude Code** remains focused on the **Enterprise/Prosumer market**, leveraging its Max subscription plan but currently struggling with billing/account management friction. Its differentiator is the deep integration of **MCP (Model Context Protocol)**, though users are demanding more granular control over it.
*   **OpenCode** appeals to the **Power User/Hacker** demographic. It is prioritizing features like **Git Worktree support** and **Provider Flexibility** (OpenRouter, Azure), allowing users to mix and match models competitively.
*   **Pi Mono-Repo** is distinct in its focus on **Platform Readiness**, actively solving multi-tenancy (custom session IDs) and hardening security (credential leak prevention), making it suitable for embedding in larger products.
*   **GitHub Copilot CLI** is suffering from an **identity crisis**. The community backlash (Issue #53) suggests a divergence between GitHub's direction and developer workflows, with users actively seeking alternatives that respect the "classic" CLI interaction model.

### 5. Community Momentum & Maturity
*   **Most Active (Iterating Fast):** **OpenAI Codex** and **Gemini CLI**. Both have high PR throughput and are actively refactoring cores for future scale (Realtime V2, Agent Sessions).
*   **Most Stable (Mature):** **Kimi Code**. The release of v1.21.0 with concrete features like Windows support and API key verification suggests a more controlled, stable release cycle compared to the "alpha churn" of OpenAI or the "bug backlog" of Claude.
*   **Declining Sentiment:** **GitHub Copilot CLI** and **Claude Code**. Copilot faces a crisis of trust regarding workflow changes, while Claude Code is plagued by high-impact bugs (usage limits, memory leaks) that degrade the paid user experience.
*   **Niche but Rising:** **Pi Mono-Repo** and **Qwen Code**. Qwen’s unique "Agent Arena" and Pi’s focus on security credentials show they are attracting sophisticated technical users looking for specific capabilities (benchmarking, enterprise embedding) rather than general coding assistance.

### 6. Trend Signals
*   **The "Agentic" Shift is Real:** The proliferation of terms like "subagent," "hooks," "skills," and "arena" across *Qwen, Kimi, OpenCode,* and *Gemini* confirms that the market is moving toward complex, multi-step autonomous workflows. Simple autocomplete is no longer sufficient; tools must manage state, permissions, and parallel execution.
*   **Windows is the Canary in the Coal Mine:** The prevalence of Windows-specific bugs (path separators, shell integration, input blocking) across *Pi, Qwen, OpenAI,* and *Kimi* suggests that many of these tools were developed primarily on Unix/Linux systems and are now rushing to stabilize for enterprise Windows environments.
*   **Cost & Token Awareness:** The friction in **Claude Code** (Usage limits) and **OpenCode** (Tokens/sec request) indicates that as these tools move from novelties to daily drivers, **operational cost visibility** is becoming a primary requirement for adoption.
*   **Security & Compliance are Table Stakes:** The security audit in **Pi Mono-Repo**, the "Sandbox" requests in **GitHub Copilot**, and the "Trusted Folder" debates in **Gemini CLI** signal that the "wild west" phase of AI CLI tools is ending. Enterprises are demanding strict control over file system access and credential handling.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Data as of 2026-03-13 | Repository: `anthropics/skills`

## 1. Top Skills Ranking

*Note: The provided data indicates "undefined" for comment counts on PRs. The ranking below is based on the relative position and significance of the PRs listed.*

1.  **[Document Typography](https://github.com/anthropics/skills/pull/514)** ([#514](https://github.com/anthropics/skills/pull/514))
    *   **Functionality:** Enforces typographic quality control in AI-generated documents, specifically targeting orphan word wrap, widow paragraphs, and numbering misalignment.
    *   **Status:** Open | Author: @PGTBoos
    *   **Insight:** Addresses a fundamental quality-of-life issue for document generation, indicating a push for professional-grade output formatting.

2.  **[Skill Quality & Security Analyzers](https://github.com/anthropics/skills/pull/83)** ([#83](https://github.com/anthropics/skills/pull/83))
    *   **Functionality:** Adds "meta skills" that evaluate other skills across five dimensions (Structure, Capability, Safety, Reliability, Testing) and check for security vulnerabilities (injection attacks, excessive permissions).
    *   **Status:** Open | Author: @eovidiu
    *   **Insight:** Represents a maturation of the ecosystem, moving from just creating skills to ensuring they are safe and high-quality.

3.  **[Frontend Design Skill Improvement](https://github.com/anthropics/skills/pull/210)** ([#210](https://github.com/anthropics/skills/pull/210))
    *   **Functionality:** Revises the `frontend-design` skill to improve clarity and actionability, ensuring instructions can be executed within a single conversation.
    *   **Status:** Open | Author: @justinwetch
    *   **Insight:** Focuses on "actionability" and token efficiency, reflecting a community trend toward optimizing skill performance.

4.  **[Masonry Image & Video Generation](https://github.com/anthropics/skills/pull/335)** ([#335](https://github.com/anthropics/skills/pull/335))
    *   **Functionality:** Integrates the Masonry CLI to generate images (Imagen 3.0) and videos (Veo 3.1) from text prompts.
    *   **Status:** Open | Author: @junaid1460
    *   **Insight:** High interest in multimodal capabilities, bridging Claude Code with advanced media generation tools.

5.  **[Shodh Memory System](https://github.com/anthropics/skills/pull/154)** ([#154](https://github.com/anthropics/skills/pull/154))
    *   **Functionality:** Provides a persistent memory system for AI agents to maintain context across conversations using `proactive_context`.
    *   **Status:** Open | Author: @varun29ankuS
    *   **Insight:** Addresses the critical limitation of context window drift and statelessness in long-running projects.

6.  **[Codebase Inventory Audit](https://github.com/anthropics/skills/pull/147)** ([#147](https://github.com/anthropics/skills/pull/147))
    *   **Functionality:** A 10-step workflow to audit codebases for orphaned code, unused files, and documentation gaps, producing a `CODEBASE-STATUS.md`.
    *   **Status:** Open | Author: @p19dixon
    *   **Insight:** Strong demand for "cleanup" and maintenance utilities for managing complex technical debt.

7.  **[SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** ([#181](https://github.com/anthropics/skills/pull/181))
    *   **Functionality:** Integrates SAP's open-source tabular foundation model for predictive analytics on business data.
    *   **Status:** Open | Author: @amitlals
    *   **Insight:** Signals a growing demand for heavy-duty enterprise data analysis and tabular foundation models within the Skills ecosystem.

## 2. Community Demand Trends

Based on the discussion in Issues and PR proposals:

*   **Agent Governance & Safety:** There is a clear demand for skills that manage AI agent safety. Proposal [#412](https://github.com/anthropics/skills/issues/412) (Agent Governance) highlights the need for "policy enforcement, threat detection, and trust scoring" as systems become more complex.
*   **Ecosystem Reliability:** A significant portion of community discussion (e.g., Issue [#556](https://github.com/anthropics/skills/issues/556), Issue [#389](https://github.com/anthropics/skills/issues/389)) is focused on infrastructure reliability—specifically skill triggering rates and API stability for Opus 4.5.
*   **Security Hardening:** Following the "trust boundary abuse" concerns raised in Issue [#492](https://github.com/anthropics/skills/issues/492), there is a heightened demand for verification mechanisms to distinguish official Anthropic skills from community submissions.
*   **Workflow Automation:** As seen in PR [#299](https://github.com/anthropics/skills/pull/299) (Google Workspaces integration) and PR [#154](https://github.com/anthropics/skills/pull/154), users are actively seeking skills that turn Claude into a persistent personal assistant that interacts with external SaaS tools.

## 3. High-Potential Pending Skills

These PRs are active and open, representing likely near-term additions to the ecosystem:

*   **[YAML Quoting Requirement](https://github.com/anthropics/skills/pull/359)** ([#359](https://github.com/anthropics/skills/pull/359)): A critical documentation fix to prevent parser errors in skill descriptions.
*   **[CONTRIBUTING.md Guide](https://github.com/anthropics/skills/pull/509)** ([#509](https://github.com/anthropics/skills/pull/509)): Addresses the community health gap, likely to be merged to standardize submissions.
*   **[ODT (OpenDocument) Support](https://github.com/anthropics/skills/pull/486)** ([#486](https://github.com/anthropics/skills/pull/486)): Expands document interoperability beyond Microsoft Word formats to open standards (LibreOffice).
*   **[MCP Apps Spec Support](https://github.com/anthropics/skills/issues/369)** ([#369](https://github.com/anthropics/skills/issues/369)): Highly requested feature to update the `mcp-builder` skill to support the newest MCP Apps specification driven by Anthropic.

## 4. Skills Ecosystem Insight

The community is currently concentrating its demand on **operational maturity**, specifically seeking tools that ensure AI-generated output is professionally formatted (Typography), secure (Security Analyzers), and persistent (Memory Systems), while simultaneously demanding better infrastructure support for skill reliability and trigger rates.

---

# Claude Code Community Digest — 2026-03-13

## 1. Today's Highlights

The community is actively engaging with persistent cost transparency and usage management issues, with a critical bug regarding instant usage limit hits on Max plans generating significant discussion. Development efforts continue to refine the plugin ecosystem, particularly around documentation and tool management.

## 2. Releases

**No new releases** in the last 24 hours.

## 3. Hot Issues

1.  **[#16157 - BUG: Instantly hitting usage limits with Max subscription](https://github.com/anthropics/claude-code/issues/16157)**
    *   **Impact:** High. Critical account billing issue affecting Max plan users.
    *   **Reaction:** 1237 comments, 541 👍. Users report frustration with being unable to use the service despite paying for the highest tier due to immediate limit errors.

2.  **[#7328 - FEATURE: MCP Tool Filtering](https://github.com/anthropics/claude-code/issues/7328)**
    *   **Impact:** Medium. Enhances security and control over the MCP ecosystem.
    *   **Reaction:** 224 👍. High demand for the ability to disable specific tools from MCP servers without blocking the entire server.

3.  **[#17432 - Feature Request: India-Specific Pricing (INR)]](https://github.com/anthropics/claude-code/issues/17432)**
    *   **Impact:** Market expansion. Addresses pricing parity in key regions.
    *   **Reaction:** 160 👍. Users are requesting localized pricing for India to match competitor offerings (OpenAI, Google).

4.  **[#4953 - Claude Code Memory Leak (120+ GB RAM)](https://github.com/anthropics/claude-code/issues/4953)**
    *   **Impact:** High. Causes crashes and OOM kills during extended sessions.
    *   **Reaction:** 62 👍. A long-standing memory leak issue that resurfaces in the daily updates, indicating it remains unresolved for many.

5.  **[#20745 - Bug: Model setting changes globally across sessions (regression)](https://github.com/anthropics/claude-code/issues/20745)**
    *   **Impact:** Medium. Disrupts workflow for users managing different projects with different model requirements.
    *   **Reaction:** 23 👍. Users report that changing the model in one session unexpectedly changes it for all active sessions.

6.  **[#33119 - Remote Control not enabled on Max plan account](https://github.com/anthropics/claude-code/issues/33119)**
    *   **Impact:** Feature availability.
    *   **Reaction:** Resolved. The issue was traced to the `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` environment variable silently disabling feature flag evaluation.

7.  **[#17573 - BUG: CLAUDE_CODE_HIDE_ACCOUNT_INFO not working on Windows](https://github.com/anthropics/claude-code/issues/17573)**
    *   **Impact:** Privacy/Compliance.
    *   **Reaction:** 11 👍. Configuration option intended to hide PII fails specifically on the Windows platform.

8.  **[#30154 - FEATURE: Multi-window support in Claude Code Desktop](https://github.com/anthropics/claude-code/issues/30154)**
    *   **Impact:** UX/Productivity.
    *   **Reaction:** 22 👍. Users want to view multiple sessions simultaneously rather than switching via the sidebar.

9.  **[#33877 - /usage broken after switching from API key back to OAuth](https://github.com/anthropics/claude-code/issues/33877)**
    *   **Impact:** Utility.
    *   **Reaction:** Users on the Max plan are unable to check usage statistics if they have recently switched authentication methods.

10. **[#33880 - claude-in-chrome MCP: Browser extension not connected (macOS Intel)](https://github.com/anthropics/claude-code/issues/33880)**
    *   **Impact:** Integration.
    *   **Reaction:** Users on Intel macOS are unable to connect the Chrome browser extension via MCP.

## 4. Key PR Progress

1.  **[#30596 - docs: add CLAUDE.md with codebase structure](https://github.com/anthropics/claude-code/pull/30596)**
    *   **Status:** Closed.
    *   **Value:** Adds comprehensive documentation for repository structure, plugin architecture, and conventions specifically for AI agents.

2.  **[#33809 - feat: add deny-with-reason plugin](https://github.com/anthropics/claude-code/pull/33809)**
    *   **Status:** Open.
    *   **Value:** Introduces a plugin to deny tool calls based on patterns and explains the reason to the Claude context, allowing for dynamic adjustment.

3.  **[#32890 - fix: Update stale Task tool references to Agent tool](https://github.com/anthropics/claude-code/pull/32890)**
    *   **Status:** Open.
    *   **Value:** Updates documentation to reflect the renaming of "Task tool" to "Agent tool" in v2.1.63.

4.  **[#33710 - Add complete town simulator game](https://github.com/anthropics/claude-code/pull/33710)**
    *   **Status:** Open.
    *   **Value:** A community contribution adding a complex simulation example to the repo.

5.  **[#33472 - feat(code-review): pass confirmed=true when posting inline comments](https://github.com/anthropics/claude-code/pull/33472)**
    *   **Status:** Closed.
    *   **Value:** Fixes a bug where subagents posted test/probe comments on customer PRs due to permission errors.

## 5. Feature Request Trends

*   **Usage & Cost Visibility:** There is a strong, recurring demand for better visibility into token usage and rate limits directly within the IDE/CLI (Issues #9617, #32448). Users want to avoid "surprise" interruptions.
*   **Granular MCP Control:** Users are requesting the ability to manage MCP tools at a more granular level—specifically enabling/disabling individual tools within a server (Issue #7328) or hiding unused cloud connectors (Issue #29368).
*   **Configuration Management:** Multiple requests exist for managing multiple accounts (Issue #20131) and ensuring settings (like model choice) remain local to the session rather than global (Issue #20745).

## 6. Developer Pain Points

*   **Account Management & Authentication:** Users are facing friction with feature flags (like Remote Control) being disabled by obscure environment variables (Issue #33119) and account info privacy settings failing on Windows (Issue #17573).
*   **Memory & Performance:** The memory leak issue (Issue #4953) and self-upgrade memory accumulation (Issue #33874) continue to plague users on extended coding sessions.
*   **Regressions:** Reports of functionality that previously worked (e.g., independent model settings per session) breaking in recent updates (Issue #20745).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-03-13

## 1. Today's Highlights
The repository is seeing significant development activity focused on architectural shifts, specifically the movement of the TUI (Terminal User Interface) onto the embedded **app-server** backend to unify behavior across surfaces. Simultaneously, the team is advancing **Realtime V2** features and enhancing the **Python SDK**. On the community side, users are reporting critical stability issues with the latest CLI v0.114.0, including segmentation faults on Linux ARM64 and "hallucinating" agent behaviors where the model answers old prompts instead of new ones.

## 2. Releases
*No stable releases published in the last 24 hours.*

**Nightly / Alpha Activity:**
The release pipeline is very active, pushing **7 distinct Rust alpha versions** (ranging from `v0.115.0-alpha.9` to `v0.115.0-alpha.16`) within a single day. This indicates a high velocity of testing and iteration, likely related to the underlying infrastructure changes seen in the Pull Requests today.

## 3. Hot Issues

**Critical Bugs & Stability**
*   [#14474 [BUG] Linux arm64: bundled codex-linux-arm64 musl binary segfaults](https://github.com/openai/codex/issues/14474)
    *   **Impact:** Users on Linux ARM64 (e.g., Raspberry Pi) are experiencing hard crashes (SEGV_ACCERR) with the latest CLI version.
    *   **Reaction:** Critical blocker for ARM users; 5 comments in 24 hours.
*   [#14486 [BUG] Codex seemed to re-answer an earlier prompt](https://github.com/openai/codex/issues/14486)
    *   **Impact:** Agents are losing context of the current task and answering unrelated previous questions.
    *   **Reaction:** Alarming behavior for agentic workflows; reported on `gpt-5.4 xhigh`.
*   [#14513 [BUG] Codex stops execution mid turn and answer an old unrelated question](https://github.com/openai/codex/issues/14513)
    *   **Impact:** Duplicate report of the "context loss" or "ghost prompt" issue affecting `gpt-5.4`.
*   [#14548 [BUG] Codex spawning too many mcp instances](https://github.com/openai/codex/issues/14548)
    *   **Impact:** The Desktop App is creating zombie MCP (Model Context Protocol) instances, leading to memory exhaustion.
    *   **Reaction:** Major resource leak affecting Mac users specifically.

**Windows & Desktop Ecosystem**
*   [#14450 [BUG] Top menu bar buttons do not respond to clicks on Windows](https://github.com/openai/codex/issues/14450)
    *   **Impact:** UI freeze in the Codex App on Windows 11; standard menus (File, Edit, Help) are non-functional.
    *   **Reaction:** High frustration (9 👍) regarding basic usability.
*   [#12661 [BUG] Markdown file:// links open in default browser instead of VS Code](https://github.com/openai/codex/issues/12661)
    *   **Impact:** Workflow disruption; clicking local file links in the VS Code extension opens Edge instead of the editor.
    *   **Reaction:** Highly requested fix (24 👍).

**CLI & Workflow Experience**
*   [#5957 [BUG] Auto compaction causes GPT-5-Codex to lose the plot](https://github.com/openai/codex/issues/5957)
    *   **Impact:** Auto-compaction aggressively deletes context, causing the model to forget it is mid-task or that it has edited files.
    *   **Reaction:** 23 comments highlight that this breaks multi-step coding tasks.
*   [#14345 [BUG] Directories now not trusted by default](https://github.com/openai/codex/issues/14345)
    *   **Impact:** Regression where `--dangerously-bypass-approvals-and-sandbox` fails to trust directories, breaking automation scripts.
    *   **Reaction:** Breaking change for power users.
*   [#2998 [FEATURE] IDE-integrated diff / approval](https://github.com/openai/codex/issues/2998)
    *   **Impact:** Request to bring the CLI's red/green diff approval flow into the VS Code extension.
    *   **Reaction:** Massive community demand (114 👍).

## 4. Key PR Progress

**Architecture & SDK**
*   [#14512 Start TUI on embedded app server](https://github.com/openai/codex/pull/14512)
    *   **Description:** Begins the migration of the TUI to run on top of the app-server, ensuring consistent logic between the CLI and IDE extensions.
    *   **Status:** Open (In Progress).
*   [#14446 Add Python SDK public API and examples](https://github.com/openai/codex/pull/14446)
    *   **Description:** Adds high-level `Codex` and `AsyncCodex` classes to the Python SDK, complete with documentation and runnable examples.
    *   **Status:** Open.
*   [#14556 Add realtime transcription mode for websocket sessions](https://github.com/openai/codex/pull/14556)
    *   **Description:** Introduces experimental modes (`dial_in`/`transcription`) for Realtime API configurations.

**Sandbox & Security**
*   [#14172 Fix: fail closed unsupported split windows sandboxing](https://github.com/openai/codex/pull/14172)
    *   **Description:** Updates Windows sandboxing to reject unsupported filesystem policies early, preventing threading errors.
*   [#14400 Use a private desktop for Windows sandbox](https://github.com/openai/codex/pull/14400)
    *   **Description:** Launches sandboxed children on a private desktop (`Winsta0\Default`) to isolate processes better on Windows.
*   [#14518 Add diagnostics for read_only_unless_trusted timeout flake](https://github.com/openai/codex/pull/14518)
    *   **Description:** Adds targeted logging and increases timeout buffers specifically for `read_only_unless_trusted` write-file scenarios to fix flakes.

**Features & Refactoring**
*   [#14554 Add codex tool support for realtime v2 handoff](https://github.com/openai/codex/pull/14554)
    *   **Description:** Advertises a `codex` function tool in Realtime V2 to handle handoffs as function call outputs.
*   [#14501 Dynamic tool calls: add param `exposeToContext`](https://github.com/openai/codex/pull/14501)
    *   **Description:** Allows hiding tools from the model's context window while keeping them active in the runtime (useful for `js_repl` or `code_mode`).
*   [#14511 Code_mode: Move exec params to @pragma](https://github.com/openai/codex/pull/14511)
    *   **Description:** Moves configuration (yield time, max tokens) from runtime API calls to a pragma comment (`// @exec: ...`) for better version control.

## 5. Feature Request Trends

**1. Unified IDE/CLI Experience**
*   There is a strong desire to bridge the gap between the CLI and IDE interfaces. The top request ([#2998](https://github.com/openai/codex/issues/2998)) asks for the CLI's visual diff/approval workflow to be integrated into VS Code/Cursor.

**2. Enhanced Context Management**
*   Users are frustrated with automatic context management. They want manual controls like `/compact` ([#11325](https://github.com/openai/codex/issues/11325)) and `/archive` ([#14076](https://github.com/openai/codex/issues/14076)), while also reporting that the current "auto-compaction" is too aggressive and deletes necessary context ([#5957](https://github.com/openai/codex/issues/5957)).

**3. Audio & Status Cues**
*   Requests for quality-of-life improvements such as audible completion sounds ([#3962](https://github.com/openai/codex/issues/3962)) and better visual indicators for "reasoning depth" ([#14356](https://github.com/openai/codex/issues/14356)) are trending.

## 6. Developer Pain Points

*   **Windows App Instability:** The Windows ecosystem is suffering from specific regressions, including non-responsive menu bars ([#14450](https://github.com/openai/codex/issues/14450)) and malformed file links ([#14079](https://github.com/openai/codex/issues/14079)), making the app difficult to use on this OS.
*   **Agent "Hallucination":** Multiple reports indicate that `gpt-5.4` is suffering from a context switching bug where it interrupts a new task to answer an old, unrelated prompt ([#14486](https://github.com/openai/codex/issues/14486), [#14513](https://github.com/openai/codex/issues/14513)). This severely impacts trust in agentic workflows.
*   **Sandbox Regressions:** Recent updates have broken trusted directory workflows ([#14345](https://github.com/openai/codex/issues/14345)) and caused segmentation faults on Linux ARM64 ([#14474](https://github.com/openai/codex/issues/14474)), preventing users from upgrading to the latest CLI versions.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest**
*Date: 2026-03-13*

### 1. Today's Highlights
The project is undergoing significant internal refactoring to consolidate the "Agent" architecture, with new abstractions like `AgentSession` being introduced to prepare for advanced subagent features. Simultaneously, performance improvements are landing via V8 compile caching, and critical UI fixes for the "Refreshed UX" composer layout are being prioritized to stabilize the user experience.

### 2. Latest Releases
*   **v0.35.0-nightly.20260313**: Minor documentation updates (theme screenshots) and internal CLI refactoring (renaming 'return' to 'enter').
*   **v0.34.0-preview.2**: Patch release cherry-picking fixes for stability.
*   **v0.33.1**: Stable patch release cherry-picking critical fixes.
    *   **[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.34.0-preview.0...v0.34.0-preview.1)**

### 3. Hot Issues
**1. [#18080 - Terminal UI Corruption in Shell Mode](https://github.com/google-gemini/gemini-cli/issues/18080)**
*Priority: High*
Entering Shell Mode (`!`) causes the UI layout to break, overlap text, and become inconsistent, effectively blocking the use of shell integration in Cloud Shell environments.

**2. [#18494 - Epic: Diagnostic Tooling Infrastructure](https://github.com/google-gemini/gemini-cli/issues/18494)**
*Priority: P1*
As the CLI grows in complexity, debugging agent behavior has become difficult. This epic tracks the creation of a dedicated "devtools" suite to streamline troubleshooting.

**3. [#17543 - Plan Mode in Untrusted Folders](https://github.com/google-gemini/gemini-cli/issues/17543)**
*Priority: Security/Feature*
Currently, `Plan` mode is blocked in untrusted folders (only `Default` is allowed). Users are requesting the ability to use planning capabilities safely even when folder trust isn't established.

**4. [#17602 - Remote Agents: Machine-to-Machine Auth](https://github.com/google-gemini/gemini-cli/issues/17602)**
*Priority: Future*
Tracking non-interactive, service-to-service authentication (OAuth 2.0 Client Credentials) to allow the CLI to act as its own user without manual login.

**5. [#17760 - Subagent Configurability (Policy, Hooks, Skills)]](https://github.com/google-gemini/gemini-cli/issues/17760)**
*Priority: Feature Epic*
An ongoing effort to ensure subagents support individual policies, hooks, and skills, rather than inheriting everything from the primary agent.

**6. [#18197 - Background Remote Agent Calls](https://github.com/google-gemini/gemini-cli/issues/18197)**
*Priority: Feature*
Request to support long-running remote agent calls in the background, similar to shell tool calls, to prevent blocking the main agent loop.

**7. [#18284 - Planning Subagent](https://github.com/google-gemini/gemini-cli/issues/18284)**
*Priority: Feature*
Exploring the creation of a dedicated subagent specifically for planning tasks, separate from the main agent loop.

**8. [#18329 - Auto-execute Read-Only MCP Tools](https://github.com/google-gemini/gemini-cli/issues/18329)**
*Priority: UX*
Request to allow read-only tools from MCP (Model Context Protocol) servers to execute automatically without user confirmation in all approval modes.

**9. [#18282 - Improve Codebase Investigator](https://github.com/google-gemini/gemini-cli/issues/18282)**
*Priority: Enhancement*
Plans to rename and restructure the "codebase investigator" agent to be more generic (e.g., `explore_context`) and improve its effectiveness.

**10. [#18384 - Auto-edit Plan Files](https://github.com/google-gemini/gemini-cli/issues/18384)**
*Priority: Feature*
Allow the agent to update plan files (e.g., checking off tasks) without requiring explicit user permission for every edit in Default/Auto-Edit modes.

### 4. Key PR Progress
**1. [#22269 - Enable V8 Compile Cache](https://github.com/google-gemini/gemini-cli/pull/22269)**
*Performance*
Injects `module.enableCompileCache()` at the entry point. For Node >= 22 users, this leverages bytecode cache to significantly improve CLI startup performance.

**2. [#22270 - Create `AgentSession` Abstraction](https://github.com/google-gemini/gemini-cli/pull/22270)**
*Core Refactor*
Adds a common `AgentSession` interface to serve as an adaptable core between different agent implementations, unifying the architecture.

**3. [#21212 - Implement Refreshed UX for Composer Layout](https://github.com/google-gemini/gemini-cli/pull/21212)**
*UI/Priority 1*
Promotes the modern 2-row status/footer layout to the default experience and stabilizes the `Composer` architecture.

**4. [#22256 - Refactor Session Browser Utilities](https://github.com/google-gemini/gemini-cli/pull/22256)**
*Refactor*
Extracts pure helper functions (`sortSessions`, `findTextMatches`) from the `SessionBrowser` UI component into separate utilities for better modularity and testability.

**5. [#21541 - EBUSY Fallback and TOML Parse Recovery](https://github.com/google-gemini/gemini-cli/pull/21541)**
*Core/Stability*
Improves policy engine resilience by extending rename error handling to support `EBUSY` fallbacks and recovering from TOML parsing errors.

**6. [#21522 - Improve Package Manager Detection (pnpm/yarn)](https://github.com/google-gemini/gemini-cli/pull/21522)**
*CLI Enhancement*
Refines global installation detection for `pnpm` and `yarn` (checking `PNPM_HOME` and common paths) to ensure correct update commands are suggested.

**7. [#20873 - Preserve `AskUser` State on Suspend](https://github.com/google-gemini/gemini-cli/pull/20873)**
*Bug Fix*
Fixes an issue where hitting Ctrl+Z (suspend) would destroy the state of the `AskUserDialog`, forcing the user to lose their draft answers.

**8. [#22272 - Logging for Model Quota Exhaustion](https://github.com/google-gemini/gemini-cli/pull/22272)**
*Platform/Priority 2*
Adds explicit logging when a model (e.g., `gemini-3-pro-preview`) hits its quota limit in "auto" mode before the system switches to a fallback.

**9. [#22275 - Fix Clipboard Tools on WSL2](https://github.com/google-gemini/gemini-cli/pull/22275)**
*Bug Fix*
Probes for clipboard tools even when `XDG_SESSION_TYPE` is unset, resolving issues specific to WSL2 environments where session type detection fails.

**10. [#21416 - Fix UI Flickering on Small Terminals](https://github.com/google-gemini/gemini-cli/pull/21416)**
*UI/Priority 1*
Implements dynamic height calculation for history/content to prevent flickering when the terminal window height is constrained.

### 5. Feature Request Trends
*   **Advanced Subagent Orchestration:** There is a massive push toward making subagents first-class citizens. Developers want subagents to run asynchronously, in parallel, and with isolated policies/skills.
*   **"Plan Mode" Evolution:** Requests indicate a desire to make "Plan" mode more robust—specifically allowing it in untrusted folders and creating dedicated subagents for planning.
*   **Agent-to-Agent (A2A) Communication:** A growing trend involves supporting remote agents, including machine-to-machine auth and background execution of remote tasks.

### 6. Developer Pain Points
*   **UI Stability:** Frequent reports of terminal UI corruption (especially in Shell Mode) and flickering on small screens remain top frustrations.
*   **State Loss:** Developers are annoyed by state loss during interruptions, whether it's `AskUser` dialogs losing input on `Ctrl+Z` or tool outputs not persisting correctly.
*   **Agent Debugging:** As the logic moves deeper into multi-agent systems, users are finding it increasingly difficult to diagnose *why* an agent took a specific action, prompting the request for diagnostic tooling.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest: 2026-03-13

## 1. Today's Highlights
The release of **v1.0.5-0** introduces experimental dynamic retrieval for MCP instructions and adds syntax highlighting for diffs, though user focus remains heavily on stability. Community sentiment is increasingly split, with a highly viral open issue (#53) criticizing the lack of response to workflow-breaking changes and noting a rise in community-created alternatives. While new features like reasoning configuration (#1048) are being closed, users are reporting significant friction with environment compatibility, particularly regarding VS Code integration and terminal state handling.

## 2. Releases
**v1.0.5-0**
*   **Dynamic Retrieval:** Experimental support for embedding-based retrieval of MCP and skill instructions per turn.
*   **Usability:** Added `/version` command to check for updates directly within the CLI session.
*   **Visuals:** Syntax highlighting added to `/diff` supporting 17 programming languages.
*   **Hooks:** Introduction of a `preCompact` hook to run commands before context compaction.

## 3. Hot Issues
*   [#53: Bring back the GitHub Copilot in the CLI commands to not break workflows](https://github.com/github/copilot-cli/issues/53)
    *   **Why it matters:** This is the most active discussion (30 comments, 72 👍). It represents a growing schism between the maintainers and the user base regarding workflow-breaking changes. The issue has become a hub for users seeking community-built alternatives.
*   [#1599: UI Bug - Copilot CLI output flickers/stutters constantly](https://github.com/github/copilot-cli/issues/1599)
    *   **Why it matters:** High visual impact bug affecting readability. Users report the "trembling" effect makes real-time reading difficult, impacting the core experience of the CLI.
*   [#768: Option to disable MCP Servers per default](https://github.com/github/copilot-cli/issues/768)
    *   **Why it matters:** Cost control. Users want granular control over MCP servers to prevent token consumption when specific tools aren't needed, highlighting concerns about usage efficiency.
*   [#1157: Global Hooks Configuration](https://github.com/github/copilot-cli/issues/1157)
    *   **Why it matters:** Competitive pressure. Users are comparing Copilot's hooks system unfavorably to Claude Code and Cursor, requesting global configuration to avoid repetitive per-repo setup.
*   [#892: Add sandbox mode to restrict Copilot CLI file access](https://github.com/github/copilot-cli/issues/892)
    *   **Why it matters:** Security and safety. There is strong demand (18 👍) for constraining the AI agent's filesystem permissions to a specific directory to prevent unauthorized access or modifications.
*   [#254: copilot-cli keeps asking to login again](https://github.com/github/copilot-cli/issues/254)
    *   **Why it matters:** Basic usability. Persistent authentication issues break the "start and go" flow expected of a CLI tool.
*   [#2012: Session file corrupted: raw U+2028/U+2029 in events.jsonl](https://github.com/github/copilot-cli/issues/2012)
    *   **Why it matters:** Data loss. A specific technical bug where Unicode line separators break JSON parsing, causing the `/resume` command to fail and losing session history.
*   [#2009: Terminal left in broken state after quitting](https://github.com/github/copilot-cli/issues/2009)
    *   **Why it matters:** Terminal hygiene. Users are forced to run `reset` manually after exiting the CLI because standard keyboard shortcuts print character sequences instead of functioning.
*   [#1723: /ide fails in VS Code - No active IDE workspaces found](https://github.com/github/copilot-cli/issues/1723)
    *   **Why it matters:** Integration friction. Users on the latest macOS cannot bridge the CLI with their IDE, breaking the unified development workflow.
*   [#1159: Bad Request - `tool_result` block must have a corresponding `tool_use`](https://github.com/github/copilot-cli/issues/1159)
    *   **Why it matters:** API stability. Users are encountering 400 errors related to tool result pairing, causing retries and session failures.

## 4. Key PR Progress
*   **[PR #2004: Alter PATH for login shells, not interactive shells](https://github.com/github/copilot-cli/pull/2004)** (Closed)
    *   **Summary:** Corrected a shell configuration issue.
    *   **Detail:** This PR fixes a modification logic where the installer was incorrectly altering `.bashrc` (interactive) rather than profile files (login), preventing duplicate PATH entries in nested shells.
    *   **Impact:** Improves the installation experience and keeps the shell environment cleaner.

*(Note: The data source indicates only 1 Pull Request updated in the last 24 hours.)*

## 5. Feature Request Trends
*   **BYOK (Bring Your Own Key) & Model Choice:** Users are requesting the ability to use non-default models (like Grok 4.1) via API keys to bypass context limitations (#1095).
*   **System-Wide Configuration:** A push is emerging to move configurations (hooks, skills) from a per-repo basis to a global user configuration to reduce duplication (#1157, #1978).
*   **Session Management:** Developers want smarter session history handling, specifically differentiating between `/new` (start fresh, keep history) and `/clear` (wipe history) (#1915).
*   **UI/UX Polish:** There are increasing requests for better rendering, specifically fixing flickering text (#1599, #1811) and correcting Markdown rendering issues like single-tilde strikethroughs (#1936).

## 6. Developer Pain Points
*   **IDE Integration Instability:** A significant portion of recent bugs relates to the Visual Studio Code integration, ranging from crashes when the CLI is embedded (#1984) to `/ide` failing to find workspaces (#1723).
*   **Terminal State Hygiene:** Multiple users report that the CLI does not properly restore the terminal state upon exit (#2009), rendering standard shortcuts (Ctrl+C, Ctrl+L) unusable until a manual `reset` is performed.
*   **Token Truncation Logic:** There is frustration with the context "truncator" logic, where long sessions die unexpectedly due to API limits (#2008) or improper tool-pairing logic causing 400 errors (#2014).
*   **International Input:** Specific localization issues are blocking users, such as the inability to type the `@` symbol on German keyboard layouts (#1999), making the tool unusable for those developers.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-03-13

## 1. Today's Highlights
Version **1.21.0** has been released, focusing heavily on API setup improvements, enhanced Windows support, and interactive session management. The release introduces `AgentHooks` for extensibility and attempts to resolve a series of persistent connection errors related to HTTP header sanitization on Linux platforms.

---

## 2. Releases
**Version 1.21.0 (2026-03-12)**
*   **Enhanced Setup & Auth:** Improved platform setup with API key verification and loading indicators. Added specific hints for 401 errors to guide users to the correct "Kimi Code" platform selection (Fixes #1412).
*   **Windows & Visualization:** Added "Open Dir" and "Copy DIR" actions to the visualization session page, extending "open-in" support to Windows.
*   **Context & System Prompts:** The system prompt is now persisted in `context.jsonl`, allowing frontends to access full conversation context and ensuring consistent reuse on session restore.
*   **Shell Interactions:** Implemented support for "steering" running agent turns, allowing users to input follow-up guidance while the agent is still processing.

---

## 3. Hot Issues
*   **[#1429 Windows Concurrency Bug](https://github.com/MoonshotAI/kimi-cli/issues/1429)**: Users on Windows 11 are reporting `Permission denied` errors due to concurrent file writes. Given the platform-specific nature and severity (Errno 13), this is a priority for Windows developers.
*   **[#1426 Input Buffer Regression](https://github.com/MoonshotAI/kimi-cli/issues/1426)**: In v1.21.0, a new feature allows typing during agent output, but users report their input disappears once the agent finishes. This significantly impacts the new interactive workflow.
*   **[#1427 Verbose Logging](https://github.com/MoonshotAI/kimi-cli/issues/1427)**: Users are experiencing "large amounts of log-like content" spewing into the terminal upon startup (v1.21.0, Darwin), cluttering the workspace.
*   **[#1428 Web Attachment Trigger](https://github.com/MoonshotAI/kimi-cli/issues/1428)**: A UI bug where clicking the attachment button in Web mode incorrectly executes a submit action before opening the attachment dialog.
*   **[#1420 Formula Rendering](https://github.com/MoonshotAI/kimi-cli/issues/1420)**: Web mode is currently failing to render inline formulas, affecting developers working with documentation or math-heavy code.
*   **[#1414 YOLO Mode Request](https://github.com/MoonshotAI/kimi-cli/issues/1414)**: Enhancement request to add a direct toggle for "YOLO mode" (auto-approval) directly within permission prompts, reducing friction for trusted operations.
*   **[#1227 Connection Error Legacy](https://github.com/MoonshotAI/kimi-cli/issues/1227)**: Although closed, the discussion on Linux connection errors highlights the fragility of the CLI on certain kernel versions.
*   **[#1131 AgentHooks Proposal](https://github.com/MoonshotAI/kimi-cli/pull/1131)**: An open proposal to add a plugin system (`AgentHooks`) for blocking dangerous commands and enforcing test checks. This represents a significant shift towards extensibility.

---

## 4. Key PR Progress
*   **[#1422 Steering Support (CLOSED)](https://github.com/MoonshotAI/kimi-cli/pull/1422)**: Merged. Adds the ability to "steer" the agent with follow-up input while an agent turn is still running, persisting this as a `SteerInput` event.
*   **[#1424 E2E Tests (OPEN)](https://github.com/MoonshotAI/kimi-cli/pull/1424)**: Adds end-to-end tests for shell PTY and session management, indicating a focus on stability for the interactive shell features.
*   **[#1410 Header Sanitization (OPEN)](https://github.com/MoonshotAI/kimi-cli/pull/1410)**: A critical fix to strip HTTP-unsafe characters (like `#`) from header values. This addresses `Connection error` issues caused by specific Linux kernel version strings.
*   **[#1419 WebSocket Stabilization (OPEN)](https://github.com/MoonshotAI/kimi-cli/pull/1419)**: Attempts to fix Web mode reconnection storms by stabilizing the WebSocket connect callback lifecycle.
*   **[#1421 Dismissal Logic (OPEN)](https://github.com/MoonshotAI/kimi-cli/pull/1421)**: Changes tool behavior to treat dismissed user questions as errors (stopping execution) rather than proceeding, preventing unintended actions.
*   **[#1415 Setup Improvements (CLOSED)](https://github.com/MoonshotAI/kimi-cli/pull/1415)**: Part of v1.21.0, this PR improved the API key verification UI and error handling for the initial setup flow.
*   **[#1417 System Prompt Persistence (CLOSED)](https://github.com/MoonshotAI/kimi-cli/pull/1417)**: Ensures the system prompt is saved in the session context, enabling better debugging and context restoration.
*   **[#1236 Trust Env (OPEN)](https://github.com/MoonshotAI/kimi-cli/pull/1236)**: Enables `trust_env` in `aiohttp`, allowing the CLI to respect standard proxy environment variables, which is crucial for corporate environments.

---

## 5. Feature Request Trends
*   **Control & Auto-Approval**: Users are asking for finer-grained control over permissions, specifically requesting a "YOLO mode" toggle directly in prompts to bypass repetitive confirmations (#1414).
*   **Extensibility**: The `AgentHooks` proposal (#1131) shows a strong desire to customize agent behavior, particularly for safety (blocking dangerous commands) and quality enforcement (checking for tests).
*   **API Key Flexibility**: There is a demand to support standard `kimi-code` API keys directly in the login flow, rather than just OAuth or managed sessions (#1412).

---

## 6. Developer Pain Points
*   **Platform-Specific Header Failures**: A cluster of issues (and fixes) regarding `platform.version()` returning strings with illegal characters (`#`, newlines) on Linux/Ubuntu, causing `h11` or `httpx` to reject all requests with "Illegal header value" errors.
*   **Windows File Locking**: The new Windows concurrency bug (#1429) causing `Permission denied` suggests that file handling logic needs review for Windows-specific locking behaviors.
*   **Input UX Regression**: The "disappearing input" bug (#1426) in v1.21.0 undermines the utility of the new concurrent typing feature, frustrating users trying to interact with the agent in real-time.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-03-13

## 1. Today's Highlights
Release **v1.2.25** focuses heavily on internal architecture, branding core types (ProviderID, ModelID, PermissionID) for improved type safety and extending support for non-OpenAI Azure models. Community discussions are intense today, highlighted by a controversial debate regarding project management efficiency and widespread reports of critical memory leaks affecting macOS users.

## 2. Releases
**v1.2.25 (Latest)**
*   **Core Enhancements**: Branded `ProviderID`, `ModelID`, `PermissionID`, `PtyID`, and `Quest` types to ensure stricter type safety across the codebase.
*   **Azure Support**: Added support for non-OpenAI Azure models utilizing completions endpoints.
*   **Build Optimization**: Removed external sourcemap generation to reduce the size of build artifacts.
*   **View Release**: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## 3. Hot Issues

**1. [CRITICAL] Severe Memory Leak and Disk Swell (#12687)**
*   **Why it matters**: Users are reporting kernel panics and forced restarts on macOS after extended use.
*   **Reaction**: High concern; reports indicate the issue persists across different setups despite the impressive TypeScript implementation.
*   **Link**: [#12687](https://github.com/anomalyco/opencode/issues/12687)

**2. [META] Is contributing worth the time? (#17271)**
*   **Why it matters**: A core contributor flagged "stale management," citing a lack of triage for ~6,000 open issues and 700 unreviewed PRs.
*   **Reaction**: Sparked a significant discussion about the sustainability and governance of the project.
*   **Link**: [#17271](https://github.com/anomalyco/opencode/issues/17271)

**3. [BUG] qwen3-coder fails to call edit tool (#6918)**
*   **Why it matters**: Popular model `qwen3-coder` (via OpenRouter) is stuck in a failure loop with `invalid_type` errors on the `oldString` argument.
*   **Reaction**: Affects users relying on this specific model for coding tasks.
*   **Link**: [#6918](https://github.com/anomalyco/opencode/issues/6918)

**4. [UI/UX] Copy To Clipboard not working (#4283)**
*   **Why it matters**: A long-standing issue (65 comments) regarding basic functionality failure in the `opentui` interface.
*   **Reaction**: High frustration (50 👍) as this breaks a fundamental workflow.
*   **Link**: [#4283](https://github.com/anomalyco/opencode/issues/4283)

**5. [PLATFORM] Linux Terminal UI Infinite Render Loop (#17122)**
*   **Why it matters**: The TUI enters an infinite render loop on Linux, spewing ANSI codes and rendering the interface unusable.
*   **Reaction**: Critical usability blocker for Linux users.
*   **Link**: [#17122](https://github.com/anomalyco/opencode/issues/17122)

**6. [PRIVACY] Unexpected iCloud/Photos Access Requests (#14982)**
*   **Why it matters**: Users are seeing prompts for Photos access even when projects are strictly in local code directories.
*   **Reaction**: Concerns over unnecessary permissions and potential privacy implications.
*   **Link**: [#14982](https://github.com/anomalyco/opencode/issues/14982)

**7. [WORKFLOW] Default to Plan Mode? (#4443)**
*   **Why it matters**: Users want to avoid accidental code edits when they intend to use the agent for planning.
*   **Reaction**: High demand (18 👍) for a configuration toggle to default to plan mode.
*   **Link**: [#4443](https://github.com/anomalyco/opencode/issues/4443)

**8. [FEATURE] Show Tokens / Second (#5374)**
*   **Why it matters**: Developers want to benchmark provider performance directly within the client.
*   **Reaction**: Very popular request (29 👍).
*   **Link**: [#5374](https://github.com/anomalyco/opencode/issues/5374)

**9. [CORE] Tool Calls Fail Without Starting Newline (#17253)**
*   **Why it matters**: Tool calls break if the prompt does not start with a newline, causing unexpected failures.
*   **Reaction**: Affects script reliability and integration workflows.
*   **Link**: [#17253](https://github.com/anomalyco/opencode/issues/17253)

**10. [BUG] `write` tool causes client to hang (#15675)**
*   **Why it matters**: The IDE client hangs indefinitely when the `write` tool creates a new file, despite the file being written successfully.
*   **Reaction**: Disruptive to development workflow in IDE integrations.
*   **Link**: [#15675](https://github.com/anomalyco/opencode/issues/15675)

## 4. Key PR Progress

*   **[PR #17288] Fix provider config loading**
    *   Resolves an issue where custom model loaders for config-defined providers (like LiteLLM proxies) failed to register correctly because the config merge step happened too late.
    *   [Link](https://github.com/anomalyco/opencode/pull/17288)

*   **[PR #7875] Fix permission pattern mismatch**
    *   Fixed a bug where tool-output directory permissions were rejected. The system was appending `/*` to patterns but checking against the pattern without it.
    *   [Link](https://github.com/anomalyco/opencode/pull/7875)

*   **[PR #7860] Fix macOS terminal restoration**
    *   Enhanced signal handling (SIGINT, SIGHUP, SIGTERM) to prevent the "dead terminal" issue where OpenCode exits leaving the terminal in a corrupted state.
    *   [Link](https://github.com/anomalyco/opencode/pull/7860)

*   **[PR #7765] Add OpenRouter OAuth PKCE**
    *   Implemented the OAuth PKCE flow for OpenRouter, allowing users to log in via their OpenRouter account rather than manual API keys.
    *   [Link](https://github.com/anomalyco/opencode/pull/7765)

*   **[PR #7709] Fix TUI arrow key navigation**
    *   Added `stopPropagation()` to prevent other handlers from interfering with arrow key selection in TUI questions.
    *   [Link](https://github.com/anomalyco/opencode/pull/7709)

*   **[PR #7672] Add notify hook system**
    *   Introduced a new `input_required` hook type with configurable timeout support for notifications.
    *   [Link](https://github.com/anomalyco/opencode/pull/7672)

*   **[PR #7154] Clean up pending permissions**
    *   Implemented logic to reject and clean up permission requests when a session is deleted, preventing orphaned prompts.
    *   [Link](https://github.com/anomalyco/opencode/pull/7154)

*   **[PR #7050] Add LRU eviction to LSP client**
    *   Implemented LRU (Least Recently Used) eviction for LSP file and diagnostics tracking to prevent unbounded memory growth in large codebases.
    *   [Link](https://github.com/anomalyco/opencode/pull/7050)

## 5. Feature Request Trends

*   **Performance Observability**: There is a strong push for **Tokens/Second** metrics and **OpenTelemetry (OTEL)** support to help developers debug bottlenecks and compare providers.
*   **Workflow Customization**: Users are asking for "YOLO Mode" (auto-approving prompts) and the ability to **default to Plan Mode** to prevent accidental edits.
*   **Provider Flexibility**: Requests for better caching control (e.g., `prompt_cache_ttl` for OpenRouter) and authentication methods (OAuth).
*   **Message Management**: Users want the ability to split model responses by question or edit them before continuing, preventing the AI from going down a "wrong path" and undoing too much work.

## 6. Developer Pain Points

*   **Resource Instability**: The most critical feedback revolves around **memory leaks** on macOS and **infinite render loops** on Linux, leading to system crashes or unusable terminals.
*   **Clipboard Reliability**: The clipboard functionality in `opentui` is cited as a persistent frustration (Issue #4283), failing to copy selected text.
*   **Project Governance**: Contributors are expressing burnout due to the massive backlog of unreviewed PRs and untriaged issues, questioning the viability of contributing.
*   **Tool Validation**: There are recurring issues with tool calls failing due to formatting quirks (e.g., missing newlines) or invalid arguments passed by specific models (e.g., `qwen3-coder`).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-03-13

## 1. Today's Highlights
Qwen Code released **v0.12.2**, focusing on critical stability fixes for session management and IDE connections, alongside a new nightly build enhancing OAuth integration. The repository is abuzz with activity surrounding the upcoming **v0.13.0** milestone, particularly the introduction of a comprehensive **Event Hooks System** and an **Agent Collaboration Arena** designed for multi-model benchmarking. Concurrently, the community is actively debating quality-of-life improvements, with strong advocacy for standard features like `/undo` commands and better multi-model session isolation.

## 2. Releases
*   **v0.12.2 (Stable)**
    *   **Summary**: This release prioritizes stability and bug fixes.
    *   **Key Fixes**: Resolved an issue where the export command incorrectly used `loadLastSession` instead of the current session ID. It also promotes `yiliang114` as a code owner for core IDE components.
    *   [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.2)
*   **v0.12.2-nightly.20260313**
    *   **Summary**: Cutting-edge build featuring improvements to the Model Context Protocol (MCP).
    *   **Key Features**: Enhanced OAuth authentication UX with post-auth feedback, internationalization (i18n), and bug fixes.
    *   [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.2-nightly.20260313.46d57afb)

## 3. Hot Issues
*   **#2339: Telegram Bot Mode** ([Open](https://github.com/QwenLM/qwen-code/issues/2339))
    *   *Why it matters*: A popular feature request proposing a `--telegram` flag to run Qwen Code as a Telegram bot, allowing for remote interaction and asynchronous coding workflows.
*   **#2194: Git Worktree Support for Parallel Sessions** ([Open](https://github.com/QwenLM/qwen-code/issues/2194))
    *   *Why it matters*: Addresses a significant architectural limitation where multiple sessions conflict. The proposed `--worktree` flag would enable true parallelism using Git worktrees.
*   **#2342: Request for `/undo` Command** ([Open](https://github.com/QwenLM/qwen-code/issues/2342))
    *   *Why it matters*: High-friction complaint. Users argue that the lack of an `/undo` command is a critical safety gap, as a single mistake can currently be difficult to recover from without version control.
*   **#2338: Skill Activation Confusion** ([Open](https://github.com/QwenLM/qwen-code/issues/2338))
    *   *Why it matters*: Highlights UX friction with the `/skills` system. Users expect installed skills (e.g., shadcn) to auto-activate based on context, rather than remaining passive until explicitly invoked.
*   **#2101 & #2122: Input Blocking Issues** ([Closed](https://github.com/QwenLM/qwen-code/issues/2101)) / ([Closed](https://github.com/QwenLM/qwen-code/issues/2122))
    *   *Why it matters*: Critical bugs affecting basic typing functionality (space bar input and character separation), particularly on Windows and Ubuntu servers. Their closure suggests recent fixes may be in the nightly builds.
*   **#2244: Windows Shell Command Output** ([Open](https://github.com/QwenLM/qwen-code/issues/2244))
    *   *Why it matters*: A persistent bug where `run_shell_command` returns empty output on Windows despite successful execution, breaking the agent's ability to verify actions.
*   **#2191 & #2146: API Rate Limiting (429 Errors)** ([Closed](https://github.com/QwenLM/qwen-code/issues/2191)) / ([Closed](https://github.com/QwenLM/qwen-code/issues/2146))
    *   *Why it matters*: Users facing "Too Many Requests" errors on DashScope for days. The status suggests throttling or retry logic needs refinement.
*   **#1951: Clipboard Image Support** ([Open](https://github.com/QwenLM/qwen-code/issues/1951))
    *   *Why it matters*: A frequent request to paste screenshots directly from the clipboard into the chat interface, removing the friction of saving files manually.
*   **#2319: Uncontrolled File Reading** ([Closed](https://github.com/QwenLM/qwen-code/issues/2319))
    *   *Why it matters*: Reports of the tool attempting to read entire directories (e.g., 10k+ files) without sampling limits, leading to context overflow and crashes.
*   **#2293: VS Code Tab Key Behavior** ([Closed](https://github.com/QwenLM/qwen-code/issues/2293))
    *   *Why it matters*: UX inconsistency where the Tab key navigated UI focus instead of autocompleting commands, disrupting muscle memory for CLI users.

## 4. Key PR Progress
*   **#2203: Event Hooks System** ([Open](https://github.com/QwenLM/qwen-code/pull/2203))
    *   *Description*: A massive feature for v0.13.0 implementing 10 core event hooks (session lifecycle, tool execution, subagent operations) to allow deep customization and extensibility.
*   **#1912: Agent Collaboration Arena** ([Open](https://github.com/QwenLM/qwen-code/pull/1912))
    *   *Description*: Introduces a "competitive mode" where tasks are run in parallel across multiple models (using Git worktrees) to compare outputs.
*   **#2344: FileSystemService Refactor** ([Open](https://github.com/QwenLM/qwen-code/pull/2344))
    *   *Description*: Critical backend refactor aligning the FileSystemService with ACP standards, specifically fixing encoding issues (e.g., GBK) and write operations on non-UTF-8 files.
*   **#2322: IDE Connection Fixes** ([Closed](https://github.com/QwenLM/qwen-code/pull/2322))
    *   *Description*: Resolves connection failures between VS Code/Cursor clients and the IDE Companion extension, particularly in cloud environments like GitHub Codespaces.
*   **#2337: Subagent Token Budgeting** ([Open](https://github.com/QwenLM/qwen-code/pull/2337))
    *   *Description*: Adds granular configuration for subagent context management and output formatting, helping optimize costs and performance.
*   **#2330: Browser-based Remote Control** ([Open](https://github.com/QwenLM/qwen-code/pull/2330))
    *   *Description*: An experimental feature adding an HTTP/WebSocket server to allow CLI interaction via a web UI (accessible at localhost:7373).
*   **#2328: Enhanced Export Metadata** ([Open](https://github.com/QwenLM/qwen-code/pull/2328))
    *   *Description*: Improves the export feature to include session metadata, token usage stats, and file operation counts in the HTML output.
*   **#2327: MCP OAuth UX Improvements** ([Closed](https://github.com/QwenLM/qwen-code/pull/2327))
    *   *Description*: Polishes the MCP authentication flow with better feedback, i18n support, and clear auth options.
*   **#2324: LS Tool Truncation** ([Closed](https://github.com/QwenLM/qwen-code/pull/2324))
    *   *Description*: Prevents the `ls` tool from crashing the terminal by adding output limits for large directories.
*   **#2315: Remove QR Code from OAuth UI** ([Closed](https://github.com/QwenLM/qwen-code/pull/2315))
    *   *Description*: Fixes severe screen flickering on Windows 11 PowerShell by removing the QR code animation during OAuth.

## 5. Feature Request Trends
*   **Multi-Model Orchestration**: There is a clear trend towards tools that manage complexity between different AI models. The "Agent Arena" and "Git Worktree" requests indicate users want to pit models against each other or run them in parallel isolation.
*   **Enhanced Control Flow**: Users are demanding better control over the agent's actions. This is evident in requests for `/undo`, `--worktree` isolation, and the new "Hooks" system to interrupt or modify agent behavior.
*   **Input Flexibility**: Developers want frictionless input methods. Requests for `/skills` auto-detection, `/` command Tab completion (now fixed), and clipboard paste support highlight a desire to reduce keystrokes and context switching.

## 6. Developer Pain Points
*   **Windows Compatibility**: Several issues (#2101, #2244, #2254) point to specific instability on Windows, ranging from shell command outputs returning empty to PowerShell screen flickering and input blocking.
*   **Lack of Safety Nets**: The aggressive demand for an `/undo` command (#2342) signals that users fear making irreversible changes. The current "all or nothing" approach to file editing causes anxiety.
*   **Resource Management**: Developers are frustrated by tools that lack "stopping" logic. Issues involving the agent reading 10k files (#2319) or ignoring cancellation commands (#1920) suggest a need for smarter guardrails to prevent token waste and context overflow.

</details>

<details>
<summary><strong>LLXprt-Code</strong> — <a href="https://github.com/vybestack/llxprt-code">vybestack/llxprt-code</a></summary>

# LLXprt-Code Community Digest | 2026-03-13

**Status Report:** `github.com/vybestack/llxprt-code`

---

### 1. Today's Highlights

Development activity is currently focused on infrastructure maintenance and upstream synchronization rather than feature releases. The primary effort involves a major upstream sync with `gemini-cli` (v0.23.0 to v0.24.5), which introduces the new "Agent Skills" system. Meanwhile, technical debt is being addressed with a renewed call to refactor the oversized `AnthropicProvider.ts` file.

### 2. Releases

**No new releases published in the last 24 hours.**

---

### 3. Hot Issues

1.  **[Code Quality] Break up AnthropicProvider.ts (#1572)**
    *   **Why it matters:** The core provider file has grown to 3,021 lines, making it difficult to maintain and prone to bugs. Refactoring is critical for long-term stability.
    *   **Community Reaction:** Low engagement currently, but high technical priority.
    *   [Link](https://github.com/vybestack/llxprt-code/issues/1572)

2.  **[Bug] Claude stopping after thinking block again (#1729)**
    *   **Why it matters:** Users are experiencing interruptions in extended reasoning chains, specifically affecting the "Loopbreaker" functionality when analyzing financial datasets.
    *   **Community Reaction:** Active troubleshooting in comments.
    *   [Link](https://github.com/vybestack/llxprt-code/issues/1729)

---

### 4. Key PR Progress

1.  **[Upstream Sync] gemini-cli v0.23.0 to v0.24.5 (#1717)**
    *   **Description:** A significant sync integrating 121 upstream commits. The highlight is the introduction of the **Agent Skills system**, which adds core infrastructure for skill activation, status bar integration, and extensible tool mappings.
    *   **Status:** Open | Review pending.
    *   [Link](https://github.com/vybestack/llxprt-code/pull/1717)

---

### 5. Feature Request Trends

Based on the active pull requests and issue tracker:

*   **Agent Skills System:** There is a clear push towards modular, extensible agent capabilities (moving from monolithic prompts to skill-based activation).
*   **Infrastructure Modernization:** Heavy emphasis on staying in sync with upstream `gemini-cli` changes rather than diverging.

---

### 6. Developer Pain Points

*   **Monolithic Code Structure:** Developers are struggling with the sheer size of files like `AnthropicProvider.ts` (3k+ lines), indicating a need for better separation of concerns.
*   **LLM Reliability:** Issues with models stopping prematurely after "thinking" blocks suggest friction in handling long-context or multi-step reasoning outputs.

</details>

<details>
<summary><strong>Pi Mono-Repo</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Mono-Repo Community Digest: 2026-03-13

## 1. Today's Highlights
The Pi Mono-Repo community is currently focused heavily on platform stability, specifically regarding Windows compatibility and input handling in the TUI. A critical security audit report was submitted today, alongside important fixes for credential leakage in remote pods setups. Despite the high volume of issues closed in the last 24 hours, several bugs regarding keybindings and tool schema generation remain active.

## 2. Releases
*No new releases detected in the last 24 hours.*

## 3. Hot Issues
*   **[#2092 Security Audit Report: pi-mono](https://github.com/badlogic/pi-mono/issues/2092)** (OPEN)
    *   **Why it matters:** A third-party audit flagged critical vulnerabilities, including Stored XSS (SVG), Command Injection, and Path Traversal flaws.
    *   **Reaction:** Community awaits maintainers' response to these severe security claims.
*   **[#2070 Printable characters from numpad are not recognized](https://github.com/badlogic/pi-mono/issues/2070)** (OPEN)
    *   **Why it matters:** Numpad input (0-9, +, -, *, /) fails to register, returning unexpected characters.
    *   **Reaction:** Affecting usability for users reliant on keyboard navigation.
*   **[#2066 Startup crash: TimeoutError when downloading fd/ripgrep](https://github.com/badlogic/pi-mono/issues/2066)** (OPEN)
    *   **Why it matters:** First-run installations crash if `fd` or `ripgrep` are missing, blocking new users.
    *   **Reaction:** High priority as it impacts the onboarding experience.
*   **[#2100/#2099 Tool schema missing required array causes API 400 error](https://github.com/badlogic/pi-mono/issues/2100)** (OPEN)
    *   **Why it matters:** Tools with optional-only parameters generate invalid JSON Schema for OpenAI, causing immediate failures.
    *   **Reaction:** Breaking core agent functionality; requires urgent patch.
*   **[#2094 pods setup should not leak HF_TOKEN and PI_API_KEY](https://github.com/badlogic/pi-mono/issues/2094)** (OPEN)
    *   **Why it matters:** Sensitive credentials are leaked into process args and remote `.bashrc` files during setup.
    *   **Reaction:** Addressed in PR #2093, but issue remains open until verified.
*   **[#2080 Windows: system prompt exposes cwd with backslashes](https://github.com/badlogic/pi-mono/issues/2080)** (OPEN)
    *   **Why it matters:** Windows paths with backslashes in the system prompt cause bash path mangling in Git Bash/MSYS.
    *   **Reaction:** Part of a larger effort to fix Windows support (see PRs #1965, #1966).
*   **[#2097 Allow supplying a custom session ID in newSession()](https://github.com/badlogic/pi-mono/issues/2097)** (OPEN)
    *   **Why it matters:** Blocks building multi-tenant platforms where session IDs must be synchronized across databases.
    *   **Reaction:** PR #2095 is already merged to address this.
*   **[#2050 Support forking agent instances](https://github.com/badlogic/pi-mono/issues/2050)** (OPEN)
    *   **Why it matters:** Highly requested (3 👍) feature for creating sub-agents with shared state/memory.
    *   **Reaction:** Significant architectural capability requested by power users.
*   **[#2091 Codex SSE server_error not retried](https://github.com/badlogic/pi-mono/issues/2091)** (OPEN)
    *   **Why it matters:** Transient server errors crash the session instead of retrying, causing data loss.
    *   **Reaction:** Critical reliability issue for production agents.
*   **[#2086 Shift+Tab keybindings stopped working in WezTerm](https://github.com/badlogic/pi-mono/issues/2086)** (CLOSED)
    *   **Why it matters:** TUI regression broke specific keybindings in popular terminals like WezTerm.
    *   **Reaction:** Fixed in PR #2081.

## 4. Key PR Progress
*   **[#2093 fix(pods): stop leaking setup credentials](https://github.com/badlogic/pi-mono/pull/2093)** (CLOSED - Merged)
    *   Removes credential passing to remote setup commands and prevents persisting tokens in `~/.bashrc` on pods.
*   **[#2095 feat(session-manager): allow supplying custom session ID](https://github.com/badlogic/pi-mono/pull/2095)** (CLOSED - Merged)
    *   Adds an optional `id` field to `newSession()`, allowing developers to manage their own session IDs for multi-tenant apps.
*   **[#2096 fix(ai): preserve Anthropic thinking block signatures](https://github.com/badlogic/pi-mono/pull/2096)** (CLOSED - Merged)
    *   Resolves multi-turn conversation failures with Anthropic extended thinking by correctly handling thinking blocks.
*   **[#2081 fix(tui): restore shift+tab in xterm modifyOtherKeys mode](https://github.com/badlogic/pi-mono/pull/2081)** (CLOSED - Merged)
    *   Fixes the `Shift+Tab` regression in WezTerm and other terminals using xterm sequences.
*   **[#2027 fix(tui): normalize tabs in editor setText](https://github.com/badlogic/pi-mono/pull/2027)** (CLOSED - Merged)
    *   Ensures tabs from external editors (Ctrl+G) are normalized to spaces, preventing rendering crashes.
*   **[#1966 Fix Windows shell and path handling](https://github.com/badlogic/pi-mono/pull/1966)** (OPEN)
    *   A comprehensive overhaul to route commands through the shell abstraction and normalize Windows paths.
*   **[#1965 fix(coding-agent): harden --session path handling](https://github.com/badlogic/pi-mono/pull/1965)** (OPEN)
    *   Specifically targets session loading issues on Windows/Git Bash by handling backslash stripping.
*   **[#2082 fix(tui): wordWrapLine overflow with wide chars](https://github.com/badlogic/pi-mono/pull/2082)** (CLOSED - Merged)
    *   Fixes editor crashes when wide characters (CJK) appear at word wrap boundaries.
*   **[#2006 fix(tui): stop wide input slice overflow](https://github.com/badlogic/pi-mono/pull/2006)** (CLOSED - Merged)
    *   Resolves horizontal scrolling bugs and rendering issues with full-width text.
*   **[#2009 fix(coding-agent): support PI_CODING_AGENT_DIR env var](https://github.com/badlogic/pi-mono/pull/2009)** (CLOSED - Merged)
    *   Updates example extensions to respect the global config directory environment variable.

## 5. Feature Request Trends
*   **Multi-tenancy & State Management:** Users are building platforms on top of Pi and require better control over session IDs (#2097) and the ability to fork agent instances (#2050) for state isolation or handoffs.
*   **Extension Customization:** Requests for deeper integration points, such as customizing `/tree` labels (#2083) and injecting environment variables via settings (#2088).
*   **Usability Polish:** Calls for auto-generating session names (#2090) and denser table rendering (#2076) to improve the TUI experience.

## 6. Developer Pain Points
*   **Windows Compatibility:** Developers on Windows continue to face significant friction, ranging from path mangling with backslashes (#2080) to argument stripping in Git Bash (#1965).
*   **TUI Input Instability:** Recent updates have introduced regressions in input handling, breaking numpad input (#2070), tab completion for scripts (#2087), and specific keybindings in WezTerm (#2086).
*   **Tooling Integration:** Managing JSON Schema generation for tools with optional parameters is proving difficult, leading to API errors (#2100). Additionally, replay logic is sensitive to empty response items (#2098).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*