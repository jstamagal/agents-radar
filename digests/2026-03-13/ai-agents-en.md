# OpenClaw Ecosystem Digest 2026-03-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-13 06:24 UTC

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

# OpenClaw Project Digest: 2026-03-13

## 1. Today's Overview
The OpenClaw project is experiencing **extremely high development velocity** heading into the mid-March cycle. With 500 issues and 500 pull requests updated in the last 24 hours, the repository is seeing a historic volume of activity. The community is highly engaged, resolving over 230 issues and discussing complex stability topics regarding session management and file system tools. While feature development (Dashboard v2, GPT-5.4 support) is advancing rapidly, there are indicators of **significant stress on stability** due to recent regressions in file operations and session compaction.

## 2. Releases
**Version v2026.3.12** was released today.

**Key Changes:**
*   **Dashboard v2 Refresh:** A complete overhaul of the Control UI and gateway dashboard. It now features a modular overview with views for chat, config, agents, and sessions.
    *   *New Features:* Command palette, mobile-optimized bottom tabs, and enriched chat tools including slash commands, search, export, and pinned messages. (Authored by @BunsDev).
*   **Model Support:** Added compatibility for **OpenAI/GPT-5.4**.

**Migration/Upgrade Notes:**
*   Users should verify their dashboard layouts as the modular view is a significant departure from the previous interface.
*   Ensure API configurations support the new GPT-5.4 model identifiers if utilizing the latest provider capabilities.

## 3. Project Progress
Significant architectural improvements and tooling refinements were pushed forward today.

