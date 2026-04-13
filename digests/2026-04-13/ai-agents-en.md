# OpenClaw Ecosystem Digest 2026-04-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-13 00:14 UTC

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

# OpenClaw Project Digest: 2026-04-13

## 1. Today's Overview
OpenClaw is experiencing an extremely high-velocity development cycle, with **500 issues** and **500 pull requests** updated in the last 24 hours alone. This massive influx signals either a major "hackathon" style sprint or the project gearing up for a significant milestone release (likely v2026.5 given the recent beta releases). While the volume of activity is impressive, it brings instability; there are numerous reports of regressions related to authentication, memory-core dreaming failures, and context window handling. The project remains healthy but is currently in a volatile state where users upgrading to the latest versions (4.9+) are facing friction.

## 2. Releases
Two releases were published recently, focusing on plugin security and memory visualization features.

*   **v2026.4.12-beta.1** ([Release Info](https://github.com/openclaw/openclaw/releases/tag/v2026.4.12-beta.1))
    *   **Security & Architecture:** Significant hardening of the plugin loading system. Changes narrow CLI, provider, and channel activation to strictly manifest-declared needs.
    *   **Impact:** This centralizes manifest-owner policy, ensuring startup and runtime activation avoid loading unrelated plugin code, preserving explicit trust boundaries.
*   **v2026.4.11** ([Release Info](https://github.com/openclaw/openclaw/releases/tag/v2026.4.11))
    *   **Memory/UI Updates:** Enhanced "Dreaming" (memory-wiki) with ChatGPT import ingestion.
    *   **UI:** Added `Imported Insights` and `Memory Palace` diary subtabs to the UI.
    *   **Fixes:** Improved rendering of assistant media and REPL in the Control UI webchat.

## 3. Project Progress
With 194 PRs merged/closed in the last day, the following features have advanced:
*   **GPT-5.4 Agentic Parity:** A major runtime rollup ([#65219](https://github.com/openclaw/openclaw/pull/65219)) was merged, auto-activating the `strict-agentic` execution contract for GPT-5 models to improve instruction following and reduce over-confirming.
*   **Security Fixes:** A critical security fix regarding command injection on Windows via OAuth URLs was merged ([#65599](https://github.com/openclaw/openclaw/pull/65599)).
*   **Auth Overrides:** New API `registerProviderRuntimeAuthOverride` allows plugins to provide runtime auth for built-in providers ([#65364](https://github.com/openclaw/openclaw/pull/65364)).

## 4. Community Hot Topics
*   **Desktop Apps for Linux & Windows** ([#75](https://github.com/openclaw/openclaw/issues/75))
    *   **Status:** Open (81 comments)
    *   **Sentiment:** High demand. Users are eager for feature parity with the existing macOS/iOS/Android apps.
*   **GPT-5.4 / Codex Agentic Runtime Parity** ([#64227](https://github.com/openclaw/openclaw/issues/64227))
    *   **Status:** Open (24 comments)
    *   **Discussion:** Users are tracking the implementation of multi-step task execution without stopping to ask questions. PR #65219 (referenced above) addresses this.
*   **Agent Teams & Parallel Coordination** ([#10010](https://github.com/openclaw/openclaw/issues/10010))
    *   **Status:** Open (13 comments)
    *   **Request:** Users want "Agent Teams" similar to Claude Code, enabling parallel agent coordination with inter-agent communication using OpenClaw's existing `sessions_spawn` blocks.

## 5. Bugs & Stability
*   **CRITICAL: Memory-Core Dreaming Failures** ([#64019](https://github.com/openclaw/openclaw/issues/64019), [#63214](https://github.com/openclaw/openclaw/issues/63214))
    *   **Issue:** Narrative generation fails with `missing idempotencyKey` errors in v2026.4.8+.
    *   **Impact:** Core memory features are broken for upgraded users.
*   **CRITICAL: Context Limit / Memory Loss** ([#64250](https://github.com/openclaw/openclaw/issues/64250), [#60213](https://github.com/openclaw/openclaw/issues/60213))
    *   **Issue:** Agents silently lose conversation history or reset incorrectly when hitting context limits in v2026.4.9.
    *   **User Report:** "Context limit exceeded... reset our conversation" appears constantly.
*   **REGRESSION: Azure/OpenAI Codex Errors** ([#65245](https://github.com/openclaw/openclaw/issues/65245), [#62045](https://github.com/openclaw/openclaw/issues/62045))
    *   **Issue:** "Unknown error" responses from Azure GPT-5.3-Codex and validation failures for GPT-5.1-Codex-mini starting in v4.5.
*   **REGRESSION: Ollama Cloud 401s** ([#59205](https://github.com/openclaw/openclaw/issues/59205))
    *   **Issue:** Update to v2026.3.31 breaks Ollama Cloud authentication with 401 errors despite valid keys.
*   **Crash: Telegram Transcription** ([#62496](https://github.com/openclaw/openclaw/issues/62496))
    *   **Issue:** Voice note transcription silently fails in v4.5 due to `normalizeAttachments` filtering out audio.

## 6. Feature Requests & Roadmap Signals
*   **Native MCP Client Support** ([#29053](https://github.com/openclaw/openclaw/issues/29053)): Users are demanding native Model Context Protocol (MCP) support to connect to standard MCP servers without workarounds.
*   **Real-time Voice Conversation** ([#7200](https://github.com/openclaw/openclaw/issues/7200)): A request for bidirectional streaming audio (Twilio/WebRTC) to enable phone-like interactions.
*   **Simplified Exec Approval** ([#59510](https://github.com/openclaw/openclaw/issues/59510)): Users find the current `/approve allow-always` workflow tedious for common commands.

## 7. User Feedback Summary
*   **Positives:** Users praise the "Clawdbot" experience when it works and the rapid iteration of features.
*   **Pain Points:**
    *   **Upgrade Friction:** Many users report regressions immediately after upgrading (e.g., v4.5 breaking Codex, v4.8 breaking memory).
    *   **Platform Gaps:** The lack of first-class Linux/Windows apps is frequently cited as a barrier to enterprise adoption.
    *   **Configuration Complexity:** Users struggle with `openclaw.json` validation, particularly regarding `secrets` redaction and proxy settings.

## 8. Backlog Watch
*   **Signal Group Chat Mentions** ([#29214](https://github.com/openclaw/openclaw/issues/29214)): OpenClaw replies to *every* message in Signal groups because `requireMention` support is missing/broken. A workaround exists but a fix is pending.
*   **macOS App PATH Issues** ([#17890](https://github.com/openclaw/openclaw/issues/17890)): The macOS app doesn't respect Homebrew PATHs, leading to "Missing binary" errors for skills.
*   **Google Vertex Auth Regressions** ([#48479](https://github.com/openclaw/openclaw/issues/48479)): Gemini 3.x preview models fail with auth errors in v2026.3.13, forcing users to revert to older versions.

---

## Cross-Ecosystem Comparison

# Ecosystem Analysis Report: AI Agent & Personal Assistant Landscape
**Date:** 2026-04-13
**Analyst:** Senior AI Ecosystem Observer

## 1. Ecosystem Overview
The open-source AI agent ecosystem is currently undergoing a **high-velocity maturation phase**, characterized by a transition from experimental chatbots to robust, agentic frameworks. Development activity is intense across the board, with a clear bifurcation emerging: "platform" projects (like **OpenClaw** and **CoPaw/QwenPaw**) are focusing on scalability and enterprise features, while "specialist" projects (like **NanoBot**, **Moltis**, and **NullClaw**) are prioritizing stability, architectural refactoring, and specific protocol integrations (MCP, Nostr). The community is demanding **production-grade reliability**, specifically targeting regressions related to context handling and state management, which have plagued recent rapid iterations. A significant trend towards **multi-agent architectures** (Agent Teams, Hierarchical Agents) and **local-first privacy** indicates the market is moving towards complex, autonomous workflows that reduce dependence on closed-source APIs.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | **Active** (v2026.4.12-beta) | ⚠️ Volatile |
| **NanoBot** | 21 | 117 | Stable (v0.15) | 🟢 Stabilizing |
| **Zeroclaw** | ~25 | ~75 | None (v0.7 → v1.0 RC) | 🟡 Refactoring |
| **PicoClaw** | 13 | 17 | **Nightly** (v0.2.6) | 🟢 High Velocity |
| **NanoClaw** | 2 | 8 | None | 🟢 Focused |
| **NullClaw** | 2 | 4 | None | 🟢 Maintenance |
| **IronClaw** | 15 | 50 | Staging (v0.25) | 🟡 QA Phase |
| **LobsterAI** | 4 | 7 | Pending (2026.04.13) | 🟢 UX Polish |
| **TinyClaw** | 1 | 0 | None | 🟢 Low Activity |
| **Moltis** | 5 | 16 | None (Pending) | 🟢 Rapid Merge |
| **CoPaw** | 15 | 24 | **Major** (v1.1.0 QwenPaw) | 🔴 Critical Bugs |
| **ZeptoClaw** | 0 | 0 | None | ⚪ Dormant |
| **EasyClaw** | 0 | 0 | None | ⚪ Dormant |

*\*Health Score based on release velocity, bug severity, and community sentiment.*

## 3. OpenClaw's Position
**OpenClaw** remains the **undisputed market leader in raw scale and community momentum**, accounting for nearly half of the total ecosystem activity (1000 events vs. ~200 in the next closest project).
*   **Advantages:** Its plugin ecosystem and memory-core ("Dreaming") features are unmatched. The project is defining the standard for "Agentic Parity" with GPT-5.
*   **Technical Approach:** OpenClaw is uniquely pursuing a strict **"Agentic Contract"** (strict-agentic mode) and deep **OS-level integration** (Memory Palaces, native desktop apps).
*   **Pain Points vs. Peers:** Unlike **NanoBot** or **Moltis**, which are currently in "cleanup/stability" modes, OpenClaw's massive velocity (v2026.4.x) is introducing significant **regression debt**. Its user base is currently the most vocal regarding **upgrade friction** and **context window bugs**.

## 4. Shared Technical Focus Areas
Community feedback across the last 24 hours reveals three universal requirements:

1.  **Multi-Agent & Hierarchical Orchestration**
    *   *Projects:* **OpenClaw** (Agent Teams), **LobsterAI** (Main Agent orchestration), **CoPaw** (Local-remote collaboration).
    *   *Need:* Users are moving beyond single agents and demand systems where "Agent A manages Agent B," including parallel execution and inter-agent communication.

2.  **Model Context Protocol (MCP) & Tooling Standardization**
    *   *Projects:* **OpenClaw** (Native MCP requests), **Moltis** (MCP crate extraction), **PicoClaw** (MCP reload fixes).
    *   *Need:* A standardized way to connect agents to external data/tools without custom provider hacks.

3.  **Agentic Stability & Loop Prevention**
    *   *Projects:* **NanoBot** (Infinite loop detection), **Zeroclaw** (Recursive memory snowball fix), **CoPaw** (Pipeline double-execution fix).
    *   *Need:* "Hallucinated loops" and "tool-call insanity" are the #1 technical hurdle. Simple retry logic is failing; projects need sophisticated "stagnation detection" and interrupt capabilities (`/stop`).

## 5. Differentiation Analysis

| Project | Differentiation Strategy | Target User |
| :--- | :--- | :--- |
| **OpenClaw** | **"The Operating System."** Focuses on deep memory, dreaming, and full-stack app replacement. | Power Users & Prosumers |
| **NanoBot** | **"The Reliable Engineer."** Prioritizing Pythonic simplicity, bug fixing, and strict channel stability (Telegram/Matrix). | Developers & DevOps |
| **Zeroclaw** | **"The Architect."** Microkernel transition, heavy governance/RFCs, focusing on memory hygiene. | Systems Architects |
| **PicoClaw** | **"The Edge/IoT Enabler."** Focus on embedded/OpenWrt/Android support and local LLMs (LM Studio). | Hardware Tinkerers & Privacy Advocates |
| **Moltis** | **"The Security Expert."** 6-layer tool policies, Nostr integration, hardening auth. | Security-Conscious Deployments |
| **CoPaw (QwenPaw)** | **"The Consumer Platform."** Rebranding to Qwen ecosystem, heavy UI focus, "one-click" setup. | General Consumers & Desktop Users |

## 6. Community Momentum & Maturity
*   **Tier 1 (Hyper-Growth):** **OpenClaw** and **CoPaw**. OpenClaw is sprinting toward v2026.5; CoPaw just executed a major rebrand (QwenPaw).
*   **Tier 2 (Stabilizing & Maturing):** **NanoBot** and **Moltis**. These projects are aggressively paying down technical debt (fixing loops, refactoring monolithic code). They are becoming the "reliable" choices.
*   **Tier 3 (Feature Expansion):** **IronClaw**, **PicoClaw**, **LobsterAI**. IronClaw is building a "Browser Agent" epic; PicoClaw is conquering embedded hardware; LobsterAI is polishing UI/UX.
*   **Tier 4 (Maintenance/Dormant):** **TinyClaw**, **NullClaw**, **ZeptoClaw**, **EasyClaw**.

## 7. Trend Signals for Developers
1.  **"Agent Insanity" is the new "Token Limit":** The biggest technical challenge of 2026 is not context length, but **agentic failure modes**. Developers should prioritize building robust "circuit breakers" and "sanity checks" into their agent loops to prevent infinite tool calls.
2.  **Local-First is Mandatory:** Requests for **Ollama**, **LM Studio**, and **Offline** support are pervasive across **OpenClaw**, **PicoClaw**, and **LobsterAI**. Cloud-only agents are losing favor.
3.  **UX Transparency is Critical:** Users in **TinyClaw**, **NullClaw**, and **LobsterAI** are demanding visibility into the "black box." Future agents must expose **reasoning traces** and **tool parameters** in real-time to build trust.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-13

## 1. Today's Overview
NanoBot is experiencing a period of **high-intensity development** and maintenance, with a notably large influx of Pull Requests (117 updated in the last 24h) compared to Issues (21). The repository is currently in a "heavy cleanup" phase, with contributors aggressively addressing technical debt and stability issues following the v0.15 release. Key themes for today include fixing stability bugs in the core agent loop (infinite loops), resolving connectivity issues in channels (Telegram/Matrix), and enhancing provider compatibility (MiniMax/Anthropic). While feature development continues, the immediate focus is clearly on **robustness and error handling**.

## 2. Releases
*   **No new releases** published in the last 24 hours.
*   *Note:* Users are currently on `v0.15`, with the `nightly` branch recently refreshed and synced to `main` (see [Issue #3071](https://github.com/HKUDS/nanobot/issues/3071)).

## 3. Project Progress
*   **Stability Improvements:** Significant work has been done to shore up the agent loop.
    *   PR [#3077](https://github.com/HKUDS/nanobot/pull/3077) (OPEN) introduces logic to **detect and break infinite tool call loops**, specifically addressing the `read_file` on `history.jsonl` issue (#3073).
    *   PR [#3076](https://github.com/HKUDS/nanobot/pull/3076) (OPEN) ensures user messages are persisted to the session history *before* the turn loop runs, preventing data loss if the agent crashes mid-execution.
    *   PR [#2526](https://github.com/HKUDS/nanobot/pull/2526) (OPEN) improves the `/stop` command behavior to preserve context rather than discarding the current turn.
*   **Channel Fixes:**
    *   PR [#3053](https://github.com/HKUDS/nanobot/pull/3053) (CLOSED) successfully fixed a critical class of bugs affecting 5 different channels (Telegram, Matrix, etc.) where overly broad exception catching caused "retry amplification" and silent message loss.
    *   PR [#2877](https://github.com/HKUDS/nanobot/pull/2877) (CLOSED) fixed a configuration mapping bug in the Matrix provider (`e2eeEnabled`).
*   **Provider Enhancements:**
    *   PR [#3078](https://github.com/HKUDS/nanobot/pull/3078) (OPEN) adds a `minimax_anthropic` provider to support native thinking/reasoning capabilities on newer MiniMax models.

## 4. Community Hot Topics
*   **Agent Loop "Insanity" (Issue #3073)**
    *   **Discussion:** [Issue #3073](https://github.com/HKUDS/nanobot/issues/3073)
    *   **Analysis:** Users reported agents getting stuck reading `history.jsonl` repeatedly (15+ iterations) without generating a response. This highlights a critical need for better "stagnation detection" in the agent's reasoning loop.
    *   **Status:** A fix is proposed in [PR #3077](https://github.com/HKUDS/nanobot/pull/3077).

*   **Telegram & Channel Reliability (Issue #3050, #3054)**
    *   **Discussion:** [Issue #3050](https://github.com/HKUDS/nanobot/issues/3050) | [PR #3053](https://github.com/HKUDS/nanobot/pull/3053)
    *   **Analysis:** Investigation into Telegram connection pool exhaustion revealed a systemic architectural flaw across multiple channels where generic exception handling led to infinite retries. The community has actively audited and fixed these patterns, signaling a move towards higher production readiness.

*   **Cron Jobs & Notifications (Issue #3064, #3066, #3028)**
    *   **Discussion:** [Issue #3064](https://github.com/HKUDS/nanobot/issues/3064), [Issue #3066](https://github.com/HKUDS/nanobot/issues/3066)
    *   **Analysis:** There is strong user feedback regarding "noisy" cron tasks. Users want scheduled tasks to be "silent" (no success messages) and want to prevent intermediate "thinking" steps from being pushed to chat channels.

## 5. Bugs & Stability
*   **[CRITICAL] Infinite Tool Loops:** Agents can enter infinite loops calling tools (e.g., `read_file`) with identical arguments.
    *   *Fix:* [PR #3077](https://github.com/HKUDS/nanobot/pull/3077).
*   **[HIGH] Data Loss on `/stop`:** Using the stop command causes the current turn's user message and tool calls to be lost from the session history.
    *   *Fix:* [PR #2526](https://github.com/HKUDS/nanobot/pull/2526).
*   **[MEDIUM] Telegram Connection Pool Exhaustion:** Persistent message delivery failures due to connection misuse.
    *   *Status:* Fixed in [PR #3053](https://github.com/HKUDS/nanobot/pull/3053).
*   **[MEDIUM] Runtime Context Leakage:** Metadata intended for internal use is being sent to users via channels like WeChat (Issue #2947).
*   **[LOW] OpenAI Provider Params:** `max_tokens` is sent instead of `max_completion_tokens` for the official OpenAI provider (Issue #2757).

## 6. Feature Requests & Roadmap Signals
*   **Model Routing (Issue #3070):** Users are requesting a built-in model router (similar to OpenRouter) to automatically route simple tasks to cheaper models and complex tasks to high-performance models. This signals a desire for cost optimization mechanisms.
*   **Automatic Skill Discovery (Issue #2927):** A request for the agent to proactively recognize patterns and generate skills, rather than relying on manual skill creation.
*   **Built-in Web UI (Issue #3059):** A proposal to add a single-page Web UI to `nanobot serve` for chat/history/config, reducing reliance on CLI or API clients.
*   **Silent Cron Mode (Issue #3066):** High demand for suppressing execution result notifications for scheduled tasks.

## 7. User Feedback Summary
*   **Positive:** Users appreciate the clean Python codebase and the power of the skill system (Issue #2989).
*   **Pain Points:**
    *   **Configuration Complexity:** Users are struggling with provider settings (Ollama 502 errors, Custom OpenAI endpoints) and Windows-specific file access issues.
    *   **Installation:** There are reports of dependency issues with `cryptography` when using `uv` (Issue #3056).
    *   **Cron "Noise":** Users are frustrated with verbose output from automated tasks.

## 8. Backlog Watch
*   **Issue #1783 (Open since Mar 09):** `OpenAICodexProvider` has a hardcoded 60s timeout causing silent failures. No fix merged yet despite high impact.
*   **Issue #2757 (Open since Apr 02):** OpenAI provider still sends deprecated parameters.
*   **Multi-Agent System (PR #2509):** A massive feature addition allowing multi-agent routing is still in OPEN state, indicating ongoing development before merge.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-04-13

## 1. Today's Overview
Zeroclaw is currently experiencing a phase of **high-velocity architectural refactoring** alongside routine maintenance. The project is transitioning from a reactive codebase to a "Microkernel" architecture (v0.7.0 → v1.0.0), as evidenced by a surge in Requests for Comments (RFCs) and associated workspace restructuring. While development activity is intense (100 updated items in 24h), no new releases were published today. The community is actively debating governance and documentation standards, signaling a maturation of the project as it scales toward production readiness.

## 2. Releases
*No new releases published today.*

## 3. Project Progress
*   **Microkernel Transition Phase 1:** Significant progress was made on splitting the monolithic codebase. PR #5659 (adding `enabled` guards for Email/VoiceCall channels) and Issue #5586 (defining WIT interface files for plugins) were advanced, supporting the move toward a plugin-based architecture.
*   **Installer Overhaul:** PR #5666 was opened to rewrite `install.sh` from scratch. This addresses the "workspace split" by replacing hardcoded feature lists with logic aware of the new 16-crate structure, a critical step for future stability.
*   **Memory Hygiene Fixes:** Several PRs (#5631, #5632, #5664) were opened or merged to fix recursive memory bloat issues, specifically targeting how auto-saved user messages and cron job memory recalls were causing exponential storage growth.

## 4. Community Hot Topics
*   **Intentional Architecture & Governance (RFCs):**
    *   **[RFC: Microkernel Transition](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)** (5 comments): Proposes the core architectural shift to v1.0.0.
    *   **[RFC: Project Governance](https://github.com/zeroclaw-labs/zeroclaw/issues/5577)** (3 comments): Addresses team coordination to prevent project failure.
    *   **[RFC: Documentation Standards](https://github.com/zeroclaw-labs/zeroclaw/issues/5576)** (3 comments): Establishes i18n strategy and structure.
    *   *Analysis:* The community is highly focused on defining the "rules of the road" before the v1.0.0 launch, prioritizing structural integrity over new features.

*   **Recursive Memory "Snowball" Bug:**
    *   **[#4916: Recursive Snowball](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)** (12 comments, closed): A critical bug where `auto_save` stored memory recall blobs, creating infinite loops.
    *   *Analysis:* Despite being closed, this issue highlights the fragility of the current memory system, prompting the specific fixes found in today's PRs.

## 5. Bugs & Stability
*   **S0 (Data Loss/Security):**
    *   **[#5672: Feishu ignores `mention_only`](https://github.com/zeroclaw-labs/zeroclaw/issues/5672)**: The bot responds to all messages, potentially spamming channels or leaking data. (Fix PR pending).
    *   **[#5605: Multi-Instance Config Issues](https://github.com/zeroclaw-labs/zeroclaw/issues/5605)**: Hardcoded paths prevent multi-instance deployments, causing conflicts.
*   **S1 (Workflow Blocked):**
    *   **[#5578: Local llama.cpp Connection](https://github.com/zeroclaw-labs/zeroclaw/issues/5578)**: The agent hangs for minutes before timing out when connecting to local servers.
    *   **[#5553: Telegram Shell Tool](https://github.com/zeroclaw-labs/zeroclaw/issues/5553)**: Telegram returns raw JSON or empty results when executing shell commands.
*   **S2 (Degraded):**
    *   **[#5670: Groq Provider 400 Error](https://github.com/zeroclaw-labs/zeroclaw/issues/5670)**: Compatibility issues with specific Groq models.
    *   **[#5125: CPU Spikes on Typing](https://github.com/zeroclaw-labs/zeroclaw/issues/5125)**: Unexplained CPU load when typing in the web chat.

## 6. Feature Requests & Roadmap Signals
*   **Telephony & Voice:** Users are eager for voice parity. Requests for **Telegram Voice Transcription** [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) and **Nextcloud Talk Streaming** (via PR [#5667](https://github.com/zeroclaw-labs/zeroclaw/pull/5667)) suggest strong demand for multi-modal interaction.
*   **Performance & Usability:**
    *   **Vector Search Optimization:** Proposal [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) to replace O(n) SQLite scans with Approximate Nearest Neighbor (ANN) indexing for faster memory recall.
    *   **Web UI Drag-and-Drop:** Request [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) for modern file handling in the chat interface.
    *   **Mattermost Private Messaging:** Request [#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604) indicates deployment in enterprise/team environments.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Memory Bloat:** Users are experiencing database exhaustion due to the recursive auto-save bug.
    *   **Configuration Complexity:** The move to a workspace (16 crates) has broken the `install.sh` script (#5666) and compilation is "extremely slow" (#5575), frustrating developers.
    *   **Broken Channels:** Feishu (#5558) and Telegram (#5553) channels have specific regression bugs regarding settings and tool output formatting.
*   **Positive Signals:**
    *   High engagement in RFCs suggests a committed contributor base willing to document and structure the project formally.

## 8. Backlog Watch
*   **PR #5168 (HMAC Tool Receipts):** Opened on April 2, this security-critical PR to detect hallucinated tool calls has not yet been merged.
*   **PR #5160 (Shell Redirects):** A fix to allow safe shell redirects (heredocs) has been open since April 1 without merging.
*   **PR #5167 (Session Integrity):** Fixes for session corruption and history pruning have been open since early April.
*   **RFC Implementation:** While the RFCs (Governance, Architecture) are active, the actual implementation work for the v1.0.0 Microkernel transition is still in the early phases (Phase 1/Deliverables).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Project PicoClaw Digest: 2026-04-13

## 1. Today's Overview
PicoClaw is currently experiencing a **very high development velocity**, with significant activity driven by the recent `v0.2.6` nightly builds. The project demonstrates active expansion across multiple dimensions: core agent capabilities are being refactored (PRs #2492, #2489), multi-platform support is increasing (Windows, Android, OpenWrt), and the ecosystem is growing (new Signal channel, skill registries). However, the rapid pace of commits has introduced several **regressions**, particularly regarding configuration compatibility and provider stability (OpenWrt/TCP issues, Nvidia/SiliconFlow API failures). The community is highly engaged, with 13 issues and 17 PRs updated in the last 24 hours.

## 2. Releases
**New Release: `v0.2.6-nightly.20260412`**
A new nightly build was pushed, focusing on stability improvements and feature additions.
*   **Key Updates**: This build follows the recent protocol refactor addressing "Chain of Thought" separation (PR #2475).
*   **Advisory**: As a nightly build, it is marked as potentially unstable.
*   **Migration**: Users on `v0.2.5`+ should ensure their configuration files match the new schema requirements (Config v3), specifically regarding channel instantiation (PR #2481).

## 3. Project Progress
*   **Agent & Tooling Refactoring**:
    *   **Session Management**: PR #2491 adds granular control over agent state via `/status`, `/compact`, and `/new` commands.
    *   **MCP & Discovery**: PR #2489 fixes a critical reload regression where MCP tools and BM25 discovery tools would disappear after a configuration reload.
    *   **Code Isolation**: PR #2492 continues work on isolating `protoagent` code for better maintainability.
*   **Multi-Platform Support**:
    *   **Android**: PRs #1960 and #2486 (Closed) successfully merged cross-compilation support for Android ARM64, improving integration with mobile environments.
    *   **Windows**: PR #2487 (Open) addresses build failures in the Makefile by removing Unix-specific assumptions.
    *   **CLI UX**: PR #2229 (Closed) introduces a structured, boxed UI for the terminal interface.
*   **Protocol & Channels**:
    *   **Signal Support**: PR #630 (Closed) officially adds the Signal messaging channel via `signal-cli`.
    *   **Reasoning Separation**: PR #2475 (Closed) successfully separated "thought" messages from user-facing replies, fixing the merged output bug in the WebUI.

## 4. Community Hot Topics
*   **[#28 feat-request: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28)** (11 comments)
    *   **Analysis**: A long-standing request from users wanting to easily integrate local models running in LM Studio. This highlights a strong user desire for "local-first" AI agent configurations that bypass cloud APIs.
*   **[#1763 BUG: aarch64 .deb not install](https://github.com/sipeed/picoclaw/issues/1763)** (5 comments)
    *   **Analysis**: Critical feedback regarding the Debian package installation on ARM64. Users are facing dependency hell or metadata issues, indicating a need for improved packaging automation.
*   **[#2202 Structured terminal UI for CLI](https://github.com/sipeed/picoclaw/issues/2202)** (6 comments)
    *   **Analysis**: Successfully addressed via PR #2229. Users heavily requested modern, readable CLI output to manage complex agent interactions from the terminal.

## 5. Bugs & Stability
*   **CRITICAL: TCP Connections on OpenWrt (ARM64)** [#2488](https://github.com/sipeed/picoclaw/issues/2488)
    *   The `launcher` and `gateway` listen but fail to accept connections on OpenWrt routers (musl libc). This is a severe regression for edge/IoT deployments.
*   **HIGH: Provider API Failures**
    *   **Nvidia API**: [#2479](https://github.com/sipeed/picoclaw/issues/2479) reports 404 errors when using DeepSeek/GLM models via Nvidia.
    *   **SiliconFlow**: [#2280](https://github.com/sipeed/picoclaw/issues/2280) indicates the API prevents the service from starting.
*   **MEDIUM: WebUI Stability**
    *   Input fields and send buttons becoming unresponsive/disabled [#2354](https://github.com/sipeed/picoclaw/issues/2354).
    *   *Fix Available*: PR #2430 attempts to fix this by showing "disabled reasons," helping users debug why inputs are blocked.
*   **LOW: Authentication**
    *   Request for dual-header authentication support for custom models [#2169](https://github.com/sipeed/picoclaw/issues/2169).

## 6. Feature Requests & Roadmap Signals
*   **Multi-Instance Channels**: PR #2481 hints at a major roadmap shift where configurations will support multiple instances of the same channel type (e.g., two different Telegram bots or Discord accounts) simultaneously.
*   **GitHub Skill Registry**: PR #2442 proposes moving skill discovery to a GitHub-backed model, which would significantly ease the installation of third-party agent skills.
*   **LLM-as-Judge Evaluation**: PR #2484 adds an evaluation mode for memory retrieval, indicating a focus on quantifying and improving agent intelligence.
*   **OAuth Link Preservation**: PR #2485 improves Telegram reliability by fixing corrupted OAuth links.

## 7. User Feedback Summary
*   **Pain Points**: Users are struggling with the complexity of provider configuration (API keys, bases) and the fragility of the installation on diverse hardware (Debian, OpenWrt, Android). The "Service won't start" error is a common theme.
*   **Positive Reception**: The new CLI structure and the separation of "Agent Reasoning" from "Final Reply" (PR #2475) have been well-received, as they make the agent's thought process transparent without cluttering the chat interface.

## 8. Backlog Watch
*   **LM Studio Integration**: [#28](https://github.com/sipeed/picoclaw/issues/28) remains open since Feb 2026. Given the popularity of local LLMs, resolving this would likely delight a large segment of the user base.
*   **Tool Calling with Open Weights**: [#2482](https://github.com/sipeed/picoclaw/issues/2482) reports that open weights models (via mlx-lm) struggle with tool calls. This is a technical hurdle for local agent deployments that requires deeper protocol work.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-13

## 1. Today's Overview
NanoClaw demonstrates high development velocity with **8 PRs updated** in the last 24 hours, split evenly between new feature implementations and code quality improvements. While 2 new issues were opened, the community is actively engaging in discussions regarding architectural shifts, specifically towards multi-LLM support. The project appears to be in a heavy development phase for its "self-improving memory agent" (ENG-123) and container optimization, indicating a focus on backend robustness and long-term context management rather than simple feature additions.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Project Progress
**Merged/Closed PRs (5 items):**
The team successfully merged several critical improvements focused on cost reduction and container stability:

*   **Zero-Cost Context Switching:** PR #1752 implemented a lightweight cross-channel context system using direct SQLite queries instead of LLM calls. This removes token costs associated with context digestion before container spawns.
*   **Expanded Capabilities:** PR #1754 added `youtube-transcript-api` to the agent container, allowing the agent to ingest video transcripts without API keys. PR #1748 introduced a "Coordinator" pattern for non-blocking responses, enabling immediate replies via an in-process SDK while managing background workspace containers.
*   **Code Hygiene:** PR #1750 focused on removing redundant tests, and PR #1753 handled the classification of ambiguous follow-ups, improving the robustness of the "Codex" system.

**Open PRs (3 items):**
*   **Complex Feature Development:** PR #1743 is a major effort regarding the "SQLite-first self-improving memory agent," adding rich recall signal tracking and embedding memory layers.
*   **Platform Expansion:** PR #836 continues to be updated, aiming to add QQ (China's popular messaging platform) support.
*   **Container Cache Fix:** PR #1749 addresses a bug where changes to non-index TypeScript files in the agent-runner were ignored due to staleness in the cache checking mechanism.

## 4. Community Hot Topics
*   **Multi-LLM Provider Support ([Issue #1163](https://github.com/qwibitai/nanoclaw/issues/1163))**
    *   **Status:** Open (Active discussion)
    *   **Analysis:** This is the most debated topic, with users requesting support for "OpenCode" or other AI providers alongside the current Claude Code implementation. Users cite enterprise restrictions and diverse toolchains as reasons. The proposal suggests running providers in parallel.
    *   **Underlying Need:** Vendor lock-in concerns and the necessity for flexibility in corporate environments.

*   **Type Safety & Architecture ([Issue #1751](https://github.com/qwibitai/nanoclaw/issues/1751))**
    *   **Status:** Open
    *   **Analysis:** A developer raised a flag regarding the `processQueryIpc` function, describing it as a "flat bag" of 27+ optional fields that makes type safety impossible.
    *   **Underlying Need:** As the codebase grows, technical debt in IPC communication is becoming a blocker for maintaining type safety and preventing runtime errors.

## 5. Bugs & Stability
*   **Container Cache Staleness (High Impact)**
    *   **Report:** PR #1749 (Open)
    *   **Issue:** The agent-runner source cache mechanism only checked `index.ts` for modifications. Changes to other files (like `ipc-mcp-stdio.ts`) were ignored, forcing containers to run stale code until a manual cache clear.
    *   **Severity:** High. This creates a "it works on my machine" scenario where code updates fail to apply, breaking developer expectations.

*   **Cross-Channel Token Cost (Efficiency)**
    *   **Report:** PR #1752 (Closed)
    *   **Issue:** The previous implementation used an LLM to digest cross-channel context, incurring unnecessary token costs and latency.
    *   **Status:** Fixed by replacing the LLM call with direct SQLite queries.

## 6. Feature Requests & Roadmap Signals
*   **QQ Channel Integration:** PR #836 suggests a push to capture the Asian market (specifically China) by adding full support for QQ bots, including WebSocket handling and message queuing.
*   **Self-Improving Memory (ENG-123):** The active PR #1743 signals a strong roadmap focus on "AI Agency." The project is moving beyond simple retrieval to "dreaming maintenance," "consolidation," and "confidence feedback," indicating a roadmap toward autonomous agent improvement.
*   **Vendor Agnosticism:** The activity on Issue #1163 suggests that the community roadmap may demand a move away from exclusive Anthropic/Claude dependencies in the near future.

## 7. User Feedback Summary
*   **Positive Satisfaction:** Users continue to praise Claude Code ("Claude Code is the best, that is a fact"), validating the core tech stack, but pragmatic needs (company policy) are driving the request for alternatives.
*   **Pain Points:** Developers are feeling the pain of the project's rapid growth, specifically regarding Type Safety in IPC handlers (Issue #1751) and caching logic (PR #1749). Users want robust type enforcement to prevent bugs as the system scales.

## 8. Backlog Watch
*   **PR #836 (QQ Support):** Created in March, still open and recently updated. This is a complex feature requiring asynchronous message queue management and needs maintainer review to merge.
*   **Issue #1163 (Provider Support):** Opened since mid-March. Despite high community interest (3+ upvotes, 5 comments), there is no tagged PR addressing this yet. Maintainers need to decide if this fits the core vision or if it should be closed as out-of-scope.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest**
**Date:** 2026-04-13

### 1. Today's Overview
NullClaw shows steady development activity focused on security hardening and infrastructure capabilities, despite a pause in new releases. The project closed a functional bug related to file reading in tool calls but introduced a new test failure regarding `curl` configurations. Development efforts are split between backend scheduling enhancements (cron subagent) and critical security improvements for the web interface, specifically targeting Server-Side Request Forgery (SSRF) risks.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
*   **Bug Fix:** The issue regarding the `file_read` tool_call stopping during the weather SKILL execution ([Issue #413](https://github.com/nullclaw/nullclaw/issues/413)) has been **closed**, resolving a breakage in agent skill interactions.
*   **Infrastructure:** Significant progress on the Cron subsystem is visible in [PR #783](https://github.com/nullclaw/nullclaw/pull/783), which introduces a database-backed scheduler, run history, and JSON output capabilities.
*   **Security:** [PR #807](https://github.com/nullclaw/nullclaw/pull/807) is actively tightening security boundaries for providers and implementing token expiration for pairing to mitigate web-based exploits.

### 4. Community Hot Topics
*   **[PR #783: feat(cron): cron subagent, run history, JSON output, security hardening](https://github.com/nullclaw/nullclaw/pull/783)**
    *   *Underlying Need:* Users require robust, persistent background task management rather than simple transient execution. The addition of run history and JSON output indicates a push towards using NullClaw in automated, production-oriented pipelines.
*   **[Issue #808: Can I expose progress in SKILL to a2a stream?](https://github.com/nullclaw/nullclaw/issues/808)**
    *   *Underlying Need:* Improving User Experience (UX) for long-running tasks. Users want visibility into agent thinking and execution progress in real-time via the UI, rather than waiting for a final result.

### 5. Bugs & Stability
*   **[HIGH] [Issue #599: test: downloadToFile logged-errors failure](https://github.com/nullclaw/nullclaw/issues/599)**
    *   *Status:* Open
    *   *Severity:* High (Breaks builds/tests)
    *   *Details:* The `zig build test` command is failing due to `downloadToFile` throwing errors when `curl` has restricted `--proto` configurations. This causes spurious failures in the test suite, specifically affecting `agent.cli.test.writeRateLimitHint`.
*   **[FIXED] [Issue #413: file_read tool_call stopped](https://github.com/nullclaw/nullclaw/issues/413)**
    *   *Status:* Closed
    *   *Details:* Previously caused the weather SKILL to fail; now resolved.

### 6. Feature Requests & Roadmap Signals
*   **Real-time Progress Streaming:** [Issue #808](https://github.com/nullclaw/nullclaw/issues/808) explicitly requests the ability to pipe progress hints from SKILL execution to the Agent-to-Agent (a2a) stream. This is a strong signal that the next version of the API should prioritize streaming metadata.
*   **Enhanced Cron/Scheduling:** The features proposed in [PR #783](https://github.com/nullclaw/nullclaw/pull/783) (Timezone offsets, JSON output, job history) suggest a roadmap towards NullClaw being a viable replacement for system cron or other automation schedulers.

### 7. User Feedback Summary
*   **Pain Point:** Build environment fragility. The report in Issue #599 highlights friction for developers running tests with strict security configurations in `curl`.
*   **Dissatisfaction:** Lack of feedback loops. The request in Issue #808 suggests users currently feel "blind" during long agent executions and are dissatisfied with the lack of progress indicators in the UI.

### 8. Backlog Watch
*   **[Issue #599](https://github.com/nullclaw/nullclaw/issues/599):** Created on March 16 and updated yesterday without a merge. This test failure impacts the developer experience and requires a maintainer's attention to fix the `downloadToFile` mocking or stream logic to respect restricted `curl` protocols.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-04-13

## 1. Today's Overview
IronClaw is in a high-velocity development cycle focusing on infrastructure hardening and capability expansion. The project recorded significant activity with **50 Pull Requests** and **15 Issues** updated in the last 24 hours. The development team is prioritizing robustness, evidenced by a massive push to make the codebase network-independent for testing and the introduction of multi-identity browser automation. While no new release was published today, the "hosted-staging" environment is undergoing rigorous QA ("bug bash"), revealing several friction points in the current v0.25.0 upgrade path.

## 2. Releases
**None released.**
*(Note: Issues and PRs reference version `nearaidev/ironclaw-dind:0.25.0` on staging).*

## 3. Project Progress
**Infrastructure & Testing:**
*   **Network Independence:** A massive effort spanning multiple PRs (#1895, #2133, #2151, #2179, #2183) has successfully **closed**, ensuring that 49+ unit tests now pass in offline/sandboxed environments by removing DNS/SSRF dependencies during testing.
*   **Security Hardening:** PR #1591 has **closed**, implementing fixes for Time-of-check-to-time-use (TOCTOU) races in approval threads and improving error handling.
*   **MCP Integration:** PR #2379 (Open) normalizes server names and fixes UTF-8 truncation issues for the Model Context Protocol (MCP) client.

**Features & UX:**
*   **TUI Dashboard:** PR #2343 (Open) introduces a "Plan Mode Checklist," dashboard panels, and improved codeblock rendering for the Terminal UI.
*   **CLI Enhancements:** PR #2342 (Open) adds `ironclaw profile list` to manage deployment profiles.

## 4. Community Hot Topics
*   **The "Browser Agent" Epic:**
    *   **Issue #2355 (Epic):** Persistent multi-identity agent browsing via Chrome + CDP.
        *   *Motivation:* The current HTTP tool is insufficient for dynamic web UIs. The community is rallying behind a full browser automation stack.
        *   *Dependencies:* This epic has spawned several critical sub-issues for encrypted profile persistence (#2358), identity models (#2359), and live-view streaming (#2361).
    *   **Issue #2360:** Built-in browser tool using `chromiumoxide` to fill forms and click buttons.

*   **UX Overhaul:**
    *   **Issue #2369:** "Projects as living spaces (Apple-quality redesign)".
        *   *Summary:* Users feel the current "Project creation is chat-based" flow is clunky and want a visual, structured workspace similar to productivity suites.

## 5. Bugs & Stability
**High Severity / Infrastructure:**
*   **Upgrade Failure:** Issue #2346 - Instances fail to upgrade from v0.24.0 to v0.25.0 with "no error detail," breaking staging environments.
*   **Orphaned Gates:** Issue #2323 (Fixed in PR #2347) - Approval gates became undismissable if a thread was deleted while a gate was pending.
*   **Cross-Tenant Credential Leak:** PR #2381 (Open) aims to remove risky credential fallbacks that could leak data between tenants.

**Runtime & Integration:**
*   **Vision API Breakage:** Issue #2378 - Image vision fails with OpenAI-compatible providers (e.g., MiniMax) due to a missing `detail` field. (Fix PR #2380 Open).
*   **Twitter/X MCP:** Issue #2230 - Twitter connection is effectively broken for users, requiring manual browser cookie extraction to function.
*   **State Persistence:** Issue #2285 (Closed) - Chat messages disappeared on refresh in the staging UI, though processing continued in the background.

## 6. Feature Requests & Roadmap Signals
*   **Audio Pipeline:** Issue #90 - Request for Speech-to-Text (STT) and Text-to-Speech (TTS) to handle WhatsApp voice notes.
*   **Routing Flexibility:** Issue #2373 - Request for "pluggable local backend routing" to switch between fast local models and long-context models (e.g., TurboQuant) based on workload.
*   **Extended Thinking Visibility:** Issue #2352 - Users want to see the "Reasoning" blocks returned by models like Claude, which are currently silently dropped by the gateway.
*   **Smart Action Selection:** Issue #2350 - Request for Engine v2 to explicitly decide between "Answer only," "Direct Actions," or "CodeAct" modes rather than defaulting to code execution.

## 7. User Feedback Summary
*   **Pain Points:** The staging "Crab Shack" environment feedback highlights frustration with **upgrade fragility** (#2346) and **UI state management** (#2285). Users are also struggling with the **Twitter/X integration** (#2230), citing the manual cookie extraction as a major blocker.
*   **Use Cases:** There is a strong demand for **browser automation** (#2355) to handle tasks that simple HTTP tools cannot (e.g., logging into sites, managing cookies). Additionally, the request for **audio support** (#90) indicates a push towards mobile/voice channels.

## 8. Backlog Watch
*   **Audio Pipeline (Issue #90):** Created in February 2026, still open. As a "P1-P2" dependency for WhatsApp features, its lack of completion is blocking channel expansion.
*   **Approval Thread Safety (PR #1591):** Opened in March, recently closed. Critical security fix that required significant refactoring of `thread_ops.rs`.
*   **Notification Normalization (PR #1470):** Open since March, still in active review. Focuses on truncation and metadata for routine summaries.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-04-13

## 1. Today's Overview
LobsterAI is currently in a high-activity development phase, evidenced by 7 new Pull Requests (PRs) and 4 active Issues in the last 24 hours. Although there are no new releases published today, the project is clearly preparing for the upcoming `2026.04.13` release, as indicated by the active backporting of session policies in the latest PRs. The focus has shifted heavily towards User Experience (UX) refinement and feature completion, particularly within the "Cowork" (chat) interface. The influx of new reports regarding local model integration and agent orchestration suggests users are pushing the boundaries of the current architecture.

## 2. Releases
**No new releases published today.**
*Note: Activity suggests preparation for a pending release (versioned `2026.04.13` in PRs).*

## 3. Project Progress
*No pull requests were merged in the last 24 hours.* However, significant features are currently under review:

*   **UX Enhancements (Cowork/Renderer):**
    *   **PR #1637:** Adds a "Regenerate" button to AI response messages ([Link](https://github.com/netease-youdao/LobsterAI/pull/1637)).
    *   **PR #1636:** Introduces a floating "Scroll to Bottom" button for the chat window ([Link](https://github.com/netease-youdao/LobsterAI/pull/1636)).
    *   **PR #1641:** Unifies modal behavior to support closing via the `Esc` key globally ([Link](https://github.com/netease-youdao/LobsterAI/pull/1641)).
    *   **PR #1640:** Adds one-click copy buttons to tool execution results (Bash/Diff) ([Link](https://github.com/netease-youdao/LobsterAI/pull/1640)).
*   **Core Functionality:**
    *   **PR #1642:** Implements Windows shell context menu integration (allowing users to open folders in LobsterAI directly from Explorer) ([Link](https://github.com/netease-youdao/LobsterAI/pull/1642)).
    *   **PR #1638:** Backports session keep-alive policies (30-day continuity) for the OpenClaw sub-agent system ([Link](https://github.com/netease-youdao/LobsterAI/pull/1638)).

## 4. Community Hot Topics
*   **Issue #1644: Multi-Agent Orchestration (Feature Request)**
    *   **Link:** [netease-youdao/LobsterAI#1644](https://github.com/netease-youdao/LobsterAI/issues/1644)
    *   **Analysis:** Users are requesting a "Main Agent" capable of organizing other agents to complete complex tasks. Currently, agents are isolated and unaware of each other unless spawned by the main agent. This indicates a strong user desire for hierarchical agent workflows (MD-based) and better agent discovery mechanisms.

## 5. Bugs & Stability
*   **[High Severity] Issue #1635: Ollama Integration Failure**
    *   **Link:** [netease-youdao/LobsterAI#1635](https://github.com/netease-youdao/LobsterAI/issues/1635)
    *   **Details:** Users report inability to use local Ollama models (e.g., Qwen3, Gemma4) within LobsterAI, despite the models working in other clients like CherryStudio. This points to a regression or configuration mismatch in the LLM provider adapter.
*   **[Medium Severity] Issue #1569: Silent Execution Failure**
    *   **Link:** [netease-youdao/LobsterAI#1569](https://github.com/netease-youdao/LobsterAI/issues/1569)
    *   **Details:** Reports of the agent stopping execution without logs or error messages. A critical "black box" failure mode that complicates debugging.
*   **[Low Severity] Issue #1643: UI False Positive on Save**
    *   **Link:** [netease-youdao/LobsterAI#1643](https://github.com/netease-youdao/LobsterAI/issues/1643)
    *   **Details:** A "Content not saved" warning appears even when manual scheduled tasks are successfully saved.

## 6. Feature Requests & Roadmap Signals
*   **MD-Based Workflows:** The request in **#1644** suggests the roadmap may evolve towards more sophisticated "Agent of Agents" or orchestration patterns.
*   **Local Model Support:** Issues regarding **Ollama (#1635)** signal a need to prioritize stability for local LLM providers, likely driven by the privacy and cost preferences of power users.

## 7. User Feedback Summary
*   **Dissatisfaction:** Users are experiencing frustration with **silent failures** (#1569) and **compatibility issues** with popular local tools like Ollama (#1635).
*   **Workflow Pain Points:** The inability to chain agents together (#1644) is limiting the complexity of tasks users can automate.
*   **UI/UX Friction:** While the new PRs aim to fix this, users previously noted the lack of standard chat features like "Scroll to Bottom" (#1636) and "Copy" buttons for tool outputs (#1640).

## 8. Backlog Watch
*   **Issue #1639 (PR):** A fix for hardcoded English tooltips in the UI is currently open. Maintainers should prioritize this to ensure complete internationalization (i18n) coverage for non-English users.
*   **Issue #1642 (PR):** The Windows Context Menu feature is a high-value OS integration that needs review to ensure it meets security and stability standards before merge.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

## TinyClaw Project Digest - 2026-04-13

### 1. **Today's Overview**
TinyClaw is currently in a low-code velocity phase with minimal maintenance activity recorded in the last 24 hours. The repository shows no new releases, no merged or closed pull requests, and only a single new issue filed by the community. With the issue queue remaining relatively quiet, the project appears stable from a bug-reporting perspective, though the lack of merge activity suggests the maintainers may be focused on backend development or are currently away. The project health seems moderate, reliant on the resolution of the specific user experience issue identified today.

### 2. **Releases**
*No new releases published in the last 24 hours.*

### 3. **Project Progress**
*No merged or closed Pull Requests were recorded for this date.*

### 4. **Community Hot Topics**
The primary discussion point today centers on improving the transparency of agent execution during streaming.

*   **Issue [#277: Feature: Show full tool details in streaming output](https://github.com/TinyAGI/tinyagi/issues/277)**
    *   **Analysis:** Authored by `SMouuu`, this open request addresses a "black box" UX problem where the streaming interface (specifically in Telegram and TinyOffice) currently only broadcasts tool names (e.g., `[tool: Bash]`).
    *   **Underlying Need:** Users want visibility into *input parameters* and *output results* in real-time. Without this, users cannot effectively audit the agent's decision-making process or understand the context of an execution while it is happening.

### 5. **Bugs & Stability**
*No critical bugs, crashes, or stability regressions were reported in the last 24 hours.*

### 6. **Feature Requests & Roadmap Signals**
*   **Enhanced Streaming Observability:** Based on Issue #277, the next version of TinyClaw will likely move beyond simple tool status announcements.
    *   *Prediction:* Future updates may include flags for `--verbose-streaming` or a redesign of the UI payload to include tool arguments and truncated outputs in the feed.

### 7. **User Feedback Summary**
User sentiment today highlights a desire for greater **debuggability** and **trust**. While the agent executes tools successfully, the current output restricts the user's ability to understand the "why" and "how" behind an action. The lack of comments on the issue suggests this is a fresh pain point, but it is a critical one for users deploying agents in interactive environments like Telegram.

### 8. **Backlog Watch**
*Currently monitoring Issue [#277](https://github.com/TinyAGI/tinyagi/issues/277).* As a newly opened feature request with high utility for power users, it is a candidate for quick triage by the maintainers to improve user experience.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-04-13

## 1. Today's Overview
Moltis is experiencing a highly active development cycle focused on internal refactoring and security hardening. In the last 24 hours, the team demonstrated high velocity by merging 16 pull requests, significantly outpacing the 5 currently open. While no new releases were published today, the merge rate suggests a pending version update is imminent. The project health appears strong, with rapid responses to user-reported bugs and a continued focus on decoupling the "God Object" gateway architecture.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
Significant strides were made in expanding agent capabilities, security, and architectural cleanup:

*   **Agent Tooling**: PR [#666](https://github.com/moltis-org/moltis/pull/666) merged, adding native filesystem tools (`Read`, `Write`, `Edit`, `Grep`, etc.). This replaces shell-based `exec` commands with structured tools, improving reliability for file operations (Issue [#657](https://github.com/moltis-org/moltis/issues/657)).
*   **Security Hardening**: PR [#682](https://github.com/moltis-org/moltis/pull/682) closed, introducing an option to disable the Web UI terminal and hardening authentication routes. This addresses user concerns about exposed attack surfaces in remote deployments.
*   **New Channels**: PR [#674](https://github.com/moltis-org/moltis/pull/674) added support for **Nostr DMs**, expanding Moltis's interoperability with decentralized protocols (Issue [#668](https://github.com/moltis-org/moltis/issues/668)).
*   **Tool Policy Engine**: PR [#677](https://github.com/moltis-org/moltis/pull/677) implemented a 6-layer runtime tool policy resolution system, allowing granular control over agent capabilities.
*   **Refactoring**: Multiple PRs (#690, #683, #685) are open to extract logic from the Gateway crate into dedicated crates (e.g., `moltis-mcp`, `node-exec-types`), improving modularity.
*   **Configuration**: PR [#686](https://github.com/moltis-org/moltis/pull/686) fixed a bug where editing settings via the Web UI scrambled TOML section ordering (Issue [#684](https://github.com/moltis-org/moltis/issues/684)).

## 4. Community Hot Topics
*   **Matrix Support Request** ([#233](https://github.com/moltis-org/moltis/issues/233) - 5 comments): This long-standing request for Matrix protocol support remains highly active. The community desire for federated chat integration is evident.
*   **Native Filesystem Tools** ([#657](https://github.com/moltis-org/moltis/issues/657) - 2 comments): Successfully closed today. Users expressed strong approval (👍 2) for moving away from fragile shell commands for file editing.
*   **GitHub Copilot Errors** ([#261](https://github.com/moltis-org/moltis/issues/261) - 6 comments): A closed bug regarding provider errors. While resolved, the high comment count suggests integration stability with external LLM providers remains a critical user concern.

## 5. Bugs & Stability
*   **High Severity - Remote Login**: [#646](https://github.com/moltis-org/moltis/issues/646) (Unable to login to remote deployment) was closed today alongside the auth hardening PR.
*   **Medium Severity - Runner Loops**: [#658](https://github.com/moltis-org/moltis/issues/658) reported a critical "reflex-retry loop" where the agent dispatched empty tool calls for 25 iterations. This was closed today, suggesting a fix was deployed.
*   **Low Severity - UI/UX**: [#671](https://github.com/moltis-org/moltis/issues/671) (Clear button hidden in main session) was reported and fixed in PR [#672](https://github.com/moltis-org/moltis/pull/672) immediately.
*   **Stability Risk**: PR [#673](https://github.com/moltis-org/moltis/pull/673) removed the automatic model probe from provider validation. While this reduces startup friction, it shifts the burden of verifying model availability to the user.

## 6. Feature Requests & Roadmap Signals
*   **Web Search Integration**: [#345](https://github.com/moltis-org/moltis/issues/345) (Web search using SearXNG) is open. Given the recent merge of [#677](https://github.com/moltis-org/moltis/pull/677) (Tool Policy), infrastructure to control such external tools is now in place.
*   **Proxy Support**: [#548](https://github.com/moltis-org/moltis/issues/548) requests application/channel-level proxy support. Closed today, likely implemented or merged in a recent configuration update.
*   **Architectural Decoupling**: The surge in "refactor" PRs (see #690, #688, #685) signals a strong roadmap commitment to fixing technical debt in the Gateway crate before expanding features further.

## 7. User Feedback Summary
*   **Pain Points**: Users are frustrated with configuration management. Issue [#684](https://github.com/moltis-org/moltis/issues/684) highlighted that the Web UI was making "a mess" of TOML files. The rapid fix in PR [#686](https://github.com/moltis-org/moltis/pull/686) indicates high priority on configuration stability.
*   **Agent Reliability**: The feedback on Issue [#658](https://github.com/moltis-org/moltis/issues/658) (looping on empty args) and [#657](https://github.com/moltis-org/moltis/issues/657) (filesystem tools) suggests users are pushing agents to perform complex, multi-step operations and need better error handling and native tools rather than shell wrappers.
*   **Security Paranoia**: There is a clear demand for more granular security controls, evidenced by the positive reception to the "disable terminal" feature and the complex 6-layer tool policy merged today.

## 8. Backlog Watch
*   **[#345](https://github.com/moltis-org/moltis/issues/345) - SearXNG Integration**: Created in March, still open. With the core tooling refactoring settling down, this is a prime candidate for the next sprint.
*   **[#233](https://github.com/moltis-org/moltis/issues/233) - Matrix Support**: Created in February, still open. High community interest (5 thumbs up), but likely blocked on architectural decisions regarding the new channel system being refactored in PR #690.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for **CoPaw (QwenPaw)** on **2026-04-13**.

### 1. Today's Overview
The project is undergoing a significant transformation with the **release of v1.1.0**, marking the official rebranding from **CoPaw to QwenPaw**. Activity levels are exceptionally high, with **39 combined events** (15 issues, 24 PRs) updated in the last 24 hours, indicating a robust development cycle alongside a major release. The community is highly engaged, primarily asking migration questions regarding the name change and reporting integration bugs. However, stability concerns are notable, with nearly half of the recent activity focused on critical bugs like UI deadlocks, API timeouts, and Windows-specific rendering failures.

### 2. Releases
**📦 v1.1.0 & v1.1.0-beta.1 (Latest)**
*   **Major Change:** Official rebranding from **CoPaw** to **QwenPaw**.
*   **Refactoring:** Transition of environment variables from `COPAW_` prefix to `QWENPAW_` prefix (PR #3171).
*   **Impact:** Users need to update their configuration scripts and environment variables. The release signifies a shift towards a broader open ecosystem, likely integrating deeper with the Qwen model family.

### 3. Project Progress
*   **Merged/Closed PRs:**
    *   **Rebranding Execution:** Successfully merged PR #3285, #3286, and #3287 to finalize the name change, logo updates, and version bumping to 1.1.0.
    *   **Documentation & Infrastructure:**
        *   **Infrastructure:** Added channel testing infrastructure and contract tests in PR #2506.
        *   **UI Polish:** PR #3294 corrected titles and improved layout for model settings.
*   **Active Development (Open PRs):**
    *   **Multi-Agent Collaboration:** PR #3292 and #3215 are advancing features for local-remote collaboration and agent delegation.
    *   **Bug Fixes:** PR #3299 addresses a critical 400 error when tool calls return multimodal content; PR #3119 attempts to fix the "white screen" issue on Windows by handling WebView2 failures.

### 4. Community Hot Topics
*   **[Question] Smooth Upgrade Path:** [#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288) (16 comments)
    *   *Summary:* Users are asking how to upgrade from CoPaw to QwenPaw without losing agents, configurations, and memory.
    *   *Analysis:* High user anxiety regarding data continuity during the rebranding. Users need a "Migration Guide" immediately.
*   **[Bug] Persistent Freezing/Deadlocks:** [#1138](https://github.com/agentscope-ai/QwenPaw/issues/1138) (7 comments)
    *   *Summary:* Reports of the agent stopping execution mid-task with no error logs.
    *   *Analysis:* Critical reliability issue affecting user trust.
*   **[Question] Windows Client Reply Stuck:** [#2059](https://github.com/agentscope-ai/QwenPaw/issues/2059) (6 comments)
    *   *Summary:* Output pauses randomly during tool calls; "Over-thinking" loops where the agent retries useless attempts indefinitely.
    *   *Analysis:* Users need a "Stop" button functionality and retry limit configurations.

### 5. Bugs & Stability
**Critical Severity:**
*   **UI Failure (Windows):** Agent responses disappear after brief display ([#3281](https://github.com/agentscope-ai/QwenPaw/issues/3281)). *Fix Attempt:* PR #3119 (WebView2 checks) is open.
*   **Session Corruption:** Concurrent write race conditions causing permanent 422 errors due to JSON corruption ([#3277](https://github.com/agentscope-ai/QwenPaw/issues/3277)).
*   **Workflow Breakage:** Pipeline operations executing twice per message, causing unbounded tool ID growth ([#3279](https://github.com/agentscope-ai/QwenPaw/issues/3279)).

**High Severity:**
*   **API Timeouts:** `Unknown agent error: ReadTimeout` ([#3283](https://github.com/agentscope-ai/QwenPaw/issues/3283)).
*   **Channel Failures:** WeChat file uploads failing with asyncio loop errors ([#3296](https://github.com/agentscope-ai/QwenPaw/issues/3296)).

### 6. Feature Requests & Roadmap Signals
*   **Skill Management:** Request for "Update" button for outdated built-in/custom skills ([#3290](https://github.com/agentscope-ai/QwenPaw/issues/3290)).
*   **UI/UX Improvements:**
    *   **Sync `/clear`:** Request to clear frontend chat history when `/clear` command is run ([#3297](https://github.com/agentscope-ai/QwenPaw/issues/3297)).
    *   **Tool Guardrails:** Simplify verbose guardrail messages on mobile/PC ([#3298](https://github.com/agentscope-ai/QwenPaw/issues/3298)).
*   **Voice Interaction:** Request for voice reply capabilities in channels ([#3293](https://github.com/agentscope-ai/QwenPaw/issues/3293)).

### 7. User Feedback Summary
*   **Pain Points:** The "black box" nature of agent failures (stops with no logs) is the primary frustration. Windows users feel neglected regarding GPU support (Local models running on CPU instead of GPU) and dependency issues (WebView2).
*   **Rebranding Confusion:** The default disabling of "Auto-fetch models" and the name change have caused immediate configuration friction for existing users.
*   **Agent Behavior:** Users are frustrated by "Over-thinking" (infinite retry loops) and the inability to manually interrupt an agent's thought process effectively.

### 8. Backlog Watch
*   **Issue #3269 (Windows GPU/Offline):** Users report that CoPaw Local on Windows runs entirely on CPU despite having an NVIDIA GPU, and the app fails to start without internet access. This is fundamental to the "Local AI" value proposition.
*   **Issue #3291 (Model Discovery):** Users are asking why the "Auto-fetch models" button is disabled by default, requesting it be unlocked for easier third-party API integration.

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