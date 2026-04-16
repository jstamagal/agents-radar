# OpenClaw Ecosystem Digest 2026-04-16

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-16 00:18 UTC

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

# OpenClaw Project Digest: 2026-04-16

## 1. Today's Overview
OpenClaw is experiencing a **critical surge in development velocity** with **500 issues and 500 PRs** updated in the last 24 hours alone. The project has released a beta version (`v2026.4.15-beta.1`) focusing on operational visibility, specifically regarding model authentication and rate limiting. However, the project is currently facing a **severe stability crisis** caused by a widespread regression in the `v2026.4.14` release, which has triggered a massive influx of bug reports regarding installation failures and UI responsiveness. The community is highly active, debating core architectural proposals like Agent Identity while simultaenously scrambling to fix broken onboarding flows.

## 2. Releases
**New Release: v2026.4.15-beta.1**
This beta release addresses operational visibility for developers running OpenClaw instances.
*   **Model Auth Status Card:** A new Control UI component has been added to display the health of OAuth tokens and provider rate-limit pressure at a glance.
*   **Gateway Method:** Backed by a new `models.authStatus` gateway method which strips credentials and implements a 60-second cache.
*   **Attention Callouts:** The UI will now alert users when OAuth tokens are expiring or expired.
*   *Note:* This release follows the problematic `v2026.4.14` and is likely aimed at helping debug the authentication issues plaguing the current version.

