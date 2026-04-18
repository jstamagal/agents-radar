# OpenClaw 生态日报 2026-04-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-18 00:14 UTC

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

# OpenClaw 项目动态日报 (2026-04-18)

## 📊 今日速览
今日 OpenClaw 项目呈现**极高活跃度**，过去 24 小时内产生了 1000 条更新（Issues 与 PR 各 500 条），显示出社区对这一开源 AI 智能体框架的强烈关注。项目核心围绕**稳定性修复**（如 Docker 环境兼容、MCP 服务器连接）与**生态安全建设**（RFC 讨论与防御性增强）展开。尽管没有新版本发布，但大量针对 2026.4.14 版本回归问题的修复 PR 正在合并中，维护者正积极应对近期的技术债务。

---

## 🔖 版本发布
*当前无新版本发布。*

> 💡 **提示**：尽管今日无 Release，鉴于近期多个 PR 标注为 `fix(regression)` 且涉及 v2026.4.14 的严重 UI 和功能问题，预计 **v2026.4.15 或 v2026.4.16** 可能会在近期紧急发布以修复这些回归 Bug。

---

## 🚀 项目进展 (基于 PR 状态)
今日合并与关闭的 PR 虽然数量不多（数据概览显示 PR 关闭率较低，但部分关键修复已就绪），但解决了若干关键痛点：

