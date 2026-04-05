# AI CLI Tools Community Digest 2026-04-05

> Generated: 2026-04-05 00:12 UTC | Tools covered: 8

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

# Cross-Tool Analysis Report: AI CLI Tools Ecosystem (2026-04-05)

## 1. Ecosystem Overview
The AI CLI tools landscape is currently undergoing a critical transition from "magic auto-pilot" features to **reliability, transparency, and enterprise control**. While early adopters tolerated experimental behaviors, the 2026 developer base demands production-grade stability, evidenced by widespread frustration regarding billing opacity, session management, and platform parity (specifically Windows/Linux support). Simultaneously, a technical bifurcation is occurring: established players (Claude, OpenAI, GitHub) are solidifying enterprise governance and policy controls, while agile contenders (Kimi, Qwen, OpenCode) are aggressively innovating on multi-agent architectures and local model optimization.

## 2. Activity Comparison

| Tool | Issues Tracked | Active PRs | Release Status | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | High (6 Critical) | Moderate | **Stable (v2.1.92)** | Policy Controls, Billing Transparency |
| **OpenAI Codex** | Critical (5 Regressions) | High (Active) | **Unstable (v0.118.0 regression)** | Real-time (WebRTC), Context Compaction |
| **Charm Crush** | Low (4 Legacy) | Low | **Maintenance** | Performance (JSON), Provider Expansion |
| **Gemini CLI** | Moderate (10 Mixed) | High (Refactor) | **Stable** | Architecture (Context Mgr), Voice Input |
| **GitHub Copilot** | Moderate (10 UX) | None | **Stable (v1.0.18)** | "Critic" Agent, Session Management |
| **Kimi Code** | Low (8 Feature) | Moderate | **Active** | UX Polish, Observability (/tps) |
| **OpenCode** | High (10 Stability) | High | **Hotfix (v1.3.15)** | Memory Leaks, Windows Fixes |
| **Qwen Code** | Moderate (10 Feature) | High | **Nightly** | Multi-Agent ("Teams"), Parallelism |

## 3. Shared Feature Directions
*   **Observability & Cost Transparency**
    *   **Claude Code:** Community demands "per-prompt" usage meters due to "Max" plan trust issues.
    *   **OpenCode:** High request for real-time "Tokens Per Second" (TPS) metrics; reports of billing double-spending.
    *   **Kimi Code:** Implementing `/tps` command to visualize generation speed.
*   **Context Window Optimization**
    *   **OpenAI Codex:** Fixing aggressive compaction causing "token explosion."
    *   **Qwen Code:** "Adaptive Token Escalation" to optimize concurrency; "Token Killer" plugin requests.
    *   **GitHub Copilot:** User requests to disable "Auto-Compaction" to prevent unexpected truncations.
*   **Rich Media / Visual Input**
    *   **Gemini CLI:** Adding Pluggable Voice Input.
    *   **Qwen Code:** Fixing clipboard paste (Ctrl+V) regressions on Linux.
    *   **GitHub Copilot:** Request for native image paste from clipboard.
*   **Session Persistence & Reliability**
    *   **GitHub Copilot:** Fixing `--resume` regression and multi-device logout bugs.
    *   **Gemini CLI:** High demand for automatic chat history saving.
    *   **OpenCode:** Fixing DB migration slowdowns and memory leaks during long sessions.

## 4. Differentiation Analysis
*   **Governance vs. Agility**
    *   **Claude Code** is leaning heavily into enterprise compliance (e.g., `forceRemoteSettingsRefresh`, fail-closed mechanisms), targeting managed IT environments.
    *   **Qwen Code** is focusing on raw performance via **Multi-Agent Teams** (parallel execution of unsafe/read-only commands), appealing to power users optimizing for speed.
*   **Platform Specificity**
    *   **OpenAI Codex** and **OpenCode** are struggling with **platform parity**. Codex faces Linux sandbox (`bwrap`) failures; OpenCode faces Windows `node-gyp` compilation issues.
    *   **Kimi Code** is attempting a radical architectural shift by proposing a rewrite from **Python to Bun + TypeScript**, betting on React Ink for UI stability.
*   **User Experience Philosophy**
    *   **GitHub Copilot** is introducing "Critic" agents (meta-reviewing plans), suggesting a focus on safety and accuracy over raw speed.
    *   **Charm Crush** is simplifying its architecture by removing remote research tools, positioning itself as a lightweight, high-performance client.

## 5. Community Momentum & Maturity
*   **High Maturity (Stable but Critical):** **Claude Code** and **GitHub Copilot**. These have the largest user bases but are facing "growing pains" regarding billing transparency and session state management. The backlash on Claude's "black box" billing indicates a highly engaged, vocal user base.
*   **High Iteration (Rapidly Evolving):** **Qwen Code** and **OpenAI Codex**. Qwen is shipping complex features (Agent Teams) in nightly builds, while Codex is frantically patching `v0.118.0` regressions.
*   **Community Driven:** **Kimi Code**. The rapid response to issues (opening PRs for TPS meters immediately after requests) suggests a highly responsive, developer-centric maintainer group.
*   **Stabilizing:** **Gemini CLI** and **OpenCode**. Focus is on paying down technical debt (memory leaks, PTY resource leaks) rather than adding flashy new features.

## 6. Trend Signals
1.  **The End of "Black Box" Usage:** Developers are no longer accepting aggregate usage stats. The industry is moving toward **line-item telemetry** (which prompt used how many tokens) as a standard requirement for AI tooling adoption in professional settings.
2.  **Multi-Agent Architectures are Mainstream:** The shift from single-loop chat to "Agent Teams" (Qwen) and "Sub-agents" (Kimi, Gemini) indicates that the next frontier of CLI productivity is **parallel task execution**, not just better single-shot completion.
3.  **Local-First Flexibility:** The intense interest in **OpenCode** (local LLM timeouts, proxy support) and **Charm Crush** (diverse provider support) signals a counter-movement to strictly cloud-hosted solutions. Developers want the option to run locally or switch providers to avoid vendor lock-in.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-04-05 | Source: anthropics/skills**

---

### 1. Top Skills Ranking
*Based on the most actively discussed and watched Pull Requests (PRs).*

