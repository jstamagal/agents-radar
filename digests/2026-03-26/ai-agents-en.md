# OpenClaw Ecosystem Digest 2026-03-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-26 00:12 UTC

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

# OpenClaw Project Digest: 2026-03-26

## 1. Today's Overview
OpenClaw is experiencing an extremely high-velocity development cycle, with **500 issues** and **500 pull requests** updated in the last 24 hours alone. The project has just released version **v2026.3.24**, focusing on OpenAI API compatibility and tooling improvements. However, the community is reporting significant turbulence, with high activity surrounding regression bugs, particularly concerning OAuth token persistence, plugin incompatibilities (specifically WeChat and WhatsApp), and UI asset failures. The volume of activity suggests a massive push toward the next major feature set, including native GTK4 apps for Linux and advanced memory systems, though stability concerns are mounting with the rapid release cadence.

## 2. Releases
**v2026.3.24 (Latest Stable)**
*   **OpenAI Compatibility**: Added `/v1/models` and `/v1/embeddings` endpoints. The system now forwards explicit model overrides through `/v1/chat/completions` and `/v1/responses`, significantly improving compatibility with RAG tooling and diverse clients.
*   **Tooling**: The `/tools` endpoint now exposes the tools the current agent is configured to use.
*   **Dependencies**: Supported Node.js 22 floor lowered to v22.14.

**v2026.3.24-beta.2**
*   **Fixes**: Aligned outbound media access with the configured filesystem policy. This fixes issues where `workspaceOnly` settings were blocking legitimate local file access in non-sandboxed agents.

