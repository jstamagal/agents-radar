# OpenClaw 生态日报 2026-04-11

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-11 00:12 UTC

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

# OpenClaw 项目动态日报 (2026-04-11)

## 1. 今日速览
OpenClaw 项目今日处于**极高活跃度**状态，过去 24 小时内共处理了 **1000 个** Issues 和 PRs（Issues 更新 500 条，PR 更新 500 条）。尽管没有发布新的版本标签，但代码库正在经历密集的迭代，主要集中在**模型兼容性修复**（GPT-5.4/Codex）、**多模态与语音功能增强**以及**多渠道稳定性**方面。社区讨论热度集中在 Agent 身份验证与安全性、以及新版模型（GPT-5.4, Codex）的运行时支持问题上。

## 2. 版本发布
**无新版本发布** (截至 2026-04-11)

## 3. 项目进展
以下是今日值得关注的重要合并或待合并 PR，反映了项目当前的开发重点：

*   **[GPT-5.4 / Codex 兼容性冲刺](https://github.com/openclaw/openclaw/pull/64439)**: 社区维护者 `100yenadmin` 发起了针对 OpenAI 最新模型生态的运行时修复，旨在解决 `openai-codex` 的授权与权限真实性问题，确保 OpenClaw 能准确报告与新版 API 的交互状态。
*   **[UI 体验优化：指令渲染与标准化](https://github.com/openclaw/openclaw/pull/64104)**: 对 Control UI 进行了重大更新，引入了结构化元数据渲染，将原本泄露在聊天气泡中的原始指令（如 `MEDIA:`, `[[audio_as_voice]]`）进行标准化处理，提升了 Web 端的用户体验。
*   **[AWS 语音能力集成](https://github.com/openclaw/openclaw/pull/64318)**: 添加了统一的 `amazon` 插件，集成了 AWS Polly (TTS)、Transcribe (STT) 和 Nova Sonic (实时语音)，显著增强了 OpenClaw 在企业级语音服务上的能力。
*   **[Sub-agent 稳定性修复](https://github.com/openclaw/openclaw/pull/63406)**: 修复了网关重启后上下文丢失的问题，确保重启后的恢复机制能正确保留对话上下文。

## 4. 社区热点
今日讨论度最高的话题集中在**安全性**与**模型回归**上：

*   **[#49971 RFC: Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971)** (79 评论)
    *   **摘要**: 这是一个由 MolTrust (CryptoKRI GmbH) 提出的关于原生 Agent 身份与信任验证的 RFC，关联了 ERC-8004、W3C DID 和 VC 标准。
    *   **诉求**: 社区高度关注 Agent 之间的交互安全与身份认证标准，试图解决“Agent 互不知是谁”的信任黑洞问题。
*   **[#53959 Bug: gpt-5.3-codex does not execute any tools](https://github.com/openclaw/openclaw/issues/53959)** (16 评论)
    *   **摘要**: 更新到 2026.3.23-2 后，OpenAI Codex 模型停止执行任何工具，仅回复文字。
    *   **诉求**: 这是一个高频且严重的回归问题，大量依赖 Codex 进行代码或工具调用的用户受阻。
*   **[#7200 Feature Request: Real-time Voice Conversation Support](https://github.com/openclaw/openclaw/issues/7200)** (17 评论, 👍 18)
    *   **摘要**: 用户强烈希望增加类似电话的实时双向语音通话支持。
    *   **诉求**: 社区对 OpenClaw 的实时交互能力有极高期待，目前仅支持预录语音无法满足即时沟通场景。

## 5. Bug 与稳定性
今日报告的 Bug 显示出近期版本在多媒体处理和特定通道上存在不稳定性：

*   **[严重回归] WhatsApp 媒体发送失败** ([#61726](https://github.com/openclaw/openclaw/issues/61726), [#63126](https://github.com/openclaw/openclaw/issues/63126))
    *   **现象**: 在 2026.4.5 版本后，发送 WhatsApp 附件时显示成功，但接收方仅收到文字，附件丢失。涉及插件重构导致的 `sendMedia` 逻辑断裂。
*   **[功能失效] Matrix 通道消息同步异常** ([#61773](https://github.com/openclaw/openclaw/issues/61773))
    *   **现象**: 虽然显示连接成功 (HTTP 200)，但无法接收任何消息。
*   **[模型配置] GPT-5.4 运行时未支持** ([#37623](https://github.com/openclaw/openclaw/issues/37623))
    *   **现象**: `openai-codex/gpt-5.4` 可配置但在运行时报 `Unknown model` (404)，实际上是未连接到后端逻辑。
*   **[系统集成] Windows 网关重启产生多进程** ([#52044](https://github.com/openclaw/openclaw/issues/52044))
    *   **现象**: `gateway restart` 命令在 Windows 下会 spawn 出 3 个窗口，导致进程混乱。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以窥见未来开发方向：

*   **敏感数据脱敏** ([#64046](https://github.com/openclaw/openclaw/issues/64046)): 用户提出配置文件和日志中的 API Key/Token 应脱敏显示，这是一个关于企业级合规的重要信号。
*   **Token 用量仪表盘** ([#49232](https://github.com/openclaw/openclaw/issues/49232)): 用户希望可视化和追踪 API 成本，暗示 OpenClaw 的商业化或成本管理工具需求在增长。
*   **Agent 信任边界** ([#63430](https://github.com/openclaw/openclaw/issues/63430)): 关于多 Agent 实例协作时的上下文隔离与授权协议，与 #49971 的信任验证相呼应，预示着 OpenClaw 可能在向“多 Agent 协作平台”演进。

## 7. 用户反馈摘要
*   **痛点**: **更新导致的 regression（回归）让用户感到疲惫**。特别是 WhatsApp 附件发送失效、GPT-5.3 工具调用失效等问题，影响了生产环境的稳定性。
*   **体验**: **日志混乱**。用户抱怨日志和 UI 中敏感信息明文展示，且日志中包含大量无关或错误的时间戳信息 ([#33083](https://github.com/openclaw/openclaw/issues/33083))。
*   **期待**: **实时语音**。用户不再满足于“留言板”式的交互，渴望通过 Twilio/WebRTC 实现真正的实时语音对话。

## 8. 待处理积压
以下 Issue 长期未解决（Stale 或长期 Open），建议维护者关注：

*   **[#5116 iMessage FDA 问题](https://github.com/openclaw/openclaw/issues/5116)**: 涉及 macOS 权限深层次问题，导致 FDA 权限无法通过 LaunchAgent 继承，这是 macOS 平台的老大难问题。
*   **[#26691 Nextcloud Talk 无法读取消息](https://github.com/openclaw/openclaw/issues/26691)**: API 报错 998，影响特定企业用户群。
*   **[#30818 Web UI 粘贴图片不发送](https://github.com/openclaw/openclaw/issues/30818)**: Web UI 的基础功能缺陷，影响桌面端用户体验。

---

## 横向生态对比

以下是关于 **2026-04-11** 个人 AI 智能体与助手开源生态的横向对比分析报告。

---

### 1. 生态全景
开源个人 AI 智能体生态今日呈现出**“活跃度高、分化明显、注重基建”**的态势。
*   **头部项目（如 OpenClaw, Zeroclaw）** 正在经历大规模的底层重构，从单体架构向微内核/模块化演进，重点解决模型兼容性和多模态支持，虽伴随阵痛但技术野心显著。
*   **中坚力量（如 NanoBot, Moltis, NullClaw）** 表现出极高的工程响应速度，专注于稳定性修复、安全加固以及外围工具链的完善。
*   **应用层项目（如 LobsterAI, PicoClaw）** 则深陷于版本迭代带来的“回归问题”，UI/UX 体验和实时语音交互成为用户痛点。
*   整体来看，**安全性**、**多模型/多 API Key 管理**以及**企业级集成**是全行业共同关注的焦点。

---

### 2. 各项目活跃度对比 (2026-04-11)

| 项目 | 今日 Issues | 今日 PRs | 版本发布 | 活跃度 | 健康度/关键问题 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **OpenClaw** (参照) | 500 | 500 | 无 | **极高** | 🟡 密集迭代中，Bug 回归频繁 (WhatsApp, Codex)，架构债务显现。 |
| **NanoBot** | 29 | 53 | 无 | **极高** | 🟢 核心逻辑修复迅速，用户口碑稳定，正解决配置与沙箱问题。 |
| **Zeroclaw** | 28 | 33 | 无 | **极高** | 🟠 阵痛期：微内核重构 尚未完成，暂无合并，存在严重积压 Bug。 |
| **IronClaw** | 34 | 42 | 有 (组件) | **高** | 🟠 V2 架构处于 "Bug Bash" 阶段，发现多个严重逻辑错误，需攻坚。 |
| **CoPaw** | 36 | 50 | 无 | **极高** | 🔴 资源泄漏 与数据丢失 问题拉响了警报。 |
| **Moltis** | 27 (Total) | 多个合并 | **有** | **高** | 🟢 发布了高质量 Hotfix，Hook 系统与语音处理进展显著。 |
| **NullClaw** | 若干 | 13 | **有** | **高** | 🟢 响应极佳，迅速修复了 Docker 和 API 兼容性痛点。 |
| **PicoClaw** | 16 | 28 | **有** | **高** | 🟡 WebSocket 连接回归问题导致客户端体验下降，Discord 运营受质疑。 |
| **LobsterAI** | 8 | 20 | 无 | **中** | 🟠 网关启动崩溃 与客户端不稳定，处于快速修复状态。 |
| **NanoClaw** | 6 | 19 | 无 | **中** | 🟢 专注于 Docker 容器安全与 OAuth 认证，讨论向企业级 DB 迁移。 |
| **EasyClaw** | 0 | 0 | **有** | **低** | 🟢 静默维护，仅发布 macOS 兼容性修复版本，项目极稳但缓慢。 |
| **TinyClaw** | 0 | 0 | 无 | **静默** | 🟢 处于维护模式，仅有一个修复 PR 在审。 |
| **ZeptoClaw** | 0 | 0 | 无 | **停更** | ⚪ 过去 24 小时无活动。 |

---

### 3. OpenClaw 在生态中的定位

作为生态核心参照，OpenClaw 展现出**“大而全”的生态位特征**：
*   **规模优势**：其 Issues 和 PR 处理量（1000条）是其他同类项目的数倍甚至十倍，拥有最广泛的用户基础和贡献者群体。
*   **技术路线**：定位为**全能型 Agent 平台**，试图同时支持最广泛的模型（GPT-5.4/Codex）、最广泛的渠道 和最复杂的企业级需求（身份认证 RFC）。
*   **当前挑战**：相比 NanoBot 的“稳定”或 Moltis 的“精致”，OpenClaw 正面临**“大系统熵增”**的困扰。今日报告的多个严重 Regression（如 WhatsApp 附件丢失、Codex 工具调用失效）反映了其体量带来的维护难度。
*   **社区规模**：社区讨论不仅涉及代码 Bug，更深入到了 **RFC 标准制定**（如 Agent 身份认证），这是其他项目尚未达到的成熟度标志。

---

### 4. 共同关注的技术方向

从多个项目的动态中，提炼出以下行业共同痛点与诉求：

*   **多模型/多云策略**
    *   **涉及项目**: IronClaw, NullClaw, LobsterAI, PicoClaw, NanoClaw
    *   **具体诉求**: 普遍要求支持自定义 Base URL、多 API Key 轮换/负载均衡、以及同时接入 OpenAI 和 Anthropic/Claude 的能力。
*   **安全性增强**
    *   **涉及项目**: OpenClaw, NanoBot, CoPaw, NanoClaw
    *   **具体诉求**: 环境变量/API Key 脱敏显示、沙箱隔离、敏感数据不泄露、OAuth Token 自动刷新。
*   **实时语音能力**
    *   **涉及项目**: OpenClaw, PicoClaw, Moltis
    *   **具体诉求**: 从“录音转文字”转向“实时双向流式语音对话”，以及集成了 Twilio/AWS 等企业级 TTS/STT 服务。
*   **上下文管理优化**
    *   **涉及项目**: IronClaw, Moltis, Zeroclaw
    *   **具体诉求**: 解决长对话中的 Token 消耗问题，探索“确定性摘要压缩”或“无损上下文管理 (LCM)”，而非单纯依赖 LLM 压缩。
*   **企业级集成**
    *   **涉及项目**: NullClaw, NanoClaw, IronClaw
    *   **具体诉求**: 引入 PostgreSQL/MySQL 支持、SMTP 邮件通道、以及针对企业 IM 的私有化部署适配。

---

### 5. 差异化定位分析

| 项目 | 定位关键词 | 目标用户 | 架构/功能特征 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **操作系统级** | 极客、企业开发者 | 功能最全，架构最重，旨在成为 AI 时代的操作系统，但也最复杂。 |
| **NanoBot** | **稳如磐石** | Windows 用户、追求稳定的生产环境 | 专注于稳定性与 Windows 兼容性，轻量级，代码质量高，Bug 修复极快。 |
| **Zeroclaw** | **架构先锋** | Rust 开发者、极客 | 追求极致性能与模块化，正在进行 Rust 微内核重构，处于阵痛期。 |
| **Moltis** | **工程化典范** | 企业集成、多渠道用户 | 拥有极强的 Hook 系统和事件驱动架构，注重解决现实工程问题（如 OAuth, STT）。 |
| **CoPaw** | **多智能体编排** | AI 研究者、团队协作场景 | 侧重于多 Agent 团队协作、任务规划和复杂的编排能力。 |
| **PicoClaw** | **硬件交互** | 树莓派/边缘设备玩家 | 侧重于与硬件（Pico）的交互，以及资源受限环境下的部署。 |
| **NanoClaw** | **安全沙箱** | 安全敏感开发者 | 深度绑定 Docker 容器技术，强调代码执行的绝对隔离与安全。 |
| **LobsterAI** | **企业办公/IM** | 国内网易/POPO用户 | 侧重重度集成企业 IM（钉钉/POPO）和办公自动化场景。 |

---

### 6. 社区热度与成熟度分层

*   **第一梯队（生态基石）：OpenClaw**
    *   处于成熟期，但面临**技术债务清理**阶段。社区讨论已上升到标准制定（RFC）和治理层面。
*   **第二梯队（快速迭代者）：NanoBot, Moltis, IronClaw, CoPaw**
    *   处于**高速成长期**。代码提交频繁，功能快速落地，但也伴随着版本间的剧烈动荡和 Bug 涌现。
*   **第三梯队（垂直/巩固期）：PicoClaw, NanoClaw, LobsterAI, NullClaw**
    *   针对特定场景（硬件、安全、办公、Docker）进行深度优化，处于**巩固用户体验**和修复关键 Bug 的阶段。
*   **第四梯队（维护/休眠）：TinyClaw, ZeptoClaw, EasyClaw**
    *   活跃度较低，主要是偶尔的维护性更新或处于静默状态。

---

### 7. 值得关注的趋势信号

1.  **从“被动工具”到“主动协作”**：
    *   CoPaw 的“Agent Teams”讨论和 Zeroclaw 的 RFC 显示，行业正从单一的“问答机器人”向**多角色分工、自发协作的 Agent 组织**演进。
2.  **成本控制与可观测性**：
    *   NullClaw, OpenClaw, IronClaw 均出现了对 Token 使用监控、成本可视化仪表盘的需求。这说明 AI 应用正在从“尝鲜”走向**大规模生产部署**，成本成为核心考量。
3.  **架构微内核化**：
    *   Zeroclaw 和 OpenClaw 的底层动向表明，为了应对日益复杂的插件生态，单体架构已难以为继，**微内核 + 插件化**将是大型 Agent 项目的终局形态。
4.  **实时交互是下一个高地**：
    *   OpenClaw, PicoClaw, Moltis 对实时语音 的强烈需求，预示着 2026 年下半年的竞争焦点将从“文本生成”转向“低延迟语音交互”。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目每日动态日报
**日期：** 2026-04-11
**分析对象：** HKUDS/nanobot

---

### 1. 今日速览
NanoBot 项目今日展现出极高的活跃度，在过去 24 小时内处理了 **53 条 PR** 和 **29 个 Issues**，社区贡献热情高涨。核心工程重点集中在**架构重构与稳定性修复**，特别是对提供商配置系统的底层调整以及对多个严重 Bug（如正则截断、文件覆盖、MCP 连接冲突）的快速响应。虽然没有新版本发布，但大量的合并工作表明项目正在积极迈向下一个稳定版，代码库健康度显著提升。

### 2. 版本发布
*今日无新版本发布。*
*注：当前最新版本为 0.1.5，今日大量的修复工作可能为后续的小版本迭代（0.1.6 或 0.2.0）做铺垫。*

### 3. 项目进展
今日合并/关闭的代码变更主要集中在系统底层能力与安全增强上，项目向更强健的方向迈进了重要一步：
*   **[Security] 防止环境变量泄露**：合并了 PR #2831，修复了 `exec` 工具会将父进程环境变量（包含 API Key 等敏感信息）泄露给子进程的安全漏洞，增强了沙箱隔离性。
*   **[Feature] 消息总线去重**：PR #2981 引入了会话级别的入站消息去重机制，防止在队列或飞行中的重复消息导致 LLM 消耗额度，优化了资源使用。
*   **[Feature] WebSocket 通道确立**：随着 PR #2911 和 #2946 的关闭，WebSocket 调试工具及服务器通道正式落地，为未来的 WebUI 和远程调试打下基础。
*   **[Refactor] 提供商配置升级**：PR #3025/3026 正在推进配置格式从单一对象向列表格式迁移，这将支持多端点负载均衡和故障转移，是架构的重大升级。

### 4. 社区热点
今日讨论焦点集中在产品形态与核心体验上：
*   **[Feature Discussion] NanoBot 是否需要独立的 WebUI? (#2949)** (👍 6 | 💬 9)
    *   **链接**: [HKUDS/nanobot#2949](https://github.com/HKUDS/nanobot/issues/2949)
    *   **分析**: 尽管今日合并了 WebSocket 调试工具，社区对于是否需要一个像 Open-Claw 那样功能完备的 Web 界面展开了激烈讨论。一部分用户希望有可视化的 Dashboard，另一部分则坚持 NanoBot 应作为纯 CLI/Headless 后端保持轻量。这一 Issue 将决定项目未来的产品定位。
*   **[Feature Request] 自动技能发现与生成 (#2927)** (👍 0 | 💬 6)
    *   **链接**: [HKUDS/nanobot#2927](https://github.com/HKUDS/nanobot/issues/2927)
    *   **分析**: 用户希望 Agent 能从行为模式中主动生成 Skill，而不是仅依赖手动创建。这触及了 NanoBot "Self-evolving" 的核心愿景，引发了关于 Agent 自主性的深度探讨。

### 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，其中部分已有修复方案：
*   **[Critical] 正则表达式误截断消息 (#3004)**: 用户反馈 `strip_think()` 函数的正则匹配逻辑有误，导致内容中包含特定标签时会错误截断正文。
    *   *状态*: 已有修复 PR #3020 (锚定正则到字符串开头)。
*   **[High] MCP 服务器配置冲突导致启动失败 (#3018)**: 配置多种类型（StreamableHttp + Stdio）的 MCP 服务器会导致 Cancel Scope 冲突。
    *   *状态*: 已有修复 PR #3019 (独立 Task 隔离连接)。
*   **[High] GitStore 初始化覆盖 `.gitignore` (#2980)**: Dream 功能初始化时会强制覆盖工作区的 `.gitignore`，破坏了用户已有的 Git 配置。
    *   *状态*: 已有修复 PR #3009 (追加而非覆盖)。
*   **[Medium] DingTalk 下载文件丢失扩展名 (#3016)**: 钉钉通道下载的图片文件缺乏扩展名，导致互相覆盖。
    *   *状态*: 已有修复 PR #3016。

### 6. 功能请求与路线图信号
从今日的 PR 和 Issues 中可以看出以下潜在的开发方向：
*   **配置系统现代化**: PR #3023 提议支持自定义 Provider 名称，不再受限于注册表定义，且 PR #3026 正在重构配置以支持列表格式。这预示着下一版本将大幅增强对多模型、多端点部署的支持。
*   **并发控制智能化**: Issue #3008 提出将硬编码的并发限制（默认为 3）改为基于令牌桶或动态队列的智能控制，以适应不同模型提供商的速率限制。
*   **WhatsApp 数据隔离**: Issue #2836 请求为不同的 WhatsApp Chat ID 提供独立的工作区，以解决隐私泄露问题（A 用户的信息被 B 用户看到）。这是多租户部署的重要需求。

### 7. 用户反馈摘要
*   **口碑对比**: 用户 `bigsinger` 在 Issue #2774 和 #1265 中强烈反馈，在 Windows 环境下 NanoBot 的稳定性远超 OpenClaw，称赞其“一如既往的稳定”，并建议项目利用这一优势快速获取 Windows 用户群体。
*   **模型体验**: Issue #2944 反馈 Gemma 4 模型的 `<thought>` 标签过滤失效，导致思维过程泄露给用户，影响体验。这反映出对新模型格式的适配仍有滞后。
*   **Agent 行为**: Issue #2966 指出使用 `/stop` 命令会丢失当前轮次的上下文，用户希望能保留上下文以便修正方向，而不是重新开始。

### 8. 待处理积压
*   **NapCat QQ 通道 (PR #2379)**: 这是一个已开启较长时间的 PR，旨在支持将 QQ 账号变为 Bot。虽然测试已完成，但尚未合并，值得维护者关注以丰富生态连接器。
*   **可执行权限细化 (PR #2475)**: 允许通过配置文件按用户设置 `exec` 工具的允许/拒绝模式，涉及安全和权限管理，处于待审核状态。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

你好！我是 Zeroclaw 项目分析师。以下是 **2026-04-11** 的项目动态日报。

---

## **Zeroclaw 项目日报 — 2026-04-11**

### **1. 今日速览**
今日 Zeroclaw 社区处于**极高活跃度**状态。过去 24 小时内新增了 28 个 Issue 和 33 个 PR，核心围绕 **v1.0.0 架构重构** 的激烈讨论与实施。
- **架构重构：** “微内核化”工作空间拆分（PR #5559）仍在审查中，引发了关于文档标准、治理结构和 CI/CD 的系列 RFC 提案。
- **Bug 修复：** 社区提交了大量针对 Ollama、Kimi、Mattermost 等具体 provider 和 channel 的修复补丁。
- **版本发布：** 今日无新版本发布。

---

### **2. 版本发布**
无。

---

### **3. 项目进展**
虽然今日**没有**合并 PR（0 个合并/关闭），但以下核心工作正在积极进行，标志着项目正在经历重大内部变革：

*   **【核心架构】微内核化工作空间拆分 (PR #5559)**
    *   **状态：** 待合并
    *   **进展：** 这是一个 28.9万行代码 的重构史诗。它将单体应用拆分为 16 个独立的 crate（包），并引入了特性门控子系统。今日引发了一系列配套的 RFC（如文档归档、OpenTelemetry 标准化）。
    *   **影响：** 极大地提升编译速度和模块化程度，是通往 v1.0.0 的关键基石。
    *   **链接：** [zeroclaw-labs/zeroclaw#5559](https://github.com/zeroclaw-labs/zeroclaw/pull/5559)

*   **【工程基建】文档体系重构 (PR #5589)**
    *   **状态：** 待合并
    *   **进展：** 响应“文档标准 RFC”，将当前混乱的文档树归档至 `legacy/`，为新文档体系铺路。
    *   **链接：** [zeroclaw-labs/zeroclaw#5589](https://github.com/zeroclaw-labs/zeroclaw/pull/5589)

---

### **4. 社区热点**
今日讨论热度集中在**项目未来的顶层设计**上：

*   **🔥 RFC: 从“被动增长”到“意图架构” — ZeroClaw 微内核转型 (#5574)**
    *   **摘要：** 核心维护者 WareWolf-MoonWall 提出了详细的架构转型路径，旨在解决代码库“野蛮生长”带来的混乱。
    *   **关注度：** 5 条评论，不仅是技术讨论，更涉及开发哲学。
    *   **链接：** [zeroclaw-labs/zeroclaw#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)

*   **🔥 RFC: 项目治理与团队协作 (#5577)**
    *   **摘要：** “软件项目失败不是因为代码写得烂，而是因为写代码的人。” 该提案试图建立明确的贡献管道和团队组织结构。
    *   **关注度：** 3 条评论，反映了项目规模扩大后的管理痛点。
    *   **链接：** [zeroclaw-labs/zeroclaw#5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577)

*   **🔥 极速编译效率问题 (#5575)**
    *   **摘要：** 开发者反馈二次开发时编译效率极低（修改一行代码需全量编译）。
    *   **关联：** 此问题正是 PR #5559（工作空间拆分）所要解决的核心痛点之一。
    *   **链接：** [zeroclaw-labs/zeroclaw#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575)

---

### **5. Bug 与稳定性**
今日报告了多个阻塞性（S1）和严重安全（S0）问题，部分已有修复方案：

*   **[S0 - 安全风险] file_write 工具静默失败 (#4627)**
    *   **问题：** 文件写入工具报告成功，但实际文件在宿主机不可见，存在数据丢失风险。
    *   **状态：** 待修复。
    *   **链接：** [zeroclaw-labs/zeroclaw#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627)

*   **[S1 - 阻塞] Ollama Provider 无法调用工具 (#5459)**
    *   **问题：** API 调用中硬编码 `tool_count=0`，导致所有原生支持工具的 Ollama 模型无法调用工具。
    *   **状态：** 待修复。
    *   **链接：** [zeroclaw-labs/zeroclaw#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)

*   **[S1 - 阻塞] Kimi/MiniMax 流式调用工具报错 (#5600)**
    *   **问题：** 开启思考模式的模型在流式回复中若缺少 `reasoning_content`，会导致 API 400 错误。
    *   **状态：** 已有修复 PR [agent] fix(agent): preserve streamed reasoning content (#5606)。
    *   **链接：** [zeroclaw-labs/zeroclaw#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)

*   **[S1 - 阻塞] Channel 监督模式下权限被拒 (#5591)**
    *   **问题：** 通过 Telegram 等 Channel 运行命令时，交互式批准流程失效，一直提示“Denied by user”。
    *   **状态：** 待修复。
    *   **链接：** [zeroclaw-labs/zeroclaw#5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591)

---

### **6. 功能请求与路线图信号**
*   **新增：Cron 任务预检钩子 (#5607)**
    *   **诉求：** 希望在定时任务执行前增加轻量级脚本检查，决定是否跳过执行（类似“门禁”机制）。
    *   **链接：** [zeroclaw-labs/zeroclaw#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607)

*   **新增：Mattermost 私信支持 (#5604)**
    *   **诉求：** 目前仅支持频道互动，希望能实现与 Bot 的私聊功能。
    *   **进展：** 相关的 WebSocket 实时推送改进正在进行中。
    *   **链接：** [zeroclaw-labs/zeroclaw#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604)

*   **增强：SMTP 邮件通道 (#5573)**
    *   **诉求：** 将邮件作为一个 Channel，用于发送周报或定时任务结果。
    *   **链接：** [zeroclaw-labs/zeroclaw#5573](https://github.com/zeroclaw-labs/zeroclaw/issues/5573)

---

### **7. 用户反馈摘要**
*   **痛点：** **本地模型连接困难**。用户报告连接本地 llama.cpp 服务器时出现无响应或长时间超时 (#5578)。
*   **痛点：** **多实例部署冲突**。在部署多个 ZeroClaw 实例时，配置路径硬编码导致冲突 (#5605)。
*   **第三方工具：** 社区成员 **Ylsssq926** 开发了 **ClawClip**，一个用于分析 ZeroClaw 会话日志以节省 Token 成本的工具 (#5581)。

---

### **8. 待处理积压**
*   **长期 Bug：WSL2 内存溢出 (#5542)**
    *   零零进程在 WSL2 环境下频繁触发 OOM (Out of Memory) 杀进程，目前仍未解决。
*   **长期 Bug：Landlock 沙箱破坏文件访问 (#5153)**
    *   Linux 下的安全沙箱在执行 shell 命令后，会导致后续工作区文件访问永久失败。
*   **通道模式上下文丢失 (#4827)**
    *   QQ/Telegram 等通道模式下，历史记录被过度压缩，丢弃了工具调用上下文，导致智能体“失忆”。

---
**分析师结语：**
Zeroclaw 目前正处于 **v0.7.0 向 v1.0.0 迈进的关键阵痛期**。虽然代码层面的微内核重构（PR #5559）尚未合并，但配套的治理、文档和工程规范正在迅速完善。建议关注 Ollama 工具调用和 Channel 权限验证这两个高频 Bug，它们显著影响了核心交互体验。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

你好！我是 PicoClaw 项目开源分析师。以下是基于 2026-04-11 的 GitHub 数据生成的项目动态日报。

---

## 📅 PicoClaw 项目日报 (2026-04-11)

### 1. 今日速览
PicoClaw 项目今日处于**高度活跃**状态，社区提交量激增。过去 24 小时内，项目收到了 **28 条 PR** 和 **16 条 Issue**，显示出强劲的开发迭代速度和用户参与度。
核心开发工作集中在**Agent 推理逻辑的优化**（分离思维链与最终回复）和**定时任务系统的稳定性修复**。同时，v0.2.6 的 nightly 版本已发布，虽然主要修复了部分 WebSocket 连接和会话恢复的问题，但仍有关于 WebSocket 连接失败的新报告涌入。社区讨论焦点聚集在 WebSocket 稳定性、官方 Discord 运营响应以及多账户管理等关键痛点上。

### 2. 版本发布
- **版本**: `v0.2.6-nightly.20260410`
- **状态**: 已发布
- **类型**: Nightly Build (非稳定版，请谨慎使用)
- **摘要**: 这是一个自动构建的测试版本，主要包含从 v0.2.6 以来的最新代码合并。
- **风险提示**: Nightly 版本可能包含不稳定的实验性功能。
- **链接**: [v0.2.6-nightly.20260410.d9977715](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

### 3. 项目进展 (PRs)
今日共有 **17 条 PR** 被合并或关闭，以下是核心进展：

*   **🤖 Agent 体验大幅提升 (分离思维链)**: PR [#2475](https://github.com/sipeed/picoclaw/pull/2475) 解决了 [#2448](https://github.com/sipeed/picoclaw/issues/2448) 提出的问题。此重构将 Agent 的内部推理过程与用户可见的最终回复进行了分离。这意味着在 WebUI 和 Pico 客户端中，用户将不再看到混杂着思维过程的混乱输出，阅读体验显著改善。
*   **🛠️ Cron 定时任务修复**: PR [#2474](https://github.com/sipeed/picoclaw/pull/2474) 修复了定时任务的一个关键 Bug。此前同一 Cron 任务的多次执行会共享同一个 Session Key，导致历史记录累积和上下文污染。现在每次执行都将获得独立的 Session ID，确保了任务执行的隔离性。
*   **🛡️ 安全性加固**: PR [#2436](https://github.com/sipeed/picoclaw/pull/2436) 修复了 Seahorse (搜索组件) 中的潜在安全漏洞，对 FTS5 查询的用户输入进行了清理，防止通过特殊字符进行搜索注入攻击。

### 4. 社区热点
今日讨论热度最高的议题主要集中在**连接稳定性**与**社区运营**上：

*   **WebSocket 连接性危机 (高关注度)**: Issue [#2319](https://github.com/sipeed/picoclaw/issues/2319) 和 [#2463](https://github.com/sipeed/picoclaw/issues/2463) 指出，v0.2.5 和 v0.2.6 版本中存在严重的 WebSocket 连接失败问题，导致 Pico 客户端无法正常工作，而 v0.2.3/v0.2.4 版本则正常。这是一个严重的回归问题，急需修复。
*   **官方 Discord 运营质疑**: Issue [#2433](https://github.com/sipeed/picoclaw/issues/2433) 引发了关于 Sipeed 团队对 PicoClaw 项目投入度的讨论。用户抱怨官方 Discord 频道缺乏维护人员，更新日志滞后，导致用户不知道新版本改了什么。这反映出项目在快速迭代中与用户的沟通存在断层。
*   **WebUI 显示逻辑修复**: Issue [#2427](https://github.com/sipeed/picoclaw/issues/2427) (已关联 PR [#2449](https://github.com/sipeed/picoclaw/pull/2449)) 讨论了 WebUI 无法同时显示文本内容和工具调用的问题，目前已通过 PR 关闭解决。

### 5. Bug 与稳定性
今日报告的关键 Bug 按严重程度排序：

1.  **🔴 严重 - WebSocket 连接回归**: 
    *   **描述**: v0.2.5+ 版本 WebSocket 无法连接，影响 Pico 客户端核心功能 ([#2463](https://github.com/sipeed/picoclaw/issues/2463))。
    *   **状态**: Open。
2.  **🟠 中等 - Windows 平台工具失效**: 
    *   **描述**: `list_dir` 工具在 Windows 上因路径分隔符（`\` vs `/）问题报错 "invalid argument" ([#2472](https://github.com/sipeed/picoclaw/issues/2472))。
    *   **状态**: Open。
3.  **🟠 中等 - 飞书消息丢失**: 
    *   **描述**: 在飞书频道连续发送多条消息时，Agent 仅响应最后一条，前面的消息被忽略 ([#2464](https://github.com/sipeed/picoclaw/issues/2464))。
    *   **状态**: Open。
4.  **🟡 低 - 终端控制字符注入**: 
    *   **描述**: `exec` 工具输出可能包含不安全的 ANSI 控制字符，可能导致终端渲染异常或误导 ([#2377](https://github.com/sipeed/picoclaw/issues/2377))。
    *   **状态**: Open。

### 6. 功能请求与路线图信号
用户提出的新需求显示了向**企业级**和**多渠道**发展的趋势：

*   **LLM 账户堆叠 (多 Key 轮换)**: [#2408](https://github.com/sipeed/picoclaw/issues/2408) 提议实现类似"弹带"的功能，在遇到 API 速率限制时自动轮换 API Key。这对于高并发或重度用户是刚需。
*   **SMTP 邮件频道**: [#2465](https://github.com/sipeed/picoclaw/issues/2465) 建议增加 SMTP 邮件发送支持，主要用于定时任务（如周报）发送结果。这是非常实用的企业场景需求。
*   **双重 Header 认证**: [#2169](https://github.com/sipeed/picoclaw/issues/2169) 请求支持自定义 Model Provider 的双重认证 Header (如同时传 `Authorization` 和 `X-API-Key`)，这对于对接私有部署模型很重要。
*   **Signal 频道集成**: [#41](https://github.com/sipeed/picoclaw/issues/41) (长期活跃) 请求增加 Signal 隐私消息协议支持。

### 7. 用户反馈摘要
*   **痛点**: "WebSocket 连不上"是目前最大的痛点，直接阻断使用体验。
*   **困惑**: 用户对于 `PICOCLAW_GATEWAY_TOKEN` 环境变量的实际作用范围感到困惑，它并不控制 `/pico/ws` 的认证 ([#2438](https://github.com/sipeed/picoclaw/issues/2438))。
*   **不满**: 用户对 Discord 官方人员缺席、更新说明缺失表示失望，认为 PicoClaw 虽然潜力巨大，但官方运营未能跟上社区热度 ([#2433](https://github.com/sipeed/picoclaw/issues/2433))。

### 8. 待处理积压
建议维护者关注以下长期未决或高影响 Issue：

*   **[#2319](https://github.com/sipeed/picoclaw/issues/2319)** (WebSocket fail): 评论数较多，影响范围广，需优先确认修复方案。
*   **[#2408](https://github.com/sipeed/picoclaw/issues/2408)** (Account Stacking): 架构级功能，需设计讨论。
*   **[#2448](https://github.com/sipeed/picoclaw/issues/2448)** (Reasoning merge): 已有 PR 修复，需加速合并流程以解决用户困扰。
*   **[#2229](https://github.com/sipeed/picoclaw/pull/2229)** (CLI UI): 一个进行中的优化 PR，旨在改善 CLI 用户体验，建议 Review 推进。

---
*数据来源: GitHub.com/sipeed/picoclaw | 生成时间: 2026-04-11*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目每日动态日报 | 2026-04-11

## 📊 今日速览
NanoClaw 项目今日（2026-04-11）活跃度**极高**，处于快速迭代状态。过去 24 小时内共产生了 **25 条代码与讨论更新**（6 个 Issues，19 个 PRs），显示出社区对该项目的贡献热情。核心开发重点聚焦于**容器环境变量修复**、**OAuth 认证流程**以及**数据库抽象层重构**。虽然产生了大量代码变更，但今日**无新版本发布**，部分核心功能（如 native runner mode、数据库层）仍处于激烈讨论与开发中。

---

## 🚀 版本发布
**当前无新版本发布。** 尽管有大量 PR 合并，项目尚未推送新的 Release 标签，建议用户关注主分支更新或等待维护者打包。

---

## 🏗️ 项目进展 (已合并/关闭的 PR)

今日关闭/合并了 7 个 PR，主要涉及安全补丁与基础设施修复，项目在**安全性**和**认证稳定性**方面迈进了重要一步：

*   **[安全性] 补充挂载模块单元测试** ([#721](https://github.com/qwibitai/nanoclaw/pull/721))
    *   为核心的 `mount-security.ts` 模块补充了 35 个测试用例，覆盖了路径遍历、符号链接解析和只读强制等关键逻辑，显著提升了系统安全性。
*   **[稳定性] 修复流式输出回调错误导致 Group 停滞** ([#719](https://github.com/qwibitai/nanoclaw/pull/719))
    *   修复了 `container-runner.ts` 中未处理的 Promise rejection 异常，防止因网络错误或 JID 无效导致整个对话组挂起。
*   **[认证] 修复 OAuth Token 刷新缺失参数问题** ([#1724](https://github.com/qwibitai/nanoclaw/pull/1724))
    *   修复了向 Claude OAuth 端点刷新 Token 时因缺少 `client_id` 和 `scope` 导致的 400 错误，解决了长期闲置后 Token 失效的隐患。
*   **[认证] 新增 OAuth Token 自动刷新机制** ([#1725](https://github.com/qwibitai/nanoclaw/pull/1725))
    *   引入 `ensureFreshOAuthToken()` 逻辑，确保容器启动前 Token 始终有效，彻底解决了 401 认证失败问题。
*   **[功能] 添加 Ollama 直接凭据注入与 Tailscale 支持** ([#1733](https://github.com/qwibitai/nanoclaw/pull/1733) / [#1258](https://github.com/qwibitai/nanoclaw/pull/1258))
    *   在 OneCLI 网关不可用时支持直接使用 Ollama/Anthropic 兼容代理；同时支持将 Tailscale 环境变量注入容器。

---

## 🔥 社区热点 (讨论活跃 Issues/PRs)

*   **架构变更讨论：是否引入 OpenCode 替代 Claude Code?** ([Issue #1163](https://github.com/qwibitai/nanoclaw/issues/1163))
    *   **热度**：3 👍，持续讨论中。
    *   **观点**：用户建议项目应不仅限于 Claude Code（Anthropic），应支持 OpenAI (OpenCode) 或其他供应商，以满足企业合规需求。这触及了项目的核心定位（Anthropic 专用 vs 多模型支持）。
*   **容器隔离 vs Host 集成模式之争** ([Issue #1732](https://github.com/qwibitai/nanoclaw/issues/1732))
    *   **热度**：新开立的核心功能请求。
    *   **观点**：尽管 Docker 隔离是 NanoClaw 的安全优势，但越来越多的用例（如 tmux 操作、有头浏览器访问、macOS API 调用）需要直接访问宿主机。该 Issue 提出了“Native Runner Mode”，试图绕过 Docker，这对项目架构有重大影响。

---

## 🐛 Bug 与稳定性

*   **[严重] MCP IPC 工具在 Host 模式下崩溃** ([Issue #1730](https://github.com/qwibitai/nanoclaw/issues/1730)) | **状态**：✅ 已修复 (待验证)
    *   **现象**：当 Agent 运行在宿主机模式（非容器）时，所有涉及 IPC 目录的 MCP 工具（如 `send_message`）失败，报错 `ENOENT: no such file or directory`。
    *   **原因**：路径硬编码为 `/workspace/ipc`，未适配宿主机环境。
    *   **修复**：PR #1735 (修复 Apple Container 分支) 及相关上下文已包含对路径逻辑的修正。
*   **[中等] Claude Code 生成文件污染 Git 仓库** ([Issue #1665](https://github.com/qwibitai/nanoclaw/issues/1665)) | **状态**：🔧 修复中 (PR #1734 Open)
    *   **现象**：`.claude/settings.local.json` 包含用户敏感配置，被意外提交到仓库。
    *   **修复**：PR #1734 已提交，将该路径加入 `.gitignore`。

---

## 🔮 功能请求与路线图信号

根据今日的 Issues 和 Open PRs，项目未来的几个关键方向已浮现：

1.  **数据库抽象层 (Issue #1722 / PR #1723)**
    *   **信号**：开发者 `dengfuping` 提出了引入 `IDatabaseAdapter` 接口的计划，默认保持 SQLite，但允许接入 PostgreSQL 等其他数据库。这表明 NanoClaw 可能在向更企业级的持久化存储演进。
2.  **宿主机原生运行模式 (Issue #1732)**
    *   **信号**：社区强烈需求绕过 Docker 以直接访问 macOS API 或 tmux。这可能导致架构上的“双模”支持（Container Mode + Native Mode）。
3.  **上下文压缩代理研究 (Issue #1493)**
    *   **信号**：引入 `Headroom` 代理在 API 层压缩上下文。这反映了项目对**降低 Token 成本**和**突破上下文窗口限制**的持续关注。

---

## 🗣️ 用户反馈摘要

*   **痛点 - 环境变量配置繁琐**：多个 PR (如 #1728, #1727) 的提交记录暗示，用户在配置 MCP 工具（Ollama, Home Assistant, Tailscale）时遭遇了凭据注入的困难。当前的 OneCLI 网关模式在某些网络环境下不稳定。
*   **痛点 - 多云模型支持缺失**：Issue #1163 的评论显示，部分用户因公司政策无法使用 Anthropic，被迫自行实现并行应用，迫切希望项目原生支持 OpenAI/Google 等其他提供商。
*   **场景 - Unraid/NAS 集成**：今日多个 PR 涉及 UnraidClaw 和 Home Assistant，说明大量用户将 NanoClaw 部署在 NAS 环境中作为家庭自动化中枢。

---

## 📌 待处理积压

*   **长期特性：Matrix 渠道支持** ([PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624))
    *   开放超过 6 天，实现了基于 `matrix-js-sdk` 的全端到端加密支持。目前处于 Open 状态，等待维护者 Code Review。
*   **长期特性：无损上下文管理 (LCM)** ([PR #1562](https://github.com/qwibitai/nanoclaw/pull/1562))
    *   开放超过 10 天，涉及复杂的 Prompt 压缩逻辑，尚未合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-11

**分析师：** AI 智能体与个人助手领域观察员
**日期：** 2026-04-11
**项目：** NullClaw (nullclaw/nullclaw)
**健康度评分：** 🟢 活跃且响应迅速

---

### 1. 今日速览
NullClaw 项目在过去 24 小时内表现出极高的活跃度与技术响应速度。社区完成了 **v2026.4.9** 版本的发布，迅速修复了近期困扰用户的 Docker Compose 初始化问题及 OpenAI API 兼容性痛点。与此同时，贡献者在一天内合并了 13 个 PR，显著推进了包括“Cron 子代理”、“交互式模型选择”及“持久化消息投递”在内的核心功能。目前项目正积极构建基础设施（如 Nix 支持、CI 加固），并处理新版本发布后浮现的 2 个新 Bug。

---

### 2. 版本发布
**发布版本：[v2026.4.9](https://github.com/nullclaw/nullclaw/releases/tag/v2026.4.9)**
*发布日期：2026-04-10*

*   **核心修复：**
    *   **文档改进：** 新增面向非技术用户的入门指南（中英文）。
    *   **部署优化：** Windows 二进制文件现在以 ZIP 归档形式打包，分发更规范。
*   **关联背景：** 此版本包含了大量的底层修复（见下文项目进展），是对 v2026.3.x 系列的一次重要稳定性升级。

---

### 3. 项目进展
今日共合并/关闭 13 个 PR，主要集中在 **稳定性增强**、**核心功能补全** 和 **开发者体验** 上。

*   **[功能] OpenAI API 兼容性大幅提升 (#709)**: [merged]
    *   **内容：** 修复了 OpenAI 兼容 API 中缺失的 `session_id` (user) 字段问题，并支持通过 `extra_body_params` 注入自定义参数。
    *   **影响：** 直接解决了社区关于 API 不兼容的“Deal breaker”抱怨，打通了第三方 API 接入的最后一公里。
*   **[修复] Docker Compose 初始化流程 (#749)**: [merged]
    *   **内容：** 修正了 Docker Compose onboarding 无法正确处理卷挂载默认路径的问题，确保环境变量 `NULLCLAW_HOME` 和 `NULLCLAW_WORKSPACE` 被正确识别。
    *   **影响：** 彻底解决了容器化部署新手的“拦路虎”。
*   **[功能] Cron 任务调度引擎 (#783)**: [merged]
    *   **内容：** 引入了基于数据库的调度器（`cron_runs`）、历史记录支持及 JSON 输出格式，并增强了安全性。
    *   **影响：** 为 AI Agent 增加了定时任务处理能力，使其不仅仅是对话机器人。
*   **[功能] 持久化消息投递 (#730)**: [merged]
    *   **内容：** 增加了持久化出站投递信箱，确保在网络故障或进程重启时，待发送的消息不会丢失。
    *   **影响：** 显著提升了 Agent 在生产环境下的可靠性。
*   **[功能] 交互式模型选择器 (#727)**: [merged]
    *   **内容：** 在 Telegram/Discord 等聊天渠道增加了 `/model` 交互式选择菜单，支持跨多 Provider 的模型选择。
    *   **影响：** 极大改善了多模型部署场景下的用户体验。
*   **[修复] 供应商稳定性**: [merged]
    *   **GLM-5 空值处理 (#781):** 防止因 API 返回 `null` 导致的 SIGSEGV 崩溃。
    *   **Ollama 工具别名规范 (#744):** 修复了调度器工具调用的命名冲突。

---

### 4. 社区热点
今日活跃讨论主要围绕新版本发布后的“回退”问题以及基础设施优化。

*   **热门讨论：Docker 沙箱挂载失效**
    *   **链接：** [Issue #799](https://github.com/nullclaw/nullclaw/issues/799)
    *   **摘要：** 用户报告当使用 Docker 后端时，会出现 "invalid empty volume spec" 错误。
    *   **诉求：** 这是一个典型的回归问题，虽然 Docker Compose 的 onboarding 已修复，但在直接使用 Docker API 初始化沙箱时存在参数未初始化的 Bug。
*   **热门讨论：SQLite 历史记录丢失**
    *   **链接：** [Issue #797](https://github.com/nullclaw/nullclaw/issues/797)
    *   **摘要：** Agent 可以正常回复，但在使用 SQLite 内存模式时，`history list/show` 返回空。
    *   **诉求：** 用户担心会话状态丢失，影响记忆功能的连续性。

---

### 5. Bug 与稳定性
今日报告的 Bug 涉及到底层沙箱初始化和内存数据库处理，需尽快关注。

1.  **[HIGH] Docker 沙箱初始化崩溃**
    *   **描述：** `DockerSandbox` 初始化时未填充 `mount_arg_buf`，导致传给 Docker 的 `-v` 参数为空字符串 (#799)。
    *   **状态：** 📅 待处理。
2.  **[MEDIUM] SQLite 历史记录查询空值**
    *   **描述：** 使用 SQLite 作为内存后端时，尽管 Agent 运行正常，但无法查询历史记录 (#797)。
    *   **状态：** 📅 待处理。
3.  **[LOW] 已知问题已修复**
    *   Docker Compose onboarding 失败 (#747) -> 已在 v2026.4.9 修复。
    *   OpenAI API session_id 缺失 (#701) -> 已在 v2026.4.9 修复。

---

### 6. 功能请求与路线图信号
从今日的 PR 合并情况来看，项目正在向 **“全功能代理平台”** 演进。

*   **可观测性：** PR #752 将 OTLP 遥测端点默认设为 HTTPS，表明项目在安全性与企业级集成方面有明确规划。
*   **CI/CD 现代化：** PR #796 添加了 Nix flake 构建支持，PR #798 加固了 CI 权限。这显示项目正在拥抱 Nix 社区并注重供应链安全。
*   **聊天交互增强：** PR #782 (Open) 正在为 Telegram 引入交互式技能菜单，这暗示未来版本将更注重聊天机器人（Chatbot）形态的交互深度。

---

### 7. 用户反馈摘要
*   **痛点：** 在 #701 (现已修复) 中，用户非常直接地指出：“OpenAI API 支持不完整是阻碍使用的关键”。这强烈暗示了兼容性对于该项目用户群的重要性。
*   **使用场景：** 从 #747 和 #797 的讨论可以看出，大量用户倾向于在 **Docker 容器** 中运行 NullClaw，并严重依赖 **SQLite** 进行轻量级状态管理。
*   **满意度：** v2026.4.9 版本中“非技术用户指南”的添加表明项目正在积极降低门槛，试图覆盖更广泛的非开发者群体。

---

### 8. 待处理积压
提醒维护者关注以下可能影响用户信任的 Issue/PR：

*   **[PR #782] feat(telegram): 交互式技能菜单**: 此 PR 已开放数日且包含大量功能更新，建议尽快 Review 以避免合并冲突。
*   **[Issue #799 & #797]**: 上述两个新 Bug 均发生在核心数据流（挂载、历史记录）上，建议在下一个 patch 版本 (v2026.4.10) 中优先解决。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-11)

**日期**：2026-04-11
**数据概览**：过去 24 小时内项目极度活跃，新增 34 条 Issues，合并 42 条 PR，主要聚焦于 V2 架构的稳定性修复与 Bug Bash（大扫除）。

---

### 1. 今日速览
IronClaw 项目今日处于**高活跃度**状态，社区与核心团队进行了大规模的交互。
- **开发活动**：大量 PR 合并（42条）表明主分支迭代迅速，主要修复了近期 Bug Bash 活动中发现的 Web UI、Agent 逻辑及集成测试问题。
- **质量把控**：社区提交了大量 Bug 报告（主要集中在 `bug_bash` 标签），QA 团队对 Staging 环境进行了压力测试，发现了并发、持久化和指令遵循等方面的问题。
- **架构演进**：尽管忙于修 Bug，核心架构讨论仍未停歇，关于“简化核心抽象”和“统一扩展模型”的讨论显示项目正在为下一阶段的易用性和扩展性做准备。

### 2. 版本发布
- **`ironclaw_tui` v0.1.0** (2026-02-12)
  - **核心更新**：基于 `rig-core` 适配器实现了**多提供商 LLM 支持**。
  - **功能增强**：新增了沙盒任务以及 Google Suite 和 Telegram 的 WASM 工具支持。
  - **意义**：这是 TUI 组件的一个重要里程碑，标志着 IronClaw 开始支持更复杂的工具链和多云模型集成。
  - [查看 Release 详情](https://github.com/nearai/ironclaw/releases/tag/ironclaw_tui-v0.1.0)

### 3. 项目进展
今日合并的 PR 主要集中在代码库维护和稳定性提升上，没有大规模新功能落地，主要是为了 V2 架构的稳固：
- **CI/CD 与 发布自动化**：[PR #2075](https://github.com/nearai/ironclaw/pull/2075) 发布了新版本，其中 `ironclaw_common` 升级至 v0.2.0（含破坏性变更），`ironclaw` 升级至 v0.25.0。
- **Telegram 消息修复**：针对 Telegram UTF-16 消息分割问题进行了修复和回滚操作 ([PR #2304](https://github.com/nearai/ironclaw/pull/2304), [PR #2297](https://github.com/nearai/ironclaw/pull/2297))，确保了在包含 Emoji 等字符时的消息长度计算正确性。
- **跨后端路由修复**：[PR #2298](https://github.com/nearai/ironclaw/pull/2298) 修复了智能路由中“廉价提供商”的跨后端解析问题，这对于降低多模型部署成本至关重要。

### 4. 社区热点
今日讨论的热点主要集中在架构重构与集成痛点，反映出开发者对系统复杂度的担忧：
- **架构简化提案**：[#2192](https://github.com/nearai/ironclaw/issues/2192) (Architecture: Simplify core abstractions)
  - **内容**：提议将目前的 7 个顶层概念（Tools, Channels 等）合并为 3 个，以降低开发者认知负担。
  - **热度**：3 条评论，核心成员积极参与。
- **扩展模型统一**：[#2246](https://github.com/nearai/ironclaw/issues/2246) (Unify extension model)
  - **内容**：讨论如何统一 MCP 工具和 WASM 扩展的表现形式，并解决多提供商的去重问题。
  - **热度**：关联了多个架构 Issue，是当前技术债务清理的核心。
- **V2 引擎技能生命周期**：[#2250](https://github.com/nearai/ironclaw/issues/2250)
  - **内容**：探讨 V2 引擎中技能的适应、退役和重评估机制。

### 5. Bug 与稳定性
今日 QA 活动揭示了 Staging 环境中的多个严重缺陷，按严重程度排序：
1.  **[严重] Agent 陷入死循环** ([#2240](https://github.com/nearai/ironclaw/issues/2240))
    - **现象**：工具调用失败时，Agent 会重试完全相同的调用多达 50 次，消耗大量资源。
    - **状态**：Open，需紧急修复以防止 DoS。
2.  **[中等] Web UI 严重体验缺陷** ([#2285](https://github.com/nearai/ironclaw/issues/2285), [#2283](https://github.com/nearai/ironclaw/issues/2283))
    - **现象**：页面刷新导致聊天记录丢失；不支持文件上传。
    - **影响**：严重影响用户在 Web 端的日常使用。
3.  **[中等] Agent 逻辑错误** ([#2286](https://github.com/nearai/ironclaw/issues/2286), [#2287](https://github.com/nearai/ironclaw/issues/2287))
    - **现象**：将即时任务错误创建为定时任务；调用错误的 API。
4.  **[中等] 并发与持久化问题** ([#2231](https://github.com/nearai/ironclaw/issues/2231), [#2284](https://github.com/nearai/ironclaw/issues/2284))
    - **现象**：多聊天无法并行执行（阻塞队列）；Agent 实例在 1 小时不活跃后死亡。
5.  **[低] 已修复**：
    - 回答被误认为批准 ([#2248](https://github.com/nearai/ironclaw/issues/2248)) - 已关闭。
    - V2 引擎 Cron 调度损坏 ([#1944](https://github.com/nearai/ironclaw/issues/1944)) - 已关闭。

### 6. 功能请求与路线图信号
从 Issues 中可以窥见接下来的开发重点：
- **CLI 增强**：请求添加 `ironclaw profile list` 子命令 ([#2271](https://github.com/nearai/ironclaw/issues/2271))，对应代码已就绪，急需 CLI 入口。
- **可观测性**：请求在 Responses API 中支持流式传输工具调用状态 ([#2274](https://github.com/nearai/ironclaw/issues/2274))，这对于提升用户体验至关重要。
- **多租户安全**：Telegram/WASM 通道的多租户隔离问题被提出 ([#2263](https://github.com/nearai/ironclaw/issues/2263))，这是迈向企业级部署的关键。

### 7. 用户反馈摘要
- **痛点**：用户对 **Web UI 的稳定性**极为不满（消息丢失、无法刷新），这可能导致用户流失至 CLI 或 Telegram。同时，Agent **忽略指令**（如忽略定时条件、不按需报警）的问题频发，表明 V2 引擎的意图理解仍需调优。
- **集成困难**：Google Sheets OAuth 错误 ([#2229](https://github.com/nearai/ironclaw/issues/2229)) 和 Telegram 工具安装失败 ([#2233](https://github.com/nearai/ironclaw/issues/2233)) 阻碍了第三方服务的接入。

### 8. 待处理积压
- **编码工具安全审查**：[#2252](https://github.com/nearai/ironclaw/issues/2252) 指出了 PR #2025 中的高严重性安全发现（DoS/OOM 风险），需在合并前解决。
- **Routines UX**：[#1325](https://github.com/nearai/ironclaw/issues/1325) 提出为 Web 端 Routines 增加创建/编辑流程，目前仍为只读状态，该 Issue 开放时间较长且是高频需求。
- **外部代理委托**：[#2277](https://github.com/nearai/ironclaw/issues/2277) 提出的 ACP 支持的子线程后端，属于高级架构演进，短期内可能不会排上优先级。

---
**分析师总结**：IronClaw 今日在“清理技术债务”和“修复现网 Bug”之间艰难平衡。虽然架构讨论热火朝天，但大量的 Staging 环境 Bug 表明 V2 引擎在稳定性和细节体验上仍需打磨，建议短期内优先攻克 Agent 死循环和 Web UI 持久化问题。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-11)

## 📊 今日速览
LobsterAI 项目在过去 24 小时内展现出极高的活跃度，不仅有 **20 条 PR** 在进行代码审查与合并，还有 **8 条新 Issue** 被提交。项目目前正处于**功能迭代与稳定性修复并行**的关键阶段。核心开发团队主要集中在优化 OpenClaw 网关的启动性能与兼容性，同时推进 UI/UX 的现代化改造（如模型选择器重构与新手引导）。社区反馈显示，最近的版本更新引入了一些 regressions（回归问题），特别是网关启动失败和客户端交互逻辑上的 Bug，开发团队已迅速响应并提交了修复代码。整体来看，项目健康度良好，代码库正在向更精简、跨平台兼容性更好的方向演进。

---

## 🚀 版本发布
**暂无新版本发布**
过去 24 小时内未检测到新的 Release 版本。鉴于大量 PR（特别是 Bug 修复类）正在合并，预计近期可能会迎来一次修复性版本更新（如 v2026.4.x）。

---

## ✅ 项目进展
今日共有 **11 条 PR 成功合并/关闭**，标志着项目在构建系统、引擎兼容性及企业级功能方面取得了实质性进展：

1.  **[构建与性能优化] OpenClaw 引擎瘦身与提速**
    *   **PR #1625, #1624**: 解决了 OpenClaw 插件依赖重复安装导致包体积过大（减少约 738MB+ 冗余）的问题，并修复了 Windows 平台下的构建失败。
    *   **PR #1618**: 性能大幅提升，通过禁用不必要的 Bonjour 服务和拦截未使用的 64 个捆绑插件，显著缩短了网关启动时间。
    *   **PR #1619**: 修复了 OpenClaw v2026.4.5 - v2026.4.8 版本中已知的打包 Bug，确保渠道扩展依赖正确安装。

2.  **[核心重构] 移除旧引擎，全面迁移至 OpenClaw**
    *   **PR #1611**: 进行了重要的架构清理，彻底移除了旧的 `yd-cowork` 引擎链路及其依赖（Claude SDK）。此举统一了后端架构，收拢了路由与配置，修复了因配置不兼容导致的网关启动循环问题。

3.  **[企业协作] 新增 POPO 扫码登录**
    *   **PR #1612**: 新增对网易 POPO 的二维码扫码登录支持，补齐了企业 IM 登录体验。

4.  **[功能增强] 模型生态扩展**
    *   **PR #929**: 正式合并了对百度千帆大模型的支持，丰富了用户的模型选择。

5.  **[体验优化] 定时任务与配置管理**
    *   **PR #1613**: 修复了定时任务保存后表单状态未重置的问题。
    *   **PR #1610**: 增加了 OpenClaw 会话保持时长的配置能力，并优化了时区处理。

---

## 🔥 社区热点
今日社区讨论主要集中在由新版本部署带来的兼容性问题上：

1.  **P0 级别的网关启动故障**
    *   **Issue #1626 (关联 PR #1626)**: 用户报告升级 OpenClaw 后网关 100% 无法启动，且伴有“正在启动”弹窗反复闪烁的严重 Bug。
    *   **分析**: 这是典型的“Breaking Change”引发的回归问题。根因在于配置文件中包含了已废弃字段 `skipMissedJobs`。开发团队已识别问题并提交了修复 PR，体现了快速响应能力。
    *   [链接](https://github.com/netease-youdao/LobsterAI/pull/1626)

2.  **客户端交互与逻辑缺陷**
    *   **Issue #1627**: 用户在进行复杂任务时客户端崩溃，日志显示 WebSocket 连接出现异常。
    *   **Issue #1617**: UI 状态同步问题，删除“技能”后列表未刷新，且重启软件后仍显示残留条目，显示了前端状态管理与后端持久化之间的脱节。
    *   **Issue #1566**: 严重的逻辑 Bug，模型无论输入什么都回复相同内容。
    *   [Issue #1627 链接](https://github.com/netease-youdao/LobsterAI/issues/1627) | [Issue #1617 链接](https://github.com/netease-youdao/LobsterAI/issues/1617)

3.  **新功能需求活跃**
    *   **Issue #1614**: 社区呼吁集成 `hermes-agent` 作为新的 AI 引擎选项。
    *   **Issue #1620**: 用户请求定时任务完成后的系统原生通知功能，该需求已有对应的 PR (#1621) 正在开发中，落地可能性极高。
    *   [Issue #1620 链接](https://github.com/netease-youdao/LobsterAI/issues/1620)

---

## 🐛 Bug 与稳定性
**当前存在较多影响用户体验的 Bug，主要集中在“文件处理”和“模型交互”领域：**

*   **🔴 高严重度 (P0/P1)**
    *   **#1626 (OpenClaw 启动失败)**: 已有 Fix PR #1626。建议优先合并发布 Hotfix。
    *   **#1622 (无法添加自定义模型)**: 测试失败，影响高级用户自定义模型能力。
    *   **#1566 (回复内容重复)**: 严重影响核心对话功能的 Bug，需立即排查模型流式输出或上下文处理逻辑。
    *   **#1561 (文件上传未生效)**: 文件拖入后模型不可见，属于 RAG/文件处理流程断裂。

*   **🟡 中严重度**
    *   **#284 (Linux 环境启动失败)**: ArchLinux 用户报错，涉及 Window Manager 兼容性。
    *   **#1617 (技能删除残留)**: 前端状态管理 Bug。
    *   **#1627 (客户端崩溃)**: 复杂任务触发，需排查内存溢出或死锁。

---

## 🗺️ 功能请求与路线图信号
从 Issues 和 PRs 中可以窥见下一阶段 (v2026.4.x / v2026.5) 的路线图方向：

1.  **用户体验大幅优化**
    *   **新手引导 (PR #1577)**: 基于 driver.js 的 6 步引导流程已在开发中，意在降低新用户上手门槛。
    *   **UI 现代化 (PR #1628)**: 重构模型选择器，增加图标、视觉标签和自适应宽度，提升产品精致度。
    *   **会话导出增强 (PR #1615)**: 计划解决 Markdown 导出中缺少元信息、时间戳及中文支持差的问题。

2.  **系统级通知与自动化**
    *   **定时任务通知 (Issue #1620 / PR #1621)**: 正在实现 OS 原生通知推送，解决后台任务感知问题。

3.  **AI 引擎扩展**
    *   **Hermes-Agent 集成 (Issue #1614)**: 社区提议，值得关注是否被采纳。

---

## 💬 用户反馈摘要
*   **痛点**:
    *   **Linux/Arch 用户**: 对 Electron 应用在非标准桌面环境下的兼容性表示担忧 (Issue #284)。
    *   **企业/协作用户**: 对“技能”管理的稳定性不满（删除无效 Issue #1617），且急需定时任务完成后的主动触达，以免错过重要执行结果 (Issue #1620)。
    *   **文件上传**: 用户怀念旧版本将文件自动存入 `project` 目录的便利，对新版本文件“传了看不见”感到困惑 (Issue #1561)。
*   **正面反馈**: 隐含在功能请求中，用户对增加更多模型（如百度千帆 PR #929）和更多 AI 引擎（Hermes）有持续需求，说明用户对平台的扩展能力寄予厚望。

---

## ⏳ 待处理积压
以下 Issues 或 PRs 处于 Open 状态较久或标记为 `stale`，需维护者关注：

*   **[Build] PR #1623**: 虽已关闭，但涉及 npm v11 兼容性修复，属于技术债务偿还，确保后续构建环境稳定。
*   **[Stale PR] #5 (ESLint 规则修复)**: 2月提出，涉及 269 个代码规范问题。虽然不直接影响运行，但影响代码库质量和可维护性，建议尽快清理。
*   **[Stale PR] #367 (MCP JSON 导入)**: 3月提出，涉及配置迁移，影响老用户升级体验。
*   **[Stale PR] #374 (异步消息处理)**: 3月提出，旨在防止 IM 平台超时，对于企业用户至关重要，不应被遗忘。

---
**报告生成时间**: 2026-04-11  
**数据来源**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 | 2026-04-11

**项目概览：** TinyAGI/TinyClaw
**报告日期：** 2026-04-11
**数据周期：** 过去 24 小时

---

### 1. 今日速览
TinyClaw 项目在过去 24 小时内处于**低活跃度**状态。
*   代码提交与合并活动暂停，无新版本发布。
*   社区交互（Issues 与评论）暂无新增，项目进入静默维护期。
*   核心动态集中在 [PR #276](https://github.com/TinyAGI/tinyagi/pull/276) 的提出，针对配置系统的逻辑漏洞进行了修正。

### 2. 版本发布
*   **当前状态：** 无新版本发布。
*   **最新稳定版：** 请参考仓库 README 获取最新稳定版本号。

### 3. 项目进展
今日无合并或关闭的 PR，项目代码库未发生变动。

**待审查进展：**
*   **[PR #276](https://github.com/TinyAGI/tinyagi/pull/276): fix(heartbeat): honor top-level heartbeat.enabled=false setting**
    *   **状态：** 待合并
    *   **内容：** 修复了 `Settings` 配置逻辑中的一个疏忽。此前，顶层的 `heartbeat.enabled` 设置会被静默忽略，导致即使用户在 `settings.json` 中全局禁用了心跳，`startHeartbeat()` 函数仍会被无条件调用。此 PR 旨在确保全局配置具有最高优先级。
    *   **影响：** 提升了系统对用户配置的响应性，修复了配置不生效的逻辑缺陷。

### 4. 社区热点
今日无活跃的社区讨论或热点话题。

### 5. Bug 与稳定性
*   **[配置逻辑漏洞] - 严重程度：中**
    *   **描述：** 全局心跳开关 (`heartbeat.enabled`) 在 `packages/main/src/index.ts:272` 未被正确读取，导致功能无法按预期禁用。
    *   **状态：** 已有修复方案 ([PR #276](https://github.com/TinyAGI/tinyagi/pull/276))，待审核合并。

### 6. 功能请求与路线图信号
今日未收到新的功能请求。

### 7. 用户反馈摘要
今日无新增用户评论反馈。

### 8. 待处理积压
*   **审查焦点：** 建议维护者优先关注 [PR #276](https://github.com/TinyAGI/tinyagi/pull/276) 的合并进度，以解决用户对配置控制的潜在诉求。
*   **长期清理：** 无新的长期积压问题报告。

---
*注：本报告由 AI 智能体分析师基于 GitHub 公开活动数据自动生成。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-11)

## 1. 今日速览
Moltis 项目在过去 24 小时内呈现出极高的活跃度与开发效率，共处理了 27 个 Issues 和 PRs，超过 70% 的待办事项已成功关闭。核心开发集中在**语音处理 pipeline**、**Hook 系统逻辑修复**以及**Agent 推理性能优化**上。项目刚刚发布了 `20260410.01` 版本，迅速修复了包括 Whisper 配置失效、OAuth 重定向错误以及 MCP 回显泄露等多个关键 Bug。整体来看，项目维护者对社区反馈响应迅速，代码库正朝着更稳定、更规范的方向快速迭代。

## 2. 版本发布
**版本号**: `20260410.01`  
**发布时间**: 2026-04-10
**更新摘要**:
本次版本主要是热修复集合，解决了用户反馈强烈的几个阻断性问题：
1.  **语音配置修复**: 修复了 Whisper STT 长期忽略用户自定义 `model` 和 `language` 配置的问题。
2.  **OAuth 兼容性**: 修复了 MCP 动态客户端注册时因强制使用 `https://localhost` 导致的 `invalid_redirect_uri` 错误。
3.  **Z.AI 模型支持**: 增强了对智谱 (Zhipu/Z.AI) 模型 XML 格式工具调用的解析，防止了原始 XML 字符串泄露到聊天界面。

## 3. 项目进展
今日合并的 PR (Pull Requests) 极大地提升了系统的健壮性和功能完整性：

*   **[Codex] 修复 MessageReceived Hook 阻塞与重写机制** ([#651](https://github.com/moltis-org/moltis/pull/651))
    *   **进展**: 修正了 `MessageReceived` 被错误标记为只读 的问题，现在系统正确处理 `Block` 和 `ModifyPayload` 动作。
    *   **意义**: 恢复了 Hook 系统的核心拦截能力，对基于 Hook 的安全审计和消息过滤至关重要。
*   **[Codex] 部署 ToolResultPersist Hook 事件** ([#647](https://github.com/moltis-org/moltis/pull/647))
    *   **进展**: 修复了虽然定义了 `ToolResultPersist` 事件但从未实际调度 的 Bug。现在该事件会在工具结果持久化前正确触发。
    *   **意义**: 完善了事件生命周期，使得开发者可以在工具结果写入历史记录前进行拦截或修改。
*   **[Codex] Discord 渠道增强** ([#649](https://github.com/moltis-org/moltis/pull/649))
    *   **进展**: Discord 适配器现在支持接收语音消息和图片附件，引入了统一的入站媒体下载器抽象。
    *   **意义**: 拉平了 Discord 与 Telegram/WhatsApp 在多媒体处理上的能力差距。
*   **[Codex] 修复语音转录回退逻辑** ([#648](https://github.com/moltis-org/moltis/pull/648))
    *   **进展**: 修复了 Telegram 语音处理失败时将占位符文本（如 "[Voice message - could not transcribe]"）发送给 LLM 的缺陷。
    *   **意义**: 避免了 LLM 针对错误文本生成无意义的回复，改善了多模态交互体验。

## 4. 社区热点
今日讨论主要集中在 **Hook 系统的增强** 和 **Agent 对话管理策略**：

*   **热点 PR: [feat(chat): replace LLM summarization with deterministic compaction](https://github.com/moltis-org/moltis/pull/653)**
    *   **状态**: Open (讨论中)
    *   **核心内容**: 提议用确定性的字符串/JSON 提取算法替换现有的基于 LLM 的对话摘要生成。
    *   **分析**: 这是一个重大的架构调整信号。如果通过，将显著降低长对话管理的 Token 成本和延迟，消除由 LLM 生成摘要时的不确定性，是提升 Agent 性能的关键步骤。
*   **热点 Issue: [Feature: Include channel/sender metadata in hook payloads](https://github.com/moltis-org/moltis/issues/640)**
    *   **状态**: Open (已有对应 PR [#645](https://github.com/moltis-org/moltis/pull/645))
    *   **核心诉求**: 开发者希望在 Hook 载荷中直接获取消息来源渠道信息，而不是自己维护 `session_key` 到 `channel` 的映射。
    *   **分析**: 反映了社区对多渠道统一治理的需求，目前 PR #645 已提出解决方案，进展值得关注。

## 5. Bug 与稳定性
今日报告并修复了多个中高严重性的 Bug，系统稳定性明显提升：

*   **[HIGH] OAuth 动态注册失败** ([#629](https://github.com/moltis-org/moltis/issues/629) -> Fixed by [#636](https://github.com/moltis-org/moltis/pull/636))
    *   **问题**: Moltis 发送 `https://localhost` 导致严格的服务器（如 Attio）拒绝 OAuth 请求。
    *   **状态**: 已修复，强制将 loopback 地址重定向为 `http`。
*   **[HIGH] 自动继续 导致历史消息丢失** ([#628](https://github.com/moltis-org/moltis/issues/628) -> Fixed by [#634](https://github.com/moltis-org/moltis/pull/634))
    *   **问题**: Agent 的 "auto-continue" 逻辑错误地用简短摘要覆盖了长篇回答。
    *   **状态**: 已修复，增加了对实质性最终答案的抑制逻辑。
*   **[MEDIUM] Whisper STT 配置被忽略** ([#631](https://github.com/moltis-org/moltis/issues/631) -> Fixed by [#643](https://github.com/moltis-org/moltis/pull/643))
    *   **问题**: 配置文件中的 `whisper.model` 和 `language` 无法生效，被硬编码覆盖。
    *   **状态**: 已修复，Factory 方法现已正确读取配置。
*   **[LOW] 登录远程部署失败** ([#646](https://github.com/moltis-org/moltis/issues/646))
    *   **状态**: Open，尚无修复 PR，需关注。

## 6. 功能请求与路线图信号
从新的 Issues 和 PRs 中可以看出项目未来的发展方向：

*   **确定性对话压缩**: PR #653 显示项目正试图摆脱对 LLM 的依赖来实现上下文压缩，这预示着未来版本的推理成本将更低，响应更可控。
*   **Hook 生态增强**: Issue #640 (增加渠道元数据) 和 PR #645 表明 Moltis 致力于让 Hook 成为更强大的自动化和集成工具，而不仅仅是简单的通知机制。
*   **Skills 工具内置化**: PR #630 (Ship native read_skill tool) 显示项目正在减少对外部文件系统 MCP 服务器的依赖，将更多能力内置到 Agent Core 中。

## 7. 用户反馈摘要
*   **痛点**: 用户在使用 MCP 和 OAuth 集成时遇到了配置门槛（localhost 协议问题），并对语音消息处理失败时的“幽灵”占位符回复表示困惑。
*   **场景**: 多渠道多媒体消息处理是高频场景。Discord 用户对缺失语音/图片支持的不满 (#633) 促使开发者在 24 小时内完成了该功能的补齐。
*   **安全**: 用户关注沙箱执行的安全性 (#626, dcg-guard bypass)，目前已通过增强 PATH 检查和警告机制得到回应。

## 8. 待处理积压
*   **[#652 feat(chat): add summary budget discipline for compaction](https://github.com/moltis-org/moltis/pull/652)**: Open 状态。这是对 PR #653 的补充，旨在防止摘要生成时溢出上下文窗口，建议优先合并以确保新架构的稳定性。
*   **[#646 Bug: Unable to login to remote deployment](https://github.com/moltis-org/moltis/issues/646)**: 新提交的登录问题，目前缺乏详细信息，建议维护者跟进询问日志。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope-ai/CoPaw) 项目动态日报**
**日期：** 2026-04-11
**分析师：** AI 开源项目智能体

---

### 1. 今日速览
CoPaw 项目今日处于**极高活跃度**状态，社区讨论与代码提交均显著高于平均水平。过去 24 小时内共产生了 **36 条 Issues** 和 **50 条 PRs**，反映出项目 v1.0.2 版本发布后正经历密集的功能迭代与问题修复期。社区关注度最高的是**多智能体协作的未来形态**以及**MCP 插件的内存管理**问题。虽然活跃度高，但也暴露了升级后的数据丢失、模型兼容性和微信渠道消息截断等稳定性隐患，需要维护团队重点关注。

### 2. 版本发布
**无新版本发布**
*注：项目当前主要版本为 v1.0.2。今日大量 Issues 集中在该版本的 Bug 反馈上。*

### 3. 项目进展
今日共有 **35 条 PRs 被合并或关闭**，项目在用户体验、平台兼容性和社区贡献门槛上取得了实质性进展：

*   **用户体验升级**：
    *   **PR #3257** (`feat(console): render approve buttons`): 回应了社区强烈呼声，将 `/approve` 文本命令转换为 Web 端的可点击按钮（确认/取消），极大降低了用户执行危险工具操作时的认知负荷。
    *   **PR #3120 & #3119** (`feat(installer): auto-install WebView2`): 针对 Windows 桌面端白屏问题，实现了安装程序自动部署 WebView2 运行时，解决了新手用户的首要上手障碍。
*   **功能增强与实验性功能**：
    *   **PR #3214** (`feat(token_usage): session level`): 实现了基于会话维度的 Token 统计，满足了精细化的成本监控需求。
    *   **PR #3238** (`feat: add PlanNotebook support`): 引入了实验性的 `PlanNotebook` 用于任务规划，暗示 CoPaw 正在强化 Agent 的任务拆解与执行能力。
*   **运维与稳定性**：
    *   **PR #3255** (`feat(cron): fresh execution sessions`): 优化了定时任务的执行机制，实现了任务隔离，解决了定时任务污染聊天上下文的问题。
    *   **PR #3252** (`fix(runner): truncate oversized tool_result`): 修复了当工具返回超大日志（如 3MB+）时可能导致会话持久化失败的性能瓶颈。

### 4. 社区热点
*   **[热点讨论] CoPaw Agent Teams: 自然语言驱动的自进化多智能体协作团队**
    *   **链接：** [Issue #3224](https://github.com/agentscope-ai/CoPaw/issues/3224)
    *   **分析：** 该 Issue 提出了从当前的“手动挡”多智能体配置向“自然语言驱动”的动态团队演进。用户希望 Agent 能根据任务自动组建团队、动态分配角色并自我进化。这直接指引了 CoPaw 未来的核心路线图，即从“工具箱”进化为“组织者”。
*   **[焦点痛点] 内置技能与 MCP 的预装策略**
    *   **链接：** [Issue #280](https://github.com/agentscope-ai/CoPaw/issues/280)
    *   **分析：** 社区在讨论是否应该预装常用的 Skills 和 MCPs（如浏览器、Tavily）。平衡“开箱即用”与“依赖膨胀”是核心争论点，关系到产品的分发策略。
*   **[严重故障] MCP 进程泄漏导致内存爆炸**
    *   **链接：** [Issue #3226](https://github.com/agentscope-ai/CoPaw/issues/3226)
    *   **分析：** 用户反馈更新后 `node.exe` 进程激增至 40+ 个，吞噬数 GB 内存。这是典型的资源泄漏问题，可能与新版 MCP 适配器的进程管理逻辑有关，属于高优先级阻塞问题。

### 5. Bug 与稳定性
今日报告的 Bug 数量较多，部分涉及核心功能，建议优先处理：

*   **高危 - 数据丢失**：
    *   **[Bug] Custom Agents Lost After Upgrade (#3190)**: 用户从 1.0.1 升级至 1.0.2 后，所有自定义 Agent 丢失。**影响：严重**。
*   **高危 - 资源泄漏**：
    *   **[Bug] MCP process leak (#3226)**: 详见上文社区热点。
*   **中危 - 功能阻塞**：
    *   **[Bug] 微信无法接收完整消息 (#2868)**: 微信端只能看到工具调用过程，看不到最终总结，导致交互链条断裂。
    *   **[Bug] 长任务静默停止 (#3011)**: 模型在执行命令前自动停止，前后端无报错，需手动输入才能唤醒。
    *   **[Bug] 无法设置局域网 LM Studio (#3222)**: v1.0.2 破坏了局域网内模型提供商的连接配置。
*   **低危 - 兼容性**：
    *   **[Bug] llama.cpp server GLIBC mismatch (#3211)**: 官方 Docker 镜像中的 GLIBC 版本过低，无法启动 llama.cpp。
    *   **[Bug] ollama 测试连接失败 (#3218)**: 1.0.2 版本中 ollama 连接及多模态检测异常。

### 6. 功能请求与路线图信号
结合 Issues 与 PRs，以下功能可能进入下一版本规划：
*   **交互优化**：将 `/Approve` 改为按钮（**PR #3257 已提交**，落地确定性高）。
*   **飞书体验升级**：支持飞书 CardKit 流式输出（**Issue #3001**），对标钉钉体验。
*   **Agent 行为控制**：强制执行工作流规则（**Issue #3233**），确保 Agent 严格遵守 SOUL.md 中的步骤，而非自由发挥。
*   **技能生态**：支持技能下载/分享（**Issue #3241**），构建类似于插件市场的生态。

### 7. 用户反馈摘要
*   **痛点**：v1.0.2 版本的稳定性引发担忧，特别是**升级导致的数据丢失**和**启动速度变慢**（Issue #3256，需 2 分 40 秒）。微信和 QQ 渠道的消息处理（如截断、仅媒体消息无响应）也是高频槽点。
*   **期望**：用户非常渴望**更精细的控制权**，包括修改模型 Base URL（Issue #3251）、手写 Agent ID、以及更直观的 Token 统计。
*   **赞赏**：Windows 安装器自动修复 WebView2 缺失的改进（PR #3120）获得了社区的积极反馈。

### 8. 待处理积压
提醒维护者关注以下长期未决或亟待响应的问题：
*   **[#280 Discussion: Which Skills and MCPs Can Be Built-in?](https://github.com/agentscope-ai/CoPaw/issues/280)**: 开启于 3 月初，至今讨论热烈但未定案，需官方给出明确方向。
*   **[#3011 Bug: 长任务执行时中途静默停止](https://github.com/agentscope-ai/CoPaw/issues/3011)**: 严重影响长工作流体验，且难以排查，需技术专家介入。
*   **[#3136 perf(channels): stop() blocks asyncio event loop](https://github.com/agentscope-ai/CoPaw/issues/3136)**: 性能瓶颈问题，关闭 Agent 时会导致长达 8-10 秒的阻塞，影响多并发场景。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

你好！我是 EasyClaw (github.com/gaoyangz77/easyclaw) 的项目分析师。

基于 **2026-04-11** 的 GitHub 监控数据，该项目的核心动态集中在**版本更新**上。虽然代码库和问题追踪处于静默状态，但一个新的发布版本表明维护者正在专注于交付与分发，特别是针对 macOS 平台的兼容性维护。

以下是详细的日报内容：

---

### 📅 EasyClaw 项目日报 | 2026-04-11

#### 1. 今日速览
*   **版本迭代节奏稳定**：项目在今日发布了 `v1.7.10` 版本，表明项目仍处于活跃维护状态，版本号遵循常规迭代规律。
*   **开发活动暂歇**：过去 24 小时内 Issues 和 Pull Requests 的交互数据均为 0，社区在代码层面的讨论处于静默期，项目处于“静默维护”阶段。
*   **维护焦点转向部署**：唯一的动态来自 Release 页面的更新，说明当前维护者的重心主要在于修复构建环境或分发渠道的问题，而非新功能的开发。

#### 2. 版本发布
*   **版本号**：`v1.7.10` (RivonClaw v1.7.10)
*   **更新重点**：**macOS 平台兼容性修复**
    *   根据发布日志，本次更新主要解决了 macOS 用户的安装痛点。新版特别针对 **macOS Gatekeeper** 安全机制导致的“文件已损坏/无法打开”的误报问题提供了官方解决方案。
    *   **破坏性变更/迁移注意**：本次更新主要是对安装引导的修正。对于 macOS 用户，虽然二进制文件可能未更改，但官方文档明确了通过终端移除隔离属性的步骤，确保了用户能顺利运行应用。
    *   *详情链接*：[Releases: RivonClaw v1.7.10](https://github.com/gaoyangz77/easyclaw/releases)

#### 3. 项目进展
*   **核心进展**：项目向前推进了 **0** 个代码提交。
*   **说明**：今日没有新的 PR 被合并，也没有代码提交记录。`v1.7.10` 的发布可能是对已有构建产物的重新打标或文档补充，并未涉及仓库主分支的代码变动。

#### 4. 社区热点
*   **活跃度分析**：今日社区无活跃讨论。
*   **无热点 Issues/PRs**：由于今日无新增或更新的 Issue 与 PR，社区处于平静状态。这通常意味着当前版本在功能上对大多数用户是稳定的，或者用户正在等待下一个重大功能周期。

#### 5. Bug 与稳定性
*   **已知问题**：无新增 Bug 报告。
*   **已修复问题**：Release 日志暗示修复了 macOS 端的“应用损坏”伪错误。这虽然不是传统意义上的代码 Bug（而是应用签名/公证问题），但极大地提升了用户体验和软件的可用的稳定性。

#### 6. 功能请求与路线图信号
*   **信号强度**：弱。
*   **分析**：今日无新的 Feature Request。由于没有活跃的 PR，无法推断下一版本的功能规划。目前的路线图主要聚焦于保障现有工具在不同操作系统（尤其是 macOS）上的可用性。

#### 7. 用户反馈摘要
*   **痛点分析**：从 Release 日志中反向推断，**macOS 用户的安装体验**是当前的痛点。用户频繁遇到 "'RivonClaw' is damaged" 的系统拦截提示，这引发了困扰，促使维护者在更新日志中置顶了解决方案。
*   **满意点**：无显性评论反馈。

#### 8. 待处理积压
*   **积压情况**：良好。
*   **说明**：今日无任何新增 Issue 或 PR，因此不存在新的积压。维护者目前没有未处理的代码审查任务，可以专注于下一步的功能规划或 Bug 修复。

---

**项目健康度评估**：🟢 **健康**
尽管代码提交暂停，但快速响应 macOS 安装问题并更新 Release 说明，显示了维护者对用户体验的持续关注。

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*