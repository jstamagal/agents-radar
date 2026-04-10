# OpenClaw Ecosystem Digest 2026-04-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-10 00:13 UTC

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

# OpenClaw Project Digest: 2026-04-10

## 1. Today's Overview
OpenClaw is experiencing an intense surge in maintenance and development activity, with **500 issues and 500 pull requests updated in the last 24 hours** alone. While the project has released **v2026.4.9**, focusing heavily on memory and dreaming features, the community is currently facing significant stability challenges. There is a high volume of critical regressions reported immediately following the latest releases, particularly surrounding installation failures on Windows and npm global environments. Despite the turbulence, the repository shows strong engagement with active discussions on security RFCs and rapid-fire patch attempts from maintainers to address the "broken" state for global users.

## 2. Releases
**New Release: v2026.4.9 & v2026.4.9-beta.1**
The latest release focuses on advanced memory management and "dreaming" capabilities.
*   **Key Feature - Grounded REM Backfill:** A new memory lane has been added to replay historical daily notes into Dreams and durable memory. This is facilitated via `rem-harness --path` and includes diary commit/reset flows.
*   **Cleaner Extraction:** Improved durable-fact extraction and live short-term promotion integration allow old daily notes to be processed without a redundant memory stack.
*   **Migration Notes:** Users utilizing the memory/dreaming features should review the new `rem-harness` path configurations to ensure historical data is correctly backfilled.

