# AI CLI Tools Community Digest 2026-03-28

> Generated: 2026-03-28 00:11 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Analysis: Cross-Tool Community Digest
**Date:** 2026-03-28
**Analyst:** Senior Technical Analyst, AI Developer Tools

## 1. Ecosystem Overview
The AI CLI ecosystem is currently undergoing a **stabilization phase** following aggressive feature expansion in late 2025. Development across major players—Claude Code, OpenAI Codex, Gemini CLI, and GitHub Copilot—is heavily focused on **operational maturity** rather than novel capabilities. Key themes include resolving regressions in "Plan/Agent" modes, hardening sandbox security (especially for Windows), and optimizing token efficiency in IDE integrations. While tools like **Kimi Code** and **OpenCode** are pushing UI boundaries with incremental streaming and mobile optimization, the industry-wide priority is clearly shifting toward reliability, security, and seamless cross-platform workflows.

## 2. Activity Comparison

| Tool | Release Activity | Issue Volume | PR/Dev Velocity | Focus Status |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **v2.1.86** (Session Tracking, VCS) | **High** (Critical Regressions) | **High** (Plugin Ecosystem) | 🔴 **Stabilizing** (Critical bugs) |
| **OpenAI Codex** | **v0.118.0-alpha.x** (Rapid fire) | **High** (Token/Session bugs) | **High** (Sandbox/Agent fixes) | 🟡 **Iterating Fast** (Alpha churn) |
| **Gemini CLI** | **v0.36.0-prev.5** (UI/Agent polish) | **Medium** (UI lockups) | **High** (Infra/Sandbox) | 🟢 **Architecting** (DAG/Tracker) |
| **GitHub Copilot** | **v1.0.13-1** (Rewind/Timeline) | **Medium** (Policy/Input bugs) | **Low** (No PRs listed) | 🟢 **Polishing** (UX focus) |
| **Kimi Code** | **v1.27.0** (Streaming/UI) | **Medium** (Perf/ freezes) | **Medium** (Auth/Shell) | 🟢 **Feature Active** |
| **OpenCode** | **None** (Active Devs) | **Medium** (Ctrl+C/Security) | **High** (Signing/Refactor) | 🟢 **Rebuilding** (Win/Sec) |
| **Qwen Code** | **v0.14.0-prev.1** (Stability) | **High** (Token/Permission) | **Medium** (Diff refactor) | 🟡 **Fixing** (v0.13 fallout) |

## 3. Shared Feature Directions

