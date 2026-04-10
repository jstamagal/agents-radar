# AI CLI Tools Community Digest 2026-04-10

> Generated: 2026-04-10 00:13 UTC | Tools covered: 8

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

# Cross-Tool Analysis: AI CLI Tools Ecosystem (2026-04-10)

## 1. Ecosystem Overview
The AI CLI landscape is currently undergoing a critical "stability and ops" phase, shifting from raw feature addition to refinement of the developer experience. The industry is converging on **Agent Orchestration** (multi-agent teams, parallel execution) and **Protocol Standardization** (MCP/ACP) as the next major battlefields, while grappling with "token economics" — specifically, how to reduce the cost of "thinking" and context management. Simultaneously, a significant push towards **Enterprise Hardening** is evident, with tools racing to add MDM support, granular permissions, and robust authentication flows to satisfy professional security requirements.

## 2. Activity Comparison

| Tool | Hot Issues (Top 10) | Active PRs | Release Status | Primary Focus Today |
| :--- | :---: | :---: | :---: | :--- |
| **Claude Code** | High (1,085👍 top) | High | **Stable (v2.1.98)** | **Platform Expansion** (GCP Wizard), Security |
| **OpenAI Codex** | High (Token burning) | Very High | **Alpha Iteration** | **Architecture** (Realtime V2, Guardian), Stability |
| **Charm Crush** | Medium | Medium | Nightly | **Optimization** (Token reduction, Theming) |
| **Gemini CLI** | Medium | High | **Stable (v0.37.1)** | **Core Stability** (Memory leaks, File detection) |
| **GitHub Copilot** | High (Policy/ billing) | Low | **Stable (v1.0.22)** | **Enterprise Parity** (MCP, Policies) |
| **Kimi Code** | Medium | High | None | **Auth/Session** (Stability, Cross-instance) |
| **OpenCode** | High (Memory leaks) | High | **Stable (v1.4.2)** | **Plugin System** (Hooks, Endpoints) |
| **Qwen Code** | Medium (Rule fidelity) | High | **Nightly** | **Parallelization** (Agent teams, Batching) |

