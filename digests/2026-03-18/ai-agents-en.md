# OpenClaw Ecosystem Digest 2026-03-18

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-18 00:10 UTC

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

# OpenClaw Project Digest — 2026-03-18

---

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 500 issues and 500 PRs updated in the last 24 hours, indicating an active, rapidly evolving codebase. The project is in a **stabilization phase following recent regressions** — multiple critical bugs surfaced in versions 2026.3.11–2026.3.13, particularly around gateway connectivity, authentication flows, and provider integrations. No new releases were cut today, suggesting maintainers are focused on fixing regressions before the next version. Community engagement remains strong with 102 comments on the long-running i18n discussion and active cross-platform feature requests. The project health is **moderate-to-strong** with robust contribution volume, though stability concerns from recent releases require attention.

---

## 2. Releases

**No new releases today.** The latest release remains prior to 2026-03-18.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Title | Impact |
|:---|:---|:---|
| [#49307](https://github.com/openclaw/openclaw/pull/49307) | CLI: follow up config set dry-run review fixes | Config system reliability |
| [#49296](https://github.com/openclaw/openclaw/pull/49296) | CLI: expand config set with SecretRef/provider builders and dry-run | Enhanced configuration management |
| [#49237](https://github.com/openclaw/openclaw/pull/49237) | Agents: improve prompt cache hit rate and add prompt composition regression tests | Performance optimization |

### Active Development (Open PRs with Significant Progress)

| PR | Title | Significance |
|:---|:---|:---|
| [#44421](https://github.com/openclaw/openclaw/pull/44421) | feat: integrate Cortex local memory into OpenClaw | **Major feature**: Local memory substrate with `/cortex` commands — addresses long-standing memory architecture needs |
| [#43497](https://github.com/openclaw/openclaw/pull/43497) | fix(agents): recover subagent runs after gateway restart | **Reliability critical**: Resumes interrupted agent workflows post-restart |
| [#41597](https://github.com/openclaw/openclaw/pull/41597) | feat(gateway): queue inbound messages during drain and recover interrupted turns on restart | **Message loss prevention**: Persistent queue for zero-downtime restarts |
| [#49179](https://github.com/openclaw/openclaw/pull/49179) | feat(ollama): incremental streaming, Markdown tool-call fallback, and extended reasoning heuristics | **UX upgrade**: "Manus-like silky-smooth experience" for local models |
| [#48230](https://github.com/openclaw/openclaw/pull/48230) | Gateway: fix plugin runtime and hook dispatch handling | **Stability**: Fixes plugin state loss during reloads |
| [#48231](https://github.com/openclaw/openclaw/pull/48231) | Plugins: add structured output support for subagents | **Extension capability**: Machine-readable tool outputs for plugins |

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue/PR | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 102 | Internationalization (i18n) & Localization Support | **Global accessibility** — maintainers acknowledge demand but cite bandwidth constraints; community willing to contribute |
| [#75](https://github.com/openclaw/openclaw/issues/75) | 41 | Linux/Windows Clawdbot Apps | **Cross-platform parity** — macOS/iOS/Android have apps; desktop Linux/Windows users excluded from native experience |
| [#48205](https://github.com/openclaw/openclaw/issues/48205) | 20 | Gateway Restarts Every ~50 Minutes with "reason=none" | **Production reliability** — critical infrastructure stability for self-hosted deployments |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) | 19 | 支持Agent接收并识别图片内容 (视觉能力) | **Multimodal AI** — Vision capability for Feishu/enterprise messaging platforms |
| [#13991](https://github.com/openclaw/openclaw/issues/13991) | 18 | [Proposal] Associative Hierarchical Memory | **Cognitive architecture** — Implemented in fork [TinkerClaw](https://github.com/globalcaos/tinkerclaw); signals demand for advanced memory systems |

### Analysis

The **i18n issue (#3460)** represents a **strategic inflection point**: 102 comments demonstrate sustained community demand, yet maintainer bandwidth constraints block progress. This suggests either (a) need for community governance model for i18n, or (b) risk of community fragmentation (evidenced by TinkerClaw fork).

The **TinkerClaw fork emergence** (#13991) is significant — a production-ready cognitive memory stack (ENGRAM, CORTEX, HIPPOCAMPUS, LIMBIC, SYNAPSE) developed externally indicates unmet needs in core OpenClaw architecture.

---

## 5. Bugs & Stability

### Critical/Severe (Production-Impacting)

| Issue | Severity | Description | Fix Status |
|:---|:---|:---|:---|
| [#48205](https://github.com/openclaw/openclaw/issues/48205) | 🔴 **Critical** | Gateway restarts every ~50 minutes without error reason | **No fix PR identified** |
| [#44714](https://github.com/openclaw/openclaw/issues/44714) | 🔴 **Critical** | `openclaw logs --follow` fails after 2026.3.12 upgrade with handshake timeout | Gateway healthy but CLI broken; **no fix PR** |
| [#45560](https://github.com/openclaw/openclaw/issues/45560) | 🔴 **Critical** | Local gateway CLI handshake fails (probe timeout / gateway call closed 1000) | **No fix PR** |
| [#30177](https://github.com/openclaw/openclaw/issues/30177) | 🟠 **High** | WhatsApp announce queue delivery fails despite connection | Related to [#46659](https://github.com/openclaw/openclaw/issues/46659), [#41950](https://github.com/openclaw/openclaw/issues/41950) |
| [#46659](https://github.com/openclaw/openclaw/issues/46659) | 🟠 **High** | WhatsApp: message send fails but react succeeds (duplicate active-listener module) | **No fix PR** |
| [#45227](https://github.com/openclaw/openclaw/issues/45227) | 🟠 **High** | 422 status code with Mistral (regression) | **No fix PR** |
| [#41293](https://github.com/openclaw/openclaw/issues/41293) | 🟠 **High** | Mistral provider fails with 422 while direct API succeeds | **No fix PR** |
| [#49191](https://github.com/openclaw/openclaw/issues/49191) | 🟠 **High** | google-vertex ADC auth broken: "<authenticated>" sentinel passed as literal API key | **No fix PR** |
| [#48689](https://github.com/openclaw/openclaw/issues/48689) | 🟠 **High** | google-vertex auth broken on Windows in 2026.3.13 | Regression from 2026.3.12; **no fix PR** |

### Medium Severity

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#37623](https://github.com/openclaw/openclaw/issues/37623) | openai-codex/gpt-5.4 configurable but not supported at runtime | PR [#49235](https://github.com/openclaw/openclaw/pull/49235) addresses metadata shadowing |
| [#45681](https://github.com/openclaw/openclaw/issues/45681) | Thinking models timeout across multiple providers (regression in 2026.3.12) | **No fix PR** |
| [#48527](https://github.com/openclaw/openclaw/issues/48527) | GitHub Copilot provider returns 421 Misdirected Request | **No fix PR** |
| [#44851](https://github.com/openclaw/openclaw/issues/44851) | Kimi web_search 401 error (Chat API works) | **No fix PR** |

### Stability Assessment

**Gateway reliability is degraded** in 2026.3.12–2026.3.13 with multiple handshake, authentication, and provider integration regressions. The WhatsApp "No active WhatsApp Web listener" error appears in **4 separate issues**, indicating systemic state management problems. The lack of fix PRs for critical gateway issues suggests either complexity or maintainer capacity constraints.

---

## 6. Feature Requests & Roadmap Signals

### High-Probability Next-Version Features

| Feature | Signal Strength | Evidence |
|:---|:---|:---|
| **Cortex Local Memory Integration** | ⭐⭐⭐⭐⭐ | PR [#44421](https://github.com/openclaw/openclaw/pull/44421) in active development; addresses #13991 fork competition |
| **Gateway Message Durability / Zero-Downtime Restart** | ⭐⭐⭐⭐⭐ | PRs [#43497](https://github.com/openclaw/openclaw/pull/43497), [#41597](https://github.com/openclaw/openclaw/pull/41597) — critical for production users |
| **Structured Output for Plugin Subagents** | ⭐⭐⭐⭐☆ | PR [#48231](https://github.com/openclaw/openclaw/pull/48231) — enables plugin ecosystem growth |
| **MCP Client Native Support** | ⭐⭐⭐⭐☆ | Issue [#29053](https://github.com/openclaw/openclaw/issues/29053) — 7 upvotes; "rapidly becoming industry standard" |
| **Vision/Multimodal Support** | ⭐⭐⭐⭐☆ | Issue [#28744](https://github.com/openclaw/openclaw/issues/28744) — 19 comments; enterprise messaging demand |

### Strategic Signals

- **Memory Architecture Evolution**: The TinkerClaw fork and Cortex PR indicate the community is pushing beyond simple RAG toward cognitive memory systems. OpenClaw core risks obsolescence without comparable capabilities.

- **MCP Protocol Adoption**: Issue [#29053](https://github.com/openclaw/openclaw/issues/29053) explicitly frames MCP as "industry standard" — OpenClaw's proprietary tool system may become a competitive disadvantage.

- **Cross-Platform Parity**: Issue [#75](https://github.com/openclaw/openclaw/issues/75) (62 upvotes) represents significant unmet demand for desktop applications.

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Category | Issue | User Impact |
|:---|:---|:---|
| **Gateway Stability** | #48205, #44714, #45560 | Production deployments unreliable; monitoring/debugging broken |
| **Authentication Fragility** | #49191, #48689, #8983, #44616 | Provider auth fails intermittently; OAuth refresh broken |
| **WhatsApp Reliability** | #30177, #46659, #41950, #19618 | Business-critical messaging channel unreliable |
| **Provider-Specific Regressions** | #45227, #41293, #37623, #45681 | Model upgrades break existing configurations |
| **Configuration UX** | #8983, #48189 | Onboarding failures; API key changes blocked |

### Use Cases & Satisfaction Indicators

| Positive Signal | Evidence |
|:---|:---|
| Active multi-agent deployments | Issues [#25359](https://github.com/openclaw/openclaw/issues/25359), [#32495](https://github.com/openclaw/openclaw/issues/32495) — users running specialized agents |
| Enterprise messaging integration | Feishu, WhatsApp, Telegram, Discord, Google Chat issues — strong B2B adoption |
| Self-hosting preference | Multiple localhost/private network issues — users avoiding cloud dependencies |

| Negative Signal | Evidence |
|:---|:---|
| Forking due to unmet architecture needs | TinkerClaw fork — advanced users leaving ecosystem |
| Version pinning due to regressions | Multiple "worked before 2026.3.x" reports |
| Platform exclusion | Linux/Windows users without native apps |

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>2 weeks old, high impact)

| Issue | Age | Problem | Risk if Unaddressed |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | ~7 weeks | i18n support | Community fragmentation; TinkerClaw precedent |
| [#75](https://github.com/openclaw/openclaw/issues/75) | ~11 weeks | Linux/Windows desktop apps | Platform exclusion; competitor advantage |
| [#25359](https://github.com/openclaw/openclaw/issues/25359) | ~3 weeks | Per-agent plugin slot overrides | Multi-agent setup limitations |
| [#29053](https://github.com/openclaw/openclaw/issues/29053) | ~3 weeks | MCP Client native support | Ecosystem lock-in risk |
| [#20502](https://github.com/openclaw/openclaw/issues/20502) | ~4 weeks | Google Chat infinite restart loop | Channel reliability |
| [#19854](https://github.com/openclaw/openclaw/issues/19854) | ~4 weeks | Nextcloud Talk crash loop | Channel reliability |
| [#18099](https://github.com/openclaw/openclaw/issues/18099) | ~5 weeks | WhatsApp group management actions | Feature parity with native WhatsApp |

### PRs At Risk of Stagnation

| PR | Age | Value | Blocker |
|:---|:---|:---|:---|
| [#19042](https://github.com/openclaw/openclaw/pull/19042) | ~4 weeks | Security: URL allowlist for web_search/web_fetch | Review bandwidth; security-critical |
| [#11890](https://github.com/openclaw/openclaw/issues/11890) | ~5 weeks | WebChat UI freezes on large sessions | Performance degradation in primary UI |

---

## Summary Assessment

| Dimension | Rating | Notes |
|:---|:---|:---|
| Development Velocity | ⭐⭐⭐⭐⭐ | 1000 items updated/24h exceptional |
| Code Stability | ⭐⭐☆☆☆ | 2026.3.12–2026.3.13 regressions critical |
| Community Health | ⭐⭐⭐⭐☆ | High engagement; fork risk emerging |
| Production Readiness | ⭐⭐⭐☆☆ | Gateway issues block enterprise trust |
| Ecosystem Growth | ⭐⭐⭐⭐☆ | Strong plugin activity; MCP gap |

**Recommended Priorities for Maintainers:**
1. **Stabilize gateway** — handshake, auth, and restart reliability (blocking production)
2. **Resolve WhatsApp state management** — systemic "No active listener" errors
3. **Address i18n governance** — formalize community contribution model or risk further forks
4. **MCP protocol evaluation** — strategic decision on standards alignment

---

## Cross-Ecosystem Comparison

# Cross-Project Analysis: Personal AI Assistant Open-Source Ecosystem
*Report Date: 2026-03-18*

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem exhibits **extreme fragmentation with convergent evolution**—over a dozen active projects compete for developer mindshare while rapidly adopting similar architectural patterns. The landscape is dominated by **OpenClaw as the incumbent reference implementation**, with challengers emerging along three vectors: **minimalist/security-focused** (NanoClaw, ZeptoClaw), **enterprise/Asian-market** (NanoBot, LobsterAI, CoPaw, Moltis), and **embedded/edge** (PicoClaw, ZeroClaw). All projects face common pressures: **MCP protocol adoption**, **multi-provider resilience**, **memory architecture evolution**, and **production operationalization**—yet differ sharply in philosophy from "batteries-included" (OpenClaw, IronClaw) to "minimalist containerized" (NanoClaw) to "plugin-extensible" (ZeroClaw, LobsterAI).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score* | Status |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | None | ⭐⭐⭐☆☆ | Stabilization crisis |
| **NanoBot** | 36 | 94 | None | ⭐⭐⭐⭐☆ | High velocity, review backlog |
| **ZeroClaw** | 38 | 50 | 10 (v0.5.0-beta) | ⭐⭐⭐⭐☆ | Rapid iteration, security tension |
| **PicoClaw** | 19 | 84 | v0.2.3 + nightly | ⭐⭐⭐☆☆ | Release regression cluster |
| **NanoClaw** | 28 | 50 | None | ⭐⭐⭐☆☆ | Proposal surge, maintainer stall |
| **NullClaw** | 7 | 22 | None | ⭐⭐⭐⭐☆ | Security-hardened, responsive |
| **IronClaw** | 50 | 50 | v0.19.0 | ⭐⭐⭐☆☆ | Post-release stabilization |
| **LobsterAI** | 11 | 24 | v2026.3.17 | ⭐⭐⭐☆☆ | Migration-heavy transition |
| **TinyClaw** | 1 | 3 | None | ⭐⭐☆☆☆ | Stalled, critical bug unpatched |
| **Moltis** | 1 | 5 | None | ⭐⭐⭐⭐☆ | Stable maintenance mode |
| **CoPaw** | 50 | 50 | 2 betas | ⭐⭐⭐☆☆ | Beta instability, Windows issues |
| **ZeptoClaw** | 6 | 15 | None | ⭐⭐⭐☆☆ | Infrastructure hardening |
| **EasyClaw** | 0 | 2 | v1.6.8 | ⭐⭐⭐☆☆ | Stable, low activity |

*\*Health Score: Composite of velocity, stability, maintainer responsiveness, and release cadence*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Advantage | Evidence |
|:---|:---|:---|
| **Ecosystem scale** | 1000 items/day activity; dominant mindshare | 500 issues + 500 PRs/24h vs. next highest (NanoBot: 130) |
| **Channel diversity** | 15+ messaging platforms natively supported | WhatsApp, Feishu, Telegram, Discord, Google Chat all maintained |
| **Plugin architecture maturity** | WASM runtime, structured output for subagents | PR #48231, #44421 (Cortex memory) |
| **Reference implementation** | De facto standard; competitors benchmark against it | "OpenClaw parity" cited in NanoBot #2072, LobsterAI #344 |

### Technical Approach Differences
| Aspect | OpenClaw | Key Peers |
|:---|:---|:---|
| **Memory** | RAG + emerging Cortex local memory | NanoClaw: Honcho integration; TinkerClaw fork: cognitive architecture |
| **Security** | Configurable, feature-rich | NanoClaw/ZeptoClaw: mandatory encryption, container isolation |
| **Deployment** | Gateway + CLI + apps | ZeroClaw: Docker-first; PicoClaw: edge/embedded; IronClaw: cloud-native |
| **Provider abstraction** | Provider-specific implementations | Moltis: unified gateway; NanoClaw: Anthropic-only (lock-in risk) |

### Community Size Comparison
- **OpenClaw**: ~10x activity of nearest competitor; 102-comment i18n thread; TinkerClaw fork signals unmet advanced needs
- **NanoBot**: Strong Chinese market presence; 94 PRs/day but review bottleneck
- **IronClaw**: Enterprise-focused; NEAR AI backing; multi-tenancy investment
- **CoPaw**: AgentScope ecosystem integration; ModelScope skill hub

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP Protocol Support** | OpenClaw #29053, NanoClaw #117, IronClaw #1048, Moltis #439 | Native client implementation; "rapidly becoming industry standard" per OpenClaw community |
| **Multi-Provider Resilience** | OpenClaw (regressions in 2026.3.12–13), NanoClaw #80, NanoBot #2141, ZeroClaw #3786 | Runtime model switching; failover; avoid vendor lock-in (Anthropic ban anxiety) |
| **Memory Architecture Evolution** | OpenClaw #44421, #13991; NanoClaw #2183; CoPaw #1689; PicoClaw #1498 | Beyond RAG: local memory, cognitive hierarchies, compaction, search |
| **Gateway Reliability / Zero-Downtime** | OpenClaw #43497, #41597; IronClaw #1254; ZeroClaw #3821; Moltis #449 | Message durability, queue recovery, health checks, rolling updates |
| **Enterprise IM Integration** | OpenClaw #28744, #75; NanoBot #1988; LobsterAI #472; Moltis #383; CoPaw #1345 | Feishu, WeCom, DingTalk, Lark native support |
| **Observability / Tracing** | NanoClaw #1202, #1174; IronClaw #600; CoPaw #1645; ZeptoClaw #372 | Token budgets, structured logs, trace UI, progress protocols |
| **Security Hardening** | NullClaw #537, #538; NanoClaw #1164–#1177; ZeptoClaw #371, #373 | Secret encryption, egress policies, prompt injection detection, credential isolation |

---

## 5. Differentiation Analysis

| Project | Core Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference completeness, ecosystem breadth | General-purpose, multi-platform | Monolithic gateway + plugin system |
| **NanoBot** | Resource efficiency, Chinese market optimization | Cost-conscious, Asia-deployed | Lightweight Python, Docker-minimal |
| **ZeroClaw** | Security-by-default, rapid channel expansion | Security-conscious, automation-heavy | WASM plugins, self-test/update ops |
| **PicoClaw** | Edge/embedded, resource-constrained | IoT, ARM64, Termux users | Go-based, system tray native |
| **NanoClaw** | Minimalist container security | Security-first developers | Single-container, secret scanning |
| **NullClaw** | Hardened multi-tenancy, Matrix reliability | Enterprise, self-hosted teams | Session isolation, per-agent workspaces |
| **IronClaw** | NEAR AI integration, routines UX | AI-native workflows, crypto-adjacent | WASM-heavy, cloud-scaled |
| **LobsterAI** | OpenClaw plugin compatibility, NetEase ecosystem | China enterprise, existing NetEase users | Hybrid native/OpenClaw runtime |
| **CoPaw** | AgentScope runtime, skill marketplace | Multi-agent researchers, Chinese devs | Desktop-first, memory-compression |
| **ZeptoClaw** | Coding agent runtime, NemoClaw-inspired | Developer tooling, secure CI/CD | Capsule/containment philosophy |
| **Moltis** | Gateway-unified provider abstraction | Platform operators, multi-AI deployments | Centralized gateway, MCP-native |
| **TinyClaw** | "Live office" observability | Small team visibility | Next.js real-time UI |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Velocity Risk)
| Project | Velocity Signal | Risk Factor |
|:---|:---|:---|
| **OpenClaw** | 1000 items/day | Stability crisis—regressions in 3 consecutive releases |
| **NanoBot** | 130 items/day, 94 PRs | Review backlog—37 open PRs, maintainer bandwidth |
| **ZeroClaw** | 88 items/day, 10 releases | Security vs. usability tension—#1478 "only security, no features" |

### Tier 2: Active Development (Balanced)
| Project | Maturity Signal | Trajectory |
|:---|:---|:---|
| **IronClaw** | v0.19.0 shipped, multi-tenancy PRs | Stabilizing post-release; enterprise features |
| **CoPaw** | 2 betas/24h, rapid fixes | Beta instability → GA push |
| **PicoClaw** | v0.2.3 + nightly | Critical regressions being patched |
| **NullClaw** | 77% merge rate, security focus | Hardening phase; production-ready |

### Tier 3: Maintenance/Stalled
| Project | Status | Concern |
|:---|:---|:---|
| **NanoClaw** | 37 open PRs, 3 high bugs unpatched | Maintainer capacity crisis |
| **TinyClaw** | 3 PRs unmerged, critical data-loss bug | Effectively stalled |
| **Moltis** | 5 PRs, stable but low engagement | Community momentum risk |
| **EasyClaw** | 2 items closed, no new activity | Single-maintainer risk |

---

## 7. Trend Signals

| Trend | Evidence | Implication for Developers |
|:---|:---|:---|
| **MCP as de facto standard** | OpenClaw #29053: "rapidly becoming industry standard"; Moltis #439; IronClaw #1048 | Build MCP-native tools; proprietary tool systems face obsolescence |
| **Memory beyond RAG** | TinkerClaw fork (ENGRAM/CORTEX/HIPPOCAMPUS); OpenClaw Cortex PR #44421; CoPaw compaction | Cognitive architectures emerging; simple vector search insufficient |
| **Vendor lock-in anxiety** | NanoClaw #80: "Anthropic shutting down subs for OpenClaw usage"; runtime model switching PRs | Multi-provider abstraction table stakes; single-provider projects at risk |
| **Edge/embedded deployment** | PicoClaw ARMv7/Termux issues; ZeroClaw ARM64 fixes; NanoBot "ultra-lightweight" positioning | Resource constraints driving Go/Rust adoption; Python projects face pressure |
| **Enterprise operationalization** | Zero-downtime restart PRs across OpenClaw, IronClaw, ZeroClaw; observability investments | "It works on my machine" insufficient; need health checks, metrics, updates |
| **Asian market dominance** | Feishu/WeCom/DingTalk/Lark as top issues across 6+ projects | Internationalization not optional; Chinese IM integration critical for adoption |
| **Security as differentiator** | NanoClaw secret scanning, ZeptoClaw credential isolation, NullClaw mandatory encryption | Post-OpenClaw-compromise era; security theater no longer acceptable |
| **Forking as governance signal** | TinkerClaw from OpenClaw #13991; MimicClaw referenced in NullClaw #583 | Unmet architectural needs drive fragmentation; core projects risk irrelevance |

---

## Strategic Recommendations

| For | Action |
|:---|:---|
| **AI Agent Developers** | Target MCP protocol first; build provider-agnostic tools; monitor memory architecture evolution |
| **Enterprise Adopters** | Evaluate NullClaw, ZeroClaw for security; IronClaw, OpenClaw for features; avoid NanoClaw until maintainer capacity resolved |
| **Contributors** | OpenClaw i18n (#3460) and Cortex memory (#44421) high-impact; NanoBot review backlog opportunity; ZeptoClaw infrastructure polish |
| **New Projects** | Consider Rust/Go for edge; WASM for extensibility; MCP-native from day one; avoid Python monoliths |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-18

---

## 1. Today's Overview

NanoBot shows **exceptional community momentum** with 130 total updates in 24 hours (36 issues, 94 PRs), indicating a highly active development phase. The project is experiencing rapid feature iteration with 45 merged/closed PRs against 49 open ones, suggesting aggressive merging but also substantial incoming contributions requiring review. No new release was cut today, though the volume of fixes and features suggests a patch release may be imminent. Chinese and international user bases are both highly engaged, with WeChat Enterprise (WeCom) and domestic AI providers (Xiaomi MiMo, MiniMax) receiving significant attention. The project appears healthy but maintainers may face review backlog pressure.

---

## 2. Releases

**No new releases** (v0.1.4.post5 remains current).

Notable version-related issues:
- Version mismatch bug persists: `__init__.py` hardcoded to "0.1.0" vs. pyproject.toml's "0.1.3.post7" ([#608](https://github.com/HKUDS/nanobot/issues/608))
- Multiple reports of v0.1.4.post5 introducing regressions (voice transcription, Gemini model compatibility)

---

## 3. Project Progress

### Merged/Closed PRs Today (45 total, key highlights):

| PR | Description | Significance |
|---|---|---|
| [#2140](https://github.com/HKUDS/nanobot/pull/2140) | Hide absolute workspace paths in tool hints | Privacy/security improvement for multi-user environments |
| [#2177](https://github.com/HKUDS/nanobot/pull/2177) | Hide `message` tool from tool hints | Fixes duplicate message UI bug |
| [#2067](https://github.com/HKUDS/nanobot/pull/2067) | Refactor heartbeat to use message bus | Architectural cleanup, simplifies gateway initialization |
| [#2109](https://github.com/HKUDS/nanobot/pull/2109) | Telegram media URL support (closed as duplicate of #1793) | Media handling improvement |
| [#2178](https://github.com/HKUDS/nanobot/pull/2178), [#2176](https://github.com/HKUDS/nanobot/pull/2176) | Xiaomi MiMo provider support (multiple attempts) | Chinese market expansion |

### Active Development Areas:
- **Cron system refinement**: Progress message suppression ([#2184](https://github.com/HKUDS/nanobot/pull/2184)), enhanced job listing with schedule details ([#2107](https://github.com/HKUDS/nanobot/pull/2107))
- **Provider ecosystem expansion**: Xiaomi MiMo, Groq Whisper configurability ([#1746](https://github.com/HKUDS/nanobot/pull/1746))
- **Channel improvements**: WeCom App webhook support ([#2173](https://github.com/HKUDS/nanobot/pull/2173)), TUI terminal interface ([#2155](https://github.com/HKUDS/nanobot/pull/2155))
- **Long-term memory**: Honcho integration PR submitted ([#2183](https://github.com/HKUDS/nanobot/pull/2183))

---

## 4. Community Hot Topics

### Most Active Issues by Engagement:

| Issue | Comments | Core Need |
|---|---|---|
| [#2133](https://github.com/HKUDS/nanobot/issues/2133) — Agent loop message queuing | 13 | **Real-time user intervention** during long-running tasks; architectural limitation where agents can't receive mid-execution user input |
| [#1988](https://github.com/HKUDS/nanobot/issues/1988) — WeCom channel broken | 12 | Enterprise messaging reliability; configuration/documentation gaps |
| [#660](https://github.com/HKUDS/nanobot/issues/660) — "Ultra-lightweight" claim vs. Node.js dependency | 8, 4 👍 | **Identity/positioning crisis**: Docker image bloat contradicts marketing |
| [#405](https://github.com/HKUDS/nanobot/issues/405) — SearXNG search support | 8 | Privacy-conscious, self-hosted search alternative to paid APIs |
| [#2072](https://github.com/HKUDS/nanobot/issues/2072) — Native multi-agent routing | 7 | OpenClaw feature parity for complex agent orchestration |

### Underlying Pattern:
Users are pushing NanoBot toward **enterprise/production readiness** (multi-tenancy, observability, real-time control) while struggling with **configuration complexity** and **deployment friction**.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| 🔴 **High** | [#2141](https://github.com/HKUDS/nanobot/issues/2141) | Voice transcription broken in v0.1.4.post5 — "summarize skill isn't installed" regression | No fix PR yet |
| 🔴 **High** | [#2185](https://github.com/HKUDS/nanobot/issues/2185) | Gemini-3-flash-preview broken after 0.1.4→0.1.4post5 upgrade | No fix PR yet |
| 🟡 **Medium** | [#2134](https://github.com/HKUDS/nanobot/issues/2134) | Feishu messages received but no response (MiniMax model) | No fix PR yet |
| 🟡 **Medium** | [#1948](https://github.com/HKUDS/nanobot/issues/1948) | `/tmp` read-only in exec tool for npx/npm commands | No fix PR yet |
| 🟡 **Medium** | [#2142](https://github.com/HKUDS/nanobot/issues/2142) | WeCom WebSocket connection failures | Closed, monitoring |
| 🟢 **Low** | [#608](https://github.com/HKUDS/nanobot/issues/608) | Version string mismatch | No fix PR yet |

**Stability Assessment**: Two confirmed regressions in latest post-release suggest insufficient test coverage for provider/skill interactions. The voice transcription breakage particularly impacts Telegram/WhatsApp users.

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (PRs exist or high demand):

| Feature | Evidence | Prediction |
|---|---|---|
| **Runtime model switching** | [#2179](https://github.com/HKUDS/nanobot/pull/2179) — `/model` and `/models` commands | 85% — PR ready, high utility |
| **Long-term memory** | [#2183](https://github.com/HKUDS/nanobot/pull/2183) — Honcho integration | 75% — addresses roadmap item #39 |
| **TUI terminal interface** | [#2155](https://github.com/HKUDS/nanobot/pull/2155) | 70% — complete PR, local-first user demand |
| **WeCom App enterprise support** | [#2173](https://github.com/HKUDS/nanobot/pull/2173) | 80% — Chinese enterprise priority |

### Medium-Term Signals:

| Feature | Evidence | User Driver |
|---|---|---|
| **Multi-tenant data isolation** | [#2102](https://github.com/HKUDS/nanobot/issues/2102) | SaaS deployment needs |
| **LLM trace/observability** | [#2154](https://github.com/HKUDS/nanobot/issues/2154), [#2158](https://github.com/HKUDS/nanobot/issues/2158) | Production debugging |
| **Secret management** (1Password, env files) | [#2172](https://github.com/HKUDS/nanobot/issues/2172) | Security compliance |
| **Hooks/lifecycle events** | [#2182](https://github.com/HKUDS/nanobot/issues/2182) | Claude Code parity |
| **Config migration tooling** | [#2163](https://github.com/HKUDS/nanobot/issues/2163) — PR [#2171](https://github.com/HKUDS/nanobot/pull/2171) exists | Upgrade friction |

---

## 7. User Feedback Summary

### Pain Points:

| Category | Specific Feedback | Source |
|---|---|---|
| **Configuration complexity** | "Configuring nanobot used to require manually editing `~/.nanobot/config.json`" — onboarding wizard needed | [#2018](https://github.com/HKUDS/nanobot/issues/2018) |
| **Session management** | No clean way to reset/rotate sessions; manual file deletion required | [#2062](https://github.com/HKUDS/nanobot/issues/2062) |
| **Network isolation** | LiteLLM and tiktoken require external internet on first start | [#2145](https://github.com/HKUDS/nanobot/issues/2145) |
| **Upgrade fragility** | Multiple reports of post5 breaking existing setups | [#2141](https://github.com/HKUDS/nanobot/issues/2141), [#2185](https://github.com/HKUDS/nanobot/issues/2185) |
| **Documentation gaps** | WeCom setup unclear, "How to run locally" unanswered | [#1988](https://github.com/HKUDS/nanobot/issues/1988), [#134](https://github.com/HKUDS/nanobot/issues/134) |

### Positive Signals:
- Resource efficiency praised vs. OpenClaw ("resource consumption is very small")
- Active community skill-building (WhatsApp boot notifications, Fish Audio TTS)
- Strong Chinese market adoption (Feishu, WeCom, MiniMax, Xiaomi MiMo)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention:

| Issue | Age | Risk |
|---|---|---|
| [#134](https://github.com/HKUDS/nanobot/issues/134) — "How to run locally" | 42 days | Onboarding barrier for cost-conscious users |
| [#660](https://github.com/HKUDS/nanobot/issues/660) — Node.js bloat contradiction | 32 days, 4 👍 | Brand integrity, Docker image size |
| [#126](https://github.com/HKUDS/nanobot/pull/126) — GitHub Actions for Docker builds | 41 days | Release automation, community contribution ready |
| [#1746](https://github.com/HKUDS/nanobot/pull/1746) — Groq Whisper configuration | 10 days | Provider flexibility |
| [#1793](https://github.com/HKUDS/nanobot/pull/1793) — Telegram HTTP(S) media URLs | 9 days | Channel stability |

### Maintainer Action Recommended:
- **Immediate**: Address v0.1.4.post5 regressions (#2141, #2185) — consider hotfix release
- **Short-term**: Merge or close long-running PRs (#126, #1746, #1793) to reduce queue pressure
- **Strategic**: Respond to positioning concerns in #660; consider Node.js removal roadmap

---

*Digest generated from HKUDS/nanobot GitHub activity 2026-03-17 to 2026-03-18.*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-18

## 1. Today's Overview

ZeroClaw shows **extremely high development velocity** with 50 PRs and 38 issues updated in 24 hours, alongside 10 new releases (v0.4.3 through v0.5.0-beta.346). The project is actively iterating on its v0.5.0 beta series with focus on **operational reliability** (self-test, update commands, Docker improvements) and **channel expansion** (Reddit, Bluesky, webhooks). However, **community tension is evident** around security restrictions being too aggressive (#1478 with 40 comments) and ARM64 stability issues (#3537, #3714). The maintainer team (primarily `@theonlyhennygod`) is highly responsive with same-day PR merges, suggesting healthy project governance despite user friction.

---

## 2. Releases

| Version | Key Changes | Status |
|---------|-------------|--------|
| **v0.5.0-beta.346** | CLI self-test (`--quick`/`--full` modes), `status --format=exit-code` for Docker healthchecks, 6-phase update pipeline with rollback | Latest beta |
| **v0.5.0-beta.341-345** | Reddit/Bluesky/webhook channel adapters, WS session persistence, knowledge graph for expertise capture, LinkedIn/WhatsApp voice/Anthropic multi-support | Stabilizing |
| **v0.4.3** | Two-tier response cache, X/Twitter & Mochat channels, STT proper noun recognition, adaptive heartbeat metrics | Stable release |
| **v0.4.3-beta.314-323** | Multi-provider STT, Google Workspace tools, Anthropic OAuth fixes | Deprecated |

**Breaking Changes:** None explicitly noted, but v0.5.0-beta introduces new required CLI patterns.

**Migration Notes:** Users on v0.4.3 seeking new channels should upgrade to v0.5.0-beta series; Docker users should pull `latest` to resolve dummy binary issue (#3687).

---

## 3. Project Progress

### Merged/Closed PRs Today (29 total, highlights)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#3828](https://github.com/zeroclaw-labs/zeroclaw/pull/3828) | @theonlyhennygod | Social links update (Discord, TikTok, RedNote badges) across 31 locales | Community |
| [#3827](https://github.com/zeroclaw-labs/zeroclaw/pull/3827) | @theonlyhennygod | **WASM plugin system with Extism runtime** — `PluginHost`, `WasmTool`/`WasmChannel` bridges, REST API | **Major extensibility** |
| [#3822](https://github.com/zeroclaw-labs/zeroclaw/pull/3822) | @theonlyhennygod | Pairing dashboard with device registry, token rotation, WebSocket handshake extensions | Security UX |
| [#3821](https://github.com/zeroclaw-labs/zeroclaw/pull/3821) | @theonlyhennygod | **Self-test & update commands** — 8 offline + 3 network checks, 6-phase update with rollback | **Operational maturity** |
| [#3820](https://github.com/zeroclaw-labs/zeroclaw/pull/3820) | @theonlyhennygod | Docker web-builder stage, healthcheck probe, resource limits (512M/32M) | Deployment |
| [#3814](https://github.com/zeroclaw-labs/zeroclaw/pull/3814) | @theonlyhennygod | Fix Debian Docker image builds using pre-built binaries (QEMU timeout fix) | CI reliability |
| [#3639](https://github.com/zeroclaw-labs/zeroclaw/pull/3639) | @SimianAstronaut7 | Docker/Podman stop/restart documentation | Docs |

**Features Advanced:** WASM plugin architecture, enterprise device management, zero-downtime updates, and production-hardened Docker deployments.

---

## 4. Community Hot Topics

| Issue/PR | Comments | 🔥 Analysis |
|----------|----------|-------------|
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) **"[Feature]: 除了安全,什么功能也没有"** (Security too restrictive) | **40** | **Core tension**: User wants "unsafe mode" for personal use; 5 👍 suggests broader demand. Underlying need: **granular security toggles** vs. binary safe/unsafe. |
| [#3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) **ARM64 daemon crashes silently** | 7 | Raspberry Pi 4 regression since v0.2.1-beta.186. **S0 severity** — data loss risk. No linked fix PR yet. |
| [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) **Matrix channel flag missing in builds** | 5 | Build configuration gap; resolved by #3821's build system improvements? |
| [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) **Aliyun Bailian coding plan support** | 5 | China-specific LLM provider integration request. |
| [#3580](https://github.com/zeroclaw-labs/zeroclaw/issues/3580) **Web dashboard not available** | 4 | Documentation/UX gap — fixed by #3820's web-builder stage. |

**Underlying Needs:** 
- **Power user autonomy** (#1478, #3755 sibling skill references)
- **ARM64/embedded reliability** (#3537, #3714, #3768 Alpine/musl)
- **Non-Western provider support** (#3059, #3786 Codex/GPT-5.4 failures)

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) ARM64 daemon silent crash | **S0** | Open | None linked |
| [#3687](https://github.com/zeroclaw-labs/zeroclaw/issues/3687) Docker image ships 292KB dummy binary | S1 | **Closed** | #3814, #3820 |
| [#3714](https://github.com/zeroclaw-labs/zeroclaw/issues/3714) Docker exits immediately ARM64 (DGX Spark) | S1 | **Closed** | #3814 |
| [#3783](https://github.com/zeroclaw-labs/zeroclaw/issues/3783) GLIBC 2.39 mismatch in Dockerfile.debian | S1 | **Closed** | #3814 |
| [#3782](https://github.com/zeroclaw-labs/zeroclaw/issues/3782) MCP tools unavailable in daemon/api.chat | S1 | **Closed** | #3775 |
| [#3826](https://github.com/zeroclaw-labs/zeroclaw/issues/3826) Deferred MCP tools never activated (Telegram) | S1 | Open | None |
| [#3798](https://github.com/zeroclaw-labs/zeroclaw/issues/3798) Self-correction vicious circle | S1 | Open | None |
| [#3786](https://github.com/zeroclaw-labs/zeroclaw/issues/3786) All providers fail on Codex/GPT-5.4 | S1 | Open | [#3811](https://github.com/zeroclaw-labs/zeroclaw/pull/3811) (streaming fallback) |
| [#3802](https://github.com/zeroclaw-labs/zeroclaw/issues/3802) Image transfer fails from Telegram (llamacpp vision) | S2 | Open | None |
| [#3768](https://github.com/zeroclaw-labs/zeroclaw/issues/3768) install.sh fails on Alpine (gnu vs musl) | S3 | **Closed** | None — requests arm64 musl builds |

**Regression Pattern:** ARM64/Docker stability was severely broken (dummy binary, GLIBC mismatches) but **rapidly fixed** within 24 hours. MCP tool discovery in daemon mode remains flaky.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in v0.5.x |
|-------|---------|----------------------|
| [#3825](https://github.com/zeroclaw-labs/zeroclaw/issues/3825) Autonomous skill creation from successful tasks | High — aligns with knowledge graph work | **Strong** |
| [#3818](https://github.com/zeroclaw-labs/zeroclaw/issues/3818) Restore legacy security/Copilot/task_plan from `main` | High — regression from branch migration | **Strong** |
| [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) Cross-channel TOTP for critical commands | Medium — security enhancement | Moderate |
| [#3817](https://github.com/zeroclaw-labs/zeroclaw/issues/3817) Cron job channel inheritance | Low — UX polish | Moderate |
| [#3589](https://github.com/zeroclaw-labs/zeroclaw/pull/3589) Mastodon/ntfy/Gotify channels | In PR | **v0.5.0** |
| [#3588](https://github.com/zeroclaw-labs/zeroclaw/pull/3588) Rate limiting, circuit breaker, backpressure | In PR | **v0.5.0** |
| [#3585](https://github.com/zeroclaw-labs/zeroclaw/pull/3585) Information flow taint tracking | In PR | **v0.6.0** (security hardening) |
| [#3590](https://github.com/zeroclaw-labs/zeroclaw/pull/3590) Conversational AI agent builder | In PR | **v0.5.0** |
| [#3607](https://github.com/zeroclaw-labs/zeroclaw/pull/3607) Voice-loop hands-free mode | In PR | **v0.5.0** |

**Predicted v0.5.0 GA:** WASM plugins, conversational agent builder, voice-loop, resilience primitives, expanded channel matrix (Mastodon/ntfy/Gotify).

---

## 7. User Feedback Summary

### 😤 Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Security overreach** | #1478 (40 comments): "只能当个聊天机器人" — bot refuses all actions despite "full" permissions | Critical perception |
| **ARM64 brokenness** | #3537, #3714, #3768 — Raspberry Pi, DGX Spark, Alpine all failing | High |
| **MCP tool discovery** | #3782, #3826, #3775 — tools work in `channel start` but not `daemon` | High |
| **Branch migration chaos** | #3818, #3679 — features lost from `main`→`master` | Medium |
| **Provider fragility** | #3786, #3802 — Codex streaming, llamacpp vision | Medium |

### ✅ Satisfaction Drivers
- **Rapid maintainer response** — same-day fixes for Docker issues
- **Channel diversity** — Reddit, Bluesky, WhatsApp voice showing user-centric prioritization
- **Operational features** — self-test, update commands signal production readiness

### Use Cases Emerging
- **Personal automation** (frustrated by security limits)
- **Embedded/edge deployment** (ARM64 demand)
- **Enterprise Teams/Outlook monitoring** (#3611 in PR)
- **Chinese market** (Aliyun Bailian, RedNote badge)

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs |
|----------|-----|------|-------|
| [#3571](https://github.com/zeroclaw-labs/zeroclaw/pull/3571) `config reload` hot-reloading | 3 days | Medium | Review — infrastructure for production |
| [#3180](https://github.com/zeroclaw-labs/zeroclaw/pull/3180) Docker buildx-action bump | 7 days | Low | CI maintenance |
| [#2879](https://github.com/zeroclaw-labs/zeroclaw/issues/2879) Pairing modal ignores `require_pairing=false` | 12 days | Medium | Frontend fix |
| [#2765](https://github.com/zeroclaw-labs/zeroclaw/issues/2765) Multi-workspace routing proposal | 14 days | High | Architecture review — enterprise blocker? |

**Maintainer Attention Needed:** 
- **#3537** (ARM64 S0 crash) — no linked PR, highest technical risk
- **#3825** (autonomous skills) — high-value feature, zero comments
- **Open PRs from @rareba** (#3585-#3613) — 6 substantial features awaiting review, may indicate reviewer bandwidth constraint

---

*Digest generated from 50 PRs, 38 issues, 10 releases on 2026-03-18. Project health: **High velocity, reactive stability, tension between security and user autonomy**.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-18

---

## 1. Today's Overview

PicoClaw shows **high development velocity** with 84 PRs and 19 issues updated in the last 24 hours, indicating an active pre-release stabilization period for v0.2.3. The project released v0.2.3 alongside a nightly build, suggesting the maintainers are pushing toward production readiness while maintaining rapid iteration. The 41 merged/closed PRs versus 43 open indicates healthy throughput, though the slight backlog suggests ongoing feature integration pressure. Critical stability issues are emerging around **subagent tooling**, **provider compatibility**, and **gateway API availability** — all blocking user workflows. The community is actively stress-testing multi-agent orchestration and cross-platform deployments, particularly on resource-constrained devices.

---

## 2. Releases

### [v0.2.3](https://github.com/sipeed/picoclaw/releases/tag/v0.2.3)
| Aspect | Details |
|--------|---------|
| **Key Changes** | Cross-platform system tray UI (#1649), Darwin tray stub cleanup (#1694), GLM nil-input fix (#1663) |
| **Breaking Changes** | None documented |
| **Migration Notes** | Users on macOS should verify tray behavior; Linux/Windows gain full systray support |

### [nightly-20260317](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)
| Aspect | Details |
|--------|---------|
| **Status** | Automated build from `79b0568d` — **unstable, use with caution** |
| **Purpose** | Pre-release testing for post-v0.2.3 fixes |

---

## 3. Project Progress

### Merged/Closed PRs (41 total — selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#1702](https://github.com/sipeed/picoclaw/pull/1702) | Fix round-robin model selection to start from first match | **Correctness**: Fixes load balancing regression where first model entry was skipped |
| [#1479](https://github.com/sipeed/picoclaw/pull/1479) | Surface Claude CLI stdout on non-zero exit | **Debugging**: Restores visibility into Claude CLI failures |
| [#1640](https://github.com/sipeed/picoclaw/pull/1640) | Fix file logger field appending | **Reliability**: One-line fix for missing structured log fields |
| [#1710](https://github.com/sipeed/picoclaw/pull/1710) | Update cron tests for new `OutboundChan()` API | **Maintenance**: Test suite alignment with bus refactor |
| [#1490](https://github.com/sipeed/picoclaw/pull/1490) | Agent context boundary detection & safe compression | **Performance**: Addresses token budgeting and compression triggers (#1439 track 6) |
| [#1179](https://github.com/sipeed/picoclaw/pull/1179) | Graceful MessageBus shutdown with generics | **Stability**: Eliminates race condition on message loss during shutdown |
| [#1313](https://github.com/sipeed/picoclaw/pull/1313) | Event-driven cron scheduler refactor | **Efficiency**: Replaces polling with dynamic timers, adds unit tests |

**Themes**: Reliability fixes for logging and model routing; architectural improvements to agent context management and message bus stability.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#1498](https://github.com/sipeed/picoclaw/issues/1498) — Model-side search & fastembed | 8 | **RAG infrastructure gap**: Users want native embedding + search without external stack. Signals shift toward knowledge-heavy agent workflows. |
| 2 | [#1615](https://github.com/sipeed/picoclaw/issues/1615) — Include sender in dynamic context | 5 | **Multi-tenant agent awareness**: Closed as completed. Group chat bots need identity context for personalized responses. |
| 3 | [#1652](https://github.com/sipeed/picoclaw/issues/1652) — GLM Coding Plan unsupported | 5 | **Provider fragmentation**: GLM's billing model incompatible with PicoClaw's assumptions. Blocks enterprise China users. |

### Emerging High-Value Threads

| Item | Signal |
|:---|:---|
| [#1648](https://github.com/sipeed/picoclaw/issues/1648) — TTS/ASR architecture design | Voice interaction becoming first-class; 3 comments on detailed RFC |
| [#1475](https://github.com/sipeed/picoclaw/issues/1475) — Structured event streaming for orchestration | Gateway/observability needs for production deployments |
| [#1712](https://github.com/sipeed/picoclaw/pull/1712) — TPCP adapter for cross-device agents | Closes #294; distributed multi-agent coordination |

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1713](https://github.com/sipeed/picoclaw/issues/1713) | Subagents spawned via `spawn` tool receive **no tools** — API request missing `tools` field entirely | **PR [#1711](https://github.com/sipeed/picoclaw/pull/1711) open** — root cause identified (`ToolRegistry` never set) |
| 🔴 **Critical** | [#1708](https://github.com/sipeed/picoclaw/issues/1708) | Gateway REST API endpoints (`/chat`, `/a2a`) **unavailable** in v0.2.3 Docker — only health checks work | **No fix yet** — blocks API-based integrations |
| 🔴 **Critical** | [#1704](https://github.com/sipeed/picoclaw/issues/1704) | `picoclaw-launcher-tui` prevents gateway/talk startup on Android Termux | **No fix yet** — ARM64/Linux deployment blocker |
| 🟡 **High** | [#1658](https://github.com/sipeed/picoclaw/issues/1658) | Claude API rejects empty `use.name` string in tool calls | **No fix yet** — makes Claude provider "basically unusable" per reporter |
| 🟡 **High** | [#1678](https://github.com/sipeed/picoclaw/issues/1678) | Async spawn sends raw `openrouter/...` slugs causing 400 errors | **No fix yet** — subagent + OpenRouter combo broken |
| 🟡 **High** | [#1653](https://github.com/sipeed/picoclaw/issues/1653) | Intermittent OpenRouter 'connection reset by peer' on small Linux boards | **No fix yet** — reliability concern for edge deployments |
| 🟢 **Medium** | [#1297](https://github.com/sipeed/picoclaw/issues/1297) | Light model routing doesn't match `model_list` entries correctly | **No fix yet** — routing logic bug |

**Assessment**: v0.2.3 has **three critical regressions** affecting core functionality (subagents, gateway API, launcher). The subagent tool regression has an active fix PR; gateway and launcher issues need immediate maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Native TTS/ASR** | [#1648](https://github.com/sipeed/picoclaw/issues/1648) | High | Detailed RFC with architecture; aligns with voice AI trend |
| **MQTT channel support** | [#1706](https://github.com/sipeed/picoclaw/pull/1706) | High | PR open with health check & reconnection logic |
| **Multi-API-key failover** | [#1707](https://github.com/sipeed/picoclaw/pull/1707) | High | Production resilience feature; PR ready |
| **Structured agent events** | [#1475](https://github.com/sipeed/picoclaw/issues/1475) | Medium | Needed for orchestration; no PR yet |
| **Model-side search/fastembed** | [#1498](https://github.com/sipeed/picoclaw/issues/1498) | Medium | High engagement but complex; may require external dependency |
| **IP whitelist for SSRF** | [#1667](https://github.com/sipeed/picoclaw/issues/1667) | Medium | Security flexibility; closed but referenced |
| **Telegram streaming** | [#1098](https://github.com/sipeed/picoclaw/issues/1098) | Low-Medium | Platform API now supports it; implementation pending |
| **Feishu ARMv7 support** | [#1675](https://github.com/sipeed/picoclaw/issues/1675) | Low | Niche hardware; openclaw has it, PicoClaw doesn't |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Subagent reliability** | [#1713](https://github.com/sipeed/picoclaw/issues/1713), [#1678](https://github.com/sipeed/picoclaw/issues/1678), [#1539](https://github.com/sipeed/picoclaw/issues/1539) | Critical |
| **Gateway/API stability** | [#1708](https://github.com/sipeed/picoclaw/issues/1708) | Critical |
| **Provider compatibility gaps** | [#1652](https://github.com/sipeed/picoclaw/issues/1652) (GLM), [#1658](https://github.com/sipeed/picoclaw/issues/1658) (Claude), [#1653](https://github.com/sipeed/picoclaw/issues/1653) (OpenRouter) | High |
| **Mobile/edge deployment** | [#1704](https://github.com/sipeed/picoclaw/issues/1704) (Android Termux), [#1675](https://github.com/sipeed/picoclaw/issues/1675) (ARMv7) | High |
| **Observability** | [#1475](https://github.com/sipeed/picoclaw/issues/1475) — need event streams for production | Medium |

### Positive Signals

- **Multi-agent coordination** actively used: TPCP adapter PR (#1712) addresses real distributed deployment needs
- **Voice interaction** demand confirmed: TTS/ASR RFC (#1648) well-received
- **Configuration resilience**: Multiple PRs for failover, cooldown granularity, API key rotation

### Satisfaction/Dissatisfaction

| Aspect | Status |
|:---|:---|
| Core text chat | ✅ Stable |
| Subagent/multi-agent | ❌ Regressed in v0.2.3 |
| Gateway/API server | ❌ Broken in v0.2.3 Docker |
| Provider diversity | ⚠️ Fragmented — OpenAI-compat best supported |
| Edge/mobile deployment | ⚠️ Fragile — Termux/ARM issues |

---

## 8. Backlog Watch

### Issues Needing Maintainer Response (>7 days, high impact)

| Issue | Age | Problem | Risk |
|:---|:---:|:---|:---|
| [#1098](https://github.com/sipeed/picoclaw/issues/1098) Telegram streaming | 14 days | Platform feature parity; Telegram announced native support | Competitor advantage |
| [#1297](https://github.com/sipeed/picoclaw/issues/1297) Light model routing | 8 days | Incorrect model selection logic | Silent failures, wrong costs |

### PRs Stalled Pending Review

| PR | Age | Blocker |
|:---|:---:|:---|
| [#1510](https://github.com/sipeed/picoclaw/pull/1510) Matrix whitespace rendering | 5 days | Needs review — affects FluffyChat users |
| [#1460](https://github.com/sipeed/picoclaw/pull/1460) OpenAI strict mode tool serialization | 5 days | Provider compatibility fix |
| [#1622](https://github.com/sipeed/picoclaw/pull/1622) Markdown in web_fetch | 3 days | UX improvement for link context |

### Action Recommended

1. **Immediate**: Triage [#1708](https://github.com/sipeed/picoclaw/issues/1708) (gateway API) and [#1704](https://github.com/sipeed/picoclaw/issues/1704) (launcher) — both block v0.2.3 adoption
2. **This week**: Merge [#1711](https://github.com/sipeed/picoclaw/pull/1711) (subagent tools fix) and validate [#1712](https://github.com/sipeed/picoclaw/pull/1712) (TPCP adapter)
3. **Sprint**: Respond to [#1648](https://github.com/sipeed/picoclaw/issues/1648) TTS/ASR RFC with roadmap commitment

---

*Digest generated from 84 PRs and 19 issues updated 2026-03-17 to 2026-03-18.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-18

---

## 1. Today's Overview

NanoClaw shows **exceptionally high community velocity** with 78 total updates in 24 hours (28 issues, 50 PRs), though only 13 PRs merged/closed suggests a backlog building. The project is experiencing a **feature proposal surge**: 14 structured enhancement issues were filed in a single day by one contributor (@butterandcode), indicating active ecosystem research and competitive analysis against rivals (EasyClaw, NullClaw, IronClaw, ZeptoClaw, Moltis). However, **no new releases** and a growing open PR count (37) signal potential maintainer bandwidth constraints. Security and multi-provider flexibility dominate user concerns, while Apple Container networking and outdated SDK pinning represent immediate stability risks.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs Today (4 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#1204](https://github.com/qwibitai/nanoclaw/pull/1204) | Orphan container cleanup now scoped by `INSTANCE_ID` | **Multi-instance safety** — prevents one NanoClaw instance from stopping another's containers |
| [#1201](https://github.com/qwibitai/nanoclaw/pull/1201) | Sunsama task management integration | **Productivity workflow** — replaces tasks.md with full CRUD via MCP tools |
| [#1199](https://github.com/qwibitai/nanoclaw/pull/1199) | Opt-in db-explorer port exposure via `containerConfig` | **Reliability fix** — resolves port 4000 bind conflicts for multi-group setups |
| [#1035](https://github.com/qwibitai/nanoclaw/pull/1035) | WebFetch/WebSearch output sanitization via `PostToolUse` hook | **Security hardening** — prompt injection mitigation on external content |

### Notable Open PRs Advancing

| PR | Description | Status |
|:---|:---|:---|
| [#1205](https://github.com/qwibitai/nanoclaw/pull/1205) | Runtime `/model` command for per-group model switching | Ready for review — addresses #80's core need without full multi-provider refactor |
| [#1202](https://github.com/qwibitai/nanoclaw/pull/1202) | Agent trace observability with web UI (port 3001) | New — structured logging + local dashboard |
| [#1203](https://github.com/qwibitai/nanoclaw/pull/1203) | Honor `ANTHROPIC_BASE_URL` path for third-party endpoints | Fixes compatibility with proxied/self-hosted APIs |
| [#1158](https://github.com/qwibitai/nanoclaw/pull/1158) | Fix silent message loss when turn ends with tool call | **Critical UX fix** — prevents replies from disappearing |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Activity | Analysis |
|:---|:---|:---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) — Multi-provider support | **25 comments, 47 👍** | **Existential risk mitigation**: Users fear Anthropic account bans for "OpenClaw" usage. Demand for OpenCode, Codex, Gemini alternatives is urgent but technically complex. PR #1205 offers partial relief via runtime model switching; full abstraction needs architectural decision. |
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) — Container security trust model | 4 comments, closed | **Architectural debate**: Contributor argues containers alone provide false security; scripts shouldn't live at agent level. Closed without clear resolution — tension between "minimalist" ethos and enterprise security needs. |
| [#1143](https://github.com/qwibitai/nanoclaw/issues/1143) — Stale docs referencing `/data/env` | 2 comments | **Documentation debt**: Breaking change (path removal) not reflected in skill docs. Indicates need for automated doc validation. |

### Underlying Needs
- **Provider independence**: Vendor lock-in anxiety is the #1 community concern
- **Security beyond containers**: Users want defense-in-depth (prompt injection, SSRF, secret scanning)
- **Operational maturity**: Config drift, stale docs, and networking edge cases (Apple Container) hinder production adoption

---

## 5. Bugs & Stability

| Severity | Issue | Details | Fix Status |
|:---|:---|:---|:---|
| **🔴 High** | [#1142](https://github.com/qwibitai/nanoclaw/issues/1142) — Agent SDK pinned to v0.2.34 | Containers default to outdated Claude 3.5 Sonnet; affects forks | **No PR** — requires dependency bump |
| **🔴 High** | [#1103](https://github.com/qwibitai/nanoclaw/issues/1103) — Apple Container networking broken | `host.docker.internal` fails on Apple Container's `bridge100` interface; credential proxy unreachable | **No PR** — platform-specific networking fix needed |
| **🔴 High** | [#889](https://github.com/qwibitai/nanoclaw/issues/889) — Unicode surrogates corrupt JSONL transcripts | Lone surrogates in Bash output → HTTP 400 on next API call | **No PR** — needs input sanitization |
| **🟡 Medium** | [#1143](https://github.com/qwibitai/nanoclaw/issues/1143) — Stale `/data/env` references | Documentation bug blocking skill configuration | **No PR** — docs fix needed |

**Risk Assessment**: Three high-severity bugs without PRs, two affecting core functionality (model defaults, networking). The Apple Container issue (#1103) is particularly concerning as it blocks macOS-native container users entirely.

---

## 6. Feature Requests & Roadmap Signals

### Single-Day Proposal Burst (14 issues by @butterandcode)

| Theme | Proposals | Likelihood in Next Release |
|:---|:---|:---|
| **Security hardening** | Encryption at rest (#1176), per-session tokens (#1177), SSRF protection (#1170), destructive command guards (#1166), secret scanning (#1165), prompt injection detection (#1164) | **High** — aligns with #865 criticism; low implementation cost for some |
| **Observability** | Token budgets (#1169), structured audit logs (#1174), trace UI (#1202 in PR) | **Medium-High** — #1202 already in PR; others are additive |
| **Reliability** | SQLite message queue (#1172), API retry/backoff (#1168), circuit breakers (#1167) | **Medium** — complexity vs. "minimalist" ethos tension |
| **Multi-agent** | `@AgentName` routing (#1175) | **Medium** — depends on core architecture decisions |
| **Developer experience** | Natural language rules (#1179), `SKILL.md` auto-discovery (#1178), community registry (#1181) | **Medium** — #1178/#1181 fit minimalist philosophy well |

### User-Requested Integrations
- [#1183](https://github.com/qwibitai/nanoclaw/issues/1183): WhatsApp personal assistant
- [#876](https://github.com/qwibitai/nanoclaw/issues/876): Slack integration

**Prediction**: Security features (#1164-#1177) and observability (#1174, #1202) are most likely to land — they address production blockers without architectural churn. Multi-provider support (#80) needs maintainer commitment to abstraction layer design.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Quote / Evidence | Severity |
|:---|:---|:---|
| **Anthropic vendor lock-in risk** | "Anthropic is already shutting down peoples' subs for using them with OpenClaw" (#80) | Critical — existential for user base |
| **Apple Container broken** | Containers fail with `ENOTFOUND` on macOS native (#1103) | High — platform exclusion |
| **Silent message loss** | "Agent's reply silently disappears" (#1158) | High — trust erosion |
| **K8s deployment friction** | "Challenges deploying nanoclaw in restricted K8s environments" (#1184) | Medium — enterprise adoption blocker |
| **Security theater** | "Using containers alone doesn't make you more secure" (#865) | Medium — architectural credibility |

### Positive Signals
- Appreciation for "minimalist approach" and "lightweight, secure alternative to bloated agent frameworks" (#1184)
- Active skill contribution ecosystem (CLI send, memory, security audit, "soul" personality files)

### Satisfaction/Dissatisfaction Ratio
**Mixed-positive on philosophy, negative on production readiness.** Users love the vision but hit friction on security depth, platform coverage, and operational rough edges.

---

## 8. Backlog Watch

### Long-Unanswered Critical Items

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) Multi-provider support | ~6 weeks, 47 👍 | **Highest** — user exodus risk if bans spread | Maintainer decision on abstraction architecture |
| [#650](https://github.com/qwibitai/nanoclaw/pull/650) Container-based `claude login` | 2+ weeks | High — auth flow is friction point | Review/merge for better UX |
| [#565](https://github.com/qwibitai/nanoclaw/pull/565) PID lockfile guard | 2+ weeks | Medium — data corruption risk | Simple reliability win |
| [#586](https://github.com/qwibitai/nanoclaw/pull/586) Cross-group messaging | 2+ weeks | Medium — multi-agent orchestration | Feature decision needed |

### Security Disclosure Pending
- [#1149](https://github.com/qwibitai/nanoclaw/issues/1149): Private security finding awaiting maintainer contact — **requires immediate attention**

---

## Health Indicators

| Metric | Status | Note |
|:---|:---|:---|
| Community velocity | 🟢 Strong | 78 updates/day, active proposal generation |
| Maintainer responsiveness | 🟡 Concerning | 37 open PRs, 3 high-severity bugs unaddressed |
| Release cadence | 🔴 Stalled | No releases; SDK pinning causing user impact |
| Security posture | 🟡 Improving | Active proposals, but disclosure channel untested |
| Documentation | 🔴 Drift | Stale paths, breaking changes undocumented |

**Recommendation**: NanoClaw needs a focused maintenance sprint on high-severity bugs (#1142, #1103, #889) and security disclosure process before feature expansion. The proposal burst from @butterandcode offers a ready-made roadmap for v-next if maintainers can prioritize.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-03-18

## 1. Today's Overview

NullClaw demonstrates **high development velocity** with 22 PRs updated in 24 hours (17 merged/closed, 5 open) and 7 issues processed (5 closed, 2 active). The project shows strong **security-focused momentum** with multiple hardening PRs from core contributor @manelsen addressing encryption, key rotation, and transport security. Matrix integration received critical fixes for long-standing reliability issues. No new releases were cut, suggesting the team is accumulating changes for a significant version bump. The 77% PR merge rate and rapid issue turnover indicate healthy maintainer responsiveness.

---

## 2. Releases

**No new releases** — Version remains unchanged. The high volume of security and feature PRs suggests a release may be pending.

---

## 3. Project Progress

### Merged/Closed PRs Today (17 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#610](https://github.com/nullclaw/nullclaw/pull/610) | @manelsen | **Matrix reliability overhaul**: auto-join invites, DM/group policy detection, mention filtering, sync backlog dropping | Fixes critical Matrix usability issues reported in [#606](https://github.com/nullclaw/nullclaw/issues/606) |
| [#608](https://github.com/nullclaw/nullclaw/pull/608) | @brunojuliao | **Provider resilience**: CurlWaitError fallback to non-streaming for Anthropic/Gemini/Vertex | Eliminates provider-specific streaming failures |
| [#604](https://github.com/nullclaw/nullclaw/pull/604) | @DonPrus | **External channel plugin system**: hardened stdio JSON-RPC channel host with namespace validation | Enables third-party channel extensions securely |
| [#600](https://github.com/nullclaw/nullclaw/pull/600) | @DonPrus | **Observability infrastructure**: OTLP support, runtime observers, authenticated export | Production monitoring readiness |
| [#605](https://github.com/nullclaw/nullclaw/pull/605) | @manelsen | **OpenRC service support**: Alpine Linux compatibility, runtime service-manager detection | Resolves [#601](https://github.com/nullclaw/nullclaw/issues/601) |
| [#455](https://github.com/nullclaw/nullclaw/pull/455) | @danielndhlovu | OpenClaw trader daemon addition | Trading infrastructure expansion |
| [#451](https://github.com/nullclaw/nullclaw/pull/451) | @sanderdewijs | **Native email channel**: IMAP IDLE, polling fallback, PII redaction, attachment handling | Major new channel capability |
| [#265](https://github.com/nullclaw/nullclaw/pull/265) | @manelsen | **WhatsApp Web bridge**: whatsmeow-based sidecar channel | WhatsApp integration without core bloat |
| [#297](https://github.com/nullclaw/nullclaw/pull/297) | @manelsen | **Session isolation**: claim-gated per-peer auto-provision with isolated runtimes | Multi-tenant security architecture |
| [#294](https://github.com/nullclaw/nullclaw/pull/294) | @manelsen | **Interaction core refactor**: Telegram rules → shared `src/interactions/` | Cross-platform interaction foundation |
| [#282](https://github.com/nullclaw/nullclaw/pull/282) | @manelsen | WhatsApp Web bridge reference implementation | Companion to #265 |
| [#275](https://github.com/nullclaw/nullclaw/pull/275) | @DNature | **Per-agent workspace isolation**: namespaced memory and identity files | Multi-agent deployment support |
| [#534](https://github.com/nullclaw/nullclaw/pull/534) | @manelsen | **YOLO autonomy blocking**: non-loopback gateway restriction | Security hardening |
| [#533](https://github.com/nullclaw/nullclaw/pull/533) | @manelsen | **HTTPS enforcement**: remote web_fetch schema tightening | Transport security |
| [#532](https://github.com/nullclaw/nullclaw/pull/532) | @manelsen | **Browser tool hardening**: URL validation, curl injection prevention | Tool security |
| [#537](https://github.com/nullclaw/nullclaw/pull/537) | @manelsen | **Mandatory secrets encryption**: `secrets.encrypt=true` enforcement | Configuration security |
| [#583](https://github.com/nullclaw/nullclaw/issues/583) closed | — | MiniClaw comparison question resolved | Community clarification |

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#117](https://github.com/nullclaw/nullclaw/issues/117) — "Add a custom provider" | **11 comments**, open since Feb 25 | **Core documentation gap**: Users struggle to add Claude to "transfer station" (model routing). Indicates provider extension docs are insufficient despite modular architecture. |
| [#583](https://github.com/nullclaw/nullclaw/issues/583) — MiniClaw comparison | 2 comments, closed | Competitive positioning question; resolved by pointing to [memovai/mimiclaw](https://github.com/memovai/mimiclaw). Suggests ecosystem fragmentation concerns. |
| [#606](https://github.com/nullclaw/nullclaw/issues/606) — Matrix issues | 2 comments, closed with fix | **Critical reliability** — 4 distinct failure modes (invite handling, mention detection, room type detection, sync flooding). Rapid fix in [#610](https://github.com/nullclaw/nullclaw/pull/610) shows responsive triage. |

### Underlying Needs
- **Provider extensibility**: Users want clearer patterns for custom model integration
- **Channel stability**: Matrix's 4 failure modes suggest integration testing gaps
- **Comparative clarity**: Users evaluating alternatives need feature matrices

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#606](https://github.com/nullclaw/nullclaw/issues/606) Matrix multi-failure | **Closed** | [#610](https://github.com/nullclaw/nullclaw/pull/610) | Auto-accept invites, mention detection, room classification, sync replay — all now resolved |
| 🟡 **Medium** | [#601](https://github.com/nullclaw/nullclaw/issues/601) Service commands fail on Alpine/OpenRC | **Closed** | [#605](https://github.com/nullclaw/nullclaw/pull/605) | `FileNotFound` errors for all service operations; OpenRC support added |
| 🟡 **Medium** | [#592](https://github.com/nullclaw/nullclaw/issues/592) Cron tasks not running | **Closed** | — | `next_run_secs`/`last_run_secs` drift; appears resolved without linked PR |
| 🟢 **Low** | [#373](https://github.com/nullclaw/nullclaw/issues/373) `/help` produces no output | **Closed** | — | Interactive mode UX polish |

**Stability Assessment**: All reported bugs from 24h have fixes merged. The Matrix and OpenRC fixes address platform compatibility gaps. No regressions introduced in today's merges.

---

## 6. Feature Requests & Roadmap Signals

### Open Feature Requests

| Issue | Request | Likelihood in Next Release |
|:---|:---|:---|
| [#117](https://github.com/nullclaw/nullclaw/issues/117) | Custom provider documentation/Claude integration | **High** — Core architecture supports this; docs PR likely |
| [#607](https://github.com/nullclaw/nullclaw/issues/607) | MAX messenger support (Russian government-promoted platform) | **Uncertain** — Political/compliance considerations; no E2EE raises security concerns; 0 comments suggests low community demand |

### In-Progress Features (Open PRs)

| PR | Feature | Readiness |
|:---|:---|:---|
| [#538](https://github.com/nullclaw/nullclaw/pull/538) | Secret key rotation (90-day auto-rotation) | Under review — security critical |
| [#539](https://github.com/nullclaw/nullclaw/pull/539) | Wildcard allowlist warnings | Under review — security audit feature |
| [#609](https://github.com/nullclaw/nullclaw/pull/609) | Encrypted API keys in config.json | Under review — builds on #537 |
| [#527](https://github.com/nullclaw/nullclaw/pull/527) | Adaptive intelligence pipeline + email/WhatsApp | **Blocked on #451** — needs rebase |

**Predicted vNext contents**: Security hardening (rotation, encrypted configs), adaptive intelligence pipeline, and expanded channel coverage (email, WhatsApp Web).

---

## 7. User Feedback Summary

### Pain Points
| Issue | User | Core Problem |
|:---|:---|:---|
| [#117](https://github.com/nullclaw/nullclaw/issues/117) | @LcedAmericano | **Discovery friction**: "How do I add Claude?" — modular system lacks discoverable patterns |
| [#606](https://github.com/nullclaw/nullclaw/issues/606) | @whitemay | **Integration reliability**: Matrix "almost not work" — enterprise channel stability |
| [#601](https://github.com/nullclaw/nullclaw/issues/601) | @balehu86 | **Platform coverage**: Alpine/OpenRC service management missing |
| [#592](https://github.com/nullclaw/nullclaw/issues/592) | @balehu86 | **Background job reliability**: Cron scheduling drift |

### Use Cases Emerging
- **Government/compliance environments**: MAX request (#607) suggests sanctioned-platform needs
- **Self-hosted messaging**: WhatsApp Web bridge demand (#265, #282)
- **Email automation**: IMAP IDLE implementation (#451) for transactional workflows
- **Multi-tenant deployments**: Per-agent isolation (#275, #297)

### Satisfaction Indicators
- Rapid bug closure (all 5 closed issues resolved within 24h of update)
- Active security investment (6+ security PRs in 3 days)
- Responsive to platform diversity (OpenRC, Alpine)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#117](https://github.com/nullclaw/nullclaw/issues/117) | 21 days | **Medium** — documentation gaps accumulate user friction | Maintainer docs PR or community contribution guide |
| [#538](https://github.com/nullclaw/nullclaw/pull/538), [#539](https://github.com/nullclaw/nullclaw/pull/539), [#609](https://github.com/nullclaw/nullclaw/pull/609) | 3-4 days | **Low** — normal review cycle | Security review completion for merge |
| [#527](https://github.com/nullclaw/nullclaw/pull/527) | 3 days | **Low** — dependency on #451 | Rebase after #451 merge; contains significant feature bundle |

**No critical stagnation detected.** The oldest open issue (#117) is a documentation request that may benefit from explicit "good first issue" labeling to encourage community contribution.

---

*Digest generated from 24h GitHub activity snapshot. All URLs reference `https://github.com/nullclaw/nullclaw`.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-18

## 1. Today's Overview

IronClaw shows **high-velocity development** with 50 issues and 50 PRs touched in the last 24 hours, indicating active triage and development. The project just shipped **v0.19.0** (March 17), but immediate post-release issues emerged: database migration checksum failures and stale Telegram artifacts suggest release engineering friction. A significant **tool schema discovery initiative** dominates new issues—8 related tickets filed today by @henrypark133 indicating systematic LLM usability improvements. Multi-tenancy work (3 XL-sized PRs from @standardtoaster) remains in review queue, representing major architectural investment. Overall health is **robust but stressed**—strong feature velocity with post-release stabilization needs.

---

## 2. Releases

### v0.19.0 (2026-03-17)

| Aspect | Details |
|--------|---------|
| **New Features** | Telegram owner verification during hot activation; unified config resolution with Settings fallback (Phase 2, #1119); sandbox retry logic for transient failures |
| **Breaking Changes** | **Database migration `V6__routines.sql` was modified in-place** — causes checksum mismatch on upgrade for existing PostgreSQL databases |
| **Migration Notes** | Users upgrading from v0.18.0 or earlier **will fail to start** with: `Migration failed: applied migration V6__routines is different than filesystem one V6__routines`. Workaround: manual database intervention or wait for v0.19.1 hotfix (PR #1310 in progress) |

🔗 [Release v0.19.0](https://github.com/nearai/ironclaw/releases/tag/v0.19.0)

---

## 3. Project Progress

### Merged/Closed PRs (15 total, selected highlights)

| PR | Author | Summary | Significance |
|----|--------|---------|------------|
| [#1295](https://github.com/nearai/ironclaw/pull/1295) | @nickpismenkov | **Fixed** Telegram pairing flow: auto-trigger pairing for existing bots, skip redundant re-pairing | Resolves #1001; critical UX fix for Telegram onboarding |
| [#1285](https://github.com/nearai/ironclaw/pull/1285) | @ironclaw-ci[bot] | **Staging promotion** to main (batch 4675e96..5c56032) | Routine CI promotion |
| [#1310](https://github.com/nearai/ironclaw/pull/1310) | @ironclaw-ci[bot] | **v0.19.1 release prep** — WASM artifact checksum updates | Addresses v0.19.0 release artifacts issue |

### Active Development (Open PRs with momentum)

| PR | Author | Scope | Status |
|----|--------|-------|--------|
| [#1254](https://github.com/nearai/ironclaw/pull/1254) | @PierreLeGuen | **Webhook callbacks for relay events** — replaces SSE pull with push model, adds HMAC verification | XL size, medium risk, under active review |
| [#1118](https://github.com/nearai/ironclaw/pull/1118) | @standardtoaster | **Multi-tenant auth with per-user workspace isolation** — addresses #760 class vulnerability | XL size, high risk, rebased from #351, previously reviewed |
| [#1117](https://github.com/nearai/ironclaw/pull/1117) | @standardtoaster | **Multi-scope workspace reads** — Part 2 of 3 for multi-tenancy | XL size, depends on #1112 |
| [#1112](https://github.com/nearai/ironclaw/pull/1112) | @standardtoaster | **Layered memory with sensitivity-based privacy redirect** — Part 1 of 3 | XL size, foundation for multi-tenancy |
| [#927](https://github.com/nearai/ironclaw/pull/927) | @ilblackdragon | **Chat onboarding and routine advisor** — replaces interactive onboarding with bootstrap greeting | XL size, core contributor, major UX shift |
| [#1207](https://github.com/nearai/ironclaw/pull/1207) | @jrevillard | **WASM webhook improvements for WhatsApp** — HMAC-SHA256 verification, ACK mechanism, `on_message_persisted` callback | XL size, WhatsApp integration critical path |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | Topic | Underlying Need |
|-------|----------|-------|---------------|
| [#1307](https://github.com/nearai/ironclaw/issues/1307) | 3 | **Brave Search API no longer free** — $5/1000 requests, breaks documented "free tier" claim | **Cost transparency & alternative search providers** — users need sustainable search tooling without surprise billing |
| [#1228](https://github.com/nearai/ironclaw/issues/1228) | 2 | **Coverage gates via codecov.yml** — PRs can decrease coverage without CI failure | **Quality assurance automation** — "Mars-rover reliability" requires enforced coverage standards |
| [#1230](https://github.com/nearai/ironclaw/issues/1230) | 1 | **Enhance regression-test-check for state machine/resilience changes** | **Testing rigor for critical paths** — retry/failover/circuit breaker logic needs mandatory regression tests |

### Analysis

The Brave Search issue (#1307) represents **ecosystem dependency risk** — IronClaw's web-search tool capabilities were predicated on a free tier that no longer exists. This likely forces either: (a) provider migration, (b) user-paid API key model, or (c) degraded search functionality. The coverage/testing issues (#1228, #1230) reflect **maturation signals** — the project is formalizing quality gates as it scales.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **🔴 Critical** | [#1328](https://github.com/nearai/ironclaw/issues/1328) | **v0.19.0 upgrade fails**: `V6__routines` migration checksum mismatch on existing PostgreSQL databases | **PR #1310** (v0.19.1) addresses artifact checksums; migration fix may need separate attention |
| **🔴 Critical** | [#1327](https://github.com/nearai/ironclaw/issues/1327) | **Telegram webhook route missing** after v0.19.0 upgrade; published artifact appears stale | Under investigation; distinct from #738, #840, #1060 |
| **🟡 High** | [#1329](https://github.com/nearai/ironclaw/issues/1329) | **Secret leak detection blocks all subsequent Telegram messages** after PAT paste — channel permanently locks | No fix PR identified |
| **🟡 High** | [#939](https://github.com/nearai/ironclaw/issues/939) | ~~Checksum verification failed for telegram-mtproto~~ | **Closed** — resolved |
| **🟢 Medium** | [#992](https://github.com/nearai/ironclaw/issues/992) | ~~Google OAuth URL broken from Telegram (`clientid` vs `client_id`)~~ | **Closed** — fixed in #1295 |
| **🟢 Medium** | [#1001](https://github.com/nearai/ironclaw/issues/1001) | ~~Telegram pairing approval issues~~ | **Closed** — fixed in #1295 |
| **🟢 Medium** | [#1000](https://github.com/nearai/ironclaw/issues/1000) | ~~Rate limiter returns "retry after None"~~ | **Closed** — resolved |

### Stability Assessment

**Post-release regression cluster** around v0.19.0: database migrations and Telegram artifacts suggest **insufficient release testing for upgrade paths**. The secret detection lockout (#1329) is a novel failure mode with severe UX impact. Immediate v0.19.1 hotfix warranted.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Issue | Request | Likelihood in Next Version |
|-------|---------|---------------------------|
| [#1272](https://github.com/nearai/ironclaw/issues/1272) | **Universal user whitelist for all channels** — currently "bot is open to all users" | **High** — security-critical, small scope, aligns with multi-tenancy work |
| [#1022](https://github.com/nearai/ironclaw/issues/1022) | **Omnisearch command palette UI** — global search across threads, memory, files with `Cmd+K` | **Medium** — large scope (channel/web), but high UX value |
| [#857](https://github.com/nearai/ironclaw/issues/857) | **NEAR AI hosted IronClaw prompt** — deployment context awareness | **Medium** — depends on NEAR AI integration maturity |

### Maintainer-Driven Initiatives (High Confidence)

| Issue Cluster | Description | Timeline |
|---------------|-------------|----------|
| **Tool Schema Discovery** (#1331-#1338) | 8 tickets filed today for LLM-friendly tool schemas: `time`, `create_job`, `message`, `http`, MCP/WASM tools, extension workflows | **v0.20.0** — systematic improvement, @henrypark133 assigned |
| **Routines UX** (#1323-#1326, #1319-#1321) | 8 tickets: CLI authoring parity, web create/edit flows, status state clarity, self-recovery, readable summaries | **v0.20.0** — major routines subsystem polish |

### Prediction

**v0.20.0** will likely focus on: (1) tool schema LLM ergonomics, (2) routines UX completion, (3) multi-tenancy GA (PRs #1112/#1117/#1118). **v0.19.1** imminent for migration/artifact hotfixes.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Experience | Root Cause |
|-------|---------------|------------|
| #1307 | Surprise cost for search API | External dependency change, outdated docs |
| #1328, #1327 | Upgrade failures, broken Telegram | Release engineering gaps, migration testing |
| #1329 | Channel permanently locks on security event | Over-aggressive secret detection without recovery path |
| #1001 (fixed) | Confusing Telegram pairing flow | State machine edge cases for existing bots |

### Use Cases Emerging

- **Enterprise/team deployment**: #1272 (whitelists), #1118 (multi-tenancy) suggest organizational adoption
- **Voice/TTS integration**: #1314 (sendVoice) enables audio-first interactions
- **WhatsApp business**: #1207 webhook improvements indicate production messaging needs

### Satisfaction Signals

- Active contribution: Japanese README (#1306), Aliyun backend (#1299) — global adoption
- Bug bash participation: @sergeiest filed multiple P1/P2 issues with detailed repros

---

## 8. Backlog Watch

### Long-Running Items Needing Attention

| PR/Issue | Age | Blocker | Risk |
|----------|-----|---------|------|
| [#465](https://github.com/nearai/ironclaw/pull/465) | 16 days | **Conversation history loading** — fixes #259 for multi-channel messaging | **Medium** — core feature, author @jrevillard active on other PRs (#1207) |
| [#1048](https://github.com/nearai/ironclaw/pull/1048) | 6 days | **A2A protocol bridge** — Google Agent-to-Agent protocol | **Low** — new contributor, needs maintainer review |
| [#927](https://github.com/nearai/ironclaw/pull/927) | 7 days | **Chat onboarding redesign** — replaces entire onboarding engine | **Medium** — @ilblackdragon core contributor, may be pending final UX sign-off |

### Maintainer Attention Needed

- **Multi-tenancy trilogy** (#1112/#1117/#1118): Previously reviewed by @serrrfirat and @zmanian, now rebased. Risk of bit-rot if not merged soon.
- **Routines schema work** (#1323-#1326): 8 new tickets from @henrypark133 — suggests coordinated sprint; needs prioritization relative to multi-tenancy.

---

*Digest generated from GitHub activity 2026-03-17 to 2026-03-18. Data source: nearai/ironclaw public repository.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-18

## 1. Today's Overview

LobsterAI shows **high development velocity** with 24 PRs updated in the last 24 hours (21 merged/closed, 3 open) and 11 active issues. The project released **v2026.3.17** with critical fixes for system prompt injection and message ordering bugs. The team is actively addressing post-v2026.3.16 migration issues, particularly around scheduled task data migration and sandbox environment changes. Community engagement is moderate with several user-reported regressions following the major version update. Overall project health appears **stable but transition-heavy** as users adapt to architectural changes in the latest release.

---

## 2. Releases

### [v2026.3.17](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.17) — 2026-03-17

| Change | PR | Impact |
|--------|-----|--------|
| Fix system prompt injection to first turn only | [#456](https://github.com/netease-youdao/LobsterAI/pull/456) | **Critical** — resolves token burn issue where full system prompt was resent every turn |
| Fix channel message ordering (user message appearing after AI reply) | [#451](https://github.com/netease-youdao/LobsterAI/pull/451) | High — UI/UX fix for conversation flow |
| Remove model probe | [partial] | Performance — eliminates 20s blocking timeouts |

**Breaking Changes / Migration Notes:**
- Users upgrading from v0.2.4 or v2026.3.16 may need to **reconfigure API keys** — the "lobster" provider now requires explicit configuration (see [#452](https://github.com/netease-youdao/LobsterAI/issues/452), fixed in [#470](https://github.com/netease-youdao/LobsterAI/pull/470))
- **Scheduled tasks migrated** from SQLite to new `jobs.json` format — users report tasks "disappearing" post-upgrade (see [#474](https://github.com/netease-youdao/LobsterAI/issues/474), migration logic in [#469](https://github.com/netease-youdao/LobsterAI/pull/469))
- **Sandbox/local execution options removed from UI** — now managed differently (see [#474](https://github.com/netease-youdao/LobsterAI/issues/474))

---

## 3. Project Progress

### Merged/Closed PRs Today (21 total)

| Category | PR | Description | Significance |
|----------|-----|-------------|--------------|
| **Stability** | [#457](https://github.com/netease-youdao/LobsterAI/pull/457) | Remove model probe, fix Electron dev race | Eliminates 20s startup delays |
| | [#456](https://github.com/netease-youdao/LobsterAI/pull/456) | System prompt injection fix | Major token/cost optimization |
| | [#462](https://github.com/netease-youdao/LobsterAI/pull/462) + [#464](https://github.com/netease-youdao/LobsterAI/pull/464) | Strip `/chat/completions` suffix from custom provider URLs | Fixes 404 errors with custom endpoints |
| | [#470](https://github.com/netease-youdao/LobsterAI/pull/470) | Placeholder API key for no-auth providers | Fixes Ollama/vLLM integration |
| | [#461](https://github.com/netease-youdao/LobsterAI/pull/461) | Fix GB18030 false positive encoding | Resolves garbled Chinese session titles |
| **Integrations** | [#472](https://github.com/netease-youdao/LobsterAI/pull/472) | Add POPO chatbot (NetEase IM) as OpenClaw plugin | New channel support |
| | [#473](https://github.com/netease-youdao/LobsterAI/pull/473) | Migrate NIM gateway to OpenClaw plugin architecture | Architectural alignment with other channels |
| **Data Migration** | [#469](https://github.com/netease-youdao/LobsterAI/pull/469) | Scheduled task data migration from SQLite to JSON | Critical for v2026.3.16+ upgrades |
| | [#465](https://github.com/netease-youdao/LobsterAI/pull/465) | Fix DingTalk scheduled task message delivery | Channel-specific bug fix |
| **Skills/Agent System** | [#471](https://github.com/netease-youdao/LobsterAI/pull/471) | OpenClaw native Skills loading (replaces AGENTS.md) | Skills architecture modernization |
| | [#460](https://github.com/netease-youdao/LobsterAI/pull/460) | Email skills via OpenClaw | New capability |
| **UX/Security** | [#445](https://github.com/netease-youdao/LobsterAI/pull/445) | Permission confirmation dialog improvements | Better security UX |
| **Infrastructure** | [#466](https://github.com/netease-youdao/LobsterAI/pull/466) | OpenClaw runtime system proxy support | Enterprise/network compatibility |
| | [#468](https://github.com/netease-youdao/LobsterAI/pull/468), [#467](https://github.com/netease-youdao/LobsterAI/pull/467) | IM session management command restoration | Feature parity recovery |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | Topic | Underlying Need |
|----------|----------|-------|---------------|
| [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | 6 | **Auto-inserted spaces in Chinese+number strings** | Critical for Chinese users — breaks code, math, data processing. User explicitly states "cannot replace OpenClaw" due to this. **Root cause**: Likely over-eager text normalization. |
| [#368](https://github.com/netease-youdao/LobsterAI/issues/368) | 3 | Ubuntu 24.04 blank window after DEB install | Linux desktop reliability — packaging/Electron issue with Node 24/npm11 |
| [#435](https://github.com/netease-youdao/LobsterAI/issues/435) | 3 | **"Is this a wrapper?" — UI similarity accusations** | Community concern about attribution/license compliance with Zeelin Claw, Wind Claw. Suggests LobsterAI's UI design is being copied. |

**Analysis**: The space-injection bug (#344) represents the **highest-impact unaddressed issue** — it's a data integrity problem blocking production use for Chinese-speaking developers. The "wrapper" discussion (#435) indicates LobsterAI has achieved **design influence** in the Chinese AI assistant ecosystem, but raises governance questions.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|----------|-------|--------|--------|-------------|
| 🔴 **Critical** | [#452](https://github.com/netease-youdao/LobsterAI/issues/452) | Closed | [#470](https://github.com/netease-youdao/LobsterAI/pull/470) | `No API key found for provider "lobster"` — upgrade blocker from v0.2.4/v2026.3.16 |
| 🔴 **Critical** | [#474](https://github.com/netease-youdao/LobsterAI/issues/474) | Open | [#469](https://github.com/netease-youdao/LobsterAI/pull/469) | Scheduled tasks lost, sandbox/local options missing post-v2026.3.16 |
| 🟡 **High** | [#458](https://github.com/netease-youdao/LobsterAI/issues/458) | Open | None yet | Sandbox mode missing Python/pandoc — breaks docx/xlsx/pdf skills |
| 🟡 **High** | [#459](https://github.com/netease-youdao/LobsterAI/issues/459) | Open | None yet | Built-in agents cannot access desktop-configured MCPs (Notion) |
| 🟡 **High** | [#455](https://github.com/netease-youdao/LobsterAI/issues/455) | Open | None yet | PowerShell Chinese character garbling in CLI output |
| 🟡 **High** | [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | Open | None yet | Auto space-insertion in Chinese+number strings |
| 🟢 **Medium** | [#368](https://github.com/netease-youdao/LobsterAI/issues/368) | Open | None yet | Ubuntu 24.04 blank window |
| 🟢 **Medium** | [#248](https://github.com/netease-youdao/LobsterAI/issues/248) | Open | None yet | DeepSeek/Qwen test connection succeeds but 401 on actual use |
| 🟢 **Medium** | [#454](https://github.com/netease-youdao/LobsterAI/issues/454) | Closed | Unknown | First message in new task errors with "model validation failed: fetch failed" |

**Regression Pattern**: v2026.3.16 introduced significant architectural changes (OpenClaw plugin system, data migration) causing **multiple upgrade path issues**. The team is responsive with same-day fixes.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|--------|--------|---------------------------|
| **LM Studio provider support** | [#428](https://github.com/netease-youdao/LobsterAI/pull/428) — OPEN | High — community PR ready, follows Ollama pattern |
| **Enhanced sandbox environment** | [#458](https://github.com/netease-youdao/LobsterAI/issues/458), [#475](https://github.com/netease-youdao/LobsterAI/pull/475) | High — PR #475 fixes Python packaging for skills |
| **MCP/desktop agent unification** | [#459](https://github.com/netease-youdao/LobsterAI/issues/459) | Medium — architectural gap acknowledged |
| **Better encoding/Chinese text handling** | [#344](https://github.com/netease-youdao/LobsterAI/issues/344), [#455](https://github.com/netease-youdao/LobsterAI/issues/455), [#461](https://github.com/netease-youdao/LobsterAI/pull/461) | High — multiple related issues, partial fix merged |

**Emerging Theme**: The project is pivoting toward **OpenClaw as the universal runtime** — consolidating channels, skills, and agent execution under one plugin architecture. This explains the removal of direct sandbox UI options in favor of OpenClaw-managed environments.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Voice | Impact |
|-------|-----------|--------|
| **Data integrity** | *"只要字符串包含'中文+数字'的，最终LobsterAI就一定会在中间加上空格"* — #344 | Blocks replacement of OpenClaw; affects code, data processing |
| **Upgrade friction** | *"之前的定时任务不见了"* — #474 | Data loss perception, trust erosion |
| **Sandbox reliability** | *"大量内置技能无法正常工作，用户体验极差"* — #458 | Core value proposition (agent execution) compromised |
| **API configuration** | Test connection succeeds but actual calls fail — #248 | Configuration UX confusion |

### Positive Signals
- Rapid fix turnaround for reported issues (same-day PRs for #452, #453, #454)
- Active expansion of channel integrations (POPO, NIM migration)
- Token cost optimization addressed proactively (#456)

### Use Case Gaps
- **Notion/power-user integrations**: MCP server discovery/connection unreliable
- **Linux desktop**: Packaging issues for Ubuntu 24.04
- **Windows CLI workflows**: Encoding issues with external tools

---

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|------|-----|------|-------|
| [#344](https://github.com/netease-youdao/LobsterAI/issues/344) — Space injection | 9 days | **High** | 6 comments, no maintainer response. User escalating urgency. Likely requires core text processing fix. |
| [#248](https://github.com/netease-youdao/LobsterAI/issues/248) — 401 after test success | 14 days | Medium | Authentication flow discrepancy between test and runtime |
| [#368](https://github.com/netease-youdao/LobsterAI/issues/368) — Ubuntu blank window | 8 days | Medium | Linux desktop market segment |
| [#428](https://github.com/netease-youdao/LobsterAI/pull/428) — LM Studio provider | 3 days | Low | Ready for review, follows established patterns |

**Recommendation**: Issue #344 requires immediate maintainer attention — it's a **data corruption bug** affecting the primary user base with clear reproduction steps and high user frustration.

---

*Digest generated from GitHub activity 2026-03-17 to 2026-03-18. All links: https://github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-18

---

## 1. Today's Overview

TinyClaw shows **moderate development activity** with 3 open PRs and 1 active bug report updated in the last 24 hours, though no releases or merged code. The project appears focused on architectural simplification and UI/UX improvements rather than new feature expansion. Notably, all three PRs remain unmerged after 1-4 days of activity, suggesting either maintainer bandwidth constraints or deliberate review caution. The single high-severity bug affecting core CLI functionality indicates stability risks in the setup workflow. Overall health: **stable but stalled** — active development without forward velocity.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

**No PRs merged or closed today.** Three PRs remain in open state with recent updates:

| PR | Author | Age | Focus |
|:---|:---|:---|:---|
| [#213](https://github.com/TinyAGI/tinyclaw/pull/213) | @jlia0 | 4 days | Core architecture — removing conversation state |
| [#232](https://github.com/TinyAGI/tinyclaw/pull/232) | @crisdias | 2 days | SSE connectivity fix for office view |
| [#212](https://github.com/TinyAGI/tinyclaw/pull/212) | @mczabca-boop | 5 days | Office workspace UI redesign |

**Implication:** Development is distributed across infrastructure simplification, real-time communication reliability, and user experience — but nothing has shipped.

---

## 4. Community Hot Topics

### Most Active: Issue #228 — Critical Setup Bug
- **Link:** [TinyAGI/tinyclaw#228](https://github.com/TinyAGI/tinyclaw/issues/228)
- **Activity:** 2 comments, updated yesterday
- **Core tension:** The `tinyclaw setup` CLI workflow — intended for configuration changes — **destructively resets agent configurations** when users attempt to modify heartbeat settings.

**Underlying need:** Users expect idempotent, non-destructive configuration management. The current wizard-style setup assumes greenfield deployment, hurting production users who need surgical adjustments.

### PR #232 — SSE Fix Gaining Urgency
- **Link:** [TinyAGI/tinyclaw#232](https://github.com/TinyAGI/tinyclaw/pull/232)
- **Addresses:** #231 (office view "Disconnected" state)

**Underlying need:** Real-time observability is a core value proposition for TinyClaw's "live office" concept. The Next.js rewrite buffering issue breaks this promise entirely.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| **High** | [#228](https://github.com/TinyAGI/tinyclaw/issues/228): Setup wizard destroys agent configs on heartbeat change | Open, active discussion | **No** |
| Medium | [#231](https://github.com/TinyAGI/tinyclaw/issues/231): SSE buffering breaks office real-time view (implied by PR #232) | Fix in review | [#232](https://github.com/TinyAGI/tinyclaw/pull/232) |

**Stability assessment:** One critical data-loss scenario unpatched. The setup CLI requires immediate hardening or warning documentation.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests filed today. **Inferred priorities from PR activity:**

| Signal | Likely Near-Term Direction |
|:---|:---|
| #213 (remove conversation state) | **Simpler, more reliable agent communication** — suggests pain with current orchestration complexity |
| #212 (office redesign) | **Improved observability UX** — investment in "office" as differentiated feature |
| #232 (direct SSE) | **Performance/reliability over abstraction** — bypassing Next.js indicates production scaling concerns |

**Prediction:** Next release likely emphasizes **reliability and simplified architecture** over new capabilities.

---

## 7. User Feedback Summary

### Pain Points (from #228)
> *"I anyway ran through the hole setup and it destroyed my whole agent setup"*

- **Destructive defaults** in CLI workflows
- **No configuration backup/rollback** mechanism
- **Heartbeat adjustment** (seemingly minor) requires full re-setup

### Implied Use Cases
- Production deployments with existing agent fleets
- Need for granular, non-disruptive operational tuning
- "Office" view as monitoring/observability hub

**Satisfaction:** Likely degraded among CLI users; web UI users pending #232 fix.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#228](https://github.com/TinyAGI/tinyclaw/issues/228) | 2 days | **Data loss in production** | Maintainer triage + hotfix or documentation |
| [#213](https://github.com/TinyAGI/tinyclaw/pull/213) | 4 days | Architecture divergence | Decision on state removal direction |
| [#212](https://github.com/TinyAGI/tinyclaw/pull/212) | 5 days | UI redesign stalemate | Design review or scope adjustment |

**Recommendation:** Prioritize #228 resolution — either patch or warn users immediately. Consider merging #232 (low-risk fix) to unblock office functionality.

---

*Digest generated from TinyClaw GitHub activity 2026-03-17 to 2026-03-18.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-18

## 1. Today's Overview

Moltis shows **moderate development activity** with 5 PRs updated in the last 24 hours (3 open, 2 merged/closed) and 1 active issue. No new releases were published. The project demonstrates **active maintenance** with two bug fixes landing today addressing provider compatibility and tool schema issues. Development focus centers on **provider reliability** (MiniMax, Qwen/llama.cpp) and **security hardening** (secret masking in gateway configs). The single open issue signals strong community interest in **enterprise messaging platform integration** (Lark/Feishu), suggesting Moltis is gaining traction in Asian markets.

---

## 2. Releases

**No new releases** published today. The project remains on its last version with no migration notes required.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#431](https://github.com/moltis-org/moltis/pull/431) | @BillionClaw | **fix(providers): consolidate system messages to prevent Jinja template errors** | Resolves critical compatibility issue with Qwen models via llama.cpp; prevents Jinja template crashes by merging multiple system messages |
| [#435](https://github.com/moltis-org/moltis/pull/435) | @BillionClaw | **fix(exec): hide node parameter when no nodes configured** | Eliminates LLM confusion where models hallucinated node values; fixes reported Issue #427 |

**Technical Advancement:** Both fixes address **LLM-provider interaction reliability**—a core competency for Moltis as an AI gateway. The Qwen fix specifically improves support for local/edge deployment scenarios using GGUF models.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#383](https://github.com/moltis-org/moltis/issues/383) — Lark/Feishu Support | 2 comments, 3 👍, created 2026-03-10, active through 2026-03-17 | **Highest community demand.** Lark/Feishu (ByteDance's enterprise platform, 100M+ MAU in China) represents **enterprise adoption signal**. The 3 upvotes and sustained activity suggest this is a **market-expansion blocker** for Chinese/Southeast Asian users. |
| [#439](https://github.com/moltis-org/moltis/pull/439) — MCP custom display names | Updated 2026-03-17 | **Developer experience improvement.** Allows friendly naming of Model Context Protocol servers—indicates Moltis is investing in **MCP ecosystem maturity** for complex multi-server setups. |

**Underlying Need:** Enterprise users need **native integration with region-dominant collaboration platforms** and **operational clarity** in multi-AI-system deployments.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Status |
|:---|:---|:---|:---|
| **High** (Fixed) | [#431](https://github.com/moltis-org/moltis/pull/431) | Jinja template errors crash Qwen models when multiple system messages sent | ✅ **Merged** — fixes llama.cpp compatibility |
| **Medium** (Fixed) | [#435](https://github.com/moltis-org/moltis/pull/435) | Models hallucinate `node` parameter values when no nodes configured, causing execution failures | ✅ **Merged** — resolves Issue #427 |
| **Medium** (In Review) | [#448](https://github.com/moltis-org/moltis/pull/448) | MiniMax system messages incorrectly extracted to top-level field, breaking conversation history | 🔄 **Open** — fix by @hongyuatcufe, validation tests included |

**Stability Assessment:** Two production-affecting bugs resolved today; one provider-specific fix pending review. **No regressions or crashes reported.**

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Lark/Feishu integration** | [#383](https://github.com/moltis-org/moltis/issues/383) | **High** | Clear enterprise demand, 3+ upvotes, active discussion; aligns with gateway expansion strategy |
| **MCP server display names** | [#439](https://github.com/moltis-org/moltis/pull/439) | **Very High** | PR already open, implementation complete; minor DX enhancement |
| **Gateway secret masking** | [#449](https://github.com/moltis-org/moltis/pull/449) | **High** | Security-critical; PR open with comprehensive redaction logic |

**Predicted vNext themes:** Enterprise platform connectivity, security hardening, MCP ecosystem polish.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|:---|:---|:---|
| **Local model compatibility** | Qwen/Jinja errors in [#431](https://github.com/moltis-org/moltis/pull/431) | Self-hosters, edge deployers |
| **Tool schema confusion** | Node parameter hallucinations in [#427](https://github.com/moltis-org/moltis/issues/427) | Automation/execution users |
| **Enterprise messaging gaps** | Lark/Feishu request [#383](https://github.com/moltis-org/moltis/issues/383) | Asian enterprise teams |
| **Operational visibility** | MCP display names [#439](https://github.com/moltis-org/moltis/pull/439) | Platform administrators |

**Satisfaction Signal:** Rapid turnaround on reported issues (Issue #427 → fix merged in 3 days).  
**Dissatisfaction Risk:** Lark/Feishu delay may drive enterprise users to competitors with native ByteDance integration.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#383](https://github.com/moltis-org/moltis/issues/383) Lark/Feishu | 8 days | **Medium** — community momentum may stall without maintainer response | Maintainer acknowledgment or roadmap commitment |
| [#439](https://github.com/moltis-org/moltis/pull/439) MCP display names | 3 days | **Low** — PR ready, likely pending review queue | Routine review/merge |
| [#449](https://github.com/moltis-org/moltis/pull/449) Gateway secret masking | 1 day | **Low** — fresh PR, security priority | Security review, likely fast-track |

**Attention Required:** Issue #383 needs **maintainer engagement** to prevent community frustration; the PR backlog appears healthy with reasonable review latency.

---

*Digest generated from GitHub activity 2026-03-17 to 2026-03-18. Data source: github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-18

## 1. Today's Overview

CoPaw shows **high development velocity** with 100 total updates in the last 24 hours (50 issues, 50 PRs) and a healthy 64% merge/close rate on PRs. The project just shipped two beta releases (v0.1.0-beta.1 and v0.1.0-beta.2) addressing critical breaking changes in the A2A SDK dependency. Community activity is robust with 14-comment discussions on container deployment pain points and 12-comment threads on installation failures. However, **memory management and context handling** dominate bug reports, suggesting this subsystem needs stabilization attention. The maintainer team appears responsive with same-day PR closures and rapid version iterations.

---

## 2. Releases

### [v0.1.0-beta.2](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.1.0-beta.2)
- **Breaking Change**: Upgrades `agentscope-runtime` to 1.1.1 due to breaking changes in `a2a-sdk~=1.0.0`
- **Migration**: Users must upgrade immediately; see [PR #1684](https://github.com/agentscope-ai/CoPaw/pull/1684)

### [v0.1.0-beta.1](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.1.0-beta.1)
- Version bump to 0.0.7p1
- Fixed page refresh redirect to chat ([PR #1373](https://github.com/agentscope-ai/CoPaw/pull/1373))
- Fixed skill importing failure with `/` characters in paths

---

## 3. Project Progress

### Merged/Closed PRs Today (32 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#1684](https://github.com/agentscope-ai/CoPaw/pull/1684) | Upgrade agentscope-runtime to 1.1.1 | **Critical** — fixes breaking A2A SDK change |
| [#1664](https://github.com/agentscope-ai/CoPaw/pull/1664) | Zero-downtime agent reload | **Major UX improvement** — eliminates chat failures during config changes |
| [#1628](https://github.com/agentscope-ai/CoPaw/pull/1628) | Token counter + history management | Debugging and memory optimization tools |
| [#1676](https://github.com/agentscope-ai/CoPaw/pull/1676) | Filter media blocks for non-multimodal LLMs | Prevents errors with vision-incompatible models |
| [#1673](https://github.com/agentscope-ai/CoPaw/pull/1673) | ModelScope SkillHub integration | Expands skill ecosystem |
| [#1674](https://github.com/agentscope-ai/CoPaw/pull/1674) | Version-aware builtin skill sync | Fixes bidirectional sync issues |
| [#1484](https://github.com/agentscope-ai/CoPaw/pull/1484) | Security: destructive shell command detection | Adds rules for `mkfs`, `dd`, fork bombs, reverse shells |
| [#1681](https://github.com/agentscope-ai/CoPaw/pull/1681) | Fix WeCom version compatibility | Channel stability |
| [#1672](https://github.com/agentscope-ai/CoPaw/pull/1672) | Chat status management + reconnect | Reliability improvement |
| [#1670](https://github.com/agentscope-ai/CoPaw/pull/1670) | Fix multi-agent heartbeat | Distributed agent stability |

### Open PRs in Progress (18 total, notable)
- [#1689](https://github.com/agentscope-ai/CoPaw/pull/1689): Memory compaction progress indicators + `memory_search` method
- [#1478](https://github.com/agentscope-ai/CoPaw/pull/1478): Nextcloud Talk channel integration
- [#1679](https://github.com/agentscope-ai/CoPaw/pull/1679): Knowledge layer MVP (local lexical engine, no Cognee)
- [#1557](https://github.com/agentscope-ai/CoPaw/pull/1557): Fix `reasoning_content` injection count mismatch

---

## 4. Community Hot Topics

### Highest Engagement Issues

| Issue | Comments | Core Problem | Underlying Need |
|:---|:---:|:---|:---|
| [#1610](https://github.com/agentscope-ai/CoPaw/issues/1610) | **14** | Container web UI closure kills running tasks | **NAS/headless deployment** — users need 24/7 background operation without persistent browser |
| [#1682](https://github.com/agentscope-ai/CoPaw/issues/1682) | **12** | v0.1.0b fails to start (Windows) | **Installation reliability** — beta release quality assurance |
| [#1454](https://github.com/agentscope-ai/CoPaw/issues/1454) | **8** | Memory compaction sends output to wrong channel | **Observability/debuggability** — users lose track of agent reasoning |
| [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | **8** | Feishu channel "delayed reply" bug | **Enterprise IM reliability** — message ordering in async environments |
| [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222) | **7** | Message count mismatch after compression → API failure | **Memory subsystem robustness** |

**Pattern Analysis**: The top issues reveal a tension between CoPaw's desktop-first design and emerging **server/NAS deployment use cases**. Users want "set and forget" operation, but the architecture assumes active web UI sessions.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1682](https://github.com/agentscope-ai/CoPaw/issues/1682) v0.1.0b install fails on Windows | Open, 12 comments | None yet |
| 🔴 **Critical** | [#1687](https://github.com/agentscope-ai/CoPaw/issues/1687) Windows install extremely slow, won't boot | Open, 1 comment | None yet |
| 🟡 **High** | [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222) Message count mismatch → API failure | Open | [#1557](https://github.com/agentscope-ai/CoPaw/pull/1557) (open) |
| 🟡 **High** | [#1596](https://github.com/agentscope-ai/CoPaw/issues/1596) Memory compression corrupts recent context | Open, 6 comments | [#1689](https://github.com/agentscope-ai/CoPaw/pull/1689) (addresses related area) |
| 🟡 **High** | [#1663](https://github.com/agentscope-ai/CoPaw/issues/1663) GLM-5: count mismatch stops response | Open, 1 comment | [#1557](https://github.com/agentscope-ai/CoPaw/pull/1557) |
| 🟡 **High** | [#1620](https://github.com/agentscope-ai/CoPaw/issues/1620) Memory watcher clears file_store on Windows | Open, 1 comment | None yet |
| 🟢 **Medium** | [#823](https://github.com/agentscope-ai/CoPaw/issues/823) llama.cpp Qwen3.5 load failure | Open, 4 comments | None yet |
| 🟢 **Medium** | [#1655](https://github.com/agentscope-ai/CoPaw/issues/1655) Windows 0xc000001d error with Qwen3-4B-GGUF | Open, 1 comment | None yet |
| 🟢 **Medium** | [#918](https://github.com/agentscope-ai/CoPaw/issues/918) Feishu images/voice not recognized by multimodal models | Open, 2 comments | None yet |

**Regression Alert**: The rapid beta releases (beta.1 → beta.2 within 24h) with breaking changes suggest **release process instability**. Multiple Windows-specific installation failures indicate insufficient CI coverage for that platform.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Multi-Agent Orchestration Gateway** | [#508](https://github.com/agentscope-ai/CoPaw/issues/508) (5 comments) | **Medium-High** | Architecture limitation explicitly acknowledged; high community demand for true multi-agent vs. prompt-based "roles" |
| **Lite Docker image** (no transformers/llama.cpp/MLX/Ollama) | [#1648](https://github.com/agentscope-ai/CoPaw/issues/1648) (1 comment, 👍1) | **High** | Low effort, high value for production deployments; aligns with NAS use case |
| **User-isolated memory & skills** | [#352](https://github.com/agentscope-ai/CoPaw/issues/352) (7 comments) | **Medium** | Security/privacy requirement for multi-user deployments; requires data model changes |
| **Knowledge layer / RAG improvements** | [#1679](https://github.com/agentscope-ai/CoPaw/pull/1679) (in progress) | **High** | Active PR in progress; local lexical engine MVP |
| **Feishu official plugin support** | [#1595](https://github.com/agentscope-ai/CoPaw/issues/1595), [#1657](https://github.com/agentscope-ai/CoPaw/issues/1657) | **Medium** | Enterprise China market requirement; closed #1657 suggests partial resolution |
| **QQ Channel DM support** | [#1641](https://github.com/agentscope-ai/CoPaw/issues/1641) | **Medium** | Platform expansion; log shows partial implementation already |
| **Debug: view final model payload** | [#1645](https://github.com/agentscope-ai/CoPaw/issues/1645) (3 comments) | **High** | Developer experience; low implementation cost |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Intensity |
|:---|:---|:---:|
| **Memory/context corruption** | 6+ issues on compression, count mismatch, "amnesia" | 🔴 Severe |
| **Windows installation/startup** | [#1682](https://github.com/agentscope-ai/CoPaw/issues/1682), [#1687](https://github.com/agentscope-ai/CoPaw/issues/1687), [#1655](https://github.com/agentscope-ai/CoPaw/issues/1655) | 🔴 Severe |
| **Container/headless operation** | [#1610](https://github.com/agentscope-ai/CoPaw/issues/1610) — "I can't keep another computer watching" | 🟡 High |
| **Feishu integration reliability** | [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345), [#918](https://github.com/agentscope-ai/CoPaw/issues/918) | 🟡 High |
| **Local model compatibility** | [#823](https://github.com/agentscope-ai/CoPaw/issues/823), [#1448](https://github.com/agentscope-ai/CoPaw/issues/1448), [#1655](https://github.com/agentscope-ai/CoPaw/issues/1655) | 🟡 High |

### Positive Signals
- **Rapid maintainer response**: Same-day PR closures, quick beta iterations
- **Security consciousness**: [#1484](https://github.com/agentscope-ai/CoPaw/pull/1484) destructive command detection
- **Zero-downtime reload**: [#1664](https://github.com/agentscope-ai/CoPaw/pull/1664) addresses core UX friction

### Use Case Evolution
Users are pushing CoPaw beyond its original desktop-centric design toward:
- **NAS/home server deployments** (24/7 background operation)
- **Enterprise IM integration** (Feishu, WeCom, DingTalk)
- **Local-first AI** (Ollama, llama.cpp, small models)

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#508](https://github.com/agentscope-ai/CoPaw/issues/508) Multi-Agent Orchestration Gateway | 15 days | **Architecture debt** | Maintainer response on roadmap; high community interest |
| [#352](https://github.com/agentscope-ai/CoPaw/issues/352) User-isolated memory & skills | 16 days | **Security/compliance blocker** | Design decision on multi-tenancy model |
| [#995](https://github.com/agentscope-ai/CoPaw/issues/995) Built-in skills improvement | 9 days | **User retention** | Skills UX directly impacts "first impression" |
| [#1557](https://github.com/agentscope-ai/CoPaw/pull/1557) Fix reasoning_content injection | 2 days | **Fixes critical bug** | Review and merge; addresses #1222, #1663 |
| [#1478](https://github.com/agentscope-ai/CoPaw/pull/1478) Nextcloud Talk channel | 4 days | **Community contribution** | Review for merge; expands channel ecosystem |

---

*Digest generated from 50 issues and 50 PRs updated 2026-03-17 to 2026-03-18. Data source: github.com/agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-18

## 1. Today's Overview

ZeptoClaw shows **moderate-to-high development velocity** with 21 tracked items updated in the past 24 hours (6 issues, 15 PRs). The project is in an active **maintenance and infrastructure hardening phase** — no new releases, but significant dependency modernization across Rust, JavaScript, Docker, and GitHub Actions ecosystems. Three issues were resolved, including critical tooling fixes and security architecture improvements. The 14 open dependency PRs suggest aggressive automated maintenance, while 3 open feature issues indicate the maintainers are prioritizing **security boundaries** (network egress policies, credential isolation) and **developer experience** (progress reporting, containerized templates). Community engagement is developer-heavy with limited end-user participation (zero 👍 reactions across all items).

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Merged/Closed Today

| Item | Type | Summary | Impact |
|------|------|---------|--------|
| [#369](https://github.com/qhkm/zeptoclaw/issues/369) | Issue (closed) | Fixed Cargo permission denied in rootless Podman environments by remounting registry cache with correct ownership | **Unblocks containerized development** for Podman users; no breaking changes |
| [#373](https://github.com/qhkm/zeptoclaw/issues/373) | Issue (closed) | Dedicated credential store (`~/.zeptoclaw/credentials.json`, mode 600) separate from `config.json` | **Security architecture upgrade** — reduces secret exposure risk when sharing configs |
| [#368](https://github.com/qhkm/zeptoclaw/issues/368) | Issue (closed) | Fixed image-to-base64 resolution failure in agent tool loop iterations | **Reliability fix** for multimodal agent workflows |
| [#370](https://github.com/qhkm/zeptoclaw/pull/370) | PR (closed) | Webex channel integration | New communication channel support (details limited in summary) |

### Feature Advancement

- **Security posture strengthening**: Credential isolation (#373) and network egress policy design (#371) show deliberate NemoClaw-inspired hardening
- **Developer tooling maturity**: Container-based linting fixes (#369) and pending dev environment standardization (#287)

---

## 4. Community Hot Topics

| Rank | Item | Activity Signal | Underlying Need |
|------|------|-----------------|-----------------|
| 1 | [#369](https://github.com/qhkm/zeptoclaw/issues/369) | 1 comment, closed with fix | **Container dev environment friction** — rootless Podman is increasingly default in enterprise; tooling must adapt |
| 2 | [#373](https://github.com/qhkm/zeptoclaw/issues/373) | 1 comment, closed | **Secrets management hygiene** — users need config portability without secret leakage |
| 3 | [#287](https://github.com/qhkm/zeptoclaw/pull/287) | Long-running (Mar 9→17), undefined comments | **Contributor onboarding friction** — need reproducible dev environments across disparate setups |

**Analysis**: The community (heavily maintainer-driven) is focused on **enterprise-ready deployment patterns** — rootless containers, credential isolation, and reproducible builds. Limited external engagement suggests either (a) early project stage, (b) niche technical focus, or (c) documentation gaps preventing broader adoption.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available? |
|----------|------|--------|----------------|
| **P2-High** (fixed) | [#369](https://github.com/qhkm/zeptoclaw/issues/369) — Cargo permission denied in rootless Podman | ✅ Closed | Yes — runtime CARGO_HOME remount |
| **P2-High** (open) | [#371](https://github.com/qhkm/zeptoclaw/issues/371) — Network egress policy missing | 🟡 Open | Design proposal only; no PR |
| (fixed) | [#368](https://github.com/qhkm/zeptoclaw/issues/368) — Image base64 resolution failure | ✅ Closed | Yes — merged |

**Stability Assessment**: No active crashes or regressions. The open network egress policy (#371) represents a **latent security gap** — currently mitigated by per-tool domain controls but lacking systematic enforcement.

---

## 6. Feature Requests & Roadmap Signals

| Item | Priority | Predicted Version | Rationale |
|------|----------|-------------------|-----------|
| [#371](https://github.com/qhkm/zeptoclaw/issues/371) — Network egress policy (YAML deny-by-default) | P2-High | v0.x (near-term) | Security-critical; NemoClaw precedent; aligns with credential store work |
| [#372](https://github.com/qhkm/zeptoclaw/issues/372) — Structured progress protocol | P3-Normal | v0.x+1 | UX improvement for long-running tools; protocol design needed first |
| [#387](https://github.com/qhkm/zeptoclaw/issues/387) — Core templates via Containerfiles/ZeptoCapsules | Unprioritized | Backlog/Experimental | **Strategic pivot signal** — treats coding agents as containerized apps; reduces framework complexity but expands scope debate |

**Emerging Pattern**: ZeptoClaw is positioning as a **"coding agent runtime"** rather than monolithic framework — #387's "just another app on a node" philosophy suggests architectural evolution toward capsule-based isolation.

---

## 7. User Feedback Summary

**Explicit Pain Points** (from issue descriptions):
- Podman rootless development broken (#369) — **enterprise/secure environment blocker**
- Secret leakage risk in config sharing (#373) — **team collaboration friction**
- No progress visibility on long operations (#372) — **UX degradation for async workflows**
- Image handling failures in multimodal loops (#368) — **reliability issue for vision-enabled agents**

**Implicit Signals**:
- Heavy NemoClaw inspiration suggests **competitive/feature parity pressure**
- Zero 👍 reactions across 21 items indicates **low community penetration** or maintainer-dominated development

**Use Case Evolution**: From "personal AI assistant" toward **enterprise-deployable agent infrastructure** with security boundaries and observability.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#287](https://github.com/qhkm/zeptoclaw/pull/287) | 8 days (Mar 9) | **Contributor experience** — without this, PR quality varies | Maintainer review/merge; establishes dev environment contract |
| [#371](https://github.com/qhkm/zeptoclaw/issues/371) | 1 day | **Security gap** — network policy design needs RFC | Maintainer response on scope: per-tool vs. global policy? |
| [#387](https://github.com/qhkm/zeptoclaw/issues/387) | 1 day | **Architecture divergence** — "controversial" per author | Maintainer decision: accept capsule-centric direction or constrain scope? |

**Dependency PR Debt**: 14 automated PRs pending — while low-risk, batch-merging recommended to reduce CI noise and rebase churn.

---

*Digest generated from github.com/qhkm/zeptoclaw activity 2026-03-17 to 2026-03-18.*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-18

## 1. Today's Overview

EasyClaw (also known as RivonClaw) shows **moderate maintenance activity** with 2 items closed in the past 24 hours: one resolved Windows connectivity regression and one merged macOS UI fix. The project released v1.6.8, indicating active patch-level iteration. No new open issues or PRs were created today, suggesting the codebase is in a relatively stable state with maintainers actively closing outstanding items. The dual-naming (EasyClaw/RivonClaw) and Chinese-English bilingual documentation indicate a China-based project with international accessibility goals. Overall health: **stable with responsive maintenance**.

---

## 2. Releases

### [v1.6.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.8) — Latest

| Aspect | Details |
|--------|---------|
| **Type** | Patch release |
| **Notable Addition** | macOS Gatekeeper troubleshooting documentation |
| **Breaking Changes** | None documented |
| **Migration Notes** | N/A — standard patch upgrade |

**Key Documentation Update:** The release notes now include prominent guidance for macOS users encountering the "'RivonClaw' is damaged and can't be opened" Gatekeeper error, with Terminal-based resolution steps. This addresses a common friction point for macOS distribution of unsigned apps.

---

## 3. Project Progress

### Merged/Closed PR Today

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#15](https://github.com/gaoyangz77/rivonclaw/pull/15) | @mylinkedai | **fix: app icon in macOS dock and system tray** | Resolves visual branding inconsistency on macOS; improves native platform integration |

**Technical Advancement:** This fix enhances the application's professional appearance on macOS by ensuring proper icon rendering in both the Dock and system tray—critical for user trust and system integration quality.

---

## 4. Community Hot Topics

### Most Active Discussion: Windows Upgrade Regression

| Issue | Metrics | Analysis |
|:---|:---|:---|
| [#18](https://github.com/gaoyangz77/rivonclaw/issues/18) — *"windows系统，从1.6.8升级到1.7.0后链接不上了"* | 4 comments, 0 reactions, **CLOSED today** | High-priority connectivity regression |

**Underlying Need Identified:** Users expect **seamless version upgrades without configuration loss**. The issue title indicates a critical failure: after upgrading from v1.6.8 → v1.7.0, the application could not establish connections. The screenshot attachment (2361×1355 resolution) suggests detailed error reporting from the user.

**Community Pattern:** This represents a classic "upgrade path fragility" problem—users with working configurations face breakage on update, eroding trust in the release process.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|:---|:---|:---|:---|
| **HIGH** | [#18](https://github.com/gaoyangz77/rivonclaw/issues/18) — Windows connectivity failure post-upgrade (1.6.8→1.7.0) | **RESOLVED** (closed 2026-03-17) | ✅ Fix deployed; issue closed by maintainer |

**Stability Assessment:** One significant regression was reported and **rapidly resolved** (2-day turnaround). The fix appears to have been validated, as the issue was closed without remaining open questions. No new crash reports or stability issues emerged today.

**Notable:** The version numbering discrepancy in the issue (1.6.8 → 1.7.0) versus the released v1.6.8 suggests either: (a) v1.7.0 was briefly available, (b) user confusion, or (c) a pre-release channel. This warrants documentation clarity.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests were opened today.** However, inferred signals from recent activity:

| Signal | Likely Priority | Prediction for Next Version |
|:---|:---|:---|
| macOS code signing/notarization | **HIGH** | Apple Developer ID signing to eliminate Gatekeeper warnings |
| Windows upgrade resilience | **HIGH** | Configuration migration safeguards, backward compatibility tests |
| Cross-platform icon consistency | **MEDIUM** | Unified asset pipeline (addressed in #15) |

**Absent but Expected:** No AI capability expansion issues, API documentation requests, or integration feature discussions were visible—suggesting either satisfied users or underutilized issue tracking for feature requests.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Impact | Frequency Signal |
|:---|:---|:---|
| macOS Gatekeeper blocking | Installation friction, first-run abandonment | **Documented in release notes** = recurring |
| Windows upgrade breakage | Configuration loss, downtime, rollback necessity | One confirmed case, severity HIGH |
| Unsigned app distribution | Security warnings, enterprise deployment barriers | Implicit in macOS documentation |

### Use Cases Inferred
- **Primary:** Desktop AI assistant/connector (implied by "link" terminology in Chinese issue)
- **Environment:** Mixed personal/professional use across macOS and Windows
- **User Profile:** Chinese-speaking technical users comfortable with Terminal workarounds

### Satisfaction Indicators
- ✅ **Positive:** Rapid issue resolution (2 days)
- ⚠️ **Concern:** Version numbering confusion, manual workarounds required for basic installation

---

## 8. Backlog Watch

| Status | Observation |
|:---|:---|
| **No critical backlog identified today** | All recent issues and PRs are closed |
| **Monitoring recommendation** | Track if #18's resolution creates follow-up documentation needs |

### Items to Watch

| Item | Reason | Action Needed |
|:---|:---|:---|
| v1.7.0 availability | Referenced in #18 but no release exists | Clarify version roadmap; document if v1.7.0 was pulled or is upcoming |
| @mylinkedai's contributions | Single external contributor with merged UI fix | Engage for continued macOS polish contributions |

---

*Digest generated from gaoyangz77/easyclaw (RivonClaw) repository data. All links reference `github.com/gaoyangz77/rivonclaw` as the active development location.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*