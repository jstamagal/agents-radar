# OpenClaw Ecosystem Digest 2026-04-03

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-03 00:12 UTC

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

# Project Digest: OpenClaw (2026-04-03)

## 1. Today's Overview
OpenClaw is experiencing an **extremely high-velocity development cycle**, with 500 issues and 500 pull requests updated in the last 24 hours alone. While the release of v2026.4.2 attempts to stabilize configuration paths for plugins like xAI, the project is currently facing significant turbulence regarding stability and quality assurance. The community is highly active but vocal about "update fatigue," with multiple critical regressions reported in recent versions (2026.3.x series) affecting core tool execution, timeouts, and channel integrations. Despite the high volume of merged PRs, there appears to be a disconnect between rapid feature development and regression testing.

## 2. Releases
**New Release: v2026.4.2**
- **Summary:** Patch update focusing on plugin configuration standardization.
- **Breaking Changes:**
  - **xAI Plugin Migration:** The `x_search` settings have moved from the legacy core path (`tools.web.x_search.*`) to the plugin-owned path (`plugins.entries.xai.config.xSearch.*`).
  - **Authentication:** Authentication is now standardized to `plugins.entries.xai.config.webSearch.apiKey` (env: `XAI_API_KEY`).
- **Migration:** Legacy configurations are automatically migrated via the `openc` CLI/tooling, but manual verification is recommended for users relying on custom xAI search setups.