*   **Advanced "Plan" & "Agent" Modes**
    *   **Shared by:** **Claude Code**, **Gemini CLI**, **Kimi Code**, **Qwen Code**.
    *   **Need:** Users are demanding robust "Plan" modes that act as true read-only sandboxes.
    *   **Trend:** A critical regression is visible across tools where "Plan Mode" is bypassing restrictions and executing write operations (e.g., Claude #39713, Gemini #23858). The community wants persistent, DAG-based task trackers (Gemini #23724) rather than transient markdown lists.

*   **Windows Sandbox & Pathing Reliability**
    *   **Shared by:** **OpenAI Codex**, **Gemini CLI**, **OpenCode**, **Kimi Code**.
    *   **Need:** Consistent behavior on Windows is the #1 cross-platform pain point.
    *   **Trend:** Specific friction points include `apply_patch` failures in nested directories (Codex), `Ctrl+C` signal handling conflicts (OpenCode), and mandatory integrity control implementation (Gemini).

*   **Token Efficiency & IDE Integration**
    *   **Shared by:** **Claude Code**, **OpenAI Codex**, **Qwen Code**.
    *   **Need:** Reducing "context drift" and token bloat during IDE operations.
    *   **Trend:** Developers are reporting massive token waste caused by "System Reminder" injections (Claude #4464) and inefficient IDE diff acceptance loops that re-inject full file content (Qwen #2709).

*   **Session & History Management**
    *   **Shared by:** **GitHub Copilot**, **Kimi Code**, **OpenAI Codex**.
    *   **Need:** Robust history, rewind, and session persistence.
    *   **Trend:** GitHub Copilot introduced a visual timeline picker (`/rewind`), while Kimi and Codex are struggling to resume named sessions reliably across version upgrades.

## 4. Differentiation Analysis

| Tool | Technical Focus | Target User | Unique Differentiator |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **Plugin Ecosystem** | Power Users / Extenders | The most extensible CLI. New **Plugin API** (v2.1.86) allows deep customization (e.g., `tmp-cleanup`, `edit-verifier`). |
| **OpenAI Codex** | **Rapid Alpha Iteration** | Early Adopters | Moving fastest with daily alpha releases (`v0.118`). Focuses on **"Cowork"** (collaborative) features and strict agent isolation. |
| **Gemini CLI** | **Structured Agents** | Enterprise Architects | Moving toward **AST-aware codebase mapping** and **DAG-based Task Trackers**. Focuses on "Memory" routing (Global vs. Project). |
| **GitHub Copilot** | **IDE Integration** | Enterprise Devs | Deep VS Code integration. The **Rewind/Timeline** feature is the most polished "Time Travel" implementation. |
| **Kimi Code** | **UI/UX Fluidity** | Frontend / Web Devs | **Incremental Markdown Streaming** creates a snappy feel. Strongest **Web UI** focus among CLI-first tools. |
| **OpenCode** | **Local-First Privacy** | Security-Conscious | Focuses on **Local Models** (Ollama) and strict sandboxing. Only tool adding **Azure Trusted Signing** for Windows trust. |
| **Qwen Code** | **Cross-Platform Workflow** | Hybrid Teams | Strong focus on **ACP (Agent Control Protocol)** and messaging integrations (**Channels** platform). |

## 5. Community Momentum & Maturity

*   **Most Active/Vocal:** **Claude Code** and **OpenAI Codex**.
    *   **Claude Code** is facing a **trust crisis** due to data loss on update (#38055) and Plan Mode failures, driving massive community engagement.
    *   **OpenAI Codex** has the highest issue velocity regarding "Burning Tokens" (#14593), indicating high usage intensity but frustration with cost control.
*   **Most Stable/Mature:** **GitHub Copilot**.
    *   Despite UI complaints ("alt-screen"), the release cadence is slower and more deliberate. The `/rewind` feature suggests a focus on "Refining existing workflows" rather than chasing new features.
*   **Rapidly Rising:** **Kimi Code**.
    *   The move to incremental streaming (v1.27.0) addresses the #1 complaint about AI CLI latency, positioning them as a strong contender for UX-sensitive developers.

## 6. Trend Signals

1.  **The "Plan Mode" Reliability Crisis:**
    *   There is a systemic industry issue with "Read-Only" modes silently executing writes. This is the top-reported bug for both Claude and Gemini. **Signal:** "Plan Mode" is currently a "Trust Me" feature, not a technical constraint. Users are demanding sandbox enforcement (Kernel-level or API-level).
2.  **Input Handling is the New "Hello World":**
    *   Critical bugs in basic terminal interaction—**Ctrl+C** handling (OpenCode), **Alt-Gr** keyboard layouts (Copilot), and **Mouse/Scroll** capture (Codex/Copilot)—are dominating the "Hot Issues." **Signal:** The industry is struggling to build TUIs that compete with native terminal emulators.
3.  **Shift to "Persistent Memory":**
    *   Moving away from "session-only" chat to persistent project knowledge (Gemini's Memory routing, Kimi's `AGENTS.md` enforcement). **Signal:** Users want the AI to act as a long-term project maintainer, not just a command executor.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Date:** March 28, 2026
**Data Source:** anthropics/skills Repository

---

### 1. Top Skills Ranking
*Based on engagement signals (submissions, activity recency, and discussion关联 issues).*

*   **[#514: document-typography](https://github.com/anthropics/skills/pull/514)**
    *   **Function:** Enforces typographic quality in AI-generated docs (fixing orphan/widow lines, numbering alignment).
    *   **Status:** Open (Active discussion).
    *   **Highlight:** Addresses a universal pain point in AI document generation where visual polish often lacks.

*   **[#83: skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**
    *   **Function:** Meta-tools for auditing Skills across structure, documentation, and security dimensions.
    *   **Status:** Open.
    *   **Highlight:** High community value as "Skills about Skills," essential for maintaining ecosystem trust as submissions grow.

*   **[#509: CONTRIBUTING.md (Docs)](https://github.com/anthropics/skills/pull/509)**
    *   **Function:** Adds official contribution guidelines to improve repo health metrics (currently 25%).
    *   **Status:** Open.
    *   **Highlight:** Addresses the critical bottleneck of onboarding new developers effectively.

*   **[#210: frontend-design (Improvement)](https://github.com/anthropics/skills/pull/210)**
    *   **Function:** Refines the frontend-design skill for better actionability and coherence.
    *   **Status:** Open.
    *   **Highlight:** Focuses on "token efficiency" and removing educational fluff to optimize Claude's performance.

*   **[#288: Foundation & Standards Series](https://github.com/anthropics/skills/pull/288)**
    *   **Function:** Adds 8 skills including `tutorial-builder`, `quiz-generator`, and `a11y-auditor`.
    *   **Status:** Open.
    *   **Highlight:** A bulk submission targeting educational workflows and compliance standards.

*   **[#147: codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)**
    *   **Function:** Systematic cleanup of codebases (orphaned code, doc gaps, bloat).
    *   **Status:** Open.
    *   **Highlight:** Targets technical debt, a high-value use case for enterprise adoption.

---

### 2. Community Demand Trends
*Derived from top Issues and feature requests.*

*   **Infrastructure & Reliability (Critical)**
    *   Users are reporting frequent API instability (500 errors when uploading/deleting skills) and sync issues. See [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403), [#389](https://github.com/anthropics/skills/issues/389).
*   **Governance & Security**
    *   There is strong demand for "Agent Governance" patterns [#412](https://github.com/anthropics/skills/issues/412) and addressing namespace confusion regarding official vs. community skills [#492](https://github.com/anthropics/skills/issues/492).
*   **Workflow Integration**
    *   Users want seamless org-wide sharing [#228](https://github.com/anthropics/skills/issues/228) and standardization via MCP (Model Context Protocol) bridges [#16](https://github.com/anthropics/skills/issues/16).
*   **Enterprise Usability**
    *   The `skill-reator` needs to support enterprise SSO (removing hard requirements for API keys) [#532](https://github.com/anthropics/skills/issues/532) and shift from "tutorial" tone to "operational" tone [#202](https://github.com/anthropics/skills/issues/202).

---

### 3. High-Potential Pending Skills
*Active PRs that are likely to impact the ecosystem soon.*

*   **[#646: windows-screenshot-paste](https://github.com/anthropics/skills/pull/646)**
    *   Adds AutoHotkey integration to enable `Ctrl+V` screenshot pasting on Windows Terminal. Solves a specific UX friction point for Windows developers.
*   **[#629: session-memory](https://github.com/anthropics/skills/pull/629)**
    *   Preserves technical facts across context compaction/restarts with zero dependencies. Critical for long-running coding sessions.
*   **[#486: ODT (OpenDocument Text)](https://github.com/anthropics/skills/pull/486)**
    *   Enables creation and parsing of `.odt` files (LibreOffice format), expanding compatibility beyond MS Office/PDF.
*   **[#384: management-consulting](https://github.com/anthropics/skills/pull/384)**
    *   Adds structured problem-solving and strategic framework skills for business use cases.

---

### 4. Skills Ecosystem Insight
**Summary:** The community is aggressively moving beyond simple "code generation" tools toward **integrated workflow orchestration**—specifically demanding robust **meta-tools** (for quality/security), **infrastructure reliability** (API stability), and **persistent context** (memory/session management) to support complex, long-duration development lifecycles.

---

# Claude Code Community Digest — 2026-03-28

## 1. Today's Highlights

Today's digest focuses on critical stability concerns. A significant **regression in Plan Mode (v2.1.83/2.1.84)** is causing the model to bypass read-only restrictions and execute write operations, alarming users relying on sandboxing. Simultaneously, a **Session Usage bug** is causing Max plan tokens to deplete abnormally fast. On the tooling front, new community plugins are addressing `/tmp` disk leaks and terminal cleanup, while the engineering team prepares an upgrade to Node.js 20 LTS.

## 2. Releases

**v2.1.86**
*   **Session Tracking:** Added `X-Claude-Code-Session-Id` header to API requests, allowing proxies to aggregate traffic by session without payload inspection.
*   **VCS Support:** Added `.jj` (Jujutsu) and `.sl` (Sapling) to VCS exclusion lists, preventing Grep and autocomplete from scanning metadata directories.
*   **Bugfix:** Fixed the `--resume` functionality.
*   [View Release](https://github.com/anthropics/claude-code/releases)

## 3. Hot Issues

1.  **[BUG] Plan Mode restrictions bypassed (Regression)**
    *   **Issue:** [#39713](https://github.com/anthropics/claude-code/issues/39713) | [Duplicate #38255](https://github.com/anthropics/claude-code/issues/38255)
    *   **Impact:** Critical. Users report that `plan` mode is silently allowing file modifications and command execution despite system warnings.
    *   **Reaction:** High urgency; trust in the "sandbox" capability is eroding.

2.  **[BUG] Cowork: Minor version update deletes history**
    *   **Issue:** [#38055](https://github.com/anthropics/claude-code/issues/38055)
    *   **Impact:** High. Users performing standard updates are experiencing total data loss (chat history and scheduled tasks).
    *   **Reaction:** Severe frustration; data integrity is a core expectation.

3.  **[BUG] Session limits exhausted abnormally fast**
    *   **Issue:** [#38335](https://github.com/anthropics/claude-code/issues/38335)
    *   **Impact:** High. Max plan users report quotas draining in hours despite moderate usage.
    *   **Reaction:** Suspicion of a cache invalidation bug or token accounting error.

4.  **[FEATURE] Configure shell for Bash tool**
    *   **Issue:** [#7490](https://github.com/anthropics/claude-code/issues/7490)
    *   **Impact:** Workflow. Users want to use `zsh` or `fish` instead of the default shell.
    *   **Reaction:** Persistent request; highly upvoted (👍 89).

5.  **[BUG] Permission prompt triggers on `cd` instead of actual command**
    *   **Issue:** [#28240](https://github.com/anthropics/claude-code/issues/28240)
    *   **Impact:** UX/Security. In compound commands (e.g., `cd path && run script`), permissions are requested for `cd`, masking the potentially dangerous script execution.
    *   **Reaction:** Confusion and security concerns; highly upvoted (👍 98).

6.  **[BUG] Cowork Folder Picker blocks symlinks and non-home paths**
    *   **Issue:** [#24964](https://github.com/anthropics/claude-code/issues/24964)
    *   **Impact:** Usability. Developers using junctions or symlinks (common on Windows) cannot select valid workspaces.
    *   **Reaction:** Major friction for Windows users; highly upvoted (👍 150).

7.  **[BUG] Google Drive connector connected but tools not exposed**
    *   **Issue:** [#30457](https://github.com/anthropics/claude-code/issues/30457)
    *   **Impact:** Integration. A core integration appears non-functional in Cowork mode.
    *   **Reaction:** Confusion regarding connector status vs. usability.

8.  **[BUG] "System reminder" content injection consuming tokens**
    *   **Issue:** [#4464](https://github.com/anthropics/claude-code/issues/4464)
    *   **Impact:** Cost. Automatic injection of file contents on modification is drastically increasing token usage.
    *   **Reaction:** Ongoing pain point regarding cost control.

9.  **[BUG] /teleport command missing on Claude Max**
    *   **Issue:** [#16846](https://github.com/anthropics/claude-code/issues/16846)
    *   **Impact:** Feature Parity. Advertised v2.1.0 features are not reaching specific user tiers.
    *   **Reaction:** Users feel gated from core features.

10. **[BUG] CLI hangs silently on WSL2**
    *   **Issue:** [#39049](https://github.com/anthropics/claude-code/issues/39049)
    *   **Impact:** Stability. Total hang occurs between Mar 23-25, requiring process kills.
    *   **Reaction:** Recent regression affecting WSL developers specifically.

## 4. Key PR Progress

1.  **feat(plugin): add tmp-cleanup plugin**
    *   **PR:** [#39977](https://github.com/anthropics/claude-code/pull/39977)
    *   **Detail:** Introduces a plugin to prune oversized `.output` files (task leaks) that are consuming 10s of GBs in `/tmp`.
    *   **Why it matters:** Addresses a critical disk space issue reported by the community.

2.  **feat(plugins): add edit-verifier plugin**
    *   **PR:** [#32755](https://github.com/anthropics/claude-code/pull/32755)
    *   **Detail:** Adds a post-edit verification hook to ensure the `Edit` tool actually modified text before proceeding.
    *   **Why it matters:** Reduces "silent failure" loops where Claude proceeds assuming an edit succeeded when it didn't.

3.  **Upgrade Node.js version from 20 to 24**
    *   **PR:** [#39872](https://github.com/anthropics/claude-code/pull/39872)
    *   **Detail:** Preparing the runtime for the upcoming Node.js LTS changes.
    *   **Why it matters:** Essential maintenance for future-proofing the CLI.

4.  **feat: add preserve-session plugin**
    *   **PR:** [#39148](https://github.com/anthropics/claude-code/pull/39148)
    *   **Detail:** Allows session history to survive project renames or moves using UUIDs.
    *   **Why it matters:** Solves a UX annoyance where renaming a folder breaks chat continuity.

5.  **feat: add terminal-restore plugin**
    *   **PR:** [#39132](https://github.com/anthropics/claude-code/pull/39132)
    *   **Detail:** Works around a bug where Claude Code exits without cleaning up the kitty keyboard protocol, breaking terminal control keys.
    *   **Why it matters:** Fixes a "terminal trashed" scenario for Kitty/Ghostty users.

6.  **Update skill-development SKILL.md**
    *   **PR:** [#37648](https://github.com/anthropics/claude-code/pull/37648)
    *   **Detail:** Documents the complete frontmatter arguments for Skills (11 fields total).
    *   **Why it matters:** Improves developer experience for building custom extensions.

## 5. Feature Request Trends

*   **Shell Configuration:** Users are demanding the ability to set the Bash tool's shell (e.g., to Zsh/Fish) and inherit the user's existing environment profile ([#7490](https://github.com/anthropics/claude-code/issues/7490)).
*   **Permissions Granularity:** There is a strong desire for compound command parsing (e.g., `&&`, `|`) so permissions are requested for the *dangerous* command, not the `cd` preceding it ([#16561](https://github.com/anthropics/claude-code/issues/16561)).
*   **IDE/Agent Integration:** Users want split-pane support for modern terminals like **Ghostty** ([#35351](https://github.com/anthropics/claude-code/issues/35351)) and better hooks for `UserInputRequired` events ([#10168](https://github.com/anthropics/claude-code/issues/10168)).

## 6. Developer Pain Points

*   **Context Drift & Token Drain:** Users are experiencing rapid token exhaustion, linked to both aggressive "system reminder" file injection ([#4464](https://github.com/anthropics/claude-code/issues/4464)) and potential cache invalidation bugs on resume ([#27048](https://github.com/anthropics/claude-code/issues/27048)).
*   **Windows Path Handling:** Symlinks and Junctions are consistently blocked in Cowork and Folder Picker dialogs, limiting functionality on Windows 11 ([#24964](https://github.com/anthropics/claude-code/issues/24964)).
*   **Trust in Safety Features:** The breakdown of Plan Mode ([#39713](https://github.com/anthropics/claude-code/issues/39713)) and data loss on updates ([#38055](https://github.com/anthropics/claude-code/issues/38055)) are shaking user confidence in the tool's safety net.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-03-28

## Today's Highlights
The `v0.118.0-alpha` series continues to roll out rapidly (alpha.2 and alpha.3 released within 24h), focusing primarily on file system sandbox improvements and TUI stability. The developer community is currently vocal about a regression in `v0.117.0` affecting session management and the reliability of Windows sandbox permissions, while maintainers are actively pushing fixes for TUI rendering and agent context inheritance.

## Latest Releases
- **rust-v0.118.0-alpha.2 & v0.118.0-alpha.3**
  These rapid-fire alpha releases appear to stabilize the `0.118.x` branch. While specific release notes were not provided in the data, the accompanying Pull Requests suggest a heavy focus on non-workspace filesystem writes and resolving "apply_patch" failures on Windows.
  - [View Release: v0.118.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.118.0-alpha.3)
  - [View Release: v0.118.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.118.0-alpha.2)

## Hot Issues
1.  **[#14593] Burning tokens very fast** ([Open](https://github.com/openai/codex/issues/14593))
    *   **Why it matters:** The most active thread (307 comments) indicates a regression or persistent issue where the IDE extension consumes quotas at an unsustainable rate, frustrating business users.
2.  **[#13041] WebSocket upgrade succeeds then server closes with 1008 Policy** ([Open](https://github.com/openai/codex/issues/13041))
    *   **Why it matters:** High-visibility networking issue (109 👍) affecting Linux users. Codex falls back to HTTPS, likely impacting real-time features and performance.
3.  **[#14675] Windows: apply_patch fails for nested files** ([Open](https://github.com/openai/codex/issues/14675))
    *   **Why it matters:** Critical Windows-specific bug where `apply_patch` fails specifically within nested `src/**` directories, blocking core editing workflows for Windows devs.
4.  **[#16049] "No saved session found" after upgrade to 0.117.0** ([Open](https://github.com/openai/codex/issues/16049))
    *   **Why it matters:** A high-impact regression breaking the CLI's ability to resume named sessions immediately after the latest update.
5.  **[#13476] Excessive approval prompts for Playwright MCP** ([Open](https://github.com/openai/codex/issues/13476))
    *   **Why it matters:** A regression in MCP (Model Context Protocol) integration causing workflow disruption due to annoying permission loops.
6.  **[#3962] Play a sound when Codex finishes a task** ([Open](https://github.com/openai/codex/issues/3962))
    *   **Why it matters:** Persistent top request (124 👍) for auditory feedback, highlighting the desire for better asynchronous workflows.
7.  **[#15330] High CPU consuming when codex diff renders** ([Open](https://github.com/openai/codex/issues/15330))
    *   **Why it matters:** Performance degradation specifically when viewing diffs in the app, making the review process sluggish.
8.  **[#14459] Codex.app no longer shows custom prompts** ([Open](https://github.com/openai/codex/issues/14459))
    *   **Why it matters:** macOS users are losing access to their local custom slash prompts, breaking personalization workflows.
9.  **[#16028] Upgrade to 0.117.0 somewhat breaks MCP** ([Open](https://github.com/openai/codex/issues/16028))
    *   **Why it matters:** Confirms broader MCP instability in the latest CLI version, affecting tool integration.
10. **[#7727] Add "Delete" option to Task context menu** ([Open](https://github.com/openai/codex/issues/7727))
    *   **Why it matters:** Basic UX friction (71 👍); users cannot clean up their task lists in VS Code, leading to clutter.

## Key PR Progress
1.  **[#15929] Allow non-workspace filesystem writes** ([Open](https://github.com/openai/codex/pull/15929))
    *   *Impact:* relaxes sandbox restrictions to allow writes to temp directories (`/tmp`, `:tmpdir`) even if outside the workspace root, fixing issues where tools need scratch space.
2.  **[#16050] Fix `resume-by-name` lookup regression** ([Open](https://github.com/openai/codex/pull/16050))
    *   *Impact:* Direct fix for Issue #16049, ensuring users can resume named sessions in the TUI/App-server path.
3.  **[#15981] Fix symlinked writable roots in sandbox** ([Open](https://github.com/openai/codex/pull/15981))
    *   *Impact:* Addresses issues with symlinks (related to Issue #15448), ensuring permission normalization preserves logical paths.
4.  **[#16055] Force forked agents to inherit parent model settings** ([Open](https://github.com/openai/codex/pull/16055))
    *   *Impact:* Prevents sub-agents from drifting to different models/reasoning settings, preserving context usage economics.
5.  **[#16026] Fix TUI footer refresh on collaboration mode** ([Open](https://github.com/openai/codex/pull/16026))
    *   *Impact:* Ensures the UI status line correctly updates when switching collaboration modes or models.
6.  **[#16056] Speed up Windows PowerShell safety tests** ([Open](https://github.com/openai/codex/pull/16056))
    *   *Impact:* Optimization to improve CI speed and runtime performance of shell command safety checks on Windows.
7.  **[#16014] Fix agent picker closed-state regression** ([Open](https://github.com/openai/codex/pull/16014))
    *   *Impact:* Fixes the TUI incorrectly graying out active agents in the picker.
8.  **[#15917] Support stdin piping for `codex exec`** ([Open](https://github.com/openai/codex/pull/15917))
    *   *Impact:* Adds parity with competitors (e.g., Claude Code), allowing `echo "input" | codex exec "prompt"`.
9.  **[#13678] Add watchdog runtime and prompts** ([Open](https://github.com/openai/codex/pull/13678))
    *   *Impact:* Infrastructure work adding lifecycle management for "watchdog" agent threads.
10. **[#15922] Remove the legacy TUI split** ([Closed](https://github.com/openai/codex/pull/15922))
    *   *Impact:* Code health cleanup deleting the old TUI directory, reducing maintenance burden.

## Feature Request Trends
Based on the issues tracked this week:
*   **Session Management:** Users want robust CLI session handling (pause, resume, tmux-like workflows), as seen in #6500 and #16049.
*   **Customization Control:** There is a strong desire for granular control over UI themes (#1618) and custom local prompts (#14459).
*   **Productivity Enhancements:** Async workflow aids like "completion sounds" (#3962) and "background service monitoring" (#2062) are highly upvoted.
*   **Workspace Scoping:** Users want Codex chats and tasks to be scoped to specific VS Code workspaces rather than global (#3550).

## Developer Pain Points
*   **Windows Sandbox Instability:** The `apply_patch` tool is consistently failing for nested files on Windows (#14675, #13574), exacerbated by ACL churn.
*   **Regressions in v0.117.0:** The latest CLI update introduced session restoration bugs (#16049) and MCP connectivity issues (#16028), leading to a rocky user experience.
*   **Resource Usage:** High CPU usage during diff rendering (#15330) and general operation (#15503) remains a performance concern.
*   **WebSocket Reliability:** The 1008 Policy Closure (#13041) suggests underlying infrastructure issues affecting real-time connectivity.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-03-28

## 1. Today's Highlights
The **Gemini CLI** repository is highly active with a strong focus on stabilizing the "Agent" workflow and resolving critical UI bugs. Development efforts are concentrated on migrating from markdown-based planning to a persistent, DAG-based **Task Tracker system**, alongside significant infrastructure improvements to the **Sandbox** environment for Windows. The community remains vocal about specific interaction regressions, particularly regarding cancellation behaviors and file editing modes.

## 2. Releases
**v0.36.0-preview.5** has been released.
This follows the `v0.36.0-preview.4` release. While specific patch notes for this incremental update are not detailed in the log, the version cadence suggests ongoing stabilization of the `v0.36` branch.
**[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.36.0-preview.4...v0.36.0-preview.5)**

## 3. Hot Issues

*   **[#21096: Request gets stuck... after canceling](https://github.com/google-gemini/gemini-cli/issues/21096)** (👍 35)
    *   **Why it matters:** This is the highest-impact user-facing bug currently reported. Users on Termux/Android are experiencing a UI lock where the "stuck" message persists indefinitely after trying to cancel a request.
    *   **Reaction:** Extremely high community engagement (82 comments) indicates this is a major friction point for daily usage.

*   **[#20498: Paid subscription but no Gemini 3 access](https://github.com/google-gemini/gemini-cli/issues/20498)**
    *   **Why it matters:** This confusion stems from model availability discrepancies for paying users. There is ambiguity regarding access tiers for the latest `gemini-3` or `gemini-3.1` models via the CLI versus the web interface.
    *   **Reaction:** Users are frustrated by the lack of clarity on what their "AI Pro" subscription actually unlocks in the CLI environment.

*   **[#22855: Support passing prompt to `/plan`](https://github.com/google-gemini/gemini-cli/issues/22855)**
    *   **Why it matters:** A workflow improvement request. Currently, `/plan` opens a separate prompt box. Users want to trigger plans directly via `/plan <prompt>` to streamline their workflow.
    *   **Reaction:** High demand for more efficient CLI interactions.

*   **[#23858: Files are being edited while in plan mode](https://github.com/google-gemini/gemini-cli/issues/23858)**
    *   **Why it matters:** A critical "Agent behavior" issue. The model is violating "Plan Mode" constraints by modifying files when it should theoretically be read-only or in a planning state.
    *   **Reaction:** Highlights trust issues with the agent's adherence to safety/mode constraints.

*   **[#17437: CTRL + S broken before confirming changes](https://github.com/google-gemini/gemini-cli/issues/17437)**
    *   **Why it matters:** Regressions in core review workflows are disruptive. Users previously could use `CTRL+S` to inspect diffs before confirming; this appears broken on Windows.
    *   **Reaction:** Users relying on strict pre-commit review flows are blocked.

*   **[#22745: Assess impact of AST-aware file reads](https://github.com/google-gemini/gemini-cli/issues/22745)**
    *   **Why it matters:** An architectural investigation. The team is looking into using Abstract Syntax Trees (AST) to improve codebase mapping, potentially reducing noise and token usage by understanding method bounds better than text search.
    *   **Reaction:** Positive interest from technical users regarding codebase intelligence.

*   **[#23582: Subagents Awareness of Active Approval Modes](https://github.com/google-gemini/gemini-cli/issues/23582)**
    *   **Why it matters:** A design flaw where subagents attempt actions that violate the user's current "Plan Mode" or "Auto-Edit" settings, forcing the Policy Engine to block them repeatedly.
    *   **Reaction:** Identifies a need for deeper integration of user intent into agent prompts.

*   **[#23724: Persistent Project-Level Tracker Storage](https://github.com/google-gemini/gemini-cli/issues/23724)**
    *   **Why it matters:** A significant structural shift. The "Task Tracker" state will move to a project-level directory (`.gemini/tracker/`), allowing task state to persist across sessions and be committed to Git.
    *   **Reaction:** This is a key enabler for collaborative, long-running agent workflows.

*   **[#22819: Implement memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819)**
    *   **Why it matters:** Enhances the "Memory" feature by distinguishing between user-specific preferences (global) and codebase-specific conventions (project).
    *   **Reaction:** Addresses the need for context-aware memory in the CLI.

*   **[#23175: Deduplicate startup extension warnings](https://github.com/google-gemini/gemini-cli/issues/23175)**
    *   **Why it matters:** A "paper cut" UX issue where warnings are printed twice during startup, cluttering the terminal.
    *   **Reaction:** Developers value clean, non-repetitive terminal output.

## 4. Key PR Progress

*   **[#21960: Fix clear stale retry/loading state after cancellation](https://github.com/google-gemini/gemini-cli/pull/21960)**
    *   Addresses the **#21096** UI bug. It fixes a race condition where a late retry event would reset the UI to the "stuck" loading state even after the user canceled the request.

*   **[#24065: Resolve layout contention and flashing loop in StatusRow](https://github.com/google-gemini/gemini-cli/pull/24065)**
    *   Fixes a severe visual regression caused by a feedback loop between `ResizeObserver` and dynamic width calculations, leading to infinite re-renders.

*   **[#24057: Implement Windows Mandatory Integrity Control for GeminiSandbox](https://github.com/google-gemini/gemini-cli/pull/24057)**
    *   Major security enhancement for Windows. It implements restricted tokens and job object limits to isolate the sandbox process.

*   **[#24070: Add target parameter to save_memory](https://github.com/google-gemini/gemini-cli/pull/24070)**
    *   Enables saving memories to project-specific `GEMINI.md` files rather than only the global user config. This ties into the "Global vs. Project" memory routing initiative.

*   **[#20974: Implement compact tool output](https://github.com/google-gemini/gemini-cli/pull/20974)**
    *   A long-awaited feature to reduce noise. It introduces a high-signal rendering mode for tool outputs, likely condensing large file diffs or search results.

*   **[#22139: Prevent SessionEnd from firing twice in non-interactive mode](https://github.com/google-gemini/gemini-cli/pull/22139)**
    *   Fixes **#18019**. Resolves a logic error where cleanup hooks registered in a shared initialization block would execute twice on exit.

*   **[#24067: Prevent infinite retry loop and UI hang on 429 errors](https://github.com/google-gemini/gemini-cli/pull/24067)**
    *   Critical fix for a regression in v0.35.2. The CLI previously entered an infinite loop or hung when encountering rate-limit (429) errors.

*   **[#21632: Route debugLogger output to stderr](https://github.com/google-gemini/gemini-cli/pull/21632)**
    *   Essential fix for scriptability. Ensures debug logs don't pollute `stdout`, which breaks JSON parsing in non-interactive mode.

*   **[#19901: Enable symlink tests on Windows using junctions](https://github.com/google-gemini/gemini-cli/pull/19901)**
    *   Infrastructure improvement. Switches to using junctions on Windows to allow symlink tests to run without admin privileges.

*   **[#23961: Implemented the structured terminal lifecycle for ACP](https://github.com/google-gemini/gemini-cli/pull/23961)**
    *   Improves the `shell` tool by always including `exitCode` and `signal` in the result data, providing better context for the Agent Control Protocol.

## 5. Feature Request Trends

*   **Refined `/plan` and `/spec` Commands:**
    There is a strong push to make the planning and specification commands more "native" and fluid. Users want `/plan` to accept arguments directly (Issue #22855) and want the resulting task lists to be managed via a persistent Tracker system rather than markdown checklists (Issue #23320).
*   **Context-Aware Memory:**
    Users are requesting that the "Memory" feature intelligently route data. Preferences (like "tabs vs spaces") should be global, while project-specific knowledge should live in the project directory (Issue #22819, Issue #24070).
*   **AST Intelligence:**
    Multiple issues indicate a desire for the CLI to move beyond simple text grep/ripgrep. Users want the agent to understand code structure via AST (Issue #22745) to provide more accurate context and less noise.

## 6. Developer Pain Points

*   **Windows Compatibility:** The influx of issues regarding `Ctrl+S` (Issue #17437), Sandbox security (PR #24057), and Symlinks (PR #19901) highlights that the Windows experience is currently lagging behind macOS/Linux and requires focused stabilization.
*   **Agent Mode Violations:** Users are frustrated with the agent violating "Plan Mode" or ignoring safety constraints (Issue #23858, Issue #23582), leading to unapproved edits or unexpected behavior.
*   **Noise and Verbosity:** Users are actively requesting ways to reduce visual clutter, whether it's "Compact Tool Output" (PR #20974), hiding raw tracker UUIDs (Issue #23803), or stopping duplicate startup warnings (Issue #23175).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-28

## Today's Highlights
Today's release (**v1.0.13-1**) introduces significant usability improvements to conversation management and MCP reliability. The `/rewind` feature now supports full timeline navigation, allowing developers to roll back to any point in their chat history. While these updates address performance, the community is currently vocal about UI regressions in the TUI, specifically regarding scrolling behavior and the "alt-screen" mode.

## Latest Releases
**v1.0.13-1 & v1.0.13-0**
*   **Conversation History:** The `/rewind` command and double-Esc shortcut now launch a visual timeline picker, enabling users to restore any previous state in the conversation history rather than just the last snapshot.
*   **MCP Enhancements:** Registry lookups are more robust with added automatic retries and timeouts. Furthermore, v1.0.13-0 introduces the ability for MCP servers to request LLM inference (sampling) pending user approval.
*   **Performance:** CLI startup times have decreased thanks to V8 compile cache reduction.
*   **Fixes:** Corrected the reasoning effort setting for Bring Your Own Model (BYOM) providers and ensured blocked MCP servers are properly hidden from `/mcp show`.

## Hot Issues
1.  **[#2334](https://github.com/github/copilot-cli/issues/2334) [OPEN] Please bring back no-alt-screen**
    *   *Why it matters:* A highly request (👍 6) backlash against the new "alt-screen" UI. Users report it kills productivity by removing scrollbars and making history navigation difficult.
2.  **[#2236](https://github.com/github/copilot-cli/issues/2236) [OPEN] MCP servers from org registry disappear (v1.0.11)**
    *   *Why it matters:* Users are falsely told their org's MCP servers are "disabled by policy" despite working previously. This is a critical blocker for enterprise environments utilizing custom tooling.
3.  **[#1595](https://github.com/github/copilot-cli/issues/1595) [OPEN] Cannot access any model**
    *   *Why it matters:* Enterprise users with valid Copilot subscriptions are hitting "access denied" errors even for standard models, suggesting a policy check regression.
4.  **[#1999](https://github.com/github/copilot-cli/issues/1999) [OPEN] Cannot enter @ on German keyboard (Alt-Gr + q)**
    *   *Why it matters:* A fundamental input bug rendering the CLI unusable for international users, specifically those using German keyboard layouts.
5.  **[#2101](https://github.com/github/copilot-cli/issues/2101) [OPEN] Transient API errors and rate limits**
    *   *Why it matters:* Users report aggressive rate limiting and retry loops that halt workflows, often attributed to "silent" background agents.
6.  **[#1944](https://github.com/github/copilot-cli/issues/1944) [CLOSED] Mouse wheel scroll regression (Windows)**
    *   *Why it matters:* Scrolling recently stopped working for conversation history on Windows (captured by input box instead). It is marked closed, but user comments suggest lingering frustration.
7.  **[#172](https://github.com/github/copilot-cli/issues/172) [OPEN] CLI Does Not Respect MCP Timeouts**
    *   *Why it matters:* Developers building long-running MCP servers find the CLI unusable because `mcp-config.json` timeout settings are ignored.
8.  **[#1973](https://github.com/github/copilot-cli/issues/1973) [OPEN] Feature Request: Tool whitelist for Interactive Mode**
    *   *Why it matters:* A popular request (👍 7) to allow "read-only" commands (like `git status`) without manual approval, while still blocking destructive actions.
9.  **[#1128](https://github.com/github/copilot-cli/issues/1128) [OPEN] Feature Request: Add awaitingUserInput hook type**
    *   *Why it matters:* High demand (👍 17) from extension developers for a hook that triggers when the CLI is idle and waiting for input.
10. **[#1976](https://github.com/github/copilot-cli/issues/1976) [OPEN] Cannot use MCP servers nor any model**
    *   *Why it matters:* Correlates with #1595; users are seeing false warnings about 3rd party MCPs being disabled and are simultaneously locked out of models.

## Key PR Progress
*No Pull Requests were updated in the last 24 hours based on current data.*

## Feature Request Trends
*   **UI Customization & "Alt-Screen" Fatigue:** There is a strong trend of users requesting the ability to disable the new "alt-screen" view or revert to the legacy scrolling behavior (#2334, #1799). Developers want native scrollbars and standard terminal text selection.
*   **Granular Permission Control:** Users are asking for a middle-ground between "manual approval" and "allow-all," specifically requesting a "whitelist" for safe read-only commands (#1973).
*   **BYOM and BYOK Expansion:** Requests continue to pour in for easier integration of non-Google/OpenAI models (e.g., Grok, local models) via API keys (#1095) and parity with VS Code regarding available models like Claude (#2045).
*   **Input Localization:** International users are increasingly reporting issues with specific key binds (e.g., `@` on German keyboards, `#`), indicating a need for better input layer handling.

## Developer Pain Points
*   **Terminal Scrolling & Rendering:** A major source of frustration is the TUI's interaction with scroll wheels and terminal multiplexers (Tmux). Users report "infinite refresh loops," flickering, and the inability to scroll history (#373, #1842, #1874).
*   **False Policy Flags:** Enterprise developers are confused and blocked by false positive warnings stating that "Third-party MCP servers are disabled by your organization," even when they are explicitly allowed (#2236, #1976).
*   **Rate Limiting Opacity:** Users are frustrated by vague "Transient API errors" and rate limits that seem to trigger too quickly, often without clear indication of which background agent caused the spike (#2101, #2336).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-03-28

## 1. Today's Highlights
Kimi Code CLI v1.27.0 has been released, focusing on a significantly improved user interface with incremental markdown streaming and better plan visualization. The community is actively addressing performance bottlenecks in large repositories and discussing strict compliance behaviors for project-level configuration files (`AGENTS.md`).

## 2. Releases
**v1.27.0** (Released 2026-03-28)
*   **UI/UX Enhancements**: Implemented incremental markdown streaming for faster visual feedback and refined spinner animations.
*   **Planning Features**: Added `PlanDisplay` wire type and inline rendering support to better visualize agent strategies.
*   **Web Workspace**: Integrated workspace file panels for better file management in the web interface.
*   **Shell & Diff**: Updated diff rendering with inline support and added syntax highlighting.

## 3. Hot Issues

*   **[#1610](https://github.com/MoonshotAI/kimi-cli/issues/1610) [OPEN] @ path completion hits 1000 file limit**
    *   **Why it matters**: Users working in large codebases are hitting hard limits on file discovery, severely restricting the CLI's utility in enterprise environments.
*   **[#1607](https://github.com/MoonshotAI/kimi-cli/issues/1607) [OPEN] v26 `write` tool freezes frequently**
    *   **Why it matters**: A high-severity regression in v1.26.0 where the file writing tool hangs, requiring manual interruptions to proceed.
*   **[#1602](https://github.com/MoonshotAI/kimi-cli/issues/1602) [OPEN] Web access fails (White screen)**
    *   **Why it matters**: Critical usability blocker for the Web UI on macOS (Darwin arm64), rendering the interface unusable.
*   **[#1599](https://github.com/MoonshotAI/kimi-cli/issues/1599) [OPEN] API Error 429**
    *   **Why it matters**: Users reporting frequent rate-limiting errors, potentially indicating instability in the upstream API gateway.
*   **[#1355](https://github.com/MoonshotAI/kimi-cli/issues/1355) [OPEN] ACP Session Initialization Failure**
    *   **Why it matters**: A persistent bug causing "Internal error: list.index(x): x not in list," blocking integration with IDEs like IntelliJ IDEA.
*   **[#1596](https://github.com/MoonshotAI/kimi-cli/issues/1596) [OPEN] Improve command compliance for `AGENTS.md`**
    *   **Why it matters**: Users expect the agent to strictly adhere to project-level constraints (e.g., ignoring user prompts to follow specific rules), but the agent currently bypasses these instructions.
*   **[#1604](https://github.com/MoonshotAI/kimi-cli/issues/1604) [OPEN] Figma MCP Support**
    *   **Why it matters**: Request to support the Figma Model Context Protocol (MCP), which requires pre-registration, expanding the CLI's ecosystem integration.
*   **[#1366](https://github.com/MoonshotAI/kimi-cli/issues/1366) [CLOSED] Add arguments for CLI history session selection**
    *   **Why it matters**: (Closed) Users wanted to list and resume specific historical sessions via CLI arguments rather than just continuing the last one.
*   **[#1614](https://github.com/MoonshotAI/kimi-cli/pull/1614) [OPEN] Shell command security analysis**
    *   **Why it matters**: Addresses safety concerns by adding a layer of analysis to detect dangerous shell patterns before execution.

## 4. Key PR Progress

*   **[#1613](https://github.com/MoonshotAI/kimi-cli/pull/1613) [CLOSED] chore: bump kimi-cli to 1.27.0**
    *   Official release merge including changelog updates and bilingual documentation sync.
*   **[#1598](https://github.com/MoonshotAI/kimi-cli/pull/1598) [CLOSED] feat(ui): incremental markdown streaming**
    *   Refactored the UI rendering engine to flush markdown blocks to the terminal immediately, reducing perceived latency.
*   **[#1612](https://github.com/MoonshotAI/kimi-cli/pull/1612) [CLOSED] feat(diff): enhance diff rendering**
    *   Introduced inline diff viewing and improved syntax highlighting for code changes.
*   **[#1601](https://github.com/MoonshotAI/kimi-cli/pull/1601) [CLOSED] feat: add PlanDisplay wire type**
    *   Added a new protocol message type to handle and render planning steps natively in the UI.
*   **[#1587](https://github.com/MoonshotAI/kimi-cli/pull/1587) [OPEN] feat(shell): inject shell mode output into context**
    *   Enhanced Shell mode (Ctrl+X) to inject command outputs back into the agent's context and made `cd` persistent.
*   **[#1588](https://github.com/MoonshotAI/kimi-cli/pull/1588) [OPEN] fix(shell): use git ls-files for @ file mention**
    *   Addresses file discovery limits in large repos by using `git ls-files` instead of `os.walk`, alphabetically sorting results to ensure all files are reached before hitting limits.
*   **[#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512) [OPEN] feat: Rewrite ACP auth flow (OAuth Device Flow)**
    *   A major rewrite of the authentication system to support terminal-based login and OAuth Device Flow for improved compatibility.
*   **[#1605](https://github.com/MoonshotAI/kimi-cli/pull/1605) [OPEN] fix(skills): restore --skills-dir override behavior**
    *   Reverted a recent change where `--skills-dir` appended paths; it now overrides default paths as it did in v1.25.0.
*   **[#1603](https://github.com/MoonshotAI/kimi-cli/pull/1603) [CLOSED] feat(cli): update exit codes**
    *   Introduced structured exit codes to allow CI/CD scripts to distinguish between transient failures and permanent errors.
*   **[#1573](https://github.com/MoonshotAI/kimi-cli/pull/1573) [CLOSED] feat(web): Add workspace file panel**
    *   Added a file browser panel to the Web UI, allowing users to view and download generated files directly from the workspace.

## 5. Feature Request Trends
*   **Session Management**: Users want granular control over chat history, specifically the ability to list and resume arbitrary past sessions from the CLI (Issue #1366).
*   **Ecosystem Integration**: There is a push for broader MCP support, specifically for design tools like Figma (Issue #1604).
*   **Strict Rule Adherence**: Developers are looking for ways to enforce "hard" constraints via `AGENTS.md`, ensuring the AI respects project-specific guardrails over user prompts (Issue #1596).

## 6. Developer Pain Points
*   **Large Project Performance**: The 1000-file limit in the `@` completer and slow indexing in large repositories are significant friction points (Issue #1610, PR #1588).
*   **Reliability of v1.26**: Reports of the `write` tool freezing and white screens in the web UI suggest instability in the previous release (Issue #1607, #1602).
*   **Python 3.13 Compatibility**: There are cascading import failures related to compiled C extensions (e.g., `charset-normalizer` inside `trafilatura`) breaking on Python 3.13 (PR #1597).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-03-28

## 1. Today's Highlights
The community remains highly active, focusing heavily on Windows usability and security defaults. Major development efforts include adding **bash command sandboxing**, implementing **Azure Trusted Signing** for Windows builds, and refactoring core file system services. The debate over `Ctrl+C` behavior in the terminal continues to be a significant friction point for users on Windows and VS Code terminals.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues

### Top Community Discussions

1.  **[#906 Paste to attach image](https://github.com/anomalyco/opencode/issues/906)** ⭐ 18 👍
    *   **Why it matters:** Users want seamless integration with external design tools (like Excalidraw) without the friction of saving files to disk manually.
    *   **Reaction:** High demand; the "drag-and-drop only" requirement is seen as archaic.

2.  **[#2999 Provide means to disable Ctrl-C](https://github.com/anomalyco/opencode/issues/2999)** ⭐ 18 👍
    *   **Why it matters:** Critical for Windows users where `Ctrl+C` is the universal "Copy" shortcut. Currently, it triggers a crash or exit in OpenCode.
    *   **Reaction:** Described as "nearly impossible to use" on WezTerm and Windows Terminal without a fix.

3.  **[#7957 Ctrl+C should not exit OpenCode](https://github.com/anomalyco/opencode/issues/7957)** ⭐ 20 👍
    *   **Why it matters:** Reinforces the above issue; highlights that `Ctrl+C` conflicts with muscle memory for text editing.
    *   **Reaction:** Users are frustrated by accidental termination of the application.

4.  **[#5076 Safer default permissions](https://github.com/anomalyco/opencode/issues/5076)** ⭐ 49 👍
    *   **Why it matters:** A major security concern. The current "allow-by-default" behavior poses risks for unattended agent operations.
    *   **Reaction:** Strong consensus that the tool acts too much like a "high-privilege remote control agent" by default.

5.  **[#11157 Compaction fails with GitHub Copilot Enterprise](https://github.com/anomalyco/opencode/issues/11157)** ⭐ 6 👍
    *   **Why it matters:** Breaks conversation summarization for Enterprise users using Claude models via GitHub Copilot.
    *   **Reaction:** Specific technical incompatibility causing `400 Bad Request` errors.

6.  **[#19348 Desktop/WebUI: New sessions not shown in sidebar](https://github.com/anomalyco/opencode/issues/19348)**
    *   **Why it matters:** Affects usability when connecting Desktop/Web clients to non-localhost servers.
    *   **Reaction:** Confusion regarding session management in non-standard network configurations.

7.  **[#15212 Cannot select text in chat messages (VSCode terminal)](https://github.com/anomalyco/opencode/issues/15212)** ⭐ 3 👍
    *   **Why it matters:** Mouse capture is stuck in the prompt field, preventing users from selecting previous AI responses.
    *   **Reaction:** Significant UX degradation for developers using the VS Code integrated terminal.

8.  **[#16126 external_directory: "deny" not enforced (Git Bash)](https://github.com/anomalyco/opencode/issues/16126)** ⭐ 4 👍
    *   **Why it matters:** Security bypass. The permission system fails to block file access when running in Git Bash on Windows.
    *   **Reaction:** Raises concerns about the robustness of the permission sandboxing layer.

9.  ** [#16281 OpenAI ChatGPT Pro/Plus browser login fails](https://github.com/anomalyco/opencode/issues/16281)** ⭐ 3 👍
    *   **Why it matters:** Authentication failures for Pro/Plus users on macOS (`Token exchange failed: 403`).
    *   **Reaction:** Blocks access to high-tier models.

10. **[#17574 Frequent sse read timed out](https://github.com/anomalyco/opencode/issues/17574)** ⭐ 2 👍
    *   **Why it matters:** Stability issue causing frequent interruptions during long-running tasks.
    *   **Reaction:** Affects workflow reliability.

## 4. Key PR Progress

### Merges & Active Development

1.  **[#19472 feat(ci): Add bash commands sandboxing](https://github.com/anomalyco/opencode/pull/19472)**
    *   **Impact:** A massive security enhancement aiming to restrict what commands can be executed by the agent.

2.  **[#15201 feat(ci): sign Windows CLI and desktop builds](https://github.com/anomalyco/opencode/pull/15201)**
    *   **Impact:** Introduces Azure Trusted Signing. This will likely resolve "SmartScreen" warnings on Windows and improve distribution trust.

3.  **[#19458 refactor(file): use AppFileSystem](https://github.com/anomalyco/opencode/pull/19458)**
    *   **Impact:** Refactors the file service layer to use a dedicated `AppFileSystem` interface, improving modularity and testability.

4.  **[#19470 feat(opencode): wire permission.ask plugin hook](https://github.com/anomalyco/opencode/pull/19470)**
    *   **Impact:** Re-introduces the `permission.ask` hook for plugins, allowing extension developers to intercept permission checks.

5.  **[#19468 fix(tui): patch StdinParser (Mouse sequences)](https://github.com/anomalyco/opencode/pull/19468)**
    *   **Impact:** Fixes garbled text in Web/VSCode terminals caused by fragmented mouse escape sequences.

6.  **[#18767 feat(app): Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)**
    *   **Impact:** Improves the usability of the OpenCode App on mobile/touch devices.

7.  **[#19465 feat: add opencode.local.jsonc](https://github.com/anomalyco/opencode/pull/19465)**
    *   **Impact:** Adds support for `opencode.local.jsonc` to override settings without modifying the main config file (better for git/users).

8.  **[#18306 feat(opencode): add Open WebUI provider](https://github.com/anomalyco/opencode/pull/18306)**
    *   **Impact:** Native support for connecting to Open WebUI instances.

9.  **[#19350 fix(copilot): use GitHub App token flow](https://github.com/anomalyco/opencode/pull/19350)**
    *   **Impact:** Fixes `model_not_supported` errors for preview models (like `claude-opus-4.6-fast`) in the Copilot integration.

10. **[#19386 fix(tui): sync terminal background via OSC 11](https://github.com/anomalyco/opencode/pull/19386)**
    *   **Impact:** Fixes the "pixel gutter" visual artifacts on terminal edges by syncing the background color dynamically.

## 5. Feature Request Trends

*   **Input Handling & UX:** There is a persistent trend requesting better input handling, specifically **Clipboard support for images** (#906, #1429) and fixing text selection/mouse capture in terminals (#15212, #13854).
*   **Modular Configuration:** Users are asking for better configuration management, specifically support for splitting configs into directories (`config.d/`) or local overrides (#9062, #19465) to manage complex setups.
*   **Authentication Providers:** Requests for alternative or fixed authentication methods for enterprise environments (Entra ID, Open WebUI) are trending.

## 6. Developer Pain Points

*   **The "Ctrl+C" Dilemma:** The single biggest pain point remains keyboard shortcut handling. Developers are accidentally quitting the application when trying to copy text, particularly on Windows (#2999, #7957).
*   **Windows/Git Bash Pathing:** The permission system (`external_directory: "deny"`) is unreliable on Windows, specifically when using Git Bash or MSYS paths, leading to security bypasses (#16126, #11042).
*   **Broken TUI Interactions:** Usability in the Terminal UI (TUI) is degraded by mouse capture issues (preventing text selection) and rendering glitches (garbled text, broken table rows) (#15212, #13854, #19386).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-03-28

## 1. Today's Highlights
The Qwen Code community is actively addressing significant user experience friction points following the recent `v0.13.1` release. Development focus is heavily split between resolving token inefficiency in IDE diff workflows and fixing persistent permission/authorization bugs in VS Code and CLI environments.

## 2. Releases
**v0.14.0-preview.1**
A new preview release has been published, focusing on stability improvements and extension handling.
*   **Changelog**: [Compare v0.13.1...v0.14.0-preview.1](https://github.com/QwenLM/qwen-code/compare/v0.13.1...v0.14.0-preview.1)

**v0.13.1**
This patch release addresses installation and CLI context display issues.
*   **Extension Fix**: Added support for non-GitHub git URLs for extension installation ([#2539](https://github.com/QwenLM/qwen-code/pull/2539)).
*   **CLI Fix**: `/memory show --project` and `--global` now correctly display all configured context files ([#23](https://github.com/QwenLM/qwen-code/pull/23)).

## 3. Hot Issues
**1. [#2709: Bug: IDE diff acceptance inflates edit tool_call args with full file content](https://github.com/QwenLM/qwen-code/issues/2709)**
*   **Impact**: High. Users reporting massive token waste when accepting diffs in IDE integration mode.
*   **Reaction**: Identified as a critical optimization blocker; a fix is already underway in PR #2728.

**2. [#2722: Bug: "Edit automatically" allows all commands runs](https://github.com/QwenLM/qwen-code/issues/2722)**
*   **Impact**: Security/UX. Users expect "Edit automatically" to only edit files, but it currently allows shell execution without approval.
*   **Reaction**: High priority UX fix requested for VS Code extension.

**3. [#2723 & #2700: Persistent permission prompts](https://github.com/QwenLM/qwen-code/issues/2723) / ([#2700](https://github.com/QwenLM/qwen-code/issues/2700))**
*   **Impact**: Workflow Disruption. Selecting "Always Allow" for Python or MCP tools fails to persist, causing constant pop-ups.
*   **Reaction**: Multiple reports suggest a regression in v0.13.0; Windows path case sensitivity (PR #2670) and ACP mode (PR #2690) are being investigated.

**4. [#2724: Qwen Code agent in IntelliJ IDEA 2026.1 not working with local ollama](https://github.com/QwenLM/qwen-code/issues/2724)**
*   **Impact**: Compatibility. Users cannot use local models in the latest IntelliJ version (works in 2025.3).
*   **Reaction**: Appears to be a version-specific regression in the JetBrains plugin.

**5. [#176: Tool calling does not work with local model](https://github.com/QwenLM/qwen-code/issues/176)**
*   **Impact**: Functional. Local model tool calls are not executed silently.
*   **Reaction**: Long-standing issue (opened Aug 2025) seeing renewed activity; high community interest (7 👍).

**6. [#2678: Cannot stop AI thinking & missing messages](https://github.com/QwenLM/qwen-code/issues/2678)**
*   **Impact**: Usability. UI becomes unresponsive; stop button fails and user messages disappear in long sessions.
*   **Reaction**: Critical VS Code extension stability issue.

**7. [#2688: Chinese/English filename spacing issues](https://github.com/QwenLM/qwen-code/issues/2688)**
*   **Impact**: Localization. Agent inserts spaces in mixed-language filenames (e.g., `2026年` -> `2026 年`).
*   **Reaction**: Recurring "bad case" pattern affecting non-English workflows.

**8. [#2704: Linux converts CRLF to LF automatically](https://github.com/QwenLM/qwen-code/issues/2704)**
*   **Impact**: VCS. Editing files on Linux causes entire file to change in Git due to line ending conversion.
*   **Reaction**: Fix available in PR #2707.

**9. [#2720: API integration with GLM-5.1 failing](https://github.com/QwenLM/qwen-code/issues/2720)**
*   **Impact**: Integration. Fails to read files when using GLM-5.1 endpoint.
*   **Reaction**: Points to compatibility issues with non-Qwen/OpenAI providers.

**10. [#2693: Hooks documentation missing](https://github.com/QwenLM/qwen-code/issues/2693)**
*   **Impact**: DX. Users cannot configure hooks due to lack of docs.
*   **Reaction**: PR #2623 is addressing documentation gaps.

## 4. Key PR Progress
**1. [#2728: Refactor: Centralize IDE diff interaction in CoreToolScheduler](https://github.com/QwenLM/qwen-code/pull/2728)**
*   **Status**: Open.
*   **Detail**: A major refactor to fix token waste (#2709) by moving diff handling logic from individual tools to the scheduler.

**2. [#2707: Fix: Preserve original line endings (CRLF/LF) when editing files](https://github.com/QwenLM/qwen-code/pull/2707)**
*   **Status**: Open.
*   **Detail**: Ensures file edits respect the original line ending format, fixing Git diff noise for cross-platform teams.

**3. [#2690: Fix(ACP): Align permission flow across clients](https://github.com/QwenLM/qwen-code/pull/2690)**
*   **Status**: Closed (Merged).
*   **Detail**: Part of v0.13.1, this attempts to standardize permission handling between CLI and VS Code to fix "Always Allow" bugs.

**4. [#2670: Fix permission persistence failure due to Windows path case-sensitivity](https://github.com/QwenLM/qwen-code/pull/2670)**
*   **Status**: Open.
*   **Detail**: Targets the root cause of permission settings failing to save on Windows by fixing path comparison logic.

**5. [#2694: Fix: @ file search stops working after selecting a slash command](https://github.com/QwenLM/qwen-code/pull/2694)**
*   **Status**: Closed (Merged).
*   **Detail**: Fixes interaction bug where typing `@` after a slash command (e.g., `/qc:create-issue`) would not trigger file search.

**6. [#2719: Feat(Extension): Add npm registry support](https://github.com/QwenLM/qwen-code/pull/2719)**
*   **Status**: Open.
*   **Detail**: Allows installing extensions directly from npm (including private registries), expanding distribution options.

**7. [#2525: Feat(CLI, WebUI): Add follow-up suggestions](https://github.com/QwenLM/qwen-code/pull/2525)**
*   **Status**: Open.
*   **Detail**: Implements Claude Code-like "Next Step Suggestions" to prompt users with relevant actions (e.g., "commit this") after a task completes.

**8. [#2675: Fix: Use config working directory for OpenAI logger path](https://github.com/QwenLM/qwen-code/pull/2675)**
*   **Status**: Closed (Merged).
*   **Detail**: Fixes initialization errors in ACP mode (e.g., in Zed editor) by correctly resolving the log directory path.

**9. [#2698: Feat: Simplify subagent model configuration](https://github.com/QwenLM/qwen-code/pull/2698)**
*   **Status**: Open.
*   **Detail**: Refactors configuration to allow specifying subagent models via a simple string selector rather than a complex nested object.

**10. [#2628: Feat(Channels): Add extensible Channels platform](https://github.com/QwenLM/qwen-code/pull/2628)**
*   **Status**: Open.
*   **Detail**: A significant architectural addition enabling Qwen Code to interact via messaging platforms (Telegram, WeChat, DingTalk).

## 5. Feature Request Trends
*   **IDE Integration & Automation**: Users want finer-grained control over "Auto" modes, specifically separating "Auto Edit" from "Auto Run Commands" (Issues #2722, #2723).
*   **Visual Context**: There is a strong demand for image handling capabilities in the CLI, specifically pasting from the clipboard (Issue #2605) and screen/window capture (Issue #2725).
*   **Messaging Integration**: Requests for integration with platforms like Telegram/DingTalk are being formalized via the new Channels platform (PR #2628).

## 6. Developer Pain Points
*   **Tool Reliability**: A significant number of bugs relate to the `edit` tool—either failing to execute on local models (#176), failing on multiple successive calls (#2702), or creating massive token overhead (#2709).
*   **Authorization Fatigue**: The "Always Allow" permission mechanism is currently broken for many users (CLI and VS Code), forcing repetitive approvals for the same actions (#2723, #2700).
*   **Cross-Platform Pathing**: File handling remains brittle for non-standard paths, particularly with spaces in Chinese filenames (#2688) or numbers (#2703), and Windows line ending conversions (#2704).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*