# OpenClaw Ecosystem Digest 2026-04-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-06 00:12 UTC

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

# OpenClaw Project Digest: 2026-04-06

## 1. Today's Overview
OpenClaw is experiencing a period of **hyperactive development and significant instability**. With 500 issues and 500 PRs updated in just 24 hours, the project is clearly in a heavy sprint phase, likely preparing for a major release (e.g., `2026.4.x`). However, the volume of "regression" and "crash" reports suggests that recent commits have introduced severe volatility, particularly regarding model routing, timeout handling, and channel integrations (Telegram, WhatsApp). While the community is highly engaged, the technical debt appears to be spiking due to rapid feature iteration.

## 2. Latest Releases
**No new releases published today.**
*Note: Despite the high activity, no stable tags were pushed in the last 24 hours.*

## 3. Project Progress
*Refactoring & Stability Fixes (Merged/Closed PRs)*
*   **Refactored Plugin Installers:** PR [#60437](https://github.com/openclaw/openclaw/pull/60437) (Closed) and [#61568](https://github.com/openclaw/openclaw/pull/61568) (Open) successfully extracted shared plugin update argument builders, streamlining the install logic for npm, ClawHub, and marketplace sources.
*   **Lobster In-Process Integration:** PR [#61523](https://github.com/openclaw/openclaw/pull/61523) (Closed) marked a major architectural shift by moving the `lobster` CLI execution into the in-process runtime, removing subprocess overhead and paving the way for better TaskFlow state management.
*   **UI Internationalization:** PR [#61553](https://github.com/openclaw/openclaw/pull/61553) (Open) addressed i18n debt in the Web UI by replacing hardcoded strings with translation keys across 12 languages.

*New Features Advancing*
*   **Bedrock Memory Search:** PR [#61547](https://github.com/openclaw/openclaw/pull/61547) (Open) adds native Amazon Bedrock support (Titan/Cohere) for memory embeddings, expanding enterprise infrastructure compatibility.
*   **Fallback Context Modes:** PR [#60984](https://github.com/openclaw/openclaw/pull/60984) (Open) introduces "safe/light" context modes, allowing agents to degrade gracefully to smaller models without losing context during failures.

## 4. Community Hot Topics
*   **RFC: Native Agent Identity & Trust Verification** ([#49971](https://github.com/openclaw/openclaw/issues/49971), 68 comments)
    *   **Analysis:** A massive proposal involving MoltyCel (CryptoKRI GmbH) to integrate W3C DIDs and ERC-8004. The community is heavily debating the trust model for autonomous agents, signaling a shift toward "Agent Economy" infrastructure.
*   **Internationalization (i18n) Support** ([#3460](https://github.com/openclaw/openclaw/issues/3460), 120 comments, Closed)
    *   **Analysis:** Despite maintainer reluctance due to bandwidth, this remains the highest-engagement thread. Users are desperate for non-English support, resorting to community patches.
*   **OpenRouter & Codex Regression:** Issues [#53959](https://github.com/openclaw/openclaw/issues/53959) (Codex stops executing tools) and [#51056](https://github.com/openclaw/openclaw/issues/51056) (OpenRouter 401 errors).
    *   **Analysis:** Users are frustrated that core model providers (OpenRouter, OpenAI Codex) are breaking in recent builds, indicating a regression in the authentication or transport layer.

## 5. Bugs & Stability
*Critical / High Severity*
*   **LLM Timeouts Ignored:** [#46049](https://github.com/openclaw/openclaw/issues/46049) - Requests ignore configured timeout settings (even 24h), causing immediate hangs. *Impact: High.*
*   **Execution Stalls:** [#40631](https://github.com/openclaw/openclaw/issues/40631) - Agents confirm tasks but perform no actions (false starts).
*   **Timeout Failover Logic:** [#59598](https://github.com/openclaw/openclaw/issues/59598) - "embedded run failover" causes gateway crashes in `2026.4.1`.
*   **ACP Session Deaths:** [#52452](https://github.com/openclaw/openclaw/issues/52452) - Sub-agent sessions (ACP) silently die without completion events, leaving parent agents hanging indefinitely.

*Regressions (Recent Updates)*
*   **Session Routing Bug:** [#58878](https://github.com/openclaw/openclaw/issues/58878) - Heartbeats route to subagents instead of main, corrupting task results.
*   **Model Registry Failure:** [#61093](https://github.com/openclaw/openclaw/issues/61093) - `claude-cli` backend fails to register models in `2026.4.2`.
*   **WhatsApp Audio Transcription:** [#59437](https://github.com/openclaw/openclaw/issues/59437) - Broken in `2026.4.1` (regression from `2026.3.7`).

## 6. Feature Requests & Roadmap Signals
*   **Agent-to-Agent Economy:** RFC [#28106](https://github.com/openclaw/openclaw/issues/28106) proposes a protocol for agents to discover and delegate tasks to other agents (decentralized "Agent Economy").
*   **Proactive Rate Limit Handling:** [#22282](https://github.com/openclaw/openclaw/issues/22282) requests *preemptive* fallback based on rate limit headers rather than waiting for a 429 failure.
*   **OAuth vs. Key Selection:** [#30055](https://github.com/openclaw/openclaw/issues/30055) asks for explicit control over auth methods (OAuth vs API Key) in the routing chain.
*   **Post-Subagent Hooks:** [#22358](https://github.com/openclaw/openclaw/issues/22358) requests hooks to trigger logic after a subagent finishes (e.g., generating trajectory logs).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **"Hallucinated" Auth Errors:** Users report OpenRouter and specific provider plugins failing with auth errors despite valid keys.
    *   **Garbage Output:** Leaked internal reasoning tokens ("thinking blocks") and duplicate messages are appearing in end-user channels (Telegram/Discord), causing embarrassment.
    *   **Docker Frustrations:** The `brew` dependency issue inside Linux containers ([#14593](https://github.com/openclaw/openclaw/issues/14593)) continues to plague new users trying the Docker image.
    *   **Localization:** The inability to use OpenClaw in Chinese (or other languages) officially is a major barrier for the massive Asian user base (as seen in the closed translation thread).
*   **Satisfaction:**
    *   Users are highly satisfied with the *feature velocity* (new models, new channels like Signal/BlueBubbles) but frustrated by the *instability* of these new features.

## 8. Backlog Watch
*   **Stale Cron Locks:** [#30096](https://github.com/openclaw/openclaw/issues/30096) - A simple but devastating bug where cron jobs lock permanently if the gateway crashes. No fix merged yet despite being reported in Feb.
*   **Model Fallback Resets:** [#29564](https://github.com/openclaw/openclaw/issues/29564) - User-configured fallbacks are silently ignored/reset after restarts.
*   **SQL Injection Vulnerability:** [#29951](https://github.com/openclaw/openclaw/issues/29951) - A critical SQL injection flaw in the metrics endpoint was closed, but the discussion suggests the fix may need verification.
*   **WebSocket Auth Failures:** [#30458](https://github.com/openclaw/openclaw/issues/30458) - Ongoing WebSocket handshake issues preventing UI login for specific cloud providers.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: 2026-04-06

## 1. Ecosystem Overview
The personal AI agent ecosystem is currently undergoing a phase of **rapid maturation and architectural divergence**. Projects are aggressively moving beyond basic "chat-with-LLM" functionalities to tackle complex challenges in **multi-agency** (OpenClaw, NanoClaw), **determinism** (NullClaw, IronClaw), and **platform independence** (Rust-based IronClaw vs. TypeScript incumbents). A distinct trend toward **"Agent 2.0"** features is evident, including **Identity/DID integration** (OpenClaw), **Knowledge Graph memory** (NullClaw), **SOP/Workflow modes** (ZeroClaw, NullClaw), and **RESTful administration** (NullClaw). However, this innovation rush is accompanied by significant **technical debt**, with major players like OpenClaw and NanoBot grappling with critical regressions in stability, security, and resource management.

## 2. Activity Comparison

| Project | 24h Issues | 24h PRs | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | ~500 (High) | ~500 (High) | No Release | ⚠️ Unstable |
| **NanoBot** | 11 | 121 | Nightly (Unstable) | ⚠️ Volatile |
| **ZeroClaw** | 35 | 50 | No Release | ⚠️ Critical Bugs |
| **NanoClaw** | 7 | 41 | No Release | ✅ Stabilizing |
| **NullClaw** | 9 | 14 | **v2026.4.4** | ✅ Healthy |
| **IronClaw** | 5 | 45 | No Release | ✅ Testing Phase |
| **LobsterAI** | 3 | 6 | No Release | ⚠️ Regression |
| **Moltis** | 6 | 8 | **v20260405.06** | ✅ Robust |
| **CoPaw** | 39 | 8 | No Release | 🔴 Resource Leak |
| **EasyClaw** | 0 | 1 | No Release | 😴 Dormant |

_*Health Score based on bug severity, feature velocity, and user sentiment._

## 3. OpenClaw's Position
**Advantages:**
OpenClaw remains the **undisputed leader in community scale and feature velocity**, currently defining the roadmap for competitors (e.g., Agent Identity/DID, "Agent Economy"). It is the only project tackling high-complexity enterprise crypto-integrations (MoltyCel/W3C DIDs) and massive i18n efforts head-on.
**Disadvantages vs. Peers:**
It is suffering from **severe instability** compared to leaner forks. With 500+ issues updated in 24 hours, it is technically fragile. Peers like **NanoClaw** and **NullClaw** are successfully shipping features (Multi-instance, Calculator, REST API) with higher code quality and fewer regressions. OpenClaw users are migrating to forks like NanoBot (cited as "far better" on Windows) to escape the "hallucinated auth errors" and "garbage output" plaguing recent builds.

## 4. Shared Technical Focus Areas
Several requirements are emerging simultaneously across the ecosystem, signaling universal demands:
*   **Deterministic Workflows (SOPs):**
    *   **ZeroClaw**: Users requesting SOP mode by default to ensure agents follow procedures.
    *   **NullClaw**: Active proposal for "Lobster-style" deterministic workflow engine.
    *   **IronClaw**: Request for `ironclaw-lobster` (Rust workflow shell) to replace Python scraping.
*   **Platform Independence & REST Control:**
    *   **NullClaw**: Push for comprehensive REST Admin API to decouple management from CLI.
    *   **NanoBot**: High demand for HTTP/WebSocket channels to bypass standard IMs.
    *   **IronClaw**: Strong push for Kubernetes runtime to replace Docker.
*   **Memory & Knowledge Architecture:**
    *   **OpenClaw**: Advancing Bedrock Memory Search.
    *   **NullClaw**: proposing `KgMemory` (SQLite Graph) over vector stores.
    *   **NanoClaw**: Focus on memory synchronization across instances.
*   **Security Hardening:**
    *   **NanoBot**: Active community push to sandbox `exec` tools (prevent config leaks).
    *   **NanoClaw**: Implementing Ed25519 cryptographic audit trails for tool use.

## 5. Differentiation Analysis
*   **IronClaw (The Enterprise contender):** Distinguishing itself via a **Rust-based architecture** and focus on "Hard Production" features (Kubernetes, WASM channels, supply chain security). It targets users needing reliability over feature-flash.
*   **NullClaw (The Platformer):** Focusing on becoming an **infrastructure layer** rather than just an assistant. Features like the REST Admin API and deterministic engines signal a shift toward supporting other applications.
*   **NanoClaw (The Multi-Agent Specialist):** uniquely focused on **Multi-Instance** orchestration (running multiple isolated agents simultaneously) and granular **Group/Permission management**, targeting power-users with complex setups.
*   **Moltis (The UX Leader):** Focused on **User Experience (UX)** and "Fit and Finish." Rapidly fixing friction points (Model selection UI, Proxy support, Error reporting) and shipping stable releases (SLSA v1.0 compliance).

## 6. Community Momentum & Maturity
*   **Hyper-Active (High Chaos):** **OpenClaw**, **ZeroClaw**. Massive feature throughput but severe technical debt and regression risks.
*   **Rapid Iterators:** **NanoBot**, **CoPaw**, **NanoClaw**. Fast PR cycles, strong community engagement, but facing growing pains (Security, Resource leaks).
*   **Stabilizing/Enterprise:** **IronClaw**, **Moltis**, **NullClaw**. Shifting focus to testing infrastructure, supply chain security, and documentation. IronClaw and Moltis are showing the highest signs of engineering discipline (E2E tests, artifact attestations).
*   **Dormant/Minimal:** **EasyClaw**, **TinyClaw**, **ZeptoClaw**.

## 7. Trend Signals
*   **Move away from "Chat":** Users increasingly want agents to perform **background automation** (Cron, Gmail Watchers, Triggered Sessions) and **Scripting** rather than just conversational replies (CoPaw, LobsterAI).
*   **Local-First Privacy:** A clear shift toward local capabilities (Local TTS in ZeroClaw, Local LLMs in NanoBot/LobsterAI, Private SearXNG in ZeroClaw) driven by privacy concerns and API reliability.
*   **The "Agent Interface" Problem:** Users are demanding **GUIs & Dashboards** (ZeroClaw, NullClaw, CoPaw) and **native platform integration** (Signal, WhatsApp, MS Teams) rather than running agents in a terminal. The terminal is becoming the "backend," not the UI.
*   **Infrastructure Maturity:** The ecosystem is adopting **DevOps best practices** (SLSA compliance, Dependabot, K8s runtime, Supply Chain Attestations), indicating that AI agents are moving from "hacker projects" to production software.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-06

## 1. Today's Overview
NanoBot is experiencing a period of intense development activity, with **121 Pull Requests** updated in the last 24 hours (96 open). While this signals a robust influx of community features and internal refactoring, the **Issue tracker** reveals significant stability concerns regarding the latest versions (`post6`/`nightly`), particularly regarding network dependencies and system hangs. The project is currently balancing high-volume feature requests with critical security and stability fixes.

## 2. Releases
*No new releases published on 2026-04-06.*
*Note: Users are actively reporting regressions in recent nightly/post-release builds.*

## 3. Project Progress
**Merged & Closed PRs (Stability Fixes)**
The project merged several critical fixes addressing recent regressions and long-standing architectural debt:
*   **Fix: DuckDuckGo Search Timeout** ([#2805](https://github.com/HKUDS/nanobot/pull/2805)) - Added an `asyncio` timeout guard to prevent the web_search tool from hanging indefinitely on network calls.
*   **Fix: Telegram Thread Context** ([#2793](https://github.com/HKUDS/nanobot/pull/2793)) - Added support for the new Telegram DM Threads feature introduced in late 2025.
*   **Fix: Reasoning Content Leakage** ([#2821](https://github.com/HKUDS/nanobot/issues/2821)) - Closed issue regarding Qwen models leaking internal "thinking" tokens to the user UI via stream deltas.
*   **Fix: CLI Output Duplication** ([#2591](https://github.com/HKUDS/nanobot/issues/2591)) - Resolved a bug where the "thinking" spinner was repeated redundantly in the terminal.

## 4. Community Hot Topics
*   **Security Architecture: Exec Tool & Privilege Separation**
    *   **Issues:** [#1873](https://github.com/HKUDS/nanobot/issues/1873) (Config leakage), [#2826](https://github.com/HKUDS/nanobot/issues/2826) (File system access).
    *   **PRs:** [#2831](https://github.com/HKUDS/nanobot/pull/2831) (Env var leaks), [#2830](https://github.com/HKUDS/nanobot/pull/2830) (Env var interpolation).
    *   **Analysis:** There is a strong community push to harden the `exec` tool. Users are demanding a "sandbox" mode where the agent cannot read sensitive config files or delete files outside the workspace, even when `restrictToWorkspace` is enabled.

*   **Network Service Integration Friction**
    *   **Issue:** [#2796](https://github.com/HKUDS/nanobot/issues/2796) (16+ 👍).
    *   **Analysis:** A recently introduced network security module is blocking `localhost` and private IP access. Users complain this breaks valid local workflows (e.g., browser automation via PinchTab), suggesting the SSRF guard is too aggressive for self-hosted setups.

*   **Transport Layer Flexibility**
    *   **PRs:** [#722](https://github.com/HKUDS/nanobot/pull/722) (HTTP API), [#1341](https://github.com/HKUDS/nanobot/pull/1341) (Web Chat), [#2819](https://github.com/HKUDS/nanobot/issues/2819) (WebSocket).
    *   **Analysis:** Users are moving away from standard IM platforms (Telegram/Discord) toward custom HTTP/WebSocket integrations for embedding NanoBot into desktop apps and internal tools.

## 5. Bugs & Stability
**Critical**
*   **[System Hang] DuckDuckGo Web Search** ([#2804](https://github.com/HKUDS/nanobot/issues/2804), [#2828](https://github.com/HKUDS/nanobot/issues/2828))
    *   **Symptom:** Using DuckDuckGo causes the entire gateway/agent to hang, blocking all messages and requiring a force kill. Users report this affects both the agent and the host OS responsiveness.
    *   **Fix:** Merged in PR [#2805](https://github.com/HKUDS/nanobot/pull/2805).

**High Severity**
*   **[Regression] Tool Calling Failure (Ollama)** ([#2829](https://github.com/HKUDS/nanobot/issues/2829))
    *   Models like `gemma4` cannot invoke tools; the agent hallucinates answers instead of executing them.
*   **[Regression] Embedded Platform Support** ([#2816](https://github.com/HKUDS/nanobot/issues/2816))
    *   NanoBot fails to respond on ARM devices (Allwin H618) after updating to `post6`.
*   **[Regression] MiniMax Provider** ([#2590](https://github.com/HKUDS/nanobot/issues/2590))
    *   The built-in MiniMax provider fails to connect in `post6`.
*   **[Bug] File Deletion Security** ([#2826](https://github.com/HKUDS/nanobot/issues/2826))
    *   The agent can remove files outside the workspace despite `restrictToWorkspace=true`.

**Medium Severity**
*   **[Bug] Prompt Leakage** ([#2795](https://github.com/HKUDS/nanobot/issues/2795))
    *   In Telegram, the bot now exposes its internal "thinking" process (e.g., "The user is asking the weather...") alongside the final answer.
*   **[Bug] Dependency Install (ARM)** ([#2818](https://github.com/HKUDS/nanobot/issues/2818))
    *   `oauth-cli-kit` dependency cannot be satisfied on ARM platforms.

## 6. Feature Requests & Roadmap Signals
*   **Unified Sessions:** Request [#2798](https://github.com/HKUDS/nanobot/issues/2798) asks for a single session context that persists across Discord, Telegram, and CLI.
*   **Enhanced Monitoring:** Request [#2820](https://github.com/HKUDS/nanobot/issues/2820) (PR [#2832](https://github.com/HKUDS/nanobot/pull/2832) opened) seeks to expose Web Search provider usage limits via the `/status` command.
*   **Protocol Support:** PR [#1164](https://github.com/HKUDS/nanobot/pull/1164) indicates demand for localized documentation (Vietnamese), while PR [#2600](https://github.com/HKUDS/nanobot/pull/2600) pushes for Microsoft Teams integration.

## 7. User Feedback Summary
*   **Positive Stability Feedback:** User `bigsinger` ([#2774](https://github.com/HKUDS/nanobot/issues/2774)) provided a strong testimonial comparing NanoBot to `openclaw`, stating NanoBot is "very stable" and "far better" than competitors on Windows, praising its consistent uptime.
*   **Pain Point - Security vs. Utility:** Advanced users are frustrated by the tight coupling of the agent loop and config files, fearing API key leakage ([#1873](https://github.com/HKUDS/nanobot/issues/1873)).
*   **Pain Point - "Thinking" Noise:** Users on Telegram ([#2795](https://github.com/HKUDS/nanobot/issues/2795)) dislike the new behavior where the bot's internal reasoning is printed to the chat, finding it noisy and confusing.

## 8. Backlog Watch
*   **Open Security Issue:** [#1873](https://github.com/HKUDS/nanobot/issues/1873) - "Nanobot currently cannot be secured from accessing its own config.json." Although closed, the underlying architectural concerns are being revisited in new PRs (#2830, #2831).
*   **Long-Standing Features:** PR [#722](https://github.com/HKUDS/nanobot/pull/722) (HTTP API Channel) and PR [#1368](https://github.com/HKUDS/nanobot/pull/1368) (A2A Protocol) remain open but active, indicating they are "wanted" features likely slated for the next major release rather than hotfixes.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Project Digest: ZeroClaw (2026-04-06)

## 1. Today's Overview
ZeroClaw is experiencing a period of intense development activity with a high volume of workflow-impacting bugs reported alongside significant feature work. The project saw **35 issues** and **50 pull requests** updated in the last 24 hours, indicating a very active repository. While no new releases were published today, the merged PRs suggest a focus on "fit and finish," addressing long-standing integration issues (GitHub Copilot), fixing cost tracking logic, and resolving OAuth refresh bugs for key providers. However, the surge in new "S1" (workflow blocked) bugs—particularly regarding the Web Dashboard and WebSocket connectivity—signals potential instability in the current `master` branch that users should be wary of.

## 2. Latest Releases
**No new releases published in the last 24 hours.**

## 3. Project Progress
*While no PRs were fully "merged" and closed in the provided list, the following PRs have been updated and are advancing through the review process, representing active development progress:*

*   **[PR #5315](https://github.com/zeroclaw-labs/zeroclaw/pull/5315)** (feat): A major overhaul of the setup experience. It introduces a full **TUI (Terminal User Interface) setup wizard** that matches the feature parity of the CLI wizard and implements **dashboard configuration sync**. This addresses the gap between CLI/Web/Desktop configuration states.
*   **[PR #5359](https://github.com/zeroclaw-labs/zeroclaw/pull/5359)** (feat): Adds **GitHub Copilot** as a first-class provider. This includes onboarding documentation and fixes to the `/api/channels` endpoint, making Copilot models accessible directly from the model dropdown.
*   **[PR #5302](https://github.com/zeroclaw-labs/zeroclaw/pull/5302)** (fix): Resolves a logic gap where **LLM cost tracking** failed for CLI, Cron, and Gateway agents. Costs were only previously tracked for channel-based agents (Telegram/Discord), leaving a blind spot for automated tasks.
*   **[PR #5298](https://github.com/zeroclaw-labs/zeroclaw/pull/5298)** (fix): Addresses a "leak" where **Chain-of-Thought (CoT) reasoning** from models like GLM-5 was inadvertently being included in the final streamed response to the user, cluttering the output.

## 4. Community Hot Topics
*   **[Web Dashboard Availability #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)** (7 comments): The most discussed issue today. Users are persistently facing errors ("Web dashboard not available. Build it with...") when trying to access the Web UI or Desktop app. This indicates a friction point in the build/distribution process where the frontend assets are not correctly bundled or served by the Rust daemon.
*   **[Local TTS Support #4116](https://github.com/zeroclaw-labs/zeroclaw/issues/4116)** (3 comments): A strong user desire to move away from cloud-only TTS (ElevenLabs/OpenAI) to **local, GPU-accelerated engines (Piper/Coqui)**. This reflects a broader trend in the user base toward "local-first" and privacy-preserving agent configurations.
*   **[Canvas & WebSocket Architecture #5356 & #5354](https://github.com/zeroclaw-labs/zeroclaw/issues/5356)**: Significant discussion around the `canvas` tool failing in channel integrations (Telegram/Discord) due to WebSocket protocol mismatches. Users are trying to build interactive visual agents but hitting infrastructure limits.

## 5. Bugs & Stability
**Critical Instability (S1 - Workflow Blocked):**
*   **[Issue #5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348)**: Users running `zeroclaw gateway` cannot access the dashboard, mirroring the larger #4866 complaint.
*   **[Issue #5117](https://github.com/zeroclaw-labs/zeroclaw/issues/5117)**: **Mistral provider integration is broken**. ZeroClaw sends an invalid `tool_call.id` format, causing all tool invocations to fail before execution.
*   **[Issue #5256](https://github.com/zeroclaw-labs/zeroclaw/issues/5256)**: **llama.cpp provider fails with specific models** (e.g., `gemma4-26B`), resulting in 500 Internal Server Errors.

**High Severity (S2/S0):**
*   **[Issue #5229](https://github.com/zeroclaw-labs/zeroclaw/issues/5229)**: Custom providers (NVIDIA API) ignore model switching logic, forcing a fallback to the default model.
*   **[Issue #5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289)**: **AWS Bedrock authentication broken**. ZeroClaw incorrectly sends an `x-api-key` header instead of using AWS SigV4 signatures, causing 403 errors.
*   **[Issue #5320](https://github.com/zeroclaw-labs/zeroclaw/issues/5320)**: Valid configuration keys (`api_key`) are being flagged as "Unknown" and ignored, posing a security risk as auth tokens fail to load.

**Fixes in Progress:**
*   **[PR #5361](https://github.com/zeroclaw-labs/zeroclaw/pull/5361)** addresses the Codex CLI crash (Issue #5360).
*   **[PR #5369](https://github.com/zeroclaw-labs/zeroclaw/pull/5369)** addresses the Canvas WebSocket protocol error.

## 6. Feature Requests & Roadmap Signals
*   **SOP (Standard Operating Procedure) Mode:** Issues [#5347](https://github.com/zeroclaw-labs/zeroclaw/issues/5347) and [#5346](https://github.com/zeroclaw-labs/zeroclaw/issues/5346) suggest a push to make agents more deterministic and reliable rather than "chatty." Users want SOP mode enabled by default to force the agent to follow strict procedures.
*   **SearXNG Integration:** [Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) and [PR #5317](https://github.com/zeroclaw-labs/zeroclaw/pull/5317) indicate a roadmap priority to support privacy-focused, self-hosted search engines (SearXNG) to replace DuckDuckGo for web search capabilities.
*   **Smart Voice/Text Switching:** [Issue #5349](https://github.com/zeroclaw-labs/zeroclaw/issues/5349) requests that the agent intelligently decide whether to reply via Voice or Text on Telegram, rather than the current binary "Voice Mode" which locks the interface into audio-only replies.

## 7. User Feedback Summary
*   **Pain Points:** The primary source of user frustration today is **installation and setup**. Multiple issues (#5269, #5255, #5348) highlight that the "getting started" experience is fraught with permission errors (Windows fsync), missing documentation for `cargo binstall`, and broken dashboards.
*   **Windows Reliability:** There are specific reports of "Access Denied" errors during the `onboard` process on Windows (#5255), suggesting the daemon's file handling needs review for Windows environments.
*   **Provider Compatibility:** Users are diverse in their model hosting (NVIDIA API, DeepSeek, Bedrock, Mistral, local llama.cpp). Feedback indicates that while the core agent works, the **abstraction layer for these providers is brittle**, with incorrect headers or model IDs breaking flows frequently.

## 8. Backlog Watch
*   **[Issue #5313](https://github.com/zeroclaw-labs/zeroclaw/issues/5313)**: A **memory leak** in the daemon when connected to Slack Socket Mode (28MB -> 460MB in 2 hours) remains unaddressed. This is critical for users hosting on small VPS instances (1GB RAM).
*   **[Issue #5183](https://github.com/zeroclaw-labs/zeroclaw/issues/5183)**: Environment variable support for Slack tokens is missing, forcing users to hardcode secrets in `config.toml`, which is a security regression.
*   **[Issue #5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262)**: A request for visibility on the [Agent Skills](https://agentskills.io) client list remains open, indicating a marketing/ecosystem integration task pending.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**Project Digest: NanoClaw**
**Date:** 2026-04-06
**Analysis Period:** Last 24 Hours

### 1. Today's Overview
NanoClaw is experiencing a **surge in high-velocity development**, with **41 Pull Requests** updated in the last 24 hours—approximately split evenly between new proposals and merged/closed work. The project appears to be in a "polish and expansion" phase, focusing on multi-platform support (Signal, WhatsApp), container portability, and refining the new `OneCLI`/OpenCode agent runner architecture. While the issue tracker remains relatively quiet (7 items), the PR velocity suggests a coordinated effort to stabilize features and address technical debt ahead of a potential release. The community is actively expanding integration capabilities, particularly in messaging channels and IPC (Inter-Process Communication).

### 2. Releases
*No new releases published in this period.*

### 3. Project Progress
**Significant features merged and fixes stabilized today:**

*   **Alternative Agent Runners:** The ecosystem for agent backends is diversifying.
    *   **Multi-instance support:** Merged [PR #1651](https://github.com/qwibitai/nanoclaw/pull/1651) introduces `AgentLite.createInstance()`, allowing multiple isolated NanoClaw instances with separate databases and channels to run simultaneously.
    *   **Security Hardening:** Merged [PR #1629](https://github.com/qwibitai/nanoclaw/pull/1629) addresses a critical security vector in `OneCLI` setups on public servers by closing exposed Docker ports (PostgreSQL/Gateway) that bypass UFW firewalls.
    *   **Authentication Simplification:** Merged [PR #1653](https://github.com/qwibitai/nanoclaw/pull/1653) removes complex OAuth passthrough in favor of direct Anthropic API key authentication, reducing ~400 lines of credential management code.
*   **Integrations & Channels:**
    *   **Telegram Forums:** Merged [PR #1656](https://github.com/qwibitai/nanoclaw/pull/1656) adds support for Telegram topic/thread handling, allowing the bot to interact specifically within forum threads.
    *   **Google Workspace:** Merged [PR #1654](https://github.com/qwibitai/nanoclaw/pull/1654) integrates the Google Workspace MCP server, enabling interaction with Gmail, Calendar, Drive, and Docs via a merged global `.mcp.json` configuration.
*   **System Refactoring:**
    *   **Group Types:** Merged [PR #1657](https://github.com/qwibitai/nanoclaw/pull/1657) refactors the boolean `isMain` property into a robust `GroupType` enum (`override`, `main`, `chat`, `thread`), allowing for more granular permission handling.
    *   **Deadlock Fix:** Merged [PR #1623](https://github.com/qwibitai/nanoclaw/pull/1623) resolves a 30-minute deadlock issue that occurred when piping messages to active containers.

### 4. Community Hot Topics
*High-interest proposals and active development areas:*

*   **Expanding Channel Ecosystem:** There is strong interest in making NanoClaw ubiquitous across all messaging platforms.
    *   **WhatsApp:** [PR #1661](https://github.com/qwibitai/nanoclaw/pull/1661) proposes a full WhatsApp integration using the `Baileys` library.
    *   **Sentry:** [PR #1662](https://github.com/qwibitai/nanoclaw/pull/1662) (and previously #1631) seeks to add Sentry IPC integration, likely for error tracking and stability monitoring.
*   **Alternative Compute Engines:** The community is pushing for flexibility beyond Anthropic's default SDK.
    *   **OpenCode SDK:** [PR #1628](https://github.com/qwibitai/nanoclaw/pull/1628) proposes adding OpenCode as an alternative backend, allowing per-group selection of the agent runner.
    *   *Note:* This parallels the older [PR #963](https://github.com/qwibitai/nanoclaw/pull/963) regarding OpenAI Codex support.
*   **Governance & Security Skills:**
    *   [Issue #1655](https://github.com/qwibitai/nanoclaw/issues/1655) proposes a `/add-governance` skill to generate Ed25519-signed receipts for every tool call (file edits, shell commands), addressing a need for cryptographic audit trails.

### 5. Bugs & Stability
*Reported issues requiring attention:*

*   **High Severity: Global Memory Broken:**
    *   [Issue #1642](https://github.com/qwibitai/nanoclaw/issues/1642): The main agent cannot read/write global memory due to incorrect mount points and documentation mismatches. *(Fix available in Merged PR #1644)*.
*   **Medium Severity: Container & Startup Failures:**
    *   [Issue #1659](https://github.com/qwibitai/nanoclaw/issues/1659): Container builds are failing on macOS Apple Containers due to the scanner reading host package files and incompatibility between Bun-bundled SDKs and esbuild.
    *   [Issue #1636](https://github.com/qwibitai/nanoclaw/issues/1636): Sequential channel connection blocks the entire startup if a single channel hangs.
*   **Low Severity: Portability & Sync:**
    *   [Issue #1641](https://github.com/qwibitai/nanoclaw/issues/1641): `build.sh` is not portable to NixOS due to a hardcoded bash shebang.
    *   [Issue #1639](https://github.com/qwibitai/nanoclaw/issues/1639): Agent-runner source synchronization misses changes if `index.ts` mtime isn't updated, ignoring other file modifications.

### 6. Feature Requests & Roadmap Signals
*Indicators of future functionality:*

*   **Credential Management:** [PR #1660](https://github.com/qwibitai/nanoclaw/pull/1660) adds "OneCLI credential mode detection," suggesting a roadmap toward smoother, automated authentication flows.
*   **Group-Local Skills:** With [PR #1509](https://github.com/qwibitai/nanoclaw/pull/1509) recently merged, the ability to define skills specific to groups (and override shared skills) is a newly available capability likely to be adopted heavily.
*   **Registry-based Tool Management:** [PR #1619](https://github.com/qwibitai/nanoclaw/pull/1619) replaced hardcoded tool allowlists with a configurable registry, signaling a shift toward more dynamic, config-driven agent behavior control.

### 7. User Feedback Summary
*Pain points and user experiences:*

*   **Infrastructure Fragility:** Users running on non-standard Linux distros (NixOS) or macOS (Apple Containers) are hitting "it doesn't work" issues due to assumptions about bash locations and file scanners ([Issue #1641](https://github.com/qwibitai/nanoclaw/issues/1641), [Issue #1659](https://github.com/qwibitai/nanoclaw/issues/1659)).
*   **Configuration Complexity:** The need for skills like `/add-governance` ([Issue #1655](https://github.com/qwibitai/nanoclaw/issues/1655)) suggests that enterprise or high-security users are demanding more verifiable control over agent actions.
*   **Connectivity Reliability:** The report regarding "sequential channel connection" blocking startup ([Issue #1636](https://github.com/qwibitai/nanoclaw/issues/1636)) indicates users are running NanoClaw in environments with unreliable network services, necessitating more robust connection logic.

### 8. Backlog Watch
*Older items still lingering or recently resurfaced:*

*   **Signal Support ([PR #1121](https://github.com/qwibitai/nanoclaw/pull/1121)):** Originally opened in March, this PR is still marked as "Needs Review" (or Blocked). With WhatsApp [PR #1661] now submitted, the pressure is on to standardize how non-standard messaging channels are integrated.
*   **S3 Storage ([PR #744](https://github.com/qwibitai/nanoclaw/pull/744)):** Opened in early March and still "Blocked." This suggests that storage abstraction for persistent memory remains a difficult architectural challenge to resolve.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-04-06

## 1. Today's Overview
NullClaw is experiencing a surge in development velocity, moving into a feature-heavy phase following the stabilization of the `v2026.4.4` release. The project demonstrated high operational efficiency today, closing 9 issues and merging 14 pull requests while simultaneously introducing significant architectural proposals. While the recent release focused on fixing integration bugs (Ollama, Cron), the active discussion is dominated by forward-looking features such as a REST Admin API, Knowledge Graph memory backends, and deterministic workflow engines.

## 2. Releases
**v2026.4.4** (Released)
*   **Agent Routing & Cron**: PR #666 wired up `session_target` routing for agent jobs, allowing more granular control over automated tasks.
*   **Ollama Fix**: PR #668 addressed a critical bug where Ollama providers would return empty chat responses by default.
*   **Migration Notes**: Users utilizing Ollama should update immediately to resolve response generation issues.

## 3. Project Progress
*   **Routing Fixes**: The Telegram channel bug (Issue #696), where the bot incorrectly identified as a subagent, was resolved in PR #705. The default agent fallback now correctly uses "main".
*   **Tooling Expansion**:
    *   A **Calculator tool** (PR #716) was merged, adding 20 mathematical operations to the agent's arsenal.
    *   The `file_append` tool (Issue #699) was wired into the runtime in PR #708.
*   **Provider & Channel Improvements**:
    *   **Lark**: Added reaction emoji support (PR #704).
    *   **Pushover**: Added support for reading credentials from process environment variables (PR #707).
    *   **Bifrost & Gemini**: Compatibility issues with the Bifrost gateway and Gemini CLI ACP handshake were fixed in PR #694 and PR #675.
*   **Logging & Diagnostics**: Heartbeat logging visibility was improved in PR #710 to resolve Issue #703.

## 4. Community Hot Topics
*   **[Proposal] Deterministic Workflow Engine** ([#778](https://github.com/nullclaw/nullclaw/issues/778))
    *   **Status**: Open
    *   **Discussion**: A request for a "Lobster-style" deterministic workflow implementation. This suggests the community is looking for ways to make agent behavior more predictable and less reliant on LLM chance, likely for automation-heavy use cases.
*   **REST Admin API (Phase 0-4)** ([#770](https://github.com/nullclaw/nullclaw/pull/770), [#771](https://github.com/nullclaw/nullclaw/pull/771))
    *   **Status**: Open (Draft/Proposal)
    *   **Discussion**: These PRs propose a comprehensive REST API for managing channels, skills, and configuration. This is a major signal that the userbase is moving toward "NullClaw as a Platform" rather than just a CLI tool, enabling external dashboards and mobile apps.
*   **Documentation Overhaul** ([#777](https://github.com/nullclaw/nullclaw/pull/777), [#776](https://github.com/nullclaw/nullclaw/pull/776))
    *   **Status**: Open
    *   **Discussion**: A massive effort to document undocumented subsystems (MCP, Subagents, Voice, Hardware). The high activity here indicates that previous documentation was insufficient for the complexity of the project.

## 5. Bugs & Stability
*   **[HIGH] Responses API Broken** ([#773](https://github.com/nullclaw/nullclaw/issues/773))
    *   **Description**: When `api_mode=responses`, the tool schema format is mismatched (nesting `function` inside `type`), causing failures with providers like Foxnio.
    *   **Fix**: A fix is available in draft PR #772.
*   **[MEDIUM] Telegram Duplicate Responses** ([#680](https://github.com/nullclaw/nullclaw/issues/680))
    *   **Description**: The Telegram channel was repeatedly displaying answers.
    *   **Status**: Fixed in PR #694 (merged).
*   **[MEDIUM] File Race Conditions** ([#684](https://github.com/nullclaw/nullclaw/issues/684))
    *   **Description**: `file_read` immediately after `file_write` on a new file resulted in "file not found" errors.
    *   **Status**: Fixed in PR #694 (merged).

## 6. Feature Requests & Roadmap Signals
*   **Knowledge Graph Memory**: PR #712 proposes a `KgMemory` backend using SQLite recursive CTEs. This is a strong signal users want more structured, persistent memory rather than simple vector stores.
*   **Cross-Memory Synchronization**: PR #711 introduces a "deterministic memory event stream" to sync memory across agent instances. This indicates a demand for multi-agent setups where agents share context (e.g., "Agent B knows what Agent A did").
*   **Custom Provider Parameters**: PR #709 adds support for `extra_body_params` and `session_id` (user) in API requests, allowing fine-tuned control for advanced users.

## 7. User Feedback Summary
*   **Pain Points**: Users struggled with **configuration opacity** (Issue #697 regarding `${VAR}` interpolation) and **subagent routing logic**, leading to confusing behaviors where channels identified as the wrong agent.
*   **Deployment**: There is a clear preference for containerized/GitOps deployments, as seen in requests for environment variable support (Issue #698) rather than `.env` file reliance.
*   **Documentation Gap**: The flurry of documentation PRs ( telagod's contributions) confirms that users found the previous docs lacking, specifically regarding MCP and Subagents.

## 8. Backlog Watch
*   **Integration Roadmap**: PR #777 moves `integration-roadmap.md` to the archive. Maintainers should consider updating or publishing a new roadmap, as the current one is marked stale ("In Progress" statuses on old PRs).
*   **REST API Stability**: While the REST Admin API (#770) is highly requested, it is still in Open status. Users waiting for remote management capabilities should monitor this PR closely.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-04-06

## 1. Today's Overview
IronClaw is experiencing a high-velocity development cycle with **45 Pull Requests updated** in the last 24 hours (29 open, 16 closed/merged), signaling active feature expansion and stabilization efforts. The project appears to be in a "testing and integration" phase, as the majority of closed PRs (#2039, #2041, #2036) focus on expanding E2E testing harnesses for Slack, Telegram, and general LLM interactions. While no new releases were published today, the high volume of `staging-promote` activity and merged dependency updates suggests a preparation for a future release. The issue tracker remains relatively quiet (5 updates), with maintenance resolving backend bugs (Anthropic gateway, workspace scoping) while the community discusses infrastructure expansion (Rust workflow shell, Kubernetes runtime).

## 2. Releases
**None released in the last 24 hours.**

## 3. Project Progress
**Merged & Closed Features:**
*   **Testing Infrastructure Expansion:** Significant work was done to solidify reliability.
    *   **Slack E2E Testing:** Closed PRs **[#2041](https://github.com/nearai/ironclaw/pull/2041)** and **[#2035](https://github.com/nearai/ironclaw/pull/2035)** added comprehensive regression and integration tests for the Slack WASM channel, utilizing a mock API server.
    *   **Telegram Resilience:** PR **[#2036](https://github.com/nearai/ironclaw/pull/2036)** expanded E2E coverage for Telegram, adding simulations for rate limits and download failures.
    *   **Dual-Mode Test Harness:** PR **[#2039](https://github.com/nearai/ironclaw/pull/2039)** introduced a `LiveTestHarness` allowing tests to run against live LLMs or replay saved traces for deterministic debugging.
*   **Dependency Management:** Closed PR **[#2035](https://github.com/nearai/ironclaw/pull/2035)** implemented Dependabot and pinned GitHub Actions by SHA to harden CI security.
*   **Stability Fixes:**
    *   PR **[#1867](https://github.com/nearai/ironclaw/pull/1867)** fixed a bug causing "self-repair notification spam" for stuck jobs by transitioning them to 'Failed' after max repair attempts.

## 4. Community Hot Topics
*   **Native Rust Workflow Shell:**
    *   **Issue:** **[#2045](https://github.com/nearai/ironclaw/issues/2045)** - *Feature Request: `ironclaw-lobster`*
    *   **Analysis:** Users want a Rust-native equivalent of OpenClaw's `lobster` (a workflow shell/pipeline runtime) integrated directly into IronClaw. This highlights a desire for deterministic, non-scraping pipeline workflows that the current Python-based or external tools may not efficiently provide.
*   **Kubernetes Runtime Support:**
    *   **Issue:** **[#2023](https://github.com/nearai/ironclaw/issues/2023)** - *Kubernetes runtime support for alternate to docker isolation*
    *   **Analysis:** There is strong operational demand to move away from Docker-centric isolation (Docker-in-Docker) to a Kubernetes-native runtime for serverless/non-desktop deployments.
*   **Production-Grade Coding Tools:**
    *   **PR:** **[#2025](https://github.com/nearai/ironclaw/pull/2025)** - *feat(tools): production-grade coding tools, file history, and skills*
    *   **Analysis:** This open PR is garnering attention for adding standard developer tools (`glob`, `grep`, `file_undo`) directly into the agent's workspace, addressing the need for more robust file manipulation capabilities.

## 5. Bugs & Stability
*   **CRITICAL: Anthropic API 404 Storm:**
    *   **Issue:** **[#1811](https://github.com/nearai/ironclaw/issues/1811)** (Closed) - *Gateway sends model: "default" to Anthropic API → 404 storm*
    *   **Severity:** High. A bug in `v0.23.0` sent the literal string "default" as the model name, generating hundreds of failed API calls and retries.
    *   **Status:** Closed today, implying a fix has been committed.
*   **FIX: Workspace Scoped-to-User Rebinding:**
    *   **Issue:** **[#1652](https://github.com/nearai/ironclaw/issues/1652)** (Closed) - *Add direct tests for Workspace scoped-to-user rebinding*
    *   **Severity:** Medium. Recent fixes to libsql prompt-scopes required specific regression tests to prevent user context bleeding.
*   **FIX: Agent Concurrency:**
    *   **PR:** **[#2031](https://github.com/nearai/ironclaw/pull/2031)** (Open) - *fix(agent,workspace): harden compaction consistency and append concurrency*
    *   **Severity:** High (marked as High Risk). Addresses potential race conditions in agent workspace compaction and append operations.

## 6. Feature Requests & Roadmap Signals
*   **AWS Bedrock Embeddings:** Added via closed **[#1501](https://github.com/nearai/ironclaw/issues/1501)**. Users can now use Bedrock for embeddings without separate OpenAI/Ollama keys.
*   **Structured Collections (Typed CRUD):** PR **[#1937](https://github.com/nearai/ironclaw/pull/1937)** proposes a "Typed Structured Storage" layer for agents to handle lists (e.g., "Add milk to grocery list") without corrupting markdown files or creating duplicates. This is a major signal toward improving agent state management.
*   **Routine Reviews:** PR **[#1738](https://github.com/nearai/ironclaw/pull/1738)** proposes injecting routine results back into the agentic loop for "Agent Review," allowing the LLM to process the success/failure of background tasks autonomously.

## 7. User Feedback Summary
*   **Pain Point:** Operational fragility in non-Docker environments (Kubernetes) is a major hurdle for long-running instances (**[#2023](https://github.com/nearai/ironclaw/issues/2023)**).
*   **Use Case:** Users are demanding better "Coding" capabilities. PR **[#2025](https://github.com/nearai/ironclaw/pull/2025)** explicitly addresses the need for agents to perform standard file operations (`grep`, `glob`, `undo`) reliably, suggesting current file manipulation tools are insufficient for complex tasks.
*   **Satisfaction:** Resolution of the "Anthropic 404 storm" (**[#1811](https://github.com/nearai/ironclaw/issues/1811)**) likely improved user satisfaction significantly regarding API stability and costs.

## 8. Backlog Watch
*   **Infrastructure debt:** Issue **[#2023](https://github.com/nearai/ironclaw/issues/2023)** (Kubernetes support) is currently open but unresolved. This is a high-value feature for enterprise deployment.
*   **Workflow complexity:** Issue **[#2045](https://github.com/nearai/ironclaw/issues/2045)** (Rust Workflow Shell) is very new and waiting for maintainer triage. It represents a significant architectural shift if accepted.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest - 2026-04-06

## 1. Today's Overview
LobsterAI is currently in a highly active development phase with zero releases deployed today but significant feature updates in the pipeline. The project demonstrates healthy iteration across automation, model reliability, and UI/UX improvements, with 6 pull requests opened in the last 24 hours aimed at refining core functionalities like scheduled tasks and system prompts. While feature development is robust, user-facing stability remains a concern, highlighted by an active issue regarding Ubuntu build failures and critical bugs in the task scheduler that have already been identified and patched in pending PRs. The community is engaged in testing local LLM capabilities (30B models), pushing the boundaries of the system's integration layer.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
*No PRs were merged today. The project is currently in an accumulation phase with the following features under review:*

*   **Scheduled Task Overhaul:** PR #1488 proposes a major UX/UI upgrade for the scheduled task module, shifting from a table layout to a card grid and introducing history grouping, search, and filtering.
*   **Agent Automation:** PR #1484 introduces a Gmail Watcher module to trigger agent sessions automatically via email polling, bringing parity with OpenClaw.
*   **Model Reliability:** PR #1483 adds automatic failover logic, allowing the system to switch to a backup model if the primary provider encounters rate limits or errors.
*   **UX Iteration:** PR #1486 adds a "Test Task" button to the creation form to streamline the debugging workflow.

## 4. Community Hot Topics
*   **Ubuntu Environment Stability (Issue #1418 - CLOSED):**
    *   *Link:* https://github.com/netease-youdao/LobsterAI/issues/1418
    *   *Topic:* Users reported that the official build process for Linux results in a white screen upon launching the installed `.deb` package.
    *   *Analysis:* Despite being marked closed, this indicates underlying fragility in the Linux packaging pipeline (Electron context).

*   **Scripting & Skills Integration (Issue #1487 - OPEN):**
    *   *Link:* https://github.com/netease-youdao/LobsterAI/issues/1487
    *   *Topic:* A user reported failures when invoking Python scripts during sessions, noting that the same skills work correctly in Claude Code CLI.
    *   *Analysis:* This highlights a need for better standardization in the local environment path handling or skill execution context within LobsterAI compared to other CLI tools.

## 5. Bugs & Stability
*   **CRITICAL: Scheduled Task Data Loss (PR #1482):**
    *   *Link:* https://github.com/netease-youdao/LobsterAI/pull/1482
    *   *Severity:* High.
    *   *Issue:* Editing a scheduled task forced the task to be enabled and completely cleared the description field.
    *   *Status:* Fix submitted (fixes hardcoded `description: ''` and `enabled: true` in `TaskForm.tsx`).

*   **Moderate: Skill Enforcement (PR #1485):**
    *   *Link:* https://github.com/netease-youdao/LobsterAI/pull/1485
    *   *Severity:* Moderate.
    *   *Issue:* Disabled skills were still being triggered in cowork chats because routing text was not stripped.
    *   *Status:* Fix submitted to enforce disabled skills via system prompts.

## 6. Feature Requests & Roadmap Signals
*   **Model Failover:** The submission of PR #1483 suggests strong demand for high-availability setups, indicating users are relying on LobsterAI for critical workflows where downtime is unacceptable.
*   **Email Automation:** PR #1484 (Gmail triggers) signals a roadmap shift towards deeper integration with external communication tools, moving the assistant from passive to active agent behaviors.

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing friction in "test-driven development" for tasks, requiring a cumbersome save -> list -> run flow (addressed in PR #1486). There is also evident frustration with environment discrepancies between LobsterAI and other CLIs (Issue #1487).
*   **Platform Health:** Linux users are facing significant deployment barriers (Issue #1418), which could hinder adoption in server/development environments.

## 8. Backlog Watch
*   **Issue #1418:** Although closed, the "white screen on Ubuntu" issue is a recurring theme in Electron apps. Maintainers should verify if the fix addressed the root cause (likely context path issues) or just the symptoms.
*   **PR #1482:** This patch fixes a regression in task editing. It should be prioritized for the next minor release to prevent user data loss.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

## Moltis Project Digest: 2026-04-06

### 1. Today's Overview
Moltis experienced a highly active development cycle on 2026-04-05, characterized by a massive clean-up of the backlog and significant feature expansions. All six issues updated in the last 24 hours were closed, correlating with the merge of eight pull requests that addressed user-reported bugs and introduced critical infrastructure improvements. The project released a new version (`20260405.06`), focusing heavily on provider reliability, vision support defaults, and transport-layer security. A major ongoing effort regarding Microsoft Teams integration remains the primary open pull request, signaling continued development in multi-channel support.

### 2. Releases
**Version: 20260405.06 (2026-04-05)**
This release incorporates a significant batch of stability and feature updates:
*   **Enhanced Infrastructure:** Added GitHub artifact attestations to the release workflow, ensuring SLSA v1.0 compliance and improved supply chain security ([PR #562](https://github.com/moltis-org/moltis/pull/562)).
*   **Networking:** Introduced application-level HTTP proxy support via the `upstream_proxy` configuration field in `moltis.toml` ([PR #561](https://github.com/moltis-org/moltis/pull/561)).
*   **Capabilities:** Implemented streamable HTTP MCP server support ([PR #555](https://github.com/moltis-org/moltis/pull/555)).

### 3. Project Progress
The project made substantial strides in fixing provider management and expanding platform capabilities:
*   **Provider UX & Reliability:** Merged several fixes addressing the provider onboarding flow. This includes allowing multi-model selection during setup ([PR #557](https://github.com/moltis-org/moltis/pull/557)) and ensuring models are re-discovered from API endpoints (e.g., `/v1/models`) before probing ([PR #560](https://github.com/moltis-org/moltis/pull/560)).
*   **Error Handling:** Improved diagnostics by changing how backend errors are mapped, ensuring specific probe failure messages reach the user instead of generic "Service unavailable" errors ([PR #559](https://github.com/moltis-org/moltis/pull/559)).
*   **Vision Capabilities:** Switched the logic for vision support from an allowlist to a denylist. Unknown models (like Mistral and Qwen) now default to supporting vision, preventing silent image stripping ([PR #558](https://github.com/moltis-org/moltis/pull/558)).
*   **New Channels:** Successfully integrated the Matrix channel ([PR #500](https://github.com/moltis-org/moltis/pull/500)).

### 4. Community Hot Topics
*   **Microsoft Teams Integration** ([PR #529](https://github.com/moltis-org/moltis/pull/529))
    *   **Status:** Open
    *   **Details:** This is currently the most significant open PR. It implements a comprehensive MS Teams channel with JWT verification, sophisticated retry logic, and webhook timeout handling.
*   **Proxy Support** ([Issue #548](https://github.com/moltis-org/moltis/issues/548))
    *   **Status:** Closed
    *   **Details:** Users requested application or channel-level proxy support. This was rapidly addressed in the latest release via `upstream_proxy`.

### 5. Bugs & Stability
The following bugs were reported and have **all been fixed** in the latest release:
*   **[High Severity] "Service unavailable" masking real errors** ([Issue #554](https://github.com/moltis-org/moltis/issues/554)): Users received generic errors when probing providers failed due to API key issues. Fixed in [PR #559](https://github.com/moltis-org/moltis/pull/559).
*   **[Medium Severity] Model Discovery Logic** ([Issue #551](https://github.com/moltis-org/moltis/issues/551)): "Detect all models" only probed known models rather than discovering new ones from the provider. Fixed in [PR #560](https://github.com/moltis-org/moltis/pull/560).
*   **[Medium Severity] Multi-Model Selection UX** ([Issue #552](https://github.com/moltis-org/moltis/issues/552)): Users were forced to select models one by one. Fixed in [PR #557](https://github.com/moltis-org/moltis/pull/557).
*   **[Low Severity] Vision Support Defaults** ([Issue #556](https://github.com/moltis-org/moltis/issues/556)): Images were silently stripped for Mistral and Qwen models. Fixed in [PR #558](https://github.com/moltis-org/moltis/pull/558).

### 6. Feature Requests & Roadmap Signals
*   **Streamable HTTP MCP:** Previously requested in [Issue #294](https://github.com/moltis-org/moltis/issues/294), this feature has now been implemented and merged ([PR #555](https://github.com/moltis-org/moltis/pull/555)), indicating the project is actively investing in the Model Context Protocol ecosystem.

### 7. User Feedback Summary
User feedback over the last 24 hours highlights a friction point in **provider configuration and validation**. Users struggled with the model discovery mechanism, finding that it did not actually "discover" models and that the interface forced single-model selection. Additionally, there was a clear need for better transparency in error reporting (probe failures) and broader support for vision capabilities across emerging open-weight models like Qwen. The rapid closure of these issues suggests the maintainers are highly responsive to UX friction.

### 8. Backlog Watch
While the immediate backlog was cleared efficiently, attention is now focused on:
*   **PR #529 (MS Teams):** This large feature branch remains open. While not "stale," it represents the next major milestone for the project and will require careful review before merge.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-04-06

## 1. Today's Overview
CoPaw is experiencing a **high-velocity development phase** characterized by significant community engagement but emerging growing pains regarding resource management. In the last 24 hours, the project tracked 39 updated issues (with 34 remaining active) and 8 pull requests. Activity remains intense, with **critical stability issues**—specifically regarding CPU leaks and process management—dominating the discussion. The codebase is actively evolving, with "hot reload" mechanisms and channel integrations (WhatsApp) being refined, while users demand better resource control and enterprise features.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
*   **WhatsApp Channel Integration**: Significant progress on connecting WhatsApp via the `neonize` library.
    *   **PR #2962** (Open): A clean implementation of the WhatsApp channel has been proposed to supersede previous attempts. [PR #2962](https://github.com/agentscope-ai/CoPaw/pull/2962)
*   **CLI & Windows Experience**: Quality-of-life fixes for initialization and shell command execution.
    *   **PR #2951** (Merged): Fixed a hang where `copaw init --defaults` would stall on the security warning prompt. [PR #2951](https://github.com/agentscope-ai/CoPaw/pull/2951)
    *   **PR #2950** (Open): Addresses the disruptive CMD console popup issue when executing shell commands on Windows. [PR #2950](https://github.com/agentscope-ai/CoPaw/pull/2950)
*   **Token Handling**: A fix for `CopawTokenCounter` handling list content from providers like Anthropic was closed (**PR #2070**).

## 4. Community Hot Topics
*   **High CPU Usage (Hot Loop)**: The most discussed technical issue is a busy loop in the event loop causing 100% CPU usage on a single core while idle.
    *   **Issue #2888** (8 comments): Users report high power consumption due to `AnyIO` cancellation handling. [Issue #2888](https://github.com/agentscope-ai/CoPaw/issues/2888)
*   **Platform-Specific UI Glitches**:
    *   **Issue #2231** (7 comments): The microphone button remains disabled in the Console UI on macOS despite backend readiness. [Issue #2231](https://github.com/agentscope-ai/CoPaw/issues/2231)
*   **Initialization & Security**:
    *   **Issue #2943** (4 comments): The `copaw init` command hangs indefinitely on the security warning prompt on Windows/Python 3.13. [Issue #2943](https://github.com/agentscope-ai/CoPaw/issues/2943)

## 5. Bugs & Stability
*   **[CRITICAL] Resource Leaks**:
    *   **Issue #2960**: MCP clients are not cleaned up during hot reloads, causing persistent CPU spikes. [Issue #2960](https://github.com/agentscope-ai/CoPaw/issues/2960)
    *   **Issue #2934**: The `browser_use` tool leaks Chromium processes as old instances are not closed when new ones open, nor are they timed out. [Issue #2934](https://github.com/agentscope-ai/CoPaw/issues/2934)
    *   **Issue #2959**: `ToolResultCompactor` enters an infinite loop when launched via system autostart. [Issue #2959](https://github.com/agentscope-ai/CoPaw/issues/2959)
*   **[HIGH] Agent Looping & Compatibility**:
    *   **Issue #2947**: Google `gemma-4` models are trapped in infinite tool calling loops. [Issue #2947](https://github.com/agentscope-ai/CoPaw/issues/2947)
    *   **Issue #2911**: The Windows client closes itself after several hours of runtime. [Issue #2911](https://github.com/agentscope-ai/CoPaw/issues/2911)
*   **[MEDIUM] Security & Logic Flaws**:
    *   **Issue #2967**: Agents can bypass File Guard protections by falling back to `execute_shell_command` when file tools are blocked. [Issue #2967](https://github.com/agentscope-ai/CoPaw/issues/2967)
    *   **Issue #2930**: Configurations for providers are reset/replaced after restart on Windows. [Issue #2930](https://github.com/agentscope-ai/CoPaw/issues/2930)
*   **Fix Available**: Issue #2943 (Init hang) has a fix in PR #2951.

## 6. Feature Requests & Roadmap Signals
*   **UX / Configuration Management**:
    *   **Issue #2763** (👍 2): Users want CLI commands like `/models` and `/model <provider>-<model>` to switch contexts without touching the backend. [Issue #2763](https://github.com/agentscope-ai/CoPaw/issues/2763)
*   **Advanced Capabilities**:
    *   **Issue #2969**: Request for a native Personal Knowledge Base feature to combine with execution capabilities. [Issue #2969](https://github.com/agentscope-ai/CoPaw/issues/2969)
    *   **Issue #2961**: Request for "Skill Folders" to categorize and bulk-select skills for agents. [Issue #2961](https://github.com/agentscope-ai/CoPaw/issues/2961)
*   **Visual Customization**:
    *   **Issue #2966**: Request for custom global font support. [Issue #2966](https://github.com/agentscope-ai/CoPaw/issues/2966)

## 7. User Feedback Summary
*   **Pain Points**: Users are increasingly frustrated by **resource inefficiency**. Reports of high CPU usage (Issue #2888), process leakage (Issue #2934), and random crashes (Issue #2911) suggest the "Agent Manager" or "Event Loop" needs optimization for long-running tasks.
*   **Model Usage**: There is strong demand for broader model support and better tool-calling logic, specifically failures with newer models like Gemma 4 (Issue #2947) and requests for Qwen3 support (Issue #2598).
*   **UI Polish**: While features are plentiful, polish is lacking. Users report broken spellcheck on Windows (Issue #2970), disabled buttons (Issue #2231), and excessive "thinking process" noise in the chat logs (Issue #2972).

## 8. Backlog Watch
*   **Issue #2907**: A call to review **PR #2448** (MiniMax OAuth) which is blocking further development. [Issue #2907](https://github.com/agentscope-ai/CoPaw/issues/2907)
*   **Issue #2926**: Users are asking how to inspect LLM API requests/logs, indicating a need for better debugging/observability tools. [Issue #2926](https://github.com/agentscope-ai/CoPaw/issues/2926)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

Here is the project digest for **EasyClaw** based on the GitHub data provided for **2026-04-06**.

***

# 📅 EasyClaw Project Digest — 2026-04-06

### 1. Today's Overview
Project activity remains **stable but minimal** for the current cycle. There has been no reported issue activity in the last 24 hours, and no new releases were published. However, development continues on the internationalization front, with one Pull Request updated yesterday to expand language support. The project currently shows no active bug reports or stability concerns in the tracker, suggesting a period of code consolidation rather than active bug hunting.

### 2. Releases
*No new releases published in this period.*

### 3. Project Progress
While no Pull Requests were merged in the last 24 hours, significant progress is evident in the active development branch.
*   **Active Development:** The project is advancing its multilingual capabilities, with PR #21 updated recently to include translations for five new major languages.

### 4. Community Hot Topics
The primary focus of community and development efforts is currently on accessibility and localization.
*   **[feat(i18n): add 5 new languages](https://github.com/gaoyangz77/rivonclaw/pull/21)** (Open)
    *   **Status:** Updated 2026-04-05.
    *   **Details:** This PR proposes adding Traditional Chinese (zh-TW), Japanese (ja), Korean (ko), Vietnamese (vi), and Hindi (hi). It involves adding 5 new translation files covering 1,333 keys each.
    *   **Analysis:** The underlying need here is global adoption. By covering these specific languages (covering East Asia, South Asia, and Southeast Asia), the maintainers are signaling a push to make EasyClaw accessible to a non-English speaking user base, likely in preparation for a wider rollout.

### 5. Bugs & Stability
*   **Severity:** N/A
*   **Status:** No bugs, crashes, or regressions have been reported in the last 24 hours. The project appears to be in a stable state regarding existing releases.

### 6. Feature Requests & Roadmap Signals
Based on the active Pull Request #21, the next version of EasyClaw is likely to include:
*   **Enhanced i18n Support:** Official support for Japanese, Korean, Vietnamese, Hindi, and Traditional Chinese.
*   **Architecture Updates:** Updates to the i18n index.ts file to handle imports for a total of 7 languages, indicating a more robust localization framework is being put in place.

### 7. User Feedback Summary
*   **Sentiment:** Neutral.
*   **Pain Points:** None reported today.
*   **Satisfaction:** With zero open issues and active development on features rather than bug fixes, current user satisfaction is implied to be high.

### 8. Backlog Watch
*   **No Critical Backlog:** There are currently no long-unanswered issues or PRs reported in the data. The active PR #21 is recent and being actively updated (last update: 2026-04-05).

***

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*