## 3. Project Progress
While the sheer volume of PRs (500 updated) indicates massive parallel development, specific "closed/merged" indicators were sparse in the immediate data snapshot. However, several major features are actively being finalized:
*   **Linux Desktop App**: A massive effort (PR #53905, Size: XL) is underway to introduce a native GTK4 companion app for Linux (GNOME), addressing the top-voted issue #75.
*   **Advanced Memory**: PR #54750 proposes a new "Episodic Memory System" inspired by neuroscience (CLS theory), moving beyond simple file-based memory.
*   **Model Routing**: PR #54562 introduces a "Model Router" for automatic tier-based model selection (fast-fail and escalate patterns).
*   **Concurrency Control**: PR #29793 adds optional workspace mutation locking to prevent data corruption when multiple agents share a workspace.

## 4. Community Hot Topics
*   **[#75 - Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (65 👍, 49 comments)
    *   **Topic**: The most requested feature remains native desktop apps for Linux and Windows to match the macOS experience.
    *   **Signal**: High demand for "first-class" citizen support on non-macOS desktop environments.
*   **[#52885 - WeChat Plugin Incompatibility](https://github.com/openclaw/openclaw/issues/52885)** (40 comments)
    *   **Topic**: The `@tencent-weixin/openclaw-weixin` plugin breaks completely with OpenClaw 2026.3.22+ due to ESM import errors (`Cannot find module 'openclaw/plugin-sdk'`).
    *   **Signal**: Users are frustrated by breaking changes in the plugin SDK that decouple third-party extensions rapidly.
*   **[#52823 - UI Assets Not Found (Regression)](https://github.com/openclaw/openclaw/issues/52823)** (12 👍, 34 comments)
    *   **Topic**: After updating, the Control UI crashes with "assets not found," requiring manual `pnpm ui:build`.
    *   **Signal**: Users expect auto-updates to be seamless; build failures are blocking access to the agent.
*   **[#44851 - Kimi Web Search 401 Error](https://github.com/openclaw/openclaw/issues/44851)** (29 comments)
    *   **Topic**: Integration with Moonshot/Kimi AI fails specifically on the `web_search` tool despite valid API keys.
    *   **Signal**: Fragility in provider-specific tool integrations.

## 5. Bugs & Stability
**Severity: High (Crash / Data Loss / Security)**
*   **[#53870 - VirusTotal Security Scan Blocking Installs](https://github.com/openclaw/openclaw/issues/53870)** (8 👍)
    *   Attempting to install the Matrix plugin fails because the package is pending a VirusTotal scan, suggesting a gap in the release pipeline security checks.
*   **[#53644 - Gateway Crash on Discord Code 1006](https://github.com/openclaw/openclaw/issues/53644)**
    *   Abnormal WebSocket closures (Code 1006) crash the entire Gateway process instead of attempting a graceful reconnect. A fix is proposed in **[#54694](https://github.com/openclaw/openclaw/pull/54694)**.
*   **[#53317 - OAuth Token Overwrite (Regression)](https://github.com/openclaw/openclaw/issues/53317)**
    *   Critical regression where the gateway overwrites fresh OpenAI Codex OAuth tokens with stale cache data immediately after startup, breaking authentication.

**Severity: Medium (Functional Regression)**
*   **[#53244 - WhatsApp Plugin Runtime Missing](https://github.com/openclaw/openclaw/issues/53244)**
    *   The npm package for v2026.3.22+ is missing critical runtime source files (`light-runtime-api.ts`), causing the WhatsApp extension to crash on load.
*   **[#53158 - OpenAI-compat Session Key Prefix](https://github.com/openclaw/openclaw/issues/53158)**
    *   The OpenAI-compatible HTTP endpoint hardcoded "openai" as the session prefix, ignoring the actual provider configured. Fixed in **[#54759](https://github.com/openclaw/openclaw/pull/54759)**.
*   **[#51085 - Mic Button Blocked by Headers](https://github.com/openclaw/openclaw/issues/51085)**
    *   The STT (Speech-to-Text) microphone feature in the Control UI is silently non-functional due to restrictive `Permissions-Policy` headers in the gateway.

## 6. Feature Requests & Roadmap Signals
*   **Model Context Protocol (MCP)**: Issue **[#29053](https://github.com/openclaw/openclaw/issues/29053)** calls for native client support for MCP to standardize tool connections across the industry, rather than relying on OpenClaw-specific tooling.
*   **Control UI Agent Switching**: Issue **[#32495](https://github.com/openclaw/openclaw/issues/32495)** highlights that the web UI is locked to the "main" agent; users want to switch between "code-agent" and "docs-agent" via the UI.
*   **Agent Identity & Trust (RFC)**: Issue **[#49971](https://github.com/openclaw/openclaw/issues/49971)** proposes a cryptographically secure identity system for agents, referencing ERC-8004 and W3C DIDs.
*   **Async Callbacks**: Issue **[#18237](https://github.com/openclaw/openclaw/issues/18237)** requests the ability for agents to launch long-running processes and receive callbacks, rather than blocking the turn.

## 7. User Feedback Summary
*   **Frustration with Regression**: The rapid release cycle (2026.3.13 -> 2026.3.22) has introduced significant regressions. Users frequently report "it worked yesterday, now it fails," particularly regarding OAuth tokens (OpenAI, Qwen, Mistral) and missing npm package assets.
*   **Plugin Ecosystem Fragility**: There are multiple reports (WeChat, WhatsApp, Google Chat) of plugins failing to load or register correctly. The shift in the plugin SDK seems to have left third-party maintainers behind.
*   **Deployment Complexity**: Users running Docker containers or VPS instances are struggling with `trusted-proxy` authentication logic, SSL requirements for the Control UI, and Node.js version compatibility.
*   **Performance**: Token wastage is a hot topic (Issue **[#9157](https://github.com/openclaw/openclaw/issues/9157)**), with users noting that 93.5% of the token budget is wasted on re-injecting workspace files on every message.

## 8. Backlog Watch
*   **[#26322 - OAuth Token Refresh Race Condition](https://github.com/openclaw/openclaw/issues/26322)**: A lingering issue where concurrent agents sharing an OAuth profile cause "refresh_token_reused" errors. This has been open since Feb 25 and is becoming increasingly critical as multi-agent setups become common.
*   **[#14593 - Docker Brew Fail](https://github.com/openclaw/openclaw/issues/14593)**: The "Skill install fails... brew not installed" issue in the official Docker container remains open, indicating a gap in container environment tooling.
*   **[#47079 - Mistral API 422](https://github.com/openclaw/openclaw/issues/47079)**: OpenAI-compatibility adapters are breaking strict providers like Mistral by sending unsupported parameters (e.g., `max_completion_tokens`). This affects core interoperability.

---

## Cross-Ecosystem Comparison

# Ecosystem Analysis Report: Personal AI Assistant & Agent Landscape (2026-03-26)

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is undergoing a phase of **aggressive architectural maturation and feature standardization**. While high-velocity development is the norm across the board—driven by the rapid release of frontier LLMs (OpenAI o1, Anthropic Sonnet 4, etc.)—projects are struggling with **stability debt**. A clear industry-wide split is emerging between "kitchen sink" platforms that bundle everything (RAG, DBs, UIs) and "minimalist" frameworks that focus on agent logic. However, universal challenges regarding **memory management, context window inefficiency, and integration fragility** (OAuth, plugins) remain significant bottlenecks for production deployment.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | v2026.3.24 (Active) | ⚠️ Turbulent |
| **LobsterAI** | 37 | 50 | v2026.3.25 (Active) | ⚠️ High Debt |
| **CoPaw** | 50 | 49 | v0.2.0.post1 (Active) | 🔥 High Velocity |
| **NanoBot** | 18 | 51 | No Release (Dev) | ⚠️ Refactoring |
| **Zeroclaw** | 39 | 50 | v0.6.1 (Regressing) | ⚠️ Unstable |
| **NanoClaw** | ~26 | ~29 | No Release (Stable) | ✅ Healthy |
| **ZeptoClaw** | ~9 | ~22 | No Release (Active) | ✅ Stable |
| **IronClaw** | ~10 | ~50 | v0.22.0 (Refactor) | ⚠️ Complex |
| **NullClaw** | Low | Low | No Release (Stable) | ✅ Healthy |
| **TinyClaw** | 0 | 4 | No Release (Stable) | ✅ Stable |
| **Moltis** | 3 | 3 | No Release (Stable) | ✅ Healthy |
| **EasyClaw** | 0 | 0 | Stagnant | ⚠️ Dormant |

*\*Health Score based on signal-to-noise ratio of activity, critical bug severity, and community sentiment.*

## 3. OpenClaw's Position
OpenClaw remains the **undisputed market leader in terms of raw community mass and integration breadth**, acting effectively as the "reference implementation" for the ecosystem.
*   **Advantages:** Its plugin ecosystem is unmatched, and features like the **Episodic Memory System (PR #54750)** and **Model Router** show technical ambition that peers are only starting to explore. It is the only project tackling "Enterprise" identity (DIDs) seriously.
*   **Disadvantages:** It is currently suffering from **scaling pains**. The release cadence (v2026.3.x) is introducing severe regressions (OAuth, token persistence) that smaller, more focused projects like NanoClaw or ZeptoClaw have managed to avoid.
*   **Comparison:** Peers like **LobsterAI** are matching OpenClaw's feature set (Web search, MCP) but struggling similarly with stability, while **NanoBot** and **IronClaw** are attempting to differentiate via architecture (removing dependencies like LiteLLM) rather than competing on sheer plugin count.

## 4. Shared Technical Focus Areas
Several requirements are emerging simultaneously across the ecosystem, indicating standard user needs:

*   **Persistent, Vector-Based Memory:**
    *   **NanoClaw:** Integrating Mem0/Neo4j via PR #1256.
    *   **IronClaw:** Pushing for full transcript history in Routines (PR #1650).
    *   **CoPaw:** Community requesting migration from `MEMORY.md` flat files to vector DBs due to retrieval inefficiency (Issue #2289).
*   **Agentic "Thinking" Visibility:**
    *   **OpenClaw:** Users demanding explanation of token usage (Issue #9157).
    *   **Moltis:** Active discussion on "Local Thinking" features (Issue #490).
    *   **ZeptoClaw:** Adding visual "typing" and processing indicators for better UX.
*   **Multi-Model / "Tiered" Routing:**
    *   **OpenClaw:** Implementing a Model Router (PR #54562).
    *   **IronClaw:** Users requesting granular model selection per task (Issue #1634).
    *   **LobsterAI:** Users requesting different models for coding vs. chat (Issue #856).
*   **Multimodal / Vision Support:**
    *   **NullClaw:** Requesting native base64 image pipelines (Issue #624).
    *   **ZeptoClaw:** Fixing photo handling in Telegram (PR #432).
*   **MCP (Model Context Protocol) Adoption:**
    *   **Zeroclaw & LobsterAI:** Both seeing significant friction and bug reports regarding MCP tool integration, signaling it as the de-facto standard for tool connections.

## 5. Differentiation Analysis
*   **Architectural Philosophy:**
    *   **OpenClaw & LobsterAI (The "Suites"):** Monolithic, battery-inclusive platforms. They handle everything from the UI to the database. *Risk:* Bloat and instability (e.g., LobsterAI's DB bloat, OpenClaw's plugin crashes).
    *   **NanoBot & IronClaw (The "Architects"):** Focused on internal agent purity. NanoBot aggressively removing `LiteLLM` for security; IronClaw rewriting its core engine (v2) to handle Rust/WASM tooling. *Target:* Developers building infrastructure, not end-users.
    *   **NanoClaw & ZeptoClaw (The "Minimalists"):** Lightweight, CLI-first, or single-channel focused. They prioritize "it just works" reliability over feature count. *Target:* Power users and self-hosters.
*   **Integration Strategy:**
    *   **OpenClaw** relies on a plugin marketplace.
    *   **CoPaw** focuses on Asian enterprise platforms (Feishu, DingTalk) as a priority.
    *   **LobsterAI** is positioning itself as a commercial bridge (selling "Fuel Packs") while open-sourcing the core.

## 6. Community Momentum & Maturity
*   **High Velocity / High Risk (The "Churn" Zone):** **OpenClaw** and **LobsterAI**. Massive features are landing daily, but users are reporting "upgrade fatigue" and breaking changes. Best for users who want the absolute latest features at the cost of stability.
*   **Refactoring Phase:** **NanoBot**, **IronClaw**, **Zeroclaw**. These projects are actively tearing down old code (LiteLLM, legacy engines) to fix technical debt. Current releases are potentially unstable, but the roadmap promises a much stronger v2.
*   **Stabilizing / Maturing:** **NanoClaw**, **ZeptoClaw**, **Moltis**. These projects are fixing specific bugs (WhatsApp, Telegram) and polishing user experience. They are safe bets for production deployment *today*.
*   **Stagnant:** **EasyClaw**. No activity signals a potential abandoned project.

## 7. Trend Signals
*   **The "LiteLLM" Backlash:** **NanoBot's** aggressive removal of LiteLLM (due to security/performance concerns) is a leading indicator. We expect other projects to move toward native provider implementations or lighter adapters to avoid "middleman" bugs and latency.
*   **Context Window Crisis:** Across **OpenClaw** (93.5% waste), **CoPaw** (flat file memory issues), and **IronClaw** (truncation loops), it is clear that current RAG and memory systems are not scaling with LLM context limits. The next major technical breakthrough will be in **hierarchical compression** or **stateless agents**.
*   **Desktop Revival:** **OpenClaw's** push for GTK4/Linux and **LobsterAI's** desktop security features suggest a trend away from browser-only chat interfaces toward "native OS agents" that can deeper interact with the file system and desktop environment.
*   **Multi-Agent Orchestration:** **CoPaw** and **IronClaw** are laying the groundwork for agents managing agents (multi-tenant setups, async callbacks), moving away from the single-bot chat model.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-26

## 1. Today's Overview
NanoBot is experiencing a **high-velocity development cycle** with significant architectural shifts. In the last 24 hours, the project tracked 69 activity events (51 PRs, 18 Issues), indicating a massive surge in contributions. The project is currently in a **"Refactor & Stabilize"** phase, marked by the aggressive removal of the `LiteLLM` dependency following security concerns and subsequent frictions with OpenAI-compatible providers. While this improves security, it has introduced temporary regressions in provider compatibility (OAuth, token limits) and broken integrations (LangSmith). The community is highly active, proposing new providers (AWS Bedrock, Step Fun) and usability enhancements (skill commands), but maintainers are currently focused on patching the fallout from the dependency剥离.

## 2. Releases
**No new releases** published in the last 24 hours. The codebase appears to be in a state of rapid iteration between commits, with `main` likely containing features not yet tagged for stability.

## 3. Project Progress
**Features Advanced & Fixes:**
*   **Provider Expansion:** Native support for **AWS Bedrock** (PR #2485) and **Step Fun (阶跃星辰)** (PR #2472) is actively being developed to fill the gap left by LiteLLM.
*   **Channel Improvements:**
    *   **Discord:** A major refactor (PR #2486) aims to replace custom WebSocket handling with the stable `discord.py` library to fix protocol reliability.
    *   **Telegram:** PR #2492 introduces a debounce layer to fix issue #2208, preventing duplicate message processing when users forward text.
*   **Stability & Reliability:**
    *   **Resilience:** PR #2478 (merged/closed) added a retry mechanism with exponential backoff for message sending.
    *   **Process Management:** PR #2410 addresses the accumulation of zombie processes from the `exec` tool.
    *   **Conversation History:** PR #2479 fixes API errors caused by consecutive assistant messages in history.

## 4. Community Hot Topics
*   **The LiteLLM Quarantine & Aftermath (Issue #2443)**
    *   **Link:** https://github.com/HKUDS/nanobot/issues/2443
    *   **Analysis:** The project flagged `litellm` as a credential stealer/quarantined dependency and removed it. This has caused a **ripple effect** of issues.
*   **OpenAI Compatibility & Token Limits (Issue #2476, #2462, PR #2494, #2491)**
    *   **Link:** https://github.com/HKUDS/nanobot/issues/2476
    *   **Analysis:** High controversy exists over the `max_tokens` vs. `max_completion_tokens` parameters. Users on VolcEngine and Mistral are experiencing crashes because NanoBot now forces parameters meant for OpenAI `o1` models onto all providers. PR #2491 attempts to make these mutually exclusive.
*   **Architectural Critique: Prompt Prefixes (Issue #2463)**
    *   **Link:** https://github.com/HKUDS/nanobot/issues/2463
    *   **Analysis:** A deep technical discussion highlighting that NanoBot's history persistence mechanism does not exactly match the prompt sent to the model. This breaks strict prompt compliance features needed for advanced OpenAI profiles.

## 5. Bugs & Stability
**Critical Severity:**
*   **[Security/Stability] SSH/System Deadlock (Issue #2456):** `nanobot onboard` causes system-wide deadlocks and SSH lockouts in multi-user Linux environments. This is a critical blocker for server deployments. (Status: Closed, but root cause analysis is vital).
*   **[Regression] LangSmith Integration Broken (Issue #2493):** The removal of `litellm_provider.py` completely broke LangSmith tracing.

**High Severity:**
*   **[Regression] OAuth/Routing Broken (Issue #2465):** The `RoutingProvider` incorrectly forces OAuth-based models (like OpenAI Codex) through a LiteLLM constructor (which is being removed), causing `BadRequestError`.
*   **[Provider] Qwen-3.5 InvalidParameter (Issue #2469):** Error calling LLM due to "function.arguments" formatting issues, likely related to the recent refactoring of tool calls or provider payloads.
*   **[Provider] WeChat Group Limits (Issue #2467):** Reports of exceeding maximum group number limits (details pending).

**Moderate Severity:**
*   **[Regression] VolcEngine/Mistral Parameter Errors:** Multiple reports (Issues #2476, #2462) that providers are rejecting the `max_tokens`/`max_completion_tokens` payload.
*   **[Cosmetic/UX] Telegram Duplicates (Issue #2208):** (Fix in PR #2492) Android clients receive duplicate messages, confusing users.

## 6. Feature Requests & Roadmap Signals
*   **User-Activated Skills (Issue #2489 / PR #2488):** Users want a `/skill` command to explicitly activate skills instead of relying on the agent to decide. **Prediction:** High chance of inclusion in next minor version given the active PR.
*   **Generic Plugin Bridge (Issue #2484):** Request for a standardized adapter layer to support generic "OpenClaw" plugins, extending the ecosystem beyond built-in channels.
*   **Nano Team Mode (PR #2013):** An active, long-running PR introducing "LLM-planned multi-worker async collaboration." This represents a major leap in agent capability (multi-agent orchestration).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Frustration with Compatibility:** Users are exhausted by the breaking changes caused by the LiteLLM removal, with specific complaints about LangSmith and niche providers (VolcEngine, Mistral).
    *   **Reliability:** Issues with zombie processes and SSH deadlocks suggest instability in production environments.
    *   **Obscurity:** Users struggle to know *why* an agent failed, requesting clearer messages when actions aren't actually executed (Issue #2487).
*   **Use Cases:**
    *   **Multi-platform Routing:** Heavy use of routing tiers to mix and match models (e.g., Codex for routing, local models for execution).

## 8. Backlog Watch
*   **Gemini API Key Configuration (Issue #144):** Open since Feb 5, users still face "Missing gemini_api_key" errors when trying to use generic Gemini configurations.
*   **Discord Channel Stability (PR #2486):** While a PR exists, the migration to `discord.py` is still open, indicating the current Discord implementation remains fragile.
*   **Prompt Cache Instability (Issue #2440):** The `openai_codex` provider uses unstable hash keys for caching, preventing efficiency gains in conversations. This issue is open but lacks a assigned fix.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-03-26

## 1. Today's Overview
Zeroclaw is experiencing a **high-velocity development cycle**, with 85 new or updated items (39 issues, 50 PRs) in the last 24 hours. The project is actively stabilizing its v0.6.x release, focusing heavily on fixing critical streaming regressions introduced in v0.6.1 and addressing architectural debt related to memory management. The community is highly engaged, reporting specific friction points in multi-room Matrix support, Docker deployments, and installation tooling. While feature velocity is high, the volume of high-severity bug reports indicates a period of instability following recent feature additions.

## 2. Releases
*No new releases published in the last 24 hours.*
(Note: Users are reporting regressions on v0.6.1 and gaps in v0.6.2, suggesting an urgent need for a v0.6.3 patch release.)

## 3. Project Progress
**Key Advancements:**
*   **Matrix Channel Stabilization:** Significant progress has been made on Matrix channel functionality.
    *   PRs [#4665](https://github.com/zeroclaw-labs/zeroclaw/pull/4665) and [#4700](https://github.com/zeroclaw-labs/zeroclaw/pull/4700) fix the multi-room listening logic to honor `allowed_rooms` rather than scoping to a single ID.
    *   PR [#4680](https://github.com/zeroclaw-labs/zeroclaw/pull/4680) and [#4697](https://github.com/zeroclaw-labs/zeroclaw/pull/4697) introduce `mention_only` configuration to reduce spam in group chats.
*   **Memory Management:** To address unbounded memory growth, PR [#4706](https://github.com/zeroclaw-labs/zeroclaw/pull/4706) implements LRU caching for conversation history, capping the sender map to prevent memory exhaustion over time.
*   **Docker & Tooling Fixes:**
    *   PR [#4712](https://github.com/zeroclaw-labs/zeroclaw/pull/4712) fixes the Docker build by creating a stub Tauri workspace member.
    *   PR [#4693](https://github.com/zeroclaw-labs/zeroclaw/pull/4693) updates `install.sh` to correctly pass user-selected Cargo features during compilation.

## 4. Community Hot Topics
*   **[Feature] Provide a "full" docker image** ([#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642))
    *   *Discussion:* Users struggle with the barrier to entry when features like WhatsApp are disabled by default to save memory. There is a strong demand (👍 2) for a "batteries-included" Docker image that prioritizes ease of use over minimal resource consumption.
*   **[Bug] Zeroclaw gateway / Dashboard unavailable** ([#3655](https://github.com/zeroclaw-labs/zeroclaw/issues/3655))
    *   *Discussion:* A friction point for users installing via Brew who expect the web dashboard to work out-of-the-box but are met with build instructions. This highlights a gap between "easy install" methods and "ready-to-run" states.
*   **[Bug] Matrix channel: friction tracker** ([#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657))
    *   *Discussion:* An umbrella issue tracking multiple failures in the Matrix integration, including broken E2EE One-Time Keys (OTK) and lack of response streaming. This indicates the Matrix channel is currently unstable for production use.

## 5. Bugs & Stability
**Critical Regressions (S0/S1):**
*   **[S0] Groq API Key Exposure** ([#4672](https://github.com/zeroclaw-labs/zeroclaw/issues/4672)): Groq API keys are not masked in the UI, posing a significant security risk.
*   **[S1] Streaming broken in v0.6.1** ([#4670](https://github.com/zeroclaw-labs/zeroclaw/issues/4670), [#4523](https://github.com/zeroclaw-labs/zeroclaw/issues/4523)): Users experience "unknown does not support streaming" errors via WebSocket/Webhook.
    *   *Fix Status:* PR [#4675](https://github.com/zeroclaw-labs/zeroclaw/pull/4675) and [#4690](https://github.com/zeroclaw-labs/zeroclaw/pull/4690) are open to correct the `turn_streamed` logic.
*   **[S1] Tool Execution Failures** ([#4478](https://github.com/zeroclaw-labs/zeroclaw/issues/4478)): Agents report using tools (e.g., web_search) but execute nothing.
*   **[S1] Docker Quick-start 401 Errors** ([#4678](https://github.com/zeroclaw-labs/zeroclaw/issues/4678)): The default Docker image returns 401 Unauthorized on API endpoints because `require_pairing` defaults to true, blocking the workflow.

**High Severity (S2):**
*   **Memory Leak:** Unbounded `ConversationHistoryMap` causes RSS growth over time ([#4699](https://github.com/zeroclaw-labs/zeroclaw/issues/4699)). *Fix incoming in [#4709](https://github.com/zeroclaw-labs/zeroclaw/pull/4709).*
*   **MCP Integration:** Tools connect but fail to trigger/execute ([#4716](https://github.com/zeroclaw-labs/zeroclaw/issues/4716)).
*   **Web Chat Amnesia:** Context is lost after only 2 rounds of conversation ([#4644](https://github.com/zeroclaw-labs/zeroclaw/issues/4644)).

## 6. Feature Requests & Roadmap Signals
*   **Raspberry Pi Support:** With the removal of the PostgreSQL backend ([#4714](https://github.com/zeroclaw-labs/zeroclaw/pull/4714)), users are explicitly asking for deployment guides for Pi 5 hardware ([#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704)), signaling a push for "edge" AI agent deployment.
*   **MariaDB Backend:** Users want MariaDB support as an alternative to SQLite/Postgres ([#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668)).
*   **Secret Management CLI:** Request for a `zeroclaw secret set` command to manage encrypted configs without re-running the full onboarding wizard ([#4669](https://github.com/zeroclaw-labs/zeroclaw/issues/4669)).
*   **A2A Protocol:** Continued work on Agent-to-Agent protocol support ([#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166)) suggests multi-agent orchestration is a strategic priority.

## 7. User Feedback Summary
*   **Installation Experience:** Users are frustrated that selecting features during `onboard` (like Matrix or Postgres) does not automatically set the required build flags in the install script ([#4654](https://github.com/zeroclaw-labs/zeroclaw/issues/4654)), leading to broken installations.
*   **Docker Usability:** The "zero config" Docker experience is currently degraded due to auth defaults and missing workspace members for the build process.
*   **WhatsApp Scam Warnings:** Users report WhatsApp Web marking the device as "unknown" or a potential scam ([#4708](https://github.com/zeroclaw-labs/zeroclaw/issues/4708)), indicating a need for better metadata/device naming configuration.

## 8. Backlog Watch
*   **Plugin Sandboxing:** Issue [#2972](https://github.com/zeroclaw-labs/zeroclaw/issues/2972) (Suggestion: Implement secure sandboxing for plugins) was recently updated but remains open. This is a critical architectural security request that hasn't seen a corresponding PR start yet.
*   **Streaming with Custom Providers:** Documentation is missing for how to force `stream=true` for custom OpenAI-compatible providers ([#4646](https://github.com/zeroclaw-labs/zeroclaw/issues/4646)), causing friction for users not using the default providers.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-26

## 1. Today's Overview
NanoClaw is exhibiting **high development velocity** today, characterized by intense maintenance and community contribution. The project closed 26 issues and merged 29 PRs in the last 24 hours, indicating a strong focus on backlog cleanup and code quality. However, stability remains a concern as several critical bugs regarding container runtime logic, database migrations, and scheduling idempotency were addressed. The community is actively expanding the agent's ecosystem with significant contributions in persistent memory (Mem0) and new channel integrations (AstrBot), while maintainers are actively resolving CI/CD bottlenecks affecting skill branch synchronization.

## 2. Releases
*   **No new releases** published in the last 24 hours.

## 3. Project Progress
*   **Security & Reliability:** Merged fixes for critical command injection vulnerabilities and race conditions identified in the daily security audit (via #1431).
*   **Container & UX Improvements:**
    *   PR #1453 & #1450 were merged/closed to refine agent instructions in `CLAUDE.md`, steering agents toward the `schedule_task` primitive rather than inline bash loops for better reliability.
    *   PR #1353 was merged to fix a registration bug where the `CLAUDE.md` template was not being copied for new "main" groups.
    *   PR #1368 was merged to ensure the `claw` CLI exits gracefully, preventing hanging processes.
*   **Platform Fixes:** PR #1367 was merged to correct Telegram database migrations, preventing DMs from being incorrectly classified as group chats.
*   **CI/CD Hygiene:** Merged PR #1370 to prevent GitHub Actions from failing on forks by adding repository checks to `bump-version` and `update-tokens` workflows.

## 4. Community Hot Topics
*   **Feature: Persistent Graph Memory** ([PR #1256](https://github.com/qwibitai/nanoclaw/pull/1256))
    *   *Status:* Open. This highly anticipated PR adds the `/add-mem0-graph` skill, integrating Mem0 (50k+ stars) to provide agents with persistent long-term memory using Qdrant and Neo4j. It signals a community desire to move beyond transient chat sessions toward stateful AI agents.
*   **UX: Session Reset** ([Issue #1211](https://github.com/qwibitai/nanoclaw/issues/1211))
    *   *Status:* Open. Users are requesting a `/new` command to reset session context. With 3 comments and 2 upvotes, this highlights a pain point regarding token waste and context pollution in long-running sessions.
*   **Architecture: Scheduling Idempotency** ([Issue #783](https://github.com/qwibitai/nanoclaw/issues/783))
    *   *Status:* Closed. A widely discussed bug regarding `schedule_task` accumulating duplicates across sessions has been addressed, a crucial fix for production reliability.
*   **Platform: Linux Support** ([Issue #1445](https://github.com/qwibitai/nanoclaw/issues/1445))
    *   *Status:* Open. A detailed breakdown of 6 bugs affecting Linux setups (Ubuntu/Hetzner), including silent message drops and firewall issues. This indicates the project is maturing beyond macOS/Dev container usage into bare-metal Linux deployments.

## 5. Bugs & Stability
*   **[CRITICAL] Command Injection & Race Conditions** ([Issue #1431](https://github.com/qwibitai/nanoclaw/issues/1431))
    *   Fixed in: [PR #1368](https://github.com/qwibitai/nanoclaw/pull/1368) (related fix).
    *   The audit identified `exec()` usage with string interpolation as a critical vector.
*   **[HIGH] Silent Message Drops on Linux** ([Issue #1445](https://github.com/qwibitai/nanoclaw/issues/1445))
    *   WhatsApp DMs are being dropped due to LID JID translation failures. This is a regression for production users on Linux.
*   **[HIGH] Sidecar Instability** ([Issue #1454](https://github.com/qwibitai/nanoclaw/issues/1454))
    *   The sidecar process exits immediately if `WATCH_CONTAINER` or `WATCH_CONFIGS` are unset due to incorrect `asyncio` logic, causing the agent runner to fail unexpectedly.
*   **[MEDIUM] Read-Only File System Errors** ([Issue #1451](https://github.com/qwibitai/nanoclaw/issues/1451))
    *   The watcher health check attempts to write to a read-only mount (`/workspace/extra/watcher/`), causing failures in restricted environments.
*   **[MEDIUM] User Experience: Silent Processing** ([Issue #1440](https://github.com/qwibitai/nanoclaw/issues/1440))
    *   Users report "hangs" during long tasks (10+ mins) due to lack of intermediate feedback/status updates.

## 6. Feature Requests & Roadmap Signals
*   **New Session Management:** High demand for `/new` command to reset context ([Issue #1211](https://github.com/qwibitai/nanoclaw/issues/1211)). Likely to appear in next minor version given the upvotes.
*   **Persistent Memory:** PR #1256 suggests the next major evolution is equipping agents with memory graphs (Mem0) rather than simple vector stores.
*   **Multi-Account Support:** [Issue #1455](https://github.com/qwibitai/nanoclaw/issues/1455) requests multi-account Gmail MCP server support, indicating a shift toward multi-tenant agent usage.

## 7. User Feedback Summary
*   **Positive:** Users appreciate the "minimalist approach" and "lightweight, secure alternative" compared to bloated frameworks (cited in [Issue #1184](https://github.com/qwibitai/nanoclaw/issues/1184)).
*   **Pain Points:**
    *   **Documentation Drift:** [Issue #1075](https://github.com/qwibitai/nanoclaw/issues/1075) highlights confusion regarding Linux support status.
    *   **Setup Complexity:** Linux setup remains fragile ([Issue #1445](https://github.com/qwibitai/nanoclaw/issues/1445)), with specific complaints about WhatsApp phone number prompts causing failures ([Issue #447](https://github.com/qwibitai/nanoclaw/issues/447)).
    *   **Token Efficiency:** [Issue #1211](https://github.com/qwibitai/nanoclaw/issues/1211) calls out that the inability to clear context leads to wasted tokens and "bloated" prompts.

## 8. Backlog Watch
*   **Skill Branch CI Failures:** Multiple automated issues ([#1437](https://github.com/qwibitai/nanoclaw/issues/1437), [#1436](https://github.com/qwibitai/nanoclaw/issues/1436), etc.) indicate that the `merge-forward` workflow is repeatedly failing for `skill/apple-container`, `skill/native-credential-proxy`, and `skill/ollama-tool`. This requires manual maintainer intervention to resolve merge conflicts.
*   **Restricted K8s Deployments:** [Issue #1184](https://github.com/qwibitai/nanoclaw/issues/1184) discusses challenges running NanoClaw in restricted environments (Sealos), suggesting a need for more flexible architecture regarding sidecars and file watchers.
*   **Telegram Topics Support:** [Issue #1420](https://github.com/qwibitai/nanoclaw/issues/1420) notes that Telegram Topics (message_thread_id) are ignored, limiting utility in large group chats.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest (2026-03-26)

## 1. Today's Overview
The NullClaw project exhibited moderate development activity on March 26, 2026, with a focus on backend stability and core tooling expansion. While no new releases were published, significant progress was made in resolving critical concurrency issues within the scheduler system and clarifying runtime behavior through documentation. Development is heavily focused on infrastructure robustness, evidenced by complex fixes for mutex lifecycles and memory leaks, alongside the introduction of standard mathematical tools. The community is actively driving expansion into multimodal capabilities (Vision) and third-party platform integration (WeChat), indicating a strong demand for broader interoperability.

## 2. Releases
No new releases were published today.

## 3. Project Progress
**Merged Pull Requests:**

*   **Fix Cron Scheduler Stability (#689):** A critical fix was merged to address a race condition and memory leak within the scheduler. The changes ensure that the `schedulerThread` correctly handles mutex locking during reload→snapshot→tick→save cycles, preventing conflicts with HTTP handlers and the `runQueueWorker`.
    *   *Impact:* High. Resolves potential crashes and memory bloat.
    *   *URL:* [PR #689](https://github.com/nullclaw/nullclaw/pull/689)

*   **Documentation Clarification (#620):** Documentation was updated to explicitly define the behavior of `workspace_path` and its interaction with `system_prompt`, including added regression tests to ensure future changes do not alter current behavior unexpectedly.
    *   *URL:* [PR #620](https://github.com/nullclaw/nullclaw/pull/620)

## 4. Community Hot Topics
*   **WeChat Plugin Integration (#714):**
    *   *Discussion:* Users are advocating for the integration of the recently released official WeChat plugin to support the massive user base in China and Southeast Asia. The request highlights that competing forks have already adopted this feature.
    *   *Underlying Need:* The community views platform-specific integration (especially for Asian markets) as a critical differentiator and fears losing ground to forks that offer this functionality out-of-the-box.
    *   *URL:* [Issue #714](https://github.com/nullclaw/nullclaw/issues/714)

*   **Vision Pipeline / Multimodal Support (#624):**
    *   *Discussion:* A request to implement automatic base64 encoding for images and files to facilitate multimodal LLM analysis.
    *   *Underlying Need:* Users are moving toward text-plus-vision workflows and want native support for image analysis without writing custom skills/workarounds.
    *   *URL:* [Issue #624](https://github.com/nullclaw/nullclaw/issues/624)

## 5. Bugs & Stability
*   **Discord Scheduled DM Delivery Failure (#715):**
    *   *Severity:* Medium.
    *   *Description:* Scheduled Discord DMs are failing because the system appears to reuse direct-session identifiers instead of valid DM channel targets. While live replies work, scheduled messages are affected.
    *   *Status:* Open. No fix PR exists yet.
    *   *URL:* [Issue #715](https://github.com/nullclaw/nullclaw/issues/715)

*   **Scheduler/Worker Race Condition:**
    *   *Severity:* High (Historical/Fixed).
    *   *Description:* Race conditions between job reloading and execution ticks were causing instability.
    *   *Status:* **Fixed** via merged PR #689.

## 6. Feature Requests & Roadmap Signals
*   **Native Calculator Tooling (Open PR #716):**
    *   *Details:* A pull request was opened today adding a comprehensive calculator tool with 20 operations (statistics, basic math, etc.).
    *   *Prediction:* Given the standard nature of this request and the existence of a ready-to-merge PR, this will likely be included in the next minor release.
    *   *URL:* [PR #716](https://github.com/nullclaw/nullclaw/pull/716)

*   **Multimodal Vision Support:**
    *   *Signals:* Based on #624, users want the agent to natively handle image inputs (JPG/PNG) and automatically convert them to base64 for LLM processing. This is a strong candidate for the next roadmap iteration.

## 7. User Feedback Summary
*   **Positive/Necessary:** Users are effectively identifying gaps in the official core compared to forks (specifically regarding WeChat support).
*   **Pain Points:** The lack of built-in mathematical tools requires users to write their own skills or external wrappers, a frustration likely addressed by the new PR #716. Additionally, the distinction between "live" and "scheduled" messaging logic in Discord caused confusion and operational failure.

## 8. Backlog Watch
*   **Issue #714 (WeChat Support):** While only opened yesterday, the strategic importance of supporting the Chinese market suggests this should be prioritized to prevent user migration to other forks.
*   **Issue #624 (Vision Pipeline):** Open since March 18, this feature request is essential for modern AI agents. Maintainer attention is needed to merge this into the core roadmap.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-26

## 1. Today's Overview
IronClaw is experiencing a high-velocity development cycle with significant architectural refactoring underway. The project has recorded **50 updated PRs** (14 open, 36 closed/merged) and **10 updated issues** in the last 24 hours, indicating a very active maintenance phase. The primary focus appears to be on **multi-tenant isolation** (Phase 2–4) and a major architectural overhaul introducing a **Unified Thread-Capability-CodeAct execution engine (v2)**. Stability remains a concern with several active bugs related to LLM provider integrations (AWS Bedrock, NEAR AI) and tool execution truncation.

## 2. Releases
No new releases were published in the last 24 hours. The most recent release remains `v0.22.0`.

## 3. Project Progress
*   **Multi-Tenant Isolation:** Phases 2–4 of the multi-tenant isolation project are merging via [PR #1614](https://github.com/nearai/ironclaw/pull/1614). This enforces tenant context at the database, command, and type levels, crucial for security and data separation.
*   **Architectural Refactoring:** Work continues on the next-generation architecture. [PR #1557](https://github.com/nearai/ironclaw/pull/1557) introduces the `ironclaw_engine` crate, aiming to unify fragmented execution abstractions into a single model.
*   **Routine Engine Fixes:** The CI pipeline actively promoted staging batches (e.g., [PR #1655](https://github.com/nearai/ironclaw/pull/1655)), integrating registry bumps and routine history improvements that persist full LLM transcripts for better debugging.

## 4. Community Hot Topics
*   **Critical Routine Engine Failure:** [Issue #763](https://github.com/nearai/ironclaw/issues/763) (Closed) addresses a 400 error where the routine engine fails to include a user message, violating NEAR AI API requirements. This was a high-impact crash for automation workflows.
*   **Architectural Standardization:** [PR #1557](https://github.com/nearai/ironclaw/pull/1557) (Open) is the largest active PR (XL size). It seeks to replace ~10 abstractions with 5 primitives. The community is watching this closely as it defines the future extensibility of the platform.
*   **Tool Call Reliability:** [Issue #1631](https://github.com/nearai/ironclaw/issues/1631) highlights a "garbage in, garbage out" scenario where LLMs echo large tool results, causing truncation and subsequent agent crashes. This touches on the core stability of the agentic loop.

## 5. Bugs & Stability
*   **[CRITICAL] AWS Bedrock Integration Failure:** [Issue #1629](https://github.com/nearai/ironclaw/issues/1629) / [PR #1630](https://github.com/nearai/ironclaw/pull/1630).
    *   **Symptom:** `Validation error: The toolConfig field must be defined...`
    *   **Impact:** Bedrock users cannot use tools if the agentic loop enters a "force_text" iteration with tool history.
    *   **Status:** Fix PR is open and pending review.
*   **[HIGH] Agent Loop Malfunction on Truncation:** [Issue #1631](https://github.com/nearai/ironclaw/issues/1631) / [PR #1632](https://github.com/nearai/ironclaw/pull/1632).
    *   **Symptom:** When `finish_reason == Length` (e.g., due to large MCP responses), the agent attempts to process truncated tool calls, leading to invalid execution.
    *   **Fix:** PR #1632 proposes discarding these calls and warning the LLM.
*   **[MEDIUM] Rust WASM Builder Loop:** [Issue #1640](https://github.com/nearai/ironclaw/issues/1640).
    *   **Symptom:** Agent gets stuck in a failure loop generating invalid `Cargo.toml` dependencies (maps instead of strings) when building tools.
    *   **Status:** Open, affecting the "build_software" capability.
*   **[MEDIUM] Feishu Channel Configuration:** [Issue #1633](https://github.com/nearai/ironclaw/issues/1633).
    *   **Symptom:** `app_id not configured (missing from workspace)` error during `on_respond`, despite credentials being set via `tool_auth`.

## 6. Feature Requests & Roadmap Signals
*   **Drift Detection (Anti-Hallucination):** [Issue #1634](https://github.com/nearai/ironclaw/issues/1634) proposes a "DriftMonitor" to detect agent failure patterns (e.g., loops, refusals) without extra LLM calls. This signals a roadmap focus on **cost efficiency** and **robustness**.
*   **Improved Testing Coverage:** A cluster of issues ([#1653](https://github.com/nearai/ironclaw/issues/1653), [#1652](https://github.com/nearai/ironclaw/issues/1652), [#1644](https://github.com/nearai/ironclaw/issues/1644)) requests rigorous regression tests for multi-tenant prompts and REPL behaviors. This indicates a push for **enterprise-grade stability** as multi-tenancy rolls out.
*   **Full Routine Transparency:** [PR #1650](https://github.com/nearai/ironclaw/pull/1650) suggests users want full visibility into routine execution history (not just summaries), likely for debugging complex agent chains.

## 7. User Feedback Summary
*   **Pain Point:** Users are experiencing friction with **Sandbox limits**, as seen in [Issue #1637](https://github.com/nearai/ironclaw/issues/1637) (command execution failures) and **Tool Building**, where the agent struggles to generate valid Rust code for dependencies ([Issue #1640](https://github.com/nearai/ironclaw/issues/1640)).
*   **Validation:** The closure of [Issue #763](https://github.com/nearai/ironclaw/issues/763) validates that "Routines" (automated agent jobs) are a critical workflow for users, and API breaks here are high priority.

## 8. Backlog Watch
*   **CI/CD Health:** A significant portion of the PR activity (30+ items) consists of automated staging promotions ([e.g., PR #1451](https://github.com/nearai/ironclaw/pull/1451)). While automated, the frequency suggests a high merge velocity that requires careful monitoring of main branch stability.
*   **Legacy Support:** The active work on stripping tool blocks for Bedrock ([PR #1630](https://github.com/nearai/ironclaw/pull/1630)) suggests a growing backlog of provider-specific quirks that need to be abstracted away in the v2 engine architecture.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# Project Digest: LobsterAI (2026-03-26)

## 1. Today's Overview
The LobsterAI project is experiencing an extremely high-velocity development cycle with significant technical debt accumulation. In the last 24 hours, the repository has seen **37 updated issues** (with 34 remaining active) and **50 updated pull requests**, indicating a massive push in development activity. A new release (**2026.3.25**) was just published, introducing account login, "fuel pack" (top-up) features, and desktop security permissions. However, the project is currently facing **severe stability challenges**, with daily activity dominated by reports of database bloat, regression bugs causing gateway crashes, and security vulnerabilities. The community is actively testing the new "OpenClaw" gateway and MCP integrations, revealing friction points in packaging and configuration sync.

## 2. Releases
**Version 2026.3.25** (Released 2026-03-25)
This release represents a significant milestone in the platform's commercialization and security capabilities.
*   **Key Changes**:
    *   **Commercialization**: Added account login and "Fuel Pack" (credit/paid add-on) functionality (PR #779).
    *   **Security**: Implemented desktop-side authorization for dangerous commands (PR #796).
    *   **Chat Experience**: Fixed synchronization issues in IM chat contexts (PR #780).

## 3. Project Progress
*   **Integration & Compatibility**:
    *   Merged and actively developing **GitHub Copilot Integration** (PR #707), adding OAuth support and treating Copilot as a model provider.
    *   **MCP (Model Context Protocol) Support**: While active in issues, the codebase shows efforts to stabilize the `openclaw-weixin` plugin configuration (PR #797) to prevent gateway startup failures when channels are missing.
*   **Performance Optimization**:
    *   **SQLite Performance**: PR #812 addresses critical main-thread blocking by debouncing `save()` operations and moving to async writes, a crucial fix for desktop responsiveness.
    *   **UI Rendering**: PR #809 splits Redux selectors to reduce unnecessary re-renders.
    *   **Database Integrity**: PR #881 enables foreign key constraints in SQLite to fix cascading deletes and prevent database bloat.
*   **Stability Fixes**:
    *   **Gateway Management**: PR #870 (merged) eliminates unnecessary gateway restarts when switching models.
    *   **Crash Prevention**: PR #852 fixes a main process crash caused by accessing destroyed windows (`event.sender`).

## 4. Community Hot Topics
*   **MCP Configuration Frustration** (Issue #728, #724, #820)
    *   **Links**: [#728](https://github.com/netease-youdao/LobsterAI/issues/728), [#820](https://github.com/netease-youdao/LobsterAI/issues/820)
    *   **Analysis**: Users are struggling to get MCP tools working. Issues range from "0 tools" being detected to configurations working in dev (`npm start`) but failing in the production build. This suggests a bundling or environment variable issue in the Electron packaging process.
*   **Gateway Instability & Loops** (Issue #859, #858)
    *   **Links**: [#859](https://github.com/netease-youdao/LobsterAI/issues/859), [#858](https://github.com/netease-youdao/LobsterAI/issues/858)
    *   **Analysis**: A specific regression where invalid model configuration (empty model names) causes the OpenClaw Gateway to crash and enter an infinite restart loop. Users cannot stop the loop without manual intervention, signaling a lack of "circuit breaker" logic in the process manager.
*   **Documentation & Feature Gap** (Issue #884, #856)
    *   **Links**: [#884](https://github.com/netease-youdao/LobsterAI/issues/884)
    *   **Analysis**: With the introduction of paid features, users are confused about the difference between "Logged In" vs. "Local" modes and how purchased credits interact with self-hosted models.

## 5. Bugs & Stability
*   **Critical: Database Bloat** (Issue #879)
    *   **Details**: Deleting a session does not delete associated messages because SQLite foreign keys are disabled by default. This causes the database to grow indefinitely.
    *   **Fix**: PR #881 is open to address this by enabling `PRAGMA foreign_keys`.
*   **High: IM Integration Regressions**
    *   **DingTalk Duplicate Messages** (Issue #691): Bot replies with two messages (sometimes identical).
    *   **POPO Line Breaks** (PR #882): Messages show raw `<br />` tags instead of newlines.
*   **High: Scheduled Task Failures** (Issue #837, #850)
    *   **Details**: Tasks that trigger during "lock screen" fail persistently. Disabling tasks doesn't stop them from running.
*   **Medium: Rendering & UX**
    *   Windows slash commands (e.g., `/status`) do not work (Issue #883).
    *   Markdown rendering layout is broken (Issue #824).
*   **Security**: Multiple PRs (#869, #877) are patching `shell.openExternal` to prevent RCE via dangerous URL schemes (file:, powershell:, etc.).

## 6. Feature Requests & Roadmap Signals
*   **PRD to EARS Transformation** (Issue #873): Request for specific product management skills to convert specs using the EARS method.
*   **Git Worktree Support** (Issue #873): Users want better support for `git worktree` workflows.
*   **Granular Model Selection** (Issue #856): Users want to use different models for different tasks (e.g., one for coding, one for chat) rather than a global switch.
*   **Skill Execution Statistics** (PR #871): A new feature is being developed to visualize stats on how often skills are used, addressing the "black box" nature of AI agent behavior.

## 7. User Feedback Summary
*   **Pain Points**:
    *   **Packaging**: There is a distinct disconnect between "development mode" (where things work) and "packaged app" (where MCP/features break).
    *   **Feedback Loop**: The infinite restart loop (Issue #859) is a major user experience failure.
    *   **Documentation**: The rollout of new features (OpenClaw, Fuel Packs) has outpaced the documentation, leaving users confused about capabilities and pricing.
*   **Positive Signals**: Users appreciate the deep customization (custom models, MCP) when it works, indicating high loyalty if stability improves.

## 8. Backlog Watch
*   **Issue #399 (Open since Mar 13)**: "Claude run failed" errors when calling specific Alibaba Cloud models. This suggests a lingering adapter or parsing issue in the backend.
*   **Issue #624**: Related to the window destruction crash (PR #852 merged today), this highlights a long-standing race condition in async IPC handling.
*   **Issue #817**: Messages/Sessions lack pagination, causing memory leaks and lag with long histories. This is a fundamental architecture issue requiring significant refactoring.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**Project Digest: TinyClaw**
**Date:** 2026-03-26
**Repository:** [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)

### 1. Today's Overview
TinyClaw is currently undergoing a significant internal refactoring phase aimed at improving system architecture and stability. Development activity is high, with 4 pull requests updated in the last 24 hours, all focused on core infrastructure rather than new experimental features. The project has successfully closed three major technical debts regarding containerization, CLI management, and authentication standardization. Currently, there are no active issues reported, and no new releases were published today.

### 2. Releases
*No new releases published in this period.*

### 3. Project Progress
The following features and fixes have advanced via merged Pull Requests:

*   **Infrastructure Refactoring (CLI):** The project has successfully replaced bash shell scripts with a pure Node.js entrypoint ([PR #260](https://github.com/TinyAGI/tinyagi/pull/260)). This change removes dependencies on tools like `tmux`, `jq`, and `curl`, streamlining the process management into `packages/main/src/index.ts` and enabling better Docker support.
*   **Containerization Support:** The Docker build pipeline has been fixed and optimized ([PR #262](https://github.com/TinyAGI/tinyagi/pull/262)). Updates include a multi-stage Dockerfile and logic to skip unnecessary Puppeteer downloads during the build process, significantly reducing image size and build complexity.
*   **Authentication Standardization:** Credentials for providers have been standardized ([PR #261](https://github.com/TinyAGI/tinyagi/pull/261)). Changes include renaming `auth_token` to `api_key` and introducing specific support for Anthropic API keys and OAuth tokens, clarifying the authentication flow for different LLM providers.

### 4. Community Hot Topics
*Note: Reaction and comment data was undefined in the source data; topics are selected based on the significance of the changes.*

*   **UI/UX Overhaul:** The most significant active discussion is regarding the "Office" layout overhaul. [PR #249](https://github.com/TinyAGI/tinyagi/pull/249) proposes moving navigation from a sidebar to a top bar. This reflects a community or maintainer desire to modernize the interface and improve the spatial organization of the agent management system.
*   **Developer Experience (DX):** The closure of [PR #260](https://github.com/TinyAGI/tinyagi/pull/260) highlights a focus on lowering the barrier to entry for contributors and users by removing the need to understand complex bash scripting in favor of accessible Node.js code.

### 5. Bugs & Stability
*   **Docker Build Failure:** A critical bug where the Docker build process was broken has been addressed in [PR #262](https://github.com/TinyAGI/tinyagi/pull/262). The fix involved resolving Puppeteer download conflicts and reorganizing the README to prevent user confusion regarding installation methods.
*   **Authentication Inconsistency:** Prior to the merge of [PR #261](https://github.com/TinyAGI/tinyagi/pull/261), there was a lack of standard naming conventions for API keys vs. OAuth tokens. This has been stabilized, reducing potential runtime errors for users configuring multiple providers.

### 6. Feature Requests & Roadmap Signals
*   **Improved UI Navigation:** The active work on [PR #249](https://github.com/TinyAGI/tinyagi/pull/249) signals a roadmap priority on User Experience. Specifically, making agent characters "clickable" to open detail panels suggests a move towards a more graphical, interactive agent management dashboard rather than a purely text-based interface.
*   **Docker-First Deployment:** The updates in [PR #262](https://github.com/TinyAGI/tinyagi/pull/262) and [PR #260](https://github.com/TinyAGI/tinyagi/pull/260) strongly signal that the project is moving toward containerization as a standard deployment method, reducing reliance on local environment dependencies.

### 7. User Feedback Summary
*Based on commit and PR summaries:*
*   **Positive:** Users and contributors appreciate the move away from fragile shell scripts towards a robust Node.js CLI, which promises better cross-platform compatibility.
*   **Positive:** The reorganization of the README to prioritize the `tinyagi` CLI flow over Docker (while keeping Docker available) indicates a responsive adjustment to user onboarding friction.
*   **Neutral:** The shift to a Topbar navigation (PR #249) is a major UI change; user sentiment on this specific layout shift is pending as it remains in an open state.

### 8. Backlog Watch
*   **UI Architecture Migration:** [PR #249](https://github.com/TinyAGI/tinyagi/pull/249) remains open and is currently the main item pending completion. It involves significant changes to routing and layout logic. While created recently, its "Open" status suggests it is the primary focus for the next merge cycle.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest - 2026-03-26

## 1. Today's Overview
Moltis demonstrates active development health with a focus on codebase modernization, evidenced by 3 updated pull requests and 3 issues in the last 24 hours. The project is currently optimizing its OpenAI provider integration, shifting towards a more efficient implementation (`openai-oxide`) that promises to significantly reduce code bloat. While no new releases were published today, the closure of a bug regarding WhatsApp integration and an MCP feature enhancement indicates steady progress on stability and user experience. The community is actively discussing improvements to "Local Thinking" capabilities, suggesting a strong interest in enhanced local processing features.

## 2. Releases
*No new releases published on 2026-03-26.*

## 3. Project Progress
*   **WhatsApp Integration Restored:** A critical bug affecting WhatsApp integration ([#460](https://github.com/moltis-org/moltis/issues/460)) was successfully closed today, restoring connectivity for users relying on this messaging platform.
*   **MCP Server Usability Improved:** Pull request [#439](https://github.com/moltis-org/moltis/pull/439) was merged/closed, adding the ability to set custom display names for MCP (Model Context Protocol) servers. This allows users to assign friendly names to servers while maintaining stable technical identifiers, improving the management of multiple tools.

## 4. Community Hot Topics
*   **Rethinking the OpenAI Provider:**
    *   **[PR #487: Add openai-oxide as alternative OpenAI provider](https://github.com/moltis-org/moltis/pull/487)**
    *   **Discussion:** This proposal is the most significant technical discussion of the day. The author suggests replacing the current ~5300-line implementation with `openai-oxide` (~888 lines).
    *   **Underlying Need:** The community and contributors are seeking a more maintainable, feature-complete, and "batteries-included" async library for OpenAI interactions, reducing the technical debt of the current implementation.
*   **Local Thinking Enhancement:**
    *   **[Issue #490: Local thinking](https://github.com/moltis-org/moltis/issues/490)**
    *   **Underlying Need:** Users are requesting robust support for "Local Thinking" (likely referring to local inference or distinct chain-of-thought processing modalities). While Issue #489 was closed as a duplicate, #490 remains open, indicating specific requirements for how local thinking should be handled or displayed.

## 5. Bugs & Stability
*   **WhatsApp Integration Failure (Resolved):**
    *   **Severity:** High (User-reported; received 3 upvotes).
    *   **Status:** Fixed ([#460](https://github.com/moltis-org/moltis/issues/460)).
    *   **Details:** Users reported that the WhatsApp integration was non-functional. The issue was updated and closed today, suggesting a fix has been deployed in the codebase or is imminent in the next release.

## 6. Feature Requests & Roadmap Signals
*   **Alternative AI Providers:** The submission of [PR #487](https://github.com/moltis-org/moltis/pull/487) strongly signals that the roadmap is moving toward supporting `openai-oxide` as a first-class provider, likely to improve performance and maintainability.
*   **Local Thinking Capabilities:** With [Issue #490](https://github.com/moltis-org/moltis/issues/490) open and active, "Local Thinking" is a clear candidate for the next feature cycle. The discussion suggests users want granular control or visualization of the agent's thinking process locally.

## 7. User Feedback Summary
*   **Satisfaction:** Users appreciate the rapid response to the WhatsApp bug, evidenced by the upvotes on [Issue #460](https://github.com/moltis-org/moltis/issues/460).
*   **Pain Points:** The sheer size of the current OpenAI integration code (noted in [PR #487](https://github.com/moltis-org/moltis/pull/487)) is a pain point for contributors; simplifying this will directly impact the project's agility.
*   **Feature Requests:** There is a recurring request for "Local Thinking" features, suggesting that current local agent capabilities may not fully meet user expectations for transparency or processing modes.

## 8. Backlog Watch
*   **Dependency Upgrades:** [PR #488](https://github.com/moltis-org/moltis/pull/488) (bumping `reqwest` from 0.12 to 0.13) is currently open. This is a blocking change required for the new `openai-oxide` provider. While low-risk, it is a prerequisite for other features and requires merging to unblock further development.
*   **Local Thinking Specification:** [Issue #490](https://github.com/moltis-org/moltis/issues/490) requires maintainer review to define the exact scope of "Local thinking" to ensure it is implemented correctly.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Project CoPaw Daily Digest: 2026-03-26

## 1. Today's Overview
CoPaw is experiencing an intense burst of development activity, with 50 issues and 49 pull requests updated in the last 24 hours. The project is currently in a high-velocity phase following the `v0.2.0` release, addressing significant scalability and usability concerns. Activity is heavily focused on stabilizing multi-agent environments, fixing high-severity bugs (CPU loops, memory corruption), and refining the new multi-agent configuration model. The community is highly engaged, reporting friction points with the latest version's architecture changes while contributors rapidly push fixes.

## 2. Releases
**[v0.2.0.post1]((https://github.com/agentscope-ai/CoPaw/releases/tag/v0.2.0.post1))**
*   **Type**: Patch Release.
*   **Key Changes**:
    *   **Tool Parsing**: Fixed tool call parsing from "thinking" and text content (PR #2192).
    *   **Documentation**: Updated release notes for the recent v0.2.0 cycle.
*   **Migration Notes**: Users upgrading should verify tool definitions in prompts to ensure they are correctly parsed after the update.

## 3. Project Progress
*   **Multi-Agent Configuration Refactor**: PRs **[#2283](https://github.com/agentscope-ai/CoPaw/pull/2283)** (Closed) and **[#2278](https://github.com/agentscope-ai/CoPaw/pull/2278)** (Open) are actively resolving critical issues where model configurations were leaking between agents in multi-tab scenarios. This aims to fix the user confusion where setting a model for one agent would overwrite another's.
*   **Context Management Overhaul**: PR **[#2300](https://github.com/agentscope-ai/CoPaw/pull/2300)** is restructuring context management (v2.0) to address CPU usage and memory efficiency, explicitly aiming to lower CPU idle usage caused by file watchers.
*   **Universal Stop Command**: PR **[#2067](https://github.com/agentscope-ai/CoPaw/pull/2067)** introduces a `/stop` command, allowing users to interrupt agents across all channels (Feishu, DingTalk, etc.).
*   **Local Model Fixes**: PR **[#266](https://github.com/agentscope-ai/CoPaw/pull/266)** improves error handling for `llama.cpp` initialization, providing actionable context when backend startup fails.

## 4. Community Hot Topics
*   **[Feature] Asynchronous Agent Communication** ([PR #2225](https://github.com/agentscope-ai/CoPaw/pull/2225))
    *   **Discussion**: High interest in moving from synchronous to asynchronous agent execution with callbacks.
    *   **Underlying Need**: Users are building complex multi-agent workflows (e.g., stock trading analysis) requiring parallel execution without blocking the main controller agent.
*   **[Bug] Memory & Efficiency Degradation** ([Issue #2289](https://github.com/agentscope-ai/CoPaw/issues/2289))
    *   **Discussion**: Concern that text-based memory files (`MEMORY.md`) are growing too large, causing retrieval efficiency to drop significantly over time.
    *   **Underlying Need**: A demand for vectorized or database-backed memory management rather than flat file storage for long-running agents.
*   **[Feature] Per-Agent Model Selection** ([Issue #2288](https://github.com/agentscope-ai/CoPaw/issues/2288))
    *   **Discussion**: Users want to assign specific models (e.g., Qwen for coding, GLM for creativity) to specific agents permanently, rather than relying on a global setting that gets overwritten.
    *   **Status**: Being addressed in PR #2278.

## 5. Bugs & Stability
*   **[CRITICAL] High CPU Usage at Idle** ([Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218), [Issue #1774](https://github.com/agentscope-ai/CoPaw/issues/1774))
    *   **Severity**: High. Users report CoPaw pegging CPU at 100% due to busy-polling epoll loops and memory compaction hooks.
    *   **Fix Status**: PR #2300 is explicitly targeting the reduction of file watcher CPU usage.
*   **[CRITICAL] Multi-Agent Model Confusion** ([Issue #2174](https://github.com/agentscope-ai/CoPaw/issues/2174), [Issue #2274](https://github.com/agentscope-ai/CoPaw/issues/2274))
    *   **Severity**: High. In multi-agent setups, models fail to load or settings revert to the last used model, breaking "specialist" agent workflows.
    *   **Fix Status**: PR #2283 (Closed) claims to fix the configuration overwrite logic.
*   **[HIGH] Memory File Not Updating/Created** ([Issue #2243](https://github.com/agentscope-ai/CoPaw/issues/2243))
    *   **Severity**: Medium. Agents fail to write to `MEMORY.md` or create daily memory files in v0.2.0.
*   **[HIGH] Cron / Scheduled Task Failures** ([Issue #2230](https://github.com/agentscope-ai/CoPaw/issues/2230), [Issue #2153](https://github.com/agentscope-ai/CoPaw/issues/2153))
    *   **Severity**: Medium. `503` errors and expiration issues (DingTalk webhook) are causing scheduled tasks to fail.

## 6. Feature Requests & Roadmap Signals
*   **Private Gateway Support** ([Issue #2296](https://github.com/agentscope-ai/CoPaw/issues/2296)): Request to support custom HTTP headers and formats for enterprise internal gateways, moving beyond standard OpenAI format.
*   **Tabbed UI for Multi-Agent** ([Issue #2281](https://github.com/agentscope-ai/CoPaw/issues/2281)): Strong user dissatisfaction with opening multiple browser tabs to manage different agents; a request for a single-page tabbed interface or dropdown switcher.
*   **Agent "Disable/Offline" Toggle** ([Issue #2284](https://github.com/agentscope-ai/CoPaw/issues/2284)): Users want to deactivate agents temporarily without deleting them.
*   **One-Click Update** ([Issue #2301](https://github.com/agentscope-ai/CoPaw/issues/2301)): Users are finding manual upgrades error-prone and requesting an automatic update mechanism.

## 7. User Feedback Summary
*   **v0.2.0 Upgrade Pain**: Users report significant friction upgrading from `0.1.0` to `0.2.0`, citing "downgrade" experiences where features (like file reception in DingTalk) stopped working ([Issue #2028](https://github.com/agentscope-ai/CoPaw/issues/2028)) or web interfaces became inaccessible ([Issue #2254](https://github.com/agentscope-ai/CoPaw/issues/2254)).
*   **Interaction Fatigue**: The current workflow of managing multiple agents by opening multiple console tabs is described as "interaction is too poor" ([Issue #2281](https://github.com/agentscope-ai/CoPaw/issues/2281)).
*   **Channel Reliability**: There are persistent reports of "delayed replies" in Feishu ([Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345)) and connection issues with Huawei Xiaoyi ([Issue #1911](https://github.com/agentscope-ai/CoPaw/issues/1911)), suggesting channel integration stability is a priority.

## 8. Backlog Watch
*   **[P0] Context/Memory Optimization**: With multiple issues (#2289, #1774) citing performance cliffs due to memory management, the long-term shift away from text-file memory (hinted at in PR #2300) is a critical backlog item.
*   **Multi-Agent Architecture**: The confusion around "Global vs. Per-Agent" configuration suggests a need for a finalized, documented architecture decision to stop the flow of bug reports regarding config overwrites.
*   **Channel Standardization**: Issues regarding missing Stop commands and different channel behaviors indicate a need for a standardized channel interface to ensure feature parity across Feishu, DingTalk, and WeChat.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-26

## 1. Today's Overview
ZeptoClaw is experiencing a **high-velocity development cycle** with significant activity focused on enhancing the Telegram channel and tooling infrastructure. In the last 24 hours, the project closed 9 issues and merged 22 pull requests, indicating a strong push toward stability and feature completion. The repository is currently highly active, with contributors refining a major "BrowserTool" integration and resolving critical bugs in the Telegram message handler. The community appears responsive, with rapid iterations on container engine detection and protocol security hardening.

## 2. Releases
**No new releases** were published in the last 24 hours.

## 3. Project Progress
The project saw substantial progress in infrastructure and user experience features:

*   **Agent Client Protocol (ACP) Security:** PR #440 was merged, hardening the ACP HTTP channel by restricting CORS headers when an auth token is present and validating paths to prevent directory traversal attacks ([#434](https://github.com/qhkm/zeptoclaw/issues/434)).
*   **Telegram Experience Enhancements:** Several PRs were merged to improve interaction flow.
    *   **Threading:** PR #432 implemented reply-to threading for outbound messages, making conversations easier to follow in groups ([#427](https://github.com/qhkm/zeptoclaw/issues/427)).
    *   **Typing Indicators:** PR #429 and #430 addressed a race condition in typing indicators, though the latter was closed in favor of a rebase.
    *   **Content Support:** A bug causing photo messages to be silently dropped was resolved ([#419](https://github.com/qhkm/zeptoclaw/issues/419)).
*   **Tooling & Search:** Web search tools (Brave, DuckDuckGo) were updated via PR #439 to provide "quiet output" (status lines) to users while streaming full results to the LLM, improving UI cleanliness.
*   **Container Engine Fixes:** The team iterated quickly on container build scripts. After initial "prefer Podman" logic in PR #426 caused issues for Docker users, a smarter detection script was opened in PR #441 to auto-detect the underlying engine.

## 4. Community Hot Topics
The most active discussions center on the new **BrowserTool** and the ongoing refinement of the **Telegram** integration.

*   **[BrowserTool Integration](https://github.com/qhkm/zeptoclaw/pull/442)** (Open): This is the community's focal point. It introduces web automation via `agent-browser` with SSRF protection. The discussion involves splitting the original monolithic PR (#410) into a stack to manage dependencies (typing indicators, config).
*   **[Telegram Feedback Loops](https://github.com/qhkm/zeptoclaw/issues/428)** (Open): There is high interest in visual feedback. Issue #428 and PR #433 discuss adding emoji reactions (👀/✅) to indicate message processing status, addressing user needs for responsiveness.
*   **[Container Build Errors](https://github.com/qhkm/zeptoclaw/issues/424)** (Closed): A significant pain point for developers using Podman was the linting script failing. The rapid closure of this issue and the subsequent PR (#441) highlights the community's focus on maintaining a smooth developer experience.

## 5. Bugs & Stability
Several critical bugs were identified and resolved today, improving overall system stability:

1.  **[Telegram Photo Handling (P2)](https://github.com/qhkm/zeptoclaw/issues/419)**: Photos were being silently dropped because the handler expected text-only. A fix was merged.
2.  **[Telegram Typing Race Condition](https://github.com/qhkm/zeptoclaw/issues/415)**: Concurrent messages caused typing indicators to cancel each other out incorrectly.
3.  **[Model Discoverability Regression (P1)](https://github.com/qhkm/zeptoclaw/issues/416)**: A critical bug where merged model IDs (e.g., `anthropic/claude-sonnet-4-6`) broke OpenRouter-style routing. This was marked critical and fixed.
4.  **[LLM Date Hallucination](https://github.com/qhkm/zeptoclaw/pull/431)**: The agent was hallucinating days of the week due to ambiguous date formatting. PR #431 fixed this by using full day names (e.g., "Monday").

## 6. Feature Requests & Roadmap Signals
Based on the activity, the following features are likely incoming in the next version:

*   **Web Browsing Capabilities:** The heavy activity on PR #442 strongly suggests full web browsing will be the next major feature release.
*   **Advanced Telegram UX:** The "Reaction Indicator" (PR #433) and "HTML Link Escaping" (PR #443) indicate a push for a richer, more secure Telegram experience.
*   **Smarter DevOps:** The "Smarter Container Engine Detection" (PR #441) signals a move towards a more agnostic and robust containerized development environment.

## 7. User Feedback Summary
User feedback highlights a desire for **natural, responsive interactions** on Telegram.
*   **Positive:** Users appreciate the visual threading of messages, which reduces confusion in group chats.
*   **Pain Points:** The lack of feedback when an image is sent or when the bot is "thinking" (typing) was noted as making the bot feel unresponsive. The current PRs addressing "Reaction Indicators" and "Photo Support" directly address this dissatisfaction.

## 8. Backlog Watch
While most active issues are being closed, **Issue #331 (Improve Telegram support)** remains a broader umbrella issue that is slowly being chipped away at by specific PRs. It is not stale, but it represents a continuous commitment to elevating Telegram from a basic interface to a first-class conversational UI.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*