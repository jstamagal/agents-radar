# OpenClaw 生态日报 2026-04-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-10 00:13 UTC

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

# OpenClaw 项目动态日报 (2026-04-10)

## 📊 今日速览
OpenClaw 项目今日处于**极高活跃度**状态，过去24小时内共处理了 500 条 Issues 和 500 条 PRs，代码库演进速度极快。
*   **发布节奏：** 项目刚刚发布了 `v2026.4.9` 正式版及 Beta 版，标志着核心内存架构的重大升级。
*   **稳定性挑战：** 虽然功能迭代迅速，但新引入的依赖和架构变更引发了连锁反应，多个版本的安装和运行出现崩溃，社区报修量激增。
*   **开发焦点：** 社区贡献者与维护者正集中火力修复安装依赖缺失、网络超时配置失效以及各平台兼容性问题。

---

## 🚀 版本发布

### **v2026.4.9 & v2026.4.9-beta.1** (最新发布)
**核心更新：**
*   **[Memory/Dreaming] 架构重构**：引入了**Grounded REM Backfill Lane**。这是一个重大的内存增强功能，允许旧的历史笔记通过新的提取流程重放到梦境和持久记忆中，而无需第二个内存栈。
*   **[CLI] 增强**：新增了 `rem-harness --path` 命令和 diary commit/reset 流程，优化了耐用事实的提取。
*   **[集成] 短期记忆提升**：加强了实时短期记忆集成，确保旧数据能无缝接入新记忆体系。

**⚠️ 破坏性与变更注意：**
*   由于此次更新涉及底层内存架构调整，建议用户在升级前备份当前的记忆数据。

---

## 🏗️ 项目进展

今日大量 PR 仍处于待合并状态，但代码审查和修复合并正在积极进行中。以下方向代表了项目的主要推进力：

