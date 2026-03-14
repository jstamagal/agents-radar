# OpenClaw Ecosystem Digest 2026-03-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-14 00:10 UTC

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

# OpenClaw Project Digest: 2026-03-14

## 1. Today's Overview
OpenClaw is experiencing a period of **extremely high activity** combined with **significant instability** following the `v2026.3.12` release. The project generated over 1,000 events (Issues + PRs) in the last 24 hours. While the release introduced a major "Dashboard v2" refresh, it has also triggered a critical wave of regressions, particularly regarding **memory management** (OOM errors) and **connectivity** (CLI/WebSockets). The community is actively discussing localization, desktop app support, and stability concerns.

## 2. Releases
### **v2026.3.12**
**Status:** ⚠️ **Critical Regression Warning**

This major feature update is currently causing widespread instability across multiple deployment environments (Docker, Raspberry Pi, standard servers).

*   **Key Features:**
    *   **Dashboard v2 Refresh:** A complete overhaul of the Control UI featuring a modular overview, enhanced chat view (slash commands, search, export, pinned messages), a command palette, and mobile bottom tabs. (PR #41503)
    *   **Model Support:** Added support for `openai/gpt-5.4`.
*   **Critical Issues Reported:**
    *   **Memory Leaks:** Multiple reports of "JavaScript heap out of memory" on basic commands and server startup (Issues #45064, #45440, #41778).
    *   **Websocket/CLI Failures:** `openclaw` CLI commands frequently fail with handshake timeouts, even when the Web UI is functional (Issues #45419, #44714).
    *   **Device Auth:** "Device identity required" errors persist in the Control UI despite configuration changes (Issue #44967).
    *   **WhatsApp & Telegram:** Inbound message delivery failures and outbound send path breaks are reported (Issues #45474, #45171, #45289).

## 3. Project Progress
*   **Fixes in Flight:** The team is actively triaging the v2026.3.12 regressions.
    *   **UI Fixes:** PR #45541 attempts to fix a "reload storm" in the new dashboard chat history that was causing the UI to freeze.
    *   **Authentication:** PR #45512 targets the "device identity required" errors, aiming to restore `dangerouslyDisableDeviceAuth` behavior and classify connection failures.
    *   **CLI/Tools:** PR #45537 attempts to fix OOM errors during completion script generation.
*   **Maintainer Actions:** There is active focus on "stale" issue cleanup and test preservation (PR #45518), suggesting an effort to stabilize the CI/CD pipeline amidst the chaos.

## 4. Community Hot Topics
*   **[Enhancement] Internationalization (i18n) & Localization Support** ([#3460](https://github.com/openclaw/openclaw/issues/3460))
    *   **Activity:** 101 comments, 3 reactions.
    *   **Analysis:** A long-standing request from non-English users. The maintainers have historically declined due to bandwidth, but the community pressure remains high.
*   **[Enhancement] Linux/Windows Clawdbot Apps** ([#75](https://github.com/openclaw/openclaw/issues/75))
    *   **Activity:** 38 comments, 60 reactions.
    *   **Analysis:** High demand for a native desktop experience on Windows and Linux, similar to the existing macOS agent. Users want full feature parity for local automation.
*   **[Bug] Telegram Reaction Notifications** ([#45289](https://github.com/openclaw/openclaw/issues/45289))
    *   **Activity:** 15 comments.
    *   **Analysis:** Users report that `message_reaction` events are not being received despite correct configuration, breaking interactive bot flows.

## 5. Bugs & Stability
*   **CRITICAL: Memory Exhaustion (OOM)**
    *   **Issues:** [#45064](https://github.com/openclaw/openclaw/issues/45064), [#45440](https://github.com/openclaw/openclaw/issues/45440), [#41778](https://github.com/openclaw/openclaw/issues/41778)
    *   **Impact:** CLI unusable, gateway crashes on low-RAM devices (Pi 4, 4GB servers).
    *   **Fix PR:** [#45537](https://github.com/openclaw/openclaw/pull/45537) (Completion script fix).
*   **HIGH: WhatsApp/Telegram Connectivity**
    *   **Issues:** [#45474](https://github.com/openclaw/openclaw/issues/45474) (Inbound fail), [#45171](https://github.com/openclaw/openclaw/issues/45171) (Outbound fail), [#45289](https://github.com/openclaw/openclaw/issues/45289) (Reactions).
    *   **Impact:** Core messaging functionality broken; messages show as "linked" but do not deliver.
*   **HIGH: Websocket Timeouts**
    *   **Issues:** [#45419](https://github.com/openclaw/openclaw/issues/45419), [#44714](https://github.com/openclaw/openclaw/issues/44714)
    *   **Impact:** CLI operations (`nodes status`, `logs`) fail while web UI works, indicating a breaking change in the gateway's local handshake logic.

## 6. Feature Requests & Roadmap Signals
*   **OpenCode Go Subscription Support** ([#27009](https://github.com/openclaw/openclaw/issues/27009)): Users want to integrate the new "OpenCode Go" plan ($10/mo) for reliable access to Kimi K2.5 and GLM-5. This seems likely to be merged soon given the ease of integration.
*   **Heading-Aware Memory Chunking** (PR [#45545](https://github.com/openclaw/openclaw/pull/45545)): A new PR suggests improving search relevance by splitting chunks based on Markdown headings rather than arbitrary sizes. This signals an upcoming improvement to the RAG (Retrieval-Augmented Generation) pipeline.
*   **Plugin Architecture Evolution:** Large PRs like [#41496](https://github.com/openclaw/openclaw/pull/41496) propose a unified `registerProvider` API for TTS/Embeddings, suggesting a move to standardize how AI capabilities are plugged into the core.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **"Update Anxiety":** Many users report that the `2026.3.12` update broke previously working environments (PopOS, Raspberry Pi, macOS).
    *   **Resource Usage:** Users are frustrated by the high memory footprint, noting that the system is unusable on constrained hardware (Issue [#45440](https://github.com/openclaw/openclaw/issues/45440)).
    *   **UX Regression:** The new Dashboard v2 has bugs where chat input disappears or context limit icons obscure the view (Issue [#44906](https://github.com/openclaw/openclaw/issues/44906)).
*   **Satisfaction:**
    *   Users generally appreciate the *features* of Dashboard v2 (modularity, mobile tabs) but are dissatisfied with the *execution* and stability of the release.

## 8. Backlog Watch
*   **Discord Voice Failures** ([#16103](https://github.com/openclaw/openclaw/issues/16103)): An issue where Discord voice messages fail with a bare "Error" and no diagnostic info remains open since Feb 14.
*   **Signal Group Support** ([#20397](https://github.com/openclaw/openclaw/issues/20397)): Signal group messages are silently dropped because `requireMention` defaults to true, but the config option to change it is missing from the schema.
*   **Platform Parity:** Linux/Windows apps (Issue [#75](https://github.com/openclaw/openclaw/issues/75)) remain highly requested but unaddressed for months.

---

## Cross-Ecosystem Comparison

# Ecosystem Analysis Report: Personal AI Agents (2026-03-14)

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is currently undergoing a phase of **aggressive architectural maturation** and **feature standardization**. Following the lead of the core reference project (OpenClaw), the ecosystem is rapidly converging on **Model Context Protocol (MCP)** as the standard for extensibility and **RAG (Retrieval-Augmented Generation)** as the core memory paradigm. We are observing a bifurcation in the market: "heavy" frameworks (OpenClaw, NanoBot, NullClaw) are doubling down on multi-channel enterprise integration (Slack, Discord, Feishu) and complex tooling, while "light" frameworks (ZeptoClaw, TinyClaw) are optimizing for local CLI performance, security hardening, and developer experience. However, this rapid innovation cycle has introduced a wave of **instability**, with most major projects reporting critical regressions related to memory management, OOM (Out of Memory) errors, and backward compatibility following recent major releases.

## 2. Activity Comparison

| Project | 24h Issues | 24h PRs | Release Status | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | High (1,000+) | High | `v2026.3.12` (Critical Regressions) | ⚠️ **Critical** |
| **NanoBot** | High | Very High (154) | Stabilizing `v0.1.4` | 🟡 **Unstable** |
| **ZeroClaw** | Med | High (50) | `v0.1.9-beta` (Active Beta) | 🟢 **Good** |
| **PicoClaw** | Med | High (109) | `v0.2.2-nightly` (Refactor) | 🟡 **Unstable** |
| **NanoClaw** | Low | Med | Stabilizing (No release) | 🟡 **Stabilizing** |
| **NullClaw** | Med | High (36) | `v2026.3.13` (Rapid Fire) | 🟢 **Good** |
| **IronClaw** | Low | High (50) | Active Merge (No release) | 🟢 **Good** |
| **LobsterAI** | Med | Med | Merging Features (No release) | 🟡 **Unstable** |
| **TinyClaw** | Low | Low (4) | `v0.0.13` (Major Release) | 🟢 **Stable** |
| **Moltis** | Low | Low (6) | Maintenance (No release) | 🟢 **Stable** |
| **CoPaw** | High | Med | Stabilizing `v0.0.7` | 🟡 **Unstable** |
| **ZeptoClaw** | Low | Low (3) | Pre-release (Hardening) | 🟢 **Stable** |
| **EasyClaw** | None | None | N/A | ⚪ **Dormant** |

*\*Health Score based on ratio of merged PRs to reported bugs and release stability.*

## 3. OpenClaw's Position
**OpenClaw remains the dominant ecosystem leader** but is currently suffering from a classic "scale trap."
*   **Advantages:** Unmatched community velocity (1,000+ daily events) and the definition of the "Dashboard v2" standard. Its release notes are effectively the roadmap for the entire industry (e.g., the move to `openai/gpt-5.4` support).
*   **Disadvantages:** The `v2026.3.12` release has triggered a **critical stability crisis**, with OOM errors and WebSocket failures affecting Docker, Raspberry Pi, and standard server deployments. This instability creates a vacuum where lighter forks (like **ZeroClaw** and **NullClaw**) are attracting users seeking reliability.
*   **Technical Differentiator:** Unlike peers, OpenClaw is attempting to be the "Operating System" of agents, managing its own update lifecycle, dashboard, and complex gateway, whereas competitors like **NanoBot** are content being a lean library or backend.

## 4. Shared Technical Focus Areas
Across the digest, three distinct technical requirements have emerged as ecosystem standards:

1.  **Model Context Protocol (MCP) & Tool Discovery:**
    *   *Projects:* **ZeroClaw** (On-demand loading), **NanoClaw** (Credential mount fixes), **LobsterAI** (Bridge implementation).
    *   *Need:* Standardized, dynamic tool discovery and credential management for external services (Gmail, GitHub, Slack).

2.  **Multi-Modal Input & File Handling:**
    *   *Projects:* **ZeroClaw** (Local file paths), **LobsterAI** (Vision/Local Models), **IronClaw** (JPEG/PNG Uploads), **ZeptoClaw** (Image-only Discord messages).
    *   *Need:* Agents must robustly process PDFs, audio, and images, not just text, particularly for local non-OpenAI models.

3.  **Enterprise Channel Parity (Feishu/Lark & WeCom):**
    *   *Projects:* **NullClaw** (Lark stability/Teams), **IronClaw** (Feishu WASM), **NanoBot** (WeCom/Feishu fixes), **CoPaw** (Lag fixes).
    *   *Need:* As adoption moves from West to East, support for Chinese enterprise suites (Feishu, DingTalk, WeCom) is becoming a "Tier 1" requirement alongside Slack and Discord.

## 5. Differentiation Analysis

| Project | Key Differentiation | Target User |
| :--- | :--- | :--- |
| **NanoBot** | **Architectural Purity:** Python-based plugin system (entry_points). Cleanest separation of channel, memory, and agent logic. | Python Developers / Enterprise Backend |
| **ZeroClaw** | **UX & Localization:** The only project with a dedicated "Electric Blue" UI overhaul and aggressive i18n (Chinese) support. | Non-English Enterprise Users |
| **LobsterAI** | **Local-First Hybrid:** Focuses on bridging Electron GUIs with local models (Ollama) and OpenClaw backends. | Desktop Power Users / Privacy |
| **ZeptoClaw** | **Secure CLI:** Minimalist, streaming-first with TTY-gated approvals. Positioned as a "safe" alternative to autonomous defaults. | Security-Conscious Developers |
| **PicoClaw** | **Event-Driven Agents:** Pushing the boundary on "Agent Steering" (interruptible loops) and `SOUL.md` personality definitions. | Agent Researchers |
| **TinyClaw** | **Hierarchical Memory:** Focuses on persistent, file-based memory (Markdown) and simple "TinyAGI" branding. | Hobbyists / Students |

## 6. Community Momentum & Maturity
*   **Tier 1 (High Velocity / High Chaos):** **OpenClaw** and **NanoBot**. These are generating the most innovation but require the highest operational tolerance for bugs.
*   **Tier 2 (Stabilizing / Production Gradients):** **NullClaw**, **ZeroClaw**, and **IronClaw**. These projects are successfully closing bugs and releasing beta/patch versions rapidly. They are successfully absorbing features from the Tier 1 projects while maintaining stability.
*   **Tier 3 (Niche / Hobbyist):** **TinyClaw**, **Moltis**, **ZeptoClaw**. Lower activity volumes, but distinct communities. **Moltis** is effectively in maintenance mode fixing specific bugs, while **ZeptoClaw** is hardening for a 1.0 release.

## 7. Trend Signals
*   **The "OpenClaw Standard" is pervasive:** References to OpenClaw appear in **LobsterAI** (bridges), **ZeroClaw** (dynamic node discovery), and **IronClaw** (comparison of features), validating its position as the de facto reference architecture.
*   **Memory Consolidation is the new bottleneck:** As context windows grow, **memory consolidation** (summarization) is the primary failure point.
    *   *Signal:* **NanoBot** forced `tool_choice="required"` to fix saving. **CoPaw** is refactoring its "Compactor" due to hallucinations. **TinyClaw** implemented hierarchical memory to address this specifically.
*   **Safety & Permissions are "Front of Mind":**
    *   *Signal:* **ZeptoClaw** reversed its default to "Approval Required" (`[y/N]`). **PicoClaw** has 5 open issues regarding security defaults (`allow_remote`). **NanoClaw** is rushing to patch "Prompt Injection" via web tools.
*   **Local Model Support is Fragile:**
    *   *Signal:* Almost every project reports issues with local models (Ollama/Llama.cpp) failing on tool calling or formatting, suggesting that while LLM inference is solved, *Agent* logic on local models remains an unsolved challenge.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the **NanoBot Project Digest** for **2026-03-14**.

### 1. Today's Overview
The NanoBot project is experiencing a period of **extremely high development velocity**. With **154 Pull Requests** updated in the last 24 hours—nearly triple the usual activity—the project appears to be undergoing a major architectural evolution involving plugin channels and provider refactoring. While active engagement is high, the community is reporting friction regarding stability, specifically around configuration changes, memory consolidation failures, and backward compatibility with existing chat clients (e.g., QQ legacy mode). The rapid pace of changes suggests a strong push toward a modular, extensible architecture, though it may be impacting short-term stability.

### 2. Releases
**No new releases** were published in the last 24 hours. The project currently relies on post-release commits and hotfixes, as users are still reporting issues related to `v0.1.4`.

### 3. Project Progress
*   **Architecture Modernization (Channels):** Significant effort is underway to decouple channel configurations.
    *   **[Merged/Closed]** PR #1984 & PR #1982: Implement a **channel plugin architecture** using Python entry_points. This moves configuration classes from `schema.py` into individual channel modules, allowing for external channel plugins via `pip install` (`nanobot.channels` group).
*   **Memory & Tooling Fixes:**
    *   **[Merged/Closed]** PR #1909: A critical fix for memory consolidation was merged. It forces `tool_choice="required"` to prevent the LLM from skipping the `save_memory` call, resolving issues where memory archival failed silently.
    *   **[Merged/Closed]** PR #1981: Bumped `wecom-aibot-sdk-python` to >=0.1.5 to fix duplicate receive loops and heartbeat timeout issues in the WeChat Enterprise channel.
    *   **[Merged/Closed]** PR #1941: Restored plain text replies for QQ legacy clients, fixing a regression introduced by recent markdown updates.

### 4. Community Hot Topics
*   **Sub-Agent Visibility (#1955):**
    *   **Link:** [Issue #1955](https://github.com/HKUDS/nanobot/issues/1955)
    *   **Discussion:** Users are asking for "transparent" sub-agent execution. Currently, while the main agent's thought process is visible, sub-agets function as a "black box." This indicates a user need for deeper observability into recursive agent tasks.
*   **Runtime Provider Switching (#1954):**
    *   **Link:** [Issue #1954](https://github.com/HKUDS/nanobot/issues/1954)
    *   **Discussion:** Users want to dynamically switch LLM providers mid-conversation (e.g., via Feishu) rather than relying solely on static admin configurations.
*   **XMPP Channel Support (#1945):**
    *   **Link:** [PR #1945](https://github.com/HKUDS/nanobot/pull/1945)
    *   **Discussion:** A draft PR adding XMPP support (Snikket/Conversations) has gained attention, highlighting demand for federated messaging protocols.

### 5. Bugs & Stability
*   **Critical: DashScope/Alibaba Cloud Compatibility:**
    *   **Issue:** [#1927](https://github.com/HKUDS/nanobot/issues/1927)
    *   **Impact:** High. The DashScope API does not support `tool_choice="required"`, causing memory archival failures and session errors.
*   **High: Ollama Provider Regression:**
    *   **Issue:** [#1947](https://github.com/HKUDS/nanobot/issues/1947)
    *   **Impact:** High. Local Ollama instances are breaking due to API Key validation errors even when a dummy key is provided. A fix is pending in **PR #1983**.
*   **Medium: Context Window Overflow:**
    *   **Issue:** [#1979](https://github.com/HKUDS/nanobot/issues/1979)
    *   **Impact:** Medium. Long sessions exceed model context limits, resulting in `ContextWindowExceededError` without recovery.
*   **Low: UI/UX Glitches:**
    *   **Issue:** [#1956](https://github.com/HKUDS/nanobot/issues/1956)
    *   **Impact:** Low. CLI output formatting artifacts ("nanobot is thinking...") not clearing correctly.

### 6. Feature Requests & Roadmap Signals
*   **Enhanced Azure Auth:** **PR #1987** proposes adding Entra ID OAuth support for the Azure OpenAI provider, moving beyond simple API keys.
*   **Runtime Diagnostics:** **PR #1985** proposes a `/status` command to view runtime info (model, health, version) directly in chat, useful for VPS users.
*   **Sub-Agent Context Isolation:** **PR #1935** suggests adding a `working_dir` parameter to the `spawn` tool, allowing sub-agents to operate within specific project folders and inherit local `AGENTS.md` configs.
*   **Skill Toggling:** **PR #1934** allows users to disable specific skills via frontmatter (`enabled: false`) instead of deleting them.
*   **Turn Control:** **PR #1246** proposes an explicit "end_turn" tool call to prevent the model from ending conversations prematurely.

### 7. User Feedback Summary
*   **Frustration with Instability:** Users report that recent post-releases (e.g., `v0.1.4.post2`) have introduced regressions, such as breaking Kimi K2.5 model compatibility ([#1139](https://github.com/HKUDS/nanobot/issues/1139)) and MCP service integration ([#1951](https://github.com/HKUDS/nanobot/issues/1951)).
*   **Complexity vs. Control:** Advanced users appreciate the architectural changes (like the Channel Plugin system) but feel that documentation and migration paths are lagging behind the code changes.
*   **Multi-Modal Execution Issues:** Reports of `exec` tool failures with `npx` due to read-only file system flags in `/tmp` ([#1948](https://github.com/HKUDS/nanobot/issues/1948)) suggest containerization permissions need review.

### 8. Backlog Watch
*   **Long-standing Integration:** **PR #126** (GitHub Actions for Docker builds) and **PR #1368** (A2A Protocol Channel) remain open and active, indicating ongoing infrastructure work that hasn't yet been merged.
*   **Generic Calendar Abstraction:** **PR #247** (Refactoring CalendarProvider) remains open, suggesting a stalled but potentially valuable improvement for calendar tools.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Project Digest: ZeroClaw
**Date:** 2026-03-14
**Analyst:** AI Agent & Open Source Analyst

## 1. Today's Overview
ZeroClaw is experiencing a high-velocity development cycle, transitioning through a complex default branch migration (`main` -> `master`). The project shows robust health with **50 Pull Requests** and **37 Issues** updated in the last 24 hours. The team is aggressively addressing technical debt and feature gaps, merging 41 PRs, including critical platform support for Windows and a comprehensive documentation internationalization effort. However, the rapid branch switching has caused temporary friction, leading to reports of missing features (MCP) and compilation issues on specific architectures.

## 2. Releases
Two beta versions were released today, focusing on compatibility and documentation expansion.

*   **v0.1.9-beta.140**
    *   **What's Changed:**
        *   **I18n Expansion:** Added documentation hub translations for all 30 languages ([PR #3450](https://github.com/zeroclaw-labs/zeroclaw/pull/3450)).
        *   **Chinese Localization:** Completed full Chinese documentation translation ([PR #3429](https://github.com/zeroclaw-labs/zeroclaw/pull/3429)).
*   **v0.1.9-beta.136**
    *   **What's Changed:**
        *   **Browser Compatibility:** Added `crypto.randomUUID` fallback for older browsers.
        *   **Ollama Fix:** Handled `reasoning_enabled` for unsupported Ollama models to prevent crashes.

## 3. Project Progress
The project made significant strides in platform support, dynamic capability discovery, and user experience.

*   **Platform Support:**
    *   **Windows Support:** Merged [PR #3442](https://github.com/zeroclaw-labs/zeroclaw/pull/3442) to add native Windows support for shell tool execution using `cmd.exe /C` and updated the CI build matrix to include Windows MSVC ([PR #3449](https://github.com/zeroclaw-labs/zeroclaw/pull/3449)).
    *   **Test Stability:** Fixed Windows test deadlocks related to the onboarding wizard in [PR #3390](https://github.com/zeroclaw-labs/zeroclaw/pull/3390).
*   **Architecture & Extensibility:**
    *   **Dynamic Discovery:** Implemented "OpenClaw" style dynamic node discovery and capability advertisement in [PR #3448](https://github.com/zeroclaw-labs/zeroclaw/pull/3448), allowing external processes to register tools at runtime via WebSocket.
    *   **MCP Optimization:** Merged [PR #3446](https://github.com/zeroclaw-labs/zeroclaw/pull/3446) to enable on-demand MCP tool loading via `tool_search`, significantly reducing context window bloat.
*   **User Experience (UX):**
    *   **Dashboard Overhaul:** Merged [PR #3445](https://github.com/zeroclaw-labs/zeroclaw/pull/3445), introducing an "Electric Blue" restyle with glassmorphism and animations.
    *   **Draft Preservation:** Fixed a UX pain point where draft messages were lost when switching views ([PR #3443](https://github.com/zeroclaw-labs/zeroclaw/pull/3443)).
    *   **Session Persistence:** Added state persistence for interactive CLI sessions in [PR #3421](https://github.com/zeroclaw-labs/zeroclaw/pull/3421).

## 4. Community Hot Topics
The community is actively discussing the recent branch strategy changes and missing enterprise features.

*   **Branch Confusion ([#3131](https://github.com/zeroclaw-labs/zeroclaw/issues/3131), 👍 4):**
    *   *Discussion:* Users expressed confusion over the divergent `main`, `master`, `dev`, and `main-fix` branches.
    *   *Underlying Need:* Clear communication from maintainers regarding the authoritative branch for stable production deployments.
*   **Missing MCP Support in Master ([#3379](https://github.com/zeroclaw-labs/zeroclaw/issues/3379), #3397):**
    *   *Discussion:* Reports that the switch to `master` temporarily dropped MCP support and `agent_ipc`.
    *   *Underlying Need:* Ensuring feature parity during the migration to the new default branch to prevent breaking existing agent workflows.
*   **Windows Wizard Deadlock ([#3451](https://github.com/zeroclaw-labs/zeroclaw/pull/3451)):**
    *   *Discussion:* A critical bug where the onboarding wizard causes a deadlock in non-interactive environments on Windows.
    *   *Underlying Need:* Robustness in CLI automation and testing environments.

## 5. Bugs & Stability
Several high-severity bugs were identified, primarily stemming from the recent branch refactoring and platform-specific edge cases.

1.  **[S1 - Critical] Compilation Failures on 32-bit targets:**
    *   **Issue:** [#3452](https://github.com/zeroclaw-labs/zeroclaw/issues/3452) (AtomicU32 in channels) and [#3430](https://github.com/zeroclaw-labs/zeroclaw/issues/3430) (AtomicU64 in mcp_client).
    *   **Status:** Fix pending for `channels` module; `mcp_client` fix merged in #3409 but missed one spot.
2.  **[S1 - Workflow Blocked] Matrix Channel Compilation:**
    *   **Issue:** [#3425](https://github.com/zeroclaw-labs/zeroclaw/issues/3425) - Build fails with `matrix-sdk` feature flag due to missing `Relation` import.
    *   **Fix:** Merged in [PR #3368](https://github.com/zeroclaw-labs/zeroclaw/pull/3368).
3.  **[S2 - Degraded] Missing `channel-matrix` Flag:**
    *   **Issue:** [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) - Impossible to setup Matrix agent in released builds.
4.  **[S0 - Data Loss/Risk] Stale Tool Results:**
    *   **Issue:** [#3402](https://github.com/zeroclaw-labs/zeroclaw/issues/3402) - Heartbeat mechanism injects stale `tool_result` into new sessions, causing agent hallucination.

## 6. Feature Requests & Roadmap Signals
User demand is focusing on enterprise integrations, customization, and cron observability.

*   **LinkedIn Integration:** High interest in the native LinkedIn tool with OAuth2 and multi-provider image generation ([PR #3400](https://github.com/zeroclaw-labs/zeroclaw/pull/3400)). Likely to appear in upcoming releases.
*   **WeCom (WeChat Enterprise) Support:** Request for a native channel provider in [#3396](https://github.com/zeroclaw-labs/zeroclaw/issues/3396).
*   **Cron History:** Request to add cron run history to the API and dashboard ([#3299](https://github.com/zeroclaw-labs/zeroclaw/issues/3299)) for debugging.
*   **Customization:**
    *   Custom API path suffix for non-standard OpenAI-compatible providers ([#3125](https://github.com/zeroclaw-labs/zeroclaw/issues/3125)). *Note: This was merged today in [PR #3447](https://github.com/zeroclaw-labs/zeroclaw/pull/3447).*
    *   Configurable reaction emojis (disable 👀/✅) ([#3403](https://github.com/zeroclaw-labs/zeroclaw/issues/3403)).

## 7. User Feedback Summary
*   **Positive:** Users appreciate the rapid pace of development and the increasing language support (Chinese).
*   **Negative:** The branch migration (`main` -> `master`) caused significant disruption, with users reporting "data loss" (lost configs/features) and confusion. The Windows experience is historically fragile, though improvements are landing today.
*   **Pain Points:**
    *   **Configuration Complexity:** Users struggle with `workspace_only` + `allowed_roots` conflicts ([#3082](https://github.com/zeroclaw-labs/zeroclaw/issues/3082)).
    *   **Observability:** Users want "verbose mode" to see what the agent is "thinking" ([#3316](https://github.com/zeroclaw-labs/zeroclaw/issues/3316)), indicating a lack of trust or transparency in agent reasoning.

## 8. Backlog Watch
The following items remain open and may require triage or community contribution:

*   **Bridge Channel WebSocket:** [PR #3401](https://github.com/zeroclaw-labs/zeroclaw/pull/3401) aims to restore functionality lost when the `dev` branch was deleted. This is critical for third-party integrations.
*   **MCP Tools for Subagents:** Issue [#3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069) highlights that MCP tools are not properly passed to delegate subagents, limiting multi-agent workflows.
*   **Slack Thread Support:** The Slack adapter missing inline thread replies ([#3084](https://github.com/zeroclaw-labs/zeroclaw/issues/3084)) remains a gap for enterprise collaboration users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Project Digest: PicoClaw (2026-03-14)

## 1. Today's Overview
PicoClaw is experiencing a **high-velocity development cycle** driven by a major architectural refactor ("Agent Refactor"). With 109 PRs and 35 issues updated in the last 24 hours, the project is in an active expansion phase, focusing on modularity, security hardening, and provider extensibility. The community is highly engaged, debating core semantic changes (like `SOUL.md` vs `AGENT.md`) while reporting friction with local model configurations (Ollama). A new nightly build (`v0.2.2-nightly`) has been released to test these rapid changes.

## 2. Releases
*   **nightly (v0.2.2-nightly.20260313.19835b2f)**
    *   **Status**: Automated unstable build.
    *   **Context**: This release supports the influx of new features and refactoring efforts discussed below. Users on the `main` branch are testing significant changes to agent loops and tool execution.

## 3. Project Progress
*   **Agent Refactoring & Steering**:
    *   **PR #1517** introduces "Agent Steering," allowing users to redirect or interrupt agents mid-execution, moving the agent loop from a "black box" to an event-driven system.
    *   **Issue #1316** details the architectural shift towards an event-driven loop with hooks and interrupts.
*   **Capabilities & Discovery**:
    *   **Issue #1474** proposes endpoints for capability discovery, aiding orchestration layers.
*   **Media Handling**:
    *   **PR #1516** advances support for exposing local file paths for non-image media (e.g., PDFs, audio) to agents, enabling file processing tools (Issue #1506).
*   **Documentation & Localization**:
    *   **PR #1448** adds a full Spanish translation of the README.
    *   **PR #1519** and **PR #1523** address documentation gaps regarding Python script skills and advanced configuration fields.
*   **Performance**:
    *   **PR #1518** optimizes the cron service to reduce CPU overhead on small hardware.

## 4. Community Hot Topics
*   **[Debate] Agent Definition & Configuration**
    *   **Issue #1218** [24 comments]: *Defining "Agent" with `SOUL.md` and `AGENT.md`.* The community is actively discussing how to standardize agent personality versus configuration.
    *   **Issue #1316** [9 comments]: *Event-driven agent loop.* Users are debating the technical implementation of hooks and interrupts.
*   **[Pain Point] Local Model Configuration**
    *   **Issue #1161** [17 comments]: *Ollama integration produces no response.* A significant number of users are struggling to configure local models correctly, indicating a need for better documentation or default configuration templates for local LLMs.
*   **[Request] Channel Integration**
    *   **Issue #1372** [2 comments]: *Request for OpenIM plugin.* Users are asking for more messaging platform support beyond the current standard set.

## 5. Bugs & Stability
*   **[High Severity] Security Defaults**
    *   **Issue #1530**: *Pico setup enables weak auth defaults.* The `POST /api/pico/setup` endpoint currently enables wildcard origins and token query auth by default, expanding the attack surface.
    *   **Issue #1529**: *Public web mode lacks IP restriction.* The web console may be exposed without authentication if `allowed_cidrs` is empty.
    *   **Issue #1527**: *Weak file permissions.* JSONL session stores use `0644` permissions, potentially exposing private chat logs.
    *   **Issue #1526**: *Symlink escapes in exec tool.* Even with workspace restrictions, the `exec` tool can follow symlinks outside the workspace.
    *   **Issue #1525**: *Remote execution enabled by default.* `tools.exec.allow_remote` defaults to `true`, posing a high risk for remote chat contexts.
*   **[Functional] Connectivity & Routing**
    *   **Issue #1437**: *Feishu connectivity issues via mobile hotspot.* Network instability causes message delivery failures.
    *   **Issue #1493**: *Model reloading requires Gateway restart.* New models added to the config don't take effect until a restart.
    *   **Issue #1150**: *Pool factory panic.* Can cause permanent deadlocks for specific targets.

## 6. Feature Requests & Roadmap Signals
*   **Provider Support**:
    *   **Issue #1424**: Request for **Azure OpenAI** provider support.
    *   **Issue #1438**: Request for **MoCang (魔搭社区)** model integration.
*   **Speech & Audio**:
    *   **Issue #1503**: Request for **pluggable Speech I/O providers** (STT/TTS) to replace the hard-wired Groq Whisper implementation, potentially enabling local STT.
*   **Privacy**:
    *   **Issue #1528**: Request for a config switch to **disable transcript persistence** for privacy-sensitive setups.

## 7. User Feedback Summary
*   **Configuration Complexity**: Users are experiencing "config hell," particularly regarding model selection (`glm-4.7` errors in #1491) and legacy provider migration (#1513).
*   **Documentation Gaps**: There is a clear disconnect between the available features (e.g., skills, cron) and the documented examples. Users are asking how to view scheduled tasks (#1501) and how to use local models (#1161).
*   **Security Concerns**: There is a strong focus on "secure-by-default" configuration, with multiple issues opened today regarding file permissions, exposed web consoles, and remote execution settings.

## 8. Backlog Watch
*   **Issue #1216 (Meta: Agent refactor)**: The meta-tracking issue for the massive agent overhaul. This is the root cause of many current architectural shifts and requires high-level attention.
*   **Issue #269**: Anthropic/Claude API integration failing with 404 errors.
*   **Issue #528**: Cron scheduling issues via chat (dating back to February) remain unresolved.
*   **PR #751**: WebSocket interface implementation for the Gateway (referencing OpenClaw) has been open since late February and is pending review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-14

## 1. Today's Overview
NanoClaw is experiencing a **high-velocity development cycle**, with 18 issues and 37 pull requests updated in the last 24 hours alone. The project appears to be in a stabilization phase for its multi-channel architecture, addressing critical bugs related to credential management, container volume mounts, and WhatsApp stability. There is strong community contribution on features like long-term memory (LanceDB) and new channels (Signal, Nostr), though several PRs are currently blocked or waiting for review. The rapid influx of issues highlights growing pains as the system scales to support more complex agent workflows.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
While 16 PRs were merged or closed, specific details for merged changes were not fully enumerated in the provided data. However, significant movement occurred on the `open` side of the ledger:

*   **Security Hygiene**: PRs #1035, #1036, and #1048 address critical security needs, including sanitizing web tool outputs to prevent prompt injection and fixing high-severity NPM dependency vulnerabilities.
*   **Core Infrastructure**: PR #1043 proposes a major upgrade to the memory subsystem, replacing standard vector search with `memory-lancedb-pro` for hybrid BM25+vector retrieval.
*   **Credential Reliability**: PR #1044 introduces immediate validation of Claude tokens during setup, preventing silent configuration failures.

## 4. Community Hot Topics
*   **Security & Prompt Injection** ([PR #1035](https://github.com/qwibitai/nanoclaw/pull/1035)): There is intense focus on securing "WebFetch" and "WebSearch" tools. Multiple authors (clawtom) are pushing for `PostToolUse` hooks to sanitize outputs, noting that adversarial inputs from the web are already manipulating agent behavior in the wild.
*   **Long-term Memory** ([PR #979](https://github.com/qwibitai/nanoclaw/pull/979), [Issue #908](https://github.com/qwibitai/nanoclaw/issues/908)): A major community desire is for persistent memory. Developers are actively working on integrating LanceDB and SQLite FTS5 to allow agents to recall past conversations and user preferences across sessions.
*   **New Channels** ([PR #1023](https://github.com/qwibitai/nanoclaw/pull/1023), [PR #1041](https://github.com/qwibitai/nanoclaw/pull/1041)): There is significant demand for interoperability beyond WhatsApp. Contributors are racing to add support for Signal (via signal-cli) and Nostr DMs (NIP-17), expanding NanoClaw's utility in privacy-conscious circles.

## 5. Bugs & Stability
**Critical Severity:**
*   **Service Crashes on WhatsApp** ([Issue #1047](https://github.com/qwibitai/nanoclaw/issues/1047)): The WhatsApp handler calls `process.exit()`, making the service unrecoverable on session expiry or QR generation (non-macOS). **Fix Pending:** [PR #1050](https://github.com/qwibitai/nanoclaw/pull/1050).
*   **Duplicate Messages** ([Issue #1020](https://github.com/qwibitai/nanoclaw/issues/1020)): Users receive two different replies for every message due to the SDK returning multiple results. No fix PR is explicitly linked yet.

**High Severity:**
*   **Missing Credentials in Scheduled Tasks** ([Issue #1046](https://github.com/qwibitai/nanoclaw/issues/1046)): Scheduled tasks fail because MCP credential mounts (Gmail, etc.) are gated behind `isMain` and don't forward `isScheduledTask`. **Fix Pending:** [PR #1049](https://github.com/qwibitai/nanoclaw/pull/1049).
*   **Silent Token Failures** ([Issue #1045](https://github.com/qwibitai/nanoclaw/issues/1045)): Invalid API keys are not caught during setup, causing failures only at runtime. **Fix Pending:** [PR #1044](https://github.com/qwibitai/nanoclaw/pull/1044).

## 6. Feature Requests & Roadmap Signals
*   **FTS5 Conversation Search** ([Issue #908](https://github.com/qwibitai/nanoclaw/issues/908)): Users want agents to be able to recall past conversations via keyword search.
*   **Prompt Caching** ([Issue #1033](https://github.com/qwibitai/nanoclaw/issues/1033)): A community member inquired about integrating prompt caching to reduce Anthropic API spend by up to 90%.
*   **Sandbox Expansion** ([Issue #520](https://github.com/qwibitai/nanoclaw/issues/520)): There is a proposal to add `BoxLite` (micro-VM) as an optional sandbox backend for extra isolation, though this has low priority.

## 7. User Feedback Summary
*   **Pain Point - Configuration**: Users are struggling with authentication. Issues range from confusing phone number prompts ([Issue #447](https://github.com/qwibitai/nanoclaw/issues/447)) to OAuth tokens expiring every few hours ([Issue #1029](https://github.com/qwibitai/nanoclaw/issues/1029)).
*   **Pain Point - Hallucination**: Users reported agents "faking tool calls" ([Issue #829](https://github.com/qwibitai/nanoclaw/issues/829)) or failing basic logic tasks like determining the day of the week from ISO timestamps ([Issue #698](https://github.com/qwibitai/nanoclaw/issues/698)).
*   **Feature Interest**: There is curiosity about support for other LLM providers (e.g., DeepInfra/GLM), though the user noted compatibility issues ([Issue #1015](https://github.com/qwibitai/nanoclaw/issues/1015)).

## 8. Backlog Watch
*   **Documentation Debt**: Critical security documentation regarding "Indirect Prompt Injection Risks" has been open since Feb 23 ([Issue #411](https://github.com/qwibitai/nanoclaw/issues/411)).
*   **Read-Only Path Confusion**: A long-standing documentation bug instructs the main agent to write to `/workspace/project`, which is mounted read-only ([Issue #527](https://github.com/qwibitai/nanoclaw/issues/527)).
*   **Template Logic**: The "good first issue" regarding preventing agents from fabricating tool execution claims remains open ([Issue #829](https://github.com/qwibitai/nanoclaw/issues/829)).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-03-14

## 1. Today's Overview
NullClaw is experiencing a **high-velocity development cycle**, with significant focus on platform stability, integration, and user onboarding. The project merged 36 PRs and released two versions (`v2026.3.12` & `v2026.3.13`) within 24 hours, indicating a rapid response to emerging bugs and technical debt. The community is highly active, engaging heavily with documentation gaps and advanced configuration features like Subagents and MCP. Platform-specific support for Windows and Termux has improved, while the core gateway and agent capabilities have been hardened for production use.

## 2. Releases
**v2026.3.13** (Released 2026-03-13)
*   **Agent Reliability:** Fixed an issue where agents would immediately retry after hitting rate limits (PR #474).
*   **Documentation:** Enhanced instructions for Windows users running the binary directly (PR #479).
*   **Upstream:** Includes changes from `v2026.3.12`.

**v2026.3.12** (Released 2026-03-13)
*   **Lark Stability:** Fixed a bus error in the Lark (Feishu) WebSocket thread by adjusting the runtime stack size (Issue #477/PR #436).
*   **Telegram Hardening:** Improved forum topic handling and configurable command menus.

## 3. Project Progress
*   **Gateway & Tunneling:** The native tunnel module (Cloudflare/ngrok/Tailscale) was integrated into the gateway startup process, resolving a gap where the code existed but wasn't connected to the runtime ([PR #502](https://github.com/nullclaw/nullclaw/pull/502)).
*   **Platform Support:**
    *   **Windows:** Fixed a critical service startup failure (Error 1053) by implementing a proper Service Control Handler ([PR #467](https://github.com/nullclaw/nullclaw/pull/467)).
    *   **Microsoft Teams:** A full implementation of the Teams channel via Bot Framework v4 was merged ([PR #438](https://github.com/nullclaw/nullclaw/pull/438)).
*   **Session Management:** Fixed a regression in named-agent sessions (introduced in PR #450) that caused agent bindings to fail silently ([PR #500](https://github.com/nullclaw/nullclaw/pull/500)).
*   **Configuration:** Added auto-detection for file paths in agent `system_prompt` configs, allowing external file references ([PR #459](https://github.com/nullclaw/nullclaw/pull/459)).
*   **Discovery:** Integrated `models.dev` API for model discovery during onboarding ([PR #480](https://github.com/nullclaw/nullclaw/pull/480)).

## 4. Community Hot Topics
*   **Documentation Gaps (Advanced Features):** Users are urgently requesting guides for **MCP** (Model Context Protocol) and **Subagent** configuration.
    *   [Issue #497](https://github.com/nullclaw/nullclaw/issues/497) (MCP Docs)
    *   [Issue #508](https://github.com/nullclaw/nullclaw/issues/508) (Subagent Docs)
    *   *Analysis:* Despite the code working, users cannot leverage "power features" without examples, particularly regarding binding and routing.
*   **Windows Usability:** A strong focus on Windows binary usage, specifically regarding PATH configuration and service management.
    *   [Issue #17](https://github.com/nullclaw/nullclaw/issues/17) (Termux/Android guide - Closed)
    *   [Issue #504](https://github.com/nullclaw/nullclaw/issues/504) (`--help` flag starts runtime - Open)
*   **Slack Interactivity:** Users reported that interactive buttons in Slack HTTP mode were broken due to state loss between requests ([PR #505](https://github.com/nullclaw/nullclaw/pull/505)).

## 5. Bugs & Stability
*   **WebSocket Instability (Critical):** Users reported "random disconnects" on Lark/Feishu (Issue #477). This was addressed in `v2026.3.12` by fixing the WebSocket thread stack size.
*   **Slack Callback Failures:** Interactive buttons in Slack failed because `pending_interactions` were stored in instance memory and lost between HTTP requests. **Status:** Fixed in [PR #505](https://github.com/nullclaw/nullclaw/pull/505).
*   **OneBot Websocket Loop:** OneBot channel was not running the WebSocket gateway loop correctly. **Status:** Fixed in [PR #469](https://github.com/nullclaw/nullclaw/pull/469).
*   **CLI UX Regression:** Running `nullclaw gateway --help` accidentally starts the gateway instead of showing help text ([Issue #504](https://github.com/nullclaw/nullclaw/issues/504)).
*   **Rate Limiting:** Users reported "Rate limit exceeded" errors with Alibaba's coding plan, even with low usage ([Issue #341](https://github.com/nullclaw/nullclaw/issues/341)).

## 6. Feature Requests & Roadmap Signals
*   **Tunneling Support:** Request to make the local web channel accessible via tunnels (Cloudflare/Nginx) directly from the gateway. **Status:** Implemented in [PR #502](https://github.com/nullclaw/nullclaw/pull/502).
*   **Telegram Enhancements:** Users want support for voice messages and file attachments to be forwarded to the agent, rather than being silently dropped ([Issue #503](https://github.com/nullclaw/nullclaw/issues/503)).
*   **Qwen OAuth:** Request to add native support for Qwen CLI OAuth tokens, similar to the Gemini provider ([Issue #492](https://github.com/nullclaw/nullclaw/issues/492)).
*   **Self-Hosting Module:** A feature request to allow NullClaw to self-host privacy software (e.g., Invidious) on .onion/.i2p domains via a simple command ([Issue #485](https://github.com/nullclaw/nullclaw/issues/485)).

## 7. User Feedback Summary
*   **Positive:** Users appreciate the rapid pace of development and the expanding ecosystem integrations (Lark, DingTalk, Teams). The "Termux" request and Android support indicate a desire for lightweight, mobile-friendly hosting solutions.
*   **Pain Points:**
    *   **Documentation is the primary bottleneck.** Advanced features (MCP, Subagents, Identity definitions) are technically implemented but lack "How-to" guides, frustrating users trying to configure complex workflows.
    *   **Platform Inconsistencies:** Windows users are facing friction with binary setup and service management compared to Linux/Mac.
    *   **Tool Reliability:** Breakages in tool calls (file reading, weather skills) and specific channel bugs (Slack interactivity) indicate that while the core is stable, edge cases in integrations need attention.

## 8. Backlog Watch
*   **Docs Urgency:** Issues #497 (MCP) and #508 (Subagents) were closed by the maintainer but immediately re-opened or duplicated (#508) because the user felt the documentation was still insufficient. This requires a dedicated documentation pass to prevent user churn.
*   **Feature Completeness:** [Issue #376](https://github.com/nullclaw/nullclaw/issues/376) (DingTalk receiving messages) and [Issue #503](https://github.com/nullclaw/nullclaw/issues/503) (Telegram attachments) represent gaps in channel parity. The DingTalk issue specifically notes "send only" status in the logs.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-14

## 1. Today's Overview
IronClaw is currently in a phase of **high-velocity development** focused on architectural refactoring and stability. The project shows exceptional activity with **50 Pull Requests** and **25 Issues** updated in the last 24 hours. Development efforts are heavily concentrated on **"Pattern A" Edge hardware support** and **multi-tenancy security fixes**, though critical performance issues (ReDoS risks and $O(n^2)$ memory allocations) have been flagged by the CI bot. While no new releases were published today, the merge queue is active with significant features like **Feishu integration** and **Telegram owner verification** ready for review.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
*   **Multi-Tenant Auth & Isolation:** Significant advancement on the security front. **PR #1118** (Multi-tenant auth) and **PR #1117** (Multi-scope workspace reads) have been updated/rebased. These are critical for addressing data isolation vulnerabilities similar to #760.
*   **Channel Expansions:** A new **Feishu/Lark WASM channel plugin** ([#1110]) is ready for review, featuring event subscription v2.0 and token exchange.
*   **CLI & Management:** New CLI commands are being implemented to manage the gateway lifecycle ([#1050]) and model configurations ([#1043]), improving operator control over the agent.
*   **Registry Refactoring:** **PR #1144** moves hardcoded MCP server definitions into data-driven JSON manifests, improving maintainability and reducing technical debt.

## 4. Community Hot Topics
*   **Routines Reliability Crisis:** There is high user friction regarding **Event-triggered routines**. Users report that routines created to trigger on specific messages (e.g., Telegram keywords) **never fire** ([#1051]). This is compounded by a separate bug where the UI displays raw cron expressions instead of human-readable text ([#1131], PR fix: [#1154]).
*   **Tool Execution Failures:** Users are experiencing "silent failures" with tools like Google Sheets, where spreadsheets are created but left empty ([#1002]), and failures with Telegram token validation ([#991]).
*   **Platform Compatibility:** Specific compatibility issues with the **kimi-k2.5** model (temperature limits) ([#728]) and environment variable handling for OpenAI-compatible backends ([#1116]) are active discussion points.

## 5. Bugs & Stability
*   **[CRITICAL - Performance] ReDoS & Memory Risks:**
    *   **ReDoS Risk:** Malicious regex patterns in event triggers can cause exponential backtracking ([#825]).
    *   **Memory Allocation:** The hot SSE parsing path suffers from $O(n^2)$ string allocations ([#1142]), and OAuth error handling incorrectly stores static strings ([#1141]). *Fix PRs exist ([#1152], [#1153]).*
*   **[HIGH] Routines Engine Breaking:** Event-triggered routines are currently non-functional for multiple users ([#1051]), effectively breaking a core automation feature.
*   **[MEDIUM] Safari IME Bug:** Pressing Enter to confirm Chinese/Japanese/Korean text input in Safari inadvertently sends the message ([#1139]).
*   **[MEDIUM] Authentication Flakiness:** Intermittent auth failures occur when Anthropic OAuth tokens expire mid-conversation ([#1136]).

## 6. Feature Requests & Roadmap Signals
*   **Image Support:** Strong demand for Vision capabilities. Users explicitly requested JPEG/PNG upload support to analyze images ([#1122], [#1123]).
*   **Slack "Socket Mode":** Users want to use Slack Socket Mode to avoid opening inbound webhooks/firewalls ([#1155]).
*   **BYOK (Bring Your Own Key):** There are requests to formalize support for custom model configurations beyond the default backend ([#1027]).
*   **Suggestion Chips:** **PR #1156** indicates a move towards a more interactive UI, adding follow-up suggestion chips and "ghost text" to guide user interactions.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by **"silent failures"**—specifically where tools (Sheets, Telegram) appear to execute but produce no results or vague errors.
*   **Workflow Friction:** The requirement to manage raw cron expressions for scheduling is a barrier to entry; the community is responding quickly with UI improvements ([#1154]).
*   **Hardware Integration:** Interest is growing in **Edge/IoT use cases**. The acceptance of the "Pattern A" MCP GPIO Daemon architecture ([#134]) suggests a viable path for running IronClaw on Raspberry Pi devices without breaking WASM security.

## 8. Backlog Watch
*   **Auth & Security:** **PR #1118** (Multi-tenant auth) is a rebased refile of #351 and needs immediate attention to close security gaps regarding context pollution.
*   **Core Compatibility:** **Issue #728** (Kimi-k2.5 compatibility) remains open after 5 days with 3 upvotes, blocking users of this model.
*   **Infrastructure:** **Issue #764** (Machine capacity alerts) is closed but highlights a gap in infra monitoring.

**Links:**
[#1051]: https://github.com/nearai/ironclaw/issues/1051
[#1131]: https://github.com/nearai/ironclaw/issues/1131
[#1154]: https://github.com/nearai/ironclaw/pull/1154
[#1110]: https://github.com/nearai/ironclaw/pull/1110
[#825]: https://github.com/nearai/ironclaw/issues/825
[#1142]: https://github.com/nearai/ironclaw/issues/1142

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for **LobsterAI** as of **2026-03-14**.

### 1. Today's Overview
The project is currently in a highly active **development sprint** phase, focusing heavily on backend refactoring and integration with the OpenClaw ecosystem, rather than publishing stable releases. While 9 Pull Requests were merged today involving complex architectural changes (MCP bridges, gateway optimization, and sandbox removal), no new binary releases were published, resulting in a surge of user-reported issues (12 updated in 24h). There is a visible **stability gap** emerging: advanced features like "OpenClaw" and "MCP" are being merged rapidly, but the frontend experience and local model integration are lagging, causing friction for users attempting to run local agents (e.g., Ollama/Qwen).

### 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   **Note:** Given the merging of features like OpenClaw plugin preinstall systems and memory migration, a new version (likely `0.2.5` or `0.3.0`) appears to be pending to stabilize these significant backend changes.

### 3. Project Progress
**Merged/Closed PRs (9 items):**
The core engineering team focused almost exclusively on **OpenClaw Integration** and **Performance Optimization** today.

*   **Infrastructure & Performance:**
    *   **Gateway Startup Optimization:** ([#395](https://github.com/netease-youdao/LobsterAI/pull/395)) Successfully reduced OpenClaw gateway startup time in Windows Electron from **180s+ to ~15s** (subsequent runs) via esbuild bundling and compile caching.
    *   **Deduplication & Sync:** ([#401](https://github.com/netease-youdao/LobsterAI/pull/401)) Fixed duplicate gateway startup processes and channel message syncing issues.
*   **Feature Integration (OpenClaw):**
    *   **MCP Bridge:** ([#408](https://github.com/netease-youdao/LobsterAI/pull/408)) Implemented a bridge allowing LobsterAI's MCP servers (Tavily, Context7, etc.) to function as tools in OpenClaw's embedded agent mode.
    *   **IM Plugins:** ([#346](https://github.com/netease-youdao/LobsterAI/pull/346)) Established a system to pre-install and auto-sync config for IM channel plugins (DingTalk, Feishu, QQ, WeCom).
    *   **Memory & Settings:** ([#411](https://github.com/netease-youdao/LobsterAI/pull/411), [#412](https://github.com/netease-youdao/LobsterAI/pull/412)) Migrated settings memory to store in OpenClaw's `MEMORY.md` and forced local execution mode to fix Docker errors for existing users.
*   **Maintenance:**
    *   **Scheduled Tasks:** ([#409](https://github.com/netease-youdao/LobsterAI/pull/409), [#410](https://github.com/netease-youdao/LobsterAI/pull/410)) Added support for OpenClaw in scheduled tasks and fixed deletion errors.
    *   **Sandbox Removal:** ([#403](https://github.com/netease-youdao/LobsterAI/pull/403)) Removed the built-in sandbox and merged prompts with OpenClaw defaults.

### 4. Community Hot Topics
*   **Local Model Skill Calling Failure (High Impact)**
    *   **Issue:** [#112](https://github.com/netease-youdao/LobsterAI/issues/112)
    *   **Discussion:** Users cannot invoke skills via natural language when using local models (Ollama + Qwen), whereas API models work fine. This blocks a primary use case for privacy-conscious users.
*   **Sandbox Startup Failures**
    *   **Issue:** [#402](https://github.com/netease-youdao/LobsterAI/issues/402)
    *   **Discussion:** Users on Debian 12 (ESXi VMs) report the app auto-exits immediately after launch. *Analysis: This likely relates to PR #403 which removed the built-in sandbox; users may be on a version that doesn't handle the transition gracefully or lack required dependencies.*
*   **Scheduled Task Cron Errors**
    *   **Issue:** [#407](https://github.com/netease-youdao/LobsterAI/issues/407)
    *   **Discussion:** A Mac mini user reports that the UI generates incorrect Cron expressions for a "every 10 minutes" task.

### 5. Bugs & Stability
*   **Critical: Token Count Context Errors**
    *   **Issue:** [#370](https://github.com/netease-youdao/LobsterAI/issues/370)
    *   **Details:** Simple inputs like "Hello" are triggering `API Error: 400` claiming the input limit (8961 tokens) was exceeded.
    *   **Severity:** High; blocks basic chat functionality.
*   **High: Tool Calling Broken for Local Models**
    *   **Issue:** [#405](https://github.com/netease-youdao/LobsterAI/issues/405), [#112](https://github.com/netease-youdao/LobsterAI/issues/112)
    *   **Details:** Local models (DeepSeek, Qwen) can chat but fail to execute system commands (e.g., list directory files), even with `"tools": { "profile": "full" }` set.
*   **Medium: Premature Task Completion**
    *   **Issue:** [#358](https://github.com/netease-youdao/LobsterAI/issues/358)
    *   **Details:** Agent tasks finish early and require manual "Continue" prompts to resume execution loops.
*   **Medium: API Connection Failures**
    *   **Issue:** [#406](https://github.com/netease-youdao/LobsterAI/issues/406) (Baidu Qianfan CodingPlan), [#399](https://github.com/netease-youdao/LobsterAI/issues/399) (Aliyun Bailian GLM 4.5).

### 6. Feature Requests & Roadmap Signals
*   **Custom Skill Selection:** ([#404](https://github.com/netease-youdao/LobsterAI/issues/404)) Users want to select self-created workflow skills directly via the chat UI skill button, rather than relying solely on agent intent.
*   **Performance Improvements:** ([#400](https://github.com/netease-youdao/LobsterAI/issues/400)) Frequent complaints about "mysterious waits" and slow speeds suggest the UX optimizations in PR #395 are crucial for the next release.
*   **Plugin/IM Stability:** Issues with DingTalk notifications expiring ([#285](https://github.com/netease-youdao/LobsterAI/issues/285)) indicate a need for more robust session handling in the IM channels.

### 7. User Feedback Summary
*   **Pain Points:** Users are struggling with the **hybrid nature** of the project. There is confusion between the "LobsterAI" interface, local models (Ollama), and the "OpenClaw" execution environment.
*   **Satisfaction:** Users appreciate the speed improvements (referenced in closed issues) and the potential of local agents.
*   **Dissatisfaction:** The reliability of **local model tool execution** is currently the biggest negative. Users expect local DeepSeek/Qwen models to execute commands but find them non-functional compared to cloud APIs.

### 8. Backlog Watch
*   **Legacy Sandboxes:** With the merging of PR #403 (removing built-in sandbox), issues like #402 (Sandbox won't start) need immediate documentation or guidance to ensure users know how to transition to the new execution mode.
*   **Crontab Standardization:** The UI generator for scheduled tasks (Issue #407) needs verification to ensure valid Cron syntax is generated for standard intervals.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

Here is the project digest for TinyClaw for **2026-03-14**.

### 1. Today's Overview
TinyClaw is undergoing a significant evolution with the release of version **0.0.13**, which introduces major architectural improvements to agent management and memory systems. The project demonstrates high development velocity, with 4 merged pull requests successfully consolidating agent provisioning logic and introducing a hierarchical memory system alongside a new configuration UI. While the feature set is expanding rapidly, the project is currently experiencing some growing pains regarding runtime stability (ES module errors) and identity (a pending rebrand to "TinyAGI"). Overall, the project health appears robust, moving quickly from basic functionality toward more sophisticated, multi-modal agent capabilities.

### 2. Releases
**v0.0.13**
This release marks a significant step forward in agent usability and architecture.
*   **Agent Configuration UI**: A new interface allows users to manage agent details via tabs for skills, system prompts, memory, and heartbeat monitoring.
*   **Agent Provisioning Refactor**: The codebase now consolidates workspace creation logic and utilizes symlinks for skills, reducing disk footprint and complexity.
*   **Hierarchical Memory**: Agents now possess a persistent memory system, storing knowledge as markdown files with metadata for better recall.
*   **System Prompt Handling**: `AGENTS.md` is now passed as an in-memory system prompt, eliminating file I/O overhead and staleness.
*   **Note**: Users updating should be aware of the significant changes to how agent directories and skills are structured on disk.

### 3. Project Progress
The core engine and user experience saw substantial improvements today:
*   **Agent Configuration & UX** ([#207](https://github.com/TinyAGI/tinyclaw/pull/207)): Merged a comprehensive agent configuration page, allowing granular control over skills, prompts, and heartbeat settings.
*   **Memory & Cognition** ([#209](https://github.com/TinyAGI/tinyclaw/pull/209)): Implemented a hierarchical memory system, enabling agents to save and recall information across sessions using markdown storage.
*   **Core Architecture** ([#211](https://github.com/TinyAGI/tinyclaw/pull/211), [#208](https://github.com/TinyAGI/tinyclaw/pull/208)):
    *   Refactored agent provisioning to use symlinks (`.claude/skills`), reducing redundancy.
    *   Optimized system prompt handling to be purely in-memory, resolving potential data race conditions with file-based prompts.

### 4. Community Hot Topics
The community is actively discussing the project's direction and user experience:
*   **Rebranding to TinyAGI** ([#191](https://github.com/TinyAGI/tinyclaw/pull/191)): A proposal is open to rebrand the entire codebase from "TinyClaw" to "TinyAGI." This reflects a potential shift in project identity and scope.
*   **Office Workspace Redesign** ([#212](https://github.com/TinyAGI/tinyclaw/pull/212)): A significant redesign of the `/office` experience is currently under review, aiming to improve the live workspace environment for agents.
*   **Communication Integration** ([#57](https://github.com/TinyAGI/tinyclaw/issues/57)): Users are requesting integration with mainstream communication platforms like Google Chat, Slack, and Microsoft Teams, signaling a desire to deploy TinyClaw agents in enterprise workflows.

### 5. Bugs & Stability
*   **[CRITICAL] ES Module Runtime Error** ([#210](https://github.com/TinyAGI/tinyclaw/issues/210)): A `ReferenceError: exports is not defined in ES module scope` is affecting users attempting to run commands like `tinyclaw pairing approve`. This impacts Node.js versions 20.18.2 and 24.1.0. While the issue was recently closed, it highlights instability in the build/runtime configuration following recent changes.

### 6. Feature Requests & Roadmap Signals
*   **Expanded Communication Channels**: The persistence of Issue #57 suggests that integrating with Slack, Teams, and Google Chat is a high priority for the user base.
*   **Workspace UX**: The activity in PR #212 indicates that the "Live Office" concept is a focal point for the upcoming development cycle, likely intended to make agent interaction more visual and intuitive.

### 7. User Feedback Summary
Users are pushing for broader interoperability, specifically asking for "message service options" that fit standard corporate tools (Issue #57). However, there is evidence of friction regarding the developer experience and runtime environment, as highlighted by the module scope errors (Issue #210). The request for a rebrand (PR #191) also suggests the community feels the project has outgrown its original name or scope.

### 8. Backlog Watch
*   **Integration Support**: Feature request #57 ([Add Google chat, API, and MCP comms](https://github.com/TinyAGI/tinyclaw/issues/57)), opened in February, remains open with recent comments. It represents a key gap between the current agent capabilities and practical enterprise deployment.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project digest for **Moltis** as of **2026-03-14**.

### 1. Today's Overview
The Moltis project is currently in a highly active maintenance phase, focusing heavily on resolving stability bugs and addressing technical debt. The repository shows balanced activity with 6 issues and 6 pull requests closed in the last 24 hours, indicating that the maintainers are successfully clearing the backlog. Several critical bugs reported by users—ranging from incorrect node addressing to Jinja templating errors—have already been addressed with corresponding fixes. Overall, project health appears robust, with rapid turnaround times on bug reports and active community engagement in identifying edge cases.

### 2. Latest Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
The following features and fixes have been finalized (merged/closed) today:
*   **Chat Persistence & Abort Handling:** PR #418 (by @penso) was merged, resolving an issue where stopping an agent mid-task resulted in the loss of the entire conversation context. History will now be preserved even during aborted runs.
*   **Onboarding & Auth UX:** Several merged PRs improved the first-time user experience. PR #406 fixes password manager compatibility during onboarding, and PR #415 ensures the onboarding screen remains accessible after an authentication reset.
*   **Cron Scheduling Clarity:** PR #409 was merged to clarify the UI for cron setup, renaming options to "Run Once" and adding helper text to distinguish between "System Event" and "Agent Turn" payloads.
*   **Telegram Integration:** PR #404 fixed a bug where Telegram messages would fall back to plain text but retain raw HTML tags, ensuring clean formatting in error scenarios.
*   **Documentation:** PR #402 corrected the installation instructions for the `@tobilu/qmd` dependency.

### 4. Community Hot Topics
*   **[Feature] Support for Lark/Feishu (Issue #383)**
    *   **Status:** Open
    *   **Activity:** 👍 2 reactions
    *   **Analysis:** There is a clear community demand for integrating Lark/Feishu (a popular collaboration suite) as a communication channel, similar to the existing Telegram or Discord support. This is currently the top-voted enhancement request.
    *   **Link:** [moltis-org/moltis#383](https://github.com/moltis-org/moltis/issues/383)

*   **[Bug] Vault Sealing vs. Context Access (Issue #428)**
    *   **Status:** Open
    *   **Activity:** Reported by @DanTup
    *   **Analysis:** A significant security discussion was sparked by a user discovering that full chat history is accessible via the "context" button even when the "vault is sealed." This highlights a potential misunderstanding or misconfiguration regarding privacy features and data retention.
    *   **Link:** [moltis-org/moltis#428](https://github.com/moltis-org/moltis/issues/428)

### 5. Bugs & Stability
Several bugs were reported and fixed today. Remaining high-priority open bugs include:
*   **[High Severity] Jinja Exception with Qwen Models (Issue #317):** Users of Qwen GGUF models via `llama.cpp` encounter a crash ("System message must be at the beginning") due to incompatible message formatting.
    *   *Fix Status:* A patch (PR #431) is currently **Open** and addresses this by consolidating system messages.
    *   **Link:** [moltis-org/moltis#317](https://github.com/moltis-org/moltis/issues/317)
*   **[High Severity] Incorrect Node Addressing (Issue #426):** The agent is executing commands on the wrong nodes.
    *   *Fix Status:* A fix (PR #432) is **Open** to prevent the LLM from hallucinating node values when nodes are not explicitly connected.
    *   **Link:** [moltis-org/moltis#426](https://github.com/moltis-org/moltis/issues/426)
*   **[Medium Severity] Agent Cron Tool Failure (Issue #430):** Agents are unable to use cron tools properly.
    *   **Link:** [moltis-org/moltis#430](https://github.com/moltis-org/moltis/issues/430)
*   **[Medium Severity] LLM Hallucination on Nodes (Issue #427):** The agent gets confused about which node to target when executing commands.
    *   *Fix Status:* Likely related to PR #432.
    *   **Link:** [moltis-org/moltis#427](https://github.com/moltis-org/moltis/issues/427)

### 6. Feature Requests & Roadmap Signals
*   **Lark/Feishu Support:** With specific requests (Issue #383) gaining traction, support for this platform is a strong candidate for the next minor version, expanding Moltis' enterprise collaboration capabilities.
*   **Custom GGUF Model Restoration:** PR #417 (Open) suggests that the roadmap includes better support for persistent, custom Local LLM setups without requiring a gateway restart, indicating a focus on "power user" workflows.

### 7. User Feedback Summary
User sentiment today highlights frustration with **Agent reliability** and **Node management**. Multiple reports from users like @DanTup indicate that agents frequently hallucinate node addresses or fail to use tools correctly, breaking the automation loop. Conversely, positive signals are present in the UI/UX improvements, specifically regarding the onboarding flow and password manager support, which users found lacking previously. The report on the "Vault" feature (Issue #428) also suggests users expect stronger guarantees about data privacy when the vault is "sealed."

### 8. Backlog Watch
*   **Issue #383 (Support Lark/Feishu):** This request is aging (created Mar 10) and has community upvotes. It requires maintainer assessment to determine if it fits the current architectural roadmap.
*   **PR #417 (Local LLM Restoration):** While the PR is open, the underlying feature request—restoring custom GGUF setups without restarting the gateway—is a significant quality-of-life improvement for local LLM users that is currently pending validation.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-14

**Today's Overview**
The CoPaw project is experiencing a period of intense development and community engagement, with high volatility in issue resolution and feature integration. In the last 24 hours, the repository saw significant activity with 50 updated issues and 44 updated PRs. While no new release was published today, the project is stabilizing v0.0.7 by addressing critical bugs—particularly regarding CPU spikes and Feishu channel delays—while simultaneously expanding its ecosystem through new channel integrations (Nextcloud, WeCom). The high ratio of open issues (41) versus closed (9) alongside active discussions on context management and timezone handling suggests a rapidly evolving codebase where the community is highly involved in troubleshooting edge cases.

## Latest Releases
None (Currently stabilizing version 0.0.7).

## Project Progress
**Merged & Closed PRs**
*   **Core Timezone Logic:** PR #1432 was merged to address context injection issues regarding time. It forces UTC time into the `env_context` to prevent timezone mismatches in cron scheduling and ensures weaker models utilize the correct time without explicit tool calls.
*   **Maintenance & Deduplication:**
    *   PR #1396: Fixed a bug where built-in skills were duplicated in the UI listings.
    *   PR #943: Unified allowlist access control across different channels (Telegram, DingTalk) into the `BaseChannel` class.
    *   PR #1440: Cleaned up test files by removing skill-only tests.
*   **New Integrations (Merged/Closed):**
    *   PR #1350: Added support for importing skills directly from **LobeHub**.
    *   PR #1071: Integrated the **Mattermost** channel.

**Active Development (Open PRs)**
*   **New Channels:** PR #1460 (Nextcloud Talk) and PR #1407 (WeCom) are open and under review, signaling an expansion of enterprise communication support.
*   **CLI Improvements:** PR #1278 proposes a `copaw update` command to simplify the upgrade process.
*   **Streaming Support:** PR #1428 aims to bring streamed progress replies to the QQ channel to improve UX during long-running tasks.

## Community Hot Topics
*   **Time Contexts & Model Capabilities (Issue #1346 - 7 comments)**
    *   *Link:* https://github.com/agentscope-ai/CoPaw/issues/1346
    *   *Analysis:* Users debated whether CoPaw should embed time in the system prompt vs. tool calling. The consensus landed on fixing the tool calling via #1432, but it highlights user frustration with "weak models" failing to utilize tools effectively.
*   **Enterprise Channel Requests (Issue #51 - 7 comments)**
    *   *Link:* https://github.com/agentscope-ai/CoPaw/issues/51
    *   *Analysis:* High demand for **Enterprise WeChat (WeCom)** support. Active PRs (#1407, #1267) suggest this is actively being worked on.
*   **Feishu Channel "Lag" Issues (Issue #1345 - 5 comments)**
    *   *Link:* https://github.com/agentscope-ai/CoPaw/issues/1345
    *   *Analysis:* Users report the bot answering the *previous* question instead of the current one in Feishu channels. This points to a critical race condition or state management bug in asynchronous message handling.

## Bugs & Stability
*   **Critical: CPU 100% Spike (Issue #1385 - 6 comments)**
    *   *Symptom:* CoPaw hits 100% CPU on Ubuntu 25.10 and stays there.
    *   *Status:* User investigation points to `mcp` or `read_file` tools. A fix PR is mentioned as submitted.
*   **High: Feishu "Delayed Reply" (Issue #1345)**
    *   *Symptom:* Bot ignores new questions and answers old ones.
    *   *Impact:* Renders the channel unusable for continuous conversation.
*   **High: Context/Token Management Failures (Issue #1293 - 6 comments, Issue #1270 - 2 comments)**
    *   *Symptom:* `write_file` and `execute_shell_command` failing; agents stopping silently with Error 1210 (token limit) despite compression features.
    *   *Analysis:* The "Compactor" feature (Issue #1437) is also reported to hallucinate content, suggesting the memory compression logic needs refactoring.
*   **Medium: Ollama Network Connectivity (Issue #1458, #1416)**
    *   *Symptom:* v0.0.7 fails to connect to LAN Ollama services or results in "amnesia" (loss of history).
    *   *Status:* PR #1433 added warnings about context length settings, implying user configuration is partly to blame, but the connectivity issues persist.

## Feature Requests & Roadmap Signals
*   **Skill Enhancement:** Users want to upload custom scripts/files to skills (Issue #1316, #1430). Currently, skills are prompt-only.
*   **Multi-Agent Support:** Request for concurrent agent execution similar to "OpenClaw" (Issue #1298).
*   **ACP Protocol Support:** Integration with AI coding agents like Codex/Claude Code (Issue #1059).
*   **Console Image Upload:** Native support for image uploads in the web console (Issue #1045).
*   **Auto-Summary to Disk:** Feature request to persist summaries *before* context compression happens to prevent data loss (Issue #1439).

## User Feedback Summary
*   **Pain Points:** The upgrade experience (specifically `pip install` issues and venv problems) is a major friction point. Context management (memory loss, silent stopping due to token limits) remains the biggest technical complaint.
*   **Positive Signals:** The community is actively contributing fixes for niche channels (Nextcloud, Mattermost) and providing detailed logs for bug reproduction.
*   **Configuration Fatigue:** Users are struggling with timezone settings (`COPAW_TIMEZONE`) and provider configurations (Ollama/Local models), indicating a need for better defaults or wizards.

## Backlog Watch
*   **ACP Support (Issue #1059):** Open since Mar 9, no assigned PR. Strategic for developer workflow integration.
*   **Multi-Agent Execution (Issue #1298):** Open since Mar 11. Fundamental architectural change request.
*   **Console UI Polish:** Missing model names in dropdown (Issue #1459) and lack of image upload (Issue #1045) are lower priority but high-visibility UI issues.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-14

## 1. Today's Overview
ZeptoClaw is experiencing a **high-velocity development cycle** focused on security hardening and CLI user experience. The project closed 8 issues and 3 PRs in the last 24 hours, indicating rapid iteration on critical feedback. The maintainer (@qhkm) is actively pushing features to "Production-Ready" status, specifically addressing safety concerns regarding autonomous modes, filesystem access, and approval workflows. While no new release was published today, the merge of "Streaming by default" and "Interactive Approvals" suggests a significant version bump is imminent.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Project Progress
Three significant Pull Requests were merged, advancing the core agent loop and CLI capabilities:

*   **[Closed] PR #353: Interactive approval prompts, streaming parity, safer defaults**
    *   **Changes:** Implemented TTY-gated `[y/N]` approval prompts for dangerous tools and a `/trust` slash command for local sessions. Hardened defaults so that autonomous mode is not the standard.
    *   **Impact:** Significantly improves the safety profile for local CLI usage.
*   **[Closed] PR #342: Stream by default + response metadata footer**
    *   **Changes:** Enabled streaming responses by default (reversing the previous default) and added a debug footer displaying token usage and wall-clock time.
    *   **Impact:** Improves perceived latency and provides better transparency into agent operations.
*   **[Closed] PR #349: AgentLoop constructors respect config streaming default**
    *   **Changes:** Fixed a bug where the `AgentLoop` ignored configuration settings for streaming, forcing it to `false` regardless of user config.
    *   **Impact:** Ensures user configuration is respected consistently.

## 4. Community Hot Topics
*   **[Open] PR #356: ACP (Agent Client Protocol) stdio + HTTP implementation**
    *   **Link:** [qhkm/zeptoclaw#356](https://github.com/qhkm/zeptoclaw/pull/356)
    *   **Analysis:** A contributor (@starsy) is implementing a standard protocol (ACP) to allow ZeptoClaw to run as a subprocess or via HTTP. This indicates a community push to integrate ZeptoClaw into larger AI infrastructure (like `acpx`) rather than just standalone CLI usage.
*   **[Open] Issue #334: Add Zeptoclaw to Shelldex**
    *   **Link:** [qhkm/zeptoclaw#334](https://github.com/qhkm/zeptoclaw/issues/334)
    *   **Analysis:** A request from the community (@ceeray) to list ZeptoClaw in "Shelldex," a directory of AI claws. This signals organic interest in the project's visibility.

## 5. Bugs & Stability
Several high-severity safety and logic bugs were identified and fixed today. The project demonstrates strong responsiveness to P1/P2 level issues.

*   **[Closed] Issue #354: Narrow filesystem safety carve-out (P1-Critical)**
    *   **Link:** [qhkm/zeptoclaw#354](https://github.com/qhkm/zeptoclaw/issues/354)
    *   **Issue:** Previous fixes for code-scanning false positives were too broad. The `edit_file` command's diff mode wasn't scanning new content properly.
    *   **Status:** Fixed via PR #342 (refined in context of general safety updates).
*   **[Closed] Issue #351: Restore streaming tool execution parity (P2-High)**
    *   **Link:** [qhkm/zeptoclaw#351](https://github.com/qhkm/zeptoclaw/issues/351)
    *   **Issue:** The streaming loop bypassed critical hooks (`before_tool`, `after_tool`), metrics recording, and error logging compared to the non-streaming path.
    *   **Status:** Fixed in PR #353.
*   **[Open] PRs #346 & #355: Image Content Handling**
    *   **Link:** [#346](https://github.com/qhkm/zeptoclaw/pull/346), [#355](https://github.com/qhkm/zeptoclaw/pull/355)
    *   **Issue:** The Discord channel and the main agent loop are currently dropping or mishandling image-only messages.
    *   **Status:** Patches are open, awaiting review.

## 6. Feature Requests & Roadmap Signals
*   **Trusted Local Sessions:** The implementation of `/trust on|off` (Issue #350, PR #353) indicates a roadmap direction toward hybrid usage: safe by default, but allowing power-users to bypass friction for trusted local sessions.
*   **ACP Support:** PR #356 suggests that upcoming versions will officially support the Agent Client Protocol, positioning ZeptoClaw as a compliant backend for various AI frontends.

## 7. User Feedback Summary
User feedback (derived from Issues closed by the maintainer) highlights a tension between **usability** and **security**:
*   **Demand for Speed:** Users wanted streaming by default (Issue #341) to reduce perceived latency.
*   **Demand for Safety:** Conversely, users identified that the "Autonomous" default mode was dangerous (Issue #348), prompting a hardening of default approval policies.
*   **Need for Observation:** The request for metadata footers (Issue #341) indicates users want to verify *what* the agent is doing (token count, tool calls) to monitor cost and behavior.

## 8. Backlog Watch
*   **[Open] Issue #347: Harden default agent mode**
    *   **Link:** [qhkm/zeptoclaw#347](https://github.com/qhkm/zeptoclaw/issues/347)
    *   **Status:** This issue remains open despite the related PR #353 being closed. It suggests that while the *interactive* defaults have been hardened, the configuration defaults or API-level defaults may still need review before being marked as fully resolved.
*   **Image Support:** The open PRs #346 and #355 regarding image handling suggest that multimodal capabilities are currently fragile and need attention to reach full parity with text modes.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*