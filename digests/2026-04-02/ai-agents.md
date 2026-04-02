# OpenClaw 生态日报 2026-04-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-02 00:11 UTC

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

你好！我是 OpenClaw 项目分析师。以下是基于 **2026-04-02** GitHub 数据生成的项目动态日报。

---

### 📅 OpenClaw 项目日报 | 2026-04-02

#### 1. 今日速览
OpenClaw 项目今日处于**极高活跃度**状态，过去 24 小时内产生了 **1000 条**代码与问题更新（500 Issues + 500 PRs），显示出强劲的开发动力与社区参与度。
*   **版本迭代**：项目正式发布了 **v2026.4.1** 版本，重点引入了原生 `/tasks` 命令和 SearXNG 搜索支持。
*   **稳定性挑战**：尽管功能迭代迅速，但昨日发布的 v2026.3.31 引发了严重的回归问题，导致大量用户报告 Dashboard 500 错误、执行策略失效及 npm 包依赖缺失，引发了部分社区用户的情绪反弹。
*   **开发重心**：PR 维护主要集中在修复 Microsoft Teams 频道、执行批准策略以及网关内存泄漏问题，表明团队正积极应对紧急 Bug。

#### 2. 版本发布
**📦 v2026.4.1 (正式版) & v2026.4.1-beta.1**
*   **核心功能**：
    *   **Tasks/chat**：新增 `/tasks` 命令，这是一个聊天原生的后台任务板。它能为当前会话显示最近的任务详情，并支持 Agent 本地回退计数。（相关 Issue #54226，贡献者 @vincentkoc）。
    *   **Web search/SearXNG**：增加了捆绑的 SearXNG 提供商插件。
*   **相关 Issue**：新功能回溯了 Issue #2317 (Add SearXNG as fallback provider) 的需求。

