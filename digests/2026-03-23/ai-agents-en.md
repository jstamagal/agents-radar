# OpenClaw Ecosystem Digest 2026-03-23

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-23 00:11 UTC

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

# OpenClaw Project Digest: 2026-03-23

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high surge in maintenance activity, with **500 issues and 500 PRs updated in the last 24 hours**. The project is currently in a heavy stabilization phase, grappling with significant regressions introduced in recent versions (specifically `v2026.3.8` through `v2026.3.13`) affecting core gateway connectivity, device pairing, and platform-specific integrations like WhatsApp and Slack. While no new releases were published today, the repository is buzzing with "codex" and maintenance PRs aimed at mitigating critical crashes and deadlocks.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
**No PRs were merged or closed in the provided data set.** All 500 updated Pull Requests remain in the `OPEN` state, indicating a bottleneck in the review/merge process or a concerted effort to batch fixes for a future patch release.

**Key areas undergoing active development (Open PRs):**
*   **Gateway & Agent Lifecycle:** PRs like [#52518](https://github.com/openclaw/openclaw/pull/52518) are introducing background task lifecycle tracking to prevent "ghost" work, while [#52428](https://github.com/openclaw/openclaw/pull/52428) attempts to fix stuck chat run states.
*   **Telegram Resilience:** Following [#52116](https://github.com/openclaw/openclaw/issues/52116) (Telegram client getting stuck), PR [#51931](https://github.com/openclaw/openclaw/pull/51931) implements a health monitor for the polling loop, and [#52524](https://github.com/openclaw/openclaw/pull/52524) prevents message loss during "reply not found" errors.
*   **CLI & Developer Experience:** PR [#51552](https://github.com/openclaw/openclaw/pull/51552) is adding bilingual (English/Chinese) CLI support, and [#52523](https://github.com/openclaw/openclaw/pull/52523) optimizes daemon status checks.

## 4. Community Hot Topics
The community is highly vocal regarding stability and configuration management.

*   **[#26534 DingTalk First-Install Option](https://github.com/openclaw/openclaw/issues/26534)** (76 comments)
    *   **Summary:** Users want DingTalk available during the initial setup wizard.
    *   **Underlying Need:** Lower friction for onboarding with popular enterprise tools.
*   **[#7916 Encrypted API Keys](https://github.com/openclaw/openclaw/issues/7916)** (16 comments, 11 👍)
    *   **Summary:** Request for secrets management (storing API keys encrypted rather than plain text).
    *   **Underlying Need:** Enterprise-grade security and compliance for sensitive credentials.
*   **[#50090 Community Skill Development](https://github.com/openclaw/openclaw/issues/50090)** (13 comments)
    *   **Summary:** Discussion on the gap between the promise of "ClawHub" (community skills) and the current implementation.
    *   **Underlying Need:** A more accessible and robust ecosystem for third-party extensions.
*   **[#25145 Outbound Approval Gate](https://github.com/openclaw/openclaw/issues/25145)** (13 comments, 3 👍)
    *   **Summary:** Request for a pre-send approval hook for outbound messages (Email/SMS/Telegram).
    *   **Underlying Need:** Human-in-the-loop safety controls for autonomous agent actions.

## 5. Bugs & Stability
The project is facing severe regression issues in the `v2026.3.x` series, particularly regarding Gateway connectivity and WebSocket stability.

**Critical Regressions (v2026.3.8 - v2026.3.13):**
1.  **[#45772 Gateway Heartbeat Timer](https://github.com/openclaw/openclaw/issues/45772)** (20 comments): Gateway heartbeat stops after 1-2 triggers due to a non-rescheduling timer.
2.  **[#51987 Gateway WebSocket Handshake](https://github.com/openclaw/openclaw/issues/51987)** (6 comments): Gateway closes connection (code 1000) before handshake completes on local loopback.
3.  **[#50438 Gateway RPC Failures](https://github.com/openclaw/openclaw/issues/50438)** (7 comments): `devices` commands fail with "Gateway closed (1000)" despite status showing "RPC probe ok".
4.  **[#45311 & #7663 Slack Socket Mode](https://github.com/openclaw/openclaw/issues/45311)** (9 comments): Slack connects but receives zero inbound events (regression in 3.12); DM replies fail to deliver.

**Platform-Specific Crashes:**
*   **Windows:** [#25282](https://github.com/openclaw/openclaw/issues/25282) (Install fails via npm/pnpm), [#5440](https://github.com/openclaw/openclaw/issues/5440) (Installer fails on Win 11).
*   **WhatsApp:** [#4686](https://github.com/openclaw/openclaw/issues/4686) (Relinking stuck at "logging in"), [#50208](https://github.com/openclaw/openclaw/issues/50208) ("No active listener" despite linked status).

**Fix Attempts (PRs Open):**
*   Fix for Telegram stuck state: [#51931](https://github.com/openclaw/openclaw/pull/51931)
*   Fix for stuck chat runs: [#52428](https://github.com/openclaw/openclaw/pull/52428)
*   Fix for loopback auth: [#51087](https://github.com/openclaw/openclaw/pull/51087)

## 6. Feature Requests & Roadmap Signals
*   **Multi-Agent Switching:** [#32495](https://github.com/openclaw/openclaw/issues/32495) requests the ability to switch agents in the Control UI, currently restricted to the `main` agent.
*   **Role-Based Access Control (RBAC):** [#8081](https://github.com/openclaw/openclaw/issues/8081) calls for multi-user permission management.
*   **Android APK:** [#9443](https://github.com/openclaw/openclaw/issues/9443) requests prebuilt APK releases for the companion app.
*   **Trust Verification:** [#49971](https://github.com/openclaw/openclaw/issues/49971) proposes an RFC for Native Agent Identity & Trust Verification.

## 7. User Feedback Summary
**Pain Points:**
*   **Fragility of Updates:** Users report that minor version updates (e.g., 3.11 -> 3.12) frequently break critical features like Slack and WhatsApp connectivity.
*   **Docker inconsistencies:** [#14593](https://github.com/openclaw/openclaw/issues/14593) highlights that skills dependent on `brew` fail in Linux containers.
*   **Context Loss:** Issues like [#51857](https://github.com/openclaw/openclaw/issues/51857) ("The Blind Spot Problem") and [#52024](https://github.com/openclaw/openclaw/issues/52024) (Context trimmer splitting tool calls) indicate frustration with agents "forgetting" or hallucinating inputs.
*   **Windows Support:** Multiple reports suggest the Windows experience is degrading, from installer failures to `schtasks` errors ([#49187](https://github.com/openclaw/openclaw/issues/49187)).

## 8. Backlog Watch
These significant issues remain open and unmerged for extended periods:
*   **[#24102 Fallback Chain 429 Errors](https://github.com/openclaw/openclaw/issues/24102)**: Agents fail permanently on quota errors instead of switching models.
*   **[#46680 Ollama Thinking Models](https://github.com/openclaw/openclaw/issues/46680)**: OpenClaw fails to correctly handle `thinking` tokens from Ollama, producing empty responses.
*   **[#49157 Session Write Locks](https://github.com/openclaw/openclaw/issues/49157)**: Fundamental flaw causing >30min deadlocks if promises are rejected.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: AI Agent & Personal Assistant Landscape (2026-03-23)

## 1. Ecosystem Overview
The personal AI assistant open-source ecosystem is currently undergoing a phase of **rapid architectural maturation** alongside **growing stability pains**. The landscape is highly active, with major projects like **OpenClaw**, **NanoBot**, and **ZeroClaw** pushing high-velocity updates despite significant technical debt and regression bugs. A dominant trend is the shift toward **multi-agent orchestration** and **local-first privacy**, with projects racing to integrate support for vision, voice (TTS/STT), and enterprise platforms (WeChat, Slack, Feishu). However, this innovation cycle is exposing fragility in core infrastructure—specifically regarding **context window management**, **gateway reliability**, and **secret management**.

## 2. Activity Comparison

| Project | 24h Issues | 24h PRs | Release Status | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (Updated) | 500 (Updated) | **No Release** (High Regression Risk) | 🟡 Medium-High |
| **NanoBot** | 18 | 72 | No Release | 🟢 High |
| **ZeroClaw** | 25+ | 50 (25 Merged) | **v0.5.8** (Active) | 🟢 High |
| **PicoClaw** | 27 | 46 | Nightly (Refactoring) | 🟢 High |
| **NanoClaw** | Low | 44 | No Release | 🟢 High |
| **LobsterAI** | 28 | 26 | **v2026.3.22** | 🟡 Medium |
| **IronClaw** | 12 | 46 | No Release | 🟡 Medium |
| **NullClaw** | 7 | 13 | No Release | 🟢 Stable |
| **CoPaw** | 38 | 23 | Stale (v0.1.0b) | 🔴 Low (Unstable) |
| **TinyClaw** | 0 | 3 | Stale | 🟢 Stable |
| **Moltis** | 1 | 1 | Stale | 🟢 Stable |
| **ZeptoClaw** | 2 | 2 | Stale | 🟢 Stable |
| **EasyClaw** | 1 | 0 | Stale | 🟢 Stable |

*\*Health Score based on velocity, bug severity, and community sentiment.*

## 3. OpenClaw's Position
**OpenClaw** acts as the **heavyweight incumbent** in this ecosystem, boasting the largest community scale but currently suffering from significant "bloat" and instability.
*   **Advantages:** Massive community contribution (500 updates/day), widest platform support (Slack, WhatsApp, DingTalk), and deep penetration in enterprise use cases (DingTalk requests).
*   **Technical Approach:** Monolithic and feature-rich. It prioritizes breadth of functionality (ClawHub ecosystem) over micro-kernel design.
*   **Community Size:** Significantly larger than peers, but current sentiment is negative due to **regression bugs** in the `v2026.3.x` series (Gateway heartbeats, WebSocket handshakes).
*   **Comparison:** Unlike **NanoBot** (which is streamlining for developer experience) or **PicoClaw** (which is refactoring for technical debt), OpenClaw is struggling to manage the complexity of its own installed base.

## 4. Shared Technical Focus Areas
Several requirements are emerging simultaneously across the ecosystem, indicating industry-wide needs:

*   **WeChat / Weixin Integration:**
    *   *Projects:* **NanoBot**, **ZeroClaw**, **PicoClaw**, **LobsterAI**.
    *   *Signal:* Massive demand for WeWork/Personal WeChat integration. This is the "killer app" for users in the APAC region.
*   **Local-First & Privacy:**
    *   *Projects:* **ZeroClaw** (SearXNG, Piper TTS), **IronClaw** (TEEs), **Moltis** (Local-only RAG).
    *   *Signal:* Users are demanding alternatives to cloud APIs. Features like local TTS and offline search engines are rapidly becoming standard differentiators.
*   **Context Window Management:**
    *   *Projects:* **OpenClaw**, **NanoBot**, **PicoClaw**.
    *   *Signal:* Universal struggle with LLM context limits. Users are frustrated by "blind spots" and aggressive trimming that breaks tool calls.
*   **Multi-Agent Orchestration:**
    *   *Projects:* **NanoClaw**, **LobsterAI**, **IronClaw**, **CoPaw**.
    *   *Signal:* Shift from single-agent chat to "Manager/Worker" or "Router" patterns where agents spawn sub-agents for tasks.
*   **Model Provider Flexibility:**
    *   *Projects:* **NanoClaw** (Copilot SDK), **TinyClaw** (Novita AI), **IronClaw** (AWS Bedrock).
    *   *Signal:* Strong desire to decouple from Anthropic/OpenAI exclusivity to mitigate cost and vendor lock-in.

## 5. Differentiation Analysis
*   **OpenClaw:** The "Enterprise Generalist." Broadest integration, highest complexity, high maintenance burden. Target: Power users and Enterprises.
*   **PicoClaw:** The "Architect's Choice." Focused on refactoring core loops, adding `execline` security, and supporting embedded/Edge devices (`armhf`). Target: System integrators and DevOps.
*   **NanoBot:** The "Developer Experience" leader. High velocity, clean codebase focus, excellent streaming support, and tracing (LiteLLM). Target: Developers building custom agents.
*   **ZeroClaw:** The "Privacy & Multimedia" Specialist. First to market with robust local TTS (Piper), Vision routing, and SearXNG integration by default. Target: Privacy-conscious enthusiasts.
*   **IronClaw:** The "Next-Gen Web" platform. Heavy focus on WASM tooling, MCP (Model Context Protocol), and GPU-based TEEs. Target: Web3 and Cloud-native deployments.
*   **LobsterAI:** The "User-Friendly GUI." Desktop app focus (Electron/Tauri), visualizers, and ChatOps features. Target: End-users who prefer GUIs over CLI.

## 6. Community Momentum & Maturity
*   **Tier 1: High Velocity (The Innovators)** - **NanoBot**, **ZeroClaw**, **PicoClaw**. These projects are shipping features daily, resolving bugs, and showing strong, positive community engagement.
*   **Tier 2: High Scale / High Stress (The Incumbents)** - **OpenClaw**, **IronClaw**. Massive usage and activity, but currently facing trust issues due to critical bugs ( regressions, OAuth blocks).
*   **Tier 3: Niche / Stabilizing (The Specialists)** - **TinyClaw**, **NullClaw**, **Moltis**. Lower activity, focused on specific niches (cost-effective APIs, local Rust execution, documentation). Less noise, more stability.

## 7. Trend Signals for AI Developers
1.  **The "Standardization" of MCP:** Multiple projects (IronClaw, PicoClaw) are adopting the Model Context Protocol or similar "Native Tool Calling" standards. *Advice:* Ensure your tools emit valid JSON schemas.
2.  **Bundling is Back:** After a period of "micro-services," there is a trend back to "Batteries Included" defaults (e.g., ZeroClaw enabling internet tools by default, OpenClaw adding DingTalk in setup). Users are tired of complex config files.
3.  **Async is the Bottleneck:** Almost every "Critical" bug reported today (OpenClaw Gateways, CoPaw Windows shells, NanoBot Ghost Crons) relates to async lifecycle management or event loop handling. *Advice:* Robustness in async contexts is more valuable than new LLM features right now.
4.  **The "Human-in-the-Loop" Gap:** Users across all projects (OpenClaw, NanoClaw, CoPaw) are demanding "Approval Gates" for autonomous actions. Trust is still the barrier to full autonomy.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-23

## 1. Today's Overview
NanoBot is experiencing a **high-velocity development cycle** with significant contributions from the community. In the last 24 hours, the project saw **72 Pull Requests** updated (indicating active parallel development) alongside **18 Issues**. The primary focus appears to be expanding **multi-platform integration** (specifically WeChat) and addressing **context window inefficiencies** in the agent loop. While no formal release was published today, the merge of critical features like "end-to-end streaming" and "WeChat channels" suggests an upcoming significant version update is imminent.

## 2. Releases
*No new releases published today.*

## 3. Project Progress
*Note: PR #2360 was marked CLOSED, but PRs #2348 and #2355 (also WeChat related) are OPEN. Assuming "Project Progress" highlights merged/closed items or significant active development.*

*   **Infrastructure Enhancements**:
    *   **End-to-End Streaming** ([PR #2365](https://github.com/HKUDS/nanobot/pull/2365)): A major enhancement is in progress to deliver token-by-token streaming output across all providers and channels, drastically improving perceived latency for users.
    *   **LiteLLM Tracing** ([PR #2268](https://github.com/HKUDS/nanobot/pull/2268)): Added non-invasive JSONL tracing for LLM calls to monitor costs and latency.
*   **Multi-Agent & Routing**:
    *   **Configured Subagents** ([PR #2368](https://github.com/HKUDS/nanobot/pull/2368)): Introduced logic to allow subagents to utilize different LLM backends independently of the main agent.
    *   **Multi-Agent Loop Support** ([PR #2332](https://github.com/HKUDS/nanobot/pull/2332)): Active development on routing specific channels to specific agent profiles.
*   **Platform Support**:
    *   **WeChat Integration** ([PR #2360](https://github.com/HKUDS/nanobot/pull/2360) - Closed): Added support for personal WeChat accounts (though superseded/duplicate PRs #2348/#2355 remain open).

## 4. Community Hot Topics
*   **QQ Channel File Support** ([Issue #2226](https://github.com/HKUDS/nanobot/issues/2226)):
    *   **Activity:** 4 comments, 4 reactions.
    *   **Summary:** Users are frustrated that the QQ channel lacks file/image sending capabilities despite community attempts to fix it in the past.
    *   **User Need:** Rich media support in non-Telegram/Discord channels.
*   **Telegram Response Duplication** ([Issue #2235](https://github.com/HKUDS/nanobot/issues/2235)):
    *   **Activity:** 5 comments, 6 reactions.
    *   **Summary:** Users see responses twice, blaming "faux streaming."
    *   **User Need:** Reliable, non-repetitive message delivery in Telegram.
*   **Context Window Management** ([Issue #2343](https://github.com/HKUDS/nanobot/issues/2343)):
    *   **Activity:** 8 comments.
    *   **Summary:** Users hitting token limits with Qwen models despite setting `contextWindowTokens`.
    *   **User Need:** Better manual control or smarter automatic truncation of chat history to prevent API errors.
*   **Matrix Channel Instability** ([Issue #1300](https://github.com/HKUDS/nanobot/issues/1300)):
    *   **Activity:** 8 comments.
    *   **Summary:** Matrix channel fails to start.
    *   **User Need:** Stability in the Matrix integration.

## 5. Bugs & Stability
*   **[CRITICAL] Cron Reminders Silently Suppressed** ([Issue #2369](https://github.com/HKUDS/nanobot/issues/2369)):
    *   The evaluator classifies valid reminders as "not actionable," causing them to be dropped without notifying the user.
    *   *Mitigation:* [PR #2364](https://github.com/HKUDS/nanobot/pull/2364) attempts to fix recursion logic but may not solve the core evaluator suppression issue.
*   **[HIGH] Workspace Switching Leaves Ghost Cron Jobs** ([Issue #2358](https://github.com/HKUDS/nanobot/issues/2358)):
    *   Switching workspaces (`-w`) fails to stop old cron jobs, which then execute with the *new* workspace's system prompt.
    *   *Fix:* None identified yet.
*   **[HIGH] Shell Zombie Processes** ([PR #2362](https://github.com/HKUDS/nanobot/pull/2362)):
    *   A bug in `shell.py` leaves zombie processes when commands time out.
    *   *Fix:* PR #2362 is open and addresses the specific `wait()` timeout logic.
*   **[MEDIUM] Local Gitea / Network Whitelist Request** ([Issue #2370](https://github.com/HKUDS/nanobot/issues/2370)):
    *   Users cannot use local Gitea instances due to lack of whitelisting options for file handling.

## 6. Feature Requests & Roadmap Signals
*   **WeChat Personal Account Support**: There is massive demand following the official WeChat 8.0.70 update. Multiple concurrent PRs ([#2360](https://github.com/HKUDS/nanobot/pull/2360), [#2348](https://github.com/HKUDS/nanobot/pull/2348), [#2355](https://github.com/HKUDS/nanobot/pull/2355)) suggest this will be a headline feature in the next release.
*   **Configurable Context Budget** ([PR #2317](https://github.com/HKUDS/nanobot/pull/2317)): Users want the ability to limit how many tokens are sent to the LLM per iteration to manage costs and speed, rather than just relying on the global context window.
*   **NanoBot UI Dashboard** ([Issue #2213](https://github.com/HKUDS/nanobot/issues/2213)): A community member has built a dashboard (`nanobot-ui`) with authentication and data isolation, proposing it be officially adopted.

## 7. User Feedback Summary
*   **Context Window Frustration:** Users are confused by the `maxTokens` vs `contextWindowTokens` configuration, leading to "400 context length exceeded" errors. The system appears to send too much history (Issue #2343).
*   **Platform Specifics:**
    *   **Telegram:** Suffering from "phantom message" glitches (Issue #2235).
    *   **Feishu/Lark:** Users report broken file handling and "silent death" of conversations when tools execute on local models (Ollama) (Issue #2293, Issue #2352).
*   **Positive Signals:** High engagement on "Quality of Life" PRs (Streaming, Mypy support) indicates a sophisticated user base contributing back to the codebase.

## 8. Backlog Watch
*   **Issue #144 (Gemini API Key)**: Open since Feb 5. A configuration bug where `openrouter` is forced even if not configured, causing crashes for Gemini users.
*   **Issue #1300 (Matrix Channel)**: Open since Feb 27. Core functionality (starting the channel) is broken for Matrix users.
*   **PR #2041 (Configured Subagents)**: Referenced in [PR #2368](https://github.com/HKUDS/nanobot/pull/2368). The original proposal for multi-agent backends is being superseded by newer implementations; maintainers should review to merge or close the original.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-03-23

## 1. Today's Overview
ZeroClaw is experiencing an **extremely high-velocity development cycle**, with a near-perfect split of 50 Pull Requests (25 open, 25 merged/closed) indicating active merging of new features. The project released **7 distinct versions** today (spanning v0.5.6-beta through v0.5.8), suggesting a rapid-fire stabilization effort for the v0.5.8 release. Activity is concentrated on **multimodal capabilities** (vision, voice transcription) and **local-first privacy features** (SearXNG, Piper TTS). However, the issue tracker shows a trend of **regression bugs** (e.g., missing features from `main` vs. `master` branch) and configuration complexity friction.

## 2. Releases
### **v0.5.8 (Stable)**
*   **Matrix Security:** Introduced `allowed_rooms` config for room-level gating, preventing the bot from joining unlisted rooms.
*   **Multimodal Routing:** Image messages are now intelligently routed to a dedicated "vision provider" separate from text models.
*   **Telegram:** Added support for forwarded messages with attribution metadata.
*   **TTS (Local):** Added a local **Piper TTS** provider for offline text-to-speech.
*   **Release Notes:** [v0.5.8](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.8)

### **v0.5.8-beta.577**
*   **Browser Automation:** Added a new skill for browser automation, including VNC setup scripts for GUI interaction.
*   **Feishu/Lark:** Added image and file attachment support.
*   **SearXNG:** Integrated support for the privacy-focused metasearch engine.
*   **Voice Transcription:** Added support for transcribing voice messages in supported channels.

## 3. Project Progress
**Key Features Advanced (Merged PRs):**
*   **Native Tool Calling (PR #4276):** Implemented a significant architectural change where skill tools in `SKILL.toml` are now registered as callable tool specs (via API) rather than just XML system prompt text. This improves reliability for LLMs that prefer structured function calling.
*   **Internet Access Default (PR #4270):** Internet access tools (`web_fetch`, `web_search`, `http_request`) are now **enabled by default** with wildcard allowlists, significantly lowering the barrier to entry for new users.
*   **Declarative Cron (PR #4279):** Cron jobs can now be defined via `[[cron.jobs]]` in `config.toml` and synced to the database, improving "Infrastructure as Code" workflows.
*   **Memory Scoring (PR #4274):** Restored "time-decay" scoring for memory, ensuring older, non-core memories lose relevance over time.
*   **WhatsApp Delivery (PR #4273):** Added WhatsApp Web as a delivery channel for scheduled cron announcements.

## 4. Community Hot Topics
*   **[#3540 Lark/Feishu Startup Failure](https://github.com/zeroclaw-labs/zeroclaw/issues/3540)** (9 comments)
    *   *Topic:* Users reporting that the `channel-lark` build fails to start the daemon.
    *   *Underlying Need:* Stability in compilation and clear error messaging for non-standard channels.
*   **[#2487 Function Schema Error](https://github.com/zeroclaw-labs/zeroclaw/issues/2487)** (6 comments)
    *   *Topic:* "Invalid schema for function 'channel_ack_config'" causing workflow failures.
    *   *Underlying Need:* Strict validation of tool schemas and configuration handling.
*   **[#3513 Multiple Message Spam](https://github.com/zeroclaw-labs/zeroclaw/issues/3513)** (4 comments)
    *   *Topic:* Agent chat splits responses into multiple messages instead of one consolidated response.
    *   *Underlying Need:* Better stream buffering and conversational UX control.
*   **[#4093 Missing Streaming Code](https://github.com/zeroclaw-labs/zeroclaw/issues/4093)** (4 comments)
    *   *Topic:* Provider streaming features were merged to a deleted `dev` branch and never reached `master`.
    *   *Underlying Need:* Better branch management discipline and recovery of lost features.

## 5. Bugs & Stability
**High Priority / S1 (Workflow Blocked):**
*   **[#4253 Async Context Panic](https://github.com/zeroclaw-labs/zeroclaw/issues/4253)**: `models refresh` panics for OpenAI-compatible providers. (Fix likely merged today).
*   **[#4139 UTF-8 Panic](https://github.com/zeroclaw-labs/zeroclaw/issues/4139)**: Byte slicing panic on multi-byte characters (e.g., Chinese) in `creator.rs`. (Fix merged in PR #4271).

**Medium Priority / S2 (Degraded):**
*   **[#2960 Browser Pairing Persistence](https://github.com/zeroclaw-labs/zeroclaw/issues/2960)**: Dashboard requires re-pairing on every session.
*   **[#3454 Web Dashboard 404](https://github.com/zeroclaw-labs/zeroclaw/issues/3454)**: Fresh install serves 404 at default dashboard URL.

**Migration / Regression:**
*   **[#3818 & #3753 Missing Main Branch Features](https://github.com/zeroclaw-labs/zeroclaw/issues/3818)**: Critical security parameters and tools were lost during the switch from `main` to `master`. This is causing significant confusion among advanced users ("where did feature X go?").

## 6. Feature Requests & Roadmap Signals
*   **Database Memory (High Interest):** [#4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) requests a `pgvector` and graph-capable memory backend, indicating the current SQLite memory (even with scoring updates) may not scale for enterprise knowledge graphs.
*   **Reasoning Effort Config:** [#2433](https://github.com/zeroclaw-labs/zeroclaw/issues/2433) asks for `reasoning_effort` parameters for Codex models (likely related to OpenAI's o1/o3 series).
*   **LM Studio Connector:** [#2669](https://github.com/zeroclaw-labs/zeroclaw/issues/2669) requests a native connector for local models running in LM Studio.
*   **Multi-stage Scoring:** [#3478](https://github.com/zeroclaw-labs/zeroclaw/issues/3478) proposes a complex 9-stage scoring pipeline for SQLite memory.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Configuration Complexity:** Users are struggling with channel-specific configurations (Lark, Matrix) and "missing" tools that need to be approved or enabled manually.
    *   **Branch Switch Fallout:** The `main` to `master` branch migration has left documentation and user expectations misaligned with reality, leading to "broken" perceptions.
    *   **Local-First desires:** Strong positive reaction to TTS (Piper), SearXNG, and Vision routing shows a user base eager to run powerful agents without sending all data to cloud APIs.

## 8. Backlog Watch
*   **[#2960 Browser Pairing Persistence](https://github.com/zeroclaw-labs/zeroclaw/issues/2969)**: Opened March 7, still active. Users are frustrated with re-authenticating for the dashboard repeatedly.
*   **[#4093 Stranded Streaming Code](https://github.com/zeroclaw-labs/zeroclaw/issues/4093)**: High-value feature (draft updates) is technically written but stranded on a deleted branch. Needs a maintainer to cherry-pick the code to `master`.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-23

## 1. Today's Overview
PicoClaw is experiencing a **high-velocity development cycle** with significant architectural progress. The project successfully merged **Phase 1 of the Agent Refactor** (#1216, #1894), a major milestone aimed at resolving technical debt in the agent loop. Activity is intense, with 46 updated PRs and 27 active issues in the last 24 hours. The community is highly engaged, discussing specifications for new capability models and expanding provider support (AWS Bedrock, ElevenLabs). While the nightly build indicates active stabilization efforts, several provider-related bugs and feature requests suggest rapid growth is outpacing documentation.

## 2. Releases
*   **v0.2.3-nightly.20260322.c0bb8d6d**
    *   **Status:** Automated unstable build.
    *   **Context:** This nightly build likely incorporates the massive Phase 1 Agent refactor merged recently. Users on the `main` branch should exercise caution due to the fundamental changes in the agent execution flow.

## 3. Project Progress
*   **Major Refactor: Phase 1 Complete (PR #1894)**
    *   **Status:** Merged.
    *   **Impact:** Consolidates the Agent refactor into `main`. This re-architects the agent loop to support event-driven hooks, interrupts, and better steering.
    *   **Link:** [sipeed/picoclaw#1894](https://github.com/sipeed/picoclaw/pull/1894)
*   **Audio & Multimodal Support (PR #1891)**
    *   **Status:** Merged.
    *   **Impact:** Extends transcription support beyond Groq, allowing audio-model transcription for broader multimodal provider compatibility.
    *   **Link:** [sipeed/picoclaw#1891](https://github.com/sipeed/picoclaw/pull/1891)
*   **Security & Tools**
    *   **Execline Tool (PR #1874):** Introduced a lightweight (67KB) alternative to bash for more secure command execution (`execlineb`).
    *   **Link:** [sipeed/picoclaw#1874](https://github.com/sipeed/picoclaw/pull/1874)
*   **Fixes**
    *   **OpenAI Compatibility (PR #1509):** Stripped `extra_content` from tool calls for non-Google providers, fixing validation errors.
    *   **Context Window (PR #665):** Fixed history compression logic to prevent orphaning `tool_call`/`tool_result` pairs.
    *   **Agent Config (PR #556):** Decoupled `context_window` from `max_tokens` to prevent aggressive context trimming.

## 4. Community Hot Topics
*   **Meta: Agent Refactor & Capability Model (Issue #1216, #1876)**
    *   **Status:** Open.
    *   **Discussion:** With Phase 1 merged, focus has shifted to defining a "Capability Model" (Track 5). Users are debating how to unify tools, skills, and MCP (Model Context Protocol) into a single abstraction for better orchestration.
    *   **Link:** [sipeed/picoclaw#1216](https://github.com/sipeed/picoclaw/issues/1216) | [sipeed/picoclaw#1876](https://github.com/sipeed/picoclaw/issues/1876)
*   **Groq API Compatibility (Issue #748)**
    *   **Status:** Open (Bug).
    *   **Discussion:** Significant chatter regarding Groq API failures due to PicoClaw sending non-standard `<function=name...>` formats instead of OpenAI-style tool calls.
    *   **Link:** [sipeed/picoclaw#748](https://github.com/sipeed/picoclaw/issues/748)
*   **REST API Availability (Issue #1708, #1856)**
    *   **Status:** Open.
    *   **Discussion:** Multiple users reporting confusion about missing `/chat` and `/a2a` endpoints on the Gateway container. Documentation is not aligning with the deployed binary behavior.
    *   **Link:** [sipeed/picoclaw#1708](https://github.com/sipeed/picoclaw/issues/1708)

## 5. Bugs & Stability
*   **[HIGH] Gateway REST API Missing (Issue #1708)**
    *   **Description:** Users cannot access `/chat` or `/a2a` endpoints on the Gateway container; only health endpoints work.
    *   **Fix:** None available yet; users currently blocked.
*   **[MED] Groq Provider 400 Errors (Issue #748)**
    *   **Description:** Agent calls fail with `tool_use_failed` because PicoClaw generates incompatible tool call formats.
*   **[MED] OpenAI-Compatible Auth Probe Failure (Issue #1864)**
    *   **Description:** Local gateways (e.g., axonhub) fail model availability checks because PicoClaw doesn't send the API key during the `/v1/models` probe. (Fix pending in PR #1896).
*   **[MED] Channel Connection Failures (Issue #1895)**
    *   **Description:** Feishu and DingTalk connections establish but fail to send/receive messages properly.
*   **[LOW] Web Chat Formatting (Issue #1881)**
    *   **Description:** Blank lines in user messages are stripped, affecting input clarity. (Fix pending in PR #1902).

## 6. Feature Requests & Roadmap Signals
*   **Weixin (WeChat) Claw Bot Support (PR #1904)**
    *   **Probability:** High (PR Open).
    *   **Signal:** Completes the missing user-facing CLI commands for the existing native Weixin implementation (`channels weixin login`).
*   **AWS Bedrock Provider (PR #1903)**
    *   **Probability:** High (PR Open).
    *   **Signal:** Adding enterprise-grade cloud provider support via the Converse API.
*   **Authentication/Authorization (Issue #1067)**
    *   **Probability:** Medium.
    *   **Signal:** Request to integrate "Authula" to secure the instance, addressing a major gap for production/VPS deployments.
*   **Event-driven Hooks System (Issue #1796)**
    *   **Probability:** High.
    *   **Signal:** Users want the powerful Hooks system from OpenClaw (automatic triggers on events) ported to PicoClaw.
*   **HTML Rendering in Chat (PR #1900)**
    *   **Probability:** High.
    *   **Signal:** Users want richer formatting than plain Markdown allows (tables, divs) in the web UI.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Configuration Ambiguity:** Users are confused by the implicit vendor parsing logic in model names (e.g., `openai/openai/model-name`), leading to errors (Issue #1883).
    *   **Binary Bloat:** There is a strong desire to keep the binary small, as seen in the use of build tags for new providers (AWS Bedrock) and requests for `armhf` pre-built images (Issue #1778).
    *   **Documentation Gaps:** Missing docs for specific ports (18800) and REST API availability are causing friction.
*   **Satisfaction:**
    *   High satisfaction with the speed of bug fixes (e.g., tool call pair orphans).
    *   Positive reception to the agent refactor discussions, indicating a sophisticated user base interested in architecture.

## 8. Backlog Watch
*   **Issue #1474 (Capability Discovery):** An orchestration layer endpoint to query what a node can do. This is critical for scaling but has been open since March 13.
*   **Issue #1067 (Authula Integration):** A security-centric feature request that remains unaddressed despite being critical for public-facing deployments.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-23

## 1. Today's Overview
NanoClaw is experiencing a **very high velocity** development cycle with 44 Pull Requests updated in the last 24 hours, indicating a massive influx of new features, skills, and integrations. While no official release was published today, the project successfully merged several major features, including multi-tenant support and a Trust & Autonomy framework. The repository appears highly active with community contributions ranging from new channel integrations (Matrix, AstrBot) to core infrastructure improvements (GitHub Copilot SDK, API usage tracking). Maintenance overhead is increasing, evidenced by automated merge-forward failures in two skill branches.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
The following features have advanced via merged or closed Pull Requests:

*   **Trust & Autonomy Framework (Phase 3a):** PR #1308 (Closed) introduces a SQLite-backed `trust_decisions` table and a "draft" routing tier. This allows the event router to withhold events until user approval is given, significantly enhancing control over agent actions.
    *   *Link:* [qwibitai/nanoclaw#1308](https://github.com/qwibitai/nanoclaw/pull/1308)
*   **Web Channel & Multi-Tenant Support:** PR #1298 (Closed) implements a new HTTP/Hono-based web channel ("WebClaw"), a dashboard, and multi-tenant infrastructure. This lays the groundwork for NanoClaw to serve multiple users or organizations simultaneously.
    *   *Link:* [qwibitai/nanoclaw#1298](https://github.com/qwibitai/nanoclaw/pull/1298)
*   **Bug Fixes:** Several critical bugs were addressed, including duplicate messages from scheduled tasks (PR #1335) and corrections to the mount allowlist format in the setup documentation (PR #808).
    *   *Link:* [qwibitai/nanoclaw#1335](https://github.com/qwibitai/nanoclaw/pull/1335) | [qwibitai/nanoclaw#808](https://github.com/qwibitai/nanoclaw/pull/808)

## 4. Community Hot Topics
*   **Expand AI Backend Support:**
    *   **Issue:** [#1350](https://github.com/qwibitai/nanoclaw/issues/1350)
    *   **PR:** [#1351](https://github.com/qwibitai/nanoclaw/pull/1351)
    *   **Analysis:** There is strong community demand to decouple NanoClaw from Anthropic exclusively. Contributors are actively working to integrate the **GitHub Copilot SDK**, allowing agents to run on GPT-4.1 via `NANOCLAW_SDK=copilot`. This reflects a user desire for flexibility in model selection and cost management.

*   **Operational Visibility:**
    *   **PR:** [#1352](https://github.com/qwibitai/nanoclaw/pull/1352)
    *   **Analysis:** Users are asking for better insights into agent behavior. A new PR proposes streaming "thinking" and tool calls to Linear agent sessions, helping users understand what their agents are doing in real-time rather than just seeing the final result.

## 5. Bugs & Stability
*   **Merge Conflicts (Automation):**
    *   **Issue:** [#1345](https://github.com/qwibitai/nanoclaw/issues/1345)
    *   **Severity:** Medium (Maintenance Blocker)
    *   **Details:** Automated workflows failed to merge the `main` branch into `skill/apple-container` and `skill/compact` due to conflicts/test failures. Manual intervention is required to keep these sub-projects synchronized.
*   **Duplicate Messages:**
    *   **Issue:** Referenced in closed PR [#1335](https://github.com/qwibitai/nanoclaw/pull/1335)
    *   **Severity:** Low (Recently Fixed)
    *   **Details:** Scheduled tasks and group agents were posting duplicate messages. A fix was merged today to strip internal tags and adjust streaming callbacks.
*   **Time Formatting Accuracy:**
    *   **PR:** [#1098](https://github.com/qwibitai/nanoclaw/pull/1098) (Open)
    *   **Details:** A fix is pending to include the "weekday" in message timestamps. Agents currently lack context about which day of the week it is (e.g., "Monday"), which can affect scheduling relevance.

## 6. Feature Requests & Roadmap Signals
*   **Pre-run Task Hooks:** Issue #1348 and PR #1349 propose adding a `pre_hook` field to scheduled tasks. This would allow users to define shell scripts that check preconditions (disk space, network) before an agent container is spawned, preventing unnecessary runs.
*   **Agent-to-Agent Direct Communication (Peer IPC):** Issue #1334 (Closed) suggests moving from a hub-and-spoke model to peer-to-peer communication to reduce bottlenecks as the system scales.
*   **New Channel Integrations:** The community is rapidly expanding connectivity. New open PRs add support for **Matrix Protocol** (#791), **AstrBot** (#1339), and a **Mac Control Installer** (#1304).
*   **Write-Protected System Prompts:** PR #1341 proposes a global `system-prompt.md` overlay. This allows users to enforce specific behaviors or constraints on *all* agents without modifying individual skill definitions, a significant enhancement for governance.

## 7. User Feedback Summary
*   **TOS Compliance Concerns:** PR #1343 highlights a user concern regarding Anthropic's Terms of Service. Users are requesting a `/add-cli-backend` skill because using OAuth tokens with the standard Agent SDK may violate TOS, whereas the CLI interface (`claude -p`) is permitted.
*   **Onboarding Friction:** PR #682 and PR #808 indicate that setup is error-prone. Users encountered issues with Slack App Home DM setup and incorrect mount formatting in documentation, suggesting a need for more robust guides or automated validation.
*   **Desire for Attribution:** A non-technical request was made in Issue #1347 to cite specific works by Yang Yuan (Beijing Topos Technology Center) regarding architectural foundations.

## 8. Backlog Watch
*   **Slack Thread Routing:** PR #682 (Open, tagged "Blocked") aims to fix thread-aware replies and App Home DMs. It was created on March 4 but remains unmerged, indicating a blocker that needs resolution.
*   **API Usage Tracking:** PR #1111 (Open) adds cost tracking and categorization for API usage. Created on March 15, it is still pending review, likely due to the complexity of SQLite schema changes.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-03-23

## 1. Today's Overview
NullClaw is demonstrating **high velocity development activity** today, with the repository processing significant changes across infrastructure, protocol support, and bug fixes. The project appears to be in a stabilization phase for its scheduling and file system components while simultaneously expanding its multi-modal and gateway capabilities. With 20 updates (13 PRs + 7 active Issues) in the last 24 hours, the maintainer team is actively addressing technical debt related to Docker environments, race conditions in the cron scheduler, and compatibility with various AI providers. The backlog is heavily focused on enhancing observability (OTEL) and ensuring robust inter-agent communication (A2A).

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
**Merged & Closed Items:**
*   **[#672](https://github.com/nullclaw/nullclaw/pull/672) (Closed):** Clarified public-bind guidance for the browser UI, addressing confusion regarding unauthenticated local pairing and non-loopback listeners.
*   **[#615](https://github.com/nullclaw/nullclaw/pull/615) (Closed):** Added support for Ollama Cloud API keys using Bearer authentication, enabling secure usage of hosted Ollama instances.
*   **[#589](https://github.com/nullclaw/nullclaw/pull/589) (Closed):** Implemented a compatibility fix for `statx`-dependent path creation on Linux kernels older than 4.11, improving system stability.

**Key Advancements (Open PRs):**
*   **Infrastructure:** [#689](https://github.com/nullclaw/nullclaw/pull/689) proposes critical fixes for the cron scheduler, resolving race conditions and memory leaks in the daemon thread.
*   **Protocol Support:** [#686](https://github.com/nullclaw/nullclaw/pull/686) introduces multi-modal support for the A2A (Agent-to-Agent) protocol, including vision capabilities and image forwarding.
*   **Gateway:** [#687](https://github.com/nullclaw/nullclaw/pull/687) makes HTTP body size limits and request timeouts configurable for the gateway.

## 4. Community Hot Topics
*   **[OTEL Enhancements #690](https://github.com/nullclaw/nullclaw/issues/690) (2 comments):**
    *   *Topic:* Instrumentation improvements.
    *   *Signal:* Users are demanding better observability, specifically "Channel attribution," to trace message origins and destinations. This indicates a push for production-grade debugging capabilities.
*   **[Qwen Code Cli Support #647](https://github.com/nullclaw/nullclaw/issues/647) (2 comments):**
    *   *Topic:* New Provider Integration.
    *   *Signal:* Community interest is high for "generous free token" providers like Qwen Code. Users are looking for cost-effective ways to run agents.
*   **[nullclaw-chat-ui Usability #671](https://github.com/nullclaw/nullclaw/issues/671) (1 comment):**
    *   *Topic:* UI/UX for Public Bindings.
    *   *Signal:* While closed, this issue reflects friction in configuring the UI for public access, highlighting a need for better documentation and clearer UX for network binding.

## 5. Bugs & Stability
*   **Critical (Docker/FS):** `cron.zig` ignores `NULLCLAW_HOME` ([#691](https://github.com/nullclaw/nullclaw/issues/691)).
    *   *Impact:* The cron CLI commands fail with `AccessDenied` inside Docker containers because they hardcode `$HOME/.nullclaw/` instead of respecting the environment variable.
    *   *Fix Available:* Yes, see [#692](https://github.com/nullclaw/nullclaw/pull/692).
*   **High (File System):** Agent race condition on file creation ([#684](https://github.com/nullclaw/nullclaw/issues/684)).
    *   *Impact:* When an agent writes a new file, a subsequent immediate read returns "file not found," causing unexpected behavior in workflows.
*   **Medium (Telegram):** Repeated/Incorrect message display in Telegram channel ([#680](https://github.com/nullclaw/nullclaw/issues/680)).
    *   *Impact:* Users seeing duplicate answers in the chat interface, likely due to streaming handling issues.
*   **Medium (Provider):** Bifrost Gateway compatibility issues ([#682](https://github.com/nullclaw/nullclaw/issues/682)).
    *   *Impact:* Users cannot add custom OpenAI-compatible providers if they use HTTP or lack valid certificates.

## 6. Feature Requests & Roadmap Signals
*   **Adaptive Intelligence Pipeline ([#527](https://github.com/nullclaw/nullclaw/pull/527)):** A major feature under development that adds a feedback loop (Turn Scorer + Skill Router) to learn from interactions without extra API calls.
*   **Configurable Gateway Limits:** Users are requesting the ability to handle larger payloads (images) via the gateway, currently being addressed in [#687](https://github.com/nullclaw/nullclaw/pull/687).
*   **Reasoning Support:** Users want to enable "thinking" modes on custom vLLM/Qwen endpoints, addressed in open PR [#669](https://github.com/nullclaw/nullclaw/pull/669).

## 7. User Feedback Summary
*   **Configuration Pain Points:** Users are struggling with environment variables (specifically `NULLCLAW_HOME`) and complex configurations for fallback models ([#683](https://github.com/nullclaw/nullclaw/issues/683)).
*   **Integration Friction:** There is notable friction with non-standard OpenAI-compatible providers (Bifrost, Qwen), suggesting the "OpenAI-compatible" abstraction needs more robust handling for deviations (HTTPS requirements, error schema formats).
*   **Docker Usability:** The specific issue with `AccessDenied` in Docker ([#691](https://github.com/nullclaw/nullclaw/issues/691)) indicates that non-standard filesystem paths are a common hurdle for containerized deployments.

## 8. Backlog Watch
*   **Error Classification:** PR [#685](https://github.com/nullclaw/nullclaw/pull/685) is open to fix error handling for providers that deviate from the standard OpenAI error schema (using `msg` instead of `message`), which is crucial for stability when using diverse model providers.
*   **Interactive Commands:** PR [#673](https://github.com/nullclaw/nullclaw/pull/673) is attempting to fix a long-standing issue where the shell tool hangs on interactive commands.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-23

## 1. Today's Overview
IronClaw is experiencing a period of high development velocity with significant architectural refactoring underway. In the last 24 hours, the project has seen high activity with 46 updated Pull Requests and 12 active Issues, dominated by improvements to the `v2` execution engine and Model Context Protocol (MCP) integrations. While no new releases were published today, the merge ratio (15 closed PRs vs. 31 open) indicates active review and stabilization of the upcoming v0.21.x/v0.22 series. Critical infrastructure work on adaptive learning and unified execution engines suggests a shift towards long-term architectural stability, though users are facing friction with Google OAuth and TEE credential injection.

## 2. Releases
*None released in the last 24 hours.*

## 3. Project Progress
**Significant Advances:**
*   **Unified Execution Engine (v2):** PR #1557 (Open) introduces a massive architectural overhaul (`ironclaw_engine`), consolidating fragmented abstractions into a unified model with 5 primitives and ~7,300 lines of new Rust code.
*   **MCP & Google Workspace Bridge:** Progress has been made on Google Workspace integration issues. PR #1569 introduces a local `gws-bridge` MCP server to bypass OAuth blocks, and PR #1437 adds support for the Streamable HTTP specification, fixing session initialization with non-OAuth servers.
*   **Schema & Validation Logic:** PR #1397 (Closed) successfully overhauled parameter coercion for complex JSON schemas (`oneOf`, `anyOf`), ensuring robust tool handling.
*   **Test Stability:** PR #1558 (Closed) eliminated environment mutex poisoning cascades, significantly improving the reliability of the test suite.
*   **CLI & UX:** PR #1572 adds credential status visibility to the CLI tool info, helping users debug configuration issues faster.

## 4. Community Hot Topics
*   **[Issue #902](https://github.com/nearai/ironclaw/issues/902): Google OAuth Blocked**
    *   **Discussion:** Users are reporting widespread failures with Google Suite WASM tools due to OAuth blocking ("This app is blocked"). The community is actively discussing the need for an optional GWS fallback provider.
    *   **Underlying Need:** Reliable access to Google ecosystem tools without relying on a single volatile OAuth method.
*   **[Issue #1537](https://github.com/nearai/ironclaw/issues/1537): WASM Credential Injection Failure**
    *   **Discussion:** A critical bug where credentials stored in NEAR AI hosted TEEs are not injected at runtime, causing silent failures in WASM tools.
    *   **Underlying Need:** Trust and reliability in the cloud hosting layer for secret management.
*   **[PR #1187](https://github.com/nearai/ironclaw/pull/1187): Adaptive Learning System**
    *   **Discussion:** A "level-up" proposal to introduce skill synthesis, user profiles, and session search. The author noted "30+ full review-and-fix iterations," signaling intense community scrutiny and desire for this advanced capability.

## 5. Bugs & Stability
*   **[High Risk] WASM Credential Injection (Issue #1537):**
    *   **Impact:** Critical failure of WASM tools in Hosted TEE environments. Secrets are stored but inaccessible at runtime.
    *   **Status:** Open. No fix PR linked yet.
*   **[High Risk] Google Suite OAuth Blocking (Issue #902):**
    *   **Impact:** Total failure of Google Workspace WASM tools.
    *   **Status:** Mitigation in progress via PR #1569 (GWS MCP Bridge).
*   **[Medium Risk] Gemini Tool Call Failures (Issue #1510):**
    *   **Impact:** Function calls to `gemini-3.1-flash-lite-preview` fail with HTTP 400 errors due to missing `thought_signature`.
    *   **Status:** Fix PR #1565 is open.
*   **[Medium Risk] Shell Command Risk Levels (Issue #172):**
    *   **Impact:** Lack of graduated approval for shell commands (e.g., `ls` vs `rm`).
    *   **Status:** Closed (likely resolved/implemented).
*   **[Medium Risk] Debounce/Messaging Logic (Issue #259):**
    *   **Impact:** Rapid messages trigger separate agent turns, causing irrelevant LLM responses.
    *   **Status:** Closed.

## 6. Feature Requests & Roadmap Signals
*   **Tiered Context Summaries:** PR #1566 implements L0/L1 summaries for workspace documents, enabling more efficient context retrieval and search.
*   **AWS Bedrock Embeddings:** PR #1568 adds support for Amazon Titan Text Embeddings V2 via Bedrock, expanding the infrastructure options beyond OpenAI/Google.
*   **ClawHub Registry Toggle:** Issue #1570 requests a `CLAWHUB_ENABLED` flag to disable the public skill registry in the Gateway UI, catering to enterprise/offline use cases.
*   **Adaptive Learning:** PR #1187 signals a major roadmap shift toward "smarter" agents that learn from user profiles and past sessions.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Google Auth:** The blocking of Google OAuth is a major friction point for users relying on Gmail/Calendar integration.
    *   **Rapid Messaging:** Users expressed frustration (Issue #259) that the agent processes partial context when messages are sent quickly ("hey", "check server", "started 10 min ago").
    *   **Image Handling:** Issue #1208 highlights that sending image-only messages (without text) results in validation errors, impacting multimodal workflows.
*   **Satisfaction:**
    *   Positive reception to the closing of the "Installer fails on Linux" issue (Issue #1008).
    *   Appreciation for detailed documentation updates (AGENTS.md).

## 8. Backlog Watch
*   **[Issue #1510](https://github.com/nearai/ironclaw/issues/1510):** Open bug regarding `thought_signature` missing in Gemini function calls.
*   **[Issue #1537](https://github.com/nearai/ironclaw/issues/1537):** Critical TEE credential injection failure remains open and needs immediate attention.
*   **[PR #926](https://github.com/nearai/ironclaw/pull/926):** Open PR regarding performance optimization (removing unconditional params clone) has been open since March 11 without merging, indicating potential review bottlenecks on performance patches.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-03-23

## 1. Today's Overview
LobsterAI is experiencing a highly active development cycle with a strong focus on stability and feature expansion. The project shows significant activity with **28 updated issues and 26 modified PRs** in the last 24 hours. While user-reported bugs regarding UI performance (lags) and database integrity are prominent, the development team is responding rapidly with releases and merge-ready fixes. The influx of code quality issues (by user *pylstark*) suggests a recent or ongoing code audit is driving improvements in technical debt, while major feature PRs indicate a push towards advanced multi-agent orchestration and broader IM support.

## 2. Releases
**Version 2026.3.22** (Released: 2026-03-22)
*   **Changes**:
    *   **Fix (OpenClaw)**: Injected node shims into the gateway PATH and guarded environment variables to prevent startup errors during config hot-reloads (PR #638).
    *   **Fix (IM)**: Restarted the gateway after WeChat QR login to ensure the plugin picks up new tokens immediately (PR #652).
*   **Notes**: This release primarily addresses stability issues in the IM login flow and environment configuration.

## 3. Project Progress
**Features & Fixes Advancing:**
*   **Multi-Agent Orchestration**: PR #680 introduces a transparent "Agent Router" (Project Manager) to spawn and monitor Worker Agents, making sub-task execution observable in the UI.
*   **IM Platform Expansions**:
    *   **WeChat**: PR #653 enables QR code login bypassing the OpenClaw Gateway for lower latency.
    *   **MiniMax & Qwen**: PRs #682 and #644 add "One-click OAuth" login for these providers, reducing friction for new users.
    *   **Feishu**: PR #649 adds internal documentation links.
*   **Cowork & UX**: PR #651 adds Markdown export for sessions; PR #658 introduces shell command execution (e.g., `!ls`) directly in the input box.
*   **System**: PR #656 attempts to fix macOS freeze issues during in-app updates.

## 4. Community Hot Topics
*   **Performance Regression**:
    *   **Issue #645** (*duzhen1996*): "Chat UI is very laggy with many records."
        *   *Analysis*: Users are experiencing UI degradation as chat history grows. This indicates a lack of virtualization or list pagination in the current renderer implementation.
    *   **Issue #646** (*duzhen1996*): "Stop generation doesn't work immediately."
        *   *Analysis*: Streaming interruption logic is delayed, impacting user control.
*   **Quality Control Feedback**:
    *   **Issue #640** (*qxjysd*): "Suggest optimizing on a v0.2.4 branch." (👍 2)
        *   *Analysis*: Users feel that versions post-0.2.4 have introduced too many bugs, requesting a stable "LTS" branch.

## 5. Bugs & Stability
*   **Critical (Data Loss)**: **Issue #639** (*funaiy*) - *Metadata corruption blocks entire session loading.*
    *   *Fix*: PR #681 (Open) implements a try-catch block to skip corrupted messages rather than crashing the session.
*   **High (System Stability)**: **Issue #402** (*pisice*) - *Sandbox fails to start (exits immediately).*
*   **High (System Stability)**: **Issue #637** (*isaiah5818*) - *Feishu bot unresponsive to mentions in Allowlist mode after v2026.3.21.*
    *   *Root Cause*: Likely related to config changes in the recent update.
*   **High (Functional)**: **Issue #496** (*simonma070706-code*) - *Sandbox feature missing in v3.17.*
*   **Medium (Logic Error)**: **Issue #592** (*ZlsMzs*) - *Model connection test fails falsely (reports failure for GLM-4.7 despite working).*

## 6. Feature Requests & Roadmap Signals
*   **Shell Integration**: PR #658 indicates a strong demand for "ChatOps" features, allowing users to run shell commands (e.g., `!ls`) directly within the chat interface.
*   **Observability**: PR #680 signals that users want to see the "thought process" of multi-agent systems, not just the final result.
*   **Platform Support**: Multiple PRs (#653, #652) suggest a push to perfect WeChat integration before expanding further.

## 7. User Feedback Summary
*   **Pain Points**:
    *   **Performance**: The chat UI cannot handle long histories effectively (Issue #645).
    *   **Reliability**: Recent updates (post-0.2.4/v3.17) are perceived as buggier than previous versions (Issue #640).
    *   **Usability**: Basic interaction flaws exist, such as the "Stop" button being laggy (Issue #646) and poor feedback when opening folders fails (Issue #668).
*   **Positive Signals**: High engagement in submitting detailed technical issues (e.g., by *pylstark*) suggests a community eager to help refactor and fix the codebase.

## 8. Backlog Watch
*   **Code Quality Audit**: User *pylstark* submitted a series of 15 issues (#661 - #678) highlighting technical debt, including memory leaks (tooltips, timers), XSS risks in Artifacts, and unhandled promise rejections.
    *   *Action Required*: The maintainers need to triage these to decide if a dedicated "cleanup" sprint is needed.
*   **Sandbox Issues**: Issue #402 (Open since Mar 13) and #496 (Open since Mar 19) regarding sandbox functionality (startup failures and feature disappearance) remain unresolved and require immediate attention to prevent feature rot.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-23

## 1. Today's Overview
TinyClaw is currently in an active development phase focused on infrastructure stability and platform expansion. Although there have been no new releases or issue updates in the last 24 hours, the project maintains a healthy cadence of code contributions, with 3 Pull Requests updated recently. The focus has shifted from feature addition to critical architectural refactoring, specifically targeting message routing reliability and telegram bot stability. Activity levels are moderate, with maintainers prioritizing bug fixes and technical debt over new user-facing features.

## 2. Releases
*No new releases published in this period.*

## 3. Project Progress
**Closed/Merged PRs:**
*   **[PR #247: fix(api): resolve agent routing at enqueue time](https://github.com/TinyAGI/tinyclaw/pull/247)** (Closed)
    *   **Impact:** Critical bug fix.
    *   **Details:** Resolved a queue serialization bug where channel messages and scheduled messages were processed in parallel instead of sequentially. This fix ensures that messages without an explicit agent field are routed correctly to the 'default' chain, preventing internal routing logic from bleeding into user-facing message queues.

**Active Development:**
*   **[PR #248: refactor(telegram): migrate to grammY for reliable polling](https://github.com/TinyAGI/tinyclaw/pull/248)**
    *   **Status:** Open.
    *   **Details:** A major refactor to replace `node-telegram-bot-api` with `grammY`. This addresses long-standing stability issues regarding silent polling stalls and implements automatic reconnection with exponential backoff.

## 4. Community Hot Topics
*   **[feat: add Novita AI as a built-in LLM provider](https://github.com/TinyAGI/tinyclaw/pull/243)**
    *   **Status:** Open.
    *   **Activity:** Recently updated (2026-03-22).
    *   **Underlying Need:** The community is seeking cost-effective and flexible alternatives to the dominant LLM providers (Anthropic, OpenAI). By integrating Novita AI via an OpenAI-compatible endpoint, the project is expanding its infrastructure to support a wider range of deployment models without adding bloat to the CLI.

## 5. Bugs & Stability
*   **High Severity (Fixed):** **Agent Routing Collision** ([PR #247](https://github.com/TinyAGI/tinyclaw/pull/247))
    *   A race condition in the API queue allowed internal heartbeats and routing logic to process in parallel with user messages, potentially causing data corruption or mixed message streams. This has been addressed by resolving the agent at enqueue time.
*   **High Severity (In Progress):** **Telegram Bot Silent Failure** ([PR #248](https://github.com/TinyAGI/tinyclaw/pull/248))
    *   The existing Telegram client (`node-telegram-bot-api`) is prone to silent polling stalls where the bot process remains active but stops receiving updates. A migration to the `grammY` framework is in progress to resolve this critical reliability issue.

## 6. Feature Requests & Roadmap Signals
*   **Novita AI Integration:** There is a clear signal to support "first-class" providers beyond the standard OpenAI/Anthropic ecosystem. The successful implementation of Novita AI ([PR #243](https://github.com/TinyAGI/tinyclaw/pull/243)) suggests a roadmap direction toward supporting open-source or specialized API endpoints more seamlessly.
*   **Infrastructure Modernization:** The move to `grammY` for Telegram indicates a broader roadmap goal of modernizing the bot's networking layer to ensure high availability and reducing operational maintenance overhead.

## 7. User Feedback Summary
User sentiment (derived from PR descriptions and applied fixes) highlights a dissatisfaction with the **reliability of message ingestion**. Specifically, the silent failures of the Telegram integration and the routing bugs with the API queue suggest that stability is currently a higher priority for users than new capabilities. The push for Novita AI integration indicates a user desire to avoid vendor lock-in and reduce API costs.

## 8. Backlog Watch
*   **[PR #243: Novita AI Integration](https://github.com/TinyAGI/tinyclaw/pull/243)**
    *   **Attention Needed:** Currently Open. This PR provides a no-brainer value add (new provider support) with no new CLI dependencies. It is ready for review and merge.
*   **[PR #248: grammY Migration](https://github.com/TinyAGI/tinyclaw/pull/248)**
    *   **Attention Needed:** Currently Open. While marked as a refactor, this is critical for long-term stability. It requires maintainer attention to ensure the transition to the new library does not introduce regressions.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Project Digest: Moltis (moltis-org/moltis)**
**Date:** 2026-03-23

### 1. Today's Overview
Project activity on March 23, 2026, is relatively low but focused on maintenance and user experience. The repository saw two issues updated—one feature request regarding memory configuration was closed, and a new bug concerning WhatsApp integration was opened. A single open pull request adds a documentation badge, indicating a focus on project visibility rather than core functionality at this moment. With no new releases, the project appears to be in a stabilization phase where maintainers are addressing specific configuration pain points and integration friction.

### 2. Releases
No new releases were published today.

### 3. Project Progress
*   **Closed Enhancement:** Issue [#137][1] was closed. This request sought support for `base_url` in the Memory Module or an option to disable RAG (Retrieval-Augmented Generation) to allow for pure local Markdown-based memory. The closure suggests the maintainers have either implemented the feature, decided against it, or provided a workaround in the documentation.
*   **Documentation Update:** Pull Request [#461][2] is currently open, aiming to enhance the README by integrating a `gitcgr` code graph badge to visualize repository statistics.

### 4. Community Hot Topics
*   **[#137: Memory Module Configuration (Closed)][1]**
    *   **Activity:** 5 comments.
    *   **Underlying Need:** Users are demanding greater flexibility in how the memory system functions. Specifically, there is a desire to decouple the memory module from RAG endpoints, allowing for a purely local, Markdown-driven workflow without external dependencies.
*   **[#461: Project Visualization (Open PR)][2]**
    *   **Activity:** Open for review.
    *   **Underlying Need:** The community is interested in better code analytics and visualization to understand the project's structure and contribution graph.

### 5. Bugs & Stability
*   **[#460: WhatsApp Integration Confusion (Open)][3]**
    *   **Severity:** Medium (User Experience/Usability).
    *   **Description:** A user reported that the WhatsApp integration process is confusing.
    *   **Analysis:** While not a crash, this indicates a potential regression in documentation or UI flow. If the onboarding process for the WhatsApp channel is not intuitive, it may lead to increased support burden and user drop-off. No fix PR is currently linked.

### 6. Feature Requests & Roadmap Signals
*   **Local-First Memory Architecture (via #137):** The recent closure of Issue #137 suggests the team is actively evaluating or finalizing how to handle local memory. The strong preference for disabling RAG implies a segment of the user base prioritizes data privacy and local execution over cloud-enhanced retrieval.

### 7. User Feedback Summary
User feedback today highlights a split between technical configuration and usability.
*   **Power Users:** Are looking for granular control over backend components (specifically RAG and Memory), preferring "local-only" modes to reduce latency and increase privacy.
*   **End Users:** Are struggling with the integration of third-party tools like WhatsApp, signaling that documentation or the connection UI needs simplification.

### 8. Backlog Watch
*   **Investigation Needed:** **Issue [#460][3]** regarding WhatsApp confusion is fresh and unaddressed. Maintainers should investigate if this is a documentation gap or a UI flaw to prevent new users from bouncing.

[1]: https://github.com/moltis-org/moltis/issues/137
[2]: https://github.com/moltis-org/moltis/pull/461
[3]: https://github.com/moltis-org/moltis/issues/460

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-23

## 1. Today's Overview
CoPaw is experiencing a period of high activity with **38 issues** and **23 PRs** updated in the last 24 hours, indicating rapid development and significant user engagement. The project is currently in a "feature-heavy" development phase with no new releases published today, resulting in a backlog of 14 open PRs. Core stability concerns regarding Windows shell execution, tool calling loops, and channel integration reliability are prominent topics in the community discussions. The flurry of first-time contributor PRs suggests healthy community involvement, though the lack of recent releases means users are waiting on fixes for critical bugs.

## 2. Latest Releases
**No new releases published today.**
*Note: The last referenced version in issues is `v0.1.0.post1` / `0.1.0b3`. Users are reporting issues on these versions, and fixes are pending in open PRs.*

## 3. Project Progress
**Key Features Advanced:**
*   **Multi-Agent Orchestration:** A major PR ([#2036](https://github.com/agentscope-ai/CoPaw/pull/2036)) was opened implementing a complete backend and frontend system for dynamic agent spawning and coordination.
*   **Universal `/stop` Command:** PR [#2067](https://github.com/agentscope-ai/CoPaw/pull/2067) proposes a global command to gracefully interrupt running agent tasks across all channels (Feishu, DingTalk, etc.), addressing user frustrations about uncontrollable agent loops.
*   **Cron & Routing Logic:** Several PRs ([#1851](https://github.com/agentscope-ai/CoPaw/pull/1851), [#1889](https://github.com/agentscope-ai/CoPaw/pull/1889)) were closed, adding retry logic for cron jobs and channel routing to dispatch messages to specific agents.

**Fixes Implemented (in merged/closed PRs):**
*   **API Reliability:** Added HTTP 529 to retryable status codes ([#1891](https://github.com/agentscope-ai/CoPaw/pull/1891)) and fixed Windows shell `check=True` bugs ([#1065](https://github.com/agentscope-ai/CoPaw/pull/1065)).

## 4. Community Hot Topics
**Most Discussed Issues:**
1.  **RuntimeError & Task Cancellation ([#1976](https://github.com/agentscope-ai/CoPaw/issues/1976))** – 15 comments.
    *   *Context:* Users experiencing agent crashes during execution.
    *   *Analysis:* Indicates instability in the agent execution loop, likely related to async handling.
2.  **Help Wanted / Contribution Tasks ([#430](https://github.com/agentscope-ai/CoPaw/issues/430))** – 9 comments.
    *   *Analysis:* High interest from community to contribute, needing clearer task delegation.
3.  **Multi-Agent Collaboration ([#2035](https://github.com/agentscope-ai/CoPaw/issues/2035))** – 7 comments.
    *   *Analysis:* Strong user demand for multi-agent workflows where different agents collaborate on a single task, a feature seemingly addressed by the new PR #2036.
4.  **Tool Chain Stalling ([#2040](https://github.com/agentscope-ai/CoPaw/issues/2040))** – 6 comments.
    *   *Analysis:* Users report tools (browser, file reading) hanging for 20+ minutes, pointing to severe execution pipeline blocking.

## 5. Bugs & Stability
**Critical Issues:**
*   **Shell Execution on Windows (Severe):**
    *   **Issue:** Commands hang indefinitely or timeout recovery is extremely slow ([#2060](https://github.com/agentscope-ai/CoPaw/issues/2060), [#2058](https://github.com/agentscope-ai/CoPaw/issues/2058)).
    *   **Fix Status:** PR [#2068](https://github.com/agentscope-ai/CoPaw/pull/2068) is open and claims a **12.8x speedup in timeout recovery** and fixes for pipe leaks.
*   **Tool Call Loops:**
    *   **Issue:** Models returning massive tool calls in a single round, causing "over-thinking" or crashes ([#2055](https://github.com/agentscope-ai/CoPaw/issues/2055), [#2059](https://github.com/agentscope-ai/CoPaw/issues/2059)).
    *   **Analysis:** ReAct loop stability needs hard limits or better validation for non-OpenAI models.
*   **Startup Failures:**
    *   **Issue:** Windows startup fails with Pydantic `MCPConfig` errors ([#2056](https://github.com/agentscope-ai/CoPaw/issues/2056)).
    *   **Status:** Unfixed, blocks usage on Windows 11/Python 3.12.
*   **Sync Bugs:** Skills in `active_skills` not syncing to `customized_skills` ([#2015](https://github.com/agentscope-ai/CoPaw/issues/2015)).

## 6. Feature Requests & Roadmap Signals
*   **Platform Support:**
    *   **WeChat ClawBot:** Request to support the new WeChat ClawBot protocol ([#2043](https://github.com/agentscope-ai/CoPaw/issues/2043)) – *High Demand (6 upvotes).*
*   **UI/UX Enhancements:**
    *   **Clean Output:** Request to hide "thought process" steps in enterprise WeChat bots to reduce clutter ([#2049](https://github.com/agentscope-ai/CoPaw/issues/2049)).
    *   **Mobile Console:** Optimize console layout for mobile browsers ([#2026](https://github.com/agentscope-ai/CoPaw/issues/2026)).
    *   **Terminal/File Tabs:** Request to add integrated terminal and file manager tabs in the frontend ([#2065](https://github.com/agentscope-ai/CoPaw/issues/2065)).
*   **Memory & Context:**
    *   **Context Recovery:** Feature to show preserved context after memory compaction ([#2048](https://github.com/agentscope-ai/CoPaw/issues/2048)).
    *   **Global Skills:** Support for a global/shared skills directory in multi-agent setups ([#2032](https://github.com/agentscope-ai/CoPaw/issues/2032)).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Installation:** Users complain about slow installation ("30 mins unzipping") and large package sizes (~500MB) ([#2031](https://github.com/agentscope-ai/CoPaw/issues/2031)).
    *   **Control:** Users feel helpless when agents enter "over-thinking" loops and cannot stop them from channels like Feishu or Windows clients ([#2059](https://github.com/agentscope-ai/CoPaw/issues/2059)).
    *   **Compatibility:** Issues with local LLMs (e.g., Ollama/GLM) and tool calling formatting are frequent.
*   **Positive Signals:**
    *   Users actively requesting "Help Wanted" tasks and engaging in RFC-style discussions (e.g., Security approvals).

## 8. Backlog Watch
*   **PR #1762 (File Guard):** Open for ~5 days. Adds critical security features for sensitive file path access. Needs review/merge to prevent unauthorized file access.
*   **PR #1984 (Tool Guard Replay):** Open for ~3 days. Implements complex logic for handling parallel tool call interceptions. High complexity requires maintainer focus.
*   **PR #2036 (Multi-Agent System):**刚刚 opened. A massive feature addition that will require significant architectural review before merging.
*   **Issue #1976 (Agent Error):** High visibility bug (15 comments) marked as "fixed in #1956", but #1956 appears unmerged or stalled, leading to user confusion.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest**
**Date:** 2026-03-23
**Analyst:** AI Agent & OSS Specialist

### 1. Today's Overview
ZeptoClaw is exhibiting moderate to high activity, with 9 distinct items updated in the last 24 hours. The project appears to be in a maintenance and stabilization phase, focusing on synchronizing upstream codebases and refining user interface experiences for Telegram integration. While feature development regarding "Firecracker VMs" is being discussed, the immediate workflow is dominated by bug fixes, CI/CD improvements (release timestamping), and repository hygiene (syncing forks). The closure of the fork synchronization issue (#393) and its associated PR (#394) suggests the team is successfully managing technical debt related to upstream dependencies.

### 2. Releases
*No new releases published in the last 24 hours.*

### 3. Project Progress
The primary advancement today was the synchronization of the fork with the upstream `v0.7.6` release.
*   **Upstream Sync Completed:** The project successfully merged changes from upstream `main` (v0.7.6), incorporating fork-specific customizations like Telegram markdown support and CI constraints.
    *   *Closed Issue:* #393 (Sync fork customizations)
    *   *Merged PR:* #394 (Sync upstream v0.7.6)
*   **CI/CD Refinement:** Workflow adjustments were implemented to generate timestamped prereleases for `main` branch builds, preventing asset overwrites and improving release traceability.
    *   *Closed Issue:* #395 (Generate timestamped releases)

### 4. Community Hot Topics
*   **The "Feature Creep" Debate (Issue #387)**
    *   *Activity:* 7 comments (Highest recent activity).
    *   *Topic:* A controversial proposal to integrate Firecracker VMs to run "Coding Agent Frameworks" (like Claude-code or Copilot-cli) as isolated apps.
    *   *Analysis:* This highlights a tension between expanding the agent's capabilities and maintaining a manageable security surface. The community is actively debating whether ZeptoClaw should be an "everything framework" or a focused tool.
    *   *Link:* [qhkm/zeptoclaw#387](https://github.com/qhkm/zeptoclaw/issues/387)

*   **Telegram UX Enhancements (PR #396)**
    *   *Status:* Open | *Activity:* New.
    *   *Topic:* Improvements to the Telegram interface, including markdown fixes and typing indicators.
    *   *Analysis:* High user interest in "daily driving" the agent via chat interfaces. Users want responsive, real-time feedback (knowing the bot is working) rather than silent delays.
    *   *Link:* [qhkm/zeptoclaw#396](https://github.com/qhkm/zeptoclaw/pull/396)

### 5. Bugs & Stability
*   **Telegram Markdown Corruption:** Reports indicate that the Telegram bot was "mangling markdown" in replies.
    *   *Severity:* Medium (User Experience).
    *   *Status:* Fix proposed in PR #396.
*   **Fork Desynchronization:** Issue #393 highlighted that the fork had diverged significantly from upstream, risking potential merge conflicts or lost updates.
    *   *Severity:* High (Maintenance).
    *   *Status:* *Resolved* via PR #394.

### 6. Feature Requests & Roadmap Signals
*   **GitHub Deep Scanning (Issue #285):** A request to add a "deep mode" for skill searching that checks for the presence of `SKILL.md` files. This suggests users want higher-quality, more standardized skill discovery rather than simple keyword matching.
    *   *Link:* [qhkm/zeptoclaw#285](https://github.com/qhkm/zeptoclaw/issues/285)
*   **Containerized/VM Isolation (Issue #387):** As mentioned in Hot Topics, there is a strong signal toward sandboxing agent environments using Firecracker VMs to handle security and "feature creep."
*   **Typing Indicators (PR #392):** A specific UX request to show "typing..." status in Telegram to improve perceived responsiveness during long LLM inference tasks.
    *   *Link:* [qhkm/zeptoclaw#392](https://github.com/qhkm/zeptoclaw/pull/392)

### 7. User Feedback Summary
*   **Configuration Friction:** A new user (Issue #397) expressed significant difficulty configuring the Qwen model with ZeptoClaw, stating they are having a "real hard time making it work."
    *   *Pain Point:* Documentation or setup ergonomics for specific LLM models (Qwen) may be lacking.
*   **Interface "Feel":** Feedback in PR #396 suggests users are "daily driving" the bot and find responsiveness critical. The lack of status updates (typing indicators) was a source of friction, making the bot feel broken during long tasks.

### 8. Backlog Watch
*   **Developer Experience (PR #287):** A long-open PR (created March 9) aimed at standardizing dev tools (linting, testing) to ensure consistent pre-PR states.
    *   *Why it matters:* Inconsistent environments can lead to "works on my machine" bugs. Merging this would improve long-term code quality.
    *   *Link:* [qhkm/zeptoclaw#287](https://github.com/qhkm/zeptoclaw/pull/287)
*   **Community Building (Issue #397):** Users are explicitly asking for a place to discuss configuration issues. This indicates a gap in community infrastructure (Discord, Discourse, etc.).
    *   *Link:* [qhkm/zeptoclaw#397](https://github.com/qhkm/zeptoclaw/issues/397)

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-03-23

## 1. Today's Overview
EasyClaw experienced a low-activity day with no code merged via Pull Requests and no new releases published. The primary activity focused on maintenance, specifically addressing user-reported bugs. The project closed one critical issue regarding a missing executable component required for the `computer-use` agent functionality. With zero open PRs, development appears to be in a stabilization phase rather than active feature expansion.

## 2. Releases
No new releases were published today.

## 3. Project Progress
**Closed Issue:**
*   **[#26: kaitray.exe component missing causing computer-use function failure](https://github.com/gaoyangz77/rivonclaw/issues/26)** (Status: Closed)
    *   **Impact:** Resolves a critical blocker preventing the `computer-use` agent from launching on Windows systems.
    *   **Context:** The user reported that `kaitray.exe` was entirely missing from the installation directory (`C:\Program Files (x86)\EasyClaw\`), causing the WebSocket service (127.0.0.1:8765) to fail. The closure of this issue suggests the maintainer has likely provided a fix or the missing file, though no merge PR was recorded, implying it may have been a direct hotfix or documentation update.

## 4. Community Hot Topics
*   **[Issue #26: Missing kaitray.exe](https://github.com/gaoyangz77/rivonclaw/issues/26)** (1 Comment)
    *   **Discussion:** Users are troubleshooting the `computer-use` agent specifically for automating WeChat interactions.
    *   **Underlying Need:** There is a strong user demand for robust GUI automation capabilities (specifically controlling WeChat), indicating that EasyClaw is being tested for real-world, complex desktop workflows. The community requires reliable installation processes for all dependencies, not just the main core.

## 5. Bugs & Stability
*   **Critical:** **Missing Dependency (kaitray.exe)**
    *   **Issue:** [#26](https://github.com/gaoyangz77/rivonclaw/issues/26)
    *   **Symptoms:** Application fails to start the WebSocket bridge; `kaitray.exe` process not found; "Cannot connect to 127.0.0.1:8765".
    *   **Affected Component:** `computer-use` agent (Windows).
    *   **Fix Status:** Issue closed (Fixed/Resolved).

## 6. Feature Requests & Roadmap Signals
*   **Stability Focus:** The closure of #26 without a code PR suggests a potential roadmap focus on fixing installation and packaging integrity. Future versions may include a more comprehensive installer to ensure components like `kaitray.exe` are correctly registered.

## 7. User Feedback Summary
*   **Pain Points:** Users are facing difficulties with the "out-of-the-box" experience on Windows. Specifically, the `computer-use` feature—a key differentiator for the agent—is failing due to missing backend executables.
*   **Use Cases:** Users are actively attempting to deploy EasyClaw to automate social media management (specifically WeChat), highlighting a need for stability in long-running desktop automation tasks.

## 8. Backlog Watch
No stale or long-unanswered issues were detected in the last 24 hours. The active issue was closed promptly.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*