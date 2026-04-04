# AI CLI Tools Community Digest 2026-04-04

> Generated: 2026-04-04 00:11 UTC | Tools covered: 8

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

# Cross-Tool Market Analysis: AI CLI Tools (2026-04-04)

## 1. Ecosystem Overview
The AI CLI tools ecosystem is currently undergoing a **stability and maturity crisis**, despite rapid feature evolution. While leading tools like **Claude Code** and **OpenAI Codex** are pushing the boundaries of *agentic architectures* (subagents, multi-modal orchestration), they are simultaneously facing critical infrastructure regressions—most notably billing miscalculations and excessive token consumption. A significant "feature fork" is emerging: high-end commercial tools are optimizing for complex *team coordination* (personalities, strict memory routing), while open-source and challenger tools (Charm Crush, Kimi, OpenCode) are competing on **runtime portability** (Bun/TypeScript rewrites), **local model compatibility**, and granular **TUI control**. The market is moving away from simple "autocomplete-in-terminal" toward autonomous agents capable of long-horizon tasks, yet reliability remains the primary bottleneck for enterprise adoption.

## 2. Activity Comparison

| Tool | Issue Velocity | PR Velocity | Release Status | Activity Tier |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **Critical** (Billing Crisis) | High (Architectural) | No Release (24h) | 🛑 **High Friction** |
| **OpenAI Codex** | **High** (Regressions) | High (Core Refactor) | Alpha (v0.119.0) | 🔄 **Rapid Iteration** |
| **Qwen Code** | **Elevated** (v0.14 bugs) | **Very High** (Features) | Stable (v0.14.0) | ⚡ **Feature Heavy** |
| **Gemini CLI** | Moderate | Moderate | No Release (24h) | 🔧 **Stabilizing** |
| **GitHub Copilot** | Moderate | Low | Stable (v1.0.17) | ✅ **Mature** |
| **Kimi Code** | Moderate | Moderate | Stable (v1.29.0) | 🛠️ **Refactoring** |
| **Charm Crush** | Low | Low | No Release (24h) | 🧪 **Niche/Stable** |
| **OpenCode** | High (Performance) | Moderate | No Release (24h) | 🚀 **Growing** |

## 3. Shared Feature Directions
The following requirements are appearing across multiple distinct toolbases, indicating strong market consensus on necessary improvements:

*   **Agent Interrupts & "Side Questions" (Mid-Turn Control)**
    *   *Tools:* **Claude Code** (Agent message interrupts), **OpenAI Codex** (Preempt mailbox), **Qwen Code** (Mid-turn queue drain), **Kimi Code** (`/btw` command).
    *   *Consensus:* Users are frustrated with "fire-and-forget" agent execution. There is a universal demand for the ability to pause, correct, or ask clarifying questions *without* cancelling the current task stack.

*   **Compact vs. Verbose Modes (TUI Noise Reduction)**
    *   *Tools:* **OpenAI Codex** (Disable prompt blocks), **Gemini CLI** (Compact tool output), **Qwen Code** (`Ctrl+O` toggle), **OpenCode** (Skipped streaming cleanup).
    *   *Consensus:* As agents use more tools, the terminal becomes unreadable. Users are requesting explicit modes to hide "thought processes" and "internal tool calls" to focus only on results.

*   **Memory & Context Routing (Global vs. Project)**
    *   *Tools:* **Gemini CLI** (Global vs. Project memory), **Kimi Code** (Three-tier rules request), **OpenCode** (Session lists).
    *   *Consensus:* A flat context window is insufficient. Developers want "instruction layers" where global preferences (e.g., "use PEP8") don't conflict with project-specific rules (e.g., "use tabs").

*   **Sandboxing & Execution Security**
    *   *Tools:* **Claude Code** (Approval prompts), **OpenAI Codex** (`bwrap` friction), **GitHub Copilot** (Allow-all commands), **OpenCode** (Plan mode security).
    *   *Consensus:* Balancing automation with safety. The "Allow-All" flag is viewed as unsafe, yet manual approval for every command (e.g., `bwrap` prompts) is viewed as unusable.

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User | Technical Differentiator |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **Deep Architectural Integration** | Senior Engineers / Complex Systems | Tightest loop between *planning* and *execution*; heavy investment in **MCP (Model Context Protocol)** ecosystem for external tooling. |
| **OpenAI Codex** | **Multi-Agent Orchestration** | Power Users / Automators | Focuses on **personalities** and subagent delegation. Strongest "remote execution" story (`exec-server`) for headless operations. |
| **Qwen Code** | **Performance & Parallelism** | Efficiency-conscious Developers | **"Kind-based batching"** allows parallel read operations; highly optimized for speed and cost-efficiency (Jupyter support). |
| **GitHub Copilot CLI** | **Enterprise Compliance** | Corporate Teams | Deep integration with GitHub ecosystems (Actions, Auth). Focused on **Permissions** and policy management rather than raw agentic power. |
| **Charm Crush** | **Terminal-Native Aesthetics** | CLI Power Users / Rust Fans | Leverages **Charmbracelet** ecosystem (Bubble Tea, Gum). Focuses on beautiful, standard TUI interfaces and local model support. |
| **Kimi Code** | **UX Innovation** | Frontend / Full-Stack | Heaviest investment in **UX features** (Side-questions `/btw`, visual improvements). Currently debating a full **Bun/TypeScript** rewrite. |
| **OpenCode** | **Provider Agnosticism** | "Bring Your Own Key" Users | Best-in-class support for **OpenRouter**, **LiteLLM**, and generic providers. Focuses on cost-tracking accuracy and model flexibility. |

## 5. Community Momentum & Maturity

*   **High Friction, High Value (Claude Code):** Despite critical billing bugs (Max 20x plan), the community engagement remains the highest. This suggests **sticky dependence**; users rely on it so heavily that they tolerate billing breaks rather than switch.
*   **Rapid Core Refactoring (OpenAI Codex, Qwen Code):** These tools are showing high PR velocity, specifically rewriting core scheduling and execution loops. This signals a **transition phase** from "prototype" to "production-grade architecture."
*   **Stability Concerns (Kimi, OpenCode):** Communities here are vocal about regressions (Kimi's "UI glitches," OpenCode's "Write loops"). These are in a **growing pain** phase where features are outpacing stability testing.
*   **Consolidation (GitHub Copilot):** Lowest velocity in "Hot Issues" compared to alpha tools. Indicates a **mature, stable** user base, but slower innovation rate compared to Agentic-first tools.

## 6. Trend Signals

