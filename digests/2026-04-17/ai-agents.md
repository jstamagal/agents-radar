# OpenClaw 生态日报 2026-04-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-17 00:17 UTC

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

**OpenClaw 项目动态日报 | 2026-04-17**

---

### 1. 今日速览
OpenClaw 项目今日处于**极高活跃度**状态，过去 24 小时内共处理了 **1000+** 个更新（Issues 与 PRs 各约 500 条）。社区提交与维护者响应均保持在高压水平，项目正处于 v2026.4.15 版本的快速迭代期，重点集中在**多模态能力增强**（如 Google TTS、Claude 图像理解）和**基础组件的稳定性修复**。值得注意的是，今日 Issues 讨论热度极高，反映出版本发布后出现了一些回归问题，但维护团队通过高频次合并修复 PR 展现了强大的响应速度。

---

### 2. 版本发布
今日发布了 **2 个** 重要版本，标志着 Anthropic 模型集成与语音能力的重大升级。

*   **[v2026.4.15 (Stable)](https://github.com/openclaw/openclaw/releases/tag/v2026.4.15) & [v2026.4.15-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.4.15-beta.2)**
    *   **核心更新**：
        *   **Anthropic 模型增强**：默认 Anthropic 模型选择已更新；新增 `opus` 别名；为 CLI 默认配置 Claude；将图像理解功能捆绑至 **Claude Opus 4.7**。
        *   **Google TTS 集成**：为内置 `google` 插件添加了 **Gemini text-to-speech** 支持。功能包括 Provider 注册、语音选择以及 WAV 格式回复输出。
    *   **注意事项**：由于涉及模型别名和默认配置变更，升级后请检查特定的 Agent 配置是否按预期工作。

---

### 3. 项目进展
今日 PR 合并活动频繁，项目在架构重构、平台兼容性和功能扩展上均有显著推进。

*   **[Memory v2 基础架构 (PR #67836)](https://github.com/openclaw/openclaw/pull/67836)**
    *   提交了基于 SQLite 的 Memory v2 侧边车及两个管道的基础代码。
    *   **影响**：为下一代记忆系统（ingest 和 rerank）奠定了基础，虽然目前默认关闭，但展示了项目架构的演进方向。
*   **Windows 平台支持加强 (PR #66898, #64709)**
    *   提交了 **Windows 原生包装器与加固安装程序**，旨在解决 Windows 用户体验问题。
    *   修复了 **Windows CJK 编码问题**，解决了子进程输出乱码，这对亚洲用户至关重要。
*   **UX 与核心修复**
    *   **[PR #67819](https://github.com/openclaw/openclaw/pull/67819)**：彻底改革了 Web UI 的设置和斜杠命令体验，增加了快速设置和向导。
    *   **[PR #65508](https://github.com/openclaw/openclaw/pull/65508)**：修复了工具调用 XML 标签泄露到用户消息中的问题，清理了聊天界面的显示噪点。
    *   **[PR #67536](https://github.com/openclaw/openclaw/pull/67536)**：修复了 Slack 子代理消息路由问题，确保多代理协作在 Slack 中的连贯性。

---

### 4. 社区热点
今日社区讨论聚焦于**本地化支持**、**桌面端缺失**以及**特定模型的稳定性问题**。

*   **[#3460 Internationalization (i18n) Support](https://github.com/openclaw/openclaw/issues/3460)** (120 评论)
    *   **摘要**：关于国际化需求的长期讨论。官方再次重申目前没有带宽支持多语言，但这并未阻止社区的热情讨论。
*   **[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (82 评论, 👍 68)
    *   **摘要**：这是呼声最高的功能之一。用户强烈要求 Linux 和 Windows 平台拥有类似 macOS 的原生应用体验，今日 Windows 相关 PR 的活跃正是对这一诉求的回应。
*   **[#26322 OAuth token refresh race condition](https://github.com/openclaw/openclaw/issues/26322)** (21 评论, 👍 14)
    *   **摘要**：关于 OAuth 认证在多 Agent 环境下的竞态条件导致 `refresh_token_reused` 错误，涉及底层认证逻辑的稳定性。

---

### 5. Bug 与稳定性
今日报告了大量 Bug，主要集中在 **Onboarding 流程崩溃**、**UI 渲染回归** 以及 **特定提供商的连接问题**。

*   **🔴 严重崩溃**
    *   **[TypeError: Cannot read properties of undefined (reading 'trim')](https://github.com/openclaw/openclaw/issues/67291)** (👍 2) - 这是一个**高频回归问题**，导致 `onboard` 流程无法完成。虽然部分相关 Issue 显示已关闭，但截至日报生成时，仍有用户报告该问题（如 #67684）。建议用户关注 v2026.4.16 的修复或等待 Hotfix。
*   **🟠 功能回归**
    *   **[#67035 Windows chat UI regression](https://github.com/openclaw/openclaw/issues/67035)**：v2026.4.14 更新后，Windows 用户报告输入框吞字、流式回复不可见，严重影响可用性。
    *   **[#66633 openai-codex Cloudflare 403](https://github.com/openclaw/openclaw/issues/66633)**：更新到 v2026.4.14 后，OpenAI Codex 提供商因 Cloudflare 验证导致每个请求失败。
    *   **[#53959 GPT-5.3-codex tools not executing](https://github.com/openclaw/openclaw/issues/53959)**：GPT-5.3-codex 模型在更新后停止执行任何工具（MCP, Web Search 等）。
*   **🟡 行为异常**
    *   **[#67775 MCP server connection refused at LAN](https://github.com/openclaw/openclaw/issues/67775)**：Agent 无法连接局域网内的 MCP 服务器，涉及局域网访问权限配置。
    *   **[#67744 Agent infinite-loops on TTS](https://github.com/openclaw/openclaw/issues/67744)**：未配置 TTS 时，Agent 请求语音会陷入死循环，产生数百条重复消息。

---

### 6. 功能请求与路线图信号
用户提出了多项改进建议，其中部分已被纳入开发计划。

*   **[Feature: Cognitive Memory Layer (Issue #52532)](https://github.com/openclaw/openclaw/issues/52532)**
    *   提议引入基于艾宾浩斯遗忘曲线的认知记忆层，赋予 Agent 跨会话的持久语义记忆。这与今日提交的 Memory v2 PR 高度相关，可能是路线图的一部分。
*   **[Feature: Models fully dynamic discovery (Issue #10687)](https://github.com/openclaw/openclaw/issues/10687)**
    *   社区强烈要求对 OpenRouter 等快速迭代的提供商实现完全动态的模型发现，摆脱静态硬编码目录。
*   **[Feature: Message Bus for Agent Comms (Issue #52290)](https://github.com/openclaw/openclaw/issues/52290)**
    *   提议引入 Agent 间通信的消息总线插件，以解决复杂协作场景下的信息孤岛问题。

---

### 7. 用户反馈摘要
从今日的评论中提炼出的真实用户痛点：

*   **稳定性担忧**：多位用户在 [#67237](https://github.com/openclaw/openclaw/issues/67237) 中表达了对当前版本基本任务执行能力的失望，提到“即使是基本任务也会出错或覆盖配置”。
*   **Onboarding 体验**：新用户上手困难，Onboarding 引导频繁崩溃（`trim` 错误）成为了阻塞性门槛，安装成功率受到挑战。
*   **Windows 支持的渴望**：Windows 用户的挫败感较重，反映在 UI 渲染乱码、路径错误及缺乏原生守护进程支持上，这也促使了今日相关 Windows 修复 PR 的提交。
*   **多模态体验**：虽然新增了 Gemini TTS 和 Claude Opus 图像功能，但用户报告了诸多“盲点问题”（[#51857](https://github.com/openclaw/openclaw/issues/51857)），即 Agent 声称处理了图片但实际并未看到内容。

---

### 8. 待处理积压
以下 Issue 已长期存在且讨论度高，尚未完全解决，需持续关注：

*   **[#50999 Telegram polling stall loop](https://github.com/openclaw/openclaw/issues/50999)** (Open, 2026-03-20 创建) - Telegram 长轮询在 macOS 上反复停滞重启的问题仍未根除。
*   **[#51085 STT mic button blocked](https://github.com/openclaw/openclaw/issues/51085)** (Open, 2026-03-20 创建) - Control UI 的麦克风按钮因安全头配置而失效，语音交互入口受阻。
*   **[#51873 Context caching not working](https://github.com/openclaw/openclaw/issues/51873)** (Open, 2026-03-21 创建) - 上下文缓存功能在 Telegram 中几乎无效，增加了运营成本。

---

## 横向生态对比

这是一份基于 2026-04-17 社区动态的横向对比分析报告。

---

# 2026-04-17 开源 AI 智能体生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**“由 Beta 向成熟期过渡”的关键震荡阶段**。
*   **架构迭代加剧**：头部项目（如 ZeroClaw, IronClaw）正处于微内核或 Engine V2 重构的阵痛期，发布流水线受阻与旧 Bug 反复成为常态。
*   **多模态与协议整合**：生态重心从单纯的“文本对话”转向“全栈能力”，主要体现为对 **MCP (Model Context Protocol)** 的全面集成，以及对语音（TTS/STT）、图片理解和视频流的深入支持。
*   **运维与商业化探索**：部分项目开始引入“积分系统”或更强的多租户管理，但**稳定性**（特别是 Windows 兼容性和长任务假死问题）仍是制约用户生产环境部署的最大瓶颈。

## 2. 各项目活跃度对比

| 项目名 | 今日活跃度 | Issues 数 | PR 数 | Release 发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **极高** | ~500 | ~500 | v2026.4.15 (Stable) | ⚠️ **高压回归期** (高频更新伴随大量回归 Bug) |
| **NanoBot** | **极高** | 13 | 56 | 无 (大版本前夕) | 🟢 **高增长** (PR 合并率极高，社区响应快) |
| **ZeroClaw** | **极高** | 40 | 50 | 无 (流水线阻塞) | 🟠 **架构转型期** (受 v0.7.0 发版阻塞影响) |
| **IronClaw** | **极高** | 50 | 50 | 无 | 🔴 **高债修复期** (P0 级安全问题与大量积压) |
| **CoPaw** | **极高** | 50 | 50 | v1.1.2-beta.2 | 🟢 **生态爆发期** (多渠道集成，PR 合并率高) |
| **Moltis** | **高** | 28 | - | 20260416.02 | 🟢 **快速迭代** (修复迅速，路线清晰) |
| **NanoClaw** | **高** | 3 | 17 | 无 | 🟢 **功能深挖** (专注企业级 7 层架构) |
| **PicoClaw** | **中高** | - | - | v0.2.6-nightly | 🟡 **维护期** (侧重连接性，有稳定性隐患) |
| **LobsterAI** | **中** | 0 | 8 | 无 | 🟢 **企业深耕** (专注企微集成，无显性 Bug) |
| **NullClaw** | **中** | 1 | - | 无 | 🟢 **基建夯实** (Zig 升级，沙箱修复) |
| **EasyClaw** | **低** | 1 | 1 | v1.7.12/13 | 🟠 **发布受阻** (自动更新机制故障) |
| **TinyClaw** | **休眠** | 0 | 0 | 无 | ⚫ **停滞** |

## 3. OpenClaw 在生态中的定位
**OpenClaw 是生态中的“技术风向标”与“稳定性试炼场”。**
*   **优势**：拥有最大的用户基数和最丰富的模型集成能力。今日发布的 **Claude Opus 4.7 图像理解捆绑** 和 **Google TTS** 再次证明了其在多模态整合上的领先地位。
*   **技术路线**：激进的大版本迭代策略。今日 1000+ 更新量显示了其试图通过高频迭代来维持领先，但也因此导致了严重的 **Onboarding 流程崩溃** 和 **Windows 兼容性回归**。
*   **对比分析**：
    *   **vs NanoBot**：OpenClaw 更重、更全，但 NanoBot 更轻、更稳。用户反馈 NanoBot 的代码“整洁易上手”。
    *   **vs ZeroClaw**：OpenClaw 的单体架构更易上手，而 ZeroClaw 正在迈向微内核，面临更复杂的工程挑战。
    *   **社区规模**：Issues 讨论热度远超其他项目（如国际化讨论 #3460 达 120 评论），是社区共识形成的核心场所。

## 4. 共同关注的技术方向
以下技术需求在多个项目中同时涌现，暗示了行业标准正在形成：

*   **MCP (Model Context Protocol) 支持**
    *   **涉及项目**：PicoClaw, NanoClaw, IronClaw
    *   **诉求**：不仅支持连接，更要求支持 **OAuth 2.1 + PKCE** (PicoClaw #2546) 以简化非技术用户的配置流程。
*   **Windows 平台体验攻坚**
    *   **涉及项目**：OpenClaw, ZeroClaw, PicoClaw, Moltis
    *   **诉求**：Windows 编码乱码、UI 渲染错误、Shell 闪窗、崩溃修复是今日最普遍的 Bug 修复主题。
*   **长任务反馈机制**
    *   **涉及项目**：NanoClaw, CoPaw
    *   **诉求**：Agent 在执行长达数分钟的任务时，必须提供“正在输入”或状态指示器，防止用户误以为死机。
*   **记忆系统重构**
    *   **涉及项目**：OpenClaw (Memory v2), NanoBot (Git History Staleness), NanoClaw (Mem0-graph)
    *   **诉求**：从简单的文件缓存转向持久化、图谱化的长期记忆，并支持自动清理过时信息。

## 5. 差异化定位分析

| 维度 | OpenClaw / NanoBot / IronClaw | ZeroClaw / NullClaw | CoPaw / Moltis / NanoClaw | LobsterAI |
| :--- | :--- | :--- | :--- | :--- |
| **核心定位** | **全能型通用 Agent** | **极客/工程化工具** | **连接器/自动化平台** | **企业垂直助手** |
| **技术架构** | Python 为主，功能大而全 | Rust/Zig，追求极致性能与安全 | Node/TypeScript/Rust，强扩展性 | Electron Wrapper |
| **目标用户** | 个人用户、AI 爱好者 | 开发者、运维人员 | 研究者、重度自动化用户 | 企业团队 |
| **关键差异** | 模型支持最广，文档最全 | 资源占用极低，适合嵌入式 | 通道集成最丰富 | 深度集成企微/钉钉 |

## 6. 社区热度与成熟度
*   **快速迭代阶段**：**NanoBot** 和 **Moltis**。PR 合并速度极快，对 Bug 修复响应神速（如 Moltis 当天发补丁修复 Windows Crash），显示出极高的组织效率。
*   **质量巩固阶段**：**OpenClaw** 和 **IronClaw**。两者均在处理由于激进重构带来的副作用（如 OpenClaw 的 Onboarding 崩溃，IronClaw 的 V2 引擎安全漏洞）。社区充满了“对稳定性担忧”的声音。
*   **生态爆发阶段**：**CoPaw**。社区贡献了大量非官方的 Channel 支持（WhatsApp, Signal, SIP），显示出插件生态的繁荣。

## 7. 值得关注的趋势信号
1.  **“Agentic UX” 概念兴起** (NanoClaw #1801)：
    用户不再满足于对话框，而是要求界面具备“智能体操作面板”特征（如状态显示、工具调用可视化、消息分类）。这将改变前端开发范式。
2.  **本地化与离线优先的渴望** (PicoClaw #28)：
    用户强烈要求支持 **LM Studio** 和 **Ollama** 等本地模型，反映了隐私敏感和成本控制的市场需求。
3.  **安全左移**：
    IronClaw 的“秘密泄露”事件和 ZeroClaw 的“沙箱逃逸”修复表明，随着 Agent 能力增强（执行 Shell、操作文件），**安全隔离**将成为下一个核心竞争点，而非仅仅是模型智商。
4.  **语音交互的回归**：
    OpenClaw 集成 Google TTS，CoPaw 引入 SIP 通话。语音作为最自然的交互方式，正在从“附加功能”转变为“核心能力”。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目每日动态日报
**日期**：2026-04-17
**分析师**：AI 开源项目智能体
**项目地址**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 今日速览
NanoBot 项目今日处于**极高活跃度**状态，属于典型的“高频迭代”日。
*   **贡献度激增**：过去24小时内有 **56 条 PR** 更新，远超日常平均水平，其中 31 条已完成合并，表明项目正在快速推进功能迭代。
*   **社区反馈密集**：Issues 更新 13 条，包含多个 Bug 修复与新功能讨论，显示出用户群体对项目的高度关注。
*   **技术攻坚**：今日焦点主要集中在**API 兼容性修复**（如 SSE 流式输出、非标准网关）、**多通道支持**（如 Teams、WebSocket）以及**记忆系统增强**上。
*   **稳定性维护**：维护者响应迅速，今日新报的严重 Bug（如 API 死循环、Email 无限回复）均有对应的 Fix PR 提出或合并。

### 2. 版本发布
*   **无新版本发布**
    *   虽然有大量 PR 合并，但尚未打新的 Release Tag。推测主分支 `main` 或 `nightly` 已包含大量新特性，建议用户关注源码更新或等待下一个 Patch 版本（可能为 v0.1.5.post2 或 v0.1.6）。

### 3. 项目进展
今日合并/关闭的关键 PR 显示项目在功能完整性与稳定性上均有显著提升：

*   **API 能力增强**：
    *   **[#3222 (CLOSED)](https://github.com/HKUDS/nanobot/pull/3222)**: 实现了 `/v1/chat/completions` 的 **SSE 流式输出** 支持，解决了 API 调用无法实时反馈的痛点。
    *   **[#3177 (CLOSED)](https://github.com/HKUDS/nanobot/pull/3177)**: 新增 `MyTool`，赋予 Agent 运行时自省能力（检查模型、Token 使用量等）。
*   **连接生态扩展**：
    *   **[#3197 (CLOSED)](https://github.com/HKUDS/nanobot/pull/3197)**: 正式回归并完善了 **Microsoft Teams 通道** 支持。
    *   **[#3179 (CLOSED)](https://github.com/HKUDS/nanobot/pull/3179)**: 大幅增强了 **WebSocket** 支持，包括会话生命周期管理、推理内容处理及附件流式传输。
*   **核心体验优化**：
    *   **[#3219 (CLOSED)](https://github.com/HKUDS/nanobot/pull/3219)**: 修复了 Cron 任务不持久化会话记录的问题，确保定时任务的内容可被追溯和追问。
    *   **[#3175 (CLOSED)](https://github.com/HKUDS/nanobot/pull/3175)**: 支持配置化的动态 LLM Providers，提升了多模型切换的灵活性。

### 4. 社区热点
今日讨论热度最高的话题集中在**兼容性适配**与**Agent 逻辑控制**：

*   **[Issue #3220 (OPEN)](https://github.com/HKUDS/nanobot/issues/3220)**: 报告了一个严重的逻辑 Bug，某些非标准 API 网关在 `finish_reason` 为错误状态时仍注入 `tool_calls`，导致 Agent 进入无限循环。该 Issue 已有对应的 Fix PR **[#3225](https://github.com/HKUDS/nanobot/pull/3225)** 提出。
*   **[PR #3205 (OPEN)](https://github.com/HKUDS/nanobot/pull/3205)**: 针对 Responses API 的回退机制增加了“熔断器”，旨在防止连续兼容性错误导致的性能损耗，显示项目正在加强对第三方 API 代理的鲁棒性。
*   **[Issue #3107 (OPEN)](https://github.com/HKUDS/nanobot/issues/3107)**: 一份涵盖 7 项改进建议的清单，包含 Timeout 可配置、LLM Provider Fallback 等核心诉求，反映了高频或生产环境用户的迫切需求。

### 5. Bug 与稳定性
今日处理的 Bug 中，有两个涉及无限循环，属于高优先级修复：

*   **【严重】Agent 无限工具调用循环**
    *   **问题**：非兼容 API 网关返回错误的 `finish_reason` 时导致死循环。
    *   **修复**：PR **[#3225](https://github.com/HKUDS/nanobot/pull/3225)** 已提交，通过严格校验 `finish_reason` 阻断执行。
*   **【严重】Email SMTP 无限回复循环**
    *   **问题**：配置 SMTP 后，给自己发邮件会导致 Agent 无限回复自己 (#3215)。
    *   **修复**：目前 Open，需注意尚未合并，建议 SMTP 用户暂勿给自己发信。
*   **【中等】版本升级 Memory 不兼容**
    *   **问题**：v0.1.5 升级至 post1 后报错 (#3190)，已被标记为 CLOSED，可能已在之前的 PR 中修复。
*   **【低】配置参数读取错误**
    *   `GroqTranscriptionProvider` 忽略 `config.json` 中的 `apiBase` (#3213)。
    *   `OpenAI` 转写 Provider 同样存在未读取 `api_base` 的问题，PR **[#3226](https://github.com/HKUDS/nanobot/pull/3226)** 正在修复。

### 6. 功能请求与路线图信号
从 PR 和 Issues 中可以窥见未来的开发重点：

*   **记忆系统重构**：
    *   **[PR #3212 (OPEN)](https://github.com/HKUDS/nanobot/pull/3212)**: 提出基于 Git 历史的“陈旧度标注”，帮助 Agent 判断 Memory.md 中的哪些段落已过时。这回应了 **[Issue #3227](https://github.com/HKUDS/nanobot/issues/3227)** 中关于长期项目记忆细节丢失的担忧。
*   **交互与控制增强**：
    *   **[PR #3223 (OPEN)](https://github.com/HKUDS/nanobot/pull/3223)**: 引入 `spawn_status` 和 `spawn_cancel` 工具，意味着未来 Agent 将能更主动地管理其子任务的生命周期。
    *   **[PR #3224 (OPEN)](https://github.com/HKUDS/nanobot/pull/3224)**: 提议实现仅追加模式的会话记录，增强调试和回溯能力。
*   **跨平台支持**：
    *   **[PR #3194 (OPEN)](https://github.com/HKUDS/nanobot/pull/3194)**: CI 流程新增 Windows 和 Python 3.14 支持，信号显示项目正在为更广泛的用户群做准备。

### 7. 用户反馈摘要
*   **正面反馈**：用户 **kxsk-git** (#3227) 称赞代码“整洁、轻巧、容易上手”，特别是相较于 OpenClaw，NanoBot 提供了更好的学习方向。
*   **痛点吐槽**：
    *   **MiniMax API 集成困难**：多个 Issue (#2373) 反馈 MiniMax 参数校验严格，JSON 格式极易报错。
    *   **状态黑盒**：用户反馈 (#3107) 目前很难直观看到 Agent 内部状态（如 Task 数目），建议增加状态展示功能。
    *   **升级风险**：用户 bigsinger 遇到了升级后无法使用的崩溃情况 (#3190)，对版本稳定性表示担忧。

### 8. 待处理积压
*   **长期开放的讨论**：
    *   **[Issue #2220](https://github.com/HKUDS/nanobot/issues/2220)**: 关于使用 `ContextVar` 进行任务本地工具路由的提案，自 3 月以来持续更新，涉及核心异步安全，尚无合并迹象。
*   **未解决的兼容性**：
    *   **[Issue #3143](https://github.com/HKUDS/nanobot/issues/3143)**: Token 超限导致的 `messages parameter is illegal` 错误高频出现，虽然有 consolidate 机制，但似乎仍未彻底解决 Token 打包时的边界问题。
*   **特定通道限制**：
    *   **[Issue #3217](https://github.com/HKUDS/nanobot/issues/3217)**: Discord 机器人互斥（无法响应其他 Bot）的限制阻碍了多 Agent 协作场景的开发。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-04-17)

## 📊 今日速览
ZeroClaw 项目今日处于**极高活跃度**状态。过去 24 小时内共有 50 条 PR 和 40 条 Issue 更新，显示出社区强劲的迭代动能。项目正处于 **v0.7.0 正式版发布前的关键冲刺阶段**，核心工作集中在修复微内核重构引入的发布流水线问题（#5811）以及完善文档与工程化标准（RFC 系列）。尽管技术讨论热烈，但代码审查积压（Review Debt）略微增加，维护团队需注意处理 34 个待合并 PR。

## 🚀 版本发布
*   **暂无新版本发布**
    *   *注意*：虽然今日提交了 `chore: release v0.7.0` 的 PR（#5805），但由于微内核拆分导致的 Crates.io 发布流程阻塞（#5811），正式版尚未落地。

## 🔨 项目进展
今日虽未合并大量 PR，但多个关键修复已完成开发等待 Review，为 v0.7.0 的稳定性扫清障碍：
1.  **发布流程修复**：
    *   [#5812](https://github.com/zeroclaw-labs/zeroclaw/pull/5812) 提交了针对 Crates.io 发布失败的临时修复方案，通过设置 CI 门禁防止发布失败，直至多 Crates 架构设计完成。
2.  **关键体验修复**：
    *   [#5793](https://github.com/zeroclaw-labs/zeroclaw/pull/5793) 修复了 Webhook 模式下 Token 统计为空的 Bug，解决了运营商无法追踪成本的问题。
    *   [#5790](https://github.com/zeroclaw-labs/zeroclaw/pull/5790) 为 Telegram 频道增加了内联键盘支持，修复了该通道下工具审批请求无法被交互处理的问题。
    *   [#5806](https://github.com/zeroclaw-labs/zeroclaw/pull/5806) 修复了非 Z.AI 提供商在流式传输时的 400 错误兼容性问题。
3.  **文档规范化**：
    *   [#5801](https://github.com/zeroclaw-labs/zeroclaw/pull/5801) 新增 `CONVENTIONS.md`，汇总了开发哲学和状态，旨在降低贡献者的上手门槛并减少 PR 偏离。

## 🔥 社区热点
今日讨论焦点集中在架构治理与历史债务清理：
1.  **架构治理 RFC (14+ 评论)**：
    *   [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) - **ZeroClaw 微内核过渡计划**。这是向 v1.0.0 迈进的核心架构蓝图，社区正在密集讨论从单体代码库向微内核迁移的细节。
    *   [#5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577) - **项目治理与团队协调**。探讨了防止项目失败的人员组织方式，而非仅关注代码质量。
2.  **文档国际化改革 (3 评论)**：
    *   [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) 提议用 Mozilla Fluent 替换现有的 TOML 国际化方案，并移除仓库内的翻译文档。这一改动旨在提升运行时字符串的本地化灵活性及维护效率。

## 🐛 Bug 与稳定性
今日报告的 Bug 涉及从轻微体验问题到阻碍发布的严重故障：
1.  **[S1 - Workflow Blocked] Web Dashboard 不可用**
    *   [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) (评论 14): 延续数周的顽疾，Web UI 和 Tauri 桌面端提示 Dashboard 未构建。尽管 Issue 已关闭，但若根本原因未彻底解决，可能仍会有用户反馈。
    *   [#3508](https://github.com/zeroclaw-labs/zeroclaw/issues/3508): Web Dashboard 加载失败。
2.  **[S1 - Workflow Blocked] Agent 模式崩溃**
    *   [#5685](https://github.com/zeroclaw-labs/zeroclaw/issues/5685): CLI 通道工厂未注册导致 Agent 模式直接崩溃。
3.  **[S0 - Security/Data Risk] 上下文泄漏**
    *   [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415): Discord 聊天上下文泄漏到计划任务执行中，存在数据安全隐患。
4.  **[S2 - Degraded] 平台特定问题**
    *   [#5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562): Windows 下 Shell 命令执行会闪现 CMD 窗口，影响体验。
    *   [#5755](https://github.com/zeroclaw-labs/zeroclaw/issues/5755): Prometheus 后端识别失败，配置了后端但获取 Metrics 时提示未启用。

## 💡 功能请求与路线图信号
1.  **提供商集成**：
    *   [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851): 用户请求在 `zeroclaw onboard` 流程中直接配置 GitHub Copilot。目前虽然底层支持，但配置向导未暴露该选项。
    *   [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503): 请求添加 NapCat/OneBot 通道支持，以便连接 QQ 机器人生态。
2.  **工程化与观测性**：
    *   [#5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447): 请求拆分 Crate 以加快编译速度。
    *   [#2472](https://github.com/zeroclaw-labs/zeroclaw/issues/2472): 请求通过多查询关键词扩展来增强长消息的记忆检索能力。

## 🗣️ 用户反馈摘要
*   **负面体验**：Web Dashboard 的可用性问题再次成为高频抱怨点（#4866, #3508），用户经常遇到 "Not found" 或提示需要构建的错误，这直接阻碍了新用户的上手流程。
*   **功能缺失**：Matrix 通道的用户（#4657）反馈了大量的“摩擦点”，特别是端到端加密（E2EE）和重试循环的问题，认为当前体验难以用于生产环境。
*   **集成需求**：企业级用户对观测性有强烈需求，不仅催生了 OTEL 的 RFC（#5579），也有用户反馈无法通过 Webhook 获取 Token 使用数据（#5793），这对成本核算至关重要。

## 🧹 待处理积压
以下 Issue 长期开放且至关重要，建议维护者优先关注：
*   **[#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851)** (Status: In-progress): 配置向导缺失 GitHub Copilot 支持。
*   **[#5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447)** (Status: In-progress): 编译速度瓶颈问题。
*   **[#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)**: 聊天上下文泄漏至定时任务的安全隐患。
*   **RFC 系列** (#5574, #5576, #5577, #5579, #5653): 关于 v0.7.0 到 v1.0.0 架构转型的 5 个关键 RFC 文档均处于 Draft 状态，需尽快定稿以指导开发方向。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-17)

**分析师**: AI 智能体与个人助手领域观察员
**数据来源**: GitHub.com/sipeed/picoclaw
**日期**: 2026-04-17

---

### 1. 今日速览
PicoClaw 项目在 **2026-04-16** 展现了极高的开发活力，共处理了 **39 条** 社区反馈与代码变更（Issues + PRs）。
*   **生态连接性**：今日核心集中在增强对第三方服务的兼容性，包括 LM Studio 的连接请求以及对 MCP (Model Context Protocol) 服务器 OAuth 2.1 的支持。
*   **稳定性加固**：项目在 **网络错误处理** 和 **认证机制** 上进行了重大重构，引入了网络层故障自动重试机制和更灵活的无头模式登录。
*   **依赖维护**：大量的依赖项更新显示维护团队正在积极跟进上游安全与功能更新，确保底层技术栈的现代化。

---

### 2. 版本发布

*   **[v0.2.6-nightly.20260416.f32b303d](https://github.com/sipeed/picoclaw/releases/tag/v0.2.6-nightly.20260416.f32b303d)** (2026-04-16)
    *   **类型**: Nightly Build (自动构建)
    *   **状态**: 非稳定版，建议谨慎使用
    *   **内容概览**: 基于 `main` 分支的最新快照。由于未包含详细的 Change Entry，推测主要包含今日合并的网络重试逻辑及前端依赖更新。

---

### 3. 项目进展

今日项目在架构健壮性和安全性方面迈出了重要一步：

*   **🛡️ 网络容错能力提升**: [PR #2547](https://github.com/sipeed/picoclaw/pull/2547) 已合并。该变更引入了专门的网络故障分类，当遇到 TLS 握手失败、DNS 解析错误或连接重置时，系统不再直接报错，而是触发**备用模型切换**，大幅提升了代理在网络不稳定环境下的存活率。
*   **🔄 认证流程优化**: [PR #2549](https://github.com/sipeed/picoclaw/pull/2549) 正在开放中，响应了社区对于无头环境的强烈需求，为 `auth login` 命令添加了 `--no-browser` 标志，解决了在服务器或 Docker 容器中无法打开浏览器进行 OAuth 授权的痛点。
*   **🔧 架构解耦**: [PR #2551](https://github.com/sipeed/picoclaw/pull/2551) 提出重构，旨在将通道名称与提供商类型解耦，为未来支持同一提供商的多个实例奠定了基础。
*   **📁 Web 体验增强**: [PR #2563](https://github.com/sipeed/picoclaw/pull/2563) 正在审查中，计划在前端实现文件下载功能，完善了工具调用后的文件交付链路。

---

### 4. 社区热点

**最高热度讨论**: **[#28 Feat Request: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28)**
*   **状态**: 开放 | 👍: 1 | 💬: 14
*   **核心诉求**: 用户希望在 Android 或本地环境通过 PicoClaw 轻松连接 **LM Studio**。
*   **分析师点评**: 该 Issue 自 2 月提出至今持续活跃，反映了社区对于**本地化、离线友好**的大模型部署方案的迫切需求。虽然目前未有直接 PR 关联，但长期的热度意味着该功能若被实现，将显著扩大 PicoClaw 在个人开发者和隐私敏感用户群体中的覆盖面。

**值得关注的新提案**: **[#2546 Support OAuth 2.1 + PKCE for MCP servers](https://github.com/sipeed/picoclaw/issues/2546)**
*   **状态**: 开放
*   **核心诉求**: 借鉴 Claude.ai 的体验，允许非技术用户通过在 Dashboard 粘贴 URL 来添加受 OAuth 保护的 MCP 服务器。
*   **分析师点评**: 这是一个信号，表明 PicoClaw 正试图从“极客工具”向“易用平台”转变，降低连接外部 AI 服务（如 MCP）的门槛。

---

### 5. Bug 与稳定性

今日报告的 Bug 集中在 **配置解析** 与 **通道兼容性** 上，其中部分已找到修复方案：

*   **🔥 [严重] Gateway 启动异常**: **[#2513](https://github.com/sipeed/picoclaw/issues/2513)**
    *   **现象**: 在 Debian 13 上启动 `picoclaw-launcher` 后，gateway 进程异常退出。
    *   **影响**: 阻止服务正常运行。
    *   **状态**: 待修复。

*   **🔥 [严重] WhatsApp 通道静默丢包**: **[#2540](https://github.com/sipeed/picoclaw/issues/2540)** & **[#2541](https://github.com/sipeed/picoclaw/issues/2541)**
    *   **现象**: 当 WhatsApp 账号迁移到 LID 格式后，`whatsapp_native` 通道会静默丢弃消息；同时 `group_trigger.mention_only` 功能因四个叠加缺陷完全失效。
    *   **状态**: 未修复。**风险评估高**，严重影响生产环境的消息可靠性。

*   **⚠️ [中等] 认证凭证持久化问题**: **[#2302](https://github.com/sipeed/picoclaw/issues/2302)**
    *   **现象**: Web UI 频繁要求重新认证，Token 似乎未正确持久化或过早过期。
    *   **Fix**: **[#2549](https://github.com/sipeed/picoclaw/pull/2549)** (开放中) 正在尝试改进登录流程，但主要针对 CLI，Web 端仍需关注。

*   **✅ [已修复] 配置收集 Panic**: **[#2270](https://github.com/sipeed/picoclaw/pull/2270)**
    *   **内容**: 修复了 `collectSensitive` 在处理非地址able SecureString 时引发的程序崩溃。

---

### 6. 功能请求与路线图信号

*   **无头模式支持**: **[#2533](https://github.com/sipeed/picoclaw/issues/2533)** 请求增加 `--no-browser` 标志。**进度**: 已有 PR **[#2549](https://github.com/sipeed/picoclaw/pull/2549)** 处理，大概率进入下个版本。
*   **多实例与解耦**: **[#2551](https://github.com/sipeed/picoclaw/pull/2551)** 显示项目正在重构底层以支持更复杂的配置。
*   **安全增强**: **[#1067](https://github.com/sipeed/picoclaw/issues/1067)** 请求集成 Authula 进行身份认证/授权，目前优先级为 Low，但反映了对于 VPS 部署场景的安全顾虑。

---

### 7. 用户反馈摘要

*   **痛点 - 复杂性**: 用户 **[#28](https://github.com/sipeed/picoclaw/issues/28)** 反映，对于非开发者而言，连接本地模型（LM Studio）的过程“超出了能力范围”，暗示文档或引导流程需要简化。
*   **痛点 - 调试困难**: 用户 **[#2540](https://github.com/sipeed/picoclaw/issues/2540)** 抱怨 WhatsApp 通道的问题在于“静默失败”，没有任何 INFO 级别的日志，导致排查极其困难。建议：增加更详细的日志输出。
*   **痛点 - 体验割裂**: 用户 **[#2533](https://github.com/sipeed/picoclaw/issues/2533)** 指出在 Webtop/脚本环境下，强制弹出浏览器的登录体验非常糟糕。

---

### 8. 待处理积压

*   **[#28 (LM Studio Support)](https://github.com/sipeed/picoclaw/issues/28)**: 虽然讨论热烈，但长期处于 Open 状态，缺乏明确的实施计划或 Pull Request。建议维护者评估优先级或寻求社区贡献。
*   **[#1067 (Authula Integration)](https://github.com/sipeed/picoclaw/issues/1067)**: 安全相关的 Feature Request 自 3 月提出后进展缓慢，考虑到 VPS 部署的普遍性，建议提升优先级。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-17)

## 📅 今日速览
NanoClaw 项目今日活跃度极高，处于**高频迭代期**。过去 24 小时内共处理了 **17 条 PR** 和 **3 条新 Issue**，虽然今日没有新版本发布，但核心架构层面的更新异常密集。多个关于“7层能力扩展”和“Agentic UX”的重大 PR 正在合并或已合并，显示出项目正从单一 Agent 向**多层级自动化平台**演进。同时，社区对于**系统反馈（UX）**和**多实例管理**的关注度提升，表明项目正进入大规模生产环境部署的验证阶段。

---

## 📦 版本发布
**无**
> 尽管今日没有正式 Release 发布，但从 PR 的合并情况来看，项目正在经历一次核心能力的迭代升级，建议关注后续版本的 `CHANGELOG`。

---

## 🚀 项目进展

今日共有 **6 条 PR 成功合并/关闭**，主要集中在安全防护、架构扩展和生态集成能力上：

1.  **[核心架构] 完成 7 层能力扩展路线图** ([#1794](https://github.com/qwibitai/nanoclaw/pull/1794) & [#1786](https://github.com/qwibitai/nanoclaw/pull/1786))
    *   **进展**: 实施了设计中剩余的 14 个项目。
    *   **影响**: 引入了 Layer 4（Webhook 事件源）和 Layer 5（动作前 LLM 验证、置信度标记）等高级特性。这标志着 NanoClaw 从单一的对话机器人进化为具备**校验机制**和**事件驱动**能力的复杂智能体系统。

2.  **[安全防护] 信任网关 关键修复** ([#1793](https://github.com/qwibitai/nanoclaw/pull/1793))
    *   **进展**: 为 `readBody` 函数增加了 1MB 的请求体大小限制，防止 DoS 攻击。
    *   **影响**: 提升了系统在面对恶意负载时的稳定性，确保服务可用性。

3.  **[生态集成] 本地模型与工具链支持**
    *   **新增 API Server 能力**: 虽然 `add-api-server` 经历了数次 PR 关闭与重开 ([#1799](https://github.com/qwibitai/nanoclaw/pull/1799) -> [#1800](https://github.com/qwibitai/nanoclaw/pull/1800))，但项目现已具备将 Agent 暴露为标准 OpenAI 兼容 HTTP 接口的能力。
    *   **MCP 工具扩展**: 新增 `Atomic Chat MCP tool` ([#1802](https://github.com/qwibitai/nanoclaw/pull/1802))，允许接入本地桌面端模型；新增 `mem0-graph` 技能 ([#1256](https://github.com/qwibitai/nanoclaw/pull/1256))，利用现有的 Qdrant 和 Neo4j 基础设施实现持久化图记忆。

---

## 🔥 社区热点

今日社区讨论集中在**企业级部署痛点**与**用户体验优化**：

1.  **[#1805](https://github.com/qwibitai/nanoclaw/issues/1805) - Telegram 长时间处理无状态反馈**
    *   **热度**: ⚠️ 高
    *   **问题**: 在一次实测中，Agent 处理任务长达 11 分钟，但界面没有任何“正在输入”或状态提示，导致用户误以为 Bot 崩溃。
    *   **诉求**: 强烈请求增加处理中的状态指示器，这对长时间运行的任务至关重要。

2.  **[#1801](https://github.com/qwibitai/nanoclaw/pull/1801) - Agentic UX 重新设计**
    *   **热度**: 🔥 关注
    *   **内容**: 提议将 Telegram 界面从平面文本升级为“智能体操作面板”，引入消息分类、状态附加器等 17 个新模块。
    *   **关联**: 这直接回应了 Issue #1805 的痛点，是目前社区最期待的改进方向之一。

3.  **[#1804](https://github.com/qwibitai/nanoclaw/issues/1804) - 支持多 Slack 工作区并发**
    *   **热度**: 📈 上升
    *   **问题**: 当前 v2 版本的 `channel-registry` 键值冲突，导致无法在一个实例中同时运行多个 Slack Bot Token。
    *   **诉求**: 企业用户需要在单一 NanoClaw 实例中管理多个 Slack 组织的消息收发。

---

## 🐛 Bug 与稳定性

1.  **[严重] 用户感知故障 (假死)**
    *   **报告**: [#1805](https://github.com/qwibitai/nanoclaw/issues/1805)
    *   **现象**: 长时间任务处理时无反馈。
    *   **Fix 信号**: PR [#1801](https://github.com/qwibitai/nanoclaw/pull/1801) 正在尝试从架构层面解决此问题。

2.  **[中等] 安全边界缺乏测试覆盖**
    *   **报告**: [#1803](https://github.com/qwibitai/nanoclaw/issues/1803)
    *   **风险**: IPC 授权边界缺乏单元测试，可能导致跨组消息注入漏洞。
    *   **状态**: 待修复。

---

## 🗺️ 功能请求与路线图信号

从今日的 Issues 和 PR 中，可以识别出以下即将进入版本或正在研发的功能：

*   **持久化记忆图谱** ([#1256](https://github.com/qwibitai/nanoclaw/pull/1256)): 集成 mem0 + Neo4j，为 Agent 提供长期记忆能力。
*   **Matrix 协议支持** ([#1624](https://github.com/qwibitai/nanoclaw/pull/1624)): 增加对去中心化聊天协议 Matrix 的完整支持（含 E2EE）。
*   **Unraid 模板变量注入支持** ([#1727](https://github.com/qwibitai/nanoclaw/pull/1727)): 原生凭证代理，优化 NAS 部署体验。
*   **OpenCode Provider** ([#1776](https://github.com/qwibitai/nanoclaw/pull/1776)): 新增对 OpenCode 模型提供商的内置支持。

---

## 💬 用户反馈摘要

*   **痛点**: "11分钟的沉默处理是不可接受的" ([#1805](https://github.com/qwibitai/nanoclaw/issues/1805))。用户明确表示，在 Agent 执行复杂任务时，缺乏视觉反馈会导致严重的信任危机。
*   **场景**: 用户正在利用 NanoClaw 进行复杂的测试工厂用例编写 和长时间的案例研究，这表明项目已被用于高复杂度的生产级任务。

---

## 📥 待处理积压

以下 Issue/PR 需要维护者优先关注：

*   **[Backlog]** **IPC 安全测试**: [#1803](https://github.com/qwibitai/nanoclaw/issues/1803) (Open) - 关键安全组件缺失测试。
*   **[Backlog]** **多 Slack 实例**: [#1804](https://github.com/qwibitai/nanoclaw/issues/1804) (Open) - 限制了多租户部署能力。
*   **[Review Needed]** **包管理器迁移**: [#1771](https://github.com/qwibitai/nanoclaw/pull/1771) (Open) - 从 npm 迁移至 pnpm，涉及底层构建逻辑，需尽快合并以免阻塞其他依赖。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-04-17)

## 1. 今日速览
NullClaw 项目今日处于**极高活跃度**状态，代码库迎来了显著的**架构升级与稳定性修复**。过去24小时内，项目成功完成了向 **Zig 0.16.0** 的语言版本迁移，并合并了大量关于 Linux 沙箱兼容性、API 路由以及历史记录持久化的关键修复。Issues 方面呈现出“清库存”态势，共关闭了 12 个历史遗留 Bug，主要集中在 Docker 沙箱启动失败和 OpenAI 兼容层配置问题。整体来看，项目正在积极完善核心基础设施的健壮性，并为后续的高级调度功能做准备。

## 2. 版本发布
*无新版本发布。*
尽管进行了大量的代码合并（包括 #823 Zig 0.16 迁移），项目尚未发布相应的 Release 版本。目前从源码安装的用户仍可能遇到版本号显示为 `dev` 的问题（见 Issue #821），但核心功能已通过主分支更新。

## 3. 项目进展
今日合并的 PR 标志着项目在稳定性、安全性和开发环境现代化方面迈出了重要一步：

*   **[CORE] 迁移至 Zig 0.16.0 (PR #823)**
    *   **推进内容**：项目已正式将构建环境和运行时依赖迁移至 Zig 0.16.0。这不仅涉及构建脚本的更新，还包括 WebSocket 集成层和兼容性表面的重构。
    *   **影响**：这是破坏性的基础设施更新，为后续性能优化和新特性铺平了道路，解决了潜在的依赖过时风险。

*   **[STABILITY] Linux 沙箱与安全加固 (PR #805, #801)**
    *   **推进内容**：修复了 Linux 下 Shell 工具无法运行的严重 Bug (#791, #784, #779)。新逻辑要求沙箱后端必须能实际运行命令才算“可用”，而非仅仅检查二进制文件存在。同时修复了 Docker 沙箱初始化时因挂载参数未工厂化导致的 `invalid empty volume spec` 崩溃。
    *   **影响**：显著提升了 Native Linux 环境和 Docker 环境下的 Shell 工具可用性和安全性。

*   **[FEATURE] 历史记录与诊断修复 (PR #802, #828, #804)**
    *   **推进内容**：修复了 SQLite 后端下 `history` 命令为空的 Bug (#797)，确保 CLI 对话被正确持久化。同时改进了 Agent 路由逻辑，防止未绑定会话错误地继承子代理配置 (#793)。
    *   **影响**：恢复了用户体验的基本功能（历史查看）和系统逻辑的一致性。

## 4. 社区热点
*   **热点讨论：如何配合 Tailscale 使用 Gateway? (Issue #826)**
    *   **链接**：[nullclaw/nullclaw#826](https://github.com/nullclaw/nullclaw/issues/826)
    *   **分析**：这是目前唯一的**活跃** Issue。用户尝试在 Tailscale 组网的 Debian VPS 上使用 `nullclaw gateway` 功能时遇到了 `NotImplemented` 错误。这反映了远程访问和隧道功能在特定网络环境下（虚拟网卡/隧道场景）的兼容性挑战，是社区关注的痛点。

## 5. Bug 与稳定性
今日关闭的 Bug 均已通过合并的 PR 得到修复，严重程度多为**中高**：

1.  **[CRITICAL] Shell 工具全面瘫痪 (Linux/Docker)**
    *   **表现**：多个用户报告 Shell 工具无法运行，报错涉及 Docker 卷挂载参数为空、Linux 原生环境下权限/隔离失败 (#791, #779, #784, #799)。
    *   **状态**：已修复。由 **PR #805** (Linux检测) 和 **PR #801** (Docker挂载) 解决。

2.  **[HIGH] OpenAI 兼容层 404 错误与 Responses API 错误**
    *   **表现**：自定义 Provider 无法正确回退至 Responses API，导致配置失败 (#766)；Tool Schema 格式不匹配导致调用崩溃 (#773)。
    *   **状态**：已修复。由 **PR #806** 和 **PR #790** 解决。

3.  **[MEDIUM] 历史记录丢失与会话路由错误**
    *   **表现**：SQLite 记录为空 (#797)；系统提示词被错误继承 (#793)。
    *   **状态**：已修复。由 **PR #802** 和 **PR #804** 解决。

## 6. 功能请求与路线图信号
*   **Admin API 与 JSON 输出 (PR #829)**
    *   **信号**：新增了 `nullclaw config show --json` 和 `nullclaw models summary --json` 命令。这表明项目正在增强可编程性和可观测性，可能正在为 **NullHub**（中央管理面板）或第三方集成提供底层支持。

*   **Cron 调度与任务系统 (PR #783)**
    *   **信号**：PR #783 正在开发中，增加了 `cron` 子代理和运行历史功能。这表明项目正从单一的对话代理向**任务自动化与调度平台**演进。

## 7. 用户反馈摘要
*   **痛点 - 版本信息模糊**：用户指出从源码安装后运行 `nullclaw version` 只显示 "dev"，不利于运维排查 (Issue #821)。
*   **痛点 - 安装依赖**：Debian 用户对 Zig 的安装感到困惑，询问是否必须使用 Docker (Issue #820)。
*   **场景 - 复杂网络环境**：有用户试图利用 Tailscale + NullClaw Gateway 构建远程 AI 服务，但目前受阻 (Issue #826)。
*   **满意点**：大量的 Bug 被迅速关闭并合并修复，表明维护团队对用户反馈的响应速度非常快。

## 8. 待处理积压
*   **Issue #826 [Tailscale Gateway Support]**：作为当前唯一的活跃 Issue，涉及网络隧道核心功能，建议优先处理以支持远程办公场景。
*   **PR #783 [Cron System]**：虽然已有一段时间未更新，但功能复杂度高（涉及调度、Worker、历史表），建议维护者跟进代码审查，避免长期处于开发中状态。
*   **PR #829 [Admin CLI]**：新增功能，目前处于 Open 状态，需关注测试覆盖与文档补充。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 - 2026-04-17

## 1. 今日速览
IronClaw 项目在 2026-04-17 展现出极高的开发活跃度，在过去 24 小时内产生了 50 条新 Issue 和 50 条新 PR，显示了项目正处于快速迭代与重构的关键期。虽然 Issues 数量激增至 50 条（其中仅 5 条关闭），但 PR 队列中已有大量待合并代码，表明开发团队正集中火力解决堆积的技术债务和新功能开发。核心架构的演进（Engine V2）与 Web Gateway 的稳定性修复是今日的主要技术焦点。尽管没有新版本发布，但大量 PR 的准备就绪预示着 v0.26.0 或更新版本可能即将到来。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日项目在架构稳定性与核心功能统一方面取得了实质性进展，以下是关键里程碑：

*   **安全性增强 (Engine V2)**: 针对近期严重的 Engine V2 绕过秘密扫描漏洞，已合并核心修复 PR [#2494](https://github.com/nearai/ironclaw/pull/2494)。该修复在 V2 路由中强制实施了与 V1 一致的入站安全检查，确保 API Key 和 Token 不会在未经检测的情况下发送至 LLM。
*   **认证与配对流程统一**: PR [#2515](https://github.com/nearai/ironclaw/pull/2515) (已关闭/合并流程中) 统一了 Web Gateway 的入驻、认证和配对流程。这一变更解决了之前重构引入的信任边界回归问题，规范了扩展和频道的交互逻辑。
*   **LLM 执行义务与指令遵循**: PR [#2539](https://github.com/nearai/ironclaw/pull/2539) 引入了“执行义务”机制，强制 V2 引擎在收到明确指令（如“运行测试”）时尝试调用工具，减少了 AI 的能力虚假拒绝。
*   **脚本能力升级**: PR [#2531](https://github.com/nearai/ironclaw/pull/2531) 为 CodeAct 脚本添加了 `FINAL-await` 支持，并增加了防止无限循环的保护机制（`max_consecutive_errors` 默认为 5），提升了脚本的健壮性。

## 4. 社区热点
今日讨论热度最高的集中在 **Engine V2 的安全性缺陷**与 **Web UI 的用户体验**：

*   **[Issue #2491](https://github.com/nearai/ironclaw/issues/2491)**: Engine V2 绕过入站秘密扫描。这是今日最严重的讨论，用户（包括 QA）确认 V2 模式下敏感信息直接泄露给 LLM。
*   **[Issue #2410](https://github.com/nearai/ironclaw/issues/2410)**: Dashboard 不断刷新并清除内容。Web UI 状态管理的不稳定性引起了用户极大的困扰，QA 报告称操作界面会导致循环刷新。
*   **[Issue #2491 相关评论]**: 社区对安全性表示担忧，要求立即修补 V2 路由的漏洞。相关的 PR #2494 已经作为回应被提交。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，主要集中在 **Web 交互、认证流和 Agent 行为** 上。

*   **[P0 - 严重安全]** **Engine V2 秘密泄露** [#2491](https://github.com/nearai/ironclaw/issues/2491): V2 引擎完全绕过了安全扫描。
    *   *状态*: 已有修复 PR [#2494](https://github.com/nearai/ironclaw/pull/2494)。
*   **[P1 - 核心功能]** **Slack 连接流断裂** [#1998](https://github.com/nearai/ironclaw/issues/1998): 提供正确 Token 后集成仍失败，Bot 无响应，状态显示混乱。
*   **[P1 - 用户体验]** **仪表盘无限循环** [#2410](https://github.com/nearai/ironclaw/issues/2410): Web UI 在特定操作下陷入无限刷新循环。
    *   *状态*: 已有修复 PR [#2415](https://github.com/nearai/ironclaw/pull/2415) (针对 tab switch 刷新)。
*   **[P1 - Agent 能力]** **Agent 工具调用失败** [#2541](https://github.com/nearai/ironclaw/issues/2541): 在摘要任务中 Agent 处理数分钟却不调用任何工具。
*   **[P2 - 集成]** **Google Sheets OAuth 被阻** [#2229](https://github.com/nearai/ironclaw/issues/2229): OAuth 授权时返回 400 错误。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以窥见项目的下一步计划：

*   **任务结果查询**: PR [#2549](https://github.com/nearai/ironclaw/pull/2549) 引入了 `mission_get` 动作。这解决了用户无法查询异步任务（如研究任务）结果的痛点。
*   **MCP 与 WASM 工具发现优化**: Issues [#1337](https://github.com/nearai/ironclaw/issues/1337) 和 [#1338](https://github.com/nearai/ironclaw/issues/1338) 被标记为 `bug_bash_P3`，表明团队计划改进工具模式的发现机制，特别是针对复杂的 MCP 和 WASM 工具，使其对模型更友好。
*   **Routines UX 改进**: Issue [#1325](https://github.com/nearai/ironclaw/issues/1325) 提出为 Web 端 Routines 添加专门的可视化创建/编辑流程，摆脱当前的“只读”状态。
*   **Aliyun 集成**: PR [#1446](https://github.com/nearai/ironclaw/pull/1446) 正在添加对阿里云百炼的计划支持，显示出项目正在扩展非 AWS/GCP 的云服务提供商支持。

## 7. 用户反馈摘要
*   **痛点**：**Web UI 的不稳定**是最大的抱怨来源。用户报告消息在刷新时消失、标签页切换导致全屏重绘、仪表盘内容被循环清空。这严重影响了连续工作的体验。
*   **痛点**：**配置流程繁琐**。Slack 和 Google Sheets 的集成被反复提及存在困难，用户不仅要自己创建 App，还经常遇到 OAuth 失败或 Token 保存无效的问题。
*   **行为困惑**：Agent 有时会忽略用户的明确指令（如“仅在失败时提醒” vs “每次都提醒”），或者在工具调用上“装傻”不执行，导致信任度下降。

## 8. 待处理积压
部分长时间未解决或被标记为 `on hold` 的重要 Issues 值得维护者关注：

*   **工具模式系列**: Issues [#1330](https://github.com/nearai/ironclaw/issues/1330), [#1331](https://github.com/nearai/ironclaw/issues/1331), [#1334](https://github.com/nearai/ironclaw/issues/1334)。这些是关于改进内置工具（如 `create_job`, `message`, `http`）元数据的长期任务，对提升 Agent 智能度至关重要，但处于 P3 优先级。
*   **WASM 频道生命周期**: Issue [#2556](https://github.com/nearai/ironclaw/issues/2556) 指出已安装但未激活的 WASM 频道会在启动时自动运行，这与用户预期不符。
*   **Routines CLI/后端不一致**: Issue [#1322](https://github.com/nearai/ironclaw/issues/1322) 指出 CLI 仅支持 cron，而后端支持多种触发器，存在功能错位。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-17)

## 1. 今日速览
LobsterAI 项目在过去 24 小时内呈现出**高活跃度、高产出**的状态。尽管没有新的 Issues 提出或新版本发布，代码合并活动频繁，共处理了 8 条 PR，其中 6 条已成功合并。这表明开发团队正专注于内部功能的迭代、企业级特性的优化以及已知问题的快速修复。今日的代码提交主要集中在**协作文作体验、MCP 模块稳定性以及企业微信（企微）集成**方面，项目整体健康度良好，处于快速迭代期。

## 2. 版本发布
**无新版本发布**
*目前暂无新的 Release 标签发布，预计今日合并的多个功能补丁和修复将在后续的版本节点（如 `2026.04` 系列版本）中统一推送。*

## 3. 项目进展
今日合并的 6 个 PR 显著提升了系统的稳定性和企业功能的完整性：

*   **[Feature] 升级核心引擎至 release/2026.04.14** ([#1702](https://github.com/netease-youdao/LobsterAI/pull/1702))
    合并了 `release/2026.04.14` 分支，这通常包含一系列底层依赖和框架的更新，是后续功能开发的基础。
*   **[Feature] 企微支持多机器人及定时任务修复** ([#1670](https://github.com/netease-youdao/LobsterAI/pull/1670))
    推进了企业微信集成能力，新增支持多机器人配置，并修复了定时任务通知在企业微信场景下失败的 Bug，对企业用户非常关键。
*   **[Fix] 修复 MCP 管理器组件崩溃** ([#1703](https://github.com/netease-youdao/LobsterAI/pull/1703))
    紧急修复了因合并冲突误删图标组件 Import 导致的 `McpManager` 页面崩溃问题，保证了管理界面的可用性。
*   **[Fix] 统一电源管理策略** ([#1705](https://github.com/netease-youdao/LobsterAI/pull/1705))
    重构了主进程中的 `powerSaveBlocker` 逻辑，统一为 `prevent-app-suspension` 类型，解决了潜在的休眠冲突和代码重复问题。
*   **[Fix] 抑制 Cowork 会话中的心跳泄露** ([#1704](https://github.com/netease-youdao/LobsterAI/pull/1704))
    优化了 OpenClaw 协议的历史消息处理，防止后台心跳消息意外显示在用户的协作会话中，提升了用户界面的清爽度。
*   **[Feat] 增强更新检查请求** ([#1706](https://github.com/netease-youdao/LobsterAI/pull/1706))
    在更新检查请求中新增了 `uuid` 和 `userId` 参数，有助于后端更精准地进行用户统计和版本推送控制。

## 4. 社区热点
今日无新增 Issues，社区讨论主要集中在待合并的 PR 上：

*   **热点 PR：修复 Agent 切换时的输入框残留** ([#1707](https://github.com/netease-youdao/LobsterAI/pull/1707))
    *   **状态：** 待合并
    *   **关注度：** ⭐️ (UX 优化)
    *   **核心诉求：** 解决用户在切换不同 Agent 时（例如从 Main 切换到 Architect），主页输入框未能自动清空的问题。这涉及 Redux 状态管理中草稿存储的 Key 冲突。该 PR 虽然是 Bug 修复，但直接影响用户在多 Agent 场景下的操作流畅度，目前处于开放状态，等待审核。

## 5. Bug 与稳定性
今日未报告新的高风险 Bug，但解决了一个历史遗留的崩溃问题：

*   **[已修复] P0 级崩溃：MCP 管理器页面无法加载**
    *   **原因：** 合并冲突导致代码中丢失了 `SearchIcon` 等关键图标的引用。
    *   **解决：** PR #1703 已恢复相关 Import，页面功能已恢复正常。
*   **[已修复] P2 级干扰：协作模式出现多余的系统消息**
    *   **原因：** 上游服务未能完全屏蔽 OpenClaw 的心跳回复。
    *   **解决：** PR #1704 在客户端增加了过滤逻辑，防止 `HEARTBEAT_OK` 消息泄露。

## 6. 功能请求与路线图信号
*   **新 LLM Provider 支持：** PR #438 ([Feat/add aihubmix provider](https://github.com/netease-youdao/LobsterAI/pull/438)) 仍在活跃中（最后更新于今日），尽管该 PR 已标记为 `stale`，但持续的关注表明社区对接入 `aihubmix` 模型服务有明确需求。这可能预示着未来版本将扩展更多模型提供商的支持。
*   **企业功能增强：** 从 PR #1670 可以看出，项目正在加强针对企业微信的深度集成，特别是“多机器人”支持，这符合该项目向企业级 AI 助手平台演进的趋势。

## 7. 用户反馈摘要
由于今日无新增 Issue 评论，用户反馈主要通过 PR 描述体现：
*   **痛点：** 用户在多 Agent 切换时，经常遇到上下文（输入框内容）混淆的情况（PR #1707），这对频繁切换角色的用户体验造成了困扰。
*   **场景：** 企业用户在使用定时任务通知时遇到发送失败的问题（PR #1670），这影响了自动化工作流的可靠性。

## 8. 待处理积压
*   **长期开放 PR：** [#438 Feat/add aihubmix provider](https://github.com/netease-youdao/LobsterAI/pull/438)
    *   **创建时间：** 2026-03-16
    *   **状态：** Open (Stale)
    *   **提醒：** 该 PR 虽然较老但仍有更新动作，建议维护者评估是否将其纳入下一开发周期的里程碑，或者关闭以减少代码库噪音。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-17)

## 1. 今日速览
Moltis 项目今日处于**极高活跃度**状态，共处理了 28 个 Issues 和 PRs，代码合并率显著。项目在代码索引、Agent 稳定性以及多模型适配方面取得了重要进展。维护团队今日关闭了 7 个 Bug 和 13 个 PR，显示出极高的响应速度和交付效率。同时，发布了 `20260416.02` 补丁版本，重点解决了 Windows 和 Nostr 相关的崩溃问题。

## 2. 版本发布
**版本 [20260416.02](https://github.com/moltis-org/moltis/releases/tag/20260416.02)**
*   **发布时间**: 2026-04-16
*   **核心更新**: 包含针对 Windows 节点主机和 Nostr 插件的关键崩溃修复，以及 OpenRouter/Gemini 模型的工具调用兼容性补丁。
*   **注意事项**: 建议所有 Windows 用户及使用 OpenRouter 集成 Gemini/Grok 的用户尽快更新。

## 3. 项目进展
今日合并的 PR 显著提升了系统的稳定性与功能性：
*   **Agent 核心优化**: [PR #726](https://github.com/moltis-org/moltis/pull/726) 与 [PR #737](https://github.com/moltis-org/moltis/pull/737) 合并，实现了 Agent 对话上下文的“最旧优先”压缩策略，并支持配置化的上下文窗口。这解决了长时间运行 Agent 任务时上下文丢失的问题，大幅提升了复杂任务的可靠性。
*   **多模型兼容性**: [PR #740](https://github.com/moltis-org/moltis/pull/740) 和 [PR #741](https://github.com/moltis-org/moltis/pull/741) 修复了 Fireworks AI 和 Grok 模型的工具调用与推理能力支持，拓宽了 Moltis 的模型生态适配性。
*   **构建系统增强**: [PR #469](https://github.com/moltis-org/moltis/pull/469) 合并，正式支持 Nix Flake 构建，为 NixOS 用户和追求可复现构建的开发者提供了便利。
*   **新功能开发**: 大型重构 PR [PR #753](https://github.com/moltis-org/moltis/pull/753) - [PR #756](https://github.com/moltis-org/moltis/pull/756) 已开放，正在引入内置 SQLite 代码索引功能。

## 4. 社区热点
*   **[Issue #102](https://github.com/moltis-org/moltis/issues/102) - Docker-in-Docker 挂载问题 (👍 5)**
    *   虽然该 Issue 今日关闭，但作为社区热度最高的问题，解决了 Moltis 在容器内运行 Docker 沙箱时路径挂载错误的核心痛点。
*   **[PR #751](https://github.com/moltis-org/moltis/pull/751) - 修复工具模式验证**
    *   针对 OpenRouter + Gemini 组合使用时出现的参数验证错误进行了快速修复，体现了社区对多模型串联使用场景的强烈需求。

## 5. Bug 与稳定性
今日修复的 Bug 覆盖多个平台，严重程度中等偏高：
*   **🔴 严重 (已修复)**: **Windows 崩溃** - [Issue #744](https://github.com/moltis-org/moltis/issues/744) / [PR #749](https://github.com/moltis-org/moltis/pull/749)。修复了 `moltis node` 在 Windows 上使用 `wss://` 连接时发生的 panic，原因是缺少 `CryptoProvider` 初始化。
*   **🔴 严重 (已修复)**: **Nostr 协议 Panic** - [Issue #736](https://github.com/moltis-org/moltis/issues/736) / [PR #742](https://github.com/moltis-org/moltis/pull/742)。解决了在 Nostr 插件中因异步锁使用不当导致的死锁与崩溃。
*   **🟠 功能回归 (需关注)**: **Podman 兼容性回退** - [Issue #757](https://github.com/moltis-org/moltis/issues/757)。今日发布的修复 (#706) 破坏了 Ubuntu 24.04/26.04 上的 Podman 运行。这是一个待解决的回归问题。
*   **🟠 兼容性 (已修复)**: **MCP/Attio 工具被拒** - [Issue #743](https://github.com/moltis-org/moltis/issues/743) / [PR #746](https://github.com/moltis-org/moltis/pull/746)。修复了无法解析 JSON Schema draft-07 导致的 MCP 工具集成失败。

## 6. 功能请求与路线图信号
*   **代码索引**: PR #753-756 正在积极开发中，计划引入基于 SQLite + FTS5 的内置代码索引与增量重索引功能，这表明“本地代码知识库”是下一阶段的重点。
*   **UI/UX 改进**: [Issue #533](https://github.com/moltis-org/moltis/issues/533) (添加附件按钮) 和 [Issue #748](https://github.com/moltis-org/moltis/issues/748) (错误重试) 反映了用户对更便捷交互流程的渴望。
*   **推理控制**: 随着今日 [PR #750](https://github.com/moltis-org/moltis/pull/750) 合并，Web 端已支持“推理强度”切换，对应 Issue #739 和 #738 的关闭。

## 7. 用户反馈摘要
*   **痛点**: 用户在使用 Podman 容器环境时遇到了阻塞性问题 ([Issue #757](https://github.com/moltis-org/moltis/issues/757))，且部分模型（如 Grok 4.20）的推理功能未能正确触发，现已修复。
*   **满意度**: 针对工具调用错误和沙箱挂载问题，社区给予了积极的反馈，关闭的 Issue 中包含多个点赞，说明修复方向精准。

## 8. 待处理积压
*   **Podman 修复**: [Issue #757](https://github.com/moltis-org/moltis/issues/757) (OPEN) - 上一个修复导致了新问题，需立即关注。
*   **代码索引系列**: [PR #756](https://github.com/moltis-org/moltis/pull/756) (OPEN) - 一个包含 4 个子 PR 的大型功能栈，正在等待 Code Review 与合并。
*   **Nix 支持**: [PR #745](https://github.com/moltis-org/moltis/pull/745) (OPEN) - 另一个独立的 Nix Flake 实现方案正在讨论中，可能与已合并的 PR #469 存在方案竞争，需维护者决策。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-17)

## 1. 今日速览
CoPaw 项目今日（2026-04-17）呈现出**极高活跃度**，社区贡献与迭代速度显著加快。过去 24 小时内共处理了 **50 条 PR** 和 **50 条 Issue**，合并率高达 58%，显示项目在积极吸纳社区贡献。核心架构层面，针对 v1.1.2 版本的迭代正在紧锣密鼓地进行中，重点解决了后台任务取消、大模型 API 兼容性及多模态支持等关键问题。同时，**Channel（通讯渠道）生态迎来爆发**，社区提交了 WhatsApp、Signal 及 SIP 语音通话等频道的支持 PR，标志着 CoPaw 正向全平台 AI 助手方向快速演进。

## 2. 版本发布
**版本号：v1.1.2-beta.2**
*   **发布说明**：此版本为 Beta 测试版，主要修复了后台任务管理机制。
*   **关键更新**：
    *   **修复**：解决了 `AgentApp` 分发的请求未被 `TaskTracker` 正确注册，导致后台任务（如长文本生成、代码执行）被意外取消的问题。
    *   **变更**：版本号升级至 1.1.2b2，为后续正式版发布做准备。
*   **迁移建议**：建议遭遇长任务“假死”或自动中断的用户尝试更新此版本，以获得更稳定的服务体验。
*   **详情链接**：[Release v1.1.2-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.2-beta.2)

## 3. 项目进展
今日多个关键功能 PR 处于活跃开发或审核阶段，显著扩展了 CoPaw 的能力边界：

*   **核心架构优化**：
    *   **[feat] 多模态消息支持** ([PR #3509](https://github.com/agentscope-ai/QwenPaw/pull/3509))：新增 `MediaContent` 模型，支持在消息中传入图片和文件，并自动检测媒体类型。这标志着 CoPaw 从纯文本助手向全能型 AI 助手转型。
    *   **[fix] 完善与 vLLM 的兼容性** ([PR #3438](https://github.com/agentscope-ai/QwenPaw/pull/3438))：彻底修复了 vLLM OpenAI 兼容服务在接收 `tool_choice="auto"` 时的报错问题，提升了本地模型部署的稳定性。

*   **通讯渠道扩展**：
    *   **[feat] Signal 频道支持** ([PR #3508](https://github.com/agentscope-ai/QwenPaw/pull/3508))：通过 `signal-cli` 集成 Signal 通讯协议，进一步丰富隐私通讯选项。
    *   **[feat] WhatsApp 频道重构** ([PR #3498](https://github.com/agentscope-ai/QwenPaw/pull/3498))：基于 `neonize-qwenpaw` 重构了 WhatsApp 支持，解决了 Protobuf 版本冲突问题，并同步了最新频道特性。
    *   **[feat] SIP 语音通话** ([PR #3449](https://github.com/agentscope-ai/QwenPaw/pull/3449))：添加了 SIP 协议支持，实现流式 STT/TTS 和多轮对话，为语音交互场景打下基础。

*   **开发体验优化**：
    *   **[refactor] Console 导航栏美化** ([PR #3505](https://github.com/agentscope-ai/QwenPaw/pull/3505))：对齐了网站 Navbar 风格，增加了图标和欢迎 Logo，提升了前端 UI 一致性。

## 4. 社区热点
今日社区讨论焦点集中在版本迁移困惑、API 兼容性以及未来路线图：

*   **[question] QwenPaw 与 CoPaw 的区别与目录结构疑问** ([Issue #3309](https://github.com/agentscope-ai/QwenPaw/issues/3309))
    *   **热度**：11 条评论，今日活跃。
    *   **分析**：用户在更新到 1.1.0 后对二者的共存状态、路径配置 (`PATH`) 以及数据目录 (`.qwenpaw` vs `.copaw`) 的不一致感到困惑。这反映出项目在品牌统一或迁移文档上存在缺位，用户需要清晰的操作指南。

*   **[enhancement] ACP (Agent Communication Protocol) 支持** ([Issue #1059](https://github.com/agentscope-ai/QwenPaw/issues/1059))
    *   **热度**：持续受到关注，相关 PR ([#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487)) 已提交。
    *   **分析**：社区强烈希望 CoPaw 能作为 ACP Server 与 IDE（如 Zed, VSCode）集成，实现 AI 编码的闭环。

*   **[feature] CoPaw Agent Teams —— 自进化多智能体协作** ([Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224))
    *   **热度**：4 条评论。
    *   **分析**：用户提出了“自然语言驱动的自进化多智能体团队”构想，希望从当前的手动配置转向更高级的自动化团队编排，这是对 CoPaw 智能体能力的高级需求。

## 5. Bug 与稳定性
今日报告的 Bug 涉及文件操作、API 兼容性及 Web UI 稳定性，部分已有修复方案：

*   **[严重] write_file 工具写入大文件被截断** ([Issue #1563](https://github.com/agentscope-ai/QwenPaw/issues/1563))
    *   **现象**：写入 33KB 文件仅成功 6KB，导致数据丢失。
    *   **状态**： reopen 活跃中，尚未见直接修复 PR。

*   **[中等] Anthropic-compatible API 调用失败 (400 错误)** ([Issue #3489](https://github.com/agentscope-ai/QwenPaw/issues/3489))
    *   **现象**：使用 Kimi 等兼容 Claude 模型的 API 时频繁报错，原因为消息格式中包含 `None` 值或无效图片 URL。
    *   **影响**：阻止用户使用非官方的 Anthropic 模型源。

*   **[中等] /api/tools 返回 500 错误导致工具页加载失败** ([Issue #3481](https://github.com/agentscope-ai/QwenPaw/issues/3481)) -> **[已修复]**
    *   **现象**：内置工具 `icon=null` 时后端崩溃。
    *   **修复 PR**：[fix(tools): allow ToolInfo.icon to be None #3497](https://github.com/agentscope-ai/QwenPaw/pull/3497)。

*   **[UI] 下载文件 URL 路径重复** ([Issue #3435](https://github.com/agentscope-ai/QwenPaw/issues/3435))
    *   **现象**：点击下载文件时 URL 变为 `.../api/files/preview/api/files/preview/...`，无法下载。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中捕捉到的潜在未来功能：

*   **记忆系统扩展**：[PR #3500](https://github.com/agentscope-ai/QwenPaw/pull/3500) 提出了可扩展的记忆后端系统，计划支持 Mem0、Zep、LangMem 等多种外部记忆存储，这可能是 v1.2.0 的核心特性之一。
*   **模型管理增强**：用户请求增加“QwenPaw Local 模型卸载功能” ([Issue #3507](https://github.com/agentscope-ai/QwenPaw/issues/3507))，以简化本地模型清理流程。
*   **Kimi Code API 支持**：用户请求内置支持 Kimi Code 的 API ([Issue #3437](https://github.com/agentscope-ai/QwenPaw/issues/3437))。

## 7. 用户反馈摘要
*   **痛点**：
    *   **长任务中断**：多位用户反映在执行代码迭代或长任务时，Agent 会静默停止，需手动干预 ([Issue #3011](https://github.com/agentscope-ai/QwenPaw/issues/3011))。
    *   **记忆上下文丢失**：用户反馈在新对话中，Agent 未利用 MCP 服务配置记忆，反复尝试错误的连接方式或编码格式 ([Issue #3453](https://github.com/agentscope-ai/QwenPaw/issues/3453))。
    *   **WebUI 交互卡顿**：控制台会话页面易出现不响应卡住，但刷新后内容正常，疑似前端渲染或 WebSocket 连接问题 ([Issue #3468](https://github.com/agentscope-ai/QwenPaw/issues/3468))。
*   **好评**：用户对新增的 Debug 页面请求 ([Issue #3064](https://github.com/agentscope-ai/QwenPaw/issues/3064)) 和多模态支持表示期待。

## 8. 待处理积压
提醒维护者关注以下长期或高影响未解决问题：

*   **企业微信频道连接不稳定** ([Issue #2757](https://github.com/agentscope-ai/QwenPaw/issues/2757))：用户反馈频道经常断开，需重新保存配置。即使配置了心跳也未能解决。
*   **Pipeline 重复执行问题** ([Issue #3279](https://github.com/agentscope-ai/QwenPaw/issues/3279))：`ToolResultCompactor` 和 `ContextChecker` 在每条消息中执行两次，可能导致性能损耗。
*   **本地模型报错 (Qwen/CoPaw Flash)** ([Issue #3477](https://github.com/agentscope-ai/QwenPaw/issues/3477))：WSL2 环境下，Qwen 系列模型因 XML/JSON 格式不兼容导致工具调用失败，而 Gemma 模型正常。

---
**数据来源**：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)  
**生成时间**：2026-04-17

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**【项目日报】EasyClaw / RivonClaw - 2026-04-17**

---

### 1. 今日速览
EasyClaw (RivonClaw) 项目今日处于 **高频迭代状态**。在过去 24 小时内，项目连续发布了两个版本（v1.7.12 和 v1.7.13），显示出维护团队正积极解决更新机制问题。尽管合并了一个重要的特性分支，但社区反馈显示最新的自动更新功能存在严重阻碍，导致用户升级失败，需维护者紧急关注修复。

### 2. 版本发布
今日连续发布两个补丁版本，主要聚焦于 macOS 平台的兼容性与安装问题。
*   **[v1.7.13] & [v1.7.12]: RivonClaw**
    *   **发布重点**：解决了 macOS 平台 Gatekeeper 安全机制拦截的问题。针对未签名应用导致的“已损坏无法打开”错误，发布说明中增加了详细的 Terminal 命令行绕过指引（双语文档）。
    *   **用户影响**：这两个版本看起来主要是为了解决安装/启动拦截至问题，确保 macOS 用户能正常运行软件。鉴于版本跨度极小，v1.7.13 可能包含针对更新问题的紧急热修复。

### 3. 项目进展
*   **[#32 CLOSED] Feature/credits system**
    *   **进展**：由贡献者 `dlxai` 提交的积分系统（Credits System）功能分支已于今日关闭（推测已合并或作为最终状态）。
    *   **意义**：该功能的推进标志着 EasyClaw 正在引入某种形式的计费、积分或贡献度统计逻辑，这可能是项目商业化或社区激励机制的重要一步。

### 4. 社区热点
*   **[#33 OPEN] 1.7.11更新失败** (链接: [gaoyangz77/rivonclaw#33](https://github.com/gaoyangz77/rivonclaw/issues/33))
    *   **事件**：用户 `slowayear` 报告在从 1.7.11 版本更新时遭遇失败。
    *   **热度**：虽然目前仅有 1 条评论，但问题涉及软件更新链路，直接阻断了用户获取新版本的能力。
    *   **分析**：Issue 中附带截图，用户对更新受阻表达了不满（或仅仅是展示报错）。考虑到刚刚连续发布了两个版本，这可能与自动更新服务器的文件配置或签名校验逻辑冲突有关。

### 5. Bug 与稳定性
*   **🔴 严重 - [更新阻断]**
    *   **问题描述**：v1.7.11 版本无法正常完成更新流程（Issue #33）。
    *   **影响范围**：所有试图通过自动更新升级的旧版本用户。
    *   **修复状态**：**暂无公开 Fix PR**。虽然发布了新版本 v1.7.13，但如果自动更新程序本身未修复，用户仍无法无缝过渡，可能需要手动下载安装包。

*   **🟡 中等 - [macOS 兼容性]**
    *   **问题描述**：未签名应用在 macOS 上被误报为损坏。
    *   **缓解措施**：已在 Release Notes 中提供官方解决文档，但尚未解决代码签名缺失的根本问题。

### 6. 功能请求与路线图信号
*   **积分系统**：随着 PR #32 的关闭，"积分系统" 功能已落地。这暗示项目可能正在从单纯的工具类软件向具备账户体系或服务管理的平台转型。建议关注后续文档中关于该系统的具体使用说明。

### 7. 用户反馈摘要
*   **痛点**：macOS 用户对软件“被拦截”、“已损坏”的体验较为敏感，虽然文档提供了解决方案，但这增加了用户的使用门槛。此外，更新失败意味着用户体验流程中断。

### 8. 待处理积压
*   **紧急**：修复 Issue #33 中的自动更新逻辑问题。目前的频繁发布（v1.7.12 -> v1.7.13）可能正是为了应对此问题，维护者需确认自动更新通道是否已恢复正常。

---
**数据来源**: [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw) & [rivonclaw](https://github.com/gaoyangz77/rivonclaw)

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*