## 3. Project Progress
**Advancements & Merged Work:**
- **Gateway & Agents:** Significant refactoring is underway to separate internal execution prompts from user-visible deferred delivery (PR #58955), addressing a long-standing UX issue where internal processing text leaked into chat channels.
- **Channel Improvements:**
  - **Matrix:** Added advisory file locking to IDB crypto persistence to prevent store corruption (PR #59851).
  - **Telegram:** Ongoing efforts to improve polling outage detection and recovery (PR #57422).
- **Provider Support:**
  - **Ollama:** Fixes for Cloud authentication vs. local provider distinction (PR #59954).
  - **Mistral:** Added Voxtral TTS support (PR #58607).
- **UI Overhaul:** A major effort to rebuild the Web UI using React 19 and shadcn/ui is in progress (PR #59950), signaling a move away from the previous Lit-based implementation.

## 4. Community Hot Topics
*Analysis of top engaged items reveals deep frustration with recent stability and a desire for cross-platform expansion.*

- **Desktop App Demand (Issue #75):** The most upvoted request (66👍) continues to be for native **Linux and Windows Clawdbot Apps**. Users want feature parity with the existing macOS/iOS/Android clients.
  - *Link:* [openclaw/openclaw#75](https://github.com/openclaw/openclaw/issues/75)
- **Agent Identity RFC (Issue #49971):** A proposal for "Native Agent Identity & Trust Verification" (related to ERC-8004 and W3C DID) is sparking discussion (53 comments) on cryptographic verification for agents.
  - *Link:* [openclaw/openclaw#49971](https://github.com/openclaw/openclaw/issues/49971)
- **Stability Backlash (Issue #57898):** A viral issue titled "ARE YOU GOING TO FRIGGING KEEP BREAKING THIS THING..." encapsulates user sentiment. Users report that settings (like `tools.exec.security`) change behavior between versions without warning, breaking workflows repeatedly.
  - *Link:* [openclaw/openclaw#57898](https://github.com/openclaw/openclaw/issues/57898)
- **Exec Approval Overhaul (Issue #59510):** Users are demanding a simplification of the exec command approval process, which currently requires tedious per-command allowlisting.
  - *Link:* [openclaw/openclaw#59510](https://github.com/openclaw/openclaw/issues/59510)

## 5. Bugs & Stability
*Critical regressions are dominating the issue tracker.*

- **Severity: High - Exec Tool Broken in v2026.4.1:**
  - **Issue #59006:** Users report that v2026.4.1 completely broke exec for existing setups due to new sandboxing/approval logic, with no migration path.
  - **Issue #58691 & #56775:** Configured `tools.exec.ask='off'` and allowlists are being ignored in v2026.3.31, forcing manual approval for every command.
  - **Windows Specific:** Issue #59774 notes that allowlist auto-execution is explicitly unavailable on Windows due to missing `process.uid`.
- **Severity: High - Dashboard & Gateway Failures:**
  - **Issue #58814:** The dashboard returns a 500 Internal Server Error on `GET /` following the update to v2026.3.31.
  - **Issue #46049:** LLM requests are timing out despite users configuring massive timeout values (86400s), suggesting internal settings are being ignored or incorrectly applied.
- **Severity: Medium - Channel Integrations:**
  - **Issue #58249:** Microsoft Teams webhooks are broken (401 Unauthorized) in v2026.3.24+ due to `publicUrl` removal affecting JWT validation.
  - **Issue #57084:** Browser CLI fails with `unknown method: browser.request` even when the service logs as ready.
- **Fix in Progress:** PR #59440 aims to fix Kimi tool call failures, and PR #58955 addresses the leakage of internal text between tool calls.

## 6. Feature Requests & Roadmap Signals
*Users are asking for better control, privacy, and platform support.*

- **A2A Protocol Support (Issue #6842):** A request to implement the Agent-to-Agent protocol for Clawdbot instances to communicate with other AI agents (9👍).
- **Filesystem Access Control (Issue #52621):** Users want `allowedPaths` / `denyPaths` config options to restrict where the agent can read/write, enhancing security.
- **Async Callbacks (Issue #18237):** A request for an async exec callback feature to inject results back into the session when a long-running process exits, rather than blocking the agent turn.
- **Thinking Configuration (Issue #21097):** Users want to configure `thinkingDefault` (thinking mode) per-agent in `agents.list`, rather than globally, to save costs on simpler agents.

## 7. User Feedback Summary
- **Pain Points:** The "update fatigue" is real. Users expressed significant distress over having to hunt down new config settings (like `tools.profile`) after every update to restore basic functionality. The breaking of `exec` tools—a core feature—is causing major workflow disruptions.
- **UX Failures:** There are reports of the agent lying to users (Issue #58450), saying it will "follow up" but then taking no action. Additionally, text intended for internal processing is leaking into user-facing channels (Issue #25592).
- **Platform Gaps:** The lack of official Windows and Linux apps remains a sore spot for the community, who rely on inferior node implementations or no solutions at all.

## 8. Backlog Watch
*Older issues that remain unresolved and require attention.*

- **Slack/Telegram WebChat Image Handling:** Issues #24662 and #27471 (from February) describe how pasting images in WebChat or Telegram results in the image being discarded by the agent.
- **ACP Runtime:** Issues #29134 and #28708 indicate that ACP (Anthropic Context Protocol) runtime support is inconsistent, particularly on Windows where it reports as unavailable despite `acpx` working.
- **Session Mode Threading:** Issue #23414 highlights that `sessions_spawn` with `mode="session"` requires `thread=true`, which effectively blocks the feature on non-Discord channels (Telegram, Slack, WhatsApp).

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: Personal AI Agents (2026-04-03)

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is currently undergoing a **high-velocity transition phase**, characterized by a divergence between "stability-first" maintenance and aggressive architectural refactoring. While reference implementations like **OpenClaw** struggle to manage technical debt and "update fatigue" caused by rapid iteration, forks and derivatives like **ZeptoClaw** and **IronClaw** are executing hard pivots (fork-and-trim strategies, v2 rewrites) to resolve structural issues inherited from earlier versions. Simultaneously, specialized projects like **NanoBot** and **PicoClaw** are innovating on the periphery with advanced memory engines and local-first architectures, signaling a market trend toward privacy, offline capability, and granular control.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | v2026.4.2 (Active) | ⚠️ Turbulent |
| **NanoBot** | 22 | 10 | v0.1.4.post6 (Unstable) | ⚠️ Regressions |
| **IronClaw** | 21 | 50 | No Release (Active Dev) | 🔄 Refactoring |
| **LobsterAI** | 34 | 50 | No Release (Active Dev) | 🔄 UX Polish |
| **CoPaw** | 50 | 44 | v1.0.1-beta.1 | ✅ Scaling |
| **PicoClaw** | 22 | 64 | v0.2.4-nightly | ⚡ Nightly |
| **Zeroclaw** | 23 | 50 | v0.6.8 | 🔄 Integrating |
| **NanoClaw** | 7 | 36 | No Release (Active Dev) | ✅ Expanding |
| **Moltis** | 3 | 2 | No Release | ✅ Stable |
| **ZeptoClaw** | 10 (Closed) | 1 | No Release | 🔄 Migration |
| **NullClaw** | 0 | 2 | No Release | ✅ Quiet |
| **TinyClaw** | 0 | 0 | N/A | ⚪ Dormant |
| **EasyClaw** | 0 | 0 | v1.7.8 | ✅ Stable |

*\*Health Score based on stability, user sentiment, and velocity.*

## 3. OpenClaw's Position
**OpenClaw** remains the dominant force in terms of raw volume and community engagement (500 PRs/Issues), acting as the primary reference implementation for the ecosystem.
*   **Advantages:** It possesses the largest feature set (broad channel support, extensive plugin ecosystem) and the most mature multi-platform client base (iOS/Android).
*   **Disadvantages vs. Peers:** OpenClaw is suffering from **"scale disease"**; its velocity is introducing critical regressions (Exec tool breaking, Dashboard 500 errors) that smaller, more focused projects like **NullClaw** or **NanoBot** do not face. While peers like **IronClaw** are solving architectural debt (V2 Engine), OpenClaw is paying the price for rapid feature accumulation, leading to user backlash regarding "update fatigue" and trust in stability.

## 4. Shared Technical Focus Areas
Cross-project analysis reveals three primary technical pillars driving development across the ecosystem:

*   **Memory & Context Management:**
    *   **NanoBot** is implementing a "Two-stage Dream" consolidation system (#2717).
    *   **PicoClaw** is integrating a short-term memory engine with DAG hierarchy (#2285).
    *   **Zeroclaw** is battling recursive memory bugs (#4916), indicating memory architecture is a universal challenge.
*   **Security & Sandboxing:**
    *   **NanoClaw** is moving from prompt-based to code-enforced security policies (#1605).
    *   **Zeroclaw** is implementing HMAC receipts to verify tool execution against LLM hallucinations (#5168).
    *   **PicoClaw** has hardened script execution with "fail-closed" mechanisms (#2298).
*   **Multi-Platform Support (Expansion):**
    *   **LobsterAI** and **NanoClaw** are aggressively adding non-Western channels (WeChat, QQ, Feishu).
    *   **CoPaw** and **OpenClaw** communities are demanding native Windows/Linux desktop parity.

## 5. Differentiation Analysis
Projects are diverging based on specific user personas and technical constraints:

*   **The "Everything" Platforms:** **OpenClaw** targets the power user who wants every integration (Matrix, Telegram, Slack) available, trading stability for breadth. **LobsterAI** targets the consumer/prosumer desktop user with a focus on UI polish (Markdown export, sidebar management).
*   **The Privacy/Local-First Faction:** **NanoBot**, **NullClaw**, and **PicoClaw** are prioritizing local model support (Ollama, DeepSeek, LM Studio) and efficient resource usage for on-premise deployment.
*   **The Architectural Re-writes:** **IronClaw** (V2 Engine) and **ZeptoClaw** (Crucible fork-and-trim) are betting that the current architectures of older agents are fundamentally flawed and require a ground-up rebuild to support multi-threading and robust async execution.
*   **The Specialist Frameworks:** **CoPaw** is positioning itself as a "multi-agent orchestration" platform with a focus on "agentic coding" and workspace management, distinct from the single-assistant model of EasyClaw.

## 6. Community Momentum & Maturity
*   **Tier 1: High Velocity / High Tension:** **OpenClaw**, **PicoClaw**, **LobsterAI**. These projects are shipping features daily but battling significant stability bugs.
*   **Tier 2: Rapid Expansion:** **CoPaw**, **NanoClaw**, **Zeroclaw**. These are growing rapidly, adding new providers and channels, and handling the scaling pains of a larger user base.
*   **Tier 3: Architectural Pivots:** **IronClaw**, **ZeptoClaw**. These are in critical transition phases. ZeptoClaw has effectively frozen new features to complete the "Crucible" migration.
*   **Tier 4: Stable/Niche:** **EasyClaw**, **NullClaw**, **Moltis**. These are low-churn projects focusing on specific niches (Simple UIs, Stability, CLI interfaces) and avoiding the rapid update cycle of the Tier 1 projects.

## 7. Trend Signals
For AI agent developers, the following industry trends are extracted from today's digest:

1.  **The "Desktop Gap" is Critical:** Users are rejecting web-only or mobile-only agents. **OpenClaw** (#75) and **CoPaw** (#2846) show massive demand for native Windows/Linux GUIs and auto-updaters.
2.  **Supply Chain Paranoia:** **NanoClaw's** push for Dockerization (#1485) and **NullClaw's** "clean CLI" approach (#761) signal that sophisticated users no longer trust `curl | bash` install scripts or scripts running directly on host OSes.
3.  **Platform Agnosticism is Mandated:** **NanoClaw's** "Runtime Forking" (#80) and **IronClaw's** provider expansion indicate that relying on a single LLM provider (e.g., Anthropic, OpenAI) is a business risk. Future agents must support seamless switching between proprietary and local models.
4.  **Agents Must Not Lie:** The focus on **Hallucination Detection** (Zeroclaw #5168) and **Trust Verification** (OpenClaw #49971) suggests the next major feature war will not be about "capability" but about "verifiability" and safety.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-03

## 1. Today's Overview
NanoBot is experiencing a **high-velocity development phase** with significant refactoring focused on stability and scalability. The project closed 10 Pull Requests and merged a major "hardening" update for the agent runtime, while simultaneously addressing a surge of new issues (22 updated) largely driven by regressions in the `v0.1.4.post6` release. Activity is heavily concentrated on fixing memory consolidation failures, resolving network retry logic "blind spots," and improving provider compatibility. The community is actively engaged, proposing architectural changes to memory systems and contributing new provider integrations.

## 2. Releases
**No new releases** were published in the last 24 hours. However, users are actively reporting issues against `v0.1.4.post6`, suggesting that a `post7` or hotfix may be imminent to address the critical stability issues reported below.

## 3. Project Progress
**Merged & Closed PRs (Stability & Features):**
*   **[feat: harden agent runtime for long-running tasks](https://github.com/HKUDS/nanobot/pull/2733)**: A major merge aimed at making the core loop more stable against large tool outputs and provider hiccups.
*   **[feat(provider): add Qianfan provider support](https://github.com/HKUDS/nanobot/pull/2699)**: Adds support for Baidu's Qianfan AI, expanding the ecosystem.
*   **[feat(memory): add git-backed version control](https://github.com/HKUDS/nanobot/pull/2753)**: Introduced a `GitStore` class to version control memory files, allowing users to browse and restore history.
*   **[feat(cli): add --config option](https://github.com/HKUDS/nanobot/pull/2740)**: Users can now specify custom config paths for channel login commands.
*   **[test(telegram): add unit tests](https://github.com/HKUDS/nanobot/pull/1434)**: Improved code coverage for Telegram helper functions.

**Active Development:**
*   **[feat(memory): two-stage memory system with Dream consolidation](https://github.com/HKUDS/nanobot/pull/2717)**: A massive architectural shift is in progress to split memory handling into "Consolidator" and "Dream" stages, aiming to solve long-term memory retention issues.

## 4. Community Hot Topics
**Most Discussed:**
*   **[Github Copilot login fails (#2573)](https://github.com/HKUDS/nanobot/issues/2573)** (👍 9): Users reported login failures due to malformed authorization headers, likely a regression from recent provider refactors.
*   **[Windows + DeepSeek Installation Guide (#2714)](https://github.com/HKUDS/nanobot/issues/2714)**: A community-contributed tutorial highlighted the demand for better documentation for non-Linux environments and local model setups (DeepSeek).

**Key Debates:**
*   **[Architectural issue: Prompt prefix preservation (#2463)](https://github.com/HKUDS/nanobot/issues/2463)**: A deep technical discussion on how NanoBot persists conversation history. The community is debating whether the current implementation breaks OpenAI's prompt requirements, signaling a need for a refactor in history management.

## 5. Bugs & Stability
**Critical Regressions (v0.1.4.post6):**
1.  **[Memory Consolidation Fatal Error (#2737)](https://github.com/HKUDS/nanobot/issues/2737)**: Users experience total failure where the LLM does not call `save_memory`, causing the agent to crash or stop functioning.
2.  **[Significant Response Slowdown (#2713)](https://github.com/HKUDS/nanobot/issues/2713)**: Reports indicate response times increased from ~1s to ~3 minutes post-upgrade.
3.  **[Matrix Auth Spam (#1851)](https://github.com/HKUDS/nanobot/issues/1851)**: Unknown token errors cause log spam, potentially filling up disk space or obscuring other logs.

**Network & Retry Logic (Fix Inbound):**
*   **[Retry Amplification Risk (#2760)](https://github.com/HKUDS/nanobot/issues/2760)** & **[Retry-After Blind Spot (#2763)](https://github.com/HKUDS/nanobot/issues/2763)**: Analysts identified that stacked retries (App + SDK) could triple upstream load.
    *   *Fix:* PR [#2762](https://github.com/HKUDS/nanobot/pull/2762) (structured retry) and [#2761](https://github.com/HKUDS/nanobot/pull/2761) (honor Retry-After) are open to address this.

## 6. Feature Requests & Roadmap Signals
*   **Advanced Memory Plugin:** Users are requesting native support for SQLite-based memory plugins similar to "MemOS" or "OpenClaw" ([#2736](https://github.com/HKUDS/nanobot/issues/2736)).
*   **Enhanced Agent Orchestration:** Request for **"Sub-Agents"** to act independently with their own identity and lifecycle, rather than being abstracted by the main agent ([#2746](https://github.com/HKUDS/nanobot/issues/2746)).
*   **Multi-Account Channel Support:** A PR is currently open to allow multiple accounts for the same channel (e.g., two Telegram bots) in one process ([#2705](https://github.com/HKUDS/nanobot/pull/2705)).

## 7. User Feedback Summary
*   **Pain Points:** The `v0.1.4.post6` release has been rough for power users, with specific complaints about **speed** and **compatibility** (e.g., `gemini-3-flash-preview` breaking, GitHub Copilot login issues).
*   **Platform Needs:** Windows users feel underserved, prompting community guides for DeepSeek integration.
*   **UI/UX:** Users want better feedback in chat interfaces, such as removing "reaction" emojis on Feishu after a task is done ([#2750](https://github.com/HKUDS/nanobot/issues/2750)).

## 8. Backlog Watch
*   **[Upgrade 0.1.4 to 0.1.4post5 breaks gemini-3-flash-preview (#2185)](https://github.com/HKUDS/nanobot/issues/2185)**: Open since March 17, this provider configuration issue remains unresolved.
*   **[Agent TypeError: 'Choice' is not subscriptable (#1401)](https://github.com/HKUDS/nanobot/issues/1401)**: A crash issue open since March 2 that prevents the agent from starting.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-04-03

## 1. Today's Overview
Zeroclaw is experiencing a period of intense development and high activity, with a significant volume of integration work currently in progress. The project recorded 50 updated Pull Requests (PRs) and 23 active Issues in the last 24 hours, indicating a robust push toward the next feature set. A major focus has been placed on expanding channel support (Matrix, LINE, Telegram) and hardening the infrastructure provider ecosystem (AWS Bedrock, Gemini). While activity is high, a recent revert of AI-generated PRs (#5233) highlights growing pains in managing automated contributions alongside manual code review standards. The release of **v0.6.8** aligns with this by streamlining the onboarding and authentication flow.

## 2. Releases
**v0.6.8** (Latest Release)
*   **Authentication Changes**: The removal of OAuth and Browser-based authentication methods from the core TUI suggests a shift toward local-first configuration or CLI-based secrets management, reducing the attack surface of the auth flow.
*   **Onboarding**: Expanded onboarding screens aim to reduce the initial configuration friction reported by new users.
*   *Note: Users reliant on browser-based OAuth flows will need to adapt to the new manual configuration or TUI-based input methods introduced in this version.*

## 3. Project Progress
*   **Infrastructure & Providers**:
    *   **AWS Bedrock**: PR #5223 (Open) proposes adding Web Identity (IRSA/OIDC) authentication, which is critical for Kubernetes deployments. Simultaneously, PR #5218 (Open) addresses a bug where Bedrock rejects messages with empty text blocks upon daemon restart.
    *   **Gemini**: PR #5222 (Open) improves error handling for missing OAuth client secrets, preventing runtime failures.
    *   **Mistral**: PR #5202 (Open) fixes `tool_call.id` formatting to comply with Mistral's 9-character limit.
*   **Channel Integrations**:
    *   **Matrix**: PR #5166 (Open) is a substantial update addressing friction points like E2EE (End-to-End Encryption), mention filtering, and onboarding overwrites.
    *   **LINE**: PR #5178 (Open) fixes reply API limits and mention word boundaries; however, PR #5235 (Open) has reverted the initial LINE integration, suggesting stability concerns with the initial implementation.
*   **Core System**:
    *   **Security**: PR #5160 (Open) refines shell command security to allow safe heredocs and redirects.
    *   **Session Management**: PR #5167 (Open) targets session integrity and history pruning to fix API corruption.
    *   **Hallucination Detection**: PR #5168 (Open) introduces HMAC receipts for tool execution to verify LLM-reported actions against reality.

## 4. Community Hot Topics
*   **Hallucination Detection & Integrity**
    *   *PR [#5168](https://github.com/zeroclaw-labs/zeroclaw/pull/5168)* (14 comments): Discusses adding HMAC signatures to tool execution receipts. The community is highly engaged in solving the "trust" issue where LLMs hallucinate tool success.
*   **Matrix Channel Friction**
    *   *Issue [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)* (9 comments): A tracking issue for Matrix bugs. The recent spate of PRs (#5166) is a direct response to this thread, showing strong user demand for a reliable Matrix experience.
*   **Memory System Recursion Bug**
    *   *Issue [#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)* (3 comments): Users are experiencing memory exhaustion due to recursive recall saves. This is a critical data integrity topic for users relying on long-term memory.

## 5. Bugs & Stability
**Critical (S1 - Workflow Blocked)**
*   **Web Dashboard Availability**: *Issue [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)* - The web dashboard frequently fails to load, prompting users to build it manually. PR #5199 attempts to fix underlying session issues causing this.
*   **Systemd Forking**: *Issue [#5232](https://github.com/zeroclaw-labs/zeroclaw/issues/5232)* - The daemon forks when run via systemd, causing duplicate processes and potential crashes.
*   **Firejail Environment Variables**: *Issue [#5171](https://github.com/zeroclaw-labs/zeroclaw/issues/5171)* - Commands fail in the sandbox because environment variables are not passed correctly.
*   **llama.cpp Failures**: *Issue [#5224](https://github.com/zeroclaw-labs/zeroclaw/issues/5224)* - Recent failures with Gemma4 models via llama.cpp provider.

**High (S2 - Degraded)**
*   **Recursive Memory**: *Issue [#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)* - `auto_save` creates a snowballing memory blob.
*   **Provider Switching**: *Issue [#5229](https://github.com/zeroclaw-labs/zeroclaw/issues/5229)* - Custom providers (NVIDIA API) fail to switch models, reverting to defaults.

## 6. Feature Requests & Roadmap Signals
*   **Plugin System (WASM)**: PR #5231 (Open) proposes a secure WASM plugin system. This is a major architectural shift that would allow users to write custom tools (CRM lookups, internal APIs) without Rust knowledge. Given its scope, it signals a future roadmap priority.
*   **Tool Permissions**: *Issue [#5184](https://github.com/zeroclaw-labs/zeroclaw/issues/5184)* requests granular tool permissions (Admin vs. Regular User) to prevent unauthorized access to sensitive commands like Shell or Home Assistant.
*   **Telegram Topic Support**: *Issue [#5226](https://github.com/zeroclaw-labs/zeroclaw/issues/5226)* requests routing messages to specific topics in Supergroups rather than just "General".
*   **Config CLI**: *Issue [#4669](https://github.com/zeroclaw-labs/zeroclaw/issues/4669)* and PR #5165 (Open) aim to provide a `zeroclaw props` CLI to manage config without full re-onboarding.

## 7. User Feedback Summary
*   **Pain Points**: Users are expressing frustration with the fragility of the Web Dashboard and the complexity of environment variable configuration for channels (Slack, LINE). The "Workflow Blocked" (S1) bugs are disproportionately affecting users trying to run ZeroClaw as a daemon/service.
*   **Multi-tenancy**: There is a clear demand for multi-user environments where not all users should have root/file access (Issue #5184).
*   **Sandboxing**: While security is a priority, the implementation is currently too restrictive, blocking legitimate shell patterns (Issue #5160) and failing to pass environment variables (Issue #5171).

## 8. Backlog Watch
*   **Web Dashboard Availability**: *Issue [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)* has persisted "across many versions." Despite active attempts to fix it (PR #5199), it remains a top stability concern.
*   **Memory Recall Wildcards**: *Issue [#5170](https://github.com/zeroclaw-labs/zeroclaw/issues/5170)* highlights a failure in FTS5/LIKE search for `*` queries, indicating the memory search stack needs attention.
*   **Stability of AI PRs**: The revert PR #5233 indicates a need for higher quality control on AI-generated code before it enters the main branch.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Project Digest: PicoClaw (2026-04-03)

## 1. Today's Overview
PicoClaw is experiencing a period of intense development activity, with **64 Pull Requests** and **22 Issues** updated in the last 24 hours. The project is rapidly iterating, evidenced by the new `v0.2.4-nightly` release and a high merge velocity (35 closed/merged PRs). Key architectural advancements include the implementation of a "short-term memory engine" (`#2285`) and hardening of execution security (`#2298`). However, stability remains a concern as multiple users report configuration and routing bugs related to the latest updates, particularly regarding model routing logic and cross-platform (Windows/Docker) compatibility.

## 2. Releases
*   **Version:** `v0.2.4-nightly.20260402.415abc8c`
*   **Status:** Nightly Build (Unstable)
*   **Details:** This automated build includes the latest commits from the main branch. Users are advised to exercise caution due to the unstable nature of nightly releases.
*   **Changelog:** [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

## 3. Project Progress
**Significant Features & Fixes Merged/Closed:**
*   **Memory Engine:** PR [`#2285`](https://github.com/sipeed/picoclaw/pull/2285) implements a short-term memory engine (LCM) using SQLite with DAG-based summary hierarchy and FTS5 for full-text search. This is a major step toward advanced context management.
*   **Security Enhancements:** PR [`#2298`](https://github.com/sipeed/picoclaw/pull/2285) hardens script execution by adding a "fail-closed" mechanism for ambiguous preflight checks, improving security for interpreted commands.
*   **Configuration UI:** PR [`#924`](https://github.com/sipeed/picoclaw/pull/924) successfully migrated the launcher UI to a Bulma-based layout with offline CodeMirror support.
*   **Credential Management:** PR [`#1521`](https://github.com/sipeed/picoclaw/pull/1521) added AES-GCM encryption and a SecureStore for credential handling.
*   **Usability:** PR [`#1032`](https://github.com/sipeed/picoclaw/pull/1032) added `/new` and `/clear` commands to reset chat sessions without restarting the agent.

## 4. Community Hot Topics
*   **WebUI Connection Failures:** Issue [`#2213`](https://github.com/sipeed/picoclaw/issues/2213) (7 comments) highlights a critical bug where the WebUI cannot connect to the gateway it starts, blocking GUI usage.
*   **File Reading Proposal:** Issue [`#1974`](https://github.com/sipeed/picoclaw/issues/1974) (6 comments) proposes refactoring `ReadFileTool` from byte-based to line-based pagination to prevent corrupting multi-byte characters.
*   **Documentation Gaps:** Issue [`#547`](https://github.com/sipeed/picoclaw/issues/547) (5 comments) discusses the need for better patterns in `AGENT.md` to help bots solve complex tasks and discover skills.
*   **Android Automation:** Issue [`#292`](https://github.com/sipeed/picoclaw/issues/292) (4 comments) is a highly requested feature to add Android device automation capabilities similar to "Botdrop."

## 5. Bugs & Stability
**High Priority & Regressions:**
*   **Model Routing Logic (Critical):** Issue [`#2286`](https://github.com/sipeed/picoclaw/issues/2286) reports that `thinking_level` cannot be read from config when `model` and `model_name` differ. Relatedly, Issue [`#2268`](https://github.com/sipeed/picoclaw/issues/2268) describes a bug where the system logs "light model selected" but uses the primary model instead, potentially costing users money.
*   **Script Editing Corruption:** Issue [`#2283`](https://github.com/sipeed/picoclaw/issues/2283) identifies that writing "\n" to files auto-converts to actual newlines, breaking Python scripts (e.g., `\n` inside a string becomes a line break).
*   **Windows QQ Channel:** Issue [`#2080`](https://github.com/sipeed/picoclaw/issues/2080) and [`#2280`](https://github.com/sipeed/picoclaw/issues/2280) indicate the QQ channel is non-functional on Windows and missing `AppSecret` configuration fields.
*   **Cron Routing:** Issue [`#2275`](https://github.com/sipeed/picoclaw/issues/2275) and [`#2265`](https://github.com/sipeed/picoclaw/issues/2265) report that cron jobs fail to route messages back to the correct chat sessions (Telegram/DingTalk), instead sending them to internal voids.

## 6. Feature Requests & Roadmap Signals
*   **Zalo Integration:** PR [`#2261`](https://github.com/sipeed/picoclaw/issues/2261) requests a new chat channel provider for Zalo, a popular messaging platform.
*   **Cost Optimization:** Issue [`#2271`](https://github.com/sipeed/picoclaw/issues/2271) proposes supporting "Flex" service tier APIs for non-time-sensitive jobs (like heartbeats) to reduce LLM costs by half.
*   **Structured Event Streaming:** Issue [`#1475`](https://github.com/sipeed/picoclaw/issues/1475) requests a native event stream for run lifecycle events to aid orchestration and dashboard integration.

## 7. User Feedback Summary
Users are generally enthusiastic about new features (Memory, Android automation) but are frustrated by **instability in the "nightly" builds** and **regressions in core functionality** like model routing and file editing. The discrepancy between configured models and actual usage (`#2268`) is a specific pain point affecting trust in the routing system. Windows users continue to face compatibility issues with specific channels (QQ).

## 8. Backlog Watch
*   **Android Automation:** Issue [`#292`](https://github.com/sipeed/picoclaw/issues/292) remains open since Feb 2026 with high priority but no apparent merge timeline.
*   **File Tool Refactor:** Issue [`#1974`](https://github.com/sipeed/picoclaw/issues/1974) is a high-quality proposal regarding `ReadFileTool` that has not yet been actioned despite community agreement (👍 1).
*   **Network Stability:** Issue [`#1653`](https://github.com/sipeed/picoclaw/issues/1653) regarding intermittent `connection reset by peer` errors on small Linux boards remains unresolved, affecting autonomous agent reliability.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-03

## 1. Today's Overview
NanoClaw is experiencing a surge in development activity, with **36 Pull Requests** updated in the last 24 hours compared to only 7 Issues. The project is in an active expansion phase, heavily focused on broadening integration support (new channels like WeChat, QQ, Twilio) and improving infrastructure robustness (SELinux support, Dockerization, security policies). While user-reported issues are low, the community is actively pushing for multi-provider support and containerization to mitigate supply chain risks and platform dependency.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
Significant advancements occurred despite no official release, with several complex features and infrastructure changes consolidated in merged/closed PRs:

*   **Agent Orchestration (Merged):** [PR #1602](https://github.com/qwibitai/nanoclaw/pull/1602) introduced "Fas 1" of the agent organization spec, transforming the assistant into a CTO role capable of orchestrating a team of 11 specialist roles (PM, Architect, Researcher, etc.).
*   **Local Model Integration (Merged):** [PR #1600](https://github.com/qwibitai/nanoclaw/pull/1600) added MCP tools and image support for local models (specifically Goose), including a temporary HTTP MCP server wrapper for sessions.
*   **Governance & Standards (Merged):**
    *   A Contributor Covenant Code of Conduct was added via [PR #1595](https://github.com/qwibitai/nanoclaw/pull/1595).
    *   [PR #1591](https://github.com/qwibitai/nanoclaw/issues/1591) addressed critical IP implications by auditing and resolving AI co-authorship attribution prompts.
*   **Experiment Processing (Merged):** [PR #1590](https://github.com/qwibitai/nanoclaw/issues/1590) enhanced the experiment processor to support multi-phase execution, duration classes, and priority scheduling.
*   **Utility Skills (Merged):** [PR #1190](https://github.com/qwibitai/nanoclaw/pull/1190) added a script task skill for running scheduled shell commands (maintenance, backups) without launching a full AI session.

## 4. Community Hot Topics
The most active discussions highlight concerns regarding platform lock-in and deployment security:

*   **[Issue #80](https://github.com/qwibitai/nanoclaw/issues/80) - Support for other runtimes (OpenCode, Codex, Gemini)**
    *   **Activity:** 56 👍, 29 comments.
    *   **Analysis:** Users are alarmed by Anthropic shutting down subscriptions for projects like OpenClaw. There is a strong demand to decouple NanoClaw from Anthropic-exclusive dependencies to prevent service disruption.
*   **[Issue #1485](https://github.com/qwibitai/nanoclaw/issues/1485) - Run NanoClaw in a Container/Docker**
    *   **Activity:** Updated yesterday.
    *   **Analysis:** Criticism of the current "curl install" method running directly on the host OS. Users are demanding a containerized first-class experience to protect the host OS from supply chain attacks and isolate the environment.
*   **[PR #1605](https://github.com/qwibitai/nanoclaw/pull/1605) - Security Policy Engine**
    *   **Activity:** Major proposal for deterministic user gating and tool restrictions.
    *   **Analysis:** Addresses the growing need for strict security controls as agents become more powerful. Moves away from "prompt-based" security to code-enforced policies.

## 5. Bugs & Stability
*   **Systemic Blocking (Medium Severity):**
    *   **[Issue #1603](https://github.com/qwibitai/nanoclaw/issues/1603):** Tasks block the caller group for the entire task duration. Root cause identified in `task-scheduler.ts` line 267.
*   **Service Crashes (Medium Severity):**
    *   **[Issue #1599](https://github.com/qwibitai/nanoclaw/issues/1599):** The `claw` CLI fails to utilize `onecli`, requesting login unexpectedly.
*   **Path Resolution (High Severity - macOS):**
    *   **[PR #1604](https://github.com/qwibitai/nanoclaw/pull/1604):** A fix was opened for service crashes on Apple Silicon Macs due to hardcoded PATHs missing Homebrew and Node binary directories in `launchd` and `systemd` units.
*   **SELinux Compatibility (High Severity):**
    *   **[PR #1530](https://github.com/qwibitai/nanoclaw/pull/1530):** Addresses permission denied errors on Fedora/RHEL by adding `:z` labels to Docker volume mounts.

## 6. Feature Requests & Roadmap Signals
The community is actively contributing features that suggest a move toward a more platform-agnostic, enterprise-ready agent system:

*   **New Channels:** High demand for diverse communication integrations. [PR #1594](https://github.com/qwibitai/nanoclaw/pull/1594) (WeChat) and [PR #966](https://github.com/qwibitai/nanoclaw/pull/966) (QQ Bot) indicate a desire to move beyond Western-centric platforms (Discord/Slack).
*   **Alternative Providers:** Continued pressure via [Issue #80](https://github.com/qwibitai/nanoclaw/issues/80) and [PR #478](https://github.com/qwibitai/nanoclaw/pull/478) (Google Vertex AI) suggests the roadmap *must* prioritize abstraction of the LLM provider layer.
*   **Advanced Memory:** [PR #1283](https://github.com/qwibitai/nanoclaw/pull/1283) attempts to upgrade the memory system to a hybrid BM25+vector retrieval model (`memory-lancedb-pro`), indicating the base vector search is insufficient for complex use cases.
*   **Configuration Management:** [PR #1545](https://github.com/qwibitai/nanoclaw/pull/1545) and [PR #1585](https://github.com/qwibitai/nanoclaw/pull/1585) signal a need for granular, per-group or per-invocation configuration of models and agent behaviors.

## 7. User Feedback Summary
*   **Security Fears:** Users are explicitly worried about "supply chain attacks" regarding the install scripts ([Issue #1485](https://github.com/qwibitai/nanoclaw/issues/1485)) and AI attribution/IP rights ([Issue #1591](https://github.com/qwibitai/nanoclaw/issues/1591)).
*   **Vendor Lock-in Anxiety:** The reference to Anthropic shutting down subs ([Issue #80](https://github.com/qwibitai/nanoclaw/issues/80)) suggests users are adopting NanoClaw defensively and want escape hatches.
*   **Platform Diversity:** Requests for Twilio, QQ, and WeChat show a user base that is global and enterprise-focused, requiring official APIs over unofficial "hacks."

## 8. Backlog Watch
Several critical items remain open or stale and require maintainer attention:

*   **Multi-Provider Support:** [Issue #80](https://github.com/qwibitai/nanoclaw/issues/80) (Open since Feb) is the highest priority for users but remains unresolved.
*   **Containerization:** [Issue #1485](https://github.com/qwibitai/nanoclaw/issues/1485) requests a fundamental change to how the app is deployed.
*   **Google Vertex AI:** [PR #478](https://github.com/qwibitai/nanoclaw/pull/478) (Open since Feb) allows enterprise users to access Claude via GCP but is still pending review.
*   **Memory Upgrade:** [PR #1283](https://github.com/qwibitai/nanoclaw/pull/1283) (Open since Mar) offers a significant architectural improvement to retrieval but has not been merged.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-04-03

## 1. Today's Overview
The NullClaw project remains in an active maintenance phase with focused development on backend integrations and user experience stability. While no new releases were published today, the team successfully addressed a specific issue with the `ollama` integration (PR #760). Development focus has shifted toward refining the command-line interface, specifically to ensure clean output by filtering internal streaming markup. The project currently has zero active issues in the tracker, suggesting a stable baseline or a lack of recent user reporting, with two Pull Requests driving the day's activity.

## 2. Releases
**No new releases** published on 2026-04-03.

## 3. Project Progress
**Merged & Closed Pull Requests:**
*   **[CLOSED] Fix ollama** ([#760](https://github.com/nullclaw/nullclaw/pull/760))
    *   **Author:** nathanalam
    *   **Impact:** This PR addresses functionality regarding the `ollama` integration. While details are sparse, the merge indicates that a fix for Ollama-related execution or connection logic has been validated and merged into the main branch.

**Active Development:**
*   **[OPEN] fix(cli): filter streamed tool-call markup** ([#761](https://github.com/nullclaw/nullclaw/pull/761))
    *   **Author:** vernonstinebaker
    *   **Focus:** Improvement of the `nullclaw agent` CLI.
    *   **Details:** This PR introduces `streaming.TagFilter` to wrap CLI output. The goal is to prevent raw `<think...>` blocks (internal reasoning tokens) from leaking into the foreground terminal output during streaming. It also adds a regression test for `src/agent/cli.zig` and updates MCP stdio handling.

## 4. Community Hot Topics
There are **no active community discussions** based on issues today. The primary activity is driven by maintainers or contributors submitting Pull Requests rather than community-raised tickets.

## 5. Bugs & Stability
**Resolved:**
*   **Ollama Integration Bug:** An issue affecting Ollama (likely related to connection stability or generation failures) was fixed in [#760](https://github.com/nullclaw/nullclaw/pull/760).

**In Progress:**
*   **UI/Output Regression:** There is an ongoing effort to fix a "leaky" terminal output issue where internal tool-call markup (specifically thinking blocks) is displayed to the user. This is currently being addressed in [#761](https://github.com/nullclaw/nullclaw/pull/761).

## 6. Feature Requests & Roadmap Signals
*   **Cleaner CLI Experience:** The work in PR #761 signals a roadmap focus on polishing the user experience. The team is prioritizing a "clean terminal" aesthetic, ensuring that agentic reasoning or tool-call markup is hidden from the user by default during streaming operations.

## 7. User Feedback Summary
Direct user feedback is limited today due to the lack of new Issues. However, the submission of PR #761 suggests user-facing friction regarding cluttered terminal output during agent tasks. The initiative to filter out `<think...>` blocks indicates that the visibility of internal LLM reasoning has been a pain point for users interacting with the CLI.

## 8. Backlog Watch
**No backlogged items** identified. With 0 open issues updated in the last 24 hours, the issue tracker appears clear, indicating no immediate backlog requiring community attention.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-04-03

## 1. Today's Overview
IronClaw is experiencing a high-velocity development cycle with significant architectural maturation. The project remains highly active, with 50 Pull Requests and 21 Issues updated in the last 24 hours. Development focus is sharply divided between stabilizing the new "v2 architecture" (thread-capability execution engine) and addressing critical infrastructure gaps, particularly in CI/CD security and database migration consistency. While feature velocity is high, the backlog of open PRs (37) indicates a bottleneck in review and merging processes, likely due to the complexity of the ongoing architectural migration.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
*   **Database Stability:** Rapid iterations on PostgreSQL/libSQL migrations successfully resolved ordering conflicts with production environments. Migrations V15, V16, and V17 were renumbered and aligned via PRs [#1923](https://github.com/nearai/ironclaw/pull/1923), [#1928](https://github.com/nearai/ironclaw/pull/1928), and [#1931](https://github.com/nearai/ironclaw/pull/1931) to prevent refinery mismatches.
*   **Runtime Fixes:** A critical segmentation fault affecting libSQL databases on container restart was addressed in [PR #1930](https://github.com/nearai/ironclaw/pull/1930) by switching the Docker base image from Alpine (musl) to Debian (glibc).
*   **Docker Workflow:** Changes to Docker tagging logic were merged in [PR #1925](https://github.com/nearai/ironclaw/pull/1925), restricting the `:latest` tag to official releases to prevent unstable staging builds from being tagged as production-ready.

## 4. Community Hot Topics
*   **Architectural Overhaul (PR #1557):** The most significant ongoing discussion surrounds the *Unified Thread-Capability-CodeAct execution engine (v2)*. This XL-sized PR aims to replace fragmented abstractions (Session, Job, Routine, etc.) with 5 unified primitives.
    *   *Link:* [nearai/ironclaw#1557](https://github.com/nearai/ironclaw/pull/1557)
    *   *Analysis:* The community is highly attentive to this change as it represents a fundamental rewrite of the agent's core logic, designed to enable parallel execution of v1 and v2 engines during the transition.
*   **Structured Collections (PR #1937):** A proposal for "Typed Structured Storage" is gaining traction, aiming to solve a persistent user pain point regarding agent data fragmentation (e.g., the "grocery list" problem).
    *   *Link:* [nearai/ironclaw#1937](https://github.com/nearai/ironclaw/pull/1937)
    *   *Analysis:* Users are demanding reliable CRUD tools for agent workspaces to prevent data corruption and file fragmentation.

## 5. Bugs & Stability
*   **[CRITICAL] CI/CD Security Vulnerabilities:** An automated CI review uncovered multiple critical severity issues in the Docker build workflow, including command injection vulnerabilities (Issue [#1901](https://github.com/nearai/ironclaw/issues/1901)) and unvalidated user inputs (Issue [#1902](https://github.com/nearai/ironclaw/issues/1902)).
*   **[HIGH] Private Network Restrictions:** Users reported that `LLM_BASE_URL` incorrectly blocks HTTP connections to private network domains, forcing upgrades to HTTPS even for internal self-hosted models (Issue [#1754](https://github.com/nearai/ironclaw/issues/1754)).
*   **[MEDIUM] Google Suite OAuth Blocking:** Users are experiencing widespread blocks when using Google Workspace tools due to OAuth security restrictions, with requests for alternative providers (Issue [#902](https://github.com/nearai/ironclaw/issues/902)).

## 6. Feature Requests & Roadmap Signals
*   **Agent Client Protocol (ACP) Support:** Following the closure of Issue [#1506](https://github.com/nearai/ironclaw/issues/1506), support for ACP is now a priority, allowing delegation to generic coding agents.
*   **Conversation Management:** Users are explicitly requesting the ability to delete old conversations/threads via the Web UI, a feature currently missing (Issue [#1907](https://github.com/nearai/ironclaw/issues/1907)).
*   **Prompt Caching:** There is a clear push to optimize costs and latency, evidenced by new requests to add prompt caching support for AWS Bedrock (Issue [#1926](https://github.com/nearai/ironclaw/issues/1926), PR [#1935](https://github.com/nearai/ironclaw/pull/1935)).
*   **Authentication Expansion:** Development is active on social login options (Apple, GitHub, NEAR wallet) to reduce reliance on complex SSO setups (Issues [#1771](https://github.com/nearai/ironclaw/issues/1771), [#1807](https://github.com/nearai/ironclaw/issues/1807)).

## 7. User Feedback Summary
*   **Configuration Friction:** Users are struggling with `LLM_BASE_URL` configurations, specifically the requirement for `/v1` suffixes in OpenAI-compatible providers (Issue [#1934](https://github.com/nearai/ironclaw/issues/1934)) and strict TLS checks on local endpoints.
*   **Integration Stability:** Users deploying the Feishu (Lark) channel are encountering runtime errors regarding missing `app_id` configurations (Issue [#1633](https://github.com/nearai/ironclaw/issues/1633)), indicating gaps in documentation or config validation for third-party integrations.

## 8. Backlog Watch
*   **Issue #902 (Google OAuth):** Open since March 10, this issue regarding Google Suite blocking remains unresolved. As the integration is widely used, the lack of a fallback provider is a growing concern for enterprise users.
    *   *Link:* [nearai/ironclaw#902](https://github.com/nearai/ironclaw/issues/902)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-04-03

## 1. Today's Overview
LobsterAI is experiencing a **high-velocity development cycle** with significant activity on the issue and pull request fronts. In the last 24 hours, the repository saw 34 updated issues and 50 updated PRs, indicating a robust push to stabilize and expand features. While no new releases were published today, the project is actively refining its core "Cowork" (chat) experience, scheduling system, and agent management. The trend suggests a focus on **polishing user experience (UX)** and **fixing regressions** introduced by recent large-scale features, particularly around model configuration and multi-file handling.

## 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   **Current Version Context:** Issues and PRs reference recent builds (e.g., `v2026.4.1`), suggesting the codebase is advancing towards a future milestone, likely incorporating the recent session-based model selection feature and fixes.

## 3. Project Progress
*   **Reverted Feature - Per-Session Model Binding:** PR #1380 (Open) and #1374 (Closed) reveal that a major feature allowing unique AI models per session was merged but subsequently **reverted**. The implementation caused unintended side effects where OpenClaw session files recorded model snapshots, preventing global model switches from affecting existing sessions (e.g., WeChat). The team is redesigning this logic.
    *   *Link:* [#1380](https://github.com/netease-youdao/LobsterAI/pull/1380)
*   **Enhanced Agent Management:** PR #1366 (Open) introduces **Agent Import/Export** functionality. This allows users to backup, share, and migrate agent configurations via JSON, addressing a key user need for portability.
    *   *Link:* [#1366](https://github.com/netease-youdao/LobsterAI/pull/1366)
*   **UX & Polish:**
    *   PR #1364 (Open) adds a **Model Selector** directly to the input toolbar on the Home page, reducing the need to scroll to the top header to switch models.
    *   PR #1369 (Open) implements **Full-Text Search** for chat history, allowing users to find conversations by content rather than just titles.
    *   PR #1362 (Open) adds **ESC key support** for closing permission modals.

## 4. Community Hot Topics
*   **LRU Cache Bug (Issue #1299):** A technical discussion highlighting a discrepancy between documentation (LRU cache) and implementation (Map insertion order) in the LLM judge module.
    *   *Link:* [#1299](https://github.com/netease-youdao/LobsterAI/issues/1299)
*   **System Crashes (Issue #1354):** Users are reporting **Blue Screens of Death (BSOD)** when asking LobsterAI to launch `pageant` (an SSH authentication agent). This is a critical stability concern involving system-level interaction.
    *   *Link:* [#1354](https://github.com/netease-youdao/LobsterAI/issues/1354)
*   **Multi-File Upload Failure (PR #1372):** A highly relevant bug fix for the input flow. Previously, selecting multiple files resulted in only the last file being kept. This PR fixes the attachment merging logic.
    *   *Link:* [#1372](https://github.com/netease-youdao/LobsterAI/pull/1372)

## 5. Bugs & Stability
*   **Critical: System Instability:**
    *   **BSOD on Pageant Launch (#1354):** User reported system crash (Blue Screen) triggered by automation tasks.
    *   **App Freeze on Image Upload (#1296):** Uploading a 3MB long image causes the app to crash and enter a permanently error state for new tasks.
*   **High: Functional Regressions:**
    *   **Model Config Panel Read-Only (#1307):** After editing one provider's config, users cannot edit others; the UI becomes unresponsive.
    *   **Persisted "Ghost" Tasks (#1359):** Deleted scheduled tasks reappear after restarting the application.
    *   **Clipboard Image Recognition Fail (#1295 - Closed):** Pasting images (Cmd+V) into model inputs fails, though file upload works. (Marked closed, likely fixed in recent commits).
*   **Medium: Logic Errors:**
    *   **Pageant False Positive (#1357):** System reports Pageant started when it hasn't.
    *   **Input Validation Error (#1298):** Two-character inputs trigger "Input too long" errors despite low token usage.

## 6. Feature Requests & Roadmap Signals
*   **Cowork UI Improvements (MaoQianTu's Requests):** A series of issues propose standard chat UI features:
    *   **Export to Markdown (#1345):** Users want to save chats as text, not just screenshots.
    *   **History Navigation (#1341):** Request for arrow keys to cycle through previous message inputs.
    *   **Timestamps (#1339):** Need for visible send times on messages.
    *   *Prediction:* These are high-value, low-risk features likely to appear in the next minor version.
*   **Sidebar Customization:** Requests for **resizable sidebars** (#1314) and **session grouping by time** (#1337) indicate users are managing large numbers of sessions and need better organization.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Scheduling Reliability:** Users report that scheduled tasks (#1329) lack notification channel options, and history records display incorrect titles after task deletion (#1305).
    *   **Agent Creation UX:** The agent creation process lacks validation, allowing duplicate names (#1360) and displaying English text ("Delete") in localized versions (#1361).
    *   **MCP Connectivity:** Users report that custom HTTP-based MCP servers are unusable, while SSE types work fine (#1293).
*   **Satisfaction:** Users actively requesting Markdown export and code block line numbers indicate a heavy reliance on the tool for coding and documentation tasks.

## 8. Backlog Watch
*   **Unassigned Validation Tasks:** Issues like **Agent Duplicate Names (#1360)** and **Scheduled Task Name Duplicates (#1348)** remain open without associated fix PRs. These are critical for data integrity.
*   **Search Functionality:** While PR #1369 is open to fix content search, the lack of "Global Search" remains a gap filled only by pending community contributions.
*   **Long-standing Open PRs:** PR #479 (dating back to March 18) remains active/updated today, suggesting a persistent or complex issue requiring ongoing attention.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-03

## 1. Today's Overview
Moltis is experiencing active maintenance with a focus on fixing connectivity and GraphQL stability issues. In the last 24 hours, developers closed a critical frontend bug regarding modal reactivity while identifying new security and architectural concerns regarding TLS and session handling. The project appears to be in a stabilization phase, with two out of three active PRs targeting bug fixes over new feature development, though a significant browser UI feature remains in the works.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
**Merged / Closed Enhancements:**
*   **Settings UI Optimization:** PR #540 was successfully merged, introducing significant UX improvements to the model list. This update adds collapsible lists, smart sorting (Prioritizing preferred/recommended models), and inline error handling to reduce clutter in the settings menu.
    *   *Link:* [moltis-org/moltis#540](https://github.com/moltis-org/moltis/pull/540)

**Active Development:**
*   **Browser Interaction UI:** Work continues on PR #531, a major feature adding an interactive browser viewing UI using CDP (Chrome DevTools Protocol) screencast. This will allow users to view and interact with browser sessions directly within the Moltis interface.
    *   *Link:* [moltis-org/moltis#531](https://github.com/moltis-org/moltis/pull/531)

## 4. Community Hot Topics
*   **Frontend Signal Reactivity (Closed):**
    Issue #536 garnered attention regarding a bug where channel connection modals (Telegram, Discord, etc.) failed to open. The root cause was identified as a broken reactivity chain in nested renders using Preact signals. This issue is now closed, resolving a significant blocker for user onboarding.
    *   *Link:* [moltis-org/moltis#536](https://github.com/moltis-org/moltis/issues/536)

*   **Public GraphQL API Sessions (Open):**
    Issue #542 highlights a developer-centric concern where the `sessionKey` parameter is being ignored in `chat.send` and `chat.history` GraphQL queries. A fix (PR #544) is currently open and advancing, indicating high priority for API correctness.
    *   *Link:* [moltis-org/moltis#542](https://github.com/moltis-org/moltis/issues/542)

## 5. Bugs & Stability
**High Severity:**
*   **Security/Compliance:** [Issue #543](https://github.com/moltis-org/moltis/issues/543) reports that the Slack Client is being built without TLS support. This represents a critical stability and security risk for enterprise deployments requiring encrypted connections.
*   **Data Integrity:** [Issue #542](https://github.com/moltis-org/moltis/issues/542) involves the GraphQL API ignoring session keys. A fix is actively being developed in [PR #544](https://github.com/moltis-org/moltis/pull/544).

**Resolved:**
*   **UI Functionality:** [Issue #536](https://github.com/moltis-org/moltis/issues/536) (Closed) - Fixed channel modal rendering issues.

## 6. Feature Requests & Roadmap Signals
*   **Browser Observation & Control:** PR #531 signals a strong roadmap direction toward giving users granular control over agent browser sessions. The "interactive browser viewing UI" suggests a move towards making Moltis a tool for supervising and correcting agent behavior in real-time.
*   **UX Refinement:** The recent merge of PR #540 indicates user demand for a more manageable settings interface, specifically dealing with the overwhelming number of available AI models.

## 7. User Feedback Summary
*   **Dissatisfaction:** Users are encountering friction with basic connectivity. The closed Issue #536 suggests users were unable to configure standard channels (Slack, Telegram) due to UI bugs.
*   **Technical Feedback:** Advanced users (developers) are highlighting inconsistencies in the API layer (Issue #542) and build configuration (Issue #543), suggesting a need for better regression testing in the build pipeline.

## 8. Backlog Watch
*   **TLS Implementation:** With Issue #543 raised, maintaining attention on ensuring the Slack build process includes TLS libraries is crucial to prevent this from becoming a long-running security debt.
*   **Browser UI:** PR #531 remains open; stakeholders should monitor this for when it enters the release candidate phase, as it is a complex feature involving CDP integration.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-04-03

## 1. Today's Overview
CoPaw is experiencing a period of **high-velocity development and significant community engagement** as it approaches the v1.0.1 milestone. The project maintains robust activity with **50 issues and 44 pull requests updated** in the last 24 hours. While the latest beta release (`v1.0.1-beta.1`) addresses specific UI bugs, the community is actively reporting stability issues regarding the new `browser_use` tool, model parsing errors, and file system safety in the workspace. Notably, over half of the recent pull requests are from first-time contributors, signaling a healthy and expanding open-source ecosystem, though the backlog of open issues is growing faster than the closure rate.

## 2. Latest Releases
**v1.0.1-beta.1** (Released 2026-04-03)
*   **Type**: Patch/Beta
*   **Key Changes**:
    *   **Console Fix**: Resolved a bug where file timestamps displayed "NaNd ago" in the workspace UI ([#2793](https://github.com/agentscope-ai/CoPaw/pull/2793)).
    *   **Skills**: Updates to the internal skill handling logic ([`Console/skill`](https://github.com/agentscope-ai/CoPaw/pull/2795)).
*   **Migration Notes**: This is a beta release. Users should expect incremental fixes leading up to the stable v1.0.1 release. No breaking changes were introduced in this specific patch.

## 3. Project Progress
Significant strides were made in infrastructure and channel support, though many core features are still under review:
*   **Closed PRs**: The team successfully merged **PR #2800**, refactoring time formatting to use `dayjs` for better internationalization (i18n) support, and **PR #2835**, which fixes version parsing logic for beta tags.
*   **Closed Learning Loop**: A major feature proposal (PR #2860) introduces a "Closed Learning Loop" and heartbeat task dispatcher, aiming to make agents self-improving by automatically patching skills after tasks.
*   **Channel Enhancements**: Work on the **Feishu (Lark) integration** is active, with PR #2862 adding a "streaming typewriter card" effect for better user experience.
*   **Platform Support**: First-time contributors are pushing improvements for Windows browser launching (PR #2861) and Apple Silicon (ARM) architecture support (Issue #2655).

## 4. Community Hot Topics
*   **Contribution Sprint** ([#2291](https://github.com/agentscope-ai/CoPaw/issues/2291) | 41 comments):
    *   The "Help Wanted: Open Tasks" board remains the most active thread. Users are actively claiming tasks ranging from P0 to P2 priority.
    *   *Underlying Need*: The community wants to accelerate development speed and is eager for structured guidance on how to help.
*   **Browser Tool Stability** ([#2755](https://github.com/agentscope-ai/CoPaw/issues/2755) | 6 comments):
    *   Users report that the `browser_use` tool fails on secondary calls ("Browser Occupied") and requires manual process killing (`pkill -9 chromium`) to recover.
    *   *Underlying Need*: The browser automation feature is high-value but currently unstable for multi-step workflows.
*   **Claude Code Inspiration** ([#2811](https://github.com/agentscope-ai/CoPaw/issues/2811) | 4 comments):
    *   Discussion on integrating concepts from the "Claude Code" leak.
    *   *Underlying Need*: Users desire a more advanced, "agentic" coding capability that surpasses current tool-calling limitations.

## 5. Bugs & Stability
*   **CRITICAL: Data Loss / Workspace Safety** ([#2826](https://github.com/agentscope-ai/CoPaw/issues/2826)):
    *   *Description*: Modifying a skill file in the workspace caused **all other files in the same folder to be deleted**.
    *   *Status*: Closed (Fixed in recent commits/PRs).
*   **CRITICAL: GPU & Local Models** ([#2725](https://github.com/agentscope-ai/CoPaw/issues/2725)):
    *   *Description*: `CoPaw Local` (Llama.cpp engine) fails to utilize Nvidia RTX GPUs, defaulting to CPU even when the driver is installed.
    *   *Status*: Open. High impact on local usability.
*   **HIGH: Model Parsing Errors** ([#2816](https://github.com/agentscope-ai/CoPaw/issues/2816), [#2839](https://github.com/agentscope-ai/CoPaw/issues/2839)):
    *   *Description*: Agents frequently call tools without parameters or fail to parse input tokens (e.g., at pos 204/348). Affects Llama.cpp and various cloud models.
    *   *Status*: Open. PR #1512 (Open) aims to fix this for local models by supporting OpenAI-style tool calls.
*   **HIGH: Browser CPU Spike** ([#2348](https://github.com/agentscope-ai/CoPaw/issues/2348)):
    *   *Description*: Worker processes consume 100% CPU even under no load.
    *   *Status*: Open.
*   **Medium: Gemini API Integration** ([#2828](https://github.com/agentscope-ai/CoPaw/issues/2828), [#2033](https://github.com/agentscope-ai/CoPaw/issues/2033)):
    *   *Description*: "Corrupted thought signature" and validation errors with Gemini 2.5/3.0.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Agent Improvements**: Requests for better multi-agent chat history ([#2814](https://github.com/agentscope-ai/CoPaw/issues/2814)) and dedicated meeting systems ([#2785](https://github.com/agentscope-ai/CoPaw/pull/2785)) suggest a shift from single-agent use cases to complex orchestration.
*   **Desktop UX**: Users are requesting an **Auto-Update** feature for the desktop client to avoid manual reinstallation ([#2846](https://github.com/agentscope-ai/CoPaw/issues/2846)) and proper Windows taskbar icons.
*   **Model Support**: Strong demand for "CoPaw-Flash" fine-tunes on larger models (27B/35B) ([#2806](https://github.com/agentscope-ai/CoPaw/issues/2806)) and better Zhipu/GLM integration ([#2858](https://github.com/agentscope-ai/CoPaw/pull/2858)).

## 7. User Feedback Summary
*   **Pain Points**:
    *   **Reliability**: Frequent reports of "Agent Unknown Error" indicate frustration with model providers' reliability (Gemini, MiniMax) and the framework's error handling.
    *   **Configuration**: Setting up local models and Ollama remains difficult for non-technical users.
    *   **Control**: Users report an inability to stop runaway agents (e.g., infinite `write_file` loops) via the web console ([#2831](https://github.com/agentscope-ai/CoPaw/issues/2831)).
*   **Positive Signals**: The community is actively engaged in creating skills and reporting bugs with detailed logs, showing a high level of investment in the project's success.

## 8. Backlog Watch
*   **Security**: PR #2840 ([Remove localhost API auth bypass](https://github.com/agentscope-ai/CoPaw/pull/2840)) is currently open and critical for users running cloudflared or reverse proxies.
*   **Long-Standing Bugs**: The issue with **WeChat** not being able to send files/images ([#2601](https://github.com/agentscope-ai/CoPaw/issues/2601)) was fixed locally by a user but has not yet been merged/scheduled for release.
*   **Apple Silicon**: Request for `browser_use` to support native ARM64 architecture on macOS ([#2655](https://github.com/agentscope-ai/CoPaw/issues/2655)) is still pending implementation.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-04-03

## 1. Today's Overview
ZeptoClaw has exhibited extremely high development velocity today, closing **10 issues** related to the "Crucible" migration initiative, though no new releases were published. The project appears to be in a critical stabilization phase, transitioning from planning (RFCs) to execution (fixes and audits). The repository is currently undergoing a "fork-and-trim" operation, suggesting a major architectural pivot. While the issue tracker was cleaned up significantly, only one Pull Request remains open, focusing on Telegram stability.

## 2. Releases
**No new releases published today.**
*Given the high volume of closed issues related to "crucible-migration" stabilization, a release candidate may be imminent, but none has been formally tagged yet.*

## 3. Project Progress
The **ZeptoClaw -> Crucible Migration Program** has dominated the day's progress, moving from the planning phase into active cleanup and remediation.
*   **Migration Governance:** Issues #477 and #478 (RFCs) were closed, signaling approval to move forward with the OpenSpec-managed fork-and-trim strategy.
*   **Codebase Hygiene:** Issue #483 (Audit) and #479 (Pre-implementation cleanup) were closed, indicating the successful removal of unused code, legacy assets, and unsupported frontend features from the migration baseline.
*   **Build Stabilization:** Issue #484 was closed, confirming that compile blockers on the `crucible-migration` branch have been resolved and the branch is now staged for review.
*   **Documentation Alignment:** Issues #481 and #482 were closed, reconciling the trim plan inventories and removing stale baseline references.

## 4. Community Hot Topics
While there was no public discussion activity (comments/reactions), the themes addressed in the closed issues highlight the internal "Hot Topics" for the project:

*   **Crucible Fork-and-Trim Strategy ([#477](https://github.com/qhkm/zeptoclaw/issues/477), [#478](https://github.com/qhkm/zeptoclaw/issues/478))**
    *   *Topic:* Establishing the OpenSpec program for the migration.
    *   *Analysis:* The project is restructuring its core architecture. The closure of these RFCs suggests the maintainers have agreed on a plan to fork the current codebase into "Crucible" and trim unnecessary fat.
*   **Telegram Bot Reliability ([#462](https://github.com/qhkm/zeptoclaw/pull/462))**
    *   *Topic:* Preventing silent failures during long-running tasks.
    *   *Analysis:* This is the primary user-facing concern. The community (or the author acting as a user) identified that complex tasks cause the bot to hang.

## 5. Bugs & Stability
**High Severity:** Binary Plugin Invocation Failure ([#485](https://github.com/qhkm/zeptoclaw/issues/485))
*   **Issue:** Crucible binary plugins were using the JSON-RPC method `execute`, while the system expects `tools/call`.
*   **Impact:** This caused Telegram-triggered tool calls to fail completely with an `Unsupported JSON-RPC method` error.
*   **Status:** **Fixed and Closed.**
*   **Remediation:** The invocation method was updated to `tools/call` to align with irontodo expectations.

**Medium Severity:** Silent Message Failures ([#462](https://github.com/qhkm/zeptoclaw/pull/462))
*   **Issue:** The Telegram bot silently fails (goes silent) when tasked with open-ended research that generates large responses (4+ sources).
*   **Status:** **Fix Open.**
*   **Remediation:** PR #462 attempts to fix this by implementing response chunking and plaintext fallbacks to prevent the bot from hanging.

## 6. Feature Requests & Roadmap Signals
Based on the RFCs and audits closed today, the roadmap for ZeptoClaw is shifting significantly:

*   **Crucible Migration:** The project is moving toward a "clean slate" fork. This involves removing "unsupported frontend and distribution surfaces" and focusing on a trimmed, specific set of tools/providers.
*   **Hardened Migration Specs:** Per closed issue #480, future updates will include stricter sequencing for tests/CI and clearer guidance on "retained state" backups during the migration.
*   **Telegram Robustness:** The active PR #462 signals a priority on improving the reliability of the Telegram interface, specifically handling large data payloads more gracefully.

## 7. User Feedback Summary
*   **Telegram Limitations:** The primary user pain point reported in PR #462 is the bot's inability to handle complex, multi-source research tasks. Users experience a "black hole" where the bot provides no feedback or error messages when a task is too large.
*   **Migration Complexity:** The spate of "cleanup" and "audit" issues suggests the developers felt the previous codebase had accumulated significant clutter ("unused migration leftovers," "stale baseline refs"), prompting a user/maintainer desire for a cleaner, more maintainable architecture.

## 8. Backlog Watch
*   **[PR #462: fix(telegram): prevent silent message failures...](https://github.com/qhkm/zeptoclaw/pull/462)**
    *   *Status:* Open.
    *   *Created:* March 28, 2026.
    *   *Why it matters:* This is the only remaining active PR. It addresses a critical UX bug where the bot becomes unresponsive. With the migration issues closed, this is likely the main blocker for the next stable release.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest
**Date:** 2026-04-03
**Project:** EasyClaw / RivonClaw
**GitHub:** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. Today's Overview
EasyClaw (branded as RivonClaw in its binary form) is currently in a stable maintenance phase. On April 3, 2026, the project recorded zero new code contributions, issues, or pull request activities, indicating a dormant development cycle for the day. However, the project released a new version (**v1.7.8**), suggesting that development efforts are focused on packaging and binary distribution rather than active feature iteration. The repository is otherwise quiet, with no community discussions or bug reports emerging in the last 24 hours.

### 2. Releases
*   **v1.7.8 (RivonClaw v1.7.8)**
    *   **Status:** Released.
    *   **Key Notes:** The primary update for this version appears to be platform-specific maintenance rather than feature additions.
    *   **Installation Advisory:** The release notes explicitly address a recurring friction point for macOS users regarding the **Gatekeeper** security mechanism. Users attempting to open the app may encounter an "'RivonClaw' is damaged and can't be opened" error. The documentation clarifies that this is due to the app being unsigned (a common occurrence in open-source projects lacking an Apple Developer certificate) and provides terminal-based instructions to bypass the block.
    *   **Assessment:** This release focuses on improving User Experience (UX) by proactively solving installation barriers on macOS.

### 3. Project Progress
*   **Merged PRs:** None.
*   **Features Advanced:** No active feature development was recorded in the last 24 hours. The "progress" today is limited to the successful deployment of the v1.7.8 release asset.

### 4. Community Hot Topics
*   **Status:** **Silent.**
*   There are no active discussions, issues, or pull requests in the repository at this time. The community activity level is currently zero, with no trending topics or user debates to report.

### 5. Bugs & Stability
*   **Active Bugs:** None reported in the last 24 hours.
*   **Stability Assessment:** With zero open issues and a new release shipped, the project appears to be in a stable state. The "Gatekeeper" issue mentioned in the release notes is a known limitation of distributing unsigned binaries on macOS rather than a code-level bug, though it does impact the initial user experience.

### 6. Feature Requests & Roadmap Signals
*   **Current Signals:** None.
*   With an empty issue tracker, there are no explicit user requests to analyze. The lack of activity suggests the current feature set (v1.7.8) satisfies user needs, or users are migrating to other channels for support.

### 7. User Feedback Summary
*   **Pain Points:** Based on the release notes, the primary user pain point is **onboarding/installation friction on macOS**. The specific error message regarding file damage causes alarm for users, prompting the maintainers to include a detailed workaround in the release description.
*   **Sentiment:** No direct feedback (comments or reactions) is available for analysis today.

### 8. Backlog Watch
*   **Items:** None.
*   The issue tracker is currently empty. There are no stale issues, lingering bug reports, or unanswered questions requiring immediate maintainer attention.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*