#### 3. 项目进展
今日虽为新版本发布日，但大量 PR 仍集中于修复近期引入的 Bug：
*   **[PR #59294] Microsoft Teams 频道修复**：
    *   **内容**：修复了 Teams 频道中线程会话隔离失效的问题，防止跨线程上下文泄露，并优化了出站目标和附件解析。
    *   **意义**：这是对企业级用户至关重要的稳定性修复，解决了 #58615。
*   **[PR #52731] 网关内存管理**：
    *   **内容**：为 3 个无界增长的 Map 添加了 TTL 清理机制，修复了导致网关 OOM (内存溢出) 崩溃的问题。
    *   **意义**：显著提升了长时间运行服务的稳定性。
*   **[PR #59280] 备份恢复功能**：
    *   **内容**：新增 `openclaw backup restore` 命令，完善了备份生命周期管理。
*   **[PR #56483] ANI 通道插件**：
    *   **内容**：添加了全新的 Agent-Native IM (ANI) 消息通道插件，扩展了 OpenClaw 的连接生态。

#### 4. 社区热点
*   **🔥 讨论最多 [Feature Request] #75: Linux/Windows Clawdbot Apps**
    *   **摘要**：用户强烈呼吁开发 Linux 和 Windows 版本的 Clawdbot 应用，目前仅 macOS/iOS/Android 受支持。
    *   **热度**：66 👍，63 条评论。
    *   **分析**：这是社区呼声最高的功能之一，表明跨平台桌面端存在巨大的用户痛点。
*   **🔥 兼容性危机 #52885: 微信插件与 v2026.3.22+ 不兼容**
    *   **摘要**：由于 OpenClaw 核心变更，官方微信插件 `@tencent-weixin/openclaw-weixin` v1.0.3 加载失败，报错 `Cannot find module 'openclaw/plugin-sdk'`。
    *   **热度**：43 条评论。
    *   **分析**：这反映了插件生态系统与核心库同步更新的滞后问题。
*   **🔥 身份验证 RFC #49971: Native Agent Identity & Trust Verification**
    *   **摘要**：提出基于 W3C DID 和 ERC-8004 的原生代理身份与信任验证标准。
    *   **热度**：36 条评论。
    *   **分析**：这是关于 OpenClaw 未来安全架构的重要高级讨论。

#### 5. Bug 与稳定性
**严重程度：高**
*   **Dashboard 500 错误 (#58814)**：
    *   **现象**：升级到 v2026.3.31 后，控制面板 (http://127.0.0.1:18789/) 无法访问，返回 500 错误。
    *   **影响范围**：macOS (Homebrew 安装)。
*   **执行策略失效 (#58691, #58662)**：
    *   **现象**：v2026.3.31 版本中，即便配置了 `tools.exec.ask='off'` 和 `security='full'`，所有 exec 命令仍强制要求手动批准；且 `allow-always` 按钮实际效果等同于 `allow-once`。
    *   **用户反馈**：严重影响了自动化脚本和非交互式场景的使用。
*   **NPM 包依赖缺失 (#58701)**：
    *   **现象**：v2026.3.31 的 npm 包似乎缺少内置插件（如 Telegram/Bedrock）的运行时依赖，导致加载失败。
*   **无限递归 Token 消耗 (#57551)**：
    *   **现象**：Kimi 模型在工具调用失败时进入无限重试循环，导致用户 Token 耗尽。

#### 6. 功能请求与路线图信号
*   **文件系统访问控制 (#52621)**：
    *   **请求**：在配置中添加 `allowedPaths` / `denyPaths`，以限制 Agent 对文件系统的读写范围。
    *   **信号**：这是对安全沙箱功能的进一步细化，可能会被纳入未来的安全增强计划中。
*   **上下文压缩自定义 (#19148)**：
    *   **请求**：允许用户自定义压缩提示词和压缩后的指令。
    *   **信号**：用户对 Token 消耗和记忆管理有高度的控制欲。

#### 7. 用户反馈摘要
*   **负面反馈**：Issue #57898 标题直言 *"ARE YOU GOING TO FRIGGING KEEP BREAKING THIS THING OR WE CAN GET A STABLE VERSION?????"*，反映了用户对近期连续几个版本（如 v2026.3.28 和 v2026.3.31）破坏原有功能的极度不满。
*   **集成痛点**：多个 Issue 反映 OpenRouter 认证失败、Mistral API 422 错误以及第三方模型适配问题，表明模型适配层的稳定性在多提供商环境下仍需打磨。
*   **Token 计量焦虑**：Issue #28278 和 #48206 指出 `/context detail` 严重低估实际 Token 使用量（显示 17k 实际 169k），导致用户成本预估失误。

#### 8. 待处理积压
*   **长期悬而未决**：
    *   **[#10841] Reminders set for wrong times**：Agent 不知道当前时间，导致提醒功能不可靠（2月提交，仍在讨论）。
    *   **[#2317] Web search SearXNG**：虽然已在 v2026.4.1 中解决，但该 Issue 长期处于 OPEN 状态直到最近（1月提交）。
    *   **[#29214] Signal group chat**：Signal 在群组 @提及 时不工作的问题仍未彻底解决。

---
*数据来源：OpenClaw GitHub Repository (openclaw/openclaw) | 分析时间：2026-04-02*

---

## 横向生态对比

# 2026-04-02 开源 AI 智能体生态横向对比分析报告

**分析师：** AI 智能体与个人助手领域观察员
**数据日期：** 2026-04-02
**核心参照：** OpenClaw 及其竞品生态

---

## 1. 生态全景
当前个人 AI 助手开源生态正处于**从"功能堆砌"向"工程化与稳定性"转型**的关键阶段。
*   **高活跃度伴随阵痛**：头部项目（如 OpenClaw, NanoBot, CoPaw）均保持极高的代码提交频率（日均 50+ PR），但高频迭代导致**稳定性危机**集中爆发（回归 Bug、内存泄漏、OOM 崩溃），反映出"快速发布与质量控制"之间的矛盾。
*   **技术栈分化**：生态呈现明显的语言与架构分化。Rust 体系（IronClaw, Zeroclaw）侧重性能与安全；Python/JS 体系（OpenClaw, CoPaw）侧重生态插件与敏捷开发；OpenAI 兼容层已成为事实标准。
*   **功能纵深演进**：简单的对话机器人已成过去式，今日热点集中在**多 Agent 协作**、**长时记忆/任务持久化**、以及**企业级集成**（如 SSO, OAuth, Teams）。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 版本动态 | 健康度评估 | 关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | **v2026.4.1** 发布 | ⚠️ **警示** | 回归问题严重，Dashboard 500，社区情绪反弹。 |
| **NanoBot** | 高 | 134 (Merge 34) | v0.1.4.post6 | 🔴 **高危** | Agent 无响应、性能退化 (1s -> 3min)、认证失效。 |
| **PicoClaw** | 24 | 59 | v0.2.4-nightly | 🟡 **波动** | 安全补丁、模型适配、Docker 配置痛点。 |
| **CoPaw** | 50 | 50 | **v1.0.0.post3** | 🟠 **修复中** | 本地模型崩溃、PPT 生成死锁、暗色模式。 |
| **Zeroclaw** | 1 | 6 | 无 | 🟢 **重构** | 品牌更名、TUI 重构、Shell 沙箱优化。 |
| **NanoClaw** | 10 | 7 (Merge 7) | 无 | 🟢 **稳健** | 核心通信机制修复、数据库迁移、Proton 集成。 |
| **IronClaw** | 37 | 50 | 无 | 🟢 **工程化** | CI/CD 自动化发现高危漏洞、架构提案活跃。 |
| **LobsterAI** | 19 | 50 (Merge 27) | 无 | 🔴 **不稳定** | 网关频繁重启、配置静默丢失、Key 泄漏风险。 |
| **Moltis** | 2 | 0 (6 Open) | 无 | 🟡 **功能扩张** | Matrix/Teams 集成、Firecrawl、Web 弹窗 Bug。 |
| **NullClaw** | 1 | 6 | 无 | 🟢 **迭代** | Heartbeat 核心逻辑修复、代理支持。 |
| **TinyClaw** | 0 | 0 | - | 💤 **沉寂** | 过去 24 小时无活动。 |
| **ZeptoClaw**| 0 | 0 | - | 💤 **沉寂** | 过去 24 小时无活动。 |
| **EasyClaw**| 0 | 1 | **v1.7.8** | 🟢 **维护** | macOS 兼容性修复、国际化 PR 待合并。 |

---

## 3. OpenClaw 在生态中的定位

*   **生态地位（"标准制定者"）**：OpenClaw 依然是社区的绝对风向标。无论是 NanoBot 的交互、NanoClaw的容器化，还是 EasyClaw 的桌面端尝试，都在对标 OpenClaw 的功能集。其 **500 Issues + 500 PRs** 的数据级断层显示了其无与伦比的社区规模与开发者基数。
*   **技术路线（全栈与集成）**：OpenClaw 坚持全平台覆盖，致力于解决"最后一公里"的连接问题。
*   **当前挑战（"大而不稳"）**：与专注于特定场景的竞品相比，OpenClaw 正面临**严重的稳定性债务**。v2026.3.31 版本导致的回归问题引发了社区罕见的愤怒情绪，这在追求极致稳定性的企业用户中是一个危险信号。
*   **差异化对比**：
    *   **vs NanoBot**：NanoBot 更轻量，在特定模型（如 DeepSeek）适配上更灵活，但在企业级渠道（Teams/Webex）支持上不如 OpenClaw 稳健。
    *   **vs IronClaw (Rust)**：IronClaw 拥有更好的内存安全性和性能（适合边缘计算），但 OpenClaw 的插件生态丰富度远超 Rust 体系。

---

## 4. 共同关注的技术方向

今日多个项目不约而同地涌现出以下技术需求，表明这是行业的共性痛点：

1.  **Prompt/Token 管理与成本计量**
    *   **OpenClaw**: 用户抱怨 Token 计量严重低估（显示 17k 实际 169k），请求自定义压缩指令。
    *   **LobsterAI**: 请求增加上下文窗口设置，防止 Overflow。
    *   **Zeroclaw**: 修复 `compact` 模式失效导致的 Token 浪费。
    *   **结论**: 用户对 LLM 成本极其敏感，**精细化的 Token 控制与准确的计量**是刚需。

2.  **多模态与工具调用的稳定性**
    *   **CoPaw**: 接入应用生成 PPT 导致会话崩溃（400 错误）。
    *   **NanoBot**: 工具调用挂起，只显示 thinking 无输出。
    *   **Moltis**: 集成 Firecrawl 爬虫和可视化浏览器。
    *   **结论**: 从"文本对话"走向"工具操作"（OS, Browser, Office）的过程中，**异常处理和状态恢复机制**仍需打磨。

3.  **多 Agent 协作与权限控制**
    *   **OpenClaw**: 修复执行策略失效，探讨基于 W3C DID 的身份验证。
    *   **NanoBot**: 提出 MCP (Model Context Protocol) 工具动态刷新。
    *   **CoPaw**: 热点讨论多 Agent 场景下的 `/approve` 跨级权限失效问题。
    *   **结论**: 单 Agent 已近天花板，**多 Agent 协同下的安全管控**是下一步竞争高地。

4.  **企业级隔离与安全**
    *   **IronClaw**: CI 自动检测到 Shell 元字符注入漏洞。
    *   **NanoClaw**: 用户请求私有化部署配置，避免敏感信息泄露。
    *   **Zeroclaw**: 修复 Shell 重定向拦截问题，平衡安全与可用性。
    *   **LobsterAI**: 报告 Agent 泄漏 Model Key 的严重 Bug。
    *   **结论**: 随着 AI 助手深入核心业务，**沙箱隔离、权限细化、防注入**成为安全底线。

---

## 5. 差异化定位分析

*   **OpenClaw & LobsterAI (应用中心型)**：
    *   侧重于成为**个人的操作中心**。强调 Dashboard、跨渠道连接（微信、钉钉、Teams）以及丰富的内置技能。
    *   *痛点*：臃肿，稳定性难以控制。
*   **IronClaw & Zeroclaw (内核/架构型)**：
    *   侧重于**底层架构与安全**。使用 Rust，强调内存安全、CLI 优先、TUI 体验。
    *   *痛点*：插件生态相对较小，学习曲线陡峭。
*   **NanoBot & NanoClaw (开发流/DevOps型)**：
    *   侧重于**开发者的生产力**。集成 MCP, Proton Mail, 代码库分析，强调在开发工作流中的自动化。
    *   *痛点*：企业级渠道支持较弱。
*   **PicoClaw (硬件/边缘型)**：
    *   侧重于**边缘侧与本地部署**。NPU 支持，强调隐私和低延迟。
    *   *痛点*：硬件适配兼容性问题复杂。
*   **Moltis (连接器型)**：
    *   侧重于**特定协议的深度集成**（Matrix, MS Teams）。
    *   *定位*：更适合作为企业现有 IM 系统的 AI 智能底座。

---

## 6. 社区热度与成熟度

*   **第一梯队（成熟期，生态完善）**：
    *   **OpenClaw**、**CoPaw**。用户基数庞大，讨论涉及高级功能（RAG、多Agent），但同时面临严重的旧债偿还压力（Bug 修复）。
*   **第二梯队（快速成长期，痛点明显）**：
    *   **NanoBot**、**LobsterAI**。迭代速度极快，深受早期用户喜爱，但频繁的版本回归表明工程化流程（CI/CD、测试覆盖）尚未成熟。
*   **第三梯队（重构/稳健期）**：
    *   **IronClaw**、**NanoClaw**、**Zeroclaw**。IronClaw 通过自动化工具治理代码质量；NanoClaw 专注于核心通信机制的稳定性修复，少即是多。

---

## 7. 值得关注的趋势信号

1.  **"Agent 2.0" —— 自进化与自我修复**：
    *   **CoPaw** 社区提出的 "Self-improving agent engine"（自动捕获错误并自我修复）代表了未来的终极方向。开发者不再满足于 Agent 只会执行任务，而是希望 Agent 具备自我诊断能力。
2.  **MCP (Model Context Protocol) 正成为新标准**：
    *   **NanoBot** 和 **OpenClaw** 对 MCP 工具的热烈讨论和快速跟进表明，**统一的工具调用协议**正在形成，这可能会彻底改变插件的开发模式。
3.  **"文本之外的交互"（Beyond Text）**：
    *   **Zeroclaw** 引入 `ratatui` 重构 TUI，**LobsterAI** 关注 PPT 生成，**Moltis** 集成 Firecrawl 爬虫。这些都说明，下一代 AI Agent 的核心竞争力将在于**对非模态数据（文档、UI界面、网页）的理解与处理能力**。
4.  **对 "稳定版本" 的集体呼唤**：
    *   OpenClaw 用户在 Issue 中怒吼 "KEEP BREAKING THIS THING"，**NanoBot** 用户抱怨更新后无法使用。这表明市场已经过了"尝鲜期"，**优先保障核心功能的稳定性**（SLA）比添加新 Feature 更能留住用户。

**给开发者的建议**：如果您正在寻找一个稳定的基座进行二次开发，目前 **IronClaw (Rust)** 或 **NanoClaw (稳定性修复)** 可能比激进的 **OpenClaw** 或 **NanoBot** 更适合；如果您需要最丰富的插件生态，**OpenClaw** 依然是唯一选择，但请锁定版本号。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-02)

## 1. 今日速览
今日 NanoBot 项目呈现出极高的活跃度，特别是 PR 方面有大量代码提交（134 条更新），显示出项目正处于快速迭代或重构冲刺阶段。然而，社区 Issues 反馈显示出当前版本（v0.1.4.post6）存在严重的**回归问题**，主要集中在 Agent 无响应、登录失败和性能显著下降，导致用户满意度面临挑战。虽然部分核心 Bug（如 OpenRouter 和 GitHub Copilot 登录）已得到快速修复并合并，但仍有大量与 Provider 兼容性和文件处理相关的稳定性问题亟待解决。今日的代码贡献主要集中在**MCP 协议增强**、**长时任务稳定性**以及**Provider 认证流程**的修复上。

---

## 2. 版本发布
**当前版本：** v0.1.4.post6 (注意：该版本被发现包含多个严重回归问题)
*注：今日无新版本发布，建议用户密切关注后续补丁版本以解决当前稳定性问题。*

---

## 3. 项目进展
今日共有 34 条 PR 被合并或关闭，主要进展如下：

*   **安全性增强与内网支持 ([#2731](https://github.com/HKUDS/nanobot/pull/2731))**: 增加了对 SSRF 防护的自定义配置 (`ssrfAllowedSubnets`)，允许在内网或私有部署环境中通过配置 CIDR 范围来访问私有网络服务，解决了 [#2669](https://github.com/HKUDS/nanobot/pull/2731) 中提出的 Tailscale 等合法 CGNAT 地址被封禁的问题。
*   **关键 Bug 修复 - OpenRouter ([#2687](https://github.com/HKUDS/nanobot/pull/2687))**: 修复了切换到原生 SDK 后，OpenRouter 提供商错误地将 `cache_control` 头应用于非 Claude 模型的问题，这解决了导致 Agent 返回 "Incorrect API key" 等报错的致命 Bug ([#2639](https://github.com/HKUDS/nanobot/issues/2639))。
*   **关键 Bug 修复 - GitHub Copilot ([#2668](https://github.com/HKUDS/nanobot/pull/2668))**: 恢复了 GitHub Copilot 的设备流登录功能，修复了认证头格式错误的导致登录失败的问题 ([#2573](https://github.com/HKUDS/nanobot/issues/2573))。
*   **消息工具逻辑修正 ([#2474](https://github.com/HKUDS/nanobot/pull/2474))**: 修复了 `message` 工具在向不同 `chat_id` 发送消息时，因错误携带原 `message_id` 而导致在飞书等渠道出现" unintended reply"（ unintended 引用）的问题。

---

## 4. 社区热点
今日讨论的热点主要集中在 v0.1.4.post6 版本的质量问题上：

*   **[#2573 Github Copilot登录失败](https://github.com/HKUDS/nanobot/issues/2573)** (👍 8)
    *   **痛点**: 用户反馈更新到 post6 后 Copilot 无法登录，报错 "Authorization header is badly formatted"。
    *   **分析**: 这是一个典型的回归 Bug，源于底层库的切换。虽然已有修复 PR [#2668](https://github.com/HKUDS/nanobot/pull/2668)，但用户情绪激动，反映出对 OAuth 集成稳定性的担忧。
*   **[#2704 The tool continues to run but returns no results](https://github.com/HKUDS/nanobot/issues/2704)** (评论 14)
    *   **痛点**: Agent 仅显示 "thinking" 但不再输出结果或错误，无限期挂起。
    *   **分析**: 这是导致用户无法使用的核心阻塞问题，可能涉及异步流处理或缓存机制的死锁。
*   **[#2713 agent response speed has slowed down](https://github.com/HKUDS/nanobot/issues/2713)**
    *   **痛点**: 响应时间从 1 秒飙升至 3 分钟。
    *   **分析**: 严重的性能退化，可能与缓存机制失效或频繁的无效重试有关，极大影响用户体验。

---

## 5. Bug 与稳定性
今日报告的 Bug 数量较多且严重程度较高，主要集中在 **v0.1.4.post6** 版本：

1.  **[高危] Agent 无响应/挂起**:
    *   **[#2704](https://github.com/HKUDS/nanobot/issues/2704)**: Agent 停止返回结果。
    *   **[#2711](https://github.com/HKUDS/nanobot/issues/2711)**: 升级后 Agent 完全失去响应。
    *   **状态**: 待修复，建议优先级 P0。
2.  **[高危] Provider 兼容性与登录**:
    *   **[#2590](https://github.com/HKUDS/nanobot/issues/2590)**: MiniMax Provider 在 post6 中失效。
    *   **[#2639](https://github.com/HKUDS/nanobot/issues/2639)**: OpenRouter 返回 API Key 错误。
    *   **状态**: OpenRouter 已修复 ([#2687](https://github.com/HKUDS/nanobot/pull/2687))，MiniMax 待处理。
3.  **[中危] 文件访问与权限**:
    *   **[#2660](https://github.com/HKUDS/nanobot/issues/2660)**: 启用 `restrictToWorkspace` 后无法读取渠道接收的文件。
    *   **状态**: 修复 PR 已提交 ([#2725](https://github.com/HKUDS/nanobot/pull/2725))，待合并。
4.  **[低危] 特定渠道 Bug**:
    *   **[#2696](https://github.com/HKUDS/nanobot/issues/2696)**: 发送 HTML 文件到钉钉时报错。

---

## 6. 功能请求与路线图信号
今日涌现的功能请求显示用户渴望更强的扩展性和 AI 能力：

*   **MCP (Model Context Protocol) 增强**:
    *   **[#2730](https://github.com/HKUDS/nanobot/pull/2730)**: 支持 MCP 工具的动态刷新（Live reload），无需重启 Agent。
    *   **[#2723](https://github.com/HKUDS/nanobot/issues/2723)**: 优化 MCP 工具变更时的 Prompt Cache 稳定性。
    *   **信号**: MCP 正成为 NanoBot 生态的核心，动态工具调用和缓存优化是接下来的重点。
*   **自动技能提取**:
    *   **[#2735](https://github.com/HKUDS/nanobot/pull/2735)**: 提出从对话历史中自动提取可复用的 "Skills" (SOP)，构建有机的技能库。
    *   **信号**: 结合 Dream 记忆系统，Agent 的自主进化能力是未来的高阶方向。
*   **新爬虫支持**:
    *   **[#2700](https://github.com/HKUDS/nanobot/issues/2700)**: 请求增加 [Crawl4AI](https://github.com/unclecode/crawl4ai) 以支持更可靠的网页抓取。
    *   **状态**: 社区已提交 PR [#2724](https://github.com/HKUDS/nanobot/pull/2724)。
*   **认证管理优化**:
    *   **[#2665](https://github.com/HKUDS/nanobot/issues/2665)**: 请求提供 `logout` 命令以便切换账号。
    *   **状态**: PR [#2727](https://github.com/HKUDS/nanobot/pull/2727) 已提交。

---

## 7. 用户反馈摘要
*   **满意度**: 当前版本体验极差，大量中文用户在评论区反馈“更新后无法使用”或“速度变慢”，主要集中在 v0.1.4.post6 的回归问题上。
*   **文档与教程**: 用户 [Zuimeng-0710] 主动贡献了 **Windows + DeepSeek 的完整中文教程** ([#2714](https://github.com/HKUDS/nanobot/issues/2714))，反映出社区对新手的引导需求强烈，且官方文档在 Windows 环境和特定模型配置上可能存在盲区。
*   **特定场景痛点**:
    *   **内网部署**: 用户对 SSRF 防护过于严格导致无法访问内网服务（如 Tailscale）表示困扰。
    *   **长任务运行**: 用户反馈在企业微信等渠道调用 LLM 超过 10 分钟会导致流式中断错误 ([#2709](https://github.com/HKUDS/nanobot/issues/2709))。

---

## 8. 待处理积压
维护者需关注以下长期未决或影响较大的问题：

*   **架构争议**:
    *   **[#2463](https://github.com/HKUDS/nanobot/issues/2463)**: 关于 Prompt History 存储机制的架构级讨论，已持续多日。
*   **矩阵 协议兼容性**:
    *   **[#1570](https://github.com/HKUDS/nanobot/issues/1570)**: 与 Conduit 服务器的 E2E 同步失败，涉及底层协议兼容。
*   **测试依赖问题**:
    *   **[#2695](https://github.com/HKUDS/nanobot/issues/2695)**: 测试用例的依赖跳过逻辑不一致，可能导致错误的 CI 通过。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是基于 2026-04-02 数据生成的 **Zeroclaw 项目动态日报**。

---

# Zeroclaw 项目日报 | 2026-04-02

### 1. 今日速览
Zeroclaw 项目在过去 24 小时内展现出**极高活跃度**，共产生 6 个代码/问题变更项。项目正处于重大架构调整与功能优化的并行期。虽然今日无新版本发布，但 **Pull Requests 的爆发式增长（5 个）** 表明开发团队正在积极推进核心重构与功能迭代。值得注意的是，今日出现了一个涉及全面品牌更名（ZeroClaw -> Hrafn）的超大型 PR，以及针对 TUI 交互、WebSocket 稳定性和 Shell 安全性的多项重要修复。

---

### 2. 版本发布
*   **当前状态**：无新版本发布。
*   **说明**：尽管有大量代码提交，今日暂无 Release 记录。考虑到 PR #5158 涉及全局更名和重构，建议用户关注后续可能包含破坏性变更的版本公告。

---

### 3. 项目进展
今日代码库主要向 **交互体验优化** 和 **底层架构重构** 两个方向推进，核心进展如下：

*   **TUI 交互模式重构**:
    *   **进展**: 提交了基于 `ratatui` 的新 TUI 入门向导 (#5159)。
    *   **影响**: 引入了全新的命令行交互体验，覆盖从 API Key 输入到模型配置的全流程。为了简化架构，该 PR **移除了 OAuth 和 Browser 登录方式**，转为纯 API Key 鉴权。这标志着项目在 CLI 用户体验上的重大升级。
    *   *链接*: [PR #5159](https://github.com/zeroclaw-labs/zeroclaw/pull/5159)

*   **Web 仪表盘持久化**:
    *   **进展**: 提交了 Web UI 状态持久化功能 (#5157)。
    *   **影响**: 解决了 Web Dashboard 在切换标签或刷新时丢失聊天记录和配置的痛点，显著提升了 Web 端的可用性和稳定性。
    *   *链接*: [PR #5157](https://github.com/zeroclaw-labs/zeroclaw/pull/5157)

*   **项目品牌重塑与架构拆分**:
    *   **进展**: 发起了一个史诗级的重构 PR (#5158)。
    *   **影响**: 计划将项目从 "ZeroClaw" 更名为 "Hrafn"，并将 Monorepo 结构拆分为 `robot-kit` 和 `aard` (核心) 等模块。虽然该 PR 已关闭（可能是草案或因范围过大暂缓），但这释放了项目向模块化、专业化发展的强烈信号。
    *   *链接*: [PR #5158](https://github.com/zeroclaw-labs/zeroclaw/pull/5158)

---

### 4. 社区热点
今日最引人注目的动态来自 #5158（品牌更名）和 #5159（TUI 重构）。

*   **[热点] #5158: ZeroClaw 更名为 Hrafn 及工作区重组**
    *   **状态**: Closed (Draft/Proposal)
    *   **分析**: 尽管该 PR 被关闭，但涉及几乎全部子系统的标签（从 agent 到 channel，从 provider 到 tool）。这表明核心团队正在对项目的未来定位进行深度思考。Hrafn（意为“ Raven”）可能代表项目更专注于“集群”或“分布式智能”方向。
    *   *链接*: [PR #5158](https://github.com/zeroclaw-labs/zeroclaw/pull/5158)

*   **[热点] #5159: 引入 Rust 生态流行的 TUI 框架 ratatui**
    *   **状态**: Open
    *   **分析**: 社区对 CLI 工具的现代感有更高要求。放弃复杂的 OAuth 鉴权，回归 API Key 模式，虽然是简化，但也可能会引起需要 SSO 集成的企业用户的讨论。
    *   *链接*: [PR #5159](https://github.com/zeroclaw-labs/zeroclaw/pull/5159)

---

### 5. Bug 与稳定性
今日处理了一个 **S1 级（工作流阻断）** Bug 和多个稳定性修复：

*   **[S1 - Critical] #5155: Delegate agents 忽略 skills 注入模式配置**
    *   **描述**: 委派代理在注入 Skills 时，无视 `[skills].prompt_injection_mode = "compact"` 配置，强制使用 `Full` 模式。这会导致 Token 消耗激增，可能超出上下文窗口限制，直接阻断工作流。
    *   **状态**: Open (待修复)
    *   **评估**: 这是一个严重的逻辑错误，影响多代理协作的成本和效率。
    *   *链接*: [Issue #5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155)

*   **[Fix] #5160: 修复 Shell 命令重定向过度拦截问题**
    *   **描述**: 安全组件此前过于严格，拦截了所有 `<` 和 `>`，导致 Here Documents (`<<`) 和 stderr 重定向 (`2>/dev/null`) 等安全且常用的 Shell 模式无法使用。
    *   **状态**: Open (修复已提交)
    *   **评估**: 这里的修复平衡了安全性与可用性，允许经过验证的安全重定向操作。
    *   *链接*: [PR #5160](https://github.com/zeroclaw-labs/zeroclaw/pull/5160)

*   **[Fix] #5161: WebSocket Steering 逻辑修复**
    *   **描述**: 修复了 WebSocket 导向过程中可能已流失的输出问题，确保在流式传输干预时，已提交的内容持久化，且导向逻辑保持“增量”而非“重置”。
    *   **状态**: Open
    *   *链接*: [PR #5161](https://github.com/zeroclaw-labs/zeroclaw/pull/5161)

---

### 6. 功能请求与路线图信号
*   **Dashboard 状态管理**: PR #5157 表明“会话持久化”是当前 Web 端的优先级事项，未来可能会进一步加强 Web UI 的状态管理能力。
*   **Onboarding 流程简化**: PR #5159 显示项目致力于降低新用户的上手门槛（通过 TUI 向导），同时可能在放弃对复杂的浏览器登录方式的支持，转而专注于标准的 API Key 对接。
*   **安全 Shell 执行**: PR #5160 暗示项目正在构建更智能的 Shell 沙箱，旨在允许高级用户使用复杂的 Shell 语法（如 Heredocs）的同时保障安全。

---

### 7. 用户反馈摘要
*   **痛点 (Issue #5155)**: 用户反馈代理协作模式下的 Prompt 控制完全失效，配置文件不生效，导致 Token 浪费和潜在的任务失败。这是目前最受关注的负面体验。
*   **体验改善需求**:
    *   Web 端用户希望刷新页面后不丢失上下文（PR #5157 正在解决）。
    *   CLI 用户期待更现代、更友好的终端界面（PR #5159 正在解决）。

---

### 8. 待处理积压
*   **S1 Bug 修复**: **Issue #5155** 需要尽快找到对应的修复 PR。目前该 Bug 仍处于 Open 状态，且无明显的关联 PR 在今日合入，需维护者优先处理。
*   **品牌更名遗留**: PR #5158 虽已关闭，但若更名计划确定，相关的文档更新、域名变更和迁移指南仍需在未来的 PR 中落实。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-02)

**分析师**: AI 智能体与个人助手领域观察员
**报告日期**: 2026-04-02
**项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览
PicoClaw 项目今日处于**极度活跃**状态，过去 24 小时内共有 **59 条 PR** 和 **24 条 Issue** 发生更新，显示出强劲的开发迭代速度和社区参与度。
*   **核心突破**: 重要的安全补丁已合并，修复了 WebSocket 潜在的跨域劫持漏洞，同时针对 Anthropic 和 OpenAI 的模型适配进行了深度优化。
*   **版本动态**: 发布了最新的 `v0.2.4-nightly` 版本，包含最新的代码修复与功能试验。
*   **社区讨论**: 焦点集中在 "Seahorse" 生物启发性记忆系统、UI 交互细节以及渠道连接的稳定性上。
*   **风险提示**: 随着高频提交，WebUI 与 Gateway 的连接问题以及部分渠道（如 QQ、Docker 端口配置）的 Bug 开始显现，需关注版本稳定性。

## 2. 版本发布
*   **v0.2.4-nightly.20260401.c7461f9e**
    *   **发布说明**: 这是一个自动构建的 Nightly 版本，可能不稳定，请谨慎使用。
    *   **主要变更**: 基于 `main` 分支的最新构建。包含了对 Anthropic SDK 的原生支持修复、OpenAI Responses API 的重构支持以及 CLI 界面的美化更新。
    *   **完整变更日志**: [Compare v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

## 3. 项目进展
今日合并/关闭的 PR 主要集中在**安全性增强**、**提供商 适配**以及**构建系统优化**：

*   **[安全] 强化 WebSocket 安全性 (#2256)** (待合并/活跃中)
    *   **内容**: 修复了 Pico Protocol WebSocket 通道中的 `CheckOrigin` 默认行为，防止 Cross-Site WebSocket Hijacking (CSWSH) 攻击。若未配置 AllowOrigins，默认不再允许所有来源。
    *   **影响**: 提升了项目在企业环境中的安全性，是重要的安全加固。

*   **[功能] 添加自定义 User-Agent 支持 (#2242)** (待合并/活跃中)
    *   **内容**: 为 ModelConfig 增加了 `userAgent` 配置项。
    *   **影响**: 解决了部分模型服务商（如 Coding Plan 等）对 User-Agent 有特殊限制或过滤导致请求失败的问题，增强了兼容性。

*   **[修复] 修复 Anthropic SDK 调用逻辑 (#2259)** (待合并/活跃中)
    *   **内容**: 修复了在使用 API Key 时，anthropic 协议错误地使用了 OpenAI 兼容的 HTTPProvider 而非原生 Anthropic SDK 的问题。
    *   **影响**: 确保了 Claude 模型调用的正确性，尤其是针对 Prompt Caching 等高级特性。

*   **[修复] CLI 界面结构化升级 (#2229)** (待合并/活跃中)
    *   **内容**: 引入类似现代 CLI 的结构化终端 UI (boxed, column-aligned)。
    *   **影响**: 提升了非 WebUI 用户的使用体验，使日志输出更加清晰。

*   **[构建] 修复 macOS DMG 构建错误 (#2255)**
    *   **内容**: 修正了 `create_dmg.yml` 中的拼写错误。
    *   **影响**: 恢复了 macOS 安装包的自动化构建流程。

## 4. 社区热点
今日讨论热度最高的话题集中在**高级智能体特性**和**产品架构调整**：

*   **[Feature] Seahorse - 生物启发的 AI 智能体记忆系统 (#1919)** (评论: 9 👍)
    *   **链接**: [sipeed/picoclaw#1919](https://github.com/sipeed/picoclaw/issues/1919)
    *   **分析**: 社区对赋予 AI 智能体类似人类的短期/长期记忆系统表现出浓厚兴趣。该系统旨在通过海马体机制解决上下文压缩与记忆巩固问题，是迈向更高级 AGI 助手的关键尝试。

*   **[RFC] 提议废弃 TUI 并将功能迁移至 CLI (#2208)** (评论: 4 👍)
    *   **链接**: [sipeed/picoclaw#2208](https://github.com/sipeed/picoclaw/issues/2208)
    *   **分析**: 随着现代 WebUI 的快速发展，终端用户界面 (TUI) 的维护成本过高且功能滞后。社区正在讨论是否将其核心功能整合进 CLI，这标志着项目可能正在进行一次架构精简。

*   **[Feature] WebSocket 通道支持本地 Web 聊天 (#641)** (评论数活跃)
    *   **链接**: [sipeed/picoclaw#641](https://github.com/sipeed/picoclaw/pull/641)
    *   **分析**: 该 PR 新增了 WebSocket 渠道，允许通过局域网网页端进行聊天，且界面已针对移动端优化。这为 PicoClaw 在移动设备上的轻量级接入提供了便捷方案。

## 5. Bug 与稳定性
今日报告的 Bug 涉及**部署配置**、**WebUI 连通性**及**模型适配**：

*   **[HIGH] Docker 部署端口映射导致 Web 输入框失效 (#2236)**
    *   **现象**: 修改 Docker Web 监听端口映射后，页面消息无法发送，输入框被禁用。
    *   **状态**: [OPEN] - 待修复
    *   **链接**: [sipeed/picoclaw#2236](https://github.com/sipeed/picoclaw/issues/2236)

*   **[MED] WebUI 无法连接由自身启动的 Gateway (#2213)**
    *   **现象**: 使用 `-public` 等参数启动时，WebUI 前端与后端 Gateway 进程连接失败。
    *   **状态**: [OPEN] - 待修复
    *   **链接**: [sipeed/picoclaw#2213](https://github.com/sipeed/picoclaw/issues/2213)

*   **[MED] Anthropic Provider 忽略 SystemParts (#2191)**
    *   **现象**: `anthropic_messages` Provider 将 `system` 作为扁平字符串发送，破坏了 Prompt Caching 功能。
    *   **状态**: [OPEN] - 相关修复 PR (#2259) 已跟进
    *   **链接**: [sipeed/picoclaw#2191](https://github.com/sipeed/picoclaw/issues/2191)

*   **[LOW] 控制台对话框复制功能失效 (#2254)**
    *   **现象**: Web 控制台对话框中的文字无法复制。
    *   **状态**: [OPEN] - 待修复
    *   **链接**: [sipeed/picoclaw#2254](https://github.com/sipeed/picoclaw/issues/2254)

## 6. 功能请求与路线图信号
从新增的 Issues 和 PRs 中，我们可以窥见项目未来的发展方向：

*   **企业级可观测性**:
    *   **[Feature] OTel GenAI Support (#1731)**: 提议增加 OpenTelemetry 支持，以满足企业级监控需求。
    *   **[Feature] LangSmith Tracing (#2173)**: 希望集成 LangSmith 用于调试复杂的智能体工具调用链。
    *   **信号**: PicoClaw 正试图从个人玩具项目向企业级可用平台过渡。

*   **Provider 与 生态扩展**:
    *   **[PR] Add Affine Workspace Integration (#1124)**: 增加对 Affine 知识库的搜索与读取能力。
    *   **[Feature] Ollama Cloud Credentials (#2225)**: 用户请求支持 Ollama Cloud 的凭证配置。
    *   **[Refactor] OpenAI Responses API (#2171)**: 社区正推动从 Chat Completions API 向新的 Responses API 迁移。

*   **自动化与运维**:
    *   **[Task] Self-upgrade support (#618)**: 长期需求，希望实现程序的自我更新。

## 7. 用户反馈摘要
*   **痛点**: Windows 平台上的 QQ 渠道兼容性依然存在问题 (#2080, #2257)，尤其是本地 OCR 技能无法处理图片，表明非文本模态的处理流程存在断点。
*   **体验**: 用户对 WebUI 的细节体验非常关注，包括 "思考过程" (Thinking content) 的显示 (#2216)、Token 消耗统计面板 (#2217) 以及 Tool Call 和文本内容的混合显示 (#2220)。
*   **部署**: Docker 用户的配置灵活性反馈较多，特别是端口映射后的服务发现问题是目前的难点。

## 8. 待处理积压
*   **[Feature] Webhook messages (#850)**: 这是一个 2 月提出的通用功能，允许外部系统通过 Webhook 通知 Agent。虽然 Grafana 和 Teams 的 Webhook 通道正在添加，但通用的 API 机制尚未闭环。
*   **[Feature] Standardize inbound context (#2233)**: 关于解耦路由与会话分配的高级架构讨论，需要核心维护者的关注。

---
*日报生成完毕。数据来源: GitHub Public Events (2026-04-01 ~ 2026-04-02)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报：2026-04-02

## 1. 今日速览
NanoClaw 项目今日展现出极高的开发活跃度与社区参与度，**过去 24 小时内合并了 7 个 PR，同时迎来了 10 个新的功能与修复请求**，显示项目正处于快速迭代期。尽管用户提出了关于多 Provider 支持（Issue #80）和部署安全性（Issue #1424）的长期关注点，但今日的重点明显转向了**内核稳定性修复**与**Proton/邮件生态集成**。值得注意的是，针对 IPC 通讯机制和超时处理的关键 Bug 修复（PR #1575, #1572）已经合并并关闭，这表明维护团队正在积极夯实底层通信的可靠性。

## 2. 版本发布
无新版本发布。当前代码库正处于频繁提交阶段，建议关注后续关于数据库迁移（PR #1580）的合并动态，这可能预示着下一个版本的到来。

## 3. 项目进展
今日合并的关键 PR 显著提升了系统的稳定性与通信能力：

*   **[CLOSED] feat: add Telegram channel and native credential proxy (#1582)**
    *   **进展**：引入了基于 grammY 的原生 Telegram 机器人支持，并移除了对 `@onecli-sh/sdk` 的外部依赖，内置了凭证代理服务。
    *   **意义**：增强了多渠道接入能力，同时降低了对外部闭源依赖的供应链风险。
    *   **链接**: [qwibitai/nanoclaw#1582](https://github.com/qwibitai/nanoclaw/pull/1582)

*   **[CLOSED] fix: always write _close sentinel in notifyIdle (#1575)**
    *   **进展**：修复了容器 IPC 轮询器在首次响应后无法正常退出的严重 Bug，防止了后续消息被静默消费（丢失）。
    *   **意义**：这是今日合并的最关键稳定性修复，解决了导致消息丢失的核心逻辑错误。
    *   **链接**: [qwibitai/nanoclaw#1575](https://github.com/qwibitai/nanoclaw/pull/1575)

*   **[CLOSED] fix(NAN-37): replace ad-hoc ALTER TABLE patches with versioned migration runner (#1580)**
    *   **进展**：引入了类似于 Rails 的版本化数据库迁移系统，替换了原有的临时补丁方案。
    *   **意义**：极大提升了数据库 schema 升级的安全性和可回滚性，是生产环境部署的重要里程碑。
    *   **链接**: [qwibitai/nanoclaw#1580](https://github.com/qwibitai/nanoclaw/pull/1580)

## 4. 社区热点
今日社区讨论主要集中在**生存危机（API 封禁风险）**与**企业级安全隔离**：

*   **[#80] Support runtimes and providers other than Claude/Anthropic**
    *   **热度**：👍 56，评论 28
    *   **核心诉求**：由于 Anthropic 开始封禁使用 OpenClaw/NanoClaw 的用户账号，社区强烈呼吁项目增加对 OpenAI (Codex)、Gemini 等其他 Provider 的支持，以避免“把鸡蛋放在同一个篮子里”。
    *   **链接**: [qwibitai/nanoclaw#80](https://github.com/qwibitai/nanoclaw/issues/80)

*   **[#1424] Securing One's Fork?**
    *   **热度**：评论 4
    *   **核心诉求**：用户担忧项目安装时建议创建的 Fork 必须是公开的，导致用于医疗健康系统等敏感场景的配置暴露。这反映了社区对**私有化部署**和**配置隐身**的迫切需求。
    *   **链接**: [qwibitai/nanoclaw#1424](https://github.com/qwibitai/nanoclaw/issues/1424)

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在文件同步、超时处理和文档一致性上：

*   **[HIGH] 消息丢失风险** (PR #1576 已修复逻辑)
    *   **问题**：当 Agent 在工具调用期间输出文本时，`notifyIdle()` 调用过早，导致容器在忙时被标记为空闲，引起后续消息竞争和丢失。
    *   **状态**：修复方案已提出，待合并。
    *   **链接**: [qwibitai/nanoclaw#1576](https://github.com/qwibitai/nanoclaw/pull/1576)

*   **[MEDIUM] Skill 同步不清理旧文件** (Issue #1578)
    *   **问题**：目前的 Skill 同步机制是增量复制，当 Skill 被重命名或删除后，旧残留文件不会被清理，可能导致容器内文件冗余或逻辑混乱。
    *   **状态**：Open，需确认是否为设计行为。
    *   **链接**: [qwibitai/nanoclaw#1578](https://github.com/qwibitai/nanoclaw/issues/1578)

*   **[MEDIUM] SDK 查询挂起** (PR #1572 / #1571 已修复)
    *   **问题**：网络故障或限速导致 SDK `query()` 挂起时，容器级别的超时计时器会被意外重置，导致容器永久无响应。
    *   **状态**：修复方案已合并 (PR #1571)。
    *   **链接**: [qwibitai/nanoclaw#1572](https://github.com/qwibitai/nanoclaw/pull/1572)

*   **[LOW] 文档不一致** (Issue #1573)
    *   **问题**：关于数据目录的环境变量文档存在描述错误。
    *   **状态**：Open。
    *   **链接**: [qwibitai/nanoclaw#1573](https://github.com/qwibitai/nanoclaw/issues/1573)

## 6. 功能请求与路线图信号
从活跃的 PR 可以看出，**隔离性**与**邮件生产力**是近期开发的重头戏：

*   **Proton 生态深度集成**：
    *   **[OPEN] PR #1570**: 新增 `/add-proton-email` 指令，集成 Proton Mail。
    *   **[OPEN] PR #1117**: 计划将支持扩展到 Proton 全套服务，包括 36 个 MCP 工具。
    *   **信号**：项目正致力于将 NanoClaw 打造为 Proton 生态的强力 AI 前端。

*   **高级会话与容器隔离**：
    *   **[OPEN] PR #1583**: 引入“隔离会话”技能，允许在组内实现上下文隔离。
    *   **[OPEN] PR #1584**: 实现每组容器的 Skill 过滤及独立配置。
    *   **信号**：响应了 Issue #1490 中关于多租户和严格安全隔离的需求。

*   **本地化聊天界面**：
    *   **[OPEN] PR #1534**: 添加了带 PWA 前端的 `local-chat` 频道。
    *   **信号**：填补了团队协作场景下 Web 界面的空白。

## 7. 用户反馈摘要
*   **痛点**：对 Anthropic 封禁账号的恐惧是真实的，用户希望通过更换 Provider（如 OpenAI 或开源模型）来规避风险（Issue #80）。
*   **场景**：用户正在将 NanoClaw 用于**家庭医疗系统**和**团队协作**（PR #1534, Issue #1424），这进一步凸显了**数据隐私**和**私有部署**的重要性。
*   **建议**：有用户指出 Skill 同步机制不够完善（只增不减），希望能通过设计改进来维护容器的整洁性（Issue #1578）。

## 8. 待处理积压
*   **[#80] Support runtimes and providers other than Claude/Anthropic** (自 2026-02-04 开放)
    *   **提醒**：这是社区票数最高的请求（56 👍），建议维护者评估纳入路线图的优先级，尤其是在 API 封禁风险增加的背景下。
    *   **链接**: [qwibitai/nanoclaw#80](https://github.com/qwibitai/nanoclaw/issues/80)

*   **[#1490] Guidance: host-level security enforcement** (自 2026-03-27 开放)
    *   **提醒**：涉及多组部署和严格隔离需求，虽然已有相关 PR 提出（#1584），但核心的“Host-level enforcement”讨论仍未完结。
    *   **链接**: [qwibitai/nanoclaw#1490](https://github.com/qwibitai/nanoclaw/issues/1490)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-04-02)

## 1. 今日速览
NullClaw 项目在过去 24 小时内展现出极高的开发活跃度。尽管没有新版本发布，但代码库通过 **6 个新提交的 PR** 和 **1 个重新激活的 Issue** 显露出强劲的功能迭代势头。今日主要更新集中在 **核心调度机制修复**（Heartbeat 任务处理）与 **网络能力增强**（代理支持与配置解析），表明项目正致力于提升企业级环境下的可用性与网络兼容性。尽管 PR 讨论区暂无新增评论，但大量待合并 PR 显示社区贡献意愿强烈。

## 2. 版本发布
*当前无新版本发布。*

## 3. 项目进展
尽管今日没有 PR 直接合并，但以下代码变更已进入待审核队列，预示着项目功能的重要演进：

*   **核心调度逻辑修复**：PR #757 ([feat: dispatch agent on heartbeat...](https://github.com/nullclaw/nullclaw/pull/757)) 修复了一个关键逻辑漏洞。此前系统虽然会读取 `HEARTBEAT.md` 中的任务，但仅做计数而**未实际分发 Agent 去执行**。此 PR 将填补“感知”与“行动”之间的缺失环节，完善自动化闭环。
*   **工具库扩展**：PR #716 ([Add calculator tool](https://github.com/nullclaw/nullclaw/pull/716)) 引入了包含 20 种数学运算（如统计、对数等）的计算器工具，这将显著增强 Agent 处理数值分析任务的能力。
*   **网络与网关增强**：
    *   PR #755 ([support http_proxy env vars](https://github.com/nullclaw/nullclaw/pull/755)) 增加了对标准代理环境变量 (`http_proxy`/`https_proxy`) 的支持，解决了复杂网络环境下的连接痛点。
    *   PR #687 ([gateway HTTP body configurable](https://github.com/nullclaw/nullclaw/pull/687)) 将 HTTP 请求体大小限制和超时时间改为可配置，移除了硬编码的 64KB 限制，适应多模态数据处理需求。
*   **配置解析修正**：PR #728 ([fix custom provider...](https://github.com/nullclaw/nullclaw/pull/728)) 解决了自定义 LLM 提供商（特别是带有长路径的 API，如 Cloudflare AI）的模型解析问题，提升了第三方服务集成的稳定性。

## 4. 社区热点
*   **Issue #703 - [bug] heartbeat 没有任何日志记录** ([链接](https://github.com/nullclaw/nullclaw/issues/703))
    *   **状态**：活跃。尽管该 Issue 创建于 3 月 23 日，但在过去 24 小时内（最后更新于 2026-04-01）重新获得关注。
    *   **分析**：用户报告即使启用了详细的诊断配置（`log_message_payloads`, `log_llm_io` 等），heartbeat 依然不产生任何日志。这直接影响了调试效率。结合今日的 PR #757 修复了 heartbeat 的任务执行逻辑来看，社区正在集中力量解决 Heartbeat 模块的深层次问题。

## 5. Bug 与稳定性
*   **高危**：**Heartbeat 模块静默失效**
    *   **描述**：Issue #703 指出 Heartbeat 功能在没有任何日志输出的情况下运行，且 PR #757 揭示了此前写入 `HEARTBEAT.md` 的任务并未被实际执行。
    *   **状态**：已有修复 PR #757 提交，建议优先合并以恢复核心调度功能。
*   **中危**：**自定义 Provider 模型解析错误**
    *   **描述**：使用特定格式的自定义 API Key 时，系统无法正确解析主模型 ID。
    *   **状态**：已有修复 PR #728。

## 6. 功能请求与路线图信号
*   **代理支持**：PR #755 显示用户对标准代理协议的支持有明确需求，这通常是企业内网部署的前置条件。
*   **数学运算能力**：PR #716 表明项目正从单纯的文本/代码处理向具备数据分析能力的通用 Agent 演进。

## 7. 用户反馈摘要
*   **痛点**：用户 `balehu86` 反馈了极度的挫败感，即便在配置中开启了全量的日志记录，最核心的 heartbeat 流程依然“静默”，导致无法排查故障。这暗示当前的日志系统可能存在分类缺失或级别设置不当的问题。
*   **场景**：用户正在尝试对接具有复杂 URL 路径的 LLM 提供商（PR #728），且需要在受限网络环境下运行（PR #755）。

## 8. 待处理积压
*   **长期挂起**：虽然暂无超长期未合并的 PR，但目前有 **5 个** PR 处于 `OPEN` 状态且未合并（#757, #716, #687, #728, #755）。建议维护者尽快审核，特别是包含修复性质的 #757 和 #728，以防止 trunk 分支功能缺失时间过长。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目每日动态日报 | 2026-04-02

## 📊 今日速览
IronClaw 项目今日保持极高的开发活跃度，过去 24 小时内共有 **50 条 PR** 和 **37 条 Issues** 发生更新，显示出强劲的开发迭代势头。项目正通过 CI/CD 流水线快速合并大量 Staging 分支的代码（已合并 24 条 PR），主要涉及代码质量重构、安全补丁及文档完善。尽管代码提交频繁，但**新版本发布数为 0**，表明项目正处于密集开发或功能冻结期，尚未准备好向用户推送新版本。社区方面，用户重点关注 CLI 模式的安全性、UI 错误提示的优化以及易用性问题，同时自动化 CI 机器人标记了数个高危漏洞。

---

## 🚀 版本发布
**状态**：无新版本发布。
*注：尽管合并了大量 PR，但目前尚未触发新的 Release 流程。建议关注后续的版本标签更新。*

---

## 🛠️ 项目进展
今日合并的 PR 主要集中在 **基础设施加固** 和 **内部重构**，而非面向终端用户的新功能：

*   **[CLOSED] PR #1879 - promote staging (2026-04-01)**
    *   **内容**：合并了 Staging 分支至主分支，包含了一系列针对代码库的通用清理工作。
    *   **影响**：这是常规的代码推进，但在合并过程中，CI Review 标记了数个由此次引入或暴露的 **[HIGH] 风险问题**（见 Bug 章节），需要在后续版本中引起重视。
    *   **链接**：[nearai/ironclaw#1879](https://github.com/nearai/ironclaw/pull/1879)

*   **[OPEN] PR #1869 - fix(cli): suppress non-CLI listeners under --cli-only (#1840)**
    *   **内容**：修复了 `--cli-only` 模式下仍会启动 Webhook 服务器、WASM 通道端点及网关等网络监听器的严重行为偏差。
    *   **意义**：增强了 CLI 模式的隔离性和安全性，防止用户在使用纯 CLI 模式时意外开放网络端口。
    *   **链接**：[nearai/ironclaw#1869](https://github.com/nearai/ironclaw/pull/1869)

---

## 🔥 社区热点
今日社区讨论集中在 **易用性** 和 **用户体验** 上，反映出非技术用户在使用门槛上的痛点：

*   **[#1852 should make it easy to use](https://github.com/nearai/ironclaw/issues/1852)** (评论: 4)
    *   **摘要**：用户 LeiYanhua 指出 IronClaw 虽然启动快速且安全，但对非 IT 技术人员配置困难。目前的配置流程对普通用户太复杂，限制了用户群体的扩大。
    *   **诉求**：**降低配置门槛**，使 IronClaw 对普通用户更友好。

*   **[#1876 enhancement: all the ui error should display this in a nicer way](https://github.com/nearai/ironclaw/issues/1876)** (评论: 2)
    *   **摘要**：用户 Kampouse 建议 UI 中的错误提示应该更美观、更人性化，并附带了截图展示当前粗糙的错误显示界面。
    *   **诉求**：**改善 UI/UX**，特别是错误处理和显示机制。

*   **[#1877 enhancement: buttons on should be on the main interface](https://github.com/nearai/ironclaw/issues/1877)**
    *   **摘要**：用户建议将 Dashboard 和聊天界面之间的设置按钮整合，避免用户来回切换。
    *   **诉求**：**界面交互优化**，提升操作效率。

---

## 🐛 Bug 与稳定性
今日通过 Staging CI Review 自动检测到了数个 **高危** Bug，同时修复了一个 CLI 安全问题：

*   **[HIGH] #1882 - MCP server name validation lacks shell metacharacter protection**
    *   **风险**：Shell 元字符注入。
    *   **详情**：MCP 服务器名称的验证机制未能过滤 shell 元字符，可能导致命令注入风险。
    *   **状态**：**Open** (由 CI 自动发现) | **链接**：[nearai/ironclaw#1882](https://github.com/nearai/ironclaw/issues/1882)

*   **[HIGH] #1880 - Blocking filesystem operation in async context**
    *   **风险**：性能阻塞/稳定性。
    *   **详情**：`cleanup_job()` 在异步上下文中使用了同步的 `std::fs::remove_file()`，可能导致阻塞事件循环，影响服务响应能力。
    *   **状态**：**Open** | **链接**：[nearai/ironclaw#1880](https://github.com/nearai/ironclaw/issues/1880)

*   **[HIGH] #1881 - Module signature breaking change inadequately tracked**
    *   **风险**：兼容性破坏。
    *   **详情**：多个配置 `resolve()` 函数的签名变更未被适当追踪，可能导致编译时错误或运行时不匹配。
    *   **状态**：**Open** | **链接**：[nearai/ironclaw#1881](https://github.com/nearai/ironclaw/issues/1881)

*   **[FIXED] #1840 - --cli-only still starts webhook server**
    *   **详情**：`--cli-only` 模式未能完全抑制网络服务的启动，存在安全隐患且违背文档约定。
    *   **状态**：**已修复** (PR #1869 已提交，待合并) | **链接**：[nearai/ironclaw#1840](https://github.com/nearai/ironclaw/issues/1840)

*   **[#1874 Bot command extremly slow](https://github.com/nearai/ironclaw/issues/1874)**
    *   **详情**：用户反馈斜杠命令的执行速度极慢，怀疑是解析流程或 Pipeline 处理逻辑存在问题。
    *   **状态**：**Open** | **链接**：[nearai/ironclaw#1874](https://github.com/nearai/ironclaw/issues/1874)

---

## 💡 功能请求与路线图信号
今日出现了一些重大的架构提案，可能会影响未来的路线图：

*   **[#1894 Unified Workspace VFS: merge filesystem, DB, and remote storage](https://github.com/nearai/ironclaw/issues/1894)**
    *   **提案**：统一本地文件系统、数据库和远程存储，将其合并到基于挂载的抽象层（VFS）之后。
    *   **影响**：解决当前本地开发模式和托管云模式下 `file_write` 和 `memory_write` 行为不一致的混乱问题。这是一个重大的架构变更请求。

*   **[#1607 feat: first-class workspace entities](https://github.com/nearai/ironclaw/issues/1607)**
    *   **提案**：引入“一等公民”的工作区实体，支持成员资格和跨工作区共享。
    *   **影响**：从当前隐式的、基于 `user_id` 的数据隔离模式，转向显式的多租户工作区管理。

*   **[#1771 feat(auth): direct OAuth/social login](https://github.com/nearai/ironclaw/issues/1771)**
    *   **提案**：支持直接通过 Google, Apple, GitHub 等社交账户登录，无需配置反向代理 SSO。
    *   **影响**：显著降低个人用户或小团队的部署门槛。

---

## 🗣️ 用户反馈摘要
*   **易用性焦虑**：非技术用户感到配置困难（Issue #1852），担心项目过于极客化，难以普及。
*   **UI/UX 期待**：用户对当前的错误展示界面（Issue #1876）和设置跳转逻辑（Issue #1877）表示不满，渴望更现代化的 Web 交互体验。
*   **性能抱怨**：有用户指出 Bot 命令响应缓慢（Issue #1874），这可能直接影响使用体验。

---

## ⏳ 待处理积压
*   **[E2E 测试覆盖缺失]** #1779 及其一系列子任务（#1782, #1783, #1784 等）标记了项目中缺失的端到端测试覆盖。虽然这些 Issue 已经创建，但目前 **评论数和更新活动较少**，可能需要团队安排专门的时间来补充测试用例。
*   **[#1337 Tool schema discovery: strengthen on-demand discovery for MCP and WASM tools](https://github.com/nearai/ironclaw/issues/1337)**：3 月中旬提出的关于改进 MCP/WASM 工具发现的增强请求，今日虽有更新但尚未解决，涉及核心工具生态体验。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 (2026-04-02)

> **摘要**：今日项目活跃度极高，社区共提交了 19 个 Issue 和 50 个 PR，显示开发与用户反馈均处于高峰期。开发重心集中在**修复网关稳定性**（OpenClaw 频繁重启）、**交互体验优化**（定时任务防丢失、快捷键配置）以及**国际化**问题。部分严重 Bug（如阿里云模型导致网关重启、Model Key 泄漏）已引发社区高度关注，但已有对应 PR 正在修复中。

---

## 1. 今日速览
- **开发活跃度**：今日 PR 更新量达到 50 条，其中 27 条已合并或关闭，项目推进速度极快，主要集中在 UX 优化和稳定性修复。
- **社区反馈**：新增 Issues 19 条，用户反馈集中在网关频繁重启、配置静默丢失以及部分模型的兼容性问题。
- **稳定性警报**：关于 `qwen-portal-auth` 插件配置循环写入导致网关频繁重启的 Issue (#1243) 以及 Agent 泄漏 Model Key 的安全问题 (#1202) 是今日最严重的隐患，需优先处理。

---

## 2. 版本发布
无

---

## 3. 项目进展
今日合并/关闭了多个重要的 Pull Requests，显著提升了系统的健壮性和用户体验：

*   **代码规范与工程化**：[PR #689] 合并，引入了 Prettier、ESLint v9 flat config、Husky 及 commitlint，建立了代码质量工具链，为长期维护奠定基础。
*   **性能优化**：[PR #533] 合并，通过批量查询 `getConfig` 和修复 N+1 循环问题，优化了数据库查询性能，减少了会话启动时的 RTT。
*   **稳定性修复**：
    *   [PR #512] 合并，修复了非 Anthropic 模型（如智谱 GLM5）导致会话永久卡在“运行中”状态的问题。
    *   [PR #1244] 合并，新增了可配置的发送消息快捷键（Enter/Shift+Enter 等），解决了输入习惯冲突。

---

## 4. 社区热点
今日讨论度最高的问题集中在核心功能的稳定性与易用性：

*   **[#1195 自建 skill 安装后不显示](https://github.com/netease-youdao/LobsterAI/issues/1195)**
    *   **诉求**：用户反馈自建技能被安装到 OpenClaw 目录后，重启 LobsterAI 面板无显示。
    *   **热度**：必现 Bug，严重影响工作流自定义功能。
*   **[#1187 增加上下文窗口设置](https://github.com/netease-youdao/LobsterAI/issues/1187)**
    *   **诉求**：用户在使用 DeepSeek 模型时遇到 Context overflow，建议在设置中增加上下文窗口和输出 Token 限制设置。
    *   **热度**：👍 1，反映出用户对高级模型配置的需求。
*   **[#1256 定时任务支持自然语言](https://github.com/netease-youdao/LobsterAI/pull/1256)**
    *   **进展**：PR 提出新增“自然语言”输入方式来设置定时任务，通过 LLM 转换 cron 表达式，降低用户配置门槛。

---

## 5. Bug 与稳定性
今日报告的 Bug 中，多个涉及系统核心稳定性，按严重程度排序：

*   **🔴 严重 [Bug] `qwen-portal-auth` 插件配置循环写入导致网关频繁重启 ([#1243](https://github.com/netease-youdao/LobsterAI/issues/1243))**
    *   **现象**：网关每 5-20 分钟自动重启一次，伴随“AI 引擎正在启动网关...”弹窗。
    *   **状态**：已有修复 PR [#1248](https://github.com/netease-youdao/LobsterAI/pull/1248) 待合并。
*   **🔴 严重 [Bug] Agent 泄漏 Model Key 信息 ([#1202](https://github.com/netease-youdao/LobsterAI/issues/1202))**
    *   **现象**：向 Agent 询问配置时，会暴露 Key 的环境变量路径或文件位置，存在安全风险。
    *   **状态**：待修复。
*   **🟠 中等 [Bug] 现有大模型受限后无法切换，导致整体瘫痪 ([#1240](https://github.com/netease-youdao/LobsterAI/issues/1240))**
    *   **现象**：当一个 API Key 受限后，切换到其他 Agent 或模型依然提示受限，甚至导致无法启动程序。
    *   **状态**：已有修复 PR [#1247](https://github.com/netease-youdao/LobsterAI/pull/1247)。
*   **🟠 中等 [Bug] 导入技能 midscence 执行报错 ([#148](https://github.com/netease-youdao/LobsterAI/issues/148))**
    *   **现象**：Bash 命令执行报错 `Error: Failed to take screenshot`。
*   **🟡 体验 [Bug] CoworkPromptInput 硬编码中文标签 ([#1223](https://github.com/netease-youdao/LobsterAI/issues/1223))**
    *   **现象**：英文环境下提示词混入中文“输入文件”。
    *   **状态**：已在相关 PR 中修复。

---

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以窥见未来的功能走向：

*   **定时任务增强**：用户不仅希望能自然语言配置，还强烈要求增加**“未保存修改确认”** ([#1245](https://github.com/netease-youdao/LobsterAI/issues/1245))，该功能已有 PR ([#1258](https://github.com/netease-youdao/LobsterAI/pull/1258), [#1246](https://github.com/netease-youdao/LobsterAI/pull/1246)) 正在处理。
*   **数据导出**：请求增加**“导出为 Markdown”** 功能 ([#1213](https://github.com/netease-youdao/LobsterAI/issues/1213))，目前仅支持图片导出。
*   **UI/UX 改进**：
    *   侧栏收缩后保留图标栏导航 ([#1253](https://github.com/netease-youdao/LobsterAI/pull/1253))。
    *   设置关闭时增加“未保存确认” ([#1237](https://github.com/netease-youdao/LobsterAI/issues/1237))。

---

## 7. 用户反馈摘要
*   **痛点**：多个用户反馈在 Win10 环境下网关**频繁自动重启**（#1243, #1217），导致正常工作中断，且日志定位困难。
*   **交互困惑**：**“Settings”** 和 **“定时任务”** 表单在未保存点击取消/返回时，数据会**静默丢失**，用户认为这是极差的体验（#1245, #1237）。
*   **文件管理**：用户抱怨切换工作目录会强制建立 `Agents.md` 等系统文件，污染目录结构（#1196）。

---

## 8. 待处理积压
*   **[#1198 网关重启进度条消失](https://github.com/netease-youdao/LobsterAI/issues/1198)**：重启过程中 UI 反馈不明确，用户不知道是卡死还是加载中。
*   **[#1200 NIM 超大群消息硬编码错误](https://github.com/netease-youdao/LobsterAI/issues/1200)**：技术债问题，SDK 枚举定义不匹配导致群名显示错误。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 - 2026-04-02

## 📊 今日速览
过去 24 小时内，Moltis 项目保持了极高的开发活跃度，尽管没有发布新版本，但代码库功能扩充显著。项目在**多渠道集成**（特别是 Matrix 和 MS Teams）与**交互能力**（Firecrawl 爬虫、可视化浏览器）方面取得了重大突破。同时，社区报告了 2 个影响功能的 Bug（Web 弹窗与 WhatsApp 消息解析），需关注稳定性。贡献者 `penso` 是今日主要的代码贡献者。

## 🚀 版本发布
*今日无新版本发布。*

## 🏗️ 项目进展
今日虽无 PR 合并，但大量高质量 PR 处于待合并（OPEN）状态，显示出强大的功能迭代潜力：

1.  **渠道生态扩张**
    *   **Matrix 集成 (#500)**: 引入了基于 `matrix-sdk` 官方库的全新 `moltis-matrix` crate，支持 DM、群组、流式回复及打字指示器。
    *   **MS Teams 深度集成 (#529)**: 实现了全面的 Teams 通道支持，包含 JWT 验证、错误分类重试机制及 Webhook 超时处理。

2.  **AI 能力增强**
    *   **Firecrawl 集成 (#541)**: 新增 Firecrawl 工具，提供强大的网页抓取和搜索能力，支持受保护页面的 Markdown 提取。
    *   **Langfuse 可观测性 (#535)**: 增加了基于 Langfuse 的追踪和调试关联功能，有助于优化 Agent 表现。

3.  **用户体验 (UX) 改进**
    *   **模型列表优化 (#540)**: 通过折叠、智能排序（推荐->新版->版本号）显著改善了模型选择界面的混乱状况。
    *   **浏览器可视化 (#531)**: 增加了基于 CDP 的浏览器查看 UI，允许用户实时交互和控制 Agent 的浏览器会话。

## 🔥 社区热点
*   **[#536 Bug: Channel connect modals don't open](https://github.com/moltis-org/moltis/issues/536)**
    *   **热度**: 📈 新提交，涉及核心 UI 交互。
    *   **分析**: 用户反馈在 Web 端设置中无法打开 Telegram/Discord 等渠道的连接弹窗。根因定位为 Preact signals 在嵌套渲染中的响应性问题。这直接影响用户配置 Bot 的流程，属于高优先级阻断性问题。

## 🐛 Bug 与稳定性
1.  **[HIGH] Web 渠道连接弹窗失效 (#536)**
    *   **描述**: 设置页面的连接按钮点击无反应。
    *   **根因**: Preact signal 在 `Modal` 组件的嵌套渲染中未能触发重绘。
    *   **状态**: 🔴 待修复

2.  **[MEDIUM] WhatsApp 消息解析错误 (#534)**
    *   **描述**: WhatsApp 接收到的消息被识别为 "unhandled message type"，protobuf 字段在解密后为空。
    *   **影响**: 导致 WhatsApp 通道无法正常处理入站消息，仅能回复默认错误。
    *   **状态**: 🔴 待修复

## 💡 功能请求与路线图信号
*   **Discord 会话重命名**: Issue #523 (已关闭) 提出了重命名 Discord 会话/聊天以增强上下文管理的需求。尽管 Issue 已关闭，但可能已列入内部计划或通过其他方式解决。
*   **Ngrok 隧道支持**: PR #530 (已关闭) 曾提议添加内建的 ngrok 隧道支持以便于公网暴露，虽然目前关闭，但反映了用户对于本地开发调试便捷性的需求。

## 🗣️ 用户反馈摘要
*   **连接配置痛点**: Issue #536 表明，Web UI 的稳定性是用户配置多渠道 Bot 时的主要瓶颈。
*   **消息解析可靠性**: Issue #534 反馈了 WhatsApp 集成在特定环境（Termux/Android）下的兼容性问题，用户对私有协议适配的稳定性有较高期待。

## 📝 待处理积压
*   **PR Review 压力**: 目前有 6 个功能型 PR 处于待合并状态（#541, #531, #540, #535, #529, #500），建议维护者安排时间进行 Code Review 以确保功能及时落地。
*   **长期开放 Issues**: 暂无发现长期未响应且积压严重的活跃 Issue，主要关注点集中在今日新报 Bug 上。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-02)

## 📊 1. 今日速览
CoPaw 项目今日（2026-04-02）继续保持极高的活跃度，24小时内新增 **50 条 Issues** 和 **50 条 PRs**，社区参与热情高涨。在版本方面，项目发布了最新的 **v1.0.0.post3** 补丁版本，重点修复了本地模型下载和 UI 样式问题。技术讨论热度集中在**多 Agent 协作**、**本地模型稳定性**（CoPaw Local/Ollama）以及**技能管理系统**的改进上。虽然 Bug 报告较多，但核心维护团队响应迅速，关键修复（如 GPU 调用、模型下载）已合并进主干，项目整体处于快速迭代与优化阶段。

## 🚀 2. 版本发布
**版本号：v1.0.0.post3**
- **发布摘要**：这是一个针对 v1.0.0 系列的补丁版本，主要包含版本号修正、UI 样式优化（技能池与暗色模式）及 CI 流程改进。
- **主要变更**：
    - **Style**: 优化了技能与技能池的 UI 展示及暗色模式适配 ([PR #2714](https://github.com/agentscope-ai/CoPaw/pull/2714))。
    - **CI**: 增加了触发 OSS 上传的选项 ([PR by @rayrayr](https://github.com/agentscope-ai/CoPaw/pull/2738))。
- **注意事项**：鉴于紧随其后有大量关于本地模型崩溃的修复 PR (如 #2735)，建议关注后续更新或相关 Patch。

## 🔨 3. 项目进展
今日合并与关闭的 PR 显示项目在**稳定性**和**用户体验**上取得了实质性进展：

- **本地模型关键修复 (PR #2735)**: [Closed] 这是一个重量级 PR，修复了 CoPaw Local 默认不使用 GPU 的问题、修复了模型下载错误、优化了探测图片功能，并更新了本地提供商文档。这直接解决了用户反馈的 RTX 3080 显存占用及下载报错问题。
- **钉钉 AI 卡片支持 (PR #2741)**: [Closed] 修复了当 Agent 使用工作空间时，钉钉 AI 卡片失效的问题，重构了共享核心逻辑。
- **Windows 兼容性 (PR #2760)**: [Closed] 修复了 Windows 守护进程下企业微信 线程崩溃的问题。
- **Dark Mode (PR #2678)**: [Closed] 在系统设置中增加了暗色模式切换开关，改善了视觉体验。

## 🔥 4. 社区热点
**1. [Feature] Self-improving AI agent engine (PR #2773)**
- **链接**: [agentscope-ai/CoPaw#2773](https://github.com/agentscope-ai/CoPaw/pull/2773)
- **热度**: 🌟🌟🌟
- **分析**: 这是一个备受瞩目的功能请求，旨在为 CoPaw 增加“自我进化”技能。该功能能自动捕获错误、检测模式并利用 AI 进行根本原因分析。这表明社区希望 CoPaw 不仅能执行任务，还能具备自我修复和优化的能力。

**2. [Bug] 多 Agent 协作中 `/approve` 失效 (Issue #2459)**
- **链接**: [agentscope-ai/CoPaw#2459](https://github.com/agentscope-ai/CoPaw/issues/2459)
- **热度**: 👀 250+ Views (估算), 评论活跃
- **分析**: 在多 Agent 场景下，子 Agent 触发的工具守卫无法通过父 Agent 的 `/approve` 命令来批准执行。这是多 Agent 协同工作流中的一个关键阻碍，用户迫切希望能通过命令行或交互方式解决跨 Agent 的权限验证问题。

**3. [Enhancement] 将 /Approve 命令改为 UI 按钮 (Issue #2720)**
- **链接**: [agentscope-ai/CoPaw#2720](https://github.com/agentscope-ai/CoPaw/issues/2720)
- **热度**: 👍 2
- **分析**: 用户反馈输入文本命令体验不直观，建议改为界面按钮。这与 Issue #2459 相关，反映了用户对 Agent 权限管理“图形化”的强烈需求。

## 🐛 5. Bug 与稳定性
今日报告的 Bug 主要集中在本地模型集成与系统兼容性上，严重程度排列如下：

- **[High] 接入应用生成 PPT 导致崩溃 (Issue #2642)**
    - **描述**: 机器人执行生成 PPT 文件任务后报错 `400 InvalidParameter`，导致会话卡死无法删除。
    - **状态**: 🔴 OPEN
    - **影响**: 影响钉钉、QQ、微信等集成通道的核心功能。

- **[High] 重命名 Skill 导致脚本丢失 (Issue #2770)**
    - **描述**: 在控制台重命名技能后，技能内的脚本内容被清空，仅保留 `SKILL.md`。
    - **状态**: 🔴 OPEN (有修复 PR #2775)
    - **相关 PR**: [fix/skill-rename-lost #2775](https://github.com/agentscope-ai/CoPaw/pull/2775)

- **[Medium] 本地模型 调用中断 (Issue #2739)**
    - **描述**: 在 macOS (M3 Max) 上运行模型时频繁中断，报 OpenAI API 解析错误。
    - **状态**: 🔴 OPEN

- **[Medium] Grammar 解析错误 (Issue #2732)**
    - **描述**: 基于 `llama.cpp` (b8467+) 部署的 Qwen3.5 模型调用工具时触发 Grammar 解析失败。
    - **状态**: 🔴 OPEN

## 💡 6. 功能请求与路线图信号
从今日的 Issues 中可以捕捉到以下潜在的产品方向：

- **WebUI 安全增强 (Issue #2766)**: 用户请求 WebUI 增加登录验证，目前的开放模式缺乏安全感。
- **SiliconFlow 模型适配 (Issue #812)**: 请求支持硅基流动平台，虽已确认 API 有效，但模型 ID 识别存在问题。
- **技能管理“列表模式” (Issue #2747)**: 用户吐槽卡片模式在调试和查找技能时效率低，请求增加列表视图。
- **多 Agent 会议系统 (Issue #2774)**: 提议实现基于 SACP 的多 Agent 会议协作系统，包含角色发言和四文档输出。

## 🗣️ 7. 用户反馈摘要
- **痛点**:
    - **本地模型体验割裂**: 一方面是 GPU 调用问题（Issue #2768），另一方面是显存占用信息不透明（Issue #2776，RTX 3080 跑 4B 模型占用 9.2GB）。
    - **升级后的混乱**: 升级 v1.0.0 后，技能目录结构变化导致用户不知所措，旧的技能目录残留，更新路径不清晰（Issue #2761）。
- **赞誉**:
    - v1.0.0 多 Agent 支持后的可用性得到了认可（Issue #2766 评论）。
    - 本地模型 在 10G 显存上运行“非常流畅”（Issue #2776）。

## ⏳ 8. 待处理积压
以下 Issue 长期未关闭或在最新版本中回归，需维护者重点关注：

- **Issue #2291 (Help Wanted)**: [OPEN] 社区贡献任务列表。虽然发布于 3 月底，但仍有大量未认领任务，可作为新贡献者的切入点。
- **Issue #331 (Complex Task Interruption)**: [CLOSED] 处理复杂问题时中断，未完成即返回。虽然状态为关闭，但评论显示类似问题（如定时任务中断）在 v1.0 中仍有出现。
- **Issue #1536 (OAuth Login)**: [OPEN] 关于接入模型使用 OAuth 登录 Codex 的问题，讨论持续很久但尚无明确解决方案。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目每日动态日报 | 2026-04-02

> **基于 GitHub 数据分析**
> **分析对象**: EasyClaw / RivonClaw (github.com/gaoyangz77/easyclaw)
> **数据日期**: 2026-04-02

---

### 1. 今日速览
EasyClaw 项目今日处于**维护迭代期**。过去 24 小时内项目活跃度较低，社区沟通渠道（Issues）较为沉寂，未产生新的工单或讨论；但核心代码库与交付物保持更新，主要动作集中在国际化能力的扩展与新版本的修补上。项目健康度良好，维护者正在积极推进多语言支持。

### 2. 版本发布
**[v1.7.8] RivonClaw v1.7.8 已发布**
*   **类型**: 补丁/兼容性更新
*   **核心亮点**:
    *   **macOS 兼容性修复**: 针对macOS用户遇到的 **"'RivonClaw' is damaged and can't be opened** 错误提供了官方解决方案。该问题源于 macOS Gatekeeper 安全机制拦截了未签名的应用，并非文件损坏。新版本文档中补充了通过终端解除拦截的标准操作步骤，降低了新用户的上手门槛。
*   **破坏性变更**: 无。
*   **迁移注意**: macOS 用户下载后若遇上述拦截，需按新指引执行终端命令以授权运行。

### 3. 项目进展
*   **[OPEN] feat(i18n): add 5 new languages** ([#21](https://github.com/gaoyangz77/rivonclaw/pull/21))
    *   **状态**: 待合并
    *   **贡献者**: chinayin
    *   **进展详情**: 社区贡献者提交了大规模的国际化更新，新增了 **繁体中文、日语、韩语、越南语 和 印地语** 共 5 种语言支持。
    *   **推进价值**: 此次更新不仅增加了翻译文件，还确保了 **1333 个翻译键值** 完全覆盖英文基准。这意味着项目距离成为真正的国际化应用更近一步，将显著提升非英语用户的使用体验。

### 4. 社区热点
*   **今日热点 PR**: [PR #21 - feat(i18n)](https://github.com/gaoyangz77/rivonclaw/pull/21)
    *   **热度分析**: 尽管今日无新增评论，但该 PR 目前处于待合并状态，且涉及面广（涉及核心面板 `apps/panel` 的架构调整），是当前版本最关键的功能待办事项。
    *   **诉求分析**: 反映了社区对项目国际化（i18n）的强烈需求，特别是亚洲语言区的用户希望获得原生语言支持。

### 5. Bug 与稳定性
*   **已识别问题**: macOS Gatekeeper 签名警告
    *   **严重程度**: 中等（影响首次安装体验，不影响功能）
    *   **状态**: 已在 v1.7.8 版本说明中提供解决方案（Workaround）。
    *   **分析**: 目前属于文档级修复，尚未从根本上解决代码签名问题。建议后续版本考虑引入代码签名证书以彻底解决此拦路虎。

### 6. 功能请求与路线图信号
*   **潜在路线图**: 国际化 (i18n) 体系完善
    *   基于 PR #21 的提交，项目似乎正在准备一次以“多语言支持”为核心特性的版本迭代。
    *   **预测**: 一旦 PR #21 合并，官方可能会很快发布包含 7 种语言（含原有中英文）的正式 v1.7.9 或 v1.8.0 版本。

### 7. 用户反馈摘要
*   **痛点**: macOS 用户反馈应用无法打开，产生心理恐慌（担心文件损坏）。v1.7.8 对此做出了快速响应，体现了维护者对用户体验的重视。
*   **场景**: 用户主要关注安装部署的流畅性。目前的反馈主要集中在安装阶段被系统拦截，而非运行期崩溃。

### 8. 待处理积压
*   **待合并 PR**: [#21](https://github.com/gaoyangz77/rivonclaw/pull/21)
    *   **积压时长**: 自 3月18日 开放，至今已约两周。
    *   **建议**: 建议维护者尽快进行 Code Review 并合并。该 PR 包含大量翻译文本，搁置越久，产生冲突或基准文本变动的风险越大。

---
*分析师注: 尽管今日 Issues 零增长，但 v1.7.8 的发布和 PR #21 的存在表明项目正处于“静默发育”阶段，专注于底层体验优化和功能扩充。*

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*