## 3. Shared Feature Directions
*   **Agent Orchestration & "Teams"**
    *   **OpenAI Codex:** Prototyping "Agent Teams" and forked agent inheritance (PRs #17250, #17247).
    *   **Qwen Code:** Explicit implementation of "Agent Teams" for multi-task coordination (PR #2886).
    *   **Trend:** Moving beyond single-shot agents to coordinated, hierarchical systems.
*   **Aggressive Token/Cost Optimization**
    *   **Charm Crush:** "Short Tool Descriptions" (~120k token savings/session).
    *   **OpenAI Codex:** Optimizing "Guardian" review to send only transcript deltas.
    *   **Claude Code:** Community alarms over "Agent Teams Cost Bug" burning 15M cached tokens.
    *   **Trend:** Users are highly sensitive to context costs; tools must optimize overhead to enable agentic workflows.
*   **Protocol Standardization (MCP/ACP)**
    *   **GitHub Copilot:** Sanitizing JSON schemas for broader MCP compatibility.
    *   **Charm Crush:** Integrating Agent Context Protocol (ACP).
    *   **Claude Code:** High demand for multiple connector accounts.
    *   **Trend:** Interoperability is becoming a requirement, not a feature.
*   **Persistent Sessions & Permissions**
    *   **Claude Code:** Demand for `managed-settings.json` persistence.
    *   **Kimi Code:** Auth fixes to prevent daily re-logins; rules not persisting.
    *   **Gemini CLI:** Fixes for "Allow for all future sessions" failing.
    *   **Trend:** Friction from repeated authorization prompts is a universal blocker to adoption.

## 4. Differentiation Analysis
*   **Anthropic (Claude Code):** Focused on **Enterprise Governance**. The addition of Perforce support, MDM templates, and strict security guidance suggests a pivot toward locking down large, regulated engineering teams.
*   **OpenAI (Codex):** Focused on **AI Engineering Infrastructure**. The heavy development on "Realtime V2" and internal "Guardian" subsystems suggests they are building the platform for AI agents to build other AI agents.
*   **GitHub (Copilot CLI):** Focused on **Ecosystem Integration**. The focus is less on CLI innovation and more on ensuring feature parity and policy enforcement between the IDE, the CLI, and the cloud.
*   **Charm (Crush) & Qwen (Qwen Code):** Focused on **Developer Experience (DX) & Performance**. Issues like "Short Tool Descriptions" (Crush) and "Intelligent Tool Parallelism" (Qwen) indicate a focus on making the CLI faster and more efficient for power users.
*   **OpenCode:** Focused on **Modularity**. Its extensive plugin hook system (`bash.env`, `bash.commands`, `/tool` endpoints) positions it as the "extensible" alternative for custom workflows.

## 5. Community Momentum & Maturity
*   **Most Stable:** **Gemini CLI** appears to be having the most "boring" (in a good way) week, focusing on fixing memory leaks and file watchers without massive architectural churn.
*   **Most Volatile:** **OpenAI Codex** is in active flux (Rust v0.119.0-alpha series), with significant community anxiety regarding billing logic and high CPU usage, suggesting it is the "bleeding edge."
*   **Most Friction:** **GitHub Copilot CLI** is suffering from "Enterprise friction," where policy enforcement bugs are blocking valid users, indicating a maturity bottleneck in scaling to corporate environments.
*   **Fastest Iterating:** **Qwen Code** and **OpenCode** are showing very high PR velocity, with Qwen specifically focusing on next-gen features (CJK segmentation, Parallelism) that competitors aren't touching yet.

## 6. Trend Signals
1.  **The "Platform vs. Tool" War:** Tools are evolving from simple CLI wrappers into full platforms. **OpenCode** is adding server endpoints for plugins; **OpenAI Codex** is managing complex agent lifecycles. Developers must decide if they want a "CLI" or a "Development Environment."
2.  **Token Anxiety is Real:** The "token burning" issues across OpenAI Codex, Claude Code, and GitHub Copilot indicate that billing transparency is a major anxiety point. Developers will flock to tools (like Charm Crush) that actively demonstrate cost-saving measures.
3.  **The "Multi-Modal" Bottleneck:** Issues with rendering diagrams (Mermaid in Gemini CLI), handling images in clipboard (Kimi Code), and processing large media (Copilot) suggest the CLI is struggling to adapt to non-text inputs.
4.  **Windows is a First-Class Pain Point:** Every tool digest mentions Windows-specific issues (PowerShell rendering, Sandbox initialization, Path handling). The ecosystem is still Unix-first, with Windows support often lagging.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of April 10, 2026*

## 1. Top Skills Ranking

Based on community engagement via Pull Requests (PRs), the following Skills have garnered the most attention and discussion:

*   **[document-typography](https://github.com/anthropics/skills/pull/514)** (PR #514)
    *   **Functionality:** A quality control skill for AI-generated documents that prevents typographic errors like orphan word wraps, widow paragraphs, and numbering misalignment.
    *   **Highlights:** Addresses a ubiquitous "last mile" problem in document generation that affects almost every user.
    *   **Status:** Open

*   **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (PR #83)
    *   **Functionality:** "Meta-skills" designed to analyze other Skills. They evaluate Skills across five dimensions (structure, documentation, etc.) and scan for security vulnerabilities (e.g., hardcoded secrets, command injection risks).
    *   **Highlights:** Represents a maturation of the ecosystem, introducing tooling to maintain code quality and security standards.
    *   **Status:** Open

*   **[frontend-design](https://github.com/anthropics/skills/pull/210)** (PR #210)
    *   **Functionality:** A significant revision to the existing frontend-design skill to improve clarity and actionability.
    *   **Highlights:** Focuses on making instructions executable within a single conversation context, reducing ambiguity for the AI.
    *   **Status:** Open

*   **[ODT (OpenDocument Text)](https://github.com/anthropics/skills/pull/486)** (PR #486)
    *   **Functionality:** Enables the creation, parsing, and template filling of `.odt` files (ISO standard used by LibreOffice, OpenOffice).
    *   **Highlights:** Expands document interoperability beyond Microsoft Office formats, supporting open-source workflows.
    *   **Status:** Open

*   **[DOCX Tracked Changes Fix](https://github.com/anthropics/skills/pull/541)** (PR #541)
    *   **Functionality:** A critical bug fix for the DOCX skill to prevent ID collisions between bookmarks and tracked changes.
    *   **Highlights:** High utility for enterprise users relying on collaboration features in Word.
    *   **Status:** Open

*   **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** (PR #147)
    *   **Functionality:** A comprehensive audit skill for identifying orphaned code, unused files, and documentation gaps, producing a `CODEBASE-STATUS.md` report.
    *   **Highlights:** Addresses "technical debt" and project hygiene, highly valuable for maintaining legacy projects.
    *   **Status:** Open

## 2. Community Demand Trends

Analysis of the [Issues tracker](https://github.com/anthropics/skills/issues) reveals the following key trends and demands:

*   **Workflow Automation & Integration:** Users are actively seeking ways to use Claude Code for operating system automation. There is significant interest in native macOS integration via AppleScript (e.g., PR #806) to bypass the limitations of screenshot-based computer use.
*   **Enterprise & Governance:** As adoption grows, so do concerns about governance. Users are proposing Skills focused on "agent governance" (Issue #412) and organizational sharing (Issue #228), indicating a push from individual power users to team-wide deployment.
*   **Standardization & Interoperability:** A recurring theme involves improving the underlying "plumbing." Issues like exposing Skills as MCPs (Model Context Protocol) (Issue #16) and improving AWS Bedrock compatibility (Issue #29) suggest the community wants Skills to be modular, standardized API components rather than isolated scripts.
*   **Trust & Verification:** Following concerns over malicious community Skills (Issue #492), there is a heightened demand for tools to verify skill authenticity and security before installation.

## 3. High-Potential Pending Skills

These PRs are active and unresolved, indicating they may be officially merged or widely adopted soon:

*   **[skill-creator: Description Optimizer](https://github.com/anthropics/skills/pull/539):** Addresses a YAML parsing bug that causes silent failures. This is a critical fix for the tool used to *make* Skills.
*   **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335):** Taps into the growing demand for generative media capabilities (Imagen, Veo) directly from the CLI.
*   **[x402 BSV Auth + Micropayment](https://github.com/anthropics/skills/pull/374):** Introduces a novel economic layer, allowing agents to discover and pay for services (e.g., "transcribe meeting.wav") via natural language.
*   **[shodh-memory](https://github.com/anthropics/skills/pull/154):** Attempts to solve the "stateless" problem of AI sessions by implementing a persistent context/memory system.

## 4. Skills Ecosystem Insight

The community is currently prioritizing **foundational infrastructure and reliability** (audit tools, security analyzers, and critical bug fixes) over purely novelty Skills, signaling a shift from experimentation to building a robust, production-ready development environment.

---

# Claude Code Community Digest | 2026-04-10

## 1. Today's Highlights

The v2.1.98 release introduces an interactive Google Vertex AI setup wizard, streamlining GCP authentication for third-party platform users. However, the community is reacting strongly to the unannounced removal of the `/buddy` feature and persistent LSP connection failures, with one critical issue regarding complex engineering tasks gathering over 1,000 upvotes before being closed. Security concerns remain top-of-mind, highlighted by new MDM deployment templates and ongoing reports of malware distribution via Google Ads.

## 2. Releases

**v2.1.98**
*   **What's New:** Added an interactive setup wizard for Google Vertex AI accessible via the login screen ("3rd-party platform" option). It guides users through GCP authentication, project/region config, credential verification, and model pinning.
*   **Configuration:** Added `CLAUDE_CODE_PERFORCE_MODE` environment variable.
*   [Release Source](https://github.com/anthropics/claude-code/releases)

## 3. Hot Issues

1.  **[#42796](https://github.com/anthropics/claude-code/issues/42796) — Model Unusability Claim (CLOSED)**
    *   **Why:** Sparks massive debate on model regression. Closed by maintainers but remains the highest-voted thread recently (1,085 👍).
    *   **Reaction:** Users report "hallucinations" and failed complex tasks in recent updates; closure caused friction.

2.  **[#45596](https://github.com/anthropics/claude-code/issues/45596) — "Bring Back Buddy"**
    *   **Why:** Sudden removal of the `/buddy` companion feature in v2.1.97 without changelog notice.
    *   **Reaction:** Community outcry over "silent removal" of a quality-of-life feature (253 👍).

3.  **[#27302](https://github.com/anthropics/claude-code/issues/27302) — Multiple Connector Accounts**
    *   **Why:** High-demand enterprise feature (145 👍) for handling multiple accounts (e.g., personal + work Gmail) within MCP.
    *   **Reaction:** Critical for users transitioning from single-account workflows to complex team environments.

4.  **[#35899](https://github.com/anthropics/claude-code/issues/35899) — Scheduled Tasks Cold Start**
    *   **Why:** Affects "Agent" reliability. Scheduled triggers fail to access MCP tools until a manual user message "warms" the session.
    *   **Reaction:** Blocks unattended automation use cases.

5.  **[#15168](https://github.com/anthropics/claude-code/issues/15168) — LSP Connection Failures**
    *   **Why:** Core tooling broken. LSP returns "No LSP server available" despite servers running.
    *   **Reaction:** Frequent "me too" comments; significantly impacts code comprehension features.

6.  **[#15148](https://github.com/anthropics/claude-code/issues/15148) — Marketplace LSP Configs Ignored**
    *   **Why:** Technical regression where `lspServers` in `marketplace.json` are not parsed.
    *   **Reaction:** Breaks expected functionality for popular plugins (typescript, pyright).

7.  **[#34622](https://github.com/anthropics/claude-code/issues/34622) — Malware Campaign (Google Ads)**
    *   **Why:** Security alert. Fake install pages distributing credential stealers via ads.
    *   **Reaction:** Community warning; urges users to verify download sources strictly.

8.  **[#43713](https://github.com/anthropics/claude-code/issues/43713) — Sandbox Bypass**
    *   **Why:** Security config bug. `autoAllowBashIfSandboxed: true` still prompts for shell expansions.
    *   **Reaction:** Undermines trust in the sandboxing permission model.

9.  **[#45958](https://github.com/anthropics/claude-code/issues/45958) — Agent Teams Cost Bug**
    *   **Why:** Financial impact. Parallel agent dispatch stalled for 90 mins, burning ~15M cached tokens.
    *   **Reaction:** Highlights billing risks associated with the new agent teams feature.

10. **[#30953](https://github.com/anthropics/claude-code/issues/30953) — Permissions Persistence**
    *   **Why:** UX friction. Desktop app doesn't remember permissions across sessions.
    *   **Reaction:** "Click-fatigue" for developers having to re-approve tools/bash on every restart.

## 4. Key PR Progress

1.  **[#41518](https://github.com/anthropics/claude-code/pull/41518) & [#41447](https://github.com/anthropics/claude-code/pull/41447) — Fully Open Source Claude Code**
    *   **Status:** OPEN
    *   **Impact:** Major community effort to reverse-engineer and open-source the CLI by extracting source from sourcemaps.
    *   **Significance:** Addresses long-standing community requests for transparency.

2.  **[#45866](https://github.com/anthropics/claude-code/pull/45866) — MDM Deployment Templates**
    *   **Status:** CLOSED (Merged)
    *   **Impact:** Adds `.plist`, `.mobileconfig`, and PowerShell templates for enterprise deployment.
    *   **Significance:** Crucial for rolling out Claude Code in large, managed organizations.

3.  **[#45865](https://github.com/anthropics/claude-code/pull/45865) — Fix Duplicate Issue Auto-Closing**
    *   **Status:** CLOSED (Merged)
    *   **Impact:** Fixes a bug where closing duplicates stripped all triage labels (bug, platform, etc.).
    *   **Significance:** Improves repo hygiene and maintainer efficiency.

4.  **[#45621](https://github.com/anthropics/claude-code/pull/45621) — Add `notify-on-complete` Plugin**
    *   **Status:** OPEN
    *   **Impact:** Provides a ready-to-use Stop hook to notify users when Claude finishes.
    *   **Significance:** Enhances UX for long-running tasks.

5.  **[#45604](https://github.com/anthropics/claude-code/pull/45604) — Add `commit-guard` Plugin**
    *   **Status:** OPEN
    *   **Impact:** Pre-commit hook to block sensitive files (.env, keys) from entering git.
    *   **Significance:** Security hardening for local development.

6.  **[#45599](https://github.com/anthropics/claude-code/pull/45599) — Add `bash-workdir-guard` Plugin**
    *   **Status:** OPEN
    *   **Impact:** Warns when `cd` or `pushd` moves outside the workspace boundary.
    *   **Significance:** Prevents accidental operations in parent directories.

7.  **[#45603](https://github.com/anthropics/claude-code/pull/45603) — Fix Security-Guidance Plugin**
    *   **Status:** OPEN
    *   **Impact:** Moves debug logs out of `/tmp` (world-readable) to `~/.claude/`.
    *   **Significance:** Fixes a minor information leak vulnerability in the plugin.

8.  **[#45675](https://github.com/anthropics/claude-code/pull/45675) — Chinese Superpowers Docs**
    *   **Status:** OPEN
    *   **Impact:** Adds documentation for 7 core skills in Chinese.
    *   **Significance:** Expands accessibility for non-English speaking developers.

9.  **[#45694](https://github.com/anthropics/claude-code/pull/45694) — Workflow JSON Fix**
    *   **Status:** OPEN
    *   **Impact:** Replaces `sed` string parsing with `jq` in logging workflows.
    *   **Significance:** Improves robustness of internal tooling.

10. **[#45798](https://github.com/anthropics/claude-code/pull/45798) — Tighten Triage Rules**
    *   **Status:** CLOSED (Merged)
    *   **Impact:** Enforces category labels (bug/enhancement) and improves duplicate detection.
    *   **Significance:** Streamlines issue tracking.

## 5. Feature Request Trends

*   **Multi-Account Support:** High demand for managing multiple connectors (Gmail, M365) and concurrent sessions without logging out.
*   **LSP & Tooling Reliability:** Users are requesting fixes for the broken LSP integration, specifically regarding marketplace plugin configuration and platform-specific (Windows/macOS) server connections.
*   **Persistence & State:** Requests for persistent permissions (managed-settings.json) and environment variables (`CLAUDE_ENV_FILE`) across sessions, particularly on Windows.
*   **UI Customization:** Resurfaced requests to disable "varied thinking status messages" and configure the status line content.

## 6. Developer Pain Points

*   **Silent Feature Removal:** The removal of `/buddy` without a changelog entry has created anxiety about stability and transparency.
*   **Sandboxing Complexity:** The `autoAllowBashIfSandboxed` setting is unreliable, prompting for permission on complex commands (expansions) that should arguably be safe within a sandbox.
*   **Agent Cost Control:** High token usage bugs during Agent Team stalls (burning cached tokens) are causing financial anxiety for power users.
*   **Platform Inconsistencies:** Windows and macOS users are facing distinct hurdles, from console flashing to M365 OAuth failures and specific bun runtime crashes on AVX-512 CPUs.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-10

## 1. Today's Highlights
The repository is experiencing a significant surge in development activity, focusing heavily on analytics infrastructure and `Realtime V2` integration. Key efforts include optimizing the "Guardian" review subsystem to reduce token overhead by sending only transcript deltas (#17269) and fixing environment proxy restoration bugs (#17271). Simultaneously, the community is vigorously debating token consumption logic, with multiple reports alleging that Business and Team accounts are being incorrectly excluded from usage limit resets.

## 2. Releases
*No stable release published today.*
The repository is actively iterating on the **Rust v0.119.0-alpha** series, pushing five alpha releases (`.25` through `.29`) in the last 24 hours. These rapid-fire pre-releases suggest ongoing stabilization efforts for the underlying Codex CLI/App runtime, likely addressing the memory and regression bugs reported in recent issues.

## 3. Hot Issues

### Token Usage & Rate Limits
**[#14593: Burning tokens very fast](https://github.com/openai/codex/issues/14593)** *(501 comments)*
*The most active thread in the tracker.* Users report excessive token consumption, often depleting weekly limits in a single session. High community frustration; requests for detailed billing logs are ongoing.

**[#17157: Have business customers been excluded from the Codex limit reset again?](https://github.com/openai/codex/issues/17157)** *(3 comments)*
A critical continuity of **[#14329](https://github.com/openai/codex/issues/14329)**. Business users claim they are systematically missing usage resets despite official announcements stating otherwise.

**[#17192: 100% weekly usage on 1 prompt](https://github.com/openai/codex/issues/17192)** *(3 comments)*
A user reports hitting their cap instantly after a reset on a Business account, reinforcing fears of a systemic accounting bug.

### Regressions & Stability
**[#15393: High CPU utilization with IDE extension](https://github.com/openai/codex/issues/15393)** *(13 comments, 👍 20)*
Reports of the VS Code extension causing significant CPU strain. Suspected related to runaway `rg` (ripgrep) processes mentioned in **[#13717](https://github.com/openai/codex/issues/13717)**.

**[#14936: bwrap: Approval prompt shown for almost every command](https://github.com/openai/codex/issues/14936)** *(38 comments, 👍 16)*
A regression in the Linux sandbox (`bwrap`) is requiring user approval for trivial commands, severely hampering workflow velocity.

**[#15162: "Open in Popup Window" replaces existing popup](https://github.com/openai/codex/issues/15162)** *(14 comments)*
A UX regression in the macOS App where opening a new popup overwrites the existing one, preventing multi-tasking.

### Environment & Agent Logic
**[#16759: Full Access still shows permission prompts](https://github.com/openai/codex/issues/16759)** *(9 comments)*
Users argue that the "Full Access" permission setting is effectively non-functional if approval prompts still appear for every action.

**[#16553: Codex becomes unresponsive on startup if `~/.ssh/config` is large](https://github.com/openai/codex/issues/16553)** *(7 comments)*
The App hangs during initialization if the user has a large SSH config file, likely due to an unoptimized parsing loop.

**[#16721: Codex Web Screenshots Are Not anymore available](https://github.com/openai/codex/issues/16721)** *(4 comments)*
Reports that the Web agent can no longer generate screenshots for React/Node projects, breaking a key workflow feature.

## 4. Key PR Progress

**[#17269: Send only transcript deltas on guardian followups](https://github.com/openai/codex/pull/17269)** (Open)
*Performance Optimization.* Instead of re-sending the full history for every Guardian review, this PR ensures only new deltas are transmitted. This is a major fix for the latency issues reported in long-running threads.

**[#17271: Fix file stale proxy env restoration after shell snapshots](https://github.com/openai/codex/pull/17271)** (Open)
*Core Bugfix.* Addresses a state management issue where managed proxy environment variables were not being correctly restored after shell state snapshots, potentially causing network failures in sandboxed environments.

**[#15981: Fix symlinked writable roots in sandbox permissions](https://github.com/openai/codex/pull/15981)** (Open)
*Security/Stability.* Complex changes to how the sandbox handles symbolic links to prevent "nested symlink escape masking" and correctly bind symlinked writable roots in `bwrap`.

**[#17264: Stream Realtime V2 Codex progress](https://github.com/openai/codex/pull/17264)** (Open)
*Feature Integration.* Enables streaming of Codex progress into Realtime V2 as user update messages, moving away from single-shot tool outputs for a more responsive user experience.

**[#17250: Inherit parent MCP manager for forked agents](https://github.com/openai/codex/pull/17250)** (Open)
*Architecture.* When an agent spawns a fork (sub-agent), it will now reuse the parent's MCP (Model Context Protocol) connection manager. This ensures the child agent has access to the exact same tools as the parent without re-initialization.

**[#17248: Inherit forked agent prompt cache keys](https://github.com/openai/codex/pull/17248)** (Open)
*Performance.* Ensures that forked agents utilize the parent's prompt cache keys, maintaining cache lineage and improving response times for sub-tasks.

**[#17247: Make forked agent spawns keep parent model config](https://github.com/openai/codex/pull/17247)** (Open)
*Configuration.* Fixes a logic gap where `spawn_agent` calls would inadvertently discard the parent thread's specific model configuration when forking.

**[#17210: Add output_schema to code mode render](https://github.com/openai/codex/pull/17210)** (Open)
*Developer Experience.* Adds `output_schema` definitions to code rendering and introduces a `ToolOrigin` type, improving type safety for MCP tools.

**[#15578: Add Windows sandbox unified exec runtime support](https://github.com/openai/codex/pull/15578)** (Open)
*Platform Support.* A massive PR adding `unified_exec` session support for the Windows sandbox, covering both restricted-token and elevated runner backends.

**[#17266: Improve hook status rendering](https://github.com/openai/codex/pull/17266)** (Open)
*UX.* Refines how hook status is displayed, keeping transient activity out of permanent history to reduce noise, unless there is meaningful output.

## 5. Feature Request Trends
*   **Manual Context Control:** There is a strong demand for granular context management. Users specifically want a **manual `/compact` command in the App** (currently CLI only) (**[#11325](https://github.com/openai/codex/issues/11325)**) and the ability to **clear context before implementing a plan** (**[#14339](https://github.com/openai/codex/issues/14339)**).
*   **Multi-Terminal Support:** Users are requesting the ability to open **multiple terminals (with tabs)** within the Codex App environment (**[#11427](https://github.com/openai/codex/issues/11427)**).
*   **Plan-to-Implementation Model Switching:** A request to allow switching the AI model (e.g., from a "High Reasoning" planning model to a "Fast" coding model) specifically when transitioning from the Plan phase to Implementation (**[#14969](https://github.com/openai/codex/issues/14969)**).
*   **Dynamic Tab Titles:** Request for automatic tab naming in the CLI/TUI based on conversation content to manage multiple concurrent sessions (**[#9849](https://github.com/openai/codex/issues/9849)**).

## 6. Developer Pain Points
*   **"YOLO Mode" vs. Safety Friction:** Developers are frustrated by excessive permission prompts, specifically criticizing the `bwrap` sandbox on Linux and the ineffective "Full Access" toggle. The sentiment is that safety features are interrupting flow without providing actual security benefits in trusted environments (**[#16759](https://github.com/openai/codex/issues/16759)**, **[#14936](https://github.com/openai/codex/issues/14936)**).
*   **Windows Instability:** The Windows experience is currently described as fragile. Issues range from **memory allocation failures** causing crashes (**[#17083](https://github.com/openai/codex/issues/17083)**) to failures in initializing the Sandbox feature (**[#17135](https://github.com/openai/codex/issues/17135)**).
*   **Silent Resource Consumption:** The combination of high CPU usage (runaway processes) and the "burning tokens" issue creates a fear of running up costs or hitting limits unknowingly. The lack of deterministic reset times for Team/Business accounts exacerbates this anxiety (**[#9508](https://github.com/openai/codex/issues/9508)**).

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest — 2026-04-10

## 1. Today's Highlights
Development activity has surged, focusing heavily on stability improvements and Agent Context Protocol (ACP) integration. Key highlights include a potential fix for critical session lockups caused by non-ASCII API errors and a major proposal to slash token usage by optimizing tool descriptions. Additionally, the UI is undergoing a visual transformation with the introduction of a robust theming system supporting 22 built-in variants.

## 2. Releases
*   **No Stable Releases:** No new stable versions were published in the last 24 hours.
*   **Nightly:** The `nightly` channel remains active, though specific changelog details were not provided in this digest cycle.

## 3. Hot Issues
*   **[#2595: Fix agent session lockup](https://github.com/charmbracelet/crush/pull/2595)**
    *   *Why it matters:* Addresses a critical bug where a 400 Bad Request (e.g., invalid base64 from an MCP server) permanently freezes the Crush session.
    *   *Reaction:* High priority; users reported total UI bricking requiring a restart.
*   **[#2588: Windows rendering performance](https://github.com/charmbracelet/crush/issues/2588)**
    *   *Why it matters:* Reports severe CPU spikes and unresponsiveness when rendering long text in PowerShell on Windows 10.
    *   *Reaction:* New users citing this as a barrier to adoption on Windows.
*   **[#2334: MCP Shell Expansion Regression](https://github.com/charmbracelet/crush/issues/2334)**
    *   *Why it matters:* Users can no longer use shell command substitution (e.g., `$(cat file.txt)`) in MCP environment configurations due to recent changes.
    *   *Reaction:* Strong request to restore previous shell-spawning behavior.
*   **[#2587: ACP Stdio Initialization Bug](https://github.com/charmbracelet/crush/issues/2587)**
    *   *Why it matters:* Using OpenCode as an ACP agent fails immediately after initialization if `session/new` is called too quickly.
    *   *Reaction:* Blocks workflow for early adopters of the ACP stdio mode.
*   **[#2586: Custom Provider Responses API](https://github.com/charmbracelet/crush/issues/2586)**
    *   *Why it matters:* Internal gateways using complex model names (e.g., `azure/openai/gpt-5.4`) cannot be forced to use the optimized Responses API.
    *   *Reaction:* Enterprise users need more granular control over API routing.
*   **[#2280: Android ARM Support](https://github.com/charmbracelet/crush/issues/2280)**
    *   *Why it matters:* No ARM variants are available for Android, limiting usage on mobile devices or termux.
    *   *Reaction:* Recurring request from mobile developers.
*   **[#2589: Hierarchical AGENTS.md](https://github.com/charmbracelet/crush/issues/2589)**
    *   *Why it matters:* Developers working in monorepos or multiple communities want a way to override or cascade `AGENTS.md` configurations.
    *   *Reaction:* Highly requested for better project organization.
*   **[#1782: Session Lockup (Non-ASCII Base64)](https://github.com/charmbracelet/crush/issues/1782)**
    *   *Why it matters:* Related to PR #2595; details specific failures with the Playwright MCP server sending invalid data.
    *   *Reaction:* Root cause analysis for the lockup fix.
*   **[#1596: Git Branch Display](https://github.com/charmbracelet/crush/issues/1596)**
    *   *Why it matters:* Users want the current git branch visible within the TUI to maintain context.
    *   *Reaction:* Popular feature request pending the `ui` branch merge.
*   **[#1293: Integrated AI Assistant](https://github.com/charmbracelet/crush/issues/1293)**
    *   *Why it matters:* Proposal for a built-in helper to configure Crush and generate documentation.
    *   *Reaction:* Interesting meta-feature, though recently closed.

## 4. Key PR Progress
*   **[#2595: Fix Session Lockup](https://github.com/charmbracelet/crush/pull/2595)**
    *   *Status:* Open.
    *   *Details:* Prevents Crush from crashing when a provider returns a non-200 response or a stuck stream. Critical for stability.
*   **[#2593: Custom Theme Support](https://github.com/charmbracelet/crush/pull/2593)**
    *   *Status:* Open.
    *   *Details:* Adds a theming system with 22 built-in themes (Catppuccin, Dracula, Nord, etc.) and support for custom JSON themes.
*   **[#2592: Short Tool Descriptions](https://github.com/charmbracelet/crush/pull/2592)**
    *   *Status:* Open.
    *   *Details:* Drastically reduces token usage (~120k savings/session) by shortening tool call descriptions. Opt-in via `CRUSH_SHORT_TOOL_DESCRIPTIONS=1`.
*   **[#2590: SSH Notifications](https://github.com/charmbracelet/crush/pull/2590)**
    *   *Status:* Open.
    *   *Details:* Implements OSC sequences to trigger desktop notifications even when running Crush via SSH.
*   **[#2582: Context Limit Overflow Fix](https://github.com/charmbracelet/crush/pull/2582)**
    *   *Status:* Open.
    *   *Details:* Implements a three-layer safeguard to prevent context window overflow and re-queues prompts after summarization.
*   **[#2584: Configurable Agent Model Size](https://github.com/charmbracelet/crush/pull/2584)**
    *   *Status:* Open.
    *   *Details:* Allows users to configure whether Task/Coder agents use `large` or `small` models by default.
*   **[#2591: Retry Mechanism & UI Handling](https://github.com/charmbracelet/crush/pull/2591)**
    *   *Status:* Open (Merged logic partially/under review).
    *   *Details:* Improves error recovery, introduces `nonRetriableError` types, and cleans up stale loading indicators in the UI.
*   **[#2512: Nix Flake Support](https://github.com/charmbracelet/crush/pull/2512)**
    *   *Status:* Open.
    *   *Details:* Adds a `flake.nix` for reproducible development environments.
*   **[#2538: Ghostty Light Theme Detection](https://github.com/charmbracelet/crush/pull/2538)**
    *   *Status:* Open.
    *   *Details:* Fixes UI rendering issues where Crush defaults to dark colors in the Ghostty terminal when a light background is active.
*   **[#2583: Hyper API Key Support](https://github.com/charmbracelet/crush/pull/2583)**
    *   *Status:* Closed/Merged.
    *   *Details:* Adds support for `HYPER_API_KEY` to bypass OAuth setup in CI/CD environments.

## 5. Feature Request Trends
*   **UI Customization & UX:** There is a strong push for visual personalization, evidenced by requests for **theming engines** (PR #2593) and **git branch integration** (#1596).
*   **Cross-Platform Compatibility:** Issues regarding **Android ARM support** (#2280) and **Windows performance** (#2588) highlight a need to optimize for non-standard CLI environments.
*   **Configuration Flexibility:** Users are demanding more granular control over agent behavior (Model Size config #2584) and complex setups (Hierarchical configs #2589, MCP env vars #2334).
*   **Cost Optimization:** The enthusiasm for **token reduction** (#2592) suggests users are highly sensitive to input costs and context limits.

## 6. Developer Pain Points
*   **Fragility of MCP/ACP Integration:** Multiple issues (#2334, #1782, #2587) indicate that integrating external Model Context Providers (MCP) and Agent Client Protocols (ACP) is currently prone to breaking sessions due to encoding errors, initialization timing, and environment variable handling.
*   **Context Window Management:** Developers are hitting token limits and context overflow errors, prompting multiple fixes and requests for better summarization safeguards (#2582, #824).
*   **Windows/Edge Case Performance:** While the tool is performant on standard Unix shells, users on **Windows** and specific terminals like **Ghostty** are experiencing rendering lag and color detection failures.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-04-10

## 1. Today's Highlights
The `gemini-cli` repository is seeing significant activity focused on core stability and performance optimization. Key developments include the release of **v0.37.1**, a major architectural overhaul to decouple the `ContextManager`, and aggressive efforts to resolve critical memory leaks affecting long-running sessions. Additionally, the community is actively discussing terminal UI rendering artifacts and file system watching capabilities.

## 2. Releases
*   **v0.39.0-nightly.20260409** | [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.39.0-nightly.20260409)
    *   Updated the `ink` dependency to version 6.6.8 to improve rendering engine compatibility.
    *   Updated changelogs for previous preview versions.
*   **v0.37.1** | [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.37.0...v0.37.1)
    *   Released to stable channel; specific patch notes were automated via PR #25055.

## 3. Hot Issues
*   [#24729 / #24981: Newly created files not detected by `@` function](https://github.com/google-gemini/gemini-cli/issues/24729)
    *   **Why it matters**: Breaks the workflow when the agent generates files; users cannot immediately reference them without restarting the CLI.
    *   **Reaction**: High frustration (👍 1); affects core file context workflow.
*   [#17906: False-positive "quota exhausted" errors in headless mode](https://github.com/google-gemini/gemini-cli/issues/17906)
    *   **Why it matters**: Causes confusion during automated scripts; logs imply failure despite the operation succeeding on retry.
    *   **Reaction**: Validated as a bug (Status: CLOSED).
*   [#24916: Repeated permission prompts for the same file](https://github.com/google-gemini/gemini-cli/issues/24916)
    *   **Why it matters**: "Allow for all future sessions" setting appears to fail, leading to repetitive approvals.
    *   **Reaction**: Annoyance regarding configuration persistence.
*   [#24202: Text scrambled over SSH (Windows -> gLinux)]](https://github.com/google-gemini/gemini-cli/issues/24202)
    *   **Why it matters**: Critical usability blocker for users remoting into cloud environments.
    *   **Reaction**: Status marked as a possible duplicate, suggesting a systemic terminal handling issue.
*   [#15503: Request for Colorblind-friendly themes](https://github.com/google-gemini/gemini-cli/issues/15503)
    *   **Why it matters**: Accessibility request for "GitHub Dark/Light Colorblind" themes.
    *   **Reaction**: Community support (Help Wanted).
*   [#11462: Visual Regression Testing for UI](https://github.com/google-gemini/gemini-cli/issues/11462)
    *   **Why it matters**: Proposal to prevent UI bugs. A corresponding PR (#20695) is now open.
    *   **Reaction**: Strong support for maintaining UI quality.
*   [#21230: Visualize tool (Mermaid diagrams)](https://github.com/google-gemini/gemini-cli/issues/21230)
    *   **Why it matters**: Highly requested feature to render architecture diagrams as ASCII art in the terminal.
    *   **Reaction**: High community interest (Help Wanted).
*   [#22745: AST-aware file reads and codebase mapping](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **Why it matters**: Investigating if Abstract Syntax Tree (AST) integration can improve code context accuracy and reduce noise.
    *   **Reaction**: Strategic exploration for the Agent's core capabilities.
*   [#25074: Timer leak in error paths](https://github.com/google-gemini/gemini-cli/issues/25074)
    *   **Why it matters**: specific technical bug where `setTimeout` is not cleared on error, potentially causing instability in long sessions.
    *   **Reaction**: Rapidly identified and patched.
*   [#22844: TypeScript execution in "Run Current File" debug config](https://github.com/google-gemini/gemini-cli/issues/22844)
    *   **Why it matters**: VS Code debug configuration attempts to run `.ts` files with Node directly, causing crashes.
    *   **Reaction**: Fix available in PR #22894.

## 4. Key PR Progress
*   [#25075: Automated usage metrics for behavioral evals](https://github.com/google-gemini/gemini-cli/pull/25075)
    *   Adds reporting for turns, input/output tokens, and cached tokens to the evaluation suite, helping monitor agent cost and efficiency.
*   [#25077: Optimize Windows sandbox initialization](https://github.com/google-gemini/gemini-cli/pull/25077)
    *   Offloads file system ACL modifications to a native C# helper, significantly speeding up CLI startup on Windows.
*   [#24840: Detect newly created files in `@` recommendations](https://github.com/google-gemini/gemini-cli/pull/24840)
    *   **Critical Fix**: Enables the CLI to dynamically detect files created by the agent so they appear in the mention menu without a restart.
*   [#25049: Fix lifecycle memory leaks](https://github.com/google-gemini/gemini-cli/pull/25049)
    *   Addresses severe memory growth in long sessions by cleaning up listeners and closures in `TerminalBuffer`.
*   [#24752: Decoupled ContextManager and Sidecar architecture](https://github.com/google-gemini/gemini-cli/pull/24752)
    *   **Major Architecture**: Refactors the core context management to improve separation of concerns.
*   [#25072: Favorite models and model cycling](https://github.com/google-gemini/gemini-cli/pull/25072)
    *   Implements the ability to favorite models and cycle through them, addressing UX workflow requests.
*   [#21231: Add `visualize` tool and `/visualize` command](https://github.com/google-gemini/gemini-cli/pull/21231)
    *   Integrates Mermaid diagram rendering directly into the terminal.
*   [#20695: Implement visual regression testing](https://github.com/google-gemini/gemini-cli/pull/20695)
    *   Adds tests for `SettingsDialog` to prevent UI rendering regressions.
*   [#25076: Clear timeout on all exit paths](https://github.com/google-gemini/gemini-cli/pull/25076)
    *   Hotfix for the `generateIntentSummary` timer leak.
*   [#22894: Fix VS Code run current file (TS)](https://github.com/google-gemini/gemini-cli/pull/22894)
    *   Updates the `launch.json` config to use `node --import tsx` for proper TypeScript execution.

## 5. Feature Request Trends
*   **Enhanced Terminal Visualization**: There is a strong push for better in-terminal visualization, ranging from ASCII diagrams (Mermaid) to visual regression testing to ensure UI consistency.
*   **Workflow Personalization**: Users are asking for more control over their environment, specifically requesting "Favorite Models" for quick switching and colorblind-friendly themes for accessibility.
*   **AST Integration**: A technical trend is emerging toward "AST-aware" operations, with the team actively investigating using syntax trees to improve code search and context mapping.

## 6. Developer Pain Points
*   **File Watcher Latency**: The most frequent complaint is the CLI's inability to immediately detect files created during a session, forcing users to restart or wait to use `@` mentions.
*   **Terminal UI Stability**: Users are reporting specific rendering issues, including "thick black borders," "scrambled text over SSH," and "scroll jumping," suggesting instability in the `ink` rendering layer or terminal buffer management.
*   **Permission Fatigue**: The tool approval system is triggering repeated prompts for the same files despite "allow all" settings, interrupting developer flow.
*   **Memory Leaks**: Long-running sessions are becoming unusable due to memory bloat, which is now being actively addressed in PR #25049.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-10

**Data Source:** `github.com/github/copilot-cli`

---

## 1. Today's Highlights
The Copilot CLI team released **v1.0.22**, focusing heavily on MCP (Model Context Protocol) stability and rendering performance. This release addresses immediate compatibility issues with non-standard JSON schemas and improves inline rendering, while the community continues to grapple with persistent enterprise policy enforcement bugs and HTTP/2 connection instabilities affecting premium request consumption.

---

## 2. Releases
**v1.0.22** (2026-04-09)
*   **MCP Compatibility:** Sanitization of non-standard JSON schemas ensures tools work across all model providers.
*   **Rendering:** New simplified inline renderer improves performance.
*   **Enterprise:** Added clear messaging prompting users to contact their organization for specific configuration issues.
*   **Media:** Better handling of large images from MCP and extension tools.

---

## 3. Hot Issues
Here are the top 10 issues drawing significant community attention:

1.  **[Model Availability Issues](https://github.com/github/copilot-cli/issues/1703)** *(#1703)*
    *   **Why it matters:** Users report that models available in VS Code Copilot (e.g., Gemini 3.1 Pro) are missing in the CLI, despite being enabled in org settings.
    *   **Reaction:** 31 👍 highlights frustration with feature parity between IDE and CLI tools.

2.  **[MCP Policy False Positives](https://github.com/github/copilot-cli/issues/2236)** *(#2236, CLOSED)*
    *   **Why it matters:** A critical bug where valid MCP servers were blocked by a false "disabled by organization" warning.
    *   **Reaction:** 67 👍 indicates this broke workflows for many enterprise users; marked as closed in recent updates.

3.  **[Model Listing Failures](https://github.com/github/copilot-cli/issues/1081)** *(#1081)*
    *   **Why it matters:** `AggregateError: Failed to list models` prevents authenticated enterprise users from executing any commands.
    *   **Reaction:** 8 👍; remains open despite recent updates.

4.  **[Sporadic Policy Blocking](https://github.com/github/copilot-cli/issues/1595)** *(#1595)*
    *   **Why it matters:** Users with valid Enterprise subscriptions are hit with "access denied by Copilot policy" when trying to list models.
    *   **Reaction:** 8 👍; suggests inconsistency in policy enforcement logic.

5.  **[Claude Sonnet 4.5 Errors](https://github.com/github/copilot-cli/issues/2597)** *(#2597)*
    *   **Why it matters:** Claude Sonnet 4.5 appears in the model list but returns a 400 error when invoked.
    *   **Reaction:** 14 comments in 24 hours; suggests a backend configuration mismatch.

6.  **[Infinite Premium Request Consumption](https://github.com/github/copilot-cli/issues/2591)** *(#2591)*
    *   **Why it matters:** A single session request is consuming 80-100 premium requests due to counting logic on tool invocations.
    *   **Reaction:** 3 👍; high urgency due to billing impact.

7.  **[Clipboard Copy Regression (Linux)](https://github.com/github/copilot-cli/issues/2082)** *(#2082)*
    *   **Why it matters:** The standard `ctrl+shift+c` shortcut no longer copies text in Linux terminals.
    *   **Reaction:** 4 👍; UX regression for Linux developers.

8.  **[HTTP/2 GOAWAY Race Conditions](https://github.com/github/copilot-cli/issues/2421)** *(#2421)*
    *   **Why it matters:** Network instability causes cascading retries and silent "waste" of premium requests.
    *   **Reaction:** 16 👍; technical deep-dive into the `undici` HTTP/2 pool implementation.

9.  **[Return "No Alt Screen"](/github/copilot-cli/issues/2334)** *(#2334)*
    *   **Why it matters:** Developers strongly dislike the new alternate screen mode, citing loss of scrollback history and text search capabilities.
    *   **Reaction:** 16 👍; strong demand for a flag to revert the UI change.

10. **[Support Gemini 3.1 Pro](https://github.com/github/copilot-cli/issues/1664)** *(#1664)*
    *   **Why it matters:** Formal request to add support for Google's Gemini 3.1 Pro model.
    *   **Reaction:** 25 👍.

---

## 4. Key PR Progress
**Note:** Only 1 PR was updated in the last 24 hours.

*   **[PR #2556: Developer skill](https://github.com/github/copilot-cli/pull/2556)** *(CLOSED)*
    *   **Description:** "Level up skills."
    *   **Status:** Closed shortly after creation; appears to be a test or low-level internal change rather than a major feature ship.

*(No other PRs showed significant activity in this reporting period.)*

---

## 5. Feature Request Trends
Based on issue activity, the community is asking for:

*   **Model Parity:** Strong demand for CLI to support the same models available in VS Code Copilot (specifically **Gemini 3.1 Pro** and **Opus 4.6** with 1M token context).
*   **UI/UX Flexibility:** A significant pushback against the "alt-screen" UI, with requests for a `--no-alt-screen` flag to restore standard terminal scrollback and search functionality.
*   **Agent Modes:** Requests for an `/ask` mode to query the LLM without automatically triggering file edits or command execution ("Chat only" mode).
*   **Configuration Management:** Users want default configuration files for permissions to avoid re-authorizing every tool in every new session.

---

## 6. Developer Pain Points
Recurring themes causing friction:

*   **Enterprise Policy "False Positives":** A recurring trend of valid Enterprise users being blocked by "Copilot policy" errors when trying to access models or MCP servers they are explicitly authorized to use.
*   **Billing Anxiety:** Bugs that cause infinite retries or consume premium requests for internal "thinking" steps are causing major concern regarding cost management.
*   **Network Stability:** The HTTP/2 GOAWAY errors are not just transient failures; they are causing workflows to hang and waste API quotas.
*   **Terminal UX:** The introduction of alternate screen mode has disrupted muscle memory for copying, pasting, and scrolling, particularly affecting Linux users (`ctrl+shift+c`).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-04-10

**Data Source:** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

### 1. Today's Highlights
Today's activity is dominated by a critical focus on **authentication stability**, with a series of PRs targeting the frequent "Authorization failed" errors forcing users to re-login multiple times a day. Concurrently, the maintainers are pushing significant quality-of-life improvements, including better session management tools and patches for the Web UI and MCP (Model Context Protocol) server stability. Notably, the project is also witnessing a massive architectural proposal to rewrite the CLI core from Python to Bun/TypeScript.

### 2. Releases
*No new releases detected in the last 24 hours.*

---

### 3. Hot Issues
Here are the top issues updated recently, highlighting user friction points:

*   **[#1623 [bug]](https://github.com/MoonshotAI/kimi-cli/issues/1623)**: Unwanted Web Page Refreshes
    *   **Why it matters:** Users report that the Kimi Web interface refreshes automatically, interrupting workflow and potentially losing state.
    *   **Reaction:** 1 upvote; affects user experience significantly.
*   **[#1814 [enhancement]](https://github.com/MoonshotAI/kimi-cli/issues/1814)**: CLI Method to List Sessions
    *   **Why it matters:** Currently, resuming work requires navigating internal menus. Users want a native CLI flag (e.g., `kimi-cli --list-sessions`) to quickly find and switch sessions without entering the tool first.
    *   **Reaction:** New request; high utility for power users.
*   **[#1808 [enhancement]](https://github.com/MoonshotAI/kimi-cli/issues/1808)**: Remembering "No Auto-Git Push" Rules
    *   **Why it matters:** The AI agent ignores negative constraints regarding Git operations, repeatedly attempting auto-pushes after being told not to.
    *   **Reaction:** Highlights a gap in prompt adherence/memory for long-running tasks.
*   **[#1809 [bug]](https://github.com/MoonshotAI/kimi-cli/issues/1809)**: Empty Context Token Limits
    *   **Why it matters:** Users are hitting token limits even when the context appears empty, suggesting a metadata or calculation overhead issue.

---

### 4. Key PR Progress
Significant development work focusing on auth resilience, agent lifecycle, and platform parity:

*   **[#1822 [fix(auth)]](https://github.com/MoonshotAI/kimi-cli/pull/1822)**: Cross-process File Locking
    *   **Description:** Adds file locking to `credentials/kimi-code.json`. This prevents race conditions when multiple instances (Terminal + VS Code + Web) try to refresh tokens simultaneously.
*   **[#1819 [fix(auth)]](https://github.com/MoonshotAI/kimi-cli/pull/1819)**: Retry on 401 Unauthorized
    *   **Description:** Addresses the root cause of daily forced logins. Confirmed access tokens expire after 15 minutes; this PR implements a reactive refresh mechanism upon receiving a 401 error.
*   **[#1818 [feat]](https://github.com/MoonshotAI/kimi-cli/pull/1818)**: Implement `list-sessions`
    *   **Description:** Directly addresses Issue #1814. Adds functionality to query existing sessions via CLI arguments.
*   **[#1767 [feat(web)]](https://github.com/MoonshotAI/kimi-cli/pull/1767)**: YOLO Mode for Web UI
    *   **Description:** Extends the "auto-approve" (YOLO) mode to the Web Interface, allowing users to toggle non-interactive execution from the browser.
*   **[#1802 [fix(soul)]](https://github.com/MoonshotAI/kimi-cli/pull/1802)**: Keep Agent Loop Alive
    *   **Description:** Fixes a bug where the agent loop would exit prematurely while background tasks were still running, effectively killing pending work.
*   **[#1816 [fix(web,mcp)]](https://github.com/MoonshotAI/kimi-cli/pull/1816)**: Graceful MCP Degradation
    *   **Description:** Prevents the Web UI worker from crashing entirely if an MCP server fails to load (e.g., port conflicts).
*   **[#1777 [feat]](https://github.com/MoonshotAI/kimi-cli/pull/1777)**: Three-tier Rules System
    *   **Description:** A major structural enhancement to how rules/constraints are managed, likely addressing the "forgetting rules" issues seen in Issue #1808.
*   **[#1707 [refactor]](https://github.com/MoonshotAI/kimi-cli/pull/1707)**: Python to Bun/TypeScript Rewrite
    *   **Description:** A massive, ongoing rewrite effort (166 files, ~32k LOC) moving the CLI from Python to a Bun + TypeScript + React Ink stack for better performance and modern tooling.
*   **[#1813 [fix(hooks)]](https://github.com/MoonshotAI/kimi-cli/pull/1813)**: Multimodal Input Fix
    *   **Description:** Ensures text is correctly extracted from `UserPromptSubmit` events when multimodal content (text + images) is involved.
*   **[#1812 [fix(shell)]](https://github.com/MoonshotAI/kimi-cli/pull/1812)**: Clipboard Paste Crash
    *   **Description:** Fixes a crash triggered by `Ctrl+V` when the clipboard contains non-text data (like images) or is empty.

---

### 5. Feature Request Trends
Based on the latest issues and PRs, the community is asking for:

1.  **CLI Ergonomics:** A strong demand for command-line arguments to manage sessions (`--list-sessions`, `--session`) without navigating interactive menus.
2.  **Agent "Memory" & Rules:** Users are frustrated that the AI does not reliably adhere to specific constraints (like "don't push git") over time.
3.  **YOLO Mode Expansion:** Users want the auto-approve functionality available everywhere, specifically extending it from the CLI/TUI to the Web UI.

---

### 6. Developer Pain Points
*   **Authentication Fragility:** The current auth implementation (15-minute token expiry without background refresh) causes frequent disruptions (3-4 logins/day), which is currently the top priority for fixes.
*   **Stability in Multi-Instance Scenarios:** Developers running the CLI, VS Code extension, and Web UI simultaneously face credential conflicts and race conditions.
*   **Session Management:** It is difficult to locate and switch between previous working sessions, leading to lost context and time.
*   **Platform Inconsistencies:** Bugs appear to be platform-specific (e.g., Safari IME issues, Windows clipboard handling), making the developer experience inconsistent across OS environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-10

## 1. Today's Highlights
OpenCode v1.4.2 has been released, focusing on UI responsiveness fixes for both the TUI and Desktop clients. The community is actively troubleshooting memory management issues and file system sandboxing, while significant progress is being made on the plugin architecture with new hooks and server endpoints for better tool integration.

## 2. Releases
**v1.4.2**
*   **TUI:** Fixed a bug where subagents were not clickable until they finished processing.
*   **Desktop:** Removed the forced loading delay during the app connection phase, improving startup speed.
*   **View Changelog:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

**v1.4.1**
*   **Core:** Fixed `clangd` incorrectly identifying `CMakeLists.txt` as the project root in C/C++ workspaces. Added permission prompts for GitLab Duo Workflow tool calls.
*   **TUI:** Minor visual fixes.

## 3. Hot Issues
1.  **[#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (👍 20)
    *   **Topic:** Performance/Core
    *   **Why it matters:** Central tracking point for widespread memory leaks. The team is requesting heap snapshots from users to diagnose high RSS usage and freezes.
2.  **[#8501 Allow expanding pasted text](https://github.com/anomalyco/opencode/issues/8501)** (👍 123)
    *   **Topic:** Feature Request
    *   **Why it matters:** High demand for the ability to edit or view summarized "pasted" text blocks, which currently act as black boxes in the prompt context.
3.  **[#20954 Copilot Models Unusable](https://github.com/anomalyco/opencode/issues/20954)** (👍 0)
    *   **Topic:** Bug
    *   **Why it matters:** Users with active subscriptions cannot use GitHub Copilot models (including 5.2-Codex), receiving "not supported" errors despite correct configurations.
4.  **[#8598 Copilot Model Support Regression](https://github.com/anomalyco/opencode/issues/8598)** (Closed, 👍 11)
    *   **Topic:** Bug
    *   **Why it matters:** Recent updates broke compatibility with specific Copilot models. While closed, comments indicate ongoing frustration for some users.
5.  **[#12240 macOS Orphaned Processes](https://github.com/anomalyco/opencode/issues/12240)** (👍 0)
    *   **Topic:** Bug/Memory
    *   **Why it matters:** Identifies the root cause of macOS desktop white screens as orphaned processes accumulating memory. A proposed fix involves cleaning up `opencode-cli` processes.
6.  **[#21784 Review Modal Shows Entire File](https://github.com/anomalyco/opencode/issues/21784)** (👍 0)
    *   **Topic:** Bug (Regression)
    *   **Why it matters:** The "Review Git changes" tab in Desktop v1.4.2 now displays the full file content instead of the diff, severely hampering code review workflows.
7.  **[#21761 SessionSummary Performance Loop](https://github.com/anomalyco/opencode/issues/21761)** (👍 0)
    *   **Topic:** Performance
    *   **Why it matters:** A critical bug where `SessionSummary` loads full history on every tool finish-step, causing multi-GB RAM growth and TUI freezes.
8.  **[#21733 Filesystem Sandbox Request](https://github.com/anomalyco/opencode/issues/21733)** (Closed, 👍 1)
    *   **Topic:** Feature/Security
    *   **Why it matters:** Users want a sandboxed mode similar to Claude Code (auto-allow project, block external writes) to avoid frequent permission prompts.
9.  **[#20368 Coordinator Shell + Fork Mode](https://github.com/anomalyco/opencode/issues/20368)** (👍 1)
    *   **Topic:** Core Architecture
    *   **Why it matters:** A proposal for a new subagent execution mode ("fork mode") to allow parallel processing and better state management.
10. **[#21746 Gemma 4 Reasoning Issues](https://github.com/anomalyco/opencode/issues/21746)** (👍 0)
    *   **Topic:** Bug
    *   **Why it matters:** Local models like Gemma 4 26B are not triggering reasoning/thinking modes, reducing their effectiveness for agentic tasks.

## 4. Key PR Progress
1.  **[#21777 feat(server): /tool, /status, /exec endpoints](https://github.com/anomalyco/opencode/pull/21777)**
    *   **Impact:** Adds new API endpoints allowing plugins to inject tool results, check status, and execute tools programmatically.
2.  **[#21774 fix(bash): compose plugin PATH](https://github.com/anomalyco/opencode/pull/21774)**
    *   **Impact:** Critical fix preventing plugins from overwriting the system `PATH`, ensuring basic system commands remain available.
3.  **[#21415 fix(copilot): Cache provider](https://github.com/anomalyco/opencode/pull/21415)**
    *   **Impact:** Addresses TUI blocking issues during startup by caching the Copilot provider and moving requests to the background.
4.  **[#20764 sdk(js): use cross-spawn](https://github.com/anomalyco/opencode/pull/20764)**
    *   **Impact:** Fixes Windows startup failures (`ENOENT`) by improving how the SDK spawns child processes for `.cmd` executables.
5.  **[#21756 feat(bash): add env parameter](https://github.com/anomalyco/opencode/pull/21756)**
    *   **Impact:** Allows plugins and users to pass environment variables directly to spawned bash processes.
6.  **[#21719 refactor(tui): switch to global events](https://github.com/anomalyco/opencode/pull/21719)**
    *   **Impact:** Major architectural refactor to support workspaces better in the SDK, allowing dynamic directory switching.
7.  **[#16981 fix: handle system messages](https://github.com/anomalyco/opencode/pull/16981)**
    *   **Impact:** Fixes template errors when using local models (e.g., Qwen) that require specific system message placement.
8.  **[#21776 feat(plugin): bash.commands hook](https://github.com/anomalyco/opencode/pull/21776)**
    *   **Impact:** Introduces a hook for plugins to exempt specific CLI commands from execution timeouts.
9.  **[#18767 feat(app): Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)**
    *   **Impact:** Improves the OpenCode App experience for mobile and touch devices.
10. **[#12370 feat(github): add configurable share domain](https://github.com/anomalyco/opencode/pull/12370)**
    *   **Impact:** Adds `OPENCODE_SHARE_DOMAIN` and `OPENCODE_SHARE_PATH` environment variables for custom deployments.

## 5. Feature Request Trends
*   **Plugin & Hook Expansion:** There is a strong push for enhancing the plugin system, specifically requests for more granular control over shell environments (`bash.env`, `bash.commands`) and server endpoints for programmatic interaction.
*   **Workspace & Multi-Agent Management:** Users are requesting features to manage multiple workspaces more efficiently and propose "Coordinator" or "Fork" modes for advanced subagent workflows.
*   **UI/UX Improvements:** High demand for better markdown rendering in the TUI (visual hierarchy for headings, better tables) and the ability to expand summarized/pasted text.

## 6. Developer Pain Points
*   **Memory Instability:** Memory leaks and high RAM usage (often leading to crashes or white screens) remain the top concern for macOS and Desktop users, frequently linked to orphaned processes or session summary loops.
*   **Windows Compatibility:** Developers on Windows continue to face issues ranging from path resolution (`ENONET`) to backend processes not stopping correctly on `SIGTERM`.
*   **Model Integration Frustrations:** There is recurring friction regarding GitHub Copilot integration (unsupported model errors) and local LLMs (reasoning modes not triggering).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-10

## 1. Today's Highlights
The `v0.14.2-nightly` release landed today, primarily targeting UI stability with fixes for dead directory states and race conditions in tool call interactions. Parallelization remains a major development theme, as evidenced by new PRs proposing parallel tool execution, batched operations, and experimental Agent Teams for multi-task coordination.

## 2. Latest Releases
**v0.14.2-nightly.20260409.f208801b0**
*   **[PR #2891](https://github.com/QwenLM/qwen-code/pull/2891)**: `fix(ui)`: Removed dead directory states and unused parameters from `InputPrompt` to clean up UI logic.
*   **[PR #2872](https://github.com/QwenLM/qwen-code/pull/2872)**: `fix(followup)`: Addressed a critical race condition where the "Enter" key could accept buffer text prematurely, alongside fixes for tool call UI leaks.

## 3. Hot Issues

1.  **[[#3037] Model List vs. API Parity](https://github.com/QwenLM/qwen-code/issues/3037)**
    *   **Summary:** The CLI lists `qwen3.6-plus` as an option, but the API returns a 400 error stating the model is unsupported.
    *   **Impact:** Blocks users from accessing specific promoted models directly.
2.  **[[#2973] System Prompt Adherence](https://github.com/QwenLM/qwen-code/issues/2973)**
    *   **Summary:** Significant degradation in the model's ability to follow complex system prompts.
    *   **Reaction:** 5 comments in 24 hours; users reporting that agent behavior is becoming unpredictable.
3.  **[[#3049] Truncated Tool Calls](https://github.com/QwenLM/qwen-code/issues/3049)**
    *   **Summary:** When generating large files (e.g., HTML), the `WriteFile` tool fails due to `max_tokens` truncation, causing missing `file_path` parameters.
    *   **Impact:** Critical blocker for automated content generation tasks.
4.  **[[#3053] CLI Dark Theme Contrast](https://github.com/QwenLM/qwen-code/issues/3053)**
    *   **Summary:** Text output in iTerm2 (dark theme) has poor visibility/contrast.
    *   **Impact:** Affects usability for developers working in standard terminal environments.
5.  **[[#674] QWEN.md Rules Ignored (P1)](https://github.com/QwenLM/qwen-code/issues/674)**
    *   **Summary:** Long-standing issue where the CLI systematically ignores rules defined in project `QWEN.md` files.
    *   **Reaction:** Persistent community requests for strict adherence to local project rules.
6.  **[[#3019] Subagent Skill Triggering](https://github.com/QwenLM/qwen-code/issues/3019)**
    *   **Summary:** Subagents fail to trigger defined skills or ignore skill requirements during execution in v0.14.1.
    *   **Impact:** Reduces the reliability of complex agentic workflows.
7.  **[[#2709] Token Waste in IDE Edit](https://github.com/QwenLM/qwen-code/issues/2709)**
    *   **Summary:** When accepting edits in the IDE, the full file content is re-injected into `tool_call` args, causing massive token waste.
    *   **Impact:** Significantly increases API costs for long files.
8.  **[[#3032] Chat Deletion](https://github.com/QwenLM/qwen-code/issues/3032)**
    *   **Summary:** No UI option to delete chats in the VSCode extension; users must manually delete files from `.qwen/`.
    *   **Reaction:** High demand for basic session management hygiene features.
9.  **[[#3055] Session Corruption on Restart](https://github.com/QwenLM/qwen-code/issues/3055)**
    *   **Summary:** Interrupting a session and restarting VSCode spawns multiple "todos" and breaks normal reply flow.
    *   **Impact:** Major workflow disruption requiring manual cleanup of state files.
10. **[[#1104] Git Checkpoint Failures](https://github.com/QwenLM/qwen-code/issues/1104)**
    *   **Summary:** App crashes with "Unhandled Promise Rejection" if initialized outside a git repo.
    *   **Impact:** Limits usability in non-git directories or scratchpads.

## 4. Key PR Progress

1.  **[[#3034] LSP Diagnostics Caching](https://github.com/QwenLM/qwen-code/pull/3034)**
    *   **Feature:** Introduces caching for LSP diagnostics to handle pull request failures gracefully.
    *   **Benefit:** Increases resilience of code analysis features.
2.  **[[#2911] ConfigTool (Programmatic Config)](https://github.com/QwenLM/qwen-code/pull/2911)**
    *   **Feature:** Agents can now read/write settings (e.g., switching models) via a `ConfigTool` without user intervention.
    *   **Benefit:** Enables complex multi-stage workflows (e.g., analysis with a large model, generation with a small one).
3.  **[[#2942] CJK Word Segmentation](https://github.com/QwenLM/qwen-code/pull/2942)**
    *   **Feature:** Adds intelligent word segmentation for Chinese/Japanese/Korean text in the CLI.
    *   **Benefit:** Fixes `Ctrl+Arrow` navigation for CJK users, allowing word-by-word jumping instead of jumping the whole block.
4.  **[[#2864] Intelligent Tool Parallelism](https://github.com/QwenLM/qwen-code/pull/2864)**
    *   **Feature:** Implements batching for read-only tools (e.g., Read, Grep) so they execute in parallel rather than sequentially.
    *   **Benefit:** Significant speedup for information gathering phases.
5.  **[[#3064] Disallowed Tools for Agents](https://github.com/QwenLM/qwen-code/pull/3064)**
    *   **Feature:** Adds a `disallowedTools` blocklist to agent definitions (supports patterns like `mcp__slack`).
    *   **Benefit:** Improved safety and control over sub-agent capabilities.
6.  **[[#3069] Persist Permissions](https://github.com/QwenLM/qwen-code/pull/3069)**
    *   **Fix:** Ensures "Allow always" permission in compact mode persists correctly for the project scope.
    *   **Benefit:** Fixes annoying repeated permission prompts.
7.  **[[#2550] Fix VSCode Input Lag](https://github.com/QwenLM/qwen-code/pull/2550)**
    *   **Fix:** Resolves severe input lag (5+ seconds) in long conversations by optimizing React rendering.
    *   **Benefit:** Critical performance fix for IDE users.
8.  **[[#3031] Fallback for IDE Diff](https://github.com/QwenLM/qwen-code/pull/3031)**
    *   **Fix:** If the IDE diff viewer fails to open, the system falls back to CLI confirmation.
    *   **Benefit:** Prevents workflow stalls when the IDE companion disconnects.
9.  **[[#2871] Queue Input Editing](https://github.com/QwenLM/qwen-code/pull/2871)**
    *   **Feature:** Allows users to edit queued messages using `Arrow Up` or `ESC` before the AI processes them.
    *   **Benefit:** Fixes UX friction where typos in queued prompts were unavoidable.
10. **[[#2932] Enhanced /review Command](https://github.com/QwenLM/qwen-code/pull/2932)**
    *   **Feature:** Upgrades `/review` with deterministic analysis, autofix capabilities, and security hardening.
    *   **Benefit:** Brings Qwen Code's review features closer to parity with competitors like Copilot and Claude.

## 5. Feature Request Trends
*   **Parallel Execution:** There is a strong push for parallelizing operations. Users are requesting `/batch` commands for file operations [[#3043](https://github.com/QwenLM/qwen-code/issues/3043)], and developers are actively implementing parallel tool execution [[#2864](https://github.com/QwenLM/qwen-code/pull/2864)] and Agent Teams [[#2886](https://github.com/QwenLM/qwen-code/pull/2886)].
*   **Session Management:** Multiple requests for better chat history controls, including deleting chats [[#3032](https://github.com/QwenLM/qwen-code/issues/3032)], renaming sessions [[#2999](https://github.com/QwenLM/qwen-code/issues/2999)], and a `/chat` command to manage sessions similar to `iflow` CLI [[#3025](https://github.com/QwenLM/qwen-code/issues/3025)].
*   **UI/UX Polish:** Users are asking for QoL improvements such as copy buttons for responses [[#3052](https://github.com/QwenLM/qwen-code/issues/3052)], prompt enhancement features [[#3059](https://github.com/QwenLM/qwen-code/issues/3059)], and resolving ambiguous UI labels like "详细" [[#3047](https://github.com/QwenLM/qwen-code/issues/3047)].

## 6. Developer Pain Points
*   **Context & Rule Fidelity:** A major frustration is Qwen Code's inconsistent adherence to `QWEN.md` rules and system prompts. Issues #674, #494, and #1301 all describe the agent ignoring custom instructions, leading to "hallucinated" workflows or content filtering errors that should have been suppressed.
*   **IDE Reliability:** VSCode users are facing "input lag" in long sessions and corruption issues if the network drops or the window is closed (Issue #3055). The friction between the CLI and the IDE companion (e.g., diff viewer failing) remains a point of failure.
*   **Tool Execution Failures:** Recent regressions in the `edit` tool (Issue #1922) and `WriteFile` tool (Issue #3049) are causing direct productivity loss, as the agent fails to perform fundamental file modifications reliably.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*