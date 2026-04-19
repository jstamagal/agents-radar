# OpenClaw Ecosystem Digest 2026-04-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-19 00:14 UTC

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

# OpenClaw Project Digest: 2026-04-19

## 1. Today's Overview
OpenClaw is experiencing a period of hyper-active development with significant infrastructure improvements but critical stability friction. The project has seen a massive surge in activity, with **500 issues** and **500 PRs** updated in the last 24 hours alone. The engineering focus is heavily weighted toward architectural robustness, specifically introducing a new SQLite-backed job queue ("minions") to prevent data loss during gateway crashes. However, the recent release (2026.4.14) appears to have introduced widespread regressions affecting core functionality like model configuration (OpenRouter), onboarding processes, and session continuity, resulting in a high volume of critical bug reports from the community.

## 2. Releases
No new releases were published today. The current stable version remains **2026.4.14** (released April 15, 2026).

## 3. Project Progress
**Key Advances (Merged PRs & Infrastructure):**
*   **SQLite Job Queue ("Minions"):** A major architectural overhaul (PR #68718) has been merged/updated, introducing a durable SQLite-backed queue for subagents and cron jobs. This addresses long-standing issues where gateway crashes resulted in lost work and orphaned processes.
*   **Plugin SDK Enhancements:** Hooks have been improved (PR #68729, #68608) to allow plugins to dynamically narrow the tool surface per-turn, reducing token usage and improving security.
*   **Media & Audio Fixes:**
    *   Fixes for preserving audio transcription multipart boundaries (PR #62008) prevent HTTP 400 errors during voice-to-text tasks.
    *   BlueBubbles plugin received a fix to preserve the pinned dispatcher for media fetches (PR #68724).
*   **Security Hardening:**
    *   A fix was applied to ensure `openclaw.json` is securely chmodded to `0o600` after writes (PR #68722).
    *   Discord guild-admin actions received a fix to verify requester permissions (PR #68716).

## 4. Community Hot Topics
*   **#49971 [RFC]: Native Agent Identity & Trust Verification for OpenClaw** (96 comments)
    *   [Link](https://github.com/openclaw/openclaw/issues/49971)
    *   **Topic:** An RFC proposing standardized identity (W3C DID) and verification (ERC-8004) for agents.
    *   **Signal:** The community is deeply concerned about security and impersonation in multi-agent environments. The high engagement suggests demand for a cryptographic trust layer.
*   **#45064 [Bug]: 2026.3.12 Memory Leak - OOM on basic commands** (31 comments)
    *   [Link](https://github.com/openclaw/openclaw/issues/45064)
    *   **Topic:** JavaScript heap out of memory crashes when running basic CLI commands like `doctor` or `gateway status`.
    *   **Signal:** Critical stability blocker for users; indicates a regression in core CLI memory management.
*   **#14593 [Bug]: Skill install fails in Docker: `brew not installed`** (24 comments)
    *   [Link](https://github.com/openclaw/openclaw/issues/14593)
    *   **Topic:** The official Docker image lacks Homebrew, breaking the installation of skills like `openai-whisper` that rely on it.
    *   **Signal:** A disconnect between the skill ecosystem's dependencies and the containerized runtime environment.

## 5. Bugs & Stability
**Critical Regressions (Version 2026.4.14):**
*   **#67353 & #67074 [Bug]: Onboarding Fails (TypeError: Cannot read properties of undefined)** (14 & 9 comments)
    *   [Link](https://github.com/openclaw/openclaw/issues/67353)
    *   **Severity:** **High** (Installation Blocker).
    *   **Details:** New users cannot complete the `openclaw onboard` process. The crash occurs during channel selection or even if skipped.
    *   **Status:** Fix likely pending in PRs related to setup validation.
*   **#67295 [Bug]: `openclaw agents add` writes wrong `baseUrl`** (10 comments)
    *   [Link](https://github.com/openclaw/openclaw/issues/67295)
    *   **Severity:** **High** (Provider Breakage).
    *   **Details:** Breaks OpenRouter, Arlee, Codex, and Copilot simultaneously by appending incorrect `/v1` paths or missing paths.
*   **#67698 & #67575 [Bug]: OpenRouter "Incomplete turn detected: payloads=0"** (7 & 6 comments)
    *   [Link](https://github.com/openclaw/openclaw/issues/67698)
    *   **Severity:** **High** (Provider Breakage).
    *   **Details:** Responses are received from OpenRouter but not surfaced to the user.
*   **#62272 [Bug]: Update to 2026.4.5 fails - Missing module `@buape/carbon`** (16 comments)
    *   [Link](https://github.com/openclaw/openclaw/issues/62272)
    *   **Severity:** **Medium** (Update Blocker).
    *   **Details:** Dependency resolution errors are blocking users from upgrading.

## 6. Feature Requests & Roadmap Signals
*   **Behavioral Reputation for Skills (#55342):** Users want a "trust score" system for skills (beyond just identity verification) to combat malicious plugins ("slow-burn trust accumulation").
*   **Media Support V2 (PR #65554):** There is strong demand for native image/audio support in the WebChat, which is currently being addressed in open PRs.
*   **Secrets Management (#17311):** A request for a unified `SecretsProvider` supporting env vars, keyrings, and 1Password, suggesting the current file-based secret management is insufficient for enterprise ops.
*   **Consolidated Feature Requests (#65824):** A bundle of 11 platform gaps from intensive users, including fixing FDA propagation on macOS and handling context window discovery for Bedrock models.

## 7. User Feedback Summary
*   **Frustration with Updates:** There is significant user dissatisfaction regarding the "two steps forward, one step back" nature of recent updates. Users are reporting that features that worked in 2026.3.x (e.g., specific provider configurations, Ollama detection) are broken in 2026.4.x.
*   **Platform Fragmentation:** Users running the project in Docker are hitting environment-specific issues (brew missing), while macOS users are struggling with permission propagation (FDA).
*   **Token/Cost Anxiety:** Issues like #55342 and #49888 (oversized tool results poisoning sessions) highlight user concern over token costs and API efficiency.

## 8. Backlog Watch
*   **#12590 [Bug]: `memoryFlush` does not fire reliably** (17 comments) — [Link](https://github.com/openclaw/openclaw/issues/12590)
    *   A lingering issue regarding memory compaction and flushing logic that has been stale/open since February.
*   **#36999 [Bug]: Severe 60s hangs on multi-step tool calls with OAuth** (21 comments) — [Link](https://github.com/openclaw/openclaw/issues/36999)
    *   A major performance issue affecting the Google Gemini CLI integration due to suspected rate limiting/retries.
*   **#26691 [Bug]: Nextcloud Talk Plugin cannot read messages** (9 comments) — [Link](https://github.com/openclaw/openclaw/issues/26691)
    *   Integration is non-functional due to API errors, requiring maintainer review of API changes.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis Report
**Date:** 2026-04-19
**Analyst:** Senior AI Agent Ecosystem Watch

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is currently undergoing a phase of aggressive architectural maturation, shifting from "proof-of-concept" scripts to robust, production-ready frameworks. Development across the board is prioritizing **infrastructure hardening**—specifically memory management, stability in containerized environments, and standardized configuration schemas—over net-new feature creep. However, this transition is causing significant friction; users are experiencing "growing pains" as major refactors (e.g., microkernels, module extraction) are introducing regressions in basic functionality like authentication, provider connectivity, and onboarding. The landscape is highly competitive yet cooperative, with a clear bifurcation between generalist "core" frameworks and specialized deployment targets.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | Stable (2026.4.14) | **High Volatility** |
| **IronClaw** | 18 | 50 | No Release | **Refactoring** |
| **NanoClaw** | ~5 | 21 | No Release | **Heavy Churn** |
| **ZeroClaw** | 49 | 46 | Beta (v0.7.1) | **Stabilizing** |
| **NanoBot** | ~5 | 54 | No Release | **Rapid Iteration** |
| **PicoClaw** | 11 | 8 | Nightly (v0.2.6) | **Regressing** |
| **Moltis** | 4 | 11 | No Release | **Healthy** |
| **CoPaw** | 15 | 11 | No Release | **Turbulent** |
| **NullClaw** | 7 | 11 | No Release | **Stable** |
| **LobsterAI** | 0 | 2 | No Release | **Stagnant** |

*Note: Health Score is a qualitative assessment based on bug-to-feature ratio and community sentiment.*

## 3. OpenClaw's Position
**OpenClaw remains the dominant force in terms of sheer scale and community engagement**, evidenced by the unparalleled volume of 500 issues/PRs in a single day.
*   **Advantages:** OpenClaw possesses the most mature plugin ecosystem and a highly active community driving feature requests (e.g., W3C DID identity verification).
*   **Technical Approach:** Unlike peers focusing on single-language purity (ZeroClaw/Rust), OpenClaw maintains a complex polyglot architecture (Node.js/Python/Rust bridges) which allows for broad tool compatibility but increases deployment surface area.
*   **Community Size:** Significantly larger than peers; user base is vocal and enterprise-focused, demanding high-availability features (SQLite job queues) which smaller projects (NanoBot) are only just beginning to explore.

## 4. Shared Technical Focus Areas
Cross-project analysis reveals converging requirements on several specific fronts:

*   **Memory & Context Management:**
    *   **OpenClaw:** Implementing SQLite-backed "minions" for durable memory.
    *   **NanoBot & Moltis:** Heated debate over "Dream" / consolidation strategies. Users demand "Session Focus" tools to prevent agent drift during long tasks.
    *   **CoPaw:** Major refactoring of memory modules ("As2.0") to decouple instructions from agent config.
*   **Authentication & Security (The "Day 2" Problem):**
    *   **ZeroClaw & PicoClaw:** Critical friction regarding missing `Authorization` headers and API key leakage.
    *   **OpenClaw & NanoClaw:** Heavy focus on verifying requester permissions and fixing OAuth/MITM proxy failures on Linux.
*   **Multi-Account/Provider Flexibility:**
    *   **IronClaw & NullClaw:** Users explicitly requesting "Credential Profiles" to manage multiple accounts per service (e.g., multiple Gmails).
    *   **CoPaw & LobsterAI:** strong push toward local model support (LM Studio, Ollama) to bypass cloud costs.

## 5. Differentiation Analysis
*   **OpenClaw & IronClaw (The "Enterprise" Platforms):** Focus on scale, reliability, and complex workflow orchestration (OpenClaw's Job Queue, IronClaw's Gateway extraction).
*   **NanoBot & NanoClaw (The "Hacker" Frameworks):** Prioritizing lightweight, modular codebases and privacy-preserving protocols (Nostr, Matrix, CalDAV).
*   **ZeroClaw (The "Systems" Play):** Unique focus on a Rust-based microkernel architecture and strict sandboxing (Shell policy), attracting technical users focused on security and containerization.
*   **Moltis & PicoClaw (The "Tooling" Specialists):** Focusing on specific technical capabilities—Moltis on code indexing/AST parsing, and PicoClaw on browser automation (CDP) and Android support.
*   **CoPaw (The "Consumer" App):** Prioritizing UI/UX (Console, Desktop), bilingual support, and ease of use, though suffering from migration pains (.copaw -> .qwenpaw).

## 6. Community Momentum & Maturity
*   **Rapidly Iterating (High Velocity):** **OpenClaw**, **IronClaw**, and **NanoBot** are in hyper-active development phases. OpenClaw is moving fast and breaking things; IronClaw is aggressively refactoring for long-term modularity.
*   **Stabilizing:** **ZeroClaw** is exiting a massive refactor (v0.7.0) and entering a "bug-fix" beta phase. **NullClaw** shows steady, controlled progress.
*   **Stagnant/Low Activity:** **LobsterAI**, **ZeptoClaw**, and **EasyClaw** show minimal to no activity, with **LobsterAI** particularly at risk due to stale PRs blocking critical features (LM Studio support).

## 7. Trend Signals
For AI agent developers and decision-makers, the community activity highlights three critical trends:
1.  **Local-First is Mandatory:** The massive demand for LM Studio (LobsterAI), Ollama (CoPaw), and Whisper (ZeroClaw) integrations indicates users no longer tolerate cloud-only architectures due to latency and cost concerns.
2.  **The "Agentic" Gap:** Users are moving beyond simple chat interfaces to "Background Agents." Requests for "Dream Mode" (ZeroClaw), "Session Focus" (NanoBot), and "Meeting Intelligence" (IronClaw) signal a market need for *proactive*, long-horizon task execution rather than reactive chat.
3.  **UX Debt is Crushing Adoption:** Across almost all projects (OpenClaw, CoPaw, NanoBot), the friction is shifting from "can it do the task?" to "can I configure it?" There is a massive opportunity for projects that solve configuration complexity and dependency hell (e.g., OpenClaw's brew issues, PicoClaw's Docker build breaks).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-19

## 1. Today's Overview
NanoBot is currently experiencing a phase of high activity and rapid iteration, with **54 Pull Requests** updated in the last 24 hours. The project is aggressively addressing infrastructure reliability (memory handling, stability loops, and WebSocket support) while simultaneously refining the "Dream" memory consolidation mechanism. While the community engagement is high, there is a notable split between advanced feature implementation and lingering stability bugs regarding provider compatibility and environment configuration.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
Key advancements driven by the 38 merged/closed PRs:

*   **Gateway Lifecycle & UX**: Merged **PR #3291** (feat/gateway), implementing `on_start` and `on_stop` lifecycle notifications. This enhances user awareness when running NanoBot as a systemd service.
*   **Repository Hygiene**: Merged **PR #3289** fixing the `GitStore` bug where the agent initialized nested git repositories and overwrote `.gitignore` files in the workspace.
*   **Community Workflow**: Merged **PR #3287** adding structured issue templates (Bug Report vs. Feature Request) to streamline triage.
*   **Memory Flexibility**: Merged **PR #3285** (feat/memory), making the `consolidationRatio` configurable. This allows users to fine-tune the trade-off between memory fidelity and context window usage.
*   **Discord Compatibility**: Merged **PR #3280** (fix/discord) to allow bot-to-bot messaging by only dropping self-loops, enabling multi-agent setups.

## 4. Community Hot Topics
*The community is intensely debating the boundaries of automation versus configuration.*

*   **Memory Consolidation Strategy** ([Issue #3227](https://github.com/HKUDS/nanobot/issues/3227) - 13 comments):
    *   *Discussion:* Users are reporting that the current `Session → history.jsonl → MEMORY.md` pipeline loses critical details in large-scale projects.
    *   *Underlying Need:* A desire for "perfect memory" or retrieval-augmented generation (RAG) rather than lossy summarization for long-term projects.
*   **Configurable Compaction** ([Issue #3270](https://github.com/HKUDS/nanobot/issues/3270) - 3 comments):
    *   *Discussion:* Debate over whether the compaction trigger point should be a hardcoded engineering decision or a user-configurable parameter.
    *   *Underlying Need:* Users want control over how aggressively the agent compresses context to prevent "hallucinations" or loss of instruction adherence during long tasks.
*   **Session Persistence** ([Issue #3047](https://github.com/HKUDS/nanobot/issues/3047) - 2 comments):
    *   *Discussion:* Criticism of the "Dream" design for causing context overflow within its 2-hour window.
    *   *Underlying Need:* Real-time or streaming memory consolidation, rather than batch processing, to prevent context window exhaustion during active tasks.

## 5. Bugs & Stability
*Critical issues impacting deployment and core loops.*

*   **[HIGH] API Gateway Infinite Loops** ([Issue #3220](https://github.com/HKUDS/nanobot/issues/3227)):
    *   *Bug:* Agent enters an infinite empty tool-call loop when non-compliant API gateways return tool_calls with a `finish_reason` other than "tool_calls" (e.g., "refusal").
    *   *Status:* Closed, fix likely merged.
*   **[HIGH] DuckDuckGo Search Hangs** ([Issue #2804](https://github.com/HKUDS/nanobot/issues/2804)):
    *   *Bug:* `web_search` via DuckDuckGo hangs indefinitely, blocking the entire message session.
    *   *Status:* Open (but closed in data as of 18th? Data says closed, but older issues persist). *Note: Data inconsistency shows this as closed in recent batch but related issues like #2071 remain open.*
*   **[MED] Streaming Truncation** ([Issue #3256](https://github.com/HKUDS/nanobot/issues/3256)):
    *   *Bug:* Mid-stream LLM response aborts are treated as success and not retried.
    *   *Status:* Closed.
*   **[MED] Configuration Environment Variables** ([Issue #3251](https://github.com/HKUDS/nanobot/issues/3251)):
    *   *Bug:* `config.json` supports `${VAR}` syntax but fails to parse it, causing silent authentication failures.
    *   *Status:* Closed.

## 6. Feature Requests & Roadmap Signals
*Users are asking for more "agentic" control and better long-running task support.*

*   **Session-Level Focus Tool** ([Issue #3292](https://github.com/HKUDS/nanobot/issues/3292)):
    *   *Request:* A mechanism to maintain a "primary goal" or context anchor across interruptions and memory compactions. Users want the agent to remember the "Main Task" even if it answers side questions.
*   **Gateway Lifecycle Notifications** ([Issue #3279](https://github.com/HKUDS/nanobot/issues/3279)):
    *   *Request:* Status messages (Start/Stop) for background services. *Status: Implemented via PR #3291.*
*   **Custom Dream/Skill Drift Control** ([Issue #3282](https://github.com/HKUDS/nanobot/issues/3282)):
    *   *Request:* Flags to prevent the "Dream" process from drifting skills or introducing noise into working files.
*   **Agent Checkpointing** ([Issue #3027](https://github.com/HKUDS/nanobot/issues/3027)):
    *   *Request:* Ability to pause and resume long-running loops without losing progress.

## 7. User Feedback Summary
*   **Positive:** Users praise the codebase for being "clean, lightweight, and easy to explore" (Issue #3227).
*   **Configuration Pain Points:** There is frustration regarding the lack of documentation for uninstalling (Issue #3267) and inconsistent support for environment variables in configuration files (Issue #3251).
*   **Provider Confusion:** Users are asking why NanoBot manually integrates models instead of relying entirely on libraries like `litellm` (Issue #237), suggesting a desire for easier provider swapping.

## 8. Backlog Watch
*Older issues still seeing activity or needing resolution.*

*   **DuckDuckGo Instability** ([Issue #2071](https://github.com/HKUDS/nanobot/issues/2071)):
    *   Open since March, users reporting default search features not working.
*   **Long-Running Task Timeout** ([Issue #2709](https://github.com/HKUDS/nanobot/issues/2709)):
    *   Open since April 1st, specific to Anthropic API requirements for streaming >10 mins.
*   **Voice Interaction** ([Issue #1106](https://github.com/HKUDS/nanobot/issues/1106)):
    *   A stale but persistent request for native voice input/output capabilities.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# **ZeroClaw Project Digest**
**Date:** 2026-04-19 | **Status:** High Activity (Post-Refactor Stabilization)

---

### 1. **Today's Overview**
ZeroClaw is experiencing a surge in maintenance activity following the massive v0.7.0 structural overhaul. The project shows robust community engagement with **49 issues and 46 PRs** updated in just 24 hours. Development efforts are currently split between stabilizing the new "microkernel" architecture (manifested in CI/Docker fixes) and advancing high-value features like local speech-to-text and enhanced channel interactivity (Signal, WhatsApp, Telegram). While the new Cargo workspace architecture is successfully rolling out, users are reporting significant "Day 2" friction points regarding Docker builds, runtime configuration errors, and security policy enforcement.

### 2. **Releases**
The project has released two beta versions, focusing on stabilization following the major v0.7.0 refactor.

*   **v0.7.1-beta.1049** (Latest)
*   **v0.7.0-beta.1047**
    *   **Significance:** This release marks the completion of the "largest structural overhaul in ZeroClaw's history."
    *   **Key Changes:** The codebase has been split into a proper Cargo workspace of focused crates (microkernel architecture).
    *   **Migration:** A new config schema has shipped with a live migration system.

### 3. **Project Progress**
Recent pull requests indicate a focus on hardening infrastructure and expanding channel capabilities.

*   **Infrastructure Automation (CI/Release):**
    *   Merged workflows are replacing Personal Access Tokens (PATs) with GitHub App tokens ([PR #5881](https://github.com/zeroclaw-labs/zeroclaw/pull/5881)).
    *   A new manual release script (`scripts/release/release.sh`) has been added to simplify releases for contributors ([PR #5887](https://github.com/zeroclaw-labs/zeroclaw/pull/5887)).
*   **Feature Advancements:**
    *   **Local STT:** Support for native local speech-to-text via `whisper.cpp` has been added behind the `local-stt` feature flag ([PR #5868](https://github.com/zeroclaw-labs/zeroclaw/pull/5868)).
    *   **Signal Media:** Closes gaps in the Signal channel by handling media attachments and rendering markdown as native text styles ([PR #5832](https://github.com/zeroclaw-labs/zeroclaw/pull/5832), [PR #5826](https://github.com/zeroclaw-labs/zeroclaw/pull/5826)).
*   **Docker Fixes:**
    *   A critical fix for the Dockerfile was merged to ensure all 14 new workspace crate manifests are copied, resolving build failures introduced in v0.7.0 ([PR #5879](https://github.com/zeroclaw-labs/zeroclaw/pull/5879)).

### 4. **Community Hot Topics**
The community is actively debating the balance between developer convenience (Docker defaults) and runtime security/sandbox flexibility.

*   **The "Full" Docker Image Debate ([Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642))**
    *   *Summary:* Users are requesting a Docker image compiled with all feature flags (e.g., WhatsApp) enabled.
    *   *Underlying Need:* Lowering the barrier to entry for non-technical users who struggle with memory optimization defaults or compiling from source.
*   **Security & Sandboxing Gaps ([Issue #5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809))**
    *   *Summary:* The shell policy incorrectly blocks `git -C <path>` because it lowercases arguments, confusing `-C` with `-c`.
    *   *Underlying Need:* A need for more sophisticated, context-aware argument parsing in security policies to allow legitimate DevOps workflows without compromising safety.
*   **Documentation Overhaul RFC ([Issue #5576](https://github.com/zeroclaw-labs/zeroclaw/issues/5576))**
    *   *Summary:* A proposal to move documentation from a "code-afterthought" to a "product surface," including standardizing structure and i18n strategy.
    *   *Underlying Need:* The rapid growth of the project has made documentation scattershot; users and contributors are struggling to find accurate information.

### 5. **Bugs & Stability**
Multiple high-severity (S1) bugs have been reported, largely clustering around the new v0.6.9/v0.7.0 release line and runtime execution environments.

*   **Workflow Blockers (S1):**
    *   **Web Dashboard Unavailable:** Several users ([#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866), [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348)) report the dashboard fails to load, instructing them to build manually. This appears to be a packaging issue where pre-built binaries are not including the web assets.
    *   **Voice Wake Compilation:** The `voice-wake` feature fails to compile on Linux (Arch) due to dependency issues ([Issue #5861](https://github.com/zeroclaw-labs/zeroclaw/issues/5861)).
    *   **Provider Configuration:** The provider component ignores `llamacpp` configuration objects, rendering custom model settings ineffective ([Issue #5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815)).
*   **Runtime & Security Risks (High Risk):**
    *   **Native Runtime Shell:** `runtime.kind = "native"` fails to bypass Docker for shell tools ([Issue #5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719)).
    *   **Sandbox Breaking:** The default shell sandbox blocks realistic Python skill patterns ([Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)).
    *   **Session Orphaning:** Abandoned sessions leave `cancel_tokens` in memory, preventing proper cleanup ([Issue #5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835)).

### 6. **Feature Requests & Roadmap Signals**
The community is pushing for better agentic capabilities and ease of use.

*   **"Dream Mode" ([Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)):** A request for periodic background memory consolidation and reflective learning during idle periods.
*   **Interactive Approvals ([Issue #5741](https://github.com/zeroclaw-labs/zeroclaw/issues/5741)):** Users want the ability to interactively approve medium/high-risk operations via channels, rather than the current auto-deny behavior.
*   **Hermes-Style Skill Generation ([PR #5874](https://github.com/zeroclaw-labs/zeroclaw/pull/5874)):** An active PR adding LLM reflection to generate `SKILL.md` files from task traces, signaling a move towards self-improving agents.

### 7. **User Feedback Summary**
*   **Pain Points:** The transition to v0.7.0 has been rocky for power users. Reports indicate that the "microkernel" refactor, while architecturally sound, introduced regressions in how the agent handles environment variables (`PYTHONPATH`), shell tools, and session management. The `InvestorClaw` developer (Jason Perlow) has provided detailed feedback indicating that the current sandbox configuration is too restrictive for real-world Python skills.
*   **Positive Signals:** The addition of native Whisper STT and improved Signal markdown support shows the team is responding to requests for local-first functionality and richer channel interactions.

### 8. **Backlog Watch**
These items have lingered or require immediate architectural attention:

*   **Web Dashboard Asset Management:** The persistence of "Web dashboard not available" errors across multiple versions suggests a systemic issue in the build/packaging pipeline that needs a dedicated fix, not just documentation updates.
*   **RFCs on Hold:** The "Documentation Standards" RFC ([#5576](https://github.com/zeroclaw-labs/zeroclaw/issues/5576)) and the i18n replacement proposal ([#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787)) are critical for long-term maintainability but are currently in "Draft" or discussion phases.
*   **Channel Inconsistencies:** The issue where Canvas tools work on Web UI but fail on Telegram/Discord/Slack ([#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356)) remains a significant fragmentation issue between the web and channel experiences.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-04-19

## 1. Today's Overview
PicoClaw is experiencing a **high-velocity development phase** with significant daily activity (11 issues, 8 PRs updated). The project is actively expanding its agent capabilities, specifically focusing on **browser automation** and **multi-channel support**, while simultaneously facing stability challenges in the latest release (v0.2.6). A critical regression regarding API authentication has emerged as a primary concern for users, contrasting with the enthusiasm for new features like OpenTelemetry integration and Android support.

## 2. Releases
*   **Version:** `v0.2.6-nightly.20260418` (Released: 2026-04-18)
*   **Status:** Automated nightly build (Unstable/Caution advised).
*   **Details:** This nightly build follows the stable `v0.2.6` release. It likely includes hotfixes for recent bugs (such as the OpenAI header issue) and new features currently in development (like the CDP browser tool).
*   **Link:** [v0.2.6-nightly.20260418.6126ede9](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

## 3. Project Progress
*   **Browser Automation (Open):** A major PR #2410 introduces the **`BrowserTool`**, leveraging the Chrome DevTools Protocol (CDP) to allow agents to control browsers directly. This addresses roadmap item #293.
    *   *Link:* [PR #2410](https://github.com/sipeed/picoclaw/pull/2410)
*   **Refactoring (Open):** PR #2551 standardizes channel identification, decoupling channel names from provider types. This enhances architectural flexibility for multiple provider instances.
    *   *Link:* [PR #2551](https://github.com/sipeed/picoclaw/pull/2551)
*   **MCP Integration (Open):** PR #2535 adds slash commands (`/list mcp`, `/show mcp`) to manage Model Context Protocol (MCP) servers directly from chat.
    *   *Link:* [PR #2535](https://github.com/sipeed/picoclaw/pull/2535)
*   **Internal Tools (Closed):** Several commits (#2575, #2576, #2577) were merged/closed, focusing on adding file difference comparison tools and logging improvements.
    *   *Link:* [PR #2577](https://github.com/sipeed/picoclaw/pull/2577)
*   **Codex Streaming Fix (Open):** PR #2581 attempts to fix output recovery for ChatGPT Codex streaming responses.
    *   *Link:* [PR #2581](https://github.com/sipeed/picoclaw/pull/2581)

## 4. Community Hot Topics
*   **Critical Authentication Regression ([#2578](https://github.com/sipeed/picoclaw/issues/2578)):** Users reported that the `openai_compat` provider in v0.2.6 drops the API key, sending requests without an `Authorization` header. This is a breaking change for custom providers.
*   **Security & Authentication ([#1067](https://github.com/sipeed/picoclaw/issues/1067)):** High interest in integrating "Authula" to add a layer of authentication/authorization to the agent, preventing arbitrary command execution on exposed instances.
*   **Android & Termux Support ([#292](https://github.com/sipeed/picoclaw/issues/292), [#286](https://github.com/sipeed/picoclaw/issues/286)):** Strong community demand to run PicoClaw on Android devices via Termux and automate Android OS interactions (similar to "Botdrop").
*   **Observability Standards ([#1731](https://github.com/sipeed/picoclaw/issues/1731)):** Proposal to add OpenTelemetry (OTel) GenAI support for enterprise-level monitoring.

## 5. Bugs & Stability
*   **[CRITICAL] API Key Leakage (v0.2.6):**
    *   **Issue #2578:** `openai_compat` provider fails to send `Authorization` header.
    *   **Issue #2584:** DeepSeek provider returns 401 errors despite valid keys.
    *   *Severity:* High. These issues break core functionality for multiple providers in the latest stable release.
*   **[MEDIUM] Provider Compatibility:**
    *   **Issue #2583:** Ollama integration fails with `qwen3.5` and `gemma4` models (returns empty responses).
    *   **Issue #2046:** LongCat API tool calls fail.
    *   *Fix Status:* No fix PRs explicitly linked yet for Ollama/LongCat.
*   **[LOW] Streaming Parsing:**
    *   Issue addressed in PR #2581 regarding Codex output parsing.

## 6. Feature Requests & Roadmap Signals
*   **API Fallback Mechanism ([#2582](https://github.com/sipeed/picoclaw/issues/2582)):** Users want the `web_search` tool to automatically switch providers (e.g., Brave -> Tavily -> DuckDuckGo) upon rate limiting (429 errors), rather than failing hard.
*   **Self-Upgrade Support ([#618](https://github.com/sipeed/picoclaw/issues/618)):** A request for built-in self-update mechanisms (deb, winget, opkg) to streamline security patches and feature delivery.
*   **Feishu (Lark) Plugin Optimization ([#2580](https://github.com/sipeed/picoclaw/issues/2580)):** Chinese users request an enhanced Feishu integration with streaming output, token usage stats, and provider display, inspired by official plugins.
*   **Security Shielding ([#2313](https://github.com/sipeed/picoclaw/pull/2313)):** A large PR is open introducing "Agent Shield," aiming to add multi-user support, security hardening, and skill whitelisting.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Reliability:** The v0.2.6 release introduced significant regressions regarding API headers, causing frustration among users relying on custom or specific providers (DeepSeek, OpenAI-compatible).
    *   **Manual Intervention:** Users currently have to manually switch search APIs when quotas are hit; they desire autonomous resilience.
*   **Satisfaction:**
    *   High demand for the project's direction (Browser automation, Android support) indicates strong approval of the feature set.
    *   Users are actively contributing complex PRs (like Agent Shield), showing a healthy, engaged developer community.

## 8. Backlog Watch
*   **Security Audit Needed ([#1067](https://github.com/sipeed/picoclaw/issues/1067)):** The lack of default authentication is a long-standing concern for production deployments. Needs maintainer decision on integration strategy.
*   **Roadmap Item #292 (Android Automation):** While discussion is active, implementation seems stalled; this is a high-value feature for mobile-first workflows.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-19

## 1. Today's Overview
NanoClaw is undergoing a significant architectural transformation today, characterized by high-volume development activity. With **21 Pull Requests** updated—14 of which were merged or closed—the project is aggressively executing a "Phase 3" module refactoring plan aimed at decoupling the core application from functional extensions like permissions, scheduling, and agent-to-agent communication. While this heavy churn improves long-term maintainability, it has introduced some immediate stability regressions, particularly regarding scheduled tasks and OAuth handling on Linux. The project is currently in a "heavy refactoring" state, prioritizing internal restructuring over new feature releases.

## 2. Releases
No new releases were published today. The project appears to be stabilizing the `main` branch following the extensive refactoring efforts (PRs #1838–#1849).

## 3. Project Progress
The development team successfully merged a massive series of refactoring Pull Requests, fundamentally changing how NanoClaw handles modules.
*   **Major Refactor (Phase 3):** A series of 8 PRs (#1838, #1839, #1840, #1842, #1847, #1848, #1849, #1851) were merged to extract core functionality into a registry-based module system.
    *   **Permissions & Approvals:** Logic for user identity, roles, and approval workflows has been moved out of the core into `src/modules/permissions/` and `src/modules/approvals/`.
    *   **Scheduling & Agent-to-Agent:** Task scheduling and inter-agent communication are now optional, plug-and-play modules rather than hardcoded core features.
    *   **Self-Modification:** The ability for the agent to modify itself (install packages, rebuild) is now an isolated optional module.
*   **New Integration - CLI Channel:** PR #1853 added a native CLI channel, allowing users to interact with the agent directly from the terminal via a Unix socket adapter.
*   **Codex Fallback:** PR #1852 added OpenAI Codex SDK as a fallback provider when Claude hits rate limits.

## 4. Community Hot Topics
*   **Feature Request: Matrix Protocol Support** [Issue #1413](https://github.com/qwibitai/nanoclaw/issues/1413)
    *   **Status:** Open
    *   **Activity:** 👍 4 reactions
    *   **Analysis:** There is strong community demand for integrating Matrix, a decentralized and privacy-focused protocol. Users want NanoClaw to support self-hosted communities using clients like Element, signaling a desire to move away from mainstream, centralized platforms.

## 5. Bugs & Stability
*   **Critical: Scheduled Tasks Leaking "Thinking"** [Issue #1854](https://github.com/qwibitai/nanoclaw/issues/1854)
    *   **Severity:** High
    *   **Description:** Scheduled tasks are leaking internal "thinking" processes to users despite "exit silently" instructions.
    *   **Impact:** Breaks user experience and reveals internal prompts.
*   **High: Scheduled Tasks Duplicating Actions** [Issue #1855](https://github.com/qwibitai/nanoclaw/issues/1855)
    *   **Severity:** High
    *   **Description:** In `context_mode='group'`, scheduled tasks are causing the main chat agent to duplicate tool actions.
    *   **Context:** This is likely a side effect of the `scheduling` module extraction in PR #1842.
*   **Medium: Linux OAuth Proxy Failure** [Issue #1850](https://github.com/qwibitai/nanoclaw/issues/1850)
    *   **Severity:** Medium
    *   **Description:** The OneCLI MITM proxy fails on Linux (Debian/Proxmox) with `ECONNRESET` errors. Token auto-refresh is also failing.
    *   **Impact:** Breaks credential injection for users running on Linux servers.

## 6. Feature Requests & Roadmap Signals
Based on the activity in open PRs, the following features are likely under development for the next version:
*   **Advanced Provider Support:** PR #1843 aims to fully integrate OpenAI Codex via app-server JSON-RPC, matching the feature set of the Claude SDK (streaming, MCP tools).
*   **Evolutive Memory:** PR #1841 introduces "auto-evo," a system that injects per-group strategy memory (`AUTO_EVO.md`) into sessions to improve long-term group context.
*   **Decentralized Social & Media:** Three separate PRs (#1833, #1834, #1835) indicate a push toward the "Nostr" ecosystem:
    *   Nostr posting (clawstr-post).
    *   Blossom media hosting.
    *   CalDAV calendar integration (supporting Nextcloud, Google).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Platform Fragility:** The report of OneCLI proxy failures on Linux [Issue #1850](https://github.com/qwibitai/nanoclaw/issues/1850) indicates frustration with deployment stability on non-standard containers.
    *   **Noise Pollution:** Users are annoyed by internal AI "thinking" leaking into scheduled tasks [Issue #1854](https://github.com/qwibitai/nanoclaw/issues/1854), suggesting a need for tighter control over output verbosity.
*   **Desires:** Users are actively seeking integration with privacy-respecting, open-source protocols (Matrix, Nostr, CalDAV), reflecting a user base that values data sovereignty.

## 8. Backlog Watch
*   **Linux OAuth Support** [Issue #1850](https://github.com/qwibitai/nanoclaw/issues/1850): This regression affects a core deployment target (servers/VMs). While it is a fresh issue, the complexity of MITM proxies suggests it may linger without immediate attention.
*   **Matrix Support** [Issue #1413](https://github.com/qwibitai/nanoclaw/issues/1413): Despite 4 upvotes, this request from March 25 remains open. With the current focus on refactoring and Nostr/CalDAV integrations, Matrix support may be deprioritized.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-19

## 1. Today's Overview
NullClaw is experiencing a high-velocity development cycle with **11 active Pull Requests** and **7 open issues** updated in the last 24 hours. The project is currently undergoing a significant expansion of its agent capabilities, specifically focusing on advanced tool customization, workspace management, and Matrix E2EE support. Despite the flurry of new feature PRs, the codebase remains stable with no new releases, though users are reporting specific regressions related to Homebrew upgrades and JSON parsing that require attention.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
*The following features are currently under active review and development:*

*   **Multi-Workspace Support:** PR #842 adds a `--workspace` flag to both `gateway` and `agent` commands, allowing users to override workspace directories via CLI or environment variables ([#842](https://github.com/nullclaw/nullclaw/pull/842)).
*   **Agent Skills RFC 0.2.0:** PR #831 updates the skills ecosystem to support the latest RFC, adding support for `skill-md`, `.tar.gz`, and hardened SHA256 verification for web-fetched skills ([#831](https://github.com/nullclaw/nullclaw/pull/831)).
*   **Advanced Tool Customization:** A series of PRs (#836, #835, #834) introduces a system for trigger-based tool prioritization, custom descriptions, and enabling/disabling tools via config, significantly enhancing agent control ([#836](https://github.com/nullclaw/nullclaw/pull/836), [#834](https://github.com/nullclaw/nullclaw/pull/834)).
*   **Nested Skill Discovery:** PR #840 enables organizing skills into category subdirectories, improving project structure management ([#840](https://github.com/nullclaw/nullclaw/pull/840)).
*   **REST Admin API:** PR #770 proposes a dependency-free API for runtime status and model management, expanding integration possibilities for external clients ([#770](https://github.com/nullclaw/nullclaw/pull/770)).

## 4. Community Hot Topics
*   **Multi-Workspace Management:**
    *   **Issue:** [#833](https://github.com/nullclaw/nullclaw/issues/833) (Opened: 2026-04-18)
    *   **Discussion:** Users are requesting the ability to run multiple gateway instances pointing to different workspaces simultaneously. This issue has already been addressed with a proposed solution in PR #842, indicating high responsiveness to user needs.

*   **Agent Interactivity & Concurrency:**
    *   **Issue:** [#832](https://github.com/nullclaw/nullclaw/issues/832) (Opened: 2026-04-18)
    *   **Discussion:** A critical architectural discussion about moving away from single-threaded execution loops. Users highlight that long-running jobs block conversation and thinking loops, suggesting a need for concurrent/non-blocking interactivity in future updates.

## 5. Bugs & Stability
*   **Critical:** **Service Breakage on Homebrew Upgrade** ([#354](https://github.com/nullclaw/nullclaw/issues/354))
    *   *Severity:* High
    *   *Issue:* The `nullclaw service install` command hardcodes versioned binary paths (e.g., `/opt/homebrew/Cellar/nullclaw/2026.3.5/`). Upgrading via Homebrew renders the installed LaunchAgent invalid as the old binary path is deleted.
    *   *Status:* Open (Updated 2026-04-18).

*   **High:** **Tool Call Parsing Error** ([#408](https://github.com/nullclaw/nullclaw/issues/408))
    *   *Severity:* High
    *   *Issue:* The JSON parser incorrectly extracts the tool name as `":"` instead of the actual function name (e.g., `memory_recall`), causing valid tool calls to fail.
    *   *Status:* Open (Updated 2026-04-18).

*   **Medium:** **"NoResponseContent" Error** ([#665](https://github.com/nullclaw/nullclaw/issues/665))
    *   *Severity:* Medium
    *   *Issue:* Users experiencing crashes with `error.NoResponseContent`, potentially related to specific model outputs or backend handling.
    *   *Status:* Open (Updated 2026-04-18).

*   **Low:** **Version String Shows "dev"** ([#821](https://github.com/nullclaw/nullclaw/issues/821))
    *   *Severity:* Low
    *   *Status:* **Closed** (Resolved 2026-04-18). Installing from source previously resulted in a useless version string; this has been addressed.

## 6. Feature Requests & Roadmap Signals
*   **DingTalk Bi-directional Support:** Issue #376 requests receiving messages from DingTalk, which is currently "send only" ([#376](https://github.com/nullclaw/nullclaw/issues/376)).
*   **Metasearch Integration:** Issue #623 proposes adding the `ddgs` library to aggregate search results from diverse services for the `web_search` tool ([#623](https://github.com/nullclaw/nullclaw/issues/623)).
*   **Skill Activation:** PR #841 suggests adding a `--skill` flag to activate specific skills directly at agent startup ([#841](https://github.com/nullclaw/nullclaw/pull/841)).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Integration Management:** The hardcoded paths in the Homebrew service installation are causing significant maintenance friction for macOS users ([#354](https://github.com/nullclaw/nullclaw/issues/354)).
    *   **Parser Reliability:** The tool call JSON parsing bug is breaking core functionality, suggesting the parser may be too fragile for LLM outputs ([#408](https://github.com/nullclaw/nullclaw/issues/408)).
    *   **Platform Limitations:** Users desire deeper integration with platforms like DingTalk (receiving messages) and Matrix (E2EE support via Pantalaimon).

## 8. Backlog Watch
*   **Issue #376 (DingTalk Support):** Opened March 8. While messages can be sent, the inability to receive replies limits the utility of this channel.
*   **Issue #665 (NoResponseContent):** Opened March 21. A recurring error that affects stability; lacks a confirmed fix or workaround.
*   **PR #770 (REST Admin API):** Opened April 5. A substantial feature that would greatly enhance remote management capabilities but is still pending review.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-04-19

## 1. Today's Overview
IronClaw is currently in a high-velocity development cycle focused on **architectural refactoring** and **stability hardening**. The project shows very high activity with **50 updated PRs** (41 open) and **18 issues** in the last 24 hours. The core development team is actively pushing "Stage 5" of a large platform extraction epic (#2599), reorganizing the gateway codebase into bounded features to improve ownership and guardrails. While feature work is intense, there are active stability concerns regarding the secrets management system and routine engine state synchronization that are being addressed in parallel.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
**Merged & Closed Features:**
*   **Gateway Platform Extraction (Stage 1):** PR #2628 was merged, relocating gateway code. While a "move-only" refactor, it successfully surfaced pre-existing correctness and performance issues in the gateway that are now tracked in #2633.
*   **Secrets Management Generation:** The critical "secrets store unavailable" error (#1820) was addressed in PR #2648. The solution implements auto-generation of the master key via `.env` on startup, resolving errors where users couldn't save API keys in headless environments.
*   **Engine v2 Enhancements:**
    *   **FINAL-await support:** PR #2531 closed, adding support for awaiting `FINAL` and `FINAL_VAR` in CodeAct scripts and normalizing punctuation.
    *   **Self-Improvement Missions:** PR #2570 closed, fixing a bug where completed event-driven missions would not re-fire, allowing the "expected behavior" learning mission to function correctly.
*   **Test Suite Hardening:** Several E2E test issues were closed (e.g., #2626, #2625, #2623) as the team continues to stabilize the CI pipeline. PR #2656 fixed stale selectors in the connection tests.

**Active Advancement (Open PRs):**
*   **Gateway Boundaries (Stage 5):** PR #2647 is open and active, enforcing strict import boundaries between the new platform layer and feature slices to prevent architectural drift.
*   **Structured Tool Output:** PR #2571 aims to improve the Web UI by surfacing tool output previews and structured rendering in the gateway.
*   **Secrets Refinement:** PR #2653 (High Risk) proposes changing the secret resolution order to prefer the OS keychain over environment variables.

## 4. Community Hot Topics
*   **[Enhancement] Credential Profiles (#2642)**
    *   **Link:** [nearai/ironclaw#2642](https://github.com/nearai/ironclaw/issues/2642)
    *   **Discussion:** Users are requesting support for multiple accounts per service (e.g., multiple Gmail or Notion accounts). The current "one credential slot" model is limiting for power users managing multiple identities.
*   **[Feature] Meeting Intelligence (#91)**
    *   **Link:** [nearai/ironclaw#91](https://github.com/nearai/ironclaw/issues/91)
    *   **Discussion:** A cross-cutting feature request for recording, transcribing, and extracting action items from meetings. This issue remains open but active, highlighting user demand for agent-driven productivity automation.
*   **[Refactor] Gateway Platform Extraction Epic (#2599)**
    *   **Link:** [nearai/ironclaw#2599](https://github.com/nearai/ironclaw/issues/2599)
    *   **Discussion:** This internal epic is dominating the workflow, restructuring the web gateway into feature slices. It indicates a shift towards better modularity and long-term maintainability.

## 5. Bugs & Stability
*   **[HIGH] Routine Engine State Sync (#2655)**
    *   **Issue:** `sync_dispatched_runs` fails to finalize routine runs if the linked job stays in a "pending" state indefinitely. This creates a zombie state where routines never complete.
    *   **Fix PR:** None explicitly linked yet.
*   **[MEDIUM] Skill Size Limits (#2636)**
    *   **Issue:** Users are hitting errors when trying to install skills larger than 64KB. The user argues this limit is arbitrary and hinders functionality compared to other projects.
    *   **Status:** Open.
*   **[MEDIUM] WASM Channel Auto-Start (#2556)**
    *   **Issue:** Closed today. Fixed an issue where inactive WASM channels would auto-start at boot, behaving identically to active/running channels.
*   **[MEDIUM] E2E Test Failures (#2624)**
    *   **Issue:** Telegram E2E activation is failing with 401 bot token validation errors.
    *   **Fix PR:** #2652 is open to address the unblocking of this flow.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Account Support:** The request for "Credential Profiles" (#2642) suggests a roadmap towards better multi-tenant or multi-account support for tools.
*   **Meeting Intelligence:** Issue #91 indicates a roadmap expansion into audio processing and proactive agent tasks (recording/transcription).
*   **Gateway UI Improvements:** PR #2571 (Tool Output Previews) and #2270 (Approval Queue Tray) signal a push for a more transparent and controllable web UI, giving users better insight into background agent operations.

## 7. User Feedback Summary
*   **Frustration with Constraints:** Users are explicitly pushing back on technical constraints like the 64KB skill size limit (#2636), stating "no similar project do this."
*   **Configuration Pain:** Historical issues regarding DNS resolution (`NEARAI_AUTH_URL` errors) and the "Secrets store is not available" error (#1820, now fixed) indicate friction in headless or containerized environments. The aggressive fixes in #2648 suggest the team recognizes this as a major blocker.
*   **Auth Complexity:** The sheer volume of fixes related to MCP auth, OAuth flows, and secrets (#2367, #2616, #2653) implies the authentication system is complex and prone to edge cases.

## 8. Backlog Watch
*   **Gateway Performance:** Issue #2633 highlights "pre-existing correctness/perf issues" found during the recent refactor. These are technical debt items surfaced by code movement that now require explicit fixing.
*   **Event Coverage Gaps:** Issue #2654 tracks gaps in `AppEvent` coverage after recent engine refactors, ensuring the real-time UI receives all necessary updates from the backend engine.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest - 2026-04-19

**Project:** [LobsterAI](https://github.com/netease-youdao/LobsterAI) | **Date:** 2026-04-19

### 1. Today's Overview
The LobsterAI project currently shows moderate development activity but low immediate engagement. While there are **no new issues** filed and **no recent releases** in the last 24 hours, the codebase received updates via two open Pull Requests. The lack of merged or closed PRs suggests the maintainers are in a code review or accumulation phase rather than a release phase. Notably, both active PRs carry the `stale` label, implying these features have been in the pipeline for over a month without finalization, which may indicate a need for intervention to prevent contribution stagnation.

### 2. Releases
**Status:** No new releases detected in the provided data snapshot.

### 3. Project Progress
No Pull Requests were merged or closed in the last 24 hours. The project's visible progress consists of updates to ongoing discussions regarding integration capabilities rather than completed feature deployment.

### 4. Community Hot Topics
Since there are no new issues or comment activity available in the data, "hot topics" are defined by the recently updated open Pull Requests focusing on expanding the ecosystem of supported AI models.

*   **[FEAT] Add LM Studio as a model provider** ([#428](https://github.com/netease-youdao/LobsterAI/pull/428))
    *   **Status:** Open (Updated 2026-04-18)
    *   **Analysis:** This PR reflects a strong underlying user demand for **local, privacy-preserving inference**. By adding LM Studio (which uses an OpenAI-compatible API on localhost), the project lowers the barrier for users who want to run LobsterAI without depending on remote cloud APIs or paying for tokens. The implementation includes UI polish (icons, i18n), suggesting a focus on user experience (UX).

*   **[FEAT] Upgrade MiniMax default model to M2.7** ([#388](https://github.com/netease-youdao/LobsterAI/pull/388))
    *   **Status:** Open (Updated 2026-04-18)
    *   **Analysis:** This update highlights the need for the project to keep pace with the rapid release cycles of third-party model providers. Upgrading the default to M2.7 ensures users benefit from the latest performance improvements (inferred "latest" from version bump) and prevents the use of deprecated API endpoints (switching from `.com` to `.io`).

### 5. Bugs & Stability
**No bugs were reported in the last 24 hours.**
*   The lack of new issues suggests current stability is acceptable, or users are not facing critical blocking errors with the existing release.

### 6. Feature Requests & Roadmap Signals
Based on the open Pull Requests, the roadmap appears focused on **Flexibility and Provider Support**:
*   **Local Model Support:** The addition of LM Studio (#428) signals a strategic shift towards supporting hybrid workflows (local + cloud).
*   **Model Currency:** The MiniMax PR (#388) indicates a policy of promptly adopting new model versions (M2.7) as they become available.
*   **Prediction:** The next version will likely focus heavily on the **Renderer** and **OpenClaw** components, as evidenced by the labels on PR #428 (`area: renderer`, `area: openclaw`).

### 7. User Feedback Summary
No explicit user feedback (comments or reviews) was recorded in the last 24 hours. However, the existence of the PRs implies users are asking for:
*   **Cost Efficiency:** Support for local models (LM Studio).
*   **Performance:** Upgrades to faster/smarter model defaults (MiniMax M2.7).

### 8. Backlog Watch
Two items require immediate maintainer attention to prevent "code rot":

1.  **PR #428 (LM Studio):** Labeled `stale` and created on 2026-03-15.
    *   **Risk:** High. This feature adds significant value (local models). Prolonged openness may lead to merge conflicts.
2.  **PR #388 (MiniMax M2.7):** Labeled `stale` and created on 2026-03-12.
    *   **Risk:** Medium. API URL changes (`api.minimax.com` -> `api.minimax.io`) might be time-sensitive if the old URL is deprecated.

**Recommendation:** Maintainers should review and merge/close these stale PRs to clear the backlog for the next release cycle.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the **Moltis Project Digest** for **2026-04-19**.

### 1. Today's Overview
Moltis shows high development velocity with **11 Pull Requests** updated in the last 24 hours, balancing new feature integration with significant documentation maintenance. While no new releases were published today, the project successfully merged 6 PRs, adding critical infrastructure for code indexing, improving observability in the sandbox environment, and fixing task list logic. The open-source activity indicates a healthy focus on "developer experience" (DX), evidenced by a major initiative to migrate the Web UI to TypeScript and an automated "Doc Rotisserie" to correct stale documentation. However, the backlog remains active, with 4 new or updated bugs requiring attention, specifically regarding container stability and backend compatibility.

### 2. Releases
**No new releases** published in the last 24 hours.

### 3. Project Progress
The following features and fixes were successfully merged or closed today:

*   **New Code Indexing Engine (PR #771):** A significant addition of the `moltis-code-index` crate. It introduces a project source code indexer with file discovery, filtering, and a built-in SQLite+FTS5 search backend. This enhances the agent's ability to search and understand large codebases.
    *   *Link:* [moltis-org/moltis#771](https://github.com/moltis-org/moltis/pull/771)
*   **Sandbox Observability Improvements (PR #784):** Addresses user confusion regarding background `dpkg` processes. This PR adds granular logging (`debug`/`info`/`warn`) to the sandbox lifecycle and prevents repeated package provisioning, improving debugging for containerized tool execution.
    *   *Link:* [moltis-org/moltis#784](https://github.com/moltis-org/moltis/pull/784)
*   **Task List Logic Fix (PR #779):** Resolved a bug where `task_list.list` failed to show tasks created under custom list IDs. The default behavior now lists all tasks, and a new `list_lists` action was added to discover available lists.
    *   *Link:* [moltis-org/moltis#779](https://github.com/moltis-org/moltis/pull/779)
*   **Reverse Proxy & WebAuthn Support (PR #785):** Added `server.external_url` configuration, allowing users behind reverse proxies to use WebAuthn passkey authentication correctly.
    *   *Link:* [moltis-org/moltis#785](https://github.com/moltis-org/moltis/pull/785)

### 4. Community Hot Topics
*   **Major Frontend Refactor (PR #775):** The community is watching the beginnings of a significant migration of the Web UI from JavaScript to a **TypeScript + Preact** workspace using Vite. This promises better type safety and modern build tooling for the project's frontend.
    *   *Link:* [moltis-org/moltis#775](https://github.com/moltis-org/moltis/pull/775)
*   **Doc Rotisserie Initiative (PRs #783, #789, #787):** There is a focused effort to audit and fix stale documentation. Several PRs are currently open updating docs to match the current source code, indicating a drive to improve user onboarding and API accuracy.
    *   *Link:* [moltis-org/moltis#783](https://github.com/moltis-org/moltis/pull/783)

### 5. Bugs & Stability
*   **[High Severity] Browser Container Readiness (Issue #786):** Users are reporting that the browser container fails to become ready within the default 60-second timeout, causing agent tasks to fail. This suggests a regression or environment-specific performance issue in the sandbox startup sequence.
    *   *Link:* [moltis-org/moltis#786](https://github.com/moltis-org/moltis/issues/786)
*   **[Medium Severity] Podman Backend Ignored (Issue #588):** A report indicates that the `is_container_available()` function fails to detect Podman backends correctly, likely due to hardcoded checks or missing logic for non-Docker container engines.
    *   *Link:* [moltis-org/moltis#588](https://github.com/moltis-org/moltis/issues/588)

### 6. Feature Requests & Roadmap Signals
*   **AST-Aware Chunking (PR #791):** A new PR proposes extracting a `moltis-splitter` crate. This signal suggests the roadmap is moving toward better code parsing, enabling the agent to understand code structure (AST) rather than just raw text, which is crucial for complex coding tasks.
    *   *Link:* [moltis-org/moltis#791](https://github.com/moltis-org/moltis/pull/791)
*   **Operation Abort Capability (Issue #788):** A user has requested the ability to "Abort" the current operation from Telegram and fallback models. This feature is likely to be prioritized as it addresses user control over long-running or expensive agent tasks.
    *   *Link:* [moltis-org/moltis#788](https://github.com/moltis-org/moltis/issues/788)

### 7. User Feedback Summary
*   **Pain Point:** Users are experiencing "silent failures" in the sandbox, specifically with `dpkg` processes running without explanation (addressed in PR #784) and tasks not appearing in lists (addressed in PR #779).
*   **Platform Support:** There is a clear need for better support for non-Docker environments (Podman) and complex network setups (Reverse Proxies/WebAuthn), indicating the user base is deploying Moltis in diverse, enterprise-like environments.

### 8. Backlog Watch
*   **Podman Support (Issue #588):** Although updated recently, this issue was created on April 8 and remains open. It requires core logic changes to ensure compatibility with container runtimes other than Docker.
    *   *Link:* [moltis-org/moltis#588](https://github.com/moltis-org/moltis/issues/588)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Project CoPaw Daily Digest
**Date:** 2026-04-19
**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

### 1. Today's Overview
The CoPaw project is experiencing a period of **high development activity** and **moderate community turbulence**. In the last 24 hours, the project tracked 26 unique events (15 issues, 11 PRs), with the codebase undergoing significant architectural refactoring specifically in memory management and frontend testing infrastructure. While feature velocity is high, user-facing stability appears to be a concern, as the backlog of active issues (12 open vs 3 closed) indicates a growing maintenance gap. Critical discussions are centered around data migration from legacy "CoPaw" instances to the new "QwenPaw" directory structure and local model execution stability.

### 2. Releases
*No new releases published in the last 24 hours.*

### 3. Project Progress
While no PRs were fully merged today, several significant features moved forward in review:
*   **Frontend Testing Infrastructure ([PR #3559](https://github.com/agentscope-ai/CoPaw/pull/3559)):** A major step toward long-term stability, this PR introduces Vitest and unit testing for the Console, starting with the Chat page.
*   **Bilingual Skill System ([PR #3558](https://github.com/agentscope-ai/CoPaw/pull/3558)):** Development continues on restructuring built-in skills to support distinct English (`-en`) and Chinese (`-zh`) directories, improving localization.
*   **Memory Architecture Overhaul ([PR #3548](https://github.com/agentscope-ai/CoPaw/pull/3548)):** A massive refactoring of the memory module to align with "As2.0" interfaces, decoupling memory instructions from agent configurations and adding auto-memory summarization.
*   **LLM Routing Logic ([PR #3550](https://github.com/agentscope-ai/CoPaw/pull/3550)):** Advancements in model routing logic that allow scope-aware model selection (Agent vs. Global).

### 4. Community Hot Topics
*   **The "Great Directory Migration" Pain**
    *   **[Issue #3356](https://github.com/agentscope-ai/CoPaw/issues/3356)** (19 comments): Users are confused and frustrated regarding the transition from `.copaw` to `.qwenpaw`. The core issue is that after upgrading, the working directory (`WORKING_DIR`) incorrectly points to the old path while data writes to the new one, or vice versa, leading to lost workspaces and configuration drift.
    *   **Analysis:** This indicates a need for a robust, automated migration script in the installer to handle path updates and data porting seamlessly.

*   **Feature Requests for Advanced Agents**
    *   **[Issue #3470](https://github.com/agentscope-ai/CoPaw/issues/3470)** (5 comments): Users are asking if CoPaw plans to implement "Self-Evolving" capabilities similar to the Hermes Agent.
    *   **[Issue #3563](https://github.com/agentscope-ai/CoPaw/issues/3563)** (1 comment): Request for context/token usage visibility to help users decide when to run the `compact` command.
    *   **Analysis:** The user base is moving toward advanced use cases (agentic workflows, long-context management) and requires better visibility and autonomy from the system.

### 5. Bugs & Stability
**High Severity:**
*   **Serialization Crash ([Issue #3552](https://github.com/agentscope-ai/CoPaw/issues/3552)):** The Console channel crashes completely when streaming malformed Unicode surrogates (e.g., specific emojis).
    *   *Fix Status:* A fix is proposed in **[PR #3553](https://github.com/agentscope-ai/CoPaw/pull/3553)** (Open).
*   **Local LLM Connectivity:**
    *   **[Issue #3542](https://github.com/agentscope-ai/CoPaw/issues/3542):** Local Ollama calls fail when a VPN is active (Closed).
    *   **[Issue #3560](https://github.com/agentscope-ai/CoPaw/issues/3560):** Tool call stream parsing errors when using llama.cpp backends (Open).
*   **Windows Installation Hangs:**
    *   **[Issue #2943](https://github.com/agentscope-ai/CoPaw/issues/2943):** `copaw init` hangs indefinitely on Python 3.13 due to a security prompt (Closed, but recent).
    *   **[Issue #3555](https://github.com/agentscope-ai/CoPaw/issues/3555):** "QwenPaw Desktop" hangs at "Waiting for HTTP ready..." on Windows (Open).

### 6. Feature Requests & Roadmap Signals
Based on today's activity:
*   **Model Management Hygiene:** **[Issue #3551](https://github.com/agentscope-ai/CoPaw/issues/3551)** strongly requests the ability to remove "built-in" free models from the UI list without hacking the source code (`provider_manager.py`).
*   **Voice Interactions:** **[Issue #3293](https://github.com/agentscope-ai/CoPaw/issues/3293)** requests voice reply capabilities for channels, not just text generation.
*   **Routing UI:** **[PR #3452](https://github.com/agentscope-ai/CoPaw/pull/3452)** suggests that a UI for switching between Local and Cloud models mid-chat is under active development.

### 7. User Feedback Summary
*   **Positive:** Users appreciate the flexibility of local models (Ollama, llama.cpp) and the multi-channel support.
*   **Negative:** The migration from `.copaw` to `.qwenpaw` has been jarring, with users reporting data split across directories. Windows users are experiencing significant friction with initialization hangs.
*   **UX Pain Point:** The inability to hide unused built-in models creates clutter in the UI, frustrating users who have curated their own model lists.

### 8. Backlog Watch
*   **[Issue #3117](https://github.com/agentscope-ai/CoPaw/pull/3117) (Semantic Skill Routing):** This PR has been open since April 8 (updated today) and introduces a critical optimization (filtering skills by embedding relevance) to save tokens. It is marked "Under Review/need discussions" and represents a high-value feature for users with many skills.
*   **[Issue #3268](https://github.com/agentscope-ai/CoPaw/pull/3268) (Time Injection):** A simple but useful PR to make agents time-aware without tools is currently "Under Review" after opening on April 11.

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