# OpenClaw Ecosystem Digest 2026-04-09

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-09 00:11 UTC

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

# Project Digest: OpenClaw (2026-04-09)

## 1. Today's Overview
OpenClaw is experiencing **extremely high development velocity** today, with over 1,000 issues and pull requests updated in the last 24 hours. The project is in an active stabilization phase following recent major feature additions, with the community focused heavily on resolving regressions introduced in versions 2026.4.5 through 2026.4.8. **Stability is the primary concern**, as a significant portion of the top 50 issues by activity relates to installation failures, missing dependencies (specifically `@buape/carbon` and `grammy`), and timeout configurations being ignored. Simultaneously, new feature development continues aggressively, with major PRs open for "Krea AI" integration, Nix environments, and new channel plugins.

## 2. Releases
Two new versions were released recently to address critical packaging bugs.

*   **v2026.4.8** (Latest):
    *   **Fixes**: Addresses the "Telegram/setup" crash where installed npm builds tried to import missing `dist/extensions/telegram/src/*` files. This release ensures setup and secret contracts are loaded through packaged top-level sidecars.
    *   **Context**: This is a hotfix following issues #62868 and #62875.
*   **v2026.4.7**:
    *   **Changes**: Introduced a first-class `openclaw infer ...` CLI hub for provider-backed inference (models, media, web, embeddings).
    *   **Issue**: Users reported this version broke the gateway startup due to missing bundled dependencies.

