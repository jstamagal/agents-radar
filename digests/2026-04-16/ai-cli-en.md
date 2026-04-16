# AI CLI Tools Community Digest 2026-04-16

> Generated: 2026-04-16 00:18 UTC | Tools covered: 8

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

# Cross-Tool Analysis: AI CLI Tools Community Digest (2026-04-16)

## 1. Ecosystem Overview
The AI CLI ecosystem is currently undergoing a critical transition from experimental assistants to robust development environments. While **OpenAI Codex** and **Charm Crush** are aggressively expanding platform capabilities through marketplaces and extensibility hooks, **Claude Code** and **GitHub Copilot CLI** are facing significant stability headwinds as they scale user bases. A dominant trend across all tools is the shift toward **agentic workflows**—sub-agents, multi-agent teams, and background processes—which is exposing new fragilities in resource management, permissions systems, and user observability. Furthermore, the removal of generous free tiers (notably at **Qwen Code**) and stricter rate limits indicate the sector is moving toward sustainable monetization, sparking friction regarding cost transparency and quota management.

## 2. Activity Comparison

| Tool | Release Status | Hot Issues (Severity) | Active PRs (Activity) | Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.110 (Major TUI update) | **Critical** (Freezes, Mem Leaks) | High (10+ merged) | UI Stability, Subagent visibility |
| **OpenAI Codex** | v0.121.0 (Marketplace), v0.122.0-alpha | **High** (Token burn, macOS CPU heat) | Very High (Infrastructure overhaul) | Extensibility, Remote Execution (MCP) |
| **Charm Crush** | v0.58.0 (Cleanup) | **Medium** (Grep hangs, Locale bug) | Moderate (Hooks implementation) | Extensibility (Hooks), Terminal Multiplexing |
| **Gemini CLI** | v0.40.0-nightly, v0.38.1 (Hotfix) | **Critical** (Agent hang, Loop stall) | High (Local models, Voice mode) | Performance, Local Gemma support |
| **GitHub Copilot CLI**| v1.0.28 (Stability patch) | **High** (Rate limits, Leaking FDs) | Low (Maintenance) | Rate Limiting, Integration parity |
| **Kimi Code CLI** | v1.35.0 (UX fixes) | **Medium** (Hidden thinking traces) | Moderate (OAuth, Settings TUI) | Transparency ("Thinking" stream) |
| **OpenCode** | v1.4.6 (Stability/Binary fix) | **Critical** (AVX2 breakage, Quota drain) | High (File locking, npm fixes) | Enterprise Auth, Granular Permissions |
| **Qwen Code** | v0.14.5 (Policy enforcement) | **Critical** (Free tier removal) | Moderate (Shift+Enter, Hooks) | Billing enforcement, Team features |

## 3. Shared Feature Directions
*   **Extensibility & Hooks:**
    *   **Charm Crush, OpenCode, Qwen Code:** Active development on generalized **Hooks Systems** (PreToolUse, Prompt Hooks, HTTP Hooks).
    *   **OpenAI Codex:** Formalizing a **Marketplace** for plugins.
    *   **Trend:** Moving away from hardcoded features to event-driven architectures where external scripts/tools can hook into the agent lifecycle.
*   **Observability & Transparency:**
    *   **Claude Code, Kimi Code:** Strong demand for visibility into **"Thinking"** processes (Extended Thinking) and sub-agent activities.
    *   **OpenAI Codex, GitHub Copilot:** Requests for **Manual `/compact`** commands and granular control over context windows to prevent "burning tokens."
    *   **Gemini CLI:** Implementing **Telemetry traces** to debug complex failures.
*   **Workflow Automation (Agents):**
    *   **Claude Code, Qwen Code, OpenCode:** Implementing **Agent Teams** or parallel sub-agent coordination.
    *   **Shared Pain Point:** Lack of visibility into what these sub-agents are doing ("Invisible Subagents" in Claude Code, "Nested agents" in Copilot).
*   **Local-First & Privacy:**
    *   **Gemini CLI, OpenCode:** Major pushes for **Local Model** support (`gemini gemma` setup, OpenCode local providers).
    *   **Charm Crush, Qwen Code:** Adding support for diverse APIs (OpenCode Go/Zen) to avoid vendor lock-in.

## 4. Differentiation Analysis
*   **Architecture:**
    *   **OpenAI Codex** is betting heavily on **Remote Execution (MCP)**, building complex transport layers to sandbox tools.
    *   **Charm Crush** focuses on the **TUI (Terminal UI)** experience, adding split panes and tab management to act as a full IDE replacement within the terminal.
    *   **OpenCode** leans into **Enterprise/Effect** systems (using `Effect` idioms for locking/state), targeting enterprise security and npm registry integration.
*   **User Experience:**
    *   **Claude Code** markets a "Buddy" companion model (currently controversial due to removal), focusing on personality alongside utility.
    *   **Kimi Code** emphasizes **Reasoning Transparency**, defaulting `show_thinking_stream` to `true` to build user trust in the model's logic.
    *   **GitHub Copilot CLI** functions as an extension of the GitHub ecosystem, prioritizing integration over standalone power.
*   **Target Audience:**
    *   **Qwen Code & Kimi Code:** Strong focus on Asian markets (encoding fixes for Chinese Windows, Kimi K2.6 model integration).
    *   **OpenCode & GitHub Copilot:** Geared toward enterprise teams (SCM integrations, strict auth, workspace management).

## 5. Community Momentum & Maturity
*   **Most Active / Rapidly Iterating:** **OpenAI Codex** demonstrates the highest velocity, with aggressive moves toward Marketplace ecosystems and major architectural refactors (MCP). **Charm Crush** is also moving fast, introducing significant features like hooks and multiplexing in quick succession.
*   **Stability Concerns (Maturity Plateau):** **Claude Code** and **GitHub Copilot CLI** are showing signs of scaling pains. Critical bugs (memory leaks, freezing prompts, file descriptor leaks) and controversial UI changes (removing `/buddy`) suggest growing pains as user bases expand.
*   **At-Risk Churn:** **Qwen Code** faces the highest risk of community churn due to the abrupt end of its free tier. The sentiment is currently negative, with users actively seeking alternatives.
*   **Steady Growth:** **Gemini CLI** and **OpenCode** show consistent, mature development rhythms, balancing new feature integration (Voice mode, Mobile touch) with necessary bug fixes.

## 6. Trend Signals for Developers
*   **The "Agentic" Tax:** The industry is moving toward multi-agent systems, but this introduces new failure modes (agents getting stuck, hidden context consumption, high costs). **Signal:** Prioritize tools that offer sub-agent debugging and session isolation.
*   **Context Management is King:** As context windows grow, inefficient management (token burning, compaction bugs) becomes the primary cost and reliability driver. **Signal:** Look for tools with manual context control (`/compact`, `/focus`) or transparent cache usage.
*   **Platform vs. Tool:** Tools are evolving into platforms. The rise of **Marketplaces (Codex)** and **Hooks (Crush/OpenCode)** signals a shift away from monolithic CLIs to extensible environments.
*   **OS Compatibility Friction:** Linux and Windows support remains a second-class citizen for many tools originally built for macOS (evident in specific path-handling and clipboard bugs across Copilot, OpenCode, and Kimi). **Signal:** For heterogeneous teams, check platform-specific issue trackers before adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Data as of April 16, 2026

## 1. Top Skills Ranking
Based on the most recent and active Pull Requests, the following Skills are leading community discussions and development efforts:

