# AI CLI Tools Community Digest 2026-04-15

> Generated: 2026-04-15 00:18 UTC | Tools covered: 8

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

# Cross-Tool Analysis: AI CLI Tools Community Digest (2026-04-15)

## 1. Ecosystem Overview
The AI CLI landscape is currently undergoing a **stability and refinement phase**, shifting from rapid capability addition to addressing accumulated technical debt. Across the ecosystem, engineering teams are prioritizing **resource management**—specifically resolving severe memory leaks (OpenAI Codex), token inflation bugs (Claude Code), and CPU saturation issues (GitHub Copilot). A secondary major trend is the race toward **extensibility standards**, with tools like Charm Crush and OpenAI Codex aggressively implementing generalised "Hooks" systems to match Claude Code’s early lead in plugin orchestration. Finally, there is a growing divergence in "thinking" model handling, where vendors are balancing user demand for Chain-of-Thought transparency against the massive latency and token costs these models incur.

## 2. Activity Comparison

| Tool | Release Status | Critical Issues | Active PRs | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.108 (Active) | High (Token Inflation, Timeouts) | 10 Merged | Plugin Ecosystem & Lifecycle |
| **OpenAI Codex** | v0.121.0-Alpha (Unstable) | Critical (Memory Leaks, CPU 100%) | 7 Open | Infrastructure Stability |
| **Charm Crush** | Nightly Branch | Medium (Session Locks) | 10 Open | Extensibility & Hooks |
| **Gemini CLI** | v0.39.0-preview | Medium (Startup Lag) | 10 Merged | Performance (tsgo) & Voice |
| **GitHub Copilot** | v1.0.26 (Stable) | High (Auth/Policy Blocks) | 1 Open | Platform Parity (Win/Linux) |
| **Kimi Code** | v1.34.0 (Stable) | Medium (Thinking UX) | 10 Open | UX Transparency & Traces |
| **OpenCode** | v1.4.4 (Stable) | Critical (Azure Outage) | 10 Merged | Enterprise Integration (LSP) |
| **Qwen Code** | v0.14.4-nightly | High (Quota/Rate Limit) | 10 Merged | History Management & Parity |

## 3. Shared Feature Directions
The following requirements are appearing simultaneously across multiple communities, indicating industry-standard needs:

*   **Generalized Hooks & Automation**
    *   **Tools:** OpenAI Codex, Charm Crush, Qwen Code, GitHub Copilot.
    *   **Requirement:** Users demand programmatic control over the agent lifecycle (PreToolUse/PostTurn hooks) to enforce coding standards, gate deployments, and integrate with external automation pipelines.
*   **Session Management & Context Compaction**
    *   **Tools:** Claude Code, OpenCode, Qwen Code, OpenAI Codex.
    *   **Requirement:** As context windows grow, users need better tools to manage history (naming, forking, deleting) and control how "context compaction" occurs to prevent the AI from losing critical instructions during long sessions.
*   **Terminal User Experience (TUI) Quality of Life**
    *   **Tools:** GitHub Copilot, OpenCode, Claude Code.
    *   **Requirement:** High demand for "Vim modes" and improved copy-paste mechanisms, indicating that while the AI is smart, the *interface* is still clumsy for power users.
*   **"Thinking" Model Transparency**
    *   **Tools:** Kimi Code, Gemini CLI, Claude Code.
    *   **Requirement:** A "push-pull" dynamic where users want full visibility into Chain-of-Thought (CoT) to debug logic, but want the ability to toggle it off to reduce latency and token costs.

## 4. Differentiation Analysis

| Tool | Technical Approach | Target User | Differentiator |
| :--- | :--- | :--- | :--- |
| **Claude Code** | Enterprise/Cloud-native | Professional Devs | **Plugin Lifecycle:** Most advanced plugin architecture (MCP, Hooks). |
| **OpenAI Codex** | Rust-based Core | Infrastructure/Platform | **Ambition:** Focuses on "Agent of Agents" and multi-modal orchestration. |
| **Charm Crush** | TUI/UX Focused | Terminal Power Users | **Integration:** Building compatibility layers (JSON) to be "managed" by other tools. |
| **Gemini CLI** | TypeScript/Local-First | Polyglot Web Devs | **Performance:** Rewriting core in `tsgo` for native preview speeds; Voice-first. |
| **GitHub Copilot** | VS Code Integrated | Enterprise Teams | **Compliance:** Heavily focused on "Policy Engines" and Authorization blocks. |
| **OpenCode** | Observability-First | Backend/Enterprise Devs | **Deep Tracing:** Unique focus on OpenTelemetry and LSP integration. |
| **Qwen Code** | High-Performance | Cost-Conscious/OSS | **Raw Speed:** Parallelized agent execution and `/batch` operations. |

## 5. Community Momentum & Maturity
*   **Highest Velocity (Rapid Iteration):** **Charm Crush** and **Qwen Code**. These tools are pushing multiple high-impact PRs daily (Hooks, Command Platforms, Parallelization) and are not afraid to refactor core systems.
*   **"Squeezed Middle" (Stability Issues):** **OpenAI Codex** and **GitHub Copilot**. Despite being major players, they are facing significant backlash regarding basic stability (memory leaks, authentication loops, CPU usage), suggesting growing pains in scaling their architectures.
*   **Enterprise Stability:** **OpenCode** and **Claude Code** (v2.1.x). These tools feel more "settled," focusing on provider compatibility (Azure/Databricks) and session hygiene rather than rewriting their cores.

## 6. Trend Signals for Developers
Based on community feedback, here are the signals driving development decisions for late 2026:

1.  **The "Hooks" Wars:** The era of static prompts is ending. The community is standardizing on **JSON-based hooks** (similar to `package.json` scripts) to allow LLMs to trigger local scripts, linters, and tests automatically.
2.  **Cost Anxiety is Real:** The backlash against **Token Inflation** (Claude Code) and **Reasoning Bloat** (Kimi Code) indicates that developers are hypersensitive to API costs. Features like `usage-monitor` and `auto-compact` are becoming table stakes, not add-ons.
3.  **Local vs. Cloud Hybrid:** The success of **Charm Crush** and **Gemini CLI** in allowing users to swap providers (OpenAI vs. Ollama) signals that developers no longer want "all-in" on a single cloud vendor. They want CLI tools that can route cheap tasks to local LLMs and hard tasks to Cloud GPT-5/Claude.
4.  **Authentication Fatigue:** Issues with "Access Denied" errors across GitHub Copilot and OpenCode suggest that complex SSO/OAuth flows are a major barrier to adoption for CLI tools compared to simple API keys.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Analysis period: Data as of 2026-04-15*

## 1. Top Skills Ranking
Based on community engagement via Pull Requests (sorted by activity):

