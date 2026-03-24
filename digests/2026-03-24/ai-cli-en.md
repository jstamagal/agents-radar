# AI CLI Tools Community Digest 2026-03-24

> Generated: 2026-03-24 00:09 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Report — 2026-03-24

## 1. Ecosystem Overview
The AI CLI tools ecosystem is currently undergoing a turbulent phase characterized by **feature innovation outpacing stability**. The dominant trend today is the rush toward **Multi-Agent Orchestration**, with major players like Kimi, OpenAI, and Claude releasing "Cowork" or "Subagent" features that promise autonomous task execution but are currently plagued by context-awareness bugs and memory leaks. **Model Context Protocol (MCP)** support has effectively become a standard requirement, yet fragmentation in implementation (discovery mechanisms, authentication, and policy enforcement) is causing significant user friction. Simultaneously, a widespread **"Token Drain" anxiety** is affecting users of OpenAI, Claude, and OpenCode, indicating that the industry has not yet solved the cost-efficiency equation for high-agency coding agents.

## 2. Activity Comparison

| Tool | Issues (Discussed) | PRs (Merged/Active) | Release Status | Stability Trend |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | High (10) | High (10) | **Hotfix/Regressions** (v2.1.81 issues) | 🔴 **Critical** |
| **OpenAI Codex** | High (10) | High (10) | **Rapid Alpha** (v0.117.0-alpha) | 🟡 **Degraded** |
| **GitHub Copilot** | Medium (10) | Medium (5) | **Stable** (v1.0.11) | 🟢 **Stable** |
| **Gemini CLI** | Medium (10) | High (10) | **Nightly** (v0.36.0-nightly) | 🟢 **Improving** |
| **Kimi Code** | Low (4) | High (7) | **Feature Release** (v1.25.0) | 🟢 **Iterating** |
| **OpenCode** | High (10) | High (10) | **Silent** (No release) | 🔴 **Fragile** |
| **Qwen Code** | Medium (5) | N/A | **Stable** (v0.13.0) | 🟢 **Stabilizing** |

## 3. Shared Feature Directions

**A. Enterprise Multi-Tenancy & Identity Management**
*   **Tools:** Claude Code, GitHub Copilot CLI, OpenCode.
*   **Specific Needs:** Users are demanding "Multiple Connector Accounts" to segregate development and production environments (e.g., AWS Dev vs. Prod). There is also a push for **OAuth support for MCP servers** (Copilot, OpenCode) to facilitate secure, enterprise-grade access to external tools like Figma or Atlassian without managing raw API keys.

**B. Multi-Agent & Orchestration Maturity**
*   **Tools:** Kimi Code, OpenAI Codex, Gemini CLI, Claude Code.
*   **Specific Needs:** The focus has shifted from single-pass generation to persistent workflows.
    *   **Kimi** introduced `/loop` for recurring tasks.
    *   **Gemini** is prioritizing "Plan Mode" UX and fixing subagent awareness of approval modes.
    *   **Claude** and **OpenAI** are seeing heavy engagement on "Cowork" and orchestration plugins, with users requesting better control over these autonomous agents.

**C. Standardization & Hygiene**
*   **Tools:** Claude Code, GitHub Copilot CLI, Gemini CLI.
*   **Specific Needs:**
    *   **XDG Base Directory Support** (Linux) is a top request for Claude Code users.
    *   **Configuration Pollution** is a shared pain point, with users wanting better isolation between global and project-specific settings.
    *   **Plugin Standardization**: Both Gemini (Open Plugin `plugin.json`) and Copilot (Skills/Tools discovery) are actively working on unifying how extensions are discovered and managed.

## 4. Differentiation Analysis

| Tool | Technical Focus | Target User | Differentiation Strategy |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **Hybrid Architecture** | Power Users / Serious Devs | **System-level Integration.** Unlike competitors, it runs as a local server/agent, allowing for deep IDE integration and complex "Cowork" multi-agent flows. |
| **OpenAI Codex** | **Language Interop** | Rust / Polyglot Shops | **Raw Speed.** Written in Rust, it targets maximum performance. The focus is on the "Wire" protocol and low-level streaming efficiency. |
| **GitHub Copilot CLI** | **Monorepo Integration** | Enterprise Teams | **Org Policy & Governance.** Unique focus on hierarchical config discovery (Monorepo support) and strict enforcement of organizational MCP server allowlists. |
| **Gemini CLI** | **Open Source Rigor** | OSS Contributors | **Evals & GSoC.** Positions itself as the tool for *building* AI tools. Heavy focus on behavioral evaluations, AST-aware reading, and memory routing. |
| **Kimi Code** | **Protocol Innovation** | Automation Enthusiasts | **Wire 1.6 Protocol.** High focus on standardizing the communication layer between agents and the UI (e.g., `/loop` scheduling, Web UI approvals). |
| **OpenCode** | **Provider Agnostic** | Cost-conscious Freelancers | **Model Routing.** Focuses on bridging gaps between providers (Anthropic, Poe, OpenAI) to mitigate downtime and optimize costs. |
| **Qwen Code** | **Visual Companion** | VSCode Native Users | **ACP Integration.** Deep reliance on the Abstract Code Protocol (ACP) for IDE companion features rather than pure terminal usage. |

## 5. Community Momentum & Maturity

*   **Most Active / Volatile:** **Claude Code** and **OpenAI Codex**.
    *   These communities are the most vocal but are facing **stability crises**. High issue volumes regarding regressions (OAuth crashes, token drains) suggest they are pushing updates faster than they can QA.
*   **Rapidly Iterating:** **Kimi Code**.
    *   Successfully shipped a major feature update (v1.25.0 Plugins) with significant internal refactoring, showing strong engineering velocity despite being a younger player.
*   **Maturing:** **Gemini CLI** and **GitHub Copilot CLI**.
    *   **Gemini** is moving from "Feature Add" to "Polish" (fixing memory leaks, Ctrl+C UX).
    *   **Copilot** has reached v1.0 stability, focusing on edge cases (Monorepos) rather than core functionality.
*   **Struggling:** **OpenCode**.
    *   Facing significant authentication breakdowns with major providers (Anthropic) and legal/branding hurdles, creating user uncertainty despite high feature output.

## 6. Trend Signals

*   **The "Background Job" Pattern:** Users are no longer satisfied with synchronous conversations. The success of Kimi's `/loop`, Copilot's backgrounded sessions, and Claude's local server mode indicates a shift toward **asynchronous, long-running AI agents** that act like background services rather than chat bots.
*   **Token Economy Anxiety:** The sheer volume of reports regarding "mysterious usage spikes" across OpenAI, Claude, and OpenCode suggests that **deterministic usage metering** is the next major battleground. Developers are losing trust in black-box usage calculations.
*   **Sandboxing vs. Utility Tension:** A clear trade-off is emerging. Tools are hardening security (Protected directories, MCP strictness, macOS Sandboxing), which is breaking "Power User" workflows that rely on scripted/dangerous permissions. The "hacky workaround" is becoming a standard part of the AI CLI developer experience.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Data as of March 24, 2026
**Repository:** anthropics/skills (Official Skills Collection)

---

## 1. Top Skills Ranking

Based on the repository data, the following Skill proposals have generated the most significant engagement and discussion within the community.

