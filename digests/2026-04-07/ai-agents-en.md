# OpenClaw Ecosystem Digest 2026-04-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-07 00:13 UTC

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

# OpenClaw Project Digest: 2026-04-07

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high-volume cycle with **500 issues and 500 PRs** updated in the last 24 hours, indicating a massive "burst" of development activity or a backlog cleanup effort. While the community engagement is high, the project appears to be in a fragile state following the release of **v2026.4.5**. There is a significant concentration of **regressions and breaking changes**, particularly affecting Windows compatibility, plugin loading, and core daemon functionality. The 83 closed issues against 417 active suggest the team is fighting a high influx of bugs while trying to ship new features.

## 2. Releases
**v2026.4.5** has been released.
*   **Breaking Changes:** This release removes legacy configuration aliases to enforce canonical paths.
    *   Removed: `talk.voiceId`, `talk.apiKey`, `agents.*.sandbox.perSession`, `browser.ssrfPolicy.allowPrivateNetwork`, `hooks.internal.handlers`, and channel/group/room `allow` toggles.
    *   **Impact:** Users relying on these deprecated config keys must migrate to the new canonical public paths and `enabled` boolean flags immediately to restore functionality.

## 3. Project Progress
*   **Security Enhancements:** There is a strong focus on credential redaction and security hardening. PR [#62189](https://github.com/openclaw/openclaw/pull/62189) aims to redact sensitive data (API keys, file paths) from error messages.
*   **Gateway Stability:** Work is underway to fix startup bottlenecks. PR [#61278](https://github.com/openclaw/openclaw/issues/61278) highlights that hooks are blocking startup (causing ~4 min load times), prompting requests for async hook loading.
*   **Agent Protocol:** PR [#62160](https://github.com/openclaw/openclaw/pull/62160) introduces a Plugin SDK seam for registering managed MCP (Model Context Protocol) servers, improving extensibility for agent-to-agent communication.

## 4. Community Hot Topics
*   **[#75 - Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (74 comments)
    *   **Topic:** Cross-platform desktop app demand.
    *   **Analysis:** Users are eager for feature parity with the existing macOS/iOS/Android clients. This is the most upvoted enhancement request, highlighting a gap in the developer experience for Windows/Linux users.
*   **[#52875 - Session_send "no session found" Regression](https://github.com/openclaw/openclaw/issues/52875)** (17 comments)
    *   **Topic:** Agent-to-Agent communication failure.
    *   **Analysis:** A critical regression where agents cannot contact each other, breaking multi-agent workflows.
*   **[#7916 - Encrypted API Keys / Secrets Management](https://github.com/openclaw/openclaw/issues/7916)** (17 comments)
    *   **Topic:** Security best practices.
    *   **Analysis:** Users are demanding that API keys stored in `auth-profiles.json` be encrypted rather than just chmod-600, reflecting a need for enterprise-grade security compliance.

## 5. Bugs & Stability
**Critical Regressions (v2026.4.5 & v2026.4.2):**
1.  **[Windows Path Handling Crash #61911](https://github.com/openclaw/openclaw/issues/61911) & [#62194](https://github.com/openclaw/openclaw/pull/62194):** A severe regression on Windows 10 where the app crashes with `ERR_UNSUPPORTED_ESM_URL_SCHEME: Received protocol 'c:'`. This is caused by passing raw Windows paths to the ESM loader.
2.  **[Plugin Loader Broken #61686](https://github.com/openclaw/openclaw/issues/61686):** The `npm install` process for v2026.4.5 leaves the CLI broken due to missing bundled plugin runtime dependencies. [#61759](https://github.com/openclaw/openclaw/issues/61759) reports the `nextcloud-talk` plugin fails to load due to missing exports.
3.  **[Auth Failures #23538](https://github.com/openclaw/openclaw/issues/23538):** Anthropic setup-token auth returns 401 Invalid bearer token despite correct configuration.
4.  **[Model Override Ignored #59257](https://github.com/openclaw/openclaw/issues/59257):** Cron jobs are silently ignoring model overrides, running on the default (more expensive) cloud model instead of the configured local/alternative model.

## 6. Feature Requests & Roadmap Signals
*   **Masked Secrets ([#10659](https://github.com/openclaw/openclaw/issues/10659)):** Users want a system where agents can *use* API keys without *seeing* them (preventing leaks via prompt injection).
*   **Compaction Checkpoints ([#62146](https://github.com/openclaw/openclaw/pull/62146)):** A PR is open to add recovery checkpoints for session compaction, addressing user fears of data loss during memory management.
*   **JSON Schema for Config ([#22278](https://github.com/openclaw/openclaw/issues/22278)):** High demand for publishing the `openclaw.json` JSON Schema to enable IDE autocomplete and prevent silent config crashes.
*   **SSRF Policy for Web Fetch ([#25322](https://github.com/openclaw/openclaw/issues/25322)):** Users want parity between `web_fetch` and `browser` tools regarding SSRF protections to prevent failures in private network environments.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Windows Support:** Users feel neglected; "Windows is missing" (Issue #75) and recent updates have introduced "show-stopper" crashes (Issue #61911).
    *   **Cost Control:** Multiple reports ([#31708](https://github.com/openclaw/openclaw/issues/31708), [#45110](https://github.com/openclaw/openclaw/issues/45110)) indicate that prompt caching is broken, leading to 5x-1000x spikes in inference costs.
    *   **Docker Usability:** Issue [#14593](https://github.com/openclaw/openclaw/issues/14593) highlights frustration that the official Docker image fails to install basic skills because `brew` is missing.
*   **Positive Signals:** High engagement on the "Real Estate Assistant" skill PR ([#62203](https://github.com/openclaw/openclaw/pull/62203)) indicates a desire for vertical-specific agent templates.

## 8. Backlog Watch
*   **[Stale: Gateway Crash-Loop #28191](https://github.com/openclaw/openclaw/issues/28191):** The gateway consumes ~340MB RAM before checking port availability, leading to crash-loops on restart.
*   **[Stale: Workspace Skills #10386](https://github.com/openclaw/openclaw/issues/10386):** Custom skills in workspace directories are not discovered by the agent, forcing users to use bundled skills only.
*   **[Stale: Prompt Caching Costs #31708](https://github.com/openclaw/openclaw/issues/31708):** Originally misidentified as a duplicate, this critical cost-inflation bug remains open and actively discussed.

---

## Cross-Ecosystem Comparison

# AI Agent Ecosystem Analysis Report
**Date:** 2026-04-07
**Analyst:** Senior Open Source Ecosystem Reporter

## 1. Ecosystem Overview
The personal AI agent ecosystem is currently undergoing a **"Stability and Integration" phase**. While high-velocity development persists across all major projects, the community focus has shifted from purely adding new LLM capabilities to solving critical infrastructure challenges: **memory management**, **tool execution security**, and **protocol interoperability (MCP)**. There is a noticeable divergence in the ecosystem: established projects like **OpenClaw** and **IronClaw** are tackling complex multi-tenancy and enterprise scaling issues, while newer entrants like **NanoBot** and **ZeptoClaw** are optimizing for local-only, privacy-first deployments. Across the board, "hallucinated" tool calls, silent cross-user data leakage, and memory/resource exhaustion (OOM/CPU spikes) remain the primary technical hurdles preventing production-grade reliability.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | v2026.4.5 (High Regressions) | 🟡 **Warning** |
| **IronClaw** | 33 | 50 | No Release (v0.24.1 pending) | 🟡 **Warning** |
| **CoPaw** | 28 | 15 | No Release (Stability Bugs) | 🟠 **Volatile** |
| **NanoBot** | 26 | 56 | v0.1.5 (Post-release bugs) | 🟠 **Volatile** |
| **NanoClaw** | 8 | 26 | No Release (Active Merging) | 🟢 **Active** |
| **PicoClaw** | 8 | 6 | Nightly (Config/Auth bugs) | 🟡 **Warning** |
| **Moltis** | 11 | 9 | v20260406.04 (Docker fix) | 🟢 **Stable** |
| **Zeroclaw** | 14 | 31 | No Release (Feature heavy) | 🟢 **Active** |
| **NullClaw** | 1 | 7 | v2026.3.21 (Shell regression) | 🟡 **Warning** |
| **LobsterAI** | 0 | 11 | No Release (UX Polish) | 🟢 **Stable** |
| **ZeptoClaw** | 4 | 8 | No Release (Stabilizing) | 🟢 **Active** |
| **EasyClaw** | 0 | 1 | v1.7.8 (Maintenance) | 🔵 **Low** |
| **TinyClaw** | 0 | 0 | Stale | ⚫ **Inactive** |

*\*Health Score based on bug-to-feature ratio, regression severity, and community sentiment.*

## 3. OpenClaw's Position
**Advantages:**
OpenClaw remains the undisputed leader in **community scale and extensibility**, evidenced by the massive burst of 500 issues/PRs in a single day. Its **Plugin SDK** and **Agent Protocol** support are significantly more mature than peers, allowing for a richer ecosystem of third-party extensions (e.g., the "Real Estate Assistant" skill).

**Technical Approach:**
Unlike lighter frameworks (NanoBot, ZeptoClaw), OpenClaw is moving toward **enterprise-grade security hardening** (credential redaction, strict canonical config paths) and **advanced session management** (compaction checkpoints). However, it is currently suffering from **success-induced fragility**; the rapid pace of development has introduced severe regressions in Windows compatibility and cost-control mechanisms (prompt caching bugs), making it riskier for production deployment compared to more stable alternatives like Moltis or LobsterAI.

## 4. Shared Technical Focus Areas
The following requirements are emerging simultaneously across multiple projects, indicating standardization needs:

*   **Model Context Protocol (MCP) Support:**
    *   *NanoBot (PR #2861), OpenClaw (PR #62160), CoPaw (Closed #2998).*
    *   *Trend:* Projects are racing to formalize how agents share tools and context, moving beyond ad-hoc scripting.
*   **Resource & Memory Exhaustion:**
    *   *NanoBot (Issue #2638), Zeroclaw (Issue #4916), CoPaw (Issue #2888), NullClaw (Issue #1503).*
    *   *Trend:* A universal "memory snowball" problem where session history grows unbounded or recursive loops consume all RAM.
*   **Strict Workspace/Security Boundaries:**
    *   *Zeroclaw (Issue #1478), NanoBot (Issue #2826), IronClaw (Issues #2068/#2069).*
    *   *Trend:* Users are demanding "ratchet-down" security—tools that are secure by default but allow "power user" overrides for local automation.
*   **Multi-Agent/Session Isolation:**
    *   *NanoClaw (PR #1677), Zeroclaw (PR #5423), NanoBot (Issue #2836).*
    *   *Trend:* Moving from "one bot per channel" to "one agent per thread/user" to prevent data leakage.

## 5. Differentiation Analysis

| Project | Key Focus / Niche | Target User |
| :--- | :--- | :--- |
| **IronClaw** | **Enterprise Multi-Tenancy** (Ownership model, WASM sandboxes). | DevOps teams & Enterprises needing strict RBAC. |
| **LobsterAI** | ** polished GUI/UX** (Electron app, visual cron management). | Non-technical desktop users & productivity power users. |
| **CoPaw** | **Local-First Aggregation** (Multi-model support, video processing). | Advanced users running local LLMs (Llama.cpp). |
| **NanoBot** | **Chat Platform Native** (Deep WhatsApp/Telegram integration). | Users wanting AI inside existing social apps. |
| **Moltis** | **DevOps / CI/CD** (GitHub/GitLab webhooks, Docker-native). | Developers automating repo workflows. |
| **ZeptoClaw** | **API Drop-in Replacement** (OpenAI `/v1/` compatibility). | Developers migrating existing apps to Agentic logic. |
| **NullClaw** | **Minimalist / Single Binary** (Zig-based, zero deps). | Sysadmins and edge-computing enthusiasts. |

## 6. Community Momentum & Maturity

*   **Tier 1: Rapidly Iterating (High Volatility):**
    *   **OpenClaw:** Massive volume but suffering from technical debt and regression spikes.
    *   **NanoBot:** Exploding popularity post-"Website Release," but struggling with fundamental security and memory bugs.
    *   **CoPaw:** High feature velocity hampered by critical CPU leak and stability issues.
*   **Tier 2: Stabilizing & Maturing:**
    *   **Moltis:** Successful feature release cycle with quick Docker fixes; showing healthy, controlled growth.
    *   **NanoClaw:** Solving deep architectural problems (message routing, container lifecycles) with a high merge rate.
    *   **LobsterAI:** Low bug count, high focus on UX refinement (scheduled tasks), indicating product-market fit.
*   **Tier 3: Niche / Maintenance:**
    *   **NullClaw / ZeptoClaw:** Slower, deliberate pacing focused on specific architectural goals (REST API, Context defense) rather than broad feature expansion.

## 7. Trend Signals
1.  **The "Cron" Evolution:** There is a clear shift from simple "scheduled prompts" to **"Trigger-based Automation."** Both **LobsterAI** (UI overhaul for tasks) and **NullClaw** (HEARTBEAT.md) are treating agents as background daemon workers rather than just chatbots.
2.  **Windows as a First-Class Citizen is Failing:** **OpenClaw** and **NanoBot** both have "Critical" regressions specifically on Windows (Path handling crashes, Unicode errors). The ecosystem is heavily biased toward macOS/Linux environments.
3.  **Cost Anxiety is Real:** Users in **OpenClaw** and **NanoClaw** are aggressively filing bugs regarding **Prompt Caching** and **Cost Controls**. This indicates that while users want capable agents, they are extremely sensitive to "runaway token" costs caused by inefficient memory management.
4.  **"Human-in-the-Loop" Protocols:** **NanoBot** (Human takeover) and **NanoClaw** (Review agents) are implementing features to pause AI execution for human approval, signaling a move toward **supervised autonomy** rather than full automation.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-07

**Project Status:** 🟡 **Active & Volatile**
NanoBot is experiencing high development velocity following the `v0.1.5` release ("The Website Release"). While feature contributions are surging, the project is currently facing significant stability and regression challenges, particularly regarding security configurations, environment parsing, and multi-user isolation.

---

### 1. Today's Overview
In the last 24 hours, NanoBot has seen extremely high activity with **56 Pull Requests** and **26 Issues** updated. This surge follows the `v0.1.5` release, which introduced multilingual documentation and a new official website. However, the data indicates a "growing pain" phase: rapid feature expansion is leading to regressions. Users are reporting critical issues ranging from file security bypasses and environment variable failures to memory leaks causing unresponsiveness. The community is highly engaged, debating architectural improvements like MCP (Model Context Protocol) support and multi-user privacy isolation.

### 2. Releases
**🐈 v0.1.5 (Current Stable)**
*   **Status:** Newly Released.
*   **Key Highlights:** This release marks a maturity milestone for NanoBot, establishing an official web presence ([nanobot.wiki](https://nanobot.wiki)) and offering documentation in five languages (EN, CN, JP, KR, ES).
*   **Stats:** 66 PRs merged with contributions from 27 new developers.
*   **Note:** While a major step forward, users should be aware of several post-release bugs reported below (e.g., version mismatches, config parsing issues).

### 3. Project Progress
*   **MCP Integration Expansion:** Work is advancing to fully support the Model Context Protocol (MCP). PR #2861 aims to expose MCP **resources** and **prompts** as read-only tools, moving beyond the initial implementation that only supported tools ([PR #2861](https://github.com/HKUDS/nanobot/pull/2861)).
*   **Web Interface Arrival:** A new browser-based chat channel using Server-Sent Events (SSE) has been proposed, aiming to offer a UI without core modifications ([PR #2871](https://github.com/HKUDS/nanobot/pull/2871)).
*   **Tool Calling Fixes:** Efforts are underway to improve tool call validation and error messaging, specifically addressing issues where LLMs return invalid parameters ([PR #2859](https://github.com/HKUDS/nanobot/pull/2859)).
*   **Configuration Hygiene:** Several merged PRs focus on fixing config inconsistencies, such as the `e2eeEnabled` alias for Matrix and version number synchronization ([PR #2855](https://github.com/HKUDS/nanobot/pull/2855), [PR #2860](https://github.com/HKUDS/nanobot/pull/2860)).

### 4. Community Hot Topics
*   **Security vs. Usability (The "Localhost" Debate):**
    *   **Issue:** The new `exec` tool safety guard blocks `localhost` access, breaking local automation (e.g., PinchTab).
    *   **Community Sentiment:** Users appreciate the SSRF protection but need a whitelist or "safe mode" to interact with local services ([Issue #2796](https://github.com/HKUDS/nanobot/issues/2796)).
*   **Memory & Unresponsiveness:**
    *   **Issue:** Users are reporting that the agent becomes unresponsive due to unbounded session history growth when memory consolidation fails.
    *   **Impact:** High severity; renders the bot unusable until restarted ([Issue #2638](https://github.com/HKUDS/nanobot/issues/2638)).
*   **Privacy in Multi-User Chats:**
    *   **Issue:** A critical design flaw was identified where a single shared workspace causes private info from one WhatsApp user to leak to another.
    *   **Request:** Users are demanding per-chat workspaces for data isolation ([Issue #2836](https://github.com/HKUDS/nanobot/issues/2836)).

### 5. Bugs & Stability
*   **🔴 Critical: File Write Security Bypass**
    *   **Description:** The `restrictToWorkspace` setting can be bypassed, allowing the bot to remove files anywhere on the filesystem.
    *   **Status:** OPEN. A follow-up to a previous unresolved issue ([Issue #2826](https://github.com/HKUDS/nanobot/issues/2826)).
*   **🔴 Critical: System Freeze (DuckDuckGo)**
    *   **Description:** Performing a web search via DuckDuckGo causes the entire system (not just the agent) to hang, requiring a force stop.
    *   **Status:** OPEN ([Issue #2828](https://github.com/HKUDS/nanobot/issues/2828)).
*   **🟠 Major: Environment Variable Parsing Broken**
    *   **Description:** The config parser fails to read `${VARIABLE}` syntax (e.g., `${DEEPSEEK_API_KEY}`), breaking API key injection for some providers.
    *   **Status:** OPEN ([Issue #2849](https://github.com/HKUDS/nanobot/issues/2849)).
*   **🟠 Major: Tool Calling Broken on Ollama**
    *   **Description:** Models like `gemma4` cannot use tools; the bot hallucinates answers instead of executing them.
    *   **Status:** OPEN ([Issue #2829](https://github.com/HKUDS/nanobot/issues/2829)).
*   **🟠 Regression: Unicode CLI Crash**
    *   **Description:** The CLI crashes with `UnicodeEncodeError` on Windows when input contains special characters (emoji/surrogates).
    *   **Fix Available:** See [PR #2869](https://github.com/HKUDS/nanobot/pull/2869).

### 6. Feature Requests & Roadmap Signals
*   **User Feedback as Memory:** An RFC proposes using user reactions (👍, ❤️) to bot messages as a feedback signal to enhance memory consolidation ([Issue #2870](https://github.com/HKUDS/nanobot/issues/2870)).
*   **Machine Payments Protocol (MPP):** Users want native support for autonomous payments via MPP, enabling the agent to pay for services dynamically ([Issue #2845](https://github.com/HKUDS/nanobot/issues/2845)).
*   **"Human Takeover" Pause:** A request for WhatsApp to pause bot replies for 12 hours if a real human replies manually ([Issue #2837](https://github.com/HKUDS/nanobot/issues/2837)).
*   **Web Search Status:** Users want the `/status` command to show current API usage limits for search providers (e.g., Tavily) ([Issue #2820](https://github.com/HKUDS/nanobot/issues/2820)).

### 7. User Feedback Summary
*   **Configuration Fatigue:** Users are struggling with inconsistent config schemas (e.g., `e2eeEnabled` vs `e2ee_enabled`) and environment variable handling.
*   **Platform Instability:** WhatsApp users are reporting "hallucinated" internal thoughts being spoken aloud, and WeChat users cannot see Markdown formatting.
*   **Windows Woes:** The Windows experience is degrading, with `bash` being forced on the `exec` tool (breaking without WSL) and Unicode crashes in the CLI.

### 8. Backlog Watch
*   **Long-Standing Memory Leak:** [Issue #2638](https://github.com/HKUDS/nanobot/issues/2638) (Unbounded session history) remains open despite being critical for long-running agents.
*   **Security Debt:** [Issue #845](https://github.com/HKUDS/nanobot/issues/845) (Workspace restrictions) was referenced again today in [Issue #2826](https://github.com/HKUDS/nanobot/issues/2826), indicating the original fix was insufficient.
*   **Matrix Encryption:** Authentication issues with Matrix E2EE ([Issue #1681](https://github.com/HKUDS/nanobot/issues/1681)) were updated recently but remain closed without a clear resolution for the user.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-04-07

## 1. Today's Overview
Zeroclaw is experiencing a phase of **high-velocity development** focused on multi-agent architecture and workflow engine improvements. The project shows very high activity with **45 events** in the last 24 hours (14 Issues, 31 PRs). Development is concentrated on backend refactoring (skills whitelisting, rate limiting) and core feature expansion (multi-agent workspaces, local TTS), while users are reporting significant friction with strict default security policies and memory management bugs causing resource exhaustion.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
*   **Multi-Agent System (PR #5423):** A massive PR is open to implement a "Real Multi-Agent System" with workspace definitions, allowing agents to be defined as folders. This addresses issue #3502 and fixes #5155.
*   **Workflow Engine (PRs #5376, #5377):** Work is underway on a SQLite-backed `WorkflowStore` and a stdout log marker parser, indicating progress toward persistent, trackable agent workflows.
*   **TUI & Dashboard Sync (PR #5315):** Significant improvements to the Terminal User Interface (TUI) setup wizard and dashboard configuration synchronization (SSE/cache-busting) are under review.
*   **Codex Runner Parity (PR #5416):** Added a `codex_runner` tool to bring feature parity with the existing `claude_code` runner.

## 4. Community Hot Topics
*   **"Only Security, No Functionality" (Issue #1478 - CLOSED):**
    *   **Links:** [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)
    *   **Analysis:** This highly active thread (49 comments) reflects user frustration with ZeroClaw's restrictive default security posture preventing even basic tool usage (e.g., installing ffmpeg). Users are demanding an "unlock everything" mode for local/personal deployments where strict security is a hindrance rather than a benefit.
*   **Memory Snowball Bug (Issue #4916 - OPEN):**
    *   **Links:** [#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)
    *   **Analysis:** A critical design flaw where `auto_save` writes memory recall results back into the database, creating a recursive loop that exhausts memory. A fix is proposed in PR #5417.

## 5. Bugs & Stability
*   **[S0 - Data Loss/Security] Context Spillage (Issue #5415):** Chat context from Discord is bleeding into scheduled tasks, violating isolation boundaries. No fix PR yet.
    *   *Link:* [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)
*   **[S0 - Data Loss/Security] Lark Cron Failure (Issue #5379):** Cron scheduling fails silently on Lark (Feishu), blocking core automation features.
    *   *Link:* [#5379](https://github.com/zeroclaw-labs/zeroclaw/issues/5379)
*   **[S1 - Workflow Blocked] Web Dashboard (Issue #5348):** The dashboard returns a build error (`Build it with: cd web && npm ci...`) instead of loading, blocking web UI users.
    *   *Link:* [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348)
*   **[S2 - Degraded] DeepSeek 400 Errors (Issue #5268):** Context compressor strips required `tool_call_id` fields, breaking compatibility with DeepSeek's API.
    *   *Link:* [#5268](https://github.com/zeroclaw-labs/zeroclaw/issues/5268)
*   **Memory Snowball Fix (PR #5417):** A fix for the recursive memory save issue (Issue #4916) is included in a batched PR.
    *   *Link:* [#5417](https://github.com/zeroclaw-labs/zeroclaw/pull/5417)

## 6. Feature Requests & Roadmap Signals
*   **Local-First TTS (Issue #4116):** Users want GPU-accelerated, offline TTS (Piper/Coqui) to remove dependency on cloud providers like OpenAI/Edge.
*   **Codex Integration (PR #5416):** Active development indicates a push to support "Codex" as a first-class runner for coding tasks.
*   **Rate Limiting Refactor:** Multiple open PRs (#4952, #4953, #4954) suggest a roadmap focus on centralizing and standardizing rate-limiting logic across all tools (Browser, WebFetch, CLI tools).

## 7. User Feedback Summary
*   **Pain Point - Security vs. Usability:** Users are increasingly vocal (Issue #1478) that the "secure by default" philosophy is too restrictive for single-user, local instances. They want a "power user" mode to bypass permission checks.
*   **Pain Point - Discord Isolation:** Reports indicate that conversation history is leaking between different Discord threads (Issue #5412) and into scheduled tasks (Issue #5415), confusing the AI and breaking use-cases.
*   **Configuration Fatigue:** Users are struggling with complex configuration setups, leading to requests for better onboarding (PR #5315) and clearer documentation (Issue #5413).

## 8. Backlog Watch
*   **iPhone Local LLM Support (Issue #5378):** Integration with new "Apple Intelligence as OpenAI" apps is failing due to schema mismatches.
*   **DeepSeek Context Support (Issue #5268):** As DeepSeek gains popularity, the strict API requirement for `tool_call_id` needs a permanent fix in the context compression logic.
*   **Documentation Links:** Multiple users report broken documentation links during the TUI installation process (Issue #5413), hindering new user onboarding.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-04-07

## 1. Today's Overview
PicoClaw is currently experiencing a **high-velocity development cycle**, characterized by intense maintenance activity alongside feature expansion. In the last 24 hours, the project saw **8 new issues** and **6 updated pull requests**, with approximately **50% of PRs focused on critical bug fixes**. The community is actively identifying stability gaps—particularly in configuration loading, provider authentication, and UI localization—while contributors are rapidly responding with security patches (e.g., sanitizing terminal output). Despite the lack of a new release, the surge in closed PRs suggests that the maintainers are actively stabilizing the `0.2.5 nightly` branch.

## 2. Releases
*None released in the last 24 hours.*
*(Current stable context points to `0.2.5 nightly` based on issue reports).*

## 3. Project Progress
While 2 PRs were merged/closed, specific details on the merged content were limited in the data stream. However, significant advancement occurred on the **CLI User Experience** and **Security Hardening** fronts:

*   **[PR #2378](https://github.com/sipeed/picoclaw/pull/2378)** (OPEN): Addresses critical security and stability concerns by sanitizing terminal output in the `exec` tool. This PR hardens path checks to prevent directory traversal attacks and escapes ANSI control characters, ensuring the agent's output doesn't mislead operators or break terminal rendering.
*   **[PR #2229](https://github.com/sipeed/picoclaw/pull/2229)** (OPEN): Aims to modernize the PicoClaw CLI experience by introducing a structured, boxed UI for terminal output, aligning the project with modern CLI standards.

## 4. Community Hot Topics
*   **[#1372: OpenIM Plugin Support](https://github.com/sipeed/picoclaw/issues/1372)** (5 Comments)
    *   **Topic:** Request for an official integration channel with **OpenIM**.
    *   **Analysis:** There is clear demand for PicoClaw to extend its reach beyond current channels (Telegram, Shell, Web) into private messaging infrastructures. This indicates users want to deploy PicoClaw as an internal enterprise assistant.
*   **[#2354: WebUI Input Failure](https://github.com/sipeed/picoclaw/issues/2354)** (2 Comments)
    *   **Topic:** Critical regression where the WebUI input fields and send buttons are disabled completely.
    *   **Analysis:** This is a high-priority usability blocker. The fact that it’s marked "Open" with active comments suggests users are frustrated by the inability to perform basic multi-turn conversations via the web interface.

## 5. Bugs & Stability
**Critical Severity:**
*   **[#2354 - WebUI Broken](https://github.com/sipeed/picoclaw/issues/2354):** Complete failure of input mechanisms in the WebUI. Front-end elements are disabled via F12 inspection.
*   **[#2371 - Agent Loop Crash](https://github.com/sipeed/picoclaw/issues/2371):** `loop.go:2171` panic/error affecting the agent runner. Likely related to configuration parsing or provider initialization.
*   **[#2374 - Gemini Provider Auth Fail](https://github.com/sipeed/picoclaw/issues/2374):** Gemini models failing to authenticate despite valid API keys and successful `curl` tests, suggesting a regression in the HTTP client or request signing logic.

**Moderate Severity:**
*   **[#2373 - Gateway Command Ignored](https://github.com/sipeed/picoclaw/issues/2373):** The `stop` command (and potentially others) are not being honored by the gateway, impacting control over agent execution.
*   **[#2367 - Localization Lapse](https://github.com/sipeed/picoclaw/issues/2367):** App settings screen title remains hardcoded in Chinese regardless of selected language.

**Fix In Progress:**
*   **[#2372](https://github.com/sipeed/picoclaw/pull/2372):** A PR is currently open that claims to fix the API key/model lookup bugs (related to #2371 and #2286).

## 6. Feature Requests & Roadmap Signals
*   **[#2376 - Disable 'Enter' to Send](https://github.com/sipeed/picoclaw/issues/2376):** Users are requesting a configuration option to prevent the 'Enter' key from immediately sending messages, particularly for mobile users (Android) who need new lines for prompt engineering.
*   **[PR #2229 - Structured CLI UI](https://github.com/sipeed/picoclaw/pull/2229):** Strong signal that the project intends to move away from raw stdout logging to a more polished, structured terminal interface for better readability.

## 7. User Feedback Summary
*   **Configuration Fatigue:** Users are struggling with the JSON configuration, specifically regarding `api_key` vs `api_keys` and `model_name` vs `model` (Issues #2371, #2374).
*   **Mobile UX Pain Points:** The hardcoded behavior of the 'Enter' key on Android makes typing complex prompts difficult (#2376).
*   **Connectivity:** Users are deploying in diverse environments (Termux, iStoreOS) and facing TLS/Certificate issues with channels like Telegram (#2209) and command execution issues with the Gateway (#2373).

## 8. Backlog Watch
*   **[#2209 - Telegram TLS Trust](https://github.com/sipeed/picoclaw/pull/2209):** Open since late March, this PR fixes Telegram failures in Termux/chroot environments. Given the rise of mobile/edge deployments, resolving CA bundle issues is becoming increasingly important.
*   **[#2353 - LOCOMO Membench](https://github.com/sipeed/picoclaw/pull/2353):** Closed recently, but worth monitoring. This adds memory benchmarking tools. Its integration will signal the project's readiness to tackle long-term memory retrieval evaluation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-07

## 1. Today's Overview
NanoClaw is experiencing a high-velocity development cycle with significant activity across core infrastructure and new channel integrations. The project shows **26 updated PRs** in the last 24 hours (with roughly half merged/closed) and **8 updated issues**, indicating a highly active maintainer group. Key themes for today include the stabilization of message routing logic, expansion of multi-platform support (Telegram, Discord, Matrix, Feishu), and critical fixes to container lifecycle management to prevent message loss. While the volume of merged PRs suggests strong feature delivery, the presence of duplicate issues (#1679, #1681, #1682) points to potential coordination noise in the backlog.

## 2. Releases
*No new releases published today.*

## 3. Project Progress
Significant strides were made in stabilizing the message pipeline and expanding protocol support.

*   **Pipeline Stability:** [PR #1623](https://github.com/qwibitai/nanoclaw/pull/1623) (Closed) fixed a critical 30-minute deadlock when messages were piped to active containers, while [PR #1592](https://github.com/qwibitai/nanoclaw/pull/1592) (Closed) added user feedback acknowledgment for piped messages.
*   **Discord Architecture:** A major refactor for Discord threads was merged via [PR #1677](https://github.com/qwibitai/nanoclaw/pull/1677) and [PR #1676](https://github.com/qwibitai/nanoclaw/pull/1676). Discord threads are now treated as derived groups with automatic registration and session isolation.
*   **Admin & Testing:** [PR #1674](https://github.com/qwibitai/nanoclaw/pull/1674) (Closed) extended the `register_group` MCP tool to support group typing, and [PR #1675](https://github.com/qwibitai/nanoclaw/pull/1675) validated the self-update pipeline.
*   **Review Lifecycle:** [PR #1508](https://github.com/qwibitai/nanoclaw/pull/1508) (Closed) addressed a memory leak by ensuring review agent containers are closed when drafts are approved or rejected.

## 4. Community Hot Topics
*   **Intelligent Model Routing:**
    The community is heavily focused on optimizing LLM costs and performance. There are three concurrent active issues ([#1679](https://github.com/qwibitai/nanoclaw/issues/1679), [#1681](https://github.com/qwibitai/nanoclaw/issues/1681), [#1682](https://github.com/qwibitai/nanoclaw/issues/1682)) and one active PR ([#1680](https://github.com/qwibitai/nanoclaw/pull/1680)) regarding "keyword-based message routing." The demand is for a "zero-cost" pre-turn router that directs requests (e.g., coding tasks to Sonnet, research to Gemini) before the main LLM processes the context.
*   **Multi-Protocol Support:**
    [PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624) (Open) is attracting attention for adding full E2EE support for Matrix, signaling a desire for secure, decentralized communication channels beyond Discord/Telegram.

## 5. Bugs & Stability
*   **High Severity (Operational):** [Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503) reports that `nanoclaw.dev` is currently serving an invalid SSL certificate. This poses a trust and access risk for users visiting the project homepage.
*   **Medium Severity (Data Loss):** [Issue #1576](https://github.com/qwibitai/nanoclaw/pull/1576) (Open) highlights a race condition where the container is marked "idle-warm" while tools are still running, causing messages to be lost. A fix is pending.
*   **Low Severity (UX):** [Issue #1665](https://github.com/qwibitai/nanoclaw/issues/1665) notes that `.claude/settings.local.json` is not gitignored, leading to potential user-specific config commits.

## 6. Feature Requests & Roadmap Signals
*   **Credential Proxying Safety:** [Issue #1669](https://github.com/qwibitai/nanoclaw/issues/1669) asks if the current Credential Proxy implementation risks triggering Anthropic's account anti-fraud systems, suggesting users want clearer safety guarantees or architectural changes to avoid bans.
*   **Python Performance:** [PR #1671](https://github.com/qwibitai/nanoclaw/pull/1671) proposes persisting the `uv` cache across container runs to avoid re-downloading the Python toolchain on every spin-up.
*   **Codex Integration:** [PR #963](https://github.com/qwibitai/nanoclaw/pull/963) seeks to add OpenAI Codex as an alternative agent engine, signaling a roadmap toward multi-vendor LLM support.

## 7. User Feedback Summary
*   **Pain Point - CI/CD Authentication:** [Issue #1672](https://github.com/qwibitai/nanoclaw/issues/1672) (Closed) documented frustration with using the Kiro CLI in headless CI/CD environments. The investigation concluded that SigV4 auth is not natively supported, forcing users to rely on workarounds.
*   **Pain Point - Session Isolation:** There is a strong demand for granular session control. Users are requesting isolated sessions within groups ([PR #1583](https://github.com/qwibitai/nanoclaw/pull/1583)) and specific handling for Discord threads ([PR #1677](https://github.com/qwibitai/nanoclaw/pull/1677)), implying that "one context per group" is insufficient for complex workflows.

## 8. Backlog Watch
*   **Infrastructure Debt:** [PR #541](https://github.com/qwibitai/nanoclaw/pull/541) (Open since Feb 26) proposes a "4-state lifecycle" (ACTIVE → IDLE → EVICTABLE → STOPPING) to improve queue management. It remains blocked or pending closure despite being a significant architectural improvement.
*   **Message Loss Race Condition:** [PR #1576](https://github.com/qwibitai/nanoclaw/pull/1576) (Open) addresses a critical bug regarding message loss during mid-query outputs but has not yet been merged.
*   **Refactoring:** [PR #1670](https://github.com/qwibitai/nanoclaw/pull/1670) identifies dead code in `src/db.ts` and `src/router.ts` that needs removal to maintain code hygiene.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-04-07

## 1. Today's Overview
NullClaw is currently in a highly active development phase focusing on backend infrastructure and API expansion. While user-facing stability has regressed with the latest update (v2026.3.21) causing shell tool failures for Homebrew users, the repository shows strong engineering momentum with 7 Pull Requests updated in the last 24 hours. The project is shifting focus toward "invisible" automation features—such as `HEARTBEAT.md` task processing—and building out a comprehensive REST Admin API for external control. The codebase remains dependency-free and lightweight, with recent fixes addressing environment variable handling for Docker containers.

## 2. Releases
**No new releases published today.**
*Note: Users experiencing issues are currently referencing the previous stable version, v2026.3.21.*

## 3. Project Progress
**Closed & Merged (Infrastructure & Tooling):**
*   **Environment Variables in Cron:** PR #692 was successfully closed, resolving an issue where `cron.zig` hardcoded `$HOME/.nullclaw/` instead of respecting the `NULLCLAW_HOME` variable. This fixes critical `AccessDenied` errors for users running NullClaw in Docker environments where the user is non-root.
    *   *Link:* [PR #692 - Fix NULLCLAW_HOME in cron.zig](https://github.com/nullclaw/nullclaw/pull/692)

*   **New Math Capabilities:** PR #716 was closed, adding a robust `calculator` tool with 20 mathematical operations (including statistical functions like median, stdev, and percentile).
    *   *Link:* [PR #716 - Add calculator tool](https://github.com/nullclaw/nullclaw/pull/716)

**In Progress (Active Development):**
*   **REST Admin API:** A major initiative to add a structured REST API for lightweight clients is underway (PRs #770, #771, #780). This will allow menubar apps and mobile dashboards to inspect gateway status, manage skills, mutate config, and view memory.
    *   *Link:* [PR #770 - Runtime Status & Config](https://github.com/nullclaw/nullclaw/pull/770)
*   **Heartbeat Automation:** PR #757 addresses a gap in the "heartbeat" engine, ensuring that tasks defined in `HEARTBEAT.md` actually trigger an agent dispatch rather than just being logged.
    *   *Link:* [PR #757 - Dispatch agent on heartbeat](https://github.com/nullclaw/nullclaw/pull/757)

## 4. Community Hot Topics
*   **Expanding the Control Plane (PRs #770, #771, #780):**
    There is a concentrated effort by contributor *vernonstinebaker* to build a complete REST Admin API. This reflects a community desire to manage NullClaw remotely via UIs (iOS, Menubar) rather than strictly through CLI or config files.
    *   *Link:* [PR #780 - REST Admin API](https://github.com/nullclaw/nullclaw/pull/780)

*   **"Invisible" Tasking (PR #757):**
    A significant discussion point is the utility of the `HEARTBEAT.md` file. Previously, tasks listed there were ignored by the daemon. The current PR proposes making the system react to these file changes automatically, signaling a move towards file-based agent orchestration.
    *   *Link:* [PR #757 - Heartbeat Tasks](https://github.com/nullclaw/nullclaw/pull/757)

## 5. Bugs & Stability
*   **[HIGH SEVERITY] Shell Tool Regression (Issue #779):**
    The "YOLO mode" installed via Brew is broken in the latest commits. The shell tool fails with a Docker-related error even when the user is *not* using Docker. This suggests a logic error where the application incorrectly detects the environment or attempts to load a Docker runtime when it shouldn't.
    *   *Status:* Open.
    *   *Link:* [Issue #779 - shell tool docker error](https://github.com/nullclaw/nullclaw/issues/779)

*   **[FIXED] JSON Parsing Crashes (PR #781):**
    A critical panic/sigsegv was identified when using the GLM-5 provider (via `infini-ai`), which returns `null` for `tool_calls` instead of an empty array. A fix is currently in open PR #781 to guard against these null values.
    *   *Status:* Fix proposed.
    *   *Link:* [PR #781 - Guard tool_calls against null](https://github.com/nullclaw/nullclaw/pull/781)

## 6. Feature Requests & Roadmap Signals
*   **REST Admin API:** The sequence of PRs (#770, #771, #780) strongly indicates that the next major feature set will be "Remote Management." Users will soon be able to check channel health, manage active agent sessions, and modify configuration via HTTP requests.
*   **Statistical Operations:** With the closing of PR #716, the roadmap for agent capabilities is expanding to include more complex data analysis and math natively.

## 7. User Feedback Summary
*   **Pain Points:** Users on Apple Silicon (Homebrew installs) are experiencing breakage with the shell tool immediately after the latest update. The specific error implies the code is erroneously trying to interact with Docker.
*   **Infrastructure Needs:** Docker users previously faced `AccessDenied` errors; the merging of PR #692 indicates the team is successfully resolving these environment-specific pathing issues.

## 8. Backlog Watch
*   **No stale items detected.** The repository appears responsive, with issues being created and addressed within short timeframes (1-2 days). The open PRs are part of an active sprint (REST API) rather than stalled work.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-04-07

## 1. Today's Overview
IronClaw is experiencing a surge of activity focused on **multi-tenancy security** and **architectural stabilization** following recent ownership model merges. The project has high velocity with 50 PRs and 33 issues updated in the last 24 hours. While the community is actively engaged, there are indicators of significant **regressions** affecting gateway users and tool execution, specifically around the new "ownership" model. The development team is actively triaging critical security issues regarding credential isolation in multi-tenant environments.

## 2. Releases
*No new releases published in the last 24 hours.*
*(Note: Version 0.24.1 was tagged recently but promotion is pending).*

## 3. Project Progress
**Features & Fixes Advanced:**
*   **Multi-Tenant Skill Isolation:** PR #2086 (Open) addresses a critical regression where gateway users could not see skills due to the new `resolve_user_project` logic. This PR aims to restore admin-installed skill visibility for regular users.
*   **SSE Event Ordering:** PR #2083 (Open) fixes a bug in `thread_ops.rs` where the "Done" status was sent before the actual response, causing Web UI messages to appear stuck until a refresh.
*   **WASM Channel Names:** PR #2051 (Closed/Merged) resolved a conflict preventing the use of "telegram" as a WASM channel name.
*   **Auth Flows:** PR #2050 (Open) continues work to stabilize auth readiness and gate flows for Engine v2, addressing late tool availability and credential scoping.

## 4. Community Hot Topics
*   **Critical Security: Cross-Tenant Credential Access**
    *   **Issue #2068 ([MT-1](https://github.com/nearai/ironclaw/issues/2068)):** Identifies a "Critical" vulnerability where sandbox jobs use the owner's secrets regardless of the job creator.
    *   **Issue #2069 ([MT-2](https://github.com/nearai/ironclaw/issues/2069)):** Highlights silent cross-tenant credential fallback to "default" in WASM tools.
    *   *Analysis:* The community is prioritizing the isolation of user data and secrets in the new ownership model.
*   **Feature: Feed System**
    *   **Issue #70 ([feat: Feed](https://github.com/nearai/ironclaw/issues/70)):** A persistent request (originating Feb) for a non-intrusive "Feed" system where agents can push updates without interrupting the user.
    *   *Analysis:* Users desire a more ambient, monitoring-style interaction model rather than purely chat-based interruptive responses.
*   **Trace-Driven Self-Improvement**
    *   **Issue #2082 ([RFC](https://github.com/nearai/ironclaw/issues/2082)):** A proposal to unify trace recording and feedback loops to drive agent policy updates.
    *   *Analysis:* Developers are looking to close the loop on agent learning, moving from static prompts to dynamic self-improvement.

## 5. Bugs & Stability
**Ranked by Severity:**
1.  **[Critical] Silent Cross-Tenant Credential Fallback (#2069, #2068):** Multi-tenant deployments risk leaking credentials between users or defaulting to unsafe fallbacks.
2.  **[High] Security Risk in Production WASM Wrapper (#2056):** Environment-variable-controlled API URL rewriters for Telegram/Slack were found in production code paths, posing a supply chain risk.
3.  **[High] Skills Invisible to Gateway Users (#2084):** A recent merge (`resolve_user_project`) broke skill visibility for non-owner users (Web UI, API, Telegram).
4.  **[Medium] Routines Fail with "Tools Disabled" (#1996):** Routine runs fail because tools are disabled in the execution context.
5.  **[Medium] Slack/Google OAuth Broken (#1992, #1998):** Google Calendar/Gmail OAuth fails with 400 errors; Slack integration is non-functional for users without a pre-existing app.

## 6. Feature Requests & Roadmap Signals
*   **Hot-Reload LLM Provider (#1350):** Users strongly want to switch LLM models/providers without restarting the entire process.
*   **Admin-Defined System Prompts (#2088):** Request for admins to set global system prompts for all users in a deployment.
*   **On-Chain Market Contract Source (#2077):** External request to publish the `market.near.ai` contract source to enable sovereign agents to interact without HTTP APIs.

## 7. User Feedback Summary
**Pain Points:**
*   **Setup Fragility:** Users report `onboard` failing with database errors (#846) and Ollama connectivity issues (#2081).
*   **Performance:** Complaints regarding slow response times (5-10s for "hello") in multi-tenant setups (#2089).
*   **Validation Frustrations:** Skills with spaces in names (e.g., "Mortgage Calculator") fail to install due to strict regex validation (#1999).
*   **Connectivity:** Issues with Notion setup causing the agent to hang (#2087).

**Satisfaction:**
*   Users are actively engaging with new features (Feed RFC, Abound demo), indicating high interest in the platform's expansion capabilities.

## 8. Backlog Watch
*   **Issue #1784 (E2E Coverage):** Requires tests for SSE reconnect failures and history rebuild. While updated recently, it tracks critical infrastructure stability gaps.
*   **Issue #846 (Onboard Fails):** Created March 10, active recently. A persistent issue affecting the "Day 0" experience for new users.
*   **PR #1446 (Aliyun Coding Plan):** Large, open PR adding Aliyun support. Indicates expansion into Chinese cloud markets but is currently stalled.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest**
**Date:** 2026-04-07
**Source:** github.com/netease-youdao/LobsterAI

### 1. Today's Overview
LobsterAI is currently in a high-intensity development phase focused on user experience (UX) refinement and infrastructure maintenance. Although no releases were published today, the project maintains high velocity with 11 Pull Requests updated in the last 24 hours. Development efforts are concentrated on overhauling the "Scheduled Task" (Cron) module to improve session management and fixing state management bugs in the coworking interface. The project is healthy, with active maintenance on dependency updates and a clear focus on addressing user-reported friction points in multi-task workflows.

### 2. Releases
*   **Status:** No new releases published in the last 24 hours.

### 3. Project Progress
*   **Core Features Advancing (Scheduled Tasks):** Significant UX restructuring is underway for the scheduled task module.
    *   **UI Overhaul:** Transitioning from a table layout to a **card-based grid** system to unify the visual style with other parts of the application ([PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488)).
    *   **History Management:** Implementing logic to group and collapse multiple execution records of the same task, preventing sidebar clutter ([PR #1449](https://github.com/netease-youdao/LobsterAI/pull/1449)).
    *   **Notification Logic:** Reworking the notification delivery channel to ensure updates persist correctly and adding local macOS notification support ([PR #1490](https://github.com/netease-youdao/LobsterAI/pull/1490), [PR #1489](https://github.com/netease-youdao/LobsterAI/pull/1489)).
    *   **Developer Experience:** Adding a "Test Task" button to the creation form to allow immediate validation of instructions before saving ([PR #1486](https://github.com/netease-youdao/LobsterAI/pull/1486)).
*   **State Management Fixes:** Addressing a logic flaw where skill selection states were globally shared instead of being scoped to individual chat sessions ([PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494)).
*   **Infrastructure:** Updating core dependencies, including a major bump of Electron to v41.1.1 and Anthropic SDKs, alongside GitHub Actions maintenance ([PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277), [PR #1278](https://github.com/netease-youdao/LobsterAI/pull/1278), [PRs #1491-1493](https://github.com/netease-youdao/LobsterAI/pull/1491)).

### 4. Community Hot Topics
*   **Scheduled Task Usability:** The highest activity revolves around fixing and enhancing the scheduled task (Cron) feature.
    *   *Underlying Need:* Users running frequent daily tasks are frustrated by the "noise" created in their session lists, demanding better organization and visual distinction between active chats and automated background tasks.
*   **Context State Isolation:**
    *   *Link:* [PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494)
    *   *Underlying Need:* Users expect tools/skills selected in one project context to remain isolated from other sessions to prevent cross-contamination of workflows.

### 5. Bugs & Stability
*   **Data Inconsistency in Scheduled Tasks:** A bug where editing a task's notification channel (e.g., switching from Feishu to "None") fails to update the display on the task details page.
    *   *Severity:* Medium (User experience / Data display).
    *   *Fix Status:* Fix proposed in [PR #1490](https://github.com/netease-youdao/LobsterAI/pull/1490).
*   **Notification Logic Errors:** The system behaves incorrectly regarding local notifications; tasks set to "No Notification" still trigger macOS alerts, while tasks set to "Local Notification" remain silent.
    *   *Severity:* High (Annoyance/Interruption).
    *   *Fix Status:* Fix proposed in [PR #1489](https://github.com/netease-youdao/LobsterAI/pull/1489).
*   **Global State Leakage:** Selected skills persist globally when switching sessions, causing unexpected behavior in new conversations.
    *   *Severity:* Medium.
    *   *Fix Status:* Fix proposed in [PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494).

### 6. Feature Requests & Roadmap Signals
*   **Search & Filtering:** The addition of search bars and date range filters for task history ([PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488)) signals a roadmap priority towards making LobsterAI viable for heavy-duty, long-term productivity usage.
*   **"Test Before Save" Workflow:** The implementation of the "Test Task" button ([PR #1486](https://github.com/netease-youdao/LobsterAI/pull/1486)) indicates a focus on "Developer Experience" (DX) within the app, reducing the friction of iterating on AI agent prompts.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **UI Clutter:** The "flat" session list becomes unusable when automated tasks run frequently (e.g., daily), burying actual human conversations. (Addressed by PR #1449).
    *   **Tool Persistence:** Users are annoyed that selecting a tool for a specific job "bleeds over" into other unrelated chats. (Addressed by PR #1494).
    *   **Debugging Difficulty:** The inability to quickly test a scheduled task without saving it and navigating through menus was a major friction point. (Addressed by PR #1486).

### 8. Backlog Watch
*   **Dependency Management:** Several Dependabot PRs (e.g., Electron bumps) have been open since early April but are seeing active updates today ([PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)). These are critical for stability and should be merged soon to avoid technical debt.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-04-07

## 1. Today's Overview
Moltis is experiencing a high-velocity development cycle, with 11 issues and 9 pull requests updated in the last 24 hours alongside a new release (20260406.04). The project is rapidly expanding its "agent-to-agent" and observability capabilities, evidenced by new crates for webhooks and external agent bridges. While the merge rate is healthy (6 merged/closed PRs), there is a noticeable uptick in configuration-related bugs and network connectivity issues, particularly regarding the Telegram and Matrix integrations. The codebase is actively refactoring for modularity, adding foundational structures for generic webhooks and CLI agent bridges.

## 2. Releases
**New Release: 20260406.04**
- **Changes**: Addressed critical Docker build configurations and feature inclusion.
- **Migration Notes**: Users deploying via Docker should verify that integrations like **Matrix**, **Firecrawl**, **Ngrok**, and **Slack** are now active, as they were previously missing due to a `--no-default-features` flag omission ([PR #576](https://github.com/moltis-org/moltis/pull/576)).

## 3. Project Progress
Several features advanced from proposal to implementation or fix status:
- **Infrastructure**: Merged PR for **auto-cleanup of orphaned sessions and sandbox containers** ([PR #564](https://github.com/moltis-org/moltis/pull/564)), improving long-running instance hygiene.
- **Integrations**: Fixed Copilot Enterprise token routing to use proxy endpoints correctly ([PR #355](https://github.com/moltis-org/moltis/pull/355)), resolving 421 errors.
- **Documentation/Branding**: Closed a PR enhancing the website with a "Works with your stack" section, highlighting supported providers and channels ([PR #567](https://github.com/moltis-org/moltis/pull/567)).
- **Desktop App**: Resolved an OAuth flow issue specific to the macOS Desktop App for Codex ([Issue #549](https://github.com/moltis-org/moltis/issues/549)).

## 4. Community Hot Topics
- **[Feature] Matrix Support** ([Issue #233](https://github.com/moltis-org/moltis/issues/233))
  - **Activity**: 5 thumbs up, 4 comments. Originally opened in Feb, updated today.
  - **Analysis**: There is strong user demand for Matrix protocol support. While code exists, users are facing resolution errors when trying to enable it in the config, indicating a gap between code availability and user-facing functionality.

- **[Feature] Generic Webhook Ingress** ([PR #575](https://github.com/moltis-org/moltis/pull/575))
  - **Activity**: Currently open, significant code addition (new crate).
  - **Analysis**: This proposal aims to turn Moltis into an event-driven automation hub by ingesting webhooks from GitHub, GitLab, Stripe, etc. The community is likely interested in Moltis' potential to act not just as a chatbot, but as an automation backend.

## 5. Bugs & Stability
**High Severity (Connectivity/Auth):**
- **[Bug] Login fails on bind change** ([Issue #565](https://github.com/moltis-org/moltis/issues/565)): Users experience systematic login failures when binding to `0.0.0.0` or local LAN IPs. This suggests a hard-coded dependency on localhost in the auth flow or callback URL generation. *No fix PR yet.*

**Medium Severity (Integration Logic):**
- **[Bug] Telegram channel account not found** ([Issue #572](https://github.com/moltis-org/moltis/issues/572)): Affects core messaging functionality.
- **[Bug] Matrix config resolution** ([Issue #569](https://github.com/moltis-org/moltis/issues/569)): Despite adding `matrix` to the proposed channels, it fails to resolve. This is likely a configuration parsing or validation error.

**Low Severity / Fixed:**
- **[Bug] Docker missing features** ([PR #576](https://github.com/moltis-org/moltis/pull/576)): Docker builds were silently excluding default features. **Status: Closed/Fixed.**

## 6. Feature Requests & Roadmap Signals
Based on today's activity:
- **External Agents Bridge** ([PR #566](https://github.com/moltis-org/moltis/pull/566)): High priority. Foundational code is being written to allow Moltis to chat with CLI agents like Claude Code or ACP.
- **PDF Support** ([Issue #563](https://github.com/moltis-org/moltis/issues/563)): Users want the bot to ingest and parse PDF files.
- **Prompt Caching** ([Issue #571](https://github.com/moltis-org/moltis/issues/571)): Request to cache prompts to reduce latency and API costs.
- **Model Routing Per Topic** ([Issue #574](https://github.com/moltis-org/moltis/issues/574)): Users want granular control to route specific chat topics to different LLMs.

## 7. User Feedback Summary
Users are actively testing the edges of the platform, particularly regarding network configuration and new channels. Feedback indicates that while the core features work, the *configuration* and *onboarding* for new channels (Matrix, Telegram) are fragile. There is a clear desire for the system to be more modular—supporting PDFs, caching, and routing logic to tailor the AI behavior to specific workflows.

## 8. Backlog Watch
- **[Observability] Langfuse Tracing** ([PR #535](https://github.com/moltis-org/moltis/pull/535)): Open since April 1st. This PR adds critical debugging capabilities (correlation IDs, tracing). It remains open and needs review to be merged.
- **[Feature] External Agents Bridge** ([PR #566](https://github.com/moltis-org/moltis/pull/566)): Currently open. As this is a major architectural addition, it requires careful attention to ensure it doesn't introduce stability issues.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-07

## 1. Today's Overview
CoPaw is currently experiencing a **high-velocity development phase** focused on stabilizing the "Hot Reload" and "MCP (Model Context Protocol)" integration features. The project shows high activity with 28 updated issues and 15 active pull requests in the last 24 hours. While feature addition (e.g., WhatsApp channel, video memory compaction) is progressing, there is a noticeable spike in **stability bugs**, particularly regarding resource leaks (CPU spikes), client lifecycle management, and file I/O security. The community is actively engaged in triaging these issues, with multiple first-time contributors submitting patches.

## 2. Latest Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
*Merged/Closed Pull Requests (Source: Latest PRs)*

*   **🟢 Closed: Feature(provider) - Support CoPaw Local Update** (#2889)
    *   **Change:** Implemented support for updating Llama.cpp directly from the CoPaw Local page. Fixed parsing errors related to `MAX_REPETITION_THRESHOLD`.
    *   **Impact:** Improves user experience for managing local models without manual file replacement.
*   **🟢 Closed: fix(agents) - Cache MCP client registration** (#2998)
    *   **Change:** Introduced `_MCP_REGISTRY_CACHE` to prevent re-initializing MCP clients on every request.
    *   **Impact:** Addresses performance degradation and `CancelledError` exceptions caused by repeated `list_tools()` calls during query handling.
*   **🟢 Closed: Miscellaneous - Logo related** (#2974)
    *   **Change:** Internal asset update.

*Features Advancing (Open PRs)*
*   **WhatsApp Channel:** A full WhatsApp channel implementation via `neonize` (#2962) is in review, promising connection without Meta Business APIs.
*   **Memory Optimization:** A PR (#2997) aims to compact video/image blocks in conversation history to fix `50MB DataBufferLimitException` errors.
*   **Frontend UX:** Improvements to Discord code fencing (#2976) and QQ Bot local image support (#2977) are pending.

## 4. Community Hot Topics
*Based on engagement (Comments & Reactions) from the last 24h.*

1.  **[#2888 High CPU usage / power consumption](https://github.com/agentscope-ai/CoPaw/issues/2888)** (9 comments)
    *   **Topic:** CoPaw consumes ~100% CPU when idle due to a busy loop in AnyIO cancellation.
    *   **Analysis:** This is the highest-impact stability issue. Users are concerned about the efficiency of the event loop, suggesting the async architecture needs optimization for idle states.
2.  **[#2955 无法安装llama.cpp (Cannot install llama.cpp)](https://github.com/agentscope-ai/CoPaw/issues/2955)** (8 comments)
    *   **Topic:** Installation progress completes, but the model list fails to appear.
    *   **Analysis:** Highlights friction in the local model setup experience. Users expect a "download and use" flow but are encountering silent failures or state desynchronization.
3.  **[#2418 Skills-hub management page](https://github.com/agentscope-ai/CoPaw/issues/2418)** (6 comments)
    *   **Topic:** Request for a centralized "Skills Hub" to download/tag skills faster.
    *   **Analysis:** Strong demand for better ecosystem discovery. Current skill management is viewed as manual and tedious.
4.  **[#2960 MCP Client Not Cleaned Up / CPU Spike](https://github.com/agentscope-ai/CoPaw/issues/2960)** (3 comments)
    *   **Topic:** Hot reload causes double initialization of MCP clients, leading to persistent CPU spikes.
    *   **Analysis:** Corroborates #2888, indicating that state cleanup during configuration reloads is a systemic architectural challenge.

## 5. Bugs & Stability
*Critical & High-Severities Reported Today*

*   **🔴 CRITICAL: Security Bypass in File Guard** (#2967)
    *   **Issue:** `execute_shell_command` may bypass the File Guard restrictions, allowing agents to access protected directories even when `read_file`/`write_file` are blocked.
    *   **Status:** A fix PR (#2978) is **OPEN** attempting to resolve shell path detection.
*   **🔴 HIGH: Hot Reload Crashes Channels** (#2960, #2994)
    *   **Issue:** Saving configuration triggers a reload that drops connections (Telegram, WhatsApp, MCP) or causes them to hang indefinitely.
    *   **Status:** Fix PRs #2994 (Channels) and #2979 (MCP) are **OPEN**.
*   **🟠 HIGH: Race Condition in Chat Cancel** (#2987)
    *   **Issue:** Clicking "Stop" on the web UI fails to interrupt the agent; subsequent messages are ignored, and the old response finishes.
    *   **Status:** Fix PR #2987 is **OPEN**, identifying that `CancelledError` is being swallowed.
*   **🟠 MEDIUM: Multilingual Garbled Output** (#2992)
    *   **Issue:** Agents output random mixed languages (Chinese/Cyrillic) when context limits are exceeded.
*   **🟠 MEDIUM: Windows Client Crashes** (#2911)
    *   **Issue:** Windows client closes automatically after a few hours of inactivity.
*   **🟠 MEDIUM: Tool Calling Failure (Ollama)** (#2988)
    *   **Issue:** Ollama models (gemma4, qwen2.5) cannot invoke tools due to parsing issues.

## 6. Feature Requests & Roadmap Signals
*Signals from user requests*

1.  **Ecosystem & Skills Management:** Users are loudly requesting a **Skills Hub/Marketplace** (#2418, #2361). The current manual download method is seen as a barrier to entry.
2.  **Tag-Based Skill Indexing:** Feature #2323 requests adding **tags** to skills for faster retrieval, reducing reliance on slow LLM semantic search.
3.  **UX Improvements:** Requests for Markdown rendering in user input (#2975) and customizable UI titles (#3000) suggest users are running multiple instances and need better differentiation.
4.  **POSIX Tools on Windows:** Request #2986 asks for `grep`/`ls` support on Windows (via Cygwin/MSYS), indicating a desire for cross-platform scripting consistency.

## 7. User Feedback Summary
*Pain Points & Sentiments*

*   **Frustration with Stability:** Multiple reports of "closing automatically" (#2911), "CPU at 100%" (#2888), and "Stop button not working" (#2991) indicate **production readiness concerns**.
*   **"Toy vs. Tool":** User feedback in #2902 explicitly states that without stable skill invocation and app connections, CoPaw remains a "toy."
*   **Confusion over Local Setup:** The issue regarding Llama.cpp installation (#2955) and the "Local vs. GPU" confusion (#2985) suggests the UI flow for setting up local inference is not intuitive.
*   **Platform-Specific Issues:** Windows users are facing specific hurdles with input methods (red underline #2970) and file paths.

## 8. Backlog Watch
*Items needing attention*

*   **#2323 (Tag-based Skill Indexing):** Open since Mar 26, only 4 comments. This is a high-value architectural change that seems to have stalled.
*   **#2032 (Global Skills Directory):** Opened Mar 21, recently closed but highlights a ongoing structural limitation in multi-agent workflows.
*   **#2361 (Skill Ecosystem):** Open since Mar 26. Strong user desire (👍 2) but no visible implementation PR yet.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# Project Digest: ZeptoClaw (2026-04-07)

## 1. Today's Overview
ZeptoClaw is currently experiencing a high-velocity development phase with a focus on infrastructure stability and API compatibility. The project shows strong engagement, with **8 Pull Requests updated** in the last 24 hours compared to only **4 Issues**, indicating that the team is actively implementing solutions rather than just discussing problems. The workflow is heavily focused on "Fit and Finish," with a major push to fix bugs related to the Telegram interface, CLI tooling, and context management. No new releases were published today, suggesting the team is stabilizing the current development branch before a future deployment.

## 2. Releases
**No new releases published in the last 24 hours.**

## 3. Project Progress
The core architecture is advancing significantly, particularly in API compatibility and context management. Key areas of progress include:

*   **API Standardization:** Work is ongoing to fully support OpenAI-compatible tool calling via `/v1/chat/completions` ([PR #489](https://github.com/qhkm/zeptoclaw/pull/489)), ensuring ZeptoClaw can function as a drop-in replacement for standard LLM APIs.
*   **Context Management:** A major overhaul of the context compaction system ([PR #460](https://github.com/qhkm/zeptoclaw/pull/460)) is in progress to prevent token overflow errors using a "multi-layered defense-in-depth strategy."
*   **Tooling & Routing:** Fixes for vendor-prefixed model routing ([PR #468](https://github.com/qhkm/zeptoclaw/pull/468)) and CLI tool parameter escaping ([PR #467](https://github.com/qhkm/zeptoclaw/pull/467)) are moving forward.
*   **Browser Automation:** Integration of `agent-browser` ([PR #459](https://github.com/qhkm/zeptoclaw/pull/459)) continues to advance, promising headless browser capabilities with SSRF protection.

## 4. Community Hot Topics
*   **Concurrency is the Top Demand:** The most significant user-requested feature is a **true concurrent/non-blocking design** ([Issue #486](https://github.com/qhkm/zeptoclaw/issues/486)). Users are frustrated that long-running jobs block the agent from responding to other inputs. The discussion references `spacedriveapp/spacebot` as a potential implementation model.
*   **OpenAI API Compatibility:** Developers are actively working to close gaps in the `/v1/chat/completions` implementation, specifically regarding tool calls in streaming mode ([Issue #488](https://github.com/qhkm/zeptoclaw/issues/488), [PR #489](https://github.com/qhkm/zeptoclaw/pull/489)).

## 5. Bugs & Stability
The project has addressed several critical stability issues regarding external integrations and messaging:

*   **Telegram Silent Failures (RESOLVED):** A critical bug where research tasks via Telegram would silently fail due to HTML rendering errors and message length limits has been fixed ([Issue #461](https://github.com/qhkm/zeptoclaw/issues/461), [PR #462](https://github.com/qhkm/zeptoclaw/pull/462)). The solution involves message chunking and plaintext fallbacks.
*   **CLI Tool Breaking (IN PROGRESS):** Custom tools using CLI wrappers (e.g., passing `{{args}}`) were breaking due to aggressive shell escaping ([Issue #466](https://github.com/qhkm/zeptoclaw/issues/466)). A fix introducing a `raw_string` parameter type is currently in review ([PR #467](https://github.com/qhkm/zeptoclaw/pull/467)).
*   **Feature UX:** Attempts to use disabled features (e.g., `panel`) now result in helpful error messages rather than raw parser errors ([PR #487](https://github.com/qhkm/zeptoclaw/pull/487)).

## 6. Feature Requests & Roadmap Signals
*   **Multitasking/Concurrency:** With [Issue #486](https://github.com/qhkm/zeptoclaw/issues/486) labeled as a "Large" scope, it is likely a major target for the next significant version, moving ZeptoClaw from a single-threaded agent to a concurrent task manager.
*   **Browser Use:** The [BrowserTool PR](https://github.com/qhkm/zeptoclaw/pull/459) signals that standard "agentic web browsing" is close to becoming a core feature.

## 7. User Feedback Summary
Users are experiencing "growing pains" as the agent scales to handle complex, long-running tasks. The primary pain points identified are:
*   **Responsiveness:** The agent "going silent" during long tasks is the biggest frustration ([#486](https://github.com/qhkm/zeptoclaw/issues/486)).
*   **Robustness:** Integrations like Telegram and CLI wrappers are fragile; users expect these to handle edge cases (long messages, complex arguments) without crashing or failing silently.

## 8. Backlog Watch
*   **[Issue #486: True concurrent/non-blocking design](https://github.com/qhkm/zeptoclaw/issues/486)** - This is the defining technical debt item for the project. While complex, it is essential for ZeptoClaw to be used as a personal assistant in real-time scenarios.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw / RivonClaw Project Digest
**Date:** 2026-04-07
**Status:** Low Activity | Stable Release | Localization Focus

---

### 1. Today's Overview
EasyClaw (branded as RivonClaw in releases) is currently experiencing low development velocity, with no issues updated or closed in the last 24 hours. However, the project remains active on the maintenance front, evidenced by a new patch release (v1.7.8) and ongoing internationalization efforts. The recent activity suggests a focus on expanding accessibility and ensuring platform compatibility (specifically macOS) rather than core feature development.

### 2. Releases
**[v1.7.8] RivonClaw v1.7.8**
*   **Impact:** Minor Patch.
*   **Key Changes:**
    *   **Platform Stability:** Specifically addressed macOS Gatekeeper issues. Users on macOS may see the app as "damaged" due to the lack of a code signature. The release notes include detailed manual instructions (Terminal commands) to bypass this security restriction.
    *   **Note:** This appears to be a re-release or documentation update to assist users with installation on macOS strict security modes.
*   **Migration:** No migration required.

### 3. Project Progress
**Pull Requests Updated:**
*   **[PR #21: feat(i18n): add 5 new languages](https://github.com/gaoyangz77/rivonclaw/pull/21)** (Open)
    *   **Progress:** Significant expansion of localization support.
    *   **Details:** The PR adds translation files for Traditional Chinese (zh-TW), Japanese (ja), Korean (ko), Vietnamese (vi), and Hindi (hi).
    *   **Scope:** It covers 1,333 translation keys, ensuring full parity with the English baseline. This brings the total supported languages to 7, indicating a strong push towards Asian market accessibility.

### 4. Community Hot Topics
*   **Top Discussion:** [PR #21 - Internationalization](https://github.com/gaoyangz77/rivonclaw/pull/21)
    *   **Underlying Need:** There is a clear demand to lower the barrier to entry for non-English speakers. By covering major Asian languages (CJKV + Hindi), the maintainers are responding to a potentially large, underserved user base.
    *   **Activity:** Recently updated (2026-04-06), indicating active translation work or review processes are happening despite the lack of merged code.

### 5. Bugs & Stability
*   **macOS Installation Blocker:** The release notes for v1.7.8 explicitly flag a known issue where macOS blocks the app due to missing code signing ("'RivonClaw' is damaged and can't be opened").
    *   **Severity:** Medium (prevents launch without workaround).
    *   **Status:** A workaround is provided in the release notes, but a permanent fix (code signing) is not explicitly mentioned as resolved in this patch.

### 6. Feature Requests & Roadmap Signals
*   **Localization:** With PR #21 open, the immediate roadmap is clearly defined as "Globalization." We predict the next minor version will likely include these 5 new languages officially.
*   **Platform Signing:** The recurring need for terminal workarounds on macOS suggests that obtaining a developer certificate or signing the build process is a high-priority infrastructure task to improve user experience (UX).

### 7. User Feedback Summary
*   **Pain Points:** macOS users face friction during installation due to OS-level security warnings.
*   **Sentiment:** While there is no direct text feedback from issues today, the effort put into translating 1,333 keys suggests high commitment to user accessibility.

### 8. Backlog Watch
*   **Maintenance Queue:** [PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21) is the primary item awaiting merge. Opened in March and recently updated, it is currently the main driver of project versioning. No stalled issues were reported in the current data set.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*