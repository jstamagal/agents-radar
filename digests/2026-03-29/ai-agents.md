# OpenClaw 生态日报 2026-03-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-29 00:11 UTC

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

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-03-29)

## 1. 今日速览
OpenClaw 项目今日呈现出**极高**的开发与社区活跃度。过去 24 小时内，项目处理了超过 1000 条 Issues 与 PR 的更新（活跃 Issue 444 条，待合并 PR 351 条），显示出社区在 `main` 分支合并后正集中反馈问题。项目发布了 v2026.3.28-beta.1 版本，重点移除了过时的 Qwen 认证方式并清理了旧版配置迁移逻辑。核心议题集中在解决近期 `pi-coding-agent` 0.63.0 升级引发的大规模“认证失败”回归问题，以及针对 Windows 和 Linux 平台客户端功能的推进。

## 2. 版本发布
**v2026.3.28-beta.1 已发布**
- **Breaking Changes**:
    - **Providers/Qwen**: 移除了废弃的 `portal.qwen.ai` OAuth 集成。用户需迁移至 Model Studio，使用命令 `openclaw onboard --auth-choice modelstudio-api-key` 进行重新配置 ([#52709](https://github.com/openclaw/openclaw/pull/52709))。
    - **Config/Doctor**: 放弃对旧版自动配置迁移的支持，意味着后续版本将不再自动处理遗留配置转换，建议用户检查配置文件是否符合最新规范。

## 3. 项目进展
今日合并与待处理的 PR 显示出项目在安全性与多平台支持上的显著进步：
- **安全性强化**: PR [#50181](https://github.com/openclaw/openclaw/pull/50181) 修复了媒体信任绕过漏洞，防止外部插件通过覆盖内置工具名来窃取本地文件（如 `/etc/passwd`），这是今日合并的最关键安全补丁。
- **Windows 生态突破**: PR [#56285](https://github.com/openclaw/openclaw/pull/56285) 为 Windows 实现了基于 PowerShell 的 `exec` 审批白名单，并修复了参数解析中的引号处理问题，大幅提升了 Windows 下的指令执行安全性与可用性。
- **Agent 编排能力**: PR [#56673](https://github.com/openclaw/openclaw/pull/56673) 提出了 `sessions_await` 工具，旨在解决 Orchestrator Agent 无法可靠等待并行子任务完成的问题，提升了多 Agent 协作的效率。

## 4. 社区热点
- **[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)**: 这个月票最高的增强请求（66 👍）今日再次引发热议。社区强烈呼吁补齐 Linux 和 Windows 桌面客户端的短板，以匹配 macOS/iOS/Android 的功能集。
- **[#49971 RFC: Native Agent Identity](https://github.com/openclaw/openclaw/issues/49971)**: 关于引入基于 W3C DID 和 ERC-8004 的原生 Agent 身份验证与信任机制的提案引发了深度讨论，这标志着社区对 AI Agent 安全性与互操作性的关注度正在提升。
- **Auth Regression 系列问题**: 多个与认证失效相关的 Issue（如 [#55867](https://github.com/openclaw/openclaw/pull/55867), [#55909](https://github.com/openclaw/openclaw/pull/55909)）成为焦点，用户普遍反映升级后出现 "No API key for provider" 错误。

## 5. Bug 与稳定性
**严重级 - 现有 Live 环境影响**:
- **Auth Regression (Critical)**: 升级 `pi-coding-agent` 至 0.63.0 后，导致所有通过 HTTP 代理的提供商（Anthropic, OpenRouter, GitHub Copilot 等）在嵌入式运行中报错 "No API key for provider"。([#55867](https://github.com/openclaw/openclaw/pull/55867), [#55909](https://github.com/openclaw/openclaw/pull/55909)) - *有 Fix PR 待合并*。
- **Discord WebSocket 崩溃循环**: v2026.3.24 版本引入的健康监控机制在检测到 stale socket 时触发未捕获异常，导致网关进程每约 35 分钟崩溃一次 ([#54931](https://github.com/openclaw/openclaw/issues/54931))。

**中级 - 功能受阻**:
- **Matrix 插件完全失效**: 因 npm 包中缺失 `matrix_sdk_crypto_wasm_bg.wasm` 文件，导致端到端加密（E2EE）功能彻底不可用 ([#53353](https://github.com/openclaw/openclaw/issues/53353))。
- **Mistral API 422 错误**: `openai-completions` 适配器发送了 Mistral 不支持的参数（如 `max_completion_tokens`），导致所有请求失败 ([#47079](https://github.com/openclaw/openclaw/issues/47079), [#53363](https://github.com/openclaw/openclaw/issues/53363))。 - *有 Fix PR [#56667](https://github.com/openclaw/openclaw/pull/56667) 建议切换至原生 Mistral API*。

## 6. 功能请求与路线图信号
- **Linux 原生客户端**: 随着 PR [#56005](https://github.com/openclaw/openclaw/pull/56005) 提出“为新的 Linux 伴随应用实现原生网关客户端”，Linux 用户的桌面体验似乎已被提上日程，这可能响应了 Issue #75 的长期诉求。
- **Baidu 网络搜索支持**: Issue [#56304](https://github.com/openclaw/openclaw/issues/56304) 提议添加 Baidu 作为 `web_search` 提供商，以优化中文（zh-CN）检索质量。
- **增强型 Memory V2**: Issue [#28930](https://github.com/openclaw/openclaw/issues/28930) 提出了关于记忆机制的深度建议，包括联想遍历和基于遗忘机制的权重管理，显示了用户对长期运行 Agent 的记忆管理有更高层级的需求。

## 7. 用户反馈摘要
- **满意度**: 用户对 Agent 编排工具的期待很高，特别是希望能解决并行子任务的阻塞等待问题（PR #56673 讨论区）。
- **痛点**: Docker 环境下的用户频繁遭遇环境检测失败，例如 Skill 安装时因检查宿主机 PATH 而非沙箱 PATH 导致的误报 ([#29254](https://github.com/openclaw/openclaw/issues/29254))。
- **困惑**: 关于 `openclaw doctor --fix` 生成数千个 `.clobbered.*` 备份文件导致配置目录混乱的投诉较多 ([#56671](https://github.com/openclaw/openclaw/pull/56671))。

## 8. 待处理积压
- **[#75 Linux/Windows Apps](https://github.com/openclaw/openclaw/issues/75)**: 自 2026-01-01 开设，虽有 PR 进展但仍未完全解决，需持续关注。
- **Stale Bug Pile-up**: 存在大量标记为 `stale` 的 Bug 至今未修复，如 TUI 中 `/model` 命令静默失败 ([#29572](https://github.com/openclaw/openclaw/issues/29572))、Workspace skills 静默不加载 ([#29122](https://github.com/openclaw/openclaw/issues/29122)) 等，建议维护者进行一次专项清理。

---

## 横向生态对比

# 个人 AI 智能体开源生态日报（横向对比分析）
**分析日期**: 2026-03-29
**分析师**: AI 智能体技术观察员

---

## 1. 生态全景
个人 AI 助手与自主智能体开源生态今日呈现出**爆发式增长与技术深水区并重**的态势。头部项目 OpenClaw 正经历架构级重构（`pi-coding-agent` 升级），导致连锁反应但也吸引了大量社区贡献；中腰部项目如 NanoClaw 和 IronClaw 正在通过多渠道集成（Telegram, Discord, 飞书）争夺用户触点。同时，**多模态交互**（图片/语音处理）和**企业级安全**（凭证管理、SSRF 防护）已成为全生态的共识性刚需。值得注意的是，针对不同垂直场景（如边缘计算、代码重构、中文优化）的 forks 衍生品正在形成稳定的技术护城河，生态呈现“一超多强，百花齐放”的格局。

---

## 2. 各项目活跃度对比 (2026-03-29)

| 项目 | Issues | PRs | Release | 健康度/状态 | 关词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 444 (活) | 351 (待) | v2026.3.28-beta.1 | 🔴 极高/修复期 | 架构重构, 认证回归, 安全补丁 |
| **NanoBot** | 21 | 38 | 无 (v0.1.4.post6) | 🟠 高/迭代快 | 多渠道, Kimi适配, 搜索标准 |
| **NanoClaw** | 38 | 22 (待) | 无 | 🟠 极高/扩张期 | 多媒体, OneCLI迁移, P2P |
| **Zeroclaw** | 50 | 50 | 无 | 🟢 高/稳健 | 内存修复, 统一包装器, 架构优化 |
| **PicoClaw** | - | 127 | v0.2.4-nightly | 🟢 极高/敏捷 | 安全加固, OpenWrt, 边缘设备 |
| **NullClaw** | - | 8 | 无 | 🟡 中/维护 | Windows修复, 消息防抖 |
| **IronClaw** | 9 | 50 | 无 | 🟠 高/重构 | 安全加固, SSRF防护, Telegram |
| **LobsterAI** | - | 18 | **v2026.3.29** | 🟢 高/稳定 | Hotfix, UI优化, MCP集成 |
| **TinyClaw** | 0 | 15 | 无 | 🟢 优秀/清零 | 技术债清零, Docker优化 |
| **Moltis** | 8 (全关) | 17 (13合) | **4个Hotfix** | 🟢 高/响应快 | ARM64适配, 本地模型超时 |
| **CoPaw** | 39 | 24 | 无 | 🔴 高/瓶颈 | 本地模型, CPU占用, UI争议 |
| **ZeptoClaw** | 1 | 2 (待) | 无 | 🟡 中/修复 | 上下文压缩, 长对话稳定性 |
| **EasyClaw** | 2 (新) | 0 | v1.7.8 | 🟡 低/修正 | 平台兼容性, 百炼API适配 |

---

## 3. OpenClaw 在生态中的定位

*   **生态基石**: OpenClaw 扮演着**“技术定义者”** 的角色。其今日活跃的 Issue 数（444）和 PR 数（351）远超其他项目，确立了其作为上游核心项目的地位。大多数 Fork（如 LobsterAI, IronClaw）仍紧密跟随其代码演进。
*   **技术路线**: 坚定地走 **“全栈通用化 + 企业级安全”** 路线。相较于关注特定平台的 Fork，OpenClaw 更关注底层编排能力（如 PR #56673 并行任务等待）和标准安全模型（W3C DID）。
*   **社区规模**: 社区规模极其庞大，但也伴随着沉重的**历史包袱**。今日大量的“Auth Regression”和“Stale Bug Pile-up”反映了其在巨型社区维护下的稳定性挑战。相比之下，新兴 Fork 项目往往能在特定功能上实现更快的弯道超车。

---

## 4. 共同关注的技术方向

今日多个项目不约而同地涌现出以下共性需求，显示出行业风向：

1.  **即时通讯软件 的深度集成与痛点**
    *   **涉及**: OpenClaw, NanoBot, NanoClaw, IronClaw, CoPaw, ZeptoClaw
    *   **诉求**: Telegram Markdown 渲染不稳定；飞书/Lark 配置卡死；Discord/Signal 渠道扩展。
    *   **趋势**: 解决 IM 渠道的消息格式兼容性和多模态（图片/语音）处理是当前各项目的首要任务。

2.  **对“本地/私有模型” 的深度优化**
    *   **涉及**: NanoBot (Kimi), OpenClaw (Ollama), PicoClaw (LM Studio), CoPaw, Zeroclaw
    *   **诉求**: 修复 `max_tokens` 兼容性；解决本地模型加载慢导致的超时；支持中文搜索。
    *   **趋势**: 降低云模型成本、支持私有化部署已成为核心竞争力。

3.  **内存与长对话稳定性**
    *   **涉及**: Zeroclaw (递归保存内存泄漏), ZeptoClaw (Token溢出崩溃), Moltis (上下文压缩修复)
    *   **诉求**：修复 Agent 在长时间运行中 OOM 或上下文丢失的问题。
    *   **趋势**：随着 Agent 任务变复杂，**“会话管理”** 和 **“记忆机制”** 正成为架构设计的分水岭。

4.  **安全防御**
    *   **涉及**: OpenClaw (媒体信任漏洞), PicoClaw (Agent Shield), Zeroclaw (SSRF防护), IronClaw (信息泄露修复)
    *   **诉求**：防止 Agent 幻觉执行恶意指令，或被诱导访问内网资源。

---

## 5. 差异化定位分析

*   **OpenClaw (全能型航母)**: 适合需要高度定制化、插件生态丰富的大型部署，但用户需承受较高的升级维护成本。
*   **NanoBot (集成连接器)**: 侧重于**多源信息接入**（Teams, iMessage, 搜索引擎），适合作为信息聚合的中枢 Agent。
*   **PicoClaw (边缘/硬件友好)**: 致力于在资源受限设备上运行，是**树莓派/OpenWrt** 用户的最佳选择，对 Docker 和网关配置有深度优化。
*   **LobsterAI (桌面体验优先)**: 基于上游但重注 UI/UX（如 Cmd+K、选中文本浮窗），适合追求**图形化桌面交互**而非 CLI 的个人用户。
*   **Moltis (中文本地化)**: 对百度搜索、MiniMax 等中文生态有专门优化，修复了 ARM64 架构问题，适合国内私有化部署场景。
*   **Zeroclaw (Rust 性能派)**: 使用 Rust 重写，强调**高性能**和**内存安全**，通过统一的 Tool Wrapper 解决了大量架构层面的通用问题。

---

## 6. 社区热度与成熟度

*   **快速迭代期 (高活)**: **OpenClaw, NanoBot, NanoClaw**。代码变更极快，新功能与 Bug 并存，适合追求前沿技术的开发者，但稳定性风险较高。
*   **质量巩固期 (稳健)**: **LobsterAI, Zeroclaw, Moltis**。今日均发布了 Hotfix 版本或关键修复 PR，重点在于解决生产环境的阻碍性 Bug，适合追求稳态运行的企业或个人。
*   **架构重构/迷茫期 (瓶颈)**: **CoPaw, IronClaw**。社区反馈较强烈（如 UI 反对、CPU 占用），正在进行底层逻辑的艰难重构。

---

## 7. 值得关注的趋势信号

1.  **Agent "幻觉" 防护成为标配**
    Zeroclaw 提出引入 HMAC 签名收据（PR #4943），OpenClaw 修复了媒体信任绕过漏洞。这表明行业正在从“让 Agent 能做事”转向“**证明 Agent 做了事且没做坏事**”，**可验证性** 将是下一阶段的关键技术壁垒。

2.  **MCP (Model Context Protocol) 正在重塑插件生态**
    CoPaw 和 LobsterAI 都在重点解决 MCP Server 的集成问题。这预示着 **"MCP 原生"** 的 Agent 将更容易接入外部工具生态，非 MCP 标准的项目可能面临被边缘化的风险。

3.  **"配置热重载" 与 "无感迁移" 是用户体验的决胜点**
    用户对频繁重启、配置文件被覆盖表现出了极大的愤怒。未来能实现**零配置迁移**（如 TinyClaw 的自动迁移脚本）和**运行时热重载**的项目，将在用户留存率上占据优势。

4.  **垂直场景 Fork 的生命力**
    如 **NanoBot** 对多模态通信的专注，以及 **Moltis** 对 ARM64/中文市场的优化，显示出在 OpenClaw 如此庞大的体量下，**针对特定垂直领域做深做透** 的 Fork 项目拥有极强的独立生存能力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-29)

## 1. 今日速览
NanoBot 项目今日处于**极高活跃度**状态。过去 24 小时内共产生了 59 个代码与问题更新（21 条 Issues + 38 条 PRs），显示出强劲的开发迭代势头与社区参与度。核心开发重点集中在**多渠道集成**（特别是 Microsoft Teams 和 iMessage）、**Agent 运行时逻辑优化**以及**特定模型（如 Kimi、MiniMax）的兼容性修复**。尽管没有发布新版本，但大量针对 `v0.1.4.post6` 的 Bug 修复表明社区正在积极完善当前版本的稳定性。

## 2. 版本发布
**无新版本发布**
当前最新版本仍为 `v0.1.4.post6`。鉴于今日大量针对该版本的 Bug 修复 PR（如 #2580, #2598）已提交，预计维护者将在近期累积修复后推出 `post7` 或新的补丁版本。

## 3. 项目进展
今日合并与关闭的 PR（以及进入审查的高质量 PR）显示出项目在以下方面取得了实质性进展：

*   **Agent 核心逻辑增强**：
    *   **空响应修复**：PR [#2580](https://github.com/HKUDS/nanobot/pull/2580) 已关闭，它修复了 Agent 在工具执行完毕后返回空内容导致回复生硬的问题，增加了重试机制。
    *   **Kimi 思考模式兼容**：PR [#2598](https://github.com/HKUDS/nanobot/pull/2598) 针对 Issue [#2579](https://github.com/HKUDS/nanobot/issues/2579) 提出了修复，确保 Kimi K2.5 模型在思考模式下工具调用不报错。
    *   **Session 索引修复**：PR [#2597](https://github.com/HKUDS/nanobot/pull/2597) 修复了 `manager.py` 中的 off-by-one 错误，提升了会话处理的稳定性。
*   **通信渠道扩展**：
    *   **Microsoft Teams 集成**：PR [#2600](https://github.com/HKUDS/nanobot/pull/2600) 重新提交了 Teams 集成方案，基于最新 nightly 代码进行了重构。
    *   **iMessage 支持**：PR [#2539](https://github.com/HKUDS/nanobot/pull/2539) 提出了基于 Photon 的本地/远程 iMessage 集成方案，极具创新性。
*   **Telegram 体验优化**：
    *   合并了 PR [#2577](https://github.com/HKUDS/nanobot/pull/2577)，使工具调用提示静默发送，减少对用户的打扰。
    *   PR [#2593](https://github.com/HKUDS/nanobot/pull/2593) 和 [#2594](https://github.com/HKUDS/nanobot/pull/2594) 正在优化 Telegram 消息渲染和链接预览功能。

## 4. 社区热点
今日讨论热度最高的议题集中在**生态扩展标准**与**特定模型适配**：

*   **搜索提供商纳入标准讨论**：Issue [#2572](https://github.com/HKUDS/nanobot/issues/2572)
    *   **热度**：6 条评论
    *   **焦点**：社区正在热烈讨论在引入新搜索提供商（如已支持的 Brave, Tavily 等）时应遵循的代码标准和维护门槛。这是项目走向成熟、防止代码碎片化的重要信号。
*   **Kimi K2.5 思考模式报错**：Issue [#2579](https://github.com/HKUDS/nanobot/issues/2579)
    *   **热度**：迅速获得 PR #2598 修复
    *   **焦点**：月之暗面 Kimi 模型的 `reasoning_content` 字段处理问题，反映出社区对新一代“推理模型”的适配需求强烈。
*   **WhatsApp 语音消息支持**：Issue [#2152](https://github.com/HKUDS/nanobot/issues/2152)
    *   **热度**：2 个👍
    *   **焦点**：用户提供了完整的 Fish Audio 集成方案，希望能将 STT/TTS 功能合并进主线，体现了用户对多模态交互的渴望。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多（约 8-9 个），主要集中在 `v0.1.4.post6` 版本的**回归问题**：

*   **[严重] OpenAI 兼容性报错**：Issue [#2462](https://github.com/HKUDS/nanobot/issues/2462)
    *   问题：使用弃用的 `max_tokens` 导致新版本 OpenAI 模型报错。
    *   状态：Issue 已关闭，推测代码中已修复（或将包含在下个版本）。
*   **[中等] Github Copilot 登录失败**：Issue [#2573](https://github.com/HKUDS/nanobot/issues/2573)
    *   问题：OAuth 登录出现 "bad request"。
    *   状态：已确认是新版本引入的 Bug，待修复。
*   **[中等] Telegram Markdown 渲染不稳定**：Issue [#2568](https://github.com/HKUDS/nanobot/issues/2568)
    *   问题：更新后 Markdown 格式时好时坏。
    *   状态：待解决，与 PR #2593 的渲染逻辑修改有关。
*   **[低] CLI 终端重复输出**：Issue [#2591](https://github.com/HKUDS/nanobot/issues/2591)
    *   问题：思考模式下终端出现大量 ANSI 转义符残留和重复输出。
    *   状态：Open。
*   **[架构] Matrix E2EE 认证问题**：Issue [#1681](https://github.com/HKUDS/nanobot/issues/1681)
    *   状态：已有修复 PR [#2596](https://github.com/HKUDS/nanobot/pull/2596) 提交。

## 6. 功能请求与路线图信号
从 Issues 中可以捕捉到潜在的开发方向：

*   **原生 Subagent 支持**：Issue [#2599](https://github.com/HKUDS/nanobot/issues/2599) 用户请求官方文档说明如何配置多智能体协作，这表明 Multi-Agent 架构的使用场景正在增加。
*   **Heartbeat 机制优化**：PR [#1443](https://github.com/HKUDS/nanobot/pull/1443) 提议将心跳推理静默化，避免向用户发送无意义的“无事发生”状态消息。这将显著提升用户体验。
*   **记忆框架重构**：PR [#2515](https://github.com/HKUDS/nanobot/pull/2515) 提议引入支持 Mem0/Graphiti 的可插拔记忆框架，这是对长期记忆能力的一次重大架构升级尝试。

## 7. 用户反馈摘要
*   **痛点**：用户对 **v0.1.4.post6** 版本表达了较多不满，主要集中在**兼容性回退**（如 MiniMax、Ollama Cloud、Copilot 登录失效）和**Telegram 渲染质量下降**。建议团队在发布 `post7` 前进行更全面的回归测试。
*   **场景**：树莓派用户尝试将 NanoBot 作为家庭中控，但在 Ollama 局域网配置上遇到 404 问题；用户希望在 Telegram 上处理更长的消息，但受到流式传输长度的限制。
*   **赞赏**：用户对 Agent 能够修复自身 Bug（Issue #2580）以及快速响应社区反馈表示认可。

## 8. 待处理积压
*   **长期遗留问题**：
    *   **Fallback 模型失效** (Issue [#1121](https://github.com/HKUDS/nanobot/issues/1121))：当主模型超时/503时，备用模型未被触发。这是一个高可用性相关的严重 Bug，自 2 月末提出至今未解决。
    *   **Matrix 长期 E2EE 故障** (Issue [#1681](https://github.com/HKUDS/nanobot/issues/1681))：虽有 PR，但该问题困扰用户已久。
*   **讨论中的提案**：
    *   **搜索提供商标准** (Issue [#2572](https://github.com/HKUDS/nanobot/issues/2572))：需要维护者介入制定明确的准则，以指导未来的贡献。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-29)

## 1. 今日速览
今日 Zeroclaw 项目处于**高度活跃**状态，过去 24 小时内处理了 100 个代码与问题变更（50 Issues + 50 PRs），显示出强劲的开发动力。核心开发重点集中在**内存管理优化**（修复递归保存导致的内存泄漏 Bug）、**工具执行安全性**（引入 HMAC 收据防幻觉）以及**架构重构**（大量 PR 致力于应用统一的工具包装器）。虽然无新版本发布，但多个关键 PR 的合并表明项目正在为下一稳定版本做准备，特别是在修复历史遗留的配置文档不一致问题上迈出了重要一步。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日合并或关闭的重要进展如下：

*   **【核心修复】停止内存递归保存**：
    *   **PR #4936**: [OPEN] 修复了当 `auto_save` 开启时，`memory_recall` 工具输出的 `[Memory context]` 被当作新记忆保存回数据库，导致记忆指数级增长直至内存耗尽的问题。此修复通过在保存逻辑中跳过带有特定前缀的 Blob 来解决。
    *   关联 Issue #4916 描述了此严重的“雪球效应”。
*   **【架构重构】统一工具包装器**：
    *   **PR #4949, #4948, #4947, #4944**: 一系列 PR 正在对核心工具进行重构。开发者正在移除工具内部硬编码的 `is_rate_limited()` 和 `is_path_allowed()` 检查，转而使用组合模式统一应用 `RateLimitedTool` 和 `PathGuardedTool`。这将使未来的工具开发更安全、代码更整洁。
*   **【文档/配置】修复配置键名不一致**：
    *   **PR #4937**: [CLOSED] 接受 `[channels.xxx]` 作为主要 TOML 配置键，并将 `[channels_config.xxx]` 设为别名。这解决了 README 文档示例与实际代码要求不一致导致用户无法配置频道的长期痛点（Issue #4877 部分相关）。

## 4. 社区热点
*   **🔥 Matrix 频道体验追踪**
    *   [Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657): 作为 "Umbrella issue"，该帖子汇总了 Matrix 集成在 v0.6.2 版本中的所有摩擦点，包括 E2EE 密钥重试循环、线程上下文丢失等。评论数最高（9），反映了社区对 Matrix 适配稳定性的高度关注。
*   **🔥 工具幻觉检测**
    *   [PR #4943](https://github.com/zeroclaw-labs/zeroclaw/pull/4943): 提出为所有工具执行增加 HMAC-SHA256 签名收据，以密码学方式证明工具确实被执行，防止 LLM “幻想”自己执行了操作。这是提升 Agent 可信度的重要特性。
*   **🔥 GitHub Copilot 集成**
    *   [Issue #4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851): 用户询问如何配置 GitHub Copilot，指出虽有相关提交但缺失文档。[PR #4941](https://github.com/zeroclaw-labs/zeroclaw/pull/4941) 随后跟进补全了指南，显示了社区对低成本模型选项的需求。

## 5. Bug 与稳定性
以下为今日报告的关键 Bug，按严重程度排序：

*   **[S1 - Workflow Blocked] rumqttc 依赖缺失**
    *   **Issue #4946**: v0.6.66 版本中缺少 `rumqttc` 依赖，导致 MQTT 频道编译失败，用户无法使用。
    *   状态: 待修复。
*   **[S1 - Workflow Blocked] Webhook 端点无法执行 MCP 工具**
    *   **Issue #4893**: 通过 `/webhook` 端点调用时，MCP 工具无法执行，但内置工具正常。
    *   状态: 已关闭（疑似已修复或通过配置解决）。
*   **[S2 - Degraded] 自动保存导致内存溢出**
    *   **Issue #4916**: 记忆递归保存问题，导致 `brain.db` 急速膨胀。
    *   状态: 已有 Fix PR (#4936) 待合并。
*   **[S2 - Degraded] OpenAI-Codex 渲染异常**
    *   **Issue #4863**: 使用 `openai-codex` 提供商时结果无法正确渲染，且缺乏文档。
    *   状态: 待处理。

## 6. 功能请求与路线图信号
*   **SSRF 防护绕过**: [PR #4945](https://github.com/zeroclaw-labs/zeroclaw/pull/4945) 响应了 [Issue #4868](https://github.com/zeroclaw-labs/zeroclaw/issues/4868) 的请求，为 `http_request` 工具添加了 `allowed_private_hosts` 配置，允许用户显式授权访问内网服务（Home Assistant 等），这对智能家居场景至关重要。
*   **配置热重载**: 旧 Issue [Issue #3569](https://github.com/zeroclaw-labs/zeroclaw/issues/3569) 被标记关闭，虽然日志显示是 CLOSED，但关于 `zeroclaw config reload` 的讨论显示出用户对不重启服务更新配置的强烈需求。
*   **Feishu/Lark 增强**: [PR #4950](https://github.com/zeroclaw-labs/zeroclaw/pull/4950) 正在修复飞书频道仅调用 LLM 而非 Agent 的问题，并添加 `mention_only` 配置，表明企业级集成需求正在增加。

## 7. 用户反馈摘要
*   **文档困惑**: 用户反馈文档与实际配置键名严重不符（如 `[channels.xxx]` vs `[channels_config.xxx]`），导致按文档操作后频道无法启动。感谢 PR #4937 解决了此问题。
*   **内存焦虑**: 树莓派用户反馈在低端设备上构建易 OOM，且 Markdown 记忆文件会无限增长，缺乏自动清理机制。
*   **安全沙盒过严**: 开发者反馈 Shell 安全策略过于严格，连 `>/dev/null` 这类标准的抑制输出操作都被拦截，影响了脚本编写的流畅性。

## 8. 待处理积压
*   **Issue #4656**: CI 的 Clippy 检查未包含 `--all-features`，导致 Matrix 等可选模块的警告长期漏网，影响代码库长期健康。
*   **Issue #4704**: 树莓派部署指南缺失，且有内存限制问题，阻碍了边缘计算设备的用户群体。
*   **Issue #4832**: 高熵字符串检测导致的误伤（如 MD5 文件名被脱敏），用户请求增加禁用此功能的配置项。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

你好！我是 AI 智能体与个人 AI 助手领域的开源项目分析师。根据 **PicoClaw (sipeed/picoclaw)** 2026年3月29日的 GitHub 数据，我为您整理了以下项目动态日报。

---

## 📊 PicoClaw 项目动态日报 | 2026-03-29

### 1. 今日速览
PicoClaw 项目今日处于**极高活跃度**状态，社区响应迅速。过去 24 小时内共处理了 **127 条** 更新（Issues + PRs），其中约 57% 的 PR 已成功合并或关闭，显示出强大的代码吞吐能力。最新的 **Nightly (v0.2.4-nightly)** 版本已发布，主要聚焦于 Bug 修复、安全性加固以及多渠道（Telegram, Discord, 飞书）的稳定性提升。值得注意的是，社区对“工具调用安全”和“多智能体协作”的讨论热度显著上升。

### 2. 版本发布
**[Nightly Build] v0.2.4-nightly.20260328 (60d7ec20)**
*   **发布时间**: 2026-03-28
*   **状态**: 自动化构建（可能不稳定，请谨慎使用）
*   **主要内容**:
    *   包含了自 `v0.2.4` 以来的最新主线代码修复。
    *   建议关注本次构建中关于**工具调用 JSON 序列化**的修复以及对严格 OpenAI 兼容 API 的适配。
*   **Full Changelog**: [v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

### 3. 项目进展
今日有大量 PR 被合并或正在积极推进中，项目在以下方面取得了实质性进展：

*   **🛡️ 安全性显著增强**:
    *   **[PR #2138]** (OPEN) 引入了类似 "Agent Shield" 的安全防护机制，为 Agent 执行过程增加了一层安全护盾，防止恶意指令执行。
    *   **[Issue #1525]** (CLOSED) 确认将 `exec.allow_remote` 默认值设为 `false`，从配置层面降低了远程命令执行的风险。
    *   **[Issue #1526]** (CLOSED) 修复了受限模式下仍可通过符号链接逃逸工作区的严重安全漏洞。

*   **🔧 核心架构与兼容性修复**:
    *   **[PR #2128]** (OPEN) 修复了工具调用参数的 JSON Schema 验证问题，确保与 LM Studio 等严格遵循 OpenAI 标准的提供者兼容。
    *   **[PR #2133]** (OPEN) 修正了 `model_not_found` 错误的分类逻辑，优化了重试与故障转移机制。
    *   **[PR #1460]** (OPEN) 修复了工具调用序列化时的空 `content` 字段问题，解决了部分 Provider 拒绝请求的情况。

*   **🌐 渠道与配置优化**:
    *   **[PR #2024]** (OPEN) 解决了 Discord、Telegram 等渠道 Token 在 Web 配置界面无法持久化的回归问题。
    *   **[PR #2130]** (CLOSED) 新增 **OpenWrt LuCI 界面**，极大地简化了在路由器上部署和管理 PicoClaw 的难度。

### 4. 社区热点
以下 Issues 在过去 24 小时内引发了最多的讨论和社区关注：

*   **🔥 [Issue #1161] [CLOSED] - 如何正确配置本地 Ollama 模型？**
    *   **热度**: 18 条评论
    *   **内容**: 用户反馈 Agent 启动但无输出。经社区排查，这通常与模型兼容性或工具调用格式有关。
    *   **链接**: [sipeed/picoclaw#1161](https://github.com/sipeed/picoclaw/issues/1161)

*   **🔥 [Issue #2107] [CLOSED] - 虚假的安全拦截报告**
    *   **热度**: 14 条评论
    *   **内容**: 用户在调用工具时被错误的 "Command blocked by safety guard" 阻止。
    *   **链接**: [sipeed/picoclaw#2107](https://github.com/sipeed/picoclaw/issues/2107)

*   **🔥 [Issue #1941] [CLOSED] - 配置文件被清空**
    *   **热度**: 12 条评论
    *   **内容**: Telegram 渠道下配置意外丢失的严重 Bug，现已关闭修复。
    *   **链接**: [sipeed/picoclaw#1941](https://github.com/sipeed/picoclaw/issues/1941)

### 5. Bug 与稳定性
今日报告的关键 Bug 按严重程度排序：

1.  **[CRITICAL] [Issue #2105] Gateway 启动错误** (OPEN)
    *   **描述**: 新用户首次安装时显示 Gateway 无法启动，且无 PID。
    *   **影响**: 阻断新用户上手。
    *   **链接**: [sipeed/picoclaw#2105](https://github.com/sipeed/picoclaw/issues/2105)

2.  **[HIGH] [Issue #2001] v0.2.4 空闲时 CPU 占用过高** (OPEN)
    *   **描述**: 升级到 v0.2.4 后，在 FreeBSD 系统上进程 CPU 占用异常。
    *   **状态**: 待修复，这是一个性能回归问题。
    *   **链接**: [sipeed/picoclaw#2001](https://github.com/sipeed/picoclaw/issues/2001)

3.  **[MEDIUM] [Issue #2136] 工具调用提取逻辑缺陷** (OPEN)
    *   **描述**: `tool_call_extract.go` 中的逻辑存在缺陷，导致工具调用失败。
    *   **状态**: 已有相关 PR (#1460, #2128) 正在尝试解决序列化格式问题。
    *   **链接**: [sipeed/picoclaw#2136](https://github.com/sipeed/picoclaw/issues/2136)

4.  **[MEDIUM] [Issue #2052/2080] Windows/Android Termux 环境兼容性**
    *   **描述**: Windows QQ 渠道无法使用；Android Termux 下飞书 Web 配置报错。
    *   **链接**: [#2052](https://github.com/sipeed/picoclaw/issues/2052) | [#2080](https://github.com/sipeed/picoclaw/issues/2080)

### 6. 功能请求与路线图信号
从 Issues 和 PRs 中洞察到的未来开发方向：

*   **🤖 多智能体协作**: **[PR #1940]** (OPEN) 正在恢复并增强团队协作工具，将其与新的 Phase 1 Agent Refactor (SubTurn) 机制集成，标志着 **Multi-Agent Collaboration** 是下一阶段的核心重点。
*   **📁 本地视觉能力**: **[PR #2116]** (OPEN) 提议添加 `load_image` 工具，使 Agent 能够通过视觉模型分析本地文件系统中的图片。
*   **🖥️ OpenWrt 生态**: **[PR #2130]** 表明项目正积极拥抱边缘设备，LuCI 界面的加入将使路由器成为 PicoClaw 的理想载体。
*   **📱 实时任务反馈**: **[Issue #2137]** 提议通过消息编辑和表情反应工具在聊天中展示实时的任务列表，解决 Agent 执行长任务时“黑盒”无反馈的用户痛点。

### 7. 用户反馈摘要
*   **痛点**: **配置管理**是最大的痛点。多个 Issue 反馈 Web UI 配置不生效、Token 丢失或配置被重置。**安全拦截过于激进**（如 Issue #2107）也影响了使用体验。
*   **场景**: 用户对 **本地模型 (Ollama)** 和 **即时通讯软件集成**（特别是 Telegram 和飞书）有极高的需求。
*   **环境兼容性**: 用户尝试在 diverse environments (FreeBSD, Windows, OpenWrt, Termux) 上部署，遇到了各种环境特定的 Bug，说明项目跨平台的稳定性仍需打磨。

### 8. 待处理积压
*   **[Issue #1936] - Termux 环境下 Telegram 失败**: 已存在一段时间且尚未解决，Termux 作为移动端开发环境，其重要性不容忽视。
*   **[Issue #1132] - OpenWrt 适配建议**: 虽然已经有 PR (#2130) 提交了 LuCI 界面，但核心服务的系统适配仍需持续关注。

---
*数据来源: GitHub.com/sipeed/picoclaw | 分析日期: 2026-03-29*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-29)

## 📊 今日速览
NanoClaw 项目今日呈现**极高活跃度**，共处理了 38 个 Issue 和 PR 的更新，是典型的功能爆发期。项目正在进行大规模的**多渠道集成与架构重构**，重点涉及 Dashboard 监控面板、Discord/Signal/Local-Chat 等新通信渠道接入，以及媒体处理能力的增强。值得关注的是，虽然新功能 PR 繁多（22 个待合并），但安全与架构迁移相关的 Issues 显示出项目正在为更长远的企业级应用（如 OneCLI 迁移）做准备，且存在部分架构层面的技术债务。今日无新版本发布。

---

## 🚀 版本发布
*无新版本发布。*

---

## 📈 项目进展 (重要合并)
今日共合并/关闭了 10 个 PR，主要集中在运维修复和基础设施完善上：

*   **[#1523](https://github.com/qwibitai/nanoclaw/pull/1523)**: **修复 Apple Container 网络与环境挂载** (@gavrielc)
    *   修复了在 Apple Container VMs 中无法识别 `host.docker.internal` 的问题，改用网桥接口检测。
    *   将凭证代理绑定地址修改为 `0.0.0.0`，确保跨容器通信正常。
*   **[#1521](https://github.com/qwibitai/nanoclaw/pull/1521)**: **新增本地聊天渠道** (@javexed) [CLOSED]
    *   虽然此 PR 在列表中标记为关闭，但作为功能合并，它引入了基于 PWA 的本地聊天界面，允许用户在不依赖外部服务的情况下通过浏览器与 Agent 交互。
*   **[#1525](https://github.com/qwibitai/nanoclaw/pull/1525)**: **新增开发服务器配置** (@thamam)
    *   合并了 `.claude/launch.json`，标准化了 `npm run dev` 和 `npm run auth` 的启动配置，改善了开发者体验。
*   **[#1115](https://github.com/qwibitai/nanoclaw/pull/1115)**: **修复会话自愈与 IPC 权限** (@Nitrousbob) [CLOSED]
    *   解决了容器以非 root 用户运行时因 IPC 文件权限导致的静默失败问题，提升了系统的稳定性。

---

## 🔥 社区热点
今日讨论和代码提交主要集中在**可视化管理**和**多媒体交互**上：

1.  **[#1514 / #1524](https://github.com/qwibitai/nanoclaw/pull/1514)**: **Web Dashboard 的竞赛**
    *   **现象**: 出现了两个关于 Web Dashboard 的 PR。#1514 提供了全面的状态监控（服务、任务、消息量），而 #1524 特别强调了 **Notion 连接状态**的集成。
    *   **诉求**: 用户和贡献者迫切需要一个可视化的界面来监控 Agent 状态，而不仅仅是依赖命令行。
2.  **[#1526](https://github.com/qwibitai/nanoclaw/pull/1526) & [#1507](https://github.com/qwibitai/nanoclaw/pull/1507)**: **多媒体内容获取**
    *   **WhatsApp**: #1526 提出了解决 Agent 无法查看 WhatsApp 图片/语音的方案。
    *   **Telegram**: #1507 修复了 Telegram 媒体文件仅显示占位符而非下载实际文件的问题。
    *   **趋势**: 多模态交互（图片、语音）是当前社区的核心需求。

---

## 🐛 Bug 与稳定性
今日报告的安全与稳定性问题较为严峻，涉及凭证管理与 SSL 证书：

*   **🔴 [高危] [#1503](https://github.com/qwibitai/nanoclaw/issues/1503)**: **官网 SSL 证书无效**
    *   状态: Open
    *   影响: 阻止用户访问官网文档，影响项目外部形象。
    *   修复: 尚未分配，需运维介入。
*   **🟠 [中危] [#1500](https://github.com/qwibitai/nanoclaw/issues/1500)**: **Gmail/Calendar OAuth 凭证直挂风险**
    *   状态: Open (已有相关迁移 PR #1520)
    *   风险: 长期 Token 直接挂载进容器，若 Agent 遭受提示词注入攻击，可能导致凭证泄露。
    *   修复计划: PR #1520 正在尝试将凭证迁移至 OneCLI Vault 以解决此问题。
*   **[#1518](https://github.com/qwibitai/nanoclaw/pull/1518)**: **非自回显渠道消息丢失**
    *   部分渠道（Telegram, Slack 等）的机器人回复未被存储到数据库，导致历史记录缺失。正在修复中。

---

## 🗺️ 功能请求与路线图信号
从活跃的 PR 和 Issues 中可以看出项目的下一步方向：

1.  **渠道扩展**:
    *   **[#1121](https://github.com/qwibitai/nanoclaw/pull/1121)**: **Signal 渠道** - 实现了基于 Signal 的消息接入。
    *   **[#1517](https://github.com/qwibitai/nanoclaw/pull/1517)**: **Discord 渠道** - 支持图片附件和 @mention 交互。
    *   **[#1516](https://github.com/qwibitai/nanoclaw/pull/1516)**: **P2P 互联** - 允许 NanoClaw 实例之间直接通信。
2.  **架构升级 (OneCLI)**:
    *   **[#1511](https://github.com/qwibitai/nanoclaw/issues/1511)**: 讨论用 OneCLI Agent Vault 替换旧的 `credential-proxy`。这是重大的架构变更，意味着项目将统一凭证管理标准。
3.  **技能系统增强**:
    *   **[#1509](https://github.com/qwibitai/nanoclaw/pull/1509)**: 支持组级别的本地技能（Group-local skills），允许不同群组加载特定的定制技能，而不影响全局。

---

## 🗣️ 用户反馈摘要
*   **痛点**: *“WhatsApp 发送的图片 Agent 看不到”* ([#1522](https://github.com/qwibitai/nanoclaw/issues/1522))。这反映了当前处理非文本消息流的短板，用户希望 Agent 能像处理文件一样处理“媒体对象”。
*   **安全担忧**: 用户在 Issue [#1500](https://github.com/qwibitai/nanoclaw/issues/1500) 中指出了直接挂载 OAuth Token 的安全隐患，显示出社区对于 AI Agent 安全隔离的高度关注。

---

## 📦 待处理积压
提醒维护者关注以下长期未决或影响重大的议题：

*   **[#1512](https://github.com/qwibitai/nanoclaw/issues/1512)**: **上游安全修复合并 (254 commits behind)**
    *   虽然 Issue 已关闭，但提示项目落后上游 NanoClaw 254 个提交。建议尽快审查并 Cherry-pick 其中的关键安全修复（特别是命令注入验证），以避免已知安全漏洞。
*   **[#1510](https://github.com/qwibitai/nanoclaw/issues/1510)**: **每周上游与依赖审查**
    *   这是一个周期性的运维任务，需确保持续执行以防止依赖老化。

---
**分析总结**: NanoClaw 正处于功能快速迭代期，生态繁荣（多渠道、多技能），但需警惕随之而来的安全维护负担（如凭证管理、SSL 证书）和上游版本滞后问题。建议优先处理安全相关 Issue，并在 Dashboard 功能上收敛重复的 PR。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-03-29)

**分析师**: AI 开源项目智能体
**报告日期**: 2026-03-29
**数据来源**: github.com/nullclaw/nullclaw

---

### 1. 今日速览
NullClaw 项目在过去 24 小时内保持了极高的开发活跃度，共收到 8 条 PR 提交，显示出核心团队正在积极优化核心功能并拓展边界。今日主要聚焦于 **Windows 平台兼容性的修复**（特别是 WebSocket 连接稳定性）以及 **CLI 用户体验的升级**（模型选择、技能安装）。同时，社区提出了集成微信生态的强烈需求，引发了关于第三方插件集成的讨论。整体来看，项目正处于快速迭代期，在修复已知回归问题的同时，大力丰富插件与模型管理能力。

### 2. 版本发布
*过去 24 小时内无新版本发布。*
*注：鉴于当前有多个针对二进制分发和关键 Bug 修复的 PR 处于待合并状态，预计近期可能会有维护版本发布。*

### 3. 项目进展
今日共有 8 个 PR 处于活跃状态（其中 1 个已关闭），主要集中在以下方向：

*   **关键 Bug 修复 (Windows)**: 针对 Windows 原生环境下 WebSocket 连接立即断开的问题 ([#739](https://github.com/nullclaw/nullclaw/issues/739))，提交了修复 PR [#742](https://github.com/nullclaw/nullclaw/pull/742)。该 PR 通过引入 vendor 依赖修复了 code 1006 错误，对 Windows 用户至关重要。
*   **分发流程优化**: PR [#738](https://github.com/nullclaw/nullclaw/pull/738) 提议改进 Windows 二进制打包方式，将文件打包为 zip 并内置为 `nullclaw.exe`，解决了当前工具下载后需手动重命名的问题，这将显著降低新用户的上手门槛。
*   **模型与交互增强**:
    *   PR [#727](https://github.com/nullclaw/nullclaw/pull/727) 引入了交互式多 Provider 模型选择器，支持在 Telegram/Discord 等路由会话中通过按钮切换模型。
    *   PR [#725](https://github.com/nullclaw/nullclaw/pull/725) 移除了模型列表获取的上限（20个），并优化了排序逻辑（免费模型优先），提升了模型配置向导的体验。
*   **技能系统扩展**: PR [#735](https://github.com/nullclaw/nullclaw/pull/735) 新增了通过 URL 直接发现和安装技能的功能，支持 `.well-known` 协议，这意味着未来用户无需 Git 仓库即可一键安装 Web 技能。

### 4. 社区热点
*   **[Issue #714: Support WeChat Plugin Integration](https://github.com/nullclaw/nullclaw/issues/714)**
    *   **热度**: 🔥 7 条评论，过去 24 小时更新
    *   **核心诉求**: 用户强烈要求 NullClaw 接入官方微信插件。由于微信在中国及东南亚拥有庞大的用户群，且其他竞品 Fork 已支持该功能，社区呼吁官方版本跟进以避免生态流失。
*   **[PR #676: Debounce rapid-fire text](https://github.com/nullclaw/nullclaw/pull/676)**
    *   **热度**: 💬 持续更新中
    *   **讨论点**: 针对 Telegram、Discord 和 CLI 的消息入站防抖功能。该功能旨在防止 AI 被用户连续的短消息打断，提升交互的连贯性。

### 5. Bug 与稳定性
*   **[严重] WebSocket 立即断连**
    *   **详情**: [#739](https://github.com/nullclaw/nullclaw/issues/739) 报告在 Windows 原生环境下，WebSocket 连接建立后会因 1006 错误立即断开。
    *   **状态**: 修复方案已提交 ([#742](https://github.com/nullclaw/nullclaw/pull/742))，待合并。
*   **[中等] 下载文件命名繁琐**
    *   **详情**: [#737](https://github.com/nullclaw/nullclaw/issues/737) 指出通过 `eget` 下载的 Windows 二进制文件带有平台后缀（如 `nullclaw-windows-x86_64.exe`），导致无法直接作为 CLI 工具使用。
    *   **状态**: 解决方案已提出 ([#738](https://github.com/nullclaw/nullclaw/pull/738))，计划通过 zip 打包优化。

### 6. 功能请求与路线图信号
*   **微信生态接入**: 基于 [#714](https://github.com/nullclaw/nullclaw/issues/714) 的讨论，这是目前呼声最高的功能。考虑到竞品已实现，建议维护者评估将其纳入下一版本的里程碑。
*   **Web 技能发现**: PR [#735](https://github.com/nullclaw/nullclaw/pull/735) 显示项目正在构建更开放的插件生态，支持从 Web 源直接安装技能，预示着未来 NullClaw 的技能分发将去中心化。

### 7. 用户反馈摘要
*   **痛点**: Windows 用户的体验仍有待提高，从连接不稳定 ([#739](https://github.com/nullclaw/nullclaw/issues/739)) 到安装包命名不规范 ([#737](https://github.com/nullclaw/nullclaw/issues/737))，均反映了平台特定工具链的细节缺失。
*   **场景**: 用户尝试在 Windows 本地搭建 Gateway 并通过 WebSocket 连接，这是进行本地开发或集成的典型场景。

### 8. 待处理积压
*   **长期活跃 PR**: PR [#676](https://github.com/nullclaw/nullclaw/pull/676) (消息防抖) 创建于 3 月 21 日，至今仍处于 Open 状态。该功能涉及多个通讯平台的交互逻辑，建议优先合并以提升核心交互体验。
*   **文档补全**: PR [#736](https://github.com/nullclaw/nullclaw/pull/736) 正在补充插件异步登录的文档，这对于外部开发者开发合规的插件（如需扫码登录的适配器）至关重要，建议尽快合并。

---
*日报生成基于 2026-03-29 的 GitHub 快照数据。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 - 2026-03-29

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度。过去 24 小时内共有 50 条 PR 更新，代码提交量大，涉及多个核心架构的调整；Issue 处理方面共录得 9 条更新，其中 4 条高危/中危 Bug 已确认为 CLOSED。社区讨论焦点集中在**安全性加固**与**特定通道（Telegram/Feishu）的稳定性**上。目前代码库处于剧烈变动期，包含多个 XL 级别的架构重构 PR 正在进行中，建议关注潜在的合并冲突与测试覆盖。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日社区贡献者与核心团队在代码质量与架构演进上取得了显著进展：

*   **安全性大幅增强**：已合并 4 个与安全相关的 Issue（#1702, #1443, #1303, #1444），主要解决了**数据库错误信息泄露**、**OAuth 验证过于宽松**以及**WASM 工具 Schema 暴露**等中高危漏洞。
*   **本地网络支持**：PR #1696 增加了 `LLM_ALLOW_LOCAL_NETWORK` 配置，允许用户在局域网内部署自托管 LLM（如 Ollama），解决了 SSRF 防护带来的网络隔离痛点。
*   **配置系统优化**：PR #1719 正在优化 API 错误处理，防止后端错误细节泄露给客户端；同时 PR #1704 进一步规范了贡献指南，提升了代码库的长期可维护性。

## 4. 社区热点
今日讨论热度最高的话题主要集中在集成体验与功能请求上：

*   **Telegram Bot 轮询失败** ([#1676](https://github.com/nearai/ironclaw/issues/1676))
    *   **状态**: OPEN
    *   **热度**: 10 条评论
    *   **核心诉求**: 用户强烈反映 HTTP Tool 路由错误导致 Telegram Bot 无法正常自动拉取消息，对比 "OpenClaw" 的完美表现，IronClaw 的该功能存在严重回归，亟待修复。
*   **飞书/Lark 配置卡死** ([#1673](https://github.com/nearai/ironclaw/issues/1673))
    *   **状态**: OPEN
    *   **热度**: 1 👍
    *   **核心诉求**: 用户反馈在配置飞书应用凭证后，系统一直停留在 "Awaiting Pairing" 状态，未弹出 Pairing Code，导致流程无法闭环。
*   **配置热重载请求** ([#1119](https://github.com/nearai/ironclaw/issues/1119))
    *   **状态**: OPEN
    *   **核心诉求**: 社区呼吁在重载配置前统一配置来源，以解决 `config set` 和通道开关的可靠性问题。

## 5. Bug 与稳定性
今日报告与修复的稳定性问题如下（按严重程度排序）：

*   **[HIGH] 数据库错误详情泄露** ([#1702](https://github.com/nearai/ironclaw/issues/1702)) - **CLOSED**
    *   API 直接将数据库异常格式化返回给客户端，存在信息泄露风险。*已通过 CI Review 修复。*
*   **[MEDIUM] WASM 工具 Schema 不匹配** ([#1303](https://github.com/nearai/ironclaw/issues/1303)) - **CLOSED**
    *   WASM 工具导出了严格的 Schema，但 IronClaw 向 LLM 广告时使用了 `{}`，导致调用参数错误。*已修复。*
*   **[BUG] Telegram Bot HTTP Tool 错误** ([#1676](https://github.com/nearai/ironclaw/issues/1676)) - **OPEN**
    *   影响核心消息轮询功能，目前暂无针对性修复 PR。
*   **[BUG] 飞书通道配对卡死** ([#1673](https://github.com/nearai/ironclaw/issues/1673)) - **OPEN**
    *   影响飞书集成的基础可用性。
*   **[ENHANCEMENT] LLM 提供商切换不生效** ([#1350](https://github.com/nearai/ironclaw/issues/1350)) - **OPEN**
    *   Web UI 修改 LLM 提供商后需要重启进程才能生效，体验较差。

## 6. 功能请求与路线图信号
从最新的 Issues 和 PRs 中可以洞察项目的潜在方向：

*   **评估指标升级**: [#1731](https://github.com/nearai/ironclaw/issues/1731) 提议将 `pass_rate` 替换为更科学的 `pass@k` 和 `pass^k` 指标，以更准确反映 LLM 判分任务（如 PinchBench）的表现。
*   **LLM 热重载**: 结合 [#1350](https://github.com/nearai/ironclaw/issues/1350) 和 [#1119](https://github.com/nearai/ironclaw/issues/1119)，"配置热重载"和"无需重启的 LLM 切换"是用户明确的需求痛点。
*   **前端扩展系统**: PR #1725 提出提取 `ironclaw_frontend` crate 并引入 widget 系统，暗示未来将大幅增强 UI 的可定制性。

## 7. 用户反馈摘要
*   **痛点**: 集成体验不稳定。用户提到 "OpenClaw knows how to do this perfect from day 1 but ironclaw still fails"，表达了对 IronClaw 基础工具（如 HTTP polling）不稳定的失望。
*   **场景**: 本地部署与私有网络。PR #1696 的提交表明大量用户正在尝试在局域网内使用 Ollama 或 vLLM，之前的严格 SSRF 检查阻碍了这一场景。
*   **安全**: 社区对安全细节非常敏感，CI 自动发现的几个中高危 issue 均迅速得到响应和关闭。

## 8. 待处理积压
以下长期未关闭的 Issue 需要维护者优先关注：

*   **[#1673 - Feishu/Lark Channel Stuck](https://github.com/nearai/ironclaw/issues/1673)**: 阻塞了飞书用户的基本使用，需尽快定位 Pairing 逻辑。
*   **[#1350 - Hot-reload LLM provider](https://github.com/nearai/ironclaw/issues/1350)**: 涉及用户体验，虽然非功能性 Bug，但对开发效率影响较大。
*   **[#1119 - Unify configuration sources](https://github.com/nearai/ironclaw/issues/1119)**: 这是一个技术债务较重的 Issue，涉及重构配置系统，是多个后续功能（热重载、通道开关）的前置条件。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是基于 GitHub 数据的 **LobsterAI 项目动态日报**。

---

## 📅 LobsterAI 项目日报 (2026-03-29)

### 1. 今日速览
**项目状态：活跃且修复密集**
LobsterAI 今日处于高活跃度状态，过去24小时内有 **18 条 PR** 更新，代码提交频繁。项目核心工作集中在 **Bug 修复** 与 **稳定性提升** 上，尤其是针对 OpenClaw 集成、Gateway 崩溃循环以及配置持久化等严重问题的修复。今日发布了 **v2026.3.29** 版本，快速修复了近期社区反馈的几个关键体验问题，显示出维护团队对代码质量的强力把控。

### 2. 版本发布
**版本：v2026.3.29**
- **链接**: [Release 2026.3.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.29)
- **核心更新**:
    - **UI/UX**: 重构 `AskUserQuestion` 插件，移除了删除确认弹窗，简化交互结构。
    - **界面优化**: 消息导航栏重构为全新的“迷你轨道”样式，视觉体验更现代。
    - **日志修复**: 修复了导出日志时进程挂起及 `reply was never sent` 的错误。
- **分析**: 此次版本属于 Hotfix 性质，重点解决了用户反馈的操作卡顿和报错问题，未包含破坏性变更。

### 3. 项目进展
今日合并/关闭了 **12 条 PR**，项目在系统稳定性和国际化方面取得实质性进展：

*   **核心稳定性修复**:
    *   **[#894](https://github.com/netease-youdao/LobsterAI/pull/894)**: 修复了模型名称字段丢失导致 Gateway 无限重启崩溃的严重 Bug。这修复了 #858 和 #859，解决了用户自定义模型时配置被清空的问题。
    *   **[#997](https://github.com/netease-youdao/LobsterAI/pull/997)**: 修复了会话中持续报 "still running" 错误的问题，优化了流式传输错误处理机制。
    *   **[#993](https://github.com/netease-youdao/LobsterAI/pull/993)**: 防止了在定时任务执行期间 Gateway 发生崩溃。
*   **架构重构**:
    *   **[#984](https://github.com/netease-youdao/LobsterAI/pull/984)**: 将“小蜜蜂”网关迁移至 OpenClaw 插件体系，移除了约 994 行旧代码，统一了平台常量，降低了维护成本。
    *   **[#1002](https://github.com/netease-youdao/LobsterAI/pull/1002)**: 移除了 `McpBridgeServer` 的 Secret 鉴权，解决了应用重启后 Secret 不匹配导致的 401 错误，改善了本地开发体验。
*   **用户体验 (UX)**:
    *   **[#851](https://github.com/netease-youdao/LobsterAI/pull/851)**: 修复了切换任务会话时附件消失或错乱的渲染 Bug。

### 4. 社区热点
今日社区讨论主要集中在**配置持久化**和**平台集成体验**上：

*   **[#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) & [#1005](https://github.com/netease-youdao/LobsterAI/issues/1005) - 配置重置问题**
    *   **反馈**: 用户强烈反馈 LobsterAI 启动时会强制重置配置文件（如 `openclaw.json`）和工作空间文件（如 `AGENTS.md`），导致自定义配置（如飞书流式输出）无法保存。
    *   **诉求**: 要求官方提供持久化机制，不要覆盖用户自定义的配置。
    *   **热度**: 24小时内被多次提及，是目前最大的用户痛点。

*   **[#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) - Notion MCP 集成失败**
    *   **反馈**: 用户尝试集成 Notion MCP Server 时，由于环境变量未正确传递，持续收到 401 未授权错误。
    *   **关联**: PR #1002 已尝试修复 MCP Bridge 的鉴权问题，预计将缓解此问题。

### 5. Bug 与稳定性
今日处理的 Bug 按严重程度排列：

1.  **[严重 - 已修复]** **Gateway 无限崩溃循环** ([#859](https://github.com/netease-youdao/LobsterAI/issues/859))
    *   **现象**: 模型名称字段丢失导致 Gateway 启动失败，且进入无限重启死循环。
    *   **状态**: 已通过 PR [#894](https://github.com/netease-youdao/LobsterAI/pull/894) 修复。
2.  **[严重 - 待解决]** **配置文件覆盖** ([#1006](https://github.com/netease-youdao/LobsterAI/issues/1006))
    *   **现象**: 每次重启应用，用户配置都会被内部模板覆盖。
    *   **影响**: 阻碍用户进行深度定制，目前只能靠定时任务绕过，风险较高。
3.  **[中等 - 进行中]** **微信消息发送不同步** ([#986](https://github.com/netease-youdao/LobsterAI/issues/986))
    *   **现象**: 微信机器人回复堆积，等待时间长然后一次性发送，体验极差。

### 6. 功能请求与路线图信号
根据未合并的 PR 和 Issues，项目未来的走向信号：

*   **快捷操作 (UX)**:
    *   PR [#999](https://github.com/netease-youdao/LobsterAI/pull/999): 新增 `Cmd+K` 命令面板。这是一个强烈的效率工具信号，表明项目正致力于提升键盘党的操作效率。
*   **交互增强**:
    *   PR [#998](https://github.com/netease-youdao/LobsterAI/pull/998): 新增“选中文本浮动工具栏”。支持选中文本后直接进行翻译、解释、引用等操作。
*   **MCP 协议支持**:
    *   PR [#1001](https://github.com/netease-youdao/LobsterAI/pull/1001): 正在增加对 SSE 和流式 HTTP 传输类型的 MCP 支持。这是对当前仅支持 stdio 的重大扩展。

### 7. 用户反馈摘要
*   **痛点**: **“配置被重置”** 是今日最大的槽点，用户对需要通过“每5分钟定时任务”来恢复配置感到无奈，认为保护机制过于激进。
*   **赞赏**: 用户对 GitHub 上的响应速度表示满意，关键 Bug（如 Gateway 崩溃）在提出后很快得到修复和合并。
*   **体验**: 微信用户反馈流式输出体验不佳，缺乏实时感。

### 8. 待处理积压
*   **[#990](https://github.com/netease-youdao/LobsterAI/pull/990)**: 修复删除按钮国际化缺失及新增删除确认弹窗。（待合并）
*   **[#996](https://github.com/netease-youdao/LobsterAI/pull/996)**: 修复 Agent 技能描述未跟随语言切换的问题。（待合并）
*   **[#1005/1006](https://github.com/netease-youdao/LobsterAI/issues/1005)**: **[高优先级]** 配置持久化问题，建议维护者优先处理此 Issue 或提供官方文档指引。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-29)

> **数据来源**: [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)
> **统计周期**: 2026-03-28 00:00 - 2026-03-29 00:00 (UTC)

---

## 1. 今日速览
TinyClaw 项目在今日经历了代码库的“大扫除”，维护团队清理了大量历史遗留的技术债务，尽管没有发布新版本，但代码质量与系统稳定性得到了显著提升。过去 24 小时内，社区没有任何新提交的 Issue 或 PR，所有活跃度均集中在维护者对过往遗留问题的集中关闭与合并上。团队主要解决了 **Docker 部署持久化**、**安装脚本稳定性** 以及 **Web 控制台** 等核心领域的痛点。项目目前处于极佳的“清零”状态，所有待处理事项已清空，为下一阶段的开发扫清了障碍。

**健康度评分**: 🟢 **优秀** (无积压，无严重 Bug，安装流程大幅优化)

---

## 2. 版本发布
今日无新版本发布。尽管近期合并了大量修复（特别是 Docker 和安装脚本相关的关键修复），官方尚未将其打包为正式 Release。

---

## 3. 项目进展
今日共合并 **15 条 PR**，主要集中在修复生产环境中的部署与安装问题，同时优化了 Web 界面的交互逻辑。

*   **[Docker 部署稳定性大幅提升]**: 针对 Docker 容器化部署进行了深度修正。
    *   **PR #265**: 修复了持久化数据路径问题，将数据从 `/data` 迁移至 `/home/tinyagi`，解决了 AI CLI（如 Codex/Claude）配置文件因路径挂载缺失而无法工作的问题。
    *   **PR #266**: 解决了 Codex 在容器内因权限不足（读取 `/root/.codex/auth.json`）导致的 WebSocket 500 错误，决定容器以 root 身份运行以兼容特定 CLI 工具。
    *   *链接*: [#265](https://github.com/TinyAGI/tinyclaw/pull/265), [#266](https://github.com/TinyAGI/tinyclaw/pull/266)

*   **[安装流程现代化]**: 完成了从旧安装方式向一键脚本安装的彻底转型。
    *   **PR #237/235/239**: 将 `curl | bash` 确立为默认安装方法，移除了过时的 `npx` 推荐和无效脚本，并增加了旧版本数据（`~/.tinyclaw` → `~/.tinyagi`）的自动迁移逻辑，极大降低了用户的上手门槛和升级阻力。
    *   *链接*: [#237](https://github.com/TinyAGI/tinyclaw/pull/237)

*   **[TinyOffice Web 体验优化]**: 简化了 Web 控制台的信息架构。
    *   **PR #268**: 将“Providers”选项卡合并入“Services”，并移除了独立的 `/logs` 页面，使控制台布局更加紧凑（现在仅包含 Overview, Services, Logs 三个标签页）。
    *   **PR #255**: 修复了 Agent 会话面板中状态显示错误的问题，现在能准确反映“排队中”或“处理中”的数据库状态。
    *   *链接*: [#268](https://github.com/TinyAGI/tinyclaw/pull/268), [#255](https://github.com/TinyAGI/tinyclaw/pull/255)

---

## 4. 社区热点
今日没有新产生的讨论热点，所有的活跃度均来自维护者对历史 Issues 的关闭动作。

*   **[历史特性请求清理]**: 社区长期呼吁的功能需求在今日被集中标记为已关闭（通常意味着已完成或被纳入其他 PR）。
    *   **#124 (Support more providers)**: 用户请求增加对 z.ai, Kimi, OpenRouter 等更多模型商的支持。该 Issue 历时 39 天后关闭，推测已被 **PR #168** (Multi-agent support + Kimi2.5/Minimax2.5 support) 所解决。
        *   *链接*: [#124](https://github.com/TinyAGI/tinyclaw/issues/124)
    *   **#120 (Verbose option & reaction)**: 用户希望在频道中通过反应符号显示 Agent 状态。该请求已被 **PR #113** (Stream tool activity) 满足，实现了实时的状态反馈。
        *   *链接*: [#120](https://github.com/TinyAGI/tinyclaw/issues/120)

---

## 5. Bug 与稳定性
今日关闭了多个影响生产环境的严重 Bug，且均已通过上述 PR 得到修复。

*   **[严重] Telegram Bot 自动重连失败 (Issue #126)**
    *   **问题**: Telegram 客户端在网络波动或 API 断线后无法自动恢复连接，需手动重启服务。
    *   **状态**: 今日已关闭。虽然未在 PR 列表中明确看到对应的修复单，但作为关闭状态推测已在主分支更新。
    *   *链接*: [#126](https://github.com/TinyAGI/tinyclaw/issues/126)

*   **[中等] Agent 进程僵死导致消息积压 (PR #218)**
    *   **问题**: 当 Claude 或 Codex 进程挂起时，消息状态会被无限期锁定为“处理中”，导致队列不断重试但始终失败。
    *   **修复**: 新增了 5 分钟超时机制，强制杀死僵死的 Agent 进程。
    *   *链接*: [#218](https://github.com/TinyAGI/tinyclaw/pull/218)

*   **[环境] WSL2 网络 ETIMEDOUT (Issue #84)**
    *   **问题**: 在 Windows 11 + WSL2 环境下，尽管 curl 正常，Telegram 客户端却频繁报超时错误。
    *   **状态**: 今日关闭，推测底层连接逻辑或依赖库已更新。
    *   *链接*: [#84](https://github.com/TinyAGI/tinyclaw/issues/84)

---

## 6. 功能请求与路线图信号
尽管今日无新请求，但从关闭的 Issues 和 PR 中可以窥见项目路线图的侧重点：

*   **TinyOffice 成为核心交互层**: **Issue #193** 和 **#194** 均聚焦于 TinyOffice（Web 门户），从“首次运行的 Web 引导”到“运行时控制面板（守护进程/队列/心跳）”。这表明项目正试图摆脱纯 CLI 依赖，转向 Web UI 为中心的操作体验。
    *   *链接*: [#193](https://github.com/TinyAGI/tinyclaw/issues/193), [#194](https://github.com/TinyAGI/tinyclaw/issues/194)
*   **多模型生态支持**: 通过 **PR #168** 和 **Issue #124** 的关闭，确认了项目对非 Claude 模型（如 Kimi, Minimax）的兼容性正在增强，这可能是为了应对 API 成本或特殊场景需求。
*   **Docker 编排支持**: **Issue #100** (Docker-Compose format) 已关闭，结合今日的 Docker 修复，说明 Docker 部署已是官方支持的首选方式之一。

---

## 7. 用户反馈摘要
从关闭的 Issues 中提炼用户痛点与评价：

*   **痛点 - 安装与配置门槛高**: 多位用户反馈旧的安装流程过于依赖 CLI 和手动编辑配置文件。*反馈来源: Issue #100, #193*。
*   **痛点 - Docker 路径与权限困惑**: 用户在使用 Docker 时，对数据卷挂载和非 root 用户运行导致的权限问题感到困惑。*反馈来源: PR #265 讨论*。
*   **正面 - 工具流可视化**: 用户对 **PR #113** 带来的 Telegram 实时工具活动更新表示欢迎，认为这让 Agent 的执行过程不再“黑盒”。

---

## 8. 待处理积压
**🎉 恭喜！截至 2026-03-29，TinyClaw 项目无积压的 Open Issues 或 Open PRs。**

所有历史遗留问题（包括 2 月份的网络 Bug、2 月份的功能请求）均已清零。这是一个极佳的发布窗口期，建议关注近期是否会有 v0.x 的正式 Release 发布。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-03-29)

## 1. 今日速览
Moltis 项目在 2026-03-29（统计周期为过去 24 小时）表现出了极高的开发活跃度，发布了 **4 个热修复版本**（版本号 `20260327.05` 至 `20260328.03`），表明项目正在积极响应用户反馈以提升稳定性。社区互动方面，共处理了 25 条变更记录（8 个 Issues 全部关闭，17 个 PR 中有 13 个已合并），显示出维护团队极强的问题解决效率。今日主要工作集中在修复 LLM 提供商（Provider）配置错误、ARM64 架构兼容性问题以及 Telegram 交互逻辑的优化。

## 2. 版本发布
今日连续发布了 4 个版本，主要针对前一日引入的紧急 Bug 进行修复：
- **v20260328.03 / v20260328.02 / v20260328.01**：推测为针对特定问题的快速迭代修复。
- **v20260327.05**：包含针对 [ARM64 包下载失败](https://github.com/moltis-org/moltis/issues/496) 的修复，以及一系列 GraphQL 聊天服务和模型探测的超时优化。

**迁移注意事项**：用户在 ARM64 架构的 Linux 服务器上更新时，应确认 `install.sh` 脚本能正确获取包；若遇到配置校验超时，建议更新至最新版本以获得 30 秒的超时宽容度。

## 3. 项目进展
今日合并的 PR 显著提升了系统的健壮性和多平台兼容性：
- **核心修复**：
    - **[fix(providers)](https://github.com/moltis-org/moltis/pull/515)**：将本地 LLM 服务器的模型探测超时从 10s 增加至 30s，解决了本地模型加载慢导致的配置失败问题。
    - **[fix(provider-setup)](https://github.com/moltis-org/moltis/pull/507)**：修复了添加 OpenAI 兼容 LLM 时的超时错误，跳过不必要的模型探测循环。
    - **[fix(chat)](https://github.com/moltis-org/moltis/pull/505)**：修复了手动/自动上下文压缩破坏聊天的问题，现在压缩摘要使用 `System` 角色而非 `Assistant`，避免被严格的 LLM（如 llama.cpp）拒绝。
- **架构优化**：
    - **[feat(telegram)](https://github.com/moltis-org/moltis/pull/498)**：实现了 Telegram Forum Topic 的会话隔离，每个话题现在拥有独立的会话历史和中断桶。
    - **[feat(providers)](https://github.com/moltis-org/moltis/pull/497)**：新增 Fireworks.ai 作为主要提供商。

## 4. 社区热点
- **[ARM64 安装失败 (#496)](https://github.com/moltis-org/moltis/issues/496)**：由用户 `orangesoncom` 提出，指出在 aarch64 Linux 上 `install.sh` 因 404 错误无法下载包。该问题在当日迅速被标记为 CLOSED，说明已被修复。
- **[模型无法选择 (#514)](https://github.com/moltis-org/moltis/issues/514)**：用户报告升级后大多数模型无法被选中，反映了 UI 与后端模型同步的潜在问题，目前已修复。

## 5. Bug 与稳定性
今日报告并修复的 Bug 涉及多个核心功能流程：
1. **[严重] 安装脚本环境兼容性**：ARM64 架构下载失败 (#496)，已修复。
2. **[高] LLM 提供商配置崩溃**：添加 OpenAI 兼容 LLM（无论是否指定模型）均会导致超时或错误 (#502, #504, #506)，通过优化探测逻辑和超时设置已修复。
3. **[中] 升级后配置错误**：MiniMax 提示词提取错误 (#510) 及聊天设置无效错误 (#508)，均已恢复或修复。
4. **[中] 聊天上下文损坏**：手动压缩上下文导致聊天中断 (#501)，已修复。

## 6. 功能请求与路线图信号
从待合并的 PR 中可以看到未来的功能方向：
- **[Jina.ai 网络搜索 (#513)](https://github.com/moltis-org/moltis/pull/513)**：正在增加 Jina.ai 作为第三个搜索提供商，补全搜索生态。
- **[Matrix 通道集成 (#500)](https://github.com/moltis-org/moltis/pull/500)**：从大型 PR 中拆分出的独立功能，即将带来 Matrix 协议支持。
- **[语音服务自定义 Base URL (#499)](https://github.com/moltis-org/moltis/pull/499)**：允许用户配置本地 TTS/STT 服务器（如 Chatterbox），降低对云 API 的依赖。
- **[高级会话召回 (#503)](https://github.com/moltis-org/moltis/pull/503)**：包含跨会话召回和 SSH 运行时 UX 改进，属于较高级别的路线图功能。

## 7. 用户反馈摘要
- **痛点**：**本地 LLM 体验不佳**。多个 Issues (PR #515, #507) 反映出用户在使用本地大模型（如 llama.cpp）时，常因加载慢导致配置超时或探测失败。用户反馈倾向于更宽容的配置逻辑（例如允许超时保存）。
- **痛点**：**升级后的破坏性变更**。用户 `LeeTeng2001` 和 `bsarkisov` 连续报告了升级导致的模型选择困难和聊天错误，显示出近期版本在向后兼容性上存在波动。
- **建议**：用户 `alexhooketh` 在 PR #276 中指出 Telegram 无法读取纯文本附件的缺陷，该问题已通过 Codex 补丁得到临时缓解。

## 8. 待处理积压
- **[长期 Issue #437](https://github.com/moltis-org/moltis/issues/437)**：关于“可展开的推理”只返回 Channels 消息响应的 Bug，虽然已关闭，但存在 3 条评论，建议确认修复是否彻底覆盖了所有边缘情况。
- **[大型功能 PR #503](https://github.com/moltis-org/moltis/pull/503)**：包含 Session Recall 和 Hermes 比较路线图，目前处于 OPEN 状态，功能复杂，建议进行分阶段评审。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-29)

## 1. 今日速览
CoPaw 项目今日呈现极高的活跃度，过去 24 小时内共处理了 **39 条 Issues** 和 **24 条 PR**，显示社区参与度与开发迭代速度均处于高位。项目核心功能正在经历快速迭代，主要集中在**本地模型支持重构**、**多提供商（Provider）集成**以及**系统稳定性修复**上。尽管没有发布新版本，但大量针对 0.2.0 版本的 Bug 修复（特别是内存泄漏、UI 崩溃和 CPU 占用）正在通过 PR 快速合并，表明项目团队正积极提升用户体验的稳定性。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日合并或更新的关键 PR 显示出项目在架构优化和生态集成上的显著进展：

*   **本地模型重构**：[PR #2419](https://github.com/agentscope-ai/CoPaw/pull/2419) 正在重构本地模型模块，简化配置流程，旨在降低用户部署本地大模型的门槛。
*   **系统集成与增强**：
    *   [PR #2428](https://github.com/agentscope-ai/CoPaw/pull/2428) 新增了 **OpenCode** 提供商支持。
    *   [PR #2448](https://github.com/agentscope-ai/CoPaw/pull/2448) 引入了 **MiniMax** 的 OAuth 认证（Device Code Flow & PKCE），增强了第三方模型接入的安全性。
    *   [PR #2465](https://github.com/agentscope-ai/CoPaw/pull/2465) 扩展了钉钉 集成能力，增加了对多维表格 和文档操作的内置工具支持。
*   **性能与体验优化**：
    *   [PR #2426](https://github.com/agentscope-ai/CoPaw/pull/2426) 重构了频道管理模块，实现了按需懒加载，这将显著减少系统启动时的资源占用和启动时间。
    *   [PR #2466](https://github.com/agentscope-ai/CoPaw/pull/2466) 为 Web 端聊天页面引入了类似终端的“上下箭头查看历史消息”功能，提升了重度用户的输入效率。
    *   [PR #2457](https://github.com/agentscope-ai/CoPaw/pull/2457) 提出了用户资产备份与迁移方案，支持导出/导入配置、记忆和技能，并支持每日自动备份。

## 4. 社区热点
今日讨论热度最高的话题集中在用户体验改进和系统稳定性：

*   **UI 变更反馈**：[Issue #2454](https://github.com/agentscope-ai/CoPaw/issues/2454) 引发热议，用户强烈反对将历史消息对话框隐藏到右侧的 UI 改动，认为这不利于多角色协作，建议恢复左侧展示。
*   **CPU 占用问题**：[Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218) 持续受到关注，用户报告 CoPaw 进程在空闲时占用 100% CPU，涉及 `busy-polling epoll loop`，这是一个影响用户留存的严重性能问题。
*   **新手引导与贡献**：[Issue #2291](https://github.com/agentscope-ai/CoPaw/issues/2291) 作为 "Help Wanted" 任务列表吸引了大量评论，社区贡献者活跃认领任务。

## 5. Bug 与稳定性报告
今日报告的 Bug 涉及系统核心稳定性，严重程度较高：

*   **[高危] 网关重启导致 Agent 永久卡死**：[Issue #2445](https://github.com/agentscope-ai/CoPaw/issues/2445) 报告在执行网关重启命令后，Agent 进程会永久卡死无响应，且复现率 100%。这直接影响了远程部署的可用性。
*   **[高危] 严重网络波动导致 Agent 失效**：[Issue #2435](https://github.com/agentscope-ai/CoPaw/issues/2435) 指出在网络波动环境下，`execute_shell_command` 频繁超时，gh CLI 不可用，导致 Agent 基本无法工作。
*   **[中危] 钉钉/Telegram 消息推送失败或重复**：
    *   [Issue #2153](https://github.com/agentscope-ai/CoPaw/issues/2153) 和 [Issue #2221](https://github.com/agentscope-ai/CoPaw/issues/2221) 揭示了钉钉 `sessionWebhook` 的时效性问题（未保存过期时间），导致 Cron 任务推送失败。
    *   [Issue #2464](https://github.com/agentscope-ai/CoPaw/issues/2464) 报告 Telegram 渠道在执行任务时会发送几十甚至上百条重复消息。
*   **[中危] Tool 调用无限循环**：[Issue #2378](https://github.com/agentscope-ai/CoPaw/issues/2378) 报告在使用 `deep-research` 等 Tool 密集型技能时，Agent 会陷入无限循环执行高度相似的查询（测试中达到 46+ 次迭代）。

## 6. 功能请求与路线图信号
从 Issues 和 PR 中可以看到未来的功能走向：

*   **Magic Command**：[Issue #2456](https://github.com/agentscope-ai/CoPaw/issues/2456) 提出在飞书/钉钉渠道引入 `/break` 指令，以允许用户强制中断正在执行的 Agent 任务，这对控制 Agent 行为至关重要。
*   **Console Web 增强**：[Issue #2434](https://github.com/agentscope-ai/CoPaw/issues/2434) 请求支持 Ctrl+V 粘贴图片/文件上传功能，以对标 Discord/Slack 的体验。
*   **资产备份/迁移**：[Issue #2443](https://github.com/agentscope-ai/CoPaw/issues/2443) 和对应的 PR #2457 表明，跨设备迁移和配置备份是目前的强需求，可能会作为下个版本的亮点功能。
*   **Hook 能力开放**：[Issue #2407](https://github.com/agentscope-ai/CoPaw/issues/2407) 希望将 AgentScope 的 hook 能力开放给用户自定义，以增强 `self-improvement` 等高级技能的灵活性。

## 7. 用户反馈摘要
*   **配置痛点**：多位用户 ([Issue #2298](https://github.com/agentscope-ai/CoPaw/issues/2298), [Issue #2425](https://github.com/agentscope-ai/CoPaw/issues/2425)) 反馈新版 UI 中模型选择框消失，且 Ollama 支持配置极其困难，文档说明不足。
*   **MCP 集成问题**：[Issue #2417](https://github.com/agentscope-ai/CoPaw/issues/2417) 和 [Issue #2462](https://github.com/agentscope-ai/CoPaw/issues/2462) 指出 MCP (Model Context Protocol) 服务的集成存在稳定性问题（空值检查缺失导致 CLI 失败）。
*   **多智能体协作体验**：[Issue #2420](https://github.com/agentscope-ai/CoPaw/issues/2420) 提供了一份详细的体验反馈文档，指出了跨智能体协作引导不足、通信触发不自然以及身份混淆等问题。

## 8. 待处理积压
*   **CoPaw CPU 100% 占用**：[Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218) (Opened: 2026-03-24) 虽然有较多关注，但尚未看到明确的 Fix PR 合入。
*   **UI 崩溃进不去**：[Issue #2293](https://github.com/agentscope-ai/CoPaw/issues/2293) (Opened: 2026-03-25) 用户反馈因 Agent 操作导致 JS 报错 (`Uncaught SyntaxError`)，无法进入 UI，此类阻塞性问题需优先解决。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-29)

**报告生成时间**：2026-03-29  
**数据来源**：github.com/qhkm/zeptoclaw  
**分析师**：AI 开源项目智能体

---

### 1. 今日速览
ZeptoClaw 项目在过去 24 小时内保持了较高的开发活跃度，主要集中在 **Agent 稳定性**和 **Telegram 接口修复**两个核心方向。虽然今日无新版本发布，但代码层面的重构力度较大。项目维护者 `stuartbowness` 提交了两个关键 PR，分别旨在彻底解决长对话中的 Token 溢出崩溃问题，以及修复 Telegram 端研究报告“静默失败”的严重 Bug。目前 Issue 追踪存在 1 个未关闭的 Bug，且与现有的 2 个待合并 PR 紧密相关，显示项目正在积极响应用户反馈，修复版本可能即将发布。

---

### 2. 版本发布
*无新版本发布*

---

### 3. 项目进展
今日虽然没有已合并的 PR，但两个待合并的 PR 代表了项目架构的重要优化，预计将显著提升系统健壮性：

*   **[PR #460] feat(agent): 多层上下文压缩机制**  
    **状态**：OPEN | **作者**：stuartbowness  
    **进展**：这是一个防御性策略的重大更新。针对用户在长对话中遇到的不可恢复的 Token 溢出崩溃，该 PR 彻底推翻了原有的单次字数统计方法，转而采用多层深度防御策略。一旦合并，将解决长期困扰用户的会话中断问题。
    **链接**：[qhkm/zeptoclaw#460](https://github.com/qhkm/zeptoclaw/pull/460)

*   **[PR #462] fix(telegram): 消息分块与纯文本回退**  
    **状态**：OPEN | **作者**：stuartbowness  
    **进展**：直接对应今日报告的 Bug #461。该 PR 引入了消息分块逻辑和纯文本回退机制，确保当 AI 生成的研究报告内容过长或包含 Telegram 无法解析的 HTML 标签时，用户仍能收到响应而不是“死寂”。
    **链接**：[qhkm/zeptoclaw#462](https://github.com/qhkm/zeptoclaw/pull/462)

---

### 4. 社区热点
*   **热点话题：Telegram 端研究报告“静默失败”**  
    **相关链接**：[Issue #461](https://github.com/qhkm/zeptoclaw/issues/461) | [PR #462](https://github.com/qhkm/zeptoclaw/pull/462)
    **分析**：这是今日社区关注的焦点。用户报告在通过 Telegram 进行涉及浏览器的开放式研究任务时，Agent 虽然完成了处理，但用户端收不到任何回复。RCA（根本原因分析）显示，这是由 Telegram HTML 渲染畸形标签以及缺乏回退机制导致的。目前已有针对性的修复 PR (#462) 提出解决方案（分块发送 + HTML 容错）。
    **诉求**：用户要求确保在复杂任务下，无论输出格式如何，必须收到可视化的结果反馈。

---

### 5. Bug 与稳定性
*   **[严重] Telegram 消息发送失败**
    *   **描述**：在 Telegram 接口中，长篇研究报告（尤其是超过 4 个来源的任务）会触发 HTML 渲染错误，导致 Bot 完全静默，无错误提示。
    *   **状态**：已确认根因 (RC1: `render_telegram_html` 存在缺陷)，Fix PR ([#462](https://github.com/qhkm/zeptoclaw/pull/462)) 已提交待审核。
    *   **影响范围**：所有通过 Telegram 使用长上下文/浏览器研究任务的用户。

---

### 6. 功能请求与路线图信号
*   **上下文压缩系统重构** (来自 PR #460)  
    虽然这是一个 Bug 修复性质的 PR，但它引入了“多层深度防御”的架构设计。这表明项目的路线图正在向**“企业级稳定性”**迈进，未来可能支持更长、更复杂的 Agent 思考链，而不再受限于简单的 Token 计数。

---

### 7. 用户反馈摘要
从 Issue #461 的反馈中可以提炼出以下关键用户体验痛点：
*   **痛点**：“静默失败”是极其糟糕的体验。用户无法区分是 Agent 还在思考、任务失败了、还是系统崩溃了。
*   **场景**：主要发生在复杂的“研究任务”中，特别是涉及浏览器使用和长篇回答时。
*   **满意度**：对于短任务（4个来源以内）目前表现良好。

---

### 8. 待处理积压
*   **待审核 PR**：
    *   [#460 (多层上下文压缩)](https://github.com/qhkm/zeptoclaw/pull/460)：建议优先合并，直接提升系统稳定性。
    *   [#462 (Telegram 修复)](https://github.com/qhkm/zeptoclaw/pull/462)：建议优先合并，解决严重的功能性 Bug。
*   **待关闭 Issue**：
    *   [#461 (Telegram Bug)](https://github.com/qhkm/zeptoclaw/issues/461)：依赖 PR #462 的合并。

---
**总结**：ZeptoClaw 今日处于活跃的修复与迭代状态，开发团队快速响应了核心 Bug。建议关注未来几日内 PR #460 和 #462 的合并情况，这将决定 vNext 版本的质量上限。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 - 2026-03-29

## 1. 今日速览
EasyClaw (RivonClaw) 项目今日处于 **低活跃度修正期**。过去 24 小时内未产生新的 Pull Requests，代码库处于静止状态，但项目发布了 **v1.7.8** 版本，重点解决了 macOS 平台的兼容性问题。与此同时，社区反馈集中在上一版本 (v1.7.7) 的特定功能缺陷上，连续出现两起关于百炼套餐模型切换失败的 Bug 报告，显示出 API 兼容性存在不稳定性，需要维护者优先关注。

## 2. 版本发布
**v1.7.8: RivonClaw v1.7.8**
项目今日发布了 v1.7.8 版本，主要更新内容如下：
- **macOS 兼容性修复**：针对 macOS Gatekeeper 安全机制导致的“应用已损坏”问题提供了官方解决指南。由于应用未签名，用户直接打开会被拦截，官方文档通过终端命令授予了执行权限。
- **影响评估**：这是一个针对特定平台体验的修复，不涉及核心逻辑变更，但影响 macOS 用户能否正常启动软件。
- **迁移注意事项**：macOS 用户需按照 Release Note 中的指示，打开终端执行特定命令以绕过系统限制，属于操作层面的变更。

## 3. 项目进展
- **代码合并**：今日 **0** 条 PR 合并。
- **进度分析**：项目今日在代码功能推进上处于停滞状态。虽然没有新功能合并，但 v1.7.8 的发布表明维护团队正在专注于修复平台适配和可用性问题。项目目前处于“修复与反馈”的循环中，尚未进入下一波功能开发阶段。

## 4. 社区热点
今日社区热点集中在 **百炼套餐的 API 调用兼容性** 上，两起高优先级的 Issue 均指向同一类错误。

- **🔥 热点 Issue #29**: [Bug] 百炼套餐模型切换后出现 HTTP 400 InvalidParameter 错误
  - **链接**: [gaoyangz77/rivonclaw#29](https://github.com/gaoyangz77/rivonclaw/issues/29)
  - **详情**: 用户报告在从 Qwen3.5 切换至 GLM 或 Kimi 模型后，API 返回 `Range of input length should be [1, 202752]` 的 400 错误。
  - **分析**: 这表明不同模型的 Token 处理逻辑可能存在冲突，或者客户端在切换模型时未正确重置上下文参数。

## 5. Bug 与稳定性
今日报告的 Bug 显示出 **v1.7.7 版本在多模型支持方面存在稳定性风险**。

- **[严重] HTTP 400 参数错误 (影响百炼套餐)**
  - **关联 Issues**: [#29](https://github.com/gaoyangz77/rivonclaw/issues/29), [#28](https://github.com/gaoyangz77/rivonclaw/issues/28)
  - **现象**: 在百炼套餐中切换模型（特别是从 Qwen 切换至 Kimi/GLM）时，输入任何文本均报错 `InternalError.Algo.InvalidParameter`。
  - **状态**: **无 Fix PR**。
  - **评估**: 这是一个阻断性 Bug，直接导致百炼套餐的部分模型不可用。考虑到短时间内出现两起相同报告，问题普遍性较高。

## 6. 功能请求与路线图信号
今日无新的功能请求 (Feature Request)。所有反馈均为现有功能的失效报告。从 Issues 中看不出新的路线图信号，目前的诉求是“恢复功能”而非“增加功能”。

## 7. 用户反馈摘要
从用户的 Bug 报告中提炼出的关键痛点：
- **多模型切换体验差**：用户在尝试使用百炼套餐内的不同模型（如 Kimi 2.5, GLM 5）时遇到阻碍，无法完成基本的对话交互。
- **Windows/macOS 双端均有反馈**：Issue #28 来自 Windows 11 用户，Issue #29 的修复指南涉及 macOS，说明该问题可能跨越平台，或者用户对跨平台稳定性都有较高期待。
- **错误信息晦涩**：`Range of input length` 的错误提示容易误导用户（用户可能以为是输入字数超限，实则是参数配置错误）。

## 8. 待处理积压
- **优先级高**: [Issue #29](https://github.com/gaoyangz77/rivonclaw/issues/29) & [Issue #28](https://github.com/gaoyangz77/rivonclaw/issues/28) - 百炼套餐模型切换报错问题。由于直接影响了核心 AI 对话功能的可用性，建议作为下一版本 v1.7.9 的最高优先级修复项。

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*