## 3. Project Progress
Despite the high volume of activity (362 open PRs), the primary "progress" today involves triaging the fallout from the latest release rather than landing major new features.
*   **Sanitization Improvements:** PR [#65508](https://github.com/openclaw/openclaw/pull/65508) aims to strip `tool_call` XML tags from user-facing messages to prevent internal leakage into chat channels.
*   **Bug Fixes in Flight:**
    *   PR [#66617](https://github.com/openclaw/openclaw/pull/66617) addresses a skill-watcher bug on macOS.
    *   PR [#67124](https://github.com/openclaw/openclaw/pull/67124) fixes a pairing issue for local backend clients.
*   **Installer & QA:** Significant work is ongoing in PR [#67395](https://github.com/openclaw/openclaw/pull/67395) to fix the pnpm.exe runner and Lobster runtime on Windows, and PR [#67428](https://github.com/openclaw/openclaw/pull/67428) is refactoring QA lab runtimes.

## 4. Community Hot Topics
The community is currently dominated by a **Release Crisis** and a major **Architectural Proposal**.

*   **[#49971 RFC: Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971)** (89 comments)
    *   **Topic:** A proposal by MolTrust (CryptoKRI GmbH) to integrate ERC-8004, W3C DID, and W3C VC standards for verifying agent identity.
    *   **Sentiment:** High interest in the "Agent Economy" and security standards.
*   **[#66718 TypeError: Cannot read properties of undefined (reading 'trim')](https://github.com/openclaw/openclaw/issues/66718)** (13 comments, 👍 7)
    *   **Topic:** The `openclaw configure` wizard crashes consistently.
    *   **Sentiment:** Frustration. Users are unable to use the software after updating.
*   **[#45064 Memory Leak - OOM on basic commands](https://github.com/openclaw/openclaw/issues/45064)** (31 comments)
    *   **Topic:** 2026.3.12 release causes JavaScript heap out of memory on basic commands.
    *   **Sentiment:** Critical stability concern.
*   **[#25592 Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592)** (19 comments)
    *   **Topic:** Internal agent processing (e.g., "thinking", "error handling") is being posted publicly to Slack/iMessage.
    *   **Sentiment:** Major UX/Privacy embarrassment for users deploying agents in professional environments.

## 5. Bugs & Stability
**Severity: CRITICAL / BLOCKER**
A regression in `v2026.4.14` has broken the onboarding and configuration experience for nearly all new users.
*   **The "trim()" Crash:** At least 8 distinct issues (e.g., [#66718](https://github.com/openclaw/openclaw/issues/66718), [#67353](https://github.com/openclaw/openclaw/issues/67353), [#67291](https://github.com/openclaw/openclaw/issues/67291), [#67074](https://github.com/openclaw/openclaw/issues/67074)) report `TypeError: Cannot read properties of undefined (reading 'trim')`.
    *   *Impact:* Users cannot install or configure OpenClaw. The crash occurs during "Select channel (QuickStart)" even when selecting "Skip".
    *   *Status:* Root cause identified in the bundled setup plugin metadata; fix pending.
*   **Windows UI Regression:** Issue [#67035](https://github.com/openclaw/openclaw/issues/67035) reports that on Windows, the chat UI swallows input text and makes streamed replies invisible.
*   **Cloudflare 403 on Codex:** Issue [#66633](https://github.com/openclaw/openclaw/issues/66633) notes that `openai-codex` requests fail with a Cloudflare challenge, likely due to changes in the `2026.4.14` request headers/proxying.

**Severity: HIGH**
*   **macOS Sequoia Chrome Profile:** Issue [#18598](https://github.com/openclaw/openclaw/issues/18598) - Downloads in isolated Chrome profiles are unclickable, effectively breaking file automation.
*   **Context Engine Errors:** Issue [#66601](https://github.com/openclaw/openclaw/issues/66601) - `lossless-claw` factory returns invalid ID, making the system unusable.

## 6. Feature Requests & Roadmap Signals
*   **Serper.dev Integration:** Issue [#20562](https://github.com/openclaw/openclaw/issues/20562) is gaining traction (👍 6). Users want to replace Brave Search (which killed its free tier) with Serper.dev for `web_search`.
*   **Recursive Memory Search:** Issue [#34400](https://github.com/openclaw/openclaw/issues/34400) requests `memory_search` to support subdirectories (`memory/**/*.md`) rather than just top-level files. This is crucial for long-term memory management.
*   **Per-Agent Dreaming Control:** PR [#67420](https://github.com/openclaw/openclaw/pull/67420) proposes allowing agents to opt-out of "dreaming" (memory consolidation) to prevent OOM crashes when running multiple agents.
*   **MCP Apps Protocol:** PR [#66168](https://github.com/openclaw/openclaw/pull/66168) aims to extend the gateway to support the Model Context Protocol (MCP), enabling tools, resources, and UI meta-discovery.

## 7. User Feedback Summary
*   **Pain Point - Windows Support:** Users are vocal about Windows being a second-class citizen. Between the installation failures (pnpm/Lobster issues) and the UI regression (#67035), the Windows experience is currently described as "broken."
*   **Pain Point - "Leaky" Agents:** Users are embarrassed by their agents. Issues like #25592 (internal thoughts leaking to Slack) and #65994 (exec completion events appearing as system messages) indicate a lack of output filtering, making agents look unprofessional.
*   **Pain Point - Onboarding:** The "QuickStart" onboarding flow is currently a blocker. Even advanced users cannot skip it without triggering a crash.
*   **Satisfaction:** Despite the bugs, engagement is high (500 updates in 24h), and requests for advanced features (DID, Agent Economy) show a committed, sophisticated user base.

## 8. Backlog Watch
*   **[#18598 macOS Sequoia Chrome Downloads](https://github.com/openclaw/openclaw/issues/18598):** Open since Feb 2026, this issue breaks a core automation feature (downloading files) for Mac users. It remains open with recent comments.
*   **[#25592 Text Leaks to Channels](https://github.com/openclaw/openclaw/issues/25592):** A "stale" issue that represents a fundamental UX flaw. It has recent comments but no apparent fix merged.
*   **[#43419 npm install fails without Git](https://github.com/openclaw/openclaw/issues/43419):** A friction point for new users who don't have Git installed, caused by a transitive dependency sourcing from GitHub instead of npm.
*   **RFC #49971:** This is a long-term strategic item. While not a "bug," it requires significant architectural work and should not be lost in the noise of daily bug reports.

---

## Cross-Ecosystem Comparison

# Ecosystem Analysis Report: Personal AI Assistant & Agent Landscape
**Date:** 2026-04-16
**Analyst:** Senior AI Ecosystem Observer

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is currently undergoing a **high-velocity growth phase**, characterized by intense feature iteration and architectural refactoring. The landscape is bifurcating into "generalist" frameworks (like **OpenClaw** and **CoPaw**), which are prioritizing broad platform integrations (Slack, Discord) and complex orchestration, versus "specialist" tools (like **Moltis** and **LobsterAI**), which are focusing on deep stability for specific ecosystems or enterprise-grade compliance. A dominant technical trend across all active projects is the adoption of the **Model Context Protocol (MCP)**, with over 75% of active repositories implementing or requesting MCP server integrations to standardize tooling. However, this rapid expansion is causing widespread stability debt; nearly every major project is currently battling critical regressions related to memory management, UI responsiveness, and configuration complexity, signaling that the ecosystem has entered a "trough of disillusionment" regarding reliability before maturing into enterprise-ready stacks.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Primary Focus |
| :--- | :---: | :---: | :--- | :---: | :--- |
| **OpenClaw** | 500 (Triage) | 500 | Beta (v2026.4.15) | **CRITICAL** | Generalist / Ecosystem Core |
| **CoPaw** | 50 | 50 | v1.1.2-beta.1 | **High Risk** | Modular Skills / Routing |
| **NanoBot** | 17 | 46 | Nightly | **Moderate** | Performance / Infrastructure |
| **PicoClaw** | 7 | 26 | Nightly (v0.2.6) | **Unstable** | Multi-Agent Orchestration |
| **Moltis** | 1 | 20 | Dev Build | **Recovering** | Provider Compatibility |
| **IronClaw** | 17 | 43 | None (Pre-Rel) | **Hardening** | Security / Governance |
| **LobsterAI**| 3 | 27 | Stable (v26.4) | **Stable** | Enterprise / GUI Wrapper |
| **Zeroclaw** | ~10 | 34 | None | **Regressing** | Microkernel Transition |
| **NanoClaw** | 5 | 17 | None | **Feature Heavy** | Infrastructure Migration |
| **NullClaw** | ~4 | ~8 | None | **Maint Mode** | Zig Runtime / Low-level |
| **EasyClaw**| 0 | 1 | v1.7.11 | **Stable** | Desktop Client |

_*Health Score based on blocker bugs vs. throughput. OpenClaw is marked CRITICAL due to the `v2026.4.14` "trim()" crash blocking all new installations._

## 3. OpenClaw's Position
**Advantages:**
OpenClaw remains the **undisputed leader in community scale and developer mindshare**, evidenced by the sheer volume of activity (500 issues/PRs) and sophisticated discussions regarding "Agent Identity" (ERC-8004). It serves as the de-facto reference implementation for agentic architectures.
**vs. Peers:**
Unlike **IronClaw**, which is prioritizing strict governance and security (P0 secret scanning), or **PicoClaw**, which is moving faster on multi-agent delegation (`/delegate` tool), OpenClaw is currently hampered by **technical debt**. Its monolithic architecture is struggling under the weight of its features, leading to the critical "trim()" regression that *NanoBot* and *Moltis* (which have smaller, tighter codebases) have managed to avoid largely due to their focus on specific stacks (Rust/Python optimizations).
**Community:**
OpenClaw’s community is the most demanding, expecting enterprise-grade features (Identity, DID standards) while simultaneously struggling with basic onboarding bugs.

## 4. Shared Technical Focus Areas
*   **Model Context Protocol (MCP) Integration:**
    *   **Projects:** *PicoClaw* (PR #2535), *OpenClaw* (PR #66168), *Moltis* (General support).
    *   **Need:** Standardized discovery and connection to external tools and data sources.
*   **Local LLM & LM Studio Support:**
    *   **Projects:** *NanoBot* (PR #3186), *PicoClaw* (Issue #28), *NanoClaw* (PR #1784).
    *   **Need:** Users are demanding frictionless usage of local models (Ollama, LM Studio) to reduce API costs and ensure privacy.
*   **Memory Consolidation & "Dreaming":**
    *   **Projects:** *OpenClaw* (PR #67420), *NanoBot* (Issue #2957), *Moltis* (PR #728).
    *   **Need:** Fixing "bloated" memory files and preventing Out-of-Memory (OOM) crashes during long-term agent consolidation tasks.
*   **Multi-Agent Orchestration:**
    *   **Projects:** *PicoClaw* (Merged #2484), *CoPaw* (Mission Mode PR #3364).
    *   **Need:** Moving beyond single-chat bots to systems of agents (Manager -> Sub-agent).
*   **Platform Windows Support:**
    *   **Projects:** *OpenClaw* (Issue #67035), *NullClaw* (Issue #820), *EasyClaw* (Gatekeeper).
    *   **Need:** Universal struggles with GUI, input text handling, and permissions on Windows and Linux (Deepin/Sequoia).

## 5. Differentiation Analysis
*   **Architecture Philosophy:**
    *   **Microkernel:** *Zeroclaw* is attempting a radical shift to a microkernel architecture (RFC #5574) to solve build and modularity issues, while *OpenClaw* remains a monolithic "reactive" engine.
    *   **Runtime:** *NullClaw* differentiates by using **Zig 0.16**, offering performance and safety benefits that Python/Node-based stacks (OpenClaw, NanoClaw) cannot match, albeit with higher compilation friction.
*   **Target User & UX:**
    *   **Enterprise/Business:** *LobsterAI* focuses on "Cowork" features and integrates deeply with enterprise Chinese IM (DingTalk, Weixin), whereas *IronClaw* focuses on hosted stability and security guardrails.
    *   **Developer/Power User:** *CoPaw* targets developers with "Mission Mode" and advanced routing, while *EasyClaw* targets end-users seeking a simple desktop client (RivonClaw).
    *   **Integration Focus:** *NanoBot* is heavily optimizing for "Channels" (Teams, Feishu, WebSockets), positioning itself as an integration middleware layer.

## 6. Community Momentum & Maturity
*   **Tier 1 (Rapid Iteration / High Risk):** **OpenClaw** and **CoPaw**. These projects have the highest velocity but are currently suffering from the most severe regressions (install failures, data loss). They are "Too big to fail" but currently fragile.
*   **Tier 2 (Stabilizing & Maturing):** **Moltis** and **LobsterAI**. Both projects have recently merged significant batches of fixes (Provider compatibility, UI stability) and are moving toward predictable release cycles.
*   **Tier 3 (Architectural Pivots):** **Zeroclaw**. The project is in a philosophical debate (RFCs) regarding its future, which may stall immediate feature velocity in favor of long-term structural health.
*   **Tier 4 (Niche / Maintenance):** **NullClaw** (Performance focused), **EasyClaw** (Desktop client), **TinyClaw** (Inactive).

## 7. Trend Signals for AI Developers
1.  **The "Agent Identity" Crisis:** The discussion in *OpenClaw* (Issue #49971) regarding **ERC-8004 and DIDs** signals that the ecosystem is moving toward "verifiable agents." Developers should prepare to integrate cryptographic identity proofs into their agents.
2.  **Cost-Control Routing:** There is a massive demand for routing logic (CoPaw PR #3443, OpenClaw Issue #20562) that intelligently switches tasks between **expensive cloud models** (GPT-4/Claude) and **cheap local models** (Llama 3/Groq) based on task complexity.
3.  **Security as a Differentiator:** *IronClaw's* focus on secret scanning and *Zeroclaw's* move toward granular TOTP gating indicate that **security** is becoming the primary bottleneck for enterprise adoption, overtaking "feature velocity."
4.  **UX Fragility:** The ubiquity of "leaky agent" reports (internal thoughts posting to Slack/Discord) across *OpenClaw*, *NanoBot*, and *PicoClaw* suggests a lack of standardized "Sanitization Layers." Developers building agents must implement robust output filtering to prevent professional embarrassment.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-16

## 1. Today's Overview
NanoBot is experiencing a period of intense development activity, with 46 Pull Requests and 17 Issues updated in the last 24 hours. The project appears to be in a "sprint" phase, focusing heavily on performance optimization, infrastructure hardening (MessageBus, ContextVars), and expanding channel integrations (specifically Microsoft Teams and WebSocket). While the sheer volume of PRs suggests rapid iteration, the influx of new bug reports—particularly regarding memory corruption (Issue #3190) and documentation gaps for custom providers—signals potential growing pains as the codebase scales. No new releases were published today, indicating that recent features are likely consolidating on the `nightly` branch.

## 2. Releases
*No new releases published today.*

## 3. Project Progress
**Merged/Closed Features & Fixes (Last 24h):**
*   **Microsoft Teams Channel Integration:** The first major iteration of the MS Teams channel (PR #2600) was closed to make way for a reintegrated version, indicating active refinement of this feature.
*   **Performance & Stability Suite:** A significant batch of fixes (PR #3158, split into #3180, #3181, #3182, #3184) was closed. These address **MessageBus backpressure** (bounded queues), **I/O performance** (history write batching), and **caching** (bootstrap files/schemas), substantially improving responsiveness under load.
*   **Provider Flexibility:** Support for **LM Studio** and nullable API keys was merged (PR #3186), removing friction for local LLM users.
*   **Heartbeat Enhancements:** Feature PR #3156 (merged/closed) introduced per-phase model overrides for the heartbeat mechanism, allowing different models for evaluation vs. execution phases.

## 4. Community Hot Topics
*   **[Major Regression] Memory Incompatibility (#3190):**
    *   **Issue:** [HKUDS/nanobot#3190](https://github.com/HKUDS/nanobot/issues/3190)
    *   **Activity:** 1 comment (Created today).
    *   **Analysis:** A user reports a critical error during startup (`AttributeError: 'function' object has no attribute 'is_callable'`) after upgrading `v0.1.5` to `v0.1.5.post1`, suspected to be a memory incompatibility. This is the most critical topic as it renders the system unusable for upgraders.

*   **Teams Channel Re-integration (#3191 & #2921):**
    *   **PR:** [HKUDS/nanobot#3191](https://github.com/HKUDS/nanobot/pull/3191) | **Issue:** [HKUDS/nanobot#2921](https://github.com/HKUDS/nanobot/issues/2921)
    *   **Activity:** High engagement in PRs; Issue highlights config exposure without implementation.
    *   **Analysis:** There is a strong focus on polishing the Microsoft Teams integration, specifically handling "restart notifications" and quote fallbacks correctly.

*   **AgentHiFive Integration (#3144):**
    *   **PR:** [HKUDS/nanobot#3144](https://github.com/HKUDS/nanobot/pull/3144)
    *   **Activity:** Open PR.
    *   **Analysis:** This PR proposes adding a new integration, signaling the ecosystem's expansion into new agent tools and MCP backends.

## 5. Bugs & Stability
*   **Critical - Startup Failure (Regression):** [Issue #3190](https://github.com/HKUDS/nanobot/issues/3190) - `v0.1.5.post1` fails to start due to a memory/agent loop error.
*   **High - Memory/Data Loss:**
    *   [Issue #2957](https://github.com/HKUDS/nanobot/issues/2957) - "Dream overwriting MEMORY.md" (file became blank).
    *   [Issue #1186](https://github.com/HKUDS/nanobot/issues/1186) - "Memory consolidation results in bloated memory file."
*   **Medium - Channel Logic:**
    *   [Issue #3166](https://github.com/HKUDS/nanobot/issues/3166) - Feishu channel ignores `send_progress` config.
    *   [Issue #3115](https://github.com/HKUDS/nanobot/issues/3115) - Cron jobs with `deliver: false` still output messages.
    *   [Issue #3006](https://github.com/HKUDS/nanobot/issues/3006) - No warning when API key is in arrears (silent failure).

## 6. Feature Requests & Roadmap Signals
*   **Custom Provider Support:** Users are requesting better support for non-standard providers (Anthropic API compatibility in [Issue #3095](https://github.com/HKUDS/nanobot/issues/3095); LM Studio now supported via PR).
*   **Feishu Enhancements:** Request for task completion emojis ([Issue #2750](https://github.com/HKUDS/nanobot/issues/2750)) and fixing progress notifications ([#3166](https://github.com/HKUDS/nanobot/issues/3166)).
*   **Self-Inspection Tools:** PR #3177 adds a `MyTool` feature, allowing the agent to introspect its own state (tokens, model, config) at runtime.
*   **WebSocket Infrastructure:** PR #3179 proposes advanced WebSocket tooling, session lifecycle management, and reasoning content handling.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Upgrade Anxiety:** The regression in `.post1` has scared users regarding data integrity ([#3190](https://github.com/HKUDS/nanobot/issues/3190), [#2957](https://github.com/HKUDS/nanobot/issues/2957)).
    *   **Opacity:** Users find the system "black box" regarding task counts and status ([#3107](https://github.com/HKUDS/nanobot/issues/3107)).
    *   **Memory Management:** Users are manually cleaning up "bloated" memory files because automatic consolidation is ineffective ([#1186](https://github.com/HKUDS/nanobot/issues/1186)).
*   **Use Cases:**
    *   Heavy usage of **Cron/Scheduled tasks** ([#3123](https://github.com/HKUDS/nanobot/issues/3123), [#3115](https://github.com/HKUDS/nanobot/issues/3115)) indicates reliance on autonomous agent behaviors.
    *   **Custom Skills:** Users are actively building custom skills (e.g., Google Calendar) but hitting "Tool Not Found" errors ([#623](https://github.com/HKUDS/nanobot/issues/623)).

## 8. Backlog Watch
*   **[Issue #2220](https://github.com/HKUDS/nanobot/issues/2220)** (Proposal: ContextVar for tool routing): Open since March. The underlying issue (tool routing safety) is actively being addressed in new PRs (#3180), suggesting this proposal is being implemented piecemeal but the issue itself remains open/unclosed.
*   **[Issue #2921](https://github.com/HKUDS/nanobot/issues/2921)** (MS Teams restart notify): Opened in April, relates to the ongoing Teams channel integration PRs. Needs closing once the current PR #3191 is merged.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-04-16

## 1. Today's Overview
The Zeroclaw project is experiencing a period of high activity, though the community sentiment appears mixed. Development velocity is strong, with 34 open PRs actively being refined, largely focused on architectural refactoring and provider compatibility. However, user-facing stability is a concern; the "Web Dashboard not available" issue remains the top community pain point, marked as a critical workflow blocker (S1). The project is currently undergoing significant architectural introspection, with multiple active RFCs discussing a transition to a microkernel architecture and improved governance. Overall, the project shows healthy engagement from core contributors but faces challenges with build complexity, documentation gaps, and integration bugs.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
*   **Refactoring for Tool Safety & Rate Limiting:** A significant effort is underway to modularize tool security. PRs [#5772](https://github.com/zeroclaw-labs/zeroclaw/pull/5772), [#4954](https://github.com/zeroclaw-labs/zeroclaw/pull/4954), and [#4953](https://github.com/zeroclaw-labs/zeroclaw/pull/4953) are delegating rate-limiting and path-guarding logic to wrapper structs (e.g., `RateLimitedTool`, `PathGuardedTool`), removing inline guards from individual tools like search and runners.
*   **Security Enhancements:** PR [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) introduces granular TOTP gating for specific high-risk shell commands (e.g., `sudo`, `rm -rf`), moving away from an all-or-nothing shell access model.
*   **Provider Compatibility:**
    *   PR [#5762](https://github.com/zeroclaw-labs/zeroclaw/pull/5762) fixes compatibility issues with MiniMax and other OpenAI-compatible APIs that reject mixed tool-role messages.
    *   PR [#5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773) addresses shell command validation logic to properly handle wildcards and sub-shells when `block_high_risk_commands` is disabled.

## 4. Community Hot Topics
*   **Governance & Architecture Direction:** The community is actively debating the future of the codebase.
    *   **[RFC: ZeroClaw Microkernel Transition](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)** (5 comments): A proposal to move from a reactive monolith to a microkernel architecture to support v1.0.0.
    *   **[RFC: Project Governance](https://github.com/zeroclaw-labs/zeroclaw/issues/5577)** (3 comments): Discusses team organization and contribution pipelines.
    *   **[RFC: Documentation Standards](https://github.com/zeroclaw-labs/zeroclaw/issues/5576)** (3 comments): A push for treating documentation as a product surface.
*   **Build Performance:** **[Feature: Crate split the crate](https://github.com/zeroclaw-labs/zeroclaw/issues/5447)** (3 comments) highlights severe compilation inefficiencies, with users reporting slow builds even for single-line changes. This connects to the broader architectural RFCs above.
*   **Community Sentiment:** **[Issue #2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691)** (4 comments, 👍 9) remains a hot topic, criticizing code quality and the team's attitude toward collaboration.

## 5. Bugs & Stability
*   **S1 - Critical Workflow Blockers:**
    *   **[Web Dashboard Unavailable](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)** (12 comments): The web UI and Tauri desktop app fail to load, prompting users to build the frontend manually. This is the most impactful issue currently.
    *   **[Kimi Provider API Error](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** (3 comments): Streaming calls fail with "reasoning_content is missing" errors.
    *   **[Config Encryption Blocks Telegram](https://github.com/zeroclaw-labs/zeroclaw/issues/5654)** (2 comments): Using encrypted config.json prevents the Telegram bot from responding.
*   **S0 - Security/Data Risks:**
    *   **[allowed_path Logic Flaw](https://github.com/zeroclaw-labs/zeroclaw/issues/5533)** (2 comments): The `allowed_path` configuration unexpectedly blocks subdirectories (e.g., `~/dev` is blocked when `~/` is allowed).
    *   **[Feishu mention_only Bypass](https://github.com/zeroclaw-labs/zeroclaw/issues/5672)** (2 comments): The bot responds to all messages even when `mention_only` is enabled.
*   **S2 - Degraded Behavior:**
    *   **[Groq Provider 400 Error](https://github.com/zeroclaw-labs/zeroclaw/issues/5670)** (3 comments): Errors with llama-3.3-70b-versatile.
    *   **[Session Persistence Failure](https://github.com/zeroclaw-labs/zeroclaw/issues/5634)** (2 comments): The web dashboard creates a new session on every page load despite `session_persistence = true`.

## 6. Feature Requests & Roadmap Signals
*   **Native OpenRouter Routing:** **[Issue #5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619)** requests native support for OpenRouter's provider routing and `extra_body` features.
*   **GitHub Copilot Integration:** Users are asking for clearer documentation and workflows to configure GitHub Copilot as a provider (**[Issue #4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851)**).
*   **Mattermost WebSocket Support:** PR [#5162](https://github.com/zeroclaw-labs/zeroclaw/pull/5162) aims to replace REST polling with real-time WebSocket listeners for Mattermost integration.
*   **Automated Issue Triage:** PR [#5780](https://github.com/zeroclaw-labs/zeroclaw/pull/5780) proposes adding a "Claude Code" skill specifically for triaging GitHub issues.

## 7. User Feedback Summary
*   **DX/UX Friction:** Users are expressing frustration with the developer experience, specifically citing "extremely slow" compilation times (**[Issue #5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575)**) and confusing installation procedures (**[Issue #5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269)**).
*   **Docker Issues:** The `Dockerfile.debian` build is currently broken for local builds due to multiple bugs (**[Issue #5541](https://github.com/zeroclaw-labs/zeroclaw/issues/5541)**).
*   **Memory Stability:** Reports of Out of Memory (OOM) kills in WSL2 environments are surfacing (**[Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)**).

## 8. Backlog Watch
*   **Issue #4866 (Web Dashboard):** Despite 12 comments and being marked S1, the lack of a quick fix for the dashboard availability is becoming a recurring sore point for users.
*   **Issue #2691 (Code Quality/Attitude):** A highly upvoted (👍 9) critical discussion regarding the project's internal culture and code quality. Maintainer engagement on this specific thread will be crucial for community trust.
*   **RFCs (v0.7.0+):** Issues #5574, #5577, #5576, and #5579 represent a major shift in project direction. They are currently "In Progress" and require final consensus to define the v1.0.0 roadmap.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for **PicoClaw** as of **2026-04-16**.

***

### 1. Today's Overview
PicoClaw is currently in a phase of extremely high activity, experiencing a "feature rush" with **26 Pull Requests** updated in the last 24 hours (20 of which were merged/closed). The project is aggressively iterating on multi-agent orchestration and UI enhancements, evidenced by the merge of critical features like cross-agent delegation and side-question commands. Despite the high throughput, stability remains a concern; there are 7 active issues, including significant bugs regarding multi-channel message echoing and scheduled task execution, suggesting that rapid feature development is slightly outpacing quality assurance.

### 2. Releases
**Version: v0.2.6-nightly.20260415**
The latest nightly build (`c0fadc59`) was pushed on April 15, 2026. As a nightly build, users are advised to exercise caution.
*   **Source:** [Compare v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)
*   **Status:** Automated build (Unstable).

### 3. Project Progress (Merged/Closed PRs)
The project closed a significant number of PRs (20), indicating high velocity. Key advancements include:
*   **Multi-Agent Orchestration:** The `delegate` tool ([#2531](https://github.com/sipeed/picoclaw/pull/2531)) was merged (PR #2484), enabling agents to hand off tasks to specific sub-agents synchronously.
*   **User Experience (Side-Questions):** The `/btw` command ([#2502](https://github.com/sipeed/picoclaw/pull/2502)) was implemented. This allows users to ask immediate questions without disrupting the main session context or history.
*   **Web UI Enhancements:** Syntax highlighting for markdown code blocks was added to the chat and skills views ([#2529](https://github.com/sipeed/picoclaw/pull/2529)).
*   **Stability Fixes:** Multiple PRs targeted process management and gateway reliability ([#2403](https://github.com/sipeed/picoclaw/pull/2403), [#2422](https://github.com/sipeed/picoclaw/pull/2422)) and fixed a bug where vision-capable models would crash the session if an image was sent ([#2525](https://github.com/sipeed/picoclaw/pull/2525)).
*   **Search Capabilities:** A Sogou-backed web search implementation was added for users in mainland China ([#2524](https://github.com/sipeed/picoclaw/pull/2524)).

### 4. Community Hot Topics
The most discussed items highlight a desire for easier connectivity and more granular agent control:
*   **[Request] LM Studio Easy Connect** ([#28](https://github.com/sipeed/picoclaw/issues/28))
    *   **Activity:** 12 comments, 1 reaction.
    *   **Analysis:** This long-standing request (from Feb 2026) saw a renewal of interest. Users struggle with the current complexity of connecting PicoClaw to LM Studio locally, indicating a need for better "Local LLM" onboarding UX.
*   **[Feat] Delegate Tool** ([#2531](https://github.com/sipeed/picoclaw/pull/2531))
    *   **Activity:** Active development.
    *   **Analysis:** High community interest in breaking monolithic agents into specialized sub-agents.
*   **[Feat] MCP Slash Commands** ([#2535](https://github.com/sipeed/picoclaw/pull/2535))
    *   **Status:** Open.
    *   **Analysis:** Users want better visibility into the Model Context Protocol (MCP) servers directly from the chat interface (`/list mcp`), showing a trend toward complex tooling management.

### 5. Bugs & Stability
Several bugs were updated recently, with varying degrees of severity:
*   **[HIGH] Scheduled Task Fails to Execute** ([#2468](https://github.com/sipeed/picoclaw/issues/2468))
    *   **Error:** "scheduling command execution is restricted to internal channels."
    *   **Impact:** Core automation (Cron) appears broken for some users.
*   **[MED] Messages Echoed Back in Multi-Channel Setup** ([#2446](https://github.com/sipeed/picoclaw/issues/2446))
    *   **Symptom:** In a multi-channel setup, if one channel is pending, a new message in another channel may be echoed back instead of processed.
    *   **Impact:** Disrupts conversational flow in multi-user or multi-bot environments.
*   **[MED] LongCat API Tool Call Failure** ([#2046](https://github.com/sipeed/picoclaw/issues/2046))
    *   **Issue:** Tools are not invoked correctly with the LongCat provider.
*   **[LOW] Web UI Re-authentication Loops** ([#2302](https://github.com/sipeed/picoclaw/issues/2302))
    *   **Issue:** Users face frequent `PERMISSION_DENIED` errors and must manually re-authenticate in the Web UI credentials menu.

### 6. Feature Requests & Roadmap Signals
*   **Configurability is Key:**
    *   **Auth:** Users want a `--no-browser` flag for CLI login ([#2533](https://github.com/sipeed/picoclaw/issues/2533)) to facilitate headless usage.
    *   **Memory:** A request to make `fresh_tail_size` (context window limit) configurable ([#2527](https://github.com/sipeed/picoclaw/issues/2527)) suggests advanced users are hitting hard-coded limits on context management.
*   **Integration:** The open PR for MCP commands ([#2535](https://github.com/sipeed/picoclaw/pull/2535)) signals that tighter integration with the MCP standard is a high priority for the roadmap.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Platform Compatibility:** Users on non-standard platforms (e.g., headless servers, Android, FreeBSD) are experiencing friction with auth, PID management, and environment isolation.
    *   **Complexity:** The request for LM Studio integration and CLI flags suggests the project is becoming complex to set up for non-developers.
*   **Positive Signals:** The rapid iteration on UI features (Markdown highlighting, `/btw` commands) shows responsiveness to user feedback regarding daily interaction quality.

### 8. Backlog Watch
*   **LM Studio Integration ([#28](https://github.com/sipeed/picoclaw/issues/28)):** Open since February 2026. Despite recent updates, it lacks a clear implementation plan.
*   **LongCat Provider Tools ([#2046](https://github.com/sipeed/picoclaw/issues/2046)):** Opened in late March, recently updated but unresolved.
*   **Multi-Channel Echo Bug ([#2446](https://github.com/sipeed/picoclaw/issues/2446)):** This is a recent regression that needs attention before multi-agent deployments become widespread.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-16

## 1. Today's Overview
NanoClaw is experiencing high development velocity with **17 Pull Requests updated** in the last 24 hours compared to only 5 new Issues, indicating a feature-heavy development cycle. The project is undergoing significant architectural shifts, specifically a move toward multi-provider LLM support and infrastructure hardening (Node.js v24 migration, pnpm adoption). While feature expansion is aggressive, stability concerns are emerging regarding mounting behaviors, container path handling, and initialization flows, particularly for non-ASCII environments and macOS setups.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
**Merged & Closed PRs:**
*   **Closed:** PR #1281 (Headless Linux browser fallback + docs) — Addresses setup failures on VPS/Linux environments by disabling `xdg-open` and printing URLs to stdout.
*   **Closed:** PR #1777 (Forward `ONECLI_API_KEY`) — Fixes authentication for cloud/dev OneCLI gateways.
*   **Closed:** PR #1782 (Credential proxy timeout fix) — Improves TCP keep-alive (30s) and error handling for upstream connection timeouts during agent streams.
*   **Closed:** PR #1760 (Twilio fallback calls) — Adds logic to call a secondary number if reminder calls go unanswered.

**Active Development (Key Open PRs):**
*   **LLM Expansion:** PR #1784 & #1774 aim to decouple NanoClaw from Anthropic-only models, adding support for OpenAI, Google, Groq, and Ollama via Vercel AI SDK.
*   **Roadmap Execution:** PR #1786 proposes implementing 14 remaining items from a "7-layer scope expansion," including webhooks and LLM confidence tracking.
*   **Infrastructure:** PR #1771 migrates the project from npm to pnpm, while PR #1778 upgrades the container base to Node.js v24 (Debian Trixie) to resolve `gws` dependency issues.

## 4. Community Hot Topics
*   **Security & Semantics in File Mounting** — A cluster of issues (#1792, #1791, #1790) highlights user frustration with the `/setup` mount allowlist. Users report that the system silently rejects absolute paths, cannot handle file-level granularity (only directories), and lacks clear documentation, forcing a "trial-and-error" experience.
    *   *Links:* [#1792](https://github.com/qwibitai/nanoclaw/issues/1792) | [#1791](https://github.com/qwibitai/nanoclaw/issues/1791) | [#1790](https://github.com/qwibitai/nanoclaw/issues/1790)
*   **Internationalization (i18n) Failures** — Issue #1789 identifies that non-ASCII characters in display names are silently corrupted into a generic "dm-with-unnamed" folder, indicating a lack of UTF-8 support in path sanitization.

## 5. Bugs & Stability
**High Severity:**
*   **Scheduler Hot-Loops:** PR #1788 addresses a critical bug where non-text scripts or throwing tasks cause the scheduler to enter a silent "hot-loop," consuming CPU/resources without progress.
*   **Global Failures on Channel Error:** PR #1785 highlights that a single misconfigured channel (e.g., expired Gmail OAuth) currently crashes the entire `main()` process, taking all other channels (Discord, WhatsApp) offline.

**Medium Severity:**
*   **macOS Setup Conflicts:** Issue #1787 reports 6 merge conflicts during `/setup` on macOS when using the Apple Container runtime, blocking first-time users.
*   **Headless Setup:** Identified in PR #1281 (now closed), the `openBrowser()` utility was failing silently on servers without a display ($DISPLAY).

## 6. Feature Requests & Roadmap Signals
*   **Multi-Model Support:** Strong signals from PRs #1784 and #1774 suggest the community is demanding cost flexibility and provider choice (OpenAI, Local Ollama) rather than strictly Anthropic/Claude.
*   **Third-Party Integrations:** PR #1781 proposes replacing manual GCP OAuth with Composio.dev for managed Gmail/Calendar authentication, reducing setup friction.
*   **Advanced Business Logic:** PR #1780 adds "container skills" for marketing workflows (client profiling, ad generation), signaling a push toward business-use-case templates.

## 7. User Feedback Summary
*   **Setup Friction:** Users find the initial `/setup` flow opaque regarding file permissions and pathing (Issues #1790, #1792).
*   **Security Granularity:** Advanced users require the ability to mount individual files rather than entire directories to maintain security when multiple agents share a workspace (Issue #1791).
*   **Platform Compatibility:** Users are running into compatibility gaps on macOS (Issue #1787) and Headless Linux (PR #1281), suggesting the codebase has a bias toward standard desktop environments.

## 8. Backlog Watch
*   **Long-Standing Feature:** PR #886 (Daily news briefing) was opened in March but remains "Needs Review." This PR introduces "AI agent swarms" for news aggregation, a feature that seems ready but is waiting for maintainer approval.
*   **Session Management:** PR #1311 (Feature create new session) has been open since late March with recent activity, indicating a core workflow feature is pending merge.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-04-16

## 1. Today's Overview
NullClaw is currently in a high-activity maintenance phase, focusing on stability fixes and infrastructure migration rather than feature launches. The project has **no new releases** today, but significant development work is underway, migrating the codebase to **Zig 0.16** and hardening the shell and cron subsystems. Community engagement is robust, with distinct friction points regarding environment setup (Debian/Zig) and new regressions introduced in the `v2026.4.9` release (specifically regarding HTTPS constraints). The project health is stable but faces immediate challenges with documentation lag and version reporting inconsistencies.

## 2. Releases
*No new releases published today.*

## 3. Project Progress
**Recent Merges & Closed PRs:**
Several critical features and fixes were finalized recently:
*   **Security & Shell Hardening:** PR #377 and #378 were closed/merged, introducing sandbox-validated path environment variables for shell tools and tightening `git -C` allowlist handling.
*   **Signal Protocol Support:** PR #369 added support for "Note to Self" messages via sync envelope handling, previously dropped.
*   **Infrastructure Migration:** PR #823 (Open) proposes a major migration of the project from Zig 0.15.x to **Zig 0.16.0**, refactoring the standard library compatibility layers.
*   **Cron Subagent:** PR #783 (Open) advances the cron subagent engine with DB-backed scheduling and JSON output capabilities.

## 4. Community Hot Topics
*   **The Zig 0.16 Migration (PR #823)**
    *   *Link:* [github.com/nullclaw/nullclaw/pull/823](https://github.com/nullclaw/nullclaw/pull/823)
    *   *Analysis:* This is the most significant technical discussion. As the ecosystem moves to Zig 0.16, NullClaw must update its websocket and network modules. This indicates a focus on future-proofing the core runtime.

*   **HTTP Request & Internet Search Failures (Issue #812)**
    *   *Link:* [github.com/nullclaw/nullclaw/issues/812](https://github.com/nullclaw/nullclaw/issues/812)
    *   *Analysis:* A user migrating from Picoclaw/ZeroClaw reports that internet search capabilities are non-functional. With 4 comments and 1 upvote, this suggests a regression in the `http_request` tool that blocks a primary use case (agentic web browsing).

*   **OpenTelemetry (OTel) Breaking Changes (Issue #800)**
    *   *Link:* [github.com/nullclaw/nullclaw/issues/800](https://github.com/nullclaw/nullclaw/issues/800)
    *   *Analysis:* The `v2026.4.9` release enforced HTTPS constraints for endpoints, which broke internal OTel configurations running in containerized environments (e.g., Podman) using HTTP. Users are requesting granular control over these constraints.

## 5. Bugs & Stability
**High Priority Bugs:**
1.  **Shell Execution Failure (Issue #791):**
    *   *Severity:* High
    *   *Details:* Shell tools fail to run on native Linux systems despite "permit all" commands being set.
    *   *Status:* Open; likely related to the sandboxing hardening in recent PRs.
2.  **OTel Configuration Breakage (Issue #800):**
    *   *Severity:* Medium
    *   *Details:* New HTTPS constraints prevent local HTTP connections to OTel collectors.
    *   *Fix Status:* No PR linked yet; requires a config flag to allow local HTTP.
3.  **Contradictory Channel Status (Issue #827):**
    *   *Severity:* Low/Medium
    *   *Details:* `nullclaw channel status` reports "ok" while `nullclaw doctor` reports failures. Inconsistent telemetry confuses troubleshooting.
4.  **Version Reporting Shows "dev" (Issue #821):**
    *   *Severity:* Low
    *   *Details:* Users installing from source see "dev" instead of a version hash or number, making support difficult.

## 6. Feature Requests & Roadmap Signals
*   **Nested Agent Skills (Issue #825):** Users want to organize skills into nested directories rather than a flat list.
    *   *Likelihood:* High, as it improves organization for complex agents.
*   **Tailscale Gateway Integration (Issue #826):** Explicit support for Tailscale networking.
    *   *Likelihood:* TBD, currently blocked by `NotImplemented` in the tunnel startup.
*   **WeChat QR Code Login (Issue #817):** Request for WeChat integration.
    *   *Likelihood:* Low/Medium, dependent on protocol support.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Environment Setup:** Users struggle with installing Zig on Debian (Issue #820), suggesting the documentation assumes too much prior knowledge of the Zig toolchain.
    *   **Upgrade Friction:** The recent HTTPS constraint update (Issue #800) and OTel breakage indicate that `v2026.4.9` introduced regressions for existing power users.
    *   **Docker Dependency:** Users are asking if Docker is truly required (Issue #820), signaling a desire for native bare-metal installations.
*   **Positive Sentiment:** Users explicitly mention the project is "very organized" compared to forks like Picoclaw/ZeroClaw (Issue #812).

## 8. Backlog Watch
*   **Documentation Updates (PR #774):** Open since April 5, this PR aims to fix outdated statistics in READMEs and architecture docs. Slow movement here contributes to user confusion regarding setup and versioning.
*   **Gateway Rate Limiting (PR #789):** Open since April 8, this PR addresses rate limiting safeguards. The lack of merge suggests ongoing refactoring in the gateway subsystem, possibly related to the Tailscale issues reported today.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-04-16

## 1. Today's Overview
IronClaw is experiencing a high-velocity development cycle with significant activity focused on stability and infrastructure hardening. In the last 24 hours, the project saw 43 PRs opened and 17 issues updated, indicating a push towards the next release. A major focal point is the completion of the "V2 Architecture" migration, specifically addressing gaps in the Gateway and V2 engine path. While feature work (e.g., Aliyun support, tool filtering) continues, the majority of today's workflow addresses critical P0 bugs identified in recent QA "bug bashes," particularly regarding UI stability and secret scanning security.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
*   **CI/CD & Infrastructure:** Enhanced build workflows to support historical Docker image targets (`#2509`, `#2507`), ensuring smoother release management for older versions. Staging promotion automation (`#2511`, `#2510`) remains active.
*   **Gateway & V2 Engine Fixes:**
    *   PR `#2444` (referenced in Issue #2488) introduced a DB fallback for assistant conversations, which was subsequently hardened today to fix TOCTOU (Time-of-check to Time-of-use) races and cross-user security gaps (`#2488`).
    *   Work continues on "Slim Mode" runtime (`#2418`) to reduce resource footprints for high-density deployments.
*   **E2E Testing:** Resolved 12 E2E test failures in the routines and features groups (`#2503`), improving regression coverage for the V2 engine.

## 4. Community Hot Topics
*   **Security: Secret Scanning Bypass (Issue #2491)**
    *   *Summary:* A critical security flaw was confirmed where `ENGINE_V2=true` bypasses `scan_inbound_for_secrets()`, sending tokens directly to the LLM.
    *   *Underlying Need:* Users expect the V2 engine to maintain the safety guardrails present in V1. This issue is flagged as `p0_quality` and `security-review-required`.
    *   *Link:* [nearai/ironclaw#2491](https://github.com/nearai/ironclaw/issues/2491)

*   **Quality Assurance: Web UI Instability (Issues #2410, #2409)**
    *   *Summary:* Users reported that the staging dashboard refreshes in a loop and user messages disappear after typing.
    *   *Underlying Need:* Basic usability in the web interface is currently degraded on staging, blocking effective user testing.
    *   *Links:* [nearai/ironclaw#2410](https://github.com/nearai/ironclaw/issues/2410) | [nearai/ironclaw#2409](https://github.com/nearai/ironclaw/issues/2409)

*   **Feature: "Aliyun Coding Plan" Support (PR #1446)**
    *   *Summary:* A massive PR (Size: XL) to add `AliyunProvider` support for BaiLian Coding Plan is in review.
    *   *Underlying Need:* Expanding LLM provider options to include major cloud providers (Alibaba/Aliyun) for international users.
    *   *Link:* [nearai/ironclaw#1446](https://github.com/nearai/ironclaw/pull/1446)

## 5. Bugs & Stability
*   **[CRITICAL] Secret Scanning Disabled in V2:** (Issue #2491) Secrets are sent to LLMs in V2 mode. No fix PR linked yet.
*   **[HIGH] Gateway Routing Error:** (Issue #2405) `broadcast()` requires a `thread_id`, causing failures in multi-user bot scenarios. Fixed by recent fallback logic (Issue #2488).
*   **[MEDIUM] MCP Server Discovery:** (Issue #2474) Stdio MCP servers incorrectly trigger OAuth discovery flows, causing authentication failures during activation.
*   **[MEDIUM] Tool Approval Loop:** (Issue #2345) Users are repeatedly asked for tool approval permissions despite checking "always allow."
*   **[MEDIUM] Instance Lifecycle:** (Issue #2284) Agent instances on hosted-staging die after 1 hour of inactivity, losing context.
*   **[MEDIUM] 413 Payload Handling:** (Issue #2489) Several direct-HTTP providers do not correctly map HTTP 413 errors to `ContextLengthExceeded`, leading to generic crash reports.

## 6. Feature Requests & Roadmap Signals
*   **Per-Channel Tool Filtering (PR #1378):** There is strong demand for a JSON-configurable routing system to restrict specific MCP servers or tools to specific channels (e.g., disabling risky shell tools in public Slack channels).
*   **Granular Permission Grants (Issue #2484):** Users requested parameter-aware "always allow" grants. Currently, approving `shell ls /tmp` implicitly approves `shell rm -rf /`.
*   **Cross-User Workspace Access (PR #2421):** Restoring the ability for users to grant read/write access to other users (e.g., "household" sharing).
*   **Search in Chat API (Issue #548):** A request to add web search capabilities directly to the Chat API so agents have default search access.

## 7. User Feedback Summary
*   **Configuration Pain:** Users are struggling to set up custom secrets (Issue #2481) and OAuth flows (Issue #2474), indicating the UX for tool authentication needs simplification.
*   **Reliability Concerns:** Staging is perceived as unstable. Feedback highlights "silent failures" where tools claim success despite errors (Issue #2279) and agents stopping mid-response (Issue #2087).
*   **Platform Compatibility:** Issues regarding `host.docker.internal` on Linux (PR #2506) show a need for better Docker networking configurations for non-macOS/Windows users.

## 8. Backlog Watch
*   **Issue #2087:** IronClaw stops responding after setting up Notion. (Open, needs investigation).
*   **PR #1446:** Aliyun Support. (Open, XL size, pending merge).
*   **PR #1764:** Abound demo / Responses API. (Open, XL size, high risk, pending merge).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**Project Digest: LobsterAI (Youdao)**
**Date:** 2026-04-16
**Status:** High Development Velocity | Minor Stability Concerns

---

### 1. Today's Overview
The project is experiencing a period of high development velocity, with **27 Pull Requests** updated in the last 24 hours, the vast majority (22) of which have already been merged. This indicates an active冲刺 (sprint) or preparation for an upcoming release. While development is bustling, user-reported issues remain low (3 in 24h), though two involve stability and platform compatibility (Deepin/Linux, port conflicts) that require attention. The focus of today's merged PRs appears to be stabilizing the "OpenClaw" runtime, refining the "Cowork" features, and improving the IM (Instant Messaging) integration experience.

### 2. Releases
*   **No new releases published** in the last 24 hours.

### 3. Project Progress (Merged/Closed PRs)
The team closed a significant number of PRs, focusing on backend stability, connector migration, and database hygiene.
*   **OpenClaw & Plugin Ecosystem:**
    *   **Runtime Upgrade:** Merged PR #1700 upgrades the OpenClaw runtime to `v2026.4.14` and the `moltbot-popo` plugin to `v2.0.10`.
    *   **Packaging Fix:** PR #1697 fixed a critical issue causing duplicate plugin payloads, which was blocking macOS packaging. It also migrated DingTalk to the official `dingtalk-connector`.
    *   **Connector Logic:** PR #1696 refined the connection status logic for Weixin (`weixin`), removing dependency on `accountId` to align better with startup conditions.
*   **Data & Settings Integrity:**
    *   **Copilot Migration:** PRs #1694 and #1695 fixed a database inconsistency where old `github-copilot` references were not migrated to the new `lobsterai-copilot` ID, preventing "silent skips" during agent resolution.
    *   **Crash Prevention:** PR #1699 fixed a crash in the Settings UI caused by importing configuration files containing providers that no longer exist locally.
*   **Feature Refinements:**
    *   **Cowork:** PR #1701 set `skipMissedJobs` to default enabled, improving task handling reliability.
    *   **UI/UX:** PR #1692 added an API Key link for the Qianfan provider.

### 4. Community Hot Topics
While engagement (thumbs up/comments) is generally low, there are active discussions regarding interoperability and advanced controls.
*   **[Feature Request] Dynamic Temperature Control (#1688):**
    *   *Summary:* User `catubibu` requested the ability to dynamically adjust LLM temperature parameters via keywords in the chat interface.
    *   *Analysis:* This indicates a desire for more granular, real-time control over model creativity without breaking the flow to visit settings. It suggests advanced users are tuning the agent for specific tasks.
*   **[Feature Discussion] Agent Template Import/Export (#1691):**
    *   *Summary:* An open PR aims to solve the inability to share Agent configurations between devices.
    *   *Analysis:* This is a highly requested quality-of-life improvement for power users managing multiple custom agents, moving toward a more portable ecosystem.

### 5. Bugs & Stability
Three new issues were reported today, ranging from specific integration conflicts to OS-level compatibility.
*   **🔴 High Severity: Port Conflict & Process Race (#1698)**
    *   *Issue:* Installing "智企帝王蟹" (King Crab) while "有道龙虾" (Lobster) is running causes an inevitable gateway port conflict and authentication failure.
    *   *Environment:* macOS (Tahoe v26.4).
    *   *Impact:* Blocks the usage of two enterprise tools simultaneously.
*   **🟠 Medium Severity: Login Failure on Deepin V25 (#1687)**
    *   *Issue:* User cannot log in via the browser popup on Deepin Linux (AMD64), receiving a network error despite the website working fine.
    *   *Impact:* Blocks usage for Linux users on specific distributions (Deepin).
*   **🟢 Low Severity: Encoding in HTTP API (#429 - Updated)**
    *   *Issue:* An older PR updated today addresses Chinese character corruption in the `workingDirectory` field when using the HTTP API on Windows.

### 6. Feature Requests & Roadmap Signals
Based on open PRs and issues, the roadmap for the next version (likely v26.5 or v27.0) includes:
*   **Portability:** The "Agent Import/Export" feature (PR #1691) is ready and will likely allow users to share `.agent.json` files.
*   **Enhanced Safety:** PR #1690 introduces a confirmation modal for deleting IM instances (DingTalk/Feishu/QQ), preventing accidental data loss.
*   **Cowork Improvements:** PR #1693 improves the model setup entry, offering a one-click jump to settings if a model is unconfigured, significantly lowering the friction for new users.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Multi-product Interference:** Users running multiple NetEase tools (Lobster + King Crab) face technical conflicts (#1698).
    *   **Linux Compatibility:** The Deepin V25 login issue (#1687) highlights instability in non-mainstream OS environments.
    *   **Configuration Fears:** Users are worried about accidentally deleting complex IM instance configurations, prompting the "add confirmation" fix (#1690).
*   **Desires:**
    *   **Flexibility:** Users want to tweak model parameters (Temperature) on the fly (#1688).
    *   **Sharability:** Users want to move their custom agents between machines (#1691).

### 8. Backlog Watch
*   **Stale PR Warning:** PR #429 (Fix Chinese character preservation) is marked as `stale` despite being updated today. This fix for Windows API encoding has been open for over a month and needs to be prioritized for the next release to support CJK workflows properly.
*   **Older Releases:** Several PRs merged today (e.g., #1433, #1438) were labeled "Test to release," indicating the team is clearing a backlog of tested features to push to production.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project digest for **Moltis** on **2026-04-16**.

### 1. Today's Overview
The Moltis project is in a phase of highly active stabilization and architectural refinement. The repository shows exceptional throughput with **20 Pull Requests** updated in the last 24 hours (15 of which were merged/closed), indicating a responsive workflow rapidly addressing technical debt and integration issues. While only one bug remains open in the tracker, the surge of merged PRs suggests a focused "sprint" to fix critical provider integrations (specifically Google/Gemini and WhatsApp), refactor internal code structure, and enhance configuration capabilities before the next feature release.

### 2. Releases
*   **No new releases** published in the last 24 hours.

### 3. Project Progress
Significant strides were made in infrastructure, third-party integrations, and agent capabilities:

*   **Provider Compatibility & Tooling:**
    *   Critical fixes were merged for **Google/Gemini via OpenRouter** (PRs [#717](https://github.com/moltis-org/moltis/pull/717), [#719](https://github.com/moltis-org/moltis/pull/719)), resolving schema rejection errors regarding union types and optional parameters.
    *   The **Qwen** provider was normalized to handle multiple system messages correctly (PR [#725](https://github.com/moltis-org/moltis/pull/725)).
    *   General OpenAI compatibility CI regressions were repaired (PR [#722](https://github.com/moltis-org/moltis/pull/722)).
*   **Communication Channels:**
    *   The **WhatsApp** integration received a major upgrade (PR [#709](https://github.com/moltis-org/moltis/pull/709)), moving the `whatsapp-rust` ecosystem from v0.2 to v0.5 to fix message parsing issues.
    *   **OIDC authentication** for Matrix was introduced (PR [#730](https://github.com/moltis-org/moltis/pull/730)), unblocking access to modern homeservers like matrix.org.
*   **Core Agent Features:**
    *   **Memory Management:** A new LLM-guided "memory forget" flow was added (PR [#728](https://github.com/moltis-org/moltis/pull/728)).
    *   **Filesystem Tools:** Native `file_read` and `file_info` tools were added with security containment (PR [#667](https://github.com/moltis-org/moltis/pull/667)).
*   **Developer Experience:**
    *   A massive code organization effort moved implementation code out of `mod.rs`/`lib.rs` files (PR [#731](https://github.com/moltis-org/moltis/pull/731)).
    *   A comprehensive configuration reference was added to the docs (PR [#718](https://github.com/moltis-org/moltis/pull/718)).

### 4. Community Hot Topics
*   **Context Window Customization (PR [#727](https://github.com/moltis-org/moltis/pull/727), [#723](https://github.com/moltis-org/moltis/pull/723))**
    *   **Topic:** Advanced configuration for model context windows.
    *   **Underlying Need:** Power users require granular control to override hardcoded context limits for specific models (e.g., Claude Opus 4.6), likely to maximize performance for long-context tasks without waiting for upstream updates.
*   **Agent Tool Compaction (PR [#726](https://github.com/moltis-org/moltis/pull/726))**
    *   **Topic:** Fixing agent context loss during long execution loops.
    *   **Underlying Need:** Ensuring stability and context retention for agents running multi-step tool chains, a critical requirement for reliable autonomous agent behavior.

### 5. Bugs & Stability
*   **Medium Severity: Custom ElevenLabs Voices Broken**
    *   **Issue:** [#735](https://github.com/moltis-org/moltis/issues/735) - Custom voices from ElevenLabs are not functioning.
    *   **Status:** Open. No fix PR linked yet.
*   **Low Severity (Recently Fixed):**
    *   *MCP Status UI Wrong:* Fixed in PR [#733](https://github.com/moltis-org/moltis/pull/733) (Closed).
    *   *Chat Messages Missing from UI:* Fixed in PR [#734](https://github.com/moltis-org/moltis/pull/734) (Closed).
    *   *Docker Exposure:* Report regarding `/proc` and `/sys` exposure ([#705](https://github.com/moltis-org/moltis/issues/705)) was closed, likely marked as "wontfix" or configuration specific.

### 6. Feature Requests & Roadmap Signals
*   **External Agent Bridge:** Long-standing PR [#566](https://github.com/moltis-org/moltis/pull/566) remains open, proposing a foundation for connecting Moltis to CLI coding agents (Claude Code, Aider, etc.). This signals a strategic roadmap item to integrate Moltis into broader development workflows.
*   **Configuration Overrides:** The active development of PRs [#723](https://github.com/moltis-org/moltis/pull/723) and [#727](https://github.com/moltis-org/moltis/pull/727) strongly indicates "per-model configuration flexibility" is a priority for the upcoming release.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Provider Friction:** Users encountered significant friction with OpenRouter/Gemini tool schema rejections and WhatsApp message parsing, indicating a need for robust abstraction layers against API changes.
    *   **UI Sync:** There was a distinct sync issue where GraphQL-sent messages didn't appear in the Web UI, disrupting the chat flow for API users.
*   **Positive Sentiment:** The rapid closure of 6 issues and the enhancement of memory tools suggest a responsive team addressing user-reported "paper cuts" effectively.

### 8. Backlog Watch
*   **External Agents Integration (PR [#566](https://github.com/moltis-org/moltis/pull/566))**
    *   **Status:** Open since April 6.
    *   **Attention Needed:** This is a high-complexity feature that requires maintainer review to merge. It is currently the oldest open PR in the recent list.
*   **Model Context Override (PR [#727](https://github.com/moltis-org/moltis/pull/727))**
    *   **Status:** Open (Part 2 of a series).
    *   **Attention Needed:** Dependent on PR [#723](https://github.com/moltis-org/moltis/pull/723). Maintainers need to review this chain to complete the feature set.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-04-16

## 1. Today's Overview
CoPaw is experiencing a period of high-intensity development and rapid iteration, with **50 issues** and **50 pull requests** updated in the last 24 hours alone. The project appears to be in a "growth spurt" phase, balancing significant new features (like advanced routing strategies and agent statistics) with a surge in bug reports related to the latest v1.1.x releases. While the community engagement is high—evidenced by active discussions on features and troubleshooting—the volume of new issues suggests that recent updates may have introduced regressions, particularly regarding CLI stability, tool execution, and file management.

## 2. Latest Releases
Two versions were released recently to address immediate bugs and prepare for upcoming features:
*   **v1.1.2-beta.1** ([PR #3416](https://github.com/agentscope-ai/QwenPaw/pull/3416)): A beta release introducing **configurable recursive file watching** ([PR #3347](https://github.com/agentscope-ai/QwenPaw/pull/3347)) and default memory sum features.
*   **v1.1.1.post1** ([PR #3399](https://github.com/agentscope-ai/QwenPaw/pull/3399)): A patch release fixing an **Ollama provider connection issue** ([PR #3404](https://github.com/agentscope-ai/QwenPaw/pull/3404)) and updating Cron Job ID messaging.

## 3. Project Progress
Development is actively advancing on several complex architectural features while simultaneously triaging bugs:
*   **Routing & Intelligence:** Significant work is underway on **Local/Cloud Model Routing** ([PR #3443](https://github.com/agentscope-ai/QwenPaw/pull/3443), [PR #3451](https://github.com/agentscope-ai/QwenPaw/pull/3451)) to enable deterministic routing strategies for structured outputs and multimodal content.
*   **Infrastructure:** A new **Agent Statistics** dashboard is being implemented ([PR #3365](https://github.com/agentscope-ai/QwenPaw/pull/3365)), providing metrics on token usage and tool calls.
*   **Mission Mode:** Implementation of an autonomous iterative agent for long-running tasks is in review ([PR #3364](https://github.com/agentscope-ai/QwenPaw/pull/3364)).
*   **Compatibility:** Fixes for vLLM `tool_choice="auto"` compatibility ([PR #3438](https://github.com/agentscope-ai/QwenPaw/pull/3438)) and session state JSON corruption ([PR #3278](https://github.com/agentscope-ai/QwenPaw/pull/3278)) are under review.

## 4. Community Hot Topics
*   **Clarifying the Project Identity ([Issue #3430](https://github.com/agentscope-ai/QwenPaw/issues/3430)):**
    *   *Topic:* Users are confused about the relationship and maintenance roadmap between "QwenPaw" and "CoPaw".
    *   *Signal:* The community needs clarity on branding and whether these are merging, diverging, or if one is deprecated.
*   **Contribution Onboarding ([Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)):**
    *   *Topic:* A "Help Wanted" list remains highly active.
    *   *Signal:* Strong developer interest in contributing, but a need for better task curation or maintenance support.
*   **Skill Management ([Issue #2961](https://github.com/agentscope-ai/QwenPaw/issues/2961)):**
    *   *Topic:* Requests for "Skill Classification" or folders to organize skills.
    *   *Signal:* As users adopt the platform, the number of skills is becoming unmanageable without organization tools.
*   **Feature Request - Plan Mode ([Issue #2441](https://github.com/agentscope-ai/QwenPaw/issues/2441)):**
    *   *Topic:* Users want a dedicated "Plan Mode" to control agent behavior more strictly in workflows.

## 5. Bugs & Stability
Several critical stability issues have been reported, often linked to session management and file handling:
*   **[CRITICAL] Silent Stopping in Long Tasks ([Issue #3011](https://github.com/agentscope-ai/QwenPaw/issues/3011)):** Models (specifically Qwen3 Coder Plus) stop executing mid-task without error logs until user input is received. A fix PR (#3107) is currently under review.
*   **[HIGH] File Editing Data Loss ([Issue #3420](https://github.com/agentscope-ai/QwenPaw/issues/3420)):** Editing `skill.md` via the UI causes other files in the skill directory (e.g., scripts) to be deleted. This is a severe regression for workflow management.
*   **[HIGH] Path Duplication Bug ([Issue #3435](https://github.com/agentscope-ai/QwenPaw/issues/3435)):** File downloads generate URLs with duplicate paths (`/api/files/preview/api/files/preview/`), causing failures.
*   **[HIGH] Session Freezing ([Issue #3397](https://github.com/agentscope-ai/QwenPaw/issues/3397)):** Multi-step CLI tasks cause permanent session freezes when `max_input_length` is large.
*   **[MED] Docker Defaults Missing ([Issue #3382](https://github.com/agentscope-ai/QwenPaw/issues/3382)):** The Docker image lacks default agent documentation, leading to a poor first-run experience.

## 6. Feature Requests & Roadmap Signals
*   **Context Awareness:** Users are asking for visual indicators of context window usage ([Issue #3426](https://github.com/agentscope-ai/QwenPaw/issues/3426)) and the ability to configure context lengths via UI ([Issue #3411](https://github.com/agentscope-ai/QwenPaw/issues/3411)).
*   **Backup & Restore:** There is a strong demand for a robust backup/restore feature for agents and configurations ([Issue #3380](https://github.com/agentscope-ai/QwenPaw/issues/3380)), as current methods are prone to ID mismatch errors.
*   **Security:** Users are requesting immediate API authentication options (login/password) to secure exposed web UIs ([Issue #3392](https://github.com/agentscope-ai/QwenPaw/issues/3392)).
*   **Provider Support:** Requests have been made to support the Kimi Code API ([Issue #3437](https://github.com/agentscope-ai/QwenPaw/issues/3437)).

## 7. User Feedback Summary
*   **Positive:** Users appreciate the modular nature of "Skills" and the integration with various LLM providers. The "Help Wanted" culture is fostering a strong contributor community.
*   **Negative:** There is significant frustration regarding **instability in production environments** (e.g., "Too easy to error out" - [Issue #3390](https://github.com/agentscope-ai/QwenPaw/issues/3390)).
*   **Pain Points:** The "Tool Guardrails" messages are too verbose, cluttering mobile and PC views ([Issue #3298](https://github.com/agentscope-ai/QwenPaw/issues/3298)). Additionally, integration with third-party channels like Feishu is currently broken/unusable compared to previous iterations ([Issue #3432](https://github.com/agentscope-ai/QwenPaw/issues/3432)).

## 8. Backlog Watch
*   **[Testing Infrastructure] [PR #2506](https://github.com/agentscope-ai/QwenPaw/pull/2506):** An ambitious PR to establish contract tests and CI gating for Channels has been open since March 29 without being merged. This is crucial for long-term stability.
*   **[External Delegation] [PR #3340](https://github.com/agentscope-ai/QwenPaw/pull/3340):** A complex feature for ACP-based external agent delegation has been under review since April 13.
*   **[Semantic Skill Routing] [PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117):** Opened in early April, this PR aims to solve skill context bloat using semantic retrieval. It is marked as "need discussions" but is vital for scaling agents with many skills.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest
**Date:** 2026-04-16
**Project:** [EasyClaw/RivonClaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. Today's Overview
EasyClaw is currently in a stable maintenance phase. While no code issues were reported or closed in the last 24 hours, the project released a new patch version (**v1.7.11**) focusing on platform-specific installation stability. Development activity is visible with the creation of a new Pull Request regarding a credits system, suggesting the team is looking beyond basic functionality into feature completion or user attribution. The project appears healthy with active maintenance addressing immediate user friction points (specifically macOS installation errors).

### 2. Releases
**v1.7.11 (RivonClaw)**
*   **Focus:** Installation & Platform Compatibility.
*   **Changes:** This release targets macOS Gatekeeper issues. Users updating to this version or downloading fresh may face "damaged file" errors due to unsigned binaries.
*   **Key Documentation/Notes:** The release notes explicitly address the common *"'RivonClaw' is damaged and can't be opened"* error. It clarifies that this is a security restriction (Gatekeeper) rather than file corruption and provides a Terminal-based workaround to bypass the check.

### 3. Project Progress
*   **Merged PRs:** None reported in the last 24 hours.
*   **Active Development:** Progress is recorded on the feature front with the opening of PR #32, indicating ongoing iteration on non-core utility features (credits).

### 4. Community Hot Topics
*   **[PR #32: Feature/credits system](https://github.com/gaoyangz77/rivonclaw/pull/32)** (Open)
    *   **Status:** Created by `dlxai` on 2026-04-15.
    *   **Analysis:** This is the primary development focal point right now. Although discussion metrics (comments/reactions) are currently undefined, the introduction of a "credits system" suggests a move towards acknowledging contributors or potentially implementing a usage-quota mechanism. It indicates the project is maturing its internal structure or user management features.

### 5. Bugs & Stability
*   **macOS Gatekeeper Blocker (Severity: Medium/High UX friction)**
    *   **Issue:** Users attempting to open the app on macOS receive a false positive that the application is damaged.
    *   **Status:** Addressed in Release v1.7.11 documentation.
    *   **Note:** While not a code fix (signing), the project is actively mitigating user confusion by providing instructions to disable Gatekeeper for the app via Terminal.

### 6. Feature Requests & Roadmap Signals
*   **Credits System:** Based on PR #32, the next versions of EasyClaw/RivonClaw will likely include a feature to track or display credits. This implies a shift towards better community contribution tracking or the preparation for a premium/usage-based model.

### 7. User Feedback Summary
*   **Pain Points:** The primary user friction currently is the **macOS installation experience**. The fact that the latest release highlights a fix/workaround for the "damaged" file error indicates this was a significant source of user confusion or support requests.
*   **Satisfaction:** The project is responsive to these platform-specific hurdles, ensuring users can run the software even without official Apple developer signatures.

### 8. Backlog Watch
*   **PR #32:** Requires maintainer review and merge to advance the roadmap.
*   **Code Signing:** While no specific issue is open, the recurring need for Terminal workarounds suggests that obtaining an Apple Developer Certificate or finding an alternative distribution method remains a long-standing background task for full platform stability.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*