1.  **The "Bun/TypeScript" Shift:**
    The popularity of **Kimi Code** and **OpenCode** (and active discussions in Kimi's PRs about rewriting from Python) suggests the ecosystem is moving toward **JavaScript/TypeScript toolchains**. This aligns with the desire for better TUI rendering (React Ink) and unified web/terminal logic.

2.  **"MCP" as the Standard:**
    **Model Context Protocol (MCP)** is no longer just an Anthropic feature. Issues across **OpenAI Codex**, **GitHub Copilot**, and **Qwen Code** revolve around *breaking* or *improving* MCP integration. This confirms MCP is becoming the de-facto standard for tool connectivity.

3.  **Cost Anxiety Drives Architecture:**
    The prevalence of "burning tokens" issues (OpenAI Codex) and "quota exhausted" crises (Claude Code) is driving architectural decisions. Tools are prioritizing **"Compact" modes**, **AST-aware reading** (Gemini CLI), and **Local Small Models** (Charm Crush) to lower OpEx.

4.  **Session Persistence is the Final Frontier:**
    Almost every tool has active issues regarding **Session Resume**, **State Relays**, or **Context Persistence**. The "stateless CLI" model is failing for complex tasks; users are demanding "IDE-like" memory where the CLI remembers context across reboots and machine switches.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Analysis period: Data as of 2026-04-04*

## 1. Top Skills Ranking
The following Skills represent the most active discussions and proposals in the repository, reflecting high community interest or strategic value.

*   **[document-typography](https://github.com/anthropics/skills/pull/514)** (by PGTBoos)
    *   **Functionality:** Enforces typographic quality control for AI-generated documents, preventing orphans (single words on new lines), widows (stranded headers), and numbering misalignment.
    *   **Highlights:** Addresses a universal "polish" gap in AI-generated documentation where content is correct but formatting is unprofessional.
    *   **Status:** Open

*   **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (by eovidiu)
    *   **Functionality:** Meta-skills that audit other Skills for structure, documentation quality, resource usage, and security vulnerabilities (e.g., executable injection risks).
    *   **Highlights:** Represents "eating your own dog food"—using the Skills ecosystem to improve the Skills ecosystem. Highly relevant given trust concerns.
    *   **Status:** Open

*   **[ODT (OpenDocument Text) Skill](https://github.com/anthropics/skills/pull/486)** (by GitHubNewbie0)
    *   **Functionality:** Enables creation, parsing, and template filling of `.odt` files (LibreOffice/OpenOffice format) and conversion to HTML.
    *   **Highlights:** Expands Claude's document interoperability beyond the proprietary Microsoft Office formats (DOCX/XLSX) to open standards.
    *   **Status:** Open

*   **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** (by p19dixon)
    *   **Functionality:** Performs systematic cleanup audits to identify orphaned code, unused files, documentation gaps, and infrastructure bloat.
    *   **Highlights:** Tackles "legacy code" entropy, a major pain point for long-term projects, by generating a `CODEBASE-STATUS.md` report.
    *   **Status:** Open

*   **[shodh-memory (Persistent Context)](https://github.com/anthropics/skills/pull/154)** (by varun29ankuS)
    *   **Functionality:** Implements a persistent memory system for AI agents, allowing context retention across different conversations/sessions.
    *   **Highlights:** Attempts to solve the "stateless" limitation of LLMs by teaching Claude when and how to surface relevant past memories.
    *   **Status:** Open

*   **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** (by narenkatakam)
    *   **Functionality:** Official contribution guidelines addressing the community health gap.
    *   **Highlights:** Vital for scaling the repository; aims to improve the repo's 25% community health score on GitHub.
    *   **Status:** Open

## 2. Community Demand Trends
Based on issue activity, the community is signaling strong demand for the following capabilities:

*   **Trust & Governance:** There is significant anxiety regarding security boundaries. Users are demanding better vetting of community skills to prevent "trust boundary abuse" ([Issue #492](https://github.com/anthropics/skills/issues/492)) and are looking for governance patterns for agent systems ([Issue #412](https://github.com/anthropics/skills/issues/412)).
*   **Enterprise Workflow:** The inability to share Skills within organizations is a top friction point. Users are requesting an "Org-wide skill sharing" feature to move away from manual file sharing ([Issue #228](https://github.com/anthropics/skills/issues/228)).
*   **Developer Experience (DX):** Users are reporting issues with the core tooling, such as `skill-creator` being too verbose/token-inefficient ([Issue #202](https://github.com/anthropics/skills/issues/202)) and critical bugs in evaluation scripts (`run_eval.py` failing to trigger skills, [Issue #556](https://github.com/anthropics/skills/issues/556)).
*   **Alternative Infrastructure:** Requests for deeper integration with AWS Bedrock ([Issue #29](https://github.com/anthropics/skills/issues/29)) and bridging Skills with the MCP (Model Context Protocol) standard ([Issue #16](https://github.com/anthropics/skills/issues/16)) indicate a desire for platform agnostic.

## 3. High-Potential Pending Skills
These PRs have recent activity and address critical gaps, suggesting they may be merged soon:

*   **[fix(docx): prevent tracked change collision](https://github.com/anthropics/skills/pull/541)** (by Lubrsy706)
    *   A critical bug fix for document corruption. Prevents `w:id` collisions when adding tracked changes to documents with existing bookmarks. High value for document-heavy workflows.
*   **[quality-playbook](https://github.com/anthropics/skills/pull/659)** (by andrewstellman)
    *   Revives traditional QA practices using AI to generate quality systems from requirements rather than just source code. Fills a major "quality assurance" gap in the current library.
*   **[sensory: macOS Automation](https://github.com/anthropics/skills/pull/806)** (by AdelElo13)
    *   Teaches Claude to use AppleScript (`osascript`) for native macOS automation. This offers a more stable alternative to screenshot-based computer control for Mac users.
*   **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (by 4444J99)
    *   Adds comprehensive guidance on the full testing stack (Unit, Integration, E2E) and philosophies (Testing Trophy). Addresses the "testing literacy" gap for AI-generated code.

## 4. Skills Ecosystem Insight
The community is currently most concentrated on **maturation and trust**: moving beyond experimental skills toward robust, secure, and enterprise-ready tools that improve code quality (QA, testing, typography) and establish reliable development standards (CONTRIBUTING guides, security analyzers).

---

# Claude Code Community Digest — 2026-04-04

## 1. Today's Highlights

Today's digest is dominated by a critical, unresolved billing and session limit crisis affecting the **Max 20x plan**, which users report is exhausting in roughly 60–90 minutes due to abnormal quota consumption. Concurrently, advanced users are pushing for deeper **architectural introspection** via Open Source requests and improved **Subagent/Agent coordination**, while the community continues to file high-volume bug reports regarding TUI stability (scrolling) and MCP server integration. No new CLI releases were shipped in the last 24 hours.

## 2. Releases

**No new releases detected in the last 24 hours.**
*The last known release context suggests users are on versions ~1.0.51+. Please check `npm outdated` or GitHub Releases for the latest version information.*

## 3. Hot Issues

Here are 10 noteworthy issues updated in the last 24 hours:

*   **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — **[CRITICAL] Max plan session limits exhausted abnormally fast**
    Users are reporting that since **March 23, 2026**, high-tier subscriptions ($200/mo Max 20x) are depleting quotas in ~1 hour. Community investigations suggest excessive empty polling requests and token counting discrepancies. This is the highest-engagement issue (399 comments) currently impacting usability.

*   **[#43274](https://github.com/anthropics/claude-code/issues/43274)** — **Max 20x plan quota exhausted in ~1h**
    A corroborating report stating that a $400/mo team investment becomes unusable within 60-90 minutes. This reinforces the severity of the billing/quota calculation bug affecting power users.

*   **[#43319](https://github.com/anthropics/claude-code/issues/43319)** — **72% of API requests are empty polling (Quota Impact)**
    A technical deep dive revealing that local proxy logs show ~72% of API calls are empty polling requests that still count against usage quotas, directly explaining the rapid depletion of session limits.

*   **[#36582](https://github.com/anthropics/claude-code/issues/36582)** — **Terminal keeps scrolling to top when conversation gets long**
    High-friction UX bug (110 👍). As conversations extend, the TUI forcibly scrolls to the top, making it nearly impossible to follow current output or interact with the tool effectively.

*   **[#43320](https://github.com/anthropics/claude-code/issues/43320)** — **Main Agent for Scheduled Tasks lacks MCP access**
    Significant architectural inconsistency: Main agents in scheduled tasks cannot access MCP connectors, whereas Sub-Agents can. This breaks workflows relying on Slack/Gmail integration via remote triggers.

*   **[#37793](https://github.com/anthropics/claude-code/issues/37793)** — **Subagents fail with 'prompt too long' (MCP Overflow)**
    Subagents crash immediately (`prompt is too long: 209117 tokens`) if too many MCP servers are configured, as tool definitions exceed the 200k limit before execution begins.

*   **[#43100](https://github.com/anthropics/claude-code/issues/43100)** — **LSP servers lost during reinitializeLspServerManager**
    A regression where LSP tools (goToDefinition, hover) become unavailable immediately after session startup because generation 2 of the manager loads 0 servers.

*   **[#30726](https://github.com/anthropics/claude-code/issues/30726)** — **Settings `effortLevel "max"` silently downgraded**
    When users interact with the effort selection UI, their hard-coded setting for "max" effort is silently reset/downgraded, reducing model performance unexpectedly.

*   **[#43301](https://github.com/anthropics/claude-code/issues/43301)** — **VSCode extension fails on first query ("model may not exist")**
    A specific regression in the VSCode extension where the very first query after restart fails with a model availability error, requiring a retry or restart to fix.

*   **[#33817](https://github.com/anthropics/claude-code/issues/33817)** — **MCP Server Authorization Header Not Recognized**
    MCP servers using Authorization headers are incorrectly falling back to OAuth flows, breaking existing server configurations that worked previously.

## 4. Key PR Progress

*   **[#41447](https://github.com/anthropics/claude-code/pull/41447)** / **[#41518](https://github.com/anthropics/claude-code/pull/41518)** — **Open Source Claude Code**
    Two major PRs attempting to fully open-source the codebase. PR #41518 involves extracting 1906 TypeScript files from the CLI source maps and adding build configurations (Bun bundler).

*   **[#43124](https://github.com/anthropics/claude-code/pull/43124)** — **Agent message interrupts for Subagents**
    A highly requested architectural fix to allow subagents to receive `SendMessage` corrections mid-tool-batch rather than waiting for all queued tools to finish, significantly improving responsiveness.

*   **[#43206](https://github.com/anthropics/claude-code/pull/43206)** — **Shell wrapper for `--resume` cwd mismatch**
    Adds an example shell wrapper to fix the "misleading authentication error" that occurs when trying to resume a session from a different directory than where it started.

*   **[#43166](https://github.com/anthropics/claude-code/pull/43166)** — **Add `/list-slash-commands`**
    Introduces a discovery command to list available workspace slash commands, addressing the difficulty of knowing which commands are available in a specific project context.

*   **[#42996](https://github.com/anthropics/claude-code/pull/42996)** — **MEP (Meat Puppet Elimination Protocol)**
    Adds an example for an "async state relay" pattern to help users maintain context and state when switching machines or resuming sessions across different environments.

*   **[#42944](https://github.com/anthropics/claude-code/pull/42944)** — **Fix Hookify events (phase-qualified & paths)**
    Fixes `hookify` dropping events like `pre-file`/`post-bash` due to string matching issues and improves path resolution using `CLAUDE_PROJECT_DIR` for better rule file discovery.

*   **[#42886](https://github.com/anthropics/claude-code/pull/42886)** — **Hookify: Add `test` and `doctor` commands**
    Enhances the `hookify` plugin ecosystem by adding validation and replay tools, allowing users to debug rules against sample inputs before running them in live sessions.

*   **[#42807](https://github.com/anthropics/claude-code/pull/42807)** — **Hookify: Restore `stop` and `prompt` pattern rules**
    Fixes broken pattern matching for `stop` and `prompt` events in the Hookify plugin, ensuring rules map to the correct payload fields (`reason` and `user_prompt`).

*   **[#36333](https://github.com/anthropics/claude-code/pull/36333)** — **Fix broken Python imports in hook scripts**
    Resolves `No module named 'hookify'` errors that occurred on every hook event due to incorrect import paths in the plugin cache layout.

*   **[#43180](https://github.com/anthropics/claude-code/pull/43180)** — **Fix plugin-dev reference links**
    Documentation fix to repair broken links in `CONTRIBUTING.md` and `LICENSE` paths within the plugin development reference documentation.

## 5. Feature Request Trends

Based on the issue tracker, the community is strongly requesting:

1.  **Platform & Terminal Flexibility:** Requests to support **Ghostty** as a split-pane backend for agent teams ([#24189](https://github.com/anthropics/claude-code/issues/24189)) and generally better TUI behavior.
2.  **Customization & UI Control:** High demand for the ability to **hide/disable the companion buddy** ([#42212](https://github.com/anthropics/claude-code/issues/42212)) and change user text colors ([#42685](https://github.com/anthropics/claude-code/issues/42685)).
3.  **Advanced Slash Commands:** Enabling slash command usage over **remote-control** ([#28351](https://github.com/anthropics/claude-code/issues/28351)) and better discovery mechanisms.
4.  **Agent Architectural Improvements:** Fixing how **Subagents** handle MCP tools and message interrupts is a top priority for advanced users building complex workflows.

## 6. Developer Pain Points

*   **Quota Anxiety & Performance:** The rapid exhaustion of "Max" plan limits (often within an hour) combined with slow TUI performance is causing significant friction for professional teams relying on the tool.
*   **Context Loss:** The "stateless" nature of sessions leads to frustration when switching machines or resuming work, driving interest in "state relay" solutions.
*   **Visual Instability:** The TUI "scroll-to-top" bug in long conversations makes the tool physically difficult to use for extended periods.
*   **Configuration Fragility:** Settings (like `spinnerVerbs`, `effortLevel`, and MCP auth) are often ignored or silently reset, leading to a "is it me or the tool?" debugging loop.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-04

## 1. Today's Highlights

The OpenAI Codex ecosystem is currently addressing significant performance regressions in the `v0.115.0` - `v0.119.0` alpha series, specifically concerning `bwrap` sandboxing prompts and high CPU usage on macOS. Development activity is heavily focused on stabilizing multi-agent orchestration and protocol analytics, with new infrastructure for "personalities" and "exec-server" remote execution moving through the pull request pipeline.

## 2. Releases

**Latest Rust Alpha Releases (v0.119.0)**
Three rapid-fire alpha releases (`v0.119.0-alpha.6`, `.7`, and `.8`) were pushed today. While specific release notes are sparse in the feed, the rapid versioning suggests a hotfix cycle addressing stability issues in the Rust CLI.
*   **Version:** `rust-v0.119.0-alpha.8`
*   **Repository:** [github.com/openai/codex](https://github.com/openai/codex)

## 3. Hot Issues

1.  **[Bug] Burning tokens very fast (#14593)**
    *   **Impact:** The most active thread (422 comments). Users report excessive token consumption, impacting business users.
    *   **Reaction:** High community frustration (162 👍); indicates a critical cost/efficiency bug.
    *   [Link](https://github.com/openai/codex/issues/14593)

2.  **[Bug] High CPU usage on macOS (#16231)**
    *   **Impact:** Regression in extension `26.325.31654` causing overheating on M5 Pro machines.
    *   **Reaction:** Users are forced to downgrade to `26.318.11754` to resolve the issue.
    *   [Link](https://github.com/openai/codex/issues/16231)

3.  **[Enhancement] Manual /compact command in Codex app (#11325)**
    *   **Impact:** Users want manual control over context compaction in the GUI (currently CLI-only).
    *   **Reaction:** High demand (117 👍); highlights a gap between desktop and terminal features.
    *   [Link](https://github.com/openai/codex/issues/11325)

4.  **[Bug] Codex replies to earlier messages (#8648)**
    *   **Impact:** Context drift in multi-message conversations using `gpt-5.2-xhigh`.
    *   **Reaction:** Breaks conversational flow significantly; users confused by agent "memory" issues.
    *   [Link](https://github.com/openai/codex/issues/8648)

5.  **[Bug] bwrap: Approval prompt shown for almost every command (#14936)**
    *   **Impact:** CLI usability regression requiring constant manual approval for sandboxed commands.
    *   **Reaction:** Disrupts automated workflows; major friction point for Linux users.
    *   [Link](https://github.com/openai/codex/issues/14936)

6.  **[Bug] Shell commands fail in WSL due to bubblewrap (#16076)**
    *   **Impact:** `codex-cli 0.115.0` broke command execution in WSL environments due to namespace setup.
    *   **Reaction:** Blocks developers using Windows Subsystem for Linux.
    *   [Link](https://github.com/openai/codex/issues/16076)

7.  **[Enhancement] Allow per-subagent model selection (#14039)**
    *   **Impact:** Users want to assign specific models/providers to subagents (e.g., cheaper models for simple tasks).
    *   **Reaction:** Key architectural request for advanced agent workflows.
    *   [Link](https://github.com/openai/codex/issues/14039)

8.  **[Bug] MCP tool calls cancelled in exec mode (#16685)**
    *   **Impact:** Using `codex exec` immediately cancels any MCP server tool call.
    *   **Reaction:** Critical blocker for headless/automation use cases relying on MCP.
    *   [Link](https://github.com/openai/codex/issues/16685)

9.  **[Bug] Windows app PR button falsely says GitHub CLI is not installed (#13689)**
    *   **Impact:** UI bug preventing Pull Request creation despite `gh` being present.
    *   **Reaction:** Persistent annoyance for Windows developers in the IDE.
    *   [Link](https://github.com/openai/codex/issues/13689)

10. **[Bug] Codex client output truncated in Zellij (#2558)**
    *   **Impact:** TUI rendering issues inside the Zellij terminal multiplexer.
    *   **Reaction:** Affects developers using modern terminal workflows.
    *   [Link](https://github.com/openai/codex/issues/2558)

## 4. Key PR Progress

1.  **Preempt mailbox mail after reasoning/commentary items (#16725)**
    *   **Change:** Ensures mailbox messages are processed immediately after reasoning steps, preventing race conditions in follow-up requests.
    *   *Status:* Open
    *   [Link](https://github.com/openai/codex/pull/16725)

2.  **Stabilize multi-agent followup interrupt test (#16739)**
    *   **Change:** Fixes flaky CI tests related to multi-agent interrupts by waiting for `TurnAborted` events.
    *   *Significance:* Indicates hardening of the multi-agent orchestration core.
    *   [Link](https://github.com/openai/codex/pull/16739)

3.  **Move unified-exec sandbox launch to exec-server (#16736)**
    *   **Change:** Refactors sandbox argument construction to `codex-exec-server`, preparing for better remote execution support.
    *   *Significance:* Architectural improvement for headless/remote modes.
    *   [Link](https://github.com/openai/codex/pull/16736)

4.  **Add user-defined personalities and app-server listing (#16274)**
    *   **Change:** Enables loading custom agent personalities from `.codex/personalities` and adds an RPC to list them.
    *   *Significance:* Major extensibility feature for customizing agent behavior.
    *   [Link](https://github.com/openai/codex/pull/16274)

5.  **[codex-analytics] Protocol-native turn timestamps (#16638)**
    *   **Change:** Adds native timestamping to the analytics protocol.
    *   *Significance:* Improves observability and debugging capabilities.
    *   [Link](https://github.com/openai/codex/pull/16638)

6.  **Fix fork source session IDs in TUI status (#16594)**
    *   **Change:** Restores the ability to see the original session ID after a thread fork in the TUI.
    *   *Significance:* Quality of life fix for complex debugging sessions.
    *   [Link](https://github.com/openai/codex/pull/16594)

7.  **Disable env-bound tools when exec server is none (#16349)**
    *   **Change:** Explicitly handles `CODEX_EXEC_SERVER_URL=none` to disable environment tools cleanly.
    *   *Significance:* Fixes edge cases where tools tried to run when no server was available.
    *   [Link](https://github.com/openai/codex/pull/16349)

8.  **feat(tui): add subagent runtime behavior (#13679)**
    *   **Change:** Adds a pinned runtime panel in the TUI to monitor subagent/watchdog activity.
    *   *Significance:* Visualizes complex multi-agent processes in the terminal.
    *   [Link](https://github.com/openai/codex/pull/13679)

9.  **ci: align Bazel repository cache path on Windows (#16740)**
    *   **Change:** Fixes Windows CI failing to restore cache due to path mismatch (`~/.cache` vs `D:/a/`).
    *   *Significance:* Improves CI/CD reliability for Windows builds.
    *   [Link](https://github.com/openai/codex/pull/16740)

10. **[codex] allow disabling prompt instruction blocks (#16735)**
    *   **Change:** Adds config switches to omit auto-generated `<permissions instructions>` blocks.
    *   *Significance:* Advanced configuration for reducing token usage or prompt noise.
    *   [Link](https://github.com/openai/codex/pull/16735)

## 5. Feature Request Trends

*   **Granular Subagent Configuration:** There is a strong push (#14039, #11701) towards defining specific models, providers, and reasoning efforts for subagents, rather than inheriting the parent configuration.
*   **Context & Compaction Control:** Users are demanding manual control over context management (#11325), likely in response to high token costs and "burning token" bugs.
*   **Enterprise Proxy Support:** A persistent request (#6060) exists for proper `http_proxy` configuration in `config.toml` to support corporate firewalls.

## 6. Developer Pain Points

*   **Sandboxing Fatigue:** Recent updates have introduced "sandbox friction," where users are prompted to approve nearly every command (#14936) or encounter broken namespace setups in WSL (#16076).
*   **MCP (Model Context Protocol) Instability:** Integrations with MCP servers are fragile, with reports of tools being ignored, timing out, or being abruptly cancelled in `exec` mode (#16685, #16702, #16696).
*   **Resource Management:** Users are reporting high CPU usage (#16231, #11981) and excessive token consumption (#14593), suggesting efficiency regressions in the newer alpha and IDE builds.

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest: 2026-04-04

**Today's Highlights**
Recent activity indicates a strong focus on stabilizing agent behavior and local model compatibility. The community is actively addressing issues where agents fail to write files automatically, while maintainers are pushing fixes to improve resource allocation by routing task agents to smaller models. Additionally, a critical fix regarding `max_tokens` rejection for local models (like LM Studio) is currently under review.

## 1. Releases
*No stable release detected in the last 24 hours.*

## 2. Hot Issues
Selected based on severity, community engagement, and technical relevance.

*   **[#485](https://github.com/charmbracelet/crush/issues/485) - [CLOSED] Add ability to switch modes ask/plan/agent**
    *   **Why it matters:** Users want granular control over the agent's operational mode. Specifically, the ability to force an "Ask" mode (discussion only, no file modifications) versus a "Plan" mode is critical for preventing unintended code changes during early exploratory phases.
    *   **Reaction:** Highly requested (11 👍) and now closed, suggesting this feature may be implemented or migrated.

*   **[#761](https://github.com/charmbracelet/crush/issues/761) - [CLOSED] Agents don't write the files sometimes**
    *   **Why it matters:** A significant usability friction point where agents output code in plain text rather than utilizing file-writing tools, forcing users to manually prompt "write files using the api tools."
    *   **Reaction:** Users reported this happens "a lot," indicating a high priority for consistency in agent behavior.

*   **[#2518](https://github.com/charmbracelet/crush/issues/2518) - [CLOSED] Unable to verify the latest release signature with cosign**
    *   **Why it matters:** Security verification is paramount for developer tools. Users were unable to verify artifacts using `cosign` due to certificate identity mismatches.
    *   **Reaction:** Closed quickly, suggesting the CI/CD pipeline for signing artifacts has been rectified.

*   **[#2545](https://github.com/charmbracelet/crush/issues/2545) - [OPEN] [Mac] Problem setting up a second GLM API**
    *   **Why it matters:** Highlights platform-specific configuration issues (macOS) when managing multiple API keys or providers (zAI/GLM). Users working across different OS face inconsistent setup experiences.

## 3. Key PR Progress
*   **[#2556](https://github.com/charmbracelet/crush/pull/2556) - Improve crush config skill**
    *   **Change:** Various improvements to the builtin `crush-config` skill.
    *   **Impact:** Enhances the agent's ability to self-manage and understand project configuration, potentially reducing setup errors.

*   **[#2555](https://github.com/charmbracelet/crush/pull/2555) - Use small model for task agent**
    *   **Change:** Fixes `SetupAgents()` to use `SelectedModelTypeSmall` for the task agent (read-only/search) instead of `SelectedModelTypeLarge`.
    *   **Impact:** Significant performance and cost improvement. Search and retrieval tasks (glob, grep) do not require large reasoning models, making the agent more efficient.

*   **[#2554](https://github.com/charmbracelet/crush/pull/2554) - Support local models with unknown max_tokens**
    *   **Change:** Fixes handling of custom models (LM Studio, Ollama) that report `DefaultMaxTokens=0`.
    *   **Impact:** Prevents request rejections by local servers that cannot handle `max_tokens:0`, ensuring broader compatibility with local LLM setups.

## 4. Feature Request Trends
Based on the latest issue tracker updates:
*   **Agent Modes:** There is a clear demand for explicit "modes" (e.g., Ask vs. Plan vs. Agent) to separate brainstorming from execution. Users want to prevent the agent from attempting to "fix" things when they only want to discuss code.
*   **Local Model Support:** As more users adopt local LLMs (LM Studio, Ollama), issues regarding context window detection and token limits are becoming prominent.

## 5. Developer Pain Points
*   **Agent Tool Consistency:** The most reported frustration (Issue #761) is the agent's tendency to answer with plain text code blocks instead of invoking the file writing tools automatically, breaking the "agentic" flow.
*   **Cross-Platform Configuration:** Users face difficulties replicating configurations (specifically API keys for GLM/zAI) across different operating systems (Windows vs. macOS).
*   **Artifact Verification:** Trust issues arose recently when `cosign` verification failed for releases, highlighting the community's need for reliable, reproducible builds.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-04

## 1. Today's Highlights
Today's updates focus on resolving platform-specific compatibility issues and refining the CLI's output interface. The most significant activity involves a fix for the `bunx` execution failure on Windows and an aggressive push toward "Compact Tool Output" to reduce noise in the terminal. Additionally, the team is progressing on an "Episodic Context Manager" to handle long-running sessions and context degradation more elegantly.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues

*   **[Possible Fix for 429 Rate Limits (Paid Tiers)](https://github.com/google-gemini/gemini-cli/issues/24396)**
    *   **Why it matters:** Users on "AI Pro" paid plans are receiving false "rate limit exceeded" errors. This issue has sparked debate about whether the CLI consumes separate developer credits ($10/mo) versus standard marketing inclusions.
    *   **Reaction:** 22 comments in 48 hours. Users are eager for a CLI-side fix to handle quota headers more gracefully.
*   **[SSH Text Scrambling & Usability](https://github.com/google-gemini/gemini-cli/issues/24202)**
    *   **Why it matters:** Developers working via SSH on Windows are reporting that the CLI text output becomes scrambled, rendering the tool unusable in remote environments.
    *   **Reaction:** Maintainers have linked a request to create a helper detection function (`Issue #24546`).
*   **[Windows `bunx` Shebang Error](https://github.com/google-gemini/gemini-cli/issues/24654)**
    *   **Why it matters:** Using `bunx` to run the CLI on Windows fails immediately due to the `-S` flag in the shebang line.
    *   **Reaction:** A fix was raised and merged within hours (PR #24653).
*   **[Edit Tool Leaking Content on Failure](https://github.com/google-gemini/gemini-cli/issues/24644)**
    *   **Why it matters:** When "compact tool output" is enabled, failed edit operations are dumping unwanted content into the chat history, cluttering the user interface.
*   **[Search Text Generating Excessive Output](https://github.com/google-gemini/gemini-cli/issues/24634)**
    *   **Why it matters:** Search results are not being truncated, leading to massive outputs that overwhelm the TUI.
*   **[AST-Aware File Reads & Mapping (Epic)](https://github.com/google-gemini/gemini-cli/issues/22745)**
    *   **Why it matters:** The team is investigating if using Abstract Syntax Trees (AST) can help the agent read code more precisely (e.g., exact method bounds) rather than grabbing whole files, reducing token noise.
*   **[Subagents & Approval Mode Conflicts](https://github.com/google-gemini/gemini-cli/issues/23582)**
    *   **Why it matters:** Subagents lack awareness of active "Approval Modes" (like Plan vs. Auto-Edit), leading to tool calls that violate user constraints.
*   **[Memory Routing: Global vs. Project](https://github.com/google-gemini/gemini-cli/issues/22819)**
    *   **Why it matters:** Defining where the agent stores memory—globally (user preferences) vs. locally (project-specific conventions)—is critical for the upcoming memory features.
*   **[Model Creates Random Temp Scripts](https://github.com/google-gemini/gemini-cli/issues/23571)**
    *   **Why it matters:** The agent frequently scatters temporary edit scripts across random directories, creating cleanup headaches for developers before committing.
*   **[Initialization Race Condition](https://github.com/google-gemini/gemini-cli/issues/24651)**
    *   **Why it matters:** A visual bug where the startup logo fails to render or changes upon window resize, pointing to a startup state race condition.

## 4. Key PR Progress

*   **[Fix: Resolve bunx execution -S error on Windows](https://github.com/google-gemini/gemini-cli/pull/24653)**
    *   Replaced the GNU `env -S` shebang with a Windows-compatible entry point to resolve critical startup failures for Bun users.
*   **[V0 Episodic Context Manager](https://github.com/google-gemini/gemini-cli/pull/24643)**
    *   A major architectural rewrite moving from string manipulation to an "Episodic IR" pipeline. This introduces non-destructive degradation processors (History Squashing, Tool Masking) to handle long conversations better.
*   **[Enhanced Tool Confirmation UI](https://github.com/google-gemini/gemini-cli/pull/24376)**
    *   Visual improvements to the tool confirmation screen, adding clear boundaries around commands and diffs to make terminal actions easier to read.
*   **[Fix: Auth Race Condition Causing Logo Flicker](https://github.com/google-gemini/gemini-cli/pull/24652)**
    *   Addressed the startup race condition identified in Issue #24651, ensuring the logo and auth state render consistently.
*   **[Fix: Detect Uninitialized Lines (XTerm)](https://github.com/google-gemini/gemini-cli/pull/24646)**
    *   Improved the logic distinguishing between blank lines and un-rendered terminal content, fixing rendering glitches in the TUI.
*   **[Fix: Ensure Global Temp Dir in Sandbox](https://github.com/google-gemini/gemini-cli/pull/24638)**
    *   Ensures the CLI's global temp directory is always accessible even when users configure custom sandbox paths, resolving test failures and potential execution blocks.
*   **[Feat: Add support for `/about` command (ACP)](https://github.com/google-gemini/gemini-cli/pull/24649)**
    *   Adds a command to display version and environment info in the ACP (Agent Control Protocol) interface, matching the TUI functionality.
*   **[Fix: Discourage update_topic for simple tasks](https://github.com/google-gemini/gemini-cli/pull/24640)**
    *   Updates system prompts to prevent the model from redundantly changing the topic title for minor tasks, reducing narrative chatter.
*   **[Fix: Improve Windows Sandbox Reliability](https://github.com/google-gemini/gemini-cli/pull/24480)**
    *   Re-enables sandbox tests for Windows and stabilizes the suite by using OS-native tools and accounting for PTY limitations.
*   **[Feat: Support Open Plugin (plugin.json) manifest standard](https://github.com/google-gemini/gemini-cli/pull/23601)**
    *   Unified the extension model to support both Gemini's native extensions and the standard `plugin.json` format via a shared abstraction layer.

## 5. Feature Request Trends
*   **Context Optimization:** There is a strong push toward **AST-aware codebase mapping** (#22745) and **compact tool output** (#24507) to reduce token usage and interface noise.
*   **Memory & Personalization:** Multiple issues (#22819, #22809) focus on "memory routing"—teaching the agent to distinguish between global user preferences and project-specific rules.
*   **Protocol & Extension Standards:** Developers are pushing for support for broader standards, such as the **Open Plugin** manifest (#23601).

## 6. Developer Pain Points
*   **Platform Fragmentation:** Windows support remains a friction point, specifically regarding **SSH sessions** (#24202) and **Shebang compatibility** with alternative runtimes like Bun (#24654).
*   **Output Noise:** Users are frustrated with "leaky" tools that dump excessive raw text (search results, error logs) into the chat, breaking the reading flow (#24644, #24634).
*   **File Hygiene:** The agent's habit of scattering temporary files and scripts outside of the project workspace is creating friction for developers trying to keep their repos clean (#23571).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest: 2026-04-04

**Source:** github.com/github/copilot-cli

---

## 1. Today's Highlights
The release of **v1.0.17** introduces built-in skills for customizing Copilot agents and fixes MCP OAuth flows for HTTPS providers. However, the release has sparked significant community frustration regarding a regression in the login workflow (Issue #2494) and persistent policy blocks affecting MCP server usage.

## 2. Releases
**v1.0.17** (2026-04-03)
*   **Built-in Skills:** The CLI now includes built-in skills, launching with a guide to help users customize their Copilot cloud agent's environment.
*   **OAuth Compatibility:** Improved compatibility with OAuth providers (like Slack) that require HTTPS redirect URIs by adding a self-signed certificate fallback.
*   **[View Release](https://github.com/github/copilot-cli/releases)**

## 3. Hot Issues
1.  **[#2494 Regression: Login auto-enters keychain prompt](https://github.com/github/copilot-cli/issues/2494)** (7 comments)
    Users report that the `copilot login` command in v1.0.16 automatically defaults to 'No' without waiting for input, breaking authentication flows when the system keychain is unavailable.
2.  **[#2101 Transient API Errors & Rate Limiting](https://github.com/github/copilot-cli/issues/2101)** (21 comments)
    A highly active thread detailing recurring "transient API errors" that quickly escalate into hard rate limits. Users are questioning the reliability of the CLI under heavy request loads.
3.  **[#2479 MCP Registry Policy 404s](https://github.com/github/copilot-cli/issues/2479)** (5 comments)
    Individual users on Copilot Pro are finding their MCP servers blocked due to a 404 error when fetching registry policies, despite having correct settings enabled.
4.  **[#107 Tool Calls Segfault on Alpine Linux](https://github.com/github/copilot-cli/issues/107)** (11 comments)
    A long-standing issue where tool calls trigger segmentation faults within Alpine Docker containers. The community notes this is a blocker for containerized development environments.
5.  **[#2189 Transient Errors with Claude Opus 4.6](https://github.com/github/copilot-cli/issues/2189)** (4 comments)
    Specific to the Claude Opus 4.6 model, users experience API failures when the agent attempts to write plans to the `/doc` folder.
6.  **[#2205 Mouse Scroll Behavior Change](https://github.com/github/copilot-cli/issues/2205)** (4 comments)
    Recent updates altered mouse scroll behavior in terminals (specifically Terminator), causing the scroll to navigate inputs rather than the output history.
7.  **[#2223 Invalid Schema for GPT Models](https://github.com/github/copilot-cli/issues/2223)** (2 comments)
    MCP servers returning schemas without defined properties cause a 400 error on GPT models, while Claude models handle them fine.
8.  **[#2504 Discover Custom Agents from CWD](https://github.com/github/copilot-cli/issues/2504)** (2 comments)
    Feature request to discover custom agent profiles from the current working directory instead of strictly the git root, improving flexibility in monorepos.
9.  **[#2484 Configure "Allow-All" Command Sets](https://github.com/github/copilot-cli/issues/2484)** (3 comments)
    Users want granular control to pre-approve specific commands without enabling the dangerous global `--allow-all` flag.
10. **[#2508 ESC Key Triggering Cancellation](https://github.com/github/copilot-cli/issues/2508)**
    UX complaint that the ESC key cancels ongoing requests too easily (e.g., when switching terminal splits), requesting a configuration option or double-tap requirement.

## 4. Key PR Progress
*No pull requests were updated or merged in the last 24 hours based on the provided data.*

## 5. Feature Request Trends
*   **Granular Permission Management:** Users are demanding a middle ground between manual approval for every command and the unsafe "allow-all" mode. Requests include whitelisting specific commands or persisting permissions for trusted directories (Issues #2484, #2505).
*   **Discovery Customization:** Developers want more control over where the CLI looks for configuration, specifically requesting discovery of custom agents in the Current Working Directory (CWD) rather than strictly at the git root (Issue #2504).

## 6. Developer Pain Points
*   **Stability & Regressions:** The v1.0.16/v1.0.17 cycle has introduced regressions, specifically the login prompt ignoring user input (Issue #2494) and "loading environment" UI getting stuck (Issue #2466).
*   **MCP Server Connectivity:** There is widespread confusion and blocking issues regarding MCP server policy enforcement. Users with valid Pro accounts are seeing servers blocked due to 404 errors fetching policy documents (Issues #2479, #2481).
*   **Environment Support:** Critical crashes on Alpine Linux (Segmentation Faults) and PowerShell execution failures on Windows (ENOENT) remain unresolved, indicating fragility in non-standard environments.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-04-04

## 1. Today's Highlights
The `kimi-cli` community is currently debating a potential architectural shift from Python to **Bun + TypeScript**, sparked by frustrations with UI rendering stability and performance. Despite the lack of a new release in the last 24 hours, development velocity remains high with critical patches landing for the **SetTodoList "storm" bug** (v1.29.0) and new features like the **`/btw` side-question command** and **session resumption** flags.

## 2. Releases
*   **No new releases** in the last 24 hours. The latest version remains **v1.29.0**.
    *   *Note: Users updating to v1.29.0 should be aware of [Issue #1710](https://github.com/MoonshotAI/kimi-cli/issues/1710) regarding SetTodoList behavior.*

## 3. Hot Issues
*   **[#1513: Windows Installation Crash](https://github.com/MoonshotAI/kimi-cli/issues/1513)** (Bug)
    *   **Impact:** Blocker for new users on Windows 10/11. The installer crashes silently under default PowerShell execution policies.
*   **[#1710: SetTodoList "Storm" in v1.29.0](https://github.com/MoonshotAI/kimi-cli/issues/1710)** (Bug)
    *   **Impact:** High. Users report a loop of excessive `SetTodoList` tool calls after updating. A fix is already in PR ([#1742](https://github.com/MoonshotAI/kimi-cli/pull/1742)).
*   **[#1681: UI Rendering Glitches (Spacing/Slashes)](https://github.com/MoonshotAI/kimi-cli/issues/1681)** (Bug)
    *   **Impact:** Affects readability on macOS. Reports of extra character spacing (e.g., `a dd-dir`) and disappearing slashes in commands.
*   **[#1746: Windows SSL Certificate Error](https://github.com/MoonshotAI/kimi-cli/issues/1746)** (Bug)
    *   **Impact:** Connection failure on Windows 11 VS Code extension due to "EE certificate key too weak."
*   **[#1750: Clipboard Crash on macOS](https://github.com/MoonshotAI/kimi-cli/issues/1750)** (Bug)
    *   **Impact:** CLI crashes if user presses `Ctrl-V` with an empty clipboard.
*   **[#1564: `writefile` Errors in v1.25.0+](https://github.com/MoonshotAI/kimi-cli/issues/1564)** (Bug)
    *   **Impact:** Frequent errors when writing code. Users found chunking writes helps, indicating a buffer/timeout issue.
*   **[#1725: Request for `/copy` Command](https://github.com/MoonshotAI/kimi-cli/issues/1725)** (Feature Request)
    *   **Impact:** High demand. Users want a native way to copy the last assistant response to clipboard without manual selection.
*   **[#1745: Plan Mode Write Failure in Zed ACP](https://github.com/MoonshotAI/kimi-cli/issues/1745)** (Bug)
    *   **Impact:** Integration issue. `WriteFile` fails specifically when using Zed editor's ACP (Agent Communication Protocol).
*   **[#1744: Alt+Backspace Closes Panels](https://github.com/MoonshotAI/kimi-cli/issues/1744)** (Bug)
    *   **Impact:** UX friction. Standard shortcut for deleting a word unexpectedly closes interaction panels.
*   **[#1641: `kimi web` Subprocess Architecture](https://github.com/MoonshotAI/kimi-cli/issues/1641)** (Enhancement)
    *   **Impact:** Architectural proposal. Discussion on moving `kimi web` from subprocess mode to an embedded Python package mode for better resource management.

## 4. Key PR Progress
*   **[#1742: Fix SetTodoList Storm](https://github.com/MoonshotAI/kimi-cli/pull/1742)** (Closed/Merged)
    *   Refactors state persistence to prevent the tool call loops seen in v1.29.0 and adds "anti-storm" guidance.
*   **[#1707: Rewrite to Bun + TypeScript](https://github.com/MoonshotAI/kimi-cli/pull/1707)** (Open)
    *   A radical proposal to rewrite the CLI in TypeScript/Bun using React Ink, citing the Python implementation as a "complete failure" regarding UI.
*   **[#1743: Add `/btw` Side Question Command](https://github.com/MoonshotAI/kimi-cli/pull/1743)** (Open)
    *   Introduces a major UX feature allowing users to ask quick questions without interrupting the main agent flow. Includes dual-layer rendering.
*   **[#1741: Add `/copy` Command](https://github.com/MoonshotAI/kimi-cli/pull/1741)** (Open)
    *   Implements the requested feature to copy the latest assistant response to the clipboard.
*   **[#1716: Add `--session` / `--resume` Flag](https://github.com/MoonshotAI/kimi-cli/pull/1716)** (Closed/Merged)
    *   Restores session management capabilities with an interactive picker, fixing previous inconsistencies.
*   **[#1739: Fix Markdown Background Color Leaks](https://github.com/MoonshotAI/kimi-cli/pull/1739)** (Closed/Merged)
    *   Overrides default Rich styles to prevent code blocks from rendering with black backgrounds in terminals.
*   **[#1740: Add `tail` mode to ReadFile](https://github.com/MoonshotAI/kimi-cli/pull/1740)** (Closed/Merged)
    *   Adds support for negative line offsets (e.g., reading the last 100 lines) and returns total line counts.
*   **[#1738: Format Validation for WriteFile](https://github.com/MoonshotAI/kimi-cli/pull/1738)** (Open)
    *   Adds JSON/XML validation to the `WriteFile` tool to prevent syntax errors before saving.
*   **[#1715: Claude-Compatible Local Plugins](https://github.com/MoonshotAI/kimi-cli/pull/1715)** (Open)
    *   Adds a compatibility layer to load and use local Claude plugins within Kimi CLI.
*   **[#1650: Embedded Web Runtime](https://github.com/MoonshotAI/kimi-cli/pull/1650)** (Closed/Merged)
    *   Switches `kimi web` to run in-process (embedded) by default rather than spawning subprocesses, reducing overhead.

## 5. Feature Request Trends
*   **UI/UX Polish:** There is a strong push for fixing rendering artifacts (Issue #1681) and improving standard input behaviors (clipboard, shortcuts).
*   **Session & Context Management:** Users are asking for advanced context handling, including "Incremental Session Memory" for zero-cost compression (Issue #1691) and a Three-tier Rules system (Global/User/Project) to match competitors like Claude Code (Issue #1747).
*   **Workflow Integration:** High interest in "side-question" capabilities (`/btw`) and better hooks for external approvals (PR #1751).

## 6. Developer Pain Points
*   **Stability of Recent Releases:** The v1.25.0 - v1.29.0 cycle has introduced regressions, specifically with `writefile` reliability (Issue #1564) and the `SetTodoList` tool storm (Issue #1710).
*   **Windows Environment:** Windows users are facing significant friction ranging from installation failures (Issue #1513) to SSL certificate errors (Issue #1746).
*   **Architectural Debate:** The opening of PR #1707 reflects a portion of the community's deep dissatisfaction with the current Python codebase's performance and UI capabilities.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-04

**Author:** Technical Analyst (AI Tools)
**Data Source:** `anomalyco/opencode`

---

### 1. Today's Highlights
The community is currently addressing critical stability issues regarding "Plan Mode" security and file writing operations. Discussions around model provider integration—specifically OpenRouter, GitHub Copilot, and Gemini—are dominating the conversation, highlighting friction points in cost tracking and tool calling. Additionally, a major architectural proposal for SQLite sharding has sparked debate regarding performance optimization.

### 2. Releases
*No new releases published in the last 24 hours.*

### 3. Hot Issues

1.  **[#11112] [OPEN] [bug] always stuck at “Preparing write...”** (46 comments)
    *   **Why it matters:** This is the most active thread, reporting a critical workflow blockage where the agent enters an infinite loop trying to write files.
    *   **Reaction:** High frustration (20 👍); users are unable to complete basic tasks.
    *   [Link](https://github.com/anomalyco/opencode/issues/11112)

2.  **[#266] [OPEN] [model-problem] gemini doesn't handle edit tool very well** (35 comments)
    *   **Why it matters:** Highlights a persistent interoperability problem between OpenCode and the Gemini model, specifically regarding whitespace sensitivity in file edits.
    *   **Reaction:** Long-standing complaint; users are requesting whitespace normalization.
    *   [Link](https://github.com/anomalyco/opencode/issues/266)

3.  **[#12338] [OPEN] [bug, zen] 1M tokens for Opus 4.6** (34 comments)
    *   **Why it matters:** Users are confused by token counting discrepancies and context limit errors, despite UI indicators suggesting large context support.
    *   **Reaction:** Significant community concern (25 👍) regarding billing and workflow interruptions.
    *   [Link](https://github.com/anomalyco/opencode/issues/12338)

4.  **[#20650] [OPEN] [bug, core] Kimi k2.5 has issues with tool calling** (13 comments)
    *   **Why it matters:** Integration break with the Kimi k2.5 model resulting in JSON parsing errors and invalid tool calls.
    *   **Reaction:** Rapidly evolving issue created just yesterday.
    *   [Link](https://github.com/anomalyco/opencode/issues/20650)

5.  **[#9132] [OPEN] [discussion] [FEATURE]: Official Docker Sandbox Template** (11 comments)
    *   **Why it matters:** A major feature request to standardize containerized deployments of OpenCode.
    *   **Reaction:** High demand (34 👍); users want official support similar to other AI dev tools.
    *   [Link](https://github.com/anomalyco/opencode/issues/9132)

6.  **[#16100] [OPEN] [opentui] Numpad keys not working in VS Code** (11 comments)
    *   **Why it matters:** Affects users running the CLI inside the VS Code integrated terminal, specifically impacting usability for those reliant on number pads.
    *   **Reaction:** Confirmed as specific to VS Code 1.110.
    *   [Link](https://github.com/anomalyco/opencode/issues/16100)

7.  **[#454] [OPEN] OpenRouter costs not correct** (9 comments)
    *   **Why it matters:** Critical for cost monitoring; the reported costs significantly exceed actual charges from OpenRouter.
    *   **Reaction:** Ongoing accuracy issue that affects budget tracking.
    *   [Link](https://github.com/anomalyco/opencode/issues/454)

8.  **[#1388] [CLOSED] Auto Tool Failure Retry** (4 comments)
    *   **Why it matters:** Proposes a mechanism to automatically retry failed tool calls, a common failure point in agentic workflows.
    *   **Reaction:** Users want this resiliency built-in rather than having to manually prompt retries.
    *   [Link](https://github.com/anomalyco/opencode/issues/1388)

9.  **[#20935] [OPEN] [perf, core] Per-session-tree database sharding** (2 comments)
    *   **Why it matters:** A sophisticated proposal to fix SQLite lock contention by sharding the database per session.
    *   **Reaction:** Technical deep-dive; seen as a potential major performance upgrade.
    *   [Link](https://github.com/anomalyco/opencode/issues/20935)

10. **[#20938] [CLOSED] [core] Plan mode allows bash commands to execute** (2 comments)
    *   **Why it matters:** A security vulnerability where "Plan Mode" (intended to be read-only) was executing bash commands.
    *   **Reaction:** Promptly patched via PR #20936.
    *   [Link](https://github.com/anomalyco/opencode/issues/20938)

### 4. Key PR Progress

1.  **[#20776] refactor(provider): stop custom loaders using facades** (OPEN)
    *   **Focus:** Architecture/Refactoring
    *   **Detail:** Aims to decouple provider loaders from static Auth/Config facades to improve modularity.
    *   [Link](https://github.com/anomalyco/opencode/pull/20776)

2.  **[#14468] feat(opencode): add LiteLLM provider** (OPEN)
    *   **Focus:** Provider Support
    *   **Detail:** Adds native support for LiteLLM with automatic model discovery.
    *   [Link](https://github.com/anomalyco/opencode/pull/14468)

3.  **[#20947] fix(tui): restore hidden session scrollbar default** (OPEN)
    *   **Focus:** UI/TUI
    *   **Detail:** Reverts a recent change to the session scrollbar behavior based on user preference.
    *   [Link](https://github.com/anomalyco/opencode/pull/20947)

4.  **[#20752] perf(opencode): batch snapshot diffFull blob reads** (OPEN)
    *   **Focus:** Performance
    *   **Detail:** Optimizes git diff operations by batching `git cat-file` commands instead of spawning processes.
    *   [Link](https://github.com/anomalyco/opencode/pull/20752)

5.  **[#18767] feat(app): Mobile Touch Optimization** (OPEN)
    *   **Focus:** UX/Mobile
    *   **Detail:** Introduces touch optimizations for the OpenCode desktop app on mobile devices.
    *   [Link](https://github.com/anomalyco/opencode/pull/18767)

6.  **[#13854] fix(tui): stop streaming markdown/code after message completes** (OPEN)
    *   **Focus:** Bug Fix
    *   **Detail:** Resolves a rendering issue where the TUI skipped the last row of code blocks in completed messages.
    *   [Link](https://github.com/anomalyco/opencode/pull/13854)

7.  **[#12822] fix(env): remove Env namespace** (OPEN)
    *   **Focus:** Refactoring
    *   **Detail:** Removes the internal `Env` namespace to fix caching issues and reduce complexity.
    *   [Link](https://github.com/anomalyco/opencode/pull/12822)

8.  **[#20946] feat(ui): add copy button to user message code blocks** (OPEN)
    *   **Focus:** Feature/QoL
    *   **Detail:** Parity fix; adds copy buttons to user code blocks, matching AI response behavior.
    *   [Link](https://github.com/anomalyco/opencode/pull/20946)

9.  **[#20936] fix(core): deny bash in plan mode permissions** (CLOSED)
    *   **Focus:** Security
    *   **Detail:** Patches the Plan Mode security loophole discussed in Issue #20938.
    *   [Link](https://github.com/anomalyco/opencode/pull/20936)

10. **[#16750] fix(provider): skip empty-text filtering for assistant messages** (OPEN)
    *   **Focus:** API Compatibility
    *   **Detail:** Fixes API rejections caused by strict filtering of "empty" thinking blocks in assistant messages.
    *   [Link](https://github.com/anomalyco/opencode/pull/16750)

### 5. Feature Request Trends
*   **Containerization & Sandboxing:** There is a strong push for official Docker support (Issue #9132) to standardize development environments.
*   **CLI Usability:** Users are requesting features like global session lists (Issue #14561) and context dumping (PR #14675) to improve visibility into the agent's state.
*   **Model Flexibility:** A desire for "bring your own adapter" logic, such as custom tool parsers (Issue #2917) and allowing arbitrary model strings (Issue #20912).

### 6. Developer Pain Points
*   **Model Fragility:** The Edit Tool remains a major friction point, specifically with Gemini (Issue #266) and Kimi (Issue #20650) failing to match strings or parse JSON correctly.
*   **Cost Tracking Accuracy:** Users actively distrust the in-app cost display for providers like OpenRouter (Issue #454), leading to manual billing reconciliation.
*   **Infinite Loops:** The "Preparing write..." hang (Issue #11112) represents a critical failure mode where the agent gets stuck in a retry loop without recovery.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-04

**TL;DR:** The release of **Qwen Code v0.14.0** has triggered a wave of user feedback focused on stability and model support. While the community is eager to integrate the new **Qwen 3.6-Plus** model, significant regressions regarding startup hangs, hallucinations, and permission persistence have dominated the issue tracker. Concurrently, the development team is pushing aggressive core refactoring, including parallel tool execution and queue management fixes.

---

## 1. Today's Highlights
The release of **v0.14.0** has been met with mixed reactions due to a critical startup hang bug associated with the new checkpointing feature. While users are clamoring for support for the newly released **Qwen 3.6** models, the community is currently troubleshooting high-priority regressions, including severe agent hallucinations and memory heap crashes. Development activity remains high, with ongoing efforts to refactor tool scheduling for parallelism and introduce advanced features like Jupyter Notebook support.

## 2. Releases
* **[v0.14.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.0)**: This update focuses on extensibility and proxy support. Key changes include:
    * **Fix:** Added `.qwen` path replacement in markdown files during extension install to prevent broken links.
    * **Fix:** Normalized proxy URLs to support addresses without a protocol prefix (e.g., `127.0.0.1`), resolving connection issues for users behind corporate firewalls.

## 3. Hot Issues
*   **[#2862, #2860, #2861](https://github.com/QwenLM/qwen-code/issues/2862): Startup hangs when "checkpointing" is enabled**
    * **Impact:** Critical. Users report that enabling the new checkpointing feature causes Qwen Code to freeze indefinitely on the "Initializing..." screen.
    * **Reaction:** Multiple duplicates filed; users recommend disabling checkpointing in `settings.json` as a temporary workaround.
*   **[#2844](https://github.com/QwenLM/qwen-code/issues/2844): Request for Qwen 3.6-Plus in Coding Plans**
    *   **Impact:** High demand. Despite updating to v0.14.0, the model list for coding plans still defaults to 3.5-plus. Users are eager to utilize the capabilities of the latest Qwen 3.6-Plus for programming tasks.
*   **[#2867](https://github.com/QwenLM/qwen-code/issues/2867): Severe hallucinations with v0.14.0**
    *   **Impact:** Usability blocking. Reports claim the agent is deleting code arbitrarily and ignoring file visibility, a regression that significantly degrades trust in the tool's reliability.
*   **[#2868](https://github.com/QwenLM/qwen-code/issues/2868): Heap out of memory crashes**
    *   **Impact:** Stability. Users are experiencing out-of-memory (OOM) errors during prolonged sessions, leading to aborted operations.
*   **[#2723](https://github.com/QwenLM/qwen-code/issues/2723): "Always Allow" permissions ignored**
    *   **Impact:** UX Friction. Despite selecting "Always Allow" for shell/MCP tools, the system prompts for permission every single time, breaking the flow for automated tasks.
*   **[#2828](https://github.com/QwenLM/qwen-code/issues/2828): ACP Integration Error**
    *   **Impact:** Configuration. Users configuring API keys via the BaiLian platform are facing "Slash command not supported" errors, preventing basic conversations.
*   **[#2846](https://github.com/QwenLM/qwen-code/issues/2846): Permission rules fail with Env Var prefixes**
    *   **Impact:** Nuance/Logic. The "Always allow" rule matching fails if a shell command includes an environment variable prefix (e.g., `VAR=value cmd`), forcing repeated approvals.
*   **[#2851](https://github.com/QwenLM/qwen-code/issues/2851): Chrome DevTools MCP context windowing**
    *   **Impact:** MCP Integration. Unlike `gemini-cli`, Qwen Code struggles to attach to existing browser windows, forcing users to open new windows and losing login context.
*   **[#2869](https://github.com/QwenLM/qwen-code/issues/2869): tree-sitter.wasm missing error**
    *   **Impact:** Environment. Missing WASM files are causing shell execution failures in specific environments.
*   **[#2859](https://github.com/QwenLM/qwen-code/issues/2859): Request to disable proprietary models**
    *   **Impact:** Philosophy. A request to add an option to hide proprietary models (like 3.6-Plus), reflecting a segment of the user base that prefers strictly open-weight models.

## 4. Key PR Progress
*   **[#2864](https://github.com/QwenLM/qwen-code/pull/2864): Intelligent Tool Parallelism**
    *   **Feature:** Implements "Kind-based batching." Read-only tools (Read, Grep) can now execute in parallel rather than sequentially, significantly reducing wait times for information gathering.
*   **[#2812](https://github.com/QwenLM/qwen-code/pull/2812): Jupyter Notebook (.ipynb) Support**
    *   **Feature:** Adds `NotebookEditTool` to allow the agent to edit cells (replace, insert, delete) and enhances the ReadFile tool to render notebook outputs instead of raw JSON.
*   **[#2858](https://github.com/QwenLM/qwen-code/pull/2858): Fix MCP Tool Schema Validation**
    *   **Fix:** Resolves validation errors for MCP tools using `anyOf`/`oneOf` (union types). It adds client-side coercion to handle stringified JSON values sent by the LLM.
*   **[#2854](https://github.com/QwenLM/qwen-code/pull/2854): Mid-turn Queue Drain**
    *   **Feature:** Allows user messages to break into the tool execution queue. Instead of waiting for all tools to finish, the model can see user input immediately, enabling faster interrupt/correction.
*   **[#2728](https://github.com/QwenLM/qwen-code/pull/2728): Centralize IDE Diff Interaction**
    *   **Refactor:** Moves diff handling from individual tools to `CoreToolScheduler`. This aims to fix the "multi-edit on same file" bug and reduce token waste by batching edits.
*   **[#2852](https://github.com/QwenLM/qwen-code/pull/2852): UI Enhancements**
    *   **Feature:** Introduces multi-line table wrapping for shell output and a Claude Code-like persistent shell management history.
*   **[#2770](https://github.com/QwenLM/qwen-code/pull/2770): Compact/Verbose Mode Toggle**
    *   **Feature:** Adds a `Ctrl+O` hotkey to switch between "Compact" mode (hiding tool output/thoughts) and "Verbose" mode (showing full details).
*   **[#2827](https://github.com/QwenLM/qwen-code/pull/2827): Advanced Hook System**
    *   **Feature:** Adds HTTP Hooks, Function Hooks, and Async Hook support, allowing for sophisticated webhooks and SDK integrations.
*   **[#2865](https://github.com/QwenLM/qwen-code/pull/2865): Fix Node.js Deprecation Warning**
    *   **Fix:** Upgrades `normalize-package-data` to silence the `DEP0169` `url.parse()` warnings on Node.js 22+.
*   **[#2776](https://github.com/QwenLM/qwen-code/pull/2776): Enhanced `/btw` Side Questions**
    *   **Feature:** Improves the side-question prompt, explicitly instructing the model to skip tools and act as a pure conversational assistant.

## 5. Feature Request Trends
*   **Qwen 3.6 Model Integration:** The most requested feature is full support for **Qwen 3.6** and **3.6-Plus** across all configurations, including coding plans and local endpoints.
*   **Robustness in Long-Running Sessions:** Users are asking for "Micro-compact" strategies and better heap management to prevent OOM errors during long coding sessions.
*   **Strict Open-Weight Mode:** There is a growing trend in requesting features that allow users to filter out proprietary/enterprise models to stick to open-weights only.

## 6. Developer Pain Points
*   **Startup Reliability:** The v0.14.0 release introduced a regression where the tool hangs on startup if checkpointing is enabled, blocking users from accessing the tool entirely.
*   **UX Friction with Permissions:** Developers are frustrated with the permission system. It fails to remember "Always Allow" settings and does not intuitively handle commands with environment variable prefixes.
*   **Model Stability (Hallucinations):** There are reports of the newer models (or the way the tool interacts with them) causing severe hallucinations, such as deleting code or claiming not to see files that exist.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*