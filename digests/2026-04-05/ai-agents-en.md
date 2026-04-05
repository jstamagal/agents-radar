# OpenClaw Ecosystem Digest 2026-04-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-05 00:12 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest: 2026-04-05

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high activity cycle, with 500 issues and 500 pull requests updated in the last 24 hours. Despite this massive churn, the project has not published a new release (the latest appears to be v2026.3.31/v2026.4.1 based on issue reports), suggesting a "merge freeze" or stabilization period is in effect. Development is heavily focused on refactoring extension boundaries, hardening security, and addressing regressions introduced in recent versions, particularly around agent execution and environment variable handling.

## 2. Latest Releases
**No new releases published in the last 24 hours.**

*Note: Issues referencing versions like `2026.4.1` and `2026.3.31` indicate these are the current stable/beta branches, but no formal release tags were pushed today.*

## 3. Project Progress
**Significant Merged/Closed PRs (Top 5):**
*   **[PR #54302](https://github.com/openclaw/openclaw/pull/54302)** (Closed): *Fix session command recognition*. Allows bare "new" and "reset" text to trigger session resets, fixing a usability issue where slash commands were intercepted by platforms like Slack.
*   **[PR #59231](https://github.com/openclaw/openclaw/pull/59231)** (Closed): *ACP Session Handback*. Adds CLI support for handing control back to the main agent from sub-agents (`close-self`), a crucial feature for multi-agent workflows.
*   **[PR #57910](https://github.com/openclaw/openclaw/pull/57910)** (Closed): *Telegram DM Handoff*. Fixes `bind:here` functionality in Telegram DMs, ensuring conversation bindings revert correctly when a specialist agent unbinds.
*   **[PR #61061](https://github.com/openclaw/openclaw/pull/61061)** (Closed): *Plugin SDK Fix*. Resolves import side-effects in the Telegram plugin SDK, stabilizing the test boundary.
*   **[PR #60394](https://github.com/openclaw/openclaw/pull/60394)** (Closed): *UI Polish*. Adds a dedicated loading state for the Cron refresh button in the Web UI to improve user feedback.

**Active Development (Open PRs):**
*   **[PR #61023](https://github.com/openclaw/openclaw/pull/61023)**: A massive "size: XL" refactor hardening extension package boundaries across almost all plugins and channels.

## 4. Community Hot Topics
*   **[#3460 Internationalization (i18n)](https://github.com/openclaw/openclaw/issues/3460)** (119 comments):
    *   *Summary:* The most active request remains full internationalization support.
    *   *Signal:* The core team explicitly stated they lack bandwidth for this, but the community continues to push PRs. Localization efforts are ongoing in the Web UI (see PR #61073, #61080).
*   **[#75 Linux/Windows Apps](https://github.com/openclaw/openclaw/issues/75)** (70 comments):
    *   *Summary:* High demand for desktop clients on Linux and Windows to match existing macOS/iOS/Android functionality.
*   **[#29053 Native MCP Support](https://github.com/openclaw/openclaw/issues/29053)** (14 comments):
    *   *Summary:* Users want native Model Context Protocol (MCP) client support rather than relying on OpenClaw-specific tools.
    *   *Signal:* A strong roadmap signal indicating users want standard interoperability.
*   **[#59510 Simplify Exec Approval](https://github.com/openclaw/openclaw/issues/59510)** (12 comments):
    *   *Summary:* Significant frustration with the complexity of the `exec` approval process (`/approve xxx allow-always`), which is seen as tedious for common commands.

## 5. Bugs & Stability
**Critical Regressions & Crashes (Last 24h):**
1.  **[#53959 OpenAI Codex Tool Execution Failure](https://github.com/openclaw/openclaw/issues/53959)** (Severity: High): A regression in `2026.3.23-2` causes GPT-5.3-Codex to acknowledge tasks but execute no tools.
2.  **[#31583 Env Variable Inheritance](https://github.com/openclaw/openclaw/issues/31583)** (Severity: High): The `exec` tool no longer inherits environment variables defined in `skills.entries.*.env`, breaking secrets injection for many users.
3.  **[#40631 Recurring Execution Stalls](https://github.com/openclaw/openclaw/issues/40631)** (Severity: Medium): Agents confirm tasks but perform no actions, reporting "no progress" later.
4.  **[#59098 Ollama Timeout](https://github.com/openclaw/openclaw/issues/59098)** (Severity: Medium): Embedded agents time out with local Ollama models (`qwen2.5`) despite direct API calls working.
5.  **[#41330 iMessage Duplicate Loop](https://github.com/openclaw/openclaw/issues/41330)** (Severity: High): A critical bug where agent replies in iMessage are re-ingested as input, creating an infinite loop.

**Security:**
*   **[#59085 Dangerous Code in Matrix Plugin](https://github.com/openclaw/openclaw/issues/59085)** (Closed): OpenClaw blocked installation of `@openclaw/matrix` v2026.3.22 due to credential harvesting patterns.

## 6. Feature Requests & Roadmap Signals
*   **Adaptive Memory:** **[#59095](https://github.com/openclaw/openclaw/issues/59095)** proposes a built-in hierarchical memory management system as a core feature, moving away from manual `AGENTS.md` instructions.
*   **Gemini Context Caching:** **[#51372](https://github.com/openclaw/openclaw/issues/51372)** requests support for Gemini's `cachedContents` API to reduce costs for large prompts.
*   **Configurable Timeouts:** **[#34644](https://github.com/openclaw/openclaw/issues/34644)** asks for configurable LLM-request timeouts for embedded agents (currently hardcoded to 15s).
*   **Obfuscation Check Toggle:** **[#50295](https://github.com/openclaw/openclaw/issues/50295)** requests a config option to disable the hardcoded command obfuscation detection in the `exec` tool.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Windows Support:** Users are struggling with installation errors ([#5440](https://github.com/openclaw/openclaw/issues/5440)) and binary path detection ([#17890](https://github.com/openclaw/openclaw/issues/17890)), indicating the Windows experience is still brittle.
    *   **Cron Instability:** Reports of cron jobs firing multiple times ([#29757](https://github.com/openclaw/openclaw/issues/29757)) or failing to run at the correct time due to timezone bugs ([#61086](https://github.com/openclaw/openclaw/pull/61086)) suggest reliability issues here.
    *   **Upgrade Friction:** Several comments cite regressions immediately after upgrading (e.g., Discord approvals failing in `2026.3.31`), suggesting quality assurance for specific versions needs improvement.

## 8. Backlog Watch
*   **[#26108 Discord Voice Audio](https://github.com/openclaw/openclaw/issues/26108)** (Updated: 2026-04-04): A stale but persisting issue where Discord voice connects but produces no audio.
*   **[#17890 macOS PATH Resolution](https://github.com/openclaw/openclaw/issues/17890)** (Stale): The macOS app fails to detect Homebrew-installed binaries because it uses a hardcoded PATH instead of respecting `/etc/paths`.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: AI Agent & Personal Assistant Landscape (2026-04-05)

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is currently undergoing a **stabilization and correction phase** following a period of rapid feature expansion. Development activity is intensely high across major projects like OpenClaw, IronClaw, and CoPaw, but the focus has shifted from adding net-new capabilities to addressing **critical technical debt**—specifically security hardening, memory management, and runtime stability. The landscape is bifurcating between **"kitchen sink" frameworks** (e.g., OpenClaw, IronClaw) prioritizing maximum extensibility and **opinionated clients** (e.g., NanoClaw, LobsterAI) focusing on user experience and specific workflows. A dominant trend is the community push for **multi-runtime support** (moving away from single-vendor LLM lock-in) and **standardized protocols** (MCP, A2A) to enable agent interoperability.

## 2. Activity Comparison

| Project | Core Focus | 24h Issues | 24h PRs | Release Status | Health Score* |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | Extensible Agent Framework | 500 | 500 | **Freeze** (v2026.3/4 stable) | 🟡 High Churn (Regressions) |
| **NanoBot** | Stability / GPT-5 Focus | 15 | 26 | Stabilizing (Pre-v0.1.5) | 🟢 Healthy (Rapid Iteration) |
| **ZeroClaw** | Cross-Platform / WASM | 14 | 40 | Active (No new release) | 🟢 High Velocity |
| **NanoClaw** | Multi-Runtime / Security | 3 New/Active | 20 | Active (No new release) | 🟠 Reactive (Security Fixes) |
| **IronClaw** | Enterprise / Crypto-Native | Active Discussions | 43 | Active (Engine v2 bugs) | 🟠 Feature Creep |
| **NullClaw** | Observability / A2A | 3 New | 12 Merged | Pending (v2026.3.22?) | 🟢 Stabilizing |
| **CoPaw** | Multi-Channel / Chat | 22 | 15 | **Beta 1.0.2b1** Incoming | 🟢 Patching Critical Bugs |
| **LobsterAI**| UX / Desktop Client | Active Bug Fixes | 15 | Patching (v4.3.x) | 🟠 Reactive (UX Debt) |
| **Moltis** | Integrations / UI | 6 Open | 2 Open | Slow / No Merge | 🔴 Stagnation |
| **TinyClaw**| - | 0 | 0 | Inactive | ⚪ Inactive |

*\*Health Score is an analyst assessment based on velocity, bug severity, and community sentiment.*

## 3. OpenClaw's Position
**Advantages:** OpenClaw remains the undisputed market leader in **community scale** (500 issues/PRs daily) and **extension breadth**. Its plugin ecosystem is the most mature, supporting everything from obscure platforms (Matrix, iMessage) to complex enterprise protocols.

**Technical Approach:** Unlike lighter forks, OpenClaw is attempting to build a universal OS for agents. This introduces complexity (e.g., the `exec` approval controversy, environment variable handling regressions) that smaller projects avoid by being more opinionated.

**Community Comparison:** While projects like **NanoBot** and **NanoClaw** are capitalizing on OpenClaw's stability issues to attract users seeking "it just works" reliability, OpenClaw's sheer momentum ensures it remains the reference implementation. However, user feedback suggests a breaking point: heavy friction with Windows support and recent regressions has users actively looking for alternatives like ZeroClaw or NanoBot.

## 4. Shared Technical Focus Areas
Across the ecosystem, distinct requirements are emerging that all major projects are racing to solve:

*   **Multi-Model / Multi-Runtime Support (Vendor Agnostic)**
    *   *Projects:* **NanoClaw**, **NanoBot**, **ZeroClaw**, **CoPaw**.
    *   *Signal:* Users are demanding native support for GPT-5, DeepSeek, and local models (Ollama) within the same agent flow to mitigate risks associated with API key bans (e.g., Anthropic/OAuth) and cost.
*   **Protocol Standardization (MCP & A2A)**
    *   *Projects:* **OpenClaw**, **NullClaw**, **Moltis**, **NanoClaw**.
    *   *Signal:* Adoption of the Model Context Protocol (MCP) and Agent-to-Agent (A2A) protocol is accelerating. Users want agents that can share tools and memory interoperably.
*   **Memory & Context Management**
    *   *Projects:* **OpenClaw**, **NanoBot**, **NanoClaw**.
    *   *Signal:* Context window overflow is a leading cause of crashes. Users are demanding robust, built-in memory consolidation (vector DBs, retrieval) rather than manual prompt engineering.
*   **UX Safety & Data Integrity**
    *   *Projects:* **LobsterAI**, **NullClaw**, **Moltis**.
    *   *Signal:* A wave of reports regarding "silent data loss" (overwriting input text, closing windows without saving) is driving a focus on "destructive action" warnings and draft persistence.

## 5. Differentiation Analysis
Projects are diverging based on specific user personas:

*   **OpenClaw:** The "Power User" Platform. Targets users who want to run *everything* (i18n, obscure scripts, complex chains). Trade-off: High maintenance burden and instability.
*   **IronClaw:** The Enterprise/Crypto Native. Focuses on DID identity, WASM isolation, and "Routines" (reliability). Trade-off: Complex configuration (Docker/K8s) and emerging bugs in Engine v2.
*   **NanoBot & NanoClaw:** The Stability & Security Plays. Focusing on fixing OpenClaw's crashes (NanoBot) and securing containers (NanoClaw). Targeting users burned by OpenClaw's regressions.
*   **LobsterAI:** The Consumer UX layer. Focuses on a polished desktop app experience, shortcuts, and preventing "silent data loss." Targets non-technical users or those wanting a refined "Claude Code" feel.
*   **ZeroClaw:** The Cross-Platform Alternative. Aggressively fixing Windows issues and adding Tauri desktop apps. Positioning itself as the OS-agnostic alternative to macOS-centric tools.

## 6. Community Momentum & Maturity
*   **Tier 1 (High Velocity / High Stakes):** **OpenClaw** and **IronClaw**. These are shaping the standards but are currently plagued by self-inflicted bugs (regressions and Engine v2 failures). High risk, high reward.
*   **Tier 2 (Rapidly Maturing):** **CoPaw** and **ZeroClaw**. CoPaw is successfully stabilizing its beta (fixing critical CPU bugs), while ZeroClaw is iterating fast on UX (Desktop apps). Both are strong "alternative" candidates to Tier 1.
*   **Tier 3 (Niche / Reactive):** **LobsterAI** (UX focused), **NullClaw** (Observability focused). Excellent at specific tasks but rely on the broader ecosystem for protocol standards.
*   **Tier 4 (Stagnating):** **Moltis**. Low merge velocity and a backlog of unaddressed bugs suggest maintenance difficulties.

## 7. Trend Signals (For AI Developers)
*   **The "Approval Fatigue" Crisis:** Across **OpenClaw**, **IronClaw**, and **CoPaw**, there is a unanimous signal that manual approval for every tool execution (`/approve allow-always`) is unsustainable for autonomous agents. Developers should prioritize **"God Mode" toggles** or granular, persistent trust policies in their agent designs.
*   **Multi-Modal is the Default:** Projects failing to support native image handling (vision models) in their tooling (e.g., **NanoBot** PRs, **NullClaw** A2A updates) are being treated as having critical bugs. Vision is no longer optional.
*   **Windows is Not Second-Class:** Historically Linux/Mac-focused projects (like **ZeroClaw** and **OpenClaw**) are being forced to halt feature work to fix critical Windows onboarding errors. The enterprise user base is demanding Windows parity.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-05

## 1. Today's Overview
NanoBot is exhibiting **high velocity** development activity with 26 Pull Requests and 15 Issues updated in the last 24 hours. The project is currently in a heavy refactoring phase, focusing on streamlining agent tool registries, enhancing multimodal flows, and hardening runtime stability for long-running tasks. While the merge rate is healthy (12 closed PRs), the active issue count remains elevated (11 open), indicating rapid iteration alongside growing user demand. Community sentiment is positive, with users praising stability compared to competitors, though some friction points exist regarding recent upgrades and security strictness.

## 2. Releases
**No new releases** published in the last 24 hours. The project appears to be in a pre-release stabilization phase, consolidating changes (likely for `v0.1.5` or a similar milestone) given the high volume of "closed" PRs merging fixes for Telegram threading, `reasoning_content` handling, and GPT-5 support.

## 3. Project Progress
**Key Features Advanced & Fixes:**
*   **GPT-5 & Reasoning Models Support:** PR [#2788](https://github.com/HKUDS/nanobot/pull/2788) (Closed) added support for the `max_completion_tokens` parameter required by GPT-5 models and handled temperature omission for reasoning models (o1/o3/o4).
*   **Telegram Enhancements:** PR [#2793](https://github.com/HKUDS/nanobot/pull/2793) (Open) and PR [#2789](https://github.com/HKUDS/nanobot/pull/2789) (Closed) introduced support for Telegram's new "Threaded Mode" for DMs, fixing metadata copying issues to ensure replies land in the correct topic.
*   **Agent Runtime Refactoring:** PR [#2779](https://github.com/HKUDS/nanobot/pull/2779) (Closed) integrated Jinja2 templating for agent responses and memory consolidation, improving prompt flexibility.
*   **Tool Registry Streamlining:** PR [#2787](https://github.com/HKUDS/nanobot/pull/2787) (Open) aims to consolidate tool registration into a unified function to reduce code redundancy.
*   **Search Capabilities:** PR [#2754](https://github.com/HKUDS/nanobot/pull/2754) (Closed) added built-in `grep` and `glob` tools, addressing the lack of native file search.

## 4. Community Hot Topics
*   **[Issue #2343](https://github.com/HKUDS/nanobot/issues/2343): Context Window Management** (15 comments)
    *   **Topic:** Users are hitting `400` errors because `run_agent_loop` fails to check `contextWindowTokens`.
    *   **Underlying Need:** Users need robust history trimming or memory consolidation that actually respects hard token limits to prevent runtime crashes.
*   **[Issue #2760](https://github.com/HKUDS/nanobot/issues/2760): Retry Amplification Risk** (9 comments)
    *   **Topic:** Stacked retries (App layer + SDK layer) are tripling upstream load on providers.
    *   **Underlying Need:** Better configuration for retry logic to prevent API bans and cost overruns.
*   **[Issue #2774](https://github.com/HKUDS/nanobot/issues/2774): User Satisfaction/Comparison** (5 comments)
    *   **Topic:** User reports NanoBot is "very stable" and "completely destroys" the competitor `openclaw`.
    *   **Sentiment:** High satisfaction regarding stability on Windows compared to other agents.

## 5. Bugs & Stability
*   **[CRITICAL] Unbounded Session Growth: [Issue #2638](https://github.com/HKUDS/nanobot/issues/2638)**
    *   If memory consolidation fails, the session history grows infinitely, eventually causing the agent to hang or crash when exceeding the context limit.
*   **[HIGH] Regression in `reasoning_content`: [Issue #2777](https://github.com/HKUDS/nanobot/issues/2777)**
    *   Users reported that `reasoning_content` (for Kimi coding models) stopped outputting. Fix PR [#2786](https://github.com/HKUDS/nanobot/pull/2786) was merged today to restore keys dropped in a previous refactor.
*   **[MEDIUM] "Thinking" State Leakage: [Issue #2795](https://github.com/HKUDS/nanobot/issues/2795)**
    *   After upgrading, the bot outputs its internal reasoning process ("The user is asking...") to the chat instead of just the result. This is a significant UX regression.
*   **[MEDIUM] SSRF/Localhost Blocking: [Issue #2796](https://github.com/HKUDS/nanobot/issues/2796)**
    *   New security guards block `localhost` access, breaking local integrations (e.g., browser automation via PinchTab). PR [#2784](https://github.com/HKUDS/nanobot/pull/2784) is open to add an `allowInternalUrls` config flag.

## 6. Feature Requests & Roadmap Signals
*   **Unified Cross-Platform Sessions:** [Issue #2798](https://github.com/HKUDS/nanobot/issues/2798) requests a toggle to share a single session context across Discord, Telegram, etc.
*   **Dedicated Vision Models:** [Issue #2339](https://github.com/HKUDS/nanobot/issues/2339) requests the ability to route text requests to a reasoning model (e.g., o1) and image requests to a vision model (e.g., GPT-4o) within the same flow.
*   **Provider Fallback on Rate Limit:** [PR #2800](https://github.com/HKUDS/nanobot/pull/2800) proposes switching to fallback providers immediately upon receiving a 429 error, rather than retrying the same rate-limited provider.
*   **Interactive User Confirmation:** PR [#2791](https://github.com/HKUDS/nanobot/pull/2791) introduces an `ask_user` tool, allowing the agent to pause execution to request user input.

## 7. User Feedback Summary
*   **Stability:** Users report NanoBot is significantly more stable than alternatives (specifically `openclaw`), particularly on Windows.
*   **UX Regression:** The latest update has caused confusion by revealing internal "thought processes" in the final output [Issue #2795](https://github.com/HKUDS/nanobot/issues/2795).
*   **Installation Issues:** There are isolated reports of build failures for `python-olm` on newer Python versions [Issue #2802](https://github.com/HKUDS/nanobot/issues/2802).

## 8. Backlog Watch
*   **Multimodal Routing:** [Issue #2339](https://github.com/HKUDS/nanobot/issues/2339) (Open since Mar 21) regarding dedicated vision providers is still pending.
*   **Tailscale/CGNAT Access:** [Issue #2669](https://github.com/HKUDS/nanobot/issues/2669) highlights that the current SSRF protection blocks legitimate Tailscale IPs (100.64.0.0/10), which limits use for users with secure private network overlays.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Project Digest: ZeroClaw (2026-04-05)

## 1. Today's Overview
The ZeroClaw project is currently experiencing a high velocity development cycle, with **40 Pull Requests** updated in the last 24 hours (36 open) against **14 Issues** (12 open). This indicates a shift towards implementation and refinement rather than new requirement gathering. Activity is heavily concentrated on improving cross-platform stability (specifically Windows daemon issues), expanding multi-modal model support (GLM-5, DeepSeek), and hardening the ecosystem (sandboxing, memory recall). A significant portion of the PR workflow is attributed to a core maintainer (`MerlinMiao88888888`) addressing technical debt and integration bugs.

## 2. Releases
*No new releases published on 2026-04-05.*

## 3. Project Progress
While 4 PRs were marked closed or merged, the majority of progress today is found in the **open PR queue**, which features advanced implementations ready for review:
*   **Desktop App Ecosystem:** PR #5265 introduces a full **Tauri desktop app** framework, complete with SQLite persistence, macOS automation permissions, and E2E tests.
*   **Observability:** PR #5295 proposes adding event stream logging for agentic delegate modes to allow better debugging of sub-agent chains.
*   **i18n Refactoring:** PR #5293 seeks to solve a maintainability nightmare by splitting a monolithic 11,000-line translation file into type-safe, modular components.
*   **Windows Support:** Critical fixes for the Windows `onboard` command (PRs #5296, #5286) address "Access Denied" errors by skipping directory fsync, a breaking change in OS behavior that blocked new users.

## 4. Community Hot Topics
*   **[Discussion] Matrix Channel Usability**
    *   **Issue:** [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) (9 comments)
    *   **Topic:** "Matrix channel: friction tracker."
    *   **Analysis:** This umbrella issue highlights significant user frustration with the Matrix integration, specifically regarding End-to-End Encryption (E2EE) failures and unresponsive PRs. Users are actively tracking "Preferred PRs" to bypass stalled contributions, signaling a desire for community-led maintenance to unblock the feature.
*   **[Feature] Binary Size Research**
    *   **Issue:** [#5272](https://github.com/zeroclaw-labs/zeroclaw/issues/5272) (4 comments)
    *   **Topic:** Strategies to reduce compiled binary footprint and compile time.
    *   **Analysis:** As the project grows, compile times and binary sizes are becoming friction points for developers. There is strong interest in a "bloat-free" ZeroClaw variant.

## 5. Bugs & Stability
*   **[S0 - Critical] Windows "Access Denied" on Onboard:**
    *   **Issue:** [#5255](https://github.com/zeroclaw-labs/zeroclaw/issues/5255), [#5258](https://github.com/zeroclaw-labs/zeroclaw/issues/5258)
    *   **Details:** Multiple users report `zeroclaw onboard` failing at the final step due to `fsync` directory permissions on Windows.
    *   **Fix Available:** Yes, PR [#5296](https://github.com/zeroclaw-labs/zeroclaw/pull/5296) and PR [#5286](https://github.com/zeroclaw-labs/zeroclaw/pull/5286) address this by skipping directory sync on Windows.
*   **[S1 - High] WhatsApp Replies Silently Dropped:**
    *   **Issue:** [#5260](https://github.com/zeroclaw-labs/zeroclaw/issues/5260)
    *   **Details:** In `self_chat_mode`, the bot processes messages but the reply is never sent.
    *   **Fix Available:** Yes, PR [#5297](https://github.com/zeroclaw-labs/zeroclaw/pull/5297) resolves the LID reply target issue.
*   **[S1 - High] DeepSeek & Bedrock API Errors:**
    *   **Issues:** [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) (Bedrock 403), [#5268](https://github.com/zeroclaw-labs/zeroclaw/issues/5268) (DeepSeek 400).
    *   **Details:** Bedrock is sending `API_KEY` incorrectly; DeepSeek is failing because the context compressor strips required `tool_call_id` fields.
    *   **Fix Available:** PRs [#5249](https://github.com/zeroclaw-labs/zeroclaw/pull/5249) and [#5298](https://github.com/zeroclaw-labs/zeroclaw/pull/5298) address the API formatting.
*   **[S2 - Medium] GLM-5 "Thoughts" Leakage:**
    *   **Issue:** [#5285](https://github.com/zeroclaw-labs/zeroclaw/issues/5285)
    *   **Details:** Chain-of-thought reasoning is leaking into the final user message.
    *   **Fix Available:** Yes, PR [#5298](https://github.com/zeroclaw-labs/zeroclaw/pull/5298).

## 6. Feature Requests & Roadmap Signals
*   **Local-First Mode:** Issue [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) requests a "Compact No-Tools Prompting" mode to reduce token usage for small local models.
*   **Copilot Provider:** Issue [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) requests documentation/implementation for GitHub Copilot as a provider.
*   **Desktop Dashboard:** PR [#5292](https://github.com/zeroclaw-labs/zeroclaw/pull/5292) and [#5290](https://github.com/zeroclaw-labs/zeroclaw/pull/5290) indicate an imminent push to complete a web/desktop dashboard interface.
*   **Environment Variable Expansion:** PR [#5288](https://github.com/zeroclaw-labs/zeroclaw/pull/5288) signals a move towards more secure, token-less config files using `${env:VAR}` patterns.

## 7. User Feedback Summary
*   **Windows Stability:** A significant cluster of negative feedback comes from Windows users regarding file system permissions ("Access Denied"). The promptness of the fixes (PRs created within 24h) indicates high priority.
*   **Provider Compatibility:** There is friction with newer "thinking" models (GLM-5) and strict APIs (DeepSeek, Bedrock). Users are adopting these rapidly and hitting boundary cases in ZeroClaw's middleware.
*   **Documentation Gap:** Users specifically called out the lack of installation docs (Issue #5269) and GitHub Copilot setup (Issue #4851) as "Degraded Behavior."

## 8. Backlog Watch
*   **Critical Data Loss Bug:** Although recently closed, Issue [#1984](https://github.com/zeroclaw-labs/zeroclaw/issues/1984) regarding `compact_context` defaults causing silent data loss was a major S1 issue. Its closure suggests a fix, but users should verify their configurations.
*   **Android/Termux Support:** Issue [#5271](https://github.com/zeroclaw-labs/zeroclaw/issues/5271) (Closed) highlighted difficulties with PyTorch on Android, representing an edge case platform that requires持续的依赖管理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project digest for **NanoClaw** as of 2026-04-05.

### 1. Today's Overview
NanoClaw is experiencing a surge in development activity, with **20 Pull Requests** updated in the last 24 hours, signaling a robust phase of feature expansion and maintenance. The primary focus of the community and maintainers has shifted toward **multi-runtime support** (diversifying away from Claude-exclusive usage) and **security hardening**, particularly addressing container isolation issues. However, user sentiment regarding **Anthropic's billing policy changes** for OAuth tokens represents a growing concern for stability and cost management. The project appears healthy, with active maintenance on legacy bugs (deadlocks, cleanup scripts) alongside aggressive expansion into new communication channels (Matrix, Signal, Telegram).

### 2. Releases
*No new releases published in this period.*

### 3. Project Progress
**Merged & Closed Pull Requests**
*   **Infrastructure Hygiene:** PR #1632 (feat: auto-prune stale session artifacts) was closed. It introduced `scripts/cleanup-sessions.sh` to handle age-based pruning of logs and artifacts, protecting active sessions by querying the message database ([#1632](https://github.com/qwibitai/nanoclaw/pull/1632)).
*   **Fork Maintenance:** Issue #1627 regarding the rebasing of the NanoClaw fork on upstream has been closed, indicating synchronization with the parent codebase ([#1627](https://github.com/qwibitai/nanoclaw/issues/1627)).
*   **Migration & Setup:** Several PRs related to setup and migration workflows (#1634, #1633, #1622) were closed, suggesting the completion of internal tooling updates.

**Active Development (Review Worthy)**
*   **Multi-Backend Support:** Significant progress on PR #963 (OpenAI Codex SDK) and PR #1628 (OpenCode SDK). These aim to implement `AGENT_ENGINE` and `AGENT_RUNNER` environment variables to allow users to switch from the default Anthropic engine to open-source alternatives ([#963](https://github.com/qwibitai/nanoclaw/pull/963), [#1628](https://github.com/qwibitai/nanoclaw/pull/1628)).
*   **Channel Expansion:** New integrations for Matrix ([#1624](https://github.com/qwibitai/nanoclaw/pull/1624)) and enhanced Telegram features ([#1626](https://github.com/qwibitai/nanoclaw/pull/1626)) are open and awaiting review.

### 4. Community Hot Topics
*   **The "Alternative Runtime" Imperative**
    *   **Issue #80** ([Support runtimes... other than Claude](https://github.com/qwibitai/nanoclaw/issues/80)): **56 upvotes, 31 comments.** This is the most critical strategic discussion for the project. Users are reporting that Anthropic is revoking subscriptions for users of "OpenClaw" (NanoClaw's predecessor) and fear the same for NanoClaw. The community is strongly demanding support for local models (Ollama) and other providers (OpenAI, Gemini) to ensure longevity.
    *   **Underlying Need:** Survival and risk mitigation against platform vendor lock-in.

*   **Billing Confusion & OAuth Frustration**
    *   **Issue #1620** ([OAuth token auth now bills as extra usage](https://github.com/qwibitai/nanoclaw/issues/1620)): Users are discovering that using the convenient `CLAUDE_CODE_OAUTH_TOKEN` method bypasses their subscription allowance and charges them at "extra usage" rates (higher cost). There is a request to update documentation to steer users toward API keys.
    *   **Issue #1608** ([Claude setup-token / OAuth setup is confusing](https://github.com/qwibitai/nanoclaw/issues/1608)): Technical users are struggling with the interplay between `ANTHROPIC_API_KEY` placeholders and credential injection in containers.
    *   **Underlying Need:** Clear cost controls and better authentication documentation.

### 5. Bugs & Stability
**High Severity (Security/Isolation)**
*   **Container Security Gap:** PR #1629 (fix: harden OneCLI setup for public servers) highlights that the default Docker compose configuration exposes PostgreSQL and Gateway ports on `0.0.0.0`, bypassing UFW firewalls on public servers with default credentials. ([#1629](https://github.com/qwibitai/nanoclaw/pull/1629)).
*   **Read-Write Mount Risk:** PR #1630 identifies that the agent-runner source is mounted read-write inside containers. Since the agent runs with `bypassPermissions`, it can modify its own code, creating a persistence risk. ([#1630](https://github.com/qwibitai/nanoclaw/pull/1630)).

**Medium Severity (Functional)**
*   **Message Deadlock:** PR #1623 fixes a 30-minute deadlock occurring when messages are piped to an active container, caused by the SDK waiting for a stream close that the host cannot send. ([#1623](https://github.com/qwibitai/nanoclaw/pull/1623)).
*   **Task Scheduler Routing:** PR #1617 fixes a bug where scheduled tasks were enqueued under the caller's JID instead of the target group JID, preventing tasks from running correctly. ([#1617](https://github.com/qwibitai/nanoclaw/pull/1617)).

### 6. Feature Requests & Roadmap Signals
*   **Security Policy Engine:** PR #1605 proposes a deterministic (code-based, not prompt-based) security policy engine to enforce tool restrictions, user gating, and read-only mounts. This addresses the "God Mode" risks often associated with AI agents. ([#1605](https://github.com/qwibitai/nanoclaw/pull/1605)).
*   **Advanced Memory (RAG):** PR #1283 seeks to upgrade the memory system to `memory-lancedb-pro`, adding hybrid BM25+vector retrieval and reranking, which is a significant jump in capability for the agent's long-term memory. ([#1283](https://github.com/qwibitai/nanoclaw/pull/1283)).
*   **New Channels:** Requests for Signal ([#1121](https://github.com/qwibitai/nanoclaw/pull/1121)) and Mattermost ([#546](https://github.com/qwibitai/nanoclaw/pull/546)) indicate a desire to integrate NanoClaw into enterprise and privacy-focused workflows.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Fear of Ban:** The dominant sentiment in Issue #80 is anxiety that Anthropic will ban NanoClaw users, driving the urgent need for alternative backends.
    *   **Billing Shock:** Users in Issue #1620 are unhappy about "extra usage" charges when using OAuth, feeling misled about the subscription benefits.
    *   **Operational Complexity:** Users struggle with the OneCLI setup (Issue #1608), specifically regarding credential injection and file mounts.
*   **Satisfaction:** Users actively contributing PRs for alternative backends (OpenCode, OpenAI) are highly engaged and optimistic about the project's flexibility.

### 8. Backlog Watch
*   **OpenRouter Routing Issues:** PR #954 (Fix OpenRouter non-Anthropic model routing) remains open and in "Needs Review" status since March 11. This blocks users wanting to use cheaper or different models via the OpenRouter aggregation service. ([#954](https://github.com/qwibitai/nanoclaw/pull/954)).
*   **Mattermost Integration:** PR #546 is marked as "Blocked" despite implementing a highly requested channel feature for enterprise users. ([#546](https://github.com/qwibitai/nanoclaw/pull/546)).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the project digest for **NullClaw** as of **2026-04-05**.

## 1. Today's Overview
NullClaw is demonstrating high development velocity with **12 pull requests merged** in the last 24 hours, signaling a focus on stabilization and observability. The project has successfully closed critical bugs related to Docker configuration and process hanging, while simultaneously advancing core features like multi-modal support and OpenTelemetry tracing. While release velocity appears paused (no new releases in this window), the merged PRs suggest an imminent update is likely, possibly **v2026.3.22** or **v2026.4.0**, given the breadth of enhancements including debouncing and gateway configurability.

## 2. Releases
**No new releases detected** in the last 24 hours.
*Note: Based on the merged features (OTel, debounce, multi-modal), the active development branch appears to be accumulating changes for a pending release.*

## 3. Project Progress
The following major features and fixes have been merged into the codebase:

*   **Observability Enhancements ([PR #693](https://github.com/nullclaw/nullclaw/pull/693))**
    *   **Status:** Merged
    *   **Detail:** Significantly advanced OpenTelemetry (OTel) capabilities by adding channel attribution (`channel`, `bot_account`) to the `agent_start` event and implementing delegation tracing. This allows operators to trace specifically where an agent request originated and how it was delegated.
*   **Inbound Message Debouncing ([PR #676](https://github.com/nullclaw/nullclaw/pull/676))**
    *   **Status:** Merged
    *   **Detail:** Implemented a "wife-safe solution" (referencing issue #618). A shared inbound debouncer with a configurable `messages.inbound.debounce_ms` (default 3000ms) was added for Telegram, Discord, and CLI. This prevents the bot from responding to every single message in a rapid-fire stream, improving user experience significantly.
*   **Multi-Modal Support for A2A ([PR #686](https://github.com/nullclaw/nullclaw/pull/686))**
    *   **Status:** Merged
    *   **Detail:** Enabled end-to-end image (multi-modal) support over the A2A protocol. The agent can now advertise `multi_modal: true` in its capabilities and handle `inlineData` forwarding, including a "vision probe" to detect if a model supports vision before processing.
*   **Gateway Configurability ([PR #687](https://github.com/nullclaw/nullclaw/pull/687))**
    *   **Status:** Merged
    *   **Detail:** Made the HTTP body size limit (`gateway.max_body_size_bytes`) and request timeout configurable. This is crucial for operators running multi-modal workloads that exceed the previous 64KB hard-coded limit.
*   **Shell Tool Sandbox & Fixes ([PR #678](https://github.com/nullclaw/nullclaw/pull/678) & [PR #673](https://github.com/nullclaw/nullclaw/pull/673))**
    *   **Status:** Merged
    *   **Detail:** Implemented OS-level isolation (`sandbox` configuration) for shell tool execution. Additionally, fixed the critical bug where interactive commands (like `htop`) caused the gateway to hang by ignoring child stdin and enforcing timeouts.

## 4. Community Hot Topics
*   **Docker & Environment Variables**
    *   **Issue:** [#691](https://github.com/nullclaw/nullclaw/issues/691) (CLOSED)
    *   **Topic:** `cron.zig` ignored `NULLCLAW_HOME`, causing crashes in Docker.
    *   **Analysis:** Highlighted a fragility in the cron system regarding environment variables. The community pushed for a fix ([PR #692](https://github.com/nullclaw/nullclaw/pull/692)) which was merged, respecting `NULLCLAW_HOME` correctly in containerized environments.
*   **Interactive Command Handling**
    *   **Issue:** [#644](https://github.com/nullclaw/nullclaw/issues/644) (CLOSED)
    *   **Topic:** Gateway hanging on `htop`/`btop` in "YOLO mode".
    *   **Analysis:** Users are aggressively testing shell execution boundaries. The fix (PR #673) was prioritized and merged quickly, indicating this is a high-impact pain point for power users.

## 5. Bugs & Stability
The following new bugs were reported today. No fix PRs are currently linked to them.

*   **[CRITICAL] Configuration Corruption ([Issue #765](https://github.com/nullclaw/nullclaw/issues/765))**
    *   **Description:** The `onboard --interactive` wizard in v2026.3.21 generates a malformed `config.json` (content squashed/minified).
    *   **Impact:** High. Users cannot easily edit their config or may face parsing errors if the formatting breaks JSON structure.
*   **[HIGH] OpenAI-Compatible Provider Failures ([Issue #766](https://github.com/nullclaw/nullclaw/issues/766))**
    *   **Description:** Custom providers return a 404 if they do not support the standard `/chat/completions` endpoint, rather than falling back or erroring gracefully.
    *   **Impact:** Blocks users using non-standard custom endpoints.
*   **[MEDIUM] Anthropic API Compatibility ([Issue #767](https://github.com/nullclaw/nullclaw/issues/767))**
    *   **Description:** Difficulty configuring native Anthropic API keys; the Translator agent returns empty responses.
    *   **Impact:** Limits provider choice for users.

## 6. Feature Requests & Roadmap Signals
*   **AG-UI Protocol Support ([Issue #768](https://github.com/nullclaw/nullclaw/issues/768))**
    *   **Request:** Add support for the AG-UI (Agent-UI) streaming SSE protocol as a native gateway endpoint (`POST /ag-ui`).
    *   **Prediction:** This is likely to appear in the next minor version as it aligns with the recent push for better gateway endpoints (like A2A) and frontend integrations (DataRobot, CopilotKit).

## 7. User Feedback Summary
*   **Positive:** Users appreciate the "rapid-fire" message handling fix (Issue #618), indicating that the bot was previously too reactive for casual chat flows (e.g., sending multiple SMS).
*   **Negative:** Configuration management is a friction point. The report of `config.json` being generated in a "minified" unreadable format (Issue #765) suggests that the tooling around user onboarding needs refinement.
*   **Needs:** Users are actively trying to push the boundaries of the "Shell" tool, running interactive TUIs (`htop`) and managing complex Docker environments, indicating a high level of technical engagement from the user base.

## 8. Backlog Watch
*   **Open PR #675: [fix(gemini-cli)](https://github.com/nullclaw/nullclaw/pull/675)**
    *   This PR addresses a handshake alignment with `gemini-cli` 0.34. It has been open since March 21 and was updated in the last 24h but remains unmerged. This indicates a potential compatibility blocker with the latest Gemini CLI that needs resolution.
*   **Open Issues #765, #766, #767**
    *   These issues were opened just hours ago (April 4) and have no assigned fix PRs yet. They represent the "bleeding edge" of user feedback regarding config generation and provider compatibility.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for **2026-04-05**.

### 1. Today's Overview
The IronClaw project is experiencing a period of intense development activity, with **43 Pull Requests** updated in the last 24 hours alone, signaling a push toward a significant feature expansion. The repository is heavily focused on expanding "Routines" (automated agent tasks) and infrastructure scalability, evidenced by the introduction of WASM-based channels (WeChat, Matrix) and zero-knowledge proof integration (`proof_of_claw`). However, stability is a concern: production bugs regarding tool execution permissions and broken environment variable flags in Engine v2 have surfaced, suggesting rapid feature iteration is currently outpacing quality assurance (QA).

### 2. Latest Releases
*No new releases published on 2026-04-05.*

### 3. Project Progress
While the bulk of the 43 updated PRs remain open, significant progress was made in closing several infrastructure-related pull requests, including the integration of a new `proof_of_claw` crate for ZK proofs and iterations on workspace compaction logic.
*   **Closed/Merged Technical Debt:**
    *   `feat: add proof_of_claw crate...` ([#2016](https://github.com/nearai/ironclaw/pull/2016)): Adds ZK proofs and hardware approval hooks, likely closing a security/architectural milestone.
    *   `feat: nearai mcp by env` ([#1912](https://github.com/nearai/ironclaw/pull/1912)): Standardized environment variable handling for MCP server connections.
    *   `fix(agent,workspace): harden compaction...` ([#2020](https://github.com/nearai/ironclaw/pull/2020), [#2022](https://github.com/nearai/ironclaw/pull/2022)): Multiple iterations on database consistency fixes were closed, suggesting a patch for workspace concurrency issues was identified.

### 4. Community Hot Topics
The community is actively discussing the limitations of current engine capabilities and proposing architectural shifts for enterprise and secure use cases.

*   **Deterministic & Secure Orchestration:**
    *   **Issue [#2017](https://github.com/nearai/ironclaw/issues/2017)** (Deterministic SOP Engine): Users are requesting "Structured Workflows" to ensure agents follow strict business logic (e.g., financial audits) rather than open-ended reasoning.
    *   **Issue [#2018](https://github.com/nearai/ironclaw/issues/2018)** (Secure-by-Default A2A): A proposal to use DID-based Identity and WASM isolation to make multi-agent teams native and secure by default, rather than opt-in.
*   **Infrastructure Flexibility:**
    *   **Issue [#2023](https://github.com/nearai/ironclaw/issues/2023)**: A strong call for Kubernetes runtime support to replace fragile "Docker-in-Docker" setups for long-running instances.
*   **Massive Feature PRs:**
    *   **PR #1738** (Routine Reviews): Introduces a feedback loop where agents review their own completed routines. This is a major shift toward self-improving agents.
    *   **PR #1937** (Structured Collections): Aims to solve "list corruption" issues by adding typed CRUD tools for agent workspaces.

### 5. Bugs & Stability
Stability issues are primarily centered on the **Engine v2** rollout and the **Routines** system, which appear to be struggling with permission models.

*   **CRITICAL: Production Routine Failures**
    *   **Issue [#1996](https://github.com/nearai/ironclaw/issues/1996)**: "Task Cannot Complete — Tools Disabled". In production environments, Routines are failing because tools are disabled within the execution context. This is a blocker for users relying on automated tasks.
    *   **Fix Potential:** PR #1738 (related to routine reviews) may address some context issues, but a direct fix for #1996 is not explicitly listed in today's closures.
*   **HIGH: Engine v2 Configuration Regression**
    *   **Issue [#2010](https://github.com/nearai/ironclaw/issues/2010)**: The `AGENT_AUTO_APPROVE_TOOLS=true` environment variable is silently ignored in Engine v2. Users cannot bypass approval prompts for tools, breaking workflows that depend on unattended automation.
    *   **Fix Status:** Root cause identified in commit `4c9a985b`; no fix PR merged yet.
*   **MEDIUM: Functionality Gaps**
    *   **Issue [#2011](https://github.com/nearai/ironclaw/issues/2011)** (CLOSED): Engine v2 threads could reason about `mission_create` but not execute it due to the action not being exposed. (This was closed, likely via documentation or a quick patch).

### 6. Feature Requests & Roadmap Signals
Based on the new PRs and Issues, the project is moving aggressively toward **Multi-Platform Support** and **Crypto-Native Integration**.

*   **New Channels (WASM):**
    *   **Matrix (PR #2019)**: Native Matrix support with E2EE is being built.
    *   **WeChat (PR #1666)**: A first-party WeChat channel is in progress.
*   **Crypto/Infrastructure Integration:**
    *   **0G Integration (PR #2021)**: Hooks for 0G Compute/Storage are being added.
    *   **Kubernetes (Issue #2023)**: Formal request to move away from Docker-only isolation.
*   **Roadmap Prediction:** The next major version will likely focus on "Agent Teams" (multi-agent orchestration) and "Enterprise Infrastructure" (K8s, Matrix, structured data types).

### 7. User Feedback Summary
*   **Pain Points:**
    *   **"My lists are getting corrupted"**: Users are frustrated that agents cannot reliably edit simple lists (Grocery lists) without creating duplicates or breaking files. (Addressed by upcoming PR #1937).
    *   **"Tools are disabled"**: Users deploying Routines to production are finding them non-functional due to permission context issues.
    *   **"Docker is fragile"**: Advanced users running non-desktop workloads are hitting hard walls with Docker isolation.
*   **Satisfaction:**
    *   High satisfaction with the *security* model (DID/WASM proposals), but frustration with *implementation consistency* (Engine v2 bugs).

### 8. Backlog Watch
Several large, high-risk PRs remain open and warrant attention from maintainers to prevent merge conflicts or bit-rot.

*   **PR #1734** (First-class workspace entities): A massive, high-risk change to move workspaces from implicit `user_id` isolation to explicit DB-backed entities. This has been open since March 29 and touches almost every file in the repo.
*   **PR #1591** (Security hardening): A fix for TOCTOU (Time-of-check-time-of-use) races in approval processing. This is a security fix that remains open.
*   **PR #1470** (Routines notification normalization): Open since March 20, attempting to standardize how routine statuses are reported.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest - 2026-04-05

## 1. Today's Overview
The project is currently in a highly active maintenance phase, focusing significantly on user experience (UX) stability and data integrity. With **15 Pull Requests** updated in the last 24 hours (14 of which are new fixes), the development team is aggressively addressing a batch of UI interaction bugs and "silent data loss" issues reported by the community. While no new releases were published today, the high velocity of fixes suggests that a patch release (likely v4.3.1 or v4.4.0) is imminent to resolve these quality-of-life issues. The project remains responsive to user feedback, though specific feature requests for multi-agent orchestration are still pending.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
**Merged & Closed PRs:**
*   **[#797 (Closed)](https://github.com/netease-youdao/LobsterAI/pull/797)**: Fixed a critical startup failure in the OpenClaw gateway caused by invalid configuration writes for the `openclaw-weixin` plugin when the plugin was not installed.

**Active Development (Open PRs):**
The team is pushing a suite of fixes aimed at preventing accidental data loss in the UI:
*   **Input & Draft Safety**: PRs [#1477](https://github.com/netease-youdao/LobsterAI/pull/1477), [#1476](https://github.com/netease-youdao/LobsterAI/pull/1476), and [#1478](https://github.com/netease-youdao/LobsterAI/pull/1478) address "silent loss" of user text, covering scenarios like re-editing history messages, switching sessions during input debouncing, and memory leaks in the copy button.
*   **Modal & Configuration Safety**: PRs [#1475](https://github.com/netease-youdao/LobsterAI/pull/1475), [#1474](https://github.com/netease-youdao/LobsterAI/pull/1474), and [#1473](https://github.com/netease-youdao/LobsterAI/pull/1473) introduce "unsaved changes" confirmation dialogs to MCP Server, Agent Settings, and Agent Creation modals.
*   **Platform Polish**: PR [#1467](https://github.com/netease-youdao/LobsterAI/pull/1467) fixes macOS shortcut display (showing ⌘ instead of Ctrl), and [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463) resolves UI overflow issues with long titles.

## 4. Community Hot Topics
*   **[#1462: Multi-Agent Orchestration & Model Binding](https://github.com/netease-youdao/LobsterAI/issues/1462)**
    *   **Topic:** User `orion0608` praises the new multi-instance IM feature but explicitly requests "Agent Groups" and individual model binding per agent.
    *   **Analysis:** This highlights a growing need for more complex workflow management. Users want to move beyond single agents to a "Manager + Worker" architecture but prefer LobsterAI's UX over competitors like Alibaba's Hiclaw.

## 5. Bugs & Stability
**High Severity (Data Loss & UX Integrity):**
*   **[Issue #1472](https://github.com/netease-youdao/LobsterAI/issues/1472)**: Clicking "Re-edit" on history messages silently overwrites text currently in the input box. **Fix:** [PR #1477](https://github.com/netease-youdao/LobsterAI/pull/1477).
*   **[Issue #1471](https://github.com/netease-youdao/LobsterAI/issues/1471)**: Draft input is lost if the user switches sessions/views too quickly (race condition with debounce). **Fix:** [PR #1476](https://github.com/netease-youdao/LobsterAI/pull/1476).
*   **[Issue #1469 / #1470 / #1468](https://github.com/netease-youdao/LobsterAI/issues/1469)**: Multiple modals (Agent Settings, MCP Config, Create Agent) discard user input upon closing without confirmation ("Silent Loss"). **Fixes:** [PR #1474](https://github.com/netease-youdao/LobsterAI/pull/1474), [PR #1475](https://github.com/netease-youdao/LobsterAI/pull/1475), [PR #1473](https://github.com/netease-youdao/LobsterAI/pull/1473).

**Medium Severity:**
*   **[Issue #1465](https://github.com/netease-youdao/LobsterAI/pull/1465)**: "Ghost sessions" for deleted scheduled tasks reappear after app restart due to incomplete SQLite cleanup.

## 6. Feature Requests & Roadmap Signals
*   **Per-Agent Model Configuration**: Users want to bind different LLMs to specific agents ([Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462)).
*   **Multi-Agent Collaboration (Swarming)**: There is a strong demand for a "Manager" agent that can coordinate other agents in a room/group setting ([Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462)).
*   **IM Instance Management**: Following the v4.3 update, users are pushing for better validation to prevent duplicate IM instances ([PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464)).

## 7. User Feedback Summary
User sentiment is currently mixed regarding **reliability**. While features like multi-instance IM support are praised, users are reporting significant frustration with **destructive UI behaviors**—specifically the lack of "unsaved changes" warnings and the loss of draft text during navigation. The surge of fixes from the dev team indicates they recognize these as critical priority issues affecting trust.

## 8. Backlog Watch
*   **Multi-Agent Architecture**: The request in [Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462) for formal multi-agent capabilities remains open. This is a strategic feature that differentiates the project from simple wrappers.
*   **IM Stability**: Recent fixes in [PR #797](https://github.com/netease-youdao/LobsterAI/pull/797) and [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) suggest ongoing stability challenges with the OpenClaw gateway and scheduled task persistence that require long-term monitoring.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project digest for **Moltis** as of **April 5, 2026**.

### 1. Today's Overview
Moltis is currently experiencing a high volume of incoming bug reports without corresponding fixes, indicating a potential instability phase or a problematic recent release. All 6 issues updated in the last 24 hours remain open, with 5 of them labeled as bugs. Development activity is present but slow-paced relative to the influx of issues, with only 2 Pull Requests opened and no merges or releases recorded in the last day. The project appears to be focusing on expanding integrations (MCP and Telegram) while struggling with backend stability regarding provider management and OAuth.

### 2. Releases
*No new releases published in the last 24 hours.*

### 3. Project Progress
No Pull Requests were merged or closed in the last 24 hours. Development efforts are currently focused on inbound contributions:
*   **[PR #555: Add streamable http mcp server support](https://github.com/moltis-org/moltis/pull/555)**: A new feature was proposed to expose Streamable HTTP support for MCP servers, addressing issue #294.
*   **[PR #550: feat: support optional channel-level proxy for telegram](https://github.com/moltis-org/moltis/pull/550)**: A feature addition to allow proxy configuration at the channel level for Telegram integration.

### 4. Community Hot Topics
The most active discussions center on authentication and provider connectivity:
*   **[Issue #549: MacOS Desktop App doesn't do oauth flow for Codex](https://github.com/moltis-org/moltis/issues/549)** (1 comment)
    *   **Topic:** Authentication failures on MacOS.
    *   **Analysis:** Users on the MacOS desktop client are unable to complete the OAuth flow specifically for the Codex provider, blocking access to that service.
*   **[Issue #554: "Service unavailable" error when probing existing provider](https://github.com/moltis-org/moltis/issues/554)** (1 comment)
    *   **Topic:** API Key Validation logic.
    *   **Analysis:** There is a disconnect between the backend's validation probe and the actual provider API, resulting in "Service unavailable" errors even with valid credentials. This suggests a regression in the network handling or API compatibility layer.

### 5. Bugs & Stability
Stability concerns are high today, with 5 new bugs reported. The most critical issues affecting user workflows are:
1.  **[Provider Management Failure (#551, #552)](#(https://github.com/moltis-org/moltis/issues/551))**: Users reported that "Detect all models" fails to discover new models and only probes existing ones. Furthermore, the UI restricts users to selecting only one model per provider, forcing a workflow that does not match standard multi-model LLM usage.
2.  **Model Capability Mismatch (#556)**: Moltis is not respecting the vision capabilities of Mistral and Qwen models, likely disabling multimodal features (image analysis) that are otherwise supported natively.
3.  **Connectivity Issues (#554)**: Valid API keys are triggering false "Service unavailable" errors during provider probing.
4.  **Platform Specific (#549)**: MacOS OAuth integration is broken for Codex.

### 6. Feature Requests & Roadmap Signals
Based on the issues and PRs opened today, the community is asking for:
*   **Granular Network Control:** **[Issue #553](https://github.com/moltis-org/moltis/issues/553)** requests per-agent loopback and timeout settings. This indicates a need for better resource management and concurrency control when running multiple agents.
*   **Protocol Support:** **[PR #555](https://github.com/moltis-org/moltis/pull/555)** suggests a roadmap focus on standardizing Model Context Protocol (MCP) support, specifically streamable HTTP.
*   **Advanced Messaging Config:** **[PR #550](https://github.com/moltis-org/moltis/pull/550)** highlights a desire for more granular proxy configuration within the Telegram integration.

### 7. User Feedback Summary
User sentiment appears frustrated regarding **provider flexibility and reliability**.
*   **Pain Points:** The inability to select multiple models from a single provider (**#552**) and the model detection tool failing to actually "detect" models (**#551**) suggest the UI is overly restrictive or the backend logic is flawed.
*   **Configuration:** Users are requesting more fine-grained control over agent timeouts (**#553**) and proxies, implying they are pushing Moltis to its limits in complex network environments.

### 8. Backlog Watch
With 0 merges in the last 24 hours, the open Pull Requests need maintainer attention to prevent backlog bloat:
*   **[PR #555](https://github.com/moltis-org/moltis/pull/555)** (MCP Support): Currently undefined status, needs review to determine if it fits the architecture.
*   **[PR #550](https://github.com/moltis-org/moltis/pull/550)** (Telegram Proxy): Ready for review, relates to an active community request (#548).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-04-05

## 1. Today's Overview
CoPaw is demonstrating high development velocity and robust community engagement, with significant maintenance efforts underway in preparation for the next release. The project saw **37 items updated in the last 24 hours** (22 Issues, 15 PRs), indicating a very active "sprint" phase. A key highlight is the preparation for version **1.0.2b1**, suggesting the team is moving fast to patch critical bugs (like high CPU usage and tool-calling loops) and deliver frequently requested features (multi-message support and new channels). However, the dashboard also reveals fragmentation in multi-agent user experience and stability concerns with specific model integrations (Gemma4, Volcengine).

## 2. Releases
**Status:** Pre-release / Beta
- **v1.0.2b1 (Beta 1):** A version bump PR (#2942) was merged today, signaling the upcoming release.
    - **Expected Fixes:** Based on merged PRs, this version should address the critical `AnyIO` CPU idle loop (#2888) and the Feishu newline rendering bug (#2923).
    - **New Features:** Includes support for a `[SPLIT]` delimiter for multi-message sending (#2940) and the addition of the OneBot v11 channel (#2870).

## 3. Project Progress
**Key Features & Fixes Advanced:**
*   **Core Stability (Critical):** Merged PR for `AnyIO` fix (implied by #2942 context and #2888 activity) addresses the "100% CPU usage when idle" bug.
*   **Channel Expansion:**
    *   **OneBot v11:** Merged PR #2870 adds official support for NapCat/QQ integration, significantly expanding CoPaw's reach in the Chinese chatbot community.
    *   **WhatsApp:** A new PR (#2946) was opened to replace a previous attempt, aiming to add WhatsApp support via the `neonize` library.
    *   **Feishu:** PR #2924 (Open) proposes a fix for message formatting, specifically preserving newlines in posts.
*   **Interaction Enhancements:**
    *   **Multi-Message Support:** Merged PR #2940 introduces a `[SPLIT]` delimiter, allowing the AI to send multiple separate messages in one response turn.
    *   **Model Discovery:** Merged PR #2938 restricts the "Discover Models" feature to local providers (Ollama, LM Studio) to prevent issues with cloud APIs.
*   **Local Updates:** PR #2889 (Merged) enables updating Llama.cpp directly from the CoPaw Local interface.

## 4. Community Hot Topics
**Most Discussed & Active Issues:**

*   **[Bug] High CPU usage / power consumption - when idle (#2888)**
    *   **Activity:** 7 comments (Updated 2026-04-04).
    *   **Analysis:** This is the most critical stability issue currently. Users are reporting CoPaw consumes ~100% CPU core while idle. The technical deep dive points to a busy loop in `AnyIO` cancellation handling.
    *   **Link:** https://github.com/agentscope-ai/CoPaw/issues/2888

*   **[Bug] Feishu post message newlines not rendered correctly (#2923)**
    *   **Activity:** 7 comments (Updated 2026-04-04).
    *   **Analysis:** Affects enterprise users. The root cause was identified in `_collapse_embedded_newlines` (shell.py) stripping all formatting. A fix PR (#2924) is already in progress.
    *   **Link:** https://github.com/agentscope-ai/CoPaw/issues/2923

*   **[Feature] Multi-message Support (#2939)**
    *   **Activity:** Related PR (#2940) Merged.
    *   **Analysis:** Users requested more "human-like" conversation flows where the agent can send multiple messages at once (e.g., a thought, then a code block). This was successfully delivered today via the `[SPLIT]` delimiter.
    *   **Link:** https://github.com/agentscope-ai/CoPaw/issues/2939

## 5. Bugs & Stability
**Critical & High Severity:**

1.  **[CRITICAL] Infinite Tool Call Loop (Gemma4 Models) (#2947):**
    *   **Description:** Using `google/gemma-4-31b` causes the agent to enter an infinite loop calling tools like `execute_shell_command` without terminating.
    *   **Impact:** Renders this specific model family unusable for agent tasks.
    *   **Link:** https://github.com/agentscope-ai/CoPaw/issues/2947

2.  **[CRITICAL] High CPU Idle Usage (#2888):**
    *   **Description:** Busy polling loop in AnyIO drains battery/laptop resources.
    *   **Status:** Likely fixed in incoming 1.0.2b1.
    *   **Link:** https://github.com/agentscope-ai/CoPaw/issues/2888

3.  **[HIGH] Browser Process Leaks (#2934):**
    *   **Description:** The `browser_use` tool does not kill Chromium processes correctly if only "close" is called instead of "stop". This leads to resource leaks.
    *   **Link:** https://github.com/agentscope-ai/CoPaw/issues/2934

4.  **[MEDIUM] Custom Provider Failures (#2919):**
    *   **Description:** `volcengine-plan` fails with `TypeError: Unexpected keyword argument 'provider_id'`.
    *   **Link:** https://github.com/agentscope-ai/CoPaw/issues/2919

5.  **[UI/UX] GUI "Approve" Command Input Issues (#2945):**
    *   **Description:** Users find typing the approve command tedious and unreliable.
    *   **Link:** https://github.com/agentscope-ai/CoPaw/issues/2945

## 6. Feature Requests & Roadmap Signals
*   **Agent Teams & Context:** Users are explicitly asking for "Claude Code style" agent team functionality (#2922), citing that current multi-agent interaction is stiff and lacks context alignment.
*   **UI Improvements:**
    *   **Download Button for Audio (#2948):** A specific request to add a download button for generated audio.
    *   **Session Pinning (#2936):** Users want to "pin" important agent sessions to the top of the list.
    *   **Approve Button (#2945):** Request to change the CLI-style "approve" command in the GUI to an actual clickable button.
*   **File System Memory UI (#2929):** Request for a file-system-like view for the memory/workspace folder.
*   **CMD Window Hiding (#2933):** Windows users want the CMD window to remain hidden when shell commands are executed.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Multi-Agent Chaos:** Users feel the current multi-agent setup generates too many separate conversation windows and lacks context (#2937, #2922).
    *   **Model Compatibility:** Frustration with specific models (Gemma4, Volcengine) and third-party proxies failing connection tests (#2941).
    *   **UI Friction:** Discontent with having to type commands to approve actions and the inability to organize active sessions (#2945, #2936).
*   **Positive Signals:**
    *   The `[SPLIT]` feature and new channel integrations (QQ, WhatsApp) show users want CoPaw to be more versatile and conversational.

## 8. Backlog Watch
*   **Issue #2523 (PR):** Cross-platform `.gitattributes` improvement. Open since March 30, updated recently.
*   **Issue #2453 (PR):** Heartbeat control mechanism. Open since March 28. Long-running infrastructure task.
*   **Issue #1192 (PR):** OpenRouter provider support. Open since March 10. This is a significant integration that seems stalled or requires extensive review.
*   **Issue #2921 (Question):** Third-party proxy connection issues. Users are struggling to connect to non-standard APIs (like custom claude-opus-4-6), indicating a need for better provider configuration flexibility.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*