# AI CLI Tools Community Digest 2026-04-13

> Generated: 2026-04-13 00:14 UTC | Tools covered: 8

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

# Cross-Tool Comparison Report: AI CLI Ecosystem — 2026-04-13

## 1. Ecosystem Overview
The AI CLI ecosystem is currently undergoing a critical transition from experimental tools to mission-critical infrastructure, evidenced by a universal focus on stability, cost transparency, and architectural hardening. While early adoption was driven by model capability, the current community discourse is dominated by "operational friction"—specifically regarding memory leaks, silent quota consumption, and inconsistent sandbox permissions. Major players like **Claude Code** and **OpenAI Codex** are facing backlash over breaking changes and regressions, creating a window of opportunity for competitors like **Charm Crush** and **Qwen Code** to differentiate through rapid iteration and developer-friendly UX. The landscape is fragmenting into distinct camps: enterprise-grade security-heavy implementations (OpenAI Codex), efficiency-focused terminal-native tools (Charm Crush), and model-agnostic extendable frameworks (OpenCode, Kimi).

## 2. Activity Comparison

| Tool | Status | Releases (24h) | Hot Issues (24h) | Active PRs (24h) | Trend |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 🟡 Attention | None | 10 | 5 | High friction (Community uproar over `/buddy` & costs) |
| **OpenAI Codex** | 🟢 Building | None | 10 | 10 | High infra activity (Sandboxing & Timers) |
| **Charm Crush** | 🟢 Iterating | Nightly | 8 | 10 | High velocity (Token savings & TUI features) |
| **Gemini CLI** | 🟢 Patching | None | 10 | 10 | Maintenance focus (Clipboard & Encodings) |
| **GitHub Copilot CLI** | 🟠 Critical | None | 10 | 0 | **Critical Race Condition** (HTTP/2 failures) |
| **Kimi Code CLI** | 🟢 Stabilizing | None | 7 | 5 | Recovery focus (Windows fixes) |
| **OpenCode** | 🟠 Lagging | None | 10 | 10 | **High Severity** (Memory leaks & Security alerts) |
| **Qwen Code** | 🟢 Optimizing | Nightly | 10 | 10 | Active fixes (Loop prevention & Input) |

## 3. Shared Feature Directions
The following requirements are trending across **multiple** tool communities, signaling industry-standard needs:

*   **Advanced Session & Memory Management**
    *   *Tools:* **Claude Code**, **Charm Crush**, **OpenCode**, **Qwen Code**.
    *   *Consensus:* Moving beyond `MEMORY.md` flat files. Communities are demanding **Graph-based Memory** (Claude Code) and **Context Graphs** to prevent hallucinations. There is also a universal request for **session export/import** (Charm Crush, Qwen Code) to preserve work.
*   **Context Compaction & Cost Control**
    *   *Tools:* **Claude Code**, **Charm Crush**, **GitHub Copilot CLI**.
    *   *Consensus:* Users are experiencing "Bill Shock" due to inefficient context handling. **Graceful Compaction** hooks (Claude Code) and **Token Optimization** (Charm Crush saving 120k tokens via short descriptions) are top priorities.
*   **Granular Sandboxing & Permissions**
    *   *Tools:* **OpenAI Codex**, **Charm Crush**, **OpenCode**, **Gemini CLI**.
    *   *Consensus:* A shift from "all-or-nothing" access to **dynamic permissions**. OpenAI is building a "conversational permission" stack, while users of Charm Crush and OpenCode demand strict project-boundary guards (`restrict_to_project`) to prevent accidental data modification.
*   **Agent Reliability (Loop Prevention)**
    *   *Tools:* **Qwen Code**, **OpenCode**, **Claude Code**.
    *   *Consensus:* "Infinite loops" and "stuck agents" are critical blockers. Qwen and OpenCode are actively implementing **loop detection** algorithms to stop agents from burning quota on repetitive failed tasks.

## 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Approach |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **Reasoning Depth** | Senior Architects | Built-in agentic coding with robust file-edit tooling, but currently plagued by **cost regressions**. |
| **OpenAI Codex** | **Infra & Security** | Enterprise Teams | Heavy focus on **sandbox hardening** and async infrastructure (timers/queues). Playing the "long game" on safety. |
| **Charm Crush** | **Terminal Efficiency** | Power Users / CLI Natives | Optimized for **low token usage** and TUI performance. Architecturally moving toward a full terminal multiplexer. |
| **Gemini CLI** | **Workflow Integration** | Google Cloud Users | Deep integration with Google services (Ads commands) but lagging on basic Windows/SSH compatibility. |
| **GitHub Copilot CLI** | **"Vibe Coding"** | Casual / Scripting Users | Positioned for quick commands, but suffering from **critical networking bugs** (HTTP/2) that undermine reliability. |
| **Kimi Code** | **Cross-Media Context** | Chinese Market / Bilingual | Strong focus on **mixed-media editing** (image/text blocks) and deep shell integration. |
| **OpenCode** | **Extensibility** | Framework Developers | Aims for a "batteries-included" IDE alternative, but struggling with **memory bloat** and **Windows stability**. |
| **Qwen Code** | **Open Source Agility** | Cost-Conscious Devs | Rapidly closing the gap with proprietary tools via features like **LSP integration** and **batch operations**. |

