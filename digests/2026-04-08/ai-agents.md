# OpenClaw 生态日报 2026-04-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-08 00:14 UTC

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

# OpenClaw 项目动态日报 (2026-04-08)

## 📅 今日速览
OpenClaw 项目今日处于**极高活跃度**状态，过去 24 小时内处理了 **1000 条** 更新（500 条 Issues + 500 条 PRs），显示出社区巨大的参与热情和项目爆发式的增长。社区讨论主要集中在 Windows 平台的兼容性危机（ESM 加载错误）以及最新版本 `2026.4.5` 引入的多个严重回归问题上。虽然功能开发持续活跃（如 WinUI 3 原生应用、子代理修复），但稳定性问题（特别是微信插件、CLI 命令卡死、媒体发送失败）引发了大量用户报障，维护者正通过快速迭代的 PR 努力修复核心崩溃问题。

---

## 🚀 版本发布
**无新版本发布**
尽管今日未发布新版本，但大量用户报告显示当前的 `2026.4.5` 版本存在严重的破坏性变更，特别是在 Windows 安装和 CLI 运行时方面。

---

## 🚧 项目进展
今日合并/关闭的关键 PR 显示了项目在核心稳定性和功能扩展上的快速响应：

*   **核心功能增强**:
    *   **[PR #62758](https://github.com/openclaw/openclaw/pull/62758)** (已关闭): 修复了 `sessions_send` 传递 `threadId` 的问题，确保 Telegram 论坛主题消息能正确发送到对应的主题帖中。
    *   **[PR #61442](https://github.com/openclaw/openclaw/pull/61442)** (已关闭): 为 Discord 插件添加了新的 SDK 导出路径 `openclaw/plugin-sdk/discord`，简化了交互式 UI 的构建。
    *   **[PR #62744](https://github.com/openclaw/openclaw/pull/62744)** (已关闭): 修复了显式认证配置文件选择逻辑，确保 `/model ...@profile` 流程正确持久化。

*   **稳定性修复**:
    *   **[PR #62747](https://github.com/openclaw/openclaw/pull/62747)** (已关闭): 针对安装失败问题，将 `@buape/carbon` 和 `@larksuiteoapi/node-sdk` 标记为可选依赖，缓解了 `npm install` 报错。
    *   **[PR #59353](https://github.com/openclaw/openclaw/pull/59353)** (已关闭): 缩小了 `exec` 命令中混淆检测的误报范围，防止正常的 Python 脚本被错误拦截。
    *   **[PR #54588](https://github.com/openclaw/openclaw/pull/54588)** (已关闭): 社区贡献的原生 WinUI 3 Windows 伴侣应用（AI 辅助开发），弥补了 Windows 平台原生应用的缺失（对应 Issue #75）。

---

## 🔥 社区热点
今日讨论热度最高的议题集中在 Windows 兼容性和核心功能回退上：

*   **[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (75 评论): 老牌热帖，随着 WinUI 3 应用的 PR 合并，Windows 用户期待值拉满，讨论集中在何时能正式发布稳定版。
*   **[#49971 RFC: Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971)** (65 评论): 关于引入基于 W3C DID 和 ERC-8004 的 AI 代理身份验证机制的提案，社区对安全性规范表示高度关注。
*   **[#52885 微信插件不兼容](https://github.com/openclaw/openclaw/issues/52885)** (45 评论): `@tencent-weixin/openclaw-weixin` 插件在 `2026.3.22+` 版本全面失效，因 ESM 导入路径问题导致核心模块无法加载，严重影响企业用户。

---

## 🐛 Bug 与稳定性
今日报告显示 `2026.4.5` 版本存在多个严重回归，形成明显的 Bug 爆发潮：

*   **🔴 严重 (Critical - 影响 Windows 安装/运行)**:
    *   **[ERR_UNSUPPORTED_ESM_URL_SCHEME](https://github.com/openclaw/openclaw/issues/61899)**: Windows 原生安装失败，Node.js ESM 加载器不支持盘符路径（如 `c:`），导致安装向导崩溃。（相关 Issues: #61911, #62374, #61795）
        *   *状态*: 已有修复 PR **[#61795](https://github.com/openclaw/openclaw/pull/61795)** (已关闭) 和 **[#61853](https://github.com/openclaw/openclaw/pull/61853)** (已关闭)，但用户反馈仍未完全解决。
    *   **[CLI 命令无限卡死](https://github.com/openclaw/openclaw/issues/62335)**: 升级到 2026.4.5 后，`devices list` 等命令无响应且无法 Ctrl+C 中断。

*   **🟠 高优 (High - 功能损坏)**:
    *   **[缺少模块 @buape/carbon](https://github.com/openclaw/openclaw/issues/62272)**: 更新或安装过程中依赖缺失，导致程序无法启动。
    *   **[Coding Agent 不再执行任务](https://github.com/openclaw/openclaw/issues/62505)**: 代理仅输出状态更新而不执行实际代码编写，属于严重的功能回退。
    *   **[WhatsApp 媒体发送失败](https://github.com/openclaw/openclaw/issues/61726)**: 显示发送成功但仅收到文本，附件丢失。
    *   **[Matrix 频道不同步消息](https://github.com/openclaw/openclaw/issues/61773)**: 连接成功但无法接收消息。

---

## ✨ 功能请求与路线图信号
用户需求强烈反映了多平台、多模态和增强控制力的方向：

*   **平台支持**: 用户急需 **Windows 和 Linux 桌面客户端** ([#75](https://github.com/openclaw/openclaw/issues/75))，目前 WinUI 3 正在开发中，Linux 仍缺位。
*   **多模态交互**: **实时语音对话** ([#7200](https://github.com/openclaw/openclaw/issues/7200)) 是高频需求，希望集成 Twilio/WebRTC 实现类电话的交互体验。
*   **模型与工具增强**:
    *   请求支持 **Ollama 的 "thinking" 推理模式** ([#62712](https://github.com/openclaw/openclaw/pull/62712))。
    *   请求增加 **模型输出上下文** 到 `before_tool_call` 钩子，用于合规性检查 ([#12617](https://github.com/openclaw/openclaw/issues/12617))。
*   **配置与管理**:
    *   多智能体设置下，请求 **共享工作区目录** ([#40245](https://github.com/openclaw/openclaw/issues/40245)) 以避免重复文件。
    *   请求 **按代理配置不同的 TTS 语音** ([#11483](https://github.com/openclaw/openclaw/issues/11483))，目前 PR **[#62573](https://github.com/openclaw/openclaw/pull/62573)** 已实现此功能。

---

## 🗣️ 用户反馈摘要
*   **痛点**: "太脆弱了" —— 升级到 2026.4.5 后，多处核心功能（CLI、微信插件、媒体发送）出现回退，用户被迫降级或等待修复。
*   **平台差异**: Windows 用户感到被忽视，面临着 macOS/Linux 用户没有遇到的系统性 ESM 路径错误。
*   **稳定性担忧**: 有用户反映 Coding Agent 之前表现良好，最近更新后变得"只会道歉不干活" ([#62505](https://github.com/openclaw/openclaw/issues/62505))。
*   **文档缺失**: 用户希望有更详尽的 **AWS 部署指南** ([#13597](https://github.com/openclaw/openclaw/issues/13597)) 以减少云部署的阻力。

---

## ⏳ 待处理积压
以下长期未解决的 Issue 仍需维护者关注：

*   **[#32088 Slack channels crash on startup](https://github.com/openclaw/openclaw/issues/32088)** (Stale): Slack 频道因 Bolt 4.6.0 事件类型变更导致启动崩溃，影响 Slack 用户持续使用。
*   **[#31710 Discord Repeated Restarts](https://github.com/openclaw/openclaw/issues/31710)** (Stale): Discord 提供商被健康监控反复重启，导致消息重复发送。
*   **[#17101 Telegram Voice Messages Not Transcribed](https://github.com/openclaw/openclaw/issues/17101)**: Telegram 语音消息未能自动转写，仅显示为附件， despite 配置已开启。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告
**日期：2026-04-08**

## 1. 生态全景
当前个人 AI 助手开源生态正处于**从“单一对话”向“多模态自主智能体”转型的关键爆发期**。
*   **应用层爆发**：OpenClaw 和 PicoClaw 等头部项目呈现出极高的活跃度，社区贡献力度空前，显示出开源界正在快速追赶甚至引领部分企业级功能（如 Browser Use, Multi-Agent）。
*   **痛点趋同**：整个生态普遍面临**Windows 兼容性**、**长上下文记忆管理**以及**模型适配稳定性**（如 DeepSeek, Claude API）三大技术挑战。
*   **架构分化**：项目间已出现明显的路线分化，一类（如 OpenClaw, IronClaw）走向全能型基础平台，另一类（如 ZeptoClaw, Moltis）则专注于极致性能、安全沙箱或特定语言/运行时的优化。

---

## 2. 各项目活跃度对比

| 项目 | 活跃度评级 | 24h Issues/PR | Release 版本 | 健康度评估 |
| :--- | :---: | :---: | :---: | :--- |
| **OpenClaw** | **极高** | 1000 (500/500) | - | **⚠️ 警戒**：开发极快，但 `v2026.4.5` 存在严重回归，Windows 用户大面积崩溃。 |
| **IronClaw** | **高** | 63 (13/50) | - | **🟡 稳定**：聚焦多租户性能与 WASM 安全，PR 合并率约 33%，代码质量高。 |
| **NanoBot** | **高** | 89 (40+/37) | v0.1.5 (近日) | **🟡 稳定**：快速迭代多模态与 MCP 集成，v0.1.5 存在小幅摩擦，修复响应迅速。 |
| **PicoClaw** | **高** | 60 (40/20) | - | **🟢 进取**：专注于异构模型接入与工具链扩充，PR 合并量大，架构活跃。 |
| **Zeroclaw** | **高** | 68 (18/50) | - | **🟡 安全**：Rust 核心性能优异，但受限于过于严格的安全沙箱，引发“仅可聊天”争议。 |
| **CoPaw** | **高** | 94 (50/44) | - | **🟢 活跃**：社区贡献者激增，Bug 修复率高，但在 Stop 机制和 Docker 数据持久化上存在痛点。 |
| **LobsterAI** | **中高** | 68 (18/50) | - | **🟢 产品化**：开发重点转向标签、书签等生产力工具，产品成熟度较高。 |
| **Moltis** | **极高** | 12 (6/6) | **2个补丁** | **🔴 修复中**：发布极其频繁，但新版本存在 Channel 会话“失忆”等严重 Bug，属于“高速带病行驶”。 |
| **ZeptoClaw** | **高** | 23 | **v0.9.2** | **🟢 极致**：以二进制体积和性能为核心，合并了 Browser Tool 等高级特性，工程化极强。 |
| **NanoClaw** | **中** | 19 (4/15) | - | **🟡 扩展中**：正从单一代理向多平台/长任务架构重构，PR 积压较多。 |
| **NullClaw** | **中** | 6 | - | **🟢 平稳**：低代码/配置流导向，今日聚焦文档补全与体验微调。 |
| **EasyClaw** | **低** | 0 | **v1.7.8** | **🔵 维护**：进入功能冻结期，主要处理 i18n 待办与分发问题。 |
| **TinyClaw** | **休眠** | 0 | - | **⚪ 停滞** |

---

## 3. OpenClaw 在生态中的定位

*   **优势**：
    *   **规模霸主**：今日处理了 **1000 条** Updates，是唯一达到此量级的项目，社区贡献力量绝对领先。
    *   **插件生态**：拥有最丰富的官方/社区插件体系（微信、Discord、Telegram 等），且正在构建独立的 SDK 导出路径。
*   **技术路线差异**：
    *   **激进迭代 vs. 稳定性**：OpenClaw 选择了“激进的快速合并”策略（如 2026.4.5 版本），这导致其频繁出现破坏性变更（ESM 错误、CLI 卡死）。相比之下，IronClaw 和 ZeptoClaw 更倾向于在合并前进行严格的架构审查。
    *   **全栈覆盖**：它是少数同时覆盖 WinUI 3 客户端、CLI 和 Web 控制台的项目，试图打通所有用户入口。
*   **社区规模**：
    *   **体量最大**：Issue 讨论热度极高（75+ 评论的帖子常见），但也意味着技术支持压力巨大，目前的 Bug 修复速度赶不上 Bug 引入速度。

---

## 4. 共同关注的技术方向
以下技术在多个项目中同时涌现，被确认为行业共识：

1.  **浏览器自动化**
    *   **涉及项目**：PicoClaw (PR #2410), ZeptoClaw (PR #502 v0.9.2), OpenClaw。
    *   **诉求**：赋予 Agent “眼睛”和“手”，使其能操作 Web 界面（如基于 CDP 或 Playwright），而不仅仅是调用 API。

2.  **多模态输入增强**
    *   **涉及项目**：NanoBot (PR #2910 地理位置支持), NanoClaw (Issue #1522 图片/语音处理), LobsterAI。
    *   **诉求**：解决 Agent 只能处理文本的局限，要求原生支持图片、音频、视频流及位置信息的解析与处理。

3.  **长上下文/记忆管理**
    *   **涉及项目**：IronClaw (PR #2127 性能优化), ZeptoClaw (PR #503 多层压缩), NanoBot (Issue #2638), PicoClaw (Issue #2409)。
    *   **诉求**：解决长对话中的 Token 溢出、OOM（内存溢出）以及“记忆整合/摘要”不准确的问题。

4.  **统一会话/跨平台消息互通**
    *   **涉及项目**：NanoBot (PR #2900), NanoClaw (Matrix 支持), NullClaw。
    *   **诉求**：用户希望在 Telegram、Discord、WhatsApp 等不同平台间无缝切换对话，且保持上下文连续。

5.  **Ollama / 本地模型优先支持**
    *   **涉及项目**：Zeroclaw (Issue #5459), PicoClaw, Moltis。
    *   **诉求**：确保对本地运行模型（如 Ollama, LM Studio）的完美兼容，特别是工具调用 的兼容性。

---

## 5. 差异化定位分析

| 维度 | OpenClaw / PicoClaw | IronClaw / Moltis | ZeptoClaw / Zeroclaw | LobsterAI / CoPaw |
| :--- | :--- | :--- | :--- | :--- |
| **核心定位** | **全能型中间件**。强调通道接入能力和多模型适配。 | **企业级/云原生**。强调多租户隔离、WASM 沙箱安全和高并发性能。 | **极致单机性能**。强调二进制体积、低资源占用、Rust/Go 实现的安全性。 | **生产力工具**。强调 UI 交互、书签、计划任务等面向终端用户的功能体验。 |
| **目标用户** | 开发者、极客、需要自行搭建服务的用户。 | 需要私有化部署的企业、SaaS 集成商。 | 追求极致性能和隐私安全的个人用户、Linux 爱好者。 | 普通个人用户、知识工作者、辅助编程人员。 |
| **技术架构** | **JS/TS 生态主导**。灵活性极高，插件丰富，但容易出现依赖地狱。 | **后端重架构** (Python/Wasm/JS)。强调 WebAssembly 的安全隔离和状态持久化。 | **编译型语言**。静态链接，单一文件，无运行时依赖。 | **全端应用**。通常包含原生的桌面客户端 (Tauri/Electron) 和美观的 Web UI。 |

---

## 6. 社区热度与成熟度

*   **快速迭代期 (高热度，高震荡)**：
    *   **OpenClaw**：今日合并量巨大，但 `v2026.4.5` 被称为“Bug 之王”，处于剧烈的功能扩张与阵痛期。
    *   **Moltis**：一日双发，但伴随严重回归，属于“救火式”开发。
    *   **NanoBot**：正在重构 Agent 与 Gateway 的交互，大量新 PR 涌入。

*   **质量巩固期 (高热度，低震荡)**：
    *   **ZeptoClaw**：v0.9.2 发布表现完美，主动进行二进制瘦身，代码 Review 质量极高。
    *   **CoPaw**：正集中清理 Docker 和历史遗留 Bug，社区贡献者大量涌入进行维护。
    *   **LobsterAI**：重点转向 UI/UX 优化（书签、标签），功能已基本完备。

*   **冷清/停滞期**：
    *   **TinyClaw**：无任何活动。
    *   **EasyClaw**：仅剩 i18n 维护，核心功能停滞。

---

## 7. 值得关注的趋势信号

1.  **"Claw" 生态的 Windows 兼容性危机**：
    *   包括 OpenClaw (ESM Error)、Zeroclaw (fsync ACCESS_DENIED)、NanoBot 在内的多个项目今日均报告了严重的 Windows 运行时错误。
    *   **信号**：大部分开源 Agent 框架深受 *nix 环境影响，Windows 依然是“二等公民”。对于希望获取大众用户的开发者来说，**优先级最高**的改进方向是修复 Windows 下的路径解析、Shell 执行和打包问题。

2.  **从“聊天”转向“执行”的工程化挑战**：
    *   **Zeroclaw (Issue #1478)** 的用户抱怨“除了安全什么功能都没有”，以及 **OpenClaw (Issue #62505)** 用户反馈 Agent “只会道歉不干活”。
    *   **信号**：开源社区对 Agent 的容忍度正在降低。仅仅能对话已不够，**Agent 必须能够可靠地执行 Shell 命令、操作文件和调用工具**。未来的核心竞争力在于**权限管理的精细化**（如何平衡安全与可用性）以及**工具调用的成功率**。

3.  **MCP (Model Context Protocol) 正成为标准接口**：
    *   **NanoBot** 已深度集成 MCP，**IronClaw** 讨论本地 Bridge。
    *   **信号**：Anthropic 提出的 MCP 协议正在被广泛采纳，成为连接 LLM 与本地工具（如 Obsidian, 数据库）的通用标准。开发者应优先支持 MCP 而非开发私有插件接口。

4.  **开发者体验 (DX) 决定生态上限**：
    *   **PicoClaw** 的模型配置复杂、**OpenClaw** 的 ESM 报错晦涩，都导致了大量的 Support Issues。
    *   **信号**：随着 Agent 功能变复杂，**配置热重载**、**清晰的错误提示**、以及**文档的同步更新**将成为项目能否留住开发者的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 (2026-04-08)

## 📅 今日速览
NanoBot 项目今日处于**极高活跃度**状态，社区反应强烈。过去 24 小时内共处理了 89 个 Issues 和 PRs，显示项目正在快速迭代中。今日最显著的特征是**大规模的功能合并与架构重构**，特别是在多模态支持、通道扩展（WebSocket、Telegram 地理位置）以及 Windows 兼容性修复方面。同时，v0.1.5 版本的发布引发了一系列关于环境变量、定时任务和 CLI 兼容性的讨论，维护团队正在积极响应并修复这些回归问题。

## 📦 版本发布
无新版本发布。*注：当前大量 Issues 与 v0.1.5 版本有关，推测该版本为最近刚发布的版本，目前正处于后续的稳定化补丁阶段。*

## 🚀 项目进展
今日共有 **37** 个 PR 被合并或关闭，项目在以下三个维度取得了重大突破：

1.  **多模态与感知能力增强**：
    *   **Telegram 地理位置支持**：合并了 [`#2910`](https://github.com/HKUDS/nanobot/pull/2910)，现在 Telegram 机器人可以接收和处理用户发送的位置信息，不再丢弃此类消息。
    *   **音视频多模态重构**：提交了 [`#2908`](https://github.com/HKUDS/nanobot/pull/2908)，将多模态管线从仅支持图像扩展为统一的图像/音频/视频处理系统。
    *   **Discord 角色提及控制**：合并了 [`#2914`](https://github.com/HKUDS/nanobot/pull/2914)，增强了 Discord 通道的配置灵活性。

2.  **系统稳定性与 Windows 兼容性**：
    *   **Windows ExecTool 修复**：合并了 [`#2893`](https://github.com/HKUDS/nanobot/pull/2893)，修复了强制使用 bash 导致 Windows 下 `exec` 工具无法运行的问题，实现了平台感知的 Shell 选择。
    *   **CLI 特殊字符崩溃修复**：合并了 [`#2869`](https://github.com/HKUDS/nanobot/pull/2869)，解决了在 Windows 输入特殊字符（如 Emoji）导致 CLI 崩溃的 `UnicodeEncodeError` 问题。

3.  **架构优化与生态集成**：
    *   **MCP (Model Context Protocol) 深度集成**：合并了 [`#2907`](https://github.com/HKUDS/nanobot/pull/2907)，将 MCP 服务器的资源和提示词暴露为只读工具，增强了 LLM 与外部工具的互操作性。
    *   **Agent 行为引导**：合并了 [`#2912`](https://github.com/HKUDS/nanobot/pull/2912)，改进了 Prompt 行为指令，使 Agent "执行而非叙述"，并提高了工具调用的可靠性。

## 🔥 社区热点
今日讨论热度最高的议题集中在版本升级后的兼容性和关键功能的缺失：

*   **[#2880 无论发什么消息都回复报错](https://github.com/HKUDS/nanobot/issues/2880)** (17 评论)
    *   **摘要**：用户报告升级后 Bot 对所有消息均报错，排查发现卸载重装无效，但在使用 nanobot agent 时能正常回复。这可能涉及网关或通道层的严重回归。
*   **[#235 "I've completed processing but have no response to give."](https://github.com/HKUDS/nanobot/issues/235)** (14 评论)
    *   **摘要**：长期 Issue，今日再次活跃。用户在使用 DeepSeek 时遭遇此无响应循环，反映出 LLM Provider 或 Loop 逻辑在处理空响应时的健壮性问题。
*   **[#2638 Session history grows unbounded](https://github.com/HKUDS/nanobot/issues/2638)** (6 评论)
    *   **摘要**：讨论内存整合系统失效导致 Session 无限增长，最终使 Agent 无响应。这是影响生产环境稳定性的核心问题。
*   **[#2892 定时任务的机制 - cron mechanism](https://github.com/HKUDS/nanobot/issues/2892)** (5 评论)
    *   **摘要**：用户质疑当前定时任务的设计——必须在创建后重启 Gateway 才能生效。这表明当前的微服务架构在动态负载配置方面存在用户体验痛点。

## 🐛 Bug 与稳定性
今日报告的 Bug 大多与最近的代码提交（v0.1.5 或 nightly 版本）直接相关：

*   **[High] [#2868 `exec` tool forced to use bash on Windows](https://github.com/HKUDS/nanobot/issues/2868)** (已修复)
    *   **影响**：Windows 用户无法使用任何基于 Shell 的技能。
    *   **状态**：PR [`#2893`](https://github.com/HKUDS/nanobot/pull/2893) 已合并修复。
*   **[High] [#2795 升级后泄露思考过程](https://github.com/HKUDS/nanobot/issues/2795)** (Closed)
    *   **影响**：升级后 Bot 将内部思考过程发送给用户，隐私泄露且体验变差。
    *   **状态**：已关闭，推测已随版本更新修复或调整。
*   **[Medium] [#2876 升级V0.1.5后飞书渠道报错](https://github.com/HKUDS/nanobot/issues/2876)** & **[#2875 找不到 config.paths](https://github.com/HKUDS/nanobot/issues/2875)**
    *   **影响**：模块依赖或安装路径问题导致特定通道或核心模块启动失败。
*   **[Medium] [#2905 cron 任务或子代理都会跑失败](https://github.com/HKUDS/nanobot/issues/2905)**
    *   **影响**：最新版本中定时任务和子代理无法获取最终结果，属于功能性回归。
*   **[Low] [#2846 CLI crashes with UnicodeEncodeError](https://github.com/HKUDS/nanobot/issues/2846)** (已修复)
    *   **影响**：输入 Emoji 导致 CLI 崩溃。
    *   **状态**：PR [`#2869`](https://github.com/HKUDS/nanobot/pull/2869) 已合并修复。

## 💡 功能请求与路线图信号
社区正向开发团队传递明确的架构演进需求：

*   **统一会话**：PR [`#2900`](https://github.com/HKUDS/nanobot/pull/2900) 正在实现跨通道 会话功能，允许用户在 Telegram 和 Discord 间无缝切换对话。这是高频需求。
*   **环境变量支持**：Issue [`#2849`](https://github.com/HKUDS/nanobot/issues/2849) 和 [`#2886`](https://github.com/HKUDS/nanobot/issues/2886) 反映配置解析器无法读取 `${VAR}` 环境变量，这限制了安全性（Docker Secrets 集成）。
*   **高层抽象重构**：Issue [`#2894`](https://github.com/HKUDS/nanobot/issues/2894) 和 PR [`#2896`](https://github.com/HKUDS/nanobot/pull/2896) 提议建立官方的 Provider/Channel/Memory 插件抽象层，以解决当前架构扩展性差的问题。

## 🗣️ 用户反馈摘要
*   **痛点**：v0.1.5 版本升级过程坎坷，多个用户报告了依赖缺失 (`lark_oapi`, `nanobot.config.paths`) 和配置失效的问题。
*   **机制困惑**：用户对 **Agent** 和 **Gateway** 的分工感到不解，特别是为何 Agent 创建的定时任务需要重启 Gateway 才能生效。
*   **Windows 支持**：Windows 用户长期处于"二等公民"状态，今日关于 Bash 强制执行和环境变量的问题引发了强烈抱怨。
*   **满意点**：多模态能力的增强（图片、语音）受到关注，特别是 DeepSeek 等模型的集成效果。

## ⚠️ 待处理积压
建议维护者优先关注以下长期未解决或影响广泛的问题：

*   **[#2493 LANGSMITH is not working (anymore)](https://github.com/HKUDS/nanobot/issues/2493)**：LangSmith 集成自 `litellm_provider.py` 移除后失效，影响可观测性。
*   **[#2638 Session history grows unbounded](https://github.com/HKUDS/nanobot/issues/2638)**：长对话场景下的内存泄漏风险，缺乏硬性限制机制。
*   **[#2604 Make memory consolidation fully asynchronous](https://github.com/HKUDS/nanobot/issues/2604)**：优化内存整理机制，防止阻塞 LLM 请求。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

你好！我是 Zeroclaw (AI 智能体与个人 AI 助手领域) 开源项目分析师。以下是 **2026-04-08** 的项目动态日报。

---

## 1. 今日速览
今日 Zeroclaw 项目处于**极高活跃度**状态，过去24小时内产生了 **50 条 PR** 和 **18 个 Issue**，显示出社区在多智能体系统、配置优化和适配器兼容性方面正在集中发力。
*   **核心进展**：多智能体系统功能基本就绪，DeepSeek V3.2 兼容性问题已修复，多个关于权限和 Windows 平台的 Bug 提交了修复 PR。
*   **关注点**：关于“安全机制过于严格导致工具无法使用”的讨论引发了社区共鸣，反映出高级用户对更灵活配置权限的强烈需求。
*   **风险提示**：内存溢出（OOM）和上下文泄露问题被标记为高风险，需尽快合并修复代码。

---

## 2. 版本发布
*   **无新版本发布**

---

## 3. 项目进展 (Merged/Closed PRs & Key Fixes)
今日无大量 PR 合并，但提交了大量待合并的修复方案，主要集中在运行时稳定性和提供商兼容性上：

*   **[PR #5454] 修复 DeepSeek V3.2 兼容性** (theonlyhennygod)
    *   **状态**：Open (已提交修复)
    *   **进展**：解决了 DeepSeek V3.2 模型的两个关键问题：System prompt 转义错误导致的 514 报错，以及 token 数量低估（~23%）导致的上下文溢出。
    *   **链接**：https://github.com/zeroclaw-labs/zeroclaw/pull/5454

*   **[PR #5456] 修复定时任务上下文泄露** (theonlyhennygod)
    *   **状态**：Open (已提交修复)
    *   **进展**：修复了 Cron 任务和 Heartbeat 在检索记忆时，会错误加载聊天记录中的隐私内容（`Conversation` 类记忆）的问题，隔离了不同场景的上下文。
    *   **链接**：https://github.com/zeroclaw-labs/zeroclaw/pull/5456

*   **[PR #5296] 修复 Windows ACCESS_DENIED 问题** (theonlyhennygod)
    *   **状态**：Open (已提交修复)
    *   **进展**：解决了在 Windows 10/11 上运行 `fsync` 目录同步时出现的“拒绝访问”错误，打通了 Windows 用户的 onboard 流程。
    *   **链接**：https://github.com/zeroclaw-labs/zeroclaw/pull/5296

*   **[PR #5468] 修正 Git 命令安全检查误报** (lesserevil)
    *   **状态**：Open (已提交修复)
    *   **进展**：修复了安全检查逻辑将 `git -C` (切换目录) 误判为 `git -c` (配置注入) 并拦截的问题，释放了被错误拦截的安全功能。
    *   **链接**：https://github.com/zeroclaw-labs/zeroclaw/pull/5468

---

## 4. 社区热点 (High Engagement)
今日社区讨论的焦点集中在**易用性与安全性的平衡**上：

*   **[Issue #1478] "除了安全,什么功能也没有"** (lenson-git) - 🔥 **热点话题**
    *   **摘要**：用户强烈抱怨 Zeroclaw 的安全限制过于死板，导致无法安装 ffmpeg 等工具，只能作为一个“聊天机器人”运行。用户希望能有一个配置项允许完全放开权限。
    *   **数据**：50+ 评论，7 👍。
    *   **分析**：这反映了 Zeroclaw 在向更广泛用户群体推广时面临的“安全悖论”——默认安全策略拦截了高级用户的自动化需求。
    *   **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/1478

*   **[PR #5423] 真正的多智能体系统** (DaBlitzStein)
    *   **摘要**：引入了基于工作区的多智能体定义、热重载和子代理路由功能。这是架构层面的重大升级。
    *   **链接**：https://github.com/zeroclaw-labs/zeroclaw/pull/5423

*   **[Issue #5447] 建议拆分 Crate 以加快编译** (jokemanfire)
    *   **摘要**：随着项目变大，单 Crate 编译时间过长，建议拆分为 `zeroclaw-core`, `zeroclaw-services` 等。
    *   **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/5447

---

## 5. Bug 与稳定性
今日报告的 Bug 较多，其中部分严重问题已有修复 PR：

*   **[S0 - 严重] [Issue #5425] Unexpected OOM and no reply**
    *   **描述**：在 Discord 中发送任意消息导致无响应和内存溢出。
    *   **状态**：待修复。
    *   **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/5425

*   **[S0 - 严重] [Issue #5415] Context spillage from chat to schedule**
    *   **描述**：Discord 聊天内容泄露到定时任务 的上下文中，造成数据隐私风险。
    *   **状态**：修复方案已提交 (PR #5456)。
    *   **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/5415

*   **[S1 - 阻断] [Issue #5459] Ollama provider 无法调用工具**
    *   **描述**：Ollama 提供者硬编码了 `tool_count=0`，导致所有支持原生工具调用的模型无法使用该功能。
    *   **状态**：Open。
    *   **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/5459

*   **[S1 - 阻断] [Issue #5452] DeepSeek V3.2 系统提示转义错误**
    *   **描述**：配置 DeepSeek V3.2 后，所有请求因 Jinja 模板错误失败。
    *   **状态**：修复方案已提交 (PR #5454)。
    *   **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/5452

*   **[S2 - 降级] [Issue #5465] Windows fsync 权限错误**
    *   **描述**：Windows 10 下运行 `zeroclaw config` 因目录同步权限问题失败。
    *   **状态**：修复方案已提交 (PR #5296)。
    *   **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/5465

---

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中分析出的未来开发方向：

*   **多智能体架构**：PR #5423 的活跃表明项目正从单一 Agent 向 Multi-Agent 系统转型，支持子 Agent 和独立配置。
*   **编译性能优化**：Issue #5272 和 #5447 都指向了编译速度和二进制体积优化，这通常是项目走向成熟和模块化的前奏。
*   **开放性与标准化**：
    *   Issue #5427 请求提供 OpenAI 兼容接口，以便接入各类第三方客户端。
    *   Issue #5440 请求为 Z.ai (GLM) 添加 Prompt Caching 支持。
*   **配置管理现代化**：Issue #5445 提议为 `config.toml` 添加 Schema 版本控制，以支持向后兼容。

---

## 7. 用户反馈摘要
*   **痛点 (安全沙箱)**：用户 **lenson-git** 在 #1478 中表达了对 Zeroclaw 严格的权限限制感到沮丧，认为这剥夺了 Agent 自动安装依赖的能力，使其沦为单纯的聊天机器人。这代表了一部分高级用户希望有“开发者模式”或“完全信任模式”。
*   **痛点 (认证流程)**：用户 **benb0jangles** 在 #5451 中反馈，在无头 设备上无法完成 6 位数字验证码的输入，因为没有 Web 界面，希望支持命令行直接输入。
*   **痛点 (平台兼容性)**：多位 Windows 用户报告了权限和文件系统相关的错误，显示 Windows 支持目前仍有摩擦。

---

## 8. 待处理积压
提醒维护者关注的长期或未响应议题：
*   **Issue #5272 (Binary size reduction)**: 这是一个优化追踪 Issue，涉及构建系统改进，需要持续跟进以防止项目膨胀。
*   **Issue #5463 (Permission not allowed)**: 关于工作区外文件夹访问的权限问题，描述信息不完整（只有 'e'），但标记为 S0 安全风险，需澄清并修复。
*   **PR #5314 (Gemini OAuth)**: 修复 Gemini CLI OAuth 刷新和速率限制问题的 PR 已提交数日，尚未合并，影响该 Provider 的正常使用。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-08)

**分析师:** AI Agent & Open Source Observer
**数据来源:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**统计周期:** 2026-04-07 08:00 - 2026-04-08 08:00 (UTC)

---

## 1. 今日速览
PicoClaw 项目今日处于**高度活跃**状态，代码提交与社区交互均达到高峰。
*   **代码吞吐量惊人**: 过去 24 小时内有 60 条 PR 更新，其中 20 条新提交的 PR 待审核，40 条已被合并或关闭，表明维护团队正在进行代码清理或集中处理积压工作。
*   **Agent 能力增强**: 社区聚焦于提升 Agent 的实用性，核心议题包括 HTTP 请求能力 (`curl` 工具)、流式响应优化以及浏览器自动化。
*   **配置与 Provider 稳定性**: 用户对多模型提供商配置的兼容性（如 Headers 注入、Fallback 机制）仍有大量反馈，显示异构模型接入是当前痛点。
*   **需关注安全**: 出现关于终端控制字符注入和 Channel 权限配置的安全/稳定性警告。

---

## 2. 版本发布
*   **当前状态**: 本周期内无新版本发布。
*   **推测**: 考虑到大量 PR 被合并（尤其是功能增强型），项目可能正在积累功能以准备下一个大版本（如 v0.2.6 或 v0.3.0），或者正处于活跃开发周期中。

---

## 3. 项目进展
今日合并/关闭的核心 PR 显示项目在**工具化**和**工程化**层面取得实质性进展：

*   **[Feature] Agent 工具箱扩充**
    *   **#2402 (CLOSED)**: 支持为 HTTP Provider 注入自定义 Headers。这解决了部分非标准 API（如 Coding Plan）无法接入的问题。
    *   **#2112 (CLOSED)**: 支持通过 `.well-known` URL 自动发现和安装 Agent Skills，极大简化了技能分发流程。
    *   **#2114 (CLOSED)**: 修复工具反馈 JSON 中的 HTML 转义问题，改善了 Shell 命令在聊天界面中的可读性。
*   **[Fix] 系统稳定性修复**
    *   **#2140 (CLOSED)**: 修复 `model_fallbacks` 逻辑错误。此前 Fallback 模型会错误继承主模型的 `api_base`，导致跨厂商（如 OpenAI -> DeepSeek）容灾失效。此修复至关重要。
    *   **#1978 (CLOSED)**: 统一了“重启服务”的检测逻辑，减少用户因配置变更产生困惑。
    *   **#2244 (CLOSED)**: 新增 Microsoft Teams Webhook 渠道，扩展了企业通讯场景。
*   **[Enhancement] 新功能并入**
    *   **#1987 (CLOSED)**: 集成了小米 MiMo 模型提供商。

---

## 4. 社区热点
今日讨论热度最高的功能请求集中在**Agent 执行力**与**系统可观测性**：

*   **[#2173 (Feature) LangSmith observability for agent tracing](https://github.com/sipeed/picoclaw/issues/2173)** 👍 关注度: 高
    *   **摘要**: 用户希望在复杂的 Agent 循环和工具调用链中加入 LangSmith 支持，以解决调试“黑盒”问题。
    *   **诉求**: 开发者需要结构化的 LLM 输入/输出追踪，以便在出错时快速定位。
*   **[#2409 (Feature) Improve handling of max_tool_iterations](https://github.com/sipeed/picoclaw/issues/2409)**
    *   **摘要**: 当工具调用达到迭代上限时，当前行为是直接停止。
    *   **诉求**: 用户希望系统能在达到上限时分析状态并建议增加迭代次数，而非直接报错或挂起，以提升任务完成率。
*   **[#2416 (PR) Add curl tool](https://github.com/sipeed/picoclaw/pull/2416)** (Open, 待审核)
    *   **动态**: 这是一个高价值 PR，允许 Agent 通过域名白名单访问外部 API，避免了直接执行 shell 命令的安全风险。

---

## 5. Bug 与稳定性
今日报告的 Bug 涉及网络、配置解析及前端交互：

*   **[Critical/Bug] Gateway 无法由 WebUI 启动**
    *   **[#2213](https://github.com/sipeed/picoclaw/issues/2213)**: WebUI 启动 Gateway 后连接失败。
*   **[High/Bug] 网络流处理异常**
    *   **[#2411 (PR) fix: handle split SSE stream chunk parsing](https://github.com/sipeed/picoclaw/pull/2411)**: 针对流式响应（SSE）中数据包截断导致的内容丢失问题进行了修复。
*   **[Medium/Bug] 配置与兼容性**
    *   **[#2374](https://github.com/sipeed/picoclaw/issues/2374)**: Gemini 模型调用失败，但 curl 正常，疑似 SDK 兼容性问题。
    *   **[#2381](https://github.com/sipeed/picoclaw/issues/2381)**: 安全警告 `allow_from is empty`，即使用户配置了飞书 `allow_from`，系统仍报告允许所有人访问。
*   **[Low/UI]**
    *   **[#2254](https://github.com/sipeed/picoclaw/issues/2254)**: 控制台对话框无法复制文字。
    *   **[#2376](https://github.com/sipeed/picoclaw/issues/2376)**: 移动端/Web UI 回车键直接发送消息，无法换行，缺乏独立发送按钮。

---

## 6. 功能请求与路线图信号
从新提 Issue 和 PR 中窥探项目走向：

*   **多模态/流式体验**: **[#2412 (PR) stream provider output](https://github.com/sipeed/picoclaw/pull/2412)** 尝试将流式输出传递给兼容渠道，显著提升用户感知的响应速度。
*   **浏览器自动化**: **[#2410 (PR) BrowserTool via CDP](https://github.com/sipeed/picoclaw/pull/2410)** 直接实现了基于 Chrome DevTools Protocol 的浏览器自动化工具，这对应了 Roadmap 中的高级功能，意味着 PicoClaw 下一代 Agent 将具备“眼睛”和“手”来操作 Web。
*   **成本控制**: **[#2408 (Feature) LLM Account Stacking](https://github.com/sipeed/picoclaw/issues/2408)** 提出类似“弹夹”的 API Key 轮换机制，暗示社区对 Token 配额管理和高可用性的强烈需求。
*   **CLI 现代化**: **[#2229 (PR) structured terminal UI](https://github.com/sipeed/picoclaw/pull/2229)** 正在重构 CLI 输出格式，使其更符合现代开发工具的视觉标准。

---

## 7. 用户反馈摘要
*   **痛点**: 模型配置极其复杂。用户对 `api_key`, `api_base`, `model_fallbacks`, `headers` 的配置逻辑感到困惑（Issue #2140, #2247, #2280）。
*   **场景**:
    *   **异构模型调用**: 用户尝试混合使用 OpenAI、DeepSeek、Gemini 和国产模型（硅基流动、小米 MiMo）。
    *   **边缘环境**: 出现 Termux (Android) 和 Windows (Git Bash) 环境下的构建和运行反馈。
*   **满意度**: 用户对功能更新速度（如添加 MiMo 支持）表示满意，但对文档更新滞后（如如何正确配置 Gemini）表示不满。

---

## 8. 待处理积压
*   **长期遗留**: **[#2050 (Feature) Makefile for Windows](https://github.com/sipeed/picoclaw/issues/2050)**: Windows 下的构建支持问题虽然活跃，但至今未完美解决，仍是 Windows 开发者的门槛。
*   **安全漏洞**: **[#2377 (Bug) unsafe terminal control characters](https://github.com/sipeed/picoclaw/issues/2377)**: `exec` 工具可能输出 ANSI 控制字符导致终端渲染欺骗或安全隐患，需优先处理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-08)

## 1. 今日速览
NanoClaw 项目今日呈现**极高活跃度**，显示出社区正致力于扩展其核心架构与通信能力。过去 24 小时内共有 15 条 PR 提交与 4 条新 Issue 开启，虽然代码合并率较低（仅 3 个 PR 关闭/合并），但提交内容聚焦于**多模态支持**、**长对话会话**及**多端消息互通**等核心痛点。项目正处于快速迭代期，开发者正积极尝试通过引入 OpenCode SDK 和增强容器生命周期管理来突破现有的单次对话模式限制。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
尽管今日仅有 3 个 PR 被关闭（另外 12 个仍处于 Open 状态待审核），但以下几个方向的开发工作正在全力推进，预计将显著提升项目的功能上限：

- **长任务/深度工作模式**: [PR #1687](https://github.com/qwibitai/nanoclaw/pull/1687) 引入了 `/deep` 和 `/end` 指令，旨在解决容器“即用即弃”导致的上下文丢失问题，支持最长 4 小时的绝对会话时间，这对代码重构等复杂任务至关重要。
- **清理与重置机制**: [PR #1692](https://github.com/qwibitai/nanoclaw/pull/1687) (已关闭) 增加了 `/clear` 命令，允许用户重置会话状态，提升了交互灵活性。
- **通道扩展**:
    - **Matrix 协议支持**: [PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624) 正在通过 `matrix-js-sdk` 实现完整的 E2EE 支持，标志着项目向去中心化通信迈出重要一步。
    - **Discord 集成增强**: [PR #1689](https://github.com/qwibitai/nanoclaw/pull/1689) 试图通过独立的线程通知机制加强与 GitHub PR 的联动。

## 4. 社区热点
今日讨论的焦点集中在**多媒体处理**和**多后端适配**上：

- **多媒体消息处理难题**:
    - **[Issue #1522](https://github.com/qwibitai/nanoclaw/issues/1522)** (👍: 1, 评论: 1) 反馈了一个关键体验问题：Agent 无法直接访问 WhatsApp 的照片和语音，只能看到 ID。该问题在昨天被更新，引发了社区对媒体文件处理能力的关注。相应的修复工作已在 [PR #1685](https://github.com/qwibitai/nanoclaw/pull/1685) 中展开，旨在解决带有 `[Photo]` 等前缀的消息无法触发指令的问题。
    - **[PR #1683](https://github.com/qwibitai/nanoclaw/pull/1683)** 提出了“通道无关的附件支持”方案，试图从根本上统一不同 IM 平台的文件处理逻辑。

- **AI 运行时多元化**:
    - **[Issue #1690](https://github.com/qwibitai/nanoclaw/issues/1690)** 和 **[PR #1628](https://github.com/qwibitai/nanoclaw/pull/1628)** 均致力于打破 Anthropic Claude 的独占局面，引入 OpenCode/Codex 作为备选后端。这反映了用户希望在不同模型（如本地模型与云端模型）之间灵活切换的强烈需求。

## 5. Bug 与稳定性
- **[严重] 媒体消息触发失效**:
    - 问题描述：转发包含附件的消息时，若前缀包含 `[Photo]` 等内容，由于正则表达式 `^` 锚点的限制，导致指令无法被识别。
    - 状态：修复中 -> [PR #1685](https://github.com/qwibitai/nanoclaw/pull/1685) (Open)。
- **[中等] 路径解析脆弱性**:
    - 问题描述：`process.cwd()` 依赖于启动目录，可能导致模块加载失败。
    - 状态：修复中 -> [PR #1612](https://github.com/qwibitai/nanoclaw/pull/1612) (Open)。

## 6. 功能请求与路线图信号
今日提交的 Issue 和 PR 清晰地描绘了 NanoClaw 未来的三个演进方向：

1.  **持久化/有状态会话**:
    - **[Issue #1686](https://github.com/qwibitai/nanoclaw/issues/1686)** 明确指出了当前“单次容器”模型的局限性，并请求支持“深度工作”模式。这表明项目正从“问答助手”向“深度编程助手”转型。
2.  **自动化上下文生成**:
    - **[Issue #1684](https://github.com/qwibitai/nanoclaw/issues/1684)** 建议利用 LLM 自动生成新话题的 `CLAUDE.md`。这意味着用户希望降低配置成本，实现开箱即用的智能初始化。
3.  **多模型运行时抽象**:
    - 社区对 **Codex/OpenAI SDK** 的支持请求频繁出现（[Issue #1690](https://github.com/qwibitai/nanoclaw/issues/1690), [PR #963](https://github.com/qwibitai/nanoclaw/pull/963)），预计“多模型支持”将成为下一版本的路线图重点。

## 7. 用户反馈摘要
- **痛点**:
    - **多媒体交互差**：WhatsApp 用户抱怨 Agent 无法“看见”图片或听语音，只能收到无效的 ID ([Issue #1522](https://github.com/qwibitai/nanoclaw/issues/1522))。
    - **上下文碎片化**：在处理长任务时，容器频繁重启导致推理链和工具调用结果丢失，用户感到效率低下 ([Issue #1686](https://github.com/qwibitai/nanoclaw/issues/1686))。
- **满意点**:
    - 目前 Issues 中未包含具体的正面反馈评论，主要聚焦于功能缺陷和增量需求。

## 8. 待处理积压
部分提交已久的 PR 仍处于 Open 状态，需维护者关注审核进度：

- **[PR #791](https://github.com/qwibitai/nanoclaw/pull/791)** (提交于 2026-03-07): Matrix 协议支持，已等待超过一个月。
- **[PR #963](https://github.com/qwibitai/nanoclaw/pull/963)** (提交于 2026-03-11): OpenAI Codex SDK 替代引擎，状态为 Needs Review。
- **[PR #1593](https://github.com/qwibitai/nanoclaw/pull/1593)** (提交于 2026-04-02): CI 加固与模型控制流。

---
**分析师备注**: 当前代码库正在经历从“单一 Claude 代理”向“多平台、多模型、长任务 Agent”的架构蜕变。建议关注 PR #1628 (Codex) 和 PR #1687 (Deep Mode) 的合并情况，这将是 vNext 版本的关键里程碑。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

你好！我是 AI 智能体与个人 AI 助手领域的开源项目分析师。以下是根据 **NullClaw** 项目 2026-04-08 的 GitHub 数据生成的项目动态日报。

---

# NullClaw 项目日报：2026-04-08

### 1. 今日速览
NullClaw 项目在过去 24 小时内保持了**中等活跃度**，核心功能维护与文档更新并行推进。社区贡献者 `manelsen` 主导了多个 Bug 修复与体验优化工作，显著提升了 Discord 与 Lark 渠道的稳定性。虽然暂无新版本发布，但针对微信集成、异步登录及定时任务的文档与代码补全显示出项目在向生产级可用性稳步迈进。目前共有 3 个新特性 PR 正在审查中，预计将增强定时任务能力和 Telegram 交互体验。

### 2. 版本发布
*   **当前状态**：无新版本发布。
*   **说明**：尽管有多个 PR 被合并，项目尚未打出新版本的 Release tag。

### 3. 项目进展
今日共合并/关闭了 **3 个 PR**，主要聚焦于即时通讯渠道的稳定性修复与文档完善：

*   **🔧 [Discord 定时私聊修复] (#719)**
    *   **状态**：已合并
    *   **内容**：修复了 Discord 定时私聊可能复用直接会话标识符导致发送失败的 Bug。新增了 `delivery_chat_id` 字段以确保延迟投递目标的准确性。
    *   **影响**：彻底解决了用户报告的 Discord 定时消息发送失效问题，保障了核心消息链路的完整性。
    *   **链接**：[nullclaw/nullclaw#719](https://github.com/nullclaw/nullclaw/pull/719)

*   **📝 [微信与异步登录文档补全] (#718, #736)**
    *   **状态**：已合并
    *   **内容**：#718 同步更新了中英文配置指南，详细说明了内置微信渠道的配置方法、Webhook 路径及多账户设置；#736 阐明了外部插件异步登录（如扫码、配对）的最佳实践，建议通过 `health` 端点而非 `start` 端点阻塞等待认证。
    *   **影响**：降低了新用户对接微信渠道及编写复杂插件的门槛，文档更加规范。
    *   **链接**：[nullclaw/nullclaw#718](https://github.com/nullclaw/nullclaw/pull/718) | [nullclaw/nullclaw#736](https://github.com/nullclaw/nullclaw/pull/736)

### 4. 社区热点
今日讨论的热点集中在**微信渠道集成**与**交互体验优化**上：

*   **🔥 热门 Issue：支持微信插件集成 (#714)**
    *   **状态**：已关闭（作为文档更新处理）
    *   **详情**：用户呼吁官方支持微信插件，指出 OpenClaw 已有相关插件且微信用户基数庞大。项目通过 #718 PR 补充了内置微信渠道的配置文档，实际上回应了这一需求，表明该功能已存在但此前缺乏文档指引。
    *   **链接**：[nullclaw/nullclaw#714](https://github.com/nullclaw/nullclaw/issues/714)

*   **✨ 体验优化 PR：Lark 飞书交互反馈 (#720)**
    *   **状态**：待合并
    *   **详情**：提出了在最终回复前发送“处理中”占位消息的机制，以改善用户感知延迟，防止用户重复发送指令。这是提升 AI 助手“拟人化”体验的重要一步。
    *   **链接**：[nullclaw/nullclaw#720](https://github.com/nullclaw/nullclaw/pull/720)

### 5. Bug 与稳定性
今日报告了 **1 个严重 Bug**，涉及运行时环境崩溃：

*   **🚨 [HIGH] Shell 命令执行全面失败 (#784)**
    *   **报告人**：liangkaichun
    *   **现象**：运行时环境报错 `docker: invalid empty volume spec`，导致所有工具无法执行。
    *   **诊断**：初步判断为 NullClaw 运行时容器的 Docker 配置问题，而非服务器本身故障。
    *   **状态**：**Open**（尚未关联 Fix PR）。
    *   **建议**：用户需检查 `nullclaw` 容器状态及日志，项目维护者需排查 Docker Volume 挂载配置逻辑。
    *   **链接**：[nullclaw/nullclaw#784](https://github.com/nullclaw/nullclaw/issues/784)

*   **🛡️ [MODERATE] Discord 定时消息目标无效 (#715)**
    *   **状态**：已修复（见 PR #719）。
    *   **详情**：已确认复用的 session ID 导致发送失败，现合入修复。
    *   **链接**：[nullclaw/nullclaw#715](https://github.com/nullclaw/nullclaw/issues/715)

### 6. 功能请求与路线图信号
从活跃的 PR 中可以看出项目正在拓展以下新能力，可能纳入下一版本：

*   **🚀 Cron 子代理引擎 (#783)**
    *   **信号**：引入数据库支持的调度器 (`cron_runs`)，支持 Skill/Agent/Shell 作业类型、JSON 输出及操作员警报。这标志着 NullClaw 正在从单纯的对话机器人向具备“长期记忆与主动执行”能力的智能体演进。
    *   **链接**：[nullclaw/nullclaw#783](https://github.com/nullclaw/nullclaw/pull/783)

*   **🤖 Telegram 技能菜单交互 (#782)**
    *   **信号**：计划增加 `/skills` 菜单和回调查询功能，并加固 Codex 超时处理。这将极大提升 Telegram 用户调用 AI 技能的便利性。
    *   **链接**：[nullclaw/nullclaw#782](https://github.com/nullclaw/nullclaw/pull/782)

### 7. 用户反馈摘要
*   **痛点**：用户反馈在 Lark/飞书渠道处理长耗时任务时缺乏即时反馈，容易造成交互断层（PR #720 尝试解决此问题）。
*   **环境问题**：用户遇到了 Docker 卷挂配导致的系统瘫痪，反映出部署阶段的稳定性仍需加强（Issue #784）。
*   **文档缺失**：社区曾抱怨微信集成缺乏官方文档支持，今日已通过 PR #718 得到积极回应。

### 8. 待处理积压
请维护者关注以下长期未解决或新开启的高优先级事项：

1.  **Issue #784 (Shell 命令执行失败)**：阻塞性 Bug，需立即排查 Docker 配置逻辑。
2.  **PR #783 (Cron 子代理)**：功能庞大，包含数据库迁移和核心调度逻辑，需尽快 Review 以避免合并冲突。
3.  **PR #720 (Lark 交互反馈)**：用户体验相关，建议优先合并以提升交互满意度。

---
*分析师备注：NullClaw 生态正在快速丰富，对第三方渠道（微信、Telegram、Lark）的支持日趋完善。建议重点关注 Issue #784 中 Docker 环境配置的共性排查方案，将其集成到报错提示或文档中以减少支持成本。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-08)

## 1. 今日速览
IronClaw 项目今日处于**高度活跃**状态，共处理了 63 个代码变更（13 Issues + 50 PRs），其中约三分之一的变更已成功合并。核心开发团队集中解决了 V2 架构中的**多租户性能瓶颈**、**Web UI 交互响应**以及**所有权模型的安全性**问题。今日合并的 PR 包含大量破坏性修复（如 SSE 事件顺序、跨租户凭证回退），表明项目正致力于提升生产环境的稳定性与安全性。同时，针对云部署场景的本地文件访问桥接方案已提上日程。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日合并了 16 个 PR，主要进展集中在修复 Bug 和优化用户体验：

*   **Web UI 核心交互修复**：
    *   **[#2124](https://github.com/nearai/ironclaw/pull/2124)**: 修复了 Web 端工具批准流程。现在用户在聊天框输入 "yes/no" 即可直接处理批准请求，无需点击按钮，大幅简化了操作流程。
    *   **[#2079](https://github.com/nearai/ironclaw/issues/2079)**: 修复了 SSE 事件顺序错误导致的聊天消息“卡死”问题，现在消息能实时渲染，不再需要刷新页面。
    *   **[#2122](https://github.com/nearai/ironclaw/pull/2122)**: 新增可见的“Stop”按钮和硬取消功能，解决了用户无法中断长时间运行的 Agent 对话的痛点。
*   **多租户与权限安全**：
    *   **[#2126](https://github.com/nearai/ironclaw/pull/2126)**: 统一了所有权检查逻辑，修复了非所有者用户创建的任务不可见的 Bug。
    *   **[#2099](https://github.com/nearai/ironclaw/pull/2099)**: 移除了 WASM 工具执行中危险的“跨租户静默凭证回退”机制，增强了多租户隔离的安全性。
*   **通道与集成优化**：
    *   **[#2103](https://github.com/nearai/ironclaw/pull/2103)**: 改进了 Telegram 配对流程，并标准化了通道的引导 模型。
    *   **[#2113](https://github.com/nearai/ironclaw/pull/2113)**: 实现了 Slack 通道的 `on_broadcast` 功能，允许 Agent 主动向 Slack 频道或用户发送消息。

## 4. 社区热点
*   **多租户性能优化提案**:
    *   **链接**: [#2127 (PR)](https://github.com/nearai/ironclaw/pull/2127) | [#2089 (Issue)](https://github.com/nearai/ironclaw/issues/2089)
    *   **热度**: ⭐⭐⭐⭐⭐
    *   **分析**: 针对“IronClaw 多租户响应非常慢”（回复简单问候需 5-10 秒）的反馈，核心贡献者提出了 PR #2127。分析指出约 18 秒的延迟中只有 1.7 秒是实际推理时间，其余损耗源于 Bridge 层的锁竞争和索引问题。该 PR 旨在通过“每会话锁”和“工作区索引”来解决，是当前最受关注的性能修复。
*   **本地/MCP 桥接需求**:
    *   **链接**: [#2117 (Issue)](https://github.com/nearai/ironclaw/issues/2117)
    *   **热度**: ⭐⭐⭐⭐
    *   **分析**: 用户强烈希望在云端部署的 IronClaw 能访问本地文件（如 Obsidian vaults）。Issue 提议开发 `ironclaw-bridge` 守护进程，这标志着项目正向混合云架构演进。

## 5. Bug 与稳定性
*   **[HIGH] 安全漏洞修复**: **[#2130](https://github.com/nearai/ironclaw/pull/2130)** 修复了 ACL 回归问题，此前任何用户都能管理系统共享任务，现已修复。
*   **[MEDIUM] 飞书通道配置失败**: **[#1633](https://github.com/nearai/ironclaw/issues/1633)** 报告了 `app_id not configured` 错误，导致无法回复消息，涉及 WASM 工作区配置传递问题。
*   **[MEDIUM] 数据库迁移校验和不匹配**: **[#1328](https://github.com/nearai/ironclaw/issues/1328)** 升级到 v0.19.0 时因迁移文件修改导致启动失败，目前仍有更新。
*   **[MEDIUM] Web UI 响应缓慢**: **[#2087](https://github.com/nearai/ironclaw/issues/2087)** 配置 Notion 后 Agent 停止响应，推测与工具链阻塞有关。
*   **[LOW] 不稳定的并发测试**: **[#2102](https://github.com/nearai/ironclaw/issues/2102)** Telegram Token 测试在并行运行时泄露环境变量，已在 PR #2091 中修复。

## 6. 功能请求与路线图信号
*   **图片模型配置化**: **[#2095](https://github.com/nearai/ironclaw/issues/2095)** 请求允许手动配置图片生成模型，以摆脱硬编码的 NEAR AI 模型限制。
*   **沙盒持久化**: **[#1938](https://github.com/nearai/ironclaw/pull/1938)** 正在开发持久化会话容器功能，允许在多次命令间保持文件状态和安装的包，这将极大增强 Agent 的工程能力。
*   **阿里云编码计划支持**: **[#1446](https://github.com/nearai/ironclaw/pull/1446)** 巨型 PR 正在添加阿里云百炼 的支持，显示项目正积极拓展国内云服务商生态。

## 7. 用户反馈摘要
*   **痛点**: 多租户下的延迟是当前最大的用户体验障碍（"simple questions takes 5-10 seconds"）。
*   **痛点**: Web UI 经常出现“假死”状态，用户在 Agent 处理任务时缺乏反馈（催生了 Stop 按钮的需求）。
*   **场景**: 用户不仅将 IronClaw 用于对话，还深度集成了 Notion、Slack 和飞书，对工具链的稳定性（如配置不中断）要求很高。

## 8. 待处理积压
*   **[#1328](https://github.com/nearai/ironclaw/issues/1328)**: 升级数据库迁移失败问题（自 3 月 17 日开放），影响老用户升级，需尽快给出迁移脚本或修复指南。
*   **[#1446](https://github.com/nearai/ironclaw/pull/1446)**: 阿里云集成 PR（自 3 月 20 日开放），跨度较大，需关注是否能在下一里程碑合并。
*   **[#1764](https://github.com/nearai/ironclaw/pull/1764)**: Abound 演示及相关功能（自 3 月 30 日开放），包含大量变更，处于待审核状态。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-08)

## 1. 今日速览
LobsterAI 项目今日呈现**极高活跃度**，过去 24 小时内产生了 50 条 PR 更新与 18 条 Issue 更新，项目正处于快速迭代与功能重构阶段。开发重心主要集中在**Cowork 协作增强**（标签、书签、统计）、**Provider 架构重构**以及**安全加固**三个方面。虽然未发布新版本，但大量 PR 的合并（12 条）表明代码库正在发生显著变化，特别是针对会话管理、UI 交互优化和底层 API 代理的安全性修复。

## 2. 版本发布
无新版本发布。当前处于活跃开发周期，多个功能正在密集集成中。

## 3. 项目进展
今日合并/关闭的关键 PR 显示项目在用户体验、安全性和国际化方面取得了实质性进展：

*   **安全与合规 (PR #1539 [CLOSED])**: 修复了 Web Search Bridge Server 的 CORS 配置漏洞，并增加了 URL scheme 校验，防止非 HTTP(S) 协议攻击。同时优化了打包时的临时文件清理。
*   **安全性增强 (PR #1535 & #1534 [OPEN])**: 针对 API 代理日志可能泄露凭证（API Key/Bearer Token）的风险，进行了脱敏处理；并为渲染进程的 KV Store 增加了键白名单，防止敏感数据被渲染层非法读写，强化了纵深防御。
*   **交互体验优化 (PR #1546 [OPEN])**: 针对引擎启动超时问题，增加了超时后的“取消启动”和“查看日志”按钮，解决了用户可能面临的 5 分钟硬等待死锁。
*   **国际化修复 (PR #1543 & #1540 [OPEN])**: 修复了审批对话框中硬编码的中文字符串，以及设置面板记忆模块的翻译问题，确保英文模式下 UI 的一致性。

## 4. 社区热点
今日讨论热点集中在**会话管理的效率工具**与**定时任务的逻辑缺陷**上：

*   **会话管理效率 (Issue #1541, #1528, #1525)**: 用户 `MaoQianTu` 连续提出多项关于会话列表的增强请求，包括**标签分类筛选**、**批量导出**和**颜色标注**。这反映出用户已从“使用”工具转向“管理”大量历史数据，急需更高效的组织手段。
*   **定时任务逻辑混乱 (Issue #1506, PR #1550)**: 社区关注定时任务在“不通知”模式下的行为。PR #1550 指出会话创建的任务无法像 UI 创建的任务那样正确处理 `mode=none`，导致运行时报错，目前已有修复方案正在审查中。
*   **OAuth 认证体验 (Issue #1516, PR #1544)**: 用户反馈在设置面板关闭后 GitHub Copilot 认证轮询未中止，导致 Token 静默丢失。该问题已引起重视，Fix PR 已提交。

## 5. Bug 与稳定性
今日报告的 Bug 涉及核心流程阻塞与配置缺失，严重程度中等偏高：

*   **[高] Skills 生成阻塞与感知缺失 (Issue #1509)**: 用户报告生成技能文件时长时间卡顿，无中间状态反馈，且相比同模型其他工具理解能力偏差。这是影响用户工作流的核心体验问题。
*   **[中] 网关反复重启 (Issue #1551)**: 网络环境切换可能导致网关陷入重启循环，影响客户端基本连接稳定性。
*   **[中] 任务假性完成 (Issue #1496)**: 任务显示完成但无实际返回结果，存在状态同步错误。
*   **[低] 设置页导出日志报错 (Issue #1097 [CLOSED])**: 之前的 `log:exportZip` 错误已被标记关闭。
*   **[低] IM Bot 配置校验缺失 (Issue #1512, #1504)**: QQ Bot 白名单无法通过 UI 添加（缺少输入框），POPO Bot AES Key 未做必填校验，属于表单完整性问题。

## 6. 功能请求与路线图信号
从 Issues 与新开启的 PR 来看，LobsterAI 正在大幅强化其作为“生产力工具”的属性：

*   **生产力功能显性化**:
    *   **标签系统** (Issue #1541 -> PR #1542): 已有 PR 实现会话标签分类，预计将很快合并。
    *   **书签系统** (Issue #1537 -> PR #1538 / #725): 消息收藏功能已在开发中，支持跨会话跳转。
    *   **数据可视化** (Issue #1532 -> PR #1533): 本地使用统计面板已提交 PR。
*   **底层架构演进**:
    *   **Provider 重构** (PR #1549, #1523): 正在进行 Provider 元数据的整合，减少维护成本，为支持更多模型做准备。
    *   **多 Agent 任务调度** (PR #1530): 开始支持在多 Agent 环境下指定任务归属。

## 7. 用户反馈摘要
*   **痛点**: **长会话管理困难**。用户表示面对数十条消息时，回溯查找关键信息“效率极低”，强烈需要书签功能（Issue #1537）。
*   **痛点**: **数据所有权与迁移**。用户要求批量导出会话（Issue #1528），说明用户对数据备份和跨设备迁移有强需求。
*   **满意度**: 暂无直接正面反馈，但大量功能请求表明用户对产品有较高期待和深入使用意愿。

## 8. 待处理积压
*   **Issue #1509 (Skills 生成阻塞)**: 涉及模型能力与 UI 反馈双重问题，需产品与算法团队协同解决。
*   **Issue #1551 (网关重启)**: 网络抖动导致的网关稳定性问题，需底层网络库介入排查。
*   **PR #725 (全局书签视图)**: 虽然 PR 已开启，但鉴于涉及较大架构改动（3个新文件），需关注其审查进度，防止长期积压。
*   **Issue #1513 (条款格式错误)**: UI 展示层的低级文本错误，建议快速修复以维护专业形象。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-08)

根据 2026-04-08 的 GitHub 数据分析，以下是 Moltis 项目的最新进展。

---

### 1. 今日速览
Moltis 项目在昨日保持了**极高**的迭代与响应速度。24小时内发布了 **2 个新版本**（20260407.01 与 20260406.05），集中修复了上下文窗口错误处理和 Token 缓存传递的关键 Bug。社区活跃度高，共产生了 12 条更新记录（6 Issues + 6 PRs），其中 **5 个 PR 已成功合并**，显示出维护团队对代码质量的强力把控和快速响应能力。当前需重点关注新发布的 Channel 会话功能中存在的严重 Bug。

### 2. 版本发布
昨日发布了两个补丁版本，主要包含错误修复和兼容性改进：
- **[20260407.01](https://github.com/moltis-org/moltis/releases/tag/20260407.01)** & **[20260406.05](https://github.com/moltis-org/moltis/releases/tag/20260406.05)**
  - **修复内容**：
    - **错误处理增强**：增加了对特定提供商（如 Z.AI）上下文窗口超限错误字符串的匹配，防止会话意外停滞。
    - **Token 缓存修复**：修复了 OpenAI 兼容接口中缓存 Tokens 归零的问题，确保 ` Responses API` 和自定义提供者能正确传递 `cached_tokens`。
  - **迁移注意事项**：无破坏性变更，建议所有用户更新以确保 Token 计费准确和会话稳定性。

### 3. 项目进展
今日合并的 PR 显著提升了系统的健壮性和用户体验：
- **[PR #581: fix(providers): propagate cache tokens...](https://github.com/moltis-org/moltis/pull/581)** (已合并)
  - **意义**：修复了影响计费和性能提示的关键 Bug，确保提示词缓存功能在 OpenAI 兼容层正常工作。
- **[PR #580: fix(agents): match provider-specific context window error strings](https://github.com/moltis-org/moltis/pull/580)** (已合并)
  - **意义**：增强了对话中断后的自动恢复机制，解决了特定模型报错时无法触发自动压缩上下文的问题。
- **[PR #575: feat(webhooks): generic webhook ingress...](https://github.com/moltis-org/moltis/pull/575)** (已合并)
  - **意义**：引入了通用的 Webhook 入口功能，支持 GitHub/GitLab/Stripe 等源，为 AI Agent 的外部触发能力打下基础。
- **[PR #544 & #583](https://github.com/moltis-org/moltis/pull/544)** (已合并/待合并)
  - **意义**：修复了 GraphQL 流程中的会话选择问题，并优化了 Web 端聊天列表的排序逻辑，提升了多会话管理的稳定性。

### 4. 社区热点
- **[Issue #578: CRITICAL: Channel sessions have empty system prompt](https://github.com/moltis-org/moltis/issues/578)**
  - **状态**：OPEN | **评论**：4
  - **分析**：这是昨日最严重的讨论热点。用户反馈在通过 Telegram/Discord 等渠道使用 Agent 时，系统提示词为空，导致 AI 没有任何身份、技能或工作区文件，完全无法自主工作。这是昨日高频版本发布后暴露的回归问题，需紧急处理。

### 5. Bug 与稳定性
今日报告的 Bug 涉及核心功能与新模型兼容性：
- **严重**：
  - **[#578 Channel sessions 会话"失忆"]**: Channel 会话未注入 System Prompt，导致 Agent 丧失核心能力。
  - **[#569 Matrix 渠道配置失效]**: (已关闭) 配置文件中添加 Matrix 渠道无法正确解析，导致无法接入。
- **中等**：
  - **[#582 MiniMax 2.7 参数校验过严]**: `spawn_agent` 接口在 `allow_tools`/`deny_tools` 为 `null` 时报错，而这两个参数理应为可选。

### 6. 功能请求与路线图信号
- **[PR #575: Webhook Support]** (已合并) —— **已实现**。通用 Webhook 入口已落地，标志着项目正朝着更开放的集成能力发展。
- **[Issue #571: Prompt Caching]** (已关闭) —— **已实现**。对应的修复 PR #581 已合并，表明性能优化正在按路线图推进。
- **[Issue #579: Session Rotation]** —— **建议纳入**。用户提出在 Channel DMs 中引入会话轮换机制以防止 Token 耗尽。这对于长期运行的 Channel 会话至关重要。
- **[Issue #577: Stop Connection Check Button]** —— **UI/UX 改进**。用户请求在 UI 层增加中断连接检查的按钮，以改善操作体验。

### 7. 用户反馈摘要
- **痛点**：渠道模式下 Agent "变傻" (Issue #578)，用户期望 Moltis 在多平台接入时保持与原生 Web 界面一致的能力注入。
- **性能敏感**：用户非常关注 Token 计费与缓存 (Issue #571)，这对高频使用场景至关重要。
- **集成灵活性**：关于 Matrix 渠道配置 (Issue #569) 的反馈显示，用户正在尝试将 Moltis 接入更多自建或非标准通讯平台。

### 8. 待处理积压
- **[#578 Channel sessions empty system prompt](https://github.com/moltis-org/moltis/issues/578)**: **优先级：最高**。直接影响多渠道部署的可用性，建议立即排查昨日版本变更。
- **[#579 Session rotation for channel DMs](https://github.com/moltis-org/moltis/issues/579)**: **优先级：高**。涉及长期运行的稳定性，需后端设计支持。

---
*数据来源：GitHub.com/moltis-org/moltis | 分析日期：2026-04-08*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-08)

## 1. 今日速览
CoPaw 项目在今日保持了极高的活跃度，展现了社区驱动的强劲发展势头。过去 24 小时内共有 **50 条 Issues** 和 **44 条 PRs** 发生变动，Issues 修复率高达 76%（38/50 关闭），PR 合并率也超过 50%。项目目前处于 **v1.0.x 维护期与新功能开发并行** 的阶段，社区贡献者非常活跃，大量 "first-time-contributor" 标签的出现表明项目正在吸引新鲜血液。虽然旧版本的 Bug（如 Docker 配置、上下文压缩）正在被集中清理，但新引入的功能（如计划模式、控制台前端构建）和部分模型（Gemma4, Qwen3.5）也暴露了一些稳定性问题，需要持续关注。

## 2. 版本发布
**无新版本发布。**
*注：项目目前主要基于 v1.0.1 及 v0.2.x 分支进行维护和功能迭代。*

## 3. 项目进展
今日合并/关闭的核心进展主要集中在 **核心稳定性修复** 和 **控制台体验优化**：

*   **核心稳定性**:
    *   **修复了 "取消任务" 竞态条件**: [PR #2987](https://github.com/agentscope-ai/CoPaw/pull/2987) 解决了用户在点击停止后发送新消息导致旧响应覆盖新消息的问题，并修复了 `CancelledError` 被静默吞噬导致任务无法真正终止的 Bug。
    *   **修复 Discord 消息截断 Bug**: [PR #2976](https://github.com/agentscope-ai/CoPaw/pull/2976) 优化了代码块分块逻辑，防止 Discord 消息超出 2000 字符限制。
    *   **修复 anyio 忙等待循环**: [PR #2634](https://github.com/agentscope-ai/CoPaw/pull/2634) 锁定了 anyio 版本，解决了 CPU 占用过高的问题。
*   **控制台与体验 (Console & UX)**:
    *   **控制台过滤逻辑修复**: [PR #2756](https://github.com/agentscope-ai/CoPaw/pull/2756) 修复了保存通道配置时错误开启 `filter_thinking` 和 `filter_tool_messages` 的问题，确保推理和工具调用信息按预期显示。
    *   **前端自动构建**: [PR #2996](https://github.com/agentscope-ai/CoPaw/pull/2996) 引入了启动时检测并自动重建前端的机制，解决了源码开发时 `git pull` 后界面不更新的痛点。
*   **新功能探索**:
    *   **多智能体会议系统设计**: [PR #2785](https://github.com/agentscope-ai/CoPaw/pull/2785) 提出了包含主持人、报告员、决策者的结构化会议系统设计文档。

## 4. 社区热点
今日讨论热度最高，最能反映社区关注点的内容如下：

*   **[#2291 🐾 Help Wanted: Open Tasks](https://github.com/agentscope-ai/CoPaw/issues/2291)** (评论: 42)
    *   **内容**: 官方开放的社区任务认领列表。
    *   **分析**: 这是今日最活跃的帖子，说明大量新贡献者正在涌入项目，寻求指导和任务分配。社区活跃度极高，开源协作氛围浓厚。
*   **[#1976 Error: Unknown agent error: RuntimeError](https://github.com/agentscope-ai/CoPaw/issues/1976)** (评论: 16)
    *   **内容**: 关于任务取消的运行时错误。
    *   **分析**: 该 Issue 关联了 PR #2987，反映了用户对"任务中断与恢复"这一基础稳定性的强烈关注。
*   **[#2097 Docker 部署升级后文件丢失](https://github.com/agentscope-ai/CoPaw/issues/2097)** (评论: 12)
    *   **内容**: v0.07 升级到 v0.1.0 后，Docker 挂载失效，Skills 和 Cron 任务消失。
    *   **分析**: 涉及数据持久化和升级兼容性，是运维和部署用户最担心的"数据丢失"类问题。

## 5. Bug 与稳定性
今日报告的主要 Bug 按严重程度排列：

1.  **[高危] 安全漏洞 (本地认证绕过)**: **[PR #2840](https://github.com/agentscope-ai/CoPaw/pull/2840)** 指出 `AuthMiddleware` 在环回接口直接连接时跳过 `/api/*` 认证。这在使用反向代理（如 cloudflared）时可能被远程攻击者利用。
    *   *状态*: PR 提交中，待合并。
2.  **[严重] 任务无法停止 (Stop 指令失效)**: **[#3049](https://github.com/agentscope-ai/CoPaw/issues/3049)** 报告 `/stop` 无法停止工具调用，导致会话卡死，且无法继续交流。
    *   *状态*: 待修复。这与已关闭的 [#2987](https://github.com/agentscope-ai/CoPaw/pull/2987) 问题相关但似乎未完全解决。
3.  **[严重] 模型死循环**: **[#2947](https://github.com/agentscope-ai/CoPaw/issues/2947)** Gemma4 模型陷入无限工具调用循环。
    *   *状态*: 待修复。
4.  **[中等] UI 交互缺陷**:
    *   **[#3048](https://github.com/agentscope-ai/CoPaw/issues/3048)**: 创建 Cron Job 时 ID 字段必填，但后端会自动生成 UUID，导致用户困惑。
    *   **[#2139](https://github.com/agentscope-ai/CoPaw/issues/2139)**: macOS 桌面端重启后 `config.json` 配置（语言、多智能体）被重置。
5.  **[中等] 数据库/持久化错误**:
    *   **[#3047](https://github.com/agentscope-ai/CoPaw/issues/3047)**: `memory_search` 假设使用 SQLite，未尊重配置的 Postgres，导致报错。

## 6. 功能请求与路线图信号
结合 Issues 和 PRs，以下功能可能被纳入未来版本：

*   **多智能体协作增强**:
    *   **[PR #3009](https://github.com/agentscope-ai/CoPaw/pull/3009)**: 在聊天输入框添加 @Agent 提及按钮，支持多智能体协作。
    *   **[PR #2785](https://github.com/agentscope-ai/CoPaw/pull/2785)**: 设计多智能体会议系统。
*   **任务规划模式**:
    *   **[PR #2904](https://github.com/agentscope-ai/CoPaw/pull/2904)**: 新增 `/plan` 模式，集成 AgentScope 的 PlanNotebook，允许 Agent 生成结构化步骤。
*   **无头任务执行**:
    *   **[PR #3031](https://github.com/agentscope-ai/CoPaw/pull/3031)**: 新增 `copaw task` CLI 命令，允许在无 Web 服务的情况下单次执行任务，支持自动化脚本。
*   **模型与渠道支持**:
    *   **[PR #2448](https://github.com/agentscope-ai/CoPaw/pull/2448)**: 添加 MiniMax OAuth 认证支持。
    *   **[PR #2463](https://github.com/agentscope-ai/CoPaw/pull/2463)**: 支持集成 OpenCode Zen。
*   **全局搜索**:
    *   **[PR #2842](https://github.com/agentscope-ai/CoPaw/pull/2842)** (已关闭): 实现跨所有聊天会话的搜索功能。

## 7. 用户反馈摘要
从今日评论中提炼出的用户真实痛点：

*   **升级焦虑**: 用户普遍反馈从 v0.07 升级到 v0.1.0/v0.2.0 时遭遇配置覆盖 ([#2236](https://github.com/agentscope-ai/CoPaw/issues/2236))、文件丢失 ([#2097](https://github.com/agentscope-ai/CoPaw/issues/2097)) 和依赖报错 ([#2014](https://github.com/agentscope-ai/CoPaw/issues/2014))，迁移路径不够平滑。
*   **模型适配问题**: Gemma4 陷入死循环 ([#2947](https://github.com/agentscope-ai/CoPaw/issues/2947))、Qwen3.5 无法开启思考模式 ([#3050](https://github.com/agentscope-ai/CoPaw/issues/3050))，显示对特定模型的行为控制仍需微调。
*   **上下文管理**: 上下文压缩导致幻觉内容注入 ([#2092](https://github.com/agentscope-ai/CoPaw/issues/2092)) 和任务中断 ([#1974](https://github.com/agentscope-ai/CoPaw/issues/1974)) 依然是影响体验的核心痛点。
*   **本地化与细节**: 中文路径下文件工具报错 ([#2004](https://github.com/agentscope-ai/CoPaw/issues/2004))、代码高亮导致界面错乱 ([#2037](https://github.com/agentscope-ai/CoPaw/issues/2037))，表明对非英文环境的细节打磨仍有不足。

## 8. 待处理积压
虽然今日处理了大量积压，但以下长期问题仍需关注：

*   **多用户隔离支持**: **[#1884](https://github.com/agentscope-ai/CoPaw/issues/1884)** (2026-03-19 创建) - 请求为每个用户提供隔离的 Agent 实例和工作空间，而非单一全局实例。
*   **Windows 客户端卡顿**: **[#2059](https://github.com/agentscope-ai/CoPaw/issues/2059)** (2026-03-22 创建) - 回复卡住，且缺乏从外部有效喊停的手段。
*   **邮件客户端兼容性**: **[#1992](https://github.com/agentscope-ai/CoPaw/issues/1992)** (2026-03-20 创建) - himalaya 邮件客户端配置格式不兼容问题。

---
**分析师建议**: 项目当前 Bug 清理速度较快，但需特别关注 **v1.0.x 升级过程中的数据持久化问题**，这是用户最敏感的红线。建议尽快合并安全补丁 [PR #2840](https://github.com/agentscope-ai/CoPaw/pull/2840) 并解决 Stop 指令失效的问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-04-08)

## 1. 今日速览
ZeptoClaw 项目今日处于**极高活跃度**状态，过去 24 小时内共合并了 **23 个 PR** 并发布了 **v0.9.2** 版本。项目核心开发节奏极快，主要集中在系统架构优化与依赖维护上。今日维护者 `qhkm` 完成了对贡献者 `stuartbowness` 提出的三个重大功能 PR 的 rebase 与合并，标志着“Browser Tool”、“多层上下文压缩”及“OpenRouter 路由”功能正式落地。同时，项目启动了针对二进制体积的“瘦身计划”，成功将核心二进制文件压缩至 10.66 MB。

## 2. 版本发布
**[v0.9.2](https://github.com/qhkm/zeptoclaw/releases/tag/v0.9.2)** 已正式发布。
- **运行时修复**：正确连接了 Landlock 工作区访问权限（由 @stuartbowness 贡献），增强了安全沙箱的稳定性。
- **面板依赖更新**：`tailwindcss` 版本从 4.2.1 升级至 4.2.2，同步了前端工具链的最新补丁。
- **TypeScript 更新**：虽然日志截断，但包含 `typescript-es` 相关的依赖升级。
- **迁移提示**：本次为非破坏性更新，建议所有用户尽快更新以获得最新的功能特性和安全修复。

## 3. 项目进展
今日合并的 PR 极大地拓展了 ZeptoClaw 的能力边界，主要进展如下：
- **Web 自动化能力集成**：合并了 **[feat(tools): add BrowserTool](https://github.com/qhkm/zeptoclaw/pull/502)**。通过集成 `agent-browser` CLI，引入了基于 Lightpanda 和 Chrome 回退机制的浏览器自动化工具，并增加了 SSRF 防护和引擎白名单机制。
- **上下文管理重构**：合并了 **[feat(agent): multi-layered context compaction](https://github.com/qhkm/zeptoclaw/pull/503)**。用 5 层防御深度的策略替换了原有的单次字数统计压缩，彻底解决了长对话中的 Token 溢出崩溃问题。
- **模型路由优化**：合并了 **[fix(providers): route vendor-prefixed models](https://github.com/qhkm/zeptoclaw/pull/501)**。修复了 OpenRouter 存在时的模型前缀路由逻辑，确保类似 `google/gemini-3-flash-preview` 的模型能被正确路由。
- **二进制瘦身**：合并了 **[chore(bloat): gate vertex provider](https://github.com/qhkm/zeptoclaw/pull/505)** 和 **[chore(ci): tighten binary size limit](https://github.com/qhkm/zeptoclaw/pull/506)**。通过将 Google Cloud Vertex 提供商设为可选依赖并移除 zopfli 编码器，成功将 Linux x86_64 版本体积从 11.2 MB 降至 10.66 MB，CI 限制回调至 11 MB。

## 4. 社区热点
今日讨论和合并的热点主要集中在底层架构与用户交互的优化上：
- **CLI 用户体验修复**：关闭了 **[#457 bug(cli): make feature-disabled panel subcommand fail with guidance](https://github.com/qhkm/zeptoclaw/issues/457)**。此前若用户编译时不包含 Panel 功能，调用子命令会报 Clap 错误；现在 CLI 会识别该命令并给出构建指引。此 Issue 虽无评论，但对用户友好度至关重要。
- **自定义工具参数类型**：合并了 **[feat(tools): add raw_string param type](https://github.com/qhkm/zeptoclaw/pull/500)**。引入了 `raw_string` 参数类型，允许自定义工具跳过 Shell 转义，配合加强版 sanitizer，解决了高级用户在封装 CLI 工具时的参数传递痛点。

## 5. Bug 与稳定性
- **严重性：高 (已修复)**
  - **CLI 错误引导缺失 (Issue #457)**：已关闭并随 v0.9.2 修复。用户在缺少 feature 时不再看到晦涩的框架报错。
- **严重性：中 (已修复)**
  - **模型路由错误 (PR #501)**：修复了在混合使用 OpenRouter 和直连供应商时，带前缀模型 ID 的路由混乱问题，防止服务启动失败。
- **稳定性增强**：PR #503 的合并在核心 Agent 层面解决了 Token 溢出导致的不可恢复崩溃，显著提升了长时间运行的稳定性。

## 6. 功能请求与路线图信号
今日无新增显性的 Feature Request Issues，但合并的功能 PR 暗示了路线图的执行情况：
- **浏览器自动化** (PR #502)：已完成。表明项目正朝向具备完整 Web 交互能力的 Agent 演进。
- **Agent 稳定性** (PR #503)：已完成。长上下文处理能力的提升为后续支持更复杂的任务链打下了基础。
- **云服务集成** (PR #505)：将 `google-cloud-auth` 设为默认关闭，暗示项目正优先优化轻量级部署体验，云服务集成将作为可选的高级特性。

## 7. 用户反馈摘要
由于今日活跃的 Issue 较少且多为 dependabot 自动更新，用户反馈主要来源于历史 Issue 的关闭：
- **痛点**：用户在构建精简版二进制时，对于 `panel` 命令消失感到困惑（Issue #457），倾向于希望 CLI 提供更具操作性的错误提示而非直接报错。
- **场景**：PR #500 中提到的 `raw_string` 需求显示，部分高级用户正在编写复杂的自定义工具包装器，他们需要绕过标准的 Shell 转义以实现更灵活的参数传递。

## 8. 待处理积压
当前无明显的长期积压。维护者 `qhkm` 展现了极高的代码审查和合并效率（昨日处理了 23 个 PR），且主动发起了二进制体积优化（PR #504-#506），项目维护处于非常健康的状态。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 - 2026-04-08

## 1. 今日速览
EasyClaw 项目今日在代码仓库层面处于**低活跃度**状态，但在版本迭代和国际化准备方面有重要进展。
- **代码合并**：今日无新的 PR 合并，主分支代码库保持静止。
- **社区互动**：过去 24 小时内无新增 Issue 或评论，社区讨论处于静默期。
- **版本推进**：项目发布了 v1.7.8 版本，标志着功能集的阶段性固化。
- **待办事项**：目前有 1 个重要的国际化（i18n）功能 PR 处于待合并状态，若通过将显著提升项目的多语言支持能力。

---

## 2. 版本发布
**[v1.7.8: RivonClaw v1.7.8]** - 发布于 2026-04-08
- **发布链接**: [Releases v1.7.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.8)
- **主要更新**:
  - 此版本主要侧重于稳定性与分发渠道的更新。
- **注意事项**:
  - ⚠️ **macOS 兼性性警告**: 发布说明特别指出了 macOS Gatekeeper 可能会拦截未签名的应用并提示“已损坏”。
  - **解决方法**: 用户需通过终端 移除隔离属性以正常运行应用。这表明该版本目前**未进行 Apple 开发者签名**，可能会影响部分 macOS 用户的开箱体验。

---

## 3. 项目进展
今日无合并或关闭的 PR。项目核心代码库未发生变更。
- **待处理进展**: 社区贡献者 @chinayin 提交的大规模国际化 PR (#21) 正在审查中，该功能已准备就绪，预计将在下一版本中显著提升项目的国际化能力。

---

## 4. 社区热点
**热点 PR: [feat(i18n): add 5 new languages #21]**
- **链接**: [gaoyangz77/rivonclaw#21](https://github.com/gaoyangz77/rivonclaw/pull/21)
- **状态**: Open (待合并)
- **热度分析**:
  - 该 PR 由 @chinayin 于 3 月中旬提交，最后更新于昨日 (4月7日)。
  - **内容概述**: 新增了繁体中文、日语、韩语、越南语和印地语支持。共计添加了 5 个翻译文件，覆盖了 1333 个翻译键值。
  - **诉求分析**: 社区对 EasyClaw 的多语言支持有强烈需求，特别是亚洲语系。贡献者已完成繁重的翻译工作（匹配 `en.ts` 基准），目前等待维护者审查合并。这是目前项目中最具技术含量的待办事项。

---

## 5. Bug 与稳定性
今日无新增 Bug 报告。
- **已知遗留问题**:
  - **macOS 误报**: v1.7.8 版本在 macOS 上可能遭遇 Gatekeeper 拦截（表现为应用损坏）。虽非代码 Bug，但属于用户体验层面的稳定性问题，建议用户参考发布说明中的终端命令解决。

---

## 6. 功能请求与路线图信号
**即将落地的功能**:
- **国际化 (i18n) 扩展**: 基于 PR #21 的活跃状态，下一版本极有可能正式支持日语、韩语等 5 种新语言。这表明项目正在积极拓展全球市场，特别是亚洲用户群体。

---

## 7. 用户反馈摘要
今日无新增用户评论或反馈。
- **历史痛点参考**: 从最新的 Release 说明中可以推断，macOS 用户对“应用已损坏”的报错较为敏感，需要频繁进行人工干预（终端命令）才能打开软件。建议维护者未来考虑加入代码签名或提供更详细的图文引导。

---

## 8. 待处理积压
**需关注 PR**:
- **[#21 feat(i18n): add 5 new languages](https://github.com/gaoyangz77/rivonclaw/pull/21)**
  - **状态**: 已 Open 3周+ (创建于 2026-03-18)
  - **重要性**: 高。涉及 1333 个键值的完整翻译，代码量大且已完成。
  - **建议**: 维护者应尽快进行代码审查，以防止代码随主分支变动而产生冲突，同时回应贡献者的劳动成果。

**总结**: 项目目前处于版本发布后的平稳期，主要任务已转向现有功能的完善（如多语言支持）和用户侧的安装问题解决。

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*