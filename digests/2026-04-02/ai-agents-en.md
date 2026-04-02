# OpenClaw Ecosystem Digest 2026-04-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-02 00:11 UTC

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

# OpenClaw Project Digest: 2026-04-02

## 1. Today's Overview
OpenClaw is experiencing a period of high activity and significant growing pains. The project has processed a massive volume of changes in the last 24 hours, with **500 issues** and **500 pull requests** updated, resulting in **386 open issues** and **362 open PRs**. While the release of **v2026.4.1** introduces helpful features like chat-native task boards and SearXNG integration, the community is currently battling a wave of **regressions and stability issues** associated with the recent v2026.3.3x series. User sentiment is mixed; excitement for new features is tempered by frustration regarding broken core functionality (exec approvals, dashboard stability, and model providers) in recent updates.

## 2. Releases
**New Release:** [v2026.4.1 & v2026.4.1-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.1)
This release focuses on chat user experience and search capabilities.
*   **Tasks/Chat:** Added a `/tasks` slash command that functions as a background task board within the chat interface, displaying recent task details and fallback counts.
*   **Web Search:** Integrated SearXNG as a bundled provider plugin, allowing for self-hosted, unlimited search as an alternative to rate-limited external providers.

## 3. Project Progress
*   **Fixes in Motion:**
    *   **Telegram:** Work is underway to allow editing of native progress replies in place ([PR #59300](https://github.com/openclaw/openclaw/pull/59300)), improving the UX for long-running commands.
    *   **Microsoft Teams:** Isolation fixes for thread sessions and attachment resolution are being pushed to prevent context bleed and duplicate text issues ([PR #59294](https://github.com/openclaw/openclaw/pull/59294)).
    *   **CLI:** A new `openclaw update hint` command is being added to notify users of agent/skill updates ([PR #59298](https://github.com/openclaw/openclaw/pull/59298)), and a `backup restore` command is in development ([PR #59280](https://github.com/openclaw/openclaw/pull/59280)).
*   **Core Stability:** Several critical PRs are addressing memory leaks (TTL cleanup for Maps in Gateway), OOM crashes, and model provider ID parsing issues ([PR #52731](https://github.com/openclaw/openclaw/pull/52731), [PR #59188](https://github.com/openclaw/openclaw/pull/59188)).

## 4. Community Hot Topics
*   **Desktop Apps Request** ([Issue #75](https://github.com/openclaw/openclaw/issues/75))
    *   **Status:** The most requested feature (66 👍). Users are demanding native "Clawdbot" apps for **Linux and Windows** to match the functionality available on macOS, iOS, and Android.
*   **WeChat Plugin Compatibility** ([Issue #52885](https://github.com/openclaw/openclaw/issues/52885))
    *   **Status:** Active critical failure. The `@tencent-weixin/openclaw-weixin` plugin is incompatible with OpenClaw 2026.3.22+ due to missing SDK modules, breaking connectivity for a large user segment.
*   **Identity & Trust Verification** ([Issue #49971](https://github.com/openclaw/openclaw/issues/49971))
    *   **Status:** High-level architectural discussion. A proposal for "Native Agent Identity & Trust Verification" using W3C DID and VC standards is gaining traction, signaling a push for enterprise-grade security features.
*   **Exec Approval Frustrations** ([Issue #58662](https://github.com/openclaw/openclaw/issues/58662), [Issue #58691](https://github.com/openclaw/openclaw/issues/58691))
    *   **Status:** Major regression. The `allow-always` approval mechanism is broken (behaving like `allow-once`) and config settings `tools.exec.ask='off'` are being ignored. Users are unable to automate workflows.
*   **Dashboard 500 Errors** ([Issue #58814](https://github.com/openclaw/openclaw/issues/58814))
    *   **Status:** Critical UI failure. The web dashboard is returning 500 errors on v2026.3.31, locking users out of the Control UI.

## 5. Bugs & Stability
**Severity: Critical (Regressions & Broken Workflows)**
*   **Exec Approvals Broken (v2026.3.28+):**
    *   `allow-always` is ignored, requiring repeated approvals ([Issue #58662](https://github.com/openclaw/openclaw/issues/58662)).
    *   Config settings to disable approval (`ask: 'off'`) are ineffective ([Issue #58691](https://github.com/openclaw/openclaw/issues/58691)).
    *   *Fix Status:* PR #59283 aims to align UX with host policy.
*   **Dashboard Unusable (v2026.3.31):** Web UI returns 500 errors on GET / ([Issue #58814](https://github.com/openclaw/openclaw/issues/58814)).
*   **Runtime Dependency Errors:** v2026.3.31 npm package is missing runtime dependencies for bundled plugins (Telegram, Bedrock) ([Issue #58701](https://github.com/openclaw/openclaw/issues/58701)).
*   **Model Provider Failures:**
    *   OpenRouter fails with 401 Authentication errors despite valid keys ([Issue #51056](https://github.com/openclaw/openclaw/issues/51056)).
    *   Mistral AI provider failing with HTTP 422 ([Issue #53363](https://github.com/openclaw/openclaw/issues/53363)).
    *   Kimi model failing with "Reasoning required" errors ([Issue #57430](https://github.com/openclaw/openclaw/issues/57430)).
*   **Context & Memory Glitches:**
    *   Context usage reports 0% regardless of actual token load ([Issue #48206](https://github.com/openclaw/openclaw/issues/48206)).
    *   Context loss on gateway restart despite `memoryFlush` config ([Issue #24173](https://github.com/openclaw/openclaw/issues/24173)).

## 6. Feature Requests & Roadmap Signals
*   **Filesystem Sandboxing:** Users want `allowedPaths` / `denyPaths` configuration to restrict where agents can read/write files ([Issue #52621](https://github.com/openclaw/openclaw/issues/52621)).
*   **Custom Provider Support:** Requests to support custom providers for specific API types (Images, OpenAI Responses API) are increasing ([Issue #43018](https://github.com/openclaw/openclaw/issues/43018), [Issue #31486](https://github.com/openclaw/openclaw/issues/31486)).
*   **Message Hooks:** There is demand for `message:received` and `message:sent` hooks to trigger custom actions ([Issue #8807](https://github.com/openclaw/openclaw/issues/8807)).

## 7. User Feedback Summary
*   **"Keep Breaking This Thing":** Users are increasingly vocal about instability. A trending issue ([#57898](https://github.com/openclaw/openclaw/issues/57898)) explicitly asks if a stable version is possible, highlighting fatigue with constant regressions in tool usage and settings.
*   **Platform Parity:** The lack of Linux/Windows apps compared to macOS/iOS is a top pain point for power users.
*   **Documentation & Migration:** Users are struggling with "idiotic settings" (e.g., `profile: full`) changing between versions, and migration issues (e.g., `dangerouslyForceUnsafeInstall` failing) are blocking upgrades.
*   **Reliability over Features:** While SearXNG and Tasks are welcomed, the community consensus prioritizes fixing the broken core (Exec, Dashboard, Memory) over adding new capabilities.

## 8. Backlog Watch
*   **Long-Standing Unresolved Issues:**
    *   **Reminders Time Bug:** The agent guesses the current time instead of knowing it, breaking reminders ([Issue #10841](https://github.com/openclaw/openclaw/issues/10841), open since Feb).
    *   **iMessage FDA Issues:** Full Disk Access permissions do not propagate correctly via LaunchAgents ([Issue #5116](https://github.com/openclaw/openclaw/issues/5116)).
    *   **Signal Group Chats:** @mentions don't work reliably in groups, and the bot replies to every message ([Issue #29214](https://github.com/openclaw/openclaw/issues/29214)).
*   **Maintainer Attention Needed:**
    *   **Microsoft Ecosystem:** A tracker PR exists to manage the backlog of Teams/Windows/WSL issues ([PR #49126](https://github.com/openclaw/openclaw/pull/49126)).

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: AI Agent & Personal Assistant Digest
**Date:** 2026-04-02
**Analyst:** Senior Open Source Ecosystem Reporter

---

## 1. Ecosystem Overview
The open-source AI agent ecosystem is currently undergoing a phase of **rapid expansion and turbulent stabilization**. We are observing a clear bifurcation in the landscape: established core frameworks like **OpenClaw** and **NanoBot** are battling severe technical debt and "growing pains" as they scale, while downstream forks and specialized tools like **LobsterAI**, **Moltis**, and **PicoClaw** are iterating aggressively on user experience and niche integrations. The industry is moving decisively away from simple chatbots toward **multi-modal, multi-agent autonomous systems**, with a heavy emphasis on "agentic" capabilities such as long-term memory (e.g., *NanoClaw's Seahorse*, *NanoBot's Dream*), local execution security, and enterprise-grade observability.

## 2. Activity Comparison

| Project | Health | Open Issues (Active) | Pull Requests (24h) | Release Status | Primary Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ⚠️ **Critical** | 386 (High Load) | 500 (Extreme) | v2026.4.1 (Unstable) | Ecosystem Core / Platform |
| **NanoBot** | ⚠️ **Warning** | 23 (Moderate) | 134 (High) | v0.1.4.post6 (Regressing) | Extensibility / MCP |
| **PicoClaw** | ⚡ **Active** | 24 (Low) | 59 (High) | v0.2.4-nightly | Innovation / Integrations |
| **IronClaw** | 🔧 **Maintained** | 37 (Moderate) | 50 (High) | None (CI Pipeline) | Performance / Rust |
| **LobsterAI** | 🛠️ **Fixing** | 19 (Moderate) | 50 (High) | v1.0.0.x (Patch Cycle) | Client UX / UI Polish |
| **CoPaw** | 📦 **Packaged** | 50 (Moderate) | 50 (High) | v1.0.0.post3 | Multi-Agent Workflows |
| **Moltis** | 🚀 **Growing** | 3 (Stable) | 8 (Moderate) | Snapshot | Integrations / Scraping |
| **ZeroClaw** | ♻️ **Transition** | 1 (Low) | 5 (Low) | Rebranding (*Hrafn*) | Simplification |
| **NanoClaw** | 🔒 **Secure** | 5 (Low) | 17 (Moderate) | None (Stable Core) | Privacy / Local Deployment |
| **NullClaw** | 📊 **Quiet** | 0 (None) | 5 (Low) | None | Tooling / Math |
| **EasyClaw**| 😴 **Stable** | 0 (None) | 1 (Low) | v1.7.8 | Localization / Accessibility |
| **TinyClaw**| 💀 **Stagnant** | 0 | 0 | N/A | Inactive |

**Key Insight:** **OpenClaw** dominates sheer volume but suffers from critical instability (Regressions, Dashboard 500 errors). **NanoBot** and **PicoClaw** represent the "Risky but Rewarding" tier, shipping features faster than they can fix them.

## 3. OpenClaw's Position
**Advantages vs. Peers:**
*   **Market Dominance:** OpenClaw remains the "reference implementation," boasting the largest plugin ecosystem and community volume.
*   **Feature Breadth:** Unique support for diverse approval mechanisms (`allow-always`), complex task boards (`/tasks`), and bundled provider plugins (SearXNG).

**Technical Approach:**
*   **Architecture:** Heavier, more monolithic infrastructure compared to the leaner **NanoClaw** or **IronClaw**.
*   **Integration:** Focuses on bridging external SaaS (Slack, Teams) and local tools, whereas **LobsterAI** focuses purely on optimizing the client-facing UI for these workflows.

**Community Size & Sentiment:**
*   **Size:** Significantly larger than any fork (386 open issues vs. <50 for peers).
*   **Sentiment:** **Toxic/Frustrated.** Unlike the optimistic "building" vibe in **CoPaw** or **PicoClaw**, OpenClaw's community is currently vocal about "broken core functionality" (Exec approvals, Dashboard, memory). Users feel the project is prioritizing features over stability.

## 4. Shared Technical Focus Areas
*   **Multi-Provider Support & "Vendor Lock-in" Rejection**
    *   *Affected:* **NanoClaw** (Critical urgency to drop Anthropic), **OpenClaw** (Provider fixes), **CoPaw** (SiliconFlow requests).
    *   *Signal:* Users are demanding agnostic support for OpenAI, Gemini, Local LLMs (Ollama/Llama.cpp) to avoid API bans and reduce costs.

*   **Advanced Memory Systems (Beyond Context Windows)**
    *   *Affected:* **NanoBot** ("Dream" consolidation), **PicoClaw** ("Seahorse" biologically-inspired memory), **IronClaw** (Unified Workspace VFS).
    *   *Signal:* Simple RAG is insufficient; projects are racing to implement persistent, hierarchical memory to enable "always-on" agents.

*   **Observability & Tracing**
    *   *Affected:* **PicoClaw** (OTel/LangSmith requests), **Moltis** (Langfuse PR), **OpenClaw** (Debugging/Memory usage).
    *   *Signal:* As agents become more complex (multi-step), "black box" failures are becoming a major blocker for adoption.

*   **Self-Hosting & Network Resilience**
    *   *Affected:* **NullClaw** (Proxy support), **NanoBot** (SSRF whitelisting), **IronClaw** (Local Network Access).
    *   *Signal:* Corporate/Enterprise users need agents that work safely behind firewalls and proxies without exposing data.

## 5. Differentiation Analysis

| Feature Set | **OpenClaw** | **NanoBot / PicoClaw** | **LobsterAI / CoPaw** | **NanoClaw / IronClaw** |
| :--- | :--- | :--- | :--- | :--- |
| **Core Philosophy** | **The "Operating System"** | **The "Hackable Framework"** | **The "User App"** | **The "Secure Appliance"** |
| **Target User** | Power users, DevOps, Integrators | Developers, Tinkerers | End-users, Office workers | Privacy advocates, Enterprise |
| **Key Differentiator** | Deepest platform integration (Teams, WeChat, etc.) | Cutting-edge features (MCP, Plugins) | Refined UI/UX, Scheduling, Dark Mode | Security isolation, Local-first |
| **Weakness** | Bloat, instability, complexity | Fragility, requires dev knowledge | Less customizable core | Smaller ecosystem, stricter limits |

*   **LobsterAI** is distinct in its focus on "Visual Polish" and "Ease of Use" (e.g., diff views, modal settings), positioning itself as a friendly client for potentially complex backends.
*   **ZeroClaw** is undergoing an identity crisis (Rebranding to *Hrafn*) to simplify its architecture, signaling a shift away from OpenClaw's complexity.

## 6. Community Momentum & Maturity
*   **Rapidly Iterating (High Risk/High Reward):**
    *   **NanoBot:** shipping features daily but breaking core connectivity.
    *   **PicoClaw:** Moving to Nightly builds to accelerate "Seahorse" and OpenAI Responses API integration.
    *   **Moltis:** Aggressively adding channels (Matrix, Teams, Firecrawl).

*   **Stabilizing (Maturing):**
    *   **CoPaw:** Post-v1.0.0, focusing heavily on patching bugs and refining workflows rather than adding new pillars.
    *   **NanoClaw:** Closing critical stability PRs (zombie states, migrations) and focusing on "Hard Security."

*   **Stagnant / Minimal:**
    *   **TinyClaw / ZeptoClaw:** No activity.
    *   **NullClaw:** Low activity, focused on niche calculator tools.

## 7. Trend Signals (For AI Developers)
1.  **The "Platformization" of Chat:** Users are rejecting single-channel bots. The demand is for **unified hubs** (like OpenClaw/Moltis) that manage Discord, Slack, Teams, and WeChat simultaneously.
2.  **Security is now Table Stakes:** "Exec Approval" mechanisms are broken in major projects (OpenClaw), but the *demand* for them is higher than ever. Users want **sandboxed filesystems** (`allowedPaths`) and strict network rules.
3.  **Local-First Paranoia:** The backlash against API bans (NanoClaw) and data leakage (OpenClaw) is driving a massive trend toward **local inference** (Ollama, LM Studio) and self-hosted scraping (SearXNG, Firecrawl).
4.  **UI/UX is the New Battleground:** As LLMs become commodities, the differentiator is the interface. **LobsterAI** and **IronClaw** discussions are dominated by requests for better error handling, dark mode, and dashboard usability, proving that "Developer Experience" now equals "User Experience."

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-02

## 1. Today's Overview
NanoBot is experiencing a period of **extremely high activity** bordering on instability, with 134 Pull Requests and 23 Issues updated in the last 24 hours. The project appears to be in a heavy integration phase for major features (specifically the "Dream" memory system and MCP support) while simultaneously struggling with significant regressions introduced in the recent `v0.1.4.post6` release. The community is actively reporting critical bugs related to provider compatibility (OpenRouter, GitHub Copilot, MiniMax) and performance degradation (response times increasing from 1s to 3min). While feature development is advancing rapidly, the short-term stability has been compromised, requiring immediate attention to bug fixes.

## 2. Latest Releases
*No new releases published in the last 24 hours.*
*Note: Users are actively referencing `v0.1.4.post6`, which appears to be the current unstable target of reports.*

## 3. Project Progress
**Closed & Merged (Stabilization Efforts)**
*   **Security & Networking**: Merged PR [#2731](https://github.com/HKUDS/nanobot/pull/2731) adds `ssrfAllowedSubnets` configuration, allowing operators to whitelist private IP ranges (e.g., Tailscale/CGNAT) that were previously blocked by default.
*   **Provider Fixes**: Merged PR [#2687](https://github.com/HKUDS/nanobot/pull/2687) fixed a critical bug where Anthropic-specific cache controls were incorrectly applied to all models on OpenRouter, causing API errors. Merged PR [#2668](https://github.com/HKUDS/nanobot/pull/2668) restored the GitHub Copilot authentication flow which was broken in the previous refactor.
*   **Agent Logic**: Merged PR [#2474](https://github.com/HKUDS/nanobot/pull/2474) resolved the `message` tool bug where messages sent to a different `chat_id` incorrectly replied to the original chat context.
*   **Workspace Security**: Merged PR [#2683](https://github.com/HKUDS/nanobot/pull/2683) hardened the ExecTool to correctly block root directory paths on Windows when `restrict_to_workspace` is enabled.

**Active Development (Open PRs)**
*   **Memory Systems**: PR [#2717](https://github.com/HKUDS/nanobot/pull/2717) is integrating the two-stage "Dream" memory consolidation system into the main branch.
*   **Runtime Hardening**: PR [#2733](https://github.com/HKUDS/nanobot/pull/2733) proposes hardening the agent runtime to handle long-running tasks and provider hiccups more robustly.
*   **MCP Enhancements**: PR [#2730](https://github.com/HKUDS/nanobot/pull/2730) implements live tool refresh via MCP `notifications/tools/list_changed`.

## 4. Community Hot Topics
*   **Configuration & Setup Complexity**
    *   **Issue**: [#2714](https://github.com/HKUDS/nanobot/issues/2714) (Windows + DeepSeek Guide)
    *   **Analysis**: A user took the time to write a detailed CSDN guide because official documentation was lacking specific details for Windows/DeepSeek setups. This signals a need for better onboarding docs for non-standard environments.
    *   **Issue**: [#2698](https://github.com/HKUDS/nanobot/issues/2698) (Zhipu Model Config)
    *   **Analysis**: Users are struggling with the interactive configuration not correctly updating `agent` defaults or providers, leading to "silent failures" where the agent just won't talk.

*   **Architectural Concerns**
    *   **Issue**: [#2463](https://github.com/HKUDS/nanobot/issues/2463) (Prompt Prefix Preservation)
    *   **Analysis**: A detailed technical critique regarding how NanoBot persists conversation history vs. the actual prompt sent to the model. This is critical for OpenAI's prompt caching feature, as mismatched history prevents cache hits, increasing costs and latency.

*   **Feature Requests**
    *   **Issue**: [#2700](https://github.com/HKUDS/nanobot/issues/2700) (Crawl4AI Support)
    *   **Analysis**: Users want more reliable web fetching than the current Jina/simple Python fallback.
    *   **PR**: [#2735](https://github.com/HKUDS/nanobot/pull/2735) (Auto-extract Skills)
    *   **Analysis**: High interest in "organic" SOP generation—letting the agent identify reusable workflows from chat history automatically.

## 5. Bugs & Stability
**Critical Regressions (v0.1.4.post6)**
1.  **Agent "Silence" / Hang**: [#2704](https://github.com/HKUDS/nanobot/issues/2704), [#2711](https://github.com/HKUDS/nanobot/issues/2711)
    *   **Severity**: High
    *   **Symptom**: Agent "thinks" indefinitely or returns no results without error after upgrade.
2.  **Performance Drop**: [#2713](https://github.com/HKUDS/nanobot/issues/2713)
    *   **Severity**: High
    *   **Symptom**: Response time increased from ~1s to ~3mins on the same environment.
3.  **Provider Failures**:
    *   **OpenRouter**: [#2639](https://github.com/HKUDS/nanobot/issues/2639) - "Incorrect API key" errors due to cache control injection (Fix pending).
    *   **MiniMax**: [#2590](https://github.com/HKUDS/nanobot/issues/2590) - Built-in provider broken in post6.
    *   **GitHub Copilot**: [#2573](https://github.com/HKUDS/nanobot/issues/2573) - OAuth login fails (Fix merged).

**Moderate Bugs**
*   **Workspace Restrictions**: [#2660](https://github.com/HKUDS/nanobot/issues/2660) - Agent cannot read files from channels (e.g., DingTalk images) if `restrictToWorkspace` is true, as they are saved outside the workspace. Fix proposed in [#2725](https://github.com/HKUDS/nanobot/pull/2725).
*   **DingTalk HTML Errors**: [#2696](https://github.com/HKUDS/nanobot/issues/2696) - Error sending HTML files.

## 6. Feature Requests & Roadmap Signals
*   **OAuth Management**: Users need a way to log out of providers (e.g., OpenAI Codex) to switch accounts.
    *   *Signal*: PR [#2727](https://github.com/HKUDS/nanobot/pull/2727) addresses this explicitly.
*   **Crawl4AI Integration**: Multiple requests to replace standard web fetching with [Crawl4AI](https://github.com/unclecode/crawl4ai) for better robustness.
    *   *Signal*: PR [#2724](https://github.com/HKUDS/nanobot/pull/2724) is open.
*   **Memory/Performance**: Request to stabilize tool prefix caching when using MCP tools, as dynamic tool changes break cache hits.
    *   *Signal*: PR [#2722](https://github.com/HKUDS/nanobot/pull/2722) addresses this.

## 7. User Feedback Summary
*   **Pain Points**: The upgrade to `v0.1.4.post6` has been painful for users. The combination of broken providers, severe slowdowns, and silent agent failures is causing frustration. The "interactive configuration" is also viewed as unreliable for setting up providers (Zhipu, DeepSeek).
*   **Positive Signals**: Users are actively writing guides (DeepSeek/Windows) and proposing architectural improvements (Prompt caching), indicating strong community desire to make it work despite the bugs.
*   **Dissatisfaction**: The "nanobot is thinking" state that hangs indefinitely is a major UX detractor compared to returning an error message.

## 8. Backlog Watch
*   **Matrix E2E Sync**: [#1570](https://github.com/HKUDS/nanobot/issues/1570) - Unresolved issue with Matrix-nio client failing to sync with Conduit servers.
*   **Long Request Times**: [#2709](https://github.com/HKUDS/nanobot/issues/2709) - WeCom channel failing with "Streaming is required for operations that may take longer than 10 minutes."
*   **Test Dependency Gating**: [#2695](https://github.com/HKUDS/nanobot/issues/2695) - Highlighting that Matrix tests can pass during collection but fail at runtime due to missing dependency checks.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-04-02

**Project Status:** ⚠️ **Major Transition**
**Health Assessment:** High development velocity amidst a significant rebranding effort.

---

### 1. Today's Overview
ZeroClaw is currently undergoing a significant transformation, evidenced by a massive rebranding pull request that renames the project to "Hrafn" and restructures the entire workspace. Despite this foundational shift, feature development remains active, with new initiatives focusing on a Terminal User Interface (TUI) onboarding wizard and Web UI persistence. The community is highly active, with 5 Pull Requests updated in the last 24 hours. While no new releases were published today, the merge of the rebranding PR suggests a version update is imminent to accommodate the structural changes.

### 2. Releases
**No new releases published in the last 24 hours.**
*Note: Given the extensive rebranding and workspace restructure in PR #5158, users should expect a breaking change release soon.*

### 3. Project Progress
*   **PR #5158 [CLOSED]: Major Rebrand & Restructure** ([Link](https://github.com/zeroclaw-labs/zeroclaw/pull/5158))
    *   **Status:** Closed (Likely Merged)
    *   **Impact:** The project has been renamed from **ZeroClaw** to **Hrafn**.
    *   **Changes:** Includes a workspace restructure splitting code into members like `robot-kit` and `aardwolf`, introduction of a desktop app, and removal of OAuth support in favor of API-key-only authentication. This touches almost every component (agents, channels, providers).

### 4. Community Hot Topics
*   **PR #5159: TUI Onboarding Wizard** ([Link](https://github.com/zeroclaw-labs/zeroclaw/pull/5159))
    *   **Topic:** User Experience & Onboarding
    *   **Details:** A new `ratatui`-based wizard for CLI setup (`zeroclaw onboard --tui`). This indicates a push to simplify the initial configuration process for power users moving away from the previously complex or browser-based login methods.
*   **PR #5157: Web Dashboard Persistence** ([Link](https://github.com/zeroclaw-labs/zeroclaw/pull/5157))
    *   **Topic:** UI Usability
    *   **Details:** Addresses user frustration with losing chat logs and configuration state upon refreshing the Web UI. This PR adds state persistence to ensure a reliable session experience.

### 5. Bugs & Stability
*   **Issue #5155: Delegate Agents Ignoring Config** ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5155))
    *   **Severity:** **S1 - Workflow Blocked**
    *   **Component:** Tooling/CI / Agent Logic
    *   **Details:** Delegate agents are ignoring the `[skills].prompt_injection_mode` setting. Even when set to `"compact"`, they inject skills in `"Full"` mode. This leads to excessive token usage and potentially truncated prompts, blocking workflows that rely on efficient context management.
*   **PR #5160: Shell Command Security Overreach** ([Link](https://github.com/zeroclaw-labs/zeroclaw/pull/5160))
    *   **Severity:** Functional Regression
    *   **Details:** Fixes a security feature that was too strict, inadvertently blocking safe shell patterns like Heredocs (`<<`) and standard error suppression (`2>/dev/null`). This fix will restore standard shell scripting capabilities within the agent.

### 6. Feature Requests & Roadmap Signals
*   **Signal: Simplified Auth Model:** Based on the rebranding PR (#5158) and the new TUI wizard (#5159), the project is standardizing on **API-key-only authentication**. OAuth and Browser login methods are being deprecated to reduce complexity and attack surface.
*   **Signal: Enhanced Streaming Reliability:** PR #5161 focuses on WebSocket steering, ensuring that streaming output remains additive and persistent. This signals a push towards more robust, real-time interaction capabilities in the agent gateway.

### 7. User Feedback Summary
*   **Pain Point:** **Configuration Fragility.** The fast tracking of Web UI persistence (PR #5157) suggests users have been frustrated by losing work during simple browser actions.
*   **Pain Point:** **Setup Complexity.** The introduction of a dedicated TUI onboarding wizard implies the previous configuration process was a barrier to entry.
*   **Pain Point:** **Workflow Breakage.** The S1 bug report (#5155) regarding agent configuration highlights critical reliability issues in multi-agent delegation scenarios.

### 8. Backlog Watch
*   **Item:** **Issue #5155** (Delegate Agent Injection Bug). With an S1 severity and a "workflow blocked" status, this issue requires immediate attention. It was last updated on 2026-04-01, and while active, it has not yet been merged or closed. Users experiencing high token costs or prompt cutoffs are waiting on this fix.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-04-02

## 1. Today's Overview
PicoClaw is experiencing a high-velocity development cycle, evidenced by **59 Pull Requests** and **24 Issues** updated in the last 24 hours. The project remains in an active "Nightly" release phase (`v0.2.4-nightly`), indicating rapid iteration but potential instability for production users. Significant development effort is focused on expanding channel integrations (Teams, Grafana, Delta Chat) and refactoring core provider logic (OpenAI Responses API, Anthropic SDK). The community is highly engaged, with active discussions surrounding agent observability, UI/UX improvements for the WebUI, and architectural standardization.

## 2. Releases
**New Release: Nightly Build (v0.2.4-nightly.20260401)**
*   **Status**: Automated unstable build.
*   **Details**: This nightly build includes the latest commits from the `main` branch.
*   **Warning**: Users are advised to exercise caution due to the potential for instability in nightly builds.
*   **Changelog**: [Compare v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

## 3. Project Progress
**Key Merged/Closed PRs & Features:**
*   **Observability & Tooling**: Closed PR #2138 ("Security shield") and PR #2253 ("add missing recover panic in subturn.go") indicate a focus on system stability and agent safety checks.
*   **Build System**: Closed PR #2252 implemented DMG creation for macOS 10.11+, improving distribution for Mac users.
*   **Channel Fixes**: PR #2092 was closed, resolving a bug where Telegram streaming edits resulted in duplicate messages.
*   **Integration Updates**: A WebSocket channel for local web chat (PR #641) was merged/closed, enhancing local interaction capabilities.

## 4. Community Hot Topics
**Most Discussed Issues & PRs:**
*   **[Feature] Seahorse - Biologically-inspired Memory System (#1919)**
    *   **Activity**: 9 comments (Updated: 2026-04-01)
    *   **Analysis**: There is strong community interest in moving beyond simple context windows to "human-like" memory. Users are demanding advanced memory management (short-term/long-term) to create more persistent and intelligent agents.
    *   [Link](https://github.com/sipeed/picoclaw/issues/1919)

*   **[Feature] Self-upgrade support (#618)**
    *   **Activity**: 7 comments (Updated: 2026-04-01)
    *   **Analysis**: User convenience is a primary pain point. The community wants a seamless way to receive security patches and new features without manual redeployment, specifically requesting support for standard package managers (deb, winget, opkg).
    *   [Link](https://github.com/sipeed/picoclaw/issues/618)

*   **[Refactor] Move to OpenAI Responses API (#2171)**
    *   **Activity**: 5 comments (Updated: 2026-04-01)
    *   **Analysis**: Developers are pushing to align PicoClaw with the latest OpenAI standards (`/responses` endpoint) to leverage new structured output capabilities and future-proof the codebase.
    *   [Link](https://github.com/sipeed/picoclaw/issues/2171)

## 5. Bugs & Stability
**Critical & High-Severity Issues:**
*   **[Critical] WebUI connectivity breakdown (#2213) & Login Page missing (#2179)**
    *   **Issue**: Users report that WebUI cannot connect to the gateway it starts, or fails to work after specific commits (e.g., 6ea364e) without a login page.
    *   **Impact**: Renders the WebUI launcher non-functional for some users.
    *   **Status**: #2179 is closed (likely fixed or mitigated), but #2213 remains Open with high visibility (2 👍).
    *   [Link](https://github.com/sipeed/picoclaw/issues/2213) | [Link](https://github.com/sipeed/picoclaw/issues/2179)

*   **[High] Docker Port Mapping Bug (#2236)**
    *   **Issue**: Modifying the web listening port in Docker causes the input box to be disabled, blocking all user input.
    *   **Impact**: Breaks standard Docker deployment practices for custom ports.
    *   [Link](https://github.com/sipeed/picoclaw/issues/2236)

*   **[Medium] Anthropic Caching Broken (#2191)**
    *   **Issue**: The `anthropic_messages` provider sends `system` prompts as flat strings, breaking Anthropic's prompt caching feature (SystemParts), leading to higher costs and latency.
    *   **Fix**: Addressed in open PR #2259.
    *   [Link](https://github.com/sipeed/picoclaw/issues/2191)

## 6. Feature Requests & Roadmap Signals
**Upcoming Capabilities:**
*   **Observability Standards**: Requests for **OTel GenAI support** (#1731) and **LangSmith integration** (#2173) indicate a demand for enterprise-grade tracing and debugging of complex agent chains.
*   **WebUI Enhancements**:
    *   **Token Dashboard** (#2217): Users want to visualize consumption costs.
    *   **Thinking Display** (#2216): Support for visualizing model "thinking" tokens (e.g., o1-style reasoning) in the chat interface.
*   **Provider Flexibility**:
    *   **Ollama Cloud Credentials** (#2225): Request for authentication support for Ollama cloud instances.
    *   **Custom Headers** (#2247): Request to customize HTTP headers for specific non-standard model providers.

## 7. User Feedback Summary
*   **Pain Points**:
    *   **Windows Compatibility**: QQ channel failures on Windows (#2080) and console text selection issues (#2254) highlight instability in the Windows environment.
    *   **Model Fallback Logic**: Users are frustrated with model fallbacks not working correctly across different providers (#2143), causing requests to fail entirely rather than switching to a backup.
    *   **TUI vs. WebUI**: There is a proposal to deprecate the Terminal User Interface (TUI) in favor of focusing resources on the WebUI (#2208), receiving community support (4 👍).
*   **Use Cases**:
    *   **Enterprise Integration**: High demand for integrating with external systems like **Grafana Alertmanager** (PR #2251), **Delta Chat** (PR #2167), and **Microsoft Teams** (PR #2244).
    *   **Local OCR**: Users are attempting to process images from bots (QQ) using local OCR skills when the main model lacks vision capabilities (#2257, PR #2258).

## 8. Backlog Watch
*   **[RFC] Deprecate TUI (#2208)**: A significant architectural proposal that needs maintainer decision. If accepted, it will reshape the project's UX focus entirely.
*   **[Feature] Webhook Messages (#850)**: Originally opened in Feb 2026 and closed/recently updated, this feature for generic webhooks remains a critical gap for users wanting to trigger agents from external systems (though PR #2251 adds specific Grafana support, a generic solution is often requested).
*   **[Feature] Seahorse Memory (#1919)**: A major feature request that has seen updates but no merge yet. It represents a complex shift in how PicoClaw handles state and memory.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-02

## 1. Today's Overview
NanoClaw is experiencing a **high-velocity development cycle**, with significant engineering activity focused on system stability and multi-modal capabilities. In the last 24 hours, the project saw 17 updated PRs (with 7 merged) and 5 active issues. The community is actively discussing infrastructure decoupling from Anthropic, while core developers are closing critical stability bugs related to SDK query handling and idle states. The rapid merging of fixes for hung queries and database migrations suggests a responsive maintenance team preparing the codebase for more complex multi-channel deployments.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
**Merged & Closed PRs:**
*   **Infrastructure as Code:** [#1580](https://github.com/qwibitai/nanoclaw/pull/1580) (Closed) replaced ad-hoc SQL patches with a robust versioned migration runner, resolving potential database drift issues.
*   **Stability Fixes:** Two critical PRs addressed agent container lifecycle issues. [#1571](https://github.com/qwibitai/nanoclaw/pull/1571) and [#1574](https://github.com/qwibitai/nanoclaw/pull/1574) (both Closed) implemented fixes to abort hung SDK queries and ensure the `_close` sentinel is written during `notifyIdle`, preventing zombie states where the container becomes unresponsive.
*   **New Channels:** [#1582](https://github.com/qwibitai/nanoclaw/pull/1582) (Closed) added a native Telegram channel and credential proxy, removing dependencies on the OneCLI gateway.
*   **Local Frontend:** [#1534](https://github.com/qwibitai/nanoclaw/pull/1534) (Closed) introduced a "local-chat" channel with a PWA frontend and trusted proxy auth, facilitating local multi-user collaboration.

## 4. Community Hot Topics
*   **Decoupling from Anthropic:** [#80](https://github.com/qwibitai/nanoclaw/issues/80) (56 👍, 28 comments) remains the most discussed issue. Users are reporting subscription cancellations from Anthropic due to NanoClaw/OpenClaw usage, creating urgent demand for "agnostic" support for runtimes like OpenAI, Gemini, and Opencode.
*   **Security & Isolation:** [#1490](https://github.com/qwibitai/nanoclaw/issues/1490) discusses "host-level security enforcement" for multi-group deployments. Users want strict isolation between private vaults and external web access to prevent data leakage.

## 5. Bugs & Stability
*   **Message Loss & IPC Races:** Open PR [#1576](https://github.com/qwibitai/nanoclaw/pull/1576) addresses a bug where text output mid-query causes message loss due to a race condition with the idle close timer.
*   **Documentation Sync:** Issue [#1573](https://github.com/qwibitai/nanoclaw/issues/1573) highlights inconsistencies in environment variable documentation.
*   **Skill Sync Hygiene:** Issue [#1578](https://github.com/qwibitai/nanoclaw/issues/1578) reports that skill syncing performs an incremental copy without cleanup, leading to cluttered directories with stale renamed/deleted skills.

## 6. Feature Requests & Roadmap Signals
*   **Provider Flexibility:** The high engagement on [#80](https://github.com/qwibitai/nanoclaw/issues/80) suggests that support for non-Anthropic providers (OpenAI, Gemini, local models) is the top priority for the community roadmap.
*   **Proton Suite Integration:** PR [#1117](https://github.com/qwibitai/nanoclaw/pull/1117) (Needs Review) proposes expanding Proton Mail support into a full 36-tool suite (Pass, Drive, Calendar, VPN), signaling a push toward comprehensive personal data management.
*   **Email Aggregation:** PR [#1235](https://github.com/qwibitai/nanoclaw/pull/1235) adds IMAP/SMTP support, broadening NanoClaw's communication capabilities beyond proprietary chat platforms.
*   **Advanced Security:** The request in [#1490](https://github.com/qwibitai/nanoclaw/issues/1490) indicates a roadmap need for enterprise-grade security policies (container isolation).

## 7. User Feedback Summary
Users are expressing **security anxiety** and **vendor lock-in concerns**.
*   **Positive:** Users appreciate the "fork-first" architecture, though some are confused by the implications of public forks ([#1424](https://github.com/qwibitai/nanoclaw/issues/1424)).
*   **Negative:** There is distinct dissatisfaction regarding reliance on Anthropic, fueled by reports of bans ([#80](https://github.com/qwibitai/nanoclaw/issues/80)).
*   **Pain Point:** Managing sensitive data (healthcare systems, personal vaults) is a primary use case, driving requests for better isolation and private fork options.

## 8. Backlog Watch
*   **Multi-Provider Runtime:** Issue [#80](https://github.com/qwibitai/nanoclaw/issues/80) (Open since Feb 2026) is critical and requires architectural changes to support non-Anthropic providers.
*   **Fork Security:** Issue [#1424](https://github.com/qwibitai/nanoclaw/issues/1424) discusses the inability to make forks private, which is a blocker for enterprise/privacy-sensitive users.
*   **IMAP Integration:** PR [#1235](https://github.com/qwibitai/nanoclaw/pull/1235) (Open since March 18) needs review to finalize generic email support.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-04-02

## 1. Today's Overview
NullClaw shows active development maintenance focused on expanding capabilities and refining network configurations. The project remains in a heavy development phase with 5 open Pull Requests updated in the last 24 hours compared to 0 merged changes, indicating a backlog of features pending review. Activity is concentrated on enhancing the `calculator` tool, fixing configuration parsing for custom providers, and improving HTTP client proxy support. While no new releases were published today, the community is actively addressing bugs regarding agent dispatching logic and visibility.

## 2. Releases
*No new releases published on 2026-04-02.*

## 3. Project Progress
*Note: No PRs were merged or closed in the last 24 hours. The following reflect active development updates to open proposals:*

*   **Heartbeat Agent Dispatch (#757):** Development is ongoing to fix a critical workflow gap where tasks defined in `HEARTBEAT.md` were parsed but ignored. The proposed change ensures the heartbeat engine dispatches an agent to act on these tasks rather than just logging the count.
*   **Gateway Configurability (#687):** Advanced to allow operators to configure HTTP body size limits and request timeouts via `gateway.max_body_size_bytes` and `gateway.request_timeout_ms`, removing previous hard-coded constraints.
*   **Calculator Tool (#716):** Work continued on expanding the mathematical operations available to the agent, adding 20 distinct operations including statistical functions like median and standard deviation.

## 4. Community Hot Topics
*   **[PR #757: feat: dispatch agent on heartbeat when HEARTBEAT.md has tasks](https://github.com/nullclaw/nullclaw/pull/757)**
    *   **Topic:** Fixing the heartbeat task execution logic.
    *   **Analysis:** This PR addresses a high-value workflow improvement. Users expect that adding tasks to `HEARTBEAT.md` will trigger agent action, but the current behavior is passive. The high engagement here signals that users want active, autonomous task management from the heartbeat system.

*   **[PR #755: feat: support http_proxy/https_proxy env vars](https://github.com/nullclaw/nullclaw/pull/755)**
    *   **Topic:** Network proxy compatibility.
    *   **Analysis:** Enterprise users or those behind corporate firewalls require standard proxy support (`HTTPS_PROXY`). This aligns NullClaw with standard CLI tools like `curl` and is essential for adoption in restricted network environments.

## 5. Bugs & Stability
*   **[BUG] Heartbeat lacks logging visibility (#703)**
    *   **Severity:** Medium (Observability issue).
    *   **Details:** User reports that despite having verbose diagnostics enabled (`log_tool_calls`, `log_llm_io`, etc.), the heartbeat process produces no logs.
    *   **Status:** Open.
    *   **Relation:** This is likely related to the issues being fixed in **PR #757**, where the heartbeat thread was skipping agent dispatch.
*   **[BUG] Custom Provider Model Parsing (#728)**
    *   **Severity:** High (Configuration blocker).
    *   **Details:** Parsing errors occur when using custom providers (e.g., Cloudflare AI) where the API key includes paths. The fix involves prioritizing the longest matching provider key to correctly extract the model ID.
    *   **Status:** Fix proposed in open PR #728.

## 6. Feature Requests & Roadmap Signals
*   **Mathematical Competence:** The addition of a robust **Calculator tool** via **[PR #716](https://github.com/nullclaw/nullclaw/pull/716)** signals a roadmap focus on improving the agent's ability to perform data analysis and mathematical reasoning without relying solely on the LLM.
*   **Network Flexibility:** **[PR #755](https://github.com/nullclaw/nullclaw/pull/755)** indicates a push to better support diverse network topologies, specifically enterprise environments requiring proxies.

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing "silent failures" in the heartbeat system (Tasks in `HEARTBEAT.md` not triggering actions, lack of logs) and connectivity issues when custom provider endpoints are complex or proxies are required.
*   **Use Cases:** There is a clear demand for running NullClaw in constrained network environments (need for proxies) and using it for multi-modal workloads (need for adjustable gateway body sizes).

## 8. Backlog Watch
*   **[PR #757: Heartbeat Dispatch](https://github.com/nullclaw/nullclaw/pull/757):** Created 2026-04-01. This PR fixes a fundamental logic error where the daemon ignores actionable tasks. It is critical for user trust in the automation capabilities.
*   **[Issue #703: Logging](https://github.com/nullclaw/nullclaw/issues/703):** Created 2026-03-23. Open for 10 days without a resolution. Users cannot debug heartbeat issues effectively without this visibility.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-02

## 1. Today's Overview
IronClaw is currently in a **high-velocity development phase** with significant maintenance overhead. The project shows **strong activity with 50 updated PRs and 37 issues** in the last 24 hours. Continuous integration (CI) is highly active, with numerous "staging-promote" PRs automatically merging updates, suggesting a robust but busy pipeline. However, **stability concerns are emerging**, specifically regarding CLI security, shell metacharacter protection, and blocking filesystem operations in async contexts, as flagged by automated CI reviews.

## 2. Latest Releases
No new releases were published today.

## 3. Project Progress
**Notable Merged/Closed PRs & Features:**
*   **CLI Security Fix ([#1869](https://github.com/nearai/ironclaw/pull/1869)):** Addressed issue `#1840` by ensuring `--cli-only` mode strictly suppresses non-CLI listeners (webhooks, gateways, tunnels), improving security adherence for CLI-only users.
*   **Config System Enhancements ([#1401](https://github.com/nearai/ironclaw/pull/1401)):** Added conflict detection warnings to alert users when environment variables override explicit user configurations (`config set` or TOML), resolving confusion in the configuration hierarchy.
*   **Infrastructure & Promotion:** Multiple automated CI promotion PRs (e.g., `#1879`, `#1883`, `#1885`) were merged, indicating steady progress on the `staging` branch towards the main branch.

## 4. Community Hot Topics
**User Experience & Ease of Use:**
*   **[Issue #1852: "should make it easy to use"](https://github.com/nearai/ironclaw/issues/1852)** (4 comments): Users are requesting a simplification of the configuration process. The feedback highlights that while performance ("fast and safe") is appreciated, the current technical barrier to configuration is too high for non-technical users.
    *   *Underlying Need:* A streamlined setup wizard or simplified config UI is needed to broaden adoption.

**UI/UX Friction:**
*   **[Issue #1876: "all the ui error should display this in a nicer way"](https://github.com/nearai/ironclaw/issues/1876)**: Users are reporting that error messages in the interface are raw and lack formatting, diminishing the perceived polish of the tool.
*   **[Issue #1877: "buttons on should be on the main interface"](https://github.com/nearai/ironclaw/issues/1877)**: Requests moving frequently used settings from the dashboard to the main chat interface to reduce navigation friction.

## 5. Bugs & Stability
**High Severity Issues (Flagged by Staging CI):**
*   **[Issue #1882: MCP server name validation lacks shell metacharacter protection](https://github.com/nearai/ironclaw/issues/1882)** (Severity: HIGH): A critical security vulnerability where MCP server names are not sanitized for shell metacharacters, potentially leading to injection attacks.
*   **[Issue #1881: Module signature breaking change inadequately tracked](https://github.com/nearai/ironclaw/issues/1881)** (Severity: HIGH): Recent changes to config `resolve()` functions may break existing modules without proper version tracking or warning.
*   **[Issue #1880: Blocking filesystem operation in async context](https://github.com/nearai/ironclaw/issues/1880)** (Severity: HIGH): `cleanup_job()` is using synchronous file operations (`std::fs::remove_file`) within an async runtime, which can cause performance degradation or blocking.

**Reported User Bugs:**
*   **[Issue #1874: "Bot command extremly slow"](https://github.com/nearai/ironclaw/issues/1874)**: Users report significant latency when executing slash commands compared to standard interactions.
*   **[Issue #1840: `--cli-only` starts webhook server](https://github.com/nearai/ironclaw/issues/1840)**: *Fixed* in PR #1869. Previously, CLI-only mode ignored `HTTP_HOST`/`HTTP_PORT` and opened unexpected listeners.

## 6. Feature Requests & Roadmap Signals
*   **Unified Workspace VFS ([#1894](https://github.com/nearai/ironclaw/issues/1894)):** A major architectural proposal to merge filesystem, database, and remote storage behind a mount-based abstraction. This aims to resolve confusion between `file_write` and `memory_write` across different deployment modes.
*   **Direct OAuth/Social Login ([#1771](https://github.com/nearai/ironclaw/issues/1771)):** A request for first-class support for Google, Apple, GitHub, and NEAR wallet authentication, removing the current reliance on complex reverse-proxy SSO setups.
*   **LLM Local Network Access ([#1696](https://github.com/nearai/ironclaw/pull/1696)):** An open PR proposing `LLM_ALLOW_LOCAL_NETWORK` to permit connections to private IP endpoints (LAN) for local LLM development, addressing strict SSRF validations.

## 7. User Feedback Summary
*   **Configuration Fatigue:** Users like **LeiYanhua** (#1852) feel the project is moving fast but is becoming too complex to configure without IT knowledge.
*   **UI Inconsistency:** Users (**Kampouse**) are noting rough edges in the UI, specifically regarding error displays (#1876) and the placement of utility buttons (#1877).
*   **Performance Concerns:** There is a specific complaint regarding the sluggishness of slash commands (#1874), suggesting a potential inefficiency in the command parsing pipeline.

## 8. Backlog Watch
*   **Tool Schema Discovery (Enhancement):** Issues **#1338, #1337, #1334, #1331, #1330** remain open but updated. These issues focus on improving how the LLM model understands tool usage (e.g., `http` policies, `create_job` modes). They are tagged with `bug_bash` and `on hold`, suggesting they are known quality-of-life improvements waiting for implementation.
*   **E2E Test Coverage Gaps:** Issue **#1779** and its sub-issues (#1782, #1783, #1784, #1787) track significant gaps in end-to-end testing, specifically for error recovery, edge cases, and connectivity resilience. These are currently unresolved, representing a potential risk area for long-term stability.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-02

## 1. Today's Overview
LobsterAI has seen a high level of development activity today, with **50 Pull Requests** updated and **19 new Issues** reported. The project appears to be in a stabilization phase for the current release, focusing heavily on user experience (UX) refinement and resolving critical stability bugs regarding the OpenClaw gateway. While no new release was published today, the significant number of merged PRs (27 closed/merged) suggests that an update—likely addressing context overflows and gateway crashes—is imminent and actively being prepared.

## 2. Latest Releases
**No new releases published today.**
*Note: Based on the high volume of merged PRs, users should monitor the repository for a patch release (likely `v2026.4.x`) addressing gateway stability and context overflow issues.*

## 3. Project Progress
**Merged & Closed PRs (Highlights):**
*   **[PR #1244 (CLOSED)](https://github.com/netease-youdao/LobsterAI/pull/1244)**: Added a **configurable send message shortcut** (Enter, Shift+Enter, etc.), addressing a long-standing request for user preference customization.
*   **[PR #533 (CLOSED)](https://github.com/netease-youdao/LobsterAI/pull/533)**: Implemented **performance optimizations** for `coworkStore`, fixing N+1 database query loops and reducing session startup latency.
*   **[PR #689 (CLOSED)](https://github.com/netease-youdao/LobsterAI/pull/689)**: Established a **code quality toolchain** (Prettier, ESLint v9, Husky), ensuring better long-term maintainability.
*   **[PR #846 (CLOSED)](https://github.com/netease-youdao/LobsterAI/pull/846)**: Redesigned the **Skill Selection interaction**, moving from a dropdown to a modal with hover previews and category filtering.
*   **[PR #512 (CLOSED)](https://github.com/netease-youdao/LobsterAI/pull/512)**: Fixed a critical bug where **sessions would freeze indefinitely** when using non-Anthropic models due to missing idle timeouts.

**Active Development:**
*   **Scheduled Tasks & NLU**: PR #1256 adds natural language parsing for scheduled task times (LLM-to-cron).
*   **UI Polish**: PR #1260 adds headers and branding to exported conversation images.
*   **Sidebar UX**: PR #1253 implements an icon-only sidebar mode when collapsed.

## 4. Community Hot Topics
*   **[Issue #1187: Context Overflow Settings](https://github.com/netease-youdao/LobsterAI/issues/1187)** (👍 1)
    *   **Topic:** Users are encountering `Context overflow` errors with DeepSeek and similar models.
    *   **Signal:** Strong demand for **manual context window and max token settings** in the UI. Users want to bypass hard-coded limits to fit larger prompts.
*   **[Issue #1213: Export as Markdown](https://github.com/netease-youdao/LobsterAI/issues/1213)**
    *   **Topic:** Request to export chat history as Markdown files.
    *   **Signal:** Current "Export to Image" is insufficient for users who need to edit or archive text-based logs.

## 5. Bugs & Stability
*   **CRITICAL - Gateway Restart Loop:**
    *   **[#1243](https://github.com/netease-youdao/LobsterAI/issues/1243)** & **[#1217](https://github.com/netease-youdao/LobsterAI/issues/1217)**: The `qwen-portal-auth` plugin is causing OpenClaw gateways to restart every 5–20 minutes on Windows.
    *   **Fix:** A fix is actively being developed in **[PR #1248](https://github.com/netease-youdao/LobsterAI/pull/1248)**.
*   **CRITICAL - API Key Leakage:**
    *   **[#1202](https://github.com/netease-youdao/LobsterAI/issues/1202)**: Agents are currently revealing model API keys and file paths when prompted.
    *   **Severity:** High security risk.
*   **HIGH - Model Limit State:**
    *   **[#1240](https://github.com/netease-youdao/LobsterAI/issues/1240)**: If one API rate-limits, the entire UI becomes unresponsive/unusable, preventing switching to other available models.
    *   **Fix:** A recovery mechanism is in progress via **[PR #1247](https://github.com/netease-youdao/LobsterAI/pull/1247)**.
*   **MEDIUM - File Handling:**
    *   **[#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)**: Custom skills installed by the Agent are saved to the wrong directory, causing them to disappear after restart.
    *   **[#148](https://github.com/netease-youdao/LobsterAI/issues/148)**: Integration issues with `midscene` causing execution errors in the sandbox.

## 6. Feature Requests & Roadmap Signals
*   **Context Configuration:** Users explicitly requesting the ability to set **Max Tokens** and **Context Window** sizes manually (Issue #1187).
*   **Data Loss Prevention:**
    *   Multiple requests for "Unsaved Changes" warnings in Settings (Issue #1237) and Scheduled Task forms (Issue #1245).
    *   *Roadmap Signal:* The project is actively addressing this (see PR #1252, PR #1258), indicating a push for better data integrity.
*   **Advanced Tooling:**
    *   **[#1192](https://github.com/netease-youdao/LobsterAI/issues/1192)**: Request for persistent "default configurations" for tools (e.g., headless browser mode) rather than relying on LLM instruction following.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **"Gateway Hopping":** Users are frustrated by the frequent, disruptive restarts of the backend gateway, often described as the application "paralyzing" itself.
    *   **"Silent Data Loss":** Closing a settings window or a scheduled task form by accident results in lost work with no warning.
    *   **"Littered Directories":** Users are annoyed that system files (AGENTS.md, USER.md) are force-created in every project workspace (Issue #1196).
    *   **"Language Mixing":** English users are experiencing Chinese characters appearing in prompts and UI labels (Issue #1223), breaking the immersion.
*   **Satisfaction:**
    *   Users appreciate the new Natural Language scheduling features and the recent performance improvements in the database queries.

## 8. Backlog Watch
*   **[Issue #1240: Model Recovery](https://github.com/netease-youdao/LobsterAI/issues/1240)**: A critical usability issue where the app fails to start if the config is in a "limited" state. Requires immediate attention to prevent user lockout.
*   **[Issue #1202: Security/Key Leakage](https://github.com/netease-youdao/LobsterAI/issues/1202)**: A fundamental security flaw where the LLM can be instructed to dump its own configuration secrets. Needs a sanitization layer on the Agent's output.
*   **[PR #1249: DiffView Rendering](https://github.com/netease-youdao/LobsterAI/pull/1249)**: An open PR fixing a visual regression where code diffs (Edit tool) are not rendering correctly for certain providers.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project digest for **Moltis** as of **2026-04-02**.

### 1. Today's Overview
Moltis is demonstrating high development velocity with a strong focus on expanding its integration ecosystem. The repository has seen significant activity with **8 Pull Requests** updated in the last 24 hours, predominantly focused on adding new channels (Matrix, MS Teams) and capabilities (Firecrawl, Browser UI). While feature addition is aggressive, stability is a concern; **3 new bugs** were reported in the same period, specifically regarding UI reactivity in the web dashboard and WhatsApp message parsing. The project appears to be in a feature-heavy development cycle, likely preparing for a future release, though users on the `v20260328.03` snapshot may encounter friction with connection flows.

### 2. Releases
*No new releases published in the last 24 hours.*

### 3. Project Progress
**Merged & Closed Features:**
*   **[PR #537] Matrix Integration:** Successfully merged. This PR adds support for the Matrix protocol using the official Rust SDK (`matrix-sdk` v0.16), allowing for DMs, room messaging, and interactions via the web dashboard.
*   **[PR #530] Ngrok Tunneling:** Closed. This PR attempted to add native public tunneling support without the external binary. While closed, it indicates ongoing work to improve self-hosting accessibility.
*   **[Issue #523] Session Naming:** Closed. An enhancement request regarding the naming conventions for Discord sessions was resolved.

**Active Development (Open PRs):**
*   **[Firecrawl Integration (#541)]**: A new scraping and search provider is being added to handle JS-heavy sites.
*   **[Interactive Browser UI (#531)]**: A new CDP (Chrome DevTools Protocol) screencast UI is being built to visualize browser agent actions.
*   **[MS Teams Support (#529)]**: Comprehensive implementation for MS Teams, including JWT verification and retry logic, is under review.

### 4. Community Hot Topics
*   **[Issue #536]: Preact Signal Reactivity Broken**
    *   **Status:** Open | **Severity:** High
    *   **Analysis:** Users are unable to connect new channels (Telegram, Discord, etc.) via the Settings page because the "Connect" modals fail to open. This is a critical UI regression preventing onboarding.
    *   **[Link](https://github.com/moltis-org/moltis/issues/536)**

*   **[PR #540]: UX Improvements for Model Lists**
    *   **Status:** Open
    *   **Analysis:** This PR addresses user experience clutter by collapsing long model lists (e.g., OpenAI's 111 models) and implementing smart sorting. This reflects community feedback that the provider configuration interface is overwhelming.

### 5. Bugs & Stability
**Reported Today:**
1.  **[CRITICAL] Web UI Modal Failure (#536):**
    *   **Issue:** Channel connection modals do not open.
    *   **Root Cause:** Preact signals in a nested render context are not triggering re-renders.
    *   **Impact:** Users cannot configure Telegram, Discord, Slack, or Matrix.
    *   **Fix PR:** None yet identified; issue opened today.
2.  **[HIGH] WhatsApp Message Parsing Failure (#534):**
    *   **Issue:** Inbound WhatsApp messages are decrypted but parsed as "unhandled message type." The bot replies "I can't respond to this message yet" to all DMs.
    *   **Affected Version:** `v20260328.03` / `whatsapp-rust 0.2.0`.
    *   **Environment:** Termux/Android.
    *   **Fix PR:** None yet.

### 6. Feature Requests & Roadmap Signals
*   **Langfuse Tracing (#535):** A new open PR proposes adding deep observability via Langfuse integration. This signals a shift towards enterprise-grade debugging and tracing for agent executions.
*   **Firecrawl Support (#541):** The addition of Firecrawl as a scraping provider suggests the project is moving beyond basic HTTP fetching to handle complex, bot-protected web content more reliably.
*   **Browser Viewing UI (#531):** There is a clear roadmap intent to make the "Browser" tool more transparent to users, moving from headless operations to a visible "screencast" interface.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Configuration Overload:** Users are finding the model selection in settings cluttered (addressed in pending PR #540).
    *   **Platform Reliability:** Users relying on WhatsApp are experiencing total message handling failure (Issue #534).
    *   **Onboarding Broken:** New users trying to configure channels are hitting a dead end with the non-functional modals (Issue #536).
*   **Positive Signals:** The rapid closure of the Matrix integration PR suggests the community is receiving requested multi-platform support quickly.

### 8. Backlog Watch
*   **[PR #529] MS Teams Implementation:** While open, this PR is comprehensive (JWT, retry logic, webhooks). It is a complex addition that requires attention to ensure it doesn't suffer the same modal/UI fate as the current bug in #536.
*   **[PR #500] Matrix Channel:** Although an older PR (created Mar 28), it is still active and updated today. It represents a significant capability increase (SSRF validation, edit-in-place streaming) and is close to merge readiness.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Project CoPaw Daily Digest: 2026-04-02

## 1. Today's Overview
CoPaw is experiencing a high-velocity cycle following the recent v1.0.0 release. The project shows robust activity with **50 issues** and **50 PRs** updated in the last 24 hours, indicating a highly responsive maintenance phase. However, user sentiment is mixed; while feature requests are abundant, stability concerns regarding local model inference, agent execution persistence, and UI regression (skill renaming bugs) are prominent. The community is actively engaging in multi-agent workflows, pushing the boundaries of the platform's capabilities.

## 2. Releases
* **v1.0.0.post3**
    * **Status**: Released.
    * **Key Changes**:
        * Version bump.
        * UI/UX improvements: "Dark style" applied to skill and skillpool interfaces.
        * CI/DevOps: Added options to trigger OSS (Object Storage Service) uploads.
    * **Migration Notes**: Standard patch release; no breaking changes expected from `.post2` to `.post3`.

## 3. Project Progress
*   **Local Model Provider Fixes**: Critical patches were merged in **#2735** to fix GPU detection issues by default ("CoPaw Local use GPU by default"), resolve Windows desktop download errors, and fix image probing. This addresses high-severity bugs reported in **#2691**, **#2721**, and **#2768**.
*   **DingTalk Channel Enhancement**: **#2741** refactored the core shared logic to support AI Cards in workspace tracker paths, fixing a regression in **#2726** where AI Cards failed in workspace contexts.
*   **Windows & Channel Stability**: Fixes for WeCom (Enterprise WeChat) daemon mode stdout redirection (**#2760**) and WeChat channel file handling (**#2597**) were merged.
*   **Console Experience**: Dark mode toggle support was added in **#2678**.

## 4. Community Hot Topics
*   **🛎️ Call for Contribution: Open Tasks** ([#2291](https://github.com/agentscope-ai/CoPaw/issues/2291))
    *   *Status*: Open | *Engagement*: 40 comments.
    *   *Analysis*: A central hub for community contribution. High interest indicates a desire to modularize and expand the ecosystem, but users need clear direction on task ownership.
*   **🤖 Multi-Agent "Approve" UX** ([#2720](https://github.com/agentscope-ai/CoPaw/issues/2720))
    *   *Status*: Open | *Engagement*: 5 comments, 2 👍.
    *   *Analysis*: Users find typing `/approve` unintuitive. There is a strong demand for interactive UI buttons to authorize agent actions, suggesting a shift toward "App-like" interactions rather than CLI-driven chat.
*   **🧠 Self-Evolution Skill Proposal** ([#2773](https://github.com/agentscope-ai/CoPaw/pull/2773))
    *   *Status*: Open PR | *Engagement*: High interest.
    *   *Analysis*: A proposal for an engine that automatically captures errors and performs root cause analysis. This signals the community's interest in "Agentic AI" that can debug and improve itself, moving beyond static skill sets.

## 5. Bugs & Stability
*   **[CRITICAL] Skill Deletion Bug**: **#2770** (Renaming a skill wipes scripts, leaving only `.md`).
    *   *Severity*: High. Data loss affecting core developer workflows.
    *   *Fix Status*: PR **#2775** (fix/skill-rename-lost) is open and ready.
*   **[HIGH] Local Model Instability**: Users reporting frequent interruptions and OpenAI API parsing errors during long tasks (**#2739**, **#2732**).
    *   *Details*: Related to `llama.cpp` grammar parsing and stream interruptions.
*   **[MEDIUM] Task Persistence**: **#2723** reports that switching channels causes active agent tasks and execution history to disappear.
*   **[MEDIUM] UI Entry Failure**: **#2293** (Closed) highlighted a scenario where the QA agent could "break" the UI via syntax errors in generated code, requiring reinstallation.

## 6. Feature Requests & Roadmap Signals
*   **SiliconFlow Integration**: Request in **#812** to support the SiliconFlow provider API.
*   **WebUI Authentication**: **#2766** (Closed) requested token/password protection for the WebUI to prevent unauthorized access when exposed via Ingress.
*   **Multi-Agent Meeting System**: **#2774** proposes a structured "SACP" based meeting system for multiple agents to collaborate with role-based speaking and decision documentation.
*   **Skill Management UI**: **#2747** requests a "List Mode" for skills to improve searchability, as the current Card Mode is inefficient for managing many skills.

## 7. User Feedback Summary
*   **Pain Points**:
    *   **Upgrade Chaos**: Users expressed frustration ("好混乱啊") regarding changes in skill directory structures after upgrading to v1.0.0 (**#2761**), leading to duplicated skill files and confusion.
    *   **Platform Integration**: While integration with DingTalk/QQ is popular, file handling (e.g., PPT generation) is causing agent crashes (**#2642**).
    *   **Resource Anxiety**: Users are actively monitoring VRAM usage (**#2776**) and expressing concerns about the stability of long-running tasks without proper keep-alive mechanisms.
*   **Positive Signals**: The "Dark Mode" and recent local model fixes are well-received.

## 8. Backlog Watch
*   **#2591**: *MCP Server Initialization*. Issues with `client.connect()` timeouts causing tool loading failures. This is critical for extensibility.
*   **#1536**: *OAuth for Codex*. Long-standing request to support OAuth login for model providers.
*   **#2459**: *Multi-Agent Tool Guard*. The `/approve` command fails when forwarded between inter-agent communications. This is a blocker for complex multi-agent automations.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# Project Digest: EasyClaw / RivonClaw
**Date:** 2026-04-02
**Project:** [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. Today's Overview
The project is currently in a stable maintenance state with active development focused on localization. While there is no issue activity reported in the last 24 hours, the codebase saw activity via one open Pull Request and the release of a new version (v1.7.8). The project appears to be prioritizing accessibility and platform support, evidenced by the recent internationalization efforts and detailed macOS installation troubleshooting in the release notes.

### 2. Releases
**New Release: [v1.7.8 RivonClaw](https://github.com/gaoyangz77/easyclaw/releases)**
*   **Focus:** Platform Support & Bug Fixes.
*   **Key Changes:**
    *   **macOS Compatibility:** The release specifically addresses installation hurdles for macOS users. It includes instructions to bypass Gatekeeper errors ("'RivonClaw' is damaged..."), which arises when distributing unsigned binaries outside the App Store.
*   **Migration/Notes:** Users on macOS may need to use the Terminal command provided in the release notes to allow the application to run if blocked by security settings.

### 3. Project Progress
*   **Pull Request Merged/Closed:** 0 merged or closed PRs in the last 24 hours.
*   **Active Development:** Feature development is ongoing but not yet merged.
    *   **[PR #21: feat(i18n): add 5 new languages](https://github.com/gaoyangz77/rivonclaw/pull/21):** This PR represents significant advancement in the project's globalization efforts. It aims to expand support from 2 languages to 7 (adding Traditional Chinese, Japanese, Korean, Vietnamese, and Hindi) by fully localizing 1,333 translation keys.

### 4. Community Hot Topics
*   **[PR #21: feat(i18n): add 5 new languages](https://github.com/gaoyangz77/rivonclaw/pull/21)**
    *   **Status:** Open (Created 2026-03-18, Updated 2026-04-01).
    *   **Activity:** This is the only active discussion item.
    *   **Underlying Needs:** The community is pushing for broader accessibility. The addition of specific Asian languages (Japanese, Korean, Vietnamese, Hindi) suggests a growing user base in these regions or a strategic move to capture these markets. The high volume of translation keys (1333) indicates a complex application with deep UI text requirements.

### 5. Bugs & Stability
*   **Reported Bugs:** 0 new issues reported in the last 24 hours.
*   **Known Stability Issues:**
    *   **macOS Gatekeeper Blocking:** While not a new bug report, the v1.7.8 release notes highlight a recurring friction point regarding the "app is damaged" warning on macOS. This indicates a lack of code signing certificates, which remains a primary user experience hurdle for macOS adopters.

### 6. Feature Requests & Roadmap Signals
*   **Internationalization (i18n):** PR #21 signals that full multilingual support is a top priority for the upcoming version. The rigorous addition of 1,333 keys per language suggests the next release will be fully localized for the supported locales.
*   **Platform Hardening:** The release notes for v1.7.8 suggest a focus on stabilizing the onboarding process for macOS users.

### 7. User Feedback Summary
*   **Pain Points:** macOS users face significant friction during installation due to OS-level security restrictions on unsigned software.
*   **Satisfaction:** The project is actively responding to these pain points by providing detailed workarounds (Terminal commands) in the release notes, improving user success rates even without formal code signing.

### 8. Backlog Watch
*   **Review Pending:** [PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21) has been open for two weeks (since March 18). Given the substantial size of the change (5 new languages, ~1333 keys each), it requires maintainer review to ensure consistency and accuracy before merging.
*   **Issue Backlog:** No active issues are currently reported, suggesting a clean backlog or that users are prioritizing direct PR contributions over issue reporting.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*