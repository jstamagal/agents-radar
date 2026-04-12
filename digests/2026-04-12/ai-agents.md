# OpenClaw 生态日报 2026-04-12

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-12 00:13 UTC

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

你好！我是 AI 智能体与个人 AI 助手领域的开源项目分析师。根据 2026-04-12 的 GitHub 数据，以下是 **OpenClaw** 项目的动态日报。

---

# 📅 OpenClaw 项目日报 (2026-04-12)

## 1. 今日速览
OpenClaw 项目今日处于**极高活跃度**状态，过去 24 小时内处理了多达 1000 条（Issues + PR）的更新，显示出强劲的开发动力与社区参与度。项目发布了两个连续版本（v2026.4.11-beta.1 和 v2026.4.10），重点在于强化 **GPT-5.4 / Codex** 的架构对齐以及 **Memory（记忆）** 系统的深度集成。社区讨论的核心集中在模型兼容性（特别是 OpenAI Codex 与旧版模型的参数冲突）以及自动化任务中的回归问题上。

## 2. 版本发布

### 📦 v2026.4.11-beta.1 & v2026.4.10
这两个版本标志着 OpenClaw 在支持新型代理架构和记忆管理上的重要迭代。

**核心更新：**
*   **Dreaming/Memory-Wiki 增强 (#64505)**：新增 ChatGPT 导入功能，UI 界面中增加了 `Imported Insights` 和 `Memory Palace` 子标签。现在 Agent 可以直接在 UI 中检查导入的源聊天记录、编译的 Wiki 页面和完整的源页面，极大地增强了可解释性和记忆检索能力。
*   **Codex 架构解耦 (#64298)**：引入了捆绑的 Codex 提供商和插件拥有的 app-server harness。这意味着 `codex/gpt-*` 模型现在使用 Codex 管理的身份验证、原生线程和模型发现，而 `openai/gpt-*` 保持在标准 OpenAI 提供商路径上，为未来的混合模型部署打下基础。
*   **Control UI 优化**：改进了助手媒体/REPL 的渲染逻辑。

**⚠️ 注意事项：**
*   新架构变更可能需要调整现有的模型配置，特别是区分 `openai` 和 `openai-codex` 提供商的认证方式。

## 3. 项目进展

今日合并/关闭的关键 PR（基于最近关闭列表）主要修复了高频痛点：

*   **🔒 安全性修复**：修复了 WhatsApp 自聊模式下的安全漏洞，阻止非自身消息的处理（PR #42906），以及修复了 WhatsApp 消息回声导致的无限循环问题（PR #61141）。
*   **🌐 通道稳定性**：修复了 Google Chat 在无效线程参数时的无限重试循环（PR #64325），以及飞书通道中 URI 编码文件名的解码问题（PR #64353）。
*   **⚙️ 配置逻辑**：修复了空 `heartbeat` 配置被错误判定为激活的 Bug（PR #64329），防止了意外的 Token 消耗。
*   **🛠️ 实验性功能**：正在积极推进 `inference-guard`（单 GPU 碰撞防止）和 `model-switch`（后端切换）等插件的研发（PR #63518, #63503），显示出项目对本地资源优化的重视。

## 4. 社区热点

以下是今日讨论最热烈、关注度最高的 Issue：

*   **🔥 [GPT-5.4 / Codex agentic runtime parity](https://github.com/openclaw/openclaw/issues/64227)** (21 comments)
    *   **状态**：Open
    *   **分析**：这是 GPT-5.4 与 Codex 对齐计划的追踪器。讨论涉及底层架构的六个契约设计（传输、工具、权限等）。用户非常关注新模型在 OpenClaw 中的原生支持程度和运行时正确性。
*   **⏰ [Bug: Reminders set for wrong times](https://github.com/openclaw/openclaw/issues/10841)** (20 comments)
    *   **状态**：Open
    *   **分析**：一个长期存在的痛点。Agent 在设置提醒时无法准确获取当前时间，导致任务调度失败。这反映了 Agent 在获取精确系统状态方面的局限性。
*   **🔐 [Enhancement: Encrypted API keys](https://github.com/openclaw/openclaw/issues/7916)** (18 comments)
    *   **状态**：Open
    *   **分析**：用户强烈要求对存储在配置文件中的敏感密钥进行加密。虽然目前文件权限受限，但对于生产环境和企业用户来说，明文存储仍是安全隐患。

## 5. Bug 与稳定性

今日报告的显著 Bug 按严重程度排序：

*   **🚨 [Critical] OAuth for openai-codex broken (#64687)** (Regression)
    *   **现象**：更新后 `openai-codex` 的 OAuth 流程报错 `invalid_scope`，导致用户无法登录。
    *   **状态**：已关闭（推测已在 v2026.4.10/4.11 中修复）。
*   **🚨 [Critical] Context limit exceeded / Hard resets (#64250, #63216)**
    *   **现象**：v2026.4.9 之后，大量用户报告上下文频繁重置，Agent 回复“Context limit exceeded”并清空对话，即使配置了高保留阈值。这与内存回收逻辑有关。
    *   **状态**：Open，活跃讨论中。
*   **🚨 [Critical] Coding Agent regression (#62505)**
    *   **现象**：Coding Agent 在 2026.4.2 之后停止产出实际代码，仅回复模糊的状态更新和道歉。严重影响生产力。
    *   **状态**：Open。
*   **⚠️ [High] Crash on missing qa/scenarios/index.md (#63510, #64135)**
    *   **现象**：v2026.4.9 导致 `openclaw completion --write-state` 和插件安装崩溃。属于打包发布遗漏文件导致的严重安装问题。
    *   **状态**：Open。

## 6. 功能请求与路线图信号

从 Issues 和 PR 中捕捉到的未来开发信号：

*   **Private Network Access**：请求增加 `tools.web.fetch.allowPrivateNetwork` 配置，允许 Agent 访问内网资源（Issue #39604）。
*   **Amazon Bedrock API Key Auth**：用户希望支持 Bearer Token 而非仅依靠 AWS SDK 链（Issue #30215）。
*   **Discord Channel Management**：用户希望能通过 Agent 直接创建和管理 Discord 频道及线程，目前 Provider 支持但缺乏调用路径（Issue #64402）。
*   **ClawModeler Integration**：新增的 PR #65044 提议添加一个本地交通规划侧边车 `ClawModeler`，预示着 OpenClaw 可能正尝试向具体垂直领域（如自动化规划工具）扩展。

## 7. 用户反馈摘要

*   **痛点**：**模型兼容性混乱**是最大痛点。用户对 `gpt-5-nano` 不支持 `thinking=none`、以及 `openai-codex` 和普通 OpenAI 模型之间的配置割裂感到困惑和沮丧。
*   **满意度**：用户对 **Memory/Dreaming** 系统的可视化增强（UI 中查看源页面）表示期待，认为这有助于理解 Agent 的“思考”过程。
*   **性能**：Docker 用户和 Node.js v24 用户反馈较多，涉及 SharePoint 媒体获取失败（PR #64652）和 WebSocket 认证跳过等问题，表明新环境适配尚需打磨。

## 8. 待处理积压

以下 Issue 长期未解决或处于 Stale 状态，需维护者关注：

*   **(#22676)** [Signal daemon stop() race condition]: 2026-02-21 创建，涉及重启时的孤立进程和端口占用，影响信号服务的稳定性。
*   **(#32296)** [Agent replies to previous message]: 2026-03-02 创建，Agent 经常回复上一条消息而非当前消息，存在会话上下文混淆问题。
*   **(#30172)** [Feishu Channel broken]: 飞书通道在 2026.2.26 后无法识别且插件验证失败，影响中文用户群体。

---

## 横向生态对比

你好！作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026-04-12 的 GitHub 数据监测，我为您整理了以下横向对比分析报告。

---

# 📊 2026-04-12 个人 AI 助手开源生态横向分析报告

### 1. 生态全景
2026 年 4 月中旬，个人 AI 助手开源生态正处于**从“原型验证”向“生产级可用”转型的关键阵痛期**。头部项目如 **OpenClaw** 和 **IronClaw** 正在高频迭代中重构底层架构（如 Memory 系统、微内核），以应对 GPT-5.4/Codex 等新一代模型的架构对齐；而 **LobsterAI** 和 **NanoBot** 等项目则专注于桌面体验与工程稳定性（安装器、异步修复）。

**核心趋势**：各项目普遍面临**多模型适配**（兼容 OpenAI/Claude/本地 Ollama）和**长对话记忆管理**的挑战。社区不再满足于简单的对话，而是强烈要求 Agent 具备**工具使用的确定性**（如 `@` 调用技能）和**多模态交互**能力。

---

### 2. 各项目活跃度对比

| 项目名 | 今日活跃度 | Issues 数 | PR 数 | 发布状态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **极高** 🔥 | ~1000+ (混合) | ~1000+ (混合) | v2026.4.11-beta.1 | **领跑者**：社区庞大，技术激进，但 Bug 伴随高频更新出现。 |
| **IronClaw** | **极高** 🔥 | 16 | 50 | v0.25.0 | **架构重构中**：生产级特性增强，但新版本引发部分升级问题。 |
| **NanoBot** | **高** ⚡ | 15 | 46 | 无 (v0.1.5+) | **快速修复中**：核心痛点修复快，但系统稳定性（如死锁）仍有风险。 |
| **Zeroclaw** | **高** ⚡ | 34 | 27 | 无 (v0.7.0 prep) | **架构阵痛期**：微内核重构导致安装脚本阻塞，等待破局。 |
| **NanoClaw** | **高** ⚡ | 3 | 19 | 无 | **生态爆发中**：MCP 协议集成最活跃，正努力平衡 Docker 隔离与宿主集成。 |
| **Moltis** | **中** ✅ | 10 (处理中) | 13 | 无 | **稳步打磨**：安全性与逻辑修复执行力强，属于“小而美”。 |
| **PicoClaw** | **中** ⚠️ | 21 | 1 (审查中) | Nightly | **版本受阻**：WebSocket 连接回归问题严重，处于紧急修复状态。 |
| **CoPaw** | **中** ⚠️ | 24 | 14 | 无 (v1.0.2) | **争议前行**：功能繁多但 Windows 支持和技能逻辑被用户诟病。 |
| **NullClaw** | **中** 🛠️ | 1 (用户) | 8 | 无 | **安全导向**：专注于沙箱加固和 Docker 交互流程修复。 |
| **LobsterAI** | **中** 🛠️ | 1 | 6 | 无 | **体验优先**：重点优化桌面端安装体验和易用性。 |
| **TinyClaw** | 无 | 0 | 0 | - | 停滞/低频 |
| **ZeptoClaw** | 无 | 0 | 0 | - | 停滞/低频 |
| **EasyClaw** | 无 | 0 | 0 | - | 停滞/低频 |

---

### 3. OpenClaw 在生态中的定位

**优势：**
*   **架构前瞻性**：OpenClaw 是今日唯一明确发布针对 **GPT-5.4 / Codex** 运行时对齐版本的项目，在新一代模型支持上处于领跑地位。
*   **可解释性**：其 **Dreaming/Memory-Wiki** 系统不仅进行后台记忆管理，还向用户开放了源页面检查功能，这在黑盒模型盛行的当下是独特的差异化卖点。
*   **社区规模**：Issue/PR 处理量级（1000+）远超其他项目，表明其拥有最庞大的开发者社区和用户基数。

**技术路线差异：**
*   OpenClaw 采取**全栈大而全**路线，自行构建 Codex 提供商和 App Server Harness；而像 NanoClaw 更倾向于拥抱外部协议（如 MCP）。

---

### 4. 共同关注的技术方向

通过对所有项目 Issues 和 PR 的聚合分析，以下技术需求在 2026-04-12 呈现**跨项目共振**：

1.  **技能/工具调用的确定性与控制**
    *   **涉及项目**：OpenClaw, CoPaw, NanoBot, IronClaw
    *   **具体诉求**：用户厌倦了 Agent “随机猜测”使用哪个工具。**OpenClaw** 在讨论架构契约；**CoPaw** 用户强烈请求引入类似 Cursor/Claude Code 的 `@` 符号进行强制指定；**NanoBot** 则正在开发“自动技能发现”来优化匹配。

2.  **本地/私有化模型的深度适配**
    *   **涉及项目**：LobsterAI, CoPaw, OpenClaw, PicoClaw
    *   **具体诉求**：
        *   **LobsterAI**：用户反馈切换到本地模型（Ollama）后技能失效（Issue #1632）。
        *   **CoPaw**：Windows 上 Local 模式无法调用 GPU（Issue #3269）。
        *   **PicoClaw**：增加对 Ollama Cloud 凭证的支持。
        *   **结论**：生态正在从单纯的“调用 API”转向“适配异构算力”。

3.  **长上下文与内存压缩**
    *   **涉及项目**：OpenClaw, IronClaw, Moltis
    *   **具体诉求**：
        *   **OpenClaw**：上下文频繁重置问题（Context limit exceeded）。
        *   **Moltis**：引入了确定性压缩策略替代 LLM 摘要压缩（PR #653）。
        *   **IronClaw**：引入文件历史和技能承诺系统，解决长期记忆的可靠性。

4.  **通道交互体验的细节打磨**
    *   **涉及项目**：NanoClaw, IronClaw, NanoBot
    *   **具体诉求**：
        *   **NanoClaw**：请求 Slack 支持线程回复和“正在思考”的指示器（Issue #1745）。
        *   **IronClaw**：请求支持 Slack Socket Mode 以降低部署门槛（PR #1549）。

---

### 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键技术差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能型 Agent 基座** | 技术极客、重度开发者 | **自研架构**：Codex 解耦、Memory Palace；适合需要深度定制和模型对齐的场景。 |
| **IronClaw** | **企业级自动化平台** | 运维团队、企业用户 | **安全与编排**：强调 TOCTOU 竞态修复、审批流、Profile 部署配置。 |
| **NanoClaw** | **MCP 协议集线器** | 自动化爱好者、效率工具控 | **连接优先**：基于 Docker 的强隔离，激进地集成各种 MCP 服务（Todoist, Calendar 等）。 |
| **LobsterAI** | **优雅的桌面助理** | 普通用户、知识工作者 | **GUI 优先**：以 Electron 桌面端体验为核心，关注头像、安装流畅度、非侵入式交互。 |
| **Zeroclaw** | **Rust 极客玩具** | 系统级程序员、追求性能者 | **微内核/内存安全**：使用 Rust 重写，关注 WASM 沙箱、Landlock 安全。 |
| **Moltis** | **轻量级 CLI 工具** | Linux 终端用户、服务器运维 | **纯粹与稳定**：专注 CLI 体验，确定性逻辑，无 GUI 负担。 |

---

### 6. 社区热度与成熟度

*   **第一梯队（成熟期，重构中）**：
    *   **OpenClaw**, **IronClaw**。这两个项目拥有最完善的功能集，但也背负了最重的历史包袱（技术债）。目前正在经历剧烈的架构重构（Memory 系统、微内核），以支持未来的扩展。
*   **第二梯队（成长期，痛点明显）**：
    *   **NanoClaw**, **CoPaw**。功能扩张极快，用户热情高，但工程质量（Bug 率、Windows 兼容性）正在经受考验。处于“堆功能”向“修 Bug”转型的阶段。
*   **第三梯队（起步/打磨期）**：
    *   **LobsterAI**（体验打磨期）、**Moltis**（稳定迭代期）、**PicoClaw**（版本恢复期）。这些项目相对聚焦，社区较小但反馈处理较快。

---

### 7. 值得关注的趋势信号

1.  **从“对话”到“任务流”**：
    *   **信号**：**IronClaw** 引入技能承诺 和 **NullClaw** 开发 Cron 子代理。
    *   **分析**：用户不再满足于 Agent 说“我做完了”，而是需要 Agent 保证任务执行的原子性、可回溯性和定时触发能力。

2.  **浏览器交互能力成为刚需**：
    *   **信号**：**NanoClaw** 用户请求绕过 Docker 直接访问宿主浏览器；**CoPaw** 用户抱怨浏览器自动化能力差。
    *   **分析**：纯文本交互已无法满足复杂任务（如订票、填表），下一代 Agent 必须解决如何安全、便捷地控制浏览器界面的问题。

3.  **隐私与本地化部署的双刃剑**：
    *   **信号**：**PicoClaw** 用户强烈请求集成 Signal（隐私），**LobsterAI** 用户遇到本地模型切换失效。
    *   **分析**：本地化部署是开源 Agent 的护城河，但多模型后端（Ollama, LM Studio, LocalAI）与上层技能生态的兼容性目前是最大的瓶颈。

4.  **开源项目的“商业化”前夜治理**：
    *   **信号**：**Zeroclaw** 开始讨论项目治理（RFC #5577）。
    *   **分析**：随着项目变大，代码之外的人的问题（贡献流程、决策机制）开始成为制约发展的关键因素。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

你好！我是 NanoBot 项目的 AI 智能体分析师。基于 2026-04-12 的 GitHub 数据，以下是项目当天的动态日报。

---

# NanoBot 项目动态日报 (2026-04-12)

## 📊 1. 今日速览
NanoBot 项目今日呈现**极高活跃度**，社区提交了大量代码与反馈。过去 24 小时内共有 **46 条 PR** 和 **15 条 Issue** 更新，虽然今日无正式 Release 发布，但代码合并与修复工作非常密集。核心开发重点集中在**稳定性修复**（特别是 Telegram 和 Cron 模块）、**功能增强**（技能自动发现、多模态支持）以及**多平台适配**（Lark/Feishu 国际版支持）。目前项目处于快速迭代期，部分连接层和内存管理问题正被集中解决。

---

## 🚀 2. 版本发布
**今日无新版本发布。**
*注：项目目前处于 `v0.1.5` (根据 Issue #3018 推测) 至更高版本的过渡阶段，部分修复可能先于发布合并至主干。*

---

## 🛠️ 3. 项目进展 (已合并/关闭)
今日多个关键 PR 被合并，显著提升了系统的健壮性和平台兼容性：

*   **[Bug Fix] Cron 服务无限循环修复**
    *   **PR #3037 (CLOSED):** 修复了 `_load_store()` 中的重入 bug，该 bug 曾导致定时任务在特定时间（如 22:30）无限重触发，造成严重的 LLM 费用流失。此修复对生产环境的稳定性至关重要。
*   **[Bug Fix] 消息截断与正则误判**
    *   **PR #3004 (CLOSED):** 修复了 `strip_think()` 工具中的正则误判问题，防止 Bot 在回复涉及特定标签时发生意外的消息截断。
*   **[Bug Fix] 工具调用结果丢失**
    *   **PR #3045 (CLOSED):** 解决了严重错误 #2943。当工具调用发生致命错误时，之前的逻辑会导致 `tool_calls` 成为“孤儿”，进而触发 2013 错误。现在系统会在中断前正确保存工具结果。
*   **[Feature] QQ 与企微 全媒体支持**
    *   **PR #3044 (CLOSED):** 为 QQ 和 WeCom 通道补齐了媒体（图片/文件）处理能力，支持双向收发，补全了这两大国内主流平台的功能拼图。
*   **[Feature] Lark/Feishu 全球版支持**
    *   **PR #2674 (CLOSED):** 增加了 `domain` 配置项，使得 NanoBot 可以同时支持飞书中国版和 Lark 国际版（`open.larksuite.com`）。
*   **[Enhancement] Token 使用监控**
    *   **PR #2838 (CLOSED):** 增强了 Token 记录功能，实现了按日记录 Token 使用情况至 JSONL 文件，并优化了 Agent 的运行钩子。

---

## 🔥 4. 社区热点
讨论度最高的问题主要集中在**系统崩溃**和**核心功能请求**上：

*   **🔥 [热议] DuckDuckGo 搜索导致系统挂死**
    *   **Issue #2828:** 用户报告使用 DuckDuckGo 进行网页搜索时，不仅 Agent 停止响应，甚至导致整个宿主机系统无响应，无法通过 Ctrl+C 终止，只能强制关机。这涉及到底层异步调用的严重安全性问题。
*   **🔥 [热议] 自动技能发现**
    *   **Issue #2927 & PR #3039:** 社区强烈呼吁 NanoBot 从“被动技能”转向“主动技能”。目前 Agent 只能使用用户预定义的技能，无法自我发现行为模式并生成新技能。相关 PR #3039 已提交，旨在通过分析对话历史自动提取可复用的 `SKILL.md`。
*   **🔥 [热议] Telegram 连接池耗尽**
    *   **Issue #3050:** 反馈 Telegram 通道出现持续的连接池耗尽，导致几乎所有的出站消息发送失败。该问题已引发针对所有通道异常处理机制的全面审查（见 PR #3053）。

---

## 🐛 5. Bug 与稳定性
今日报告的 Bug 涉及多个严重等级，部分已有修复方案：

*   **[HIGH severity] Cron 心跳任务重复创建**
    *   **Issue #3028:** 心跳机制作为定时任务运行时，错误地在内部创建了新的定时任务，导致问候语重复发送，且未正确读取上下文。影响用户体验。
*   **[HIGH severity] Session 膨胀导致静默失败**
    *   **Issue #3029:** Session 无限制增长，当 Token 达到上限（如 8192）且无法安全合并时，Agent 会耗尽上下文并仅回复“I've completed processing”，造成“假性完成”。
*   **[MEDIUM severity] WhatsApp 群组回复过于吵闹**
    *   **Issue #3051 (关联 PR):** Agent 默认回复群组每一条消息，导致噪音过大。PR #3051 提出增加配置项以抑制群组回复。
*   **[MEDIUM severity] Dream 内存合并溢出**
    *   **Issue #3047:** Dream 机制每 2 小时运行一次，但在高负载（40k token limit）下，上下文会在 2 小时窗口内溢出，导致 `MEMORY.md` 合并失败。
*   **[MEDIUM severity] DuckDuckGo 系统挂死**
    *   **Issue #2828:** 已知问题，暂无修复 PR，需引起高度重视。

---

## 🗺️ 6. 功能请求与路线图信号
从 PR 和 Issues 中可以窥见未来的开发方向：

*   **Agent 检查点:** **Issue #3027** 提出在长时间运行的 Agent 循环中增加“断点续传”功能，允许用户在 Agent 偏离轨道时回滚而非重头开始。
*   **SQLite 后端:** **PR #3015** 提议用 SQLite 替换 Git 作为 Dream 版本控制的后端，以避免与用户仓库冲突。
*   **技能黑名单:** **PR #2959** 提出增加 `disabled_skills` 配置，允许用户禁用内置技能（如 GitHub, Weather），解决技能冲突问题。
*   **日历工具:** **PR #3049** 正在添加完整的本地日历工具，支持 CRUD 和冲突检测。
*   **会话级内存隔离:** **PR #3001** 试图解决多通道共享 `MEMORY.md` 导致的上下文污染问题，实现真正的多租户内存隔离。

---

## 🗣️ 7. 用户反馈摘要
*   **痛点 - 系统稳定性:** 多位用户反馈在特定操作（Web 搜索、Telegram 消息发送）下出现系统级挂死或服务不可用的问题，显示出对异步安全和错误恢复机制的迫切需求。
*   **痛点 - 配置复杂:** 用户对 MCP 配置（Issue #3018）和本地 LLM 集成（Issue #2913）表示困惑，配置错误会导致服务启动失败。
*   **认可 - 本地化需求:** Issue #2990 请求增加印尼语文档，Issue #1164 请求增加越南语文档，显示项目在非英语社区的吸引力正在扩大。

---

## 📝 8. 待处理积压
*   **Issue #2220:** 关于使用 `ContextVar` 进行任务本地工具路由的提案。该 Issue 创建于 3 月中旬，虽然代码改动较小，但一直未合并，建议维护者评估其对 async-safety 的影响。
*   **PR #1201:** 多模型 Provider 集成与自动回退支持。这是一个长期开放的 PR，旨在提高模型调用的可靠性，建议优先审查。

---
*数据来源: GitHub.com/HKUDS/nanobot | 生成时间: 2026-04-12*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-12)

## 1. 今日速览
Zeroclaw 项目今日处于**极高活跃度**状态，正处于 v0.7.0 微内核架构重构的关键过渡期。过去 24 小时内产生了 34 条 Issue 讨论和 27 条 PR 更新，代码提交与架构讨论均非常密集。核心开发团队正全力推进工作空间拆分后的代码整理与依赖修复，同时社区贡献者积极为新架构添加功能（如 Anthropic 原生思考支持、LINE 消息渠道）。由于 `install.sh` 尚未适配新的 16-crate 布局，源码构建面临阻塞，成为当前版本发布的最大瓶颈。

## 2. 版本发布
*无新版本发布。*
由于最近的工作空间拆分重大重构，项目暂未发布 v0.6.9 或 v0.7.0 的正式版本。

## 3. 项目进展
今日合并与关闭的 PR 主要集中在基础设施清理和 Bug 修复，为即将到来的 v0.7.0 铺路：
*   **[RFC] 治理与架构定调**: 社区关闭了关于“ZeroClaw 微内核过渡 (v0.7.0 → v1.0.0)”和“项目治理”的 RFC 讨论链 ([#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574), [#5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577))，标志着高层架构设计已达成初步共识，正式进入实施阶段。
*   **CI/CD 流程优化**: 修复了 Clippy 检查未覆盖所有 Workspace crates 及特性的问题 ([#5635](https://github.com/zeroclaw-labs/zeroclaw/issues/5635), [#4656](https://github.com/zeroclaw-labs/zeroclaw/issues/4656))，确保了多 crates 项目代码质量的严格把控。
*   **构建系统修复**: 解决了 Rust 1.94+ 版本下 `matrix-sdk` 因递归深度限制导致的编译失败问题 ([#3468](https://github.com/zeroclaw-labs/zeroclaw/issues/3468))，保障了前沿 Rust 工具链的兼容性。

## 4. 社区热点
*   **[RFC] 项目治理与团队协调** ([#5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577))
    *   **关注度**: 3 评论
    *   **分析**: 提出了“软件项目的失败往往不是因为代码烂，而是因为人写代码的方式不对”。该讨论引发了关于贡献流程、RFC 决策机制以及团队协作文化的深入探讨，是项目从“野蛮生长”转向“工程化治理”的重要信号。
*   **[Bug] 内存递归雪球导致内存耗尽** ([#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916))
    *   **关注度**: 11 评论, 3 👍
    *   **分析**: 这是一个严重的逻辑 Bug。当开启 `auto_save` 时，Memory recall 的结果被当作新内存存入数据库，下次 recall 又会读取这个包含旧内存的“快照”，导致指数级膨胀。这反映了核心 Memory 模块在处理自我指涉数据时的逻辑缺陷，用户反馈强烈。
*   **[Bug] Web Dashboard 长期不可用** ([#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866))
    *   **关注度**: 9 评论
    *   **分析**: 这是一个持续困扰用户的痛点。尽管代码存在，但 Web UI 和 Tauri 桌面端一直提示未构建。这表明构建文档或发布流程存在缺失，使得新用户无法开箱即用。

## 5. Bug 与稳定性
*   **[High Risk] 安装脚本 (install.sh) 未适配 Workspace Split** ([#5651](https://github.com/zeroclaw-labs/zeroclaw/issues/5651))
    *   **影响**: 阻断下一个版本的发布。
    *   **详情**: PR #5559 将代码拆分为 16 个 crate 后，`install.sh` 依然使用旧逻辑，导致在资源受限设备上源码安装失败，且无法正确启用新的内核特性分类。
*   **[S1] Z.AI (glm-5-turbo) 上下文修剪后报错 1214** ([#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636))
    *   **影响**: 使用该国产模型用户的核心功能完全阻塞。
    *   **详情**: 在上下文 preemptive trim 后，发送给 Z.AI 的消息被判定为无效。
*   **[S1] Landlock 沙箱破坏工作区访问** ([#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153))
    *   **影响**: Linux 用户在使用 Shell 工具后，后续文件访问可能永久失效。
*   **[S2] systemd 服务与手动运行端口冲突** ([#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628))
    *   **详情**: 安装为服务后自启动占用 42617 端口，导致用户手动运行 `zeroclaw daemon` 时报错，用户体验割裂。
*   **[Bug] Web Dashboard Session 不持久化** ([#5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634))
    *   **详情**: 即使配置了 `session_persistence = true`，刷新页面依然重置会话。
*   **[Bug] API Key 配置被错误警告** ([#5629](https://github.com/zeroclaw-labs/zeroclaw/issues/5629))
    *   **详情**: v0.6.9 中合法的 `api_key` 配置项被识别为未知 key 并报警。

## 6. 功能请求与路线图信号
*   **Anthropic 原生扩展思考**: 社区活跃提交了实现 Anthropic 原生 extended thinking 的 PR ([#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652)), 旨在提升复杂任务下的推理质量。
*   **LINE Messaging API 支持**: 新增了 LINE 渠道的实现 PR ([#5642](https://github.com/zeroclaw-labs/zeroclaw/pull/5642))，这将显著扩展 ZeroClaw 在东南亚和日本市场的覆盖能力。
*   **SQLite 向量搜索优化 (ANN)**: Issue [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) 提出用近似最近邻 (ANN) 索引替代当前的 O(n) 全表扫描，这将极大提升本地知识库的检索效率。
*   **Web UI 增强请求**: [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) 请求支持在 Web 聊天界面通过 Ctrl+V 粘贴图片或拖拽上传，这是提升 Web 易用性的关键细节。

## 7. 用户反馈摘要
*   **安装体验不佳**: 用户反馈 `install.sh` 和 `Web Dashboard` 的构建问题增加了上手难度。
*   **内存模块稳定性**: 用户对“内存雪球”效应表示担忧，这直接影响长期运行的稳定性。
*   **交互细节**: 缺失的图片粘贴功能和 Session 不保持的问题，表明 Web UI 的用户体验仍需打磨，目前更适合作为调试工具而非日常聊天界面。

## 8. 待处理积压
*   **PR #5559 (Workspace Split) 后续**: 虽然大合并已完成，但大量清理工作（如[#5639](https://github.com/zeroclaw-labs/zeroclaw/pull/5639)移动 Telegram/Matrix 实现）仍在进行中，代码库目前处于暂时的不稳定状态。
*   **SOP 子命令缺失**: CLI 定义的 `sop` 子命令无法使用 ([#5560](https://github.com/zeroclaw-labs/zeroclaw/issues/5560))，尽管已有修复 PR ([#5624](https://github.com/zeroclaw-labs/zeroclaw/pull/5624))，但显示未合并。
*   **Matrix 编译问题**: `matrix-sdk` 在较新 Rust 版本下的编译问题虽然已定位，但修复 PR 尚未显示合并，E2EE 功能仍未恢复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

你好！我是 PicoClaw 项目分析师。基于 2026 年 4 月 12 日 00:00 的 GitHub 数据快照，以下是 PicoClaw 项目的日报分析。

---

## 📅 PicoClaw 项目日报 | 2026-04-12

### 1. 今日速览
PicoClaw 项目今日处于**高度活跃的开发与修复状态**。过去 24 小时内共处理了 21 个 Issues 和 PRs，显示出社区与维护者的高参与度。项目发布了新的 Nightly 版本（v0.2.6-nightly.20260411），重点解决了近期版本中困扰用户的 WebSocket 连接稳定性问题。同时，代码库正在进行重大重构（Config v3），以支持多频道实例化和更深度的模型集成。

---

### 2. 版本发布
**最新版本：nightly (v0.2.6-nightly.20260411.748ac58d)**
*   **类型：** 自动化构建
*   **状态：** 可能不稳定，建议谨慎使用。
*   **重点关注：** 该版本通常包含针对 main 分支的最新修复。鉴于近期大量关于 WebSocket 连接失败 的 Bug 报告，该 Nightly 版本可能包含关键的修复补丁。
*   **完整变更日志：** [Compare v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

---

### 3. 项目进展
今日虽仅有 1 个 PR 合并，但大量 PR 正在积极审查中，显示出项目正在进行密集的代码迭代：

*   **[PR #2474] 修复 Cron 任务会话污染** (待合并)
    *   **进展：** 修复了定时任务共用同一个 Session Key 导致的历史记录累积问题。
    *   **意义：** 确保每次定时报文都是独立的会话，防止上下文混乱，极大提升了 Cron 任务的可靠性。
    *   **链接：** [sipeed/picoclaw#2474](https://github.com/sipeed/picoclaw/pull/2474)

*   **[PR #2481] 核心：Config v3 重构 (待合并)**
    *   **进展：** 对配置系统进行了破坏性重构，引入 `channel_list` 以支持多实例频道。
    *   **意义：** 这将为未来支持多个 Telegram Bot 或 Discord 实例打下基础，是架构升级的重要一步。
    *   **链接：** [sipeed/picoclaw#2481](https://github.com/sipeed/picoclaw/pull/2474)

*   **[PR #2475] 集成 Gemini 原生支持 (待合并)**
    *   **进展：** 分离了思维链 输出，并新增了对 Gemini 模型的原生支持。
    *   **链接：** [sipeed/picoclaw#2475](https://github.com/sipeed/picoclaw/pull/2475)

---

### 4. 社区热点
今日讨论焦点集中在连接性问题和渠道支持：

*   **🔥 [Issue #2433] 官方 Discord 社区管理缺失**
    *   **热度：** 👍 2，评论活跃。用户质疑官方人员仅在微信群活跃，忽略了 Discord 社区，导致重大更新说明滞后。
    *   **分析：** 反映了国际化社区运营与用户增长之间的管理脱节，用户渴望更官方的沟通渠道。
    *   **链接：** [sipeed/picoclaw#2433](https://github.com/sipeed/picoclaw/issues/2433)

*   **🔥 [Issue #41] 集成 Signal 通讯频道**
    *   **热度：** 👍 7，长期请求。用户强烈建议引入 Signal 作为隐私优先的通讯渠道。
    *   **分析：** 鉴于用户对隐私的重视，Signal 的集成可能比 WhatsApp 优先级更高。
    *   **链接：** [sipeed/picoclaw#41](https://github.com/sipeed/picoclaw/issues/41)

---

### 5. Bug 与稳定性
今日报告了多个严重 Bug，主要集中在 **v0.2.5/v0.2.6 版本的兼容性回归**：

*   **🔴 严重：WebSocket 连接大面积失败**
    *   **Issues：** [#2319](https://github.com/sipeed/picoclaw/issues/2319), [#2463](https://github.com/sipeed/picoclaw/issues/2463), [#2439](https://github.com/sipeed/picoclaw/issues/2439)
    *   **现象：** v0.2.3/2.4 正常，升级到 v0.2.5/2.6 后 WebSocket 连接失败。
    *   **状态：** 已关闭，推测在最新 Nightly 或 main 分支中已修复。

*   **🔴 严重：Windows 平台文件列表工具崩溃**
    *   **Issue：** [#2472](https://github.com/sipeed/picoclaw/issues/2472)
    *   **现象：** `list_dir` 在 Windows 下报错 "invalid argument"。
    *   **原因：** 路径分隔符（`\` vs `/）处理不兼容。

*   **🟠 功能性：消息处理丢失**
    *   **Issue：** [#2447](https://github.com/sipeed/picoclaw/issues/2447)
    *   **现象：** 连续发送任务时，只处理最后一条，前面的消息被忽略。

*   **🟠 配置：网关认证 Token 环境变量失效**
    *   **Issue：** [#2438](https://github.com/sipeed/picoclaw/issues/2438)
    *   **现象：** `PICOCLAW_GATEWAY_TOKEN` 无法控制 `/pico/ws` 的认证。

---

### 6. 功能请求与路线图信号
用户正在推动 PicoClaw 向自动化报警和企业级集成方向发展：

*   **SMTP 邮件频道 (Issue #2465)**
    *   **请求：** 增加通过 SMTP 发送邮件的功能，用于发送周报或定时检查结果。
    *   **判断：** 需求合理，且 SMTP 是通用协议，实现难度较低，有望纳入后续版本。

*   **Grafana Alertmanager 集成 (PR #2251)**
    *   **状态：** 待合并。
    *   **信号：** 这是一个高价值的企业级功能，允许 AI 直接处理运维告警。

*   **Ollama Cloud 凭证支持 (Issue #2225)**
    *   **请求：** 缺少对 Ollama Cloud 的凭证配置选项。

---

### 7. 用户反馈摘要
*   **痛点：** **版本兼容性差**。多位用户反馈从 v0.2.4 升级到 v0.2.5+ 后出现 WebSocket 连接中断，导致服务不可用，呼吁尽快发布正式修复版。
*   **痛点：** **配置文档滞后**。随着 Config v3 和多实例支持的到来，用户对于如何正确配置环境变量（如 `PICOCLAW_GATEWAY_TOKEN`）感到困惑。
*   **满意点：** 用户对 Cron（定时任务）功能的潜力表示肯定，特别是用于周期性检查和周报生成。

---

### 8. 待处理积压
提醒维护者关注以下长期悬而未决的问题：

*   **[Issue #2438] PICOCLAW_GATEWAY_TOKEN 认证控制** (2026-04-09)
    *   **风险：** 安全相关的配置误导，可能导致用户暴露 WebSocket 端点。
*   **[Issue #2225] Ollama Cloud 凭证支持** (2026-03-31)
    *   **积压时间：** 超过 10 天，仍有用户在询问。
*   **[Issue #41] Signal 频道集成** (2026-02-11)
    *   **积压时间：** 2 个月，高赞请求，建议纳入路线图考量。

---
*数据来源：GitHub API (sipeed/picoclaw) | 生成时间：2026-04-12*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 - 2026-04-12

## 1. 今日速览
NanoClaw 项目今日处于**极度活跃**状态，社区贡献热情高涨。过去 24 小时内共产生了 19 条 PR 更新，远超日常水平，主要集中在**MCP 协议集成**（如 Todoist、Google Calendar）和**运行时架构的变革**（Native Mode）。虽然 Issues 仅有 3 条新增，但 PR 的大量涌入表明项目正在快速迭代新功能。今日代码审查压力较大，有 13 个 PR 处于待合并状态，且包含数个涉及核心架构的重大变更。

## 2. 版本发布
**无新版本发布**。

## 3. 项目进展
今日共有 **6 个 PR 被关闭/合并**，标志着以下功能或修复已落地：
*   **安全性强化**：PR #1744 合并，关闭了 direct-auth 的凭证绕过路径，强制所有容器通过凭证代理，增强了系统的安全性。
*   **调度修复**：PR #1617 合并，修复了计划任务在群组（JID）下的调度逻辑错误。
*   **遗留功能落地**：长期开放的 PR #25 (Telegram 频道支持) 和 #14 (挂载安全白名单) 终于被关闭并合并，这将显著扩展 NanoClow 的多平台接入能力和文件访问安全性。
*   **GFW 适配**：PR #76 合并，为 WhatsApp 认证脚本增加了 HTTP 代理支持，解决了特定地区的网络连接问题。

## 4. 社区热点
**讨论热度最高：SSL 证书故障**
*   **[Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503)**: 关于官方站点 `nanoclaw.dev` SSL 证书失效的讨论目前已有 **17 条评论**。虽然这是一个运维问题，但极高的评论数反映了社区对项目官网可用性的高度关注，可能正在影响新用户的接入体验。

**架构重构争议：Native 模式 vs Docker 隔离**
*   **[Issue #1732](https://github.com/qwibitai/nanoclaw/issues/1732)** & **[PR #1739](https://github.com/qwibitai/nanoclaw/pull/1739)**: 社区正在热烈讨论是否引入“原生运行模式”。用户希望绕过 Docker 直接访问宿主机的 tmux、浏览器或 macOS API。这触及了 NanoClow 核心设计哲学（容器隔离 vs 宿主集成），是当前最具技术深度的讨论话题。

**品牌重塑提议**
*   **[PR #1738](https://github.com/qwibitai/nanoclaw/pull/1738)**: 一项将项目名称从 "NanoClaw" 更改为 "Argus" 的 PR 引发了关注。这种全局性的重命名通常意味着项目可能进入新阶段或正在进行品牌调整。

## 5. Bug 与稳定性
*   **[严重] 凭证代理路径丢失 (PR #1746)**
    *   **问题**: 凭证代理在转发请求时会丢弃上游 URL 的路径组件，导致带有非根路径（如 `/api/anthropic`）的 API 提供商调用失败。
    *   **状态**: 修复 PR 已提交，处于待合并状态。
*   **[中等] API 错误静默失败 (PR #1741)**
    *   **问题**: 当上游 API（如 Anthropic）返回 429/5xx 错误时，系统仅在内部设置错误标志，未向用户反馈，导致 5 次重试后消息直接丢失。
    *   **影响**: 严重影响用户对系统稳定性的信任。
    *   **状态**: 修复方案已提出，待审查。

## 6. 功能请求与路线图信号
从今日活跃的 PR 中，可以清晰地看到下一阶段的功能路线图：
*   **MCP (Model Context Protocol) 生态爆发**:
    *   **PR #1747**: 集成 Todoist 任务管理。
    *   **PR #1737**: 集成 Google Calendar。
    *   **PR #1742**: 集成 Vikunja 任务管理。
    *   **PR #1736**: 配置 Hostinger MCP 服务器。
    *   **分析**: NanoClaw 正在致力于变成一个全能的自动化代理，MCP 协议是其扩展能力的核心手段。
*   **Slack 体验升级**:
    *   **Issue #1745**: 用户请求改进 Slack 的交互体验（线程回复、思考指示器、表情回应），并表示已准备好代码帮助解耦阻塞的 PR。这表明 Slack 企业用户有增强的交互需求。
*   **运行时灵活性**:
    *   **Issue #1732**: 强烈请求“原生运行模式”，以支持需要深度宿主集成的边缘用例。

## 7. 用户反馈摘要
*   **痛点**: 容器隔离虽然安全，但在需要操作宿主机的 tmux 会话、带 UI 的浏览器或调用 macOS 特定 API 时，成为了“硬伤”，用户不得不挂载整个根文件系统作为变通方案。
*   **场景**: 用户在 Slack 生产环境中运行代理时，发现缺乏线程回复和状态指示导致交互体验不佳。
*   **集成需求**: 大量用户希望代理能无缝操作他们的个人生产力工具（Todoist, 日历, Vikunja）。

## 8. 待处理积压
*   **[Issue #1745](https://github.com/qwibitai/nanoclaw/issues/1732)** (Slack UX): 提及已有 3 个相关 PR (#522, #653, #682) 因缺乏公开审查而被阻塞。建议维护者优先审查这批 PR，以回应社区贡献者的意愿。
*   **[PR #1740](https://github.com/qwibitai/nanoclaw/pull/1740)**: 修复了 `.env` 中 `ANTHROPIC_BASE_URL` 变量未传递给容器的问题。这是一个影响自定义 API 提供商用户的 Bug，建议优先合并。
*   **[PR #1311](https://github.com/qwibitai/nanoclaw/pull/1311)** (Feature create new session): 创建于 3 月 21 日，目前仍在活跃更新中。属于长期未合并的功能请求。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-12)

> **报告基于数据**: 2026-04-12 00:00 - 24:00
> **项目**: NullClaw (nullclaw/nullclaw)
> **分析师视角**: AI 智能体与个人助手基础设施

---

## 1. 今日速览
NullClaw 项目今日呈现**高活跃度**开发状态，但暂无新版本发布。
*   **代码提交激增**：过去 24 小时内新增了 8 条待合并的 PR，显示出核心开发团队正在积极进行密集的代码修复与功能迭代。
*   **修复导向**：今日的 PR 集中解决安全沙箱、Agent 路由逻辑及配置兼容性等关键痛点，尤其是针对 Docker 和 Linux 沙箱的稳定性进行了大幅修正。
*   **社区反馈**：社区报告了两个具体的 Bug，涉及 Docker 交互流程和 v2026.4.9 版本的 OTEL 配置回归，幸运的是，针对这些问题的修复代码已准备就绪。

---

## 2. 版本发布
*   **无新版本发布**
*   **观察**: 虽然 v2026.4.9 引入了新的 HTTPS 约束（导致 Issue #800），但项目组尚未发布包含修复的补丁版本。建议用户关注即将发布的 Release。

---

## 3. 项目进展
今日共有 8 个新 PR 处于待合并状态，主要涵盖安全强化、Bug 修复及基础设施优化：

*   **安全沙箱加固**
    *   **[#801](https://github.com/nullclaw/nullclaw/pull/801)**: 修复了 Docker 沙箱在自动检测创建时可能跳过挂载参数工厂的严重 Bug，防止了空的 `-v` 值传递。
    *   **[#805](https://github.com/nullclaw/nullclaw/pull/805)**: 提升了 Linux 沙箱（firejail/bubblewrap）的自动检测标准，现在必须能够实际运行沙箱命令才被视为可用，避免了“仅二进制存在”却无法运行的假阳性。

*   **Agent 与配置逻辑修复**
    *   **[#804](https://github.com/nullclaw/nullclaw/pull/804)**: 修复了会话路由逻辑，确保未绑定的会话正确保留在主代理 `main` 上，而非错误地路由到 `agents.list` 中的第一个代理。
    *   **[#802](https://github.com/nullclaw/nullclaw/pull/802)**: 实现了 CLI 交互的持久化，解决了 CLI 回复成功但 SQLite 历史记录为空的问题。
    *   **[#803](https://github.com/nullclaw/nullclaw/pull/803)**: 修复了 v2026.4.9 版本引入的 OTEL 端点校验过于严格的问题，再次允许使用本地容器主机名（如 `otel`）进行通信。

*   **功能增强与基础设施**
    *   **[#783](https://github.com/nullclaw/nullclaw/pull/783)**: 引入功能强大的 Cron 子代理引擎，支持 DB 支持的调度器、JSON 输出及运行历史记录。
    *   **[#798](https://github.com/nullclaw/nullclaw/pull/798)**: CI/CD 安全强化，固定了 GitHub Actions 的 commit SHA 并收紧了权限。

---

## 4. 社区热点
*   **[#763 - Docker agent onboard interactive issue step 8](https://github.com/nullclaw/nullclaw/issues/763)**
    *   **状态**: 开放
    *   **关注点**: 用户在 Docker 交互式接入的第 8 步遇到 `KeyWriteFailed` 错误，无法写入工作区路径。这反映了在新手引导流程中可能存在的权限或挂载配置障碍。

---

## 5. Bug 与稳定性
今日报告的 Bug 均与近期版本的变更相关，严重程度中等，且部分已有修复方案：

1.  **[Otel broke due to https constraint](https://github.com/nullclaw/nullclaw/issues/800)** (High)
    *   **现象**: v2026.4.9 强制 OTEL 端点必须使用 HTTPS，导致使用本地容器网络（如 `http://otel`）的配置失效。
    *   **状态**: 已有修复 PR **[#803](https://github.com/nullclaw/nullclaw/pull/803)** 待合并。

2.  **[Docker agent onboard interactive issue step 8](https://github.com/nullclaw/nullclaw/issues/763)** (Medium)
    *   **现象**: Docker Agent 交互流程中出现 `KeyWriteFailed` 错误，涉及工作区路径写入失败。
    *   **状态**: 尚未发现针对此具体 Issue 的修复 PR，需等待排查。

3.  **[Chat endpoint 404 fallback issue](https://github.com/nullclaw/nullclaw/pull/806)** (Fixed)
    *   **现象**: OpenAI 兼容提供商在 `/chat/completions` 返回 404 时未正确回退到 Responses API。
    *   **状态**: 已提交修复 PR **[#806](https://github.com/nullclaw/nullclaw/pull/806)**。

---

## 6. 功能请求与路线图信号
*   **自动化调度需求**: PR **[#783](https://github.com/nullclaw/nullclaw/pull/783)** 显示项目正在构建原生的 Cron 任务调度能力。这表明 NullClaw 正从一个单纯的“交互式助手”向“自动化任务平台”演进，未来版本将具备更强的定时任务和脚本管理能力。

---

## 7. 用户反馈摘要
*   **配置兼容性痛点**: 用户 *lestan* 在 Issue #800 中反馈，升级到 v2026.4.9 后原有的 OTEL 配置被破坏。这表明用户在本地开发环境（Podman/Compose）中大量使用非 HTTPS 的内部网络通信，强制 HTTPS 约束对此类使用场景造成了困扰。
*   **新手引导受阻**: 用户 *KazamiHazaki* 在 Issue #763 中的反馈表明，Docker 镜像的交互式配置流程可能存在易用性问题，特别是在处理挂载卷权限时的错误提示不够友好。

---

## 8. 待处理积压
*   **Issue #763 (Docker KeyWriteFailed)**: 虽然今日 PR 活跃，但该 Issue 报告的问题目前没有直接对应的修复 PR，且 Issue 已开放数日。建议维护者优先确认是否属于 PR #801（Docker mount args fix）的副作用，或需要单独修复。

---
*分析师注: 项目当前代码修复速度极快，维护者对安全性和底层沙箱稳定性（Docker/Linux）给予了高度重视，建议用户在下一个版本发布后尽快更新以获得关键的安全修复。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-12)

## 1. 今日速览
IronClaw 项目在过去 24 小时内显示出**极高的开发活跃度**与**密集的版本迭代**特征。今日社区共产生了 66 条更新（16 Issues + 50 PRs），且刚刚发布了 **v0.25.0** 版本。核心开发团队正集中修复新版本引发的 Bug（尤其是升级路径和 Web UI），同时推进多项架构级安全强化工作（TOCTOU 竞态修复、沙箱加固）。项目目前处于快速迭代期，虽然新功能大量上线，但稳定性问题（如 OAuth 连接、实例升级失败）有所抬头，需关注测试覆盖。

## 2. 版本发布
**[ironclaw-v0.25.0] (2026-04-11)** ([Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.25.0))
本次更新标志着生产级能力的显著提升，引入了重要的部署灵活性：
*   **[Added] 生产级工具与技能**：引入了文件历史和技能承诺系统，增强了 Agent 的长期记忆和执行可靠性 ([PR #2025](https://github.com/nearai/ironclaw/pull/2025))。
*   **[Added] 部署配置文件**：新增 `IRONCLAW_PROFILE` 环境变量支持，允许用户通过可扩展的部署配置文件灵活管理不同环境 ([PR #2203](https://github.com/nearai/ironclaw/pull/2203))。
*   **风险提示**：由于涉及工具系统和底层部署逻辑的重大变更，建议生产环境升级前关注近期关于升级失败的 Issue 报告。

## 3. 项目进展
尽管今日 PR 待合并量较大（42条），但核心维护者提交了多项关键修复，主要集中在安全与稳定性：
*   **安全加固 (PR #1591)**：[zmanian](https://github.com/zmanian) 提交了针对审批流程的重大安全修复，解决了 TOCTOU（检查-使用-时间）竞态条件漏洞，确保高并发下审批流程的原子性。
*   **交互体验优化 (PR #2348)**：修复了 Web 网关侧边栏聊天标题显示为十六进制 Hash 的问题，改为基于对话内容的描述性标题，提升用户体验。
*   **编排器稳定性 (PR #2340)**：在 Python 编排器中增加了“连续动作错误”计数器，防止 Agent 在工具调用失败时陷入无限死循环。
*   **CLI 增强 (PR #2342)**：新增 `ironclaw profile list` 子命令，方便用户查看和管理当前的部署配置文件。

## 4. 社区热点
*   **[热门 Issue #2323] 孤立的审批门**
    *   **链接**：[nearai/ironclaw#2323](https://github.com/nearai/ironclaw/issues/2323)
    *   **讨论**：用户反馈当对话线程被删除时，依赖该线程的审批“门”会变成孤立状态，导致前端无法关闭，后端无法解决。这暴露了状态管理生命周期设计的缺陷。
    *   **跟进**：已有修复 PR #2347 提出解决方案。
*   **[热门 PR #1549] Slack Socket Mode**
    *   **链接**：[nearai/ironclaw#1549](https://github.com/nearai/ironclaw/pull/1549)
    *   **讨论**：社区贡献者 [KonstantinMirin](https://github.com/KonstantinMirin) 提出的 Slack Socket Mode 支持长期受到关注，该功能允许无需公网 URL 即可连接 Slack，极大降低了部署门槛。
*   **[热门 PR #1378] 按通道过滤工具**
    *   **链接**：[nearai/ironclaw#1378](https://github.com/nearai/ironclaw/pull/1378)
    *   **讨论**：多通道部署（Slack + Telegram）场景下的热门需求，旨在防止 Agent 在错误的通道中调用敏感工具（如研究通道调用代码执行工具）。

## 5. Bug 与稳定性
**重点关注：v0.25.0 发布后的回归问题**
*   **[Critical] [Issue #2346] 实例升级失败**
    *   从 0.24.0 升级至 0.25.0 时无错误详情导致实例不可用。目前暂无 Fix PR。
    *   链接：[nearai/ironclaw#2346](https://github.com/nearai/ironclaw/issues/2346)
*   **[High] [Issue #2345] 工具安装权限反复询问**
    *   Agent 无法记住已批准的工具安装权限，导致交互体验严重下降。
    *   链接：[nearai/ironclaw#2345](https://github.com/nearai/ironclaw/issues/2345)
*   **[High] [Issue #2344] Web UI 控制台报错**
    *   Staging 环境页面加载即出现 CSP 违规和 TypeError，前端稳定性受损。
    *   链接：[nearai/ironclaw#2344](https://github.com/nearai/ironclaw/issues/2344)
*   **[Medium] 多项 OAuth 连接问题**
    *   Twitter/X 连接不可用 ([Issue #2230](https://github.com/nearai/ironclaw/issues/2230))
    *   Google Sheets OAuth 400 错误 ([Issue #2229](https://github.com/nearai/ironclaw/issues/2229))

## 6. 功能请求与路线图信号
*   **[Issue #2274] 流式工具调用反馈**
    *   请求在 Responses API 中增加对正在调用的工具的流式输出，以提高用户对 Agent 思考过程的可观测性。
*   **[Issue #2307] 无头模式下的 Gemini API 支持**
    *   用户请求支持 Google Generative Language API 的公共端点，以便在没有浏览器的无头部署环境中使用 Gemini 2.0+ 模型。
*   **[Issue #2277] V2 架构：ACP 子线程后端**
    *   计划让 IronClaw v2 能够将工作委托给外部编码 Agent（如 Codex, Droid），这是构建多 Agent 协作系统的重要信号。

## 7. 用户反馈摘要
从今日的 Issues 评论中可以提炼出以下痛点：
*   **多通道一致性体验差**：用户在 CLI 中创建的 Routines 无法在 Telegram 中看到，或者 CLI 设置的记忆在 Telegram 中不可用，显示出不同通道间数据隔离的设计令用户感到困惑。
*   **版本升级焦虑**：由于 v0.25.0 的改动较大，用户在尝试升级时遇到了阻塞（如 Issue #2346），且缺乏详细的错误日志增加了排查难度。
*   **Raspberry Pi 支持**：仍有用户尝试在 ARMv7 架构上编译项目失败，询问边缘设备支持计划 ([Issue #1339](https://github.com/nearai/ironclaw/issues/1339))。

## 8. 待处理积压
以下 Issue 处于 Open 状态较长时间或影响较广，建议维护者优先关注：
*   **[Issue #2135] 飞书 Channel 版本更新失败**：WASM 实例化错误，导致 Channel 无法从 0.1.0 更新至 0.1.4，属于扩展生态的基础设施阻塞问题。
*   **[PR #1549] & [PR #1378]**：两个高价值功能 PR（Slack Socket Mode 和 按通道过滤工具）已开放超过 20 天仍未合并，可能存在代码审查积压。
*   **[Issue #1339] ARMv7 架构支持**：长期未解决的构建问题，限制了硬件兼容性。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-12)

> 📅 日期：2026 年 4 月 12 日  
> 📊 数据来源：netease-youdao/LobsterAI GitHub 仓库  
> 🤖 分析师：AI 智能体与个人助手领域专家

---

### 1. 今日速览
LobsterAI 项目在过去 24 小时内保持了**高活跃度**的开发状态，主要集中在 **交互体验优化**、**构建系统修复**及**个性化功能**的补全。
- **代码提交层面**：共有 **6 个 PR** 处于活跃状态，其中 2 个已合并/关闭，4 个待审核。核心开发团队不仅修复了 Windows 平台安装器的严重性能阻塞问题，还重点提升了全局搜索体验和 MCP 模板的易用性。
- **社区交互层面**：Issue 讨论相对平静，仅有 1 条关于“本地模型与 Skill 兼容性”的新提问。
- **整体评估**：项目正在稳步向 v1.0 迈进，今日的改动显著提升了产品的易用性和安装稳定性，未见阻塞性风险。

---

### 2. 版本发布
**当前状态：无新版本发布**
- 虽然代码库有频繁的 Merge 记录，但今日未触发新的 GitHub Release。
- *推测*：今日合并的性能修复（#1633, #1630）和功能增强可能会累积在下一个迭代版本中发布。

---

### 3. 项目进展
今日合并及推进的功能主要聚焦于**安装性能**与**用户体验**：

- **🚀 Windows 安装体验重构 (PR #1633, #1630)**
  - **状态**: 已关闭
  - **内容**: 修复了 NSIS 覆盖安装时的 UI 卡顿问题。原先安装程序会同步删除数千个文件（如 `node_modules`），导致界面假死。新方案采用了“重命名旧目录 -> 后台异步删除”的策略。
  - **影响**: 这是一项关键的用户体验修复，解决了用户反馈的安装过程中的长时间等待焦虑，显著提升了客户端在 Windows 系统上的升级流畅度。
  - **[查看 PR #1633](https://github.com/netease-youdao/LobsterAI/pull/1633)** | **[查看 PR #1630](https://github.com/netease-youdao/LobsterAI/pull/1630)**

- **🔍 全局搜索逻辑修复与 UX 升级 (PR #1634)**
  - **状态**: 待合并
  - **内容**: 解决了搜索结果被当前 Agent 上下文错误限制的 Bug。开发团队将前端搜索逻辑从双重过滤改为直接调用 `listSessions()`，确保实现真正的“全局搜索”，并配合 Redux 数据流稳定性进行了优化。
  - **价值**: 修复了用户在多任务切换时的核心痛点（搜不到其他 Agent 的任务），消除了用户行为与系统反馈之间的认知摩擦。
  - **[查看 PR #1634](https://github.com/netease-youdao/LobsterAI/pull/1634)**

- **🎨 个性化与易用性增强 (PR #1629, #1631)**
  - **状态**: 待合并
  - **内容**:
    1. **用户头像系统 (PR #1629)**: 新增用户头像设置功能，支持选择 6 款预置 SVG 头像或上传本地图片，补全了个人中心的基础体验。
    2. **MCP 快速模板 (PR #1631)**: 为 MCP (Model Context Protocol) 模块增加了“一键添加”功能，预置了 File System、SQLite、Brave Search 三个常用服务的模板，降低了配置门槛。
  - **[查看 PR #1629](https://github.com/netease-youdao/LobsterAI/pull/1629)** | **[查看 PR #1631](https://github.com/netease-youdao/LobsterAI/pull/1631)**

---

### 4. 社区热点
- **Issue #1632: 切换本地模型后 Skill 失效问题**
  - **链接**: [netease-youdao/LobsterAI #1632](https://github.com/netease-youdao/LobsterAI/issues/1632)
  - **热度**: 新开，目前 1 条评论。
  - **分析**: 这反映了用户在使用 **离线/私有化部署模型** 时的痛点。当用户从云端模型切换到本地模型（如 Ollama）时，原本配置的 Skill（技能）无法被调用或安装。这涉及到不同模型后端对 Tool Calling 协议的支持差异或配置迁移问题。
  - **诉求**: 用户迫切需要一个明确的迁移指南或自动化适配方案，以确保在切换模型基础后，原有的 Agent 能力（Skills）得以保留。

---

### 5. Bug 与稳定性
- **🔴 严重: 本地模型兼容性 Bug**
  - **来源**: Issue #1632
  - **描述**: 切换至本地模型导致 Skills 不可用。
  - **状态**: **无 Fix PR**，需维护者关注。
  - **影响范围**: 使用本地大模型的用户，核心功能受损。

- **🟢 已修复: Windows 安装 UI 阻塞**
  - **来源**: PR #1633 / #1630
  - **描述**: 安装覆盖时因同步删除大量文件导致界面无响应。
  - **状态**: **已修复**。

---

### 6. 功能请求与路线图信号
从今日的 PR 活动中可以观察到项目正在深化以下几个方向：
1. **深度个性化 (PR #1629)**: 引入头像设置表明产品正在从纯工具向“个人助手”转变，重视用户归属感。
2. **降低 MCP 配置门槛 (PR #1631)**: 通过预置模板推广 MCP 生态的使用，暗示未来会重点鼓励用户通过 MCP 扩展 AI 能力，接入外部工具（如数据库、搜索引擎）。
3. **多任务协作优化 (PR #1634)**: 全局搜索的修复和 UX 升级，暗示产品正在强化其作为“多 Agent 协作平台”的定位，而不仅仅是单轮对话窗口。

---

### 7. 用户反馈摘要
- **痛点**: 用户在尝试 **LobeAgent/LocalAI** 模式时遇到了**割裂感**——换了个模型，原来配置好的 Skills 就“丢了”或“不动了”。这表明项目在多模型/多后端切换的兼容性测试上可能存在盲区。
- **预期**: 用户希望模型切换是无感的，上层业务逻辑（Skills/Agents）应与底层的模型实现解耦。

---

### 8. 待处理积压
- **长期未合并 PR: #240 [Feat/workflow enhancement]**
  - **链接**: [netease-youdao/LobsterAI #240](https://github.com/netease-youdao/LobsterAI/pull/240)
  - **状态**: Open (stale)，创建于 2026-03-03，最后更新 2026-04-11。
  - **内容**: 提出了一种基于 Agent 职责分配的工作流增强功能，允许不同 Agent 处理不同任务，并根据输出（PASS/REJECT）进行回炉重造。
  - **风险**: 该 PR 涉及核心工作流逻辑，长期悬而未决可能影响路线图的清晰度。今日它被标记为 `stale`，建议维护者尽快评估是合并、重构还是拒绝，以免占用社区注意力。

---
**分析师结语**: LobsterAI 今天的开发动作非常扎实，特别是对 Windows 安装器的性能优化和对搜索逻辑的修正，属于“高频痛点”的有效解决。建议社区重点关注 Issue #1632 的进展，因为它触及了本地化部署的核心体验。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-04-12)

## 1. 今日速览
Moltis 项目在 2026-04-12 展现了极高的活跃度与维护效率。在过去 24 小时内，项目共处理了 23 个 Issues 和 PRs，其中 15 个问题已得到修复或关闭，显示出开发团队强劲的交付能力和响应速度。今日核心工作集中在**工具系统安全加固**与**原生文件系统支持**，不仅修复了多个涉及运行时配置被忽略的严重 Bug，还引入了更安全的文件操作方式和更强的循环检测机制。尽管没有发布新版本，但大量功能性和修复性 PR 的合并表明项目正在为下一次重要迭代做充分准备。

## 2. 版本发布
**无新版本发布**
*今日无版本更新发布，但鉴于大量 PR 已合并（如 PR #662, #663, #661 等），预计近期可能会有一个包含多项修复和优化的补丁版本上线。*

## 3. 项目进展
今日共有 **7 个 PR 成功合并或关闭**，项目在安全性、稳定性和核心功能上取得了实质性进展：

*   **安全强化**：合并了 **PR #662**，修复了当 `approval_mode` 关闭时 `exec` 工具白名单被静默绕过的严重安全漏洞，确保了无头模式下的执行安全。
*   **配置一致性修复**：合并了 **PR #663** 和 **PR #661**，分别修复了 Skills 启用配置被忽略和预设工具策略未应用于主 Agent 会场的问题，确保了文档配置与运行时行为的一致性。
*   **远程部署体验**：通过 **PR #665** 改进了远程设置流程，解决了新部署用户陷入“认证未配置”死胡同的问题，将其重定向至入门向导。
*   **钩子系统增强**：合并了 **PR #645**，在钩子载荷中增加了通道和发送者元数据，极大地方便了基于来源的自定义逻辑处理。
*   **内存与对话压缩**：**PR #653** 引入了新的确定性压缩策略，替代了原有的 LLM 摘要压缩，降低了成本并提高了可预测性。

## 4. 社区热点
今日讨论度最高的集中在**工具系统的重构**与**新能力的接入**：

*   **🔥 热门 PR [feat(tools): native filesystem tools](https://github.com/moltis-org/moltis/pull/666)**
    *   **状态**：Open
    *   **内容**：引入一套完整的原生文件系统工具，完全替代依赖 `exec("sh -c")` 的不安全文件操作。
    *   **分析**：该提案旨在解决 LLM 执行文件操作的惯用语问题，并提升安全性（如沙箱限制）。虽然尚未合并，但已获得高度关注，是工具系统现代化的关键一步。

*   **🔥 热门 Issue [Native filesystem tools](https://github.com/moltis-org/moltis/issues/657)**
    *   **状态**：Open
    *   **反馈**：用户指出当前所有文件操作都依赖 `exec` 是低效且危险的，强烈呼吁引入结构化的文件读写工具。

## 5. Bug 与稳定性
今日修复了多个严重的运行时逻辑错误，显著提升了系统稳定性：

1.  **[CRITICAL] 工具白名单失效 (PR #662)**
    *   **问题**：`tools.exec.allowlist` 在 `approval_mode = "off"` 时被静默忽略，导致未授权命令可能被执行。
    *   **状态**：已修复。
2.  **[HIGH] 配置陷阱 (PR #663, #661)**
    *   **问题**：`[skills] enabled = false` 不生效；`[agents.presets.*]` 的工具策略不影响主 Agent。这些“文档存在但功能无效”的问题严重困扰用户。
    *   **状态**：已修复。
3.  **[MEDIUM] 无限循环与资源浪费 (PR #664)**
    *   **问题**：Agent 在遇到工具调用错误时可能进入反射重试循环（如连续 25 次调用空参数），消耗配额且无错误检测。
    *   **状态**：修复 PR 已提交，增加了循环检测和参数预校验。
4.  **[MEDIUM] 语音转录空占位符 (Issue #632)**
    *   **问题**：当语音识别返回空结果时，包含占位符的文本被发送给 LLM，导致 LLM 产生无意义的 TTS 回复。
    *   **状态**：Issue 已关闭。

## 6. 功能请求与路线图信号
从今日的 Issues 和 Open PRs 可以看出未来的开发重点：

*   **原生文件系统支持**：**PR #666** 和 **#667** 的出现表明项目正在积极构建类似 Claude Code 的文件操作能力（Read/Write/Edit/Grep 等）。这极有可能被纳入下一个版本。
*   **Nostr 集成**：用户提出了 **[Issue #668](https://github.com/moltis-org/moltis/issues/668)** 请求支持 Nostr DM，显示出社区对去中心化社交协议接入的兴趣。
*   **Prompt Memory 架构优化**：**PR #660** 提议重新设计内存语义，增加 `prompt-only` 等模式，这预示着项目正在优化长对话记忆和上下文管理机制。

## 7. 用户反馈摘要
*   **痛点**：**配置系统的复杂性**。多个 Bug 反映（#655, #656, #654）用户发现配置项即使写了文档也可能不生效，导致挫败感。修复这些“幽灵配置”是提升用户信任的关键。
*   **场景**：**远程部署与容器化**。从 #646 和 #665 的讨论中可以看出，不少用户在 Docker 等无头环境中运行 Moltis，对初始化向导和非交互式配置有强烈需求。
*   **期望**：对**工具生态**的丰富性有高要求，特别是希望摆脱对 shell 命令的依赖，转而使用结构化工具。

## 8. 待处理积压
*   **[Feature] Application/Channel Level Proxy (#548)**：该 Feature Request 虽然已关闭，但代理支持一直是企业级用户的关键需求，需确认是否已列入路线图。
*   **[Open] Browserless v2 Support (PR #659)**：虽然已提出 PR，但尚未合并。对于依赖浏览器工具的用户，这是一个值得关注的待办事项。
*   **[Open] Nostr DM (#668)**：新功能请求，目前尚未分配处理，社区建议关注。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-12)

## 1. 今日速览
CoPaw 项目今日处于**极高活跃度**状态。过去 24 小时内产生了 24 条新 Issues 和 14 条新 PR，显示出社区强大的参与热情。今日动态主要集中在**技能系统的易用性与稳定性**（技能去重、取消选择、强制调用）、**多模型兼容性**（Ollama, Zhipu AI, Gemini, OpenRouter）以及**前端交互体验**（按钮化操作、暗黑模式适配）上。尽管没有新版本发布，但大量 `first-time-contributor` 标记的 PR 表明项目正在吸引新鲜血液，特别是模型提供商支持层正在快速扩张。

---

## 2. 版本发布
**无新版本发布**
*(注：当前最新版本疑似为 v1.0.2，多个 Issue 报告了该版本中的回归问题)*

---

## 3. 项目进展
今日虽无 PR 合并，但大量新 PR 的提交指明了项目正在积极修复缺陷和拓展功能边界：

*   **核心交互优化**：
    *   PR [#3257](https://github.com/agentscope-ai/CoPaw/pull/3257) 提交了方案，将 CLI 中繁琐的 `/approve` 文本指令改为 GUI 上的“确认/取消”按钮，直接响应了 Issue [#2945](https://github.com/agentscope-ai/CoPaw/issues/2945) 的痛点，预计将显著提升 CLI 的交互友好度。
    *   PR [#3267](https://github.com/agentscope-ai/CoPaw/pull/3267) 修复了暗黑模式下置顶按钮不可见的问题，解决了 UI 一致性缺陷。

*   **模型与协议支持**：
    *   社区贡献者正在积极扩宽模型生态。PR [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) 为 OpenRouter 增加了更精细的模型过滤功能；PR [#3258](https://github.com/agentscope-ai/CoPaw/pull/3258) 增加了对 `<thought>` 标签的解析支持，以兼容特定 API 的思维链输出格式。

*   **基础设施增强**：
    *   PR [#2506](https://github.com/agentscope-ai/CoPaw/pull/2506) 试图建立全渠道的契约测试基础，这是提升项目长期稳定性的关键举措。

---

## 4. 社区热点
今日讨论热度集中在**Windows 平台兼容性**和**技能系统逻辑**上：

*   **热点 Issue**：
    *   **[#3269](https://github.com/agentscope-ai/CoPaw/issues/3269)**：用户强烈反馈 **CoPaw 在 Windows 上存在严重体验问题**，包括离线无法启动、Local 模式无法调用 GPU。该问题直击“个人助理”的核心场景，引发共鸣。
    *   **[#2902](https://github.com/agentscope-ai/CoPaw/issues/2902)**：关于技能调用机制的深度讨论。用户指出当前的技能调用是“随机/遍历”的，缺乏确定性和效率，呼吁增加类似 Claude Code 的 `@` 强制调用机制。
    *   **[#2270](https://github.com/agentscope-ai/CoPaw/issues/2270)**：虽然已关闭，但关于支持 `@` 或 `/` 快捷调用技能的讨论仍在持续，用户希望从“手动输入请执行...”的繁琐中解脱出来。

---

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，其中 Windows 和多模态相关较为严重：

*   **高危**：
    *   **[#3218](https://github.com/agentscope-ai/CoPaw/issues/3218)** (已关闭)：Ollama 连接失败且多模态检测错误。
    *   **[#3011](https://github.com/agentscope-ai/CoPaw/issues/3011)**：长任务静默停止，前后端无报错。这属于严重的幽灵 Bug，影响自动化任务的可靠性。

*   **中等**：
    *   **[#3262](https://github.com/agentscope-ai/CoPaw/issues/3262)**：多 Telegram Bot 实例下，工具审批消息串台（错误的 Bot 收到了审批请求），这是一个逻辑混乱问题。
    *   **[#3259](https://github.com/agentscope-ai/CoPaw/issues/3259)**：Zhipu AI GLM-4.6V-Flash 被错误识别为纯文本模型，导致多模态能力失效。
    *   **[#3275](https://github.com/agentscope-ai/CoPaw/issues/3275)**：后台任务在 Agent 重载时被意外终止，破坏了长时任务的生命周期管理。
    *   **[#3142](https://github.com/agentscope-ai/CoPaw/issues/3142)**：技能在禁用状态下仍被 Agent 调用，属于开关逻辑失效。

---

## 6. 功能请求与路线图信号
用户正在推动 CoPaw 向更实用的工具方向发展：

*   **生产级特性**：
    *   **[#2902](https://github.com/agentscope-ai/CoPaw/issues/2902)**：请求增加技能调用选项和 App 连接功能，希望 CoPaw 超越“玩具”阶段。
    *   **[#2457](https://github.com/agentscope-ai/CoPaw/pull/2457)**：正在进行中的资产备份与迁移模块，这是生产环境必不可少的数据安全功能。

*   **技能生态**：
    *   **[#3241](https://github.com/agentscope-ai/CoPaw/issues/3241)**：请求下载 AI 编写的技能，促进技能分享。
    *   **[#3089](https://github.com/agentscope-ai/CoPaw/issues/3089)**：请求优化技能池加载逻辑（只显示差值），减少 UI 干扰。

*   **平台与架构**：
    *   **[#3266](https://github.com/agentscope-ai/CoPaw/issues/3266)**：请求对 Windows on ARM (Snapdragon X Elite) 提供原生支持，顺应 AI PC 硬件趋势。
    *   **[#3264](https://github.com/agentscope-ai/CoPaw/issues/3264)**：请求接入阿里云记忆库以实现长期记忆。

---

## 7. 用户反馈摘要
*   **痛点**：**Windows 支持极其糟糕**。用户反馈 CoPaw Local 在 Windows 上占用 CPU 而非 GPU，且必须联网才能启动，这背离了本地代理的初衷。此外，**浏览器自动化能力被评价为“非常差”** ([#3261](https://github.com/agentscope-ai/CoPaw/issues/3261))。
*   **困惑**：技能系统的状态管理混乱。用户发现新建智能体时选了部分技能，再次编辑会变成全选 ([#3088](https://github.com/agentscope-ai/CoPaw/issues/3088))；技能标签无法在不同技能间复用 ([#3270](https://github.com/agentscope-ai/CoPaw/issues/3270))。
*   **期望**：**确定性控制**。用户迫切需要像 Cursor 或 Claude Code 那样的 `@` 调用能力，而不是依赖 LLM 随机选择技能。

---

## 8. 待处理积压
*   **长期未解决**：飞书消息重复处理问题 ([#1403](https://github.com/agentscope-ai/CoPaw/issues/1403)) 自 3 月中旬提出至今未解决。
*   **需要关注**：**语义化技能路由** ([#3117](https://github.com/agentscope-ai/CoPaw/pull/3117))。该 PR 提出通过 Embedding 检索来过滤技能，以解决“技能过多导致 Context 溢出和调用不准”的问题，这直击用户痛点，建议优先 Review。

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