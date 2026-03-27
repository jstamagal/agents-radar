# OpenClaw Ecosystem Digest 2026-03-27

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-27 00:12 UTC

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

Here is the OpenClaw project digest for March 27, 2026.

### **Today's Overview**

OpenClaw is experiencing a period of high volatility and intense development activity. In the last 24 hours, the project has tracked an exceptionally high volume of updates, with 500 issues and 500 pull requests touched—far exceeding typical daily metrics. The community is highly active, with discussions dominated by significant regressions introduced in the `2026.3.22`–`2026.3.24` releases, particularly regarding plugin compatibility, gateway stability, and OAuth authentication. Despite these stability concerns, feature advancement continues rapidly, specifically regarding "Adaptive Cards" rendering across multiple platforms (Web, iOS, Android) and enhanced memory management.

### **Releases**

*   **Current Status:** No new releases were published in the last 24 hours.
*   **Context:** The project is currently stabilizing on the `2026.3.2x` branch. Users are actively reporting breaking changes in recent patch versions (specifically `2026.3.22` through `2026.3.24`), suggesting a hotfix release may be imminent to address widespread crashes and plugin failures.

### **Project Progress**

*   **Adaptive Cards Ecosystem:** A massive multi-platform effort to support Adaptive Cards is advancing.
    *   **PR #41565** (Open): Adds shared card rendering for channels (Discord, Slack, Telegram).
    *   **PR #42350** (Open): Implements native inline rendering for iOS/macOS.
    *   **PR #42304** (Open): Implements native inline rendering for Android.
    *   **PR #42307** (Open): Adds Web UI rendering using a lightweight Lit-compatible renderer.
*   **Memory & Agents:**
    *   **PR #45939** (Open): Introduces file watching and auto-reindexing for memory backends (SQLite/QMD).
    *   **PR #55425** (Open): Fixes status display to respect per-agent thinking defaults.
    *   **PR #52133** (Open): Prunes oversized session transcripts to manage memory bloat.
*   **Platform Integrations:**
    *   **PR #54099** (Open): Adds group/channel support for Synology Chat.
    *   **PR #19073** (Open): Major upgrades to the voice-call plugin (streaming TTS, barge-in).

### **Community Hot Topics**