## 3. Project Progress
The project is aggressively refactoring core gateway logic and attempting to stabilize recent regressions.
*   **Gateway Refactoring:** A significant effort ([PR #63975](https://github.com/openclaw/openclaw/pull/63975)) is underway to split gateway startup and runtime seams, improving modularity.
*   **Security Hardening:** [PR #63891](https://github.com/openclaw/openclaw/pull/63891) aims to pin `axios` to version 1.15.0 and implement a dependency denylist for plugins to mitigate supply chain risks.
*   **Rate Limit Handling:** Improvements are being made to retry global rate limits at the attempt boundary before failing over ([PR #41158](https://github.com/openclaw/openclaw/pull/41158)), which should improve reliability with LLM providers.
*   **Browser Consolidation:** Work continues to unify browser action execution and contract errors ([PR #63977](https://github.com/openclaw/openclaw/pull/63977)) and consolidate duplicate helper surfaces ([PR #63957](https://github.com/openclaw/openclaw/pull/63957)).

## 4. Community Hot Topics
*   **[#49971 RFC: Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971)** (77 comments)
    *   **Topic:** Integration of ERC-8004, W3C DID, and Verifiable Credentials for agent identity.
    *   **Analysis:** There is massive demand for cryptographically verified agent identities. The community is actively debating the trust model for agents acting on behalf of users, signaling a shift towards "agentic" web3 interactions.
*   **[#62994 install 4.8 failed: Cannot find module '@buape/carbon'](https://github.com/openclaw/openclaw/issues/62994)** (29 comments, 👍 8)
    *   **Topic:** Installation failures due to missing UI dependencies.
    *   **Analysis:** A critical blocker for new users. The high volume of comments indicates a widespread packaging issue affecting the `openclaw` npm package.
*   **[#45064 Memory Leak - OOM on basic commands](https://github.com/openclaw/openclaw/issues/45064)** (28 comments)
    *   **Topic:** JavaScript heap out of memory crashes on simple CLI commands (`gateway status`, `doctor`).
    *   **Analysis:** A severe stability regression in recent versions that makes the CLI unusable for some users, likely due to inefficient memory handling in the startup routines.

## 5. Bugs & Stability
*   **CRITICAL: Global npm Install Broken**
    *   **Issue:** [#63541](https://github.com/openclaw/openclaw/issues/63541) (Completion cache crashes), [#63127](https://github.com/openclaw/openclaw/issues/63127) (Windows runtime missing modules), [#62446](https://github.com/openclaw/openclaw/issues/62446) (Fresh install fails).
    *   **Severity:** High. Users cannot install or update OpenClaw.
    *   **Status:** Fix PR open ([#63679](https://github.com/openclaw/openclaw/pull/63679)) to handle missing QA files gracefully instead of crashing.
*   **CRITICAL: Memory Leak (OOM)**
    *   **Issue:** [#45064](https://github.com/openclaw/openclaw/issues/45064)
    *   **Status:** Open. Causes CLI to hang/crash on basic commands in v2026.3.12+.
*   **Windows Path Regression**
    *   **Issue:** [#61899](https://github.com/openclaw/openclaw/issues/61899)
    *   **Details:** Installer fails on Windows due to unsupported ESM URL schemes (e.g., `c:`).
*   **Control UI Pairing Failures**
    *   **Issue:** [#45753](https://github.com/openclaw/openclaw/issues/45753)
    *   **Details:** Gateway timeouts blocking access to the web UI behind proxies.

## 6. Feature Requests & Roadmap Signals
*   **Native Subagent Spawning:** [PR #62801](https://github.com/openclaw/openclaw/pull/62801) proposes a `runtime.subagent.spawnDetached` API, indicating a roadmap move towards more complex, multi-agent orchestrations within a single gateway.
*   **Web Search Provider Expansion:** [PR #56511](https://github.com/openclaw/openclaw/pull/56511) adds support for Serper (Google Search API), responding to user requests for non-AI-summarized search results.
*   **Microsoft Teams SSO:** [PR #63964](https://github.com/openclaw/openclaw/pull/63964) attempts to add SSO support, signaling a push for deeper enterprise integration.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **"Install Anxiety":** Users are reporting that fresh installs are failing (Missing '@buape/carbon'), creating a high barrier to entry.
    *   **"Update Fear":** Frequent regressions (e.g., [#62505](https://github.com/openclaw/openclaw/issues/62505) "Coding Agent never completes anything") are making users hesitant to update.
    *   **Platform Inconsistency:** Docker users are facing issues with `brew`-based skills, and Windows users are facing path/ESM errors.
*   **Satisfaction:**
    *   Users are highly engaged with the *features* (Dreaming, Identity) but frustrated by the *stability*. The active participation in RFCs suggests strong belief in the project's vision despite the current bugs.

## 8. Backlog Watch
*   **[#29203 Internal hooks not triggered](https://github.com/openclaw/openclaw/issues/29203)** & **[#26422 message_sending plugin hook never fires](https://github.com/openclaw/openclaw/issues/26422)**
    *   These issues (Stale/Open) indicate a persistent problem with the plugin hook system where registered hooks simply fail to fire in certain execution paths.
*   **[#31486 image tool custom providers](https://github.com/openclaw/openclaw/issues/31486)**
    *   The image tool lacks support for custom providers configured in `openclaw.json`, limiting flexibility for users with specific vision model needs.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: Personal AI Agents (2026-04-10)

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is currently undergoing a **phase of intense consolidation and infrastructure hardening**. While feature velocity remains high—particularly around "agentic" capabilities like memory dreaming, autonomous sub-agents, and multi-agent orchestration—projects are grappling with significant **technical debt** introduced by rapid iterations. Stability is the primary bottleneck; almost every major project (OpenClaw, NanoBot, Zeroclaw, LobsterAI) is reporting critical regressions in installation pipelines, memory management, and upgrade paths. Concurrently, there is a visible architectural divergence: while OpenClaw leans heavily into Web3/DID identity standards, projects like IronClaw and NanoBot are prioritizing enterprise integration (MCP) and multimodal extensibility respectively.

## 2. Activity Comparison

| Project | Health | Issues (24h) | PRs (24h) | Release Status | Focus Area |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 🔴 Unstable | 500 | 500 | v2026.4.9 (Broken) | Agentic Core, Web3 Identity |
| **CoPaw** | 🟢 Active | 21 | 32 | v1.0.2 (Stable) | Multi-Channel, UX, MCP |
| **IronClaw** | 🟠 Stabilizing | 24 | 50 | Dev Cycle | Enterprise, Rust/Wasm, V2 Refactor |
| **NanoBot** | 🟠 Regression | 26 | 45 | v0.1.5 (Buggy) | Python, Self-Tooling, Skills |
| **LobsterAI**| 🔴 Critical | 3 | 37 | 2026.04.08 (Crash) | DB Integrity, OpenClaw Gateway |
| **Zeroclaw**| 🟠 Stabilizing | 20 | 36 | Icy Crab (Beta) | Performance, Microkernel |
| **Moltis** | 🟢 Robust | - | 23 | 20260409.01 (Hotfix) | Local Models (LM Studio), UI |
| **NanoClaw**| 🟢 Stable | 4 | 24 | No Release | Scheduler, Matrix E2EE |
| **NullClaw**| 🟢 Stable | - | 11 | No Release | Interoperability, Web Skills |

## 3. OpenClaw's Position
**OpenClaw remains the ecosystem bellwether**, driving the conversation on high-level agent capabilities (REM/Dreaming) and cryptographic identity (ERC-8004/DID). Its technical approach is distinctively **"heavy-weight"**, focusing on a monolithic core written in TypeScript that manages complex memory states and dreaming cycles.

*   **Advantages:** It boasts the largest community engagement and most ambitious feature set (Dreaming, Subagent spawning).
*   **vs. Peers:** Unlike IronClaw (Rust/Wasm) or Zeroclaw (Rust), OpenClaw uses TypeScript, offering easier plugin development but facing heavier runtime memory/CPU costs. Unlike CoPaw or Moltis, OpenClaw is CLI-first and inherently more complex to configure.
*   **Community Size:** OpenClaw's issue/PR volume (500+) significantly outpaces peers, indicating a massive user base but also a disproportionately high maintenance burden.

## 4. Shared Technical Focus Areas
Several requirements are emerging simultaneously across the ecosystem, indicating universal needs for AI agents:

*   **Memory & Context Management:**
    *   **Projects:** OpenClaw, NanoBot, Zeroclaw.
    *   **Needs:** Implementing "Dreaming" (OpenClaw) to compress long-term memory; fixing OOM crashes caused by unbounded context windows (NanoBot, Zeroclaw); and preventing "recursive snowball" data ingestion bugs (Zeroclaw).
*   **Multi-Model & Provider Flexibility:**
    *   **Projects:** Moltis, NanoClaw, NullClaw, CoPaw.
    *   **Needs:** Dynamic model switching (`/model` commands), support for local reasoning models (GPT-5, Gemini 3, DeepSeek via LM Studio), and standardizing "OpenAI-compatible" API responses.
*   **Integration Standards (MCP & Web):**
    *   **Projects:** IronClaw, CoPaw, NullClaw.
    *   **Needs:** **MCP (Model Context Protocol)** support is rapidly becoming the standard for tool extension (IronClaw, CoPaw), alongside **Web Discovery** (NullClaw) for installing skills via `.well-known` URIs.
*   **Operational Reliability (Cron & Scheduling):**
    *   **Projects:** NanoClaw, NullClaw, IronClaw, LobsterAI.
    *   **Needs:** Robust "Cron" or "Scheduler" systems to allow agents to perform background tasks autonomously. Users are frustrated when scheduled tasks fail to trigger without a gateway restart.

## 5. Differentiation Analysis

| Feature Dimension | Leader / Archetype | Projects |
| :--- | :--- | :--- |
| **Architecture** | **Microkernel / High Perf** | **IronClaw, Zeroclaw:** Focusing on Rust, WASM, and sandboxing for enterprise security. |
| | **Monolithic / Feature Rich** | **OpenClaw:** The "kitchen sink" approach; maximum features at the cost of stability. |
| **User Experience**| **Visual / Desktop First** | **CoPaw, Moltis:** Prioritizing WebUIs, desktop apps, and visual interaction over CLI. |
| **Interoperability**| **Connector Hub** | **NanoBot:** Focused on supporting the widest array of chat platforms (Discord, WeChat, Feishu, QQ). |
| **Extensibility** | **Plugin / Scripting** | **NullClaw, CoPaw:** Moving towards lightweight plugin systems and MCP servers rather than core mods. |
| **Use Case** | **Personal Assistant** | **NanoClaw, EasyClaw:** Focused on individual productivity, calendar, and chat management. |

## 6. Community Momentum & Maturity

*   **High Velocity, High Risk (The "Bleeding Edge"):**
    *   **OpenClaw:** Massive activity but currently suffering from severe "Update Fear" due to broken installers and OOM errors.
    *   **LobsterAI:** In a crisis state with startup crashes on the latest release, requiring rapid hotfixes.
    *   **NanoBot:** Rapid feature addition (Self-Tool v2) is introducing regressions in Python detection and Feishu integration.

*   **Consolidation & Enterprise Readiness:**
    *   **IronClaw:** Actively deleting legacy code (V1 removal) and hardening MCP support. High maturity, focusing on developers building infrastructure.
    *   **CoPaw:** Experiencing a "1.0" surge with massive community contribution (54 comments on "Help Wanted"), strong release cadence.

*   **Stable & User-Focused:**
    *   **Moltis:** Highly responsive maintenance (fixing issues in <24h). Focused on local model users who value stability over raw feature count.
    *   **NanoClaw / NullClaw:** Steady, reliable progress. Focused on fixing specific pain points (OAuth costs, scheduler double-firing) rather than rewriting the universe.

## 7. Trend Signals for AI Developers
Based on the community feedback across these projects, the following trends are critical for developers building in this space:

1.  **"Agentic" Memory is Mandatory:** Simple RAG is no longer sufficient. Users are demanding **persistent, evolving memory** (OpenClaw's "Dreaming") and **proactive state management** (Zeroclaw/IronClaw).
2.  **MCP is Winning the Protocol War:** The rapid adoption of **Model Context Protocol (MCP)** across IronClaw, CoPaw, and others signals a shift toward standardized tool invocation. Developers should build MCP-compatible tools rather than proprietary plugins.
3.  **Local-First Hybrid:** There is a massive trend toward supporting **local reasoning models** (DeepSeek, Gemma 4, GPT-5) via LM Studio or Ollama (Moltis, NanoBot). Users want the privacy of local inference with the fallback of cloud APIs.
4.  **Reliability > Features:** The backlash against broken updates (OpenClaw, LobsterAI, NanoBot) indicates that the ecosystem is moving into a "trust but verify" phase. **Installation stability** and **data migration safety** are currently the biggest barriers to adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-10

## 1. Today's Overview
NanoBot is experiencing a period of **high-velocity development and active community engagement**. With 45 Pull Requests and 26 Issues updated in the last 24 hours, the project is rapidly evolving, particularly in agent capabilities (Self-Tool v2), memory management, and platform integrations. However, the **0.1.5 release** appears to have introduced several regressions regarding environment configuration and Python detection, triggering a spike in bug reports. The community is actively debating architectural shifts, such as the necessity of a dedicated WebUI and mechanisms for automatic skill discovery.

## 2. Latest Releases
**No new releases** were published in the last 24 hours. The current stable version remains **v0.1.5** (and related post-releases), which continues to be the focus of recent compatibility discussions.

## 3. Project Progress
*   **Memory & Stability Improvements**
    *   **[PR #2971 & #2979](https://github.com/HKUDS/nanobot/pull/2979)** (Closed/Open): Addressed a critical issue where sessions utilizing Large Language Models (LLMs) with massive context windows (e.g., 1M+ tokens) would grow indefinitely without archiving, leading to performance degradation.
    *   **[PR #2963](https://github.com/HKUDS/nanobot/pull/2963)** (Closed): Fixed a bug where streaming channels (Discord, Telegram, Feishu) silently dropped error messages, leaving users uninformed about LLM failures.
*   **Model Compatibility**
    *   **[PR #2973](https://github.com/HKUDS/nanobot/pull/2973)** (Closed): Added support for stripping `<thought>` blocks from Gemma 4 and similar reasoning models to prevent raw reasoning chains from leaking into user chats.
*   **Platform Enhancements**
    *   **[PR #2960](https://github.com/HKUDS/nanobot/pull/2960)** (Closed): Added proxy support for the Discord channel, improving connectivity for users behind corporate firewalls.

## 4. Community Hot Topics
*   **Feature Discussion: A dedicated WebUI?**
    *   **[Issue #2949](https://github.com/HKUDS/nanobot/issues/2949)** (👍 5): The community is actively debating whether NanoBot should move beyond its CLI/Chat roots to offer a full-featured WebUI. This highlights a user desire for a centralized management dashboard.
    *   **[PR #2972](https://github.com/HKUDS/nanobot/pull/2972)** (Open): A concrete implementation of a Web UI has been proposed, sparking significant interest.
*   **Architectural Requests**
    *   **[Issue #2927](https://github.com/HKUDS/nanobot/issues/2927)**: Users are requesting "Automatic Skill Discovery," moving the agent from a passive tool executor to a proactive system that learns from patterns.
    *   **[Issue #2892](https://github.com/HKUDS/nanobot/issues/2892)**: Intense discussion on the "Cron Mechanism." Users are frustrated that scheduled tasks created dynamically via the agent do not trigger until the gateway is manually restarted.

## 5. Bugs & Stability
*   **Critical: Data Loss Risk**
    *   **[Issue #2957](https://github.com/HKUDS/nanobot/issues/2957)**: "huge bug dream overwriting MEMORY.md". Users report `MEMORY.md` being wiped completely without git backup. **(High Severity)**
    *   **[Issue #2980](https://github.com/HKUDS/nanobot/issues/2980)**: Git store initialization creates a nested repo and overwrites workspace `.gitignore`.
*   **v0.1.5 Regression Wave**
    *   **[Issue #2917](https://github.com/HKUDS/nanobot/issues/2917)**: "Cannot find Python" errors affecting skill execution post-upgrade.
    *   **[Issue #2970](https://github.com/HKUDS/nanobot/issues/2970)**: Feishu channel crashes on startup with `lark-oapi==1.5.3` (`No module named 'lark_oapi.api.bot'`).
    *   **[Issue #2947](https://github.com/HKUDS/nanobot/issues/2947)**: Internal "Runtime Context" metadata leaking into user-facing channels (e.g., WeChat).
*   **Channel Failures**
    *   **[Issue #2977](https://github.com/HKUDS/nanobot/issues/2977)**: QQ/Weixin channels fail on natural language input (returning fallback errors) while Feishu works normally.
    *   **[Issue #2922](https://github.com/HKUDS/nanobot/issues/2922)**: Discord channel returns empty final responses despite successful tool execution.

## 6. Feature Requests & Roadmap Signals
*   **In-Conversation Tools**
    *   **[Issue #2975](https://github.com/HKUDS/nanobot/issues/2975)**: Request for a `/model` slash command to switch LLM models mid-session without restarting the bot.
*   **Multimodal Expansion**
    *   **[PR #2908](https://github.com/HKUDS/nanobot/pull/2908)** (Open): Active development on generalizing multimodal support to handle audio and video, not just images.
*   **Agent Self-Evolution**
    *   **[PR #2521](https://github.com/HKUDS/nanobot/pull/2521)** (Open): Introduction of "SelfTool v2," allowing the agent to inspect and modify its own runtime state.
*   **Context Management**
    *   **[Issue #2984](https://github.com/HKUDS/nanobot/issues/2984)**: Request for automatic context compression when approaching token limits to prevent hard cutoffs.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Upgrade Friction:** The transition to v0.1.5 has been rocky, with breaking changes in dependencies (Feishu/Python) causing immediate downtime for several users.
    *   **Observability:** Users are confused by "Runtime Context" metadata leaking into chats and dislike silent failures in Discord/Telegram.
    *   **State Management:** The requirement to restart the `gateway` to pick up new cron jobs is a major usability hurdle.
*   **Positive Signals:**
    *   Strong demand for more control over model selection and memory isolation (per-user memory via [PR #2968](https://github.com/HKUDS/nanobot/pull/2968)).

## 8. Backlog Watch
*   **Unification of Sessions**
    *   **[Issue #2798](https://github.com/HKUDS/nanobot/issues/2798)** (Closed): Feature request for a "Unified Session" where switching from Discord to Telegram maintains the same conversation context.
*   **Matrix E2EE**
    *   **[Issue #2641](https://github.com/HKUDS/nanobot/issues/2641)** (Open): Request for emoji verification support in Matrix E2EE, tracking a previous PR (#2596).
*   **Provider Specifics**
    *   **[Issue #2958](https://github.com/HKUDS/nanobot/issues/2958)**: Users are struggling to configure custom providers with the `openai-responses` API.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-04-10

## 1. Today's Overview
ZeroClaw is experiencing a surge in maintenance activity, with 36 open PRs and 20 active issues updated in the last 24 hours. The project appears to be in a stabilization phase for the "Icy Crab" release cycle, addressing critical regressions in memory handling and provider connectivity alongside a significant architectural refactoring. While feature velocity remains high (e.g., Telegram voice transcription), the influx of high-severity bug reports—specifically regarding memory OOM errors and tool execution failures—suggests recent builds may be unstable for production workloads.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
**Refactoring & Architecture:**
*   **Microkernel Architecture Proposal (PR #5559):** A massive architectural refactor was proposed to extract the monolithic 289K LOC codebase into 10 separate workspace crates. This aims to improve incremental compile times and reduce binary size by feature-gating subsystems.
    *   *Link:* [zeroclaw-labs/zeroclaw#5559](https://github.com/zeroclaw-labs/zeroclaw/pull/5559)

**Fixes Closed:**
*   **Docker Build Fixes (PR #5545):** Addressed four separate bugs in `Dockerfile.debian` that prevented local image builds.
*   **Web UI Pairing (PR #5568):** Improved UX for Docker environments by auto-filling pairing codes, removing the need to manually copy logs.
*   **Config Validation (Issue #5538):** Closed a bug where valid top-level config keys (`api_key`, `api_url`) were incorrectly flagged as unknown during startup.

## 4. Community Hot Topics
**Memory Management Crisis:**
*   **[Issue #4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916) (👍 3, 9 comments):** Users reported a "recursive snowball" bug where the `auto_save` feature saves `[Memory context]` recall results back into the database, causing exponential memory growth and system exhaustion.
*   **[Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542):** Reports of persistent Out-Of-Memory (OOM) errors in WSL2 environments, with the process being killed after consuming ~17GB of virtual memory.
*   **[PR #5548](https://github.com/zeroclaw-labs/zeroclaw/pull/5548):** A proposed fix to default `session_ttl_hours` to 168h (1 week) and cap `seed_history` to prevent unbounded session growth causing OOM crashes.

**Feature Parity & Enhancements:**
*   **[Issue #5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) (3 comments):** High demand for **Telegram voice message transcription**, noting that OpenClaw (TS version) already supports this feature.
*   **[Issue #5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570):** Performance enhancement request to replace the SQLite memory backend's brute-force O(n) vector search with Approximate Nearest Neighbor (ANN) indexing to speed up semantic recall.

## 5. Bugs & Stability
**S0 - Data Loss / Security Risk:**
*   **[Issue #5537](https://github.com/zeroclaw-labs/zeroclaw/issues/5537):** **Error Loop.** Sending files to GPT models that don't support parsing causes a persistent error loop that blocks all subsequent messages.
*   **[Issue #5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528):** **Email Config Logic.** Improper configuration logic in the email channel prevents startup.
*   **[Issue #5535](https://github.com/zeroclaw-labs/zeroclaw/issues/5535):** **Feishu Attachment Parsing.** The agent fails to parse attachments that haven't been manually saved first.
*   **[Issue #5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533):** **Path Access Controls.** `allowed_path` logic is flawed; specifically, allowing `~/` does not implicitly allow subdirectories like `~/dev`.

**S1 - Workflow Blocked:**
*   **[Issue #5564](https://github.com/zeroclaw-labs/zeroclaw/issues/5564):** Custom providers (e.g., Deepseek V3.2) crash when tool execution returns empty stdout.
*   **[Issue #5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553):** Telegram channel returns raw JSON or empty results when executing shell tools, breaking the workflow.

**S2/S3 - Degraded/Minor:**
*   **[Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459):** Ollama provider hard-codes `tool_count=0`, completely disabling native tool calling.
*   **[Issue #5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562):** Windows UI flashes a `cmd.exe` window during shell execution.
*   **[Issue #5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550):** Autosaved conversation memories are invisible to recall due to `session_id` mismatches.

## 6. Feature Requests & Roadmap Signals
*   **Unified SOP Webhook (Issue #5561):** Request to integrate SOP workflows with the Gateway for HTTP triggers and autonomous notifications.
*   **Telegram Voice (Issue #5509):** Strong signal to add voice transcription to match the TypeScript version's capabilities.
*   **Performance Optimization (Issue #5570):** Signal that vector search performance is becoming a bottleneck for power users.

## 7. User Feedback Summary
Users are expressing **frustration with stability and memory management**. The "Recursive snowball" memory bug (#4916) and OOM errors (#5542) indicate critical flaws in the current persistence layer. Additionally, users relying on **Ollama** (#5459) or **custom providers** (#5564) are reporting broken functionality, suggesting compatibility testing for these providers has lagged behind recent updates. On the positive side, users are actively requesting more features for integration (Telegram voice, SOP webhooks), indicating high engagement with the platform's capabilities.

## 8. Backlog Watch
*   **[Issue #5363](https://github.com/zeroclaw-labs/zeroclaw/pull/5363):** PR to fix the Gateway `AppState` model switching (Open since Apr 5).
*   **[Issue #5365](https://github.com/zeroclaw-labs/zeroclaw/pull/5365):** PR to track the web dashboard in git for reliable installs (Open since Apr 5).
*   **[Issue #5223](https://github.com/zeroclaw-labs/zeroclaw/pull/5223):** PR to add AWS Bedrock OIDC/IRSA support (Open since Apr 2).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

!

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-10

## 1. Today's Overview
NanoClaw is experiencing a period of intense development and maintenance, with **24 Pull Requests** updated in the last 24 hours (14 merged/closed, 10 open). This high velocity indicates an active effort to stabilize the core scheduler and agent runner systems. While issue activity is moderate (4 items), the technical debt being addressed is significant, specifically regarding IPC message handling, scheduled task reliability, and Windows compatibility. The project appears to be transitioning from rapid feature addition to a consolidation phase focused on operational robustness.

## 2. Releases
**No new releases** were published in the last 24 hours.

## 3. Project Progress
Significant strides were made in system reliability and feature expansion. The following major changes were merged:

*   **Scheduler & IPC Reliability:** A critical fix to prevent **scheduled tasks from firing twice** after a service restart was merged ([#1338](https://github.com/qwibitai/nanoclaw/pull/1338)). Additionally, a fix for **IPC message loss** in `for-await` loops was merged ([#1702](https://github.com/qwibitai/nanoclaw/pull/1702)).
*   **Trigger Logic Enhancements:** The behavior for "trigger-required" groups was refined. Replying to or quoting bot messages now correctly triggers a response ([#1712](https://github.com/qwibitai/nanoclaw/pull/1712)), and trigger patterns now match anywhere in a message, not just at the start ([#1711](https://github.com/qwibitai/nanoclaw/pull/1711)).
*   **Container Stability:** Fixes for session directory permissions ([#1713](https://github.com/qwibitai/nanoclaw/pull/1713)) and aborting hung SDK queries ([#1572](https://github.com/qwibitai/nanoclaw/pull/1572)) improve container runtime health.
*   **New Channel Support:** A Matrix channel implementation with full End-to-End Encryption (E2EE) support was merged ([#1624](https://github.com/qwibitai/nanoclaw/pull/1624)).

## 4. Community Hot Topics
*   **[#1620 - OAuth token auth billing changes](https://github.com/qwibitai/nanoclaw/issues/1620)**
    *   **Trend:** High community concern (6 comments).
    *   **Analysis:** Users are reacting to Anthropic's pricing changes where OAuth-connected third-party apps now draw from "Extra Usage" rather than subscription credits. Contributors are urging documentation updates to recommend **API Keys** over OAuth tokens to save costs.
*   **[#1503 - Invalid SSL Certificate](https://github.com/qwibitai/nanoclaw/issues/1503)**
    *   **Trend:** Persistent frustration (15 comments).
    *   **Analysis:** The official project site (`nanoclaw.dev`) has had an invalid SSL cert for nearly two weeks. While the source code is fine, this blocks new users from accessing documentation, creating a negative first impression.

## 5. Bugs & Stability
**High Severity:**
*   **Runaway Task Re-dispatch:** A bug in `container-runner.ts` causes `runContainerAgent` to hang if an output callback fails, triggering a scheduled task "double-fire" loop ([#1718](https://github.com/qwibitai/nanoclaw/issues/1718)).
*   **Windows Compatibility:** `session-cleanup.ts` hardcodes `/bin/bash`, breaking the cleanup process on Windows entirely ([#1719](https://github.com/qwibitai/nanoclaw/issues/1719)).

**Medium Severity:**
*   **Port Lingering:** Fixed in merged PR [#1550](https://github.com/qwibitai/nanoclaw/pull/1550), the server now retries listening on port start to survive `EADDRINUSE` errors after crashes.
*   **Missing API Keys:** Fixed in merged PR [#1698](https://github.com/qwibitai/nanoclaw/pull/1698), new groups now correctly inherit `ANTHROPIC_API_KEY` from the environment.

## 6. Feature Requests & Roadmap Signals
*   **Advanced Slack Integration:** PR [#1721](https://github.com/qwibitai/nanoclaw/pull/1721) proposes **Slack Socket Mode** with multi-workspace support, allowing a single NanoClaw instance to serve multiple Slack teams simultaneously without public webhooks.
*   **Multi-tenant Agent Delegation:** PR [#1720](https://github.com/qwibitai/nanoclaw/pull/1720) introduces a "router" pattern, enabling a lightweight classifier agent to delegate conversations to specialized agent groups via IPC.
*   **Contribution Automation:** PR [#1716](https://github.com/qwibitai/nanoclaw/pull/1716) adds a `/check-contribution` skill to automate pre-flight checks for PRs, ensuring code quality and security before submission.

## 7. User Feedback Summary
*   **Pain Points:** The discrepancy between OAuth tokens and API Keys regarding billing is a major financial concern for users deploying self-hosted agents. Users on Windows are facing friction with shell-script assumptions in the core codebase.
*   **Workflow:** The "trigger" functionality is heavily used, and users are requesting more natural interactions (e.g., not forcing the trigger at the start of the sentence), which has now been addressed.

## 8. Backlog Watch
*   **Security/Infrastructure:** The invalid SSL certificate on `nanoclaw.dev` ([#1503](https://github.com/qwibitai/nanoclaw/issues/1503)) remains unresolved despite high visibility. This requires immediate administrative attention.
*   **Operational Tooling:** PR [#1515](https://github.com/qwibitai/nanoclaw/pull/1515), which enables loading group-level MCP servers (e.g., for Home Assistant or Google Workspace), remains open and is highly anticipated for expanding agent capabilities.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Daily Digest
**Date:** 2026-04-10
**Analyst:** AI Agent Researcher

---

### 1. Today's Overview
NullClaw is demonstrating high development velocity with a strong focus on robustness and interoperability. The project closed 11 Pull Requests in the last 24 hours, addressing critical pain points such as message delivery reliability, configuration parsing, and provider compatibility. Concurrently, significant features like durable outbox delivery and interactive model picking remain open, indicating an active push toward a more resilient and user-friendly vNext. While the issue tracker remains active with recent bug reports, the rapid closure of related configuration bugs (e.g., #721) suggests a responsive maintenance cycle.

### 2. Releases
*   **No new releases** published in the last 24 hours.

### 3. Project Progress (Merged/Closed)
The following features and fixes were successfully merged or closed, advancing the project's stability and capabilities:

*   **Reliability Engineering:**
    *   **Retry Logic for Channels:** Implemented bounded retry handling for transient outbound failures and a specific fallback for delayed QQ replies that lose their message context ([#731](https://github.com/nullclaw/nullclaw/pull/731), [#732](https://github.com/nullclaw/nullclaw/pull/732)).
    *   **Durable Outbox:** Added a persistent delivery outbox to ensure messages survive process restarts or transient transport errors ([#730](https://github.com/nullclaw/nullclaw/pull/730) - *Open but actively developed*).
*   **Interoperability & Standards:**
    *   **Web Skills:** Added support for installing skills via `.well-known` URIs, aligning with emerging industry standards for agent skill discovery ([#735](https://github.com/nullclaw/nullclaw/pull/735)).
    *   **Provider Support:** Improved parsing for custom providers (e.g., Cloudflare) and normalized OpenAI Responses API tool schemas ([#728](https://github.com/nullclaw/nullclaw/pull/728), [#790](https://github.com/nullclaw/nullclaw/pull/790)).
*   **User Experience (UX):**
    *   **Interactive Setup:** Improved the onboarding wizard to fetch full model catalogs and added an interactive model picker for Telegram/Discord/Slack ([#725](https://github.com/nullclaw/nullclaw/pull/725), [#727](https://github.com/nullclaw/nullclaw/pull/727)).
    *   **Config Readability:** Fixed a bug where the interactive onboarding generated malformed, minified JSON configuration files ([#794](https://github.com/nullclaw/nullclaw/pull/794)).

### 4. Community Hot Topics
*   **[feat(cron): cron subagent, run history, JSON output, security hardening](https://github.com/nullclaw/nullclaw/pull/783)** (Open)
    *   *Analysis:* There is high demand for structured, persistent automation. Users are looking for "set-and-forget" scheduling capabilities (cron jobs) that include run history and logging, moving NullClaw from a reactive chatbot to a proactive background agent.
*   **[feat(model-picker): add interactive multi-provider selection](https://github.com/nullclaw/nullclaw/pull/727)** (Open)
    *   *Analysis:* As users adopt multi-provider setups (e.g., mixing local Ollama with cloud APIs), switching between them seamlessly inside chat interfaces is becoming a primary workflow requirement.
*   **[feat(skills): support web-discovered skill installs](https://github.com/nullclaw/nullclaw/pull/735)** (Closed)
    *   *Analysis:* Aligns with the "Agent Skills" community standard. Users want to install plugins without managing git repositories, preferring a URL-based discovery mechanism similar to modern package managers.

### 5. Bugs & Stability
*   **[Shell execution failures on physical Linux](https://github.com/nullclaw/nullclaw/issues/791)** (Open - High Severity)
    *   *Description:* The Shell tool fails to execute on native Linux environments despite permission grants.
    *   *Impact:* Critical blockage for users trying to use NullClaw as a system automation agent on Linux servers.
*   **[System Prompt Inheritance Bug](https://github.com/nullclaw/nullclaw/issues/793)** (Open)
    *   *Description:* The default agent's system prompt is being corrupted/injected by the first subagent's prompt.
    *   *Impact:* Affects instruction following and agent behavior predictability; fix needed to ensure isolation between agents.
*   **[QQ Disconnects on Long Tasks](https://github.com/nullclaw/nullclaw/issues/722)** (Closed)
    *   *Description:* AI responses are lost if the QQ connection times out during long generation tasks.
    *   *Status:* Mitigated by PR #732 (Retry delayed replies without msg_id).

### 6. Feature Requests & Roadmap Signals
*   **Cron / Scheduling:** PR [#783](https://github.com/nullclaw/nullclaw/pull/783) indicates a strong roadmap push toward background scheduling and persistent state (run history), likely arriving in the next minor version.
*   **Gateway Security:** PR [#789](https://github.com/nullclaw/nullclaw/pull/789) suggests upcoming improvements to tunnel safety and rate limiting, addressing security concerns for public-facing agents.

### 7. User Feedback Summary
*   **Configuration Pain:** Users previously struggled with unreadable, minified `config.json` files generated by the onboarding wizard. This feedback was addressed in [#794](https://github.com/nullclaw/nullclaw/pull/794).
*   **Delivery Fragility:** Users reported frustration with lost messages on platforms like QQ during long tasks. The merge of PR [#731](https://github.com/nullclaw/nullclaw/pull/731) and [#732](https://github.com/nullclaw/nullclaw/pull/732) indicates the team is prioritizing "delivery guarantees" over just speed.
*   **Setup Complexity:** The changes in PR [#725](https://github.com/nullclaw/nullclaw/pull/725) (removing fetch caps, improving sorting) reflect user desire for a smoother, less restricted initial setup experience.

### 8. Backlog Watch
*   **[Issue #791: Shell can not run on the physical Linux](https://github.com/nullclaw/nullclaw/issues/791)**
    *   *Status:* Open for 2 days.
    *   *Action:* Requires urgent investigation into the native runtime permissions layer.
*   **[Issue #793: System Prompt incorrectly inherits subagent prompt](https://github.com/nullclaw/nullclaw/issues/793)**
    *   *Status:* Open for 1 day.
    *   *Action:* Needs architectural review of the agent prompt composition logic.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-04-10

## 1. Today's Overview
IronClaw is experiencing a **high-velocity development cycle** focused on architectural consolidation and infrastructure hardening. Activity is significant, with **24 issues and 50 PRs** updated in the last 24 hours. The project is actively simplifying its core abstractions (proposing the removal of V1 engine code) while simultaneously enhancing enterprise readiness through MCP (Model Context Protocol) support and improved sandboxing. A clear trend towards "Developer Experience" and "Production Stability" is evident, with heavy investment in CI/CD automation and container-based deployment flows.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
*   **V2 Engine Consolidation:** Significant architectural strides are being made to simplify the codebase.
    *   **[PR #2193](https://github.com/nearai/ironclaw/pull/2193)** (Open): A proposal to remove ~35,000 lines of legacy V1 code now that V2 is fully implemented.
    *   **[Issue #2192](https://github.com/nearai/ironclaw/issues/2192)** (Open): Proposal to collapse 7 top-level concepts (Tools, Channels, Agents, etc.) into 3 unified abstractions.
*   **MCP & Sandbox Integration:** Major progress on enabling third-party tools in secure environments.
    *   **[PR #2214](https://github.com/nearai/ironclaw/pull/2214)** (Open): Implements MCP client support inside Docker container workers, enabling OAuth refresh and tool usage within sandboxes.
    *   **[Issue #2180](https://github.com/nearai/ironclaw/issues/2180)**: Highlights remaining gaps in MCP tool availability for sandboxed jobs.
*   **Infrastructure & Deployment:**
    *   **[PR #2210](https://github.com/nearai/ironclaw/pull/2210)** (Closed): Implemented pre-bundled WASM extensions in staging Docker images to streamline deployments.
    *   **[PR #2203](https://github.com/nearai/ironclaw/pull/2203)** (Open): Introduced extensible deployment profiles (`IRONCLAW_PROFILE`) to simplify configuration management.
    *   **[PR #2159](https://github.com/nearai/ironclaw/pull/2159)** (Open): Merged webhook routes into the main gateway to support single-port PaaS deployments (e.g., Railway).

## 4. Community Hot Topics
*   **OAuth Frustrations:** A surge of reports regarding Google Suite integration failures.
    *   **[#902](https://github.com/nearai/ironclaw/issues/902)** & **[#1992](https://github.com/nearai/ironclaw/issues/1992)**: Users report "Access blocked" errors during Google OAuth flows.
    *   *Underlying Need:* Users require stable, unblocked access to standard workspace tools (Gmail, Calendar). The Google OAuth policy compliance seems to be a recurring friction point.
*   **Deployment & Registry Confusion:**
    *   **[#2221](https://github.com/nearai/ironclaw/issues/2221)**: "Empty registry" errors caused by `~/.cargo/registry` conflicts.
    *   **[#2201](https://github.com/nearai/ironclaw/issues/2201)**: Reports that the Response API path is inconsistent (`/v1/responses` vs `/api/v1/responses`).
    *   *Underlying Need:* Developers need predictable configuration management and clear API standards.
*   **Architecture Simplification:**
    *   **[#2192](https://github.com/nearai/ironclaw/issues/2192)**: High engagement on a proposal to drastically simplify the mental model required to contribute to or use IronClaw.

## 5. Bugs & Stability
*   **CRITICAL - Database Migration Failure:**
    *   **[#1328](https://github.com/nearai/ironclaw/issues/1328)**: Upgrading to v0.19.0 causes a checksum mismatch error (`V6__routines`) in PostgreSQL, potentially bricking existing databases. (Updated today, 3 upvotes).
*   **HIGH - Security/Validation:**
    *   **[#2206](https://github.com/nearai/ironclaw/issues/2206)**: V2 Engine does not sanitize URL schemes in `auth_url` (allows `javascript:` or `file://`), posing a security risk.
*   **MEDIUM - Integration Failures:**
    *   **[#1997](https://github.com/nearai/ironclaw/issues/1997)** & **[#1998](https://github.com/nearai/ironclaw/issues/1998)**: Slack integration flow is broken; bots do not reply, and setup instructions are confusing.
    *   **[#2087](https://github.com/nearai/ironclaw/issues/2087)**: IronClaw stops responding entirely during Notion setup attempts.
*   **LOW - UX/UI:**
    *   **[#2178](https://github.com/nearai/ironclaw/pull/2178)**: Fix for the agent intercepting bare "yes/no" inputs when no approval is pending, causing confusion ("No pending approval").

## 6. Feature Requests & Roadmap Signals
*   **Voice Transcription:** **[#2223](https://github.com/nearai/ironclaw/issues/2223)** requests voice note transcription using Whisper Large v3 for Telegram users.
*   **Observability:** **[#2204](https://github.com/nearai/ironclaw/issues/2204)** (via automated test) reiterates the demand for a `/metrics` Prometheus endpoint for latency and execution tracking.
*   **API Consistency:** **[#2201](https://github.com/nearai/ironclaw/issues/2201)** requests standardizing the Response API path.
*   **Migration Tools:** **[#2188](https://github.com/nearai/ironclaw/issues/2188)** indicates a move to merge documentation from the separate `ironclaw-docs` repo into the main monorepo.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **OAuth Complexity:** Multiple users report inability to connect Google services due to blocking or policy errors.
    *   **Slack Setup:** Users find the Slack app creation process confusing and the integration non-functional after setup.
    *   **Private Networking:** **[#1754](https://github.com/nearai/ironclaw/issues/1754)** highlights strictness in HTTP/TLS checks that break self-hosted model deployments.
*   **Satisfaction:**
    *   Positive reception for the "Abound" demo features and general architectural momentum, though users are eager for stability in upgrades (referencing the DB migration bug).

## 8. Backlog Watch
*   **Needs Attention:** **[#1997](https://github.com/nearai/ironclaw/issues/1997)** (Slack broken) and **[#1328](https://github.com/nearai/ironclaw/issues/1328)** (Migration failure) are high-impact issues that have been open for weeks but updated recently, signaling they require immediate resolution for production users.
*   **Documentation Gap:** **[#1174](https://github.com/nearai/ironclaw/issues/1174)** reflects a long-standing user struggle to find comprehensive documentation, though steps are being taken to address this in **[#2188](https://github.com/nearai/ironclaw/issues/2188)**.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest

**Date:** 2026-04-10
**Status:** 🔴 High Instability / Heavy Development Activity

---

### 1. Today's Overview
LobsterAI is experiencing a **high-velocity development phase** with significant stability concerns in the latest release. The project shows very high activity, with **37 Pull Requests** updated in the last 24 hours (mostly focused on bug fixes), compared to only **3 new Issues**. However, user reports indicate that the latest version (2026.04.08) suffers from critical stability bugs, including startup crashes, broken conversation flows, and scheduled task failures. The development team is actively responding with a large volume of patches targeting database integrity, IM gateway configurations, and UI localization.

### 2. Releases
**None**
*(Note: Users are reporting issues on version 2026.04.08, but no new release has been published yet to address the instability.)*

### 3. Project Progress
While no new releases were shipped, the repository shows significant progress on maintenance and stabilization:

*   **Database & Storage Integrity:**
    *   **#1597, #1595, #1609:** Fixed critical SQLite issues. Highlights include enabling foreign key constraints (fixing orphaned data), ensuring legacy memory migrations don't mark as complete if they fail, and improving transaction safety.
    *   **#1584:** Switched Agent ID generation from name-based to Short UUID to prevent "data resurrection" issues where old workspaces are accidentally loaded when an Agent is recreated with the same name.
*   **OpenClaw Gateway & IM:**
    *   **#1611, #1596:** Fixed a `schema` compatibility issue causing gateway restart loops by removing the `_agentBinding` sentinel field.
    *   **#1606:** Enhanced security for NetEase Bee by replacing plaintext secrets with environment variable placeholders.
*   **Cowork / Session Logic:**
    *   **#1602:** Fixed a race condition in `addMessage` sequence numbering.
    *   **#1601:** Fixed an issue where stopped sessions could be "resurrected" by IM messages after a gateway reconnection.
    *   **#1608, #1598:** Fixed `getConfig` to respect the persisted `executionMode` instead of defaulting to hardcoded values.

### 4. Community Hot Topics
*   **[Issue #1587: Startup Crash after Update](https://github.com/netease-youdao/LobsterAI/issues/1587)**
    *   **Summary:** Users report the application crashes immediately upon launching the latest version.
    *   **Analysis:** This is a critical blocker preventing users from accessing the application.
*   **[Issue #1589: Functional Failures](https://github.com/netease-youdao/LobsterAI/issues/1589)**
    *   **Summary:** Core features—conversations and scheduled tasks—are throwing exceptions.
    *   **Analysis:** Indicates a regression in the execution flow or runtime environment in the current build.

### 5. Bugs & Stability
**Severity: Critical**

1.  **Application Crash (Startup):** Reports of the app crashing on launch (Issue #1587).
2.  **Core Functionality Broken:** Conversation execution and Scheduled Tasks are failing (Issue #1589).
3.  **Localization Regression:** Partial translation failures where switching to English leaves Chinese text in "Terms" and "Tool Styles" (Issue #1586).
4.  **Stability Patches:** The large number of merged PRs (e.g., #1602, #1601, #1597) addressing concurrency, state management, and database corruption suggests the current codebase is fragile.

**Fixes in Pipeline:**
*   A hotfix for the "restart loop" (PR #1611) and "schema" errors (PR #1596) is already merged/closed.
*   Fixes for the "dirty check" warning in scheduled tasks (PR #1600) and UI glitches (PR #1605, #1604) are in progress.

### 6. Feature Requests & Roadmap Signals
*   **Session Management:** PR #1610 introduces a "Session Duration" configuration (defaulting to 30 days), suggesting users want more control over how long active contexts are maintained.
*   **Search Enhancement:** PR #1594 expands search capabilities to match content across *all* agents rather than just the current one, indicating a user need for global knowledge retrieval.

### 7. User Feedback Summary
*   **Pain Points:** The primary sentiment is frustration with **instability**. Users are facing barriers to entry (crashes) and interruptions in workflow (failed tasks).
*   **Data Integrity:** There is a specific technical concern regarding "orphaned data" and "resurrected" agents, which implies users are managing complex, evolving datasets and fear data loss or confusion.
*   **UI/UX:** While mostly functional, there are requests for better internationalization (Issue #1586).

### 8. Backlog Watch
*   **Agent Data Lifecycle (PR #1584 - Open):** While the UUID fix is incoming, the PR description explicitly notes that *deleting* an Agent currently leaves behind `cowork_sessions` and local files. This "garbage collection" issue remains unresolved and could lead to disk space clutter or confusion.
*   **Configuration Management (PR #1611 - Open):** Addresses a complex issue with `openclaw.json` schema compatibility. The fact that this broke implies a need for more robust configuration migration strategies in future updates.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-04-10

## 1. Today's Overview
The Moltis project demonstrated high velocity and strong responsiveness on 2026-04-09, successfully clearing a backlog of recent reports. The repository saw **14 issues closed** and **23 PRs merged**, indicating a focused effort by maintainers (particularly `penso` and `Cstewart-HC`) to stabilize the codebase following recent feature additions. While the release `20260409.01` was sparse on details in the metadata, the associated pull requests suggest it was a significant stability and provider-compatibility update. The project health appears robust, with rapid turnaround on bug reports and active expansion of provider support for new model frontiers like GPT-5.x and Gemini 3.x.

## 2. Releases
*   **Version 20260409.01**: Released on April 9, 2026.
    *   *Note*: While the release tag is minimal, the associated PRs indicate this release bundles critical fixes for MiniMax, Ollama, and LM Studio, alongside support for new GPT-5 and Gemini 3 model families.

## 3. Project Progress
The project made significant strides in provider compatibility, system prompt engineering, and resource management.

**Key Advances:**
*   **Provider Ecosystem Expansion**: Added support for **Alibaba Cloud Coding Plan** (PR #621) and updated catalogs to recognize **GPT-5.x** and **Gemini 3.x** models (PR #605, PR #601).
*   **Reasoning Content Streaming**: Implemented and tested support for streaming `reasoning_content` from LM Studio (PR #620, #607), ensuring the UI renders thought processes dynamically rather than waiting for completion.
*   **System Prompt Reliability**: Fixed a critical regression where **MiniMax** system prompts were silently rejected (PR #611, #622).
*   **Execution Tool Configuration**: The `ExecTool` now correctly respects timeout and byte limits defined in `moltis.toml` (PR #617), fixing a disconnect where configuration was parsed but ignored.

## 4. Community Hot Topics
The most active discussions centered around provider stability and resource management.

*   **LM Studio & Reasoning UI**:
    *   [Issue #597](https://github.com/moltis-org/moltis/issues/597): Users reported that LM Studio's "reasoning" stream was invisible until completion.
    *   [Issue #599](https://github.com/moltis-org/moltis/issues/599): LM Studio was incorrectly rejected during provider setup despite being a first-class citizen.
    *   *Analysis*: There is a strong user demand for local, reasoning-capable models (like DeepSeek-R1 via LM Studio) to work seamlessly with the visual interface.
*   **Resource Exhaustion**:
    *   [Issue #596](https://github.com/moltis-org/moltis/issues/596): The file watcher exhausted `inotify` slots by watching disabled skill files.
    *   [Issue #579](https://github.com/moltis-org/moltis/issues/579): Request for session rotation in channel DMs to prevent token limit exhaustion.
    *   *Analysis*: As users scale up their Moltis deployments, hardcoded limits (file handles, token counts) are becoming bottlenecks.

## 5. Bugs & Stability
**High Severity (Fixed in v20260409.01):**
*   **[CRITICAL] MiniMax System Prompt Loss (Issue #592, #578)**: System prompts were being dropped silently due to API rejection. *Fixed in PR #622.*
*   **[HIGH] Workspace Truncation (Issue #593)**: `AGENTS.md` and `TOOLS.md` were silently truncated at 6,000 characters with no warning. *Fixed in PR #610 & #612 (limit raised to 50k, made configurable).*
*   **[HIGH] Exec Tool Config Ignored (Issue #616)**: Timeouts for code execution were hardcoded to 30s despite config settings. *Fixed in PR #617.*
*   **[MEDIUM] Inotify Exhaustion (Issue #596)**: Excessive file watching on disabled skills. *Fixed in PR #608.*
*   **[MEDIUM] BOOT.md Hook Broken (Issue #594)**: Custom boot messages were read but never injected into the session. *Fixed in PR #614.*

## 6. Feature Requests & Roadmap Signals
*   **GPT-5 & Gemini 3 Support (Issue #601, #603)**: Users are eager to utilize the latest reasoning models. The closure of these issues via PRs #605 and #613 suggests these features are now live.
*   **Session Rotation (Issue #579)**: To handle long-running channel DMs without hitting token limits. This remains open but highlights a need for better long-term memory management in chat channels.
*   **Podman Support (Issue #588)**: Explicit support for Podman containers was requested and implemented in PR #609.

## 7. User Feedback Summary
Users are pushing Moltis to its limits with heavier workloads and diverse local providers.
*   **Pain Points**: "Silent failures" were a major theme today—users were frustrated that system prompts were dropped or files were truncated without logs.
*   **Satisfaction**: Rapid closure of issues (mostly within 24 hours) indicates high satisfaction with maintainer responsiveness.
*   **Use Cases**: Heavy integration with **LM Studio** (local reasoning) and **Ollama** suggests a strong trend towards local, private AI deployment.

## 8. Backlog Watch
*   **[Issue #579] Session rotation for channel DMs**: This enhancement request addresses a scalability bottleneck for active communities. It is currently open but not yet assigned.
*   **[PR #604] Dependency Updates**: An open Dependabot PR for `jsonwebtoken` and other Rust crates. While usually routine, keeping dependencies updated is crucial for security, especially given the recent focus on provider authentication.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-04-10

## 1. Today's Overview
CoPaw is experiencing a **very high-velocity development cycle**, with significant release activity and robust community engagement. In the last 24 hours, the project released **v1.0.2** (a significant feature update) alongside a beta patch, addressing 21 issues and merging 32 pull requests. The project appears to be in a stabilization phase following the recent 1.0.x series, with active efforts focused on performance optimization, console UX improvements, and infrastructure hardening (testing/CI). Community activity is intense, particularly around channel integrations (Feishu/WeCom) and agent workspace management.

## 2. Releases
### **v1.0.2** (Latest)
*   **Core Feature - Plugin System:** Users can now install and manage extensions directly from a local `plugins/` folder within their workspace. This significantly enhances extensibility without modifying the core codebase.
*   **Core Feature - Task Runner (`copaw task`):** A new CLI command for task execution has been introduced (notes truncated in data, but implies expanded workflow automation).
*   **Source:** [v1.0.2 Release Notes](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.2)

### **v1.0.2-beta.2**
*   **Hotfixes:** Rapid iterations to address website deployment issues and performance regressions.
    *   Reverted "website performance optimizations" due to instability.
    *   Reverted "hotfix website" to restore previous stable state.
*   **Source:** [v1.0.2-beta.2 Release Notes](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.2-beta.2)

## 3. Project Progress
**Significant Features & Fixes Merged:**
*   **MCP (Model Context Protocol) Support:** Major strides in MCP tooling.
    *   PR [#3149](https://github.com/agentscope-ai/CoPaw/pull/3149): Added support for listing available tools via MCP.
    *   PR [#3167](https://github.com/agentscope-ai/CoPaw/pull/3167): Fixed HTTP MCP connection issues (likely addressing recent connection failures).
*   **Console UX & Performance:**
    *   PR [#3158](https://github.com/agentscope-ai/CoPaw/pull/3158): Optimized React rendering by moving hover states into card components to prevent unnecessary re-renders.
    *   PR [#3175](https://github.com/agentscope-ai/CoPaw/pull/3175): Added autocomplete dropdowns for Model ID selection, improving usability for providers with model discovery.
*   **Infrastructure & Tooling:**
    *   PR [#3150](https://github.com/agentscope-ai/CoPaw/pull/3150): Introduced control commands (`/skills` and `/<skill_name>`) to list and invoke skills directly from chat.
    *   PR [#3172](https://github.com/agentscope-ai/CoPaw/pull/3172): Added manual PyPI publish triggers to CI, improving release automation.
    *   PR [#2506](https://github.com/agentscope-ai/CoPaw/pull/2506): Established contract testing infrastructure for 11 different communication channels to ensure stability.

## 4. Community Hot Topics
*   **[#2291 Help Wanted: Open Tasks](https://github.com/agentscope-ai/CoPaw/issues/2291)** (54 comments)
    *   *Topic:* A centralized "Good First Issue" board where users claim tasks.
    *   *Signal:* High community desire to contribute; the maintainers are successfully organizing volunteer efforts.
*   **[#1911 "Xiaoyi" (HarmonyOS) Channel Issues](https://github.com/agentscope-ai/CoPaw/issues/1911)** (21 comments)
    *   *Topic:* Agents appear on the Huawei "Xiaoyi" platform but return "network congestion" errors.
    *   *Signal:* Integration with proprietary Chinese ecosystems (Xiaoyi/Feishu) is a major use case but prone to platform-specific bugs.
*   **[#3063 Feishu Asyncio Locks](https://github.com/agentscope-ai/CoPaw/issues/3063)** (10 comments, Closed)
    *   *Topic:* `asyncio.locks.Lock` errors causing Feishu (Lark) long-connections to fail or "cross-talk."
    *   *Signal:* High concurrency in channel adapters is currently unstable.
*   **[#3045 Model Auto-Fetch Unavailable](https://github.com/agentscope-ai/CoPaw/issues/3045)** (8 comments, Open)
    *   *Topic:* Windows desktop users unable to automatically fetch models.
    *   *Signal:* Desktop client wrapper configuration issues are blocking users.
*   **[#2937 Multi-Agent Chat Merging](https://github.com/agentscope-ai/CoPaw/issues/2937)** (3 comments, Closed)
    *   *Topic:* Users find it messy when the same agent opens 10 separate chat windows during multi-agent collaboration.
    *   *Signal:* The UI needs "threading" logic to group conversations by task ID rather than agent instance.

## 5. Bugs & Stability
*   **Severity: High - Docker Data Loss**
    *   **[#3163](https://github.com/agentscope-ai/CoPaw/issues/3163):** Users report that upgrading the Docker container image initializes a fresh instance, wiping all agent memory and skills.
    *   *Status:* Open. No fix PR visible yet.
*   **Severity: Medium - Aliyun Coding Plan**
    *   **[#3162](https://github.com/agentscope-ai/CoPaw/issues/3162):** All models under the `aliyun-codingplan` provider fail with a 422 error (missing 'scope' field).
    *   *Status:* Closed. (Likely fixed in recent releases or via PR).
*   **Severity: Medium - WeCom Attachments**
    *   PR [#3079](https://github.com/agentscope-ai/CoPaw/pull/3079) addresses a crash where WeCom (Enterprise WeChat) attachments were inaccessible in server deployments.
*   **Severity: Medium - Chat Cancel Race Condition**
    *   PR [#2987](https://github.com/agentscope-ai/CoPaw/pull/2987) fixes a bug where stopping a chat generation ignores the *next* message sent.

## 6. Feature Requests & Roadmap Signals
*   **Visualization:** Request for **in-chat chart rendering** (Line/Pie charts) via Markdown or direct rendering, rather than requiring file downloads ([#3124](https://github.com/agentscope-ai/CoPaw/issues/3124)).
*   **UI History Management:** Multiple users ([#2454](https://github.com/agentscope-ai/CoPaw/issues/2454), [#2936](https://github.com/agentscope-ai/CoPaw/issues/2936)) have requested that chat history be moved back to the left sidebar and support "pinning" important sessions, criticizing the current "hidden history" design.
*   **Cross-Model History:** Request for provider-agnostic conversation history so users can switch models mid-conversation without format errors ([#2314](https://github.com/agentscope-ai/CoPaw/issues/2314)).
*   **Browser Anti-Detection:** Users want `browser_visible` to avoid triggering Cloudflare CAPTCHAs/human verification ([#3075](https://github.com/agentscope-ai/CoPaw/issues/3075)).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Multi-Agent UI Chaos:** Users are frustrated that multi-agent workflows spawn excessive chat windows, cluttering the interface ([#2937](https://github.com/agentscope-ai/CoPaw/issues/2937)).
    *   **Windows Stability:** Reports of the Windows client crashing/closing after a few hours of inactivity ([#2911](https://github.com/agentscope-ai/CoPaw/issues/2911)) and installation failures ([#3005](https://github.com/agentscope-ai/CoPaw/issues/3005)).
    *   **Data Persistence:** Fear of data loss during Docker upgrades is a significant barrier for server/deployment users ([#3163](https://github.com/agentscope-ai/CoPaw/issues/3163)).
*   **Positive Signals:**
    *   The new `copaw task` and Plugin features are highly anticipated.
    *   The "Help Wanted" issue has high engagement, indicating a healthy open-source ecosystem.

## 8. Backlog Watch
*   **PR #1209 & #1089 (LLM Routing):** These PRs regarding "chat routing selector" and "LLM routing configuration" are marked as Closed but were recently updated. Users should verify if the routing feature is fully live in v1.0.2 or if it was reverted/delayed.
*   **PR #3164 (Browser Strategy):** Open. Aims to fix the "Chrome is being controlled by automated test software" banner. This directly addresses user complaints about triggering CAPTCHAs ([#3075](https://github.com/agentscope-ai/CoPaw/issues/3075)).

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest
**Date:** 2026-04-10
**Analysis Source:** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. Today's Overview
The **EasyClaw** (RivonClaw) project maintains a stable but currently low-activity profile, with zero code modifications (commits), issues, or pull requests recorded in the last 24 hours. The sole significant activity is the release of **version v1.7.9**, which appears to be a maintenance or patch release focused on end-user deployment rather than feature expansion. The release notes specifically target macOS compatibility issues, suggesting a focus on platform stability and installation friction.

### 2. Releases
**New Release: v1.7.9 (RivonClaw)**
The project released a new version today, primarily addressing installation hurdles for macOS users.
*   **Key Update:** Added detailed troubleshooting for macOS Gatekeeper errors ("'RivonClaw' is damaged and can't be opened").
*   **Migration/Installation Notes:** Users on macOS attempting to install the unsigned application must manually override Gatekeeper protections via the Terminal to launch the software, as the build is not currently code-signed.
*   **View Release:** [v1.7.9 on GitHub](https://github.com/gaoyangz77/easyclaw/releases)

### 3. Project Progress
No pull requests were merged or closed in the last 24 hours. Development progress appears to be in a holding pattern, with the latest release likely representing pre-completed work being published rather than active daily iteration.

### 4. Community Hot Topics
*No active discussions detected.*
*   There are **0** open issues and **0** active pull requests in the repository.
*   **Analysis:** The absence of community discussion suggests either a very small user base, effective handling of issues in previous cycles, or a reliance on external communication channels (e.g., Discord, WeChat) for support.

### 5. Bugs & Stability
*   **macOS Gatekeeper Blocker:** The release notes implicitly identify the "unsigned app" status as a critical stability/usability bug. macOS natively blocks the execution of the app, flagging it as "damaged" even though the file integrity is intact.
    *   **Severity:** Medium (Workaround available).
    *   **Status:** Documented in release notes (v1.7.9); no code fix (signing) is apparent yet.

### 6. Feature Requests & Roadmap Signals
*   **Code Signing:** The most immediate signal from today's data is the implicit need for proper code signing certificates to eliminate the need for Terminal workarounds on macOS.
*   **Roadmap Prediction:** Future versions (e.g., v1.8.0) will likely prioritize official signing to ensure "out-of-the-box" compatibility on macOS, reducing user friction.

### 7. User Feedback Summary
Based on the release documentation, the primary user pain point is **installation friction on macOS**.
*   **Pain Point:** Users are unable to open the application immediately after download due to OS-level security warnings.
*   **Satisfaction:** The project remains functional, but the lack of signature may decrease perceived professionalism or trust for new users.

### 8. Backlog Watch
There are no stale issues or pull requests currently flagged in the data requiring immediate attention. The repository is currently clean of open items.

---

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*