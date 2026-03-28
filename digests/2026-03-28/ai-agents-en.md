# OpenClaw Ecosystem Digest 2026-03-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-28 00:11 UTC

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

# OpenClaw Project Digest: 2026-03-28

## 1. Today's Overview
OpenClaw is experiencing **intense development activity** bordering on instability, with a massive volume of 500 issues and 500 pull requests updated in the last 24 hours. The project appears to be in a feature-heavy sprint (likely pre-release for v2026.4), introducing complex "ACP/subagent" threading and voice capabilities. However, technical debt is accumulating rapidly; nearly 90% of the top 50 most-discussed issues are open bugs, many labeled "regression," indicating that recent commits are breaking existing functionality. Community sentiment is split between excitement for new features (like NVIDIA NIM support) and frustration regarding core tool execution failures.

## 2. Latest Releases
**None.** No new releases were published in the last 24 hours.
*Note: With the high volume of merged PRs, a release candidate (2026.3.14 or 2026.4.0) may be imminent.*

## 3. Project Progress
**Merged & Closed PRs (Top Highlights)**
*   **Ollama "Thinking" Support:** Three distinct PRs (#46747, #45773, #53200) were merged to fix how OpenClaw handles Ollama's thinking models (e.g., DeepSeek-R1). The fix ensures the `think` parameter is passed correctly, preventing wasted tokens and empty responses.
*   **Slack Block Kit Tables:** PR #46747 merged to restore rendered table support in Slack by converting Markdown tables into native Block Kit elements, reversing a regression from v2026.2.23.
*   **Discord Mention Fixes:** PR #55393 closed, fixing mentions in Matrix to work with `displayName` labels rather than just localparts.
*   **Plugin Security Scanning:** PR #56050 (Open) and PR #55820 (Closed) address the need for pluggable security scanners for Skill installation, a growing concern for enterprise adoption.

## 4. Community Hot Topics
*   **Platform Parity (Desktop Apps):**
    *   [#75 [OPEN] Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) — 66 👍, 57 comments.
    *   *Analysis:* Users demand feature parity with the existing macOS/iOS/Android apps. This is the most upvoted issue in the tracker, signaling a strong desire for native desktop integration.
*   **Critical Provider Authentication:**
    *   [#44851 [OPEN] Kimi web_search 401 Error](https://github.com/openclaw/openclaw/issues/44851) — 30 comments.
    *   *Analysis:* Integration with Kimi (Moonshot AI) is broken for search tools, though chat works. Users are struggling with API key configuration.
*   **Visual Capabilities:**
    *   [#28744 [OPEN] Support Agent Image Recognition](https://github.com/openclaw/openclaw/issues/28744) — 20 comments.
    *   *Analysis:* There is a clear user need for multimodal agents, particularly for processing images in Feishu and other platforms.
*   **Identity & Trust:**
    *   [#49971 [OPEN] RFC: Native Agent Identity](https://github.com/openclaw/openclaw/issues/49971) — 11 comments.
    *   *Analysis:* A proposal for integrating DIDs (Decentralized Identifiers) and VCs (Verifiable Credentials) suggests the community is looking toward enterprise-grade trust mechanisms.

## 5. Bugs & Stability
**Critical Severity (Release Blockers)**
*   **"No API Key for provider" (Regression):**
    *   [#55672 [OPEN] No API key for provider... Release Blocker](https://github.com/openclaw/openclaw/issues/55672) — Reported hours ago. OpenClaw fails to recognize valid keys for Baidu and others.
    *   [#55816 [OPEN] Custom providers fail after pi-* 0.63.0 upgrade](https://github.com/openclaw/openclaw/issues/55816) — 4 👍. Custom/OpenAI-compatible proxies are breaking.
*   **Tool Execution Failures:**
    *   [#40082 [OPEN] Agents accept tasks but don't execute](https://github.com/openclaw/openclaw/issues/40082) — 17 comments. Agents reply "One sec" but never perform actions.
    *   [#45046 [OPEN] Agents simulate tool usage instead of invoking](https://github.com/openclaw/openclaw/issues/45046) — 11 comments. LLMs are outputting tool JSON as text rather than calling the function.
    *   [#44122 [OPEN] Sandbox FS Bridge creates 0-byte files](https://github.com/openclaw/openclaw/issues/44122) — 8 comments. A regression in v3.11 security hardening broke file writing.
*   **Channel Instability:**
    *   [#13688 [OPEN] Discord WebSocket disconnects](https://github.com/openclaw/openclaw/issues/13688) — 17 comments. Unbounded backoff leaves bots offline for 30+ minutes.
    *   [#43233 [OPEN] Telegram Polling stall](https://github.com/openclaw/openclaw/issues/43233) — 4 👍. Channel stops receiving updates and crashes.

## 6. Feature Requests & Roadmap Signals
*   **NVIDIA NIM Integration:** [#50898](https://github.com/openclaw/openclaw/issues/50898) requests native support for NVIDIA API keys, moving away from generic OpenAI compatibility layers.
*   **Realtime Voice Mode:** PR [#43501](https://github.com/openclaw/openclaw/pull/43501) (Open, XL) is implementing OpenAI Realtime API support to reduce voice latency from 2-3s to ~200ms.
*   **Model Response Prefixing:** PR [#56083](https://github.com/openclaw/openclaw/pull/56083) adds response prefixes (e.g., emojis) to cron jobs, improving the "chat" feel of scheduled tasks.
*   **Agent Abort API:** PR [#55967](https://github.com/openclaw/openclaw/pull/55967) introduces `api.runtime.agent.abort`, allowing plugins to cancel long-running agent tasks.

## 7. User Feedback Summary
*   **Positive:** Users are highly engaged in extending the platform to diverse providers (NVIDIA, Kimi, local Ollama) and platforms (Matrix, Discord).
*   **Negative:** There is significant **dissatisfaction with stability**. Terms like "regression," "broken," and "silent failure" appear repeatedly. Users report that agents "hallucinate" tool calls (talking about doing them rather than doing them).
*   **Pain Point:** Configuration complexity remains a barrier. Issues regarding config menus (#8983) and nested YAML/JSON settings are frequent.

## 8. Backlog Watch
*   **Stale Critical Bugs:**
    *   [#20386 [OPEN] Node host approval socket not responding on Windows/WSL](https://github.com/openclaw/openclaw/issues/20386) — Open since Feb 18. Windows support for distributed nodes remains non-functional.
    *   [#28759 [OPEN] Feishu Channel consumes all API quotas](https://github.com/openclaw/openclaw/issues/28759) — Open since Feb 27. A critical resource leak for enterprise users.
*   **Long-standing Feature Gaps:**
    *   [#75 [OPEN] Linux/Windows Apps](https://github.com/openclaw/openclaw/issues/75) — Opened Jan 1 (top 👍 issue). The lack of desktop clients is a glaring omission in 2026.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis Report
**Date:** 2026-03-28
**Analyst:** Senior AI Open Source Ecosystem Watch

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is currently undergoing a **high-velocity development phase** characterized by a transition from experimental prototypes to production-ready infrastructure. Across the board, projects are grappling with the "stability vs. feature velocity" trade-off, as evidenced by a surge in regressions related to tool execution, context management, and API provider integrations. There is a clear industry-wide pivot toward **multi-provider architecture** (moving away from single-vendor lock-in) and **standardization**, specifically regarding agent skills (`.well-known` URIs) and model context protocols (MCP). Additionally, "desktop parity" and robust multi-platform channel support (Discord, Telegram, Matrix) have emerged as critical differentiators for user adoption.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | None (High Churn) | **B-** (Instability) |
| **NanoBot** | ~10 | 23 | `v0.1.4.post6` | **C+** (Regression Prone) |
| **Zeroclaw** | ~15 | ~30 | `v0.6.5` | **B+** (Active Improving) |
| **PicoClaw** | 16 | 43 | Nightly | **B** (Rapid Refactor) |
| **NanoClaw** | ~5 | 45 | None | **B** (Architectural Shift) |
| **NullClaw** | 5 | 37 | None | **A-** (Reliability Focus) |
| **IronClaw** | 20 | 47 | `v0.23.0` | **B-** (Security Fixing) |
| **LobsterAI** | 26 | 50 | None | **C+** (UX/Task Bugs) |
| **TinyClaw** | 0 | 2 | None | **A** (Stable) |
| **Moltis** | 2 | ~10 | `20260327.03` | **B+** (Hotfix Active) |
| **CoPaw** | 50 | 42 | None | **B** (Stabilizing) |
| **ZeptoClaw** | 0 | 2 (Open) | None | **A** (Low Debt) |
| **EasyClaw** | 0 | 0 | None | **N/A** (Inactive) |

*\*Health Score is an aggregate metric based on release velocity, critical bug severity, and community sentiment.*

## 3. OpenClaw's Position
**Status: The "Heavyweight" Reference Implementation**

*   **Advantages:** OpenClaw possesses the largest community footprint and acts as the primary "upstream" for several forks (e.g., LobsterAI). It maintains the widest channel parity (Slack, Discord, Matrix, Feishu) and is the only project actively pushing "Voice Mode" capabilities. Its support for diverse providers (NVIDIA NIM, Kimi) is robust.
*   **Technical Approach:** OpenClaw is aggressively pursuing "monolithic" capabilities (ACP/subagent threading) within a single codebase, leading to high technical debt.
*   **Comparison:** Unlike **Zeroclaw** (Rust-based, focused on context compression) or **IronClaw** (multi-tenant enterprise focus), OpenClaw is feature-bloated but currently suffers from severe stability regressions (90% of top issues are bugs).
*   **Community:** Largest user base, but currently the most volatile sentiment due to broken tool execution in recent commits.

## 4. Shared Technical Focus Areas
The following requirements are emerging as "Standard Features" across 3 or more projects:

*   **`.well-known` Skill Standardization:**
    *   **Projects:** NanoBot, PicoClaw, NullClaw, IronClaw, CoPaw.
    *   **Signal:** A universal demand for a "plugin marketplace" standard, allowing agents to discover and install skills from a standardized URI without manual cloning.
*   **Multi-Provider / Anti-Lock-in:**
    *   **Projects:** OpenClaw (NVIDIA/Kimi), NanoClaw (OpenAI/Copilot/Ollama), PicoClaw (Hermes/Fallbacks).
    *   **Signal:** Fear of vendor shutdowns (specifically Anthropic/Google) is driving architectural changes to support hot-swappable LLM backends.
*   **Context Overflow Recovery:**
    *   **Projects:** ZeroClaw (v0.6.5 focus), ZeptoClaw (PR #460), OpenClaw (Slack Block Kit regression).
    *   **Signal:** Long-running agent workflows are hitting token limits. Projects are racing to implement "sliding window" or "compression" strategies to prevent crashes.
*   **Security & Sandboxing:**
    *   **Projects:** IronClaw (Approval hijacking), NanoBot (Zero-click injection), PicoClaw (Multi-user isolation).
    *   **Signal:** As agents gain access to shells and file systems, "untrusted code execution" is becoming the primary security concern.

## 5. Differentiation Analysis

| Project | Key Differentiator | Target User | Architecture |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | Feature Richness & Voice | Power Users / Hobbyists | Feature-heavy (Technical Debt High) |
| **Zeroclaw** | Context Management & Performance | Developers / Production | **Rust** (High Performance) |
| **IronClaw** | Enterprise Multi-Tenancy | Corporate Teams | Multi-tenant DB Isolation |
| **LobsterAI** | Native Desktop UI ("Cowork") | General Consumers | Electron/Cowork UI |
| **TinyClaw** | Project Management UI (Linear-style) | Productivity Managers | Office Layout / SQLite |
| **NullClaw** | Messaging Reliability (Outbox) | DevOps / Integration Heavy | Durable Delivery Layer |
| **NanoClaw** | CLI-First & "Polyglot" AI | Terminal Users | Node.js / Container focused |
| **ZeptoClaw** | Browser Automation ("Eyes") | Web Automation workflows | Headless Browser Integration |

## 6. Community Momentum & Maturity

*   **Tier 1: Rapid Iteration (High Velocity, High Chaos)**
    *   **OpenClaw, LobsterAI:** Massive feature output but critical stability issues. Best for users who want the "latest" features and can tolerate debugging.
*   **Tier 2: Stabilizing & Maturing**
    *   **Zeroclaw, CoPaw, IronClaw:** These projects are actively paying down technical debt. Zeroclaw’s move to Rust 2024 and IronClaw’s security audits signal a move toward enterprise readiness.
*   **Tier 3: Niche / Stabilized**
    *   **TinyClaw, ZeptoClaw:** Low bug counts, focused PRs. These are likely the most reliable for specific use cases (TinyClaw for task UI, ZeptoClaw for browsing) but lack the broad ecosystem of OpenClaw.

## 7. Trend Signals for AI Developers

1.  **The "Voice" Interface Shift:** With OpenClaw implementing Realtime API and LobsterAI/PicoClaw working on TTS/ASR, voice is becoming a primary interface, not an add-on.
2.  **Agentic "Memory" is Hard:** Issues regarding "History Pruning" (ZeroClaw), "Context Overflow" (ZeptoClaw), and "Context Loss" (OpenClaw) indicate that simply stuffing the conversation history into the prompt is no longer viable. Developers should invest in **RAG-based memory** or **summarization pipelines**.
3.  **Platform Fragmentation is Painful:** The sheer number of channel-specific bugs (Feishu, QQ, Telegram, Matrix, Discord) suggests that building a truly "universal" agent is brittle. The ecosystem may consolidate around **standardized adapters (MCP)**.
4.  **Trust & Safety is Blocking Adoption:** IronClaw's "approval hijacking" bugs and NanoBot's "zero-click injection" reports indicate that without **cryptographic verification (HMAC receipts)** or strict sandboxing, agents will not be trusted with production credentials.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-28

## 1. Today's Overview
NanoBot is experiencing a **"high churn" cycle** following the `v0.1.4.post6` release. While the release was intended to refine the agent runtime, it has introduced several regressions, particularly within the Telegram channel and message routing logic. The project is highly active, with maintainers pushing rapid fixes (23 PRs merged/closed), but the community is reporting significant instability in "message" tool behaviors and streaming responses. The split between "polish" issues (Markdown rendering) and "critical" issues (infinite loops, silent failures) suggests the project is in a stabilization phase.

## 2. Releases
* **[v0.1.4.post6](https://github.com/HKUDS/nanobot/releases/tag/v0.1.4.post6)**: "Cleanly doing it."
    *   **Architecture**: Formal decomposition of the agent runtime (less surface area, cleaner internals).
    *   **Stats**: 57 PRs merged, 27 new contributors.
    *   **Known Issues**: This release appears to have triggered a cluster of regressions regarding concurrent message handling and Telegram rendering.

## 3. Project Progress (Merged/Closed PRs)
*   **Security Patch**: A critical fix for **Zero-Click Indirect Prompt Injection** via email polling was merged ([#2567](https://github.com/HKUDS/nanobot/pull/2567)), addressing a vulnerability where spoofed email headers could execute arbitrary commands.
*   **Channel Cleanup**: Removed global state mutation in LiteLLM provider ([#2053](https://github.com/HKUDS/nanobot/pull/2053)) to prevent API base overwrites.
*   **New Integrations**: Added support for NapCat QQ channel ([#2016](https://github.com/HKUDS/nanobot/pull/2016)) and basic skill slash commands ([#2488](https://github.com/HKUDS/nanobot/pull/2488)) were closed (moved to nightly/invalid).

## 4. Community Hot Topics
*   **[Telegram Feedback & Regressions](https://github.com/HKUDS/nanobot/issues/2562)**:
    *   *Issue*: The "👀" acknowledgment reaction introduced recently now stays stuck after the bot finishes responding.
    *   *Sentiment*: Users appreciate the feedback but find the stuck state annoying; fix is pending in [#2564](https://github.com/HKUDS/nanobot/pull/2564).
*   **[Concurrent Messaging Flaws](https://github.com/HKUDS/nanobot/issues/2549)**:
    *   *Issue*: The `message` tool silently discards responses in cross-channel scenarios due to the `_sent_in_turn` variable being overwritten.
    *   *Impact*: Breaks reliable agent-to-user communication in concurrent environments.
*   **[Security & Sandboxing](https://github.com/HKUDS/nanobot/issues/1448)**:
    *   *Issue*: Calls for "Secure Sandboxing" for skill execution to prevent unverified skills from gaining host privileges.
    *   *Community Drive*: There is a clear push for stricter isolation (WASM/containers) as the agent's capabilities grow.

## 5. Bugs & Stability
*   **[CRITICAL] Gateway Infinite Loop** ([#2540](https://github.com/HKUDS/nanobot/issues/2540)): `chraas gateway update` enters an infinite respawn loop due to a false positive in `_is_inside_gateway()`. Causes zombie processes.
*   **[HIGH] Telegram Markdown & Streaming Failures**:
    *   Markdown rendering is unreliable post-update ([#2568](https://github.com/HKUDS/nanobot/issues/2568)).
    *   Long streaming responses fail with `Message_too_long` errors ([#2559](https://github.com/HKUDS/nanobot/issues/2559)).
*   **[HIGH] Misleading "Completed" Messages** ([#2487](https://github.com/HKUDS/nanobot/issues/2487)): Agent claims action is done when nothing actually executed. Major UX trust issue.
*   **[MEDIUM] Ollama/Local Config 404** ([#2570](https://github.com/HKUDS/nanobot/issues/2570)): Gateway fails to listen on the expected TCP port (18790) for local Ollama setups.

## 6. Feature Requests & Roadmap Signals
*   **Standardized Skill Installation** ([#2571](https://github.com/HKUDS/nanobot/issues/2571)): Request to support installing skills from a `.well-known` URI, aligning with an emerging industry standard (Agent Skills group).
*   **Thinking Mode Toggle** ([#2240](https://github.com/HKUDS/nanobot/issues/2240)): Users want a manual toggle for the agent's internal thinking/reasoning mode.
*   **Self-Inspection Tool** ([#2521](https://github.com/HKUDS/nanobot/pull/2521)): An active PR proposing a `SelfTool` that allows the agent to inspect and modify its own runtime state (e.g., expanding context window dynamically).

## 7. User Feedback Summary
*   **Pain Points**: The transition to `v0.1.4.post6` has been rough for power users. Complaints focus on **regressions** (features that worked in `.post5` breaking in `.post6`), specifically in Telegram and Slack.
*   **Integration Friction**: Users connecting to **VolcEngine** and **Ollama Cloud** are hitting parameter errors (`max_tokens` vs `max_completion_tokens`), indicating the provider abstraction layer is leaking provider-specific constraints.
*   **Safety Concerns**: Advanced users are worried about the security implications of the `ExecTool`, noting that simple regex blocking is insufficient for powerful shell access.

## 8. Backlog Watch
*   **Issue #235** ( [Open since Feb](https://github.com/HKUDS/nanobot/issues/235) ): "I've completed processing but have no response to give." A persistent, intermittent issue with DeepSeek/Telegram where the bot enters a zombie state.
*   **Issue #1448** ( [Open since March 3](https://github.com/HKUDS/nanobot/issues/1448) ): **Secure Sandboxing**. This issue has low engagement but high criticality. As NanoBot gains traction, the lack of sandboxed execution for tools is a ticking time bomb for enterprise adoption.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-03-28

## 1. Today's Overview
ZeroClaw is experiencing a **high-velocity development cycle** with significant architectural upgrades and robust community engagement. The release of **v0.6.5** today focuses heavily on context management optimization, specifically addressing "context overflow" and tool call efficiency, which suggests the team is prioritizing stability in complex, long-running agent workflows. The project has successfully upgraded to **Rust Edition 2024** (PR #4841), indicating a commitment to modern language features and long-term maintainability. However, the **issue tracker reflects growing pains**; the rapid expansion of features (Channels, Providers) has exposed regressions, particularly regarding configuration management, history pruning, and channel-specific friction points (Matrix, WhatsApp).

## 2. Releases
**Version v0.6.5** (Released 2026-03-28)
*   **Context Management Overhaul:** This release focuses on preventing agent failures during long conversations. It introduces "context overflow recovery" in both interactive and tool-call loops, ensuring the agent doesn't crash if it runs out of token budget.
*   **Performance Optimization:** A "fast-path tool result trimming" feature was added to the context compressor to save tokens and processing time.
*   **Safety Checks:** A "preemptive context check" has been added before provider calls to prevent invalid API requests.
*   **Resource Management:** Introduction of a "shared iteration budget" to better manage multi-step tool executions.

## 3. Project Progress
*   **Language Upgrade:** The codebase has been upgraded to **Rust Edition 2024**. This touches 8 `Cargo.toml` files and fixes new compilation errors related to borrowing and environment variables, bringing in 5802 passing tests.
*   **Security Hardening:** A new PR (#4831) proposes **HMAC tool execution receipts** to cryptographically verify that the LLM actually executed a tool rather than hallucinating the result.
*   **New Channel Integration:** Work is progressing on a **LINE Messaging API channel** (PR #4822) to support Southeast Asian markets.
*   **Configuration Safety:** Fixes are in motion for the `zeroclaw onboard` process (PR #4817) to prevent it from wiping existing channel configurations when adding new ones.

## 4. Community Hot Topics
*   **Matrix Channel Friction** ([Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) - 2 comments): An umbrella issue tracking multiple friction points with the Matrix integration. Users are experiencing issues with E2EE retry loops and missing mention-only configs. The high activity indicates a dedicated user base relying on ZeroClaw for secure comms.
*   **External MCP Server Support** ([Issue #1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) - 13 comments): A highly requested feature (8 👍) to support external MCP servers via npm or remote connections. The closure of this issue suggests the feature may be implemented or accepted, signaling a shift toward broader tool integration.
*   **Tool Hallucination & Verification** ([PR #4831](https://github.com/zeroclaw-labs/zeroclaw/pull/4831) - Open): A proposal to use HMAC-SHA256 receipts to verify tool outputs. This has sparked interest regarding how to trust agent actions in production environments.
*   **Branding** ([Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) - 2 comments): The community is actively discussing and proposing designs for a new ZeroClaw logo.

## 5. Bugs & Stability
*   **CRITICAL (S1): Configuration Wipe** ([Issue #4655](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)): The `--channels-only` flag destroys all other channel configs. A fix is pending in [PR #4817](https://github.com/zeroclaw-labs/zeroclaw/pull/4817).
*   **HIGH (S2): History Pruner Breaking Tools** ([Issue #4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810)): The history pruner severs `tool_use`/`tool_result` pairs, causing Anthropic 400 errors. A fix is proposed in [PR #4825](https://github.com/zeroclaw-labs/zeroclaw/pull/4825).
*   **HIGH (S2): Matrix Context Loss** ([Issue #4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804)): Matrix threads lose conversation context after the first message or daemon restart.
*   **MEDIUM (S2): WhatsApp Web Broken** ([Issue #4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846)): The channel fails due to missing feature flags (`whatsapp-web`).
*   **MEDIUM (S2): MCP Detection** ([Issue #4848](https://github.com/zeroclaw-labs/zeroclaw/issues/4848)): ZeroClaw fails to detect configured MCP servers.
*   **MEDIUM (S2): API/Regression Issues**:
    *   [Issue #4856](https://github.com/zeroclaw-labs/zeroclaw/issues/4856): Sessions section returning 500 errors due to ID field issues.
    *   [Issue #4855](https://github.com/zeroclaw-labs/zeroclaw/issues/4855): Channels API returning HTML instead of JSON.

## 6. Feature Requests & Roadmap Signals
*   **TOTP 2FA for Tools** ([PR #4799](https://github.com/zeroclaw-labs/zeroclaw/pull/4799)): Implementation of Time-based One-Time Password gating for dangerous tool execution to prevent prompt injection attacks.
*   **Skill Standardization** ([Issue #4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)): Support for installing skills from a standardized `.well-known` URI, aligning with the "Agent Skills" group standard.
*   **Memory Consolidation via Tools** ([Issue #4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760)): A proposal to switch from JSON text parsing to native tool-calling for memory consolidation to improve reliability.
*   **Discord Image Support** ([Issue #4808](https://github.com/zeroclaw-labs/zeroclaw/issues/4808)): Users want the Discord bot to correctly handle image payloads instead of treating them as text embeds.

## 7. User Feedback Summary
Users are generally enthusiastic about the feature set but frustrated by **regressions in basic workflows**.
*   **Pain Point 1 (Configuration):** The `onboard` command is risky; users fear losing their setup when tweaking channels.
*   **Pain Point 2 (Channel Reliability):** Matrix users are vocal about broken threads and missing history; WhatsApp users are blocked by build errors.
*   **Pain Point 3 (Platform Support):** ARM64 (Raspberry Pi) users report broken updates ([Issue #4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842)), and GitHub Copilot users lack documentation ([Issue #4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851)).

## 8. Backlog Watch
*   **Missing Matrix Features:** [Issue #4666](https://github.com/zeroclaw-labs/zeroclaw/issues/4666) notes that `mention_only` config is implemented but missing from master, indicating code that needs merging/reviewing.
*   **Sandbox Hardening:** [Issue #4812](https://github.com/zeroclaw-labs/zeroclaw/issues/4812) requests seccomp and fail-closed behaviors for native sandboxes (bwrap/firejail) to match Docker's security level. This is open but low-comment, suggesting it needs a champion.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Project Digest: PicoClaw (2026-03-28)

## 1. Today's Overview
PicoClaw is experiencing a **high-velocity development cycle**, with 43 PRs and 16 issues updated in the last 24 hours. The project is rapidly evolving its core agent architecture, specifically focusing on multi-user isolation, provider compatibility, and channel stability (particularly for Feishu/Lark). The surge in activity—including 31 open PRs—indicates a massive ongoing refactoring effort, particularly around security/configuration management and tool execution. While the nightly build continues to roll out, users are reporting specific integration friction points with Windows compatibility, UI validation, and model provider parsing.

## 2. Releases
*   **nightly (v0.2.4-nightly.20260327)**: An automated nightly build has been released. Users are advised to exercise caution due to potential instability.
    *   *Changes*: Full changelog available [here](https://github.com/sipeed/picoclaw/compare/v0.2.4...main).
    *   *Context*: This nightly likely includes the recent configuration refactoring merged in PR #2068.

## 3. Project Progress
*   **Major Refactoring (PR #2068 - CLOSED)**: A significant restructuring of configuration and security management has been merged to simplify the internal structure. This aligns with the closure of documentation tasks regarding `SECURITY_CONFIG.md`.
*   **LLM Provider Robustness**: Multiple PRs are advancing to improve compatibility with non-standard OpenAI providers. PR #2104 (closed) added fallback support for Hermes-style XML tool calls (used by models like `mimo-v2-pro`), while PR #1342 (open) proposes implementing automatic retry mechanisms using `hashicorp/go-retryablehttp`.
*   **Resource Optimization**: PR #2103 (open) addresses high CPU usage by optimizing the main event loop (`pkg/agent/loop.go`) to use blocking channel selects instead of polling.
*   **Security & Multi-Tenancy**: PR #2095 and PR #2102 are actively hardening project isolation and implementing multi-user session isolation, a critical step for production deployments.

## 4. Community Hot Topics
*   **[#1974: Refactor ReadFileTool (Issue & PR #1981)](https://github.com/sipeed/picoclaw/issues/1974)**
    *   *Status*: Active discussion (6 comments).
    *   *Analysis*: There is a strong technical demand to move from byte-based to line-based pagination for file reading. This reflects user frustration with LLMs struggling to parse context split arbitrarily by bytes rather than logical lines. A PR (#1981) is currently open implementing this.
*   **[#1939: ASR/TTS Refactor (PR)](https://github.com/sipeed/picoclaw/pull/1939)**
    *   *Status*: Open (Updated today).
    *   *Analysis*: A major feature addition allowing PicoClaw to generate and send voice messages via supported channels. This is a significant capability expansion for voice-interactive agents.
*   **[#28: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28)**
    *   *Status*: Long-standing request (10 comments).
    *   *Analysis*: Android/Termux users are specifically asking for easier local provider integration. This highlights a "power user" segment wanting to run PicoClaw on mobile devices with local models.

## 5. Bugs & Stability
*   **[Critical] Feishu Channel Topic Routing [#2074](https://github.com/sipeed/picoclaw/issues/2074)**:
    *   *Description*: The bot replies to the main group chat instead of the specific topic thread in Feishu/Lark.
    *   *Impact*: High; breaks workflow for corporate users.
    *   *Status*: Open; reported as a regression compared to OpenClaw.
*   **[High] Windows QQ Channel Compatibility [#2080](https://github.com/sipeed/picoclaw/issues/2080)**:
    *   *Description*: QQ channel fails on Windows despite successful config tests via curl.
    *   *Impact*: Blocks Windows users entirely.
*   **[Medium] Discord Bot Token UI Bug [#2072](https://github.com/sipeed/picoclaw/issues/2072)**:
    *   *Description*: WebUI returns "This field is required" error when saving the Discord bot token, even if filled.
    *   *Impact*: UI/UX friction.
*   **[Medium] Tool Feedback Escaping [#2081](https://github.com/sipeed/picoclaw/issues/2081)**:
    *   *Description*: Tool outputs display Unicode escape sequences (e.g., `\u003e`) instead of readable characters in the chat.
    *   *Status*: Affects readability of shell commands.

## 6. Feature Requests & Roadmap Signals
*   **`.well-known` Skill Standardization [#2101](https://github.com/sipeed/picoclaw/issues/2101)**: A proposal to support installing skills from a standardized `.well-known` URI. This signals PicoClaw's intent to align with broader ecosystem standards (Cloudflare, Vercel).
*   **Feishu File Organization [#2030](https://github.com/sipeed/picoclaw/issues/2030)**: Users want configuration options to save received files in human-readable directory structures (`{year}/{month}`) rather than hash-based paths.
*   **WebUI Version Info [#2077](https://github.com/sipeed/picoclaw/issues/2077)**: Users want to see version/commit info in the web frontend. *Note*: This appears to be already addressed in open PR #2087.
*   **Read File by Lines**: As discussed in Hot Topics, this is highly likely to appear in the next version given the active PR.

## 7. User Feedback Summary
*   **Configuration Complexity**: Users are struggling with the new separation of `config.json` and `security.yml` (Issues #1986, #2013), indicating that the recent refactoring has a learning curve.
*   **Platform Specifics**: Windows users feel neglected; specific issues with QQ channels (#2080) and Baidu Qianfan models (#2079) were reported.
*   **Safety vs. Usability**: There is feedback that the `exec` tool's path validation is too aggressive, blocking valid commands like `curl` because of string matching inside URLs (#1042).
*   **Agent Stability**: Users report bots frequently stopping replying due to network disconnects without auto-reconnection (#2096).

## 8. Backlog Watch
*   **LM Studio Support [#28](https://github.com/sipeed/picoclaw/issues/28)**: Open since Feb 11, 2026. High interest from mobile/local users.
*   **MCP Manager Refactor [#1666](https://github.com/sipeed/picoclaw/pull/1666)**: A large, complex PR (open since March 17) focusing on Model Context Protocol lifecycle and concurrency. It needs attention to ensure it doesn't stale.
*   **Feishu File Download Config**: Pending implementation of organized file storage.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest**
**Date:** 2026-03-28
**Source:** GitHub.com/qwibitai/nanoclaw

### 1. Today's Overview
NanoClaw is experiencing a high-velocity development cycle with significant architectural shifts. The project saw **45 Pull Requests** updated in the last 24 hours (split evenly between open and merged/closed), indicating rapid iteration. The community is actively debating the future of the project's core dependency on Anthropic, spurred by fears of service termination for "OpenClaw" users, leading to a strong push toward multi-provider support (OpenAI, Copilot, Ollama). Concurrently, the project is maturing its operational hygiene with improved security auditing, documentation refinements, and a rebranding of the CLI tool from `claw` to `nanoclaw`.

### 2. Releases
*No new releases published in the last 24 hours.*

### 3. Project Progress
*Recent merged/closed PRs indicate stability improvements and documentation hardening:*

*   **Security & Stability:**
    *   **[PR #1497]** Fixed a critical issue where the full message history (up to 200 messages) was being sent to container agents upon startup recovery, causing massive prompts and latency. (Closed)
    *   **[Issue #1483]** A daily automated security audit closed 2 critical and 4 high-severity issues regarding shell command injection and memory growth, though the specific fixes are likely pending in separate PRs.
*   **Developer Experience:**
    *   **[PR #1468, #1443, #1400, #1372]:** Multiple merged PRs focused on "prompt engineering" for the agent itself—fixing instructions so the AI correctly handles diagnostics, credential proxies, and template selection for `isMain` groups.
    *   **[PR #1473]** Added a new WhatsApp channel implementation using the Baileys library (an alternative to the official Cloud API). (Closed)

### 4. Community Hot Topics
*Discussions dominated by the need to decouple from Anthropic and expand AI backend options:*

*   **[#80 - Support other runtimes/providers (OpenAI, Gemini, etc.)](https://github.com/qwibitai/nanoclaw/issues/80)**
    *   **Status:** Open (Highest traction: 53 👍, 27 comments)
    *   **Analysis:** Users are alarmed by Anthropic shutting down subscriptions for similar tools (OpenClaw). This is the loudest signal from the community that NanoClaw must support "Opencode," "Gemini," and "Codex" to ensure survival.
*   **[#1350 - Add GitHub Copilot SDK as backend](https://github.com/qwibitai/nanoclaw/issues/1350)**
    *   **Status:** Open
    *   **Analysis:** A formal proposal to integrate the GitHub Copilot SDK as a first-class citizen alongside Anthropic, allowing users to leverage GPT-4.1 models.
*   **[#478 - Add Google Vertex AI authentication](https://github.com/qwibitai/nanoclaw/pull/478)**
    *   **Status:** Open (PR Needs Review)
    *   **Analysis:** Active development to support Google Cloud Vertex AI, reflecting the enterprise demand for alternative cloud providers.
*   **[#1496 - Add Image Vision, Ollama, and Compact skills](https://github.com/qwibitai/nanoclaw/pull/1496)**
    *   **Status:** Open
    *   **Analysis:** This PR is gaining attention as it introduces local LLM support (Ollama) and multimodal capabilities (Vision), directly addressing the cost and privacy concerns associated with cloud-only APIs.

### 5. Bugs & Stability
*Critical issues identified requiring immediate attention:*

1.  **[CRITICAL] Containerization Self-Termination**
    *   **[Issue #1487](https://github.com/qwibitai/nanoclaw/issues/1487):** NanoClaw crashes consistently when run inside a Docker container, killing its own shell.
    *   **Impact:** High; breaks deployment for users using Docker-in-Docker or containerized environments.
2.  **[SECURITY] Command Injection & Memory Growth**
    *   **[Issue #1483](https://github.com/qwibitai/nanoclaw/issues/1483):** Automated audit found critical injection vulnerabilities in `container-runner.ts`.
3.  **[HIGH] Credential Mounting Failure**
    *   **[Issue #1480](https://github.com/qwibitai/nanoclaw/pull/1480):** Agents in containers failed to receive secrets/env vars, forcing repeated `/login` flows. (Fix PR open).
4.  **[HIGH] Idle State Detection Race Condition**
    *   **[Issue #1482](https://github.com/qwibitai/nanoclaw/issues/1482):** The host incorrectly marks containers as idle before they are finished processing, leading to IPC wait failures.

### 6. Feature Requests & Roadmap Signals
*Based on open issues and PRs, the roadmap is pivoting toward "Polyglot AI Support":*

*   **Multi-Provider Architecture:** The demand for [#80](https://github.com/qwibitai/nanoclaw/issues/80) and [#1350](https://github.com/qwibitai/nanoclaw/issues/1350) suggests the next major version should abstract the AI backend to allow hot-swapping between Claude, GPT-4, and local models (Ollama) via [PR #1496](https://github.com/qwibitai/nanoclaw/pull/1496).
*   **Context Compression:** Research issues [#1493](https://github.com/qwibitai/nanoclaw/issues/1493) (Headroom) and [#1494](https://github.com/qwibitai/nanoclaw/issues/1494) (RTK) indicate a strong need to reduce token usage for CLI output.
*   **AWS Bedrock Auth:** [Issue #1492](https://github.com/qwibitai/nanoclaw/issues/1492) requests AWS Bedrock support to cater to enterprise enterprise security policies.
*   **CLI Modernization:** [PR #1408](https://github.com/qwibitai/nanoclaw/pull/1408) proposes renaming the CLI to `nanoclaw` and adding subcommands (`nanoclaw ps`), signaling a move toward a more polished, installable binary rather than a collection of scripts.

### 7. User Feedback Summary
*   **Security Anxiety:** Users are expressing fear regarding supply chain attacks ([#1424](https://github.com/qwibitai/nanoclaw/issues/1424)) and the "nasty" installation scripts that require direct host access ([#1485](https://github.com/qwibitai/nanoclaw/issues/1485)). There is a clear desire to run NanoClaw entirely inside a container with mounted socket access.
    *   *Action:* The project is addressing this with [PR #1408](https://github.com/qwibitai/nanoclaw/pull/1408) (CLI improvements) and [PR #1497](https://github.com/qwibitai/nanoclaw/pull/1497) (credential hardening).
*   **Vendor Lock-in Fear:** The sentiment regarding Anthropic is turning sour; users view support for other backends as a necessity for survival rather than a feature.

### 8. Backlog Watch
*Items stuck or requiring maintainer intervention:*

*   **Skill Branch Maintenance:** Multiple automated issues ([#1345](https://github.com/qwibitai/nanoclaw/issues/1345), [#1307](https://github.com/qwibitai/nanoclaw/issues/1307), etc.) indicate that `skill/apple-container` and `skill/compact` branches are failing to merge-forward with `main`. These technical debt items need manual resolution.
*   **Meta-Skill Creation:** [PR #363](https://github.com/qwibitai/nanoclaw/pull/363) (`/create-skill`) has been open since Feb 21 and is marked as "Blocked." Unblocking this would significantly lower the barrier for community contributions.
*   **Discord Integration:** [PR #311](https://github.com/qwibitai/nanoclaw/pull/311) (Thread support) has been open since Feb 19 and is marked "Needs Review."

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-03-28

## 1. Today's Overview
The NullClaw project is currently undergoing a significant development phase focused on **system reliability and messaging stability**. In the last 24 hours, there has been a massive surge in contribution activity, with **37 Pull Requests updated**—predominantly opened—compared to only 5 issues. While no new releases were published today, the volume of open PRs suggests an active effort to merge features and fixes for an upcoming version. The project appears healthy but is currently grappling with scaling issues related to long-running AI tasks causing disconnects in third-party chat platforms (specifically QQ) and the need for more robust outbound message delivery.

## 2. Releases
*   **Latest Releases:** None
*   **Analysis:** No release artifacts were generated in the last 24 hours. However, given the high volume of merge-ready PRs (see *Project Progress*), a release is likely imminent once the current batch of reliability fixes is stabilized.

## 3. Project Progress
While there were 3 closed PRs, the real progress is visible in the active development branch where **reliability architectures** are being overhauled.

*   **Core Infrastructure (Outbox & Retry):**
    *   **PR #730** (feat: durable outbound delivery outbox): Introduces a mechanism to persist messages, ensuring they survive process restarts—a critical step for production reliability.
    *   **PR #731** (feat: retry transient final outbound sends): Adds intelligent retry logic with backoff for network failures, distinguishing between transient errors and permanent failures.
*   **Channel Resilience:**
    *   **PR #732** (fix: QQ delayed replies): Directly addresses the `msg_id` timeout issue reported in the community by implementing a fallback to plain message delivery if the reply context expires.
*   **Documentation:**
    *   **PR #695** (docs: reliability and model fallbacks): Clarifies how users can configure model fallbacks, resolving user confusion regarding high-availability setups.

## 4. Community Hot Topics
The community is highly engaged in improving the robustness of the messaging channels.

*   **QQ Channel Stability (Issue #722)**
    *   **Status:** Open | **Activity:** Updated 2026-03-27
    *   **Summary:** Users reported that the QQ connection drops during long AI inference times, resulting in "ghost" messages where the AI replies but the user never receives them.
    *   **Link:** [nullclaw/nullclaw#722](https://github.com/nullclaw/nullclaw/issues/722)
    *   **Signal:** This is a high-severity UX issue for power users running heavier models. The fix is currently in development via **PR #732**.

*   **Agent Skills Standardization (Issue #734)**
    *   **Status:** Open | **Activity:** Created 2026-03-27
    *   **Summary:** A request to support the emerging `.well-known` URI standard for agent skills, aligning NullClaw with the wider Agent Skills ecosystem (Cloudflare, Vercel).
    *   **Link:** [nullclaw/nullclaw#734](https://github.com/nullclaw/nullclaw/issues/734)
    *   **Signal:** Indicates a desire for better interoperability and easier plugin management.

*   **Telegram Reasoning Visibility (Issue #311)**
    *   **Status:** Closed | **Activity:** Updated 2026-03-27
    *   **Summary:** Users previously requested the ability to see Chain-of-Thought (reasoning) logs in Telegram, similar to OpenClaw. The issue was recently closed/cleared.
    *   **Link:** [nullclaw/nullclaw#311](https://github.com/nullclaw/nullclaw/issues/311)

## 5. Bugs & Stability
*   **High Severity: QQ Message Loss on Long Tasks**
    *   **Bug:** QQ channel disconnects if AI processing takes too long; messages are lost upon reconnection.
    *   **Fix Available:** Yes, **PR #732** adds a specific fallback for this scenario.
*   **Medium Severity: Discord DM Routing**
    *   **Bug:** Scheduled Direct Messages (DMs) on Discord may use the wrong user ID.
    *   **Fix Available:** Yes, **PR #719** corrects the `delivery_chat_id`.
*   **Low/Medium Severity: Telegram Duplicate Messages**
    *   **Bug:** Reports of duplicate messages and tool cache staleness.
    *   **Fix Available:** Yes, **PR #694** addresses these alongside Bifrost compatibility.
*   **Persistent Bug: Lark Channel User Feedback**
    *   **Issue:** No processing feedback is given while the AI is thinking.
    *   **Fix Available:** Yes, **PR #720** adds a temporary placeholder message.

## 6. Feature Requests & Roadmap Signals
*   **Knowledge Graph Memory (PR #712):** A major signal for the project's future. A developer is implementing a `KgMemory` backend using SQLite recursive CTEs. This suggests NullClaw is moving toward more persistent, structured, relational memory rather than simple vector or context-window storage.
*   **Advanced Math Support (PR #716):** Introduction of a native `calculator` tool (20 operations) suggests the project aims to handle complex agentic workflows without relying solely on LLM arithmetic.
*   **Inbound Debouncing (PR #676):** Implements a `debounce_ms` setting for Telegram/Discord/CLI to prevent "rapid-fire" message triggers from overwhelming the agent.

## 7. User Feedback Summary
*   **Pain Points:** The primary user frustration is **unreliability in message delivery** across specific channels (QQ, Discord, Telegram). Users are experiencing "lost messages" during high-latency tasks or complex processing.
*   **Configuration Clarity:** Users are confused about configuration behaviors, specifically regarding "fallback models" (Issue #683) and environment variable interpolation (PR #706 clarifies that interpolation is *not* supported).
*   **Satisfaction:** Users actively requesting specific features (like `.well-known` support and new tools) indicate strong engagement and a desire to build upon the platform.

## 8. Backlog Watch
*   **Issue #311 (Telegram Reasoning):** Although closed, the comments suggest users are still keen on debugging capabilities within the chat interface.
*   **Issue #683 (Fallback Models):** While resolved via documentation in PR #695, this highlights a gap in discoverability for existing reliability features. Future work should focus on making these configurations more accessible.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Project Digest: IronClaw (2026-03-28)

## 1. Today's Overview
IronClaw is experiencing a high-velocity development cycle focused on security hardening and architectural evolution. The project maintains a healthy pace with 47 updated PRs and 20 issues in the last 24 hours. Release `v0.23.0` was pushed yesterday, formally finalizing the multi-tenant isolation architecture. However, the project is currently addressing a cluster of **CRITICAL** severity security issues identified by the staging CI reviewer, specifically concerning approval thread authorization and race conditions. While the community is actively requesting financial execution features, the core team appears prioritized on stability, error handling, and sanitizing internal API responses.

## 2. Releases
**ironclaw-v0.23.0** (Released: 2026-03-27)
*   **Multi-Tenant Isolation (Phases 2-4):** Finalized the backend architecture for secure, segregated user environments.
*   **Routines Fix:** Resolved a bug where routine names could not be recovered after a failed update fallback.
*   **MCP Protocol:** Updated handlers to correctly manage `202 Accepted` responses.

## 3. Project Progress
The project is moving fast on structural improvements, though many large PRs remain open rather than merged today.
*   **Security & Stability:**
    *   **[PR #1719](https://github.com/nearai/ironclaw/pull/1719)** (Open): Initiates a major security fix to sanitize internal error details in API responses, preventing database exception leaks.
    *   **[PR #1713](https://github.com/nearai/ironclaw/pull/1713)** (Open): Unifies sensitive path protection across shell and file tools (e.g., blocking access to `~/.ssh`).
    *   **[PR #1590](https://github.com/nearai/ironclaw/pull/1590)** (Open): Addresses the critical "Cross-channel approval thread hijacking" vulnerability by verifying `source_channel` authorization.
*   **Feature & Architecture:**
    *   **[PR #1626](https://github.com/nearai/ironclaw/pull/1626)** (Open): Advances DB-backed user management and admin secrets provisioning, replacing static env-vars.
    *   **[PR #1557](https://github.com/nearai/ironclaw/pull/1557)** (Open): Introduces the "Unified Thread-Capability-CodeAct execution engine" (v2 architecture), replacing fragmented abstractions.
*   **Closed/Resolved:** The Staging CI bot auto-closed several medium-priority issues regarding error formatting and locking mechanisms (e.g., Issues #1708, #1707) following fixes in PR #1703.

## 4. Community Hot Topics
*   **Security Vulnerabilities in Approval Threads**
    *   **[Issue #1485](https://github.com/nearai/ironclaw/issues/1485)** (CRITICAL): Cross-channel approval thread hijacking. Users/Reviewers are concerned that authorization checks can be bypassed.
    *   **[Issue #1486](https://github.com/nearai/ironclaw/issues/1486)** (CRITICAL): TOCTOU (Time-of-check to time-of-use) race condition in thread resolution.
    *   *Analysis:* These technical debt items are high-priority for the core team to resolve before the multi-tenant features can be considered fully secure.
*   **Financial Architecture Proposal**
    *   **[Issue #1712](https://github.com/nearai/ironclaw/issues/1712)**: Proposal for a "Secure financial execution layer."
    *   *Analysis:* Signals a strong user demand for IronClaw to move beyond "read-only" NEAR intents to actual custody, signing, and policy enforcement for financial actions.
*   **Tooling & Integration**
    *   **[Issue #1717](https://github.com/nearai/ironclaw/issues/1717)**: Request to support installing skills from a `.well-known` URI (standardizing with Vercel/Cloudflare).

## 5. Bugs & Stability
*   **CRITICAL: Database Leakage**
    *   **[Issue #1702](https://github.com/nearai/ironclaw/issues/1702)**: Database error details (including format/exceptions) are being leaked directly to API clients. Fix incoming in **[PR #1719](https://github.com/nearai/ironclaw/pull/1719)**.
*   **CRITICAL: Runtime Panics**
    *   **[Issue #1669](https://github.com/nearai/ironclaw/issues/1669)**: Potential UTF-8 panic in `is_recoverable_tool_call_segment()`. Fix incoming in **[PR #1688](https://github.com/nearai/ironclaw/pull/1688)**.
*   **HIGH: Data Truncation Logic**
    *   **[Issue #1670](https://github.com/nearai/ironclaw/issues/1670)**: Asymmetry in truncation count logic within the agentic loop.
*   **User-Reported: HTTP Tool & Telegram**
    *   **[Issue #1676](https://github.com/nearai/ironclaw/issues/1676)**: User reports failure in auto-polling Telegram messages due to HTTP tool errors (comments indicate frustration comparing it to "OpenClaw").

## 6. Feature Requests & Roadmap Signals
*   **Financial Actions:** Based on **[Issue #1712](https://github.com/nearai/ironclaw/issues/1712)**, a "Secure financial execution layer" is likely on the roadmap, moving from PR #1622 (read-only) to full custody/signing.
*   **Local Network Support:** **[PR #1696](https://github.com/nearai/ironclaw/pull/1696)** adds an `LLM_ALLOW_LOCAL_NETWORK` flag to facilitate self-hosted LLMs (Ollama, vLLM) on LANs, addressing a restriction in SSRF validation.
*   **Routine Verification:** **[PR #1716](https://github.com/nearai/ironclaw/pull/1716)** proposes tracking routine verification state, preventing unverified or behavior-changed routines from running automatically.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Model Configuration:** Users are struggling to configure custom models (e.g., "Codex") via CLI, finding the "Model name" validation confusing (**[Issue #1697](https://github.com/nearai/ironclaw/issues/1697)**).
    *   **Stability:** There is dissatisfaction with the reliability of basic tooling (HTTP/Telegram bot) compared to other tools, with one user noting OpenClaw "works perfect from day 1" (**[Issue #1676](https://github.com/nearai/ironclaw/issues/1676)**).
    *   **UX:** Settings for Model Providers lack input validation (e.g., Base URL accepts non-URLs) (**[Issue #1709](https://github.com/nearai/ironclaw/issues/1709)**).

## 8. Backlog Watch
*   **Critical Security Backlog:** Issues **[1485](https://github.com/nearai/ironclaw/issues/1485)**, **[1486](https://github.com/nearai/ironclaw/issues/1486)**, and **[1487](https://github.com/nearai/ironclaw/issues/1487)** (Approval thread hijacking, race conditions, fallback logic) are open but stagnant since March 20. While PRs exist to fix them, they remain open issues.
*   **Streaming API:** **[Issue #1691](https://github.com/nearai/ironclaw/issues/1691)** asks if the OpenAPI-compatible API supports stream mode, noting parsing errors with `data:{...}` responses. This has not yet received a maintainer response.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# Project Digest: LobsterAI (2026-03-28)

## 1. Today's Overview
LobsterAI is experiencing a **high-velocity development phase**, evidenced by 50 updated Pull Requests (PRs) and 26 active Issues in the last 24 hours. The project is actively refining the **Cowork** (core agent/chat) experience and addressing stability concerns related to the **OpenClaw Gateway** and IM (Instant Messaging) integrations. While recent PRs show successful efforts to fix UX friction (e.g., macOS shortcuts, UI modal behavior), a surge of new bug reports suggests that recent builds (specifically versions 2026.3.24–2026.3.27) may have introduced regressions regarding task lifecycle management and service connectivity.

## 2. Releases
*No new releases detected in the last 24 hours.* The latest reported issues cite versions `2026.3.26` and `2026.3.24`.

## 3. Project Progress
**Recent Merges & Closures:**
*   **UX Polish:** Refactored message navigation to a "mini-rail" style ([#988](https://github.com/netease-youdao/LobsterAI/pull/988), [#987](https://github.com/netease-youdao/LobsterAI/pull/987)) and added code block folding/line numbers in the Cowork interface ([#939](https://github.com/netease-youdao/LobsterAI/pull/939)).
*   **Platform Fixes:** Fixed a critical issue where macOS shortcuts were displaying `Ctrl` instead of `Cmd` ([#980](https://github.com/netease-youdao/LobsterAI/pull/980), [#985](https://github.com/netease-youdao/LobsterAI/pull/985)).
*   **Core Logic:** Deferred Gateway client exposure to prevent race conditions during connection handshakes ([#970](https://github.com/netease-youdao/LobsterAI/pull/970)).
*   **IM Refactoring:** Migrated the "Xiaomifeng" (netease-bee) platform from a standalone gateway to the OpenClaw runtime plugin architecture ([#984](https://github.com/netease-youdao/LobsterAI/pull/984)).

## 4. Community Hot Topics
*   **Task Lifecycle Failure (Critical):**
    *   **Issue:** [#953](https://github.com/netease-youdao/LobsterAI/issues/953) (👍 1)
    *   **Summary:** Users report that clicking "Stop" or deleting a task does not actually halt execution. Stopped tasks continue to run in the background, opening browsers or triggering API rate limits. This leads to "crosstalk" where old tasks interfere with new ones.
    *   **Underlying Need:** Basic process control reliability is paramount for user trust.
*   **Multi-Agent Architecture Request:**
    *   **Issue:** [#964](https://github.com/netease-youdao/LobsterAI/issues/964)
    *   **Summary:** A strong proposal for "Multi-Agent Isolation." Users want a single LobsterAI instance to run multiple distinct agents (e.g., Work vs. Personal) with separate memories, knowledge bases, and IM accounts to prevent context mixing.
*   **Deep Link Security:**
    *   **Issue:** [#977](https://github.com/netease-youdao/LobsterAI/issues/977)
    *   **Summary:** Identification of a security vulnerability in `main.ts` where deep links (`lobsterai://`) lack strict source validation, potentially allowing malicious interference with auth flows.

## 5. Bugs & Stability
**Ranked by Severity:**
1.  **Gateway Infinite Crash Loop:**
    *   **Issue:** [#859](https://github.com/netease-youdao/LobsterAI/issues/859) - Invalid config causes the Gateway to crash and repeatedly fork new processes for over 10 minutes.
2.  **Task Isolation Failure:**
    *   **Issue:** [#953](https://github.com/netease-youdao/LobsterAI/issues/953) - Background tasks not stopping, causing resource leaks.
3.  **Web Search Service Failure:**
    *   **Issue:** [#981](https://github.com/netease-youdao/LobsterAI/issues/981) - "Failed to start Web Search service" on app startup.
4.  **MCP Daemon Unavailable:**
    *   **Issue:** [#961](https://github.com/netease-youdao/LobsterAI/issues/961) - Daemon (port 53699) fails to start, breaking tool chains.
5.  **IM Sync/UX Issues:**
    *   **Issue:** [#986](https://github.com/netease-youdao/LobsterAI/issues/986) - WeChat bot replies are buffered and sent in a batch ("message spam") rather than streaming.
    *   **Issue:** [#885](https://github.com/netease-youdao/LobsterAI/issues/885) - WeChat integration links failing.
6.  **Model Switching Instability:**
    *   **Issue:** [#972](https://github.com/netease-youdao/LobsterAI/issues/972) - App freezes on "AI Engine starting gateway" after saving model changes.

## 6. Feature Requests & Roadmap Signals
*   **Cowork Input Refactoring:** PR [#610](https://github.com/netease-youdao/LobsterAI/pull/610) is open and active, aiming to rebuild the prompt input to support structured `@` mentions (files/skills) similar to Cursor/Windsurf.
*   **Chat Folder Management:** PR [#978](https://github.com/netease-youdao/LobsterAI/pull/978) introduces folders for organizing chat sessions in the sidebar.
*   **Advanced IM Model Management:** Issues [#947](https://github.com/netease-youdao/LobsterAI/issues/947), [#948](https://github.com/netease-youdao/LobsterAI/issues/948), and [#943](https://github.com/netease-youdao/LobsterAI/issues/943) request a dedicated configuration layer for IM usage, including priorities, rate limits (tokens/day), and fallback logic (adaptive model switching) to prevent IM interaction failures.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated with **context switching**. Issues indicate that debugging models in the main UI breaks active IM conversations because they share the same model configuration. Additionally, **macOS native integration** feels "off" (wrong modifier keys) and **modal interactions** are clunky (closing when dragging text to select).
*   **Stability Anxiety:** There is recurring anxiety about Gateway stability (frequent restarts, crashes) and the "black box" nature of background processes that refuse to die.

## 8. Backlog Watch
*   **OpenClaw Gateway Latency:** Issue [#844](https://github.com/netease-youdao/LobsterAI/issues/844) (Closed but noted as persistent) regarding Gateway slowness during model switches remains a friction point, though some PRs suggest performance optimizations are underway.
*   **Context/Data Safety:** Issue [#977](https://github.com/netease-youdao/LobsterAI/issues/977) (Security) requires immediate maintainer review to patch the deep link validation.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-28

## 1. Today's Overview
TinyClaw is currently in a stable phase with low immediate velocity, recording zero open issues or active discussions in the last 24 hours. However, the project remains under active development on the integration front, evidenced by the closure of two significant Pull Requests focused on User Experience (UX) overhaul and task management. With no new releases deployed today, the team appears to be consolidating backend features and refining the frontend interface ahead of the next version rollout. The activity trend suggests a shift from rapid feature addition to polishing the interaction layer and data persistence models.

## 2. Releases
*No new releases published on 2026-03-28.*

## 3. Project Progress
The project has successfully integrated a major UI restructuring and a new task management system. The following Pull Requests were merged/closed recently (updated within the last 24h):

*   **[feat(tasks): linear-style task/project management with comments #252](https://github.com/TinyAGI/tinyclaw/pull/252)**
    *   **Status:** Closed (Merged)
    *   **Advancement:** This PR introduces a sophisticated project management layer. It moves away from basic task handling to a "Linear-like" workspace featuring SQLite persistence, threaded comments, and auto-generated Linear-style IDs (e.g., SYS-1). This significantly enhances the tool's capability for managing complex agent workflows.

*   **[refactor(office): reorganize office layout with topbar navigation #249](https://github.com/TinyAGI/tinyclaw/pull/249)**
    *   **Status:** Closed (Merged)
    *   **Advancement:** A major navigation refactor was completed. The "Office" layout now utilizes top-bar navigation instead of a sidebar, grouping routes more logically. Additionally, agent characters are now interactive clickable elements that open detail panels, improving the accessibility of agent information.

## 4. Community Hot Topics
*No active discussions or hot topics detected in the last 24 hours based on issue/PR activity.*

## 5. Bugs & Stability
*No bugs, crashes, or regressions reported in the last 24 hours.* The recent closure of PRs #249 and #252 indicates that the codebase is currently stabilizing after significant refactoring.

## 6. Feature Requests & Roadmap Signals
Based on the merged PRs, the roadmap is prioritizing a **Professional Workflow Interface**.
*   **Linear-Style Organization:** The implementation of Linear-style IDs (SYS-1) and a dedicated workspace (PR #252) signals a shift towards supporting professional project management use cases rather than simple individual queries.
*   **Interactive Agent Discovery:** The changes to the "Office" layout (PR #249) suggest a roadmap focus on visual agent management, potentially leading to a future "Agent App Store" or detailed directory view.

## 7. User Feedback Summary
*   **No direct feedback available:** With zero comments recorded on the latest PRs and no open issues, there is a lack of immediate qualitative feedback or user pain points for this specific period.
*   **Inferred Satisfaction:** The move to a "Linear-style" interface (PR #252) is a strong indicator that the development team is responding to a need for greater structure, organization, and persistence in user workflows, addressing the common friction point of disorganized chat histories in AI agents.

## 8. Backlog Watch
*The backlog is currently clear.* There are no long-unanswered issues or stalled PRs flagged in the recent data. The repository appears to be in a healthy maintenance state with recent technical debt (layout refactoring) successfully paid down.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-28

## 1. Today's Overview
Moltis demonstrated high development velocity on 2026-03-28, resulting in two rapid-fire releases (versions `20260327.03` and `20260327.01`) aimed at stabilizing installation and core functionality. The project successfully closed a significant architectural fix regarding GraphQL chat service binding alongside the rollout of a new "Symphony" workflow daemon foundation. Activity remains robust, with the team currently balancing advanced feature development—such as prompt caching and Telegram document extraction—against necessary architectural maintenance.

## 2. Releases
**New Versions Available: `20260327.03` & `20260327.01`**
*   **Context:** The release of two versions in quick succession suggests a "hotfix" pattern. The earliest version likely contained a regression (likely related to the install script bug noted below), necessitating an immediate patch.
*   **Changes:** Based on the merged Pull Requests, these releases stabilize the "Symphony" workflow daemon and fix critical GraphQL binding issues.
*   **Migration Notes:** Users who experienced the `.deb` installation failure with the earlier batch should pull the latest `20260327.03` release immediately.

## 3. Project Progress
**Merged & Closed Features:**
*   **Workflow Foundation Landed:** PR #421 ([feat(symphony)](https://github.com/moltis-org/moltis/pull/421)) was merged, introducing the `moltis-symphony` crate. This establishes the infrastructure for repo-owned `WORKFLOW.md` loading, typed runtime configuration, and a new CLI surface (`moltis symphony validate`).
*   **GraphQL Chat Service Fixed:** PR #210 ([feat(graphql)](https://github.com/moltis-org/moltis/pull/210)) was closed. It successfully ported changes to ensure GraphQL uses the late-bound `state.chat()` method, aligning it with RPC chat methods and honoring chat overrides.

## 4. Community Hot Topics
*   **Anthropic & OpenRouter Prompt Caching:** PR #495 ([feat(providers)](https://github.com/moltis-org/moltis/pull/495)) is currently open and implements prompt caching with configurable retention (`none`/`short`/`long`).
    *   *Analysis:* This addresses the high cost and latency of long-context LLM calls. By injecting cache control breakpoints, the project is optimizing for enterprise-grade efficiency.
*   **Telegram Document Extraction:** PR #276 ([feat(telegram)](https://github.com/moltis-org/moltis/pull/276)) seeks to enable Moltis to read attached plaintext and markdown files within Telegram.
    *   *Analysis:* Currently, the agent ignores attached files. This PR indicates a community demand for "file context" in chat-based interactions, moving beyond simple text prompts to document analysis.

## 5. Bugs & Stability
**Installation Regression (Closed):**
*   **Severity:** High (Blocking Installation)
*   **Issue:** [#493](https://github.com/moltis-org/moltis/issues/493) - The install script was looking for an incorrectly named `.deb` file.
*   **Status:** Closed and fixed in the latest releases.
*   **Analysis:** The quick turnaround on this bug highlights active maintenance, though the initial slip in the install script suggests a gap in CI/validation for deployment artifacts.

**GraphQL Service Binding (Resolved):**
*   **Severity:** Medium (Functional Inconsistency)
*   **Issue:** [#494](https://github.com/moltis-org/moltis/issues/494) - GraphQL was bypassing the late-bound live chat service, causing inconsistent behavior compared to RPC methods.
*   **Status:** The issue remains Open, but the corresponding fix (PR #210) was closed and merged. Users should verify if the `main` branch build fully resolves this.

## 6. Feature Requests & Roadmap Signals
*   **Symmetry between RPC and GraphQL:** The closure of PR #210 signals a roadmap commitment to architectural consistency, ensuring all API surfaces (RPC and GraphQL) behave identically regarding state management.
*   **Advanced LLM Capabilities:** PR #495 signals a move toward supporting "prompt caching," a feature typically reserved for advanced production workloads, suggesting Moltis is tuning for high-volume usage.
*   **Enhanced Telegram Usability:** PR #276 suggests the roadmap includes better multi-modal support (reading files) for integration platforms.

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing friction with deployment (install scripts failing) and limitations in integrations (Telegram inability to read file attachments).
*   **Usage Patterns:** The specific request for `.txt` and `.md` file reading in Telegram indicates users are treating Moltis as a "code analyst" or "document processor" rather than just a conversational bot.

## 8. Backlog Watch
*   **PR #276 ([feat(telegram)](https://github.com/moltis-org/moltis/pull/276)):** Created March 1st and still open. This PR addresses a clear user need (file reading). The author notes they "haven't written a single line of code" and the implementation is "suboptimal," suggesting it needs a maintainer's review to be properly refactored and merged.
*   **Issue #494 ([fix(graphql)](https://github.com/moltis-org/moltis/issues/494)):** While the fix PR was merged, this issue is still marked OPEN. It requires verification that the merge actually resolved the architectural concern regarding the static services bundle.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-28

## 1. Today's Overview
CoPaw is experiencing a high-velocity development cycle with significant community engagement. In the last 24 hours, the project saw 50 updated issues and 42 active pull requests, indicating a robust pace of iteration. While no new official release was published today, the repository is active with multiple merged PRs addressing critical bugs (file encoding, channel duplication) and architectural improvements (unified stop command, priority queues). The project appears to be stabilizing post-v0.2.0, with a strong focus on cross-platform compatibility, multi-agent orchestration, and user experience refinement.

## 2. Releases
**Status:** No new releases published in the last 24 hours.
*Note: Development continues on the main branch with significant features (e.g., Linux AppImage support, unified command queue) potentially queued for the next patch or minor release.*

## 3. Project Progress
**Key Features & Fixes Advanced:**
*   **Universal Control Implementation:** The `/stop` command architecture has been significantly refined. **PR #2067** (closed) added soft interrupt support across all channels, while **PR #2411** (merged) implemented a unified priority queue system to handle command dispatching, improving the responsiveness of agent control.
*   **Cross-Platform & Encoding Stability:** **PR #2403** (merged) resolved long-standing file encoding issues on Windows (e.g., CSV乱码) by implementing a multi-encoding fallback logic (UTF-8-BOM → GBK → CP1252).
*   **Channel Enhancements:** Support for richer media was added in **PR #2401** (merged), enabling WebSocket-based media uploads for the WeCom (Enterprise WeChat) channel.
*   **DingTalk Reliability:** **PR #2392** (open) addresses critical cron task failures in DingTalk by fixing session webhook expiration issues.

## 4. Community Hot Topics
*   **Contribution Opportunities:**
    *   [**Issue #2291**](https://github.com/agentscope-ai/CoPaw/issues/2291): "🐾 Help Wanted: Open Tasks" remains the most active thread (24 comments). The maintainers are actively soliciting community help for specific P0-P2 tasks, signaling an open, inclusive development culture.
*   **Upgrade & Configuration Friction:**
    *   [**Issue #2382**](https://github.com/agentscope-ai/CoPaw/issues/2382) & [**Issue #2236**](https://github.com/agentscope-ai/CoPaw/issues/2236): Users are experiencing significant friction with updates, specifically regarding the resetting of virtual environments (`venv`) and the overwriting of customized `agents.md` configurations after upgrading. This highlights a need for better migration scripts or config persistence handling.
    *   [**Issue #2431**](https://github.com/agentscope-ai/CoPaw/issues/2431): A highly requested UI fix involves the language setting not persisting after restart, defaulting back to English despite user selection.
*   **Integration & MCP:**
    *   [**Issue #2417**](https://github.com/agentscope-ai/CoPaw/issues/2417): Discussion on integrating local models (vLLM/PyTorch) with MCP (Model Context Protocol) services, indicating growing interest in complex, local-first agent architectures.

## 5. Bugs & Stability
*   **Severe - System Integrity:**
    *   [**Issue #2385**](https://github.com/agentscope-ai/CoPaw/issues/2385): CLI port management design flaw causing multi-agent collaboration failures. Random port usage is breaking configurations.
    *   [**Issue #2312**](https://github.com/agentscope-ai/CoPaw/issues/2312): Connection failure with National Supercomputing Internet API.
    *   [**Issue #2273**](https://github.com/agentscope-ai/CoPaw/issues/2273): ModelScope deployment unable to log in despite correct auth credentials.
*   **Moderate - Functional Regression:**
    *   [**Issue #2236**](https://github.com/agentscope-ai/CoPaw/issues/2236): User customizations (`agents.md`) overwritten on upgrade.
    *   [**Issue #2421**](https://github.com/agentscope-ai/CoPaw/issues/2421): Feishu channel sending duplicate replies.
*   **Fix Status:** Encoding issues (Windows CSV) are addressed in **PR #2403**. Multi-agent command control is improved via **PR #2411**.

## 6. Feature Requests & Roadmap Signals
*   **Desktop Experience (Windows/Linux):**
    *   [**Issue #2430**](https://github.com/agentscope-ai/CoPaw/issues/2430): Request for System Tray icon and "Minimize to Tray" functionality to prevent context loss when closing the app.
    *   **PR #1084:** Active development on Linux AppImage support, signaling a push for better Linux desktop coverage.
*   **Conversation Management:**
    *   [**Issue #2416**](https://github.com/agentscope-ai/CoPaw/issues/2416): Request for concurrent conversations—allowing follow-up messages while a long-running agent task is executing, rather than blocking the queue.
    *   [**Issue #2357**](https://github.com/agentscope-ai/CoPaw/issues/2357): Request for a "Rename" button for conversation history threads.
*   **Channel & Skills Expansion:**
    *   [**Issue #2418**](https://github.com/agentscope-ai/CoPaw/issues/2418): Request for a "Skills Hub" management page for easier discovery and installation of community skills.
    *   **PR #2428** & **PR #1192:** Roadmap signals indicate expanding provider support to include `OpenCode` and enhanced `OpenRouter` filtering.

## 7. User Feedback Summary
*   **Pain Points:** Users are expressing frustration with the update process (`venv` resets, config overwrites). The language setting persistence issue (#2431) is also a common annoyance for non-English users.
*   **Positive Signals:** High engagement with the "Help Wanted" issue and active PR submissions suggest a loyal and growing developer community.
*   **Use Cases:** Heavy focus on integration reliability (DingTalk cron jobs, WeCom media, MCP services) suggests users are deploying CoPaw in production workflows involving scheduled tasks and complex inter-service communication.

## 8. Backlog Watch
*   [**Issue #2015**](https://github.com/agentscope-ai/CoPaw/issues/2015): A synchronization bug between `active_skills` and `customized_skills` folders, which worked in older versions but regressed in the `default` agent workflow. This issue remains open despite being reported earlier in March.
*   [**Issue #1441**](https://github.com/agentscope-ai/CoPaw/issues/1441): The "curl retry loop cannot be interrupted" bug is a lingering stability issue for CLI users that has not yet seen a merge fix, despite recent priority queue improvements.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-28

## 1. Today's Overview
ZeptoClaw is currently in an active development phase focused on reliability and integration capabilities. Despite no official releases or issues updated in the last 24 hours, the project maintains high momentum on the feature branch. Activity is concentrated on two significant Pull Requests opened by contributor **stuartbowness**, addressing critical infrastructure gaps in browser automation and memory management. The project appears stable regarding user-reported bugs (zero active issues), indicating a focus on proactive feature expansion rather than reactive maintenance.

## 2. Releases
*No new releases published on 2026-03-28.*

## 3. Project Progress
*Feature development is the primary driver of today's activity, with two major PRs opened and currently under review:*

*   **Browser Automation Integration** ([#459](https://github.com/qhkm/zeptoclaw/pull/459)):
    A new feature has been proposed to integrate [`agent-browser`](https://agent-browser.dev/), enabling full browser automation within ZeptoClaw. This implementation includes smart engine management (supporting Lightpanda with a Chrome fallback), SSRF (Server-Side Request Forgery) protection, and an improved user experience. This PR was split from a previous larger request (#410) to facilitate easier review and integration.

*   **Context Management Overhaul** ([#460](https://github.com/qhkm/zeptoclaw/pull/460)):
    A major refactoring of the context compaction system has been proposed. This update aims to replace the existing single-pass word-count approach with a "multi-layered defense-in-depth strategy." The goal is to resolve unrecoverable token overflow errors that occur during long conversations, significantly improving the agent's stability for extended workflows.

*   *Note: No PRs were merged or closed in the last 24 hours.*

## 4. Community Hot Topics
*Activity is driven by the introduction of new capabilities rather than community debate:*

*   **Enabling Web Interaction** ([#459](https://github.com/qhkm/zeptoclaw/pull/459)):
    The community is showing interest in adding "eyes" to the agent. The underlying need is for agents to interact with dynamic web content rather than just static APIs. The inclusion of SSRF protection in this PR highlights a community concern regarding security when automating browser tasks.

*   **Solving the "Long Conversation" Crash** ([#460](https://github.com/qhkm/zeptoclaw/pull/460)):
    Token management remains a top priority. The proposal of a multi-layered compaction strategy addresses the critical need for agents to maintain context over long sessions without crashing, a necessity for production deployments.

## 5. Bugs & Stability
*No critical bugs were reported in the Issues tracker today.* However, PR #460 explicitly addresses a known stability concern regarding **token overflow**. While not filed as a bug report today, the PR description confirms that users previously experienced crashes during long conversations due to context window limits. The proposed fix in #460 aims to resolve this regression.

## 6. Feature Requests & Roadmap Signals
*Based on the open PRs, the roadmap is evolving towards a more robust and autonomous agent:*

*   **Native Browser Support:** The addition of `BrowserTool` in PR #459 signals that the next version of ZeptoClaw will likely move beyond simple tool usage to full web automation, allowing agents to perform end-to-end user workflows.
*   **Enhanced Memory Architecture:** The changes in PR #460 suggest a roadmap shift towards supporting complex, long-running tasks where context retention is vital. Users should expect the next release to handle multi-turn conversations significantly better.

## 7. User Feedback Summary
*Direct user feedback is limited today due to zero new issues.* However, the proposed PRs suggest specific user pain points:
*   **Dissatisfaction:** Users likely face friction when agents hit token limits (requiring the fixes in #460) and inability to interact with browser-based UIs (addressed by #459).
*   **Satisfaction:** The clean split of PR #410 into #459 indicates responsiveness to maintainer feedback regarding code organization and modularity.

## 8. Backlog Watch
*No stale issues or abandoned PRs were identified in today's data.* The project appears to be in a healthy state with recent engagement from core contributors.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*