### 🟧 Document Typography Quality Control
**[PR #514](https://github.com/anthropics/skills/pull/514)** | Status: Open | Author: PGTBoos
*   **Functionality:** Solves "orphan" words and "widow" paragraphs in AI-generated documents to ensure professional typographic standards.
*   **Why it's trending:** Addresses a universal friction point—AI often produces visually unpolished text that requires manual cleanup. This is one of the most recent high-engagement proposals.

### 🟦 Skill Quality & Security Analyzers (Meta-Skills)
**[PR #83](https://github.com/anthropics/skills/pull/83)** | Status: Open | Author: eovidiu
*   **Functionality:** Two meta-skills that audit other Skills for structure, documentation quality, and security compliance.
*   **Why it's trending:** Represents a "community self-governance" trend. As the number of skills grows, tools to validate them are becoming high-priority.

### 🟨 Frontend Design Clarity
**[PR #210](https://github.com/anthropics/skills/pull/210)** | Status: Open | Author: justinwetch
*   **Functionality:** A revision of the `frontend-design` skill to ensure instructions are actionable and coherent for Claude.
*   **Why it's trending:** Focuses on "prompt engineering" optimization—making sure Skills give instructions the AI can actually follow without hallucinations.

### 🟩 SAP-RPT-1-OSS Predictor
**[PR #181](https://github.com/anthropics/skills/pull/181)** | Status: Open | Author: amitlals
*   **Functionality:** Integrates SAP’s open-source tabular foundation model for predictive analytics on business data.
*   **Why it's trending:** Signals a major push into **Enterprise/ERP integration**, moving beyond general coding into specific business intelligence workflows.

### 🟪 Shodh-Memory (Persistent Context)
**[PR #154](https://github.com/anthropics/skills/pull/154)** | Status: Open | Author: varun29ankuS
*   **Functionality:** A persistent memory system allowing AI agents to maintain context across different conversations/sessions.
*   **Why it's trending:** Tackles the "context window" limitation, a core technical hurdle for long-term agent workflows.

### 🟦 Session-Memory (Context Compaction)
**[PR #629](https://github.com/anthropics/skills/pull/629)** | Status: Open | Author: Lordanakun
*   **Functionality:** Preserves technical facts during context compaction events to prevent data loss during long coding sessions.
*   **Why it's trending:** Complements the "Memory" trend, specifically addressing the stability of data during Claude's internal "compaction" processes.

---

## 2. Community Demand Trends

Analyzing the **Issues** tracker reveals distinct gaps users are trying to fill:

*   **Memory & Context Persistence (High Demand)**
    Users are aggressively requesting skills that help Claude "remember" things across sessions. The issues surrounding `session-memory` and `shodh-memory` indicate that the transient nature of the context window is the #1 pain point for power users.

*   **Security & Trust Boundaries**
    **Issue #492** (Security: Namespace abuse) highlights a fear that community skills might impersonate official ones. There is a growing demand for "Security Analyzer" skills (as seen in PR #83) to verify that a skill isn't over-permissioned.

*   **Better Developer Experience (DX) / Tooling**
    **Issue #556** (run_eval.py bug) and **Issue #509** (Contributing.md) show the community is trying to professionalize the development process. Users want better tooling to *test* and *validate* skills before deploying them.

*   **Enterprise Integration**
    Requests for SAP (PR #181) and Bedrock (Issue #29) suggest a shift from "toy" scripts to serious enterprise backend connectors.

---

## 3. High-Potential Pending Skills

These are active, recently updated PRs that have not yet been merged but represent significant capability additions:

*   **[Pre-Deployment Validator #740](https://github.com/anthropics/skills/pull/740)**
    *   *Potential:* Standardizes quality gates for Node.js/Next.js projects. Highly actionable for DevOps workflows.
*   **[Codebase Inventory Audit #147](https://github.com/anthropics/skills/pull/147)**
    *   *Potential:* Addresses "legacy code" rot. Useful for onboarding to large projects.
*   **[ODT (OpenDocument) Skill #486](https://github.com/anthropics/skills/pull/486)**
    *   *Potential:* Fills a format gap (ODT/LibreOffice support) that is often requested by users avoiding Microsoft ecosystems.

---

## 4. Skills Ecosystem Insight

> The community is currently prioritizing **Reliability and Context Persistence** (Memory/Security/Validator skills) over novel, experimental features, indicating a maturation phase where users seek production-grade stability rather than just "cool" new capabilities.

---

# Claude Code Community Digest — 2026-03-24

## Today's Highlights
The community is actively addressing the fallout from the recent **Desktop App v1.1.7714** and **CLI v2.1.81** updates. Users are reporting critical regressions ranging from macOS local session crashes and OAuth failures to broken Git worktree workflows. Concurrently, significant momentum is building in the plugin ecosystem, with new contributions focused on enterprise orchestration, batch processing safety, and enhanced hook management.

## Latest Releases
**No new releases** in the last 24 hours.

## Hot Issues

1.  **[#1455](https://github.com/anthropics/claude-code/issues/1455) — CLI does not respect XDG Base Directory specification**
    *   **Why it matters:** This remains the highest-voted open issue (👍 309). Linux users are frustrated that configuration and cache files clutter `~/.claude` instead of following Linux standards (`~/.config`, `~/.cache`), causing friction in system hygiene and backup strategies.

2.  **[#27302](https://github.com/anthropics/claude-code/issues/27302) — Support multiple Connector accounts**
    *   **Why it matters:** Highly requested (👍 93) feature for enterprise users managing multiple identities for the same connector (e.g., separate dev and prod AWS accounts). This is critical for workflow segregation in professional environments.

3.  **[#30864](https://github.com/anthropics/claude-code/issues/30864) — Cowork for ARM processor**
    *   **Why it matters:** A top priority (👍 76) for users on Apple Silicon and ARM-based Linux servers. Users want the Cowork agent features to be fully supported on their native architecture without requiring x86 emulation or Rosetta.

4.  **[#30640](https://github.com/anthropics/claude-code/issues/30640) — Native installer doesn't work on FreeBSD**
    *   **Why it matters:** Highlights portability gaps in the installer script. FreeBSD users (and often other BSDs) are blocked from using the native installer, forcing manual workarounds.

5.  **[#29579](https://github.com/anthropics/claude-code/issues/29579) — API Error: Rate limit reached (Max Subscription)**
    *   **Why it matters:** Subscribers on the Max plan are hitting unexpected rate limits despite low usage metrics. The 92 comments indicate a complex billing/backend API issue causing significant frustration for power users.

6.  **[#35646](https://github.com/anthropics/claude-code/issues/35646) — Protected directory prompt forces hacky workarounds**
    *   **Why it matters:** A recent change in v2.1.78 restricted writing to `.git` and `.claude` even when `--dangerously-skip-permissions` is active. This breaks automated scripts and "cowork" flows that rely on unfettered access to manage the repo.

7.  **[#37967](https://github.com/anthropics/claude-code/issues/37967) — v1.1.7714 broke Desktop App (Root permissions/Hyper-V)**
    *   **Why it matters:** Critical regression report. The update appears to pass incorrect permission flags (`--allow-dangerously-skip-permissions` as root) and breaks Hyper-V initialization on Windows, halting workflows for remote server users.

8.  **[#37967](https://github.com/anthropics/claude-code/issues/36653) — Local sessions crash immediately (OAuth 429)**
    *   **Why it matters:** Desktop users on macOS cannot start local sessions after the latest update, receiving an immediate 429 error on the OAuth endpoint.

9.  **[#37958](https://github.com/anthropics/claude-code/issues/37958) — Telegram MCP notifications not surfacing**
    *   **Why it matters:** Integration breakdown. While the Telegram MCP server receives messages, they aren't appearing in the Claude Code conversation stream, breaking async workflows.

10. **[#37874](https://github.com/anthropics/claude-code/issues/37874) — CLI hangs on startup with `-w <worktree>`**
    *   **Why it matters:** A specific regression in v2.1.81 where the CLI freezes indefinitely when using the worktree flag. This blocks users managing multiple git worktrees from using the tool.

## Key PR Progress

1.  **[#37979](https://github.com/anthropics/claude-code/pull/37979) — Hookify: Add StopFailure hook support**
    *   Adds support for the `StopFailure` hook in the `hookify` plugin. This allows users to define custom behaviors (like notifications or cleanup) when API errors occur (rate limits, auth failures).

2.  **[#37800](https://github.com/anthropics/claude-code/pull/37800) — Add `claude-tunnels` multi-project orchestration plugin**
    *   Introduces a sophisticated "Project Orchestrator" plugin. It routes tasks from Slack/Telegram/Teams to specific projects and creates dependency-aware execution plans across isolated sessions.

3.  **[#37680](https://github.com/anthropics/claude-code/pull/37680) — Add `parallel-batch-safe` plugin**
    *   Addresses authentication issues when running batch jobs. This plugin runs workers in detached `tmux` sessions with pre-batch token refresh, allowing safe parallel execution without breaking VS Code/Cursor auth.

4.  **[#37658](https://github.com/anthropics/claude-code/pull/37658) — Fix client-side scope gate for Claude.ai MCP servers**
    *   Removes a strict client-side check that blocked loading MCP servers when the `user:mcp_servers` OAuth scope was missing. It now proceeds with a warning, letting the server authority decide access.

5.  **[#37631](https://github.com/anthropics/claude-code/pull/37631) — Add `spinner-customization` plugin**
    *   Adds a plugin to customize the "spinner" text (e.g., "Crunched", "Thinking"). It provides commands to switch between modes (quirky, plain, minimal) and modifies `settings.json`.

6.  **[#36625](https://github.com/anthropics/claude-code/pull/36625) — Fix Pre/PostToolUse message visibility**
    *   A technical fix for the `hookify` plugin. It moves permission decision reasons from `systemMessage` (user-only) to `hookSpecificOutput` (model-visible), ensuring Claude sees the context for blocked tool use.

7.  **[#31501](https://github.com/anthropics/claude-code/pull/31501) — Fix `/feature-dev` workflow skipping phases**
    *   Fixes a bug in the `/feature-dev` command where Phase 6 (Quality Review) and Phase 7 (Summary) were skipped due to `TodoWrite` overwriting the parent todo list.

8.  **[#37648](https://github.com/anthropics/claude-code/pull/37648) — Update Skill Development SKILL.md**
    *   Documentation update bringing the skill development frontmatter reference in line with the official documentation, covering all 11 available fields.

9.  **[#29943](https://github.com/anthropics/claude-code/pull/29943) — MCP OAuth redirectUri hotfix**
    *   Adds package patch scripts to fix MCP OAuth providers that require HTTPS redirect URIs rather than the default `localhost` callback.

10. **[#37625](https://github.com/anthropics/claude-code/issues/37625) — Usage explosion bug reports**
    *   *Note: Issue discussed in PR context.* Multiple issues (#37917, #25970) highlight users seeing "impossible" usage metering spikes on Max plans.

## Feature Request Trends

*   **Enterprise Identity Management:** The strong demand for **multiple connector accounts** (#27302) and **Amazon Bedrock backend support** (#32668) highlights a push for better enterprise integration and multi-tenancy.
*   **ARM/Linux Support:** **Cowork for ARM** (#30864) and **FreeBSD installers** (#30640) reflect a desire for the tool to run efficiently on diverse, non-standard, and server-class hardware.
*   **Linux Standards Compliance:** The **XDG Base Directory** issue (#1455) continues to be a major thorn for Linux developers who expect strict adherence to filesystem standards.

## Developer Pain Points

*   **Fragility of Updates:** The latest release cycle (v1.1.7714 / v2.1.81) has introduced significant regressions, particularly for macOS (OAuth crashes, Sandbox blocks) and Windows (Hyper-V init failures). Developers are expressing fatigue at having to downgrade or debug the tooling itself rather than their code.
*   **Permissions & Sandboxing:** New restrictions on protected directories (#35646) and macOS sandboxing (#37990) are breaking automated workflows. Developers feel caught between security hardening and the need for "dangerously-skip-permissions" in automated/scripted contexts.
*   **MCP & OAuth Complexity:** Integration issues are frequent, with OAuth tokens expiring excessively (#36911) and MCP notification channels failing to surface messages (#37958). The complexity of managing these integrations (Slack, Telegram, Chrome) is becoming a hurdle.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-03-24

## Today's Highlights
The community is currently facing significant stability issues regarding token usage and connectivity, particularly with the latest VS Code extension updates causing unexpected credit consumption. Development efforts are focused on stabilizing the CLI and App server, with ongoing work to support the Windows sandbox unified exec runtime and improve error handling for enterprise environments.

## Releases
* **rust-v0.117.0-alpha.9 & v0.117.0-alpha.10**
  *Release cycle update:* Two rapid alpha releases for the Rust SDK were pushed today. While specific changelogs were not provided in the feed, the rapid succession suggests a hotfix or ongoing preparation for the `0.117.0` stable branch.
  * [View Release](https://github.com/openai/codex/releases)

## Hot Issues
1.  **[#14593](https://github.com/openai/codex/issues/14593) - Still burning tokens very fast with VS Code update**
    *   **Impact:** High. Users are reporting rapid depletion of credits even with minimal usage.
    *   **Reaction:** 204 comments. The community suspects background processes in the extension are polling or re-processing data without user intervention.
2.  **[#14762](https://github.com/openai/codex/issues/14762) - Paid Usage Dropping Too Quickly**
    *   **Impact:** Critical. A Pro user reported burning 80% of $40 credits for minor tasks.
    *   **Reaction:** Users are linking this to "OpenClaw" background systems and verbose tool wrappers inflating cached prompt suffixes.
3.  **[#15503](https://github.com/openai/codex/issues/15503) - CPU spikes during normal use (Extension)**
    *   **Impact:** High. Developers are experiencing performance degradation.
    *   **Reaction:** Debug consoles show millisecond-level loops, suggesting a "storm" of requests or an inefficient polling mechanism in the latest extension build.
4.  **[#11427](https://github.com/openai/codex/issues/11427) - Open multiple Terminals in Codex App**
    *   **Impact:** Medium. High-demand feature request.
    *   **Reaction:** 24👍. Users find the single-terminal limitation in the App environment restrictive for modern workflows.
5.  **[#14601](https://github.com/openai/codex/issues/14601) - Prevent Configuration Pollution**
    *   **Impact:** Medium. Security/Workflow friction.
    *   **Reaction:** 10👍. Developers want a cleaner separation between project-specific trust levels and the global `config.toml` to avoid constant permission prompts.
6.  **[#8865](https://github.com/openai/codex/issues/8865) - Frequent stream disconnection (Azure/CLI)**
    *   **Impact:** High. Affects Enterprise users on Azure.
    *   **Reaction:** Ongoing issue since January; users report `stream disconnected` errors consistently when using GPT-5.x Codex models via CLI.
7.  **[#13715](https://github.com/openai/codex/issues/13715) - macOS local Codex clients hang**
    *   **Impact:** Medium. macOS users are experiencing freezes after sending prompts.
    *   **Reaction:** Issue persists across multiple CLI versions (v0.111.0+).
8.  **[#15060](https://github.com/openai/codex/issues/15060) & #14751 - Threads Disappearing from Sidebar**
    *   **Impact:** Medium. Data accessibility issue.
    *   **Reaction:** The App sidebar is truncating history to the 50 most recent threads, making older local threads inaccessible despite existing on disk.
9.  **[#14513](https://github.com/openai/codex/issues/14513) - Codex answers old unrelated questions**
    *   **Impact:** Medium. Agent reliability.
    *   **Reaction:** The agent seems to lose context or "hallucinate" previous requests, stopping mid-turn to answer an unrelated query from the past.
10. **[#2951](https://github.com/openai/codex/issues/2951) - Fails to install on Android (Termux)**
    *   **Impact:** Niche but vocal.
    *   **Reaction:** Recently closed, but highlights the desire for edge-case environment support.

## Key PR Progress
1.  **[#15578](https://github.com/openai/codex/pull/15578) - Windows sandbox unified exec runtime**
    *   **Detail:** Major infrastructure work adding Windows sandbox session support for both legacy restricted-token and elevated runner backends.
2.  **[#15530](https://github.com/openai/codex/pull/15530) - Stop app-server auth refresh storms**
    *   **Detail:** Fixes a critical hole in token refresh logic where permanent token failures caused infinite retry loops instead of prompting the user to log in again.
3.  **[#15547](https://github.com/openai/codex/pull/15547) - Back pressure and batching for `command/exec`**
    *   **Detail:** Implements back pressure for stdout/stderr streams to prevent overwhelming the websocket connection during heavy command output.
4.  **[#15246](https://github.com/openai/codex/pull/15246) - Add PR CI for the Python SDK**
    *   **Detail:** Establishes deterministic CI pipelines for the Python SDK, including lint, type checking (mypy), and build verification.
5.  **[#15577](https://github.com/openai/codex/pull/15577) - Trim pre-turn context updates during rollback**
    *   **Detail:** Improves history management by ensuring that when a context rollback occurs, redundant pre-turn updates are removed to keep the context clean.
6.  **[#15360](https://github.com/openai/codex/pull/15360) - Fix PATH env var using OsString**
    *   **Detail:** A critical bug fix preventing Codex from crashing if the system `PATH` contains non-UTF-8 bytes (common on non-English locales).
7.  **[#15569](https://github.com/openai/codex/pull/15569) - Handle inline image request caps**
    *   **Detail:** Enforces limits (default 512 MiB / 1500 images) for inline image requests to prevent API failures during large multimodal turns.
8.  **[#15519](https://github.com/openai/codex/pull/15519) - Default approval behavior for MCP**
    *   **Detail:** Tightens security by requiring approval/ARC monitoring for unannotated MCP tools, defaulting them to `destructive`.
9.  **[#15478](https://github.com/openai/codex/pull/15478) - Update self-serve business usage limit copy**
    *   **Detail:** Improves error messaging for business users hitting rate limits, directing them to admins rather than generic support pages.
10. **[#15580](https://github.com/openai/codex/pull/15580) - Remove filter from plugins/list**
    *   **Detail:** Update to the plugin listing functionality (details pending review, but likely related to plugin discovery).

## Feature Request Trends
*   **Multi-Terminal Support:** There is a strong consensus (e.g., [#11427](https://github.com/openai/codex/issues/11427)) for the ability to run multiple terminal instances or tabs within the Codex App environment.
*   **Context Management Plans:** Users are requesting features similar to competitors (e.g., [#14339](https://github.com/openai/codex/issues/14339)) that allow clearing context *after* a plan is generated but *before* implementation to save tokens.
*   **Configuration Management:** Developers want better separation of configuration files ([#14601](https://github.com/openai/codex/issues/14601)) to prevent "pollution" and streamline project setups.

## Developer Pain Points
*   **"Token Drain" Anxiety:** The dominant frustration today is the mysterious burning of credits ([#14593](https://github.com/openai/codex/issues/14593), [#14762](https://github.com/openai/codex/issues/14762)). Users feel they cannot trust the usage meter and fear running up bills without active coding.
*   **Windows/CLI Instability:** Windows users are facing a disproportionate number of errors regarding sandboxes ([#10601](https://github.com/openai/codex/issues/10601)), Azure disconnections ([#9936](https://github.com/openai/codex/issues/9936)), and path handling.
*   **Agent "Drift":** Multiple reports ([#14513](https://github.com/openai/codex/issues/14513), [#14131](https://github.com/openai/codex/issues/14131)) indicate that the Agent sometimes loses the thread of conversation, replying to old prompts or stopping execution mid-task.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-03-24

## 1. Today's Highlights
The latest nightly release (v0.36.0-nightly) introduces critical telemetry infrastructure and fixes for evaluation reliability, addressing the community's concerns with testing stability. A major milestone was reached with the formalization of the **Google Summer of Code (GSoC)** partnership, signaling a focused push on behavioral evaluations and open-source quality tools. Concurrently, significant efforts are underway to patch memory leaks in telemetry and improve subagent awareness of approval modes, directly impacting user workflow efficiency.

## 2. Releases
*   **v0.36.0-nightly.20260323**: This nightly build focuses on developer experience and stability.
    *   **Telemetry Setup**: New infrastructure for onboarding telemetry was merged ([PR #23118](https://github.com/google-gemini/gemini-cli/pull/23118)).
    *   **Eval Stability**: Added retry logic for evaluation runs that encounter API errors, ensuring flaky network issues don't fail test suites ([PR #23322](https://github.com/google-gemini/gemini-cli/pull/23322)).
*   **v0.35.0-preview.5**: A rapid patch release (cherry-pick from commit `b2d6dc4`) addressing conflicts from the previous preview version.
*   **v0.35.0-preview.3**: Contains fixes to ensure smoother transitions between preview versions.

## 3. Hot Issues

1.  **[GSoC: Behavioral evals & OSS Community](https://github.com/google-gemini/gemini-cli/issues/23331)** (Priority P2)
    *   **Why it matters**: The project is formalizing its Google Summer of Code roadmap. This issue tracks how contributors can help improve the prompt, tools, and behavioral evals.
    *   **Reaction**: High community engagement (41 comments), indicating strong interest from external developers wanting to contribute to AI quality.

2.  **[Fix memory leak in OpenTelemetry (SpanImpl)](https://github.com/google-gemini/gemini-cli/issues/23253)** (Enterprise)
    *   **Why it matters**: Users reported SpanImpl objects retaining ~1.7GB of memory, leading to OOM crashes.
    *   **Reaction**: Critical priority. A fix identifying the root cause (V8 Closure Leak) was pushed in PR #23281.

3.  **[Subagents Awareness of Active Approval Modes](https://github.com/google-gemini/gemini-cli/issues/23582)**
    *   **Why it matters**: Subagents currently lack context regarding "Plan Mode" or "Auto-Edit Mode," causing them to attempt blocked actions and get stuck in failure loops.
    *   **Reaction**: Maintainer-only issue, but highlights a major UX friction point in agent behavior.

4.  **[AST-aware file reads and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
    *   **Why it matters**: An Epic issue investigating if using Abstract Syntax Trees (AST) can improve codebase context, reducing noise and token usage.
    *   **Reaction**: Technical discussion on how "precise" reads can drastically improve agent performance over "greedy" reads.

5.  **[Model creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)**
    *   **Why it matters**: Developers are frustrated with the model scattering temporary edit scripts across directories, creating cleanup overhead before commits.
    *   **Reaction**: High priority "Plan Mode" issue.

6.  **[Support passing prompt to `/plan`](https://github.com/google-gemini/gemini-cli/issues/22855)**
    *   **Why it matters**: Currently, `/plan` opens a separate box. Users want to kick off a plan in a single command (e.g., `/plan implement feature X`).
    *   **Reaction**: Strong demand for streamlined CLI interactions.

7.  **[SDD Phase 3: Tasks Integration](https://github.com/google-gemini/gemini-cli/issues/23320)**
    *   **Why it matters**: Effort to replace manual markdown checklists (`plan.md`) with a native Directed Acyclic Graph (DAG) task tracking system.
    *   **Reaction**: Signals a shift toward more robust, programmatic project management within the CLI.

8.  **[Exiting plan mode does not switch model](https://github.com/google-gemini/gemini-cli/issues/23230)**
    *   **Why it matters**: A confirmed bug where the CLI fails to switch from a planning model to `gemini-3-flash-preview` after a plan is confirmed.
    *   **Reaction**: Users frustrated by the need to manually interrupt to trigger the model switch.

9.  **[Implement memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819)**
    *   **Why it matters**: The memory subagent needs logic to distinguish between user preferences (global) and project-specific context.
    *   **Reaction**: Essential for the "Memory" feature to be actually useful rather than annoying.

10. **[Plans should take up available terminal height](https://github.com/google-gemini/gemini-cli/issues/23577)**
    *   **Why it matters**: Users dislike the current height limit for plans which requires manual expansion (`Ctrl+O`).
    *   **Reaction**: Request for "more usable" screen real estate.

## 4. Key PR Progress

1.  **[fix(telemetry): patch memory leak and enforce logPrompts privacy](https://github.com/google-gemini/gemini-cli/pull/23281)** (CLOSED)
    *   Resolved a critical ~1.7GB memory leak in OpenTelemetry and patched a privacy issue regarding log prompts.
2.  **[feat(cli): support Open Plugin (plugin.json) manifest standard](https://github.com/google-gemini/gemini-cli/pull/23601)**
    *   Added support for the `plugin.json` standard. This unifies Gemini extensions and Open Plugins under a single abstraction layer.
3.  **[feat(cli): support skill discovery for Open Plugins](https://github.com/google-gemini/gemini-cli/pull/23610)**
    *   Implements auto-namespacing for discovered skills (e.g., `plugin-name:skill-name`), preventing naming collisions.
4.  **[fix(core): make subagents aware of active approval modes](https://github.com/google-gemini/gemini-cli/pull/23608)**
    *   Injects Plan Mode context into subagents to prevent them from attempting blocked actions (like editing files during planning).
5.  **[fix(cli): prevent Ctrl+D exit when input buffer is not empty](https://github.com/google-gemini/gemini-cli/pull/23431)** (CLOSED)
    *   A highly requested UX fix. Ensures `Ctrl+D` only exits the CLI if the input buffer is empty, preventing accidental data loss.
6.  **[fix(cli): use tmux-safe thinking indicator](https://github.com/google-gemini/gemini-cli/pull/22067)**
    *   Fixes interference with terminal redraws in tmux split-panes, improving the experience for developers using multiplexers.
7.  **[fix(core): wire abort signal through chat compression](https://github.com/google-gemini/gemini-cli/pull/20407)** (CLOSED)
    *   Ensures that pressing `Ctrl+C` actually cancels in-flight LLM compression requests, making the CLI feel snappier and more responsive.
8.  **[feat(evals): add behavioral evaluations for subagent routing](https://github.com/google-gemini/gemini-cli/pull/23272)**
    *   Adds tests to verify the agent correctly routes tasks to specialists (e.g., docs, tests) vs. the generalist agent.
9.  **[feat(scripts): add multi-model eval comparison tool](https://github.com/google-gemini/gemini-cli/pull/23607)** (GSoC)
    *   A new CLI tool that runs a behavioral eval against multiple Gemini models at once and outputs a comparison. Great for prompt engineers.
10. **[refactor(cli,core): foundational layout and identity management](https://github.com/google-gemini/gemini-cli/pull/23286)**
    *   Infrastructure work preparing the CLI for upcoming compact tool output changes and improved history management.

## 5. Feature Request Trends

*   **Plugin Standardization**: There is a strong push toward supporting `plugin.json` (Open Plugin standard) alongside native Gemini extensions ([PR #23601](https://github.com/google-gemini/gemini-cli/pull/23601)).
*   **Better "Plan Mode" UX**: Users want `/plan` to accept arguments directly ([Issue #22855](https://github.com/google-gemini/gemini-cli/issues/22855)) and want the UI to utilize full terminal height ([Issue #23577](https://github.com/google-gemini/gemini-cli/issues/23577)).
*   **Intelligent Context Awareness**: Multiple requests for "AST-aware" file reading ([Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)) and smarter memory routing (Global vs. Project) ([Issue #22819](https://github.com/google-gemini/gemini-cli/issues/22819)).
*   **Evaluation Tools**: A surge in interest for tools that allow multi-model comparison and behavioral testing, likely driven by the upcoming GSoC initiatives ([Issue #23604](https://github.com/google-gemini/gemini-cli/issues/23604)).

## 6. Developer Pain Points

*   **Memory & Stability**: The 1.7GB memory leak in telemetry was a major blocker for enterprise/long-running sessions. The fix in PR #23281 is the highlight of the day.
*   **Ctrl+C / Ctrl+D UX**: Multiple PRs (#20407, #23431, #22067) addressed fundamental terminal interaction issues (canceling requests, accidental exits, and tmux redraws), suggesting that "snappiness" and control were recent sore points.
*   **Subagent "Stupidity"**: Issues like #23582 and #23129 highlight that subagents often operate without context (e.g., trying to edit files in Read-Only mode), forcing the user to manually intervene or watch the agent fail.
*   **File Cleanup**: The model creating temporary scripts in random directories ([Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)) adds friction to the development workflow.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest: 2026-03-24**

### 1. Today's Highlights
The Copilot CLI team released **v1.0.11** (and subsequent pre-releases), focusing heavily on **MCP (Model Context Protocol) server management** and **Monorepo support**. A significant change introduces hierarchical discovery of configuration files (custom instructions, MCP servers, skills) from the working directory up to the git root, while also enforcing stricter organization policies for third-party MCP servers. Users are actively reporting regressions related to MCP server loading and session management following these updates.

### 2. Releases
**Version 1.0.11 (2026-03-23)**
*   **Monorepo Configuration Discovery:** Custom instructions, MCP servers, skills, and agents are now discovered at every directory level from the working directory up to the git root.
*   **Policy Enforcement:** Organization policies for third-party MCP servers are now strictly enforced, with warnings displayed when servers are blocked by an allowlist.
*   **Model Picker:** Models now appear correctly in the picker with proper names displayed.

**Version 1.0.11-1 (Pre-release)**
*   **Session Management:** `/clear` now abandons the current session entirely, while `/new` starts a fresh conversation (backgrounding the old one).
*   **Hooks Fix:** Fixed a critical bug where extension hooks would overwrite `hooks.json` instead of merging.

### 3. Hot Issues

1.  **[#2232](https://github.com/github/copilot-cli/issues/2232) | v1.0.11-1 stopped loading .mcp.json**
    *   **Impact:** Critical. Users report that the latest version fails to load standard `.mcp.json` or `.vscode/mcp.json` configuration files located in the repo root.
    *   **Reaction:** High concern; users are downgrading to restore functionality.

2.  **[#1707](https://github.com/github/copilot-cli/issues/1707) | False "Third-party MCP servers disabled" warning**
    *   **Impact:** High. The CLI displays a warning stating organization policy blocks MCP servers, even when no such policy exists or when the server works in VS Code.
    *   **Reaction:** Frustration regarding inconsistent policy enforcement between tools.

3.  **[#640](https://github.com/github/copilot-cli/issues/640) | "Invalid session ID" errors with `read_sql_files`**
    *   **Impact:** High frequency. A persistent bug where the CLI throws session ID errors, particularly affecting users on specific Gemini models.
    *   **Reaction:** Users requesting a fundamental fix to session handling logic.

4.  **[#33](https://github.com/github/copilot-cli/issues/33) | Support for OAuth HTTP MCP servers**
    *   **Impact:** High Value. Request to support OAuth for remote MCP servers (e.g., Figma, Atlassian).
    *   **Reaction:** Highly requested (+107 👍), critical for enterprise integration.

5.  **[#1585](https://github.com/github/copilot-cli/issues/1585) | macOS Cmd+C broken (Alt-Screen)**
    *   **Impact:** Usability. Since v0.0.413, the default experimental mode captures mouse events, breaking native text copying on macOS.
    *   **Reaction:** Significant annoyance for macOS users; muscle memory interruption.

6.  **[#2236](https://github.com/github/copilot-cli/issues/2236) | Org MCP registry servers disappear**
    *   **Impact:** Regression. MCP servers configured via an organization registry were previously accessible but have now vanished with false policy warnings.
    *   **Reaction:** Blocks workflow for enterprise users relying on org-standard tools.

7.  **[#2142](https://github.com/github/copilot-cli/issues/2142) | `onSessionStart` hook `additionalContext` ignored**
    *   **Impact:** Developer Experience. A confirmed bug where the documented `additionalContext` return field in session start hooks is silently ignored.
    *   **Reaction:** Confirmed closed by maintainers, likely in v1.0.11-1.

8.  **[#2231](https://github.com/github/copilot-cli/issues/2231) | Text selection auto-copies on macOS**
    *   **Impact:** Usability. Text selection automatically copies to clipboard while CLI is active, disrupting expected terminal behavior.
    *   **Reaction:** Confirmed closed; likely related to the mouse handling fixes in recent releases.

9.  **[#1320](https://github.com/github/copilot-cli/issues/1320) | UI Freeze / Blinking cursor stops**
    *   **Impact:** UI Hangs. The "Thinking" indicator freezes, causing the UI to appear unresponsive (Node.js 24/25 specific).
    *   **Reaction:** Confirmed closed; indicates stability improvements for newer Node runtimes.

10. **[#1857](https://github.com/github/copilot-cli/issues/1857) | No way to cancel enqueued messages**
    *   **Impact:** Workflow. Once messages are queued (Ctrl+Q), they cannot be removed or canceled if the agent is busy.
    *   **Reaction:** Request for better control over agent execution queue.

### 4. Key PR Progress

1.  **[#2230](https://github.com/github/copilot-cli/pull/2230) | Add `~/.agents/skills/` as a default skill directory**
    *   **Status:** Closed. Aligns CLI behavior with VS Code (specifically for GHCP4A) by automatically discovering skills in `~/.agents/skills/`.

2.  **[#2076](https://github.com/github/copilot-cli/pull/2076) | Fix Hooks Merging**
    *   **Status:** Closed. Addressed the conflict where extension hooks would override `hooks.json` instead of merging. This fixes a major pain point for developers extending the CLI.

3.  **[#1253](https://github.com/github/copilot-cli/pull/1253) | Add Experimental Mode documentation**
    *   **Status:** Closed. Clarifies how to use `--experimental` and `/experimental`, noting that the setting persists in config.

4.  **[#959](https://github.com/github/copilot-cli/pull/959) | Add Ubuntu/Debian apt install support**
    *   **Status:** Closed. Adds support for installing the CLI via `apt` on Debian-based systems, improving Linux developer experience.

5.  **[#2142](https://github.com/github/copilot-cli/pull/2142) | Fix `onSessionStart` additionalContext**
    *   **Status:** Closed. Ensures hooks can properly pass context back to the session.

### 5. Feature Request Trends

*   **MCP Server Management Flexibility:** Users are requesting features like **MCP Profiles** (grouping servers) and better visibility into which servers are active (`--list-mcp`).
*   **Enterprise Auth Support:** Strong demand for **OAuth support** for HTTP-based MCP servers (e.g., Figma, Atlassian).
*   **UI/UX Refinements:** Requests for **clickable Markdown links**, ability to **cancel enqueued messages**, and better mouse/keyboard handling on macOS.
*   **Session Debugging:** Developers want the `Session_ID` exposed in Hook Inputs to correlate automation logs with specific CLI sessions.

### 6. Developer Pain Points

*   **Configuration Fragility:** The "Discovery" feature is causing confusion; configs that worked yesterday (e.g., `.mcp.json` at root) are breaking today, with vague error messages like "Invalid session ID" or false policy warnings.
*   **macOS Terminal Interaction:** The TUI (Text User Interface) captures mouse events in experimental mode, breaking native OS shortcuts like **Cmd+C** (copy) and **Option+Backspace** (delete word).
*   **Silent Failures:** The CLI tends to exit with no output when encountering login issues or invalid proxy settings, leaving developers debugging in the dark.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-24

## 1. Today's Highlights
Version **1.25.0** has been released, introducing the highly anticipated **Plugin System (Skills + Tools)** alongside a new `/loop` command for recurring tasks. The update also includes significant internal refactoring to unify subagent execution and improve approval workflows via the Wire 1.6 protocol. On the community side, users are actively discussing mobile connectivity options and debugging recent performance regressions.

## 2. Releases
**v1.25.0**
*   **Plugin System:** Adds support for Skills and Tools, including credential injection via OAuth and environment variables. Multi-plugin repositories are now supported. (PRs #1503, #1529, #1530)
*   **New Commands:** Introduced `/loop` for scheduled recurring tasks (similar to cron).
*   **Protocol Updates:** Unified subagent execution, approvals, and tracing (Wire 1.6 alignment).
*   **UI/UX:** Git branch and status display added to prompts; Web UI adapted for subagent approvals.
*   **Fixes:** Synchronization of tool execution status during cancellation and approval cycles.

## 3. Hot Issues
*   **[#1548 Model performance degradation](https://github.com/MoonshotAI/kimi-cli/issues/1548)**: Users report a noticeable drop in performance with the `kimi-for-coding` model following the recent update.
*   **[#1382 Mobile Connector](https://github.com/MoonshotAI/kimi-cli/issues/1382)** (Closed): A request for a mobile connector to allow CLI session management while away from the computer. The community finds this essential for remote management.
*   **[#1550 Status Lines](https://github.com/MoonshotAI/kimi-cli/issues/1550)**: Users are requesting richer terminal status lines, specifically citing a need for better visibility into token usage and current directory context.
*   **[#1334 JetBrains IDE Unavailable](https://github.com/MoonshotAI/kimi-cli/issues/1334)**: Reports of the JetBrains integration failing to work, likely related to recent changes or environment issues.

## 4. Key PR Progress
*   **[#1551 feat(loop): add /loop command](https://github.com/MoonshotAI/kimi-cli/pull/1551)** (Closed): Implements the `/loop` slash command for scheduling recurring tasks, resolving requests for cron-like functionality.
*   **[#1552 refactor(subagents)](https://github.com/MoonshotAI/kimi-cli/pull/1552)** (Closed): Major internal refactor replacing the legacy multi-agent flow with persistent foreground/background subagent instances and resume support.
*   **[#1555 feat(web): Wire 1.6 adaptation](https://github.com/MoonshotAI/kimi-cli/pull/1555)** (Closed): Updates the Web UI to align with Wire protocol 1.6, specifically handling subagent events and approval bridges.
*   **[#1549 feat(plugin): configurable compaction](https://github.com/MoonshotAI/kimi-cli/pull/1549)** (Open): Proposes adding user-configurable compaction providers, allowing context compaction to use a dedicated model rather than the active chat model.
*   **[#1545 fix(keyboard): SIGTSTP suspension](https://github.com/MoonshotAI/kimi-cli/pull/1545)** (Open): Aims to fix the long-standing issue where `CTRL+Z` causes suspension in raw mode, improving terminal reliability.
*   **[#1554 docs: plugin system](https://github.com/MoonshotAI/kimi-cli/pull/1554)** (Closed): Adds comprehensive documentation for the new plugin system features introduced in this release cycle.
*   **[#1400 fix: replace acp.TerminalHandle](https://github.com/MoonshotAI/kimi-cli/pull/1400)** (Open): Updates legacy ACP terminal handling to the new 0.8 request/response API.

## 5. Feature Request Trends
*   **Mobile/Remote Access:** There is a strong desire to interact with the CLI session remotely (Issue #1382), allowing users to keep the AI working on tasks even without a physical computer.
*   **Terminal Information Density:** Users want a more informative terminal interface (Issue #1550), specifically requesting visible token usage counts and richer status metadata directly in the shell.
*   **Scheduling & Automation:** The successful merge of the `/loop` command highlights a community push towards background automation and recurring task management.

## 6. Developer Pain Points
*   **Signal Handling:** Developers are frustrated with keyboard interruptions, specifically the inability to gracefully handle `CTRL+Z` without crashing or suspending the CLI unexpectedly.
*   **Integration Stability:** Issues with IDE integrations (specifically JetBrains) and model performance degradation suggest instability in the latest release cycle that impacts daily workflow reliability.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-03-24

## 1. Today's Highlights
The OpenCode community is currently managing a significant disruption regarding Anthropic authentication, with widespread reports of OAuth failures and "Invalid token" errors affecting OpenCode desktop and web users. Concurrently, maintainers are merging critical features, including the Poe OAuth plugin and model preference settings for auto-reviews, while addressing core stability issues in the Windows TUI and agent lifecycle management.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues

1.  **[Anthropic OAuth Failures](https://github.com/anomalyco/opencode/issues/18267)** (CLOSED)
    *   **Why it matters:** A massive surge in reports (137 comments) regarding broken Claude authentication. Users experienced 429 errors and login failures.
    *   **Reaction:** Highly urgent; significant community frustration ("oauth broked", "killed ???").

2.  **[Claude Pro/Max Auth Flow Returns Invalid Token](https://github.com/anomalyco/opencode/issues/18315)** (OPEN)
    *   **Why it matters:** Users are unable to re-authenticate after tokens expire. The manual token refresh flow is returning an "Invalid Token" error, effectively locking users out of the Claude provider.
    *   **Reaction:** High concern (28 👍); users report reinstalling does not fix the issue.

3.  **[SSE Read Timed Out](https://github.com/anomalyco/opencode/issues/17318)** (CLOSED)
    *   **Why it matters:** Affects the core stability of file writing operations. The agent halts with a stream error during long-running tasks.
    *   **Reaction:** 35 👍; indicates high impact on productivity during "brainstorming" sessions.

4.  **[Gemini Edit Tool Handling](https://github.com/anomalyco/opencode/issues/266)** (OPEN)
    *   **Why it matters:** Gemini users face frequent workflow interruptions due to the model failing to match string whitespace during edit operations.
    *   **Reaction:** Long-standing issue; requests for whitespace normalization logic.

5.  **[Claude Pro/Max "Invalid Code" Error](https://github.com/anomalyco/opencode/issues/18342)** (CLOSED)
    *   **Why it matters:** Specific to the browser-based OAuth callback. Users successfully auth but the callback fails with "Invalid Code."
    *   **Reaction:** 39 👍; highlights fragility in the external browser auth integration.

6.  **[ChatGPT Not Working in v1.2.24](https://github.com/anomalyco/opencode/issues/16851)** (OPEN)
    *   **Why it matters:** Breaking change for ChatGPT/Codex users. Update attempts to use `gpt-5.3-codex` are blocked by the API, claiming the model is unsupported for ChatGPT accounts.
    *   **Reaction:** Users report feeling bombarded by bugs in recent versions.

7.  **[Compacting Context Causes Unexpected Continuation](https://github.com/anomalyco/opencode/issues/18794)** (OPEN)
    *   **Why it matters:** Affects developer control over the agent. When `/compact` triggers to save context, the agent often auto-continues work rather than waiting for user confirmation, leading to unintended actions.
    *   **Reaction:** Developers are asking for the agent to stop and wait after a compact.

8.  **[Interrupt Sometimes Has No Effect](https://github.com/anomalyco/opencode/issues/684)** (CLOSED)
    *   **Why it matters:** Critical UX friction. When a user triggers an interrupt, there is often a delay or no response, leading to "reflexive mashing."
    *   **Reaction:** 21 👍; highlights latency in the TUI response loop.

9.  **[GitLab Duo Workflow Missing Tools](https://github.com/anomalyco/opencode/issues/18840)** (CLOSED)
    *   **Why it matters:** Integration gap. OpenCode's bridge to GitLab Duo is missing tools required for workflows, asking if custom system prompts can force JSON output.
    *   **Reaction:** Enterprise users looking for deeper integration capabilities.

10. **[Windows Character Spamming](https://github.com/anomalyco/opencode/issues/8715)** (OPEN)
    *   **Why it matters:** A distinct Windows bug where exiting the terminal (via `/exit` or Ctrl+C) results in a stream of random characters being printed.
    *   **Reaction:** Affects users moving from WSL to native Windows environments.

## 4. Key PR Progress

1.  **[feat: add Poe OAuth auth plugin](https://github.com/anomalyco/opencode/pull/18477)** (OPEN)
    *   **Impact:** Expands provider support. Adds a built-in plugin for Poe.com, supporting both browser-based OAuth and token-based authentication.
    *   **Why it's important:** Diversifies auth options as users face issues with other providers.

2.  **[fix: keep external edit permission prompts absolute](https://github.com/anomalyco/opencode/pull/18852)** (OPEN)
    *   **Impact:** Enhances security and clarity. Normalizes edit permission patterns so files outside the worktree show absolute paths, while worktree files remain relative.
    *   **Why it's important:** Prevents users from accidentally editing system files due to path confusion.

3.  **[fix(session): emit completion-only idle events (PoC)](https://github.com/anomalyco/opencode/pull/16945)** (CLOSED)
    *   **Impact:** Architecture fix. Adds `reason` to idle session status (`completed | aborted | error`) to prevent plugins from firing on errors.
    *   **Why it's important:** Improves the reliability of session monitoring and plugin behavior.

4.  **[fix: restore cross-spawn behavior for effect child processes](https://github.com/anomalyco/opencode/pull/18798)** (OPEN)
    *   **Impact:** Windows compatibility. Re-introduces `cross-spawn` for child processes to fix command resolution issues on Windows.
    *   **Why it's important:** Addresses underlying causes of Windows-specific tool execution failures.

5.  **[feat(app): add auto-review flow and model preferences](https://github.com/anomalyco/opencode/pull/18842)** (CLOSED)
    *   **Impact:** New Feature. Introduces settings for default models, review models, and an auto-review toggle that queues a review after assignments.
    *   **Why it's important:** Significantly enhances the code review workflow within the IDE.

6.  **[use renderer theme mode to switch dark/light mode](https://github.com/anomalyco/opencode/pull/18851)** (CLOSED)
    *   **Impact:** UI Polish. Fixes theme switching logic to rely on the renderer's mode, ensuring dark/light toggles work correctly.

7.  **[feat(app): Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)** (OPEN)
    *   **Impact:** Usability. Optimizes the app for mobile/touch devices while preserving desktop experience.
    *   **Why it's important:** Expands OpenCode usability to tablet/mobile form factors.

8.  **[fix(tui): stop streaming markdown/code after message completes](https://github.com/anomalyco/opencode/pull/13854)** (OPEN)
    *   **Impact:** TUI Bugfix. Fixes an issue where the TUI skips the last table row because it treats completed messages as still streaming.
    *   **Why it's important:** Ensures complete rendering of code blocks and tables.

9.  **[chore: bump gitlab-ai-provider to 5.3.1 for GPT-5.4 model support](https://github.com/anomalyco/opencode/pull/18849)** (OPEN)
    *   **Impact:** Model Support. Updates the GitLab provider to support the new GPT-5.4 family (Nano, Mini, Standard).
    *   **Why it's important:** Ensures compatibility with the latest model proxies via GitLab.

10. **[anthropic legal requests](https://github.com/anomalyco/opencode/pull/18186)** (CLOSED)
    *   **Impact:** Compliance. Removes specific Anthropic references, prompt files, and the `opencode-anthropic-auth` plugin per legal requests.
    *   **Why it's important:** Indicates a significant shift in the official relationship or branding requirements with Anthropic.

## 5. Feature Request Trends
*   **Alternative Authentication Flows:** In light of Anthropic login issues, there is a strong push toward supporting more diverse auth methods, specifically the **Poe OAuth plugin** and robust handling of custom API keys.
*   **Routing & Orchestration:** Developers are asking for "Model Routing" plugins that can intelligently select models based on task complexity (e.g., routing simple tasks to smaller models like GPT-5.4 Nano).
*   **Review Workflow Automation:** There is high interest in auto-review features, where the agent automatically critiques its own output or another agent's output using a distinct "reviewer" model.

## 6. Developer Pain Points
*   **Authentication Fragility:** The dominant topic is the breakage of OAuth flows (especially Claude/Anthropic), causing "Invalid Code" or 429 errors that lock users out.
*   **Agent Control & Reliability:** Developers are frustrated by agents that ignore interrupts (`#684`) or auto-continue tasks after context management events like `/compact` (`#18794`), reducing the feeling of control.
*   **Model Compatibility:** Issues with specific model providers (Gemini's edit tool failing, ChatGPT account incompatibility with `gpt-5.3-codex`) suggest that the abstraction layer for different LLM providers is leaking.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-03-24

## 1. Today's Highlights
Qwen Code has released **version 0.13.0**, marking a significant stabilization step after a rapid series of previews (0.13.0-preview.2 through .7). The release focuses on critical pipeline fixes—specifically handling duplicate chunks from OpenRouter—and introduces system prompt customization options. Concurrently, the project is actively addressing infrastructure stability, with multiple PRs targeting process lifecycle management on Windows and macOS, alongside feature enhancements for the VSCode IDE Companion aimed at feature parity with the CLI.

## 2. Releases
*   **[v0.13.0 Stable Release](https://github.com/QwenLM/qwen-code/releases)**: This version bumps the code from the preview series. Key changes include:
    *   **Pipeline Fix**: Resolved an issue where `finish_reason` chunks were duplicated when using the OpenRouter provider.
    *   **Customization**: Added options for customizing the system prompt, allowing developers to fine-tune agent behavior.
    *   **CI Automation**: Automated version bumping via `qwen-code-ci-bot`.

## 3. Hot Issues
*   **[#2040: Supports project-level Insight](https://github.com/QwenLM/qwen-code/issues/2040)**
    *   *Why it matters:* Users want to analyze specific projects individually rather than at the machine level. This is a top request for better workspace management.
*   **[#2603: Allow custom session ID](https://github.com/QwenLM/qwen-code/issues/2603)**
    *   *Why it matters:* Developers want persistent, named sessions (e.g., `--session my-project`) to maintain context across different terminals, improving workflow continuity.
*   **[#2543: Global Skills cannot reference internal files](https://github.com/QwenLM/qwen-code/issues/2543)**
    *   *Why it matters:* A critical bug where skills stored in `~/.qwen/skills/` fail to read local documentation files due to workspace path security restrictions, breaking complex skill architectures.
*   **[#2553: Background process persists after VS Code closes](https://github.com/QwenLM/qwen-code/issues/2553)**
    *   *Why it matters:* A significant UX issue on Windows/macOS where the ACP background process (`qwen-cli --acp`) becomes a "zombie" process after the editor closes, causing system shutdown delays.
*   **[#2596: CLI adds '

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*