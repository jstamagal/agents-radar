# OpenClaw Ecosystem Digest 2026-03-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-29 00:11 UTC

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

# OpenClaw Project Digest: 2026-03-29

## 1. Today's Overview
OpenClaw is experiencing a period of **extremely high development velocity**, with 1,000 activities (500 issues and 500 PRs) logged in the last 24 hours. The project appears to be in a critical stabilization phase following recent breaking changes and a beta release. The community is actively troubleshooting regressions introduced in versions `2026.3.23` through `2026.3.28`, specifically concerning embedded agent authentication, Discord gateway stability, and plugin compatibility. While feature development (e.g., Linux companion app, parallel orchestration) continues, the majority of current activity is focused on fixing critical crashes and security hardening.

## 2. Releases
**v2026.3.28-beta.1**
*   **Breaking Changes:**
    *   **Providers/Qwen:** Removed deprecated `qwen-portal-auth` OAuth for `portal.qwen.ai`. Users must migrate to Model Studio using `openclaw onboard --auth-choice modelstudio-api-key` (#52709).
    *   **Config/Doctor:** Dropped automatic config migrations for older setups.
*   **Migration Note:** Users relying on Qwen OAuth must re-authenticate immediately to maintain service.

## 3. Project Progress
*   **Authentication Fix:** PR #55909 and #55898 were merged to restore API key functionality for custom providers and OAuth-authenticated services, fixing a critical regression where the `pi-coding-agent` 0.63.0 update stripped auth headers.
*   **Windows Support:** PR #56285 implements `buildSafeShellCommand` for PowerShell, enabling the execution approval allowlist on Windows (fixing #50403).
*   **Sub-Agent Orchestration:** PR #56673 proposes a new `sessions_await` tool to allow orchestrator agents to reliably wait for parallel sub-agent tasks to complete, addressing a gap in multi-agent workflows.
*   **Security Hardening:** PR #50181 (Open) addresses media trust bypasses, ensuring external plugins cannot exfiltrate local files by inheriting trusted `MEDIA:` paths.

## 4. Community Hot Topics
*   **[#75 - Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (58 comments, 👍 66)
    *   *Topic:* Request for native Linux and Windows desktop apps similar to the macOS version.
    *   *Status:* PR #56005 is now open, implementing a native gateway client for Linux.
*   **[#23538 - Anthropic Auth Returns 401](https://github.com/openclaw/openclaw/issues/23538)** (25 comments)
    *   *Topic:* `setup-token` authentication for Anthropic fails at runtime despite successful onboarding.
    *   *Status:* Isolated profile repro provided; likely related to the recent auth regression fixes.
*   **[#13688 - Discord WebSocket Disconnects](https://github.com/openclaw/openclaw/issues/13688)** (19 comments, 👍 2)
    *   *Topic:* Gateway becomes unresponsive due to unbounded exponential backoff on Discord resume failures.
    *   *Impact:* High downtime for Discord users.
*   **[#49971 - Agent Identity & Trust Verification (RFC)](https://github.com/openclaw/openclaw/issues/49971)** (16 comments)
    *   *Topic:* Proposal for native cryptographic identity and trust verification for agents (ERC-8004/W3C DID).
    *   *Signal:* Strong community interest in "Agent Authenticity" as the ecosystem grows.

## 5. Bugs & Stability
*   **CRITICAL REGRESSION (Discord):** Gateway crash loop (v2026.3.24) triggered by the health-monitor attempting to restart stale sockets.
    *   *Issues:* [#54931](https://github.com/openclaw/openclaw/issues/54931), [#54729](https://github.com/openclaw/openclaw/issues/54729).
*   **CRITICAL REGRESSION (Auth):** "No API key for provider" errors affecting all embedded agents after `pi-coding-agent` bump.
    *   *Fix:* Merged in PRs #55909, #55867.
*   **CRITICAL (Discord):** Elevated authorization `allowFrom` fallback is broken, preventing documented security configs from working.
    *   *Fix PR:* [#53259](https://github.com/openclaw/openclaw/pull/53259).
*   **HIGH (Matrix Plugin):** Media sending/receiving fails (`__dirname not defined`); E2EE broken due to missing WASM file ([#53353](https://github.com/openclaw/openclaw/issues/53353)).
*   **HIGH (Mistral Provider):** All requests fail with HTTP 422 due to OpenAI-compatibility adapter sending rejected parameters ([#47079](https://github.com/openclaw/openclaw/issues/47079)).
    *   *Fix PR:* [#56667](https://github.com/openclaw/openclaw/pull/56667).
*   **MEDIUM (Tool Execution):** Tools (exec, MCP, web search) fail silently; agent claims to execute but nothing happens ([#40069](https://github.com/openclaw/openclaw/issues/40069)).

## 6. Feature Requests & Roadmap Signals
*   **Native Linux Support:** High demand via Issue #75. PR #56005 (Native Gateway Client) indicates this is actively being developed for the next release.
*   **Memory v2:** User "brianthinks" (running on RPi5) suggests "Associative Traversal" and "Salience Weighting" ([#28930](https://github.com/openclaw/openclaw/issues/28930)), signaling a need for better long-term memory management in persistent agents.
*   **Baidu Web Search:** Request to add Baidu as a provider for better zh-CN retrieval ([#56304](https://github.com/openclaw/openclaw/issues/56304)).
*   **Config Editing:** PR #56401 proposes adding a CodeMirror 6 JSON editor to the Web UI for safer raw config editing.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Frustration with Regressions:** Users are reporting that previously working features (Auth, Mistral, Matrix media, Discord stability) are breaking in recent updates ("worked before, now fails").
    *   **Platform Inconsistency:** Linux and Windows users feel neglected compared to macOS (e.g., `brew` commands failing in Docker, missing apps).
    *   **Silent Failures:** Users are distressed by "Silent" failures where tools appear to execute but do nothing ([#40069](https://github.com/openclaw/openclaw/issues/40069)), or where configs are silently ignored ([#29387](https://github.com/openclaw/openclaw/issues/29387)).
*   **Satisfaction:**
    *   Users appreciate the rapid response to critical Auth bugs (fixes merged within 24h).
    *   The "Doctor" command is helpful, though it has false positives (e.g., Ollama memory).

## 8. Backlog Watch
*   **Stale Discord Issues:** Several issues from Feb 2026 ([#29214](https://github.com/openclaw/openclaw/issues/29214) Signal group chats, [#29129](https://github.com/openclaw/openclaw/issues/29129) Session Spawn thinking parameter) remain open but marked "stale". These affect core chat usability.
*   **Token Usage Display:** Issue #43987 reports `session_status` shows 0 tokens despite active conversations, hindering cost monitoring.
*   **Web Fetch SSRF:** Issue #48080 notes that fake-ip ranges used by VPN software (Clash/Surge) are blocked by SSRF guards, preventing web access for users in restricted regions.

---

## Cross-Ecosystem Comparison

# Cross-Project Analysis: Personal AI Agent Ecosystem (2026-03-29)

## 1. Ecosystem Overview
The open-source AI agent ecosystem is currently undergoing a **massive expansion and stabilization phase**, shifting from simple chatbots to complex, multi-platform orchestration layers. Development velocity is exceptionally high across the board, with most major projects releasing significant updates or hotfixes daily. A clear divide is forming between **general-purpose frameworks** (like OpenClaw and IronClaw) focusing on extensibility and provider support, and **specialized deployments** (like LobsterAI, NanoClaw) focusing on localized UX and specific platform integrations (e.g., WeChat/Feishu). The industry is collectively grappling with "growing pains" associated with **memory management**, **silent failure modes**, and **platform-specific regressions** (Discord, Telegram, Matrix) as complexity increases.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Trend | Primary Focus |
| :--- | :---: | :---: | :--- | :---: | :--- |
| **OpenClaw** | 500 | 500 | v2026.3.28-beta.1 | 🟡 **Recovering** | Stabilization, Auth, Security |
| **NanoBot** | 21 | 38 | v0.1.4.post6 (unstable) | 🟠 **Bugfix** | Messaging stability, Provider migration |
| **ZeroClaw** | 50 | 50 | No release | 🟢 **Refactoring** | Security wrappers, Configuration |
| **PicoClaw** | 38 | 89 | v0.2.4-nightly | 🟢 **High Velocity** | Multi-platform (OpenWrt), Agent Refactor |
| **NanoClaw** | 0 (New) | 32 | No release | 🟠 **Security Debt** | Infrastructure, Dashboard, Skills |
| **NullClaw** | 3 | 8 | No release | 🟢 **Iterating** | Windows UX, Interactive Model Picker |
| **IronClaw** | 9 | 50 | No release | 🟠 **Review Bottleneck** | v2 Architecture, Frontend Modularity |
| **LobsterAI** | Active | 12 | **v2026.3.29** | 🟢 **Release Cycle** | UX Refinement, OpenClaw Integration |
| **TinyClaw** | 0 (Closed) | 0 (Closed) | No release | 🟢 **Debt Cleaned** | Installation hardening, Web UI |
| **Moltis** | 8 | 13 | **4 patches in 24h** | 🟢 **Rapid Fix** | Provider timeouts, Matrix support |
| **CoPaw** | 39 | 24 | v0.2.0 / post1 | 🟠 **Instability** | Provider ecosystem, Resource leaks |
| **ZeptoClaw** | 1 | 2 | No release | 🟡 **Stabilizing** | Token overflow, Telegram reliability |
| **EasyClaw** | 2 (Open) | 0 | v1.7.8 | 🔴 **Regression** | Multi-model compatibility |

## 3. OpenClaw's Position
**OpenClaw** remains the **dominant force** in terms of raw scale, community contribution (1,000 activities/day), and feature breadth. It serves as the "reference implementation" for the ecosystem.
*   **Advantages:** Unmatched provider coverage, rapid community response to critical bugs, and deep integration of advanced features (Agent Identity RFC, Sub-agent orchestration).
*   **Technical Approach:** OpenClaw is prioritizing **security hardening** (Media Trust Bypasses, Auth isolation) and **cross-platform parity** (Linux/Windows apps) over pure feature velocity.
*   **Community Size:** Significantly larger than peers, evidenced by the volume of discourse (66+ upvotes on Linux apps vs. single-digit activity in smaller forks).
*   **Differentiation:** Unlike forks focusing on niche UIs, OpenClaw is defining the standards for multi-agent workflows and "Agent Authenticity."

## 4. Shared Technical Focus Areas
Across 13 projects, distinct patterns of technical challenges and requirements are emerging:

*   **Memory Management & Context Overflow:**
    *   *Projects:* **OpenClaw**, **ZeroClaw**, **ZeptoClaw**, **Moltis**, **NanoBot**.
    *   *Signal:* Shift from simple history windows to sophisticated strategies. ZeroClaw is fighting "recursive snowball" effects; ZeptoClaw is building "multi-layered defense"; OpenClaw users are proposing "Associative Traversal."
*   **Platform Integration Instability (Discord/Telegram/Matrix):**
    *   *Projects:* **OpenClaw**, **IronClaw**, **PicoClaw**, **NanoClaw**, **NullClaw**, **ZeptoClaw**.
    *   *Signal:* WebSocket reliability, Markdown rendering, and E2EE (Matrix) are the biggest sources of user friction. **OpenClaw** and **IronClaw** are both seeing critical Discord gateway regressions.
*   **Silent Failures & Observability:**
    *   *Projects:* **OpenClaw**, **NanoBot**, **ZeptoClaw**, **TinyClaw**.
    *   *Signal:* Users are anxious when agents "think" without output. There is a unified demand for "Live Task Lists," streaming tool execution, and stricter error handling.
*   **Configuration Complexity:**
    *   *Projects:* **ZeroClaw**, **PicoClaw**, **LobsterAI**, **CoPaw**.
    *   *Signal:* Users demand "Hot Reload" (ZeroClaw), safer editors (PicoClaw), and "One-click" setup (LobsterAI). Managing API keys and providers remains a major barrier to entry.

## 5. Differentiation Analysis
Projects are diverging based on target audiences and architectural philosophy:

*   **The "Frameworks" (General Purpose):**
    *   **OpenClaw:** The "Heavy Lifter." Best for complex multi-agent workflows and power users.
    *   **IronClaw:** The "Architect." Focusing on WASM, Modularity, and Rust-based v2 rewrites. Less stable today, future-focused.
    *   **NanoBot:** The "Connector." Heavy emphasis on supporting *every* chat platform (Signal, iMessage, Teams).
*   **The "Experience" Layers:**
    *   **LobsterAI:** The "Consumerizer." Focuses on refining the interaction (Cmd+K palettes, streaming sync) and bundling OpenClaw for ease of use.
    *   **TinyClaw:** The "IT Admin." Focuses on Docker stability, installation scripts, and "TinyOffice" web UI management.
*   **The "Specialists":**
    *   **PicoClaw:** The "Edge Router." Unique focus on OpenWrt/Router deployment and Termux/Android support.
    *   **Moltis:** The "Builder." Focuses on development environment features (SSH runtime, skill portability).

## 6. Community Momentum & Maturity
*   **Tier 1 (Hyper-Growth / High Friction):** **OpenClaw**, **IronClaw**, **CoPaw**.
    *   Massive feature velocity but struggling with "stability debt." (e.g., OpenClaw's Auth regressions, CoPaw's CPU pegging).
*   **Tier 2 (Rapid Iteration / Responsive):** **NanoBot**, **ZeroClaw**, **PicoClaw**, **Moltis**.
    *   Healthy balance. Issues are raised and fixed quickly (e.g., Moltis releasing 4 patches in 24 hours).
*   **Tier 3 (Stabilizing / Polishing):** **TinyClaw**, **LobsterAI**.
    *   Moving away from experimental features toward UX polish (Cmd+K, web dashboards) and installation hardening.
*   **Tier 4 (Niche / Stalled):** **EasyClaw**.
    *   Currently facing significant regression issues without visible active development.

## 7. Trend Signals
For AI developers and strategists, the community activity indicates several key industry trends:

1.  **"Agent Authenticity" is the new Security Boundary:**
    *   OpenClaw's **RFC #49971** (Agent Identity & Trust Verification) and ZeroClaw's **HMAC Tool Execution Receipts** signal a shift toward **cryptographic proof of agent actions**. Trust is moving from "trust the LLM" to "verify the execution."
2.  **Local-First & Private Network Access:**
    *   There is a massive backlash against default SSRF (Server-Side Request Forgery) protections that block local LAN IPs. **IronClaw** and **ZeroClaw** are both adding `ALLOW_LOCAL_NETWORK` flags. Users want agents to control their **Home Assistant** and **Ollama** instances locally, not just in the cloud.
3.  **Standardization of "Model Context Protocol" (MCP):**
    *   **NanoClaw** and **LobsterAI** are actively building bridges to load external MCP servers. This is rapidly becoming the standard for how agents connect to external data/tools (Notion, Google Workspace).
4.  **The "Silent Agent" Anxiety:**
    *   Users will not tolerate "black box" processing. Features like **TinyClaw's** streaming tool execution and **ZeptoClaw's** "silent failure" fixes indicate that **observability** is now a core requirement, not a debug feature.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-29

## 1. Today's Overview
NanoBot is exhibiting **very high development velocity** with 21 issues and 38 pull requests updated in the last 24 hours. The project appears to be in an active iteration phase on the `nightly` branch, focusing heavily on **messaging platform stability** (Telegram, Matrix, WhatsApp) and **core agent logic** (heartbeat, memory, and tool execution). While the sheer volume of activity suggests a healthy ecosystem, there is a noticeable cluster of user-reported regressions related to version `v0.1.4.post6`, particularly concerning Telegram rendering and provider authentication (GitHub Copilot, MiniMax).

## 2. Releases
*No new releases published in the last 24 hours.*
*Note: A significant number of issues reference `v0.1.4.post6`, indicating it is the current unstable/nightly build users are testing.*

## 3. Project Progress
**Key Development Movements (Merged/Closed & Active Development):**

*   **Core Logic & Reliability:**
    *   **Agent Loop Repairs:** A fix for empty final responses was merged ([PR #2580](https://github.com/HKUDS/nanobot/pull/2580)), preventing agents from falling back to a generic "I have no response" error when tool execution completes but text generation is missed.
    *   **Heartbeat Refactoring:** Movement toward making the heartbeat agent stateless and silent by default ([PR #1443](https://github.com/HKUDS/nanobot/pull/1443)) to prevent spamming users with non-actionable status updates.
    *   **Memory Architecture:** A major architectural proposal for a pluggable memory framework ([PR #2515](https://github.com/HKUDS/nanobot/pull/2515)) is under discussion, aiming to support multi-backend memory (Mem0, Graphiti, etc.).

*   **Platform Integrations:**
    *   **Microsoft Teams:** A new, clean implementation for MS Teams integration was pushed ([PR #2600](https://github.com/HKUDS/nanobot/pull/2600)), superseding an earlier attempt.
    *   **iMessage:** A new proposal for iMessage integration via Photon was introduced ([PR #2539](https://github.com/HKUDS/nanobot/pull/2539)).
    *   **WhatsApp & Matrix:** Continued work on WhatsApp media support ([PR #2010](https://github.com/HKUDS/nanobot/pull/2010)) and Matrix E2EE authentication fixes ([PR #2596](https://github.com/HKUDS/nanobot/pull/2596)).

## 4. Community Hot Topics
*   **Criteria for Search Providers** ([Issue #2572](https://github.com/HKUDS/nanobot/issues/2572))
    *   **Discussion:** With 5 providers already supported (Brave, Tavily, etc.), the community is debating standards for accepting new search provider PRs to avoid code bloat.
    *   **Underlying Need:** Maintaining code quality and manageability while expanding ecosystem capabilities.

*   **Subagents Configuration** ([Issue #2599](https://github.com/HKUDS/nanobot/issues/2599))
    *   **Discussion:** Users are struggling to find official documentation or examples on how to configure and invoke subagents.
    *   **Underlying Need:** Better documentation and examples for advanced agent orchestration features.

*   **Native WhatsApp Voice Support** ([Issue #2152](https://github.com/HKUDS/nanobot/issues/2152))
    *   **Discussion:** A user has built a Fish Audio integration for STT/TTS but has to patch the bridge manually after every update.
    *   **Underlying Need:** Requests for official voice modality support or an easier plug-in mechanism for custom audio handlers.

## 5. Bugs & Stability
**Critical & High-Severities Issues Reported:**

*   **[CRITICAL] GitHub Copilot Login Failure** ([Issue #2573](https://github.com/HKUDS/nanobot/issues/2573))
    *   **Symptom:** `Authorization header is badly formatted` error during login.
    *   **Context:** Suspected regression introduced after replacing litellm with openai.
    *   **Fix Status:** Open.

*   **[HIGH] Agent Loop Failures (Empty Content)** ([Issue #2576](https://github.com/HKUDS/nanobot/issues/2576))
    *   **Symptom:** Agent terminates abruptly with a generic English fallback string if the LLM returns empty content after tool use (e.g., web search).
    *   **Impact:** Breaks workflow reliability in production environments.
    *   **Fix Status:** Partially addressed in [PR #2580](https://github.com/HKUDS/nanobot/pull/2580) (repair logic).

*   **[HIGH] Telegram Markdown Rendering Regression** ([Issue #2568](https://github.com/HKUDS/nanobot/issues/2568))
    *   **Symptom:** Markdown renders unreliably (sometimes works, sometimes fails) in `v0.1.4.post6`.
    *   **Impact:** Degraded user experience on Telegram.

*   **[MEDIUM] MiniMax Provider & Ollama Cloud 404s** ([Issue #2590](https://github.com/HKUDS/nanobot/issues/2590), [Issue #2570](https://github.com/HKUDS/nanobot/issues/2570))
    *   **Symptom:** Built-in MiniMax provider failing; Ollama integration throwing 404s or not listening on correct ports.

*   **Patches Submitted:**
    *   **Kimi Thinking Mode:** Fix for `missing reasoning_content` error ([PR #2598](https://github.com/HKUDS/nanobot/pull/2598)).
    *   **Session Manager:** Fix for off-by-one error in `_find_legal_start` ([PR #2597](https://github.com/HKUDS/nanobot/pull/2597)).

## 6. Feature Requests & Roadmap Signals
*   **Cron Jobs for Shell Commands:** Request to allow `cron` to execute system commands directly without triggering an agent LLM call ([Issue #2309](https://github.com/HKUDS/nanobot/issues/2309)). *Probability: High (Closed, likely accepted).*
*   **Fallback Model Logic:** Users want fallback models to trigger on `ServiceUnavailableError` (503), not just generic errors ([Issue #1121](https://github.com/HKUDS/nanobot/issues/1121)).
*   **Home Assistant Integration:** User reports inability to control Home Assistant via Nanobot compared to other clients ([Issue #2588](https://github.com/HKUDS/nanobot/issues/2588)).

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing "update fatigue" regarding manual patching for features not yet in core (e.g., WhatsApp voice). The migration from `litellm` to a custom OpenAI-compatible layer has caused friction with legacy providers like GitHub Copilot and MiniMax.
*   **Platform UX:** Telegram users are reporting "flaky" behavior in the latest nightly build, specifically regarding streaming responses and message length limits ([Issue #2559](https://github.com/HKUDS/nanobot/issues/2559)).

## 8. Backlog Watch
*   **Matrix Auth Issue** ([Issue #1681](https://github.com/HKUDS/nanobot/issues/1681)): Open since March 7, regarding Olm/Megolm event decryption failures. A fix PR ([#2596](https://github.com/HKUDS/nanobot/pull/2596)) was just posted today.
*   **Fallback Model Reliability** ([Issue #1121](https://github.com/HKUDS/nanobot/issues/1121)): Open since Feb 24, critical for high-availability agents but still unresolved.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Project Digest: ZeroClaw (2026-03-29)

## 1. Today's Overview
ZeroClaw is experiencing a period of extremely high activity and rapid iteration. In the last 24 hours, the project matched its open issue count with 50 new or updated issues and saw equal engagement with 50 PRs updated (split evenly between open and merged/closed). The day was defined by a major **"Spring Cleaning" refactoring effort** led by contributor `yijunyu`, which systematically applied `RateLimitedTool` and `PathGuardedTool` wrappers across the codebase to standardize security and rate limiting. Concurrently, critical bug fixes for memory recursion and provider configuration were pushed to address stability blockers reported by the community.

## 2. Releases
*   **No new releases** published in the last 24 hours.

## 3. Project Progress
*   **Tooling Refactor (Security & Performance):**
    *   **PRs #4949, #4948, #4947, #4944:** A massive refactoring initiative successfully removed inline security checks (rate limiting, path guards) from individual tools (`CronAddTool`, `PdfReadTool`, `FileReadTool`, etc.) and applied composable wrapper patterns (`RateLimitedTool`, `PathGuardedTool`). This improves code maintainability and ensures consistent security enforcement across all file and search operations.
*   **Configuration & Channels:**
    *   **PR #4937 (Merged):** Fixed a long-standing configuration discrepancy. The code now accepts `[channels.xxx]` as the primary TOML key, treating the previous `[channels_config.xxx]` as an alias. This aligns the code with the documentation, resolving a major source of user friction during onboarding.
    *   **PR #4527 (Merged):** Added `Calendar` variant triggers and a `CalendarPoller`, enabling calendar-driven SOP activation and no-show detection.
*   **Memory Management:**
    *   **PR #4936 (Open):** Addresses a critical memory recursion bug (#4916) where auto-save functionality was creating a "recursive snowball" effect by re-saving `[Memory context]` blobs, leading to memory exhaustion.

## 4. Community Hot Topics
*   **Matrix Channel Friction Tracker:**
    *   [Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) - *9 comments*.
    *   **Analysis:** This umbrella issue highlights that the Matrix integration remains a pain point despite heavy usage. Users are tracking specific friction items like "E2EE OTK retry loops," indicating that while the bot works, encrypted rooms are unstable.
*   **Open-Codex Provider & "Missing Docs":**
    *   [Issue #4863](https://github.com/zeroclaw-labs/zeroclaw/issues/4863) - *4 comments*.
    *   **Analysis:** Users are struggling to configure specific providers (OpenAI Codex) due to missing documentation. This reflects a gap between the available features and the discoverability for end-users.
*   **Agent Chat Sending Multiple Messages:**
    *   [Issue #3513](https://github.com/zeroclaw-labs/zeroclaw/issues/3513) - *4 comments*.
    *   **Analysis:** A persistent annoyance where the agent fragments its response into multiple messages instead of a single consolidated reply. Users expect a coherent chat experience, not fragmented bursts.

## 5. Bugs & Stability
*   **[S1 - Critical] Recursive Memory Snowball:**
    *   [Issue #4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916) | [Fix PR #4936](https://github.com/zeroclaw-labs/zeroclaw/pull/4936)
    *   The `auto_save` feature was saving memory recall results back into the database, causing exponential memory growth and exhausting RAM. A fix is currently in PR.
*   **[S1 - Critical] Missing Dependency (`rumqttc`):**
    *   [Issue #4946](https://github.com/zeroclaw-labs/zeroclaw/issues/4946)
    *   Version `v0.6.66` is broken for MQTT users due to a missing import dependency in the source, preventing compilation.
*   **[S1 - Workflow Blocked] History Pruner Breaking Anthropic:**
    *   [Issue #4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810)
    *   The history pruner severs `tool_use`/`tool_result` pairs, causing 400 errors with Anthropic models.
*   **[S2 - Degraded] Dashboard JS Error:**
    *   [Issue #4918](https://github.com/zeroclaw-labs/zeroclaw/issues/4918)
    *   The web dashboard is throwing "Cannot read properties of undefined (reading 'slice')" errors, breaking session management in the UI.

## 6. Feature Requests & Roadmap Signals
*   **HMAC Tool Execution Receipts:**
    *   [Issue #4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) | [PR #4943](https://github.com/zeroclaw-labs/zeroclaw/pull/4943)
    *   **Signal:** Strong interest in verifiable AI. Users want cryptographic proof (HMAC-SHA256) that tools actually executed, rather than trusting the LLM's claim. This moves ZeroClaw towards "high-trust" automation.
*   **Private Network Access (SSRF Bypass):**
    *   [Issue #4868](https://github.com/zeroclaw-labs/zeroclaw/issues/4868) | [PR #4945](https://github.com/zeroclaw-labs/zeroclaw/pull/4945)
    *   **Signal:** Users want to use ZeroClaw for home automation and local dev, but the default security blocks private IPs. The roadmap is shifting toward explicit `allowed_private_hosts` configuration to enable local use-cases safely.
*   **CLI Secret Management:**
    *   [PR #4920](https://github.com/zeroclaw-labs/zeroclaw/pull/4920)
    *   **Signal:** Request for a `zeroclaw secret` CLI command to manage encrypted config values, improving the UX for handling API keys.

## 7. User Feedback Summary
*   **Configuration Pain:** The most common feedback theme is "missing docs" or "config ignored." Users are confused by `channels_config` vs `channels` (now fixed) and struggle with custom provider streams (e.g., `stream=true`).
*   **Memory Anxiety:** Users are reporting significant issues with memory management, from the critical "recursive snowball" bug to requests for Markdown cleanup. This suggests stability concerns in long-running agents.
*   **Platform Friction:** Matrix, Discord, and MQTT users all reported integration bugs today (images treated as text, MQTT configs ignored), indicating that the multi-channel architecture is undergoing growing pains as new features are added.

## 8. Backlog Watch
*   **[Critical] Raspberry Pi Deployment Guide:**
    *   [Issue #4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) - *3 👍*.
    *   Users want to run ZeroClaw on low-end hardware (Pi 5) but face Out-Of-Memory (OOM) errors during compilation because of the default `lto = "fat"` profile. This needs a custom build guide/profile adjustment.
*   **Local-First Config Reloading:**
    *   [Issue #3569](https://github.com/zeroclaw-labs/zeroclaw/issues/3569) - *1 👍*.
    *   Users are frustrated that editing `config.toml` requires a daemon restart, which wipes conversation history. A `hot-reload` feature is highly requested.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Project Digest: PicoClaw (2026-03-29)

## 1. Today's Overview
PicoClaw is experiencing a **high-velocity development cycle** with robust community engagement. In the last 24 hours, the project processed significant activity: **89 Pull Requests** and **38 Issues** were updated, with a healthy merge rate (54 closed PRs vs. 35 open). The release of the `v0.2.4-nightly` build indicates active iteration on the `main` branch, likely preparing for a stable release. The project appears stable despite the heavy throughput, with critical infrastructure (configuration, providers, and channels) receiving targeted fixes. There is a strong focus on **multi-platform support** (OpenWrt, Windows, Termux) and **security hardening** in this iteration.

## 2. Releases
*   **Version:** `v0.2.4-nightly.20260328` (Build `60d7ec20`)
    *   **Status:** Automated unstable build.
    *   **Highlights:** This nightly build incorporates the latest changes from the main branch, including recent security patches for `exec` tools and configuration persistence fixes.
    *   **Changelog:** [View Full Comparison](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)
    *   **Note:** Users are advised to use caution due to the unstable nature of nightly builds.

## 3. Project Progress
*   **Agent Refactoring (Phase 2):** Substantial progress on the internal agent architecture continues.
    *   **PR #1940:** Restored the "team" coordination tool and integrated it with the new **SubTurn** mechanism, a core component of the Phase 2 refactor for multi-agent collaboration.
    *   **PR #1814:** Fixed subagent dispatching to use per-agent providers rather than a global provider, ensuring isolated execution contexts.
*   **Platform Ecosystem Expansion:**
    *   **PR #2130 (Merged):** Added a **LuCI web management interface**, enabling PicoClaw to be managed natively on **OpenWrt** routers.
    *   **PR #2051:** Improved build system detection for Windows environments (MinGW/MSYS), fixing `.exe` generation.
*   **Tooling & Security:**
    *   **PR #2116:** Added a `load_image` tool to process local vision files (JPEG/PNG) within the MediaStore pipeline.
    *   **PR #2128:** Fixed JSON Schema validation for tools to comply with strict OpenAI-compatible APIs (e.g., LM Studio).
*   **Configuration Management:**
    *   **PR #2024:** Fixed critical regressions in the web UI where channel secrets (Discord, Telegram, QQ) were not persisting correctly.
    *   **PR #2132:** Implemented support for model-specific `max_tokens` configuration.

## 4. Community Hot Topics
*   **Multi-Agent Visibility (Issue #2137):**
    *   **[Feature Request]** Users are requesting "Live Task Lists" via message edits/reactions.
    *   **Underlying Need:** Silence during complex multi-step agent tasks causes user anxiety. Users want real-time visibility into agent progress without waiting for a final dump.
    *   **Link:** [sipeed/picoclaw#2137](https://github.com/sipeed/picoclaw/issues/2137)
*   **Tool Execution Security (Issue #2107):**
    *   **[Bug]** Users reporting "Command blocked by safety guard" errors despite having permissions configured.
    *   **Underlying Need:** The "restrict to workspace" logic (symlinks) or the safety guard implementation is overly aggressive or confusingly configured, blocking valid workflows.
    *   **Link:** [sipeed/picoclaw#2107](https://github.com/sipeed/picoclaw/issues/2107)
*   **Configuration Loss (Issue #1941):**
    *   **[Bug]** Critical report of `Picoclaw Config` being wiped.
    *   **Underlying Need:** Data integrity and persistence are top concerns; any regression causing config loss is a major trust breaker.
    *   **Link:** [sipeed/picoclaw#1941](https://github.com/sipeed/picoclaw/issues/1941)
*   **Windows QQ Channel (Issue #2080):**
    *   **[Bug]** QQ channel failing on Windows despite successful token retrieval.
    *   **Underlying Need:** PicoClaw users on Windows require feature parity with Linux users for popular Chinese messaging platforms.
    *   **Link:** [sipeed/picoclaw#2080](https://github.com/sipeed/picoclaw/issues/2080)

## 5. Bugs & Stability
*   **High Severity - Config Wipe (#1941):** Users experiencing complete configuration loss. (Status: Updated recently, likely under investigation).
*   **High Severity - Tool Call Extraction (#2136):** A flaw in `pkg/providers/tool_call_extract.go` causes significant extraction issues. The user notes a PR exists but is stalled due to merge conflicts.
*   **Medium Severity - Idle CPU Usage (#2001):** Report of v0.2.4 consuming high CPU on FreeBSD when idle.
*   **Medium Severity - Gateway Startup (#2105):** New installations failing to start the gateway without a PID.
*   **Fixes Deployed:**
    *   **Symlink Security:** Fixed `exec` tool following symlinks outside workspace (Issue #1526 -> PR Closed).
    *   **Secret Persistence:** Fixed Discord/Telegram/QQ token saves in Web UI (PR #2024).
    *   **Weixin Context:** Fixed context token loss on restart (PR #2124).

## 6. Feature Requests & Roadmap Signals
*   **SiliconFlow Provider (Issue #2045):** Community requesting support for the SiliconFlow platform (Model prefix: `pro`).
*   **Feishu File Organization (Issue #2030):** Request to refactor Feishu file downloads into a human-readable directory structure (`{year}/{month}/{filename}`) rather than hashes.
*   **OpenWrt Adaptation (Issue #1132):** Strong community interest in running PicoClaw on routers. (Addressed today by PR #2130).
*   **Live Task Progress (Issue #2137):** As noted in Hot Topics, users want ephemeral status updates during long tasks.
*   **Security Shield (PR #2138):** A new PR proposes adding a "Security Shield" feature inspired by external Agent Shield tools.

## 7. User Feedback Summary
*   **Pain Points:** Configuration remains the biggest friction point. Users struggle with "wiped configs," difficulty setting up local models (Ollama), and lack of "Restart Required" indicators for deep config changes.
*   **Platform Diversity:** There is active usage on non-standard platforms: **FreeBSD**, **OpenWrt**, **Termux (Android)**, and **Windows**. Bugs on these platforms (e.g., QQ on Windows, Feishu on Termux) are highly visible.
*   **Positive Signals:** The rapid closure of issues and high PR velocity suggests maintainers are highly responsive to breaking bugs.

## 8. Backlog Watch
*   **OpenWrt Support:** Historically a long-requested feature (Issue #1132), which has now seen a massive breakthrough with the LuCI interface PR (#2130).
*   **Stable Gateway Identity (Issue #1476):** A request for persistent device identity/trust for orchestration layers remains open since March 13.
*   **Strict OpenAI Compatibility (PR #1460):** A PR fixing tool call serialization for strict providers is still open and undergoing updates, indicating ongoing difficulty in standardizing provider interactions.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the **NanoClaw Project Digest** for March 29, 2026.

### 1. Today's Overview
NanoClaw is experiencing a **surge of high-velocity development** despite the lack of a formal release today. The project remains highly active with 32 Pull Requests updated in the last 24 hours (22 open), signaling intense feature expansion, particularly in communication channels (Discord, WhatsApp, local PWA) and observability (Web Dashboard). However, operational friction is evident; the community is managing technical debt related to upstream synchronization (254 commits behind) and security patches, while simultaneously grappling with infrastructure stability issues like invalid SSL certificates. While the volume of merged PRs (10) indicates healthy code review velocity, the backlog of open infrastructure issues suggests a need for focused stabilization efforts.

### 2. Releases
*No new releases published today.*

### 3. Project Progress
The following features and fixes were advanced or merged today:

*   **Infrastructure Hardening:**
    *   **Merged:** PR #1523 (Apple Container networking) and PR #1115 (Self-heal stale sessions) address critical stability issues for Docker environments, specifically fixing networking detection on Apple VMs and file permission errors for non-root containers.
*   **Local Communication:**
    *   **Merged:** PR #1521 adds a "local-chat" channel, enabling a self-hosted PWA frontend for browser-based interaction with the agent, removing the need for external accounts.
*   **Agent Workflow:**
    *   **Merged:** PR #1508 resolves a resource leak where review agent containers were not being closed after draft approvals, reducing memory waste.

### 4. Community Hot Topics
*Top discussions driven by engagement and architectural implications:*

*   **Upstream Synchronization Crisis (Issue #1512)**
    *   **Status:** Closed (Actionable)
    *   **Summary:** The project is currently **254 commits behind upstream**. Discussion highlights the urgent need to cherry-pick 5 specific security fixes, including a command injection vulnerability in `stopContainer`.
    *   **Link:** [Issue #1512](https://github.com/qwibitai/nanoclaw/issues/1512)
*   **Architectural Shift: OneCLI Agent Vault (Issue #1511)**
    *   **Status:** Closed (Evaluated)
    *   **Summary:** Evaluation of upstream changes where `credential-proxy.ts` is being replaced by `@onecli-sh/sdk`. This represents a major architectural shift for credential management that the community must eventually adopt.
    *   **Link:** [Issue #1511](https://github.com/qwibitai/nanoclaw/issues/1511)

### 5. Bugs & Stability
*Ranked by severity and impact:*

1.  **[CRITICAL] Invalid SSL Certificate (Issue #1503)**
    *   **Summary:** The primary domain `nanoclaw.dev` is currently serving an invalid SSL certificate, blocking user access and likely affecting webhook integrations.
    *   **Status:** Open
    *   **Link:** [Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503)
2.  **[HIGH] Task Scheduler Duplication (PR #1519)**
    *   **Summary:** Reports indicate that the task scheduler may execute recurring tasks multiple times if tasks run slowly (>60s). A fix is currently in the works to pre-advance `next_run` timestamps.
    *   **Status:** Fix Open (PR #1519)
    *   **Link:** [PR #1519](https://github.com/qwibitai/nanoclaw/pull/1519)
3.  **[MEDIUM] Media Handling Silently Failing (Issue #1522, PR #1507)**
    *   **Summary:** WhatsApp media (photos/voice) and Telegram media are inaccessible to agents (either receiving only a media ID or a text placeholder). PR #1507 attempts to fix this for Telegram by downloading binaries.
    *   **Status:** Open
    *   **Link:** [Issue #1522](https://github.com/qwibitai/nanoclaw/issues/1522) | [PR #1507](https://github.com/qwibitai/nanoclaw/pull/1507)

### 6. Feature Requests & Roadmap Signals
*Emerging capabilities likely to appear in upcoming versions based on PR activity:*

*   **Native Web Dashboard:** PR #1514 and #1524 propose a comprehensive web dashboard (port 3333) to visualize Notion connections, service status, and message volume.
*   **Discord Channel:** PR #1517 introduces a full Discord integration with support for image attachments and multimodal processing.
*   **NanoClaw-to-NanoClaw Messaging:** PR #1516 outlines a "peer" channel for direct instance-to-instance communication without a broker.
*   **MCP Server Federation:** PR #1515 allows agents to load external MCP servers (Home Assistant, Google Workspace) via a group-level `.mcp.json` config.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Media Handling:** Users are frustrated that photos and voice notes are not processed by agents (Issues #1522, #1507).
    *   **Security Paranoia:** There is high demand for better credential isolation (Issue #1500), specifically requesting proxying of Gmail/Calendar tokens to prevent prompt injection attacks from reading sensitive files.
    *   **Platform Support:** Requests for Signal (PR #1121) and improved Apple Container networking (PR #1523) indicate a diverse deployment environment.
*   **Satisfaction:** Users are actively contributing complex skills (LazyLibrarian, Music-gen proxy), indicating high satisfaction with the extensibility of the "skills-as-repos" architecture.

### 8. Backlog Watch
*Items requiring maintainer attention:*

*   **Security Debt (Issue #1512):** The 254-commit lag behind upstream NanoClaw includes unmerged security patches.
*   **OAuth Migration (PR #1520):** A complex migration path is proposed for moving Google credentials into the OneCLI vault, which needs architectural sign-off before merging.
*   **Signal Support (PR #1121):** A long-standing PR (opened March 16, updated today) adding Signal support is still pending review.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-03-29

## 1. Today's Overview
NullClaw is currently in a highly active development phase, showing strong engagement with 8 Pull Requests updated in the last 24 hours alongside 3 new Issues. The project appears to be undergoing significant user experience (UX) refinement, particularly around model selection, plugin extensibility, and cross-platform stability. While there are no new releases published today, the volume of open PRs suggests an upcoming release cycle focused on polishing the onboarding process and addressing Windows-specific regressions. The community is actively contributing enhancements, evidenced by a high volume of feature-focused PRs from core contributors.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
*Note: No PRs were marked as merged or closed in the last 24 hours; however, significant development work is in progress.*

**Key Features in Development:**
*   **Interactive Model Selection:** PR #727 proposes an interactive `/model` picker for Telegram, Discord, Slack, and Lark, allowing users to visually navigate providers and models.
*   **Enhanced Skill Discovery:** PR #735 aims to support installing skills directly via HTTPS URLs using `.well-known` discovery, moving beyond just git repositories.
*   **Windows UX Improvements:** PR #738 proposes packaging Windows binaries as `.zip` archives to resolve executable naming issues, while PR #742 addresses a critical WebSocket disconnect regression on Windows.
*   **Inbound Debouncing:** PR #676 implements a debounce mechanism for incoming text across channels to handle rapid-fire messages more gracefully.

## 4. Community Hot Topics
The most active community discussion revolves around expanding platform integration capabilities.

*   **[Issue #714] Support WeChat Plugin Integration** ([#714](https://github.com/nullclaw/nullclaw/issues/714))
    *   **Activity:** 7 comments since March 25th.
    *   **Analysis:** There is strong user demand for WeChat integration, driven by the existence of a new official plugin and adoption by competing forks. Users are eager for native support within the main NullClaw repository to leverage the massive WeChat user base in Asia.

## 5. Bugs & Stability
Two specific bugs affecting the Windows ecosystem were reported today, with fixes already submitted for review.

*   **High Severity (Windows):** **[Issue #739] Web channel WebSocket disconnects immediately with code 1006** ([#739](https://github.com/nullclaw/nullclaw/issues/739))
    *   **Impact:** Critical for Windows users running the web gateway locally; connection drops immediately.
    *   **Status:** Fix submitted in **[PR #742](https://github.com/nullclaw/nullclaw/pull/742)** (currently open).
*   **Medium Severity (Tooling/UX):** **[Issue #737] `eget` downloads Windows binary with platform suffix** ([#737](https://github.com/nullclaw/nullclaw/issues/737))
    *   **Impact:** Low severity but high annoyance; users must manually rename the downloaded executable (`nullclaw-windows-x86_64.exe`) to use it as a standard CLI tool.
    *   **Status:** Improvement submitted in **[PR #738](https://github.com/nullclaw/nullclaw/pull/738)** (currently open).

## 6. Feature Requests & Roadmap Signals
Based on the open Pull Requests and Issues, the following features are likely prioritized for the next version:

*   **Web-Origin Skill Installation:** The addition of URL-based skill discovery (PR #735) indicates a push to make NullClaw skills as easy to install as browser extensions.
*   **Plugin Architecture Documentation:** PR #736 highlights a move to standardize how plugins handle asynchronous login flows, suggesting future improvements in startup stability for external channels.
*   **Inbound Message Handling:** The addition of debouncing (PR #676) signals an intent to improve reliability when the agent is flooded with messages (e.g., pasted text or rapid user inputs).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Windows Usability:** Users are facing friction with the "out-of-the-box" experience on Windows, ranging from complex executable names to broken WebSocket connections.
    *   **Onboarding Limitations:** Feedback suggests the current model onboarding process is restrictive (capped lists) and lacks interactivity.
*   **Desires:**
    *   **Integration:** Users are requesting official support for the WeChat plugin to keep the ecosystem unified.
    *   **Convenience:** Users prefer simpler installation methods (web links for skills) and clearer interactive setup for model providers.

## 8. Backlog Watch
*   **[Issue #714] Support WeChat Plugin Integration:** Although recently opened and active, this requires maintainer architectural decisions to integrate the official plugin. It is currently the oldest open issue in the "Latest Issues" list and needs attention to prevent user fragmentation toward forks.
*   **[PR #676] feat(inbound): debounce...:** Opened since March 21st. This PR addresses a UX complaint (#618) regarding rapid message handling and is awaiting merge to stabilize the agent's text input processing.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# IronClaw Project Digest — 2026-03-29

## 1. Today's Overview
IronClaw is experiencing a period of extremely high development velocity, with **50 Pull Requests** updated in the last 24 hours compared to only **9 Issues**. The project appears to be deep in a "refactor and consolidation" phase, focusing on the v2 architecture (Unified Thread-Capability-CodeAct engine) and modularity (frontend extraction). While feature work is rampant, **stability and security** are prominent themes; multiple PRs address safety gaps (credential leaking, sensitive file access), and a "Staging CI" bot is actively auto-generating issues for security vulnerabilities. The backlog of open PRs (37) is growing, suggesting a review bottleneck or a massive coordinated release sprint.

## 2. Latest Releases
**No new releases** were published in the last 24 hours. The current activity consists of ongoing development branches and staging promotions.

## 3. Project Progress
*No PRs were fully merged or closed in the last 24 hours based on the provided data.* However, significant progress is evident in open PRs approaching completion:
*   **Security Hardening:** PR #1713 (unified sensitive path protection) and PR #1719 (sanitize internal error details) are in review, addressing critical security gaps identified by the CI bot.
*   **Frontend Modularity:** PR #1725 has successfully extracted the gateway frontend into a dedicated `ironclaw_frontend` crate, introducing a widget system for UI customization.
*   **Discord Support:** PR #944 is finalizing the Discord Gateway flow in WASM, moving away from polling to websockets for better performance.

## 4. Community Hot Topics
*   **Telegram Bot Reliability (Issue #1676):**
    *   **Status:** Open | 👍 0 | Comments: 10
    *   **[Link](https://github.com/nearai/ironclaw/issues/1676)**
    *   **Analysis:** A user reports that the Telegram bot integration is non-functional due to HTTP tool errors ("http tool routine has error"). The user contrasts this unfavorably with "OpenClaw," indicating frustration with regression in IronClaw. The high comment count suggests a back-and-forth debugging attempt.

*   **LLM Local Network Support (PR #1696):**
    *   **Status:** Open | 👍 0
    *   **[Link](https://github.com/nearai/ironclaw/pull/1696)**
    *   **Analysis:** This PR addresses a major usability pain point for self-hosters. Previous SSRF (Server-Side Request Forgery) protections blocked users from connecting to local LLMs (like Ollama or vLLM running on LAN IPs). The addition of `LLM_ALLOW_LOCAL_NETWORK` is a highly demanded feature for local/homelab enthusiasts.

*   **Feishu/Lark Integration Broken (Issue #1673):**
    *   **Status:** Open | 👍 1
    *   **[Link](https://github.com/nearai/ironclaw/issues/1673)**
    *   **Analysis:** Users are unable to pair Feishu/Lark channels as the system is stuck in an "Awaiting Pairing" state without issuing a code. This highlights potential fragility in the OAuth/channel pairing logic for non-standard platforms.

## 5. Bugs & Stability
*   **[HIGH] Database Error Leakage (Issue #1702):**
    *   **[Link](https://github.com/nearai/ironclaw/issues/1702)**
    *   **Fix:** PR #1719 is open to address this.
    *   **Details:** The API is returning raw database exception messages to the client, potentially leaking internal structure and sensitive data.
*   **[MEDIUM] WASM Tool Schema Mismatch (Issue #1303):**
    *   **[Link](https://github.com/nearai/ironclaw/issues/1303)**
    *   **Details:** WASM tools that export specific schemas are being presented to the LLM as generic permissive `{}` schemas, causing tool usage failures (e.g., Brave web-search missing required query parameters).
*   **[MEDIUM] Legacy OAuth Validation (Issue #1443):**
    *   **[Link](https://github.com/nearai/ironclaw/issues/1443)**
    *   **Details:** Auto-detected by CI, indicating legacy OAuth state validation is too loose.

## 6. Feature Requests & Roadmap Signals
*   **Hot-Reload for Configuration (Issue #1119 & #1350):** There is a clear push for unifying configuration sources and enabling hot-reloads. Currently, changing the LLM provider requires a process restart (#1350), which is a poor UX.
*   **Evaluation Metrics Upgrade (Issue #1731):** A request to replace `pass_rate` with `pass@k` metrics to better judge performance on tasks judged by LLMs.
*   **Workspace Versioning (PR #1723):** Introduction of document versioning and patching in the workspace, signaling a move toward more robust file management and rollback capabilities.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Instability:** "OpenClaw knows how to do this perfect from day 1 but ironclaw still fails..." — Users perceive IronClaw as less stable than its predecessor regarding integrations (Telegram).
    *   **Security vs. Usability:** Users are hitting walls with security features (SSRF blocks preventing LAN access), though PR #1696 indicates the team is responding quickly.
*   **Satisfaction:** High engagement with the CI process suggests the team is taking security seriously, but the volume of open issues (and lack of merged PRs today) implies a "heavy lifting" phase where features may be temporarily fragile.

## 8. Backlog Watch
*   **Unified Engine (PR #1557):** This massive PR (7,275 lines of Rust) proposes the "Unified Thread-Capability-CodeAct execution engine (v2 architecture)." It remains open and is the single most significant technical debt item blocking future consistency.
*   **Slack Socket Mode (PR #1549):** A long-standing request for improved Slack connectivity (WebSocket vs. polling) is still in progress.
*   **Routine Reliability (PR #1650):** A major overhaul for `full_job` execution reliability was closed recently, but PR #1723 indicates further work is needed on metadata-driven indexing and hygiene, suggesting the system is still evolving rapidly.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the **LobsterAI Project Digest** for **March 29, 2026**.

### 1. Today's Overview
LobsterAI is experiencing a **high-velocity development cycle** with significant focus on stabilizing the OpenClaw integration and refining user experience (UX). The project merged 12 Pull Requests today, addressing critical stability issues such as infinite restart loops and configuration persistence, while also introducing usability enhancements like the "Cmd+K" command palette. However, the community has highlighted major regressions regarding configuration overwrites and synchronization issues, indicating that while core functionality is expanding, system reliability remains a sensitive area.

### 2. Releases
**Version: 2026.3.29**
The latest release focuses on interaction refinement and log stability.
*   **[Feature]** `AskUserQuestion` plugin: Added delete confirmation popups and structured user interactions (`#942`).
*   **[Refactor]** Message navigation has been redesigned into a "mini-track" style (`#988`).
*   **[Fix]** Resolved log export hanging issues and "reply was never sent" errors.

### 3. Project Progress
The following features and fixes have been advanced or merged today:

*   **Infrastructure & Stability (Merged):**
    *   **[PR #894]** Fixed the critical "Model Name Loss" (`#858`) and "Gateway Infinite Restart Loop" (`#859`). This resolves a schema validation failure that caused the Gateway to crash continuously and ensures user-defined model names are preserved.
    *   **[PR #992 & #993]** Patched the Gateway to prevent crashes during scheduled task execution (cron jobs), specifically handling cases where the `message` tool was invoked without a delivery channel.
    *   **[PR #1002]** Removed `McpBridgeServer` secret authentication to mitigate 401 errors caused by secret mismatches after app restarts.
*   **Platform Integration (Merged):**
    *   **[PR #984]** Migrated the "Xiaomifeng" (netease-bee) platform from a standalone Gateway class to a standard OpenClaw plugin, unifying the runtime architecture with other platforms (QQ, WeCom, Weixin).
*   **UX & Internationalization (Open/Active):**
    *   **[PR #999]** Introduction of a `Cmd+K` command palette for quick actions.
    *   **[PR #991]** Added i18n support for preset agent names and descriptions.
    *   **[PR #998]** New floating toolbar for selected text (Copy, Explain, Translate).

### 4. Community Hot Topics
The community is actively discussing configuration management and integration stability.

*   **[#1006 - Configuration Persistence (High Impact)](https://github.com/netease-youdao/LobsterAI/issues/1006)**
    *   **Status:** Open
    *   **Topic:** User configurations (e.g., `openclaw.json`, `AGENTS.md`) are overwritten by default templates upon every restart.
    *   **Underlying Need:** Users require a robust configuration management system that distinguishes between system defaults and user customizations, preventing data loss during updates.
*   **[#986 - WeChat Reply Sync (UX)](https://github.com/netease-youdao/LobsterAI/issues/986)**
    *   **Status:** Open
    *   **Topic:** WeChat bot responses are buffered and sent in a batch, causing a poor user experience (long wait followed by a flood of messages).
    *   **Underlying Need:** Users expect real-time streaming synchronization for chat interfaces.

### 5. Bugs & Stability
**Severity Ranking: High**

*   **[#858 & #859 - Model Name Loss & Gateway Loops](https://github.com/netease-youdao/LobsterAI/issues/858)**
    *   **Status:** Fixed in PR #894 (Merged today).
    *   **Details:** Custom model names were wiped, and invalid configs triggered infinite Gateway restarts. **Verdict: Fixed.**
*   **[#1003 - Notion MCP Integration Failure](https://github.com/netease-youdao/LobsterAI/issues/1003)**
    *   **Status:** Open.
    *   **Details:** The MCP Bridge fails to pass environment variables (Tokens) to the `notion-mcp-server`, resulting in 401 Unauthorized errors.
    *   **Fix Status:** A related PR (#1004) attempts to fix MCP, but this specific issue remains open.

### 6. Feature Requests & Roadmap Signals
*   **Text Selection Actions ([#998](https://github.com/netease-youdao/LobsterAI/pull/998)):** Strong signal for productivity enhancement. Users want to act on specific text segments (explain/translate) without leaving the context.
*   **MCP Transport Expansion ([#1001](https://github.com/netease-youdao/LobsterAI/pull/1001)):** A hotfix PR adds support for SSE and streaming HTTP transports for the MCP (Model Context Protocol), indicating a push towards more flexible server communication.
*   **Unified Command Interface ([#999](https://github.com/netease-youdao/LobsterAI/pull/999)):** The addition of the command palette suggests the project is moving towards power-user features to manage increasing complexity.

### 7. User Feedback Summary
*   **Pain Points:** The most significant frustration stems from **configuration volatility**. Users report that the application is too aggressive in resetting settings (`#1005`, `#1006`), forcing them to use workarounds like timed tasks to restore their preferences.
*   **Satisfaction:** Positive reception for UI refinements (Message navigation, AskUserQuestion improvements) and the removal of friction points like mandatory MCP secrets (`#1002`).
*   **Integrations:** While the migration of platforms to OpenClaw is good for architecture, it introduces friction (e.g., the Notion MCP token issue).

### 8. Backlog Watch
*   **[#986 WeChat Streaming](https://github.com/netease-youdao/LobsterAI/issues/986):** This issue, while opened recently, touches on a core UX expectation for chatbots. It currently lacks a linked fix PR.
*   **[#1003 Notion MCP](https://github.com/netease-youdao/LobsterAI/issues/1003):** Requires immediate maintainer review to inspect the `child_process.spawn` environment variable handling in the Bridge code.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-29

## 1. Today's Overview
TinyClaw has experienced a massive "catch-up" surge in maintenance and feature stabilization. While no new code was written today (0 open issues/PRs updated), the maintainers closed a significant backlog of 15 Pull Requests and 7 Issues. This indicates a strong effort to clear technical debt and stabilize the codebase, likely preparing for a future release cycle. The project appears highly active with a focus on **operational stability**, **installation hardening**, and **feature completion** for the TinyOffice web portal.

## 2. Releases
**No new releases published today.**
Despite the high volume of merged PRs—including breaking changes to Docker configurations and rebranding updates (migrating `tinyclaw` to `tinyagi`)—no new release tag has been cut yet. Users installing from source are getting these updates, but stable release users are waiting.

## 3. Project Progress
Significant features were finalized and bugs squashed in today's cleanup sweep:

*   **TinyOffice Maturity:** The web portal ("TinyOffice") received several upgrades, including a refined control panel (Services/Providers merged) and improved status indicators for agent sessions.
*   **Installation Overhaul:** The installation process has been rewritten to prefer a `curl | bash` one-liner method. Crucially, a migration script was added to handle the transition from `~/.tinyclaw` to `~/.tinyagi`, preserving user data during the rebrand.
*   **Docker Stability:** Several fixes addressed Docker-specific issues, specifically moving persistent data to the correct user home directory and fixing permission issues that prevented the Codex CLI from reading authentication files.
*   **Streaming Support:** Real-time tool activity streaming to Telegram was fully merged, allowing users to see agent actions (like "Running npm test") live instead of waiting for the final result.

## 4. Community Hot Topics
*   **TinyOffice User Experience (UX)**
    *   *Issue [#193](https://github.com/TinyAGI/tinyclaw/issues/193)* - "TinyOffice: add first-run web onboarding."
        *   **Status:** Closed (Resolved).
        *   **Insight:** There is a strong desire to move away from CLI configuration. Users want a purely graphical setup experience. The closure of this issue suggests that a web-based onboarding flow has been implemented or accepted into the roadmap.
    *   *Issue [#194](https://github.com/TinyAGI/tinyclaw/issues/194)* - "TinyOffice: add runtime control panel."
        *   **Status:** Closed (Resolved).
        *   **Insight:** Users required the ability to control the daemon (start/stop/restart) directly from the web UI rather than relying on terminal commands. This functionality appears to have been delivered (related to PR #268).

## 5. Bugs & Stability
*   **High Severity: Process Management**
    *   *Issue:* Stuck agent processes holding messages indefinitely.
    *   *Fix:* PR [#218](https://github.com/TinyAGI/tinyclaw/pull/218) merged a "kill switch" that terminates agent processes after a 5-minute timeout, preventing queue jams.
*   **Medium Severity: Telegram Connectivity**
    *   *Issue:* Auto-reconnect failures and WSL2 timeout errors (ETIMEDOUT).
    *   *Fix:* PR [#113](https://github.com/TinyAGI/tinyclaw/pull/113) and related fixes improved the robustness of the Telegram client connection handling.
*   **Medium Severity: Docker Data Loss**
    *   *Issue:* AI CLI auth keys were stored outside the mounted volume, causing config loss on restart.
    *   *Fix:* PR [#265](https://github.com/TinyAGI/tinyclaw/pull/265) moved persistent data to `/home/tinyagi` to ensure configs survive container restarts.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Agent & Provider Support:**
    *   Users successfully pushed for support for non-Anthropic models. PR [#168](https://github.com/TinyAGI/tinyclaw/pull/168) added support for **Kimi2.5** and **Minimax2.5**, indicating the project is evolving beyond just "Claude-in-a-box" to a generalist AI agent framework.
*   **Plugin System Hardening:**
    *   PR [#149](https://github.com/TinyAGI/tinyclaw/pull/149) introduced "hook timeouts" and metadata sanitization. This signals a move towards a more secure, production-ready plugin architecture that prevents malicious or poorly written plugins from hanging the system.

## 7. User Feedback Summary
*   **Pain Point:** Installation friction. Users struggled with `npm`/`npx` installation methods and platform-specific native module builds.
    *   *Response:* The team shifted to a standalone binary/install script approach (PR #237).
*   **Pain Point:** "Black Box" execution. Users couldn't tell what the agent was doing while it was "thinking" or working on a task.
    *   *Response:* Implementation of verbose logging and real-time streaming of tool usage to chat channels.
*   **Satisfaction:** There is evident satisfaction with the move to "TinyOffice" (the web UI), with users actively requesting it replace CLI workflows entirely.

## 8. Backlog Watch
The backlog is currently very clean. Most long-standing issues regarding Docker (#100, #84) and provider support (#124) were closed today. The project appears to be in a healthy state with no critical "orphaned" issues lingering without attention. The closure of Issue #120 (verbose options) suggests that observability, previously a backlog item, is now prioritized.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-29

## 1. Today's Overview
Moltis is experiencing a period of high-intensity stabilization following recent feature expansions. The project maintains excellent velocity with **4 releases** pushed within 24 hours (versions `20260327.05` through `20260328.03`) alongside the closure of **13 PRs** and **8 Issues**. The bulk of today's activity (approx. 80% of merged PRs) focused on critical bug fixes, specifically targeting provider reliability, local LLM timeouts, and platform-specific regressions (Telegram, GraphQL). While the rapid closure of bugs suggests a responsive maintenance cycle, the clustering of reports around "model selection" and "provider timeouts" indicates instability in the core chat provider logic introduced in recent commits.

## 2. Releases
*Latest Versions: `20260328.03`, `20260328.02`, `20260328.01`, `20260327.05`*

Specific release notes were not provided in the data feed, but based on the merged Pull Requests, these releases likely contain the following critical updates:
*   **Provider Reliability:** Fixes for local LLM timeouts (increased to 30s) and custom provider discovery logic.
*   **Chat Stability:** Patches for context compaction errors and MiniMax system prompt handling.
*   **Telegram/Matrix:** Routing fixes for forum topics and initial integration of Matrix support.
*   **Voice:** New configuration options for OpenAI-compatible TTS/STT base URLs.

## 3. Project Progress
**Merged Features & Fixes**
*   **Local LLM Support (PR #515):** Significantly improved support for self-hosted models by increasing the model probe timeout from 10s to 30s and preventing timeouts from blocking single-model saves.
*   **Matrix Integration (PR #500):** Officially added Matrix as a channel integration, supporting DMs, room messaging, and typing indicators (cherry-picked from larger feature branch).
*   **Context Management (PR #505):** Fixed a critical bug where manual or automatic context compaction would break chat sessions by switching the summary role to `System`.
*   **Provider Discovery (PR #506 & #507):** Optimized the "Add Provider" flow. The system now skips unnecessary model probing if a model is explicitly specified or if the custom provider lacks a specific model, vastly reducing setup time.
*   **Telegram Fixes (PR #512):** Corrected forum-topic reply routing to ensure responses land in the correct thread.

**Advancing Features**
*   **Cross-Session Recall (PR #503):** A major feature update is currently open, introducing session recall, SSH runtime management, and portable skill bundles.
*   **Jina.ai Search (PR #513):** A new pull request seeks to add Jina.ai as a web search provider alongside Brave and Perplexity.

## 4. Community Hot Topics
*Issue #437: Expandable "Reasoning" is only response from message in chat*
*   **Link:** [moltis-org/moltis#437](https://github.com/moltis-org/moltis/issues/437)
*   **Activity:** 3 Comments, Closed today.
*   **Analysis:** This issue highlights a UX flaw where expanded "Reasoning" content (e.g., Chain of Thought) obscured the actual response in chat channels. Its closure today (likely via the rapid releases) indicates a fix for the display logic has been prioritized.

*PR #503: Add session recall, managed SSH runtime UX, and skill portability*
*   **Link:** [moltis-org/moltis#503](https://github.com/moltis-org/moltis/pull/503)
*   **Activity:** Open, significant architectural changes.
*   **Analysis:** This PR is the current focal point for development, addressing "post-chat" utility. It moves Moltis from a simple chat interface to a persistent agent environment with memory (recall) and portability.

## 5. Bugs & Stability
**Critical (Fixed Today)**
*   **Chat Breaking Compaction (#501):** Users reported that using the `/compact` command or automatic context reduction permanently broke chat sessions.
    *   *Fix:* PR #505 merged (Role changed to System).
*   **Model Selection Blackout (#514):** "Most models can't be selected" – a severe regression preventing users from switching agents.
    *   *Fix:* Likely addressed in today's rapid release cadence (issue closed).
*   **Provider Setup Timeouts (#502):** Adding OpenAI-compatible providers led to hangs/timeouts.
    *   *Fix:* PR #507 and #515 merged, changing discovery logic and increasing timeouts.

**Moderate (Fixed Today)**
*   **MiniMax Configuration Error (#508):** Upgrading caused "invalid chat setting" errors for MiniMax users.
    *   *Fix:* PR #510 restored top-level system prompt extraction.
*   **ARM64 Installation (#496):** The installer script failed to download packages for aarch64 Linux (404 error).
    *   *Status:* Closed, likely patched in deployment scripts.

## 6. Feature Requests & Roadmap Signals
*   **Alternative Search Engines:** PR #513 indicates strong demand for more diverse search providers. **Prediction:** Jina.ai integration will be merged shortly to expand beyond Brave/Perplexity.
*   **Voice Flexibility:** PR #499 (Open) reflects user need to host local TTS/STT (like Chatterbox) rather than relying on cloud APIs.
*   **SSH & Skill Portability:** The scope of PR #503 suggests users are treating Moltis as a persistent development environment ("Code-cursor compatibility") and want to move "skills" (prompts/tools) between instances easily.

## 7. User Feedback Summary
*   **Pain Points (Connectivity):** Users running local LLMs or custom OpenAI-compatible endpoints faced significant friction today regarding timeouts and model discovery. The rapid fixes in PRs #506, #507, and #515 suggest the maintainers are highly responsive to the self-hosted/local-LLM community.
*   **Pain Points (Upgrade Friction):** Several issues (#508, #501) stemmed from upgrades breaking existing chats or settings. This implies that recent schema changes or architecture shifts were not fully backwards compatible, requiring immediate hotfixes.
*   **Satisfaction:** The quick closure of bugs (8 closed in 24h) correlates to high user satisfaction regarding maintenance response times.

## 8. Backlog Watch
*   **PR #331 (feat/channels):** Although marked closed, this PR was effectively split up. It serves as the genesis for the Matrix integration and Voice features. The "cherry-picking" of features from this large PR into smaller ones (#500, #499) indicates the maintainers are refining the merge strategy to be more modular.
*   **PR #276 (feat/telegram):** A community contribution regarding document extraction from Telegram messages. It remains unclosed or superseded by recent changes. The maintainer's note that the implementation was "suboptimal" suggests it may be rewritten internally soon.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-29

## 1. Today's Overview
CoPaw is experiencing a **surge in development activity and community engagement**, with 63 updates (39 Issues, 24 PRs) in the last 24 hours. The project is in a high-velocity iteration phase, focusing heavily on **expanding provider integrations** (GitHub Copilot, OpenCode, MiniMax) and **refining user experience** (history navigation, asset backup). However, the influx of new issues (35 currently open) highlights growing pains regarding **stability**, specifically concerning network reliability, infinite loops in reasoning, and UI accessibility bugs.

## 2. Releases
**No new releases** published in the last 24 hours. The current version remains stable, though users are actively reporting bugs on versions `0.2.0` and `0.2.0.post1`.

## 3. Project Progress
**Features & Integration Advances:**
*   **Provider Ecosystem:** Significant expansion of LLM providers. Merged/closed PRs include support for **OpenCode** ([#2444](https://github.com/agentscope-ai/CoPaw/pull/2444)), **MiniMax OAuth** (Device Code Flow) ([#2423](https://github.com/agentscope-ai/CoPaw/pull/2423)), and documentation updates for agent configurations ([#2450](https://github.com/agentscope-ai/CoPaw/pull/2450)).
*   **Core Infrastructure:** Improvements to **file truncation logic** ([#2449](https://github.com/agentscope-ai/CoPaw/pull/2449)) to handle large contexts better and **skill configuration passing** ([#2440](https://github.com/agentscope-ai/CoPaw/pull/2440)).
*   **Documentation:** Extensive updates to MCPs, tools, and context management docs ([#2460](https://github.com/agentscope-ai/CoPaw/pull/2460), [#2444](https://github.com/agentscope-ai/CoPaw/pull/2444)).

## 4. Community Hot Topics
*   **[Issue #2291: Help Wanted: Open Tasks](https://github.com/agentscope-ai/CoPaw/issues/2291)** *(32 comments)*
    *   **Summary:** The central hub for community contribution. Users are actively claiming tasks ranging from P0 to P2 priority.
    *   **Signal:** High community willingness to contribute; the project is successfully decentralizing development workload.
*   **[Issue #2218: CoPaw process pegged at 100% CPU at idle](https://github.com/agentscope-ai/CoPaw/issues/2218)** *(10 comments)*
    *   **Summary:** A busy-polling epoll loop causes the CoPaw process to consume max CPU even when idle.
    *   **Signal:** Critical performance regression affecting user hardware and resource efficiency.
*   **[Issue #2293: UI Crash / SyntaxError](https://github.com/agentscope-ai/CoPaw/issues/2293)** *(9 comments)*
    *   **Summary:** Users report being locked out of the UI with `Uncaught SyntaxError` after QA agent interactions.
    *   **Signal:** Frontend stability risks are blocking access to the application.

## 5. Bugs & Stability
**High Severity:**
*   **Gateway/Restart Hangs:** [[Issue #2445](https://github.com/agentscope-ai/CoPaw/issues/2445)] - Gateway restarts cause the Agent to permanently freeze (100% reproducible).
*   **Infinite Loops:** [[Issue #2378](https://github.com/agentscope-ai/CoPaw/issues/2378)] - Tool-intensive skills (like `deep-research`) trigger repetitive loops (46+ iterations) due to high `max_iters` and memory hook issues.
*   **Telegram Spam:** [[Issue #2464](https://github.com/agentscope-ai/CoPaw/issues/2464)] - Tasks trigger dozens of separate messages instead of one consolidated reply.
*   **DingTalk Session Expiry:** [[Issue #2221](https://github.com/agentscope-ai/CoPaw/issues/2221)] - Cron tasks fail because `sessionWebhook` expires but isn't refreshed or stored with expiry time.

**Medium Severity:**
*   **Voice Transcription:** [[Issue #2439](https://github.com/agentscope-ai/CoPaw/issues/2439)] - Voice message transcription is failing.
*   **Feishu Duplicate Replies:** [[Issue #2421](https://github.com/agentscope-ai/CoPaw/issues/2421)] - Feishu channel occasionally sends multiple copies of the same reply.

## 6. Feature Requests & Roadmap Signals
*   **Asset Backup & Migration:** [[PR #2457](https://github.com/agentscope-ai/CoPaw/pull/2457)] / [[Issue #2443](https://github.com/agentscope-ai/CoPaw/issues/2443)] - A strong signal for portability. Users want to export Memories, Skills, and Tools as ZIP packages and migrate across devices.
*   **Console UX Improvements:**
    *   **Terminal Navigation:** [[PR #2466](https://github.com/agentscope-ai/CoPaw/pull/2466)] - Request for arrow-key history navigation in the chat input.
    *   **Paste Support:** [[Issue #2434](https://github.com/agentscope-ai/CoPaw/issues/2434)] - Request for Ctrl+V paste support for images/files in the Web Console.
*   **Skills Hub:** [[Issue #2418](https://github.com/agentscope-ai/CoPaw/issues/2418)] - Users want a management page to browse and download "mainstream skills" more easily.
*   **"Magic Commands":** [[Issue #2456](https://github.com/agentscope-ai/CoPaw/issues/2456)] - Request for commands like `/break` to forcibly interrupt stuck agents in channels like Feishu/DingTalk.
*   **UI Layout Revert:** [[Issue #2454](https://github.com/agentscope-ai/CoPaw/issues/2454)] - User dissatisfaction with moving chat history to a hidden right-side panel; requests reverting to the left-side display for better multi-agent visibility.

## 7. User Feedback Summary
*   **Configuration Complexity:** [[Issue #2298](https://github.com/agentscope-ai/CoPaw/issues/2298)] - Users find configuring Ollama and selecting models difficult/unclear.
*   **Model Selection Confusion:** [[Issue #2425](https://github.com/agentscope-ai/CoPaw/issues/2425)] - Recent UI changes hid the model selection box, confusing users ("Is it a bug or did it move?").
*   **MCP Integration Issues:** [[Issue #2417](https://github.com/agentscope-ai/CoPaw/issues/2417)] - Local models (vLLM) fail to trigger MCP service calls for database queries.
*   **Multi-Agent Collaboration:** [[Issue #2420](https://github.com/agentscope-ai/CoPaw/issues/2420)] - Feedback indicates "identity confusion" and lack of guidance on how to trigger or maintain cross-agent collaboration.

## 8. Backlog Watch
*   **[Issue #836](https://github.com/agentscope-ai/CoPaw/issues/836): Browser Login Handling** - Re-opened activity. Users are asking how to handle logins (e.g., Gemini, 2FA) when the agent opens a browser. Suggestion: Pre-login Session Injection.
*   **[Issue #2277](https://github.com/agentscope-ai/CoPaw/issues/2277): `BadRequestError` with 'auto' tool choice** - Error persists despite previous fixes. Requires attention for custom model configurations (Qwen3.5).
*   **[Issue #2405](https://github.com/agentscope-ai/CoPaw/issues/2405): OpenRouter/Mimo Model Support** - User trying to use free API credits running into `402` errors due to token limits.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-29

## 1. Today's Overview
ZeptoClaw is currently in an active development phase focused on stabilizing critical communication pathways and memory management. The project shows high activity with 3 significant updates in the last 24 hours (1 Issue, 2 PRs), all driven by core contributor `stuartbowness`. Current development priority is clearly split between fixing reliability bugs in the Telegram interface and architecting a more robust context system to handle long-term agent tasks. While no new releases were published today, the open Pull Requests suggest an impending patch cycle to address "silent failure" errors that impact user trust.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
*No Pull Requests were merged or closed in the last 24 hours.*

However, significant progress is being drafted in open PRs:
*   **Context Management Architecture:** PR #460 proposes a fundamental shift from single-pass word counting to a "multi-layered defense-in-depth strategy" to prevent token overflow crashes during long conversations.
*   **Telegram Reliability:** PR #462 introduces a chunking mechanism and plaintext fallback to prevent the agent from going silent during complex research tasks.

## 4. Community Hot Topics
The primary focus of the community and maintainers today is the reliability of the Telegram integration, specifically regarding how the agent handles complex, open-ended tasks.

*   **[feat(agent): multi-layered context compaction to prevent token overflow](https://github.com/qhkm/zeptoclaw/pull/460)**
    *   **Status:** Open
    *   **Analysis:** This PR addresses a critical limitation where long conversations crash the agent. The "Hot Topic" here is **Scalability**. Users need agents that can maintain context over long sessions without hitting unrecoverable token limits. The shift to a "multi-layered" approach suggests the project is maturing from a prototype to a production-ready system.

*   **[fix(telegram): prevent silent message failures with chunking and plaintext fallback](https://github.com/qhkm/zeptoclaw/pull/462)**
    *   **Status:** Open
    *   **Analysis:** This PR is directly linked to Issue #461. The community concern is **User Feedback Visibility**. When an agent performs research (e.g., "Who are the most opinionated developers in the Rust community?"), but fails to report back, it breaks the user loop. The introduction of "chunking" highlights that the agent is generating responses that exceed Telegram's size limits or formatting constraints.

## 5. Bugs & Stability
**Critical Severity:**
*   **[Issue #461: bug: research tasks via Telegram silently fail with no response](https://github.com/qhkm/zeptoclaw/issues/461)**
    *   **Description:** Open-ended research tasks involving browser use fail silently via Telegram. The user receives no response, and the `render_telegram_html()` function produces malformed tags.
    *   **Impact:** High. Users cannot rely on the agent for research tasks if they don't know if the task failed or succeeded.
    *   **Fix Status:** Fix available in **[PR #462](https://github.com/qhkm/zeptoclaw/pull/462)** (Drafted, awaiting review/merge).

**High Severity:**
*   **Token Overflow Crashes:** (Referenced in PR #460)
    *   **Description:** Long conversations currently crash with unrecoverable token overflow errors.
    *   **Fix Status:** Fix available in **[PR #460](https://github.com/qhkm/zeptoclaw/pull/460)**.

## 6. Feature Requests & Roadmap Signals
Based on the active PRs and issues, the following features are likely to be included in the next version:
*   **Resilient Long-Context Memory:** The move to "multi-layered context compaction" (PR #460) indicates a roadmap goal to support indefinitely long agent sessions.
*   **Robust Messaging Middleware:** The fixes for Telegram suggest a move towards a more fault-tolerant messaging layer that can handle large outputs by intelligently splitting messages and falling back to plain text when HTML rendering fails.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **The "Silent Agent" Problem:** Users are experiencing anxiety regarding the agent's state. When a complex task is run via Telegram and no response comes, the user is left wondering if the agent is still working, crashed, or finished.
    *   **Task Failure on Complexity:** Simple tasks work, but complex research tasks (>4 sources) are failing, indicating a bottleneck in data retrieval/processing pipelines.
*   **Satisfaction:** Users appreciate the research capabilities (browser use) but are dissatisfied with the delivery mechanism reliability.

## 8. Backlog Watch
*   No specifically "long-unanswered" issues were identified in this specific dataset slice, but **Issue #461** is the critical item currently in the backlog awaiting the merge of PR #462.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw (RivonClaw) Project Digest: 2026-03-29

## 1. Today's Overview
The project has released a minor update, **v1.7.8**, focusing on installation guidance for macOS users, though specific code changelogs for this version were not provided in the release notes. Development activity appears paused with no pull request activity in the last 24 hours. However, user activity is elevated due to critical bugs reported in the previous release (v1.7.7), specifically affecting API compatibility with third-party models. The project currently faces **high instability** for users attempting to switch between specific LLM providers within the Bailian (百炼) suite.

## 2. Releases
**v1.7.8 (Latest)**
*   **Primary Focus:** Installation documentation.
*   **Key Note for macOS Users:** The release explicitly addresses the `"RivonClaw' is damaged and can't be opened"` error caused by macOS Gatekeeper blocking the unsigned application. It provides terminal commands to bypass this security check.
*   **Migration:** Users updating from v1.7.7 should be aware that the underlying bugs reported in the previous version regarding model switching (detailed below) do not appear to be addressed in the v1.7.8 release notes.

## 3. Project Progress
*   **No PRs Merged/Closed:** There were 0 pull requests updated, merged, or closed in the last 24 hours.
*   **Feature Advancement:** No new features were advanced today.

## 4. Community Hot Topics
**Issue #29 & #28: Model Switching Failures (Bailian Suite)**
*   **Links:** [#29](https://github.com/gaoyangz77/rivonclaw/issues/29), [#28](https://github.com/gaoyangz77/rivonclaw/issues/28)
*   **Analysis:** This is the primary topic of discussion. Users are reporting that when switching from the default **Qwen3.5** to other providers like **GLM (Zhipu)** or **Kimi (Moonshot)** within the Bailian integration, the application throws an HTTP 400 error regarding invalid input length parameters.
*   **Underlying Need:** Users require flexibility in model selection without breaking the API payload structure. The recurrence of this error across multiple users suggests a regression in how the client formats request bodies for non-Qwen models.

## 5. Bugs & Stability
**Critical Severity: HTTP 400 InvalidParameter on Model Switch**
*   **Affected Versions:** v1.7.7 (likely persists in v1.7.8).
*   **Error:** `InternalError.Algo.InvalidParameter: Range of input length should be [1, 202752]`
*   **Description:** Users attempting to use models such as Kimi 2.5 or GLM 5 encounter an immediate crash/block when sending messages. The error incorrectly validates input length, implying the API call structure sent by RivonClaw may be incompatible with these specific provider endpoints.
*   **Fix Status:** No fix PRs are currently open or merged.

**Minor Issue: macOS Gatekeeper Blocking**
*   **Severity:** Low (Workaround available).
*   **Description:** App is blocked by macOS on launch due to lack of code signature.
*   **Mitigation:** Release notes provide manual terminal commands to authorize the app.

## 6. Feature Requests & Roadmap Signals
*   **Implicit Request:** The active bugs on issues #28 and #29 signal a strong demand for **robust multi-model API compatibility**. Users expect to switch freely between Qwen, Kimi, and GLM without manual intervention or errors.
*   **Prediction:** The next version (v1.7.9) will likely prioritize a hotfix for the API request formatter to ensure parameters are correctly sent to Kimi and GLM endpoints.

## 7. User Feedback Summary
*   **Pain Points:** Users on Windows 11 and macOS are frustrated by the "Bailian" suite functionality being broken when trying to use anything other than the default model. The error message regarding input length is confusing users as it occurs even with short inputs.
*   **Satisfaction:** Low regarding v1.7.7 stability.
*   **Usage Context:** Users are actively trying to integrate diverse Chinese LLMs (Kimi, GLM) rather than relying solely on Qwen.

## 8. Backlog Watch
*   **Attention Required:** Issues **#28** and **#29** are fresh (created yesterday) and completely unaddressed by the codebase (no PRs). Given they break core functionality for popular AI models, these should be treated as top priority for the maintainer.
*   **Response Time:** Maintainer has commented on #29, acknowledging the issue, but no code fix has been drafted yet.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*