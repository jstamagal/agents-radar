# OpenClaw Ecosystem Digest 2026-03-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-15 00:11 UTC

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

# OpenClaw Project Digest — 2026-03-15

## 1. Today's Overview
OpenClaw is experiencing **extremely high activity** with 500 issues and 500 pull requests updated in the last 24 hours. The project recently released a recovery version (`v2026.3.13-1`) to fix a broken release path, while simultaneously battling a surge of critical regressions reported in versions `2026.3.12` and `2026.3.11`. The community is highly engaged, with widespread reports of UI freezes, WebSocket handshake failures, and broken integrations (WhatsApp, Slack, Mistral), indicating recent releases have introduced significant instability into the gateway and agent core.

## 2. Releases
- **v2026.3.13-1 (`openclaw 2026.3.13`):** A recovery release created to replace the broken `v2026.3.13` tag (GitHub immutable release restriction). The npm version remains `2026.3.13`.
    - **Note:** This follows the pre-release `v2026.3.13-beta.1`, which prepared macOS assets using the stable app version.
    - **Changes:** Includes a redesign of the Android/chat settings sheet.

## 3. Project Progress
*Merged/closed PRs today (selected):*
- **Revert:** PR #46649 (Closed) restored `supportsUsageInStreaming=false` for non-native endpoints to prevent breaking Ollama, LM Studio, and Mistral API integrations, which had begun rejecting requests with HTTP 400/422 errors.
- **Security:** PR #46440 (Closed) established `@openclaw/secops` ownership for sensitive paths (secrets, sandboxing, auth).
- **Zalouser:** PR #46663 (Closed) fixed a bug where group allowlists were incorrectly restricted by DM allowlists.
- **Feishu:** PR #46651 (Closed) fixed thread bootstrap issues across different ID types.

