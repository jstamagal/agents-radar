# AI CLI Tools Community Digest 2026-03-18

> Generated: 2026-03-18 00:10 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report — 2026-03-18

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive six-way race, with each vendor pursuing distinct architectural bets: Anthropic doubles down on plugin ecosystems and plan-mode workflows; OpenAI prioritizes Rust-based sandboxing and enterprise policy hooks; Google emphasizes agent-loop state management and ACP integration; GitHub leverages Copilot ecosystem lock-in; while MoonshotAI and Alibaba's Qwen compete on background task execution and local model support respectively. Cross-cutting concerns—context management, permission fatigue, and Windows parity—dominate community discourse, suggesting the category is transitioning from novelty to production infrastructure. The emergence of lifecycle hooks, MCP protocol adoption, and memory subsystem proposals across all tools indicates a collective shift toward stateful, long-running agent workflows.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Notes Quality |
|------|-------------|-----------|----------|----------------------|
| **Claude Code** | 50 active | 7 | v2.1.77–78 | Detailed — versioned changelogs with hook APIs, token limits, sandbox settings |
| **OpenAI Codex** | 10 hot | 9 key | 3 alphas (0.116.0-a.2–4) | Minimal — "no detailed changelog provided" |
| **Gemini CLI** | 10 hot | 10 | v0.35.0-preview.1 | Moderate — architectural changes noted, P1/P2 priorities tagged |
| **Copilot CLI** | 10 hot | 0 | v1.0.7 | Moderate — SDK APIs, model additions, accessibility |
| **Kimi CLI** | 27 new/updated | 28 (9 merged) | v1.23.0 | Moderate — feature-focused, background tasks highlighted |
| **OpenCode** | 10 hot | 10 | None | N/A — release-focused activity in PRs |
| **Qwen Code** | 10 hot | 10 | v0.12.6 | Moderate — token handling improvements, 0.13.0 milestone tracking |

