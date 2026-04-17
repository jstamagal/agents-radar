# OpenClaw Ecosystem Digest 2026-04-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-17 00:17 UTC

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

# OpenClaw Project Digest: 2026-04-17

## 1. Today's Overview
OpenClaw is experiencing a **high-velocity development cycle** today, with a massive surge in community engagement: **1,000 items** (Issues + PRs) were updated in the last 24 hours. The project has released two new versions (**v2026.4.15** and **v2026.4.15-beta.2**) focused on expanding model capabilities for Anthropic and Google providers. However, the project is currently facing significant stability challenges; there is a cluster of critical regressions introduced in recent versions (specifically `v2026.4.14` and `v2026.4.15`), causing crashes in the onboarding flow and breaking core chat UI functionality. Despite this, feature development continues aggressively, with major architectural changes like "Memory v2" and Windows native support in progress.

## 2. Latest Releases
### **v2026.4.15 & v2026.4.15-beta.2** (Released 2026-04-15/16)
These releases focus on provider enhancements and bundled plugin updates.
*   **Anthropic Models:** Added default selections, `opus` aliases, and updated CLI defaults to point to **Claude Opus 4.7**. Image understanding is now bundled with Opus 4.7.
*   **Google TTS:** Added **Gemini Text-to-Speech** support to the bundled `google` plugin, including provider registration, voice selection, and WAV reply output.
*   *Note:* While features are added, these releases coincide with reports of increased instability in the control UI and onboarding processes.

