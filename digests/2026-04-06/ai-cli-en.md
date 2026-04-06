# AI CLI Tools Community Digest 2026-04-06

> Generated: 2026-04-06 00:12 UTC | Tools covered: 8

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

## Cross-Tool Analysis: AI CLI Tools Ecosystem (2026-04-06)

### 1. Ecosystem Overview
As of April 2026, the AI CLI ecosystem is in a **stabilization phase** following aggressive expansion in late 2025. Development focus has shifted from basic model integration to **operational reliability**, **cost transparency**, and **agentic workflow management**. While tools are rapidly iterating on UX features—such as "Fast Modes" and self-inspection capabilities—the community is currently plagued by **platform-specific regressions**, particularly on Windows and regarding resource management (CPU/Memory leaks). There is a clear industry-wide movement toward **architectural introspection** (allowing agents to debug their own runtime states) and **multi-agent orchestration**, though these features are often nascent or buggy.

### 2. Activity Comparison

| Tool | Release Status | Issue Traction (Top Issues) | PR Velocity | Stability Status |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 🟡 No Release (Active Dev) | **High** (Critical regression on Rate Limits) | High (Security fix, OS efforts) | **Critical Issues** (Cost tracking, Session loss) |
| **OpenAI Codex** | 🟡 No Release (Active Dev) | **Severe** (Kernel panics, Resource burn) | High (WebRTC overhaul, Analytics) | **Unstable** (macOS/Win crashes) |
| **Gemini CLI** | 🟡 No Release | **Moderate** (Security/Code Quality focus) | **Very High** (Arch refactor, Steering) | **Stabilizing** (Fixing SSH/Encoding) |
| **OpenCode** | 🟡 No Release (Hotfix PRs) | **Moderate** (Cost leaks, Auth issues) | High (TPS vis, Mobile opt) | **Regressing** (v1.3.x tool calling issues) |
| **Qwen Code** | 🟡 No Release | **Moderate-High** (UX friction, Flickering) | High (Slash cmds, Config tools) | **Usability Issues** (UI bugs, Permissions) |
| **Kimi Code** | 🔴 Stagnant (v1.30.0 bugfix) | **Low** (JSON serialization crashes) | **Extreme** (Python -> TS rewrite proposal) | **Volatile** (Major architectural debate) |
| **Charm Crush** | ✅ Nightly Build | **Low** (UI regressions) | Low (Self-inspection tools) | **Stable** (Maintenance mode) |
| **Copilot CLI** | 🟡 No Release | **Low** (Windows automation) | Low (Closed/Rejected PRs) | **Slowed** (Enterprise config gaps) |

