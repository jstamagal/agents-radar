# OpenClaw 生态日报 2026-04-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-16 00:18 UTC

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

# OpenClaw 项目日报 (2026-04-16)

## 1. 今日速览
OpenClaw 项目今日处于**极高活跃度**状态，过去 24 小时内产生了 1000 条 Issues 和 PRs 的更新（500/500），反映了社区庞大的参与度与当前版本的动荡。虽然发布了新的 Beta 版本 (`v2026.4.15-beta.1`) 带来了 UI 改进，但项目正面临严重的**稳定性危机**。近期版本（特别是 v2026.4.14）引入了大量的回归 Bug，导致安装向导崩溃、聊天 UI 闪烁及多个提供商（OpenAI Codex, Bedrock）连接失败。目前有大量关键 Bug 正在被集中修复，社区情绪在兴奋与焦虑之间摇摆。

## 2. 版本发布
**发布版本：** `v2026.4.15-beta.1` ([链接](https://github.com/openclaw/openclaw/releases/tag/v2026.4.15-beta.1))
*   **新增功能：**
    *   **控制台 UI 增强 (Control UI/Overview)：** 新增“模型认证状态”卡片。
    *   **功能详情：** 直观展示 OAuth 令牌的健康状态和提供商的速率限制压力。当令牌即将过期或已过期时，系统会发出视觉警告。
    *   **底层支持：** 引入新的 `models.authStatus` 网关方法，该方法会剥离敏感凭证信息并缓存 60 秒以优化性能。

## 3. 项目进展
今日 PR 合并活动主要集中在**止损**和**平台兼容性**修复上，并未推进大的新功能：
*   **Windows 兼容性修复：** 合并了针对 Windows 安装程序和 `pnpm.exe` 运行器的修复 (#67395, #66898)，解决了 Windows 环境下的安装和构建回退问题。
*   **核心逻辑修正：**
    *   修复了 Cron 通告中 `NO_REPLY` 逻辑判断错误的问题 (#65016)，防止代理在静默回复时错误地向频道发送摘要。
    *   修复了 WhatsApp 媒体发送绕过旧依赖路径的问题 (#66378)，改善了媒体传输的可靠性。
    *   增强了 Feishu 渠道的 TTS 音频支持，现在可发送语音消息而非文件附件 (#59619)。
*   **文档国际化：** 推进了 CLI 核心命令的中文文档翻译 (#64605)，降低了中文用户的使用门槛。

## 4. 社区热点
今日讨论焦点集中在 v2026.4.14 版本引发的**大规模回归故障**上，多个相关 Issue 评论数激增：
*   **安装/配置崩溃潮：**
    *   #66718: [`openclaw configure` 崩溃](https://github.com/openclaw/openclaw/issues/66718) (评论 13, 👍 7)
    *   #67291: [Onboarding 崩溃](https://github.com/openclaw/openclaw/issues/67291) (评论 10, 👍 2)
    *   #67074: [新装 4.14 版本报错](https://github.com/openclaw/openclaw/issues/67074) (评论 8)
    *   **分析：** 大量用户反馈在 "Select channel" 步骤遭遇 `TypeError: Cannot read properties of undefined (reading 'trim')`，严重阻断了新用户入门，且影响旧版升级。
*   **UI 体验严重倒退：**
    *   #67035: [Windows 聊天 UI 回归](https://github.com/openclaw/openclaw/issues/67035) (评论 11) - 输入文本被吞、流式回复不可见、打字指示器闪烁。
    *   #66207: [Control UI 消息闪烁](https://github.com/openclaw/openclaw/issues/66207) (评论 12, 👍 2) - 发送后消息消失后重现。
*   **API 连接性危机：**
    *   #66633: [OpenAI Codex 遭遇 Cloudflare 403](https://github.com/openclaw/openclaw/issues/66633) (评论 9, 👍 5) - 升级后无法使用。

## 5. Bug 与稳定性
**高危级 (P0 - 阻断性/崩溃)：**
*   **[持续崩溃]** v2026.4.14 导致 CLI `configure`/`onboard` 命令在处理 Channels 时必定崩溃 (#66718, #67130, #67074)。
*   **[内存泄漏]** #45064: 2026.3.12 版本的内存溢出 (OOM) 问题虽已关闭，但仍有用户报告基础命令导致 CLI 崩溃。
*   **[API 故障]** #66674: OpenAI Codex/GPT-5.4 在 CLI 推理时返回 HTML 错误，被错误地识别为 "DNS lookup failed"。

**中高级 (P1 - 严重影响体验)：**
*   **[Windows UI 回归]** #67035: 聊天输入和流式渲染完全损坏。
*   **[认证失效]** #34830: OpenRouter 提示 "401 missing authentication header"，导致认证配置失效。
*   **[提供商降级]** #67288: Amazon Bedrock Mantle 插件在未使用时仍运行不必要的 IAM token 发现。

**状态更新：** 目前针对 "trim" 崩溃错误已有多条相关 PR 在处理 (#67025 等)，预计将包含在下个补丁版本中。

## 6. 功能请求与路线图信号
*   **代理身份验证 (RFC)：** #49971 [Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971) (评论 89) - 提出了基于 ERC-8004 和 W3C DID 的原生代理身份验证标准，这是构建去中心化代理经济的关键基础设施。
*   **代理经济协议 (RFC)：** #28106 [Agent-to-Agent Task Delegation](https://github.com/openclaw/openclaw/issues/28106) - 建议允许代理之间发现、协商和委派任务，开启多代理协作模式。
*   **搜索提供商替换：** #20562 [Add Serper.dev](https://github.com/openclaw/openclaw/issues/20562) (评论 10, 👍 6) - 鉴于 Brave Search 取消免费层，社区强烈建议集成 Google 结果源的 Serper.dev。
*   **MCP 协议扩展：** #66168 [Add MCP Apps protocol extension](https://github.com/openclaw/openclaw/pull/66168) (PR Open) - 正在推进通过网关支持 Model Context Protocol (MCP) 的工具、资源和 UI 元数据。

## 7. 用户反馈摘要
*   **负面反馈集中区：** 针对 v2026.4.14 的更新评价极其负面，关键词包括 "regression" (回归), "unusable" (不可用), "swallowed" (吞掉消息)。特别是 Windows 用户和依赖 OpenAI Codex 的用户感到非常沮丧。
*   **特定场景痛点：**
    *   **文本泄漏：** #25592 指出代理在工具调用之间的内部思考文本（如错误处理、旁白）会泄漏到消息频道（如 Slack/iMessage），造成严重的 UX 混乱。
    *   **异步系统消息污染：** #65994 反馈 `exec` 完成事件被当作系统消息渲染到聊天记录中，干扰了用户对话流。
*   **正面反馈：** 对中文文档的完善 (#64605) 表示赞赏；对新增的 TTS 语音消息功能 (#59619) 持欢迎态度。

## 8. 待处理积压
*   **长期未解决的 Bug：**
    *   #25592: [Tool calls leak to messaging](https://github.com/openclaw/openclaw/issues/25592) (Open, 评论 19) - 虽被标记为 `stale`，但问题依然存在。
    *   #34830: [401 missing auth header](https://github.com/openclaw/openclaw/issues/34830) (Open, 评论 19) - 涉及 OpenRouter 的认证问题。
    *   #42225: [GPT-5.4 Context Usage](https://github.com/openclaw/openclaw/issues/42225) - 上下文窗口配置未按预期修补。
*   **架构级挑战：**
    *   #29143: [Delivery Reliability Tracking](https://github.com/openclaw/openclaw/issues/29143) - 追踪消息在崩溃/中止时的静默丢失问题，这属于底层可靠性顽疾。
    *   #26734: [Bootstrap.md wipes identity](https://github.com/openclaw/openclaw/issues/26734) - 子代理启动时身份被重置的问题。

---

## 横向生态对比

# 个人 AI 智能体开源生态横向分析报告
**报告日期**：2026-04-16
**分析对象**：OpenClaw 及同类竞品项目

---

## 1. 生态全景

当前个人 AI 智能体开源生态正处于**剧烈分化与整合**的关键时期。
*   **头部效应显著**：以 OpenClaw 和 NanoBot 为代表的第一梯队项目拥有极高的社区活跃度（日均数百条讨论），但正面临“高速增长下的稳定性阵痛”，近期版本普遍出现严重的回归 Bug。
*   **技术路线收敛**：多模态支持、RAG（检索增强生成）深化、以及 MCP (Model Context Protocol) 协议的集成已成为所有项目的“标配”竞争点。
*   **垂直场景涌现**：除了通用型全能 Agent，生态中涌现出专注高性能、企业办公或本地极客部署的垂直替代品（如 LobsterAI, NullClaw），试图通过差异化体验避开头部项目的功能内卷。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布状态 | 健康度评估 | 备注 |
| :--- | :---: | :---: | :--- | :---: | :--- |
| **OpenClaw** | 50 (Hot) | 50 (Hot) | `v2026.4.15-beta.1` | ⚠️ **不稳定** | 活跃度极高，但 v2026.4.14 引入大规模回归，社区情绪焦虑。 |
| **NanoBot** | 17 | 46 | 无 (v0.1.5.post1) | 🟢 **迭代快** | 性能优化与多模态支持同步推进，Windows 兼容性修复积极。 |
| **PicoClaw** | - | 26 (Merged 20) | `v0.2.6-nightly` | 🟢 **高增长** | Agent 并行化与 MCP 深度集成，Web UI 增强迅速。 |
| **IronClaw** | 17 | 50 | 无 | ⚠️ **安全危机** | 发现 Engine V2 绕过密钥扫描的 P0 级漏洞；Web UI 体验欠佳。 |
| **Moltis** | 7 | 20 (Merged 15) | 无 | 🟢 **稳健** | 核心重构与 Bug 修复效率极高，技术债务清理成功。 |
| **CoPaw** | 50 | 50 | `v1.1.2-beta.1` | 🟡 **功能膨胀** | 路由策略与通道集成复杂，面临命名混淆与配置过高的挑战。 |
| **ZeroClaw** | 50 | 41 | 无 | 🟡 **治理瓶颈** | 架构重构与安全加固并行，受编译速度与文档问题困扰。 |
| **NanoClaw** | 5 | 17 | 无 | 🟢 **扩展期** | 多模型架构升级中，新增商业营销类技能，容器化增强。 |
| **LobsterAI** | - | 22 (Merged 22) | 无 | 🟢 **企业向** | 着重清理代码债，修复企业协作（钉钉/飞书）集成问题。 |
| **NullClaw** | 9 | 8 | 无 | 🟢 **底层演进** | Zig 0.16 迁移中，Shell 沙箱与安全机制显著增强。 |
| **EasyClaw** | 0 | 1 (Open) | `v1.7.11` | 🔵 **维护期** | 极低活跃度，主要为文档更新与 macOS 兼容性修复。 |
| **TinyClaw** | 0 | 0 | 无 | ⚫ **停滞** | 过去 24 小时无活动。 |

---

## 3. OpenClaw 在生态中的定位

*   **优势**：
    *   **生态规模**：社区贡献度（24h 500 PRs）远超同类，拥有最丰富的插件生态和频道适配（Slack, WhatsApp, Feishu 等）。
    *   **技术前瞻**：率先提出 Agent Identity (ERC-8004) 和 Agent-to-Agent 经济协议，引领多代理协作标准。
*   **技术路线差异**：
    *   OpenClaw 采取“**大而全**”的通用操作系统路线，试图接管所有 OS 交互。
    *   对比之下，PicoClaw 侧重“移动端与编排”，Moltis 侧重“Rust 性能与内存优化”，ZeroClaw 侧重“Rust 安全与微内核”。
*   **现状警示**：
    *   OpenClaw 目前是生态中**稳定性风险最高**的项目（v2026.4.14 安装向导崩溃），而竞争对手如 Moltis 和 NanoBot 正通过高频 Bug 修复缩小质量差距。

---

## 4. 共同关注的技术方向

1.  **MCP (Model Context Protocol) 集成**
    *   **涉及项目**：OpenClaw, PicoClaw, IronClaw
    *   **诉求**：不仅是作为客户端，更要求支持 MCP Apps 协议扩展（OpenClaw #66168）和 UI 元数据透传，意图成为工具编排的中间件标准。

2.  **多模型路由与混合部署**
    *   **涉及项目**：NanoBot, NanoClaw, CoPaw, LobsterAI
    *   **诉求**：社区强烈需求在同一 Agent 内部根据任务类型（代码、文本、图像）动态路由至不同模型（如本地 Llama 3 + 云端 GPT-4），以平衡成本与效果。

3.  **Agent 自省与可观测性**
    *   **涉及项目**：NanoBot, IronClaw, PicoClaw
    *   **诉求**：用户普遍抱怨 Agent 是“黑盒”。需求集中在：实时显示 Token 消耗、展示当前执行的 Skill/Tool（NanoBot #3166）、以及支持 OpenTelemetry 导出。

4.  **本地模型无缝接入**
    *   **涉及项目**：PicoClaw, NanoBot, NullClaw
    *   **诉求**：降低连接 LM Studio 或 Ollama 的配置门槛，解决本地模型在非视觉输入下的容错问题。

---

## 5. 差异化定位分析

| 维度 | OpenClaw / PicoClaw | ZeroClaw / NullClaw / Moltis | NanoBot / NanoClaw | CoPaw / LobsterAI |
| :--- | :--- | :--- | :--- | :--- |
| **核心架构** | **TypeScript/Node.js** 生态，侧重扩展性与 Web 集成 | **Rust/Zig** 生态，侧重极致性能、内存安全与单文件分发 | **Python** 生态，侧重 AI 算法集成与数据科学工具链 | 混合架构，侧重特定框架与垂直场景优化 |
| **功能侧重** | **全能型 Agent OS**：聊天、管理、执行、开发全覆盖 | **安全与运维**：沙箱隔离、权限守卫、极低资源占用 | **开发者工具**：代码执行、技能扩展、容器化部署 | **企业/垂直**：办公协同、语音交互、特定知识库问答 |
| **目标用户** | 个人极客、开源社区贡献者、全栈开发者 | 运维工程师、隐私敏感用户、嵌入式开发者 | 数据科学家、AI 研究员、Python 开发者 | 企业团队、中文用户、特定业务场景用户 |

---

## 6. 社区热度与成熟度

*   **第一梯队（爆发期，高活跃伴随高噪音）**：
    *   **OpenClaw**：核心维护者响应快，但因版本变动过快导致文档滞后与 Bug 丛生。
    *   **CoPaw**：社区参与度极高（Help Wanted Issue 活跃），但产品路线图存在混淆（QwenPaw vs CoPaw）。
*   **第二梯队（稳健期，技术债务清理中）**：
    *   **NanoBot, PicoClaw**：正在通过架构拆分和性能优化解决早期快速迭代遗留的稳定性问题。
    *   **Moltis**：展示了极高的工程效率，15/20 PR 一天内合并，是生态中工程实践的典范。
*   **第三梯队（分化期，寻找特定生态位）**：
    *   **ZeroClaw**：正在进行痛苦的架构重构（Microkernel RFC），试图解决代码质量和治理危机。
    *   **LobsterAI**：专注于国内企业协作市场，功能更接地气但国际化程度较低。

---

## 7. 值得关注的趋势信号

1.  **Agent 互操作性成为刚需**：
    *   OpenClaw 提出的“Agent-to-Agent 委派”和 NanoClaw 的“Delegate 工具”表明，单一 AI 助手正在向“多智能体协作网络”演进。未来的杀手级功能可能不再是单个 Agent 的智商，而是 Agent 之间如何通过标准协议握手和协作。

2.  **安全担忧从“外部攻击”转向“内部误操作”**：
    *   IronClaw 的 V2 引擎密钥泄露漏洞和 ZeroClaw 的 Shell 守卫逻辑显示，随着 Agent 能力增强（能执行 Shell、修改系统），**防止 Agent 自毁或泄露机密**已成为比防御外部黑客更紧迫的课题。

3.  **用户开始拒绝“黑盒”**：
    *   大量 Issues（如 NanoBot 的进度通知、CoPaw 的上下文显示）反映出用户对 Agent 内部思考过程的可见性要求越来越高。**可解释性** 将成为继功能性之后的下一个竞争壁垒。

4.  **从“玩具”转向“工具”的临界点**：
    *   OpenClaw 的配置崩溃潮和 ZeroClaw 的编译速度抱怨，标志着这些项目已经过了“尝鲜”阶段，用户开始将其用于生产环境。因此，**稳定性、回滚机制和灰度发布策略**的重要性首次超过了新功能开发。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-16)

**报告生成人**：开源项目分析师 AI
**数据源**：HKUDS/nanobot (GitHub)
**当前日期**：2026-04-16

---

## 1. 今日速览
NanoBot 项目今日处于**极高活跃度**状态。过去 24 小时内共产生了 63 个更新（17 个 Issues，46 个 PRs），显示出核心开发团队和社区都在强力推动项目迭代。今日的核心看点在于**性能优化的全面铺开**（由 @mohamed-elkholy95 主导的一系列拆分 PR）以及 **Microsoft Teams 渠道的重新整合**。同时，社区反馈了若干升级相关的严重 Bug，需维护者重点关注。

## 2. 版本发布
**当前状态：** 无新版本发布。
*注：虽然 Issue 中有用户提到从 v0.1.5 升级到 v0.1.5.post1 的情况，但 GitHub Releases 页面暂无新版本标签更新记录。*

## 3. 项目进展
今日有多项关键 PR 正在推进或已完成合并，显著提升了项目的性能与功能完整性：

*   **性能架构重构 (进行中)**：
    *   **PR #3184**: 引入了 Agent Loop 的性能分析基础设施，为优化执行速度提供数据支持。
    *   **PR #3182**: 实现了 Bootstrap 文件和 Tool Schema 的缓存，减少重复磁盘 I/O。
    *   **PR #3181**: 优化了 Memory 和 History 的写入性能，采用批处理机制减少文件操作开销。
    *   **PR #3183**: 优化了流式响应的首字延迟，并改进了 Responses API 的错误追踪。
    *   **PR #3187**: 修复了 API 文件上传时的文件名冲突问题。
    *   *分析：这一系列 PR (#3158 的拆分) 表明项目正致力于解决“响应速度”和“资源占用”的用户痛点。*

*   **通道与集成增强**：
    *   **PR #3191**: **[重点]** 正在将 Microsoft Teams 渠道重新整合进 `nightly` 分支，修复了此前的配置遗留问题，并引入了引语回退修复 (#2920)。
    *   **PR #3176**: 增强了飞书渠道功能，新增了“线程作用域会话隔离”（群组回复独立上下文）和非阻塞反应功能。
    *   **PR #3160**: 新增 MiniMax 的 Anthropic 端点支持，适配其“思考模式”。

*   **核心功能扩展**：
    *   **PR #2521 (及 #3177)**: 新增 **MyTool**，允许 Agent 在运行时进行自我检查（查看 Token 使用、模型配置等），增强了 Agent 的自省能力。
    *   **PR #3156**: Heartbeat 功能现在支持针对“评估阶段”和“执行阶段”设置不同的模型覆盖。

## 4. 社区热点
以下 Issues 和 PRs 在过去 24 小时内引发了最热烈的讨论或关注：

*   **[Feature Proposal] PR #3144: [codex] add AgentHiFive integration**
    *   *状态*：Open
    *   *热度*：正在集成 AgentHiFive 作为 MCP 后端，涉及审批流和 Vault 管理。
    *   *分析*：这表明 NanoBot 正在探索更深度的企业级安全与审批工作流集成。

*   **[Bug Discussion] Issue #623: Persistent "Tool Not Found" Errors for Custom Skills**
    *   *状态*：CLOSED (更新于 2026-04-15)
    *   *热度*：8 条评论
    *   *分析*：尽管已关闭，但关于自定义技能（如 Google Calendar）找不到工具的问题仍是用户痛点。这说明文档或技能加载机制仍需优化。

*   **[Performance Proposal] PR #3158: Agent performance, responsiveness & correctness enhancements**
    *   *状态*：CLOSED (已拆分为多个小 PR)
    *   *热度*：虽然主 PR 关闭，但它是今日大量性能优化 PR 的源头，社区对性能提升非常敏感。

## 5. Bug 与稳定性
今日报告的稳定性问题中，有一个**严重 Bug**需立即关注：

*   **[Critical] Issue #3190: v0.1.5 升级到 v0.1.5.post1 后无法启动 (崩溃)**
    *   *报告时间*：2026-04-16
    *   *表现*：堆栈报错涉及 Memory 模块不兼容。
    *   *影响*：阻止用户升级到最新补丁版本。
    *   *Fix Status*：暂无关联 PR，需核心开发者排查。

*   **[High] Issue #3143: LLM returned error: {'code': '1214', 'message': 'The messages parameter is illegal'}**
    *   *报告时间*：2026-04-14
    *   *表现*：Token 整合过程中出现参数非法错误。
    *   *分析*：可能与某些特定 Provider 的 Token 处理逻辑有关。

*   **[Medium] Issue #2957: [bug] huge bug dream overwriting MEMORY.md**
    *   *状态*：CLOSED
    *   *内容*：Dream 功能覆盖了 MEMORY.md 导致数据丢失。
    *   *Fix Status*：已修复，但提醒用户注意备份。

*   **[Medium] Issue #3166: Feishu channel doesn't show progress notifications**
    *   *表现*：配置 `send_progress: true` 后飞书无进度通知。
    *   *Fix Status*：已由 **PR #3176** 修复（待合并）。

## 6. 功能请求与路线图信号
从活跃的 Issues 和 PRs 中可以看出以下需求方向：

*   **模型支持扩展**：
    *   **Issue #3185**: 社区请求增加对 **LM Studio** 的原生支持。
    *   *响应*：**PR #3186** 已被提交，增加了 LM Studio 作为一级 Provider 及可空 API Key 支持。这极可能纳入下个版本。

*   **Cron/任务调度优化**：
    *   **Issue #3123**: 用户希望 Cron 任务发送的消息能被后续引用或修正。
    *   **Issue #3115**: 修复了 `deliver: false` 被忽略的问题。
    *   *信号*：调度系统的会话连贯性和静默执行逻辑正在被规范化。

*   **Provider 灵活性**：
    *   **Issue #3107**: 用户建议支持 LLM Provider Fallback（故障转移）和 Timeout 可配置。
    *   *信号*：提升生产环境稳定性的关键需求。

*   **WebSocket 支持**：
    *   **PR #3179**: 大幅增强 WebSocket 工具、会话生命周期和推理内容处理。
    *   *信号*：NanoBot 正在加强对实时交互场景的支持。

## 7. 用户反馈摘要
*   **正向反馈**：Issue #623 的用户表示 "I am enjoying nanobot! It's very exciting..."，肯定了项目的潜力。
*   **痛点**：
    *   **升级焦虑**：Issue #3190 和 #2957 (Memory 被清空) 反映出用户对数据丢失和升级失败的担忧。
    *   **黑盒状态**：Issue #3107 提到 "缓解 nanobot 当前状态黑盒"，用户希望更清楚地看到 Agent 正在做什么（这也是 PR #3184/PR #3166 进度通知的驱动力）。
    *   **错误提示不明**：Issue #3143 和 #3006 (欠费无警告) 反映错误处理和用户提示需要更友好。

## 8. 待处理积压
*   **Issue #1186** (Opened 2026-02-25): Memory consolidation 导致文件膨胀问题。虽然已关闭，但评论显示自动合并效果不佳，用户仍需手动清理。可能需要长期优化算法。
*   **Issue #2220** (Opened 2026-03-18): 关于使用 `ContextVar` 改进任务本地工具路由的提案。这是一个架构层面的改进建议，尚未看到具体实施 PR。
*   **PR #2600** (Closed): 原有的 Teams 集成 PR 已被关闭并重写为 #3191，需确保新 PR 顺利合并以免阻塞该通道的使用。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 - 2026-04-16

**日期**: 2026年4月16日  
**项目**: zeroclaw-labs/zeroclaw  
**分析师**: AI 开源项目智能体

---

### 1. 今日速览
ZeroClaw 项目今日处于**高度活跃**状态，社区提交了 50 个 Issues 和 41 个 Pull Requests，反映出项目正在经历密集的迭代与重构期。虽然今日无新版本发布，但代码提交主要集中在**架构重构 (RFC)**、**工具系统安全加固**以及**多通道集成**的稳定性修复上。值得注意的是，社区关于“代码质量”与“工程实践”的讨论（RFC #5574, #5577）与具体的 Bug 修复并行推进，表明项目正试图在快速演进中规范其微内核架构。Web Dashboard 的可用性问题（#4866）依然是用户痛点之首。

### 2. 版本发布
*今日暂无新版本发布。*

### 3. 项目进展
今日暂无 PR 合并，但待合并列表中包含多项关键功能推进，显示出项目在以下方向上的演进：

*   **安全与权限模型演进**:
    *   **[#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779)**: 引入了针对高危 Shell 命令的 `gated_commands` TOTP 二次验证机制（Phase 1），显著提升了自动化运维场景下的安全性。
    *   **[#5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773)**: 修复了通配符配置下的 Shell 守卫逻辑，允许在 `allowed_commands=["*"]` 时正确使用反引号和 `$()` 替换。
*   **架构重构与清理**:
    *   **[#4952-4954, #5772](https://github.com/zeroclaw-labs/zeroclaw/pull/5772)**: 一系列重构 PR 正在推进，将速率限制和路径守卫逻辑从工具内部剥离，统一委托给 `RateLimitedTool` 和 `PathGuardedTool` 包装器。这将大幅简化工具代码并提高一致性。
*   **能力集成**:
    *   **[#5162](https://github.com/zeroclaw-labs/zeroclaw/pull/5162)**: Mattermost 通道增加了 WebSocket 监听器，从低效的 REST 轮询升级为实时事件驱动，改善了企业协作场景的响应速度。

### 4. 社区热点
今日讨论焦点集中在项目治理与核心架构上：

*   **[#5574 RFC: Microkernel Transition](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)** (评论: 5 👍: 0)
    *   **核心内容**: 提出了从 v0.7.0 到 v1.0.0 的“微内核化”架构转型方案。
    *   **分析**: 这是项目历史上最重大的架构调整之一。文档指出当前代码库是“被动增长”的产物，需要转向“意图驱动”的架构。
*   **[#2691 代码质量与协作态度](https://github.com/zeroclaw-labs/zeroclaw/issues/2691)** (评论: 4 👍: 9)
    *   **核心内容**: 用户尖锐批评项目代码质量及维护者对社区协作的态度。
    *   **分析**: 尽管该 Issue 已关闭，但其获得 9 个 👍 及大量近期评论表明，社区对项目治理和透明度的担忧依然存在。用户提到了具体的 Issue 处理不当案例，这是维护团队需要正视的信任危机。
*   **[#5577 RFC: Project Governance](https://github.com/zeroclaw-labs/zeroclaw/issues/5577)** (评论: 3 👍: 0)
    *   **核心内容**: 配合架构转型，提出了团队组织和项目治理的 RFC，强调“软件项目的失败往往不是因为代码烂，而是因为写代码的人”。
    *   **分析**: 这表明核心团队意识到了管理层面的问题，并试图通过文档化流程来解决。

### 5. Bug 与稳定性
今日报告的 Bug 涉及多个严重程度，其中部分为阻塞性问题：

*   **[S1 - 阻塞性] Web Dashboard 缺失** - **[#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)** (评论: 12)
    *   **现象**: Tauri 桌面端和 Web UI 均无法启动，提示需手动构建前端。
    *   **状态**: 持续多版本未解决，严重影响用户体验。
*   **[S1 - 阻塞性] Copilot 与 Kimi 工具调用报错**
    *   **[#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851)**: 缺少配置 Copilot Provider 的文档/流程。
    *   **[#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)**: Kimi Code Provider 在流式对话调用工具时报 400 错误。
    *   **[#5475](https://github.com/zeroclaw-labs/zeroclaw/issues/5475)**: Copilot 配合 Telegram 通道时出现“Invalid parameter”错误。
    *   **Fix**: 已有 PR **[#5762](https://github.com/zeroclaw-labs/zeroclaw/pull/5762)** 尝试修复此类工具调用兼容性问题。
*   **[S0 - 安全/数据风险]**
    *   **[#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533)**: `allowed_path` 配置逻辑缺陷，允许 `~/` 但拒绝 `~/dev`，路径包含逻辑失效。
    *   **[#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672)**: 飞书 通道配置了 `mention_only` 仍回复所有消息，存在隐私泄露风险。

### 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以捕捉到以下即将到来的功能信号：

*   **OpenRouter 原生路由支持**: **[#5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619)** 请求支持 OpenRouter 的 `provider` 路由字段和 `extra_body` 机制，以利用其更高级的路由功能。
*   **技能生态扩展**: **[#5780](https://github.com/zeroclaw-labs/zeroclaw/pull/5780)** 提交了一个新的 Claude Code 技能 `github-issue-triage`，用于自动分类和清理 Issue。这标志着 ZeroClaw 开始构建自我维护的工具生态。
*   **可观测性增强**: **[#5700](https://github.com/zeroclaw-labs/zeroclaw/pull/5700)** 添加了对 OTLP (OpenTelemetry) 认证导出的支持，方便企业用户接入监控。

### 7. 用户反馈摘要
*   **编译效率痛点**: 用户反馈 **[#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575)** 称即使是单行代码修改，Rust 项目编译时间也长得令人无法接受，建议拆分 Crate。这呼应了架构 RFC 中关于微内核化的讨论。
*   **Windows 体验差**: **[#5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562)** 指出后台执行命令时会闪烁 CMD 窗口，干扰用户操作。
*   **安装文档混乱**: **[#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269)** 抱怨安装方法过于复杂且文档不全，导致新用户上手困难。

### 8. 待处理积压
提醒维护者关注以下长期未决或高优 Issue：

*   **[#4866 Web Dashboard 不可用](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)**: 作为主要交互界面，该问题长期存在是最大的体验短板。
*   **[#5574 RFC: Microkernel Transition](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)**: 涉及 v1.0.0 的核心方向，需要社区共识。
*   **[#2691 社区协作信任危机](https://github.com/zeroclaw-labs/zeroclaw/issues/2691)**: 虽已关闭，但高赞同数反映了核心团队需要改善社区关系和 Issue 处理流程。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-04-16)

**分析师**: AI 开源智能体观察员
**项目**: Sipeed/PicoClaw
**报告日期**: 2026-04-16

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时内表现出**极高的开发活跃度**和强劲的迭代势头。共处理了 26 条 PR 更新，其中 20 条已成功合并/关闭，表明核心团队正积极解决技术债务并推进新特性。今日发布了 `v0.2.6-nightly` 版本，主要亮点包括对“并行 Agent 循环”的重构、LLM-as-Judge 评估模式的引入以及 Web UI 体验的显著优化。社区方面，用户重点关注 LM Studio 集成及多通道环境下的稳定性问题。

---

## 2. 版本发布

- **版本号**: `v0.2.6-nightly.20260415.c0fadc59`
- **发布性质**: 自动化构建
- **关键更新**:
  - **Agent 并行化**: 完成了 Agent 循环的重构，支持并行处理用户消息并正确路由响应 ([PR #2503](https://github.com/sipeed/picoclaw/pull/2503))。
  - **Web UI 增强**: 引入了 Markdown 代码块语法高亮 ([PR #2529](https://github.com/sipeed/picoclaw/pull/2529))，并新增了搜狗支持的默认网页搜索工具，利好中国大陆用户 ([PR #2524](https://github.com/sipeed/picoclaw/pull/2524))。
  - **交互指令**: 增加了 `/btw` 副指令，允许用户在不干扰主会话历史的情况下提出“顺便问一下”的问题 ([PR #2502](https://github.com/sipeed/picoclaw/pull/2502))。
  - **稳健性修复**: 修复了非视觉模型收到图片输入后会导致会话“卡死”的严重 Bug ([PR #2525](https://github.com/sipeed/picoclaw/pull/2525))。
- **注意事项**: 此为 Nightly 版本，可能包含不稳定变更，生产环境慎用。
- **Changelog**: [v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

---

## 3. 项目进展

今日合并的 PR 显示项目在**架构重构**和**用户体验**两方面取得了实质性进展：

- **架构升级**: 核心代码库完成了向 LINE Bot SDK v8 的迁移，移除了约 270 行手动维护的 HTTP/HMAC 代码 ([PR #2413](https://github.com/sipeed/picoclaw/pull/2413))。同时，Gateway 的 PID 存活处理和 WebSocket 代理状态管理得到了硬化，提高了系统的健壮性 ([PR #2403](https://github.com/sipeed/picoclaw/pull/2403))。
- **多模态修复**: 解决了 Agent 在处理不支持图片的模型时的恢复逻辑，防止因历史记录中的图片残留导致后续文本消息持续失败 ([PR #2525](https://github.com/sipeed/picoclaw/pull/2525))。
- **功能扩容**: Membench 现在支持 `--eval-mode=llm`，允许使用 LLM 作为裁判进行语义评分，解决了原有基于 Token 重叠的 F1 分数在改写回答中表现不佳的问题 ([PR #2484](https://github.com/sipeed/picoclaw/pull/2484))。

---

## 4. 社区热点

- **LM Studio 连接请求** (Issue #28)
  - **链接**: [sipeed/picoclaw#28](https://github.com/sipeed/picoclaw/issues/28)
  - **热度**: 12 条评论，1 个赞
  - **分析**: 这是一个长期存在的“愿望单”Issue。用户希望在 Android 上轻松连接 LM Studio。尽管目前技术上可行，但缺乏图形化的简易配置流程，阻碍了非技术用户的使用。这反映了社区对“本地模型便捷接入”的强烈需求。
  
- **Cron 定时任务执行失败** (Issue #2468)
  - **链接**: [sipeed/picoclaw#2468](https://github.com/sipeed/picoclaw/issues/2468)
  - **热度**: 5 条评论
  - **分析**: 报错显示 `scheduling command execution is restricted to internal channels`。用户在尝试使用 Cron 工具时遇到权限限制错误，表明文档或默认配置可能未正确引导用户如何合法使用调度功能。

---

## 5. Bug 与稳定性

今日报告的 Bug 涉及多通道交互和兼容性：

1. **[严重] 多通道消息回显问题** (Issue #2446)
   - **描述**: 在多通道设置下，如果一个通道有未完成的任务，向另一个通道发送新消息时，新通道会立即“回显”用户消息，而不是进行处理。
   - **状态**: 待修复
   - **影响**: 阻塞了并发工作流的使用。

2. **[中等] LongCat API 工具调用失败** (Issue #2046)
   - **描述**: PicoClaw 在使用 LongCat 作为 Provider 时无法调用工具。
   - **状态**: 待修复
   - **影响**: 特定 Provider 的功能缺失。

3. **[中等] Web UI 频繁重新认证** (Issue #2302)
   - **描述**: Web UI 会话无法持久化，用户需频繁在 Credentials 菜单手动重新认证，报错 `PERMISSION_DENIED`。
   - **状态**: 待修复
   - **影响**: 严重影响 Web 用户体验。

4. **[已修复] 工具调用 ID 冲突** (PR #2528 - Merged)
   - **描述**: 某些 Provider 在不同轮次重用工具调用 ID (如 `call_0`)，导致旧的去重逻辑错误地丢弃了新的工具结果。
   - **状态**: ✅ 已在今日合并的 PR 中修复。

---

## 6. 功能请求与路线图信号

从今日开放的 PR 和 Issues 中，可以窥见未来的开发方向：

- **MCP (Model Context Protocol) 深度集成**: [PR #2535](https://github.com/sipeed/picoclaw/pull/2535) 引入了 `/list mcp` 和 `/show mcp` 指令，显示项目正致力于成为 MCP 服务的优秀编排器。
- **跨 Agent 任务委托**: [PR #2531](https://github.com/sipeed/picoclaw/pull/2531) 实现了 `delegate` 工具，允许 Agent 将任务同步移交给另一个具有特定配置的 Agent。这标志着项目正从“单 Agent”向“多 Agent 协作”体系演进。
- **配置灵活性**: [Issue #2527](https://github.com/sipeed/picoclaw/issues/2527) 请求将 `fresh_tail_size` (Seahorse 上下文窗口) 硬编码值改为可配置，以适应不同的上下文预算需求。
- **无头登录支持**: [Issue #2533](https://github.com/sipeed/picoclaw/issues/2533) 请求为 `auth login` 添加 `--no-browser` 标志，以适应服务器端或自动化脚本的部署场景。

---

## 7. 用户反馈摘要

- **痛点**:
  - **本地模型接入**: 用户抱怨连接 LM Studio 等本地模型门槛过高（Issue #28）。
  - **Android 体验**: 用户尝试在 Android 上安装时遇到困难，文档和易用性有待提升。
  - **多任务干扰**: 多通道并发时的消息乱序和回显问题（Issue #2446）让用户感到困惑。
- **正面反馈**:
  - 用户对新增的 `/btw` 功能（PR #2502）和 LLM-as-Judge 评估模式（PR #2484）表现出浓厚的兴趣，认为这些功能细化了控制流和评估手段。

---

## 8. 待处理积压

以下 Issue 长期未关闭，建议维护者关注：

- **[#28 LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28)**: 开放于 2 月，高点赞，属于高价值但未实现的“便利性”功能。
- **[#2046 PicoClaw does not call tool with LongCat API](https://github.com/sipeed/picoclaw/issues/2046)**: 开放于 3 月，涉及特定 Provider 的核心功能缺失。
- **[#2446 Multi-channel message echo](https://github.com/sipeed/picoclaw/issues/2446)**: 近期提出但影响核心并发逻辑，建议优先处理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-16

**分析对象**：NanoClaw (qwibitai/nanoclaw)
**报告日期**：2026-04-16
**项目状态**：🟢 高度活跃

---

### 1. 今日速览
NanoClaw 项目今日处于**极高活跃度**状态，显示出强劲的开发与迭代势头。过去 24 小时内有 **17 条 PR** 提交或更新，涉及底层架构升级（Node.js 24、pnpm）、多模态 LLM 支持（OpenAI/Vercel SDK）以及新增 5 个营销类容器技能；同时用户侧反馈了 **5 个 Issues**，主要集中在文件挂载语义、字符编码及 macOS 兼容性等体验细节问题。尽管没有新版本发布，但大量待合并 PR（13 个）预示着项目正在积攒重要特性，准备进入下一个功能密集的发布周期。

---

### 2. 版本发布
*无新版本发布。*

---

### 3. 项目进展
今日有 4 个 PR 被关闭/合并，虽然数量不多，但解决了多个关键的用户体验痛点：

*   **[CLOSED] 修复 OneCLI 认证配置** ([PR #1777](https://github.com/qwibitai/nanoclaw/pull/1777))
    *   **内容**：修复了在云端/开发环境下，由于未正确转发 `ONECLI_API_KEY` 导致容器配置无法获取的问题。
    *   **影响**：确保了云环境部署的代理容器能正确进行身份验证。
*   **[CLOSED] 修复凭证代理 ETIMEDOUT 与连接处理** ([PR #1782](https://github.com/qwibitai/nanoclaw/pull/1782))
    *   **内容**：通过启用 TCP Keep-Alive 和改进 `upRes` 错误处理，防止了长流式传输中的超时断开，并优化了客户端断开时的资源清理。
    *   **影响**：显著提升了 Agent 在进行长时间流式 API 调用时的网络稳定性。
*   **[CLOSED] 修复无头 Linux 浏览器启动** ([PR #1281](https://github.com/qwibitai/nanoclaw/pull/1281))
    *   **内容**：修复了在没有 `$DISPLAY` 的 Linux 服务器上浏览器静默失败的问题，现在会回退到打印 URL。
    *   **影响**：改善了 VPS 用户运行 `/setup` 时的体验。
*   **[CLOSED] 增加电话提醒 fallback 机制** ([PR #1760](https://github.com/qwibitai/nanoclaw/pull/1760))
    *   **内容**：当主叫号码未接通时，自动拨打备用号码。
    *   **影响**：增强了语音提醒功能的可靠性。

**迈向未来的步伐**：
今日活跃的 PR（如 #1784, #1778, #1786）表明，NanoClaw 正在从单一的 Anthropic 依赖转向**多模型通用架构**（支持 OpenAI/Google 等），并紧跟 Node.js 生态升级，系统整体稳定性与扩展性在稳步提升。

---

### 4. 社区热点
今日讨论主要围绕 **用户体验与配置黑盒** 展开，虽然 Issue 评论数较少，但报告的细节问题非常具体：

*   **热点 Issue：文件挂载语义不清** ([#1790](https://github.com/qwibitai/nanoclaw/issues/1790), [#1791](https://github.com/qwibitai/nanoclaw/issues/1791))
    *   **核心矛盾**：用户在配置 `/setup` 挂载白名单时发现，系统仅接受"目录"而不接受"文件"，且无法对同一目录下的文件做精细化权限控制（无法暴露 File A 而隐藏 File B）。
    *   **诉求**：需要更清晰的错误提示文档，以及更细粒度的文件级权限控制，以满足多租户场景下的安全隔离需求。
*   **热点 PR：底层包管理器迁移至 pnpm** ([#1771](https://github.com/qwibitai/nanoclaw/pull/1771))
    *   **动态**：发起将 v2 分支从 npm 迁移至 pnpm 的提议。这将影响依赖安装速度和磁盘空间占用，是开发者生态的重要变更。

---

### 5. Bug 与稳定性
今日报告的 Bug 暂未标记严重级别，但均影响功能的可用性与透明度：

*   **[Bug] 容器路径重写未文档化** ([#1792](https://github.com/qwibitai/nanoclaw/issues/1792))
    *   **现象**：`additionalMounts` 中的 `containerPath` 强制要求相对路径，且会被静默重写为 `/workspace/extra/` 前缀，绝对路径被拒绝。
    *   **风险**：用户配置失败难以排查，缺乏文档指引。
*   **[Bug] 非 ASCII 字符显示名称失效** ([#1789](https://github.com/qwibitai/nanoclaw/issues/1789))
    *   **现象**：`--display-name` 包含中文/日文时，文件夹名会静默变为 `dm-with-unnamed`。
    *   **影响**：导致 CJK（中日韩）用户的会话管理混乱。
*   **[Bug] macOS Apple Container 环境合并冲突** ([#1787](https://github.com/qwibitai/nanoclaw/issues/1787))
    *   **现象**：在 macOS 上首次 `/setup` 并选择 Apple Container 时，会产生 6 个 Git 合并冲突。
    *   **影响**：导致新用户在 macOS 上的初始化流程受阻。
*   **[Fix PR Available] 防止调度器热死循环** ([PR #1788](https://github.com/qwibitai/nanoclaw/pull/1788))
    *   **状态**：Open
    *   **内容**：针对 `runTask` 抛出异常和非文本脚本导致的无限循环问题，提出了三层防御机制（写入强制、启动修复、运行时捕获）。

---

### 6. 功能请求与路线图信号
从活跃的 PR 中可以嗅探出未来的核心路线图：

*   **多模型支持与标准化**：
    *   **信号**：[PR #1784](https://github.com/qwibitai/nanoclaw/pull/1784) (feat(llm): add multi-provider LLM layer...)
    *   **分析**：项目正在构建统一的 LLM 层，通过 Vercel AI SDK 接入 OpenAI, Google, Groq 等。这表明 NanoClaw 旨在打破模型锁定，成为一个**模型无关**的 Agent 编排框架。
*   **能力边界大扩张**：
    *   **信号**：[PR #1786](https://github.com/qwibitai/nanoclaw/pull/1786) (feat: complete 7-layer scope expansion)
    *   **分析**：该 PR 声称完成了 14 项设计规范中的剩余项目，包括 Webhook 事件源、浏览器 CSS 监听、预行动 LLM 验证等。这意味着 Agent 将具备更强的**感知能力**（Watching/Listening）和**自主验证能力**（Validation）。
*   **垂直场景技能增强**：
    *   **信号**：[PR #1780](https://github.com/qwibitai/nanoclaw/pull/1780) (feat: add 5 container skills...)
    *   **分析**：新增了客户画像、头像生成、Telegram 广告等技能。显示项目正向**商业落地场景**（营销/销售）深耕。

---

### 7. 用户反馈摘要
*   **痛点 - 配置黑盒**：用户 `ythx-101` 连续反馈多个关于挂载和路径的问题，指出当前的 `/setup` 流程存在大量"试错成本"，语义不清（如目录vs文件），且失败原因不透明。
*   **痛点 - 字符支持**：国际化支持不足，非英语字符在文件系统层面处理存在缺陷。
*   **正面 - 生态丰富**：从 PR 列表看，社区贡献者正在积极补全各类 Webhook、OAuth (Composio) 和 OpenCode 集成，显示出生态的繁荣。

---

### 8. 待处理积压
*   **[PR #886](https://github.com/qwibitai/nanoclaw/pull/886) (Needs Review)**：新闻简报功能。
    *   **备注**：该 PR 创建于 3 月初，今日仍有更新但未合并。这是一个相对独立的功能模块（4 个并行研究 Agent），建议维护者尽快审查，避免长期悬置导致冲突。
*   **[PR #1311](https://github.com/qwibitai/nanoclaw/pull/1311)**：创建新会话功能。
    *   **备注**：同样开启于 3 月，涉及核心交互逻辑，需关注是否卡在架构调整上。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

你好！我是 NullClaw 项目的 AI 开源分析师。根据 2026-04-16 的 GitHub 数据，以下是项目的最新动态日报。

---

# NullClaw 项目动态日报 (2026-04-16)

## 1. 今日速览
NullClaw 项目今日处于**高度活跃**状态，社区参与度极高。过去 24 小时内新增了 **9 个 Issues** 和 **8 个 PRs**，显示出强劲的开发迭代势头和用户反馈热情。虽然目前**暂无新版本发布**，但代码库正经历重大底层升级，包括向 **Zig 0.16 的迁移**以及**网络/Shell 安全沙箱的增强**。项目目前处于“功能扩张与 Bug 修复并行”的阶段，活跃用户主要集中在**环境配置**、**网络设置（Tailscale/Otel）**及**Agent 技能扩展**方面。

---

## 2. 版本发布
* **当前状态**：暂无新版本发布。
* **备注**：有用户反馈从源码安装时版本号显示为 `dev` ([#821](https://github.com/nullclaw/nullclaw/issues/821))，这可能意味着下一个正式版本（v2026.4.x 或 v2026.5.0）正在筹备中，尚未打 Tag。

---

## 3. 项目进展
今日合并了 3 个重要的 PR，主要集中在**底层安全**与**协议兼容性**上：

*   **🔒 安全性强化**：
    *   **[PR #378]**(https://github.com/nullclaw/nullclaw/pull/378) 已合并：修复了 `git -C` 参数处理的白名单逻辑（防止大小写混淆绕过），并支持了 Signal 的“Note to Self”功能。
    *   **[PR #377]**(https://github.com/nullclaw/nullclaw/pull/377) 已合并：引入了**沙箱验证的环境变量传递机制**。Shell 工具现在允许配置 `tools.path_env_vars`，在严格限制下传递路径类环境变量，平衡了安全性与易用性。
*   **📡 协议支持**：
    *   **[PR #369]**(https://github.com/nullclaw/nullclaw/pull/369) 已合并：完善了 Signal 协议处理，正式支持通过 Sync Envelope 处理“发给自己的笔记”。

---

## 4. 社区热点
今日讨论热度最高的问题主要集中在**旧版本的配置破坏**和**文档缺失**：

*   **🔥 热门 Issue #800** ([Otel broke due to https constraint](https://github.com/nullclaw/nullclaw/issues/800))
    *   **关注度**：👍 1
    *   **核心矛盾**：v2026.4.9 强制实施 HTTPS 端点约束，导致用户原有的 HTTP 配置（如 Podman 内部网络 Otel）失效。这属于一次**破坏性变更**，用户对此感到困扰。
*   **🔥 热门 Issue #812** ([http_request bug](https://github.com/nullclaw/nullclaw/issues/812))
    *   **关注度**：👍 1, 评论 4
    *   **核心诉求**：用户从 Picoclaw/ZeroClaw 迁移而来，无法启用互联网搜索功能。这反映了**文档示例过时**或**默认配置不兼容**的问题。

---

## 5. Bug 与稳定性
今日报告的 Bug 涉及版本显示、Linux 兼容性及功能逻辑冲突：

*   **🐛 高优先级 - 功能逻辑冲突**：
    *   **[#827](https://github.com/nullclaw/nullclaw/issues/827)**: `nullclaw channel status` 显示 CLI OK，但 `nullclaw doctor` 报错。两个诊断模块给出的信息互相矛盾，令用户困惑。
*   **🐛 中优先级 - Linux 兼容性**：
    *   **[#791](https://github.com/nullclaw/nullclaw/issues/791)**: Shell 在原生 Linux 环境下无法运行（非 Docker），尽管已允许所有命令。这可能与路径或权限沙箱有关。
*   **🐛 低优先级 - 版本显示**：
    *   **[#821](https://github.com/nullclaw/nullclaw/issues/821)**: 源码安装后版本号显示 `dev` 而非 Hash 或数字。

---

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以捕捉到以下未来开发方向：

*   **Zig 生态跟进**：
    *   **[PR #823](https://github.com/nullclaw/nullclaw/pull/823)**: 项目正积极向 **Zig 0.16.0** 迁移，重构了 WebSocket 和兼容层。这是下一个版本的基石工作。
*   **Agent 能力扩展**：
    *   **[#825](https://github.com/nullclaw/nullclaw/issues/825)**: 请求支持**嵌套的 Agent 技能目录结构**，以便更好地分类管理技能。
*   **特定功能集成**：
    *   **[#817](https://github.com/nullclaw/nullclaw/issues/817)**: 询问是否支持**微信扫码登录**。
*   **运维与集成**：
    *   **[PR #783](https://github.com/nullclaw/nullclaw/pull/783)**: 正在添加 **Cron 子代理引擎**，支持基于 DB 的任务调度和历史记录，这将极大增强 NullClaw 的自动化能力。
    *   **[#826](https://github.com/nullclaw/nullclaw/issues/826)**: 请求支持 **Tailscale** 网关集成（目前报错 NotImplemented）。

---

## 7. 用户反馈摘要
*   **痛点**：
    *   **文档滞后**：Debian 安装指南不清晰 ([#820](https://github.com/nullclaw/nullclaw/issues/820))，网络搜索示例不可用 ([#812](https://github.com/nullclaw/nullclaw/issues/812))。
    *   **变更过快**：强制 HTTPS 导致旧配置失效 ([#800](https://github.com/nullclaw/nullclaw/issues/800))。
    *   **跨平台体验**：Linux 原生环境下 Shell 工具存在稳定性问题 ([#791](https://github.com/nullclaw/nullclaw/issues/791))。
*   **正面反馈**：
    *   用户称赞 NullClaw 相比 Picoclaw/ZeroClaw **"看起来非常有组织"** ([#812](https://github.com/nullclaw/nullclaw/issues/812))。

---

## 8. 待处理积压
*   **长期未解决**：
    *   **[#791 (Shell can not run on the physical Linux)](https://github.com/nullclaw/nullclaw/issues/791)**: 创建于 4 月 8 日，至今仍在讨论中，涉及核心 Shell 功能，建议优先处理。
*   **待合并的重要 PR**：
    *   **[PR #823 (Zig 0.16 migration)](https://github.com/nullclaw/nullclaw/pull/823)**: 核心依赖升级，需关注合并进度以确定下个版本的发布窗口。
    *   **[PR #783 (Cron subagent)](https://github.com/nullclaw/nullclaw/pull/783)**: 重磅功能，自 4 月 7 日提出，仍在开发/审核中。

---
*数据来源：GitHub Events on 2026-04-16 | 分析师：AI Agent*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

你好！我是 IronClaw (nearai/ironclaw) 项目的 AI 分析师。基于 2026-04-16 获取的 GitHub 数据，以下是项目今日的动态日报。

---

### 📅 IronClaw 项目动态日报 | 2026-04-16

#### 1. 今日速览
IronClaw 项目今日保持**极高活跃度**，处于高强度迭代状态。
-   **代码贡献活跃**：过去 24 小时内有 50 条 PR 更新，其中 43 条处于待合并状态，显示核心团队与社区正在积极处理大量积压与新功能开发。
-   **问题处理高效**：17 条 Issue 更新中，有 8 条被成功关闭，修复了包括 OAuth 流程、工具权限记忆、Web UI 刷新循环等多个关键 Bug。
-   **安全与质量并重**：今日特别关注了 **P0 级别的安全问题**（Engine V2 绕过 Secret 扫描）和 E2E 测试覆盖的完善，项目在快速推进功能的同时紧守安全底线。

#### 2. 版本发布
*暂无新版本发布。*
目前大量活跃 PR（如 PR #2421 的跨用户授权、PR #1378 的工具路由）正在积极评审中，推测团队可能正在为包含 V2 引擎重大改进的下一个版本做铺垫。

#### 3. 项目进展
今日有多个关键功能与基础设施改进推进，部分已关闭，部分处于待合并状态：
-   **[Merged] 增强权限管理持久化 (#2428 关联)**：通过 PR #2428 增加了“始终批准”决定的数据库持久化，修复了用户在工具安装时重复授权的痛点（关联 Issue #2345 已关闭）。
-   **[Merged] MCP 服务器连接修复**：解决了 stdio-transport MCP 服务器在激活时错误触发 OAuth 发现流程的问题，确保了本地进程工具的正确启动（Issue #2474 已关闭）。
-   **[Merged] Web Dashboard 体验优化**：修复了 Dashboard 持续刷新导致内容丢失的循环 Bug（Issue #2405 已关闭）。
-   **[Open] CI/CD 架构升级**：PR #2459 提出了 "AI-first CI" 架构，引入 Haiku 模型进行自动代码审查和安全扫描，这将显著提升代码库的长期健康度。

#### 4. 社区热点
-   **🔥 安全漏洞大讨论**
    -   **Issue #2491**: `[security-review-required] Engine V2 bypasses inbound secret scanning`
    -   **分析**：用户 `serrrfirat` 发现当 `ENGINE_V2=true` 时，用户输入的 API Token/密钥会被直接发送给 LLM，完全绕过了安全扫描。这是一个严重的安全隐患，引发了社区对 V2 引擎安全性的高度关注。
-   **🔥 工具安装权限循环**
    -   **Issue #2345**: `[QA] Tool install asks for permission repeatedly`
    -   **分析**：这是用户长期吐槽的痛点，即 IronClaw 无法记住用户的“允许安装”决定。该问题现已标记为 CLOSED，且关联的 E2E 测试（Issue #2485）已建立，表明该问题已得到系统性解决。

#### 5. Bug 与稳定性
今日报告的 Bug 中，**P0 级别**问题较多，主要集中在 Web 交互和后端稳定性：
-   **[P0] Web 消息消失与刷新循环**
    -   **Issue #2410**: Dashboard 持续刷新，内容被擦除。
    -   **Issue #2409**: 聊天消息在输入后消失。
    -   **状态**：均为 OPEN，需密切关注 Web Gateway 状态。
-   **[P0] 后端进程超时**
    -   **Issue #2284**: Staging 环境下 Agent 实例在 1 小时不活跃后自动死亡。
    -   **状态**：OPEN，影响长时间会话体验。
-   **[Security] V2 引擎密钥泄露风险**
    -   **Issue #2491**: 详见上文“社区热点”。暂无 Fix PR。
-   **[Bug] HTTP 413 错误处理不全**
    -   **Issue #2489**: 除 `nearai_chat` 外，其他 4 个直接 HTTP 提供商未正确映射 Context Length Exceeded 错误。
    -   **状态**：OPEN。

#### 6. 功能请求与路线图信号
从 PR 和 Issue 中可以窥见未来的开发重点：
-   **参数级细粒度权限控制**
    -   **Issue #2484**: `[feat] param-aware always-allow grants`。当前批准 `shell ls /tmp` 会隐含批准 `shell rm -rf /`。该请求希望实现基于参数的授权，这将极大提升安全性，是权限系统的重要升级方向。
-   **模型提供商扩展**
    -   **PR #1446**: 增加 `AliyunProvider` (阿里云百炼) 支持。这表明 IronClaw 正在积极扩展非 OpenAI 生态的模型支持，以适应全球化需求。
-   **CI 历史版本重建**
    -   **PR #2507**: 允许从历史标签重建 Docker 镜像。这显示了项目正在优化基础设施的维护性和回滚能力。

#### 7. 用户反馈摘要
-   **满意度提升**：关于“工具重复索权”和“MCP 服务器激活失败”的反馈今日得到修复（Issues #2345, #2474），这改善了开发者和高级用户的自动化体验。
-   **交互体验受阻**：用户在 Staging 环境反馈了严重的 UI 问题（消息消失、页面无限刷新），这表明目前的 Web Gateway 在高负载或特定交互下存在不稳定性，可能阻碍新用户体验。
-   **Notion 集成问题**：用户报告在设置 Notion 时 Agent 停止响应（Issue #2087），显示出第三方工具集成的鲁棒性仍需加强。

#### 8. 待处理积压
以下长期未合并的重要 PR 建议维护者关注，以免代码冲突扩大：
-   **PR #1446** (Open): *feat: add Aliyun Coding Plan support* (XL size) — 创建于 3 月 20 日，包含大量模型适配代码，建议尽快合并或更新 rebase。
-   **PR #1378** (Open): *feat(routing): per-channel MCP and built-in tool filtering* (XL size) — 创建于 3 月 18 日，对于多通道部署（Slack/Telegram/Web）的隔离至关重要。
-   **PR #1764** (Open): *feat: Abound demo* (XL size) — 涉及 Responses API 和凭证注入，是 V2 架构的重要演示用例。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是基于 2026-04-16 GitHub 数据生成的 **LobsterAI (有道龙虾)** 项目动态日报。

---

### 📅 项目日报 | LobsterAI
**日期**：2026-04-16
**项目状态**：🟢 活跃开发中

#### 1. 今日速览
LobsterAI 项目今日处于**高活跃度**状态。过去 24 小时内合并了 **22 条 PR**，代码提交量大，主要集中在 **Bug 修复**和**底层逻辑重构**。虽然开启了一些新的 Issues，但大量旧 PR（包括 3 月份的积压）得到了关闭或合并，显示出维护者正在积极清理技术债务。社区反馈主要集中在新版登录问题和特定环境下的端口冲突，用户对新功能（如 Agent 导入）表现出较高期待。

#### 2. 版本发布
*暂无新版本发布。*

#### 3. 项目进展
今日共合并 22 条 PR，项目在稳定性、模块化和企业级功能适配方面取得显著进展：

*   **Agent 生态建设** ([PR #1691](https://github.com/netease-youdao/LobsterAI/pull/1691))：开启了 Agent 模板导入/导出功能的开发，支持自定义 Agent 在不同设备间共享（格式化为 `.agent.json`），这将极大方便用户分发和备份配置。
*   **协同办公优化** ([PR #1701](https://github.com/netease-youdao/LobsterAI/pull/1701))：默认启用了 `skipMissedJobs`，并优化了配置加载逻辑，提升了在 Cowork（协同）场景下的任务处理鲁棒性。
*   **核心模块修复与清理**：
    *   **Copilot 适配** ([PR #1695](https://github.com/netease-youdao/LobsterAI/pull/1695), [PR #1694](https://github.com/netease-youdao/LobsterAI/pull/1694))：修复了 GitHub Copilot Provider ID 与运行时不匹配的问题，并完成了旧数据的迁移。
    *   **IM 连接稳定性** ([PR #1697](https://github.com/netease-youdao/LobsterAI/pull/1697))：迁移 DingTalk 到官方连接器，并修复了 macOS 打包时的重复插件负载问题。
    *   **微信状态判断** ([PR #1696](https://github.com/netease-youdao/LobsterAI/pull/1696))：移除了微信连接状态对 `accountId` 的强依赖，解决了登录状态判断的潜在 Bug。
*   **清理遗留代码** ([PR #1689](https://github.com/netease-youdao/LobsterAI/pull/1689))：移除了 `yd_cowork` 相关的遗留代码和死代码，降低了维护负担。
*   **积压清理**：成功关闭了多个 3 月至 4 月初的陈旧 PR（如 [PR #429](https://github.com/netease-youdao/LobsterAI/pull/429), [PR #1309](https://github.com/netease-youdao/LobsterAI/pull/1309)），释放了开发分支的压力。

#### 4. 社区热点
*   **[热点 PR] Agent 模板导入/导出** ([PR #1691](https://github.com/netease-youdao/LobsterAI/pull/1691))
    *   **状态**：Open（开发中）
    *   **诉求**：用户强烈希望解决“Agent 配置无法跨设备共享”的痛点，避免手动重建。
*   **[热点 Issue] 登录与网络问题** ([Issue #1687](https://github.com/netease-youdao/LobsterAI/issues/1687))
    *   **状态**：Open
    *   **诉求**：Deepin V25 用户反馈升级至 v4.13 后无法登录，浏览器回调出现网络错误，涉及特定 Linux 发行版的兼容性问题。
*   **[热点 PR] Cowork 模型设置体验优化** ([PR #1693](https://github.com/netease-youdao/LobsterAI/pull/1693))
    *   **状态**：Open
    *   **诉求**：改善新用户上手体验，解决未配置模型时发送消息导致输入内容丢失的严重体验问题。

#### 5. Bug 与稳定性
今日报告的 Bug 主要涉及环境兼容性和端口冲突：

*   **🔴 高严重级：端口冲突与进程竞争** ([Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698))
    *   **描述**：在启动“有道龙虾”状态下安装“智企帝王蟹”，必现 Gateway 端口冲突及鉴权失败。
    *   **影响**：导致两个产品无法共存，必须关闭一方才能正常使用。
    *   **状态**：Open，待修复。
*   **🟡 中严重级：Deepin 系统登录失败** ([Issue #1687](https://github.com/netease-youdao/LobsterAI/issues/1687))
    *   **描述**：Linux Deepin V25 环境下，通过浏览器验证码登录失败，显示网络错误。
    *   **状态**：Open，需排查 Deepin 环境的网络/回环配置。
*   **🟢 已修复：中文路径乱码问题** ([PR #429](https://github.com/netease-youdao/LobsterAI/pull/429))
    *   **描述**：修复了 Windows 平台 HTTP API 创建定时任务时，`workingDirectory` 字段因编码检测 heuristic 错误导致中文字符乱码的问题。

#### 6. 功能请求与路线图信号
*   **大模型参数动态调整** ([Issue #1688](https://github.com/netease-youdao/LobsterAI/issues/1688))：用户提出在对话中通过关键字动态调整 `temperature` 参数的需求。这是提升 AI 交互灵活性的典型 Feature Request。
*   **企业级技能拓展** ([PR #1700](https://github.com/netease-youdao/LobsterAI/pull/1700))：添加了 POPO 云文档管理 和 POPO 群历史消息查询技能，显示项目正积极向企业办公场景深度集成。
*   **安全防误删** ([PR #1690](https://github.com/netease-youdao/LobsterAI/pull/1690))：针对 IM 实例删除操作增加了二次确认弹窗，防止高成本配置的误删，提升了企业级应用的安全性。

#### 7. 用户反馈摘要
*   **痛点**：**配置迁移困难**。用户在重装软件或换机时，面临手动重建 Agent 配置的巨大成本，催生了 [PR #1691](https://github.com/netease-youdao/LobsterAI/pull/1691)。
*   **场景**：**企业多产品共存**。Issue #1698 反映了用户需要同时运行有道龙虾和智企帝王蟹的实际场景，目前的端口冲突阻碍了这一工作流。
*   **体验**：**新引导不足**。PR #1693 提到用户在未配置模型时直接发送消息会导致输入丢失，这表明新用户引导流程仍有优化空间。

#### 8. 待处理积压
*   **OpenStale PR**：[PR #429](https://github.com/netease-youdao/LobsterAI/pull/429) (修复中文路径乱码) 虽然今日有更新，但仍处于 Open 状态，且是一个月前创建的，建议优先合并以解决中文用户体验问题。
*   **待确认 Issue**：[Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698) 涉及自家产品（智企帝王蟹）的冲突，属于内部协作优先级较高的问题，需尽快安排修复。

---
**分析师总结**：LobsterAI 今日展现出强劲的代码迭代能力，尤其是在清理技术债务和修复底层逻辑方面成效显著。同时，项目对企业级办公场景（POPO、DingTalk）的支持在加强。需关注 Linux 环境下的兼容性以及内部产品共存的问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-04-16)

**分析师**: AI Agent & Personal Assistant 开源项目分析师
**项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)
**日期**: 2026-04-16

---

## 1. 今日速览
Moltis 项目在过去 24 小时内展现了极高的代码活跃度与维护响应速度。共处理了 **27 个代码变更（20 PR + 7 Issues）**，其中 **15 个 PR 已成功合并**，**6 个 Bug 被修复关闭**。项目当前的焦点集中在 **Agent 上下文管理优化**、**多模态模型兼容性**以及 **核心基础设施的解耦重构**。值得关注的是，社区贡献者与维护者配合紧密，多个关键 Bug（如 OpenRouter 兼容性、MCP 状态显示）在报告后迅速得到修复，显示出项目健康的生态运转能力。

## 2. 版本发布
*无新版本发布。*
尽管近期大量 PR 合并，截至报告生成时 GitHub Releases 页面尚未更新。鉴于包含 `fix(providers)` 和 `fix(whatsapp)` 等重要修复，预计近期可能会有一个补丁版本发布。

## 3. 项目进展
今日合并的 PR 对 Moltis 的核心稳定性和扩展性进行了显著增强：

*   **🔧 WhatsApp 生态修复与升级** ([#709](https://github.com/moltis-org/moltis/pull/709))
    *   **进展**: 将底层 `whatsapp-rust` 生态依赖从 v0.2 大幅升级至 v0.5。
    *   **影响**: 修复了因 WhatsApp Protobuf 架构变更导致的入站消息解析失败（空消息）问题，确保了 Android/Termux 环境下的稳定性。
*   **🤖 Agent 智能与工具重构** ([#728](https://github.com/moltis-org/moltis/pull/728) [#731](https://github.com/moltis-org/moltis/pull/731))
    *   **进展**: 引入了 LLM 引导的 `memory_forget` 流程，并完成了大规模代码重构（将 27 个文件的实现逻辑从 `mod.rs`/`lib.rs` 迁移至独立模块）。
    *   **影响**: 提升了 Agent 处理长期记忆的智能化水平，同时显著降低了核心模块的耦合度，便于后续维护。
*   **🔌 模型提供商兼容性** ([#717](https://github.com/moltis-org/moltis/pull/717) [#719](https://github.com/moltis-org/moltis/pull/719) [#725](https://github.com/moltis-org/moltis/pull/725))
    *   **进展**: 修复了 Google/Gemini 通过 OpenRouter 调用时的 Tool Schema 错误；优化了 Qwen 模型的系统消息处理。
    *   **影响**: 消除了 `INVALID_ARGUMENT` 错误，增强了与不同 LLM 提供商的互操作性。

## 4. 社区热点
今日社区讨论主要集中在**外部集成能力**与**特定模型支持**上：

*   **🔥 热门 PR: CLI Agent 桥接基础** ([#566](https://github.com/moltis-org/moltis/pull/566))
    *   **状态**: Open (Created Apr 6)
    *   **热度**: 虽为旧 PR，但今日仍在活跃更新。
    *   **分析**: 社区对将 Moltis 连接到外部 CLI 编程 Agent（如 Claude Code, Codex CLI）表现出了强烈需求。该功能将极大扩展 Moltis 在开发者工作流中的地位。
*   **🔥 热门议题: Matrix OIDC 认证** ([#730](https://github.com/moltis-org/moltis/pull/730))
    *   **状态**: Open (Created Apr 15)
    *   **分析**: 针对 matrix.org 弃用密码登录的紧急应对，增加了 OIDC 支持。这是维持 Moltis 在现代 Matrix 生态中生存的关键功能。

## 5. Bug 与稳定性
今日报告的 Bug 修复率极高（6/7 已关闭），显示出维护团队的高效响应：

*   **[严重] WhatsApp 消息解析失败** ([#534](https://github.com/moltis-org/moltis/issues/534))
    *   **状态**: ✅ 已修复 (PR #709)
    *   **问题**: 入站消息被解密但解析为 "unhandled message type"。
    *   **解决**: 依赖库升级至 0.5。
*   **[中等] MCP (Model Context Protocol) 状态误报** ([#732](https://github.com/moltis-org/moltis/issues/732))
    *   **状态**: ✅ 已修复 (PR #733)
    *   **问题**: 健康的 HTTP 服务器被显示为 "dead"。
    *   **解决**: 修改健康检查逻辑，接受 HTTP 405 (Method Not Allowed) 作为存活信号。
*   **[中等] OpenRouter/Gemini Tool 调用失败** ([#716](https://github.com/moltis-org/moltis/issues/716))
    *   **状态**: ✅ 已修复 (PR #717, #719)
    *   **问题**: Tool Schema 中的类型数组不被 Google API 接受。
    *   **解决**: 实施了针对特定提供商的 Schema 降级/修补逻辑。
*   **[低] UI 消息同步问题** ([#729](https://github.com/moltis-org/moltis/issues/729))
    *   **状态**: ✅ 已修复 (PR #734)
    *   **问题**: 通过 GraphQL 发送的消息不实时显示在 Web UI。
    *   **解决**: 添加了 WebSocket 广播事件。

## 6. 功能请求与路线图信号
从活跃的 Open PR 中可以嗅探出未来的开发重点：

*   **精细化配置管理** ([#723](https://github.com/moltis-org/moltis/pull/723), [#727](https://github.com/moltis-org/moltis/pull/727))
    *   **信号**: 正在引入“按模型覆盖上下文窗口”的功能。这表明项目正在向支持更复杂、更多样化的模型部署架构迈进，允许用户针对特定模型（如 Opus）微调资源限制。
*   **工具结果压缩优化** ([#726](https://github.com/moltis-org/moltis/pull/726))
    *   **信号**: 针对 Agent 长循环中的上下文溢出问题，提出了“最旧优先”的压缩策略。这是提升 Agent 复杂任务执行能力的关键基础设施升级。

## 7. 用户反馈摘要
*   **痛点**: 用户对 **Docker 安全性**较为敏感 ([Issue #705](https://github.com/moltis-org/moltis/issues/705))，尽管该 Issue 已关闭，但暴露了 `/proc` 和 `/sys` 目录暴露给容器的问题，这是部署安全的关注点。
*   **集成障碍**: **ElevenLabs 自定义语音** ([Issue #735](https://github.com/moltis-org/moltis/issues/735)) 出现故障，反映出第三方 API 集成的稳定性仍需持续监控。
*   **满意度**: 用户对 **GraphQL API** 的依赖度较高，但也对 UI 同步延迟有即时的反馈和修正需求，显示出混合使用 API 和 UI 的场景非常普遍。

## 8. 待处理积压
以下长期未合并或仍在开发中的 PR 值得关注，可能存在技术难点或依赖阻塞：

*   **[#566 feat(external-agents): add crate foundation](https://github.com/moltis-org/moltis/pull/566)** (Open: 10天)
    *   这是一个大型功能，涉及 CLI Agent 桥接。虽然进展活跃，但复杂度较高，建议关注其阻塞点。
*   **[#723 feat(config): per-model context window overrides](https://github.com/moltis-org/moltis/pull/723)** (Open: 1天)
    *   涉及核心配置逻辑的变更，分为 1/N 和 2/N，需确保后续 PR 及时跟上以避免代码处于半成品状态。
*   **[#735 [Bug]: custom elevenlabs voices don't work](https://github.com/moltis-org/moltis/issues/735)** (Open: 1天)
    *   新发现的语音合成 Bug，尚未有对应的 Fix PR，需维护者介入。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-16)

**报告人**：AI 智能体与个人 AI 助手领域开源项目分析师
**分析对象**：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) (注：数据源仓库显示为 QwenPaw，本文将视为 CoPaw 生态核心仓库进行分析)

---

### 1. 今日速览
CoPaw 项目今日处于**极高活跃度**状态。过去 24 小时内，社区共处理了 50 条 Issues 和 50 条 PRs，均保持 50% 的处理/关闭率，显示出强劲的维护迭代能力和社区响应速度。项目连续发布了 `v1.1.2-beta.1` 和 `v1.1.1.post1` 两个版本，重点修复了内存递归监听、Ollama 连接及长任务中断等关键问题。技术层面上，路由策略、会话状态恢复及通道集成是今日的开发热点。

### 2. 版本发布
今日项目连续发布两个版本，修复了若干核心稳定性问题：

*   **[v1.1.2-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.2-beta.1)**
    *   **变更内容**：
        *   **[Feature]** 新增默认内存摘要 功能。
        *   **[Fix]** 修复内存文件监听器，支持递归配置，解决深层文件变动不生效的问题 ([#3347](https://github.com/agentscope-ai/QwenPaw/pull/3347))。
*   **[v1.1.1.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.1.post1)**
    *   **变更内容**：
        *   **[Fix]** 修复 Ollama 提供商的连接问题 ([#3434](https://github.com/agentscope-ai/QwenPaw/issues/3434) 相关)。
        *   **[Fix]** 更新 Cron Job ID 信息提示文本。

### 3. 项目进展
今日合并/关闭的 PR 主要集中在功能完善与体验优化上：

*   **模型路由策略**：[#3443](https://github.com/agentscope-ai/QwenPaw/pull/3443) (Closed) 与 [#3451](https://github.com/agentscope-ai/QwenPaw/pull/3451) (Open) 将本地/云端模型路由策略升级为 v1 版本，支持根据内容类型（如结构化输出、多模态）智能判断路由，显著提升了混合部署的灵活性。
*   **前端体验增强**：
    *   [#3411](https://github.com/agentscope-ai/QwenPaw/issues/3411) (Closed): 允许在配置模型时自定义上下文长度。
    *   [#3393](https://github.com/agentscope-ai/QwenPaw/issues/3493) (Closed): 支持 URL 参数直接控制前端语言（中/英）和主题（深/浅色）。
    *   [#3365](https://github.com/agentscope-ai/QwenPaw/pull/3365): 引入“Agent 统计”页面，提供会话和消息的趋势图表，填补了运营监控的空白。
*   **Bug 修复**：[#3107](https://github.com/agentscope-ai/QwenPaw/pull/3107) 解决了 `qwen3-coder-plus` 等模型在长任务执行中静默停止的严重问题。

### 4. 社区热点
今日讨论热度最高的话题集中在项目命名、系统集成与安全性：

*   **[Issue #3430: QwenPaw和CoPaw关系是啥？](https://github.com/agentscope-ai/QwenPaw/issues/3430)** (评论: 5)
    *   **摘要**：社区对项目未来的命名和路线图存在困惑。用户迫切需要明确两者是否合并或独立维护。
*   **[Issue #3432: 对接飞书频道权限问题](https://github.com/agentscope-ai/QwenPaw/issues/3432)** (评论: 2)
    *   **摘要**：用户反馈从 `openclaw` 迁移到新版本后，即使权限配置正确，飞书文档和多维表格的 API 调用依然失败。这表明企业级集成功能可能存在回归或配置复杂度过高的问题。
*   **[Issue #2291: Help Wanted: Open Tasks](https://github.com/agentscope-ai/QwenPaw/issues/2291)** (评论: 57)
    *   **摘要**：长期置顶的任务认领帖持续活跃，表明社区参与度极高，外部开发者正在积极填补功能空缺。

### 5. Bug 与稳定性
今日报告的 Bug 涉及文件系统、模型状态及核心逻辑：

*   **[Critical] [Issue #3381: 智能体工作区路径错误](https://github.com/agentscope-ai/QwenPaw/issues/3381)** (Open)
    *   用户设置了特定工作区路径，但智能体实际运行在另一位置，导致数据混乱。
*   **[High] [Issue #3420: 修改 Skill.md 导致其他文件丢失](https://github.com/agentscope-ai/QwenPaw/issues/3420)** (Closed)
    *   **影响**：通过 Web UI 编辑技能时，同目录下的脚本文件会被清空。该问题今日已关闭，推测已修复。
*   **[High] [Issue #3397: 大 max_input_length 导致会话冻结](https://github.com/agentscope-ai/QwenPaw/issues/3397)** (Open)
    *   在 CLI 任务中，设置较大的输入长度会导致代理永久停止响应。
*   **[Medium] [Issue #3279: Pipeline 重复执行与 Tool ID 泄漏](https://github.com/agentscope-ai/QwenPaw/issues/3279)** (Open)
    *   每条消息触发两次 Pipeline 操作，且 Tool ID 列表无限增长，可能导致性能随对话时间线性下降。

### 6. 功能请求与路线图信号
用户需求集中在 UI 交互细节与底层能力扩展：

*   **功能请求：Skill 分类与编辑**
    *   **[#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961)** 请求技能文件夹分类，解决技能过多时的管理难题。
    *   **[#3402](https://github.com/agentscope-ai/QwenPaw/issues/3402)** (Closed) 请求在界面直接编辑技能的其他文件（不仅是 Skill.md）。
*   **功能请求：上下文与监控**
    *   **[#3426](https://github.com/agentscope-ai/QwenPaw/issues/3426)** 希望在界面上实时显示当前对话的上下文使用量。
*   **功能请求：安全与风险提示**
    *   **[#3349](https://github.com/agentscope-ai/QwenPaw/issues/3349)** 建议在 Agent 申请敏感操作（如读取密码文件）时，增加红色醒目的风险警告，提升安全性感知。
*   **路线图信号：语音通道**
    *   **[#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449)** 引入了基于 SIP 的语音通道支持，标志着项目正从纯文本向多模态交互（语音电话）演进。

### 7. 用户反馈摘要
*   **痛点 - 长任务稳定性**：用户在使用 `qwen3 coder plus` 执行代码迭代任务时频繁遇到“静默停止”问题 ([#3011](https://github.com/agentscope-ai/QwenPaw/issues/3011))，尽管已有修复 PR，但用户对长链路任务的稳定性仍存疑虑。
*   **痛点 - Docker 部署体验**：Docker 用户反馈默认 Agent 缺少说明文档 ([#3382](https://github.com/agentscope-ai/QwenPaw/issues/3382))，且备份恢复流程存在配置陷阱 ([#3380](https://github.com/agentscope-ai/QwenPaw/issues/3380))。
*   **好评 - 开源参与**：Issue #2291 的持续活跃表明社区对项目有强烈的归属感和贡献意愿，这是项目健康度的积极信号。

### 8. 待处理积压
以下 Issue 虽非今日新增，但长期未解决且影响较大，建议维护者优先关注：

*   **[#2441: Plan Mode Request](https://github.com/agentscope-ai/QwenPaw/issues/2441)** (Open, 自 3月28日)
    *   用户请求增加“计划模式”以严格控制 Agent 行为，这对严肃工作流至关重要。
*   **[#3279: Pipeline Ops 重复执行](https://github.com/agentscope-ai/QwenPaw/issues/3279)** (Open, 自 4月12日)
    *   涉及核心逻辑的性能与状态泄漏问题，需尽快排查。
*   **[#2144: Local Judge Routing](https://github.com/agentscope-ai/QwenPaw/pull/2144)** (Closed)
    *   虽标记为关闭，但路由策略的复杂性一直是用户反馈的难点（如 #3397），需确保文档和 UI 简化跟上代码进度。

---
**分析总结**：CoPaw 项目今日在迭代速度上表现优异，尤其是对 Bug 的响应和版本发布节奏非常快。然而，随着功能复杂度（路由、通道、模型兼容）的增加，稳定性和配置的易用性（如 Docker、飞书集成）成为了用户反馈的焦点。建议下一阶段在保持功能开发的同时，着重修复“长任务中断”和“文件系统操作”等稳定性问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报 | 2026-04-16**

**1. 今日速览**
EasyClaw 项目今日呈现“**发布迭代、开发跟进**”的整体态势。虽然 Issue 板块在过去的 24 小时内零新增，显示出用户端反馈暂时处于平静期，但核心开发并未停滞。项目发布了 **v1.7.11** 版本，主要是针对 macOS 平台的安装体验进行了文档和说明的修复。同时，一个新的功能特性 PR（Feature/Credits System）已提交并处于待合并状态，预示着项目正在向“积分/信誉系统”方向扩展功能。

---

**2. 版本发布**
**[v1.7.11] RivonClaw v1.7.11**
*   **发布内容**：本次版本更新主要侧重于交付物的完善与用户指引，特别是针对 macOS 平台用户的安装门槛进行了降低。
*   **关键变更**：重点更新了安装说明。针对 macOS 用户常遇到的 Gatekeeper 安全拦截问题（提示“已损坏”），新增了详细的终端命令解除隔离教程。这表明项目正在积极优化非签名应用在 macOS 上的开箱即用体验，减少因安全机制导致的用户流失。
*   **迁移/破坏性变更**：无。
*   **链接**: [Releases: v1.7.11](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.11)

---

**3. 项目进展**
**PR #32: Feature/credits system (OPEN)**
*   **状态**：待合并
*   **贡献者**：dlxai
*   **进展分析**：该 PR 提出了“积分系统”的功能代码，这是项目架构的一个重要功能延伸。虽然目前尚未合并，但标志着项目核心逻辑正在向更复杂的状态管理演进。
*   **影响**：一旦合并，将意味着 EasyClaw 引入了一套新的计量或激励机制，可能用于 API 限流、用户等级或资源计费。
*   **链接**: [PR #32](https://github.com/gaoyangz77/easyclaw/pull/32)

---

**4. 社区热点**
今日无活跃的 Issue 讨论或评论。社区热度主要集中在**新版本的获取与 macOS 平台的安装验证**上。由于 macOS Gatekeeper 的拦截机制是常见痛点，Release 页面中的相关说明预计将成为今日用户关注的高频文档。

---

**5. Bug 与稳定性**
*   **已知问题**：**macOS 应用无法打开**
    *   **描述**：macOS 系统默认拦截未签名的 RivonClaw 应用，报错文件损坏。
    *   **状态**：**文档已修复**。虽然这不是代码层面的 Bug 修复，但 v1.7.11 通过提供解决方案（终端命令移除隔离属性）有效缓解了该问题对用户体验的破坏。
    *   **严重程度**：中（影响初次安装体验，但有解）

---

**6. 功能请求与路线图信号**
*   **[Feature] 积分系统**
    *   **来源**：PR #32
    *   **分析**：开发者 `dlxai` 已提交代码实现。这暗示项目可能正在从单纯的“工具”向带有管理性质的“平台”转变，或者是为了对接某些计费/配额服务。这是目前观察到的最明确的下一步路线图信号。

---

**7. 用户反馈摘要**
由于今日无新增 Issue 评论，用户反馈主要隐含在**版本发布的操作行为**中：
*   **痛点**：macOS 用户在直接下载安装包双击打开时受阻，对“已损坏”的提示感到困惑。
*   **满意度**：Release 附带的详细解决步骤（Terminal 命令）将有助于提升 macOS 用户的安装成功率。

---

**8. 待处理积压**
**[待合并] PR #32 (Feature/credits system)**
*   **风险提示**：该 PR 创建于 2026-04-15，目前尚未合并。维护者需尽快进行 Code Review，以免代码腐烂或与主分支产生过多冲突，影响功能上线的时效性。
*   **建议操作**：建议项目维护者关注该 PR 的代码逻辑，确认是否引入了新的数据库依赖或配置文件。

---
**数据来源**: [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*