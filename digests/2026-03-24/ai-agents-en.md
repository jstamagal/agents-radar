# OpenClaw Ecosystem Digest 2026-03-24

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-24 00:09 UTC

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

# OpenClaw Project Digest: 2026-03-24

## 1. Today's Overview
OpenClaw is experiencing an **extremely high-velocity development cycle**, with over 1,000 issues and pull requests updated in the last 24 hours. While the project is bustling with new feature proposals and integrations, it is currently facing significant **release stability challenges**. The latest release cycle (`v2026.3.22` and `v2026.3.23`) has introduced critical regressions, primarily concerning missing npm assets and plugin incompatibilities, which have dominated the community's attention. Despite these friction points, the ecosystem is rapidly expanding with advanced tooling like Knowledge Graph memory and cron improvements.

## 2. Releases
Two major updates were pushed yesterday, followed by a rapid hotfix:

*   **v2026.3.23** (Hotfix)
    *   **Fixes:** `Browser/Chrome MCP`: Resolved an issue where the Chrome MCP handshake was treated as ready before existing-session browser tabs were usable. This fixes user-profile timeouts and repeated consent prompts on macOS Chrome attach flows.
*   **v2026.3.22** (Major Release - **Caution Advised**)
    *   **Breaking Change:** Plugin installation behavior (`openclaw plugins install <package>`) now prioritizes **ClawHub** over npm for npm-safe names.
    *   **Browser/Chrome MCP:** Removed "the leg" (specific implementation detail).
    *   **Note:** This release is currently subject to widespread reports regarding missing Control UI assets and broken plugin integrations (WhatsApp, Matrix, Lark, etc.).
*   **v2026.3.22-beta.1** (Pre-release)
    *   Testing the new ClawHub-first installation logic. No macOS app build was attached.

## 3. Project Progress
Development activity is intense, with hundreds of PRs in flight. Key areas of advancement include:

