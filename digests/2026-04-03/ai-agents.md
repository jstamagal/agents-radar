# OpenClaw 生态日报 2026-04-03

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-03 00:12 UTC

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

# OpenClaw 项目日报：2026-04-03

## 1. 今日速览
OpenClaw 项目今日处于**极高活跃度**状态，过去24小时内共处理了 1000 个 Issues 和 PRs 的更新。项目刚刚发布了 **v2026.4.2** 版本，主要包含针对 xAI 插件的配置迁移和标准化工作。然而，社区情绪呈现明显的两极分化：一方面是快速的迭代和新功能（如 Web UI 重构、GMI Cloud 集成），另一方面是大量关于 v2026.3.31 和 v2026.4.1 版本引入的严重回归问题的投诉，特别是 `exec` 命令审批机制和 Dashboard 500 错误导致的生产环境阻塞。

## 2. 版本发布
**v2026.4.2** 已发布。
- **破坏性变更**:
  - **Plugins/xAI 配置迁移**: xAI 的搜索配置路径从旧版核心工具路径 (`tools.web.x_search.*`) 迁移至插件自有路径 (`plugins.entries.xai.config.xSearch.*`)。
  - **认证标准化**: 统一使用 `plugins.entries.xai.config.webSearch.apiKey` 或环境变量 `XAI_API_KEY` 进行认证。
- **注意事项**: 用户需检查配置文件，若仍在使用旧路径配置，需手动迁移或等待自动迁移脚本执行。