1.  **[document-typography](https://github.com/anthropics/skills/pull/514)** (Open)
    *   **Functionality:** Typographic quality control for AI-generated documents, fixing orphan words, widow paragraphs, and numbering misalignment.
    *   **Status:** Open - Addresses a universal pain point in document generation.

2.  **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (Open)
    *   **Functionality:** Meta-tools for evaluating Skills across structure, documentation, testing, and security (permission auditing).
    *   **Status:** Open - High demand for ecosystem governance and trust.

3.  **[odt](https://github.com/anthropics/skills/pull/486)** (Open)
    *   **Functionality:** Creation, parsing, and conversion of OpenDocument Text (.odt) and Spreadsheet (.ods) formats.
    *   **Status:** Open - Expands format support beyond Microsoft Office/Markdown.

4.  **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** (Open)
    *   **Functionality:** Systematic workflow to identify orphaned code, unused files, and documentation gaps.
    *   **Status:** Open - Tackles technical debt and legacy project maintenance.

5.  **[frontend-design](https://github.com/anthropics/skills/pull/210)** (Revision)
    *   **Functionality:** Improved clarity and actionability for frontend design tasks.
    *   **Status:** Open - Focuses on optimizing instruction following for single-conversation tasks.

6.  **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (Open)
    *   **Functionality:** Comprehensive guidance on testing philosophy (Unit, Component, E2E) and the "Testing Trophy" model.
    *   **Status:** Open - Addresses the critical need for robust testing standards.

## 2. Community Demand Trends
Derived from active Issues and proposals:

*   **Persistent Memory & Knowledge Management**
    *   **Trend:** Users are frustrated by context loss between sessions.
    *   **Proposal:** [record-knowledge](https://github.com/anthropics/skills/pull/521) and [shodh-memory](https://github.com/anthropics/skills/pull/154) skills aim to persist learnings across sessions via `.claude/knowledge/` or memory systems.
*   **Governance & Security**
    *   **Trend:** Trust boundaries are a major concern as community skills proliferate.
    *   **Proposal:** [Issue #492](https://github.com/anthropics/skills/issues/492) highlights namespace abuse risks, while PR #83 proposes security analyzers.
*   **Enterprise & Collaboration Features**
    *   **Trend:** Manual skill sharing (downloading files) is a bottleneck.
    *   **Proposal:** [Issue #228](https://github.com/anthropics/skills/issues/228) requests native org-wide skill sharing libraries.
*   **System Reliability**
    *   **Trend:** Frequent bugs with `skill-creator` and `run_eval.py` are hindering development.
    *   **Issues:** [skill-creator best practices](https://github.com/anthropics/skills/issues/202), [UTF-8 panics](https://github.com/anthropics/skills/pull/362), and [evaluation failures](https://github.com/anthropics/skills/issues/556).

## 3. High-Potential Pending Skills
Active PRs likely to impact the ecosystem soon:

*   **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)**: Integration with SAP's open-source tabular foundation model for business analytics.
*   **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)**: Multimedia generation capabilities (Imagen 3.0, Veo 3.1).
*   **[x402 BSV auth + micropayment](https://github.com/anthropics/skills/pull/374)**: Enabling AI agents to handle micropayments and service discovery.
*   **[sensory (macOS automation)](https://github.com/anthropics/skills/pull/806)**: Native macOS automation via AppleScript as an alternative to screen-based computer use.

## 4. Skills Ecosystem Insight
The community is rapidly moving beyond basic coding tasks into **complex document processing, persistent memory systems, and enterprise governance**, signaling a demand for Claude Code to function as a persistent, intelligent agent rather than just a coding assistant.

---

# Claude Code Community Digest: 2026-04-15

## Today's Highlights
Today's digest focuses on a critical **token inflation regression** affecting versions 2.1.100+, which is reportedly consuming ~20k extra cache tokens per request. Simultaneously, the latest releases (**v2.1.108** and **v2.1.107**) introduce granular prompt caching controls and a new recap feature. The community is actively voicing concerns regarding stability, specifically around "stream idle timeouts" and a perceived degradation in model reasoning capabilities during complex tasks.

## Releases
**v2.1.108 & v2.1.107**
*   **Prompt Caching Control:** Added `ENABLE_PROMPT_CACHING_1H` environment variable to enforce 1-hour TTL across API Key, Bedrock, Vertex, and Foundry. Added `FORCE_PROMPT_CACHING_5M` for 5-minute TTL. Note: `ENABLE_PROMPT_CACHING_1H_BEDROCK` is deprecated but still honored.
*   **Recap Feature:** Introduced a new recap feature to provide better context.
*   **UI Improvements:** "Thinking" hints are now displayed sooner during long operations to reduce perceived latency.

## Hot Issues

1.  **[Critical Cost Regression] CC v2.1.100+ inflates cache_creation by ~20K tokens vs v2.1.98** ([#46917](https://github.com/anthropics/claude-code/issues/46917))
    *   **Why it matters:** Users are reporting significant, unexplained increases in `cache_creation_input_tokens` (approx 20k) despite no changes in request payload. This is causing unexpected billing spikes.
    *   **Reaction:** Highly active thread (150+ 👍); users suspect server-side routing changes tied to the User-Agent.

2.  **[Connectivity] API Error: Stream idle timeout** ([#46987](https://github.com/anthropics/claude-code/issues/46987))
    *   **Why it matters:** A widespread duplicate issue affecting macOS users receiving "partial response" errors. It disrupts long-running coding sessions.
    *   **Reaction:** 83 comments in 48 hours; indicates a potential infrastructure or client-side keep-alive bug.

3.  **[Auth] Remote Control unavailable despite Pro plan** ([#28817](https://github.com/anthropics/claude-code/issues/28817))
    *   **Why it matters:** Users on valid Pro plans are unable to use Remote Control features.
    *   **Reaction:** 60 👍; authentication issues remain a top friction point.

4.  **[Model Behavior] Claude Opus 4.6 ignores established session rules under task pressure** ([#48136](https://github.com/anthropics/claude-code/issues/48136))
    *   **Why it matters:** Reports of Opus 4.6 ignoring persistent project memory during complex tasks, leading to deployment failures.
    *   **Reaction:** Highlights concerns about the reliability of 1M context windows in high-pressure scenarios.

5.  **[MCP] Chrome extension service worker crashes on Linux** ([#47808](https://github.com/anthropics/claude-code/issues/47808))
    *   **Why it matters:** The native messaging host crashes due to a missing `DISABLE_AUTOUPDATER` env var, breaking MCP connections for Linux users.
    *   **Reaction:** Critical for developers relying on browser-based MCP tools.

6.  **[Plugins] Telegram plugin auto-loads in all sessions** ([#38098](https://github.com/anthropics/claude-code/issues/38098))
    *   **Why it matters:** The Telegram plugin spawns in sessions not started with `--channels`, causing "409 Conflict" errors and tool loss.
    *   **Reaction:** Underscores instability in the plugin lifecycle management.

7.  **[Feature Request] Sticky Input Mode** ([#13591](https://github.com/anthropics/claude-code/issues/13591))
    *   **Why it matters:** Users want the input box to remain visible while scrolling long outputs.
    *   **Reaction:** 36 👍; a highly requested UX improvement for the TUI.

8.  **[Model Support] OpenRouter model names not recognized** ([#47298](https://github.com/anthropics/claude-code/issues/47298))
    *   **Why it matters:** `getCanonicalName` expects dash notation (`claude-opus-4-6`), but OpenRouter uses dots (`anthropic/claude-opus-4.6`), silently disabling capabilities.
    *   **Reaction:** Important for users not using the official API.

9.  **[MCP] Claude in Chrome: 'Browser extension is not connected'** ([#24935](https://github.com/anthropics/claude-code/issues/24935))
    *   **Why it matters:** Persistent connection issues between the CLI and the Chrome extension v1.0.47.
    *   **Reaction:** Affects workflow integration for web developers.

10. **[TUI Regression] Startup banner reappears mid-session** ([#42192](https://github.com/anthropics/claude-code/issues/42192))
    *   **Why it matters:** On Windows, the splash screen randomly overlays the active conversation, causing confusion.
    *   **Reaction:** Visual glitches in the TUI continue to be a distraction.

## Key PR Progress

1.  **[feat] Shell completion for bash, zsh, and fish** ([#27395](https://github.com/anthropics/claude-code/pull/27395))
    *   Adds official tab completion support for all CLI subcommands (`auth`, `mcp`, `plugin`, etc.), significantly improving CLI usability.

2.  **[feat] `notify-on-complete` plugin** ([#47759](https://github.com/anthropics/claude-code/pull/47759))
    *   Introduces an official plugin to trigger desktop notifications, sounds, or speech when long tasks finish.

3.  **[feat] `usage-monitor` plugin** ([#47760](https://github.com/anthropics/claude-code/pull/47760))
    *   Adds a self-contained usage monitor with a macOS SwiftBar installer to track token consumption in real-time.

4.  **[feat] `subagent-cleanup` plugin** ([#47830](https://github.com/anthropics/claude-code/pull/47830))
    *   Addresses the orphaned process issue by automatically terminating leftover subagent processes at session start.

5.  **[feat] `preserve-session` plugin** ([#39148](https://github.com/anthropics/claude-code/pull/39148))
    *   Allows session history to survive project directory renames or moves by using path-independent UUIDs.

6.  **[fix] Multi-worktree session discovery** ([#48151](https://github.com/anthropics/claude-code/pull/48151))
    *   Fixes `--resume` functionality when using bare repos with linked worktrees, improving support for complex git layouts.

7.  **[fix] Dockerfile Native Installer** ([#23853](https://github.com/anthropics/claude-code/pull/23853))
    *   Replaces deprecated `npm install` with the native `curl | bash` installer in the DevContainer Dockerfile.

8.  **[fix] Hook validator alignment** ([#47836](https://github.com/anthropics/claude-code/pull/47836))
    *   Updates the hook validator to support the plugin `hooks.json` wrapper format, aiding plugin developers.

9.  **[feat] Open Source Claude Code** ([#41447](https://github.com/anthropics/claude-code/pull/41447))
    *   The ongoing major effort to fully open-source the codebase.

10. **[fix] Add -exist flag to ipset** ([#47902](https://github.com/anthropics/claude-code/pull/47902))
    *   Prevents duplicate entry errors in firewall scripts during container restarts.

## Feature Request Trends
*   **Enhanced Session Management:** Users are requesting better controls over "Plan Mode," including the ability to re-enter planning or switch plans after execution has started.
*   **Cleanup & Deletion:** There is a clear demand for CLI commands to delete old sessions and clean up associated files to manage disk space.
*   **TUI UX:** "Sticky" input modes (keeping the prompt visible while scrolling) remain a high-priority request to improve readability of long outputs.

## Developer Pain Points
*   **Cost Visibility:** The v2.1.100+ token inflation bug has created significant anxiety regarding billing transparency.
*   **Plugin Instability:** Reports of plugins spawning duplicate processes (Telegram) or auto-loading when unwanted suggest the plugin lifecycle needs hardening.
*   **Model Reliability:** Several issues report that Claude Opus 4.6 "hallucinates" or ignores system instructions/memory during complex multi-file tasks, breaking trust in automated workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-15

## 1. Today's Highlights
The Codex ecosystem is currently addressing a critical **regression in CLI v0.120.0** related to `prompt_cache_retention` parameters, which is causing context compaction failures for users attempting to resume older sessions. While engineers push alpha releases (Rust v0.121.0) to stabilize the core, significant attention is focused on **resource management**, with multiple high-severity issues highlighting excessive CPU/GPU usage and memory leaks (up to 37GB) in the Desktop App and MCP environments.

## 2. Latest Releases
**Rust Core & CLI: v0.121.0-alpha series**
The latest alpha releases (v0.121.0-alpha.8, .9, and .10) were pushed in the last 24 hours.
*   **Focus:** These releases likely target the underlying stability of the Codex engine and the recently introduced context caching mechanisms.
*   **Note:** Users are currently advised to be cautious with CLI v0.120.0 due to reported session resumption bugs.

## 3. Hot Issues
*   **[#17809] Context compaction fails with unknown parameter 'prompt_cache_retention'** (CLOSED)
    *   **Why it matters:** This high-priority bug (56 👍) caused the Codex App to crash when managing long contexts.
    *   **Community:** Users confirmed this broke workflows immediately upon updating; it was marked closed swiftly, suggesting a hotfix was deployed.
    *   [Link](https://github.com/openai/codex/issues/17809)

*   **[#12491] MCP child processes not reaped (1300+ zombies, 37GB leak)** (OPEN)
    *   **Why it matters:** A terrifying memory leak report where the App GUI failed to clean up Model Context Protocol (MCP) processes.
    *   **Community:** "1300+ zombies" indicates a severe resource exhaustion bug that likely requires a restart of the Codex App.
    *   [Link](https://github.com/openai/codex/issues/12491)

*   **[#16231] High CPU usage on macOS (M5 Pro) after updating extension** (OPEN)
    *   **Why it matters:** A widespread regression affecting users on Apple Silicon (macOS Tahoe 26.4), causing overheating.
    *   **Community:** 49 👍. Users report the issue persists even with empty projects, suggesting a background loop or render issue.
    *   [Link](https://github.com/openai/codex/issues/16231)

*   **[#16088] WSL: Starting a thread creates empty .codex file** (OPEN)
    *   **Why it matters:** Breaks workflow in WSL environments by leaving behind unwanted artifacts that confuse version control.
    *   **Community:** 53 👍. Users want the agent to respect the absence of a `.codex` directory.
    *   [Link](https://github.com/openai/codex/issues/16088)

*   **[#11981] Codex App 100% CPU Usage with single agent** (OPEN)
    *   **Why it matters:** Highlights an inefficiency in the agent scheduler within the Mac App (Mac OS 26.3).
    *   **Community:** Users expect idle agents to consume near-zero resources.
    *   [Link](https://github.com/openai/codex/issues/11981)

*   **[#17832] Regression: Playwright MCP stdio processes still leak** (OPEN)
    *   **Why it matters:** Indicates that a previous fix (#16895) for MCP memory leaks was insufficient.
    *   **Community:** Reporter cites "213 orphaned pairs," showing the issue is scaling with usage.
    *   [Link](https://github.com/openai/codex/issues/17832)

*   **[#10601] Sandbox setup error on Windows** (OPEN)
    *   **Why it matters:** Blocks Windows developers from using the secure sandbox environment.
    *   **Community:** High engagement (44 comments) with various troubleshooting attempts.
    *   [Link](https://github.com/openai/codex/issues/10601)

*   **[#11635] Stale capacity banner** (OPEN)
    *   **Why it matters:** UI/UX bug where a false "model at capacity" error obscures the active response.
    *   **Community:** Confusing for Business users with prepaid credits who assume they are blocked.
    *   [Link](https://github.com/openai/codex/issues/11635)

*   **[#17624] Review tab stuck on "Loading diff" on Windows** (OPEN)
    *   **Why it matters:** The app passes `/F:/...` as a literal path to `git diff`, breaking the Review feature on Windows.
    *   **Community:** Simple but blocking path-handling bug for Windows users.
    *   [Link](https://github.com/openai/codex/issues/17624)

*   **[#14754] Add PreToolUse/PostToolUse hooks** (OPEN)
    *   **Why it matters:** Developers want programmatic control over agent actions to enforce code quality gates.
    *   **Community:** A top feature request for extending Codex's automation capabilities.
    *   [Link](https://github.com/openai/codex/issues/14754)

## 4. Key PR Progress
*   **[#17839] [TUI][Elicitations] Add high-risk app warnings** (CLOSED)
    *   **Detail:** Adds risk levels (`riskLevel`) to MCP elicitation requests. High-risk approvals now render with a red title and a `⚠` prefix in the TUI.
    *   [Link](https://github.com/openai/codex/pull/17839)

*   **[#17757] Implement turn-scoped hook interrupts** (CLOSED)
    *   **Detail:** Refines how `PermissionRequest` denies are handled. It now treats `deny { interrupt: true }` as a turn-scoped abort rather than a full session stop, allowing the workflow to continue more gracefully.
    *   [Link](https://github.com/openai/codex/pull/17757)

*   **[#17563] Add PermissionRequest hooks support** (OPEN)
    *   **Detail:** Wires shell, unified exec, and network approval prompts into the hook flow. Allows external scripts to programmatically allow or deny Codex actions.
    *   [Link](https://github.com/openai/codex/pull/17563)

*   **[#17854] Update ToolSearch to be enabled by default** (OPEN)
    *   **Detail:** Promotes the `ToolSearch` feature from experimental to `Stable`. This enhances the agent's ability to find relevant tools automatically.
    *   [Link](https://github.com/openai/codex/pull/17854)

*   **[#17848] [docs] Add security boundaries reference** (OPEN)
    *   **Detail:** Updates `SECURITY.md` to explicitly define security boundaries, pointing users to documentation regarding sandboxing and approvals.
    *   [Link](https://github.com/openai/codex/pull/17848)

*   **[#17824] Add local thread store listing** (OPEN)
    *   **Detail:** Moves filesystem and SQLite thread listing operations into a local `ThreadStore` implementation. This is a foundational step toward better thread management.
    *   [Link](https://github.com/openai/codex/pull/17824)

*   **[#17713] feat: add opt-in provider runtime abstraction** (OPEN)
    *   **Detail:** Introduces a generic abstraction for model provider config. This paves the way for supporting non-OpenAI models or custom endpoints in the future.
    *   [Link](https://github.com/openai/codex/pull/17713)

*   **[#17855] support external plugins migration** (OPEN)
    *   **Detail:** Infrastructure work to support the migration of external plugins.
    *   [Link](https://github.com/openai/codex/pull/17855)

*   **[#17791] Stabilize Windows and integration tests** (OPEN)
    *   **Detail:** Addressed spurious test failures encountered overnight, improving the reliability of the CI/CD pipeline.
    *   [Link](https://github.com/openai/codex/pull/17791)

*   **[#17425] Auto-upgrade configured marketplaces** (OPEN)
    *   **Detail:** Adds best-effort auto-upgrade for user-configured Git marketplaces, reducing manual maintenance overhead.
    *   [Link](https://github.com/openai/codex/pull/17425)

## 5. Feature Request Trends
*   **Hooks & Automation:** There is a strong push for "Hooks" (events triggered before/after actions) to enforce coding standards (Issue #14754) and control permissions programmatically (PR #17563).
*   **Window Management:** Users are requesting "Multi-Window Support" for macOS (Issue #12773) to better organize parallel tasks.
*   **Context Transparency:** Users want the ability to "Refuse Code Changes and Query Reason" (Issue #13862), indicating a desire for more explainability from the agent.

## 6. Developer Pain Points
*   **Resource Exhaustion:** The community is plagued by high CPU usage bugs on both macOS (Issues #16231, #11981) and Windows (Issue #17429), as well as severe memory leaks involving MCP processes (Issue #17832).
*   **Windows Pathing & Sandboxing:** Windows users continue to face friction regarding sandbox setup errors (Issue #10601), incorrect git path handling (Issue #17624), and agent mode failures in WSL (Issue #16815).
*   **Upgrade Instability:** Recent updates have introduced regressions, specifically the "prompt_cache_retention" error breaking session resumes (Issue #17819), making some developers hesitant to update immediately.

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest: 2026-04-15

## Today's Highlights
The Crush project is undergoing significant development focused on ecosystem extensibility and session reliability. Key advancements include the implementation of a generalized hooks system for external orchestration, a robust theming engine, and critical fixes for session recovery and LSP diagnostics. The community is actively discussing AI provider integrations, specifically regarding OpenAI subscriptions and Ollama model compatibility.

## Releases
No stable releases were published in the last 24 hours; activity is focused on the `nightly` branch.

## Hot Issues

1.  **[#2023 Support OpenAI subscriptions](https://github.com/charmbracelet/crush/issues/2023)** (Closed)
    *   **Why it matters:** Aligns Crush with competitors utilizing OpenAI's officially supported 3rd party agent subscriptions.
    *   **Reaction:** Highly requested (11 👍); users noted that subsidized subscriptions are significantly cheaper than standard API keys.

2.  **[#1336 General hooks system](https://github.com/charmbracelet/crush/issues/1336)** (Open)
    *   **Why it matters:** Users want a generalized hook system similar to Claude Code to allow custom notifications at various execution stages.
    *   **Reaction:** Strong interest (5 👍) in extending Crush's event handling capabilities.

3.  **[#1147 Option to disable animations](https://github.com/charmbracelet/crush/issues/1147)** (Open)
    *   **Why it matters:** Performance optimization for low-bandwidth environments or users sensitive to rapid UI changes.
    *   **Reaction:** Recurring request indicating the default animations can cause "chugging" on slower connections.

4.  **[#2608 Group skills by source package](https://github.com/charmbracelet/crush/issues/2608)** (Open)
    *   **Why it matters:** Improves discoverability as the number of skills (superpowers, etc.) grows, making it easier to identify where a skill originates.
    *   **Reaction:** Newly opened, already addressed by an active PR (#2620).

5.  **[#2623 Thinking not supported with ollama qwen models](https://github.com/charmbracelet/crush/issues/2623)** (Open)
    *   **Why it matters:** Highlights compatibility friction between Crush's "thinking mode" and specific local models (Qwen via Ollama).
    *   **Reaction:** Critical bug for users relying on local coding models.

## Key PR Progress

1.  **[#2612 feat(hooks): JSON-based compatibility layer](https://github.com/charmbracelet/crush/pull/2612)** (Open)
    *   **Details:** Implements a "JSON-Configured Lifecycle Interceptor Pattern." This creates a compatibility layer with industry standards (like Claude Code/Cursor), enabling external managers (e.g., Agent-of-Empires) to orchestrate Crush non-intrusively.

2.  **[#2618 feat: remember provider/model info per-session](https://github.com/charmbracelet/crush/pull/2618)** (Closed)
    *   **Details:** Enhances UX by persisting the last used model and provider when switching sessions, allowing developers to pick up exactly where they left off without manual reconfiguration.

3.  **[#2622 fix: inject synthetic tool_result for orphaned tool_use](https://github.com/charmbracelet/crush/pull/2622)** (Open)
    *   **Details:** A critical fix for session resilience. It prevents permanent session locks caused by network timeouts or Ctrl-C interruptions by injecting synthetic tool results for orphaned tool calls upon resume.

4.  **[#2593 feat: add theme support](https://github.com/charmbracelet/crush/pull/2593)** (Open)
    *   **Details:** Introduces a formal theming system decoupling UI colors from hardcoded values. Includes support for the default `charmtone` and `gruvbox-dark`, switchable via the command palette.

5.  **[#2620 feat: add `crush skills list` command](https://github.com/charmbracelet/crush/pull/2620)** (Open)
    *   **Details:** Adds a CLI command to list skills grouped by source (Builtin, Project, User) with support for `--json` and `--flat` flags. Directly addresses Issue #2608.

6.  **[#2584 feat(agent): allow user to configure agent model size](https://github.com/charmbracelet/crush/pull/2584)** (Open)
    *   **Details:** Moves away from a hardcoded `large` model for the Task Agent, allowing users to configure the model size (and specific models) used by agents to suit cost or performance needs.

7.  **[#2562 feat(skills): add dialog to command palette](https://github.com/charmbracelet/crush/pull/2562)** (Open)
    *   **Details:** Integrates skills browsing directly into the TUI command palette, improving the discoverability and attachment of built-in and user-configured skills.

8.  **[#2613 fix(agent): prune excess images](https://github.com/charmbracelet/crush/pull/2613)** (Open)
    *   **Details:** Fixes a session deadlock issue where image-heavy conversations exceed provider limits (e.g., Gemini's 10-image cap) by automatically pruning the oldest images.

9.  **[#2598 feat: PreToolUse hook](https://github.com/charmbracelet/crush/pull/2598)** (Open)
    *   **Details:** The initial implementation of a hooks system (WIP), starting with shell script execution before tool use. Complements the JSON-based approach in #2612.

10. **[#2619 fix(lsp): mitigate stale diagnostics](https://github.com/charmbracelet/crush/pull/2619)** (Open)
    *   **Details:** Addresses a common frustration where LSP diagnostics remain outdated. This PR introduces changes to refresh or mitigate stale status indicators.

## Feature Request Trends
*   **Extensibility & Integration:** There is a massive push for hooks and integration standards. Issues and PRs are converging on supporting Claude Code/Cursor-style configurations (JSON) and shell-based hooks to allow Crush to fit into larger automation pipelines.
*   **Visual & UI Customization:** Users are demanding control over the UI look and feel. This is manifesting in requests for themes (Gruvbox support) and the ability to disable animations for performance.
*   **Cost Management:** Developers are looking for granular control over which models are used for which "agents" (Task vs. Coder) and support for cheaper subscription APIs (OpenAI) rather than standard key-based billing.

## Developer Pain Points
*   **Session Fragility:** Interruptions (network, user cancellation) are currently corrupting session states, specifically leaving "orphaned" tool calls that the API rejects on resume. This is a high-severity UX blocker being actively patched.
*   **Provider Incompatibility:** Users leveraging local models (specifically Qwen via Ollama) are finding that Crush's advanced features ("thinking mode") are incompatible with these models, leading to errors.
*   **Diagnostic Staleness:** Developers are reporting that the LSP status indicators frequently lag behind the actual state of the codebase, causing confusion about whether a file is truly ready or analyzed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-04-15

## 1. Today's Highlights
The Gemini CLI is seeing significant activity this week with a preview release (`v0.39.0-preview.0`) that brings policy refactoring and memory testing improvements. Developers are actively debating architectural shifts, particularly regarding the integration of AST-aware file reading to reduce token noise and improve precision. On the community experience front, a major conversation is brewing around "Voice Mode" implementation, balancing proprietary API reliance versus open-source local alternatives like Whisper.

## 2. Releases
*   **v0.39.0-preview.0**: Focuses on codebase health and robustness. Key changes include a refactor of the planner's policy priorities to consolidate read-only rules ([PR #24849](https://github.com/google-gemini/gemini-cli/pull/24849)) and the addition of a memory usage integration test harness ([PR #24876](https://github.com/google-gemini/gemini-cli/pull/24876)).
*   **v0.39.0-nightly**: Addressed stream wrapper memory fixes and improved the quota footer display for non-auto models.
*   **v0.38.0**: A stable release featuring a fix for slash command list refreshing (`/skills reload`) and core tool completion fixes.

## 3. Hot Issues
*   **[Startup Performance] Failing to download RipGrep slows down startup** ([#25323](https://github.com/google-gemini/gemini-cli/issues/25323))
    Users are reporting 2+ minute hangs if the CLI fails to download the RipGrep binary. The community is requesting a "fail-fast" approach rather than a timeout, or potentially bundling the binary to avoid network dependencies at startup.
*   **[Architecture] AST-aware file reads and search** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
    An internal Epic investigating whether Abstract Syntax Tree (AST) integration can help the agent read code more precisely. This could significantly reduce token costs and "misaligned read" errors by defining exact method bounds.
*   **[Feature Request] Real-time Voice Mode** ([#24175](https://github.com/google-gemini/gemini-cli/issues/24175))
    High-demand request for voice input capabilities. The debate is split between using the Gemini Live API for ease of use versus implementing a local Whisper backend for privacy and zero-latency.
*   **[UI/UX] Repeated Permission Prompts** ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916))
    Users are frustrated that the "Allow for all future sessions" instruction does not persist, causing repetitive approval prompts for the same files during a single session.
*   **[Core] Shell execution hangs after completion** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
    A critical bug where the CLI gets stuck in a "Waiting input" state even after a shell command has successfully finished.
*   **[Core] Scrambled text in SSH sessions** ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202))
    Windows users running the CLI via SSH to cloud environments are reporting unusable text rendering, indicating a terminal compatibility gap.
*   **[Agent] Random Temporary Script Creation** ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))
    The model tends to scatter temporary edit scripts across random directories instead of a centralized temp folder, creating significant "cleanup" friction for developers before committing.
*   **[Agent] Subagent Awareness of Approval Modes** ([#23582](https://github.com/google-gemini/gemini-cli/issues/23582))
    Subagents are reportedly ignoring active Approval Modes (e.g., Plan Mode), leading to tool requests that violate user constraints, causing the policy engine to block them unnecessarily.
*   **[Agent] Memory Routing (Global vs. Project)** ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819))
    A proposal to improve how the "memory" subagent saves context, distinguishing between user-specific global preferences (`~/.gemini/`) and project-specific conventions (`.gemini/`).
*   **[Platform] Table rendering in Screen Reader mode** ([#25218](https://github.com/google-gemini/gemini-cli/issues/25218))
    Streaming tables re-render on every chunk, breaking screen reader layout and accessibility.

## 4. Key PR Progress
*   **[Performance] Migrate to @typescript/native-preview (tsgo)** ([#25240](https://github.com/google-gemini/gemini-cli/pull/25240))
    A massive infrastructural change moving the repo from standard TypeScript to `tsgo`. Claims ~5.6x faster type-checking speeds (7.9s -> 1.4s baseline), significantly improving developer iteration velocity.
*   **[Feature] Add Voice Input with Pluggable Backend** ([#18499](https://github.com/google-gemini/gemini-cli/pull/18499))
    Implementation of the voice mode request. It features a pluggable architecture allowing users to choose between the default zero-install Gemini API or a local Whisper binary.
*   **[Core] Union-Find Context Compaction** ([#24736](https://github.com/google-gemini/gemini-cli/pull/24736))
    Introduces a "union-find" clustering algorithm for `AgentHistoryProvider`. This serves as an alternative compression strategy to prevent context history from bloating, moving messages from a "hot buffer" to a "cold forest" based on semantic relevance.
*   **[Core] Retry OpenSSL 3.x SSL Errors** ([#25187](https://github.com/google-gemini/gemini-cli/pull/25187))
    Fixes a streaming stability issue where OpenSSL 3.x TLS alerts (specifically `BAD_RECORD_MAC`) were causing the CLI to stall mid-stream. This PR adds these specific error codes to the retryable list.
*   **[Core] JIT Plan Directory Provisioning** ([#25384](https://github.com/google-gemini/gemini-cli/pull/25384))
    Phase 3 of the dynamic extension plan, implementing logic for dynamically resolving and provisioning plan directories on-demand with improved path safety checks.
*   **[Config] Fix Telemetry Traces** ([#25343](https://github.com/google-gemini/gemini-cli/pull/25343))
    Introduces a `telemetry.traces` flag to decouple detailed tracing from baseline telemetry. Heavy spans (tool outputs, file reads) are now strictly opt-in to reduce overhead.
*   **[UI] Implement Favorite Models and Cycling** ([#25072](https://github.com/google-gemini/gemini-cli/pull/25072))
    Adds the ability to pin favorite models and introduces keyboard shortcuts to cycle between them, addressing user feedback regarding quick model switching.
*   **[Non-Interactive] ACP Host Input Requests** ([#24664](https://github.com/google-gemini/gemini-cli/pull/24664))
    Enables Agent Control Protocol (ACP) clients to handle `ask_user` prompts themselves, a necessary step for headless or IDE-integrated workflows.
*   **[Docs] Add .mdx support to internal docs** ([#25090](https://github.com/google-gemini/gemini-cli/pull/25090))
    Updates the `get-internal-docs` tool to parse `.mdx` files, allowing the CLI to utilize richer documentation formats in its context window.
*   **[Config] Dynamic Extension Directory Resolution** ([#25382](https://github.com/google-gemini/gemini-cli/pull/25382))
    Phase 1 of fixing extension infrastructure, specifically correcting `ShellExecutionConfig` spreading and adding save backoff for `ProjectRegistry`.

## 5. Feature Request Trends
*   **Hybrid Voice Architectures**: Users want voice input, but there is a strong trend toward supporting local backends (Whisper) alongside cloud APIs to address latency and privacy concerns.
*   **Smarter Context Management**: Multiple requests point toward AST-aware parsing and smarter memory routing. Users want the agent to "know" the codebase structure (methods/classes) rather than treating it as a flat text file, and to distinguish between project rules and global user preferences.
*   **Model Management**: With the proliferation of models, users are demanding better tools to manage them—specifically "favorites" lists and quick shortcuts to swap models without interrupting flow.

## 6. Developer Pain Points
*   **"Cleanup Anxiety"**: The agent's tendency to write temporary scripts to random locations ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) creates a mess in the working directory, making developers fearful of checking `git status`.
*   **Network Fragility**: The CLI's reliance on runtime binary downloads (RipGrep) causes multi-minute hangs on corporate networks or restricted environments ([#25323](https://github.com/google-gemini/gemini-cli/issues/25323)).
*   **Flaky Interactive Modes**: Reports of the shell hanging waiting for input ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) and SSH rendering issues ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202)) indicate instability in the terminal UI layer, particularly when wrapped in other shells or remote sessions.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-15

## 1. Today's Highlights
The Copilot CLI team released **v1.0.26**, focusing on critical UI fixes for prompt dismissal and background agent stability. However, the community is currently facing significant turbulence regarding authentication and policy enforcement, with a surge of reports alleging "access denied" errors even for valid Copilot Pro and Enterprise subscribers.

## 2. Releases
**v1.0.26** (2026-04-14)
*   **Bug Fixes:**
    *   Resolved an issue where the `Escape` key failed to dismiss `ask_user` and elicitation prompts reliably.
    *   Fixed spurious directory access prompts appearing inside `find -exec` blocks.
    *   Addressed agent session failures caused by context compaction splitting tool calls.
*   **Environment Variables (v1.0.26-0):**
    *   Plugin hooks now receive `PLUGIN_ROOT`, `COPILOT_PLUGIN_ROOT`, and `CLAUDE_PLUGIN_ROOT`.
*   **UI Improvements:**
    *   The session scope selector in the sync prompt is now more prominent and supports left/right arrow key navigation.

## 3. Hot Issues

### Top Community Concerns

1.  **[Sporadic policy blocking for Enterprise accounts](https://github.com/github/copilot-cli/issues/1595)**
    *   **Why it matters:** Enterprise users with valid subscriptions and remaining quotas are being hard-blocked from listing models.
    *   **Reaction:** 26 comments; high frustration as the CLI reports "access denied by Copilot policy" despite valid entitlements.

2.  **[Misleading errors for active Copilot Pro Trials](https://github.com/github/copilot-cli/issues/2686)**
    *   **Why it matters:** Users on active trials are facing "Server failed to connect" errors, rendering the tool unusable during the trial period.
    *   **Reaction:** 24 comments; users confirm billing pages show active status, but the CLI denies access.

3.  **[Authorization loop despite being logged in](https://github.com/github/copilot-cli/issues/2684)**
    *   **Why it matters:** A recurring "Authorization error" prompts users to run `/login` even when they are already signed in.
    *   **Reaction:** 12 comments; indicates a potential token validation or session persistence failure in the latest build.

4.  **[Copilot CLI exits immediately on Windows 11](https://github.com/github/copilot-cli/issues/1164)**
    *   **Why it matters:** Critical regression for Windows users where the CLI exits silently without output.
    *   **Reaction:** 11 comments; users are forced to revert to versions older than 0.0.369 to maintain functionality.

5.  **[Request: Add Vi/Vim input mode](https://github.com/github/copilot-cli/issues/13)**
    *   **Why it matters:** A long-standing request for modal editing support within the CLI chat interface.
    *   **Reaction:** 48 👍 reactions; highly requested by power users to avoid breaking workflow flow.

6.  **[Confusing rate limit messages (58 hours)](https://github.com/github/copilot-cli/issues/2696)**
    *   **Why it matters:** Users are reporting extreme rate limit delays (e.g., "try again in 58 hours").
    *   **Reaction:** Highlights concerns over how the CLI handles background agent limits and silent quota consumption.

7.  **[MCP servers unavailable after update](https://github.com/github/copilot-cli/issues/2176)**
    *   **Why it matters:** The Model Context Protocol (MCP) integration seems broken; servers list as enabled but the LLM cannot access the tools.
    *   **Reaction:** 4 comments; suggests a regression in tool discovery or connection logic.

8.  **[Middle-click paste broken on X11](https://github.com/github/copilot-cli/issues/2413)**
    *   **Why it matters:** Standard Linux paste functionality (primary selection) stopped working in v1.0.11+.
    *   **Reaction:** 4 comments; specific to Linux/X11 environments, impacting usability for terminal power users.

9.  **[Request: Auto-compact configuration option](https://github.com/github/copilot-cli/issues/947)**
    *   **Why it matters:** Automatic conversation compaction breaks workflows requiring full history persistence (e.g., audit trails).
    *   **Reaction:** Users want granular control over when and how context is truncated.

10. **[BOM character prepended to text in WSL](https://github.com/github/copilot-cli/issues/2571)**
    *   **Why it matters:** Copying text from Copilot CLI in WSL inserts a Byte Order Mark (0xFEFF), breaking pasted content in other applications.
    *   **Reaction:** 2 👍; annoying text corruption bug for WSL users.

## 4. Key PR Progress
*Note: Only 1 PR was updated in the last 24 hours.*

1.  **[Create my-agent.agent.md](https://github.com/github/copilot-cli/pull/2713)** (Open)
    *   Adds a new agent definition file (`my-agent.agent.md`) to the repository.

## 5. Feature Request Trends
Based on recent issue activity, the community is strongly advocating for:
*   **Modal Editing Support:** Massive demand for **Vi/Vim keybindings** in the input prompt (Issue #13).
*   **Context/History Control:** Requests for **disabling automatic conversation compaction** to preserve full context for neural network systems or audit logs (Issue #947).
*   **Enhanced MCP Control:** Users want the ability to **explicitly trigger MCP tools** via syntax (e.g., `@mcp`) rather than relying on the model's autonomous decision-making (Issue #2690).
*   **Model Availability:** Requests to add **GPT-4o** to the CLI model lineup to match availability in VS Code and Chat (Issue #2377).

## 6. Developer Pain Points
*   **Auth & Policy Instability:** A significant portion of the user base is blocked by false "Access Denied" or "Authorization Error" messages, despite having valid Pro or Enterprise licenses. This is the primary friction point today.
*   **Windows Reliability:** The "silent exit" bug on Windows 11 makes the tool essentially unusable on that platform for versions newer than early 2025.
*   **UX/Clipboard Issues:** Linux and WSL users are facing specific usability bugs regarding X11 pasting and BOM character insertion.
*   **Rate Limiting Confusion:** The rate limiting mechanism appears to trigger too aggressively or provide confusing feedback (e.g., 58-hour waits), causing anxiety about background agent usage.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-15

**Source:** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

### 1. Today's Highlights
Version **1.34.0** has been released, focusing heavily on fixing a critical crash related to background agent cancellation and refining the user experience for the controversial "thinking" traces. The community is currently vocal regarding the visibility of thought processes in the CLI, with a mix of complaints about hidden traces and requests for more granular control over the `k2.6-code-preview` model's behavior.

### 2. Releases
**v1.34.0** is now available.
*   **Core Stability:** Fixed a crash (`Unhandled exception in event loop`) that occurred when stopping stuck background agents ([PR #1871](https://github.com/MoonshotAI/kimi-cli/pull/1871)).
*   **Diff & Shell:** Refined inline diff highlight offsets for tab-expanded text and introduced `show_thinking_stream` configuration options ([PR #1709](https://github.com/MoonshotAI/kimi-cli/pull/1709), [PR #1872](https://github.com/MoonshotAI/kimi-cli/pull/1872)).
*   **Docs:** Updated documentation for new features and tool changes.

### 3. Hot Issues
*   [#1864: Please display the full thinking traces](https://github.com/MoonshotAI/kimi-cli/issues/1864) — **High Demand (👍 9)**
    Users are reporting that the "thinking" process, previously visible, has vanished in recent CLI versions. Developers rely on these traces to debug the AI's logic chain.
*   [#1874: Regarding the length of thinking about k2.6-code-preview](https://github.com/MoonshotAI/kimi-cli/issues/1874)
    A user reported extreme inefficiency with the new `k2.6-code-preview`, citing **51 sub-agent rounds** and **60,000+ output tokens** for a single task. This highlights a critical cost/performance issue with the new model iteration.
*   [#1865: Why is the thinking process gone? (Negative optimization)](https://github.com/MoonshotAI/kimi-cli/issues/1865)
    Echoing the sentiment in #1864, users expressed that hiding the thinking process reduces "security" and trust in the tool's output.
*   [#1877: VS Code plug-in: The thinking block cannot be expanded in compact mode](https://github.com/MoonshotAI/kimi-cli/issues/1877)
    Users cannot access full reasoning traces in the VS Code extension when `show_thinking_stream` is active, forcing them to toggle settings to read the thought process.
*   [#1867: Feature Request: --yolo should not auto-approve plans](https://github.com/MoonshotAI/kimi-cli/issues/1867)
    A critical safety concern: users want `--yolo` to handle tool approvals *without* automatically executing entire coding plans, which poses a higher risk.
*   [#1878: Context compaction picks wrong problem](https://github.com/MoonshotAI/kimi-cli/issues/1878)
    Bug report: In workspaces with multiple "problem" directories, the context compactor incorrectly summarizes the session as working on the wrong directory.
*   [#1873: Support installation without administrator rights](https://github.com/MoonshotAI/kimi-cli/issues/1873)
    Enterprise users on locked-down Windows machines can no longer install the tool, a regression from previous versions.
*   [#1866: UTF-8 filename crash in @search](https://github.com/MoonshotAI/kimi-cli/issues/1866)
    Searching for files with Chinese UTF-8 filenames causes the CLI to crash upon typing the third character.
*   [#778: API Error: 400 (Invalid Request)]](https://github.com/MoonshotAI/kimi-cli/issues/778)
    Ongoing issue with Windows/Powershell environments failing with a 400 error when connecting to the API.
*   [#1879: Feature request: configurable colors](https://github.com/MoonshotAI/kimi-cli/issues/1879)
    Users want customizable UI colors to better distinguish between their own prompts and the AI's replies in long sessions.

### 4. Key PR Progress
*   [#1872: feat(shell): add show_thinking_stream config](https://github.com/MoonshotAI/kimi-cli/pull/1872) — **Merged**
    Responds directly to the "thinking traces" issues. It introduces `show_thinking_stream` (compact mode) and UX fixes for non-interactive modes.
*   [#1871: fix(background): keep cancelled task strong reference](https://github.com/MoonshotAI/kimi-cli/pull/1871) — **Merged**
    Critical fix for the CLI freezing when attempting to stop background agents.
*   [#1836: Fix interactive YOLO plan review semantics](https://github.com/MoonshotAI/kimi-cli/pull/1836) — **Open**
    Addresses the safety concerns raised in Issue #1867 by separating `--yolo` tool approvals from plan review.
*   [#1876: feat(soul): register /btw slash command](https://github.com/MoonshotAI/kimi-cli/pull/1876) — **Open**
    Adds the `/btw` command availability to all execution modes (not just shell), enhancing interaction consistency.
*   [#1868: feat(ui): show live and average tokens per second](https://github.com/MoonshotAI/kimi-cli/pull/1868) — **Open**
    Adds performance metrics (TPS) to the shell UI, helping users monitor token consumption speed.
*   [#1875: chore: bump kimi-cli 1.34.0](https://github.com/MoonshotAI/kimi-cli/pull/1875) — **Merged**
    The release workflow for version 1.34.0.
*   [#1236: feat(http): enable trust_env in creating aiohttp.ClientSession](https://github.com/MoonshotAI/kimi-cli/pull/1236) — **Open**
    Allows the CLI to respect standard proxy environment variables, fixing connectivity issues in corporate environments.
*   [#1405: feat(web): add Playwright E2E test infrastructure](https://github.com/MoonshotAI/kimi-cli/pull/1405) — **Open**
    Significant infrastructure improvement to catch regression bugs in the web interface.
*   [#1818: feat: supports list-sessions](https://github.com/MoonshotAI/kimi-cli/pull/1818) — **Merged**
    Adds functionality to list existing sessions, improving session management capabilities.
*   [#884: chore(deps-dev): bump ruff](https://github.com/MoonshotAI/kimi-cli/pull/884) — **Open**
    Dependency update bumping `ruff` to version 0.15.0.

### 5. Feature Request Trends
*   **Thinking Trace Granularity:** There is a massive demand for "Always On" or easily accessible thinking logs. Users are frustrated by compact summaries and want full visibility into the Chain of Thought, especially for debugging.
*   **Fine-Grained Auto-Approval Control:** Users are requesting a separation between "tool approval" (e.g., reading files) and "plan approval" (executing code), particularly for the `--yolo` flag to prevent dangerous auto-executions.
*   **UI Customization:** Requests for better color contrast and distinct styling between user and AI messages are increasing as session lengths grow.

### 6. Developer Pain Points
*   **Token Bloat with k2.6-preview:** The rollout of `k2.6-code-preview` has caused significant friction due to excessive sub-agent recursion (51 rounds cited) leading to high token costs and slow response times.
*   **Regression in Usability:** Recent updates (1.33.0+) introduced regressions such as the inability to install without Admin rights and the hiding of thinking processes, which users are calling "negative optimization."
*   **Encoding Stability:** Issues with non-ASCII characters in filenames (UTF-8) causing crashes in the `@search` feature remain a persistent annoyance for international developers.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-15

## 1. Today's Highlights
Version **1.4.4** has been released to address critical instabilities in the TUI and prompt execution, including fixes for logger context persistence and API response formatting. However, the community is currently facing a significant outage regarding **Azure OpenAI** models (specifically GPT 5.4), which are failing for a large portion of the user base. Additionally, a recurrent and critical bug regarding **input text loss** during permission prompts has resurfaced, severely disrupting developer workflows.

## 2. Releases
*   **v1.4.4 (Core)**
    *   **Context Restoration:** Fixed an issue where prompt-time tools and logging were executing without the correct instance or logger context.
    *   **Copilot Compatibility:** Ensured GitHub Copilot compaction requests remain valid during processing.
    *   **API Formatting:** Restored the flat reply shape for question API responses to ensure consistent parsing.
    *   **OAuth Persistence:** Fixed a race condition where MCP OAuth connections completing immediately were not being persisted correctly.

## 3. Hot Issues
*   **[#22444](https://github.com/anomalyco/opencode/issues/22444) [BUG] Azure OpenAI Models not working**
    *   *Impact:* Critical. Users report that all Azure endpoints (GPT-5.3/5.4) are failing immediately with "I cannot answer this" errors. This appears to be a regression introduced in the latest update affecting enterprise workflows.
*   **[#22479](https://github.com/anomalyco/opencode/issues/22479) [BUG] User input discarded on permission prompts**
    *   *Impact:* High. A highly disruptive UX issue where any text typed in the input box is instantly deleted if the agent triggers a permission question or modal. This forces users to retype complex prompts.
*   **[#18267](https://github.com/anomalyco/opencode/issues/18267) [BUG] Claude OAuth broken (Error 429)**
    *   *Impact:* High (151 comments). Long-standing issue regarding authentication failures with Anthropic services. Users are unable to login or refresh tokens, effectively bricking the integration for some.
*   **[#11112](https://github.com/anomalyco/opencode/issues/11112) [BUG] Stuck at "Preparing write..."**
    *   *Impact:* High. The tool execution loop hangs indefinitely when attempting to write files, requiring the user to kill the process.
*   **[#21911](https://github.com/anomalyco/opencode/issues/21911) [BUG] AI strips generics in TypeScript**
    *   *Impact:* Medium. When editing TypeScript files, the agent is inexplicably removing Generic type parameters (e.g., ``), breaking code compilation.
*   **[#22020](https://github.com/anomalyco/opencode/issues/22020) [BUG] Global AGENTS.md ignored when project AGENTS.md exists**
    *   *Impact:* Medium. Configuration precedence logic is flawed; global rules are being silently dropped when a local file is present, contrary to documentation.
*   **[#7101](https://github.com/anomalyco/opencode/issues/7101) [FEATURE] Custom System Prompts**
    *   *Impact:* Medium (High demand). Users want the ability to inject custom system prompts at global, project, or directory levels to better tailor agent behavior.
*   **[#2755](https://github.com/anomalyco/opencode/issues/2755) [FEATURE] Vim-like Copy Mode**
    *   *Impact:* Medium (High demand). Users are requesting a proper TUI "copy mode" (similar to tmux/vim) to select and copy text blocks, rather than relying on mouse selection.
*   **[#20902](https://github.com/anomalyco/opencode/issues/20902) [BUG] Bash tool hangs on background processes**
    *   *Impact:* Medium. Running commands with `&` or `nohup` causes the bash tool to freeze until the 2-minute timeout.
*   **[#10288](https://github.com/anomalyco/opencode/issues/10288) [FEATURE] Mobile Support**
    *   *Impact:* Medium. Request for a mobile-friendly Web UI or native app to review code and manage sessions on the go.

## 4. Key PR Progress
*   **[#14832](https://github.com/anomalyco/opencode/pull/14832) Fix: JSON Object Coercion in Write Tool**
    *   Addresses issues where quantized models (e.g., Qwen) fail to write JSON files because they pass objects instead of strings. This PR coerces the output to prevent parsing errors.
*   **[#1589](https://github.com/anomalyco/opencode/pull/1589) Feat: Support Images in Tool Responses**
    *   A significant enhancement allowing the `read` tool to return image data. This enables agents to programmatically analyze screenshots or image files provided by the user.
*   **[#7156](https://github.com/anomalyco/opencode/pull/7156) Feat: Variant Support for Subagents**
    *   Allows specific agents to define a default "reasoning variant" (e.g., `high` or `low`) in their configuration, removing the need to manually toggle thinking modes for specific workflows.
*   **[#6233](https://github.com/anomalyco/opencode/pull/6233) Feat: LSP Restart Operation**
    *   Adds a `restartServer` operation to the LSP tool. This is crucial for developers installing new dependencies (e.g., Python packages) where the language server (like Pyright) otherwise fails to index new modules.
*   **[#6832](https://github.com/anomalyco/opencode/pull/6832) Fix: Auto-deny Permissions in CI**
    *   Improves CI/CD reliability by ensuring that permission prompts do not hang indefinitely in non-interactive environments (like GitHub Actions), opting instead to auto-deny or fail gracefully.
*   **[#6629](https://github.com/anomalyco/opencode/pull/6629) Feat: OpenTelemetry Instrumentation**
    *   Adds deep observability via OpenTelemetry and the Aspire Dashboard, allowing developers to trace tool calls, LLM requests, and plugin execution for debugging.
*   **[#6154](https://github.com/anomalyco/opencode/pull/6154) Feat: Show Skills in Sidebar**
    *   Improves visibility by displaying the currently loaded skills (plugins/extensions) in the status bar and sidebar, helping users understand what capabilities are active.
*   **[#6130](https://github.com/anomalyco/opencode/pull/6130) Feat: Configurable Syntax Tokens**
    *   Refines theming by adding dedicated tokens for XML/HTML tags (`syntaxTag`, `syntaxAttribute`), fixing an issue where tag colors were hardcoded and uncustomizable.
*   **[#6844](https://github.com/anomalyco/opencode/pull/6844) Fix: Clarify Edit Success**
    *   A diagnostic UX improvement ensuring that successful file edits are not obscured by LSP error messages, preventing the AI from mistakenly thinking a write failed.
*   **[#7984](https://github.com/anomalyco/opencode/pull/7984) Feat: Databricks Provider**
    *   Expands provider support to include Databricks Foundation Model APIs, allowing enterprise users to connect directly to their Databricks workspace endpoints.

## 5. Feature Request Trends
*   **Mobile Accessibility:** There is a growing call for a mobile-optimized Web UI or native app to allow code review and session management away from the desktop.
*   **Advanced Text Manipulation (TUI):** Users are heavily requesting "Quality of Life" terminal features, specifically **Vim-style Copy Modes** and better scrolling mechanisms (`ctrl+e`/`ctrl+y`), as the current mouse-dependent selection is often imprecise.
*   **Granular Configuration Management:** Developers want more control over system prompts and configuration reloading without restarting the binary (e.g., "reload config" command, global vs. local prompt inheritance).

## 6. Developer Pain Points
*   **Edit vs. Read-Only Aggression:** A recurring theme in multiple issues is the AI stripping code features (like Generics in TS) or attempting to edit files when it should be reading. This suggests a need for better "read-only" constraints or safer edit deltas.
*   **State Disruption:** The **input text loss** issue (occurring when permission modals appear) is a major friction point, breaking the "flow state" of developers who often draft prompts while the agent is working.
*   **Session Performance:** Users with large repositories are reporting "stuck" states (Preparing write...) and slow scrolling, indicating a need for virtualized scrolling and better handling of large contexts.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-15

## 1. Today's Highlights
The Qwen Code community is currently reacting strongly to significant adjustments in the free OAuth tier and reported rate limit inconsistencies. Despite the controversy over usage quotas, the development team continues to push high-impact updates, including parallelized agent execution in `/review` and enhanced history management via `/history`.

## 2. Latest Releases
**v0.14.4-nightly.20260414**
*   **Context Visibility:** The CLI and SDK API now expose `/context` usage data in non-interactive modes, allowing developers to programmatically monitor token consumption and context limits. ([#2916](https://github.com/QwenLM/qwen-code/pull/2916))

## 3. Hot Issues
**1. [Feature Request/Poll] Qwen OAuth Free Tier Policy Adjustment** ([#3203](https://github.com/QwenLM/qwen-code/issues/3203))
*   **Why it matters:** A proposal to reduce the daily free quota from 1,000 to 100 requests and phase out the free tier has sparked intense debate.
*   **Reaction:** 16 comments in 24 hours; users are expressing concern over accessibility for open-source developers.

**2. [Bug] 429 Free allocated quota exceeded** ([#1742](https://github.com/QwenLM/qwen-code/issues/1742))
*   **Why it matters:** Users reporting "429" errors despite being far under the stated 1,000 request/day limit.
*   **Reaction:** Reopened recently with 17 comments; suggests a discrepancy between policy documentation and actual rate limiting logic.

**3. [Bug] Requests limits overview** ([#3267](https://github.com/QwenLM/qwen-code/issues/3267))
*   **Why it matters:** Highlights confusion about how request quotas are calculated and tracked.
*   **Reaction:** Users are asking for transparency on how "requests" are defined (e.g., do sub-agents count separately?).

**4. [Bug] Qwen Code MCP Client Limited to 2 Connections** ([#3277](https://github.com/QwenLM/qwen-code/issues/3277))
*   **Why it matters:** Critical report claiming the MCP client artificially limits connections to 2, breaking multi-node production infrastructure.
*   **Reaction:** Labeled "CRITICAL" by the user; requires immediate dev attention for enterprise users.

**5. [Feature] Command Platform Refactoring** ([#3244](https://github.com/QwenLM/qwen-code/issues/3244))
*   **Why it matters:** A major proposal to elevate the command module from a UI feature to a unified platform with a consistent Registry, Resolver, and Executor.
*   **Reaction:** Positive reception, aimed at solving current fragmentation in command handling.

**6. [Feature] Naming/Indexing conversations** ([#3234](https://github.com/QwenLM/qwen-code/issues/3234))
*   **Why it matters:** Current reliance on UUIDs makes retrieving past sessions difficult.
*   **Reaction:** Users want human-readable titles or search capabilities for session history.

**7. [Bug] Permission options not persisting in Windows 11 CMD** ([#2669](https://github.com/QwenLM/qwen-code/issues/2669))
*   **Why it matters:** "Always allow" settings are not being saved on Windows, forcing repeated approvals.
*   **Reaction:** Affects workflow continuity specifically for Windows developers.

**8. [Feature] Support creating single executable application (SEA)** ([#289](https://github.com/QwenLM/qwen-code/issues/289))
*   **Why it matters:** Users want to bundle the app into a standalone executable for easier distribution.
*   **Reaction:** Long-standing request seeing renewed activity.

**9. [Bug] VS Code plugin tab width overflow** ([#2873](https://github.com/QwenLM/qwen-code/issues/2873))
*   **Why it matters:** UI bug where long session titles expand to fill the entire tab bar, blocking other tabs.
*   **Reaction:** Frustrating UI experience; fix is pending in PR.

**10. [Feature] Allow @ completion for file paths in commands** ([#2055](https://github.com/QwenLM/qwen-code/issues/2055))
*   **Why it matters:** Users cannot use the `@` symbol to trigger file path autocomplete when writing custom commands (e.g., `/review`).
*   **Reaction:** High-quality of life improvement for command power users.

## 4. Key PR Progress
**1. Parallel Agent Execution (Performance)** ([#3239](https://github.com/QwenLM/qwen-code/pull/3239) & [#3276](https://github.com/QwenLM/qwen-code/pull/3276))
*   **Changes:** Modified `/review` and agent runner to execute batched subagents in parallel via a runtime guarantee, rather than relying on the model to emit multiple tool blocks.
*   **Impact:** Significantly speeds up review tasks for models like `qwen3-plus` that previously serialized agents.

**2. Add /history Command** ([#3261](https://github.com/QwenLM/qwen-code/pull/3261))
*   **Changes:** Introduces a built-in `/history` command for managing saved chat sessions (delete/rename).
*   **Impact:** Addresses user complaints regarding the inability to manage or clean up old sessions.

**3. Fix: VS Code Tab Truncation** ([#3249](https://github.com/QwenLM/qwen-code/pull/3249))
*   **Changes:** Implements `truncatePanelTitle()` to limit session tab titles to 50 code points.
*   **Impact:** Fixes the overflowing tab bar bug reported in Issue #2873.

**4. Fix: Rate Limit Detection** ([#3246](https://github.com/QwenLM/qwen-code/pull/3246))
*   **Changes:** Improves detection of `Throttling.AllocationQuota` errors from streamed SSE frames.
*   **Impact:** Prevents silent failures or cryptic error messages when users hit quota limits.

**5. Add PostTurn Hook Event** ([#3266](https://github.com/QwenLM/qwen-code/pull/3266))
*   **Changes:** Adds a new hook event firing at turn boundaries, allowing access to thoughts, messages, and tool calls.
*   **Impact:** Enables powerful plugins for analytics or custom logging.

**6. Fix: Tab Key Handling in CLI** ([#3270](https://github.com/QwenLM/qwen-code/pull/3270))
*   **Changes:** Prevents the Tab key from inserting a literal `\t` character into the input buffer.
*   **Impact:** Corrects basic CLI editing behavior.

**7. Add /batch Skill** ([#3079](https://github.com/QwenLM/qwen-code/pull/3079))
*   **Changes:** Introduces a `/batch` command for parallel file operations using glob patterns.
*   **Impact:** Facilitates large-scale codebase modifications.

**8. Fix: Thought-Only Responses** ([#3251](https://github.com/QwenLM/qwen-code/pull/3251))
*   **Changes:** Adjusts validation in `GeminiChat` stream to allow responses that contain only thoughts (common in reasoning models).
*   **Impact:** Fixes crashes when using `qwen3-thinking` or similar models with subagents.

**9. Add Hooks Support for ACP** ([#3248](https://github.com/QwenLM/qwen-code/pull/3248))
*   **Changes:** Brings ACP integration to parity with core implementation regarding lifecycle and tool execution hooks.
*   **Impact:** Unifies extension capabilities across different interfaces.

**10. Fix: Preserve Startup Input** ([#3242](https://github.com/QwenLM/qwen-code/pull/3242))
*   **Changes:** Buffers keystrokes during CLI initialization so early typing is not lost.
*   **Impact:** Improves perceived responsiveness at launch.

## 5. Feature Request Trends
*   **Session Management:** There is a strong trend toward better history management. Users want to name sessions ([#3234](https://github.com/QwenLM/qwen-code/issues/3234)), fork branches ([#3022](https://github.com/QwenLM/qwen-code/pull/3022)), and manage history via CLI ([#3261](https://github.com/QwenLM/qwen-code/pull/3261)).
*   **Command Platform:** Users and contributors are pushing for a more robust command system, proposing a unified registry/refactor ([#3244](https://github.com/QwenLM/qwen-code/issues/3244)) and autocomplete improvements ([#2055](https://github.com/QwenLM/qwen-code/issues/2055)).
*   **Executable Bundling:** Request for Single Executable Application (SEA) support remains popular ([#289](https://github.com/QwenLM/qwen-code/issues/289)).

## 6. Developer Pain Points
*   **Quota Confusion:** The dominant pain point today is the "Free Tier." Users are reporting 429 errors prematurely ([#1742](https://github.com/QwenLM/qwen-code/issues/1742)) and reacting negatively to proposed cuts ([#3203](https://github.com/QwenLM/qwen-code/issues/3203)).
*   **Platform Stability (Windows/macOS):** Windows users face persistent permission re-prompting ([#2669](https://github.com/QwenLM/qwen-code/issues/2669)), while macOS users are reporting silent PTY shell execution failures ([#3258](https://github.com/QwenLM/qwen-code/pull/3258)).
*   **Model Behavior:** Users are reporting "infinite loops" in tool calls ([#223](https://github.com/QwenLM/qwen-code/issues/223), [#350](https://github.com/QwenLM/qwen-code/issues/350)) and instances where the model gets stuck in "thinking" mode without producing output ([#259](https://github.com/QwenLM/qwen-code/issues/259)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*