*   **Cron & Automation:** Significant improvements are in progress ([PR #53237](https://github.com/openclaw/openclaw/pull/53237)), including script payloads, skill triggers, and better Twilio-SMS/Webchat attachment handling.
*   **Reliability Fixes:**
    *   **Delivery Queue:** Moving from startup-only recovery to a periodic timer to handle pending messages better ([PR #52534](https://github.com/openclaw/openclaw/pull/52534)).
    *   **Telegram:** Fixed polling liveness monitoring to detect when the bot stops receiving updates ([PR #51931](https://github.com/openclaw/openclaw/pull/51931)).
*   **Internationalization:** Work has begun to support locales in configuration and UI components ([PR #53037](https://github.com/openclaw/openclaw/pull/53037)), a highly requested community feature.
*   **Memory & Knowledge Graph:** A hybrid memory plugin featuring Knowledge Graphs and free Gemini support is being integrated ([PR #32154](https://github.com/openclaw/openclaw/pull/32154)).

## 4. Community Hot Topics
The community is hyper-focused on stability issues following the latest updates.

*   **The "Control UI Assets Not Found" Crisis:**
    *   **Impact:** Critical. Users updating via npm (`npm install -g openclaw@2026.3.22`) are finding their web dashboards completely broken (HTTP 503).
    *   **Root Cause:** The `dist/control-ui/` directory appears to be missing from the npm package.
    *   **Reaction:** Over 15 distinct issues were opened (e.g., [#52808](https://github.com/openclaw/openclaw/issues/52808), [#52925](https://github.com/openclaw/openclaw/issues/52925), [#53050](https://github.com/openclaw/openclaw/issues/53050)) in the last 24 hours alone. Users are frustrated that the suggested fix (`pnpm ui:build`) is not viable for standard npm installs.
*   **Ecosystem Expansion (ClawHub & Skills):**
    *   Issue [#50090](https://github.com/openclaw/openclaw/issues/50090) discusses the gap between the promise and reality of "Community Skills" and the ClawHub plugin store.
    *   Users are eager for a "living ecosystem of agent primitives" but note that the current tooling is lacking.
*   **Internationalization (i18n):**
    *   Issue [#3460](https://github.com/openclaw/openclaw/issues/3460) continues to gain traction (114 comments), with the community asking for localization support, though maintainers cite bandwidth constraints.

## 5. Bugs & Stability
**Severity: High.** The `v2026.3.22` release caused significant regressions.

1.  **Missing Control UI Assets (npm):** Affecting almost all users updating via npm. The dashboard is inaccessible. (See #52808, #52987).
2.  **Plugin Breakages:**
    *   **WhatsApp:** Removed from `optionalBundledClusters` but not handled gracefully in the npm release workflow ([#52838](https://github.com/openclaw/openclaw/issues/52838)).
    *   **Matrix / Lark / Weixin:** Users reporting API version mismatches and "module not found" errors for core plugin SDK paths ([#52899](https://github.com/openclaw/openclaw/issues/52899), [#52885](https://github.com/openclaw/openclaw/issues/52885)).
3.  **Slack Socket Mode Regression:** Users report zero inbound events despite successful connections ([#45311](https://github.com/openclaw/openclaw/issues/45311)).
4.  **macOS Browser Detection:** Failures in detecting Edge/Chromium as the default browser are being addressed in open PRs ([#48561](https://github.com/openclaw/openclaw/pull/48561)).

## 6. Feature Requests & Roadmap Signals
*   **Prebuilt Android APK:** Users are requesting official APK releases for the Android companion app instead of requiring users to build from source ([#9443](https://github.com/openclaw/openclaw/issues/9443)).
*   **Cognitive Memory Layer:** A proposal for persistent semantic memory with Ebbinghaus decay curves to give agents long-term "memory" ([#52532](https://github.com/openclaw/openclaw/issues/52532)).
*   **Prompt Caching:** Requests for `prompt_cache_key` metadata to optimize routing and costs for multi-session setups ([#16357](https://github.com/openclaw/openclaw/issues/16357)).

## 7. User Feedback Summary
User sentiment is currently split between **enthusiasm for the platform's capabilities** and **frustration with update stability**.
*   **Negative:** The "Control UI assets" error has eroded trust in the `openclaw update` command. Users on npm and install.sh feel neglected compared to macOS app users. The error message "Build them with `pnpm ui:build`" is seen as unhelpful for end-users.
*   **Positive:** There is strong appreciation for the rapid addition of new features (Kilo balance, Twilio SMS, Cron improvements) when they work.

## 8. Backlog Watch
Several long-standing issues remain unresolved:
*   **Agent Context Corruption:** Raw API errors leaking into chat when context is corrupted ([#11038](https://github.com/openclaw/openclaw/issues/11038)).
*   **Subagent Context Preservation:** Slack threads losing context when subagents are spawned ([#17731](https://github.com/openclaw/openclaw/issues/17731)).
*   **Multi-Agent Isolation:** Platform prerequisites for org-level isolation are still being defined ([#10004](https://github.com/openclaw/openclaw/issues/10004)).

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: AI Agent & Assistant Landscape
**Date:** 2026-03-24
**Prepared by:** Senior Analyst, Open-Source Intelligence Unit

## 1. Ecosystem Overview
The personal AI agent and assistant open-source ecosystem is currently undergoing a phase of **explosive growth accompanied by significant growing pains**. The landscape is dominated by two distinct archetypes: "Feature-First" platforms (e.g., *OpenClaw, LobsterAI, CoPaw*) that are rapidly expanding capabilities like memory, knowledge graphs, and multi-modal I/O, often at the expense of immediate stability; and "Stability-First" platforms (e.g., *Moltis, NanoClaw*) that are prioritizing security hardening, container isolation, and architectural refactoring. Across the board, there is a massive industry-wide shift toward **standardized interoperability (MCP/A2A protocols)**, **advanced memory systems** (Vector DBs, MemOS, Knowledge Graphs), and **security hardening** (sandboxing, secret management) as these agents move from playful experiments to production-ready tools.

---

## 2. Activity Comparison

| Project | Issue Vol. (24h) | PR Vol. (24h) | Release Status | Health Score | Trending Topic |
| :--- | :---: | :---: | :--- | :---: | :--- |
| **OpenClaw** | High (17+) | Extreme (50+) | `v2026.3.23` (Hotfix) | ⚠️ Unstable | Release Friction (Assets) |
| **NanoBot** | High (17) | Extreme (78) | None (Fixes Merged) | 🔥 Critical | Token Overflow (Heartbeat) |
| **ZeroClaw** | Moderate (45) | High (50) | `v0.5.9` (Stable) | ✅ Healthy | Security vs. Functionality |
| **PicoClaw** | Moderate (13) | High (78) | Nightly (`v0.2.3-dev`) | ⚠️ Caution | Agent Refactor (Phase 2) |
| **NanoClaw** | Moderate (17) | Moderate (37) | None | ⚠️ Risky | Security Architecture |
| **NullClaw** | Low (8) | Moderate (14) | None | ✅ Stable | Config & Environment Vars |
| **IronClaw** | Moderate (16) | High (50) | `v0.22.0` (RC) | ⚠️ Breaking | Windows Defender Flags |
| **LobsterAI** | High (21) | High (36) | `2026.3.23` | ⚠️ Regression | Update Failures (Win/Mac) |
| **TinyClaw** | Low (2) | Low (7) | None | ✅ Polished | Task Management UI |
| **Moltis** | Low (10) | High (42) | None | ✅ Robust | Windows/Platform Support |
| **CoPaw** | Extreme (50) | Extreme (50) | `v0.1.0` (Post-Release) | 🔥 Volatile | Memory Hallucinations |
| **ZeptoClaw** | Moderate (3) | Moderate (8) | `v0.8.0` | ✅ Stable | Architectural Refactoring |
| **EasyClaw** | None | None | `v1.7.7` (Maintenance) | ✅ Mature | macOS Gatekeeper |

---

## 3. OpenClaw's Position
**Advantages vs. Peers:**
*   **Market Dominance:** OpenClaw maintains the largest raw issue/PR volume and community mindshare, acting effectively as the "reference implementation" for the ecosystem.
*   **Feature Breadth:** It leads in niche integrations (Twilio-SMS, WhatsApp, Matrix) and advanced platform features like Knowledge Graph memory and Cron automation, which peers like *TinyClaw* or *NullClaw* have yet to implement.

**Technical Approach & Community Size:**
*   **"Bundled" vs. "Composable":** Unlike *Moltis* (Rust, modular) or *NanoClaw* (Container-first), OpenClaw is a monolithic TypeScript/Node.js bundle. This allows for rapid feature addition but creates the "npm asset" dependency hell seen today.
*   **Scale Friction:** OpenClaw's community is arguably too large for its current maintenance bandwidth; the "Control UI" crisis (affecting 100% of npm users) indicates a gap in CI/CD rigor that smaller projects like *ZeptoClaw* (with strict regression testing) have managed to avoid.

---

## 4. Shared Technical Focus Areas
The following requirements are emerging simultaneously across multiple distinct projects, indicating industry-standard needs:

*   **Agent Memory & Persistence:**
    *   *OpenClaw* (Knowledge Graph PR), *NanoClaw* (MemOS), *ZeroClaw* (pgvector/hybrid search), *PicoClaw* (Seahorse biological memory).
    *   **Signal:** Stateless chatbots are dead; the ecosystem is racing to build persistent, semantic long-term memory.
*   **Security Sandboxing & Isolation:**
    *   *NanoBot* (`bwrap` for `exec`), *NanoClaw* (Container Trust Debates), *PicoClaw* (Tirith scanning), *ZeroClaw* (Secure-by-Default philosophy).
    *   **Signal:** As agents gain `exec` and file access, the community is demanding strict security boundaries to prevent self-leakage or command injection.
*   **Standardized Inter-Agent Protocols:**
    *   *Moltis* (MCP - Model Context Protocol), *IronClaw* (ACP - Agent Client Protocol), *NullClaw* (A2A Protocol Client requests).
    *   **Signal:** A move toward agents calling other agents (Multi-Agent Systems) using standardized comms rather than custom APIs.
*   **Voice & Streaming I/O:**
    *   *PicoClaw* (Universal Voice Orchestrator), *LobsterAI* (Voice Input), *ZeroClaw* (Unified Voice Pipeline), *NanoBot* (SSE Web Chat).
    *   **Signal:** Text-only is insufficient; users are demanding real-time, low-latency voice and streaming token responses.

---

## 5. Differentiation Analysis

| Project | Key Differentiator | Target User |
| :--- | :--- | :--- |
| **OpenClaw** | "The Kitchen Sink" - Integrates everything (WhatsApp, Slack, SMS). Most comprehensive ecosystem. | Power users wanting an all-in-one automation hub. |
| **NanoBot** | "High-Velocity Python" - Focus on LLM provider flexibility and Chinese ecosystem (WeChat/DingTalk). | Developers prioritizing speed and Chinese market integration. |
| **ZeroClaw** | "Secure by Default" - Willing to break functionality to enforce safety defaults. | Security-conscious professionals and enterprise deployments. |
| **Moltis** | "Systems Performance" - Written in Rust, focuses on Token efficiency (Lazy Loading) and Vulkan/CUDA support. | Users needing high-performance, low-latency local execution. |
| **IronClaw** | "Blockchain-Native" - Deep integration with NEAR AI TEEs and WASM tooling. | Web3 developers and decentralized application builders. |
| **PicoClaw** | "The Architect" - Currently undergoing major refactoring (Phase 2) to support multi-agent collaboration. | Researchers and developers interested in agent architecture. |
| **CoPaw** | "The OS Agent" - Focuses on local tool execution (Browser, Shell) and memory summarization. | Users replacing local scripts with an AI agent. |
| **TinyClaw** | "The PM's Assistant" - Focusing on Linear-style task tracking and project management UI. | Product managers using AI for workflow orchestration. |

---

## 6. Community Momentum & Maturity

*   **Rapidly Iterating (High Velocity, High Instability):**
    *   **OpenClaw:** Moving too fast; releases are frequently breaking (Asset crisis).
    *   **CoPaw:** Post-v0.1.0 volatility is high; critical bugs in memory/tool execution.
    *   **NanoBot:** Aggressively fixing critical "Heartbeat" and "Zombie Process" bugs daily.

*   **Stabilizing & Maturing (High Velocity, Controlled Stability):**
    *   **Moltis:** Excellent hygiene. Clearing backlog rapidly while fixing Windows/Vulkan issues.
    *   **ZeptoClaw:** Balanced approach. Releasing features (v0.8.0) while simultaneously addressing technical debt (Clippy warnings).
    *   **IronClaw:** Preparing for a breaking v0.22.0 release but maintaining active dialogue on API changes.

*   **Niche / Low Activity:**
    *   **EasyClaw:** In maintenance/sleep mode. Only addressing client signing issues.

---

## 7. Trend Signals for AI Developers

1.  **The "Plugin" Standard War:** The ecosystem is fragmenting between **MCP (Model Context Protocol)** (adopted by *OpenClaw*, *Moltis*, *LobsterAI*) and proprietary skill systems. Developers should monitor MCP closely as the early winner for cross-platform tool sharing.
2.  **Cost Optimization is Critical:** Users are hypersensitive to Token usage.
    *   *Evidence:* *NanoBot's* "Heartbeat" bug caused panic due to cost; *Moltis* is implementing "Lazy Tool Loading" to save 15k tokens/turn.
    *   **Implication:** Features that cache prompts or reduce context size (Prompt Caching) will be highly valued.
3.  **"God Mode" vs. "Nanny AI":** There is a palpable user backlash against "Safe by Default" restrictions (*ZeroClaw* Issue #1478). Developers should allow for an "Expert/Unrestricted" mode in their agents to satisfy power users who want to bypass safety rails.
4.  **Windows is Production-Ready:** The days of "Linux only" are over. Projects like *Moltis*, *IronClaw*, and *LobsterAI* are seeing massive issue volumes regarding Windows compatibility (Defender flags, file locking, installers), proving that Windows is a primary deployment target for 2026.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-24

## 1. Today's Overview
NanoBot is experiencing a phase of intense high-velocity development and critical stability fixes. The project is exceptionally active, with 78 Pull Requests updated in the last 24 hours—indicating a massive sprint likely related to stability, resource management, and channel expansions. However, the influx of 17 new Issues in the same period suggests that recent changes may have introduced regressions, particularly concerning the "Heartbeat" feature causing massive token overflow and `exec` tools spawning zombie processes.

**Activity Assessment:** *Extreme* (High development velocity matched by high bug report volume).

---

## 2. Releases
No new releases were published in the last 24 hours.

---

## 3. Project Progress
The community and maintainers are aggressively attacking stability issues, with several critical fixes ready or recently merged.

**Merged/Closed Fixes:**
*   **Heartbeat Token Overflow:** PR #2398 was **CLOSED** (merged), addressing the critical issue where the heartbeat session accumulated infinite history, consuming 560k+ tokens in a single run.
*   **Zombie Processes:** PR #2362 was **CLOSED** (merged), fixing the shell timeout logic that left defunct child processes unreaped.
*   **WeChat Support:** PR #2348 was **CLOSED** (merged), officially adding a personal WeChat channel via the ilinkai API.

**Open Progress (Ready to Merge):**
*   **Refined Heartbeat Logic:** PR #2420 proposes a more robust "ephemeral" approach to heartbeat sessions to prevent state leakage entirely.
*   **Security & Sandboxing:** PR #1940 introduces `bwrap` (bubblewrap) sandboxing for `exec` calls, addressing the critical security concern regarding config file access (Issue #1873).
*   **Streaming & UI:** PR #1341 introduces a self-contained Web Chat channel with SSE streaming, expanding accessibility beyond CLI and existing chat platforms.

---

## 4. Community Hot Topics

**🔥 Critical Issue: Heartbeat Token Meltdown**
*   **Issue:** [#2375](https://github.com/HKUDS/nanobot/issues/2375) (Heartbeat session history causes ENORMOUS token usage)
*   **Discussion:** 8 comments in 24 hours.
*   **Analysis:** Users reported the heartbeat feature consuming **560,000 tokens** in a single execution due to unbounded history accumulation. This is currently the highest-impact operational cost bug. A fix is merged in PR #2398, but follow-up PR #2420 suggests further refinement is needed.

**🔥 Critical Security: Config Leakage via Exec**
*   **Issue:** [#1873](https://github.com/HKUDS/nanobot/issues/1873) (Nanobot currently cannot be secured from accessing it's own config.json)
*   **Discussion:** 10 comments (Re-activated).
*   **Analysis:** A fundamental architectural flaw allows the agent to read its own `config.json` (and leak API keys) via the `exec` tool. The community is pushing for sandboxing. PR #1940 is open to address this using Linux namespaces.

**🔥 Stability: Zombie Process Accumulation**
*   **Issue:** [#2405](https://github.com/HKUDS/nanobot/issues/2405) (Zombie processes accumulate from exec tool subprocesses)
*   **Discussion:** 3 comments, quickly addressed.
*   **Analysis:** Users running in Docker noticed dozens of `<defunct>` Python processes. Fix PR #2410 is open.

---

## 5. Bugs & Stability

**High Severity:**
1.  **Context Window Overflow:** Issue #2343 reports that `run_agent_loop` fails to check `contextWindowTokens`, leading to API crashes (Requested 36748 > Limit 32768).
2.  **CRON/Workspace State Leak:** Issue #2358 - Switching workspaces fails to stop old CRON jobs, causing them to run with incorrect system prompts.
3.  **Model Provider 401 Errors:** Issue #2329 - Custom model providers work in CLI but fail in channels (Feishu) with "Invalid Model" errors.

**Medium Severity:**
*   **Ollama Tool Execution:** Issue #2293 - Conversations with local `qwen2.5:14b` models die silently when tools are executed.
*   **MCP Tool Discovery:** Issue #2325 - Nanobot fails to discover new tools added to an MCP server without a restart.

**Fixes Available:**
*   Zombie processes (Open PR #2410).
*   Heartbeat token overflow (Merged PR #2398).

---

## 6. Feature Requests & Roadmap Signals

**Incoming Features (High Signal):**
*   **OpenWebUI Integration:** Requested in Issue #2389. Users want a standardized Web UI channel.
*   **Feishu Streaming:** PR #2419 adds progressive message editing for Feishu, bringing a "ChatGPT-like" streaming experience to Lark/Feishu.
*   **Model Fallback:** PR #2417 adds automatic failover to backup models if the primary model rate-limits (429) or fails (500/503).
*   **Tirith Security Scanning:** PR #2414 integrates pre-execution command scanning to prevent homograph attacks and malicious shell commands.

**Config Improvements:**
*   Issue #2399 requests a `--data-dir` flag to separate runtime data from configuration, aiding Kubernetes deployments.

---

## 7. User Feedback Summary

**Pain Points:**
*   **Resource Anxiety:** Users are hypersensitive to token costs. The heartbeat bug (500k+ tokens) and lack of "skip empty task" logic caused significant alarm.
*   **Deployment Complexity:** Users are struggling with "Zombie" processes in Docker and proper isolation (Config access) in multi-user containers.
*   **Reliability with Local LLMs:** Users running `Ollama` or `MiniMax` are facing instability when the agent attempts to use tools (conversations dying or JSON parsing errors).

**Satisfaction:**
*   High demand for the **WeChat** integration (PR #2348) suggests the project is filling a vital gap in the Chinese AI ecosystem.

---

## 8. Backlog Watch

**Stale Issues needing Attention:**
*   **Matrix Auth Spam:** Issue #1851 (Auth error spams the server / crashes sync).
*   **Discord Slash Commands:** Issue #1315 (Conflicts with native Discord slash commands).
*   **Subagent Duplicate Calls:** Issue #1473 (LLM spawns duplicate subagents).
*   **Gemini API Key Handling:** Issue #144 (Forces Vertex AI even if user wants direct Gemini API).

These issues have been open for weeks but received updates in the last 24 hours, indicating they are still affecting users but lack a clear owner or fix.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-03-24

## 1. Today's Overview
ZeroClaw is demonstrating **high activity** with significant architectural progress. The project released three versions today, culminating in **v0.5.9**, which focuses on incremental polish following a beta cycle that introduced major new capabilities like browser automation and VNC scripting. Development velocity is robust, with 50 PRs and 45 issues updated in the last 24 hours. The community is highly engaged, debating the balance between stringent security defaults and functional flexibility, while maintainers are actively merging features related to memory architecture, voice pipelines, and tool discovery.

## 2. Latest Releases
*   **v0.5.9 (Stable):**
    *   **Changes:** Incremental improvements and polish.
    *   **Context:** This release stabilizes the features introduced in the beta cycle.
*   **v0.5.9-beta.579 & v0.5.9-beta.578:**
    *   **New Features:**
        *   **Browser Automation:** Added browser automation skills and VNC setup scripts.
        *   **Feishu/Lark Support:** Added image and file support for the Feishu/Lark channel.
        *   **Search:** Integrated SearXNG as a search provider.
        *   **Voice:** Added support for voice message transcription.
        *   **Cron Jobs:** Introduced declarative cron job configuration.
        *   **Gateway:** Added named sessions with reconnect and validation features.

## 3. Project Progress (Merged & Closed)
*   **Architecture & Memory:**
    *   **Merged PR #4112:** `feat(memory): add pgvector backend with hybrid search`. This moves ZeroClaw towards a more robust, database-first memory architecture, enabling hybrid semantic and keyword retrieval.
*   **Docker & Tooling:**
    *   **Merged PR #792:** Restored the GHCR (GitHub Container Registry) image as the default in `docker-compose.yml`, ensuring smoother out-of-the-box containerized deployments.
    *   **Merged PR #4450:** Featured live tmux streaming to Matrix and cron-bot deduplication.
*   **Bug Fixes:**
    *   **Closed Issue #4293:** Fixed a binary selector logic issue on `aarch64` Linux where the wrong asset was selected during updates.
    *   **Closed Issue #4236:** Added support for the `/new` command across all messaging channels (Telegram, Discord, Matrix) to reset sessions.

## 4. Community Hot Topics
*   **[#1478 - Feature: "Besides security, it has no function"](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) (46 comments)**
    *   **The Debate:** A highly charged discussion regarding ZeroClaw's "Secure by Default" philosophy. Users are frustrated that safety policies block installation of tools (like `ffmpeg`) or execution of basic tasks even when autonomy is set to "full".
    *   **Underlying Need:** There is a strong user demand for a **"God Mode"** or **"I Know What I'm Doing"** configuration flag that completely bypasses safety validations for personal, trusted instances.
*   **[#3818 - Feature: Restore missing security and core functionalities from legacy main branch](https://github.com/zeroclaw-labs/zeroclaw/issues/3818) (5 comments)**
    *   **The Issue:** Critical features (Copilot onboarding, `task_plan` tool) were lost during the migration from the `main` to `master` branch.
    *   **Underlying Need:** Users are experiencing feature regression and want parity between the old and new branch structures immediately.
*   **[#4040 - Register skill [[tools]] as callable tool specs](https://github.com/zeroclaw-labs/zeroclaw/issues/4040) (4 comments)**
    *   **The Issue:** Currently, tools defined in `SKILL.toml` are only added to the system prompt as XML text, not registered as executable function calls.
    *   **Underlying Need:** The community wants the skills system to be functionally native to the agent's tool loop, not just passive context.

## 5. Bugs & Stability
*   **High Severity (Workflow Blocked):**
    *   **[#4442 - `allowed_tools` field must stay empty](https://github.com/zeroclaw-labs/zeroclaw/issues/4442):** Cron jobs fail to run if `allowed_tools` is populated; a logic error in how tools are reported to the provider.
    *   **[#4408 - Websocket channels don't honor proxy settings](https://github.com/zeroclaw-labs/zeroclaw/issues/4408):** Affects all channels using websockets; proxies are ignored, breaking connectivity for users behind corporate firewalls.
    *   **[#4296 - Custom OpenAI Provider error](https://github.com/zeroclaw-labs/zeroclaw/issues/4296):** Regression since v0.5.1 where custom providers return 502 errors.
*   **Medium Severity:**
    *   **[#4227 - Matrix E2E Encryption "no key was found"]** - Functional degradation in Matrix channel.
    *   **[#4300 - Channel draft streaming hang]** - Channels with draft updates can hang indefinitely after the tool loop finishes.

## 6. Feature Requests & Roadmap Signals
Based on open PRs and active discussions:
*   **Database-First Memory (Likely Next):** PR #4112 suggests advanced memory capabilities are merging now.
*   **Streaming Everywhere:** Open **[#4452](https://github.com/zeroclaw-labs/zeroclaw/issues/4452)** requests "Mid-turn streaming" for Discord and Matrix to match Telegram, reducing user perception of latency.
*   **Unified Voice Pipeline:** **[PR #4427](https://github.com/zeroclaw-labs/zeroclaw/pull/4427)** proposes a unified facade for STT/TTS, suggesting improved voice interaction across channels.
*   **Hot-Reload Config:** **[PR #4424](https://github.com/zeroclaw-labs/zeroclaw/pull/4424)** aims to allow config reloading via `SIGHUP` without restarting the daemon, a major ops improvement.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Security Fatigue:** Users feel "babied" by the security restrictions (Issue #1478). The complexity of configuring `autonomy` levels vs. actual execution permissions is causing friction.
    *   **Docker Limitations:** Users report that the Docker image is too stripped down (missing basic utils like `curl`/`wget`), making debugging difficult (Issue #4445).
    *   **Regression Anxiety:** The branch switch from `main` to `master` has left users missing specific tools and cost tracking features (Issues #3818, #3679).
*   **Positive Reception:**
    *   The new beta features (Browser automation, SearXNG, VNC) are well-received, indicating a desire for ZeroClaw to be a powerful *automation* agent, not just a chatbot.

## 8. Backlog Watch
*   **Maintainer Attention Needed:**
    *   **[#4028 - Database-first memory architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/4028):** A proposal for persistent knowledge infrastructure. While a PR exists, the architectural discussion needs resolution.
    *   **[#3679 - Cost tracking and enforcement missing](https://github.com/zeroclaw-labs/zeroclaw/issues/3679):** A feature present in the legacy branch was removed in `master`. Users operating on a budget need this restored.
    *   **Open PR #4450 (tmux streaming) & #4443 (security sandbox):** High complexity PRs that are open but not yet merged, indicating potential ongoing architectural refactoring.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Project Digest: PicoClaw (2026-03-24)

## 1. Today's Overview
PicoClaw is experiencing a **high-velocity development cycle**, with 78 Pull Requests updated in the last 24 hours (26 open, 52 merged/closed). The project is currently undergoing a significant **Agent Refactoring (Phase 2)** following the completion of Phase 1 core implementation. The community is highly active, driving complex feature additions like **Universal ASR/TTS support** and biologically-inspired memory systems. While the merge rate is healthy, there is a notable cluster of bugs regarding **OpenAI-compatible provider integrations** (e.g., reasoning channels, API key passing) that indicates friction with the expanding provider ecosystem.

## 2. Releases
**New Release: `v0.2.3-nightly.20260323.3500080a`**
*   **Status**: Nightly Build (Unstable).
*   **Key Changes**: Since the last tag (v0.2.3), the main branch has integrated multiple updates including Agent Refactor Phase 1 and various provider fixes.
*   **Note**: Users on the stable channel should wait for the official v0.2.4 tag, while nightly users should be aware of potential instability in the new agent loop.
*   **Changelog**: [Compare v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

## 3. Project Progress
*   **Agent Refactoring (Phase 1)**: Marked as **COMPLETED** (PR #1894). The core implementation for the new agent architecture is now in place. ([#1216](https://github.com/sipeed/picoclaw/issues/1216))
*   **Universal Voice Support**: Significant progress on full-duplex voice interaction. PR #1852 introduces "Voice send & receive function" supporting Discord and Weixin, utilizing a Voice Orchestrator for Mode 4.2 (Streaming Voice). ([#1852](https://github.com/sipeed/picoclaw/pull/1852))
*   **Telegram Enhancements**:
    *   **Streaming Responses**: PR #1906 seeks to wire the existing streaming pipeline into the agent loop, enabling token-by-token "live typing" effects for Telegram. ([#1906](https://github.com/sipeed/picoclaw/pull/1906))
    *   **Voice Support**: ElevenLabs Scribe API integration for STT has been added/merged. ([#1905](https://github.com/sipeed/picoclaw/pull/1905))
*   **Security Enhancements**:
    *   **Tirith Integration**: PR #1932 adds pre-execution security scanning for shell commands to detect homograph attacks and pipe-to-shell patterns. ([#1932](https://github.com/sipeed/picoclaw/pull/1932))
    *   **Sensitive Data Filtering**: PR #1930 implements filters to prevent tool results (containing API keys/secrets) from being sent to the LLM. ([#1930](https://github.com/sipeed/picoclaw/pull/1930))
*   **Infrastructure**:
    *   **AWS Bedrock**: Added as a new LLM provider. ([#1903](https://github.com/sipeed/picoclaw/pull/1903))
    *   **Session History**: PR #1709 adds persistence for message IDs and reply threading to session history. ([#1709](https://github.com/sipeed/picoclaw/pull/1709))

## 4. Community Hot Topics
*   **[Feature] Adding TTS and ASR Support to PicoClaw** ([#1648](https://github.com/sipeed/picoclaw/issues/1648))
    *   *Status*: Open | *Comments*: 21
    *   *Analysis*: There is strong demand for a flexible, provider-agnostic voice I/O system. Users want to move beyond hardcoded solutions (like Groq Whisper) to support OpenAI, HuggingFace, and local STT/TTS across various channels (Telegram, Discord).
*   **Meta: Agent refactor** ([#1216](https://github.com/sipeed/picoclaw/issues/1216))
    *   *Status*: Closed (Phase 1) | *Comments*: 10
    *   *Analysis*: A central tracking issue for the major architectural overhaul. The community is closely watching the completion of Phase 1 and the start of Phase 2 (Multi-Agent Collaboration).
*   **Seahorse - Biologically-inspired Memory System** ([#1919](https://github.com/sipeed/picoclaw/issues/1919))
    *   *Status*: Open | *Comments*: 3
    *   *Analysis*: A proposal to add "human-like" memory (short-term and long-term) to agents. This signals a user desire for more persistent, stateful agents rather than stateless request-response cycles.

## 5. Bugs & Stability
*   **[CRITICAL] Configuration & Provider Bugs**:
    *   **OpenAI-compatible Provider Regressions**: Multiple reports indicate `reasoning_channel_id` is broken ([#1746](https://github.com/sipeed/picoclaw/issues/1746)), and `/v1/models` probes fail due to missing API keys ([#1864](https://github.com/sipeed/picoclaw/issues/1864)). *Fix PR exists for reasoning channel: [#1907](https://github.com/sipeed/picoclaw/pull/1907).*
    *   **API Key Validation**: Errors where the web launcher fails to save keys or validates config against security files incorrectly ([#1929](https://github.com/sipeed/picoclaw/pull/1929)).
*   **[HIGH] Agent Loop Logic**:
    *   **Duplicate Replies**: Named agents send duplicate messages when using the `message` tool ([#1909](https://github.com/sipeed/picoclaw/issues/1909)).
    *   **Spamming New Topics**: Agents perform random tool calls when new Telegram topics are created due to empty message handling ([#1916](https://github.com/sipeed/picoclaw/issues/1916)).
*   **[MEDIUM] Cron Tasks**:
    *   Tasks with `deliver=false` silently discard LLM responses ([#1058](https://github.com/sipeed/picoclaw/issues/1058)), leading to user confusion.
    *   Cron execution occasionally fails to run correctly ([#1568](https://github.com/sipeed/picoclaw/issues/1568)).
*   **[LOW] Channel Specifics**:
    *   Telegram on Termux is failing ([#1936](https://github.com/sipeed/picoclaw/issues/1936)).
    *   Weixin channel fails to persist cursor due to permission denied errors at `/root/.picoclaw` ([#1917](https://github.com/sipeed/picoclaw/issues/1917)).

## 6. Feature Requests & Roadmap Signals
*   **Model Cascade Failover**: Users are requesting automatic failover to secondary models when rate limits are hit (e.g., Ollama cloud) ([#1908](https://github.com/sipeed/picoclaw/issues/1908)).
*   **Agent Refactor Phase 2**: Planning for "Multi-Agent Collaboration within Single Pico" has begun ([#1934](https://github.com/sipeed/picoclaw/issues/1934)).
*   **HTML/Markdown Mixed Rendering**: Request to support HTML tags in the Web Chat interface for better formatting ([#1897](https://github.com/sipeed/picoclaw/issues/1897)).

## 7. User Feedback Summary
*   **Pain Points**:
    *   **Configuration Complexity**: Users are struggling with API key management, specifically the interaction between the Web UI, `.security.yml`, and validation logic.
    *   **Provider Compatibility**: There is frustration with "OpenAI-compatible" providers (like LiteLLM, MiniMax, local gateways) breaking due to missing headers or incorrect model ID handling.
*   **Satisfaction**:
    *   Users appreciate the rapid pace of development (Nightly builds).
    *   The move towards more "biological" features (memory) and security (Tirith) is well-received by the advanced user base.

## 8. Backlog Watch
*   **[BUG] Cron deliver=false** ([#1058](https://github.com/sipeed/picoclaw/issues/1058)): Created March 4, still open. Users expect the agent to process cron tasks, but currently, the output is lost.
*   **[Feature] Pluggable Speech I/O** ([#1503](https://github.com/sipeed/picoclaw/issues/1503)): Created March 13, recently closed. This was a major backlog item that is now seeing active movement via PRs #1852 and #1905.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-24

## 1. Today's Overview
NanoClaw is experiencing a **high-velocity development cycle**, with 37 Pull Requests and 17 Issues updated in the last 24 hours. The project is actively expanding its **multi-platform integration capabilities** (adding Mattermost, Emacs, and AstrBot channels) and reinforcing its **security posture** following recent critiques regarding container isolation. While feature additions are prolific, the project is facing significant technical debt regarding **container caching bugs** and unresolved high-severity security vulnerabilities related to command injection and network restrictions.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
The following features and fixes have recently been merged or closed:

*   **Persistent Memory via MemOS:** PR #1131 (Linked to Issue #1130) was closed, successfully integrating the [MemOS](https://github.com/MemTensor/MemOS) system as an opt-in skill (`/add-memos`) for persistent, semantic memory storage.
*   **Security & Infrastructure Hygiene:** PR #1196 added an `/audit-security` skill, allowing agents to self-audit security vectors.
*   **New Integrations:** Support for Rovo Dev as an alternative agent backend was merged (PR #1374).
*   **Knowledge Management:** PR #1359 successfully migrated the "knowledge warehouse" content into the main NanoClaw KB system.
*   **Bug Fixes:** PR #1378 fixed a setup issue where `mount-allowlist.json` would be overwritten, and PR #1372 resolved a bug where diagnostics prompts were silently skipped by the model.

## 4. Community Hot Topics
*   **Security Architecture Debate ([Issue #865](https://github.com/qwibitai/nanoclaw/issues/865))**
    *   **Status:** Closed (Discussion)
    *   **Analysis:** This thread sparked significant debate regarding "Container Trust." The community highlighted that NanoClaw's default architecture implicitly trusts containers, leading to hardening efforts by users.
*   **Multi-Provider AI Routing ([PR #1383](https://github.com/qwibitai/nanoclaw/pull/1383))**
    *   **Status:** Open
    *   **Analysis:** There is strong demand to decouple NanoClaw from Anthropic exclusively. This PR implements routing for OpenRouter, OpenAI, Gemini, and Moonshot, addressing the "Vendor Lock-in" concern.
*   **Unrestricted Network Access ([Issue #458](https://github.com/qwibitai/nanoclaw/issues/458))**
    *   **Status:** Open
    *   **Reactions:** 👍 4
    *   **Analysis:** A critical concern regarding data exfiltration risks. Users are demanding network restrictions for agent containers, particularly when running in high-privilege modes.
*   **Mattermost Integration ([Issue #1379](https://github.com/qwibitai/nanoclaw/issues/1379))**
    *   **Status:** Open
    *   **Analysis:** Enterprise users are requesting support for Mattermost to complement existing Slack and Discord capabilities.

## 5. Bugs & Stability
*   **[CRITICAL] Container Command Injection ([Issue #457](https://github.com/qwibitai/nanoclaw/issues/457))**
    *   The `stopContainer()` function uses unsafe string interpolation with `exec()`, allowing potential command injection. **No fix PR listed yet.**
*   **[HIGH] Agent-Runner Source Cache Stale ([Issue #1361](https://github.com/qwibitai/nanoclaw/issues/1361))**
    *   Code changes to the agent-runner are not propagated to existing groups because the source cache never refreshes. This significantly hampers development workflows. **No fix PR listed yet.**
*   **[HIGH] WebFetch Refusal String Injection ([Issue #842](https://github.com/qwibitai/nanoclaw/issues/842))**
    *   Agents fetching web content are vulnerable to session termination via specific "refusal strings" (Anthropic test strings). **No fix PR listed yet.**
*   **[MEDIUM] Oracle Cloud iptables Blocking ([Issue #1357](https://github.com/qwibitai/nanoclaw/issues/1357))**
    *   Containers fail silently on Oracle Cloud due to restrictive host iptables blocking the credential proxy (port 3001).

## 6. Feature Requests & Roadmap Signals
*   **GitHub Copilot SDK Support ([Issue #1350](https://github.com/qwibitai/nanoclaw/issues/1350)):** Users want to use GPT-4.1 via Copilot as a backend, reducing reliance on Claude API keys.
*   **Agent Memory Redesign ([Issue #1356](https://github.com/qwibitai/nanoclaw/issues/1356)):** The current flat-file memory system (MEMORY.md) is hitting scaling limits. A proposal exists to move to a more robust, scalable database-backed system.
*   **Capability-Based Security ([Issue #779](https://github.com/qwibitai/nanoclaw/issues/779)):** A proposal for a manifest-based security model (`skill.json`) to define specific network, filesystem, and environment capabilities per skill.
*   **Local Voice Transcription:** Recently merged PR #1250 adds `/add-local-voice`, enabling privacy-preserving voice input via whisper.cpp.

## 7. User Feedback Summary
*   **Positive:** Users are actively building custom channels (e.g., [Web Channel via Issue #1273](https://github.com/qwibitai/nanoclaw/issues/1273)) and integrating the tool into educational settings.
*   **Pain Points:**
    *   **Security Anxiety:** Advanced users feel the default security model is too permissive for production environments (Issues #865, #458).
    *   **Documentation Gaps:** Users explicitly requested documentation regarding "Indirect Prompt Injection" risks ([Issue #411](https://github.com/qwibitai/nanoclaw/issues/411)).
    *   **Operational Friction:** The Slack integration is currently limited to hardcoded commands, preventing free-form interaction ([Issue #1363](https://github.com/qwibitai/nanoclaw/issues/1363)).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# Project Digest: NullClaw (2026-03-24)

## 1. Today's Overview
NullClaw is exhibiting robust development velocity, currently maintaining a high "Open PR to Closed PR" ratio (14:1) which suggests a feature-heavy expansion phase. The project is addressing multiple subsystems simultaneously, including tooling integrations, observability (OpenTelemetry), and channel reliability (Telegram, Lark). While user activity is moderate with 8 new issues, the maintenance team is highly responsive, providing immediate fixes and feature implementations via Pull Requests that directly reference user-reported tickets. The project health appears strong, with rapid iteration on configuration fixes and documentation clarity.

## 2. Latest Releases
No new releases were published today.

## 3. Project Progress
*Note: No PRs were fully merged in the last 24 hours; however, significant advancement occurred on the following pending features:*

*   **Tooling Integration:** PR #708 advances the fix for the `file_append` tool, wiring the previously unimplemented utility into the runtime.
*   **Observability Enhancements:** PR #693 proposes substantial upgrades to OpenTelemetry tracing, adding channel attribution, delegation tracing, and skill load spans.
*   **Channel Improvements:**
    *   **Lark:** PR #704 introduces interactive features, allowing the bot to react to messages with emojis.
    *   **Telegram:** PR #694 addresses reliability issues regarding duplicate messages and tool cache staleness.
*   **Authentication:** PR #702 (Closed) explored a browser-based OAuth flow for OpenAI Codex, though it was closed (likely superseded or requiring rework).

## 4. Community Hot Topics
*   **OpenAI API Compatibility ([#701](https://github.com/nullclaw/nullclaw/issues/701))**
    *   **Topic:** Incomplete support for OpenAI-compatible APIs (missing `session_id` and custom params).
    *   **Signal:** This is a critical integration point for users. The community has rapidly responded with PR #709 to address this.
*   **Tool Registration Bug ([#699](https://github.com/nullclaw/nullclaw/issues/699))**
    *   **Topic:** The `file_append` tool was implemented but not active.
    *   **Signal:** High attention to detail from the user base (`montvid`) verifying code against documentation.
*   **A2A Protocol Client ([#700](https://github.com/nullclaw/nullclaw/issues/700))**
    *   **Topic:** Request for a client-side implementation of the A2A protocol to call remote agents.
    *   **Signal:** Users are building multi-agent architectures using NullClaw and need native support for agent-to-agent communication.

## 5. Bugs & Stability
**Severity Ranking:**
1.  **[Critical] Agent Routing Confusion ([#696](https://github.com/nullclaw/nullclaw/issues/696)):** A bug causes the Telegram bot to identify as the wrong agent when subagents are configured.
    *   *Fix Status:* Fix available in PR #705.
2.  **[Medium] Docker/Environment Variables ([#691](https://github.com/nullclaw/nullclaw/issues/691)):** `cron.zig` hardcodes paths, breaking Docker environments where `NULLCLAW_HOME` differs from `$HOME`.
    *   *Fix Status:* Fix available in PR #692.
3.  **[Low] Documentation/Config Clarity ([#697](https://github.com/nullclaw/nullclaw/issues/697)):** Users are misled by `${VAR}` syntax examples that don't actually interpolate.
    *   *Fix Status:* Documentation update in PR #706.

## 6. Feature Requests & Roadmap Signals
*   **Environment Variable Support:** There is a clear demand (Issues #698, #692) to rely less on file-based `.env` configuration and more on process environment variables for containerized/GitOps deployments.
*   **Cross-Memory & Temporal Decay:** PR #711 ("Cross Memory") and PR #679 ("Markdown timestamp temporal decay") suggest an upcoming focus on advanced memory management and long-term information retention.
*   **Pushover Notifications:** Request (#698) to support native OS env vars for the Pushover tool indicates a desire for better notification system integration.

## 7. User Feedback Summary
*   **Configuration Pain Points:** Users are experiencing friction with configuration management, specifically regarding how environment variables are handled (expecting interpolation where none exists) and how credentials are loaded (preferring env vars over files).
*   **Documentation Gaps:** Users are checking docs (Issue #699) and finding discrepancies between what is documented and what is wired in the code.
*   **Deployment Needs:** Several issues (#698, #691) originate from users running NullClaw in Docker or non-standard home directory configurations, indicating the project is being used in production-like environments.

## 8. Backlog Watch
*   **[Needs Review] PR #702 (OpenAI Codex Login):** This PR was closed recently. It is unclear if the feature is deprecated or if the PR needs revisions. Maintainer clarification is needed to guide contributors on the future of OAuth flows.
*   **[New Feature] Issue #700 (A2A Call):** This proposal for an `a2a_call` tool is currently unassigned. It represents a strategic architectural expansion (multi-agent systems) and may require design input from maintainers before implementation begins.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-24

## 1. Today's Overview
The IronClaw project is exhibiting extremely high development velocity with significant architectural shifts on the horizon. In the last 24 hours, the community updated 50 Pull Requests and 16 Issues, indicating a vibrant but fast-moving ecosystem. Key focal points include a major security push regarding credential handling in Telegram channels, the preparation for a v0.22.0 release, and the introduction of a "Unified Thread-Capability-CodeAct" execution engine. While the codebase is active, users are reporting stability concerns regarding specific providers (Ollama, Qwen) and Windows deployments, suggesting a need for stabilization alongside new feature development.

## 2. Releases
**New Release Candidate: v0.22.0**
- **Status:** Pre-release automation triggered ([PR #1601](https://github.com/nearai/ironclaw/pull/1601)).
- **Impact:** Marked with ⚠️ API breaking changes.
- **Details:** The version bumps from 0.21.0 to 0.22.0. Developers should be prepared for breaking changes in externally-constructible structs.

## 3. Project Progress
**Significant Features & Fixes:**
*   **Architecture Modernization:** Work is advancing on a unified execution engine ([PR #1557](https://github.com/nearai/ironclaw/pull/1557)) that aims to replace 10 fragmented abstractions with 5 primitives, representing a major v2 architectural shift.
*   **Security Hardening (Telegram):** Multiple PRs are addressing critical security gaps in Telegram integration. PR #1598 explicitly blocks bot tokens from being entered in normal chat to prevent leakage ([PR #1598](https://github.com/nearai/ironclaw/pull/1598)), while PR #1602 fixes OAuth refresh flows via proxy ([PR #1602](https://github.com/nearai/ironclaw/pull/1602)).
*   **Cross-Channel Security:** A fix for thread hijacking vulnerabilities has been proposed, adding `source_channel` verification to prevent unauthorized cross-channel approvals ([PR #1590](https://github.com/nearai/ironclaw/pull/1590)).
*   **New Protocol Support:** A new "Agent Client Protocol (ACP)" job mode is being introduced to delegate tasks to coding agents like Kiro, Cline, and Copilot ([PR #1600](https://github.com/nearai/ironclaw/pull/1600)).

## 4. Community Hot Topics
*   **Security & False Positives:** Users are flagging official Windows binaries (`.msi`/.exe`) as Trojans (`Trojan:Win32/Wacatac.C!ml`) via Microsoft Defender ([Issue #1538](https://github.com/nearai/ironclaw/issues/1538)). This is a high-priority trust and distribution issue that needs immediate verification from the core team.
*   **Telegram Onboarding Chaos:** There is significant user frustration regarding Telegram onboarding. Issues report that the agent asks for bot tokens in normal chat (exposing them) and subsequently misreports valid tokens as invalid ([Issue #1596](https://github.com/nearai/ironclaw/issues/1596)).
*   **Memory & Learning:** A proposal for an "Adaptive Learning System" involving skill synthesis and user profiles is sparking discussion ([PR #1187](https://github.com/nearai/ironclaw/pull/1187)).

## 5. Bugs & Stability
**Critical / High Severity:**
*   **Windows Defender Flagging:** Official releases are being flagged as malware. ([Issue #1538](https://github.com/nearai/ironclaw/issues/1538)).
*   **Credential Injection Failures:** On hosted NEAR AI TEEs, WASM tool credentials are being stored but never injected at runtime, breaking hosted agent functionality ([Issue #1537](https://github.com/nearai/ironclaw/issues/1537)).

**Medium / Functional:**
*   **Ollama 502 Errors:** Users on Windows v0.21.0 are experiencing consistent "502 Bad Gateway" errors when using the Ollama provider ([Issue #1577](https://github.com/nearai/ironclaw/issues/1577)).
*   **Qwen Provider Rejections:** Requests to Qwen 3.5-plus are failing with "405 Method Not Allowed" or coding plan restrictions ([Issue #1520](https://github.com/nearai/ironclaw/issues/1520)).
*   **Mistral API Incompatibility:** Tool calls to Mistral fail because generated IDs do not meet the 9-character alphanumeric requirement ([Issue #1241](https://github.com/nearai/ironclaw/issues/1241)).
*   **LLM State Confusion:** The agent "forgets" that Telegram is enabled and repeatedly asks users to activate it ([Issue #1595](https://github.com/nearai/ironclaw/issues/1595)).

## 6. Feature Requests & Roadmap Signals
*   **WeChat Integration:** Users are requesting a WeChat plugin/adapter for IronClaw, citing an existing OpenClaw package as a reference ([Issue #1584](https://github.com/nearai/ironclaw/issues/1584)).
*   **Hot-Reload for LLMs:** A highly requested feature is the ability to switch LLM providers via the Web UI without restarting the process ([Issue #1350](https://github.com/nearai/ironclaw/issues/1350)).
*   **Structural Refactoring:** Proposals exist to promote circuit breaker and retry settings from `NearAiConfig` to a top-level `LlmConfig` to better support diverse providers ([Issue #1554](https://github.com/nearai/ironclaw/issues/1554)).
*   **Hermes-Agent Patterns:** The community is actively discussing adopting architectural patterns from the NousResearch/hermes-agent project ([Issue #407](https://github.com/nearai/ironclaw/issues/407)).

## 7. User Feedback Summary
*   **Installation Friction:** Users report that the default local installation instructions fail to include Telegram support, forcing them to build from source ([Issue #602](https://github.com/nearai/ironclaw/issues/602)).
*   **Configuration Confusion:** There is confusion regarding NEAR AI authentication requirements when using generic "OpenAI-compatible" endpoints like vLLM ([Issue #1585](https://github.com/nearai/ironclaw/issues/1585)).
*   **UX Inconsistencies:** Users find it jarring when the Web UI confirms an action (like Telegram activation), but the chat agent immediately prompts for the same action again ([Issue #1595](https://github.com/nearai/ironclaw/issues/1595)).

## 8. Backlog Watch
*   **Triage Overload:** The project is managing ~100 open PRs and ~100 open issues. Recent triage reports (#558, #1575) highlight the challenge of maintaining velocity with a high volume of incoming requests ([Issue #1575](https://github.com/nearai/ironclaw/issues/1575)).
*   **Stale Feature Requests:** Several high-upvote feature requests, such as WeChat support and LLM hot-reload, remain open without a committed timeline for implementation.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-24)

## 1. Today's Overview
LobsterAI is experiencing a high-velocity development phase with **57 updated items** (21 Issues, 36 PRs) in the last 24 hours. The project has just released version `2026.3.23` (on March 23), focusing on UI optimization and OpenClaw assistant features. However, the release has been followed by a surge of critical stability reports, particularly regarding the update mechanism, cross-platform compatibility (Windows/Mac), and MCP (Model Context Protocol) integration failures. Community contributions are aggressive, with significant refactoring efforts underway to address code maintainability and localization.

## 2. Latest Releases
**Version 2026.3.23** (Released 2026-03-23)
*   **Key Changes**:
    *   **Features**: Added "Anti-Sleep" functionality; Implemented alternating display of OpenClaw assistant messages and tool cards (#659).
    *   **UI Optimization**: Enhancements by user `liuzhq1986` (#706).
    *   **Bug Fix**: Ensured the full input box is retained for IM channel sessions (#708).

## 3. Project Progress (Merged/Closed)
*   **Refactoring for Maintainability**: A massive refactoring effort (PR #635) is in progress to split "giant" core files like `main.ts` (3,984 lines) and `Settings.tsx` (3,301 lines) into smaller, focused modules.
*   **Scheduled Task Overhaul**: PR #609 advances the scheduled task system by introducing a strategy pattern, consolidating docs, and adding SQL support for task metadata.
*   **Python Environment Logic**: PR #721 modifies the runtime logic to prefer the user's external Python installation over the bundled runtime to avoid version conflicts (using bundled only as a fallback).
*   **Input Experience**: PR #709 (merged/closed) optimized input handling to support `Ctrl/Cmd/Alt+Enter` for line breaks.
*   **OAuth Integrations**: Significant progress on "One-Click" login for providers like **Qwen** (#644) and **MiniMax** (#682), removing friction for users to start chatting.

## 4. Community Hot Topics
**Top Active Issues & Requests:**
*   **Update Mechanism Failure** ([#703](https://github.com/netease-youdao/LobsterAI/issues/703)):
    *   *Summary*: Windows users report updates taking over 2 minutes, stalling at 30% and 85%.
    *   *Sentiment*: High frustration regarding installation speed.
*   **IM Integration Glitches** ([#691](https://github.com/netease-youdao/LobsterAI/issues/691)):
    *   *Summary*: DingTalk bot responds with duplicate messages, whereas WeChat works fine.
    *   *Need*: Stability in multi-platform IM deployment.
*   **MCP Configuration Crisis** ([#728](https://github.com/netease-youdao/LobsterAI/issues/728), [#724](https://github.com/netease-youdao/LobsterAI/issues/724)):
    *   *Summary*: Multiple users report "0 tools" loaded despite configuring MCP servers correctly in `2026.3.23`.
    *   *Analysis*: A critical disconnect between the UI configuration and the actual service loading logic.
*   **Export/Data Portability** ([#719](https://github.com/netease-youdao/LobsterAI/issues/719)):
    *   *Summary*: Strong demand for exporting chat history to Markdown/JSON.
    *   *Signal*: Addressed by PR #718 (Open), likely for the next patch.

## 5. Bugs & Stability
**Critical Issues Reported Today:**
1.  **Mac Address Resolution Error** ([#713](https://github.com/netease-youdao/LobsterAI/issues/713)):
    *   *Issue*: Mac client fails to detect internal Ollama interfaces (`ERR_ADDRESS_UNREACHABLE`), while Windows works fine. Regression in `2026.3.22`.
2.  **Registry Dependency Blocking Installation** ([#711](https://github.com/netease-youdao/LobsterAI/issues/711)):
    *   *Issue*: Build fails if `npm.nie.netease.com` is inaccessible (hardcoded dependency for "moltbot-popo").
3.  **Startup/Network Permission Failures** ([#695](https://github.com/netease-youdao/LobsterAI/issues/695), [#692](https://github.com/netease-youdao/LobsterAI/issues/692)):
    *   *Issue*: `2026.3.22` breaks "Auto-startup" on Windows.
    *   *Issue*: After long idle (>2 days), network access is revoked until manual approval via popup.
4.  **Update Process Blocking** ([#693](https://github.com/netease-youdao/LobsterAI/issues/693)):
    *   *Issue*: Installer claims it cannot close the LobsterAI process, even when Task Manager confirms it is closed.
5.  **Code Quality & Security** ([#686](https://github.com/netease-youdao/LobsterAI/issues/686)):
    *   *Issue*: Export password hardcoded (`lobsterai-APP`) in source code, posing a security risk for exported config files.

## 6. Feature Requests & Roadmap Signals
*   **Conversation Export** ([#718](https://github.com/netease-youdao/LobsterAI/pull/718)): Implementation is in Open PR status. Users will soon be able to export chats to **Markdown** (for reading) and **JSON** (for processing).
*   **Message Bookmarks** ([#725](https://github.com/netease-youdao/LobsterAI/pull/725)): A new "Bookmark/Favorite" system is being developed to save important messages within Cowork sessions.
*   **Sandbox Storage Limits** ([#699](https://github.com/netease-youdao/LobsterAI/issues/699)): Users requesting ability to expand the built-in sandbox storage beyond default limits (needed for large Python packages).
*   **Voice Input** ([#722](https://github.com/netease-youdao/LobsterAI/issues/722)): Request for voice-to-text input to reduce typing effort.
*   **Attachment Mentions** ([#557](https://github.com/netease-youdao/LobsterAI/pull/557)): Work ongoing to allow `@` referencing specific attachments in the prompt (similar to Cursor/Windsurf).

## 7. User Feedback Summary
*   **Pain Points**: The update experience is currently painful for Windows users (slow, blocking). The "MCP" (Model Context Protocol) feature, while marketed, is confusing users who see "0 tools" despite valid configs.
*   **Platform Divergence**: There is noticeable friction where features work on Windows but fail on MacOS (specifically Ollama detection), or work on WeChat but duplicate on DingTalk.
*   **UI Polish**: Users appreciate the new UI optimizations but are annoyed by minor regressions like the IM channel input box shrinking or "page flickering" when using shortcuts in settings.

## 8. Backlog Watch
*   **Core File Refactoring** ([#635](https://github.com/netease-youdao/LobsterAI/pull/635)): A massive, long-running effort to split the 4,000-line `main.ts` file. This is crucial for long-term maintainability but carries merge risk.
*   **Internationalization (i18n)** ([#726](https://github.com/netease-youdao/LobsterAI/pull/726)): Actively replacing hardcoded Chinese strings with translation keys to support English audiences properly.
*   **Copilot Integration** ([#707](https://github.com/netease-youdao/LobsterAI/pull/707)): Implementation of GitHub Copilot OAuth is pending, indicating a roadmap to support enterprise Copilot models.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-24

## 1. Today's Overview
TinyClaw is currently in a highly active **development phase** characterized by significant internal refactoring rather than user-facing feature expansion. The project shows strong engineering rigor with **7 Pull Requests updated** in the last 24 hours, all focused on stability, infrastructure, and user experience improvements. While no new releases were published, the merge of critical reliability updates for the Telegram integration and documentation structure suggests the team is prioritizing a robust foundation for future features. The backlog contains 5 open PRs indicating a push toward a Linear-style task management system and enhanced message queue reliability.

## 2. Releases
*No new releases published on 2026-03-24.*

## 3. Project Progress
**Merged & Closed Updates:**
*   **Infrastructure Reliability:** [PR #248](https://github.com/TinyAGI/tinyagi/pull/248) was merged/closed, successfully migrating the Telegram bot client from `node-telegram-bot-api` to `grammY`. This resolves known silent polling stall issues and introduces automatic reconnection with exponential backoff.
*   **Documentation Structure:** [PR #253](https://github.com/TinyAGI/tinyagi/pull/253) was closed, moving agent setup and system prompt configurations from a shared file to workspace-specific `AGENTS.md` files. This improves organization by reducing clutter in shared documentation.

## 4. Community Hot Topics
*   **Linear-Style Task Management:** [PR #252](https://github.com/TinyAGI/tinyagi/pull/252) (Open)
    *   **Activity:** Created to implement a unified workspace for tasks and projects.
    *   **Underlying Need:** The community is seeking better project management capabilities within the agent interface. The request for SQLite persistence, comment threads, and Linear-style IDs (e.g., SYS-1) indicates a desire for TinyClaw to serve not just as a chat interface, but as a comprehensive operational dashboard.
*   **Queue Reliability:** [PR #251](https://github.com/TinyAGI/tinyagi/pull/251) (Open)
    *   **Activity:** Proposed fix for agent subprocess lifecycle management.
    *   **Underlying Need:** Users are experiencing stability issues where agent processes hang. The proposal to implement a "result-event-based subprocess timeout" highlights a need for more aggressive handling of unresponsive background tasks.

## 5. Bugs & Stability
*   **Agent Process Hangs (Moderate Severity):** Reports indicate that agent subprocesses (specifically related to Claude Code) do not exit cleanly, causing queue hangs.
    *   *Status:* A fix is proposed in [PR #251](https://github.com/TinyAGI/tinyagi/pull/251), which would force-kill processes 30 seconds after a result event is sent.
*   **Telegram Message Stalls (High Severity - Addressed):** The bot was known to stop receiving messages while remaining alive due to issues with the `node-telegram-bot-api` library.
    *   *Status:* Marked as resolved via the merge of [PR #248](https://github.com/TinyAGI/tinyagi/pull/248).
*   **Chat History Latency (Low Severity):** A gap existed between sending a message and its appearance in the chat history/UI.
    *   *Status:* Fix proposed in [PR #250](https://github.com/TinyAGI/tinyagi/pull/250) to persist messages to `agent_messages` immediately at enqueue time.

## 6. Feature Requests & Roadmap Signals
*   **Task Management UI:** The addition of a "Linear-like" workspace in [PR #252](https://github.com/TinyAGI/tinyagi/pull/252) suggests the next major version will focus on productivity and project tracking.
*   **Model Provider Expansion:** [PR #243](https://github.com/TinyAGI/tinyagi/pull/243) indicates a roadmap to support more diverse LLM providers, specifically adding **Novita AI** as a built-in option alongside OpenAI and Anthropic.
*   **UI/UX Modernization:** [PR #249](https://github.com/TinyAGI/tinyagi/pull/249) proposes moving to a top-bar navigation layout and improving the office route structure, signaling a focus on a cleaner, more scalable interface.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Stability:** Frustration with bots (Telegram) stopping silently and agent subprocesses hanging the queue.
    *   **Configuration:** Complexity in managing shared versus workspace-specific agent configurations (addressed by recent doc changes).
*   **Satisfaction:**
    *   Users are responding well to the shift toward "shadcn" components and more sophisticated UI elements (Sidebar, detail panels).
    *   There is positive reception for "first-class" support for new API providers like Novita AI, indicating demand for cost-effective or flexible alternatives to the major vendors.

## 8. Backlog Watch
*   **UI Layout Overhaul:** [PR #249](https://github.com/TinyAGI/tinyagi/pull/249) (Refactor office layout) is open and needs review/maintenance attention to finalize the new navigation structure.
*   **Novita AI Integration:** [PR #243](https://github.com/TinyAGI/tinyagi/pull/243) (Add Novita AI provider) has been open since March 20 and requires merging to formalize support for this provider.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Project Digest: Moltis (2026-03-24)

## 1. Today's Overview
The Moltis project demonstrated exceptionally high development velocity today, clearing a significant backlog of maintenance tasks and feature requests. With 42 PRs updated (36 merged/closed) and 10 issues closed, the team is focused on polish, platform compatibility (specifically Windows and Vulkan), and integration robustness. The repository appears to be in a pre-release stabilization phase, addressing critical bugs like file locking on Windows and secret leakage in APIs while simultaneously introducing advanced features like lazy tool loading and prompt caching.

## 2. Releases
No new releases were published today.

## 3. Project Progress
**Merged PRs & Closed Issues:**
*   **Platform Support:** Added opt-in Vulkan support for GGUF local models (`feat(local-llm)`, [PR #408](https://github.com/moltis-org/moltis/pull/408)), addressing requests for non-CUDA/Metal backends ([Issue #122](https://github.com/moltis-org/moltis/issues/122)).
*   **Integrations:**
    *   **File Sharing:** Implemented `send_document` tool to allow agents to send PDFs, ZIPs, and other files to Telegram/Discord/Slack ([PR #464](https://github.com/moltis-org/moltis/pull/464)), resolving requests for arbitrary file attachments ([Issue #332](https://github.com/moltis-org/moltis/issues/332)).
    *   **WhatsApp:** Improved discoverability and debug logging for the WhatsApp channel ([PR #473](https://github.com/moltis-org/moltis/pull/473)) in response to user confusion ([Issue #460](https://github.com/moltis-org/moltis/issues/460)).
*   **Security & Stability:**
    *   Fixed a critical security gap where channel config API responses leaked secrets in plain text ([PR #472](https://github.com/moltis-org/moltis/pull/472)).
    *   Resolved "Access is denied" file lock errors on Windows by changing file writing strategies ([PR #436](https://github.com/moltis-org/moltis/pull/436)).
    *   Fixed login failures on Chrome/Brave by adding the `Secure` attribute to session cookies ([PR #471](https://github.com/moltis-org/moltis/pull/471)).
*   **Agent Logic:** Prevented agent hallucination regarding node parameters ([PR #474](https://github.com/moltis-org/moltis/pull/474)) and stabilized system prompts to enable KV cache hits for local LLMs ([PR #476](https://github.com/moltis-org/moltis/pull/476)).

## 4. Community Hot Topics
*   **Performance Optimization (Lazy Loading):** [PR #467](https://github.com/moltis-org/moltis/pull/467) (Open) introduces a "lazy tool registry" mode. This is a major optimization for users running many MCP servers, reducing input token usage by ~15,000 tokens per turn by replacing large schemas with a searchable meta-tool.
*   **Platform Extensibility:** [PR #469](https://github.com/moltis-org/moltis/pull/469) (Open) adds Nix flake support for reproducible builds, signaling strong interest from the Nix/Linux community.
*   **File Handling in Skills:** There is a persistent user desire to allow agents to write supplementary files (scripts, configs) when creating skills ([Issue #154](https://github.com/moltis-org/moltis/issues/154)), which remains open but related to the general file handling improvements merged today.

## 5. Bugs & Stability
*   **Fixed - Critical (Windows):** "File lock failed: Access is denied" ([Issue #434](https://github.com/moltis-org/moltis/issues/434)) was caused by Rust's `append(true)` mode restricting access on Windows. Fixed in [PR #436](https://github.com/moltis-org/moltis/pull/436).
*   **Fixed - High (Security):** Secrets in channel configs (e.g., API keys) were exposed via API responses. Fixed in [PR #472](https://github.com/moltis-org/moltis/pull/472).
*   **Fixed - High (Web Compatibility):** Sign-in failures on Chrome ([Issue #370](https://github.com/moltis-org/moltis/issues/370)) were caused by missing `Secure` cookie attributes. Fixed in [PR #471](https://github.com/moltis-org/moltis/pull/471).
*   **Fixed - Medium (Agent Logic):** Models repeatedly failing to execute commands due to hallucinating "node" parameters ([Issue #427](https://github.com/moltis-org/moltis/issues/427)). Fixed in [PR #474](https://github.com/moltis-org/moltis/pull/474).
*   **Ongoing:** Plugin shell hooks on Windows were failing due to hard-coded `sh -c` calls. A fix is proposed in [PR #468](https://github.com/moltis-org/moltis/pull/468).

## 6. Feature Requests & Roadmap Signals
*   **System Prompt Customization:** [PR #466](https://github.com/moltis-org/moltis/pull/466) (Open) proposes "prompt profiles" with CRUD operations and section toggling, suggesting a move toward more user-configurable agent personas.
*   **Auditability:** [PR #470](https://github.com/moltis-org/moltis/pull/470) (Open) explores "tool execution witness recording," indicating a demand for audit logs and performance monitoring in enterprise or high-stakes deployments.
*   **Architectural Refactoring:** [PR #465](https://github.com/moltis-org/moltis/pull/465) (Open) aims to decouple the HTTP layer (`moltis-httpd`) from the core gateway. This signals future plans to support non-HTTP interfaces (e.g., dedicated TUI or embedded use cases).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Windows Compatibility:** Multiple issues regarding file locking and shell execution highlight that Windows is a second-class citizen that needs specific attention (fixed today).
    *   **Token Usage/Cost:** The "lazy tool registry" PR suggests users are feeling the pain of high token costs when connecting many MCP servers.
    *   **Integration UX:** The WhatsApp "confusion" ([Issue #460](https://github.com/moltis-org/moltis/issues/460)) indicates that documentation and default configurations for non-standard channels need to be clearer.
*   **Satisfaction:** The rapid closure of feature requests for Telegram file attachments and Vulkan support suggests the project is very responsive to user needs.

## 8. Backlog Watch
*   **Open Architecture PRs:** Keep an eye on [PR #465](https://github.com/moltis-org/moltis/pull/465) (HTTP refactor) and [PR #467](https://github.com/moltis-org/moltis/pull/467) (Lazy Registry). These are high-complexity changes that will significantly impact how the agent is deployed.
*   **Unresolved Feature:** [Issue #154](https://github.com/moltis-org/moltis/issues/154) (Allow agent to write scripts when creating skills) remains closed but unmerged, or requires further implementation to be fully realized as a user capability.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Daily Digest: 2026-03-24

## 1. Today's Overview
CoPaw is experiencing a period of intense activity and volatility following the recent `v0.1.0` update. The project remains highly dynamic with 100 updated items (50 Issues, 50 PRs) in the last 24 hours, indicating a massive community-driven response to the latest release. While the merge rate is healthy (60%), the project is currently facing significant stability challenges, particularly regarding memory management and tool execution, resulting in a high volume of critical bug reports. Developer response is active, with immediate patches being pushed for Windows compatibility, memory compaction errors, and i18n support.

## 2. Releases
**No new releases published in the last 24 hours.**
*Current Stable Version:* Implicitly `v0.1.0` / `v0.1.0.post1` (based on issue reports).
*Note:* The lack of a new release is notable given the high volume of fixes currently merged in the `main` branch; users are likely running edge commits or waiting for a patched `v0.1.1`.

## 3. Project Progress
**Merged & Closed PRs / Completed Features**
*   **Unified `/stop` Command:** A highly requested feature to interrupt agent tasks across all channels (including long-running shell commands) was merged ([PR #1913](https://github.com/agentscope-ai/CoPaw/pull/1913)).
*   **Memory Compaction Integrity:** Fixes for passing `user_timezone` to memory summarization were merged ([PR #1814](https://github.com/agentscope-ai/CoPaw/pull/1814)), addressing issues with daily note generation.
*   **Community & Documentation:** The homepage was updated to include community QR codes ([PR #1993](https://github.com/agentscope-ai/CoPaw/pull/1993)).
*   **Windows Fixes:** Critical print failures on Windows were addressed ([PR #2136](https://github.com/agentscope-ai/CoPaw/pull/2136)).

**Active Development (Not yet merged)**
*   **WeChat Channel:** Major progress on a built-in WeChat channel with QR code login is underway ([PR #2123](https://github.com/agentscope-ai/CoPaw/pull/2123)).
*   **Browser Isolation:** Multi-workspace cookie management for the `browser_use` tool is being implemented to prevent session interference ([PR #2131](https://github.com/agentscope-ai/CoPaw/pull/2131)).

## 4. Community Hot Topics
*   **v0.1.0 Authentication Failures:**
    *   **Issue:** [#2102](https://github.com/agentscope-ai/CoPaw/issues/2102) (21 comments)
    *   **Topic:** Users reporting `AuthenticationError` immediately after updating to `v0.1.0`.
    *   **Analysis:** Indicates a regression or configuration migration issue in the latest version affecting the core startup flow.

*   **Tool Chain & Execution Failures:**
    *   **Issue:** [#2040](https://github.com/agentscope-ai/CoPaw/issues/2040) (12 comments)
    *   **Topic:** Tools (file read/write, shell, browser) hanging indefinitely (>20 mins).
    *   **Analysis:** Suggests a breakdown in the agent loop or tool provider interface, likely related to async handling or API timeouts in the new version.

*   **Multi-Agent & Channel Routing:**
    *   **Issue:** [#2035](https://github.com/agentscope-ai/CoPaw/issues/2035) (10 comments) | **PR:** [#1209](https://github.com/agentscope-ai/CoPaw/pull/1209)
    *   **Topic:** Implementing multi-bot binding and multi-agent collaboration.
    *   **Analysis:** High demand for orchestrating multiple specialized agents. The community is actively working on routing selectors to solve this.

*   **Context Handoff Between Channels:**
    *   **Issue:** [#2138](https://github.com/agentscope-ai/CoPaw/issues/2138) (5 comments)
    *   **Topic:** How to seamlessly continue a conversation from Console -> Feishu -> QQ.
    *   **Analysis:** Users expect omnichannel memory. The current architecture treats channels as isolated silos.

## 5. Bugs & Stability
**Critical Severity**
1.  **Memory Compaction Hallucinations (Data Integrity):**
    *   **Issue:** [#2092](https://github.com/agentscope-ai/CoPaw/issues/2092) (v0.1.0.p1) - Memory compression is injecting false/hallucinated content into the context.
    *   **Impact:** High. Corrupts the agent's knowledge base and decision-making.
    *   **Status:** Fixes in progress ([PR #2129](https://github.com/agentscope-ai/CoPaw/pull/2129)).

2.  **Task Interruption during Compaction:**
    *   **Issue:** [#1974](https://github.com/agentscope-ai/CoPaw/issues/1974) - Active tasks are killed when memory compression triggers, and the session fails to resume.
    *   **Impact:** High. Breaks the user workflow.

3.  **Tool Execution Deadlock:**
    *   **Issue:** [#2040](https://github.com/agentscope-ai/CoPaw/issues/2040) - Tools hang indefinitely.
    *   **Impact:** High. Requires process restart.

**Medium Severity**
*   **WeChat ClawBot Support Request:** Feature request for the new protocol ([Issue #2043](https://github.com/agentscope-ai/CoPaw/issues/2043)).
*   **Telegram Connection Instability:** Frequent disconnects ([Issue #2041](https://github.com/agentscope-ai/CoPaw/issues/2041)).

## 6. Feature Requests & Roadmap Signals
*   **WeChat Integration:** Strong signals for built-in WeChat support. The community is rapidly developing this via PR (#2123).
*   **Advanced Memory Management:** Users are requesting "Memory Compaction" output to be routed to user channels (not just console logs) ([PR #2141](https://github.com/agentscope-ai/CoPaw/pull/2141)).
*   **Routing Control:** High demand for granular model/agent routing control within the chat UI to facilitate multi-agent workflows ([PR #1209](https://github.com/agentscope-ai/CoPaw/pull/1209)).
*   **Local Embeddings:** Push for local embedding model support (BGE/Qwen) to ensure privacy and offline capability ([PR #1789](https://github.com/agentscope-ai/CoPaw/pull/1789)).

## 7. User Feedback Summary
*   **Pain Points:** The `v0.1.0` update has introduced significant friction. Users are struggling with configuration migrations (Authentication errors), stability (tool hangs), and trust issues (memory hallucinations).
*   **Satisfaction:** While the feature set is expanding (WeChat, Multi-agent), the current stability is negatively impacting user experience.
*   **Usage Patterns:** Heavy usage of "Tools" (Browser, Shell, File) indicates users treat CoPaw as a local OS agent, not just a chatbot. Issues with "Skills" context limits suggest users are pushing the boundaries of complex workflows.

## 8. Backlog Watch
*   **Issue #1222 (Memory Compression Mismatch):** A closed issue that appears to have resurfaced in v0.1.0 (see #2092). Requires verification that the fix for "Assistant message count mismatch" is active in the current release branch.
*   **Issue #1068 (Frontend Assets):** Web UI unable to display images/files properly. This has been open for 2 weeks and affects the console user experience significantly.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest**
**Date:** 2026-03-24
**Status:** High Activity

---

### 1. Today's Overview
ZeptoClaw is experiencing a surge in high-velocity development, averaging roughly one issue update and two pull request updates per hour over the last 24 hours. The project has successfully released version **v0.8.0**, which significantly expands the agent's research capabilities and improves the CLI user experience. Development focus appears to be split between stabilizing the newly released features—specifically addressing critical bugs in the `edit_file` tool—and undertaking major architectural refactoring to reduce code debt in the agent loop. The backlog remains active with proposals for new channel implementations (ACP) and safety hardening.

### 2. Releases
**v0.8.0**
*   **Summary:** This release focuses on agent "deep research" capabilities and user interface polish.
*   **Key Changes:**
    *   **Deep Research Skill:** Implemented a 4-phase methodology for complex research tasks (#344).
    *   **Enhanced CLI UX:** Added a shimmer spinner for agent responses to improve perceived performance (#337).
    *   **Clarification Tool:** Added `ask_clarification` tool with pause_for_input functionality to improve interactive querying.

### 3. Project Progress
The following features and fixes were finalized or merged in the last 24 hours:
*   **Tool Safety & Correctness:** Merged PR #398 introduced conformance fixture testing (JSON-based regression tests) and fuzzy matching for the `edit` tool. PR #406 closed a logic gap in the "taint" engine where empty snippets could trigger false safety positives.
*   **Library Hardening:** PR #402 successfully hardened the embedded ZeptoAgent tool execution facade, enforcing timeouts and panic capture for backend/library usage.
*   **Telegram Usability:** PR #396 resolved issues with markdown rendering and added a typing indicator, significantly improving the UX for users interacting via the Telegram bot.
*   **Code Hygiene:** PR #405 resolved ~55 Clippy warnings in the test suite to ensure cleaner CI/CD pipelines.

### 4. Community Hot Topics
*   **Architectural Refactoring (RFC):** PR #404 and Issue #399 discuss extracting the massive `agent/loop.rs` (4,155 lines) into a composable middleware pipeline. This is the most significant structural change proposed recently.
    *   *Link:* [PR #404](https://github.com/qhkm/zeptoclaw/pull/404) | [Issue #399](https://github.com/qhkm/zeptoclaw/issues/399)
*   **ACP Channel Implementation:** PR #356 continues to be an active workstream, implementing the Agent Client Protocol (ACP) via stdio and HTTP, allowing ZeptoClaw to function as a subprocess for other tools.
    *   *Link:* [PR #356](https://github.com/qhkm/zeptoclaw/pull/356)

### 5. Bugs & Stability
*   **[CRITICAL] `edit_file` Hang & Mapping Bug (Issue #403):** A critical bug was identified in PR #398's fuzzy matching logic. The `edit_file` tool can hang if whitespace normalization reduces the search string to empty. It also suffers from incorrect byte range mapping during Unicode normalization (NFC).
    *   *Status:* Open / Awaiting Fix.
    *   *Link:* [Issue #403](https://github.com/qhkm/zeptoclaw/issues/403)
*   **[HIGH] Dependency Vulnerabilities:** PR #408 highlights several RustSec security advisories (RUSTSEC-2026-0045 to -0049) in dependencies like `aws-lc-sys` and `rustls-webpki`.
    *   *Status:* Open PR.
    *   *Link:* [PR #408](https://github.com/qhkm/zeptoclaw/pull/408)
*   **[NORMAL] Taint Engine False Positives:** Fixed in PR #406 (Closed). Previously, empty tool outputs could cause all subsequent safety checks to falsely flag as tainted.

### 6. Feature Requests & Roadmap Signals
*   **Model Auto-Selection:** PR #407 proposes logic to automatically detect the provider based on the model name string (e.g., setting `gpt-5.4` auto-selects OpenAI), simplifying configuration.
    *   *Link:* [PR #407](https://github.com/qhkm/zeptoclaw/pull/407)
*   **Middleware Pipeline:** The work on PR #404 suggests a roadmap toward a more plugin-friendly and testable agent architecture, moving away from the monolithic loop.
*   **Telegram Typing Indicators:** A small but requested quality-of-life improvement was merged (PR #392/396), indicating community focus on interactive UX feedback.

### 7. User Feedback Summary
*   **Pain Points:** Users of the `edit_file` tool are currently facing instability (hangs/mapping errors) following the recent fuzzy match update, as evidenced by the critical bug report (#403).
*   **Positive Reception:** The changes to the Telegram bot (PR #396) were driven by "daily driving" the bot, indicating a desire for more responsive, natural interactions (typing indicators, correct markdown).
*   **Technical Debt:** There is strong maintainer sentiment (reflected in issues #187, #399) that the codebase needs rigorous cleanup (Clippy warnings, middleware refactoring) to sustain future velocity.

### 8. Backlog Watch
*   **Clippy Hygiene (Issue #187):** While PR #405 was merged to fix test warnings, the underlying issue of maintaining strict lint standards remains a priority.
    *   *Link:* [Issue #187](https://github.com/qhkm/zeptoclaw/issues/187)
*   **Dependency Bumps (PR #386):** An open Dependabot PR to bump `toml` from 1.0.3 to 1.0.6 is sitting idle and may need review.
    *   *Link:* [PR #386](https://github.com/qhkm/zeptoclaw/pull/386)

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-03-24

## 1. Today's Overview
EasyClaw (and its associated client RivonClaw) is currently in a stable maintenance phase with no active codebase contention. Based on the data from March 24, 2026, there is zero active development traffic regarding issues or pull requests, indicating a clean slate for the maintainers or a period of code freeze. The project has released two incremental versions, v1.7.6 and v1.7.7, suggesting a focus on rapid iteration and user experience rather than complex feature additions at this time. The absence of open bugs or discussions in the last 24 hours points to high stability, though the repeated nature of the release notes suggests a focus on platform-specific distribution improvements.

## 2. Releases
**New Releases Detected: 2**

*   **v1.7.7 (RivonClaw)**
    *   **Primary Update:** Addresses installation friction specifically for macOS users. The release notes are entirely dedicated to resolving Gatekeeper errors where the OS flags the unsigned application as damaged.
    *   **Migration Notes:** No database or API breaking changes. Users simply need to apply the terminal workaround provided in the notes to execute the build.
*   **v1.7.6 (RivonClaw)**
    *   **Primary Update:** Appears to be a direct precursor to v1.7.7, focusing on the exact same macOS installation guidance.

*Link:* [github.com/gaoyangz77/easyclaw/releases](https://github.com/gaoyangz77/easyclaw/releases)

## 3. Project Progress
**Status: Static / Release Hygiene**
*   **Merged PRs:** 0
*   **Closed Issues:** 0
*   **Assessment:** No features were advanced or fixed via the standard PR/Issue workflow in the last 24 hours. The progress is strictly related to the release management of the RivonClaw client.

## 4. Community Hot Topics
**Current Status: None**
*   There are no active discussions, issues, or pull requests updated in the last 24 hours. The community is currently silent or operating outside of GitHub issues (e.g., Discord/WeChat).

## 5. Bugs & Stability
**Stability Assessment: High**
*   **New Bugs:** 0 reported.
*   **Known Regression:** None detected in the last 24h.
*   **Note:** The releases suggest the only stability issue is external (macOS Gatekeeper blocking unsigned code), which is handled via user-workaround instructions rather than a code change to sign the binary.

## 6. Feature Requests & Roadmap Signals
**Signals:**
*   **Short-term Prediction:** The release of v1.7.6 followed immediately by v1.7.7, combined with identical notes about macOS installation, suggests the *next* version (v1.7.8 or v1.7.9) will likely focus on official code signing to remove the need for terminal workarounds, or packaging the app differently to satisfy macOS security requirements.

## 7. User Feedback Summary
*   **Primary Pain Point:** The inability to open the application on macOS without using Terminal commands to bypass Gatekeeper. Users are encountering the "'RivonClaw' is damaged" error, which causes friction upon first download.
*   **Satisfaction:** Once the workaround is applied, the app presumably functions as intended, given the lack of crash reports or stability issues in the tracker.

## 8. Backlog Watch
**Status: Clear**
*   There are currently no stale issues or PRs in the "Latest" feed. The backlog appears to be well-managed or non-existent at this moment.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*