# OpenClaw Ecosystem Digest 2026-04-12

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-12 00:13 UTC

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

# OpenClaw Project Digest: 2026-04-12

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high-velocity development cycle, with **500 issues and 500 pull requests updated in the last 24 hours** alone. The project is rapidly iterating on beta releases (`v2026.4.11-beta.1` released just yesterday), heavily focused on integrating the new "Codex" provider (OpenAI OAuth) and advancing long-term agentic capabilities. While feature velocity is high, stability remains a concern; there are multiple reports of regressions in recent versions affecting core functionality like WhatsApp media, iMessage loops, and cron scheduling, indicating a challenging testing phase for the upcoming `2026.4.x` stable branch.

## 2. Releases
### **v2026.4.11-beta.1** (Released: 2026-04-11)
*   **Dreaming & Memory-Wiki:** Added ChatGPT import ingestion and new UI subtabs (`Imported Insights`, `Memory Palace`) to inspect imported source chats and wiki pages directly from the interface. ([#64505](https://github.com/openclaw/openclaw/pull/64505))
*   **Control UI/Webchat:** Assistant media/repl rendering improvements.

### **v2026.4.10** (Released: 2026-04-10)
*   **Codex Integration:** Added a bundled `codex` provider and plugin-owned app-server harness. Models prefixed with `codex/gpt-*` now use Codex-managed auth and native threads, while `openai/gpt-*` remains on the standard provider path. ([#64298](https://github.com/openclaw/openclaw/pull/64298))
*   **Active Memory:** Unspecified updates to memory subsystem.

## 3. Project Progress
*   **GPT-5.4 / Codex Agentic Parity:** Significant effort is underway to close the feature gap between the new `codex` provider and standard OpenAI models. PR [#64679](https://github.com/openclaw/openclaw/pull/64679) seeks to auto-activate "strict-agentic" modes for GPT-5 to ensure correct liveness and completion-gate behavior.
*   **Cron & Scheduling Fixes:** Several PRs were merged or are in review to fix critical issues with the cron system. PR [#64329](https://github.com/openclaw/openclaw/pull/64329) ensures an empty heartbeat config `{}` is treated as disabled (preventing massive token leak), and [#62789](https://github.com/openclaw/openclaw/pull/62789) adds the backend runtime for command payload execution.
*   **Channel Specifics:**
    *   **Google Chat:** PR [#65058](https://github.com/openclaw/openclaw/pull/65058) fixes the parser to accept `addedToSpace` and `removedFromSpace` lifecycle payloads, which were previously rejected.
    *   **Feishu:** PR [#62572](https://github.com/openclaw/openclaw/pull/62572) tightens ACP block visibility fallback behavior.
    *   **WhatsApp:** Security improvements in PR [#42906](https://github.com/openclaw/openclaw/pull/42906) block non-self messages in self-chat mode to prevent loops.

## 4. Community Hot Topics
*   **GPT-5.4 / Codex Agentic Parity Tracker ([#64227](https://github.com/openclaw/openclaw/issues/64227))**
    *   *Status:* Open | 21 Comments
    *   *Topic:* The master tracker for ensuring the new Codex provider (GPT-5.4) behaves identically to the standard OpenAI provider regarding tool contracts, auth, and permissions. The community is actively watching for "unknown model" errors and auth failures.
*   **Time Awareness & Reminders ([#10841](https://github.com/openclaw/openclaw/issues/10841))**
    *   *Status:* Open | 20 Comments
    *   *Topic:* A persistent issue where agents fail to know the current time accurately, causing reminders (e.g., "in 30 minutes") to be set for wrong times. Users are frustrated by the "guessing" behavior of the cron scheduler.
*   **Secrets Management Encryption ([#7916](https://github.com/openclaw/openclaw/issues/7916))**
    *   *Status:* Open | 18 Comments
    *   *Topic:* High demand for encrypted API key storage. Currently, keys sit in plain text in `auth-profiles.json`. Users want better security defaults, potentially for enterprise adoption.
*   **OpenAI Codex OAuth Broken? ([#64687](https://github.com/openclaw/openclaw/issues/64687))**
    *   *Status:* Closed | 10 Comments
    *   *Topic:* Users reported `invalid_scope` errors immediately after configuring the new OAuth flow in v2026.4.10, indicating possible friction in the new setup wizard.

## 5. Bugs & Stability
*   **[CRITICAL] Reminder/Alarm Time Failures ([#10841](https://github.com/openclaw/openclaw/issues/10841))**
    *   *Severity:* High. Core utility feature is unreliable.
    *   *Details:* Agent lacks precise time knowledge, leading to incorrect cron timestamps.
*   **[CRITICAL] Regression: Coding Agent Inactivity ([#62505](https://github.com/openclaw/openclaw/issues/62505))**
    *   *Severity:* High. Productivity blocker.
    *   *Details:* Since v2026.4.2, a specialized coding agent produces only vague status updates and apologies, failing to complete tasks. Fix PR [openclaw/openclaw#64679](https://github.com/openclaw/openclaw/pull/64679) may address this.
*   **[HIGH] iMessage Echo Loop ([#59363](https://github.com/openclaw/openclaw/issues/59363))**
    *   *Severity:* High. UX breaking.
    *   *Details:* Assistant messages are reflected back as user input, causing infinite conversation loops.
*   **[HIGH] WhatsApp Media Silently Failing ([#62214](https://github.com/openclaw/openclaw/issues/62214) & [#62496](https://github.com/openclaw/openclaw/issues/62496))**
    *   *Severity:* High. Feature broken.
    *   *Details:* Voice notes and PDFs are not delivered/sent. Related to plugin refactoring in 2026.4.6-beta.1.
*   **[MED] Completion Cache Crashes ([#63510](https://github.com/openclaw/openclaw/issues/63510))**
    *   *Severity:* Medium. Install/Update breaking.
    *   *Details:* `qa/scenarios/index.md` is missing from the distributed npm package, causing `openclaw completion` to crash.

## 6. Feature Requests & Roadmap Signals
*   **Encrypted Secrets ([#7916](https://github.com/openclaw/openclaw/issues/7916)):** A strong candidate for inclusion given the comment count and security implications.
*   **GPT-5.4 "Strict Agentic" Mode:** PR [#64679](https://github.com/openclaw/openclaw/pull/64679) suggests the roadmap includes a "strict-agentic" contract that will likely become the default for high-end models to ensure they don't "early exit" tasks prematurely.
*   **Local LLM Switching:** PRs [#63330](https://github.com/openclaw/openclaw/pull/63330) and [#63503](https://github.com/openclaw/openclaw/pull/63503) indicate work on a "model-switch" extension, suggesting OpenClaw wants to better support users running local LLMs (Ollama, LM Studio, etc.) with dynamic backend switching.

## 7. User Feedback Summary
*   **Frustration with "Vague" Agents:** Users are reporting that agents (especially coding agents) are apologizing for vagueness rather than just executing tasks ([#62505](https://github.com/openclaw/openclaw/issues/62505)). This suggests the model constraints or safety filters are currently too tight.
*   **OAuth Confusion:** The distinction between `openai` (API Key) and `openai-codex` (OAuth) is causing setup confusion, with users accidentally selecting the wrong provider or facing scope errors ([#30533](https://github.com/openclaw/openclaw/issues/30533)).
*   **Platform Specific Pain Points:**
    *   **Feishu:** Filename encoding issues (Chinese characters become percent-encoded) ([#40770](https://github.com/openclaw/openclaw/issues/40770)).
    *   **Discord:** Voice connectivity is flaky due to dependency version mismatches in Docker ([#63933](https://github.com/openclaw/openclaw/issues/63933)).

## 8. Backlog Watch
*   **Stale Context Confusion ([#32296](https://github.com/openclaw/openclaw/issues/32296)):** Open since March. Agents replying to the *previous* message instead of the current one indicates a deep session state management bug that needs attention.
*   **WebSocket Auth 4008 ([#30458](https://github.com/openclaw/openclaw/issues/30458)):** A stale issue affecting users on specific cloud providers (Alibaba) where WebSocket auth fails immediately after handshake.
*   **Signal Daemon Race Condition ([#22676](https://github.com/openclaw/openclaw/issues/22676)):** A race condition during gateway restarts (`SIGUSR1`) causes orphaned processes. This has been open since February and affects reliability of auto-restarts.

---

## Cross-Ecosystem Comparison

# Ecosystem Digest: Comparative Analysis (2026-04-12)

## 1. Ecosystem Overview
The open-source AI agent ecosystem is currently undergoing a **stabilization phase** following a burst of rapid feature expansion. Projects are shifting from aggressive capability addition (MCP support, multi-channel integration) to addressing **technical debt** and **production hardening**. There is a clear trend toward **architectural decoupling** (microkernels, workspace splits) and **runtime security tightening** (sandboxing, credential management). While innovation remains high in "Agentic" capabilities (memory, tool use), user sentiment is increasingly focused on **reliability**, specifically regarding regressions in core messaging, scheduling, and cross-platform compatibility (Windows/ARM).

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | Beta (v2026.4.11) | 🟡 High Velocity / Unstable |
| **IronClaw** | 16 | 50 | v0.25.0 (New) | 🟡 Feature Rich / Regressions |
| **NanoBot** | 15 | 46 | No Release (v0.15+) | 🟡 Bug Bash Phase |
| **ZeroClaw** | 34 | 27 | No Release (v0.6.9) | 🟠 Architectural Transition |
| **Moltis** | 8 | 15 | No Release | 🟢 Stable / Securing |
| **CoPaw** | 24 | 14 | v1.0.2 | 🟠 Windows/ARM Issues |
| **NanoClaw** | 3 | 19 | No Release | 🟢 Expanding Ecosystem |
| **NullClaw** | 2 | 8 | No Release | 🟢 Patching Regressions |
| **PicoClaw** | 12 | 9 | Nightly (v0.2.6) | 🟠 Connectivity Regression |
| **LobsterAI** | 1 | 6 | No Release | 🟢 Low Friction |
| **TinyClaw** | 0 | 0 | Stagnant | ⚪ Inactive |
| **ZeptoClaw** | 0 | 0 | Stagnant | ⚪ Inactive |
| **EasyClaw** | 0 | 0 | Stagnant | ⚪ Inactive |

*\*Health Score based on velocity, bug severity, and community sentiment.*

## 3. OpenClaw's Position
**Advantages:** OpenClaw demonstrates the highest absolute development velocity (500+ issues/PRs) and is leading the frontier in **provider integration** (new OpenAI Codex/GPT-5.4 OAuth) and **agentic memory features** (Memory Palace, Dreaming). It appears to be the primary choice for users pushing the limits of LLM capabilities.
**Disadvantages:** This velocity comes at a cost. OpenClaw is currently suffering from **critical regressions** in basic utilities (Cron, iMessage, WhatsApp) and "vague agent" behavior, suggesting instability in the beta branch. Peers like **Moltis** and **LobsterAI** are offering more stable user experiences right now by focusing on installation polish and core bug fixing rather than bleeding-edge model features.

## 4. Shared Technical Focus Areas
*   **Credential & Secrets Security** (OpenClaw, NanoClaw, NullClaw)
    *   *Projects:* OpenClaw (#7916), NanoClaw (#1744).
    *   *Trend:* Moving away from plaintext API keys. NanoClaw enforced credential proxies; OpenClaw users are demanding encryption.
*   **Cron & Scheduling Reliability** (OpenClaw, NanoBot, NullClaw, PicoClaw)
    *   *Projects:* OpenClaw (#10841), NanoBot (#3037), NullClaw (#783), PicoClaw (#2474).
    *   *Trend:* "Silent failures" in scheduling agents are a universal pain point. Projects are racing to fix token leaks and empty configuration handling.
*   **Docker/Sandboxing Hardening** (NanoClaw, NullClaw, ZeroClaw)
    *   *Projects:* ZeroClaw (#5153 - Landlock), NullClaw (#801 - Mount args).
    *   *Trend:* Security features (Landlock, Firejail) are breaking workflows (file access). Users are demanding a balance between security and usability.
*   **Observability & Debugging** (IronClaw, ZeroClaw, CoPaw)
    *   *Projects:* ZeroClaw (OpenTelemetry), IronClaw (Streaming tool calls).
    *   *Trend:* As agents become more complex, "black box" failures are frustrating users. There is a strong push for better logging and state visibility.

## 5. Differentiation Analysis
*   **Architecture:**
    *   **OpenClaw/IronClaw:** Heavyweight, feature-rich monoliths (transitioning to microkernels). Best for "power users."
    *   **ZeroClaw:** explicitly pursuing a **Microkernel (WASM)** architecture to separate the orchestrator from channels/plugins.
    *   **NanoBot/Moltis:** Lightweight, focus on core agent loops and deterministic compaction over complex memory systems.
*   **Target Users:**
    *   **IronClaw/OpenClaw:** DevOps and Automation power users (Raspberry Pi, extensive CLI tools).
    *   **LobsterAI/CoPaw:** End-user/consumer focus (Avatars, Windows installers, UI-heavy, "App-like" experience).
    *   **Moltis:** Privacy-conscious and security-hardened technical users (focus on allowlists/determinism).
*   **Memory Management:**
    *   **OpenClaw:** Experimental "Dreaming" and "Memory Palace" (high token cost, high complexity).
    *   **Moltis:** Moving to "deterministic compaction" to save tokens and reduce latency (efficiency focus).

## 6. Community Momentum & Maturity
*   **High Velocity / Unstable:** **OpenClaw** and **IronClaw** are rapidly releasing but are currently battling high-severity regressions (upgrade failures, media bugs).
*   **Stabilizing:** **NanoBot** and **Moltis** are in "Bug Bash" modes, aggressively closing critical security and logic gaps. This signals a transition toward maturity.
*   **Maturing UX:** **LobsterAI** is solving "boring" but critical friction (installers, search UX), which often precedes widespread enterprise adoption.
*   **Stagnant:** **TinyClaw, ZeptoClaw, EasyClaw** show zero activity, appearing effectively dead or abandoned.

## 7. Trend Signals for AI Developers
1.  **The "Agentic Parity" Gap:** As new models arrive (GPT-5.4, Claude 4.x), their native "agentic" capabilities (tool use, strict modes) vary wildly. Developers must build **abstraction layers** (like OpenClaw's "Strict Agentic" mode) to normalize model behavior, or risk "vague" agent failures.
2.  **Local vs. Hosted Tension:** There is a massive surge in demand for **local LLM switching** (OpenClaw, PicoClaw) and **hosted OAuth** (OpenClaw Codex) simultaneously. The winning architecture supports fluid transition between local (privacy/speed) and hosted (intelligence) models within the same session.
3.  **Tool Standardization (MCP):** Model Context Protocol (MCP) is becoming the de-facto standard for non-LLLM extensions. **NanoClaw** and **LobsterAI** are rapidly integrating MCPs (Todoist, Google Calendar), signaling a shift away from proprietary "Skill" definitions toward standardized protocol tools.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the **NanoBot Project Digest** for **2026-04-12**.

### 1. Today's Overview
NanoBot is experiencing a period of **high-intensity development and maintenance**, with **46 Pull Requests** and **15 Issues** updated in the last 24 hours. The project is actively addressing a significant "Bug Bash" phase, with developers closing out critical stability issues related to Cron logic, message truncation, and exception handling. Simultaneously, major architectural features are being proposed, including **Automatic Skill Discovery** and **Agent Checkpointing**, signaling a push towards more autonomous and resilient agent behaviors. While stability fixes are being rapidly merged, the community has highlighted serious reliability concerns regarding resource exhaustion and memory management.

### 2. Latest Releases
**No new releases** were published in the last 24 hours.
*(The codebase remains at version 0.15+ based on local reports, with critical fixes pending a release).*

### 3. Project Progress
**Recent Merges & Closures:**
*   **Cron Service Infinite Loop (#3037):** A critical bug causing runaway LLM spending due to re-entrant cron job loading was identified and closed.
*   **Message Truncation Fix (#3004):** A regex bug causing false positives in "think" stripping has been closed.
*   **Tool Result Consistency (#2943, #3045):** Fixes for "invalid params / tool call result does not follow tool call" errors were merged/closed, ensuring tool results are preserved even on fatal errors.
*   **QQ & WeCom Media Support (#3044):** Full media handling (images/files) was added for QQ and WeCom channels.

**Active Development:**
*   **Skill Discovery (#3039, #3048):** Implementation of auto-extracting reusable skills from conversation history is in open PR stage.
*   **SQLite Backend for Dream (#3015):** A proposal to replace Git-based version control in the "Dream" memory system with SQLite to avoid repository conflicts.

### 4. Community Hot Topics
*   **[Feature Request] Automatic Skill Discovery and Generation** [#2927](https://github.com/HKUDS/nanobot/issues/2927)
    *   **Activity:** 9 comments, High engagement.
    *   **Analysis:** Users want NanoBot to move from passive tool execution to active learning. The request is for the agent to recognize recurring patterns in its own behavior and proactively generate new skills, reducing manual configuration.
*   **[Proposal] Use ContextVar for tool routing** [#2220](https://github.com/HKUDS/nanobot/issues/2220)
    *   **Activity:** 3 comments, Long-standing discussion (opened Mar 18).
    *   **Analysis:** A deep technical discussion regarding async-safety in the tool routing layer. The community is debating architectural changes to harden the system against race conditions.

### 5. Bugs & Stability
**Critical Severity:**
*   **Telegram Bot Connection Pool Exhaustion** [#3050](https://github.com/HKUDS/nanobot/issues/3050)
    *   **Report:** The Telegram channel fails to deliver messages due to connection pool exhaustion.
    *   **Fix:** A fix PR [#3053](https://github.com/HKUDS/nanobot/pull/3053) (preventing retry amplification) is currently **OPEN** and pending merge.
*   **DuckDuckGo Web Search Hangs Entire System** [#2828](https://github.com/HKUDS/nanobot/issues/2828)
    *   **Report:** Performing a web search causes a full system freeze that cannot even be cancelled via Ctrl+C.
    *   **Status:** **OPEN** - No fix PR yet. High impact on usability.

**High Severity:**
*   **Retry Amplification & Silent Message Loss** [#3054](https://github.com/HKUDS/nanobot/issues/3054)
    *   **Report:** Broad `except Exception` catching in channel implementations masks errors and causes infinite retries.
    *   **Status:** Fix in PR [#3053](https://github.com/HKUDS/nanobot/pull/3053).
*   **Session Bloat & Silent Failure** [#3029](https://github.com/HKUDS/nanobot/issues/3029)
    *   **Report:** Sessions grow unbounded until they hit the context window (8k tokens), at which point the agent stops responding ("I've completed processing") without actually doing so.
    *   **Status:** **OPEN**.

### 6. Feature Requests & Roadmap Signals
*   **Agent Checkpointing & Resume** [#3027](https://github.com/HKUDS/nanobot/issues/3027)
    *   Users want the ability to rollback or "fork" an agent loop if it starts going in the wrong direction, rather than losing all progress by stopping the task.
*   **Dream Memory Consolidation Overhaul** [#3047](https://github.com/HKUDS/nanobot/issues/3047)
    *   **Signal:** The community is requesting a rewrite of the "Dream" memory system. The current 2-hour write cycle causes context overflow before consolidation happens. A move to SQLite (PR #3015) seems to be the immediate roadmap answer.
*   **Multi-Model Provider Fallback** [#1201](https://github.com/HKUDS/nanobot/pull/1201)
    *   An open PR adds the ability to automatically fallback to alternative models if the primary one fails, improving reliability.

### 7. User Feedback Summary
*   **Positive:** Users are contributing significant localization efforts (Vietnamese #1164, Indonesian #2990) and complex integrations (Calendar tools #3049, Lark global support #3046), indicating high adoption and willingness to extend the core.
*   **Pain Points:**
    *   **Observability:** Users are struggling with "Silent Failures" (e.g., messages just not sending #3050, or agents claiming to be done while doing nothing #3029).
    *   **Resource Management:** The "Heartbeat" feature (#3028) was reported to be buggy, creating duplicate scheduled tasks instead of reading context as intended.
    *   **Local LLM Integration:** Issues persist with local Ollama integrations (#2913).

### 8. Backlog Watch
*   **ContextVar Routing Proposal** [#2220](https://github.com/HKUDS/nanobot/issues/2220): Open for nearly a month with 3 comments. A small but critical async-safety fix that needs attention.
*   **DuckDuckGo System Hang** [#2828](https://github.com/HKUDS/nanobot/issues/2828): Open for 7 days. A critical stability bug that makes the agent unusable in web-search scenarios.
*   **Skill Discovery (Original Request)** [#2927](https://github.com/HKUDS/nanobot/issues/2927): While PRs exist, the original issue tracks the broader requirement of "Automatic" generation, which may not be fully covered by the current extraction implementation.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-04-12

## 1. Today's Overview
ZeroClaw is experiencing a period of intense architectural transition and community activity. The project is currently digesting the major "workspace split" (v0.6.9), which has refactored the codebase into 16 crates but introduced friction in installation scripts and documentation. Activity is high with 34 updated Issues and 27 PRs in the last 24 hours. While core development is focused on the "Microkernel" architecture (RFCs) and advanced provider features (native thinking), there are rising stability concerns regarding memory management, configuration validation, and the web dashboard experience.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
**Merged / Closed Advances:**
*   **Architecture & Governance:** The community has closed initial RFCs regarding the **Microkernel Transition (v0.7.0 → v1.0.0)** ([#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)) and **Binary Size Reduction** ([#5272](https://github.com/zeroclaw-labs/zeroclaw/issues/5272)), signaling approval to move forward with the workspace decomposition.
*   **CI/CD Quality:** Fixes for clippy lint gates were merged to ensure all workspace crates and optional features (like Matrix) are properly linted ([#5635](https://github.com/zeroclaw-labs/zeroclaw/issues/5635), [#4656](https://github.com/zeroclaw-labs/zeroclaw/issues/4656)).
*   **Core Fixes:** A fix for the WhatsApp self-chat mode ([#5260](https://github.com/zeroclaw-labs/zeroclaw/issues/5260)) and the `sop` subcommand registration ([#5624](https://github.com/zeroclaw-labs/zeroclaw/pull/5624)) were advanced or closed.

**Active Development:**
*   **New Channels:** Implementation of the **LINE Messaging API** channel is in active PR review ([#5642](https://github.com/zeroclaw-labs/zeroclaw/pull/5642)), significantly expanding reach in Southeast Asia.
*   **Provider Features:** A major PR adding **Native Extended Thinking** for Anthropic and Bedrock providers is open ([#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652)), aiming to improve reasoning depth via API-level budgeting.

## 4. Community Hot Topics
**High Engagement Issues:**
*   **The "Memory Snowball" Bug:** The most discussed active issue is a critical bug where `auto_save` stores `[Memory context]` recall blobs recursively ([#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)). Users are reporting memory exhaustion as the system repeatedly saves previous recalls inside new recalls.
*   **Web Dashboard Availability:** Users are frustrated that the Web UI remains broken out-of-the-box, requiring manual build steps despite the documentation suggesting it should work ([#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)).
*   **Architectural Direction:** A series of RFCs by `WareWolf-MoonWall` regarding Governance ([#5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577)), Documentation ([#5576](https://github.com/zeroclaw-labs/zeroclaw/issues/5576)), and Engineering Infrastructure ([#5579](https://github.com/zeroclaw-labs/zeroclaw/issues/5579)) are sparking discussion on how the project scales from v0.7 to v1.0.
*   **Sandboxing & Security:** Users have flagged that the Landlock shell sandbox breaks subsequent workspace file access ([#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153)), a critical workflow blocker for Linux users.

## 5. Bugs & Stability
**Critical / High Severity:**
1.  **Memory Exhaustion (Recursive):** `auto_save` logic creates a loop of increasing memory size ([#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)).
2.  **Web Dashboard Unavailable:** S1 workflow blocker; UI fails to load with build instructions prompt ([#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)).
3.  **Landlock Sandbox Poisoning:** S1 issue on Linux where tool calls permanently break process access to files ([#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153)).
4.  **Install Script Outdated:** `install.sh` is broken for the new v0.6.9 workspace layout, blocking source installs ([#5651](https://github.com/zeroclaw-labs/zeroclaw/issues/5651)).
5.  **Z.AI Provider Failure:** S1 error with `glm-5-turbo` returning code 1214 after context trimming ([#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636)).
6.  **Port Conflict:** The systemd service auto-starts on boot, causing `Address already in use` errors for manual runs ([#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628)).

**Medium / Regression:**
*   **Config Spurious Warnings:** Valid `api_key` configs throw "Unknown config key" warnings in v0.6.9 ([#5629](https://github.com/zeroclaw-labs/zeroclaw/issues/5629)).
*   **Session Persistence:** Web dashboard creates a new session on every page reload despite `session_persistence = true` ([#5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634)).

## 6. Feature Requests & Roadmap Signals
*   **Workspace Split Refinements:** Several PRs indicate the immediate roadmap is cleaning up the workspace split, including moving channel implementations out of the orchestrator ([#5599](https://github.com/zeroclaw-labs/zeroclaw/issues/5599), [#5639](https://github.com/zeroclaw-labs/zeroclaw/pull/5639)) and formalizing WIT interfaces for plugins ([#5586](https://github.com/zeroclaw-labs/zeroclaw/issues/5586)).
*   **Observability:** A formal move to standardize on **OpenTelemetry** is proposed ([#5585](https://github.com/zeroclaw-labs/zeroclaw/issues/5585)).
*   **UI/UX Improvements:** Users are requesting drag-and-drop image support for the Web Chat UI ([#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649)).
*   **Performance:** There is a proposal to replace SQLite O(n) vector search with Approximate Nearest Neighbor (ANN) indexing ([#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570)).

## 7. User Feedback Summary
*   **Frustration with Defaults:** Users expect the Web Dashboard to work out-of-the-box and are encountering build errors, leading to S1 severity reports.
*   **Configuration Drift:** The workspace split has caused configuration keys (`api_key`) and installation paths to break, creating friction for upgraders.
*   **Memory Anxiety:** The recursive memory bug has users worried about resource consumption on constrained devices (like Raspberry Pis).
*   **Security vs. Usability:** The Landlock sandbox is effectively locking users out of their own files after a tool runs, forcing them to choose between security and functionality.

## 8. Backlog Watch
*   **Raspberry Pi Support:** A request for ARMv7/Raspberry Pi Model B binaries ([#3043](https://github.com/zeroclaw-labs/zeroclaw/issues/3043)) was recently updated but remains closed without a clear resolution for hardware constrained users.
*   **Docs for Workspace Split:** The `AGENTS.md` documentation is actively being updated ([#5625](https://github.com/zeroclaw-labs/zeroclaw/issues/5625), [#5638](https://github.com/zeroclaw-labs/zeroclaw/pull/5638)), but the sheer volume of RFCs suggests documentation is struggling to keep pace with the architectural changes.
*   **Vector Search Performance:** The O(n) search performance issue ([#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570)) is a known limitation that lacks an assigned timeline for resolution.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-04-12

## 1. Today's Overview
PicoClaw is experiencing a **high-velocity development phase** characterized by significant architectural refactoring and aggressive nightly builds. The project released `v0.2.6-nightly` just one day after the previous stable release, indicating a push to address rapid user feedback. Activity is robust, with **12 issues and 9 PRs updated** in the last 24 hours. However, the project appears to be in a transient state of instability; users are reporting regressions in the `v0.2.5` and `v0.2.6` versions, specifically regarding WebSocket connectivity, while core refactoring efforts (config v3, session isolation) are underway to resolve long-standing technical debt.

## 2. Releases
**New Release: `v0.2.6-nightly (20260411)`**
The project has shipped a nightly build immediately following the standard releases, suggesting critical hotfixes or a shift to a "rolling release" mindset for stability.
*   **Source:** [nightly: v0.2.6-nightly.20260411.748ac58d](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)
*   **Status:** Automated unstable build.
*   **Context:** This nightly likely addresses the flurry of bug reports opened on April 11 regarding WebSocket failures in `v0.2.5`/`v0.2.6`.

## 3. Project Progress
**Active Refactoring & Feature Advancement:**
*   **Config System Overhaul (PR #2481):** A major pull request by maintainer `cytown` proposes refactoring `config.Channel` to support multiple instances. This updates the config version to **v3**, suggesting a breaking change that allows more flexible channel configurations (e.g., multiple Telegram instances or distinct webhooks).
*   **Cron Session Isolation (PR #2474):** A fix was merged (or is close to merged) ensuring that Cron jobs use independent sessions (`cron-{jobID}-{timestamp}`), preventing conversation history from leaking between scheduled task runs.
*   **Grafana Integration (PR #2251):** Development continues on a native input channel for Grafana Alertmanager, allowing PicoClaw to act as an alerting receiver.

## 4. Community Hot Topics
**User Sentiment & Discussion:**
*   **Community Moderation & Engagement (Issue #2433):**
    *   [Discussion Link](https://github.com/sipeed/picoclaw/issues/2433)
    *   **Analysis:** Users expressed dissatisfaction with the lack of official presence on the Discord server, contrasting it with the active WeChat community. While the issue is closed, it highlights a gap in community management for non-Chinese speaking users.
*   **Ollama Cloud Support (Issue #2225):**
    *   [Feature Request](https://github.com/sipeed/picoclaw/issues/2225)
    *   **Analysis:** There is a clear demand for credential support for Ollama Cloud, indicating users are moving beyond local LLM deployments to hosted solutions.

## 5. Bugs & Stability
**Critical Stability Concerns:**
*   **WebSocket Connectivity Regression (High Severity):**
    *   Issues: [#2319](https://github.com/sipeed/picoclaw/issues/2319), [#2463](https://github.com/sipeed/picoclaw/issues/2463)
    *   **Report:** Users report WebSocket connections fail in `v0.2.5` and `v0.2.6` (worked in `v0.2.3-v0.2.4`).
    *   **Related:** Confusion over `PICOCLAW_GATEWAY_TOKEN` ([#2438](https://github.com/sipeed/picoclaw/issues/2438)), where the env var does not auth the WebSocket channel as expected.
*   **Windows Path Handling (Medium Severity):**
    *   Issue: [#2472](https://github.com/sipeed/picoclaw/issues/2472)
    *   **Report:** The `list_dir` tool crashes on Windows due to backslash path separators not being compatible with `os.Root`.
*   **Provider API Failures:**
    *   Issue: [#2480](https://github.com/sipeed/picoclaw/issues/2480), [#2479](https://github.com/sipeed/picoclaw/issues/2479)
    *   **Report:** "Proactive compact" fails due to incorrect model parameter usage, and Nvidia API integration returns 404 errors for specific models (DeepSeek/GLM).

## 6. Feature Requests & Roadmap Signals
**Requested Capabilities:**
*   **SMTP Email Channel (Issue #2465):** Users want to send task results (e.g., weekly reports) via SMTP.
    *   *Probability:* High. It is a standard protocol requested by a maintainer-level author.
*   **Signal Integration (Issue #41):** A long-standing request for privacy-focused messaging support.
    *   *Status:* Closed recently, potentially signaling completion or deferral in favor of other channels.
*   **Multi-Instance Channels (PR #2481):** The roadmap is clearly moving towards supporting multiple instances of the same channel type (e.g., running two separate Telegram bots or Pico channels).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Upgrade Friction:** The transition from `v0.2.4` to `v0.2.5` introduced significant breaking changes (WebSocket) that are disrupting users.
    *   **Documentation Gaps:** Users are confused by token authentication flows (`PICOCLAW_GATEWAY_TOKEN`) and lack of changelogs for major updates (mentioned in #2433).
    *   **Windows Support:** Native tooling on Windows is brittle (path separator issues).
*   **Satisfaction:** High demand for features (Signal, Ollama, SMTP) shows strong interest in the project's versatility.

## 8. Backlog Watch
*   **Grafana Channel (PR #2251):** Open since Apr 1, still awaiting merge.
*   **Config V3 (PR #2481):** Just opened today; this is a major structural change that will require careful review.
*   **Reflection Bug (PR #2270):** Open since Apr 2, addresses a panic in `collectSensitive`. While user reports are low, the risk (panic) is high.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-12

## 1. Today's Overview
NanoClaw is experiencing a significant surge in development activity, recording **19 Pull Request updates** and **3 new Issue discussions** in the last 24 hours. The project appears to be in an "expansion and hardening" phase, with heavy contributions focusing on broadening the ecosystem through **Model Context Protocol (MCP) integrations** (e.g., Todoist, Google Calendar) and reinforcing security infrastructure. Despite the high volume of contributions, release velocity remains static, with **no new releases** published, suggesting a potentially large backlog of features pending merge into a stable tag.

## 2. Releases
*No new releases published in this reporting period.*

## 3. Project Progress
* **Security Hardening:**
    * **PR #1744 (Closed):** Successfully closed a critical security gap by removing the "direct-auth credential escape hatch." This enforces the credential proxy for all containers, preventing unauthorized credential access.
    * **PR #14 (Closed):** Implemented a security-focused mount allowlist system (`~/.config/nanoclaw/mount-allowlist.json`), allowing safer external directory access without mounting the entire host filesystem.
* **Ecosystem Integrations:**
    * **PR #25 (Closed):** Added **Telegram** as a fully supported messaging channel, including dual-channel routing capabilities.
    * **PR #76 (Closed):** Added proxy support to the authentication script, specifically enabling onboarding for users behind the Great Firewall (GFW).
* **Core Functionality:**
    * **PR #1617 (Closed):** Fixed a bug in the task scheduler where `chat_jid` was incorrectly used for enqueueing scheduled tasks; now correctly uses the target group JID.

## 4. Community Hot Topics
* **[#1503: nanoclaw.dev has an invalid ssl cert right now](https://github.com/qwibitai/nanoclaw/issues/1503)**
    *   **Status:** Open | **Activity:** 17 comments
    *   **Analysis:** This is the most active thread by volume. While seemingly trivial, an invalid SSL cert blocks new user onboarding and access to documentation. The high comment count likely reflects community frustration or confusion regarding the status of the official project site.
* **[#1742: feat(skills): add Vikunja task management MCP skill](https://github.com/qwibitai/nanoclaw/pull/1742)**
    *   **Status:** Open | **Activity:** New PR
    *   **Analysis:** Highlights a strong community desire for open-source, self-hosted alternatives to proprietary task managers (like Todoist/Asana).
* **[#1739: feat: add RUNTIME_MODE=native for host-process agent execution](https://github.com/qwibitai/nanoclaw/pull/1739)**
    *   **Status:** Open | **Activity:** New PR
    *   **Analysis:** Addresses a highly requested architectural change. Users are demanding the ability to run agents outside of Docker to access host tools (tmux, browsers) directly.

## 5. Bugs & Stability
* **High Severity:**
    *   **[#1503: Invalid SSL Certificate](https://github.com/qwibitai/nanoclaw/issues/1503)** - Affects the primary project domain. Trust issue for new users.
* **Medium Severity:**
    *   **[#1746: Credential Proxy Path Bug](https://github.com/qwibitai/nanoclaw/pull/1746)** - The credential proxy currently drops the path component for upstream URLs with non-root bases (e.g., `https://api.z.ai/api/anthropic`). This breaks connectivity for users utilizing provider-specific base URLs. **Fix PR is open.**
    *   **[#1741: Silent API Errors](https://github.com/qwibitai/nanoclaw/pull/1741)** - When the Anthropic API errors (429, 5xx), NanoClaw silently fails and drops messages after 5 retries. **Fix PR is open.**
    *   **[#1740: Missing Environment Variables](https://github.com/qwibitai/nanoclaw/pull/1740)** - `ANTHROPIC_BASE_URL` was documented but not actually passed to agent containers, breaking compatibility with non-Anthropic providers. **Fix PR is open.**

## 6. Feature Requests & Roadmap Signals
* **Native Runner Mode:** There is a clear signal (Issues #1732, PR #1739) that the community wants to bypass Docker for "host-tool access." Users want agents to control local tmux sessions, headed browsers, and macOS APIs directly.
* **Slack UX Improvements:** Issue #1743 explicitly offers help to unblock PRs regarding thread replies, thinking indicators, and reaction acks, indicating demand for a more polished Slack integration.
* **Channel Expansion:** PR #1624 proposes a full **Matrix** channel implementation with E2EE support, signaling interest in decentralized, privacy-focused communication protocols.
* **Memory Agent:** PR #1743 proposes a "SQLite-first self-improving memory agent," suggesting the roadmap is moving toward long-term memory retention and "dreaming" maintenance cycles.

## 7. User Feedback Summary
*   **Pain Points:** Users are hitting the "hard blockers" of container isolation. They struggle to integrate with desktop tools (tmux, browsers) without mounting the entire host filesystem (Issue #1732).
*   **Connectivity Issues:** Users operating in restrictive network environments (China/GFW) or with custom API proxies are struggling. The recent fixes for proxy support (PR #76) and credential proxy pathing (PR #1746) indicate these were significant hurdles.
*   **Integration Needs:** Users are actively wiring up Todoist (PR #1747), Google Calendar (PR #1737), and Vikunja (PR #1742). This confirms that "Productivity/Task Management" is a primary use case for NanoClaw agents.

## 8. Backlog Watch
*   **Critical Infrastructure:** The security hardening PRs (#1744, #14) were recently closed/merged, but remain critical to watch for regressions in the upcoming release.
*   **Blocked PRs:** Issue #1745 calls out that specific Slack features (thread replies, reactions) have been blocked since PRs #522, #653, and #682 stalled without public review.
*   **Naming Convention:** PR #1738 proposes renaming the entire project from **NanoClaw** to **Argus**. While open, this creates a potential fork/branding confusion risk that needs maintainer resolution.
*   **Attachment Support:** PR #1683 (Open since Apr 07) aims to add channel-agnostic attachment support, a fundamental feature for a multi-channel agent that appears to be lagging.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-04-12

## 1. Today's Overview
NullClaw is currently exhibiting high development velocity with zero merge debt; all 8 pull requests updated in the last 24 hours remain open, suggesting an active "fix-and-review" cycle rather than a continuous integration flow. The project appears to be in a stabilization phase for the v2026.4.x series, with a strong focus on rectifying regressions introduced in recent versions (specifically v2026.4.9) regarding security configurations and provider compatibility. There are no new releases; however, the volume of activity (8 PRs and 2 issues) indicates the maintainers are responsive to user-reported edge cases, particularly around Docker integration, OpenTelemetry (OTEL) constraints, and SQLite persistence.

## 2. Releases
**No new releases** published in the last 24 hours.
*Context:* Based on the PR activity referencing fixes for v2026.4.9, users should anticipate a patch release (e.g., v2026.4.10) shortly to address the open regressions.

## 3. Project Progress
**No PRs were merged or closed in the last 24 hours.** All progress is currently in the "Review" or "Testing" stage. The following features or fixes are advancing through the review pipeline:

*   **Cron Subagent Engine (PR #783):** A major feature update introducing a database-backed scheduler (`cron_runs`), atomic job queuing, and JSON output capabilities for CLI cron management.
*   **SQLite History Persistence (PR #802):** Advances the fix to ensure `nullclaw agent` CLI turns are correctly saved to the session database, resolving a disconnect between successful replies and empty history logs.
*   **Sandbox Security Hardening (PR #801 & #805):** Improvements to Docker sandbox mount initialization and Linux sandbox detection (Firejail/Bubblewrap) to ensure runnability before marking them as available.

## 4. Community Hot Topics
*The community focus is currently split between infrastructure bugs (Docker/OTEL) and feature enhancements (Cron).*

*   **[#801: fix(security): initialize docker sandbox mount args via factory](https://github.com/nullclaw/nullclaw/pull/801)**
    *   **Status:** Open.
    *   **Significance:** Addresses multiple issues (#799, #779, #784) related to Docker agent failures. This is a critical fix for users relying on the Docker runtime, as it corrects empty `-v` value passing.
*   **[#803: fix(config): allow local container hostnames for otel http](https://github.com/nullclaw/nullclaw/pull/803)**
    *   **Status:** Open.
    *   **Significance:** High visibility due to the breaking change in v2026.4.9. The community is watching this to ensure local development setups (e.g., Podman/Docker composer) work with plaintext OTEL endpoints again.

## 5. Bugs & Stability
**Several regressions and critical bugs have been identified, with fixes prepared but not yet merged.**

*   **[CRITICAL] #763: docker agent onboard interactive issue step 8**
    *   **Issue:** `KeyWriteFailed` error during the Docker agent onboarding workspace definition step.
    *   **Impact:** Blocks new users from setting up the environment in Docker.
    *   **Fix Status:** Unresolved directly, but potentially related to the mount-arg fixes in PR #801.
*   **[HIGH] #800: Otel broke due to https constraint**
    *   **Issue:** v2026.4.9 enforced HTTPS for OTEL endpoints, breaking local container setups (e.g., `http://otel`).
    *   **Impact:** Breaks observability for local development environments.
    *   **Fix Status:** Fix PR #803 is open.
*   **[MEDIUM] #766: Chat endpoint 404 on custom providers**
    *   **Issue:** NullClaw fails with 404 on some OpenAI-compatible providers even if a Responses API fallback exists.
    *   **Fix Status:** Fix PR #806 is open.
*   **[MEDIUM] #791: False positive sandbox detection**
    *   **Issue:** Firejail/Bubblewrap detected as "available" via `--version` checks but fail to actually run commands.
    *   **Fix Status:** Fix PR #805 is open.

## 6. Feature Requests & Roadmap Signals
*   **Enhanced Cron Scheduling:** PR #783 signals a roadmap focus on robust automation. The addition of a DB-backed scheduler and JSON output indicates a move towards making NullClaw a viable replacement for system-level cron/cronjob managers.
*   **Unbound Session Routing:** PR #804 suggests a refinement in agent routing logic, ensuring "orphan" sessions fall back to `main` rather than arbitrarily assigned agents. This improves predictability for multi-agent setups.

## 7. User Feedback Summary
*   **Docker Integration Pain Points:** Users are encountering friction with the Docker onboarding process (Issue #763) and sandbox mounts, indicating that the containerized experience needs more robust error handling and validation.
*   **Config Drift:** There is dissatisfaction regarding "breaking" changes in minor versions (e.g., v2026.4.9 forcing HTTPS for OTEL), suggesting a need for better deprecation warnings or configuration migration guides.
*   **CLI Reliability:** The discrepancy between CLI agent functionality and history logging (Issue #797) implies users are actively trying to use the CLI for persistent sessions and are frustrated by data loss.

## 8. Backlog Watch
*   **CI Supply Chain Security:** PR #798 (open) addresses CI hygiene by pinning GitHub Actions. While not a user-facing bug, it remains open and is vital for project integrity.
*   **Provider Compatibility:** The lingering issue with Custom OpenAI Providers (Issue #766 / PR #806) indicates an ongoing struggle to normalize diverse API behaviors across different LLM providers.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-04-12

## 1. Today's Overview
IronClaw is experiencing a high-velocity development cycle following the `v0.25.0` release on April 11. The project shows **extremely high activity** with 50 Pull Requests and 16 Issues updated in the last 24 hours. The primary focus appears to be stabilizing the new "production-grade" coding tools and orchestration engine, as the bulk of recent activity involves hardening security (TOCTOU fixes), managing error loops in the orchestrator, and resolving cross-channel isolation bugs. While feature velocity is high, there are signs of friction in the latest release, specifically regarding upgrade paths and permission management.

## 2. Releases
**New Release: `ironclaw-v0.25.0`** (2026-04-11)
*   **Key Additions:**
    *   **Production-grade Coding Tools:** Advanced file history and skills system ([PR #2025](https://github.com/nearai/ironclaw/pull/2025)).
    *   **Deployment Profiles:** Extensible profiles via `IRONCLAW_PROFILE` ([PR #2203](https://github.com/nearai/ironclaw/pull/2203)).
    *   **Commitments System:** New "commitments" feature for skills.
*   **Stability Note:** This release introduces significant new depth to the tools and workspace features, which correlates with the spike in bug reports regarding permissions and cross-channel memory visibility.

## 3. Project Progress
*   **Security Hardening:** A major security fix ([PR #1591](https://github.com/nearai/ironclaw/pull/1591)) addressing Time-of-check to Time-of-use (TOCTOU) race conditions in approval processing is currently open and awaiting merge.
*   **Orchestrator Stability:** The core team is actively implementing logic to detect and prevent "failure spirals" and repeated identical tool calls ([PR #2338](https://github.com/nearai/ironclaw/pull/2338), [PR #2340](https://github.com/nearai/ironclaw/pull/2340)), directly addressing reliability concerns in the agentic loop.
*   **UX Improvements:** Work is ongoing to improve the Web UI experience by replacing hex hash IDs with descriptive chat titles ([PR #2348](https://github.com/nearai/ironclaw/pull/2348)) and adding dashboard panels to the TUI ([PR #2343](https://github.com/nearai/ironclaw/pull/2343)).

## 4. Community Hot Topics
*   **Orphaned Approval Gates ([Issue #2323](https://github.com/nearai/ironclaw/issues/2323)):**
    *   *Discussion:* Users reported that approval gates become "undismissable" if a thread is deleted while the gate is pending.
    *   *Underlying Need:* Better lifecycle management between parent threads and transient child states.
*   **V2 External Agent Delegation ([Issue #2277](https://github.com/nearai/ironclaw/issues/2277)):**
    *   *Discussion:* A proposal to allow IronClaw to delegate work to external agents (Codex, Droid) while maintaining parent/child thread semantics.
    *   *Underlying Need:* Interoperability and the desire to use IronClaw as an orchestrator rather than just a standalone agent.
*   **Routines Visibility ([Issue #2239](https://github.com/nearai/ironclaw/issues/2239)) - CLOSED:**
    *   *Discussion:* Routines created in the CLI were not visible in Telegram.
    *   *Outcome:* Fixed and closed, highlighting the community's focus on cross-platform consistency.

## 5. Bugs & Stability
*   **[High Severity] Instance Upgrade Failures ([Issue #2346](https://github.com/nearai/ironclaw/issues/2346)):**
    *   Users attempting to upgrade from `0.24.0` to `0.25.0` are experiencing failures with no error details. This is a critical regression for current users.
*   **[Medium Severity] Cross-Channel Memory Isolation ([Issue #2259](https://github.com/nearai/ironclaw/issues/2259)):**
    *   Memory (e.g., "I have 2 dogs") and tools configured via CLI/TUI are inaccessible via Telegram. This suggests a fundamental disconnect in state management between the gateway and the agent core.
*   **[Medium Severity] Tool Permission Spam ([Issue #2345](https://github.com/nearai/ironclaw/issues/2345)):**
    *   In v0.25.0, users are repeatedly asked for tool permission approval; the system is not remembering the consent state.
*   **[Medium Severity] OAuth/MCP Failures ([Issues #2229](https://github.com/nearai/ironclaw/issues/2229), [#2230](https://github.com/nearai/ironclaw/issues/2230), [#2234](https://github.com/nearai/ironclaw/issues/2234)):**
    *   Multiple "Bug Bash" reports indicate Google Sheets and Twitter/X integrations are failing due to OAuth errors or "External service errors" during MCP activation.

## 6. Feature Requests & Roadmap Signals
*   **Streaming Tool Calls ([Issue #2274](https://github.com/nearai/ironclaw/issues/2274)):**
    *   There is a request to stream tool execution events back to the user via the API to provide visibility into what the agent is doing before the final response arrives.
*   **Headless Deployment Support ([Issue #2307](https://github.com/nearai/ironclaw/issues/2307)):**
    *   Users want to support the public Generative Language API for server/headless deployments where browser-based OAuth is impossible.
*   **ARM Support ([Issue #1339](https://github.com/nearai/ironclaw/issues/1339)):**
    *   A long-standing request for Raspberry Pi (ARMv7) compilation support remains open.

## 7. User Feedback Summary
The QA/Bug Bash reports (authored by `joe-rlo`) reveal a pattern of **instability in the `v0.25.0` release** regarding integrations and upgrade paths. The transition to "production-grade" tools has introduced regressions in how the agent manages state across different channels (CLI vs. Telegram). Additionally, developers using the Responses API are hitting friction points with thread creation and context injection ([PR #2167](https://github.com/nearai/ironclaw/pull/2167)).

## 8. Backlog Watch
*   **[ARM Architecture] Issue #1339:** Open since March 18 regarding Raspberry Pi support.
*   **[WASM Versioning] Issue #2135:** Feishu/Lark channel is failing to update due to WIT version mismatches, indicating potential drifting in the WASM component ecosystem.
*   **[Large Open PRs:** There are several "XL" size PRs still open from March ([#1549](https://github.com/nearai/ironclaw/pull/1549), [#1662](https://github.com/nearai/ironclaw/pull/1662), [#1378](https://github.com/nearai/ironclaw/pull/1378)) concerning Slack Socket Mode, Anti-drift checks, and routing. These represent significant features that have yet to land.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-04-12

**Report Period:** 2026-04-11 to 2026-04-12
**Project:** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

### 1. Today's Overview
LobsterAI shows **active development** with a focus on user experience (UX) and system stability, despite having no new releases. The repository processed a significant number of Pull Requests (6 updated, including 2 merges/fixes) compared to low Issue activity (1 updated). Development efforts appear split between optimizing core infrastructure (specifically the Windows installer) and expanding frontend capabilities (MCP templates, Avatars, and Search). The project health appears robust, with maintainers actively merging stability fixes while keeping feature development branches open.

### 2. Releases
*   **No new releases** published during this period.

### 3. Project Progress
**Merged & Closed PRs:**
*   **[fix(build)] Windows Overlay Installation Optimization** ([#1633](https://github.com/netease-youdao/LobsterAI/pull/1633) & [#1630](https://github.com/netease-youdao/LobsterAI/pull/1630))
    *   **Change:** Replaced synchronous directory removal (`RMDir /r`) with a "rename-then-async-delete" strategy for the NSIS installer.
    *   **Impact:** Resolved a critical UI blocking issue where uninstalling old versions (containing thousands of files in `cfmind/SKILLs/node_modules`) froze the installer interface. This ensures a smoother upgrade experience for Windows users.

**Features Under Development (Open PRs):**
*   **[feat(mcp)] Quick Add Templates** ([#1631](https://github.com/netease-youdao/LobsterAI/pull/1631)): Added "Quick Add" buttons for common MCP services (File System, SQLite, Brave Search) to streamline configuration.
*   **[feat(avatar)] User Avatar Settings** ([#1629](https://github.com/netease-youdao/LobsterAI/pull/1629)): Introduced a comprehensive avatar system allowing users to select presets (Aurora, Deep Sea, etc.) or upload custom images.

### 4. Community Hot Topics
*   **Global Search UX Upgrade** ([PR #1634](https://github.com/netease-youdao/LobsterAI/pull/1634))
    *   **Activity:** Significant refactoring of the search logic.
    *   **Underlying Need:** Users were frustrated that the "Search" feature was restricted to the *current* Agent's context, despite being located in the global menu. There was a clear misalignment between user expectations (global search) and implementation (local search). This PR addresses that by calling `listSessions()` without agent filters and stabilizing the Redux state management.

### 5. Bugs & Stability
*   **[Severity: Medium] Skill Compatibility with Local Models** ([Issue #1632](https://github.com/netease-youdao/LobsterAI/issues/1632))
    *   **Description:** A user reported that switching to a local model causes all existing Skills to become unusable and asked for installation guidance.
    *   **Status:** Open. No fix PR linked yet.
    *   **Analysis:** This indicates a potential configuration gap where the local environment setup script does not automatically handle Skill dependencies that were previously configured for a cloud/hosted model.

### 6. Feature Requests & Roadmap Signals
*   **Workflow & Multi-Agent Orchestration:** ([PR #240](https://github.com/netease-youdao/LobsterAI/pull/240))
    *   A long-standing proposal for "Workflow Enhancement" remains open. It envisions Agents with specialized "souls" (roles) and specific model assignments, utilizing a "PASS/REJECT" loop to route tasks back to a "Coder" agent if quality standards are not met.
*   **Customization:** The addition of the Avatar settings feature suggests a roadmap pivot towards personalization and user identity within the workspace.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Installation Friction:** The massive file count in the `node_modules` directory (specifically `cfmind/SKILLs`) made updates painfully slow on Windows. (Addressed in merged PRs).
    *   **Context Switching:** Users need to access information across different Agents seamlessly. The restriction of search to the active agent was a major friction point. (Addressed in open PR #1634).
    *   **Local Setup Complexity:** Transitioning from cloud to local models breaks existing functionality (Skills), indicating a need for better migration documentation or automated setup scripts.

### 8. Backlog Watch
*   **PR #240 [Feat/workflow enhancement]** ([Link](https://github.com/netease-youdao/LobsterAI/pull/240))
    *   **Created:** 2026-03-03
    *   **Status:** Open/Stale
    *   **Why it matters:** This PR proposes a fundamental shift in how LobsterAI handles multi-agent workflows (autonomous routing and role-based tasks). Its long open status suggests it is a complex feature requiring further architectural design or maintainer approval before implementation.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest**
**Date:** 2026-04-12
**Analysis Period:** Last 24 Hours

### 1. Today's Overview
The Moltis project is exhibiting high velocity, with 23 combined updates to issues and pull requests in the last 24 hours. The project is currently in a heavy stabilization phase, addressing critical security loopholes regarding command execution policies and configuration runtime adherence. While no new releases were published today, the repository merged seven PRs, indicating that the maintainers are actively clearing the queue for an upcoming update. The community is highly engaged in enhancing the agent's native capabilities, specifically moving away from shell-based dependencies toward structured tools.

### 2. Releases
**Status:** No new releases published in the last 24 hours.

### 3. Project Progress
**Key Merges & Closures:**
The maintainers successfully closed 8 issues and merged 7 PRs, focusing heavily on trust and safety in tool execution:

*   **Security Hardening:**
    *   **`[tools.exec]` Allowlist Enforcement:** Closed [#662](https://github.com/moltis-org/moltis/pull/662), which fixed a critical bug where `approval_mode = "off"` silently ignored the `allowlist`, potentially allowing unauthorized command execution in headless deployments.
    *   **Skill System Logic:** Closed [#663](https://github.com/moltis-org/moltis/pull/663), ensuring the `[skills] enabled = false` configuration is now correctly honored at runtime.
    *   **Tool Policy Diagnostics:** Closed [#661](https://github.com/moltis-org/moltis/pull/661), resolving confusion where preset tool policies were not applied to the main agent session.
*   **User Experience (UX):**
    *   **Remote Setup:** Fixed [#665](https://github.com/moltis-org/moltis/pull/665) to redirect unauthenticated remote users to an onboarding wizard instead of a dead-end page.
    *   **Memory & Compaction:** Merged [#653](https://github.com/moltis-org/moltis/pull/653), replacing LLM-based summarization with a deterministic compaction system to reduce token costs and latency.

### 4. Community Hot Topics
The community is focused on the architectural shift from shell commands to native tools.

*   **Native Filesystem Tools (Open PR)**
    *   **[PR #666](https://github.com/moltis-org/moltis/pull/666):** `feat(tools): native filesystem tools (Read/Write/Edit/MultiEdit/Glob/Grep)`.
    *   **Discussion:** This proposal to replace `exec("cat ...")` and `exec("sed ...")` with structured tools has garnered attention as it aligns Moltis with the Claude Code tool schema, improving reliability and reducing parsing errors.

*   **Voice Transcription Handling (Closed Issue)**
    *   **[Issue #632](https://github.com/moltis-org/moltis/issues/632):** `Empty voice transcription dispatches placeholder text to LLM`.
    *   **Underlying Need:** Users require the agent to fail gracefully or retry silently when voice inputs fail, rather than confusing the LLM with error strings like `"[Voice message - could not transcribe]"`.

*   **Nostr Integration (Open Issue)**
    *   **[Issue #668](https://github.com/moltis-org/moltis/issues/668):** `Add Nostr DM support`.
    *   **Underlying Need:** There is a clear demand for integrating Moltis with decentralized social protocols.

### 5. Bugs & Stability
**Severity Assessment:** High. Several critical logic gaps were identified and patched today.

1.  **[CRITICAL] Silent Security Bypass:** **[#654](https://github.com/moltis-org/moltis/issues/654)** - The `allowlist` for command execution was ignored when `approval_mode` was set to "off".
    *   *Status:* **Fixed** via PR #662.
2.  **[HIGH] Reflex Retry Loops:** **[#658](https://github.com/moltis-org/moltis/issues/658)** - The runner entered a 25-iteration loop dispatching empty tool args, burning tokens and quota.
    *   *Status:* **Fix Incoming** via Open PR #664.
3.  **[MEDIUM] Remote Login Deadlock:** **[#646](https://github.com/moltis-org/moltis/issues/646)** - Users could not log in to fresh remote deployments.
    *   *Status:* **Fixed** via PR #665.
4.  **[MEDIUM] Configuration Ignored:** **[#655](https://github.com/moltis-org/moltis/issues/655)** - The `SkillsConfig.enabled` field was defined but never read by the runtime.
    *   *Status:* **Fixed** via PR #663.

### 6. Feature Requests & Roadmap Signals
Based on open issues and PRs, the roadmap is prioritizing **Agent Capabilities** over simple chat features.

*   **Filesystem Abstraction:** The strong interest in **PR #667** (Native `file_read`/`file_info`) and **PR #666** (Full Read/Write suite) suggests the project is moving toward a "Claude Code" style capability set for agents.
*   **Loop Detection:** The rapid response to **Issue #658** via **PR #664** signals a commitment to runtime stability and cost control.
*   **Protocol Support:** **Issue #668** (Nostr) indicates an expansion into censorship-resistant communication channels.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by "Silent Failures"—configuration flags that exist in the schema but do nothing (e.g., `skills.enabled`, `tools.exec.allowlist` in off mode). This erodes trust in the security settings.
*   **Usage Patterns:** There is a significant push toward using Moltis as a coding assistant. The request for native file tools (`Read`, `Write`, `Grep`) and the fix for "Z.AI models enhanced tooling" (**#637**) indicate heavy use in technical workflows.
*   **Dissatisfaction:** The handling of empty voice transcriptions (**#632**) caused negative user experiences, leading to nonsensical TTS replies.

### 8. Backlog Watch
*   **Application-Level Proxy:** **[Issue #548](https://github.com/moltis-org/moltis/issues/548)** - A request for proxy support (closed/discussed recently). Users in restricted network environments still need this.
*   **Session Metadata in Hooks:** **[Issue #640](https://github.com/moltis-org/moltis/issues/640)** - Request to include channel/sender metadata in hook payloads. While a PR was merged (#645), this represents a broader need for richer context in plugin development.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Daily Digest: 2026-04-12

## 1. Today's Overview
CoPaw is currently experiencing a period of intense development activity. The project has seen **24 issues** and **14 pull requests** updated in the last 24 hours, indicating a highly active community and rapid iteration cycle. Despite a recent release (v1.0.2), users are reporting significant stability concerns regarding backend task execution and platform compatibility (Windows/ARM). However, there is strong momentum in frontend improvements and community-driven feature enhancements, with multiple "first-time contributors" submitting pull requests.

## 2. Releases
**No new releases** published in the last 24 hours. The project is currently on version `v1.0.2`.

## 3. Project Progress
*   **Infrastructure & Quality**: PR [#2506](https://github.com/agentscope-ai/CoPaw/pull/2506) was updated, aiming to establish contract tests for all 11 channels to improve system stability.
*   **User Interface**:
    *   PR [#3273](https://github.com/agentscope-ai/CoPaw/pull/3273) improves the provider model management modal with filtering and better icons.
    *   PR [#3257](https://github.com/agentscope-ai/CoPaw/pull/3257) converts `/approve` text commands into clickable UI buttons for better user safety.
*   **New Features**:
    *   PR [#3271](https://github.com/agentscope-ai/CoPaw/pull/3271) adds three new skills: Brainstorming, Systematic Debugging, and eToro Stock Trading.
    *   PR [#3117](https://github.com/agentscope-ai/CoPaw/pull/3117) introduces semantic skill routing to optimize context token usage by filtering relevant skills.
*   **Fixes**:
    *   PR [#3267](https://github.com/agentscope-ai/CoPaw/pull/3267) fixes the contrast issue for the pin button in Dark Mode.
    *   PR [#3258](https://github.com/agentscope-ai/CoPaw/pull/3258) adds support for `<thought>` tags in parsing.

## 4. Community Hot Topics
*   **Multi-Agent Meeting System**: PR [#2785](https://github.com/agentscope-ai/CoPaw/pull/2785) (7 comments) proposes a design for structured meetings with roles like Host and Decider. This indicates a community desire to move CoPaw from single-agent assistance to multi-agent collaboration.
*   **Skill Management & Sharing**:
    *   Issue [#3088](https://github.com/agentscope-ai/CoPaw/issues/3088) (3 comments) reports a bug where agent skill settings reset to "all selected" after editing.
    *   Issue [#2902](https://github.com/agentscope-ai/CoPaw/issues/2902) (3 comments) suggests adding explicit skill invocation options to prevent random selection and improve stability in production.
*   **User Asset Backup**: PR [#2457](https://github.com/agentscope-ai/CoPaw/pull/2457) proposes a comprehensive backup and migration system for workspaces (skills, memories, config), highlighting a user need for data portability and safety.

## 5. Bugs & Stability
**Severity: High**
*   **[#3011](https://github.com/agentscope-ai/CoPaw/issues/3011)**: Tasks involving `qwen3 coder plus` (and occasionally others) stop silently during execution without error logs. Manual input is required to resume. This is a critical blocker for automation workflows.
*   **[#3275](https://github.com/agentscope-ai/CoPaw/issues/3275)**: Background tasks (`copaw agents chat --background`) are killed when the agent reloads, causing data loss or workflow interruption.
*   **[#1403](https://github.com/agentscope-ai/CoPaw/issues/1403)**: Feishu (Lark) channel processes the same message multiple times due to a lack of deduplication.
*   **[#3262](https://github.com/agentscope-ai/CoPaw/issues/3262)**: Tool approval messages are appearing on the wrong Telegram bots in multi-bot setups, potentially causing security confusion.

**Severity: Medium**
*   **[#3269](https://github.com/agentscope-ai/CoPaw/issues/3269)**: `copaw local` runs entirely on CPU on Windows despite GPU availability; also, the app fails to start without an internet connection.
*   **[#3142](https://github.com/agentscope-ai/CoPaw/issues/3142)**: Agents can read/use skills even when they are explicitly disabled in the configuration.

## 6. Feature Requests & Roadmap Signals
*   **@ & / Commands**: Issue [#2270](https://github.com/agentscope-ai/CoPaw/issues/2270) requests explicit skill invoking syntax (like Cursor or Claude Code) to replace manual prompting.
*   **Long-term Memory**: Issue [#3264](https://github.com/agentscope-ai/CoPaw/issues/3264) asks for integration with Alibaba Cloud Memory (or similar) to enable automatic long-term memory recall.
*   **Platform Support**:
    *   Issue [#3266](https://github.com/agentscope-ai/CoPaw/issues/3266) requests native support for Windows on ARM (Snapdragon X Elite).
    *   Issue [#2902](https://github.com/agentscope-ai/CoPaw/issues/2902) requests "App Connection" features to make CoPaw more viable for production environments.
*   **Token Monitoring**: PR [#3214](https://github.com/agentscope-ai/CoPaw/pull/3214) adds session-level token usage recording, addressing cost management concerns.

## 7. User Feedback Summary
*   **Skill System Frustration**: Users feel the current skill calling mechanism is unstable and random. They want more control (manual selection) and better UI differentiation between skill pools and active agent skills (Issue [#3089](https://github.com/agentscope-ai/CoPaw/issues/3089)).
*   **Windows Experience**: The Windows experience is currently described as "fundamentally broken" by one user due to CPU-only execution and network dependency for startup (Issue [#3269](https://github.com/agentscope-ai/CoPaw/issues/3269)).
*   **Browser Automation**: Users report that browser automation capabilities are poor, easily triggering anti-bot defenses and failing to reuse login states (Issue [#3261](https://github.com/agentscope-ai/CoPaw/issues/3261)).

## 8. Backlog Watch
*   **PR #1192**: OpenRouter Provider with Model Filtering (Updated recently but open since March).
*   **PR #2432**: Chat History Enhancements (Sender ID/Timestamps) - Open since late March.
*   **Issue #2671**: MCP Server tools added via Streamable HTTP/SSE are not being told to the LLM.

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