*   **[document-typography](https://github.com/anthropics/skills/pull/514)** (PGTBoos)
    *   **Status:** Open
    *   **Functionality:** Addresses typographic quality in AI-generated documents, specifically preventing orphaned words, widowed section headers, and numbering misalignment.
    *   **Highlight:** Targets a specific visual quality gap ("users rarely ask for good typography, but always notice when it's bad").

*   **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (eovidiu)
    *   **Status:** Open
    *   **Functionality:** Meta-skills designed to evaluate other skills across five dimensions (Structure, Documentation, Reliability, Security, Performance).
    *   **Highlight:** Introduces essential tooling for maintaining ecosystem health and trust as the number of community skills grows.

*   **[OpenDocument (ODT) Support](https://github.com/anthropics/skills/pull/486)** (GitHubNewbie0)
    *   **Status:** Open
    *   **Functionality:** Enables creation, parsing, and filling of OpenDocument Text (.odt) and Spreadsheet (.ods) formats, including conversion to HTML.
    *   **Highlight:** Expands document interoperability beyond MS Office formats to open standards (LibreOffice/ISO).

*   **[frontend-design (Revision)]](https://github.com/anthropics/skills/pull/210)** (justinwetch)
    *   **Status:** Open
    *   **Functionality:** Clarifies and improves the actionability of the frontend-design skill, ensuring instructions are executable within a single conversation.
    *   **Highlight:** Focuses on "instruction hygiene"—making sure prompts are concrete rather than abstract.

*   **[SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** (amitlals)
    *   **Status:** Open
    *   **Functionality:** Integrates SAP's open-source tabular foundation model for predictive analytics on business data.
    *   **Highlight:** Bridges advanced AI agent workflows with enterprise ERP systems.

*   **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** (junaid1460)
    *   **Status:** Open
    *   **Functionality:** Adds a CLI skill for generating images (Imagen 3.0) and videos (Veo 3.1) via Masonry AI.
    *   **Highlight:** Extends Claude Code's capabilities into multimedia generation and job management.

*   **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (4444J99)
    *   **Status:** Open
    *   **Functionality:** A comprehensive guide covering the full testing stack (Unit, Integration, E2E), including philosophy and anti-patterns.
    *   **Highlight:** Moves beyond basic test generation to teaching testing architecture and strategy.

## 2. Community Demand Trends
Analysis of active Issues reveals specific gaps users are eager to fill:

*   **System Reliability & Stability:** The most commented issues ([#62](https://github.com/anthropics/skills/issues/62), [#61](https://github.com/anthropics/skills/issues/61), [#406](https://github.com/anthropics/skills/issues/406)) highlight critical frustration with skills disappearing, failing to load (404 errors), and internal server errors during upload.
*   **Skill Governance & Trust:** There is a strong demand for better vetting mechanisms. Issue [#202](https://github.com/anthropics/skills/issues/202) calls for updates to `skill-creator` best practices, while [#492](https://github.com/anthropics/skills/issues/492) flags security risks regarding the `anthropic/` namespace impersonation.
*   **Enterprise Integration:** Users are actively requesting better support for AWS Bedrock ([#29](https://github.com/anthropics/skills/issues/29)) and enterprise SSO workflows, specifically removing dependencies on individual `ANTHROPIC_API_KEY`s for tooling ([#532](https://github.com/anthropics/skills/issues/532)).
*   **Workflow & Distribution:** Users want seamless skill sharing within organizations ([#228](https://github.com/anthropics/skills/issues/228)) and are exploring the potential of packaging Skills as MCPs ([#16](https://github.com/anthropics/skills/issues/16)).

## 3. High-Potential Pending Skills
These active PRs represent functionality likely to land soon based on recent activity:

*   **[Contributing Guidelines](https://github.com/anthropics/skills/pull/509)** (narenkatakam) - Addresses the "community health gap" by adding a `CONTRIBUTING.md`, which is currently the most impactful single file for onboarding.
*   **[shodh-memory](https://github.com/anthropics/skills/pull/154)** (varun29ankuS) - A highly requested feature type: persistent context/memory that allows agents to recall information across sessions.
*   **[sensory (macOS Automation)](https://github.com/anthropics/skills/pull/806)** (AdelElo13) - Native macOS automation via AppleScript, offering a more robust alternative to screenshot-based computer use.
*   **[x402 BSV Auth/Micropayments](https://github.com/anthropics/skills/pull/374)** (Calgooon) - Integrates micropayment functionality directly into natural language workflows.

## 4. Skills Ecosystem Insight
The community is currently pivoting from experimental skill creation to **operational hardening**—demanding reliable core infrastructure (memory, stable loading), better enterprise integration (Bedrock, SSO), and standardized quality control (meta-analyzers and contributing guidelines).

---

# Claude Code Community Digest: 2026-04-16

## Today's Highlights
Claude Code v2.1.110 introduces a native `/tui` command for flicker-free rendering and reorganizes view toggling, addressing long-standing UI stability requests. Meanwhile, the community is in active revolt regarding the mysterious removal of the `/buddy` skill, which has become the most upvoted topic in the repository's history.

## Releases
**v2.1.110** & **v2.1.109**
- **New `/tui` command:** Enables flicker-free rendering within the current conversation context (run `/tui fullscreen`).
- **Keybinding changes:** `Ctrl+O` now toggles transcript verbosity; the focus view has moved to a dedicated `/focus` command.
- **Visual improvements:** v2.1.109 adds a rotating progress hint to the extended-thinking indicator.
- *(Note: Changelog entry for v2.1.110 was truncated in source data).*

## Hot Issues
1. **[#45596 - Bring Back Buddy](https://github.com/anthropics/claude-code/issues/45596)** *(739 👍)*
   The removal of the `/buddy` companion feature in v2.1.97 has caused a significant community outcry. Users report feeling a loss of "personality" and utility in the terminal, demanding its restoration.

2. **[#26224 - Hanging/Freezing Prompts](https://github.com/anthropics/claude-code/issues/26224)** *(100 👍)*
   A critical performance regression where Claude Code hangs for 5–20 minutes on prompts remains open, severely impacting developer workflow reliability.

3. **[#16561 - Compound Bash Permissions](https://github.com/anthropics/claude-code/issues/16561)** *(140 👍)*
   The permission system blocks compound bash commands (`&&`, `|`) even if individual components are allowed. Users are requesting granular parsing to reduce constant approval interruptions.

4. **[#7229 - Terminal Window Title Settings](https://github.com/anthropics/claude-code/issues/7229)** *(47 👍)*
   Developers want the ability to customize terminal window titles, a quality-of-life improvement for managing multiple Claude Code sessions.

5. **[#30457 - Google Drive Connector Bug](https://github.com/anthropics/claude-code/issues/30457)**
   Users on macOS report that despite a successful connection, Google Drive tools fail to appear in Cowork mode, breaking integration workflows.

6. **[#48281 - Desktop App Crashes](https://github.com/anthropics/claude-code/issues/48281)**
   The latest Claude Code Desktop update is causing immediate crashes for macOS users, flagged as a critical stability issue.

7. **[#47546 - Opus Code Generation Quality](https://github.com/anthropics/claude-code/issues/47546)**
   Reports suggest Claude Opus 4.6 is struggling with algorithm anticipation in code generation, marking a potential regression in model capabilities.

8. **[#38783 - Missing Cowork Browser Tools](https://github.com/anthropics/claude-code/issues/38783)**
   After the March 23 update, Windows users lost access to all browser automation tools in Cowork, despite successful MCP authentication.

9. **[#48813 - Kernel Memory Leak](https://github.com/anthropics/claude-code/issues/48813)**
   A severe kernel-mode memory leak (~19GB non-paged pool) was identified when running Claude Code within Claude Desktop, requiring system restarts to fix.

10. **[#46076 - Invisible Subagents](https://github.com/anthropics/claude-code/issues/46076)**
    Users in VS Code cannot see what spawned subagents are doing, leading to "staring at the token counter" confusion when agents get stuck.

## Key PR Progress
1. **[#39148 - preserve-session Plugin](https://github.com/anthropics/claude-code/pull/39148)**
    Introduces a plugin to maintain session history via path-independent UUIDs, allowing conversations to survive project renames or moves.

2. **[#48714 - Proposal Scraper Hook Example](https://github.com/anthropics/claude-code/pull/48714)**
    Adds a new Stop hook example that persists proposal blocks to `PROPOSALS.md`, ensuring context survives session crashes or API errors.

3. **[#47830 - subagent-cleanup Plugin](https://github.com/anthropics/claude-code/pull/47830)**
    A utility plugin to terminate orphaned `claude --resume` processes, preventing CPU/memory leaks associated with agent chains.

4. **[#48353 - Plugin Metadata Fixes](https://github.com/anthropics/claude-code/pull/48353)**
    Series of fixes aligning skill metadata (e.g., renaming `agent-development`) to match directory structures and `agnix` naming rules.

5. **[#41447 - Open Source Claude Code](https://github.com/anthropics/claude-code/pull/41447)**
    A meta-request to open source the core codebase, gaining traction but currently unresolved.

6. **[#48377 - Semgrep Security Fix](https://github.com/anthropics/claude-code/pull/48377)**
    Addresses a shell injection vulnerability risk in GitHub Actions workflows by sanitizing variable interpolation.

7. **[#48351 - Hookify Naming Alignment](https://github.com/anthropics/claude-code/pull/48351)**
    Renames the "Writing Hookify Rules" skill to `writing-rules` for consistency.

8. **[#48352 - Create-Plugin Doc Fix](https://github.com/anthropics/claude-code/pull/48352)**
    Escapes literal XML tags in documentation to prevent parsing errors by the `agnix` tool.

9. **[#46095 - Veriflow Immune System](https://github.com/anthropics/claude-code/pull/46095)**
    Adds an operating contract for the "Veriflow" system, indicating advanced agent workflow tooling.

10. **[#48341-48344 - Frontmatter YAML Fixes](https://github.com/anthropics/claude-code/pull/48341)**
    A batch of PRs cleaning up frontmatter in various toolkit plugins (code-reviewer, agent-creator) to ensure valid YAML parsing.

## Feature Request Trends
* **UI/UX Customization:** High demand for granular font controls, bilingual spinner support, and the return of the `/buddy` companion.
* **Workflow Observability:** Users are desperate for visibility into subagent processes, especially in VS Code and multi-agent setups.
* **Session Robustness:** strong interest in features that preserve session state during crashes, context compaction, or file system changes.
* **Permission Granularity:** Developers are frustrated by coarse-grained permission blocking, specifically requesting smarter parsing of compound bash commands.

## Developer Pain Points
* **Regression Anxiety:** Recent updates (v2.1.97+) have silently broken beloved features (`/buddy`) and critical integrations (Google Drive, MCP tools).
* **Resource Exhaustion:** Reports of kernel-level memory leaks and 20-minute hangs are making the tool unstable for production development environments.
* **Opaque Multi-Agent Systems:** The "black box" nature of subagents in VS Code is causing significant friction, with developers unable to debug stuck workflows.
* **Windows Platform Instability:** A disproportionate number of critical bugs (missing tools, app crashes, 1-minute auto-close) are reported on Windows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-16

## 1. Today's Highlights
The Codex ecosystem is rapidly evolving its extensibility model with the release of **rust-v0.121.0**, which officially introduces **Marketplace and Plugin support**, allowing developers to install tools from GitHub or local sources. Concurrently, the engineering team is advancing a significant architectural overhaul in the pull request queue, specifically focusing on **Remote Execution (MCP)** infrastructure that will eventually allow tools to run in isolated environments. However, stability remains a concern as the community reports increased **CPU usage spikes** on macOS and context window compaction bugs following recent updates.

## 2. Latest Releases
### **rust-v0.121.0**
*Summary: Major feature update focusing on extensibility and user history.*
*   **Plugin Marketplace:** Added `codex marketplace add` and app-server support for installing plugins directly from GitHub repos, git URLs, local directories, or raw `marketplace.json` URLs (PRs #17087, #17717, #17756).
*   **TUI History:** Improved the terminal user interface with `Ctrl+R` reverse search and local prompt recall capabilities.
*   **[Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.121.0)**

### **rust-v0.122.0-alpha.1**
*Summary: Pre-release testing for the next version cycle.*
*   **Status:** Released as alpha for early adopters.
*   **[Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.1)**

## 3. Hot Issues
*Selected based on activity, impact, and community sentiment.*

1.  **[#14593: Burning tokens very fast](https://github.com/openai/codex/issues/14593)** 🔥
    *   **Impact:** Critical. Users are reporting unexpectedly high token consumption leading to depleted quotas.
    *   **Reaction:** 222 upvotes; 542 comments. The community is demanding transparency regarding what is consuming tokens in the background.

2.  **[#16231: High CPU usage on macOS (VS Code Ext 26.325.31654)](https://github.com/openai/codex/issues/16231)** 🐛
    *   **Impact:** Regression. Recent updates have caused MacBook Pros (M5 Pro) to overheat.
    *   **Reaction:** 50 upvotes. Users report high fan activity and system sluggishness even when Codex is idle.

3.  **[#17809: Context compaction fails with 'prompt_cache_retention'](https://github.com/openai/codex/issues/17809)**
    *   **Impact:** Functional. Automatic context management is broken, forcing manual intervention.
    *   **Reaction:** 56 upvotes. A hot topic regarding the reliability of long-context sessions.

4.  **[#11325: Manual /compact command in Codex app](https://github.com/openai/codex/issues/11325)** ✨
    *   **Impact:** Workflow enhancement. Users want the control available in CLI available in the GUI.
    *   **Reaction:** 141 upvotes. Highly requested feature for power users managing large contexts.

5.  **[#8648: Replies to earlier messages instead of latest](https://github.com/openai/codex/issues/8648)**
    *   **Impact:** Agent logic. The AI frequently loses track of the conversation flow.
    *   **Reaction:** 33 upvotes. Highlights struggles with context retention in multi-turn conversations.

6.  **[#17624: Review tab stuck on "Loading diff" on Windows](https://github.com/openai/codex/issues/17624)**
    *   **Impact:** Platform-specific. Windows users cannot use the Review feature due to path handling errors (`/F:/...` passed literally to git).
    *   **Reaction:** 13 upvotes. Blocks a core feature for Windows developers.

7.  **[#17525: Ubuntu edits require skipping sandbox](https://github.com/openai/codex/issues/17525)**
    *   **Impact:** Usability. On Ubuntu, normal file operations are blocked by the sandbox, forcing constant "Skip Sandbox" confirmations.
    *   **Reaction:** Users are frustrated with the friction caused by overly strict sandboxing on Linux.

8.  **[#14346: Context Compaction Hanging](https://github.com/openai/codex/issues/14346)**
    *   **Impact:** Stability. The interface freezes when the context window fills up.
    *   **Reaction:** 19 upvotes. A critical blocker for long coding sessions on high-tier models.

9.  **[#16857: High GPU usage due to tiny useless animation](https://github.com/openai/codex/issues/16857)**
    *   **Impact:** Performance. A "thinking" animation is chewing up GPU resources unnecessarily.
    *   **Reaction:** 15 upvotes. Considered a poor resource allocation that distracts from actual work.

10. **[#12115: Dynamically loading nested AGENTS.md](https://github.com/openai/codex/issues/12115)**
    *   **Impact:** Architecture. Request for context-aware loading of agent config files (similar to Claude Code).
    *   **Reaction:** 27 upvotes. Developers want better project-scoped configuration management.

## 4. Key PR Progress
*Significant technical developments in the repository.*

1.  **[#17878: Plugins menu v2 + add marketplace](https://github.com/openai/codex/pull/17878)**
    *   **Description:** A complete UI overhaul to support the new marketplace functionality. It adds tabbed navigation for "All Plugins," "Installed," "OpenAI Curated," and "Local Plugins."
    *   **Significance:** This is the user-facing implementation of the v0.121.0 headline feature.

2.  **[#17982: Add rollout trace capture and reducer](https://github.com/openai/codex/pull/17982)**
    *   **Description:** Introduces opt-in "rollout tracing," which records raw runtime evidence to a local bundle to help debug complex failures across model requests and compaction.
    *   **Significance:** Crucial for debugging the "flaky" behavior reported in Issues.

3.  **[#18027: Fail exec client operations after disconnect](https://github.com/openai/codex/pull/18027)**
    *   **Description:** Part of an 8-PR stack (see below). Ensures that if the transport disconnects, pending operations fail gracefully rather than hanging.
    *   **Significance:** Improves robustness of the remote execution layer.

4.  **[#17987: Add executor process transport for MCP stdio](https://github.com/openai/codex/pull/17987)**
    *   **Description:** Adds a remote transport layer for MCP (Model Context Protocol) server I/O.
    *   **Significance:** Foundation for running tools in a sandboxed/remote environment, addressing security and compatibility issues.

5.  **[#17980: Use AgentAssertion downstream](https://github.com/openai/codex/pull/17980)**
    *   **Description:** Refines the "AgentAssertion" logic to better support agent identity.
    *   **Significance:** Ties into the fix for conversation context issues (like #8648).

6.  **[#17956: Match usage-limit TUI copy and owner nudge](https://github.com/openai/codex/pull/17956)**
    *   **Description:** Re-implements a feature to notify workspace owners when a member runs out of usage quota.
    *   **Significance:** Addresses administrative friction in enterprise teams.

7.  **[#17998: Bazel: add explicit rust test shard labels](https://github.com/openai/codex/pull/17998)**
    *   **Description:** Improves the CI/CD pipeline by splitting large Rust tests into explicit shards.
    *   **Significance:** Will speed up development and reduce flaky test failures.

8.  **[#17791: Stabilize Windows and integration tests](https://github.com/openai/codex/pull/17791)**
    *   **Description:** Fixes for spurious test failures overnight.
    *   **Significance:** Aims to improve the reliability of the Windows build (addressing issues like #17624).

9.  **[#18026: Add OTEL metrics for hook runs](https://github.com/openai/codex/pull/18026)**
    *   **Description:** Adds OpenTelemetry metrics for hook volume and latency.
    *   **Significance:** Gives the OpenAI team better visibility into performance bottlenecks.

10. **[#17820: Draft - External PR Requirements](https://github.com/openai/codex/pull/17820)**
    *   **Description:** Placeholder for external contribution guidelines.
    *   **Significance:** Signals the team is preparing to accept more community plugins as the marketplace matures.

## 5. Feature Request Trends
*Based on analysis of open enhancement requests.*

*   **Manual Context Control:** Users are frustrated with automatic context management. There is a strong trend toward requesting **manual `/compact` commands** (#11325) and **project-scoped configuration** (#3120, #12115) to prevent the AI from hallucinating or filling the context window with irrelevant data.
*   **Model Selection for Plans:** Developers want to choose cheaper/faster models for the "Planning" phase and more powerful models for the "Implementation" phase (#14969, #13206). This suggests users are cost-conscious and want granular control over their spend.
*   **Windows Sandbox Parity:** Multiple requests (#18005, #17525) indicate that the Sandbox experience on Windows and Linux is too restrictive compared to macOS, with users asking for explicit "no sandbox" modes or auto-approval flows.

## 6. Developer Pain Points
*Recurring frustrations summarized from the data.*

*   **Resource Hogging:** The most frequent complaint involves **high CPU and GPU usage** on macOS (#16231, #16857, #16185). Users are annoyed that a text editing tool causes their fans to spin up, often due to background processes or animations.
*   **Context Instability:** "Burning tokens" (#14593) and "Compaction Hanging" (#14346) are top concerns. Developers feel the tool is inefficient with memory, leading to lost work or high bills.
*   **Windows Neglect:** Specific path handling bugs in the VS Code extension (#17624, #17649) and regression issues suggest that the Windows experience is degrading relative to macOS.

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest: 2026-04-16

## 1. Today's Highlights
The Crush community addressed a quirky yet significant localization bug where smaller models were unexpectedly replying in Portuguese due to a system prompt example. Alongside this language fix, the `v0.58.0` release cleaned up debugging artifacts, while maintainers are pushing forward with foundational architectural changes, including the introduction of a hooks system and advanced terminal multiplexing features.

## 2. Releases
**v0.58.0**
*   **Cleanup:** Removed the `tea_debug.log` file that was being littered across directories in the previous version.
*   **Localization Fix:** Addressed an issue where the system prompt's use of Portuguese as an example caused smaller models to respond in Portuguese unintentionally.
*   [Release Artifacts & Verification](https://github.com/charmbracelet/crush/releases/)

## 3. Hot Issues

*   **[#1336 General hooks system (for notifications, etc.)](https://github.com/charmbracelet/crush/issues/1336)**
    *   *Impact:* High. This issue tracks the implementation of a general hooks system, which is currently the most requested feature for extending Crush's functionality (e.g., notifications).
    *   *Reaction:* Strong community support (5 👍), with active discussion on implementation details.
*   **[#2627 Agent uses Portugese for unknown reason](https://github.com/charmbracelet/crush/issues/2627)** (CLOSED)
    *   *Impact:* Medium. A confusing UX bug where the AI switched languages mid-conversation.
    *   *Resolution:* Fixed by removing the Portuguese example from the system prompt.
*   **[#2631 Opencode GO api keys recognized as invalid](https://github.com/charmbracelet/crush/issues/2631)** (CLOSED)
    *   *Impact:* High. Blocked users from using the OpenCode Go provider due to validation logic checking for the wrong provider type ("Zen" instead of "go").
*   **[#1855 Grep tool hangs with 'Working...' status when context is cancelled](https://github.com/charmbracelet/crush/issues/1855)**
    *   *Impact:* High. A long-standing UI/UX bug where the Grep tool fails to terminate or update the UI when the user sends a new message, causing a "ghost" working state.
    *   *Reaction:* User frustration noted ("pissing me off"), demanding a fix.
*   **[#2489 Thinking blocks corrupted in long tool-call chains](https://github.com/charmbracelet/crush/issues/2489)**
    *   *Impact:* Technical/Medium. Identified a critical bug in the Vercel AI SDK integration where extended thinking with Anthropic models breaks during long tool chains.
*   **[#2626 Responses silently dropped when switching terminal tabs (Ghostty)](https://github.com/charmbracelet/crush/issues/2626)**
    *   *Impact:* Medium. Compatibility issue with the Ghostty terminal where TUI updates are dropped if the user switches tabs while waiting for a response.
*   **[#2625 Add a Web UI mode for configuration management](https://github.com/charmbracelet/crush/issues/2625)**
    *   *Impact:* Strategic. Users are requesting a GUI for JSON configuration management to make the tool more approachable for non-technical users.
*   **[#2232 Zen Provider](https://github.com/charmbracelet/crush/issues/2232)** (CLOSED)
    *   *Impact:* Feature Request. Successfully requested support for the OpenCode Zen API provider.
*   **[#2628 For Help: What does the LSPs's side status?](https://github.com/charmbracelet/crush/issues/2628)**
    *   *Impact:* Documentation. Users are seeking clarification on LSP status indicators in the UI.
*   **[#2600 Support for OpenCode go provider](https://github.com/charmbracelet/crush/issues/2600)** (CLOSED)
    *   *Impact:* Feature Request. Request to add support for the `go` model provider, which has likely been implemented alongside the Zen provider fixes.

## 4. Key PR Progress

*   **[#2598 feat: PreToolUse hook](https://github.com/charmbracelet/crush/pull/2598)**
    *   *Description:* Introduces the initial hooks architecture to Crush, starting with a `PreToolUse` hook. Hooks are currently implemented as shell scripts receiving JSON via stdin.
    *   *Significance:* This lays the groundwork for the extensibility requested in Issue #1336.
*   **[#2630 feat(hooks): add crush-hook skill as a builtin](https://github.com/charmbracelet/crush/pull/2630)**
    *   *Description:* Adds a built-in "skill" that allows the AI agent to write and configure its own hooks.
    *   *Significance:* A move towards self-configuring agents.
*   **[#2629 fix(system-prompt): remove "portuguese" as example](https://github.com/charmbracelet/crush/pull/2629)** (CLOSED)
    *   *Description:* Removes the Portuguese example from the coder prompt to prevent "dumber models" (e.g., small models) from adopting the wrong language.
    *   *Significance:* Immediate fix for today's critical language bug.
*   **[#2606 feat: split-pane tree, tab manager, and cross-platform PTY](https://github.com/charmbracelet/crush/pull/2606)**
    *   *Description:* A massive foundational update adding `internal/split/` and `internal/tabmgr/` packages to support complex terminal multiplexing (split panes, independent sessions).
    *   *Significance:* Prepares Crush for a much richer TUI experience.
*   **[#2620 feat(cmd): add `crush skills list` command](https://github.com/charmbracelet/crush/pull/2620)**
    *   *Description:* Adds a CLI command to list discovered skills grouped by source (Builtin, Project, User).
    *   *Significance:* Improves discoverability and management of skills.
*   **[#2624 feat: show progress bar on rio terminal](https://github.com/charmbracelet/crush/pull/2624)**
    *   *Description:* Adds native progress bar support for the Rio terminal emulator.
    *   *Significance:* Enhances UX on specific platforms.
*   **[#2616 fix: use small model for task agent instead of large](https://github.com/charmbracelet/crush/pull/2616)** (CLOSED)
    *   *Description:* Optimization to ensure task agents use smaller, faster models rather than defaulting to large ones.
*   **[#2602 feat(ui): add exit alias to quit command](https://github.com/charmbracelet/crush/pull/2602)** (CLOSED)
    *   *Description:* Adds "exit" as an alias to the "Quit" command in the command picker.
    *   *Significance:* Small UX improvement matching terminal user expectations.
*   **[#2020 feat: add a model semaphore for concurrency control](https://github.com/charmbracelet/crush/pull/2020)**
    *   *Description:* Adds per-model semaphores to prevent overwhelming API rate limits during concurrent operations.
    *   *Significance:* Critical for stability when handling multiple parallel requests.
*   **[#2116 fix(config): set Z.AI Coding Plan costs to zero](https://github.com/charmbracelet/crush/pull/2116)**
    *   *Description:* Fixes cost calculation logic for flat-rate providers by introducing a `flat_rate` flag.
    *   *Significance:* Ensures users aren't overcharged for subscription-based models.

## 5. Feature Request Trends
*   **Extensibility & Automation:** There is a strong push for a **Hooks System** (Notifications, `PreToolUse`). Users want Crush to trigger external scripts or notifications based on specific events.
*   **Provider Diversity:** Users are actively requesting and adding support for alternative AI providers, specifically **OpenCode (Zen and Go)**.
*   **UI/UX Enhancements:** Requests for **Terminal Multiplexing** (Split Panes/Tabs) and better **Configuration Management** (Web UI/JSON editors) indicate a desire for Crush to act as a comprehensive IDE/Workspace rather than just a chat tool.
*   **Model Management:** Improved handling of **cost tracking** for subscription models and **concurrency control** (semaphores) are trending technical requirements.

## 6. Developer Pain Points
*   **LLM Reliability:** Developers are frustrated by "hallucinations" or prompt leakage causing the AI to switch languages unexpectedly (Portuguese bug).
*   **UI State Synchronization:** Several reports highlight the TUI failing to update correctly when tools (like Grep) hang or when switching contexts (e.g., Ghostty tabs), leading to "silent failures" or dropped responses.
*   **Tool Longevity:** The "Grep" tool is specifically cited as unreliable in long contexts or cancellation scenarios.
*   **Configuration Complexity:** Managing JSON configs manually is seen as a barrier to entry, prompting requests for GUI configuration tools.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-16

## 1. Today's Highlights
The latest nightly release (`v0.40.0-nightly`) hints at continued planning agent improvements, while the team pushed a rapid patch (`v0.38.1`) to address stability in the `v0.38` series. Development focus is heavily split between addressing critical performance degradation issues—specifically the agent loop stalling during code edits—and modernizing core infrastructure, including a major push for "Local Gemma" support and real-time Voice Mode capabilities.

## 2. Releases
*   **`v0.40.0-nightly` (20260415)**: The latest nightly includes a fix for Model Context Protocol (MCP) error handling, replacing brittle string matches with strict error code checks. Documentation for the "Generalist Agent" was also updated.
*   **`v0.38.1` (Stable)**: A hotfix release created by cherry-picking commit `050c303` to address urgent issues in the previous `v0.38.0` release.
*   **[Compare changes](https://github.com/google-gemini/gemini-cli/compare/v0.38.0...v0.38.1)**

## 3. Hot Issues
1.  **[#22141](https://github.com/google-gemini/gemini-cli/issues/22141) — Agent gets stuck for hours on small tasks**
    *   **Why it matters**: The highest-engagement issue (154 comments) reports the CLI becoming unusable with 1+ hour delays for trivial edits.
    *   **Reaction**: Community frustration is high (👍 122); users report the agent hangs while "thinking" even after edits are complete.

2.  **[#25323](https://github.com/google-gemini/gemini-cli/issues/25323) — Slow startup due to RipGrep download failures**
    *   **Why it matters**: Highlights a fragility in CLI bootstrapping; failed network requests cause multi-minute hangs.
    *   **Reaction**: Users are requesting "fail-fast" logic or bundling the tool to avoid network dependencies.

3.  **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916) — Repeated permission prompts**
    *   **Why it matters**: Breaks developer flow; the "Allow for all future sessions" toggle appears ineffective for specific files.
    *   **Reaction**: Confirmed as a bug where permission state is not correctly persisted.

4.  **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell execution hangs after command completion**
    *   **Why it matters**: The CLI falsely reports "Awaiting user input" for commands that have already finished, blocking progress.
    *   **Reaction**: Affecting core usability, especially for simple shell tasks.

5.  **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — Investigation into AST-aware file reads**
    *   **Why it matters**: An Epic issue tracking potential architectural improvements to reduce token noise and improve code mapping precision.
    *   **Reaction**: Maintainers are actively discussing the value of AST integration.

6.  **[#24202](https://github.com/google-gemini/gemini-cli/issues/24202) — Text scrambled in SSH sessions**
    *   **Why it matters**: Renders the CLI unusable for users remoting into Linux/cloud environments from Windows.
    *   **Reaction**: Specific rendering bug affecting terminal compatibility.

7.  **[#23582](https://github.com/google-gemini/gemini-cli/issues/23582) — Subagents unaware of Approval Modes**
    *   **Why it matters**: Subagents attempt actions blocked by the main Policy Engine, wasting turns and confusing the user.
    *   **Reaction**: Highlights a disconnect between the policy layer and agent instructions.

8.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — MAX_TURNS failure reported as "GOAL Success"**
    *   **Why it matters**: A critical logic flaw where the agent pretends a task succeeded after hitting its turn limit, hiding failures from the user.
    *   **Reaction**: Marked Priority P1; misleading status reporting is a major reliability concern.

9.  **[#24915](https://github.com/google-gemini/gemini-cli/issues/24915) — UI glitch: Thick borders on prompt bar**
    *   **Why it matters**: Visual regression impacting the user interface experience.
    *   **Reaction**: Minor but frequent annoyance reported by users.

10. **[#22816](https://github.com/google-gemini/gemini-cli/issues/22816) — Dependency visualization clarity**
    *   **Why it matters**: Users find the 2-level dependency tree insufficient for understanding project structure.
    *   **Reaction**: Request for multi-level tree visualization to better grasp codebase relationships.

## 4. Key PR Progress
1.  **[#24174](https://github.com/google-gemini/gemini-cli/pull/24174) — Real-time Voice Mode implementation**
    *   **Details**: A massive feature addition enabling voice input via Gemini Live API or local Whisper (`whisper.cpp`). This moves the CLI towards hands-free interaction.

2.  **[#25498](https://github.com/google-gemini/gemini-cli/pull/25498) — `gemini gemma` local model setup**
    *   **Details**: Introduces commands to manage local Gemma models directly (`gemini gemma setup`, `gemini gemma logs`). A significant step toward offline/privacy-preserving usage.

3.  **[#24461](https://github.com/google-gemini/gemini-cli/pull/24461) — Parallel I/O and Lazy Stat performance optimizations**
    *   **Details**: High-impact performance PR fixing I/O bottlenecks in `GlobTool` and `ReadmanyFiles`. Implements lazy stat calls and parallel I/O to reduce latency on large codebases.

4.  **[#25338](https://github.com/google-gemini/gemini-cli/pull/25338) — Sandbox governance fix**
    *   **Details**: Fixes a bug where explicit write permissions were blocked by read-only protections (e.g., for `.git`). Ensures user intent (write permissions) overrides default safety locks.

5.  **[#25409](https://github.com/google-gemini/gemini-cli/pull/25409) — New `ContextManager` and `AgentChatHistory`**
    *   **Details**: Core wiring changes to improve how chat history and context are managed by the agent, likely paving the way for better memory handling.

6.  **[#25343](https://github.com/google-gemini/gemini-cli/pull/25343) — Telemetry flag for traces**
    *   **Details**: Adds a `telemetry.traces` flag to decouple detailed tracing from baseline telemetry, addressing privacy/overhead concerns in enterprise environments.

7.  **[#24736](https://github.com/google-gemini/gemini-cli/pull/24736) — Union-Find context compaction**
    *   **Details**: An experimental new compression strategy for agent history that clusters similar messages, potentially saving tokens and context window space.

8.  **[#25489](https://github.com/google-gemini/gemini-cli/pull/25489) — Abstract `OsSandboxManager`**
    *   **Details**: Refactoring OS-specific sandbox logic (Linux/macOS/Windows) into a centralized base class to improve maintainability and consistency.

9.  **[#25421](https://github.com/google-gemini/gemini-cli/pull/25421) — Skill extraction integration**
    *   **Details**: The background agent that extracts skills now uses the built-in `skill-creator` for authoritative guidance, ensuring generated SKILL.md files follow correct specs.

10. **[#25382](https://github.com/google-gemini/gemini-cli/pull/25382) — Dynamic extension directory resolution**
    *   **Details**: Infrastructure work enabling dynamic paths for extensions and plans, fixing configuration spread issues and adding project registry save backoff.

## 5. Feature Request Trends
*   **Local Model Management**: There is a clear push (PR #25498) for first-class support of local models (Gemma), allowing developers to run the CLI without cloud API calls.
*   **Voice Interaction**: The active development of Voice Mode (PR #24174) indicates a trend toward multimodal inputs, moving beyond text-only prompts.
*   **Robustness in Sandboxing**: Issues like #25338 suggest users are pushing the boundaries of what the CLI is allowed to edit (e.g., `.git` folders) and want finer-grained control over safety restrictions.

## 6. Developer Pain Points
*   **Performance & Latency**: The dominant theme remains slowness. Whether it's the agent hanging for hours (#22141) or the CLI stalling on startup (#25323), performance is the top friction point.
*   **UI/UX Instability**: Developers are encountering visual glitches (scrambled text in SSH #24202, thick borders #24915) and logic bugs where the UI reports incorrect states (Shell hangs #25166).
*   **Agent "Hallucinations" on State**: Agents are failing to respect system constraints, such as ignoring approval modes (#23582) or reporting success when they failed (#22323), eroding trust in the tool's reliability.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest: 2026-04-16

## 1. Today's Highlights
The Copilot CLI team released **v1.0.28**, focusing on critical fixes for git submodule permissions, background agent notification redundancy, and updated MCP migration documentation. Community sentiment is currently divided regarding recent rate limit policies and the handling of "xhigh" reasoning modes for newer models like GPT-5.4.

## 2. Releases
**v1.0.28 (2026-04-16)**
*   **Git Submodules:** Permission prompts now correctly display the repository path when working inside submodules.
*   **Agent Optimization:** Fixed a bug where background agent completion notifications were sent redundantly to `read_agent` while already waiting for results.
*   **MCP Migration:** The hint for MCP migration now links to platform-specific documentation.

**v1.0.27 (2026-04-15)**
*   **UX Clarity:** Status bar now shows hints for `@files`, `#issues`, and `/help` contextually.
*   **WSL Fix:** Resolved an issue where clipboard copy on WSL leaked an invisible BOM (Byte Order Mark) character.

## 3. Hot Issues
Here are the top issues generating significant discussion:

1.  **[Feature Request] Support custom slash commands** ([#618](https://github.com/github/copilot-cli/issues/618))
    *   **Impact:** Users want to define custom slash commands via `.github/prompts/` to mirror functionality in the VS Code extension.
    *   **Reaction:** Highly requested (👍 95); community seeks consistency across the Copilot ecosystem.

2.  **[Linux] ctrl+shift+c clipboard broken** ([#2082](https://github.com/github/copilot-cli/issues/2082))
    *   **Impact:** Standard Linux clipboard shortcuts (Ctrl+Shift+C) fail in v1.0.4+.
    *   **Reaction:** Major workflow disruption for Linux users; devs forced to use right-click context menus.

3.  **[Rate Limiting] "Try again in 58 hours"** ([#2696](https://github.com/github/copilot-cli/issues/2696))
    *   **Impact:** Users report excessive rate limits (e.g., 58-hour waits) triggered by background agents.
    *   **Reaction:** High frustration; users argue that automated background agents should not consume user quota in this manner.

4.  **[GPT-5.4] xhigh reasoning removed** ([#2725](https://github.com/github/copilot-cli/issues/2725))
    *   **Impact:** The `/model` picker for GPT-5.4 restricts users to Low/Medium/High, hiding "xhigh" (Extra High) effort levels despite the backend still supporting it.
    *   **Reaction:** Users demand the return of xhigh for complex reasoning tasks.

5.  **[Feature] Persist allowed directories** ([#2284](https://github.com/github/copilot-cli/issues/2284))
    *   **Impact:** Directories allowed via `/add-dir` are lost when the session restarts.
    *   **Reaction:** Security friction; users want a way to whitelist trusted project paths permanently.

6.  **[Skills] Skills not triggering automatically** ([#978](https://github.com/github/copilot-cli/issues/978))
    *   **Impact:** Custom "Skills" are ignored unless explicitly invoked by name.
    *   **Reaction:** Users expect the LLM to intelligently invoke skills based on context, not just explicit commands.

7.  **[MCP] Servers not loading** ([#2232](https://github.com/github/copilot-cli/issues/2232))
    *   **Impact:** `.mcp.json` files under the repo root are not being loaded in recent versions.
    *   **Reaction:** Breaking the MCP integration workflow for power users.

8.  **[Agents] Nested agents loading all instructions** ([#2735](https://github.com/github/copilot-cli/issues/2735))
    *   **Impact:** Nested agents are loading `copilot-instructions.md` from parent directories, causing context pollution.
    *   **Reaction:** Broken isolation makes multi-agent workflows difficult to manage.

9.  **[Bug] Fleet command blowing out rate limits** ([#2545](https://github.com/github/copilot-cli/issues/2545))
    *   **Impact:** The `/fleet` command rapidly consumes API requests, leading to immediate throttling.
    *   **Reaction:** Users feel the feature is unusable without better rate limit management.

10. **[macOS] Headless server leaking file descriptors** ([#2707](https://github.com/github/copilot-cli/issues/2707))
    *   **Impact:** The headless server leaks kqueue file descriptors on macOS, eventually breaking tool execution.
    *   **Reaction:** Critical stability issue for long-running server processes.

## 4. Key PR Progress
*   **Install Script PATH Duplication** ([#2565](https://github.com/github/copilot-cli/pull/2565))
    *   Adds a guard to the install script to prevent duplicate PATH entries when running the installer multiple times without a shell restart.
*   **Automated Issue Classification** ([#2587](https://github.com/github/copilot-cli/pull/2587))
    *   Introduces a workflow using GitHub Agentic Workflows to automatically apply `area:` and `triage` labels to new issues.
    *   *Note: Currently marked closed/invalid.*

## 5. Feature Request Trends
*   **Customization Ecosystem:** There is a strong push for user-defined customization, specifically **Custom Slash Commands** ([#618](https://github.com/github/copilot-cli/issues/618)) and **Custom Statuslines** ([#2329](https://github.com/github/copilot-cli/issues/2329)).
*   **Configuration Persistence:** Users are tired of re-authenticating or re-allowing directories. Requests for **Persistent Login** ([#254](https://github.com/github/copilot-cli/issues/254)) and **Persistent Directory Permissions** ([#2284](https://github.com/github/copilot-cli/issues/2284)) are trending.
*   **Model Granularity:** Following updates to GPT-5.4, users are requesting the restoration of full control over model parameters, specifically **Extra High (xhigh) reasoning effort** ([#2725](https://github.com/github/copilot-cli/issues/2725)).
*   **Animation Control:** A recurring request exists for an option to **disable all UI animations** ([#1326](https://github.com/github/copilot-cli/issues/1326)) to improve performance and reduce distraction.

## 6. Developer Pain Points
*   **Rate Limiting Confusion:** The implementation of rate limits is the primary pain point. Users are facing extreme wait times (e.g., "58 hours") triggered by background agents ([#2696](https://github.com/github/copilot-cli/issues/2696), [#2336](https://github.com/github/copilot-cli/issues/2336)). There is confusion regarding whether specific limits are bugs or policy changes ([#2741](https://github.com/github/copilot-cli/issues/2741)).
*   **Resource Leaks:** Long-running processes are unstable. Issues regarding **Headless Server memory/file descriptor leaks** ([#2707](https://github.com/github/copilot-cli/issues/2707), [#2389](https://github.com/github/copilot-cli/issues/2389)) suggest the CLI is not yet production-ready for server-side automation.
*   **Linux Desktop Integration:** The failure of standard clipboard shortcuts on Linux ([#2082](https://github.com/github/copilot-cli/issues/2082)) and the leaking of BOM characters on WSL ([v1.0.27 fix](https://github.com/github/copilot-cli/releases/tag/v1.0.27)) remain frustrating friction points for developers on non-macOS platforms.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-04-16

## 1. Today's Highlights
The release of **v1.35.0** marks a significant shift in user experience, defaulting `show_thinking_stream` to `true` to address widespread community feedback about the visibility of the reasoning process. Concurrently, the maintainers are pushing for stability with urgent fixes for session deadlocks in the Web UI and OAuth cancellation issues. The community dialogue remains dominated by requests for granular control over "thinking" traces and file operation permissions.

## 2. Releases
**Version 1.35.0**
The latest release focuses on correcting documentation from the previous version and fixing critical session management bugs.
*   **Documentation Fix:** Corrected misplaced changelog entries for v1.34.0 under the "Unreleased" section ([#1885](https://github.com/MoonshotAI/kimi-cli/pull/1885)).
*   **Web Stability:** Implemented a fix to clear stale in-flight prompts on error, preventing the "session busy" deadlock that occurs when worker processes crash ([#1890](https://github.com/MoonshotAI/kimi-cli/pull/1890)).
*   **Default Behavior Change:** New installs will now default `show_thinking_stream` to `true`, ensuring the reasoning preview is visible by default ([#1900](https://github.com/MoonshotAI/kimi-cli/pull/1900)).

## 3. Hot Issues
**1. [Bug] Display full thinking traces in Kimi CLI** [#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864)
*   **Why it matters:** The most upvoted issue (👍 10) of the day. Users report that the "thinking" process—previously visible—has disappeared or become truncated in recent versions (1.33.0+).
*   **Community Reaction:** Users described the change as a "pure negative optimization," expressing a significant loss of transparency and "sense of security."

**2. [Bug] VS Code plug-in: Thinking block cannot expand in compact mode** [#1877](https://github.com/MoonshotAI/kimi-cli/issues/1877)
*   **Why it matters:** Affects VS Code users specifically. In compact mode, the thinking block UI is broken, preventing users from verifying the model's reasoning steps.
*   **Community Reaction:** Users are frustrated that a working feature in previous iterations has regressed.

**3. [Bug] Why is the thinking process gone?** [#1865](https://github.com/MoonshotAI/kimi-cli/issues/1865)
*   **Why it matters:** Echoes #1864, confirming this is a systemic issue across CLI and plugins, not just an isolated edge case.
*   **Community Reaction:** Strong emotional response regarding the removal of visibility into the LLM's thought process.

**4. [Enhancement] WriteFile tool request permission** [#1882](https://github.com/MoonshotAI/kimi-cli/issues/1882)
*   **Why it matters:** Addresses workflow efficiency. Users want the CLI to pause and confirm before writing files, preventing them from returning to a session only to find a file already written or modified without oversight.
*   **Community Reaction:** Requests for a "permission first" approach to file generation.

**5. [Bug] VSCode /skill selection sends immediately** [#1902](https://github.com/MoonshotAI/kimi-cli/issues/1902)
*   **Why it matters:** UX inconsistency. Selecting a skill in VS Code triggers an immediate request, unlike the CLI where users can append context. This disrupts the workflow of composing complex prompts.
*   **Community Reaction:** Users are asking when this "bug" will be fixed to align with CLI behavior.

**6. [Bug] /login OAuth wait cannot be cancelled** [#1905](https://github.com/MoonshotAI/kimi-cli/issues/1905)
*   **Why it matters:** Trap state. If a user initiates `/login` via OAuth, they cannot abort the "Waiting for user authorization" state using standard keys like `Esc`.
*   **Community Reaction:** Zero comments, but fix PR #1906 was opened immediately, indicating high priority for usability.

**7. [Enhancement] Support OAI (OpenAI API Compatible)** [#1898](https://github.com/MoonshotAI/kimi-cli/issues/1898)
*   **Why it matters:** Integration request. Users want to use Kimi models directly via the standard VSCode OpenAI plugin for a lighter setup.
*   **Community Reaction:** Encountering "403 Forbidden" errors when attempting this setup currently.

**8. [Bug] Web UI hangs when MCP server fails** [#1897](https://github.com/MoonshotAI/kimi-cli/issues/1897)
*   **Why it matters:** Robustness. If an MCP server (Model Context Protocol) is unreachable, the Web UI enters an infinite loading state rather than failing gracefully.
*   **Community Reaction:** Highlights fragility in external tool connections.

**9. [Bug] Subagent file changes not showing in VS Code diff** [#1889](https://github.com/MoonshotAI/kimi-cli/issues/1889)
*   **Why it matters:** Visibility. When a subagent modifies a file in VS Code, the changes do not appear in the "Source Control" or "Changes" column, making code review difficult.
*   **Community Reaction:** Described as "very inconvenient" for tracking actual changes.

**10. [Enhancement] Recursive skill directory loading** [#1894](https://github.com/MoonshotAI/kimi-cli/issues/1894)
*   **Why it matters:** Compatibility. Kimi CLI cannot load nested skills (e.g., `.agents/skills/{name}/skills/xxx`), while competitors (Codex) can.
*   **Community Reaction:** Users want feature parity for complex project structures.

## 4. Key PR Progress
**1. feat(shell): default show_thinking_stream to true** [#1900](https://github.com/MoonshotAI/kimi-cli/pull/1900) (CLOSED)
*   **Detail:** Directly addresses community complaints by flipping the default config. New users will see the "thinking" stream automatically.

**2. fix(web): prevent watchdog reconnect...** [#1899](https://github.com/MoonshotAI/kimi-cli/pull/1899) (CLOSED)
*   **Detail:** Prevents the Web UI from forcing a reconnection while a user prompt is waiting for approval or an answer, reducing UI glitches.

**3. fix(web): clear stale in-flight prompts...** [#1890](https://github.com/MoonshotAI/kimi-cli/pull/1890) (CLOSED)
*   **Detail:** Critical backend fix to ensure the system doesn't lock up ("session busy") after a worker crash or network error.

**4. [codex] Fix OAuth wait cancellation in /login** [#1906](https://github.com/MoonshotAI/kimi-cli/pull/1906) (OPEN)
*   **Detail:** Adds a cancellation event path to the OAuth polling loop, allowing users to hit `Esc` to exit the login wait screen.

**5. feat(shell): add unified /setting command** [#1892](https://github.com/MoonshotAI/kimi-cli/pull/1892) (OPEN)
*   **Detail:** A major UX enhancement introducing a TUI (Text User Interface) panel to manage all settings (theme, model, editor, thinking stream) in one place.

**6. fix: handle non-UTF-8 filenames on Windows** [#1893](https://github.com/MoonshotAI/kimi-cli/pull/1893) (OPEN)
*   **Detail:** Fixes crashes on Chinese Windows systems by enforcing UTF-8 encoding during `git ls-files` operations.

**7. fix(core): honor http_proxy env vars** [#1896](https://github.com/MoonshotAI/kimi-cli/pull/1896) (OPEN)
*   **Detail:** Enables `aiohttp` to respect standard proxy environment variables (`http_proxy`, `https_proxy`), fixing connectivity in restricted corporate environments.

**8. feat(soul): register /btw slash command** [#1876](https://github.com/MoonshotAI/kimi-cli/pull/1876) (OPEN)
*   **Detail:** Makes the `/btw` command available globally (shell, print, web modes), not just in the interactive shell.

**9. Remind model do not use unsafe pattern** [#1854](https://github.com/MoonshotAI/kimi-cli/pull/1854) (CLOSED)
*   **Detail:** A prompt engineering fix to prevent the model from generating glob patterns starting with `**`, which can be unsafe or inefficient.

**10. feat(ui): echo slash command inputs** [#1883](https://github.com/MoonshotAI/kimi-cli/pull/1883) (OPEN)
*   **Detail:** Improves terminal history readability by ensuring commands starting with `/` (like `/skill:coding`) are echoed to the console.

## 5. Feature Request Trends
*   **Transparency Control:** There is a massive demand for better control over the "Thinking" UI. Users want it to be visible by default (which v1.35.0 addresses) but also expandable and persistent in the VS Code plugin.
*   **Permission Gates:** Users are asking for "human-in-the-loop" confirmations, specifically for the `WriteFile` tool, to prevent unexpected modifications.
*   **Skill Interaction Refinement:** Multiple requests suggest the current `/skill` workflow in VS Code is too aggressive (sending immediately) and needs to support appending context like the CLI version.

## 6. Developer Pain Points
*   **Regression Anxiety:** The sentiment around "missing thinking traces" (Issues #1864, #1865) suggests developers feel a loss of control when the reasoning process is hidden. They rely on these traces to debug the AI's logic.
*   **Encoding Hell:** Windows users with non-ASCII filenames continue to face crashes, highlighting a need for better cross-platform encoding handling in the underlying Python subprocess calls.
*   **Workflow Disruption:** The VS Code plugin's behavior regarding auto-sending skills and the inability to cancel OAuth flows indicates friction in the daily development workflow, forcing users to restart sessions or work around the tool.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-16

## 1. Today's Highlights
The OpenCode community is actively addressing critical bugs following the recent **v1.4.6** release, particularly regarding **CPU compatibility** (AVX2 requirements for WASM ripgrep) and **authentication flows**. On the development front, significant architectural work is underway to improve **file locking consistency**, **npm registry resolution**, and **mobile touch optimization**, while users continue to report frustration with **Agent quota management** and **provider-specific bugs**.

## 2. Releases
**v1.4.6 & v1.4.5 (Latest)**
The latest patch releases focus on stability and telemetry.
*   **Core:** Fixed snapshot staging for large file lists and OTEL header parsing. Added telemetry exports for AI SDK spans and exposed the experimental Question API schema from `@opencode-ai/server`.
*   **Desktop:** Resolved issues with prompt submission state updates and improved session title editing.

## 3. Hot Issues
**Breaking Regressions & Compatibility**
*   **[#22617](https://github.com/anomalyco/opencode/issues/22617) [WASM ripgrep SIMD requirement breaks @ file fuzzy search on CPUs without AVX2 support]**
    *   **Impact:** CRITICAL. Users on older CPUs (pre-Haswell) cannot use file search after upgrading to v1.4.6.
    *   **Reaction:** Rapidly identified as a blocker for legacy hardware adoption.

*   **[#22444](https://github.com/anomalyco/opencode/issues/22444) [Azure OpenAI Models not working in the latest update]**
    *   **Impact:** High. Enterprise users relying on Azure (GPT-5.x) are facing total failures.
    *   **Reaction:** Multiple confirmations that v1.4.6 breaks standard Azure deployments.

*   **[#22680](https://github.com/anomalyco/opencode/issues/22680) [1.4.6 Desktop - Agents select list empty can't connect]**
    *   **Impact:** High. Core UI functionality is broken in the Desktop client for v1.4.6.

**Provider & Model Specific Issues**
*   **[#8030](https://github.com/anomalyco/opencode/issues/8030) [Copilot auth now sets far too many requests as "user" consuming premium requests rapidly]**
    *   **Impact:** Financial/Usage. A recent change is causing Agent-initiated requests to be billed as premium user requests.
    *   **Reaction:** Highly emotional (79+ upvotes), rapid consumption of quotas is a major pain point.

*   **[#20698](https://github.com/anomalyco/opencode/issues/20698) [gpt 5.4 from azure constantly fails with "reasoning" item error]**
    *   **Impact:** Stability. GPT 5.4 usage is significantly hampered by parsing errors regarding reasoning tokens.

*   **[#22644](https://github.com/anomalyco/opencode/issues/22644) [Qwen model are remove from go subscription]**
    *   **Impact:** Configuration. Users are confused/alarmed that popular Qwen models have disappeared from the "Go" subscription tier.

**Security & Permissions**
*   **[#22191](https://github.com/anomalyco/opencode/issues/22191) [auth login <url> should confirm before running auth.command]**
    *   **Impact:** Security. Running remote commands blindly during `auth login` is a security risk.
    *   **Reaction:** Strong support for adding a confirmation step (SOP for CLI tools).

*   **[#2632](https://github.com/anomalyco/opencode/issues/2632) [Default permissions allow editing files and executing any commands]**
    *   **Impact:** Safety. Community debate over whether OpenCode is too permissive by default.

**Feature Requests**
*   **[#22408](https://github.com/anomalyco/opencode/issues/22408) [FEATURE: kimi k2.6 integration]**
    *   **Impact:** Integration. High demand for the new Kimi K2.6 model family (12 upvotes).

*   **[#5408](https://github.com/anomalyco/opencode/issues/5408) [FEATURE: Delayed queue feature]**
    *   **Impact:** Workflow. Users want to queue tasks to run in the background without blocking the current session.

## 4. Key PR Progress
**Core Architectural Improvements**
*   **[#22681](https://github.com/anomalyco/opencode/pull/22681) [feat(shared): add Effect-idiomatic file lock (EffectFlock)]**
    *   A reimplementation of file locking using Effect idioms, ensuring global state is managed via services rather than mutable globals. This improves observability and consistency.

*   **[#21697](https://github.com/anomalyco/opencode/pull/21697) [fix(opencode): resolve npmrc with @npmcli/config]**
    *   Addresses a long-standing pain point (#21324). Replaces custom npm config loading with the official `@npmcli/config` library to properly respect user registries and proxies.

*   **[#22679](https://github.com/anomalyco/opencode/pull/22679) [feat(core): add fence to make all methods strongly consistent when syncing]**
    *   Implements a "fence" token in the sync state to ensure the control plane waits for workspace consistency, preventing race conditions.

**Maintenance & Refactoring**
*   **[#22665](https://github.com/anomalyco/opencode/pull/22665) [fix(nix): add shared package to bun install filters]**
    *   Build system fix to ensure the new `packages/shared` code is included in Nix builds.

*   **[#22676](https://github.com/anomalyco/opencode/pull/22676) [feat: Use proper globbing for "edit", "read" and "external_directory" permissions]**
    *   Enhances the permission system to support globbing patterns (e.g., `src/**/*.ts`), offering finer-grained security control over file operations.

*   **[#22674](https://github.com/anomalyco/opencode/pull/22674) [fix: add support for ACP writeTextFile clientCapability]**
    *   Fixes file syncing compatibility for clients adhering to the Model Context Protocol (ACP) standard.

**UI & Experience**
*   **[#18767](https://github.com/anomalyco/opencode/pull/18767) [feat(app): Mobile Touch Optimization]**
    *   Significant PR optimizing the web app for mobile/touch devices, ensuring the desktop experience remains intact.

*   **[#13854](https://github.com/anomalyco/opencode/pull/13854) [fix(tui): stop streaming markdown/code after message completes]**
    *   Fixes a TUI rendering bug where completed messages would fail to render the last line of a table or code block due to incorrect streaming state.

## 5. Feature Request Trends
*   **Model Provider Expansion:** Users are aggressively requesting support for new providers, specifically **Kimi K2.6** (Moonshot AI) and **Gab.ai**.
*   **Background/Delayed Execution:** There is a trending desire for "background" or "delayed" execution queues, allowing users to submit tasks that do not block the active conversation thread.
*   **Inline Tool Invocation:** Developers want more natural ways to invoke skills/tools, specifically requesting **$skill-name** syntax anywhere in a prompt.
*   **Advanced Permission Controls:** Users want more granular permissions (globbing support for read/edit) and stricter defaults ("always ask" mode).

## 6. Developer Pain Points
*   **Cost & Quota Management:** The **Copilot "User" vs "Agent" classification bug** (#8030) is causing rapid consumption of paid quotas, generating significant anxiety.
*   **Registry & Proxy Configuration:** Despite past fixes, **npm registry detection** and **proxy support** (especially for Windows/Enterprise users) remain frequent friction points.
*   **Tool Calling Reliability:** Errors regarding **`tool_use` and `tool_result` block mismatches** (often with Claude or Azure models) continue to plague users, suggesting robustness issues in the message history management.
*   **Binary Compatibility:** The shift to **WASM SIMD** in v1.4.6 unexpectedly locked out users on older CPUs, highlighting a tension between performance and legacy hardware support.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-16

## 1. Today's Highlights
The most significant update is the **discontinuation of the Qwen OAuth Free Tier**, effective **2026-04-15**. This policy shift—reducing the daily quota from 1,000 to 100 requests and ultimately shutting down the free entry point—has dominated community discussions and sparked strong backlash among long-time users. Concurrently, the release of **v0.14.5** introduces context usage telemetry and startup performance profiling, alongside ongoing efforts to refine "Agent" coordination and sub-agent memory management.

## 2. Releases
*   **v0.14.5 (Stable)**
    *   **Context Usage Transparency**: Exposes `/context` usage data in non-interactive mode and via the SDK API ([#2916](https://github.com/QwenLM/qwen-code/pull/2916)).
    *   **Performance Profiling**: Adds a startup performance profiler to help identify boot bottlenecks ([#3232](https://github.com/QwenLM/qwen-code/pull/3232)).
    *   **Core Enhancements**: Implements `fork subagent` logic improvements for better parallel processing.

*   **v0.14.4-preview.1** & **Nightly**
    *   These releases align with the stable branch changes, focusing heavily on internal refactoring of the `fork` process and preparing infrastructure for advanced Agent coordination.

## 3. Hot Issues
*   **[#3203](https://github.com/QwenLM/qwen-code/issues/3306) - Qwen OAuth Free Tier Policy Adjustment** (Status: Open)
    *   **Why it matters**: The defining issue of the day. The official reduction to 100 requests/day and the total discontinuation of the free tier on April 15 have left many users unable to work.
    *   **Community Reaction**: Frustration is high; users feel "betrayed" and are actively seeking alternatives (OpenRouter, Fireworks AI, GLM).

*   **[#3296](https://github.com/QwenLM/qwen-code/issues/3296) & [#3281](https://github.com/QwenLM/qwen-code/issues/3281) - Authentication succeeded, but requests fail**
    *   **Why it matters**: Critical UX breakdown. Users authenticate successfully but immediately hit "quota exceeded" errors due to the policy change, leading to confusion about whether the service is broken.
    *   **Community Reaction**: Calls for clearer in-CLI messaging regarding the policy cutoff.

*   **[#3277](https://github.com/QwenLM/qwen-code/issues/3277) - Qwen Code MCP Client Limited to 2 Connections**
    *   **Why it matters**: A production-blocking bug for infrastructure users. The artificial 2-connection limit is causing data loss and stability issues in multi-node environments.
    *   **Community Reaction**: Labeled "CRITICAL" by users.

*   **[#3289](https://github.com/QwenLM/qwen-code/issues/3289) - Shell commands silently fail with `node_modules`**
    *   **Why it matters**: Root cause identified in `chokidar` watcher settings. Commands like `!ls` return exit code 1 with no output when `node_modules` are present, breaking local development workflows.
    *   **Community Reaction**: Developers appreciate the root cause analysis and are awaiting a patch.

*   **[#3243](https://github.com/QwenLM/qwen-code/issues/3243) - LSP diagnosis not updated after edit**
    *   **Why it matters**: Affects the AI's ability to "see" the changes it just made, leading to circular error checking and confusion.
    *   **Community Reaction**: High impact on IDE integration reliability.

*   **[#3272](https://github.com/QwenLM/qwen-code/issues/3272) - No Pro plan available**
    *   **Why it matters**: With the free tier gone, users want to pay, but the Pro plan is consistently "sold out."
    *   **Community Reaction**: "WTH" – users are frustrated that there is no paid upgrade path available to escape the free limits.

*   **[#2973](https://github.com/QwenLM/qwen-code/issues/2973) - Poor System Prompt adherence**
    *   **Why it matters**: Affects core model reliability. Users report the model frequently ignores instructions or executes tasks incorrectly despite clear system prompts.

*   **[#3268](https://github.com/QwenLM/qwen-code/issues/3268) - Tab key inserts literal tab**
    *   **Why it matters**: UX regression in the CLI input buffer. Tab is expected to trigger completion/inspection, not insert a whitespace character.

*   **[#3172](https://github.com/QwenLM/qwen-code/issues/3172) - Intermittent crashes in Wrap**
    *   **Why it matters**: Stability issues for users running Qwen Code inside specific environments (like the Wrap terminal).

*   **[#241](https://github.com/QwenLM/qwen-code/issues/241) / [#3103](https://github.com/QwenLM/qwen-code/pull/3103) - Shift+Enter support**
    *   **Why it matters**: Long-standing request for multi-line input support without submitting the prompt prematurely.

## 4. Key PR Progress
*   **[#3291](https://github.com/QwenLM/qwen-code/pull/3291) - Discontinue Qwen OAuth Free Tier**
    *   **Change**: Updates client messaging to "discontinued," blocks new signups, and adds persistent warnings for existing users.
    *   **Impact**: Aligns the client code with the controversial new billing reality.

*   **[#3297](https://github.com/QwenLM/qwen-code/pull/3297) - Lazy factory registration with concurrency dedup**
    *   **Change**: Fixes a P0 bug in `ToolRegistry` where concurrent calls could instantiate tools twice, causing memory leaks.
    *   **Impact**: Improves stability and resource management.

*   **[#3103](https://github.com/QwenLM/qwen-code/pull/3103) - Support Shift+Enter for newline**
    *   **Change**: Implements a multi-faceted approach (termcap, escape sequences, alt-buffer) to ensure Shift+Enter inserts a newline across different terminals.
    *   **Impact**: Major UX improvement for prompt writing.

*   **[#3085](https://github.com/QwenLM/qwen-code/pull/3085) - Startup Optimization**
    *   **Change**: Implements API preconnect (warming TCP/TLS connections) and early input capture to reduce perceived latency.
    *   **Impact**: Qwen Code will feel snappier on startup.

*   **[#3276](https://github.com/QwenLM/qwen-code/pull/3276) - Enforce parallel agent dispatch in `/review`**
    *   **Change**: Strengthens prompts for `qwen3.6-plus` to ensure review agents are launched in parallel rather than serially.
    *   **Impact**: Faster code reviews for users of supported models.

*   **[#3283](https://github.com/QwenLM/qwen-code/pull/3283) - Capability-based command filtering**
    *   **Change**: Replaces hardcoded command whitelists with a metadata model declaring `commandType` and `supportedModes`.
    *   **Impact**: More extensible and self-documenting command handling.

*   **[#2990](https://github.com/QwenLM/qwen-code/pull/2990) & [#2827](https://github.com/QwenLM/qwen-code/pull/2827) - Hooks System Expansion**
    *   **Change**: Adds "Prompt Hooks" (LLM-based condition evaluation), "HTTP Hooks," and "Function Hooks."
    *   **Impact**: Significantly increases the extensibility of Qwen Code for complex workflows and SDK integration.

*   **[#3093](https://github.com/QwenLM/qwen-code/pull/3093) - Session Management**
    *   **Change**: Adds rename, delete, and auto-title generation for sessions across CLI and VSCode.
    *   **Impact**: Better organization of long-term chat history.

*   **[#2886](https://github.com/QwenLM/qwen-code/pull/2886) - Agent Team Feature**
    *   **Change**: Experimental feature allowing a lead agent to coordinate a team of parallel sub-agents.
    *   **Impact**: The future of complex, multi-file task handling in Qwen Code.

*   **[#3303](https://github.com/QwenLM/qwen-code/pull/3303) - Detect Zed.app on macOS**
    *   **Change**: Fixes editor detection for Zed when it's not in the system PATH.
    *   **Impact**: Fixes integration for Zed editor users.

## 5. Feature Request Trends
*   **Fallback Models**: Users want a `FALLBACK_MODEL` environment variable to automatically switch providers when hitting rate limits (e.g., switching from Qwen to OpenRouter on 429 errors).
*   **Billing & Monetization**: With the free tier ending, there is a surge in requests for a reliable "Pro" plan or usage-based billing options, as the current Pro plan is frequently unavailable.
*   **Context Optimization**: Developers are requesting smarter context handling (e.g., removing the file tree from the top of the prompt) to reduce token costs and improve cache hits.

## 6. Developer Pain Points
*   **The "Free Tier" Whiplash**: The abrupt nature of the quota reduction (1000 -> 100 -> 0) has disrupted workflows for users who relied on Qwen Code for daily tasks. The lack of a seamless transition to a paid tier exacerbates this.
*   **Silent Failures**: Issues like `node_modules` breaking shell commands (#3289) or LSP diagnostics not updating (#3243) create "silent" failures where the agent thinks it succeeded but didn't, or vice-versa.
*   **Input Handling**: Basic terminal interactions (Tab key, Shift+Enter) remain inconsistent across different terminal emulators, requiring complex patches rather than simple fixes.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*