## 3. 项目进展
今日 PR 维护活动频繁，主要集中在修复近期引入的 Bug 和架构优化：
- **Agent 核心优化**:
  - 合并了 `fix: preserve selected session model after fallback` ([PR #59959](https://github.com/openclaw/openclaw/pull/59959))，解决了模型回退后会话模型选择不一致的问题。
  - 重构了内部执行提示词与用户可见输出的分离逻辑 ([PR #58955](https://github.com/openclaw/openclaw/pull/58955))，旨在修复工具调用间文本泄露到消息频道的问题。
- **生态集成**:
  - 新增 GMI Cloud 提供商集成 ([PR #59483](https://github.com/openclaw/openclaw/pull/59483)) 及 OpenAI Codex `gpt-5.4-mini` 模型支持 ([PR #59741](https://github.com/openclaw/openclaw/pull/59741))。
  - Ollama Cloud 认证问题得到修复 ([PR #59954](https://github.com/openclaw/openclaw/pull/59954))。
- **UI/UX 重构**:
  - 提交了基于 React 19 + shadcn/ui 的 Web UI 完整重设计方案 ([PR #59950](https://github.com/openclaw/openclaw/pull/59950))，涉及 18 个页面的重建。

## 4. 社区热点
- **[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (65 评论, 66 👍)
  - 跨平台需求持续高涨。虽然已有 macOS/iOS/Android 客户端，但 Linux 和 Windows 桌面应用的缺失仍是社区最大的痛点之一。
- **[#58814 v2026.3.31: Dashboard returns 500](https://github.com/openclaw/openclaw/issues/58814)** (18 评论, 5 👍)
  - 最新版本的 Dashboard 在根路径路由上发生崩溃，影响所有 Web 用户。这是影响面极广的阻断性 Bug。
- **[#49971 RFC: Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971)** (53 评论)
  - 关于引入 ERC-8004 和 W3C DID 标准来实现 Agent 身份验证的 RFC 正在激烈讨论中，涉及未来 Agent 互操作性的基础架构。
- **[#59006 Update 2026.4.1 broke exec completely](https://github.com/openclaw/openclaw/issues/59006)** (5 评论)
  - 用户强烈反馈 4.1 版本对 `exec` 审批机制的更改导致现有单用户设置完全失效，且缺乏迁移文档。

## 5. Bug 与稳定性
**严重程度：高**
- **[Regression] Dashboard 500 错误**: [Issue #58814](https://github.com/openclaw/openclaw/issues/58814) - v2026.3.31 导致 Web 管理界面完全不可用。
- **[Regression] Exec 审批失效**:
  - [Issue #58691](https://github.com/openclaw/openclaw/issues/58691): `tools.exec.ask='off'` 配置被忽略，所有命令强制要求手动审批。
  - [Issue #59006](https://github.com/openclaw/openclaw/issues/59006): v2026.4.1 引入的沙箱机制破坏了现有工作流。
  - [Issue #59774](https://github.com/openclaw/openclaw/issues/59774): Windows 平台上 allowlist 自动执行不生效。
- **[Bug] Kimi 模型工具调用失败**: [Issue #58817](https://github.com/openclaw/openclaw/issues/58817) (已关闭) - 缺少必填参数导致约 85% 的调用失败，PR #59440 已修复。
- **[Bug] 配置泄漏到消息流**: [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) - 工具调用间的内部处理文本（如错误处理）被发送到 Slack/iMessage 等聊天渠道，造成严重的 UX 泄露。
- **[Bug] LLM 超时设置失效**: [Issue #46049](https://github.com/openclaw/openclaw/issues/46049) - 即使配置了极长超时时间，请求仍会在短时间内断开。

**严重程度：中**
- **[Bug] WebChat 图片上传失败**: [Issue #24662](https://github.com/openclaw/openclaw/issues/24662), [Issue #27471](https://github.com/openclaw/openclaw/issues/27471) - 图片粘贴后 UI 显示但 Agent 未收到。
- **[Regression] Teams Webhook 401**: [Issue #58249](https://github.com/openclaw/openclaw/issues/58249) - v2026.3.24+ 版本中 Teams 集成完全失效。

## 6. 功能请求与路线图信号
- **Agent 互操作性 (A2A)**: [Issue #6842](https://github.com/openclaw/openclaw/issues/6842) - 社区呼吁支持 A2A (Agent-to-Agent) 协议，以便不同 AI 系统协作。
- **文件系统访问控制**: [Issue #52621](https://github.com/openclaw/openclaw/issues/52621) - 用户请求在配置中增加 `allowedPaths/denyPaths` 以限制 Agent 的读写范围。
- **简化 Exec 审批**: [Issue #59510](https://github.com/openclaw/openclaw/issues/59510) - 鉴于最近的审批混乱，用户要求简化“总是允许”的配置流程。
- **异步执行回调**: [Issue #18237](https://github.com/openclaw/openclaw/issues/18237) - 请求在进程退出时将结果异步注入回会话。

## 7. 用户反馈摘要
- **稳定性焦虑**: 用户 [paciox] 在 [Issue #57898](https://github.com/openclaw/openclaw/issues/57898) 中发泄道：“你们到底要不要一直搞坏这个东西？还是说我们能搞个稳定版？？”反映了用户对近期频繁出现 Regression 的极度不满。
- **配置复杂度**: 多个 Issue 反映 `exec` 的安全配置（`ask`, `security`, `allowlist`）过于复杂且文档不足，导致无法正确执行命令。
- **Windows 支持滞后**: 多个反馈指出 Windows 平台是“二等公民”，从 ACP 运行时到 Exec 审批功能均存在不生效的问题。

## 8. 待处理积压
- **长期 Bug - Context Usage 显示 0%**: [Issue #44184](https://github.com/openclaw/openclaw/issues/44184) - 自 2026.1.22 起延续至 2026.3.11 尚未解决，影响会话监控。
- **功能缺失 - Telegram 流式传输**: [Issue #20568](https://github.com/openclaw/openclaw/issues/20568) - `streamMode: "partial"` 在 Telegram 上自 v2026.2.17 起失效。
- **架构限制 - 非 Discord 频道的会话模式**: [Issue #23414](https://github.com/openclaw/openclaw/issues/23414) - `sessions_spawn` 的 `mode="session"` 硬编码依赖 `thread: true`，导致该功能在 Telegram/Slack 等非 Discord 平台完全不可用。

---

## 横向生态对比

# 2026-04-03 开源 AI 智能体生态横向对比分析报告

**分析师**：AI 智能体与个人助手开源生态专家
**日期**：2026-04-03
**核心参照**：OpenClaw

---

## 1. 生态全景
今日开源 AI 智能体生态呈现出**“底层架构激荡，上层应用内卷”**的鲜明态势。以 **OpenClaw** 为代表的头部项目正处于架构剧烈震荡期（v2026.4.x 系列的回归问题与 Dashboard 崩溃），暴露出高速迭代下的稳定性隐忧；与此同时，**LobsterAI**、**IronClaw** 等项目则在 UI/UX 细节与多模态交互上进行深度打磨，标志着生态竞争焦点从单纯的模型能力转向了用户体验与工程化落地。此外，对**多模型兼容**（摆脱单一供应商锁定）和**本地化/私有化部署**的需求在多个项目中爆发式出现，成为社区共识的下一阶段核心赛道。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃) | PRs (活跃) | 版本发布 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 1000+ (极多) | High | **v2026.4.2** (带破坏性变更) | 🔴 **活跃但动荡**。社区两极分化，核心功能存在严重 Regression (Dashboard 500, Exec 失效)。 |
| **NanoBot** | 22 | 39 | *无* (稳定版 v0.1.4.post6) | 🟠 **激进迭代中**。性能回归严重 (响应变慢)，内存管理出现 Bug，但新功能集成频繁。 |
| **Zeroclaw** | 23 | 50 | **v0.6.8** | 🟡 **质量控制收紧**。提交量大，但开始回滚 AI 生成的劣质 PR，聚焦 TUI 精简与安全性。 |
| **PicoClaw** | Low | 46 (合并率高) | **v0.2.4-nightly** | 🟢 **高效重构**。聚焦底层记忆引擎与安全沙箱，清理积压效率高，但新 Bug 较多。 |
| **NanoClaw** | 11 | 32 | *无* | 🟢 **生态扩张**。多渠道集成 爆发，社区贡献热情高，核心任务调度存在逻辑 Bug。 |
| **IronClaw** | 21 | 50 | *无* (v0.17.0) | 🔵 **架构演进**。全力推进 v2 Engine，数据库与容器运行时修复密集，处于大版本换血期。 |
| **LobsterAI** | High | 84 | *无* | 🟠 **产品打磨期**。UI/UX 优化频繁，但发生罕见的功能回滚 (会话模型绑定)，稳定性存疑。 |
| **CoPaw** | 50 | 44 | **v1.0.1-beta.1** | 🟠 **发布前冲刺**。Browser 工具稳定性痛点明显，安全性修复被重视，即将发布大版本。 |
| **Moltis** | 3 | Low | *无* | 🟢 **平稳维护**。活跃度低但质量高，专注解决 GraphQL 会话管理痛点。 |
| **ZeptoClaw** | 10 (清理中) | 1 | *无* | 🟢 **技术债清理**。处于 Crucible 迁移的文档与代码审计阶段，暂停新功能开发。 |
| **EasyClaw** | 0 | 0 | **v1.7.8** | 🟢 **长尾维护**。仅进行 macOS 兼容性修复，处于静默期。 |
| **NullClaw** | 0 | 2 | *无* | 🟢 **休眠/低活**。仅有零星的 Ollama 兼容性修复。 |
| **TinyClaw** | 0 | 0 | *无* | ⚫ **停滞**。过去 24 小时无活动。 |

---

## 3. OpenClaw 在生态中的定位

*   **技术路线差异**：OpenClaw 坚持**单体核心+ 强插件化**架构，今日发布的 xAI 插件配置迁移显示了其极高的模块化程度，但也带来了复杂的配置迁移成本。相比之下，IronClaw 正在向 **v2 Engine (多租户/统一执行)** 演进，架构更激进。
*   **社区规模与影响力**：OpenClaw 拥有绝对领先的社区规模（24小时内 1000+ Issue 讨论），是事实上的行业标准参照。其 Roadmap（如 RFC #49971 身份验证标准）直接影响其他小型项目（如 ZeptoClaw, NanoClaw）的架构设计方向。
*   **相对优势**：生态位最完整，几乎覆盖所有主流平台与模型。
*   **当前劣势**：**稳定性危机**。相比于 NanoBot 或 PicoClaw 的专注，OpenClaw 在 v2026.3.31-v2026.4.2 连续引入严重回归，导致“生产环境阻塞”，给予竞争对手切入稳定用户群的机会。

---

## 4. 共同关注的技术方向

1.  **摆脱单一供应商锁定**
    *   **涉及项目**：OpenClaw (xAI/GMI), NanoBot (Kimi/Meituan), NanoClaw (OpenAI/Codex/Gemini), IronClaw (Bedrock/Flex)。
    *   **核心诉求**：由于 Anthropic 的封号潮和成本控制需求，社区强烈要求支持 OpenAI 兼容格式、国产模型（如 DeepSeek, Qwen, Kimi）以及本地私有部署。

2.  **全渠道接入与 UI 重构**
    *   **涉及项目**：OpenClaw (Web UI 重构), LobsterAI (Agent 管理/侧边栏优化), NanoClaw (微信/QQ/Twilio), CoPaw (Desktop Console)。
    *   **核心诉求**：从 CLI 向移动端、桌面端迁移。LobsterAI 的“拖拽侧边栏”和 CoPaw 的“全局搜索”显示，用户对 Agent 的交互体验要求已向传统 SaaS 软件看齐。

3.  **安全与执行沙箱**
    *   **涉及项目**：Zeroclaw (Firejail/Env 传递), PicoClaw (Fail Closed 预检), OpenClaw (Exec 审批逻辑), NanoClaw (Docker 容器化运行)。
    *   **核心诉求**：随着 Agent 获得更高权限，如何防止 `exec` 命令破坏系统或泄露数据成为焦点。Zeroclaw 的“故障关闭”和 PicoClaw 的“执行预检加固”代表了两种主流技术路径。

4.  **记忆与上下文管理**
    *   **涉及项目**：PicoClaw (Seahorse 引擎/DAG 摘要), NanoBot (双阶段记忆/Dream), Moltis (Session Key 修复)。
    *   **核心诉求**：解决长对话中的上下文丢失和 Token 膨胀问题。向**结构化记忆**（如向量检索+分层摘要）演进是明显趋势。

---

## 5. 差异化定位分析

*   **OpenClaw**：**全能型航母**。适合需要覆盖所有场景的高级开发者和企业，但需承担版本不稳定的代价。
*   **NanoBot**：**网关/中台型**。主打模型无关性和长时任务编排，适合作为多人协作或企业内部 AI 中枢。
*   **PicoClaw**：**极客/边缘型**。轻量、适合跑在边缘设备上，今日的“Seahorse”记忆引擎显示出其对资源受限场景下智能化的独特追求。
*   **LobsterAI**：**产品型/桌面交互**。由大厂背景团队（网易有道）维护，专注于打磨 UI/UX 和桌面自动化，适合对代码能力要求不高但追求极致体验的 C 端用户。
*   **IronClaw**：**架构激进派**。正在进行 v2 重构，强调多租户和所有权模型，目标是未来的企业级 PaaS 平台。
*   **Zeroclaw**：**安全硬核派**。TUI 精简、移除 OAuth，强调本地化和安全审计，适合隐私敏感用户。

---

## 6. 社区热度与成熟度

*   **快速迭代期 (高频次、高风险)**：**OpenClaw** (虽有回归但修复快)、**IronClaw** (架构大换血)、**LobsterAI** (UI 频繁变动)。这些项目功能最强，但 Bug 最多。
*   **质量巩固期 (活跃且聚焦)**：**Zeroclaw** (回滚 PR 保质量)、**PicoClaw** (清理积压 Bug)。这些项目开始意识到技术债务，主动放慢新功能开发速度。
*   **平稳维护期**：**EasyClaw**, **NullClaw**。功能固定，仅做适配性维护。

---

## 7. 值关注的趋势信号

1.  **"Agent 互操作性" (A2A) 需求浮现**
    *   OpenClaw Issue #49971 和 NanoBot Issue #6842 均提及 Agent 间的直接通信与身份验证（DID/ERC-8004）。这预示着 AI 助手将从“单兵作战”向“多智能体协作”演进，开发者需关注协议标准化。

2.  **浏览器自动化 成为标配工具**
    *   CoPaw 的 `browser_use` 痛点、Moltis 的 CDP 交互 UI、LobsterAI 的 Pageant 集成，均表明 **Web 操控能力**（而不仅仅是文本生成）是 Agent 落地生产环境的关键。

3.  **配置管理正在吞噬代码逻辑**
    *   多个项目（OpenClaw 的 Exec, NanoClaw 的 Docker 安全策略）的痛点集中在配置极其复杂且容易出错。**"确定性策略引擎" (NanoClaw PR #1605)** 的出现，暗示未来的趋势是将安全/权限逻辑从 Prompt 中剥离，下沉为代码级的硬约束。

4.  **国产模型生态爆发**
    *   NanoBot 和 OpenClaw 今日均有大量针对 DeepSeek、Kimi、Meituan 等模型的适配与修复。对于面向中国市场的开发者，支持这些模型已不再是“可选项”，而是“必选项”。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 (2026-04-03)

## 📊 今日速览
NanoBot 项目今日呈现**极高活跃度**。过去 24 小时内共产生了 **61 条更新**（Issues 22 条，PRs 39 条），显示出强劲的开发势头与社区参与度。核心架构层面临挑战，主要集中在 **v0.1.4.post6 版本引入的严重性能回归与内存合并失败**问题，引发了多个用户的强烈反馈。与此同时，项目在**运行时稳定性**与**重试机制优化**方面取得显著进展，多个修复性 PR 已提交，旨在解决上游负载放大和 429 错误处理问题。此外，社区贡献活跃，新增了针对美团模型、Microsoft Teams 渠道及长时任务强化的支持。

---

## 🚀 版本发布
*今日暂无新版本发布。*
> **提示**：当前稳定版为 `v0.1.4.post6`，但根据 Issues 反馈，建议用户谨慎升级，密切关注近期关于性能和内存修复的 PR 合并情况。

---

## 🛠️ 项目进展
今日有多个关键 PR 进行了更新或合并，推动了项目的稳定性与功能扩展：

*   **[PR #2733] feat: harden agent runtime for long-running tasks**
    *   **状态**: 已关闭/合并
    *   **进展**: 核心运行时得到加固，专门针对大型工具输出、长工具链及跨模型消息处理进行了优化。这是项目迈向生产级稳定性的重要一步。
*   **[PR #2759] fix: stop retry amplification... by disabling SDK auto-retries**
    *   **状态**: Open
    *   **进展**: 修复了应用层与 SDK 层重试堆叠导致上游请求放大的问题（从 12 次降至 4 次），显著降低 API 成本与封禁风险。
*   **[PR #2754] feat(agent): add built-in grep and glob search tools**
    *   **状态**: Open
    *   **进展**: 为 Agent 新增了原生的文件搜索能力，填补了工作流中“先查找再编辑”的空白，减少了对 Shell 逃逸的依赖。
*   **[PR #2699] feat(provider): add Qianfan provider support**
    *   **状态**: 已关闭/合并
    *   **进展**: 成功集成了千帆大模型平台，扩展了国内模型的支持范围。

---

## 🔥 社区热点
今日讨论热度最高的议题集中在版本升级后的兼容性与体验问题：

*   **[#2573] Github Copilot登录失败** (👍 9)
    *   **链接**: [HKUDS/nanobot#2573](https://github.com/HKUDS/nanobot/issues/2573)
    *   **分析**: 这是一个高关注度 Issue。用户在升级到 `v0.1.4.post6` 后无法登录 Github Copilot，报错 "Authorization header is badly formatted"。用户推测与底层库切换有关，已确认为新引入的 Bug。
*   **[#2714] Windows 下 NanoBot + DeepSeek 完整安装与配置指南**
    *   **链接**: [HKUDS/nanobot#2714](https://github.com/HKUDS/nanobot/issues/2714)
    *   **分析**: 社区成员贡献的中文教程获得了积极响应。这反映了 NanoBot 在中文社区（特别是 DeepSeek 用户群）中的流行度，同时也暴露了官方文档在特定环境（Windows/新手）下的不足。
*   **[#2713] agent response speed has slowed down... (响应速度严重变慢)**
    *   **链接**: [HKUDS/nanobot#2713](https://github.com/HKUDS/nanobot/issues/2713)
    *   **分析**: 用户报告从 1s 飙升至 3min 的极端性能退化。该 Issue 是目前对 `v0.1.4.post6` 版本最有力的负面反馈，急需维护者介入。

---

## 🐞 Bug 与稳定性
今日报告的 Bug 数量较多，其中包含严重的阻断性问题：

1.  **[Critical] 内存合并导致服务中断**
    *   **Issue**: [#2737](https://github.com/HKUDS/nanobot/issues/2737) - LLM did not call save_memory
    *   **现象**: 升级到 `v0.1.4.post6` 后，MiniMax 模型无法正确保存记忆，导致 Agent 停止工作。
    *   **Fix**: 尚未明确，PR #2733 可能涉及部分相关修复。
2.  **[High] 性能严重回归**
    *   **Issue**: [#2713](https://github.com/HKUDS/nanobot/issues/2713) - 响应时间从 1s 变为 3min
    *   **影响**: 覆盖 `v0.1.4.post6` 及之后版本，严重阻碍用户体验。
3.  **[High] 重试机制盲点导致请求被拒**
    *   **Issue**: [#2763](https://github.com/HKUDS/nanobot/issues/2763) - Retry-After ignored under 429
    *   **Fix**: 已有修复 PR [#2761](https://github.com/HKUDS/nanobot/pull/2761)。
4.  **[Medium] Gemini 模型调用异常**
    *   **Issue**: [#2185](https://github.com/HKUDS/nanobot/issues/2185) - gemini-3-flash-preview 在 post5 版本中无法使用。
5.  **[Medium] 配置丢失**
    *   **Issue**: [#2755](https://github.com/HKUDS/nanobot/issues/2755) - Docker Compose 部署时配置文件重启后消失。
6.  **[Medium] 第三方模型适配**
    *   **Issue**: [#2749](https://github.com/HKUDS/nanobot/issues/2749) - 美团 LongCat 模型返回工具调用标签而非正常回复。

---

## 💡 功能请求与路线图信号
用户和开发者正在积极推动以下方向的改进：

*   **双阶段记忆系统**: PR [#2717](https://github.com/HKUDS/nanobot/pull/2717) 提出了引入 Dream（梦）整合机制的方案，旨在解决长时记忆的上下文注入问题，这是对 Agent 智能化的重要探索。
*   **子 Agent 消息流解耦**: Issue [#2746](https://github.com/HKUDS/nanobot/issues/2746) 用户希望参考 OpenClaw，能直接进入子 Agent 对话，而非仅依赖主 Agent 总结。这代表了高级用户对多 Agent 编排透明度的需求。
*   **OpenAI 参数适配**: Issue [#2757](https://github.com/HKUDS/nanobot/issues/2757) 和 PR [#2758](https://github.com/HKUDS/nanobot/pull/2758) 讨论了对 OpenAI `max_completion_tokens` 的支持，表明项目紧跟上游 API 变更。
*   **UI/UX 细节**:
    *   Issue [#2750](https://github.com/HKUDS/nanobot/issues/2750): 请求飞书在任务完成后移除 "Done" emoji（已有 PR #2751）。
    *   Issue [#2747](https://github.com/HKUDS/nanobot/issues/2747): 请求允许自定义或禁用 System Prompt 中的硬编码 Emoji。

---

## 👥 用户反馈摘要
*   **痛点**: `v0.1.4.post6` 版本稳定性堪忧，多个用户反馈性能暴跌和特定功能失效。Docker 部署的用户遇到了配置持久化问题。
*   **场景**: Windows 用户 + DeepSeek 是目前显著的增长点，社区自发撰写教程填补空白。
*   **满意点**: Agent 原生工具（如新增的 grep/glob）和渠道支持（如 Microsoft Teams PR）正在不断完善，增强了作为全能网关的吸引力。

---

## ⚠️ 待处理积压
建议维护者优先关注以下长期或高风险 Issue：

*   **[#2463](https://github.com/HKUDS/nanobot/issues/2463)**: 架构级问题，Prompt 前缀持久化与实际发送不一致。这涉及 OpenAI Prompt Caching 的根本冲突。
*   **[#1401](https://github.com/HKUDS/nanobot/issues/1401)**: 启动时报错 `TypeError: type 'Choice' is not subscriptable`，虽然创建时间较早，但近期仍有更新，可能是环境兼容性问题。
*   **[#1851](https://github.com/HKUDS/nanobot/issues/1851)**: Matrix 认证错误刷屏服务器，属于长期困扰用户的服务质量问题。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

您好！我是 Zeroclaw 项目的开源分析师。以下是基于 **2026-04-03** GitHub 数据生成的项目动态日报。

---

### 📅 2026-04-03 Zeroclaw 项目动态日报

#### 1. 今日速览
Zeroclaw 项目今日处于**极高活跃度**状态，社区贡献意愿强烈，但代码质量控制面临挑战。
*   **活跃度评估**：过去 24 小时内新增了 23 个 Issues 和 50 个 Pull Requests，提交量远超日常水平，属于“爆发式”活跃。
*   **质量信号**：维护者采取了强硬的质量管控措施，回滚了两个存在问题的 AI 生成 PR，并关闭了一个已合并的大型功能 PR（WASM 插件系统），表明项目在追求功能迭代的同时，正在收紧代码审查标准以确保稳定性。
*   **版本迭代**：发布了 v0.6.8 版本，主要对 TUI（终端用户界面）进行了精简，移除了 OAuth/Browser 认证方式，强化了本地化和安全性。

#### 2. 版本发布
**v0.6.8 已发布** ([Release Link](https://github.com/zeroclaw-labs/zeroclaw/releases))
*   **核心变更**：
    *   **TUI 精简**：移除了基于 OAuth 和浏览器的认证方法。
    *   **体验优化**：扩展了 onboarding（入门/引导）屏幕，改善新用户首次配置体验。
*   **潜在影响**：依赖 Web 认证流程的用户需要调整配置，适应新的（推测为 Token 或密钥对）认证方式。

#### 3. 项目进展
尽管提交量大，但今日合并的 PR 数量较少，重点在于“修正”而非“新增”。
*   **代码质量控制**：[PR #5233](https://github.com/zeroclaw-labs/zeroclaw/pull/52333) 回滚了之前的 #5215 和 #5217，理由是它们包含本应在审查阶段发现的 Bug。这显示了维护团队正在收紧对 AI 生成代码的审查标准。
*   **CI/CD 修复**：[PR #5206](https://github.com/zeroclaw-labs/zeroclaw/pull/5206) 修复了阻塞主分支的 CI 故障（包括移除废弃的 `main.py` 依赖和升级 MQTT 库），确保开发流水线畅通。
*   **Session 修复尝试**：[PR #5199](https://github.com/zeroclaw-labs/zeroclaw/pull/5199) 正在修复 Gateway Session 导致的“Cannot read properties of undefined”错误，这是目前 Dashboard 可用性的关键阻碍。

#### 4. 社区热点
*   **Matrix 通道摩擦点**：[Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) (9条评论) 持续高热，集中吐槽 Matrix 集成中的 E2EE 加密、OTK 重试循环等问题。作为回应，[PR #5166](https://github.com/zeroclaw-labs/zeroclaw/pull/5166) 提出了包括“提及仅回复”、“去重”和“E2EE 修复”在内的全套解决方案。
*   **安全策略争议**：[Issue #4485](https://github.com/zeroclaw-labs/zeroclaw/issues/4485) (已关闭) 讨论了安全沙箱策略过于严格导致 `ls` 等基本命令被拦截的问题，反映了用户对“安全性”与“易用性”平衡的诉求。
*   **Logo 焕新**：[Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) (4条评论) 发起了设计新 Logo 的讨论，社区参与度较高。

#### 5. Bug 与稳定性
今日报告的 Bug 涉及核心运行时、多个 Provider 和 Sandbox，严重程度较高。
*   **S1 (严重阻塞)**:
    *   **[#5171](https://github.com/zeroclaw-labs/zeroclaw/issues/5171)**: Firejail 沙箱无法正确传递环境变量，导致需要特定 Env 的任务失败。
    *   **[#5232](https://github.com/zeroclaw-labs/zeroclaw/issues/5232)**: `zeroclaw service install` 生成的 systemd 配置与 daemon 的 fork 行为冲突，导致进程重复。
    *   **[#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)**: Web Dashboard 持续不可用，提示需手动构建，严重影响桌面端体验。
*   **S2 (行为降级)**:
    *   **[#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)**: `auto_save` 功能会导致递归存储，内存无限增长。
    *   **[#5229](https://github.com/zeroclaw-labs/zeroclaw/issues/5229)**: NVIDIA API 提供商模型切换失败。
*   **修复动态**: AWS Bedrock 的空消息 Bug ([#5218](https://github.com/zeroclaw-labs/zeroclaw/pull/5218)) 和 Gemini OAuth 缺失密钥检测 ([#5222](https://github.com/zeroclaw-labs/zeroclaw/pull/5222)) 已有修复 PR 提交。

#### 6. 功能请求与路线图信号
*   **多租户/权限控制**：[Issue #5184](https://github.com/zeroclaw-labs/zeroclaw/issues/5184) 提出极重要的“基于用户角色的工具权限控制”（区分 Admin 和普通用户），这是迈向企业级多用户协作的关键信号。
*   **AWS Bedrock 身份联邦**：[Issue #5227](https://github.com/zeroclaw-labs/zeroclaw/issues/5227) 请求支持 IRSA/OIDC (Web Identity)，对应的 [PR #5223](https://github.com/zeroclaw-labs/zeroclaw/pull/5223) 已提交，显示出较高的落地可能性。
*   **WASM 插件系统（波折）**：[PR #5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231) 提出了引入 WASM 插件系统以扩展功能的宏大愿景，但前一个版本的 PR (#5230) 已被关闭，说明该功能尚在评估中。

#### 7. 用户反馈摘要
*   **痛点**：用户对 **Web Dashboard 的构建依赖**感到不满（Issue #4866），认为预编译版本应开箱即用；**沙箱**（Sandbox）过于严格导致常用命令被拦截也是抱怨的焦点（Issue #4485）。
*   **集成体验**：Matrix 用户深受 E2EE 稳定性困扰；Telegram 用户希望支持超级群组的 Topic 路由（Issue #5225/5226）。
*   **正面反馈**：对 CLI 工具 `zeroclaw props` (PR #5165) 和 HMAC 工具执行回执以防止幻觉（PR #5168）表示出浓厚兴趣，认为这增加了项目的可控性。

#### 8. 待处理积压
*   **长期活跃 Issue**: [Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) (Matrix Friction) 和 [Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) (Better Logo) 虽然有讨论/PR，但尚未彻底解决。
*   **搁置的大型功能**: WASM 插件系统 (PR #5231) 的不确定性，以及回滚的 Gateway Session 修复，表明这些核心架构层面的改动需要更长时间打磨。

---
*数据来源：GitHub API (zeroclaw-labs/zeroclaw) | 报告日期：2026-04-03*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-03)

## 1. 今日速览
PicoClaw 项目今日处于**极高活跃度**状态，展现了社区强劲的贡献势头。过去 24 小时内共合并/关闭了 46 个 PR（占总更新数的 72%），同时清理了 11 个历史 Issues，表明维护团队正在高效处理积压任务。核心开发聚焦于**短期记忆引擎**与**安全防护**机制的底层重构。尽管有大量更新，但同时也暴露了 WebUI 网关连接、Windows 平台兼容性及渠道路由（Cron/DingTalk/QQ）等方面的多处新生 Bug，需关注稳定性风险。

## 2. 版本发布
- **v0.2.4-nightly.20260402.415abc8c** ([Release Link](https://github.com/sipeed/picoclaw/releases/tag/v0.2.4-nightly.20260402.415abc8c))
  - **类型**：Nightly Build（自动构建，可能不稳定）
  - **内容概览**：基于 main 分支的最新构建，包含过去 24 小时的所有功能合并与 Bug 修复。
  - **注意**：鉴于今日有多处底层逻辑修改（如内存模型、执行脚本预检），建议生产环境谨慎升级。

## 3. 项目进展
今日合并的 PR 涵盖了从底层依赖更新到核心功能重构的多个维度：
- **重大功能推进**：
  - **Seahorse 短期记忆引擎 (#2285)**：实现了基于 SQLite 和 DAG 分层摘要的无损上下文压缩，引入了 FTS5 全文检索和预算感知组装，标志着 PicoClaw 在处理长对话和复杂任务时的记忆能力有了质的飞跃。
  - **Agent 自我更新机制 (#1756, #1754)**：允许 Agent 读写 `SOUL.md` 和 `USER.md`，并扩展了 AGENT.md Frontmatter 字段（`soul`, `memory`），增强了 Agent 的个性化与持久化能力。
- **基础设施与安全**：
  - **执行预检加固 (#2298)**：为解释器命令增加了更严格的预检逻辑，对模糊脚本执行“故障关闭（Fail Closed）”策略，显著提升了执行安全性。
  - **依赖升级**：全面更新了 `github.com/openai/openai-go/v3`、`anthropic-sdk-go`、`pion/rtp` 等核心库，确保与新 API 的兼容性。
- **用户体验优化**：
  - **会话管理 (#1032)**：新增 `/new` 和 `/clear` 命令，允许用户在不重启服务的情况下重置对话上下文。

## 4. 社区热点
- **WebUI 网关连接故障** ([#2213](https://github.com/sipeed/picoclaw/issues/2213))
  - **热度**：7 评论，1 👍
  - **核心问题**：用户报告 WebUI 无法连接其自身启动的网关进程，涉及 Launcher Token 与进程通信。这是目前阻碍用户使用 Web 功能的首要问题。
- **模型路由逻辑争议** ([#2268](https://github.com/sipeed/picoclaw/issues/2268))
  - **热度**：新开 Issue
  - **核心问题**：系统日志显示选择了 `light_model`，但实际请求仍使用主模型。这暴露了轻量级模型路由策略在落地时的逻辑偏差，直接影响用户的成本控制预期。
- **文件写入换行符转义 Bug** ([#2283](https://github.com/sipeed/picoclaw/issues/2283))
  - **热度**：新开 Issue
  - **核心问题**：Agent 写入文件时 `\n` 被强制转换为换行符，导致生成 Python 等脚本时出现语法错误。这直接影响 Agent 自动化编写代码的可用性。

## 5. Bug 与稳定性
今日报告的 Bug 涉及多平台及核心通道，**稳定性风险评级：中高**。
1.  **[HIGH] WebUI 连接失败** ([#2213](https://github.com/sipeed/picoclaw/issues/2213))：Web 生态入口的关键阻塞问题，暂无 Fix PR。
2.  **[MED] Cron 任务路由错误** ([#2275](https://github.com/sipeed/picoclaw/issues/2275))：Cron 消息被路由至内部会话而非来源 Telegram 会话，导致用户收不到定时任务反馈。
3.  **[MED] 多通道消息发送失败**：
    -   **Windows QQ 通道** ([#2080](https://github.com/sipeed/picoclaw/issues/2080))：Windows 平台下特定渠道无法工作。
    -   **DingTalk Cron** ([#2265](https://github.com/sipeed/picoclaw/issues/2265))：Cron 任务无法通过 DingTalk 发送消息。
4.  **[MED] Docker Volume 硬编码路径** ([#2269](https://github.com/sipeed/picoclaw/issues/2269))：`docker-compose.full.yml` 中硬编码了 `/root/.picoclaw`，但容器实际未以 root 运行，导致权限/路径问题。
5.  **[LOW] SiliconFlow API 启动崩溃** ([#2280](https://github.com/sipeed/picoclaw/issues/2280))：特定供应商 API 导致服务无法启动。

## 6. 功能请求与路线图信号
- **Zalo 聊天通道支持** ([#2261](https://github.com/sipeed/picoclaw/issues/2261))：用户请求集成越南流行的 Zalo 消息应用。参考其他 Claw 项目已有集成，技术可行性高。
- **Android 设备自动化** ([#292](https://github.com/sipeed/picoclaw/issues/292))：这是一个高优先级 的 Roadmap 特性，旨在让 PicoClaw 作为 LLM 与移动端交互的桥梁，类似 Botdrop 功能。
- **Flex Service Tier 支持** ([#2271](https://github.com/sipeed/picoclaw/issues/2271))：请求为非时间敏感的任务（如 Cron 心跳）支持 OpenAI Flex 等低成本 API 级别，以降低运行成本。

## 7. 用户反馈摘要
- **痛点**：
  - **复杂环境下的连接性**：用户在 Windows、Docker 及特定网络环境（如 OpenRouter 连接重置）下遭遇多次连接挫折。
  - **配置的复杂性**：关于 `thinking_level` 配置读取失败 ([#2286](https://github.com/sipeed/picoclaw/issues/2286)) 和 Docker 路径硬编码的反馈表明，配置管理的人性化仍有提升空间。
- **好评**：
  - **文档改进**：用户积极反馈 `ReadFileTool` 重构 ([#1974](https://github.com/sipeed/picoclaw/issues/1974)) 和 `AGENT.md` 增强对提升 Agent 能力的帮助。

## 8. 待处理积压
- **长期未解决的连接性问题**：OpenRouter 在小尺寸 Linux 板上的间歇性连接重置问题 ([#1653](https://github.com/sipeed/picoclaw/issues/1653)) 仍未有定论，影响边缘计算场景的稳定性。
- **Provider Bug**：关于 `prompt_cache_key` 的错误 ([#1574](https://github.com/sipeed/picoclaw/issues/1574)) 已被标记为 PicoClaw 自身 Bug，需留意修复进度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 (2026-04-03)

## 1. 今日速览
NanoClaw 项目今日处于**高度活跃**状态，在过去24小时内共处理了 **43** 个 Issues 和 PRs（合并/关闭了 11 个，新增/活跃了 32 个），显示出极强的社区开发热情。
虽然今日没有发布新版本，但代码库在安全性、多平台支持和功能集成方面取得了显著进展。特别值得注意的是，**Docker/容器化支持** 和 **多渠道集成** 成为今日的开发主题，多个关于容器安全（SELinux、Rootless）和主流通讯平台（微信、QQ、Twilio）的 PR 被提出或更新。

## 2. 版本发布
**无新版本发布**

## 3. 项目进展
今日虽无正式版发布，但以下 PR 的更新标志着项目核心能力的增强：

*   **安全与合规建设**：
    *   PR [#1595](https://github.com/qwibitai/nanoclaw/pull/1595) 已合并，添加了《贡献者盟约》行为准则，提升了项目的社区治理规范性。
    *   PR [#1605](https://github.com/qwibitai/nanoclaw/pull/1605) 提出了构建**确定性安全策略引擎**的方案，旨在替代基于 Prompt 的安全检查，实现用户准入、工具限制和只读挂载的硬编码控制。
*   **本地模型与工具生态**：
    *   PR [#1600](https://github.com/qwibitai/nanoclaw/pull/1600) 虽已关闭，但验证了为本地模型（Goose）添加 MCP 工具和图片支持的可行性，为本地化部署提供了技术参考。
*   **多模型认证支持**：
    *   PR [#478](https://github.com/qwibitai/nanoclaw/pull/478) 持续更新，致力于添加 Google Vertex AI 认证支持，这将允许用户通过 GCP 项目访问 Claude 模型，增强了部署的灵活性。

## 4. 社区热点
今日讨论主要集中在**解除供应商锁定**和**多模态/多平台接入**：

*   **🔥 最热讨论：支持其他运行时和提供商**
    *   **链接**: [#80](https://github.com/qwibitai/nanoclaw/issues/80)
    *   **详情**: 这是一个长期活跃的 Enhancement（56 赞）。鉴于 Anthropic 开始封禁使用 OpenClaw 的订阅账户，社区强烈呼吁 NanoClaw 能灵活支持 OpenAI、Codex、Gemini 等其他提供商，以规避单一供应商风险。
*   **📢 关注焦点：Docker 容器化运行支持**
    *   **链接**: [#1485](https://github.com/qwibitai/nanoclaw/issues/1485)
    *   **详情**: 用户批评当前直接在宿主机运行 curl 安装脚本的做法存在供应链攻击风险，强烈建议将 NanoClaw 本身容器化，并通过挂载 Docker Socket 的方式运行命令。
*   **🚀 新功能爆发：全渠道接入能力**
    *   **链接**: [PR #1594 (WeChat)](https://github.com/qwibitai/nanoclaw/pull/1594), [PR #966 (QQ)](https://github.com/qwibitai/nanoclaw/pull/966), [PR #1294 (Twilio)](https://github.com/qwibitai/nanoclaw/pull/1294)
    *   **详情**: 社区正在疯狂扩展通讯渠道，今日新增了对**微信**（通过 iLink API）、**QQ** 和 **Twilio WhatsApp** 的支持，显示出项目作为“万能 AI 接入层”的野心。

## 5. Bug 与稳定性
今日报告的 Bug 涉及核心任务调度、系统集成和 CLI 工具：

*   **🔴 严重：任务调度阻塞主线程**
    *   **链接**: [#1603](https://github.com/qwibitai/nanoclaw/issues/1603)
    *   **详情**: 当主组向工作组派发带有 `return_to_caller: true` 的任务时，主组在任务期间会完全失去响应。根因定位在 `task-scheduler.ts` 的任务队列逻辑中。
*   **🟠 中等：macOS 环境变量缺失导致服务崩溃**
    *   **链接**: [#1604](https://github.com/qwibitai/nanoclaw/pull/1604)
    *   **详情**: 在 Apple Silicon Mac 上，`launchd` 和 `systemd` 的 PATH 缺少 `/opt/homebrew/bin`，导致服务在启动时因找不到容器命令而崩溃。PR 已提交修复。
*   **🟠 中等：Claw CLI 登录异常**
    *   **链接**: [#1599](https://github.com/qwibitai/nanoclaw/issues/1599)
    *   **详情**: 用户反馈 `claw cli` 似乎未正确使用 `onecli`，导致无法正常通过 `/login` 命令认证。

## 6. 功能请求与路线图信号
从 Issues 和 PR 中可以窥见未来的开发重点：

*   **IP 审查与合规化**：Issue [#1591](https://github.com/qwibitai/nanoclaw/issues/1591)（已关闭）曾紧急呼吁审查 AI 共著属性，这暗示未来可能会加入更灵活的 Commit Message 模板配置，以去除自动附加的 "Co-Authored-By" 信息。
*   **Agent 团队协作模式**：PR [#1602](https://github.com/qwibitai/nanoclaw/pull/1602) 提出了“Agent Team Profiles”概念，试图将 AI 角色从单一助手转变为 CTO，统筹 11 个专业角色（PM、架构师等），这是向**多智能体系统 (MAS)** 演进的重要信号。
*   **语义搜索与记忆增强**：PR [#1597](https://github.com/qwibitai/nanoclaw/pull/1597) 提议添加 QMD 技能以实现语义对话搜索；PR [#1283](https://github.com/qwibitai/nanoclaw/pull/1283) 则试图引入混合检索（BM25+Vector）的记忆库，表明社区对 AI 长期记忆和上下文检索能力的强烈需求。

## 7. 用户反馈摘要
*   **痛点 - 安全性与安装**: 用户 `andaag` ([#1485](https://github.com/qwibitai/nanoclaw/issues/1485)) 对直接运行安装脚本表示担忧，认为这“非常恶心且脆弱”，反映出用户对生产级环境隔离的迫切需求。
*   **痛点 - 供应商风险**: 用户 `jchadwick` ([#80](https://github.com/qwibitai/nanoclaw/issues/80)) 指出 Anthropic 正在封号，认为依赖单一供应商是不明智的，强烈要求支持 Open Source 替代品。
*   **反馈 - 认证灵活性**: 用户 `harche` ([#478](https://github.com/qwibitai/nanoclaw/pull/478)) 希望通过 Google Cloud Vertex AI 使用 Claude，反映出企业用户对混合云和现有基础设施集成的需求。

## 8. 待处理积压
维护者需关注以下长期活跃或复杂的 PR/Issue：

*   **社区技能插件化**: PR [#1387](https://github.com/qwibitai/nanoclaw/pull/1387) 自3月24日开启，旨在添加类似频道的插件系统，目前仍在审核中。
*   **实验处理器重构**: Issue [#1590](https://github.com/qwibitai/nanoclaw/issues/1590) 虽已关闭，但其提出的“多阶段执行、优先级调度”是提升并发能力的关键，需确认是否已完全合并或仅是暂时关闭。
*   **记忆系统升级**: PR [#1283](https://github.com/qwibitai/nanoclaw/pull/1283) 提议用 LanceDB 替换基础向量搜索，这能显著改善检索质量，但至今未合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这是一份基于 2026-04-03 GitHub 数据的 **NullClaw** 项目动态日报。

---

# NullClaw 项目日报 | 2026-04-03

## 1. 今日速览
NullClaw 项目在过去 24 小时内保持了**低活跃度但聚焦核心质量**的状态。虽然没有任何新的 Issue 提出或版本发布，但代码库处于活跃维护状态，共发生了 **2 次 Pull Request 更新**。开发重点集中在 **CLI 用户体验优化**（修复流式输出时的视觉干扰）以及 **后端兼容性修复**（针对 Ollama 模型支持）。今日代码提交率良好，显示出维护者正在稳步推进修复工作，项目整体健康度稳定。

## 2. 版本发布
> 无新版本发布。

## 3. 项目进展
今日有 1 个 PR 被关闭，主要涉及错误修复；另有 1 个新的修复 PR 正在审核中。

*   **[已合并/关闭] 修复 Ollama 模型支持**
    *   **描述**：PR #760 由 `nathanalam` 提交，旨在解决与 Ollama 模型集成相关的特定错误（摘要仅为 "fix ollamas"）。
    *   **影响**：这表明项目对本地或私有部署模型的支持正在得到强化。合并此 PR 意味着困扰用户的 Ollama 连接或调用问题已得到官方解决。
    *   **链接**：[PR #760 - Fix ollama](https://github.com/nullclaw/nullclaw/pull/760)

*   **[待合并] 优化 CLI 流式输出体验**
    *   **描述**：PR #761 由 `vernonstinebaker` 提交，针对 `nullclaw agent` CLI 工具进行了改进。
    *   **技术细节**：引入了 `streaming.TagFilter` 来包装流式输出，防止原始的 `

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-04-03)

## 1. 今日速览
IronClaw 项目今日处于**极高活跃度**状态，过去 24 小时内共产生了 71 条代码与问题更新（21 Issues + 50 PRs）。项目核心开发正聚焦于 **v2 架构的落地**，包括统一执行引擎、集中化所有权模型及结构化数据存储功能的推进。与此同时，社区对 OAuth 认证（特别是 Google）和网络模型配置的反馈较多。今日合并了大量数据库迁移与 CI 修复相关的 PR，显示出项目正积极为下一阶段的生产环境稳定性做准备。

## 2. 版本发布
**无新版本发布。**
虽然今日有多个 PR 涉及核心功能修复（如 Docker 镜像 glibc 切换、数据库迁移修复），但尚未触发正式的 Release 流程。目前 `v0.17.0` 仍为最新本地版本。

## 3. 项目进展
今日主要进展集中在架构重构与基础设施稳定性修复：

*   **核心架构演进**：
    *   **[#1557 (v2 Engine)](https://github.com/nearai/ironclaw/pull/1557)**：统一执行引擎 PR 继续保持活跃更新，该功能旨在通过 `ENGINE_V2=true` 标志替换现有的会话、任务等抽象，是项目迈向 v2 架构的核心里程碑。
    *   **[#1898 (Ownership Model)](https://github.com/nearai/ironclaw/pull/1898)**：引入了集中化的所有权模型，解决了单租户与多租户部署下的身份一致性问题，并优化了 `TenantScope` 的数据库读取性能（解决了 [#1919](https://github.com/nearai/ironclaw/issues/1919) 提出的双重读取问题）。
*   **基础设施与稳定性**：
    *   **数据库迁移对齐**：PR **[#1928](https://github.com/nearai/ironclaw/pull/1928)** 与 **[#1931](https://github.com/nearai/ironclaw/pull/1931)** 已合并，修正了生产环境与迁移脚本之间的版本号冲突（V15/V16/V17），确保了 PostgreSQL 和 libSQL 的一致性。
    *   **容器运行时修复**：PR **[#1930](https://github.com/nearai/ironclaw/pull/1930)**（已合入）将 Docker 基础镜像从 Alpine/musl 切换至 Debian/glibc，修复了 libSQL 在容器重启后的崩溃问题。
    *   **测试覆盖率**：PR **[#1895](https://github.com/nearai/ironclaw/pull/1895)** 提交了大量补丁，使得 49 个单元测试不再依赖网络/DNS 访问，提升了 CI 构建的稳定性和速度。

## 4. 社区热点
今日讨论热度最高的议题集中在第三方服务兼容性与安全性：

*   **Google OAuth 阻塞问题** ([#902](https://github.com/nearai/ironclaw/issues/902))
    *   **状态**：OPEN | 5 条评论
    *   **分析**：用户反馈在使用 Google Suite WASM 工具时遭遇 Google 的安全拦截（"This app is blocked"）。这反映了开源项目在未通过 Google 验证的大规模部署中的常见痛点，社区正在讨论是否需要引入 GWS 作为备用提供商。
*   **私有网络模型配置** ([#1754](https://github.com/nearai/ironclaw/issues/1754))
    *   **状态**：OPEN | 1 条评论, 1 👍
    *   **分析**：用户无法连接自部署的私有模型（HTTP 非本地地址），系统强制要求 HTTPS。这触及了内网开发场景的便利性与安全策略的平衡，讨论热度较高。
*   **CI/CD 安全漏洞审查** ([#1901](https://github.com/nearai/ironclaw/issues/1901), [#1902](https://github.com/nearai/ironclaw/issues/1902))
    *   **状态**：OPEN | CRITICAL/HIGH
    *   **分析**：自动化 CI 审查发现了数个严重漏洞，包括 Docker 构建中的命令注入漏洞和未验证的标签输入。虽然这是 Bot 自动生成，但因其涉及供应链安全，引起了关注。

## 5. Bug 与稳定性
今日报告的 Bug 涉及认证、网络配置和运行时崩溃：

*   **[Critical] 命令注入与 Docker 构建失败**
    *   详情：Issue **[#1901](https://github.com/nearai/ironclaw/issues/1901)** (Command Injection) 和 **[#1900](https://github.com/nearai/ironclaw/issues/1900)** (YAML Parsing Error)。
    *   状态：Open，等待修复。
*   **[High] 私有网络模型连接失败**
    *   详情：Issue **[#1754](https://github.com/nearai/ironclaw/issues/1754)**。非 localhost 的 HTTP URL 被拒绝。
    *   影响：内网开发者无法直接使用 HTTP 协议的自托管模型。
    *   状态：Open。
*   **[Medium] 飞书通道响应失败**
    *   详情：Issue **[#1633](https://github.com/nearai/ironclaw/issues/1633)**。错误提示 `app_id not configured`。
    *   状态：Closed (Fixed)。
*   **[Medium] OpenAI 兼容接口路径错误**
    *   详情：Issue **[#1934](https://github.com/nearai/ironclaw/issues/1934)**。`LLM_BASE_URL` 必须包含 `/v1` 后缀，否则 404。
    *   状态：Open。
*   **[Fixed] libSQL 重启崩溃**
    *   详情：Docker 容器重启后 libSQL 崩溃。
    *   状态：已修复，由 PR **[#1930](https://github.com/nearai/ironclaw/pull/1930)** 合入解决。

## 6. 功能请求与路线图信号
社区提出的新需求显示了用户对"数据管理"和"认证灵活性"的渴望：

*   **会话管理功能** ([#1907](https://github.com/nearai/ironclaw/issues/1907))：用户请求在 Web 界面添加删除会话/对话的功能。这是一个基础但影响 UX 的重要功能。
*   **AWS Bedrock Prompt Caching** ([#1926](https://github.com/nearai/ironclaw/issues/1926))：请求为 Bedrock Converse API 添加提示缓存支持，以降低 Token 成本。对应的 PR **[#1935](https://github.com/nearai/ironclaw/pull/1935)** 已提交，表明该功能即将落地。
*   **结构化数据集合** (PR **[#1937](https://github.com/nearai/ironclaw/pull/1937)**)：引入了 `Typed Structured Storage`，允许 Agent 像操作数据库一样操作工作区数据（如 "Add milk to grocery list"）。这是一个强大的新特性，可能会改变 Agent 与数据交互的方式。

## 7. 用户反馈摘要
从 Issue 评论中提炼的关键信息：

*   **痛点**：
    *   **认证繁琐**：飞书配置和 Google OAuth 是难点，用户在处理 "app_id not configured" 和 OAuth 屏蔽时感到困扰。
    *   **本地开发受限**：希望在内网使用 HTTP 模型服务被系统强制 HTTPS 策略拦截，感觉不够灵活。
*   **期望**：
    *   希望 Agent 能更好地处理结构化数据，而不是创建碎片化的文档。
    *   期待 Web 界面具备基本的管理功能（如删除旧对话）。
*   **正面反馈**：
    *   一旦配置问题解决（如飞书 Issue），用户对功能的回复表示认可（Issue Closed）。

## 8. 待处理积压
虽然大部分 Issue 都得到了及时更新，但以下长期或重大 Issue 需关注：

*   **[#902 (Google OAuth)](https://github.com/nearai/ironclaw/issues/902)**：3月10日提出，至今未解决，影响 Google Suite 工具的使用，可能需要架构层面的变动（如引入 SSO 代理或更换提供商）。
*   **ACP 协议支持** (PR **[#1506](https://github.com/nearai/ironclaw/pull/1506)**, Issue **[#1915](https://github.com/nearai/ironclaw/issues/1915)**)：虽然主要 ACP 路径已打通，但后续的错误处理（follow-up prompt failures）仍存在 Bug，可能导致沙盒作业状态显示不准确。
*   **v2 架构合并进度**：PR **[#1557](https://github.com/nearai/ironclaw/pull/1557)** 规模庞大，且带有 `risk: high` 标签，尚未合并。这是项目未来的关键，但也是潜在的风险点。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-03)

## 📅 今日速览
LobsterAI 项目在今日（2026-04-03）展现了极高的开发活跃度，处于**快速迭代与功能扩充**阶段。过去 24 小时内共产生了 **84 条代码更新（Issues + PRs）**，虽然没有新版本发布，但核心功能逻辑变动频繁。值得注意的是，项目出现了一次罕见的“回滚（Revert）”操作（PR #1380），表明新功能在合入主分支后发现了严重的架构冲突，导致部分功能暂停推进。社区讨论集中在 UI/UX 细节优化和 Agent 管理功能的增强上。

## 📦 版本发布
*当前无新版本发布。* 项目基于最新的提交进行开发，部分新功能正在等待验证。

## 🚀 项目进展
今日虽然发生了回滚事件，但在 Agent 管理、交互体验和特定功能支持上仍取得了显著进展：

1.  **Agent 生态增强**：[PR #1366](https://github.com/netease-youdao/LobsterAI/pull/1366) 新增了 Agent 导入导出功能，允许用户以 JSON 格式备份和迁移 Agent 配置，极大地提升了自定义 Agent 的可移植性。
2.  **搜索能力升级**：[PR #1369](https://github.com/netease-youdao/LobsterAI/pull/1369) 为任务搜索增加了“对话内容全文检索”能力，解决了之前仅能搜索标题的痛点，并实现了标题与内容的分区展示。
3.  **UI 交互优化**：
    *   **模型选择**：[PR #1364](https://github.com/netease-youdao/LobsterAI/pull/1364) 在新建任务页面的输入框工具栏中新增了模型选择器，使用户无需在顶部和输入框之间频繁切换。
    *   **操作反馈**：[PR #1362](https://github.com/netease-youdao/LobsterAI/pull/1362) 允许通过 ESC 键关闭权限弹窗，符合桌面软件的操作直觉。
4.  **Bug 修复**：
    *   [PR #1372](https://github.com/netease-youdao/LobsterAI/pull/1372) 修复了在会话中多文件选择时只保留最后一个文件的严重 Bug。
    *   [PR #1368](https://github.com/netease-youdao/LobsterAI/pull/1368) 修复了 Qwen 模型在 Coding Plan 模式下的调用错误。
5.  **⚠️ 重大回滚**：[PR #1380](https://github.com/netease-youdao/LobsterAI/pull/1380) 回滚了“每个会话独立绑定 AI 模型”的功能（原 PR #1374）。原因是该实现导致 OpenClaw session 文件记录了模型快照，破坏了全局模型切换对现有会话（如微信 IM 通道）的生效机制。这意味着该功能需要重新设计架构。

## 🔥 社区热点
今日讨论热度较高的议题主要集中在**用户体验细节**和**Agent 自定义能力**：

*   **[Feature] 支持拖拽调整侧边栏宽度** ([Issue #1314](https://github.com/netease-youdao/LobsterAI/issues/1314))
    *   **诉求**：用户对当前固定的 240px 侧边栏宽度感到不满，希望能通过拖拽自由调整，以适应不同屏幕尺寸或查看更长的会话标题。
*   **[Bug] 套餐模型无法识别剪贴板粘贴图片** ([Issue #1295](https://github.com/netease-youdao/LobsterAI/issues/1295))
    *   **现状**：已关闭。该问题指出通过 Cmd+V 粘贴图片时 AI 无法识别，但附件上传正常。社区对该问题的关注度较高，主要影响使用 Doubao/Qwen 等套餐模型的用户。
*   **[Bug] Popo 机器人无响应/Gateway 报错** ([Issue #1254](https://github.com/netease-youdao/LobsterAI/issues/1254))
    *   **现状**：已关闭。涉及内部集成工具的稳定性。

## 🐛 Bug 与稳定性
今日报告的 Bug 涉及系统级崩溃、核心功能失效和数据展示错误，需重点关注：

*   **[严重] 系统蓝屏 (BSOD)**：[Issue #1354](https://github.com/netease-youdao/LobsterAI/issues/1354) 报告在让 LobsterAI 启动 Pageant 后电脑出现蓝屏，并附带了日志。虽然标记为偶现，但涉及系统稳定性，需优先排查。
*   **[严重] 逻辑错误/数据不一致**：
    *   [Issue #1357](https://github.com/netease-youdao/LobsterAI/issues/1357)：AI 报告已启动 Pageant，实际未启动（状态不同步）。
    *   [Issue #1359](https://github.com/netease-youdao/LobsterAI/issues/1359)：已删除的任务在重启后再次出现（状态持久化问题）。
*   **[中等] 任务系统 UI/逻辑缺失**：
    *   [Issue #1348](https://github.com/netease-youdao/LobsterAI/issues/1348)：定时任务名称重复没有校验（已有 Fix PR #1367）。
    *   [Issue #1329](https://github.com/netease-youdao/LobsterAI/issues/1329)：新建定时任务通知渠道无选项。
*   **[中等] 模型调用异常**：
    *   [Issue #1296](https://github.com/netease-youdao/LobsterAI/issues/1296)：上传 3M 长图解析导致页面报错。
    *   [Issue #1298](https://github.com/netease-youdao/LobsterAI/issues/1298)：输入两个字即提示“内容过长”，疑似 Token 计算错误。

## 💡 功能请求与路线图信号
用户在今日提出了大量细致的 UX 改进建议，显示出 LobsterAI 正从“可用”向“好用”过渡：

*   **会话管理**：[Issue #1337](https://github.com/netease-youdao/LobsterAI/issues/1337) 建议将会话列表按时间分组（今天、昨天、本周），参考 ChatGPT 的交互模式。
*   **内容导出**：[Issue #1345](https://github.com/netease-youdao/LobsterAI/issues/1345) 请求支持将会话导出为 Markdown 文件，而不仅仅是图片。
*   **代码体验**：[Issue #1302](https://github.com/netease-youdao/LobsterAI/issues/1302) 希望代码块支持行号显示；[Issue #1289](https://github.com/netease-youdao/LobsterAI/issues/1289) 建议长代码块自动折叠。
*   **历史记录**：[Issue #1341](https://github.com/netease-youdao/LobsterAI/issues/1341) 希望输入框支持方向键回溯历史发送记录。

## 🗣️ 用户反馈摘要
*   **Agent 管理痛点**：用户 [devilszy](https://github.com/netease-youdao/LobsterAI/issues/1361) 指出自定义 Agent 详情页存在多处本地化缺失（如删除按钮显示英文 "delete"）和逻辑漏洞（如允许重名创建 [Issue #1360](https://github.com/netease-youdao/LobsterAI/issues/1360)），反映出 Agent 管理模块的测试覆盖有待加强。
*   **场景化反馈**：用户 [MaoQianTu](https://github.com/netease-youdao/LobsterAI/issues/1330) 提供了非常专业的交互改进建议（包括错误状态红点、侧边栏快捷键提示、骨架屏加载等），这表明有资深开发者正在深入使用 LobsterAI，并对其交互一致性有较高期待。

## ⚠️ 待处理积压
*   **OpenClaw 引擎兼容性**：[Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293) 指出自定义 Studio HTTP 模式的 MCP 无法被 OpenClaw 引擎调用，仅 SSE 模式可用。这限制了 MCP 服务器的集成灵活性，目前尚未看到明确的修复 PR。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

你好！我是 Moltis 项目的开源 AI 分析师。以下是 **2026 年 4 月 3 日**的项目动态日报。

---

## 📅 Moltis 项目日报 | 2026-04-03

### 1. 今日速览
Moltis 项目在过去 24 小时内保持了**中等活跃度**，虽然 Issue 和 PR 的总量分别为 3 个，但涉及的功能深度和 Bug 修复质量较高。
*   **核心进展**：今日最关键的动态是针对 GraphQL 接口会话管理的修复（PR #544），这直接解决了用户在多会话场景下的痛点。
*   **新特性研发**：带有 CDP 录屏功能的交互式浏览器 UI（PR #531）正在积极推进中，展示了项目在自动化交互能力上的野心。
*   **稳定性**：虽然 Web 端的一个 React 响应式 Bug（#536）已关闭，但新出现的 Slack TLS 支持缺失（#543）和 GraphQL sessionKey 忽略问题（#542）提醒后端连接层仍需加固。

---

### 2. 版本发布
*   **当前状态**：过去 24 小时内 **无新版本发布**。
*   **关注点**：鉴于 PR #544（GraphQL 修复）和 PR #540（UX 改进）处于待合并或已关闭状态，预计维护者可能会在近期整合这些改动后发布一个补丁版本。

---

### 3. 项目进展
今日代码层面的变动主要集中在**核心功能的健壮性**和**用户体验优化**上：

*   **[合并] 提升模型列表交互体验 (PR #540)**
    *   **作者**: penso
    *   **内容**: 此 PR 优化了设置和引导流程中的模型列表展示。通过折叠、智能排序（首选 > 推荐 > 日期 > 版本 > 字母）和内联错误处理，显著减少了界面杂乱感（例如解决了 OpenAI 模型展示过长的问题）。
    *   **价值**: 大幅提升了用户在面对海量模型时的配置效率。
    *   **链接**: [moltis-org/moltis#540](https://github.com/moltis-org/moltis/pull/540)

*   **[待合并] 修复 GraphQL 会话密钥逻辑 (PR #544)**
    *   **作者**: letsrock85
    *   **内容**: 修复了 GraphQL `chat.send` 和 `chat.history` 接口忽略显式 `sessionKey` 的问题。该修复确保系统优先使用用户指定的会话，而不是回退到连接的默认会话。
    *   **价值**: 关键修复，直接影响多会话聊天的准确性，防止上下文混淆。
    *   **链接**: [moltis-org/moltis#544](https://github.com/moltis-org/moltis/pull/544)

*   **[开发中] 交互式浏览器查看 UI (PR #531)**
    *   **作者**: penso
    *   **内容**: 为“设置 > 浏览器”页面增加了基于 CDP (Chrome DevTools Protocol) 的实时查看和交互 UI，支持鼠标、键盘和滚动操作，并提供按 Agent 隔离的 Cookie 配置。
    *   **价值**: 这是一个重大的功能增强，将赋予用户对自动化浏览器 session 的可视化和控制能力。
    *   **链接**: [moltis-org/moltis#531](https://github.com/moltis-org/moltis/pull/531)

---

### 4. 社区热点
今日社区讨论主要集中在**集成服务的稳定性**上：

*   **[讨论焦点] GraphQL 会话路由失效 (Issue #542)**
    *   **问题**: 用户报告 GraphQL 流程中无法正确切换或指定 `sessionKey`，导致聊天记录错乱。
    *   **热度**: ⚠️ 高（已有对应的修复 PR #544 提交，响应迅速）。
    *   **链接**: [moltis-org/moltis#542](https://github.com/moltis-org/moltis/issues/542)

*   **[新功能需求] 浏览器交互可视化 (PR #531)**
    *   **反应**: 尽管是功能开发，该 PR 引入了高度可视化的“浏览器室”概念，引起了关注。它允许用户像操作远程桌面一样操作 AI 的浏览器实例。

---

### 5. Bug 与稳定性
今日报告的 Bug 涉及**连接层**和**前端响应**，严重程度中等：

1.  **[OPEN - 严重] Slack 客户端缺少 TLS 支持 (Issue #543)**
    *   **描述**: Slack 客户端构建时未包含 TLS 支持。
    *   **影响**: 可能导致 Slack 连接不安全或无法连接到强制加密的服务器，属于安全合规性问题。
    *   **状态**: 待修复。
    *   **链接**: [moltis-org/moltis#543](https://github.com/moltis-org/moltis/issues/543)

2.  **[OPEN - 高] GraphQL chat.send/history 忽略 sessionKey (Issue #542)**
    *   **描述**: API 层逻辑错误，导致无法正确选择聊天会话。
    *   **关联**: 已有 Fix PR ([#544](https://github.com/moltis-org/moltis/pull/544))。
    *   **链接**: [moltis-org/moltis#542](https://github.com/moltis-org/moltis/issues/542)

3.  **[CLOSED - 中] Web 端模态框无法开启 (Issue #536)**
    *   **描述**: 设置页面中的渠道连接按钮（Telegram/Discord等）点击无反应。
    *   **根因**: Preact signal 在嵌套渲染中的响应性丢失。
    *   **状态**: 已关闭。

---

### 6. 功能请求与路线图信号
从 PR #531 的更新可以看出项目的未来方向：
*   **Agent 自动化可视化**: 项目正在从单纯的“后台自动化”转向“可观测、可干预的自动化”。允许用户查看 CDP 录屏并实时介入，表明 Moltis 旨在打造更透明的 AI Agent 操作系统。

---

### 7. 用户反馈摘要
*   **痛点**: 用户对**连接配置**（如 Slack、Discord）的稳定性非常敏感。从 Issue #536（模态框打不开）到 #543（TLS 缺失），可以看出用户在尝试集成第三方服务时遇到了阻碍。
*   **API 体验**: Issue #542 的反馈表明，高级用户依赖 GraphQL 进行精细化的会话管理，API 的一致性对他们至关重要。

---

### 8. 待处理积压
*   **PR #531 (feat: interactive browser viewing UI)**: 这是一个大型功能 PR，虽然更新频繁，但自 3 月 31 日开启以来尚未合并。建议维护者关注代码审查进度，以免功能分支偏离主分支过远。
    *   **链接**: [moltis-org/moltis#531](https://github.com/moltis-org/moltis/pull/531)

---
*本报告由 AI 智能体自动生成，数据来源：GitHub Public Events*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

你好！我是你的 AI 智能体项目分析师。基于 CoPaw (agentscope-ai/CoPaw) 2026-04-03 的 GitHub 数据，以下是今日项目动态日报。

---

### 📊 CoPaw 项目动态日报 | 2026-04-03

#### 1. 今日速览
CoPaw 项目今日处于**高度活跃状态**，正处于 v1.0.1 大版本发布前的密集冲刺阶段。
*   **代码活跃度：** 过去 24 小时内有 **44 条 PR** 更新，其中 21 条已完成合并/关闭，显示核心开发团队正在快速迭代。
*   **社区响应：** Issues 新增/活跃达 50 条，关闭 15 条。社区反馈集中在 **Browser 工具的稳定性**、**多模型适配** 以及 **本地部署** 问题。
*   **版本动态：** 刚刚发布了 `v1.0.1-beta.1`，主要针对控制台体验进行了修复，同时引入了多个架构级改进（如安全加固、配置重构）。

#### 2. 版本发布
**[v1.0.1-beta.1]** - 已发布
*   **主要内容：**
    *   **修复:** 修正了工作区文件时间戳显示 "NaNd ago" 的问题。
    *   **功能:** 更新了 Console/Skill 相关组件逻辑。
*   **风险提示：** 当前为 Beta 版本，建议关注后续 `v1.0.1` 正式版的发布说明。
*   [查看 Release 详情](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.1-beta.1)

#### 3. 项目进展
今日合并的 PR 涉及安全、架构优化及核心功能增强，项目整体向更稳定、更规范的方向推进：
*   **🔒 安全漏洞修复：** 移除了 `AuthMiddleware` 中针对本地主机的 API 认证绕过逻辑。这修复了反向代理或隧道环境下的潜在安全风险。
    *   *关联 PR:* [#2840](https://github.com/agentscope-ai/CoPaw/pull/2840) (已合并)
*   **🏗️ 架构重构：** 使用 Pydantic Settings 替换了原有的 `EnvVarLoader`，统一了配置管理，增强了类型安全。
    *   *关联 PR:* [#2849](https://github.com/agentscope-ai/CoPaw/pull/2849) (Open)
*   **📦 功能增强：**
    *   **Chat 历史保存：** 修复了重命名会话标题后被覆盖的问题。
    *   **Shell 工具优化：** 改进了超时处理机制，增加了参数类型转换。
    *   *关联 PRs:* [#2847](https://github.com/agentscope-ai/CoPaw/pull/2847) (Open), [#2834](https://github.com/agentscope-ai/CoPaw/pull/2834) (已合并)

#### 4. 社区热点
今日讨论热度最高，反映了用户的核心痛点：
*   **[#2755 Browser 占用与崩溃问题](https://github.com/agentscope-ai/CoPaw/issues/2755)** (评论: 6)
    *   **内容：** Agent 第二次调用 `browser_use` 频繁报错 "browser occupied"。
    *   **分析：** 这是最受关注的痛点，严重影响任务连续性。虽然官方关闭了 Issue，但用户显然仍在遭受困扰。
*   **[#2828 MiniMax 模型无法使用](https://github.com/agentscope-ai/CoPaw/issues/2828)** (评论: 6)
    *   **内容：** 配置内置或自定义 MiniMax 模型均失败。
    *   **分析：** 模型兼容性是高频问题，可能与新版本 API 适配有关。
*   **[#2816 AI 调用工具漏填参数](https://github.com/agentscope-ai/CoPaw/issues/2816)** (评论: 5)
    *   **内容：** Agent 急于执行任务，调用工具时经常忘记填写参数。
    *   **分析：** 涉及 LLM 推理逻辑与 Prompt 优化，是 Agent 智能化程度的直接体现。
*   **[#2291 Help Wanted 贡献指南](https://github.com/agentscope-ai/CoPaw/issues/2291)** (评论: 41)
    *   **分析：** 社区贡献热情高涨，这是一个长期活跃的 "Good First Issue" 聚集地。

#### 5. Bug 与稳定性
*   **🔴 高危/功能性阻断：**
    *   **文件丢失 Bug (#2826):** 在 Workspace 修改 Skill 内容时，点击保存导致**同文件夹下其他文件被意外删除**。这是一个极具破坏性的 Bug，需立即修复。
    *   **本地模型 GPU 调用失败 (#2725):** 用户反馈 RTX 3060 无法被识别，仅使用 CPU 推理，影响本地部署体验。
*   **🟡 中频/干扰性 Bug：**
    *   **Gemini 系列报错 (#2033, #2801):** "Corrupted thought signature" 错误依然存在。
    *   **飞书渠道 413 错误 (#2817):** 消息体积过大导致发送失败。
*   **✅ 已有修复方案 (PR)：**
    *   Windows 下 Browser 启动失败 (#2861)。
    *   Browser 空闲超时无法自动退出 (#2843)。

#### 6. 功能请求与路线图信号
从 Issues 和 PR 中识别出的未来趋势：
*   **自动更新 (#2846):** 用户强烈希望桌面端增加自动更新功能，避免手动卸载安装的繁琐。
*   **Claude Code 模式 (#2811):** 社区建议借鉴 Claude Code 的交互模式，这说明用户对更深度的代码生成/控制能力有需求。
*   **多智能体会议系统 (#2785):** 这是一个正在开发的大型 Feature PR，旨在支持结构化的多智能体会议，值得关注。
*   **全局搜索 (#2842):** 正在开发跨所有会话的搜索功能，这将大幅提升知识检索效率。

#### 7. 用户反馈摘要
*   **满意度：** 用户对 "Help Wanted" 机制参与度很高，对新增的模型（如 Qwen3.5-27B）效果表示期待。
*   **痛点：**
    *   **Browser 工具不可靠：** 频繁的占用报错让用户感到沮丧。
    *   **配置复杂：** Ollama 和本地模型的配置依然被吐槽 "太难配置" (Issue #2298)。
    *   **UI 细节：** 批准操作时的描述在 UI 中不够显眼，需要展开 Thinking 才能看到，用户体验不佳。

#### 8. 待处理积压
*   **长期未解 Bug - CPU 占用 100% (#2348):** Worker 进程在无负载下占用 100% CPU 的问题自 3 月下旬报告至今仍未彻底解决。
*   **本地模型支持：** 尽管有新的 PR (如 #1512) 尝试支持 OpenAI 格式工具调用，但 llama.cpp 部署下的工具调用报错 (#2839) 依然是阻碍本地模型落地的关键障碍。

---
**分析总结：** CoPaw 目前正处于快速迭代期，大量的 PR 合并表明项目活跃度极高。然而，**Browser 工具的稳定性**和**文件系统操作的 Bug** 是当前需要警惕的 "技术债"。建议用户在使用 Beta 版本时注意备份 Workspace 数据。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-04-03

## 1. 今日速览
ZeptoClaw 项目今日处于**高强度的清理与重构阶段**，维护者在过去 24 小时内关闭了 **10 个** Issue，主要集中在“Crucible”迁移计划的文档规范与代码审计上。虽然 Issues 处理量巨大，但代码合并活动暂停（PR 更新 1 条，为待合并状态），且无新版本发布。项目当前重心在于理清技术债务、规范迁移规格以及确保构建稳定性，尚未进入新功能开发阶段。

## 2. 版本发布
*暂无新版本发布。*

## 3. 项目进展
今日虽无 PR 合并，但 Issue 的大量关闭标志着项目在“幕后”进行了显著的架构梳理工作：

*   **Crucible 迁移计划收尾**：关闭了大量关于 OpenSpec 规格说明、文档调和及清理工作的 Issue（如 #477, #478, #479），表明 ZeptoClaw 向 Crucible 的分支迁移计划已从“规划/建议”阶段转入“待执行”阶段。
*   **技术债务清理**：通过 Issue #483 和 #484，项目识别并着手修复了代码库中的遗留代码和构建稳定性问题，这为后续的合并工作扫清了障碍。
*   **二进制插件修复**：Issue #485 的关闭意味着修复了 JSON-RPC 调用方法（从 `execute` 改为 `tools/call`），解决了 Telegram 工具调用的兼容性问题。

## 4. 社区热点
今日社区活跃点集中在 **RFC（征求意见稿）与技术文档的更新**，涉及对未来的讨论：

*   **[RFC] Crucible 迁移规格硬化** ([#480](https://github.com/qhkm/zeptoclaw/issues/480))
    *   **关注度**：1 评论
    *   **核心内容**：细化了 Crucible 迁移的规格，明确了测试/CI 期望、保留状态备份指导以及删除旧的并行规划。
    *   **分析**：这是确保迁移过程数据安全和流程可控的关键文档，反映了维护者对大规模重构的严谨态度。

*   **[RFC] OpenSpec 迁移程序** ([#477](https://github.com/qhkm/zeptoclaw/issues/477), [#478](https://github.com/qhkm/zeptoclaw/issues/478))
    *   **核心内容**：确立了使用 OpenSpec 管理“ZeptoClaw -> Crucible”迁移的结构。
    *   **分析**：这表明项目正在使用一种程序化、规范化的方法来处理复杂的分支切割，而非临时性的修修补补。

## 5. Bug 与稳定性
今日关闭的 Issue 中包含 1 个具体的 Bug 修复：

*   **[严重] Telegram 工具调用静默失败** ([#485](https://github.com/qhkm/zeptoclaw/issues/485))
    *   **问题描述**：Crucible 二进制插件使用 `execute` 方法调用，但 irontodo 期望 `tools/call`，导致 Telegram 触发的工具调用失败并报错 `Unsupported JSON-RPC method`。
    *   **状态**：已关闭（已修复）。
*   **构建稳定性** ([#484](https://github.com/qhkm/zeptoclaw/issues/484))
    *   **问题**：`crucible-migration` 分支存在编译阻塞和验证失败。
    *   **状态**：已关闭（已修复）。

## 6. 功能请求与路线图信号
今日无新的功能请求，主要信号集中在**架构重组**上：

*   **ZeptoClaw vs PicoClaw 分析** ([#476](https://github.com/qhkm/zeptoclaw/issues/476))：增加了代码库对比分析文档，这暗示项目正在理清自身定位，可能在为后续的差异化开发或裁剪做准备。

## 7. 用户反馈摘要
从待处理的 PR #462 中提炼出的用户痛点：

*   **长任务处理体验差**：当用户通过 Telegram 请求开放式研究任务（涉及 4 个以上数据源）时，机器人会**静默失败**（无响应、无错误），而短任务表现正常。
    *   *用户原话*：*"the bot goes silent. No response, no error, nothing."*
    *   *修复方向*：PR #462 提出通过分块和纯文本回退机制来防止这种静默失败。

## 8. 待处理积压
以下 PR 处于待合并状态，建议优先关注以提升用户体验：

*   **[PR #462] 修复 Telegram 消息分块与回退** ([链接](https://github.com/qhkm/zeptoclaw/pull/462))
    *   **创建时间**：2026-03-28
    *   **状态**：Open
    *   **重要性**：高。直接解决长文本导致的服务无响应问题，当前仅更新于 2026-04-02，尚无评论反馈，建议维护者尽快审查代码合并。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 2026-04-03

**分析师**：AI 智能体与个人助手领域观察员
**报告日期**：2026-04-03
**项目地址**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日处于**低活跃度维护状态**。过去 24 小时内代码仓库无任何新 Issue 提出或 Pull Request 变动，显示项目当前处于版本发布后的静默期。尽管无社区交互数据，但项目发布了 v1.7.8 版本，标志着维护者仍在持续进行迭代工作。整体来看，项目目前处于“平稳维护”阶段，主要关注点在于已发布版本的可用性与兼容性修复，特别是针对 macOS 平台的适配问题。

### 2. 版本发布
**[v1.7.8] RivonClaw v1.7.8** ([Release Page](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.8))
*   **更新性质**：维护性更新 / 平台适配修复
*   **核心变更**：
    *   **重点关注**：该版本主要解决了 macOS 平台上的安装受阻问题。针对 macOS Gatekeeper 安全机制导致的“文件已损坏”误报进行了修复或提供了官方绕过方案。
    *   **用户体验改善**：明确了在 macOS 环境下遇到未签名应用拦截时的具体解决步骤（通过 Terminal 终端解除隔离），降低了用户因系统安全警告而放弃使用的门槛。
*   **破坏性变更**：无。
*   **迁移注意事项**：macOS 用户在升级或下载此版本后，若遇到无法打开的情况，需按照 Release Notes 中的指引执行命令行操作以信任应用。

### 3. 项目进展
*   **代码合并**：今日无代码合并记录。
*   **功能推进**：暂无新功能特性推进。项目核心组件 `RivonClaw` 在本次发布中主要致力于提升系统兼容性，而非功能扩展。

### 4. 社区热点
*   **今日概况**：社区活跃度处于静默状态，过去 24 小时内无新增讨论或评论。
*   **历史遗留关注**：结合新版本发布的 Release Notes，社区近期的隐性热点集中在**“macOS 软件签名与公证”**问题上。用户对于直接下载运行体验的流畅度有较高要求，未签名应用带来的信任成本是当前用户体验的主要痛点。

### 5. Bug 与稳定性
*   **严重等级：中等 (兼容性受阻)**
    *   **问题**：macOS 系统拦截未签名的 `.app` 文件，误报“文件已损坏”。
    *   **状态**：已发布修复指引。
    *   **影响范围**：所有在 macOS 上尝试运行 RivonClaw v1.7.8 的用户。
    *   **Fix 状态**：在 Release Notes 中提供了手动修复命令，尚无代码层面的自动化修复 PR（如应用签名）。

### 6. 功能请求与路线图信号
*   **信号分析**：虽然今日无新增 Issues，但从 v1.7.8 的发布内容可以反推，项目的下一阶段重点可能包括：
    *   **应用签名**：彻底解决 macOS 的安装信任问题，可能是未来的优先事项。
    *   **依赖库更新**：维持 `RivonClaw` 作为 AI 助手工具的底层依赖稳定性。
*   **路线图预测**：项目目前处于补丁维护模式，暂未显露出大规模新功能开发的迹象。

### 7. 用户反馈摘要
*   **痛点**：macOS 用户在下载软件后面临“已损坏”的系统警告，造成心理恐慌和使用障碍。
*   **场景**：用户尝试在 macOS 上本地部署或运行 EasyClaw 的核心组件。
*   **评价**：维护者响应迅速，在 Release Notes 中提供了详细的中英文双语解决方案，体现了对跨平台用户体验的重视。

### 8. 待处理积压
*   **当前状态**：积压情况良好。今日无新增 Issues 或 PR，且无长期未响应的悬而未决问题。
*   **建议**：建议维护者关注将应用签名纳入 CI/CD 流程，以减少此类兼容性问题的重复反馈。

---
*注：本报告基于 GitHub 公开活动日志生成，主要反映代码仓库层面的动态。*

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*