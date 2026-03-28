# OpenClaw 生态日报 2026-03-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-28 00:11 UTC

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

# OpenClaw 项目日报：2026-03-28

**报告生成时间**：2026-03-28  
**数据来源**：OpenClaw (github.com/openclaw/openclaw)  
**分析师**：AI 智能体与个人助手领域观察员

---

## 1. 今日速览
OpenClaw 项目今日活跃度极高，过去 24 小时内 Issues 与 PRs 的处理量均达到 500 条，显示出强劲的开发活力和社区参与度。项目目前正处于 **2026.3.x 系列版本**的迭代高峰期，大量提交集中在 Bug 修复、回归问题解决以及多平台适配（特别是 Linux/Windows 客户端与 Discord/Telegram 集成）上。虽然新版本发布数为 0，但大量 PR 的合并工作正在后台进行，预计近期将有版本更新以修复近期引入的多个回归问题。社区讨论焦点集中在**本地模型调用的稳定性**、**多 Agent 协同中的通信断连**以及**平台适配的完整性**。

---

## 2. 版本发布
**无新版本发布**

---

## 3. 项目进展
今日虽然未发布新版本，但合并队列中有大量关键的 Pull Request 正在处理中，主要进展如下：

*   **稳定性与回归修复**：核心开发团队正集中修复 3.8/3.11/3.12 版本引入的一系列回归问题。关键 PR 如 **#46747**（修复 Ollama thinking 模型输出为空）和 **#56085**（稳定 CI 模块绑定测试）已被关闭或接近完成，标志着对底层模型适配层和测试基础设施的加固。
*   **多模态与视觉能力**：**#43501 (Realtime Voice)** 和 **#46737 (Slack Block Kit)** 等大型 PR 持续活跃，显示项目正在向**低延迟语音交互**和**富文本消息展示**方向迈进，这将显著提升 Agent 在即时通讯软件中的交互体验。
*   **安全与审计机制**：**#56050** 引入了 `before_skill_install` 钩子，允许外部安全扫描器在安装前审计 Skill 代码，这表明 OpenClaw 正在加强企业级安全能力，以应对日益增长的插件生态安全风险。

---

## 4. 社区热点
今日讨论热度最高的议题集中在跨平台支持和关键 Bug 的反馈上：

