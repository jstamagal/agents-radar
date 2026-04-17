# AI CLI Tools Community Digest 2026-04-17

> Generated: 2026-04-17 00:17 UTC | Tools covered: 8

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

# AI Developer Tools Ecosystem Report: 2026-04-17

## 1. Ecosystem Overview
The AI developer tools landscape is currently navigating a complex transition phase marked by **rapid model iteration** and **growing user expectations for stability**. The industry-wide push toward "Reasoning Models" (e.g., Claude Opus 4.7, GPT 5.4) is exposing architectural debt in many CLI clients, specifically regarding parameter normalization and "thinking" block visualization. Concurrently, a distinct **platformization war** is underway, with tools vying to become the central operating system for development workflows—moving beyond simple chat interfaces to encompass complex agent orchestration, "Goal Modes," and extensibility hooks. However, this aggressive feature expansion is leading to **increased technical debt**, as evidenced by widespread reports of regressions, sandboxing failures, and authentication instability across the ecosystem.

## 2. Activity Comparison

| Tool | Issue Activity | PR Velocity | Release Status | Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **High** (10 Critical Issues) | Medium | **v2.1.112** (Active) | Model Capability Expansion |
| **OpenAI Codex** | **High** (Regressions) | **High** (Refactoring) | v0.122.0-alpha (Rust) | Infrastructure & CLI Parity |
| **Charm Crush** | **Low** (Stable) | **High** (Features) | **v0.59.0** (Polished) | UX & Tooling Discovery |
| **Gemini CLI** | **Medium** (Stability) | **High** (Hardening) | Pending Release | Safety & Sandboxing |
| **GitHub Copilot CLI** | **High** (Limits/UX) | None Listed | v1.0.31 (Hotfix) | Rate Limiting & Hygiene |
| **Kimi Code** | **Medium** (Visuals) | Medium | Main Branch Build | "Thinking" Process UX |
| **OpenCode** | **High** (Bugs) | **High** (Refactor) | v1.4.7 (Compat) | Provider Normalization |
| **Qwen Code** | **Critical** (Auth) | **High** (Fixes) | Nightly (Unstable) | Auth & Core Reliability |

## 3. Shared Feature Directions
Cross-community analysis indicates convergence on three primary requirements:

*   **Granular Approval Flows (The "Trusted Agent" Problem)**
    *   **Context:** Users are frustrated with binary "approve all" (`--yolo`) vs. "step-by-step" modes.
    *   **Demand:** Tools are implementing distinct approval tiers. *Kimi Code* users want `--yolo` to approve tools but still require approval for *execution plans*. *OpenCode* and *GitHub Copilot CLI* users are requesting persistent permissions to avoid re-approving the same files in a session.

*   **Observability & Control**
    *   **Context:** As tools manage autonomous agents, users feel "loss of control."
    *   **Demand:** *Gemini CLI* and *Charm Crush* are prioritizing "side-conversations" and "skills sidebars" to see what the agent is doing without interrupting the flow. *Kimi Code* and *Claude Code* communities are fiercely advocating for the return/visibility of "Thinking" blocks to debug model reasoning.