*   **[Internationalization Support](https://github.com/openclaw/openclaw/issues/3460)** (114 comments)
    *   **Summary:** The highest-activity discussion remains the request for i18n and localization.
    *   **Analysis:** Despite massive community demand, maintainers have explicitly stated they lack the bandwidth to support multiple languages, creating a persistent friction point between the dev team and global contributors.
*   **[Desktop Apps for Linux/Windows](https://github.com/openclaw/openclaw/issues/75)** (51 comments, 66 👍)
    *   **Summary:** Users are clamoring for native desktop applications similar to the existing macOS/iOS/Android apps.
    *   **Analysis:** High interest in "Clawdbot" apps for Linux and Windows suggests a growing desire for always-on, background-managed AI agents on desktop workstations.
*   **[WeChat Plugin Incompatibility](https://github.com/openclaw/openclaw/issues/52885)** (42 comments)
    *   **Summary:** The official Tencent WeChat plugin (`@tencent-weixin/openclaw-weixin`) is broken on versions `2026.3.22+` due to module resolution errors (`openclaw/plugin-sdk`).
    *   **Analysis:** This is a critical integration failure for a key market (China), blocking users from upgrading to the latest OpenClaw versions.

### **Bugs & Stability**

**Critical Regression (v2026.3.24):**
*   **[Discord Gateway Crashes](https://github.com/openclaw/openclaw/issues/54729)** (Closed): A health-monitor restart logic in `2026.3.24` caused uncaught exceptions that killed the entire gateway process. (Note: Issue closed, likely via PR).
*   **[Express 5 & Plugin Loops](https://github.com/openclaw/openclaw/issues/54755)** (6 comments): The `2026.3.24` update introduced Express 5 route breaking changes and duplicate plugin loading, causing outages and infinite loops.

**High Severity Failures (v2026.3.22+):**
*   **[Image Tool Broken](https://github.com/openclaw/openclaw/issues/53093)** (Closed): The `image` tool failed with "No media-understanding provider registered" across all providers (OpenAI, MiniMax, etc.).
*   **[OAuth Token Overwrites](https://github.com/openclaw/openclaw/issues/53317)**: A regression where the gateway overwrites fresh OAuth tokens with stale cache, breaking auth for OpenAI Codex.
*   **[Plugin Installation Blocked](https://github.com/openclaw/openclaw/issues/53870)** (8 comments, 9 👍): Installing plugins fails with a "VirusTotal security scan pending" error, likely a bundled dependency regression blocking installation.

**Persistent Stability Issues:**
*   **[Memory Leak (OOM)](https://github.com/openclaw/openclaw/issues/45064)**: CLI crashes with JavaScript heap out of memory on basic commands.
*   **[Heartbeat Timer Failure](https://github.com/openclaw/openclaw/issues/45772)**: Gateway heartbeat stops after 1-2 triggers, requiring restarts.
*   **[Telegram Polling Stalls](https://github.com/openclaw/openclaw/issues/43233)**: Introduced in v2026.3.8, causing stalls and repeated restarts on macOS.

### **Feature Requests & Roadmap Signals**

*   **MCP (Model Context Protocol) Client:** [Issue #29053](https://github.com/openclaw/openclaw/issues/29053) (11 👍) requests native support for connecting to external MCP servers, signaling a desire to standardize tool usage beyond OpenClaw's proprietary system.
*   **Real-time Voice:** [Issue #7200](https://github.com/openclaw/openclaw/issues/7200) (15 👍) asks for native bidirectional streaming audio (Twilio/WebRTC) for phone-like interactions. This aligns with the active work in PR #19073.
*   **Cost-Optimized Gateway:** [Issue #9244](https://github.com/openclaw/openclaw/issues/9244) requests an intelligent LLM gateway for caching and cost reduction.
*   **Linux/Windows Desktop Apps:** [Issue #75](https://github.com/openclaw/openclaw/issues/75) remains a top-voted request.

### **User Feedback Summary**

*   **Pain Points:**
    *   **Token Waste:** Users complain that injecting workspace files (`AGENTS.md`, `SOUL.md`) into every message wastes ~93.5% of the token budget ([Issue #9157](https://github.com/openclaw/openclaw/issues/9157)).
    *   **Tool "Hallucination":** Agents are frequently simulating tool usage (printing JSON text) instead of actually invoking tools ([Issue #45046](https://github.com/openclaw/openclaw/issues/45046)).
    *   **Platform Disconnects:** Slack Socket Mode connects but doesn't route messages ([Issue #28037](https://github.com/openclaw/openclaw/issues/28037)), and WhatsApp sessions drop immediately after linking ([Issue #51012](https://github.com/openclaw/openclaw/issues/51012)).
    *   **Configuration Drift:** The `Control UI` displays incorrect model configurations, and saving changes fails ([Issue #41344](https://github.com/openclaw/openclaw/issues/41344)).

### **Backlog Watch**

*   **[Discord REST API Proxy Failures](https://github.com/openclaw/openclaw/issues/27409)**: Despite proxy configuration, REST calls fail while WebSockets work.
*   **[Matrix E2EE Bootstrap](https://github.com/openclaw/openclaw/issues/53513)**: Encryption is enabled, but the native crypto module isn't exposed properly.
*   **[Visual Model Recognition](https://github.com/openclaw/openclaw/issues/23452)**: Systemic issues where images are not forwarded to vision models across Discord, Telegram, and OpenWebUI.

---

## Cross-Ecosystem Comparison

## Ecosystem Analysis Report: Personal AI Agent Landscape (2026-03-27)

### 1. Ecosystem Overview
The open-source AI agent ecosystem is undergoing a phase of **rapid standardization and architectural hardening**. While early adopter projects (like OpenClaw) face stability headwinds due to legacy codebases and high technical debt, newer entrants (like ZeroClaw and IronClaw) are executing on "feature velocity" to capture market share. A clear bifurcation is emerging: **Generalist Frameworks** aiming to be "operating systems for agents" (memory, multi-user, channels) versus **Specialized Tools** focusing on deployment ease, security, or specific integration stacks. Across the board, there is a shift away from monolithic scripts toward **modular architectures (Rust/TypeScript)**, with a strong emphasis on memory management and enterprise-readiness (supply chain security, OAuth).

### 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | Stabilizing (Patch pending) | **High Volatility** |
| **CoPaw** | 50 | 44 | Pre-1.0 Beta (Refactoring) | **High Activity** |
| **NanoBot** | 15 | 103 | Major Refactor (SDK Swap) | **High Velocity** |
| **ZeptoClaw** | Low | 25 | **v0.9.1** (Active) | **Stable** |
| **ZeroClaw** | Low | 34 | **v0.6.5** (Released) | **Mature** |
| **IronClaw** | Low | Low | **v0.22.0** (v0.23 prep) | **Stable** |
| **PicoClaw** | 30 | 75 | Nightly (Unstable) | **Buggy** |
| **NanoClaw** | Low | 32 | Active Development | **Growing** |
| **LobsterAI** | 19 | 35 | **2026.3.26** (Active) | **High Velocity** |
| **NullClaw** | 5 | 4 | Active Development | **Low/Slow** |
| **Moltis** | Low | 0 | Maintenance Mode | **Stagnant** |
| **TinyClaw** | 0 | 6 | **v0.0.20** (Active) | **Stable** |
| **EasyClaw** | 1 | 0 | Pause/Strategic Shift | **Dormant** |

*\*Health Score based on stability, issue resolution rate, and release regularity.*

### 3. OpenClaw's Position
**OpenClaw** remains the **"Market Leader in Burden,"** possessing the largest community and most extensive plugin ecosystem but suffering from significant technical debt and instability.
*   **Advantages:** Unmatched platform coverage (Discord, Slack, Telegram, WeChat) and brand recognition.
*   **Disadvantages:** Currently plagued by severe regressions in v2026.3.24 (Gateway crashes, memory leaks, OOM errors) that basic users are struggling to troubleshoot.
*   **Technical Approach:** Heavily Node.js/JavaScript dependent, leading to "dependency hell" (e.g., `litellm` issues affecting NanoBot too).
*   **Comparison:** Unlike **ZeroClaw** (Rust-based memory persistence) or **IronClaw** (Rust-based agent loop), OpenClaw relies on interpreted scripting which is causing performance bottlenecks (heap OOM). It is losing ground in "Developer Experience" to faster-moving forks like **ZeptoClaw**.

### 4. Shared Technical Focus Areas
*   **Memory & Context Management (The "Context War")**
    *   *Trend:* Moving from file-based `MEMORY.md` to intelligent, searchable backends.
    *   *Projects:* **ZeroClaw** (Memory-loop continuity), **NanoBot** (Pluggable Mem0/Graphiti), **PicoClaw** ("Seahorse" proposal), **CoPaw** (Context v2.0 refactor).
*   **Supply Chain & Security Hardening**
    *   *Trend:* Reaction to malicious packages (e.g., `litellm_init.pth`) and prompt injection.
    *   *Projects:* **NanoBot** (Removed `litellm`), **ZeroClaw** (PromptGuard integration), **ZeptoClaw** (SSRF validation requests).
*   **Observability & UX**
    *   *Trend:* Users demand to know "what the agent is doing" to reduce token waste and anxiety.
    *   *Projects:* **LobsterAI** (Token usage visibility), **CoPaw** (Thinking/Skill visibility), **IronClaw** (Per-tool reasoning).
*   **Channel Resilience**
    *   *Trend:* Fixing "stuck" connections in async platforms (Telegram, Matrix, Feishu/Lark).
    *   *Projects:* **NullClaw** (Lark feedback), **IronClaw** (Telegram polling fixes), **NanoClaw** (WhatsApp translation fixes).

### 5. Differentiation Analysis

| Feature Focus | Representative Projects | Target User |
| :--- | :--- | :--- |
| **"The Kitchen Sink"** | **OpenClaw** | Power users needing maximum integration. |
| **Enterprise/Security** | **ZeroClaw**, **IronClaw** | Teams needing safety, sandboxing, and multi-tenancy. |
| **Hacker/Tinkerer** | **PicoClaw**, **NanoBot** | Developers running on edge devices (NAS/Termux). |
| **Productivity UI** | **LobsterAI** | Users wanting a polished "ChatGPT+" wrapper. |
| **Niche/Deployment** | **TinyClaw** (Docker/K8s focus), **NullClaw** (Zig-lang performance) | DevOps-focused users. |

*   **Key Architectural Split:** **Rust-based** projects (IronClaw, ZeroClaw, NullClaw) are marketing "Performance & Safety" (Memory loop continuity, Sandboxing). **JS/TS-based** projects (OpenClaw, NanoBot, CoPaw) are prioritizing "Plugin Ecosystem & Flexibility" but facing higher instability.

### 6. Community Momentum & Maturity
*   **Tier 1 (High Velocity/Mature):** **ZeroClaw**, **IronClaw**, **LobsterAI**. These projects are releasing stable versions (v0.6.x, v0.22.x) with clear roadmaps and high merge rates.
*   **Tier 2 (High Growth/Unstable):** **NanoBot**, **CoPaw**. Massive activity and refactoring, but currently in "broken state" for some users due to major architectural shifts.
*   **Tier 3 (Maintenance Mode):** **Moltis**, **EasyClaw**. Very low activity; likely viable only for very specific niche use cases or effectively paused.

### 7. Trend Signals
1.  **The End of "Dumb" Context:** Users are rejecting `AGENTS.md` and file dumping. The market is demanding vector-searchable memory and "relevance-based" injection to save costs.
2.  **Privacy-Routing:** There is a clear signal (ZeptoClaw, NanoBot) for **Hybrid Agents**—routing sensitive prompts to local LLMs (Ollama) and creative prompts to the cloud.
3.  **Multimodal Native:** Support for Vision (Images) and Voice (TTS/STT) is no longer a "nice-to-have" but a baseline requirement for new agents (PicoClaw Voice Refactor, IronClaw Media Understanding).
4.  **Standardization Pain Points:** The **WeChat** and **Telegram** integrations remain the biggest friction points across *all* projects, indicating a need for a standardized, robust "IM Gateway" library in the ecosystem.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-27

## 1. Today's Overview
NanoBot is experiencing a **high-velocity development phase** with significant architectural refactoring taking place. In the last 24 hours, the project addressed a critical security supply chain vulnerability by removing the `litellm` dependency (PR #2448), resulting in a massive surge of 103 updated Pull Requests as contributors adapt the codebase to native SDKs. While 15 issues were updated, the community is currently focused on stabilization, with active discussions ranging from malicious package reports to feature requests for better memory and skill management. The project health appears robust, with maintainers actively merging fixes for protocol errors and usability friction.

## 2. Releases
**No new releases** published in the last 24 hours.
*Note: The codebase is undergoing major refactoring (removal of `litellm`), suggesting the next release will likely be a significant version update (e.g., v0.2.0) once the current 96 open PRs are stabilized.*

## 3. Project Progress
**Refactoring & Security:**
*   **[CLOSED] PR #2448**: Replaced `litellm` with native OpenAI and Anthropic SDKs. This is a major architectural change responding to supply chain security concerns, reducing dependency overhead and improving stability.
*   **[OPEN] PR #2522**: Restored GitHub Copilot provider support post-`litellm` removal, implementing a custom authentication backend.
*   **[CLOSED] PR #2524**: Extracted a shared `AgentRunner` to reduce code duplication between main and subagent execution paths.

**Feature Enhancements:**
*   **[OPEN] PR #2515**: Introduced a **Pluggable Memory Framework**, adding support for multiple backends (Mem0, Graphiti, Memobase) to upgrade agent capabilities beyond the original single-file memory.
*   **[OPEN] PR #2521**: Added `SelfTool` to allow agents to inspect and modify their own runtime state (e.g., context window size) dynamically without restarts.
*   **[OPEN] PR #2488**: Added `/skill` and `/skills` slash commands to allow users to manually trigger or discover skills, addressing the "black box" nature of agent execution.

**Bug Fixes:**
*   **[OPEN] PR #2520**: Fixed Telegram `MessageTooLong` errors by splitting oversized streamed replies.
*   **[OPEN] PR #2523**: Prevented MCP-dependent tasks from being delegated to subagents (which lack MCP access), fixing a silent failure mode.

## 4. Community Hot Topics
*   **[Critical Security] Issue #2439**: *Malicious code found in `litellm_init.pth` bundled with `nanobot-ai` PyPI package*.
    *   **Trend**: 4 upvotes, 5 comments.
    *   **Analysis**: A user discovered obfuscated data-exfiltration code in a dependency bundled with the PyPI distribution. This highlights a critical need for supply chain hygiene and directly triggered the widespread refactoring seen in today's PRs.
    *   **Link**: https://github.com/HKUDS/nanobot/issues/2439

*   **[Feature Request] Issue #2489 & PR #2488**: *`/skill` slash command for user-activated skill injection*.
    *   **Trend**: 2 associated PRs/Issues.
    *   **Analysis**: Users are frustrated that agents implicitly decide when to use skills. There is a strong demand for explicit control mechanisms to force the agent to use specific capabilities (like `read_file` or coding skills) via commands.
    *   **Link**: https://github.com/HKUDS/nanobot/issues/2489

*   **[Branding] Issue #2500**: *Project name duplicates on GitHub*.
    *   **Trend**: 2 upvotes.
    *   **Analysis**: Confusion with a similarly named "MCP-Server" project. Users are seeking clarity on branding to distinguish the two projects.
    *   **Link**: https://github.com/HKUDS/nanobot/issues/2500

## 5. Bugs & Stability
**High Severity:**
*   **Issue #2511**: SDK built-in retries stack with `chat_with_retry` causing **silent 10+ minute hangs**.
    *   *Status*: Open.
    *   *Impact*: Users experience unexplained freezing during execution.
*   **Issue #2439**: **Malicious PyPI Package** (`nanobot-ai` v0.1.4.post5).
    *   *Status*: Open (Critical).
    *   *Fix*: Mitigated by removing `litellm` in PR #2448, but the PyPI package needs to be updated/purged.

**Medium Severity:**
*   **Issue #2519**: WeChat/MiMo V2 Omni fails with "text is not present" after tool calls.
    *   *Root Cause*: API returns tool call without text field, but history sends it back to an API requiring text.
*   **Issue #2513**: `read_file` skill fails with GPUStack (returns raw JSON instead of executing skill).
*   **Issue #2373**: MiniMax API returns `invalid function arguments json string` errors in enterprise WeChat.

**Fixes in Progress:**
*   **PR #2525**: Aims to fix misleading "I’m doing it / completed" messages (Issue #2487) when no action actually occurred.
*   **PR #2526**: Fixes issue where `/stop` command causes the agent to lose the current turn's user message and tool calls from history.

## 6. Feature Requests & Roadmap Signals
*   **Multimodal Support**: Issue #2339 requests dedicated vision provider/model support (separate from text reasoning models) to optimize cost/performance.
*   **Skill Discovery**: Issue #2489 / PR #2516. Users want a "Skill Discovery Mode" for when the skill set becomes too large to fit in the context window.
*   **Heartbeat Optimization**: Issue #2406 requests skipping LLM heartbeat calls when `HEARTBEAT.md` is empty to save tokens.
*   **WhatsApp Features**: Issue #2211 requests "reply only if mentioned" logic for group chats to reduce noise.

## 7. User Feedback Summary
*   **Pain Points**:
    *   **Observability**: Users frequently cite "false positives" where the agent claims to have done work but didn't (Issue #2487).
    *   **Lack of Control**: Users want granular control over tool usage (e.g., force-reading a file) rather than relying solely on the LLM's judgment (Issue #2489).
    *   **Integration Fragility**: Several reports of specific provider failures (MiniMax, GPUStack, MiMo, Gemini) suggest the rapid refactoring is introducing temporary regressions in compatibility.
*   **Satisfaction**: High engagement in contributing fixes (103 PRs) indicates a strong, technical user base willing to support the project during the migration.

## 8. Backlog Watch
*   **Issue #2394 / #2479**: Architecture fixes for "consecutive assistant messages." While PRs exist, the underlying issue of subagent role handling causing API rejections is a recurring theme that needs a permanent, standardized solution.
*   **Issue #2210**: "Add transcription backend selection." (Closed) -> Merged support for `faster-whisper` and Groq, moving the project away from proprietary-only transcription.
*   **Issue #2515 (PR)**: The "Pluggable Memory Framework" is a major architectural addition. As an Open PR, it requires close review to ensure it doesn't destabilize the core agent loop during the ongoing SDK migration.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Project Digest: ZeroClaw (2026-03-27)

## 1. Today's Overview
ZeroClaw is experiencing a **high-velocity development cycle** with significant architectural improvements arriving in v0.6.5. The project closed a large volume of issues (31) and pull requests (34 in the last 24h), indicating a strong focus on stabilization and feature completion. The release of **v0.6.5** marks a major milestone, introducing "memory-loop continuity" to solve context persistence issues, alongside critical security hardening via PromptGuard integration. While feature velocity is high, user sentiment is split; enthusiasm for new features is tempered by reports of increasing complexity in the security sandbox configuration and installation friction.

## 2. Releases
### **v0.6.5: Memory-loop continuity & Context Hardening** (Released 2026-03-26)
This release focuses on long-term memory stability and security enforcement.
*   **Memory Persistence**: Gateway WebSocket, heartbeat, and cron paths now consolidate facts to long-term memory. The context compressor saves summaries before discarding messages, and agent memory now persists across turns, sessions, and restarts.
*   **Context Hardening**: Introduced tool result truncation and preemption checks to prevent context window overflow.
*   **Breaking Changes**: While not explicitly listed as breaking, the shift in how memory is consolidated (`ConversationHistoryMap` behavior) may alter how agents recall previous interactions.
*   **Migration Notes**: Users should review their `max_history_messages` configuration, as the logic for handling message history bounds has been significantly overhauled in this cycle.

## 3. Project Progress
*   **Security Pipeline (Merged/Closed)**: The `PromptGuard` system has been wired into the inbound message pipeline (#4562). This adds a layer of prompt injection detection before messages reach the agent loop, addressing a top priority for autonomous agents.
*   **Channel Resilience**: Several PRs were merged to fix critical Matrix channel issues, including **automatic E2EE recovery** using `recovery_key` and fixing **multi-room listening** scopes (#4674). Slack permalink resolution via API was also added (#4742).
*   **Tooling & UX**:
    *   **Secrets Management**: A new `#[secret]` derive macro and `zeroclaw secret` CLI command were introduced to centralize and mask sensitive config fields (#4726).
    *   **Observability**: PR #4802 adds structured logging for tool calls, drafts, and responses, improving debuggability significantly.
    *   **Debouncing**: Inbound message debouncing was added to prevent rapid user messages from triggering unnecessary LLM calls (#4784).

## 4. Community Hot Topics
*   **Friction in Matrix Integration** ([#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657))
    *   **Status**: Open (Tracking)
    *   **Analysis**: An umbrella issue tracking friction points (E2EE loops, missing streaming) in the Matrix channel. Despite fixes in v0.6.5, users are actively reporting residual issues like lack of conversation context in threads ([#4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804)).
*   **Aliyun Bailian Integration** ([#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059))
    *   **Status**: Open
    *   **Analysis**: A feature request with high engagement (👍1) asking for support for Aliyun Bailian's coding model. This indicates a demand for more diverse, regional provider support beyond the standard OpenAI/Anthropic/Ollama set.
*   **History Management in Channels** ([#4706](https://github.com/zeroclaw-labs/zeroclaw/pull/4706))
    *   **Status**: Open PR
    *   **Analysis**: Addresses an "unbounded HashMap" issue where conversation history grows indefinitely, causing memory leaks. This is a critical stability fix for long-running bot instances.

## 5. Bugs & Stability
*   **Severity S1 (Workflow Blocked) - Security Sandbox Complexity** ([#4752](https://github.com/zeroclaw-labs/zeroclaw/issues/4752))
    *   **Issue**: Users report the security model is "overly complex" and blocks basic file operations.
    *   **Fix**: PR #4803 attempts to relax wildcard opt-outs for subshell/redirect guards to reduce friction for advanced users.
*   **Severity S1 - Ollama URL Configuration Ignored** ([#1304](https://github.com/zeroclaw-labs/zeroclaw/issues/1304))
    *   **Issue**: Ollama provider ignores `api_url`, defaulting to localhost.
    *   **Status**: Closed in latest data, likely resolved by recent config refactors.
*   **Severity S2 - Channel History Ignored** ([#4740](https://github.com/zeroclaw-labs/zeroclaw/issues/4740))
    *   **Issue**: `max_history_messages` config was ignored in all Channel modes (CLI worked fine).
    *   **Fix**: Likely addressed by the LRU sender cap implementation in PR #4706.
*   **Channel - Matrix Thread Context Loss** ([#4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804))
    *   **Issue**: Bot loses context after the first message in a Matrix thread.
    *   **Status**: Open, active regression.

## 6. Feature Requests & Roadmap Signals
*   **TOTP 2FA for Tool Execution** ([#4799](https://github.com/zeroclaw-labs/zeroclaw/pull/4799))
    *   **Signal**: There is a clear demand for "human-in-the-loop" security. Users want to ensure that dangerous commands (like `rm -rf`) triggered by an agent require a physical token, preventing prompt injection attacks.
*   **Agent-to-Agent (A2A) Protocol** ([#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166))
    *   **Signal**: Users are looking to scale beyond single-agent instances. The A2A protocol support (discovery, task delegation) is the next logical step for power users.
*   **Better Windows Support** ([#3693](https://github.com/zeroclaw-labs/zeroclaw/issues/3693))
    *   **Signal**: The addition of a Windows setup batch file in v0.6.3 suggests a push to make the project more accessible to non-POSIX developers.

## 7. User Feedback Summary
*   **Pain Point - Security Configuration**: Users are expressing frustration with the "Seatbelt" sandbox policy. Reports of "unusable" complexity suggest that while the security is robust, the default rules or error messages are too opaque for general users ([#4752](https://github.com/zeroclaw-labs/zeroclaw/issues/4752)).
*   **Pain Point - Installation**: Installation on Windows/WSL and Docker remains fragile. Issues with `install.sh` and Docker builds persist ([#4652](https://github.com/zeroclaw-labs/zeroclaw/issues/4652)).
*   **Positive - Channel Variety**: Users are actively engaging with diverse channels (Matrix, Feishu, QQ), and the quick turnaround on bug fixes for these channels (like E2EE recovery) is improving satisfaction.

## 8. Backlog Watch
*   **[#3059: Aliyun Bailian Support](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)** - Created 2026-03-09. High request volume for specific regional model support.
*   **[#3141: Matrix Media and E2EE](https://github.com/zeroclaw-labs/zeroclaw/pull/3141)** - Open since 2026-03-10. A large, complex PR that is still in draft/review, indicating fundamental difficulties with Matrix E2EE implementation.
*   **[#4356: Debian Dockerfile](https://github.com/zeroclaw-labs/zeroclaw/pull/4356)** - Build errors for 4 days. Docker support is critical for adoption, and this needs attention to ensure the v0.6.5 release is reachable for container users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for **PicoClaw** as of **2026-03-27**.

### 1. Today's Overview
PicoClaw is experiencing a period of **high-intensity development**, with significant friction arising from recent configuration changes in v0.2.4. The project shows **exceptional velocity** with 75 Pull Requests updated in the last 24 hours, heavily outnumbering the 30 active Issues. However, the community is currently reacting to a wave of "Day 1" bugs introduced in the latest release, particularly regarding channel configuration (Telegram, Discord, QQ) and web UI usability. While core agent features like memory systems (Seahorse) and voice capabilities (ASR/TTS) are under active development, the immediate focus has shifted to rapid-fire bug fixes and stability patches.

### 2. Releases
*   **Nightly Build: v0.2.4-nightly.20260326**
    *   **Status:** Automated unstable build.
    *   **Context:** Released to address issues following the stable v0.2.4 update. Users are advised to exercise caution due to instability.
    *   [**View Release**](https://github.com/sipeed/picoclaw/releases/tag/nightly)

### 3. Project Progress
*   **Search Enhancement (Open):** PR #2070 introduces temporal filtering for `web_search`, allowing agents to limit searches by day/week/year and increases default result limits.
*   **Config Compatibility Fixes:** PR #2071 addresses a regression in the v0.2.4 configuration parser where Telegram text placeholders were changed from strings to arrays, breaking existing user configs.
*   **Voice Refactor (In Progress):** PR #1939 is a major refactor adding voice generation and sending capabilities to supported channels.
*   **Web UI Improvements:** PR #2057 adds streaming responses to the web chat interface, and PR #2056 adds missing UI inputs for API keys (Baidu/GLM).
*   **Build System:** PR #2051 fixes Windows build detection in the Makefile to properly generate `.exe` suffixes.

### 4. Community Hot Topics
*   **[Feature] Seahorse - Biologically-inspired Memory System** ([#1919](https://github.com/sipeed/picoclaw/issues/1919))
    *   **Activity:** 7 comments
    *   **Topic:** A proposal to replace or augment the current `MEMORY.md` file-based system with a "Hippocampus-inspired" short-term and long-term memory structure.
    *   **Sentiment:** High interest in more advanced, human-like memory consolidation.
*   **[BUG] Unable to save telegram configuration** ([#2027](https://github.com/sipeed/picoclaw/issues/2027))
    *   **Activity:** 5 comments
    *   **Topic:** After upgrading to v0.2.4, the Web UI falsely reports "Bot Token is required" even when filled.
    *   **Sentiment:** Frustration with the v0.2.4 upgrade experience.

### 5. Bugs & Stability
*   **Critical: Configuration Persistence Failures (v0.2.4 Regression)**
    *   **Issues:** [#2027](https://github.com/sipeed/picoclaw/issues/2027) (Telegram), [#2072](https://github.com/sipeed/picoclaw/issues/2072) (Discord), [#2033](https://github.com/sipeed/picoclaw/issues/2033) (QQ), [#2052](https://github.com/sipeed/picoclaw/issues/2052) (Feishu).
    *   **Analysis:** A systemic issue in v0.2.4 where the Web UI fails to validate or save API keys/tokens, claiming fields are empty.
    *   **Fix:** Fix PR #2071 (Telegram specific) is open; others likely pending config refactoring in PR #2068.
*   **High: Missing Web UI Tool Configs**
    *   **Issue:** [#2053](https://github.com/sipeed/picoclaw/issues/2053)
    *   **Analysis:** Users cannot configure API keys for built-in tools (like Baidu Search) via the web interface, despite the backend expecting them.
    *   **Fix:** Addressed in PR #2056.
*   **High: CPU Usage Spike**
    *   **Issue:** [#2001](https://github.com/sipeed/picoclaw/issues/2001)
    *   **Analysis:** v0.2.4 consumes excessive CPU on FreeBSD (and possibly other OSs) while idle.

### 6. Feature Requests & Roadmap Signals
*   **Conversation Control:** Request for `/stop` command ([#2009](https://github.com/sipeed/picoclaw/issues/2009)) to cancel long-running tasks.
*   **Model Management:**
    *   Automatic model cascade failover ([#1908](https://github.com/sipeed/picoclaw/issues/1908)) was clarified as supported in docs but users want explicit `model_cascade` config.
    *   Model-level rate limiting ([#2029](https://github.com/sipeed/picoclaw/issues/2029)) to prevent hitting provider caps.
*   **Provider Support:** Request for SiliconFlow platform support ([#2045](https://github.com/sipeed/picoclaw/issues/2045)).

### 7. User Feedback Summary
*   **Pain Points:** The v0.2.4 release is currently perceived as **buggy**, particularly regarding the configuration workflow. The disconnect between backend expectations (e.g., API keys) and frontend UI (missing input fields) is a major friction point.
*   **Platform Diversity:** Heavy usage on Termux (Android) and NAS environments is evident, with users reporting specific integration failures (Telegram, Termux builds).
*   **Use Cases:** Users are deploying PicoClaw for multi-user scenarios ([#995](https://github.com/sipeed/picoclaw/issues/995)) and scheduling sensitive tasks (Cron backups), revealing a need for robust multi-tenancy and reliability.

### 8. Backlog Watch
*   **Multi-user Support:** Issue [#995](https://github.com/sipeed/picoclaw/issues/995) (Closed but discussion ongoing) highlights the lack of memory/session isolation between users in a single deployment.
*   **Persistent Memory Backend:** Issue [#175](https://github.com/sipeed/picoclaw/issues/175) (Closed) suggests moving away from `MEMORY.md` to a search-able database (Engram), which remains a relevant architectural challenge given the "Seahorse" proposal.
*   **Proxy Support:** Issue [#413](https://github.com/sipeed/picoclaw/issues/413) (Closed) requested proxy support for `web_fetch`.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-27

## 1. Today's Overview
NanoClaw is experiencing a surge in development velocity, with **32 Pull Requests** updated in the last 24 hours—a highly active period dominated by new features and integrations. While feature expansion is aggressive, project stability is a concern; several critical bugs regarding Docker environments and message handling were reported today, coinciding with patches for security vulnerabilities (command injection) and configuration corruption. The project appears to be in a "cleanup and expansion" phase, balancing the integration of complex new channels (WhatsApp, Signal) and memory systems (Graphiti) against necessary refactoring for the CLI and container security.

## 2. Releases
No new releases were published today.

## 3. Project Progress
**Merged & Closed Items:**
While the raw data shows 9 PRs merged/closed, specific details on the *merged* features were not provided in the snippet. However, significant progress was made on the issue tracker:
*   **Issue #1092 (Closed):** Clarified support for the OpenAI API, confirming that local models can leverage this widely used interface, resolving user confusion about model compatibility.

**Major Features Under Review:**
*   **Memory Overhaul:** PRs and Issues are actively addressing the limitations of the current file-based memory system. A proposal to integrate the **Graphiti knowledge graph** suggests a move toward relevance-based memory retrieval to solve token bloat.
*   **Channel Expansion:** Development is ongoing for multiple new messaging channels, including an **official WhatsApp Business Cloud API** and a **Baileys-based** implementation.
*   **CLI Refactoring:** The CLI is undergoing a rename from `claw` to `nanoclaw`, incorporating `clawps` functionality as a subcommand to streamline the user experience.

## 4. Community Hot Topics
**High Activity & Engagement:**
*   **[Feature] Add Signal as a messaging channel (Issue #29)**
    *   *Status:* Open | *Reactions:* 👍 3 | *Comments:* 3
    *   *Summary:* This long-standing request continues to gain traction. Users are demanding a privacy-focused alternative to WhatsApp/Telegram.
    *   *Underlying Need:* Desire for secure, decentralized communication channels integrated with the AI agent.
*   **[Feature] Graphiti Knowledge Graph (Issue #1458)**
    *   *Status:* Open | *Created:* 2026-03-26
    *   *Summary:* A proposal to replace the current "dumb" file memory with a knowledge graph that offers search, cleanup, and relevance retrieval.
    *   *Underlying Need:* As agents handle more conversations, users are facing rising token costs and degraded context quality due to irrelevant memory loading.
*   **[Discussion] Support for OpenAI API (Issue #1092)**
    *   *Status:* Closed | *Reactions:* 👍 1
    *   *Summary:* Users sought confirmation on whether the OpenAI API could be used for local models to bypass restrictions found in other APIs.
    *   *Underlying Need:* Flexibility in model backends and avoiding vendor lock-in or restrictive content filters.

## 5. Bugs & Stability
**Critical Bugs Reported:**
*   **[Critical] LID JID Translation Drops Messages (Issue #1445)**
    *   *Impact:* Direct Messages (DMs) are silently dropped during WhatsApp sessions.
    *   *Details:* The `translateJid()` function fails on new session IDs, returning raw LID JIDs which agents fail to process.
    *   *Fix:* PR #1446 is open to address this alongside other Linux setup issues.
*   **[High] Docker Container Blocking (Oracle Cloud) (Issue #1357)**
    *   *Impact:* Agents hang silently on Linux VMs with restrictive iptables (e.g., Oracle Cloud).
    *   *Details:* The container agent cannot reach the credential proxy on port 3001.
    *   *Fix:* PR #1469 provides documentation/troubleshooting for this specific firewall failure.
*   **[High] .env Corruption & Silent Crashes (Issue #1445)**
    *   *Impact:* Environment configuration files are being corrupted (missing newlines), causing agents to crash or fail initialization.
    *   *Fix:* PR #1446 fixes the missing trailing newline in the register function.

**Security Fixes (Merged/Pending):**
*   **Command Injection (PR #1475):** Addresses vulnerabilities in `stopContainer` and mount paths where arbitrary shell commands could be executed via container names.
*   **Config Crash (PR #1476):** Fixes a crash when `.env` files contain single-character values.

## 6. Feature Requests & Roadmap Signals
*   **Agent-to-Agent Communication (A2A):** PR #1295 seeks to implement an `/add-a2a` channel, allowing NanoClaw to interoperate with other AI agents (like Claude Code or Cursor).
*   **1Password Integration:** PR #1466 proposes a "Feature skill" to use 1Password as an MCP server for secure credential management, removing hardcoded secrets.
*   **Token Management:** PR #1471 adds a token limit manager to automatically trim conversation history and prevent "prompt too long" errors.
*   **Browser Persistence:** PR #1462 looks to host a Chrome browser via CDP to assist with bot detection and maintaining persistent web sessions.

## 7. User Feedback Summary
**Pain Points:**
*   **Platform Instability:** Users running on Linux/Docker (specifically Oracle Cloud and Hetzner) are reporting significant friction with firewalls (UFW/iptables) blocking internal container communication.
*   **Token Inefficiency:** The current memory system is described as loading "all memories regardless of relevance," leading to high costs and context saturation. Users explicitly want "search" and "cleanup" mechanisms.
*   **Setup Complexity:** The "first-time setup" process is error-prone, with specific complaints about `register` scripts corrupting `.env` files and silent failures requiring manual debugging.

**Positive Developments:**
*   Users are actively contributing complex integrations (Baileys for WhatsApp, Signal CLI), indicating strong developer engagement.
*   The move to a skills marketplace (PR #1470) suggests users want a more modular, plugin-based architecture rather than a monolithic core.

## 8. Backlog Watch
*   **[Long-Standing] Signal Support (Issue #29):** Created in February 2026 and still open. Despite high interest (3 👍), implementation is stalled.
*   **[Stalled] A2A Channel (PR #1295):** Open since March 20, this represents a major interoperability feature but has not yet been merged.
*   **[Needs Review] System Prompt Layer (PR #1341):** A request to allow a user-controlled `system-prompt.md` to be prepended to every agent invocation. This remains open and unmerged, pending review of how it interacts with the container runner.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw Project Digest for 2026-03-27.

### 1. Today's Overview
NullClaw is currently in an active development cycle with a focus on platform integration and user experience refinement. In the last 24 hours, the project has seen moderate activity with 4 new Pull Requests and 5 Issues being updated. The development team and community contributors are actively addressing stability issues across various chat platforms (Lark, Discord, QQ) and improving configuration flexibility (WeChat, Cron, Custom APIs). While no new release was published today, the open PRs suggest that upcoming versions will focus on fixing connectivity bugs and enhancing user feedback mechanisms during AI processing.

### 2. Releases
*No new releases published in the last 24 hours.*

### 3. Project Progress
While no PRs were merged in the last 24 hours, significant progress is represented in the open Pull Requests currently under review:
*   **Lark UX Improvement:** PR #720 introduces a "processing feedback" mechanism for the Lark channel, sending a temporary placeholder at the start of a turn to reduce user uncertainty during long inference times.
*   **Session Management Fixes:** PR #719 resolves a bug in Discord session handling where scheduled Direct Messages (DMs) could be sent to the wrong target identifier.
*   **Configuration Hygiene:** PR #692 fixes `cron.zig` to properly respect the `NULLCLAW_HOME` environment variable, preventing `AccessDenied` errors in Docker environments where the default `$HOME` is not writable.
*   **Documentation Expansion:** PR #718 adds official documentation for the built-in WeChat channel setup, covering webhook paths and multi-account configuration.

### 4. Community Hot Topics
The community is focused on expanding platform support and resolving specific integration pain points.
*   **WeChat Integration Demand ([Issue #714](https://github.com/nullclaw/nullclaw/issues/714))**
    *   **Activity:** 4 comments since creation yesterday.
    *   **Topic:** Users are requesting support for the official WeChat plugin, noting that other forks (like OpenClaw) already support this massive user base.
    *   **Signal:** High priority request for Chinese and SE Asian markets. The existence of PR #718 (Docs) suggests this functionality is either newly added or imminent, prompting the need for documentation.

### 5. Bugs & Stability
*   **Critical: Config Parsing Errors ([Issue #721](https://github.com/nullclaw/nullclaw/issues/721))**
    *   **Severity:** High (Breaks core functionality).
    *   **Details:** Users report that configuring custom API URLs (specifically Cloudflare Workers) in the `models.providers` section causes parse errors.
*   **High: QQ Connectivity Drops ([Issue #722](https://github.com/nullclaw/nullclaw/issues/722))**
    *   **Severity:** High.
    *   **Details:** The QQ bot disconnects during long-running AI tasks and fails to reconnect, causing the generated response to be lost.
*   **Medium: Lark User Experience ([Issue #717](https://github.com/nullclaw/nullclaw/issues/717))**
    *   **Severity:** Medium.
    *   **Details:** Lack of "typing/processing" indicators on Lark makes the bot feel unresponsive compared to other implementations.
    *   **Fix Status:** A fix is available in PR #720.
*   **Medium: Telegram Reasoning Visibility ([Issue #311](https://github.com/nullclaw/nullclaw/issues/311))**
    *   **Severity:** Low/Medium.
    *   **Details:** `/reasoning on` does not display the reasoning process in Telegram, hindering debugging. (Reopened/Closed recently).

### 6. Feature Requests & Roadmap Signals
*   **WeChat Support:** Based on Issue #714 and the subsequent documentation PR #718, it is highly probable that the next release will officially support WeChat plugin integration.
*   **Enhanced Feedback Loops:** The submission of PR #720 indicates a roadmap focus on "User Experience" for asynchronous channels, ensuring users know the bot is thinking even when the model latency is high.

### 7. User Feedback Summary
*   **Platform Parity:** Users expect NullClaw to match the feature set of OpenClaw and other forks, specifically regarding WeChat support and Telegram reasoning visibility.
*   **Async Latency Pain:** Feedback on Lark and QQ highlights a sensitivity to "dead air" during inference. Users need feedback mechanisms or stable connections that persist through long LLM response times.
*   **Configuration Usability:** There is friction with complex YAML configurations (Custom APIs and Environment Variables in Docker), indicating a need for better validation or documentation.

### 8. Backlog Watch
*   **Issue #691 (Related to PR #692):** While the PR is open, the underlying issue regarding `NULLCLAW_HOME` resolution in Docker has been a point of failure for users running containerized deployments. Prioritizing the merge of PR #692 is recommended to unblock these users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-27

## 1. Today's Overview
IronClaw is experiencing a high-velocity development cycle with significant architectural advancements. The project has released version `v0.22.0`, introducing per-tool reasoning and multi-tenant authentication, while `v0.23.0` is already in preparation with breaking changes to public APIs. While feature velocity is high, stability concerns are emerging; the automated Staging CI system has flagged critical and high-severity bugs regarding UTF-8 panics and truncation logic in the agent loop. The community is actively testing complex integrations (Telegram, Feishu/Lark, Railway), exposing gaps in documentation and workflow reliability for external tools.

## 2. Releases
**Latest Release: ironclaw-v0.22.0 (2026-03-25)**
*   **[agent]** Per-tool reasoning: Implemented thread-per-tool reasoning through the provider, session, and all surfaces ([#1513](https://github.com/nearai/ironclaw/pull/1513)).
*   **[cli]** Credential visibility: `tool info` now displays credential auth status ([#1572](https://github.com/nearai/ironclaw/pull/1572)).
*   **[auth]** Multi-tenant support: Initiated multi-tenant authentication implementation.

*Note: Release PR [#1658](https://github.com/nearai/ironclaw/pull/1658) is currently open for `v0.23.0` and notes API breaking changes, specifically warning that constructible structs have added new public fields.*

## 3. Project Progress
**Merged & Closed Advancements:**
*   **Internal Architecture Cleanup:** PR [#1683](https://github.com/nearai/ironclaw/pull/1683) successfully made `ironclaw_common` and `ironclaw_safety` internal-only again, resolving the architectural debt introduced to unblock the previous release.
*   **OAuth & Security:** PR [#1684](https://github.com/nearai/ironclaw/pull/1684) decoupled hosted OAuth callbacks from the hardcoded `GATEWAY_AUTH_TOKEN`, improving flexibility for hosted deployments.
*   **Workflow Fixes:** PR [#1108](https://github.com/nearai/ironclaw/pull/1108) fixed a cascading failure in routines where `routine_delete` was called with empty parameters after a failed update.

**In-Flight Major Features (Open PRs):**
*   **OpenAI Responses API:** PR [#1656](https://github.com/nearai/ironclaw/pull/1656) adds `/v1/responses` endpoints, routing through the full agent loop (tools/memory) rather than just proxying the LLM.
*   **Aliyun Integration:** PR [#1446](https://github.com/nearai/ironclaw/pull/1446) adds support for the Aliyun BaiLian Coding Plan provider.
*   **Recursive Skills:** PR [#1667](https://github.com/nearai/ironclaw/pull/1667) enables recursive discovery for bundled skill directories.

## 4. Community Hot Topics
**Most Active Discussions:**
*   **Telegram Bot Instability ([#1676](https://github.com/nearai/ironclaw/issues/1676))** – 6 Comments
    *   *Issue:* User "jamieduk" reports the HTTP tool routine is failing, preventing the Telegram bot from auto-polling for messages. The user contrasts this with "OpenClaw," which worked from day one.
    *   *Analysis:* Indicates regression or fragility in the HTTP tool implementation when used for polling.
*   **Telegram Token Security UX ([#1596](https://github.com/nearai/ironclaw/issues/1596))** – Closed
    *   *Issue:* The onboarding flow accidentally prompts users to paste bot tokens into the chat interface, exposing secrets to the model context.
    *   *Outcome:* Closed, likely fixed by the OAuth/security improvements in merged PRs.

## 5. Bugs & Stability
**Critical Issues (Auto-detected):**
*   **[CRITICAL] Potential UTF-8 Panic ([#1669](https://github.com/nearai/ironclaw/issues/1669)):**
    *   Staging CI detected a potential panic in `is_recoverable_tool_call_segment()` if truncation occurs mid-multibyte character (e.g., emoji).
    *   *Fix:* PR [#1679](https://github.com/nearai/ironclaw/pull/1679) is open and addresses this specific panic.
*   **[HIGH] Truncation Logic Asymmetry ([#1670](https://github.com/nearai/ironclaw/issues/1670)):**
    *   Counter logic in the agentic loop persists across steps incorrectly, potentially leading to state tracking errors.

**User Reported:**
*   **Feishu/Lark Stuck Pairing ([#1673](https://github.com/nearai/ironclaw/issues/1673)):** The Feishu channel gets stuck in "Awaiting Pairing" and never prompts for a code.
*   **Railway Environment Vars Invisible ([#1680](https://github.com/nearai/ironclaw/issues/1680)):** LLM configuration env vars are not picked up when using the Railway one-click template, forcing the model to default to Anthropic Sonnet.
*   **HTTP Tool Routine Errors ([#1676](https://github.com/nearai/ironclaw/issues/1676)):** Affecting Telegram polling functionality.
*   **Ollama Integration Errors ([#1672](https://github.com/nearai/ironclaw/issues/1672)):** HttpErrors encountered when using `qwen3.5:9b` locally on Windows.

## 6. Feature Requests & Roadmap Signals
*   **Recursive Skill Discovery ([#1664](https://github.com/nearai/ironclaw/issues/1664)):** Users want the ability to organize skills in nested groupings (e.g., `skills/org/group/skill.md`) without them being ignored. *Status: PR [#1667](https://github.com/nearai/ironclaw/pull/1667) is open.*
*   **Cognitive Architecture / System Prompt ([#1671](https://github.com/nearai/ironclaw/issues/1671)):** A user requested a refinement of the system prompt to better reflect an "autonomous" architecture, suggesting the current prompt is too static.
*   **Anti-Drift Self-Checks ([#1634](https://github.com/nearai/ironclaw/issues/1634)):** Proposal to add rule-based monitoring to the agent loop to detect stuck jobs or hallucinations without extra LLM calls.

## 7. User Feedback Summary
*   **Integration Pain Points:** Users integrating with external platforms (Telegram, Feishu/Lark, Railway) are facing "getting started" friction, specifically around authentication flows (OAuth vs. Token) and environment variable configuration.
*   **Security vs. Usability:** The Telegram token issue highlights a tension where users are willing to paste secrets into chat to make things work, bypassing (or falling out of) secure flows.
*   **Local LLM Reliability:** Reports involving Ollama and missing embedding models suggest the local setup documentation is lagging behind the code requirements.

## 8. Backlog Watch
*   **WASM Tool Schema Enforcement ([#1303](https://github.com/nearai/ironclaw/issues/1303)):** Open for 10+ days. WASM tools are exposing permissive `{}` schemas to the LLM despite having defined typed schemas, leading to poor tool usage.
*   **DB-Backed User Management ([#1626](https://github.com/nearai/ironclaw/pull/1626)):** A massive PR (XL size) adding multi-tenancy and DB user management remains open. It is critical for scaling but represents a significant merge conflict risk due to its scope.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for **LobsterAI** for **2026-03-27**.

### 1. Today's Overview
LobsterAI is exhibiting **very high development velocity**, indicating a phase of rapid iteration and expansion. The project saw a significant release (**2026.3.26**) accompanied by heavy merging activity (15 PRs closed), yet the backlog continues to grow with 35 new PRs opened and 19 active issues updated in the last 24 hours. While the release introduces major architectural improvements like **multi-agent support**, there is a concurrent spike in user-reported bugs and stability concerns, particularly surrounding the **OpenClaw gateway**, **IM bot integrations**, and **scheduled tasks**. The community is highly active, driving demand for better observability (Token usage) and usability (templates, search).

### 2. Releases
**Version 2026.3.26**
*   **Release Date:** March 26, 2026
*   **Key Features:**
    *   **Multi-Agent Support:** Introduced support for preset agents and skills (PR #895).
    *   **Gateway Stability:** Fixed an issue where switching models forced a gateway restart (PR #893), addressing a major UX friction point.
*   **Migration Notes:** Users should update to resolve the model-switching lag and test the new multi-agent capabilities.

### 3. Project Progress
*   **Performance & Architecture:**
    *   **Chat Rendering:** Significantly improved UI responsiveness for long chat sessions by implementing a `LazyRenderTurn` component based on Intersection Observer (PR #764).
    *   **Build Optimization:** Enabled esbuild minification for production builds to reduce bundle size and improve load times (PR #920).
*   **UI/UX Enhancements:**
    *   **Theming:** Introduced a comprehensive **12-theme system** based on CSS variables and semantic classes (PR #938).
    *   **Code Interaction:** Added code block folding/expanding and line number toggling (PR #939).
    *   **Visual Clarity:** Added visual tags in the model selector to indicate image support (PR #785).
*   **Data Management:**
    *   Implemented pagination for session lists and message history to prevent memory bloat (PR #924).
    *   Added in-conversation content search functionality (PR #923).
*   **Model Integration:**
    *   Added support for **Baidu Qianfan** models (PR #929).

### 4. Community Hot Topics
*   **Gateway Crashes & Plugin Mismatches**
    *   **Issue:** [WeChat plugin auto-adds causing failures](https://github.com/netease-youdao/LobsterAI/issues/918) & [Gateway fails if WeChat plugin missing](https://github.com/netease-youdao/LobsterAI/pull/797).
    *   **Analysis:** Users are facing "doctor" loops and startup failures because the system aggressively configures plugins (like WeChat) that aren't installed or compatible. A fix is pending in PR #797.
*   **Scheduled Task Chaos**
    *   **Issue:** [Cron interval resets to 1 minute](https://github.com/netease-youdao/LobsterAI/issues/900) & [Tasks failing until restart](https://github.com/netease-youdao/LobsterAI/issues/837).
    *   **Analysis:** There is a critical regression in the cron engine where editing a task breaks its schedule, and errors in IM delivery cause the task runner to hang indefinitely.
*   **Observability (Token Usage)**
    *   **Issue:** [Request for Token Usage Display](https://github.com/netease-youdao/LobsterAI/issues/930).
    *   **Analysis:** Users are demanding cost visibility. Although the backend collects token data, the frontend does not display it. This is a high-priority feature for power users managing API costs.

### 5. Bugs & Stability
*   **CRITICAL - Data Loss Risk:**
    *   **[SQLite Write Failures](https://github.com/netease-youdao/LobsterAI/issues/906):** Reports that the `save()` method uses `fs.writeFileSync` without error handling. If the disk is full or locked, data is silently lost or the DB corrupted. **Severity: High.**
*   **HIGH - Stability & Crashes:**
    *   **[App Crash on Exit](https://github.com/netease-youdao/LobsterAI/issues/926):** A missing optional chain (`?.`) on a reject handler causes a guaranteed crash when the app exits or the IM handler restarts.
    *   **[SSE Parsing Dropouts](https://github.com/netease-youdao/LobsterAI/issues/922):** Anthropic streaming drops text chunks because of missing line buffering (`sseBuffer`), causing broken responses under load.
*   **MEDIUM - Performance:**
    *   **[String Matching O(n²)](https://github.com/netease-youdao/LobsterAI/issues/887):** Streaming message merging uses a naive string comparison algorithm causing main thread freezes during long outputs.
    *   **[Memory Leaks](https://github.com/netease-youdao/LobsterAI/issues/886):** React warnings about updating unmounted components due to naked `setTimeout` calls in the CopyButton.

### 6. Feature Requests & Roadmap Signals
*   **Productivity Boosters:**
    *   **[System Prompt Templates](https://github.com/netease-youdao/LobsterAI/issues/933):** Users want to save and reuse prompts for recurring tasks like code review. *Probability: High* (Logical next step for "Cowork").
    *   **[Link Understanding](https://github.com/netease-youdao/LobsterAI/issues/931):** Request to scrape/read web content from URLs pasted in chat (feature exists in OpenClaw but not exposed in LobsterUI).
*   **Memory Management:**
    *   **[Import/Export Memories](https://github.com/netease-youdao/LobsterAI/issues/914):** Users want to port their data between machines.
*   **Platform Support:**
    *   **[Local Plugin Installation](https://github.com/netease-youdao/LobsterAI/pull/921):** A new PR allows loading OpenClaw plugins from local paths, signaling a move towards more flexible extension management.

### 7. User Feedback Summary
*   **Pain Points:** The update cycle has been turbulent. Users are frustrated by the **"Gateway Restart"** loop when switching models (partially fixed in 2026.3.26) and the fragility of the **Scheduled Tasks** system. The login page component loading failure also points to frontend asset issues.
*   **Positive Signals:** Users are actively requesting deeper integration features (Link reading, Templates), indicating they are relying on the tool for complex workflows and want to reduce manual friction.

### 8. Backlog Watch
*   **IM Bot Reliability:** Issues [#910](https://github.com/netease-youdao/LobsterAI/issues/910) (Feishu delivery errors) and [#837](https://github.com/netease-youdao/LobsterAI/issues/837) (Scheduled task failures) represent a systemic instability in the async/task features that needs architectural attention.
*   **Code Debt:** Issue [#727](https://github.com/netease-youdao/LobsterAI/pull/727) highlights a significant amount of duplicate constant definitions across the codebase, which increases maintenance burden.
*   **Security:** A user inquiry about a private security disclosure channel was posted ([#925](https://github.com/netease-youdao/LobsterAI/issues/925)) but appears unanswered. A policy needs to be established.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

Here is the project digest for **TinyClaw** on **2026-03-27**.

### 1. Today's Overview
TinyClaw is currently in a high-velocity development phase, characterized by a significant focus on infrastructure, containerization, and user interface refinement. With 6 Pull Requests merged and a new minor release (v0.0.20) published, the project is rapidly stabilizing its "TinyOffice" control plane and Docker deployment strategy. Although no new issues were reported in the last 24 hours, the merged PRs indicate a strong push to fix permission issues in Docker and refactor the CLI codebase for better maintainability.

### 2. Releases
**New Release: v0.0.20**
*   **Office Control Plane:** The web UI has been revamped to include a comprehensive control plane. This new interface allows users to manage the daemon (restart functionality), control channels (start/stop), and handle device pairing directly from the UI.
*   **UI Consolidation:** The "Providers" tab has been merged into a unified "Services" tab, streamlining the management of built-in and custom providers.
*   **Docker Fixes:** This release likely includes critical fixes for running the application as root in Docker to ensure the Codex CLI can access necessary authentication files.

### 3. Project Progress
The following features and fixes were advanced via merged Pull Requests:

*   **Infrastructure & Docker Stability (Closed)**
    *   **Fixed Root Permissions:** Resolved WebSocket 500 errors in Docker caused by the `gosu` utility dropping privileges, which prevented the Codex CLI from reading `/root/.codex/auth.json`. The container now runs as root to ensure seamless AI CLI integration. ([#266](https://github.com/TinyAGI/tinyagi/pull/266))
    *   **Persistent Data Restructuring:** Moved all persistent data from `/data` to `/home/tinyagi` to ensure Docker volume mounts correctly cover both application data and AI CLI state (codex, claude-code). ([#265](https://github.com/TinyAGI/tinyagi/pull/265))
*   **User Interface & Experience (Closed)**
    *   **Control Plane Implementation:** Added a unified Control Plane to TinyOffice, consolidating monitoring and management into a single view with tabs for Overview, Services, and Logs. ([#267](https://github.com/TinyAGI/tinyagi/pull/267))
    *   **UI Refactoring:** Merged the Providers tab into the Services tab and removed the standalone `/logs` page to simplify the interface. ([#268](https://github.com/TinyAGI/tinyagi/pull/268))
*   **Codebase Maintenance (Closed)**
    *   **CLI Modularity:** Refactored the monolithic `tinyagi.mjs` (847 lines) into modular TypeScript components, reducing the entry point to ~336 lines for improved maintainability. ([#263](https://github.com/TinyAGI/tinyagi/pull/263))
    *   **TypeScript Fixes:** Added explicit type annotations to fix strict mode compilation errors. ([#264](https://github.com/TinyAGI/tinyagi/pull/264))

### 4. Community Hot Topics
*   **No Activity:** There were no new issues or active discussions in the last 24 hours.

### 5. Bugs & Stability
*   **Docker Auth Failures (Fixed):** A critical bug where Codex failed with WebSocket 500 errors inside Docker due to permission restrictions on `auth.json` was addressed by removing the non-root user restriction. ([#266](https://github.com/TinyAGI/tinyagi/pull/266))
*   **Data Persistence Logic (Fixed):** A regression regarding where AI CLIs store configuration (previously outside the volume mount) was fixed by moving persistent data to the user's home directory. ([#265](https://github.com/TinyAGI/tinyagi/pull/265))

### 6. Feature Requests & Roadmap Signals
*   **Daemon Control:** The addition of daemon restart functionality in the Control Plane suggests a roadmap focusing on remote management and reducing the need for terminal access by users.
*   **Unified Management:** The consolidation of "Providers" into "Services" signals a shift towards a more simplified, holistic view of AI agent management, rather than treating configuration and runtime services as separate entities.

### 7. User Feedback Summary
*   **No Direct Feedback:** No new user comments or issues were recorded today.
*   **Inferred Needs:** Based on the merged PRs, users were experiencing friction with the complexity of the UI (addressed by merging tabs) and stability issues when running the application in Docker environments (addressed by permission and volume path fixes).

### 8. Backlog Watch
*   **Clear Backlog:** With all recent PRs closed and no open issues reported in the last 24 hours, the immediate backlog appears clear. The project is effectively managing technical debt and feature implementation in real-time.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest - 2026-03-27

## 1. Today's Overview
The Moltis project experienced a low-intensity maintenance day with no active feature development branches merged. The repository showed a "clean-up" pattern, with all recent Pull Requests (PRs) being closed without merging (specifically dependency bumps and a minor asset path fix), indicating a focus on housekeeping rather than feature expansion. However, engagement remains evident as a new enhancement request regarding "Local thinking" was updated yesterday, suggesting the user base is actively looking for core capability expansions. The open issue count increased slightly as the community continues to discuss privacy and processing features.

## 2. Releases
*No new releases published on this date.*

## 3. Project Progress
**Merged/Closed PRs:**
While the repository shows updated PRs, the most recent activity involves the **closure** of two maintenance tasks rather than merges of new features:
*   **Closed: Dependency Management** ([#491](https://github.com/moltis-org/moltis/pull/491)) - A `dependabot` PR aiming to bump `picomatch` from 4.0.3 to 4.0.4 in the `/crates/web/ui` directory was closed without action.
*   **Closed: Asset Path Fix** ([#492](https://github.com/moltis-org/moltis/pull/492)) - A proposed fix for the `style.css` path in `crates/web/src/assets.rs` was also closed.

The closure of these PRs suggests the maintainers are prioritizing specific code states or resolving these issues via alternative means (or deeming them unnecessary).

## 4. Community Hot Topics
*   **[Feature Request]: Local Thinking** ([#490](https://github.com/moltis-org/moltis/issues/490))
    *   **Status:** Open & Updated (2026-03-26)
    *   **Analysis:** This is currently the primary discussion point for the project. The request for "Local thinking" typically signals a user desire to perform reasoning or chain-of-thought processing directly on the user's hardware rather than in the cloud. This touches on key trends in the AI agent space: **privacy**, **latency reduction**, and **cost management**.

## 5. Bugs & Stability
*   **No critical bugs reported today.**
*   The closed PR regarding the `style.css` path ([#492](https://github.com/moltis-org/moltis/pull/492)) suggests there was an awareness of a potential styling or asset loading issue in the Web UI, but the closure of the PR implies it may not have been the correct fix or is being handled internally.

## 6. Feature Requests & Roadmap Signals
*   **Local Thinking Capabilities:**
    *   Based on the activity in Issue [#490](https://github.com/moltis-org/moltis/issues/490), there is a clear demand for enabling local reasoning models. If the development team aligns with this request, future versions of Moltis may prioritize tighter integration with local LLMs to support "thinking" modules that do not rely on external APIs.

## 7. User Feedback Summary
*   **Enhancement Focus:** Users are not reporting critical crashes but are looking for advanced architectural features. The engagement on the "Local thinking" issue indicates a segment of the user base that values **local-first architectures** and wants the agent to be more self-sufficient on the host machine.

## 8. Backlog Watch
*   **Issue [#490](https://github.com/moltis-org/moltis/issues/490)**: While recently created, it represents the most significant directional request. Maintainers should evaluate if this fits into the core roadmap to prevent the feature from becoming a "zombie" request.
*   **Dependency Hygiene:** The closure of the `picomatch` update ([#491](https://github.com/moltis-org/moltis/pull/491)) without a merge suggests a backlog of dependency updates that may need manual review or integration later to ensure the `npm_and_yarn` group does not fall too far behind the upstream ecosystem.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Project Digest: CoPaw (agentscope-ai/CoPaw)
**Date:** 2026-03-27

## 1. Today's Overview
CoPaw is experiencing a period of high activity and significant transition, marked by intense community engagement and architectural evolution. The project logged **94 active events** (50 Issues, 44 PRs) in the last 24 hours, indicating a robust open-source ecosystem. Development appears sharply focused on refactoring the **Context Management system to v2.0** and addressing critical stability bugs in channels (Feishu/WebSocket) and memory management. Despite the high volume of merged PRs, user reports regarding data loss and session management suggest that the current 0.2.x releases are facing stability growing pains as the team pushes towards a 1.0.0 beta.

## 2. Releases
**New Releases:** 0 (No new releases in the last 24h).
*Note: Although [PR #2358](https://github.com/agentscope-ai/CoPaw/pull/2358) was merged to bump the version to **1.0.0b1**, no corresponding release tag was published in the last 24 hours.*

## 3. Project Progress
**Key Merged/Closed PRs (Last 24h):**

*   **[feat] Context Management v2.0 Refactor ([#2300](https://github.com/agentscope-ai/CoPaw/pull/2300))**
    *   **Status:** Merged
    *   **Impact:** Major architectural update. This PR restructures how CoPaw handles memory and context, rewrites the summarizer prompt, and adds proactive injection of memory search results. This is likely the root cause of recent context instability discussions in the issues.
*   **[feat] Multi-Agent Background Tasks ([#2345](https://github.com/agentscope-ai/CoPaw/pull/2345))**
    *   **Status:** Merged
    *   **Impact:** Adds support for asynchronous background task execution for multi-agent collaboration, preventing blocking operations during complex agent workflows.
*   **[fix] Worker Process CPU Spike ([#2360](https://github.com/agentscope-ai/CoPaw/pull/2360))**
    *   **Status:** Merged
    *   **Impact:** Addresses a critical bug where CoPaw worker processes consumed 100% CPU under no load (specifically limiting workers to 1 as a hotfix).
*   **[fix] Batch Delete Data Loss ([#2350](https://github.com/agentscope-ai/CoPaw/pull/2350))**
    *   **Status:** Merged (Superseded by #2367)
    *   **Impact:** Attempts to fix the API payload mismatch in batch delete operations, though follow-up PR #2367 suggests further hardening was required immediately after.

## 4. Community Hot Topics
*   **[Discussion: Built-in Skills and MCPs](https://github.com/agentscope-ai/CoPaw/issues/280)** (21 comments)
    *   *Topic:* Users are debating which "Skills" (plugins) and "MCPs" (Model Context Protocol tools) should be pre-installed.
    *   *Insight:* This reflects a desire for better "out-of-the-box" usability rather than manual configuration for every interaction.
*   **[Huawei "Xiaoyi" (小艺) Channel Integration](https://github.com/agentscope-ai/CoPaw/issues/1911)** (19 comments)
    *   *Topic:* Users trying to connect CoPaw to Huawei's AI assistant are facing network/configuration errors, with chat history not syncing properly to the CoPaw console.
    *   *Insight:* High demand for integration with consumer-grade IoT/Smart Home ecosystems (Huawei), but debugging these proprietary channels is proving difficult for users.

## 5. Bugs & Stability
**Severity Ranking (High → Medium):**

1.  **[CRITICAL] Data Loss on Session Deletion ([#2327](https://github.com/agentscope-ai/CoPaw/issues/2327))**
    *   *Description:* Deleting one chat session caused **all** sessions to be wiped.
    *   *Status:* Mitigated via PRs #2350 and #2367. Users should ensure they are on the latest commit to avoid this.
2.  **[HIGH] Context/Memory "Hallucinations" ([#2092](https://github.com/agentscope-ai/CoPaw/issues/2092), [#1437](https://github.com/agentscope-ai/CoPaw/issues/1437))**
    *   *Description:* The context compression feature (specifically with GLM-5 model) is inventing fake conversation history and injecting it into the user context.
    *   *Root Cause:* Likely related to the new Summarizer prompt introduced in the v2.0 refactor.
3.  **[HIGH] 100% CPU Usage ([#2348](https://github.com/agentscope-ai/CoPaw/issues/2348))**
    *   *Description:* Processes max out CPU even when idle.
    *   *Status:* Fix merged in [#2360](https://github.com/agentscope-ai/CoPaw/pull/2360).
4.  **[MEDIUM] Feishu (Lark) WebSocket Disconnects ([#2336](https://github.com/agentscope-ai/CoPaw/issues/2336))**
    *   *Description:* Feishu connections drop after a few hours and never reconnect, requiring a full server restart.
    *   *Status:* Fix in progress via [#2311](https://github.com/agentscope-ai/CoPaw/pull/2311).
5.  **[MEDIUM] UI/Session Broken by QA Agent ([#2293](https://github.com/agentscope-ai/CoPaw/issues/2293))**
    *   *Description:* An agent executed a script that broke the web UI frontend (JS SyntaxError), locking the user out.

## 6. Feature Requests & Roadmap Signals
*   **Agentic Task Control:** Request for `HEARTBEAT_OK` / `CRON_OK` flags to allow models to explicitly decide if they want to send a message during scheduled tasks or heartbeats ([#2359](https://github.com/agentscope-ai/CoPaw/issues/2359)).
*   **Tabbed Multi-Agent UI:** Users want to switch between agents in the same tab rather than opening multiple browser windows ([#2281](https://github.com/agentscope-ai/CoPaw/issues/2281)).
*   **Skill Indexing/Tagging:** A proposal to add "tags" to skills so agents can find them via keyword rather than relying solely on LLM semantic understanding of descriptions ([#2323](https://github.com/agentscope-ai/CoPaw/issues/2323)).
*   **Private Gateway Support:** Users are requesting support for custom enterprise LLM gateways that do not follow the standard OpenAI format (custom headers/data formats) ([#2296](https://github.com/agentscope-ai/CoPaw/issues/2296)).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Memory Instability:** There is significant frustration regarding the "Context Compaction" feature. Users report it interrupts tasks ([#1974](https://github.com/agentscope-ai/CoPaw/issues/1974)) or hallucinates data ([#2092](https://github.com/agentscope-ai/CoPaw/issues/2092)), making long conversations unreliable.
    *   **Configuration Complexity:** New users struggle with setting up Skills, specifically when they involve custom scripts or references, as the UI currently only seems to support pasting text ([#2364](https://github.com/agentscope-ai/CoPaw/issues/2364)).
    *   **Localization:** Language settings (Chinese) revert to English after restart ([#1604](https://github.com/agentscope-ai/CoPaw/issues/1604)).

## 8. Backlog Watch
*   **Open Task List (Sprint 1):** The maintainers have published an open-source sprint board in [#2291](https://github.com/agentscope-ai/CoPaw/issues/2291), inviting contributions. Priority is given to P0/P1 tasks, though specific "Not Started" items need community adoption.
*   **Private Model Support:** The question regarding enterprise/private LLM gateway support ([#2296](https://github.com/agentscope-ai/CoPaw/issues/2296)) remains open, which is a key requirement for B2B adoption.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-27

## 1. Today's Overview
ZeptoClaw is in a **high-velocity release cycle** following the completion of the v0.9.0 milestone. The project released two patches (v0.9.1 and v0.9.0) within the last 24 hours, focusing heavily on stabilizing the new Google Vertex AI integration and refining the Telegram user experience. Development activity is intense, with 25 PRs merged—indicating a focused effort to clear the backlog of "Telegram UX" improvements and provider fixes. While the immediate user-facing bugs (like onboarding flow) are being resolved quickly, a new "Safety & Supply Chain" theme is emerging in the open issues, signaling a strategic shift toward enterprise-grade hardening.

## 2. Releases
### **v0.9.1 (Latest Patch)**
*   **Focus:** Onboarding UX and Credential Management.
*   **Changes:**
    *   **Reworked Onboarding:** Switched to a provider-first flow where users select a provider before configuring keys, preventing model-list clutter (PR #453).
    *   **Credential Fix:** Fixed a logic error where Claude CLI tokens were imported even if the Anthropic provider config was null (PR #455).
*   **View Release:** [v0.9.1 on GitHub](https://github.com/qhkm/zeptoclaw/releases/tag/v0.9.1)

### **v0.9.0 (Major Feature Release)**
*   **Highlights:**
    *   **Google Vertex AI:** First-class support for Gemini models via regional endpoints with ADC (Application Default Credentials) auto-refresh. Zero manual token management required.
    *   **Telegram UX:** Added emoji reaction indicators (👀 on receipt, ✅ on completion) so users know when the bot is processing.
*   **View Release:** [v0.9.0 on GitHub](https://github.com/qhkm/zeptoclaw/releases/tag/v0.9.0)

## 3. Project Progress
The project made significant strides in **Channel UX** and **Provider extensibility**:

*   **Telegram Experience Overhaul:** A massive stack of PRs was merged to make the Telegram bot production-ready.
    *   **Threading:** Bot responses now visually thread back to the original user message (PR #429).
    *   **Multimedia:** Added support for photos and image documents (PR #420).
    *   **Typing Indicators:** Replaced static reactions with dynamic "typing..." indicators (PR #392).
    *   **XSS Protection:** Implemented HTML attribute escaping in rendered links to prevent injection attacks (PR #443).
*   **Provider Ecosystem:**
    *   **Google Vertex AI:** Successfully merged the provider implementation (PR #447), allowing enterprise Gemini authentication.
    *   **Model Discovery:** Refined the model selection list to filter out non-chat models (like `dall-e-2` or `babbage-002`) during onboarding (PR #453).

## 4. Community Hot Topics
*   **[OPEN] Bug: Telegram Message Chunking**
    *   **Issue:** [#456](https://github.com/qhkm/zeptoclaw/issues/456)
    *   **Discussion:** Despite previous fixes, long messages still hit the 4096 char limit and send errors only to logs. Users are left with "silent failures."
    *   **Why it matters:** This is a critical regression for active Telegram users who rely on the bot for long-form summaries.
*   **[OPEN] Safety: SSRF & Network Validation**
    *   **Issue:** [#450](https://github.com/qhkm/zeptoclaw/issues/450)
    *   **Discussion:** There is a strong demand for validating `api_base` endpoints during config loading to prevent SSRF (Server-Side Request Forgery) attacks.
    *   **Underlying Need:** Enterprises deploying ZeptoClaw need assurances that the agent won't probe internal infrastructure based on malicious config inputs.
*   **[OPEN] Privacy-Aware Routing**
    *   **Issue:** [#451](https://github.com/qhkm/zeptoclaw/issues/451)
    *   **Discussion:** Users want the ability to route sensitive prompts to local models and non-sensitive to cloud.
    *   **Underlying Need:** Data sovereignty and hybrid-cloud deployment flexibility.

## 5. Bugs & Stability
*   **[CRITICAL] CLI: Disabled Feature UX Error**
    *   **Issue:** [#457](https://github.com/qhkm/zeptoclaw/issues/457)
    *   **Status:** Open
    *   **Impact:** Users running a build without the "panel" feature get a raw `clap` error (unrecognized subcommand) instead of helpful guidance.
*   **[HIGH] Telegram: Message Chunking Failure**
    *   **Issue:** [#456](https://github.com/qhkm/zeptoclaw/issues/456)
    *   **Status:** Fix in Progress (See PR #458)
    *   **Impact:** Responses >4096 chars fail silently. A fix PR (#458) is already open and implements `chunk_message()` logic.
*   **[MEDIUM] Channels: ACP HTTP Initialization**
    *   **Issue:** [#388](https://github.com/qhkm/zeptoclaw/issues/388)
    *   **Status:** Closed
    *   **Impact:** Protocol bug in HTTP handshake/notification semantics was fixed today.

## 6. Feature Requests & Roadmap Signals
*   **Supply Chain Security:** The sudden influx of issues regarding **SHA256 verification** ([#449](https://github.com/qhkm/zeptoclaw/issues/449)) for skill downloads and **Declarative Policy-as-YAML** ([#448](https://github.com/qhkm/zeptoclaw/issues/448)) suggests the project is moving toward a "Security Hardening" phase. NemoClaw features are being actively ported.
*   **Inference Routing:** The request for privacy-based routing ([#451](https://github.com/qhkm/zeptoclaw/issues/451)) indicates a desire for "Hybrid" agents that can seamlessly switch between local and cloud LLMs based on prompt context.
*   **Smart Onboarding:** The quick merge of PR #453 confirms that simplifying the setup process for multi-provider environments is a high priority.

## 7. User Feedback Summary
*   **Positive:** The Telegram UX improvements (reactions, threading) directly address user frustrations regarding bot responsiveness in group chats.
*   **Negative:** The "silent failure" of long messages in Telegram remains a pain point, though a PR is pending.
*   **Confusion:** The onboarding process was confusing due to an overwhelming list of legacy models; this was addressed in v0.9.1.

## 8. Backlog Watch
*   **Safety & Policy:** Issues [#448](https://github.com/qhkm/zeptoclaw/issues/448), [#449](https://github.com/qhkm/zeptoclaw/issues/449), and [#450](https://github.com/qhkm/zeptoclaw/issues/450) represent a significant architectural uplift. They are currently open and unassigned but are critical for enterprise adoption.
*   **CLI Polish:** Issue [#457](https://github.com/qhkm/zeptoclaw/issues/457) (panel subcommand UX) needs attention to improve the experience for users on slim builds.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest (2026-03-27)

## 1. Today's Overview
EasyClaw is currently in a low-development phase with code changes halted, as indicated by the absence of pull requests and new releases in the last 24 hours. While the repository remains quiet on the technical integration side, community engagement persists, specifically highlighted by a new proposal regarding the strategic direction of the "RivonClaw" application built on the EasyClaw ecosystem. The project appears to be shifting focus towards growth and positioning rather than immediate feature implementation.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
*No merged or closed Pull Requests were recorded in the last 24 hours.* Feature development and bug fixes appear to be paused or undergoing offline review.

## 4. Community Hot Topics
**Community Growth Strategy Proposal**
*   **Issue:** [#27 Proposal: Community Growth Strategy for RivonClaw](https://github.com/gaoyangz77/rivonclaw/issues/27)
*   **Details:** User *Gingiris* submitted a strategic proposal aimed at refining the "digital butler" positioning of RivonClaw (the app built on EasyClaw). The proposal leverages the user's experience helping AFFiNE grow to 33k stars.
*   **Analysis:** The community is looking for validation of the project's market fit. The mention of "246 stars in ~6 weeks" suggests the project has early traction, but users and observers are eager to see a defined strategy to convert that early interest into sustained ecosystem growth. The focus is shifting from "building" to "marketing" and "positioning."

## 5. Bugs & Stability
*No critical bugs, crashes, or stability issues were reported in the last 24 hours.*

## 6. Feature Requests & Roadmap Signals
*   **Marketing & Positioning:** The primary signal comes from Issue #27, suggesting a need for better documentation of the "Digital Butler" use case and differentiation from other AI agents.
*   **Ecosystem Expansion:** While not a code feature request, the proposal implies a roadmap priority toward community tooling and ambassadorship to drive adoption of the EasyClaw/RivonClaw stack.

## 7. User Feedback Summary
Feedback is currently limited to strategic observation rather than product usage experience. The contributor noted strong early traction ("246 stars in ~6 weeks") and praised the "digital butler" positioning. There are no reports of user dissatisfaction or friction regarding the tool's performance today.

## 8. Backlog Watch
*   **Strategic Input Needed:** [Issue #27](https://github.com/gaoyangz77/rivonclaw/issues/27) is currently open with 0 comments and 0 reactions. It requires maintainer review to determine if the proposed growth strategies will be adopted.
*   **General Status:** With no PR activity, the backlog of technical items is likely static.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*