1.  **[#75] 跨平台客户端缺失的呼声持续高涨**
    *   **状态**：OPEN，57 条评论，👍 66
    *   **摘要**：尽管已有 macOS/iOS/Android 客户端，社区对 **Linux 和 Windows 原生客户端**的需求依然强烈，这被标记为 `help wanted`，显示出官方缺乏对桌面端的维护资源。
    *   **链接**：[openclaw/openclaw#75](https://github.com/openclaw/openclaw/issues/75)

2.  **[#55672] 版本阻塞器：本地模型 API Key 识别失败**
    *   **状态**：OPEN，10 条评论，👍 3
    *   **摘要**：最新提交中，即便 `openclaw models status --probe` 成功，网关仍报错 "No API key for provider"。这是一个严重的**回归 Bug**，直接阻断了本地模型（如百度千帆）的使用，被标记为 `Beta release blocker`。
    *   **链接**：[openclaw/openclaw#55672](https://github.com/openclaw/openclaw/issues/55672)

3.  **[#49971] RFC：原生 Agent 身份与信任验证**
    *   **状态**：OPEN，11 条评论
    *   **摘要**：社区正在探讨基于 W3C DID 和 ERC-8004 的 Agent 身份验证标准，试图解决跨平台交互中的信任问题。这是路线图层面的重要讨论。
    *   **链接**：[openclaw/openclaw#49971](https://github.com/openclaw/openclaw/issues/49971)

---

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，且涉及多个核心组件，需重点关注：

*   **🔴 严重回归**
    *   **本地工具调用失效** ([#39651](https://github.com/openclaw/openclaw/issues/39651))：用户报告 Agent 仅能对话无法执行文件写入/操作，涉及权限模型变更。
    *   **Agent 假性执行** ([#40082](https://github.com/openclaw/openclaw/issues/40082))：Agent 声称开始任务但仅返回 "One sec" 占位符，无实际工具调用。
    *   **配置断连** ([#55816](https://github.com/openclaw/openclaw/issues/55816))：升级 `pi-agent-core` 后自定义 Provider 报错 "No API key"，影响私有化部署用户。

*   **🟡 崩溃与循环**
    *   **Discord 健康检查崩溃** ([#54931](https://github.com/openclaw/openclaw/issues/54931))：v2026.3.24 版本中 Discord 健康监控触发未捕获异常，导致网关每 35 分钟崩溃一次。
    *   **Telegram 轮询停滞** ([#43233](https://github.com/openclaw/openclaw/issues/43233))：更新后 Telegram 轮询停滞，强制重启。

*   **🟢 具体功能 Bug**
    *   **Ollama 空响应** ([#46680](https://github.com/openclaw/openclaw/issues/46680))：已修复（PR #46747），原因是未发送 `think` 参数。
    *   **Kimi Web Search 401** ([#44851](https://github.com/openclaw/openclaw/issues/44851))：Chat API 正常但 Web Search 工具认证失败，影响集成体验。

---

## 6. 功能请求与路线图信号
从活跃的 Issues 和 PRs 中，我们观察到以下潜在的未来特性：

*   **视觉能力增强** ([#28744](https://github.com/openclaw/openclaw/issues/28744))：用户强烈请求 Agent 在飞书/Telegram 等平台能直接接收并识别图片（目前仅传递文字描述）。
*   **NVIDIA NIM 原生支持** ([#50898](https://github.com/openclaw/openclaw/issues/50898))：请求将 NVIDIA API 纳入为一等公民 Provider，简化 NVIDIA 托管模型的接入流程。
*   **插件/技能安全扫描** ([#55820](https://github.com/openclaw/openclaw/pull/55820))：社区提出了动态、可插拔的技能扫描能力，用于防范 Skill 投毒，这极可能成为下一版本的重点安全特性。

---

## 7. 用户反馈摘要
从海量评论中提炼的真实用户体验：

*   **痛点 - 代理执行幻觉**：大量用户反馈 Agent "说一套做一套"，要么只输出工具调用的文本描述而不实际调用 ([#45046](https://github.com/openclaw/openclaw/issues/45046))，要么在确认任务后毫无动作 ([#40082](https://github.com/openclaw/openclaw/issues/40082))。这表明 LLM 的指令遵循或工具调度逻辑存在严重不稳定。
*   **痛点 - 配置复杂度与健壮性**：用户在配置本地模型（如 Qwen, DeepSeek）和私有 Provider 时遇到大量阻碍，特别是 Key 不持久化 ([#52037](https://github.com/openclaw/openclaw/issues/52037)) 和参数传递错误 ([#38902](https://github.com/openclaw/openclaw/issues/38902))。
*   **痛点 - 平台集成稳定性**：Discord 和 Telegram 用户深受断线重连、消息丢失 ([#13688](https://github.com/openclaw/openclaw/issues/13688)) 和 Webhook 失败之苦，长时间运行的稳定性急需改进。
*   **好评 - 多模型支持**：尽管有 Bug，用户对 OpenClaw 能统一调度 Ollama、OpenAI、Kimi 等多种模型的能力表示高度认可，这是其核心价值所在。

---

## 8. 待处理积压
提醒维护者关注以下长期未解决但影响广泛的问题：

*   **[#75] Linux/Windows 客户端**：作为点赞数最高的 Issue，长时间处于开放状态，桌面用户体验亟待提升。
*   **[#13688] Discord WebSocket 断连**：断线重连逻辑失败且退避时间无界增长，导致 Bot 长时间离线，影响核心群聊场景。
*   **[#20386] Windows/WSL 节点审批卡死**：Windows 用户作为节点主机时，Socket 审批无响应，阻碍了 Windows 环境下的分布式部署。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告
**报告日期**：2026-03-28
**分析师**：AI 开源生态观察员

---

## 1. 生态全景
当前（2026-03-28）个人 AI 助手与自主智能体开源生态正处于**“架构深水区”**。虽然早期的 LLM 对话封装已成熟，但各头部项目正面临**稳定性（幻觉、断连）**与**企业级能力（多租户、安全审计）**的双重挑战。今日的动态显示，生态已从单纯的“模型接入”转向**“系统工程的打磨”**，特别是**多模态交互（语音、视觉）**、**长上下文管理（Token 优化）**以及**跨平台标准化（Agent Skills / .well-known）**成为普遍的技术演进方向。同时，随着 Anthropic 等厂商的封号风险加剧，**去中心化部署**与**供应商多元化**成为不可逆转的生存刚需。

---

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 | 今日状态关键词 |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **OpenClaw** (Core) | **500** | **500** | 无 | 🔴 **活跃但脆弱** | 回归修复期，大量社区反馈堆积。 |
| **NanoBot** | 20 (处理91) | 23 (处理91) | v0.1.4.post6 | 🟠 **迭代阵痛期** | 架构重构引发稳定性波动，响应速度快。 |
| **Zeroclaw** | 30 | 50 | v0.6.5 | 🟢 **稳步进化** | Rust Edition 升级，架构现代化领先。 |
| **PicoClaw** | 16 | 43 | Nightly | 🟠 **性能攻坚** | 重点解决 CPU 占用与企业级隔离。 |
| **NanoClaw** | 17 | 45 | 无 | 🟠 **安全驱动** | 被迫进行供应商迁移，漏洞修补中。 |
| **NullClaw** | ~5 | 37 | 无 | 🟢 **工程稳健** | 专注消息投递可靠性与架构补完。 |
| **IronClaw** | 20 | 47 | v0.23.0 | 🔴 **高危重构** | 架构 v2 与安全漏洞修复并行，风险高。 |
| **LobsterAI** | 26 | 50 | 无 | 🟠 **体验优化** | UI 重构与跨平台兼容性修复为主。 |
| **TinyClaw** | 0 | 2 | 无 | 🟢 **静默开发** | 零噪音，专注于生产力功能开发。 |
| **Moltis** | 6 | 6 | **2个版本** | 🟢 **快速迭代** | 版本发布频率极高，响应迅速。 |
| **CoPaw** | 50 | 42 | 无 | 🔴 **社区混乱** | 讨论热度极高，但配置管理引发抱怨。 |
| **ZeptoClaw** | 0 | 2 | 无 | 🟢 **垂直突破** | 专注浏览器自动化与长上下文。 |
| **EasyClaw** | 0 | 0 | 无 | ⚪ **停滞** | 过去 24 小时无活动。 |

---

## 3. OpenClaw 在生态中的定位
**OpenClaw** 作为本报告的核心参照对象，不仅是社区的“流量担当”，也是问题的“集散地”。
*   **规模优势**：拥有最大的用户基数和社区贡献量（日处理 1000+ 议题），是目前生态中最通用的解决方案。
*   **技术路线**：坚持“全平台兼容”与“多模型大一统”策略。今日动态显示其正在极力补齐 Linux/Windows 桌面端的短板，并试图通过 `OpenClaw Gateway` 兼容本地模型。
*   **主要痛点**：由于架构包袱最重，相比 Zeroclaw（Rust）或 IronClaw（重构中），OpenClaw 深受“回归 Bug”和“假性执行”困扰。它处于“维护旧城”与“建设新城”的夹缝中。

---

## 4. 共同关注的技术方向
从今日各项目的动态中，提炼出以下 4 个明显的生态共振趋势：

1.  **生态互操作性**
    *   **涉及项目**：NanoBot, PicoClaw, NullClaw, IronClaw
    *   **具体诉求**：超过 4 个项目同时提出支持 `.well-known` URI 安装技能（参考 Agent Skills 标准）。这标志着开源 Agent 正试图打破孤岛，构建类似 VS Code 插件市场的统一分发标准。
2.  **供应商“去风险化”**
    *   **涉及项目**：NanoClaw, OpenClaw, CoPaw
    *   **具体诉求**：受 Anthropic 封号潮影响，用户强烈请求支持 OpenAI (Codex)、Gemini、NVIDIA NIM 等作为后端，拒绝被单一厂商绑定。
3.  **长上下文与记忆工程**
    *   **涉及项目**：Zeroclaw, NullClaw, ZeptoClaw, IronClaw
    *   **具体诉求**：各项目都在攻克“长对话遗忘”和“Token 溢出”问题。Zeroclaw 引入了上下文溢出恢复，ZeptoClaw 重写了多层压缩算法，NullClaw 则在尝试知识图谱（KgMemory）记忆。
4.  **安全与信任**
    *   **涉及项目**：OpenClaw, IronClaw, NanoClaw, CoPaw
    *   **具体诉求**：从 IronClaw 的多租户隔离到 OpenClaw 的 Skill 安全扫描，再到 NanoClaw 的容器化漏洞修复，“安全性”已从可选项变为生产环境的必选项。

---

## 5. 差异化定位分析

*   **技术架构流派**：
    *   **性能派**：Zeroclaw 是唯一全面拥抱 Rust Edition 2024 的项目，在资源控制和并发性能上具有天然优势。
    *   **企业派**：IronClaw 正在进行激进的“统一执行引擎 (v2)”重构，强调多租户、审计和金融级安全，定位偏向企业/商业部署。
    *   **集成派**：LobsterAI 和 CoPaw 拥有最完善的图形界面（GUI），侧重桌面用户体验和办公自动化集成。
*   **特定功能专精**：
    *   **NanoBot**：专注于 Telegram/Discord 等即时通讯软件的 Bot 体验，细节优化（如流式、Markdown）极其频繁。
    *   **ZeptoClaw**：专注于浏览器自动化，试图解决 Agent “触网”能力的痛点。
    *   **NullClaw**：专注于通信中间件的可靠性，提出了“发件箱”模式解决分布式场景下的消息丢失。

---

## 6. 社区热度与成熟度
*   **第一梯队（成熟期/维护期）**：**OpenClaw**, **PicoClaw**, **NullClaw**。
    *   特征：功能完备，但主要精力在于修补 Bug、处理回归问题、优化性能。
*   **第二梯队（快速迭代/重构期）**：**Zeroclaw**, **IronClaw**, **NanoBot**, **Moltis**。
    *   特征：正在进行底层架构升级（如 Rust 升级、引擎 v2、解耦重构），伴随着频繁的版本发布和不稳定性，适合追求前沿技术的开发者。
*   **第三梯队（垂直/早期）**：**TinyClaw**, **ZeptoClaw**, **NanoClaw**。
    *   特征：专注于特定细分领域（如任务管理、浏览器自动化），社区较小但专注。

---

## 7. 值得关注的趋势信号
*   **信号 1：Agent 交互的“拟人化”要求提高**
    *   社区不再满足于“文本回复”，而是要求流式输出、语音、实时反馈（如 NanoBot 的“眼睛”表情、NullClaw 的防抖机制）。**开发者建议**：在开发 Agent 时，必须重视 UI 的即时反馈，否则会被认为“卡死”。
*   **信号 2：配置管理的“噩梦”正在推动标准化**
    *   CoPaw 和 OpenClaw 的大量用户抱怨配置被覆盖、Key 丢失。这预示着下一波竞争点在于**“一键部署”**和**“配置迁移”**能力。
*   **信号 3：私有化/边缘部署成为刚需**
    *   大量关于本地模型、Docker 化、甚至离线部署的需求。建议开发者优先考虑容器化交付，并减少对云端 SaaS 的硬依赖。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 (2026-03-28)

## 1. 今日速览
NanoBot 项目今日处于**极高活跃度**状态。过去 24 小时内共处理了 91 条更新（Issues + PRs），标志着继 `v0.1.4.post6` 发布后的密集维护期。社区提交了大量的 Bug 报告（主要集中在 Telegram 渠道回归问题和 Markdown 渲染），同时核心维护团队正在快速响应，合并了关键的安全补丁和 Agent 运行时优化。当前代码库正处于快速迭代与修复新版本引入问题的“稳定化”阶段。

## 2. 版本发布
**v0.1.4.post6**
- **发布说明**：该版本合并了 57 个 PR，引入了 27 位新贡献者。重点在于重构 Agent 运行时底层，而非单纯堆砌功能。
- **核心变动**：
    - **Agent 运行时解耦**：对核心架构进行了正式的拆分与重组，提升了代码的整洁度。
    - **Telegram 交互优化**：引入了“眼睛” (👀) 表情符号作为收到消息的即时反馈。
- **潜在风险**：虽然架构升级，但社区反馈显示该版本引入了较多回归问题，特别是流式响应和 Markdown 渲染方面。

## 3. 项目进展
今日有 23 个 PR 被合并或关闭，主要的推进方向如下：
*   **安全性加固**：修复了一个**高危**的安全漏洞，允许通过邮件轮询进行间接提示注入和身份验证绕过 ([#2567](https://github.com/HKUDS/nanobot/pull/2567))。
*   **Agent 自省能力**：合并了 `SelfTool` 功能 ([#2521](https://github.com/HKUDS/nanobot/pull/2521))，允许 Agent 在运行时检查和修改自身状态（如动态调整上下文窗口），无需重启。
*   **渠道修复与优化**：
    *   Telegram: 修复了流式传输中上下文丢失的问题 ([#2546](https://github.com/HKUDS/nanobot/pull/2546))，并尝试修复响应完成后“眼睛”反应未移除的问题 ([#2564](https://github.com/HKUDS/nanobot/pull/2564))。
    *   NapCat: 合并了 NapCat QQ 通道支持，带来了基于 WebSocket 的通信和消息防抖功能 ([#2016](https://github.com/HKUDS/nanobot/pull/2016))。
*   **模型支持增强**：添加了对 Codex 原生网络搜索的支持 ([#2565](https://github.com/HKUDS/nanobot/pull/2565))。

## 4. 社区热点
今日讨论最热的主题集中在 `v0.1.4.post6` 的用户体验下降：
*   **[#2562 [Regression]](https://github.com/HKUDS/nanobot/issues/2562)** (👍 0 | 评论 2): Telegram 的“已读”反应在回复完成后未消失。这反映了用户对 UI 细节一致性的高要求。
*   **[#235 "I've completed processing..."] (https://github.com/HKUDS/nanobot/issues/235)** (👍 7 | 评论 9): 一个旧但高赞的 Issue，反映 Deepseek 模型在无响应时的处理体验。
*   **[#2271 [PR]](https://github.com/HKUDS/nanobot/pull/2271)**: 关于为 Agent 添加工具调用循环检测的提案，引发了关于如何防止 LLM 陷入死循环的讨论。
*   **[#2487 [Proposal]](https://github.com/HKUDS/nanobot/issues/2487)** (👍 1): 社区强烈建议消除“虚假执行”反馈，即 Bot 声称在执行任务但实际并未发生的情况。

## 5. Bug 与稳定性
今日报告的新 Bug 较多，且多为 `v0.1.4.post6` 引入的**回归问题**：
*   **🔴 高严重度 - Markdown 渲染故障**: **[#2568](https://github.com/HKUDS/nanobot/issues/2568)** 报告 Telegram 在新版本下 Markdown 渲染不稳定（时而正常时而失败），严重影响阅读体验。
*   **🔴 高严重度 - 流式响应中断**: **[#2559](https://github.com/HKUDS/nanobot/issues/2559)** 指出长回复在 Telegram 流式传输时会因 `Message_too_long` 错误而失败。这是一个功能性倒退。
*   **🟠 中严重度 - 并发变量覆盖**: **[#2549](https://github.com/HKUDS/nanobot/issues/2549)** 报告跨 Channel 并发时 `_sent_in_turn` 变量被覆盖，导致消息工具静默失败。这是一个之前修复过但又复现的问题。
*   **🟠 中严重度 - 搜索限频**: **[#2560](https://github.com/HKUDS/nanobot/issues/2560)** 用户反馈更新后 Brave 搜索更容易触发限流，可能涉及请求逻辑变更。
*   **🟠 兼容性 - VolcEngine API**: **[#2548](https://github.com/HKUDS/nanobot/issues/2548)** 和 **[#2476](https://github.com/HKUDS/nanobot/issues/2476)** 报告了火山引擎 API 调用时的参数冲突（`max_tokens` 与 `max_completion_tokens`）。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以窥见未来的开发重点：
*   **安全沙箱**: **[#2569](https://github.com/HKUDS/nanobot/issues/2569)** 提出使用 `sandlock` 为工具执行添加 OS 级别的沙箱，防止恶意命令执行。**[#1448](https://github.com/HKUDS/nanobot/issues/1448)** 也提出了类似建议。
*   **标准化技能安装**: **[#2571](https://github.com/HKUDS/nanobot/issues/2571)** 请求支持从 `.well-known` URI 安装技能，以兼容 Agent Skills 社区的标准化趋势。
*   **子代理交互**: **[#2507](https://github.com/HKUDS/nanobot/pull/2507)** 正在开发“暂停-恢复”机制，允许子代理向用户提问并等待回答，这对多代理协作至关重要。
*   **思考模式开关**: **[#2240](https://github.com/HKUDS/nanobot/issues/2240)** 用户请求添加开启或关闭思考模式的配置项。

## 7. 用户反馈摘要
*   **痛点**：用户对 `v0.1.4.post6` 的稳定性感到失望，特别是 Telegram 渠道的 Markdown 渲染和长消息流式传输问题。
*   **信任问题**：**[#2487](https://github.com/HKUDS/nanobot/issues/2487)** 反映了一个核心痛点：当 Agent 声称“我正在做”或“已完成”但实际未执行时，会严重破坏用户信任。
*   **特定场景问题**：多位用户反馈在使用 GPUStack、Ollama Cloud 和 VolcEngine 等非标准提供商时遇到兼容性问题。
*   **正面反馈**：用户对引入即时反馈（如 Telegram 的 👀 或 QQ 的确认消息）表示欢迎，因为这缓解了长推理等待时的焦虑。

## 8. 待处理积压
*   **架构级建议**: **[#1448](https://github.com/HKUDS/nanobot/issues/1448)** (安全沙箱) 和 **[#2571](https://github.com/HKUDS/nanobot/issues/2571)** (技能标准) 涉及重大架构调整，需维护者评估可行性。
*   **多语言支持**: **[#2322](https://github.com/HKUDS/nanobot/pull/2322)** (子代理结果发送) 仍在开放中，涉及多语言/多渠道的上下文处理复杂性。
*   **长期活跃讨论**: **[#235](https://github.com/HKUDS/nanobot/issues/235)** (无响应处理) 自 2 月开放至今，仍未完全解决。
*   **文档同步**: **[#2493](https://github.com/HKUDS/nanobot/issues/2493)** 指出 LangSmith 集成文档随代码更新而过时，需尽快更新。

---
*数据来源：GitHub.com/HKUDS/nanobot | 报告生成时间：2026-03-28*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-28)

## 1. 今日速览
Zeroclaw 项目在今日（2026-03-28）呈现出**极高的活跃度**。过去24小时内，项目共接收了 50 条 PR 更新和 30 条 Issue 更新，反映出社区与核心团队正在全力推进项目迭代。技术层面，项目迎来了 **Rust Edition 2024** 的重大升级，并发布了包含上下文溢出恢复机制的关键补丁版本 v0.6.5。虽然功能演进迅速，但社区反馈显示在多渠道集成（尤其是 Matrix 和 WhatsApp）和核心工具执行（如 MCP）方面存在明显的稳定性问题，需关注技术债务的偿还。

## 2. 版本发布
**版本：v0.6.5**
今日发布了 v0.6.5 版本，主要聚焦于 Agent 核心循环的稳定性与上下文管理能力的增强。
- **核心更新**：
  - **上下文溢出恢复**：在交互式守护进程循环和工具调用循环中增加了上下文溢出恢复机制，防止长对话导致崩溃。
  - **快速路径修剪**：在上下文压缩器中添加了快速路径工具结果修剪，提高处理效率。
  - **预防性检查**：在调用提供商（Provider）API 之前增加了上下文预检查，避免无效请求。
  - **共享迭代预算**：引入共享迭代预算机制，优化资源分配。
- **影响评估**：此次更新显著提升了 Agent 在长对话和高频工具调用场景下的稳定性，建议所有用户尽快升级。

## 3. 项目进展
今日有多个关键 PR 处于活跃或合并状态，推动了项目在架构现代化、用户体验和安全性方面的进展：
- **Rust Edition 2024 升级 (#4841)**: 这是一个巨大的架构性 PR，项目已从 Rust 2021 Edition 升级至 **2024 Edition**。该 PR 修复了新版本规则带来的编译错误，并通过了全部 5802 个测试。这意味着项目将享受到最新的语言特性支持。
- **安全性与可信度 (#4831)**: 提出了“HMAC 工具执行收据”功能，用于检测 LLM 的幻觉行为（即模型伪造工具执行结果）。这在生产环境中对保证数据真实性至关重要。
- **渠道集成扩展**:
  - **LINE Messaging API (#4822)**: 新增了对 LINE 消息频道的支持，填补了东南亚市场的空白。
  - **Mattermost (#4845)**: 为 Mattermost 频道添加了基于 WebSocket 的实时监听模式，提升了响应速度。
- **历史记录修复 (#4825)**: 修复了历史记录修剪器破坏 `tool_use`/`tool_result` 原子对的问题，解决了 Anthropic 400 错误。

## 4. 社区热点
今日讨论热度最高的议题集中在渠道配置管理、Logo 设计以及潜在的集成问题：
- **[Feature] Externel MCP Server Support (#1380)**: [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/1380)
  - 虽然这是旧贴，但今日仍然活跃（13条评论）。用户强烈希望通过 npm 或远程方式集成外部 MCP (Model Context Protocol) 服务器，显示了社区对扩展工具生态的渴望。
- **[Feature] A better LOGO of Zeroclaw (#4710)**: [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)
  - 社区成员发起了重新设计 Logo 的提案，并附上了对比图。这反映了项目品牌化意识的觉醒，虽然技术属性不高，但能增强社区凝聚力。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，主要集中在 **S1 (阻断工作流)** 和 **S2 (行为降级)** 级别，显示出快速开发带来的不稳定性：
- **[S1] WhatsApp Web Channel Broken (#4846)**: [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4846)
  - **现象**：因编译特性缺失，WhatsApp Web 频道完全无法工作。
  - **状态**：Open。
- **[S1] zeroclaw onboard --channels-only 覆盖配置 (#4655)**: [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4655)
  - **现象**：运行 `onboard` 更新单个频道配置时，会意外删除所有其他频道的配置（数据丢失风险）。
  - **状态**：已有 Fix PR #4817。
- **[S1] Discord channel image embeds issue (#4808)**: [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4808)
  - **现象**：Discord 机器人将图片识别为文本嵌入而非图片载荷，导致无法“看到”图片。
  - **状态**：Open。
- **[S2] History pruner severs tool_use/tool_result pairs (#4810)**: [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4810)
  - **现象**：历史修剪器切断了工具调用对，导致 Anthropic API 400 错误。
  - **状态**：已有 Fix PR #4825。
- **[S2] Matrix thread replies lack context (#4804)**: [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4804)
  - **现象**：Matrix 机器人在线程中的第二条消息会丢失对话上下文。
  - **状态**：Open，但在 #4657 (Friction tracker) 中被追踪。

## 6. 功能请求与路线图信号
社区提出了一些具有前瞻性的功能需求，部分已有对应的 PR 进行中，显示出路线图的演进方向：
- **Matrix 媒体支持 (#4861)**: [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4861)
  - 用户请求在 Matrix 频道中支持图片、文件、音频和语音消息。目前的纯文本支持限制了其作为全能机器人的能力。
- **标准化技能安装 (#4853)**: [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)
  - 提议支持从 `.well-known` URI 安装技能，以跟进 Agent Skills 组的标准化计划。这可能改变未来技能的分发方式。
- **TOTP 2FA 工具执行门控 (#4799)**: [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/4799)
  - 这是一个已提出的 PR，旨在为危险工具执行增加 TOTP 二步验证。这表明项目正在从功能可用性向生产级安全性迈进。

## 7. 用户反馈摘要
从 Issues 和 PR 评论中提炼出的真实用户痛点：
- **配置与集成摩擦**: 用户对 `zeroclaw onboard` 命令感到沮丧，认为它过于“粗暴”地处理配置文件（覆盖而非合并），且缺乏针对单个配置项的 CLI 命令（如 #4669 提到的 `secret set`）。
- **文档缺失**: 用户试图配置 GitHub Copilot 作为提供商时，发现虽然有相关提交，但完全缺乏文档指导（#4851）。
- **UI/UX 故障**: Web UI 的 Sessions 页面报错（#4856），Channel 页面返回 HTML 而非 JSON（#4855），以及无法在 UI 中添加 Cron 任务（#4857），表明 Web Dashboard 目前的健壮性较差。
- **平台兼容性**: 树莓派 用户报告 `update` 命令下载了错误架构的二进制文件（#4842），影响了边缘设备的部署。

## 8. 待处理积压
提醒维护者关注以下长期存在或关键但尚未解决的 Issue：
- **Matrix channel: friction tracker (#4657)**: [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)
  - 这是一个汇总 Issue，追踪 Matrix 频道的所有摩擦点（如 E2EE 循环、上下文丢失、缺少仅提及模式等）。建议优先处理其中的高优先级项以改善用户体验。
- **CI clippy warnings gate (#4656)**: [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4656)
  - CI 中的 Clippy 检查目前跳过了可选特性，导致如 Matrix 频道的警告经常漏网，影响了代码库的整体质量把控。

---
*数据来源：GitHub.com/zeroclaw-labs/zeroclaw | 报告生成时间：2026-03-28*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-28)

## 📊 今日速览
今日 PicoClaw 项目处于**高度活跃**状态，主要集中在**架构重构与稳定性修复**。过去24小时共处理了 **16 条 Issues** 和 **43 条 PRs**，显示出社区强劲的贡献力度。核心进展包括：Web UI 新增版本信息展示、Agent 执行循环的性能优化（CPU 占用修复）、以及针对飞书和 QQ 渠道的多项 Bug 修复。新发布的 `v0.2.4-nightly` 版本继续推进自动化构建流程。项目整体正从功能快速迭代向“企业级稳定性与多租户隔离”方向迈进。

## 🚀 版本发布
*   **v0.2.4-nightly.20260327**
    *   **类型**: Nightly Build (自动化构建)
    *   **状态**: 可能不稳定，请谨慎使用。
    *   **详情**: 包含从 `v0.2.4` 以来主分支的最新变更。
    *   **Changelog**: [查看完整变更](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

## 🛠️ 项目进展
今日共合并/关闭了 12 个 PR，主要推进了以下领域的工作：
*   **Web UI 增强**: 合并了 PR #2087 ([feat(web): display backend version info in sidebar](https://github.com/sipeed/picoclaw/pull/2087))，用户现可在侧边栏直接查看当前运行的 PicoClaw 版本及元数据，提升了运维排查效率。
*   **Agent 核心性能**: 修复了主事件循环的 CPU 占用问题。PR #2103 ([fix(loop): cpu usage continous polling](https://github.com/sipeed/picoclaw/pull/2103)) 移除了原有的“半忙轮询”机制，改用阻塞式的 `select` 语句，显著降低资源消耗。
*   **安全与隔离**: PR #2095 ([Multi-User Session Isolation](https://github.com/sipeed/picoclaw/pull/2095)) 正在积极开发中，旨在加强 Agent 实例之间的工具访问隔离和工作区边界安全，这对多用户场景至关重要。
*   **语音功能重构**: PR #1939 ([Refactor/asr tts](https://github.com/sipeed/picoclaw/pull/1939)) 持续更新，重构了音频处理功能，为支持语音消息收发打下基础。

## 🔥 社区热点
*   **[#1974 Refactor ReadFileTool to use line-based pagination](https://github.com/sipeed/picoclaw/issues/1974)** (10 评论)
    *   **核心诉求**: 社区强烈希望将文件读取工具从“基于字节分页”改为“基于行分页”。
    *   **分析**: 当前基于字节的 `offset/length` 在处理文本日志或代码阅读时体验极差（容易切断字符）。PR #1981 已实现该功能并通过配置项 `tools.read_file.mode` 兼容旧模式，预计将很快合入。
*   **[#2074 飞书渠道话题回复错误](https://github.com/sipeed/picoclaw/issues/2074)** (High Priority, 1 评论)
    *   **核心诉求**: 用户反馈在企业内部业务中，机器人在飞书群的话题线程内无法正确回复，而是发到了群聊大流中。这属于从 OpenClaw 迁移到 PicoClaw 后的回归问题，影响办公场景体验。

## 🐛 Bug 与稳定性
*   **[CRITICAL] Agent Loop CPU 100% 占用**
    *   **链接**: [#2103](https://github.com/sipeed/picoclaw/pull/2103)
    *   **状态**: 已有 PR 修复
    *   **详情**: 旧版循环使用 `time.Sleep(200微秒)` 导致 CPU 持续占用，新 PR 已将其改为阻塞等待。
*   **[HIGH] 飞书渠道话题消息回复错位**
    *   **链接**: [#2074](https://github.com/sipeed/picoclaw/issues/2074)
    *   **状态**: 开放中
    *   **详情**: 机器人回复未发到话题Thread内，而是发到群聊，影响企业级使用。
*   **[MEDIUM] Windows 下无法使用 QQ 渠道**
    *   **链接**: [#2080](https://github.com/sipeed/picoclaw/issues/2080)
    *   **状态**: 开放中
    *   **详情**: 尽管配置和网络测试正常，但在 Windows 环境下启动 PicoClaw 后 QQ 渠道不可用。
*   **[MEDIUM] 工具反馈预览字符转义**
    *   **链接**: [#2081](https://github.com/sipeed/picoclaw/issues/2081)
    *   **状态**: 开放中
    *   **详情**: 聊天窗口中显示的工具反馈包含大量 Unicode 转义符（如 `\u0026`），导致 Shell 命令预览不可读。
*   **[LOW] Discord Bot Token 保存报错**
    *   **链接**: [#2072](https://github.com/sipeed/picoclaw/issues/2072)
    *   **详情**: Web UI 配置 Discord 时提示 "This field is required"。

## 💡 功能请求与路线图信号
*   **Web UI 版本显示**: Issue #2077 ([Display version information in web frontend](https://github.com/sipeed/picoclaw/issues/2077)) 提出。**状态**: PR #2087 已合并，需求已满足。
*   **安装 `.well-known` URI 技能**: Issue #2101 ([Installing skills from .well-known URI](https://github.com/sipeed/picoclaw/issues/2101)) 提出。**分析**: 旨在对接 Agent Skills 的通用标准，目前 Vercel 和 VS Code 均有支持意向，这是 PicoClaw 生态扩展的重要信号。
*   **飞书文件下载路径优化**: Issue #2030 ([allow Feishu to config where to save recived files](https://github.com/sipeed/picoclaw/issues/2030))。**分析**: 用户希望将 Hash 路径改为按 `{year}/{month}` 的人类可读结构，并支持去重。
*   **LM Studio 连接支持**: Issue #28 ([LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28))。**分析**: 这是一个长期存在的需求，用户希望在 Android/Termux 环境下更便捷地接入本地模型 LM Studio。

## 🗣️ 用户反馈摘要
*   **痛点**: **Exec 工具的安全守卫过于粗暴** (Issue #1042)。用户反馈当 Agent 执行 `curl wttr.in` 这类不涉及文件路径的命令时，正则匹配误判 `../../` 导致命令被拦截，体验不佳。
*   **痛点**: **配置管理混乱** (Issue #2053, #1901)。用户在 Web UI 找不到配置内置工具（如百度搜索）API Key 的地方；同时也存在 `no API key configured for model` 的报错。
*   **正面反馈**: 通过 Issue #2096 可以看到，尽管存在偶发性不回复的问题，用户仍积极在网络排查后提交 Issue，表明用户对项目有较高的容忍度和参与热情。

## 📝 待处理积压
*   **Issue #28 [LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28)**: 创建于 2 月，至今未关闭。对于希望在本地/边缘设备（如 Android）运行大模型的用户来说，这是一个高优先级但进展缓慢的功能。
*   **PR #1666 [Refactor MCP Manager](https://github.com/sipeed/picoclaw/pull/1666)**: 创建于 3 月中旬，涉及 MCP (Model Context Protocol) 管理器的重构，包含进程生命周期和并发安全修复，规模较大，至今处于开放状态，需要关注其合并进度。
*   **Issue #1042 [exec工具guardCommand问题](https://github.com/sipeed/picoclaw/issues/1042)**: 创建于 3 月初，涉及核心工具的安全机制逻辑，虽已有分析但尚未修复，可能影响复杂的 Shell 交互场景。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-28)

**分析师**：AI 智能体与个人助手领域开源项目分析师
**数据源**：github.com/qwibitai/nanoclaw

---

### 1. 今日速览
NanoClaw 项目在 2026-03-28 呈现出极高的开发活跃度与社区参与度。过去 24 小时内，项目处理了 **45 条 PR 更新**（超过半数已合并）和 **17 条 Issues**，显示核心功能迭代正在加速推进。社区讨论焦点集中在 **“供应商多元化”**（支持 OpenAI/Gemini/Copilot）和 **“容器化安全性”** 两方面，反映出用户对降低单一依赖风险和生产级部署稳定性的强烈需求。虽然今日无新版本发布，但多个关键的 Bug 修复和诊断工具补丁已合并，显著提升了系统的健壮性。

---

### 2. 版本发布
*今日无新版本发布。*

---

### 3. 项目进展
今日合并的 PR 主要集中在 **稳定性修复**、**文档优化** 及 **功能增强**，项目在工程化和用户体验方面迈进了重要一步：

*   **核心逻辑修复**：
    *   **[PR #1497]** 修复了当 `lastAgentTimestamp` 缺失时，系统向容器 Agent 发送多达 200 条完整历史记录导致的严重性能问题和 Token 浪费 ([link](https://github.com/qwibitai/nanoclaw/pull/1497))。
    *   **[PR #1480]** 修复了密钥管理问题，确保 Secrets 能正确作为环境变量传递给容器，解决了之前的认证失败问题 ([link](https://github.com/qwibitai/nanoclaw/pull/1480))。
*   **诊断与运维增强**：
    *   多个 PR 致力于完善诊断流程（**[PR #1372]**, **[PR #1443]**），修复了诊断提示语未被 Agent 读取的 Bug，并引入了基于 PostHog 的可选遥测功能（**[PR #1280]**）。
    *   **[PR #1468]** 增加了关于认证凭据的文档指导，明确了长生命周期的 Token 优于短期 Keychain Token 的使用场景。
*   **Agent 指令优化**：
    *   **[PR #1452/1453]** 改进了 Task Scripts 的 Agent 指令，引导使用 `schedule_task` 而非内联 Bash 循环，提升了任务执行的标准化程度。

---

### 4. 社区热点
今日社区讨论热度最高的议题围绕**生态兼容性**与**安全审计**展开：

*   **[#80 - Support other runtimes/providers (53 👍)]** ([link](https://github.com/qwibitai/nanoclaw/issues/80))
    *   **核心诉求**：由于 Anthropic 开始封禁使用 OpenClaw/NanoClaw 的用户账号，社区迫切希望项目能支持 OpenAI (Codex)、Gemini 等其他供应商，以分散封号风险。
*   **[#1350 - Add GitHub Copilot SDK support]** ([link](https://github.com/qwibitai/nanoclaw/issues/1350))
    *   **核心诉求**：提议集成 GitHub Copilot SDK 作为 GPT-4.1 等模型的后端，进一步丰富 AI 引擎选择。
*   **[#1483 - Security Audit (Critical/High Severity)]** ([link](https://github.com/qwibitai/nanoclaw/issues/1483))
    *   **核心诉求**：自动审计报告发现 2 个关键级（命令注入、内存泄漏）和 4 个高级别安全问题，引发了对容器运行时安全的高度关注。

---

### 5. Bug 与稳定性
今日报告的稳定性问题主要集中在 **容器运行环境** 和 **安全漏洞**：

*   **[Critical] Shell Command Injection & Unbounded Memory Growth** (Issue #1483)
    *   **详情**：`src/container-runtime.ts` 存在命令注入漏洞，且容器停止操作可能导致无限内存增长。
    *   **状态**：Issue 已关闭，推测已通过安全审查或内部修复，但未公开具体修复 PR。
*   **[High] NanoClaw 容器内崩溃** (Issue #1487)
    *   **详情**：在 Docker 容器内运行 NanoClaw 会导致自身容器硬崩溃，连带导致 Shell 退出。
    *   **状态**：**OPEN**，尚无修复 PR。
*   **[Medium] IPC 状态误判** (Issue #1482)
    *   **详情**：Host 进程错误地将普通的 `success` 流输出视为容器空闲状态，导致在 Agent 未完成查询逻辑时过早判定为空闲。
    *   **状态**：**OPEN**。

---

### 6. 功能请求与路线图信号
从新增 Issues 中可以窥见项目未来的扩展方向：

*   **认证后端扩展**：
    *   **[AWS Bedrock]** ([#1492](https://github.com/qwibitai/nanoclaw/issues/1492)) 和 **[Google Vertex AI]** ([#478](https://github.com/qwibitai/nanoclaw/pull/478)) 的支持请求表明，企业用户希望通过云厂商网关访问 Claude 模型，而非直接使用 Anthropic API。
*   **容器化部署**：
    *   **[#1485]** 请求将 NanoClaw 自身完全容器化，避免在宿主机直接运行安装脚本（虽然 #1487 报告了崩溃 Bug，但这是部署层面的关键需求）。
*   **新技能集成**：
    *   **[WhatsApp Baileys]** ([#1473](https://github.com/qwibitai/nanoclaw/issues/1473))：基于非官方协议的 WhatsApp 集成方案已合并（Closed）。
    *   **[Google Workspace & Image Vision]** ([#1491](https://github.com/qwibitai/nanoclaw/pull/1491), [#1496](https://github.com/qwibitai/nanoclaw/pull/1496))：正在开发中的 Google Workspace 集成和图像视觉支持。

---

### 7. 用户反馈摘要
*   **痛点 - 账号安全**：用户反馈 Anthropic 正在积极封禁使用此类工具的订阅服务，用户对“锁定效应”感到恐慌，急需多模型支持。
*   **痛点 - 安装流程**：用户吐槽目前的安装脚本直接在宿主机运行 `curl` 命令过于简陋且存在供应链攻击风险，倾向于 Docker 化部署。
*   **场景 - 医疗与私密部署**：有用户提到将 NanoClaw 用于家庭医疗系统，对 Fork 仓库的安全性表示担忧，体现了在敏感领域部署时的合规性顾虑。

---

### 8. 待处理积压
*   **[#80 - 多供应商支持**](https://github.com/qwibitai/nanoclaw/issues/80)：作为点赞数最高的 Feature Request，虽讨论激烈但尚未见明确的实施 PR，建议维护者优先排期。
*   **[#311 - Discord 线程与按钮支持**](https://github.com/qwibitai/nanoclaw/pull/311)：自 2 月开放至今仍在审核中，长时间未合并。
*   **[#363 - Meta-Skill (/create-skill)**](https://github.com/qwibitai/nanoclaw/pull/363)：旨在降低技能开发门槛的重要功能，目前处于 Blocked 状态。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

你好！我是 NullClaw (nullclaw/nullclaw) 的开源项目分析师。以下是根据 2026-03-28 的 GitHub 数据生成的项目动态日报。

---

## **NullClaw 项目日报 (2026-03-28)**

### **1. 今日速览**
NullClaw 项目在过去的 24 小时内保持了极高的**开发活跃度**与**工程迭代速度**。尽管没有新的版本发布，但社区提交了大量 Pull Requests (PRs)（37 条更新，其中 34 条待审核），主要集中在**系统稳定性增强**、**多渠道消息可靠性**以及**后端架构重构**上。Issues 处理效率较高，关闭了 3 个历史遗留问题，同时新增了关于 `.well-known` 技能安装标准的讨论。整体来看，项目正致力于解决分布式通信中的瞬时故障问题，并积极扩展对 **Agent Skills 生态**的支持。

---

### **2. 版本发布**
*   **当前状态**：无新版本发布。
*   **备注**：虽然代码库更新频繁，但目前没有打包新的 Release 版本。建议关注后续合并的 PR，预计下次发布将包含大量稳定性修复。

---

### **3. 项目进展**
今日核心进展集中在**通信中间件的健壮性**与**数据持久化**上，部分 PR 已准备就绪待合并：

*   **消息投递架构升级**:
    *   **PR #730**: 引入了 **`outbox` (持久化发件箱)** 模式。这是一个关键的架构改进，确保即使在进程重启或瞬时传输失败的情况下，最终出站消息也不会丢失。
    *   **PR #731**: 增加了**瞬态失败重试机制**。系统现在能智能区分永久性错误（如无效目标）和瞬时错误（如网络波动），对后者自动退避重试，显著提升消息送达率。
    *   **[链接](https://github.com/nullclaw/nullclaw/pull/730)** | **[链接](https://github.com/nullclaw/nullclaw/pull/731)**

*   **QQ 渠道连接修复**:
    *   **PR #732**: 针对 Issue #722 提出的 QQ 长任务断连问题，提出了一种**降级重试策略**。当 AI 处理耗时过长导致 `msg_id` 失效时，系统会自动回退到普通发送模式，确保用户能收到回复。
    *   **[链接](https://github.com/nullclaw/nullclaw/pull/732)**

*   **文档与配置完善**:
    *   **PR #695 (Closed)**: 补充了关于 `reliability`（可靠性）和 `model_fallbacks`（模型备选）的文档，帮助用户配置更稳定的推理服务。
    *   **PR #718**: 新增了内置 WeChat 渠道的详细配置指南。
    *   **[链接](https://github.com/nullclaw/nullclaw/pull/695)** | **[链接](https://github.com/nullclaw/nullclaw/pull/718)**

---

### **4. 社区热点**
今日讨论热度集中在**生态系统标准对接**与**渠道特定修复**上：

*   **热点 PR #712 - 知识图谱内存后端**:
    *   **内容**: 引入基于 SQLite 递归 CTEs 的 `KgMemory`，支持实体-关系图谱存储。
    *   **分析**: 这表明 NullClaw 正在从简单的 KV 存储向更高级的**结构化记忆**进化，这对处理复杂上下文非常关键。
    *   **[链接](https://github.com/nullclaw/nullclaw/pull/712)**

*   **热点 Issue #722 - QQ 渠道断连**:
    *   **内容**: 用户反馈在 AI 响应慢时 QQ 连接会断开，且回复丢失。
    *   **分析**: 这是一个高频痛点，目前已由 PR #732 提出解决方案，显示了维护者对生产环境稳定性的快速响应。
    *   **[链接](https://github.com/nullclaw/nullclaw/issues/722)**

*   **热点 Issue #734 - 支持技能安装标准**:
    *   **内容**: 请求支持 `.well-known` URI 来安装技能，对接 Agent Skills 通用标准。
    *   **分析**: 这是一个积极的生态信号，若采纳，NullClaw 将能无缝兼容 Cloudflare、Vercel 等平台的技能生态。
    *   **[链接](https://github.com/nullclaw/nullclaw/issues/734)**

---

### **5. Bug 与稳定性**
今日报告的 Bug 及其跟进情况：

*   **[High] QQ 渠道长任务超时断连**
    *   **描述**: 执行耗时任务时连接中断，无法自动恢复，导致 AI 回复丢失。
    *   **状态**: 已有 Fix PR (#732)。
    *   **[Issue #722](https://github.com/nullclaw/nullclaw/issues/722)**

*   **[Medium] Telegram 推理内容显示异常**
    *   **描述**: 开启 `reasoning` 后，Telegram 端仍不显示推理过程 (Issue #311)。该 Issue 曾被关闭，但用户反馈问题依旧，现被重新标记为 CLOSED（可能已通过其他 PR 修复或确认不支持）。
    *   **[Issue #311](https://github.com/nullclaw/nullclaw/issues/311)**

*   **[Low] Discord 定时私聊目标错误**
    *   **描述**: Discord 的延迟 DM 投递可能使用了错误的用户 ID。
    *   **状态**: 已有 Fix PR (#719)。
    *   **[PR #719](https://github.com/nullclaw/nullclaw/pull/719)**

---

### **6. 功能请求与路线图信号**
从 Issues 和 PRs 中捕捉到的未来功能方向：

*   **技能生态标准化**: **Issue #734** 请求支持 `.well-known` URI 技能发现。结合 PR #716 (新增计算器工具)，NullClaw 可能正在准备构建自己的插件市场或至少优化工具加载机制。
*   **知识图谱记忆**: **PR #712** 提出的 `KgMemory` 后端强烈暗示未来版本将加强对长期记忆和知识关联的本地化支持。
*   **用户体验 (UX) 增强**: **PR #676** 提议为 Telegram/Discord 添加“防抖”机制，避免连续短消息触发多次不必要的推理，这将显著降低 Token 消耗并提升响应体验。

---

### **7. 用户反馈摘要**
*   **痛点**: 用户在 **QQ** 和 **Discord** 渠道上深受“长任务断连”或“消息丢失”的困扰。这表明当前的 WebSocket 或长连接管理在处理高延迟 AI 生成时存在脆弱性。
*   **配置困惑**: 用户不清楚如何配置 **Fallbacks (备选模型)** 和 **Reasoning (推理模式)**。虽然文档 PR (#695) 已合并，但仍需更多直观的示例来帮助用户通过 `config.json` 实现高可用部署。
*   **调试需求**: 用户强烈希望在 Telegram 中能看到 `reasoning` 内容，以便调试 AI 行为（参考 Issue #311）。

---

### **8. 待处理积压**
提醒维护者关注以下长期或未解决的条目：

*   **PR #716 (Add calculator tool)**: 这是一个增强功能的 PR，目前处于 Open 状态。建议合并以丰富内置工具集。
    *   **[链接](https://github.com/nullclaw/nullclaw/pull/716)**
*   **PR #676 (Inbound debouncing)**: 这是一个性能优化 PR，能解决“消息触发过频”的问题，建议优先审议。
    *   **[链接](https://github.com/nullclaw/nullclaw/pull/676)**
*   **Issue #311 (Telegram Reasoning)**: 虽然标记为 Closed，但评论显示用户仍有需求。建议确认是否已彻底修复或在文档中明确说明当前限制。
    *   **[链接](https://github.com/nullclaw/nullclaw/issues/311)**

---
*日报生成日期: 2026-03-28 | 数据来源: NullClaw GitHub Repo*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-28)

## 1. 今日速览
IronClaw 项目今日开发活跃度极高，代码提交与安全审查同步推进。过去 24 小时内，项目处理了 **67 个变更项**（20 个 Issues，47 个 PR），同时发布了 **v0.23.0** 版本，重点完成了多租户隔离的第 2-4 阶段。社区层面，安全团队通过自动化 CI 审查识别了多个高危与严重级别的安全漏洞，涵盖了数据库注入、竞态条件及授权绕过等问题，目前核心贡献者已提交了针对性的修复 PR。整体来看，项目正处于架构升级（v2 engine）与安全加固并行的高速迭代期。

## 2. 版本发布
**[ironclaw-v0.23.0]** (2026-03-27)
- **新增**：完成多租户隔离 的第 2 至 4 阶段 ([#1614](https://github.com/nearai/ironclaw/pull/1614))，标志着项目在多用户支持与企业级部署能力上迈出关键一步。
- **修复**：修复了例程更新回退失败后的名称恢复问题 ([#1108](https://github.com/nearai/ironclaw/pull/1108))；处理了 MCP 工具中 `202 Accepted` 状态的响应逻辑。

## 3. 项目进展
今日多个核心功能 PR 处于待合并状态，主要进展集中在安全防御与执行流优化：
- **安全防御体系重构**：
  - **API 信息脱敏**：[#1719](https://github.com/nearai/ironclaw/pull/1719) 引入了共享网关清理助手，防止后端数据库异常细节泄露给 API 客户端，修复了今日发现的高危漏洞 [#1702](https://github.com/nearai/ironclaw/issues/1702)。
  - **敏感路径保护**：[#1713](https://github.com/nearai/ironclaw/pull/1713) 统一了 Shell 和文件工具的敏感路径保护逻辑，填补了此前 Shell 工具可绕过文件读取限制（如读取 `~/.ssh/id_rsa`）的安全缺口。
  - **授权修复**：[#1590](https://github.com/nearai/ironclaw/pull/1590) 修复了跨频道批准线程劫持漏洞，增加了 `source_channel` 验证。
- **核心架构优化**：
  - **执行引擎 v2**：[#1557](https://github.com/nearai/ironclaw/pull/1557) 引入了统一的 Thread-Capability-CodeAct 执行引擎（包含 43 个新文件，7000+ 行代码），旨在替换现有碎片化的抽象层。
  - **例程 恢复机制**：[#1471](https://github.com/nearai/ironclaw/pull/1471) 为轻型故障（如 LLM 超时）增加了带指数退界的重试逻辑；[#1720](https://github.com/nearai/ironclaw/pull/1720) 则处理了自主任务中的空工具补全问题。

## 4. 社区热点
- **多租户安全审查**：
  - 自动化 CI 审查机器人 连续标记了多个严重级别的 Issues，引发了安全团队的高度关注。
  - **Critical:** [#1485](https://github.com/nearai/ironclaw/issues/1485) (跨频道授权绕过) 与 [#1486](https://github.com/nearai/ironclaw/issues/1486) (TOCTOU 竞态条件) 仍在修复过程中。
  - **High:** [#1702](https://github.com/nearai/ironclaw/issues/1702) (数据库信息泄露) 已有修复 PR #1719。
- **用户支持与配置**：
  - **[#1697](https://github.com/nearai/ironclaw/issues/1697)**: 用户询问如何将 Codex 作为基础模型使用，反映了用户在配置第三方 LLM 提供商时遇到的命名困扰。
  - **[#1696](https://github.com/nearai/ironclaw/pull/1696)**: 社区贡献者提议允许局域网 IP 端点（通过 `LLM_ALLOW_LOCAL_NETWORK` 环境变量），解决了自托管用户无法通过局域网访问其他机器上的 LLM 的问题。

## 5. Bug 与稳定性
- **严重**
  - **[#1669](https://github.com/nearai/ironclaw/issues/1669)**: `is_recoverable_tool_call_segment` 中潜在的 UTF-8 Panic。修复方案已通过 PR [#1688](https://github.com/nearai/ironclaw/pull/1688) 合并，将不安全的字节索引截断替换为 `floor_char_boundary`。
  - **[#1705](https://github.com/nearai/ironclaw/issues/1705)**: `process_tool_result()` 中的类型擦除导致丢失错误类型信息，妨碍错误恢复。PR [#1714](https://github.com/nearai/ironclaw/pull/1714) 已关闭此 Issue。
- **高危**
  - **[#1676](https://github.com/nearai/ironclaw/issues/1676)**: Telegram Bot 自动轮询消息失败，HTTP 工具报错。这是用户反馈的真实痛点，当前状态为 Open。
  - **[#1706](https://github.com/nearai/ironclaw/issues/1706)**: 热路径上的工作区 I/O 操作 (`is_authenticated_webhook`) 导致性能瓶颈，建议修复中。
- **中等**
  - **[#1708](https://github.com/nearai/ironclaw/issues/1708)** & **[#1707](https://github.com/nearai/ironclaw/issues/1707)**: 错误信息格式不一致与 `LazyLock` 重复创建问题，均已在今日相关 PR 合并中修复。

## 6. 功能请求与路线图信号
- **Agent Skills 标准化支持**：
  - **[#1717](https://github.com/nearai/ironclaw/issues/1717)**: 提议支持从 `.well-known` URI 安装技能。鉴于 Cloudflare 和 Vercel 已支持此标准，IronClaw 接纳的可能性极高，这将是生态互通的重要一步。
- **金融执行层架构**：
  - **[#1712](https://github.com/nearai/ironclaw/issues/1712)**: 提出构建安全的金融执行层，涉及托管、签名、审批策略等。这是一个长期且复杂的架构议题，虽然目前仅有只读扩展，但预示着项目未来可能向代理支付领域深耕。
- **UX 改进**：
  - **[#1709](https://github.com/nearai/ironclaw/issues/1709)**: 指出设置页面的 Base URL 验证缺失，且缺少测试连接按钮。此类 UX 细节优化可能会很快被纳入排期。

## 7. 用户反馈摘要
- **痛点**：Telegram Bot 的集成体验依然不稳定（Issue #1676），用户反复报告轮询失败，对比“OpenClaw”的完美表现表示不满。
- **需求**：自托管用户对网络限制有明确诉求（PR #1696），希望能够更灵活地在局域网内部署 LLM 服务。
- **困惑**：用户在配置模型名称（Issue #1697）和查询流式模式支持（Issue #1691）时感到困惑，文档或错误提示可能需要改进。

## 8. 待处理积压
- **架构重构**：PR [#1557](https://github.com/nearai/ironclaw/pull/1557) (Unified Engine) 和 PR [#1626](https://github.com/nearai/ironclaw/pull/1626) (DB-backed User Management) 规模巨大（XL），且已开放数日，需持续关注其测试进度与合并风险。
- **Web 交互优化**：PR [#632](https://github.com/nearai/ironclaw/pull/632) (Web thread management) 同样为长期未合并的大型 PR，涉及消息的跨线程操作，对 Web 用户体验至关重要。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-28)

**分析师：** AI 智能体与个人 AI 助手领域开源项目分析师
**数据来源：** netease-youdao/LobsterAI (GitHub)

---

### 1. 今日速览
LobsterAI 项目今日处于**极高活跃度**状态，共处理了 76 条更新（26 Issues + 50 PRs），显示出社区强劲的参与度和核心团队快速的响应能力。虽然今天没有发布新的版本，但代码库正在经历密集的迭代，重点集中在 **UI 交互体验重构**、**跨平台兼容性修复** 以及 **Agent 配置与国际化** 的完善上。虽然 **Web Search 服务**和 **IM（微信/钉钉）** 相关的 Bug 报告较为集中，但核心的 "OpenClaw" 网关和 "Cowork" 模式在性能与功能上均有显著推进。

---

### 2. 版本发布
* **当前状态：** 无新版本发布。
* **观察：** 上一个版本推测为 `2026.3.26` 或 `2026.3.24`。鉴于目前活跃的开发分支和大量的修复，预计下一个版本将包含重要的性能优化和 UI 改进。

---

### 3. 项目进展 (已合并/关闭的 PR)
今日合并的 PR 显示出项目在 **性能优化** 和 **架构重构** 上的实质性进展：

*   **[核心性能] 流式输出与性能优化 (PR #888):**
    *   **内容：** 修复了 Intel Mac 上主进程阻塞的问题。针对 SQLite 写入和 IPC 通信增加了节流机制，精简了热路径的 debug 日志。
    *   **影响：** 显著提升了低端 Mac 设备上的响应速度，解决了界面卡顿问题。
    *   **链接:** [netease-youdao/LobsterAI#888](https://github.com/netease-youdao/LobsterAI/pull/888)

*   **[交互重构] 消息导航与对话索引 (PR #832, #988, #987):**
    *   **内容：** 引入了“对话索引浮层”以支持快速跳转，并将消息导航重构为更现代的“迷你轨道”样式。
    *   **影响：** 优化了长对话场景下的用户浏览体验，提升了信息检索效率。
    *   **链接:** [netease-youdao/LobsterAI#832](https://github.com/netease-youdao/LobsterAI/pull/832)

*   **[架构调整] IM 插件化迁移 (PR #984):**
    *   **内容：** 将“小蜜蜂” 网关从独立类迁移为通过 OpenClaw 运行时运行的插件，移除了约 994 行旧代码。
    *   **影响：** 统一了 IM 平台的处理架构，降低了维护成本，提高了代码一致性。
    *   **链接:** [netease-youdao/LobsterAI#984](https://github.com/netease-youdao/LobsterAI/pull/984)

---

### 4. 社区热点 (活跃讨论)
今日 Issues 反映了用户对 **平台特定体验** 和 **基础功能稳定性** 的强烈关注：

*   **🔥 macOS 用户体验回归:**
    *   **Issue #973 & #983:** 用户指出新版本中 macOS 快捷键显示为 `Ctrl` 而非标准的 `Cmd` 键，且无法通过按键修改快捷键。这违反了 Mac 用户的基本操作习惯。
    *   **状态：** 已有对应的修复 PR ([#985](https://github.com/netease-youdao/LobsterAI/pull/985), [#980](https://github.com/netease-youdao/LobsterAI/pull/980)) 提出并待合并。
    *   **链接:** [netease-youdao/LobsterAI#973](https://github.com/netease-youdao/LobsterAI/issues/973)

*   **🔥 核心任务管理逻辑缺陷:**
    *   **Issue #953:** 2026.3.26 版本中出现严重 Bug，点击“停止任务”后任务仍在后台运行，导致 API 频繁调用失败，且出现任务“窜台”现象。
    *   **链接:** [netease-youdao/LobsterAI#953](https://github.com/netease-youdao/LobsterAI/issues/953)

*   **🔥 系统服务启动失败:**
    *   **Issue #961:** MCP Daemon 服务未启动导致整个工具链断开；**Issue #981:** Web Search 服务启动失败。
    *   **分析：** 这些涉及后台服务进程的稳定性，直接影响了 AI 的工具使用能力。

---

### 5. Bug 与稳定性
以下 Bug 被标记为 CLOSED 但反映了历史问题，或为 OPEN 状态的高优先级问题：

*   **[严重] Gateway 无限崩溃重启 (Issue #859 - OPEN):**
    *   当模型配置数据丢失时，应用陷入无限崩溃重启循环，无法自动停止，需手动干预。
    *   **风险：** 可能导致系统资源耗尽。
*   **[中等] 微信/IM 交互体验差 (Issue #986, #885):**
    *   微信回复非流式，需等待全部生成后一次性发送，体验糟糕；微信链接功能不可用。
*   **[中等] 安全漏洞 (Issue #977 - OPEN):**
    *   `handleDeepLink` 函数缺少严格的安全检查，存在被恶意应用攻击的风险。
*   **[UI] Agent 创建与弹窗异常:**
    *   Issue #971: 内容输出错乱；Issue #967: 拖拽选中文本导致弹窗意外关闭。

---

### 6. 功能请求与路线图信号
通过用户提出的需求和开放的 PR，可以窥见未来的开发重点：

*   **多 Agent 隔离架构 (Issue #964):**
    *   **诉求：** 支持在单一实例中运行多个独立的 Agent，每个拥有独立的人设、知识库和 IM 账号。
    *   **信号：** 这是一个从“单点助手”向“企业级多员工平台”演进的关键信号。
*   **文件夹/会话管理 (PR #978):**
    *   **进展：** 已经有实现代码提交，支持将会话归类到自定义文件夹。
    *   **信号：** 针对重度用户的会话整理功能即将上线。
*   **高级代码编辑器功能 (PR #610, #557):**
    *   **进展：** 正在重构输入框内核，支持类似 Cursor 的 `@` 引用附件、结构化输入等。
    *   **信号：** LobsterAI 正在大幅提升其作为“编程助手”的能力。
*   **国际化适配 (Issue #982):**
    *   **诉求：** 预设 Agents 名称和描述未跟随语言切换。
    *   **信号：** 项目正在准备更广泛的国际化支持。

---

### 7. 用户反馈摘要
*   **痛点：** "模型切换触发 Gateway 重启太慢" (Issue #844) —— 用户渴望无缝切换模型的能力，目前的重启机制打断了心流。
*   **痛点：** "私有模型 Skill 调用报错" (Issue #955) —— 企业私有化部署场景下，兼容性仍需打磨。
*   **建议：** "增加模型调用优先级和自适应切换" (Issue #943) —— 用户希望系统更智能，当默认模型失败时能自动降级到备用模型，而不是直接报错。

---

### 8. 待处理积压
*   **Issue #859 (无限崩溃):** 极需修复的稳定性炸弹。
*   **Issue #977 (安全漏洞):** 需要安全团队介入审查。
*   **PR #162 (自定义模型配置):** 开放已久，涉及多 Custom 提供商配置，尚未合并，可能存在复杂度阻碍。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目日报 - 2026-03-28

**数据概览：** 今日代码仓库进入调整期，无新 Issues 提交，PR 处理效率高（2个合并/关闭），主要集中在 UI 重构与任务管理系统的底层升级。

---

### 1. 今日速览
TinyClaw 项目今日在 GitHub 上呈现“低噪点、高融合”的状态。虽然过去 24 小时内 **0 个新 Issues** 被提出，且 **0 个新版本** 发布，但代码合并活动依然活跃，共有 **2 个重要 PR** 完成关闭与合并。项目正处于内部功能迭代的关键阶段，重点在于优化用户交互体验（Office 布局调整）和增强数据持久化能力（任务管理系统）。整体活跃度平稳，维护者正在集中精力打磨现有功能而非拓展新边界。

---

### 2. 版本发布
*今日无新版本发布。*

---

### 3. 项目进展
今日合并的 PR 显著提升了产品的交互逻辑和数据管理能力，标志着项目向“类 Linear 生产力工具”风格的迈进：

*   **[PR #252] 引入 Linear 风格的任务与项目管理系统**
    *   **状态**: [CLOSED] (已合并)
    *   **作者**: jlia0
    *   **核心内容**: 实现了统一的工作区体验，新增 SQLite 持久化层支持，并引入了类似 Linear 的评论线程和自动生成的任务 ID（如 SYS-1）。UI 方面使用了 `shadcn` Sidebar 组件进行了美化。
    *   **推进意义**: 这是一个重大的功能性增强。引入 SQLite 意味着任务数据实现了本地持久化，解决了此前可能存在的数据丢失问题；类 Linear 的 ID 系统则为未来的自动化工作流和跨系统引用打下了基础。
    *   **链接**: [TinyAGI/tinyagi#252](https://github.com/TinyAGI/tinyclaw/pull/252)

*   **[PR #249] 重构 Office 布局与导航逻辑**
    *   **状态**: [CLOSED] (已合并)
    *   **作者**: jlia0
    *   **核心内容**: 将 Office 模式的侧边栏导航迁移至顶部导航栏。重组了路由结构，将相关页面归入 Office 布局组。此外，优化了侧边栏隐藏逻辑，并实现了点击 Agent 角色打开详情面板的功能。
    *   **推进意义**: 此次重构大幅提升了界面的空间利用率和导航直观性，使得 Agent 交互更加便捷。路由的规范化也降低了未来维护新功能的复杂度。
    *   **链接**: [TinyAGI/tinyagi#249](https://github.com/TinyAGI/tinyclaw/pull/249)

---

### 4. 社区热点
*今日无活跃的社区讨论。*
由于过去 24 小时内没有新产生的 Issues，且合并的 PR #249 和 #252 在数据中显示评论数为 undefined（或主要为技术性确认），目前社区处于静默期。这说明项目目前主要由核心维护者驱动，暂无外部大规模的贡献或争议讨论。

---

### 5. Bug 与稳定性
*今日无新增 Bug 报告。*
目前项目处于健康状态，合并的 PR 主要是新功能开发和重构，未涉及针对崩溃或严重错误的修复。

---

### 6. 功能请求与路线图信号
基于今日合并的 PR，我们可以推断出项目当前的**隐性路线图**：
*   **生产力工具化**: PR #252 的合并强烈暗示项目正在向专业的 AI 任务管理工具转型。用户未来可以期待更完善的任务分配、追踪和评论功能。
*   **Agent 交互深度**: PR #249 中提到的“Make agent characters clickable to open detail panel”表明，Agent 不仅仅是一个简单的聊天窗口，而是具有详细属性和配置的实体，未来可能会围绕 Agent 详情面板展开更多功能（如记忆编辑、知识库挂载等）。

---

### 7. 用户反馈摘要
*今日无可提取的用户反馈。*
Issues 列表为空，表明目前用户对现有版本未表现出明显的不满或使用障碍，或者用户社区尚处于早期阶段，反馈渠道尚未完全激活。

---

### 8. 待处理积压
*当前无积压。*
所有待处理的 PR 数量为 0，项目维护者响应迅速，能够即时合并代码，不存在代码审查瓶颈。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是基于您提供的数据生成的 **Moltis 项目 2026-03-28 日报**。

---

# Moltis 项目日报 | 2026-03-28

## 1. 今日速览
Moltis 项目在过去 24 小时内表现出**极高**的活跃度与迭代速度。项目连续发布了两个新版本（`20260327.01` 和 `20260327.03`），表明维护者正在进行密集的 Bug 修复和功能推送。在代码协作方面，共处理了 6 个 Issues 和 PRs，核心开发者 `penso` 主导了多项关键功能的开发，特别是针对 GraphQL 架构的深层修复与 Anthropic/OpenRouter 的提示词缓存优化。目前项目处于快速演进期，有两个关于文档提取和提供商优化的 PR 正在等待合并。

---

## 2. 版本发布
项目今日发布了 **2 个** 新版本，推测主要为修复关键安装问题和快速跟进功能迭代。

*   **[v20260327.03](https://github.com/moltis-org/moltis/releases/tag/20260327.03)**
    *   **状态**：最新发布
    *   **推断内容**：基于关闭的 Issue #493，此版本极有可能修复了 Linux 安装脚本中查找 `.deb` 文件名错误的问题。
*   **[v20260327.01](https://github.com/moltis-org/moltis/releases/tag/20260327.01)**
    *   **状态**：前置版本
    *   **推断内容**：可能是今日功能更新的基础版本，包含了关于 GraphQL 或工作流的基础变更。

---

## 3. 项目进展
今日有 **2 个** 重要 PR 被关闭/合并，显著提升了项目的架构一致性和功能扩展性。

*   **[PR #210: feat(graphql): add sessions.active query and fix chat service binding](https://github.com/moltis-org/moltis/pull/210)** - *已合并/关闭*
    *   **进展**：这是一个长期存在的 PR（创建于 2 月），现已合并。
    *   **意义**：修复了 GraphQL 聊天服务绑定的架构问题，统一使用 `state.chat()`，确保聊天会话状态的一致性，并新增了 `sessions.active` 查询，增强了监控能力。
*   **[PR #421: feat(symphony): add workflow daemon foundation](https://github.com/moltis-org/moltis/pull/421)** - *已合并/关闭*
    *   **进展**：引入了新的 `moltis-symphony` crate。
    *   **意义**：为工作流守护进程奠定了基础，增加了 CLI 支持（`moltis symphony validate/run`），标志着项目向自动化工作流程管理迈出了关键一步。

---

## 4. 社区热点
今日讨论焦点集中在架构重构与新功能的整合上，开发者 `penso` 是核心贡献者。

*   **[Issue #494: fix(graphql): use late-bound live chat service instead of static services bundle](https://github.com/moltis-org/moltis/issues/494)** (OPEN)
    *   **热度**：新提交的架构修复请求。
    *   **分析**：指出了即便在 PR #210 合并后，GraphQL 层仍可能绕过“延迟绑定”的实时聊天服务，导致潜在的架构 Bug。这显示团队正在对核心聊天逻辑进行严谨的压力测试和修复。

---

## 5. Bug 与稳定性
今日修复了一个影响部署的稳定性问题，但发现了一个新的架构隐患。

*   **[严重] [CLOSED] Issue #493: Install script looking for incorrectly named .deb](https://github.com/moltis-org/moltis/issues/493)**
    *   **描述**：安装脚本无法正确找到命名错误的 `.deb` 包，导致 Linux 用户无法安装。
    *   **状态**：🟢 **已修复**。该 Issue 已随今日发布的版本关闭（推测包含在 v20260327.03 中）。
*   **[中等] [OPEN] Issue #494: GraphQL bypass late-bound live chat service](https://github.com/moltis-org/moltis/issues/494)**
    *   **描述**：GraphQL 可能仍以静态方式调用服务，忽略了 `chat_override` 设置。
    *   **状态**：🔴 **待修复**。目前仅有 Issue 提出尚未有对应的修复 PR，需关注后续动态。

---

## 6. 功能请求与路线图信号
两项重要的功能增强正在审查中，显示了项目对性能和平台兼容性的重视。

*   **[PR #495: feat(providers): add prompt caching for Anthropic and OpenRouter](https://github.com/moltis-org/moltis/pull/495)** (OPEN)
    *   **信号**：**高性能优化**。
    *   **详情**：为 Anthropic 和 OpenRouter 添加提示词缓存支持，引入 `cache_control` 断点和 `cache_retention` 配置。这将显著降低长对话的 Token 消耗和延迟。
*   **[PR #276: feat(telegram): extract plaintext and markdown documents from messages](https://github.com/moltis-org/moltis/pull/276)** (OPEN)
    *   **信号**：**Telegram 平台增强**。
    *   **详情**：解决了 Moltis 在 Telegram 上无法读取附件（.txt, .md）的痛点，通过内联文档内容到提示词中实现修复。

---

## 7. 用户反馈摘要
*   **痛点**：来自 Issue #493 的反馈显示，安装脚本的错误直接阻断了用户的使用流程，这说明自动化构建/打包流程需要更严格的 CI 检查。
*   **场景**：PR #276 的评论（摘要中提及）揭示了用户在 Telegram 场景下有大量“文档阅读”需求，目前的纯文本模式限制了 AI 处理文件的能力。

---

## 8. 待处理积压
提醒关注以下长期未合并但仍在活跃的 PR，避免代码腐烂：

*   **[PR #276](https://github.com/moltis-org/moltis/pull/276)**：虽然创建于 3 月初，但今日刚刚更新。虽然作者自嘲实现“次优”，但该功能对 Telegram 用户体验至关重要，建议尽快审查合并。
*   **持续关注**：Issue #494 提出的 GraphQL 问题可能会影响正在开发的新功能（如 Symphony），建议在开发工作流特性前优先解决服务绑定的架构问题。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-28)

**分析师**: AI 智能体与个人助手领域专家
**报告日期**: 2026-03-28
**数据来源**: github.com/agentscope-ai/CoPaw

---

### 1. 今日速览
CoPaw 项目今日处于**极高活跃度**状态，过去 24 小时内共产生了 92 条（50 Issues + 42 PRs）更新记录，显示出社区强大的贡献热情和版本迭代初期的阵痛期特征。
*   **开发重心**: 代码层面正在进行大规模的架构重构，特别是针对**频道通信机制**（异步优先级队列）和**本地模型支持**的深度优化。
*   **用户反馈**: 随着 v0.2.0 等新版本的发布，用户报告了多个回归问题，主要集中在**配置覆盖**、**编码兼容性**（Windows 中文乱码）以及**UI 交互逻辑**上。
*   **社区健康**: 尽管问题较多，但核心开发者响应迅速，已合并了 22 个 PR，重点修复了文件编码、命令中断 (`/stop`) 和企业微信 (WeCom) 文件上传等关键功能。

---

### 2. 版本发布
*   **状态**: 无新版本发布。

---

### 3. 项目进展 (Project Progress)
今日共有 **22 个 PR 成功合并/关闭**，项目在底层架构和平台兼容性上取得了显著进展：

*   **核心架构升级**:
    *   **[PR #2411]** (CLOSED) - **统一优先级队列与 `/stop` 控制命令**: 引入了统一优先级队列系统，替代了原有的固定 Worker 池模型，实现了按需消费者创建，极大增强了系统的并发处理能力。
    *   **[PR #2067]** (CLOSED) - **全渠道 `/stop` 软中断**: 实现了跨所有频道（Feishu, DingTalk, QQ 等）的通用 `/stop` 命令，允许用户优雅地中断正在运行的智能体任务。
    *   **[PR #2426]** (OPEN) - **频道管理模块重构**: 正在进行针对频道类的“按需懒加载”重构，旨在优化启动性能和稳定性。

*   **平台兼容性修复**:
    *   **[PR #2403]** (CLOSED) - **跨平台文件编码修复**: 针对 Windows 环境下的读写操作增加了多编码回退机制（UTF-8-BOM -> GBK 等），彻底解决了 CSV 文件中文乱码问题。
    *   **[PR #2401]** (CLOSED) - **WeCom 媒体上传**: 为企业微信频道实现了基于 WebSocket 长连接的原生三步上传协议，修复了无法发送图片的缺陷。

*   **新功能集成**:
    *   **[PR #2419]** (OPEN) - **CoPaw Local Model**: 添加了对 CoPaw 本地模型的完整支持并重构了相关模块。
    *   **[PR #2428]** (OPEN) - **OpenCode Provider**: 集成了 OpenCode 服务端支持。

---

### 4. 社区热点 (Community Highlights)
今日讨论热度最高，反映了用户最关切的问题：

*   **[#2291 Help Wanted: Open Tasks](https://github.com/agentscope-ai/CoPaw/issues/2291)** (24 评论)
    *   **摘要**: 官方发布的任务认领清单，从 P0 到 P2 排列。
    *   **分析**: 社区参与度极高，大量开发者在此认领任务并艾特维护者，显示了开源社区强大的自驱力。

*   **[#2382 每次更新后 venv 会重置？](https://github.com/agentscope-ai/CoPaw/issues/2382)** (9 评论)
    *   **摘要**: 用户反馈更新后技能 依赖失效。
    *   **分析**: 涉及核心依赖管理机制，是用户痛点最高的稳定性问题之一。

*   **[#2293 被QA agent弄翻了-进不了UI界面](https://github.com/agentscope-ai/CoPaw/issues/2293)** (8 评论)
    *   **摘要**: QA Agent 的操作导致前端 JS 报错，用户无法进入 UI。
    *   **分析**: 反映了 Agent 自主操作对系统稳定性的潜在风险，以及前端容错机制的不足。

*   **[#2236 升级之后原本对 agents.md 做的调整被覆盖了](https://github.com/agentscope-ai/CoPaw/issues/2236)** (4 评论)
    *   **摘要**: 用户自定义的 Agent 配置在升级后被默认配置覆盖。
    *   **分析**: **关键的配置管理问题**，用户担心自定义数据丢失，需改进升级策略。

---

### 5. Bug 与稳定性 (Bugs & Stability)
今日报告的严重 Bug 集中在配置持久化和 UI 逻辑：

*   **[High] [#2431 语言设置不持久化](https://github.com/agentscope-ai/CoPaw/issues/2431)**
    *   **现象**: 重启后语言自动恢复为 English，用户设置未保存。
    *   **状态**: **已有修复 PR ([#2408](https://github.com/agentscope-ai/CoPaw/pull/2408)) 正在进行中**，计划将其持久化到服务器端 `settings.json`。

*   **[High] [#2425 更新后模型选择框消失](https://github.com/agentscope-ai/CoPaw/issues/2425)**
    *   **现象**: v0.x.0 版本后模型选择 UI 组件丢失，仅剩提供商列表。
    *   **状态**: 待修复，属于 UI 回归问题。

*   **[Medium] [#2385 CLI port management design flaw](https://github.com/agentscope-ai/CoPaw/issues/2385)**
    *   **现象**: 桌面端使用随机端口且在服务启动前写入配置，导致多智能体协作失败。
    *   **状态**: 已确认为 High 严重性设计缺陷。

*   **[Medium] [#2421 Feishu channel duplicate replies](https://github.com/agentscope-ai/CoPaw/issues/2421)**
    *   **现象**: 飞书频道对单条消息发送重复回复。
    *   **分析**: 接收路径有去重，但发送路径缺少回复去重逻辑。

---

### 6. 功能请求与路线图信号
用户提出的新需求指明了潜在的迭代方向：

*   **系统托盘支持** **[#2430](https://github.com/agentscope-ai/CoPaw/issues/2430)**: 用户强烈希望在 Windows 下实现最小化到托盘而非直接退出，以保持会话状态。
*   **并发会话能力** **[#2416](https://github.com/agentscope-ai/CoPaw/issues/2416)**: 允许在一个 Run 进行时发送后续消息，或支持多个活跃会话流，解决长任务阻塞问题。
*   **Skills Hub** **[#2418](https://github.com/agentscope-ai/CoPaw/issues/2418)**: 请求添加可视化的技能市场页面，方便一键安装主流 Skills。
*   **UI/UX 改进**:
    *   **[#2432](https://github.com/agentscope-ai/CoPaw/pull/2432)** (Open PR): 在聊天记录中显示发送者身份和具体时间戳。
    *   **[#2357](https://github.com/agentscope-ai/CoPaw/issues/2357)**: 请求添加会话重命名按钮。

---

### 7. 用户反馈摘要
*   **痛点 - 升级体验差**: 多位用户反映升级 CoPaw 后，自定义配置（`agents.md`）被覆盖，或者 Python 环境 (`venv`) 依赖被重置，导致需要重复配置。**建议**: 引入配置迁移向导或保护用户修改过的文件。
*   **痛点 - 跨平台兼容性**: Windows 下的中文乱码问题（CSV 写入）虽然已修复，但依然有用户在旧版本中受困扰；文件编码处理是长期需求。
*   **正面反馈 - 架构改进**: 开发社区对引入统一优先级队列 ([#2411]) 和 OpenRouter 集成 ([#1192]) 表现出极大的兴趣和认可。

---

### 8. 待处理积压
以下 Issue 长期开放且影响较广，建议维护者优先关注：

*   **[#2273 ModelScope 创空间鉴权登录失败](https://github.com/agentscope-ai/CoPaw/issues/2273)**: 开启 Web 鉴权后无法登录，且前端无报错，影响部署安全性。
*   **[#2119 Skill 列表不实时刷新](https://github.com/agentscope-ai/CoPaw/issues/2119)**: 上传 Skill 后必须重启 App 才能看到，用户体验割裂。
*   **[#2303 MiniMax Provider 404 Error](https://github.com/agentscope-ai/CoPaw/issues/2303)**: 连通性检查调用了不支持的 `/models` 端点，尽管模型可用，但检测失败困扰用户。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-28)

> **今日评价**：项目处于活跃开发状态，核心功能在“浏览器自动化”与“长上下文稳定性”两大关键技术维度取得实质性突破。虽无新版本发布，但提交的两项 PR 针对现有痛点提出了深层解决方案，显示项目正致力于提升 Agent 在复杂环境下的落地能力。

---

### 1. 今日速览
ZeptoClaw 项目在过去 24 小时内保持高强度的技术迭代节奏。虽然暂时没有新的版本发布，社区提交了 **2 个高价值的 Pull Requests**，分别聚焦于**浏览器自动化能力的集成**与**Token 上下文管理机制的重构**。这表明项目当前的重点已从单一功能扩展转向提升系统在复杂场景（如长对话、Web 交互）下的鲁棒性。活跃度方面，尽管无新 Issues 提出及旧 PR 合并，但两项新 PR 的提交证明了维护团队对用户反馈的快速响应。

### 2. 版本发布
* **无新版本发布**

### 3. 项目进展
今日虽无 PR 直接合并，但以下两项待合并的 PR 代表了项目在技术架构上的重要演进：

*   **[PR #459] 引入全栈浏览器自动化工具**
    *   **进展**：开发者 `stuartbowness` 提交了基于 `agent-browser` CLI 的集成方案。
    *   **功能说明**：该功能为 ZeptoClaw 赋予了完整的浏览器操作能力，支持 Lightpanda 及 Chrome 降级方案，并内置了 SSRF（服务端请求伪造）防护机制。这标志着 ZeptoClaw 将具备真实的 Web 交互能力。
    *   **链接**：[qhkm/zeptoclaw#459](https://github.com/qhkm/zeptoclaw/pull/459)

*   **[PR #460] 上下文压缩机制重构**
    *   **进展**：针对长对话导致的 Token 溢出崩溃问题，提出了“多层防御”策略。
    *   **技术突破**：彻底替换了原有的单次词统计算法，采用多层级的深度防御策略，旨在彻底解决用户在进行长任务时遇到的不可恢复错误。
    *   **链接**：[qhkm/zeptoclaw#460](https://github.com/qhkm/zeptoclaw/pull/460)

### 4. 社区热点
今日最热门的讨论集中在**大模型上下文窗口限制**的应对方案上。

*   **热点 PR**：**#460 feat(agent): multi-layered context compaction**
    *   **链接**：[qhkm/zeptoclaw#460](https://github.com/qhkm/zeptoclaw/pull/460)
    *   **核心诉求**：社区（或核心用户）反馈在长对话场景下，Agent 频繁遭遇 Token 溢出导致服务不可用。该 PR 的提交显示开发团队已将其列为优先级最高的修复项，试图通过算法重构从根本上解决这一限制 Agent 使用的痛点。

### 5. Bug 与稳定性
今日无直接提交的新 Bug Issues，但 **PR #460** 修复了一个严重的**稳定性隐患**：

*   **严重级别：高**
*   **问题描述**：长对话过程中发生的不可恢复 Token 溢出错误。
*   **Fix 状态**：修复方案已提交在 PR #460 中，待审核合并。该修复不依赖补丁，而是对上下文压缩系统进行了完全重写，预示着稳定性的显著提升。

### 6. 功能请求与路线图信号
从今日的 PR 提交中，我们可以解读出项目的短期路线图信号：

1.  **真实世界交互能力**：PR #459 证实了项目正致力于打通 AI Agent 与真实互联网浏览器的交互壁垒，这是未来实现复杂自动化任务（如订票、爬虫、自动化测试）的关键基础设施。
2.  **长链路支持**：PR #460 表明项目致力于支持更长的任务链路，不再受限于模型的上下文窗口，这对于需要多步推理的 Agent 任务至关重要。

### 7. 用户反馈摘要
由于今日无新增 Issues 评论，主要反馈源自 **PR #410**（关联 PR #459）的审查历史：
*   **痛点**：用户希望有更稳定的浏览器工具支持，且对单一的依赖项不满意。
*   **响应**：开发团队采纳了反馈，将相关功能拆分为独立的 PR #459，并引入了多引擎支持，体现了对用户体验的重视。

### 8. 待处理积压
*   **待合并项**：建议优先关注 **PR #459** 和 **#460** 的审核进度。这两项功能（浏览器能力与长上下文稳定性）是限制当前 AI 智能体落地的核心瓶颈，尽快合并将显著提升项目的市场竞争力。
*   **社区互动**：今日无新 Issues 开启，建议维护者在发布包含上述两功能的版本后，主动发起社区测试以验证修复效果。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*