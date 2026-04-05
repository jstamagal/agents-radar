# OpenClaw 生态日报 2026-04-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-05 00:12 UTC

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

# OpenClaw 项目动态日报 (2026-04-05)

## 1. 今日速览
OpenClaw 项目今日呈现**极高活跃度**，过去 24 小时内共处理了 500 条 Issues 和 500 条 Pull Requests，显示出强劲的开发势头与社区参与度。代码提交主要集中在**跨平台兼容性修复**（Windows/Linux/macOS）和**插件生态系统架构的重构**上。虽然今日没有新版本发布，但从 PR 动向来看，维护者正在积极推进 `extensions` 包边界的硬化工作，并为下一版本的发布做大量技术债清理。值得注意的是，社区对于**安全性**（如凭证窃取漏洞检测）和**多语言支持**（i18n）的关注度显著提升，体现了项目全球化发展的需求。

## 2. 版本发布
*当前无新版本发布。*
根据 PR 列表中的元数据（如 `Rebased onto upstream v2026.4.4`），项目内部正在积极整合准备 `v2026.4.4` 或后续版本，用户可关注即将到来的功能更新。

## 3. 项目进展
今日合并与活跃的重要 PR 推动了以下进展：
*   **插件生态架构加固**: PR [#61023](https://github.com/openclaw/openclaw/pull/61023) 对几乎所有扩展插件和频道进行了大规模重构，硬化了扩展包边界，解决了本地解析问题，提升了长期维护性。
*   **安全漏洞响应**: 针对 Issue [#59085](https://github.com/openclaw/openclaw/issues/59085) 报告的 Matrix 插件潜在凭证窃取代码模式，官方已通过检测机制成功拦截并关闭了该 Issue。
*   **跨平台工具链修复**: PR [#29488](https://github.com/openclaw/openclaw/pull/29488) 和今日新开的 PR [#61090](https://github.com/openclaw/openclaw/pull/61090) 分别解决了 Windows 环境下的临时目录/代理问题以及技能同步时的路径过滤问题（排除 `.git` 和 `node_modules`），改善了 Windows 用户体验。
*   **Agent 能力增强**: 一系列关于 ACP (Agent Code Protocol) 的 PR（如 [#61081](https://github.com/openclaw/openclaw/pull/61081), [#57910](https://github.com/openclaw/openclaw/pull/57910)）正在改善 Agent 间的会话交接、别名解析和工作区注入能力。

## 4. 社区热点
*   **[Feature] 国际化支持 ([#3460](https://github.com/openclaw/openclaw/issues/3460))**: 119 条评论。社区强烈要求 OpenClaw 支持多语言，但目前官方表示带宽不足暂不支持，这是一个长期的高优先级需求。
*   **[Feature] Linux/Windows Clawdbot Apps ([#75](https://github.com/openclaw/openclaw/issues/75))**: 70 条评论，67 个赞。用户对桌面端应用的需求依然旺盛，特别是 Windows 和 Linux 平台的原生支持。
*   **[Bug] iMessage 消息死循环 ([#41330](https://github.com/openclaw/openclaw/issues/41330))**: 评论活跃。这是一个严重的频道 Bug，Agent 发送的回复被当作新消息再次摄入，导致无限循环，严重影响 iMessage 用户体验。
*   **[Bug] Ollama 连接超时 ([#59098](https://github.com/openclaw/openclaw/issues/59098))**: 本地大模型用户反馈 OpenClaw 集成 Ollama 时频繁超时，而直接调用 API 正常，指向了 Gateway 连接层面的优化空间。

## 5. Bug 与稳定性
*   **严重 Bug - Exec 审批流程繁琐**: Issue [#59510](https://github.com/openclaw/openclaw/issues/59510) 指出 v2026.4.1 版本中审批流程过于复杂，严重影响可用性，用户需要为每个命令单独设置允许，且“始终允许”选项失效（[#59847](https://github.com/openclaw/openclaw/issues/59847)）。
*   **严重 Bug - 执行卡死**: Issue [#40631](https://github.com/openclaw/openclaw/issues/40631) 描述了一种周期性故障，Agent 确认任务但无任何工具调用动作，随后报告无进度，属于执行状态机 Bug。
*   **回归问题 - Discord 审批失效**: Issue [#58941](https://github.com/openclaw/openclaw/issues/58941) 报告升级到 v2026.3.31 后 Discord 上的 exec 审批功能失效，回退到 v2026.3.28 恢复正常。
*   **回归问题 - GPT-5.3-Codex 无法执行工具**: Issue [#53959](https://github.com/openclaw/openclaw/issues/53959) 反馈更新到特定版本后，OpenAI 的 Codex 模型完全停止执行任何工具。
*   **功能 Bug - 环境变量未继承**: Issue [#31583](https://github.com/openclaw/openclaw/issues/31583) 指出 `exec` 工具不再继承配置文件中定义的环境变量，导致密钥注入失败。

## 6. 功能请求与路线图信号
*   **MCP 协议原生支持**: Issue [#29053](https://github.com/openclaw/openclaw/issues/29053) (16 👍) 请求增加对 Model Context Protocol (MCP) 的原生客户端支持，以连接外部 MCP 服务器。考虑到 MCP 正成为行业标准，此请求有望被纳入路线图。
*   **内存管理架构升级**: Issue [#59095](https://github.com/openclaw/openclaw/issues/59095) 提出了内置的分层自适应内存管理方案，试图解决当前依赖手动配置或第三方技能的痛点。
*   **简化审批与安全平衡**: 鉴于今日多个关于审批流程繁琐的 Bug 报告（[#59510](https://github.com/openclaw/openclaw/issues/59510), [#50295](https://github.com/openclaw/openclaw/issues/50295)），预计下个版本会在“易用性”和“混淆检测”之间进行重新平衡。

## 7. 用户反馈摘要
*   **桌面端体验短板**: Windows 用户抱怨安装困难（[#5440](https://github.com/openclaw/openclaw/issues/5440)）和特定模型（如 Ollama）下的连接超时问题。
*   **安全性担忧与便利性的冲突**: 用户一方面对自动混淆检测感到满意（防止恶意命令），另一方面认为过于严格的参数检查（如 Issue [#27843](https://github.com/openclaw/openclaw/issues/27843) 中白名单命令仍因特殊字符触发审批）严重阻碍了正常工作流。
*   **多模型兼容性痛点**: 使用 Kimi、MiniMax 和 Gemini 等非主流模型的用户频繁遇到认证和工具调用问题（[#44851](https://github.com/openclaw/openclaw/issues/44851), [#52335](https://github.com/openclaw/openclaw/issues/52335), [#49226](https://github.com/openclaw/openclaw/issues/49226)）。

## 8. 待处理积压
*   **长期搁置的多平台支持**: Linux/Windows 客户端需求（[#75](https://github.com/openclaw/openclaw/issues/75)）自年初提出至今仍处于 Open 状态，进展缓慢。
*   **Slack/Discord 上下文泄漏**: Issue [#24148](https://github.com/openclaw/openclaw/issues/24148) 描述的跨频道回复上下文泄漏问题（导致心跳消息发送给错误用户）已关闭但可能存在残留问题，需持续关注。
*   **国际化和本地化 (i18n)**: 尽管热度极高，官方在 Issue [#3460](https://github.com/openclaw/openclaw/issues/3460) 中明确表示短期内无力支持，这是社区最大的遗憾之一。

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报（横向对比分析）
**报告日期：2026-04-05**
**分析师：开源生态技术观察员**

---

### 1. 生态全景

个人 AI 助手与自主智能体开源生态正处于**架构转型与体验深水区**。
*   **架构去中心化**：头部项目（如 NanoClaw, CoPaw, OpenClaw）正加速摆脱对单一 LLM 提供商的依赖，积极适配 OpenAI Codex、DeepSeek 及多模态模型，以降低 API 封禁与成本风险。
*   **交互平台泛在化**：生态竞争已从单纯的模型能力转向**连接能力**，今日多个项目同时涌入 WhatsApp、QQ（OneBot）、Signal 和 Matrix 等通讯协议的集成，旨在实现 AI Agent 对用户社交工作流的全面渗透。
*   **工程化瓶颈期**：社区焦点从“炫酷功能”转向**稳定性与安全**（如 Windows 兼容性、Docker 权限隔离、SSRF 防护），表明开发者已开始关注生产环境部署的落地痛点。

---

### 2. 各项目活跃度对比

| 项目 | Issues | PRs | Release | 活跃度评级 | 健康度备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 无 | 🔴 **极高** | 核心参照，生态霸主。面临严重的 Windows 体验缺陷和审批流程 Bug 回归。 |
| **CoPaw** | 22 | 15 | 准备 v1.0.2 | 🔴 **极高** | 聚焦国内生态（飞书/火山引擎），新贵项目，社区贡献热情高涨，但存在资源占用/进程泄露问题。 |
| **NanoBot** | 15 | 26 | 无 | 🟠 **高** | 代码合并快，稳定性口碑优于 OpenClaw（Windows 场景），受上下文窗口 Bug 困扰。 |
| **Zeroclaw** | 14 | 40 | 无 | 🟠 **高** | Rust 生态代表，Windows 入驻问题已修复，但面临 Review 积压，36 个 PR 待合并。 |
| **IronClaw** | 6 | 43 | 无 | 🟠 **高** | 大规模重构期，向多 Agent 编排和企业级隔离转型，Engine v2 存在环境变量回归。 |
| **LobsterAI** | 6 | 15 | 无 | 🟠 **高** | 网易出品，**响应最快**。今日爆发式修复数据丢失/防错机制，产品打磨极其细致。 |
| **NullClaw** | 4 | 11 | 无 | 🟡 **中** | Zig 语言高性能派，聚焦可观测性（OTEL）和交互式命令修复，技术栈独特。 |
| **Moltis** | 6 | 2 | 无 | 🟡 **中** | 处于功能修补期，受模型配置逻辑错误困扰，社区反馈集中在 UI 易用性。 |
| **NanoClaw** | 4 | 20 | 无 | 🟡 **中** | 架构转型中（Claude -> Multi-LLM），安全加固 PR 堆积，急需解决 OAuth 成本与封号危机。 |

---

### 3. OpenClaw 在生态中的定位

*   **定位**：**“事实上的标准与工业级试验场”**。
*   **优势**：拥有最庞大的社区规模和吞吐量（日处理 1000+ 议题），插件生态最成熟。
*   **技术差异**：
    *   **激进 vs 保守**：OpenClaw 在 `extensions` 架构重构和权限系统上最为激进，但也因此频繁引入破坏性 Bug（如 Exec 审批失效、iMessage 死循环）。
    *   **覆盖率 vs 精致度**：相比 **LobsterAI** 的极致 UI 细节打磨和 **NanoBot** 的 Windows 稳定性，OpenClaw 依然受困于跨平台（特别是 Windows）的碎片化体验。
*   **社区对比**：OpenClaw 的 Issue 处理速度较慢（国际化 i18n 需求被长期搁置），而新兴竞品（如 LobsterAI）能做到数小时内响应并修复用户痛点。

---

### 4. 共同关注的技术方向

以下技术痛点/需求在 **3 个及以上** 项目中同时涌现，标志着行业共识的形成：

*   **通讯渠道爆炸**
    *   **涉及项目**：CoPaw (WhatsApp, QQ), NanoClaw (Matrix, Signal), IronClaw (Matrix, WeChat), Zeroclaw (Signal).
    *   **诉求**：用户不再满足于 Web/Dashboard，强烈要求 Agent 原生接入微信、WhatsApp、Telegram 和 QQ，实现“消息即入口”。

*   **多模态与视觉能力**
    *   **涉及项目**：NanoClaw (OpenAI Codex, OpenCode), Moltis (Mistral/Qwen Vision), NullClaw (A2A Multimodal).
    *   **诉求**：将文本模型与视觉模型解耦，或统一支持多模态输入，以处理截图分析、文档阅读等场景。

*   **Windows 与 跨平台兼容性**
    *   **涉及项目**：OpenClaw (临时目录/同步卡死), Zeroclaw (fsync Access Denied), CoPaw (init hangs).
    *   **诉求**：Rust/Zig/Python 项目在 Windows 文件系统权限和终端交互上仍面临严峻挑战，这是阻碍开源 Agent 普及的最大门槛。

*   **本地/私有模型支持**
    *   **涉及项目**：NanoBot (Kimi, Ollama), Zeroclaw (Local-First Mode), CoPaw (Llama.cpp, Ollama).
    *   **诉求**：出于隐私和成本考虑，支持 Ollama、LM Studio 等本地推理已成为“标配”需求。

---

### 5. 差异化定位分析

| 维度 | OpenClaw / NanoClaw | IronClaw | Zeroclaw / NullClaw | LobsterAI / CoPaw |
| :--- | :--- | :--- | :--- | :--- |
| **核心侧重** | **全能型 Agent 框架**。插件化极强，什么都想做。 | **企业级多 Agent 编排**。侧重 WASM 隔离、K8s 部署、SOP 流程。 | **高性能与边缘计算**。底层语言，专注启动速度、资源占用和可移植性。 | **用户体验与连接器**。侧重桌面应用体验、UI 细节和特定平台（如国内软件）集成。 |
| **目标用户** | 开发者、极客、重度 DIY 用户。 | 需要构建复杂 Agent 团队和自动化工作流的企业/团队。 | 追求极致性能、Termux/移动端或私有化部署的技术用户。 | 普通个人用户、知识工作者、希望“开箱即用”的非程序员。 |
| **技术架构** | Python (Glue Code), Heavy Plugin System. | Rust (Core) + Python/JS (Agents), Heavy Isolation. | Rust (Zeroclaw) / Zig (NullClaw), Monolithic/Fast. | Electron/Tauri (Desktop) + Python/Go Backend. |

---

### 6. 社区热度与成熟度

*   **第一梯队 (成熟稳定期)**: **OpenClaw**, **NanoBot**。
    *   功能丰富但技术债累积。今日主要在处理 Bug 回归和性能优化。
*   **第二梯队 (快速迭代/扩张期)**: **IronClaw**, **CoPaw**, **LobsterAI**。
    *   **IronClaw** 正在重构核心引擎；**CoPaw** 和 **LobsterAI** 正疯狂抢占新渠道和修复用户痛点，活跃度极高，变数大。
*   **第三梯队 (垂直/硬核期)**: **Zeroclaw**, **NullClaw**, **Moltis**。
    *   社区相对小众但硬核。Zeroclaw/NullClaw 聚焦于 Rust/Zing 系统级优化；Moltis 则纠结于特定配置逻辑。

---

### 7. 值得关注的趋势信号

1.  **“安全焦虑”超越“能力焦虑”**：
    *   **信号**：OpenClaw 修复“凭证窃取”，NanoClaw 提交 PR 将源码挂载为只读（防篡改），NullClaw 引入沙箱隔离。
    *   **价值**：随着 Agent 拥有 `exec` 权限，防止 Agent 自我修改或恶意操作已成为社区的首要红线。

2.  **从“单体”走向“编排”**：
    *   **信号**：IronClaw 的 A2A 协议与 Agent 团队功能；LobsterAI 用户请求“Manager 角色”。
    *   **价值**：单一 Agent 难以处理复杂任务，未来竞争将在于多 Agent 协作与标准作业程序（SOP）的执行力。

3.  **API 成本导致“逃逸潮”**：
    *   **信号**：NanoClaw 用户因 Anthropic OAuth 计费变更转向 OpenCode；CoPaw 和 OpenClaw 用户密集反馈对 Ollama/DeepSeek 等低成本/本地模型的支持。
    *   **价值**：未来的 AI 助手必须具备“混合推理”能力，能在云端昂贵模型和本地廉价模型间无缝切换，否则将被高昂的 API 费用淘汰。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 (2026-04-05)

**项目**: HKUDS/nanobot  
**分析师**: AI 智能体与个人助手领域分析师  
**日期**: 2026-04-05

---

### 1. 今日速览
NanoBot 项目在过去 24 小时内展现出极高的活跃度，共有 **15 条 Issues** 和 **26 条 Pull Requests** 发生更新。虽然今日没有新版本发布，但代码库正经历密集的功能迭代与 Bug 修复。社区讨论集中在**上下文窗口管理**、**安全防护策略（SSRF）**以及**多模态模型支持**上。值得注意的是，已有大量修复性 PR 被合并（如 GPT-5 支持、Telegram 线程修复），显示出项目维护团队对社区反馈的快速响应能力。

---

### 2. 版本发布
*暂无新版本发布。*

---

### 3. 项目进展
今日合并的 PR 主要集中在错误修复与架构优化，显著增强了系统的稳定性与兼容性：

*   **[GPT-5 模型家族支持](https://github.com/HKUDS/nanobot/pull/2788)** (已合并):
    *   更新了 OpenAI Provider 规格，支持 `max_completion_tokens` 以兼容 GPT-5 模型。
    *   添加了针对推理模型（o1/o3/o4）的温度控制逻辑，防止因参数错误导致的调用失败。
*   **[Telegram 线程模式修复](https://github.com/HKUDS/nanobot/pull/2789)** (已合并):
    *   修复了在 Telegram DM 线程中，流式回复无法正确继承元数据，导致消息发送至错误话题的问题。
*   **[Kimi 模型推理内容支持恢复](https://github.com/HKUDS/nanobot/pull/2786)** (已合并):
    *   修复了 `reasoning_content` 和 `extra_content` 字段在之前的重构中意外丢失的问题，恢复了 Kimi 等思考型模型的完整输出支持。
*   **[Agent 交互增强](https://github.com/HKUDS/nanobot/pull/2790)** (已合并):
    *   新增 `ask_user` 工具，允许 Agent 在执行过程中暂停并向用户请求确认或更多信息，并支持 CLI 下的交互式菜单。

---

### 4. 社区热点
今日讨论热度最高的话题集中在资源限制与安全性方面：

*   **[#2343 Context Window Token 检查缺失](https://github.com/HKUDS/nanobot/issues/2343)** (15 评论)
    *   **核心诉求**: 用户反馈 Agent 在长对话中未正确检查上下文窗口限制，导致请求 Token 数超过模型上限（32768）而报错。
    *   **影响**: 这是导致 Agent 无响应的核心原因之一，目前已有 #2638 提及相关影响，急需修复。
*   **[#2760 重试放大风险](https://github.com/HKUDS/nanobot/issues/2760)** (9 评论)
    *   **核心诉求**: 讨论应用层重试与 SDK 层重试叠加时，可能导致上游负载激增 3 倍的问题。社区正在探讨更合理的重试策略。
*   **[#2784 Exec 工具的内网访问限制](https://github.com/HKUDS/nanobot/pull/2784)** (PR)
    *   **核心讨论**: 针对 SSRF 防护过于严格导致 `localhost` 和 Tailscale 网段访问被阻断的问题，该 PR 提出了 `allowInternalUrls` 配置选项，平衡了安全性与易用性。

---

### 5. Bug 与稳定性
今日报告的 Bug 涉及安装、核心逻辑及 UI 表现，部分已有对应修复方案：

*   **[严重] 安装失败: python-olm 构建错误** ([#2802](https://github.com/HKUDS/nanobot/issues/2802))
    *   最新版本导致 Matrix E2E 加密依赖 `python-olm` 无法构建，阻碍了部分用户的使用。
*   **[中等] 心跳任务死循环** ([#2797](https://github.com/HKUDS/nanobot/issues/2797))
    *   Heartbeat 服务触发后，任务状态未正确从 "Active" 移至 "Completed"，导致任务重复执行。关联 PR [#2801](https://github.com/HKUDS/nanobot/pull/2801) 已提交修复。
*   **[中等] Session 历史无限增长** ([#2638](https://github.com/HKUDS/nanobot/issues/2638))
    *   当记忆合并系统失败时，Session 历史记录无硬限制增长，导致 Agent 最终无响应。这是长期稳定性的一大隐患。
*   **[低] Telegram 升级后显示 "Thinking"** ([#2795](https://github.com/HKUDS/nanobot/issues/2795))
    *   升级后 Telegram 端会显式展示 "User is asking..." 的思考过程，而非仅展示最终结果，属于 UI 行为变更（可能是 Side-effect）。

---

### 6. 功能请求与路线图信号
用户提出的新功能反映了 Agent 向更智能、更集成的方向发展：

*   **统一会话** ([#2798](https://github.com/HKUDS/nanobot/issues/2798))
    *   请求在 Discord、Telegram 等不同平台间共享同一个会话上下文，实现跨平台无缝对话体验。
*   **多模态专用 Provider** ([#2339](https://github.com/HKUDS/nanobot/issues/2339))
    *   请求为视觉能力配置专用的 Provider/Model，与文本推理模型解耦（例如用 GPT-4 处理文本，Claude 处理视觉）。
*   **本地服务集成支持** ([#2796](https://github.com/HKUDS/nanobot/issues/2796))
    *   SSRF 防护目前阻止了所有内网访问，导致本地自动化工具（如 PinchTab 浏览器）无法工作。PR [#2784](https://github.com/HKUDS/nanobot/pull/2784) 正在解决此问题。
*   **速率限制智能切换** ([#2800](https://github.com/HKUDS/nanobot/pull/2800))
    *   新 PR 提议在遇到 Provider 429 限流时，立即切换到备用 Provider，而不是重试当前 Provider，以提高高并发下的可用性。

---

### 7. 用户反馈摘要
*   **高度评价稳定性**: 用户 [bigsinger](https://github.com/HKUDS/nanobot/issues/2774) 对比了 NanoBot 与 OpenClaw，指出 NanoBot 在 Windows 下“非常稳定，完爆 OpenClaw”，后者频繁崩溃甚至中毒，体现了 NanoBot 在个人助手领域的鲁棒性。
*   **工具调用困惑**: 用户 [sqx094](https://github.com/HKUDS/nanobot/issues/2775) 报告 Agent 仅输出文字而不实际调用 `spawn` 工具执行任务，提示了 Prompt 遵循性或工具解析存在潜在问题。
*   **文档与代码不一致**: 用户 [tycoi2005](https://github.com/HKUDS/nanobot/issues/2799) 指出 README 中提到的 `groupAllowFrom` 配置项在代码中不存在，导致配置困惑。

---

### 8. 待处理积压
*   **[#2343](https://github.com/HKUDS/nanobot/issues/2343)**: *Context Window Check* - 涉及核心对话逻辑，自 3 月 22 日开启至今未关闭，严重影响长对话场景。
*   **[#2339](https://github.com/HKUDS/nanobot/issues/2339)**: *Dedicated Vision Provider* - 多模态架构的重要改进，尚未有明确的合并 PR。
*   **[#1164](https://github.com/HKUDS/nanobot/pull/1164)**: *Vietnamese README* - 自 2 月 25 日开启的文档翻译 PR，仍在等待审查，提醒维护者关注社区贡献的及时处理。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-05)

分析师：AI 智能体与个人助手领域观察员
日期：2026-04-05

---

### 1. 今日速览
Zeroclaw 项目今日处于**高活跃度**状态。过去 24 小时内共产生了 **54 条代码提交与讨论记录**（14 条 Issues，40 条 PRs），显示出社区强大的开发热情。
今日核心焦点集中在**平台兼容性与稳定性修复**：针对 Windows 平台的用户入驻 阻断问题出现了 3 个修复方案，同时针对 WhatsApp 自聊模式、Bedrock 及 DeepSeek 等 Provider 的集成问题也迅速得到了响应。
尽管活跃度高，但**代码合并率较低**（仅 4/40），项目面临一定程度的 Review 积压，需要注意维护核心开发者的精力瓶颈。

---

### 2. 版本发布
*暂无新版本发布。*

---

### 3. 项目进展
今日虽无正式版本发布，但大量 PR 正在积极推进项目的功能边界与稳定性修复：

*   **Windows 体验大幅改进**：
    *   针对 `fsync` 导致的 "Access Denied" 问题，社区提交了两个修复 PR (#5296, #5286)，试图通过条件编译或重写逻辑来解决 NTFS 文件系统的兼容性难题。
*   **通道与连接修复**：
    *   PR #5297 修复了 WhatsApp 在 `self_chat_mode` 下回复丢失的问题。
    *   PR #5174 补全了 Matrix 作为心跳目标的支持。
*   **核心功能增强**：
    *   PR #5265 引入了 Tauri 桌面应用，节点持久化 将允许节点在网关重启后存活，这是迈向长期运行代理的重要一步。
    *   PR #5295 为代理模式 增加了事件流日志，极大地提升了可观测性。

---

### 4. 社区热点
今日讨论热度最高的议题集中在**端侧模型体验**和**系统引导流程**：

*   **#5272 [Feature]: Binary size & compile time reduction**
    *   🔥 **热度**: 新开 Issue 即引发关注。
    *   📝 **内容**: 核心贡献者 `singlerider` 发起针对二进制体积和编译时间的优化研究。
    *   💡 **分析**: 反映了社区对 Zeroclaw 作为一个轻量级、高频迭代的 Agent 工具的期待，特别是边缘设备用户对编译效率的痛点。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5272)

*   **#5268 [Bug]: Context compressor drops tool_call_id...**
    *   🔥 **热度**: 涉及 DeepSeek API 集成。
    *   📝 **内容**: 在长对话上下文压缩时，`tool_call_id` 被错误移除，导致 DeepSeek API 报错 400。
    *   💡 **分析**: 随着 DeepSeek 等高性价比模型的流行，确保与其 API 严格兼容成为刚需，该 Issue 直接指出了上下文压缩逻辑的漏洞。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5268)

*   **#4657 [OPEN] Matrix channel: friction tracker**
    *   🔥 **热度**: 持续更新，评论数最多 (9)。
    *   📝 **内容**: 追踪 Matrix 通道 E2EE 加密和 OTK 重试循环的摩擦点。
    *   💡 **分析**: 这是一个长期跟进的 Issue，显示出 Zeroclaw 在去中心化通信集成上的深入尝试，但也面临复杂的实现挑战。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)

---

### 5. Bug 与稳定性
今日报告的 Bug 涉及多个平台和 Provider，按严重程度排序：

1.  **[S0 - Critical] 数据丢失/安全风险**
    *   **#5255**: Windows 用户报告在 `onboard` 最后一步出现 "Access is denied" 错误，可能导致工作区状态不一致。
    *   **状态**: 已有修复 PR #5296 和 #5286。

2.  **[S1 - Workflow Blocked] 核心功能阻断**
    *   **#1984**: `compact_context` 默认为 false 导致守护进程上下文溢出且无法恢复。此 Issue 现已关闭。
    *   **#5258**: Windows `fsync` 元数据失败 (Error 5)，阻止用户完成初始化。
    *   **#4851**: GitHub Copilot Provider 配置缺失文档或工作流。

3.  **[S2 - Degraded] 降级行为**
    *   **#5285**: 使用 GLM-5 模型时，思维链 被错误合并到最终消息中，未经过滤。
    *   **状态**: 已有修复 PR #5298 (修复流式响应中的 `reasoning_content` 泄露)。
    *   **#5260**: WhatsApp 在 `self_chat_mode` 下不发送回复 (已修复 PR #5297)。
    *   **#5269**: 安装文档缺失，建议使用 `cargo binstall`。

4.  **[Provider Errors]**
    *   **#5289**: Bedrock Provider 错误发送 `API_KEY` 为 `x-api-key` 头，导致 403 错误。

---

### 6. 功能请求与路线图信号
从新开 Issues 可以窥见用户对新场景的渴望：
*   **本地优先模式**: Issue #5287 请求为小模型引入 "Local-First Mode"，要求精简 Prompt、移除工具调用以防止指令泄露。这表明部分用户倾向于使用 Zeroclaw 作为一个轻量级的本地推理引擎，而非全能 Agent。
*   **Dashboard 增强**: PR #5290 和 #5291 正在补全 Dashboard 的 `/api/channels` 接口，说明 Web 管理界面正在完善中。

---

### 7. 用户反馈摘要
*   **痛点 - Windows 体验**: 多名用户反馈在 Windows 上 `zeroclaw onboard` 容易卡死在最后一步，报错 "Access Denied"。这表明 Rust 的跨平台文件系统操作在 Windows 权限模型下仍需打磨。
*   **痛点 - Provider 配置混乱**: 用户对于如何配置 GitHub Copilot、NVIDIA API 以及 Bedrock 感到困惑，经常出现 Header 错误或密钥错误 (#4851, #5289)。
*   **好评 - Android/Termux 支持**: 尽管有 Issue #5271 报告了 Torch 兼容性问题（已迅速关闭），但能看到有用户尝试在 Android Termux 环境下运行 PyTorch 代理，证明了 Zeroclaw 极强的可移植性潜力。

---

### 8. 待处理积压
*   **Review 压力**: 当前有 **36 个 PR 处于待合并状态**，部分涉及核心模块 (如 #5265 Tauri Desktop App)。
*   **长期 Issue**: **#4657 (Matrix Friction Tracker)** 仍处于 Open 状态，标记了多个 "Preferred PRs" 等待 Review，这暗示 Matrix 集成的高级功能（如完美的 E2EE）可能还需要较长时间才能稳定。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-05)

## 1. 今日速览
NanoClaw 项目今日处于**高度活跃**状态，过去 24 小时内处理了 20 条 PR 更新和 4 条 Issue 讨论显示出社区强大的开发热情。代码层面主要聚焦于**多模态运行时支持**（OpenAI Codex, OpenCode）和**多平台渠道扩展**（Matrix, Signal, Telegram），显示出项目正致力于摆脱对单一 Anthropic 依赖的架构转型。同时，关于安全性（容器权限限制、安装加固）和 OAuth 计费变动的反馈成为社区关注的焦点，用户对于成本敏感性和系统安全性的意识正在显著提升。

---

## 2. 版本发布
今日无新版本发布。

---

## 3. 项目进展
今日虽无新版本发布，但代码仓库正通过合并和审查 PR 进行快速迭代：

*   **维护与重构**：成功合并了 `PR #1634` 和 `#1633`（作者：gavrielc），这些 PR 看起来是迁移技能或整理代码结构的基础性工作，为后续功能开发扫清障碍。同时，`PR #1627` (Issue) 已关闭，确认了上游 Fork 的 Rebase 工作已完成，这是整合上游代码的重要前置步骤。
*   **会话管理优化**：PR #1632 (作者：gavrielc) 引入了自动清理陈旧会话 Artifacts（JSONL, 日志等）的功能，这将有效减少磁盘占用，提升长期运行的稳定性。
*   **安全加固**：今日提交了多个关键的安全相关 PR，正在等待合并：
    *   [#1630](https://github.com/qwibibitai/nanoclaw/pull/1630): 将 agent-runner 源码挂载为只读，防止具有高权限的 Agent 修改自身代码（由 garagon 提出）。
    *   [#1605](https://github.com/qwibibitai/nanoclaw/pull/1605): 引入了确定性的安全策略引擎，替代基于 Prompt 的软限制，实现了用户准入控制和工具限制（由 ebenezer-isaac 提出）。
    *   [#1629](https://github.com/qwibibitai/nanoclaw/pull/1629): 修复 OneCLI 在公网服务器上默认暴露敏感端口（PostgreSQL/Gateway）的严重配置问题（由 eplisov 提出）。

---

## 4. 社区热点
*   **[#80 - Support other runtimes (Gemini, OpenCode, etc.)](https://github.com/qwibibitai/nanoclaw/issues/80)**
    *   **热度**：👍 56，评论 31
    *   **分析**：这是目前最受关注的 Issue。由于 Anthropic 开始封锁使用第三方工具（如 OpenClaw/NanoClaw）的订阅账户，用户迫切希望引入 OpenCode、Gemini 等替代方案以避免封号风险。该 Issue 今日再次活跃，直接催生了 `PR #963` (OpenAI Codex) 和 `PR #1628` (OpenCode) 的提交。

*   **[#1620 - OAuth token auth bills as extra usage](https://github.com/qwibibitai/nanoclaw/issues/1620)**
    *   **热度**：新开 Issue，更新频繁
    *   **分析**：用户反馈 Anthropic 修改了计费策略，通过 OAuth 接入的第三方工具不再消耗订阅额度，而是按“额外使用”计费。这直接影响用户钱包，社区强烈呼吁文档应明确推荐使用 API Key 而非 OAuth。

---

## 5. Bug 与稳定性
*   **[高危] 公网服务器端口暴露 (PR #1629)**
    *   **描述**：OneCLI 安装程序生成的 `docker-compose.yml` 默认将数据库和网关端口绑定到 `0.0.0.0`，绕过了 UFW 防火墙，且使用了默认凭据。
    *   **状态**：修复 PR 已提交，待合并。
*   **[中危] Agent 可修改自身源码 (PR #1630)**
    *   **描述**：容器内的 agent runner 源码目录被挂载为读写，Agent 可能利用 `bypassPermissions` 修改宿主机上的代码，造成持久化后门或逻辑篡改。
    *   **状态**：修复 PR 已提交，待合并。
*   **[功能缺陷] 消息管道死锁 (PR #1623)**
    *   **描述**：当消息被管道传输到活动容器时，会导致 30 分钟的死锁。
    *   **状态**：修复 PR 已提交，待合并。
*   **[配置混乱] OAuth/Token 设置未文档化 (Issue #1608)**
    *   **描述**：从 API Key 切换到 OAuth 缺乏文档，且存在 `ANTHROPIC_API_KEY=placeholder` 注入陷阱。

---

## 6. 功能请求与路线图信号
*   **多引擎运行时**
    *   **需求**：支持 OpenAI Codex、OpenCode 等 Claude 的替代品。
    *   **信号**：PR #963 (OpenAI Codex SDK) 和 PR #1628 (OpenCode SDK) 已提交。这表明项目正在从单纯的 "Claude Wrapper" 转向 "Multi-LLM Agent Platform"。
*   **更多通讯渠道**
    *   **需求**：扩展支持 Matrix、Signal、QQ、Mattermost 等平台。
    *   **信号**：
        *   **Matrix** (PR #1624): 实现了全 E2EE 支持。
        *   **Signal** (PR #1121): 基于 signal-cli 的集成。
        *   **Telegram** (PR #1626): 增加了 Topic 隔离功能。
        *   **QQ/NapCat** (PR #821): 基于 OneBot 11 的集成。
*   **增强记忆系统**
    *   **信号**：PR #1283 提议升级为混合检索（BM25+Vector）的记忆引擎，以提升关键词查询的准确性。

---

## 7. 用户反馈摘要
*   **痛点 - 成本与封号风险**：用户对 Anthropic 严格的 API 政策感到焦虑（Issue #80, #1620）。OAuth 计费模式的变更使得继续使用 NanoClaw 的成本增加，用户希望项目能尽快支持更开放或更廉价的模型（如 OpenCode）。
*   **痛点 - 配置复杂**：多位用户反映认证流程（特别是从 API Key 切换到 OAuth）缺乏文档且容易出错，容易被 `placeholder` 环境变量误导（Issue #1608）。
*   **满意点 - 架构灵活性**：开发者和高级用户非常赞赏“Skills”架构，今日涌现的大量 PR（Sentry, Signal, Matrix 等）表明社区正在积极丰富其生态功能。

---

## 8. 待处理积压
*   **Issue #1627 (Refactor/Rebase)**: 虽然标记为 CLOSED，但其关联的一系列 PR（#14-17）可能仍需跟进，确保上游代码的顺利合并。
*   **PR #1121 (Signal Channel)**: 自 3 月中旬提交以来一直处于 "Needs Review" 状态，这是一个高需求的功能，建议维护者优先审查。
*   **PR #546 (Mattermost Channel)**: 状态为 "Blocked"，需关注阻塞点，防止长期停滞。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-04-05)

## 1. 今日速览
NullClaw 项目今日处于**极高活跃度**状态，显示出强劲的开发迭代势头。过去 24 小时内处理了大量技术债务，共关闭了 11 个 PR 和 4 个 Issues，远超日常平均水平。核心进展集中在系统稳定性修复（解决 Shell 挂起和 Docker 权限问题）、可观测性增强（OTEL）以及多模态/A2A 协议的底层支持。尽管合并了大量代码，今日也暴露了 3 个新的 Bug（涉及配置生成和兼容性）及 2 个功能请求，维护者需关注新版本引入的配置格式化问题。

## 2. 版本发布
**无新版本发布**
*虽然合并了众多功能与修复，截至目前尚未打出新版本的 Release tag。建议用户密切关注 master 分支或等待正式发布公告以获取这些修复。*

## 3. 项目进展
今日合并的代码显著提升了系统的健壮性与企业级特性：
*   **可观测性飞跃**: [#693](https://github.com/nullclaw/nullclaw/pull/693) 增强了 OpenTelemetry (OTEL) 支持，新增渠道归属、委托追踪和技能加载耗时分析，大幅提升了复杂链路下的调试能力。
*   **交互式命令稳定性修复**: [#673](https://github.com/nullclaw/nullclaw/pull/673) 解决了导致网关挂起的致命 Bug。此前当 Bot 被要求运行 `htop` 等交互式命令时会无限等待，现已通过应用超时配置和忽略子进程 stdin 彻底修复。
*   **Shell 沙箱隔离**: [#678](https://github.com/nullclaw/nullclaw/pull/678) 实现了 OS 级别的沙箱隔离，`security.sandbox` 配置现在正式生效，增强了命令执行的安全性。
*   **网关配置灵活性**: [#687](https://github.com/nullclaw/nullclaw/pull/687) 将 HTTP Body 大小限制和请求超时改为可配置项，为运行多模态工作负载（如图像传输）扫清了障碍。
*   **多模态支持**: [#686](https://github.com/nullclaw/nullclaw/pull/686) 为 A2A 协议引入了端到端的多模态（图像）支持，包括 Agent Card 能力声明和 Vision Probe。
*   **消息防抖**: [#676](https://github.com/nullclaw/nullclaw/pull/676) 实现了入站消息防抖机制（默认 3000ms），优雅解决了“妻子发送多条消息导致 Bot 乱回复”的用户痛点。

## 4. 社区热点
*   **[#618 [Feature] Allow bot to wait for a stream of messages](https://github.com/nullclaw/nullclaw/issues/618)**
    *   **热度**: ⭐ 社区趣味需求，今日被 [#676](https://github.com/nullclaw/nullclaw/pull/676) 关闭并解决。
    *   **分析**: 用户 `ats-bcon` 提出为了家庭和谐（"wife safe solution"），希望 Bot 能等待连续消息流输入完毕再统一回复，而不是对每条短信单独触发。这反映了真实用户场景中对“上下文完整性”的强烈需求，开发团队通过防抖机制完美回应了这一诉求。
*   **[#690 [Enhancement] OTEL Enhancements](https://github.com/nullclaw/nullclaw/issues/690)**
    *   **热度**: 🔥 企业级核心需求，今日被 [#693](https://github.com/nullclaw/nullclaw/pull/693) 关闭。
    *   **分析**: 追踪消息来源渠道和交付渠道是生产环境监控的关键。该功能的落地表明 NullClaw 正向更成熟的 B2B/企业级场景迈进。

## 5. Bug 与稳定性
今日报告了 3 个新 Bug，严重程度不一，其中包含潜在的 Docker 环境配置回归风险：
*   **[高优先级] [#765 [Bug] v2026.3.21: onboard --interactive generates malformed config.json](https://github.com/nullclaw/nullclaw/issues/765)**
    *   **现象**: 交互式向导生成的 `config.json` 被压缩成一行，可读性极差且可能影响某些解析器。
    *   **状态**: 待处理。
*   **[中优先级] #691 [CLOSED] cron.zig ignores NULLCLAW_HOME**
    *   **现象**: Docker 环境下 `cron` 指令报错 `AccessDenied`，因为未正确读取环境变量。
    *   **状态**: ✅ 已由 [#692](https://github.com/nullclaw/nullclaw/pull/692) 修复。
*   **[中优先级] #644 [CLOSED] Gateway hangs on interactive commands**
    *   **现象**: 运行 `htop` 导致网关挂死。
    *   **状态**: ✅ 已由 [#673](https://github.com/nullclaw/nullclaw/pull/673) 修复。
*   **[兼容性] [#766 [Bug] Custom OpenAI-compatible provider fails with 404](https://github.com/nullclaw/nullclaw/issues/766)**
    *   **现象**: 当自定义提供商不支持标准的 `/chat/completions` 端点时，系统无法正确降级处理，导致 404 错误。

## 6. 功能请求与路线图信号
*   **AG-UI 协议支持**: [#768](https://github.com/nullclaw/nullclaw/issues/768) 请求将 AG-UI 协议作为原生网关端点。鉴于项目刚刚合并了 A2A 和多模态支持，新增这一类 UI 流式协议（SSE）符合项目扩展连接能力的路线图方向。
*   **Anthropic 原生支持**: [#767](https://github.com/nullclaw/nullclaw/issues/767) 用户询问对 Anthropic 原生 API Key 的支持情况（非 Pro Plan）。这提示开发者可能需要简化 LLM 提供商的配置流程。

## 7. 用户反馈摘要
*   **正面反馈**: 用户非常喜欢 **"Wife Safe Solution"** (消息流等待)，这表明 NullClaw 在即时通讯场景下的用户体验细节处理备受期待。
*   **痛点**:
    *   Docker 部署中的文件权限和路径解析（`NULLCLAW_HOME`）是易错点，需要稳健的默认配置支持。
    *   配置文件的可读性（Issue #765）直接影响了用户的二次开发与调试体验。
    *   非标准 LLM 提供商的兼容性（如 Infini-AI）仍然存在摩擦。

## 8. 待处理积压
*   **[OPEN] [#675 fix(gemini-cli): align ACP handshake](https://github.com/nullclaw/nullclaw/pull/675)**
    *   该 PR 处于 Open 状态，旨在修复 Gemini CLI 0.34 的兼容性问题。虽然代码已提交，但尚未合并，可能需要额外的测试验证。
*   **[OPEN] 新 Issues 队列**:
    *   [#768](https://github.com/nullclaw/nullclaw/issues/768) (AG-UI 协议)
    *   [#767](https://github.com/nullclaw/nullclaw/issues/767) (Anthropic Key 支持)
    *   [#766](https://github.com/nullclaw/nullclaw/issues/766) (自定义端点兼容性)
    *   [#765](https://github.com/nullclaw/nullclaw/issues/765) (配置文件格式化)
    *   建议优先处理 #765（配置 Bug）和 #675（Gemini 兼容性 PR），以维护稳定性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

你好！我是 AI 智能体与个人 AI 助手领域的开源项目分析师。以下是 **IronClaw** 项目在 **2026-04-05** 的动态日报。

---

### 📅 IronClaw 项目日报 | 2026-04-05

#### 1. 今日速览
IronClaw 项目在过去 24 小时内呈现**极高活跃度**，主要表现为新功能的大规模构建和社区基础设施的演进。代码层面共有 **43 条 PR** 更新，其中近 72% 处于待合并状态，表明项目正处于快速迭代期。社区讨论主要集中在**多模态交互与平台集成**上，今天涌现了 Matrix 和 WeChat 等多个通道的集成方案，以及关于**Kubernetes 运行时**和**确定性工作流**的重要架构探讨。虽然没有新版本发布，但从 PR 规模来看，项目正在向**多 Agent 编排**和**企业级安全隔离**方向大步迈进。

---

#### 2. 版本发布
*   **当前状态**：过去 24 小时无新版本发布。
*   **备注**：尽管有大量 PR 更新，但未见新的 Release Tag，推测核心功能正在内部测试或集成验证阶段。

---

#### 3. 项目进展

尽管没有显示“已合并”的 PR，但以下处于活跃开发状态（OPEN）的重要 PR 正在定义项目的未来形态：

*   **[PR #1738] Agent Review & Routine Loop Integration**
    *   **进展**：持续开发中 (XL)。
    *   **内容**：正在构建 Routine（任务例程）结果回传给 Agent 循环的机制，引入了 `MessageSource` 枚举类型。这标志着 IronClaw 正在增强其“记忆”和“反思”能力，使 Agent 能根据任务执行结果进行自我修正。
    *   **链接**：[nearai/ironclaw#1738](https://github.com/nearai/ironclaw/pull/1738)

*   **[PR #1937] Structured Collections (Typed Storage)**
    *   **进展**：持续开发中 (XL)。
    *   **内容**：针对 Agent 工作空间引入类型化的 CRUD 工具，解决 Agent 无法可靠处理“购物清单”类结构化数据的痛点（防止文件碎片化或损坏）。
    *   **链接**：[nearai/ironclaw#1937](https://github.com/nearai/ironclaw/pull/1937)

*   **[PR #2019] Native Matrix Channel**
    *   **进展**：新提出 (XL, High Risk)。
    *   **内容**：添加原生 Matrix 协议支持，包括端到端加密 (E2EE) 和持久化线程 ID。这将极大提升 IronClaw 在隐私通信领域的落地能力。
    *   **链接**：[nearai/ironclaw#2019](https://github.com/nearai/ironclaw/pull/2019)

*   **[PR #1734] Workspace Entities & Sharing**
    *   **进展**：持续开发中 (XL, High Risk)。
    *   **内容**：实现跨工作空间共享和成员管理，将用户隔离从隐式转为显式的 DB 实体。
    *   **链接**：[nearai/ironclaw#1734](https://github.com/nearai/ironclaw/pull/1734)

---

#### 4. 社区热点

今日讨论焦点集中在 **生态集成** 和 **架构灵活性**：

*   **热门话题 1：微信生态集成 (PR #1666)**
    *   **详情**：一个正在进行中的大型 PR，旨在为 IronClaw 添加第一方 WeChat WASM 通道，支持扫码登录、长轮询和消息推送。
    *   **分析**：这表明社区对将 AI Agent 接入主流中文社交平台有强烈需求，且倾向于通过 WASM 实现安全隔离。
    *   **链接**：[nearai/ironclaw#1666](https://github.com/nearai/ironclaw/pull/1666)

*   **热门话题 2：ZK 证明与 0G 集成 (PR #2016, #2021)**
    *   **详情**：两个由新贡献者提出的 PR，涉及 `proof_of_claw` 和 `0g ironclaw integration`。虽然在今日被关闭，但反映出社区对于 **Agent 可验证执行** 和 **去中心化存储** 的前沿探索。
    *   **链接**：[nearai/ironclaw#2016](https://github.com/nearai/ironclaw/pull/2016)

---

#### 5. Bug 与稳定性

今日报告的 Bug 数量较少，但触及核心执行引擎：

*   **[严重] Engine v2 环境变量失效 (Issue #2010)**
    *   **描述**：`AGENT_AUTO_APPROVE_TOOLS=true` 在 Engine v2 模式下被忽略，导致工具每次都需要人工确认，破坏了自动化体验。
    *   **根因**：提交 `4c9a985b` 引入的 Thread-Capability 统一变更导致。
    *   **链接**：[nearai/ironclaw#2010](https://github.com/nearai/ironclaw/issues/2010)

*   **[中等] Prod 环境例程执行失败 (Issue #1996)**
    *   **描述**：在 Production 环境中创建的 Routine 在运行时失败，报错 "Tools Disabled"。Agent 在 Routine 执行上下文中无法调用工具。
    *   **链接**：[nearai/ironclaw#1996](https://github.com/nearai/ironclaw/issues/1996)

*   **[已修复] Engine v2 动作暴露缺失 (Issue #2011)**
    *   **描述**：Engine v2 聊天中 Agent 可以推理 `mission_create` 但无法调用，因为该动作未暴露给线程。
    *   **状态**：已关闭。
    *   **链接**：[nearai/ironclaw#2011](https://github.com/nearai/ironclaw/issues/2011)

---

#### 6. 功能请求与路线图信号

用户需求指向**非桌面/云原生场景**和**流程自动化**：

*   **[Feature] Kubernetes 运行时支持 (Issue #2023)**
    *   **诉求**：放弃硬编码的 Docker 依赖，支持 Kubernetes 作为隔离层，解决非桌面环境和容器化部署中的 fragility 问题。
    *   **信号**：这是 IronClaw 走向大规模云端部署的必经之路。
    *   **链接**：[nearai/ironclaw#2023](https://github.com/nearai/ironclaw/issues/2023)

*   **[Feature] 确定性 SOP 引擎 (Issue #2017)**
    *   **诉求**：仅靠安全的工具不足以处理复杂的金融审计或部署任务，需要引入“标准作业程序（SOP）”引擎，确保 Agent 按照确定性的路径执行。
    *   **链接**：[nearai/ironclaw#2017](https://github.com/nearai/ironclaw/issues/2017)

*   **[Feature] 基于 DID 的默认安全编排 (Issue #2018)**
    *   **诉求**：将 Agent-to-Agent (A2A) 通信设为默认能力，利用 DID 和 WASM 隔离来构建原生的“Agent 团队”。
    *   **链接**：[nearai/ironclaw#2018](https://github.com/nearai/ironclaw/issues/2018)

---

#### 7. 用户反馈摘要

*   **痛点**：用户在尝试构建复杂 Agent 团队时，感觉当前的 `tools.agentToAgent.enabled` 机制是“Opt-in（需手动开启）”，造成了摩擦（基于 #2018 的反馈）。
*   **使用场景**：**长运行实例**。用户明确指出，对于非桌面用途（如服务器部署），Docker-in-Docker 是不可靠的，迫切需要更底层的容器调度支持（基于 #2023）。
*   **稳定性抱怨**：Engine v2 的引入似乎带来了一些配置上的回归，特别是环境变量处理的不一致 (#2010)。

---

#### 8. 待处理积压

提醒维护者关注以下长期未决的大型 PR，可能需要代码审查或决策：

*   **PR #1470** (Open since 2026-03-20): Routine 通知标准化。
    *   **建议**：这是一个用户体验改进 PR，建议尽快合并以提升 Routine 反馈的友好度。
    *   **链接**：[nearai/ironclaw#1470](https://github.com/nearai/ironclaw/pull/1470)

*   **PR #1591** (Open since 2026-03-23): 审批流程的线程安全加固 (TOCTOU)。
    *   **建议**：涉及安全漏洞修复（TOCTOU 竞争条件），属于高优先级。
    *   **链接**：[nearai/ironclaw#1591](https://github.com/nearai/ironclaw/pull/1591)

---
**分析师总结**：IronClaw 正处于从“单体 AI 助手”向“多 Agent 平台”转型的关键时期。虽然 Engine v2 带来了一些配置上的不稳定，但社区在 WASM 通道集成和结构化存储方面的贡献非常活跃，显示出强大的生态系统构建潜力。建议重点关注 Engine v2 的 Bug 修复和 Kubernetes 运行时的支持请求。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-05)

**分析师**：AI 智能体与开源助手专家  
**数据源**：github.com/netease-youdao/LobsterAI

---

### 1. 今日速览
LobsterAI 项目在过去 24 小时内呈现出极高的活跃度，主要聚焦于**用户体验修复**与**交互细节优化**。社区共提交了 **15 个 PR** 和 **6 个 Issues**，核心开发团队响应迅速，针对用户反馈的“数据静默丢失”问题进行了集中爆发式的修复（连续提交 5 个关联 PR）。虽然今日无新版本发布，但从代码提交来看，项目正在为下一个稳定版本积蓄力量，重点解决 UI 交互中的防错机制。

### 2. 版本发布
**无新版本发布**

### 3. 项目进展
今日合并/关闭的重要进展主要集中在稳定性与界面优化上，项目在防错机制和 UI 一致性方面迈进了重要一步：

*   **多实例 IM 校验 (PR #1464)**: 新增了对钉钉、飞书、QQ 多实例配置的重复性校验，防止用户创建同名机器人或重复添加凭证，提升了配置健壮性。
    *   *链接*: [netease-youdao/LobsterAI#1464](https://github.com/netease-youdao/LobsterAI/pull/1464)
*   **微信插件容错 (PR #797)**: 修复了当 `openclaw-weixin` 插件未安装时，网关因校验配置失败而陷入重启循环的问题，提高了系统的鲁棒性。
    *   *链接*: [netease-youdao/LobsterAI#797](https://github.com/netease-youdao/LobsterAI/pull/797)
*   **Skills 体验增强 (PR #1480, #1479)**: 安装技能后增加 Toast 提示并自动刷新列表；同时拦截了重复文件夹的安装，解决了 `name-1`, `name-2` 冗余文件夹的问题。

### 4. 社区热点
今日热点集中在**防止用户数据意外丢失**这一核心诉求上，用户 MaoQianTu 系统性地报告了一系列交互体验问题，引发了社区和开发团队的高度重视。

*   **热点话题：交互防错机制缺失**
    *   **内容**：用户报告了多起因操作导致输入内容或配置静默丢失的 Bug（如重新编辑历史消息覆盖当前输入、弹窗关闭丢失配置）。
    *   **反应**：开发团队反应极为迅速，针对每个报告均已提交对应的 Fix PR。
    *   **链接**: [Issue #1472](https://github.com/netease-youdao/LobsterAI/issues/1472), [Issue #1470](https://github.com/netease-youdao/LobsterAI/issues/1470)

### 5. Bug 与稳定性
今日报告的 Bug 数量较多，但覆盖范围明确，主要集中在输入逻辑和弹窗交互。值得庆幸的是，所有高危 Bug 均已有对应的修复方案。

*   **[严重] 输入框内容静默丢失 (已修复)**
    *   **问题**：点击“重新编辑”会直接覆盖输入框中未发送的内容；快速切换会话会导致草稿因 debounce 机制未及时保存而丢失。
    *   **状态**：已提交 PR [#1477](https://github.com/netease-youdao/LobsterAI/pull/1477) 和 [#1476](https://github.com/netease-youdao/LobsterAI/pull/1476)，增加了覆盖确认弹窗和卸载前的同步保存逻辑。
*   **[中等] 配置面板/弹窗关闭丢失数据 (已修复)**
    *   **问题**：MCP服务器配置、Agent 设置、创建 Agent 弹窗在点击 ESC 或关闭按钮时，不提示保存，导致填写内容丢失。
    *   **状态**：已提交 PR [#1475](https://github.com/netease-youdao/LobsterAI/pull/1475), [#1474](https://github.com/netease-youdao/LobsterAI/pull/1474), [#1473](https://github.com/netease-youdao/LobsterAI/pull/1473)，统一增加了 `isDirty` 检查和确认对话框。
*   **[中等] 定时任务“幽灵”会话 (已修复)**
    *   **问题**：删除的定时任务重启后会以空会话形式复现。
    *   **状态**：已提交 PR [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465)，修复了删除流程中本地 SQLite 数据未清理的漏洞。

### 6. 功能请求与路线图信号
从用户反馈和 PR 动向中，可以探测到以下产品演进方向：

*   **Agent 协作与多模型绑定**：Issue [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) 提出希望每个 Agent 能绑定独立的模型，并引入“Agent 小组”或“Manager”角色来协调多 Agent 协作。这表明用户对 LobsterAI 的需求正从“单点对话”向“团队协作”演进。
*   **UI/UX 细节打磨**：
    *   **macOS 适配**：PR [#1467](https://github.com/netease-youdao/LobsterAI/pull/1467) 修复了 macOS 下快捷键显示为 `Ctrl` 而非 `Cmd` 的问题，体现了对 Mac 用户体验的重视。
    *   **长文本溢出**：PR [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463) 解决了长标题在弹窗中溢出的问题。

### 7. 用户反馈摘要
*   **痛点**：用户非常在意**草稿和配置的保存**，多次强调“静默丢失”带来的挫败感。这表明用户在 LobsterAI 中进行大量的长文本编写和复杂的配置工作，任何数据的意外丢失都不可接受。
*   **对比**：有用户在 Issue 中提到阿里的 hiclaw，认为 LobsterAI 的交互体验更优，但在多 Agent 协作能力上还有提升空间。

### 8. 待处理积压
目前代码库中暂无发现长期积压未响应的严重 Issue，今日新提的 Issues 均在 24 小时内得到了处理。但建议维护者关注以下改进点：
*   **内存泄漏清理**：PR [#1478](https://github.com/netease-youdao/LobsterAI/pull/1478) 指出 `CopyButton` 组件存在卸载后定时器未清理的风险，建议优先合并以避免长期运行带来的性能问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报：2026-04-05

## 1. 今日速览
Moltis 项目在 2026 年 4 月 5 日处于**高活跃度开发状态**，主要集中在功能扩展与 Bug 修复阶段。过去 24 小时内共新增 6 个 Issues 和 2 个 Pull Requests，目前尚无新版本发布，显示核心团队正处于代码整合与密集测试期。今日社区反馈主要集中在**模型提供商配置**（Provider Configuration）的易用性缺陷以及多模态支持（Vision）的缺失，表明用户对多模型并行管理有强烈需求。虽然未见代码合并记录，但新增的 MCP 协议支持和 Telegram 代理功能预示着架构层面的持续优化。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
尽管目前没有新的 PR 被合并，但项目在以下两个关键方向上取得了代码层面的进展：

*   **MCP 协议增强**：提交了 PR #555 ([Add streamable http mcp server support](https://github.com/moltis-org/moltis/pull/555))，旨在暴露可流式传输的 HTTP 支持。这将提升 Moltis 与 Model Context Protocol (MCP) 服务器交互时的实时性能。
*   **Telegram 通道灵活性**：提交了 PR #550 ([feat: support optional channel-level proxy for telegram](https://github.com/moltis-org/moltis/pull/550))，允许为 Telegram 频道单独配置代理。这解决了特定网络环境下不同频道的连接稳定性问题。

## 4. 社区热点
今日讨论热点主要集中在用户 **bsarkisov** 提出的一系列关于模型提供商管理的改进建议，反映了高级用户在配置复杂环境时的痛点：

*   **最活跃的反馈者**：用户 **bsarkisov** 在 24 小时内连续提交了 3 个相关的 Bug/Feature 报告。
    *   **[Issue #551](https://github.com/moltis-org/moltis/issues/551)**: "Detect all models doesn't detect all models"。用户指出“检测所有模型”功能实际上仅探查现有模型，而非发现新模型，这是一个严重的逻辑命名与功能不符问题。
    *   **[Issue #552](https://github.com/moltis-org/moltis/issues/552)**: 无法从同一提供商添加多个模型，系统强制单选。这限制了用户在同一 API Key 下切换不同模型（如 GPT-4 和 GPT-3.5）的便利性。
    *   **[Issue #554](https://github.com/moltis-org/moltis/issues/554)**: "Service unavailable" 错误。在使用有效 API Key 探查现有提供商时服务不可用，涉及服务探测逻辑的稳定性。
*   **跨平台问题**：**[Issue #549](https://github.com/moltis-org/moltis/issues/549)** 报告了 MacOS 桌面端在 Codex OAuth 流程上的失效，表明桌面客户端的认证链路存在特定平台下的兼容性问题。

## 5. Bug 与稳定性
今日报告的 Bug 均无对应的 Fix PR，需维护者优先关注：

*   **[高危] 多模态支持缺失** - **[Issue #556](https://github.com/moltis-org/moltis/issues/556)**
    *   **描述**：Mistral 和 Qwen 模型已支持视觉功能，但 Moltis 客户端未相应适配（不发送图片或处理多模态输入）。
    *   **影响**：导致用户无法利用这些模型的高级视觉能力。
*   **[中危] OAuth 流程中断** - **[Issue #549](https://github.com/moltis-org/moltis/issues/549)**
    *   **描述**：MacOS Desktop App 无法完成 Codex 的 OAuth 流程。
    *   **影响**：Mac 用户无法通过授权方式登录特定服务。
*   **[中危] 模型探测逻辑错误** - **[Issue #551](https://github.com/moltis-org/moltis/issues/551)** & **[Issue #554](https://github.com/moltis-org/moltis/issues/554)**
    *   **描述**：模型发现功能不生效，且探查有效 Key 时报错。这直接阻碍了用户配置新模型。

## 6. 功能请求与路线图信号
从今日的 Issues 和 PRs 中，可以推断出项目未来的几个潜在迭代方向：

*   **细粒度 Agent 控制**：**[Issue #553](https://github.com/moltis-org/moltis/issues/553)** 提议为每个 Agent 增加 Loopback（回环）和 Timeout（超时）设置。这表明项目正在向更精细化的多智能体管理方向发展。
*   **连接层增强**：**PR #550** 显示项目正在解决不同通道（如 Telegram）的网络代理需求，未来可能会支持更多通讯渠道的独立网络配置。
*   **提供商配置重构**：基于 **Issue #551** 和 #552 的反馈，下一版本极有可能重构“添加提供商”的 UI 和逻辑，以支持“多模型共存”和“真实的模型发现”。

## 7. 用户反馈摘要
*   **痛点**：用户对“提供商/模型”的配置界面感到困惑，主要集中在无法批量添加模型和探测功能不准确上。这表明当前的配置 UI 可能过于简化或后端逻辑不够健壮。
*   **场景**：用户倾向于使用单一 Provider 配置多个模型（Issue #552），并依赖系统自动发现功能来减少手动输入（Issue #551）。
*   **满意度**：目前关于 MacOS 端和 Model Probing 的负面反馈较多，可能会影响用户对新版本稳定性的信心。

## 8. 待处理积压
*   **长期未解决**：虽然 Issue #549 (MacOS OAuth) 创建于 2 天前但已持续有 2 天未修复，且今日有更新，建议优先处理以改善桌面端体验。
*   **关联 Issue**：**PR #550** 关联了 **[Issue #548](https://github.com/moltis-org/moltis/issues/548)**，建议维护者在合并 PR 的同时确认该 Issue 是否彻底解决。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-05)

**分析师**: AI 智能体与个人助手领域观察员
**数据来源**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

### 1. 今日速览
今日 CoPaw 项目处于**极高活跃度**状态。社区贡献热情高涨，仅过去 24 小时内就新增了 22 条 Issues 和 15 条 PR，其中包含多个来自新贡献者的首次提交。项目正紧锣密鼓地推进 **v1.0.2** 版本的迭代，重点解决了 **Docker 环境网络**、**本地模型更新** 以及 **多渠道集成**（WhatsApp, QQ）的问题。虽然社区讨论热烈，但也暴露了 Gemma4 模型兼容性、本地模型配置解析以及 GUI 交互体验等方面的稳定性问题，需要维护团队在后续版本中予以重视。

---

### 2. 版本发布
今日暂无正式 Release 发布，但项目已合并了版本号预发布的 PR `#2942`，标志着 **v1.0.2b1** 测试版准备工作已启动。

---

### 3. 项目进展
今日共有 **8 条 PR** 成功合并，显著扩展了 CoPaw 的连接能力和稳定性：

*   **【生态连接】扩展主流即时通讯渠道**
    *   **feat(channels): add WhatsApp channel via neonize** ([#2928](https://github.com/agentscope-ai/CoPaw/pull/2928)): 虽然后续有重构 PR (#2946)，但 #2928 的合并在历史上首次引入了基于 `neonize` 的 WhatsApp 集成支持，标志着 CoPaw 向主流社交软件生态迈出重要一步。
    *   **feat(channels): add OneBot v11 channel** ([#2870](https://github.com/agentscope-ai/CoPaw/pull/2870)): 引入了对 NapCat/go-cqhttp 等协议的支持，极大地降低了 QQ 机器人的接入门槛，连接了庞大的年轻用户群体。
    *   **feat(channels): support [SPLIT] delimiter** ([#2940](https://github.com/agentscope-ai/CoPaw/pull/2940)): 实现了单次响应发送多条独立消息的机制，使 Agent 交互更贴近人类自然对话习惯。

*   **【核心体验】修复 Docker 与本地模型痛点**
    *   **Feature(provider): Support CoPaw Local Update** ([#2889](https://github.com/agentscope-ai/CoPaw/pull/2889)): 修复了 Llama.cpp 的解析错误，并支持在 WebUI 内直接更新 Local Provider，解决了本地模型用户升级繁琐的问题。
    *   **feat(console): restrict model discovery...** ([#2938](https://github.com/agentscope-ai/CoPaw/pull/2938)): 优化了模型发现逻辑，将其限制在本地提供商，避免了云端 API 的无效调用尝试，提升了界面清晰度。
    *   **fix(console): fix dark mode rendering issues** ([#2804](https://github.com/agentscope-ai/CoPaw/pull/2804)): 修复了定时任务页面在深色模式下的显示异常，改善了长期使用者的视觉体验。

---

### 4. 社区热点
今日讨论焦点主要集中在**模型兼容性**和**使用环境配置**上：

*   **[#2888 High CPU usage / power consumption](https://github.com/agentscope-ai/CoPaw/issues/2888)**: (7 条评论) 报告了 CoPaw 在空闲时占用 100% 单核 CPU 的问题，归因于 AnyIO 取消处理中的忙等待循环。这涉及到底层异步库的交互，是影响用户体验的关键性能问题。
*   **[#2923 Feishu post message newlines not rendered](https://github.com/agentscope-ai/CoPaw/issues/2923)**: (7 条评论) 飞书消息换行符显示异常的问题引发了热烈讨论，作者修正了最初的根因分析，指向了 `shell.py` 中的 `_collapse_embedded_newlines` 函数。已有对应的修复 PR ([#2924](https://github.com/agentscope-ai/CoPaw/pull/2924)) 待合并。
*   **[#2919 Custom Provider volcengine-plan Fails](https://github.com/agentscope-ai/CoPaw/issues/2919)**: (3 条评论) 火山引擎/豆包模型调用报错的问题。作为一个国内重要的云服务商，其 API 兼容性备受关注。

---

### 5. Bug 与稳定性
今日报告的 Bug 涉及多个层面，部分属于阻塞性问题：

*   **【高危】无限循环/资源泄漏**
    *   **[#2947 Gemma4 models trapped in tool callings](https://github.com/agentscope-ai/CoPaw/issues/2947)**: Google Gemma4 模型陷入工具调用死循环，无法终止。这属于严重的模型适配 Bug。
    *   **[#2888 High CPU usage when idle](https://github.com/agentscope-ai/CoPaw/issues/2888)**: 空闲高 CPU 占用，导致设备过热和耗电增加。
    *   **[#2934 Browser use process management problem](https://github.com/agentscope-ai/CoPaw/issues/2934)**: `browser_use` 工具存在 Chromium 进程泄漏，旧进程无法关闭且无超时机制。

*   **【中危】功能阻塞/配置失效**
    *   **[#2943 `copaw init` hangs on Windows](https://github.com/agentscope-ai/CoPaw/issues/2943)**: Windows Python 3.13 环境下初始化命令卡死，影响新用户上手。
    *   **[#2935 Unable to connect to LLM in Docker](https://github.com/agentscope-ai/CoPaw/issues/2935)**: Docker 环境下连接 MiniMax 或 OpenAI 协议失败，可能与容器网络隔离有关。
    *   **[#2931 New agent skills config auto-selects all](https://github.com/agentscope-ai/CoPaw/issues/2931)**: 新建 Agent 时技能配置会错误地“全选”，导致配置不符合预期。
    *   **[#2930 Tool call parse fail + Config reset](https://github.com/agentscope-ai/CoPaw/issues/2930)**: 本地模型工具调用频繁解析失败，且 `config.json` 中的 providers 配置在重启后被重置。

---

### 6. 功能请求与路线图信号
用户需求主要集中在**多智能体协作体验**和**UI/UX 优化**：

*   **多智能体协作增强**:
    *   **[#2922 Feature: Claude Code agent team](https://github.com/agentscope-ai/CoPaw/issues/2922)**: 用户呼吁引入类似 Claude Code 的 Agent Team 功能，解决当前多 Agent 交互生硬、上下文不对齐的问题。
    *   **[#2937 Feature: Merge multi-agent conversation windows](https://github.com/agentscope-ai/CoPaw/issues/2937)**: 请求将同一智能体的多次协作会话合并到一个窗口，避免窗口泛滥。
*   **交互与体验优化**:
    *   **[#2936 Feature: Pin conversation sessions](https://github.com/agentscope-ai/CoPaw/issues/2936)**: 请求添加会话“置顶”功能。
    *   **[#2945 Feature: Change GUI approve input to button](https://github.com/agentscope-ai/CoPaw/issues/2945)**: 批评 GUI 上批准操作需输入命令（且经常无效）的体验，建议改为按钮点击。
    *   **[#2933 Feature: Hide CMD window on Windows](https://github.com/agentscope-ai/CoPaw/issues/2933)**: 请求在 Windows 后台执行 Shell 命令时隐藏弹出的 CMD 窗口。

---

### 7. 用户反馈摘要
*   **痛点**：Windows 用户对 CMD 窗口频繁弹出 ([#2933](https://github.com/agentscope-ai/CoPaw/issues/2933)) 和初始化卡死 ([#2943](https://github.com/agentscope-ai/CoPaw/issues/2943)) 反映强烈；多智能体协作时的界面碎片化（产生过多窗口）严重困扰用户 ([#2937](https://github.com/agentscope-ai/CoPaw/issues/2937))。
*   **场景**：用户正在尝试接入国内中转代理 ([#2941](https://github.com/agentscope-ai/CoPaw/issues/2941)) 和火山引擎 ([#2919](https://github.com/agentscope-ai/CoPaw/issues/2919))，但在连接测试阶段遇到困难。
*   **不满**：GUI 的 approve 机制被描述为“经常无效，重复让我输入” ([#2945](https://github.com/agentscope-ai/CoPaw/issues/2945))；本地模型的工具调用解析不稳定导致体验中断 ([#2930](https://github.com/agentscope-ai/CoPaw/issues/2930))。

---

### 8. 待处理积压
以下 Issue/PR 长期处于 Open 状态或更新活跃但未解决，建议维护者关注：

*   **[#2946 feat: WhatsApp channel (Replacement PR)](https://github.com/agentscope-ai/CoPaw/pull/2946)**: 虽然旧的 WhatsApp PR 已关闭，但新的重构 PR (#2946) 仍处于 Open 状态，需跟进代码审查进度以确保该功能能尽快落地。
*   **[#2523 chore: improve .gitattributes](https://github.com/agentscope-ai/CoPaw/pull/2523)**: 自 3 月底创建以来一直未合并，跨平台行尾符一致性对于防止项目文件损坏很重要，建议尽快处理。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*