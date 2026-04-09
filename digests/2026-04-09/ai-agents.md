# OpenClaw 生态日报 2026-04-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-09 00:11 UTC

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

# OpenClaw 项目动态日报 (2026-04-09)

## 1. 今日速览
OpenClaw 项目今日处于**极高活跃度**状态，过去24小时内共处理了 1000 个 Issues 和 PRs，显示出强劲的开发动力与社区参与度。然而，项目目前面临严重的**稳定性挑战**，刚发布的 v2026.4.8 版本主要旨在修复 v2026.4.7 引入的打包和依赖缺失问题，但仍报告了大量运行时崩溃案例（特别是 `Cannot find module '@buape/carbon'` 错误），导致用户体验不佳。核心功能开发方面，社区正积极推动新的多模态能力（如 Krea AI 集成）和高级内存管理功能，但同时也暴露出对 Windows 平台兼容性、本地模型超时配置以及依赖管理流程的普遍担忧。

## 2. 版本发布
**发布版本：v2026.4.8** & **v2026.4.7**

**重点更新：**
*   **修复打包问题:** v2026.4.8 修复了 v2026.4.7 中引入的严重 Bug，解决了 Telegram 设置和捆绑频道在启动时因尝试导入不存在的 `dist/extensions/telegram/src/*` 文件而崩溃的问题。
*   **新增 CLI 推理:** v2026.4.7 引入了首级 `openclaw infer ...` 命令，支持跨模型、媒体、网络和嵌入任务的提供商支持推理工作流。
*   **媒体生成工具:** v2026.4.7 优化了媒体生成工具，增加了基于身份验证的图像、音乐和视频提供商的自动回退机制。

**破坏性变更与迁移注意事项：**
*   **依赖地狱警告:** v2026.4.7 及后续版本（含 4.8）的发布似乎破坏了 npm 全局安装的依赖树。用户频繁遇到 `Cannot find module '@buape/carbon'` 和 `grammy` 缺失错误。
*   **Windows 路径问题:** 存在回归问题，Windows 上的绝对路径未转换为有效的 `file://` URL，导致 `ERR_UNSUPPORTED_ESM_URL_SCHEME` 错误。

## 3. 项目进展
今日有 **500 条 PR** 更新，虽然待合并 PR 数量较多（374个），但以下关键工作正在推进：