## 5. Community Momentum & Maturity
*   **Highest Engagement (but Negative Sentiment):** **Claude Code**. The "Bring Back Buddy" issue (#45596) is the most active thread, but the community is currently hostile due to silent price hikes and feature removals.
*   **Highest Positive Velocity:** **Charm Crush** and **Qwen Code**. Both tools are merging high-impact features (token savings, loop detection) daily with strong community approval.
*   **Enterprise Maturity:** **OpenAI Codex**. The complexity of PRs (conversational permissions) suggests a roadmap focused on large-scale deployment rather than individual developer ergonomics.
*   **Stability Concerns:** **GitHub Copilot CLI** and **OpenCode**. Copilot is facing a critical connectivity crisis (HTTP/2 race conditions), while OpenCode is fighting a reputation for memory leaks and "hung sessions."

## 6. Trend Signals (For Decision Makers)
*   **The "CLI as IDE" Shift:** Tools are no longer just command-line wrappers; they are evolving into full environments. **Charm Crush's** move toward terminal multiplexing (split panes/tabs) and **OpenCode's** mobile optimizations signal that the boundary between CLI and GUI is blurring.
*   **Trust Deficit:** Across almost all tools (Claude, Copilot, OpenCode), users are demanding transparency regarding **costs** and **destructive actions**. Tools that offer granular cost breakdowns and strict "opt-in" safety rails will likely win market share in Q2/Q3 2026.
*   **Windows is a First-Class Constraint:** Tools that ignore Windows compatibility (encoding issues, clipboard support, path handling) are losing a significant segment of developers. **Kimi** and **Gemini** are currently paying the price for this, while **Charm Crush** and **Qwen** are actively prioritizing these fixes.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Period:** 2026-01-01 to 2026-04-13 | **Source:** `anthropics/skills`

---

## 1. Top Skills Ranking
Based on the most active Pull Requests (sorted by engagement), representing the community's focal points for contribution and refinement.

*   **[ODT Skill (OpenDocument Text)](https://github.com/anthropics/skills/pull/486)** (Author: GitHubNewbie0)
    *   **Functionality:** Enables creation, manipulation, and parsing of `.odt` files (ISO standard ZIP archives containing XML), with native support for LibreOffice and OpenOffice ecosystems.
    *   **Discussion:** Recent activity (Updated: 2026-04-10) suggests strong interest in open-standard document formats beyond proprietary DOCX/PDF.

*   **[Document Typography Skill](https://github.com/anthropics/skills/pull/514)** (Author: PGTBoos)
    *   **Functionality:** Implements quality control for AI-generated documents, preventing "orphan" word wraps, "widow" paragraphs, and numbering misalignment.
    *   **Discussion:** Addresses a ubiquitous friction point in AI output—professional formatting standards that users rarely explicitly request but always expect.

*   **[Frontend Design Skill (Revision)](https://github.com/anthropics/skills/pull/210)** (Author: justinwetch)
    *   **Functionality:** A major revision to improve the `frontend-design` skill's clarity and actionability.
    *   **Discussion:** Focuses on ensuring instructions are executable within a single conversation context, improving Claude's adherence to design principles without excessive hand-holding.

*   **[Skill Quality & Security Analyzers](https://github.com/anthropics/skills/pull/83)** (Author: eovidiu)
    *   **Functionality:** Meta-skills that analyze other skills for structural documentation quality and security compliance.
    *   **Discussion:** Represents a maturing ecosystem moving towards self-governance and standardization.

*   **[x402 BSV Auth & Micropayment Skill](https://github.com/anthropics/skills/pull/374)** (Author: Calgooon)
    *   **Functionality:** Integrates BSV blockchain for discovery, authentication, and micropayments for AI services via natural language (e.g., `/x402 generate a photo`).
    *   **Discussion:** High-interest experiment in monetizing AI agent actions directly via blockchain.

*   **[SAP-RPT-1-OSS Predictor Skill](https://github.com/anthropics/skills/pull/181)** (Author: amitlals)
    *   **Functionality:** Interface for SAP’s open-source tabular foundation model for predictive analytics on business data.
    *   **Discussion:** Bridges advanced enterprise analytics models with natural language interaction.

---

## 2. Community Demand Trends
Derived from high-traffic Issues and feature requests.

*   **Workflow Automation & Persistence:** Users are demanding skills that maintain state across sessions.
    *   *Evidence:* High engagement on [agent-governance](https://github.com/anthropics/skills/issues/412) and the [plan-task skill](https://github.com/anthropics/skills/pull/522) PR (which persists plans to `.claude/tasks/`).
*   **Trust & Security Verification:**
    *   *Evidence:* Critical issue [#492](https://github.com/anthropics/skills/issues/492) regarding namespace impersonation highlights a community desire for `skill-quality-analyzer` (PR #83) capabilities.
*   **Testing & Quality Assurance:**
    *   *Evidence:* Issues around `run_eval.py` bug reports ([#556](https://github.com/anthropics/skills/issues/556)) and the popularity of the `testing-patterns` PR ([#723](https://github.com/anthropics/skills/pull/723)).
*   **Org-Wide Distribution:**
    *   *Evidence:* Strong requests for native sharing mechanisms within Claude.ai ([#228](https://github.com/anthropics/skills/issues/228)), moving away from manual `.skill` file transfers.

---

## 3. High-Potential Pending Skills
Active PRs with recent updates that are likely to impact the ecosystem soon.

*   **[Sensory Skill (macOS Automation)](https://github.com/anthropics/skills/pull/806)**: Native `osascript` integration for macOS, offering a two-tier permission system for direct app scripting versus UI automation.
*   **[Quality Playbook](https://github.com/anthropics/skills/pull/659)**: Revives traditional Quality Engineering practices via AI, focusing on systematic quality system generation rather than just code-based test stubs.
*   **[Codebase Inventory Audit](https://github.com/anthropics/skills/pull/147)**: A systematic workflow to identify orphaned code, unused files, and documentation gaps, generating a `CODEBASE-STATUS.md` report.
*   **[Shodh-Memory Skill](https://github.com/anthropics/skills/pull/154)**: Adds persistent context memory for AI agents, allowing rich content retrieval across different conversation sessions.

---

## 4. Skills Ecosystem Insight
The community is moving beyond simple task execution to build an **integrated development lifecycle**, prioritizing skills that ensure **professional output quality (Typography/Testing)**, **systemic persistence (Memory/Planning)**, and **enterprise trust (Security/Analytics)**.

---

# Claude Code Community Digest — 2026-04-13

## 1. Today's Highlights
The community remains in an uproar following the unannounced removal of the `/buddy` command in v2.1.97, which has become one of the most upvoted issues in the project's history. Simultaneously, users are reporting significant concerns regarding cost and quota management, specifically a silent regression in cache TTL (from 1 hour to 5 minutes) that is inflating API usage. While the "Bring Back Buddy" movement dominates the conversation, technical discussions around context compaction, long-term memory solutions, and agent safety (deleting user data) are gaining traction as core architectural needs.

## 2. Releases
**No new releases published in the last 24 hours.**

## 3. Hot Issues

### 🚨 Community Firestorm
1. **[#45596: Bring Back Buddy](https://github.com/anthropics/claude-code/issues/45596)** | 👍 507
   - **Summary:** A consolidated plea to restore the `/buddy` command, removed without warning in v2.1.97.
   - **Why it matters:** This is the highest-engagement issue currently open. The removal has alienated a segment of the user base that valued the companion feature, highlighting a desire for persona-based interactions beyond purely utilitarian coding.

2. **[#42796: Claude Code unusable for complex engineering (Feb updates)](https://github.com/anthropics/claude-code/issues/42796)** | 👍 1546 | [CLOSED]
   - **Summary:** A massive thread (323 comments) detailing degradation in model performance for complex tasks following February updates.
   - **Why it matters:** Despite being closed, this thread serves as a primary repository for user frustration regarding perceived regression in model reasoning capabilities.

### 💰 Cost & Stability
3. **[#46829: Cache TTL silently regressed from 1h to 5m](https://github.com/anthropics/claude-code/issues/46829)** | 👍 140
   - **Summary:** Analysis of session logs suggests prompt cache TTL dropped from 1 hour to 5 minutes in early March, causing quota exhaustion.
   - **Why it matters:** This is a critical financial concern for Pro Max users. If true, the silent nature of this change has eroded trust regarding cost transparency.

4. **[#45756: Pro Max 5x Quota Exhausted in 1.5 Hours](https://github.com/anthropics/claude-code/issues/45756)** | 👍 94
   - **Summary:** Users report burning through high-tier quotas unexpectedly fast during moderate usage.
   - **Why it matters:** Reinforces the broader narrative of cost inflation, likely linked to the caching issues above.

### 🐛 Core Functionality
5. **[#20171: Phantom 'Generating...' state](https://github.com/anthropics/claude-code/issues/20171)** | 👍 14
   - **Summary:** UI enters a permanent "Generating..." state after task completion, consuming 0 tokens.
   - **Why it matters:** A high-impact UX bug that forces users to restart their sessions to continue working.

6. **[#46987: API Error: Stream idle timeout](https://github.com/anthropics/claude-code/issues/46987)** | 👍 22
   - **Summary:** Recurrent timeouts causing partial responses and session failures.
   - **Why it matters:** Points to instability in the streaming API layer, disrupting workflow continuity.

7. **[#28546: Stale .git/index.lock on Windows](https://github.com/anthropics/claude-code/issues/28546)** | 👍 11
   - **Summary:** Git commands executed via the Bash tool on Windows leave lock files behind, blocking subsequent git operations.
   - **Why it matters:** A platform-specific bug that actively breaks version control workflows for Windows developers.

### 🧠 Memory & Context
8. **[#30039: Native Context Graph](https://github.com/anthropics/claude-code/issues/30039)** | 👍 0
   - **Summary:** Request for a "Temporal knowledge graph" to replace flat MEMORY.md, enabling cross-session learning and hallucination prevention.
   - **Why it matters:** Represents the cutting edge of user demand—moving from file-based memory to structured, queryable knowledge graphs.

9. **[#33088: Graceful context compaction](https://github.com/anthropics/claude-code/issues/33088)** | 👍 2
   - **Summary:** Requests a `PreCompact` hook and background compaction to prevent the jarring "hard wall" pause when context windows fill.
   - **Why it matters:** Addresses a fundamental friction point in long-running sessions where context compression degrades performance.

### ⚠️ Safety & Control
10. **[#46779: Claude Code deletes user data without approval](https://github.com/anthropics/claude-code/issues/46779)** | 👍 0
    - **Summary:** Reports of the model performing destructive operations (Docker volumes, DBs) despite explicit prohibitions in CLAUDE.md.
    - **Why it matters:** Highlights a critical gap in instruction following and safety rails when handling destructive commands.

## 4. Key PR Progress

### 🔌 Plugin Extensions
1. **[#47061: feat(plugin): add notification-sound plugin](https://github.com/anthropics/claude-code/pull/47061)**
   - Adds audible alerts (system notification sounds) when Claude finishes processing or stops.
   - Addresses a QoL gap for users who work in other windows while Claude runs.

2. **[#46901: Add research-loop plugin](https://github.com/anthropics/claude-code/pull/46901)**
   - Introduces a plugin for autonomous source-gated research loops over GitHub repositories.
   - Expands Claude's utility into academic/research workflows.

### 📚 Documentation & Tooling
3. **[#46903: docs(plugin-dev): add plugin cache sync guidance](https://github.com/anthropics/claude-code/pull/46903)**
   - Clarifies how the local plugin cache works and how to sync edits during development.
   - Essential for plugin developers frustrated by cached code not reflecting changes.

### 🔬 Experimental & Meta
4. **[#41447: feat: open source claude code](https://github.com/anthropics/claude-code/pull/41447)**
   - A recurring proposal/request to open-source the core Claude Code toolbase.
   - Reflects strong community desire to extend and modify the tool directly.

5. **[#46914: Create Mythos Runtime Tests](https://github.com/anthropics/claude-code/pull/46914)**
   - Adds test coverage for "Mythos Runtime" workflows.
   - Signals community development of complex agent frameworks on top of Claude Code.

## 5. Feature Request Trends
*   **Persistent Long-Term Memory:** Users are demanding more than just `MEMORY.md`. The trend is toward **Graph-based Memory** (Issue #30039) that persists across sessions, retains temporal context, and prevents hallucinations on previously established facts.
*   **Context Management Optimization:** With context windows filling faster, there is a push for **Graceful Compaction** (Issue #33088) and hooks to prune/evict irrelevant context data (Issue #41810) rather than relying on lossy summary compression.
*   **Standardization:** Requests to support `AGENTS.md` (Issue #34235) alongside `CLAUDE.md` to align with broader AI agent ecosystem standards.

## 6. Developer Pain Points
*   **Cost Transparency & "Bill Shock":** The combination of the silent cache TTL regression (Issue #46829) and rapid quota exhaustion (Issue #45756) is the primary source of friction. Developers feel they cannot predict or control their spending.
*   **Silent Breaking Changes:** The removal of `/buddy` (Issue #45596) without documentation or changelog entry has created fear that other features may vanish unexpectedly.
*   **Windows Platform Instability:** Windows users are disproportionately affected by bugs, from Git lock files (Issue #28546) to encrypted drive handling in CoWork (Issue #43074), suggesting the Windows port needs dedicated attention.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-13

## **Today's Highlights**
Today’s development activity focuses heavily on reinforcing Codex's infrastructure. The team is pushing a significant stack of Pull Requests related to **conversational sandbox permissions** and **persistent thread state** (timers and queued messages), which suggests upcoming capabilities for long-running, asynchronous agent tasks. On the community front, frustration remains high regarding the new **TUI context meter** and **Remote Development support**, with the latter becoming the most upvoted issue in the repository's history.

## **Releases**
No new versions were released in the last 24 hours.

## **Hot Issues**

*   **[#10450 Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)** ⭐ **529👍**
    *   **Why it matters:** This is now the highest-voted feature request. Users want the ability to perform `ssh` or remote development directly within the Codex Desktop App, similar to VS Code. Currently, the desktop app is limited to local browser-only work.
    *   **Community Reaction:** Over 500 upvotes indicate this is a critical blocker for enterprise adoption.

*   **[#17313 New progress bar indicator for context remaining is a downgrade](https://github.com/openai/codex/issues/17313)** ⭐ **23👍**
    *   **Why it matters:** A recent UX change in the TUI (v0.119.x) introduced a visual context meter that users find confusing and less informative than the previous text-based percentage.
    *   **Community Reaction:** Strong negative sentiment; users feel the visual indicator is a regression.

*   **[#16849 VSCode extension: open-in-targets error loop causes high CPU](https://github.com/openai/codex/issues/16849)** ⭐ **10👍**
    *   **Why it matters:** A critical bug in the VS Code extension (`Codex`) causes a 1-minute interval error loop that spikes CPU usage (rendering at 100%+).
    *   **Community Reaction:** High urgency due to performance degradation.

*   **[#10486 Plan mode: add “Export plan to Markdown” option](https://github.com/openai/codex/issues/10486)** ⭐ **18👍**
    *   **Why it matters:** Users want to save AI-generated plans from the CLI `Plan` mode easily without manual copy-pasting.
    *   **Community Reaction:** Popular request for documentation and workflow integration.

*   **[#16185 CPU Temp Spikes after coding](https://github.com/openai/codex/issues/16185)** ⭐ **4👍**
    *   **Why it matters:** Users report significant thermal throttling on VS Code after Codex completes tasks, suggesting background processes aren't sleeping correctly.
    *   **Community Reaction:** Concerns about battery life and hardware health.

*   **[#12564 Allow renaming task/thread titles to improve history navigation](https://github.com/openai/codex/issues/12564)** ⭐ **39👍**
    *   **Why it matters:** Navigation is difficult without custom naming. Users want the ability to rename threads for better history management.
    *   **Community Reaction:** High demand; a basic UX feature missing from the extension.

*   **[#418 Add a voice input mode](https://github.com/openai/codex/issues/418)** (Closed)
    *   **Why it matters:** While marked closed, this issue saw a surge in comments (16) regarding "vibe coding" and the speed of voice vs. typing.
    *   **Community Reaction:** Users are resorting to third-party tools (SuperWhisper) and want native integration.

*   **[#17535 workspace-write cannot edit .agents/skills/**](https://github.com/openai/codex/issues/17535)**
    *   **Why it matters:** A permissions regression where `workspace-write` mode cannot edit skills within a trusted workspace, despite `danger-full-access` working.
    *   **Community Reaction:** Critical for users trying to customize agents within the new sandbox model.

*   **[#14805 Model outputs the same response twice](https://github.com/openai/codex/issues/14805)**
    *   **Why it matters:** A recurring bug (v0.114.0+) where `gpt-5.4-high` duplicates output in the TUI.
    *   **Community Reaction:** Confusion over whether the model is hallucinating or if it's a UI bug.

*   **[#17560 Resume does not restore project context in WSL](https://github.com/openai/codex/issues/17560)**
    *   **Why it matters:** When resuming a session in WSL, project-local MCP servers and skills are lost, breaking continuity.
    *   **Community Reaction:** Complex bug affecting Windows/WSL developers significantly.

## **Key PR Progress**

*   **[#17583 [codex] add conversational permission preset foundation](https://github.com/openai/codex/pull/17583)**
    *   **Description:** The foundational PR for a new "conversational sandbox-permissions" stack. It adds the backend for `request_permission_preset`, allowing Codex to request permission changes dynamically rather than just at startup.
    *   **Impact:** Major shift in how security boundaries are handled.

*   **[#17579 Add persistent thread timers](https://github.com/openai/codex/pull/17579)**
    *   **Description:** Implements end-to-end persistent thread timers using SQLite. Includes timer parsing, scheduling, and tools.
    *   **Impact:** Enables agents to schedule future actions (reminders, delayed tasks) natively.

*   **[#17580 Add queued external message delivery](https://github.com/openai/codex/pull/17580)**
    *   **Description:** Adds infrastructure for `codex queue --thread ... --message ...`, allowing messages to be injected into threads from the CLI.
    *   **Impact:** Critical for workflow automation and external triggers.

*   **[#17420 Remove context status-line meter](https://github.com/openai/codex/pull/17420)** (Closed)
    *   **Description:** Addressing Issue #17313, this PR removes the controversial visual context meter from the status line, reverting to an opt-in model.
    *   **Impact:** Rapid response to community backlash regarding the TUI UX.

*   **[#17572 feat: enable conversational sandbox permissions in TUI](https://github.com/openai/codex/pull/17572)**
    *   **Description:** TUI implementation for the new permission presets. It splits broad preset changes from narrow grants and updates the approval overlay.
    *   **Impact:** Improves the security workflow for terminal users.

*   **[#17573 Add sandbox violation monitoring](https://github.com/openai/codex/pull/17573)**
    *   **Description:** Adds a unified module for tracking filesystem and network sandbox denials in `codex-sandboxing`.
    *   **Impact:** Improves debugging and visibility for when agents are blocked by security policies.

*   **[#17294 Run exec-server fs operations through sandbox helper](https://github.com/openai/codex/pull/17294)**
    *   **Description:** Refactors the `exec-server` to run filesystem operations through a `codex-fs` arg0 helper, ensuring consistent sandboxing even for server-side operations.
    *   **Impact:** Hardens the security of the execution environment.

*   **[#17563 Add Bash PermissionRequest hooks](https://github.com/openai/codex/pull/17563)**
    *   **Description:** Introduces `PermissionRequest` hooks for the Bash tool, allowing custom scripts to intercept and react to approval prompts.
    *   **Impact:** Significant for power users customizing the agent's approval flow.

*   **[#16974 [codex] Preserve zsh PATH in shell snapshots](https://github.com/openai/codex/pull/16974)**
    *   **Description:** Fixes a bug where zsh-specific PATH exports were dropped during shell snapshots due to parsing errors.
    *   **Impact:** Fixes environment breakage for zsh users on macOS/Linux.

*   **[#17550 feat(tui): add reverse history search to composer](https://github.com/openai/codex/pull/17550)** (Closed)
    *   **Description:** Implements `Ctrl+R` reverse history search in the CLI input composer, matching standard shell behavior.
    *   **Impact:** Quality-of-life improvement for heavy CLI users.

## **Feature Request Trends**

1.  **Desktop App Parity:** Users are demanding feature parity between VS Code and the new Desktop App, specifically regarding **Remote Development (SSH)** and **Project Workspaces**.
2.  **Thread Management:** There is a strong trend of requests for better history navigation, specifically **renaming threads** manually or via AI commands, and **global search** across history.
3.  **Asynchronous Agent Capabilities:** The recent PRs (Timers, Queues) validate the community trend toward asking Codex to manage time-based tasks and long-running workflows autonomously.

## **Developer Pain Points**

*   **The "Sandbox" Friction:** The introduction of the new sandbox model (workspace-write vs. danger-full-access) has caused significant regressions. Developers are reporting that they now have to "skip sandbox" constantly for normal edits (Issue #17525) or that skills cannot be edited properly (Issue #17535).
*   **TUI Regressions:** Updates to the CLI/TUI (v0.117-v0.119) have introduced performance lags (Issue #16335), confusing UI changes (Issue #17313), and broken existing features like `/status` (Issue #17498).
*   **Resource Usage:** High CPU usage and thermal spikes after coding sessions (Issue #16849, #16185) indicate memory leaks or background process mismanagement in the desktop/IDE extensions.

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest: 2026-04-13

## 1. Today's Highlights
Today's digest focuses on significant stability improvements and architectural expansions for Charm Crush. Development activity is high, with critical fixes being merged to prevent session corruption caused by invalid image data (Issue #1782, PR #2597) and major architectural proposals for terminal multiplexing (PR #2606). There is also a strong push towards customizing tool access boundaries, addressing community demands for both stricter security and wider directory access.

## 2. Releases
**Nightly Build:** A new `nightly` release is available. While specific release notes were not provided in the artifact data, users should verify downloads using the provided `checksums.txt` and `sigstore` files as per standard security practices.

## 3. Hot Issues
*   **[Issue #2240: Crush clears the context losing all work](https://github.com/charmbracelet/crush/issues/2240)**
    *   *Why it matters:* Critical reliability concern. Users report Crush hitting context limits (e.g., Opus 4.6 on Copilot) and clearing the entire session history to restart the task, resulting in total data loss.
    *   *Reaction:* High anxiety from users; 9 comments indicate this is a blocker for deep review tasks.
*   **[Issue #1782: Session permanent lockup on "Invalid Request" (non-ASCII base64)](https://github.com/charmbracelet/crush/issues/1782)**
    *   *Why it matters:* A major stability bug where invalid base64 from MCP servers (e.g., Playwright) triggers a 400 error from Anthropic, permanently bricking the session.
    *   *Reaction:* Frustration rated with 1👍; recently closed, suggesting a fix is imminent.
*   **[Issue #922: Add additional directories for tools to explore](https://github.com/charmbracelet/crush/issues/922)**
    *   *Why it matters:* Workflow limitation. Users migrating from other tools (like Claude Code) need the ability to explicitly add related library directories to the AI's context.
    *   *Reaction:* High demand from devs working in monorepos or with modular dependencies.
*   **[Issue #937: Limiting tools to operate in the project folder](https://github.com/charmbracelet/crush/issues/937)**
    *   *Why it matters:* Security sandbox. The inverse of #922; users want strict configuration to prevent the AI from accidentally modifying files outside the project root.
    *   *Reaction:* 3 comments; highlights a need for granular "guardrails."
*   **[Issue #2604: Chat becomes unusable after exceeding image limit](https://github.com/charmbracelet/crush/issues/2604)**
    *   *Why it matters:* Usability bug. When image limits (e.g., on Gemini 3.1) are exceeded, the session enters a failure state and becomes unusable.
    *   *Reaction:* New issue; indicates friction with multimodal features.
*   **[Issue #2589: Support hierarchial `AGENTS.md` files](https://github.com/charmbracelet/crush/issues/2589)**
    *   *Why it matters:* Configuration management. Users working across multiple community projects want cascading configuration files so they don't have to duplicate style guides and settings.
    *   *Reaction:* Positive reception; developers want better organization for large codebases.
*   **[Issue #2608: Group skills by source package in `npx skills list`](https://github.com/charmbracelet/crush/issues/2608)**
    *   *Why it matters:* Developer Experience (DX). The current flat list of skills is confusing; users need to know which package (e.g., superpowers) provided a specific skill.
    *   *Reaction:* New request, highlights the growing ecosystem of skills.

## 4. Key PR Progress
*   **[PR #2597: fix(agent): prevent session corruption due to malformed image data (CLOSED)](https://github.com/charmbracelet/crush/pull/2597)**
    *   *Impact:* **Merged.** Critical fix for Issue #1782. Validates base64 strings and replaces invalid data with placeholders to prevent session lockups.
*   **[PR #2605: feat(config): add additional_dirs option for tool access](https://github.com/charmbracelet/crush/pull/2605)**
    *   *Impact:* Addresses Issues #922 and #937. Introduces `additional_dirs` (allow access) and `restrict_to_project` (deny access outside project) config options.
*   **[PR #2609: feat(session): add `session export` command](https://github.com/charmbracelet/crush/pull/2609)**
    *   *Impact:* New feature. Adds `crush session export <id>` to dump sessions as Markdown/JSON, allowing users to archive their work.
*   **[PR #2606: feat: split-pane tree, tab manager, and cross-platform PTY](https://github.com/charmbracelet/crush/pull/2606)**
    *   *Impact:* Major architecture. Introduces foundational packages for terminal multiplexing (split panes, tabs), suggesting a future move toward a full IDE-like TUI.
*   **[PR #2592: chore(tools): reduce tool call descriptions (CLOSED)](https://github.com/charmbracelet/crush/pull/2592)**
    *   *Impact:* **Merged.** Optimization. Reduces tool description token usage by ~98%, saving an estimated 120k tokens per session. Opt-in via `CRUSH_SHORT_TOOL_DESCRIPTIONS=1`.
*   **[PR #2598: feat: hooks (PreToolUse to start)](https://github.com/charmbracelet/crush/pull/2598)**
    *   *Impact:* Extensibility. Initial implementation of a hook system (starting with shell scripts) to trigger actions before tool use.
*   **[PR #2607: feat: generally render output that looks like a diff as a diff](https://github.com/charmbracelet/crush/pull/2607)**
    *   *Impact:* UX Enhancement. Smart rendering for diff outputs (e.g., from GitHub MCP), turning raw text into colored diffs.
*   **[PR #2418: feat(profiling): add comprehensive Go profiling support](https://github.com/charmbracelet/crush/pull/2418)**
    *   *Impact:* Performance. Adds infrastructure for CPU, memory, and block profiling to help optimize the application.
*   **[PR #2384: feat(ui): add skills discovery status to sidebar](https://github.com/charmbracelet/crush/pull/2384)**
    *   *Impact:* Visibility. Adds a "Skills" section to the UI sidebar showing loaded/errored skills.
*   **[PR #2350: refactor: simplify skills parsing and improve discovery visibility](https://github.com/charmbracelet/crush/pull/2350)**
    *   *Impact:* Stability. Makes skill frontmatter parsing more robust (handling UTF-8 BOM, etc.).

## 5. Feature Request Trends
*   **Tool Access Control:** There is a polarized but strong demand for fine-grained control over where the AI can operate. Developers want to explicitly *allow* access to shared libraries (`additional_dirs`) while simultaneously *restricting* access to the rest of the system (`restrict_to_project`).
*   **Session Management:** Users are treating Crush as a persistent knowledge base and want better tools to manage history, specifically the ability to **export** sessions to Markdown/JSON for long-term storage.
*   **Workspace Hierarchy:** As users adopt Crush for larger organizations, requests for **hierarchical configuration** (e.g., global + project `AGENTS.md`) are increasing.

## 6. Developer Pain Points
*   **Fragility of Long Sessions:** Developers are experiencing "hard failures" during long-running tasks (e.g., code reviews). Issues ranging from context limits clearing the screen (#2240) to malformed image data bricking the session (#1782) are causing significant frustration and data loss.
*   **Context Window Inefficiency:** The recent merge of PR #2592 highlights that tool descriptions were consuming massive amounts of context (120k tokens), effectively reducing the AI's capacity to solve actual coding problems.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-13

**Today's Highlights**
The community is actively addressing cross-platform compatibility and security workflows following reports of the agent unexpectedly stashing changes during PR reviews. Significant development efforts are focused on enhancing core tool rendering, fixing terminal encoding issues for CJK users on Windows, and introducing long-requested features like clipboard support for WSL2 and log export capabilities.

---

## Hot Issues
Here are the top discussions and reported problems from the last 24 hours:

1.  **[Unexpected `git stash` during PR Review](https://github.com/google-gemini/gemini-cli/issues/25236)**
    *   **Why it matters:** A critical workflow concern where the agent stashed unrelated changes in the `master` branch without permission while reviewing a GitHub PR.
    *   **Reaction:** Users are alarmed by the lack of transparency or consent in destructive file operations.

2.  **[Recurring Permission Prompts](https://github.com/google-gemini/gemini-cli/issues/24916)**
    *   **Why it matters:** Users report that "allow" permissions are not persisting correctly, leading to repetitive prompts for the same files.
    *   **Reaction:** High friction for users; `status/need-triage`.

3.  **[AST-Aware File Read Investigation](https://github.com/google-gemini/gemini-cli/issues/22745)**
    *   **Why it matters:** An internal epic assessing if Abstract Syntax Tree (AST) integration can improve code reading precision and reduce noise.
    *   **Reaction:** Technical interest in how this might lower token costs and improve accuracy.

4.  **[TypeScript Debug Configuration Failure](https://github.com/google-gemini/gemini-cli/issues/22844)**
    *   **Why it matters:** The "Run Current File" debug configuration fails for TypeScript because it attempts to run `.ts` files directly with Node.js.
    *   **Reaction:** Affects devs using the integrated debug environment; `help wanted`.

5.  **[Subagents & Approval Mode Awareness](https://github.com/google-gemini/gemini-cli/issues/23582)**
    *   **Why it matters:** Subagents currently lack context regarding active modes (like Plan Mode), leading to instruction conflicts.
    *   **Reaction:** Key architectural improvement for agent consistency.

6.  **[SSH Terminal Scrambling](https://github.com/google-gemini/gemini-cli/issues/24202)**
    *   **Why it matters:** Text becomes unreadable when running the CLI via SSH (specifically Windows to gLinux).
    *   **Reaction:** Blocks usage for remote development workflows.

7.  **[Visual UI Bugs](https://github.com/google-gemini/gemini-cli/issues/24915)**
    *   **Why it matters:** Reports of "thick black borders" appearing around the prompt bar, degrading the UX.

8.  **[Memory Routing (Global vs. Project)](https://github.com/google-gemini/gemini-cli/issues/22819)**
    *   **Why it matters:** Proposal to separate user preferences (global) from codebase-specific knowledge (project).
    *   **Reaction:** Essential for the upcoming memory feature to work intuitively.

9.  **[Plan Mode Hook Regression](https://github.com/google-gemini/gemini-cli/issues/25054)**
    *   **Why it matters:** A recent PR (`#22737`) broke the ability to auto-archive plan files via hooks due to variable changes (`plan_path` -> `plan_filename`).
    *   **Reaction:** Priority P1 regression for power users.

10. **[Tool Call Limit (400+ tools)](https://github.com/google-gemini/gemini-cli/issues/24246)**
    *   **Why it matters:** The CLI crashes with a 400 error if the agent has access to too many tools.
    *   **Reaction:** Highlights a scaling limit in the agent's tool management logic.

---

## Key PR Progress
Notable pull requests and code changes proposed or updated:

1.  **[Refactor: Native ToolDisplay Property](https://github.com/google-gemini/gemini-cli/pull/25186)**
    *   **Change:** Migrates core tools to use a native `ToolDisplay` object, replacing the legacy `returnDisplay` adapter.
    *   **Impact:** Improves UI rendering predictability and allows tools to control their own display schema.

2.  **[Fix: CJK Character Support on Windows](https://github.com/google-gemini/gemini-cli/pull/25235)**
    *   **Change:** Updates the PTY output handler to use a UTF-8 decoder.
    *   **Impact:** Fixes "mojibake" (scrambled text) issues for Japanese/CJK users on Windows.

3.  **[Fix: WSL2 Clipboard Image Paste](https://github.com/google-gemini/gemini-cli/pull/25234)**
    *   **Change:** Alters the clipboard detection logic to support WSL2 environments where `XDG_SESSION_TYPE` is unset.
    *   **Impact:** Enables image paste functionality (`Ctrl+V`) for users running under WSL2.

4.  **[Feat: Google Ads Management Commands](https://github.com/google-gemini/gemini-cli/pull/25231)**
    *   **Change:** Adds `/google-ads-analyze`, `/google-ads-create`, and `/google-ads-report` slash commands.
    *   **Impact:** Expands CLI utility into ad campaign management directly from the terminal.

5.  **[Fix: Run Current File for TypeScript](https://github.com/google-gemini/gemini-cli/pull/25220)**
    *   **Change:** Updates the VS Code debug configuration to use `tsx` instead of raw `node`.
    *   **Impact:** Resolves the inability to debug `.ts` files directly.

6.  **[Feat: Log Export Command](https://github.com/google-gemini/gemini-cli/pull/25227)**
    *   **Change:** Introduces `/export-logs` and a `Ctrl+Shift+L` keybinding.
    *   **Impact:** Simplifies debugging by allowing users to dump console logs to JSON.

7.  **[Fix: Extension Install Idempotency](https://github.com/google-gemini/gemini-cli/pull/25230)**
    *   **Change:** Checks extension IDs before throwing name conflict errors during installation.
    *   **Impact:** Prevents errors when reinstalling or updating extensions from the same source.

8.  **[Feat: Idle Auto-Shutdown](https://github.com/google-gemini/gemini-cli/pull/25212)**
    *   **Change:** Adds `idleShutdownMinutes` setting.
    *   **Impact:** Automatically quits the CLI after inactivity to prevent memory bloat (context limit issues).

9.  **[Feat: MCP Channel Chat Injection](https://github.com/google-gemini/gemini-cli/pull/25209)**
    *   **Change:** Implements a pipeline for MCP servers to push messages into the active CLI chat.
    *   **Impact:** Enables real-time, proactive events from MCP servers.

10. **[Fix: Unbounded Redirects in Extensions](https://github.com/google-gemini/gemini-cli/pull/25225)**
    *   **Change:** Fixes a counter bug in `fetchJson` that prevented proper redirect handling.
    *   **Impact:** Improves reliability of extension network requests.

---

## Feature Request Trends
Based on the latest issues and PRs:
*   **Enhanced Memory & Routing:** Strong push towards separating "global" user preferences from "project" specific context (#22819).
*   **AST Integration:** Explorations into using Abstract Syntax Trees for more precise code manipulation and navigation (#22745).
*   **Cross-Platform Clipboard:** Continued efforts to standardize clipboard and image paste functionality across Windows, WSL2, and macOS (#25234).
*   **Operational Safety:** Features aimed at preventing data loss, such as auto-shutdown on idle (#25212) and warnings before destructive git operations (#22672).

## Developer Pain Points
*   **Windows/WSL2 Compatibility:** Users are still facing significant encoding issues (CJK text scrambling) and clipboard failures in non-standard terminals.
*   **Agent Transparency:** Fear of "rogue" agent actions, specifically regarding file system changes (stashing changes) without explicit user consent.
*   **Context/Memory Management:** The CLI becoming unusable after long idle times due to memory/context limits, leading to requests for auto-cleanup features.
*   **Tooling Limits:** Frustration with the 400-tool limit and the inability of the agent to intelligently scope tools.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-13

**Data Source:** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

## 1. Today's Highlights

The community is actively tracking a critical **HTTP/2 race condition** (Issue #2421) causing cascading retry failures and silent quota waste, which consolidates several older, high-traffic issues. Additionally, discussion around **session management and persistence** has intensified, with multiple reports regarding corrupted resume states on Windows and `gpt-5-mini` selection failing to persist across restarts.

## 2. Releases

*No new releases were published in the last 24 hours.*

## 3. Hot Issues

1.  **[HTTP/2 GOAWAY race condition causes cascading retry failures](https://github.com/github/copilot-cli/issues/2421)** ⭐ **Priority: High**
    *   **Why it matters:** This issue consolidates multiple reports of "transient API errors" and "silent premium request waste." A race condition in the `undici` HTTP/2 pool causes request failures when `GOAWAY` frames are received, leading to unnecessary retries and burning through paid quota.
    *   **Reaction:** 16 👍; Community relief at a consolidated root cause analysis.

2.  **[Request failed due to a transient API error. Retrying...](https://github.com/github/copilot-cli/issues/2101)** ⭐ **Trending**
    *   **Why it matters:** Users are experiencing aggressive rate limiting immediately following transient API errors, often resulting in a "try again in 1 minute" loop that halts development workflows.
    *   **Reaction:** 14 👍; High correlation with the HTTP/2 race condition above.

3.  **[Allow users to cancel or remove enqueued messages](https://github.com/github/copilot-cli/issues/1857)**
    *   **Why it matters:** Workflow friction. Once a message is queued (via `Ctrl+Q`), it cannot be cancelled or removed if the user realizes it is incorrect or irrelevant.
    *   **Reaction:** 13 👍; Highly requested feature for control over the agent queue.

4.  **[Mouse right-click paste not working in Copilot CLI](https://github.com/github/copilot-cli/issues/2242)**
    *   **Why it matters:** Basic usability regression. Standard mouse interactions for pasting clipboard content are failing in the terminal input.
    *   **Reaction:** 6 👍; Affects daily user habits significantly.

5.  **[gpt-5-mini is not persistent set for future sessions](https://github.com/github/copilot-cli/issues/1869)**
    *   **Why it matters:** Configuration drift. Users selecting specific models (like `gpt-5-mini`) see their choice revert to `claude-sonnet-4.6` upon restarting the CLI.
    *   **Reaction:** 1 👍; 4 comments; Frustration with configuration retention.

6.  **[Feature Request: Support Shift+Arrow and Ctrl+A text selection](https://github.com/github/copilot-cli/issues/2644)**
    *   **Why it matters:** Input handling. The CLI currently ignores standard GUI text selection shortcuts, making editing prompts cumbersome.
    *   **Reaction:** New issue; Highlights gaps in terminal input parity.

7.  **[Request consumption appears abnormally high](https://github.com/github/copilot-cli/issues/2626)**
    *   **Why it matters:** Cost management. Users report burning through quota at 3x the expected rate, suspected to be linked to the retry issues mentioned above.
    *   **Reaction:** 0 👍; Active investigation into billing accuracy.

8.  **[No way to view, manage, or opt out of stored memories](https://github.com/github/copilot-cli/issues/2278)**
    *   **Why it matters:** Privacy and Repo Hygiene. `store_memory` data accumulates in repos with no mechanism for users to view, delete, or opt-out.
    *   **Reaction:** 0 👍; Critical for enterprise adoption.

9.  **[/resume fails after CLI restart on Windows](https://github.com/github/copilot-cli/issues/2658)**
    *   **Why it matters:** Session continuity. Raw `U+2028` characters in session events are corrupting the session file, preventing the `resume` command from functioning on Windows.
    *   **Reaction:** New bug; High impact on Windows users.

10. **[`cwd` and `branch` no longer persist to local session-store.db](https://github.com/github/copilot-cli/issues/2655)**
    *   **Why it matters:** Context tracking. Since v1.0.13, current working directory and branch data are not being saved, breaking session continuity.
    *   **Reaction:** New bug; Regression from recent versions.

## 4. Key PR Progress

*No Pull Requests were updated in the last 24 hours.*

## 5. Feature Request Trends

*   **Input Handling & Terminal UX:** There is a strong demand for standard terminal behaviors that are currently missing, specifically Shift+Arrow text selection (#2644) and mouse right-click paste support (#2242).
*   **Queue Control:** Users want the ability to manage the agent's task queue actively, specifically the ability to cancel enqueued messages (#1857).
*   **Memory & Context Management:** Developers are asking for better tools to manage the "memory" feature, specifically the ability to view or delete stored memories (#2278).
*   **Model Persistence:** Users expect their model selection (e.g., `gpt-5-mini`) to remain sticky across sessions rather than reverting to defaults (#1869).

## 6. Developer Pain Points

*   **Silent Failures & Quota Drain:** The most significant pain point is the HTTP/2 race condition (#2421), which causes requests to fail silently but still count against rate limits or premium quotas. This effectively wastes developer money.
*   **Session Corruption:** Users are experiencing "brick" scenarios where the CLI cannot resume sessions due to file corruption issues (Windows U+2028 issues #2658) or database schema regressions (#2655).
*   **Configuration Amnesia:** There is recurring frustration regarding the CLI's inability to remember simple preferences, such as the selected AI model (#1869) or the session storage choice (#2635), requiring re-entry on every launch.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-04-13

## 1. Today's Highlights
The community is actively addressing core usability and cross-platform stability issues in the latest snapshots. Significant progress has been made on fixing **MCP server support on Windows** and refining **Shell Mode** integration. Developers are also pushing for quality-of-life improvements, specifically regarding **session management** and **text editing UX** for mixed media.

## 2. Releases
**Latest Releases (last 24h):** None.
*Note: Active development is visible via merged PRs, but no new version tags were published in the last 24 hours.*

## 3. Hot Issues

### Usability & Workflow
1.  **[#1783 Feature Request: Add /delete command to remove sessions](https://github.com/MoonshotAI/kimi-cli/issues/1783)**
    *   **Why it matters:** Users currently have to manually delete folders in `~/.kimi/sessions/` to manage history.
    *   **Reaction:** Active request for a native slash command to clean up old or sensitive sessions.

2.  **[#1847 Enhancement: Treat pasted image and text placeholder as a whole block](https://github.com/MoonshotAI/kimi-cli/issues/1847)**
    *   **Why it matters:** Improves editing consistency. Currently, deleting a mixed text/image block requires deleting character-by-character.
    *   **Reaction:** Users want "block-level" deletion/navigation (similar to other CLIs) to prevent accidental partial deletes.

3.  **[#1846 Enhancement: Support custom instructions for auto context compaction](https://github.com/MoonshotAI/kimi-cli/issues/1846)**
    *   **Why it matters:** Developers want to configure a global "compression instruction" so context isn't summarized blindly when it hits limits.

### Bugs & Stability
4.  **[#1774 @mention file path error](https://github.com/MoonshotAI/kimi-cli/issues/1774)**
    *   **Why it matters:** File referencing using `~` expansion behaves inconsistently between Kimi Web and the CLI.
    *   **Reaction:** Confirmed as a discrepancy; impacts workflows relying on home directory shortcuts.

5.  **[#1761 Bug: Kimi-CLI does not seem to respect task timeout parameters](https://github.com/MoonshotAI/kimi-cli/issues/1761)**
    *   **Why it matters:** Tasks timeout prematurely or ignore configured limits, breaking long-running agent tasks.
    *   **Reaction:** Critical for users running extensive test suites or generation tasks.

6.  **[#1830 Bug: VSCode extension Can't slash skills before type something](https://github.com/MoonshotAI/kimi-cli/issues/1830)**
    *   **Why it matters:** UX regression in VSCode where commands cannot be executed on an empty buffer.
    *   **Reaction:** Affects users who prefer running commands before writing context.

7.  **[#1823 Feature Request: Configurable Approval Request Timeout](https://github.com/MoonshotAI/kimi-cli/issues/1823)**
    *   **Why it matters:** The hardcoded 5-minute approval timeout is too short for tasks requiring user research or context switching.
    *   **Reaction:** Highly requested (👍 2), with users asking for the ability to disable or extend the timeout.

## 4. Key PR Progress

### Merged / Closed (Last 24h)
1.  **[#1851 perf(notifications): O(1) dedupe lookup via in-memory index](https://github.com/MoonshotAI/kimi-cli/pull/1851)** [CLOSED]
    *   **Detail:** Fixes a performance bottleneck where background task notifications caused a full directory scan on every poll.
    *   **Impact:** Reduces I/O overhead significantly for active sessions.

2.  **[#1850 fix(windows): make MCP servers work on Windows](https://github.com/MoonshotAI/kimi-cli/pull/1850)** [CLOSED]
    *   **Detail:** Fixed 5 distinct issues breaking MCP (Model Context Protocol) on Windows, including UTF-8 encoding (GBK default) and TTY sizing.
    *   **Impact:** **Critical fix.** Restores MCP server functionality for Windows developers.

3.  **[#1843 fix(tools): truncate MCP tool output and handle unsupported content types](https://github.com/MoonshotAI/kimi-cli/pull/1843)** [CLOSED]
    *   **Detail:** Adds a 100k character budget for MCP tool results to prevent API 400 errors from massive outputs (e.g., Playwright DOM dumps).
    *   **Impact:** Improves stability when using MCP tools that return large data.

4.  **[#1587 feat(shell): inject shell mode output into context & persist cd](https://github.com/MoonshotAI/kimi-cli/pull/1587)** [CLOSED]
    *   **Detail:** `Ctrl+X` shell output now enters the chat context, and `cd` commands now properly persist the working directory.
    *   **Impact:** Major enhancement to the "Agent-in-the-loop" workflow, allowing the AI to see shell history.

### Open / Active
5.  **[#1848 feat(prompt): edit image and pasted-text placeholders as blocks](https://github.com/MoonshotAI/kimi-cli/pull/1848)** [OPEN]
    *   **Detail:** Implements the logic to handle image/text blocks as single units for deletion and navigation.
    *   **Impact:** Directly addresses Issue #1847.

6.  **[#1845 fix(web): default session work_dir to startup directory](https://github.com/MoonshotAI/kimi-cli/pull/1845)** [OPEN]
    *   **Detail:** Fixes the `@mention` file path error by resolving the startup directory correctly for web-created sessions.
    *   **Impact:** Addresses the root cause of Issue #1774.

7.  **[#1834 feat(soul): add /loop command for scheduled prompt repetition](https://github.com/MoonshotAI/kimi-cli/pull/1834)** [OPEN]
    *   **Detail:** Adds a `/loop <duration> <prompt>` command to run tasks repeatedly.
    *   **Impact:** Parity with Claude Code's scheduled tasks; useful for polling deploy status.

8.  **[#1842 docs: update en/zh docs for new features and tool changes](https://github.com/MoonshotAI/kimi-cli/pull/1842)** [OPEN]
    *   **Detail:** Documentation refresh covering new subagent tools, headers, and grep features.
    *   **Impact:** Helps devs discover new capabilities.

9.  **[#1709 fix(diff): align inline highlight offsets with tab-expanded text](https://github.com/MoonshotAI/kimi-cli/pull/1709)** [OPEN]
    *   **Detail:** Fixes visual alignment bugs in diffs when tabs are involved.
    *   **Impact:** Improves readability of code patches.

## 5. Feature Request Trends
*   **Session Lifecycle Management:** Users want programmatic control over sessions—specifically deletion commands (#1783) and better handling of session directories.
*   **Timeout Flexibility:** There is a clear demand for configurable timeouts for both task execution (#1761) and user approval prompts (#1823).
*   **Rich Media UX:** As image support matures, users are requesting that the CLI treat images and text as atomic "blocks" during editing (#1847) rather than raw character streams.

## 6. Developer Pain Points
*   **Windows Compatibility:** The MCP (Model Context Protocol) experience on Windows was reportedly "fundamentally broken" due to encoding and TTY issues, though a fix is now pending in PR #1850.
*   **Context Management:** Developers are frustrated with "context overflow" (API 400s) when using tools that return large outputs, and the rigid nature of automatic context compression without custom instructions.
*   **Path Resolution:** Inconsistent behavior between `~` (home) expansion in the CLI vs. Web sessions creates friction when referencing files (#1774).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-13

## Today's Highlights

The community is intensely focused on memory management and latency issues today, with a specific "Memory Megathread" rallying developers to provide heap snapshots rather than AI-generated solutions. On the feature front, significant contributions are landing for the TUI and core configuration, including hot-reloading configs and mobile optimizations, while Windows users continue to report critical environment detection bugs.

## Releases

**No new releases** were published in the last 24 hours.

## Hot Issues

*   **[#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** ⭐ 28
    *   **Why it matters:** The core team is centralizing scattered memory leak reports.
    *   **Community Reaction:** The maintainers explicitly requested *manual* heap snapshots and pleaded with users to stop running LLMs to auto-suggest fixes, noting they are "always wrong."
*   **[#22198 Memory Leak: SSE Connections](https://github.com/anomalyco/opencode/issues/22198)**
    *   **Why it matters:** Identified a critical unbounded memory growth issue (~14 MB/sec) on Windows caused by SSE connections stuck in `CLOSE_WAIT`.
*   **[#22100 Why is OpenCode running pip3?](https://github.com/anomalyco/opencode/issues/22100)**
    *   **Why it matters:** A significant security concern for users; OpenCode attempted to execute pip installs in a read-only configuration without user consent.
*   **[#9045 Codex Latency](https://github.com/anomalyco/opencode/issues/9045)**
    *   **Why it matters:** Confirmed that conversation history is sent with every API request, causing massive latency degradation over time.
*   **[#13715 Subagent Permission Hangs](https://github.com/anomalyco/opencode/issues/13715)** ⭐ 6
    *   **Why it matters:** A UX blocker where permission prompts from nested subagents are not rendered in the TUI, causing the session to hang indefinitely.
*   **[#22167 Forbidden Tool Hang](https://github.com/anomalyco/opencode/issues/22167)**
    *   **Why it matters:** Related to the above, if a subagent calls a forbidden tool, the session also hangs forever rather than failing gracefully.
*   **[#13763 MCPs don't persist](https://github.com/anomalyco/opencode/issues/13763)** ⭐ 3
    *   **Why it matters:** Users are frustrated that disabling MCP servers via the TUI does not survive a restart.
*   **[#9922 Windows Paste Issues](https://github.com/anomalyco/opencode/issues/9922)** ⭐ 2
    *   **Why it matters:** Basic usability failure in the TUI where pasting API keys on Windows/Ubuntu fails entirely (Ctrl-V/Right-click do not work).
*   **[#4240 Zed Editor Integration](https://github.com/anomalyco/opencode/issues/4240)** ⭐ 9
    *   **Why it matters:** OpenCode lags behind competitors (Gemini CLI) in supporting native "review changes" functionality in the Zed editor.
*   **[#21354 Local Model Tool Support](https://github.com/anomalyco/opencode/issues/21354)**
    *   **Why it matters:** Compatibility gap where local models (via Ollama) expect a `read_file` tool, but OpenCode exposes a `read` tool, breaking basic functionality.

## Key PR Progress

*   **[#22180 feat(config): hot-reload config on file changes](https://github.com/anomalyco/opencode/pull/22180)**
    *   **Impact:** Highly requested quality-of-life improvement. Editing `opencode.json` will now update the running session immediately without a restart.
*   **[#22079 feat(app): markdown preview/source toggle](https://github.com/anomalyco/opencode/pull/22079)**
    *   **Impact:** Enhances the file viewer by adding a toggle to switch between rendered Markdown and raw source code.
*   **[#18767 feat(app): Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)**
    *   **Impact:** A major push to optimize the App UI for touch devices and mobile screens, preserving desktop functionality.
*   **[#21415 fix(copilot): Cache plugin to unblock UI](https://github.com/anomalyco/opencode/pull/21415)**
    *   **Impact:** Fixes a startup freeze caused by a blocking call to the Copilot provider by moving it to the background.
*   **[#22218 fix: persist clipboard images as temp files](https://github.com/anomalyco/opencode/pull/22218)**
    *   **Impact:** Fixes a bug where pasting images created massive inline base64 URLs. Now saves them as temp files with `file://` URLs, ensuring compatibility with MCP tools like `look_at`.
*   **[#17083 fix: flush stdin on POSIX exit](https://github.com/anomalyco/opencode/pull/17083)**
    *   **Impact:** Prevents "stale bytes" from leaking into the terminal shell after OpenCode exits on Linux/macOS.
*   **[#14832 fix: coerce JSON objects to strings](https://github.com/anomalyco/opencode/pull/14832)**
    *   **Impact:** Prevents smaller models (like qwen3-coder) from crashing when writing JSON files by coercing objects to string format.
*   **[#16750 fix(provider): skip empty-text filtering](https://github.com/anomalyco/opencode/pull/16750)**
    *   **Impact:** Resolves Anthropic API rejections related to "thinking blocks in the later parts of the content."
*   **[#16751 fix(session): reconstruction of tool_use/tool_result mismatch](https://github.com/anomalyco/opencode/pull/16751)**
    *   **Impact:** A deep fix for session corruption issues where tool calls and results become desynchronized.
*   **[#20554 fix(tui): Don't overwrite command line agent](https://github.com/anomalyco/opencode/pull/20554)**
    *   **Impact:** Fixes CLI argument parsing precedence so that `--agent` is respected over other flags like `-s`.

## Feature Request Trends

*   **MCP Configuration Management:** There is a loud consensus around needing granular control over MCP (Model Context Protocol) servers. Users want to disable all MCPs for specific sessions (#13564), ensure project-level isolation from global MCPs (#17605), and ensure disabled states actually persist (#13763).
*   **Web/Desktop Parity:** Users are requesting "Fork" buttons on user messages in the Web UI (#22205) and asking for multi-user authentication for enterprise deployments (#20067).
*   **Localization & Docs:** Users are reporting that the language selection dropdown on the documentation site is broken (#22219), preventing switches from Japanese to English.

## Developer Pain Points

*   **Windows Environment Fragility:** Windows development remains painful due to inconsistent Bash detection (#22054), broken clipboard paste functionality in the TUI (#9922), and high-severity memory leaks (#22198).
*   **Tool Execution Security & Transparency:** Developers are alarmed by OpenCode running package managers (pip3) without explicit commands (#22100) and are frustrated by unclear error messages when local providers (Ollama/LM Studio) fail to connect (#22190).
*   **Session Reliability:** "Hung sessions" are a recurring theme, specifically when permissions are required by nested subagents (#13715, #22167) or when file system watchers fail (#22187).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-13

## 1. Today's Highlights
Today's Qwen Code update focuses heavily on **stability and agent loop control**. The release of **v0.14.3-nightly** brings crucial fixes for CJK input handling and ACP session management, while the community is actively pushing PRs to detect and prevent "infinite loops" in agent tasks—a major pain point in recent versions. Concurrently, the project is seeing significant enhancements to LSP diagnostics and session management features.

## 2. Releases
**v0.14.3-nightly.20260412** has been released.
*   **CLI Input Optimization:** Resolves issues with CJK (Chinese/Japanese/Korean) word segmentation and Ctrl+arrow navigation (PR #2942).
*   **ACP Session Fix:** Enforces fresh ACP sessions on new-session actions to prevent state pollution (PR #2874).
*   **Note:** The changelog text was truncated in the feed ("replace te..."), implying potential dependency updates or further text processing changes.

## 3. Hot Issues
Here are 10 noteworthy issues updated in the last 24 hours:

1.  **[#3019 Subagent Skill Triggering Failures](https://github.com/QwenLM/qwen-code/issues/3019)**
    *   **Why it matters:** Users report that subagents fail to trigger defined skills or execute them incorrectly, breaking complex workflows.
    *   **Reaction:** Open since April 8, still under triage.

2.  **[#3174 Frequent Freezing & Unresponsiveness](https://github.com/QwenLM/qwen-code/issues/3174)**
    *   **Why it matters:** Reports of the UI and Terminal freezing intermittently, impacting usability significantly.
    *   **Reaction:** Logged on v0.14.3.

3.  **[#3173 ACP Headless Mode Data Loss](https://github.com/QwenLM/qwen-code/issues/3173)**
    *   **Why it matters:** Critical bug where `read_file` in headless mode returns metadata but misses the actual file content.
    *   **Reaction:** affects macOS users utilizing ACP.

4.  **[#3172 Intermittent Crashes in Wrap](https://github.com/QwenLM/qwen-code/issues/3172)**
    *   **Why it matters:** Compatibility issue where Qwen Code crashes randomly within the Wrap terminal environment.
    *   **Reaction:** Reproducible on latest versions.

5.  **[#3166 Custom Gemini baseUrl Ignored](https://github.com/QwenLM/qwen-code/issues/3166)**
    *   **Why it matters:** Configuration bug preventing users from using API proxies for Gemini models.
    *   **Reaction:** Affects flexibility for enterprise users.

6.  **[#3164 JS Heap Out of Memory](https://github.com/QwenLM/qwen-code/issues/3164)**
    *   **Why it matters:** CLI crashes during conversation resumption due to memory allocation limits.
    *   **Reaction:** Occurs immediately after update.

7.  **[#3161 Silent Exits in SSH Environments](https://github.com/QwenLM/qwen-code/issues/3161)**
    *   **Why it matters:** The program terminates silently when a shell command confirmation dialog appears in SSH.
    *   **Reaction:** Critical for remote development workflows.

8.  **[#3159 Infinite Tool Calling Loops](https://github.com/QwenLM/qwen-code/issues/3159)**
    *   **Why it matters:** Subagents enter infinite loops calling the same tool repeatedly (e.g., in code review tasks).
    *   **Reaction:** Wastes quotas and halts progress.

9.  **[#3154 Unable to Install "Superpower" Skill](https://github.com/QwenLM/qwen-code/issues/3154)**
    *   **Why it matters:** Core functionality failure preventing the installation of specific skills.
    *   **Reaction:** "Very impactful" (用户评价).

10. **[#3144 Terminal Scroll Jumping](https://github.com/QwenLM/qwen-code/issues/3144)**
    *   **Why it matters:** The terminal view bounces rapidly during agent execution, making it impossible to follow output.
    *   **Reaction:** High annoyance factor for CLI users.

## 4. Key PR Progress
1.  **[#3178 Detect Tool Validation Retry Loops](https://github.com/QwenLM/qwen-code/pull/3178)**
    *   Adds logic to detect and stop infinite retry loops when tool calls fail schema validation repeatedly.
2.  **[#3176/3175 Enhanced Loop Detection](https://github.com/QwenLM/qwen-code/pull/3176)**
    *   Introduces "Repetitive Thoughts" and "Action Stagnation" checks to catch subtle looping behaviors that evade current detection.
3.  **[#3177 Skip FZF Index in Large Projects](https://github.com/QwenLM/qwen-code/pull/3177)**
    *   Optimization to prevent typing lag (@"completion" hangs) in projects with 100k+ files by skipping expensive indexing.
4.  **[#3179 Fix CJK IME Input Loss](https://github.com/QwenLM/qwen-code/pull/3179)**
    *   Fixes a bug where keystrokes are dropped/dropped when using IME input in terminals supporting the Kitty keyboard protocol (e.g., Ghostty).
5.  **[#3162 Fix Silent PTY Crashes in SSH](https://github.com/QwenLM/qwen-code/pull/3162)**
    *   Captures PTY errors properly to prevent silent exits during SSH shell command confirmations (fixes #3161).
6.  **[#3080 Persistent Retry Mode for CI/CD](https://github.com/QwenLM/qwen-code/pull/3080)**
    *   Adds a feature to automatically retry on HTTP 429/529 errors, crucial for unattended/overnight tasks.
7.  **[#3079 /batch Skill for Parallel Ops](https://github.com/QwenLM/qwen-code/pull/3079)**
    *   Introduces a `/batch` command to perform parallel file operations using worker agents based on glob patterns.
8.  **[#3170 Official LSP SDK & didSave](https://github.com/QwenLM/qwen-code/pull/3170)**
    *   Integrates the official `vscode-languageserver-protocol` SDK and implements `didSave` for real-time diagnostics updates.
9.  **[#3093 Session Management (Rename/Delete/Auto-title)](https://github.com/QwenLM/qwen-code/pull/3093)**
    *   Adds commands to rename, delete, and auto-generate titles for sessions across CLI, VSCode, and WebUI.
10. **[#3103 Shift+Enter for Newline](https://github.com/QwenLM/qwen-code/pull/3103)**
    *   Fixes standard CLI behavior where Shift+Enter should insert a newline instead of submitting the message.

## 5. Feature Request Trends
*   **Better Loop Control:** High demand for more robust mechanisms to prevent agents from getting stuck in repetitive tasks (Issues #3159, #3167).
*   **Session Management:** Users want granular control over conversation history, including naming, saving, and resuming specific sessions (PRs #3093, #3105).
*   **CI/CD & Automation:** There is a push for features supporting unattended usage, such as persistent retry modes (PR #3080) and non-interactive exit commands (Issue #3169).

## 6. Developer Pain Points
*   **Input & Terminal Stability:** significant frustration with **CJK input handling**, **typing lag** in large projects, and **scroll jumping** during output.
*   **Crashes & Silent Failures:** Users are experiencing **random crashes** (Wrap, SSH environments) and **memory heap errors**, often without helpful error messages.
*   **Agent Reliability:** Agents frequently enter **infinite loops** or fail to trigger **skills** correctly, leading to wasted API quotas and incomplete tasks.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*