## 4. Community Hot Topics
- **[UI Broken] #45471 (69 comments):** Users reporting the UI chat fails to open entirely, displaying only the OpenClaw symbol.
    - **Link:** [openclaw/openclaw#45471](https://github.com/openclaw/openclaw/issues/45471)
    - **Analysis:** A critical regression affecting the primary interface for desktop users.
- **[Tool Failure] #45074 (19 comments):** "Tools intermittent 'Tool not found'" affecting `read`, `exec`, etc.
    - **Link:** [openclaw/openclaw#45074](https://github.com/openclaw/openclaw/issues/45074)
    - **Analysis:** Suggests a regression in the tool dispatcher or gateway pathing logic.
- **[OOM Crash] #45064 (17 comments):** Memory leaks/OOM crashes on basic CLI commands (`gateway status`, `doctor`) in v2026.3.12.
    - **Link:** [openclaw/openclaw#45064](https://github.com/openclaw/openclaw/issues/45064)
    - **Analysis:** Severe stability regression in the CLI wrapper.
- **[WhatsApp Down] #45171 (15 comments):** WhatsApp outbound path broken; "No active WhatsApp Web listener" error persists despite connection.
    - **Link:** [openclaw/openclaw#45171](https://github.com/openclaw/openclaw/issues/45171)
- **[Mistral 422] #45227 (14 comments):** 422 errors when using Mistral models.
    - **Link:** [openclaw/openclaw#45227](https://github.com/openclaw/openclaw/issues/45227)

## 5. Bugs & Stability
*Ranked by severity/impact:*
1. **Critical Regression - Gateway/WebSocket:** Multiple reports (#45222, #44714, #45750) indicate **loopback gateway handshake failures** and RPC timeouts are rampant. This breaks core CLI commands and cron workflows.
    - *Fix Status:* PR #46555 attempts to fix opaque origin handling, but general handshake instability remains open.
2. **Platform Specific - WhatsApp:** High volume of duplicate reports (#45171, #41950, #45387, #45511) regarding the "No active WhatsApp Web listener" error. Auto-reply works, but active sends fail.
3. **High Priority - Memory/Crash:** Issue #45064 (OOM on basic commands) renders the CLI unusable for many.
4. **Integration - Slack:** Issue #45311 reports zero inbound events in Socket Mode (regression in 2026.3.12).
5. **Integration - Synology:** Issue #45822 reports webhooks failing completely in v2026.3.12+.

## 6. Feature Requests & Roadmap Signals
- **Trust Windows (PR #46657):** A highly requested feature for "time-bounded exec approvals." This would allow users to temporarily elevate permissions (e.g., for 1 hour) to avoid constant approval prompts without permanently compromising security. (Status: Open)
- **VSCode Debugging (PR #45710):** Adding out-of-the-box debugging support for VSCode-based IDEs to improve developer experience (DX).
- **Agent-to-Agent Visibility (PR #46660):** Hooks to make intermediate A2A (Agent-to-Agent) turns visible to channel plugins (DingTalk, Discord), improving transparency.
- **Write Tool Append Mode (PR #40574):** Request to prevent silent data loss when multiple sessions write to the same file by adding an `append` parameter.

## 7. User Feedback Summary
- **Pain Points:**
    - **Update Anxiety:** Users are explicitly hesitant to update ("auto-reply works, message tool fails"), citing fear of breaking previously working features.
    - **Context Management:** Complaints about the "Context Usage" warning blocking sessions (#45572) and the UI breaking at 100% context (#45794).
    - **Platform Inconsistency:** The "Proxy" and "VPN" support is flaky; users behind Clash/mihomo fake-IP ranges are blocked by new SSRF checks (#25215).
- **Use Cases:**
    - **Sandboxing:** Heavy usage in Docker environments (`openclaw-sandbox:bookworm-slim`), though currently broken for Python-dependent tools (#45108).
    - **Channel Variety:** Heavy reliance on mixed-channel routing (WhatsApp, Slack, Telegram, Synology).

## 8. Backlog Watch
- **Stale Bug:** #8731 (Bulk messaging delay) - The agent waits until a task is completely done before sending the "Typing..." bulk message in reverse order. Open since early Feb.
- **Stale Bug:** #14936 (MiniMax M2.5 chunking) - Messages sent in pieces to Telegram instead of one block.
- **Long-standing Auth Issue:** #34830 (401 missing auth header) - Reported for weeks, affecting OpenRouter users.
- **Feature Request:** #23281 (Configurable Vision Model) - Users want to change the vision model used by the image tool without hacking configs.

---

## Cross-Ecosystem Comparison

# Ecosystem Digest Report: Personal AI Agents & Assistants
**Date:** 2026-03-15
**Analyst:** Senior Open Source Ecosystem Analyst

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is currently undergoing a **volatile expansion phase** characterized by high-velocity development and architectural maturation. While core frameworks like **OpenClaw** are battling significant instability risks due to aggressive deployment cycles, "bifurcated" forks and specialized newcomers (e.g., **NanoBot**, **NanoClaw**) are capturing user mindshare by focusing on niche use-cases such as local-only inference and strict security hardening. The ecosystem is moving beyond simple chat interfaces to complex **multi-agent orchestration**, **autonomous self-improvement**, and **standardized interoperability protocols** (ACP), though **integration reliability** (channels, providers, and local OS environments) remains the primary bottleneck for production readiness across all projects.

## 2. Activity Comparison
| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | **Critical Recovery** (v2026.3.13-1) | ⚠️ **Critical** (Regressions) |
| **NanoBot** | 27 | 57 | Pre-release (`post3`/`post4`) | 🟡 **High Growth** (Config debt) |
| **Zeroclaw** | 30 | 50 | **Stable** (v0.3.0) | 🟢 **Stable** (Cleaning phase) |
| **PicoClaw** | 20 | 61 | Nightly (`v0.2.3-n`) | 🟡 **Feature Heavy** (Unstable) |
| **NanoClaw** | 0 | 50 | Pre-release (Merge Lull) | 🟢 **Innovative** (Autonomy focus) |
| **NullClaw** | 13 | 41 | **Active** (v2026.3.14) | 🟢 **Secure** (Subagents) |
| **IronClaw** | 13 Closed | 18 Merged | **Stable** (No new rel) | 🟢 **Performance** (Debt cleanup) |
| **Moltis** | 9 | 6 | Pending Release | 🟢 **Reliable** (Cron/LLM fixes) |
| **LobsterAI** | 3 | 3 Merged | Stale (v0.2.2/3) | 🟡 **UX Refactoring** |
| **CoPaw** | 50 | 29 | Pre-release (v0.0.7) | 🟡 **Stabilizing** (Docker bugs) |
| **TinyClaw** | 0 | 5 New | Stable (Web UI focus) | 🟢 **UX Simplification** |
| **ZeptoClaw** | 5 Closed | 6 | Stable | 🟢 **Polishing** (ACP impl.) |
| **EasyClaw** | 0 | 0 | Inactive | ⚫ **Dormant** |

*\*Health Score based on stability of latest releases vs. activity volume (Green=Stable, Yellow=Shifting, Red=Critical).*

## 3. OpenClaw's Position
**Status: The Unstable Giant.**
OpenClaw remains the de-facto reference implementation with the largest community footprint (500 issues/PRs daily), but it is currently suffering from a **critical stability crisis**.
*   **Advantages:** Unmatched channel breadth (WhatsApp, Slack, Feishu) and tool variety.
*   **Peer Comparison:** Unlike **IronClaw** or **Zeroclaw**, which are actively resolving technical debt and O(n²) bottlenecks, OpenClaw is introducing new regressions (WebSocket handshakes, OOM crashes) faster than they are being fixed.
*   **Community Risk:** High. Users are explicitly hesitating to update ("Update Anxiety"), a sentiment not seen in more agile forks like **NanoBot**. **NanoClaw** is threatening OpenClaw's dominance among power users by offering "Agentic Autonomy" features (skill creation, self-healing) that OpenClaw does not natively support.

## 4. Shared Technical Focus Areas
Requirements emerging across the ecosystem indicate a convergence toward "Production-Grade Autonomy":

*   **Local-First & Hybrid Inference:**
    *   *Projects:* **NanoBot**, **PicoClaw**, **LobsterAI**.
    *   *Need:* Robust support for local models (Ollama, LM Studio) without losing agent capabilities (tool use/function calling). Users want "Agentic" behavior locally, not just chat.
*   **Multi-Agent & Collaborative Orchestration:**
    *   *Projects:* **NanoBot**, **IronClaw**, **NanoClaw**, **Moltis**.
    *   *Need:* Frameworks for "Agent-to-Agent" communication, shared mailboxes, and specialized sub-agents (e.g., "Coder" vs. "Manager").
*   **Standardized Inter-Agent Protocols:**
    *   *Projects:* **ZeptoClaw**, **IronClaw**, **NanoBot**.
    *   *Need:* Adoption of **ACP (Agent Client Protocol)** to allow agents to trigger other agents as tools, moving away from monolithic single-binary designs.
*   **Security Sandboxing & Approval Flows:**
    *   *Projects:* **CoPaw**, **NullClaw**, **OpenClaw**.
    *   *Need:* "Time-bounded approvals" (Trust Windows) and strict prevention of "YOLO" autonomy on public interfaces to prevent self-deletion or data leaks.
*   **Web-First Configuration:**
    *   *Projects:* **TinyClaw**, **CoPaw**, **NanoBot**.
    *   *Need:* Shift away from CLI/JSON config editing toward interactive web wizards (`/connect` pages) to lower onboarding friction.

## 5. Differentiation Analysis

| Project | Key Differentiation | Target User | Technical Architecture |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **Universal Gateway.** Integrates everything (WhatsApp, Slack, etc.). | Power Users / DevOps | **Gateway Agent:** Centralized controller managing "skills" and channels. |
| **NanoBot** | **Local-First Flexibility.** Best for running local LLMs (Qwen, DeepSeek) with custom channels. | Developers / Privacy Advocates | **Micro-Services:** Modular design allowing users to patch Python channels easily. |
| **IronClaw** | **Performance Obsessed.** Focus on Rust-based reliability and eliminating performance panics. | Enterprise / Production | **Routine Engine:** Focus on cron/jobs and WASM-based hot-loading. |
| **NanoClaw** | **Self-Improving Agent.** Focus on "Metacognition" and agent-written skills. | Researchers / Hobbyists | **Containerized:** Heavy use of Apple Containers/VMs for isolation; sophisticated memory stack. |
| **NullClaw** | **Security & Subagents.** "Expert Mode" switches and complex routing logic. | Security Conscious | **Hierarchical:** Strong focus on subagent delegation and strict `http_request` auditing. |
| **Zeroclaw** | **Privacy & Zero-Trust.** Default-deny security; focused on Matrix/Signal. | Privacy Users | **Strictly Typed:** Rust-based, high emphasis on correctness and secret management. |
| **TinyClaw** | **Simplicity & UX.** "TinyOffice" web UI focus; minimal configuration. | Non-Technical Users | **Lightweight:** Stripped-down architecture, "flat" conversation state. |

## 6. Community Momentum & Maturity
*   **Tier 1 (Rapidly Iterating / High Risk):** **OpenClaw**, **PicoClaw**. Extreme PR velocity, but introducing instability. "Bleeding edge" is cutting deep.
*   **Tier 2 (Stabilizing / High Value):** **IronClaw**, **Zeroclaw**, **Moltis**. These projects are successfully paying down technical debt (fixing N+1 queries, memory leaks) and releasing stable versions. Best for users seeking reliability.
*   **Tier 3 (Consolidating / UX Focus):** **CoPaw**, **TinyClaw**, **LobsterAI**. Active work on UI/UX and documentation to lower barriers to entry.
*   **Tier 4 (Niche / Experimental):** **NanoClaw**, **ZeptoClaw**. Testing advanced features (ACP, Self-writing skills) that may define the next generation of agents.

## 7. Trend Signals
*   **The "Context Ceiling":** Projects are universally hitting limits on context handling. **OpenClaw** and **Zeroclaw** users report sessions breaking at 100% context or failing to compact.
*   **Integration Fatigue:** There is a noticeable shift away from complex, fragile channel integrations (WhatsApp Web breaking frequently) toward **stable APIs** (Slack, Discord, Matrix) and **Webhooks**.
*   **Agent Reliability Crisis:** A recurring theme across **OpenClaw** (#45471), **CoPaw** (#1493), and **NullClaw** (#521) is "Tool Failure." Agents are hallucinating tool usage or crashing tools (LLMs passing JSON strings to APIs). The community is demanding **schema coercion layers** and **strict validation** before LLM output reaches tool execution.
*   **Value for Devs:** The market is splitting. "Commodity" agents (OpenClaw) are struggling with maintenance debt, while "Specialized" agents (IronClaw for performance, NanoClaw for autonomy) are attracting high-value contributors. **Decision Signal:** Avoid generic "all-in-one" agents for critical production workflows; opt for Rust-based or security-hardened forks.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot on **2026-03-15**.

### 1. Today's Overview
NanoBot is experiencing **high-velocity development** with significant activity focused on expanding channel integrations, refining local LLM support, and improving multi-agent orchestration. In the last 24 hours, the project saw **57 pull requests** and **27 issues** updated, indicating a robust global contributor base. Key technical efforts include optimizing memory handling to prevent blocking (a major user pain point), adding "Team Mode" for collaborative agents, and enhancing support for local multimodal models (e.g., Qwen, GLM) and coding-specific LLMs. While several bugs regarding channel stability (Telegram, QQ, WeCom) and specific model compatibility (LongCat, OpenAI Codex) remain active, the community engagement is high, with many feature requests receiving immediate corresponding PRs.

### 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   **Note:** The codebase appears to be in a pre-release or nightly state (`feat/onboard_question`), as users are reporting issues upgrading via source code from `post3` to `post4` ([#1765](https://github.com/HKUDS/nanobot/issues/1765)).

### 3. Project Progress
*   **New Interactive Configuration Wizard:** PR #2006 (merged/closed based on activity) and PR #2018 introduce `nanobot onboard`, an interactive CLI wizard to replace manual `config.json` editing. This lowers the barrier to entry for new users significantly.
*   **Agent Collaboration:**
    *   **Nano Team Mode:** PR #2013 proposes "Nano Team Mode," allowing an LLM to plan and delegate tasks to a micro-team of 2-3 agents working asynchronously via a shared mailbox/task board.
    *   **Inter-Agent Communication:** PR #2002 adds a dedicated `interagent` channel for direct HTTP communication between NanoBot instances, removing the need for human relay in multi-agent setups.
*   **Channel Enhancements:**
    *   **NapCat (QQ) Support:** PR #2016 adds NapCat/OneBot 11 support for better QQ integration.
    *   **WhatsApp Media:** PR #2010 adds send/receive support for media files (images, audio, video) in WhatsApp.
*   **Performance & Reliability:**
    *   **Async Memory:** PR #1961 proposes background memory consolidation to solve the issue of sessions freezing during memory writes.
    *   **Tool Call Fixes:** PR #2024 fixes a bug where local models returning only `` tags caused the agent to crash or produce empty responses.
    *   **History Slicing:** PR #2015 addresses 400 errors caused by improper message history slicing.

### 4. Community Hot Topics
*   **[Discussion] "Nanobot answers twice" on Telegram** ([#1692](https://github.com/HKUDS/nanobot/issues/1692))
    *   **Activity:** 6 comments.
    *   **Analysis:** A persistent UX issue where the bot sends both a markdown-rendered and a raw text version of the same message. Users are asking for a way to disable the duplicate.
*   **[Feature] Multi-Modal Support for QQ Channel** ([#2000](https://github.com/HKUDS/nanobot/issues/2000))
    *   **Activity:** 4 comments.
    *   **Analysis:** High demand for vision capabilities. Users running local models (like Qwen3.5) want NanoBot to process images sent via QQ. The user has already patched `qq.py` to support this.
*   **[Enhancement] Skill Toggles** ([#1932](https://github.com/HKUDS/nanobot/issues/1932))
    *   **Activity:** 4 comments.
    *   **Analysis:** Users find it inflexible that skills can only be deleted, not disabled. They want an "enabled/disabled" toggle for easier configuration. (Addressed by PR #2023).
*   **[Feature] Token/Cost Logging** ([#2020](https://github.com/HKUDS/nanobot/issues/2020))
    *   **Activity:** 3 comments.
    *   **Analysis:** Critical for users running paid APIs. They need visibility into token usage and costs, which are currently not logged. (Addressed by PR #2022).

### 5. Bugs & Stability
*   **Model Compatibility Issues (Coder/Local Models):**
    *   **Issue:** [#1998](https://github.com/HKUDS/nanobot/issues/1998) reports that coder-optimized models (GLM-4, Qwen-Coder) fail with `InvalidParameter` errors regarding JSON function arguments.
    *   **Issue:** [#1174](https://github.com/HKUDS/nanobot/issues/1174) highlights that memory consolidation frequently fails or hangs indefinitely with local models.
    *   **Issue:** [#2024](https://github.com/HKUDS/nanobot/pull/2024) addresses a crash where models using "think" blocks (e.g., DeepSeek R1, Qwen-Thinking) return empty content after tool execution.
*   **Channel-Specific Bugs:**
    *   **WeCom:** [#1988](https://github.com/HKUDS/nanobot/issues/1988) - Configuration not detected, gateway reports "No Channels Enabled".
    *   **QQ:** [#2003](https://github.com/HKUDS/nanobot/issues/2003) - Inability to send files through the QQ Channel.
    *   **WhatsApp:** [#1879](https://github.com/HKUDS/nanobot/issues/1879) - QR Code generation failing.
*   **System Architecture:**
    *   **Concurrency:** [#1976](https://github.com/HKUDS/nanobot/issues/1976) - User highlights that processing one client message blocks all other clients due to a global lock, suggesting a move to parallel processing is needed.

### 6. Feature Requests & Roadmap Signals
*   **Tavily Search Integration:** PR #2012 enables Tavily as a web search provider alongside the default, offering users more choice and potentially better search quality.
*   **Voice/Audio Support:** PR #1306 introduces reusable voice support, including TTS replies and audio transcription for Discord.
*   **Sandboxing:** PR #1940 adds `bubblewrap` sandboxing for tool execution, improving security by ensuring exec calls cannot see files outside the workspace.
*   **OpenRouter Support:** PR #2026 adds support for `openrouter/*` models, expanding the ecosystem of available LLMs.
*   **Observability:** Requests for viewing sub-agent execution traces ([#1955](https://github.com/HKUDS/nanobot/issues/1955)) and remote file retrieval ([#2025](https://github.com/HKUDS/nanobot/issues/2025)) indicate a desire for better debugging and remote management capabilities.

### 7. User Feedback Summary
*   **Configuration Fatigue:** Users are struggling with manual JSON configuration and channel setup (WeCom, Telegram). The new `nanobot onboard` wizard directly addresses this pain point.
*   **Local Model Preference:** There is a massive shift toward local models (Ollama, Qwen). Users are actively patching the code to support vision ([#2000](https://github.com/HKUDS/nanobot/issues/2000)) and fixing "think" block logic ([#2024](https://github.com/HKUDS/nanobot/pull/2024)), indicating that local-first AI is a primary use case.
*   **Request for Flexibility:** Users want more control over agent behavior—specifically the ability to toggle skills ([#1932](https://github.com/HKUDS/nanobot/issues/1932)) and configure multiple custom providers ([#1991](https://github.com/HKUDS/nanobot/issues/1991)).

### 8. Backlog Watch
*   **Code Coverage & CI:** PR #2001 and #2021 are working on adding Codecov integration and a `CONTRIBUTING.md` guide. This is vital for long-term maintainability as the codebase grows.
*   **Telegram Reply Threads:** [#1262](https://github.com/HKUDS/nanobot/issues/1262) - A request to add `reply_to` parameters for threaded conversations. While closed/merged, it remains a key feature for UX.
*   **Global Processing Lock:** [#1976](https://github.com/HKUDS/nanobot/issues/1976) - Identified as a design flaw where single-threaded processing blocks concurrent users. No fix PR exists yet; this is a critical bottleneck for high-traffic deployments.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-03-15

## Today's Overview
ZeroClaw is experiencing a high-velocity development cycle, successfully moving to **v0.3.0** (with beta releases pushing toward v0.4.0). The project is exceptionally active, with **50 PRs** and **30 issues** updated in the last 24 hours. The focus has shifted from pure feature addition to **stability and integration fixes**, particularly regarding the Matrix channel, Homebrew installations, and provider API compatibility. A significant volume of bugs has been closed (19), indicating a strong "cleanup" phase, though several high-severity issues regarding core agent behaviors (context handling, approval workflows) have surfaced.

## Releases
### **v0.3.0** (Latest Stable)
*   **Core Changes**:
    *   **Channels**: Comprehensive channel matrix tests introduced.
    *   **CI/CD**: Auto-syncing of README "What's New" and Contributors implemented.
    *   **Agent**: Support for interactive session state persistence and recovery.
    *   **Tools**: Added `tool_filter_groups` for per-turn MCP tool schema filtering.
    *   **Packaging**: Added `crates.io` publish workflow; introduced WeCom (WeChat Enterprise) Bot Webhook channel.
*   **Migration Notes**: Users upgrading from v0.2.x should review the new security configurations for skills and scripts. The auto-sync features may alter local README files on update.

### **v0.3.0-beta series** (Active Development)
Multiple beta releases (e.g., v0.3.0-beta.201) are focusing on incremental polish and channel stability fixes.

## Project Progress
### Merged & Closed PRs
*   **Provider Stability**: Merged PRs to fix **Anthropic API 500 errors** by skipping empty text content blocks in requests ([#3515](https://github.com/zeroclaw-labs/zeroclaw/pull/3515), [#3483](https://github.com/zeroclaw-labs/zeroclaw/pull/3483)).
*   **Documentation**: Major cleanup to remove stale onboarding flags (`--interactive`, `--security-level paranoid`) that were causing user confusion ([#3516](https://github.com/zeroclaw-labs/zeroclaw/pull/3516)).
*   **Installation Fixes**: Fixed `/dev/stdin` permission errors in the guided installer for Debian/Linux systems ([#3482](https://github.com/zeroclaw-labs/zeroclaw/pull/3482)).
*   **Platform Expansion**: Added Termux/Android (aarch64-linux-android) as a release target, pushing version toward v0.4.0 ([#3525](https://github.com/zeroclaw-labs/zeroclaw/pull/3525)).

### Active Developments (Open PRs)
*   **Security Architecture**: A critical PR is open to route channel-driven runs (Telegram, Matrix) through the `ApprovalManager`, closing a bypass where supervised tool approvals were ignored ([#3527](https://github.com/zeroclaw-labs/zeroclaw/pull/3527)).
*   **Homebrew Integration**: Fixes for Homebrew service start failures and config path mismatches (`~/.zeroclaw` vs `/opt/homebrew/var/zeroclaw`) ([#3524](https://github.com/zeroclaw-labs/zeroclaw/pull/3524), [#3526](https://github.com/zeroclaw-labs/zeroclaw/pull/3526)).
*   **Matrix Channel**: Fixes for image handling (`[IMAGE:]` tag casing) and reply routing ([#3523](https://github.com/zeroclaw-labs/zeroclaw/pull/3523), [#3522](https://github.com/zeroclaw-labs/zeroclaw/pull/3522)).

## Community Hot Topics
### 1. Security vs. Usability Tension
*   **Issue [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)** (Closed, 35 comments): Users expressed frustration that ZeroClaw's strict security defaults block tool execution (e.g., ffmpeg) even when security configs are relaxed. The user felt the agent was reduced to a "chatbot."
*   **Analysis**: There is a clear user demand for an "Expert Mode" or a global override capability for local/personal instances where security strictness hinders functionality.

### 2. Multi-Agent & Context Engineering
*   **Issue [#3502](https://github.com/zeroclaw-labs/zeroclaw/issues/3502)** (Open): Proposal for robust multi-agent systems with explicit file-based system prompts and strict tool/skill isolation.
*   **Analysis**: High interest from power users to move ZeroClaw from a single-agent framework to a complex orchestration system.

### 3. Advanced Memory Scoring
*   **Issue [#3478](https://github.com/zeroclaw-labs/zeroclaw/issues/3478)** (Open): Request for a 9-stage scoring pipeline (BM25, Weibull decay, MMR diversity) for the SQLite backend.
*   **Analysis**: Users want RAG-level memory management capabilities natively within the agent.

## Bugs & Stability
### Critical (S0/S1 - Workflow Blocked)
1.  **Dashboard 404 Errors**: Multiple reports ([#3454](https://github.com/zeroclaw-labs/zeroclaw/issues/3454), [#3508](https://github.com/zeroclaw-labs/zeroclaw/issues/3508)) of the web dashboard returning 404 Not Found on fresh installs.
2.  **Context Overflow**: Reports ([#1984](https://github.com/zeroclaw-labs/zeroclaw/issues/1984), [#3460](https://github.com/zeroclaw-labs/zeroclaw/issues/3460)) that `compact_context` defaults to false, causing silent failures and unrecoverable loops in long conversations.
3.  **Windows Crashes**: **[#2499](https://github.com/zeroclaw-labs/zeroclaw/issues/2499)** - Binary crashes immediately on launch in Windows 11.
4.  **Provider Failures**: **[#3493](https://github.com/zeroclaw-labs/zeroclaw/issues/3493)** - Anthropic provider throwing 500 errors (fix is merged in #3515).

### High Priority Regressions
*   **WhatsApp/Matrix Signal**: Issues with connecting Feishu, sending Signal messages, and Matrix reply routing were prominent today. Fixes are in PR (#3522).

## Feature Requests & Roadmap Signals
*   **Script Execution**: **[#1889](https://github.com/zeroclaw-labs/zeroclaw/issues/1889)** - Allow users to configure security policies to permit script files (`.sh`, `.bash`) in skills.
*   **Local CA Support**: **[#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458)** - Support for custom inference providers using local PKI/Certificates.
*   **URL Allowlisting**: **[#1800](https://github.com/zeroclaw-labs/zeroclaw/issues/1800)** - Unify URL validation to allow configurable CIDR/domain allowlists for TUN/fake-IP scenarios.

## User Feedback Summary
*   **Pain Points**:
    *   **Configuration Complexity**: Users struggle with path mismatches, especially on Homebrew macOS and Docker.
    *   **Security Paranoia**: The default security settings are too restrictive for local development, leading to frustration.
    *   **Visibility**: Silent failures in context compaction and message routing (Matrix replies) make debugging difficult.
*   **Satisfaction**:
    *   Rapid response to bug reports (many closed within 24h).
    *   Appreciation for the multi-channel support (Matrix, Signal, WhatsApp).

## Backlog Watch
*   **Onboarding UX**: **[#3466](https://github.com/zeroclaw-labs/zeroclaw/issues/3466)** - The interactive onboarding configures `~/.zeroclaw`, but services expect `/opt/homebrew/var/zeroclaw`. This disconnect is a major friction point for new macOS users.
*   **Installation Docs**: **[#3474](https://github.com/zeroclaw-labs/zeroclaw/issues/3474)**, **[#2914](https://github.com/zeroclaw-labs/zeroclaw/issues/2914)** - Installation scripts are returning 404s or failing to explain how to restart services in Docker/Podman.
*   **Channel Matrix Tests**: While added in v0.3.0, the `matrix-sdk` compile failure on Rust 1.94+ ([#3468](https://github.com/zeroclaw-labs/zeroclaw/issues/3468)) indicates ongoing instability in the Matrix ecosystem integration.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-15

## 1. Today's Overview
PicoClaw is experiencing a **high-velocity development cycle** today, with **61 Pull Requests** updated in the last 24 hours (more than triple the daily average) alongside 20 active Issues. The project is clearly in a feature-heavy expansion phase, balancing major architectural refactoring of the agent core with rapid integration of new channels (like Kimi Coding) and security hardening. While the sheer volume of PR activity indicates strong momentum, a cluster of bugs regarding configuration application, Cron execution, and image routing suggests that the `v0.2.3-nightly` builds are currently unstable, requiring careful testing by users.

## 2. Releases
* **New Release: `v0.2.3-nightly.20260314.c68b4f39`**
  * **Status**: Automated Nightly Build (Use with caution).
  * **Context**: This nightly release incorporates the latest changes but has already been implicated in new bugs reported today (e.g., Image Model config not wiring correctly, Prompt cache key errors).
  * **Changelog**: [Compare with v0.2.3](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

## 3. Project Progress
*Closed/Merged Features & Fixes:*
* **Azure OpenAI Support**: PR #1422 was merged, officially adding first-class support for the Azure OpenAI provider. ([PR #1422](https://github.com/sipeed/picoclaw/pull/1422))
* **Feishu File Handling**: Issue #1506 was closed regarding the exposure of local file paths for non-image files in Feishu, enabling agent file tools. ([Issue #1506](https://github.com/sipeed/picoclaw/issues/1506))
* **Logging Improvements**: Merged PR #1442, introducing a custom console formatter to fix how JSON and multiline strings are displayed in logs. ([PR #1442](https://github.com/sipeed/picoclaw/pull/1442))
* **Documentation**: Updated READMEs across the board to include the "Ask DeepWiki" badge. ([PR #1531](https://github.com/sipeed/picoclaw/pull/1531))

*Active Developments (Merged PRs likely pending release):*
* **Agent Steering**: PR #1517 introduces a mechanism to redirect the agent mid-run, preventing wasted time on unwanted actions.
* **Security Hardening**: PR #1576 changes the default for `tools.exec.allow_remote` to `false` (fail-closed), a critical security improvement for remote deployments.

## 4. Community Hot Topics
* **[Core Architecture] Agent Refactor & Event-Driven Loop** ([Issue #1316](https://github.com/sipeed/picoclaw/issues/1316))
  * **Stats**: 10 comments, 1 👍.
  * **Analysis**: There is a strong technical demand from developers to move away from the current "black box" agent loop. Users want hooks, interrupts, and event emission to build better UIs and automation scripts. This is the most significant long-term architectural discussion currently happening.
* **[Feature] Feishu Inbound Files** ([Issue #1506](https://github.com/sipeed/picoclaw/issues/1506))
  * **Stats**: 9 comments, 1 👍.
  * **Analysis**: High demand for PicoClaw to handle documents (PDFs, audio) sent via Feishu, not just images. The community wants the agent to be able to "read" and "process" these local files directly.
* **[Enhancement] Agent Refactor Meta** ([Issue #1216](https://github.com/sipeed/picoclaw/issues/1216))
  * **Stats**: 7 comments.
  * **Analysis**: Follow-up to the refactor discussion, emphasizing that the current codebase is accruing "long-term cost" and needs structural intervention.

## 5. Bugs & Stability
*High Priority / Impact:*
* **[BUG] Image Model Config Ignored** ([Issue #1578](https://github.com/sipeed/picoclaw/issues/1578))
  * **Severity**: High.
  * **Details**: In the latest nightly, `agents.defaults.image_model` is not wired to the loop. All images are sent to the primary text model, causing failures or incorrect behavior.
* **[BUG] Model Changes Require Gateway Restart** ([Issue #1493](https://github.com/sipeed/picoclaw/issues/1493))
  * **Severity**: High.
  * **Details**: Hot-reloading of configuration for new models is broken; users must restart the gateway process.
* **[BUG] `picoclaw cron add` Broken** ([Issue #1532](https://github.com/sipeed/picoclaw/issues/1532))
  * **Severity**: High.
  * **Details**: A "serious bug" in the cron add command is preventing users from creating scheduled tasks.

*Medium Priority:*
* **[BUG] Heartbeat Consuming Tokens** ([Issue #1561](https://github.com/sipeed/picoclaw/issues/1561))
  * **Severity**: Medium.
  * **Details**: A financial/cost bug where keep-alive heartbeats are inexplicably consuming LLM tokens.
* **[BUG] Cron Tasks Failing / Only Descriptions Sent** ([Issue #1568](https://github.com/sipeed/picoclaw/issues/1568))
  * **Severity**: Medium.
  * **Details**: Cron jobs occasionally fail to execute the actual task and only send the description text to the channel.

## 6. Feature Requests & Roadmap Signals
* **Model Provider Expansion**:
  * **Fastembed & Search**: User requested "Model-side search and fastembed" integration ([Issue #1498](https://github.com/sipeed/picoclaw/issues/1498)).
  * **Kimi for Coding**: PRs #1575 and #1514 are actively adding support for Moonshot's "Kimi for Coding" model, including spoofing User-Agent headers to bypass restrictions.
* **Orchestration & Discovery**:
  * **Capability Discovery**: Request for an endpoint to expose agent profiles, IDs, and available tools to external orchestration layers ([Issue #1474](https://github.com/sipeed/picoclaw/issues/1474)).
* **Multi-Agent Framework**:
  * **Collaboration Base**: Long-standing request for a framework to support multi-agent collaboration and shared context ([Issue #294](https://github.com/sipeed/picoclaw/issues/294)).

## 7. User Feedback Summary
* **Pain Points**:
  * **Fragility of Nightlies**: Users reporting issues with the latest nightly build (Image routing, prompt cache bugs) indicate a friction between bleeding-edge features and stability.
  * **Config Complexity**: Issues regarding `query-token` auth being enabled by default ([Issue #1530](https://github.com/sipeed/picoclaw/issues/1530)) and `remote exec` defaults ([PR #1576](https://github.com/sipeed/picoclaw/pull/1576)) show users are very security-conscious and want secure-by-default settings.
  * **Skill Naming**: Users are confused/frustrated by the internal renaming of skills (hyphens to underscores) causing "Tool not found" errors ([Issue #1533](https://github.com/sipeed/picoclaw/issues/1533)).
* **Satisfaction**:
  * High satisfaction with the rapid addition of Azure OpenAI support.
  * Strong appreciation for detailed logging and refactoring efforts (Agent Steering).

## 8. Backlog Watch
* **[Roadmap] Multi-agent Collaboration Framework** ([Issue #294](https://github.com/sipeed/picoclaw/issues/294))
  * **Status**: Open since Feb 2026. Low activity recently (3 comments).
  * **Call**: This is a strategic pillar for PicoClaw to move from "Assistant" to "Agent Framework." Needs maintainer roadmap prioritization.
* **[Bug] ARMv7 (32-bit) Support** ([Issue #407](https://github.com/sipeed/picoclaw/issues/407))
  * **Status**: Open since Feb 2026.
  * **Call**: The Feishu channel fails on 32-bit ARM (Raspberry Pi legacy). With the "Edge" focus of PicoClaw, supporting legacy ARM hardware is important for the community.
* **[Feature] WebSocket Gateway** ([PR #751](https://github.com/sipeed/picoclaw/pull/751))
  * **Status**: Open since Feb 2026.
  * **Call**: A major feature (WebSocket interface) is waiting to be merged. It passed review but hasn't been integrated yet.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-15

## 1. Today's Overview
NanoClaw is experiencing a **surge in development activity** despite the absence of a formal release, with 50 Pull Requests updated in the last 24 hours. The project appears to be in a "merge lull" or pre-release stabilization phase, as 44 PRs remain open and only 6 were merged. The codebase is shifting focus toward advanced agentic capabilities—specifically **self-improvement**, **structured memory**, and **security hardening**—while simultaneously wrestling with infrastructure scaling (merge conflicts) and platform stability (Apple Container runtime).

## 2. Releases
*No new releases published.*

## 3. Project Progress
While the merge volume is low, significant progress was made on feature completeness and platform integration.

**Merged/Closed Features:**
*   **Slack Interaction Layer:** Two PRs were merged to significantly enhance Slack interactivity.
    *   **Emoji Reaction Support:** Agents can now see and react to emoji reactions, and send reactions back to users ([PR #1081](https://github.com/qwibitai/nanoclaw/pull/1081)).
    *   **Threaded Conversations:** Agents can now reply within Slack threads, preserving context better than channel-wide flattening ([PR #1082](https://github.com/qwibitai/nanoclaw/pull/1082)).
*   **Messaging Reliability:** A critical fix was merged for Discord to prevent message loss. If sending fails, the orchestrator now rolls back the cursor to ensure the message is reprocessed ([PR #1078](https://github.com/qwibitai/nanoclaw/pull/1078)).
*   **Documentation:** Contribution guidelines were expanded to cover the skill development structure in detail ([PR #851](https://github.com/qwibitai/nanoclaw/pull/851)).
*   **Integrations:** A community addition for Notion MCP integration was closed ([PR #1077](https://github.com/qwibitai/nanoclaw/pull/1077)).

**Under Active Review:**
*   **Advanced Memory:** A move toward hybrid retrieval (BM25 + Vector) via LanceDB is being proposed to improve recall for keyword-heavy queries ([PR #1043](https://github.com/qwibitai/nanoclaw/pull/1043)).

## 4. Community Hot Topics
The community is highly engaged with the architectural direction of the agent's autonomy and memory.

*   **[Issue #384](https://github.com/qwibitai/nanoclaw/issues/384): "Nanoclaw needs a skill marketplace/registry" (14 👍)**
    *   *Topic:* Modularity vs. Monolith.
    *   *Analysis:* There is a strong desire for a plug-and-play ecosystem. Users want to install skills securely without bloating the core attack surface. This is the most upvoted recent issue, signaling that the "skill" feature is the primary selling point for users.
*   **[Issue #829](https://github.com/qwibitai/nanoclaw/issues/829): "Fix(templates): no SOUL.md rule against fabricating tool execution claims"**
    *   *Topic:* Hallucination & Trust.
    *   *Analysis:* Following a specific incident where the agent claimed to "fake tool calls," users are demanding stricter prompt engineering (System Prompt) to prevent the agent from lying about tool usage. This highlights the critical need for reliability in automated agents.
*   **Learning & Memory Stack:** Issues #913, #910, and #911 are generating discussion around **metacognition**. Users want the agent to explicitly manage its own memory (`USER.md` vs `MEMORY.md`) and create its own skills (`create_skill` tool).

## 5. Bugs & Stability
The project is facing **High Severity** infrastructure issues alongside functional bugs.

**Critical Severity:**
*   **[Issue #1067](https://github.com/qwibitai/nanoclaw/issues/1067): "NanoClaw fails to start on reboot — Apple Container runtime race condition"**
    *   *Impact:* High (Agents fail to auto-start on Mac).
    *   *Details:* The `launchd` trigger fires before the Apple Container runtime is ready.
    *   *Fix Status:* No PR linked yet. This is a blocker for production reliability on macOS.
*   **[Issue #911](https://github.com/qwibitai/nanoclaw/issues/911): "Skill self-creation... with security scanning"**
    *   *Impact:* High Security Risk.
    *   *Details:* Allowing agents to write their own skills introduces a prompt injection vector.
    *   *Fix Status:* Implementation is tracked in the issue; no open PR yet.

**Medium Severity:**
*   **[Issue #829](https://github.com/qwibitai/nanoclaw/issues/829):** Agent fabrication of tool execution logs (See Hot Topics).
*   **[Issue #753](https://github.com/qwibitai/nanoclaw/issues/753):** `--assistant-name` registration fails to update the `groups/main/CLAUDE.md` file, causing the main channel to introduce itself with the wrong name.
*   **[Issue #698](https://github.com/qwibitai/nanoclaw/issues/698):** Agent cannot determine the day of the week from ISO timestamps, breaking scheduling requests.

**Ecosystem Instability:**
*   **Multiple Merge Conflicts:** The `skill/apple-container` and `skill/compact` branches are failing to merge-forward from `main` ([Issues #1073, #1074](https://github.com/qwibitai/nanoclaw/issues/1073)). This suggests rapid iteration on core features is breaking dependent skill plugins.

## 6. Feature Requests & Roadmap Signals
Based on open issues and PRs, the roadmap is pivoting toward **Agentic Autonomy**.

*   **Self-Healing & Creation:** The cluster of issues #911 (Security Scanning), #912 (MCP Tool), and #913 (System Prompts) suggests a "Meta-Agent" feature is coming soon—where NanoClaw can write and deploy its own code skills safely.
*   **Structured Memory:** There is a clear signal to move from flat file memory to a structured split: `USER.md` (Personal Profile) and `MEMORY.md` (Facts/Notes). PR #1063 is already open implementing `USER.md`.
*   **Admin Mode:** Issue #926 proposes a read-only `/capabilities` command for the main channel, hinting at future administrative controls over the agent's runtime.
*   **Security:** PR #1035 seeks to sanitize `WebFetch` output to prevent prompt injection from external websites, a crucial feature for autonomous web browsing.

## 7. User Feedback Summary
**Sentiment:** Mixed. Power users are excited, but platform-specific users are struggling.

*   **Pain Points:**
    *   **Sandboxing Frustration:** User [@rdguidry](https://github.com/qwibitai/nanoclaw/issues/1080) expressed severe dissatisfaction ("want to dunk my mac in sprite") regarding migration to the new sandbox environment, specifically the inability to mount directories (like Dropbox) post-creation. This suggests a UX gap in container configuration.
    *   **Platform Confusion:** Questions about Linux support ([#1075](https://github.com/qwibitai/nanoclaw/issues/1075)) and Intel Mac support ([#1079](https://github.com/qwibitai/nanoclaw/issues/1079)) indicate the documentation is lagging behind the actual supported platforms.
*   **Positive Signals:**
    *   The "Terminal use" comment in #1080 implies the tool is considered "super useful" when it works.
    *   High engagement on the "Skill Marketplace" issue suggests users are invested in the long-term modularity of the project.

## 8. Backlog Watch
Several critical items are stagnant and require maintainer intervention:

*   **[PR #519](https://github.com/qwibitai/nanoclaw/pull/519): Context Compaction (`/compact`)**
    *   *Status:* Open since Feb 26.
    *   *Risk:* Long-running sessions suffer from "context rot." Delaying this limits the agent's utility for long-term tasks.
*   **[PR #551](https://github.com/qwibitai/nanoclaw/pull/551): Security Fix (Rollup CVE)**
    *   *Status:* Open since Feb 27.
    *   *Risk:* Dependency vulnerability (GHSA-mw96-cpmx-2vgc). This should ideally be fast-tracked.
*   **Blocked PRs:** A significant number of older PRs (from late Feb) are marked as "Blocked." The team may need to perform a large rebase or "abandon ship" on these if the `main` branch has diverged too far.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-03-15

## 1. Today's Overview
NullClaw is experiencing a **high-velocity development cycle**, with 41 Pull Requests updated in the last 24 hours, signaling active iteration on stability and security features. While user-reported issues remain moderate (13 active), the project is aggressively addressing technical debt and edge cases, particularly around networking (`http_request`), security hardening, and multi-platform support (Windows WebSockets). The release of **v2026.3.14** indicates a rapid cadence, likely driven by the need to stabilize recent features like Subagents and third-party integrations.

## 2. Releases
**v2026.3.14** (Released 2026-03-14)
This hotfix release focuses on memory management and session stability.
*   **Memory Fix:** Resolved a memory-related issue (PR #486).
*   **Session Management:** Fixed scoping issues for resume sessions in the `claude-cli` to ensure they are strictly bound to NullClaw sessions, preventing potential cross-contamination (PR #478).
*   **Hardening:** Improved robustness in session resume handling logic.

## 3. Project Progress
*   **Security Hardening:** Significant effort is underway to lock down the `http_request` tool. PRs #543, #542, and #541 address memory ownership consistency, sensitive header redaction bypasses, and configuration adherence for timeouts.
*   **Windows Platform Support:** Major improvements are arriving for Windows users. PRs #550 and #549 aim to definitively fix local WebChannel websocket startup issues by patching socket I/O APIs.
*   **Channel Reliability:** Work continues on Lark/Feishu (PR #552) and QQ/OneBot (PR #555, #554) integrations, focusing on websocket health signals and reconnection logic.
*   **Documentation:** PR #547 expands documentation to cover the highly requested "Subagent" routing and AIEOS identity configurations.

## 4. Community Hot Topics
*   **Subagent Configuration ([#508](https://github.com/nullclaw/nullclaw/issues/508))**
    *   **Topic:** Users are struggling to configure Subagents due to a lack of documentation.
    *   **Analysis:** This feature is high-interest but high-barrier. The community needs concrete JSON examples for binding and routing. Addressed in PR #547.
*   **Rate Limiting & Provider Stability ([#341](https://github.com/nullclaw/nullclaw/issues/341), [#380](https://github.com/nullclaw/nullclaw/issues/380))**
    *   **Topic:** Integration issues with Alibaba (Rate limits) and Groq (Incorrect URL).
    *   **Analysis:** Highlights the fragility of third-party LLM provider integrations. The Groq URL issue (#380) was closed, suggesting a fix is imminent or deployed.

## 5. Bugs & Stability
*   **Critical Security (http_request):**
    *   **Sensitive Header Bypass ([#516](https://github.com/nullclaw/nullclaw/issues/516)):** Vulnerability allows bypassing redaction via oversized header names. Fix pending in PR #542.
    *   **Plaintext Secrets ([#537](https://github.com/nullclaw/nullclaw/pull/537)):** PR open to reject configurations that disable encryption.
    *   **YOLO Autonomy on Public Interfaces ([#534](https://github.com/nullclaw/nullclaw/pull/534)):** PR open to block `autonomy.level=yolo` on non-loopback hosts to prevent accidental exposure.
*   **High Severity Stability:**
    *   **Gateway Port Conflicts ([#514](https://github.com/nullclaw/nullclaw/issues/514)):** Daemon hangs silently if the port is in use.
    *   **Tool Call Memory Corruption ([#521](https://github.com/nullclaw/nullclaw/issues/521)):** `http_request` tool crashes due to incorrect memory ownership with `catch ""`. Fix pending in PR #543.
    *   **Settings Persistence ([#525](https://github.com/nullclaw/nullclaw/issues/525)):** Agent forgets states (reasoning, verbose, think) between sessions.

## 6. Feature Requests & Roadmap Signals
*   **Subagent Access to Skills ([#553](https://github.com/nullclaw/nullclaw/issues/553)):** Users want subagents to inherit skills from the main agent, rather than just system prompts.
*   **Local/Configurable Timezones ([#540](https://github.com/nullclaw/nullclaw/issues/540)):** Request to remove hardcoded UTC. **Signal:** PR #546 is already open implementing this feature, suggesting it will be in the next release.
*   **Enhanced Diagnostics ([#520](https://github.com/nullclaw/nullclaw/issues/520)):** Users want `curl` stderr output for debugging failed requests. **Signal:** PR #544 is open.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Windows Usability:** Repeated reports of WebChannel/WebSocket failures on Windows are being actively targeted by the core team.
    *   **Documentation Gaps:** The rapid addition of "Subagents" has outpaced the docs, leading to user confusion.
    *   **Cryptic Errors:** Tool failures (like `http_request`) often return generic error codes, making debugging difficult for end-users.
*   **Positive Signals:** High engagement with new channels (DingTalk, Lark/Feishu) suggests the multi-platform strategy is working well.

## 8. Backlog Watch
*   **Integration Fixes:** Issues regarding specific providers (e.g., Alibaba rate limits #341) require investigation outside the codebase.
*   **Weather Skill Tool Call ([#413](https://github.com/nullclaw/nullclaw/issues/413)):** The `file_read` tool stops during the "Weather" SKILL execution. This highlights a potential regression in tool chaining or memory handling during skill execution.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-15

## 1. Today's Overview
IronClaw is experiencing a **high-velocity development cycle** characterized by aggressive stability improvements and major feature expansion. In the last 24 hours, the project closed 13 issues and merged 18 PRs, indicating a strong focus on resolving technical debt—particularly critical bugs in the routine engine and SSE parsing. However, 32 open PRs suggest a massive backlog of in-flight features, including "XL"-sized efforts around adaptive learning, embedding caches, and job fallback mechanisms. The immediate user experience is impacted by tool serialization bugs (Google Sheets), while the maintainers are simultaneously executing a large-scale refactor to eliminate panic paths in production code.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
*   **Stability & Performance (Closed/Merged):**
    *   **Critical Routine Engine Fixes:** Merged PR #1163 closes issue #823, resolving a **CRITICAL** N+1 query pattern in the `check_event_triggers()` function that degraded performance during event loops.
    *   **SSE Parser Optimization:** Merged PR #1153 closes issue #1142, fixing an **O(n²)** string allocation bottleneck in the hot SSE parsing path (`http_transport.rs`) by replacing buffer slicing with in-place compaction.
    *   **WASM Channel Stability:** Merged PR #1171 closes issue #1052, fixing a bug where hot-activated WASM channels (e.g., Telegram) reverted to an "awaiting pairing" state by ensuring owner bindings are resolved from live settings.
*   **Feature Enhancements (Merged):**
    *   **Human-Readable Routines:** Merged PR #1154 (related to issue #1131) improves UX by translating raw cron expressions into human-readable text in the web UI.
    *   **Parameter Parity:** Merged PR #1170 adds support for `stop_sequences` in tool completions, closing a parity gap between completion and tool requests.

## 4. Community Hot Topics
*   **Elimination of Panics in Production:** PR #1184 is a massive, high-risk undertaking to remove `.unwrap()` calls and replace them with safe error handling. It addresses critical issues like regex validation in `PolicyRule`.
*   **Adaptive Learning System:** PR #1187 proposes a "Level-up" feature introducing skill synthesis, user profiles, and session search. The author notes 30+ iterations of testing, signaling high contributor anticipation despite the complexity.
*   **Schema-Guided Tool Coercion:** PR #1143 (Closed) addresses a fundamental frustration where LLMs pass JSON strings instead of objects to tools (like Google Sheets). While closed, its resolution is vital for tool reliability.

## 5. Bugs & Stability
*   **[CRITICAL] Tool Serialization Failures:**
    *   **Issue #993:** Google Sheets tool fails because the LLM passes `values` as a JSON string instead of an array.
    *   **Issue #1002:** Silent failures where sheets are created but left empty due to parameter passing errors.
    *   *Fix Status:* Likely addressed by the schema normalization efforts in PR #1143 (merged).
*   **[CRITICAL] Google Sheets OAuth 403:**
    *   **Issue #999:** Users receive "PERMISSION_DENIED" immediately after completing OAuth.
    *   *Fix Status:* PR #1158 (Open) includes fixes for MCP/OAuth auth error handling, potentially related.
*   **[HIGH/CRITICAL] CI/Review Findings:**
    *   **Issue #1178:** Workflow linting bypass allows risky code patterns.
    *   **Issue #1179:** AWK state machine logic flaw fails to reset between hunks.
    *   **Issue #1181:** Unsafe `.unwrap()` usage in `registry/manifest.rs`.
    *   *Fix Status:* PR #1184 (Open) aims to resolve the panic-related issues broadly.

## 6. Feature Requests & Roadmap Signals
*   **Slack Socket Mode:** Issue #1155 requests support for Slack "Socket Mode" to avoid opening inbound traffic ports. This is a logical next step for enterprise deployment security.
*   **Documentation Needs:** Issue #1174 highlights a gap in documentation regarding tools limits, skills, and signal configuration.
*   **Search & Caching:**
    *   PR #235 (Open) introduces an LRU embedding cache for workspace search, significantly improving performance for repeated queries.
    *   PR #1187 (Open) suggests the addition of "session search," hinting at a future where agent history is queryable.

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing "silent failures" with Google Sheets integrations (Issues #993, #1002, #999), where the agent acknowledges technical limitations but cannot complete the task. This points to friction in the LLM-to-Tool interface layer.
*   **Security Concerns:** Issue #722 (Closed) noted inconsistency in webhook secret transmission (body vs header), indicating a community focus on security hardening.
*   **Deployment friction:** The request for Slack Socket Mode (Issue #1155) and WASM hot-activation bugs (Issue #1052) suggest users are deploying IronClaw in complex network environments.

## 8. Backlog Watch
*   **XL Feature PRs:** Several "XL" size PRs remain open and need attention:
    *   **PR #236:** Structured fallback deliverables for failed jobs.
    *   **PR #1147:** Redesign of routine create requests.
    *   **PR #1157:** Verification of Telegram owners during hot activation.
*   **Staging CI Issues:** A batch of "staging-ci-review" issues (e.g., #1178, #1179, #1180) were created today and are currently open, requiring review for code quality and safety compliance.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest**
**Date:** 2026-03-15
**Project:** Netease Youdao / LobsterAI

### 1. Today's Overview
LobsterAI exhibits active maintenance with a focus on user experience (UX) refactoring and backend stability. Despite having no new releases, the project merged three pull requests dedicated to interface restructuring and bot connectivity. However, user activity is generating technical debt, specifically regarding update mechanisms and platform compatibility (Apple Silicon), with 3 issues opened in the last 24 hours. The project appears to be in a consolidation phase, refining existing agent memory features before pushing new feature tags.

### 2. Releases
**No new releases published today.**
*Note: The lack of a release likely contributes to Issue #390, where users on v0.2.2 cannot detect the newer v0.2.3.*

### 3. Project Progress
**Closed & Merged PRs (3 items)**
The team successfully merged three PRs focused on architectural improvements and bug fixes:

*   **[UI/UX Refactor] PR #416:** Separated "Agent Settings" (Identity/Soul/User) from the "Memory" tab into a dedicated sidebar.
    *   *Impact:* Improves data organization by isolating `MEMORY.md` from agent prompt definitions. Also fixes i18n missing strings and cleans up dead code related to `CoworkUserMemoryEntry`.
    *   *Link:* [netease-youdao/LobsterAI#416](https://github.com/netease-youdao/LobsterAI/pull/416)
*   **[Feature Integration] PR #415:** Integrated OpenClaw memory association.
    *   *Impact:* Enhances the connectivity between the core agent logic and the OpenClaw memory system, likely resolving underlying data persistence issues.
    *   *Link:* [netease-youdao/LobsterAI#415](https://github.com/netease-youdao/LobsterAI/pull/415)
*   **[Bot Stability] PR #414:** Optimized QQ channel `to` field extraction for scheduled tasks and notifications.
    *   *Impact:* Addresses message routing logic, likely fixing dropped or misdirected automated messages in the QQ bot integration.
    *   *Link:* [netease-youdao/LobsterAI#414](https://github.com/netease-youdao/LobsterAI/pull/414)

### 4. Community Hot Topics
**Most Discussed/Active Issues**

*   **[Local LLM Agent Functionality] Issue #405:** *Local ollama can chat but cannot execute commands?*
    *   *Discussion:* Users report that while online models work, local models (via Ollama: Qwen, DeepSeek) fail to execute shell commands (e.g., listing files) despite configuring `tools` in `openclaw.json`.
    *   *Analysis:* This highlights a critical "Agent Capability Gap" between local and cloud inference. The user intent is to use local models for privacy/cost while retaining full agent autonomy.
    *   *Link:* [netease-youdao/LobsterAI#405](https://github.com/netease-youdao/LobsterAI/issues/405)

*   **[macOS Support] Issue #390:** *Apple Silicon (ARM64) update check fails to recognize v0.2.3.*
    *   *Discussion:* Users on v0.2.2 are told they are on the latest version even when v0.2.3 exists.
    *   *Analysis:* A regression in the auto-update logic for ARM64 builds, preventing users from getting bug fixes.
    *   *Link:* [netease-youdao/LobsterAI#390](https://github.com/netease-youdao/LobsterAI/issues/390)

### 5. Bugs & Stability
**Reported Issues (Severity Ranking)**

1.  **[High Severity - Platform Regression] Apple Silicon Update Verification Failure (#390)**
    *   *Description:* The in-app "Check for Updates" returns a false-positive ("Already latest") on ARM64 macOS.
    *   *Status:* Open. No fix PR linked yet.
    *   *Link:* [netease-youdao/LobsterAI#390](https://github.com/netease-youdao/LobsterAI/issues/390)
2.  **[Medium Severity - Functional Limitation] QQ Bot Instability (#413)**
    *   *Description:* User reports frequent disconnections/log-offs from the QQ Bot.
    *   *Status:* Open. While PR #414 fixed message extraction, the root cause of the disconnects remains under investigation.
    *   *Link:* [netease-youdao/LobsterAI#413](https://github.com/netease-youdao/LobsterAI/issues/413)

### 6. Feature Requests & Roadmap Signals
*   **Local Model Tool-Use Support:** The complaints in **Issue #405** signal a strong demand for robust "Agentic" capabilities (tool execution/function calling) specifically for local Ollama models, rather than just chat completion.
*   **Enhanced Update Mechanism:** Implicitly requested via **Issue #390**; users require a more reliable cross-platform update notifier, particularly for non-x86 architectures.

### 7. User Feedback Summary
*   **Pain Point:** A clear friction point exists for developers trying to run **"Agent" workflows** (tool use) locally. Users are confused why local LLMs behave differently (passive chat) compared to cloud models (active execution) despite config changes.
*   **Satisfaction:** Users are actively engaging with the "Memory" and "Agent" configuration features, evidenced by the specific configuration details provided in bug reports.
*   **Platform:** macOS (Apple Silicon) users are feeling neglected due to the update failure bug.

### 8. Backlog Watch
*   **Investigation Needed:** **Issue #413 (QQ Bot Disconnections)**. This is a fresh report with zero comments. If it affects a wider user base, it could become a major stability headache. The fix in PR #414 helps notifications, but connection stability needs attention.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-15

## 1. Today's Overview
TinyClaw is currently in a highly active development phase, evidenced by a surge in new pull requests (5 updated) while maintaining a stable issue count. The project appears to be in the middle of a significant refactoring and UX enhancement cycle, focusing heavily on simplifying the underlying architecture and improving the initial user experience for TinyOffice. While no releases were published today, the concentration of open PRs suggests the team is converging on a new feature set, likely aimed at lowering the barrier to entry for new users through better web-based configuration.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
The project has not merged any pull requests in the last 24 hours, but 5 new features are currently under active review:

*   **UX Enhancements**: 
    *   **[#214](https://github.com/TinyAGI/tinyclaw/pull/214)** introduces a `--skip-setup` CLI flag and a new `/connect` page in TinyOffice, enabling web-based initial setup and custom API URL configuration. This directly addresses the current reliance on CLI flows for configuration.
    *   **[#216](https://github.com/TinyAGI/tinyclaw/pull/216)** adds a "TINYAGI" ASCII banner to the CLI to improve brand recognition and user experience during terminal interactions.
*   **Agent Capabilities**:
    *   **[#215](https://github.com/TinyAGI/tinyclaw/pull/215)** allows users to specify a `system_prompt` during agent creation, storing these instructions in the agent's workspace `AGENTS.md`.
*   **Provider Support**:
    *   **[#217](https://github.com/TinyAGI/tinyclaw/pull/217)** adds support for Google Gemini models and enhances error logging for custom providers.
*   **Architecture Refactoring**:
    *   **[#213](https://github.com/TinyAGI/tinyclaw/pull/213)** proposes a significant simplification of the agent communication schema by removing the conversation state tracker in favor of flat direct messages (DMs) with immediate streaming.

## 4. Community Hot Topics
*   **[Issue #193: TinyOffice first-run web onboarding](https://github.com/TinyAGI/tinyclaw/issues/193)**
    *   **Activity**: 10 comments since March 11.
    *   **Analysis**: This is the primary focus of the community and dev team right now. The discussion highlights a critical gap: TinyOffice is powerful once configured, but the initial setup is too difficult because it relies on "raw config editing" and CLI commands. The community is actively rallying behind PR #214 as the solution to this pain point.

## 5. Bugs & Stability
*No critical bugs or crash reports were identified in the last 24 hours.*
The current PR activity is focused on enhancements (feat/refactor) rather than bug fixes, indicating stable baseline performance for existing features.

## 6. Feature Requests & Roadmap Signals
Based on the open PRs and Issue #193, the roadmap for the next version is clearly defined:
*   **Web-Based Onboarding**: The addition of the `--skip-setup` flag (PR #214) signals a strategic shift to make TinyOffice a standalone web UI for configuration, removing the dependency on terminal proficiency for first-time users.
*   **Custom Agent Instructions**: PR #215 suggests users want finer-grained control over agent behavior immediately upon creation, rather than editing files post-creation.
*   **Model Provider Diversity**: The addition of Gemini support (PR #217) indicates a demand for supporting non-OpenAI models natively.

## 7. User Feedback Summary
*   **Pain Point**: The "CLI-first" and "config-file-first" workflow is a barrier to adoption. Users want to configure the system via the Web UI (TinyOffice) without touching JSON or YAML files manually.
*   **Desire**: Users are asking for a more "plug-and-play" experience where they can input API keys and endpoints directly into a web form (the new `/connect` page).

## 8. Backlog Watch
*   **Architecture Simplification (PR #213)**: This PR needs maintainer attention as it represents a breaking change to the internal agent schema (removing conversation state). While beneficial for simplicity, it requires careful review to ensure no agent logic breaks during the transition.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project digest for **Moltis** as of **2026-03-15**.

### 1. Today's Overview
Moltis is demonstrating high project velocity with robust maintenance activity, recording **9 issue updates** and **6 PR updates** within the last 24 hours. The project is actively managing technical debt, evidenced by the closure of several long-standing bugs related to cron scheduling and agent tooling. While no new releases were published today, the merge of critical fixes—particularly regarding GGUF model restoration and cron regressions—suggests a pending version update is imminent. Development attention is currently split between stabilizing the Windows experience and refining agent orchestration capabilities.

### 2. Releases
**None**
*   No new releases were published in the last 24 hours. However, significant fixes regarding cron handling and local LLM setups have been merged, implying that a new release tag is likely being prepared.

### 3. Project Progress
**Merged & Closed Features/Fixes:**
*   **Local LLM Reliability:** PR #417 ([fix(local-llm): restore custom GGUF setup without restart](https://github.com/moltis-org/moltis/pull/417)) was merged. This resolves a workflow interruption where users had to restart the gateway to use custom HuggingFace GGUF models.
*   **Cron & Scheduling Infrastructure:** PR #411 ([test(cron): add delivery regressions and sync docs](https://github.com/moltis-org/moltis/pull/411)) and PR #410 ([fix(agents): retry empty structured tool names](https://github.com/moltis-org/moltis/pull/410)) were closed. These PRs successfully addressed Issue #179 and improved the reliability of scheduled tasks and agent tool calling.
*   **Legacy Bug Cleanup:** Issues #195 ([Agent can't set channel targets](https://github.com/moltis-org/moltis/issues/195)), #179 ([kimi - cannot activate cron jobs](https://github.com/moltis-org/moltis/issues/179)), and #132 ([Model from huggingface not downloaded](https://github.com/moltis-org/moltis/issues/132)) were all marked as closed, indicating a successful cleanup of the backlog.

### 4. Community Hot Topics
*   **[Feature Request] Matrix Support** (Issue #233)
    *   **Status:** Open | 👍 1 | [Link](https://github.com/moltis-org/moltis/issues/233)
    *   **Analysis:** There is clear community demand for decentralized communication protocols. Users are looking to extend Moltis beyond current proprietary channels (like Telegram/Slack) to Matrix, aligning with the privacy-focused AI agent use case.
*   **[Feature] Agents Channel Awareness** (Issue #264)
    *   **Status:** Closed | 👍 2 | [Link](https://github.com/moltis-org/moltis/issues/264)
    *   **Analysis:** Although closed, this issue highlights a critical user need: context-awareness. Users want agents to understand *where* they are operating (Telegram vs. a specific channel) to avoid "hallucinating" targets.
*   **[Bug] GitHub Copilot Provider Errors** (Issue #261)
    *   **Status:** Open | 👍 2 | [Link](https://github.com/moltis-org/moltis/issues/261)
    *   **Analysis:** This is a high-visibility integration issue. The community upvotes indicate that Moltis is being used in environments relying on GitHub Copilot models, and stability here is a priority.

### 5. Bugs & Stability
*   **CRITICAL (Windows): File Lock Errors**
    *   **Issue:** #434 ([file lock failed: Access is denied](https://github.com/moltis-org/moltis/issues/434)) prevents session persistence on Windows.
    *   **Fix Available:** Yes. PR #436 ([replace append(true) with write(true)+seek](https://github.com/moltis-org/moltis/pull/436)) addresses the `FILE_APPEND_DATA` restriction in the Rust stdlib.
*   **HIGH (UI/UX): Expandable "Reasoning" Glitch**
    *   **Issue:** #437 ([Expandable "Reasoning" is only response](https://github.com/moltis-org/moltis/issues/437)).
    *   **Impact:** Affects user visibility into agent thought processes, specifically impacting Channels.
*   **MEDIUM (Integration): GitHub Copilot**
    *   **Issue:** #261 ([Gitbub Copilot provider errors](https://github.com/moltis-org/moltis/issues/261)).
    *   **Status:** Open, under investigation.
*   **LOW (UX): Exec Tool Confusion**
    *   **Issue:** PR #435 ([hide node parameter when no nodes configured](https://github.com/moltis-org/moltis/pull/435)).
    *   **Details:** Fixes an issue where LLMs attempt to guess values for unconfigured "node" parameters, causing execution loops.

### 6. Feature Requests & Roadmap Signals
*   **PTY-based Interactive CLI Control (Issue #235):** A complex but high-value request to allow Moltis to spawn Claude Code as a subprocess with interactive terminal capabilities (`isatty == true`). This signals user interest in **multi-agent frameworks** where Moltis acts as an orchestrator for other coding agents.
*   **Matrix Protocol Support (Issue #233):** Strong signal for federated chat support.

### 7. User Feedback Summary
*   **Pain Points:** Windows users are experiencing significant friction with file locking (Issue #434). Users relying on "Reasoning" models are finding the UI display broken (Issue #437).
*   **Use Cases:** There is a trend towards **"Agent-of-Agents"** workflows, evidenced by the request for PTY-based control (Issue #235) and channel targeting (Issue #264).
*   **Sentiment:** generally positive regarding core functionality (cron/LLMs), but frustration is evident regarding integration stability (Copilot) and OS-specific bugs (Windows).

### 8. Backlog Watch
*   **Issue #235 (PTY-based control):** Created Feb 25, still Open. This is a technically difficult feature requiring low-level terminal handling, not a quick fix.
*   **Issue #261 (Copilot Errors):** Created Feb 28, still Open. Requires external API debugging.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-15

## 1. Today's Overview
CoPaw is experiencing **high development velocity** approaching a potential release cycle, evidenced by 29 updated PRs (with 21 open) and 50 updated issues in the last 24 hours. The project is in active stabilization mode for v0.0.7+, with a strong focus on **cross-platform compatibility**, **multi-modal processing (images/audio)**, and **security hardening**. While the influx of new contributions is positive, the ratio of open PRs to merges suggests a pending backlog for maintainers. Critical bugs regarding Docker deployments and agent loop reliability are being actively addressed by the community.

## 2. Releases
**No new releases** published in the last 24 hours. The latest version referenced in issues remains **v0.0.7**, with users reporting specific regressions from v0.0.5.

## 3. Project Progress
*Merged & Closed PRs / Features Advanced*

*   **Security Hardening:** Several PRs focusing on agent safety are in review.
    *   **[feat(security): add detection rules for destructive shell commands](https://github.com/agentscope-ai/CoPaw/pull/1484)**: Adds YAML rules to block destructive commands (e.g., `mkfs`, `dd`, `fork bombs`) beyond the existing `rm` guards.
    *   **[fix(console): stabilize provider card header layout](https://github.com/agentscope-ai/CoPaw/pull/1401)**: UI consistency improvements across locales.
*   **Windows & Cross-Platform Fixes:**
    *   **[fix(runner): use shutil.move for cross-disk write on Windows](https://github.com/agentscope-ai/CoPaw/pull/1483)**: Addresses file operation failures on Windows (Issue #1431).
    *   **[fix(tests): add trust_env=False](https://github.com/agentscope-ai/CoPaw/pull/1495)**: Prevents Windows system proxy environments from breaking integration tests.
*   **Usability & Model Support:**
    *   **[feat(providers): parse thinking tags](https://github.com/agentscope-ai/CoPaw/pull/1496)**: Adds support for OpenAI-compatible "thinking" tags in model responses.
    *   **[feat: add provider deepseek](https://github.com/agentscope-ai/CoPaw/pull/1498)**: Adds DeepSeek as a built-in provider.

## 4. Community Hot Topics
*Top active discussions highlighting user needs*

*   **Critical Bug: Agent Loops & "Self-Kill" Behavior**
    *   **[Issue #1493: "Copaw测试python的时候会把自己kill了"](https://github.com/agentscope-ai/CoPaw/issues/1493)** (Comments: 2)
        *   **Analysis:** Users report that generated Python scripts containing commands like `taskkill /F /IM python.exe` terminate the CoPaw agent itself. This highlights a critical need for **process isolation** or **sandboxing** for code execution tools to prevent the agent from self-terminating.
    *   **[Issue #356: Feishu + Qwen3 Loop](https://github.com/agentscope-ai/CoPaw/issues/356)** (Comments: 2)
        *   **Analysis:** Users experiencing infinite self-correction loops when processing Excel files via Feishu. Suggests a need for better **halt conditions** or **retry limits** in the agent workflow.

*   **Integration: File Handling & Webhooks**
    *   **[Issue #981: Feishu/QQ Bots Cannot Send Files](https://github.com/agentscope-ai/CoPaw/issues/981)** (Comments: 12)
        *   **Analysis:** High activity indicates users expect multi-modal capabilities (sending files) in IM channels. The current limitation blocks file-sharing workflows.
    *   **[Issue #338: Request for Webhook Support](https://github.com/agentscope-ai/CoPaw/issues/338)** (Comments: 7)
        *   **Analysis:** Users want a push-notification mechanism (webhooks) or polling API to retrieve responses asynchronously, rather than relying solely on persistent connections.

*   **Stability: Docker & Migration Issues**
    *   **[Issue #1413: v0.05 to v0.07 Docker Migration Problems](https://github.com/agentscope-ai/CoPaw/issues/1413)** (Comments: 3)
        *   **Analysis:** Users report data loss (configurations) and UI bugs (skills duplication) during upgrade. This signals potential fragility in the **data persistence schema** between versions.

## 5. Bugs & Stability
*High priority issues affecting system uptime*

1.  **[CRITICAL] Mac mini M4 Compatibility**
    *   **[Issue #1087: Answers have stopped - Mac mini M4](https://github.com/agentscope-ai/CoPaw/issues/1087)**
    *   **Symptom:** Application becomes unresponsive after sending a message on Apple Silicon M4.
2.  **[HIGH] Docker Timezone & Port Conflicts**
    *   **[Issue #1501: Docker Timezone Immutable](https://github.com/agentscope-ai/CoPaw/issues/1501)**: `TZ` env vars fail, causing time/log errors.
    *   **[Issue #1485: Port 8088 Reserved](https://github.com/agentscope-ai/CoPaw/issues/1485)**: Default port conflicts with Windows TCP dynamic port ranges.
3.  **[MEDIUM] Docker Workspace Failure**
    *   **[Issue #1374: Failed to load file list](https://github.com/agentscope-ai/CoPaw/issues/1374)**: Refresh button crashes on v0.0.7.
4.  **[MEDIUM] Copy/Clipboard UX Regression**
    *   **[Issue #1457: Copies JSON instead of Text](https://github.com/agentscope-ai/CoPaw/issues/1457)**: Clicking "Copy" grabs raw JSON payload.
    *   **Fix Status:** Fix available in **[PR #1471](https://github.com/agentscope-ai/CoPaw/pull/1471)**.

## 6. Feature Requests & Roadmap Signals
*User-driven development priorities*

*   **Security & Permissions:**
    *   **[Issue #524: Restrict write_file permissions](https://github.com/agentscope-ai/CoPaw/issues/524)**: Users want to sandbox file I/O to specific directories.
    *   **[Issue #174: Permission approval system](https://github.com/agentscope-ai/CoPaw/issues/174)**: Request for a "human-in-the-loop" approval gate for dangerous tools (shell, file writes).
*   **Channel Integrations:**
    *   **[PR #1478: Nextcloud Talk Integration](https://github.com/agentscope-ai/CoPaw/pull/1478)**: New channel support is actively being developed.
    *   **[PR #1476: Discord Voice Message Support](https://github.com/agentscope-ai/CoPaw/pull/1476)**: Adds auto-transcription for `.ogg` files.
*   **Observability:**
    *   **[Issue #311: Token Usage Dashboard](https://github.com/agentscope-ai/CoPaw/issues/311)**: Repeated request for cost monitoring features.

## 7. User Feedback Summary
*Pain points & satisfaction signals*

*   **Pain Points:**
    *   **Docker Upgrades:** Users are frustrated with data loss when upgrading Docker containers ("Skills duplicate," "Models disappear").
    *   **Tool Reliability:** Users running code (Python) or calling tools (PptxGen) face frequent crashes or infinite loops that break the session.
    *   **IM Limitations:** Inability to send files via Feishu/QQ and poor Markdown rendering in Feishu are major dissatisfiers.
*   **Positive Signals:**
    *   Active community contribution, with multiple first-time contributors submitting fixes for UI and localization issues.
    *   Demand for the platform is expanding into more complex setups (Nextcloud, OpenRouter, Webhooks).

## 8. Backlog Watch
*Items needing attention*

*   **[Issue #9: Can not set nothinking for model](https://github.com/agentscope-ai/CoPaw/issues/9)**: Open since Feb 27, regarding model configuration UI gaps.
*   **[Issue #639: Feishu not responsed when configured MCP](https://github.com/agentscope-ai/CoPaw/issues/639)**: Critical integration bug where Feishu bots stop responding if MCP is configured. Root cause investigation needed.
*   **[Issue #502: Console Improvements (Compact History)](https://github.com/agentscope-ai/CoPaw/issues/502)**: UI clutter issue impacting usability for long sessions.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# Project Digest: ZeptoClaw (2026-03-15)

**Today's Overview**
ZeptoClaw demonstrates high development velocity with significant stability improvements. Over the last 24 hours, the project closed 5 issues and 2 PRs while opening 4 new PRs, indicating a focus on clearing technical debt rather than releasing new features. Key developmental efforts are focused on standardizing agent communication protocols (ACP), hardening security defaults, and resolving specific platform integration bugs (Discord/Podman). The project appears healthy, with active maintainer engagement in resolving build errors and edge cases in message handling.

**Releases**
No new releases were published in the last 24 hours.

**Project Progress**
*   **Discord Channel Stability:** Successfully merged fixes for image-only message handling ([#346](https://github.com/qhkm/zeptoclaw/pull/346)), resolving a critical bug where user interactions containing only images were silently dropped.
*   **API Validation:** Closed implementation of Zhipu API key validation during onboarding ([#335](https://github.com/qhkm/zeptoclaw/pull/335)), improving the initial setup experience for users of this provider.
*   **Internal Maintenance:** Completed cleanup of the `r8r` bridge implementation ([#360](https://github.com/qhkm/zeptoclaw/issues/360)) and addressed issues related to the default agent mode and approval policies ([#347](https://github.com/qhkm/zeptoclaw/issues/347)).

**Community Hot Topics**
*   **Podman/Docker Build Compatibility:** [Issue #333](https://github.com/qhkm/zeptoclaw/issues/333) (Closed) addressed high-friction build failures for developers using Podman 5.7. The community actively needed support for legacy builders and cache mounts to streamline the development workflow.
*   **Telegram User Experience:** [Issue #331](https://github.com/qhkm/zeptoclaw/issues/331) (Open) highlights demand for a richer interaction experience on Telegram. Users are requesting formatting support and typing indicators to make the agent feel more responsive and less robotic.

**Bugs & Stability**
*   **Severity: High (Platform Integration):** Discord ignoring image-only messages was identified and fixed. This was a regression where valid user inputs (images) were treated as empty content.
    *   *Status:* Fix merged in [#346](https://github.com/qhkm/zeptoclaw/pull/346).
*   **Severity: Medium (Security/Defaults):** The project identified risky default configurations where approval policies were too permissive ([#347](https://github.com/qhkm/zeptoclaw/issues/347)).
    *   *Status:* Issue closed; defaults presumably hardened.
*   **Severity: Medium (Build System):** `Dockerfile.dev` failed with Podman legacy builders due to cache mount syntax.
    *   *Status:* Fix open in [#358](https://github.com/qhkm/zeptoclaw/pull/358).

**Feature Requests & Roadmap Signals**
*   **Agent Client Protocol (ACP):** PR [#356](https://github.com/qhkm/zeptoclaw/pull/356) is currently open, implementing stdio and HTTP transport for ACP. This signals a strategic move to make ZeptoClaw a compliant subprocess agent for other tools (e.g., `acpx`).
*   **Telegram Enhancements:** The request for formatting and typing indicators ([#331](https://github.com/qhkm/zeptoclaw/issues/331)) suggests a roadmap focus on polishing "Chat" interfaces beyond basic text relay.
*   **Smart "Coder" Template:** PR [#359](https://github.com/qhkm/zeptoclaw/pull/359) proposes updating the coding agent to prefer editing existing files and running tests before writing new ones, indicating a drive for more "software engineering" capable behavior.

**User Feedback Summary**
Users expressed friction with the "messy" appearance of messages on Telegram due to lack of formatting ([#331](https://github.com/qhkm/zeptoclaw/issues/331)). Additionally, developers using Podman faced workflow interruptions due to Dockerfile syntax errors, prompting immediate fixes. The closure of the "Shelldex" listing issue ([#334](https://github.com/qhkm/zeptoclaw/issues/334)) suggests community interest in discoverability and directory integration.

**Backlog Watch**
*   **Telegram Formatting:** [Issue #331](https://github.com/qhkm/zeptoclaw/issues/331) remains open with no assigned PR yet. This is the primary outstanding user-facing request.
*   **ACP Implementation:** [PR #356](https://github.com/qhkm/zeptoclaw/pull/356) is open and represents a significant architectural addition; monitoring its merge progress will be key to understanding the next version's capabilities.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*