*   **Markdown 格式保留:** [PR #63438](https://github.com/openclaw/openclaw/pull/63438) 修复了 Discord 消息分块时破坏表格、引用和内联格式的问题，提升了富文本消息的展示质量。
*   **模型选择器修复:** [PR #63416](https://github.com/openclaw/openclaw/pull/63416) 修复了 WebUI 中 OpenRouter 模型选择器导致的 "model not allowed" 错误，改善了用户切换模型的体验。
*   **新技能集成:** [PR #63439](https://github.com/openclaw/openclaw/pull/63439) 提出了 `quantum-memory` 技能，利用知识图谱和量子优化 (QAOA) 来增强 AI 的记忆连接能力；[PR #63435](https://github.com/openclaw/openclaw/pull/63435) 则集成了 Krea AI 捆绑技能，扩展了图像和视频生成能力。
*   **配置管理改进:** [PR #63105](https://github.com/openclaw/openclaw/pull/63105) 尝试将 `jobs.json` 拆分为配置和运行时状态文件，以减少不必要的 Git diff 噪音。

## 4. 社区热点
*   **#75 [Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75):** 长期悬而未决的需求 (77 评论)，用户强烈要求提供 Linux 和 Windows 的桌面客户端，以对标 macOS/iOS/Android 的功能。
*   **#49971 [RFC: Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971):** 高关注度提案 (76 评论)，讨论为 OpenClaw 引入基于 ERC-8004 和 W3C 标准的原生身份与信任验证机制，涉及 AI 代理的安全与去中心化身份。
*   **#62867 [Upgrade to 2026.4.7 broke OpenClaw](https://github.com/openclaw/openclaw/issues/62867):** 今日最热 Bug 讨论 (16 评论)，反映了用户对升级后系统无法启动的强烈不满，主要涉及配置验证失败和依赖缺失。

## 5. Bug 与稳定性
**严重程度：高**
*   **[#62994, #62272, #63225, #63043] Cannot find module '@buape/carbon':** 这是一个 **广泛存在的回归问题**。从 v2026.4.5 到 v2026.4.8，大量用户报告在通过 npm/brew 安装或更新时，因缺少 `@buape/carbon`、`@larksuiteoapi/node-sdk` 或 `grammy` 导致 Doctor 失败或启动崩溃。
    *   *状态:* v2026.4.8 尝试修复打包流程，但截至发稿时用户反馈仍有问题。
*   **[#61899, #62374] Windows ESM URL Scheme Error:** Windows 安装脚本 (`install.ps1`) 在最新版本中抛出 `ERR_UNSUPPORTED_ESM_URL_SCHEME` 错误，导致 Windows 用户无法安装。
    *   *状态:* 无明显 Fix PR。
*   **[#57898] Stability Complaints:** 用户激烈抨击版本更新频繁破坏现有功能（如工具使用），质疑缺乏稳定的版本分支。

**严重程度：中**
*   **[#62335] CLI Commands Hang:** 升级到 v2026.4.5 后，`openclaw devices list` 等命令无限挂起且无法被 Ctrl+C 中断。
*   **[#62505] Coding Agent Regression:** 编程代理在 v2026.4.2 之后不再完成实际代码任务，仅输出模糊的状态更新。

## 6. 功能请求与路线图信号
*   **实时语音对话:** [#7200](https://github.com/openclaw/openclaw/issues/7200) 请求通过 Twilio/WebRTC 集成实现类似电话的实时双向语音流交互。
*   **本地模型超时配置:** [#60203](https://github.com/openclaw/openclaw/issues/60203) 和 [#60636](https://github.com/openclaw/openclaw/issues/60636) 指出硬编码的 60秒 超时限制了本地慢速 LLM 的使用，请求遵守配置文件中的 `timeoutSeconds`。
*   **Nix 开发环境支持:** [PR #63417](https://github.com/openclaw/openclaw/pull/63417) 引入 Nix flakes 以提供可复现的开发环境和容器构建，这是基础设施层面的重要增强。
*   **分层 Bootstrap 加载:** [#22438](https://github.com/openclaw/openclaw/issues/22438) 建议对启动文件进行分层加载，避免在每次会话中浪费 LLM Context 窗口。

## 7. 用户反馈摘要
*   **负面体验:** 用户对 **"破坏性更新"** 感到极度疲惫和愤怒。多个 Issues (如 #57898, #63225) 中用户表示"每次更新都崩"、"这就是个造屎的项目"，特别是 npm 安装路径的依赖管理似乎完全失控。
*   **兼容性痛点:** Windows 用户感觉自己像二等公民，安装脚本经常出错，且路径处理存在原生 bug。
*   **正面反馈:** 尽管有稳定性问题，用户对核心代理能力（特别是 Coding Agent 在能工作时）和新引入的 CLI Infer 工具表示赞赏。同时也看到了社区对扩展能力（如量子记忆、多模态生成）的浓厚兴趣。

## 8. 待处理积压
*   **#28515 [vllm error]:** vLLM 集成问题自 2 月以来一直处于停滞状态。
*   **#25215 [web_fetch SSRF check]:** SSRF 检查机制错误地拦截了 Clash/mihomo 的 fake-ip 范围 (198.18.0.0/15)，导致代理用户网络受阻，至今未修复。
*   **#47705 [Fallback Model Overwrite]:** Fallback 模型会永久覆盖 Agent 配置文件中的主模型配置，导致主模型永远无法被重试，这是一个逻辑层面的严重 Bug。
*   **#43821 [Global HTTP Proxy]:** 请求增加标准环境变量 (`HTTP_PROXY`) 支持以适应企业网络环境。

---

## 横向生态对比

以下是基于 2026-04-09 各开源项目动态的**横向对比分析报告**。

---

# 2026-04-09 个人 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
今日开源 AI 智能体生态处于**极高活跃度与剧烈震荡期**。头部项目（如 OpenClaw）在引入新特性（多模态、Agent 编排）的同时，正面临严重的稳定性债务，频繁的破坏性更新引发用户信任危机；中腰部项目（如 NanoClaw, Moltis）则在快速补齐短板，重点优化**企业级落地的最后一公里**（如 Windows 兼容性、凭证管理、长任务容错）。整体技术趋势正从单一的“文本对话机器人”向具备**记忆持久化、跨平台工作流自动化及多模态感知**的“第二代个人 AI 操作系统”演进，但**安装/依赖地狱**已成为制约用户体验的最大痛点。

## 2. 各项目活跃度对比

| 项目 | Issues | PRs | Release | 活跃度评级 | 健康度/趋势 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **OpenClaw** | 1000+ | 500 | v2026.4.8 | 🔴 极高 | ⚠️ **动荡**：功能强劲但 Bug 回归严重，用户因稳定性不满。 |
| **NanoBot** | 22 | 43 | - | 🟠 高 | 📈 **上升**：快速迭代，架构重构中，社区参与度高。 |
| **Zeroclaw** | 93 | 14 | v0.6.9 | 🟠 高 | 🟢 **稳健**：配置系统重构与 Bug 修复并重，方向明确。 |
| **IronClaw** | 13 | 50 | - | 🟠 高 | ⚠️ **阻塞**：PR 积压严重，基础设施 存在问题。 |
| **CoPaw** | 50 | 50 | v1.0.2-b1 | 🟠 高 | 🔥 **过热**：CPU 泄漏问题突出，但新特性（Plan 模式）亮眼。 |
| **PicoClaw** | 14 | 27 | v0.2.6 | 🟠 高 | 🟢 **优化**：引入进程隔离，向安全沙箱方向成熟。 |
| **NullClaw** | - | 8 | v2026.4.7 | 🟡 中 | 🟢 **修补**：集中解决了 Windows 体验问题，文档完善。 |
| **NanoClaw** | 5 | 10 | - | 🟡 中 | 🟢 **稳定**：聚焦运维体验（Docker/UV 缓存），无破坏性变更。 |
| **LobsterAI** | ~42 | 9 | v2026.4.8 | 🟡 中 | 🟢 **修补**：IM 生态集成增强，新手引导改进。 |
| **Moltis** | 6 | 7 | 20260408.01 | 🟡 中 | 🟡 **响应**：关键 Bug（MiniMax 注入）修复快，但有新报。 |
| **TinyClaw** | 3 | 0 | - | 🟢 低 | 🔵 **规划**：无代码合并，处于需求收集与架构讨论期。 |
| **EasyClaw** | 3 | 0 | v1.7.8/9 | 🟢 低 | 🟢 **维护**：处于维护模式，快速响应工单，无新功能开发。 |
| **ZeptoClaw** | 0 | 0 | - | ⚪ 停滞 | ⚫ **沉寂**：无数据/无活动。 |

## 3. OpenClaw 在生态中的定位
*   **优势**：生态最为庞大，拥有最广泛的插件和集成选项（今日集成了 Krea AI）。是“野心”最大的项目，试图覆盖从 CLI 到 GUI 的所有场景。
*   **技术路线**：激进的全栈自研，倾向于将所有功能打包进单一单体仓库，这导致了复杂的依赖树。
*   **现状对比**：与 **NanoClaw**（专注于轻量级、容器化部署）和 **Zeroclaw**（专注于配置现代化和 Dashboard）相比，OpenClaw 目前正陷入“能力越强，崩溃越多”的陷阱。其社区规模虽大，但今日的满意度反馈（负面抱怨占比高）是所有项目中最低的，主要竞争对手正利用其 Windows 不稳定和依赖问题争夺用户。

## 4. 共同关注的技术方向
以下需求在多个项目中同时出现，显示出行业共识：

*   **长任务稳定性与“看门狗”机制**
    *   **涉及项目**: **OpenClaw** (请求重试机制), **Moltis** (Agent 任务中断自动续跑), **IronClaw** (反漂移自检 PR), **NanoClaw** (长任务无重试抱怨).
    *   **诉求**: Agent 执行长流程任务时容易因网络抖动或 API 错误中断，所有头部项目都在寻求建立“断点续跑”或“自动重试”机制，以保障自动化工作流的可靠性。

*   **统一内存与上下文管理**
    *   **涉及项目**: **NanoBot** (语义检索与上下文压缩), **OpenClaw** (quantum-memory 技能), **NanoClaw** (持久化记忆图谱 PR).
    *   **诉求**: 纯粹的对话历史已无法满足需求，社区强烈倾向引入向量数据库和知识图谱，实现跨会话的长期记忆和精准的信息召回。

*   **跨平台与多通道统一体验**
    *   **涉及项目**: **OpenClaw** (Linux/Windows 桌面端请求), **NanoBot** (统一会话 Unified Session), **IronClaw** (私有网络部署).
    *   **诉求**: 用户希望在不同 IM（Telegram/Discord/飞书）和不同设备（手机/PC）之间获得无缝的一致体验。

*   **模型无关性与成本控制**
    *   **涉及项目**: **NanoClaw** (多运行时 SDK 抽象), **TinyClaw** (rtk-ai 集成优化 Token), **CoPaw** (技能路由降低 Token).
    *   **诉求**: 避免 Vendor Lock-in，以及在能力不变的前提下优化推理成本。

## 5. 差异化定位分析
*   **OpenClaw**: **“瑞士军刀”**。功能最全，但最重。适合极客玩家和愿意折腾的开发者。
*   **NanoClaw / NanoBot**: **“轻量级容器战士”**。强调 Docker 亲和性、快速启动和脚本化集成。适合 DevOps 场景和服务器部署。
*   **Zeroclaw / IronClaw**: **“控制台与编排者”**。重视 Dashboard UI、配置管理 和多租户安全。适合团队协作和企业级内网部署。
*   **PicoClaw**: **“安全沙箱”**。今日重点突出了进程隔离，关注边界安全，适合对安全性要求较高的自动化场景。
*   **LobsterAI**: **“IM 生态连接器”**。基于网易有道背景，特别强化了对钉钉、飞书等国内企业 IM 的深度适配。
*   **Moltis**: **“功能修补匠”**。侧重于解决特定 Provider（如 MiniMax, LM Studio）的兼容性问题和体验细节。
*   **EasyClaw**: **“极简桌面版”**。专注于提供开箱即用的桌面客户端，维护节奏平稳，适合普通非技术用户。

## 6. 社区热度与成熟度
*   **第一梯队 (快速迭代/引入新特性)**: **OpenClaw**, **CoPaw**, **NanoBot**。
    *   *特征*: 每日数十至上百个 PR。但也因此伴随着频繁的 Bug 回归（如 CoPaw 的 CPU 泄漏、OpenClaw 的依赖崩溃）。
*   **第二梯队 (质量巩固/基础设施优化)**: **Zeroclaw**, **IronClaw**, **PicoClaw**, **NanoClaw**。
    *   *特征*: 正在重构底层系统（如配置 Schema、凭证系统、运行时隔离），为了支撑下一阶段的规模化。
*   **第三梯队 (维护模式/特定场景)**: **Moltis**, **LobsterAI**, **NullClaw**, **EasyClaw**。
    *   *特征*: 活跃度适中，主要响应 Bug 反馈和特定平台（如 Windows、macOS）的适配工作。

## 7. 值得关注的趋势信号
1.  **"Windows 兼容性"不再是可选项**：
    今日 **OpenClaw**, **NullClaw**, **NanoBot**, **IronClaw**, **EasyClaw** 等多个项目都集中爆发了 Windows 相关的 Issue（从路径错误到二进制签名）。这表明开源 AI Agent 的主力用户群正在从原本的 Linux/macOS 开发者向 Windows 大众用户渗透，**对 Windows 的优先级支持**将成为获取市场份额的关键。
2.  **从 "Prompt Engineering" 到 "工程化"**：
    社区讨论的焦点不再是简单的 System Prompt 调优，而是转向了**进程隔离**、**Nix 环境**、**CI/CD 流水线**、**MCP 协议**等硬核工程问题。这意味着 AI Agent 开发正在从“魔法调优”转向“软件工程”范畴。
3.  **多模态交互的刚需**：
    **OpenClaw** (Krea AI), **LobsterAI** (文件上传), **Moltis** (语音/视频支持) 的动态显示，用户不再满足于纯文本，对**图片理解、语音交互和文件操作**的需求激增，这对 Agent 的工具调用架构提出了更高要求。
4.  **成本焦虑下的本地化**：
    **TinyClaw** 和 **IronClaw** 社区对私有网络部署、本地模型支持（LM Studio, Ollama）的强烈呼声，以及对 **Token 优化** 的关注，反映了在 API 成本居高不下的背景下，**混合架构（云端大模型+本地小模型/工具）**将成为主流架构选型。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 - 2026-04-09

## 📊 今日速览
今日 NanoBot 项目处于**极高活跃度**状态。过去24小时内新增了 22 条 Issues 和 43 条 Pull Requests，表明社区参与度极高且代码贡献频繁。核心讨论集中在**架构改进**（多渠道统一会话、高层抽象）与**特定模型的兼容性**（Gemma 4 思维链泄露）上。虽然无新版本发布，但多个关键 Bug 修复（如 Discord 空回复、Windows 执行环境、版本号不一致）已合并至主分支，显示出项目迭代速度极快。

---

## 🚀 版本发布
**无新版本发布**
*注：尽管代码库活跃，今日未推送新的 Release 版本。大量功能正在通过 PR 快速集成到 `main` 或 `nightly` 分支。*

---

## 📈 项目进展
今日合并/关闭的核心进展涵盖了从基础设施稳定性到具体功能修复的多个层面：

1.  **关键 Bug 修复**
    *   **[CLOSED] Discord 空回复问题 (#2939)**: 修复了 Discord 渠道在非流式模式下可能产生空最终响应的 Bug，使其行为与 Telegram 等其他渠道保持一致。(PR #2939)
    *   **[CLOSED] 版本号不一致 (#2860)**: 统一了版本信息来源，使用 `importlib.metadata` 作为单一真实来源，解决了 `__init__.py` 与 `pyproject.toml` 版本号不匹配的问题。(PR #2860)
    *   **[CLOSED] 定时任务并发问题 (#2930)**: 解决了 Cron 任务在多进程环境下可能出现的任务覆盖与调度失效问题，增强了定时任务的可靠性。(PR #2930)

2.  **体验优化与重构**
    *   **[CLOSED] Hook 机制重构 (#2918)**: 为 `AgentHook` 添加了 `reraise` 参数，允许异常向上传播，并移除了 `_LoopHookChain`，简化了钩子处理逻辑。
    *   **[CLOSED] 飞书体验细节 (#2751)**: 修复了飞书渠道在回复后未移除 "正在输入" 表情符号的问题。

---

## 🔥 社区热点
今日社区讨论最热烈的话题集中在架构演进与新模型适配：

1.  **架构重构讨论: 官方高层抽象 (#2894)**
    *   **状态**: [CLOSED] (已达成共识)
    *   **内容**: 社区发起了一项关于为 Providers、Channels 和 Memory 建立官方高层抽象的提案。讨论涉及如何在保持灵活性的同时，为下游扩展提供更规范的上游接口。
    *   **分析**: 该 Issue 虽然关闭，但显示了社区对于构建更规范插件生态的强烈诉求。

2.  **新模型适配: Gemma 4 思维泄露 (#2944) & (#2953)**
    *   **状态**: [OPEN] (有修复 PR)
    *   **内容**: 用户报告 Gemma 4 模型的 `<thought>` 标签内容会直接泄露给用户。
    *   **反馈**: 社区反应迅速，几小时内即诞生了修复 PR #2953，旨在扩展 `strip_think()` 函数以支持 `<thought>` 标签过滤。

3.  **功能探讨: NanoBot 是否需要原生 WebUI? (#2949)**
    *   **状态**: [OPEN]
    *   **内容**: 针对项目目前仅有调试用 Web 界面，用户提议开发功能完整的 WebUI。
    *   **分析**: 这是一个长期的方向性议题，反映了用户除 CLI/IM 聊天外，对可视化操作界面的需求。

---

## 🐛 Bug 与稳定性
今日报告的 Bug 涉及环境兼容性、系统提示词泄露及渠道适配问题：

1.  **[HIGH] Windows `exec` 工具强制使用 Bash 导致不可用 (#2868)**
    *   **描述**: 某次提交后，`exec` 工具强制调用 `bash`，导致 Windows（无 WSL 或 WSL 配置不当）环境下无法执行命令。
    *   **状态**: 待修复。

2.  **[MEDIUM] 系统提示词元数据泄露给用户 (#2947)**
    *   **描述**: v0.1.4.post6 版本后，原本仅用于内部 Context 的元数据（如时间、Channel ID）被作为消息发送给了用户。
    *   **状态**: 待修复，影响用户体验的严肃 Bug。

3.  **[MEDIUM] Windows Docker Desktop 插件发现失败 (#2941)**
    *   **描述**: Windows 环境下由于缺少环境变量转发，导致 Docker CLI 插件发现失败。
    *   **状态**: 已有修复 PR (#2941)。

4.  **[MEDIUM] 升级到 0.1.5 后找不到 Python (#2917)**
    *   **描述**: 更新版本后，技能执行报错找不到 Python 解释器，影响核心功能使用。

5.  **[LOW] MSTeams 渠道配置暴露未实现 (#2921)**
    *   **描述**: 配置文件中暴露了重启通知相关的配置项，但代码中实际并未实现该逻辑。

---

## 💡 功能请求与路线图信号
从今日活跃的 PR 和 Issues 中，可以窥见未来几个版本的功能走向：

1.  **统一会话管理 (#2900)**
    *   **信号**: 实现了 `config.json` 中的 `unifiedSession` 开关。
    *   **影响**: 允许用户在不同渠道（如从 Telegram 切换到 Discord）间保持同一对话上下文。这是一个高价值的新功能，可能很快被合并。

2.  **多模态支持扩展 (#2908)**
    *   **信号**: 正在重构多模态管道，从仅支持图片扩展到支持音频和视频。
    *   **影响**: 表明 NanoBot 正在从纯文本/图片助手向全富媒体交互平台演进。

3.  **WebSocket 通道 (#2946, #2911)**
    *   **信号**: 多个 PR 致力于添加 WebSocket 服务端通道及测试。
    *   **影响**: 这可能是为了支持更灵活的第三方集成或即将到来的 WebUI 功能铺路。

4.  **语义检索与上下文压缩 (#2937)**
    *   **信号**: 讨论引入基于 Embedding 的上下文压缩。
    *   **影响**: 解决长对话中的 Token 限制问题，提升记忆系统的效率。

---

## 🗣️ 用户反馈摘要
*   **痛点**:
    *   **Windows 兼容性**: 多位用户反馈在 Windows 环境下执行技能 和 Docker 相关操作存在障碍 (#2868, #2917)。
    *   **无法干预循环**: 用户反映当 Agent 进入工作循环时，如果方向错误，很难通过对话打断它，只能看着它继续执行错误的步骤 (#2915)。
    *   **安装体验**: 有用户反馈无法通过 PIP 安装 `[api]` 额外功能 (#2925)，说明分发配置可能存在遗漏。

*   **场景**:
    *   **跨平台同步**: 用户强烈希望在 Discord、Telegram 等不同 IM 平台间无缝切换对话 (#2798)。

---

## ⏳ 待处理积压
以下 Issue 长期开放且尚未解决，建议维护者关注：

*   **Matrix 验证 (#2641)**: 自 3 月底提出，关于支持 Matrix 协议的 Emoji 验证功能。
*   **DingTalk 文件发送错误 (#2696)**: 发送 HTML 文件到钉钉时出错，属于特定渠道的适配问题。
*   **自定义 System Prompt Emoji (#2747)**: 用户希望自定义或禁用硬编码在 System Prompt 中的 🐈 emoji。

---
*数据来源: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 生成时间: 2026-04-09*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报：2026-04-09

## 📊 今日速览
ZeroClaw 项目今日处于**极高活跃度**状态。过去 24 小时内共处理了 **93** 个更新（Issues + PRs），显示出社区强劲的贡献势头。核心开发重点集中在 **配置系统重构（Schema V2）**与 **Agent 工具调用修复**。新版本 **v0.6.9** 已发布，带来了 CLI 配置管理工具和显著的默认行为变更（如默认启用浏览器工具）。同时，随着大量关于 Gemini/Ollama 提供商和 Telegram 通道的 Bug 修复合并，系统的稳定性与兼容性得到了进一步提升。

---

## 🚀 版本发布：v0.6.9
**发布时间：** 2026-04-09
**核心亮点：**
*   **配置管理增强**：新增 `zeroclaw props` CLI 工具，支持宏配置与属性管理；默认启用浏览器工具并自动批准。
*   **Dashboard 交互升级**：Gateway 现在支持将 Cron 任务结果广播给 WebSocket 客户端，并为 Dashboard 日志持久化增加了 SSE 事件缓冲。
*   **默认行为变更**：默认启用心跳 机制。
*   **开发者体验**：构建产物不再显示为未跟踪文件（已修复 `.gitignore`）。

---

## 🔧 项目进展
今日共有 **14** 个 PR 被合并或关闭，显著推动了项目的成熟度：

*   **配置系统现代化**：合并了 PR #5510 ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5510))，修复了因 `Option<T>` 类型字段导致的虚假“未知配置键”警告。这为后续的大规模配置迁移奠定了基础。
*   **通道功能完善**：
    *   **Telegram**：修复了批量媒体图片发送导致的多重请求问题 (#5525)，以及 TTS 语音回复在流式模式下失效的问题 (#5419)。
    *   **CLI 支持**：修复了 `zeroclaw channel send` 命令无法识别 14 个已配置通道的问题 (#5506)。
    *   **流式输出**：修复了 Qwen 等模型流式输出时泄露 `think` 标签的问题 (#5505)。
*   **模型兼容性**：解决了 DeepSeek V3.2 的系统提示词转义和 token 估算偏差问题 (#5454)。

---

## 🔥 社区热点
**讨论最活跃的 Issues（Top 3）：**

1.  **[#4657 Matrix channel: friction tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)** (9 评论)
    *   **内容**：追踪 Matrix 通道的所有摩擦点，特别是 E2EE（端到端加密）相关的重试循环问题。
    *   **分析**：这是一个长期的痛点汇总帖，社区对于 Matrix 通道的稳定性（尤其是加密房间）有强烈的不满和改进需求。

2.  **[#4866 Web dashboard is still not available](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)** (8 评论)
    *   **内容**：Web UI 和 Tauri 桌面端持续报错“Web dashboard not available”，要求用户手动构建前端。
    *   **分析**：这是一个高严重性的用户体验问题，影响了开箱即用的承诺，多个版本未能彻底解决引发了用户焦虑。

3.  **[#4916 auto_save creates recursive memory snowball](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)** (8 评论)
    *   **内容**：`auto_save` 功能导致 `[Memory context]` 被递归保存，迅速耗尽内存。
    *   **分析**：这是一个危险的逻辑 Bug，可能导致守护进程崩溃。用户担心数据损坏和资源耗尽，请求优先修复。

---

## 🐛 Bug 与稳定性
**今日报告的关键 Bug（按严重程度排序）：**

*   **[S1 - 阻断] Gemini-3 模型间歇性失败** [#5529](https://github.com/zeroclaw-labs/zeroclaw/issues/5529)
    *   现象：Gemini-3-flash-preview 频繁重试，无法返回结果。
*   **[S1 - 阻断] Ollama 模型工具调用限制** [#5500](https://github.com/zeroclaw-labs/zeroclaw/issues/5500)
    *   现象：代码硬编码 `supports_native_tools() = false`，导致支持工具调用的模型（如 qwen3.5）被迫使用低效的 XML 模拟。
    *   **状态**：已有修复 PR #5523 ([Open](https://github.com/zeroclaw-labs/zeroclaw/pull/5523))。
*   **[S0 - 风险] 安全路径检查过于严格** [#5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518)
    *   现象：Shell 重定向目标（如 `/dev/null`）被 `forbidden_path_argument` 误判为非法路径。
    *   **状态**：已有修复 PR #5524 ([Open](https://github.com/zeroclaw-labs/zeroclaw/pull/5524))。
*   **[S2 - 降级] Slack 模式内存泄漏** [#5313](https://github.com/zeroclaw-labs/zeroclaw/issues/5313)
    *   现象：闲置状态下 Daemon 内存从 28MB 飙升至 460MB+（2小时内）。

---

## 💡 功能请求与路线图信号
*   **配置架构迁移 (V1 → V2)**：PR #5517 ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5517)) 提出了具有前瞻性的配置迁移方案。Issue #5445 建议引入类型化的迁移系统，这将彻底解决当前配置的混乱问题。
*   **Telegram 语音转文字**：Issue #5509 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5509)) 请求添加语音消息支持。鉴于 OpenClaw 已支持且 ZeroClaw 在语音修复（TTS）上有活跃 PR，该功能很可能被纳入路线图。
*   **预 LLM 命令快捷键**：Issue #5503 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5503)) 提出为了减少延迟和成本，允许简单的确定性命令跳过 LLM 推理。这对 IoT 集成场景非常有价值。

---

## 🗣️ 用户反馈摘要
*   **痛点 - 文档模糊**：Issue #5513 尖锐地指出当前文档“模糊不清”，Wiki 充斥着无用的图表，新用户难以入手。
*   **痛点 - 调试困难**：Issue #5504 反映无法通过配置记录完整的 LLM 输入/输出内容，仅记录 Token 数量对于调试模型行为非常不友好。
*   **满意 - 配置警告修复**：多个 Issues (如 #5483, #5320) 对 `api_key` 等合法配置产生警告日志表示困惑，今日合并的 PR #5510 解决了这一问题，预计将获得正面反馈。

---

## ⏳ 待处理积压
*   **大版本重构 PR #5315** ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5315))：这是一个巨大的 TUI 和 Dashboard 配置同步功能的 PR，标记为 `size: XL` 和 `risk: high`。虽然功能强大，但已开放数周未合并，可能需要额外的审查关注。
*   **长期未解决的桌面端问题**：Issue #4866 (Web dashboard unavailable) 跨越多个版本仍未彻底修复，建议维护者优先处理此类影响“第一印象”的 Bug。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-04-09)

**分析师**: AI 智能体与个人助手领域专家
**报告日期**: 2026-04-09
**数据来源**: github.com/sipeed/picoclaw

---

## 1. 今日速览
PicoClaw 项目今日（2026-04-09）呈现出极高的开发活跃度，在过去 24 小时内处理了 **27 个 PR** 和 **14 个 Issue**，显示出强劲的迭代势头。项目发布了 **v0.2.6 正式版**，标志着核心功能（如 Hooks 增强和进程隔离）已趋于成熟。社区关注点集中在 **安全隔离**与**模型容错**上，多个关于 Agent 执行权限和 LLM 配置的高级特性被提出。整体来看，项目正在从基础功能完善向高级自动化与安全性治理方向迈进。

---

## 2. 版本发布

### 🚀 v0.2.6 (正式版)
发布于今日，该版本集成了近期重要的稳定性与功能增强。
- **核心特性**:
  - **进程隔离**: 引入统一的子进程隔离运行时，提升系统安全性（关联 PR #2423）。
  - **Hooks 增强**: 新增 `respond` 动作，并完善了 Hooks 的文档结构（关联 PR #2215）。
  - **Banner 修复**: 修复了帮助信息显示的问题。
- **获取地址**: [v0.2.6 Release Page](https://github.com/sipeed/picoclaw/releases/tag/v0.2.6)

### 🛠️ v0.2.5-nightly (20260408)
同步发布的最新每日构建版，包含最新实验性功能。
- **注意**: 属于自动化构建，可能存在不稳定性。
- **对比差异**: [v0.2.5...main](https://github.com/sipeed/picoclaw/compare/v0.2.5...main)

---

## 3. 项目进展

今日合并了多个关键 PR，显著提升了系统的健壮性与安全性：

*   **[Feature] 支持进程隔离** (`#2423` - by lxowalle)
    *   **进展**: 已合并并纳入 v0.2.6。
    *   **价值**: 为 `exec` 工具、CLI 提供商及 MCP 服务器增加了统一的子进程隔离机制，默认可选开启。这是向安全沙箱迈出的重要一步。
    *   [链接](https://github.com/sipeed/picoclaw/pull/2423)

*   **[Fix] 修复模型回退配置继承错误** (`#2143` - by corevibe555)
    *   **进展**: 已合并。
    *   **价值**: 修复了跨提供商模型回退时错误继承主模型 API Key/Base 的问题，实现了真正的异构容灾。
    *   [链接](https://github.com/sipeed/picoclaw/pull/2143)

*   **[Fix] 修复 Anthropic 协议兼容性** (`#2259` - by deuxksy)
    *   **进展**: 已合并。
    *   **价值**: 纠正了非 OAuth 模式下 Anthropic 请求格式错误，确保与 Claude 模型的通信稳定性。
    *   [链接](https://github.com/sipeed/picoclaw/pull/2259)

*   **[Fix] Gateway PID 管理** (`#2422` - by wj-xiao)
    *   **进展**: 已合并。
    *   **价值**: 解决了 WebUI 启动网关时的连接死锁及 PID 文件 stale 问题，提升了 Dashboard 的稳定性。
    *   [链接](https://github.com/sipeed/picoclaw/pull/2422)

*   **[Feature] 浏览器自动化工具** (`#2410` - by Yourdaylight)
    *   **进展**: 审查中 (Open)。
    *   **价值**: 实现了基于 CDP 的浏览器自动化，响应了高级用户对 Web 交互的需求。
    *   [链接](https://github.com/sipeed/picoclaw/pull/2410)

---

## 4. 社区热点

**🔥 最热讨论: LLM 账号堆叠**
*   **Issue**: [#2408 - [Feature] LLM Account Stacking](https://github.com/sipeed/picoclaw/issues/2408)
*   **概要**: 用户提出 "Cartridge-Belt"（弹药带）概念，希望在达到速率限制时自动轮换 API Key。
*   **分析**: 反映了用户在重度使用 API 服务时对 **无感高可用** 的强烈需求，是企业级落地的重要痛点。

**🔥 安全架构大辩论**
*   **Issue**: [#2428 - Workspace constraints insufficient](https://github.com/sipeed/picoclaw/issues/2428)
*   **概要**: 用户指出当前 Workspace 约束无法有效隔离 Pico 的文件操作，存在绕过风险。
*   **分析**: 随着今日 v0.2.6 引入进程隔离，社区开始密集探讨如何将其转化为用户可控的 **安全沙箱** 策略。

---

## 5. Bug 与稳定性

**🐛 严重级 Bug (需立即关注)**
1.  **[WebUI 显示逻辑倒退]** ([#2427](https://github.com/sipeed/picoclaw/issues/2427))
    *   **现象**: WebUI 无法同时显示 Content 和 Tool_call，刷新后互斥显示。
    *   **状态**: Open.
    *   **影响**: 严重削弱了用户对 Agent 思考过程的可观测性。

2.  **[Agent Loop 致命错误]** ([#2371](https://github.com/sipeed/picoclaw/issues/2371))
    *   **现象**: 特定配置下 Agent 跑出 Loop 报错，可能导致进程崩溃。
    *   **状态**: Open.

**🐛 中级 Bug (体验受损)**
3.  **[配置无效]** ([#2381](https://github.com/sipeed/picoclaw/issues/2381))
    *   Feishu 通道配置 `allow_from` 后仍报警 "Channel allows EVERYONE"，属于配置逻辑未生效。
4.  **[依赖下载失败]** ([#2425](https://github.com/sipeed/picoclaw/issues/2425))
    *   网络环境或 Go 代理问题导致 `minisign` 等包无法下载，阻碍编译。
    *   **相关 PR**: [#2419](https://github.com/sipeed/picoclaw/pull/2419) (已修复/Close)。

---

## 6. 功能请求与路线图信号

*   **CLI 现代化** ([PR #2229](https://github.com/sipeed/picoclaw/pull/2229))
    *   **信号**: 社区希望抛弃纯文本输出，拥抱结构化、带颜色的终端 UI (类似现代 CLI 工具)。
*   **邮件通道支持** ([Issue #2421](https://github.com/sipeed/picoclaw/issues/2421))
    *   **信号**: 适应传统企业/科研环境，将 AI 助手集成进邮件工作流是一个明确的增量场景。
*   **工具反馈降噪** ([Issue #2424](https://github.com/sipeed/picoclaw/issues/2424))
    *   **信号**: 用户嫌弃 `read_file` 等频繁工具调用的刷屏反馈，请求增加"忽略列表"，这表明用户需要更精简的日志体验。

---

## 7. 用户反馈摘要

*   **痛点 - 长任务无重试**: 用户在 Issue [#629](https://github.com/sipeed/picoclaw/issues/629) 中抱怨，遇到 HTTP 500 时任务直接挂起而不是重试，这对于长时任务来说是毁灭性体验。
*   **痛点 - 安全感知**: 用户 [#2431](https://github.com/sipeed/picoclaw/issues/2431) 指出工具被拦截时日志不明确，无法知道是哪个工具触发了安全守卫。
*   **场景 - Termux 环境**: 多个反馈显示 Termux/Android 端用户活跃度上升，涉及时区 ([PR #2406](https://github.com/sipeed/picoclaw/pull/2406)) 和 TLS ([PR #2209](https://github.com/sipeed/picoclaw/pull/2209)) 的适配需求。

---

## 8. 待处理积压

*   **[#2220](https://github.com/sipeed/picoclaw/issues/2220) / [#2427](https://github.com/sipeed/picoclaw/issues/2427)**: WebUI 消息显示逻辑问题在 3 月底提出，至今虽有关注但未完全解决，需持续跟进前端渲染逻辑。
*   **[#629](https://github.com/sipeed/picoclaw/issues/629)**: LLM 调用失败重试机制缺失，这是一个自 2 月遗留的高优先级 Bug，建议列入下个版本的修复计划。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-09)

## 📌 今日速览
NanoClaw 项目今日呈现出极高的开发活跃度，在过去24小时内完成了 **10 个 PR 的合并与关闭**，显示出项目处于快速迭代与功能完善阶段。核心代码库（Core）与容器化基础设施迎来了显著更新，重点解决了新用户的配置体验问题并增强了持久化缓存机制。尽管 Issue 板新增了 5 个讨论，社区关注点正从单一的 Claude 集成转向**多运行时支持**与**安全策略**等高级话题。整体来看，项目健康度极高，正处于从“可用”向“生产级”迈进的关键节点。

## 📦 版本发布
**当前状态：** 过去24小时内无新版本发布。
*注：虽然大量功能合并入主分支，但尚未触发新的 Release 标签，建议关注后续版本的整合动态。*

## 🚀 项目进展
今日合并的 PR 主要集中在**运维体验优化**与**环境修复**，大幅降低了部署门槛：
*   **[PR #1698] 新用户配置修复** ([link](https://github.com/qwibitai/nanoclaw/pull/1698))：修复了新群组创建时 `ANTHROPIC_API_KEY` 未自动注入的问题。此前用户需手动编辑配置文件，该修复实现了从环境变量到配置的无缝传递，极大改善了 Unraid CA 等一键安装体验。
*   **[PR #1671] 持久化 UV 缓存** ([link](https://github.com/qwibitai/nanoclaw/pull/1671))：通过挂载 `/home/node/.local/share/uv/`，成功将 Python 工具链和依赖包（如 numpy）的缓存持久化。这解决了每次容器重启重复下载依赖的痛点，显著提升了冷启动速度和带宽利用率。
*   **[PR #1697] 企业级 CI/CD 与容器化** ([link](https://github.com/qwibitai/nanoclaw/pull/1697))：引入了多阶段 Node 22 构建、非 root 用户运行及健康检查，标志着项目向企业级容器标准迈进。
*   **[PR #1661] WhatsApp 频道集成** ([link](https://github.com/qwibitai/nanoclaw/pull/1661))：正式合并了基于 Baileys 库的完整 WhatsApp 支持，扩展了 NanoClaw 的触达渠道。

## 🔥 社区热点
*   **[Issue #1620] OAuth 计费政策变更** ([link](https://github.com/qwibitai/nanoclaw/issues/1620))：随着 Anthropic 宣布第三方 OAuth 接入不再计入订阅配额，社区激烈讨论 NanoClaw 的配置文档建议。该 Issue 目前评论最多（5条），反映了用户对**成本控制**的敏感度，项目需尽快响应以避免用户产生意外扣费。
*   **[Issue #1690] 多运行时 SDK 抽象** ([link](https://github.com/qwibitai/nanoclaw/issues/1690))：获 2 个 👍。用户展示了在 NanoClaw 之上构建的抽象层，支持同时调用 Claude、Codex 和本地模型。这表明社区正自发推动 NanoClaw 成为**模型无关的 Agent 中控系统**。

## 🐛 Bug 与稳定性
*   **[严重] IPC 消息丢失风险** ([PR #1702](https://github.com/qwibitai/nanoclaw/pull/1702))：开发者指出 `for-await` 循环未在结果返回时正确中断，可能导致 IPC 消息丢失。目前 PR 已提交，待合并。
*   **[中等] Telegram 线程上下文丢失** ([Issue #1699](https://github.com/qwibitai/nanoclaw/issues/1699))：在 Telegram 论坛话题中，Bot 回复未携带 `thread_id`，导致回复脱离上下文。问题已定位至 `telegram.ts` 代码逻辑，尚无修复 PR。
*   **[低等] 多容器重复启动** ([Issue #1700](https://github.com/qwibitai/nanoclaw/issues/1700))：用户报告简单的问候触发多个容器响应，可能涉及事件监听器的重复注册。

## 💡 功能请求与路线图信号
*   **安全策略引擎** ([PR #1605](https://github.com/qwibitai/nanoclaw/pull/1605))：一个具有确定性（非 Prompt 依赖）的用户准入、工具限制和只读挂载引擎正在审查中。这可能是 NanoClaw 进入企业/多租户环境的关键特性。
*   **持久化记忆图谱** ([PR #1256](https://github.com/qwibitai/nanoclaw/pull/1256))：提出利用现有 Qdrant + Neo4j 基础设施集成 Mem0，为 Agent 增加长期记忆能力，且无需增加新容器。
*   **Matrix 协议支持** ([PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624))：一个功能完备的 Matrix 频道支持（含 E2EE）正在开放讨论中，若合并将进一步扩大其在隐私社区的采用。
*   **语义搜索与备份**：新增了 `/add-backup` ([PR #1693](https://github.com/qwibitai/nanoclaw/pull/1693)) 和语义对话搜索 ([PR #1597](https://github.com/qwibitai/nanoclaw/pull/1597)) 功能请求，显示用户对数据管理的重视。

## 📢 用户反馈摘要
*   **痛点**：Anthropic 的新计费政策引起用户担忧，使用 OAuth Token 接入 NanoClaw 现在会产生额外费用，强烈推荐文档引导用户转向 API Keys。
*   **场景**：用户正在利用 NanoClaw 自动化“爬行-行走-奔跑”式的编码流程，并在 Telegram 和 Discord 上同时部署。
*   **需求**：新贡献者希望能有**可查询的架构图** ([Issue #1703](https://github.com/qwibitai/nanoclaw/issues/1703)) 来帮助理解代码库，目前已有人提供 JigsawML 的免费扫描支持。

## ⏳ 待处理积压
*   **[PR #963] OpenAI Codex SDK 支持** ([link](https://github.com/qwibitai/nanoclaw/pull/963))：开启于 3 月 11 日，旨在添加 Claude 的替代引擎。目前仍在审查中，结合今日的讨论热点，建议优先处理以响应对抗性需求。
*   **[PR #220] 心跳监控** ([link](https://github.com/qwibitai/nanoclaw/pull/220))：开启于 2 月 14 日，用于增强系统的主动监控能力，属于长期运营的基础设施需求。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-09)

## 1. 今日速览
NullClaw 项目今日处于**高活跃度**状态。过去 24 小时内合并/关闭了 8 个 PR，并发布了 v2026.4.7 版本，标志着项目从 3 月底至 4 月初的开发周期的正式结束。代码库主要在**健壮性**、**文档完善**和**Windows 平台支持**三个维度得到了增强，同时新开启了一系列针对核心逻辑的修复与功能增强 PR，预示着下一轮开发周期的启动。社区层面，Windows 相关的用户痛点得到集中解决，文档覆盖率显著提升。

## 2. 版本发布
**v2026.4.7 已发布**
- **核心更新**：
  - **路由修复**：确保系统始终使用 "main" 作为默认的 Agent 后备选项，增强了系统稳定性。
  - **Lark 渠道增强**：增加了消息接收时的 Reaction Emoji 支持（PR #704），丰富了交互体验。
- **关注点**：此次发布包含多个针对 Windows 平台的修复和改进，建议 Windows 用户尽快更新以解决连接和下载问题。
- **详情**：[Release v2026.4.7](https://github.com/nullclaw/nullclaw/releases/tag/v2026.4.7)

## 3. 项目进展
今日合并/关闭的重要 PR 推进了以下领域：
- **Windows 平台兼容性大幅提升**：
  - 合并了 PR #742，修复了 Windows 环境下 WebSocket 连接立即断开（Code 1006）的严重回归问题。通过 Vendor 依赖的方式确保了版本的稳定性。
  - 合并了 PR #738，优化了 Windows 二进制分发包。现在 `eget` 下载的 zip 包中包含便于使用的 `nullclaw.exe`，同时保留了兼容性的带后缀名文件。
- **交互体验与文档优化**：
  - 合并了 PR #720，为 Lark 渠道添加了“处理中”的占位反馈，解决了用户在模型生成内容时等待焦虑的问题。
  - 合并了 PR #750，新增了面向非技术人员的初学者指南（中英双语），降低了新用户的上手门槛。
  - 合并了 PR #736，补充了插件异步登录的文档规范，为外部开发者提供了清晰的指引。
- **缺陷修复**：
  - 修复了 Discord 定时私聊投递目标错误的问题（PR #719）。
  - 补充了内置 WeChat 渠道的配置文档（PR #718）。

## 4. 社区热点
今日活跃的讨论主要集中在平台兼容性和新功能开发上：
- **[OPEN] fix(providers): Responses API tool schema... (PR #790)**
  - 链接：[nullclaw/nullclaw#790](https://github.com/nullclaw/nullclaw/pull/790)
  - 热度：修复 OpenAI 兼容接口的关键 PR。
  - 分析：该 PR 解决了 Responses API 模式下工具调用格式错误以及 `null` 值处理不当的问题，直接关系到模型调用工具的成功率，属于高优先级的逻辑修复。
- **[OPEN] feat(cron): cron subagent... (PR #783)**
  - 链接：[nullclaw/nullclaw#783](https://github.com/nullclaw/nullclaw/pull/783)
  - 热度：当前最复杂的功能增强 PR。
  - 分析：引入了基于数据库的定时任务子代理，支持运行历史记录和 JSON 输出。这将极大扩展 NullClaw 的自动化能力。
- **[OPEN] Shell can not run on the physical Linux (Issue #791)**
  - 链接：[nullclaw/nullclaw#791](https://github.com/nullclaw/nullclaw/issues/791)
  - 分析：关于原生 Linux 环境下 Shell 工具失效的新 Bug 报告，涉及权限与原生运行时的交互。

## 5. Bug 与稳定性
今日报告和修复的稳定性问题如下：
- **[High Priority] Windows WebSocket 断连 (Issue #739 -> PR #742)**
  - 状态：**已修复 (Closed)**
  - 详情：Windows 上 Web 通道 WebSocket 连接会立即以 1006 代码断开。PR #742 已合并至 v2026.4.7，通过引入特定版本的依赖解决了此问题。
- **[Medium] Windows 二进制命名不便 (Issue #737 -> PR #738)**
  - 状态：**已修复 (Closed)**
  - 详情：Windows 可执行文件带有平台后缀导致命令行使用不便。新版本通过 zip 包内打包 `nullclaw.exe` 解决了此问题。
- **[New] Linux Shell 执行失败 (Issue #791)**
  - 状态：**待修复**
  - 详情：报告指在物理 Linux 原生环境下，即便赋予了所有权限，Shell 工具仍无法运行。尚无修复 PR。
- **[Fixed] Gateway 绑定与速率限制 (PR #789)**
  - 状态：**待合并**
  - 详情：针对公网绑定安全性和单客户端抢占路由限流的补丁已提交，正在等待 Review。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中检测到的潜在路线图信号：
- **Telegram 交互增强**：PR #782 正在添加交互式技能菜单，并加强了 Codex/Topic 的处理。这表明官方正在丰富 Telegram 渠道的 Bots 交互模式，使其更像一个应用而非单纯的聊天机器人。
- **定时任务/自动化**：PR #783 强烈暗示 NullClaw 将正式支持类似 Cron 的后台任务调度能力，这将使其从“被动响应”进化为“主动触发”的 Agent。
- **Lark 渠道体验优化**：已关闭的 Issue #717 和 PR #720 表明，官方正在针对企业级通讯工具（Lark/Discord）的体验进行打磨，特别是对“延迟反馈”和“状态提示”的重视。

## 7. 用户反馈摘要
- **痛点 - Windows 体验**：用户反馈 Windows 下的二进制文件命名不符合 CLI 惯例，且 WebSocket 连接不稳定。
  - *反馈源*：#737, #739。
  - *满意度*：发布 v2026.4.7 版本修复后，预期满意度将大幅回升。
- **痛点 - 缺乏状态反馈**：Lark 用户反映模型思考期间没有“正在输入”或处理中的提示，导致体验不佳。
  - *反馈源*：#717。
  - *响应*：开发团队迅速响应并合并了修复 PR (#720)。
- **痛点 - 文档门槛高**：非技术用户表示概念难以理解。
  - *响应*：新增了新手指南 (#750)，体现了社区对易用性的重视。

## 8. 待处理积压
- **Issue #791 (Linux Shell)**：需关注物理 Linux 环境下的 Shell 执行权限问题，这可能影响核心功能在服务器端的落地。
- **PR #790 (Providers API)**：OpenAI 兼容层的工具 Schema 修复待合并，建议优先审查以确保与其他工具的兼容性。
- **PR #782 (Telegram)**：包含较大的交互逻辑变更，建议尽快 Review 以避免代码冲突。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-09)

**分析师：** AI 智能体与个人助手领域开源项目分析师
**数据来源：** github.com/nearai/ironclaw

---

## 1. 今日速览
IronClaw 项目今日（2026-04-09）展现出**极高**的开发活跃度，但也暴露出测试与基础设施方面的压力。在过去 24 小时内，主仓库产生了 **50 条 PR 更新**（激增）和 **13 条 Issues**，表明代码库正经历大规模的重构与功能迭代。核心进展集中在**凭证管理系统**（Credentials）、**Responses API** 的修复以及 **CI/CD 流程**的优化。值得注意的是，虽然 PR 数量庞大，但合并率较低（仅 10/50），且有大量“staging-promotion”类 PR 处于待处理状态，暗示自动合并管道可能存在阻塞。社区反馈显示，用户对于私有网络部署和响应延迟问题仍有较强诉求。

## 2. 版本发布
*过去 24 小时无新版本发布。*

## 3. 项目进展

今日代码提交主要集中在架构增强、凭证安全体系及 CI 修复：

*   **安全与凭证体系重构**：[@pranavraja99](https://github.com/pranavraja99) 提交了一系列关于凭证管理的重要 PR。
    *   **PR #2168**: 引入了基于路径模式的凭证匹配功能，允许在同一主机的不同路径上使用不同的密钥（例如读写分离），增强了集成的安全性。
    *   **PR #2173**: 提出了通过 `INTEGRATION_CREDENTIALS_DIR` 环境变量加载凭证配置的驱动机制，简化了部署时的敏感信息管理。
*   **API 与通道修复**：
    *   **PR #2172**: 修复了 Gateway 中的重复认证响应问题，并统一了扩展配置模态框，改善了用户体验。
    *   **PR #2167**: 针对 Responses API 进行了四项关键修复，包括线程创建、流式传输支持等，使其更接近生产可用状态。
*   **CI/CD 与基础设施**：
    *   **PR #2175** & **PR #2158**: 由 [@henrypark133](https://github.com/henrypark133) 提交，修复了 WASM 构建目标不一致及测试名称规范化的问题，显示出项目正在收紧构建一致性。
*   **系统集成**：
    *   **PR #2176**: 这是一个超大型的合并 PR，将 `abound-api` 转换为内置工具，并合并了大量 staging 分支的修复（包括多租户性能优化），表明项目正在整合之前的阶段性成果。

## 4. 社区热点

*   **[热点 Issue #1754](https://github.com/nearai/ironclaw/issues/1754)**: *Cannot use model in private network* (讨论度 3, 👍 3)
    *   **分析**: 用户在尝试连接私有网络部署的模型时，因 IronClaw 强制要求远程端点必须使用 HTTPS 而受到阻碍。这反映了在私有内网环境中，用户对 HTTP (非 TLS) 连接的强烈需求，同时也触及了安全策略与易用性的平衡问题。
*   **[热点 PR #1662](https://github.com/nearai/ironclaw/pull/1662)**: *feat(agent): anti-drift self-checks in agentic loop*
    *   **分析**: 这是一个长期开放的大型 PR (XL size)，旨在引入“反漂移”自我检查机制，以防止 Agent 陷入死循环或无效重复。虽然今日仅有更新，但因其对 Token 成本和 Agent 稳定性的重大潜在影响，持续受到关注。

## 5. Bug 与稳定性

今日报告的 Bug 涉及任务状态、多模态交互及通道兼容性：

*   **[高影响] [Issue #2134](https://github.com/nearai/ironclaw/issues/2134)**: *Job remains in_progress after agent emits completed result*
    *   **现象**: 作业在逻辑上已完成并输出了“completed”消息，但后端状态仍停留在 `in_progress`，导致前端反复展示结果。
    *   **状态**: OPEN。
*   **[中影响] [Issue #2162](https://github.com/nearai/ironclaw/issues/2162)**: *Agent rejects multiple screenshots or screenshot without text*
    *   **现象**: 发送多张截图或无文字说明的单张截图时，Agent 会抛出“输入为空”的安全校验错误。
    *   **状态**: OPEN。
*   **[集成问题] [Issue #2135](https://github.com/nearai/ironclaw/issues/2135)**: *Feishu / Lark Channel unable to update to the latest version*
    *   **现象**: 飞书通道因 WIT 版本不匹配导致 WASM 实例化失败。
    *   **状态**: OPEN。
*   **[已修复]**: 多个由 sergeiest 报告的 Bug ([#1996](https://github.com/nearai/ironclaw/issues/1996), [#1999](https://github.com/nearai/ironclaw/issues/1999), [#2088](https://github.com/nearai/ironclaw/issues/2088), [#1995](https://github.com/nearai/ironclaw/issues/1995)) 今日已被标记为 CLOSED。这包括 Routine 工具禁用、Skill 名称空格验证、系统提示共享以及 Telegram 原始日志输出等问题。

## 6. 功能请求与路线图信号

*   **MCP 协议增强**: [Issue #2160](https://github.com/nearai/ironclaw/issues/2160) 提出增加对 MCP Prompts (`prompts/list`, `prompts/get`) 的支持。目前 IronClaw 仅实现了 Tools，补充 Prompts 支持将使其更全面地兼容 MCP 标准。
*   **TUI 中断优化**: [Issue #2142](https://github.com/nearai/ironclaw/issues/2142) 建议在 TUI 中增加“带外中断路径”，以绕过 Agent 调度层的瓶颈，解决用户无法及时中断 Agent 执行的痛点。
*   **流式推理反馈**: [Issue #2177](https://github.com/nearai/ironclaw/issues/2177) 请求支持向下游通道流式传输推理步骤，以便在 Agent 执行耗时工具调用时，用户能看到中间进度而非仅等待最终结果。
*   **GitHub Fork 支持**: [Issue #2138](https://github.com/nearai/ironclaw/issues/2138) 指出 GitHub 工具缺少“fork”操作。
*   **私有网络配置**: [Issue #1754](https://github.com/nearai/ironclaw/issues/1754) 的持续讨论表明，为私有/自托管模型提供更灵活的 TLS 配置选项是用户迫切需要的功能。

## 7. 用户反馈摘要

*   **痛点**: 部署在非标准环境的用户（如私有内网）对强制 HTTPS 策略感到沮丧 ([Issue #1754](https://github.com/nearai/ironclaw/issues/1754))。
*   **满意度**: 之前困扰 Routine（定时任务）功能的多个严重 Bug（如工具禁用、报错信息不友好）已得到修复 ([Issue #1996](https://github.com/nearai/ironclaw/issues/1996), [Issue #1995](https://github.com/nearai/ironclaw/issues/1995))，这将显著提升企业用户的自动化体验。
*   **性能反馈**: 尽管有 PR [PR #2166](https://github.com/nearai/ironclaw/pull/2166) 尝试将轮询时间从 500ms 降至 50ms，但用户仍反映多租户环境下的响应速度（即使是简单问候）较慢 ([Issue #2089](https://github.com/nearai/ironclaw/issues/2089) - 已关闭，表明可能已初步缓解)。

## 8. 待处理积压

*   **PR #2171 ([fix(ci): simplify staging CI](https://github.com/nearai/ironclaw/pull/2171))**: 该 PR 揭示了一个严重的积压问题——自 4 月 1 日以来，**30 个**自动提升 PR 一直处于停滞状态，无法合并。这可能是导致今日 PR 积压（50 条）的主要原因，建议维护者优先处理 CI 修复。
*   **PR #1446 ([feat: add Aliyun Coding Plan support](https://github.com/nearai/ironclaw/pull/1446))**: 这个旨在添加阿里云支持的 PR 自 3 月 20 日以来一直处于开放状态，对于亚洲市场用户是一个重要的待完成功能。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-09)

## 1. 今日速览
LobsterAI 项目今日处于**高度活跃**状态。过去 24 小时内共合并了 **9 个 PR**，并发布了 **v2026.4.8** 补丁版本，主要修复了 Agent 管理、协作会话及流式输出等关键问题。社区共产生 **42 条** 新动态（Issues + PR），显示出强劲的开发迭代节奏与社区参与度。值得注意的是，项目正重点优化 **OpenClaw 生态集成**（钉钉、飞书等）及**前端交互体验**（新手引导、UI 升级）。

---

## 2. 版本发布
**LobsterAI 2026.4.8** 已发布 (2026-04-08)
- **重点修复**：
    - `fix(cowork)`: 在会话错误处理器中增加了二次 try-catch 保护机制，防止因底层错误导致的崩溃。([#746](https://github.com/netease-youdao/LobsterAI/pull/746))
    - `feat(agent)`: 优化了 Agent 管理页面的交互逻辑，并修复了表单重置的状态残留问题。([#1098](https://github.com/netease-youdao/LobsterAI/pull/1098))
- **核心影响**：提升了多轮对话和 Agent 调用时的系统稳定性，建议所有用户更新，特别是遇到会话中断的用户。

---

## 3. 项目进展
今日合并的重要 PR 涉及安全加固、平台兼容性及生态功能增强：

- **安全修复**: 修复了 `CoworkProxy` 中的 DNS Rebinding 零授权漏洞。通过添加 Host 头部验证和 Bearer token 认证，防止远程劫持 AI 模型调用。([#1571](https://github.com/netease-youdao/LobsterAI/pull/1571) - CLOSED)
- **平台兼容**: 解决了 Windows 平台上补丁文件因换行符 (CRLF) 导致的应用失败问题，确保跨平台补丁机制的稳定性。([#1574](https://github.com/netease-youdao/LobsterAI/pull/1574) - CLOSED)
- **IM 生态增强**:
    - **飞书**: 新增流式输出配置 (`streaming`, `blockStreaming`)，修复了飞书渠道无法正确走流式回复的问题。([#1562](https://github.com/netease-youdao/LobsterAI/pull/1562) - CLOSED)
    - **网关同步**: 修复了网关重启后导致 IM 消息历史记录丢失的问题，防止本地历史被云端截断数据覆盖。([#1565](https://github.com/netease-youdao/LobsterAI/pull/1565) - CLOSED)

---

## 4. 社区热点
今日讨论热度集中在**模型兼容性**和**配置易用性**上：

- **【Bug】阿里云百炼模型调用报错** ([#399](https://github.com/netease-youdao/LobsterAI/issues/399))
    - **状态**: 今日关闭
    - **详情**: 用户反馈调用阿里云百炼的 GLM 4.5 等特定模型时报错 `Claude run failed`。
    - **分析**: 该问题已被标记为关闭，推测已在最新版本或相关后端修复中解决。
- **【Question】钉钉流式消息配置** ([#1568](https://github.com/netease-youdao/LobsterAI/issues/1568))
    - **状态**: 开放
    - **详情**: 用户询问如何安装和使用钉钉的 `openclaw-connector`，因找不到命令而困扰。
    - **分析**: 反映出 IM 生态插件的文档和安装流程对新手尚不够友好，急需补充文档或自动化安装脚本。

---

## 5. Bug 与稳定性
今日报告的 Bug 涉及文件处理、模型行为和前端交互，其中部分为阻塞性问题：

- **【高危】模型无法识别上传文件** ([#1561](https://github.com/netease-youdao/LobsterAI/issues/1561))
    - **现象**: 拖入文件后模型无法感知，相比旧版本文件存储在 `project` 目录下的机制失效。
    - **状态**: 开放，待修复。
- **【严重】版本回复异常** ([#1566](https://github.com/netease-youdao/LobsterAI/issues/1566))
    - **现象**: v2026.4.3 版本无论输入什么都回复相同内容，用户已提供日志。
    - **状态**: 开放，需紧急排查。
- **【中危】提问无响应/无报错** ([#1569](https://github.com/netease-youdao/LobsterAI/issues/1569))
    - **现象**: 点击提问后界面静止，既不运行也无错误提示。
    - **状态**: 开放。
- **【UI】定时任务表单数据静默丢失** ([#1245](https://github.com/netease-youdao/LobsterAI/issues/1245))
    - **现象**: 编辑任务时点击取消或返回，已填内容无确认弹窗直接丢失。
    - **状态**: 今日关闭，预计已有修复方案。

---

## 6. 功能请求与路线图信号
从活跃的 PR 和 Issues 中可以看出项目未来的迭代方向：

- **新手引导** ([#1577](https://github.com/netease-youdao/LobsterAI/pull/1577))
    - **状态**: Open
    - **内容**: 引入基于 `driver.js` 的首次启动引导（6步流程）和模型配置向导，降低新用户门槛。
- **斜杠命令** ([#1573](https://github.com/netease-youdao/LobsterAI/pull/1573))
    - **状态**: Open
    - **内容**: 为 IM 渠道增加 `/help`, `/new`, `/compact` 等控制命令，增强聊天窗口的可控性。
- **技能管理可视化** ([#1583](https://github.com/netease-youdao/LobsterAI/pull/1583))
    - **状态**: Open
    - **内容**: 新增“最近使用”Tab 页，并统计技能使用频次，解决 Auto-Routing 模式下技能调用不可见的问题。
- **AI 产物预览** ([#1552](https://github.com/netease-youdao/LobsterAI/issues/1552))
    - **状态**: Open (Feature Request)
    - **信号**: 用户强烈希望 Agent 生成的 Markdown/文件能在聊天窗口直接预览（卡片形式），而不仅仅是存储。
- **会话控制增强** ([#1567](https://github.com/netease-youdao/LobsterAI/issues/1567))
    - **状态**: Open (Feature Request)
    - **信号**: 用户请求在输入框增加“停止生成”、“压缩上下文”等快捷按钮，以应对长上下文导致的问题。

---

## 7. 用户反馈摘要
- **痛点**: **文档缺失**。用户反馈 IM 机器人配置指南 404 ([#1556](https://github.com/netease-youdao/LobsterAI/issues/1556))，且流量包服务条款存在明显文字错误 ([#1563](https://github.com/netease-youdao/LobsterAI/issues/1563))。
- **体验**: **文件上传体验倒退**。用户怀念旧版本将文件存入 `project` 目录并能让模型搜索的机制，新版本模型感知不到文件 ([#1561](https://github.com/netease-youdao/LobsterAI/issues/1561))。
- **交互**: **输入框优化需求**。用户希望图片附件能显示缩略图以便确认 ([#1580](https://github.com/netease-youdao/LobsterAI/pull/1580) - PR已出)，以及增加快捷操作按钮 ([#1567](https://github.com/netease-youdao/LobsterAI/issues/1567))。

---

## 8. 待处理积压
- **依赖更新**: `vite` 从 v5 升级到 v8 ([#1281](https://github.com/netease-youdao/LobsterAI/pull/1281)) 和 `electron` 升级 ([#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)) 的 PR 虽已开启数日，但尚未合并。考虑到是大版本跨越，建议关注潜在的破坏性变更。
- **性能优化**: 会话列表与消息历史的分页加载功能 ([#924](https://github.com/netease-youdao/LobsterAI/pull/924)) 已开放多日，该功能对于解决内存占用和卡顿至关重要，建议优先推进。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

根据您提供的 GitHub 数据，以下是 **TinyClaw (TinyAGI)** 项目在 **2026年4月9日** 的动态日报。

---

# TinyClaw 项目日报 - 2026-04-09

## 1. 今日速览
TinyClaw 项目今日进入功能提案活跃期。虽然过去 24 小时内没有代码合并或版本发布，但社区提交了 **3 个新的增强功能**，显示出用户对 **多智能体协作** 及 **OpenCode 集成** 的强烈需求。目前 Issue 追踪器中积压了关于 UI 设置和团队管理的新讨论，维护者可能需要评估这些特性的优先级。整体项目处于**需求探索与规划阶段**，代码提交暂无波动。

## 2. 版本发布
**当前状态：** 无新版本发布。
*   项目目前保持稳定，未发布包含新功能的版本或补丁。

## 3. 项目进展
**当前状态：** 无 PR 合并或关闭。
*   今日没有 Pull Requests 活动，项目代码库暂无变更。
*   **注意：** 尽管没有代码合并，但新提出的 Issue（#273, #272）预示着开发重心可能正在向“OpenCode 提供商支持”和“Web UI 优化”倾斜。

## 4. 社区热点
今日最活跃的讨论集中在**前端交互体验**与**底层执行架构**的优化上：

*   **[热点 #1] 多团队与项目隔离架构 ([Issue #275](https://github.com/TinyAGI/tinyagi/issues/275))**
    *   **内容：** 用户建议引入团队概念，将智能体分配到不同的项目中，实现主界面的项目隔离与团队间通信。
    *   **分析：** 这反映了 TinyClaw 正从单一工具向“企业级协作平台”演进的野心，用户希望解决复杂场景下的多任务并行管理问题。
*   **[热点 #2] OpenCode 深度集成与 Token 优化 ([Issue #273](https://github.com/TinyAGI/tinyagi/issues/273))**
    *   **内容：** 提议集成 `rtk-ai` 以通过代理 CLI 命令来减少 Token 消耗。
    *   **分析：** 成本控制始终是 AI Agent 用户的痛点，该提案试图通过中间件技术解决长上下文带来的成本问题。

## 5. Bug 与稳定性
**当前状态：** 今日无新增 Bug 报告。
*   所有的新 Issue 均标记为 `[enhancement]`，项目目前未面临明显的稳定性危机或崩溃问题。

## 6. 功能请求与路线图信号
基于今日的新增 Issue，以下功能可能进入未来的路线图：

*   **Web UI 功能补全：** Issue #272 明确指出当前 TinyOffice (Web Portal) 内置提供商界面缺失对 `opencode` 的支持，仅支持 Anthropic 和 Codex。这表明下一阶段 Web UI 的重点将是**统一提供商配置**。
*   **成本优化模块：** Issue #273 提出的 `rtk-ai` 支持，若被采纳，将作为 `Agent execution` 组件的一个性能增强层。
*   **多租户/多项目管理：** Issue #275 是一个较大的架构变更请求，涉及 UI 和权限逻辑，可能会作为未来的主要版本更新。

## 7. 用户反馈摘要
从今日的 Issues 中提炼出的用户痛点与场景：
*   **痛点（配置缺失）：** 用户在 #272 中指出，`opencode` 提供商无法在 Web UI 中直接配置，这限制了非技术用户或偏好 GUI 用户的模型选择范围。
*   **场景（并发协作）：** 用户在 #275 中描述了需要同时处理多个项目，并希望不同团队的 Agent 在独立的“办公室”屏幕中工作的场景，表明单一聊天窗口已无法满足复杂工作流需求。

## 8. 待处理积压
今日新增的 3 个 Issue 均处于 `[OPEN]` 状态且尚未有回应，建议维护者关注：

1.  [#275](https://github.com/TinyAGI/tinyagi/issues/275): Agent execution 团队与项目隔离功能。
2.  [#273](https://github.com/TinyAGI/tinyagi/issues/273): 集成 rtk-ai 进行 Token 优化。
3.  [#272](https://github.com/TinyAGI/tinyagi/issues/272): OpenCode 在 TinyOffice 中的 UI 设置支持。

---
*数据来源：TinyAGI/tinyclaw GitHub Activity (2026-04-09)*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

你好！我是 Moltis 项目开源分析师。以下是基于 **2026-04-09** 的 GitHub 数据生成的项目动态日报。

---

# Moltis 项目每日动态日报 (2026-04-09)

## 1. 今日速览
Moltis 项目今日处于**高活跃度**开发状态，维护者积极响应并修复了多个关键性 Bug。在过去 24 小时内，项目合并了 7 个 PR（主要包含 Bug 修复和 UX 改进），同时关闭了 6 个 Issue。值得关注的是，尽管修复动作频繁，今日新报的 Bug 数量（6个）依然较多，主要集中在系统提示词注入、文件监听及特定 Provider（LM Studio/MiniMax）的兼容性上。整体而言，项目正在快速迭代以提升稳定性，特别是针对企业级部署（如 LAN 登录、模型检测流程）进行了大量优化。

---

## 2. 版本发布
*   **发布版本**: `20260408.01`
*   **发布时间**: 2026-04-08
*   **内容摘要**: 本次版本紧随一系列热修补丁之后发布，主要包含针对 Anthropic 模型发现、MiniMax 系统提示词修复以及 LAN 环境下自签名证书登录问题的修复。建议所有在生产环境使用 Anthropic 或 MiniMax 通道的用户立即更新，以确保 Agent 能力正常注入。

---

## 3. 项目进展
今日合并的 PR 主要集中在**修复核心逻辑缺陷**和**优化用户体验**上：

*   **[Bug 修复] 修复 MiniMax 系统提示词丢失问题** ([PR #586](https://github.com/moltis-org/moltis/pull/586))
    *   **重要性**: 🔴 高
    *   **进展**: 解决了 MiniMax 通道 Agent 变成“无意识”机器的关键 Bug。修复了系统提示词未注入消息体、以及可选参数 `null` 值处理不当导致的问题。
*   **[Bug 修复] 修复 LAN 局域网登录失败** ([PR #589](https://github.com/moltis-org/moltis/pull/589))
    *   **重要性**: 🟠 中
    *   **进展**: 解决了当用户绑定 `0.0.0.0` 或局域网 IP 时，因自签名证书 SANs 不匹配导致浏览器认证流程中断的问题。
*   **[功能优化] 改进模型检测机制** ([PR #591](https://github.com/moltis-org/moltis/pull/591))
    *   **进展**: 将模型检测从“自动后台运行”改为“用户手动触发”，并增加了停止按钮，解决了设置密钥时卡顿的痛点。
*   **[功能新增] Matrix 通道支持斜杠命令** ([PR #590](https://github.com/moltis-org/moltis/pull/590))
    *   **进展**: 补齐了 Matrix 生态的短板，使其与其他通道（Telegram/Discord等）保持一致的指令交互体验。
*   **[稳定性] WhatsApp 账号状态持久化与优雅关闭** ([PR #285](https://github.com/moltis-org/moltis/pull/285))
    *   **进展**: 解决了 Sled 数据库锁竞争问题，防止重启或更新时出现“Resource temporarily unavailable”错误。
*   **[功能增强] Agent 任务中断自动续跑** ([PR #585](https://github.com/moltis-org/moltis/pull/585))
    *   **进展**: 引入智能重试机制，当模型意外停止生成但有进度时，系统会自动重试最多 2 次（可配置），显著提升了长任务执行的稳定性。

---

## 4. 社区热点
*   **[讨论] MiniMax 通道 Agent 完全失效 (Issue #578)**
    *   **链接**: [moltis-org/moltis#578](https://github.com/moltis-org/moltis/issues/578)
    *   **热度**: 5 条评论，已关闭
    *   **分析**: 这是一个严重的“阻断级”Bug，用户报告 Agent 在 MiniMax 通道上完全没有注入记忆、技能和身份。社区对此反应迅速，维护者已在 PR #586 中修复并发布。
*   **[讨论] 局域网部署登录系统性失败 (Issue #565)**
    *   **链接**: [moltis-org/moltis#565](https://github.com/moltis-org/moltis/issues/565)
    *   **热度**: 2 条评论，已关闭
    *   **分析**: 涉及到家庭/实验室服务器场景下的高频痛点。用户无法通过 IP 访问 Web UI，该修复涉及到底层 TLS 证书生成逻辑的变更。

---

## 5. Bug 与稳定性
今日报告的 Bug 显示系统在文件处理和特定 LLM 集成上存在不稳定性：

1.  **[严重] LM Studio 推理内容不显示 (Issue #597)**
    *   **现象**: 使用 LM Studio 时，`reasoning_content` 无法流式输出，UI 直到响应结束才显示内容，用户体验极差。
    *   **状态**: 🔴 Open
2.  **[严重] 文件监听资源耗尽 (Issue #596)**
    *   **现象**: Moltis 会向**所有**技能文件（包括已禁用的）添加 inotify 监视，导致系统限制被突破。
    *   **影响**: 拥有大量技能插件的用户系统可能会崩溃或报错。
    *   **状态**: 🔴 Open
3.  **[严重] BOOT.md 启动钩子失效 (Issue #594)**
    *   **现象**: `boot-md` 钩子读取了内容但从未注入，导致用户自定义的启动指令无效。
    *   **状态**: 🔴 Open
4.  **[中等] Agent/Tools 配置文件被静默截断 (Issue #593)**
    *   **现象**: `AGENTS.md` 和 `TOOLS.md` 超过 6000 字符会被自动截断且无警告，可能导致指令丢失。
    *   **状态**: 🟠 Open
5.  **[中等] Linux 安装包文档错误 (Issue #595)**
    *   **现象**: 安装文档中列出的文件名不正确。
    *   **状态**: 🟠 Open

---

## 6. 功能请求与路线图信号
*   **[功能请求] 通道会话轮换机制 (Issue #579)**
    *   **链接**: [moltis-org/moltis#579](https://github.com/moltis-org/moltis/issues/579)
    *   **诉求**: 为防止长对话导致 Token 耗尽，建议为 Channel DMs（如 Telegram 私聊）引入会话轮换或自动清理机制。
    *   **判断**: 这是一个对于长期 7x24 小时运行的 Agent 至关重要的功能，可能会被纳入后续的性能优化版本中。
*   **[功能请求] 停止连接检查按钮 (Issue #577)**
    *   **状态**: ✅ 已完成 (见 PR #591)
    *   **分析**: 用户需求与开发者改进方向一致，已快速落地。

---

## 7. 用户反馈摘要
*   **痛点**:
    *   **配置体验**: 用户在局域网环境下配置 HTTPS 访问困难，证书验证流程对非技术人员不友好。
    *   **资源占用**: 技能文件的热重载机制似乎不够智能，过度占用系统文件句柄。
    *   **流式体验**: 对于支持推理的模型（如 DeepSeek/LM Studio），UI 的流式展示仍有缺陷。
*   **正面反馈**:
    *   用户对 Agent 任务自动续跑（PR #585）表示期待，这解决了模型突然“罢工”导致任务中断的烦恼。

---

## 8. 待处理积压
*   **[PR #529] Microsoft Teams 通道全面实现** ([Link](https://github.com/moltis-org/moltis/pull/529))
    *   **状态**: Open (自 2026-03-31)
    *   **提醒**: 这是一个大型功能 PR，涉及 Webhook 处理和 JWT 验证。虽然活跃，但尚未合并，建议关注其集成测试进度。
*   **[Bug 簇] BOOT.md 与 Agent 注入逻辑**
    *   **关联**: Issue #594, #593
    *   **提醒**: 这些问题表明核心的 Prompt 注入管线可能存在逻辑疏漏，建议优先级高于新功能开发。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-09)

## 1. 今日速览
CoPaw 项目今日呈现出极高的活跃度，社区参与度显著提升。过去 24 小时内共处理了 **100 条** 更新（50 条 Issues + 50 条 PRs），其中 **31 个 PR 已成功合并**，表明代码审查与迭代速度极快。项目发布了 **v1.0.2-beta.1** 版本，主要聚焦于模型发现机制的优化。今日核心关注点集中在 **CPU 占用异常飙升**、**飞书/长连接频道稳定性**以及**MCP 服务热重载资源泄露**等稳定性问题上，有多位核心贡献者提交了修复补丁。

## 2. 版本发布
### **v1.0.2-beta.1**
项目于今日发布了 v1.0.2 的首个 Beta 版本。
- **核心更新**：
    - **feat(console)**: 限制模型发现仅扫描本地模型提供商。这意味着控制台将不再尝试自动发现或列出远程/云端模型，以减少不必要的网络请求和潜在的配置干扰 (PR #2938)。
    - **feat(QQ)**: 完善了富媒体消息的支持细节。
- **注意事项**：作为 Beta 版本，建议关注本地模型配置的兼容性。

## 3. 项目进展
今日代码层面进展迅速，主要集中在性能优化、关键 Bug 修复及新特性的铺垫：
- **性能与稳定性修复 (已合并)**：
    - **[PR #3106]**: 修复了 **MCP 客户端在热重载时导致的 CPU 泄漏问题**。这是一个关键修复，解决了工作区重载时旧客户端未正确清理导致的资源占用剧增（对应 Issue #2960, #3098）。
    - **[PR #3095]**: 修复了 **飞书频道长连接重连时的跨事件循环锁死问题** (`asyncio.locks.Lock` -> `threading.Lock`)，解决了 "is bound to a different event loop" 报错（对应 Issue #3063）。
    - **[PR #3105 & #3108]**: 修复了 Shell 命令执行中超时参数类型处理的错误。
- **新功能与架构演进 (进行中)**：
    - **[PR #2904]**: 引入 **Plan 模式**，集成 AgentScope 的 `PlanNotebook`，允许用户通过 `/plan` 指令生成结构化任务规划，这将是 CoPaw 智能体能力的一次重大升级。
    - **[PR #3117]**: 提出了 **语义化技能路由** 机制，通过 Embedding 检索筛选 Top-K 相关技能，旨在解决技能过多导致的上下文 Token 消耗过大问题。

## 4. 社区热点
- **[#280 Discussion: Which Skills and MCPs Can Be Built-in?](https://github.com/agentscope-ai/CoPaw/issues/280)**
  - **热度**：+24 评论
  - **分析**：社区正在激烈讨论哪些技能和 MCP 应被“内置”。这反映了用户希望 CoPaw 开箱即用，减少手动配置依赖的强烈诉求。讨论结果将直接影响后续版本的功能集成策略。
- **[#2291 Help Wanted: Open Tasks](https://github.com/agentscope-ai/CoPaw/issues/2291)**
  - **热度**：+48 评论
  - **分析**：官方任务认领列表持续火热，说明社区开发者（非核心团队）参与度极高，项目正在向更开放的去中心化协作模式发展。

## 5. Bug 与稳定性
今日报告的 Bug 中，**资源占用（CPU 100%）**和**异步并发问题**最为突出，严重程度排序如下：
1.  **[Critical] CPU 占用飙升与死循环**
    -   **[Issue #3098]**: 添加/删除 MCP 时 CPU 持续 100%（疑似 #3106 已修复）。
    -   **[Issue #3096]**: 主进程陷入工具调用错误重试循环，导致 CPU 126.7%，线程爆炸。
    -   **[Issue #2888]**: 空闲时 AnyIO 取消机制导致 CPU 飙升。
    -   **[Issue #3097]**: 对话数问后单核满载。
2.  **[High] 渠道崩溃与连接中断**
    -   **[Issue #2911]**: Windows 客户端数小时后自动关闭。
    -   **[Issue #3063]**: 飞书长连接异步锁错误（**[PR #3095]** 已修复，待验证）。
3.  **[Medium] 逻辑与UI故障**
    -   **[Issue #3049]**: `/stop` 指令无效，无法终止工具调用，且聊天记录加载失败。
    -   **[Issue #3094]**: Mac 版客户端对话框无法上传文件。

## 6. 功能请求与路线图信号
- **Agent 自管理能力**: **[Issue #2680]** 提出希望 Agent 具备创建/修改/删除其他 Agent 的能力，向“Meta-Agent”方向演进。
- **文件发送能力**: **[Issue #3056]** 指出 Agent 目前无法主动向用户发送文件（只能接收），限制了双向交互体验。
- **对话体验优化**: **[Issue #3123]** 建议优化 AI 输出时的滚动机制，允许用户在输出过程中阅读，而非强制跟随光标。
- **模型发现机制**: **[Issue #3045]** 反映“自动获取模型”不可用，考虑到 **v1.0.2-beta.1** 已将其限制为本地，这可能是一个设计变更导致的 User Expectation 错位，需文档更新说明。

## 7. 用户反馈摘要
- **痛点**：
    - **稳定性**：Windows 和 macOS 客户端存在进程意外退出的情况（#2911, #3094）。
    - **本地模型体验**：本地模型（如 Qwen3.5）无法开启深度思考模式（#3050），且 v1.0.1 中 llama.cpp 更新卡在 100%（#3030）。
    - **长任务执行**：长任务（如代码迭代）会中途静默停止，且 `/stop` 指令无效，导致用户无法干预（#3011, #3049）。
    - **上下文管理**：定时任务运行多次后因上下文过长报错（#2789）。

## 8. 待处理积压
- **[Issue #1911 小艺频道连接异常**：用户反馈华为小艺频道返回网络错误，且日志无记录，疑似渠道兼容性 Bug，暂无修复 PR。
- **[PR #2987] Console 聊天取消竞态条件**：修复“点击停止后发送新消息被忽略”的问题，目前处于 Open 状态，需尽快合并以改善交互体验。
- **[PR #2840] 移除 localhost API 认证绕过**：安全相关 PR，虽然处于 Open 状态，但对生产环境部署至关重要，需优先审查。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 (2026-04-09)

**报告摘要：** 今日项目处于高维护响应状态，虽然无代码合并（PR 为 0），但维护者在 24 小时内集中关闭了 3 个历史 Issues，清理了积压工单。同时，项目在短时间内连续发布了两个版本（v1.7.8 与 v1.7.9），重点解决了 macOS 平台的兼容性说明及已知 Bug。

---

### 1. 今日速览
EasyClaw 项目今日呈现出**“高响应、零合并”**的状态。虽然活跃的开发周期（PR 合并）暂歇，但维护者对社区反馈的响应速度极快，过去 24 小时内关闭了所有活跃的待办 Issues（3/3），清空了短期积压。项目连续发布了两个补丁版本（v1.7.8 和 v1.7.9），显示出快速迭代以解决特定平台阻碍的决心。整体健康度良好，技术债务和用户阻滞点正在被快速清除。

---

### 2. 版本发布
今日连发两版，主要聚焦于 macOS 平台的体验修复。

*   **RivonClaw v1.7.9 & v1.7.8**
    *   **发布时间：** 2026-04-09
    *   **核心更新：** 发布说明中显著更新了 **macOS 安装指南**。
    *   **关键变更：** 针对未签名应用导致的 `Gatekeeper` 拦截问题（报错提示“'RivonClaw' is damaged”），提供了具体的 Terminal 绕过指令。
    *   **影响分析：** 这是一类针对 macOS 用户的“文档/体验修复”，解决了新用户下载后无法直接运行的“准入”问题，预计将显著降低 macOS 用户的使用门槛和安装报错率。
    *   **下载地址：** [Releases v1.7.9](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.9)

---

### 3. 项目进展
今日无新的 Pull Requests 合并。项目进展主要体现在 Bug 修复和用户体验优化上（详见下文 Bug 与稳定性部分）。

---

### 4. 社区热点
今日社区讨论主要集中在旧工单的关闭，无新增激增讨论。

*   **[CLOSED] Proposal: Community Growth Strategy for RivonClaw** ([#27](https://github.com/gaoyangz77/rivonclaw/issues/27))
    *   **事件：** 社区专家 Gingiris 提交了一份关于社区增长策略的建议书。该提案在悬停约两周后被关闭。
    *   **分析：** 用户提到了 RivonClaw 在 6 周内获得 246 星标的增长数据，并类比了 AFFiNE 的增长路径。工单的关闭可能意味着维护者已阅知或暂时采纳了建议，或者倾向于专注于产品打磨而非激进的市场扩张。

---

### 5. Bug 与稳定性
维护者今日集中解决了阻塞性 Bug，修复率 100%。

*   **[已修复] 百炼套餐模型切换 HTTP 400 错误** ([#29](https://github.com/gaoyangz77/rivonclaw/issues/29))
    *   **严重程度：** 高（核心功能不可用）
    *   **描述：** 用户报告在使用百炼套餐时，从 Qwen3.5 切换至 GLM/Kimi 模型后，API 返回 `InvalidParameter` 错误。
    *   **状态：** 已在今日发布的版本（推测为 v1.7.8 或 v1.7.9）中修复并关闭工单。
*   **[已修复] 更新日志重复弹出** ([#31](https://github.com/gaoyangz77/rivonclaw/issues/31))
    *   **严重程度：** 中（体验干扰）
    *   **描述：** 用户反馈更新后每次启动都会弹出更新日志，且未明确显示来源。
    *   **状态：** 已关闭，推测已在最新版中修正了版本判断逻辑。

---

### 6. 功能请求与路线图信号
今日无新增活跃的功能请求。之前的增长提案（#27）已被处理（关闭），目前未见新的功能性 PR 或 Issue 提交，表明项目可能正处于一个功能稳定期，专注于打磨现有体验。

---

### 7. 用户反馈摘要
从今日关闭的 Issues 中提炼出用户真实痛点：

*   **模型兼容性痛点：** 用户在切换不同 LLM 模型（如 Qwen 到 GLM）时遇到了参数校验失败的问题，对多模型支持的稳定性提出了挑战。
*   **macOS 门槛痛点：** macOS 用户对未签名应用的“已损坏”警告感到困惑，急需清晰的文档指引，否则会误以为下载文件真的损坏。
*   **UI/UX 细节：** 频繁弹出的更新日志干扰了用户的日常使用流程。

---

### 8. 待处理积压
*   **当前状态：** 🎉 **无积压**
*   **说明：** 截至日报生成时，过去 24 小时内活跃的 Issues 已全部清理完毕。项目维护工作非常高效，开发者可以集中精力规划下一阶段的功能开发。

---
*数据来源：[GitHub.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw) - 数据时间戳：2026-04-09*

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*