## 3. Project Progress
### Active Development Areas (via Top PRs)
*   **Memory v2 Architecture:** PR [#67836](https://github.com/openclaw/openclaw/pull/67836) lays the groundwork for a new SQLite-backed "Memory v2" sidecar, featuring ingest and reranking pipelines. This is currently opt-in (`memoryV2.ingest.enabled`) but represents a major shift in how the agent handles persistence.
*   **Windows Support:** PR [#66898](https://github.com/openclaw/openclaw/pull/66898) is pushing for a "Windows Native Wrapper & Hardened Installer," addressing the long-standing request for native Windows apps.
*   **UI/UX Overhaul:** PR [#67819](https://github.com/openclaw/openclaw/pull/67819) aims to overhaul the Control UI settings, introducing "Quick Settings," grouped accordions, and a guided automation wizard to improve usability.
*   **Model Provider Expansion:**
    *   **SiliconFlow:** PR [#63836](https://github.com/openclaw/openclaw/pull/63836) adds a bundled provider for SiliconFlow (Qwen/DeepSeek models).
    *   **GitHub Copilot:** PR [#58675](https://github.com/openclaw/openclaw/pull/58675) implements auto-discovery of models via the `/models` API.

## 4. Community Hot Topics
The community is extremely active, discussing critical bugs and long-awaited features.

*   **Internationalization (i18n):** Issue [#3460](https://github.com/openclaw/openclaw/issues/3460) (120 comments, CLOSED) sparked debate on localization. While officially closed due to lack of bandwidth, user demand remains high.
*   **Linux/Windows Apps:** Issue [#75](https://github.com/openclaw/openclaw/issues/75) (82 comments) remains a top request. Users want native feature parity for Linux and Windows, similar to the macOS/iOS/Android clients.
*   **OAuth Token Race Condition:** Issue [#26322](https://github.com/openclaw/openclaw/issues/26322) (21 comments) highlights a distributed systems bug where `refresh_token_reused` errors cause spurious failovers when multiple agents share an auth profile.
*   **Tool Execution Failures (GPT-5.3):** Issue [#53959](https://github.com/openclaw/openclaw/issues/53959) (19 comments) reports a regression where `openai-codex/gpt-5.3-codex` acknowledges tools but fails to execute them.

## 5. Bugs & Stability
**Stability Alert:** The `v2026.4.14` -> `v2026.4.15` release cycle has introduced several regressions.

*   **Critical: Onboarding Crash:**
    *   **Issues:** [#67291](https://github.com/openclaw/openclaw/issues/67291), [#67353](https://github.com/openclaw/openclaw/issues/67353), [#67130](https://github.com/openclaw/openclaw/issues/67130)
    *   **Symptom:** The CLI crashes with `TypeError: Cannot read properties of undefined (reading 'trim')` during the `openclaw onboard` flow, specifically when setting up channels. This is a **Beta Release Blocker** for new users.
    *   **Status:** Occurs in `v2026.4.15`.
*   **High: Windows Chat UI Regression:**
    *   **Issue:** [#67035](https://github.com/openclaw/openclaw/issues/67035)
    *   **Symptom:** Input text swallowed, streamed replies invisible until refresh, and typing indicators failing. Significantly degrades usability on Windows.
*   **High: OpenAI-Codex Provider 403s:**
    *   **Issue:** [#66633](https://github.com/openclaw/openclaw/issues/66633)
    *   **Symptom:** Cloudflare 403 bot-mitigation errors on every request after upgrading to `v2026.4.14`.
*   **Medium: Cloudflare Bot Detection:**
    *   **Issue:** [#66633](https://github.com/openclaw/openclaw/issues/66633)
    *   **Impact:** Users are unable to use `openai-codex` providers due to stricter bot detection challenges.

## 6. Feature Requests & Roadmap Signals
Users are explicitly requesting advanced architectural changes and quality-of-life improvements.

*   **Cognitive Memory Layer:** Issue [#52532](https://github.com/openclaw/openclaw/issues/52532) proposes a "Cognitive Memory Layer" based on the Atkinson-Shiffrin model (1968), adding persistent semantic memory with Ebbinghaus decay curves. This aligns with the "Memory v2" work seen in PR [#67836](https://github.com/openclaw/openclaw/pull/67836).
*   **Dynamic Model Discovery:** Issue [#10687](https://github.com/openclaw/openclaw/issues/10687) calls for fully dynamic model discovery for providers like OpenRouter, eliminating the need for static catalogs.
*   **Agent-to-Agent Message Bus:** Issue [#52290](https://github.com/openclaw/openclaw/issues/52290) proposes a dedicated plugin for inter-agent communication, moving beyond the current constraints.

## 7. User Feedback Summary
**Pain Points:**
*   **Fragility of Updates:** Users are frustrated by "whack-a-mole" regressions where upgrading to the latest version breaks previously working features (e.g., [#66601](https://github.com/openclaw/openclaw/issues/66601), [#67237](https://github.com/openclaw/openclaw/issues/67237)).
*   **Installation Experience:** The "Cannot read properties of undefined (reading 'trim')" error is flooding the tracker, indicating a severe degradation in the first-run experience.
*   **Platform Parity:** Windows and Linux users feel neglected compared to the polished macOS/iOS experience, as highlighted in Issue [#75](https://github.com/openclaw/openclaw/issues/75).

**Satisfaction:**
*   Users are highly responsive to new model support (e.g., Claude Opus 4.7, Google TTS) and engaged in testing beta features.
*   The community is actively submitting PRs to fix bugs (e.g., Windows CJK encoding in PR [#64709](https://github.com/openclaw/openclaw/pull/64709)), showing strong open-source contribution health.

## 8. Backlog Watch
Several older issues remain relevant and require maintainer attention:
*   **BlueBubbles Webhook Routes:** Issue [#53927](https://github.com/openclaw/openclaw/issues/53927) (Closed but relevant to PR [#47843](https://github.com/openclaw/openclaw/pull/47843)) – ensuring webhooks don't return 404 after restarts.
*   **Context Caching:** Issue [#51873](https://github.com/openclaw/openclaw/issues/51873) reports that context caching "almost always doesn't work," a critical feature for cost management in large-context agents.
*   **Dynamic Model Catalogs:** The static nature of model selection (Issue [#10687](https://github.com/openclaw/openclaw/issues/10687)) remains a bottleneck for users adopting fast-moving providers like OpenRouter.

---

## Cross-Ecosystem Comparison

# AI Agent Ecosystem Analysis Report
**Date:** 2026-04-17
**Analyst:** Senior Open-Source Intelligence Unit

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is undergoing a phase of **hyper-growth followed by stabilization pains**. The landscape is bifurcating between "monolithic" platforms attempting to provide a universal interface (OpenClaw, IronClaw, Zeroclaw) and "lightweight" frameworks focusing on specific use cases like coding (Moltis) or enterprise messaging (CoPaw, LobsterAI). Across the board, projects are struggling with **"Version 2.0" friction**, where architectural rewrites to support memory, multi-agent orchestration, and advanced routing are introducing critical stability regressions. There is a clear industry trend toward **agentic memory persistence** (moving beyond chat history) and **local-first execution**, though cloud provider API compatibility remains the primary integration bottleneck.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 1,000+ Items | High | v2026.4.15 (Unstable) | **B+** (High Eng, Critical Bugs) |
| **Zeroclaw** | 40 Updated | 50 Updated | v0.7.0 (Blocked) | **B** (Refactoring Stress) |
| **CoPaw** | 50 Updated | 50 Updated | v1.1.2-beta.2 | **B+** (Fast Iteration) |
| **Moltis** | Low (Closed Fast) | 28 Updated (90% Merged) | v20260416.02 | **A-** (High Stability) |
| **NanoBot** | 13 Active | 56 Processed | None (Active Dev) | **B+** (Feature Rich) |
| **PicoClaw** | 12 Updated | 27 Updated | Nightly (Unstable) | **B-** (Platform Bugs) |
| **NanoClaw** | 3 New | 17 Updated | None (Building) | **B** (Architectural Shift) |
| **NullClaw** | Low | 14 Updated | None (Imminent Patch) | **A-** (Rapid Bug Fixing) |
| **IronClaw** | 45 Open | 41 Active | None (Staging) | **B-** (Security/UX Debt) |
| **LobsterAI** | 0 New | 8 Merged | None (Maintenance) | **B** (Stable/Slow) |
| **EasyClaw** | 1 Open | 1 Closed | v1.7.13 (Minor) | **C+** (Distro Friction) |

_*Health Score based on velocity, bug-to-fix ratio, and community sentiment._

## 3. OpenClaw's Position
**Position:** Market Leader in Volume & Scope, currently facing "Scaling Pains."

*   **Advantages vs. Peers:** OpenClaw commands the largest community engagement (1,000 daily item updates) and the broadest provider support (Anthropic, Google, OpenAI, SiliconFlow). It is the only project aggressively pursuing "Memory v2" (SQLite-backed vector search) alongside native Windows support.
*   **Technical Approach:** Distinctly "batteries-included" monolithic architecture. Unlike NanoBot or Moltis which focus on specific niches, OpenClaw aims to be the OS-level agent.
*   **Community Size:** Significantly larger than Zeroclaw or NanoClaw. However, it is currently suffering from high-velocity regression issues (onboarding crashes, UI failures) that smaller, more focused projects like Moltis or NullClaw are managing to avoid through higher merge selectivity.

## 4. Shared Technical Focus Areas
Cross-referencing the digests reveals three dominant technical pillars being solved simultaneously across the ecosystem:

1.  **Persistent "Cognitive" Memory:**
    *   **OpenClaw:** Implementing "Memory v2" with SQLite/Reranking (PR #67836).
    *   **NanoClaw:** Integrating `mem0` for Graph RAG (PR #1256).
    *   **CoPaw:** Proposing plugin backends (mem0, Zep) to replace hardcoded memory (PR #3500).
    *   *Signal:* Simple chat history is insufficient; users are demanding long-term semantic memory.

2.  **Headless/Container Authentication:**
    *   **PicoClaw:** Critical issue with CLI login in headless environments (#2533).
    *   **NullClaw:** Adding Tailscale gateway support for remote access (#826).
    *   **EasyClaw:** Struggling with macOS code signing/Gatekeeper for distribution.
    *   *Signal:* A push towards running agents as background services/servers requires better auth flows than browser-based OAuth.

3.  **Agentic UX & Observability:**
    *   **NanoClaw:** Redesigning Telegram UI to show "Agentic Operations" status (PR #1801).
    *   **Zeroclaw:** Pushing for OpenTelemetry (OTEL) trace parenting (PR #5716).
    *   **Moltis:** Adding "Reasoning Control" UI to adjust LLM effort (PR #750).
    *   *Signal:* Users are frustrated by "black box" agents. They need visibility into *what* the agent is doing (thinking, using tools, waiting) especially during long execution times.

## 5. Differentiation Analysis

*   **OpenClaw & IronClaw (The Platforms):** Focus on the "Everything App." High volume of features, provider support, and platforms (Mobile, Desktop, CLI). *Trade-off:* High instability surface area.
*   **Zeroclaw & NanoClaw (The Architects):** Focus on structural integrity. Zeroclaw is rewriting its microkernel (Rust); NanoClaw is building "Mission Control." *Trade-off:* Slow release cadence, steep learning curves.
*   **Moltis & NullClaw (The Specialists):**
    *   **Moltis:** Betting heavily on **Code-Awareness** (native code indexing) and Reasoning models. Targeting developers.
    *   **NullClaw:** Betting on **Sandbox Security & Performance** (Zig 0.16). Targeting system engineers.
*   **CoPaw & LobsterAI (The Integrators):** Focused on **Enterprise Ecosystems** (WeChat, Feishu, Slack). They are less about "general AI" and more about "workflow automation" inside existing office suites.

## 6. Community Momentum & Maturity
*   **Tier 1 (Stabilizing & Maturing):** **Moltis, NullClaw.** These projects have high merge rates (90% for Moltis) and rapid bug closure times (hours for NullClaw). They are reacting quickly to user feedback and entering a reliability phase.
*   **Tier 2 (High Innovation, High Friction):** **OpenClaw, IronClaw, Zeroclaw.** These are adding features (Memory v2, Microkernels, Safety layers) faster than they can fix the resulting bugs. Critical regressions are common, but the feature pace is aggressive.
*   **Tier 3 (Maintenance Mode):** **LobsterAI.** Low velocity, mostly bug fixes. A stable choice for enterprise WeChat but not a hotbed of new AI research.

## 7. Trend Signals for AI Developers
1.  **The "Model Context Protocol" (MCP) Effect:** Multiple projects (PicoClaw #2546, CoPaw #1059) are moving toward standard protocols for connecting tools/data to agents. **Recommendation:** Build integrations that are MCP-compatible rather than custom APIs.
2.  **Local LLMs are Mainstream:** Support for Ollama, LM Studio, and vLLM is no longer a "nice-to-have" but a core requirement (NanoBot #3185, PicoClaw #28).
3.  **Tool Calling is Fragile:** A significant portion of high-priority bugs across OpenClaw, IronClaw, and Zeroclaw relate to LLMs failing to invoke tools correctly (arguments, schema mismatches, refusal handling). **Recommendation:** Robust fallback logic and schema validation are more critical than the LLM itself in production stacks.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest (2026-04-17)

## 1. Today's Overview
NanoBot is experiencing a **high-velocity development phase** with significant activity across both features and bug fixes. The project processed **56 Pull Requests** in the last 24 hours (split evenly between new proposals and merges), alongside **13 active Issues**. Stability is a primary focus, with multiple critical fixes regarding infinite loops, API compatibility, and session persistence landing today. The community is actively engaging on topics regarding long-term memory management and enterprise platform integrations.

## 2. Releases
*None released in the last 24 hours.*

## 3. Project Progress
Several significant features and stability improvements were merged or finalized today:

*   **WebSocket & Multi-platform Support**: PR [#3179](https://github.com/HKUDS/nanobot/pull/3179) and [#3197](https://github.com/HKUDS/nanobot/pull/3197) (Closed/Merged) brought enhanced WebSocket tooling, session lifecycle notifications, and a re-introduction of the **Microsoft Teams** channel.
*   **Memory & Performance**: PR [#3210](https://github.com/HKUDS/nanobot/pull/3210) (Closed) improved performance by caching tool definitions to boost prompt cache hit rates. PR [#3177](https://github.com/HKUDS/nanobot/pull/3177) added a "MyTool" for runtime self-inspection.
*   **API & Configuration**: PR [#3175](https://github.com/HKUDS/nanobot/pull/3175) (Closed) implemented support for dynamic LLM providers, and PR [#3171](https://github.com/HKUDS/nanobot/pull/3171) added channel-based filtering for Discord.
*   **Streaming**: Issue [#3218](https://github.com/HKUDS/nanobot/issues/3218) (Closed) requested SSE streaming, with a corresponding implementation in PR [#3222](https://github.com/HKUDS/nanobot/pull/3222) (Closed) now active.

## 4. Community Hot Topics
*   **[Discussion] Long-term Memory Limitations** - Issue [#3227](https://github.com/HKUDS/nanobot/issues/3227)
    *   **Summary:** User "kxsk-git" raised concerns about memory degradation in large-scale or long-duration projects. The current `MEMORY.md` + `Dream` system struggles to retain details as context windows fill up.
    *   **Underlying Need:** Users require a more hierarchical or vector-based memory retrieval system rather than simple text injection for long-running agent instances.
*   **[Proposal] Task-local Tool Routing** - Issue [#2220](https://github.com/HKUDS/nanobot/issues/2220)
    *   **Summary:** A proposal to use `ContextVar` for safer async tool routing.
    *   **Underlying Need:** Hardening async safety to prevent state leakage in concurrent agent operations.

## 5. Bugs & Stability
*   **[CRITICAL] Infinite Empty Tool-Call Loop** - Issue [#3220](https://github.com/HKUDS/nanobot/issues/3220)
    *   **Severity:** High.
    *   **Details:** Non-compliant API gateways that inject tool_calls under non-standard `finish_reason` values (like "refusal") cause the agent to enter an infinite loop.
    *   **Status:** Fix proposed in PR [#3225](https://github.com/HKUDS/nanobot/pull/3225).
*   **[HIGH] Email Response Loop** - Issue [#3215](https://github.com/HKUDS/nanobot/issues/3215)
    *   **Severity:** High.
    *   **Details:** When SMTP is configured, the agent enters an endless loop replying to its own emails.
    *   **Status:** Open, needs developer attention.
*   **[MEDIUM] Version Upgrade Failure (v0.1.5 -> v0.1.5.post1)** - Issue [#3190](https://github.com/HKUDS/nanobot/issues/3190)
    *   **Details:** Incompatibility errors regarding memory after a minor version upgrade.
    *   **Status:** Closed (likely resolved by support).
*   **[MEDIUM] MiniMax API Invalid Arguments** - Issue [#2373](https://github.com/HKUDS/nanobot/issues/2373)
    *   **Details:** Integration issues with MiniMax provider returning 400 errors for tool calls.
    *   **Status:** Open.

## 6. Feature Requests & Roadmap Signals
*   **LM Studio Support**: Issue [#3185](https://github.com/HKUDS/nanobot/issues/3185) requests a native provider for LM Studio to match the support existing for Ollama.
*   **Discord Bot-to-Bot Chat**: Issue [#3217](https://github.com/HKUDS/nanobot/issues/3217) requests the ability for bots to reply to other bots, currently hardcoded to ignore `author.bot`.
*   **Git-based Memory Staleness**: PR [#3212](https://github.com/HKUDS/nanobot/pull/3212) proposes using Git history to annotate how old specific memory sections are, helping the LLM decide what is stale.
*   **Spawn Control**: PR [#3223](https://github.com/HKUDS/nanobot/pull/3223) proposes tools to cancel or query sub-agent status.

## 7. User Feedback Summary
*   **Pain Points:** Users are facing fragmentation with different LLM providers (MiniMax, Groq, LM Studio) lacking parity in configuration support (e.g., `apiBase` ignored in Groq [#3213](https://github.com/HKUDS/nanobot/issues/3213)).
*   **UX:** The status of the agent is described as a "black box" (Issue [#3107](https://github.com/HKUDS/nanobot/issues/3107)); users want visibility into task counts and timeouts.
*   **Satisfaction:** Despite bugs, long-term users appreciate the clean codebase and "OpenClaw" direction, though the memory system is showing strain in complex scenarios.

## 8. Backlog Watch
*   **Issue #3107 (General Suggestions)**: Contains multiple small UX requests (status display, config timeouts, retry terminations) that have been open since mid-April but are frequently updated.
*   **Issue #2220 (ContextVar Proposal)**: Open since March, technically significant for async safety but awaiting merge.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-04-17

## 1. Today's Overview
The ZeroClaw project is in a **high-velocity "pre-release" sprint**, evidenced by a chaotic volume of 40 updated issues and 50 updated PRs within the last 24 hours. The project is currently navigating a critical architectural transition (the "Microkernel" split) while simultaneously attempting to stabilize the v0.7.0 release. The data reflects a project under significant active development, but also technical strain: CI/CD pipelines are breaking due to the refactoring, and friction is increasing regarding documentation and governance. The "RFC" (Request for Comments) process is highly active, signaling a community-driven effort to professionalize the codebase from a "reactive" tool into a production-ready enterprise platform.

## 2. Releases
**Status: No new releases published in the last 24 hours.**
While no new tag was pushed today, PR **#5805** (chore: release v0.7.0) is open and targeting `master`. This release is intended to bundle 140+ features and 200+ fixes, but it is currently blocked by issues arising from the recent workspace refactoring.

## 3. Project Progress
Significant refactoring and cleanup efforts have merged or are near completion:
*   **Microkernel Architecture:** The massive workspace decomposition (#5559) has landed, though it caused downstream regressions (e.g., #5811).
*   **Documentation Culture:** A new `CONVENTIONS.md` file was introduced (PR #5801) to streamline contributor onboarding, and a fix for translated docs was merged (#5679).
*   **Observability Fixes:** OpenTelemetry (OTEL) trace parenting was fixed (PR #5716), resolving an issue where agent invocations could not be tracked hierarchically.

## 4. Community Hot Topics
*   **Architectural Governance (RFCs):** A suite of RFCs detailing the transition to v1.0.0 is dominating the discussion.
    *   **[RFC: Microkernel Transition #5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)**: The blueprint for moving from a monolithic to a microkernel architecture (Top Commented: 8).
    *   **[RFC: Team Governance #5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577)** & **[RFC: Contribution Culture #5615](https://github.com/zeroclaw-labs/zeroclaw/issues/5615)**: These documents highlight a community striving to manage scaling pains.
*   **i18n Strategy:** A proposal to replace the current TOML-based i18n with **Mozilla Fluent** and remove translated docs from the repo (**#5787**) has sparked discussion on maintenance overhead vs. user accessibility.
*   **The "Crash" Culture:** The recent closure of **#4363** (Push fixups to contributor branches) reflects a shift in maintainer philosophy—prioritizing collaboration over superseding PRs.

## 5. Bugs & Stability
**CRITICAL (S0/S1):**
*   **[Security Risk: Context Spillage #5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)** (S0): Discord chat context is leaking into scheduled task executions.
*   **[Agent Mode Crash #5685](https://github.com/zeroclaw-labs/zeroclaw/issues/5685)** (S1): The `zeroclaw agent` command crashes because the CLI channel factory is not registered at startup.
*   **[Web Dashboard Unavailable #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)** (S1): Despite recent fixes, reports persist that the web UI is non-functional out-of-the-box.

**HIGH IMPACT (S2):**
*   **[TOTP Gate for Shell #5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779)** (PR): Addresses a critical security gap where `sudo` or `rm -rf` could be executed without additional verification.
*   **[Windows Console Flash #5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562)**: Background command execution flashes a CMD window on Windows.
*   **[Docker Build Failure #5541](https://github.com/zeroclaw-labs/zeroclaw/issues/5541)**: The Debian Dockerfile is currently broken for local builds.

**CI INFRASTRUCTURE:**
*   **[Publish Pipeline Broken #5811](https://github.com/zeroclaw-labs/zeroclaw/issues/5811)**: The v0.7.0 release is blocked because `cargo publish` fails after the workspace split.

## 6. Feature Requests & Roadmap Signals
*   **Observability is King:** Multiple PRs (#5785, #5804) focus on OTEL tracing. "Structured observability" is a primary goal for v0.7.0+.
*   **Tool Approval UI:** PR **[feat(telegram): Inline Keyboard #5790](https://github.com/zeroclaw-labs/zeroclaw/pull/5790)** indicates a push to make "supervised mode" viable across all channels, not just Discord/Web.
*   **Mattermost "Oncall" Mode:** Issue **[Feature: [Mattermost] oncall mode #3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100)** requests a move from single-channel to multi-channel listening, signaling enterprise use-case expansion.

## 7. User Feedback Summary
*   **Installation Friction:** Users are struggling with the "batteries-included" experience. Issues regarding the **Web Dashboard (#4866)** and **Docker build (#5541)** suggest the project is currently difficult to onboard for non-developers.
*   **Configuration Complexity:** The request for **GitHub Copilot onboarding (#4851)** and **Anthropic-compatible endpoints (#5105)** indicates users want to use their own SaaS keys easily but find manual `config.toml` editing tedious.
*   **Performance:** Compilation speed is becoming a pain point (**[Feature: split the crate #5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447)**), prompting the architectural split currently underway.

## 8. Backlog Watch
*   **Stale Requests:** Feature requests like **Napcat/Onebot channel (#2503)** and **Webhook Transforms (#2467)** remain open and "stale" since early March, indicating lower maintainer priority compared to core infrastructure stability.
*   **Unanswered RFCs:** The collection of "Intentional Architecture" RFCs (#5574, #5579, #5653) are in Draft status and need community consensus to proceed. These are critical for the project's future but risk bottling up progress if not ratified soon.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-04-17

## 1. Today's Overview
PicoClaw has seen a **high volume of development activity** in the last 24 hours, with 27 Pull Requests and 12 Issues updated, indicating a robust development cycle. The project released a **new nightly build (v0.2.6-nightly.20260416)**, focusing heavily on dependency updates and infrastructure hardening. Key technical themes today include resolving authentication flows for headless environments, improving provider network resilience, and fixing critical message routing bugs in the `whatsapp_native` channel. While the number of open issues remains stable, the community is actively identifying edge cases in multi-provider configurations and OAuth implementations.

## 2. Releases
**Version:** `v0.2.6-nightly.20260416.f32b303d`
*   **Type:** Nightly Build (Automated)
*   **Status:** Unstable/Caution Advised
*   **Details:** This nightly build incorporates changes merged up to 2026-04-16.
*   **Changelog:** [Compare v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

## 3. Project Progress
*   **Infrastructure & Reliability:**
    *   **Network Fallbacks:** Merged **PR #2547** which improves error classification for network issues (TLS, DNS, connection resets). Previously, these transport errors would fail immediately; they now correctly trigger the provider fallback mechanism.
    *   **Cron Sessions:** Merged **PR #2474** fixes a state management bug where cron jobs reused session keys, causing conversation history to leak between subsequent job executions. Each run now uses an independent session.
*   **Agent Core:**
    *   **Parallel Loops:** Merged **PR #2503** updates the agent loop to support parallel processing of user messages with correct response routing, significantly improving potential throughput.
*   **Security:**
    *   **WebSocket Hardening:** **PR #2545** (Open) proposes securing the Pico websocket access by proxying it through the launcher auth, preventing the browser from receiving raw tokens.

## 4. Community Hot Topics
*   **#28: LM Studio Easy Connect** [🔥 14 Comments]
    *   **Link:** [sipeed/picoclaw#28](https://github.com/sipeed/picoclaw/issues/28)
    *   **Analysis:** This long-standing request highlights a strong user desire to integrate PicoClaw with local LLM tools like LM Studio without complex configuration. The user is targeting Android deployment, suggesting a demand for "local-first" or edge-computing AI agent setups.
*   **#2533: Headless Authentication (CLI)** [🔥 2 Comments]
    *   **Link:** [sipeed/picoclaw#2533](https://github.com/sipeed/picoclaw/issues/2533)
    *   **Analysis:** Users running PicoClaw on servers or within containers (Webtop/VMs) are blocked by the browser-based OAuth login. This is a critical usability gap for server-side deployments.

## 5. Bugs & Stability
*   **[CRITICAL] WhatsApp Native: Silent Message Drops**
    *   **Issue #2540:** `whatsapp_native` silently drops messages from accounts using Linked-Device IDs (LID). This effectively breaks the bot for migrated users.
    *   **Issue #2541:** The `group_trigger.mention_only` feature is completely broken due to four compounded defects.
    *   **Fix Status:** No PRs linked yet. These require immediate attention as they affect core message reception.
*   **[HIGH] Auth Persistence**
    *   **Issue #2550:** `picoclaw auth login` fails to update token expiration, forcing frequent manual re-authentication via the Web UI.
    *   **Fix Status:** **PR #2549** (Open) addresses the related `--no-browser` request and token flow.
*   **[MEDIUM] Gateway Start Abnormal**
    *   **Issue #2513:** Reports of the PicoClaw gateway crashing or exiting abnormally on Debian 13.

## 6. Feature Requests & Roadmap Signals
*   **LM Studio Integration:** Requested in **#28**. Given the nightly build activity, this is a candidate for the next minor version to broaden provider support.
*   **OAuth 2.1 + PKCE for MCP:** Requested in **#2546**. Users want to add Model Context Protocol (MCP) servers via a dashboard URL (similar to Claude.ai), indicating a push towards easier extensibility.
*   **Authentication/Authorization:** **#1067** requests the integration of "Authula" to add a security layer for command execution, preventing unauthorized access if the CLI is compromised.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Authentication Friction:** Users are frustrated with having to manually re-authenticate in the Web UI (**Issue #2302**) and the inability to log in without a browser on headless systems (**Issue #2533**).
    *   **Visibility:** Bugs in WhatsApp native channels are "silent," making debugging difficult for users (**Issue #2540**).
    *   **Complexity:** Connecting to local providers or configuring MCPs is currently too technical for general users.
*   **Positive Signals:** The nightly build indicates active maintenance and rapid iteration on dependency updates (Go, Node, React).

## 8. Backlog Watch
*   **#1249 (SKILL.md Context Injection):** Previously closed/opened, this issue regarding automatic skill injection into LLM context remains a point of discussion for agent capability.
*   **#2270 (Config Panic):** An open PR fixing a panic in `collectSensitive` for non-addressable `SecureString` values needs merging to prevent runtime crashes during config operations.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-17

## 1. Today's Overview
NanoClaw is experiencing a surge in development activity, with **17 Pull Requests** updated in the last 24 hours, signaling a major expansion of capabilities. While only **3 new Issues** were reported, the project appears to be in a "building" phase focused on architectural expansion rather than bug fixing. Notably, 6 PRs were merged or closed today, indicating active maintenance. The focus is currently split between enhancing the v2 architecture, adding new channel integrations (Matrix, multi-workspace Slack), and implementing sophisticated UX improvements for agentic interactions.

## 2. Releases
No new releases were published today.

## 3. Project Progress
**Recent Merges & Closures:**
*   **Trust Gateway Fix:** PR #1793 was merged, adding a critical 1MB body size limit to `readBody()` in the trust gateway to prevent DoS attacks via oversized payloads.
*   **Scope Expansion:** Several PRs related to a "7-layer scope expansion" (#1794, #1786) were closed. While marked closed, the high volume of related commits suggests these features may have been merged, squashed, or refactored into broader branches, significantly advancing the event bus and executor pool architectures.

## 4. Community Hot Topics
**Key Discussions & Developments:**
*   **Agentic UX Redesign:** PR #1801 proposes a radical transformation of the Telegram interface from a flat text feed into a structured "agentic operations panel." This is a major shift in user interaction design.
    *   *Link:* [qwibitai/nanoclaw#1801](https://github.com/qwibitai/nanoclaw/pull/1801)
*   **Mission Control v2.0:** PR #1796 outlines a "Bridge-first orchestration" redesign for Atlas Mission Control, detailing a complex workflow involving Docker containers, overlays, and cost reporting.
    *   *Link:* [qwibitai/nanoclaw#1796](https://github.com/qwibitai/nanoclaw/pull/1796)
*   **Persistent Graph Memory:** PR #1256 continues to gain traction, proposing the use of `mem0` (Graph RAG) with Neo4j and Qdrant for long-term agent memory without adding new Docker containers.
    *   *Link:* [qwibitai/nanoclaw#1256](https://github.com/qwibitai/nanoclaw/pull/1256)

## 5. Bugs & Stability
**Reported Issues:**
*   **[Severity: High] Silent Failures on Telegram:** Issue #1805 reports that during long processing times (e.g., 11 minutes), the Telegram bot provides no typing indicator or status update. This leads users to believe the bot has frozen, significantly impacting perceived reliability.
    *   *Link:* [qwibitai/nanoclaw#1805](https://github.com/qwibitai/nanoclaw/issues/1805)
*   **[Severity: Medium] Security Test Coverage Gap:** Issue #1803 highlights zero test coverage for the IPC authorization boundary (`src/ipc.ts`), which gates cross-group message injection. This represents a high-risk regression potential for privilege escalation.
    *   *Link:* [qwibitai/nanoclaw#1803](https://github.com/qwibitai/nanoclaw/issues/1803)

## 6. Feature Requests & Roadmap Signals
*   **Multi-Workspace Slack:** Issue #1804 requests support for multiple concurrent Slack workspaces in a single instance, moving beyond the current single-token limitation.
    *   *Prediction:* High likelihood of implementation in v2 given the architectural refactoring happening in the channel registry.
*   **OpenAI-Compatible API Server:** A spate of PRs (#1797, #1798, #1799, #1800) indicates a strong push to allow NanoClaw agents to be exposed as standard OpenAI-compatible endpoints. The repeated closing/reopening suggests rapid iteration on the implementation details.
    *   *Link:* [qwibitai/nanoclaw#1800](https://github.com/qwibitai/nanoclaw/pull/1800)
*   **Matrix Channel with E2EE:** PR #1624 is implementing full End-to-End Encryption support for the Matrix channel, addressing a core privacy concern for decentralized chat users.
    *   *Link:* [qwibitai/nanoclaw#1624](https://github.com/qwibitai/nanoclaw/pull/1624)

## 7. User Feedback Summary
*   **UX Pain Points:** Users are dissatisfied with the "flat text narrator" experience on Telegram (Issue #1805, PR #1801), explicitly requesting "agentic" feedback during long tasks. The silence during processing is causing anxiety about system status.
*   **Integration Flexibility:** There is a clear demand for more flexible credential management (PR #1727 - Unraid/Proxy) and standard API interfaces (PR #1800), suggesting users are embedding NanoClaw into larger, heterogeneous infrastructure.

## 8. Backlog Watch
*   **AI Swarm News Briefing:** PR #886 (skill: daily news briefing with AI swarms) remains open but updated today. It has been open for over a month but is actively maintained, suggesting it is a complex feature awaiting final integration.
    *   *Link:* [qwibitai/nanoclaw#886](https://github.com/qwibitai/nanoclaw/pull/886)
*   **Atomic Chat MCP Integration:** PR #1802 proposes exposing local models from the "Atomic Chat" desktop app as tools. This represents a growing trend of local-first/hybrid agent architectures.
    *   *Link:* [qwibitai/nanoclaw#1802](https://github.com/qwibitai/nanoclaw/pull/1802)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-04-17

## 1. Today's Overview
NullClaw has seen an exceptionally high-velocity day with significant stability improvements and core infrastructure upgrades. The project closed a technical debt gap by migrating to **Zig 0.16** (PR #823) and resolved a swarm of critical bugs affecting Linux environments, Docker sandboxes, and provider integrations. Out of 14 updated PRs, 11 were merged or closed, indicating a strong focus on code stabilization and rapid response to user-reported regressions. While no new release was published today, the sheer volume of fixes suggests that a patch release (likely `v2026.4.17` or `v2026.4.18`) is imminent to address the accumulated corrections.

## 2. Releases
*   **Status:** No new releases published in the last 24 hours.
    *   *Note:* A significant migration to **Zig 0.16** has just merged (PR #823). Users building from source should update their Zig toolchains.

## 3. Project Progress
*   **Zig 0.16 Migration** ([#823](https://github.com/nullclaw/nullclaw/pull/823)): The codebase has been successfully updated from Zig 0.15.x to Zig 0.16.0, including refactoring the stdlib compatibility layer for WebSocket and networking APIs.
*   **Linux Sandbox Security & Reliability** ([#805](https://github.com/nullclaw/nullclaw/pull/805)): Hardened the auto-detection logic for Linux sandboxes (firejail/bubblewrap) to ensure they are actually runnable before marking them as available, preventing configuration failures.
*   **Docker & Security Fixes**: Several critical security and runtime patches were merged:
    *   **Provider Hardening** ([#807](https://github.com/nullclaw/nullclaw/pull/807)): Tightened boundaries for providers/browsers to reduce SSRF risks and added pairing token expiration.
    *   **Docker Mount Fix** ([#801](https://github.com/nullclaw/nullclaw/pull/801)): Fixed a "invalid empty volume spec" error caused by uninitialized mount arguments in the Docker sandbox factory.
    *   **Agent Routing & History** ([#804](https://github.com/nullclaw/nullclaw/pull/804), [#802](https://github.com/nullclaw/nullclaw/pull/802)): Corrected session routing to ensure unbound sessions stay on the main agent and fixed SQLite history persistence for CLI turns.
*   **Provider Compatibility** ([#806](https://github.com/nullclaw/nullclaw/pull/806), [#803](https://github.com/nullclaw/nullclaw/pull/803)): Fixed fallback logic for OpenAI-compatible providers (404 errors) and restored support for local container hostnames in OTEL HTTP endpoints.
*   **Service Management** ([#810](https://github.com/nullclaw/nullclaw/pull/810)): Added SysVinit as a fallback option for installing the NullClaw service on Linux systems lacking systemd or OpenRC.

## 4. Community Hot Topics
*   **Zig Toolchain on Debian** ([Issue #820](https://github.com/nullclaw/nullclaw/issues/820)): Users are struggling to install the correct version of Zig on Debian to build NullClaw, questioning if Docker is strictly required.
    *   *Underlying Need:* Better documentation for non-Docker/native installations on stable Linux distributions.
*   **Version Reporting** ([Issue #821](https://github.com/nullclaw/nullclaw/issues/821)): Users installing from source are frustrated that `nullclaw version` returns a static string "dev" instead of a git hash or version number, making debugging difficult.
    *   *Underlying Need:* More robust build-time versioning for non-release builds.
*   **Tailscale Gateway Integration** ([Issue #826](https://github.com/nullclaw/nullclaw/issues/826)): Discussion on using the NullClaw gateway over Tailscale, with current reports of `NotImplemented` errors.
    *   *Underlying Need:* Remote access and tunneling support for headless/VPS deployments.

## 5. Bugs & Stability
*   **CRITICAL: Linux Shell Execution Failures** ([Issue #791](https://github.com/nullclaw/nullclaw/issues/791), Issue #784, Issue #779): Multiple users reported that the `shell` tool was completely broken on native Linux and Docker environments due to "invalid empty volume spec" errors.
    *   *Status:* **Fixed** in merged PR [#801](https://github.com/nullclaw/nullclaw/pull/801).
*   **CRITICAL: SQLite History Not Persisting** ([Issue #797](https://github.com/nullclaw/nullclaw/issues/797)): Users found that successful agent replies were not being saved to history when using the SQLite backend.
    *   *Status:* **Fixed** in merged PR [#802](https://github.com/nullclaw/nullclaw/pull/802).
*   **HIGH: Custom Provider 404 Errors** ([Issue #766](https://github.com/nullclaw/nullclaw/issues/766)): Custom OpenAI-compatible providers failed if they didn't support `/chat/completions`.
    *   *Status:* **Fixed** in merged PR [#806](https://github.com/nullclaw/nullclaw/pull/806).
*   **HIGH: OpenTelemetry (OTEL) Regression** ([Issue #800](https://github.com/nullclaw/nullclaw/issues/800)): HTTPS constraints broke local OTel collectors (e.g., via Podman).
    *   *Status:* **Fixed** in merged PR [#803](https://github.com/nullclaw/nullclaw/pull/803).
*   **MEDIUM: UTF-8 Truncation in Compaction** ([Issue #599](https://github.com/nullclaw/nullclaw/issues/599)): History compaction was causing test failures and potential data corruption by splitting multi-byte characters.
    *   *Status:* **Fixed** in merged PR [#824](https://github.com/nullclaw/nullclaw/pull/824).

## 6. Feature Requests & Roadmap Signals
*   **Admin-Oriented CLI** ([PR #829](https://github.com/nullclaw/nullclaw/pull/829) - Open): Introduction of JSON output flags for `config show` and `models summary`, indicating a push towards better observability and management automation (likely for the "NullHub" ecosystem).
*   **Cron Subagent Engine** ([PR #783](https://github.com/nullclaw/nullclaw/pull/783) - Open): Development of a persistent, database-backed cron engine for scheduling agent tasks, suggesting a move towards background automation capabilities.
*   **Gateway & Tunnels** ([Issue #826](https://github.com/nullclaw/nullclaw/issues/826)): User interest in Tailscale integration suggests a demand for secure, zero-config remote access to NullClaw instances.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Environment Fragility:** Users faced significant issues with shell execution and Docker volume mounts immediately following recent updates, leading to a "broken" state for native Linux runners.
    *   **Build Complexity:** The requirement for specific Zig versions on Debian is a barrier to entry; users want clearer "native" installation instructions.
    *   **Obscure Versioning:** The "dev" version string hinders user ability to report bugs effectively or verify their installation.
*   **Satisfaction:** High responsiveness from maintainers is evident; critical bugs were closed rapidly with specific PRs addressing the root causes.

## 8. Backlog Watch
*   **Open PRs:**
    *   **[#829](https://github.com/nullclaw/nullclaw/pull/829)**: Admin config/models CLI (New).
    *   **[#783](https://github.com/nullclaw/nullclaw/pull/783)**: Cron subagent engine (Large feature, still in progress).
*   **Open Issues:**
    *   **[#826](https://github.com/nullclaw/nullclaw/issues/826)**: Tailscale/Gateway support needs implementation or documentation.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-04-17

## 1. Today's Overview
IronClaw is experiencing a period of high-intensity development and stabilization, characterized by significant activity in **Engine V2 safety protocols** and **Gateway UI fixes**. The project shows robust engagement with 45 open issues and 41 active pull requests, indicating a push toward a stable release of the V2 architecture. However, stability concerns are evident, specifically regarding a **critical security regression** where inbound secret scanning was bypassed in the V2 engine. The team is actively prioritizing safety fixes and UX improvements, with several large-scale refactoring efforts (Scope: XL) currently in review.

## 2. Releases
**No new releases** were published in the last 24 hours. The current focus appears to be on stabilizing the staging branch (`hosted-staging`) for a future release rather than pushing production tags.

## 3. Project Progress
*   **Security Patch (Merged/Closed PRs):** PR #2494 was merged to address the critical **Engine V2 secret scanning bypass**. It restores the three inbound safety checks (secrets, guardrails) to the V2 path, ensuring user-pasted tokens are not sent directly to the LLM.
*   **Gateway Stability (Merged/Closed PRs):** PR #2415 was merged to fix a UI annoyance where **tab switching triggered full chat refreshes**, improving the user experience by eliminating unnecessary DOM clearing during SSE reconnects.
*   **Routing Logic (Merged/Closed PRs):** PR #2512 (Slack relay OAuth) and PR #2551 (Routine setup resume) were closed, indicating fixes for authentication flows and state management in the Web Gateway.

## 4. Community Hot Topics
*   **Critical Safety Regression: [Issue #2491](https://github.com/nearai/ironclaw/issues/2491)**
    *   **Status:** Open (P1 - Security Review Required)
    *   **Topic:** "Engine V2 bypasses inbound secret scanning."
    *   **Analysis:** This issue highlights the most critical risk currently facing the project. Users reported that API keys were being leaked to the LLM. While a fix PR (#2494) exists and was likely merged to address this, the community focus remains heavily on ensuring V2 parity with V1 safety features.
*   **Tool Usage & Agent Capabilities: [Issue #2541](https://github.com/nearai/ironclaw/issues/2541)**
    *   **Status:** Open (Bug Bash P1)
    *   **Topic:** "Agent fails to invoke tools for content summarization."
    *   **Analysis:** Users are experiencing "hallucinated workflows" where the agent claims to process tasks but fails to execute the underlying tools. This suggests friction in the V2 engine's tool-calling logic.
*   **Workflow Ergonomics: [Issue #1338](https://github.com/nearai/ironclaw/issues/1338)**
    *   **Status:** Open (Enhancement)
    *   **Topic:** "Tool schema discovery: make extension workflow sequencing easier."
    *   **Analysis:** There is a strong developer signal that the current tool schemas are difficult for LLMs to navigate correctly, leading to failed multi-step authoring flows (install -> auth -> activate).

## 5. Bugs & Stability
*   **[P1 - Security] Inbound Secret Scanning Bypass:**
    *   **Issue:** [#2491](https://github.com/nearai/ironclaw/issues/2491)
    *   **Impact:** Tokens/Keys sent directly to LLM.
    *   **Fix Status:** Fix PR [#2494](https://github.com/nearai/ironclaw/pull/2494) is merged.
*   **[P1 - Integration] Slack/Google Suite Auth Failures:**
    *   **Issues:** [#2229](https://github.com/nearai/ironclaw/issues/2229) (Google Sheets OAuth 400), [#1998](https://github.com/nearai/ironclaw/issues/1998) (Slack connect flow broken).
    *   **Impact:** Users cannot configure major third-party integrations.
*   **[P1 - UX] Dashboard Instability:**
    *   **Issue:** [#2410](https://github.com/nearai/ironclaw/issues/2410)
    *   **Impact:** Dashboard enters a refresh loop, wiping user content.
*   **[P2 - WASM Channels] Runtime Loops:**
    *   **Issues:** [#2557](https://github.com/nearai/ironclaw/issues/2557) (Auth reconnect loops), [#2556](https://github.com/nearai/ironclaw/issues/2556) (Auto-starting inactive channels).
    *   **Impact:** WASM channels are resource-intensive and unstable when auth is missing.

## 6. Feature Requests & Roadmap Signals
*   **Mission/Routine Enhancements:** PR [#2547](https://github.com/nearai/ironclaw/pull/2547) proposes making "cadence" mandatory for missions and introduces "reactive missions" (e.g., "log every telegram message"). This signals a move toward more automated, background agent behaviors.
*   **Matrix Channel:** PR [#2019](https://github.com/nearai/ironclaw/pull/2019) is in progress to add a native Matrix channel, including E2EE support.
*   **Aliyun LLM Support:** PR [#1446](https://github.com/nearai/ironclaw/pull/1446) indicates expansion into non-Western LLM providers (Aliyun BaiLian), broadening the infrastructure scope.

## 7. User Feedback Summary
*   **Pain Point - Instruction Following:** QA reports (Issue [#2282](https://github.com/nearai/ironclaw/issues/2282)) indicate the agent frequently overrides explicit user instructions (e.g., alerting on every request vs. only on failure).
*   **Pain Point - Temporal Logic:** Users report the agent ignores temporal conditions, sending immediate alerts instead of waiting for scheduled times (Issue [#2281](https://github.com/nearai/ironclaw/issues/2281)).
*   **Satisfaction - Rust Performance:** Positive signals from maintainers regarding Rust-based WASM channel performance, despite current auth-loop bugs.

## 8. Backlog Watch
*   **Tool Schema Overhaul:** Issues [#1331](https://github.com/nearai/ironclaw/issues/1331), [#1334](https://github.com/nearai/ironclaw/issues/1334), [#1337](https://github.com/nearai/ironclaw/issues/1337), and [#1338](https://github.com/nearai/ironclaw/issues/1338). These "enhancement" bugs have been open since mid-March and highlight a systemic need to improve how the tool schema is presented to the LLM to reduce errors.
*   **Routines UI Creation:** Issue [#1325](https://github.com/nearai/ironclaw/issues/1325) requests a first-class create/edit flow for Routines in the Web UI, moving away from read-only management.
*   **Marketplace Availability:** Issue [#1997](https://github.com/nearai/ironclaw/issues/1997) notes the lack of an IronClaw Slack App in the marketplace, creating friction for new users who must manually create apps.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-04-17

## 1. Today's Overview
The LobsterAI project exhibited moderate maintenance activity on April 17, 2026, with no new releases or issue updates reported. The development focus was primarily on stabilizing the codebase, as evidenced by the closure of 6 Pull Requests (PRs) addressing fixes and feature integration, alongside 2 open PRs still under review. Recent updates concentrated on refining core functionalities such as the "Cowork" module, system power management, and integration stability (OpenClaw, MCP). While the absence of new issues suggests a stable user experience for current users, the low engagement on open discussions indicates a maintenance-heavy cycle rather than active feature expansion.

## 2. Releases
*   **No new releases published in the last 24 hours.**

## 3. Project Progress
The following features and fixes were successfully merged or advanced in the last 24 hours:

*   **Multi-Robot Support for Enterprise WeChat (企微):** PR #1670 was merged, adding support for multiple robots within the Enterprise WeChat integration and fixing bugs related to scheduled task notifications.
    *   *Related PR:* [#1670](https://github.com/netease-youdao/LobsterAI/pull/1670)
*   **OpenClaw & Cowork Stability:** PR #1702 (merged) integrated changes from `release/2026.04.14`, while PR #1704 (merged) fixed a bug where `HEARTBEAT_OK` replies were leaking into Cowork sessions, disrupting user interactions.
    *   *Related PRs:* [#1702](https://github.com/netease-youdao/LobsterAI/pull/1702), [#1704](https://github.com/netease-youdao/LobsterAI/pull/1704)
*   **Power Management Optimization:** PR #1705 (merged) unified power save blocker logic in the main process to prevent app suspension, resolving lifecycle management inconsistencies.
    *   *Related PR:* [#1705](https://github.com/netease-youdao/LobsterAI/pull/1705)
*   **MCP & UI Fixes:** PR #1703 (merged) restored critical icon component imports (`SearchIcon`, `PencilIcon`, etc.) that were accidentally deleted, preventing crashes in the McpManager page. PR #1706 (merged) added UUID and UserID parameters to update check requests.
    *   *Related PRs:* [#1703](https://github.com/netease-youdao/LobsterAI/pull/1703), [#1706](https://github.com/netease-youdao/LobsterAI/pull/1706)

## 4. Community Hot Topics
*   **Agent Context Switching Bug:**
    There is 1 active open PR regarding a UX inconsistency where the homepage input box retains text and attachments when switching between different Agents (e.g., from "main" to "Architect"). The root cause has been identified as a shared Redux state key (`__home__`), suggesting an active effort to decouple agent states.
    *   *Related PR:* [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) (Open)

## 5. Bugs & Stability
*   **Critical UI Crash (Fixed):** The McpManager page was crashing due to missing imports for icon components (`SearchIcon`, `PencilIcon`, `TrashIcon`, `ConnectorIcon`) caused by a merge conflict.
    *   *Fix Status:* Resolved in PR [#1703](https://github.com/netease-youdao/LobsterAI/pull/1703).
*   **Session Noise Leakage (Fixed):** Users experienced unwanted `HEARTBEAT_OK` replies appearing in Cowork sessions, likely degrading the cleanliness of the chat interface.
    *   *Fix Status:* Resolved in PR [#1704](https://github.com/netease-youdao/LobsterAI/pull/1704).
*   **Enterprise Integration Failures (Fixed):** Scheduled task notifications were failing specifically within the Enterprise WeChat (企微) environment.
    *   *Fix Status:* Resolved in PR [#1670](https://github.com/netease-youdao/LobsterAI/pull/1670).

## 6. Feature Requests & Roadmap Signals
*   **AIHubMix Provider:** A stale PR (#438) regarding the addition of the "aihubmix" provider was updated yesterday. This suggests continued interest in expanding LLM provider support, though it has been open for over a month.
    *   *Signal:* Potential roadmap item for provider diversity.
    *   *Related PR:* [#438](https://github.com/netease-youdao/LobsterAI/pull/438)
*   **Update Telemetry:** The addition of UUID and UserID to update checks (PR #1706) suggests a move towards more granular tracking of deployment statistics.

## 7. User Feedback Summary
*   **UX Friction:** The identification of the input box not clearing when switching Agents (PR #1707) indicates users are actively utilizing multiple Agents and expect context isolation, finding the current state persistence confusing.
*   **Reliability Concerns:** The swift fixes for Enterprise WeChat notifications and UI crashes suggest a user base that relies heavily on these integrations for daily productivity, prioritizing stability over new features.

## 8. Backlog Watch
*   **Long-standing Feature:** PR #438 (Feat/add aihubmix provider) remains open since March 16, 2026, and is marked as stale. It requires maintainer attention to either merge, review, or close it.
    *   *Link:* [#438](https://github.com/netease-youdao/LobsterAI/pull/438)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-04-17

## 1. Today's Overview
Moltis is demonstrating exceptionally high development velocity and robust maintenance, processing a significant backlog of contributions with a **90% merge/closure rate** (25 of 28 updated items). The project is rapidly advancing its internal architecture (specifically a native code indexing engine) while simultaneously stabilizing provider integrations. While the community is actively testing edge cases across different platforms (Windows, NixOS, OpenRouter), the core team is responsive, closing critical bugs within hours of reporting.

## 2. Releases
**New Release: `20260416.02`**
A patch release was issued on April 16th. Based on the merged Pull Requests leading up to this tag, this release likely focuses on **sanitization fixes for tool schemas** and **compatibility updates for OpenRouter and Grok models**.

*   **Migration Notes:** Users utilizing **OpenRouter with Gemini** or **Grok models** should update immediately to resolve tool definition errors and reasoning capability support.

## 3. Project Progress
Major architectural milestones were achieved alongside essential provider maintenance.

**🚀 Features & Architecture**
*   **Native Code Indexing (PRs #753, #754, #755, #756):** A massive 4-PR stack has been opened to introduce `moltis-code-index`. This feature adds a **built-in SQLite + FTS5 backend** for code search, eliminating external dependencies. It includes an orchestrator, file watchers, delta sync, and agent tool integration.
*   **Reasoning Control UI (PR #750):** A "sparkles" icon toggle has been added to the chat toolbar, allowing users to adjust reasoning effort (Off/Low/Medium/High) for supported models.
*   **NixOS Support (PR #469):** Merged support for reproducible builds via Nix flakes, allowing users to launch Moltis via `nix run`.

**🛠️ Refinements**
*   **Context Window Management (PR #737):** Merged a complex implementation allowing per-model context window overrides in configuration and fixed "oldest-first" tool result compaction to prevent context loss in long agent loops.
*   **Provider Configuration (PR #727):** Wired config overrides into provider contexts.

## 4. Community Hot Topics
**[Discussion] Retry Mechanisms for AI Errors**
*   **Issue:** [#748 - easy way to "retry" a prompt on error](https://github.com/moltis-org/moltis/issues/748)
*   **Analysis:** User @vvuk highlighted a UX friction point where transient network or API errors require manual prompt regeneration. The community is asking for a one-click "Retry" button to resubmit the last prompt without rewriting it.

**[Feature] Message Attachments**
*   **Issue:** [#533 - "+" button for adding message attachments](https://github.com/moltis-org/moltis/issues/533)
*   **Analysis:** This enhancement request continues to garner attention, suggesting users want richer multi-modal interactions (uploading files/images) directly into the chat context.

## 5. Bugs & Stability
**Stability fixes were rapid, with critical regressions identified and patched within 24 hours.**

*   **[CRITICAL] Podman Regression (Ubuntu 24.04/26.04)**
    *   **Issue:** [#757 - Fix in #706 breaks Podman](https://github.com/moltis-org/moltis/issues/757)
    *   **Status:** Open. A recent fix (#706) has introduced a regression breaking Podman environments on modern Ubuntu versions. Users on non-Docker container runtimes should be aware of this open issue.

*   **[HIGH] Provider Schema Rejections**
    *   **Issue:** [#747 - OpenRouter + Gemini property undefined](https://github.com/moltis-org/moltis/issues/747)
    *   **Fix:** **Merged (PR #751)**. Fixed a bug where orphaned `required` entries in tool schemas caused crashes with Gemini via OpenRouter.

*   **[MED] Platform Specific Crashes**
    *   **Windows Crypto Panic:** **Merged (PR #749)**. Fixed a panic on Windows when adding nodes via WSS due to missing rustls `CryptoProvider`.
    *   **Nostr Channel Panic:** **Merged (PR #742)**. Fixed a deadlock/panic in the Nostr plugin by swapping async locks for std locks.

## 6. Feature Requests & Roadmap Signals
*   **Code-Aware Agents:** The aggressive development of the `moltis-code-index` (PRs #753-#756) signals that "Codebase Awareness" is the top priority for the next minor version. This will likely allow Moltis to act as a project-wide coding assistant with file search capabilities.
*   **Model Flexibility:** Merged PRs regarding Grok 3/4 reasoning support (#741) and context window overrides (#723) indicate a trend toward user-defined, fine-grained model configuration rather than static presets.

## 7. User Feedback Summary
*   **Positive:** Users on NixOS are successfully adopting the project following the merge of PR #469.
*   **Pain Points:**
    *   **Tool Compatibility:** There is noticeable friction with tool calling standards across different providers (OpenRouter, Fireworks AI, xAI). Users are reporting various schema validation errors, which the dev team is actively sanitizing.
    *   **Container Complexity:** The lingering "Docker-in-Docker" issue (#102), while closed, had high engagement (5 👍), indicating that container-based development environments are still a primary use case requiring careful handling.

## 8. Backlog Watch
*   **Container Sandboxing:** **[#102 - Docker-in-Docker sandbox mounts](https://github.com/moltis-org/moltis/issues/102)** was recently closed but had been open since Feb 13. Users experiencing empty workspaces in DinD environments should verify if the latest patch (20260416.02) resolves their specific mount path issues.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for **CoPaw** (specifically reflecting the data from the associated `QwenPaw` repository, which appears to be the upstream or core component) as of **2026-04-17**.

***

# CoPaw Project Daily Digest

**Date:** 2026-04-17
**Activity Status:** 🔥 **High** (50 Issues, 50 PRs updated in 24h)

## 1. Today's Overview
CoPaw is experiencing a high-velocity development cycle with significant community engagement. In the last 24 hours, the project addressed **50 issues** and processed **50 pull requests**, indicating a responsive maintenance team. The release of **v1.1.2-beta.2** highlights active stabilization efforts, specifically fixing background task cancellations. However, user discussions reveal a mixture of excitement regarding new features and confusion concerning the project's rebranding/transition from "CoPaw" to "QwenPaw" nomenclature, alongside critical stability reports regarding long-running tasks and file operations.

## 2. Latest Releases
**Version:** `v1.1.2-beta.2`
*   **Key Fixes:**
    *   **Background Task Stability:** Merged a fix to register `AgentApp` dispatched requests with `TaskTracker`. This prevents background tasks from being erroneously cancelled during operation.
    *   **Version Bump:** Updated version string to 1.1.2b2.
*   **Impact:** Users experiencing issues with agents stopping mid-task should test this beta version immediately.

## 3. Project Progress (Merged/Closed PRs)
The project has advanced rapidly on several fronts, particularly in ecosystem integration and channel support.

*   **Model Compatibility:** Completed fixes for **vLLM `tool_choice="auto"`** compatibility ([PR #3438](https://github.com/agentscope-ai/QwenPaw/pull/3438)), ensuring tool calling works correctly with local vLLM deployments.
*   **Channel Expansions:**
    *   **WhatsApp:** Successfully closed PRs ([#2994](https://github.com/agentscope-ai/QwenPaw/pull/2994), [#2962](https://github.com/agentscope-ai/QwenPaw/pull/2962)) to add WhatsApp channel support via `neonize`, preserving connections during workspace hot-reloads.
    *   **Reply-to Features:** Added functionality for agents to "reply" to the trigger message in WhatsApp and Signal ([PR #2995](https://github.com/agentscope-ai/QwenPaw/pull/2995)).
*   **Log & Debugging:** Prioritized `qwenpaw.log` over the legacy `copaw.log` in debug endpoints ([PR #3491](https://github.com/agentscope-ai/QwenPaw/pull/3491)).

## 4. Community Hot Topics
*The most discussed items reflect a struggle with the update process and a desire for advanced orchestration.*

1.  **Post-Update Confusion (CoPaw vs. QwenPaw)**
    *   **[Issue #3309](https://github.com/agentscope-ai/QwenPaw/issues/3309)** (11 comments): Users reported that updating to v1.1.0 caused command-not-found errors and confusion regarding the distinction between `.copaw` and `.qwenpaw` directories.
    *   *Analysis:* Indicates a need for better migration documentation or automated path handling during the rebranding/transition phase.
2.  **Agent Teams & Self-Evolution**
    *   **[Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224)**: A detailed proposal for "CoPaw Agent Teams"—natural language-driven, self-evolving multi-agent collaboration.
    *   **[Issue #3470](https://github.com/agentscope-ai/QwenPaw/issues/3470)**: Request for "Hermes Agent" style self-evolution features.
    *   *Analysis:* There is strong demand for moving beyond single agents to orchestrated teams that can improve themselves autonomously.
3.  **Integration Protocols (ACP)**
    *   **[Issue #1059](https://github.com/agentscope-ai/QwenPaw/issues/1059)**: Request for Agent Communication Protocol (ACP) support to integrate with IDEs like VS Code/Cursor.
    *   *Progress:* Active development is visible in **[PR #3487](https://github.com/agentscope-ai/QwenPaw/pull/3487)**, which adds ACP server capabilities.

## 5. Bugs & Stability
*High priority items affecting user workflows.*

*   **[CRITICAL] Silent Task Stops:**
    *   **[Issue #3011](https://github.com/agentscope-ai/QwenPaw/issues/3011)** (6 comments): Long tasks (coding plans) execute silently and stop prematurely without error logs, requiring manual input to resume.
    *   *Status:* Closed, but if issues persist, users should validate against v1.1.2-beta.2.
*   **[HIGH] Data Truncation:**
    *   **[Issue #1563](https://github.com/agentscope-ai/QwenPaw/issues/1563)** (6 comments): The `write_file` tool truncates large files (~33KB input -> ~6KB output), resulting in data loss.
*   **[MEDIUM] UI Crashes:**
    *   **[Issue #3481](https://github.com/agentscope-ai/QwenPaw/issues/3481)**: The WebUI "Tools" page crashes with a 500 error if a built-in tool has a null icon.
    *   *Fix Incoming:* **[PR #3497](https://github.com/agentscope-ai/QwenPaw/pull/3497)** addresses this.
*   **[MEDIUM] Streaming Timeouts:**
    *   **[Issue #3493](https://github.com/agentscope-ai/QwenPaw/issues/3493)**: `ReadTimeout` errors during streaming responses from the Anthropic API.

## 6. Feature Requests & Roadmap Signals
*   **Multimodal Support:** **[PR #3509](https://github.com/agentscope-ai/QwenPaw/pull/3509)** is open to add image/file message support (`MediaContent`), allowing agents to process visual inputs.
*   **Voice/SIP Integration:** **[PR #3449](https://github.com/agentscope-ai/QwenPaw/pull/3449)** proposes adding a SIP voice channel with pyVoIP/LiveKit support for real-time voice agents.
*   **Extensible Memory:** **[PR #3500](https://github.com/agentscope-ai/QwenPaw/pull/3500)** proposes refactoring the memory backend to support plugins (mem0, Zep, LangMem) instead of just the hardcoded ReMeLight.
*   **Enhanced Logging:** Users are requesting **agent-specific log levels** in the management console (**[Issue #3439](https://github.com/agentscope-ai/QwenPaw/issues/3439)**) to debug specific agent behaviors without noise.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Configuration Complexity:** Users struggle with API compatibility (e.g., Anthropic format errors in **[Issue #3489](https://github.com/agentscope-ai/QwenPaw/issues/3489)** and XML vs JSON format confusion in local models **[Issue #3477](https://github.com/agentscope-ai/QwenPaw/issues/3477)**).
    *   **UX Inconsistencies:** The management console has UI bugs regarding search bars and skill toggle behaviors (**[Issue #3484](https://github.com/agentscope-ai/QwenPaw/issues/3484)**, **[Issue #3504](https://github.com/agentscope-ai/QwenPaw/issues/3504)**).
*   **Satisfaction:**
    *   High appreciation for the wide variety of supported channels (WeChat, DingTalk, Feishu, etc.).
    *   Strong desire for the "Plan Mode" feature (**[PR #2904](https://github.com/agentscope-ai/QwenPaw/pull/2904)**) to improve complex task handling.

## 8. Backlog Watch
*   **[Issue #2757](https://github.com/agentscope-ai/QwenPaw/issues/2757)**: "Enterprise WeChat frequently disconnects." Opened since April 1st. This impacts enterprise users and requires a stability investigation.
*   **[Issue #1563](https://github.com/agentscope-ai/QwenPaw/issues/1563)**: "Data truncation in write_file." Opened since March 16th. A critical bug for coding agents that remains open.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw (RivonClaw) Project Digest
**Date:** 2026-04-17

### 1. Today's Overview
The EasyClaw project is currently in a rapid deployment cycle, releasing two minor versions (v1.7.12 and v1.7.13) on April 17. While release activity is high, code integration appears managed, with one Pull Request successfully merged or closed. However, user-facing stability is a concern; the latest open issue reports a specific update failure with v1.7.11, and the new release notes prominently feature troubleshooting for macOS Gatekeeper warnings, indicating ongoing friction with platform-specific distribution security.

### 2. Releases
**Latest Versions:**
*   **[v1.7.13](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.13)** & **[v1.7.12](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.12)** (RivonClaw)

**Key Changes & Notes:**
*   **Platform Specifics (macOS):** Both releases ship unsigned binaries for macOS. Users will encounter a "damaged and can't be opened" error due to Gatekeeper.
*   **Workaround Required:** Users must manually bypass Gatekeeper via Terminal instructions provided in the release notes to run the application.
*   **Assessment:** The recurrence of this instruction in immediate patch releases suggests a focus on feature updates over obtaining signed developer certificates, which may impact user experience for non-technical macOS users.

### 3. Project Progress
*   **Closed PR:** [PR #32 - Feature/credits system](https://github.com/gaoyangz77/rivonclaw/pull/32)
    *   **Status:** Closed (Apr 16)
    *   **Progress:** Development related to the "credits system" has concluded for this cycle. While the PR is closed, it indicates the potential inclusion or removal of credit/accounting tracking features in recent builds.

### 4. Community Hot Topics
*   **[#33 - 1.7.11更新失败 (Update Failed)](https://github.com/gaoyangz77/rivonclaw/issues/33)**
    *   **Activity:** Opened on Apr 16.
    *   **Analysis:** A user reported a failure during the update process for version 1.7.11, evidenced by a screenshot. This highlights a potential regression in the auto-update mechanism or installer script. Given the subsequent releases (v1.7.12/13), this issue likely prompted the rapid patching cycle.

### 5. Bugs & Stability
*   **Critical - Update Failures:**
    *   **Issue:** [#33](https://github.com/gaoyangz77/rivonclaw/issues/33) reports the v1.7.11 update is broken.
    *   **Status:** Active.
*   **High - Code Signing/Distribution:**
    *   **Issue:** Application blocked by macOS Gatekeeper on every new release.
    *   **Mitigation:** Requires user intervention in Terminal. No fix PR exists; this is a persistent distribution hurdle.

### 6. Feature Requests & Roadmap Signals
*   **Credits System:** The closure of [PR #32](https://github.com/gaoyangz77/rivonclaw/pull/32) regarding a "credits system" suggests this feature is either implemented, discarded, or postponed. It likely represents a shift towards managing usage limits or accounting for agent operations.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **macOS Usability:** The inability to launch the app without terminal commands reduces accessibility for general Mac users.
    *   **Reliability:** The immediate report of a failed update in v1.7.11 suggests frustration with the stability of the auto-update pipeline.

### 8. Backlog Watch
*   **[Issue #33](https://github.com/gaoyangz77/rivonclaw/issues/33):** While recently opened, it is critical for the maintainer to confirm if v1.7.12 or v1.7.13 resolves the update failure reported by the user.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*