*   **[#514: document-typography](https://github.com/anthropics/skills/pull/514)** (Status: Open)
    *   **Functionality:** Enforces typographic quality control in generated documents, preventing orphaned words, widow paragraphs, and numbering misalignment.
    *   **Highlights:** Addresses a ubiquitous "polish" issue in AI-generated text; recognized as a universal upgrade for document creation workflows.

*   **[#486: ODT skill](https://github.com/anthropics/skills/pull/486)** (Status: Open)
    *   **Functionality:** Enables creation, template filling, and parsing of OpenDocument Text (.odt) files (LibreOffice/OpenOffice format).
    *   **Highlights:** Expands Claude's interoperability beyond Microsoft Word (DOCX) to open ISO standards, filling a gap for open-source workflow users.

*   **[#210: Improve frontend-design](https://github.com/anthropics/skills/pull/210)** (Status: Open)
    *   **Functionality:** Refines the `frontend-design` skill to improve clarity and actionability for Claude.
    *   **Highlights:** Focuses on "token efficiency" and ensuring instructions are actionable within a single conversation turn.

*   **[#181: SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** (Status: Open)
    *   **Functionality:** Integrates SAP’s open-source tabular foundation model for predictive analytics on SAP business data.
    *   **Highlights:** Represents a trend toward "Model Context Protocol" style integration where Claude orchestrates specialized external models.

*   **[#509: Add CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** (Status: Open)
    *   **Functionality:** Adds official contribution guidelines to the repository.
    *   **Highlights:** Addresses the "Community Health Gap" (Issue #452); aims to standardize how the community proposes and submits new skills.

*   **[#83: skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (Status: Open)
    *   **Functionality:** Meta-skills that evaluate other skills for documentation quality, security risks, and structure.
    *   **Highlights:** A "meta" approach to ecosystem maintenance, allowing the community to self-audit skill quality.

*   **[#806: sensory skill (macOS Automation)](https://github.com/anthropics/skills/pull/806)** (Status: Open)
    *   **Functionality:** Uses `osascript` (AppleScript) for native macOS automation instead of screenshot-based UI interaction.
    *   **Highlights:** Offers a more robust, permission-governed method for controlling macOS applications compared to visual computer use.

---

### 2. Community Demand Trends
*Derived from top GitHub Issues, indicating where users feel the current ecosystem is lacking.*

*   **Enterprise & Governance Security:** There is a strong demand for "Agent Governance" ([#412](https://github.com/anthropics/skills/issues/412)) to manage safety policies, threat detection, and audit trails, specifically addressing the security risks of community-distributed code ([#492](https://github.com/anthropics/skills/issues/492)).
*   **Organizational Skill Sharing:** Users are frustrated with the manual download/upload process required to share skills within teams. There is a high demand for native org-wide skill libraries or direct sharing links in Claude.ai ([#228](https://github.com/anthropics/skills/issues/228)).
*   **Reliability & Tooling:** Significant frustration exists regarding the reliability of the Skills API and installation mechanisms. Users report "500 Internal Server Errors" ([#403](https://github.com/anthropics/skills/issues/403), [#406](https://github.com/anthropics/skills/issues/406)), disappearing skills ([#62](https://github.com/anthropics/skills/issues/62)), and broken evaluation frameworks ([#556](https://github.com/anthropics/skills/issues/556)).
*   **Better "Meta-Tooling":** The community is asking for better tools to *build* skills. Critiques of the `skill-creator` skill ([#202](https://github.com/anthropics/skills/issues/202)) suggest it is too verbose and educational, rather than being an optimized operational agent.

---

### 3. High-Potential Pending Skills
*Active PRs that are technically complete or highly discussed and likely to merge soon.*

*   **[#541, #538, #539: DOCX & PDF Fixes (Lubrsy706)](https://github.com/anthropics/skills/pull/541)**
    *   A series of critical bug fixes for the `docx` and `pdf` skills, addressing tracked changes corruption, case-sensitive file references, and YAML validation errors. These are low-risk, high-impact fixes likely to be merged rapidly.

*   **[#723: testing-patterns](https://github.com/anthropics/skills/pull/723)**
    *   A comprehensive addition covering the full testing stack (Unit, Component, Integration). Given the universal need for testing, this fills a major gap in the core coding capabilities.

*   **[#659: quality-playbook](https://github.com/anthropics/skills/pull/659)**
    *   Focuses on reviving traditional Quality Engineering (QE) practices—generating test plans from requirements rather than just code. This "shift-left" approach is gaining traction as a distinct AI advantage.

*   **[#147: codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)**
    *   A cleanup and documentation skill for identifying orphaned code and infrastructure bloat. Highly relevant for maintaining large, legacy projects often handled by AI agents.

---

### 4. Skills Ecosystem Insight
**"The community is prioritizing '最后一公里' (last-mile) refinement—moving from basic code generation to reliable, secure, and typographically polished enterprise deliverables."**

---

# Claude Code Community Digest: 2026-04-05

## 1. Today's Highlights

**Release v2.1.92** introduces enterprise-grade policy controls, specifically the `forceRemoteSettingsRefresh` setting which enforces a fail-closed mechanism for remote managed settings fetching. Meanwhile, the community remains intensely focused on **usage tracking and cost transparency**, with multiple high-engagement posts alleging rapid depletion of "Max" plan limits and requesting detailed meters. On the feature front, the conversation around UI customization is heating up, with users specifically requesting options to hide or modify the new "companion buddy" feature and to enable a Menu Bar-only mode on macOS.

## 2. Releases

**v2.1.92**
- **Enhanced Policy Control:** Added `forceRemoteSettingsRefresh` setting. When enabled, the CLI will block startup until remote settings are fetched and exit if the fetch fails, ensuring strict compliance in managed environments.
- **Bedrock Wizard:** Introduced an interactive setup wizard for AWS Bedrock configurations, accessible directly from the 3rd-party provider login screen.

## 3. Hot Issues

**Critical Usage & Cost Concerns**
- **[#16157](https://github.com/anthropics/claude-code/issues/16157)** — [BUG] Instantly hitting usage limits with Max subscription (*1436 comments*)
  - **Why it matters:** This is the most active thread, indicating widespread frustration among "Max" subscribers regarding the accuracy of usage meters. Users feel they are hitting artificial limits prematurely.
  - **Community Reaction:** 666 👍; users are sharing screenshots of usage spikes and demanding a per-session breakdown of token consumption.

- **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — [BUG] Session limits exhausted abnormally fast since March 23 (*413 comments*)
  - **Why it matters:** Corroborates #16157, suggesting a potential regression introduced in late March specifically affecting CLI usage calculations.
  - **Community Reaction:** 338 👍; intense discussion on whether the meter counts cached prompts or thinking tokens differently.

**Desktop Experience & Platform Features**
- **[#16082](https://github.com/anthropics/claude-code/issues/16082)** — [FEATURE] Menu Bar Only Mode (*22 comments*)
  - **Why it matters:** High-priority UX request for developers who want Claude running unobtrusively.
  - **Community Reaction:** 71 👍; strong desire to declutter the Dock on macOS.

- **[#42212](https://github.com/anthropics/claude-code/issues/42212)** — Add setting to disable/hide companion buddy (*4 comments*)
  - **Why it matters:** Reflects a divide in user preference; some find the new visual "buddy" element distracting or unprofessional.
  - **Community Reaction:** 1 👍; request for a `companionEnabled: false` toggle.

**Workflow & Permissions**
- **[#36460](https://github.com/anthropics/claude-code/issues/36460)** — [BUG] Channels not available on personal Max plan (*19 comments*)
  - **Why it matters:** Users are finding that paid "Max" tier features (specifically the `--channels` flag) are being silently ignored, causing confusion about plan capabilities.
  - **Community Reaction:** 25 👍; frustration over "silently ignored" flags.

- **[#42975](https://github.com/anthropics/claude-code/issues/42975)** — [BUG] `bypassPermissions` mode still prompts (*6 comments*)
  - **Why it matters:** Affects developer velocity; users configuring `defaultMode: "bypassPermissions"` are still receiving confirmation prompts, defeating the purpose of the setting.
  - **Community Reaction:** 3 👍; reports of intermittent behavior where prompts appear mid-conversation.

**Platform Stability**
- **[#37312](https://github.com/anthropics/claude-code/issues/37312)** — [BUG] Cowork on Windows hangs — VM signature failure (*6 comments*)
  - **Why it matters:** Blocks usage of the advanced "Cowork" feature for Windows users due to service signature verification failures.
  - **Community Reaction:** 1 👍; technical deep-dive into `CoworkVMService` logs provided.

## 4. Key PR Progress

**Reliability & Plugins**
- **[#41837](https://github.com/anthropics/claude-code/pull/41837)** — *feat(plugins): add arsenal-reliability* (CLOSED)
  - **Impact:** Adds 6 specialized skills for production-grade reliability patterns (e.g., circuit breakers, dead letter queues) to the LLM agent workflow.
  - **Tech:** Integrates libraries like `kavacha` for fail-fast mechanisms.

**Platform Fixes**
- **[#43563](https://github.com/anthropics/claude-code/pull/43563)** — *fix: normalize Windows paths in security guidance hook* (OPEN)
  - **Impact:** Fixes a security bug where Windows backslashes caused the guidance hook to miss `.github/workflows/` edits.
  - **Tech:** Normalizes path separators before security validation.

- **[#43559](https://github.com/anthropics/claude-code/pull/43559)** — *docs: update plugin install instructions* (OPEN)
  - **Impact:** Improves onboarding by aligning documentation with current recommended installation methods and fixing typos.

**Community & Open Source**
- **[#41447](https://github.com/anthropics/claude-code/pull/41447)** — *feat: open source claude code* (OPEN)
  - **Impact:** A massive (though likely symbolic) proposal referencing multiple closed tickets related to open-sourcing the core application.
  - **Context:** References issues #59, #456, #2846.

**Tooling**
- **[#43598](https://github.com/anthropics/claude-code/pull/43598)** — *Add upstream issue sync workflow* (OPEN)
  - **Impact:** Adds scripts to fetch and normalize upstream issues, improving community workflow management for triage.

## 5. Feature Request Trends

Based on the open issues and active discussions, the community is strongly advocating for:

1.  **Cost Transparency:** "Per-session" or "Per-prompt" usage meters. Users want to know exactly which prompt consumed how many tokens, rather than seeing a bulk aggregate.
2.  **UI Minimalism:** Options to hide "Desktop" elements. Specifically, the ability to run Claude Code solely from the Menu Bar (macOS) and toggle off the new "Companion/Buddy" avatar.
3.  **Enhanced Context Control:**
    *   **Git Worktree Support:** Proper CI monitoring in git worktrees (currently shows all zeros).
    *   **History Sync:** Accessing Claude.ai chat history/Projects via MCP from the CLI.
4.  **Multi-Account Management:** Switching between accounts on mobile/desktop without logging out (currently requested for mobile but implies a broader platform need).

## 6. Developer Pain Points

**1. The "Black Box" Billing Model**
The most significant pain point is the **usage meter**. "Max" plan users (20x tier) feel that their credits evaporate disproportionately to their perceived usage. There is a lack of trust in the displayed percentage, leading to demands for granular, line-item billing data in the CLI.

**2. "Bypass" Fatigue**
Developers utilizing automation are frustrated with the permission system. Even when `bypassPermissions` is configured or flags like `--dangerously-skip-permissions` are used, the tool intermittently reverts to prompting for confirmation. This breaks automated scripts and "flow state" development.

**3. Platform Parity Gaps**
Windows users continue to face stability issues that macOS users do not, specifically regarding the `Cowork` feature (VM service failures) and path handling in security hooks (backslashes vs. forward slashes).

**4. Silent Failures**
Features like `--channels` (Discord plugins) fail silently on paid plans. Users expect that if a feature is restricted, they should receive an actionable error message explaining *why* (e.g., "Requires Team Plan"), rather than an "ignored" message.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-05

## Today's Highlights
The Codex ecosystem is facing significant stability challenges following the recent `v0.118.0` release, with critical regressions reported regarding sandbox permissions on Linux and a 2x increase in token usage due to aggressive context compaction. Concurrently, the engineering team is actively advancing the architecture for real-time voice interactions by transitioning from WebSockets to WebRTC to improve audio performance.

## Latest Releases
**Rust Core v0.119.0-alpha Series**
Three rapid-fire alpha releases (`v0.119.0-alpha.9`, `.10`, and `.11`) were pushed today. While specific release notes are sparse in the feed, the rapid iteration suggests the team is urgently addressing regressions introduced in `v0.118.0` or preparing infrastructure for upcoming features.
*   [rust-v0.119.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.11)

## Hot Issues

### Critical Regressions & Bugs
1.  **[#16812 Context Compaction Regression](https://github.com/openai/codex/issues/16812)** 🔥
    *   **Issue:** Users upgrading to CLI `v0.118.0` report a "token usage explosion" due to context compaction triggering twice as frequently as in `v0.116.0`.
    *   **Impact:** Drastically increased costs and degraded performance for reasoning-heavy tasks (`gpt-5.3-codex`).
2.  **[#16790 Sandbox Failures on Linux](https://github.com/openai/codex/issues/16790)** 🔥
    *   **Issue:** `v0.118.0` regression where `bwrap` (sandbox) commands fail with "Permission denied" when trying to create files in `.codex`.
    *   **Impact:** Completely blocks workspace operations in sandboxed environments on Linux.
3.  **[#16402 Linux Write Regression](https://github.com/openai/codex/issues/16402)**
    *   **Issue:** Related to `v0.118.0`, sandbox write functionality appears broken on Linux distributions.
4.  **[#16231 High CPU Usage on macOS](https://github.com/openai/codex/issues/16231)**
    *   **Issue:** Extension `26.325.31654` causes excessive CPU usage and overheating on M5 Pro MacBook Pros.
5.  **[#14593 Burning Tokens Very Fast](https://github.com/openai/codex/issues/14593)**
    *   **Issue:** A long-standing, high-engagement thread (166+ upvotes) regarding excessive token consumption, likely exacerbated by the new context compaction logic.

### Functional & UX Pain Points
6.  **[#2952 Search @ .gitignore Exclusion](https://github.com/openai/codex/issues/2952)**
    *   **Issue:** File search via `@` cannot access files excluded by `.gitignore`, frustrating developers who need to reference config or build artifacts.
7.  **[#15764 Code Helper Performance](https://github.com/openai/codex/issues/15764)**
    *   **Issue:** The VS Code extension's renderer process exceeds 100% CPU when applying patches, a regression affecting recent versions.
8.  **[#8259 Markdown Table Formatting](https://github.com/openai/codex/issues/8259)**
    *   **Issue:** AI-generated Markdown tables are unreadable due to poor whitespace handling.
9.  **[#16088 WSL .codex File Pollution](https://github.com/openai/codex/issues/16088)**
    *   **Issue:** Running Codex in WSL creates empty `.codex` files in unexpected locations, cluttering the filesystem.
10. **[#13025 Project Config Ignored](https://github.com/openai/codex/issues/13025)**
    *   **Issue:** The Desktop App prioritizes global config (`~/.codex/config.toml`) over project-local MCP server configurations.

## Key PR Progress
**Architecture & Real-time**
1.  **[#16805, #16806, #16807, #16769: WebRTC Voice Stack](https://github.com/openai/codex/pull/16805)**
    *   A coordinated stack of 4 PRs aims to replace the realtime WebSocket transport with WebRTC, route audio through shared echo cancellation, and remove playback interruptions. This represents a significant overhaul of the voice interaction backend.
2.  **[#16814 Exec Server Surface Seams](https://github.com/openai/codex/pull/16814)**
    *   Adding startup payloads and "surface seams" for a new `exec-server`, suggesting a move towards a more modular execution architecture.
3.  **[#16804 MCP Migration Logic](https://github.com/openai/codex/pull/16804)**
    *   Automating the import of Claude's `mcpServers` config into Codex and managing cache invalidation for agents/skills.

**Fixes & Features**
4.  **[#16803 Fix Reasoning Summaries](https://github.com/openai/codex/pull/16803)**
    *   Addresses a panic where stream deltas arrived before an active item existed, ensuring reasoning summaries are displayed correctly in the TUI.
5.  **[#16795 Fix Ephemeral Turn Backfill](https://github.com/openai/codex/pull/16795)**
    *   Fixes a regression in `codex exec --ephemeral` that caused the app server to reject valid thread reads.
6.  **[#16810 Decode Local File Links](https://github.com/openai/codex/pull/16810)**
    *   Fixes rendering of local file links in the TUI, specifically handling percent-encoded paths and Unicode correctly.
7.  **[#16659 & suite: Analytics Metadata](https://github.com/openai/codex/pull/16659)**
    *   A stack of PRs adding detailed telemetry for token usage, steering metadata, and turn timestamps.

## Feature Request Trends
*   **Interactive CLI Enhancements:** Users are demanding TUI parity with the Desktop App, specifically requesting [Voice Transcription](https://github.com/openai/codex/issues/14630) and better handling of terminal resizing (scrollback rerendering).
*   **MCP & Agent Config:** There is a strong focus on improving how "external agent" configurations and MCP (Model Context Protocol) servers are imported and prioritized relative to local project settings.
*   **Long-term Memory:** A resurgence in requests for "adaptive memory" to stop the AI from repeating mistakes across sessions (Issue #8368).

## Developer Pain Points
*   **The "Alpha" Instability:** Developers running Business or Pro tiers are feeling the brunt of the `v0.118.x` regressions, specifically regarding sandboxing and file permissions on Linux/WSL.
*   **Resource Throttling:** High CPU usage and "token burning" remain top concerns. The community is actively voicing that efficiency is regressing rather than improving.
*   **Git Integration:** Persistent friction with Git operations—whether it's the `.gitignore` exclusion in search or the inability for the sandboxed agent to perform git ops in "Workspace write" mode.

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

Here is the **Charm Crush Community Digest** for 2026-04-05.

### 1. Today's Highlights
The Crush repository remains active with maintenance and feature expansion despite no new stable release in the last 24 hours. Key developments include a proposed migration to the `bytedance/sonic` library for significant JSON parsing performance improvements and the removal of remote research tools to simplify the codebase. Community discussion is currently focused on context management reliability and the expansion of supported LLM providers, specifically regarding GLM-5.1 and Avian.

### 2. Releases
*No new releases detected in the last 24 hours.*

### 3. Hot Issues

**[#2240: Crush clears the context losing all work](https://github.com/charmbracelet/crush/issues/2240)**
* **Status:** Open
* **Why it matters:** This is a critical data loss bug. Users report that during long, deep-code reviews (specifically triggering Opus 4.6 limits on Copilot), the agent clears its context and restarts the task from scratch, destroying the generated output.
* **Reaction:** High frustration from users regarding reliability during heavy sessions.

**[#2559: Chutes LLM List is Severely Outdated](https://github.com/charmbracelet/crush/issues/2559)**
* **Status:** Open
* **Why it matters:** Integration stability is impacted. The hardcoded model list for the Chutes provider is returning `model not found` errors for newer models like Kimi-K2-Instruct, preventing users from connecting to valid resources.

**[#824: Context limit not respected in requests](https://github.com/charmbracelet/crush/issues/824)**
* **Status:** Open
* **Why it matters:** A persistent configuration bug where `context_window` settings are ignored, leading to API failures and infinite request loops.
* **Reaction:** This issue has gathered 7 upvotes, indicating a widespread need for better context handling.

**[#2508: GLM-5.1 support](https://github.com/charmbracelet/crush/issues/2508)**
* **Status:** Closed
* **Why it matters:** Users are eager to utilize the latest GLM-5.1 model via the Z.ai coding plan.
* **Reaction:** Requested specifically for integration, indicating demand for diverse model support.

### 4. Key PR Progress

**[#2549: refactor: improve json parsing performance](https://github.com/charmbracelet/crush/pull/2549)**
* **Status:** Open
* **Description:** A refactoring effort to replace the standard library `json` package with `bytedance/sonic`. This move utilizes JIT compilation to speed up parsing, which is crucial for an AI tool processing large streams of token data.

**[#2557: [provider: avian] feat: add Avian as LLM provider](https://github.com/charmbracelet/crush/pull/2557)**
* **Status:** Open
* **Description:** Adds support for the Avian API, an OpenAI-compatible provider offering access to DeepSeek V3.2, Kimi K2.5, GLM-5, and MiniMax M2.5. This significantly expands the availability of high-context models (up to 1M context for MiniMax).

**[#2558: [area: tools] Remove remote research tools](https://github.com/charmbracelet/crush/pull/2558)**
* **Status:** Closed
* **Description:** Cleanup PR removing `agentic_fetch`, `web_fetch`, `web_search`, and `download` tools. This suggests a shift in architectural focus or a move to delegate these capabilities to plugins/extensions rather than the core toolset.

### 5. Feature Request Trends
*   **New Model Support:** Users are actively requesting support for the latest closed-source models, specifically GLM-5.1 and Kimi K2.5, as providers update their offerings faster than the client can keep up.
*   **Model List Management:** There is a trend of requests asking for more dynamic ways to update model lists, as hardcoded lists (like in Chutes) become obsolete quickly.

### 6. Developer Pain Points
*   **Context Instability:** The most significant pain point remains the tool's inability to reliably manage long contexts. Users are experiencing "clears" where the tool forgets the task, and configuration settings being ignored, leading to API failures.
*   **Model Availability:** Developers are frustrated by attempting to use models that exist in the wild (e.g., via Z.ai or Avian) but are not yet configured in the Crush client.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-05

## 1. Today's Highlights
The `gemini-cli` repository is currently seeing significant internal refactoring focused on **context management** and **process reliability**. While no new releases were published in the last 24 hours, maintainers are actively merging improvements to the **Episodic Context Manager** and addressing critical platform-specific bugs, including PTY resource leaks on Unix systems and execution failures on Windows.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
**1. [CLOSED] #3882: Automatically save chat history**
**Why it matters:** The top-voted community request (52 👍) has been closed. Users have heavily requested automatic local persistence of chat logs to mirror competitors like Claude Code.
**Community Reaction:** High enthusiasm; users want a reliable audit trail of their sessions without manual intervention.
[Link](https://github.com/google-gemini/gemini-cli/issues/3882)

**2. [OPEN] #22631: "Too Many Requests" loop (API Throttling)**
**Why it matters:** Users are reporting the CLI becomes unusable for days due to strict rate limiting, often occurring immediately after updates.
**Community Reaction:** Frustration is mounting (9 👍) as users are locked out of workflows despite having valid subscriptions.
[Link](https://github.com/google-gemini/gemini-cli/issues/22631)

**3. [OPEN] #24200: Agent appears "Stuck"**
**Why it matters:** Reliability concerns are rising. Users report the agent hanging on trivial prompts (e.g., "1+1") for days without a response.
**Community Reaction:** Indicates potential issues with the agent's orchestration layer or API gateway health.
[Link](https://github.com/google-gemini/gemini-cli/issues/24200)

**4. [OPEN] #22745: Assessing AST-aware file reads**
**Why it matters:** An internal deep dive into improving codebase context. Using Abstract Syntax Trees (AST) would allow the CLI to understand code structure better (e.g., method bounds) rather than treating files as raw text, potentially reducing token noise.
**Community Reaction:** Technical interest in how "code awareness" can improve accuracy.
[Link](https://github.com/google-gemini/gemini-cli/issues/22745)

**5. [OPEN] #24202: Text scrambled over SSH**
**Why it matters:** A critical regression for remote workflows. Users connecting via SSH to cloud environments experience garbled output, rendering the tool unusable on non-local Windows/Linux setups.
**Community Reaction:** Blocker for enterprise developers using cloud IDEs or remote dev containers.
[Link](https://github.com/google-gemini/gemini-cli/issues/24202)

**6. [OPEN] #23582: Subagents ignore Approval Modes**
**Why it matters:** Subagents are attempting actions (like "Plan Mode" or "Auto-Edit") that violate the user's active safety constraints, forcing the Policy Engine to block them repeatedly.
**Community Reaction:** Highlights friction in the multi-agent architecture where instructions don't align with user permissions.
[Link](https://github.com/google-gemini/gemini-cli/issues/23582)

**7. [OPEN] #24695: Plan Mode "Invalid argument"**
**Why it matters:** A fresh bug where `Plan Mode` fails to execute approved plans (e.g., creating a text file) with a generic "Request contains an invalid argument" error.
**Community Reaction:** Breaking trust in the `Plan Mode` workflow, which is supposed to ensure safety before execution.
[Link](https://github.com/google-gemini/gemini-cli/issues/24695)

**8. [OPEN] #22718: Unsafe object cloning**
**Why it matters:** The model frequently generates code that performs partial/unsafe clones of objects. This is a code-quality/safety issue where the AI writes technically valid but logically fragile TypeScript.
**Community Reaction:** Developers are cleaning up "AI spaghetti code" that doesn't fully implement types.
[Link](https://github.com/google-gemini/gemini-cli/issues/22863)

**9. [OPEN] #22819: Global vs. Project Memory Routing**
**Why it matters:** Refining the "Memory" feature to distinguish between user-specific preferences (Global) and project-specific context (Project).
**Community Reaction:** Necessary evolution for the Memory subagent to be truly useful across different workspaces.
[Link](https://github.com/google-gemini/gemini-cli/issues/22819)

**10. [OPEN] #24470: Scroll issues in long chats**
**Why it matters:** UI performance degradation in the TTY. Long chats cause screen flashing and jumping scrollbars, degrading the user experience during extended sessions.
**Community Reaction:** Affects the "feel" of the CLI, making it feel sluggish during deep work.
[Link](https://github.com/google-gemini/gemini-cli/issues/24470)

## 4. Key PR Progress
**1. [OPEN] #24643: Implement V0 Episodic Context Manager**
*   **Summary:** A major architectural shift. This PR rewrites context management from a monolithic string handler into a pipeline with processors for `HistorySquashing`, `ToolMasking`, and `SemanticCompression`.
*   **Impact:** Should improve memory usage and context relevancy in long conversations.
[Link](https://github.com/google-gemini/gemini-cli/pull/24643)

**2. [OPEN] #24694: Fix PTY resource leak**
*   **Summary:** Fixes a bug where force-closing the CLI (Ctrl+C) leaves zombie subprocesses (node-pty shells) occupying terminal slots.
*   **Impact:** Critical for system stability on macOS/Linux.
[Link](https://github.com/google-gemini/gemini-cli/pull/24694)

**3. [OPEN] #24653: Fix `bunx` execution on Windows**
*   **Summary:** Resolves a crash caused by the GNU `env -S` flag not being supported on Windows.
*   **Impact:** Restores usability for developers using the `bun` runtime on Windows.
[Link](https://github.com/google-gemini/gemini-cli/pull/24653)

**4. [OPEN] #24685: Fix binary detection for U+FFFD**
*   **Summary:** Corrects a false positive where files containing the Unicode replacement character (often found in Rust files) were flagged as binary and skipped.
*   **Impact:** Prevents crashes when reading valid source files.
[Link](https://github.com/google-gemini/gemini-cli/pull/24685)

**5. [OPEN] #20717: Add `/mcp remove` command**
*   **Summary:** Introduces a UI command to interactively remove MCP servers.
*   **Impact:** Improves configuration management for the Model Context Protocol.
[Link](https://github.com/google-gemini/gemini-cli/pull/20717)

**6. [OPEN] #21090: Add Sublime Text & Emacs editor support**
*   **Summary:** Expands built-in editor support beyond VS Code/Vim/Neovim.
*   **Impact:** Better integration for users preferring these specific editors.
[Link](https://github.com/google-gemini/gemini-cli/pull/21090)

**7. [OPEN] #24277: Dockerfile multi-stage build**
*   **Summary:** Fixes the Docker build process to be self-contained, removing the need for pre-built artifacts on the host.
*   **Impact:** Simplifies containerized usage for contributors and users.
[Link](https://github.com/google-gemini/gemini-cli/pull/24277)

**8. [OPEN] #23957: Aggregate context from BeforeModel hooks**
*   **Summary:** Improves the hook system by properly aggregating `additionalContext` from multiple plugins/hooks.
*   **Impact:** Enhances the extensibility platform for plugin developers.
[Link](https://github.com/google-gemini/gemini-cli/pull/23957)

**9. [OPEN] #18499: Add Voice Input (Pluggable)**
*   **Summary:** A massive effort to add native voice input using a pluggable backend (defaulting to Gemini, with Whisper support).
*   **Impact:** High-value feature for hands-free coding workflows.
[Link](https://github.com/google-gemini/gemini-cli/pull/18499)

**10. [OPEN] #20027: Add `/undo` command**
*   **Summary:** Implements a slash command to revert the last conversation turn.
*   **Impact:** Quality of life improvement for correcting mistakes quickly.
[Link](https://github.com/google-gemini/gemini-cli/pull/20027)

## 5. Feature Request Trends
Based on the issue and PR activity, the community is strongly driving towards:
1.  **State Persistence & History:** There is a massive demand for reliable chat history saving (Issue #3882) and undo capabilities (PR #20027).
2.  **Code Awareness (AST):** Users want the AI to understand code structure, not just text. Issues #22745 and #22746 discuss AST-aware mapping to improve context precision.
3.  **Memory Architecture:** Refining the "Memory" feature to intelligently route between global user preferences and specific project rules (Issues #22819, #22809).
4.  **Voice Input:** Significant community interest in voice-driven workflows (PR #18499).

## 6. Developer Pain Points
*   **API Rate Limiting:** Developers are frustrated by "Too Many Requests" errors that lock them out of the tool for 24 hours, often without clear cause (Issue #22631).
*   **Reliability/Stalling:** Reports of the agent getting stuck or timing out on simple requests are high-priority concerns (Issue #24200).
*   **Windows/SSH Compatibility:** The tool struggles with terminal rendering over SSH and shebang execution on Windows, making it less stable for remote or non-Unix developers (Issues #24202, #24653).
*   **Agent "Spaghetti Code":** The agent frequently generates unsafe or messy code (e.g., partial clones, random temp scripts) that requires cleanup (Issues #22863, #23571).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-05

## 1. Today's Highlights
**Version 1.0.18** has been released, introducing a "Critic" agent for experimental plan reviews and fixing a session resume picker bug. However, the release is shadowed by a surge in user-reported regressions, specifically concerning multi-device session management and the `--resume` functionality failing to detect new sessions.

## 2. Releases
**v1.0.18** (2026-04-04)
*   **Critic Agent:** A new experimental agent (available for Claude models) that uses a complementary model to review plans and complex implementations to catch errors early.
*   **Session Management:** Fixed a bug where the session resume picker did not correctly group sessions by branch and repository on first use.
*   **Hooks:** Added permissions support for the `preToolUse` hook.

## 3. Hot Issues

1.  **[Multi-device Session Regression (#2513)](https://github.com/github/copilot-cli/issues/2513)**
    *   **Impact:** Users report that logging in on a second device automatically logs out the first device.
    *   **Reaction:** A critical regression for developers working across multiple machines; behavior changed starting between v1.0.15 and v1.0.16.

2.  **[Resume Command Bug (#2510)](https://github.com/github/copilot-cli/issues/2510)**
    *   **Impact:** The `copilot --resume` command fails to list newly created sessions in version 1.0.17.
    *   **Reaction:** Highly disruptive to workflow as users cannot return to previous tasks immediately after starting a new one.

3.  **[Sudo Command Hangs (#1082)](https://github.com/github/copilot-cli/issues/1082)**
    *   **Impact:** CLI hangs indefinitely when commands require `sudo` privileges, failing to prompt for a password.
    *   **Reaction:** A significant usability blocker (7 upvotes) for system administration tasks.

4.  **[Alpine Linux Segfaults (#107)](https://github.com/github/copilot-cli/issues/107)**
    *   **Impact:** Tool calls cause segmentation faults on Alpine Linux (Docker).
    *   **Reaction:** Long-standing bug (12 comments) affecting containerized environments; marked as high effort but medium priority.

5.  **[Auto-Compaction Frustration (#2333)](https://github.com/github/copilot-cli/issues/2333)**
    *   **Impact:** Context is automatically compacted at 95% usage with no option to disable it.
    *   **Reaction:** Users want granular control over the context window rather than forced automation.

6.  **[Clipboard Support Request (#1276)](https://github.com/github/copilot-cli/issues/1276)**
    *   **Impact:** No native support for pasting images directly from the clipboard into prompts.
    *   **Reaction:** High demand (6 upvotes) for debugging visual UI bugs or logs via screenshots.

7.  **[Wayland Dependency Missing (#2511)](https://github.com/github/copilot-cli/issues/2511)**
    *   **Impact:** Copy actions fail silently on Ubuntu/Wayland due to missing `wl-copy` dependency check.
    *   **Reaction:** Affects users on modern Linux desktop environments; requires a manual dependency install to function.

8.  **[8-Minute Hang on Cache Miss (#1614)](https://github.com/github/copilot-cli/issues/1614)**
    *   **Impact:** Sessions hang for ~8 minutes after compaction if there is a prompt cache miss, with no user feedback.
    *   **Reaction:** Users report the CLI appears frozen, leading to force-quit attempts during long operations.

9.  **[System Prompt Parameter (#232)](https://github.com/github/copilot-cli/issues/232)**
    *   **Impact:** No way to pass system-level instructions via CLI flags (only repo-specific files).
    *   **Reaction:** Developers want more flexible control over agent behavior without editing repo files.

10. **[Authentication DNS Failures (#716)](https://github.com/github/copilot-cli/issues/716)**
    *   **Impact:** Authentication fails with `ENOTFOUND next-waitlist.azurewebsites.net`.
    *   **Reaction:** Network/configuration issue blocking initial setup for some users.

## 4. Key PR Progress
*No pull requests were updated or merged in the last 24 hours.*

## 5. Feature Request Trends
*   **Granular Context Control:** Users are increasingly requesting flags to toggle "auto-compaction" and manage the context window manually to avoid unexpected truncations.
*   **Rich Media Input:** There is a strong push for native image-pasting support from the system clipboard to facilitate visual debugging.
*   **Global Configuration:** Developers are asking for CLI-level overrides (like `--system-prompt`) to avoid maintaining configuration files in every repository.

## 6. Developer Pain Points
*   **Environment Fragility:** The CLI is struggling with diverse environments, specifically **Alpine Linux** (segfaults) and **Wayland** (missing clipboard dependencies).
*   **Authentication & Session State:** Recent releases (v1.0.15+) appear to have broken session persistence and multi-device authentication, leading to frequent logouts and lost state.
*   **Sudo Privileges:** The inability to handle `sudo` password prompts gracefully creates a "hard stop" in automation workflows, forcing users to abandon the CLI for admin tasks.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-04-05

## **Today's Highlights**

The community is actively debating the stability and extensibility of `kimi-cli`, balancing new feature requests with urgent stability fixes. A significant architectural discussion has emerged via a proposal to rewrite the entire codebase from Python to **Bun + TypeScript + React Ink** to resolve performance and UI rendering issues. Concurrently, contributors are delivering quality-of-life improvements, such as a dedicated `/btw` command for side-questions and diagnostic logging for easier debugging.

## **Releases**

*No new releases published in the last 24 hours.*

---

## **Hot Issues**

**1. [#1282 Enhancement: Remote Control - Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282)**
*   **Impact:** High demand for mobility.
*   **Summary:** Users want the ability to access and control their active local CLI sessions from a phone or browser. This addresses the developer workflow of stepping away from the desk without losing terminal context.
*   **Reaction:** Community interest (👍 1), acknowledging the complexity of maintaining local environment security remotely.

**2. [#1755 Enhancement: View complete subagent interaction records](https://github.com/MoonshotAI/kimi-cli/issues/1755)**
*   **Impact:** Observability & Debugging.
*   **Summary:** Developers want full visibility into the "thought process" and prompts passed between the main agent and subagents, not just the tool calls. Currently, users have to guess the subagent's intent based on tools used.
*   **Reaction:** Request for a toggle shortcut to switch between clean and verbose modes.

**3. [#1757 Bug: Ctrl+V crashes with non-text clipboard data](https://github.com/MoonshotAI/kimi-cli/issues/1757)**
*   **Impact:** Stability / UX.
*   **Summary:** Pasting screenshots or rich media into the terminal causes a `TypeError` crash.
*   **Reaction:** Fix is already in progress (PR #1758), highlighting rapid community response to critical UX bugs.

**4. [#1760 Feature Request: Add TPS (Tokens Per Second) meter](https://github.com/MoonshotAI/kimi-cli/issues/1760)**
*   **Impact:** Performance Monitoring.
*   **Summary:** Users lack visibility into generation speed. Requests a `/tps` command and a status bar indicator.
*   **Reaction:** Implementation PR (#1759) was opened almost immediately after the issue.

**5. [#1754 Bug: Character encoding issues (Garbled text)](https://github.com/MoonshotAI/kimi-cli/issues/1754)**
*   **Impact:** Usability (Non-English users).
*   **Summary:** Users on macOS are reporting garbled characters in the CLI output, likely related to Unicode/UTF-8 handling in the terminal UI.

**6. [#1327 Enhancement: More Steps per turn by default](https://github.com/MoonshotAI/kimi-cli/issues/1327)**
*   **Impact:** Workflow interruption.
*   **Summary:** The default step limit (100) is too low for complex tasks, often stopping when context is only ~34% used. Users have to manually configure this to avoid interruptions.
*   **Reaction:** Calls for a more intelligent default or dynamic step allocation.

**7. [#1729 Enhancement: Custom Session Naming](https://github.com/MoonshotAI/kimi-cli/issues/1729)**
*   **Impact:** Session Management.
*   **Summary:** Currently, sessions are auto-titled. Users want manual renaming capabilities to better organize projects in the `/sessions` list.
*   **Reaction:** This issue was recently closed, suggesting a fix may be incoming or already implemented.

**8. [#796 & #1155 Cross-cutting: API Compatibility](https://github.com/MoonshotAI/kimi-cli/pull/1749)**
*   **Impact:** Extensibility.
*   **Summary:** Addressed via PR #1749. Issues involved filtering unsupported content types (Video/Audio) for OpenAI-compatible APIs and adding support for `reasoning_key` to extract thinking content.
*   **Reaction:** Technical refinement for users connecting Kimi CLI to non-Kimi backends.

---

## **Key PR Progress**

**1. [#1743 Feature: Add `/btw` side question command](https://github.com/MoonshotAI/kimi-cli/pull/1743)**
*   **Status:** Open
*   **Detail:** Introduces a `/btw <question>` slash command. This allows users to ask quick questions (e.g., "Refactor this function") without derailing the main agent's current task chain. It features unified input routing and dual-layer rendering.

**2. [#1756 Feature: Diagnostic logging & Export bundling](https://github.com/MoonshotAI/kimi-cli/pull/1756)**
*   **Status:** Open
*   **Detail:** Adds `logger.warning` and `logger.error` calls at 25+ key error paths. Crucially, it bundles these logs into the `kimi export` output, allowing developers to debug crashes effectively.

**3. [#1759 Feature: TPS Meter Display](https://github.com/MoonshotAI/kimi-cli/pull/1759)**
*   **Status:** Open
*   **Detail:** Implements the request from Issue #1760. Adds `show_tps_meter` config and a `/tps` command to show tokens-per-second in the status bar.

**4. [#1758 Fix: Prevent Ctrl+V crash on non-text data](https://github.com/MoonshotAI/kimi-cli/pull/1758)**
*   **Status:** Open
*   **Detail:** Provides a two-layer fix for the clipboard `TypeError`. It likely sanitizes input before processing, preventing the app from crashing when users paste images.

**5. [#1749 Fix: Filter unsupported content & Add reasoning_key](https://github.com/MoonshotAI/kimi-cli/pull/1749)**
*   **Status:** Open
*   **Detail:** Improves compatibility with OpenAI-compatible APIs by stripping unsupported media types and adding config support for `reasoning_key` (useful for reasoning models like DeepSeek/R1).

**6. [#1709 Fix: Align inline highlight offsets with tab-expanded text](https://github.com/MoonshotAI/kimi-cli/pull/1709)**
*   **Status:** Open
*   **Detail:** Fixes a visual bug where code diffs/highlights were misaligned if the source code used tabs instead of spaces.

**7. [#1707 Refactor: Rewrite Python to Bun + TypeScript + React Ink](https://github.com/MoonshotAI/kimi-cli/pull/1707)**
*   **Status:** Open
*   **Detail:** **Major Architectural Proposal.** This PR claims the Python implementation is a "complete failure" and proposes a rewrite using **Bun** and **React Ink**. It claims ~32k lines of TypeScript/TSX already written with full test coverage.
*   **Note:** This is a controversial but high-activity item, potentially signaling a future v2.0 direction.

---

## **Feature Request Trends**

1.  **Observability & Debugging:** Users want "X-ray vision" into the agent's brain.
    *   *Desired Features:* Subagent thought logs (Issue #1755), detailed reasoning traces, and better error logging (PR #1756).
2.  **Workflow Continuity:** Reducing friction between different devices and tasks.
    *   *Desired Features:* Remote session control (Issue #1282) and "side-channel" questioning via `/btw` (PR #1743) to avoid losing flow.
3.  **Performance Feedback:** Real-time metrics are becoming standard expectations.
    *   *Desired Features:* TPS meters (Issue #1760) and context usage visualization.

## **Developer Pain Points**

*   **UI Stability & Rendering:** Frequent reports of garbled text (Issue #1754) and misaligned diffs (PR #1709) suggest the current terminal UI stack is struggling with complex rendering, fueling the rewrite discussion in PR #1707.
*   **Crashes on Input:** Simple actions like pasting (Ctrl+V) causing crashes (Issue #1757) indicate a lack of defensive programming for input sanitization.
*   **Hard Limits:** Arbitrary limits like "Max steps: 100" (Issue #1327) are frustrating users who know their context window still has capacity.
*   **Opinionated Defaults:** Users are pushing back against defaults that hide useful information (e.g., subagent activity) or stop execution too early, demanding more configuration control.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-05

**Today's Highlights**
The OpenCode community released **v1.3.15** today, addressing critical installation failures on Windows related to `node-gyp` compilation paths. Discussion is dominated by a significant bug report regarding aggressive timeouts in v1.2.25 for local LLMs and a "Memory Megathread" launched by the core team to tackle heap issues.

---

## 🚀 Releases
*   **v1.3.15**: A hotfix targeting Windows environments.
    *   **Core Fix**: Prevents npm installation failures caused by Arborist interacting with the compiled binary's `node-gyp` path.
    *   **Contributor**: Thanks to @Yuxin-Dong for removing redundant code.
*   **v1.3.14** (Recap):
    *   Restored git-backed review modes.
    *   Fixed revert chain snapshot states.
    *   Added macOS managed preferences for MDM.

---

## 🔥 Hot Issues

1.  **[#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (👍 17)
    *   **Why it matters**: The core team is centralizing efforts to fix scattered memory leak reports. They are explicitly requesting heap snapshots from users rather than AI-generated solutions.
    *   **Reaction**: High community engagement; users are eager for a fix to resource exhaustion.

2.  **[#17307 1.2.25 Timeouts too aggressive for local models](https://github.com/anomalyco/opencode/issues/17307)** (👍 9)
    *   **Why it matters**: Users running large context local models (100k+) are hitting `SSE read timed out` errors after just 2 minutes.
    *   **Reaction**: Affects local development workflows significantly; users are manually patching timeouts.

3.  **[#21032 oh-my-openagent broken on 1.3.14](https://github.com/anomalyco/opencode/issues/21032)** (👍 5)
    *   **Why it matters**: A regression in v1.3.14 prevents the `oh-my-openagent` plugin from registering commands.
    *   **Reaction**: Users experiencing "silent failures" where the plugin loads but functions are missing.

4.  **[#531 Support HTTP_PROXY & HTTPS_PROXY](https://github.com/anomalyco/opencode/issues/531)** (👍 24)
    *   **Why it matters**: Enterprise users behind corporate firewalls are struggling to connect to LLM APIs without native proxy support.
    *   **Reaction**: Long-standing request with high community demand (38 comments).

5.  **[#16499 Feature: Add GPT-5.4 fast mode (/fast)](https://github.com/anomalyco/opencode/issues/16499)** (👍 62)
    *   **Why it matters**: Users want access to the new "fast" thinking mode introduced in GPT-5.4 directly within the TUI.
    *   **Reaction**: Extremely high upvote count indicates strong desire for this model control.

6.  **[#16499 & #5374 Token Performance Metrics](https://github.com/anomalyco/opencode/issues/5374)** (👍 43)
    *   **Why it matters**: Developers want to see real-time "Tokens/Second" (TPS) metrics to benchmark provider performance.
    *   **Reaction**: Multiple duplicate issues suggest this is a priority for power users.

7.  **[#20650 Kimi k2.5 tool calling issues](https://github.com/anomalyco/opencode/issues/20650)** (👍 2)
    *   **Why it matters**: Integration with the Kimi k2.5 model is broken, generating invalid JSON and calling non-existent tools.
    *   **Reaction**: Users of this specific provider are unable to work effectively.

8.  **[#20937 Double spending / half reporting credits](https://github.com/anomalyco/opencode/issues/20937)** (👍 0)
    *   **Why it matters**: User reports spending double the amount of OpenRouter credits compared to what OpenCode reports.
    *   **Reaction**: Critical billing accuracy concern for API users.

9.  **[#4406 Why must read tool execute before edit?](https://github.com/anomalyco/opencode/issues/4406)** (👍 0)
    *   **Why it matters**: Users question the efficiency of re-reading files created by AI that are already in context.
    *   **Reaction**: Discussion on balancing context window usage with tool accuracy.

10. **[#13819 Deno runtime as alternative/complement to Bun](https://github.com/anomalyco/opencode/issues/13819)** (👍 3)
    *   **Why it matters**: Proposal to support Deno 2.x (now npm compatible) as a runtime, highlighting security benefits.
    *   **Reaction**: Technical discussion on future infrastructure improvements.

---

## 🛠️ Key PR Progress

1.  **[#21056 Fix DB migrating on every run](https://github.com/anomalyco/opencode/pull/21056)**
    *   **Status**: Open
    *   **Impact**: Fixes a bug where non-latest channels (like Nix installs) re-ran the SQLite migration on every launch, significantly slowing startup.

2.  **[#21046 Preserve agent identity across compaction](https://github.com/anomalyco/opencode/pull/21046)**
    *   **Status**: Open
    *   **Impact**: Prevents specialized agents (reviewers, planners) from losing their system prompt/identity after the context window compacts.

3.  **[#21052 Refactor tool system](https://github.com/anomalyco/opencode/pull/21052)**
    *   **Status**: Open
    *   **Impact**: Major internal refactoring to remove agent context from tool initialization, making tools more predictable and consistent.

4.  **[#21017 Refactor: Build task tool from agent services](https://github.com/anomalyco/opencode/pull/21017)**
    *   **Status**: Open
    *   **Impact**: Moves the task tool to `Tool.defineEffect`, improving separation of concerns and testability.

5.  **[#13854 Fix TUI streaming markdown after completion](https://github.com/anomalyco/opencode/pull/13854)**
    *   **Status**: Open
    *   **Impact**: Fixes a visual bug where table rows were skipped in completed messages because the streaming state was incorrect.

6.  **[#18767 Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)**
    *   **Status**: Open
    *   **Impact**: Adds touch-friendly affordances to the desktop app, improving the experience on tablets and touch-enabled laptops.

7.  **[#4604 Restrict formatting to changed range](https://github.com/anomalyco/opencode/pull/4604)**
    *   **Status**: Open
    *   **Impact**: Improves the Edit tool so `clang-format` only reformats the specific lines changed, rather than the whole file.

8.  **[#18007 Session.start lifecycle hook](https://github.com/anomalyco/opencode/pull/18007)**
    *   **Status**: Open
    *   **Impact**: Adds a new plugin hook triggered on session start, resume, or compaction, allowing plugins to react to session changes.

9.  **[#19540 Disable sticky scroll when user scrolls up](https://github.com/anomalyco/opencode/pull/19540)**
    *   **Status**: Open
    *   **Impact**: Fixes a TUI annoyance where reading history was interrupted by new messages auto-scrolling the view.

10. **[#13860 GitHub Enterprise Server Support](https://github.com/anomalyco/opencode/pull/13860)**
    *   **Status**: Open
    *   **Impact**: Enables the GitHub Action to work with GitHub Enterprise Server (GHES) by respecting `GITHUB_SERVER_URL`.

---

## 📊 Feature Request Trends

*   **Observability**: There is a strong surge in requests for **performance metrics** (Tokens/sec, TPS) and **cost tracking** (fixing double reporting).
*   **Context Management**: Users are frustrated by **context compaction** side effects, specifically the loss of agent identity and the inability to inject context mid-stream.
*   **Model Controls**: Requests are emerging for new model-specific features, such as GPT-5.4 `/fast` mode and disabling specific models within providers.

---

## 😤 Developer Pain Points

*   **Platform Instability**: The **Windows** experience remains rough, with issues ranging from "nothing works on fresh install" to npm build failures in v1.3.15.
*   **Timeouts**: Local model users are reporting that the default timeouts are too short for larger context windows, forcing manual config hacks.
*   **Plugin Ecosystem**: A regression in v1.3.14 broke `oh-my-openagent`, highlighting fragility in the plugin API.
*   **Database Performance**: Users on alternative installs (Nix, non-standard channels) are facing severe slowdowns due to repeated migrations.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-05

## 1. Today's Highlights
The Qwen Code repository is currently undergoing a significant architectural evolution focused on **Agent Orchestration** and **Memory Management**. Recent Pull Requests introduce advanced features like **"Agent Teams"** for parallel task execution and **Adaptive Token Escalation** to optimize GPU concurrency. While development is active, the latest nightly build (`v0.14.1-nightly`) failed to deploy, and users are reporting UI regressions in the VS Code extension following the v0.14.0 update.

## 2. Releases
*No new stable releases in the last 24 hours.*
*   **Nightly Build Alert:** The release workflow for `v0.14.1-nightly.20260404` failed to complete. Users are advised to check the [Actions Run Log](https://github.com/QwenLM/qwen-code/actions/runs/23966786452) for details or stick to the current stable version while the pipeline is fixed.

## 3. Hot Issues
1.  **[Agent Teams Feature Request](https://github.com/QwenLM/qwen-code/issues/2886)**
    *   *Summary:* Users are eager for the "Agent Team" feature seen in recent PRs, allowing the lead agent to coordinate parallel sub-agents.
    *   *Impact:* Addresses the need for faster, parallelized processing of complex tasks.

2.  **[Clipboard Paste Regression on Linux](https://github.com/QwenLM/qwen-code/issues/2885)**
    *   *Summary:* Critical bug where `Ctrl+V` for image pasting (clipboard) is broken in CLI v0.14.0 on Linux/Wayland.
    *   *Impact:* High. Breaks core workflow for users relying on visual input via the TUI.

3.  **[Git Commit Attribution Spam](https://github.com/QwenLM/qwen-code/issues/2899)**
    *   *Summary:* Qwen Code is forcing a `Co-authored-by: Qwen-Coder` trailer into *every* git commit without consent.
    *   *Impact:* Users are frustrated that the AI is appearing as a contributor in their GitHub history, raising concerns about repository cleanliness.

4.  **[Image Paste on Windows](https://github.com/QwenLM/qwen-code/issues/2605)**
    *   *Summary:* Feature request to enable pasting files/images directly from the clipboard in the Windows CMD.
    *   *Impact:* Quality of life improvement for Windows users who currently have to type out full file paths.

5.  **[LSP Support](https://github.com/QwenLM/qwen-code/issues/1514)**
    *   *Summary:* Request for Language Server Protocol (LSP) support to improve code navigation and agent accuracy.
    *   *Impact:* Strategic. Adoption of LSP would significantly close the gap with competitors like Cursor and Claude Code.

6.  **[VS Code Chat Scrolling Bug](https://github.com/QwenLM/qwen-code/issues/2883)**
    *   *Summary:* Users cannot drag the scrollbar with the mouse when the chat input is at the bottom.
    *   *Impact:* UI/UX frustration in the VS Code extension.

7.  **[Token Killer Plugin](https://github.com/QwenLM/qwen-code/issues/2880)**
    *   *Summary:* Request for a plugin to integrate tools like Rust Token Killer to reduce context pollution and costs.
    *   *Impact:* Performance optimization for large codebases.

8.  **[Configurable TUI Colors](https://github.com/QwenLM/qwen-code/issues/2877)**
    *   *Summary:* The dark blue "thinking" color has low contrast on black backgrounds; users want to configure color themes.
    *   *Impact:* Accessibility and visual comfort in CLI mode.

9.  **[WeChat Interface Upgrade](https://github.com/QwenLM/qwen-code/issues/2882)**
    *   *Summary:* Login via WeChat is failing with an "upgrade interface" message.
    *   *Impact:* Blocks access for users relying on WeChat authentication.

10. **[Thinking Depth Control](https://github.com/QwenLM/qwen-code/issues/2876)**
    *   *Summary:* Users want to adjust "thinking depth" manually, noting the web interface thinks more deeply than the VS Code plugin.
    *   *Impact:* Control over AI reasoning quality and token usage.

## 4. Key PR Progress
1.  **[feat(core): Agent Team (Parallel Coordination)](https://github.com/QwenLM/qwen-code/pull/2886)**
    *   Adds an experimental "Agent Team" feature allowing the main agent to spawn sub-agents to work on tasks in parallel. A major step toward multi-agent coding workflows.

2.  **[feat(core): Adaptive Output Token Escalation](https://github.com/QwenLM/qwen-code/pull/2898)**
    *   Optimizes GPU usage by defaulting to an 8K output limit and automatically escalating to 64K only if truncation occurs. This should significantly increase server concurrency.

3.  **[feat(core): Thinking Block Retention](https://github.com/QwenLM/qwen-code/pull/2897)**
    *   Improves reasoning coherence by retaining the model's internal "thinking" blocks across turns rather than stripping them, while implementing idle cleanup to manage memory.

4.  **[feat(core): Intelligent Tool Parallelism](https://github.com/QwenLM/qwen-code/pull/2864)**
    *   The tool execution engine now batches read-only operations (like `grep` or `cat`) to run in parallel, while detecting "unsafe" commands (like `git push`) to run serially.

5.  **[feat(cli): Queue Input Editing](https://github.com/QwenLM/qwen-code/pull/2871)**
    *   Adds a UX improvement allowing users to press the **Up arrow** to edit queued messages before they are processed, reducing wasted turns on typos.

6.  **[feat(prompt): Dangerous Actions Guidance](https://github.com/QwenLM/qwen-code/pull/2889)**
    *   Updates the system prompt to include layered safety rules for destructive operations (e.g., `DROP TABLE`, `rm -rf`), requiring explicit user confirmation logic for high-risk actions.

7.  **[feat(cli): Path Auto-Completion](https://github.com/QwenLM/qwen-code/pull/2879)**
    *   Implements file/directory path completion for the terminal input (similar to Claude Code), activating when users type `/`, `./`, or `~`.

8.  **[fix(permissions): Env-Prefixed Commands](https://github.com/QwenLM/qwen-code/pull/2850)**
    *   Fixes a bug where shell commands with environment variables (e.g., `PYTHONPATH=... python script.py`) failed to match saved permission rules, causing repeated prompt spam.

9.  **[fix(cli): Vim Mode Shortcuts](https://github.com/QwenLM/qwen-code/pull/2884)**
    *   Restores the `?` shortcut functionality in Vim Normal Mode, which was previously being swallowed by the input handler.

10. **[refactor(tools): Remove Duplicate Proxy Setup](https://github.com/QwenLM/qwen-code/pull/2888)**
    *   Code cleanup removing redundant proxy configuration in `WebFetchTool`, as the global dispatcher is already set in the Config constructor.

## 5. Feature Request Trends
*   **Multi-Agent Systems:** There is a clear trend toward requesting features that allow the AI to handle multiple tasks simultaneously (Agent Teams) or coordinate specialized sub-agents.
*   **Environment Awareness:** Users are asking for better integration with the development environment, specifically **LSP support** for code navigation and **Token Killer** plugins to manage large context windows efficiently.
*   **UI Customization:** A strong demand for better visual control, specifically regarding **TUI color themes** and **thinking depth** adjustments.

## 6. Developer Pain Points
*   **Update Instability:** The `v0.14.0` release appears to have introduced regressions, specifically breaking **clipboard pasting on Linux** and causing **UI layout bugs** in VS Code (tabs expanding infinitely).
*   **Git Hygiene:** Developers are unhappy with Qwen Code inserting itself into git commits via the `Co-authored-by` trailer, viewing it as noise in their project history.
*   **Platform Inconsistency:** Issues regarding **WeChat login** and **Windows CMD** paste support highlight fragmentation in the experience across different operating systems and authentication methods.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*