**Merged/Closed Highlights:**
*   **Critical File System Fix:** A critical fix for `fs-safe` atomic writes was merged to address a regression in v2026.3.11 where files were created with 0 bytes. The fix ensures `sync()` is called before `stat()` to prevent stale metadata. ([#44715](https://github.com/openclaw/openclaw/pull/44715), [#44726](https://github.com/openclaw/openclaw/pull/44726))
*   **Security Hardening:** Session slug generation has been updated to use `crypto.randomUUID` instead of `Math.random`, preventing predictable session identifiers. ([#44737](https://github.com/openclaw/openclaw/pull/44737))
*   **Browser Locking:** The browser extension received stricter CDP command routing to respect locked tabs, preventing cross-tab command leakage. ([#44615](https://github.com/openclaw/openclaw/pull/44615))
*   **Microsoft Teams Enhancement:** Structured quote/reply context extraction from HTML attachments was merged to improve conversational context in Teams channels. ([#44739](https://github.com/openclaw/openclaw/pull/44739))

## 4. Community Hot Topics
The community is fiercely debating stability issues and onboarding flows.

**Top Issues:**
*   **[Feature] DingTalk First-Install Option** ([#26534](https://github.com/openclaw/openclaw/issues/26534)) | 64 Comments
    *   *Summary:* Users demand that DingTalk be available during the initial setup wizard. Currently, it requires post-install configuration despite backend support existing.
*   **[Bug] False 'API rate limit reached'** ([#32828](https://github.com/openclaw/openclaw/issues/32828)) | 55 Comments
    *   *Summary:* OpenClaw displays false warnings about API limits even when keys are functional. This appears to be a parsing logic error in the gateway.
*   **[Feature] xAI (Grok) Tool Support** ([#6872](https://github.com/openclaw/openclaw/issues/6872)) | 13 Comments
    *   *Summary:* Users report that Grok 4.1 Fast feels artificially handicapped because OpenClaw doesn't configure native tools (`x_search`, `web_search`, `code_exec`) correctly.
*   **[Feature] Real-time Voice Conversation** ([#7200](https://github.com/openclaw/openclaw/issues/7200)) | 11 Comments
    *   *Summary:* High demand for phone-like bidirectional streaming audio via Twilio/WebRTC, moving beyond pre-recorded audio files.

## 5. Bugs & Stability
Several critical regressions and persistent bugs require immediate attention.

**Critical/High Severity:**
1.  **Filesystem Tool Loss (Regression):** Users on v2026.3.2+ report the agent losing access to `exec`, `read`, and `write` tools, stopping CLI interactions. ([#39062](https://github.com/openclaw/openclaw/issues/39062))
2.  **Session Compaction Deadlock:** A "deadlock" occurs when compaction fails; subsequent recovery commands (`/new`, `/reset`) queue behind the failed task, hanging the session. The only recovery is killing the process. ([#40295](https://github.com/openclaw/openclaw/issues/40295))
3.  **Docker Setup Failures:** Manual Docker setup fails due to network configuration issues preventing CLI-Gateway communication. ([#5559](https://github.com/openclaw/openclaw/issues/5559))
4.  **DingTalk/Kimi Config Validation:** Zod errors prevent saving configurations for Kimi K2.5 due to unrecognized keys like `requiresOpenAiAnthropicToolPayload`. ([#41445](https://github.com/openclaw/openclaw/issues/41445))

**Fix Status:** PRs [#44715](https://github.com/openclaw/openclaw/pull/44715) and [#44726](https://github.com/openclaw/openclaw/pull/44726) address the 0-byte file regression (related to #39062).

## 6. Feature Requests & Roadmap Signals
Based on issue velocity and reactions, the following features are likely on the roadmap:
*   **Enhanced Router Logic:** A PR for a "Smart Router with Escalation Gate" is open, aiming to reduce API costs by routing simple requests to cheaper models and complex ones to stronger ones. ([#44702](https://github.com/openclaw/openclaw/pull/44702))
*   **Memoria Memory Extension:** A new plugin backed by Memoria for long-term memory capabilities is in development. ([#44729](https://github.com/openclaw/openclaw/pull/44729))
*   **vLLM Lifecycle Management:** Significant upgrades to vLLM support, including multi-endpoint selection and stale default cleanup. ([#41737](https://github.com/openclaw/openclaw/pull/41737))

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Onboarding Confusion:** Multiple reports indicate the `openclaw onboard` wizard skips API key input or crashes, leaving users with unresponsive agents. ([#16134](https://github.com/openclaw/openclaw/issues/16134), [#16579](https://github.com/openclaw/openclaw/issues/16579))
    *   **Docker Environment:** Linux containers failing skill installations due to missing `brew` or network pathing issues ([#5559](https://github.com/openclaw/openclaw/issues/5559), [#14593](https://github.com/openclaw/openclaw/issues/14593)).
*   **Satisfaction:** Users are praising the new Dashboard v2 design and mobile responsiveness, but frustration is high regarding the "stale" bug queue where issues sit for weeks without triage (e.g., MSTeams replies failing since Feb 5).

## 8. Backlog Watch
These older issues remain unresolved and are impacting core workflows:
*   **MSTeams Channel Replies Not Being Sent** ([#9873](https://github.com/openclaw/openclaw/issues/9873)) - Open since Feb 5.
*   **WebSocket Disconnects (Code 1001/1006)** ([#8227](https://github.com/openclaw/openclaw/issues/8227)) - Persistent connectivity issues in the Control UI.
*   **TUI Model Picker Overload** ([#4349](https://github.com/openclaw/openclaw/issues/4349)) - The TUI shows 600+ unconfigured models, making it unusable for switching.
*   **DingTalk Onboarding** ([#26534](https://github.com/openclaw/openclaw/issues/26534)) - Despite high demand, this has been open for weeks.

---

## Cross-Ecosystem Comparison

# Ecosystem Digest Report: Personal AI Agents (2026-03-13)

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is currently undergoing a phase of **hyper-growth and architectural divergence**. While OpenClaw remains the dominant core framework, a significant wave of "forks and focuses"—such as **IronClaw** (cognitive architecture), **NanoClaw** (container security), and **TinyClaw** (UX/Orchestration)—are emerging to address specific niches that the monolithic codebase cannot efficiently serve. The landscape is shifting from simple "chat with PDF" wrappers to complex **multi-agent systems** featuring long-term memory (LanceDB/Memoria), agentic security (Tool Guards), and sophisticated orchestration layers (Gateway vs. TUI). However, this rapid innovation cycle has introduced a "stability tax," with widespread reports of regressions in Docker environments, WebSocket connectivity, and session management across nearly all active projects.

## 2. Activity Comparison

| Project | Issue Vol (24h) | PR Vol (24h) | Release Status | Health Score |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | v2026.3.12 (Active) | ⚠️ High Stress |
| **NanoBot** | 50 | 101 | No Release (Lagging) | 🔶 Stable / Lagging |
| **Zeroclaw** | 44 | 50 | v0.1.9a (Active) | 🔶 Refactoring |
| **PicoClaw** | 31 | 102 | Nightly Builds | 🚀 High Velocity |
| **NanoClaw** | 18 | 35 | No Release | 🟢 Active Expansion |
| **NullClaw** | 19 | 41 | v2026.3.13 (Patch) | 🟢 Healthy |
| **IronClaw** | 50 | 50 | No Release (Bug Bash) | 🔴 Critical Bugs |
| **LobsterAI** | 8 | 10 | v0.2.4 (Stable) | 🟢 Optimizing |
| **TinyClaw** | N/A | 11 | v0.0.12 (Rapid) | 🟢 Healthy |
| **Moltis** | N/A | 6 | No Release | 🟢 Healthy |
| **CoPaw** | 42 | 50 | v0.0.7 (Security) | 🔶 Stability Issues |
| **ZeptoClaw** | N/A | 4 | No Release | 🟢 Healthy |
| **EasyClaw** | 1 | 0 | v1.6.7 (Patch) | 🔵 Low Volume |

**Notes:** *Health Score considers velocity vs. stability ratio. "High Stress" indicates high user friction despite activity.*

## 3. OpenClaw's Position
**Advantages vs. Peers:**
*   **Ecosystem Dominance:** OpenClaw is the "reference implementation." Projects like **LobsterAI**, **IronClaw**, and **CoPaw** explicitly build upon OpenClaw’s "Gateway" architecture, solidifying its status as the industry standard for backend agent logic.
*   **Feature Velocity:** With 500 issues/PRs in 24 hours, OpenClaw’s velocity (Dashboard v2, GPT-5.4 support) vastly outstrips competitors like **EasyClaw** or **Moltis**.
*   **Universal Integrations:** It maintains the broadest channel support (Microsoft Teams, DingTalk, Browser), whereas peers like **NullClaw** are still catching up on basic connectivity.

**Technical Approach:**
*   OpenClaw prioritizes a **Modular Dashboard/Control UI** approach.
*   In contrast, **NanoClaw** focuses on strict **Container Isolation**, and **TinyClaw** focuses on **Web-Based Orchestration** (TinyOffice).
*   **IronClaw** is attempting to fork into a "Cognitive Architecture" direction (Guardian memory modules), which OpenClaw core has not yet adopted.

**Community Size:**
*   OpenClaw’s issue volume (500) is **10x-25x higher** than niche players like **NanoBot** (50) or **LobsterAI** (8), indicating a massive, albeit vocal, user base.

## 4. Shared Technical Focus Areas
The following requirements are emerging simultaneously across multiple independent projects, signaling industry-wide needs:

*   **Agent Memory & Persistence**
    *   *Projects:* **OpenClaw** (Memoria extension), **NanoBot** (Async consolidation), **NanoClaw** (LanceDB integration), **Moltis** (Datetime context).
    *   *Need:* Moving beyond chat history to durable, queryable, long-term memory.
*   **"Reasoning" Model Support**
    *   *Projects:* **OpenClaw**, **Zeroclaw**, **IronClaw**, **PicoClaw**.
    *   *Need:* Standardizing API handling for `reasoning_content` fields (Kimi 2.5, DeepSeek, GPT-5.4) which break existing tool-calling pipelines.
*   **Web-Search Pluggability**
    *   *Projects:* **NanoBot** (Brave -> Tavily/SearXNG), **OpenClaw**, **Moltis**.
    *   *Need:* Removing hardcoded search provider dependencies to allow self-hosting and avoid API key friction.
*   **Agentic Security / Tool Guarding**
    *   *Projects:* **CoPaw** (v0.0.7 Tool Guard), **PicoClaw** (Secret redaction), **NanoClaw** (Credential proxy).
    *   *Need:* Preventing agents from executing destructive commands (`rm`) or leaking API keys in logs.
*   **UX Simplification (Wizards)**
    *   *Projects:* **TinyClaw** (Interactive Wizard), **EasyClaw** (macOS guides), **OpenClaw** (Onboarding fixes).
    *   *Need:* Reducing the "Time to First Prompt" as configuration complexity (Env vars, Docker) becomes a major barrier.

## 5. Differentiation Analysis

| Project | Key Differentiator | Target User | Architecture Focus |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | The "Standard" | Generalists / Power Users | Dashboard + Gateway + CLI |
| **IronClaw** | Cognitive Guardian | Enterprise Automation | Multi-Agent / Event-Driven |
| **NanoClaw** | Security First | Security Researchers / DevOps | Container Sandboxing / Podman |
| **TinyClaw** | "TinyOffice" UX | Project Managers | Web UI (Org Charts) / Multi-Task |
| **NanoBot** | The "Minimalist" | Tinkerers / Single-user | Python-centric / Async-First |
| **LobsterAI** | Desktop Client | Non-technical Windows Users | Electron Wrapper / Native App |
| **Zeroclaw** | Channel Hub | Social Managers | Multi-channel normalization |
| **CoPaw** | Skill Ecosystem | Prompt Engineers | Heavy Skill Library / Approval Flows |
| **PicoClaw** | Edge/Hardware | Hardware Hackers | ModelScope / ARM / OpenWrt |
| **Moltis** | Single Binary | Homelab Enthusiasts | Standalone / Multi-provider |

## 6. Community Momentum & Maturity

*   **Rapidly Iterating (High Volatility):**
    *   **OpenClaw & IronClaw:** High feature velocity but currently plagued by stability regressions (0-byte files, session deadlocks). High engagement, high frustration.
    *   **PicoClaw:** Aggressively refactoring agent "Soul" and context management. Nightly builds are essential.
*   **Stabilizing & Maturing:**
    *   **NullClaw & LobsterAI:** These projects are in a "polish" phase, releasing frequent patch versions (v2026.3.13, v0.2.4) to fix specific platform bugs (Feishu, Windows). They are prioritizing reliability over new features.
*   **Niche / Low Volume:**
    *   **EasyClaw & ZeptoClaw:** Lower activity suggests these are solo-developer or smaller utilities. They are stable but lack the community momentum of the larger forks.

## 7. Trend Signals (Value for AI Developers)

1.  **The "Platform-ification" of Agents:** Users are demanding **enterprise-grade features** like Role-Based Access Control (RBAC), Audit Logs, and "Reasoning" model support. The era of simple "chat bots" is ending; the era of "Agent Platforms" (IronClaw, OpenClaw Dashboard v2) is beginning.
2.  **Docker Fatigue:** A significant portion of issues across **OpenClaw**, **NanoClaw**, and **Moltis** relates to Docker complexity (networking, crashes, volume mounting). Developers should prioritize **single-binary** or **no-container** installation paths (e.g., **Moltis**, **EasyClaw**) to lower adoption barriers.
3.  **MCP (Model Context Protocol) as the Standard:** **OpenClaw**, **IronClaw**, **Zeroclaw**, and **Moltis** are all racing to standardize MCP support. Developers building tools *must* prioritize MCP compatibility to remain relevant in this ecosystem.
4.  **Security is a Dealbreaker:** The emergence of "Tool Guard" features in **CoPaw** and **NanoClaw** signals a market shift. Unrestricted `exec()` commands are no longer acceptable for production deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-13

## 1. Today's Overview
NanoBot is experiencing a **high-velocity development cycle** with significant architectural improvements underway. In the last 24 hours, the project saw **101 Pull Requests** updated (71% merged/closed) alongside **50 Issues** (46% closed), indicating a highly responsive maintenance team successfully clearing the backlog. A major theme today is the **optimization of the memory subsystem**, with multiple active discussions and PRs addressing consolidation performance and blocking behaviors. The project is actively refactoring its web search capabilities to support multiple providers, moving away from the hardcoded Brave dependency. However, **no new releases** have been published recently, leading to user frustration regarding the availability of fixes on PyPI.

## 2. Latest Releases
**Status:** No new releases published.
*   **Note:** Despite high merge activity, there is a lag in publishing releases to GitHub or PyPI. Users are reporting that version `0.1.4.post2` is not yet available on package managers, and the GitHub Releases page is not being updated consistently ([#1058](https://github.com/HKUDS/nanobot/issues/1058), [#88](https://github.com/HKUDS/nanobot/issues/88)).

## 3. Project Progress
**Memory Architecture Overhaul:**
*   **[PR #1961](https://github.com/HKUDS/nanobot/pull/1961)** (Open): A proposal to implement **asynchronous memory consolidation**. This aims to run memory tasks in the background during idle periods, preventing the agent from blocking user interactions while updating memory.
*   **[PR #1962](https://github.com/HKUDS/nanobot/pull/1962)** (Open): Addresses the `/new` command latency caused by the previous consolidation fix. It aims to restore the "instant return" behavior for starting new chats while safely managing background consolidation tasks.
*   **[PR #1516](https://github.com/HKUDS/nanobot/pull/1516)** (Closed): A previous attempt to solve the `/new` command blocking issue, which successfully serialized consolidation locks to prevent concurrent writes.

**Web Search Flexibility:**
*   **[PR #398](https://github.com/HKUDS/nanobot/pull/398)** (Closed): Added configurable web search providers (Brave, DuckDuckGo, Tavily, SearXNG), addressing the community's request for a swappable backend.
*   **[PR #1754](https://github.com/HKUDS/nanobot/pull/1754)** (Closed): Prevented agent "hangs" or absurd behavior when the Brave API key is missing, ensuring the tool handles configuration errors gracefully.

**Provider & Channel Support:**
*   **[PR #1938](https://github.com/HKUDS/nanobot/pull/1938)** (Closed): Fixed a bug where LiteLLM was stripping `openrouter/` prefixes from model IDs, breaking compatibility.
*   **[PR #548](https://github.com/HKUDS/nanobot/pull/548)** (Closed): Officially added support for **NVIDIA NIM API**.
*   **[PR #570](https://github.com/HKUDS/nanobot/pull/570)** (Closed): Added QQ group chat support (previously only C2C/private messages were supported).

## 4. Community Hot Topics
**1. Memory Consolidation & Performance (11+ 👍)**
*   **[Issue #1931](https://github.com/HKUDS/nanobot/issues/1931)**: Users are reporting warnings that the LLM skips `save_memory` calls during consolidation.
*   **[Issue #1955](https://github.com/HKUDS/nanobot/issues/1955)**: A request for visibility into **sub-agent execution**. Users currently see the main agent's thought process, but sub-agents act as a "black box."
*   **Underlying Need:** Users desire transparency in agent reasoning and reliable, non-blocking long-term memory management.

**2. Web Search Provider Pluggability (11+ 👍)**
*   **[Issue #1719](https://github.com/HKUDS/nanobot/issues/1719)**: Strong community demand to swap the hardcoded Brave search for Tavily, SearXNG, or DuckDuckGo.
*   **[Issue #927](https://github.com/HKUDS/nanobot/issues/927)**: Specific request for SearXNG integration.
*   **Underlying Need:** Avoiding vendor lock-in and API key friction; users want self-hosted or alternative search options.

**3. Ecosystem Extensibility (New Tools)**
*   **[Issue #1922](https://github.com/HKUDS/nanobot/issues/1922)**: A community member released **[nanobot-webui](https://github.com/Good0007/nanobot-webui)**, a self-hosted dashboard for managing agents, channels, and configs. This highlights a gap in the core project's UX for management.

**4. Security Hardening**
*   **[Issue #1873](https://github.com/HKUDS/nanobot/issues/1873)**: A critical security observation that NanoBot can access its own `config.json` (containing API keys) via `exec()` calls.
*   **Underlying Need:** Users want to run agents in secure, multi-tenant containers without risking credential leakage.

## 5. Bugs & Stability
**Critical / High Severity:**
*   **[DashScope API Error](https://github.com/HKUDS/nanobot/issues/1927)** (Open): DashScope (Qwen/Alibaba) provider fails with `tool_choice="required"`, causing memory archival failures and session clutter.
*   **[Windows Path Error](https://github.com/HKUDS/nanobot/issues/1937)** (Closed): The `/restart` command fails on Windows due to incorrect path construction for the executable.
*   **[OpenRouter 400 Error](https://github.com/HKUDS/nanobot/issues/1157)** (Open): StepFun models via OpenRouter return "Unrecognized chat message" errors. (Partially addressed by PR #1938 for model IDs, but API compatibility issues persist).

**Medium Severity:**
*   **[Telegram Duplicate Responses](https://github.com/HKUDS/nanobot/issues/1692)** (Open): Bot sends two answers (one with markdown, one without).
*   **[Matrix Channel Broken](https://github.com/HKUDS/nanobot/issues/1300)** (Open): Matrix channel fails to initialize/start.
*   **[MCP Service Instability](https://github.com/HKUDS/nanobot/issues/1951)** (Closed): If the Gateway starts before the MCP server, or if MCP restarts, the gateway crashes or tools fail.

**Cosmetic / UX:**
*   **[CLI Encoding Issue](https://github.com/HKUDS/nanobot/issues/1904)** (Closed): Sub-agent return messages display as garbled text/mojibake in the CLI.

## 6. Feature Requests & Roadmap Signals
*   **Sub-Agent Transparency:** Users explicitly want to see the thought process of sub-agents, not just the final result ([#1955](https://github.com/HKUDS/nanobot/issues/1955)).
*   **Dynamic Provider Switching:** Users want to change LLM providers mid-conversation without editing config files ([#1954](https://github.com/HKUDS/nanobot/issues/1954)).
*   **Modular "Skills" Architecture:** A proposal to move built-in skills out of the core bundle to make them easier to manage/remove ([#1058](https://github.com/HKUDS/nanobot/issues/1058)).
*   **Feishu Documents:** Support for Feishu cloud documents and knowledge bases ([#1815](https://github.com/HKUDS/nanobot/issues/1815)).
*   **Optional Tools/Memory:** Config flags to disable memory or tools entirely when using smaller/cheaper models ([#1881](https://github.com/HKUDS/nanobot/issues/1881)).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Configuration Rigidity:** Users struggle with "hardcoded" defaults (like Brave Search) and the inability to easily swap components.
    *   **Deployment Friction:** Issues with Docker containers crashing if dependencies (like MCP) aren't ready first.
    *   **Release Management:** There is audible frustration regarding the lack of tagged GitHub releases and PyPI sync delays.
*   **Positive Signals:**
    *   High engagement on **Multi-modal support** (Telegram images) and **new channels** (QQ Group, Signal).
    *   The creation of **third-party tools** (like `nanobot-webui`) indicates a healthy, engaged ecosystem trying to improve UX.

## 8. Backlog Watch
*   **[Feature: Browser Automation](https://github.com/HKUDS/nanobot/issues/1017)**: Open since Feb 22, no recent activity. High demand for this capability remains.
*   **[WhatsApp Bridge](https://github.com/HKUDS/nanobot/issues/92)**: Connection errors and blocking issues persist.
*   **[PyPI Publishing](https://github.com/HKUDS/nanobot/issues/1059)**: Users are asking for the latest release on PyPI. This is a recurring theme that impacts adoption.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-03-13

## 1. Today's Overview
Zeroclaw is experiencing a **high-velocity development cycle** with significant refactorings taking place on the `master` branch. Activity is very high, with 44 issues and 50 pull requests updated in the last 24 hours. The project health appears robust, with maintainers actively triaging and merging fixes, although recent rapid changes have introduced some regressions, particularly regarding configuration management and the web dashboard. The community is highly engaged, focusing heavily on expanding channel support (Matrix, Email, WeCom) and stabilizing the new architecture.

## 2. Releases
**New Release: v0.1.9a**
*   **Changes:**
    *   **Fix (Memory):** Resolved an issue where the embedding API key was incorrectly resolved from the default provider instead of the specific `embedding_provider` environment variable. ([PR #3184](https://github.com/zeroclaw-labs/zeroclaw/pull/3184))
    *   **Fix (CI):** Downgraded `action-gh-release` to v2.4.2 to resolve release finalization errors.
*   **Migration Notes:** Users utilizing embeddings should verify their environment variables to ensure the correct keys are being picked up after this fix.

## 3. Project Progress
**Features & Fixes Advanced (Closed/Merged):**
*   **Agent Memory Optimization:** PR #2649 was merged to prevent memory context duplication by reordering auto-save and load-context operations. This stops the agent from immediately retrieving its own just-sent message as context.
*   **MCP Support Restoration:** Following the `main` to `master` branch switch, critical MCP (Model Context Protocol) configuration support was missing. PR #3382 was opened to restore `McpConfig` and related structures.
*   **Architecture JIT Tools:** PR #3274 advances the implementation of JIT (Just-In-Time) Tools RAG injection with SubAgent discovery, moving complex tooling capabilities forward.
*   **Observability:** The codebase is moving toward supporting a "verbose" backend selection ([PR #3374](https://github.com/zeroclaw-labs/zeroclaw/pull/3374)) and flexible cron history APIs ([PR #3376](https://github.com/zeroclaw-labs/zeroclaw/pull/3376)).

## 4. Community Hot Topics
**Most Active Discussions:**
1.  **[Bug] Kimi Code Compatibility** ([Issue #1327](https://github.com/zeroclaw-labs/zeroclaw/issues/1327) - 6 comments)
    *   **Analysis:** Users integrating with Kimi's "thinking" models (Kimi 2.5) are facing 400 errors due to missing `reasoning_content` fields. This highlights a growing need for ZeroClaw to standardize support for "reasoning" models that output distinct thought chains.
2.  **[Bug] Activation/Init Loop** ([Issue #2510](https://github.com/zeroclaw-labs/zeroclaw/issues/2510) - 4 comments)
    *   **Analysis:** A severe "workflow blocking" issue where the console erroneously reports the system as not activated (`config initialized=false`). This suggests a regression in the configuration validation logic.
3.  **[Feature] MCP Support** ([Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) - 4 comments)
    *   **Analysis:** Users are demanding that the `zeroclaw agent` subcommand support MCP servers directly, rather than only through `start_channels`. This reflects a desire to use agents as standalone tools rather than just channel-bound bots.
4.  **[Feature] Matrix Login Ease** ([Issue #2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916) - 3 comments)
    *   **Analysis:** Strong demand for password-based login and recovery keys for the Matrix channel, as the current manual token extraction method is friction-heavy and degrades frequently.

## 5. Bugs & Stability
**Critical & High Priority Issues Reported:**
*   **S0 (Data Loss/Security):**
    *   **MCP Config Missing ([#3379](https://github.com/zeroclaw-labs/zeroclaw/issues/3379)):** Following a branch switch, MCP options vanished from `config.toml`. A fix is pending in PR #3382.
    *   **WebUI 404 on v0.1.9a ([#3386](https://github.com/zeroclaw-labs/zeroclaw/issues/3386)):** The web dashboard broke in the latest release, a regression confirmed by A/B testing against v0.1.8.
*   **S1 (Workflow Blocked):**
    *   **Activation Loop ([#2510](https://github.com/zeroclaw-labs/zeroclaw/issues/2510)):** System reports as inactive despite correct configuration.
    *   **WebUI Connection Errors ([#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910)):** Persistent WebSocket connection issues preventing agent interaction via the browser.
*   **Panic/Crash:**
    *   **Chinese Character Panic ([#3024](https://github.com/zeroclaw-labs/zeroclaw/issues/3024)):** The agent crashes when handling non-ASCII characters (CJK) in specific string slicing operations (`loop_.rs`).
    *   **Chinese Input Crash ([#2984](https://github.com/zeroclaw-labs/zeroclaw/issues/2984)):** CLI crashes on input with spaces.

## 6. Feature Requests & Roadmap Signals
**Incoming Requests:**
*   **InboxAPI Channel ([PR #3385](https://github.com/zeroclaw-labs/zeroclaw/pull/3385)):** A new feature proposal to add an "agent-native" email channel via InboxAPI, removing the need for complex SMTP/IMAP setups. This signals a push for easier, serverless-style integrations.
*   **WeCom Support ([Issue #3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090)):** Request to add WeCom (WeChat Work) compatibility, a significant enterprise requirement in some regions.
*   **Matrix Quality of Life:** Requests for typing notifications and read markers ([Issue #3357](https://github.com/zeroclaw-labs/zeroclaw/issues/3357)) suggest users want the agent to feel more "human" and responsive in chat.

## 7. User Feedback Summary
*   **Pain Points:** The rapid migration to the `master` branch has caused instability for users relying on MCP and the WebUI. Documentation is lagging (Debian install scripts returning 404s), and the current Matrix onboarding is described as "tiring" ([Issue #2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916)).
*   **Satisfaction:** Users are actively requesting more channels (Telegram channels, Email) and reporting bugs enthusiastically, indicating high reliance on the tool.
*   **Specific Complaints:** The switch to a distroless Docker container (no shell) breaks file-based tooling ([Issue #3359](https://github.com/zeroclaw-labs/zeroclaw/issues/3359)), frustrating users who need CLI tools inside the container.

## 8. Backlog Watch
*   **Pending Review:** PR #2983 (Discord DM fix) and PR #3051 (Memory dashboard fix) remain open but are critical for UX.
*   **Long-term Issues:** The request for **Gateway CORS and Security Headers** ([Issue #8](https://github.com/zeroclaw-labs/zeroclaw/issues/8)) remains open, identified as a potential security risk (CSRF) but seemingly low priority for the core team.
*   **Architectural Debt:** PR #3380 (labeled only with date) and #2013 (massive MCP implementation on main) are large PRs that may require significant review bandwidth before they can be merged to `master`.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-13

## 1. Today's Overview
PicoClaw is experiencing **high-intensity development activity**, with 102 Pull Requests and 31 Issues updated in the last 24 hours. The project is in a significant **refactoring phase**, specifically focused on Agent architecture (context management, compression, and token budgeting) and hardening security boundaries (DoS prevention in channels). While feature velocity is high, stability remains a concern as several users report regressions in specific channels (QQ, Telegram) and local model providers (Ollama). The community is actively engaging in defining the future "Soul" and identity of the Agent system.

## 2. Releases
**Nightly Build: v0.2.2-nightly.20260313.19835b2f**
*   **Status**: Automated unstable build.
*   **Highlights**: Includes recent security patches for channel handlers and the new ModelScope provider integration.
*   **Changelog**: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.2...main)
*   **Note**: Users employing the nightly build are advised to exercise caution due to the rapid pace of underlying changes.

## 3. Project Progress
*   **Agent Refactoring (Advanced)**: PR #1490 addresses critical context management issues, introducing proactive budget checks and safe compression strategies to prevent token limit crashes.
*   **Provider Expansion**: PR #1486 added support for **ModelScope (Alibaba's community)** as an OpenAI-compatible provider, significantly lowering the barrier for Chinese users.
*   **Security Hardening**:
    *   PR #1484 added a 4MB request body limit to the LINE webhook handler to prevent DoS attacks.
    *   PR #1485 introduced a secret redaction layer to prevent credential leaks in tool outputs.
*   **Skill Management**: PR #1252 enhanced the skill installer, allowing users to install skills directly from arbitrary GitHub repositories via URL.
*   **Quality of Life**: PR #1250 added a CLI command to switch default models dynamically.

## 4. Community Hot Topics
*   **[Discussion] What is an Agent? (SOUL.md & AGENT.md)** [#1218](https://github.com/sipeed/picoclaw/issues/1218)
    *   **Activity**: 19 comments.
    *   **Core Need**: The community is passionately debating the definition of an "Agent." There is a strong desire to separate **technical configuration** (AGENT.md) from **personality/role** (SOUL.md) to make agents more portable and easier to share.
*   **[Bug] Configuring PicoClaw with Ollama** [#1161](https://github.com/sipeed/picoclaw/issues/1161)
    *   **Activity**: 17 comments.
    *   **Core Need**: Users are struggling to run local models via Ollama. The agent initializes but fails to produce responses, indicating a gap in documentation or compatibility with the OpenAI-compatible shim.

## 5. Bugs & Stability
*   **[CRITICAL] Channel DoS Vulnerabilities**:
    *   **Matrix**: [#1405](https://github.com/sipeed/picoclaw/issues/1405) (Memory exhaustion via media downloads). **Closed**.
    *   **LINE**: [#1407](https://github.com/sipeed/picoclaw/issues/1407) (Memory exhaustion via unbounded body reads). **Closed** (Fix in PR #1484).
*   **[HIGH] QQ Channel Broken**: [#1426](https://github.com/sipeed/picoclaw/issues/1426)
    *   Users report the QQ channel is non-functional in the latest nightly builds.
*   **[MEDIUM] Telegram "Typing..." Indicator Stuck**: [#1212](https://github.com/sipeed/picoclaw/issues/1212), [#1323](https://github.com/sipeed/picoclaw/issues/1323)
    *   The typing indicator persists indefinitely after processing messages. A fix was merged in PR #1059 (Closed).
*   **[MEDIUM] Anthropic/Claude API 404 Error**: [#269](https://github.com/sipeed/picoclaw/issues/269)
    *   Direct integration fails for users. Addressed in PR #1284 by introducing `anthropic-messages` protocol.

## 6. Feature Requests & Roadmap Signals
*   **Agent Orchestration**: Issues [#1474](https://github.com/sipeed/picoclaw/issues/1474), [#1475](https://github.com/sipeed/picoclaw/issues/1475), and [#1476](https://github.com/sipeed/picoclaw/issues/1476) propose a structured protocol for "Gateway" orchestration. Users want PicoClaw to act as a compliant node in larger AI clusters (Paperclip/OpenClaw), requiring capability discovery and stable identities.
*   **Azure OpenAI Support**: [#1424](https://github.com/sipeed/picoclaw/issues/1424) / PR #1422. Enterprise users are requesting first-class support for Azure.
*   **OpenWrt / Router Support**: [#1132](https://github.com/sipeed/picoclaw/issues/1132). Request to run PicoClaw on router hardware for edge deployment.
*   **Documentation Gaps**: [#1489](https://github.com/sipeed/picoclaw/issues/1489). Users report that `config.example.json` is missing many available parameters defined in the source code.

## 7. User Feedback Summary
*   **Pain Points**: Local model configuration (Ollama) remains the biggest friction point for self-hosters. Documentation is lagging behind code features ("missing config params").
*   **UI/UX**: Users reported that the Web UI chat history defaults to a "new conversation" view instead of the last active session ([#1373](https://github.com/sipeed/picoclaw/issues/1373)).
*   **Satisfaction**: High engagement with the "Agent Refactor" suggests users appreciate the move towards more modular, personalized AI behaviors.

## 8. Backlog Watch
*   **[Enhancement] OpenIM Plugin**: [#1372](https://github.com/sipeed/picoclaw/issues/1372)
    *   A request for an OpenClaw plugin for OpenIM. No movement yet; needs community contribution.
*   **[Bug] Exec Tool Guard Logic**: [#1042](https://github.com/sipeed/picoclaw/issues/1042)
    *   The `restrict_to_workspace` safety feature is blocking benign commands (like `curl`) due to overly aggressive regex parsing of paths. This has been open since March 4.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-13

## 1. Today's Overview
NanoClaw is experiencing a surge of high-velocity development and maintenance activity. With **35 Pull Requests** and **18 Issues** updated in the last 24 hours, the project is in an active expansion phase, focusing heavily on broadening channel support (Signal, Feishu, Marmot) and refining core container orchestration. While feature addition is aggressive, stability concerns are mounting, specifically regarding OAuth token persistence, duplicate message processing, and Docker compatibility issues. The community is actively engaged in submitting skills and fixes, indicating a healthy open-source ecosystem, though the backlog of unresolved high-priority bugs suggests a need for focused triage.

## 2. Releases
**No new releases** published in the last 24 hours. The project appears to be absorbing significant contributions via trunk/main development without immediate versioning tags.

## 3. Project Progress
**Merged & Closed Features:**
*   **Infrastructure Fixes:** Two critical infrastructure bugs were closed today.
    *   **[BUG-28: Podman SSH connection drops on macOS #993](https://github.com/qwibitai/nanoclaw/issues/993)**: Addressed the "silent death" of bots after macOS sleep/wake cycles by implementing Podman machine restart logic.
    *   **[BUG-29: Matrix sluggish on Poseidon #992](https://github.com/qwibitai/nanoclaw/issues/992)**: Resolved conduwuit 500 errors affecting federated rooms on the Poseidon homeserver.
*   **Database Telemetry:** **[Issue #991](https://github.com/qwibitai/nanoclaw/issues/991)** (Closed) successfully filled in the write logic for the `usage.db` schema expansion, ensuring all token-optimization metrics are now recorded.

**Advancing Features (Open PRs):**
*   **New Channels:** Major additions for **[Signal (#1016)](https://github.com/qwibitai/nanoclaw/pull/1016)** and **[Feishu/Lark (#920)](https://github.com/qwibitai/nanoclaw/pull/920)** are under review.
*   **Decentralized Messaging:** **[PR #1021](https://github.com/qwibitai/nanoclaw/pull/1021)** proposes an E2EE channel using the Marmot Protocol (MLS + Nostr), compatible with White Noise.
*   **Agent Memory:** **[PR #979](https://github.com/qwibitai/nanoclaw/pull/979)** introduces long-term semantic memory for agents using LanceDB.

## 4. Community Hot Topics
*   **Security Architecture Debate:**
    *   **[Issue #865: Using containers alone doesn't make you more secure](https://github.com/qwibitai/nanoclaw/issues/865)** (High Priority). This thread has sparked a deep discussion on trusting containers. The community is debating whether scripts should live at the agent level versus the container level to prevent privilege escalation.
    *   **[Issue #878: Extend credential proxy](https://github.com/qwibitai/nanoclaw/issues/878)** (High Priority). Significant interest in routing GROQ and OpenAI keys through the host-side proxy to keep credentials out of containers.
*   **Performance:**
    *   **[Issue #989: Gemini Pro container latency](https://github.com/qwibitai/nanoclaw/issues/989)** (High Priority). Active discussion on optimizing the 123k token input context which causes 3.5-minute delays.
*   **Interoperability:**
    *   **[Issue #957: Support for Podman](https://github.com/qwibitai/nanoclaw/issues/957)**. Users are requesting official documentation for Podman as a Docker alternative due to daemon-less security benefits.

## 5. Bugs & Stability
**High Severity:**
*   **[OAuth Token Expiry #730](https://github.com/qwibitai/nanoclaw/issues/730)**: Containers fail with 401 errors every morning because `CLAUDE_CODE_OAUTH_TOKEN` expires overnight and cannot be refreshed in the background.
*   **[Duplicate Messages #1020](https://github.com/qwibitai/nanoclaw/issues/1020)**: Users receive double replies. A fix PR **[#1022](https://github.com/qwibitai/nanoclaw/pull/1022)** is already open.
*   **[Docker/Colima Breakage #341](https://github.com/qwibitai/nanoclaw/issues/341)**: The `add-discord` skill breaks Docker users by calling Apple Container commands directly.
*   **[Protocol Violation #827](https://github.com/qwibitai/nanoclaw/issues/827)**: Agent loop accepts `FinishReason::ToolUse` with 0 tool calls as a success, causing logic errors.
*   **[Z.ai API Compatibility #1018](https://github.com/qwibitai/nanoclaw/pull/1018)**: Fix submitted for Z.ai's Anthropic-compatible API endpoint `https://api.z.ai/api/anthropic`.

**Medium Severity:**
*   **[Setup Complexity #973](https://github.com/qwibitai/nanoclaw/issues/973)**: Users complaining that "setup takes ages" and is overly complex compared to a simple JSON config.
*   **[Unicode Surrogates #1009](https://github.com/qwibitai/nanoclaw/pull/1009)**: WhatsApp emoji encoding (lone surrogates) crashes the Claude API; fix pending.

## 6. Feature Requests & Roadmap Signals
*   **Rich Media Support:** A clear signal from multiple PRs (#862, #1011, #1012) that users want the agent to handle files (images, PDFs, audio) natively, not just text.
*   **LLM Provider Flexibility:** **[Issue #1015](https://github.com/qwibitai/nanoclaw/issues/1015)** requests support for non-Anthropic models (specifically GLM-5 via DeepInfra). The rapid merge of credential proxy logic for Groq/OpenAI suggests this is a high priority for the roadmap.
*   **Tooling:** Users are asking for GitHub integration **[#976](https://github.com/qwibitai/nanoclaw/pull/976)** (Closed) and Telegram inline keyboards **[#1014](https://github.com/qwibitai/nanoclaw/pull/1014)**.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Security Paranoia:** Advanced users feel the current "container" promise is false security if credentials leak into the environment or if scripts run at a privileged level.
    *   **Setup Fatigue:** The complexity of the `.env` and Claude Code setup is a barrier to entry (#973).
    *   **Flaky Connectivity:** macOS sleep/wake cycles and Podman SSH drops are causing daily friction for desktop users.
*   **Positive Reception:**
    *   The "Skills" system is attracting high-quality contributions (Signal, News Briefing, LanceDB memory).
    *   The concept of "Agent Swarms" (seen in the News Briefing PR #886) is resonating with the user base.

## 8. Backlog Watch
*   **[Issue #829: SOUL.md Hallucination](https://github.com/qwibitai/nanoclaw/issues/829)** (Open since Mar 8). The agent fabricating tool execution claims is a critical trust/safety issue that needs a rule update in the system prompt.
*   **[Issue #830: Silent Task Dropping](https://github.com/qwibitai/nanoclaw/issues/830)** (Open since Mar 8). Scheduled tasks fire silently when the session is busy. This undermines the reliability of automation features.
*   **[PR #932: Gen tech agency](https://github.com/qwibitai/nanoclaw/pull/932)** (Open since Mar 10). This PR is vague ("Gen tech agency main") and appears abandoned or unclear; it requires maintainer clarification.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-03-13

## 1. Today's Overview
NullClaw demonstrates high development velocity with significant activity focused on stability, platform support, and channel expansion. In the last 24 hours, the project released two patch versions (`v2026.3.13` and `v2026.3.12`) addressing critical WebSocket connectivity and rate-limiting bugs. The community is highly active, with 41 Pull Requests updated—indicating a robust merge workflow—and 19 issues addressed, suggesting rapid maintenance cycles. Key focus areas include fixing integration issues with popular platforms (Lark/Feishu, Telegram) and improving accessibility for Windows users.

## 2. Releases
**v2026.3.13** (Latest)
*   **Highlights:** Critical fixes for API reliability and platform connectivity.
*   **Key Changes:**
    *   **Agent Reliability:** Merged PR #474 fixes an issue where the agent would perform immediate retries after hitting rate limits (429 errors), preventing potential API bans or wasted quota.
    *   **Platform Documentation:** Added specific instructions for Windows users utilizing binary files directly (PR #479).
*   **Migration Notes:** Users experiencing "Rate limit exceeded" errors (Issue #341) should update immediately.

**v2026.3.12**
*   **Highlights:** Enhanced Telegram functionality and Feishu (Lark) stability.
*   **Key Changes:**
    *   **Telegram:** PR #436 hardened forum topic isolation and fixed command menus (Issue #435).
    *   **Feishu/Lark:** PR #443 applied `HEAVY_RUNTIME_STACK_SIZE` to websocket threads to resolve bus errors and connection cycles (Issue #423).

## 3. Project Progress
*   **Windows Support & Documentation:** Significant effort was put into improving the Windows experience. PRs #471, #475, #479, #482, #488, and #489 were merged or opened to add guides for binary usage, PATH configuration, and uninstallation procedures.
*   **Infrastructure Stability:** PR #467 was merged to fix Windows Service startup failures (Error 1053), and PR #469 fixed the OneBot websocket gateway loop, adding plain `ws://` support.
*   **Core Logic:** PR #472 and #486 (merged) addressed memory management issues.
*   **New Channels:** PR #468 (merged) added support for "Max messenger" (platform-api.max.ru), and PR #438 (open) proposes adding Microsoft Teams support.

## 4. Community Hot Topics
*   **Platform Connectivity Woes:**
    *   **Issue #477 (Lark/Feishu):** Users reporting websocket disconnections. [Link](https://github.com/nullclaw/nullclaw/issues/477)
    *   **Issue #490 (DingTalk):** Verification of connection success. [Link](https://github.com/nullclaw/nullclaw/issues/490)
    *   **Analysis:** There is a persistent underlying need for stable websocket handling across Asian messaging platforms (Lark, DingTalk). Users are actively validating fixes found in `v2026.3.12` and `v2026.3.13`.
*   **Windows Installation:**
    *   **Issue #320:** Addressing character encoding on the main page without language packs.
    *   **Issue #449:** Request for official Docker Hub images.
    *   **Analysis:** New users struggle with the "non-standard" installation process (binaries vs. package managers). The rush of documentation PRs today indicates the team is prioritizing this friction point.

## 5. Bugs & Stability
*   **High Severity: Websocket TLS Regression (PR #487)**
    *   *Issue:* A refactor in `v2026.3.12` introduced a bug where empty reads on TLS connections (`wss://`) caused them to close prematurely. This affects Discord, Lark, DingTalk, and QQ channels.
    *   *Status:* Fix PR #487 is **Open**.
*   **Medium Severity: Lark Net Query (Issue #484)**
    *   *Issue:* Reports of Lark being unable to query the web/network.
    *   *Status:* Open, under investigation.
*   **Low Severity: Legacy Kernel Support (Issue #448)**
    *   *Issue:* `readFileAlloc` fails on Linux kernels < 4.11 (common on older Pis/NAS).
    *   *Status:* Closed as "reference only," but noted for future revisit.

## 6. Feature Requests & Roadmap Signals
*   **Docker Support (Issue #449):** A strong request for official Docker Hub images and `docker-compose` files to simplify deployment.
*   **Microsoft Teams (PR #438):** A PR is currently open to add full Teams support via Bot Framework v4. Given the project's recent addition of the "Max" messenger, this has a high probability of being merged soon.
*   **Self-Hosting Capability (Issue #485):** A request for NullClaw to manage and self-host privacy services (e.g., Invidious) over .onion/.i2p domains.
*   **DingTalk Receive Mode (Issue #376):** Users asking if DingTalk can receive messages, not just send (currently "send-only").

## 7. User Feedback Summary
*   **Pain Points:** The primary frustration today stems from **platform instability**, specifically with **Feishu/Lark** websockets dropping connections or failing to initialize. Additionally, **Windows users** find the current installation process opaque, specifically regarding where binaries are placed and how to add them to the PATH.
*   **Positive Signals:** Users are actively contributing fixes (e.g., @neoliuhua with Windows docs, @vedmalex with Telegram fixes). The rapid closing of issues related to "Termux" (Issue #17) and "OneBot" (Issue #308) shows the team is responsive to configuration hurdles.

## 8. Backlog Watch
*   **MiniMax-M2.5 LLM Initialization (Issue #222):** Closed recently, but worth monitoring for regression reports as more users adopt this specific model provider.
*   **Docker Image (Issue #449):** As Docker is the standard for self-hosting, the lack of an official image is a gap in the project's distribution strategy.
*   **Linux Kernel Compatibility (Issue #448):** While closed, users on older hardware (Raspberry Pi, older NAS) may still face the `statx` error; this requires a compile-time workaround.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-13

## 1. Today's Overview
IronClaw is experiencing a high-velocity development cycle with **50 issues and 50 PRs updated** in the last 24 hours. The project is currently in a "Bug Bash" and stabilization phase, addressing a backlog of user-facing bugs and critical security vulnerabilities following recent feature additions. Activity is split between active community bug reporting and a significant "staging-to-main" promotion effort involving automated CI workflows. While feature velocity remains high with new channel plugins (Feishu) and cognitive architectures, stability concerns regarding Routines, MCP integrations, and OAuth flows are dominant themes.

## 2. Releases
**No new releases** were published today. The codebase is active, with changes staged for future release (likely `v0.18.0` or later based on registry artifacts in PRs), but no official release tags were pushed in the last 24 hours.

## 3. Project Progress
*   **Staging Promotion (PR #1032 & #1096):** The CI system is aggressively promoting batches of commits from `staging` to `main`. This includes a wide range of fixes affecting the agent loop, channels, tools, and documentation.
*   **Critical Bug Fixes (PR #1083):** A major PR is currently open addressing 11 high-priority bugs, including **Critical** security fixes for Webhook authentication bypasses and stability fixes for relay channels and unbounded recursion.
*   **Feishu Channel Integration (PR #1104):** A new WASM-based channel plugin for Feishu (Lark) was proposed, expanding the platform's integration capabilities beyond Telegram/Slack.
*   **Cognitive Architecture (PR #1019):** Work continues on a "Cognitive Guardian" module designed to proactively manage memory and context pressure, signaling advanced architectural improvements.

## 4. Community Hot Topics
*   **[Bug Bash] Google Sheets & OAuth Failures:**
    *   **Issue #999:** Google Sheets returns `403 PERMISSION_DENIED` immediately after OAuth completion. Users cannot write to spreadsheets despite successful authentication.
    *   **Issue #992:** Google OAuth URL is malformed (missing underscore in `client_id`) when initiated from Telegram, blocking users entirely.
    *   **Issue #1002:** Sheets are created but left empty due to parameter passing failures.
    *   *Analysis:* There is a critical breakdown in the Google Workspace integration stack, affecting both the OAuth flow and the tool execution layer.
*   **Routine Engine Instability:**
    *   **Issue #1053 (Closed):** Cron-triggered routines were failing to fire reliably due to an incorrect ticker implementation in the routine engine.
    *   **Issue #994:** Routines broadcast to Telegram fail silently because the system uses `"default"` as the chat ID instead of the actual user ID.
    *   *Analysis:* The automation/routine layer is a core feature currently suffering from data propagation and timing issues.
*   **Installation & Extension Issues:**
    *   **Issue #1060:** Users report "HTTP 404 Not Found" when trying to install extensions (e.g., Gmail WASM), indicating broken release asset links.

## 5. Bugs & Stability
**CRITICAL Severity**
*   **Webhook Auth Bypass (Issue #1033, #1083):** When a webhook secret is cleared at runtime, the system may allow unauthenticated requests. A fix is incoming in PR #1083.
*   **N+1 Query Pattern (Issue #823):** The event trigger loop performs N+1 queries on cached routines, causing performance degradation. (Risk: High, Confidence: 88%).
*   **Non-Transactional Context Updates (Issue #813):** Concurrent updates to context metadata/tokens can lead to race conditions due to lack of transactional wrapping.

**HIGH Severity**
*   **SSRF Risk (Issue #1103):** Configurable embedding base URLs lack validation, presenting a Server-Side Request Forgery risk.
*   **Relay Channel Failures (Issue #908 in PR #1083):** Critical failures in relay channel connectivity logic.
*   **MCP Authentication (Issue #299):** Users cannot authenticate MCP servers (like Browserbase) because IronClaw does not currently support modifying the `mcpServers` JSON configuration.

**Functional/UI Bugs**
*   **Tool Approval Modal (Issue #996):** Requires a page reload to appear; blocks workflow.
*   **LLM Parameter Serialization (Issue #993):** The LLM passes `values` as a JSON string instead of an array, causing Google Sheets write failures.
*   **UI Feedback (Issue #997):** "Waiting for approval" is labeled as "Error," causing user confusion.

## 6. Feature Requests & Roadmap Signals
*   **Bring Your Own Key (BYOK) Model Config (Issue #1027):** Users want explicit support and documentation for configuring custom LLM providers, moving this from an implementation detail to a supported product feature.
*   **E2E Testing (Issue #1044):** There is a push to implement End-to-End tests using Claude Code and Chrome MCP to validate the Bug Bash fixes, indicating a shift towards quality assurance.
*   **Feishu Channel (PR #1104):** Explicit request to add support for the Feishu (Lark) enterprise messaging platform.

## 7. User Feedback Summary
*   **Pain Point:** **Fragility of Integrations.** Users are struggling significantly with Google Sheets and Telegram. The feedback indicates that while these integrations exist, they fail silently (empty sheets) or cryptically (malformed URLs).
*   **Pain Point:** **Extension Management.** The inability to install extensions due to 404 errors on release assets suggests a release pipeline issue that directly blocks user workflows.
*   **Satisfaction:** Users are actively engaging in the "Bug Bash" (labeling issues `P1`, `P2`), showing a strong desire to help stabilize the project rather than abandon it.
*   **Confusion:** The distinction between "Cron" and "Event" routines is causing backend errors and user confusion (e.g., trying to change a schedule type).

## 8. Backlog Watch
*   **Compatibility with Kimi-k2.5 (Issue #728):** Open since March 8, this issue highlights that IronClaw's standard configuration (temperature != 1) breaks the `kimi-k2.5` model, which requires strict parameters. This points to a need for provider-specific configuration profiles.
*   **Search Configuration (Issue #169 - Closed):** While closed, the issue regarding hardcoded search weights suggests that users want finer-grained control over search behavior (hybrid weights), which may re-emerge as a request.
*   **Staging CI Issues:** Several issues were automatically generated by the `ironclaw-ci` bot (#989, #813, #823) regarding missing parity between Linux/macOS and critical code patterns. These require human review to ensure they are properly mitigated in the main branch.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-13)

## 1. Today's Overview
LobsterAI is experiencing a high velocity of development driven by the imminent v0.2.4 release. The project has resolved a significant backlog of merged pull requests (10 closed in the last 24h) while handling a surge in new user issues (8 updated, 0 closed). The primary focus is currently on optimizing the backend infrastructure ("OpenClaw") and expanding IM channel capabilities, although this rapid iteration has introduced some frontend stability and configuration issues for users.

## 2. Releases
**v0.2.4 Published**
The project has released version v0.2.4, focusing on critical bug fixes over new features.
*   **IM Channel Connectivity**: Fixed a bug affecting connectivity tests for IM channels ([PR #393](https://github.com/netease-youdao/LobsterAI/pull/393)).
*   **Startup Stability**: Resolved an issue where the application would remain stuck in a loading state indefinitely upon launch ([PR #396](https://github.com/netease-youdao/LobsterAI/pull/396)).
*   **Full Changelog**: [v0.2.3...v0.2.4](https://github.com/netease-youdao/LobsterAI/compare/v0.2.3)

## 3. Project Progress
The team has made significant strides in backend performance and plugin management, merging 10 PRs today:
*   **Gateway Performance Optimization**: A major refactor ([PR #395](https://github.com/netease-youdao/LobsterAI/pull/395)) successfully reduced OpenClaw gateway startup time in Windows Electron environments from 180s+ (timeout territory) to approximately 15s using `esbuild` bundling and compile caching.
*   **Plugin System**: Implemented a pre-install system for OpenClaw plugins and auto-synced configurations for official IM channels (DingTalk, Feishu, QQ, WeCom) ([PR #346](https://github.com/netease-youdao/LobsterAI/pull/346)).
*   **Concurrent Stability**: Fixed a race condition that caused duplicate gateway startups and port drifting (moving from 18789 to 18790+) ([PR #401](https://github.com/netease-youdao/LobsterAI/pull/401)).
*   **Protocol Support**: Added support for custom URI protocols (e.g., `obsidian://`, `vscode://`) in markdown links ([PR #380](https://github.com/netease-youdao/LobsterAI/pull/380)).

## 4. Community Hot Topics
*   **Context Window Errors** ([Issue #370](https://github.com/netease-youdao/LobsterAI/issues/370)): Users are reporting 400 API errors regarding token limits (model context length) with very short inputs (e.g., "Hello"). This suggests potential issues with how the system calculates token history or context limits for specific model providers.
*   **Sandbox Removal Confusion** ([PR #403](https://github.com/netease-youdao/LobsterAI/pull/403)): A decision to remove the built-in sandbox and merge system prompts has sparked discussion, reflected in related installation issues ([Issue #402](https://github.com/netease-youdao/LobsterAI/issues/402)).

## 5. Bugs & Stability
**Severity: High**
*   **Startup Failure on Debian/ESXi**: Users cannot start the app in a Debian 12 VM environment; the application crashes silently after initialization ([Issue #402](https://github.com/netease-youdao/LobsterAI/issues/402)).
*   **Gateway Service Port Drift**: The `openclaw gateway status` command fails because the service is running on a different port than expected (18790+ instead of 18789), related to the duplicate startup fixes ([Issue #366](https://github.com/netease-youdao/LobsterAI/issues/366)).

**Severity: Medium**
*   **Update Detection Failure**: On Apple Silicon (ARM64), the "Check for Updates" feature fails to recognize v0.2.3, displaying "Current version is the latest" incorrectly ([Issue #390](https://github.com/netease-youdao/LobsterAI/issues/390)).
*   **Aliyun GLM 4.5 Compatibility**: Calls to Aliyun Bailian's GLM 4.5 model result in "Claude run failed" errors, while other models on the same provider work fine ([Issue #399](https://github.com/netease-youdao/LobsterAI/issues/399)).

## 6. Feature Requests & Roadmap Signals
*   **Memory Management for IM Bots**: Users are requesting a command (like `/new`, `/reset`, or `/clear`) to clear conversation memory in Feishu (Lark) bots ([Issue #398](https://github.com/netease-youdao/LobsterAI/issues/398)). This is a critical UX feature for conversational agents.
*   **Performance Optimization**: Complaints about "slowness" and "random waiting" ([Issue #400](https://github.com/netease-youdao/LobsterAI/issues/400)) indicate that while backend startup times were improved today, general runtime latency remains a user concern.
*   **Task Completion Logic**: Users report tasks finishing prematurely ("task completed" before actual completion), requiring manual "continue" prompts ([Issue #358](https://github.com/netease-youdao/LobsterAI/issues/358)).

## 7. User Feedback Summary
User sentiment is mixed regarding stability. While the v0.2.4 release addresses the critical "loading state" bug, new issues regarding model compatibility (Aliyun/GLM) and environment-specific crashes (Debian VMs) have emerged. The community is actively testing the new IM channel features, leading to friction points with gateway configuration and status detection.

## 8. Backlog Watch
*   **Premature Task Completion**: [Issue #358](https://github.com/netease-youdao/LobsterAI/issues/358) (updated today) highlights a fundamental logic gap in the agent's execution loop where it stops before the job is done.
*   **Performance vs. Features**: As the project adds more plugins and IM channels ([PR #346](https://github.com/netease-youdao/LobsterAI/pull/346)), the complaints about speed ([Issue #400](https://github.com/netease-youdao/LobsterAI/issues/400)) suggest the codebase is suffering from feature bloat, requiring continued optimization efforts.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-13

## 1. Today's Overview
TinyClaw is experiencing a **high-velocity development cycle** focused on stabilizing the "TinyOffice" web interface and fixing critical installation regressions. The project released two hotfix versions (v0.0.11 and v0.0.12) to address module import errors and missing setup scripts. While the core feature set is expanding rapidly with new persistence and visualization layers, the frequency of changes has introduced some instability in the CLI installation process and Telegram connectivity. The maintainers are aggressively closing issues, with 11 PRs merged in the last 24 hours, indicating a responsive effort to lock down the v0.0.x series before moving to feature rebranding (TinyAGI).

## 2. Releases
### **v0.0.12** (Latest)
**Focus:** Data Persistence & UX Simplification
*   **Agent Message Persistence:** Added a new `agent_messages` SQLite table to persist full agent chat history, enabling better debugging and context retrieval.
*   **Simplified Event Stream:** Introduced a new `agent_message` Server-Sent Event (SSE) that fires once per agent response. This simplifies frontend integration by removing the need to listen to complex `chain_step` lifecycles.
*   **Links:** [Release v0.0.12](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.12) | [PR #202](https://github.com/TinyAGI/tinyclaw/pull/202)

### **v0.0.11**
**Focus:** Hotfix for Installations
*   **Breaking Import Fix:** Resolved breaking imports related to the migration from old shell-based setup wizards to TypeScript-based flows.
*   **Attribution:** Co-authored by Claude Opus 4.6.
*   **Links:** [Release v0.0.11](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.11)

## 3. Project Progress
The following significant features were merged or finalized in the last 24 hours:

*   **TinyOffice UX Overhaul:** Merged significant updates to the web interface, including a new **Organization Chart** visualization ([PR #201](https://github.com/TinyAGI/tinyclaw/pull/201)) and a "Slack-style" **Chat Rooms** interface replacing the basic Teams view ([PR #199](https://github.com/TinyAGI/tinyclaw/pull/199)).
*   **Interactive Setup Wizard:** To lower the barrier to entry, a multi-step interactive wizard was added for initial configuration ([PR #204](https://github.com/TinyAGI/tinyclaw/pull/204)).
*   **Projects & Task Management:** Advanced the "Projects" abstraction, allowing users to group Tasks into Kanban boards filtered by project ([PR #203](https://github.com/TinyAGI/tinyclaw/pull/203)).
*   **Telegram Stability:** Implemented fixes for network reconnect failures and polling stalls ([PR #200](https://github.com/TinyAGI/tinyclaw/pull/200)).
*   **Architecture Modernization:** Converted the CLI package to ESM (EcmaScript Modules) to support modern dependencies like `@clack/prompts` v1.x ([PR #206](https://github.com/TinyAGI/tinyclaw/pull/206)).

## 4. Community Hot Topics
*   **[Issue #126: Telegram Bot Auto-Reconnect Failure](https://github.com/TinyAGI/tinyclaw/issues/126)** (Open, 6 comments)
    *   *Topic:* Persistent connectivity issues with the Telegram integration.
    *   *Sentiment:* Users are experiencing dropped connections that require manual restarts.
    *   *Status:* A fix ([PR #200](https://github.com/TinyAGI/tinyclaw/pull/200)) was merged today addressing polling stalls, but the issue remains open as users verify the long-term stability of the fix.
*   **[PR #191: Rebrand TinyClaw to TinyAGI](https://github.com/TinyAGI/tinyclaw/pull/191)** (Open)
    *   *Topic:* A massive refactoring effort to rename the project, packages, and CLI commands from `tinyclaw` to `tinyagi`.
    *   *Signal:* This indicates a strategic shift in project identity and implies potential future breaking changes for users upgrading to the next major version.

## 5. Bugs & Stability
*   **CRITICAL (Closed):** [Bug #197: Missing `setup-wizard.sh`](https://github.com/TinyAGI/tinyclaw/issues/197)
    *   *Issue:* Fresh installs failed completely due to stale shell script references.
    *   *Fix:* Patched in v0.0.11 and via [PR #198](https://github.com/TinyAGI/tinyclaw/pull/198).
*   **HIGH (Closed):** [Bug #205: Problem importing `@clack/prompts`](https://github.com/TinyAGI/tinyclaw/issues/205)
    *   *Issue:* Runtime errors during `tinyclaw pairing approve` due to CommonJS/ESM mismatch.
    *   *Fix:* Resolved by converting CLI to ESM in [PR #206](https://github.com/TinyAGI/tinyclaw/pull/206).
*   **MEDIUM (Open):** [Bug #126: Telegram Auto-Reconnect](https://github.com/TinyAGI/tinyclaw/issues/126)
    *   *Issue:* Telegram bot does not recover from network drops automatically.
    *   *Fix:* Mitigated in [PR #200](https://github.com/TinyAGI/tinyclaw/pull/200), but under active observation.

## 6. Feature Requests & Roadmap Signals
*   **Web-Based Onboarding:** [Issue #193](https://github.com/TinyAGI/tinyclaw/issues/193) requests a "first-run web onboarding" experience. This is partially addressed by the merged **Setup Wizard** (PR #204), suggesting this feature will be fully realized in the next patch.
*   **Real-time Execution Streaming:** [Open PR #196](https://github.com/TinyAGI/tinyclaw/pull/196) proposes streaming `agent_progress` events. This signals a move towards more responsive UI feedback in TinyOffice, likely to appear in v0.0.13.

## 7. User Feedback Summary
*   **Pain Points:** The primary source of friction today was the **installation process**. Multiple users reported that the "quick start" scripts were broken (Critical severity), requiring manual intervention.
*   **Satisfaction:** Users are actively engaging with the "TinyOffice" web interface, requesting better visualization of agent hierarchies (Org Charts) and chat history.
*   **Usability:** There is a clear demand to move away from CLI-heavy configuration toward web-based flows, as evidenced by the rapid implementation of the Setup Wizard.

## 8. Backlog Watch
*   **[Issue #126](https://github.com/TinyAGI/tinyclaw/issues/126):** Despite today's merge (PR #200), this issue remains open. It requires sustained monitoring to ensure the Telegram client is robust in unstable network environments.
*   **[PR #191](https://github.com/TinyAGI/tinyclaw/pull/191):** The "Rebrand to TinyAGI" PR is open but not yet merged. This is a significant change that will likely impact documentation, Docker images, and user workflows. It is currently a wildcard for the next release cycle.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-13

## 1. Today's Overview
Moltis is in a **high-velocity development phase**, with significant maintenance and feature expansion underway. The project closed 7 issues and merged 6 PRs in the last 24 hours, indicating strong momentum in addressing technical debt and user feedback. The core focus appears to be stabilizing the sandbox environment (Apple Container & Docker) and enhancing the local-LLM experience. There are no new releases today, suggesting the team is batching changes for a future deployment, likely the upcoming v1.0 or a significant feature release.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
Several key features and fixes have moved forward, largely driven by contributor `@penso`:

*   **Sandbox Stability**: Fixes for the Apple Container sandbox (chdir errors) have been merged (**[#405](https://github.com/moltis-org/moltis/pull/405)**), ensuring the environment provisions correctly.
*   **Docker Environment Support**: Generic provider environment variable support for Docker (`MOLTIS_PROVIDER`, `API_KEY`) was merged (**[#401](https://github.com/moltis-org/moltis/pull/401)**), addressing requests for easier secret management.
*   **Telegram Integration**: A fix for Telegram HTML parsing was merged (**[#404](https://github.com/moltis-org/moltis/pull/404)**), ensuring raw HTML tags are stripped when falling back to plain text.
*   **Workflow Foundation**: A new workflow daemon (`symphony`) has been proposed (**[#421](https://github.com/moltis-org/moltis/pull/421)**), signaling the start of structured workflow automation support.
*   **macOS Platform**: Work has begun on proper app signing and notarization for macOS releases (**[#422](https://github.com/moltis-org/moltis/pull/422)**).

## 4. Community Hot Topics
*   **Trusted Network Proxy Failure** ([#367](https://github.com/moltis-org/moltis/issues/367))
    *   **Status:** Closed (Fixed).
    *   **Discussion:** Users reported that the trusted-network proxy for sandboxes was shutting down immediately, breaking web tools. This was a critical blocker for self-hosted users relying on `web_fetch`.
*   **Datetime in System Prompt** ([#176](https://github.com/moltis-org/moltis/issues/176))
    *   **Status:** Open.
    *   **Discussion:** Highly requested feature (+1 reaction) to inject current datetime into the system prompt context. With 13 comments, this indicates a strong user need for better temporal awareness in agent responses.

## 5. Bugs & Stability
*   **High Severity: Docker Sandbox & Trusted Network**
    *   **Issue:** [#367](https://github.com/moltis-org/moltis/issues/367) (Trusted network proxy crash) is now closed.
    *   **Issue:** [#423](https://github.com/moltis-org/moltis/issues/423) (NEW) - Reports of instability when running both Moltis and its sandbox inside Docker.
*   **Medium Severity: Parsing Panics**
    *   **Issue:** [#420](https://github.com/moltis-org/moltis/issues/420) (NEW) - `web_fetch` crashes with "byte index is not a char boundary" on non-UTF8 legacy web pages.
*   **Low Severity: UI/UX**
    *   **Issue:** [#214](https://github.com/moltis-org/moltis/issues/214) - Telegram formatting issues (Closed).

## 6. Feature Requests & Roadmap Signals
*   **Platform Expansion:**
    *   **Android/Termux:** Request for prebuilt Android binaries ([#424](https://github.com/moltis-org/moltis/issues/424)) suggests a growing mobile user base.
*   **MCP (Model Context Protocol) Enhancements:**
    *   **Configurable Timeouts:** PR [#419](https://github.com/moltis-org/moltis/pull/419) proposes making MCP timeouts configurable, vital for complex MCP servers (like `codex`).
    *   **Security:** Support for secret headers and query strings in remote MCP URLs ([#416](https://github.com/moltis-org/moltis/pull/416)) has been merged.
*   **Local LLM:**
    *   **Vulkan Support:** PR [#408](https://github.com/moltis-org/moltis/pull/408) adds opt-in Vulkan support for GGUF models, expanding hardware compatibility.

## 7. User Feedback Summary
*   **Positive Sentiment:** Users praised the single-binary, multi-provider nature of Moltis (Issue #125), citing it as "awesome" for homelab setups.
*   **Pain Points:**
    *   **Configuration Complexity:** Users struggle with secrets management (hence the Docker env var fix).
    *   **Platform Quirks:** Apple Container and Docker networking remain the primary friction points for stability.
*   **Integration Needs:** There is a clear demand for better output formatting (Telegram HTML) and flexible deployment (Docker env vars, Android support).

## 8. Backlog Watch
*   **[#176](https://github.com/moltis-org/moltis/issues/176) (Datetime context):** Open since Feb 17. Despite high engagement (13 comments), it remains unresolved.
*   **[#415](https://github.com/moltis-org/moltis/pull/415) (Onboarding Auth):** PR is open to fix a UX issue where onboarding becomes inaccessible after an auth reset.
*   **[#417](https://github.com/moltis-org/moltis/pull/417) (GGUF Custom Models):** Open PR addressing regression in custom GGUF setup without restarting the gateway. This seems critical for local LLM users but is pending review.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Daily Digest: 2026-03-13

## 1. Today's Overview
The CoPaw project is experiencing a high phase of activity and transition. With the release of **v0.0.7**, the project is prioritizing security and extensibility, evidenced by the new "Tool Guard" feature and a surge in Pull Requests (50 updated, including 32 open). However, the community is reporting significant stability concerns with the latest version, particularly regarding data persistence in Docker environments, UI regressions, and memory/context handling issues. The backlog of active issues (42 open) remains high, indicating strong usage but also friction points post-upgrade.

## 2. Releases
**v0.0.7** (Latest Release)
*   **Security Enhancements:** Introduced **Tool Guard**, a pre-execution security layer that scans tool parameters for risky patterns (e.g., `rm`, `mv` in shell commands).
*   **User Control:** Risky calls are blocked pending user approval via the `/approve` command. Denied tools are permanently blocked.
*   **UI Updates:** Added a dedicated **Security** settings page for managing these permissions.

## 3. Project Progress
*   **Security Framework:** The release of v0.0.7正式izes the security approval workflow, addressing long-standing community requests for safer agent tool execution (Related to [Issue #174](https://github.com/agentscope-ai/CoPaw/issues/174)).
*   **Provider Expansion:** Significant work is ongoing to support diverse LLM providers.
    *   PRs are open for **MiniMax** ([#1376](https://github.com/agentscope-ai/CoPaw/pull/1376), [#1055](https://github.com/agentscope-ai/CoPaw/pull/1055)) and **OpenRouter** ([#1192](https://github.com/agentscope-ai/CoPaw/pull/1192)).
    *   Fixes for **OpenAI-compatible providers** (custom headers/wire_api) are in review ([#419](https://github.com/agentscope-ai/CoPaw/pull/419)).
*   **Skill Management:**
    *   A fix for duplicate built-in skill listings has been proposed ([#1396](https://github.com/agentscope-ai/CoPaw/pull/1396)).
    *   Metadata-driven runtime configuration for skills is under development ([#1241](https://github.com/agentscope-ai/CoPaw/pull/1241)).
    *   Support for importing skills from **LobeHub** is in progress ([#1350](https://github.com/agentscope-ai/CoPaw/pull/1350)).
*   **System Utilities:** A `copaw update` CLI command is being developed to automate upgrades ([#1278](https://github.com/agentscope-ai/CoPaw/pull/1278)).

## 4. Community Hot Topics
*   **Version & Cache Confusion:** Users are struggling to verify their active version after upgrading.
    *   [Issue #1315](https://github.com/agentscope-ai/CoPaw/issues/1315) (13 comments): User updated to `0.0.6.post1`, but the UI persists in showing `v0.0.5b1` despite cache clearing and process restarts.
*   **Tool Execution & Shell Blocking:**
    *   [Issue #649](https://github.com/agentscope-ai/CoPaw/issues/649) (8 comments): The `execute_shell_command` tool causes the session to hang when running long-term background services.
    *   [Issue #1385](https://github.com/agentscope-ai/CoPaw/issues/1385): CPU usage spikes to 100% after calling `read_file` on Ubuntu 25.10.
*   **Docker & Data Persistence:**
    *   [Issue #1382](https://github.com/agentscope-ai/CoPaw/issues/1382) (Closed, but high impact): Reports that restarting the Docker container wipes all configurations, profiles, and memory because `/app/working` is not persistent.
*   **LLM Integration Pain Points:**
    *   [Issue #282](https://github.com/agentscope-ai/CoPaw/issues/282) (13 comments): `pptxgenjs` tool triggers `RemoteProtocolError` causing task stops.
    *   [Issue #1404](https://github.com/agentscope-ai/CoPaw/issues/1404): Triggering a 400 error (Data Inspection) creates a persistent failure state that survives session deletion and restarts.

## 5. Bugs & Stability
*   **Critical: Data Loss on Update:** [Issue #1384](https://github.com/agentscope-ai/CoPaw/issues/1384) (v0.0.7) - "Deep restart" or updates are causing model configurations to fail or disappear completely.
*   **Critical: Shell Command Hangs:** [Issue #649](https://github.com/agentscope-ai/CoPaw/issues/649) - Long-running commands block the agent indefinitely.
    *   *Fix Status:* PR [#1410](https://github.com/agentscope-ai/CoPaw/pull/1410) (Open) attempts to fix this using process groups on Unix.
*   **Severe: Channel Instability:**
    *   [Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345): Feishu channel exhibits "delayed replies," answering previous questions instead of current ones.
    *   [Issue #1304](https://github.com/agentscope-ai/CoPaw/issues/1304): DingTalk channel fails with "session expired" errors during cron jobs, requiring manual intervention.
*   **Severe: Context/Memory Issues:**
    *   [Issue #1390](https://github.com/agentscope-ai/CoPaw/issues/1390): Models (specifically Qwen via Ollama) show no memory/context of previous turns.
    *   [Issue #1319](https://github.com/agentscope-ai/CoPaw/issues/1319): `AGENT_UNKNOWN_ERROR` related to missing `reasoning_content` fields.
*   **Moderate: UI Regressions:**
    *   [Issue #1413](https://github.com/agentscope-ai/CoPaw/issues/1413): Docker users see duplicated skills lists and model replacement issues.
    *   [Issue #1068](https://github.com/agentscope-ai/CoPaw/issues/1068): Web UI fails to display images, though they work in other channels.

## 6. Feature Requests & Roadmap Signals
*   **Timezone & Time Context:** [Issue #1346](https://github.com/agentscope-ai/CoPaw/issues/1346) requests embedding local time into system prompts to help weaker models that fail to call `get_current_time` tools.
*   **Multi-Agent Architecture:** [PR #1375](https://github.com/agentscope-ai/CoPaw/pull/1375) (Preview) introduces a multi-agent/multi-workspace architecture, signaling a major roadmap shift toward concurrent agent management.
*   **Webhooks:** [Issue #338](https://github.com/agentscope-ai/CoPaw/issues/338) requests webhook functionality for external software integration.
*   **New Channels:** Active PRs suggest imminent support for **WeCom** (WeChat Enterprise) ([#1407](https://github.com/agentscope-ai/CoPaw/pull/1407)) and **XiaoYi** ([#1213](https://github.com/agentscope-ai/CoPaw/pull/1213)).

## 7. User Feedback Summary
*   **Dissatisfaction:** Users are frustrated with the upgrade process ("Deep restart"), citing data loss and configuration invalidation. The distinction between the backend version and UI display version is causing confusion ([#1315](https://github.com/agentscope-ai/CoPaw/issues/1315)).
*   **Dissatisfaction:** Channel stability (DingTalk, Feishu, QQ) is a major pain point, with reports of "delayed replies" and session expirations disrupting workflows.
*   **Satisfaction:** The new "Tool Guard" feature (v0.0.7) addresses a high-priority community need for safety in shell command execution.
*   **Use Cases:** Users are heavily utilizing CoPaw for cron job scheduling (news pushing), file management, and integration with Ollama/local models, which is stress-testing the memory and context handling features.

## 8. Backlog Watch
*   **Multi-Agent Support:** [Issue #1298](https://github.com/agentscope-ai/CoPaw/issues/1298) - Request for OpenHands-like multi-agent execution. Currently addressed by the in-progress PR [#1375](https://github.com/agentscope-ai/CoPaw/pull/1375).
*   **Shell Security:** [Issue #174](https://github.com/agentscope-ai/CoPaw/issues/174) - Request for permission approval system. Partially addressed in v0.0.7, but extended privacy controls ([PR #186](https://github.com/agentscope-ai/CoPaw/pull/186)) are still pending.
*   **Image Handling:** [Issue #1068](https://github.com/agentscope-ai/CoPaw/issues/1068) - Images not showing in Web UI. A fix is proposed in [PR #1211](https://github.com/agentscope-ai/CoPaw/pull/1211).

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# Project Digest: ZeptoClaw
**Date:** 2026-03-13
**Status:** Active Development / High Feature Velocity

---

### 1. Today's Overview
ZeptoClaw is demonstrating high development velocity with a strong focus on user experience (UX) and agent capabilities. In the last 24 hours, the project merged three significant features—`ask_clarification`, `deep-research`, and `shimmer spinner`—while simultaneously advancing a streaming-by-default CLI update. The project appears to be in a feature-expansion phase, balancing new research skills with critical infrastructure fixes like Zhipu API key validation. Activity is robust, with core maintainer @qhkm driving most feature implementation, while community contributors are identifying edge cases in container builds and platform integrations (Telegram/Discord).

### 2. Releases
*No new releases published today.*

### 3. Project Progress
The following features were successfully merged or closed today, advancing the project's capabilities:

*   **Merged: Agent Clarification Tool (#343)**
    *   **Change:** Implemented `pause_for_input` support in the agent loop, allowing the agent to halt execution and request user input via a new `AskClarificationTool`.
    *   **Impact:** Reduces agent hallucination by enabling interactive disambiguation instead of guessing.
    *   *Link: [PR #343](https://github.com/qhkm/zeptoclaw/pull/343)*

*   **Merged: Deep-Research Skill (#344)**
    *   **Change:** Added a bundled `deep-research` skill (`SKILL.md`) teaching agents a 4-phase methodology (broad exploration, deep dive, diversity validation, synthesis).
    *   **Impact:** Significantly boosts agent reasoning capabilities for complex tasks without binary changes.
    *   *Link: [PR #344](https://github.com/qhkm/zeptoclaw/pull/344)*

*   **Merged: Enhanced CLI UX (#337)**
    *   **Change:** Introduced gradient text shimmer animations ("Thinking..."), step-based progress indicators for tools, and cleaner separators.
    *   **Impact:** Improves perceived performance and visual feedback during agent execution.
    *   *Link: [PR #337](https://github.com/qhkm/zeptoclaw/pull/337)*

*   **Merged: Zhipu Provider Validation (#335)**
    *   **Change:** Added explicit API key validation for the Zhipu (GLM) provider during onboarding.
    *   **Impact:** Improves setup success rate for users using Chinese LLM providers.
    *   *Link: [PR #335](https://github.com/qhkm/zeptoclaw/pull/335)*

### 4. Community Hot Topics
*   **Discord Image Handling (PR #346)**
    *   **Topic:** Currently open PR addressing a bug where Discord channels ignore image-only messages.
    *   **Analysis:** Highlights the complexity of handling multi-modal inputs across different non-CLI platforms. Community reliance on Discord integration is significant enough to warrant immediate patching.
    *   *Link: [PR #346](https://github.com/qhkm/zeptoclaw/pull/346)*

*   **Telegram Usability (Issue #331)**
    *   **Topic:** Request to improve Telegram message formatting and add typing indicators.
    *   **Analysis:** Users expect rich, responsive media in messaging apps. Plain text and lack of status indicators degrade the "personal assistant" feel. This is a priority for user retention on mobile platforms.
    *   *Link: [Issue #331](https://github.com/qhkm/zeptoclaw/issues/331)*

### 5. Bugs & Stability
*   **[P2-High] Coder Template Logic Flaw (Issue #345)**
    *   **Bug:** The `coder` template agent writes tests that validate *buggy* behavior rather than expected behavior, leading to false positive verification.
    *   **Severity:** High. This undermines the reliability of the autonomous coding feature.
    *   **Status:** Open. No fix PR linked yet.
    *   *Link: [Issue #345](https://github.com/qhkm/zeptoclaw/issues/345)*

*   **Podman Build Failure (Issue #333)**
    *   **Bug:** `Dockerfile.dev` fails with Podman 5.7 due to `--mount=type=cache` syntax errors in the legacy builder.
    *   **Severity:** Normal (blocks developer workflow). PR #287 aims to fix this by enforcing buildkit.
    *   **Status:** Open.
    *   *Link: [Issue #333](https://github.com/qhkm/zeptoclaw/issues/333)*

### 6. Feature Requests & Roadmap Signals
*   **Streaming by Default (PR #342)**
    *   **Signal:** Users demand immediate visual feedback. The shift from `streaming: false` to `true` by default indicates the project is prioritizing UX "snappiness."
    *   *Link: [PR #342](https://github.com/qhkm/zeptoclaw/pull/342)*

*   **Shelldex Integration (Issue #334)**
    *   **Signal:** A request to add ZeptoClaw to "Shelldex" (a directory of "claws"). This suggests a desire for better discoverability within the niche ecosystem of terminal-based agents.
    *   *Link: [Issue #334](https://github.com/qhkm/zeptoclaw/issues/334)*

*   **Standardized Benchmarks (Issue #340)**
    *   **Signal:** Users want to compare ZeptoClaw's coding performance against other agents objectively. This hints at a future focus on performance optimization and competitive benchmarking.
    *   *Link: [Issue #340](https://github.com/qhkm/zeptoclaw/issues/340)*

### 7. User Feedback Summary
Users are reporting distinct friction points in **platform integrations** (Telegram formatting, Discord images) and **developer experience** (Podman compatibility). Conversely, there is strong positive signaling regarding the CLI improvements, specifically the move to streaming responses and visual polish (shimmer), as evidenced by the rapid closure of related feature requests. The "Coder" agent logic flaw (Issue #345) represents a critical trust gap that needs immediate resolution.

### 8. Backlog Watch
*   **Dev Tooling Standardization (PR #287)**
    *   **Status:** Open since 2026-03-09.
    *   **Need:** Pre-PR checks (`cargo test`, `cargo clippy`) are currently inconsistent across contributors. This PR seeks to standardize the dev environment to reduce CI friction and merge times.
    *   *Link: [PR #287](https://github.com/qhkm/zeptoclaw/pull/287)*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-03-13

## 1. Today's Overview
EasyClaw has released patch version **v1.6.7**, focusing on platform-specific stability and user experience, particularly for macOS users encountering Gatekeeper issues. Development velocity appears moderate, with no new code merges (PRs) recorded in the last 24 hours. Community issue resolution is active, evidenced by the closure of an OAuth-related bug report shortly after it was filed. The project is currently in a maintenance phase, prioritizing bug fixes and installation reliability over new feature development.

## 2. Releases
**New Release: v1.6.7**
The project released a new version today, primarily addressing installation friction on macOS.
*   **Key Change / Documentation Update:**
    *   Added comprehensive troubleshooting instructions for macOS users encountering the *"'EasyClaw' is damaged and can't be opened"* error.
    *   Clarified that this error is caused by macOS Gatekeeper blocking unsigned applications rather than actual file corruption.
    *   Provided Terminal-based commands to bypass the security restriction.
*   **Severity:** Low (Usability fix). No breaking changes or migration notes required.

## 3. Project Progress
**Merged/Closed Items:**
*   **Issue #16 (Closed):** A bug report regarding OpenAI OAuth errors has been closed. The issue affected both the "Portable" and "Installed" versions of the application, resulting in authentication failures for users.

## 4. Community Hot Topics
*   **[Issue #16] OpenAI OAuth Error (Closed)**
    *   **Activity:** Created 2 days ago, closed yesterday. (Comments: 1)
    *   **Context:** Users reported consistent OAuth failures across different distribution formats of the app.
    *   **Underlying Need:** Users require reliable authentication stability to use the agent features. The swift closure suggests the maintainer has verified the fix or identified it as a transient external API issue.

## 5. Bugs & Stability
*   **Severity: High (Reported & Closed)**
    *   **Issue:** OpenAI OAuth failure preventing login/usage.
    *   **Impact:** Critical functionality blocked (users could not log in).
    *   **Status:** Resolved/Closed in `v1.6.7` (or via backend verification).
*   **Severity: Medium (Workaround Provided)**
    *   **Issue:** macOS "Damaged" error blocking app launch.
    *   **Impact:** Prevents application launch on macOS without terminal commands.
    *   **Status:** Mitigated via documentation in `v1.6.7`.

## 6. Feature Requests & Roadmap Signals
*   **Code Signing:** Based on the recurring macOS Gatekeeper issue highlighted in the release notes, there is an implicit signal that **code signing for macOS** is a high priority to improve out-of-the-box usability.
*   **OAuth Stability:** The closure of Issue #16 suggests that stability improvements for third-party integrations (OpenAI) are ongoing.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **macOS Usability:** Users are confused by the "damaged file" warning, requiring manual intervention to open the app.
    *   **Authentication Reliability:** Users faced frustration due to OAuth errors when attempting to use the portable or installed versions.
*   **Sentiment:** Mixed. While functional issues are being addressed, the reliance on workarounds (Terminal commands) and recent login bugs impacts user satisfaction.

## 8. Backlog Watch
There are currently no critical aging issues or pull requests requiring immediate attention in the provided data snapshot. The recent closure of Issue #16 indicates the maintainer is keeping the backlog relatively clean.

---
**Links:**
*   **Release v1.6.7:** [github.com/gaoyangz77/easyclaw/releases](https://github.com/gaoyangz77/easyclaw/releases)
*   **Issue #16 (OAuth):** [github.com/gaoyangz77/easyclaw/issues/16](https://github.com/gaoyangz77/easyclaw/issues/16)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*