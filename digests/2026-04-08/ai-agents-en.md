# OpenClaw Ecosystem Digest 2026-04-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-08 00:14 UTC

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

# OpenClaw Project Digest: 2026-04-08

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high-velocity development cycle, with **500 issues** and **500 pull requests** updated in the last 24 hours. This indicates a massive "spring cleaning" effort or a major release stabilization period. The project remains in a highly active state, with the community engaging heavily on both feature requests and critical bug reports. However, the latest release wave (2026.4.5) appears to have introduced significant regressions, particularly around Windows support and module resolution, causing a spike in crash reports. The core focus is currently split between stabilizing the v2026.4.x branch, advancing plugin architecture, and refining multi-agent routing logic.

## 2. Releases
**No new releases** published today. The project is currently stabilizing on the `2026.4.5` release, which was recently pushed but has subsequently caused multiple regression bugs.

## 3. Project Progress
*   **Agent Behavior & Stability:**
    *   **Loop Detection:** Merged logic to enable loop detection by default, specifically targeting "generic repeat" scenarios where agents get stuck retrying identical tool calls (e.g., 65 times) indefinitely ([PR #62775](https://github.com/openclaw/openclaw/pull/62775)).
    *   **Auth Profiles:** Merged a fix to prevent new sessions from inheriting unwanted auto-selected auth profile overrides, ensuring users get the best available profile by default ([PR #62710](https://github.com/openclaw/openclaw/pull/62710)).
    *   **Subagent Routing:** Merged a complex fix centralizing "announce target resolution" for parent agents, fallbacks, and cron jobs, fixing routing issues where requester sessions were not correctly identified ([PR #61620](https://github.com/openclaw/openclaw/pull/61620)).
*   **Platform & Ecosystem:**
    *   **Windows App:** Significant progress on the native WinUI 3 companion app for Windows, bringing it to feature parity with the macOS ecosystem tray app ([PR #54588](https://github.com/openclaw/openclaw/pull/54588)).
    *   **Plugin SDK:** Added `openclaw/plugin-sdk/discord` as a public export path to help plugins build interactive Discord UIs ([PR #61442](https://github.com/openclaw/openclaw/pull/61442)).
    *   **Module Resolution:** Fixed a critical packaging issue where `@buape/carbon` and `@larksuiteoapi/node-sdk` were not marked as optional dependencies, causing install failures ([PR #62747](https://github.com/openclaw/openclaw/pull/62747)).

## 4. Community Hot Topics
*   **Cross-Platform Support (Linux/Windows):**
    *   **Issue #75:** [Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) - *68 likes.* The most requested enhancement remains the demand for native desktop apps for Linux and Windows to match the macOS functionality. The recent WinUI 3 PR directly addresses this.
*   **Trust & Identity:**
    *   **Issue #49971:** [RFC: Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971) - *High engagement.* A proposal to integrate W3C DID and Verifiable Credentials (VCs) into OpenClaw, signaling a push towards enterprise-grade agent security and identity verification.
*   **Real-time Voice:**
    *   **Issue #7200:** [Real-time Voice Conversation Support](https://github.com/openclaw/openclaw/issues/7200) - *16 likes.* Users are demanding bidirectional streaming audio (Twilio/WebRTC) to enable phone-like interactions, moving beyond pre-recorded audio files.
*   **Plugin System Instability:**
    *   **Issue #52885:** [WeChat Plugin Incompatibility](https://github.com/openclaw/openclaw/issues/52885) - *45 comments.* Highlighting a critical regression where the official Tencent WeChat plugin breaks due to ESM import changes in recent OpenClaw versions.

## 5. Bugs & Stability
**Critical Regressions (Windows & Installation):**
*   **Windows ESM Crash:** Multiple reports ([#61899](https://github.com/openclaw/openclaw/issues/61899), [#62374](https://github.com/openclaw/openclaw/issues/62374), [#61795](https://github.com/openclaw/openclaw/issues/61795)) of `ERR_UNSUPPORTED_ESM_URL_SCHEME` on Windows. The plugin loader passes raw drive-letter paths (e.g., `c:`) to `import()`, causing immediate crashes on install/load. Hotfix PRs ([#61795](https://github.com/openclaw/openclaw/pull/61795), [#61853](https://github.com/openclaw/openclaw/pull/61853)) are in progress.
*   **Install Failures:** Update to 2026.4.5 fails with "Cannot find module '@buape/carbon'" ([#62272](https://github.com/openclaw/openclaw/issues/62272), [#62243](https://github.com/openclaw/openclaw/issues/62243)). **Fix Merged** in [PR #62747](https://github.com/openclaw/openclaw/pull/62747).

**High-Severity Functional Bugs:**
*   **Tool Execution Failure:** Regression in `2026.3.23-2` where GPT-5.3-Codex stops executing tools (exec, MCP, web search) entirely ([#53959](https://github.com/openclaw/openclaw/issues/53959)).
*   **Coding Agent Regression:** The "Coding Agent" produces no code/output after updating to 2026.4.5, only vague status updates ([#62505](https://github.com/openclaw/openclaw/issues/62505)).
*   **Context Usage Display:** Context usage stuck at 0% in status output, confusing users about token limits ([#44184](https://github.com/openclaw/openclaw/issues/44184)).
*   **Agent Timeouts:** `agents.defaults.timeoutSeconds` is not respected for local OpenAI-compatible providers (Ollama) or Cron jobs, causing premature failures ([#59678](https://github.com/openclaw/openclaw/issues/59678), [#60636](https://github.com/openclaw/openclaw/issues/60636)).

## 6. Feature Requests & Roadmap Signals
*   **Per-Agent TTS:** Users want distinct voices per agent in multi-agent setups. This appears to be **imminent**, as PR [ #62573](https://github.com/openclaw/openclaw/pull/62573) "Support per-agent TTS voice overrides" was merged today.
*   **Thinking Support for Ollama:** Adding "thinking/reasoning" token support for the Ollama API provider is in progress ([PR #62712](https://github.com/openclaw/openclaw/pull/62712)), addressing the gap between OpenClaw's `/think` command and local models.
*   **Directory Enumeration:** A PR to add a `list` tool for filesystem operations ([PR #62773](https://github.com/openclaw/openclaw/pull/62773)) is open, addressing the lack of structured directory navigation without `exec`.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated with the recent stability of the `2026.4.x` branch. Windows users are particularly vocal about installation and runtime crashes (ESM URL schemes). Plugin developers are struggling with breaking changes in the Plugin SDK (missing exports, auth handling).
*   **Dissatisfaction:** There is notable dissatisfaction regarding the "Coding Agent" losing functionality in the latest updates and the inability of the system to respect configured timeouts.
*   **Positive Signals:** The community is highly active in proposing solutions (e.g., native Windows app, trust verification RFCs), indicating strong engagement despite the stability issues.

## 8. Backlog Watch
*   **Issue #17101:** [Telegram Voice Messages Not Transcribed](https://github.com/openclaw/openclaw/issues/17101) - Open since Feb 2026. Users expect voice-to-text for Telegram messages, but the bot receives raw audio files.
*   **Issue #32088:** [Slack Crash on Startup](https://github.com/openclaw/openclaw/issues/32088) - Open since Mar 2026. All Slack channels crash due to invalid event type usage (`message.channels` vs `message`).
*   **Issue #59598:** [Embedded Run Failover](https://github.com/openclaw/openclaw/issues/59598) - Open since Apr 2026. "embedded run failover decision" errors causing gateway issues.
*   **Issue #61724:** [Subagent Spawn Failure](https://github.com/openclaw/openclaw/issues/61724) - `sessions_spawn(runtime="subagent")` fails with "streamTo is only supported for runtime=acp", blocking subagent usage.

---

## Cross-Ecosystem Comparison

# Open-Source AI Agent Ecosystem Analysis Report
**Date:** 2026-04-08
**Analyst:** Senior AI Agent Ecosystem Observer

---

## 1. Ecosystem Overview
The personal AI agent and assistant open-source ecosystem is currently undergoing a phase of **rapid maturation and intense architectural competition**, characterized by high-velocity development cycles and frequent instability. As of April 2026, the landscape has shifted from experimental chatbots to complex multi-agent systems (MAS), with a strong focus on platform integration (Discord, Slack, Telegram) and enterprise-grade features like observability (LangSmith) and security (DID/VC). However, this rapid innovation has introduced significant technical debt; most active projects are currently battling critical regressions related to **Windows compatibility**, **Docker containerization**, and **memory management**. The community is clearly demanding production-ready reliability over net-new features, though "Agentic" capabilities like browser automation and event-driven webhooks remain top roadmap priorities.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | Stabilizing (2026.4.x) | ⚠️ High Activity / High Instability |
| **NanoBot** | 33 | 56 | Regression (v0.1.5) | ⚠️ High Velocity / High Friction |
| **Zeroclaw** | 18 | 50 | Active Dev | ⚡ Fast Iteration |
| **PicoClaw** | (Not Specified) | 60 | Active Dev | 🟢 High Responsiveness |
| **IronClaw** | 13 | 50 | Active Dev | 🟢 High Refinement |
| **LobsterAI** | 18 | 50 | Active Dev | 🟢 Rapid UX Expansion |
| **CoPaw** | 50 | 44 | Stabilizing (v1.0.x) | ⚠️ Migration Issues |
| **ZeptoClaw** | (Not Specified) | 23 | Patch (v0.9.2) | 🟢 Stable / Optimizing |
| **NanoClaw** | 4 | 15 | Active Dev | 🟢 Niche Expansion |
| **Moltis** | (Not Specified) | 5 | Patch (20260407) | 🔴 Critical Regression |
| **NullClaw** | (Not Specified) | 3 | Active Dev | 🟢 Stable |
| **EasyClaw** | 0 | 1 | Patch (v1.7.8) | 🔵 Low Maintenance |
| **TinyClaw** | 0 | 0 | Inactive | ⚫ Dormant |

*\*Health Score based on velocity, regression criticality, and community sentiment analysis.*

## 3. OpenClaw's Position
**Advantages vs. Peers:**
*   **Scale:** OpenClaw dominates in sheer community volume, with activity metrics (500 Issues/PRs) dwarfing peers like NanoBot (56 PRs) or IronClaw (50 PRs). This indicates the largest contributor and user base.
*   **Architecture:** It is leading the push for **Agent Identity & Trust** (RFC #49971) via W3C DID and Verifiable Credentials, a feature currently absent in most other general-purpose bots.
*   **Ecosystem Maturity:** It possesses the most advanced native desktop integration efforts (WinUI 3) compared to NanoBot's struggling Electron wrappers or CoPaw's Docker issues.

**Technical Approach & Community:**
*   **Complexity:** OpenClaw's architecture is arguably the most complex, involving sophisticated sub-agent routing and plugin SDKs, whereas competitors like PicoClaw and NanoBot are still resolving fundamental configuration inheritance issues.
*   **Community Size:** With 68+ likes on Linux/Windows app requests, OpenClaw's community is highly vocal and enterprise-focused, contrasting with NanoBot's developer-heavy community or LobsterAI's productivity-focused users.

## 4. Shared Technical Focus Areas
Requirements emerging across multiple projects signal industry-wide trends:

*   **"Agentic" Tooling (Browser Automation):**
    *   **Projects:** OpenClaw, PicoClaw, ZeptoClaw.
    *   **Need:** Moving beyond text/chat to autonomous web interaction.
    *   *Specifics:* PicoClaw implementing Chrome DevTools Protocol (CDP); ZeptoClaw integrating `agent-browser` with SSRF protection.

*   **Event-Driven Architecture (Webhooks):**
    *   **Projects:** Moltis, NanoBot.
    *   **Need:** Agents reacting to external events (GitHub PRs, Stripe payments) rather than just user prompts.
    *   *Specifics:* Moltis merging a comprehensive `moltis-webhooks` crate.

*   **Unified/Multi-Platform Sessions:**
    *   **Projects:** NanoBot, LobsterAI, CoPaw.
    *   **Need:** Maintaining a single conversation context across Discord, Telegram, and Slack seamlessly.
    *   *Specifics:* NanoBot users demanding "Unified Sessions"; LobsterAI working on session tagging/bookmarking.

*   **Advanced Memory & Semantics:**
    *   **Projects:** NanoClaw, LobsterAI.
    *   **Need:** Long-term memory retention and semantic search over history.
    *   *Specifics:* NanoClaw working on QMD semantic search; LobsterAI implementing conversation tagging.

*   **Windows Platform Parity:**
    *   **Projects:** OpenClaw, NanoBot, Zeroclaw, NullClaw.
    *   **Need:** First-class support for Windows executables and services (currently a major pain point across the board).

## 5. Differentiation Analysis

| Project | Key Focus | Target User | Technical Architecture |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | Enterprise Agentic Workflow | Power Users / DevOps | Plugin-heavy, Multi-agent routing, DID identity. |
| **NanoBot** | Channel Integration / MCP | Community Managers | Gateway/Agent split, High modularity. |
| **Zeroclaw** | Security / Local-First | Privacy Conscious | Rust-based, "Secure by default", Local LLM focus. |
| **PicoClaw** | Compatibility / Rapid Dev | Tinkerers / Hobbyists | High config flexibility, Streaming focus. |
| **IronClaw** | Multi-tenant SaaS | Teams / Enterprise | RBAC, Ownership models, WASM tools. |
| **LobsterAI** | UI/UX Productivity | Knowledge Workers | Desktop-first, Rich UI, Bookmarking/Tagging. |
| **CoPaw** | Coding Agent | Developers | Plan mode, Local execution, Code-heavy. |
| **ZeptoClaw** | Efficiency / Embedded | Sysadmins / Edge | Binary diet, Optimized resource usage. |
| **Moltis** | Event-Driven Ops | DevOps / Automation | Webhook-native, High-velocity patching. |
| **EasyClaw** | Accessibility | General Consumer | Localized UI, Simplified panel. |

## 6. Community Momentum & Maturity

*   **Tier 1: Rapidly Iterating (The "Bleeding Edge")**
    *   **OpenClaw, Zeroclaw, PicoClaw.** These projects are pushing code at breakneck speeds (50+ PRs/day). They are defining the future of the ecosystem but suffer from "release instability" (e.g., OpenClaw's Windows ESM crashes, PicoClaw's config fragility).

*   **Tier 2: Maturation & Refinement (The "Standard")**
    *   **IronClaw, LobsterAI, ZeptoClaw.** These projects are shifting focus from net-new features to polish, UX (LobsterAI tags), and optimization (ZeptoClaw binary diet). They are generally more stable but complex to configure.

*   **Tier 3: Recovery & Stabilization**
    *   **NanoBot, CoPaw, Moltis.** Currently facing critical regressions (NanoBot v0.1.5 failures, Moltis empty system prompts, CoPaw Docker data loss). Momentum is high, but technical debt is catching up.

*   **Tier 4: Stabilized / Niche**
    *   **NullClaw, EasyClaw.** Low velocity, focused on specific use cases (WeChat for NullClaw, Localization for EasyClaw).

## 7. Trend Signals
*   **The "MacGyver" Problem:** Users are increasingly frustrated with "toy" security (Zeroclaw Issue #1478) that blocks useful work, or tools that "narrate" actions instead of taking them (NanoBot PR #2912 "Act, don't narrate"). The trend is toward **useful autonomy** over safe passivity.
*   **Context Window is the New RAM:** Memory management is the primary technical bottleneck. Projects are racing to implement "context compaction" (ZeptoClaw), "session rotation" (Moltis), and "semantic search" (NanoClaw) to handle long-running agent tasks.
*   **Standardization of Multi-Agent:** The community is moving past single-agent chatbots. OpenClaw, IronClaw, and Zeroclaw are all building distinct "Multi-Agent" or "Sub-agent" routing systems, suggesting this will be a standard feature requirement for 2026.
*   **Voice & Real-time:** While text is mature, there is a resurgence in requests for **Real-time Voice** (OpenClaw Issue #7200) and **Phone-like interactions**, indicating the next frontier is low-latency audio streaming.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-08

## 1. Today's Overview
NanoBot is experiencing a period of **high-intensity development and significant instability** following the recent release of version `v0.1.5`. The project shows immense activity with 56 Pull Requests and 33 Issues updated in the last 24 hours. However, the community is currently struggling with a wave of regressions, integration bugs, and architectural inconsistencies introduced in the latest update. While major new features like MCP integration, multimodal support, and high-level plugin abstractions are being pushed forward, immediate stability concerns regarding configuration, platform compatibility (Windows/Docker), and cron mechanisms are dominating user discourse.

## 2. Releases
**No new releases** published in the last 24 hours. The current version remains `v0.1.5` (released approx. 2026-04-04), which appears to be the source of several recent regressions reported by users.

## 3. Project Progress
**Merged & Closed PRs (Last 24h):**
The core team and contributors are rapidly iterating on fixes for critical bugs while advancing architectural capabilities:

*   **Stability & Compatibility Fixes:**
    *   **Windows Support:** PR #2893 ([fix(exec): add Windows support](https://github.com/HKUDS/nanobot/pull/2893)) was merged to address the critical `exec` tool failure on Windows caused by hardcoded `bash` calls.
    *   **CLI Crashes:** PR #2869 ([fix(cli): sanitize surrogate characters](https://github.com/HKUDS/nanobot/pull/2869)) was merged to resolve `UnicodeEncodeError` crashes in the terminal.
    *   **Provider Logic:** PR #2903 ([fix(provider): fallback to reasoning field](https://github.com/HKUDS/nanobot/pull/2903)) fixed response parsing for StepFun models.
    *   **Telegram:** PR #2910 ([feat(telegram): add location/geo support](https://github.com/HKUDS/nanobot/pull/2910)) closed, adding missing capability to handle location pins.

*   **Feature Expansion:**
    *   **Agent Behavior:** PR #2912 ([feat(agent): prompt behavior directives](https://github.com/HKUDS/nanobot/pull/2912)) was merged to refine how the agent thinks and uses tools ("Act, don't narrate").
    *   **MCP Integration:** PR #2907 ([feat(mcp): expose MCP resources/prompts](https://github.com/HKUDS/nanobot/pull/2907)) merged, allowing the agent to read Model Context Protocol resources directly.
    *   **Localization:** Spanish documentation was added in PR #2742.

## 4. Community Hot Topics
Highly active discussions reflecting user pain points and desires:

*   **Architecture & Plugin Systems:**
    *   **Issue #2894 ([Official high-level abstractions](https://github.com/HKUDS/nanobot/issues/2894))**: A major proposal requesting standard APIs for providers, channels, and memory to ensure downstream compatibility.
    *   **PR #2896 ([Public provider plugin registry](https://github.com/HKUDS/nanobot/pull/2896))**: Implementation of the abstraction proposal, signaling a shift toward a more modular NanoBot.

*   **v0.1.5 Regressions:**
    *   **Issue #2880 ([无论发什么消息都回复报错](https://github.com/HKUDS/nanobot/issues/2880))**: 17 comments. Users report total failure to get responses (Server 500 errors) after upgrades.
    *   **Issue #2875 ([ModuleNotFoundError: nanobot.config.paths](https://github.com/HKUDS/nanobot/issues/2875))**: Users experiencing complete startup failures post-upgrade.

*   **Feature Demands:**
    *   **Issue #2798 ([Feature Request: Unified Session](https://github.com/HKUDS/nanobot/issues/2798))**: Highly requested ability to maintain a single conversation session across different apps (e.g., switch from Telegram to Discord seamlessly).

## 5. Bugs & Stability
**Critical Alerts (High Severity):**

1.  **Total Service Failure (Gateway/Agent):**
    *   **Issue #2880**: Users receiving generic 500 errors for every message.
    *   **Issue #2917**: "Python not found" errors executing skills despite Python being installed, breaking automation capabilities.
2.  **Configuration & Environment Regressions:**
    *   **Issue #2849 ([DeepSeek API Key Env Var](https://github.com/HKUDS/nanobot/issues/2849))**: `${DEEPSEEK_API_KEY}` syntax is broken; users must hardcode keys.
    *   **Issue #2876 ([Lark/Feishu Crash](https://github.com/HKUDS/nanobot/issues/2876))**: `No module named 'lark_oapi.api.bot'` prevents the Feishu channel from starting.
3.  **Platform Instability:**
    *   **Issue #2868 ([Exec tool on Windows](https://github.com/HKUDS/nanobot/issues/2868))**: Recently fixed in PR #2893, but highlights the fragility of cross-platform support.
    *   **Issue #2878 ([Docker Entrypoint](https://github.com/HKUDS/nanobot/issues/2878))**: `exec /usr/local/bin/entrypoint.sh: no such file` indicates a broken Docker image for the latest version.

**Moderate Severity:**
*   **Issue #2892 & #2905 (Cron/Scheduler Issues):** Scheduled tasks created in `agent` are not executing unless `gateway` is restarted, or are failing completely. This breaks the "background agent" use case.
*   **Issue #2795 (Leaking Thoughts):** Bot exposes internal monologue ("The user is asking the weather...") in the final response to the user.

## 6. Feature Requests & Roadmap Signals
Based on open PRs and active discussions, these features are likely on the horizon:

*   **Unified Sessions:** PR #2900 ([unified session across channels](https://github.com/HKUDS/nanobot/pull/2900)) is open and implements the top-requested feature to merge conversations across platforms.
*   **Generic Multimodal Support:** PR #2908 ([generalize multimodal support](https://github.com/HKUDS/nanobot/pull/2908)) suggests the move from "Image-only" to handling Audio and Video inputs is in progress.
*   **WebSocket Channel:** PR #2911 ([add ws channel](https://github.com/HKUDS/nanobot/pull/2911)) indicates a new debugging interface or web integration method is being built.
*   **Token Usage Auditing:** PR #2838 ([log token usage to JSONL](https://github.com/HKUDS/nanobot/pull/2838)) suggests upcoming tools for cost monitoring.

## 7. User Feedback Summary
*   **Dissatisfaction:** There is distinct frustration regarding the **v0.1.5 upgrade experience**. Users are reporting broken configs, missing modules, and required reinstalls that don't fix the issue. The "leaking internal thoughts" bug (#2795) is also embarrassing for users deploying the bot publicly.
*   **Confusion:** The split responsibilities between `gateway` and `agent`—particularly regarding cron jobs—are confusing users. They expect the bot to be a single entity, not two services that need state syncing.
*   **Praise:** Despite the bugs, users continue to submit high-value feature requests and complex PRs (e.g., iMessage integration), indicating strong belief in the project's potential.

## 8. Backlog Watch
*   **Issue #235 ([I've completed processing but have no response](https://github.com/HKUDS/nanobot/issues/235))**: A long-standing issue (opened Feb) where the agent enters a state of processing but returning empty strings. It resurfaced today with new comments.
*   **Issue #2638 ([Session history grows unbounded](https://github.com/HKUDS/nanobot/issues/2638))**: A critical architectural flaw where the memory consolidation system fails, leading to unbounded token growth and eventual unresponsiveness. This needs a design fix, not just a patch.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-04-08

## 1. Today's Overview
Zeroclaw is experiencing a **very high-velocity development cycle**, with 50 Pull Requests and 18 Issues updated in the last 24 hours. The project is currently in a "polish and expansion" phase, focusing heavily on multi-agent architecture, provider compatibility (DeepSeek, Ollama, Bedrock), and resolving long-standing Windows and OAuth issues. While feature velocity is high, there are indications of **technical debt accumulation** (compile times, config complexity) and **stability concerns** (OOM errors, security strictness) that the community is vocal about.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
**Key Features Advancing:**
*   **Multi-Agent System:** PR [#5423](https://github.com/zeroclaw-labs/zeroclaw/pull/5423) introduces a real multi-agent system with workspace definitions, hot-reloading, and sub-agent model routing.
*   **Security & Policy:** PR [#5468](https://github.com/zeroclaw-labs/zeroclaw/pull/5468) fixes a critical false positive in command security where `git -C` was incorrectly blocked due to a collision with `git -c`.
*   **Slack Integration:** PRs [#5461](https://github.com/zeroclaw-labs/zeroclaw/pull/5461) and [#5424](https://github.com/zeroclaw-labs/zeroclaw/pull/5424) are adding support for broadcast mentions (`@here`/`@channel`) and fixing mention parsing.

**Notable Fixes:**
*   **Windows Support:** PR [#5296](https://github.com/zeroclaw-labs/zeroclaw/pull/5296) (Closed) addresses the `ACCESS_DENIED` error during directory fsync on Windows.
*   **Config Hygiene:** PR [#5368](https://github.com/zeroclaw-labs/zeroclaw/pull/5368) fixes false warnings regarding valid config keys like `api_key`.

## 4. Community Hot Topics
*   **Security vs. Usability Debate:** Issue [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) (Closed) has ignited a discussion with 7 reactions. Users are frustrated that "maximum security" settings render the bot unusable (e.g., refusing to install ffmpeg), feeling it turns the agent into a passive chatbot.
*   **Project Bloat & Compile Times:** Issue [#5272](https://github.com/zeroclaw-labs/zeroclaw/issues/5272) and Issue [#5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447) highlight user demand for splitting the massive monolithic crate into smaller pieces to improve compile times and binary size.
*   **Google Workspace Broken:** Issue [#5444](https://github.com/zeroclaw-labs/zeroclaw/issues/5444) reports total failure of the Google Workspace tooling due to API sub-resource errors.

## 5. Bugs & Stability
**Critical / S1 (Workflow Blocked):**
*   **DeepSeek V3.2 Incompatibility:** Issue [#5452](https://github.com/zeroclaw-labs/zeroclaw/issues/5452) reports system prompt escaping errors and token estimation failures. Fix PR: [#5454](https://github.com/zeroclaw-labs/zeroclaw/pull/5454).
*   **Ollama Tool Calling:** Issue [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) identifies that `tool_count=0` is hardcoded, breaking all native tool calling for Ollama models.
*   **Llama.cpp Crashes:** Issue [#5224](https://github.com/zeroclaw-labs/zeroclaw/issues/5224) reports generation failures with Gemma4 models.

**S0 (Data Loss / Security Risk):**
*   **Context Spillage:** Issue [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) reveals that private chat history from Discord is leaking into scheduled task executions (memory filters are broken). Fix PR: [#5456](https://github.com/zeroclaw-labs/zeroclaw/pull/5456).
*   **OOM Errors:** Issue [#5425](https://github.com/zeroclaw-labs/zeroclaw/issues/5425) reports Out Of Memory crashes during Discord interactions.

## 6. Feature Requests & Roadmap Signals
*   **OpenAI-Compatible Endpoint:** Issue [#5427](https://github.com/zeroclaw-labs/zeroclaw/issues/5427) requests the ability to expose the Zeroclaw agent as a standard OpenAI endpoint to allow integration with universal clients.
*   **Prompt Caching:** Issue [#5440](https://github.com/zeroclaw-labs/zeroclaw/issues/5440) requests prompt caching support for Z.ai (GLM provider) to reduce costs.
*   **Headless Verification:** Issue [#5451](https://github.com/zeroclaw-labs/zeroclaw/issues/5451) asks for a CLI-based method to input 6-digit verification codes for headless environments.
*   **Codex Runner:** PR [#5416](https://github.com/zeroclaw-labs/zeroclaw/pull/5416) suggests adding a runner for Codex to match the existing `claude_code` functionality.

## 7. User Feedback Summary
*   **Dissatisfaction:** Users feel the "Secure by Default" philosophy is currently too restrictive, essentially bricking the agent's utility (Issue [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)).
*   **Pain Points:**
    *   **Complexity:** Configuration is becoming unwieldy, leading to requests for schema versioning (Issue [#5445](https://github.com/zeroclaw-labs/zeroclaw/issues/5445)) and structure changes.
    *   **Platform Support:** Windows remains a second-class citizen with fsync permission errors (Issue [#5465](https://github.com/zeroclaw-labs/zeroclaw/issues/5465)).
    *   **Broken Workflows:** Google Workspace, DeepSeek, and Ollama integrations all reported critical failures today.

## 8. Backlog Watch
*   **Context Window Management:** While PRs are updating configs for `context_window`, the underlying memory spillage issue (Issue [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)) suggests memory management logic needs a deeper audit beyond just configuration.
*   **Binary Size:** The issue of binary size and compile time (Issue [#5272](https://github.com/zeroclaw-labs/zeroclaw/issues/5272)) has an active research branch but no merged PR yet. This is a growing friction point for contributors.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for **PicoClaw** on **2026-04-08**.

## 1. Today's Overview
PicoClaw is experiencing **high development velocity** with significant focus on feature expansion and provider compatibility. The repository shows very high activity (60 PRs updated), with a substantial portion (40) being merged or closed, indicating a responsive maintainer team actively iterating on the codebase. While feature work—such as browser automation and streaming enhancements—is progressing rapidly, stability issues regarding provider configurations (specifically SiliconFlow, Gemini, and fallback mechanisms) and channel security (QQ, Feishu) remain prominent in the community discussion. The project appears to be in a "growth" phase, adding complex tools (CDP, Curl) while simultaneously ironing out architectural kinks in configuration and error handling.

## 2. Releases
**None released today.** The latest stable versions referenced in the issues are `0.2.4` and `0.2.5`.

## 3. Project Progress
Several key features and architectural improvements moved forward today based on merged/closed PRs:

*   **Browser Automation:** Implementation of a **BrowserTool** using Chrome DevTools Protocol (CDP) was advanced in [#2410](https://github.com/sipeed/picoclaw/pull/2410), addressing a long-standing roadmap item for advanced agent capabilities.
*   **Provider & Streaming Support:**
    *   Work began on streaming LLM outputs to compatible channels (Web UI, Pico) in [#2412](https://github.com/sipeed/picoclaw/pull/2412).
    *   A fix for split SSE (Server-Sent Events) chunk parsing was submitted in [#2411](https://github.com/sipeed/picoclaw/pull/2411) to prevent data corruption during streaming.
*   **HTTP & Tooling:**
    *   A dedicated `curl` tool with domain whitelisting was introduced in [#2416](https://github.com/sipeed/picoclaw/pull/2416) to allow agents to make HTTP requests securely.
    *   Support for custom headers in HTTP providers was merged in [#2402](https://github.com/sipeed/picoclaw/pull/2402), solving connectivity issues with custom endpoints.
*   **Configuration & Diagnostics:**
    *   Improvements to malformed config diagnostics were added in [#2415](https://github.com/sipeed/picoclaw/pull/2415).
    *   Gateway startup logging errors were fixed in [#2414](https://github.com/sipeed/picoclaw/pull/2414).

## 4. Community Hot Topics
*   **[#2213](https://github.com/sipeed/picoclaw/issues/2213) - WebUI Gateway Connection Failures**
    *   **Activity:** Closed | 9 Comments | 👍 2
    *   **Topic:** Users unable to connect the WebUI to the gateway process started via CLI.
    *   **Analysis:** Highlights friction in the local development setup process. Users struggle with the "Launcher" token mechanism and process spawning.
*   **[#2140](https://github.com/sipeed/picoclaw/issues/2140) - Model Fallback Configuration Inheritance**
    *   **Activity:** Closed | 1 Comment
    *   **Topic:** `model_fallbacks` incorrectly inheriting `api_base`/`api_key` from the primary model.
    *   **Analysis:** A critical architectural bug for users relying on cross-provider redundancy (e.g., falling back from OpenAI to DeepSeek). The fix in [#2143](https://github.com/sipeed/picoclaw/pull/2143) ensures distinct provider configs are respected.

## 5. Bugs & Stability
**Critical & High Severity:**
*   **[#2381](https://github.com/sipeed/picoclaw/issues/2381) - SECURITY: Channel allows EVERYONE (allow_from is empty)**
    *   **Domain:** Channel/Config
    *   **Severity:** **Critical**. Configuration parameters (`allow_from`) are being ignored, potentially exposing the agent to unauthorized public access.
    *   **Status:** Open.
*   **[#2280](https://github.com/sipeed/picoclaw/issues/2280) - Provider Crash & Missing Config**
    *   **Domain:** Provider/Channel
    *   **Severity:** High. SiliconFlow API causes service startup failure; QQ channel missing `AppSecret` configuration.
    *   **Status:** Open.
*   **[#2140](https://github.com/sipeed/picoclaw/issues/2140) - Cross-Provider Fallback Broken**
    *   **Severity:** High. Functionality completely broken for users with mixed provider stacks.
    *   **Status:** Fixed via PR [#2143](https://github.com/sipeed/picoclaw/pull/2143).
*   **[#2373](https://github.com/sipeed/picoclaw/issues/2373) - Gateway Command Handling**
    *   **Domain:** Build/Gateway
    *   **Issue:** Gateway does not support `stop` commands.
    *   **Status:** Open.

**Medium Severity:**
*   **[#2374](https://github.com/sipeed/picoclaw/issues/2374) - Gemini Models Failing:** Configuration mismatch or pathing issue preventing Gemini models from working despite valid cURL commands.
*   **[#2377](https://github.com/sipeed/picoclaw/issues/2377) - Terminal Control Characters:** The `exec` tool emits unsafe ANSI/bidi characters, posing a rendering/security risk.

## 6. Feature Requests & Roadmap Signals
*   **[#2408](https://github.com/sipeed/picoclaw/issues/2408) - "Cartridge-Belt" API Key Rotation**
    *   **Request:** Automatic rotation of API keys upon hitting rate limits/quotas.
    *   **Signal:** Strong demand for high-availability, production-grade reliability when consuming LLM APIs.
*   **[#2173](https://github.com/sipeed/picoclaw/issues/2173) - LangSmith Observability**
    *   **Request:** Integration of LangSmith for tracing agent loops.
    *   **Signal:** Users are moving from "toy" usage to serious debugging of complex agent chains.
*   **[#2410](https://github.com/sipeed/picoclaw/pull/2410) - Browser Automation (CDP)**
    *   **Status:** In PR.
    *   **Signal:** PicoClaw is evolving beyond text/chat into "Agentic" workflows that require full browser control.
*   **[#2229](https://github.com/sipeed/picoclaw/pull/2229) - Modern Structured CLI UI**
    *   **Status:** In PR.
    *   **Signal:** A push to improve developer experience (DX) and modernize the terminal interface.

## 7. User Feedback Summary
*   **Configuration Complexity:** Users are frustrated with fragile configurations. Issues range from malformed JSON diagnostics (Request [#2415](https://github.com/sipeed/picoclaw/pull/2415)) to obscure security warnings about empty `allow_from` ([#2381](https://github.com/sipeed/picoclaw/issues/2381)).
*   **Provider Interoperability:** There is significant friction with non-standard or custom providers (SiliconFlow, Gemini, MiMo). Users are requesting custom header support ([#2247](https://github.com/sipeed/picoclaw/issues/2247)) and better error messages when providers fail.
*   **Mobile Experience:** Request to disable 'Enter' to send messages on Android ([#2376](https://github.com/sipeed/picoclaw/issues/2376)) indicates active usage on mobile devices where UI/UX differs from desktop.
*   **Agent Loop Control:** Users are hitting limits (e.g., `max_tool_iterations`) and want smarter handling (suggestions to continue) rather than hard stops ([#2409](https://github.com/sipeed/picoclaw/issues/2409)).

## 8. Backlog Watch
*   **[#1936](https://github.com/sipeed/picoclaw/issues/1936) / [#2209](https://github.com/sipeed/picoclaw/pull/2209) - Telegram on Termux:** Long-standing issue with CA bundles on Android/Termux. A PR exists to add custom TLS trust settings.
*   **[#293](https://github.com/sipeed/picoclaw/issues/293) - Browser Automation:** While a PR exists ([#2410](https://github.com/sipeed/picoclaw/pull/2410)), this has been a roadmap item for a long time and is finally seeing implementation.
*   **[#2213](https://github.com/sipeed/picoclaw/issues/2213) - WebUI Connection:** Although marked closed, comments suggest users may still face friction with the "Launcher" token workflow.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-08

## 1. Today's Overview
NanoClaw is experiencing a surge of high-activity development focused on expanding communication channels and agent runtime capabilities. The project has processed **15 Pull Requests** and **4 Issues** in the last 24 hours, with a strong emphasis on architectural improvements like "Deep Mode" for long-running tasks and multi-runtime SDK support. While the community is actively prototyping advanced features—such as E2EE for Matrix and OpenCode/Codex integration—deployment stability remains a concern, evidenced by multiple fixes for media handling and path resolution in container environments.

## 2. Releases
No new releases were published today. The project is currently in a feature-heavy development cycle with significant updates pending merge.

## 3. Project Progress
**Closed/Merged Features & Fixes:**
*   **Conversational Resets:** [PR #1692](https://github.com/qwibitai/nanoclaw/pull/1692) (Closed) added a `/clear` command to reset sessions across all chats, improving user control over agent context.
*   **Matrix Protocol Notifications:** [PR #1689](https://github.com/qwibitai/nanoclaw/pull/1689) (Closed) implemented GitHub PR notifications to Discord threads with automatic agent session spawning for code review workflows.
*   **Parallel Topic Processing:** [PR #1691](https://github.com/qwibitai/nanoclaw/pull/1691) (Closed) introduced per-topic containers, allowing Telegram forum topics to run in parallel without blocking one another.

## 4. Community Hot Topics
*   **Runtime Abstraction:** [Issue #1690](https://github.com/qwibitai/nanoclaw/issues/1690) proposes a modular `AgentRuntime` interface to allow swapping between Claude, Codex, and local models seamlessly, mirroring the existing channel pattern.
*   **Deep Work Sessions:** [Issue #1686](https://github.com/qwibitai/nanoclaw/issues/1686) and [PR #1687](https://github.com/qwibitai/nanoclaw/pull/1687) address the limitation of NanoClaw's single-shot container model. The proposed `/deep` mode extends container lifecycles (up to 4 hours) to support complex, multi-step coding and debugging sessions.
*   **Semantic Search:** [PR #1597](https://github.com/qwibitai/nanoclaw/pull/1597) is working on a QMD skill to enable semantic searching of conversation history, a key requirement for long-term agent memory.

## 5. Bugs & Stability
*   **WhatsApp Media Access (Severity: High):** [Issue #1522](https://github.com/qwibitai/nanoclaw/issues/1522) highlights that agents currently cannot access photos or voice notes from WhatsApp because the system receives only a `media_id` without a utility to fetch the binary content.
*   **Trigger Failures with Attachments:** [PR #1685](https://github.com/qwibitai/nanoclaw/pull/1685) fixes a regression where forwarded media messages (e.g., `[Photo]`) caused bot commands/trigger patterns to fail silently due to regex anchor mismatches.
*   **Path Resolution Fragility:** [PR #1612](https://github.com/qwibitai/nanoclaw/pull/1612) addresses a critical stability issue where `process.cwd()` usage caused path resolution failures depending on the working directory during startup.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Model Backend:** There is clear signal toward adopting `OpenCode SDK` ([PR #1628](https://github.com/qwibitai/nanoclaw/pull/1628), [PR #963](https://github.com/qwibitai/nanoclaw/pull/963)) as an alternative to the default Anthropic runner, allowing users to switch agent engines via config.
*   **Dynamic Context Generation:** [Issue #1684](https://github.com/qwibitai/nanoclaw/issues/1684) suggests using lightweight LLM calls to auto-generate `CLAUDE.md` files when new forum topics are created, tailoring agent behavior to the specific context.
*   **Channel Expansion:** Strong movement toward adding support for the decentralized Matrix protocol ([PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624), [PR #791](https://github.com/qwibitai/nanoclaw/pull/791)), potentially landing in the next feature release.

## 7. User Feedback Summary
Users are expressing a need for the agent to handle **richer media types** and **longer contexts**. The "single-shot" nature of current containers is cited as a hurdle for "Deep coding sessions," while the inability to process WhatsApp voice notes limits utility in mobile-first groups. Additionally, there is a desire for smarter onboarding for new chat topics, specifically regarding automatic knowledge base generation.

## 8. Backlog Watch
*   **Multi-Runtime Support:** [Issue #1690](https://github.com/qwibitai/nanoclaw/issues/1690) (Open) - Needs architectural review to define the `AgentRuntime` interface.
*   **QMD Semantic Search:** [PR #1597](https://github.com/qwibitai/nanoclaw/pull/1597) (Open) - A highly requested feature for conversation mining that has been active since April 2.
*   **Matrix Integration:** [PR #791](https://github.com/qwibitai/nanoclaw/pull/791) (Open) - A massive addition for the protocol-agnostic vision of NanoClaw, open since March.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

### **NullClaw Project Digest: 2026-04-08**

#### **1. Today's Overview**
NullClaw exhibited moderate-to-high development activity on 2026-04-08, focusing on platform integrations and user experience refinements. While no new releases were published, the repository shows a healthy balance of maintenance (3 merged PRs) and new feature exploration (3 open PRs). Significant effort was directed towards formalizing support for the WeChat channel and resolving session handling issues in Discord. The project appears stable, though critical runtime errors regarding Docker environments in the open issues require immediate attention.

#### **2. Releases**
*No new releases published today.*

#### **3. Project Progress**
The following features and fixes were finalized via merged Pull Requests:
*   **Discord Session Management:** PR #719 successfully closed a bug where scheduled Discord DMs would fail due to invalid target identifiers. The fix introduces a `delivery_chat_id` to ensure the correct outbound target is preserved during delayed delivery.
*   **WeChat Integration Documentation:** Following the closing of enhancement request #714, PR #718 was merged to add comprehensive configuration guides for the built-in WeChat channel, covering webhook paths, multi-account selection, and AES callback requirements.
*   **Plugin Architecture Standards:** PR #736 was merged to document the recommended async login model for external channel plugins, ensuring the `start` process returns promptly without waiting for user interaction (e.g., QR scans).
*   **View Merged PR:** [#719](https://github.com/nullclaw/nullclaw/pull/719), [#718](https://github.com/nullclaw/nullclaw/pull/718), [#736](https://github.com/nullclaw/nullclaw/pull/736).

#### **4. Community Hot Topics**
*   **WeChat Ecosystem Support (Issue #714):**
    *   **Status:** Closed.
    *   **Analysis:** This enhancement request garnered significant attention (8 comments) advocating for official support of the WeChat plugin. The community highlighted the necessity of this feature for users in mainland China and Southeast Asia, noting that other forks had already implemented it. The rapid closure of this issue alongside the documentation PR suggests the maintainers have successfully prioritized this integration.
    *   **Link:** [#714](https://github.com/nullclaw/nullclaw/issues/714)

#### **5. Bugs & Stability**
*   **Critical Runtime Failure (Issue #784):**
    *   **Description:** A user reported a complete failure of shell command execution due to a Docker "invalid empty volume spec" error.
    *   **Severity:** High (Total functionality stoppage).
    *   **Status:** Open.
    *   **Analysis:** The error indicates a fundamental misconfiguration in the NullClaw runtime environment's Docker setup rather than the server itself. The user provided a diagnostic path involving `docker ps` and `docker logs`, but no fix PR is currently linked.
    *   **Link:** [#784](https://github.com/nullclaw/nullclaw/issues/784)

#### **6. Feature Requests & Roadmap Signals**
*   **Advanced Scheduling Engine (PR #783):**
    *   A new open PR proposes a "cron subagent" engine featuring a database-backed scheduler, support for skill/agent/shell job types, and JSON output capabilities. This signals a roadmap shift towards more complex, time-based automation tasks.
    *   **Link:** [#783](https://github.com/nullclaw/nullclaw/pull/783)
*   **Interactive Telegram Menus (PR #782):**
    *   Another open PR suggests adding interactive skill menus (`/skills`) to the Telegram channel, alongside hardening for OpenAI-codex timeout handling. This indicates ongoing UX improvements for Telegram users.
    *   **Link:** [#782](https://github.com/nullclaw/nullclaw/pull/782)
*   **Lark UX Improvements (PR #720):**
    *   Currently open, this PR aims to add "processing feedback" placeholders for the Lark channel to improve user perceived latency during long operations.
    *   **Link:** [#720](https://github.com/nullclaw/nullclaw/pull/720)

#### **7. User Feedback Summary**
*   **Positive:** Users are actively requesting broader platform support (WeChat) and are engaging with complex configurations (multi-account setups).
*   **Pain Points:**
    *   **Reliability:** The Discord delayed DM issue (now fixed) was a specific friction point affecting asynchronous communication reliability.
    *   **Setup Complexity:** The need for improved documentation (as seen in the merged docs PRs) suggests users struggle with configuring specific channels and understanding asynchronous plugin behaviors.
    *   **Environment Stability:** The report in Issue #784 highlights that Docker environment setup can be brittle, leading to total system failures if volumes are not correctly specified.

#### **8. Backlog Watch**
*   **Lark UX Latency (PR #720):**
    *   This PR has been open since March 26. While not a bug, the lack of feedback indicators on the Lark channel likely results in a poor user experience during LLM processing times. Maintainer review is recommended to determine if this approach aligns with the project's architectural standards.
    *   **Link:** [#720](https://github.com/nullclaw/nullclaw/pull/720)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-04-08

## 1. Today's Overview
IronClaw is experiencing a high-velocity development cycle with **50 Pull Requests** updated in the last 24 hours, signaling significant architectural refinement and feature expansion. While no new releases were published today, the codebase shows strong activity in multi-tenant performance optimization, ownership model security fixes, and user experience improvements for the Web UI. There are currently **13 active issues** being tracked, with a focus on resolving legacy migration errors and stability concerns in multi-tenant environments.

## 2. Releases
*No new releases published on 2026-04-08.*

## 3. Project Progress
The project merged a significant number of fixes today, primarily focused on **security**, **access control**, and **usability**:

*   **Security & Access Control:**
    *   **Fixed Mission ACL Regression** ([#2130](https://github.com/nearai/ironclaw/pull/2130)): A critical security flaw where `pause_mission` and `resume_mission` access controls were broken for shared missions has been corrected.
    *   **Unified Ownership Checks** ([#2126](https://github.com/nearai/ironclaw/pull/2126)): Resolved a visibility bug where non-owner users couldn't see missions in the gateway UI and standardized ownership checks via a new `Owned` trait.
    *   **Credential Safety** ([#2099](https://github.com/nearai/ironclaw/pull/2099)): Removed silent cross-tenant credential fallbacks in WASM tool execution, ensuring users are explicitly authorized before accessing tools.

*   **Web UI & UX Enhancements:**
    *   **Chat Approval Flow** ([#2124](https://github.com/nearai/ironclaw/pull/2124), [#2123](https://github.com/nearai/ironclaw/pull/2123)): Typing approval commands ("yes", "no") in the chat input now correctly resolves approval cards rather than sending standard messages.
    *   **SSE Event Ordering** ([#2079](https://github.com/nearai/ironclaw/issues/2079)): Closed a bug where Web UI messages appeared stuck; the "Done" event is now sent correctly after the response.
    *   **Channel Onboarding** ([#2103](https://github.com/nearai/ironclaw/pull/2103)): Improved the Telegram pairing flow and introduced a shared onboarding model.

*   **Engine Stability:**
    *   **Tool Visibility Filtering** ([#2125](https://github.com/nearai/ironclaw/pull/2125)): Implemented engine-version-aware tool visibility to prevent incompatible tools from appearing in specific engine versions.
    *   **CI Test Repairs** ([#2129](https://github.com/nearai/ironclaw/pull/2129), [#2091](https://github.com/nearai/ironclaw/pull/2091)): Fixed canonicalization of extension names and resolved flaky Telegram tests.

## 4. Community Hot Topics
*   **Performance Investigation (Multi-tenant):**
    *   **Issue:** [#2089](https://github.com/nearai/ironclaw/issues/2089) - Users reporting high latency (5-10s for "hello").
    *   **Analysis:** Highlights urgency for performance. A fix is in progress via **PR #2127** (addressing bridge/router blocking and workspace indexing), which aims to reduce E2E latency from ~20s to ~1.7s.

*   **Aliyun Integration:**
    *   **PR:** [#1446](https://github.com/nearai/ironclaw/pull/1446) - Adding support for Aliyun BaiLian Coding Plan.
    *   **Analysis:** Strong signal for expanding cloud provider support beyond the default ecosystem.

*   **Sandbox & Sessions:**
    *   **PR:** [#1938](https://github.com/nearai/ironclaw/pull/1938) - Persistent session containers.
    *   **Analysis:** High demand for maintaining state across tool executions rather than spinning up fresh containers every time.

## 5. Bugs & Stability
*   **Critical - Migration Failure:**
    *   **[#1328](https://github.com/nearai/ironclaw/issues/1328)**: V6__routines migration checksum mismatch. Upgrading to v0.19.0 fails on existing PostgreSQL databases.
    *   *Status:* Open, High Priority (👍 3).

*   **High - Configuration & Crash:**
    *   **[#1633](https://github.com/nearai/ironclaw/issues/1633)**: Feishu channel fails with "app_id not configured".
    *   **[#2087](https://github.com/nearai/ironclaw/issues/2087)**: IronClaw stops responding entirely after attempting to set up Notion.

*   **Medium - Functional Logic:**
    *   **[#1987](https://github.com/nearai/ironclaw/issues/1987)**: `create_job` tool accepts `claude_code` mode even when disabled, causing container failures.
    *   **[#2102](https://github.com/nearai/ironclaw/issues/2102)**: Flaky Telegram test leaking state across parallel runs (Fix in [#2091](https://github.com/nearai/ironclaw/pull/2091)).

*   **Low - Event Ordering:**
    *   **[#2079](https://github.com/nearai/ironclaw/issues/2079)**: SSE event ordering bug causing stuck messages (Closed).

## 6. Feature Requests & Roadmap Signals
*   **Hard Stop Control:**
    *   **[#2121](https://github.com/nearai/ironclaw/issues/2121)** / **PR #2122**: Users want a visible "Stop" button in the Web UI to interrupt runaway agent processing, rather than relying on slash commands.
*   **Local File Bridge:**
    *   **[#2117](https://github.com/nearai/ironclaw/issues/2117)**: Request for a local file/MCP bridge daemon to allow cloud-hosted IronClaw instances to access local Obsidian vaults or project directories.
*   **Image Model Config:**
    *   **[#2095](https://github.com/nearai/ironclaw/issues/2095)**: Request to support manual configuration of image generation models, moving away from hardcoded fallbacks.

## 7. User Feedback Summary
*   **Pain Points:** Performance in multi-tenant setups is the primary complaint ([#2089](https://github.com/nearai/ironclaw/issues/2089)). Users also report friction with "silent failures" or unresponsive agents during tool configuration (e.g., Notion setup in [#2087](https://github.com/nearai/ironclaw/issues/2087)).
*   **Satisfaction:** The closure of the Web UI message-sticking bug ([#2079](https://github.com/nearai/ironclaw/issues/2079)) and improved approval flow ([#2124](https://github.com/nearai/ironclaw/pull/2124)) address key usability friction points.

## 8. Backlog Watch
*   **Database Migration ([#1328](https://github.com/nearai/ironclaw/issues/1328))**: Open for 3 weeks, blocking upgrades for existing PostgreSQL users.
*   **Feishu Integration ([#1633](https://github.com/nearai/ironclaw/issues/1633))**: Configuration errors preventing enterprise adoption of the Feishu channel.
*   **Subscription vs. Token Billing ([#2110](https://github.com/nearai/ironclaw/issues/2110))**: User desire to choose between subscription and token billing models for Zai.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-04-08

## 1. Today's Overview
LobsterAI is experiencing a **surge in development activity** with 50 Pull Requests and 18 Issues updated in the last 24 hours. The project is currently in a high-velocity iteration phase, focusing heavily on **user experience (UX) refinement** for conversation management (bookmarks, tags, statistics) and **security hardening** (CORS fixes, credential logging). While no new releases were published today, the sheer volume of merged/closed PRs (12) indicates an active push towards a future stable version, likely addressing the accumulation of feature requests and UI debt.

## 2. Latest Releases
**No new releases published in the last 24 hours.**

## 3. Project Progress
Key advancements today include the merging of significant infrastructure and UX improvements:

*   **Infrastructure Refactoring:** PR #1523 (CLOSED) successfully consolidated provider metadata into a shared registry. This reduces the code overhead for adding new AI providers from 6 files to 3, significantly improving developer experience and maintainability.
*   **Security Hardening:**
    *   PR #1539 (CLOSED) patched a critical CORS vulnerability in the Bridge Server and added URL scheme whitelisting to prevent `file://` or `data://` exploitation.
    *   PR #1535 and #1534 (OPEN) introduced security layers to prevent IPC sensitive data leaks (tokens/config) and sanitized API logs to stop credential exposure in debug files.
*   **UI/UX Enhancements:**
    *   **Theming:** PR #1531 implemented a more compact, visual theme color selector in Settings.
    *   **Reliability:** PR #1544 fixed a bug where closing the Settings panel would silently kill GitHub Copilot OAuth authentication.
    *   **Agent Skills:** PR #1545 fixed a state synchronization issue where updating an Agent's skills wouldn't reflect in the current session until a manual switch.

## 4. Community Hot Topics
*   **[Feature] Conversation Management System (PR #725, #1542, #1538)**
    *   **Links:** [Global Bookmarks #725](https://github.com/netease-youdao/LobsterAI/pull/725), [Tagging System #1542](https://github.com/netease-youdao/LobsterAI/pull/1542), [Message Bookmarking #1538](https://github.com/netease-youdao/LobsterAI/pull/1538)
    *   **Analysis:** There is a massive community demand for better organization tools. Users are struggling to manage "long conversations" and "large amounts of sessions." The core need is a shift from linear chat history to a structured, searchable knowledge base. The active development of tagging (categorization) and bookmarking (highlighting) indicates the project is evolving from a simple chat interface to a productivity workspace.

## 5. Bugs & Stability
*   **CRITICAL: Gateway Restart Loop ([Issue #1551](https://github.com/netease-youdao/LobsterAI/issues/1551))**
    *   **Severity:** High.
    *   **Description:** Network environment changes cause the gateway to restart repeatedly. This affects user connectivity and workflow continuity.
    *   **Status:** Open.
*   **CRITICAL: Process Interruption & Unclear Status ([Issue #1495](https://github.com/netease-youdao/LobsterAI/issues/1495), [Issue #1509](https://github.com/netease-youdao/LobsterAI/issues/1509))**
    *   **Severity:** High.
    *   **Description:** Users report "unexplained process interruptions" and tasks appearing "completed but returning nothing." Issue #1509 highlights a lack of intermediate feedback during long-running tasks (e.g., `skills` generation), leading to user anxiety.
    *   **Fix in Progress:** PR #1548 adds a timer to the streaming activity bar to address transparency, but the root cause of the interruptions needs investigation.
*   **MEDIUM: Task Completion False Positives ([Issue #1496](https://github.com/netease-youdao/LobsterAI/issues/1496))**
    *   **Description:** Tasks display as "finished" but fail to return results.
*   **LOW: IM Bot Configuration UI ([Issue #1512](https://github.com/netease-youdao/LobsterAI/issues/1512))**
    *   **Description:** UI missing input fields for QQ Bot whitelist configuration, rendering the feature unusable via GUI.

## 6. Feature Requests & Roadmap Signals
Based on opened PRs and issues, the roadmap for the next version focuses on **Information Architecture** and **Observability**:

1.  **Conversation Tagging & Filtering:** Explicitly requested in Issue #1541 and implemented in PR #1542. This is likely a lock for the next release.
2.  **Usage Statistics Dashboard:** Requested in Issue #1532 and implemented in PR #1533. Users want to see local activity data (sessions created, message counts).
3.  **Batch Operations:** Issue #1528 requests the ability to batch *export* conversations (currently only delete is supported).
4.  **Visual Cues:** Issue #1525 requests color coding for sessions to visually distinguish types (Work vs. Personal).
5.  **Enhanced Scheduled Tasks:** PR #1530 adds support for assigning tasks to specific Agents in multi-agent setups.

## 7. User Feedback Summary
*   **Pain Point:** **Cognitive Overload.** Users with heavy usage patterns are struggling to find information in long chat histories (Requests for bookmarks #1537) and manage lists of hundreds of sessions (Requests for tags/sorting #1541).
*   **Pain Point:** **Lack of Feedback.** Users feel "left in the dark" during long operations (Issue #1509 - Skills generation blocking with no status).
*   **Pain Point:** **Inconsistent Experience.** Several issues point to features being partially implemented (e.g., Scheduled tasks failing silently if no IM channel is selected #1506, or Copilot tokens being lost #1516).

## 8. Backlog Watch
*   **Issue #1097 (Export Log Error):** A persistent "remote method invoke" error when exporting logs. While closed today, it highlights flakiness in IPC communication.
*   **CI/CD Infrastructure:** Issue #1518 notes that CI checks are failing due to permission/labeler errors, indicating the project's internal tooling needs maintenance to ensure code quality.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-04-08

**Maintainer:** AI Agent Analyst
**Data Period:** 2026-04-07 00:00 – 2026-04-08 00:00 (UTC)

---

### 1. Today's Overview
Moltis is in a **high-velocity development cycle**, releasing two patches (versions `20260406.05` and `20260407.01`) within 24 hours to address critical bugs. The project merged five pull requests, significantly improving provider compatibility, chat UI stability, and introducing webhook capabilities. However, a **critical regression** regarding empty system prompts in channel sessions (Telegram/Discord) has been flagged, which directly impacts the agent's autonomy. Activity is robust, with the team rapidly closing issues related to token caching and context window errors.

### 2. Releases
*   **Latest Release:** `20260407.01` & `20260406.05`
*   **Notes:**
    *   While specific changelogs were not provided in the metadata, the closed PRs indicate these releases likely contain fixes for **Context Window error detection** (PR #580) and **Token Caching** (PR #581).
    *   **Migration:** Users relying on `cached_tokens` usage stats for cost tracking should see corrected numbers in this version.

### 3. Project Progress
Significant strides were made in backend stability and extensibility:
*   **Webhook Integration:** PR #575 merged a comprehensive `moltis-webhooks` crate. It supports ingress sources (GitHub, GitLab, Stripe), includes auth verification (9 modes), rate limiting, and deduplication.
    *   *Link:* [PR #575](https://github.com/moltis-org/moltis/pull/575)
*   **Token Caching Fix:** PR #581 fixed a bug where cached tokens were zeroed out for OpenAI-compatible providers and custom configs. It also adds support for `cache_retention` configuration.
    *   *Link:* [PR #581](https://github.com/moltis-org/moltis/pull/581)
*   **Context Window Handling:** PR #580 improved error matching for providers (specifically Z.AI) to ensure auto-compact triggers activate correctly when limits are reached.
    *   *Link:* [PR #580](https://github.com/moltis-org/moltis/pull/580)
*   **Chat & GraphQL Logic:** PR #544 resolved session selection issues in GraphQL flows, and PR #555 added Streamable HTTP MCP server support.

### 4. Community Hot Topics
*   **[#578: CRITICAL - Empty System Prompts in Channels](https://github.com/moltis-org/moltis/issues/578)**
    *   **Status:** Open | **Comments:** 4
    *   **Analysis:** This is the most critical issue of the day. Users report that channel sessions (Telegram/Discord) are receiving "bare" system prompts, lacking identity, skills, or workspace files. This essentially breaks autonomous agent functionality in multi-user environments.
*   **[#575: Generic Webhook Ingress](https://github.com/moltis-org/moltis/pull/575)**
    *   **Status:** Merged
    *   **Analysis:** High interest in external triggers. This PR enables the AI agent to react to events from GitHub, GitLab, and Stripe, signaling a shift towards event-driven automation.

### 5. Bugs & Stability
**CRITICAL**
*   **[Issue #578] Channel Sessions Non-Functional:** Channel sessions are not injected with system instructions or workspace files.
    *   *Severity:* Blocker
    *   *Impact:* Agents cannot function autonomously in Discord/Telegram.
    *   *Fix PR:* None yet open.
    *   *Link:* [Issue #578](https://github.com/moltis-org/moltis/issues/578)

**MEDIUM**
*   **[Issue #582] MiniMax 2.7 Parameter Rejection:** The `spawn_agent` function rejects `null` for optional array parameters (`allow_tools`, `deny_tools`), causing crashes or failed spawns.
    *   *Status:* Open
    *   *Link:* [Issue #582](https://github.com/moltis-org/moltis/issues/582)

**LOW (FIXED)**
*   **[Issue #569] Matrix Channel Config:** Users were unable to add Matrix to channels via config. (Closed, presumably fixed in recent releases).
*   **[PR #580] Context Window Error:** Z.AI provider errors were not triggering auto-compact. (Fixed in `20260407.01`).

### 6. Feature Requests & Roadmap Signals
*   **Session Rotation:** [Issue #579](https://github.com/moltis-org/moltis/issues/579) requests automatic session rotation for Channel DMs to prevent token limit exhaustion. Given the recent fixes to context window handling (PR #580), this is a likely candidate for the next roadmap iteration.
*   **UI Controls:** [Issue #577](https://github.com/moltis-org/moltis/issues/577) requests a "Stop Connection Check" button, indicating that connection checks are blocking the UI for too long during startup or recovery.
*   **Sidebar UX:** [PR #583](https://github.com/moltis-org/moltis/pull/583) (Open) aims to keep new chats pinned to the top of the sidebar, reflecting user desire for better session management in the web UI.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Configuration Fragility:** Users struggled with adding specific channels (Matrix) and configuring provider parameters (MiniMax).
    *   **Visibility:** Users are frustrated by opaque connection states (requesting a "stop check" button).
*   **Satisfaction:**
    *   Users appear highly engaged with the *speed* of bug resolution, particularly regarding token caching and provider errors.
    *   The rapid addition of Webhook support suggests a strong demand for integrating Moltis into wider CI/CD and billing workflows.

### 8. Backlog Watch
*   **[Issue #578 - System Prompts](https://github.com/moltis-org/moltis/issues/578):** **Highest Priority.** This regression breaks the core promise of "autonomous agents" in social channels. Needs immediate dev attention.
*   **[PR #583 - Sidebar UX](https://github.com/moltis-org/moltis/pull/583):** Currently open. Improving chat organization is a quality-of-life improvement that should not be left to linger, as it affects daily usage.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-04-08

## 1. Today's Overview
CoPaw is currently in a **high-velocity development phase** following a major version update (0.x to 1.0.x), evidenced by a massive surge in activity. The project demonstrates strong community engagement with **94 combined events** (50 issues, 44 PRs) in the last 24 hours. While the issue resolution rate is impressive (76% of updated issues are closed), the volume of user-reported regressions—specifically regarding data migration, Docker volume persistence, and UI stability—indicates significant friction with the new release. The influx of first-time contributors via "Help Wanted" tasks suggests a healthy, expanding open-source ecosystem, though the stability of the current production branch requires immediate attention.

## 2. Latest Releases
*No new releases published today.* The project is currently on version **1.0.1**, and the community is actively reporting post-migration issues from previous versions (0.07, 0.1.0).

## 3. Project Progress
*   **Merged PRs (Last 24h):**
    *   **#2976** (CLOSED): Fixed a Discord bug where code fences exceeded character limits, preventing message truncation.
    *   **#2756** (CLOSED): Fixed Console channel filtering logic that was incorrectly hiding reasoning (`Bot (reasoning)`) and tool call logs.
    *   **#2634** (CLOSED): Fixed `anyio` version dependency to resolve a busy-wait loop issue affecting performance.
    *   **#2842** (CLOSED): Added a highly requested feature to search across all chat sessions, supporting i18n (en/zh/ja/ru).
    *   **#2422** (CLOSED): Fixed UI layout issues in the model provider list.
*   **Active Development:**
    *   **PR #2996:** Introduced a mechanism to auto-rebuild the Console frontend on startup if source files are newer than the dist, improving the developer experience.
    *   **PR #3009:** Added an Agent Mention button (`@`) in chat input to facilitate multi-agent collaboration.

## 4. Community Hot Topics
*   **[#2291: 🐾 Help Wanted: Open Tasks](https://github.com/agentscope-ai/CoPaw/issues/2291)** (42 comments)
    *   *Topic:* Contribution management.
    *   *Analysis:* This is the hub of community activity. Users are eager to claim "Not Started" tasks (P0-P2). The high interaction rate indicates a robust base of contributors willing to help, provided they have clear direction.
*   **[#1976: RuntimeError: Task has been cancelled](https://github.com/agentscope-ai/CoPaw/issues/1976)** (16 comments)
    *   *Topic:* Async/Task execution errors.
    *   *Analysis:* A critical technical discussion regarding agent task interruption. The "Closed" status suggests a fix (referenced in #1956), but the continued discussion implies users are still verifying the solution or facing edge cases.
*   **[#2097: Docker 更新到0.1.0后文件丢失](https://github.com/agentscope-ai/CoPaw/issues/2097)** (12 comments)
    *   *Topic:* Docker data persistence.
    *   *Analysis:* Users reported that mounting volumes failed after the v0.1.0 upgrade, causing skills and cron tasks to vanish despite data existing on disk. This suggests a breaking change in path mapping or file detection logic within the Docker container.

## 5. Bugs & Stability
*   **Critical Regression (Docker/Data Loss):**
    *   **[#2097](https://github.com/agentscope-ai/CoPaw/issues/2097)** & **[#2023](https://github.com/agentscope-ai/CoPaw/issues/2023)**: Users upgrading to v0.1.0/v1.0 via Docker report that `skills` and `workspace` files are invisible in the UI, even if present in the volume. *Impact: High - affects core functionality.*
*   **UI & UX Instability:**
    *   **[#1960](https://github.com/agentscope-ai/CoPaw/issues/1960)**: Web console displays raw JSON content (e.g., `[{'type': 'text'...}]`) instead of formatted text, breaking readability.
    *   **[#2037](https://github.com/agentscope-ai/CoPaw/issues/2037)**: UI layout breaks when rendering code blocks in chat, specifically on Ubuntu server/Win11 client setups.
    *   **[#2139](https://github.com/agentscope-ai/CoPaw/issues/2139)**: macOS desktop app resets `config.json` (language and agent profiles) on restart.
*   **Context & Memory Management:**
    *   **[#2092](https://github.com/agentscope-ai/CoPaw/issues/2092)**: Context compression in v0.1.0.p1 is generating hallucinations (injecting false content) and interrupting active tasks.
    *   **[#3047](https://github.com/agentscope-ai/CoPaw/issues/3047)**: `memory_search` fails with database errors because it defaults to SQLite regardless of the configured backend (e.g., Postgres).

## 6. Feature Requests & Roadmap Signals
*   **Multi-Agent & Workflow:**
    *   **[#1884](https://github.com/agentscope-ai/CoPaw/issues/1884)**: Request for multi-user support with isolated agent instances (currently restricted to a single global agent).
    *   **PR #2904**: Introduction of "Plan Mode" (likely for next version), allowing agents to generate structured, multi-step plans using `/plan`.
*   **Usability Enhancements:**
    *   **[#3048](https://github.com/agentscope-ai/CoPaw/issues/3048)**: UI request to make the Cron Job ID field optional/hidden during creation (backend already generates it).
    *   **PR #3031**: Addition of `copaw task` CLI command for headless task execution (automation focus).
*   **Provider Support:**
    *   **[#2195](https://github.com/agentscope-ai/CoPaw/issues/2195)**: Request to fix MiniMax Token Plan API Key connection issues.
    *   **PR #2448**: Implementation of MiniMax OAuth authentication with PKCE.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Upgrade Anxiety:** Users are frustrated by "over-installation" methods that break environments (#1823) and data loss during upgrades (#2097, #2236).
    *   **Reliability:** Frequent reports of agents getting "stuck" (#1827, #2059), failing to stop execution when requested (#3049), or producing garbled text (#2992).
    *   **Docker Experience:** The Docker deployment is currently fragile regarding volume mounts and configuration persistence.
*   **Positive Signals:**
    *   High engagement with the "Help Wanted" issue (#2291) shows users want to invest in the platform.
    *   Appreciation for features like Discord integration (even with bugs) and local model support.

## 8. Backlog Watch
*   **Stability Fixes Needed:**
    *   **Context Compression:** Issues #1974 and #2092 highlight that the "auto-compression" feature is causing more harm than good (task interruption/hallucination) and needs a redesign or better toggling.
    *   **Model Loops:** **[#2947](https://github.com/agentscope-ai/CoPaw/issues/2947)** reports that Gemma4 models enter infinite tool-calling loops. This requires a "stop sequence" or token limit intervention for specific model providers.
*   **Technical Debt:**
    *   **PR #2987** (OPEN) attempts to fix a race condition where stopping a chat ("Cancel") fails and causes subsequent messages to be ignored. This is a high-priority fix for user experience.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# Project Digest: ZeptoClaw (2026-04-08)

## 1. Today's Overview
ZeptoClaw experienced a massive surge in development activity, stabilizing after a significant feature freeze. With **23 Pull Requests merged** in the last 24 hours and a new patch release (**v0.9.2**) published, the project is rapidly addressing technical debt and dependency hygiene. The core focus has shifted from feature addition to optimization ("Binary Diet") and bug fixing, with all critical branches for the `provider-vertex` gating and browser automation successfully integrated. The project health appears robust, with maintainer `qhkm` actively rebasing and refining community contributions from `stuartbowness` to ensure code quality and security standards are met.

## 2. Releases
**v0.9.2** (Published 2026-04-08)
This release focuses primarily on bug fixes and dependency maintenance rather than feature introduction.
*   **Runtime Fixes:** Wired up Landlock workspace access, ensuring secure sandboxing permissions are correctly applied.
*   **Dependencies:** Bumped `tailwindcss` and `typescript-eslint` in the panel frontend.
*   **Migration Notes:** No breaking changes reported.

## 3. Project Progress
The project advanced significantly in three key areas: Agent Capabilities, Tooling, and Infrastructure Optimization.
*   **Agent Context Management:**
    *   **Merged:** `feat(agent): multi-layered context compaction to prevent token overflow` ([#503](https://github.com/qhkm/zeptoclaw/pull/503)).
    *   **Impact:** Replaced the unstable single-pass word-count system with a 5-layer defense-in-depth strategy. This resolves critical crash issues during long conversations where token limits were exceeded unrecoverably.
*   **Browser Automation:**
    *   **Merged:** `feat(tools): add BrowserTool with agent-browser, Lightpanda + Chrome fallback` ([#502](https://github.com/qhkm/zeptoclaw/pull/502)).
    *   **Impact:** Integrated `agent-browser` for full browser automation. Includes SSRF protection via engine allowlisting and automatic fallback logic between Lightpanda and Chrome.
*   **Provider Routing:**
    *   **Merged:** `fix(providers): route vendor-prefixed models correctly with OpenRouter present` ([#501](https://github.com/qhkm/zeptoclaw/pull/501)).
    *   **Impact:** Fixed runtime routing logic so that vendor-prefixed models (e.g., `google/gemini-3-flash-preview`) correctly resolve to OpenRouter when configured, improving compatibility with diverse model providers.
*   **Infrastructure Optimization:**
    *   **Binary Diet:** Successfully executed a multi-phase reduction (PRs [#506](https://github.com/qhkm/zeptoclaw/pull/506), [#505](https://github.com/qhkm/zeptoclaw/pull/505), [#504](https://github.com/qhkm/zeptoclaw/pull/504)).
    *   **Result:** The Linux x86_64 binary size was reduced from **11.2 MB** to **10.66 MB**. This was achieved by gating the heavy `google-cloud-auth` dependencies behind a new `provider-vertex` feature flag and dropping the `zopfli` encoder. The CI guardrail has been tightened to 11 MB to prevent future bloat.

## 4. Community Hot Topics
*   **[CLOSED] Bug Report: Feature-Disabled Panel UX** ([#457](https://github.com/qhkm/zeptoclaw/issues/457))
    *   **Discussion:** Users building ZeptoClaw without the optional `panel` feature were receiving cryptic `clap` (CLI parser) errors when trying to run panel commands.
    *   **Underlying Need:** Users expect graceful degradation and actionable guidance ("install the panel-enabled binary") rather than raw parser errors.
    *   **Status:** Issue closed, presumably resolved by improved CLI handling in recent commits.

## 5. Bugs & Stability
*   **Token Overflow Crashes (High Severity)**
    *   **Issue:** Long conversations previously crashed with unrecoverable token overflow errors.
    *   **Fix:** Merged in PR [#503](https://github.com/qhkm/zeptoclaw/pull/503).
*   **Provider Routing Logic (Medium Severity)**
    *   **Issue:** Vendor-prefixed models failed to route correctly to OpenRouter, causing gateway startup failures or routing errors.
    *   **Fix:** Merged in PR [#501](https://github.com/qhkm/zeptoclaw/pull/501).
*   **SSRF Protection (High Severity)**
    *   **Issue:** Browser automation tools carry the risk of Server-Side Request Forgery (SSRF).
    *   **Fix:** Merged in PR [#502](https://github.com/qhkm/zeptoclaw/pull/502), which enforces an engine allowlist.

## 6. Feature Requests & Roadmap Signals
*   **Custom Tool Arguments:** The merge of PR [#500](https://github.com/qhkm/zeptoclaw/pull/500) (`add raw_string param type`) indicates demand for more flexible custom tool CLI wrappers, specifically the need to pass complex arguments without overly aggressive shell escaping.
*   **Vertex AI Support:** By gating `VertexProvider` behind a feature flag in PR [#505](https://github.com/qhkm/zeptoclaw/pull/505), the project signals that Google Vertex AI integration is now a standard but optional capability, likely maturing for future production use.

## 7. User Feedback Summary
*   **Satisfaction:** Users relying on long-context agents should see significantly improved stability with the new context compaction strategy.
*   **Pain Points:** The rapid expansion of dependencies (binary bloat) was a concern for users deploying in resource-constrained environments or prioritizing fast startup times. The "Binary Diet" initiative directly addresses this feedback.
*   **Security:** The explicit addition of SSRF protection in the browser tool suggests the community (or maintainers) are highly security-conscious regarding agent autonomy.

## 8. Backlog Watch
*   *Low Backlog Risk:* The project is currently highly active, with a "clean rebase" strategy being applied to older PRs (#460, #459, #468, #467) to get them merged. There are no stale "ghost" PRs reported in the recent data; the maintainer is efficiently clearing the queue. All major items from the last month (Context Compaction, Browser Tool, Routing) have now been closed.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-04-08

**Source:** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)
*Note: Data references both `easyclaw` and `rivonclaw` repositories, indicating they are related components of the same ecosystem.*

---

### 1. Today's Overview
EasyClaw (and its UI component RivonClaw) is currently in a low-active maintenance phase, with no new issues reported or closed in the last 24 hours. The primary focus has shifted towards stabilization and distribution, evidenced by a new patch release (`v1.7.8`) addressing installation blockers on macOS. While code contribution is minimal (only 1 active PR), the project remains responsive to platform-specific deployment challenges.

### 2. Releases
**Latest Version: v1.7.8 (RivonClaw v1.7.8)**
*   **Type:** Patch Release / Documentation Update.
*   **Key Changes:**
    *   **macOS Installation Fix:** Added comprehensive instructions to resolve the "Gatekeeper" blocking issue (`'RivonClaw' is damaged and can't be opened`). This confirms the binary is unsigned and provides the terminal commands required to bypass the security restriction.
*   **Impact:** Critical for macOS users who were previously unable to launch the application; no breaking changes for existing users.

### 3. Project Progress
*   **PRs Updated:**
    *   **[#21 feat(i18n): add 5 new languages](https://github.com/gaoyangz77/rivonclaw/pull/21)** (Updated 2026-04-07): This Pull Request remains open but was recently updated. It significantly expands accessibility by adding full translations (1333 keys each) for **Traditional Chinese (zh-TW), Japanese (ja), Korean (ko), Vietnamese (vi), and Hindi (hi)**.
*   **Status:** The project is advancing its internationalization (i18n) capabilities, moving toward a broader global audience.

### 4. Community Hot Topics
*   **Localization Expansion:** The most active community topic is [PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21). The submission of 5 new language files indicates a strong demand from non-English speaking communities.
*   **Underlying Need:** Users are seeking native language support for the `RivonClaw` panel, suggesting a growing user base in Asia (East Asia & South Asia) who find the English interface a barrier to entry.

### 5. Bugs & Stability
*   **Distribution/Signing Warning:** The release notes explicitly acknowledge a "bug" in the user experience: macOS blocks the app due to lack of code signing.
    *   **Severity:** Medium (Usability blocker).
    *   **Status:** Workaround provided via Terminal instructions in the release notes.
    *   **Fix Status:** A permanent fix (code signing) has not been merged yet, as the app relies on user-side intervention.

### 6. Feature Requests & Roadmap Signals
*   **Impending Feature:** Based on the active status of [PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21), the next minor version is highly likely to include support for Japanese, Korean, Vietnamese, Hindi, and Traditional Chinese.
*   **Roadmap Prediction:** The maintainers are prioritizing localization parity before introducing new functional features, ensuring the tool is accessible to its target demographic.

### 7. User Feedback Summary
*   **Pain Points:** The primary friction point reported is the **macOS installation error** ("file is damaged"). Users unfamiliar with Gatekeeper or Terminal commands likely abandon the installation here.
*   **Satisfaction:** Once the installation hurdle is cleared, the lack of bug reports suggests stable performance for existing users.

### 8. Backlog Watch
*   **[PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21):** Open since March 18, 2026. This PR is critical for adoption in new markets.
*   **Action Required:** The maintainers need to review and merge the i18n updates to prevent the PR from becoming stale and to acknowledge the contribution from the community (`chinayin`).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*