*Note: "Hot issues" reflects high-engagement or priority-tagged items, not total volume.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Evidence |
|-------------|-------|-----------------|
| **Lifecycle hooks / plugin extensibility** | Claude Code, OpenAI Codex, OpenCode, Copilot CLI | Claude: `StopFailure`, `Pre/PostPlanMode` hooks; Codex: `userpromptsubmit` hook; OpenCode: `session.start` hook; Copilot: `subagentStart` hook |
| **Plan mode workflow hardening** | Claude Code, Gemini CLI | Claude: memory writes in plan mode (#34727), UI revert options; Gemini: "ghost" context fixes, inline `/plan` text, read-only enforcement |
| **Context/memory management control** | OpenCode, Claude Code, Qwen Code, Kimi CLI | OpenCode: sliding window proposals (#4659), configurable compaction (#8140); Qwen: concurrent task execution; Kimi: global vs. project memory routing |
| **MCP protocol robustness** | OpenAI Codex, Qwen Code, Kimi CLI | Codex: orphaned thread reaping, granular tool enablement; Qwen: Streamable HTTP transport, truncation logic; Kimi: MCP disconnection fixes |
| **Windows platform parity** | OpenCode, Kimi CLI, OpenAI Codex | OpenCode: 4 concurrent Windows PRs; Kimi: PowerShell subprocess, file locking; Codex: 401 auth failures, task resumption gaps |
| **Background/parallel task execution** | Kimi CLI, Qwen Code, Gemini CLI | Kimi: v1.23.0 background bash tasks; Qwen: concurrent task tool execution (#2434); Gemini: subagent grouping |
| **Token economics transparency** | OpenAI Codex, Claude Code, Qwen Code | Codex: "token burn rate" (#14593), billing reset policy; Claude: rate limits at 16% usage (#29579); Qwen: token usage in loading indicator |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi CLI | OpenCode | Qwen Code |
|-----------|-------------|--------------|------------|-------------|----------|----------|-----------|
| **Core bet** | Plugin ecosystem + plan mode | Rust sandboxing + enterprise policy | Agent-loop state management + ACP | Copilot ecosystem integration | Background tasks + notifications | Multi-provider flexibility + lifecycle hooks | Local model support + VS Code parity |
| **Target user** | Power users, plugin developers | Enterprise security teams, policy enforcers | Google Cloud/AI Platform users | GitHub-centric developers | Terminal-native developers | Multi-LLM power users | Self-hosted/enterprise China |
| **Technical approach** | TypeScript/Node, hook-based extensibility | Rust, bubblewrap sandbox, Bazel V8 integration | Go (?), `AgentLoopContext` threading, ACP | TypeScript, SDK session APIs | Python, `aiohttp`, asyncio concurrency | TypeScript, Effect-TS functional architecture | Python, provider-level abstraction |
| **Sandbox model** | `allowRead`/`denyRead` carveouts | bubblewrap + seatbelt, granular tool opt-in | Implicit (less documented) | Implicit | Shell tool with approval persistence | `opencode.json` permission rules (regressing) | Provider-level token handling |
| **Notable gap** | Multi-account switching (#18435) | ChatGPT integration (#2153) | Plan mode reliability | Enterprise MCP policies (#599) | Memory architecture (#1478) | Windows systemic gaps | VS Code extension stability |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **Highest velocity** | Claude Code, Kimi CLI | Claude: 2 releases/24h, 380-comment phone verification thread, hook system maturation; Kimi: 28 PRs/24h, 9 merged fixes, rapid Windows response |
| **Rapid iteration, opacity concerns** | OpenAI Codex | 3 alpha releases with no changelogs, Rust migration ongoing, permission fatigue regressions |
| **Structured prioritization** | Gemini CLI | P1/P2 tags, workstream rollups, EPIC-scoped investigations; lower absolute volume but clear process |
| **Steady, ecosystem-leveraged** | Copilot CLI | v1.0.7 accessibility focus, SDK expansion; lower PR velocity suggests mature codebase or resource constraints |
| **Community-driven, scaling** | OpenCode, Qwen Code | OpenCode: 195-comment Copilot auth incident, rapid production fixes; Qwen: 0.13.0 milestone convergence, maintainer-led testing infrastructure |

**Maturity signals:** Claude Code and Copilot CLI show enterprise friction (billing, account management); Kimi and Qwen demonstrate community contribution scale; Gemini exhibits Google-style process formalization.

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **Permission fatigue → explicit control** | Codex "don't ask again" ignored, Claude rate-limit confusion, OpenCode permission regressions | Expect granular, auditable permission APIs; "smart defaults" insufficient for production trust |
| **Context management as competitive vector** | Sliding window proposals, configurable compaction, token visibility, memory routing | Developers will evaluate tools on *control* over context lifecycle, not just window size |
| **MCP as emergent standard** | Transport modernization, truncation logic, server name handling across 4+ tools | Invest in MCP-compatible toolchains; protocol maturity creating portability layer |
| **Background/parallel execution** | Kimi background bash, Qwen concurrent tasks, Gemini subagent grouping | Shift from synchronous chat to asynchronous agent orchestration; session management complexity rises |
| **Windows as persistent second-class platform** | 10+ issues across OpenCode, Kimi, Codex; concurrent PR clusters | Linux/macOS-first development remains norm; Windows users should expect friction or use WSL2 |
| **Self-hosted/local model demand** | Qwen LM Studio/Ollama support, Kimi proxy fixes, Claude private deployment gaps | Enterprise and privacy-conscious users driving divergence from cloud-only models |
| **Lifecycle hook ecosystem** | 4+ tools shipping hook APIs in 30 days | Plugin architectures maturing; expect "VS Code extension marketplace" dynamics for AI CLI tools |

---

*Report compiled from 2026-03-18 community digests across 7 active AI CLI tool repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-03-18 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Author | Status | Description & Discussion |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | @PGTBoos | [OPEN #514](https://github.com/anthropics/skills/pull/514) | Solves universal AI document generation problems: orphan word wrap, widow paragraphs, and numbering misalignment. Positions itself as essential infrastructure for *every* document Claude generates. Active refinement through March 13. |
| 2 | **frontend-design** (improved) | @justinwetch | [OPEN #210](https://github.com/anthropics/skills/pull/210) | Complete revision for clarity and "actionability"—ensuring every instruction is executable within a single conversation. Addresses core UX tension in skill design: documentation vs. operational instruction. |
| 3 | **skill-quality-analyzer** + **skill-security-analyzer** | @eovidiu | [OPEN #83](https://github.com/anthropics/skills/pull/83) | Meta-skills for the ecosystem itself: five-dimension quality analysis (structure, documentation, examples, resources, testing) plus security scanning. Self-improving infrastructure for the Skills marketplace. |
| 4 | **SAP-RPT-1-OSS predictor** | @amitlals | [OPEN #181](https://github.com/anthropics/skills/pull/181) | Enterprise analytics bridge: integrates SAP's open-source tabular foundation model (Apache 2.0) for predictive analytics on SAP business data. Targets ERP/enterprise workflow automation. |
| 5 | **system-documentation** (evidence management) | @TylerALofall | [OPEN #95](https://github.com/anthropics/skills/pull/95) | Comprehensive technical documentation suite with flowcharts: SYSTEM_OVERVIEW.md, SYSTEM_ARCHITECTURE.md, EVIDENCE_CARD_FLOW.md. Addresses enterprise compliance/audit use cases. |
| 6 | **ODT skill** | @GitHubNewbie0 | [OPEN #486](https://github.com/anthropics/skills/pull/486) | OpenDocument Format (ISO/IEC 26300) native support: creation, template filling, and ODT→HTML parsing. Cross-platform document interoperability for LibreOffice/Collabora/Google Docs ecosystems. |
| 7 | **CONTRIBUTING.md** | @narenkatakam | [OPEN #509](https://github.com/anthropics/skills/pull/509) | Community health infrastructure: addresses 25% GitHub community health score by establishing contribution guidelines. Closes [#452](https://github.com/anthropics/skills/issues/452). |
| 8 | **codebase-inventory-audit** | @p19dixon | [OPEN #147](https://github.com/anthropics/skills/pull/147) | 10-step systematic cleanup workflow producing CODEBASE-STATUS.md: orphaned code detection, unused file identification, documentation gap analysis, infrastructure bloat measurement. |

---

## 2. Community Demand Trends (From Issues Analysis)

| Trend | Evidence | Implication |
|:---|:---|:---|
| **Agent Memory & Persistence** | [#154](https://github.com/anthropics/skills/issues/154) (shodh-memory), [#629](https://github.com/anthropics/skills/pull/629) (session-memory) | Critical gap: context compaction silently destroys technical facts. Community building zero-dependency solutions for cross-session persistence. |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16), [#369](https://github.com/anthropics/skills/issues/369) | Strong push to expose Skills as MCP servers—"algorithmic-art → `generateAlgorithmArt({...})`". Skills-as-API standardization. |
| **Enterprise/SSO Integration** | [#532](https://github.com/anthropics/skills/issues/532), [#29](https://github.com/anthropics/skills/issues/29) | skill-creator's ANTHROPIC_API_KEY requirement blocks enterprise users; AWS Bedrock compatibility repeatedly requested. |
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) | Community skills impersonating `anthropic/` namespace flagged as vulnerability. Governance infrastructure needed. |
| **Agent Governance/Safety** | [#412](https://github.com/anthropics/skills/issues/412) | Proposed: policy enforcement, threat detection, trust scoring, audit trails for multi-agent systems. |
| **Evaluation & Testing Infrastructure** | [#556](https://github.com/anthropics/skills/issues/556) | `run_eval.py` 0% trigger rate—skills validation tooling is broken/unreliable. |

---

## 3. High-Potential Pending Skills (Active PRs, Near-Term Merge Candidates)

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **session-memory** | [#629](https://github.com/anthropics/skills/pull/629) | Addresses [#556](https://github.com/anthropics/skills/issues/556)-adjacent context loss; zero dependencies; rapid iteration (created March 13, updated March 17) |
| **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | Media generation skill (Imagen 3.0, Veo 3.1); fills creative content gap; active since February with March updates |
| **x402 BSV micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | Natural-language micropayments for AI services; novel economic primitive; "discover, authenticate, and pay" workflow |
| **YAML validation fixes** | [#359](https://github.com/anthropics/skills/pull/359), [#361](https://github.com/anthropics/skills/pull/361) | Critical DX fixes: unquoted special characters silently break skills; paired documentation + validation PRs |
| **SKILL.md case-sensitivity** | [#356](https://github.com/anthropics/skills/pull/356) | Fixes [#314](https://github.com/anthropics/skills/issues/314)—hours-wasted debugging issue; minimal, high-impact change |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for memory-persistent, enterprise-ready agent infrastructure that operates reliably across context windows, authentication boundaries, and document formats—moving from "skills as prompts" to "skills as stateful, testable, governable systems."**

---

*Report methodology: PRs ranked by community attention (comments, update recency); Issues analyzed for recurring themes and 👍 reactions. All links verified against github.com/anthropics/skills as of 2026-03-18.*

---

# Claude Code Community Digest — 2026-03-18

---

## 1. Today's Highlights

Anthropic shipped two rapid-fire releases (v2.1.77–78) expanding Opus 4.6 output limits to 128K tokens and introducing critical plugin infrastructure improvements including persistent state variables and API error hooks. Meanwhile, the community is actively debating account management limitations and rate-limiting inconsistencies, with a phone verification bug attracting nearly 400 comments and highlighting friction in enterprise onboarding workflows.

---

## 2. Releases

| Version | Key Changes |
|--------|-------------|
| **v2.1.78** | Added `StopFailure` hook event for API error handling (rate limits, auth failures); introduced `${CLAUDE_PLUGIN_DATA}` for plugin persistent state that survives updates; `/plugin uninstall` now prompts before deleting state data; partial `effort` parameter addition |
| **v2.1.77** | Default max output tokens for Claude Opus 4.6 raised to 64K with upper bound of 128K (shared with Sonnet 4.6); new `allowRead` sandbox setting to carve out exceptions within `denyRead` regions; `/copy` command options expanded |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#34229](https://github.com/anthropics/claude-code/issues/34229) | **Phone verification bug** — marked invalid but actively discussed | Enterprise users blocked from account access; represents critical trust/security friction point | 380 comments, 455 👍 — highest engagement in 24h period |
| [#1913](https://github.com/anthropics/claude-code/issues/1913) | **Terminal flickering** (TUI rendering) | Long-standing UX degradation affecting daily terminal workflows; marked duplicate but persists | 183 comments, 310 👍; recurring reports suggest incomplete fix |
| [#29579](https://github.com/anthropics/claude-code/issues/29579) | **Rate limits despite Claude Max subscription at 16% usage** | Directly undermines paid tier value proposition; Windows/VSCodium-specific pattern emerging | 78 comments, 32 👍; users demanding billing transparency |
| [#9716](https://github.com/anthropics/claude-code/issues/9716) | **Skills directory awareness failure** | Breaks core agent extensibility promise; `.claude/skills/` is documented but ignored | 68 comments, 66 👍; power users frustrated by silent failures |
| [#11447](https://github.com/anthropics/claude-code/issues/11447) | **Tab indentation breaks file editing** | Fundamental editor incompatibility with legacy codebases; forces whitespace standardization | 40 comments, 35 👍; enterprise adoption blocker |
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | **Multi-account profile switching** | Top-ranked enhancement request; freelancers and agencies managing client boundaries | 29 comments, 191 👍; clear product-market gap vs. competitors |
| [#30640](https://github.com/anthropics/claude-code/issues/30640) | **FreeBSD native installer failure** | Platform support gap forcing community workarounds; bot closure without discussion triggered reopening | 27 comments, 40 👍; *nix diversity demand |
| [#13480](https://github.com/anthropics/claude-code/issues/13480) | **Oversized image permanently breaks conversation** | Data loss scenario with no recovery path; violates graceful degradation expectations | 19 comments, 25 👍; reliability concern |
| [#33969](https://github.com/anthropics/claude-code/issues/33969) | **Per-turn tool call limit regression** | Breaks agentic MCP/SSH workflows; undocumented behavioral change | 18 comments, 30 👍; infrastructure automation impact |
| [#18011](https://github.com/anthropics/claude-code/issues/18011) | **V8 memory leak causing OOM crashes** | Stability risk for long-running sessions; SIGABRT termination loses work | 12 comments, 5 👍; production deployment concern |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|-----|-------------|------------|
| [#35168](https://github.com/anthropics/claude-code/pull/35168) | **Add Etudes plugin** | Sprint coaching plugin with structured interviews, 3–5 day sprint generation, and accountability check-ins | Expands plugin ecosystem into project management domain |
| [#35543](https://github.com/anthropics/claude-code/pull/35543) | **Fix resultmessage emission in headless SDK** | Resolves [#30333](https://github.com/anthropics/claude-code/issues/30333) — headless mode failed to emit completion events | Critical fix for CI/automation integrations |
| [#33312](https://github.com/anthropics/claude-code/pull/33312) | **Escape special characters in ARGUMENTS (ralph-loop)** | Prevents bash injection via backticks in prompts; writes args to temp file instead of direct substitution | Security hardening for plugin system |
| [#32944](https://github.com/anthropics/claude-code/pull/32944) | **Upgrade dedupe workflow to Sonnet 4.6** | Updates issue-dedupe automation to current model baseline | Infrastructure maintenance, reliability improvement |
| [#35421](https://github.com/anthropics/claude-code/pull/35421) | **Add Minesweeper game implementation** | Complete HTML/CSS/JS game with difficulty levels, timer, dark theme | Community contribution expanding example portfolio |
| [#35350](https://github.com/anthropics/claude-code/pull/35350) | **Portable shebangs in plugin shell scripts** | Replaces hardcoded `/bin/bash` with `/usr/bin/env bash` for NixOS compatibility | Cross-platform robustness; partial completion of [#11029](https://github.com/anthropics/claude-code/issues/11029) |
| [#35302](https://github.com/anthropics/claude-code/pull/35302) | **Chinese translation (README.zh.md)** | Full Simplified Chinese documentation translation | Accessibility expansion for largest global developer market |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Hook system expansion** | [#14259](https://github.com/anthropics/claude-code/issues/14259) (Pre/PostPlanMode), [#21531](https://github.com/anthropics/claude-code/issues/21531) (Before/AfterModel), today's `StopFailure` release | High — plugin ecosystem maturation driving demand for lifecycle interception points |
| **Cross-product context sharing** | [#30675](https://github.com/anthropics/claude-code/issues/30675) (Claude Code ↔ Claude.ai ↔ Cowork), [#34235](https://github.com/anthropics/claude-code/issues/34235) (AGENTS.md standardization) | Medium — ecosystem unification vs. siloed experiences |
| **Plan mode workflow refinements** | [#24850](https://github.com/anthropics/claude-code/issues/24850) (git worktree implementation), [#34727](https://github.com/anthropics/claude-code/issues/34727) (memory writes in plan mode), [#33525](https://github.com/anthropics/claude-code/issues/33525) (UI revert options) | High — plan mode is core differentiator but friction points emerging |
| **Account/profile management** | [#18435](https://github.com/anthropics/claude-code/issues/18435) (multi-account switching) | Very High — 191 👍, clear competitive gap |

---

## 6. Developer Pain Points

| Category | Symptoms | Root Cause Indicators |
|----------|----------|----------------------|
| **Authentication & Access** | Phone verification failures ([#34229](https://github.com/anthropics/claude-code/issues/34229)), rate limit confusion despite paid tiers ([#29579](https://github.com/anthropics/claude-code/issues/29579)), 529 overload errors ([#35549](https://github.com/anthropics/claude-code/issues/35549)) | Identity system brittleness; quota transparency gaps; infrastructure scaling strain |
| **Reliability & State Management** | Memory leaks ([#18011](https://github.com/anthropics/claude-code/issues/18011)), oversized image corruption ([#13480](https://github.com/anthropics/claude-code/issues/13480)), voice mode persistence ([#35566](https://github.com/anthropics/claude-code/issues/35566), [#33805](https://github.com/anthropics/claude-code/issues/33805)) | Session lifecycle edge cases; resource cleanup deficiencies |
| **Editor/Tooling Compatibility** | Tab indentation failures ([#11447](https://github.com/anthropics/claude-code/issues/11447)), skills directory unawareness ([#9716](https://github.com/anthropics/claude-code/issues/9716)), permission loops with spaces ([#32520](https://github.com/anthropics/claude-code/issues/32520)) | File system abstraction assumptions; platform-specific path handling |
| **Agentic Workflow Limits** | Tool call regressions ([#33969](https://github.com/anthropics/claude-code/issues/33969)), worktree isolation failures ([#33045](https://github.com/anthropics/claude-code/issues/33045)), MCP server blocking ([#35436](https://github.com/anthropics/claude-code/issues/35436)) | Security boundaries vs. automation flexibility tension |

---

*Digest compiled from 50 active issues, 7 pull requests, and 2 releases in the 24-hour period ending 2026-03-18.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-18

## Today's Highlights

Three rapid-fire Rust CLI alpha releases (0.116.0-alpha.2 through alpha.4) suggest active iteration on the core runtime, while a critical Linux sandbox regression in 0.115.0 is drawing urgent community attention. The VS Code extension continues to generate high-engagement bug reports around token consumption and permission fatigue, with one issue accumulating 93 comments on rate-limit concerns.

---

## Releases

| Version | Notes |
|---------|-------|
| **rust-v0.116.0-alpha.4** | [Release](https://github.com/openai/codex/releases/tag/rust-v0.116.0-alpha.4) — Fourth alpha in 24h; no detailed changelog provided |
| **rust-v0.116.0-alpha.3** | [Release](https://github.com/openai/codex/releases/tag/rust-v0.116.0-alpha.3) — Iterative alpha release |
| **rust-v0.116.0-alpha.2** | [Release](https://github.com/openai/codex/releases/tag/rust-v0.116.0-alpha.2) — Initial alpha in this sequence |

*No substantive release notes available; rapid iteration pattern suggests internal testing or CI-driven builds.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#14593](https://github.com/openai/codex/issues/14593) **Token burn rate remains excessive post-VS Code update** | Business-tier users reporting rapid token depletion despite recent patches; strikes at cost-control trust | 93 comments, 47 👍 — highest engagement in dataset; users demanding transparency on billing mechanics |
| [#12764](https://github.com/openai/codex/issues/12764) **CLI 401 Unauthorized errors on Windows** | Auth failures blocking core functionality; `cf-ray` IDs suggest edge configuration issues | 77 comments; persistent across versions, affecting production workflows |
| [#11325](https://github.com/openai/codex/issues/11325) **Codex App lacks manual `/compact` command** | Feature parity gap between CLI and App; context management critical for long sessions | 35 comments, 70 👍 — strong consensus; users frustrated by automatic-only compaction |
| [#2153](https://github.com/openai/codex/issues/2153) **ChatGPT integration for session handoff** | Bridges research (ChatGPT web search) ↔ execution (Codex) workflows | 25 comments, 93 👍 — long-standing request; indicates ecosystem friction |
| [#14919](https://github.com/openai/codex/issues/14919) **Linux sandbox `RTM_NEWADDR` failure in 0.115.0** | **Regression**: bubblewrap sandbox broken on Ubuntu 24.04; blocks subagent execution | 10 comments, 15 👍; urgent — fix PR [#14963](https://github.com/openai/codex/pull/14963) already merged |
| [#14346](https://github.com/openai/codex/issues/14346) **Context compaction hanging on 5.4/Extra High** | Performance regression affecting high-context workflows; stalls sessions | 16 comments, 13 👍; users reporting data loss risk |
| [#14329](https://github.com/openai/codex/issues/14329) **Team/Business accounts excluded from usage resets** | Billing/policy issue; users report ignored support channels | 8 comments, 8 👍; escalated via GitHub after channel exhaustion |
| [#13117](https://github.com/openai/codex/issues/13117) **Permission fatigue: every file read requires approval** | Regression in extension sandbox behavior; destroys iteration velocity | 9 comments, 5 👍; "again" in title signals recurring problem |
| [#14936](https://github.com/openai/codex/issues/14936) **0.115.0 approval prompt spam, "don't ask again" ignored** | CLI UX degradation; trust erosion in permission system | 7 comments, 7 👍; confirms pattern with #13117 |
| [#10390](https://github.com/openai/codex/issues/10390) **macOS `network_access = true` silently ignored** | Config surface broken; seatbelt sandbox overrides user intent | 8 comments, 12 👍; includes workaround, but signals config system fragility |

---

## Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| [#14626](https://github.com/openai/codex/pull/14626) **Hook: `userpromptsubmit`** | Pre-execution hook for prompt interception, blocking, and history control | Enables enterprise policy enforcement and custom preprocessing pipelines |
| [#14997](https://github.com/openai/codex/pull/14997) **Reap orphaned idle threads on WebSocket disconnect** | Memory/Resource leak fix for app-server; tears down MCP servers properly | Stability improvement for long-running server deployments |
| [#14960](https://github.com/openai/codex/pull/14960) **FS abstraction + `view_image` integration** | Environment crate unifying filesystem, process, shell abstractions | Foundational refactor for multi-platform agent logic; enables testability |
| [#14945](https://github.com/openai/codex/pull/14945) **Restore composer history in app-server TUI** | Persistent Up/Down arrow history for app-server mode | UX parity between standalone and server-hosted TUI |
| [#14525](https://github.com/openai/codex/pull/14525) **Granular builtin tool enablement** | `config.tools.enabled` opt-in list for built-in capabilities | Security/compliance surface; moves from implicit to explicit tool availability |
| [#13592](https://github.com/openai/codex/pull/13592) **Prefer WebSockets when providers support them** | Transport modernization; removes feature flags | Reliability and latency improvement for real-time features |
| [#14988](https://github.com/openai/codex/pull/14988) **`thread/shellCommand` app-server API** | Server-side `!` shell command execution with sandbox + model visibility | Completes app-server feature parity for power-user workflows |
| [#14293](https://github.com/openai/codex/pull/14293) **Honor active permission profiles in sandbox debug** | Stops `codex sandbox` from forcing legacy mode when profiles configured | Fixes config system consistency |
| [#14759](https://github.com/openai/codex/pull/14759) **Build V8 with Rust bindings through Bazel** | JavaScript engine integration for sandboxed execution | Major infrastructure for JS/TS tool execution; caching strategy included |
| [#14963](https://github.com/openai/codex/pull/14963) **Prefer system `/usr/bin/bwrap`** | **Hotfix**: Resolves [#14919](https://github.com/openai/codex/issues/14919) Ubuntu/AppArmor sandbox regression | Critical path fix; already merged |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **ChatGPT ecosystem integration** | [#2153](https://github.com/openai/codex/issues/2153) (93 👍), implicit in context management requests | High — users want seamless research↔execution handoff |
| **Manual context control** | [#11325](https://github.com/openai/codex/issues/11325) (`/compact`), [#2880](https://github.com/openai/codex/issues/2880) (export as Markdown), [#8365](https://github.com/openai/codex/issues/8365) (compaction loop fixes) | Strong — frustration with opaque automatic management |
| **LaTeX/math rendering in App** | [#10715](https://github.com/openai/codex/issues/10715) | Moderate — parity with ChatGPT expected |
| **MCP ecosystem robustness** | [#14927](https://github.com/openai/codex/issues/14927) (hyphenated server names), general tool call issues | Growing — MCP adoption surfacing edge cases |

---

## Developer Pain Points

| Category | Symptoms | Root Indicators |
|----------|----------|---------------|
| **Permission system fatigue** | [#13117](https://github.com/openai/codex/issues/13117), [#14936](https://github.com/openai/codex/issues/14936), [#5237](https://github.com/openai/codex/issues/5237) (sandbox overreach) | Regression pattern; "don't ask again" persistence failures; config-profile conflicts |
| **Sandbox fragility (Linux)** | [#14919](https://github.com/openai/codex/issues/14919), [#13635](https://github.com/openai/codex/issues/13635), [#14825](https://github.com/openai/codex/issues/14825) | bubblewrap/AppArmor interactions; vendored vs. system binary conflicts; long-session resource exhaustion |
| **Token economics opacity** | [#14593](https://github.com/openai/codex/issues/14593), [#14329](https://github.com/openai/codex/issues/14329) | Business/Team tier users feel disproportionately affected; reset policy inconsistency |
| **Windows as second-class platform** | [#12764](https://github.com/openai/codex/issues/12764), [#11727](https://github.com/openai/codex/issues/11727), [#14423](https://github.com/openai/codex/issues/14423), [#14744](https://github.com/openai/codex/issues/14744) | Auth, task resumption, automation execution, and patch application all showing platform-specific failures |
| **Config system trust erosion** | [#10390](https://github.com/openai/codex/issues/10390) (ignored settings), [#8672](https://github.com/openai/codex/issues/8672) (symlink handling) | Settings silently ineffective; CLI/extension behavioral divergence |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-18

## Today's Highlights

The Gemini CLI team shipped **v0.35.0-preview.1** with customizable keyboard shortcuts and deeper `AgentLoopContext` threading for core agent operations. Meanwhile, the community is actively stress-testing the new `/plan` mode, surfacing critical UX gaps around context persistence and execution boundaries that the maintainers are now tracking as P1 priorities.

---

## Releases

### [v0.35.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0-preview.1)
- **Customizable keyboard shortcuts** — users can now remap keybindings via configuration ([#21945](https://github.com/google-gemini/gemini-cli/pull/21945))
- **Core architecture**: `AgentLoopContext` now threaded through core execution paths for better state management ([#21944](https://github.com/google-gemini/gemini-cli/pull/21944))

### [v0.34.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.34.0)
- Chat resume footer on session quit for continuity ([#20667](https://github.com/google-gemini/gemini-cli/pull/20667))
- Rich text styling (bold, etc.) in SVG snapshots ([#20937](https://github.com/google-gemini/gemini-cli/pull/20937))
- A2A agent timeout increase for long-running operations

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#22266](https://github.com/google-gemini/gemini-cli/issues/22266) **Agent "ghosts" after `/plan` approval** — context silently drops instead of executing | Critical regression in core workflow; breaks trust in plan mode | 6 comments, maintainer-tagged as workstream-rollup |
| [#21925](https://github.com/google-gemini/gemini-cli/issues/21925) **False hand-icon notifications** — shell scripts trigger "action required" incorrectly | UX noise degrades user trust in agent state indicators | 5 comments, possible-duplicate status |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST-aware file reads/search assessment** | Could dramatically reduce token waste and misaligned reads | 4 comments, EPIC-scoped investigation |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini underuses skills/sub-agents** | Core capability gap — users build skills that go unused | 4 comments, P2 priority |
| [#22507](https://github.com/google-gemini/gemini-cli/issues/22507) **Plan mode "always stuck"** — infinite thinking loops | Reliability blocker for plan mode adoption | 3 comments |
| [#22434](https://github.com/google-gemini/gemini-cli/issues/22434) **Execution allowed in plan mode** — safety boundary violation | Security/UX concern: plan mode should be read-only | 3 comments |
| [#22028](https://github.com/google-gemini/gemini-cli/issues/22028) **VS Code terminal scroll-to-top on click** | Daily friction for IDE-integrated users | 3 comments, 👍 1 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **Browser subagent fails on Wayland** | Linux compatibility gap for headless browser automation | 3 comments, P1 priority, 👍 1 |
| [#22831](https://github.com/google-gemini/gemini-cli/issues/22831) **Verification fidelity & strategic termination** | Over-verification causes "confidence traps" and wasted turns | 1 comment, 👍 1 — deep systems analysis |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) **Memory routing: global vs. project** | Foundation for persistent, context-aware agent memory | 1 comment, 👍 1 — new subagent architecture |

---

## Key PR Progress

| PR | Feature/Fix | Status |
|----|-------------|--------|
| [#22867](https://github.com/google-gemini/gemini-cli/pull/22867) **Browser sensitive action controls** — hard blocks + policy confirmations, read-only noise reduction | P1 security, open |
| [#22833](https://github.com/google-gemini/gemini-cli/pull/22833) **`/plan` accepts inline text** — single-command plan initiation | P1, open |
| [#22252](https://github.com/google-gemini/gemini-cli/pull/22252) **Subagent grouping & UI state persistence** — fixes tearing, improves type safety | Open |
| [#22739](https://github.com/google-gemini/gemini-cli/pull/22739) **Headless mode console cleanup** — suppresses logs unless debug enabled | Open |
| [#22866](https://github.com/google-gemini/gemini-cli/pull/22866) **Inline natural-language shell expansion** — `?` prefix generates editable commands | Open |
| [#21212](https://github.com/google-gemini/gemini-cli/pull/21212) **Refreshed Composer UX** — modern 2-row status/footer as default | P1, open |
| [#21199](https://github.com/google-gemini/gemini-cli/pull/21199) **ACP plan event streaming** — real-time agent plan visibility to editor | Open |
| [#22714](https://github.com/google-gemini/gemini-cli/pull/22714) **Maintainer offload skill** — remote parallel execution + model config refactor | Open |
| [#22853](https://github.com/google-gemini/gemini-cli/pull/22853) **Keypress/mouse provider refactor** — settings via context, fixes debug keystroke logging | Open |
| [#20974](https://github.com/google-gemini/gemini-cli/pull/20974) **Compact tool output** — high-signal rendering, reduced terminal noise | P2, open |

---

## Feature Request Trends

1. **Plan Mode Hardening** — `/plan` is the focal point: inline text initiation ([#22855](https://github.com/google-gemini/gemini-cli/issues/22855)), context persistence ([#22266](https://github.com/google-gemini/gemini-cli/issues/22266)), and strict read-only enforcement ([#22434](https://github.com/google-gemini/gemini-cli/issues/22434)) dominate requests.

2. **Memory Subsystem** — New architecture emerging: global vs. project-scoped memories ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819)), `GEMINI.md` TOC convention ([#22812](https://github.com/google-gemini/gemini-cli/issues/22812)), and behavioral evals ([#22805](https://github.com/google-gemini/gemini-cli/issues/22805)) suggest shipping readiness.

3. **AST-Aware Tooling** — Multiple investigations ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) into precise code navigation; community expects token efficiency gains.

4. **Subagent Lifecycle** — Backgroundable local agents ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741)), MAX_TURNS recovery transparency ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and better utilization of custom skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Plan mode reliability** | "Always stuck," context ghosts, execution leakage | 🔴 Critical — blocks adoption |
| **False signal noise** | Hand-icon spam, over-verification loops | 🟡 High — erodes trust |
| **Linux/headless gaps** | Wayland browser failures, Windows arrow-key issues | 🟡 High — platform parity |
| **Memory/context opacity** | Skills unused, preferences forgotten | 🟡 High — personalization gap |
| **Type safety/code quality** | Unsafe casts, partial clones proliferating ([#22750](https://github.com/google-gemini/gemini-cli/issues/22750), [#22863](https://github.com/google-gemini/gemini-cli/issues/22863)) | 🟠 Medium — technical debt risk |
| **IDE integration friction** | VS Code scroll jumps, workspace folder detection | 🟠 Medium — daily workflow |

---

*Digest compiled from google-gemini/gemini-cli public activity. For real-time updates: https://github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-18

## 1. Today's Highlights

GitHub shipped **v1.0.7** with accessibility improvements and **gpt-5.4-mini** support, alongside experimental SDK session APIs for skill and MCP server management. The community closed several long-standing bugs including a critical bash execution hang (#575) and jemalloc compatibility issues (#658), while new friction emerged around model persistence, keyboard shortcuts, and Tmux integration.

---

## 2. Releases

### [v1.0.7](https://github.com/github/copilot-cli/releases/tag/v1.0.7) — 2026-03-17
- **Accessibility & UX**: Improved color contrast across themes; user messages now render with subtle background differentiation; tab bar adopts compact `[label]` styling
- **Model Support**: Added **gpt-5.4-mini** backend option
- **Experimental SDK**: New session APIs for listing/managing skills, MCP servers, and plugins with working-directory config auto-discovery
- **Hooks**: `subagentStart` hook fires on subagent spawn, enabling prompt context injection

### [v1.0.7-0](https://github.com/github/copilot-cli/releases/tag/v1.0.7-0) — Prerelease
Same SDK and hook additions as above.

---

## 3. Hot Issues

| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|--------------|-------------------|
| [#575](https://github.com/github/copilot-cli/issues/575) Bash execution hangs — all commands timeout | **CLOSED** | Critical reliability bug affecting all shell command execution on macOS; blocked basic CLI functionality | 31 comments, resolved after multi-month investigation |
| [#618](https://github.com/github/copilot-cli/issues/618) Support custom slash commands from `.github/prompts` | **CLOSED** | Parity with VS Code Copilot extension; enables reusable prompt templates and team workflows | 27 comments, 91 👍 — highly requested |
| [#1161](https://github.com/github/copilot-cli/issues/1161) Invalid session ID with opus 4.5 | **CLOSED** | Broke all bash tasks for Claude Opus users; caused user churn (reporter switched to OpenCode.ai) | 21 comments, 15 👍 |
| [#1481](https://github.com/github/copilot-cli/issues/1481) SHIFT+ENTER executes instead of line break | OPEN | Violates universal chat UX convention; daily friction for multi-line input | 10 comments, 9 👍, triage tag |
| [#2073](https://github.com/github/copilot-cli/issues/2073) Transient API errors with aggressive retry loops | OPEN | Degrades trust in reliability; poor error handling UX | 7 comments, 10 👍 |
| [#2050](https://github.com/github/copilot-cli/issues/2050) Claude Sonnet 4.6: HTTP/2 GOAWAY connection terminated | OPEN | Model-specific infrastructure instability; blocks enterprise workflows | 5 comments, involves 84s retry waits |
| [#599](https://github.com/github/copilot-cli/issues/599) Support Enterprise MCP Policies | OPEN | **Blocker for enterprise adoption** — security/compliance requirement for org-wide MCP allowlists | 5 comments, 4 👍, stale but critical |
| [#1842](https://github.com/github/copilot-cli/issues/1842) Scrolling broken in Tmux | OPEN | Accessibility issue for terminal-multiplexer users; renders long responses unreadable | 4 comments, 1 👍 |
| [#1811](https://github.com/github/copilot-cli/issues/1811) Terminal flicker/scroll jumps in VS PowerShell | OPEN | Visual instability disrupting IDE-integrated workflows | 4 comments, 9 👍 |
| [#2089](https://github.com/github/copilot-cli/issues/2089) v1.0.6 breaks resume for pre-1.0.6 sessions | **CLOSED** | Data migration/schema validation regression; broke session continuity | 2 comments, rapid fix |

---

## 4. Key PR Progress

*No PRs updated in the last 24 hours.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Custom prompt/ agent definitions** | #618 (closed), #1067 (user-level hooks), #2058 (`/fork` command for session branching) | Users want programmable, reusable automation beyond ad-hoc chat |
| **Enterprise policy & compliance** | #599 (MCP policies), #1305 (CIMD for OAuth MCP) | CLI must satisfy security gates for org deployment |
| **Session management ergonomics** | #2058 (fork sessions), #1869 (model persistence), #2089 (session resume) | Long-running workflows need stateful, controllable context |
| **Observability integrations** | #2114 (Phoenix telemetry), implicit in SDK APIs | Production AI workflows demand tracing and metrics |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Issues | Severity |
|------------|-----------|----------------------|----------|
| **Model/connection instability** | High | #2073, #2050, #2101, #2099 | 🔴 Critical — blocks task completion |
| **Keyboard shortcut conflicts** | Medium | #1481 (SHIFT+ENTER), #2082 (ctrl+shift+c on Linux) | 🟡 Daily friction for power users |
| **Terminal environment compatibility** | Medium | #1842 (Tmux), #1811 (VS PowerShell), #1940 (Chinese text garbling) | 🟡 Limits addressable user base |
| **State persistence failures** | Medium | #1869 (model selection lost), #2089 (session resume broken) | 🟡 Breaks workflow continuity |
| **Tool discoverability/availability** | Low-Medium | #1898 (`ask_user` disappeared), #2106 (cropped question text) | 🟢 UX polish needed |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-03-17.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-18

---

## 1. Today's Highlights

Version 1.23.0 shipped with **background bash tasks** and notification infrastructure, enabling long-running shell operations without blocking the agent loop. The community filed 27 new/updated issues, with Windows compatibility, Web UI polish, and proxy configuration dominating the discussion. A surge of 28 PRs shows active community contribution, including 9 merged fixes for critical bugs like JSON parsing, PowerShell handling, and file mention filtering.

---

## 2. Releases

### [v1.23.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.23.0) — 2026-03-17

| Change | Description |
|--------|-------------|
| **feat** | Background bash tasks with `TaskList`, `TaskOutput`, `TaskStop` tools for detached worker processes |
| **fix** | Global config refresh across browser tabs when model changes |
| **chore** | Version bump and dependency sync |

The background task system enables workflows like "start a build, continue coding, check status later" — a significant UX improvement for long-running operations.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1234](https://github.com/MoonshotAI/kimi-cli/issues/1234) | Environment variable proxy broken with `aiohttp` defaults | **Corporate/restricted network blocker** — prevents login entirely behind proxies | 14 comments, active debugging |
| [#1107](https://github.com/MoonshotAI/kimi-cli/issues/1107) | Install script fails without `uv` pre-installed | **Onboarding friction** — breaks first-time install experience | 6 comments, reproduction confirmed |
| [#1296](https://github.com/MoonshotAI/kimi-cli/issues/1296) | Intermittent MCP disconnection errors | Stability concern for tool-heavy workflows | 2 comments, needs repro |
| [#1428](https://github.com/MoonshotAI/kimi-cli/issues/1428) | Web attachment button triggers premature submit | **UI regression** — breaks file upload UX | 2 comments, video evidence |
| [#1301](https://github.com/MoonshotAI/kimi-cli/issues/1301) | Ghostty light theme 'yolo' identifier illegible | Accessibility/theme polish for terminal users | 2 comments, design feedback |
| [#1341](https://github.com/MoonshotAI/kimi-cli/issues/1341) | Windows PowerShell subprocess handling bug | **Windows-specific Shell tool breakage** | 2 comments, platform gap |
| [#1291](https://github.com/MoonshotAI/kimi-cli/issues/1291) | Invalid Markdown in stdin crashes Kimi | Robustness issue — parser too strict | 2 comments, crash report |
| [#1429](https://github.com/MoonshotAI/kimi-cli/issues/1429) | Windows concurrent write `Permission denied` | File locking race condition on Windows | 1 comment, error logs provided |
| [#1459](https://github.com/MoonshotAI/kimi-cli/issues/1459) | Kimi can't self-configure MCP | **Meta-issue** — AI fails at its own config tasks | 1 comment, philosophical + practical |
| [#1478](https://github.com/MoonshotAI/kimi-cli/issues/1478) | Memory layer inadequate for large projects | **Architecture limitation** — context window pressure | 0 comments, detailed proposal with reference architecture |

---

## 4. Key PR Progress

| # | PR | Status | Impact |
|---|-----|--------|--------|
| [#1477](https://github.com/MoonshotAI/kimi-cli/pull/1477) | Background bash tasks + notification infrastructure | ✅ **Merged** | Core v1.23.0 feature — enables non-blocking shell workflows |
| [#1465](https://github.com/MoonshotAI/kimi-cli/pull/1465) | Proxy support via `trust_env=True` in `aiohttp` | ✅ **Merged** | Fixes #1234 — unblocks corporate proxy users |
| [#1466](https://github.com/MoonshotAI/kimi-cli/pull/1466) | Strip unsupported JSON Schema fields for Google GenAI | ✅ **Merged** | Fixes #734 — MCP tool compatibility with Gemini |
| [#1469](https://github.com/MoonshotAI/kimi-cli/pull/1469) | Persist `approve_for_session` across session resume | ✅ **Merged** | Fixes #765 — eliminates re-approval friction |
| [#1473](https://github.com/MoonshotAI/kimi-cli/pull/1473) | Fix git diff status bar overlap in Web UI | ✅ **Merged** | Fixes #1302 — layout polish |
| [#1486](https://github.com/MoonshotAI/kimi-cli/pull/1486) | Streamline startup paths + lazy MCP loading | 🔄 **Open** | Performance: faster cold start, memory reduction |
| [#1463](https://github.com/MoonshotAI/kimi-cli/pull/1463) | OSC terminal notifications on turn completion | 🔄 **Open** | Desktop notifications for iTerm2, Windows Terminal, VTE |
| [#1471](https://github.com/MoonshotAI/kimi-cli/pull/1471) | Prevent attachment button triggering form submit | 🔄 **Open** | Fixes #1428 — Web UX fix |
| [#1474](https://github.com/MoonshotAI/kimi-cli/pull/1474) | Enable inline math (`$...$`) rendering in Web UI | 🔄 **Open** | Fixes #1420 — LaTeX completeness |
| [#1467](https://github.com/MoonshotAI/kimi-cli/pull/1467) | Add asyncio lock for context file writes | 🔄 **Open** | Fixes #1429 — Windows concurrency safety |

---

## 5. Feature Request Trends

| Theme | Evidence | Direction |
|-------|----------|-----------|
| **Memory & Context Architecture** | #1478 (explicit request), #765 (session persistence) | Users need project-scoped long-term memory beyond single sessions; reference to `.openclaw/workspace/` pattern suggests interest in file-based memory layers |
| **Terminal Integration** | #1342 (OSC notifications), #1475 (directory in prompt) | Deeper shell environment integration — treating Kimi as a first-class shell citizen |
| **Concurrent/Multi-Task Workflows** | #1482 (multiple tasks), #1477 (background bash) | Shift from linear chat to parallel task management |
| **Windows Parity** | #1341, #1429, #1464 | Platform-specific gaps remain a priority; PowerShell and file locking need systematic attention |
| **Web UI Polish** | #1428, #1302, #1340, #1420, #1475 | Visual/UX refinements accumulating; suggests Web mode maturation |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Proxy/Network Configuration** | High | 🔴 Critical | #1234, #1479 — corporate environments blocked |
| **Windows Shell Reliability** | High | 🔴 Critical | #1341, #1429, #1464 — PowerShell and file I/O issues |
| **Installation Friction** | Medium | 🟡 High | #1107 — `uv` dependency assumption |
| **Session Continuity** | Medium | 🟡 High | #765, #1469 — approval persistence now fixed, but memory gaps remain |
| **MCP/Tool Integration Stability** | Medium | 🟡 High | #1296, #734, #1378 — protocol edge cases |
| **Self-Configuration Loops** | Emerging | 🟡 High | #1459 — AI fails to bootstrap its own environment |

**Emerging Pattern:** Users expect Kimi to be *self-configuring* (#1459) and *memory-aware* (#1478) for large projects — moving beyond reactive chat toward proactive, stateful agent behavior. The gap between "coding assistant" and "project partner" is where friction is concentrating.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-18

## Today's Highlights

The community is actively addressing critical Windows compatibility gaps with multiple PRs targeting upgrade detection, reserved filename handling, and shell command routing. Meanwhile, a major production incident involving webapp serve wedging under message storms was rapidly resolved, and GitLab Agent Platform integration is advancing through a significant provider migration PR.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) **Copilot auth over-counting premium requests** — Agent-initiated requests incorrectly marked as "user" consumed half a user's monthly quota in minutes | Critical cost impact for Copilot users; misclassification of request origin breaks billing trust | 195 comments, 64 👍 — highest engagement by far; closed rapidly indicating priority fix |
| [#3936](https://github.com/anomalyco/opencode/issues/3936) **GitHub Enterprise authorization failures** | Blocks enterprise adoption; "Unexpected Error" with no clear remediation path | 55 comments, 14 👍 — persistent since November 2025, enterprise users vocal |
| [#8598](https://github.com/anomalyco/opencode/issues/8598) **Copilot models 5.2-Codex, Raptor unsupported** | Regression in latest update breaks models that work in VS Code Copilot | 43 comments, 8 👍 — closed, suggesting fix deployed |
| [#16331](https://github.com/anomalyco/opencode/issues/16331) **Permissions ignored in opencode.json** | Security boundary failure; `.env` and sensitive files readable despite `deny` rules | 30 comments, 4 👍 — active with related issue [#15754](https://github.com/anomalyco/opencode/issues/15754) |
| [#4659](https://github.com/anomalyco/opencode/issues/4659) **Sliding window context management** | Proposes fundamental rethink of context compaction vs. current "amputation" approach | 21 comments, 18 👍 — strong conceptual engagement, RFC-quality discussion |
| [#4714](https://github.com/anomalyco/opencode/issues/4714) **TUI search in session buffer** | Basic editor functionality missing; users resort to external tools | 17 comments, 15 👍 — high 👍 ratio indicates broad latent demand |
| [#8140](https://github.com/anomalyco/opencode/issues/8140) **Configurable context limit and auto-compaction** | Cost optimization blocked by hardcoded thresholds | 14 comments, 26 👍 — highest 👍 count in top issues, clear product-market fit |
| [#8484](https://github.com/anomalyco/opencode/issues/8484) **Screen lag/freezing in WSL2/TMUX/Alacritty** | Performance regression affecting core Linux developer workflow | 9 comments, 13 👍 — environment-specific but severe for affected users |
| [#17977](https://github.com/anomalyco/opencode/issues/17977) **Webapp serve wedging under message.part.delta storm** | Production outage: single session can hang entire shared server instance | 5 comments, closed same day — critical severity, rapid response |
| [#15754](https://github.com/anomalyco/opencode/issues/15754) **Permissions stopped working after 6-8 weeks** | Regression in permission enforcement; `git push`, `rm` no longer prompting | 3 comments, 1 👍 — corroborates [#16331](https://github.com/anomalyco/opencode/issues/16331) pattern |

---

## Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|--------------|
| [#18012](https://github.com/anomalyco/opencode/pull/18012) **GitLab Agent Platform with dynamic model discovery** | Migrates from `@gitlab/gitlab-ai-provider` v3.6.0 to `gitlab-ai-provider` v5.1.2; adds workflow model routing and local tool execution | Major provider integration advancement; unscoped package migration reduces dependency complexity |
| [#18010](https://github.com/anomalyco/opencode/pull/18010) **Windows upgrade command shell routing** | Routes install detection and package manager commands through shell for `.cmd`/`.bat` shim resolution | Fixes [#17295](https://github.com/anomalyco/opencode/issues/17295) "unknown" installation method detection |
| [#18009](https://github.com/anomalyco/opencode/pull/18009) **Add `apply_patch` to EDIT_TOOLS filter** | Bug fix: `apply_patch` tool excluded from plan mode due to stale name `patch_file` in filter array | Closes [#18008](https://github.com/anomalyco/opencode/issues/18008); plan mode reliability |
| [#17957](https://github.com/anomalyco/opencode/pull/17957) **Effectify TruncateService, delete Scheduler** | Refactors truncation to Effect service on ManagedRuntime; removes Scheduler module | Architecture cleanup; enables better testability and runtime management |
| [#18007](https://github.com/anomalyco/opencode/pull/18007) **Session.start lifecycle hook** | Implements `session.start` plugin hook with `startup`, `resume`, `compact` triggers | Closes [#5409](https://github.com/anomalyco/opencode/issues/5409); plugin ecosystem extensibility |
| [#18005](https://github.com/anomalyco/opencode/pull/18005) **Native video and audio file reading** | Extends `read` tool for video/audio with model-capable providers (Kimi K2.5 via Chutes, etc.) | Closes [#10531](https://github.com/anomalyco/opencode/issues/10531); multimodal expansion |
| [#18003](https://github.com/anomalyco/opencode/pull/18003) **Notify when window focused option** | Adds toggle for notifications regardless of focus state | Closes [#18004](https://github.com/anomalyco/opencode/issues/18004); multi-session workflow support |
| [#17998](https://github.com/anomalyco/opencode/pull/17998) **Block reserved Windows names in tools** | Rejects `NUL`, `CON`, `PRN` etc. in write/edit/patch; blocks literal redirects like `>NUL` | Security/stability fix for Windows POSIX shell edge cases |
| [#18006](https://github.com/anomalyco/opencode/pull/18006) **Provider-prefixed model ID lookup** | Fixes model lookup for providers requiring prefixed IDs | Closes [#17853](https://github.com/anomalyco/opencode/issues/17853); provider compatibility |
| [#12046](https://github.com/anomalyco/opencode/pull/12046) **Expose Question.ask via API/SDK** | New `POST /question/ask` endpoint for non-blocking programmatic user queries | SDK completeness; enables advanced automation workflows |

---

## Feature Request Trends

1. **Context & Memory Management** — Sliding window proposals ([#4659](https://github.com/anomalyco/opencode/issues/4659)), configurable compaction thresholds ([#8140](https://github.com/anomalyco/opencode/issues/8140)), and cost-aware context limits dominate high-👍 requests. Users want control over when and how context is preserved.

2. **Lifecycle Hooks & Plugin Extensibility** — Session start/resume/compact hooks ([#5409](https://github.com/anomalyco/opencode/issues/5409), [#18007](https://github.com/anomalyco/opencode/pull/18007)) and expanded SDK capabilities ([#12046](https://github.com/anomalyco/opencode/pull/12046)) indicate maturing plugin ecosystem demands.

3. **TUI/Editor Parity** — Search in session buffer ([#4714](https://github.com/anomalyco/opencode/issues/4714)), copy-paste reliability ([#7048](https://github.com/anomalyco/opencode/issues/7048)), and notification behavior ([#18004](https://github.com/anomalyco/opencode/issues/18004)) show users expect terminal UI to match desktop editor baseline functionality.

4. **Multimodal & Media Support** — Native video/audio reading ([#18005](https://github.com/anomalyco/opencode/pull/18005)) and browser automation tools ([#7302](https://github.com/anomalyco/opencode/pull/7302)) reflect expansion beyond text-based coding assistance.

5. **Provider-Native Features** — Web search via provider APIs ([#10704](https://github.com/anomalyco/opencode/issues/10704)) and better model discovery/routing ([#18012](https://github.com/anomalyco/opencode/pull/18012), [#17688](https://github.com/anomalyco/opencode/pull/17688)) aim to reduce friction vs. native IDE integrations.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Windows as second-class citizen** | Upgrade detection failures ([#17295](https://github.com/anomalyco/opencode/issues/17295), [#18010](https://github.com/anomalyco/opencode/pull/18010)), reserved filename crashes ([#17998](https://github.com/anomalyco/opencode/pull/17998)), Git Bash permission bypass ([#16126](https://github.com/anomalyco/opencode/issues/16126)), npm hang on startup ([#11657](https://github.com/anomalyco/opencode/issues/11657)) | High — multiple concurrent PRs addressing systemic gaps |
| **Permission system regressions** | Config ignored ([#16331](https://github.com/anomalyco/opencode/issues/16331)), enforcement stopped after weeks ([#15754](https://github.com/anomalyco/opencode/issues/15754)), external directory bypasses ([#16126](https://github.com/anomalyco/opencode/issues/16126)) | Critical — security boundary failures |
| **Copilot integration fragility** | Auth over-counting ([#8030](https://github.com/anomalyco/opencode/issues/8030)), model support regressions ([#8598](https://github.com/anomalyco/opencode/issues/8598)), GHE auth broken ([#3936](https://github.com/anomalyco/opencode/issues/3936)) | High — affects paid user base directly |
| **Performance in constrained environments** | WSL2/TMUX/Alacritty lag ([#8484](https://github.com/anomalyco/opencode/issues/8484)), webapp serve wedging ([#17977](https://github.com/anomalyco/opencode/issues/17977)), freezing on 1.2.27 ([#17985](https://github.com/anomalyco/opencode/issues/17985)) | High — productivity impact |
| **Configuration discoverability** | Missing `opencode.json` files ([#4208](https://github.com/anomalyco/opencode/issues/4208)), agents.md from parent directories ([#6479](https://github.com/anomalyco/opencode/issues/6479)), session scoping issues ([#8836](https://github.com/anomalyco/opencode/issues/8836)) | Medium — onboarding friction |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-18

---

## 1. Today's Highlights

Qwen Code shipped **v0.12.6** with improved `max_tokens` handling and conservative defaults to prevent response truncation. The community is actively pushing toward **v0.13.0**, with major PRs for concurrent task tool execution, MCP output truncation, and enhanced export metadata landing in review. VS Code integration remains a hot zone, with image paste support and fuzzy file search both in active development.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.12.6](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.6)** | Increased default output token limit from 16K to 32K; moved `max_tokens` handling to provider level with conservative defaults to prevent truncation ([PR #2438](https://github.com/QwenLM/qwen-code/pull/2438)) |
| **v0.12.5-nightly.20260317.dbfa5b3e8** | Nightly build; no detailed changelog provided |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| **[#371](https://github.com/QwenLM/qwen-code/issues/371)** — Context Limits not respected *(CLOSED)* | Critical for large codebase workflows with local models; fix validates proper token budgeting | 12 comments, resolved after extended debugging |
| **[#2382](https://github.com/QwenLM/qwen-code/issues/2382)** — VS Code extension broken in 0.12.3 | Regression affecting core IDE workflow; Russian-speaking user reports total failure post-update | 7 comments, needs triage |
| **[#2441](https://github.com/QwenLM/qwen-code/issues/2441)** — 422 error with private model APIs | Blocking enterprise/self-hosted adoption; configuration complexity cited | 5 comments, active troubleshooting |
| **[#984](https://github.com/QwenLM/qwen-code/issues/984)** — Docker container IDE connection fails *(CLOSED)* | DevContainer workflow breakage; affects containerized development environments | 5 comments, recently closed |
| **[#2416](https://github.com/QwenLM/qwen-code/issues/2416)** — Secondary sidebar container missing | UI regression when repositioning panels; indicates view container registration issue | 4 comments |
| **[#1902](https://github.com/QwenLM/qwen-code/issues/1902)** — CLI chat history deletion | Long-standing UX gap; users accumulating unwanted session data | 4 comments, +1 upvote |
| **[#1094](https://github.com/QwenLM/qwen-code/issues/1094)** — DevContainer + VS Code Insider connection failure | P1 priority; affects modern VS Code workflow with insiders builds | 4 comments, unresolved since Nov 2025 |
| **[#2447](https://github.com/QwenLM/qwen-code/issues/2447)** — Skill Testing Framework proposal | Infrastructure investment for 100+ skills; Wenshao (maintainer) driving test automation | 3 comments, newly filed |
| **[#2426](https://github.com/QwenLM/qwen-code/issues/2426)** — Free tier quota reduction concerns | Community pushback on pricing/limits; perception of degraded service | 3 comments, emotionally charged |
| **[#2427](https://github.com/QwenLM/qwen-code/issues/2427)** — CLI API key configuration frustration *(CLOSED)* | Strong community feedback on DX friction vs. competitors like OpenCode | 3 comments, closed but sentiment noted |

---

## 4. Key PR Progress

| PR | Feature/Fix | Status |
|----|-------------|--------|
| **[#2434](https://github.com/QwenLM/qwen-code/pull/2434)** — Concurrent task tool execution | Parallel sub-agent execution for performance; 0.13.0 milestone | Open |
| **[#2446](https://github.com/QwenLM/qwen-code/pull/2446)** — MCP tool output truncation | Prevents context window overflow; centralizes truncation logic | Open |
| **[#2437](https://github.com/QwenLM/qwen-code/pull/2437)** — Fuzzy search for VS Code file completion | Backend-powered search replacing client-side matching | Open |
| **[#2445](https://github.com/QwenLM/qwen-code/pull/2445)** — Token usage in loading indicator | Real-time visibility into consumption during generation | Open |
| **[#2448](https://github.com/QwenLM/qwen-code/pull/2448)** — Fix SDK streaming event pairing | Ensures `message_start`/`message_stop` parity; adds E2E tests | Open |
| **[#2440](https://github.com/QwenLM/qwen-code/pull/2440)** — `qwen auth` CLI command + Code Claw skill | Streamlined authentication setup; new agent skill | Open |
| **[#2420](https://github.com/QwenLM/qwen-code/pull/2420)** — Ctrl+Y to skip rate-limit delay | UX improvement for shared account TPM throttling | Open |
| **[#2385](https://github.com/QwenLM/qwen-code/pull/2385)** — LM Studio & Ollama local provider support | Expands self-hosted model ecosystem | Open |
| **[#1978](https://github.com/QwenLM/qwen-code/pull/1978)** — VS Code image paste support | Closes gap with competitors; hardens end-to-end image flow | Open |
| **[#2328](https://github.com/QwenLM/qwen-code/pull/2328)** — Export metadata & statistics | Session analytics, token tracking, HTML reporting; 0.13.0 | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Sub-agent/parallel execution parity** | #2409 (Claude Code parity), #2434 (concurrent tasks), #1802/#2000 (parallel tool calls) | High — core architecture focus |
| **Image/multimodal support** | #1951, #2419, #1978 (VS Code paste) | High — competitive necessity |
| **Testing & observability infrastructure** | #2447 (skill testing framework), #2328 (export stats), #2445 (token visibility) | Medium — maintainer-led |
| **Local/self-hosted model ergonomics** | #2385 (LM Studio/Ollama), #2441 (private API config pain), #2427 (CLI auth DX) | High — enterprise demand |
| **Workspace-local configuration** | #2396 (store config/history in `.qwen`) | Medium — multi-environment workflows |
| **MCP protocol modernization** | #2436 (Streamable HTTP transport), #2446 (truncation) | Medium — spec compliance |

---

## 6. Developer Pain Points

| Pain Point | Manifestation | Frequency |
|------------|-------------|-----------|
| **VS Code extension instability** | #2382, #2416, #1503, #2432, #1094 | Very High — dominant theme |
| **Configuration complexity** | #2441 (private APIs), #2427 (CLI auth friction), #2383 (paste API key fails) | High — onboarding barrier |
| **Docker/DevContainer connectivity** | #984, #1094 | Medium — containerized workflows |
| **Context/token management** | #371 (limits), #2435 (tool message sequencing), #2384 (input length errors) | Medium — reliability |
| **Rate limiting UX** | #2420 (skip delay), #2426 (quota complaints) | Medium — shared account friction |
| **MCP integration rough edges** | #2436 (transport), #2446 (truncation), #2439 (bypass logic) | Emerging — protocol adoption |

---

*Digest compiled from github.com/QwenLM/qwen-code activity on 2026-03-18.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*