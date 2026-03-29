# AI CLI Tools Community Digest 2026-03-29

> Generated: 2026-03-29 00:11 UTC | Tools covered: 7

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

## Cross-Tool Community Digest: AI CLI Landscape Analysis (2026-03-29)

### 1. Ecosystem Overview
The AI CLI ecosystem is currently undergoing a critical **stability and integration phase**. While early excitement centered on autonomous capabilities, today’s landscape is dominated by friction points regarding **sandbox security**, **cross-platform filesystem compatibility** (especially on Windows), and **multi-agent orchestration reliability**. Leading tools are shifting focus from raw feature addition to architectural hardening—specifically improving permission models, token efficiency, and plugin interoperability (MCP/Standards). There is a noticeable trend toward "Spec-Driven Development" (persistent planning) and the need for granular observability into agent token usage.

### 2. Activity Comparison

| Tool | Issue Activity | PR Velocity | Release Status | Stability Signal |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **High** (Critical bugs/Security) | **High** (Security hardening) | No release (24h) | 🔴 **Critical** (Filesystem/Data loss bugs) |
| **OpenAI Codex** | **Medium** (Platform gaps) | **High** (TUI Refactoring) | No release (24h) | 🟡 **Moderate** (Regressions in Linux/macOS) |
| **Gemini CLI** | **Medium** (Auth/Quota) | **Medium** (Hotfixes/SDD) | **v0.36.0-p6** / **v0.35.3** | 🟢 **Stabilizing** (Rapid hotfix response) |
| **GitHub Copilot** | **High** (TUI Friction) | **Low** (No merges) | No release (24h) | 🔴 **Degraded** (UI/Input lag/Scroll bugs) |
| **Kimi Code** | **Low** (Niche compat) | **Medium** (OAuth/Shell) | No release (24h) | 🟢 **Stable** (Specific crash fixes proposed) |
| **OpenCode** | **High** (Plugin/Feature req) | **High** (Architecture refactor) | No release (24h) | 🟡 **Mixed** (Innovating but noisy UX) |
| **Qwen Code** | **Medium** (Parity/Windows) | **High** (Scheduling/Channels) | No release (24h) | 🟡 **Mixed** (Windows context bugs) |

### 3. Shared Feature Directions
*   **Advanced Multi-Agent Architectures:**
    *   **Claude Code & OpenAI Codex:** Deep focus on subagent lifecycles, parent/child handoffs, and persistent "watchdog" runtimes.
    *   **Qwen Code:** Explicit request for feature parity with Claude Code's subagent system.
*   **Persistent Planning & "Spec-Driven Development":**
    *   **Gemini CLI:** Moving toward DAG-based Task Trackers to replace static markdown plans.
    *   **Qwen Code:** Enhancing `/review` and automation workflows.
    *   **GitHub Copilot:** User feedback indicates a desire for smoother Plan-to-Execution transitions.
*   **Plugin & Integration Standards (MCP/OAuth):**
    *   **Claude Code & Kimi Code:** Heavy focus on **MCP (Model Context Protocol)** stability, specifically OAuth scopes and server management.
    *   **OpenCode:** Debate on integration standards for external providers (Atlassian, Thaura).
*   **Windows Environment Parity:**
    *   **Claude Code, Qwen Code, Kimi Code:** All report significant friction with Windows filesystems (secondary drives, WSL, sandboxing) and terminal input handling.

### 4. Differentiation Analysis
*   **Claude Code (The "Enterprise Powerhouse"):** Focuses on deep IDE integration and complex multi-agent workflows. Currently plagued by growing pains in "Cowork" filesystem permissions and security boundaries.
*   **OpenAI Codex (The "TUI Purist"):** Doubling down on the Terminal User Interface (TUI) experience. Prioritizing architectural modularity (`codex-tools`) and watchdog agents over desktop app parity.
*   **Gemini CLI (The "Spec-Driven" Planner):** Distinct pivot toward "SDD" (Spec-Driven Development) and structured planning. Moving fastest to decouple authentication issues via rapid hotfixing.
*   **OpenCode (The "Integration Hub"):** Positioned as the most modular, supporting the widest array of providers (Ollama, Anyscale, GLM, etc.). Unique focus on mobile touch optimization and Nix support.
*   **Kimi Code & Qwen Code:** Strong focus on ecosystem-specific integration (e.g., Kimi with One API, Qwen with messaging platforms like Telegram/DingTalk).

### 5. Community Momentum & Maturity
*   **Highest Maturity:** **OpenAI Codex** and **Claude Code**. Communities are discussing complex architectural trade-offs (e.g., pinned SHAs vs mutable tags, hook bypasses).
*   **Fastest Iteration:** **Gemini CLI**. The release of two versions in 24 hours to squash regressions signals a highly responsive engineering team.
*   **Highest User Volatility:** **Claude Code** and **GitHub Copilot**. Both face significant backlash regarding stability (Claude's data loss bugs; Copilot's UI lag).
*   **Niche but Growing:** **Kimi Code** and **Qwen Code** show strong regional growth and unique feature requests (Channels for Chinese messaging apps), but struggle with core Windows compatibility.

### 6. Trend Signals for Developers
1.  **The "Subagent" Tax:** Subagents are no longer a "nice-to-have" but a baseline expectation. However, they introduce complexity in rate limiting, cost transparency, and security boundaries (hooks).
2.  **Windows is the Canary:** If a tool supports Linux/macOS but struggles on Windows (secondary drives, sandboxing), it is a leading indicator of cross-platform code maturity issues.
3.  **Sandbox Regressions are Critical:** As tools attempt to lock down security (Codex `bwrap`, Claude Sandboxes), they are inadvertently breaking functionality (network access, file visibility), causing user churn.
4.  **Demand for Cost Observability:** Across almost all tools (Claude, OpenCode, Copilot), users are demanding `/usage` commands and real-time token spend visibility, indicating that "AI Ops" cost management is becoming a daily developer concern.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Date:** March 29, 2026
**Data Source:** anthropics/skills Repository

---

### 1. Top Skills Ranking
*Based on community engagement via Pull Requests (PRs).*