## 3. Project Progress
*   **Fixes Merged/Closed**:
    *   **Timeouts & Failover**: Merged PR #47994 (`fix(agent): prevent fallback model from permanently overwriting agent config`), addressing #47705.
    *   **Streaming**: Improved boundary-aware heuristics for merging streaming chunks (PR #62624).
    *   **Discord**: Fixed model picker references in the WebUI (PR #63416) and prepared fixes for Markdown table splitting in Discord messages (PR #63438).
*   **Features in Progress**:
    *   **Media Generation**: PR #63435 is open to add **Krea AI** as a bundled skill (20+ image models, 7 video models).
    *   **Channels**: PR #62934 aims to bundle the **E-Claw** channel plugin natively.
    *   **Infrastructure**: PR #63417 proposes adding **Nix** support for reproducible dev environments and MicroVMs.

## 4. Community Hot Topics
*   **#75 [Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (77 comments)
    *   *Demand:* Users are clamoring for desktop apps for Linux and Windows to match the macOS/iOS/Android experience.
*   **#49971 [RFC: Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971)** (76 comments)
    *   *Trend:* A technical deep-dive into integrating ERC-8004, W3C DID, and VCs for agent identity. High engagement suggests the community is moving toward serious "Agentic Web" infrastructure.
*   **#62994 & #62272 [Install Failures: `@buape/carbon`](https://github.com/openclaw/openclaw/issues/62994)**
    *   *Pain Point:* The "Cannot find module '@buape/carbon'" error is dominating the issue tracker, affecting users on npm, Brew, and Windows.
*   **#46049 [LLM Request Timeout Ignored](https://github.com/openclaw/openclaw/issues/46049)** (24 comments)
    *   *Critical Bug:* Users reporting that timeout settings are hardcoded or ignored, causing local LLMs to fail prematurely.

## 5. Bugs & Stability
**Severity: High (Widespread Regression)**
*   **Missing Dependencies**: Issues #62994, #62272, #63225, #63043.
    *   *Symptom*: `Cannot find module '@buape/carbon'`, `grammy`, or `@larksuiteoapi/node-sdk`.
    *   *Cause*: The build pipeline for npm/brew appears to be failing to bundle plugin runtime dependencies correctly since v2026.4.5.
    *   *Status*: Partially addressed in v2026.4.8, but user reports indicate it persists.
*   **Windows Path Handling**: Issues #61899, #62374.
    *   *Symptom*: `ERR_UNSUPPORTED_ESM_URL_SCHEME` on Windows.
    *   *Cause*: Node ESM loader rejecting absolute paths without `file://`.
*   **Agent Regressions**:
    *   **#57898**: User frustration over repeated breaking changes in tool usage.
    *   **#62505**: Coding agents failing to complete tasks after v2026.4.5 (worked in v2026.4.2).

**Severity: Medium**
*   **#61726**: WhatsApp outbound media sends fail silently (attachment dropped, text remains).
*   **#59598 / #62047**: Failover loops and embedded agent timeouts.

## 6. Feature Requests & Roadmap Signals
*   **Real-time Voice**: Issue #7200 requests bidirectional streaming audio (Twilio/WebRTC) for phone-like interactions.
*   **Per-Model Context**: Issue #31278 asks for `contextTokens` configuration per model, not just globally.
*   **Proxy Support**: Issues #43821 and #62181 highlight that `globalThis.fetch` (undici) ignores `HTTP_PROXY` env vars, blocking enterprise users.
*   **SSRF Flexibility**: Issue #25215 requests `web_fetch` to allow Clash/mihomo fake-ip ranges (currently blocked).

## 7. User Feedback Summary
*   **Frustration**: "ARE YOU GOING TO FRIGGING KEEP BREAKING THIS THING..." (Issue #57898) and "Why every release are breaking changes..." (Issue #63225). Users are exhausted by the frequency of regressions, particularly regarding broken dependencies and config compatibility.
*   **Platform Gaps**: The lack of native Linux/Windows apps is a significant gap for power users.
*   **Cost/Performance**: Users are sensitive to wasted tokens (Issue #22438) and API costs (Issue #63434 mentions $20 over 3 days due to heartbeat loops).

## 8. Backlog Watch
*   **#7200 [Real-time Voice]**: Open since Feb, high demand (16 👍).
*   **#31278 [Per-Model Context]**: Open since March, essential for diverse model usage.
*   **#43821 [HTTP Proxy]**: Critical for enterprise adoption, currently unaddressed.
*   **PR #63417 [Nix Support]**: A massive infrastructure addition (XL size) that needs maintainer review to ensure it aligns with core workflows.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: AI Agent & Assistant Landscape
**Date:** 2026-04-09
**Analyst:** Senior Open-Source Ecosystem Reporter

---

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is currently undergoing a **"Stability vs. Velocity" crunch**. While projects like **OpenClaw** and **Zeroclaw** are aggressively pushing feature velocity (inference hubs, complex derive macros), they are simultaneously suffering from widespread regressions in packaging and core stability (dependencies, timeout handling). This has created a bifurcated market: "Power Frameworks" (OpenClaw, IronClaw, Zeroclaw) that offer maximum extensibility but require high operational maintenance, versus "Polished Clients" (Moltis, CoPaw, EasyClaw) that are prioritizing resource management, UI refinement, and platform native-feels. Across the board, there is a massive demand for **agentic memory management** and **cross-platform interoperability**, signaling that the community is moving beyond simple "chat-with-LLM" scripts toward persistent, autonomous collaborators.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Stability Trend |
| :--- | :---: | :---: | :--- | :--- |
| **OpenClaw** | High (50+) | Very High (1000+) | **v2026.4.8** (Hotfix) | 🔴 **Critical** (Packaging failures) |
| **CoPaw** | 50 | 50 | **v1.0.2-beta.1** | 🟠 **Recovering** (CPU leaks addressed) |
| **IronClaw** | 13 | 50 | No Release (Staging) | 🟡 **Building** (Major Arch Review) |
| **Zeroclaw** | 43 | 50 | **v0.6.9** (Icy Crab) | 🟠 **Volatile** (Config chaos) |
| **NanoClaw** | 5 | 19 | No Release | 🟢 **Hardening** (Infra focus) |
| **LobsterAI** | 10 | 32 | **2026.4.8** | 🟡 **Mixed** (Regressions reported) |
| **NanoBot** | 22 | 43 | No Release | 🟢 **Active** (Merge window) |
| **Moltis** | 6 | 7 | **20260408.01** | 🟢 **Stabilizing** (Rapid fixes) |
| **PicoClaw** | 14 | 27 | **v0.2.6** | 🟠 **Fragile** (Loop panics) |
| **NullClaw** | 4 | 15 | **v2026.4.7** | 🟢 **Stable** (Win/Linux fixes) |
| **TinyClaw** | 3 | 0 | No Release | 🔵 **Planning** (Proposals only) |
| **EasyClaw** | 0 (Closed) | 0 | **v1.7.9** | 🟢 **Mature** (Maintenance mode) |
| **ZeptoClaw** | 0 | 0 | N/A | ⚫ **Dormant** |

---

## 3. OpenClaw's Position
**OpenClaw** remains the undeniable **volume leader** in terms of raw development velocity (1000+ updated issues/PRs) and community scale. It is attempting to serve as the "Reference Implementation" for the ecosystem, evidenced by its push into standard "Agent Identity" (ERC-8004, W3C DID) and aggressive provider integration.

*   **Advantages:** Unmatched feature breadth (Krea AI, Nix, E-Claw) and the largest user base generating feedback.
*   **Differentiation:** Unlike Rust-based peers (Zeroclaw, IronClaw), OpenClaw’s TypeScript/Node foundation offers faster prototyping for web-centric integrations but currently struggles with bundling/dependency hell (the `@buape/carbon` crisis).
*   **Community Size:** Significantly larger than peers, with issues hitting 70+ comments, versus the 10-20 comment norm for smaller projects.
*   **Risk:** Its position is threatened by **Technical Debt**. The frequency of breaking changes is exhausting users ("ARE YOU GOING TO FRIGGING KEEP BREAKING THIS THING..."), creating an opening for more stable forks like **NanoClaw** or **Zeroclaw**.

---

## 4. Shared Technical Focus Areas
Analyzing the digests reveals five "Convergent Evolution" themes where nearly all projects are simultaneously investing resources:

1.  **Multimodal & Vision Inputs**
    *   **Projects:** LobsterAI (File context regression), PicoClaw (Browser automation), IronClaw (Screenshot validation).
    *   **Need:** Reliable ingestion of images/files as context, not just attachments. Agents need to "see" UIs to automate them.
2.  **Agentic Memory & Context Management**
    *   **Projects:** OpenClaw (Per-model context), NanoBot (Semantic retrieval), Zeroclaw (Recursive memory bug), NanoClaw (Graph memory).
    *   **Need:** Moving beyond simple token trimming. Users want persistent, searchable memory (RAG/Vectors) that doesn't blow up context windows.
3.  **Platform Native Desktop Support**
    *   **Projects:** OpenClaw (Linux/Windows requests), NullClaw (Shell execution fixes), PicoClaw (Isolation).
    *   **Need:** Agents must control the local OS (files, terminal), not just chat in a browser. Windows/Linux compatibility is the new frontier.
4.  **Observability & Debugging**
    *   **Projects:** Zeroclaw (Full content logging), CoPaw (Plan mode), NanoBot (Thinking visibility).
    *   **Need:** Users are frustrated by "black box" failures. They need to see the `Chain of Thought` to debug why agents loop or fail.
5.  **Cost & Resource Control**
    *   **Projects:** TinyClaw (Token reduction), PicoClaw (Account stacking), CoPaw (CPU leak fixes).
    *   **Need:** Keeping agents "always on" is expensive. Users are demanding granular control over API usage and local resource consumption.

---

## 5. Differentiation Analysis
The ecosystem is splitting into distinct architectural tiers:

*   **The "Heavy Frameworks" (TypeScript):** **OpenClaw** and **NanoClaw**. Focused on massive plugin ecosystems and cloud-native architectures. *Trade-off: Complex installation (npm hell).*
*   **The "Performance Natives" (Rust):** **Zeroclaw**, **IronClaw**, **PicoClaw**. Focused on speed, memory safety, and low-level control. *Trade-off: Steeper learning curves, rapidly changing APIs (e.g., Zeroclaw's config V2).*
*   **The "Productivity Clients" (Python/Electron):** **LobsterAI**, **CoPaw**, **Moltis**, **EasyClaw**. These prioritize the UI/UX, featuring office integration, rich dashboards, and smoother onboarding. *Trade-off: Often reliant on web technologies, leading to "heavier" resource usage (CoPaw's CPU spikes).*
*   **The "Niche/Bots":** **NanoBot** (Python) and **NullClaw**. These focus on specific channels (Discord/Telegram) and scriptable agent behaviors rather than full-stack platforms.

---

## 6. Community Momentum & Maturity
*   **Hyper-Growth (High Velocity, High Risk):** **OpenClaw**. It is the center of gravity but suffering from scaling pains.
*   **Rapidly Maturing:** **CoPaw** and **Moltis**. Both projects are showing high responsiveness to critical bugs (CoPaw's CPU fixes; Moltis's LAN auth fixes) and are converging on stable "professional" releases.
*   **Stable/Legacy:** **EasyClaw**. Quiet maintenance with few bugs suggests a mature, satisfied user base that isn't asking for radical new features.
*   **Emerging:** **IronClaw** and **NanoClaw**. High activity in PRs but fewer releases suggests they are building "v2.0" architectures that will be significant players in 6 months.

---

## 7. Trend Signals for Developers
1.  **The "Protocol Wars" are Heating Up:** Discussions around **MCP (Model Context Protocol)** in IronClaw vs. **custom skill frameworks** in OpenClaw/CoPaw indicate that standardizing how agents talk to tools is the next major battleground.
2.  **Local-First is Mandatory:** Users are rebelling against API costs. Requests for "Account Stacking" (PicoClaw), "Local LLM" support (CoPaw, Moltis), and "Token Reduction" (TinyClaw) are dominating feature requests.
3.  **Agentic Security is becoming Real:** With the rise of **Browser Automation** and **Shell Access**, projects are rushing to implement **Isolation** (PicoClaw v0.2.6) and **Sandboxing**. This is the critical technical differentiator for 2026.
4.  **UX > Model Capability:** Feedback suggests users now assume models are smart enough. The friction point is *interaction*. Issues about "Slow Streaming," "Missing UI Buttons," and "Config Noise" are receiving more attention than "Model Accuracy."

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-09

## 1. Today's Overview
NanoBot is experiencing a period of high development velocity and community engagement. In the last 24 hours, the project saw significant activity with **43 Pull Requests** and **22 Issues** updated, indicating a robust "merge window" or active sprint phase. While no official release was published today, the repository is busy with integrations, with 18 PRs being merged or closed. The community is actively discussing architectural improvements (abstractions, sessions) and reporting edge cases in newer model formats (Gemma 4) and platform-specific channels (Windows, Discord, MS Teams).

## 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   *Note: Users are reporting version mismatches between `__init__.py` (0.4.1) and `pyproject.toml` (0.1.5), suggesting a release may be imminent or the versioning needs reconciliation.*

## 3. Project Progress (Merged/Closed PRs)
*   **Stability & Bug Fixes**
    *   **Discord Streaming:** [#2939](https://github.com/HKUDS/nanobot/pull/2939) (Closed) — Enabled streaming replies for Discord to fix empty final responses, aligning its behavior with Telegram.
    *   **Version Consistency:** [#2860](https://github.com/HKUDS/nanobot/pull/2860) (Closed) — Fixed the version mismatch by using `importlib.metadata` as the single source of truth, resolving discrepancies between `__init__.py` and `pyproject.toml`.
    *   **Memory & Hooks:** [#2827](https://github.com/HKUDS/nanobot/pull/2827) (Closed) — Implemented a keyword-triggered memory injection system, allowing specific prompts to be attached based on user input keywords.
    *   **Concurrency:** [#2930](https://github.com/HKUDS/nanobot/pull/2930) (Closed) — Addressed concurrency issues in the Cron job scheduler to prevent task overwriting and ensure proper scheduling across processes.
    *   **Feishu Polish:** [#2751](https://github.com/HKUDS/nanobot/pull/2751) (Closed) — Fixed the Feishu bot to remove reaction emojis after replying, matching the behavior of other channels.

## 4. Community Hot Topics
*   **Architectural Proposals:**
    *   [#2894 (Official Abstractions)](https://github.com/HKUDS/nanobot/issues/2894) — **CLOSED/Discussed.** A high-level proposal to standardize abstractions for providers, channels, and memory. This discussion signals a push towards a more modular plugin architecture for downstream extensions.
    *   [#2949 (Native WebUI)](https://github.com/HKUDS/nanobot/issues/2949) — **OPEN.** A vigorous debate on whether NanoBot should build a full-featured WebUI versus relying on CLI/Chat channels. This highlights a user desire for a dedicated graphical interface.

*   **User Experience:**
    *   [#2798 (Unified Sessions)](https://github.com/HKUDS/nanobot/issues/2798) — **OPEN.** Request for a "Unified Session" config toggle, allowing conversation continuity across different channels (e.g., swapping from Telegram to Discord without losing context). PR #2900 exists to address this.

## 5. Bugs & Stability
*   **Windows Environment Regression (High Severity):**
    *   **Issue:** [#2868](https://github.com/HKUDS/nanobot/issues/2868) — The `exec` tool is hardcoded to use `bash`, breaking functionality on Windows (even with WSL).
    *   **Status:** OPEN. Reported on 2026-04-06, active in comments.

*   **Model Compatibility (Gemma 4):**
    *   **Issue:** [#2944](https://github.com/HKUDS/nanobot/issues/2944) — "Thought leaks" in Gemma 4 models. The model outputs `<thought>` blocks which are currently not filtered out, exposing internal reasoning to users.
    *   **Fix:** PR [#2953](https://github.com/HKUDS/nanobot/pull/2953) is open to extend `strip_think()` to handle these tags.

*   **Metadata Leakage:**
    *   **Issue:** [#2947](https://github.com/HKUDS/nanobot/issues/2947) — Runtime Context metadata (System prompts, timestamps) is being sent to users via WeChat instead of remaining internal.

*   **Channel Specifics:**
    *   **DingTalk:** [#2696](https://github.com/HKUDS/nanobot/issues/2696) — Errors when sending HTML files.
    *   **MS Teams:** [#2920](https://github.com/HKUDS/nanobot/issues/2920), [#2921](https://github.com/HKUDS/nanobot/issues/2921) — Hardcoded strings in reply parsing and unimplemented restart notify configs.

## 6. Feature Requests & Roadmap Signals
*   **Multimodal Expansion:** PR [#2908](https://github.com/HKUDS/nanobot/pull/2908) proposes generalizing multimodal support to handle audio and video, not just images.
*   **New Integrations:**
    *   **Kagi Search:** PR [#2945](https://github.com/HKUDS/nanobot/pull/2945) proposes adding the Kagi search API as a provider.
    *   **WebSocket Channel:** PRs [#2946](https://github.com/HKUDS/nanobot/pull/2946) and [#2911](https://github.com/HKUDS/nanobot/pull/2911) are working on a native WebSocket server channel, potentially enabling the WebUI discussions mentioned above.
*   **Context Compression:** Issue [#2937](https://github.com/HKUDS/nanobot/issues/2937) requests embedding-based semantic retrieval to improve context handling beyond simple token trimming.
*   **Automatic Skills:** Issue [#2927](https://github.com/HKUDS/nanobot/issues/2927) asks for "Automatic Skill Discovery," where the agent recognizes recurring patterns and creates skills proactively.

## 7. User Feedback Summary
*   **Positive:** Users appreciate the recent "thinking and steps" visibility (Issue #2917), though some find it hard to interrupt once the loop starts.
*   **Negative:** Windows users are frustrated by regressions in basic tool execution (Issue #2868, #2917).
*   **Confusion:** Users are reporting "Python not found" errors (Issue #2917) and version mismatches (0.4.1 vs 0.1.5) following updates, suggesting some instability in recent nightly builds or deployment artifacts.

## 8. Backlog Watch
*   **Email Handling:** Issue [#2954](https://github.com/HKUDS/nanobot/issues/2954) reports inconsistent email checking/handling configuration.
*   **Skill System Limitation:** Issue [#2927](https://github.com/HKUDS/nanobot/issues/2927) highlights that the skill system is "entirely passive" and lacks auto-discovery.
*   **Matrix Verification:** Issue [#2641](https://github.com/HKUDS/nanobot/issues/2641) — Opened late March, tracking the lack of emoji verification for E2EE in Matrix.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-04-09

## 1. Today's Overview
Zeroclaw is experiencing a period of **high-intensity development** and significant turbulence. The project released **v0.6.9 (Icy Crab)** today, introducing configurable derive macros and dashboard enhancements, but the release was immediately followed by a surge of critical bug reports. The community is highly active, with **43 issues** and **50 pull requests** updated in the last 24 hours. Current activity is dominated by debugging a new configuration validation system, fixing stability issues in the Telegram channel, and resolving provider-specific errors (Gemini, DeepSeek, Qwen). While feature velocity is high, the increase in "workflow blocked" severity issues suggests a dip in stability following the recent config refactoring.

## 2. Releases
**v0.6.9 (Icy Crab)**
*   **Config System:** Introduced a configurable derive macro and the `zeroclaw props` CLI for better property management.
*   **Tools:** Browser tools are now enabled by default with auto-approve.
*   **Dashboard:** Implemented WebSocket broadcasting for cron job results and buffered SSE events for log persistence.
*   **Core:** Enabled heartbeat by default.
*   **Note:** This release coincides with a migration to a stricter configuration schema (see PR #5517), which has triggered false-positive warnings for valid keys like `api_key`.

## 3. Project Progress
*   **Refactoring & Schema Migration:**
    *   **PR #5517:** A major "forward-only schema versioning" effort (V1→V2) is open. It consolidates ambiguous top-level provider fields into `[providers.models.<name>]` and removes `channels.matrix.room_id` in favor of `allowed_rooms`. This signals a future breaking change that users should prepare for.
    *   **PR #5530:** Fixed a memory namespace isolation bug where agentic sub-agents were incorrectly writing to the root namespace instead of their own.
*   **Channel Fixes:**
    *   **PR #5525:** Addressed a logic flaw in Telegram where sending multiple images resulted in recursive/accumulated agent requests (N requests for N images).
    *   **PR #5506:** Fixed `zeroclaw channel send` failing for 14 supported channels that were missing from the build logic.
*   **Provider Compatibility:**
    *   **PR #5523:** Made Ollama native tool calling configurable, as previous assumptions that all Ollama models lacked native support were false (e.g., Qwen3.5).
    *   **PR #5454:** Fixed system prompt escaping and token estimation for DeepSeek V3.2.

## 4. Community Hot Topics
*   **Configuration Chaos (False Warnings)**
    *   **Issue #5414 / #5483 / #5507:** Multiple users reported seeing `Unknown config key ignored: "api_key"` despite valid configurations. This was caused by the new validation logic in v0.6.9 mishandling `Option` types and serde aliases.
    *   **Analysis:** Users are frustrated by the "noise" in logs warning them about valid settings. Maintainer *singlerider* has acknowledged this and PRs are in motion to switch validation to a JSON schema-based approach.
*   **Telegram Feature Parity**
    *   **Issue #5509:** Users are requesting voice message transcription support to match the feature set of "OpenClaw" (the TS counterpart).
    *   **Analysis:** This is a high-demand feature for mobile users relying on Telegram.
*   **Recursive Memory Disaster**
    *   **Issue #4916:** A critical design flaw was identified where `auto_save` creates a "recursive snowball" by saving `[Memory context]` recall blobs back into the database, eventually exhausting memory.
    *   **Analysis:** This is a fundamental data architecture issue requiring immediate attention to prevent data corruption.
*   **Web Dashboard Availability**
    *   **Issue #4866:** Users reporting "Web dashboard not available" errors persisting across versions, even with v0.6.9 improvements.

## 5. Bugs & Stability
**Severity S1 (Workflow Blocked):**
*   **[#5529](https://github.com/zeroclaw-labs/zeroclaw/issues/5529) / #5527:** **Gemini models failing.** Issues with `gemini-3-flash-preview` returning empty results and changes in OAuth logic blocking requests.
*   **[#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528):** **Email channel config broken.** The provided example configuration for email channels triggers logic errors (improper config validation).
*   **[#5500](https://github.com/zeroclaw-labs/zeroclaw/issues/5500):** **Ollama Tool Calling.** Hardcoded `false` for native tool support blocks valid models like Qwen3.5. (Fix in PR #5523).

**Severity S2 (Degraded):**
*   **[#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916):** **Memory Exhaustion.** The `auto_save` feature causes memory recall to save recursive snapshots.
*   **[#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221):** **Cost Tracking.** Model costs are not captured for schedules, command line, and web agents.
*   **[#5313](https://github.com/zeroclaw-labs/zeroclaw/issues/5313):** **Memory Leak.** Slack Socket Mode causes RSS to grow from 28MB to 460MB+ in 2 hours.

**Fixes Available:**
*   **[#5524](https://github.com/zeroclaw-labs/zeroclaw/pull/5524):** Fixes security scanner blocking safe redirects (e.g., `/dev/null`).
*   **[#5505](https://github.com/zeroclaw-labs/zeroclaw/pull/5505):** Fixes "reasoning" tags leaking into streams.

## 6. Feature Requests & Roadmap Signals
*   **Pre-LLM Shortcuts:** **[#5503](https://github.com/zeroclaw-labs/zeroclaw/issues/5503)** proposes bypassing the LLM for simple deterministic commands (like "open door") to reduce latency from ~8s to ~0.1s.
*   **Manual Cron Triggers:** **[#5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501)** requests a button to manually trigger cron jobs via the Web UI for testing.
*   **Content Logging:** **[#5504](https://github.com/zeroclaw-labs/zeroclaw/issues/5504)** asks for the ability to log full LLM input/output content, not just token counts.
*   **Configurable Tool Allowlists:** **[#5502](https://github.com/zeroclaw-labs/zeroclaw/issues/5502)** proposes an `allowed_tools` config option to restrict tool access without code changes.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Documentation:** Users are increasingly vocal about "vague" and "AI-slop" documentation (**Issue #5513**), specifically regarding the GitHub Wiki.
    *   **Onboarding:** The configuration migration (V1 to V2) is causing friction, with users struggling to understand why valid keys are being ignored.
    *   **Observability:** Users feel "blind" regarding what the AI is actually processing. Requests for full content logging (#5504) and cost tracking (#5221) are prominent.
*   **Satisfaction:**
    *   Users appreciate the cross-platform support and the move towards "Icy Crab" polish, but technical debt in specific channels (Slack memory leaks, Telegram image batching) is eroding trust in the daemon mode stability.

## 8. Backlog Watch
*   **[#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) (Matrix Friction):** Tracking friction points for Matrix channel (E2EE OTK retry loops).
*   **[#5315](https://github.com/zeroclaw-labs/zeroclaw/pull/5315):** A massive PR (Size: XL) for full TUI setup and dashboard config sync is still open and awaiting review/merge.
*   **[#5086](https://github.com/zeroclaw-labs/zeroclaw/pull/5086):** A fix for `aarch64` binary selection during updates (Raspberry Pi support) has been open for over a week without merge.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Project Digest: PicoClaw (2026-04-09)

**Project:** PicoClaw (sipeed/picoclaw)
**Date:** 2026-04-09
**Status:** 🔴 High Activity | Rapid Iteration

## 1. Today's Overview
PicoClaw is experiencing a surge in development activity, with **27 Pull Requests** and **14 Issues** updated in the last 24 hours. The project has successfully released version **v0.2.6**, focusing on isolation support and enhanced hook capabilities, alongside a fresh nightly build. However, the community has flagged several critical stability issues regarding provider fallbacks, retry mechanisms, and agent loop panics. The influx of new feature requests (Email channel, Browser automation, Account stacking) indicates strong user adoption and a desire for the platform to handle more complex, production-grade workflows.

## 2. Releases
### **v0.2.6** (Latest Stable)
*Highlights:*
*   **Support for Isolation:** A significant architectural update allowing subprocess isolation (merged from PR #2423).
*   **Enhanced Hooks:** Added `respond` actions to hooks and updated documentation (PR #2215).
*   **Config Fixes:** Resolved issues with help banners and zero configurations.
*   *Impact:* Users upgrading should investigate the new isolation features for improved security.

### **Nightly Build (v0.2.5-nightly.20260408)**
*Note:* Automated build. Users should exercise caution due to reported instability in recent Issues (e.g., #2371, #2426).

## 3. Project Progress
*Merged/Closed PRs advancing the codebase:*

*   **Security/Architecture:** PR #2423 (`Feat/support isolation`) was **merged**, introducing a unified subprocess isolation runtime for tools and providers. This addresses high-risk security concerns regarding file access.
*   **Documentation:** PR #2215 was **merged**, enhancing hook documentation and adding respond actions.
*   **Provider Fixes:** PR #2143 (`fix: use per candidate provider for model_fallbacks`) was **closed/merged**, fixing a critical bug where fallback models incorrectly inherited the primary model's API credentials.
*   **Channel/Config:** PR #2267 fixed a bug where the WebUI could not connect to a self-started gateway.

## 4. Community Hot Topics
*Most discussed items reflecting user needs:*

*   **[#2408: LLM Account Stacking (Cartridge-Belt)](https://github.com/sipeed/picoclaw/issues/2408)** (7 comments)
    *   **Topic:** Automatic API key rotation upon hitting rate limits.
    *   **Analysis:** Users are pushing PicoClaw into high-volume scenarios where single API keys are insufficient. This is a critical feature for "always-on" production agents.
*   **[#629: Retry Logic on Failure](https://github.com/sipeed/picoclaw/issues/629)** (6 comments)
    *   **Topic:** Agent hangs when LLM provider returns HTTP 500.
    *   **Analysis:** A core reliability gap. Users need resilient agents that can transiently fail without human intervention.
*   **[#2371: Agent Loop Panic](https://github.com/sipeed/picoclaw/issues/2371)** (4 comments)
    *   **Topic:** `ERR agent ../runner/work/picoclaw/picoclaw/pkg/agent/loop.go:2171`.
    *   **Analysis:** Stability in the agent runner is a top concern; panics stop all workflows.

## 5. Bugs & Stability
*Critical issues reported in the last 24h:*

1.  **[CRITICAL] WebUI Gateway Connection Failure:** Issue #2213 (Fixed in PR #2267).
    *   *Severity:* High. Prevented WebUI usage.
2.  **[HIGH] Model Fallbacks Configuration Bug:** Issue #2140 (Fixed in PR #2143).
    *   *Severity:* High. Broke cross-provider failover logic by leaking API keys.
3.  **[MEDIUM] Agent Loop Panics:** Issue #2371.
    *   *Status:* Open. No fix PR linked yet. Causes agent crashes.
4.  **[MEDIUM] Workspace/File Access Security:** Issue #2428 & #2426.
    *   *Status:* Open. Reports that workspace constraints are insufficient to isolate Pico actions, allowing files outside the workspace to be read/deleted.
5.  **[LOW-MEDIUM] Build Dependency Failures:** Issue #2425.
    *   *Status:* Open. Cannot download `minisign` or `edwards25519` packages.

## 6. Feature Requests & Roadmap Signals
*Emerging capabilities requested by users:*

*   **Browser Automation:** PR #2410 proposes adding a `BrowserTool` via Chrome DevTools Protocol (CDP). This would unlock web scraping and interaction capabilities.
*   **Email Channel:** Issue #2421 requests adding Email as a native channel for corporate/conservative environments.
*   **LLM Account Stacking:** Issue #2408 (detailed above).
*   **UI/UX Improvements:**
    *   Issue #2220: Split content and tool_call display in WebUI (PR exists).
    *   PR #2229: Structured Terminal UI for the CLI.
*   **Tool Feedback Filtering:** Issue #2424 requests an "ignore list" for tool feedback to reduce noise during long tasks.

## 7. User Feedback Summary
*Sentiment and Pain Points:*

*   **Pain Points:**
    *   **Fragility:** Users are frustrated with "Task hang" behaviors and lack of retries (Issue #629).
    *   **Security Anxiety:** There is confusion and concern regarding "Security warnings" (Issue #2381) and actual workspace isolation capabilities (Issue #2428).
    *   **UI Polish:** The WebUI struggles to simultaneously render content and tool calls (Issue #2427), and disabled buttons lack explanations (PR #2430).
*   **Positive Signals:** High engagement in PRs suggests a willingness to contribute fixes (e.g., Termux fixes, Docker improvements).

## 8. Backlog Watch
*Older or lingering items needing attention:*

*   **[#2140: Model Fallbacks](https://github.com/sipeed/picoclaw/issues/2140)** - *Resolved.* This long-standing issue regarding API key leakage in fallback chains was recently closed.
*   **[#629: Retry Logic](https://github.com/sipeed/picoclaw/issues/629)** - *Lingering.* Opened in Feb 2026, still active. A fundamental reliability feature that needs roadmap prioritization.
*   **[#293: Browser Automation](https://github.com/sipeed/picoclaw/issues/293)** - *Reference.* Mentioned in new PR #2410, indicating roadmap items are being picked up by the community.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-09

## 1. Today's Overview
NanoClaw is experiencing a high-velocity development cycle with robust community engagement. In the last 24 hours, the project saw significant activity with **19 Pull Requests updated** (10 merged/closed) and **5 active Issues**, though no new releases were published. The repository is currently undergoing a "hardening" phase, evidenced by a wave of merges focusing on containerization, CI/CD standardization, and developer experience improvements (e.g., uv cache persistence, documentation refreshes). Parallel to this stabilization effort, the community is aggressively expanding the platform's capabilities, with active development on multi-runtime agent SDKs (OpenAI/Codex integration), advanced security engines, and new channel integrations like Matrix and WhatsApp.

## 2. Releases
**Status:** No new releases published today.

## 3. Project Progress
*Significant advancements were made in infrastructure stability and deployment standardization. The following features were merged or closed today:*

*   **Infrastructure & CI/CD Hardening:** [PR #1697](https://github.com/qwibitai/nanoclaw/pull/1697) merged a new containerization layer utilizing a shared enterprise CI pipeline, upgrading the build to Node 22 and adding standard health checks.
*   **Developer Experience:** [PR #1671](https://github.com/qwibitai/nanoclaw/pull/1671) fixed a major performance bottleneck by persisting the `uv` cache across container runs, preventing the re-download of Python toolchains (e.g., numpy) on every execution.
*   **Onboarding & Documentation:** [PR #1696](https://github.com/qwibitai/nanoclaw/pull/1696) refreshed the README to reflect the current fork state and added a development status table.
*   **Configuration Fix:** [PR #1698](https://github.com/qwibitai/nanoclaw/pull/1698) fixed a "Not logged in" error for new groups by automatically injecting `ANTHROPIC_API_KEY` into the session settings.

## 4. Community Hot Topics
*Discussion is centered around architectural expansion and platform interoperability.*

*   **Multi-Runtime Architecture ([Issue #1690](https://github.com/qwibitai/nanoclaw/issues/1690) - 3 comments, 👍 2):**
    There is strong community interest in decoupling NanoClaw from a single AI provider. Users are discussing a modular "AgentRuntime" abstraction that would allow agents to switch between Claude, OpenAI Codex, and local models. This aligns with the open [PR #963](https://github.com/qwibitai/nanoclaw/pull/963) which aims to add OpenAI Codex as an alternative engine.
*   **OAuth Token Billing Policy ([Issue #1620](https://github.com/qwibitai/nanoclaw/issues/1620) - 5 comments, 👍 0):**
    A critical clarification is needed regarding Anthropic's billing changes. Users are highlighting that using OAuth tokens now draws from "extra usage" rather than subscription allowances. There is a push to update documentation to recommend API keys to prevent unexpected charges.
*   **Persistent & Graph Memory ([PR #1256](https://github.com/qwibitai/nanoclaw/pull/1256)):**
    A proposed feature to add `/add-mem0-graph` skill is gaining traction. It promises persistent memory using Qdrant + Neo4j without requiring new Docker containers, leveraging existing infrastructure vectors.

## 5. Bugs & Stability
*Reports indicate issues with concurrency and messaging context handling.*

*   **High Severity - Telegram Thread Context Loss ([Issue #1699](https://github.com/qwibitai/nanoclaw/issues/1699)):**
    Users reported that replies in Telegram threads (forum topics) are losing their context. The bot captures the `thread_id` but fails to pass it to `sendMessage`, causing replies to desynchronize from the conversation flow.
*   **Medium Severity - IPC Message Loss ([PR #1702](https://github.com/qwibitai/nanoclaw/pull/1702)):**
    A fix was proposed today for a `for-await` loop issue in the IPC (Inter-Process Communication) layer, which was resulting in lost messages between the host and the container.
*   **Medium Severity - Uncontrolled Container Spawning ([Issue #1700](https://github.com/qwibitai/nanoclaw/issues/1700)):**
    A user reported "multiple containers being spun up" in response to simple triggers like "hello" in Telegram/Discord, suggesting a regression in the container lifecycle management or event handling logic.

## 6. Feature Requests & Roadmap Signals
*Based on active PRs and Issues, the following features are likely on the roadmap:*

*   **Alternative AI Runtimes:** With [PR #963](https://github.com/qwibitai/nanoclaw/pull/963) (OpenAI Codex) and discussions in [Issue #1690](https://github.com/qwibitai/nanoclaw/issues/1690), multi-model support is a high-priority goal.
*   **Enhanced Security Policies:** [PR #1605](https://github.com/qwibitai/nanoclaw/pull/1605) proposes a "deterministic" security policy engine for user gating and tool restrictions, moving away from prompt-based security.
*   **New Channels:**
    *   **WhatsApp:** [PR #1661](https://github.com/qwibitai/nanoclaw/pull/1661) was closed recently (likely merged), indicating imminent support.
    *   **Matrix:** [PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624) is actively adding full E2EE support via `matrix-js-sdk`.
*   **Automated Backups:** [PR #1693](https://github.com/qwibitai/nanoclaw/pull/1693) introduces an `/add-backup` utility for state persistence, addressing a gap in data safety for self-hosted users.

## 7. User Feedback Summary
*User sentiment highlights the complexity of self-hosting and a desire for "plug-and-play" extensibility.*

*   **Pain Points:**
    *   **Setup Friction:** The issue regarding missing API keys in new groups ([Issue #1698](https://github.com/qwibitai/nanoclaw/pull/1698)) indicates that fresh installs are still too manual.
    *   **Cost Clarity:** Users are concerned about billing models (OAuth vs. API Keys) and want clear documentation to avoid "surge" pricing ([Issue #1620](https://github.com/qwibitai/nanoclaw/issues/1620)).
*   **Satisfaction:**
    *   Users appreciate the "crawl-walk-run" capability of the bot across multiple platforms (Telegram/Discord) but are encountering bugs as they scale up usage ([Issue #1700](https://github.com/qwibitai/nanoclaw/issues/1700)).

## 8. Backlog Watch
*Items requiring maintainer decision or review.*

*   **Architectural Analysis:** [Issue #1703](https://github.com/qwibitai/nanoclaw/issues/1703) offers a free 3rd-party scan of the NanoClaw repo to generate queryable architecture diagrams. This is a valuable resource for onboarding new contributors and is pending acceptance/usage by the core team.
*   **Feature Skills:** Several utility skills are pending review, including **Heartbeat Monitoring** ([PR #220](https://github.com/qwibitai/nanoclaw/pull/220)) and **Semantic Conversation Search** ([PR #1597](https://github.com/qwibitai/nanoclaw/pull/1597)). These have been open for extended periods and could benefit from a maintainer triage pass.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-04-09

## 1. Today's Overview
NullClaw is demonstrating high development velocity with **15 Pull Requests** updated in the last 24 hours (7 open, 8 merged/closed) alongside the release of version **v2026.4.7**. The project is focusing heavily on platform stability (Windows/Linux), infrastructure hardening (gateway security, cron scheduling), and API compliance (OpenAI Responses API). Although 4 issues were updated, the rapid closure of recent bugs suggests a responsive maintenance cycle, though native Linux shell execution remains an active concern.

## 2. Releases
**v2026.4.7** (Released 2026-04-08)
*   **Key Features:**
    *   **Lark Channel:** Added support for reaction emojis upon message receipt ([PR #704](https://github.com/nullclaw/nullclaw/pull/704)).
    *   **Routing:** Fixed default agent fallback to strictly use "main" ([PR #769](https://github.com/nullclaw/nullclaw/pull/769)).
*   **Maintenance:** This release consolidates improvements across channel integrations and core routing logic.

## 3. Project Progress
**Merged & Closed Features:**
*   **Windows Platform Fixes:** Significantly improved user experience on Windows with fixes for immediate WebSocket disconnects (Code 1006) ([PR #742](https://github.com/nullclaw/nullclaw/pull/742)) and improved binary packaging via `.zip` archives ([PR #738](https://github.com/nullclaw/nullclaw/pull/738)).
*   **Documentation:** Expanded accessibility with a beginner-friendly guide for non-technical users ([PR #750](https://github.com/nullclaw/nullclaw/pull/750)) and added specific instructions for WeChat channel setup ([PR #718](https://github.com/nullclaw/nullclaw/pull/718)).
*   **UX Improvements:** Implemented processing feedback placeholders for the Lark channel ([PR #720](https://github.com/nullclaw/nullclaw/pull/720)) and fixed Discord scheduled DM delivery targets ([PR #719](https://github.com/nullclaw/nullclaw/pull/719)).

**In Development (Open PRs):**
*   **Cron & Scheduling:** A major feature addition is in review ([PR #783](https://github.com/nullclaw/nullclaw/pull/783)), introducing a DB-backed cron subagent, run history, and JSON output capabilities.
*   **Provider Hardening:** Multiple PRs focus on robustness, including fixes for OpenAI Responses API tool schema errors ([PR #790](https://github.com/nullclaw/nullclaw/pull/790)) and stricter agent provider validation ([PR #788](https://github.com/nullclaw/nullclaw/pull/788)).

## 4. Community Hot Topics
*   **Interactive Telegram Menus:** There is active development on enhancing the Telegram interface with interactive skill menus and callback editing ([PR #782](https://github.com/nullclaw/nullclaw/pull/782)), indicating a demand for richer, button-based interactions rather than just text commands.
*   **Security & Stability:** A new PR proposes enforcing gateway public-bind safety and rate limiting by route/client ([PR #789](https://github.com/nullclaw/nullclaw/pull/789)), reflecting community concerns about public exposure and resource management.

## 5. Bugs & Stability
*   **[CRITICAL] Shell Execution on Native Linux:** A bug report ([Issue #791](https://github.com/nullclaw/nullclaw/issues/791)) indicates that the Shell tool cannot run commands on physical Linux systems, even with permissions granted. No fix PR is linked yet; this is the highest priority item for core functionality.
*   **Windows Stability (Resolved):** The recent release addressed critical instability where WebSocket connections on Windows would drop immediately ([Issue #739](https://github.com/nullclaw/nullclaw/issues/739)).

## 6. Feature Requests & Roadmap Signals
*   **Cron Subagent:** The substantial PR ([#783](https://github.com/nullclaw/nullclaw/pull/783)) suggests that automated, scheduled task execution is a high priority for the upcoming roadmap.
*   **Usability Friction:** A closed issue regarding the `eget` download naming convention on Windows ([Issue #737](https://github.com/nullclaw/nullclaw/issues/737)) has been resolved, signaling the team's focus on smoothing out the initial installation experience.

## 7. User Feedback Summary
*   **Pain Points:** Users on the Lark platform expressed dissatisfaction with the lack of feedback during processing ("black box" experience), which has been addressed in the latest release by adding placeholder messages.
*   **Cross-Platform Needs:** The surge of Windows-related issues and fixes highlights a significant portion of the user base running native Windows environments, requiring ongoing attention to platform-specific quirks (like binary naming and socket handling).

## 8. Backlog Watch
*   **Linux Shell Bug:** With [Issue #791](https://github.com/nullclaw/nullclaw/issues/791) open and active, the development team needs to prioritize fixing the native Linux shell runtime to ensure feature parity across supported operating systems.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-04-09

## 1. Today's Overview
IronClaw is experiencing a period of **high-intensity development** focused on architectural improvements and major feature integration. The project shows exceptional activity with **50 Pull Requests** updated in the last 24 hours, heavily skewed toward open work (40 open, 10 closed/merged). Issues are split between active troubleshooting and resolved bugs (8 open, 5 closed). The codebase appears to be in a "feature freeze" or stabilization phase regarding *releases*, as no new release tags were pushed despite the high volume of code changes, indicating a accumulation of features for a future major version (likely related to the ongoing `v2-architecture` efforts visible in PRs).

## 2. Releases
**Status:** No new releases published in the last 24 hours.

## 3. Project Progress
While no releases were cut, significant features and fixes are currently merged or in the final stages of review:

*   **CI & Deployment Stability:**
    *   **[CLOSED] PR #2158 & #2157**: Fixed failing extension setup tests by ensuring the use of canonical extension names (converting hyphens to underscores). This resolves CI flakiness.
    *   **[CLOSED] PR #2164**: Added `python3-dev` to Dockerfiles to resolve `pyo3` build dependency failures in the container image.
    *   **[CLOSED] PR #2155**: Normalized nullish parameters in WASM tool schemas, preventing "null" or "none" strings from being forwarded as literal values.
*   **Staging Promotions:**
    *   **[OPEN] PR #2170**: Automated promotion of staging environment changes (batch `bb2c3e1d`) is underway, signaling a sync between `main` and `staging` branches.

## 4. Community Hot Topics
*   **[OPEN] Issue #1754: Private Network Model Restrictions** (👍 3 reactions)
    *   **Link:** [nearai/ironclaw#1754](https://github.com/nearai/ironclaw/issues/1754)
    *   **Topic:** Strict TLS enforcement.
    *   **Analysis:** Users deploying self-hosted models in private networks are blocked by a hardcoded check that requires HTTPS for non-localhost endpoints. The community is requesting a configuration flag to allow HTTP for trusted private subnets.
*   **[OPEN] PR #1662: Anti-Drift Self-Checks**
    *   **Link:** [nearai/ironclaw#1662](https://github.com/nearai/ironclaw/pull/1662)
    *   **Topic:** Agentic loop optimization.
    *   **Analysis:** This massive PR (Size: XL) addresses a critical "token-wasting" problem. It introduces a `DriftMonitor` to detect failure spirals, repetition loops, and tool cycling, injecting corrective messages without extra LLM cost. This is a major stability upgrade for the agent's reasoning loop.
*   **[OPEN] Issue #2162: Screenshot Validation Errors**
    *   **Link:** [nearai/ironclaw#2162](https://github.com/nearai/ironclaw/issues/2162)
    *   **Topic:** Multimodal input handling.
    *   **Analysis:** The agent currently rejects inputs if they are *only* screenshots (images) or contain multiple screenshots without accompanying text. This reveals a rigidity in the input validation layer where the model expects text context by default.

## 5. Bugs & Stability
*   **[CRITICAL] Issue #2134: Jobs Stuck in "In Progress"**
    *   **Status:** Open
    *   **Impact:** Agents report completion, but the backend state remains `in_progress`, causing infinite loops of completion messages.
*   **[HIGH] Issue #1996: Routines Fail with "Tools Disabled"**
    *   **Status:** Closed
    *   **Impact:** Production routines were failing because tools were disabled in the execution context.
    *   **Fix:** Merged/Closed (likely via the staging updates in PR #2172 or similar).
*   **[HIGH] Issue #2089: Slow Multi-Tenant Responses**
    *   **Status:** Closed
    *   **Impact:** Simple queries took 5-10 seconds in multi-tenant setups.
    *   **Fix:** Merged/Closed.
*   **[MEDIUM] Issue #2162: Screenshot Validation Failure**
    *   **Status:** Open
    *   **Symptom:** "Input rejected by safety validation: input: Input cannot be empty" when sending images without text.
*   **[MEDIUM] Issue #2135: Feishu/Lark Channel WASM Mismatch**
    *   **Status:** Open
    *   **Symptom:** WASM instantiation error due to WIT version mismatch (`0.3.0` vs host). This blocks users of the Feishu integration from updating.

## 6. Feature Requests & Roadmap Signals
Based on open PRs and Issues:

*   **MCP (Model Context Protocol) Prompts:**
    *   **Signal:** **[OPEN] Issue #2160** requests support for `prompts/list` and `prompts/get` capabilities from MCP servers. Currently, IronClaw only supports `tools` and `resources`.
*   **TUI (Terminal UI) Interrupts:**
    *   **Signal:** **[OPEN] Issue #2142** requests an out-of-band interrupt path to allow users to cancel agent actions even if the agent dispatch layer is blocked. This aims to fix the `Esc` key functionality in the CLI.
*   **Credentials Management:**
    *   **Signal:** **[OPEN] PR #2168** and **#2173** introduce path-based credential matching and environment-variable driven credential loading (`INTEGRATION_CREDENTIALS_DIR`), allowing for granular auth (e.g., read vs write tokens) on the same host.
*   **Custom System Prompts:**
    *   **Signal:** **[OPEN] PR #2165** adds `AGENTS_SEED_PATH` env var to allow admins to define custom system prompts for all new workspaces, fulfilling the use case raised in Issue #2088.

## 7. User Feedback Summary
*   **Pain Point - Self-Hosted Constraints:** Users managing private infrastructure feel constrained by developer-centric defaults (like the HTTP-only-for-localhost rule), asking for more flexibility in "air-gapped" or private network scenarios.
*   **Pain Point - Observability:** Users (and customers) are frustrated by "slow responses" and "black box" execution (Issue #2177). There is a clear demand for streaming reasoning steps to the UI so users know the agent hasn't stalled.
*   **Validation Logic:** Feedback on Issue #2162 suggests the input validation is too strict for multimodal use cases where an image alone should be sufficient context.

## 8. Backlog Watch
*   **[OPEN] Issue #2138: Missing GitHub Fork Action**
    *   The GitHub tool integration is incomplete, missing the ability to fork repositories.
*   **[OPEN] PR #1662 (Anti-Drift) & #1446 (Aliyun Support):**
    *   These are "XL" (Extra Large) size PRs that have been open for weeks. They represent significant value (cost savings and regional cloud support) but carry high merge risks. They require careful review before merging to `main`.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-04-09)

## 1. Today's Overview
LobsterAI is experiencing a **high-velocity development phase** with significant architectural improvements and feature additions. The project released **version 2026.4.8** today, addressing critical session handling and agent management issues. Development activity is robust, with **32 Pull Requests** updated in the last 24 hours (23 open, 9 merged/closed), indicating active iteration. However, the **10 new Issues** reported today highlight a contrast between rapid feature deployment and stability, with users reporting several regressions in the latest version and requesting specific workflow enhancements.

## 2. Releases
**LobsterAI 2026.4.8** (Released 2026-04-08)
*   **Core Fixes**:
    *   `fix(cowork)`: Added secondary try-catch blocks in session error handlers to prevent unhandled crashes during session failures.
    *   `fix(agent)`: Fixed logic where form state was not resetting when managing Agents.
*   **Enhancements**:
    *   `feat(agent)`: Optimized interaction logic on the Agent management page.
*   **Migration Notes**: No explicit breaking changes noted, but users experiencing "silent failures" (Issue #1569) are strongly recommended to update to this version to catch potential session errors.

## 3. Project Progress
*   **Security & Stability**:
    *   **CLOSED: PR #1571** - Mitigated a critical **DNS Rebinding zero-auth vulnerability** in the local CoworkProxy by adding Host header validation and Bearer token authentication.
    *   **CLOSED: PR #1574** - Fixed **Windows patch application failures** by normalizing CRLF line endings, ensuring cross-platform compatibility.
*   **Core Features Delivered**:
    *   **CLOSED: PR #1581** - Merged the **Release/2026.04.02** branch, bringing features like per-agent model bindings, custom hotkeys, and UI optimizations.
    *   **CLOSED: PR #1565** - Fixed IM message history loss issues during gateway restarts and enterprise config generation.
*   **In Progress**:
    *   **PR #924** (Open): Implementing **pagination for sessions and message history** to resolve high memory usage and rendering lag.
    *   **PR #1577** (Open): Adding a **new user onboarding tour** using driver.js to improve initial setup experience.

## 4. Community Hot Topics
*   **[Discussion] File Upload & Context Awareness** ([Issue #1561](https://github.com/netease-youdao/LobsterAI/issues/1561))
    *   **Summary**: Users report that uploaded files are no longer recognized by the model (regression from previous behavior where files were searchable in the `project` directory).
    *   **Underlying Need**: Critical requirement for reliable RAG (Retrieval-Augmented Generation) and file context handling in chat workflows.
*   **[Feature] Slash Commands for IM** ([PR #1573](https://github.com/netease-youdao/LobsterAI/pull/1573))
    *   **Summary**: Implementing commands like `/help`, `/new`, and `/compact` for IM channels (Telegram, DingTalk, etc.).
    *   **Underlying Need**: Users require granular control over agent sessions via chat interfaces without needing the desktop UI.
*   **[Feature] Markdown & Artifact Preview** ([Issue #1552](https://github.com/netease-youdao/LobsterAI/issues/1552))
    *   **Summary**: Request for inline file cards/preview when the Agent writes files.
    *   **Underlying Need**: Improved "Agent-to-User" handoff experience, reducing the friction of verifying AI-generated code/docs.

## 5. Bugs & Stability
*   **[CRITICAL] Silent Failures & Output Loops**
    *   **Issue #1569**: App stops running with no logs or error messages. (Severity: High)
    *   **Issue #1566**: Model repeats the same content regardless of input (Log attached).
    *   *Status*: Open. Requires immediate log analysis.
*   **[HIGH] Configuration & Data Loss**
    *   **Issue #1245** (Closed): Form data loss on "Cancel" in Scheduled Tasks. (Fixed in recent release, but high impact previously).
    *   **Issue #1556**: 404 error on "IM Robot Configuration Guide" documentation link.
*   **[MEDIUM] Python Runtime**
    *   **Issue #399**: Errors running specific models (e.g., GLM 4.5) on Alibaba Cloud Bailian.
    *   *Fix*: **PR #1582** (Open) addresses Python `pip` runtime issues and version conflicts.

## 6. Feature Requests & Roadmap Signals
*   **Input Box Controls** ([Issue #1567](https://github.com/netease-youdao/LobsterAI/issues/1567)): Users explicitly requested "Stop" and "Compress Context" buttons directly in the input area to handle long contexts or backend bugs manually.
    *   *Prediction*: Likely to appear in the next sprint given the high demand for control over long-context sessions.
*   **Visuals**: Image attachment thumbnails in the input box (**PR #1580**) suggest an upcoming focus on rich media support.
*   **UX Improvements**: The "Recently Used" tab for skills (**PR #1583**) indicates a move towards data-driven skill management.

## 7. User Feedback Summary
*   **Pain Points**:
    *   **Documentation**: Broken links (IM Config Guide) and unclear installation for third-party connectors (DingTalk OpenClaw) are frustrating users.
    *   **Reliability**: The latest version (2026.4.3 -> 2026.4.8) introduced regressions regarding file context and response consistency.
    *   **Observability**: Users want more visibility into what the AI is doing (Markdown previews, file card visibility) to diagnose issues themselves.
*   **Satisfaction**: High engagement with the IM/Skill integration features, though users demand better control mechanisms (slash commands).

## 8. Backlog Watch
*   **[Issue #1245]** - **"Scheduled Task form data loss"**: Although closed/marked as resolved in recent releases, it serves as a reminder to validate the "Unsaved Changes" prompt logic in the new **2026.04.02** UI update.
*   **[PR #1277 / #1281]** - **Dependency Upgrades**: Major version bumps for `electron` (v40 -> v41) and `vite` (v5 -> v8) are pending. These are high-priority backlog items for maintaining platform security and performance but require careful testing to avoid breaking changes.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

Here is the **TinyClaw Project Digest** for **2026-04-09**.

### 1. Today's Overview
TinyClaw experienced a quiet maintenance period over the last 24 hours, with no code deployments or merged pull requests recorded. However, the project remains in active development, evidenced by the submission of three new enhancement proposals focusing on multi-agent collaboration and provider extensibility. The community appears focused on refining the "TinyOffice" web portal and optimizing token usage for code execution, signaling a shift toward UX improvements and cost efficiency.

### 2. Releases
**No new releases** have been published in the last 24 hours.

### 3. Project Progress
**Merged PRs:** None.
**Active Development:** While no PRs were merged, the project architecture is being actively discussed in relation to scaling agent interactions.

### 4. Community Hot Topics
The following new issues have sparked discussions regarding the future direction of the TinyOffice interface and backend efficiency:

*   **Multi-Agent Teams & Project Organization** ([#275](https://github.com/TinyAGI/tinyagi/issues/275))
    *   **Topic:** Proposal to assign "Teams" to specific projects to enable parallel workflows.
    *   **Analysis:** Users need better isolation of tasks. The request suggests the current "main office" screen becomes cluttered, requiring a dedicated separation between team management and inter-team chat interfaces.
*   **RTK-AI Token Reduction Integration** ([#273](https://github.com/TinyAGI/tinyagi/issues/273))
    *   **Topic:** Integration with `rtk-ai` to proxy CLI commands and reduce token usage.
    *   **Analysis:** Highlights a strong user desire to optimize operational costs (tokens) for long-running agent tasks involving code execution.
*   **TinyOffice Provider Settings** ([#272](https://github.com/TinyAGI/tinyagi/issues/272))
    *   **Topic:** Request to add the "opencode" provider to the built-in provider settings in the web portal.
    *   **Analysis:** Users find the current provider selection restrictive (limited to Anthropic/Codex) and want easier configuration for alternative models without manual config file editing.

### 5. Bugs & Stability
**No critical bugs were reported in the last 24 hours.** All activity was restricted to feature requests.

### 6. Feature Requests & Roadmap Signals
Based on today's activity, the following features are likely candidates for inclusion in upcoming releases:
*   **TinyOffice UI Refresh:** Expect updates to the settings panel to include "opencode" as a first-class provider ([#272](https://github.com/TinyAGI/tinyagi/issues/272)).
*   **Token Optimization Proxies:** The maintainer may consider integrating `rtk-ai` support to address cost concerns ([#273](https://github.com/TinyAGI/tinyagi/issues/273)).
*   **Workspace Management:** A significant architectural update to support "Teams" and "Projects" appears to be on the horizon ([#275](https://github.com/TinyAGI/tinyagi/issues/275)).

### 7. User Feedback Summary
User sentiment today is focused on **extensibility** and **workflow management**. Users are expressing dissatisfaction with the limitations of the built-in provider interface ("only anthropic and codex which have limited models access") and are looking for ways to manage complex, multi-agent setups without everything overlapping in a single view.

### 8. Backlog Watch
The following issues are freshly opened and require maintainer triage to determine feasibility:
*   [#275](https://github.com/TinyAGI/tinyagi/issues/275) - Enhancing the "Office" metaphor with Teams.
*   [#273](https://github.com/TinyAGI/tinyagi/issues/273) - RTK-AI proxy support.
*   [#272](https://github.com/TinyAGI/tinyagi/issues/272) - Opencode UI integration.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Project Digest: Moltis (2026-04-09)

## 1. Today's Overview
Moltis is experiencing a **high-velocity development cycle** with a strong focus on stability and platform integration. The project released a new version (`20260408.01`) addressing critical authentication and provider issues. While development is active—evidenced by 7 merged PRs in 24 hours—there is a surge in new bug reports (6 new issues opened), primarily concerning file system limits, provider compatibility (MiniMax, LMStudio), and documentation. The project appears healthy with rapid response times to critical blockers like LAN login and channel session injections.

## 2. Releases
**Version 20260408.01** (Released 2026-04-08)
*   **Breaking/Important Changes:**
    *   **LAN Login Fix:** Resolved authentication failures when binding to `0.0.0.0` or LAN IPs by deriving runtime Subject Alternative Names (SANs) for TLS certificates. ([PR #589](https://github.com/moltis-org/moltis/pull/589))
    *   **Model Detection Changes:** Automatic background model probing has been **removed**. Users must now manually click "Detect All Models" to prevent rate limiting and UI freezing. ([PR #591](https://github.com/moltis-org/moltis/pull/591))
    *   **Agent Iteration UX:** Agents can now auto-continue tasks if the model stops prematurely (up to 2 times by default). ([PR #585](https://github.com/moltis-org/moltis/pull/585))

## 3. Project Progress
**Merged & Closed Pull Requests:**
*   **Platform Features:**
    *   **Matrix Slash Commands:** Matrix now supports slash commands (`/`), achieving feature parity with Telegram, Discord, and Slack. ([PR #590](https://github.com/moltis-org/moltis/pull/590))
    *   **Microsoft Teams:** Comprehensive implementation including JWT verification and retry logic remains **Open** but was recently updated. ([PR #529](https://github.com/moltis-org/moltis/pull/529))
*   **Provider Fixes:**
    *   **MiniMax:** Fixed system prompt injection issues (moving system prompts back to `messages[]`) and handled `null` parameters for tool arrays. ([PR #586](https://github.com/moltis-org/moltis/pull/586))
    *   **Anthropic:** Switched from hardcoded models to live `/v1/models` discovery to prevent stale model IDs (e.g., `claude-sonnet-4-6-20260301`). ([PR #587](https://github.com/moltis-org/moltis/pull/587))
*   **Infrastructure:**
    *   **WhatsApp:** Fixed persistence sled lock contention to prevent errors during restarts/config updates. ([PR #285](https://github.com/moltis-org/moltis/pull/285))

## 4. Community Hot Topics
*   **LAN/Network Access Issues (Closed):** Users struggled to access Moltis via LAN IPs. The fix in PR #589 was highly requested. ([Issue #565](https://github.com/moltis-org/moltis/issues/565))
*   **Channel "Soul" Injection (Closed):** A critical report where agents in Telegram/Discord were receiving empty system prompts, rendering them non-functional. This was addressed in PR #586. ([Issue #578](https://github.com/moltis-org/moltis/issues/578))
*   **Model Management UX:** Users experienced freezing during model detection. The community responded positively to adding a "Stop" button and making detection opt-in. ([Issue #577](https://github.com/moltis-org/moltis/issues/577))

## 5. Bugs & Stability
**Critical & High Severity:**
1.  **[System Stability] inotify exhaustion:** Moltis adds file watchers to *disabled* skills, potentially exhausting system limits and crashing the daemon. ([Issue #596](https://github.com/moltis-org/moltis/issues/596))
2.  **[Data Loss] Silent Truncation:** `AGENTS.md` and `TOOLS.md` are silently truncated at 6000 characters with no warning to the user. ([Issue #593](https://github.com/moltis-org/moltis/issues/593))
3.  **[Core Logic] Boot.md Hook Failure:** The `BOOT.md` content is read but never actually injected into the system prompt. ([Issue #594](https://github.com/moltis-org/moltis/issues/594))
4.  **[Provider] MiniMax Regressions:** Despite PR #586, users report system role rejections persist. ([Issue #592](https://github.com/moltis-org/moltis/issues/592))
5.  **[Platform] Podman Ignored:** The container availability check fails to support the Podman backend. ([Issue #588](https://github.com/moltis-org/moltis/issues/588))
6.  **[Provider] LMStudio Streaming:** `reasoning_content` is not streamed, resulting in a blank UI until the response is fully complete. ([Issue #597](https://github.com/moltis-org/moltis/issues/597))

## 6. Feature Requests & Roadmap Signals
*   **Session Rotation:** Users are requesting automatic session rotation for Channel DMs to prevent token limit exhaustion during long conversations. ([Issue #579](https://github.com/moltis-org/moltis/issues/579))
*   **Connection Management:** Implementation of a "Stop Connection Check" button was requested and rapidly delivered (see PR #591).

## 7. User Feedback Summary
*   **Pain Points:** Installation friction is high; the Linux package installer references incorrect filenames ([Issue #595](https://github.com/moltis-org/moltis/issues/595)). Users running non-standard backends (Podman) or local LLMs (LMStudio) are facing compatibility gaps.
*   **Configuration Fatigue:** The shift to manual model detection suggests users were frustrated with background processes disrupting their workflow.
*   **Documentation:** Outdated installation docs are blocking new users.

## 8. Backlog Watch
*   **Microsoft Teams Integration:** PR #529 is massive and still open. It represents a significant enterprise capability but has been in progress since March 31. It needs final review/merge to unblock Teams users. ([PR #529](https://github.com/moltis-org/moltis/pull/529))

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-04-09

## 1. Today's Overview
CoPaw is experiencing a high-velocity development cycle with significant ongoing stability efforts. The project released **v1.0.2-beta.1** today, focusing on local model management and UI enhancements. Activity is extremely high, with 50 issues and 50 pull requests updated in the last 24 hours. However, the project is currently facing critical stability challenges, specifically regarding **CPU leaks** and **resource management**, which dominate the community discussion.

## 2. Latest Releases
**v1.0.2-beta.1**
*   **Console Restriction:** Model discovery is now restricted to local model providers only ([PR #2938](https://github.com/agentscope-ai/CoPaw/pull/2938)).
*   **QQ Channel:** Completed rich-media support implementation.
*   **Status:** Beta release.

## 3. Project Progress
**Merged & Closed Updates (Last 24h):**
*   **Plugin System:** A new plugin system was introduced ([PR #3101](https://github.com/agentscope-ai/CoPaw/pull/3101)), signaling a move towards a more modular architecture.
*   **Critical CPU Leak Fixes:** Several PRs were merged to address resource exhaustion:
    *   Fixed an MCP client cleanup issue during hot reload that caused CPU spikes ([PR #3106](https://github.com/agentscope-ai/CoPaw/pull/3106)).
    *   Fixed an `asyncio` cross-event-loop lock error in the Feishu (Lark) channel that caused connection failures ([PR #3095](https://github.com/agentscope-ai/CoPaw/pull/3095)).
*   **Advanced Settings:** Added support for `max_context_length` and `generate_kwargs` in CoPaw Local provider settings ([PR #3087](https://github.com/agentscope-ai/CoPaw/pull/3087)).
*   **Security:** Removed a "localhost" API authentication bypass that posed a security risk under reverse proxies ([PR #2840](https://github.com/agentscope-ai/CoPaw/pull/2840)).

## 4. Community Hot Topics
**High Activity Discussions (Most Commented):**

*   **[#2291: Help Wanted: Open Tasks](https://github.com/agentscope-ai/CoPaw/issues/2291)**
    *   **Status:** The central hub for community contribution (48 comments).
    *   **Analysis:** High engagement indicates a healthy contributor base eager to help, but also suggests the core team is shorthanded.
*   **[#280: Which Skills and MCPs Can Be Built-in?](https://github.com/agentscope-ai/CoPaw/issues/280)**
    *   **Status:** Active discussion (24 comments).
    *   **Analysis:** Users are debating the balance between a "bloat-free" core and a "feature-rich" out-of-the-box experience. There is a strong demand for pre-integrating popular tools.
*   **[#1911: "Xiaoyi" (Huawei) Channel Integration](https://github.com/agentscope-ai/CoPaw/issues/1911)**
    *   **Status:** Buggiest integration report (20 comments).
    *   **Analysis:** Users integrating with Huawei's "Xiaoyi" are facing "network congestion" errors. While the API works in isolation, the CoPaw integration appears unstable.

## 5. Bugs & Stability
**Critical Issues Reported (Ranked by Severity):**

1.  **High CPU Usage / Power Consumption (Idle):**
    *   **Issue:** [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) - CoPaw consumes ~100% CPU on a single core while idle due to a busy polling loop in `anyio` cancellation.
    *   **Status:** **CLOSED** (Likely addressed by recent PRs like #3106).
2.  **Infinite Retry Loops & Thread Explosion:**
    *   **Issue:** [#3096](https://github.com/agentscope-ai/CoPaw/issues/3096) - Tool errors trigger an infinite retry loop, spiking CPU to >126% and creating 100+ threads.
    *   **Status:** OPEN (Critical).
3.  **Silent Task Failures:**
    *   **Issue:** [#3011](https://github.com/agentscope-ai/CoPaw/issues/3011) - Long tasks (specifically with Qwen3 Coder Plus) stop silently without error logs and require user intervention to resume.
    *   **Status:** OPEN.
4.  **Hot Reload Instability:**
    *   **Issue:** [#2960](https://github.com/agentscope-ai/CoPaw/issues/2960) - Saving config triggers a hot reload that duplicates MCP clients, causing CPU spikes.
    *   **Status:** Fix merged in **[#3106](https://github.com/agentscope-ai/CoPaw/pull/3106)**.
5.  **Feishu Channel Async Locks:**
    *   **Issue:** [#3063](https://github.com/agentscope-ai/CoPaw/issues/3063) - `asyncio.locks.Lock` bound to different event loops causing "unreachable" agents.
    *   **Status:** Fix merged in **[#3095](https://github.com/agentscope-ai/CoPaw/pull/3095)**.

## 6. Feature Requests & Roadmap Signals
*   **Semantic Skill Routing:** PR **[#3117](https://github.com/agentscope-ai/CoPaw/pull/3117)** proposes using embeddings to filter relevant skills automatically. This is a strong candidate for the next version as it solves the "context window overflow" issue.
*   **Agent Management:** Issue **[#2680](https://github.com/agentscope-ai/CoPaw/issues/2680)** requests the ability for agents to manage (create/modify/delete) other agents via chat.
*   **Plan Mode:** PR **[#2904](https://github.com/agentscope-ai/CoPaw/pull/2904)** aims to integrate AgentScope's `PlanNotebook`, allowing agents to generate structured multi-step plans via a `/plan` command.
*   **Improved "Stop" Mechanism:** Issue **[#3049](https://github.com/agentscope-ai/CoPaw/issues/3049)** and PR **[#2987](https://github.com/agentscope-ai/CoPaw/pull/2987)** indicate that the `/stop` command is frequently broken or ignored, blocking further interaction.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Resource Drain:** Multiple users report CoPaw "eating" CPU or crashing after a few hours/days of uptime.
    *   **Context Window Limits:** Users running scheduled tasks are hitting token limits because the full chat history is being sent repeatedly ([#2789](https://github.com/agentscope-ai/CoPaw/issues/2789)).
    *   **Platform Specifics:** Windows users face WebView2 dependency issues (white screens), while macOS users report file upload failures in the console ([#3094](https://github.com/agentscope-ai/CoPaw/issues/3094)).
*   **Satisfaction:**
    *   Users appreciate the rapid response to bugs (many critical issues closed within 24h).
    *   The "Help Wanted" list is successfully engaging the community to tackle P0/P1 items.

## 8. Backlog Watch
*   **UI Responsiveness:** Issue **[#3123](https://github.com/agentscope-ai/CoPaw/issues/3123)** requests a scroll-lock feature for AI output, noting that the constantly moving text makes reading difficult while the agent is generating. This is a UX improvement waiting for implementation.
*   **Config Persistence:** Issue **[#2233](https://github.com/agentscope-ai/CoPaw/issues/2233)** highlights a design flaw where switching web users might load the same local configuration files, leading to privacy or setting conflicts.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw / RivonClaw Project Digest
**Date:** 2026-04-09  
**Status:** Maintenance & Release Cycle | **Health:** 🟢 Stable

---

### 1. Today's Overview
The EasyClaw (RivonClaw) project has entered a maintenance phase following a recent update cycle, with zero active development tasks (PRs) recorded in the last 24 hours. The maintainers released two consecutive minor versions (**v1.7.8** and **v1.7.9**) focusing specifically on platform compatibility, addressing installation hurdles for macOS users. While the issue tracker remains active—maintainers closed three issues today—there are currently no open bugs or pending feature requests, indicating a stable codebase. The primary friction point for users appears to be platform-specific restrictions rather than core functionality.

---

### 2. Releases
*Note: Releases v1.7.9 and v1.7.8 were published recently, both targeting identical stability concerns.*

**v1.7.9 & v1.7.8: macOS Compatibility & Gatekeeper Fix**
*   **Focus:** Installation integrity on macOS.
*   **Details:** Both releases address the `"'RivonClaw' is damaged and can't be opened"` error triggered by macOS Gatekeeper for unsigned applications. The repeated release (v1.7.8 followed by v1.7.9) suggests a rapid iteration to ensure the delivery pipeline or metadata was correctly applied to bypass the security check cleanly.
*   **Migration Note:** Users facing the "damaged" error on macOS must follow the provided terminal instructions to override Gatekeeper, as the app is not currently signed with an Apple developer certificate.

---

### 3. Project Progress
*No Pull Requests were merged or updated in the last 24 hours.*
*   The project focus today was on **stabilization and user support** rather than feature expansion.
*   **Closed Items:** The closure of Issues #29, #31, and #27 suggests the team is clearing the backlog of known friction points (API bugs, UI glitches, and strategic discussions) to maintain a clean slate for future development.

---

### 4. Community Hot Topics
*Most active discussions closed by maintainers today.*

*   **🐛 Bug: API Model Switching Failure** ([#29](https://github.com/gaoyangz77/rivonclaw/issues/29))
    *   **Status:** Closed.
    *   **Topic:** Users encountered an `HTTP 400 InvalidParameter` error when switching models in the "Bailian" (百炼) suite (specifically from Qwen3.5 to GLM/Kimi).
    *   **Analysis:** This indicates underlying issues with parameter validation when interfacing with different LLM providers. The fix likely involved sanitizing input ranges for specific model constraints.

*   **🖥️ UI: Update Log Spam** ([#31](https://github.com/gaoyangz77/rivonclaw/issues/31))
    *   **Status:** Closed.
    *   **Topic:** The application's changelog window appeared repeatedly on every launch, confusing users about which system version it referred to.
    *   **Analysis:** A regression in the version checking logic. Users value a "silent" background experience unless a critical change occurs.

*   **💡 Strategy: Community Growth Proposal** ([#27](https://github.com/gaoyangz77/rivonclaw/issues/27))
    *   **Status:** Closed.
    *   **Topic:** A community proposal (referencing experience with AFFiNE) suggested refining RivonClaw's "Digital Butler" positioning to accelerate growth.
    *   **Analysis:** While closed without an open discussion, this highlights a desire from the power-user community to see the project scale and defines its market niche more aggressively.

---

### 5. Bugs & Stability
*Severity assessed based on user impact.*

1.  **[RESOLVED] API Integration Error (High Severity)**
    *   **Issue:** [#29](https://github.com/gaoyangz77/rivonclaw/issues/29) - `HTTP 400` error preventing model switching.
    *   **Impact:** High - Blocked users from utilizing specific AI models (GLM/Kimi) within the Bailian suite.
    *   **Fix:** Released in recent updates (likely v1.7.8/1.7.9 cycle).
2.  **[RESOLVED] UX/Notification Loop (Medium Severity)**
    *   **Issue:** [#31](https://github.com/gaoyangz77/rivonclaw/issues/31) - Persistent update log popups.
    *   **Impact:** Medium - Annoyance and workflow interruption.
    *   **Fix:** Closed today; logic for displaying "first run" notices has presumably been patched.
3.  **[KNOWN] macOS Gatekeeper Blocking (Platform Severity)**
    *   **Issue:** "App is damaged" warning on installation.
    *   **Impact:** High - Prevents installation entirely for some macOS users.
    *   **Workaround:** Manual terminal override provided in release notes. A permanent fix would require code signing (costly).

---

### 6. Feature Requests & Roadmap Signals
*Based on closed discussions and proposal #27.*

*   **Refined "Digital Butler" Positioning:** The proposal in #27 suggests users want the project to lean harder into its identity as a personal assistant, potentially improving onboarding or feature sets to match this "Butler" archetype.
*   **Multi-Model API Stability:** The fix in #29 indicates a priority on supporting multiple LLM backends (Qwen, GLM, Kimi) seamlessly. Future updates will likely focus on abstracting these provider differences to prevent `InvalidParameter` errors.

---

### 7. User Feedback Summary
*   **Pain Points:**
    *   **macOS Usability:** The "Damaged" error is a significant barrier to entry for Mac users, requiring technical workarounds.
    *   **API Reliability:** Users are actively switching between models (Qwen, GLM, Kimi), and expect the "Bailian" integration to handle parameter differences automatically without throwing HTTP errors.
*   **Sentiment:** Positive functionality but friction in deployment (macOS) and update experiences (popups). The closure of 3 issues today indicates high responsiveness from the maintainer.

---

### 8. Backlog Watch
*Currently Empty.*
*   All recent issues have been closed. There are no "long-unanswered" critical issues or stagnating PRs requiring immediate attention. The project is in a healthy, clean state.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*