### 3. Shared Feature Directions
*   **Self-Inspecting Agents ("Self-Awareness")**
    *   **Charm Crush (#2561)** and **Qwen Code (#2911)** are leading the charge in building tools (`crush_info`, `ConfigTool`) that allow the AI to programmatically read its own configuration and logs. This addresses the "Black Box" frustration where agents fail because they don't know their own runtime constraints.
*   **Streaming Efficiency & "Fast Mode"**
    *   **Gemini CLI (#24717)**, **OpenAI Codex**, and **Qwen Code** are implementing "fast" or "compact" modes. These features strip pre-flight requests, verbose logging, and session saving to minimize latency and token cost for one-shot queries.
*   **Multi-Window / Session Persistence**
    *   **Claude Code** and **GitHub Copilot CLI** communities are demanding "Multi-window" desktop support and "Session Forking" (#2526). Developers increasingly need to run parallel agent tasks (e.g., one refactoring, one testing) without losing the parent context.
*   **Advanced Security / Policy Scoping**
    *   **Gemini CLI (#24722)** is introducing LLM-suggested policy scoping for tool approvals (e.g., suggesting `git status` but blocking `git push`), while **GitHub Copilot CLI** users are requesting persistent directory permissions (#2284) to avoid re-authorizing every session.

### 4. Differentiation Analysis

*   **OpenAI Codex vs. Claude Code:** **Codex** is currently prioritizing **infrastructure overhaul** (shifting to WebRTC for audio, denormalizing metadata for better analytics) but is suffering from severe **client-side stability** (Kernel panics). **Claude Code** is battling **server-side trust issues** (users cannot trust the billing meter or session limits), driving higher community frustration despite having generally reliable client-side performance.
*   **Gemini CLI (The "Architect"):** Differentiates itself through **aggressive behavioral steering**. It is the only tool actively using background LLM calls to correct bad patterns (like unsafe object cloning) and refactoring the context engine (V0 Episodic Manager). It targets developers who want an agent that learns *not* to make mistakes.
*   **Qwen Code (The "Feature King"):** Leads in unique UX slash commands (`/plan`, `/thinkback`). It targets power users who want granular control over the agent's reasoning process and visibility into internal thinking blocks.
*   **Kimi Code (The "Volatile Experimenter"):** Faces an identity crisis. The community push to rewrite the core from Python to TypeScript/Bun (#1707) suggests the current architecture is failing to meet performance expectations, setting it apart from the more stable, incremental evolution seen in OpenCode or Crush.

### 5. Community Momentum & Maturity

*   **Most Active & Volatile:** **Kimi Code** and **OpenAI Codex**. Kimi is volatile due to internal architectural debates (Python vs. TS), while OpenAI Codex is volatile due to severe resource bugs affecting premium users.
*   **Most Mature/Stable:** **Charm Crush** and **GitHub Copilot CLI**. Both have moved past the "breakneck pace" of feature addition and are focused on polish, niche integrations, and maintenance.
*   **Trending Up (Rapid Iteration):** **Qwen Code** and **Gemini CLI**. Both are shipping significant functional improvements (ConfigTools, LLM-based security) almost daily, indicating a highly responsive engineering team.
*   **Trending Down (Technical Debt):** **Claude Code** and **OpenCode**. While active, they are currently dominated by bugfixing regressions from previous major version bumps (v1.3.x for OpenCode, Spring updates for Claude).

### 6. Trend Signals for Technical Decision-Makers

1.  **The "Cost Anxiety" Barrier:** Across Claude Code, OpenCode, and OpenAI Codex, the top issues relate to **token counting discrepancies** and **rapid quota depletion**. For enterprise adoption, transparent usage metering is now more critical to users than raw model speed.
2.  **Windows is the "Canary in the Coal Mine":** If an AI CLI tool works on macOS but fails on Windows (e.g., Shell injection issues, Mojibake text, Service failures), it signals a lack of robustness in handling shell environments. **Gemini CLI (#24170)** and **OpenCode (#21135)** recently patched critical Windows-specific flaws.
3.  **Agents Must Be Debuggable:** The popularity of PRs like **Charm Crush #2561** (view active config) and **Qwen Code #2917** (analyze conversation history) proves that "vibe-based" prompting is fading. Developers are moving toward **observable, deterministic agent workflows** where they can inspect *why* an agent took an action.
4.  **MCP (Model Context Protocol) is the Standard:** Every tool (Codex, Kimi, Qwen) is scrambling to fix MCP integration bugs. The tool that masters reliable, stateful MCP connections will likely dominate the "local-first" development market.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

## 1. Top Skills Ranking
Based on community engagement via Pull Requests, the following skills have garnered the most attention and discussion:

*   **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** (Open)
    Addresses a critical gap in AI-generated output quality by preventing typographic errors such as orphan word wraps, widow paragraphs, and numbering misalignment. This skill targets the visual polish of every document Claude generates.

*   **[#210 frontend-design](https://github.com/anthropics/skills/pull/210)** (Open)
    A significant revision of the existing frontend-design skill aimed at improving clarity and actionability. The update ensures instructions are optimized for Claude's execution context within a single conversation, moving away from vague guidance to specific, implementable steps.

*   **[#83 skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (Open)
    Introduces "meta-skills" to the marketplace. These tools analyze other skills across five dimensions, including structure, documentation, and security, providing a quality assurance layer for the ecosystem itself.

*   **[#486 ODT (OpenDocument Text)](https://github.com/anthropics/skills/pull/486)** (Open)
    Adds support for creating, parsing, and filling `.odt` files (ISO/IEC 26300). This skill bridges the gap between Claude Code and open-source office suites like LibreOffice and Collabora, handling the ZIP/XML structure of ODT files natively.

*   **[#509 CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** (Open)
    A foundational infrastructure addition rather than a feature skill. This PR addresses the "community health gap" by adding contribution guidelines, aiming to improve the repository's health score from 25% by formalizing submission standards.

## 2. Community Demand Trends
Analysis of open Issues reveals strong user demand for better governance, tooling, and platform integration:

*   **Enterprise Identity & Security Integration** ([Issue #532](https://github.com/anthropics/skills/issues/532)): Enterprise users utilizing SSO cannot use features requiring `ANTHROPIC_API_KEY`, creating a barrier for advanced skill evaluation tools.
*   **Trust Boundaries & Namespacing** ([Issue #492](https://github.com/anthropics/skills/issues/492)): There is a call for distinct namespaces to distinguish official Anthropic skills from community submissions to prevent "impersonation" and trust abuse.
*   **Workflow Automation** ([Issue #16](https://github.com/anthropics/skills/issues/16), [Issue #228](https://github.com/anthropics/skills/issues/228)): Users are demanding better ways to share skills within organizations (org-wide sharing) and desire a standard protocol to expose Skills as APIs (similar to MCPs) for broader software integration.
*   **Diagnostic Reliability** ([Issue #556](https://github.com/anthropics/skills/issues/556)): Community members are actively debugging evaluation scripts (e.g., `run_eval.py`), indicating a desire for robust tooling to test if skills actually trigger as intended.

## 3. High-Potential Pending Skills
These PRs are active and represent significant new capabilities likely to impact the ecosystem soon:

*   **[PR #723 testing-patterns](https://github.com/anthropics/skills/pull/723)**
    A comprehensive skill covering the full testing stack (Unit, Integration, E2E), philosophies like the "Testing Trophy," and framework-specific guidance for React. It codifies senior engineering testing practices into Claude's context.

*   **[PR #659 quality-playbook](https://github.com/anthropics/skills/pull/659)**
    Revives traditional Quality Engineering (QE) practices—often cut due to cost—by using AI to automate them. It focuses on generating quality systems from source requirements rather than just code.

*   **[PR #806 sensory (macOS Automation)](https://github.com/anthropics/skills/pull/806)**
    Teaches Claude to use `osascript` (AppleScript) for native macOS automation, offering a more stable alternative to screenshot-based computer use with a tiered permission system for safety.

## 4. Skills Ecosystem Insight
The community is concentrating its efforts on **maturation and operational reliability**, moving beyond experimental novelty to build enterprise-grade infrastructure, formalize quality assurance (QA) standards, and solve deep integration challenges like typography and legacy file formats.

---

# Claude Code Community Digest: 2026-04-06

## 1. Today's Highlights

The community is actively troubleshooting significant session management and cost tracking issues, with particular concern directed at **abnormal rate limit consumption** affecting Max plan users since late March. While no new releases were published today, development efforts are evident in the repository, including high-interest Pull Requests to **open-source the Claude Code core** and a newly identified security vulnerability in GitHub Actions workflows.

## 2. Releases

**Status:** No new releases published in the last 24 hours.

## 3. Hot Issues

**1. [Max plan session limits exhausted abnormally fast (CLI usage)](https://github.com/anthropics/claude-code/issues/38335)**
*   **Why it matters:** The highest-activity issue (427 comments) indicates a critical regression where 5-hour usage limits are consumed in minutes.
*   **Community Reaction:** High frustration (341 👍); users report CLI sessions are effectively unusable due to rapid quota depletion starting March 23.

**2. [5-hour limit reached in less than 1h30](https://github.com/anthropics/claude-code/issues/6457)**
*   **Why it matters:** A long-standing issue (118 comments) corroborating the rapid token depletion bugs, specifically tracking API cost discrepancies.
*   **Community Reaction:** Users suspect a regression in background usage calculation or context window accounting.

**3. [Conversation history invalidated on subsequent turns](https://github.com/anthropics/claude-code/issues/40524)**
*   **Why it matters:** A functional regression causing the agent to lose context mid-conversation, severely impacting workflows. Recently updated but remains unresolved.
*   **Community Reaction:** Significant concern (156 👍) over data integrity and continuity.

**4. [FEATURE: Multi-window support in Claude Code Desktop](https://github.com/anthropics/claude-code/issues/30154)**
*   **Why it matters:** Top feature request for the Desktop app. Developers need to view multiple sessions simultaneously rather than switching via sidebar.
*   **Community Reaction:** Strong support (70 👍); viewed as essential for parity with other coding assistants.

**5. [Terminal randomly scrolls to top/bottom](https://github.com/anthropics/claude-code/issues/34845)**
*   **Why it matters:** UX regression in the TUI where the viewport jumps unpredictably, breaking scrollback navigation.
*   **Community Reaction:** High annoyance (39 👍); heavily impacts usability in terminal environments.

**6. [Cowork: Minor version update deletes chat history](https://github.com/anthropics/claude-code/issues/38055)**
*   **Why it matters:** Data loss bug where upgrading the Cowork feature wipes scheduled tasks and history.
*   **Community Reaction:** Critical concern over data safety during updates.

**7. [AutoDream: /dream returns 'Unknown skill'](https://github.com/anthropics/claude-code/issues/38461)**
*   **Why it matters:** Core functionality broken; the background dreaming task fails to start despite being enabled in settings.
*   **Community Reaction:** Blocks workflow automation features.

**8. [CoworkVMService fails to start on Windows](https://github.com/anthropics/claude-code/issues/43986)**
*   **Why it matters:** Renders the Desktop workspace permanently broken on Windows 11 until manual service intervention occurs.
*   **Community Reaction:** Blocks usage entirely for Windows desktop users.

**9. [CLAUDE.md rules are not reliably enforced](https://github.com/anthropics/claude-code/issues/42863)**
*   **Why it matters:** The agent systematically ignoring local instructions breaks the core promise of "customizable" AI agents.
*   **Community Reaction:** "Selective Execution Drift" is causing trust issues with the tool's reliability.

**10. [Cowork VM guest connection timeout (HDD systems)](https://github.com/anthropics/claude-code/issues/44007)**
*   **Why it matters:** The default 60s timeout is too short for systems with traditional hard drives, causing Cowork to stall during boot.

## 4. Key PR Progress

**1. [feat: add preserve-session plugin](https://github.com/anthropics/claude-code/pull/39148)**
*   **Details:** Introduces a plugin to maintain session history continuity even when project directories are renamed or moved. A highly requested quality-of-life improvement.

**2. [feat: open source claude code ✨](https://github.com/anthropics/claude-code/pull/41447)**
*   **Details:** A community-driven effort to fully open-source the codebase.

**3. [Fully Open Source Claude Code](https://github.com/anthropics/claude-code/pull/41518)**
*   **Details:** A technical attempt to extract source files from npm maps and configure a build system (Bun). Represents strong community desire for transparency.

**4. [fix: security issue in claude-dedupe-issues.yml](https://github.com/anthropics/claude-code/pull/43824)**
*   **Details:** Fixes a HIGH severity vulnerability (shell injection) found in the repository's GitHub Actions workflow.
*   **Impact:** Critical security hygiene for the project infrastructure.

## 5. Feature Request Trends

*   **Desktop UI Enhancements:** Users are clamoring for multi-window support in Desktop, similar to standard IDE behavior.
*   **Session Management:** Requests for auto-naming, auto-coloring, and better handling of session persistence across path changes are trending.
*   **Plugin Usability:** Users want bulk plugin installation capabilities (`/plugin install` with multiple args).

## 6. Developer Pain Points

*   **Windows Compatibility:** A cluster of issues regarding **Unicode Mojibake** in the Edit Tool, **CoworkVMService** failures, and **CRLF line ending** parsing errors suggests the Windows experience is currently unstable.
*   **Cost Anxiety:** The recurring "session limits exhausted" issues indicate developers feel they cannot trust the billing/usage meter, leading to "cost anxiety."
*   **Reliability of Context:** Issues with **CLAUDE.md being ignored** and **conversation history invalidation** point to frustration with the agent's ability to maintain consistent context over long sessions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-04-06

## 1. Today's Highlights
The community is currently facing significant stability and performance issues, particularly surrounding the VS Code extension and CLI on macOS. While **no new releases** were published in the last 24 hours, the repository is highly active with a focus on **analytics infrastructure** (PRs #16706–#16638), **WebRTC audio transport**, and critical **TUI bug fixes** for the upcoming version.

## 2. Latest Releases
**Status:** No new releases in the last 24 hours.

## 3. Hot Issues
**1. Critical Rate-Limiting & Token Usage**
*   **[Issue #14593](https://github.com/openai/codex/issues/14593)**: *[bug, rate-limits] Burning tokens very fast*
    *   **Why it matters:** This is the most active thread (434 comments). Users report excessive token consumption even in idle states.
    *   **Reaction:** High frustration (168 👍); impacting Business and Pro subscribers significantly.

**2. Stability & Crashes (macOS/Windows)**
*   **[Issue #16866](https://github.com/openai/codex/issues/16866)**: *[BUG] Codex v0.118.0 causes macOS kernel panic (os_refcnt overflow)*
    *   **Why it matters:** Reports of kernel panics on Apple Silicon M-series chips represent a severe stability risk.
*   **[Issue #16231](https://github.com/openai/codex/issues/16231)**: *[regression] High CPU usage on macOS after updating...*
    *   **Why it matters:** A specific regression in version `26.325.31654` causing overheating on M5 Pro MacBook.
*   **[Issue #15323](https://github.com/openai/codex/issues/15323)**: *[bug, windows-os] Codex crashed with error 4294967295*
    *   **Why it matters:** Crashes are preventing the app from opening on Windows 11.

**3. CLI & TUI Regressions**
*   **[Issue #16862](https://github.com/openai/codex/issues/16862)**: *[CLI] Codex CLI leaves orphaned arm64 processes at ~80–100% CPU*
    *   **Why it matters:** Improper process cleanup on macOS is causing resource exhaustion.
*   **[Issue #16028](https://github.com/openai/codex/issues/16028)**: *[regression] 0.114.0 upgrade... somewhat breaks MCP*
    *   **Why it matters:** MCP (Model Context Protocol) functionality is degraded for users of recent CLI versions.
*   **[Issue #16849](https://github.com/openai/codex/issues/16849)**: *[extension] VSCode extension: open-in-targets error loop causes high CPU*
    *   **Why it matters:** A 1-minute interval polling loop is causing the VS Code extension to hang.

**4. Usability & Features**
*   **[Issue #8361](https://github.com/openai/codex/issues/8361)**: *[enhancement] Add Feature to login to codex cli with github copilot subscription*
    *   **Why it matters:** High demand for enterprise interoperability.
*   **[Issue #6427](https://github.com/openai/codex/issues/6427)**: *[bug, TUI] Codex Truncates Chat Messages When Scrolling*
    *   **Why it matters:** Long-term issue causing data loss during code review.
*   **[Issue #16868](https://github.com/openai/codex/issues/16868)**: *[bug, TUI] `/resume` not showing the thread name*
    *   **Why it matters:** Workflow disruption for users managing multiple threads.

## 4. Key PR Progress
**1. Analytics & Observability**
*   **[PR #16706](https://github.com/openai/codex/pull/16706)**: *add steering metadata*
*   **[PR #16641](https://github.com/openai/codex/pull/16641)**: *add token usage metadata*
*   **[PR #16638](https://github.com/openai/codex/pull/16638)**: *add protocol-native turn timestamps*
*   **[PR #16870](https://github.com/openai/codex/pull/16870)**: *denormalize thread metadata onto turn events*
    *   **Impact:** These PRs collectively overhaul the internal analytics system, allowing for much better tracing of token usage, turn steering, and execution timing.

**2. Realtime Audio Transport**
*   **[PR #16805](https://github.com/openai/codex/pull/16805)**: *Replace realtime websocket transport with WebRTC (1/4)*
*   **[PR #16806](https://github.com/openai/codex/pull/16806)**: *Route TUI realtime audio through shared echo cancellation (2/4)*
    *   **Impact:** A major infrastructure shift from WebSockets to WebRTC for improved voice interaction stability.

**3. CLI/TUI Fixes & Auth**
*   **[PR #16833](https://github.com/openai/codex/pull/16833)**: *Fix TUI fast mode toggle regression*
    *   **Impact:** Fixes a bug where `/fast off` failed to reset the service tier.
*   **[PR #16831](https://github.com/openai/codex/pull/16831)**: *Speed up /mcp inventory listing*
    *   **Impact:** Addresses performance lag in listing MCP resources.
*   **[PR #16827](https://github.com/openai/codex/pull/16827)**: *route device-code auth through app server*
    *   **Impact:** Standardizes authentication flow and enables remote TUI sessions.
*   **[PR #15687](https://github.com/openai/codex/pull/15687)**: *Add /create-api-key to app-server TUI*
    *   **Impact:** Allows users to generate API keys directly from the terminal interface.

## 5. Feature Request Trends
*   **Alternative Authentication:** Multiple requests for **GitHub Copilot** login support and generic OAuth integration for enterprise environments ([#8361](https://github.com/openai/codex/issues/8361), [#3609](https://github.com/openai/codex/issues/3609)).
*   **Workflow Customization:** Users want persistent configurations for where "Plans" are saved ([#12878](https://github.com/openai/codex/issues/12878)) and named agents for specific tasks like "refactor" or "review" ([#10067](https://github.com/openai/codex/issues/10067)).
*   **UI/UX Polish:** Demand for suppressing noisy "hook" status messages in the TUI ([#15497](https://github.com/openai/codex/issues/15497)) and better thread management/resume UIs.

## 6. Developer Pain Points
*   **Resource Exhaustion:** There is a severe pattern of high CPU usage and battery drain affecting **macOS users (M-series)** and **Windows users**. Issues range from the extension causing overheating ([#3022](https://github.com/openai/codex/issues/3022)) to orphaned processes spinning at 100% CPU ([#16862](https://github.com/openai/codex/issues/16862)).
*   **Session Stability:** Frequent reports of disconnects during long coding sessions, specifically with the error "Stream disconnected before completion" ([#13245](https://github.com/openai/codex/issues/13245)) and "Error running remote compact task" ([#14860](https://github.com/openai/codex/issues/14860)).
*   **Mojibake/Encoding:** Non-ASCII character support remains broken on Windows CLI, producing garbled text for Scandinavian characters ([#13743](https://github.com/openai/codex/issues/13743)).

</details>

<details>
<summary><strong>Charm Crush</strong> — <a href="https://github.com/charmbracelet/crush">charmbracelet/crush</a></summary>

# Charm Crush Community Digest: 2026-04-06

## Today's Highlights
The Crush community remains active with maintenance updates, focusing on stability following recent version bumps. Development efforts are currently directed toward enhancing the tool's introspection capabilities, allowing the AI agent to better understand its own runtime state and configuration.

## Releases
*   **Nightly Build:** Updated artifacts are available for the `nightly` release. Users are encouraged to verify integrity using the provided `checksums.txt` and `checksums.txt.sigstore.json` files.

## Hot Issues
*   **[#2560: v0.55.0 breaks LSP UI display](https://github.com/charmbracelet/crush/issues/2560)**  
    *Impact:* High regression visibility.  
    *Summary:* Users reported that the latest release (v0.55.0) causes the Language Server Protocol (LSP) display to appear inactive. A user-provided diff suggests a fix is readily available in the UI model logic, indicating a quick path to resolution.

## Key PR Progress
*   **[#2561: feat(tools): view active crush config and logs](https://github.com/charmbracelet/crush/pull/2561)**  
    *Impact:* Enhanced Debugging & Self-Awareness.  
    *Summary:* This PR introduces `crush_info` and `crush_logs` tools, enabling the agent to inspect its own active configuration and logs. This is designed to have minimal context impact but significantly improves the agent's ability to self-diagnose issues.

## Feature Request Trends
*   **Self-Inspection Tools:** There is a clear trend toward improving "agent self-awareness." The latest PR (#2561) reflects a desire for the AI to access its own internal state (config/logs) to provide better debugging assistance without user intervention.

## Developer Pain Points
*   **Regression Anxiety:** The rapid release cycle has led to UI friction, specifically with the LSP display in v0.55.0 breaking expected functionality, prompting immediate community fixes.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-04-06
**Source:** github.com/google-gemini/gemini-cli

### 1. Today's Highlights
Today's activity highlights a strong focus on **agent behavior steering** and **security hardening**. Key developments include attempts to fix "unsafe object cloning" patterns in generated code, the introduction of an LLM-based policy scoping feature for tool approvals, and a new "Fast Mode" (`--fast`) to minimize overhead for one-shot prompts. The community is also actively discussing Terminal UI improvements, specifically regarding SSH compatibility and scroll performance during long sessions.

### 2. Releases
**No new releases** in the last 24 hours.

---

### 3. Hot Issues

Here are 10 noteworthy issues updated in the last 24 hours:

1.  **[macOS Image Paste Regression](https://github.com/google-gemini/gemini-cli/issues/15381)**
    *   **Why it matters:** A core utility feature has broken. Users can no longer paste images directly from the clipboard on macOS, disrupting workflows that rely on quick screenshots.
    *   **Reaction:** Closed by maintainers, likely via a recent merge, though user comments indicate lingering frustration.

2.  **[Investigate AST-Aware File Reads](https://github.com/google-gemini/gemini-cli/issues/22745)**
    *   **Why it matters:** This Epic investigates if using Abstract Syntax Trees (AST) can improve codebase context. If successful, the CLI would read code more precisely, reducing token noise and misaligned "read" turns.
    *   **Reaction:** High interest (👍 1); seen as a critical step toward more efficient code understanding.

3.  **[Agent "Unsafe Object Cloning"](https://github.com/google-gemini/gemini-cli/issues/22863)**
    *   **Why it matters:** The model frequently generates code that performs unsafe partial clones of objects. This is a major code quality and potential bug source for users accepting AI suggestions.
    *   **Reaction:** Maintainers are tracking this as a significant behavioral flaw to correct.

4.  **[Scrambled Text over SSH (gLinux)](https://github.com/google-gemini/gemini-cli/issues/24202)**
    *   **Why it matters:** The CLI becomes unusable when run via SSH into a gLinux environment due to text scrambling.
    *   **Reaction:** Triage requested; a specific helper to detect SSH sessions ([#24546](https://github.com/google-gemini/gemini-cli/issues/24546)) has already been filed to address the root cause.

5.  **[Model Creates Random Tmp Scripts](https://github.com/google-gemini/gemini-cli/issues/23571)**
    *   **Why it matters:** When restricted to shell execution, the model sprays temporary edit scripts across random directories, creating significant cleanup overhead for developers trying to commit changes.
    *   **Reaction:** Users want the model forced to use a centralized temp location.

6.  **[Implement Memory Routing (Global vs. Project)](https://github.com/google-gemini/gemini-cli/issues/22819)**
    *   **Why it matters:** Defines how the "memory" feature distinguishes between user-specific preferences (Global) and codebase-specific conventions (Project).
    *   **Reaction:** Essential for the memory feature to work intuitively.

7.  **[Subagents Lack Awareness of Approval Modes](https://github.com/google-gemini/gemini-cli/issues/23582)**
    *   **Why it matters:** Subagents attempt actions that violate the active "Plan Mode" or "Auto-Edit Mode," forcing the policy engine to block them constantly.
    *   **Reaction:** Needs fixing to reduce friction in constrained agent modes.

8.  **[Compact Tool Output "Leakage"](https://github.com/google-gemini/gemini-cli/issues/24644)**
    *   **Why it matters:** When "Compact Tool Output" is enabled, failed tool edits leak unwanted content into the chat history, degrading the UX.
    *   **Reaction:** Marked Priority 1; fix is actively being worked on.

9.  **[Search Text Generates Massive Output](https://github.com/google-gemini/gemini-cli/issues/24634)**
    *   **Why it matters:** The search text tool does not truncate results by default, leading to terminal floods.
    *   **Reaction:** High impact on usability; fix is in progress.

10. **[Helper to Detect SSH](https://github.com/google-gemini/gemini-cli/issues/24546)**
    *   **Why it matters:** A prerequisite for fixing the scrambled text issues reported by SSH users.
    *   **Reaction:** Critical infrastructure update.

---

### 4. Key PR Progress

1.  **[Steer Model to Prefer 'replace' over 'write_file'](https://github.com/google-gemini/gemini-cli/pull/24723)**
    *   Addresses a frequent annoyance where the model rewrites entire files instead of making targeted edits. Updates tool descriptions to explicitly steer the model toward the `replace` tool.

2.  **[LLM-Suggested Policy Scoping for Tool Approvals](https://github.com/google-gemini/gemini-cli/pull/24722)**
    *   A smart security feature. When a user approves a tool (e.g., `git`), a background LLM call suggests a specific scope (e.g., `["git diff", "git status"]`) rather than blindly approving the root command.

3.  **[Implement V0 Episodic Context Manager](https://github.com/google-gemini/gemini-cli/pull/24643)**
    *   Major architectural refactor. Moves context management from a monolithic string approach to an immutable pipeline with processors for history squashing, tool masking, and semantic compression.

4.  **[Prompt to Resume Session](https://github.com/google-gemini/gemini-cli/pull/24720)**
    *   Quality of life feature. If the user starts a new session with a prompt identical to a previous one, the CLI asks if they want to resume that old session instead.

5.  **[Add --fast Mode](https://github.com/google-gemini/gemini-cli/pull/24717)**
    *   Adds a `--fast` flag for single-turn prompts. It skips pre-flight requests and session saving to reduce execution time and API payload size.

6.  **[Fix Command Injection Shell](https://github.com/google-gemini/gemini-cli/pull/24170)**
    *   Critical Security Fix. Addresses a vulnerability where shell substitution syntax (like `$()`) in arguments could be executed. Adds a `detectCommandSubstitution` utility.

7.  **[Add JSON Output for list-sessions](https://github.com/google-gemini/gemini-cli/pull/24711)**
    *   Adds `--output-format json` support to `list-sessions`, enabling better integration with automated scripts and third-party tools.

8.  **[Fix: Bunx Execution Error on Windows](https://github.com/google-gemini/gemini-cli/pull/24653)**
    *   Resolves a crash on Windows when running `bunx @google/gemini-cli` caused by the `-S` shebang flag not being supported.

9.  **[Fix: Preserve Trailing Newlines in Shell](https://github.com/google-gemini/gemini-cli/pull/23705)**
    *   Fixes a regression where trailing newlines were stripped, breaking heredocs and multiline shell constructs.

10. **[Feat: Add standalone LSP integration](https://github.com/google-gemini/gemini-cli/pull/23464)**
    *   A powerful feature giving the agent access to compiler diagnostics and semantic queries (go-to-definition, symbols) without needing an IDE.

---

### 5. Feature Request Trends

Based on the issues and PRs, the community and maintainers are prioritizing:

*   **Agent Behavior Steering:** A strong push to "train" the model to stop making specific mistakes (unsafe cloning, overwriting files vs. replacing, creating random tmp files).
*   **Better UI/UX for Sessions:** Requests for resuming sessions, faster one-shot execution (`--fast`), and fixing TTY/SSH rendering issues.
*   **Semantic & AST Awareness:** Moving beyond grep-based search to AST-aware code mapping and LSP integration for deeper code understanding.

### 6. Developer Pain Points

*   **Terminal Rendering:** SSH sessions and complex formatting (tables, borders) are still prone to breaking or "scrambling."
*   **Agent "Messiness":** Developers are tired of cleaning up temporary files generated by the agent and dealing with unsafe code patterns (cloning/shell injections).
*   **Tool Output Noise:** When things go wrong (or search results are large), the terminal output becomes overwhelming, driving the need for better truncation and compact modes.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-06

## 1. Today's Highlights
The community is actively addressing critical **Windows compatibility issues**, specifically regarding headless automation and immediate process exits. Simultaneously, a strong focus on **configuration granularity** has emerged, with developers requesting persistent settings for repositories, MCP servers, and directory permissions.

## 2. Releases
**None released in the last 24 hours.**

## 3. Hot Issues
*   **[#2525](https://github.com/github/copilot-cli/issues/2525) - Windows Headless Automation Blocker**
    *   **Impact:** Critical. Launching `copilot` via PowerShell's `Start-Process` produces zero stdout/stderr, breaking CI/CD and automation workflows.
    *   **Reaction:** Immediate concern for enterprise automation reliability.

*   **[#2528](https://github.com/github/copilot-cli/issues/2528) - Per-Repository MCP Configuration**
    *   **Impact:** High. Requests a `.github/mcp.json` to match existing LSP and custom instruction patterns, removing the need for global-only configurations.
    *   **Reaction:** Strong alignment with existing repo-scoped configurations.

*   **[#1164](https://github.com/github/copilot-cli/issues/1164) - Windows 11 Immediate Exit**
    *   **Impact:** High. Ongoing issue where newer CLI versions (post-0.0.368) exit silently on Windows.
    *   **Reaction:** Persistent frustration, recently updated with new comments.

*   **[#2526](https://github.com/github/copilot-cli/issues/2526) - Session Forking**
    *   **Impact:** Moderate-High. Aims to solve "context pollution" by allowing users to fork a session to handle parallel tasks without losing the parent state.
    *   **Reaction:** Positive reception for advanced workflow management.

*   **[#2284](https://github.com/github/copilot-cli/issues/2284) - Persist `/add-dir` Permissions**
    *   **Impact:** Moderate. Users currently have to re-allow directory access every session.
    *   **Reaction:** High demand for persistent security rules.

*   **[#2520](https://github.com/github/copilot-cli/issues/2520) - Configurable LSP Timeouts**
    *   **Impact:** Moderate. The 60s hard limit kills LSP servers (like OmniSharp) loading large .NET workspaces.
    *   **Reaction:** Necessary for large-scale monorepo support.

*   **[#2524](https://github.com/github/copilot-cli/issues/2524) - Model Switching Exit Code**
    *   **Impact:** Low-Medium. Changing the config model causes `copilot --continue` to exit with code 1.
    *   **Reaction:** Minor friction in configuration management.

*   **[#2519](https://github.com/github/copilot-cli/issues/2519) - Project-Scoped `/user` Settings**
    *   **Impact:** Moderate. Allows switching licenses/users based on the specific repo being worked on.
    *   **Reaction:** Useful for developers managing multiple identities.

*   **[#2204](https://github.com/github/copilot-cli/issues/2204) - C# LSP Documentation**
    *   **Impact:** Low. Requests official docs for installing C# LSP implementations.
    *   **Reaction:** Support request for better DX.

*   **[#2518](https://github.com/github/copilot-cli/issues/2518) - Local Agent + Remote Shell**
    *   **Impact:** Experimental. Proposes running the agent locally but executing shell commands on a remote machine via SSH.
    *   **Reaction:** Niche but valuable for distributed development.

## 4. Key PR Progress
*   **[#2522](https://github.com/github/copilot-cli/pull/2522) - Feature: i686 Support**
    *   **Status:** Closed.
    *   **Detail:** Added support for legacy 32-bit architectures, though the PR was closed without merge.

*   **[#2523](https://github.com/github/copilot-cli/pull/2523) - Copilot Project Agent Admin**
    *   **Status:** Closed.
    *   **Detail:** Likely related to security testing or internal admin tooling based on the payload summary.

*   **[#2316](https://github.com/github/copilot-cli/pull/2316) - Dev Containers**
    *   **Status:** Closed.
    *   **Detail:** Integration updates for GitHub CLI in development containers.

## 5. Feature Request Trends
*   **Repository Context Scoping:** Users want configuration (MCP servers, user identities) to follow the project, not just the user machine (Issues #2528, #2519).
*   **Workflow State Management:** Features are being requested to "fork" or "branch" CLI sessions to manage multitasking without context loss (Issue #2526).
*   **Performance Tuning:** Requests for removing hardcoded timeouts for LSP servers to accommodate massive codebases (Issue #2520).

## 6. Developer Pain Points
*   **Windows Instability:** The CLI remains unreliable on Windows for both interactive use (Issue #1164) and automation pipelines (Issue #2525).
*   **UX Jitter:** The bottom-aligned input area causes visual distractions when UI elements appear/disappear (Issue #2529).
*   **Internationalization (i18n):** Non-Latin character support (specifically Thai) is rendering incompletely (Issue #2521).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-04-06

## 1. Today's Highlights
The community is buzzing around a controversial proposal to rewrite the CLI from Python to TypeScript/Bun, alongside a push for enhanced Web UI capabilities. Users are facing significant stability issues in v1.30.0, particularly regarding JSON serialization errors and unintended task interruptions when interacting with the terminal.

## 2. Latest Releases
**No new releases** in the last 24 hours. The current version remains **v1.30.0**.

## 3. Hot Issues
*   **[#1762 Bug: ToolResult JSON Serialization Error](https://github.com/MoonshotAI/kimi-cli/issues/1762)**
    Users on Linux are experiencing crashes due to `invalid type: sequence` errors during tool result serialization. This appears to be a high-severity regression in v1.30.0 impacting core tool execution.
*   **[#1765 Task Interrupted by Mouse Click](https://github.com/MoonshotAI/kimi-cli/issues/1765)**
    A critical UX issue where simply clicking the terminal window during execution causes the task to abort, falsely reporting "interrupted by user."
*   **[#1766 MCP Connection Crashes Worker](https://github.com/MoonshotAI/kimi-cli/issues/1766)**
    The Web UI lacks graceful degradation for MCP (Model Context Protocol) servers. Connection failures cause the entire worker to crash and the frontend to hang, rather than disabling the specific tool.
*   **[#1761 Task Timeouts Ignored](https://github.com/MoonshotAI/kimi-cli/issues/1761)**
    Reports indicate that `kimi-cli` is no longer respecting task timeout parameters, leading to persistent hangs or unexpected termination behavior.
*   **[#1763 Documentation Creation Interrupts](https://github.com/MoonshotAI/kimi-cli/issues/1763)**
    Users reporting failures during doc generation tasks, specifically with execution stopping prematurely on Windows 11.
*   **[#1623 Web Page Random Refresh](https://github.com/MoonshotAI/kimi-cli/issues/1623)**
    A persistent issue where the Kimi Web interface refreshes unexpectedly, disrupting workflow and state.
*   **[#1747 Feature: Three-tier Rules System](https://github.com/MoonshotAI/kimi-cli/issues/1747)**
    Community request for a hierarchical rules system (Global, User, Project) to manage development guidelines, aiming for feature parity with "Claude Code."
*   **[#1617 Windows Terminal Image Paste Fail](https://github.com/MoonshotAI/kimi-cli/issues/1617)**
    `Ctrl-V` is failing to paste images in Windows Terminal, hindering workflows that rely on visual input.
*   **[#1766 MCP Reliability](https://github.com/MoonshotAI/kimi-cli/issues/1766)**
    Highlighting the need for robust error handling in the Web UI when external integrations fail.

## 4. Key PR Progress
*   **[#1707 Refactor: Python to Bun + TypeScript](https://github.com/MoonshotAI/kimi-cli/pull/1707)**
    🚨 **Major Proposal**: A complete rewrite of the CLI from Python to a Bun + TypeScript + React Ink stack. The author claims the Python implementation is a "complete failure" and proposes a massive codebase shift (~32k lines of TS) to improve performance and maintainability.
*   **[#1767 Feat: YOLO Mode for Web](https://github.com/MoonshotAI/kimi-cli/pull/1767)**
    Extends the "YOLO" (auto-approve) mode to the Web UI, allowing users to toggle automatic approval of operations without terminal intervention.
*   **[#1764 Fix: Normalize Tool Arguments](https://github.com/MoonshotAI/kimi-cli/pull/1764)**
    Addresses the serialization crash reported in Issue #1762 by normalizing empty `tool_call` arguments to `{}` before processing.
*   **[#1743 Feat: /btw Side Question Command](https://github.com/MoonshotAI/kimi-cli/pull/1743)**
    Introduces a `/btw` slash command allowing users to ask side questions without interrupting the main agent context or conversation flow.
*   **[#1756 Feat: Diagnostic Logging](https://github.com/MoonshotAI/kimi-cli/pull/1756)**
    Improves debuggability by adding structured logging at error paths and bundling these logs when users run `kimi export`.
*   **[#1738 Feat: Format Validation for WriteFile](https://github.com/MoonshotAI/kimi-cli/pull/1738)**
    Adds validation logic for JSON, XML, and Markdown files after writing to ensure data integrity immediately after file creation.

## 5. Feature Request Trends
*   **Hierarchical Configuration:** Users want more granular control over rules (Global vs. Project specific) to avoid repeating instructions ([#1747](https://github.com/MoonshotAI/kimi-cli/issues/1747)).
*   **Web UI Parity:** There is a strong push to bring powerful CLI features (like YOLO mode) to the Web Interface ([#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767)).
*   **Side Conversations:** Developers are asking for ways to interact with the LLM for quick queries without derailing the current, long-running task context ([#1743](https://github.com/MoonshotAI/kimi-cli/pull/1743)).

## 6. Developer Pain Points
*   **v1.30.0 Stability:** The latest release appears to have introduced regressions regarding task interruption and JSON serialization, causing friction for users on Windows and Linux.
*   **Clipboard Handling:** Issues with pasting images (`Ctrl-V`) in terminal environments remain unresolved, breaking multimodal workflows.
*   **Error Opacity:** While new logging is being added, users currently struggle to debug why the tool crashes or hangs, particularly regarding MCP connections and serialization errors.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-04-06

## 1. Today's Highlights
Development activity is intensely focused on stabilizing the **1.3.x release series**, specifically targeting regressions in tool calling, JSON parsing, and Web UI session handling. The community is actively debating resource consumption, specifically regarding GitHub Copilot integration incorrectly classifying agent requests as premium user requests. Concurrently, contributors are pushing significant UX enhancements, including Token Per Second (TPS) visualization and mobile optimization for the desktop client.

## 2. Releases
*   **No new releases** in the last 24 hours.

## 3. Hot Issues

1.  **[#8030 Copilot auth consuming premium requests rapidly](https://github.com/anomalyco/opencode/issues/8030)**
    *   **Impact:** Critical cost implication for users. Reports indicate Copilot integration is misclassifying agent-initiated requests (via `X-Initiator` headers) as "user" requests, depleteing quotas rapidly.
    *   **Reaction:** 210+ comments, 75 👍. High urgency.

2.  **[#12661 Add Agent Teams Equivalent](https://github.com/anomalyco/opencode/issues/12661)**
    *   **Impact:** Strategic feature request to match competitor (Claude Code) capabilities.
    *   **Reaction:** 104 👍. Strong community desire for multi-agent orchestration.

3.  **[#531 Support HTTP_PROXY & HTTPS_PROXY](https://github.com/anomalyco/opencode/issues/531)**
    *   **Impact:** Accessibility for enterprise users behind firewalls.
    *   **Reaction:** 24 👍. A long-standing request (created in 2025) resurfacing with high engagement.

4.  **[#906 Paste to attach image](https://github.com/anomalyco/opencode/issues/906)**
    *   **Impact:** Workflow friction for users integrating visual tools (e.g., Excalidraw).
    *   **Reaction:** 18 👍. Highly requested UX improvement for the TUI.

5.  **[#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)**
    *   **Impact:** Core stability and performance.
    *   **Reaction:** 17 👍. The core team is actively requesting heap snapshots to debug memory leaks.

6.  **[#1549 Watch files for instructions](https://github.com/anomalyco/opencode/issues/1549)**
    *   **Impact:** Async workflow enhancement (similar to Aider).
    *   **Reaction:** 26 👍. Users want the ability to trigger edits via code comments.

7.  **[#11409 Native Jupyter notebook support](https://github.com/anomalyco/opencode/issues/11409)**
    *   **Impact:** Data science workflow limitation.
    *   **Reaction:** 12 👍. Increasing demand for `.ipynb` handling.

8.  **[#20995 Gemma 4 tool calling fails via Ollama](https://github.com/anomalyco/opencode/issues/20995)**
    *   **Impact:** Local model compatibility. Streaming `tool_calls` are not recognized.
    *   **Reaction:** 12 👍. Blocker for local LLM users.

9.  **[#8598 Copilot model support regression](https://github.com/anomalyco/opencode/issues/8598)**
    *   **Impact:** Users cannot access newer models (5.2-Codex, Raptor).
    *   **Reaction:** Closed/Verified. Highlights sensitivity to provider updates.

10. **[#21132 Token Per Second(TPS) display](https://github.com/anomalyco/opencode/issues/21132)**
    *   **Impact:** Performance visibility.
    *   **Reaction:** Implementation already submitted as a PR (#21133).

## 4. Key PR Progress

1.  **[#21137 upgrade opentui to 0.1.97](https://github.com/anomalyco/opencode/pull/21137)**
    *   **Change:** Bumps the core TUI dependency.
    *   **Significance:** Likely contains stability fixes and rendering improvements.

2.  **[#21136 improve pasted text UX](https://github.com/anomalyco/opencode/pull/21136)**
    *   **Change:** Adds summaries like `[Pasted 1 ~N lines]` to the prompt.
    *   **Significance:** Directly addresses user experience friction reported in Issue #906.

3.  **[#21133 Show tokens per second (TPS)](https://github.com/anomalyco/opencode/pull/21133)**
    *   **Change:** Adds TPS display to the footer and sidebar.
    *   **Significance:** Addresses feature request #21132; provides immediate feedback on model performance.

4.  **[#21135 fix plugin: parse package specifiers](https://github.com/anomalyco/opencode/pull/21135)**
    *   **Change:** Sanitizes Win32 cache paths and fixes parsing.
    *   **Significance:** Critical fix for Windows users experiencing plugin install failures (#21098).

5.  **[#21052 refactor tool system](https://github.com/anomalyco/opencode/pull/21052)**
    *   **Change:** Removes agent context from tool initialization.
    *   **Significance:** A major refactor to simplify the tool system and prevent context-related bugs.

6.  **[#21127 recover from malformed session diffs](https://github.com/anomalyco/opencode/pull/21127)**
    *   **Change:** Adds safety checks for `session_diff` arrays.
    *   **Significance:** Fixes the "e.diffs.map is not a function" crash (#21100) in the Web UI.

7.  **[#21131 accept directory when creating sessions](https://github.com/anomalyco/opencode/pull/21131)**
    *   **Change:** `Session.create` accepts an optional `dir` override.
    *   **Significance:** Fixes behavior where sessions ignored the current working directory.

8.  **[#20773 use session cwd for command substitution](https://github.com/anomalyco/opencode/pull/20773)**
    *   **Change:** Shell substitutions (`!`) now run in the active session directory.
    *   **Significance:** Fixes path resolution issues during multi-folder development.

9.  **[#19545 Remote control + serve dependencies](https://github.com/anomalyco/opencode/pull/19545)**
    *   **Change:** Adds `opencode serve` with hostname/relay secrets.
    *   **Significance:** Enables remote/Collaborative coding sessions via Tailscale.

10. **[#18767 Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)**
    *   **Change:** Optimizes the app for touch interactions.
    *   **Significance:** Expands OpenCode usability to tablets and mobile devices.

## 5. Feature Request Trends
*   **Agent Orchestration:** Significant demand for "Agent Teams" or multi-agent workflows to handle complex tasks autonomously.
*   **Visual Integration:** Users are eager for better image handling, specifically "paste-to-attach" and AVIF format support.
*   **IDE Parity:** Requests for native Jupyter (`.ipynb`) support and better file-watching capabilities (similar to Aider) indicate a push closer to full IDE functionality.
*   **Performance Visibility:** The community wants more granular metrics (TPS, memory usage) directly in the UI.

## 6. Developer Pain Points
*   **Regression Anxiety:** The community is highly sensitive to regressions in the 1.3.x cycle, specifically regarding tool calling (Kimi, Gemma) and JSON parsing in the Web UI.
*   **Proxy/Network Frustration:** Enterprise users behind corporate firewalls are struggling with `HTTP_PROXY` support and plugin fetching failures.
*   **Model Compatibility:** Ensuring new models (Gemma 4, Kimi 2.5) work correctly via standardized APIs (OpenAI-compatible) is a recurring friction point.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-04-06

## 1. Today's Highlights
The repository is experiencing a surge of activity focused on **CLI user experience (UX)** and **agentic capabilities**. Contributors are actively refining terminal rendering (fixing markdown tables and flickering issues), implementing advanced slash commands (`/plan`, `/thinkback`), and resolving critical bugs related to permissions and Git integration. The community is particularly vocal about the frequency of approval prompts in "YOLO mode" and inconsistencies in terminal shell handling.

## 2. Releases
**No new releases** were published in the last 24 hours. The current version remains **v0.14.0**.

## 3. Hot Issues
Here are the top 10 issues sparking discussion and triage:

*   **[#2721](https://github.com/QwenLM/qwen-code/issues/2721) - Proposal to adopt "iflow cli" project**
    *   **Why it matters:** Users are requesting the team fork/integrate the "iflow cli" tool, which is shutting down, arguing it offers superior UX compared to Qwen Code. It highlights competitive pressure on workflow design.
*   **[#2906](https://github.com/QwenLM/qwen-code/issues/2906) - Excessive permission requests**
    *   **Why it matters:** A major usability complaint. Users report being asked for approval 7-10 times per conversation, even in YOLO mode, creating friction compared to competitors like Claude Code.
*   **[#2899](https://github.com/QwenLM/qwen-code/issues/2899) - Unwanted Git Co-authored-by trailers**
    *   **Why it matters:** Qwen Code is force-adding `Co-authored-by: Qwen-Coder` to commits without consent. This affects repository contribution graphs and has been flagged as a privacy/boundary issue.
*   **[#2924](https://github.com/QwenLM/qwen-code/issues/2924) - Screen flickering during agent expansion**
    *   **Why it matters:** High-priority visual bug affecting v0.14.0 where expanding agent details (Ctrl+E/F) causes severe screen flickering, making the tool hard to use during long tasks.
*   **[#2844](https://github.com/QwenLM/qwen-code/issues/2844) - Request for Qwen 3.6-plus in plans**
    *   **Why it matters:** Users want to utilize the latest model (3.6-plus) for coding plans, but the UI is stuck listing 3.5-plus.
*   **[#2903](https://github.com/QwenLM/qwen-code/issues/2903) - JetBrains terminal flickering**
    *   **Why it matters:** Confirms the flickering issue is not limited to the VSCode terminal but persists in JetBrains environments, pointing to a core rendering problem in the CLI.
*   **[#2782](https://github.com/QwenLM/qwen-code/issues/2782) - MCP tool permissions failing silently**
    *   **Why it matters:** Developers trying to use the MCP server via the SDK are hitting "InternalError.Algo.DataInspectionFailed," blocking integration workflows.
*   **[#2523](https://github.com/QwenLM/qwen-code/issues/2523) - Feature Request: Follow-up Suggestions**
    *   **Why it matters:** Users want Claude Code-style "next action" suggestions in the Web UI to streamline iterative development.
*   **[#2454](https://github.com/QwenLM/qwen-code/issues/2454) - `/model` command clobbers custom settings**
    *   **Why it matters:** Using the slash command to switch models deletes manually added custom models from `settings.json`, forcing users to re-edit configuration files repeatedly.
*   **[#2882](https://github.com/QwenLM/qwen-code/issues/2882) - WeChat Login Interface Errors**
    *   **Why it matters:** Users facing "please upgrade WeChat interface version" errors are blocked from logging in via the WeChat channel.

## 4. Key PR Progress
*   **[#2921](https://github.com/QwenLM/qwen-code/pull/2921) - Implement `/plan` slash command**
    *   Adds a shortcut to enter/exit plan mode (`/plan`), improving workflow control without needing complex key combinations or approval mode switches.
*   **[#2917](https://github.com/QwenLM/qwen-code/pull/2917) - Add `/thinkback` command**
    *   Introduces a command that uses the LLM to analyze conversation history and generate a structured timeline of decisions, fixes, and changes—a feature even Claude Code lacks natively.
*   **[#2914](https://github.com/QwenLM/qwen-code/pull/2914) - Fix Markdown table rendering**
    *   Critical fix for CJK (Chinese/Japanese/Korean) character alignment and ANSI color codes in terminal tables. Resolves issues where long text was truncated or misaligned.
*   **[#2770](https://github.com/QwenLM/qwen-code/pull/2770) - Verbose/Compact mode toggle (Ctrl+O)**
    *   Introduces a "Compact Mode" to hide verbose tool output and thinking chains by default, keeping the terminal clean during long agent runs.
*   **[#2910](https://github.com/QwenLM/qwen-code/pull/2910) - Fix critical issues (Permissions & Pathing)**
    *   Addresses `tree-sitter.wasm` ENOENT errors on system installs and resolves the excessive permission prompt issue mentioned in #2906.
*   **[#2897](https://github.com/QwenLM/qwen-code/pull/2897) - Thinking block retention**
    *   Changes how the model handles "thinking" tokens. It now preserves internal reasoning during active sessions instead of stripping it immediately, improving context awareness.
*   **[#2911](https://github.com/QwenLM/qwen-code/pull/2911) - Add `ConfigTool` for programmatic config**
    *   Allows Agents to read/write configuration (e.g., switching models) programmatically via `config GET/SET`, enabling multi-stage workflows (large model for analysis -> small model for generation) without user interruption.
*   **[#2915](https://github.com/QwenLM/qwen-code/pull/2915) - Enhance `/clear` command**
    *   Adds `--history` and `--all` flags to `/clear`, giving granular control over what gets reset (conversation vs. system context).
*   **[#2826](https://github.com/QwenLM/qwen-code/pull/2826) - Fix Windows MSYS2 UCRT crash**
    *   Resolves crashes when running Qwen Code in MSYS2 environments on Windows by correctly detecting and handling Git Bash paths.
*   **[#2891](https://github.com/QwenLM/qwen-code/pull/2891) - Fix `InputPrompt` useEffect loop**
    *   Optimizes the UI component to prevent functions from running on every render, improving performance and reducing resource usage.

## 5. Feature Request Trends
*   **Workflow Automation:** High demand for features that reduce manual intervention, specifically **Follow-up Suggestions** (#2523) and **Notification Hooks** (#2922) to alert developers when long tasks finish.
*   **UX Polish:** Users are asking for **Context-Aware Prompts** (#2240) and better handling of **Collapsed Tool Output** (#2624) to manage information density.
*   **Model Management:** Requests for better support of **Qwen 3.6-plus** (#2844) and robust handling of **Custom Models** in settings (#2454).

## 6. Developer Pain Points
*   **Terminal Flickering:** A significant number of users (#2924, #2903, #1778) are reporting visual flickering when expanding agent output or using JetBrains/VSCode terminals, suggesting a regression in the UI rendering layer.
*   **Windows Shell Hell:** Multiple users (#2907, #2909) are struggling to force Qwen Code to use **PowerShell 7 (pwsh)** instead of CMD or legacy Windows PowerShell, with the AI often ignoring system prompt instructions regarding shell choice.
*   **Agentic Control:** Developers are frustrated by agents "refusing" to work in YOLO mode (#2918) or failing to perform simple grep operations in specific workspaces (#2919), indicating reliability issues in the agentic loop.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*