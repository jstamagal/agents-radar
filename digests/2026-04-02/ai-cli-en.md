# AI CLI Tools Community Digest 2026-04-02

> Generated: 2026-04-02 00:11 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Charm Crush](https://github.com/charmbracelet/crush)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

## AI CLI Tools Ecosystem Report: 2026-04-02

### 1. Ecosystem Overview
The AI CLI landscape is undergoing a critical maturation phase, shifting from rapid feature addition to architectural stability and platform hardening. While **Claude Code** and **OpenAI Codex** dominate mindshare, they are currently facing significant trust crises regarding billing infrastructure and resource consumption. Meanwhile, ecosystem contenders like **Charm Crush** and **OpenCode** are leveraging this instability to push for open-source architectural shifts (Rust/Effect patterns) and local-first workflows, signaling a market pivot toward transparency, extensibility, and hybrid cloud/local deployment models.

### 2. Activity Comparison

| Tool | Issue Count | PR Count | Release Status | Dominant Theme |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | High (10+) | High (10+) | **v2.1.90** (Active) | **Billing Crisis** & Platform Instability |
| **OpenAI Codex** | Med (10) | Med (10) | **rust-v0.119.0-alpha** (Alpha) | **Rust Refactoring** & Resource Leaks |
| **Charm Crush** | Low (5) | Med (7) | No Release (Active Dev) | **Architectural Shift** & MCP Integration |
| **Gemini CLI** | Med (10) | Med (10) | **v0.36.0** (Preview) | **Context Compression** & Windows Fixes |
| **GitHub Copilot** | Med (10) | None | **v1.0.16-0** (Patch) | **UX Regression** & Model Availability |
| **Kimi Code** | Med (9) | High (10) | **v1.29.0** (Stable) | **Windows Support** & Session Mgmt |
| **OpenCode** | High (10) | High (10) | **v1.3.13** (Stable) | **Memory Leaks** & LSP Stability |
| **Qwen Code** | High (10) | High (10) | **v0.14.0-preview** (Beta) | **Process Leaks** & Model Parity |

### 3. Shared Feature Directions
*   **Agent Communication Protocol (MCP/ACP):** There is a unanimous trend across **Claude Code**, **OpenAI Codex**, **Charm Crush**, and **Qwen Code** to decouple the agent runtime from the UI. Specific initiatives include OpenAI extracting `codex-mcp`, Crush adding ACP server support, and Qwen improving ACP stability.
*   **Local & Hybrid Inference:** **Charm Crush** (Ollama/LM Studio auto-detection), **OpenCode** (Big Pickle/Zen models), and **Kimi Code** (proxy normalization) are all aggressively lowering friction for running local models, reducing reliance on closed-source cloud APIs.
*   **Session & Context Persistence:** **OpenCode** (Sliding Window), **Gemini CLI** (ContextCompressionService), and **Claude Code** (Session Preserver Plugins) are tackling the "context window" limit, moving toward smarter compression and state retention rather than simple truncation.
*   **Windows Hardening:** **Claude Code**, **Kimi Code**, **Gemini CLI**, and **OpenAI Codex** all released patches today specifically for Windows reliability (Sandboxing, CRLF handling, PowerShell path resolution), recognizing it as a critical enterprise battleground.

### 4. Differentiation Analysis

| Tool | Technical Focus | Target User | Differentiation Strategy |
| :--- | :--- | :--- | :--- |
| **Claude Code** | Interactive Agent | Power Users | "Project Co-Pilot" focusing on deep context understanding, despite current billing bugs. |
| **OpenAI Codex** | Ecosystem Integration | Enterprise Orgs | Deep integration with VS Code/O365; focus on "Rustification" for performance. |
| **Charm Crush** | Terminal Workflow | TUI Purists | "Terminal Native" approach; prioritizing local models and structural refactoring. |
| **Gemini CLI** | Memory & Safety | Security-Conscious | Focus on "Confucius" memory extraction and strict permission profiles (Guardian). |
| **GitHub Copilot** | Workflow Parity | GitHub Users | Tight coupling with GitHub infrastructure; reliant on standard models rather than agents. |
| **Kimi Code** | Session Management | Cloud-First Devs | "Living Session" focus (`/title`, `state.json`) and hierarchical agent configs. |
| **OpenCode** | Extensibility | Plugin Developers | "Effect-based" architecture prioritizing stability and type-safe hooks. |
| **Qwen Code** | Multi-Modal/Multi-Platform | Chinese/Global Users | Heavy focus on extensibility (npm registry, WebRTC) and solving scale/process leaks. |

### 5. Community Momentum & Maturity
*   **High Volatility:** **Claude Code** and **OpenAI Codex** have the highest activity but also the highest user churn risk right now due to billing bugs and CPU leaks.
*   **Rapid Iterators:** **Charm Crush** and **Qwen Code** are showing the highest architectural velocity (Server/Client splits, Rust rewrites), suggesting they are "hungrier" and adapting faster to user needs than the incumbents.
*   **Maturing:** **OpenCode** and **Gemini CLI** are moving into "hardening" phases, focusing on memory leaks and Windows sandboxing, indicating a transition from beta to production readiness.

### 6. Trend Signals
*   **The "Alt-Screen" Backlash:** There is a growing resistance to "Magical" UIs that hide standard terminal history. **GitHub Copilot** and **Claude Code** are both receiving heat for `alt-screen` modes, indicating developers want **tools, not replacements**.
*   **BYOK (Bring Your Own Key) Complexity:** As providers deprecate models or change limits (e.g., Copilot removing `gpt-5.1-codex`), users are demanding standardized "Provider Abstraction Layers." Tools like **Charm Crush** and **OpenCode** that simplify switching between OpenAI, Anthropic, and local Ollama are winning favor.
*   **Safety-First Development:** Communities are moving away from "YOLO mode" (auto-approve all). **Gemini CLI's** approval mode enforcement and **OpenCode's** GitLab approval integration signal that enterprises require **audit trails and granular permissions** before raw speed.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Data as of 2026-04-02
**Repository:** anthropics/skills

## 1. Top Skills Ranking
Based on community engagement via Pull Requests and Issues, the following Skills have garnered the most attention:

*   **[`document-typography`](https://github.com/anthropics/skills/pull/514)** (PGTBoos)
    Addresses a universal pain point in AI output: formatting quality. This Skill teaches Claude to prevent typographic errors like orphaned words, widowed section headers, and numbering misalignment. The discussion highlights that this affects "every document Claude generates," making it a high-utility tool for professional document preparation.
    *   **Status:** Open

*   **[`ODT`](https://github.com/anthropics/skills/pull/486)** (GitHubNewbie0)
    A critical interoperability Skill adding support for the OpenDocument Text (.odt) format. It enables Claude to create, fill templates, and parse ODT files (used by LibreOffice, OpenOffice), bridging a gap between Claude Code and open-source office ecosystems.
    *   **Status:** Open

*   **[`skill-quality-analyzer` & `skill-security-analyzer`](https://github.com/anthropics/skills/pull/83)** (eovidiu)
    A "meta-Skill" contribution that enhances the ecosystem itself. These tools analyze other Skills across five dimensions (Structure, Security, Instruction Clarity, etc.). This reflects a community desire to standardize Skill quality as the volume of contributions grows.
    *   **Status:** Open

*   **[`shodh-memory`](https://github.com/anthropics/skills/pull/154)** (varun29ankuS)
    Tackles the context window limitation by implementing persistent memory for AI agents. It allows Claude to recall relevant information across different sessions, a key requirement for building long-term agent workflows.
    *   **Status:** Open

*   **[`codebase-inventory-audit`](https://github.com/anthropics/skills/pull/147)** (p19dixon)
    Provides a systematic 10-step workflow for codebase cleanup, identifying orphaned code and documentation gaps. It addresses the "legacy code" problem, offering a single source of truth (`CODEBASE-STATUS.md`) for project hygiene.
    *   **Status:** Open

*   **[`quality-playbook`](https://github.com/anthropics/skills/pull/659)** (andrewstellman)
    Revives traditional Quality Engineering (QE) practices automated via AI. Unlike standard testing tools that generate stubs from code, this Skill focuses on generating quality systems based on project constraints, filling a gap in AI-assisted QA.
    *   **Status:** Open

## 2. Community Demand Trends
Analysis of the Issues tracker reveals specific technical gaps users are eager to fill:

*   **Evaluation & Testing Infrastructure:** There is strong demand for better tooling to validate Skills. Users are reporting that existing evaluation scripts (e.g., `run_eval.py`) suffer from 0% trigger rates, and there are calls for a [`skill-creator`](https://github.com/anthropics/skills/issues/202) update to align with best practices for instruction clarity.
*   **Multi-Session Persistence:** Users are actively seeking ways to maintain state between sessions. The popularity of the `shodh-memory` Skill and requests for persistent task planning (e.g., Issue #522 "plan-task") indicate that "stateless" interactions are a major bottleneck for complex workflows.
*   **Governance & Security:** As the ecosystem matures, trust is becoming a central theme. Issues regarding [`security`](https://github.com/anthropics/skills/issues/492) (namespace impersonation) and proposals for [`agent-governance`](https://github.com/anthropics/skills/issues/412) (safety patterns, audit trails) suggest the community is preparing for enterprise-grade deployment.
*   **Cross-Platform Integration:** Users are requesting integration with AWS Bedrock and exposing Skills as MCPs (Model Context Protocols), signaling a desire to use Claude Code capabilities within broader, non-Anthropic toolchains.

## 3. High-Potential Pending Skills
The following active PRs represent significant near-future value:

*   **[Fix: DOCX Tracked Change Collisions](https://github.com/anthropics/skills/pull/541)** (Lubrsy706)
    A technically precise fix for document corruption when Claude edits DOCX files with existing bookmarks. This is a "must-have" for users relying on Claude for legal or technical document editing.
*   **[Testing Patterns Skill](https://github.com/anthropics/skills/pull/723)** (4444J99)
    Aims to implement a comprehensive testing stack (Unit, React Component, E2E) based on modern philosophies like the "Testing Trophy."
*   **[Pre-Deployment Validator](https://github.com/anthropics/skills/pull/740)** (4eckd)
    Part of a batch of 11 new skills, this focuses on validating codebases before deployment, a critical step for DevOps workflows.

## 4. Skills Ecosystem Insight
The community is coalescing around **"Operational Maturity"**—shifting from experimental, one-off Skills to persistent, secure, and standardized tools that integrate into persistent workflows and professional quality assurance pipelines.

---

# Claude Code Community Digest: 2026-04-02

## 1. Today's Highlights

The community is currently facing a critical crisis regarding abnormal token consumption and rate limiting affecting Max plan users, with reports flooding in since March 23. Despite this unrest, the project has released version **v2.1.90**, introducing interactive lessons via the `/powerup` command and environment variable controls for offline environments. Simultaneously, a significant wave of open-source initiatives has hit the repository, with multiple PRs attempting to fully open-source the codebase, including comprehensive source extraction efforts and a ambitious Rust reimplementation.

## 2. Releases

*   **v2.1.90**
    *   **Feature:** Added `/powerup` — interactive lessons with animated demos to teach Claude Code features.
    *   **Env Var:** Added `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE` to preserve marketplace cache during offline `git pull` failures.
    *   **Protection:** Added `.husky` to protected directories.
*   **v2.1.89**
    *   **Permission Logic:** Added `"defer"` decision to `PreToolUse` hooks, allowing headless sessions to pause at tool calls and resume later via `-p --resume`.
    *   **Rendering:** Added `CLAUDE_CODE_NO_FLICKER=1` for flicker-free alt-screen rendering using virtualization.

## 3. Hot Issues

1.  [#16157 - Instantly hitting usage limits with Max subscription](https://github.com/anthropics/claude-code/issues/16157)
    *   **Why it matters:** The most active thread (1,422 comments) acting as the primary megaphone for the ongoing billing crisis.
    *   **Reaction:** Community frustration is extremely high; users report exhausting quotas in minutes despite light usage.

2.  [#38335 - Max plan session limits exhausted abnormally fast](https://github.com/anthropics/claude-code/issues/38335)
    *   **Why it matters:** Specific correlation with recent updates (March 23), suggesting a regression rather than a user behavior issue.
    *   **Reaction:** 313 comments confirm the issue is widespread across different platforms (macOS, Windows, Linux).

3.  [#40652 - CLI mutates historical tool results via billing hash substitution](https://github.com/anthropics/claude-code/issues/40652)
    *   **Why it matters:** A technical root cause analysis suggesting the CLI breaks prompt caching mid-session, causing 30-50K token waste per turn.
    *   **Reaction:** Highly technical discussion points to a potential architectural bug in the billing/caching layer.

4.  [#41788 - Rate limit 100% exhausted within ~70 minutes (v2.1.89 specific)](https://github.com/anthropics/claude-code/issues/41788)
    *   **Why it matters:** Directly implicates the latest release (v2.1.89) as the trigger for rapid battery drain.
    *   **Reaction:** Users are downgrading to previous versions (2.1.86) to restore functionality.

5.  [#42244 - v2.1.89 terminal content disappearing](https://github.com/anthropics/claude-code/issues/42244)
    *   **Why it matters:** New regression in v2.1.89 affecting the TUI experience, separate from the billing issues.
    *   **Reaction:** Requests for rollback of the new rendering changes introduced in 2.1.89.

6.  [#41930 - Widespread abnormal usage drain — multiple root causes identified](https://github.com/anthropics/claude-code/issues/41930)
    *   **Why it matters:** A meta-issue attempting to consolidate the chaos and demand formal communication from Anthropic.
    *   **Reaction:** Users express loyalty but warn of churn if transparency isn't improved.

7.  [#38239 - Extremely rapid token consumption on Windows](https://github.com/anthropics/claude-code/issues/38239)
    *   **Why it matters:** Confirms the issue is not platform-specific.
    *   **Reaction:** Windows users reporting identical "5-hour window exhausted in 2 prompts" behavior.

8.  [#12433 - macOS Activity Monitor shows version number instead of 'claude'](https://github.com/anthropics/claude-code/issues/12433)
    *   **Why it matters:** Long-standing UX issue making debugging and system monitoring difficult.
    *   **Reaction:** Persistent requests for consistent process naming conventions.

9.  [#42052 - Max 20x plan: 100% usage after 2 hours of light work](https://github.com/anthropics/claude-code/issues/42052)
    *   **Why it matters:** Affects the highest tier subscribers ($200/mo), indicating the issue scales with quota.
    *   **Reaction:** High-tier users threatening cancellation due to unusable workflow.

10. [#35899 - Scheduled tasks cannot access MCP connectors without warm-up](https://github.com/anthropics/claude-code/issues/35899)
    *   **Why it matters:** Highlights fragility in the MCP (Model Context Protocol) integration for automation workflows.
    *   **Reaction:** Users requesting persistent connection states for background tasks.

## 4. Key PR Progress

1.  [#41447 - Open Source Claude Code ✨](https://github.com/anthropics/claude-code/pull/41447)
    *   **Changes:** A symbolic PR acting as a rallying point for the open-source movement.
    *   **Impact:** References multiple issues requesting source code access.

2.  [#41568 - Rust Implementation: High-Performance Rewrite](https://github.com/anthropics/claude-code/pull/41568)
    *   **Changes:** A massive effort proposing a 16-crate Rust workspace to replace the existing codebase.
    *   **Impact:** Demonstrates the community's desire for a faster, more resource-efficient implementation.

3.  [#41518 - Fully Open Source Claude Code](https://github.com/anthropics/claude-code/pull/41518)
    *   **Changes:** Extracted 1,906 TypeScript files from the `cli.js.map` sourcemap shipped in the npm package.
    *   **Impact:** Successfully reverse-engineered a buildable version of the CLI using Bun.

4.  [#31633 - Safe Edit Guard Plugin](https://github.com/anthropics/claude-code/pull/31633)
    *   **Changes:** Adds a plugin to block Edit/Write operations on files Claude hasn't Read yet.
    *   **Impact:** Addresses the single biggest cause of AI-induced code corruption (blind edits).

5.  [#41661 - 14 Revolutionary Plugins (Security, Performance, Architecture)](https://github.com/anthropics/claude-code/pull/41661)
    *   **Changes:** Adds a suite of production-ready plugins including architecture validation and security guards.
    *   **Impact:** Expands the ecosystem significantly beyond core editing tools.

6.  [#42245 - EvalView Plugin for Regression Testing](https://github.com/anthropics/claude-code/pull/42245)
    *   **Changes:** Introduces structural diffing for AI agent behavior against golden baselines.
    *   **Impact:** Attempts to solve the "flaky AI agent" problem by detecting behavioral shifts in tool calls.

7.  [#39148 - Preserve Session Plugin](https://github.com/anthropics/claude-code/pull/39148)
    *   **Changes:** Assigns UUIDs to sessions to preserve history even if directories are renamed/moved.
    *   **Impact:** Solves a major annoyance where refactoring folders breaks context continuity.

8.  [#42265 - Fix Deprecated Plugin Install Instructions](https://github.com/anthropics/claude-code/pull/42265)
    *   **Changes:** Updates documentation to use `curl | bash` instead of deprecated `npm install`.
    *   **Impact:** Critical for keeping community documentation in sync with official changes.

9.  [#42205 - Fix Hookify Tool Matcher Parsing](https://github.com/anthropics/claude-code/pull/42205)
    *   **Changes:** Normalizes strings to handle spaces around separators.
    *   **Impact:** Improves reliability of the plugin system's hook execution.

10. [#42162 - Fix Hookify Relative Imports](https://github.com/anthropics/claude-code/pull/42162)
    *   **Changes:** Updates import paths to work when plugins are installed via the cache system.
    *   **Impact:** Fixes runtime errors for users installing plugins from the marketplace.

## 5. Feature Request Trends

*   **Cost Visibility & Controls:** Over 30 of the top issues relate to a desire for real-time token cost estimation ("$/prompt") and hard spending limits to prevent "bill shock."
*   **Prompt Cache Debugging:** Developers are asking for tools to inspect `cache_read_input_tokens` and understand why cache hits are being lost (linked to Issue #40652).
*   **Rollback Mechanism:** In light of the v2.1.89 regression, users are requesting a safer update mechanism or an easier way to pin/rollback versions (`claude version install 2.1.86`).
*   **Stateful MCP Connections:** Requests for MCP connectors to remain active in background/daemon mode so scheduled tasks don't fail to initialize tools.

## 6. Developer Pain Points

*   **The "Max Plan" Unusability:** The dominant sentiment is that the **Max subscription ($20-$200/mo)** is currently broken. Users claim they cannot work for more than an hour before hitting soft limits that previously lasted all day.
*   **Blind Edits:** A recurring complaint is Claude making destructive changes to files it hasn't read (e.g., refactoring imports without seeing the full file context), leading to syntax errors.
*   **Regression Anxiety:** The rapid release cycle combined with v2.1.89's failures has created trust issues; developers are hesitant to update, fearing new bugs.
*   **Platform Instability:** While the billing bug affects everyone, TUI users (macOS/Linux) are specifically annoyed by flickering screens and disappearing content in the latest versions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-02

## 1. Today's Highlights

The Codex ecosystem is seeing significant architectural refactoring, specifically with the extraction of the Model Context Protocol (MCP) runtime into a dedicated `codex-mcp` crate to improve modularity. On the community front, users are raising alarms regarding high resource consumption in the latest IDE extension (`26.325.31654`), reporting severe CPU spikes on macOS and excessive token burning on Windows. Additionally, a new alpha release (`rust-v0.119.0-alpha.2`) has been pushed to the `rust` channel.

## 2. Releases

**rust-v0.119.0-alpha.2**
*   **Version:** 0.119.0-alpha.2
*   **Status:** Pre-release
*   **Context:** This update continues the rapid iteration on the Rust-based components of the Codex CLI.
*   [View Release](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.2)

## 3. Hot Issues

*   **[#14593 Burning tokens very fast](https://github.com/openai/codex/issues/14593)** [👍 144]
    *   **Issue:** Users on VS Code (Windows) report rapid token depletion, seemingly consuming budget even when idle.
    *   **Reaction:** High engagement (369 comments) suggests this is a critical cost/efficiency bug for Business tier users.
*   **[#15764 Performance: Code Helper exceeds 100% CPU](https://github.com/openai/codex/issues/15764)** [👍 21]
    *   **Issue:** A regression in versions post `26.313.41514` causes the "Code Helper (Renderer)" to spike CPU usage when applying patches on macOS/VS Code.
    *   **Reaction:** Confirmed by multiple M5 Pro users; developers are reverting to older builds to maintain performance.
*   **[#16231 High CPU usage after updating on macOS](https://github.com/openai/codex/issues/16231)** [👍 5]
    *   **Issue:** Related to #15764, specifically targeting build `26.325.31654` on macOS Tahoe (M5 Pro), causing high heat and battery drain.
    *   **Reaction:** Users are demanding a rollback or immediate hotfix.
*   **[#10410 Codex Desktop App: macOS Intel support](https://github.com/openai/codex/issues/10410)** [👍 226]
    *   **Issue:** The Desktop App lacks support for Intel (x86_64) Macs, leaving legacy hardware users behind.
    *   **Reaction:** Highly requested (226 upvotes); users are requesting a Universal Binary or distinct Intel build.
*   **[#2998 IDE-integrated diff / approval](https://github.com/openai/codex/issues/2998)** [👍 126]
    *   **Issue:** Developers want the terminal-style approval flow (red/green diffs) available natively inside the IDE extension, not just the CLI.
    *   **Reaction:** Strong support (126 upvotes) indicates friction between the CLI and IDE workflows.
*   **[#3962 Play a sound when Codex finishes](https://github.com/openai/codex/issues/3962)** [👍 128]
    *   **Issue:** Request for an audible notification when long-running tasks complete in the background.
    *   **Reaction:** Surprisingly high demand (128 upvotes); users cite context-switching efficiency.
*   **[#8745 LSP integration for Codex CLI](https://github.com/openai/codex/issues/8745)** [👍 222]
    *   **Issue:** Request for built-in LSP support in the CLI to enable better symbol intelligence and diagnostics.
    *   **Reaction:** This is a top-tier enhancement request for improving codebase awareness in the terminal.
*   **[#16404 TUI voice transcription removed](https://github.com/openai/codex/issues/16404)** [👍 5]
    *   **Issue:** The recent removal of TUI voice transcription in `0.118.0` has disrupted terminal-first workflows.
    *   **Reaction:** Users are asking for the feature to be restored or documented why it was removed.
*   **[#15057 Linux sandbox fails on Ubuntu](https://github.com/openai/codex/issues/15057)** [👍 1]
    *   **Issue:** `codex sandbox` crashes on Ubuntu due to AppArmor `bwrap` restrictions (`EPERM`).
    *   **Reaction:** Critical blocker for Linux users attempting to use secure sandboxing features.
*   **[#11022 Migrate thread references when moving projects](https://github.com/openai/codex/issues/11022)** [👍 23]
    *   **Issue:** Moving a project folder breaks all conversation history in the App.
    *   **Reaction:** A major UX frustration for developers who reorganize their file systems.

## 4. Key PR Progress

*   **[#15919 Extract MCP into codex-mcp crate](https://github.com/openai/codex/pull/15919)**
    *   **Change:** Significant refactoring to move the Model Context Protocol (MCP) runtime and server code out of `codex-core` into a standalone `codex-mcp` crate.
    *   **Impact:** Improves separation of concerns, allowing for cleaner dependency management and modularity in the core architecture.
*   **[#16055 Force forked agents to inherit parent model settings](https://github.com/openai/codex/pull/16055)**
    *   **Change:** Ensures that `fork_context = true` forces child agents to ignore model overrides, preserving context reuse economics.
    *   **Impact:** Optimizes API costs and context consistency when spawning sub-agents.
*   **[#13637 Preserve fork references across replay](https://github.com/openai/codex/pull/13637)**
    *   **Change:** Implements logic to maintain fork references during thread replay and truncation.
    *   **Impact:** Enhances the reliability of the "history" feature when dealing with complex, multi-agent threads.
*   **[#16396 Add realtime WebRTC external audio bridge](https://github.com/openai/codex/pull/16396)**
    *   **Change:** Adds a shared WebRTC transport in core to bridge external PCM audio input via libwebrtc.
    *   **Impact:** Likely foundational infrastructure for improved voice/realtime features across different protocol versions.
*   **[#16448 GuardianAssessmentEvent.action strongly typed](https://github.com/openai/codex/pull/16448)**
    *   **Change:** Refactors the `GuardianAssessment` event payload from an arbitrary JSON blob to a defined sum type.
    *   **Impact:** Improves type safety and makes it easier for frontends to render "Guardian" (security/review) states.
*   **[#16460 Fix Windows Bazel Rust test coverage](https://github.com/openai/codex/pull/16460)**
    *   **Change:** Patches build rules to ensure Rust tests on Windows use correct MSVC linking paths.
    *   **Impact:** Improves CI reliability for Windows developers, ensuring code coverage tools work correctly.
*   **[#16480 Treat provider auth refresh_interval_ms=0 as no auto-refresh](https://github.com/openai/codex/pull/16480)**
    *   **Change:** Modifies the dynamic provider auth flow to allow `0` as a valid value for "never auto-refresh".
    *   **Impact:** Gives finer control over authentication caching for command-backed bearer auth.
*   **[#16181 Add deferred watchdog namespace tools](https://github.com/openai/codex/pull/16181)**
    *   **Change:** Introduces a `watchdog` namespace for parent-management tools.
    *   **Impact:** Organizes the API surface area, separating high-level agent management tools from standard interaction tools.
*   **[#15914 Migrate runtime state to PermissionProfile](https://github.com/openai/codex/pull/15914)**
    *   **Change:** Begins migrating permission logic from the lossy `SandboxPolicy` enum to a richer `PermissionProfile`.
    *   **Impact:** Paves the way for more granular filesystem and network permission controls.
*   **[#16471 Extract tool spec helpers into codex-tools](https://github.com/openai/codex/pull/16471)**
    *   **Change:** Moves pure tool-definition helpers out of `codex-core` into `codex-tools`.
    *   **Impact:** Continues the trend of decoupling tool definitions from the core runtime, reducing dependencies.

## 5. Feature Request Trends

*   **IDE Parity & Workflow Integration:**
    *   Users are strongly requesting features that bridge the gap between the powerful CLI and the IDE. Top requests include **IDE-native diff/approval workflows** (#2998) and **editing past messages** (#2948).
    *   There is a persistent desire for **macOS Intel support** (#10410) and **remote control** capabilities via mobile apps (#9224).
*   **Input Modalities:**
    *   **Voice input** remains a hot topic, ranging from requests for voice in the IDE (#3000) to complaints about removed TUI voice features (#16404).
*   **Context & History:**
    *   Developers want better state management, specifically **thread migration** when folders move (#11022) and **history-linked checkpoints** to restore file states (#2788).
*   **Notification & UX:**
    *   Simple UX enhancements like **completion sounds** (#3962) are surprisingly popular, indicating a focus on productivity in asynchronous workflows.

## 6. Developer Pain Points

*   **Resource Leaks & Performance Regressions:**
    *   The community is currently plagued by performance issues in the latest IDE updates. Specific pain points include **high CPU usage** (specifically "Code Helper" on macOS) and **excessive token burning** on VS Code. These issues are significantly impacting developer productivity and hardware costs.
*   **Platform Compatibility:**
    *   Linux users are facing **sandbox crashes** on Ubuntu due to AppArmor restrictions, while Intel Mac users feel abandoned by the lack of Desktop App support.
*   **TUI Instability:**
    *   Terminal users are reporting specific regressions, such as **truncated output after window resizing** (#5576) and broken scrolling in VS Code's integrated terminal (#16176).

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest: 2026-04-02

## 1. Today's Highlights
Development activity is surging around refactoring Crush's core architecture and expanding provider support. The most significant discussions involve a proposed **Server/Client architecture** to separate the agent loop from the interface, alongside major pushes to support new AI providers like **Alibaba's Coding Plan** and **OpenAI Codex via OAuth**. Simultaneously, the team is addressing critical quality-of-life issues, including the long-debated behavior of creating `.crush` folders and compatibility problems with terminals like Ghostty and local runners like LM Studio.

## 2. Releases
*No new stable releases were published in the last 24 hours.*

## 3. Hot Issues
*   **[#254: UX Config] `crush` should not create a `.crush` folder as soon as you start it**
    *   **Why it matters:** This is the most upvoted issue recently. Users are frustrated that invoking Crush anywhere pollutes the filesystem with `.crush` directories, leading to "litter" across their computers.
    *   **Reaction:** High community agreement (21 👍); pressure is mounting to defer folder creation until actual project context is required.
    *   [Link](https://github.com/charmbracelet/crush/issues/254)

*   **[#2546: Provider/LM Studio] No longer works with latest LM Studio**
    *   **Why it matters:** Users attempting to run local models (like Qwen 30B) via LM Studio are encountering "Bad Request" errors. This disrupts local development workflows relying on the latest LM Studio updates.
    *   **Reaction:** Users need immediate clarification on API compatibility changes in LM Studio.
    *   [Link](https://github.com/charmbracelet/crush/issues/2546)

*   **[#2545: Provider/Mac] Problem setting up a second GLM API on MacOS**
    *   **Why it matters:** Highlights cross-platform inconsistencies. A developer successfully set up the GLM API on Windows but faced rejection on MacOS, suggesting potential environment handling bugs.
    *   **Reaction:** Calls for better documentation or debugging tools for API key validation.
    *   [Link](https://github.com/charmbracelet/crush/issues/2545)

*   **[#2490: Process Management] Failed to kill process**
    *   **Why it matters:** A regression in process termination has resurfaced, particularly in "YOLO mode." If Crush fails to exit cleanly, it leaves zombie processes consuming resources.
    *   **Reaction:** Critical for workflow stability; users report this prevents them from restarting Crush easily.
    *   [Link](https://github.com/charmbracelet/crush/issues/2490)

*   **[#2413: Language Server] After configuring the language server, it didn't take effect**
    *   **Why it matters:** Developers integrating specific LSPs (like `nimlangserver`) find that configurations are ignored. This suggests the config parser or LSP loader may be failing silently on valid inputs.
    *   **Reaction:** Blocks users from adopting Crush for niche language stacks.
    *   [Link](https://github.com/charmbracelet/crush/issues/2413)

## 4. Key PR Progress
*   **[#2455: Architecture] Feat/Refactor: Server Client architecture and API**
    *   **Impact:** A massive architectural shift. This PR decouples the agent loop into a server that can manage multiple workspace sessions, allowing clients to interact via API.
    *   **Status:** Open and active discussion.
    *   [Link](https://github.com/charmbracelet/crush/pull/2455)

*   **[#2544: Provider] Add Alibaba Coding Plan Support**
    *   **Impact:** Expands the ecosystem to support Alibaba Cloud's GLM models (Qwen, Kimi, MiniMax). This is a high-value addition for developers utilizing Chinese LLMs.
    *   **Status:** Open.
    *   [Link](https://github.com/charmbracelet/crush/pull/2544)

*   **[#2081: Provider] Feat: add OpenAI Codex OAuth provider**
    *   **Impact:** Enables secure PKCE login for OpenAI/ChatGPT, removing the need to manually manage static API tokens for OpenAI.
    *   **Status:** Recently Closed (merged or completed).
    *   [Link](https://github.com/charmbracelet/crush/pull/2081)

*   **[#2450: Protocol] Feat: run Crush as an ACP server**
    *   **Impact:** Implements the **Agent Communication Protocol (ACP)**, allowing Crush to function as a standardized server agent. This future-proofs Crush for the wider AI agent ecosystem.
    *   **Status:** Open.
    *   [Link](https://github.com/charmbracelet/crush/pull/2450)

*   **[#2467: UX/Skills] Add dialog to command palette**
    *   **Impact:** Improves discoverability. Users can now browse and attach "skills" (plugins) directly from the TUI command palette without memorizing config syntax.
    *   **Status:** Open.
    *   [Link](https://github.com/charmbracelet/crush/pull/2467)

*   **[#2449: Local LLM] Auto-detect Ollama and available models**
    *   **Impact:** Enhances the local development experience. Crush will now automatically find and register a running Ollama instance and its pulled models, removing manual setup friction.
    *   **Status:** Open.
    *   [Link](https://github.com/charmbracelet/crush/pull/2449)

*   **[#2542 & #2314: Config/Quality of Life] Centralize config path & Git ignore fixes**
    *   **Impact:** Centralizes config handling (`home.Config()`) and ensures Crush respects global `.gitignore` files (`core.excludesfile`), fixing long-standing file filtering issues.
    *   **Status:** Recently Closed.
    *   [Link](https://github.com/charmbracelet/crush/pull/2542) | [Link](https://github.com/charmbracelet/crush/pull/2314)

## 5. Feature Request Trends
*   **Provider Expansion:** There is a clear trend toward supporting diverse, non-OpenAI providers. The community is actively pushing for robust integrations with **Alibaba GLM**, **Ollama** (local), and **OpenAI OAuth**.
*   **Local-First Workflow:** Developers want Crush to seamlessly integrate with local tools. Requests for **auto-detecting Ollama** and fixing **LM Studio** compatibility indicate a strong desire to run powerful models locally without complex configuration.
*   **Standardization:** The push for **ACP (Agent Communication Protocol)** support suggests users want Crush to act less like a standalone tool and more like a compliant server component in a larger dev-toolchain.

## 6. Developer Pain Points
*   **Filesystem Pollution:** The `.crush` folder creation issue remains the top UX grievance. Developers dislike "dirty" directories and want lazy initialization of configuration files.
*   **Process Reliability:** Reports of processes failing to kill (zombie processes) and broken LSP integrations indicate stability issues that interrupt the "flow state" of development.
*   **Terminal Compatibility:** Users are struggling with rendering artifacts in modern terminals like **Ghostty** (light background detection issues) and raw terminal control characters leaking upon exit.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-04-02

## 1. Today's Highlights
Today's updates focus heavily on stabilizing the CLI environment across different platforms and refining the "intelligence" behind the agent's operations. Notably, the team has landed significant fixes for Windows sandbox reliability and UI scrolling consistency. Concurrently, there is a strong push toward "context compression" and "memory services" to help the agent handle large codebases and long sessions more efficiently without losing context or hitting token limits.

## 2. Releases
*   **v0.37.0-preview.0**: A rapid preview release focusing on core developer workflows.
    *   **Change**: Centralized test agents into `test-utils` to improve reuse and consistency across the codebase ([#23616](https://github.com/google-gemini/gemini-cli/pull/23616)).
    *   **Revert**: Reverted a configuration change that disabled agents by default, ensuring immediate functionality for users upgrading ([#23672](https://github.com/google-gemini/gemini-cli/pull/23672)).
*   **v0.36.0**: The latest stable release.
    *   **Feature**: Introduced multi-registry architecture and tool filtering specifically for subagents, allowing for more granular control over agent capabilities ([#22712](https://github.com/google-gemini/gemini-cli/pull/22712)).

## 3. Hot Issues
*   [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) - **Assess the impact of AST-aware file reads**
    *   **Why it matters**: This Epic investigates using Abstract Syntax Trees (AST) to allow the CLI to understand code structure rather than just text. This could drastically reduce the "noise" in file reading and prevent the agent from misaligning code edits.
*   [#22863](https://github.com/google-gemini/gemini-cli/issues/22863) - **Gemini CLI is fond of using unsafe object cloning**
    *   **Why it matters**: Developers are reporting that the AI frequently generates code using unsafe object clones (TypeScript's `...` spread operator on partial objects), leading to type-safety risks and runtime errors.
*   [#24434](https://github.com/google-gemini/gemini-cli/issues/24434) - **UI: Extraneous empty lines in history output**
    *   **Why it matters**: A "P1" priority bug affecting user experience. The terminal UI is inserting unwanted gaps around tool outputs, making the history stream difficult to read.
*   [#24365](https://github.com/google-gemini/gemini-cli/issues/24365) - **"GeminiSandbox.exe ENOENT" major error**
    *   **Why it matters**: Windows users are reporting a blocker where the CLI fails to function entirely because it cannot locate the sandbox executable, preventing any code modifications.
*   [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) - **Running SSH the text is scrambled**
    *   **Why it matters**: Critical feedback for remote workflows; users on SSH connections (e.g., to cloudtops) are experiencing garbled text rendering, making the tool unusable in those environments.
*   [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) - **Subagent recovery after MAX_TURNS is reported as GOAL success**
    *   **Why it matters**: A "P1" bug where the agent lies to the user. When a subagent hits its turn limit, it reports "Success" (Goal Reached) instead of admitting it ran out of steps, effectively hiding the fact that it failed to complete the task.
*   [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) - **Model frequently creates tmp scripts in random spots**
    *   **Why it matters**: The agent creates clutter in the workspace by generating temporary edit scripts in various directories, creating significant overhead for cleanup before commits.
*   [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) - **Subagents Awareness of Active Approval Modes**
    *   **Why it matters**: Subagents are attempting actions that violate the current mode (e.g., "Plan Mode") because they aren't aware of user constraints, leading to blocked actions and frustration.
*   [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) - **Gemini CLI encounters 400 error with > 128 tools**
    *   **Why it matters**: The architecture is hitting a scaling limit. Loading more than 128 tools (a common scenario for rich environments) causes a 400 error, preventing the agent from starting.
*   [#22816](https://github.com/google-gemini/gemini-cli/issues/22816) - **Multiple indents for second level dependencies**
    *   **Why it matters**: A UX request to improve how the codebase mapper displays dependencies. Currently, it flattens the view, making it hard to distinguish deep dependency chains.

## 4. Key PR Progress
*   [#24483](https://github.com/google-gemini/gemini-cli/pull/24483) - **feat(core): Land ContextCompressionService**
    *   **Impact**: Introduces a service designed to compress large inputs (like file reads) to save tokens and reduce context window overflow, a major step toward handling massive repositories.
*   [#24449](https://github.com/google-gemini/gemini-cli/pull/24449) - **fix(ui): resolve unwanted vertical spacing**
    *   **Impact**: Addresses the "P1" UI spacing issue by refactoring `ToolGroupMessage` to remove extraneous empty lines in the chat history.
*   [#24480](https://github.com/google-gemini/gemini-cli/pull/24480) - **fix(core): improve Windows sandbox reliability**
    *   **Impact**: Adds critical flags (`CREATE_BREAKAWAY_FROM_JOB`) to the Windows native helper, fixing issues where the sandbox would fail in job-object environments (like CI or restrictive desktops).
*   [#24478](https://github.com/google-gemini/gemini-cli/pull/24478) - **feat(cli): add top-level /reload command**
    *   **Impact**: Adds a `/reload` (alias `/refresh`) command to allow users to hot-reload skills, agents, and settings without restarting the entire CLI process.
*   [#24479](https://github.com/google-gemini/gemini-cli/pull/24479) - **fix(cli): ensure agent stops when all declinable tools are cancelled**
    *   **Impact**: Fixes a logic bug where the agent would hang or fail to stop if the user cancelled all interactive prompts, but a background "update topic" process was still running.
*   [#24274](https://github.com/google-gemini/gemini-cli/pull/24274) - **feat(core): add background memory service for skill extraction**
    *   **Impact**: Introduces "Confucius," a background agent that scans past sessions to extract reusable skills (`SKILL.md`), helping the CLI learn user-specific workflows over time.
*   [#24457](https://github.com/google-gemini/gemini-cli/pull/24457) - **Add an eval for and fix unsafe cloning behavior**
    *   **Impact**: Directly addresses Issue #22863 by adding a behavioral evaluation to detect and penalize the AI's tendency to use unsafe object spreads.
*   [#24477](https://github.com/google-gemini/gemini-cli/pull/24477) - **fix(core): enforce parallel task tracker updates**
    *   **Impact**: Improves the performance of the task tracker by batching updates, preventing the UI from getting out of sync during complex multi-step agent operations.
*   [#24460](https://github.com/google-gemini/gemini-cli/pull/24460) - **fix(core): enhance sandbox usability**
    *   **Impact**: Improves the sandbox experience by implementing proactive permission prompts and better detection of permission denials.
*   [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) - **feat: Add voice input with pluggable backend**
    *   **Impact**: A long-running feature request nearing completion, adding native voice input support using Gemini (zero-install) or local Whisper.

## 5. Feature Request Trends
*   **Context & Memory Management**: There is a massive trend toward improving how the CLI handles memory. Requests range from the specific "Context Compression" (PR #24483) to routing memory between "Global vs. Project" (Issue #22819).
*   **Safety & Approval Logic**: Users are requesting tighter control over agent autonomy. Issues like "Subagents Awareness of Approval Modes" (#23582) and "Stop/discourage destructive behavior" (#22672) indicate a desire for the AI to be more "context-aware" of safety boundaries.
*   **AST Integration**: Developers are asking for the CLI to move beyond text manipulation to actual code understanding. The "AST-aware file reads" Epic (#22745) is the centerpiece of this trend.

## 6. Developer Pain Points
*   **Windows Instability**: A significant portion of today's digest addresses Windows-specific failures. From "GeminiSandbox.exe ENOENT" to text scrambling in SSH sessions, the Windows experience remains a primary friction point.
*   **Output Noise & Formatting**: Developers are frustrated with "noisy" output. This manifests as complaints about "extraneous empty lines" (#24434), "scrambled text" in SSH (#24202), and "unsafe clones" (#22863) which create messy code.
*   **Scaling Failures**: As users apply the CLI to larger projects, they are hitting hard limits, specifically the "400 error with > 128 tools" (#24246) and the need for "Subagent recovery" (#22323) when complex tasks hit turn limits.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-02 | **Source:** github.com/github/copilot-cli

## 1. Today's Highlights
Today's digest focuses on rapid-fire patching for `v1.0.16-0` to address critical MCP server stability and configuration management issues. While the release cadence is high, the community is actively debating feature regressions—specifically regarding the removal of legacy models and the current implementation of "alt-screen" mode in interactive sessions.

## 2. Latest Releases
**v1.0.16-0** (Current)
*   **Fixed:** Resolved a critical bug where MCP servers failed to load correctly after login, user switching, or executing `/mcp reload`.
*   **Fixed:** The BYOK Anthropic provider now correctly respects the `maxOutputTokens` configuration limit.
*   **Removed:** Deprecated `marketplaces` repository setting; users must migrate to `extraKnownMarketplaces`.

**v1.0.15**
*   **Removed:** Dropped support for `gpt-5.1-codex`, `gpt-5.1-codex-mini`, and `gpt-5.1-codex-max` models.
*   **Added:** New MCP configuration management RPCs: `mcp.config.list`, `mcp.config.add`, `mcp.config.update`, and `mcp.config.remove`.
*   **Changed:** User accounts now display in alphabetical order.

**v1.0.15-1**
*   **Added:** Device code flow (RFC 8628) as a fallback for MCP OAuth in headless/CI environments.
*   **Added:** `/mcp auth` command for re-authentication flows.

## 3. Hot Issues

1.  **[#618 Closed: Feature Request - Custom Slash Commands](https://github.com/github/copilot-cli/issues/618)** (👍 93)
    *   **Impact:** A massive community request to support custom slash commands defined in `.github/prompts/` (similar to VS Code) was closed.
    *   **Reaction:** With 93 upvotes, the closure without implementation has sparked significant discussion regarding CLI parity with the VS Code extension.

2.  **[#223 Open: Org Token Permissions](https://github.com/github/copilot-cli/issues/223)** (👍 60)
    *   **Issue:** "Copilot Requests" permission is not visible for organization-owned fine-grained tokens.
    *   **Impact:** Critical for enterprise security; prevents corporate teams from authenticating automations without using individual PATs.

3.  **[#2334 Open: Bring Back "no-alt-screen"](https://github.com/github/copilot-cli/issues/2334)** (👍 13)
    *   **Issue:** Users strongly dislike the new default alt-screen mode, citing loss of scrollbar history and difficulty reviewing file changes.
    *   **Reaction:** A strong backlash against UX changes that disrupt standard terminal workflows.

4.  **[#1703 Open: Model Availability Mismatch](https://github.com/github/copilot-cli/issues/1703)** (👍 26)
    *   **Issue:** Copilot CLI fails to list organization-enabled models (e.g., Gemini 3.1 Pro) that are visible and working in VS Code Copilot.
    *   **Impact:** Fragmentation of the developer experience across GitHub's own product suite.

5.  **[#1481 Closed: Shift+Enter UX](https://github.com/github/copilot-cli/issues/1481)** (👍 11)
    *   **Issue:** `SHIFT + ENTER` executes the prompt instead of creating a line break (standard behavior is `CTRL + ENTER` to send).
    *   **Reaction:** While closed, the 20 comments indicate this muscle-memory issue continues to annoy users migrating from other chat interfaces.

6.  **[#1973 Open: Tool Whitelist for Interactive Mode](https://github.com/github/copilot-cli/issues/1973)** (👍 9)
    *   **Request:** Users want a middle ground between approving every tool call and `/allow-all` (which is dangerous).
    *   **Impact:** Necessary for safe automation of read-only tasks (grep, git log) without risking destructive operations.

7.  **[#2445 Closed: Claude Opus Performance](https://github.com/github/copilot-cli/issues/2445)**
    *   **Issue:** Reports of Claude Opus writing "one word a second," rendering it unusable.
    *   **Impact:** Suggests potential latency or token streaming issues introduced in recent builds.

8.  **[#2434 Open: Restore Gemini Pro Support](https://github.com/github/copilot-cli/issues/2434)** (👍 2)
    *   **Issue:** `v1.0.14` dropped support for `gemini-3-pro-preview`.
    *   **Impact:** Users are choosing CLI specifically for model variety; removing models drives users to competitors like Claude Code.

9.  **[#2078 Open: Add /btw](https://github.com/github/copilot-cli/issues/2078)** (👍 18)
    *   **Request:** Add a `/btw` command.
    *   **Impact:** High request volume suggests users want informal, context-aware assistance distinct from the main prompt loop.

10. **[#2421 Open: HTTP/2 GOAWAY Race Condition](https://github.com/github/copilot-cli/issues/2421)** (👍 4)
    *   **Issue:** A technical deep-dive into connection pool failures causing cascading retries and "silent premium request waste."
    *   **Impact:** Critical for users paying for premium requests who are seeing quotas eaten by retries.

## 4. Key PR Progress
*No pull requests were updated in the last 24 hours based on the provided data.*

## 5. Feature Request Trends
*   **Configuration & Customization:** Users are aggressively requesting more control, specifically custom themes (via `/theme` or JSON) and custom slash commands from local directories.
*   **Enterprise/Org Features:** There is a clear trend toward organizational needs, such as support for org-level tokens and persistent usage statistics for enterprise billing tracking.
*   **Model Flexibility:** Requests to restore removed models (Gemini, older Codex versions) and fix entitlement mismatches (Pro models not showing in CLI) indicate frustration with model availability discrepancies between the CLI and Web/VS Code.

## 6. Developer Pain Points
*   **UX Friction:** The forced "alt-screen" mode is the top complaint, breaking standard terminal history navigation (scrollback/search).
*   **Credential Handling:** Users are facing friction with credential injection (proxies) and complex OAuth flows in headless environments (partially addressed in `v1.0.15-1`).
*   **Regressions:** Frequent reports of features working in VS Code but failing in CLI (e.g., CRLF line ending issues, MCP env var expansion failures) are damaging trust in the tool's stability.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-04-02

## 1. Today's Highlights
Version **1.29.0** has been released, focusing heavily on resolving Windows-specific compatibility issues (CRLF line endings, proxy support, and shell paths) and refining session management. The release introduces hierarchical `AGENTS.md` loading and manual session renaming, while the community continues to debate a radical proposal to rewrite the entire CLI from Python to TypeScript/Bun.

## 2. Releases
**[v1.29.0](https://github.com/MoonshotAI/kimi-cli/releases)**
*   **Session Management:** Added `/title` command to manually rename sessions and unified session state into `state.json`. Auto-titles will no longer overwrite manual names.
*   **Windows Fixes:** Resolved issues with file writing converting LF to CRLF ([#1693](https://github.com/MoonshotAI/kimi-cli/pull/1693)) and PowerShell execution failures ([#1703](https://github.com/MoonshotAI/kimi-cli/pull/1703)).
*   **Agent Enhancements:** Implemented hierarchical loading of `AGENTS.md` from project root to working directory.
*   **Proxy:** Added support for normalizing `socks://` to `socks5://` for tools like V2RayN ([#1694](https://github.com/MoonshotAI/kimi-cli/pull/1694)).

## 3. Hot Issues
*   **[#1682 (UX Issue): Double Enter Key Required](https://github.com/MoonshotAI/kimi-cli/issues/1682)**
    *   **Summary:** Users report that command completion (e.g., typing `/cl`) requires hitting Enter twice to execute, unlike competitors like Claude Code.
    *   **Why it matters:** Directly impacts developer workflow efficiency and keyboard interaction friction.
*   **[#1707 (Architecture): "Python is a failure" - Rewrite Proposal](https://github.com/MoonshotAI/kimi-cli/pull/1707)**
    *   **Summary:** A highly controversial proposal to rewrite the entire CLI from Python to Bun + TypeScript + React Ink.
    *   **Reaction:** Highlights significant community dissatisfaction with the current tech stack's performance or maintainability.
*   **[#1681 (UI): Rendering Artifacts](https://github.com/MoonshotAI/kimi-cli/issues/1681)**
    *   **Summary:** Text rendering issues including abnormal character spacing (`a dd-dir`) and inconsistent slash display.
    *   **Why it matters:** Affects basic readability and UI polish.
*   **[#1695 (Service): Openclaw Scheduled Task Failures](https://github.com/MoonshotAI/kimi-cli/issues/1695)**
    *   **Summary:** Users report `rate_limit_error` (engine overloaded) preventing scheduled tasks from triggering for ~3 days.
    *   **Reaction:** Points to upstream infrastructure stability issues affecting production reliability.
*   **[#1702 (Bug): Windows Shell Broken](https://github.com/MoonshotAI/kimi-cli/issues/1702)**
    *   **Summary:** Shell tool fails completely on Windows due to missing `powershell.exe` path resolution.
    *   **Why it matters:** Critical blocker for Windows users relying on shell commands.
*   **[#1615 (Bug): GLM5.1 Model Feedback](https://github.com/MoonshotAI/kimi-cli/issues/1615)**
    *   **Summary:** Model fails to receive information despite tools returning data correctly in VIS.
    *   **Status:** Closed, but highlights integration complexities with third-party models.
*   **[#1691 (Feature): Zero-Cost Context Compression](https://github.com/MoonshotAI/kimi-cli/issues/1691)**
    *   **Summary:** Request for "incremental session memory" to avoid expensive LLM calls during the `/compact` process.
    *   **Why it matters:** Addresses cost and latency concerns for long-running sessions.
*   **[#1708 (Feature): Dynamic MCP/Skills Loading](https://github.com/MoonshotAI/kimi-cli/issues/1708)**
    *   **Summary:** MCP servers and skills are currently only loaded at startup; users want dynamic loading/unloading during active sessions.
    *   **Reaction:** High demand for better plugin management without restarting the CLI.
*   **[#1674 (Enhancement): SOCKS Proxy Support](https://github.com/MoonshotAI/kimi-cli/issues/1674)**
    *   **Summary:** CLI failed to start with `socks://` scheme proxies.
    *   **Status:** Resolved in v1.29.0.
*   **[#1536 (Feature): Manual Session Titles](https://github.com/MoonshotAI/kimi-cli/issues/1536)**
    *   **Summary:** Users wanted the ability to manually set session titles.
    *   **Status:** Delivered in v1.29.0 via the `/title` command.

## 4. Key PR Progress
*   **[#1707: Refactor rewrite to Bun + TS](https://github.com/MoonshotAI/kimi-cli/pull/1707)**
    *   Opened proposal to completely rewrite the CLI in TypeScript/React Ink, claiming the Python implementation is a "failure."
*   **[#1709: Fix Diff Highlight Offsets](https://github.com/MoonshotAI/kimi-cli/pull/1709)**
    *   Fixes alignment issues in inline highlights when dealing with tab-expanded text.
*   **[#1703: Fix PowerShell Path on Windows](https://github.com/MoonshotAI/kimi-cli/pull/1703)**
    *   Resolves `WinError 2` by resolving the full path to `powershell.exe` instead of relying on bare filename lookup.
*   **[#1700: Hierarchical AGENTS.md](https://github.com/MoonshotAI/kimi-cli/pull/1700)**
    *   Implements loading of `AGENTS.md` from the git root down to the current directory, prioritizing `.kimi/AGENTS.md`.
*   **[#1701: Web Session Status Indicators](https://github.com/MoonshotAI/kimi-cli/pull/1701)**
    *   Adds visual pulsing dot indicators in the web UI sidebar to show active/busy session states.
*   **[#1699: Clean Empty Sessions](https://github.com/MoonshotAI/kimi-cli/pull/1699)**
    *   Ensures empty session directories are deleted even if the CLI exits via error or session switch, preventing disk clutter.
*   **[#1698: Configurable Paste Folding](https://github.com/MoonshotAI/kimi-cli/pull/1698)**
    *   Adds env vars (`KIMI_CLI_PASTE_CHAR_THRESHOLD`) to control when large pasted text blocks are folded into placeholders (e.g., `[Pasted text #1 +10 lines]`).
*   **[#1693: Prevent LF to CRLF Conversion](https://github.com/MoonshotAI/kimi-cli/pull/1693)**
    *   Fixes `writetext` on Windows to preserve original Unix line endings (`LF`), preventing repository corruption.
*   **[#1694: Normalize socks:// Proxy](https://github.com/MoonshotAI/kimi-cli/pull/1694)**
    *   Automatically converts `socks://` proxy URLs to `socks5://` to ensure compatibility with `httpx` and `aiohttp`.
*   **[#1685: Add /title Command](https://github.com/MoonshotAI/kimi-cli/pull/1685)**
    *   Introduces the `/title` (alias `/rename`) command for manual session management.

## 5. Feature Request Trends
*   **Dynamic Plugin Management:** Users are increasingly requesting the ability to reload MCP servers and Skills without restarting the CLI (e.g., [#1708](https://github.com/MoonshotAI/kimi-cli/issues/1708)).
*   **UX Parity with Competitors:** Direct comparisons to Claude Code are driving requests for single-enter command execution ([#1682](https://github.com/MoonshotAI/kimi-cli/issues/1682)) and LF preservation on Windows ([#1687](https://github.com/MoonshotAI/kimi-cli/issues/1687)).
*   **Cost & Context Optimization:** There is a trend toward features that reduce token costs, such as incremental memory compression ([#1691](https://github.com/MoonshotAI/kimi-cli/issues/1691)).

## 6. Developer Pain Points
*   **Platform Inconsistencies:** Developers are frustrated by inconsistent behavior across operating systems, specifically Windows shell integration ([#1702](https://github.com/MoonshotAI/kimi-cli/issues/1702)) and line ending handling ([#1687](https://github.com/MoonshotAI/kimi-cli/issues/1687)).
*   **UI/UX Friction:** The "double-enter" requirement for command execution and UI rendering glitches (spacing/slashes) are cited as major usability hurdles compared to rival tools.
*   **Upstream Instability:** Reliability issues with the backend API (Rate limit errors / Overloaded engine) are breaking scheduled tasks ([#1695](https://github.com/MoonshotAI/kimi-cli/issues/1695)), indicating infrastructure stress.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-04-02

## 1. Today's Highlights
The `v1.3.13` release is now available, primarily bumping the `opentui` dependency to address UI stability. On the development front, significant internal refactoring is underway to migrate to the "Effect" service pattern, aimed at resolving critical memory leaks and speeding up snapshot revert operations. Community attention remains focused on context management for long sessions and stability issues within the TypeScript Language Server Protocol (LSP).

## 2. Releases
**v1.3.13**
*   **Change:** Bumped `opentui` version.
*   **Context:** This update likely addresses recent terminal rendering glitches and scroll configuration issues.
*   **Link:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## 3. Hot Issues

**1. [#13768] Model Prefill Error with Opus 4.6** ([Issue](https://github.com/anomalyco/opencode/issues/13768))
*   **Impact:** Users working with Anthropic’s Opus 4.6 are facing frequent workflow interruptions ("assistant message prefill" errors), forcing manual intervention to reset the chat state.
*   **Reaction:** 50+ comments; 18 👍. High priority for core team attention.

**2. [#4659] Sliding Window Context Management** ([Issue](https://github.com/anomalyco/opencode/issues/4659))
*   **Impact:** Proposes a smarter context window management technique ("sliding window") to prevent the AI from losing track of long-term project history.
*   **Reaction:** 25 comments; 18 👍. Strong community desire for better long-session memory.

**3. [#15585 & #15714] "Free Usage Exceeded" on Free Models** ([Issues](https://github.com/anomalyco/opencode/issues/15585), [https://github.com/anomalyco/opencode/issues/15714](https://github.com/anomalyco/opencode/issues/15714))
*   **Impact:** Users are hitting paywalls on "Big Pickle" and other free models, causing confusion about pricing tiers.
*   **Reaction:** 16+ comments each. Users are requesting clearer communication regarding Zen model limits.

**4. [#17376] Web Terminal Infinite Auth Loop** ([Issue](https://github.com/anomalyco/opencode/issues/17376))
*   **Impact:** OpenCode Web is unusable for terminal operations due to a continuous authentication prompt loop.
*   **Reaction:** 12 comments; 7 👍. Critical blocker for web-based workflows.

**5. [#8003] VS Code Diff Preview Integration** ([Issue](https://github.com/anomalyco/opencode/issues/8003))
*   **Impact:** Developers struggle to review massive code changes within the TUI and want native integration to preview diffs in VS Code.
*   **Reaction:** 11 comments; 41 👍. One of the most upvoted feature requests.

**6. [#19952] TypeScript LSP Resource Exhaustion** ([Issue](https://github.com/anomalyco/opencode/issues/19952))
*   **Impact:** The TypeScript server is attempting to index entire `node_modules`, leading to system freezes and SSH session drops.
*   **Reaction:** Critical stability concern for frontend developers using OpenCode.

**7. [#7006] `permission.ask` Hook Not Triggered** ([Issue](https://github.com/anomalyco/opencode/issues/7006))
*   **Impact:** Plugin developers cannot implement custom permission logic effectively, breaking expected automation workflows.
*   **Reaction:** 8 comments. Affects core extensibility promises.

**8. [#15728] Vision Data Failing with Read Tool** ([Issue](https://github.com/anomalyco/opencode/issues/15728))
*   **Impact:** The `read` tool fails to pass image data to vision-capable models (like Qwen), breaking analysis features for UI/UX work.
*   **Reaction:** 6 comments. Hinders AI-agentic design tasks.

**9. [#20531] Duplicate Tool Calls (OpenRouter/Qwen)** ([Issue](https://github.com/anomalyco/opencode/issues/20531))
*   **Impact:** Every bash command is executed twice due to duplicated API responses from the Qwen model via OpenRouter.
*   **Reaction:** Dangerous behavior that could lead to data corruption or unintended deployments.

**10. [#20527] PowerShell Tool Confuses Agents** ([Issue](https://github.com/anomalyco/opencode/issues/20527))
*   **Impact:** On Windows, agents are using the wrong tools (e.g., `tail` instead of PowerShell cmdlets) to parse results, causing failures.
*   **Reaction:** Highlights ongoing gaps in Windows platform support.

## 4. Key PR Progress

**1. [#20551] Speed Up Slow Revert Functionality** ([PR](https://github.com/anomalyco/opencode/pull/20551))
*   **Change:** Refactors `Snapshot.revert` to batch operations instead of handling files one by one.
*   **Benefit:** Drastically reduces the time required to undo large patches.

**2. [#20560] Fix Cross-Session Patch Contamination** ([PR](https://github.com/anomalyco/opencode/pull/20560))
*   **Change:** Ensures that snapshots are correctly scoped to sessions, preventing git state from leaking between concurrent sessions.
*   **Benefit:** Critical for users running multiple OpenCode instances in parallel.

**3. [#20558] Refresh Console Tokens** ([PR](https://github.com/anomalyco/opencode/pull/20558))
*   **Change:** Implements eager token refresh (5 min window) for console access.
*   **Benefit:** Prevents sudden authentication failures during long-running agent tasks.

**4. [#20542] Migrate Instruction to Effect Service** ([PR](https://github.com/anomalyco/opencode/pull/20542))
*   **Change:** Continues the large-scale refactor to adopt the Effect pattern for system instructions and configuration.
*   **Benefit:** Improves type safety and error handling in core logic.

**5. [#20539] Show Model Display Name** ([PR](https://github.com/anomalyco/opencode/pull/20539))
*   **Change:** Ensures readable model names appear in the TUI footer and transcripts.
*   **Benefit:** Better UX for users managing multiple providers.

**6. [#20496] Refactor Bash Tool with Effect ChildProcess** ([PR](https://github.com/anomalyco/opencode/pull/20496))
*   **Change:** Replaces raw Node spawn calls with Effect-based process management.
*   **Benefit:** More reliable streaming and cleanup of shell processes.

**7. [#20563] Fix Provider Context Type** ([PR](https://github.com/anomalyco/opencode/pull/20563))
*   **Change:** Corrects TypeScript typing for plugin hooks (`chat.params`/`chat.headers`).
*   **Benefit:** Fixes a recent regression that broke type safety for plugin developers.

**8. [#20189] Stabilize E2E Tests** ([PR](https://github.com/anomalyco/opencode/pull/20189))
*   **Change:** Improves reliability of shell submission and review seeding in automated tests.
*   **Benefit:** Increases confidence in future releases.

**9. [#14735] Unified Scroll Config** ([PR](https://github.com/anomalyco/opencode/pull/14735))
*   **Change:** Ensures TUI scroll settings apply uniformly across all boxes.
*   **Benefit:** Consistent UI navigation behavior.

**10. [#19955] GitLab DWS Tool Approval** ([PR](https://github.com/anomalyco/opencode/pull/19955))
*   **Change:** Integrates GitLab Duo Workflow Service approvals into OpenCode's native permission system.
*   **Benefit:** Enhanced enterprise security compliance.

## 5. Feature Request Trends
*   **Context Management:** Users are demanding better handling of long contexts. The "Sliding Window" proposal (#4659) is the most discussed solution, moving away from simple summarization to smarter context retention.
*   **Hybrid Workflows:** There is a strong push to integrate OpenCode with traditional IDEs (VS Code Diff Preview #8003), suggesting developers want to use OpenCode as an agent alongside their standard editor, rather than a complete replacement.
*   **Session Persistence:** Multiple requests (#9387, #20532) continue to appear for exporting sessions and saving chat history across restarts, indicating a need for better long-term memory and audit trails.

## 6. Developer Pain Points
*   **Platform Stability (Windows & Web):** The Windows experience continues to lag with issues like TUI crashes on resize (#7943) and PowerShell confusion (#20527). The Web interface also suffers from critical bugs like the auth loop (#17376).
*   **Resource Management:** Users are reporting severe performance issues, specifically the TypeScript LSP exhausting file descriptors (#19952) and the `Tool.define()` memory leak (#17047).
*   **Ambiguous Limits:** The discrepancy between "Free" models and hitting usage limits (#15585) is causing frustration among users trying to evaluate the tool.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-02

## 1. Today's Highlights
The Qwen Code repository is ramping up for the **v0.14.0** release with a flurry of activity, including a major rebranding of the extension path, new authentication flows, and stability improvements for the ACP (Agent Client Protocol). Community discussions are buzzing about competitive pressures—specifically requests to integrate features from leaked tools like "claw-code"—and persistent requests for the **Qwen 3.6** model integration.

## 2. Releases
**v0.14.0-preview.4**
*   **Core Fixes:** Addresses path replacement issues during extension installation by replacing `.qwen` paths in markdown files. It also normalizes proxy URLs to support addresses without protocol prefixes (e.g., `localhost:8080`).
*   **Context:** This is the fourth preview in the v0.14.0 series, focusing on installation smoothness and network configuration.
*   [View Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.0-preview.4)

**v0.14.0-preview.3**
*   **Overview:** A stepping-stone release leading to the current preview. The full changelog indicates a delta from v0.13.2.
*   [View Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.0-preview.3)

## 3. Hot Issues
**Top Community Discussions & Bugs**

*   **[#2040 Supports project-level Insight](https://github.com/QwenLM/qwen-code/issues/2040)** (Open)
    *   **Why it matters:** Highly requested (24 comments). Users want to analyze code dependencies and insights at the project level, not just the machine level.
    *   **Reaction:** Developers are eager for better granular control over codebase analysis.

*   **[#2721 Consider taking over the iflow cli project](https://github.com/QwenLM/qwen-code/issues/2721)** (Open)
    *   **Why it matters:** Community members are comparing Qwen Code unfavorably to the discontinued iflow CLI, suggesting Qwen absorb its features.
    *   **Reaction:** Indicates user frustration with specific UX or workflow aspects in Qwen Code compared to predecessors.

*   **[#2803 Incorporate ideas from leaked "claw-code"](https://github.com/QwenLM/qwen-code/issues/2803)** (Closed)
    *   **Why it matters:** A user requested integrating code from a repo based on a leaked tool from a major AI company.
    *   **Reaction:** Sparked debate about implementation details. The issue was closed, likely due to ToS/IP concerns, but shows interest in those specific features.

*   **[#2759 Qwen 3.6 not available in QwenCode](https://github.com/QwenLM/qwen-code/issues/2759)** (Open)
    *   **Why it matters:** Users noticed the Qwen 3.6 model is available in other products (like OpenCode) but missing in the official IDE tool.
    *   **Reaction:** "Embarrassing," commented one user, highlighting demand for the latest model capabilities.

*   **[#2780 Path recognition anomaly](https://github.com/QwenLM/qwen-code/issues/2780)** (Open)
    *   **Why it matters:** Critical UX bug where spaces are incorrectly inserted into file paths (e.g., turning `Tencent\微信...` into invalid paths), breaking tool execution.
    *   **Reaction:** Affects developers working with non-English directory names or specific paths.

*   **[#2783 Missing parameters (WriteFile, Shell, etc.)](https://github.com/QwenLM/qwen-code/issues/2783)** (Open)
    *   **Why it matters:** Functional regression where the AI frequently fails to generate required parameters (like `content` or `command`), halting task execution.
    *   **Reaction:** High impact on daily coding workflows.

*   **[#2775 [Web UI] Unable to terminate long-running tasks](https://github.com/QwenLM/qwen-code/issues/2775)** (Closed)
    *   **Why it matters:** Users reported sessions becoming stuck and unresponsive on the Web UI with no way to cancel tasks.
    *   **Reaction:** Critical stability concern for the web interface.

*   **[#2665 VSCode: Closing chat tab does not terminate ACP child process](https://github.com/QwenLM/qwen-code/issues/2665)** (Closed)
    *   **Why it matters:** Closing a chat tab leaves zombie processes running, consuming resources.
    *   **Reaction:** Affects system performance and cleanliness for VS Code users.

*   **[#2313 Severe PTY leak in qwen CLI](https://github.com/QwenLM/qwen-code/issues/2313)** (Closed)
    *   **Why it matters:** Long-running CLI sessions were exhausting system file descriptors (`/dev/ptmx`), breaking tmux and terminals.
    *   **Reaction:** Critical system-level bug for macOS/Linux developers.

*   **[#2794 New Chat Pane does not inherit model selection](https://github.com/QwenLM/qwen-code/issues/2794)** (Open)
    *   **Why it matters:** Workflow interruption where opening a new chat tab resets the model to the default, losing the user's preferred context.
    *   **Reaction:** Frequent minor annoyance for power users switching between models.

## 4. Key PR Progress
**Significant Merges & Incoming Features**

*   **[#2802 fix(vscode): inherit model selection for new chat tabs](https://github.com/QwenLM/qwen-code/pull/2802)** (Open)
    *   **Change:** Ensures new VS Code chat panes preserve the model selection from the active pane.
    *   **Impact:** Solves the frustration of manually resetting the model for every new chat.

*   **[#2732 Add math rendering support (LaTeX, Fractals)](https://github.com/QwenLM/qwen-code/pull/2732)** (Open)
    *   **Change:** Introduces comprehensive math rendering capabilities to the chat UI.
    *   **Impact:** Major UX enhancement for developers discussing algorithms or math-heavy logic.

*   **[#2805 feat: add multi-language support for /insight HTML report](https://github.com/QwenLM/qwen-code/pull/2805)** (Open)
    *   **Change:** Localizes the `/insight` command output and HTML reports into multiple languages.
    *   **Impact:** Improves accessibility for non-English speaking users.

*   **[#2804 fix: improve ACP connection reliability](https://github.com/QwenLM/qwen-code/pull/2804)** (Open)
    *   **Change:** Adds spawn retry logic and auto-reconnect mechanisms for the Agent Client Protocol.
    *   **Impact:** Directly addresses stability issues and zombie process bugs.

*   **[#2490 Add Coding Plan Authentication](https://github.com/QwenLM/qwen-code/pull/2490)** (Open)
    *   **Change:** Integrates Alibaba Cloud Coding Plan authentication and multi-language onboarding.
    *   **Impact:** Expands authentication options and enterprise readiness.

*   **[#2628 feat(channels): add extensible Channels platform](https://github.com/QwenLM/qwen-code/pull/2628)** (Merged)
    *   **Change:** Adds a plugin system for messaging platforms (Telegram, WeChat, DingTalk).
    *   **Impact:** Enables Qwen Code interactions outside of the IDE.

*   **[#2731 feat(cron): add in-session loop scheduling](https://github.com/QwenLM/qwen-code/pull/2731)** (Merged)
    *   **Change:** Introduces cron-like tools for recurring background jobs within a session.
    *   **Impact:** Allows the AI to monitor long-running tasks autonomously.

*   **[#2698 feat: add cross-provider model selection for subagents](https://github.com/QwenLM/qwen-code/pull/2698)** (Merged)
    *   **Change:** Sub-agents can now use different models/providers than the parent conversation.
    *   **Impact:** Optimizes cost and performance by routing simple tasks to smaller models.

*   **[#2719 feat(extension): Add npm registry support](https://github.com/QwenLM/qwen-code/pull/2719)** (Merged)
    *   **Change:** Allows installing extensions via npm packages.
    *   **Impact:** Opens the door for a third-party extension ecosystem.

*   **[#2808 feat(sdk): full CLI parity — hooks, LSP, tasks](https://github.com/QwenLM/qwen-code/pull/2808)** (Closed)
    *   **Change:** Extends the TypeScript SDK to support full proto agent features (hooks, LSP).
    *   **Impact:** Empowers developers building tools on top of Qwen Code.

## 5. Feature Request Trends
*   **Model Availability:** Users are clamoring for support for **Qwen 3.6**, which is visible in other products but missing in Qwen Code.
*   **Competitive Feature Parity:** There is a strong trend of referencing external tools (like iflow CLI or the leaked "claw-code") to request feature improvements in Qwen Code, particularly around workflow and UI.
*   **Project-Level Intelligence:** Requests indicate a shift from file-level analysis to broader project-level insights and management.

## 6. Developer Pain Points
*   **Process Management (Zombies):** A recurring theme involves child processes not terminating correctly (ACP/CLI), leading to resource leaks and "out of pty" errors on Unix systems.
*   **Tool Use Reliability:** Developers are reporting high failure rates in tool execution (missing parameters in `WriteFile` or `Shell`), which breaks the coding loop.
*   **Path Handling:** Persistent bugs with path recognition—especially involving spaces, non-ASCII characters, or proxy URL formatting—are causing configuration headaches.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*