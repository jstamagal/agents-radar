# OpenClaw Ecosystem Digest 2026-03-25

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-25 00:11 UTC

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

Here is the project digest for **OpenClaw** as of **2026-03-25**.

### 1. Today's Overview
OpenClaw is experiencing an extreme surge in maintenance activity, with **500 issues and 500 PRs** updated in the last 24 hours. The project is currently in a volatile state following the `2026.3.22` and `2026.3.23` releases, with a massive influx of regression reports related to packaging (missing UI assets), plugin compatibility (WeChat, WhatsApp, Feishu), and OAuth stability. While no new release was published today, the repository is buzzing with fixes targeting the "Control UI" disaster and platform-specific channel crashes. The community is highly engaged, voting heavily on critical bugs, though some friction is evident regarding platform support priorities.

### 2. Latest Releases
**No new releases published today.**
*Current context: The project is stabilizing the `2026.3.22` - `2026.3.23` branches.*

### 3. Project Progress
**Merged & Closed PRs:**
*   **Security Response:** A phishing scam warning ([#49836](https://github.com/openclaw/openclaw/issues/49836)) was quickly closed by moderators, protecting the user base.
*   **Continuity Improvements:** PR [#40377](https://github.com/openclaw/openclaw/pull/40377) advanced hardening for message threading and subagent delivery.
*   **Pipeline Hygiene:** The release pipeline is being actively patched to prevent future "missing asset" disasters ([#53373](https://github.com/openclaw/openclaw/pull/53373)).

**Active Development:**
*   **GTK4 Linux App:** Major progress on the native Linux companion app using GTK4/libadwaita ([#53905](https://github.com/openclaw/openclaw/pull/53905)), addressing the long-standing request for Linux support.
*   **Tool Calling:** Standardization of ReAct fallback for local models ([#53948](https://github.com/openclaw/openclaw/pull/53948)).
*   **Migration Tools:** A new `migrate export/import` CLI feature is being introduced to facilitate cross-device setup ([#53520](https://github.com/openclaw/openclaw/pull/53520)).

### 4. Community Hot Topics
*   **[OPEN] Enhancement: Linux/Windows Clawdbot Apps [#75](https://github.com/openclaw/openclaw/issues/75)**
    *   **Stats:** 48 Comments, 65 👍
    *   **Analysis:** A recurring demand for parity with macOS/iOS. The progress on PR [#53905](https://github.com/openclaw/openclaw/pull/53905) (Linux GTK4) is a direct response to this, but Windows remains unaddressed.
*   **[CLOSED] Bug: Control UI assets missing (2026.3.22) [#52808](https://github.com/openclaw/openclaw/issues/52808)**
    *   **Stats:** 30 Comments, 61 👍
    *   **Analysis:** The most critical failure of the week. The `dist/control-ui/` directory was missing from the npm package, effectively breaking the web interface for upgraders.
*   **[OPEN] Bug: WhatsApp plugin crashes (v2026.3.23) [#53247](https://github.com/openclaw/openclaw/issues/53247)**
    *   **Stats:** 11 Comments, 10 👍
    *   **Analysis:** Users are frustrated that core plugins (WhatsApp, WeChat) are breaking in minor point releases due to incomplete bundling.
*   **[OPEN] Feature: Long-Term Memory & Knowledge Management [#50096](https://github.com/openclaw/openclaw/issues/50096)**
    *   **Stats:** 10 Comments
    *   **Analysis:** Philosophical debate on the "Driftnet" memory system. Users feel the agent's memory is too transient, fighting against the core promise of a continuous AI partner.

### 5. Bugs & Stability
**Severity: Critical (Regressions & Crashes)**
*   **Control UI 503 Error:** Upgrade to `2026.3.22` breaks the dashboard ("assets not found") ([#52808](https://github.com/openclaw/openclaw/issues/52808), [#52823](https://github.com/openclaw/openclaw/issues/52823)). **Fix:** Release pipeline updated in [#53373](https://github.com/openclaw/openclaw/pull/53373).
*   **Plugin System Fragmentation:**
    *   **WeChat:** Incompatible with `2026.3.22+` due to ESM `openclaw/plugin-sdk` resolution errors ([#52885](https://github.com/openclaw/openclaw/issues/52885)).
    *   **WhatsApp:** Crashes with "missing light-runtime-api" ([#53247](https://github.com/openclaw/openclaw/issues/53247)).
    *   **Feishu:** `buildChannelConfigSchema is not a function` ([#52081](https://github.com/openclaw/openclaw/issues/52081)).
*   **Memory Search Broken:** QMD memory index returns 0 files indexed in `2026.3.23-2` ([#53955](https://github.com/openclaw/openclaw/issues/53955)).

**Severity: High (Behavioral)**
*   **OAuth Race Conditions:** Token refresh failures causing "refresh_token_reused" errors and spurious failovers ([#26322](https://github.com/openclaw/openclaw/issues/26322), [#53317](https://github.com/openclaw/openclaw/issues/53317)).
*   **Discord Instability:** WebSocket code 1006 crashes the entire gateway instead of reconnecting ([#53644](https://github.com/openclaw/openclaw/issues/53644)).
*   **Context Trimmer:** Splits `tool_use`/`tool_result` pairs, causing API rejections ([#52024](https://github.com/openclaw/openclaw/issues/52024)).

### 6. Feature Requests & Roadmap Signals
*   **Cross-Device Migration:** High demand for easier portability. A dedicated `migrate` command is currently in PR ([#53520](https://github.com/openclaw/openclaw/pull/53520)), signaling this will likely land in the next version.
*   **Tool Visibility:** Users are confused about what tools an agent actually has access to. PR [#54088](https://github.com/openclaw/openclaw/pull/54088) adds a `/tools` runtime view, suggesting this will be included soon.
*   **QQ Channel:** Work is underway to add native QQ Bot support ([#52986](https://github.com/openclaw/openclaw/pull/52986)), expanding Asian market reach.
*   **Passive Group Monitoring:** WhatsApp "monitor mode" for logging group chats without replying is in development ([#53190](https://github.com/openclaw/openclaw/pull/53190)).

### 7. User Feedback Summary
*   **Pain Points:** The update process (`openclaw update`) is currently viewed as risky due to the high frequency of regressions in the `.22` and `.23` releases. Users are specifically annoyed by the "silent" failure of the Control UI build step.
*   **Platform Needs:** Windows users feel neglected; Linux users are validating the new GTK4 efforts.
*   **Plugin Ecosystem:** There is frustration regarding the lack of API stability for third-party plugins (WeChat/WhatsApp breaking), indicating a need for better internal abstraction layers.

### 8. Backlog Watch
*   **SSRF Policy Conflicts:** `web_fetch` blocks legitimate requests from Clash/mihomo fake-ip ranges ([#25215](https://github.com/openclaw/openclaw/issues/25215)). Users report this breaks many development setups.
*   **Stale Workspace Skills:** Custom skills in `extraDirs` are not discovered correctly since `2026.2.3-1` ([#10386](https://github.com/openclaw/openclaw/issues/10386)). This is a lingering, high-impact bug for power users.
*   **Fallback Logic:** The fallback chain does not traverse across different providers (e.g., moving from OpenAI to Anthropic on 429), it only rotates profiles within the same provider ([#23829](https://github.com/openclaw/openclaw/issues/23829)).

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis Report
**Date:** 2026-03-25
**Analyst:** Senior Open Source Ecosystem AI Agent
**Scope:** 11 Active Projects (OpenClaw, NanoBot, ZeroClaw, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, TinyClaw, Moltis, CoPaw, ZeptoClaw, EasyClaw)

---

## 1. Ecosystem Overview
The open-source AI agent ecosystem is currently undergoing a phase of **rapid stabilization and feature divergence** following a volatile week of releases. While activity remains high across the board—driven largely by the surge in multi-modal (voice/vision) capabilities and enterprise readiness efforts—the community is shifting focus from pure feature velocity to **infrastructure hardening**. A critical landscape trend is the industry-wide struggle with **regression bugs** in packaging (OpenClaw, LobsterAI) and **resource management** (CoPaw, NanoBot), indicating that "Agentic" architectures are hitting scaling walls similar to early cloud computing. Simultaneously, a clear bifurcation is emerging: frameworks prioritizing "core autonomy" (Rust-based systems) versus those prioritizing "integration & experience" (JS/TypeScript wrappers).

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Grade |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **500** | **500** | Stabilizing (`.22/.23`) | 🔥 Volatile |
| **CoPaw** | 50 | 50 | v0.2.0 (Major Regression) | ⚠️ Unstable |
| **PicoClaw** | 11 | **68** | Nightly (Unstable) | ⚡ Rapid |
| **NanoBot** | 21 | 51 | Security Patching | 🚨 Critical Alert |
| **Moltis** | Low | 17 (Merged) | No Release ( accruing ) | 🟢 Healthy |
| **IronClaw** | Low | 49 | No Release ( accruing ) | 🟢 Healthy |
| **ZeptoClaw** | Low | 29 | v0.8.2 (Stable) | 🟢 Stable |
| **TinyClaw** | 0 | 8 (Merged) | v0.0.19 (Hotfix) | 🟢 Stable |
| **ZeroClaw** | 50 | 50 | v0.6.2 (Recovering) | 🟡 Moderate |
| **LobsterAI** | 23 | 50 | v2026.3.24 (Buggy) | 🟡 Moderate |
| **NanoClaw** | 13 | 50 | No Release ( accruing ) | 🟡 Moderate |
| **NullClaw** | 0 | 6 | No Release | 🔵 Quiet |
| **EasyClaw** | 0 | 3 | No Release | 🔵 Quiet |

## 3. OpenClaw's Position
**OpenClaw** remains the **de facto market leader** in terms of raw adoption and community pressure, evidenced by the massive volume of activity (500 issues/PRs) compared to peers. Its primary advantage is its **extensive plugin ecosystem** (WeChat, Feishu, WhatsApp), which competitors like **IronClaw** and **NanoBot** are still trying to replicate or integrate. However, OpenClaw is currently suffering from a "technical debt crisis," with recent releases (`.22/.23`) causing significant regressions in packaging and UI stability. Peers like **ZeroClaw** (Rust-based) are attacking OpenClaw's weakness by marketing "memory safety" and "binary efficiency," while **PicoClaw** and **LobsterAI** are competing on UI polish and "Voice-first" interaction models. OpenClaw’s distinct technical approach relies on a complex Node.js/TypeScript monorepo, which offers flexibility but introduces the "dependency hell" (e.g., missing UI assets) currently plaguing users.

## 4. Shared Technical Focus Areas
Cross-project analysis indicates three converging requirements for the next generation of AI agents:

*   **Multi-Modal / Voice Interfaces:**
    *   *Signal:* **PicoClaw** is aggressively pursuing TTS/ASR (PR #1939); **LobsterAI** and **CoPaw** users are requesting voice input (#722, #2220); **ZeptoClaw** is adding photo handling for Telegram.
    *   *Requirement:* Agents are no longer text-only; they must handle audio streams and vision inputs natively.

*   **Cross-Platform "App" Availability:**
    *   *Signal:* **OpenClaw** is racing to build GTK4 (Linux) apps; **ZeptoClaw** and **Moltis** are hardening Docker/ARM support; **ZeroClaw** users are demanding FreeBSD/Windows parity.
    *   *Requirement:* Users demand agents run anywhere—servers (Docker), desktops (native apps), and edge devices (ARM/Raspberry Pi).

*   **Agent-to-Agent (A2A) Communication:**
    *   *Signal:* **ZeroClaw** is implementing "NamespacedMemory" and A2A protocols; **IronClaw** is building "Multi-Tenancy" (PR #1626); **NanoClaw** is exploring "Log Analyzer" skills.
    *   *Requirement:* Users want to deploy teams of agents that collaborate, rather than a single monolithic assistant.

*   **Memory & State Persistence:**
    *   *Signal:* **Moltis** and **NullClaw** are reworking memory backends (Knowledge Graphs/SQL); **LobsterAI** is fighting memory corruption bugs; **NanoBot** is fixing token usage in heartbeats.
    *   *Requirement:* Long-running agents need reliable, non-corrupting state management.

## 5. Differentiation Analysis

| Feature Focus | Projects | Target Audience |
| :--- | :--- | :--- |
| **System-Level Autonomy** | **ZeroClaw**, **NanoClaw**, **NullClaw** | Power users, DevOps, Engineers. Focus on terminal REPL, code execution, and file manipulation. ZeroClaw uses Rust for safety/speed. |
| **Consumer/Social Integration** | **OpenClaw**, **PicoClaw**, **TinyClaw** | General users, Community managers. Focus on WeChat/Discord/Telegram connectivity. OpenClaw leads here. |
| **Enterprise/Workspace** | **IronClaw**, **CoPaw** | Teams, Enterprises. Focus on RBAC (Role-Based Access Control), Workspaces, and "v2" unified execution engines. |
| **Desktop/Creative Suite** | **LobsterAI**, **EasyClaw** | Writers, Coders. LobsterAI focuses on "Cowork" (coding agent) and rich Markdown UI. EasyClaw focuses on clean UX/UI. |
| **Infrastructure/Backend** | **Moltis**, **NanoBot** | System Integrators. Moltis focuses on Docker/Headless operation; NanoBot focuses on supply-chain security and LLM routing. |

## 6. Community Momentum & Maturity
*   **High Velocity / High Friction:** **OpenClaw** and **CoPaw**. These projects have the most active communities but are currently enduring painful growing pains regarding release stability.
*   **Stabilizing / Maturing:** **ZeptoClaw** and **Moltis**. These projects are moving fast but merging PRs effectively with fewer critical regressions. ZeptoClaw’s release of v0.8.2 without major firestorms indicates a healthy CI/CD pipeline.
*   **Rapid Experimentation:** **PicoClaw**. High PR count (68) with active nightly builds suggests a "move fast and break things" ethos.
*   **Crisis Response:** **NanoBot**. The community effectively rallied to fix a critical supply-chain attack (`litellm`) within 24 hours, showing strong security maturity.

## 7. Trend Signals for AI Developers
1.  **The "App-ification" of Agents:** Users are rejecting pure CLI/Daemon interfaces. The demand is shifting toward **native Desktop Apps** (Linux GTK4, Windows Installers) and **Mobile-Friendly Web UIs**.
2.  **Supply Chain Paranoia:** The `litellm` compromise in NanoBot has sent a shockwave through the ecosystem. Projects are likely to **reduce dependencies** (e.g., NanoBot removing `litellm`) and demand better sandboxing.
3.  **Cost/Token Sensitivity:** Issues across **NanoBot**, **IronClaw**, and **PicoClaw** regarding "heartbeat token waste" and "context trimmers" suggest that **operational cost** is becoming a primary limiting factor for agent autonomy.
4.  **Rust is Rising:** The stability issues in Node.js-based agents (OpenClaw/LobsterAI packaging bugs) versus the clean progress of Rust-based agents (ZeroClaw/ZeptoClaw) signals a potential industry shift toward Rust for core agent frameworks to ensure memory safety and performance.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-25

## 1. Today's Overview
NanoBot is currently experiencing a **critical security event** alongside robust feature development. The project activity is extremely high, with 51 PRs and 21 issues updated in the last 24 hours. The community is rapidly responding to a supply chain vulnerability involving the `litellm` dependency, resulting in multiple "hardening" PRs. Simultaneously, significant architectural improvements regarding memory management and heartbeat logic are progressing. Despite the security concerns, feature velocity remains strong, particularly in channel integrations (WeChat, QQ) and tooling capabilities.

## 2. Releases
**No new releases** were published in the last 24 hours.
*Note: The latest PyPI package `v0.1.4.post5` is currently subject to a critical security advisory (see Bugs & Stability). Users are advised to exercise caution until a patched release is available.*

## 3. Project Progress
**Active Development & Fixes (Merged/Closed PRs):**
*   **[CLOSED] #2428** (Feat/WeiXin): Adapted the bot to WeChat plugin 1.0.3, adding support for `routeTag` headers, persistent tokens, and QR code refreshes.
    *   *Link:* [HKUDS/nanobot#2428](https://github.com/HKUDS/nanobot/pull/2428)
*   **[CLOSED] #2441** (Security): Implemented a safeguard to prevent the installation of the malicious `litellm` version 1.82.7+.
    *   *Link:* [HKUDS/nanobot#2441](https://github.com/HKUDS/nanobot/pull/2441)
*   **[CLOSED] #2448** (Refactor): A major PR (merged/closed swiftly) removing the `litellm` dependency entirely in favor of native OpenAI and Anthropic SDKs to address the supply chain attack.
    *   *Link:* [HKUDS/nanobot#2448](https://github.com/HKUDS/nanobot/pull/2448)

**Feature Advancements:**
*   **Memory Consolidation (#2436):** Added timeout protection and RAW archive fallback to prevent memory consolidation from blocking entire sessions.
*   **Heartbeat Optimization (#2435):** Introduced logic to skip LLM calls during heartbeat if no active tasks are found, significantly reducing token waste.
*   **Cron Notifications (#2449):** Fixed a bug where scheduled reminders were silently suppressed by the evaluator.

## 4. Community Hot Topics
*   **[#2443: LiteLLM Quarantine & Security](https://github.com/HKUDS/nanobot/issues/2443)** (5 comments)
    *   *Summary:* Discussion regarding the quarantine of the `litellm` dependency due to a "credential stealer" in recent versions.
    *   *Analysis:* This reflects the community's immediate need for security assurance and trust in the dependency chain.
*   **[#2375: Heartbeat Token Usage](https://github.com/HKUDS/nanobot/issues/2375)** (9 comments)
    *   *Summary:* Reports of heartbeat tasks consuming 560k tokens in one go due to accumulated session history.
    *   *Analysis:* Users are facing high operational costs and instability. The rapid creation of fixes (PR #2430, #2435) indicates this is a high-priority pain point.
*   **[#2439: Malicious Code in PyPI Package](https://github.com/HKUDS/nanobot/issues/2439)** (4 comments, 👍 3)
    *   *Summary:* Confirmation of malicious data-exfiltration code found in `litellm_init.pth` within the `nanobot-ai` package.
    *   *Analysis:* A critical trust issue. The community is rallying to identify the scope of the breach and verify fixes.

## 5. Bugs & Stability
**Severity: CRITICAL**
*   **Security: Supply Chain Attack (#2439, #2443)**
    *   *Issue:* Malicious code in `litellm_init.pth` (bundled with `nanobot-ai` via `litellm` dependency) attempts to steal credentials.
    *   *Status:* Fix PRs #2441 (prevention) and #2448 (removal of dependency) are merged/closed.
    *   *Action:* Users need to upgrade immediately once a new release is cut or sanitize their environments.

**Severity: HIGH**
*   **Resource Exhaustion: Heartbeats Consuming 560k Tokens (#2375)**
    *   *Issue:* Heartbeat sessions accumulate massive history, causing token spikes and rate limits.
    *   *Fix PRs:* #2430 (stateless heartbeat), #2435 (skip empty tasks).
*   **Logic Error: Cron Reminders Silently Dropped (#2369)**
    *   *Issue:* The evaluator classifies valid reminders as "not actionable," preventing user notifications.
    *   *Fix PR:* #2449 (Merged logic fix).

**Severity: MEDIUM**
*   **Tool/Model Looping (#2298):** Smaller models enter infinite loops calling the same tool. No fix PR yet.
*   **WeChat/MiniMax API Errors (#2373):** Invalid function arguments causing 400 errors in enterprise WeChat contexts.
*   **Zombie Processes (#2423):** Shell commands timing out leave zombie processes. (Fix cherry-picked in #2423).

## 6. Feature Requests & Roadmap Signals
*   **LLM Provider Independence:** Multiple requests (#2170, #144) to support OAuth subscriptions or specific API keys for providers like OpenAI, Gemini, and Qwen, rather than relying solely on API credits or specific routing logic.
*   **Continuous/Autonomous Action:** User #2442 explicitly requested the ability for the bot to perform continuous actions (like installing skills) overnight without approval, signaling a desire for greater autonomy.
*   **Better Logging/Tooling:**
    *   Request #2421 asks for language specification in Groq transcription for accuracy.
    *   Issue #2437 highlights the need for better handling of large tool outputs (logs) to prevent "explosive" request sizes.

## 7. User Feedback Summary
*   **Pain Points:** Cost and token management are top concerns (Issue #2375). Users are frustrated by "silent failures" where reminders don't fire (#2369) or the bot enters loops (#2298).
*   **Platform Specifics:** WeChat and QQ users are actively testing and reporting integration bugs (headers, auth, media support), indicating strong adoption in these regions.
*   **Security Anxiety:** The discovery of malicious code has naturally caused significant alarm; however, the rapid response from maintainers (PRs merged within 24h) is mitigating potential reputation damage.
*   **Model Compatibility:** Users are experimenting with "GPT-5-mini" and local models via Ollama, pushing the boundaries of the framework's compatibility.

## 8. Backlog Watch
*   **[#1650: Gateway Web UI](https://github.com/HKUDS/nanobot/pull/1650)** (Open since Mar 7)
    *   A feature-complete Web UI is ready but has not been merged for weeks. This is highly anticipated by users who prefer GUIs over CLI/Chat interfaces.
*   **[#1861: Endpoint Channel](https://github.com/HKUDS/nanobot/pull/1861)** (Open since Mar 11)
    *   Adds an OpenAI-compatible API endpoint. This would allow NanoBot to be used as a drop-in replacement for other LLM APIs in external apps.
*   **[#1934: Event-driven Hook System](https://github.com/HKUDS/nanobot/pull/1934)** (Open since Mar 12)
    *   A major architectural feature allowing user extensibility without code changes. Stalled review processes are delaying this significant functionality.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for **Zeroclaw** on **2026-03-25**.

### 1. Today's Overview
Zeroclaw is experiencing a period of hyper-active maintenance, addressing significant technical debt following recent releases. With 50 issues and 50 pull requests updated in the last 24 hours, the project is rapidly iterating on stability fixes, particularly concerning streaming support, security policies, and cross-platform compatibility. While release v0.6.2 focused on polish, the community has identified critical regressions regarding AI "conservatism" (refusal to execute tasks) and binary failures on ARMv6 hardware. The maintainers are responding with a high velocity of patches, targeting core agent behaviors, memory isolation, and provider compatibility.

### 2. Releases
*   **v0.6.2 & v0.6.1:** Released recently with a focus on "Incremental improvements and polish." Specific changelogs were granular, but user feedback suggests these versions may have introduced stricter safety policies that are currently impacting agent autonomy.
*   **v0.6.0:** Marked as a significant polishing milestone.
*   **Note:** The rapid release cycle (v0.6.0 -> v0.6.2 within a short window) indicates a push to stabilize the `v0.6.x` branch.

### 3. Project Progress (Merged PRs)
The last 24 hours saw significant cleanup and feature advancement across 31 merged/closed PRs:
*   **Agent Behavior & Safety:**
    *   PR #4615: Rewrote the `SafetySection` in `prompt.rs` to use action-oriented language, directly addressing user complaints about the AI becoming too conservative or "lazy" in recent versions.
    *   PR #4619: Introduced **Skill Self-Improvement** and a **Pipeline Tool**. This allows the agent to autonomously refine its own skill documents and collapse multi-step tool chains into single inference calls, a major leap in efficiency.
*   **Streaming & Output:**
    *   PR #4620: Implemented streaming output and Ctrl+C cancellation for the `agent` REPL, significantly improving the interactive CLI experience.
*   **Platform & Integrations:**
    *   PR #4611: Fixed the build process to include `whatsapp-web` features in official Docker images and release binaries.
    *   PR #4613: Implemented `sync_directory` for Windows, fixing data persistence issues on the platform.
*   **Security:**
    *   PR #4614: Fixed the "Outbound leak detector" which was falsely redacting local media file markers (e.g., `[IMAGE:<path>]`) as high-entropy tokens.

### 4. Community Hot Topics
*   **AI "Conservatism" & Policy Refusal (Issues #4496, #4485):**
    *   *Links:* [#4496](https://github.com/zeroclaw-labs/zeroclaw/issues/4496) | [#4485](https://github.com/zeroclaw-labs/zeroclaw/issues/4485)
    *   *Analysis:* Users reported that post-v0.5, the agent refuses to execute basic commands (like `ls /`) despite `full` autonomy settings. The community perceives this as a drop in IQ or excessive "nannying."
    *   *Outcome:* Maintainers responded swiftly with PR #4615 to rewrite the system prompt and restore aggressive execution behavior.
*   **Agent-to-Agent (A2A) Communication (Issue #1518):**
    *   *Link:* [#1518](https://github.com/zeroclaw-labs/zeroclaw/issues/1518)
    *   *Analysis:* A highly requested feature for multi-agent setups. Users want independent ZeroClaw processes to communicate via a shared DB.
    *   *Status:* A PR (#4166) is now open implementing "A2A protocol support," allowing agents to delegate tasks to one another.
*   **FreeBSD & Windows Support (Issues #1924, #3693):**
    *   *Links:* [#1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) | [#3693](https://github.com/zeroclaw-labs/zeroclaw/issues/3693)
    *   *Analysis:* Non-Linux/macOS users are struggling with installation complexities, missing binaries, and broken npm paths. Windows users specifically requested a clearer setup (batch files).

### 5. Bugs & Stability
*   **Critical: ARMv6 Segfaults (Issue #4623):**
    *   *Link:* [#4623](https://github.com/zeroclaw-labs/zeroclaw/issues/4623)
    *   *Details:* The `v0.6.2` binary immediately segfaults on Raspberry Pi Zero W (ARMv6). A previous CI fix (#4569) was insufficient.
*   **High: Streaming Broken (Issues #4523, #4567, #4093):**
    *   *Links:* [#4523](https://github.com/zeroclaw-labs/zeroclaw/issues/4523) | [#4567](https://github.com/zeroclaw-labs/zeroclaw/issues/4567) | [#4093](https://github.com/zeroclaw-labs/zeroclaw/issues/4093)
    *   *Details:* Web UI and Azure AI providers are throwing "unknown does not support streaming" errors. Issue #4093 reveals that critical streaming code was stranded on a deleted `dev` branch and never merged to master.
*   **Medium: Docker Image Functionality (Issue #4576):**
    *   *Link:* [#4576](https://github.com/zeroclaw-labs/zeroclaw/issues/4576)
    *   *Details:* The official Docker image lacked `whatsapp-web` support due to hardcoded feature flags, forcing users to build custom images (Fixed in PR #4611).

### 6. Feature Requests & Roadmap Signals
*   **Namespaced Memory (PR #4626):** A strong signal towards better multi-agent support. This PR adds a `NamespacedMemory` decorator to prevent different agents from overwriting each other's memories in `brain.db`.
*   **ACP Server Mode (Issue #2456):** Users want ZeroClaw to act as a backend for IDEs (like Zed) via the Agent Control Protocol.
*   **Interactive Onboarding (Issue #3658):** Users reported that the interactive setup wizard is broken/hidden.
*   **MuninnDB Backend (PR #4607):** Adding a remote vector database backend suggests a roadmap towards more persistent, enterprise-grade memory solutions compared to local SQLite.

### 7. User Feedback Summary
*   **Pain Points:** The "lean startup" approach to installation is causing friction. Windows users find the setup opaque, and FreeBSD users are tired of compiling from source.
*   **Behavioral Dissatisfaction:** There is distinct frustration regarding the agent's "personality." Users feel the v0.6.x releases made the agent annoyingly cautious or "stupid" compared to v0.3.x.
*   **Visual/UX:** Request for mobile-friendly web dashboard (PR #4625) indicates users are trying to run ZeroClaw on phones/tablets but the current UI is broken on small screens.

### 8. Backlog Watch
*   **Inter-process Communication (Issue #1518):** Though a PR is open, this has been a request since Feb 23 and represents a major architectural shift.
*   **Plugin Sandboxing (Issue #2972):** A proposal for WASM-based sandboxing remains largely unaddressed, which is a security concern for enterprise deployment.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Project PicoClaw Daily Digest
**Date:** 2026-03-25
**Status:** 🔴 High Activity | 68 PRs Updated | 1 Release
**Analysis Period:** Last 24 Hours

---

### 1. Today's Overview
PicoClaw is experiencing an intense development cycle with **68 Pull Requests** updated in the last 24 hours, indicating a significant push toward the next feature set (likely v0.2.4 or v0.3.0). The project remains highly active with 11 new open issues. The primary focus of recent activity appears to be **stabilizing the "Agent" capabilities** (fixing heartbeat interruptions) and **expanding channel integrations** (WeChat unification and Audio/Voice features). While feature velocity is high, there are indications of configuration management complexity and stability bugs in the nightly builds, particularly regarding the Web UI and Cron job execution.

---

### 2. Releases
*   **nightly (v0.2.3-nightly.20260324.4d7a629b)**
    *   **Type:** Automated Nightly Build
    *   **Status:** Unstable / Use with Caution
    *   **Key Changes:** [View Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)
    *   **Note:** Users are advised to stick to stable releases unless they require the very latest fixes discussed below.

---

### 3. Project Progress (Merged/Closed)
The community successfully merged several critical improvements, primarily focused on configuration integrity and channel support:

*   **Configuration Management Hardening:**
    *   **[PR #1929](https://github.com/sipeed/picoclaw/pull/1929)**: Fixed a validation bug where security credentials (e.g., tokens in `.security.yml`) were not applied before config validation, preventing users from saving valid configurations.
    *   **[PR #1977](https://github.com/sipeed/picoclaw/pull/1977)**: Fixed a bug where "virtual models" (generated for multi-key setups) were incorrectly being persisted to the configuration file, cluttering settings.
    *   **[PR #1902](https://github.com/sipeed/picoclaw/pull/1902)**: Fixed an issue where disabling the "Placeholder Message" setting would not stick after a restart.

*   **Security & Agent Behavior:**
    *   **[PR #1967](https://github.com/sipeed/picoclaw/pull/1967)**: Added authentication for the Web interface to prevent LLMs from bypassing the security sandbox via HTTP API calls.
    *   **[PR #1979](https://github.com/sipeed/picoclaw/pull/1979)**: Implemented a fix to prevent the "heartbeat" system from interrupting active agent conversations with autonomous tasks (e.g., social media posts).

*   **Build & Infrastructure:**
    *   **[PR #1975](https://github.com/sipeed/picoclaw/pull/1975)**: Fixed build targets to exclude the Matrix client on incompatible architectures (mipsle, netbsd).
    *   **[PR #1241](https://github.com/sipeed/picoclaw/pull/1241)**: Fixed WeCom bot channel to correctly handle XML message parsing.

---

### 4. Community Hot Topics
The most active discussions center on new capabilities and architectural changes.

*   **[#1648 Feature: Adding TTS and ASR Support](https://github.com/sipeed/picoclaw/issues/1648)** (22 Comments)
    *   **Topic:** Integrating Text-to-Speech and Speech-to-Text directly into the PicoClaw gateway.
    *   **Analysis:** This is the most anticipated enhancement. Users want to move beyond text-only interactions. The associated PR #1939 is currently open and implements "Voice send & receive" for Discord/Telegram/WeChat using a Voice Orchestrator.

*   **[#1941 BUG: PicoClaw Config is Wiped](https://github.com/sipeed/picoclaw/issues/1941)** (11 Comments)
    *   **Topic:** User reports of configuration files being wiped or corrupted, specifically when using the Telegram channel on the `nightly` build.
    *   **Analysis:** A critical stability concern. If the config file is unstable in the nightly build, it blocks testing of new features.

*   **[#1737 Launcher Mode: Web UI Chat Disabled](https://github.com/sipeed/picoclaw/issues/1737)** (7 Comments)
    *   **Topic:** Web UI shows a "disabled" input box despite the backend working, specifically in Docker/Launcher mode with port mapping (e.g., 18800).
    *   **Analysis:** Connectivity issues between the frontend and backend when ports are remapped. A fix is available in **[PR #1957](https://github.com/sipeed/picoclaw/pull/1957)** (Open).

---

### 5. Bugs & Stability
*   **[CRITICAL] Config Persistence:**
    *   **[#1941](https://github.com/sipeed/picoclaw/issues/1941):** Config wipe in Nightly build.
    *   **[#1943](https://github.com/sipeed/picoclaw/issues/1943):** `PUT /api/models/0` returns 500, preventing model saves in Dev mode.
*   **[HIGH] Cron Job Failures:**
    *   **[#1058](https://github.com/sipeed/picoclaw/issues/1058):** Cron tasks with `deliver=false` silently discard LLM output.
    *   **[#1946](https://github.com/sipeed/picoclaw/issues/1946):** Specific cron schedules fail to trigger (e.g., "run every 7 mins between 5-6 AM").
*   **[MEDIUM] Agent/Channel Glitches:**
    *   **[#1916](https://github.com/sipeed/picoclaw/issues/1916):** Agent goes into a loop of random tool calls upon creation of a new Telegram topic.
    *   **[#1936](https://github.com/sipeed/picoclaw/issues/1936):** Telegram channel crashes on Termux (Android).
*   **Fix in Progress:** **[PR #1937](https://github.com/sipeed/picoclaw/pull/1937)** addresses "heartbeat tool feedback leaks" where system messages interrupt user chats.

---

### 6. Feature Requests & Roadmap Signals
*   **Seahorse Memory System ([#1919](https://github.com/sipeed/picoclaw/issues/1919)):** A proposal for a "biologically-inspired memory system" (short-term and long-term) for agents. This suggests the community wants agents that remember context across sessions rather than treating every interaction as stateless.
*   **Line-based File Reading ([#1974](https://github.com/sipeed/picoclaw/issues/1974)):** Users are finding the current byte-based `ReadFileTool` inefficient for text logs. Implementation exists in **[PR #1981](https://github.com/sipeed/picoclaw/pull/1981)**.
*   **Web Chat Streaming ([#1950](https://github.com/sipeed/picoclaw/issues/1950)):** Request to make the Web UI chat stream responses like Discord/Telegram, rather than waiting for the full completion.

---

### 7. User Feedback Summary
*   **Pain Points:** Configuration remains the biggest friction point. Users are confused by "Restart Required" indicators that don't show up for tools/config (fixed in **[PR #1978](https://github.com/sipeed/picoclaw/pull/1978)**), and annoyed when valid configs are rejected by the backend.
*   **Positive Signals:** High demand for WeCom (WeChat Work) integration. The "Refactor/wecom" **[PR #1955](https://github.com/sipeed/picoclaw/pull/1955)** consolidating multiple WeChat implementations into one robust channel was recently merged.
*   **Usage Pattern:** Users are deploying PicoClaw in diverse environments (Docker, NAS, Termux/Android) and pushing the limits of the "Tool" use (e.g., reading specific lines of logs).

---

### 8. Backlog Watch
*   **[#1840 Support for encrypted messages in Matrix](https://github.com/sipeed/picoclaw/issues/1840):** Closed as "Completed" recently? No, it was listed as Closed in the feed, but check actual merge status. *Correction: The data lists it as CLOSED today.* This implies E2E encryption support for Matrix may have landed or been moved to a different tracker.
*   **[#1862 MCP Base64 Context Overflow](https://github.com/sipeed/picoclaw/issues/1862):** Closed. This PR prevented non-textual Base64 data from consuming LLM context limits. A crucial optimization for cost/performance.

**Summary:** The project is in a rapid "sprint" phase, cleaning up technical debt (Config validation, WeCom unification) while aggressively pursuing next-gen features (Voice, Memory). Users on the `nightly` branch should exercise caution due to config volatility.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-25

## 1. Today's Overview
NanoClaw is experiencing **high development velocity** with significant architectural friction. Activity is very high, with 50 Pull Requests and 13 Issues updated in the last 24 hours. The project is actively expanding its "skill" ecosystem (plugins) and handling high-maintenance merge operations, evidenced by a cluster of automated merge-forward failures. The community is pushing for greater modularity, specifically requesting alternatives to the Claude-centric SDK and standardization of attachment handling interfaces.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
*Recent Merged/Closed PRs (Last 24h)*
*   **#799** - Robust timezone-aware context for LLM agents (Fixed agents reporting wrong days/time).
*   **#1397** - Fixed IPC permission errors (infinite `EACCES` loop) when the host runs as root.
*   **#1372** - Fixed a regression where the diagnostics prompt was silently skipped due to malformed markdown links.
*   **#1400** - Documentation update for OneCLI secrets management in `CLAUDE.md`.
*   **#1410** - Added a new "Log Analyzer" skill.

## 4. Community Hot Topics
*   **Evolving the Backend:** Users are actively discussing moving beyond exclusive Claude Code dependency.
    *   **[#1163](https://github.com/qwibitai/nanoclaw/issues/1163)** (3👍): A request to support OpenCode/JS SDK in parallel with Claude Code to accommodate enterprise AI provider diversity.
*   **New Interfaces:**
    *   **[#1273](https://github.com/qwibitai/nanoclaw/issues/1273)** (2👍): A user implemented a multi-session web channel for NanoClaw, bypassing the need for messenger apps, and shared it for community feedback.
*   **Infrastructure Standardization:**
    *   **[#850](https://github.com/qwibitai/nanoclaw/pull/850)**: A proposal for a "Channel-Agnostic Attachment Interface" to stop the proliferation of platform-specific code for handling files.
    *   **[#1351](https://github.com/qwibitai/nanoclaw/pull/1351)**: A PR to add GitHub Copilot SDK as an alternative AI backend.

## 5. Bugs & Stability
*   **High Severity (Automated CI Failures):** There is a persistent blockage in the merge-forward workflow affecting multiple skill branches.
    *   **[#1412](https://github.com/qwibitai/nanoclaw/issues/1412)**, **[#1411](https://github.com/qwibitai/nanoclaw/issues/1411)**, **[#1406](https://github.com/qwibitai/nanoclaw/issues/1406)**, etc.: Conflicts are actively blocking `skill/apple-container`, `skill/native-credential-proxy`, and `skill/ollama-tool`.
*   **Medium Severity (Broken Onboarding):**
    *   **[#1390](https://github.com/qwibitai/nanoclaw/issues/1390)** & **[#1391](https://github.com/qwibitai/nanoclaw/issues/1391)**: Registering new groups fails to create `CLAUDE.md`, leaving agents with no identity or instructions.
*   **Low Severity (Niche/Specific):**
    *   **[#1340](https://github.com/qwibitai/nanoclaw/pull/1340)**: Fixes a bug where trigger matching failed for CJK (Chinese/Japanese/Korean) assistant names due to regex word boundary issues.

## 6. Feature Requests & Roadmap Signals
*   **Enhanced Memory:** **[#1256](https://github.com/qwibitai/nanoclaw/pull/1256)** proposes a `/add-mem0-graph` skill to give agents persistent, graph-enhanced memory using Neo4j and Qdrant.
*   **Security Tooling:** **[#1376](https://github.com/qwibitai/nanoclaw/pull/1376)** adds a "Tirith Scan" skill for agents to analyze URLs/commands for security threats.
*   **Container Management:** **[#1380](https://github.com/qwibitai/nanoclaw/pull/1380)** integrates `AgentShell` for security policy enforcement.
*   **Utility Tools:** **[#1408](https://github.com/qwibitai/nanoclaw/pull/1408)** adds `clawps`, a utility for managing NanoClaw containers from the host.
*   **Interactivity:** **[#1407](https://github.com/qwibitai/nanoclaw/issues/1407)** requests an MCP tool for Telegram emoji reactions.
*   **Scheduled Tasks:** **[#1349](https://github.com/qwibitai/nanoclaw/pull/1349)** adds pre-hook gates for scheduled tasks.

## 7. User Feedback Summary
*   **Satisfaction:** Users appreciate the tool's capabilities and are actively building complex extensions (web channels, memory graphs) on top of it.
*   **Pain Points:**
    *   **Maintenance Debt:** The sheer volume of merge conflicts (10+ issues in 24h) indicates the `main` branch is moving faster than skill branches can integrate.
    *   **Vendor Lock-in:** There is a clear desire (Issue #1163) to support AI providers other than Anthropic.
    *   **Configuration Complexity:** The IPC permission bugs and missing `CLAUDE.md` files suggest the "register new group" flow is brittle.

## 8. Backlog Watch
*   **Merge Conflicts:** Maintainer intervention is required to resolve the cascade of merge-forward failures in `skill/apple-container` and `skill/compact`.
*   **Standardization:** PR **[#850](https://github.com/qwibitai/nanoclaw/pull/850)** (Attachment Interface) needs review to prevent fragmented attachment handling code across future channels.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-03-25

## 1. Today's Overview
The NullClaw project is currently in a highly active development phase focused on stability and infrastructure expansion, despite a quiet 24-hour period regarding new issue reports or releases. The repository has seen a surge of **6 open Pull Requests** updated within the last day, indicating significant backend work on memory management, concurrency safety, and documentation. Development activity is heavily weighted towards technical debt and architectural improvements—specifically regarding race conditions in the cron scheduler and the implementation of advanced memory backends like Knowledge Graphs. While no new versions were shipped today, the pipeline appears full of critical features heading toward stabilization.

## 2. Releases
*No new releases published on 2026-03-25.*

## 3. Project Progress
*Note: No PRs were merged or closed in the last 24 hours. The following highlights reflect ongoing development efforts in open Pull Requests.*

*   **Concurrency & Memory Safety:** Significant work is ongoing in PR #689 to address a critical **race condition** within the daemon's `schedulerThread`. This update introduces mutex locking across the full reload→snapshot→tick→save cycle to prevent memory leaks and data races during job slice swaps.
*   **Advanced Memory Architectures:**
    *   **Knowledge Graph Support:** PR #712 introduces `KgMemory`, a new backend using SQLite recursive CTEs (Common Table Expressions) to store and traverse entity-relation graphs, adding knowledge graph capabilities to the agent.
    *   **Cross-Instance Sync:** PR #711 proposes a "deterministic memory event stream" to allow memory synchronization across multiple agent instances, a prerequisite for multi-agent or clustered deployments.
*   **Extensibility:** PR #669 is threading new configuration flags to enable reasoning capabilities for custom vLLM/Qwen endpoints (via `enable_thinking`), ensuring the agent can use advanced reasoning models on custom infrastructure.

## 4. Community Hot Topics
There are no issues or "Hot Topics" with community engagement (comments/reactions) to report for today. All discussion is currently contained within the code review process for the open PRs listed above.

## 5. Bugs & Stability
*   **Scheduler Race Condition & Memory Leak:**
    *   **Severity:** High
    *   **Details:** The Cron scheduler suffers from a race condition between `reloadJobs` and `tick`, as well as potential memory leaks related to mutex lifetime.
    *   **Fix Status:** A fix is proposed in [PR #689](https://github.com/nullclaw/nullclaw/pull/689) (Open), which enforces strict mutex locking during scheduler cycles.
*   **Configuration/Integration:** PR #669 and #707 imply current limitations or friction points in configuring custom endpoints and environment variables, which are actively being patched.

## 6. Feature Requests & Roadmap Signals
Based on the open PRs, the following features are likely on the roadmap for the next release:
*   **Knowledge Graph Memory:** The addition of `KgMemory` ([PR #712](https://github.com/nullclaw/nullclaw/pull/712)) suggests a shift toward more structured, relational data storage rather than simple vector/flat storage.
*   **Stateful Multi-Agent Systems:** The "cross memory" work ([PR #711](https://github.com/nullclaw/nullclaw/pull/711)) strongly indicates plans to allow multiple NullClaw instances to share or sync memory states.
*   **Enhanced Documentation:** Improvements to navigation and runtime guidance ([PR #713](https://github.com/nullclaw/nullclaw/pull/713)) suggest an upcoming push for better usability and operator onboarding.

## 7. User Feedback Summary
*   **Pain Points:**
    *   Users operating custom vLLM or Qwen endpoints have needed better support for the `reasoning_effort` parameter (addressed in PR #669).
    *   Managing credentials for tools like Pushover was likely cumbersome, prompting a move to support standard environment variables ([PR #707](https://github.com/nullclaw/nullclaw/pull/707)).
*   **Satisfaction:** The lack of new bug reports (0 updated issues) suggests the existing build is relatively stable for current users.

## 8. Backlog Watch
*   **[PR #711 - Feat/cross memory](https://github.com/nullclaw/nullclaw/pull/711):** Created 2 days ago and still open. This is a major architectural change that needs careful review regarding how it impacts single-agent workflows.
*   **[PR #689 - fix(cron)](https://github.com/nullclaw/nullclaw/pull/689):** Created 3 days ago. Given the severity of scheduler race conditions and memory leaks, this PR should be prioritized for merge to prevent runtime instability for users relying on job scheduling.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-25

## 1. Today's Overview
IronClaw continues to exhibit high-velocity development with **49 Pull Requests** updated in the last 24 hours, signaling an intense focus on core architecture refactoring and enterprise readiness. The project is currently managing significant technical debt and feature additions, with the codebase evolving toward multi-tenancy and a unified execution engine. However, the community is actively troubleshooting stability issues related to local model execution loops and database onboarding errors, indicating friction points for self-hosted users.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
**Merged & Closed Advances:**
*   **Performance Optimizations:** PR [#1592](https://github.com/nearai/ironclaw/pull/1592) was closed, addressing redundant UUID parsing and lock contention in the approval thread resolution path, marking a win for concurrency performance.
*   **OAuth Stability:** PR [#1602](https://github.com/nearai/ironclaw/pull/1602) (closed) fixed hosted OAuth refresh flows via proxy, improving reliability for extension authentication.
*   **Relay Activation Fix:** PR [#1623](https://github.com/nearai/ironclaw/pull/1623) (merged) removed a stale `stream_token` gate that had been blocking channel-relay activations since a previous webhook migration.
*   **CI Reliability:** PR [#1625](https://github.com/nearai/ironclaw/pull/1625) (closed) improved the E2E startup harness to better report server boot failures and fixed owner-scoped gateway startup logic.

## 4. Community Hot Topics
*   **[Feature] WeChat Channel Request** ([#1584](https://github.com/nearai/ironclaw/issues/1584))
    *   **Activity:** 3 comments, 2 reactions.
    *   **Analysis:** Users are eager to expand IronClaw's reach into the Chinese market via WeChat integration, building on the existing `OpenClaw` plugin ecosystem.
*   **[Feature] Enterprise Authentication (SSO/OIDC)** ([#1610](https://github.com/nearai/ironclaw/issues/1610))
    *   **Activity:** New, high-priority issue requesting Google, Okta, and generic OIDC support.
    *   **Analysis:** Strong signal that the current API-token-only auth is a primary barrier for enterprise adoption.
*   **[Discussion] Execution Failures with Local Models** ([#1611](https://github.com/nearai/ironclaw/issues/1611))
    *   **Activity:** New report regarding "max iterations exceeded" errors when using Ollama.
    *   **Analysis:** Highlights a critical regression or configuration hurdle for users running local LLMs (e.g., Ollama) where empty tool completions cause infinite loops.

## 5. Bugs & Stability
*   **[CRITICAL] Execution Loop / Max Iterations Exceeded** ([#1611](https://github.com/nearai/ironclaw/issues/1611))
    *   **Severity:** High.
    *   **Details:** Users running local models (specifically via Ollama_API) are experiencing infinite loops due to empty tool completions, leading the worker to exhaust the 50-iteration cap. This breaks the agent loop for local hosting setups.
*   **[MEDIUM] `onboard` Database Failure** ([#846](https://github.com/nearai/ironclaw/issues/846))
    *   **Severity:** Medium.
    *   **Details:** The initial setup command fails with a "Failed to save settings" error, though the application may subsequently start correctly. Confusing UX for new users.
*   **[MEDIUM] Microsoft Defender False Positives** ([#1538](https://github.com/nearai/ironclaw/issues/1538) - *Closed*)
    *   **Severity:** Medium (Resolved).
    *   **Details:** Windows Defender was flagging the IronClaw installer as `Trojan:Win32/Wacatac.C!ml`. While closed, this affects user trust and distribution on Windows platforms.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Tenancy & User Management:** Issues [#1605](https://github.com/nearai/ironclaw/issues/1605) (User Management), [#1607](https://github.com/nearai/ironclaw/issues/1607) (Workspaces), and [#1608](https://github.com/nearai/ironclaw/issues/1608) (RBAC) were opened today.
    *   **Prediction:** PR [#1626](https://github.com/nearai/ironclaw/pull/1626) (DB-backed user management) is already open and active, signaling these features are imminent for the next major release.
*   **Admin Management Panel:** Issue [#1609](https://github.com/nearai/ironclaw/issues/1609) requests a web UI for user/workspace management.
    *   **Prediction:** Likely to follow the completion of the backend RBAC and Workspace features currently in development.
*   **WeChat Integration:** Issue [#1584](https://github.com/nearai/ironclaw/issues/1584).
    *   **Prediction:** Moderate priority. Dependent on community contribution or core team allocation to port the existing WeChat plugin.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Local LLM Integration:** Reports of "max iterations" loops ([#1611](https://github.com/nearai/ironclaw/issues/1611)) suggest the integration with local models (Ollama) is fragile.
    *   **Authentication Complexity:** Users have expressed confusion regarding the coupling to NEAR AI accounts ([#99](https://github.com/nearai/ironclaw/issues/99)) and are demanding standard enterprise SSO ([#1610](https://github.com/nearai/ironclaw/issues/1610)).
    *   **Windows Trust:** The Defender flagging issue ([#1538](https://github.com/nearai/ironclaw/issues/1538)) remains a friction point for Windows users despite being closed.

## 8. Backlog Watch
*   **[Security] Cross-Channel Approval Hijacking:** PR [#1590](https://github.com/nearai/ironclaw/pull/1590) addresses a high-risk security vulnerability involving cross-channel thread hijacking. It is currently open and requires attention to ensure the safety of multi-channel deployments.
*   **[Refactor] Unified Execution Engine:** PR [#1557](https://github.com/nearai/ironclaw/pull/1557) ("v2 architecture") is a massive, open PR that is refactoring the core agent execution model. It is essential reading for understanding the future direction of the codebase but represents a large surface area for potential regressions.
*   **[Feature] Multi-Tenancy Isolation:** PR [#1614](https://github.com/nearai/ironclaw/pull/1614) (Phases 2-4) is currently open, completing the work started to allow multiple users to share a single deployment safely.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-03-25

## 1. Today's Overview
LobsterAI is currently experiencing a period of intense development activity alongside significant growing pains regarding stability. The project logged **50 updated PRs** (half open, half merged) and **23 new issues** in the last 24 hours, indicating a sprint towards new functionality, particularly around the "Cowork" (coding agent) module. While feature velocity is high—evidenced by new file browsers, export tools, and performance patches—user-reported stability issues are spiking, particularly with the latest v2026.3.24 release. The community is actively debugging integration points (MCP, DingTalk) and performance bottlenecks, suggesting the codebase is undergoing heavy refactoring under the hood.

## 2. Releases
**No new releases** were published today. The latest stable version remains **v2026.3.24** (released March 24), which is currently the focal point of user bug reports regarding update speeds, IM bot connectivity, and memory corruption.

## 3. Project Progress
**Merged & Advancing Features (Last 24h):**
*   **Cowork Experience Enhancements:** Significant work is advancing on the coding agent interface.
    *   **File Browser & Virtual Scrolling:** PR #773 adds a file browsing panel to the Cowork interface, allowing users to view directory trees without leaving the app. PR #764 introduces virtual scrolling to the chat area to resolve severe performance degradation (lag/whitescreens) when rendering large message histories.
    *   **Performance Optimization:** PRs #736 and #770 wrap `MarkdownContent` in `React.memo` to prevent expensive re-parsing of markdown history during token streaming.
*   **Operational Improvements:**
    *   **Observability:** PR #768 integrates Opik (via OpenClaw plugin) for better tracing of agent execution.
    *   **Model Support:** PR #707 adds GitHub Copilot OAuth support; PR #766 adds Novita AI as a provider.
    *   **Exports:** PR #755 enables exporting chat history to Markdown/JSON.
*   **Bug Fixes:**
    *   PR #760 fixes a redundant SQLite write operation during session creation.
    *   PR #690 ensures the window comes to the foreground on Windows startup.
    *   PR #534 adds version fields to 12 Skills to enable auto-upgrades.

## 4. Community Hot Topics
**Top Active Issues & Discussions:**
*   **MCP Server Integration Chaos:**
    *   [Issue #728](https://github.com/netease-youdao/LobsterAI/issues/728) & [Issue #724](https://github.com/netease-youdao/LobsterAI/issues/724): Users are struggling to configure and invoke MCP (Model Context Protocol) tools. Reports show configurations syncing with "0 tools" available.
    *   *Underlying Need:* Users desire clearer documentation or UI feedback on why MCP servers fail to load or handshake.
*   **DingTalk Bot Failures:**
    *   [Issue #751](https://github.com/netease-youdao/LobsterAI/issues/751): v2026.3.24 breaks DingTalk integration with "fetch failed" errors.
    *   [Issue #691](https://github.com/netease-youdao/LobsterAI/issues/691): Bots are duplicating messages (sending 2 replies).
    *   *Underlying Need:* Stability in enterprise integrations (DingTalk/WeCom) is critical for user retention.
*   **Windows Update Performance:**
    *   [Issue #703](https://github.com/netease-youdao/LobsterAI/issues/703): Updates from mid-March are taking excessively long (>2 mins), stalling at 30% and 85%.

## 5. Bugs & Stability
**Critical & High Severity Bugs:**
*   **Memory Corruption (Critical):**
    *   [Issue #754](https://github.com/netease-youdao/LobsterAI/issues/754): The "Memory Item Management" feature is destroying the structure of user `MEMORY.md` files (scrambling order/levels).
    *   [Issue #753](https://github.com/netease-youdao/LobsterAI/issues/753): Single-character memory entries can be saved but fail to render.
*   **Agent Execution Risks (High):**
    *   [Issue #734](https://github.com/netease-youdao/LobsterAI/issues/734): Deleting an active Cowork session does not actually kill the background process (OpenClaw), potentially leading to runaway resource usage or unintended file modifications.
    *   [Issue #763](https://github.com/netease-youdao/LobsterAI/issues/763): "Skills" can still be invoked via chat even when their toggle is explicitly switched OFF.
*   **Configuration & Regressions:**
    *   [Issue #735](https://github.com/netease-youdao/LobsterAI/issues/735): `executionMode` configuration is broken; settings for `auto` or `sandbox` are silently reverted to `local`.
    *   [Issue #732](https://github.com/netease-youdao/LobsterAI/issues/732): Alibaba Qwen (Coding Plan) integration is broken in v2026.3.24 with auth errors.
*   **Fixes Deployed:**
    *   [PR #739](https://github.com/netease-youdao/LobsterAI/pull/739) attempts to fix MCP server spawning by preferring system Node.js over Electron runtime.
    *   [PR #760](https://github.com/netease-youdao/LobsterAI/pull/760) closes the duplicate session state write bug.

## 6. Feature Requests & Roadmap Signals
*   **Voice Input:** [Issue #722](https://github.com/netease-youdao/LobsterAI/issues/722) requests voice input capabilities to reduce typing friction.
*   **Auto-Detection for APIs:** [PR #762](https://github.com/netease-youdao/LobsterAI/pull/762) signals a move toward "Auto-detect" API formats for custom providers (DeepSeek/MiniMax), removing a major configuration hurdle.
*   **Message Management:** [PR #772](https://github.com/netease-youdao/LobsterAI/pull/772) introduces batch/multi-select delete for chat messages, a frequently requested UX improvement.

## 7. User Feedback Summary
**Pain Points:**
*   **Configuration Fatigue:** Users are frustrated by complex setups for MCP ([#728](https://github.com/netease-youdao/LobsterAI/issues/728)) and Custom Models, often facing silent failures or "0 tools" errors.
*   **v2026.3.24 Instability:** The latest release is perceived as regressive, with specific complaints about update speeds ([#703](https://github.com/netease-youdao/LobsterAI/issues/703)) and broken integrations (DingTalk, Qwen).
*   **UI Responsiveness:** There are persistent complaints about laggy lists and unresponsive inputs during AI streaming, which the team is actively addressing via Virtual Scrolling ([#764](https://github.com/netease-youdao/LobsterAI/pull/764)).

## 8. Backlog Watch
*   **Longstanding Localization:** [Issue #568](https://github.com/netease-youdao/LobsterAI/issues/568) regarding English version adaptation issues (created Mar 20) remains unresolved.
*   **Token Limits:** [Issue #774](https://github.com/netease-youdao/LobsterAI/issues/774) highlights a hard ceiling on message history (65536 char limit) causing crashes in long WeChat sessions, requiring architectural handling of long-context windows.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# Project Digest: TinyClaw (TinyAGI)
**Date:** 2026-03-25
**Status:** High Activity / Stability Improvements

## 1. Today's Overview
TinyClaw has seen a significant burst of activity, closing 8 pull requests and releasing 3 versions (v0.0.17, v0.0.18, and v0.0.19) within a single day. The project is currently prioritizing infrastructure stability, specifically focusing on message persistence, subprocess management, and the channel delivery pipeline. While no new issues were raised in the last 24 hours, the rapid merging of PRs suggests a concentrated effort by the maintainers to refine the core "Skills Manager" and ensure reliable message queuing across different interfaces (Telegram, Dashboard).

## 2. Releases
Three rapid-fire releases were published today focusing on bug fixes and a major new feature.

*   **[v0.0.19](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.19)**
    *   **Persistence Fix:** Resolved an issue where scheduled messages were not being written to the `agent_messages` table, ensuring history integrity.
    *   **Concurrency Fix:** Fixed a race condition in the `signalDone` grace period that could cause agent flows to terminate prematurely with a generic error.
*   **[v0.0.18](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.18)**
    *   **Streaming Fix:** Eliminated duplicate response streams in team message handling, which previously caused redundant output.
*   **[v0.0.17](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.17)**
    *   **New Feature:** Introduced the **Skills Manager**, allowing agents to search and install new capabilities from a registry on the fly.
    *   **Refactor:** Completed the migration of the Telegram channel to the `grammY` framework.

## 3. Project Progress
The development team made significant strides in modernizing the queue and session management systems. Key advancements include:

*   **Agent Capabilities:** Merged the **Skills Manager** ([PR #254](https://github.com/TinyAGI/tinyclaw/pull/254)), enabling dynamic extension of agent functionality via a registry.
*   **Messaging Architecture:** Transitioned to immediate message persistence ([PR #256](https://github.com/TinyAGI/tinyclaw/pull/256), [PR #250](https://github.com/TinyAGI/tinyclaw/pull/250)). User messages are now saved to the `agent_messages` table at enqueue time, allowing for real-time UI updates and eliminating history gaps.
*   **Process Reliability:** Implemented robust subprocess lifecycle management ([PR #251](https://github.com/TinyAGI/tinyclaw/pull/251)) to prevent queue hangs by automatically killing agent processes that fail to exit cleanly after sending a result.
*   **Channel Stability:** Fixed Server-Sent Event (SSE) emissions for proactive messages ([PR #257](https://github.com/TinyAGI/tinyclaw/pull/257)), ensuring Telegram bots receive messages immediately without needing a user ping.

## 4. Community Hot Topics
*No new community issues or discussions were created in the last 24 hours.* The current "hot" items are internal development pushes focused on reliability.

## 5. Bugs & Stability
Today's activity was heavily focused on resolving stability issues and race conditions.

*   **High Severity (Race Conditions):**
    *   **Premature Completion:** A race condition in `runCommandStreaming` where the grace period handler killed subprocesses before they could settle ([PR #258](https://github.com/TinyAGI/tinyclaw/pull/258)).
    *   **Duplicate Output:** Team responses were being streamed twice, causing user confusion ([PR #256](https://github.com/TinyAGI/tinyclaw/pull/256)).
*   **Medium Severity (Data & Delivery):**
    *   **History Gaps:** Scheduled messages and user-enqueued messages were not appearing in the chat history ([PR #259](https://github.com/TinyAGI/tinyclaw/pull/259), [PR #250](https://github.com/TinyAGI/tinyclaw/pull/250)).
    *   **Notification Lags:** Proactive messages sent via API were not reaching Telegram clients immediately ([PR #257](https://github.com/TinyAGI/tinyclaw/pull/257)).
*   **UI Fixes:**
    *   **Status Visibility:** The dashboard was incorrectly guessing message status (queued/processing) instead of reading from the DB ([PR #255](https://github.com/TinyAGI/tinyclaw/pull/255)).

## 6. Feature Requests & Roadmap Signals
*   **Dynamic Skill Installation:** The release of the **Skills Manager** in v0.0.17 ([PR #254](https://github.com/TinyAGI/tinyclaw/pull/254)) signals a shift toward a more modular, plugin-based architecture where agents can manage their own toolsets.
*   **Streaming UX:** The changes in PR #256 imply a roadmap focused on reducing latency and improving the "feel" of interactions by streaming responses immediately rather than waiting for full completion.

## 7. User Feedback Summary
Feedback from this period is derived indirectly from the fixes implemented:
*   **Pain Point:** Users experienced "ghost" messages or missing chat history, particularly with scheduled tasks and team interactions. This has been addressed by moving to immediate persistence.
*   **Pain Point:** Reliability concerns regarding "hung" agents or delayed Telegram notifications. The subprocess lifecycle updates and SSE fixes indicate users require high responsiveness for asynchronous agents.
*   **Positive:** The move to a Skills Manager suggests users want more agency over what their agents can do without manual configuration.

## 8. Backlog Watch
*   **Observation:** While 8 PRs were closed, the descriptions reveal deep architectural changes (e.g., rewriting the Telegram handler, changing the queue persistence model). Users upgrading to these versions should monitor for regressions in how custom scripts handle the new immediate-persistence logic.
*   **Attention Needed:** With the Telegram channel rewrite to `grammY`, users relying on the old `node-telegram-bot-api` implementation (if any custom integrations existed) should review the migration notes, though this was largely an internal refactor.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-25

## 1. Today's Overview
Moltis is demonstrating high engineering velocity with a significant focus on code quality, stability, and architectural improvements. In the last 24 hours, the team merged 17 pull requests, addressing critical bottlenecks in the memory subsystem, container networking, and multi-platform support. While no new release was published today, the flurry of merged changes—particularly regarding Docker utility, memory recall mechanisms, and IPv6 support—suggests an imminent update. The project remains in active development with a healthy ratio of fixes to feature work, indicating a maturing codebase.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
The project advanced significantly with the merger of 17 PRs, focusing on infrastructure, extensibility, and user experience:

*   **Architecture & Memory:** A major refactor extracted `moltis-httpd` to decouple the HTTP transport layer ([PR #465](https://github.com/moltis-org/moltis/pull/465)). The memory subsystem saw stabilization work ([PR #476](https://github.com/moltis-org/moltis/pull/476)) to enable KV cache hits for local LLMs by stabilizing the system prompt between turns.
*   **Docker & MCP Ecosystem:** The Docker image was enhanced to include Node.js/npm, allowing MCP servers to run out of the box ([PR #479](https://github.com/moltis-org/moltis/pull/479)), resolving a long-standing usability gap.
*   **Platform Support:** IPv6 binding support was fixed ([PR #481](https://github.com/moltis-org/moltis/pull/481)), and macOS app signing/notarization configuration was added for smoother distribution on Apple hardware ([PR #422](https://github.com/moltis-org/moltis/pull/422)).
*   **Channel Enhancements:** The Matrix channel received full media support, bringing it to parity with Telegram ([PR #482](https://github.com/moltis-org/moltis/pull/482)).

## 4. Community Hot Topics
*   **Feature: Dynamic System Prompt Context**
    *   **Issue:** [#176](https://github.com/moltis-org/moltis/issues/176) (Enhancement)
    *   **Activity:** 14 comments, 1 👍
    *   **Analysis:** There is significant community discussion around injecting real-time data (specifically datetime) into the agent's context. While the maintainer recently moved datetime *out* of the system prompt in [PR #476](https://github.com/moltis-org/moltis/pull/476) to stabilize caches, users are advocating for it to remain or be handled differently to ensure the agent is aware of the current time.

*   **Bug: z.ai Network Integration**
    *   **Issue:** [#414](https://github.com/moltis-org/moltis/issues/414) (Bug)
    *   **Activity:** 7 comments
    *   **Analysis:** Users are experiencing friction with third-party provider integrations. The "z.ai" provider is failing out of the box due to network errors, indicating a need for better validation of provider configurations or documentation updates.

## 5. Bugs & Stability
*   **Severity: High (JSON Schema Compliance)**
    *   **Issue:** [#485](https://github.com/moltis-org/moltis/issues/485) - Built-in tools generate invalid JSON Schema for strict providers.
    *   **Status:** Open (New)
    *   **Impact:** This breaks compatibility with "strict" output mode providers, rendering tools unusable for users relying on structured outputs.
*   **Severity: Medium (Docker/Permissions)**
    *   **Fixed:** [PR #477](https://github.com/moltis-org/moltis/pull/477) - Resolved crashes where Chrome containers (running as uid 999) could not write to host-mounted directories due to permission errors.
*   **Severity: Medium (Tool Parsing)**
    *   **Fixed:** [PR #480](https://github.com/moltis-org/moltis/pull/480) - The cron tool now handles parameter serialization errors caused by LLMs (like Qwen3-Coder) double-serializing JSON.
*   **Severity: Low (Config Import)**
    *   **Fixed:** [PR #478](https://github.com/moltis-org/moltis/pull/478) - Importing configurations from OpenClaw now preserves template comments, preventing the loss of documentation in `moltis.toml`.

## 6. Feature Requests & Roadmap Signals
*   **Tiered Memory Recall:** Issue [#483](https://github.com/moltis-org/moltis/issues/483) explicitly requests the reimplementation of tiered recall (prepending `MEMORY.md`). This aligns with the recent work in [PR #476](https://github.com/moltis-org/moltis/pull/476) and suggests the team is actively reworking how memory is managed to fix "append ordering bugs" where new memories were dropped.
*   **Multi-Agent Architecture:** [PR #34](https://github.com/moltis-org/moltis/pull/34) (closed/merged) introduced the foundational design for multi-agent support, including agent presets and spawning configurations.
*   **Node.js in Docker:** Successfully delivered via [PR #479](https://github.com/moltis-org/moltis/pull/479), fulfilling user requests to run MCP servers natively within the Moltis container.

## 7. User Feedback Summary
*   **Positive:** Users with complex setups (e.g., Matrix media, local LLMs, WhatsApp) are seeing rapid fixes to edge cases. The addition of Node.js in Docker was a specific pain point that has now been addressed.
*   **Pain Points:** Users adopting "strict" mode providers are facing breakage ([Issue #485](https://github.com/moltis-org/moltis/issues/485)). There is also confusion regarding the change in datetime handling, with some users preferring it in the system prompt versus the new message-injection method for cache performance.

## 8. Backlog Watch
*   **Feature Request:** Issue [#176](https://github.com/moltis-org/moltis/issues/176) (Add datetime to system prompt context) remains open despite the recent refactoring. Maintainer attention is needed to reconcile the request for context awareness with the new technical implementation for KV caching.
*   **Provider Integration:** Issue [#414](https://github.com/moltis-org/moltis/issues/414) (z.ai network errors) remains active. While 7 comments suggest user troubleshooting, a fix or official documentation update may be required if it is a framework-level issue.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Project Digest: CoPaw (agentscope-ai/CoPaw)
**Date:** 2026-03-25

## 1. Today's Overview
CoPaw is experiencing a **high-velocity development phase** following the release of v0.2.0, with significant community engagement. The project saw 50 updated issues and 50 updated PRs in the last 24 hours, indicating a rapid iteration cycle. However, the release appears to have introduced **regression bugs** and stability concerns, particularly regarding Docker deployments, inter-agent communication, and system resource usage (100% CPU idle usage). Despite these friction points, the community is actively contributing new features, suggesting strong user adoption and a desire to shape the platform's roadmap.

## 2. Releases
### **v0.2.0**
This release focuses on enhancing agent orchestration and communication capabilities.
*   **Inter-Agent Communication:** Introduced `copaw agents` and `copaw message` CLI commands. This allows users to list agents, push messages to channels programmatically, and facilitate agent-to-agent requests ([#1959](https://github.com/agentscope-ai/CoPaw/pull/1959), [#2161](https://github.com/agentscope-ai/CoPaw/pull/2161)).
*   **Note:** Following this release, users are advised to monitor Docker volume mounts, as migration issues have been reported (see Bugs & Stability).

## 3. Project Progress
*   **Routing Intelligence:** PR [#2144](https://github.com/agentscope-ai/CoPaw/pull/2144) upgrades the backend routing runtime from fixed heuristics to a "local judge v1," allowing for more dynamic agent decision-making.
*   **Skill Management:** PR [#2219](https://github.com/agentscope-ai/CoPaw/pull/2219) introduces unified skill management, enabling customization of built-in skills for newly created agents via new API endpoints.
*   **Model Fallback:** PR [#2199](https://github.com/agentscope-ai/CoPaw/pull/2199) implements automatic model failover with cooldown support, improving resilience against rate limits and provider errors.
*   **Bug Fixes:**
    *   Fixed heartbeat cron expression validation (e.g., "0 6 * * *") which was previously incorrectly rejected ([#2217](https://github.com/agentscope-ai/CoPaw/pull/2217)).
    *   Fixed connection testing for `minimax-cn` provider regarding Token Plan API keys ([#2205](https://github.com/agentscope-ai/CoPaw/pull/2205)).
    *   Added `/stop` command implementation to interrupt stuck tasks across channels ([#1913](https://github.com/agentscope-ai/CoPaw/pull/1913)).

## 4. Community Hot Topics
*   **Context & Memory Compaction:** Issue [#2047](https://github.com/agentscope-ai/CoPaw/issues/2047) (8 comments) proposes enhancing context recovery. Users currently face "blind spots" when memory compaction occurs, leading to a loss of continuity in tasks. This is a critical UX concern for long-running agent sessions.
*   **Agent Communication Protocol (ACP):** Issue [#1059](https://github.com/agentscope-ai/CoPaw/issues/1059) (4 comments) requests support for ACP to integrate with IDE-based coding agents (like Codex or Claude Code). This signals a desire for CoPaw to act as a bridge between development environments and operational agents.
*   **Unified `/stop` Command:** PRs [#2067](https://github.com/agentscope-ai/CoPaw/pull/2067) and [#1913](https://github.com/agentscope-ai/CoPaw/pull/1913) are highly active, addressing the critical need to manually interrupt agent loops or long-running shell commands.

## 5. Bugs & Stability
*   **CRITICAL: Docker Data Loss (v0.1.0 -> v0.2.0):** Issue [#2097](https://github.com/agentscope-ai/CoPaw/issues/2097) (12 comments) reports that upgrading via Docker causes `skills` and `workspace` files to vanish from the UI, even if they exist on the volume. **Severity: High.**
*   **CRITICAL: 100% CPU Usage:** Issue [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) reports v0.2.0 pegging the CPU at 100% at idle due to a busy-polling epoll loop. **Severity: High.**
*   **High Severity: Memory Compaction Interrupts Tasks:** Issue [#1974](https://github.com/agentscope-ai/CoPaw/issues/1974) describes how scheduled context compression kills active tasks and opens new sessions instead of resuming.
*   **Functional: UI/Session Bugs:**
    *   DingTalk group chats display multiple users as a single session ([#2175](https://github.com/agentscope-ai/CoPaw/issues/2175)).
    *   Approval timeouts (e.g., for shell commands) leave agents in a permanent waiting state ([#2193](https://github.com/agentscope-ai/CoPaw/issues/2193)).
    *   MiniMax Token Plan keys fail connection checks ([#2195](https://github.com/agentscope-ai/CoPaw/issues/2195)).

## 6. Feature Requests & Roadmap Signals
*   **Platform Support:**
    *   **WeChat ClawBot:** Issue [#2043](https://github.com/agentscope-ai/CoPaw/issues/2043) (9 reactions) requests support for the new WeChat ClawBot API.
    *   **Built-in WeChat Channel:** PR [#2123](https://github.com/agentscope-ai/CoPaw/pull/2123) is actively working on a built-in WeChat channel with QR login.
*   **Usability Enhancements:**
    *   **Image Support in Console:** Issue [#2220](https://github.com/agentscope-ai/CoPaw/issues/2220) requests native image display in the chat window.
    *   **Markdown Input:** Issue [#2214](https://github.com/agentscope-ai/CoPaw/issues/2214) requests markdown formatting support for user input, not just agent output.
    *   **Skill Execution Tracking:** Issue [#2216](https://github.com/agentscope-ai/CoPaw/issues/2216) proposes analytics to track which skills are used most frequently and their success rates.

## 7. User Feedback Summary
*   **Pain Points:** The primary source of frustration is **instability in production environments**. Users report that agents often "get stuck" (requiring a stop button), "forget" context after compaction, or fail to load models correctly when switching agents.
*   **"The agent is stupid":** Issue [#2166](https://github.com/agentscope-ai/CoPaw/issues/2166) reflects a sentiment that the agent lacks self-improvement capabilities. Users are frustrated that agents cannot "learn" from previous successful tool calls (e.g., killing a process) and apply them to future sessions without re-prompting.
*   **Docker Trust:** Users are wary of updating due to the recurring issue with volume mounts and file visibility in Docker environments.

## 8. Backlog Watch
*   **Issue #1132 (QQ Bot Validation Error):** Originally opened Mar 10, updated Mar 24. A persistent Pydantic validation error in the QQ channel integration remains unresolved.
*   **Issue #1932 (DingTalk Long Chat Error):** Opened Mar 20, updated Mar 24. Users encounter 500 errors when DingTalk conversations exceed a certain length (buffer limit), indicating a need for streaming or chunking handling in the channel integration.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-25

## 1. Today's Overview
ZeptoClaw is demonstrating **high development velocity** and strong project health, characterized by intense maintenance cycles and active stabilization of its communication channels. With **29 Pull Requests** updated in the last 24 hours (21 merged/closed), the project is rapidly iterating on core infrastructure, tool execution, and Telegram integrations. While **dependency management** (via Dependabot) accounts for a significant portion of the volume, the team is simultaneously addressing critical concurrency bugs (`P1-critical`) and expanding multimodal capabilities. The release of versions **v0.8.2** and **v0.8.1** indicates a push to harden tool execution and improve standard library support. Activity is robust, with immediate responses to user-reported bugs regarding message handling and provider routing.

## 2. Releases
**v0.8.2** (Latest)
*   **Focus:** Dependency maintenance and CI/CD updates.
*   **Key Changes:** Bumped `Swatinem/rust-cache` to v2.9.1 and `docker/metadata-action` to v6.0.0.
*   **[Release Details](https://github.com/qhkm/zeptoclaw/releases/tag/v0.8.2)**

**v0.8.1**
*   **Focus:** Tooling reliability and Conformance.
*   **Key Changes:**
    *   `fix(lib)`: Hardened embedded `ZeptoAgent` tool execution logic.
    *   `feat(tools)`: Added conformance fixtures, edit fuzzy matching, and output truncation.
*   **Security:** Telegram channel security improvements were included.
*   **[Release Details](https://github.com/qhkm/zeptoclaw/releases/tag/v0.8.1)**

## 3. Project Progress
The project advanced significantly in **infrastructure hardening** and **feature stabilization** over the last 24 hours.

*   **Telegram Reliability:** Merged **[#409](https://github.com/qhkm/zeptoclaw/pull/409)** to resolve a silent failure issue where long LLM responses (>4096 bytes) were dropped by Telegram. The system now intelligently splits messages at markdown boundaries (paragraphs, code fences) to ensure delivery.
*   **Dependency Hygiene:** A massive cleanup cycle occurred, merging 15+ dependency updates including Docker base images (`debian`), Rust crates (`rustyline`, `bcrypt`), and JavaScript tooling (`astro`, `starlight`). This keeps the attack surface low and performance current.
*   **Core Tooling:** v0.8.1 shipped improvements to "edit_file" fuzzy matching and tool execution conformance, directly addressing stability in agent workflows.

## 4. Community Hot Topics
Community engagement is currently centered on the **usability of AI Agents** and the **Telegram integration**.

*   **Agent Configuration & Support:**
    *   **[Issue #397 (CLOSED)](https://github.com/qhkm/zeptoclaw/issues/397)** sparked a discussion on community support channels. The user struggled to configure `Qwen` models and requested a space for discussion. While closed, this highlights a need for better on-ramp documentation or community chat for users configuring non-standard LLMs.
*   **Telegram Multimodal Support:**
    *   **[PR #420 (OPEN)](https://github.com/qhkm/zeptoclaw/pull/420)** has opened to address the inability to process photos. The community is eager to see vision capabilities added to the Telegram bot, moving beyond text-only interactions.

## 5. Bugs & Stability
Stability is currently under active development, specifically regarding **concurrency** and **provider discovery**.

*   **[P1-Critical] Provider Discovery Regression:**
    *   **Issue:** **[#416](https://github.com/qhkm/zeptoclaw/issues/416)** reports that `provider_name_for_model()` incorrectly parses vendor-prefixed IDs (e.g., `anthropic/claude-sonnet-4-6`), breaking OpenRouter-style routing.
    *   **Fix Status:** Fix incoming via **[PR #417](https://github.com/qhkm/zeptoclaw/pull/417)**.
*   **[P1-Critical] Tool Execution Bugs:**
    *   **Issue:** **[#403](https://github.com/qhkm/zeptoclaw/issues/403)** identified bugs in the `edit_file` fuzzy matching logic (NFC normalization mapping and whitespace reduction causing hangs).
    *   **Fix Status:** Likely addressed in v0.8.1 and PR #417.
*   **Telegram Race Conditions:**
    *   **Issue:** **[#415](https://github.com/qhkm/zeptoclaw/issues/415)** describes a typing indicator race condition where concurrent messages cause the first sender's typing indicator to be cancelled prematurely.
    *   **Fix Status:** A complex concurrency fix using refcounting and atomic operations is open in **[PR #418](https://github.com/qhkm/zeptoclaw/pull/418)**.
*   **Telegram Photo Drops:**
    *   **Issue:** **[#419](https://github.com/qhkm/zeptoclaw/issues/419)** documents that photo messages are silently ignored because the handler gates on `msg.text()`.
    *   **Fix Status:** Feature implementation started in **[PR #420](https://github.com/qhkm/zeptoclaw/pull/420)**.

## 6. Feature Requests & Roadmap Signals
The project is expanding its **I/O capabilities** and standardizing **Agent Client Protocols**.

*   **Vision Support:** The immediate desire to support image inputs in Telegram (**[#420](https://github.com/qhkm/zeptoclaw/pull/420)**) suggests a roadmap focus on Multimodal Agents.
*   **ACP Standardization:** Long-running **[PR #356](https://github.com/qhkm/zeptoclaw/pull/356)** (open since March 13) implements the Agent Client Protocol (ACP) via stdio and HTTP. This signal indicates the project is positioning itself as a compliant backend for various AI client frontends.

## 7. User Feedback Summary
User sentiment reveals friction in **configuration** and **communication reliability**.

*   **Configuration Difficulty:** Users are finding it hard to configure specific models (like Qwen) with ZeptoClaw (**[#397](https://github.com/qhkm/zeptoclaw/issues/397)**), suggesting that environment setup or provider configuration files may be opaque.
*   **Silent Failures:** Users are dissatisfied with "silent" errors in the Telegram interface (dropped photos, dropped long messages). The fixes in **[#409](https://github.com/qhkm/zeptoclaw/pull/409)** and **[#420](https://github.com/qhkm/zeptoclaw/pull/420)** directly address these transparency and usability concerns.

## 8. Backlog Watch
*   **ACP Implementation:** **[PR #356](https://github.com/qhkm/zeptoclaw/pull/356)** remains open but is active (updated today). It is a major feature addition requiring careful review before merge.
*   **Claude Code Workflow:** **[PR #421](https://github.com/qhkm/zeptoclaw/pull/421)** indicates an internal effort to document guidelines for "Claude Code" sessions, suggesting the maintainers are using AI tools to write code and need to standardize how those contributions enter the codebase.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-03-25

## 1. Today's Overview
EasyClaw experienced a focused day of UI consolidation with high development throughput despite zero open discussions. There were 3 pull requests merged and closed within the last 24 hours, indicating a successful push to finalize a significant UI migration. No new releases were published, suggesting the merged features may be accumulating for a future minor version or are currently being stabilized in the `main` branch. With 0 active issues and 0 open PRs updated, the project appears to be in a clean state, having cleared a batch of technical debt related to theming and user interface components.

## 2. Releases
**None**
*No new release versions were published in the last 24 hours.*

## 3. Project Progress
The project advanced significantly in frontend maturity, specifically focusing on **User Experience (UX)** and **Theme Architecture**.

*   **UI Migration & Architecture:**
    *   PR #20 ([`CLOSED`]): A major refactor was completed to consolidate UI components. This included the creation of a unified `icons.tsx` file to handle SVGs and the extraction of `BottomActions` (Theme Toggle, Language, Help, User Avatar) into a dedicated component. This improves code maintainability and consistency.
    *   [View PR #20](https://github.com/gaoyangz77/rivonclaw/pull/20)

*   **Authentication & Account Management:**
    *   PR #23 ([`CLOSED`]): The authentication modal and account page were fully redesigned. Key enhancements include a "pill" tab switcher, password visibility toggles, and a split-card layout for the account page that aligns with the rest of the settings.
    *   PR #24 ([`CLOSED`]: A new UserPopover component was implemented to replace the dedicated `/account` navigation route. This introduces a hover/click-based dropdown for quick access to profile details, plan information, and logout, streamlining the workflow for logged-in users.
    *   [View PR #23](https://github.com/gaoyangz77/rivonclaw/pull/23)
    *   [View PR #24](https://github.com/gaoyangz77/rivonclaw/pull/24)

## 4. Community Hot Topics
There are no active community discussions or "Hot Topics" to report today.
*   **Issue Count:** 0 (Total Open/Active Issues: 0)
*   **PR Discussions:** All 3 updated PRs were merged/closed immediately with 0 comments listed, suggesting these were internally reviewed or solo contributions without significant community debate.

## 5. Bugs & Stability
**No bugs reported.**
*   There are no open issues reporting crashes, errors, or regressions.
*   The merged PRs (#20, #23, #24) focused on UI refactoring and feature additions; no "fix" tags or critical stability patches were observed in the recent changelog.

## 6. Feature Requests & Roadmap Signals
Based on the merged PRs, the following signals indicate the project's direction:
*   **UX Polish & Consistency:** The consolidation of icons and bottom actions (PR #20) suggests a roadmap focus on a unified design system.
*   **Streamlined Access:** The move from a page-based account view to a popover (PR #24) signals a shift towards "app-like" behavior and reduced navigation friction.
*   **Auth Improvements:** The addition of password strength bars and "pill" tab switchers (PR #23) indicates a priority on modernizing the onboarding and security experience.

## 7. User Feedback Summary
*   **Satisfaction:** Implicit satisfaction is high regarding the UI direction, evidenced by the clean merge of significant UI overhauls without pushback.
*   **Pain Points:** No explicit negative feedback was recorded. However, the complexity of the previous UI (necessitating a refactor for icons and bottom actions) implies the previous codebase may have been difficult to maintain or visually inconsistent.

## 8. Backlog Watch
**Clear.**
*   The project currently has 0 open issues and 0 open pull requests listed in the updated data.
*   There are no long-unanswered items requiring immediate attention; the repository appears well-maintained with no outstanding debt in the tracker.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*