1.  **安全与依赖加固**:
    *   **[PR #63891]**: 锁定 `axios` 版本至 1.15.0 并引入依赖黑名单机制。这是针对供应链安全的重要修复，防止插件安装时引入恶意或已知不兼容的包。
2.  **Browser 核心重构**:
    *   **[PR #63977]** & **[PR #63957]**: 统一了 Browser `/act` 路由的执行逻辑，并通过 Facade 模式整合了重复的 Helper Surface。这极大地降低了维护成本，并消除了代码漂移带来的潜在 Bug。
3.  **CI/CD 与测试基础设施**:
    *   **[PR #55321]**: 引入 Canonical Live Benchmark 脚手架，标准化了性能基准测试流程，有助于在未来的迭代中监控回归问题。
4.  **缺陷修复**:
    *   **[PR #63679]**: 修复了全局 npm 安装时 `qa/scenarios/index.md` 缺失导致的崩溃，解决了 `v2026.4.9` 发布后的核心安装报错。
    *   **[PR #63783]**: 修复了 WebChat 在仅文本模型下丢弃图片附件的问题，确保了多模态输入的兼容性。

---

## 🔥 社区热点

**1. [RFC] Native Agent Identity & Trust Verification (#49971)**
*   **状态**: Open (讨论持续中)
*   **热度**: 🔥🔥🔥 (77 评论)
*   **摘要**: 由 MolTrust (CryptoKRI GmbH) 提出的关于在 OpenClaw 中引入原生 Agent 身份与信任验证机制的 RFC。该提案关联了 ERC-8004、W3C DID 和 VC 标准，旨在为 AI Agent 建立去中心化的可信身份体系。这是目前社区战略层面讨论最热烈的话题，预示着项目向 Web3/Agent 经济方向的探索。

**2. 无法安装/启动：缺少 `@buape/carbon` 模块 (#62994, #62272, #62446, #63127)**
*   **状态**: Open (集群式爆发)
*   **热度**: 🔥🔥🔥 (累计 50+ 评论)
*   **摘要**: 这是一个典型的回归灾难。多个用户报告在安装或升级到 v4.8/v4.9 后，系统报错找不到 `@buape/carbon` 模块，导致 CLI 和 Doctor 完全不可用。受影响平台涵盖 npm 全局安装、pnpm 安装及 Windows 环境。这表明新版本的打包依赖清单存在遗漏。

---

## 🐛 Bug 与稳定性

**[严重 - 崩溃/阻塞]**
*   **[Bug #63510]**: `v2026.4.9` 安装后生成补全缓存时崩溃，提示缺少 `qa/scenarios/index.md`。这直接导致 `openclaw update` 和部分插件安装流程中断。*(相关修复 PR #63679)*
*   **[Bug #61899]**: Windows 安装失败，ESM 加载器无法识别盘符协议 (`c:`)，导致路径解析错误，影响大量 Windows 用户。
*   **[Bug #45064]**: **内存泄漏**。v2026.3.12 版本在基本命令下发生 OOM 崩溃，CLI 完全无法使用。

**[中等 - 功能失效]**
*   **[Bug #46049]**: **超时配置失效**。LLM 请求忽略配置的超时设置，导致长任务意外中断。
*   **[Bug #61726]**: WhatsApp 媒体发送失败。v2026.4.5 上，发送媒体文件仅发送标题，附件被静默丢弃。
*   **[Bug #62505]**: Coding Agent (编码代理) 陷入无限循环或仅发送含糊的状态更新，不再输出实际代码。这是从 v4.2 之后引入的回归，严重影响开发者工作流。
*   **[Bug #37303]**: 配置通道 时使用 `exec` secret provider 会导致向导崩溃。

**[低 - 兼容性/体验]**
*   **[Bug #14593]**: Docker 容器内 Skill 安装失败，因为 Linux 容器没有预装 `brew`。
*   **[Bug #48388]**: 飞书 渠道文件名中文乱码 (UTF-8 编码问题)。

---

## 🧭 功能请求与路线图信号

1.  **Web Search 扩展**: **[PR #56511]** 正在添加 Serper (Google Search API) 作为 `web_search` 的新 Provider。这回应了用户对于非 AI 合成搜索结果的需求，预计很快合入主线。
2.  **UI 原始配置模式**: **[PR #48621]** 提议在 Web UI 中为原始配置模式添加“待更改视图”和 JSON Diff 对比功能。这将为高级用户提供更精细的配置掌控力。
3.  **SSRF 策略配置**: **[Issue #25322]** (已关闭) 曾请求为 `web_fetch` 添加类似 `browser` 工具的 `ssrfPolicy` 支持，以解决内网/DNS 特殊 IP 殶的访问限制问题。
4.  **本地模型前缀缓存**: **[Issue #27732]** (已关闭) 讨论了重排系统提示以启用本地模型 (如 Qwen3-Coder-Next) 的前缀缓存，这显示了项目对高性能本地推理优化的持续关注。

---

## 🗣️ 用户反馈摘要

*   **安装体验焦虑**: 用户对新版本 (`v4.9`) 的安装稳定性表示强烈不满，特别是 `Cannot find module '@buape/carbon'` 错误频繁出现，导致许多人无法完成初始配置。
*   **回归敏感**: 编码 Agent 和 Docker 环境的回归问题引发了核心开发者的关注。用户反馈“以前能用，现在挂了”，反映出项目在快速迭代中牺牲了部分稳定性。
*   **配置复杂性**: Windows 用户和特定网络环境 (如 Clash/mihomo 代理) 用户在处理 ESM 路径和 SSRF 检查时感到吃力，文档和错误提示仍有优化空间。

---

## 📌 待处理积压

以下 Issue 已开启较长时间且讨论度高，尚未完全解决，需维护者重点关注：

1.  **[Bug #32892]** `openai-codex` Provider 登录失败 (No provider plugins found) —— 已持续 38 天。
2.  **[Bug #26422]** `message_sending` Hook 永不触发 —— 被标记为死代码，影响插件生态开发。
3.  **[Bug #25951]** 沙箱环境变量清洗器阻断了 `NOTION_API_KEY` 等合法变量 —— 影响 Notion 等内置技能在沙箱模式下的运行。
4.  **[Bug #18598]** macOS Sequoia 下 Chrome 隔离配置文件无法下载 CSV —— 持续影响 Mac 用户体验。

---
*数据来源: GitHub.com/openclaw/openclaw | 生成时间: 2026-04-10*

---

## 横向生态对比

# 个人 AI 智能体开源生态日报（横向对比分析）
**日期：** 2026-04-10
**分析师：** AI 智能体技术观察员

---

## 1. 生态全景
2026年4月10日的开源 AI 智能体生态呈现出**高频迭代与架构分化**的显著特征。以 **OpenClaw** 为代表的头部项目正在经历从单体应用向复杂系统（如 Web3/Agent 身份）的架构跃迁，但也因此引发了严重的稳定性阵痛（如安装崩溃、内存溢出）。与此同时，**NanoBot** 和 **PicoClaw** 等第二梯队项目通过引入 WebUI、多模态支持和 MCP 协议集成，在易用性和生态扩展性上对头部项目形成有力追赶。整体来看，社区已从单纯的“功能比拼”转向“生态整合与体验打磨”，**MCP (Model Context Protocol)** 成为了今日跨项目共同的技术热点，标志着工具链标准化正在形成。

---

## 2. 各项目活跃度对比

| 项目名称 | 今日 Issues | 今日 PRs | 版本发布 | 健康度评估 | 状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.4.9 | **极高活跃 / 稳定性风险** | 架构重构，安装报错激增 |
| **NanoBot** | 26 | 45 | 无 | **高活跃 / 体验阵痛** | 引入 WebUI，飞书适配问题 |
| **Zeroclaw** | 20 | 41 | 无 | **极高活跃 / 内存危机** | OOM Bug 频发，微内核提案 |
| **CoPaw** | 50 | 50 | v1.0.2 + beta | **高活跃 / 快速修复合并** | 插件系统上线，性能优化 |
| **LobsterAI** | 3 | 37 | 无 | **高活跃 / 稳定性修复** | 集中修复并发与数据库 |
| **PicoClaw** | 16 | 24 | 无 | **极高活跃 / 协议兼容** | MCP 协议修复，流式输出 |
| **IronClaw** | 24 | 50 | 无 | **高活跃 / 重构清理** | Engine V2 迁移，WASM 升级 |
| **NullClaw** | - | 11 | 无 | **中活跃 / 稳定输出** | 修复连接中断，配置优化 |
| **NanoClaw** | - | 24 | 无 | **高活跃 / 企业化** | Slack Socket 模式，多租户 |
| **Moltis** | - | 23 | **20260409.01** | **极高活跃 / 质量巩固** | 批量修复兼容性，支持新模型 |
| **TinyClaw** | 0 | 0 | 无 | 停滞 | 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | 停滞 | 无活动 |
| **EasyClaw** | 0 | 0 | **v1.7.9** | 静默发布 | 仅发布二进制，无社区互动 |

---

## 3. OpenClaw 在生态中的定位

*   **规模与热度：** OpenClaw 拥有**绝对量级**的社区活跃度（500+ Issues/PRs），是其他同类项目的 5-10 倍。这表明其拥有最庞大的用户基础和贡献者群体。
*   **技术路线差异：**
    *   **OpenClaw:** 极其激进地探索 **Web3/Agent Economy**（如 RFC #49971 引入去中心化身份验证），这在其他纯功能型项目中未见。其内存架构（Grounded REM）也是最复杂的。
    *   **竞品：** 多数项目仍聚焦于工程落地，如 CoPaw 专注**插件生态**，IronClaw 专注 **WASM 安全沙箱**。
*   **社区现状：** OpenClaw 目前正面临**“规模陷阱”**——虽然功能最强大，但新版本（v4.9）引发的连锁崩溃（模块缺失、OOM）也最严重，导致社区怨气（Bug 报告）最重。

---

## 4. 共同关注的技术方向

今日多个项目不约而同地在以下方向发力，显示出行业共识：

*   **📌 MCP (Model Context Protocol) 深度集成**
    *   **涉及项目：** PicoClaw, NanoClaw, CoPaw, IronClaw
    *   **具体诉求：** 修复协议传输参数逻辑（PicoClaw #2460）、支持在沙箱/容器中加载 MCP 服务器、支持技能级 MCP 配置。**这表明“Agent 如何无缝调用外部工具”已成为核心基建。**

*   **📌 WebUI 可视化界面**
    *   **涉及项目：** NanoBot (#2972), CoPaw
    *   **具体诉求：** 纯 CLI 或仅依赖 IM 软件被认为交互效率低。社区强烈要求拥有独立的 Web 控制台来管理配置、查看日志和调试 Agent。

*   **📌 多模态与非文本交互**
    *   **涉及项目：** NanoBot (音视频), IronClaw (语音转文字), Moltis (流式输出修复)
    *   **具体诉求：** 支持图片、音频、视频输入，以及流式输出的稳定性优化。

*   **📌 内存与稳定性**
    *   **涉及项目：** OpenClaw (Memory架构), Zeroclaw (OOM修复), LobsterAI (数据库级联删除)
    *   **具体诉求：** 长对话中的 Token 管理和上下文压缩是普遍痛点。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 关键差异点 | 目标用户 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能型 OS** | 内存架构最复杂，支持 Web3 身份，生态最全但也最重。 | 极客开发者、Agent 经济探索者 |
| **Zeroclaw** | **高性能安全** | 采用微内核架构，专注 WASM 沙箱隔离和 Ollama 本地推理性能。 | 追求极致性能与本地隐私的用户 |
| **CoPaw** | **插件化平台** | 强调**插件系统** 和本地扩展能力，通过任务分发社区贡献。 | 需要高度定制化工作流的企业用户 |
| **NanoBot** | **轻量敏捷** | 早期仅支持 CLI，现快速补齐 WebUI 和多模态，架构相对简单。 | 需要快速部署、多通道集成的个人用户 |
| **IronClaw** | **企业级安全** | 基于 Rust + WASM，强隔离性，正进行 Engine V2 的大规模重构。 | 对安全性和合规性要求极高的 B 端用户 |
| **Moltis** | **模型兼容王** | 今日修复了 LM Studio, MiniMax, Ollama, GPT-5.x 等大量适配问题。 | 需要在多种本地/云端模型间切换的测试者 |
| **PicoClaw** | **边缘/移动端** | 特别关注 Android/Termux/Synology 等异构设备的兼容性。 | 爱好者、移动端开发者和嵌入式用户 |

---

## 6. 社区热度与成熟度

*   **第一梯队 (快速迭代/架构动荡期):**
    *   **OpenClaw, Zeroclaw, IronClaw**
    *   **特征：** 代码提交量极大，但同时伴随大量回归 Bug。OpenClaw 的安装崩溃和 Zeroclaw 的内存泄漏是典型的高速发展代价。用户群体最活跃，但对稳定性容忍度降低。

*   **第二梯队 (功能爆发期):**
    *   **NanoBot, PicoClaw, NanoClaw, CoPaw**
    *   **特征：** 正在积极补齐“欠债”功能（如 WebUI、Socket 模式、MCP 支持）。社区反馈正向，Bug 修复响应速度快（24小时内）。

*   **第三梯队 (质量巩固期):**
    *   **Moltis, NullClaw, LobsterAI**
    *   **特征：** **Moltis** 表现最佳，今日发布了包含大量修复的正式版。**LobsterAI** 在解决底层数据库一致性问题。这一梯队的产品力相对成熟，适合追求稳定现成方案的用户。

---

## 7. 值得关注的趋势信号

1.  **Agent 身份与信任验证:** OpenClaw 提出的 RFC (#49971) 结合 DID (去中心化身份) 标准，预示着 AI Agent 互操作性的下一个门槛将不再是 API 格式，而是**“你是谁”以及“能否信任你执行支付/签名”**。
2.  **异步任务队列:** NullClaw 提出的 **Outbox (发件箱)** 机制 和 NanoClaw 对 **Cron/Scheduler** 的修复，表明社区正在解决 Agent “可靠执行”的短板——即网络中断或 Agent 崩溃时，如何保证任务不丢失、状态不乱。
3.  **UI 交互的精细化:** 随着多模态能力增强，用户不再满足于简单的文本流。CoPaw 和 Moltis 的 PR 显示，开发者开始关注**“思维链泄露”、“流式渲染性能”和“移动端换行”**等细节体验。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 (2026-04-10)

## 1. 今日速览
NanoBot 项目在 2026-04-10 迎来了极高的开发与社区活跃度。过去 24 小时内共产生了 **71 条更新**（26 个 Issues + 45 个 PRs），显示出强劲的功能迭代势头。核心代码库正在经历重大架构演进，包括 **Web UI 的正式引入**、**多模态能力的扩展（音视频支持）** 以及 **Memory 机制的深度优化**。同时，社区反馈显示 v0.1.5 版本存在若干兼容性痛点，主要集中在飞书集成和环境配置上。目前无新版本发布，维护者正专注于处理大量的合并请求（PR）与 Bug 修复。

**活跃度评估：🔥 极高**
- 开发迭代速度极快，涉及核心架构变更。
- 社区响应迅速，但在新版本适配上出现阵痛。

---

## 2. 版本发布
**无新版本发布**

---

## 3. 项目进展
今日有多个核心功能 PR 被合并或处于活跃开发状态，显著推进了项目的成熟度：

*   **核心架构：Web UI 正式集成**
    *   **PR #2972**: [feat(web/ui): Add Web UI](https://github.com/HKUDS/nanobot/pull/2972)
    *   **进展**: 提出了一个完整的基于浏览器的管理界面，允许用户通过 `nanobot web` 命令启动。这将改变 NanoBot 仅依赖 CLI 或第三方平台的交互方式，极大降低使用门槛。关联 Issue #2949 的讨论热度也证实了社区对这一功能的强烈需求。

*   **多模态扩展：音视频支持**
    *   **PR #2908**: [feat: generalize multimodal support with audio/video handling](https://github.com/HKUDS/nanobot/pull/2908)
    *   **进展**: 将现有的图片处理管道通用化，扩展支持音频和视频输入。这标志着 NanoBot 从单一的文本/图像代理向全模态智能体迈进。

*   **体验优化：消息流与错误处理**
    *   **PR #2985**: [feat(agent): mid-turn message injection](https://github.com/HKUDS/nanobot/pull/2985) - 允许在 LLM 思考过程中注入用户消息，实现更及时的打断和交互。
    *   **PR #2963**: [fix(agent): deliver LLM errors to streaming channels](https://github.com/HKUDS/nanobot/pull/2963) (已合并) - 修复了流式传输通道（飞书、Discord 等）静默丢弃 LLM 错误信息的问题，提升了错误可观测性。

*   **稳定性修复：Gemma 4 模型适配与代理支持**
    *   **PR #2973**: [fix: strip <thought> blocks](https://github.com/HKUDS/nanobot/pull/2973) (已合并) - 解决了 Gemma 4 等模型推理标签泄露给用户的问题。

---

## 4. 社区热点
今日讨论最热烈的话题集中在用户交互体验与核心功能的缺失：

*   **#2949 [OPEN] Feature Discussion: Should nanobot have its own WebUI?**
    *   **链接**: [HKUDS/nanobot#2949](https://github.com/HKUDS/nanobot/issues/2949)
    *   **热度**: 8 条评论, 5 👍
    *   **分析**: 随着 PR #2972 提出正式的 Web UI 方案，社区正激烈讨论这是否符合 NanoBot "轻量级" 的定位。大多数用户支持拥有一个可视化的控制台来管理配置和查看日志，不再单纯依赖 IM 软件或命令行。

*   **#2892 [OPEN] 定时任务的机制 (Cron Mechanism)**
    *   **链接**: [HKUDS/nanobot#2892](https://github.com/HKUDS/nanobot/issues/2892)
    *   **热度**: 6 条评论
    *   **分析**: 用户反馈当前 Cron 任务设计反直觉——在 Agent 中创建任务不生效，必须重启 Gateway。这揭示了当前架构中 Agent 与 Gateway 状态同步的缺陷，是用户痛点的高发区。

*   **#2957 [OPEN] Bug: MEMORY.md 被清空**
    *   **链接**: [HKUDS/nanobot#2957](https://github.com/HKUDS/nanobot/issues/2957)
    *   **热度**: 1 条评论 (需高度关注)
    *   **分析**: 用户报告核心记忆文件被完全覆盖且无 Git 备份。这是数据安全级别的严重问题，引发了社区的恐慌。

---

## 5. Bug 与稳定性
今日报告的 Bug 较多，部分与最新的 v0.1.5 版本升级有关：

*   **[严重] 数据丢失风险**
    *   **#2957**: Dream 组件覆盖 `MEMORY.md` 且无备份。
    *   **#2980**: Git store 初始化错误，覆盖 workspace 下的 `.gitignore`。

*   **[高] v0.1.5 兼容性问题**
    *   **#2917**: 升级后找不到 Python 环境。
    *   **#2970**: 飞书通道无法启动，报错 `No module named 'lark_oapi.api.bot'` (依赖库版本不兼容)。
    *   **#2961**: 模型配置错误，飞书端报错 "Model Not Exist"。

*   **[中] 通道与逻辑错误**
    *   **#2947**: Runtime Context 元数据泄露给用户（发送了不该发送的系统提示）。
    *   **#2922**: Discord 通道回复空内容，而 Telegram 正常（通道适配 bug）。
    *   **#2977**: QQ/微信通道无法处理自然语言，仅能响应斜杠命令。

*   **已有 Fix PR**:
    *   PR #2973 修复了 Gemma 4 标签泄露问题。
    *   PR #2963 修复了流式通道错误丢弃问题。

---

## 6. 功能请求与路线图信号
用户提出的新功能指明了未来的迭代方向：

*   **会话模型热切换**
    *   **#2975**: 请求添加 `/model` 命令，允许在对话中切换 LLM 模型，无需重启 Bot。
*   **技能自动进化**
    *   **#2927**: 请求自动发现和生成技能，让 Agent 根据行为模式主动创建技能，而非仅依赖手动编写。
*   **统一会话**
    *   **#2798**: 请求跨平台（如 Discord 到 Telegram）共享同一个 Session 上下文。
*   **上下文自动压缩**
    *   **#2984**: 请求在接近 Token 限制时自动分层压缩上下文（时间截断 -> 摘要 -> 语义检索），防止爆 Token。

---

## 7. 用户反馈摘要
从 Issues 评论中提炼出的真实用户声音：

*   **痛点**:
    *   **定时任务体验差**: "创建了定时任务后，必须重新启动 gateway 才能生效，这似乎不符合使用习惯。" (#2892)
    *   **升级遇阻**: "升级到0.1.5版本后找不到python...之前用的好好的。" (#2917)
    *   **多模型切换繁琐**: 用户希望在对话中灵活切换模型，而不是修改配置文件重启。
*   **满意点**:
    *   社区对引入 **WebUI** 和 **多模态支持** 表现出极高的期待和正面反馈。

---

## 8. 待处理积压
建议维护者关注以下长期未决或影响较大的 Issue：

*   **#2641 [OPEN] Matrix verification**: 自 3 月底开启，关于端到端加密验证的跟踪，涉及隐私安全功能。
*   **#2798 [OPEN] Unified Session**: 虽有讨论但尚未实现，这是实现全平台无缝体验的关键。
*   **#2927 [OPEN] Automatic Skill Discovery**: 涉及 Agent 自进化的高级特性，目前仅有请求，尚无实施方案。

---
**分析师总结**: NanoBot 正处于功能爆发期，Web UI 和多模态是最大亮点。但 v0.1.5 版本引入的稳定性问题（特别是飞书集成和 Memory 管理）需要尽快通过 Hotfix 解决，以维护用户信心。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 (2026-04-10)

**分析师**: AI 智能体观察员
**数据源**: Zeroclaw (github.com/zeroclaw-labs/zeroclaw)
**日期**: 2026-04-10

---

### 1. 今日速览
Zeroclaw 项目今日处于**极高活跃度**状态，在过去 24 小时内产生了 **20 条 Issues** 和 **41 条 PRs**，显示出强劲的开发迭代势头和极高的社区关注度。
今日核心主题集中在**系统架构重构**（微内核化提案）与**稳定性修复**（内存溢出、Docker 构建）两方面。虽然无新版本发布，但大量针对 `Dockerfile.debian` 的修复补丁已提交，预计将很快缓解本地构建难题。

---

### 2. 版本发布
*无新版本发布*

---

### 3. 项目进展
尽管今日合并的 PR 数量较少（主要在待审核状态），但以下 PR 已通过审核或包含重要修复逻辑，代表了项目当前的推进方向：

*   **[PR #5565] (Open)**: **fix(agent): normalize empty successful tool output**
    *   **进展**: 针对自定义 Provider（如 Deepseek V3.2）在工具输出为空时返回 400 错误的问题，提出了标准化空输出的修复方案。
    *   **意义**: 提升了与非 OpenAI 兼容模型的互操作性。
*   **[PR #5568] (Closed)**: **fix(web): auto-fill pairing code in Docker environments**
    *   **进展**: 针对首次配对流程进行了 UX 优化，特别是在 Docker 环境中自动填充配对码。
    *   **意义**: 降低了新用户在容器化环境下的上手门槛。

---

### 4. 社区热点
以下是今日讨论热度最高、影响最广的议题：

*   **🔥 架构巨变：微内核化提案**
    *   **[PR #5559](https://github.com/zeroclaw-labs/zeroclaw/pull/5559)**: `feat(workspace): extract 10 workspace crates...`
    *   **摘要**: 提议将单体架构（289K LOC）拆分为微内核架构，支持特性门控和子系统裁剪。
    *   **反响**: 此举直击项目编译慢、体积大的痛点，是今日最具战略意义的讨论。
*   **💾 内存耗尽 (OOM) 危机**
    *   **[Issue #4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)** (⚠️ 9 评论, 3 👍): `auto_save stores [Memory context] recall blobs...`
    *   **摘要**: 自动保存功能导致记忆递归保存，迅速耗尽内存。
    *   **[Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)**: `consecutive OOM in wsl2`
    *   **摘要**: WSL2 环境下进程被 OOM Killer 杀死。
    *   **分析**: 内存管理已成为当前最大的用户体验阻碍，社区反响强烈。
*   **🐳 Docker 构建受阻**
    *   **[Issue #5541](https://github.com/zeroclaw-labs/zeroclaw/issues/5541)** + **[PR #5545](https://github.com/zeroclaw-labs/zeroclaw/pull/5545)**: 本地构建 Debian 镜像因多个 Bug 失败。
    *   **分析**: 影响所有尝试从源码构建容器镜像的用户，维护者已迅速响应提交修复。

---

### 5. Bug 与稳定性
今日报告的 Bug 数量较多，以下按严重程度排序：

*   **[S0 - 数据丢失/安全风险]**
    *   **[Issue #5537](https://github.com/zeroclaw-labs/zeroclaw/issues/5537)**: GPT 解析文件失败导致进入**错误死循环**。
    *   **[Issue #5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528)**: Email 频道配置逻辑错误。
    *   **[Issue #5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533)**: `allowed_path` 配置不符合预期，`contains` 逻辑失效（路径访问控制漏洞）。
    *   **[Issue #5535](https://github.com/zeroclaw-labs/zeroclaw/issues/5535)**: 飞书未保存附件解析失败。
*   **[S1 - 工作流阻塞]**
    *   **[Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)**: Ollama Provider 硬编码 `tool_count=0`，导致**工具调用完全失效**。
    *   **[Issue #5564](https://github.com/zeroclaw-labs/zeroclaw/issues/5564)**: 空工具输出导致后续 Provider 请求失败。
    *   **[Issue #5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553)**: Telegram 频道 Shell 工具返回原始 JSON 或空结果。
*   **[S2/S3 - 行为降级/轻微问题]**
    *   **[Issue #5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562)**: Windows 下 Shell 命令会闪过 CMD 窗口（视觉干扰）。
    *   **[Issue #5536](https://github.com/zeroclaw-labs/zeroclaw/issues/5536)**: 向量搜索得分百分比显示 Bug（未乘以 100）。
    *   **[Issue #5538](https://github.com/zeroclaw-labs/zeroclaw/issues/5538)** (已关闭): 顶层配置键 `api_key` 被错误报告为未知。

---

### 6. 功能请求与路线图信号
*   **Telegram 语音转文字**: **[Issue #5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509)** 提出增加语音消息支持，以缩小与 TypeScript 版本的差距。
*   **统一 Webhook/SOP**: **[Issue #5561](https://github.com/zeroclaw-labs/zeroclaw/issues/5561)** 建议将 SOP 引擎集成到 Gateway，支持事件驱动的 HTTP 触发器。
*   **向量搜索加速**: **[Issue #5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570)** 建议将 SQLite 的 O(n) 向量扫描替换为 ANN（近似最近邻）索引以提升性能。
*   **SOP 子命令缺失**: **[Issue #5560](https://github.com/zeroclaw-labs/zeroclaw/issues/5560)** 指出 CLI 中 `sop` 子命令未注册，文档与实现不符。

---

### 7. 用户反馈摘要
*   **痛点 - 资源占用**: 多位用户反馈 WSL2 和本地环境下 **ZeroClaw 内存占用过高**（达到 8.5GB+），甚至导致 OOM，严重影响了使用信心。
*   **痛点 - Ollama 兼容性**: 使用 Ollama 作为后端的用户无法使用**工具调用**功能，被认为是一个破坏性的 Bug。
*   **痛点 - 配置复杂**: `allowed_path` 与 `allowed_roots` 的命名不一致（**Issue #5533**）以及 `session_id` 不匹配导致自动保存的记忆不可见（**Issue #5550**），暴露了配置系统在使用上的困惑。
*   **好评 - 功能潜力**: 用户对 Google Workspace 工具的增强（**PR #5350**）和架构重构带来的性能潜力表示期待。

---

### 8. 待处理积压
*   **长期未决**: **[Issue #4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)** (Memory context recursive snowball) 自 3 月 28 日提出以来虽活跃但未解决，是悬在头顶的“达摩克利斯之剑”。
*   **待合并**: **[PR #5363](https://github.com/zeroclaw-labs/zeroclaw/pull/5363)** (Gateway 动态模型切换) 和 **[PR #5540](https://github.com/zeroclaw-labs/zeroclaw/pull/5540)** (内存恢复强化) 等高价值 PR 已开放数日，等待合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 2026-04-10

## 📊 今日速览
PicoClaw 项目今日处于**极高活跃度**状态，过去 24 小时内处理了 **16 条 Issues** 和 **24 条 Pull Requests**，显示出强劲的开发动力和社区响应速度。核心工作集中在**多通道并发处理**、**流式输出修复**以及**MCP (Model Context Protocol) 协议兼容性**的提升上。虽然今日无新版本发布，但大量依赖库更新和核心逻辑补丁预示着 v0.2.6 之后的迭代正在稳步推进。值得注意的是，社区反馈集中在 WebUI 交互体验与 Docker 安全性配置上，显示了用户对生产环境部署的关注。

---

## 🔖 版本发布
*今日无新版本发布。*

---

## 🚀 项目进展
今日代码库更新频繁，以下 PR 的合并或提交标志着项目的重要推进：

*   **[PR #2462] (Open)** - **[codex] 修复流式输出与 Telegram 重复重试问题**  
    *   **进展：** 针对 Android/Termux 等边缘环境下的 OpenAI OAuth (gpt-5.4) 流式响应进行了健壮性修复。
    *   **意义：** 提升了在非标准环境下（尤其是移动端和弱网环境）AI 对话的稳定性。
    *   **链接：** [sipeed/picoclaw#2462](https://github.com/sipeed/picoclaw/pull/2462)

*   **[PR #2460] (Open)** - **[fix(mcp)] 修复 CallTool 参数为空时的传递逻辑**  
    *   **进展：** 解决了在调用无参数 MCP 工具时传递 `nil` 导致 Zod 校验失败的问题，改为传递空对象。
    *   **意义：** 关键的协议兼容性修复，确保了与基于 TypeScript SDK 构建的 MCP 服务器的互操作性。
    *   **链接：** [sipeed/picoclaw#2460](https://github.com/sipeed/picoclaw/pull/2460)

*   **[PR #2449] (Open)** - **[fix(chat)] 同步工具调用摘要与助手输出**  
    *   **进展：** 修复了 Web Chat 中工具调用摘要与最终回复文本显示不一致的问题。
    *   **意义：** 直接改善了 Web 端用户在 AI 使用工具（如写代码、查资料）时的阅读体验。
    *   **链接：** [sipeed/picoclaw#2449](https://github.com/sipeed/picoclaw/pull/2449)

*   **[PR #2442] (Open)** - **[refactor] 重构技能注册表并增加 GitHub 技能发现**  
    *   **进展：** 引入 GitHub 作为第一梯队的技能注册源，并重构了注册表逻辑。
    *   **意义：** 这是一个重要的功能增强，将极大扩展 PicoClaw 的插件生态获取渠道。
    *   **链接：** [sipeed/picoclaw#2442](https://github.com/sipeed/picoclaw/pull/2442)

*   **[PR #2420] (Closed)** - **[docs] 修正工具描述中的转义语义**  
    *   **进展：** 移除了特定于 CLI Provider 的假设，使工具文档更具普适性。
    *   **意义：** 提升了跨 Provider 使用的文档准确性。
    *   **链接：** [sipeed/picoclaw#2420](https://github.com/sipeed/picoclaw/pull/2420)

---

## 🔥 社区热点
*今日社区讨论主要集中在核心架构的透明度与功能请求上：*

*   **[Issue #2433] (👍 2)** - **"官方 Discord 是否需要派驻官方人员？"**  
    *   **内容：** 用户强烈反映 Discord 社区缺乏官方维护，导致重大更新说明滞后，新旧文档断层。
    *   **分析：** 这反映了项目快速发展与社区运营之间的脱节。用户认为 PicoClaw 潜力巨大，但缺乏官方互动可能导致社区流失。
    *   **链接：** [sipeed/picoclaw#2433](https://github.com/sipeed/picoclaw/issues/2433)

*   **[Issue #2376]** - **"选项：禁用回车键发送消息"**  
    *   **内容：** Android 用户请求在移动端添加换行功能，而不是直接发送消息。
    *   **分析：** 典型的移动端 UX 优化请求，随着移动端部署增多，此类交互细节优化呼声渐高。
    *   **链接：** [sipeed/picoclaw#2376](https://github.com/sipeed/picoclaw/issues/2376)

---

## 🐛 Bug 与稳定性
*今日报告的 Bug 涉及消息处理逻辑、安全配置及 UI 显示，部分已有修复方案：*

1.  **[严重] 并发消息丢失与回显问题**
    *   **Issue:** [#2447](https://github.com/sipeed/picoclaw/issues/2447) - 仅处理最后一条消息。
    *   **Issue:** [#2446](https://github.com/sipeed/picoclaw/issues/2446) - 多通道并发时消息回显。
    *   **状态：** 新开 Issue，待修复。
    *   **影响：** 严重影响多用户或高并发场景下的使用体验。

2.  **[中等] WebUI 思维链泄露**
    *   **Issue:** [#2448](https://github.com/sipeed/picoclaw/issues/2448) - Agent 推理过程与回复内容混杂显示。
    *   **状态：** 新开 Issue，待修复。

3.  **[中等] Docker 安全/只读文件系统兼容性**
    *   **Issue:** [#2440](https://github.com/sipeed/picoclaw/issues/2440) - 运行时写入文件过多，不兼容 ReadonlyRootfs。
    *   **Issue:** [#2426](https://github.com/sipeed/picoclaw/issues/2426) - 工作区外文件访问拒绝。
    *   **状态：** 需文档说明或代码重构。

4.  **[低] UI 本地化与显示瑕疵**
    *   **Issue:** [#2367](https://github.com/sipeed/picoclaw/issues/2367) - 英文模式下设置页标题仍为中文。

---

## 💡 功能请求与路线图信号
从 Issues 和 PRs 中嗅探到的未来开发方向：

*   **MCP 深度集成：** [Issue #2444](https://github.com/sipeed/picoclaw/issues/2444) 提出支持在 `.security.yml` 中存储 MCP 服务密钥。考虑到 PR #2460 对 MCP 协议的修复，MCP 相关功能是当前开发的重中之重。
*   **技能生态扩展：** PR #2442 显示项目正在建立基于 GitHub 的技能发现机制，预示着未来插件安装将更加便捷。
*   **安全性增强：** 关于 Docker 隔离和 Token 认证机制（Issue #2439, #2438）的讨论，表明项目正在向企业级/生产级安全标准靠拢。

---

## 🗣️ 用户反馈摘要
*来自真实使用场景的声音：*

*   **痛点：** "Console 模式下输入任何字符会变成两个字符" ([Issue #2429](https://github.com/sipeed/picoclaw/issues/2429))，反映出底层输入处理存在回归或 Bug。
*   **场景：** 用户正在尝试在 **Synology NAS** ([Issue #2448](https://github.com/sipeed/picoclaw/issues/2448)) 和 **Android TV/Termux** ([PR #2462](https://github.com/sipeed/picoclaw/pull/2462)) 等异构设备上部署 PicoClaw，暴露了跨平台兼容性问题。
*   **满意点：** 用户在 Issue #2433 中表达了对产品潜力的认可，认为其相对竞品（Zeroclaw, Nanobot）"潜力十足"。

---

## ⚠️ 待处理积压
*提醒维护者关注的长期或悬而未决的问题：*

*   **Issue #795:** GLM Coding Plan API 在多轮对话后报错 500。虽已关闭，但评论显示可能在特定版本下仍存在，需持续监控 GLM 接口的稳定性。
*   **Issue #2337 (已关闭):** 文档中关于 JSON 转义的描述曾引起混淆，虽然 PR #2420 已修复，但需确认所有 Provider 的文档已同步更新。
*   **Issue #2433 (社区运营):** 这是一个非代码类的积压问题。官方 Discord 的缺乏维护正在影响社区口碑，建议项目管理者介入。

---

**总结：** PicoClaw 今日保持了极高的代码活跃度，重点在于修补边缘情况和增强生态能力。虽然并发处理和 UI 体验上出现了一些新的 Bug，但社区的快速反馈和开发者的迅速响应体现了项目良好的健康度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目每日动态日报
**日期**: 2026-04-10
**分析对象**: qwibitai/nanoclaw

---

## 1. 今日速览
NanoClaw 项目今日处于**极高活跃度**状态，过去 24 小时内处理了 **24 条 PR 更新**，其中 14 条已完成合并或关闭，显示出维护团队正在积极整合代码以准备发布新版本。核心开发重点集中在**系统稳定性修复**（如会话清理、容器权限、超时控制）和**企业级功能增强**（如 Slack Socket Mode、多租户代理）。值得关注的是，Windows 平台的兼容性问题今日被曝光并修复，同时针对 Anthropic OAuth 计费策略变化的用户反馈正在引发社区对 API Key 认证方式的重新审视。

---

## 2. 版本发布
*暂无新版本发布。*

---

## 3. 项目进展
今日代码库经历了大规模的整合，以下 PR 的合并显著提升了项目的健壮性和功能性：

*   **[Scheduler & Container] 修复任务调度与容器权限问题**
    *   **feat: auto-create heartbeat for trigger-required groups** [#1714](https://github.com/qwibitai/nanoclaw/pull/1714): 修复了在特定配置下，调度器可能响应错误聊天消息的 Bug，确保了多任务环境下的隔离性。
    *   **fix: chown .claude session dir** [#1713](https://github.com/qwibitai/nanoclaw/pull/1713): 解决了容器内用户因权限不足无法写入会话目录的问题，改善了跨平台部署体验。
    *   **fix: abort hung SDK queries** [#1572](https://github.com/qwibitai/nanoclaw/pull/1572): 引入 `AbortController` 强制中断挂起的 SDK 查询，防止因网络故障或限流导致的容器永久僵死。

*   **[Channel Experience] 优化交互细节**
    *   **fix: trigger pattern matches anywhere** [#1711](https://github.com/qwibitai/nanoclaw/pull/1711): 允许触发词出现在消息中间而非仅限于开头，更符合自然对话习惯。
    *   **fix: replies and quotes... trigger response** [#1712](https://github.com/qwibitai/nanoclaw/pull/1712): 现在回复或引用机器人消息也会触发响应，极大地增强了交互的连贯性。

*   **[System] 修复端口占用与启动挂起**
    *   **fix: Retry listen on EADDRINUSE** [#1550](https://github.com/qwibitai/nanoclaw/pull/1550): 增加了端口重试机制，解决了崩溃重启后因端口占用导致服务无法启动的问题。

---

## 4. 社区热点
今日最活跃的讨论集中在 OAuth 计费变更与证书问题上：

*   **[讨论] OAuth Token 计费策略变更引发关注**
    *   **Issue #1620** - [OAuth token auth now bills as extra usage...](https://github.com/qwibitai/nanoclaw/issues/1620)
    *   **热度**: 6 条评论
    *   **分析**: 用户指出 Anthropic 的新政策导致使用 OAuth Token（默认配置）将从“订阅额度”转为“按量额外计费”。社区强烈建议官方文档应优先推荐 API Key 配置，以免用户产生意外高额账单。这可能促使项目调整默认安装指引。

*   **[故障] 官网 SSL 证书失效**
    *   **Issue #1503** - [nanoclaw.dev has an invalid ssl cert](https://github.com/qwibitai/nanoclaw/issues/1503)
    *   **热度**: 15 条评论
    *   **分析**: 项目主域名证书过期导致用户无法访问，虽有临时补救讨论，但问题自 3 月 28 日持续至 4 月 9 日，显示出基础设施维护的响应滞后。

---

## 5. Bug 与稳定性
今日报告了两个具体的 Bug，其中一个已迅速修复：

*   **[已修复 - 高危] Windows 兼容性崩溃**
    *   **Issue #1719**: session-cleanup.ts 硬编码了 `/bin/bash` 导致 Windows 下运行失败。
    *   **状态**: 已在今日迅速关闭。
    *   **影响**: 阻断了 Windows 用户（Git Bash/Node.js 环境）的正常使用。

*   **[待处理 - 严重] 容器挂起与任务雪崩**
    *   **Issue #1718**: [bug: missing .catch() on outputChain...](https://github.com/qwibitai/nanoclaw/issues/1718)
    *   **详情**: 由于 Promise 链缺少错误处理，如果 `sendMessage` 抛出异常，会导致 `runContainerAgent` 永久挂起，并触发调度器的“重复分发”Bug。
    *   **影响**: 可能导致系统中出现大量未处理的僵尸任务。
    *   **当前状态**: 尚未合并 Fix。

---

## 6. 功能请求与路线图信号
今日涌入的新 PR 揭示了下一阶段的核心发展方向：

*   **[新功能] 企业级集成增强**
    *   **PR #1721**: [feat: Slack Socket Mode...](https://github.com/qwibitai/nanoclaw/pull/1721) - 支持 Socket Mode 和多工作区，意味着单一 NanoClaw 实例可服务多个 Slack 团队。
    *   **PR #1720**: [feat: multi-tenant session delegation](https://github.com/qwibitai/nanoclaw/pull/1720) - 引入“路由器模式”，允许轻量级代理将对话委托给专业代理组。

*   **[新功能] MCP 协议扩展**
    *   **PR #1515**: [feat: load group-level MCP servers](https://github.com/qwibitai/nanoclaw/pull/1515) - 允许通过 `.mcp.json` 配置外部 MCP 服务（如 Home Assistant），增强了 AI 的家居自动化和控制能力。

*   **[新功能] 运维工具**
    *   **PR #1716**: [feat: add /check-contribution...](https://github.com/qwibitai/nanoclaw/pull/1716) - 添加了一个内置技能，用于在提交 PR 前自动检查代码质量和格式，降低了贡献者门槛。

---

## 7. 用户反馈摘要
*   **成本焦虑**: 用户对 Anthropic 的计费政策变动非常敏感，强烈希望项目提供更清晰的“成本控制”配置指南（如强制推荐 API Key）。
*   **部署体验**: Windows 用户和 Unraid 用户反馈在初始化配置时仍需手动编辑文件（如注入 API Key），希望开箱即用体验更好（PR #1698 已尝试解决此问题）。
*   **交互细节**: 用户对“必须@在开头”的限制感到困扰，PR #1711 的合并表明团队正在积极听取反馈并优化自然交互体验。

---

## 8. 待处理积压
虽然今日处理了 14 个 PR，但以下长期议题仍需关注：

*   **基础设施**: **nanoclaw.dev SSL 证书** (#1503) 问题已持续两周，需尽快续期以免影响新用户触达。
*   **核心架构**: **Scheduler 双重触发问题** (#1338) 的修复 PR 仍处于 OPEN 状态，该问题涉及服务重启时的任务状态一致性，属于潜在的稳定性隐患。
*   **E2EE 支持**: **Matrix Channel** (#1624) 的完整 E2EE 实现仍在开发中，对于关注隐私的用户是一个重要里程碑。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 2026-04-10

## 📅 今日速览
NullClaw 项目今日处于**极高活跃度**状态，过去 24 小时内合并了 11 个 PR，关闭了 4 个长期悬而未决的 Issue。核心开发聚焦于**多通道稳定性修复**与**配置生成体验优化**，显著解决了社区反馈强烈的 QQ 连接中断、配置文件格式错乱以及 API URL 解析错误等问题。同时，随着持久化出站投递和 Cron 子agent等高级功能 PR 的提出，项目正朝着更高可靠性和自动化能力的方向演进。

---

## 🚀 版本发布
**无新版本发布**

---

## 📈 项目进展
今日共有 **11 个 PR 成功合并**，主要集中在修复缺陷与优化用户交互体验：

*   **多平台稳定性修复**：
    *   **[fix(qq)](#732)**: 针对耗时任务导致的 QQ 连接中断问题 (#722)，实现了延迟回复机制，当 `msg_id` 失效时自动降级为普通消息发送，确保长任务回复不丢失。
    *   **[fix(ollama)](#744)**: 规范了 Ollama 适配器中的工具别名 (`scheduler_tool` 统一为 `schedule`)，修复了调度器调用不一致的问题。
    *   **[fix(build)](#792)**: 更新了 `wasm3` 和 `websocket` 依赖的 hash 锁，修复了因上游仓库 force-push 导致的构建失败。

*   **配置与交互体验增强**：
    *   **[fix(onboarding)](#794)**: 修复了交互式引导生成配置文件内容被压缩成一行的问题 (#765)，现生成的 `config.json` 具有正确的格式化和缩进，提升了可读性。
    *   **[fix(config)](#728)**: 修正了自定义 Provider (如 Cloudflare AI) 的长 URL 路径解析错误 (#721)，现在能正确分割 Base URL 和 Model ID。
    *   **[feat(model-picker)](#726)**: 优化了 Telegram 上的 `/model` 交互选择器，增加了分页按钮和原地替换功能。

*   **架构重构与新协议支持**：
    *   **[feat(skills)](#735)**: 实现了通过 Web 原生发现并安装技能的功能，支持 `.well-known` URI，响应了社区对技能分发标准化的需求 (#734)。

---

## 🔥 社区热点
*   **[#730 feat(channels): add durable outbound delivery outbox](https://github.com/nullclaw/nullclaw/pull/730)**
    *   **状态**: 待合并
    *   **热度**: ⭐⭐⭐⭐⭐
    *   **分析**: 提出为消息出站增加持久化 Outbox（发件箱）机制。这是解决网络抖动、进程重启导致消息丢失的根本性架构升级。社区高度关注此 PR 的进展，因为它是 NullClaw 用于生产环境的关键可靠性保障。

*   **[#783 feat(cron): cron subagent, run history, JSON output, security hardening](https://github.com/nullclaw/nullclaw/pull/783)**
    *   **状态**: 待合并
    *   **热度**: ⭐⭐⭐⭐
    *   **分析**: 引入了基于数据库的 Cron 调度子 Agent，支持历史记录、时区偏移和安全加固。这标志着 NullClaw 正从简单的被动响应工具向具备自动化任务调度能力的平台演进。

---

## 🐛 Bug 与稳定性
今日报告和修复的 Bug 按严重程度排列：

1.  **[严重] Shell 工具在原生 Linux 下无法运行**
    *   **链接**: [#791](https://github.com/nullclaw/nullclaw/issues/791)
    *   **状态**: 🔴 新开
    *   **详情**: 用户报告在物理机 Linux 环境下，即便配置了全权限，Shell 工具依然无法运行。这是一个阻塞性 Bug，目前尚无修复 PR。

2.  **[中等] System Prompt 错误继承子 Agent 配置**
    *   **链接**: [#793](https://github.com/nullclaw/nullclaw/issues/793)
    *   **状态**: 🟠 新开
    *   **详情**: 主 Agent 的 System Prompt 会错误地注入第一个子 Agent 的 Prompt，导致指令污染。影响多 Agent 协作的准确性。

3.  **[已修复] 配置 URL 解析错误 (已关闭 #721)**
    *   **链接**: [#721](https://github.com/nullclaw/nullclaw/issues/721)
    *   **状态**: 🟢 已修复
    *   **详情**: 复杂的自定义 API URL（如 Cloudflare）此前会导致解析错误，今日已通过 PR #728 合并修复。

4.  **[已修复] QQ 耗时任务断连 (已关闭 #722)**
    *   **链接**: [#722](https://github.com/nullclaw/nullclaw/issues/722)
    *   **状态**: 🟢 已修复
    *   **详情**: QQ 机器人在处理慢速 AI 响应时会断开连接的问题，今日已通过 PR #732 合并修复。

---

## 💡 功能请求与路线图信号
*   **技能安装标准化**: 社区提出支持 `.well-known` URI 技能安装 (#734)，对应 PR #735 已合并。这表明项目正在积极拥抱 **Agent Skills** 的行业标准，未来将更容易安装第三方扩展。
*   **Outbox 模式**: PR #730 提出的持久化消息队列需求，暗示下一阶段 Roadmap 的重点将是**消息交付的可靠性**与**异步处理能力**。

---

## 🗣️ 用户反馈摘要
*   **痛点**: 用户 `dadapapapa` 连续报告了 Linux Shell 不可用 (#791) 和 JSON 配置格式错乱 (#765)，反映出用户对**原生环境兼容性**和**配置文件可维护性**非常敏感。
*   **满意度**: 合并的多个 PR（如 #726 Telegram 交互优化）显示开发者对终端用户体验（UX）的重视，特别是针对移动端平台的交互流畅度。

---

## 📝 待处理积压
*   **[#789 Fix gateway bind and rate limit safeguards](https://github.com/nullclaw/nullclaw/pull/789)** (OPEN)
    *   提醒: 这是一个安全相关的 PR，涉及网关公网绑定安全性和速率限制。虽然处于活跃更新状态，但建议优先进行 Code Review 以确保安全合规。
*   **[#727 feat(model-picker): add interactive multi-provider selection](https://github.com/nullclaw/nullclaw/pull/727)** (OPEN)
    *   提醒: 此 PR 已提交较久（3月27日），且今日有更新。它涉及跨多个平台的交互逻辑，建议尽快确认合并意向，避免长期冲突。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-04-10)

## 1. 今日速览
IronClaw 项目今日处于**高度活跃**状态，开发重心明显向 **Engine V2 迁移**与 **WASM 运行时升级**倾斜。过去 24 小时内共处理了 74 个更新项（24 Issues + 50 PRs），虽然版本发布频次暂时停滞，但代码库正在经历大规模的清理（V1 代码移除）和重构（架构简化）。值得关注的是，社区反馈显示了 OAuth 集成和 Slack/Notion 等第三方工具连接存在不稳定性，但核心团队正优先处理 WASM 依赖升级和 Gateway 体验优化。

---

## 2. 版本发布
**无新版本发布。**
*注：项目目前处于快速迭代期，大量重构 PR（如 Engine V2 迁移）正在合并中，可能正在酝酿 v0.20.0 或下一个主要版本。*

---

## 3. 项目进展
今日合并与活跃的核心 PR 主要集中在基础设施重构与运维体验提升：

*   **[核心架构] Engine V2 彻底迁移**
    *   **[#2193](https://github.com/nearai/ironclaw/issues/2193)**: 社区正在推进彻底移除 V1 Agent Loop 代码的行动。V2 引擎已被确认完整实现（281 个单元测试），此举将清理约 35,000 行代码，显著降低维护负担。
    *   **[#2192](https://github.com/nearai/ironclaw/issues/2192)**: 发起架构简化的讨论，旨在将现有的 7 个顶层抽象（Tools, Channels 等） collapsing 为 3 个，以降低新开发者的认知门槛。

*   **[安全与运行时] WASM 依赖大版本升级**
    *   **[#2224](https://github.com/nearai/ironclaw/pull/2224)**: 关键 PR，将 `wasmtime` 从 v28 升级至 v43.0.1。这不仅修复了 `cargo-deny` 扫描出的安全漏洞，还适配了最新的 WASI 组件模型，增强了 WASM 工具和通道的稳定性。

*   **[部署与运维] Docker 与 Gateway 优化**
    *   **[#2210](https://github.com/nearai/ironclaw/pull/2210)**: 已合并。优化了 Docker 构建流程，支持在 Staging 镜像中预构建 WASM 扩展，加快 CI/CD 速度。
    *   **[#2159](https://github.com/nearai/ironclaw/pull/2159)**: 开放中。将 Webhook 路由合并至 Gateway 服务器，解决了在 Railway 等 PaaS 平台上因仅暴露单一端口（3000）导致 Webhook 不可达的问题。
    *   **[#2172](https://github.com/nearai/ironclaw/pull/2172)**: 修复了认证过程中的 SSE 事件重复发送问题，消除了用户在授权时看到的冗余文本提示。

---

## 4. 社区热点
今日讨论热度集中在用户部署体验与核心功能请求：

*   **[#2223](https://github.com/nearai/ironclaw/issues/2223) - Feature: Add Voice Note Transcription**
    *   **内容**: 请求集成 Whisper Large v3 模型，以支持 Telegram 语音笔记的自动转录。
    *   **趋势**: 多模态交互需求上升，用户期望 AI 助手能处理非文本输入。

*   **[#2214](https://github.com/nearai/ironclaw/pull/2214) - MCP client support in sandboxed container workers**
    *   **内容**: XL 级别的 PR，旨在让 Docker 沙盒容器能够访问 MCP 工具。
    *   **趋势**: 开发者对隔离环境（Sandbox）下的工具扩展能力（MCP）有极高需求。

*   **[#2203](https://github.com/nearai/ironclaw/pull/2203) - feat: add extensible deployment profiles**
    *   **内容**: 引入 `IRONCLAW_PROFILE` 环境变量，通过预设配置简化部署。
    *   **反响**: 解决了配置繁琐的痛点，被社区认为是对运维友好的重要改进。

---

## 5. Bug 与稳定性
今日报告的 Bug 涉及认证、集成与配置解析，部分已有修复方案：

*   **[高危] Google OAuth 广泛失效**
    *   **[#902](https://github.com/nearai/ironclaw/issues/902)**, **[#1992](https://github.com/nearai/ironclaw/issues/1992)**, **[#1829](https://github.com/nearai/ironclaw/issues/1829)**: 多个报告指出 Google Suite 工具的 OAuth 被阻止，提示 "Access blocked" 或缺少 `client_id`。这可能是由于 Google 政策变更或 IronClaw 配置不符合新标准导致的回归。
    *   **状态**: 已关闭，但用户反馈持续，需验证修复有效性。

*   **[中危] Registry 配置误判导致扩展不可用**
    *   **[#2221](https://github.com/nearai/ironclaw/issues/2221)**: `~/.cargo/registry` 被错误识别为空插件注册表，导致 `ironclaw registry list` 失效。
    *   **Fix**: **[#2222](https://github.com/nearai/ironclaw/pull/2222)** 已提交修复 PR，增加了更严格的检查逻辑。

*   **[中危] Slack 与 Notion 集成故障**
    *   **[#1997](https://github.com/nearai/ironclaw/issues/1997)** (Slack App 配置缺失), **[#1998](https://github.com/nearai/ironclaw/issues/1998)** (连接流中断), **[#2087](https://github.com/nearai/ironclaw/issues/2087)** (Notion 设置无响应)。
    *   **状态**: Open，涉及第三方集成的健壮性问题。

*   **[中危] URL Scheme 安全漏洞**
    *   **[#2206](https://github.com/nearai/ironclaw/issues/2206)**: Engine V2 的 `tool_activate` 未对 `auth_url` 进行 scheme 校验，可能导致 `javascript:` 或 `file://` 等恶意 URL 被直接传递给前端。

---

## 6. 功能请求与路线图信号
*   **Prometheus 监控支持**: 由自动测试 Issue **[#2184](https://github.com/nearai/ironclaw/issues/2184)** 提出，请求添加 `/metrics` 端点以暴露延迟、工具调用次数等指标。这表明项目正向生产级可观测性靠拢。
*   **文档整合**: **[#2188](https://github.com/nearai/ironclaw/issues/2188)** 提出将独立的 `ironclaw-docs` 仓库迁移回主仓库，以解决文档分散、难以查找的问题（如 Issue #1174）。
*   **V2 引擎全面接管**: **[#2193](https://github.com/nearai/ironclaw/issues/2193)** 明确列出移除 V1 代码的时间表，暗示下一个大版本将完全基于 V2 架构。

---

## 7. 用户反馈摘要
*   **痛点 - 复杂的配置**: 用户对大量的环境变量配置感到疲惫，PR **[#2203](https://github.com/nearai/ironclaw/pull/2203)** 的提出直接响应了这一痛点。
*   **痛点 - 集成不顺畅**: 多位用户报告在设置 Gmail、Slack 和 Notion 时遇到“无响应”或“连接失败”，尤其是 OAuth 流程经常需要第二次尝试才能成功（Issue **[#2001](https://github.com/nearai/ironclaw/issues/2001)**）。
*   **痛点 - 网络限制**: Issue **[#1754](https://github.com/nearai/ironclaw/issues/1754)** 指出私有网络部署（自建模型）时，系统强制要求 HTTPS 的 TLS 校验过于严格，导致内网 HTTP 代理无法直接使用。

---

## 8. 待处理积压
以下 Issues 长期未合并或处于 Open 状态，建议维护者关注：
*   **[#1764](https://github.com/nearai/ironclaw/pull/1764)**: *Abound demo deployment*。这是一个 XL 级别的 PR，涉及 Responses API 修复、凭证注入和技能集成，已开放数周但仍处于 Open 状态，可能阻塞了特定功能的发布。
*   **[#1446](https://github.com/nearai/ironclaw/pull/1446)**: *Aliyun Coding Plan support*。已开放较长时间，涉及阿里云百炼平台的集成，区域化部署用户可能在等待此功能。
*   **[#2180](https://github.com/nearai/ironclaw/issues/2180)**: MCP tools 在 Docker 沙盒中不可用。虽然有 PR **[#2214](https://github.com/nearai/ironclaw/pull/2214)** 正在处理，但该问题限制了容器化部署的扩展性，需尽快推进。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-10)

**分析师**：AI 智能体与开源项目分析助手
**数据来源**：github.com/netease-youdao/LobsterAI
**报告日期**：2026-04-10

---

### 1. 今日速览
今日 LobsterAI 项目呈现出极高的维护活跃度，处于**高频迭代与紧急修复并重**的状态。过去 24 小时内，仓库处理了 **37 条 Pull Requests**，其中 **13 条已合并**，表明开发团队正全力推进功能开发与系统稳定性优化。代码提交集中在 `OpenClaw` 网关配置、`Cowork` 协作引擎的并发处理以及 UI 交互修复上。与此同时，社区反馈了 **3 个新 Bug**，主要集中在 macOS 环境下的崩溃、会话执行异常及国际化（i18n）缺失问题。当前项目虽然代码提交频繁，但待合并的 PR 积压（24 个）较多，建议关注测试与发布的平衡。

---

### 2. 版本发布
*   **当前状态**：无新版本发布。
*   **分析**：鉴于今日大量修复了数据库级联删除、并发竞争及内存迁移等核心稳定性问题，预计下一次版本发布将重点侧重于修复已知崩溃和数据一致性风险。

---

### 3. 项目进展
今日合并及推进的关键进展主要集中在**内核稳定性**与**配置重构**：

*   **OpenClaw 网关配置重构**：[PR #1611](https://github.com/netease-youdao/LobsterAI/pull/1611) 修复了因网关配置 Schema 兼容性导致的重启循环问题，并移除了 `accountId` 等不兼容字段，同时引入了环境变量占位符机制 [PR #1606](https://github.com/netease-youdao/LobsterAI/pull/1606) 以增强密钥安全性。
*   **SQLite 数据库完整性增强**：[PR #1597](https://github.com/netease-youdao/LobsterAI/pull/1597) 修复了外键约束未启用导致级联删除失效的问题，这将有效解决长期以来的孤儿数据残留问题。
*   **并发与异常处理优化**：[PR #1602](https://github.com/netease-youdao/LobsterAI/pull/1602) 解决了 `addMessage` 的序列号并发竞争问题，确保消息在多线程环境下的顺序正确性；[PR #1603](https://github.com/netease-youdao/LobsterAI/pull/1603) 则修复了会话启动异常被吞没及重复报错的 UX 问题。
*   **Agent ID 机制改进**：[PR #1584](https://github.com/netease-youdao/LobsterAI/pull/1584) 提出 Agent ID 生成机制的变更，从基于名称生成改为使用短 UUID，彻底解决了同名 Agent 导致的数据“复活”隐患。

---

### 4. 社区热点
*   **[Issue #1589: 会话与定时任务功能异常](https://github.com/netease-youdao/LobsterAI/issues/1589)**
    *   **热度**：新增，macOS 用户严重反馈。
    *   **详情**：用户报告在 2026.04.08 版本的 macOS 环境下，会话执行和定时任务均出现运行时错误，并附带了详细日志截图。
*   **[Issue #1587: 首次启动崩溃](https://github.com/netease-youdao/LobsterAI/issues/1587)**
    *   **热度**：新增，阻碍级 Bug。
    *   **详情**：更新最新版本后应用启动即闪退。该问题可能与 [PR #1595](https://github.com/netease-youdao/LobsterAI/pull/1595) 中修复的“内存迁移失败导致无法重试”问题有关，需重点关注启动流程中的数据迁移逻辑。
*   **[PR #1610: 会话保持时长配置](https://github.com/netease-youdao/LobsterAI/pull/1610)**
    *   **热度**：高关注度功能变更。
    *   **详情**：新增了会话保持时长的配置能力（默认30天），并修复了时区导致的任务时间漂移问题。这一变更将显著改善长期运行 Agent 的体验。

---

### 5. Bug 与稳定性
以下为今日报告需优先处理的稳定性问题：

1.  **[严重] macOS 更新后启动闪退** [Issue #1587](https://github.com/netease-youdao/LobsterAI/issues/1587)
    *   **现象**：更新至最新版后应用无法启动。
    *   **关联**：疑似与数据迁移异常有关，[PR #1609](https://github.com/netease-youdao/LobsterAI/pull/1609) 和 [PR #1595](https://github.com/netease-youdao/LobsterAI/pull/1595) 已修复迁移逻辑中“失败后无法重试”的代码缺陷，建议验证该修复是否解决了此崩溃。
2.  **[严重] 会话执行异常与定时任务失败** [Issue #1589](https://github.com/netease-youdao/LobsterAI/issues/1589)
    *   **现象**：运行时抛出未知错误，影响核心功能。
    *   **状态**：待排查，需结合日志分析。
3.  **[中等] 国际化 (i18n) 缺失** [Issue #1586](https://github.com/netease-youdao/LobsterAI/issues/1586)
    *   **现象**：切换至英文语言后，“条款”、“工具风格”等部分页面仍显示中文。
    *   **影响**：影响海外用户体验，非阻塞性但需完善翻译文件。

---

### 6. 功能请求与路线图信号
*   **搜索功能增强**：[PR #1594](https://github.com/netease-youdao/LobsterAI/pull/1594) 正在推进“搜索任务”功能的改进，支持匹配消息内容和跨 Agent 搜索，响应了用户对历史信息检索的深层需求。
*   **会话生命周期管理**：[PR #1610](https://github.com/netease-youdao/LobsterAI/pull/1610) 引入会话保持时长配置，预示着项目正在向更企业级的长期会话管理方向演进。
*   **安全性提升**：[PR #1606](https://github.com/netease-youdao/LobsterAI/pull/1606) 将 NetEase Bee 密钥改为环境变量占位符，表明项目正在全面加固配置文件的安全性。

---

### 7. 用户反馈摘要
*   **痛点**：**数据一致性**是当前最大的痛点。用户反馈 Agent 删除后数据残留（如 PR #1584 描述）、更新应用后闪退（Issue #1587）等问题，说明系统在处理生命周期变更时的健壮性仍需加强。
*   **体验**：用户对 **UI 细节**较为敏感，如 Issue #1586 指出的语言切换不彻底，以及 PR #1604 修复的深色模式颜色对比度问题，反映了社区对产品精致度的要求在提高。

---

### 8. 待处理积压
*   **OpenClaw 4.8 版本分支**：[PR #1604](https://github.com/netease-youdao/LobsterAI/pull/1604) 与 [PR #1596](https://github.com/netease-youdao/LobsterAI/pull/1596) 显示存在针对特定版本的修复分支，需确认这些分支是否已正确合入主线或发布计划中。
*   **长期开放的 PR**：[PR #479](https://github.com/netease-youdao/LobsterAI/pull/479) 自 3 月 18 日创建至今仍处于 Open 状态，需评估是否包含必需的更新或应进行清理/归档。

---
**总结建议**：当前项目在 **0 -> 1** 的基础稳定性构建已基本完成，正处于 **1 -> N** 的精细化打磨期。今日大量的数据库和并发修复 PR 是非常好的信号。建议尽快发布一个包含所有崩溃修复的 Patch 版本（如 v2026.04.10），以解决 Issue #1587 和 #1589 报告的阻碍性问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-10)

## 1. 今日速览
Moltis 项目在 2026-04-09 经历了极高强度的开发与维护活动，共合并了 **23 个 Pull Requests** 并关闭了 **14 个 Issues**，表明项目处于快速迭代与密集修复阶段。核心贡献者 `penso` 和 `Cstewart-HC` 集中解决了多个阻碍用户使用的 Bug（包括 LM Studio 流式输出、MiniMax 系统提示、文件截断等），并完成了对新模型（GPT-5.x, Gemini 3.x）的支持。虽然今日没有新的功能开启，但大量缺陷的修复和依赖更新（发布版本 `20260409.01`）显著提升了系统的稳定性与兼容性。目前仅有一个依赖更新 PR 处于待合并状态，项目维护响应极其迅速。

## 2. 版本发布
**版本号：** `20260409.01`
**发布日期：** 2026-04-09
**更新摘要：** 本次发布主要包含多项关键 Bug 修复、文档修正以及对新模型 API 的支持。
*   **关键修复：** 解决了 LM Studio 推理内容流式输出不显示的问题；修复了 `BOOT.md` 加载失效的 Bug；解决了 Linux 安装包文档链接错误。
*   **新特性：** 新增对 OpenAI GPT-5.x 和 Google Gemini 3.x 系列模型的官方支持；引入 Alibaba Cloud Coding Plan 提供商。
*   **依赖维护：** 更新了 `jsonwebtoken`、`tar` 等底层依赖库。
*   **迁移建议：** 所有用户均建议更新至该版本以获得最佳的模型兼容性和稳定性，特别是使用 LM Studio 和 MiniMax 的用户。

## 3. 项目进展
今日合并的 PR 极大地提升了 Moltis 的健壮性和功能广度，项目在模型支持、系统稳定性和用户体验上均有显著迈进：
*   **模型生态扩展：** 项目向前迈出了一大步，正式支持了前沿模型。通过 [PR #605](https://github.com/moltis-org/moltis/pull/605) 和 [PR #622](https://github.com/moltis-org/moltis/pull/622)，Moltis 现已原生支持 **GPT-5.x** (含 reasoning effort) 和 **Gemini 3.x** 系列，并修复了 MiniMax 系统提示词被拒绝的问题。
*   **修复流式输出与工具链：** [PR #620](https://github.com/moltis-org/moltis/pull/620) 和 [PR #617](https://github.com/moltis-org/moltis/pull/617) 分别修复了 LM Studio 推理内容无法流式显示和 `exec` 工具超时配置被忽略的 Bug，确保了交互体验的流畅性和工具调用的可控性。
*   **系统鲁棒性增强：** 针对文件系统和容器环境的支持得到加强。[PR #608](https://github.com/moltis-org/moltis/pull/608) 修复了监控所有技能文件导致的 inotify 资源耗尽问题；[PR #609](https://github.com/moltis-org/moltis/pull/609) 增加了对 Podman 容器的检测支持。
*   **Web 界面优化：** [PR #624](https://github.com/moltis-org/moltis/pull/624) 和 [PR #625](https://github.com/moltis-org/moltis/pull/625) 改进了设置侧边栏导航，并修复了 Cron Job 模态框中字段值丢失的问题。

## 4. 社区热点
今日社区讨论主要集中在特定模型的兼容性问题和配置缺陷，且均在 24 小时内得到快速响应：
*   **LM Studio 兼性性 ([Issue #597](https://github.com/moltis-org/moltis/issues/597))：** 用户反馈 LM Studio 在推理模式下界面无响应。该问题引发了详细的技术讨论，并直接促成了 [PR #620](https://github.com/moltis-org/moltis/pull/620) 的合并，添加了针对性的回归测试。
*   **Linux 安装文档混乱 ([Issue #595](https://github.com/moltis-org/moltis/issues/595))：** 社区指出了官方文档中 Linux 包安装链接失效的问题。维护者迅速修正了文档逻辑，并增加了 CI 检查以防未来再次出现断链。
*   **新模型接入需求 ([Issue #601](https://github.com/moltis-org/moltis/issues/601))：** 用户请求支持 GPT-5.x 和 Gemini 3.x，获得了维护者的积极响应并随即合并相关代码。

## 5. Bug 与稳定性
今日报告的 Bug 涵盖了从资源耗尽到关键功能缺失的多个方面，且大部分已修复：
*   **[高危] inotify 资源耗尽 ([Issue #596](https://github.com/moltis-org/moltis/issues/596))：** 监控所有技能文件（包括禁用的）导致系统可用 inotify 槽位耗尽。
    *   *状态：* 已通过 [PR #608](https://github.com/moltis-org/moltis/pull/608) 修复。
*   **[中危] MiniMax 系统提示词失效 ([Issue #592](https://github.com/moltis-org/moltis/issues/592))：** 即使修复过，MiniMax 仍拒绝系统角色。
    *   *状态：* 已通过 [PR #622](https://github.com/moltis-org/moltis/pull/622) 彻底解决。
*   **[中危] Ollama 模型选择 404 错误 ([Issue #615](https://github.com/moltis-org/moltis/issues/615))：** 选择模型时发生 404 错误。
    *   *状态：* 已通过 [PR #618](https://github.com/moltis-org/moltis/pull/618) 修复（URL 对齐与 API 回退）。
*   **[低危] Exec 工具配置忽略 ([Issue #616](https://github.com/moltis-org/moltis/issues/616))：** `exec` 工具的超时配置未生效。
    *   *状态：* 已通过 [PR #617](https://github.com/moltis-org/moltis/pull/617) 修复。

## 6. 功能请求与路线图信号
今日新提出的 feature requests 数量较少，更多是对现有模型生态的补充：
*   **阿里云编码计划支持：** [PR #621](https://github.com/moltis-org/moltis/pull/621) 新增了 `alibaba-coding` 提供商，支持 Qwen3 模型。这表明项目正在积极扩展企业级和本土化编码助手的支持。
*   **会话轮换功能：** [Issue #579](https://github.com/moltis-org/moltis/issues/579) 提议为防止 token 限制而实施会话轮换。虽然该 Issue 已关闭，但可能在未来版本中作为增强功能重新考量。

## 7. 用户反馈摘要
*   **痛点：** 用户对特定 Provider（如 LM Studio, Ollama, MiniMax）的兼容性非常敏感，任何 API 格式变动导致的失败（如 404 或无响应）都会迅速反馈。配置文件 (`moltis.toml`) 中的某些字段（如 `default_timeout_secs`）如果不生效，会严重影响调试体验。
*   **满意度：** 用户对 **Bug 修复速度** 表示满意（从报告到关闭通常在 24 小时内）。对新模型（GPT-5, Gemini 3）的支持表明项目紧跟 AI 发展前沿。

## 8. 待处理积压
目前项目积压情况良好，大部分高优先级问题已清零。仅有一项常规维护待处理：
*   **依赖更新：** [PR #604](https://github.com/moltis-org/moltis/pull/604) (Open) - 依赖项的例行升级。建议维护者在通过 CI 测试后尽快合并，以保持依赖库的安全性。
*   **会话管理优化：** [Issue #579](https://github.com/moltis-org/moltis/issues/579) (Closed but may be a feature request) - 关于 DM 频道 token 限制的会话轮换功能，虽然是 enhancement，但解决了真实的长对话场景痛点，建议后续纳入 Roadmap。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报：2026-04-10

**分析师：** AI 智能体与个人助手领域观察员
**概览周期：** 2026-04-09 24小时动态

---

### 1. 今日速览
CoPaw 项目今日处于**高活跃度与版本迭代关键期**。过去 24 小时内，仓库处理了 50 个 PR 和 50 个 Issue，反映出极高的代码吞吐量和社区参与度。项目正式发布了 **v1.0.2** 版本，标志着新阶段的稳定；同时维护者迅速发布 **v1.0.2-beta.2** 修复了 v1.0.2 带来的网站回归问题。社区讨论焦点集中在飞书频道的异步锁问题、模型供应商的兼容性以及多智能体对话的体验优化上。

---

### 2. 版本发布

今日共发布 **2** 个版本，包含一次正式版发布和一次紧急热修复。

*   **[v1.0.2] (正式发布)**
    *   **核心更新：引入本地插件系统**。用户现在可以从工作区的 `plugins/` 文件夹直接安装扩展。这极大地增强了 CoPaw 的可扩展性，允许用户在不修改核心代码的情况下定制功能。
    *   **命令行增强：** 新增 `copaw task` 相关功能（注：日志描述被截断，推测与任务执行有关）。
    *   **相关 PR:** [#3101](https://github.com/agentscope-ai/CoPaw/pull/3101), [#3131](https://github.com/agentscope-ai/CoPaw/pull/3131), [#3132](https://github.com/agentscope-ai/CoPaw/pull/3132)

*   **[v1.0.2-beta.2] (热修复)**
    *   **修复内容：** 修复了 v1.0.2 发布后网站出现的问题，并回滚了可能导致不稳定的“网站性能优化”提交。
    *   **维护评价：** 维护者响应迅速，在正式版出现回归后立即修复，保证稳定性。

---

### 3. 项目进展

今日合并/关闭了大量 PR，项目在性能、基础设施和具体功能上均有显著推进：

*   **前端性能优化 (Perf):**
    *   PR [#3141](https://github.com/agentscope-ai/CoPaw/pull/3141): 解决了 Vite 构建配置缺失导致的页面加载慢问题，通过配置 `manualChunks` 分割依赖，提升浏览器缓存利用率。
    *   PR [#3158](https://github.com/agentscope-ai/CoPaw/pull/3158): 修复了鼠标悬停导致整个列表重新渲染的性能损耗，使用 `React.memo` 和 CSS `:hover` 优化渲染效率。

*   **交互与功能增强 (Feat):**
    *   PR [#3150](https://github.com/agentscope-ai/CoPaw/pull/3150): 增加了 `/skills` 列表展示和 `/<skill_name>` 调用命令，强化了命令行交互能力。
    *   PR [#3149](https://github.com/agentscope-ai/CoPaw/pull/3149): 支持列出 MCP (Model Context Protocol) 工具，完善了生态工具链的管理。

*   **核心基础设施 (Infrastructure):**
    *   PR [#3167](https://github.com/agentscope-ai/CoPaw/pull/3167): 修复了 HTTP MCP 相关连接问题。
    *   PR [#2506](https://github.com/agentscope-ai/CoPaw/pull/2506): 建立了针对所有 11 个频道的测试基础设施，大幅提升了代码质量和未来更新的稳定性。

---

### 4. 社区热点

今日讨论度最高的话题主要集中在特定频道的 Bug 和模型配置的痛点：

*   **[#1911 (小艺频道连接不稳定)](https://github.com/agentscope-ai/CoPaw/issues/1911)** (21 评论)
    *   **事件：** 用户反馈华为小艺频道在配置正常的情况下，频繁报错“网络拥堵”，且 CoPaw 对话列表中找不到手机端聊天记录。
    *   **诉求：** 期待排查是 CoPaw 频道适配问题还是小艺平台本身的限制，这反映了用户对主流国产硬件生态接入的强烈需求。

*   **[#3063 (飞书长连接异步锁崩溃)](https://github.com/agentscope-ai/CoPaw/issues/3063)** (10 评论)
    *   **事件：** 日志显示 `asyncio.locks.Lock` 跨 event loop 错误，导致飞书长连接模式下对话无响应。
    *   **技术分析：** 这是一个典型的异步编程资源竞争问题，可能涉及多会话并发时的资源隔离失败。

*   **[#2291 (贡献者招募任务列表)](https://github.com/agentscope-ai/CoPaw/issues/2291)** (54 评论)
    *   **事件：** 社区维护的“任务认领”帖子持续活跃。
    *   **意义：** 显示出 CoPaw 拥有活跃的开源社区贡献群体，正在通过“众人拾柴”的方式快速迭代功能。

---

### 5. Bug 与稳定性

今日报告的 Bug 涉及多个层面，部分为新版本引入的回归：

*   **[高优先级 - 资源锁死]**
    *   **Issue:** [#3063](https://github.com/agentscope-ai/CoPaw/issues/3063) 飞书长连接异步锁错误导致服务假死。
    *   **状态:** Open，待修复。

*   **[中优先级 - 模型兼容性]**
    *   **Issue:** [#3162](https://github.com/agentscope-ai/CoPaw/issues/3162) 所有 `aliyun-codingplan` 模型切换时报错 422 (Missing scope field)。
    *   **Issue:** [#3139](https://github.com/agentscope-ai/CoPaw/issues/3139) 自定义模型供应商无法拉取模型列表。

*   **[中优先级 - 功能异常]**
    *   **Issue:** [#3165](https://github.com/agentscope-ai/CoPaw/issues/3165) MCP 中带有 headers 时，新版 `streamable_http_client` 报错。这可能是 v1.0.2 引入的回归问题。
    *   **Issue:** [#3030](https://github.com/agentscope-ai/CoPaw/issues/3030) CoPaw Local 更新 llama.cpp 下载卡在 100% 无法完成。

*   **[低优先级 - 体验问题]**
    *   **Issue:** [#2831](https://github.com/agentscope-ai/CoPaw/issues/2831) Web Console 写文件失败时无法手动 Stop。

---

### 6. 功能请求与路线图信号

从活跃的 Issues 中可以窥见用户对新功能的期待：

*   **数据可视化支持:**
    *   **Issue:** [#3124](https://github.com/agentscope-ai/CoPaw/issues/3124) (Enhancement)
    *   **诉求:** 希望在对话界面直接渲染折线图、饼图，而不是仅保存为本地文件。这对数据分析场景的用户至关重要。

*   **对话体验优化:**
    *   **Issue:** [#2936](https://github.com/agentscope-ai/CoPaw/issues/2936) (Enhancement)
    *   **诉求:** 请求添加智能体内部会话“置顶”功能，防止重要会话被多智能体协作产生的新会话淹没。

*   **模型路由灵活性:**
    *   **Issue:** [#2314](https://github.com/agentscope-ai/CoPaw/issues/2314) (Enhancement)
    *   **诉求:** 支持与供应商无关的对话历史格式，以便在同一对话中自由切换不同供应商（如 OpenAI <-> Anthropic）的模型。
    *   **相关 PR:** PR [#1089](https://github.com/agentscope-ai/CoPaw/pull/1089) 已添加 LLM routing 配置，显示该功能正在开发中。

---

### 7. 用户反馈摘要

*   **部署痛点:** 用户在 **Docker 部署** ([#3163](https://github.com/agentscope-ai/CoPaw/issues/3163)) 升级后遭遇数据丢失，反映出官方文档对于数据持久化的指导尚有欠缺，用户急需最佳实践指南。
*   **反爬虫困扰:** 用户反馈使用 `browser_visible` 访问网页频繁触发 Cloudflare 人机验证 ([#3075](https://github.com/agentscope-ai/CoPaw/issues/3075))，并指出相较于 OpenClaw，CoPaw 的自动化特征更明显。
*   **版本回滚问题:** 部分用户在升级到最新版后出现无法启动 ([#3005](https://github.com/agentscope-ai/CoPaw/issues/3005)) 或配置失效的情况，提示 v1.0.1 到 v1.0.2 的迁移路径可能存在平滑度问题。

---

### 8. 待处理积压

*   **长期开放问题:** **[#1911 (小艺频道)](https://github.com/agentscope-ai/CoPaw/issues/1911)** 自 3 月 20 日开放至今仍未解决，评论数高达 21 条，建议维护者优先排查。
*   **UI 争议:** **[#2454](https://github.com/agentscope-ai/CoPaw/issues/2454)** 关于“历史消息栏从左侧移至右侧”的设计变更引发了用户不满，认为这破坏了多角色协作的效率。虽然 Issue 已关闭，但用户反馈值得 UI 团队在后续迭代中复盘。

---
**分析师结语：** CoPaw 今日展现了强劲的开发迭代能力，v1.0.2 的插件系统和性能优化是重要里程碑。然而，飞书/阿里云等集成频道的稳定性 Bug 和 Docker 部署的数据安全问题需尽快解决，以支撑企业级用户的广泛采用。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 - 2026-04-10

> **数据来源**：github.com/gaoyangz77/easyclaw  
> **报告日期**：2026 年 4 月 10 日

---

## 1. 今日速览
EasyClaw 项目今日处于**低代码活跃度但高版本迭代状态**。虽然过去 24 小时内 GitHub 上的 Issues 和 Pull Requests 活跃度均为 0，既没有新的社区讨论，也没有代码合并动作，但项目成功发布了 **v1.7.9 (RivonClaw)** 版本。这表明项目正处于版本发布后的稳定期，维护者重心在于交付构建产物而非代码库的交互。整体项目健康度良好，未见待解决的紧急故障。

---

## 2. 版本发布
**版本号**：[v1.7.9 (RivonClaw)](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.9)

**更新摘要**：
今日发布了 RivonClaw v1.7.9 版本。根据 Release Notes，本次更新的核心内容主要集中在**分发与兼容性修复**上，而非新功能的开发。

**关键变更与注意事项**：
*   **macOS 兼容性修复**：针对 macOS 用户遇到的 **"'RivonClaw' is damaged and can't be opened"** 错误进行了说明。这是由于 macOS Gatekeeper 安全机制拦截了未签名的应用程序。
*   **用户指引**：官方提供了明确的 Terminal 命令行解决方案，指导用户绕过 Gatekeeper 的限制以运行应用。这表明该版本目前可能未包含苹果开发者签名证书（或使用自签名），需要用户手动授权。
*   **迁移/升级说明**：无破坏性变更。macOS 用户在下载新版本后，需按照官方提供的终端命令执行一次解除隔离操作即可正常使用。

---

## 3. 项目进展
*   **合并动态**：过去 24 小时内**无 PR 合并记录**。
*   **进展评估**：今日的项目进度主要体现在构建系统的打包与发布流程上。由于没有新的代码合并，v1.7.9 可能是修复了构建配置或针对特定二进制文件进行了重新打包（如解决 macOS 的识别问题），而非功能代码层面的迭代。

---

## 4. 社区热点
*   **今日状态**：**无活跃讨论**。
*   **分析**：过去 24 小时内没有任何新的 Issue 或 PR 提交。通常版本发布日会伴随用户反馈（如安装问题、使用 Bug），但目前社区处于静默状态。这可能意味着 v1.7.9 的改动较小且精准，或者用户群体尚未开始大量体验新版本。

---

## 5. Bug 与稳定性
*   **今日报告**：**0 条新 Bug**。
*   **稳定性评估**：尽管 Issue 列表为空，但 Release Notes 中提及的 macOS “已损坏”提示属于**已知的平台限制问题**。虽然这不是代码运行时崩溃的 Bug，但严重影响新用户的首次使用体验（UX）。目前官方已在文档中提供了解决方法，尚无通过代码层面的“修复”（如购买证书）。
*   **严重程度**：中等（影响 macOS 用户体验，但有文档解决方案）。

---

## 6. 功能请求与路线图信号
*   **今日状态**：**无新功能请求**。
*   **路线图推测**：由于当前 Issues 列表清空，无法判断用户端的具体需求。结合 v1.7.9 主要是修复 macOS 启动问题来看，目前的路线图优先级为**“提升安装可用性” > “新功能开发”**。项目可能正在为后续的功能大版本做铺垫，目前处于维护旧版本稳定性的阶段。

---

## 7. 用户反馈摘要
*   **来源**：由于无新 Issues，今日无新增用户反馈。
*   **历史痛点回顾**：从今日发布的版本描述可以反推出，macOS 用户对**“开箱即用”**的体验有强烈需求。频繁遇到 Gatekeeper 拦截是此类未签名开源工具在 macOS 上的主要痛点。用户希望获得更顺畅的安装体验，而非在终端输入命令。

---

## 8. 待处理积压
*   **积压情况**：**无**。
*   **维护状态**：项目的 Issue 列表目前是干净的（0 条）。这通常意味着维护者响应非常及时，处理了所有历史问题；或者项目规模较小，社区参与度尚处于起步阶段。建议维护者关注新版本发布后的用户反馈，以防后续出现积压。

---
*本日报由 AI 助手基于 GitHub 公开活动数据自动生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*