*   **[CRITICAL] 安全性与可靠性加固** (#68292)
    *   **进展**：[待合并/Merged]
    *   **内容**：修复了 MCP 所有权欺骗、轮询双重传递、Cron 信任升级及故障转移分类缺失等 5 个关键漏洞。这对多智能体系统的安全性至关重要。
    *   **链接**：[openclaw/openclaw#68292](https://github.com/openclaw/openclaw/pull/68292)

*   **[FEATURE] 新增 Google Gemini TTS 提供商** (#67515)
    *   **进展**：[已关闭/完成]
    *   **内容**：集成了 Gemini API 的 TTS 功能，支持 24kHz PCM 音频，增强了语音合成选项。
    *   **链接**：[openclaw/openclaw#67515](https://github.com/openclaw/openclaw/pull/67515)

*   **[FEATURE] 每个代理独立的 TTS/STT 配置** (#68331)
    *   **进展**：[Open]
    *   **内容**：允许为每个 Agent 单独配置语音和语言设置，解决了多 Agent 场景下无法个性化语音的问题。
    *   **链接**：[openclaw/openclaw#68331](https://github.com/openclaw/openclaw/pull/68331)

*   **[FIX] 修复 Homebrew Node.js 环境下的崩溃** (#64722)
    *   **进展**：[已关闭]
    *   **内容**：针对 `node:sqlite` 模块缺失的问题添加了 JSON 回退机制，修复了 Gateway 频繁崩溃的问题。
    *   **链接**：[openclaw/openclaw#64722](https://github.com/openclaw/openclaw/pull/64722)

---

## 🔥 社区热点 (高关注度 Issues)
今日讨论的热点集中在**生态信任机制**、**Docker 部署痛点**以及 **Windows/macOS 的兼容性回归**。

*   **🔥 RFC: Agent 身份认证与信任验证** (#49971) - *93 评论*
    *   **摘要**：MolTrust 提出的 RFC，旨在建立原生的 Agent 身份和信任验证层。鉴于目前存在大量恶意 Skill 的问题，该提案被认为是解决安全隐患的关键。
    *   **链接**：[openclaw/openclaw#49971](https://github.com/openclaw/openclaw/issues/49971)

*   **🐛 [Bug] Docker 容器内 Skill 安装失败** (#14593) - *24 评论*
    *   **摘要**：在官方 Docker 镜像中运行 `openclaw onboard` 并选择 `brew` 类型的 Skill（如 openai-whisper）时会报错 `brew not installed`。这是用户在使用容器化部署时的主要阻碍。
    *   **链接**：[openclaw/openclaw#14593](https://github.com/openclaw/openclaw/issues/14593)

*   **🐛 [Bug] Volcengine Coding Plan 模型识别失败** (#64799) - *23 评论*
    *   **摘要**：macOS 用户在重装配置后，文档中的模型引用 `volcengine-plan/ark-code-latest` 被拒绝。显示了模型配置管理的脆弱性。
    *   **链接**：[openclaw/openclaw#64799](https://github.com/openclaw/openclaw/issues/64799)

*   **🐛 [Bug] OAuth 令牌刷新竞态条件** (#26322) - *21 评论*
    *   **摘要**：多 Agent 共享 OAuth 配置时，并发刷新令牌导致后续请求失败。该问题已被标记为关闭，但讨论热度依然很高，说明影响面广。
    *   **链接**：[openclaw/openclaw#26322](https://github.com/openclaw/openclaw/issues/26322)

---

## 🐛 Bug 与稳定性 (按严重程度排序)
**严重**：
1.  **[#67035] Windows UI 回归** (2026.4.14)：输入文本被吞，流式回复不可见，仅刷新后可见，输入指示器闪烁。这是严重的体验倒退。
2.  **[#62505] Coding Agent 无法完成任务** (2026.4.2+)：核心的编程代理功能完全失效，仅发出模糊的状态更新。
3.  **[#32892] 模型认证登录失败** (2026.3.2)：`openclaw models auth login` 无法找到提供商插件，导致基础认证流程阻塞。

**中等**：
4.  **[#36399] 多步骤工具调用挂起**：使用 Google Gemini CLI 时多步操作卡死 60 秒，而使用自托管代理则快 6 倍。
5.  **[#67295] Agent 配置写入错误的 BaseUrl**：破坏了 OpenRouter, Arcee 等多个提供商的连接。
6.  **[#67775] 无法连接局域网 MCP 服务器**：MCP 协议在 LAN 环境下的连接性问题。
7.  **[#65603] Azure Foundry GPT 模型架构拒绝**：升级到 2026.4.11 后无法使用推理模型和工具调用。

**状态**：部分 Issues 已有对应的 Fix PR（如 #67838 尝试修复部分稳定性问题），但核心的 UI 回归和 Coding Agent 失效问题尚未显示明确的合并 PR。

---

## 💡 功能请求与路线图信号
1.  **RFC: 行为信誉体系** (#55342)：提议在身份验证 (#49971) 之外，增加基于行为的 Skill 信誉层，以防御慢速信任积累攻击。
2.  **多用户权限管理 (RBAC)** (#8081)：高票请求（👍 28）。目前所有用户共享敏感配置，无法实现多租户隔离。这是一个长期被高频请求的企业级功能。
3.  **MCP Mock 提供商** (#67700)：请求内置 Mock Provider 以支持回归测试，这表明项目正在寻求提高工程质量和 CI 稳定性。
4.  **超时自动重试** (#32513)：请求 Agent 运行超时后的自动重试机制，以提高鲁棒性。

---

## 😤 用户反馈摘要
*   **痛点**：**Windows 用户体验极差**，v2026.4.14 更新后 UI 出现严重回归，基本功能不可用；**Docker 部署不够傻瓜化**，缺少 brew 环境导致 Skill 安装失败。
*   **信任危机**：用户对 Skill 的安全性表示担忧（恶意 Skill、Prompt 注入），强烈支持引入身份验证（DID/VC）和信誉系统。
*   **配置复杂性**：Agent 配置（如 baseUrl, model overrides）经常出错，且错误提示不够直观（如 `Unknown model` 或 `trim()` 错误）。

---

## 🗄️ 待处理积压
*   **#36229 (Stale)**：压缩损坏思考块签名导致会话不可恢复。这是一个严重的数据丢失风险 Bug，长期未解决。
*   **#30257 (Stale)**：`boot-md` hook 错过启动事件。插件开发者长期面临的 Hook 机制问题。
*   **#32296**：Agent 回复错位（回复上一条而非当前消息）。上下文管理的老问题，影响交互准确性。

---

**分析师备注**：尽管社区非常活跃，但今日数据显示 **OpenClaw 正在经历一段不稳定期**，大量关于 "Regression" 的报告表明最近的版本发布流程可能需要加强质量控制。建议维护者优先处理 Windows UI 回归和 Coding Agent 失效问题，并尽快发布包含修复的补丁版本。

---

## 横向生态对比

# 2026-04-18 开源 AI 智能体生态横向对比分析报告

**分析师：** AI 智能体与个人助手领域技术专家
**数据基准：** 2026-04-18 各项目 GitHub 动态

---

## 1. 生态全景
2026年4月中旬的开源个人 AI 助手生态正处于**技术分化与架构重构**的关键深水区。头部项目（OpenClaw, Zeroclaw, NanoClaw）正面临从“单体功能”向“分布式系统”演进带来的稳定性阵痛，**回归 Bug** 与 **兼容性碎片化** 成为全生态的主要技术债务。**多模态**与**安全性**成为新的竞争高地，具体体现在 MCP 协议的深度集成、Agent 身份认证（RFC）的激烈讨论，以及对 Rust/Go/Node.js 等不同运行时的性能优化追求。整体来看，社区已不再满足于简单的“聊天机器人”，而是向**具有长期记忆、多模型编排和企业级安全**的智能体操作系统转型。

---

## 2. 各项目活跃度与健康度对比

| 项目 | 今日 Issue 活跃度 | 今日 PR 活跃度 | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **极高** (500) | **极高** (500) | 无 (v2026.4.15 预警) | 🟡 **过热/警惕**：活跃度爆表，但伴随大量 v2026.4.14 严重回归报告，处于“功能负债”偿还期。 |
| **Zeroclaw** | **高** (33) | **高** (50) | **v0.7.0-beta** (连续3个) | 🟢 **冲刺期**：正处于 Cargo workspace 架构重构的阵痛期，迭代速度快，关键 Bug 修复响应及时。 |
| **PicoClaw** | **高** (109) | **极高** (138) | Nightly (频繁) | 🟢 **迭代期**：Nightly 构建活跃，重点在于 Seahorse 记忆系统和底层包重构，但稳定性（Groq API）存疑。 |
| **NanoClaw** | **中** (12) | **高** (22) | 无 | 🟢 **稳建期**：迁移至 Bun 运行时成功，测试覆盖率高，专注于运维优化和 MCP 稳定性，技术债清理较彻底。 |
| **NullClaw** | **中** (24 总计) | **中** (PR 数量略少) | **v2026.4.17** | 🟢 **成熟期**：Zig 0.16 迁移完成，重点在于细节打磨和诊断逻辑修复，代码质量极高。 |
| **IronClaw** | **高** (Bug Bash 驱动) | **中** | 无 | 🟡 **修复期**：受 Bug Bash 活动影响，暴露大量 P1/P2 级 Engine V2 和 Web UI 缺陷，质量把控正在收紧。 |
| **LobsterAI** | **低** (含垃圾信息) | **高** (21 合并) | **2026.4.17** | 🟢 **扩展期**：基于 OpenClaw 内核，专注于企业 IM（NIM/Email）集成，但在安装兼容性上存在痛点。 |
| **Moltis** | **高** (30 总计) | **高** (PR 合并 68%) | **补丁 x2** | 🟢 **转型期**：正进行 Web UI TS 迁移，重点加强 Matrix OIDC 和代码索引能力，企业级特性显著。 |
| **CoPaw** | **极高** (50) | **极高** (45) | **v1.1.2** | 🟢 **爆发期**：发布 Mission Mode，多 Agent 编排架构讨论活跃，但面临 Windows 兼容性和配置迁移的挑战。 |
| **TinyClaw** | **无** | **无** | 无 | 🔵 **静默期**：仅昨日集成了 Novita AI，项目处于极低维护或功能稳定状态。 |
| **EasyClaw** | **极低** (1) | **无** | 无 | 🔵 **休眠期**：仅处理历史 Issue 归档，无明显开发活动。 |
| **ZeptoClaw** | **无** | **无** | 无 | ⚫ **停更/废弃**：过去24小时无活动。 |

---

## 3. OpenClaw 在生态中的定位

*   **核心参照与风向标**：OpenClaw 今日 1000 条更新的“恐怖”活跃度确立了其作为**生态事实标准**的地位。它是其他项目（如 LobsterAI）依赖的核心引擎，其 GitHub Issue 讨论的 RFC（如 Agent 身份认证 MolTrust）往往定义了整个行业的安全规范。
*   **技术路线**：OpenClaw 坚持全功能大而全的 **OS 级** 路线。相较于 Zeroclaw 的 Rust 极简高性能和 NanoClaw 的 Bun 容器化，OpenClaw 更强调**插件生态** 和**通用兼容性**，但这直接导致了今日报告中的“Windows UI 回归”和“Docker 兼容性”等大规模维护难题。
*   **社区规模**：其社区讨论的深度（安全信任体系、RFC）和广度（从 TTS 到 Coding Agent）远超其他项目，但目前的**稳定性危机**（v2026.4.14）正给竞争对手（如架构更轻量的 NullClaw）提供切入口。

---

## 4. 共同关注的技术方向

*   **MCP (Model Context Protocol) 深度集成与稳定性**
    *   **涉及项目**：OpenClaw (#14593), PicoClaw (#2579), NanoClaw (#1810), CoPaw (#3445)
    *   **诉求**：所有项目都在全力修复 MCP 工具加载失败、参数传递错误（PicoClaw/Zod兼容性）及配置热更新问题。MCP 已成为生态标准协议，但**多实例管理**和**连接稳定性**仍是全行业痛点。

*   **多模型路由与混合推理**
    *   **涉及项目**：PicoClaw (#1790), CoPaw (#3452), Zeroclaw (#5843), OpenClaw (#67515)
    *   **诉求**：用户不再满足于单一模型。社区迫切需要精细化的控制能力，包括：
        *   **推理配置**：将 `reasoning_enabled` 下沉到单模型配置（Zeroclaw）。
        *   **智能切换**：在本地/云端模型间动态切换（CoPaw），或在编码/对话任务间自动路由。

*   **安全性、沙箱与身份认证**
    *   **涉及项目**：OpenClaw (#49971 MolTrust), Zeroclaw (#5773 Sandbox), IronClaw (#2491 Secret Leak)
    *   **诉求**：
        *   **防御恶意 Skill**：OpenClaw 提出的 DID/VC 身份认证是生态级最强信号。
        *   **沙箱逃逸修复**：Zeroclaw 修复 Shell 命令绕过，IronClaw 修复 Engine V2 密钥直连 LLM，显示出在赋予 Agent 执行权限的同时，**安全围栏** 的建设是重中之重。

*   **架构重构：追求性能与现代化**
    *   **涉及项目**：Zeroclaw (Cargo Workspace), NanoClaw (Bun 运行时), Moltis (Web UI TS 迁移), NullClaw (Zig 0.16)
    *   **诉求**：几乎所有活跃项目都在抛弃旧技术栈（Node.js 纯解释、旧版构建链），转向**编译型语言**或**现代化框架**以解决冷启动慢、内存占用高和依赖地狱问题。

---

## 5. 差异化定位分析

| 项目维度 | OpenClaw | Zeroclaw / NullClaw | NanoClaw / PicoClaw | CoPaw / Moltis | IronClaw |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **核心定位** | **全能型 Agent OS** | **高性能/系统级底座** | **容器化/边缘智能体** | **垂直场景/IM集成** | **企业网关/协作** |
| **目标用户** | 个人极客、开发者、寻求通用方案的用户 | 追求极致性能、资源受限环境、系统开发者 | DevOps、嵌入式用户、自托管爱好者 | 特定IM用户（微信/QQ/Matrix） | 团队协作、企业办公流 |
| **技术架构** | **JavaScript/TypeScript** (Node 生态) | **Rust (Zeroclaw) / Zig (NullClaw)** | **Bun (Nano) / Go (Pico)** | **TS (CoPaw) / TS (Moltis)** | **Python (Backend)** |
| **关键差异** | 插件生态最丰富，但版本稳定性存疑。 | **内存安全、并发性能高**，命令行体验极佳。 | **容器化部署**，Docker/K8s 友好，适合云原生。 | 专注于**协议连接**（Matrix/Signal/Email），而非通用能力。 | 侧重 **Human-in-the-Loop** 和 Routine 自动化。 |

---

## 6. 社区热度与成熟度分层

*   **第一梯队（生态定义者）：OpenClaw**
    *   处于 **Q/A (质量对抗)** 阶段。虽然热度最高，但正深受“成长痛”困扰。社区在激烈辩论安全性（RFC）和修复严重的 UI 回归，属于**高风险高回报**阶段。

*   **第二梯队（架构演进者）：Zeroclaw, Moltis, CoPaw**
    *   处于 **快速迭代** 阶段。这些项目正在经历底层架构的大换血（Rust 拆包、TS 重写、Mission Mode 上线），虽然 Bug 多，但开发团队响应极快，且方向明确（性能、企业级）。

*   **第三梯队（深耕垂直者）：NanoClaw, LobsterAI**
    *   处于 **稳建扩张** 阶段。技术上选择了正确的路径（Bun, 基于 OpenClaw 二次开发），专注于解决特定问题（邮件处理、IM 集成），产品化程度较高。

*   **第四梯队（维护/休眠者）：TinyClaw, EasyClaw**
    *   处于 **静默稳定** 阶段。适合仅需基础功能、不想折腾的用户，但不宜期待新特性。

---

## 7. 值得关注的趋势信号

1.  **"Agentic" 操作系统雏形浮现**：
    *   OpenClaw 和 CoPaw 的 **RFC** 讨论表明，AI 助手正从单纯的“聊天工具”向具备**身份认证、多 Agent 编排** 的微型操作系统进化。

2.  **JavaScript/Python 在重负载下的退潮**：
    *   Zeroclaw (Rust)、NullClaw (Zig)、NanoClaw (Bun) 的活跃度暗示，纯 Node.js 或解释型 Python 在处理高并发、低延迟 Agent 任务时显得力不从心。**高性能运行时** 是未来 Agent 框架的核心竞争力。

3.  **安全焦虑到达临界点**：
    *   IronClaw 的密钥泄露 Bug 和 OpenClaw 的恶意 Skill 问题，直接催生了 **MolTrust** 和 **Agent Shield** 等安全提案。**可信任执行环境 (TEE)** 和 **沙箱隔离** 将成为标配。

4.  **Provider 抽象层的碎片化危机**：
    *   PicoClaw (Groq 兼容性)、NanoClaw (OpenRouter)、NullClaw (自定义 OpenAI 兼容) 的一系列 Bug 显示，虽然大家都兼容 OpenAI API，但在**流式传输、函数调用、Retries 机制**的实现上千差万别。建立一套更严谨的 **Provider Compliance Suite** 是当务之急。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 (2026-04-18)

## 1. 今日速览
Zeroclaw 项目今日呈现出极高的开发活跃度，**正处于 v0.7.0 大版本重构的关键阶段**。过去 24 小时内，项目共产生了 **50 条 PR** 和 **33 条 Issue** 的更新，代码提交与讨论密度极高。核心动态集中在 **Cargo workspace 架构重构**带来的适配性问题修复，以及**安全沙箱**与**通道交互**功能的完善。社区反馈显示，新版本在配置迁移和兼容性方面存在阵痛，但开发团队响应迅速，关键 Bug 修复已就位。

## 2. 版本发布
项目发布了 **3 个连续测试版本**，标志着主架构重构已进入最后冲刺与稳定化阶段：

*   **v0.7.0-beta.1041 / 1040 / 1030**
    *   **核心变更**：这是 Zeroclaw 历史上最大的结构性重构。整个代码库已拆分为规范的 Cargo workspace，新配置模式已上线。
    *   **破坏性变更**：伴随新的配置模式，系统引入了**实时迁移程序**。
    *   **影响分析**：连续的小版本迭代表明团队正在紧锣密鼓地修复重构引入的配置解析和兼容性问题，建议用户在升级前做好配置文件备份。

## 3. 项目进展
今日合并与活跃的重要 PR 主要聚焦于安全性修复和用户体验优化：

*   **安全沙箱绕过修复** ([PR #5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773)):
    *   修复了当配置为 `allowed_commands=["*"]` 且 `block_high_risk_commands=false` 时，Shell 扩展守护进程仍阻止反引号、`$()` 等命令替换的逻辑错误。
    *   **影响**：确保了宽松安全策略下的命令执行符合用户预期。
*   **Skill 工具注册修复** ([PR #5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774)):
    *   修复了 Gateway 路径下未注册 `SKILL.toml` 定义的工具以及未应用排除过滤器的 Bug。
    *   **影响**：解决了 Web 界面中 Skill 工具不可用的核心问题。
*   **Web 体验增强** ([PR #5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733)):
    *   引入了**模型快速切换器**（Quick-Switcher）和持久化 WebSocket 连接，显著提升了 Web 交互体验。
*   **Webhook 可靠性提升** ([PR #5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838)):
    *   为 Webhook 通道增加了指数退避的重试逻辑，解决了瞬时网络故障导致的消息丢失问题。

## 4. 社区热点
今日讨论热度最高的问题集中在**国际化方案**和**运行时兼容性**：

*   **[RFC] 使用 Mozilla Fluent 替换 TOML i18n** ([Issue #5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787))
    *   **讨论**：社区正热烈讨论移除手写的 TOML 国际化系统，转而使用业界标准的 Fluent (`.ftl`) 系统，并将翻译文档移出仓库。
    *   **信号**：这表明项目正在寻求更专业的本地化支持，以适应未来的国际化需求。
*   **InvestorClaw 适配系列反馈** ([Issue #5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719), [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722))
    *   **讨论**：用户 @perlowja 在开发基于 Zeroclaw 的金融分析 Skill 时，发现了 `native` 模式未绕过 Docker 以及 Shell 策略过于严格导致 Python 脚本无法执行的问题。
    *   **信号**：真实场景的高阶用户对**沙箱策略的灵活性**和**文档说明**提出了严峻挑战。

## 5. Bug 与稳定性
今日报告的 Bug 涉及多个核心组件，其中部分属于阻塞性问题（S1），需重点关注：

*   **[S1] Landlock 沙箱污染主进程** ([Issue #5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153))
    *   **现象**：在 Linux 使用 Landlock 后端时，Shell 工具调用会永久破坏 ZeroClaw 进程对工作区文件的访问权限。
    *   **状态**：活跃，无修复 PR。
*   **[S1] Web 仪表板构建与文档缺失** ([Issue #5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348), [Issue #5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847))
    *   **现象**：`zeroclaw gateway` 默认无 Web UI，且报错提示晦涩；用户不清楚如何配置 `gateway.web_dist_dir` 或环境变量。
    *   **状态**：已有文档请求 PR ([#5845](https://github.com/zeroclaw-labs/zeroclaw/pull/5845)) 正在审核中。
*   **[S1] Webhook 渠道报错缺失** ([Issue #5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761))
    *   **现象**：Webhook 发送失败时无重试，导致消息静默丢失。
    *   **状态**：已修复 ([PR #5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838))。
*   **[Bug] OpenRouter 连接泄漏** ([Issue #5822](https://github.com/zeroclaw-labs/zeroclaw/issues/5822))
    *   **现象**：OpenRouter 流式请求使用了分离的 tokio task 且丢弃了 JoinHandle，导致 HTTP 连接在消费者断开后泄漏。
    *   **状态**：活跃。
*   **[Bug] 历史修剪逻辑错误** ([Issue #5823](https://github.com/zeroclaw-labs/zeroclaw/issues/5823))
    *   **现象**：`prune_history` 逻辑缺陷可能导致本应受 `keep_recent` 保护的工具消息被错误删除。
    *   **状态**：活跃，高风险。

## 6. 功能请求与路线图信号
从今日活跃的 Issue 中可以看出下个版本的开发方向：

*   **模型级推理配置** ([Issue #5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843)): 请求将 `reasoning_enabled` 和 `reasoning_effort` 从全局设置下移到每个 Provider/Model 的配置中，以支持混合使用不同推理能力的模型。
*   **会话取消支持** ([Issue #5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837)): 为 ACP 协议会话添加取消令牌支持，这与 Gateway 的 `/abort` 功能对齐。
*   **MariaDB 内存支持** ([Issue #4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668)): 社区对除 PostgreSQL/SQLite 外的数据库支持仍有需求。

## 7. 用户反馈摘要
*   **痛点**：新版本在处理 Python Skill 时极其困难，默认沙箱策略过于严格，且 `git -C` 等常规命令因参数处理逻辑（小写化后与 `-c` 混淆）而被拦截 ([Issue #5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809))。
*   **满意点**：Webhook 的重试逻辑修复获得了用户的积极评价。
*   **文档缺失**：用户对于环境变量 `ZEROCLAW_WEB_DIST_DIR` 的配置方式感到困惑，抱怨文档不足 ([Issue #5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847))。

## 8. 待处理积压
以下长期 Issue/PR 需要维护者特别关注，以免阻碍关键工作流：
*   **[API] Session 重置的 O(1) 实现** ([Issue #5701](https://github.com/zeroclaw-labs/zeroclaw/issues/5701)): 当前的 `SessionBackend` 缺乏高效清空消息的接口，导致文件后端在重置时性能低下（O(n²)），已有 PR ([#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705)) 尝试通过流式持久化解决部分问题。
*   **[Bug] Channel "Denied by user" 误报** ([Issue #5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591)): Supervised 模式下通过 Telegram 通道执行命令持续报错，日志中无具体原因，严重阻断工作流。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目每日动态日报
**日期：** 2026-04-18
**分析师：** AI 智能体与个人助手领域专家

---

## 1. 今日速览
PicoClaw 项目今日处于**极高活跃度**状态。过去 24 小时内，项目不仅发布了最新的 nightly 版本，还处理了大量的代码提交（138 条 PR 更新）和社区反馈（109 条 Issue 更新）。
项目核心正致力于**增强 Agent 的上下文管理与记忆能力**（Seahorse 系统），同时进行大规模的**底层包重构**以提升代码的可维护性。社区讨论集中在**多模态模型接入（如 Groq/OpenAI）的兼容性**以及**Docker 部署的易用性**上。虽然频繁的 nightly 更新显示了强劲的开发势头，但也暴露出部分配置与 Docker 环境下的稳定性问题。

## 2. 版本发布
- **版本号：** `v0.2.6-nightly.20260417.ba08d523`
- **类型：** Nightly Build (自动构建)
- **发布说明：**
  - 这是一个自动构建版本，可能包含不稳定因素，请谨慎使用。
  - **主要变更范围：** 包含了从 `v0.2.6` 到 `main` 分支的所有最新代码。
  - **风险提示：** Nightly 版本通常用于尝鲜新功能，生产环境建议等待稳定版。
  - **完整变更日志：** [查看 Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

## 3. 项目进展
今日合并及活跃的 PR 显示项目在架构优化和功能增强上均有重要推进：
- **重构与架构清理：** PR [#2566](https://github.com/sipeed/picoclaw/pull/2566) (已关闭/可能已合并) 对 `pkg/providers` 和 `pkg/tools` 进行了重大重组，减少了根目录文件散乱问题，提升了代码内聚性。
- **Agent 记忆系统增强：** PR [#2570](https://github.com/sipeed/picoclaw/pull/2570) 为 Seahoose 记忆系统引入了配置化的 `fresh_tail_size`，使 Agent 的短期记忆管理更加灵活。
- **Bug 修复：**
  - PR [#2579](https://github.com/sipeed/picoclaw/pull/2579) 修复了 MCP (Model Context Protocol) 工具调用中的参数传递问题，解决了与 Zod 服务器的兼容性报错。
  - PR [#2573](https://github.com/sipeed/picoclaw/pull/2573) 修复了 Launcher 语言设置影响全局 Web 搜索路由的 Bug。
- **渠道标准化：** PR [#2551](https://github.com/sipeed/picoclaw/pull/2551) 试图解耦渠道名称与提供商类型，为支持同一提供商的多个实例奠定了基础。

## 4. 社区热点
今日社区讨论的焦点主要集中在兼容性与易用性上：
- **热门 Issue #629** ([LLM call failed retry](https://github.com/sipeed/picoclaw/issues/629))：
  - **摘要：** 用户反映在网络波动或 LLM 服务端返回 HTTP 500 错误时，Agent 任务会挂起且不自动重试。
  - **诉求：** 迫切需要引入健壮的错误重试机制，以保证长任务运行的稳定性。
- **热门 Issue #28** ([LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28))：
  - **摘要：** 非技术用户请求简化连接 LM Studio 的流程。
  - **诉求：** 降低本地模型接入门槛，改善“开箱即用”体验。
- **热门 PR #2313** ([Multi-User Support & Agent Shield](https://github.com/sipeed/picoclaw/pull/2313))：
  - **摘要：** 集成了“Agent Shield”安全套件，旨在引入多用户支持、白名单机制和安全加固。
  - **关注度：** 这是目前评论数最高的 PR，显示了社区对多租户和安全性的高度重视。

## 5. Bug 与稳定性
今日报告的 Bug 涉及多个核心组件，按严重程度排列：
1. **[HIGH] Groq API 工具调用失败** ([Issue #748](https://github.com/sipeed/picoclaw/issues/748))
   - **现象：** 配置 Groq 作为提供商时，所有 Agent 调用失败，返回 400 错误。
   - **原因：** PicoClaw 生成的 `<function=...>` 格式不被 Groq 接受。
   - **状态：** 开放中，暂无明确的 Fix PR。
2. **[HIGH] Docker 端口映射导致 Web 输入禁用** ([Issue #2236](https://github.com/sipeed/picoclaw/issues/2236))
   - **现象：** 修改 Docker Compose 端口映射后，Web 页面输入框被禁用，无法发送消息。
   - **影响：** 阻止了自定义部署用户的使用。
   - **状态：** 开放中。
3. **[MED] OpenRouter 模型 ID 识别错误** ([Issue #1790](https://github.com/sipeed/picoclaw/issues/1790))
   - **现象：** 无法正确识别 `minimax-m2.5:free` 等特定模型 ID。
   - **状态：** 开放中。
4. **[MED] Cron 任务静默丢弃结果** ([Issue #1058](https://github.com/sipeed/picoclaw/issues/1058))
   - **现象：** 当 `deliver=false` 时，LLM 的响应被丢弃，用户收不到任何输出。
   - **状态：** 开放中。
5. **[LOW] Windows 平台 QQ 渠道无法使用** ([Issue #2080](https://github.com/sipeed/picoclaw/issues/2080))
   - **状态：** 开放中，特定平台兼容性问题。

## 6. 功能请求与路线图信号
从活跃的 Issues 可以洞察未来的开发方向：
- **生物启发记忆系统 (Seahorse)：** Issue [#1919](https://github.com/sipeed/picoclaw/issues/1919) 提出为 AI Agent 构建类似海马体的短期/长期记忆系统。目前已有相关 PR (#2570) 在进行配置优化，显示出该功能正在积极开发中。
- **OpenAI Responses API 迁移：** Issue [#2171](https://github.com/sipeed/picoclaw/issues/2171) 建议将所有 OpenAI 兼容端点迁移至 Responses API，这将是下一阶段的重要重构工作。
- **标准化入站上下文：** Issue [#2233](https://github.com/sipeed/picoclaw/issues/2233) 建议解耦路由与 Session 分配，这预示着 Agent 架构将向更灵活的消息总线模式演进。
- **新增 Mattermost 渠道：** Issue [#1587](https://github.com/sipeed/picoclaw/issues/1587) 和 PR [#1586](https://github.com/sipeed/picoclaw/pull/1586) 显示 Mattermost 集成已被提上日程。

## 7. 用户反馈摘要
- **痛点：** 许多用户反馈在接入不同的 LLM 提供商时遇到配置困难，尤其是非 OpenAI 标准的 API（如 Groq, OpenRouter）。这表明当前的 Provider 抽象层可能过于依赖 OpenAI 标准。
- **部署体验：** Docker 用户在涉及网络配置和端口映射时遇到阻碍（Issue #2236, #2105），显示文档的覆盖度或配置的健壮性有待提高。
- **性能需求：** 用户对 Web Chat 的流式输出（Issue #1950）和任务执行时的进度反馈（Issue #571）有强烈需求，目前的“黑盒”执行模式降低了用户体验。

## 8. 待处理积压
以下 Issue 长期开放且评论较多，需维护者重点关注：
- **Self-upgrade support (自更新功能)** ([Issue #618](https://github.com/sipeed/picoclaw/issues/618))：发布于 2 月，请求支持程序自动更新（apt/winget 等），这对维护嵌入式设备上的用户至关重要。
- **Pre-built ARMHF Launcher** ([Issue #1778](https://github.com/sipeed/picoclaw/issues/1778))：请求提供 32 位 ARM 设备的预编译 Launcher，虽已关闭，但相关讨论仍在继续。
- **Standardize inbound context** ([Issue #2233](https://github.com/sipeed/picoclaw/issues/2233))：涉及核心架构重构，需要架构师级别的决策。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-18)

## 1. 今日速览
今日 NanoClaw 项目呈现极高的活跃度，处于快速迭代状态。过去 24 小时内共有 **34 条代码与讨论更新**（12 个 Issues，22 个 PR），虽然正式版本发布挂零，但核心架构的重构与功能强化工作正在稳步推进。值得注意的是，项目正经历从 Node 向 **Bun 运行时** 的迁移，同时大量 PR（今日合并 13 条）集中在测试覆盖率提升、MCP 服务集成稳定性以及容器配置规范化上。社区反馈显示，用户对 **Podman 支持** 及 **大文件处理** 有强烈需求，同时也暴露出安装脚本透明度与容器凭证隔离方面的潜在安全与体验问题。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **13 个 PR 被合并或关闭**，标志着项目在底层架构与工具链稳定性方面取得实质性进展：

*   **[Merged] 架构重构与测试基建** ([#1816](https://github.com/qwibitai/nanoclaw/pull/1816))
    完成了大规模的代码拆分与解耦，并强制执行了 90% 的测试覆盖率门槛（CI Gate）。这是项目长期健康性的重要保障，降低了未来引入回归 Bug 的风险。
*   **[Merged] Bun 运行时与构建优化** ([#1813](https://github.com/qwibitai/nanoclaw/pull/1813))
    容器内的 Agent Runner 正式从 Node+pnpm 切换至 **Bun**。此举不仅移除了 `better-sqlite3` 的原生编译依赖，还大幅提升了冷启动速度和构建效率，优化了 Docker 镜像的分层构建。
*   **[Merged] 邮件分类管道 v1 (Email Triage)** ([#1811](https://github.com/qwibitai/nanoclaw/pull/1811))
    交付了基于 LLM 的智能邮件分流系统，支持分级路由（Haiku → Sonnet → Opus）和严格的格式控制。这意味着 NanoClaw 在处理私人邮件流时的自动化能力得到了质变。
*   **[Merged] 自动清理会话 artifacts** ([#1632](https://github.com/qwibitai/nanoclaw/pull/1632))
    新增 `cleanup-sessions.sh` 脚本，用于定期清理过期的会话日志和调试文件，防止长期运行导致的磁盘资源耗尽。
*   **[Merged] v2 Provider 自注册机制** ([#1814](https://github.com/qwibitai/nanoclaw/pull/1814))
    改进了 Agent Provider（如 OpenCode）的挂载和环境变量传递机制，允许它们通过自注册声明配置，无需修改核心容器代码。
*   **[Merged] MCP 服务器预装** ([#1810](https://github.com/qwibitai/nanoclaw/pull/1810))
    将 Gmail 和 Notion 的 MCP 服务器直接预装进容器镜像，解决了之前每次 Agent 启动时通过 `npx` 下载导致的超时和不稳定问题。

## 4. 社区热点
今日讨论热度最高的集中在架构扩展性与安全性上：

*   **[Hot] 支持 Podman 作为 Docker 替代方案** ([#957](https://github.com/qwibitai/nanoclaw/issues/957))
    此建议虽提出较早，但今日再次获得关注（👍 6）。社区强烈希望在文档中增加对 Podman 的支持说明，特别是 macOS 和 Linux 用户，出于安全性和无守护进程的考量倾向于 Podman。
*   **[Hot] 集成 SkillClaw 作为技能生命周期层** ([#1827](https://github.com/qwibitai/nanoclaw/issues/1827))
    用户建议将 [SkillClaw](https://github.com/AMAP-ML/SkillClaw) 纳入生态，作为管理 Agent 技能长期生命周期的补充层。这反映了用户对于复杂技能管理规范的渴望。

## 5. Bug 与稳定性
今日报告的 Bug 涉及崩溃、配置覆盖及隐私安全，需重点关注：

*   **[Critical] OpenClaw 崩溃导致 NanoClaw 被迫终止 (SIGTERM)** ([#1824](https://github.com/qwibitai/nanoclaw/issues/1824)) - **[CLOSED]**
    用户报告 OpenClaw 陷入崩溃循环（Config invalid error），导致 systemd 资源耗尽并强行停止 NanoClaw。
    *状态：已关闭，推测相关配置修复已合并。*
*   **[High] 安装脚本默认开启遥测且无 Opt-out** ([#1819](https://github.com/qwibitai/nanoclaw/issues/1819))
    `setup.sh` 被指控在未告知用户的情况下向 PostHog 发送数据。这触及了开源项目的信任底线，需尽快增加 `--no-telemetry` 选项或明显的提示。
*   **[Medium] `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 被强制覆盖** ([#1820](https://github.com/qwibitai/nanoclaw/issues/1820))
    容器环境无条件覆盖了宿主机设置的环境变量，导致运维人员无法紧急调优。
*   **[Medium] 路径硬编码与环境变量脱节** ([#1825](https://github.com/qwibitai/nanoclaw/issues/1825))
    `cleanup-sessions.sh` 脚本未遵循 `NANOCLAW_*_DIR` 环境变量，导致 Fork 同步或自定义路径部署失败。
*   **[Medium] Agent Teams 模式下阻塞用户消息** ([#1812](https://github.com/qwibitai/nanoclaw/issues/1812))
    当 Agent 生成 Teammates 时，Team Lead 进入非交互模式，导致用户消息被屏蔽，无法干预。

## 6. 功能请求与路线图信号
今日提交的新 Feature Requests 显示出向生产级可用性进发的信号：

*   **[MTProto 大文件下载回退机制]** ([#1831](https://github.com/qwibitai/nanoclaw/issues/1831))
    解决 Telegram Bot API 20MB 限制问题，提出通过 MTProto 直接下载大文件。这对会议录音/视频处理场景至关重要。
    *状态：Open，无对应 PR。*
*   **[公网自动注册与容器凭证隔离]** ([#1830](https://github.com/qwibitai/nanoclaw/issues/1830))
    计划引入 `isPublic` 标志允许新用户自动注册，并解决 Gmail/GCal 凭证在非主容器中泄露的安全隐患。
    *状态：Open，无对应 PR。*
*   **[Agent-Browser 会话持久化]** ([#1829](https://github.com/qwibitai/nanoclaw/issues/1829))
    针对 Chromium 容器重启丢失登录状态的问题，提出改进 Profile 管理的方案。
    *状态：Open，无对应 PR。*

## 7. 用户反馈摘要
*   **痛点：** 用户对 Docker 的依赖感到不便，积极探索 Podman 替代方案 ([#957](https://github.com/qwibitai/nanoclaw/issues/957))。
*   **安全担忧：** 对 `setup.sh` 静默上传数据表示担忧 ([#1819](https://github.com/qwibitai/nanoclaw/issues/1819))，且对多容器场景下凭证隔离不足 ([#1830](https://github.com/qwibitai/nanoclaw/issues/1830)) 提出了质疑。
*   **运维困难：** 硬编码路径脚本 ([#1825](https://github.com/qwibitai/nanoclaw/issues/1825)) 和无法覆盖的环境变量 ([#1820](https://github.com/qwibitai/nanoclaw/issues/1820)) 增加了部署和维护的复杂度。

## 8. 待处理积压
*   **[Open] OneCLI API Key 线程安全问题** ([#1818](https://github.com/qwibitai/nanoclaw/issues/1818))
    宿主机端的 OneCLI 客户端未正确传递 API Key，尽管已有修复 PR ([#1823](https://github.com/qwibitai/nanoclaw/pull/1823))，但 Issue 尚未关闭。
*   **[Open] Matrix E2EE 通道支持** ([#1624](https://github.com/qwibitai/nanoclaw/pull/1624))
    这是一个长期未合并的大功能 PR，涉及端到端加密和矩阵协议支持，自 4 月初以来一直处于 Open 状态。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-04-18)

## 1. 今日速览
NullClaw 项目今日处于**极高活跃度**状态，共处理了 24 个 PR 和 Issue，表明项目正在快速迭代以准备即将到来的版本。核心进展集中在 **Bug 修复**与**开发者体验优化**上，特别是针对子代理通信稳定性、模型目录刷新缓冲区限制以及 `doctor` 诊断逻辑的修正。今日合并了包括 Zig 0.16 迁移和 Docker 沙箱安全增强在内的关键更新，并发布了 v2026.4.17 版本，显示出项目在技术债务清理和安全稳定性方面的持续投入。

## 2. 版本发布
**[v2026.4.17](https://github.com/nullclaw/nullclaw/releases/tag/v2026.4.17)** 已发布。
*   **核心变更**：项目已成功迁移至 **Zig 0.16**。
*   **安全修复**：修复了 Docker 沙箱挂载参数初始化的安全漏洞（通过工厂模式初始化）。
*   **注意事项**：由于更新了 Zig 编译器版本，建议从源码构建的用户更新其 Zig 工具链。

## 3. 项目进展
今日共有 16 条 PR 成功合并/关闭，显著提升了系统的稳定性和可维护性：
*   **稳定性修复 (#814)**: 修复了命名子代理提供方的生命周期管理 Bug，防止了 `Provider` vtable 超出堆栈生命周期导致的内存错误。
*   **基础设施修复 (#813)**: 解决了 `nullclaw models refresh` 在面对大型模型索引（如 OpenRouter ~400KB）时的缓冲区溢出失败问题。
*   **诊断逻辑改进 (#828)**: 修正了 `nullclaw doctor` 的误报逻辑，现在能正确区分 CLI 通道与其他通道的配置状态，解决了用户反馈的状态矛盾问题。
*   **集成增强 (#818)**: 新增微信个人账号的终端二维码登录交互流程。

## 4. 社区热点
*   **[Issue #812: http_request bug](https://github.com/nullclaw/nullclaw/issues/812)** (1 👍)
    *   **概要**: 用户反馈从 Picoclaw/ZeroClaw 迁移过来后，无法启用互联网搜索功能。
    *   **分析**: 尽管用户高度评价项目组织结构，但基础功能的连接性问题依然是新用户的痛点。该 Issue 已关闭，推测在今日的版本中得到了修复或指引。
*   **[Issue #811: 子代理连接失败](https://github.com/nullclaw/nullclaw/issues/811)** (1 👍)
    *   **概要**: 用户在使用自定义 OpenAI 兼容提供方连接子代理时遇到 `error.CompatibleApiError`。
    *   **分析**: 涉及多供应商兼容性的核心问题。该 Issue 已关闭，可能与 PR #814 的生命周期修复直接相关。

## 5. Bug 与稳定性
*   **[OPEN] Gateway 绑定与速率限制问题 (#789)**
    *   **状态**: 待合并
    *   **风险**: 涉及网关公共绑定安全及速率限制机制，需关注合并进度。
*   **[CLOSED] OpenRouter 模型刷新失败 (#809)**
    *   **状态**: 已修复
    *   **详情**: 修复了 `std.process.Child.run()` 默认 50KB 输出限制导致的获取失败。**Fix PR**: #813。
*   **[CLOSED] Channel 状态诊断矛盾 (#827)**
    *   **状态**: 已修复
    *   **详情**: 修复了 `channel status` 显示 ok 但 `doctor` 报错的不一致情况。**Fix PR**: #828。
*   **[CLOSED] Docker 沙箱挂载参数未初始化**
    *   **状态**: 已修复
    *   **详情**: 安全性修复，确保挂载参数通过工厂正确初始化。

## 6. 功能请求与路线图信号
*   **Agent Skills 标准化支持 ([Issue #764](https://github.com/nullclaw/nullclaw/issues/764))**
    *   **请求**: 希望将 NullClaw 列入 Agent Skills 官方客户端列表。
    *   **信号**: 表明社区希望项目能更紧密地遵循/参与 AI Agent 互操作性标准。
*   **工具定制系统 ([PR #411](https://github.com/nullclaw/nullclaw/pull/411))**
    *   **状态**: 开放中
    *   **功能**: 实现基于触发器的优先级排序和参数管理。这是一个高频但复杂的功能需求，目前正在审查中。
*   **知识图谱内存后端 ([PR #712](https://github.com/nullclaw/nullclaw/pull/712))**
    *   **状态**: 开放中
    *   **功能**: 引入基于 SQLite 递归 CTE 的 `KgMemory`。这是向长期记忆和知识图谱方向迈出的重要一步。

## 7. 用户反馈摘要
*   **正向反馈**: 来自 Picoclaw/ZeroClaw 的用户 (Issue #812) 称赞 NullClaw "very organized"（组织结构非常好）。
*   **痛点**:
    *   **配置复杂性**: 用户在配置互联网搜索和自定义 API 提供方时仍需反复尝试，错误提示有时不够直观。
    *   **版本兼容性**: 从旧版本迁移或尝试新功能时，存在环境配置（如 Zig 版本、缓冲区大小）导致的隐形门槛。

## 8. 待处理积压
*   **[PR #411: Tool Customization System](https://github.com/nullclaw/nullclaw/pull/411)** (Open since Mar 10)
    *   这是一个重大的功能增强，已在讨论中超过一个月，建议维护者评估其优先级或提供合并时间表。
*   **[PR #712: KgMemory](https://github.com/nullclaw/nullclaw/pull/712)** (Open since Mar 24)
    *   涉及核心内存架构的变更，需要社区审查以确保 SQLite 实现的健壮性。
*   **[Issue #764: Logo on Agent Skills](https://github.com/nullclaw/nullclaw/issues/764)**
    *   这是一个低成本、高可见度的营销请求，建议快速响应以提升项目曝光度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-18)

## 📊 今日速览
IronClaw 项目今日处于**极高活跃度**状态，主要受到 4 月 Bug Bash 活动和大规模功能重构的双重驱动。过去 24 小时内新增并修复了大量与 Staging 环境相关的 Bug，同时也暴露了 Gateway（网关）和 Engine V2（引擎 V2）层面的一些深层次问题。社区对新功能（如 Secrets 管理）的呼声较高，而开发团队正集中火力解决前端交互体验和 E2E 测试不稳定的顽疾。

---

## 📦 版本发布
**无**
*注：今日无新版本发布。Staging 环境正在持续进行 CI/CD 部署，当前基准版本暂定为 `v0.25.0`。*

---

## 🚀 项目进展
今日合并/关闭的关键 PR 虽然数量不多，但主要聚焦于**认证流程**与**基础设施稳定性**：

1.  **[Gateway] 认证流统一与 Telegram 配对修复** (#2594 - 已关闭)
    *   **进展**：修复了 Gateway 模式下 Telegram 配对流程中请求 ID 丢失的问题，并确保了设置页面的 OAuth 不会阻塞聊天输入。
    *   **意义**：直接提升了 Web 用户体验和第三方渠道集成的稳定性。
2.  **[Gateway] 修复 Web 登录引导崩溃** (#2592 - 已关闭)
    *   **进展**：修复了 `app.js` 中的语法错误导致的网关前端解析失败，并增加了前端代码预提交检查。
    *   **意义**：防止了因前端构建错误导致的用户无法登录问题，提高了 CI 的早期拦截能力。
3.  **[CI] 依赖项更新** (#2593, #2265)
    *   **进展**：大量 GitHub Actions 依赖库（如 `actions/checkout`, `anthropics/claude-code-action`）得到了更新。
    *   **意义**：保持了开发工具链的安全性和功能同步。

---

## 🔥 社区热点
今日讨论主要集中在**安全审查**和**Bug Bash 报告**，以下是热度最高的话题：

1.  **🔴 [安全] Engine V2 绕过密钥扫描机制** (#2491)
    *   **链接**：[nearai/ironclaw#2491](https://github.com/nearai/ironclaw/issues/2491)
    *   **热度**：高，虽已关闭但影响严重。
    *   **分析**：用户报告在 `ENGINE_V2=true` 时，输入的 Slack Token 等敏感信息未被 `scan_inbound_for_secrets()` 拦截，直接发送给了 LLM。这触及了 AI 助手安全的底线，社区强烈要求确保安全检查在所有模式下生效。

2.  **🟠 [QA] 4月 Bug Bash 集中反馈**
    *   **链接**：[nearai/ironclaw#2581](https://github.com/nearai/ironclaw/issues/2581) (内部推理泄露) | [nearai/ironclaw#2580](https://github.com/nearai/ironclaw/issues/2580) (Telegram 消息未发送)
    *   **热度**：极高，单日新增 10+ P1/P2 级 Bug 报告。
    *   **分析**：QA 团队进行的 Bug Bash 发现了 Engine V2 在 Web 端可能暴露内部 "Chain-of-thought"（思维链）而非最终回复，以及 Telegram 渠道声称发送消息但实际未送达的严重功能缺陷。

3.  **🟡 [功能] CLI/TUI 用于管理 Secrets** (#2601, #2600)
    *   **链接**：[nearai/ironclaw#2601](https://github.com/nearai/ironclaw/issues/2601)
    *   **热度**：中，用户痛点明确。
    *   **分析**：用户在初始配置时对如何管理 API Key 和 Secrets 感到困惑，文档缺失且缺乏命令行工具辅助管理。该提议已获得较多关注，反映出当前 Onboarding 体验的不足。

---

## 🐞 Bug 与稳定性
今日报告的 Bug 数量激增（主要集中在 Bug Bash 活动），按严重程度梳理如下：

**P0 - 严重/阻断性**
*   **[#2491](https://github.com/nearai/ironclaw/issues/2491) [安全]**: Engine V2 绕过入站密钥扫描，敏感数据直连 LLM。
    *   *状态*: **已关闭** (需验证修复是否已合并至主分支)。

**P1 - 高优先级/核心功能受损**
*   **[#2581](https://github.com/nearai/ironclaw/issues/2581)**: Agent 暴露内部推理过程而非最终回复（思维链泄露）。
*   **[#2409](https://github.com/nearai/ironclaw/issues/2409)**: Web UI 聊天中用户输入消息消失。
    *   *状态*: **已关闭**。
*   **[#2580](https://github.com/nearai/ironclaw/issues/2580)**: Agent 声称已发送 Telegram 消息但实际未送达。
*   **[#2582](https://github.com/nearai/ironclaw/issues/2582)**: Agent 声称附加了文件但实际未提供。
*   **[#2583](https://github.com/nearai/ironclaw/issues/2583)**: 创建 Routine 失败，报错 "5 consecutive code errors"。
*   **[#2584](https://github.com/nearai/ironclaw/issues/2584)**: 内部系统文件在 Web UI 可见（安全性/隐私风险）。

**P2 - 中等优先级/体验受损**
*   **[#2543](https://github.com/nearai/ironclaw/issues/2543)**: Linear MCP OAuth 授权后 Agent 仍提示授权。
*   **[#2408](https://github.com/nearai/ironclaw/issues/2408)**: 上下文长度溢出，超过模型 200K token 限制。
*   **[#2284](https://github.com/nearai/ironclaw/issues/2284)**: Staging Agent 实例闲置 1 小时后死亡。

---

## 💡 功能请求与路线图信号
1.  **Secrets 管理工具**: Issue #2601 提议增加 CLI/TUI 工具来管理 Secrets，这直接响应了新手用户在配置时的痛点。
2.  **Web Fetch 工具增强**: Issue #2569 提议增加专门的 `web_fetch` 工具，利用小模型进行网页摘要，而非直接将原始 HTML 喂给主 LLM，以提高效率。
3.  **技能生命周期层**: Issue #2590 提议引入类似 `SkillClaw` 的架构作为长期技能管理层，显示社区对更复杂的 Agent 能力编排的需求。
4.  **WASM 通道作用域重构**: Issue #2564 讨划统一 WASM 通道的作用域模型，这对系统架构的清晰度至关重要。

---

## 🗣️ 用户反馈摘要
*   **配置门槛高**: 用户反馈认证和 Secret 管理困难，文档未能跟上代码变化 (#2601)。
*   **渠道稳定性差**: Telegram 集成问题频发，包括 Token 保存无效 (#2411) 和消息发送失败 (#2580)。
*   **前端状态管理混乱**: 用户报告消息在刷新页面或输入时消失 (#2285, #2409)，且有时能看到内部推理日志而非友好的输出 (#2581)。
*   **硬件支持**: 树莓派 (ARMv7) 用户仍希望获得支持 (#1339)。

---

## ⏳ 待处理积压
1.  **[#1446](https://github.com/nearai/ironclaw/pull/1446) [PR - XL]**: 阿里云 Coding Plan 支持。
    *   *风险*: 低，但体积巨大，处于 Open 状态超一个月。
2.  **[#1549](https://github.com/nearai/ironclaw/pull/1549) [PR - XL]**: Slack Socket Mode 支持。
    *   *风险*: 中等，功能重要但尚未合并。
3.  **[#2348](https://github.com/nearai/ironclaw/pull/2348) [PR - L]**: 修复 Web 聊天标题显示问题。
    *   *状态*: Open 中，用户反馈直接受此影响。
4.  **[#2597](https://github.com/nearai/ironclaw/issues/2597)**: 追踪 E2E 浏览器测试失败。
    *   *提醒*: 需关注 CI 稳定性，大量的 E2E 失败可能会掩盖真正的回归问题。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报：2026-04-18

## 📊 今日速览
LobsterAI 项目在 2026 年 4 月 18 日呈现出**极高的开发活跃度**与**较高的社区噪音**。过去 24 小时内共处理了 28 条 PR（其中 21 条已合并/关闭）和 7 条 Issues，并发布了新的 2026.4.17 版本，表明项目处于快速迭代阶段。核心改进集中在**OpenClaw 引擎的稳定性修复**（如 Session ID 缺失、MCP 配置竞态问题）以及**企业级 IM 功能（NIM/Email）的扩展**。然而，社区 Issues 中出现明显的垃圾注册信息泛滥，维护者需关注 Issue 清理。

---

## 🚀 版本发布
**版本号：LobsterAI 2026.4.17**
- **发布时间：** 2026-04-17
- **核心更新：**
    - **依赖升级：** 集成 OpenClaw 版本升级至 2024.4.8 ([#1709](https://github.com/netease-youdao/LobsterAI/pull/1709))。
    - **微信网关修复：** 恢复了 `gatewayMethods` 补丁并修复了通道配置问题 ([#1592](https://github.com/netease-youdao/LobsterAI/pull/1592))。
- **注意：** 虽然数据截断，但鉴于 PR 列表中的大量修复，建议用户关注微信登录和 MCP 工具加载的稳定性。

---

## 🏗️ 项目进展
今日合并了大量 PR，项目在多租户协同和企业接入能力上迈出重要一步：
1.  **OpenClaw 核心修复：**
    - **修复 Cowork Session ID 缺失：** 关键 PR ([#1715](https://github.com/netease-youdao/LobsterAI/pull/1715)) 修复了服务端代理请求中 `session_id` 字段丢失的问题，这直接影响了多会话并发运行的稳定性。
    - **MCP 配置热更：** ([#1708](https://github.com/netease-youdao/LobsterAI/pull/1708)) 修复了 MCP bridge 配置在启动时的竞态条件，现在配置变更会强制重启 Gateway，确保工具可用。
2.  **企业级 IM 扩展：**
    - **NIM 多实例支持：** ([#1711](https://github.com/netease-youdao/LobsterAI/pull/1711)) 新增了对 NIM（网易云信）多机器人分发和 GitHub 插件安装的支持。
    - **Lobster Email 集成：** 新 PR ([#1719](https://github.com/netease-youdao/LobsterAI/pull/1719)) 提出了将“龙虾邮箱”作为新的 IM 网关通道，支持完整的配置 UI 和会话映射。
3.  **维护与清理：** 移除了 `yd_cowork` 遗留代码 ([#1689](https://github.com/netease-youdao/LobsterAI/pull/1689)) 和未使用的 Tlon 二进制依赖，减小了安装包体积。

---

## 🔥 社区热点
*今日社区讨论主要集中在垃圾信息和特定的功能请求上。*
1.  **垃圾信息攻击：** 用户 `changan1524` 在短时间内连续发布了 3 个包含赌博/游戏推广链接的 Issues ([#1716](https://github.com/netease-youdao/LobsterAI/issues/1716), [#1717](https://github.com/netease-youdao/LobsterAI/issues/1717), [#1718](https://github.com/netease-youdao/LobsterAI/issues/1718))。这表明项目的 Issue Tracker 目前缺乏有效的反垃圾机制。
2.  **新 AI 引擎请求：** 用户 `shanxinstart-lab` 提议集成 **hermes-agent** 作为可选的 AI 引擎 ([#1614](https://github.com/netease-youdao/LobsterAI/issues/1614))，类似于现有的 OpenClaw。
3.  **技术债务处理：** Dependabot 创建了 4 个关于依赖升级的大型 PR（Electron, React, Vite, HeadlessUI），虽然尚未合并，但预示着项目即将进行底层技术栈的大版本升级。

---

## 🐛 Bug 与稳定性
*今日报告了安装、登录和运行时崩溃等关键问题。*
1.  **[高优先级] 微信登录网络错误：**
    - **Issue:** [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) (已关闭)
    - **现象：** Deepin V25 环境下，点击登录跳出浏览器输入验证码后报错“网络错误”。
    - **状态：** 已在最新发布版中通过 PR [#1696](https://github.com/netease-youdao/LobsterAI/pull/1696) (修复 switch 状态判断) 部分解决，但用户可能仍需等待特定补丁。
2.  **[中优先级] Win11 安装图标变白/无效：**
    - **Issue:** [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) (新开)
    - **现象：** 安装过程中大概率出现图标为白色且无效的情况。
3.  **[中优先级] Cowork 历史记录泄露：**
    - **修复：** PR [#1710](https://github.com/netease-youdao/LobsterAI/pull/1710) 修复了协同会话中心跳提示和历史记录在 UI 重新对齐后泄露的问题。
4.  **[低优先级] 设置导入崩溃：**
    - **修复：** PR [#1699](https://github.com/netease-youdao/LobsterAI/pull/1699) 修复了导入包含本地不存在 Provider 的文件时导致的崩溃。

---

## 💡 功能请求与路线图信号
- **Lobster Email Channel:** PR [#1719](https://github.com/netease-youdao/LobsterAI/pull/1719) 表明项目正在扩展电子邮件作为 AI 交互的入口，这可能是下一阶段的重点功能。
- **Hermes-Agent 支持:** Issue [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) 的请求尚未有对应 PR，可能处于评估阶段。
- **依赖升级计划:** 多个关于 React 19 和 Electron 41 的 PR 处于 Open 状态，建议开发者在合并前进行充分的兼容性测试。

---

## 😣 用户反馈摘要
- **痛点：** Linux (Deepin) 用户在登录环节遇到严重阻碍 ([#1687](https://github.com/netease-youdao/LobsterAI/issues/1687))，虽然 Issue 关闭，但环境特定的问题可能仍存在。
- **体验：** 有用户反馈提问后不运行且无任何提示信息 ([#1569](https://github.com/netease-youdao/LobsterAI/issues/1569))，属于典型的静默失败 Bug，严重影响体验。

---

## ⚠️ 待处理积压
- **长期静默 Bug：** Issue [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) 创建于 4 月 8 日，关于“不运行也不显示信息”的问题至今未解决，需要排查日志或增加错误提示。
- **依赖升级风险：** PR [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) (React 18->19) 和 [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Electron 40->41) 均创建于 4 月初但尚未合并。由于涉及核心框架，建议尽快审查以免产生过多的合并冲突。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目日报 - 2026-04-18

## 1. 今日速览
TinyClaw 项目在过去 24 小时内处于**低活跃度**状态。代码仓库仅有 1 条合并记录，且无新的 Issue 提出或版本发布。这表明项目目前处于功能稳定期，主要维护工作集中在代码库的清理与历史遗留合并上，并未引入新的代码变更或社区讨论。

---

## 2. 版本发布
*今日暂无新版本发布。*

---

## 3. 项目进展
今日无新代码直接合并，但项目状态列表显示有一个 PR 昨日刚刚关闭，构成了项目的近期进展：

*   **[PR #243] 集成 Novita AI 作为内置 LLM 提供商** ([链接](https://github.com/TinyAGI/tinyclaw/pull/243))
    *   **状态**: 已关闭 (Closed on 2026-04-17)
    *   **内容**: 将 [Novita AI](https://novita.ai) 添加为与 Anthropic 和 OpenAI 并列的一级内置提供商。
    *   **技术实现**: 利用 Novita AI 兼容 OpenAI API 的特性，通过复用现有的 **codex harness** 并自定义 `OPENAI_BASE_URL` 实现，未引入新的 CLI 依赖。
    *   **影响**: 降低了用户接入 Novita AI 的门槛，丰富了项目的模型生态支持。

---

## 4. 社区热点
*今日社区无热点讨论。* 过去 24 小时内无活跃的 Issues 或评论产生。

---

## 5. Bug 与稳定性
*今日未报告新的 Bug 或稳定性问题。*

---

## 6. 功能请求与路线图信号
*今日未收到新的功能请求。*
基于近期合并的 PR #243，项目路线图当前倾向于**扩展多模型提供商的支持**，特别是兼容 OpenAI API 协议的生态整合。

---

## 7. 用户反馈摘要
*今日无新增用户反馈数据可供分析。*

---

## 8. 待处理积压
目前暂无明显的长期未响应积压项。Issues 与 PR 均处理完毕，积压压力较小。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

你好！我是 Moltis (moltis-org/moltis) 项目的 AI 智能体与开源助手分析师。以下是基于 2026-04-18 的 GitHub 数据生成的项目动态日报。

---

## 📅 Moltis 项目日报 | 2026-04-18

### 1. 今日速览
Moltis 项目今日呈现出**极高活跃度**，处于快速迭代与修复阶段。
- **代码吞吐量**：过去 24 小时内处理了 30 个代码变更项（Issues + PRs），其中 PR 合并率高达 68%（11/16），表明开发团队在积极清理技术债务。
- **版本迭代**：发布了两轮快速迭代版本（`20260417.01` & `02`），主要用于紧急修复兼容性问题和安全审计警告。
- **核心动向**：项目在三个方向上取得关键进展：**Web UI 的 TypeScript 现代化迁移**正式启动，**Matrix 通信层的 OIDC 认证**完成合并，以及**代码索引** 功能的全面落地。

---

### 2. 版本发布
今日发布 **2** 个补丁版本，建议所有用户更新。

- **[20260417.02] & [20260417.01]**
  - **类型**：Bug Fix & Security
  - **关键修复**：
    - **Podman 兼容性**：修复了在 Ubuntu 24.04/26.04 上 Podman 容器因 sysfs 权限导致的启动失败问题 ([#765](https://github.com/moltis-org/moltis/pull/765))。
    - **日志噪音抑制**：解决了 Schema 归一化警告日志在每个会话中重复打印 1000+ 次的性能/体验问题 ([#762](https://github.com/moltis-org/moltis/pull/762))。
    - **安全性加固**：清理了测试用例中被 CodeQL 标记为“硬编码加密值”的伪数据，确保安全扫描通过 ([#768](https://github.com/moltis-org/moltis/pull/768))。

---

### 3. 项目进展
今日合并的 PR 显著增强了 Moltis 的企业级能力和安全性：

- **🚀 安全与认证升级**
  - **PR #730 (已合并)**：实现了 **Matrix OpenID Connect (OIDC) 认证**。这使得 Moltis 能连接到禁用密码登录的现代化 Matrix 服务器（如 matrix.org），这是一个重要的里程碑，修复了 [#711](https://github.com/moltis-org/moltis/issues/711)。
  
- **🔒 通信隐私增强**
  - **PR #763 (已合并)**：为 Nostr 协议引入了 **NIP-59 (Gift Wrap)** 支持，实现了加密的私有 DM（私信），并保持了向后兼容性 ([#759](https://github.com/moltis-org/moltis/issues/759))。

- **🤖 代码索引能力 (MVP 完成)**
  - **PR #756 (已合并)**：完成了代码索引功能栈的最后一块拼图，引入了内置的 **SQLite + FTS5** 后端，支持增量重新索引。这意味着 Agent 现在可以更高效地搜索和理解本地代码库，无需外部依赖。
  - **PR #755, #754 (已合并)**：将代码索引功能集成到 Gateway 和 Agent 工具注册表中。

- **🛠️ 集成与修复**
  - **PR #767 (已合并)**：修复了 Slack 斜杠命令在 Webhook 模式下 404 的问题，完善了 Slack 集成体验 ([#766](https://github.com/moltis-org/moltis/issues/766))。
  - **PR #761 (已合并)**：为 Matrix 同步循环添加了指数退避重试机制，防止网络波动导致永久断连 ([#758](https://github.com/moltis-org/moltis/issues/758))。

---

### 4. 社区热点
今日讨论主要集中在用户体验改进和文档需求：

- **🔥 热门 Feature Request：更简单的 Prompt 重试机制**
  - **[#748](https://github.com/moltis-org/moltis/issues/748)**: [enhancement] easy way to "retry" a prompt on error
  - **状态**：讨论中 (7 评论)
  - **分析**：用户强烈希望在面对错误或生成结果不理想时，能有更便捷的方式重试 Prompt，而不是重新输入。这反映了用户对 Agent 交互“容错率”的关注。

- **📖 文档需求：多代理 心跳机制**
  - **[#769](https://github.com/moltis-org/moltis/issues/769)**: [Docs] Clarify heartbeat/cron behavior with multi-agent workspaces
  - **状态**：活跃 (3 评论)
  - **分析**：社区对多代理协同工作模式下的心跳 和定时任务 如何跨上下文工作感到困惑。这表明 Moltis 的多代理能力正在被实际使用，但文档滞后于功能。

- **💻 重大技术方向：Web UI 迁移至 TypeScript**
  - **[#775](https://github.com/moltis-org/moltis/pull/775)**: Begin TypeScript web UI migration
  - **状态**：PR Open
  - **分析**：这是一个重大的架构调整。前端正迁移到 **Vite + Preact + TypeScript** 技术栈。虽然目前只是代码提交，但预示着未来的 Web UI 将具备更好的类型安全性和开发体验。

---

### 5. Bug 与稳定性
今日报告的 Bug 数量适中，关键 Bug 已有修复方案：

- **⚠️ PWA 体验断裂**
  - **[#773](https://github.com/moltis-org/moltis/issues/773)**: Push message CTA ends in 404 on PWA
  - **影响**：PWA 推送消息的点击操作无效。
  - **状态**：待修复。

- **🔧 任务列表逻辑缺陷**
  - **[#776](https://github.com/moltis-org/moltis/issues/776)**: task_list.list 默认行为问题
  - **详情**：调用 `list` 时若不指定 ID，仅显示默认列表，导致其他列表的任务“隐形”。
  - **状态**：已有修复 PR **[#779](https://github.com/moltis-org/moltis/pull/779)** (Open)。

- **⚙️ 环境变量解析失败**
  - **[#770](https://github.com/moltis-org/moltis/issues/770)**: Some Env Variables cannot be resolved
  - **状态**：调查中。

---

### 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以窥见未来的开发重点：

- **网络与连接**：
  - **[#764](https://github.com/moltis-org/moltis/issues/764)**: 用户提议支持 **Netbird**（一种基于 WireGuard 的 mesh 网络），这有助于私有化部署下的节点互联。
  
- **用户体验优化**：
  - **[#774](https://github.com/moltis-org/moltis/issues/774)**: 社区呼吁简化 Primary Agent 的配置流程，认为当前的配置方式有些笨重。
  
- **开发工具链**：
  - **[#745](https://github.com/moltis-org/moltis/pull/745)**: 社区贡献了 **Nix Flake** 支持，方便 NixOS 用户安装和部署。

---

### 7. 用户反馈摘要
- **痛点**：开发者体验 (DX) 仍有提升空间。用户反映 CSS 路径解析在标准 Cargo 构建下较为麻烦 ([#441](https://github.com/moltis-org/moltis/issues/441))，虽然该 Issue 已关闭，但相关讨论表明用户对构建系统的易用性有更高期待。
- **协作困扰**：多代理工作区虽然强大，但心跳和定时任务的复杂性让用户感到困惑，急需更清晰的文档或配置简化。

---

### 8. 待处理积压
- **[#748](https://github.com/moltis-org/moltis/issues/748)** (Feature - Retry Logic): 讨论度高且需求明确，建议维护者优先评估。
- **[#769](https://github.com/moltis-org/moltis/issues/769)** (Docs): 文档澄清请求，成本低但收益高，建议尽快更新以降低新用户门槛。

---
*数据来源：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis) | 分析时间：2026-04-18*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-18)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日处于**极高活跃度**状态，社区贡献显著。过去 24 小时内共处理了 95 个 PR 和 Issue（50 个 Issues，45 个 PR），表明项目正处于快速迭代期。核心聚焦于 **Mission Mode（任务模式）** 的落地、**模型路由** 的 UI 实现以及**多 Agent 编排架构**的探讨。同时，围绕 Windows 平台的兼容性问题和企业微信集成 bug 的修复工作正在紧锣密鼓地进行中。

## 2. 版本发布
**v1.1.2 已发布** ([Release Link](https://github.com/agentscope-ai/QwenPaw))
*   **✨ 新增**：**Agent System - Mission Mode**（任务模式）。
    *   引入了 `/mission` 命令，支持自主的多阶段任务执行。Agent 能够自主规划、执行并进行迭代式的自我修正。
    *   新增支持 `/mission status` 和 `/mission list` 命令，用于实时监控正在运行的任务状态 ([#3364](https://github.com/agentscope-ai/QwenPaw))。

## 3. 项目进展
今日有大量 PR 处于活跃状态，以下为关键进展：
*   **LLM 路由与模型选择**：[#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) 和 [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) 正在构建模型路由的后端逻辑与 UI 界面，支持“本地优先/云端优先”的切换策略，这将极大提升用户在多模型环境下的灵活性。
*   **ACP 协议支持**：[#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) 正在添加 ACP (Agent Client Protocol) 服务端支持，将允许 Zed、OpenCode 等编辑器直接作为客户端连接 QwenPaw，打开代码编写的新场景。
*   **数据备份与恢复**：[#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534) 引入了完整的备份恢复系统，提升了用户数据的安全性。
*   **性能优化**：[#3386](https://github.com/agentscope-ai/QwenPaw/pull/3386) 和 [#3538](https://github.com/agentscope-ai/QwenPaw/pull/3538) 致力于解决用户反馈的启动慢问题，通过懒加载和并行初始化将启动时间从 4.5 秒大幅缩短。

## 4. 社区热点
*   **[#3356 (18 comments)](https://github.com/agentscope-ai/QwenPaw/issues/3356) - QwenPaw 升级后 WORKING_DIR 路径混乱**
    *   **摘要**：用户升级后，程序本体安装在 `.qwenpaw`，但数据仍写入旧目录 `.copaw`，导致配置错位。
    *   **分析**：这反映了项目从 CoPaw 向 QwenPaw 更名/重构过程中的数据迁移痛点，用户对自动迁移旧数据有强烈需求。
*   **#3309 (11 comments) - 更新后的安装与路径疑惑**
    *   **摘要**：用户对新旧两个 APP 共存、PATH 环境变量未自动更新感到困惑。
    *   **分析**：安装体验和用户引导文档（特别是 Windows 平台）亟待优化。
*   **#508 (6 comments) - 多 Agent 编排网关**
    *   **摘要**：核心开发者探讨将单 Agent 架构升级为多 Agent 协作网关。
    *   **分析**：这是架构层面的重大演进信号，未来的 CoPaw 将支持真正独立的会话和并行执行。

## 5. Bug 与稳定性
*   **[高优先级] 企业微信消息重复** ([#3523](https://github.com/agentscope-ai/QwenPaw/issues/3523))
    *   在 `require_mention: true` 模式下，每条群消息会创建两条 chat 记录，其中一条 `user_id` 为空。
*   **[高优先级] MCP 配置失效** ([#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445))
    *   GUI 配置的 MCP 服务器无法连接，一直显示 "Connecting..."。根本原因分析显示内部存在两套 MCP 系统，配置未正确同步。
*   **[中优先级] Windows 初始化卡死** ([#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943))
    *   Python 3.13 环境下，`copaw init` 在 "Security warning" 处卡死。
*   **[中优先级] 前端 UI Bug** ([#3541](https://github.com/agentscope-ai/QwenPaw/issues/3541))
    *   技能搜索框不可用；暗黑模式下 MCP 添加窗口文字不可见。
*   **修复进展**：暗黑模式文字颜色问题已在 [#3539](https://github.com/agentscope-ai/QwenPaw/pull/3539) 和 [#3547](https://github.com/agentscope-ai/QwenPaw/pull/3547) 中被修复。

## 6. 功能请求与路线图信号
*   **Kimi Code API 支持** ([#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437))：用户请求支持月之暗面的 Kimi Code API，目前内置配置缺失且手动添加失败。
*   **会话启动钩子与记忆管理** ([#2621](https://github.com/agentscope-ai/QwenPaw/issues/2621))：请求在会话开始时注入 Hooks 并增强记忆管理，提升 Agent 的上下文感知能力。
*   **Signal 与 WhatsApp 频道**：[#3508](https://github.com/agentscope-ai/QwenPaw/pull/3508) 和 [#3498](https://github.com/agentscope-ai/QwenPaw/pull/3498) 正在增加对 Signal 和 WhatsApp 的支持，显示项目正积极扩展即时通讯渠道的覆盖面。
*   **技能语义路由** ([#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117))：正在开发基于 Embedding 的技能检索功能，当用户安装大量技能时，只注入最相关的 Top-K 技能，以降低 Token 消耗。

## 7. 用户反馈摘要
*   **痛点**：
    *   **启动慢**：安装后打开窗口延迟 3-5 秒 ([#3352](https://github.com/agentscope-ai/QwenPaw/issues/3352))。
    *   **内存占用高**：新版本内存占用较大 ([#3170](https://github.com/agentscope-ai/QwenPaw/issues/3170))。
    *   **配置繁琐**：工具护栏的提示语过于冗长，且缺乏颜色编码的风险提示（如高危操作用红色），用户阅读体验差 ([#3298](https://github.com/agentscope-ai/QwenPaw/issues/3298), [#3349](https://github.com/agentscope-ai/QwenPaw/issues/3349))。
    *   **迁移困惑**：从 CoPaw 升级到 QwenPaw 过程中，目录结构不清，数据容易丢失或混乱。
*   **满意点**：
    *   用户对快速修复和响应表示赞赏（如暗黑模式 UI 问题迅速得到修复）。

## 8. 待处理积压
*   **架构重构讨论** [#415](https://github.com/agentscope-ai/QwenPaw/issues/415)：关于 CoPaw 需要完整实现 "Human-in-the-Loop"（人在回路）能力的讨论已开启较长时间，涉及底层 AgentScope 框架能力的继承。
*   **死循环问题** [#3026](https://github.com/agentscope-ai/QwenPaw/issues/3026)：Agent 在任务失败时会无限重试且无法手动中断，这是一个严重影响可用性的问题，目前尚无明确的修复 PR。
*   **安装脚本优化** [#731](https://github.com/agentscope-ai/QwenPaw/issues/731)：关于支持类似 OpenInterpreter 的插件一键安装机制的建议，目前处于关闭状态但需求仍在。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-18)

**报告生成基于**：[EasyClaw GitHub 数据](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
今日 EasyClaw 项目处于低活跃度状态，代码仓库无明显迭代动作。
*   **整体状态**：项目今日处于维护静默期，无新代码提交或版本发布。
*   **Issue 动态**：过去24小时内仅涉及 **1 条** Issue 的状态变更（关闭），无新增讨论。
*   **PR 动态**：无 Pull Request 提交或合并，代码开发流暂时停滞。
*   **稳定性**：尽管活跃度较低，但成功关闭了一个关于版本更新的问题，表明维护者仍在关注用户反馈。

### 2. 版本发布
*   **暂无更新**：今日未发布新版本。当前最新版本仍维持在前一版本，请关注后续更新日志。

### 3. 项目进展
今日无合并或关闭的 Pull Requests，项目在功能开发与代码优化方面未见明显推进。主要动态集中在对历史遗留问题的清理上：
*   **关闭 Issue #33**：完成了对 "1.7.11更新失败" 问题的处理与归档，该项目迈进了 **维护收尾** 的一小步。

### 4. 社区热点
今日社区讨论热度较低，最值得关注的活动为一个 Issue 的关闭：
*   **[CLOSED] Issue #33: 1.7.11更新失败**
    *   **链接**：[gaoyangz77/rivonclaw#33](https://github.com/gaoyangz77/rivonclaw/issues/33)
    *   **状态**：已关闭
    *   **分析**：该问题由用户 *slowayear* 提出，主要涉及软件更新流程中的异常。虽然具体评论内容被折叠，但问题已解决并关闭，说明该特定更新阻塞已被移除。

### 5. Bug 与稳定性
*   **严重程度：中等（已归档）**
    *   **问题描述**：1.7.11 版本更新过程中出现的失败问题 ([#33](https://github.com/gaoyangz77/rivonclaw/issues/33))。该问题涉及用户升级体验，目前已标记为 CLOSED，推测已通过某种方式修复或确认为无效。
*   **其他风险**：目前未发现新的活跃 Bug 报告或崩溃回归问题。

### 6. 功能请求与路线图信号
*   今日无新的功能请求。
*   由于没有活跃的 Pull Requests，暂时无法判断下一版本的具体功能规划或路线图变动。

### 7. 用户反馈摘要
从今日关闭的 Issue 反馈来看：
*   **痛点**：用户在升级到 v1.7.11 版本时遇到了阻碍，可能涉及安装包校验、网络下载或环境兼容性问题。
*   **处理结果**：维护者团队已介入并将问题关闭，表明该反馈已得到响应，用户遇到的更新卡顿问题理论上应已缓解。

### 8. 待处理积压
*   目前仓库中未显示长期未响应的高优先级积压项。
*   **建议**：随着 Issue #33 的关闭，建议维护者检查是否仍有其他关于 1.7.11 版本的潜在反馈，以防出现群体性更新问题。

---

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*