*   **Standardized Hook Systems**
    *   **Context:** Enterprises need to integrate AI CLIs into existing CI/CD and security pipelines.
    *   **Demand:** *OpenAI Codex* is actively plumbing "Permission Request Hooks" (PR #18236). *Charm Crush* has introduced `PreToolUse` hooks. This reflects a shift from "CLI as a client" to "CLI as an automation platform."

## 4. Differentiation Analysis

*   **Model Centricity vs. IDE Agnosticism**
    *   **Claude Code** is tightly coupled to the Anthropic ecosystem (Opus 4.7 `xhigh` effort), treating the CLI as a first-class client for new model features.
    *   **OpenCode** is positioning itself as the **"Swiss Army Knife"** (agnostic client), focusing its engineering effort on normalizing the fragmented APIs of OpenAI, Anthropic, and Cloudflare to provide a consistent interface despite provider differences.

*   **Technical Architectures**
    *   **OpenAI Codex** is undergoing a heavy rewrite in **Rust** (v0.122.0-alpha), prioritizing performance and concurrency control (async lock guards) at the cost of current stability (regressions in sandboxing).
    *   **Charm Crush** (Go/GLAM based) focuses on **Terminal UX (TUI) excellence**, introducing unique features like the "Skills Sidebar" and built-in `jq` to ensure the tool feels like a native shell extension rather than a wrapper.
    *   **GitHub Copilot CLI** remains focused on **Hygiene & Integration**, prioritizing tight coupling with VS Code and org policies, though it is currently hampered by aggressive rate limiting.

*   **Target User Base**
    *   **Power Users:** *Claude Code* and *OpenCode* target users who want to modify the system itself (open source ethos, high configurability).
    *   **Enterprise/Workflow:** *OpenAI Codex* and *GitHub Copilot* target teams needing robust remote development (SSH/WSL) and permission management.
    *   **Hobbyists/International:** *Qwen Code* serves the massive Chinese developer base, currently struggling with scaling pains (OAuth outages).

## 5. Community Momentum & Maturity

*   **Most Active / Mature:** **Claude Code** and **OpenAI Codex**.
    *   *Claude Code* demonstrates the highest engagement, with massive upvotes on feature requests (800+ for `/buddy`), indicating a passionate user base. However, this passion is turning toxic due to perceived "product mismanagement" (removal of features).
    *   *OpenAI Codex* shows the most disciplined engineering, executing a complex Rust migration while systematically addressing technical debt, though suffering from temporary stability loss.

*   **Rising Stars:** **Charm Crush**.
    *   While smaller, *Charm Crush* is executing effectively. It is shipping polished features (Sidebar, built-in `jq`) and closing high-impact bugs (Context length errors). It has the highest "signal-to-noise" ratio in its issues.

*   **At Risk:** **Qwen Code**.
    *   Currently facing a legitimacy crisis. The combination of a service-wide **401 Auth Outage** and a proposal to slash the **Free Tier quota by 90%** (Issue #3203) threatens to alienate its community. Developers are migrating away or locked out entirely.

## 6. Trend Signals for Decision Makers

1.  **The "Reasoning" Tax:** The shift to models like Opus 4.7 and GPT 5.4 is not seamless. Expect tools that rely on these models to suffer from initial "parameter mismatch" bugs (e.g., `max_tokens` vs `max_completion_tokens`, `thinking` block handling) as the industry standards solidify.
2.  **Companion Features Matter:** The backlash against the removal of the `/buddy` feature in Claude Code (#45596) signals that developers view these tools as **"companions"**, not just utilities. Personality and conversational continuity are now table stakes for user retention.
3.  **Sandboxing is a Bottleneck:** There is a clear trend across *OpenAI Codex*, *Gemini CLI*, and *Charm Crush* indicating that "security by default" (sandboxing/bwrap) is frequently breaking standard workflows (e.g., `apply_patch` failures, Cowork crashes). Tools that can solve "security without friction" will win enterprise adoption.
4.  **SSH is the New Local:** The highest upvoted feature request in *OpenAI Codex* (#10450) and a hot topic in *Claude Code* is **Remote Development/SSH** support. The definition of "Local CLI" is expanding to include "Local control of remote containers."

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Date:** 2026-04-17 | **Source:** github.com/anthropics/skills

## 1. Top Skills Ranking
Based on community engagement and PR activity, the following Skills have generated the most significant discussion and development interest.

*   **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** (OPEN)
    *   **Functionality:** Enforces typographic quality control in AI-generated documents, preventing orphaned words, widow paragraphs, and numbering misalignment.
    *   **Discussion Highlights:** Addresses a universal pain point in AI document generation. Users emphasize that while Claude generates content well, formatting polish is currently manual.
    *   **Status:** Open - Highly requested refinement.

*   **[#83 skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (OPEN)
    *   **Functionality:** Meta-skills that evaluate other Skills across five dimensions (Structure, Documentation, Capability, Safety, Testing) and scan for security vulnerabilities.
    *   **Discussion Highlights:** Represents a "second-order" use case—using AI to improve AI tools. High community interest in maintaining a high-quality marketplace.
    *   **Status:** Open - Pending review.

*   **[#486 ODT (OpenDocument Text)](https://github.com/anthropics/skills/pull/486)** (OPEN)
    *   **Functionality:** Enables creation, filling, reading, and conversion of OpenDocument files (.odt, .ods) via LibreOffice standards.
    *   **Discussion Highlights:** Strong demand for open-source/ISO format support to reduce vendor lock-in.
    *   **Status:** Open - Active development.

*   **[#210 frontend-design](https://github.com/anthropics/skills/pull/210)** (OPEN)
    *   **Functionality:** Revised skill improving clarity and actionability for frontend design tasks, ensuring instructions are executable within a single conversation.
    *   **Discussion Highlights:** Focuses on "actionability" over theory; users want Skills that tell Claude exactly *how* to execute complex design tasks without ambiguity.
    *   **Status:** Open - Refinement phase.

*   **[#541, #539, #538 DOCX/PDF Fixes](https://github.com/anthropics/skills/pull/541)** (OPEN)
    *   **Functionality:** Critical bug fixes for document handling, specifically preventing tracked change collisions in DOCX and fixing case-sensitive file references in PDF.
    *   **Discussion Highlights:** High attention to stability in core document workflows. Users reporting specific corruption issues drive rapid community patches.
    *   **Status:** Open - Technical review.

*   **[#147 codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** (OPEN)
    *   **Functionality:** Systematic 10-step workflow to identify orphaned code, unused files, and documentation gaps, producing a `CODEBASE-STATUS.md` report.
    *   **Discussion Highlights:** Addresses "technical debt" accumulation. Teams want a single source of truth for codebase hygiene.
    *   **Status:** Open.

*   **[#509 CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** (OPEN)
    *   **Functionality:** Adds official contribution guidelines to address community health metrics (currently 25%).
    *   **Discussion Highlights:** Infrastructure improvement. The community recognizes the need for better onboarding to scale Skill submission quality.
    *   **Status:** Open.

*   **[#806 Sensory (macOS Automation)](https://github.com/anthropics/skills/pull/806)** (OPEN)
    *   **Functionality:** Teaches Claude to use `osascript` (AppleScript) for native macOS automation, replacing screenshot-based computer use with direct API calls.
    *   **Discussion Highlights:** A shift towards "agentic" capabilities. Users want Claude to control the OS directly rather than via visual emulation.
    *   **Status:** Open - New frontier.

## 2. Community Demand Trends
Analysis of Issues and PR proposals indicates several emerging vectors for Skill development:

*   **Robustness & Bug Fixing:** There is a strong trend towards fixing existing core functionality (DOCX corruption, PDF case sensitivity, UTF-8 panics) rather than just adding new features. The community is prioritizing stability.
*   **Meta-Tooling & Ecosystem Health:** High demand for tools that police the ecosystem itself, such as the *skill-quality-analyzer* (#83) and improved *skill-creator* validation (#202).
*   **Enterprise & Workflow Integration:**
    *   **SAP Integration:** (#181) Adding SAP-RPT-1-OSS predictor skill indicates a push into heavy enterprise data analytics.
    *   **Micropayments:** (#374) The x402 BSV skill suggests interest in monetizing AI agent actions.
    *   **Persistent Context:** (#521, #154) Multiple efforts (record-knowledge, shodh-memory) are tackling the "stateless" problem of Claude Code, trying to maintain context across sessions.
*   **Non-Proprietary Formats:** The push for ODT support (#486) and general document troubleshooting (#541, #538) highlights a desire to move away from strictly Microsoft-centric workflows.

## 3. High-Potential Pending Skills
The following PRs are active, widely discussed, and likely to be merged or significantly influence the ecosystem soon:

*   **[#514 document-typography](https://github.com/anthropics/skills/pull/514):** Likely to be merged as a standard polish step for document generation.
*   **[#509 CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509):** Critical for repository health; likely to be adopted quickly.
*   **[#147 codebase-inventory-audit](https://github.com/anthropics/skills/pull/147):** Fills a major "maintenance" gap; highly actionable.
*   **[#723 testing-patterns](https://github.com/anthropics/skills/pull/723):** Comprehensive testing guidance is a perennial need; this PR codifies best practices.
*   **[#210 frontend-design (Revision)](https://github.com/anthropics/skills/pull/210):** The move towards "actionability" makes this a template for future Skill refactors.

## 4. Skills Ecosystem Insight
The community is currently focused on **hardening core document processing workflows** and **building infrastructure for persistent context/memory**, signaling a shift from experimental "party trick" skills to reliable, enterprise-grade tools.

---

# Claude Code Community Digest: 2026-04-17

## Today's Highlights
The release of **v2.1.112** and **v2.1.111** brings significant updates, most notably the arrival of **Claude Opus 4.7** with a new `xhigh` effort level and expanded Auto Mode support for Max subscribers. However, the launch is marred by multiple integration bugs, particularly failures with AWS Bedrock and macOS Cowork sessions, while a massive community outcry continues over the removal of the `/buddy` feature.

## Releases
*   **[v2.1.112 & v2.1.111](https://github.com/anthropics/claude-code/releases)**: These releases introduce **Claude Opus 4.7**, allowing users to tune speed vs. intelligence using the `/effort` flag. A new `xhigh` effort level sits between `high` and `max`. Additionally, Auto Mode is now available for Max subscribers using Opus 4.7, and a fix was applied for temporary unavailability errors in auto mode.

## Hot Issues
1.  **[#45596 - Bring Back Buddy](https://github.com/anthropics/claude-code/issues/45596)**: The most discussed issue by far (800+ 👍). The silent removal of the `/buddy` skill in v2.1.97 has caused a massive uproar. The community is demanding its return, viewing it as a vital companion feature rather than just a tool.

2.  **[#49238 - Opus 4.7 Bedrock Failure](https://github.com/anthropics/claude-code/issues/49238)**: A critical regression for enterprise users. Opus 4.7 is currently non-functional via the AWS Bedrock API, blocking adoption for users relying on the Bedrock provider.

3.  **[#49367 - macOS Cowork Crashes](https://github.com/anthropics/claude-code/issues/49367)**: Users on macOS are experiencing complete crashes in Cowork sessions due to "Desktop-to-SDK spawn failure," rendering the collaboration feature unstable in the latest SDK version.

4.  **[#49604 - Opus 4.7 Model Regressions](https://github.com/anthropics/claude-code/issues/49604)**: Reports indicate that the "car wash failure" (complex task handling) persists in Opus 4.7, with new multi-turn recovery failures emerging.

5.  **[#49599 - Usage Limit Reset Changes](https://github.com/anthropics/claude-code/issues/49599)**: Users are reporting that their weekly usage limits unexpectedly reset from a Monday cycle to a Friday cycle, causing loss of unused tokens and confusion over billing policies.

6.  **[#48241 - SSH Authentication Failures](https://github.com/anthropics/claude-code/issues/48241)**: Following the Desktop update to v1.2581.0, SSH remote connections on Windows/WSL are failing with "All configured authentication methods failed," disrupting remote development workflows.

7.  **[#47081 - Bypass Permissions Bug](https://github.com/anthropics/claude-code/issues/47081)**: The "Bypass Permissions Mode" is still requesting confirmation for memory and skill edits, negating the purpose of the mode for automation scripts.

8.  **[#49317 - TUI Keybinding Changes](https://github.com/anthropics/claude-code/issues/49317)**: Users on the TUI are frustrated that `Ctrl+W` and `Ctrl+U` default bindings have changed, shadowing standard readline behaviors for word deletion and line clearing.

9.  **[#49282 - macOS install_path Issues](https://github.com/anthropics/claude-code/issues/49282)**: Due to versioned installation paths, the `claude` binary re-registers as a new app in macOS Privacy & Security settings on *every* update, forcing users to constantly re-approve permissions.

10. **[#43052 - Model Output Quality](https://github.com/anthropics/claude-code/issues/43052)**: A highly charged (though marked invalid) thread where users accuse Opus 4.6 of "sabotaging code," highlighting deep frustration regarding perceived token inefficiency and output quality degradation.

## Key PR Progress
1.  **[#49596 - Extract GitHub API Client](https://github.com/anthropics/claude-code/pull/49596)**: A refactoring effort to extract a shared GitHub API client into `github-api.ts`, which should improve code modularity and testability.
2.  **[#40322 - Devcontainer Firewall Enhancement](https://github.com/anthropics/claude-code/pull/40322)**: A significant infrastructure update for the development container environment, implementing hybrid static/dynamic IP management for better firewall security.
3.  **[#48335 - Fix Hookify for Write Content](https://github.com/anthropics/claude-code/pull/48335)**: A runtime fix to the `hookify` plugin, enabling it to read `content` from Write tool payloads (`new_text` rules), closing a gap in automation workflows.
4.  **[#48905 - Performance Optimization](https://github.com/anthropics/claude-code/pull/48905)**: A merged change to run `commit-commands` using Haiku, likely to speed up git commit generation and reduce latency.
5.  **[#1 - Create SECURITY.md](https://github.com/anthropics/claude-code/pull/1)**: The establishment of a formal security policy document, a foundational step for open-source security collaboration.
6.  **[#49230 - Documentation Formatting](https://github.com/anthropics/claude-code/pull/49230)**: Improvements to the formatting of descriptions and examples in `conversation-analyzer.md`.
7.  **[#45721 - Veriflow Immune System](https://github.com/anthropics/claude-code/pull/45721)**: An intriguing, albeit cryptic, PR regarding the "Claude Mythos operating contract for Veriflow immune system," signaling advanced agentic framework development.

## Feature Request Trends
*   **Restoration of Companion Features:** The overwhelming demand to **#bringbackbuddy** indicates users desire personality and companionship in their tools, not just utility.
*   **UI/UX Improvements for TUI:** Multiple requests for split-pane scrolling (to read output while typing) and better handling of Right-to-Left (RTL) languages like Arabic and Hebrew.
*   **Agent & Hook Observability:** Developers want better hooks for subagent token usage and more reliable control over agent teams.

## Developer Pain Points
*   **Frequent Regressions:** New releases often break existing workflows (e.g., SSH on Windows, Cowork on macOS, Bedrock API).
*   **Platform-Specific Friction:** macOS users are plagued by permission re-approval loops; Windows users face auto-crashes and SSH bugs.
*   **Transparency:** The removal of features without changelog notes and unexplained billing cycle changes have eroded trust in release management.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-17

## 1. Today's Highlights
The OpenAI Codex ecosystem is seeing significant rapid iteration on the Rust CLI (`0.122.0-alpha`) and the Desktop App, alongside a surge of regressions reported in the VS Code extension regarding file rendering and hyperlinks. Key architectural advancements include the introduction of **PermissionRequest Hooks** and **Goal Mode** in the CLI, while the Desktop App is facing growing pressure to support remote development and macOS Intel architectures.

## 2. Releases
*   **rust-v0.122.0-alpha.5 & v0.122.0-alpha.3**
    *   **Status:** Alpha releases for the Rust-based CLI.
    *   **Focus:** These rapid-fire alpha versions (v0.122.0) suggest active stabilization efforts for the underlying Rust architecture, likely addressing performance and concurrency issues reported in earlier v0.121.x versions.
    *   [View Release](https://github.com/openai/codex/releases)

## 3. Hot Issues

*   **[#10450] Remote Development in Codex Desktop App** (555 👍)
    *   **Why it matters:** This is the most upvoted active request. Users want the Desktop App to handle remote development workflows (SSH/WSL) similar to VS Code, which is currently a major blocker for enterprise adoption.
    *   [Link](https://github.com/openai/codex/issues/10450)

*   **[#10410] macOS Intel (x86_64) support** (285 👋, Closed)
    *   **Why it matters:** Although closed, this issue had massive engagement. The closure implies a decision has been made (likely to drop support or delay indefinitely), leaving Intel Mac users frustrated.
    *   [Link](https://github.com/openai/codex/issues/10410)

*   **[#2109] Event Hooks** (526 👋)
    *   **Why it matters:** A long-standing request for extensibility. Users want to trigger custom scripts based on Codex behaviors (e.g., linting before a commit), enabling deeper automation.
    *   [Link](https://github.com/openai/codex/issues/2109)

*   **[#18069] apply_patch fails with use_legacy_landlock** (7 👋)
    *   **Why it matters:** A regression in v0.121.0 where workspace edits fail under specific Linux security configurations (`use_legacy_landlock`), forcing annoying sandbox retries for users.
    *   [Link](https://github.com/openai/codex/issues/18069)

*   **[#17525] Ubuntu: every single normal edit requires skipping sandbox** (14 comments)
    *   **Why it matters:** Critical UX degradation on Ubuntu where the sandboxing feature blocks standard edits, forcing users to constantly intervene manually.
    *   [Link](https://github.com/openai/codex/issues/17525)

*   **[#17322] Windows: App does not fully exit** (11 👋)
    *   **Why it matters:** Affecting Windows users where the "X" button minimizes rather than closes the app, and sidebar buttons become unresponsive.
    *   [Link](https://github.com/openai/codex/issues/17322)

*   **[#13822] macOS Input Bug: Control-F broken** (12 👋)
    *   **Why it matters:** Specific usability regression breaking standard Emacs-style cursor navigation in the text input field.
    *   [Link](https://github.com/openai/codex/issues/13822)

*   **[#11325] Manual /compact command in Codex app** (145 👋)
    *   **Why it matters:** Users want granular control over conversation memory ("compaction") in the GUI, similar to what is available in the CLI.
    *   [Link](https://github.com/openai/codex/issues/11325)

*   **[#17649] Hyperlinks not rendered in VS Code** (8 👋)
    *   **Why it matters:** Regression where file references in the VS Code extension chat are static text, breaking navigation flow.
    *   [Link](https://github.com/openai/codex/issues/17649)

*   **[#18194] review error eats up 5hr limit** (3 comments)
    *   **Why it matters:** Users reporting that a failed `codex review` command consumes their 5-hour model usage quota, causing significant frustration with rate limits.
    *   [Link](https://github.com/openai/codex/issues/18194)

## 4. Key PR Progress

*   **[#18236] Add PermissionRequest hook plumbing**
    *   **Description:** Infrastructure work (Part 1 of 2) to allow users to define hooks for permission requests (shell, network access). This paves the way for the feature requested in #2109.
    *   [Link](https://github.com/openai/codex/pull/18236)

*   **[#18231] Codex: split thread/read view loading**
    *   **Description:** A significant refactor of how thread history is loaded (persisted vs. live), likely aiming to fix bugs where chat history is lost or desynchronized.
    *   [Link](https://github.com/openai/codex/pull/18231)

*   **[#18096] Feat(sandbox): add glob deny-read platform enforcement**
    *   **Description:** Enhances the sandbox security on Linux (bwrap) and macOS (Seatbelt) by explicitly denying reads for specific glob patterns, addressing security hardening needs.
    *   [Link](https://github.com/openai/codex/pull/18096)

*   **[#18215] Unify approval request routing**
    *   **Description:** Centralizes the logic for how approvals are requested from the user, reducing code duplication and potential bugs in the approval flow.
    *   [Link](https://github.com/openai/codex/pull/18215)

*   **[#18116] Move marketplace add under plugin command**
    *   **Description:** Changes the CLI interface for plugins from `codex marketplace add` to `codex plugin marketplace add`, structuring the command hierarchy more logically.
    *   [Link](https://github.com/openai/codex/pull/18116)

*   **[#18017] Add cross-repo plugin sources to marketplace manifests**
    *   **Description:** Allows the marketplace to support git-backed plugin sources, enabling a richer ecosystem of external plugins.
    *   [Link](https://github.com/openai/codex/pull/18017)

*   **[#18077] Add goal mode TUI UX (5 / 5)**
    *   **Description:** Completes the implementation of "Goal Mode" in the CLI TUI, adding statusline indicators and history handling for long-running autonomous tasks.
    *   [Link](https://github.com/openai/codex/pull/18077)

*   **[#18190] Add `/side` conversations**
    *   **Description:** Introduces a "side conversation" feature in the TUI, allowing users to ask ephemeral questions without interrupting the main agent thread.
    *   [Link](https://github.com/openai/codex/pull/18190)

*   **[#17862] Stream apply_patch changes**
    *   **Description:** Adds streaming events for file patching, allowing the UI to show real-time progress while Codex edits files, rather than waiting for completion.
    *   [Link](https://github.com/openai/codex/pull/17862)

*   **[#18211] Refactor: narrow async lock guard lifetimes**
    *   **Description:** Technical debt cleanup to prevent deadlocks and performance bottlenecks in the Rust async runtime.
    *   [Link](https://github.com/openai/codex/pull/18211)

## 5. Feature Request Trends
*   **Desktop App Parity:** Users are aggressively requesting features found in VS Code, specifically **Remote Development/SSH** support and **Split Terminals**.
*   **Control & Visibility:** There is a strong demand for "Manual" controls, specifically a `/compact` command to manage context window and better visibility into "Background Terminals."
*   **Extensibility:** The "Hooks" request (#2109) remains a top priority, indicating developers want to integrate Codex deeper into their existing CI/CD and automation pipelines.

## 6. Developer Pain Points
*   **Sandbox Friction:** A recurring theme in the latest issues is the **Linux Sandbox** blocking standard edits or failing to resolve DNS/Files, forcing users to manually "skip sandbox" frequently.
*   **Hyperlink Regressions:** Multiple reports indicate that **VS Code Extension** file links are broken (not clickable), severely hampering navigation.
*   **Windows & ARM64 Stability:** Windows users are facing specific issues with the App not closing, losing VS Code connections, or failing to start in WSL mode. ARM64 users (Windows on Snapdragon) are also reporting WSL failures.

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest: 2026-04-17

## Today's Highlights
The release of **v0.59.0** represents a significant milestone for the Crush IDE, introducing the "Skills Sidebar" to provide full visibility into installed extensions and integrating `jq` as a bash builtin to ensure consistent tooling across platforms. Concurrently, the community is actively addressing session resumption stability and agent model configurability, with several high-impact pull requests merged to fix context length errors and improve CI efficiency.

## Releases
### **v0.59.0** ([Release Notes](https://github.com/charmbracelet/crush/releases/tag/v0.59.0))
This update focuses heavily on tooling discovery and environment consistency.
*   **Skills Sidebar:** Users can now visually verify which skills are loaded directly in the UI (resolving Issue #1972).
*   **Built-in `jq`:** `jq` is now a bash builtin within Crush, removing dependency on the host environment and enabling a new dedicated skill for JSON manipulation.
*   **Performance:** General improvements to the core engine.

## Hot Issues
*   **[#1972: Improvements to the Skills feature (knowing what skills it has)](https://github.com/charmbracelet/crush/issues/1972)** — **Status: Closed.** Users previously struggled to determine if installed skills (e.g., `agent-browser`) were actually recognized by Crush. This issue drove the new UI changes in v0.59.0.
*   **[#476: Can't use Crush -- "400 Bad Request" due to "context length"](https://github.com/charmbracelet/crush/issues/476)** — **Status: Closed.** A critical bug preventing project initialization due to token limit errors. This has been addressed in recent commits, resolving a major blocker for new users.
*   **[#2633: [provider: kimi] "invalid_request_error" in Kimi for Coding](https://github.com/charmbracelet/crush/issues/2633)** — **Status: Open.** Users of the Kimi provider are experiencing frequent session-breaking errors. This is currently under investigation.

## Key PR Progress
*   **[#2384: feat(ui): add skills discovery status to sidebar and landing page](https://github.com/charmbracelet/crush/pull/2384)** — **Merged.** Implements the pubsub-based UI refresh mechanism required to display skill states dynamically in the sidebar.
*   **[#2632: feat(shell): add jq as a bash builtin + a jq skill for it](https://github.com/charmbracelet/crush/pull/2632)** — **Merged.** Ensures `jq` availability regardless of user OS environment by compiling it directly into the Crush shell.
*   **[#2622: fix(session): inject synthetic tool_result for orphaned tool_use on session resume](https://github.com/charmbracelet/crush/pull/2622)** — **Merged.** A critical fix for session stability; prevents the "invalid_request_error" lock when resuming a session that was interrupted during a tool call.
*   **[#2598: feat: PreToolUse hook](https://github.com/charmbracelet/crush/pull/2598)** — **Open.** Introduces a new extensibility layer allowing shell scripts to hook into the tool execution lifecycle via stdin/env vars.
*   **[#2584: feat(agent): allow user to configure agent model size](https://github.com/charmbracelet/crush/pull/2584)** — **Open.** Addresses user feedback regarding the "Task Agent" defaulting to `large` models; this PR aims to make model size configurable for cost/performance tuning.

## Feature Request Trends
*   **Agent Customization:** There is a strong demand for granular control over agent behavior, specifically regarding model sizing (Large vs. Small) for different tasks (Task Agent vs. Coder Agent).
*   **Observability:** Users are requesting better visibility into what the tool is "thinking" or planning, specifically regarding which skills are active and how git commits are formatted.

## Developer Pain Points
*   **Provider Stability:** Integrations with third-party LLMs (specifically Kimi) are fragile, often resulting in `invalid_request_error` responses that halt workflows.
*   **Context Management:** While "400 Bad Request" context errors are being addressed, managing large codebases and session resumption remains a top technical challenge for the user base.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-04-17

## 1. Today's Highlights
Today’s digest focuses on significant stability and security improvements as the repository moves toward the next release cycle. Key developments include the closure of a **P0 bug** regarding file modification transparency in the `Edit` and `WriteFile` tools, alongside robust efforts to harden the CLI against dangerous commands like `rm` and improve shell execution reliability. Additionally, the team is actively optimizing performance, with specific attention to removing redundant model routing steps and resolving critical startup delays caused by external dependency failures.

## 2. Releases
*No new releases have been published in the last 24 hours.*

## 3. Hot Issues

1.  **[#25323](https://github.com/google-gemini/gemini-cli/issues/25323)** - **Failing to download RipGrep slows down startup**
    *   **Why it matters:** Users facing network restrictions (e.g., no GitHub access) experience freezes of over 2 minutes during CLI startup.
    *   **Reaction:** High demand for a "fail-fast" approach or bundling RipGrep to avoid network dependency entirely.

2.  **[#24936](https://github.com/google-gemini/gemini-cli/issues/24936)** - **[CLOSED] Edit and WriteFile tools not showing file being modified**
    *   **Why it matters:** A critical UI regression where users could not see which file was being modified before approving edits. This has been closed, signaling a fix is imminent or deployed.
    *   **Reaction:** Marked P0; immediate resolution was prioritized to restore safe agent workflows.

3.  **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** - **Shell command execution hangs with "Waiting input"**
    *   **Why it matters:** The CLI frequently hangs after executing simple commands, forcing users to kill the process.
    *   **Reaction:** Users experiencing this with simple scripts are frustrated by the blocking behavior affecting basic automation.

4.  **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916)** - **Repeated permission prompts for the same file**
    *   **Why it matters:** The "Allow for all future sessions" instruction appears ineffective, causing notification fatigue.
    *   **Reaction:** Users expect the approval mode to persist across the session as intended.

5.  **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** - **AST-aware file reads and mapping investigation**
    *   **Why it matters:** An Epic proposal to improve codebase context understanding using Abstract Syntax Trees (AST) to reduce noise and turn counts.
    *   **Reaction:** Maintainer interest is high (👍 1), viewing this as a necessary evolution for the `codebase_investigator` agent.

6.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** - **Subagent recovery hiding MAX_TURNS failures**
    *   **Why it matters:** A subagent hitting a turn limit reports "SUCCESS" (GOAL), effectively hiding the fact that it failed to complete the analysis.
    *   **Reaction:** Concerns about transparency; users need to know if a task was truncated.

7.  **[#24202](https://github.com/google-gemini/gemini-cli/issues/24202)** - **Text scrambled in SSH sessions**
    *   **Why it matters:** The CLI is unusable when run via SSH from Windows to Linux environments.
    *   **Reaction:** A blocker for remote development workflows; a helper to detect SSH environments is now in progress.

8.  **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** - **Browser Agent ignores `settings.json` overrides**
    *   **Why it matters:** Configuration overrides (like `maxTurns`) are not being respected by the Browser Agent, reducing user control.
    *   **Reaction:** Confirmed bug; users are unable to customize agent behavior effectively.

9.  **[#24915](https://github.com/google-gemini/gemini-cli/issues/24915)** - **Thick black border in prompt bar**
    *   **Why it matters:** Visual regression affecting the prompt interface's usability.
    *   **Reaction:** Minor but persistent UI complaint regarding rendering artifacts.

10. **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819)** - **Implement memory routing (Global vs. Project)**
    *   **Why it matters:** Currently, the memory subagent doesn't distinguish between user preferences (Global) and project-specific context (Project).
    *   **Reaction:** Essential for improving the relevance of long-term memory in the CLI.

## 4. Key PR Progress

1.  **[#25545](https://github.com/google-gemini/gemini-cli/pull/25545)** - **Improve dangerous command detection for `rm`**
    *   **Detail:** Enhances the safety layer to better detect `rm` commands regardless of path qualification (e.g., `/bin/rm`) or flag ordering, preventing accidental mass deletion.

2.  **[#25537](https://github.com/google-gemini/gemini-cli/pull/25537)** - **Fix shell command wrapping breaking heredocs**
    *   **Detail:** Fixes a bug where the CLI appended a semicolon to heredoc delimiters, causing shell syntax errors. It now uses newlines for wrapping.

3.  **[#25426](https://github.com/google-gemini/gemini-cli/pull/25426)** - **Revive bundling and CI optimization (16-core speed)**
    *   **Detail:** Major infrastructure update. Introduces artifact-centric CI paths to allow tests to consume pre-built bundles, significantly improving test execution speed.

4.  **[#25256](https://github.com/google-gemini/gemini-cli/pull/25256)** - **Detect new files in `@` recommendations with watcher**
    *   **Detail:** Implements a file watcher for `@` file suggestions, eliminating the need to wait for a full recrawl when new files are added to the workspace.

5.  **[#25554](https://github.com/google-gemini/gemini-cli/pull/25554)** - **Skip redundant model routing classification**
    *   **Detail:** A performance optimization that skips the classification step when `pro` and `flash` tiers resolve to the same model (common with overrides like `gemma4Variants`).

6.  **[#25427](https://github.com/google-gemini/gemini-cli/pull/25427)** - **Resolve custom sandbox profiles from `$HOME/.gemini`**
    *   **Detail:** Allows custom Seatbelt profiles (macOS sandboxes) to be defined globally in the user's home directory, overriding the need to set them per project.

7.  **[#25560](https://github.com/google-gemini/gemini-cli/pull/25560)** - **Add support for Gemma 4 model**
    *   **Detail:** Adds the `gemma-4-26b-a4b-it` model to the core constants, making it selectable via the UI and Agent Control Protocol.

8.  **[#25344](https://github.com/google-gemini/gemini-cli/pull/25344)** - **Telemetry: Bounded structural truncation**
    *   **Detail:** Prevents JSON parsing errors and OOM crashes in telemetry by implementing a strategy to truncate payloads safely.

9.  **[#25515](https://github.com/google-gemini/gemini-cli/pull/25515)** - **Fix plan session state on `/clear`**
    *   **Detail:** Fixes a bug where `/clear` would reset the session ID but leave planning state (approved plans) pointing to the old session, causing logic errors.

10. **[#25060](https://github.com/google-gemini/gemini-cli/pull/25060)** - **Shortcuts to open @ mentions in editor**
    *   **Detail:** Adds keyboard shortcuts to the file completion menu to open selected files directly in the editor (`Ctrl+X`) or file browser (`Ctrl+Shift+X`).

## 5. Feature Request Trends

*   **AST-Aware Tooling:** There is a growing movement (Issue #22745, #22746) toward integrating Abstract Syntax Tree (AST) parsing into the CLI's core tools. The goal is to allow the agent to read code structurally (e.g., reading a specific function's bounds) rather than treating files as raw text blocks.
*   **Memory Routing:** Users and devs are pushing for a split memory architecture (Issue #22819) to differentiate between global user preferences and project-specific context.
*   **SSH & Remote Support:** Following multiple reports of garbled text (Issue #24202) and rendering issues over SSH, there is a clear trend toward requesting robust support for remote development environments.

## 6. Developer Pain Points

*   **Agent "Hallucinations" on Success:** A recurring frustration involves agents reporting success ("GOAL") when they have actually hit a failure limit, such as `MAX_TURNS` (Issue #22323). This masks errors and makes debugging difficult.
*   **Dependency Fragility:** The CLI's reliance on external binaries like `RipGrep` (Issue #25323) is causing startup freezes. Developers are requesting these dependencies be bundled or handled more gracefully.
*   **UI Glitches & Safety:** Developers are reporting specific UI regressions, such as "thick black borders" (Issue #24915) and missing file names in edit prompts (Issue #24936), which impact usability and safety confidence.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-17

## 1. Today's Highlights
The Copilot CLI team released three rapid-fire updates (v1.0.29–v1.0.31) addressing critical rendering bugs in the prompt frame and fixing the `/feedback` redirection logic. However, the community is currently voicing significant frustration regarding aggressive rate limiting, particularly for Pro+ users, and inconsistencies in model availability between the CLI and VS Code.

## 2. Releases
**v1.0.31** (2026-04-16)
*   **UI Fix:** Resolved rendering issues causing "ugly bars" or misalignment in the prompt box on Windows and Ubuntu terminals ([#2771](https://github.com/github/copilot-cli/issues/2771)).
*   **Agent Visibility:** Fixed a regression where the active agent name was no longer visible in the status line ([#2777](https://github.com/github/copilot-cli/issues/2777)).

**v1.0.30** (2026-04-16)
*   **Bug Fix:** Corrected the `/feedback` command to link to the valid repository instead of the deprecated `github/github-copilot-cli` path ([#2715](https://github.com/github/copilot-cli/issues/2715)).
*   **UX Improvement:** The `/undo` command now provides an explanatory message when rewind is unavailable (e.g., not in a git repository).
*   **New Command:** Added `/statusline` (and `/footer`) commands.
*   **Discovery:** Fixed plugin skills and commands discovery when using `skills.discover`.

**v1.0.29** (2026-04-16)
*   **Config:** Remote MCP server config now allows omitting the `type` field (defaults to `http`).
*   **Stability:** Fixed blinking cursor width to prevent text shifting during input.
*   **Debugging:** Added `--list-env` flag to log loaded plugins, agents, skills, and MCP servers.

## 3. Hot Issues
1.  **[Models] Copilot CLI hides org-enabled models (e.g. Gemini 3.1 Pro)** ([#1703](https://github.com/github/copilot-cli/issues/1703))
    *   **Why it matters:** Users are experiencing a reduced model list in the CLI compared to VS Code, despite having the same org settings.
    *   **Reaction:** Highly requested (33 👍); users want feature parity with the IDE extension.

2.  **[Models/CLI] GPT-5.4 model picker hides "Extra High" effort level** ([#2725](https://github.com/github/copilot-cli/issues/2725))
    *   **Why it matters:** The UI restricts selection to Low/Medium/High, but the backend supports `xhigh`. It is an inconsistency between UI and runtime capability.
    *   **Reaction:** 14 👍; users want access to the full capability spectrum without workarounds.

3.  **[Models] Rate limiting is "very tight" and triggers immediately** ([#2756](https://github.com/github/copilot-cli/issues/2756))
    *   **Why it matters:** Developers report hitting limits immediately after a retry wait time expires, effectively halting work.
    *   **Reaction:** Represents a broader surge in complaints regarding CLI throttling.

4.  **[Models] Pro+ Weekly Rate Limit Not Resetting** ([#2769](https://github.com/github/copilot-cli/issues/2769))
    *   **Why it matters:** Paying Pro+ users are unable to use their quota due to reset timer failures.
    *   **Reaction:** High impact on paid tier trust.

5.  **[Agents] Autopilot enters infinite loop** ([#2374](https://github.com/github/copilot-cli/issues/2374))
    *   **Why it matters:** A reliability blocker where Autopilot gets stuck in a loop after planning/approval cycles.
    *   **Reaction:** Critical workflow disruption.

6.  **[Input] Shift+Enter submits prompt instead of inserting new line** ([#2776](https://github.com/github/copilot-cli/issues/2776))
    *   **Why it matters:** Changes standard terminal multiline editing behavior, making complex prompt composition difficult.
    *   **Reaction:** "Feature gap" vs. "bug" debate; users want standard multiline support.

7.  **[Models] Unreasonable rate limit after updating to v1.0.29** ([#2768](https://github.com/github/copilot-cli/issues/2768))
    *   **Why it matters:** Correlates the latest update with a sudden degradation in quota availability.
    *   **Reaction:** Users are considering downgrading to previous versions.

8.  **[Networking] Implement proper HTTP retry logic for 429** ([#2760](https://github.com/github/copilot-cli/issues/2760))
    *   **Why it matters:** The CLI currently retries 429s aggressively without backoff, potentially worsening the rate limit condition.
    *   **Reaction:** Technical request for better exponenial backoff implementation.

9.  **[Agents] Rate limiting causes Autopilot to malfunction** ([#2754](https://github.com/github/copilot-cli/issues/2754))
    *   **Why it matters:** Autopilot's multi-step nature makes it susceptible to rate limits, rendering the "hands-off" mode unusable.
    *   **Reaction:** Users report "severely unusable" experience on Pro+.

10. **[Input/Rendering] "Ugly bars" around prompt box UI in v1.0.30** ([#2771](https://github.com/github/copilot-cli/issues/2771))
    *   **Why it matters:** Visual regression in v1.0.30 that cluttered the interface. (Likely resolved in v1.0.31).
    *   **Reaction:** Immediate negative feedback on UI change.

## 4. Key PR Progress
*No Pull Requests were listed in the provided data for the last 24 hours.*

## 5. Feature Request Trends
*   **Rate Limit Management:** A significant portion of the community is requesting clearer visibility into rate limits, "fair" retry logic (exponential backoff), and distinct quotas for autonomous agents (`/fleet`) vs. interactive use to prevent agents from consuming user quotas.
*   **Plugin Management:** Users are asking for the ability to "toggle" plugins on/off without uninstalling them, similar to competitors like Claude Code or Gemini CLI.
*   **Persistent Context:** Requests to persist `/cwd` and `/add-dir` paths in config files to avoid repetitive setup across sessions.
*   **UX Standardization:** Requests for standard CLI behaviors like Shift+Enter for new lines and support for `XDG_CONFIG_HOME` conventions (without the dot-prefixed subdirectory violation).

## 6. Developer Pain Points
*   **The "Throttling" Wall:** The dominant frustration today is aggressive rate limiting. Developers feel that the CLI is unusable for sustained workflows, with reports of limits hitting after 1–2 tool calls immediately following a wait period.
*   **Model Parity Gaps:** There is confusion and annoyance regarding why specific models (e.g., Gemini 3.1 Pro, Opus 4.7) appear in VS Code but are missing or hidden in the CLI, despite being enabled in Org settings.
*   **Agent Reliability:** While powerful, `Autopilot` and `/fleet` are prone to infinite loops or getting stuck during cancellation, leading to lost time and manual intervention.
*   **Platform Stability:** UI regressions (blinking cursors, ugly bars, hidden agent names) in recent patches have shaken confidence in the release cycle quality control.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-04-17

## 1. Today's Highlights

Recent updates to the Kimi Code CLI focus heavily on **backend stability and "Thinking" model compatibility**. The community is actively addressing a bug where the "thinking process" visualization vanished (linked to new Opus 4.7 support), while developers have also shipped improvements to increase default task limits and fix loading indicators during agent turns.

## 2. Releases

**No new releases** in the last 24 hours. However, active development is occurring on the `main` branch, particularly regarding model compatibility patches.

## 3. Hot Issues

Here are the most discussed and impactful issues from the last 24 hours:

1.  **[#1865 Thinking process missing?](https://github.com/MoonshotAI/kimi-cli/issues/1865)** ([OPEN])
    *   **Impact:** High visibility (11 comments).
    *   **Summary:** Users reported a loss of visibility into the model's "thinking" process, describing it as a "negative optimization" that reduces a sense of security. This is likely related to the race condition in supporting newer model thinking formats.

2.  **[#1903 Error code: 400](https://github.com/MoonshotAI/kimi-cli/issues/1903)** ([OPEN])
    *   **Impact:** Breaking functional bug.
    *   **Summary:** Users on `v1.34.0` (macOS) are encountering 400 errors from the LLM provider. This suggests a mismatch between the client's request format and the API's expectations.

3.  **[#1378 JSON parsing error with control characters](https://github.com/MoonshotAI/kimi-cli/issues/1378)** ([CLOSED])
    *   **Impact:** Niche but critical for edge cases.
    *   **Summary:** Resolved an issue where tool calls failed if arguments contained control characters. Useful for users processing raw text data.

4.  **[#1910 IDEA CLI hangs with no response](https://github.com/MoonshotAI/kimi-cli/issues/1910)** ([OPEN])
    *   **Impact:** IDE integration workflow blocker.
    *   **Summary:** Users running the CLI via JetBrains IDEs report unresponsive hangs without error logs, making debugging difficult.

5.  **[#1897 Web UI hangs on MCP failure](https://github.com/MoonshotAI/kimi-cli/issues/1897)** ([OPEN])
    *   **Impact:** Stability for MCP users.
    *   **Summary:** If an MCP (Model Context Protocol) server fails to connect, the Web UI enters an infinite "waiting for response" state rather than timing out or erroring out gracefully.

6.  **[#1867 --yolo auto-approves plans in Plan Mode](https://github.com/MoonshotAI/kimi-cli/issues/1867)** ([OPEN])
    *   **Impact:** Safety workflow.
    *   **Summary:** Users want a separation between auto-approving *tools* (`--yolo`) and auto-approving the execution *plan*. Currently, `--yolo` skips the plan review entirely, which poses a risk for complex operations.

## 4. Key PR Progress

Recent pull requests indicate a push toward better model support and UX polish:

1.  **[#1911 Adaptive thinking for Opus 4.7+](https://github.com/MoonshotAI/kimi-cli/pull/1911)** ([OPEN])
    *   **Details:** Fixes `_use_adaptive_thinking()` to support Claude Opus 4.7+.
    *   **Why it matters:** This is likely the fix for Issue #1865. The code was hardcoded for `opus-4.6`, causing 400 errors or missing thinking blocks on the newer 4.7 model.

2.  **[#1908 Increase max_steps_per_turn (100 → 500)](https://github.com/MoonshotAI/kimi-cli/pull/1908)** ([CLOSED])
    *   **Details:** Increases the default number of steps an agent can take in a single turn from 100 to 500.
    *   **Why it matters:** Significantly improves the CLI's ability to handle complex, multi-file refactoring tasks without hitting step limits or requiring manual configuration overrides.

3.  **[#1909 Moon spinner fallback](https://github.com/MoonshotAI/kimi-cli/pull/1909)** ([CLOSED])
    *   **Details:** Ensures the "moon spinner" (loading indicator) appears during *all* active turn gaps.
    *   **Why it matters:** Addresses user confusion where the screen would go blank during tool processing, making it unclear if the CLI was working or frozen.

4.  **[#1797 Ctrl+A scope toggle for /sessions](https://github.com/MoonshotAI/kimi-cli/pull/1797)** ([CLOSED])
    *   **Details:** Adds `Ctrl+A` functionality to the `/sessions` picker to toggle between "Current Directory" and "All Directories."
    *   **Why it matters:** Aligns the CLI UX with Claude Code's behavior, allowing easier navigation of session history.

5.  **[#1798 Telemetry integration](https://github.com/MoonshotAI/kimi-cli/pull/1798)** ([OPEN])
    *   **Details:** Integrates telemetry tracking across interactive and non-interactive modes.
    *   **Why it matters:** Provides the dev team with better data on how the CLI is used in the wild, likely to inform future feature prioritization.

## 5. Feature Request Trends

Based on the open issues, the community is asking for:

*   **Granular Control over Auto-Approval:** Users want `--yolo` to auto-approve *tools* but still require confirmation for the *execution plan*. This suggests a desire for speed in low-risk tasks (writing code) but safety in high-risk tasks (file system operations).
*   **Robustness in "Thinking" Features:** There is a strong demand to ensure the thinking process is visible and compatible with the latest model iterations (Opus 4.7+).

## 6. Developer Pain Points

*   **The "Blank Screen" Anxiety:** Developers are frustrated when the CLI pauses without feedback (fixed in PR #1909, but highlighted by recent complaints).
*   **IDE Integration Hangs:** The JetBrains/IntelliJ integration appears to be suffering from silent failures (Issue #1910), breaking the workflow for developers who prefer GUIs over the terminal.
*   **MCP Fragility:** If an external MCP server goes down, it currently hangs the entire Web UI session rather than failing gracefully or disabling that specific tool.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-17

## 1. Today's Highlights
The **v1.4.7** release focuses on reasoning model compatibility, specifically addressing GitHub Copilot's `gpt-5-mini` and fixing `max_tokens` validation issues for OpenAI/Claude models via Cloudflare AI Gateway. The community is actively debugging a high-impact regression in **v1.4.6** where the `write` tool hangs indefinitely, alongside emerging support challenges for the latest "thinking" models (GPT 5.4, Claude Opus 4.7) which fail on unsupported parameters like `thinking.type.enabled`.

## 2. Releases
**v1.4.7** is now available.
*   **Core Compatibility:** GitHub Copilot's `gpt-5-mini` now defaults to low reasoning effort to ensure better request compatibility.
*   **Workspace Auth:** Provider sign-ins now persist across workspace sessions via shared auth context.
*   **Gateway Fixes:** Cloudflare AI Gateway integration updated to drop `max_tokens` for OpenAI reasoning models to prevent API errors.

## 3. Hot Issues
1.  **[#22872][BUG] `write` tool hangs indefinitely in 1.4.6**
    *   **Impact:** Critical regression for file operations.
    *   **Details:** The tool enters a "running" state but never completes for any content size; works fine in v1.4.3.
    *   **Link:** [anomalyco/opencode#22872](https://github.com/anomalyco/opencode/pull/22872)

2.  **[#22863][BUG] Opus 4.7 fails: "thinking.type.enabled" is not supported**
    *   **Impact:** Blocks usage of the latest Claude model.
    *   **Details:** OpenCode sends a parameter that Anthropic's API explicitly rejects, requiring a switch to `thinking.type.adaptive`.
    *   **Link:** [anomalyco/opencode#22863](https://github.com/anomalyco/opencode/pull/22863)

3.  **[#22374][BUG] Cloudflare AI Gateway: Unsupported parameter 'max_tokens'**
    *   **Impact:** Breaks GPT-5.4 and other modern OpenAI models when proxied.
    *   **Details:** The gateway enforces `max_completion_tokens`, but OpenCode defaults to `max_tokens`.
    *   **Link:** [anomalyco/opencode#22374](https://github.com/anomalyco/opencode/pull/22374)

4.  **[#22852][BUG] OpenCode does not persist thinking blocks for Claude Opus 4.7**
    *   **Impact:** Loss of context for debugging model reasoning.
    *   **Details:** Even with overrides, thinking blocks are stripped from history despite the token costs being incurred.
    *   **Link:** [anomalyco/opencode#22852](https://github.com/anomalyco/opencode/pull/22852)

5.  **[#22630][BUG] OpenCode Desktop 1.4.6 shows blank window on macOS 26.4 (Tahoe)**
    *   **Impact:** Usability crash for beta OS users.
    *   **Details:** The app launches but renders a completely unresponsive white window.
    *   **Link:** [anomalyco/opencode#22630](https://github.com/anomalyco/opencode/pull/22630)

6.  **[#20695][PERF] Memory Megathread**
    *   **Impact:** Performance degradation over time.
    *   **Details:** A centralized thread to track memory leaks; devs are explicitly asking for heap snapshots rather than AI suggestions.
    *   **Link:** [anomalyco/opencode#20695](https://github.com/anomalyco/opencode/pull/20695)

7.  **[#7030][BUG] Ollama (qwen2.5-coder): No files created/modified**
    *   **Impact:** Local agent workflows fail silently.
    *   **Details:** Tool calls (edit/write) show as executed in JSON, but the disk remains untouched.
    *   **Link:** [anomalyco/opencode#7030](https://github.com/anomalyco/opencode/pull/7030)

8.  **[#21034][BUG] Gemma-4 tool loops/failures**
    *   **Impact:** Local LM Studio/Llama.cpp users.
    *   **Details:** Despite tokenizer fixes, the models enter tool loops or fail during interactions.
    *   **Link:** [anomalyco/opencode#21034](https://github.com/anomalyco/opencode/pull/21034)

9.  **[#13984][BUG] Cannot copy and paste in CLI**
    *   **Impact:** Core workflow frustration.
    *   **Details:** Clipboard integration appears broken (shows "copied" but pastes nothing).
    *   **Link:** [anomalyco/opencode#13984](https://github.com/anomalyco/opencode/pull/13984)

10. **[#22806][BUG] Session titles no longer auto-update**
    *   **Impact:** Session management regression.
    *   **Details:** Upgrading to 1.4.6 causes session names to remain stuck as timestamps (e.g., `New session - 2026-04-16...`).
    *   **Link:** [anomalyco/opencode#22806](https://github.com/anomalyco/opencode/pull/22806)

## 4. Key PR Progress
1.  **[#22929] Tooling: Add unwrap-and-self-reexport scripts** (by `kitlangton`)
    *   Automates the migration of TypeScript namespaces to flat exports, improving import ergonomics and tree-shaking.
    *   [Link](https://github.com/anomalyco/opencode/pull/22929)

2.  **[#22964] Refactor: Unwrap Shell namespace** (by `kitlangton`)
    *   Part of a larger refactor to move from `export namespace Shell` to flat exports while maintaining backward compatibility aliases.
    *   [Link](https://github.com/anomalyco/opencode/pull/22964)

3.  **[#22950] Refactor: Unwrap ConfigSkills namespace** (by `kitlangton`)
    *   Modernizes internal configuration structure.
    *   [Link](https://github.com/anomalyco/opencode/pull/22950)

4.  **[#22938] Refactor: Unwrap Protected namespace** (by `kitlangton`)
    *   Refactors file protection logic exports.
    *   [Link](https://github.com/anomalyco/opencode/pull/22938)

5.  **[#22952] Refactor: Unwrap TuiConfig namespace** (by `kitlangton`)
    *   Targets the TUI configuration modules for flatter exports.
    *   [Link](https://github.com/anomalyco/opencode/pull/22952)

6.  **[#22947] Refactor: Unwrap CopilotModels namespace** (by `kitlangton`)
    *   Specifically targets the GitHub Copilot provider model definitions.
    *   [Link](https://github.com/anomalyco/opencode/pull/22947)

7.  **[#22821] Fix: Tidy stale ripgrep references** (by `ariane-emory`)
    *   Cleans up outdated documentation and tool descriptions regarding `ripgrep` usage.
    *   [Link](https://github.com/anomalyco/opencode/pull/22821)

8.  **[#22934] Refactor: Unwrap Workspace namespace** (by `kitlangton`)
    *   Restructures the workspace control plane exports.
    *   [Link](https://github.com/anomalyco/opencode/pull/22934)

9.  **[#20467] Fix: Blank assistant text (MCP regression)** (by `kkugot`)
    *   Addresses a regression from the AI SDK v5->v6 migration that caused blank text in the TUI when MCP servers are active.
    *   [Link](https://github.com/anomalyco/opencode/pull/20467)

10. **[#22935] Refactor: Unwrap Agent namespace** (by `kitlangton`)
    *   Refactors core agent-related exports.
    *   [Link](https://github.com/anomalyco/opencode/pull/22935)

## 5. Feature Request Trends
*   **UI Customization:** Users are requesting a configuration option to set the **sidebar state** (open/closed) by default to save screen real estate on smaller windows ([#3682](https://github.com/anomalyco/opencode/pull/3682)).
*   **Persistent Thinking Blocks:** Users want the ability to keep and view extended reasoning/thinking blocks in the chat history for models like Opus 4.7, rather than having them stripped or hidden ([#22852](https://github.com/anomalyco/opencode/pull/22852)).

## 6. Developer Pain Points
*   **"Thinking" Parameter Fragmentation:** The rapid release of "reasoning" models (GPT 5.4, Opus 4.7) has introduced a fragmentation of parameters (e.g., `thinking.type.enabled` vs `adaptive`, `max_tokens` vs `max_completion_tokens`). OpenCode is currently struggling to normalize these parameters across different providers (OpenAI, Azure, Anthropic, Cloudflare), leading to frequent crashes.
*   **Silent Failures:** There are multiple reports of silent failures where tools appear to execute (returning JSON payloads) but perform no action on disk ([#7030](https://github.com/anomalyco/opencode/pull/7030)) or fail to stream output ([#21281](https://github.com/anomalyco/opencode/pull/21281)), making debugging difficult for users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-17

## 1. Today's Highlights
The **v0.14.5-nightly.20260416** build has been released, arriving amidst significant community unrest regarding authentication services. A widespread **401 "invalid access token" error** is currently impacting users, correlating with a controversial proposal to drastically reduce the OAuth free tier quota from 1,000 to 100 requests per day. Concurrently, the team is pushing forward with core agent improvements, including concurrency fixes for tool registries and better sub-agent coordination.

## 2. Releases
*   **v0.14.5-nightly.20260416 (a6612940f)**
    *   **Status**: Nightly Build
    *   **Context**: This release coincides with the authentication disruptions reported by users on version `0.14.5`. No specific feature changelog was provided in the data, but it represents the latest commit following a flurry of merges related to CLI input handling and tool registry fixes.
    *   [View Release](https://github.com/QwenLM/qwen-code/compare/v0.14.5...v0.14.5-nightly.20260416.a6612940f)

## 3. Hot Issues
*   **[#3203 OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** (83 comments)
    *   **Impact**: High. Proposes cutting the free quota from 1,000 to 100 requests/day and phasing out the free tier.
    *   **Reaction**: Significant community concern; the most discussed topic in the last 24 hours.
*   **[#3335 Internal error: 401 invalid access token](https://github.com/QwenLM/qwen-code/issues/3335)** (13 comments)
    *   **Impact**: Critical. Users are completely locked out of the service despite having valid credentials.
    *   **Reaction**: Widespread reports of "401" errors across MacOS and Windows environments.
*   **[#1855 OAuth session persists after switching to API key](https://github.com/QwenLM/qwen-code/issues/1855)** (9 comments)
    *   **Impact**: Medium. A "zombie" OAuth session causes 401 errors even after the user switches to a paid Coding Plan API key.
    *   **Reaction**: Highlights a state management bug where old auth tokens are not invalidated correctly.
*   **[#3365 Burn in the Chinese hell / Feedback Spam](https://github.com/QwenLM/qwen-code/issues/3365)** (6 comments)
    *   **Impact**: Low (Technical), High (Community Sentiment). Appears to be spam/negative feedback reaction to policy changes.
    *   **Reaction**: Indicates user frustration; likely related to the sudden service degradation.
*   **[#3348 Access token expired (VS Code Extension)](https://github.com/QwenLM/qwen-code/issues/3348)** (3 comments, 5👍)
    *   **Impact**: High. Specifically affects the VS Code Companion extension.
    *   **Reaction**: Users report the extension worked perfectly until yesterday (Apr 16).
*   **[#3357 "we're cooked" / Free API removed](https://github.com/QwenLM/qwen-code/issues/3357)** (3 comments)
    *   **Impact**: High. User perception that the free API has been revoked without notice.
*   **[#1210 Support XDG Base Directory Specification](https://github.com/QwenLM/qwen-code/issues/1210)** (3 comments, 6👍)
    *   **Impact**: Medium. Request to replace `~/.qwen` with standard Linux paths (`~/.config`, etc.).
    *   **Reaction**: Long-standing feature request for better Linux hygiene.
*   **[#3240 Default Documentation Language](https://github.com/QwenLM/qwen-code/issues/3240)** (3 comments)
    *   **Impact**: Low. Request to default documentation to Chinese for international users.
*   **[#3374 ACCESS TO THE EXTENSION (Post-login failure)](https://github.com/QwenLM/qwen-code/issues/3374)** (2 comments)
    *   **Impact**: High. User successfully logs in ("Successfully logged in") but immediately receives a 401 error upon sending the first message.
*   **[#3323 Localize slash command descriptions](https://github.com/QwenLM/qwen-code/issues/3323)** (2 comments)
    *   **Impact**: Low. Request for i18n support in CLI slash commands.

## 4. Key PR Progress
*   **[#3297 fix(tool-registry): add lazy factory registration...](https://github.com/QwenLM/qwen-code/pull/3297)**
    *   **Detail**: Fixes a **P0 concurrency bug** where tools like `AgentTool` could be instantiated multiple times simultaneously, leaking memory and listeners.
*   **[#3313 fix(core): recover from truncated tool calls](https://github.com/QwenLM/qwen-code/pull/3313)**
    *   **Detail**: Implements "multi-turn continuation" to handle cases where the model output is cut off due to `max_tokens` limits, preventing `params must have required property` errors.
*   **[#3320 fix(core): limit skill watcher depth](https://github.com/QwenLM/qwen-code/pull/3320)**
    *   **Detail**: Fixes **FD exhaustion** (file descriptor limits) caused by the skill watcher recursively watching `node_modules`.
*   **[#3318 feat(cli): add API preconnect](https://github.com/QwenLM/qwen-code/pull/3318)**
    *   **Detail**: Fires a "fire-and-forget" HEAD request during startup to warm up TCP/TLS connections, reducing first-call latency by 100-200ms.
*   **[#3214 feat(core): replace fdir crawler with git ls-files](https://github.com/QwenLM/qwen-code/pull/3214)**
    *   **Detail**: Replaces the heavy file-system crawler with `git ls-files` and `ripgrep` for the `@` file mention autocomplete, drastically improving performance on large repos.
*   **[#3328 feat(cli): localize slash command descriptions](https://github.com/QwenLM/qwen-code/pull/3328)**
    *   **Detail**: Adds runtime translation support and caching for slash command descriptions (addresses #3323).
*   **[#3319 feat(cli): add early input capture](https://github.com/QwenLM/qwen-code/pull/3319)**
    *   **Detail**: Fixes a UX issue where keystrokes typed during REPL startup (200-500ms window) were lost.
*   **[#3303 fix(editor): detect Zed.app on macOS](https://github.com/QwenLM/qwen-code/pull/3303)**
    *   **Detail**: Adds support for detecting the Zed editor on macOS even when the `zed` CLI is not in the user's PATH.
*   **[#3178 feat(core): detect tool validation retry loops](https://github.com/QwenLM/qwen-code/pull/3178)**
    *   **Detail**: Prevents infinite loops when the model generates invalid tool parameters by detecting repeated validation failures and injecting a stop directive.
*   **[#3375 ci(stale): enable stale/close policy](https://github.com/QwenLM/qwen-code/pull/3375)**
    *   **Detail**: Maintenance update to enable auto-closing of stale PRs after 35 days of inactivity to help manage the backlog of 157 open PRs.

## 5. Feature Request Trends
*   **Authentication Flexibility**: Users are requesting clearer handling of API keys vs. OAuth, specifically wanting to ensure that switching to a paid plan (API Key) completely bypasses OAuth token limitations (Issue #1855).
*   **Localization (i18n)**: There is a renewed push for Chinese language support in UI elements, specifically regarding slash command descriptions (Issue #3323) and documentation defaults (Issue #3240).
*   **Linux Hygiene**: Continued requests for adherence to the [XDG Base Directory Specification](https://github.com/QwenLM/qwen-code/issues/1210) to manage config files in standard Linux locations rather than `~/.qwen`.

## 6. Developer Pain Points
*   **Widespread Auth Failures**: The dominant issue today is a service-wide outage of the OAuth layer (Error 401). This affects both free tier users and those who have recently switched to API keys, rendering the CLI and VS Code extension non-functional.
*   **Policy Uncertainty**: The proposal to slash free tier quotas (Issue #3203) has created anxiety among hobbyist and open-source developers who rely on the free tier for testing.
*   **Resource Management**: Developers are experiencing resource exhaustion issues, specifically `FD` limits caused by aggressive file watching in node_modules (PR #3320) and memory leaks from concurrent tool instantiation (PR #3297).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*