**1. [Add document-typography skill](https://github.com/anthropics/skills/pull/514)**
*   **Functionality:** A quality control skill designed to fix common AI-generated document flaws, such as orphan words (word wrap spills), widow paragraphs (stranded headers), and numbering misalignment.
*   **Highlights:** Addresses a ubiquitous pain point in AI document generation.
*   **Status:** Open

**2. [Skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**
*   **Functionality:** Meta-skills that evaluate other skills across five dimensions (structure, documentation, parameter logic, safety, and testing).
*   **Highlights:** Represents a "governing" layer for the ecosystem, introducing self-regulation and quality standards.
*   **Status:** Open

**3. [Improve frontend-design skill clarity](https://github.com/anthropics/skills/pull/210)**
*   **Functionality:** A major revision of the frontend-design skill to ensure instructions are actionable, coherent, and executable within a single conversation context.
*   **Highlights:** Focuses on prompt engineering optimization—turning verbose documentation into precise instructions.
*   **Status:** Open

**4. [Add ODT skill — OpenDocument Text](https://github.com/anthropics/skills/pull/486)**
*   **Functionality:** Enables creation, manipulation, and parsing of `.odt` files (OpenDocument Format), supporting LibreOffice and open standards.
*   **Highlights:** Bridges the gap between Claude Code and the open-source/LibreOffice ecosystem.
*   **Status:** Open

**5. [Add CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)**
*   **Functionality:** Adds official contribution guidelines to address the repository's 25% GitHub community health score.
*   **Highlights:** A critical infrastructure PR to streamline community submissions and reduce friction.
*   **Status:** Open

**6. [Add SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)**
*   **Functionality:** Integrates SAP’s open-source tabular foundation model for predictive analytics on business data.
*   **Highlights:** Signals strong demand for heavy-duty enterprise data integration within Skills.
*   **Status:** Open

**7. [Add 8 new skills: foundation & standards series](https://github.com/anthropics/skills/pull/288)**
*   **Functionality:** Adds a suite of utility skills including *tutorial-builder*, *quiz-generator*, *a11y-auditor*, and *data-storytelling*.
*   **Highlights:** A bulk submission that expands the skill taxonomy into education and accessibility.
*   **Status:** Open

**8. [Add shodh-memory skill: persistent context](https://github.com/anthropics/skills/pull/154)**
*   **Functionality:** A memory system that maintains context across conversations using a `proactive_context` call.
*   **Highlights:** Tackles the "stateless" limitation of LLM sessions, enabling long-term agent memory.
*   **Status:** Open

---

### 2. Community Demand Trends
*Based on high-activity Issues.*

*   **Evaluation & Tooling:** The community is urgently requesting better tooling to audit Skills. [Issue #202](https://github.com/anthropics/skills/issues/202) notes that the current `skill-creator` is too verbose and educational, demanding a more operational, token-efficient approach.
*   **Reliability & Debugging:** A critical bug ([Issue #556](https://github.com/anthropics/skills/issues/556)) reveals that `run_eval.py` has a 0% trigger rate for skills, highlighting a strong need for robust testing frameworks.
*   **Security & Governance:** Users are concerned about trust boundaries. [Issue #492](https://github.com/anthropics/skills/issues/492) highlights the risk of community skills impersonating official Anthropic skills under the `anthropic/` namespace, calling for stricter governance.
*   **Enterprise Integration:** There is recurring demand for deeper organizational workflows, specifically org-wide skill sharing ([Issue #228](https://github.com/anthropics/skills/issues/228)) and AWS Bedrock compatibility ([Issue #29](https://github.com/anthropics/skills/issues/29)).
*   **Workflow Automation:** Skills that facilitate large-scale refactoring (e.g., `roadmap-pilot`) and infrastructure cleanup are gaining traction.

---

### 3. High-Potential Pending Skills
*Active PRs likely to influence the ecosystem soon.*

*   **[Add masonry-generate-image-and-videos skill](https://github.com/anthropics/skills/pull/335)**
    *   *Potential:* High. Adds multimedia generation capabilities (Imagen 3.0, Veo 3.1) directly into workflows.
*   **[Add x402 BSV auth + micropayment skill](https://github.com/anthropics/skills/pull/374)**
    *   *Potential:* Niche but high impact. Introduces a protocol for discovering and paying for AI services via natural language (BSV micropayments).
*   **[Add roadmap-pilot: incremental codebase cleanup](https://github.com/anthropics/skills/pull/536)**
    *   *Potential:* Very High. Addresses the context-window limit problem by breaking large refactoring jobs into single-session tasks.
*   **[Add AURELION skill suite](https://github.com/anthropics/skills/pull/444)**
    *   *Potential:* High. Introduces a comprehensive cognitive framework (kernel, advisor, agent, memory) for professional knowledge management.

---

### 4. Skills Ecosystem Insight
The community is moving beyond simple utility scripts and is aggressively building **infrastructure layers**—specifically focusing on **governance (meta-analysis), memory persistence (state management), and enterprise interoperability**—to transform Claude Code from a coding assistant into a persistent, autonomous development environment.

---

# Claude Code Community Digest: 2026-03-29

## 1. Today's Highlights
Today’s digest is dominated by critical filesystem and permission bugs affecting cross-platform workflows. The "Cowork" feature is facing significant scrutiny regarding restrictive folder handling on Windows and potential data loss during updates. Additionally, a concerning security vulnerability involving hook bypasses via subagents has resurfaced in discussions, alongside multiple reports of rate-limiting errors breaking multi-agent workflows.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Hot Issues

### 🐛 Critical Bugs & Security
1. **[Security] PreToolUse hooks bypassed by subagents** [#21460](https://github.com/anthropics/claude-code/issues/21460)
   *Why it matters:* A critical security flaw allows restrictions configured in `settings.json` to be bypassed when the main agent spawns a subagent via the `Task` tool. This completely undermines user-configured security boundaries.
   *Reaction:* Resurged activity with 113 upvotes; developers are demanding immediate patching.

2. **[BUG] Sandbox broken: writes hit real FS, reads sandboxed** [#40321](https://github.com/anthropics/claude-code/issues/40321)
   *Why it matters:* A terrifying state where Claude could not see files it was overwriting. One user reported a complete project destruction (2500+ files) because the agent blindly overwrote files it couldn't see.
   *Reaction:* High alarm; data loss issues are always top priority.

3. **[BUG] Cowork update deletes chat history & tasks** [#38055](https://github.com/anthropics/claude-code/issues/38055)
   *Why it matters:* Users performing minor version updates of the Cowork feature are experiencing permanent data loss.
   *Reaction:* 9 comments, high severity due to irreversibility.

### 🛠️ Platform-Specific Pain Points
4. **[BUG] Cowork folder picker rejects non-home dirs (Win/Mac)** [#24964](https://github.com/anthropics/claude-code/issues/24964)
   *Why it matters:* Massive disruption for developers working on secondary drives or network shares. The IDE extension blocks valid folders.
   *Reaction:* Top discussed issue (113 comments), 155 upvotes.

5. **[BUG] Cowork blocks secondary drive folders on Windows** [#29583](https://github.com/anthropics/claude-code/issues/29583)
   *Why it matters:* Specific to Windows users storing code on D:/ or external drives.
   *Reaction:* 82 comments; high correlation with issue #24964.

6. **[BUG] `--dangerously-skip-permissions` ignores Edit prompts** [#36192](https://github.com/anthropics/claude-code/issues/36192)
   *Why it matters:* CI/CD pipelines relying on this flag are breaking because Claude still prompts for Edit approvals.
   *Reaction:* Breaking automation workflows; confirmed across versions > v2.1.77.

7. **[BUG] Auto mode "temporarily unavailable" on macOS** [#33587](https://github.com/anthropics/claude-code/issues/33587)
   *Why it matters:* Users cannot enter Auto mode via `Shift+Tab` or settings, despite having the correct plan.
   *Reaction:* 47 upvotes; suggests a regression in permissions or API header handling.

### 📉 API & Performance
8. **[BUG] Rate limiter broken with multiple agents** [#40273](https://github.com/anthropics/claude-code/issues/40273)
   *Why it matters:* Spawning more than one agent triggers immediate "Rate limit reached" errors, even within valid quotas.
   *Reaction:* Breaking agent-heavy workflows; new reports from today.

9. **[BUG] Cannot connect to GitHub MCP via OAuth** [#3433](https://github.com/anthropics/claude-code/issues/3433)
   *Why it matters:* Blocks integration with GitHub's remote MCP servers.
   *Reaction:* Long-standing issue (113 upvotes) still active.

10. **[BUG] Native client update triggers instant rate limits** [#40297](https://github.com/anthropics/claude-code/issues/40297)
    *Why it matters:* Users updating to the native client are immediately throttled.
    *Reaction:* Suspected API key migration issues or header mismatches.

## 4. Key PR Progress

### 🔒 Security & Hardening
1. **fix: pin 7 actions to commit SHA** [#40290](https://github.com/anthropics/claude-code/pull/40290)
   *Details:* Re-submission of a security hardening PR. Pins mutable GitHub Action tags to immutable SHAs to prevent supply chain attacks.
   *Impact:* Best practice for CI/CD security hygiene.

2. **feat(plugins): add agent-wallet plugin** [#36433](https://github.com/anthropics/claude-code/pull/36433)
   *Details:* Introduces non-custodial wallet capabilities for AI agents to handle API payments autonomously.
   *Impact:* Expands Claude Code into autonomous agent economy.

### 🐛 Bug Fixes
3. **fix(plugins): add chmod +x to hook scripts** [#40208](https://github.com/anthropics/claude-code/pull/40208)
   *Details:* Fixes a "SessionStart:resume hook error" by ensuring installed scripts have execute permissions.
   *Impact:* Resolves a common crasher for plugin users.

4. **Fix changelog accuracy (v2.1.83-86)** [#40276](https://github.com/anthropics/claude-code/pull/40276)
   *Details:* Corrects documentation regarding the halved skill listing budget and character caps introduced in recent versions.
   *Impact:* Critical transparency for users wondering where their context went.

### ✨ Features & Enhancements
5. **feat(devcontainer): hybrid static/dynamic IP management** [#40322](https://github.com/anthropics/claude-code/pull/40322)
   *Details:* Enhances firewall handling in DevContainers with better IP refresh scripts.
   *Impact:* Improves stability for remote development environments.

6. **feat(plugin): tmp-cleanup plugin** [#39977](https://github.com/anthropics/claude-code/pull/39977)
   *Details:* Community plugin to mitigate massive `/tmp` disk leaks (reports of 46GB+ files).
   *Impact:* Addresses a critical resource exhaustion bug pending an official core fix.

7. **feat(devcontainer): make Node.js version configurable** [#33224](https://github.com/anthropics/claude-code/pull/33224)
   *Details:* Updates default Node.js from v20 to v24 (LTS) and makes it configurable.
   *Impact:* Future-proofing development environments.

8. **Remove "retro-futuristic" from Frontend Design Skill** [#39043](https://github.com/anthropics/claude-code/pull/39043)
   *Details:* Refines the prompt engineering in built-in skills.
   *Impact:* Minor quality of life improvement for frontend generation.

## 5. Feature Request Trends

*   **Terminal Graphics Support** [#2266](https://github.com/anthropics/claude-code/issues/2266): Strong desire for native Sixel/Kitty/iTerm2 support to visualize charts and diagrams directly in the CLI.
*   **Multi-window Desktop** [#30154](https://github.com/anthropics/claude-code/issues/30154): Users want to view multiple sessions side-by-side rather than tab-switching in the single-window Desktop app.
*   **Usage Analytics** [#33978](https://github.com/anthropics/claude-code/issues/33978): Request for a `claude usage` command to track token/cost spending in real-time.
*   **Rate Limit Visibility** [#27915](https://github.com/anthropics/claude-code/issues/27915): Request to expose quota/rate-limit data in the `statusLine` JSON input.

## 6. Developer Pain Points

*   **Windows Filesystem Restrictions:** The "Cowork" feature's hostility towards non-home directories (secondary drives, symlinks) is the top complaint for enterprise developers.
*   **Permission System Inconsistency:** The `--dangerously-skip-permissions` flag is unreliable, and "Auto mode" availability is erratic even for paid users.
*   **Data Loss Risks:** Recent bugs involving sandboxes and update processes that wipe user data are eroding trust in stability.
*   **Rate Limiting Opacity:** Sudden rate limits (especially with agents/MCP) and lack of visibility into quota usage are frustrating high-volume users.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-03-29

## 1. Today's Highlights
Development activity is heavily focused on stabilizing the **app-server TUI backend**, with multiple PRs addressing regressions in MCP startup warnings, ghost subagent entries, and the skills picker scrolling. While no new release was published today, the repository is seeing significant refactoring in tool specifications and permission management to support a more modular `codex-tools` architecture.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
1.  **[#14593: Burning tokens very fast](https://github.com/openai/codex/issues/14593)**
    *   **Impact:** Business users are experiencing rapid token consumption.
    *   **Reaction:** Highly active thread (315 comments); users are suspecting a regression or inefficient background processing.
2.  **[#10410: macOS Intel (x86_64) support](https://github.com/openai/codex/issues/10410)**
    *   **Impact:** Users on Intel Macs cannot use the Codex Desktop App.
    *   **Reaction:** High demand (209 👍); frustration that the app is ARM-only despite Intel hardware still being widely used.
3.  **[#10450: Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)**
    *   **Impact:** The Desktop App lacks support for SSH/Remote development workflows common in VS Code.
    *   **Reaction:** A critical feature gap (460 👍) preventing adoption for enterprise workflows.
4.  **[#2558: Codex client output truncated when scrolling in Zellij](https://github.com/openai/codex/issues/2558)**
    *   **Impact:** The TUI fails to render correctly in the Zellij terminal multiplexer.
    *   **Reaction:** Significant traction (103 👍) indicating Zellij is a popular tool among Codex CLI users.
5.  **[#1618: Control over color theme in TUI](https://github.com/openai/codex/issues/1618)**
    *   **Impact:** Lack of customizability in the Terminal UI.
    *   **Reaction:** Persistent request (104 👍); users want to match their terminal aesthetics.
6.  **[#14919: bwrap: Failed RTM_NEWADDR (Linux Sandbox Regression)](https://github.com/openai/codex/issues/14919)**
    *   **Impact:** CLI `v0.115.0` broke the Linux sandbox (`bwrap`), preventing command execution.
    *   **Reaction:** Critical bug for Linux users; regression immediately impacts workflow.
7.  **[#13476: Excessive approval prompts for Playwright MCP](https://github.com/openai/codex/issues/13476)**
    *   **Impact:** Recent changes introduced annoying friction for Playwright users.
    *   **Reaction:** Users feeling the "nag" of constant prompts disrupts the value of autonomous agents.
8.  **[#9203: Please make "/undo" back](https://github.com/openai/codex/issues/9203)**
    *   **Impact:** Accidental file deletions/modifications by the agent are hard to recover without the `/undo` command.
    *   **Reaction:** High safety concern (101 👍); critical for files not tracked by Git.
9.  **[#10390: macOS network_access silently ignored](https://github.com/openai/codex/issues/10390)**
    *   **Impact:** `network_access = true` fails silently in the macOS sandbox, breaking API calls/OCI tools.
    *   **Reaction:** Major functional blocker for users needing network access within sandboxed tasks.
10. **[#13784: Error running remote compact task](https://github.com/openai/codex/issues/13784)**
    *   **Impact:** Frequent errors interrupting work sessions in the Desktop App.
    *   **Reaction:** Signals instability in the App's context management.

## 4. Key PR Progress
1.  **[#13679: feat(tui): add subagent runtime behavior](https://github.com/openai/codex/pull/13679)**
    *   **Change:** Adds a live subagent/watchdog runtime panel to the TUI, pinned independently of transcript history.
2.  **[#16041: Fix app-server TUI MCP startup warnings](https://github.com/openai/codex/pull/16041)**
    *   **Fix:** Restores visibility of MCP startup failures in the app-server TUI which were lost during the migration from legacy TUI.
3.  **[#16114: Remove TUI voice transcription feature](https://github.com/openai/codex/pull/16114)**
    *   **Change:** Removes an incomplete feature, cleaning up the codebase and feature flags.
4.  **[#13825: feat(core): support custom model aliases](https://github.com/openai/codex/pull/13825)**
    *   **Feature:** Allows users to define custom model aliases in `config.toml` (e.g., mapping specific context windows to nicknames).
5.  **[#15929: feat: allow non-workspace filesystem writes](https://github.com/openai/codex/pull/15929)**
    *   **Feature:** Modernizes the sandbox policy to allow writes to `/tmp` or `:tmpdir` even outside the workspace root.
6.  **[#13678: feat(core): add watchdog runtime](https://github.com/openai/codex/pull/13678)**
    *   **Feature:** Introduces the foundational runtime and lifecycle management for "watchdog" agent threads.
7.  **[#16120: ci: run Windows lint via native Bazel](https://github.com/openai/codex/pull/16120)**
    *   **Fix:** Addresses CI bottlenecks by running argument-comment-lint natively on Windows.
8.  **[#16110: Fix tui_app_server ghost subagent entries](https://github.com/openai/codex/pull/16110)**
    *   **Fix:** Resolves an issue where dead subagent threads appeared selectable in the `/agent` picker after resuming sessions.
9.  **[#16109: Fix skills picker scrolling](https://github.com/openai/codex/pull/16109)**
    *   **Fix:** Corrects the app-server TUI bug that limited the `$` skills list to 8 items (#16091).
10. **[#13657: feat(agents): enable subagent inbox delivery](https://github.com/openai/codex/pull/13657)**
    *   **Feature:** Enables structured message delivery to subagent inboxes, formalizing parent/child handoffs.

## 5. Feature Request Trends
*   **Desktop App Parity:** There is a massive push to bring the new Codex Desktop App to feature parity with VS Code, specifically regarding **Remote Development (SSH)** and **Linux support**.
*   **Agent Safety & Control:** Users are strongly requesting mechanisms to control autonomous behavior, specifically the return of the **`/undo`** command and **Pre/Post tool-use hooks**.
*   **TUI/UX Polish:** Requests for **Intel Mac support**, **scrollback re-rendering** on resize, and **theme customization** indicate that while the CLI is powerful, the user experience in terminals needs refinement.

## 6. Developer Pain Points
*   **Sandbox Regressions:** Developers are frustrated by recurring breaks in sandbox functionality (e.g., `bwrap` on Linux, `network_access` on macOS), which halt execution pipelines.
*   **Platform Support Fragmentation:** There is growing annoyance regarding the exclusion of Intel Macs and Linux from the "first-class" Desktop App experience, forcing power users back to the browser or CLI.
*   **Token Efficiency:** High token burn rates for Business subscribers are causing alarm, with users fearing inefficient coding loops are costing them money.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-03-29

## 1. Today's Highlights
The `google-gemini/gemini-cli` repository has released rapid-fire patches (**v0.36.0-preview.6** and **v0.35.3**) to address stability issues across the preview and stable channels. Concurrently, intense development activity is focused on the **"SDD" (Spec-Driven Development)** workflow, specifically integrating a persistent **Task Tracker** to replace legacy markdown-based planning, while significant community friction remains regarding **Pro Plan access** and **enterprise tier verification**.

## 2. Releases
*   **v0.36.0-preview.6** & **v0.35.3**: These hotfix releases cherry-pick commit `765fb67` to patch specific regressions introduced in previous versions.
    *   **v0.36.0-preview.6**: [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.36.0-preview.5...v0.36.0-preview.6)
    *   **v0.35.3**: [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.35.2...v0.35.3)

## 3. Hot Issues

**Infrastructure & Diagnostics**
*   [#23328: Optimize test suite output logging](https://github.com/google-gemini/gemini-cli/issues/23328) (56 comments)
    *   **Why it matters:** Developers are facing "hundreds of thousands of characters" dumped to stdout during test runs, making it nearly impossible to debug actual failures.
    *   **Reaction:** High engagement; the noise is blocking CI/CD workflows.

**Core Usage & Stability**
*   [#23988: CLI hangs completely on LLM call](https://github.com/google-gemini/gemini-cli/issues/23988) (10 comments)
    *   **Why it matters:** Critical blocking bug where the CLI hangs for 15+ minutes on the first prompt, ignoring commands like `/quit`.
    *   **Reaction:** Users are forced to `Ctrl+C` and cannot use the tool effectively.
*   [#8883: 'You exceeded your current quota' despite 84% context remaining](https://github.com/google-gemini/gemini-cli/issues/8883) (31 comments)
    *   **Why it matters:** A persistent issue where Pro users are artificially blocked despite having available resources.
    *   **Reaction:** Major frustration; users feel the upgrade to Pro did not resolve the "quota" barrier.

**Authentication & Enterprise**
*   [#23876: Unable to use Pro models even with Google AI Pro Subscription](https://github.com/google-gemini/gemini-cli/issues/23876) (4 comments)
    *   **Why it matters:** Users with valid subscriptions are seeing errors when accessing `gemini-3.1-pro`.
    *   **Reaction:** Indicates a disconnect between the Google Accounts backend and the CLI's authentication layer.
*   [#23973: Pro account treated as standard-tier](https://github.com/google-gemini/gemini-cli/issues/23973) (7 comments)
    *   **Why it matters:** The CLI is misidentifying account tiers, stripping Pro features from paid users.

**Agent Behavior & Features**
*   [#23858: Files edited while in Plan Mode](https://github.com/google-gemini/gemini-cli/issues/23858) (3 comments)
    *   **Why it matters:** "Plan Mode" should be read-only. If the agent modifies files, it violates the user's trust in the planning phase.
*   [#22644: Allow custom session ID](https://github.com/google-gemini/gemini-cli/issues/22644) (3 comments)
    *   **Why it matters:** Developers want persistent, named sessions (e.g., `--session my-project`) rather than auto-generated hashes for better history management.

## 4. Key PR Progress

**Refactoring & Quality of Life**
*   [#24126: Fix/remove unsafe type assertions in tools](https://github.com/google-gemini/gemini-cli/pull/24126)
    *   **Focus:** Increases stability by validating data shapes at the boundary rather than relying on unsafe `as` type assertions in the tool registry.
*   [#24123: Fix editing plan without changes](https://github.com/google-gemini/gemini-cli/pull/24123)
    *   **Focus:** UX improvement. If a user opens a plan in an editor and makes no changes, the CLI won't trigger a costly/unnecessary replan cycle.
*   [#24120: Fix OAuth callback server double close](https://github.com/google-gemini/gemini-cli/pull/24120)
    *   **Focus:** Fixes `ERR_SERVER_NOT_RUNNING` crashes during the authentication flow.

**Feature Work**
*   [#24081: Stabilize sandbox for Windows and Linux](https://github.com/google-gemini/gemini-cli/pull/24081)
    *   **Focus:** Critical fixes for the Windows Sandbox Manager and Linux (WSL) build issues, broadening platform support.
*   [#23992: Support XDG directories](https://github.com/google-gemini/gemini-cli/pull/23992)
    *   **Focus:** Implements Linux standard `XDG_CONFIG_DIR`, `XDG_CACHE_DIR`, etc., resolving long-standing clutter in home directories.
*   [#18499: Add voice input (Gemini + Whisper)]](https://github.com/google-gemini/gemini-cli/pull/18499)
    *   **Focus:** Adds native voice input capabilities with a pluggable backend (defaulting to Gemini for zero-install).

**Agent & Workflow**
*   [#23914: Infrastructure for event-driven subagent history](https://github.com/google-gemini/gemini-cli/pull/23914)
    *   **Focus:** Implements a message bus to track subagent activity, enabling real-time UI traces without heavy polling.

## 5. Feature Request Trends

**Persistent & Advanced Planning (SDD)**
The roadmap is heavily focused on **Spec-Driven Development (SDD)**. Users and maintainers are requesting the move away from static markdown plans to a **DAG-based Task Tracker**. This includes:
*   Persistent project-level trackers (Issue #23724).
*   Dynamic execution of tasks based on dependencies rather than linear checklists (Issue #23804).

**Memory & Personalization**
There is a clear trend toward "Memory" features. Developers want the agent to remember preferences across sessions (Global memory) and per project (Project memory).
*   *Example:* Issue #22809 (Tune prompts to encourage proactive memory writes).

## 6. Developer Pain Points

**Environment Parity**
Developers on **Windows** and **Linux** are reporting friction with the sandbox environment. Recent PRs (#24081) highlight that syntax errors and build failures were prevalent in non-macOS environments, suggesting the tool has been macOS-centric in its recent evolution.

**Enterprise & Paywall Confusion**
There is significant confusion regarding "Pro" features. Users are frustrated that a Google AI subscription (web) does not seamlessly translate to "Pro" tier access in the CLI, leading to "standard-tier" errors and quota locks despite paying for the service.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest: 2026-03-29

## Today's Highlights
The `github/copilot-cli` repository is experiencing a high volume of user-reported friction regarding the terminal interface (TUI), specifically concerning scrolling responsiveness and input handling on Windows. Despite the lack of new releases or merged pull requests in the last 24 hours, the community has logged 18 new issues, signaling significant growing pains with the latest v1.0.x releases, particularly around autopilot reliability and IPv6 networking compatibility.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues
1. **[#223 "Copilot Requests" permission for fine-grained tokens](https://github.com/github/copilot-cli/issues/223)**
   *High Demand (60 👍)*
   Enterprise users are pushing for the ability to use organization-owned tokens for authentication. Currently, only Personal Access Tokens (PATs) display the required "Copilot Requests" permission, forcing corporate environments to compromise on security policies.

2. **[#1481 SHIFT + ENTER executes prompt instead of line break](https://github.com/github/copilot-cli/issues/1481)**
   *UX Friction (10 👍)*
   Users report muscle memory conflict where the standard "Shift+Enter" for new lines executes the prompt prematurely. The current workaround (Ctrl+Enter) is viewed as non-standard for chat interfaces.

3. **[#2101 Transient API errors leading to rate limits](https://github.com/github/copilot-cli/issues/2101)**
   *Reliability*
   Users are experiencing cascading failures where transient API errors quickly consume rate limits, resulting in lockouts. The retry mechanism appears to be too aggressive or inefficient.

4. **[#2208 CPU spinning in WSL](https://github.com/github/copilot-cli/issues/2208)**
   *Performance*
   Reports indicate the CLI enters an unresponsive state with 100% CPU usage during long sessions, particularly when using high-context models like Claude Opus 4.6 1M.

5. **[#2375 Cannot paste into CLI](https://github.com/github/copilot-cli/issues/2375)**
   *Regression*
   A critical bug where code copy-pasting fails intermittently, severely hampering workflows that rely on providing context from external sources.

6. **[#2361 IPv6 hanging SEA binary](https://github.com/github/copilot-cli/issues/2361)**
   *Networking*
   The Node.js SEA (Single Executable Application) hangs if the DNS returns an unroutable IPv6 record, lacking the fallback to IPv4 that standard system Node.js possesses.

7. **[#2369 Unable to scroll long results](https://github.com/github/copilot-cli/issues/2369)**
   *Accessibility*
   Users report completely broken scrolling functionality when output exceeds screen length, with no mouse, touch, or scrollbar support working in v1.0.12.

8. **[#1976 Cannot use MCP servers nor any model](https://github.com/github/copilot-cli/issues/1976)**
   *Configuration*
   Issues arising from organizational policies disabling Third-party MCP servers, which subsequently block access to built-in models.

9. **[#2360 Typing lag in Plan Mode feedback](https://github.com/github/copilot-cli/issues/2360)**
   *Input Lag*
   The text input area in Plan Mode cannot handle normal typing speeds, resulting in garbled characters due to input lag.

10. **[#2374 Autopilot enters infinite loop](https://github.com/github/copilot-cli/issues/2374)**
    *Agent Logic*
    Autopilot mode enters a state where it repeats the same cycle or gets stuck after generating a plan, requiring a force-quit.

## Key PR Progress
No pull requests were updated or merged in the last 24 hours.

## Feature Request Trends
*   **OpenTelemetry (OTel) Integration**: A strong request (#1911) exists for exporting traces, metrics, and events to provide visibility into LLM token usage and agent interactions.
*   **Local LLM & Proxy Support**: Users are requesting features to route CLI requests through OpenAI-compatible proxies (e.g., LiteLLM, Ollama) via `OPENAI_BASE_URL` or similar mechanisms (#2283, #2366).
*   **UI/UX Customization**: There is a trend toward requesting better control over the interface, such as disabling auto-scroll (#2372), changing color contrast for input vs. output (#2371), and adding vim-style aliases like `:q` (#2373).

## Developer Pain Points
*   **Terminal (TUI) Instability**: A significant portion of the bug reports (Windows scrolling, pasting failures, infinite loops, and CPU spinning) points to instability in the terminal interface.
*   **Model Quality & Autopilot Logic**: Users are noting a degradation in performance with GPT 5.4 compared to previous codex models (#2272), specifically citing the agent's inability to switch smoothly from planning to execution.
*   **Enterprise & Auth Friction**: Developers in corporate environments are blocked by organizational policies regarding fine-grained tokens and MCP servers, indicating a gap between consumer CLI features and enterprise governance.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-03-29

## 1. Today's Highlights
Today's activity highlights significant stability improvements for the Shell environment, specifically addressing a critical crash bug related to unplugged external drives. Developers are also actively refining the integration between Kimi CLI and third-party API providers (like One API and GLM) to ensure compatibility with advanced reasoning models. Additionally, new feature proposals are focusing on enhancing Windows terminal usability and OAuth integration for MCP servers.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*   **[#1621: Infinite exception when CWD is removed](https://github.com/MoonshotAI/kimi-cli/issues/1621)**
    *   **Why it matters:** Critical stability fix for macOS users. If the working directory (e.g., an external hard drive) is unplugged during a session, the bottom toolbar renderer enters an infinite exception loop.
    *   **Reaction:** A fix has already been proposed in PR #1622.

*   **[#1616: One API Kimi-K2.5 'reasoning_content' error](https://github.com/MoonshotAI/kimi-cli/issues/1616)**
    *   **Why it matters:** Breaks compatibility with Kimi-K2.5 on third-party platforms. The tool fails in multi-turn chats because `reasoning_effort` isn't automatically set when history contains `ThinkPart`.
    *   **Reaction:** Fix proposed in PR #1620.

*   **[#1615: GLM5.1 Model Feedback Not Received](https://github.com/MoonshotAI/kimi-cli/issues/1615)**
    *   **Why it matters:** Integration bug with the GLM-5.1 model where the tool cannot receive feedback, despite the VIS showing the tool returned data.

*   **[#1624: SearXNG MCP Logs Dumped into TUI](https://github.com/MoonshotAI/kimi-cli/issues/1624)**
    *   **Why it matters:** User Interface (TUI) clutter. Every request to the SearXNG MCP server dumps 4-5 lines of internal logs into the chat view, degrading readability.

*   **[#1618: Allow configuring Shell executor on Windows](https://github.com/MoonshotAI/kimi-cli/issues/1618)**
    *   **Why it matters:** Workflow improvement for Windows developers. Users currently forced to use PowerShell want to execute commands via Bash or WSL/Zsh.

*   **[#1617: Ctrl-V cannot paste pictures in Windows Terminal](https://github.com/MoonshotAI/kimi-cli/issues/1617)**
    *   **Why it matters:** Usability gap. Multi-modal image pasting via standard shortcuts fails in the Windows Terminal environment.

*   **[#1623: Kimi Web refreshes intermittently](https://github.com/MoonshotAI/kimi-cli/issues/1623)**
    *   **Why it matters:** Affects the embedded web view functionality, causing loss of context and a poor user experience during web interactions.

*   **[#1619: `kimi acp` ignores Moonshot Open Platform auth](https://github.com/MoonshotAI/kimi-cli/issues/1619)**
    *   **Why it matters:** Configuration bug preventing the standard Moonshot authentication from being recognized by the `kimi acp` command.

## 4. Key PR Progress
*   **[#1622: Exit gracefully when CWD is removed](https://github.com/MoonshotAI/kimi-cli/pull/1622)**
    *   **Description:** Addresses the infinite crash loop in `_render_bottom_toolbar`. It wraps `os.getcwd()` calls to prevent cascading errors when a filesystem is unmounted during a session.

*   **[#1620: Auto-set reasoning_effort for ThinkPart](https://github.com/MoonshotAI/kimi-cli/pull/1620)**
    *   **Description:** Ensures compatibility with One API and Kimi-K2.5. Automatically includes `reasoning_effort` in requests if the conversation history contains stored `reasoning_content`.

*   **[#1625: Add --scope option for MCP OAuth](https://github.com/MoonshotAI/kimi-cli/pull/1625)**
    *   **Description:** Enhances MCP server connectivity. Allows users to specify OAuth scopes (e.g., for Supabase) during `kimi mcp add` and fixes upstream auth flow issues.

*   **[#1600: Highlight user input in Shell UI](https://github.com/MoonshotAI/kimi-cli/pull/1600)**
    *   **Description:** Visual polish. Applies a bright blue color (#007AFF) to user echo text and adds a full-width separator to improve readability in dense terminal sessions.

*   **[#1512: Rewrite ACP Auth (Terminal Login & OAuth)](https://github.com/MoonshotAI/kimi-cli/pull/1512)**
    *   **Description:** A major architectural update implementing a robust authentication system for ACP servers, supporting both Terminal Login and OAuth Device Flow.

*   **[#1605: Restore --skills-dir override behavior](https://github.com/MoonshotAI/kimi-cli/pull/1605)**
    *   **Description:** Bug fix. Reverts `resolve_skills_roots` to override semantics (matching v1.25.0) when `--skills-dir` is provided, rather than appending to defaults.

## 5. Feature Request Trends
*   **Windows Environment Integration:** There is a clear demand for better Windows support, specifically requests to replace PowerShell with Bash/WSL as the default executor and fix standard clipboard shortcuts (Ctrl+V) for images.
*   **OAuth & Scope Management:** Users are connecting to more complex external services (like Supabase via MCP), driving the need for granular control over OAuth scopes during the authentication flow.

## 6. Developer Pain Points
*   **API Compatibility:** Developers routing through "One API" or using non-standard models (like GLM-5.1) are facing parameter mismatch errors (e.g., `thinking is enabled but reasoning_content is missing`) and reception issues.
*   **TUI Noise:** Internal logs from MCP tools (like SearXNG) are leaking into the main chat interface, making it difficult for users to focus on the actual conversation.
*   **Session Stability:** Removing physical media (external drives) during a session causes the CLI to crash hard with infinite exceptions, requiring a force-kill.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-03-29

## 1. Today's Highlights
The OpenCode ecosystem is seeing significant activity focused on plugin extensibility and core model stability. Major architectural refactors are underway, specifically the migration to an **Effect-based service pattern** for session management, which promises improved cancellation handling. Meanwhile, the community is vigorously debating integration standards for external providers like **Atlassian Rovo** and **Thaura AI**, while wrestling with persistent bugs in specific model endpoints (Claude Max, MiniMax).

## 2. Releases
**Status:** No new releases published in the last 24 hours.

## 3. Hot Issues
*   [#7410: Broken Claude Max](https://github.com/anomalyco/opencode/issues/7410)
    *   **Impact:** Critical service disruption.
    *   **Summary:** Users reporting connection failures with Claude Max models. High engagement (393 comments) suggests this is a widespread blocker for developers relying on Anthropic's top-tier models.
*   [#7101: Allow custom system prompts in global, project, or custom directories](https://github.com/anomalyco/opencode/issues/7101)
    *   **Impact:** Workflow customization.
    *   **Summary:** Highly upvoted request (👍 71) to manage system prompts hierarchically (global vs. project-level), allowing for more flexible agent behaviors without manual copying.
*   [#6152: Session context usage (similar to /context in Claude)](https://github.com/anomalyco/opencode/issues/6152)
    *   **Impact:** Observability.
    *   **Summary:** Users want a TUI dialog to inspect the current context window breakdown, a feature available in competitors like Claude. Critical for debugging token limits.
*   [#8501: Allow expanding pasted text (e.g., `[Pasted ~1 lines]`)](https://github.com/anomalyco/opencode/issues/8501)
    *   **Impact:** UX/Editing.
    *   **Summary:** Top-voted request (👍 103). Users want the ability to expand/verify auto-summarized pasted text before sending it to the LLM to ensure accuracy.
*   [#6651: Dynamic model selection for subagents via Task tool](https://github.com/anomalyco/opencode/issues/6651)
    *   **Impact:** Agent architecture.
    *   **Summary:** Developers want the ability to dynamically assign specific models to subagents (e.g., a fast model for searching, a slow model for coding) directly from the Task tool.
*   [#15092: Minimax M2.5 experience is weird](https://github.com/anomalyco/opencode/issues/15092)
    *   **Impact:** Model reliability.
    *   **Summary:** Reports of the model getting permanently stuck or looping despite low context usage.
*   [#8619: Native StatusLine Hook for Plugins](https://github.com/anomalyco/opencode/issues/8619)
    *   **Impact:** Plugin API.
    *   **Summary:** Requests for a dedicated hook for persistent status display (e.g., git status, timers) to avoid injecting text into the chat context, which wastes tokens.
*   [#3250: Add ability to specify "num_ctx" for Ollama provider](https://github.com/anomalyco/opencode/issues/3250)
    *   **Impact:** Resource Management.
    *   **Summary:** Ollama users on consumer hardware need granular control over context window size to manage VRAM usage manually.
*   [#14273: Free usage exceeded error for Zen free models](https://github.com/anomalyco/opencode/issues/14273)
    *   **Impact:** Billing/Confusion.
    *   **Summary:** Users encountering "Free usage exceeded" errors on free Zen models (Kimi, MiniMax) despite having a positive balance, indicating a potential logic error in the quota check.
*   [#5444: MCP with oauth doesn't work](https://github.com/anomalyco/opencode/issues/5444)
    *   **Impact:** Integration.
    *   **Summary:** Critical bug where the MCP OAuth flow fails to recognize configured servers, preventing users from connecting to services like Jira.

## 4. Key PR Progress
*   [#19483: Refactor(Session): effectify SessionPrompt service](https://github.com/anomalyco/opencode/pull/19483)
    *   **Status:** Open (Beta)
    *   **Details:** A major architectural shift migrating SessionPrompt to the Effect service pattern. This replaces manual `AbortController` usage with fiber-based cancellation, offering more robust async handling and cleanup.
*   [#19570: Feat: add Telegram channel integration](https://github.com/anomalyco/opencode/pull/19570)
    *   **Status:** Open (Compliance needed)
    *   **Details:** Adds native Telegram bot integration, allowing users to pair sessions via DM. Features include allowlist policies and mention patterns for control.
*   [#9365: Feat(session): add support for per-session working directories](https://github.com/anomalyco/opencode/pull/9365)
    *   **Status:** Open
    *   **Details:** Introduces `Session.directory.get/set`, enabling powerful workflows where different sessions operate in different Git worktrees or folders simultaneously.
*   [#15697: Tweak(ui): make questions popup collapsible](https://github.com/anomalyco/opencode/pull/15697)
    *   **Status:** Open
    *   **Details:** UI quality-of-life improvement that makes the "questions" popup interactive/collapsible to prevent screen obstruction.
*   [#19520: Fix(tui): patch StdinParser to prevent garbled text](https://github.com/anomalyco/opencode/pull/19520)
    *   **Status:** Open
    *   **Details:** Fixes a long-standing issue where mouse sequences become garbled during heavy rendering loads (e.g., LLM streaming), resulting in corrupted text input.
*   [#19556: Fix(session): use MCP tool name in permission patterns](https://github.com/anomalyco/opencode/pull/19556)
    *   **Status:** Closed (Merged)
    *   **Details:** Fixes a bug where MCP tool permission requests displayed generic `*` instead of the actual tool name, confusing users.
*   [#12520: Feat: mcp-search tool for lazy loading mcp](https://github.com/anomalyco/opencode/pull/12520)
    *   **Status:** Open
    *   **Details:** Enhances the MCP (Model Context Protocol) experience by adding a search tool, allowing for lazy loading and better management of available tools.
*   [#18767: Feat(app): Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)
    *   **Status:** Open
    *   **Details:** Aims to bring OpenCode's desktop app experience to mobile/touch devices, optimizing gestures and UI elements for smaller screens.
*   [#19559: Feat: allow custom sound uploads in settings](https://github.com/anomalyco/opencode/pull/19559)
    *   **Status:** Open
    *   **Details:** Adds functionality to upload custom audio files for UI sound effects, stored as data URLs in the settings.
*   [#16163: Feat(nix): add opencode-electron derivation](https://github.com/anomalyco/opencode/pull/16163)
    *   **Status:** Open
    *   **Details:** Expands Nix support to include the Electron-based desktop client, allowing Linux users to manage the GUI app via Nix.

## 5. Feature Request Trends
*   **Plugin Status Hooks:** There is a strong demand for a dedicated "StatusLine" or "Footer" hook in plugins (Issues #8619, #18969). Developers are tired of hacking toasts for persistent info and want an official API area that doesn't pollute the LLM context.
*   **Context Visibility:** Users are increasingly anxious about token usage. Issues like #6152 and #7175 highlight a need for granular visibility into *exactly* what is consuming the context window (e.g., summaries, titles, system prompts) in real-time.
*   **Subagent Control:** As multi-agent workflows mature, users are asking for finer control over subagents, specifically dynamic model selection (#6651) and a `/subagents` browser command (#19415).

## 6. Developer Pain Points
*   **Windows & IME Compatibility:** Windows users are facing distinct issues ranging from clipboard inconsistencies in WSL (#19502) to broken keybindings when using non-English Input Method Editors (#16252).
*   **Configuration Reloading:** The requirement to restart the entire desktop app for minor configuration changes (#10899) is cited as a major workflow disruptor.
*   **Model "Looping":** Reports are increasing regarding models getting stuck in "tool calling loops" (#3743), particularly with newer providers like Kimi and MiniMax, suggesting a need for better tool-validation or break-glass logic in the core loop.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-03-29

## 1. Today's Highlights
The Qwen Code community is currently very active, with significant focus on expanding automation capabilities and resolving stability issues in the latest release. Major developmental efforts include the introduction of a "Channels" platform for messaging integration, an in-session cron scheduling system, and a comprehensive refactor to centralize IDE diff interactions. On the user front, the release of version 0.13.x has sparked reports regarding session context management and tool execution failures on Windows.

## 2. Releases
**No new releases in the last 24 hours.**
*Note: Several open issues cite `Qwen Code 0.13.0/0.13.1`, indicating the community is currently debugging this recent version.*

## 3. Hot Issues
Below are the top issues updated in the last 24 hours, highlighting stability concerns and feature gaps.

**[Bug] Shell commands fail with "File not found" on Windows** [#2727](https://github.com/QwenLM/qwen-code/issues/2727)
* **Why it matters:** Breaks core development workflows (npm/npx) for Windows users despite packages being correctly installed.
* **Reaction:** High engagement (5 comments) indicating this is a blocker for Windows developers.

**[Feature] Bring subagent system to feature parity with Claude Code** [#2409](https://github.com/QwenLM/qwen-code/issues/2409)
* **Why it matters:** Users feel Qwen Code lags behind competitors in subagent capabilities (estimated at 40-45% parity).
* **Reaction:** Active discussion on the structural limitations of the current `/agents` command.

**[Feature] Skill Testing Framework** [#2447](https://github.com/QwenLM/qwen-code/issues/2447)
* **Why it matters:** Critical infrastructure request for a testing framework to support hundreds of skills via recording, playback, and assertions.
* **Reaction:** High priority for maintainers to ensure skill stability.

**[Bug] "Edit automatically" allows all commands in VSCode** [#2722](https://github.com/QwenLM/qwen-code/issues/2722)
* **Why it matters:** Security/safety control flaw where the "Edit automatically" setting incorrectly permits the execution of arbitrary shell commands.
* **Reaction:** Users expect edits to be text-only, not execution permissions.

**[Bug] JSON Serialization Error with DeepSeek API** [#2695](https://github.com/QwenLM/qwen-code/issues/2695)
* **Why it matters:** Integration failure with third-party models (DeepSeek) due to invalid message structure generation.
* **Reaction:** Highlights compatibility issues with non-Qwen models.

**[Bug] Context Window Spike on New Session** [#2685](https://github.com/QwenLM/qwen-code/issues/2685)
* **Why it matters:** A simple "Hello" consumes 20% of the context window, likely due to a fallback context size error.
* **Reaction:** Major concern regarding token efficiency and cost.

**[Bug] Tool Parameter Amnesia** [#2686](https://github.com/QwenLM/qwen-code/issues/2686)
* **Why it matters:** The model frequently forgets required parameters (e.g., `old_string` vs `new_string`) during edit/write operations.
* **Reaction:** Described as "ghost hitting a wall" (鬼打墙), causing repetitive failure loops.

**[Bug] Refusal to Execute Tasks** [#2730](https://github.com/QwenLM/qwen-code/issues/2730)
* **Why it matters:** Users report the agent enters a state where it refuses to perform tasks it previously handled without issue.
* **Reaction:** Suggests regression in model guardrails or prompt engineering.

**[Support] Product Confusion (Qoder vs Qwen Code vs Lingma)** [#2613](https://github.com/QwenLM/qwen-code/issues/2613)
* **Why it matters:** Reflects user confusion regarding Alibaba's overlapping AI coding products.
* **Reaction:** Requests for clarification on the distinction between these tools.

**[Feature] Session Alias and Auto-Summarization** [#2630](https://github.com/QwenLM/qwen-code/issues/2630)
* **Why it matters:** Session management is difficult with opaque UUIDs; users need human-readable aliases.
* **Reaction:** Strong request for better history management.

## 4. Key PR Progress
Significant development work is focused on tooling, infrastructure, and platform expansion.

**feat(channels): Extensible Channels Platform (Telegram, WeChat, DingTalk)** [#2628](https://github.com/QwenLM/qwen-code/pull/2628)
* **Detail:** Introduces a plugin system to interact with Qwen Code via popular messaging apps.

**feat(cron): In-session Loop Scheduling** [#2731](https://github.com/QwenLM/qwen-code/pull/2731)
* **Detail:** Adds session-scoped recurring jobs (cron tools) allowing the model to monitor long-running tasks like CI/deploys autonomously.

**Enhance /review: Verification & PR Comments** [#2687](https://github.com/QwenLM/qwen-code/pull/2687)
* **Detail:** Upgrades the review agent to deduplicate findings, verify issues with parallel agents, and post inline comments directly to PRs.

**Add Math Rendering Support (LaTeX, Fractals)** [#2732](https://github.com/QwenLM/qwen-code/pull/2732)
* **Detail:** Improves the rendering of complex mathematical formulas and includes a markdown validator to prevent code block leakage.

**refactor: Centralize IDE Diff Interaction in CoreToolScheduler** [#2728](https://github.com/QwenLM/qwen-code/pull/2728)
* **Detail:** A significant refactor moving diff handling from individual tools to the scheduler. This aims to fix token waste (#2709) and multi-edit bugs (#2702).

**fix(cli): Terminal Response Leakage on SSH** [#2718](https://github.com/QwenLM/qwen-code/pull/2718)
* **Detail:** Fixes visual garbage text appearing in terminals during high-latency SSH connections by adjusting protocol detection timeouts.

## 5. Feature Request Trends
Based on community activity, the most requested feature directions are:
1. **Subagent Parity:** A strong demand to bring Qwen Code's capabilities up to the standard set by "Claude Code," specifically regarding plugin subagents and markdown frontmatter interactions.
2. **Session Management:** Users are asking for better ways to manage history, specifically requesting **Session Aliases** and **Auto-Summarization** to replace UUIDs.
3. **Automation & Scheduling:** There is a push towards background automation, evidenced by the new cron scheduling PR and requests for hooks (#2693).
4. **Testing Infrastructure:** As the number of "Skills" grows, the community is explicitly asking for a **Skill Testing Framework** to prevent regressions.

## 6. Developer Pain Points
*   **Windows Compatibility:** The environment remains a second-class citizen, with specific "File not found" errors breaking standard npm workflows.
*   **Context Management:** Users are frustrated by sudden spikes in token usage (e.g., a greeting using 20% of the window) and the model "forgetting" tool parameters mid-operation.
*   **Agent Reliability:** Reports of the agent "refusing to do anything" or suffering from "amnesia" regarding function parameters indicate instability in the core reasoning loop.
*   **Product Clarity:** Developers are confused by the fragmentation of Alibaba's coding tools (Qwen Code, Qoder, Lingma), leading to support requests asking which tool to use.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*