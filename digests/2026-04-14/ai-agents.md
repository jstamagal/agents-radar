# OpenClaw 生态日报 2026-04-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-14 00:18 UTC

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

# OpenClaw 项目动态日报 (2026-04-14)

## 1. 今日速览
OpenClaw 项目今日维持极高的开发活跃度，过去 24 小时内产生了 500 条 Issue 更新和 500 条 PR 更新，显示出社区与核心团队都在快速迭代。尽管昨日发布了 `v2026.4.12` 版本，旨在解决质量与插件加载问题，但社区反馈显示该版本引入了多个 Regression（回归）Bug，主要集中在浏览器管理 (CDP)、模型识别 (Volcengine/Qwen) 和消息投递 (Telegram/Feishu) 等领域。今日有大量针对 `v2026.4.12` 的修复 PR 被提出，团队正在紧急响应新版本带来的稳定性挑战。

## 2. 版本发布
**[v2026.4.12]: openclaw 2026.4.12**
- **发布时间**: 2026-04-12
- **核心更新**: 这是一次广泛的质量修复版本，重点优化了插件加载机制、内存管理和 "Dreaming"（长期任务/后台思考）功能的可靠性。新增了本地模型选项，并大幅简化了 Feishu（飞书）的配置路径。
- **迁移注意**: 鉴于今日报告的多个回归问题（如 Volcengine 模型无法识别、macOS 上 CDP 连接失败），建议升级后的用户密切关注相关的 Issue 修复进度。

## 3. 项目进展
今日合并或活跃中的重要 PR 推进了以下关键领域：
- **安全与隐私**: 引入了 `session.dmScope` 的安全检查警告，防止多用户环境下发生隐私消息泄露 ([#56964](https://github.com/openclaw/openclaw/pull/56964))。
- **模型与协议扩展**:
    - 新增 **Bluesky** 技能，集成了 CLI 工具与 MCP 服务器 ([#65972](https://github.com/openclaw/openclaw/pull/65972))。
    - 添加 **You.com** 插件，支持无 API Key 的网络搜索与研究 ([#64989](https://github.com/openclaw/openclaw/pull/64989))。
    - 为 Google Gemini CLI 提供者修复了注册时的分组显示问题 ([#65351](https://github.com/openclaw/openclaw/pull/65351))。
- **核心体验修复**:
    - 修复了 `exec` 工具的安全降级漏洞，确保配置的 `full` 安全级别不会被模型参数绕过 ([#65933](https://github.com/openclaw/openclaw/pull/65933))。
    - 改进了 OpenAI 推理模型的响应处理逻辑，避免仅包含推理状态而无实际回答的空回复 ([#66167](https://github.com/openclaw/openclaw/pull/66167))。
    - 增强了 WhatsApp 插件的代码结构和稳定性 ([#66221](https://github.com/openclaw/openclaw/pull/66221))。

## 4. 社区热点
今日讨论热度最高的问题集中在 **OAuth 并发处理**、**特定供应商模型兼容性** 以及 **飞书流式渲染** 上：
- **#26322** ([OPEN](https://github.com/openclaw/openclaw/issues/26322)): OAuth token 刷新时的竞态条件导致虚假故障转移，21 条评论。这触及了高并发场景下的核心认证稳定性。
- **#64799** ([OPEN](https://github.com/openclaw/openclaw/issues/64799)): Volcengine Coding Plan 在 macOS 26.4.1 上报错 "Unknown model"，19 条评论。反映了 `v2026.4.10` 重装后的严重配置兼容性问题。
- **#17101** ([OPEN](https://github.com/openclaw/openclaw/issues/17101)): Telegram 语音消息未被转录，14 条评论。用户对于语音交互的完整性有强烈需求。
- **#32495** ([CLOSED](https://github.com/openclaw/openclaw/issues/32495)): Control UI 切换 Agent 的功能请求已关闭，可能已有解决方案或被延后。
- **#58986** ([OPEN](https://github.com/openclaw/openclaw/issues/58986)): Discord 斜杠命令仅返回 "✅ Done." 而非实际输出，严重影响 Discord 用户体验。

## 5. Bug 与稳定性
今日报告的关键 Bug 按严重程度排列：
- **严重**:
    - **#65706** ([OPEN](https://github.com/openclaw/openclaw/issues/65706)): `openclaw nodes status/list` 命令在 `v2026.4.9` 无法同步，已被标记为 Beta blocker。
    - **#64238** ([OPEN](https://github.com/openclaw/openclaw/issues/64238)): `v2026.4.9` 导致 Qwen 模型 "Unknown model" 错误，典型的回归 Bug，降级至 `v2026.4.5` 可恢复。
    - **#33185** ([OPEN](https://github.com/openclaw/openclaw/issues/33185)): `imageModel` 功能彻底损坏，报错 "Unknown model"。
- **高优先级**:
    - **#65611 / #65990 / #64978 / #65093**: 多个 Issue 报告 macOS 上 Chrome CDP (DevTools Protocol) 连接失败，无论是手动模式还是托管模式均受影响 ([PR #66224](https://github.com/openclaw/openclaw/pull/66224) 可能涉及修复)。
    - **#65701** ([OPEN](https://github.com/openclaw/openclaw/issues/65701)): Telegram 渠道发送重复消息，新版本引入的回归。
- **中等**:
    - **#65993** ([OPEN](https://github.com/openclaw/openclaw/issues/65993)): Feishu 长回复在流式卡片模式下出现重复或截断。

## 6. 功能请求与路线图信号
- **#34644** ([OPEN](https://github.com/openclaw/openclaw/issues/34644)): 请求将嵌入式 Agent 的 LLM 请求超时从硬编码的 15s 改为可配置。这对于处理上游提供商（如 Anthropic）的延迟尖峰至关重要。
- **#32495** ([CLOSED](https://github.com/openclaw/openclaw/issues/32495)): 在 Control UI 中切换 Agent 的需求虽已关闭，但仍是多 Agent 用户的一大痛点。
- **#55342** ([OPEN](https://github.com/openclaw/openclaw/issues/55342)): 关于 OpenClaw 技能的行为信誉系统（Beyond Identity Verification），这是针对恶意技能防御的深层架构讨论。
- **PR #66168** ([OPEN](https://github.com/openclaw/openclaw/pull/66168)): 提议增加 Gateway 的 MCP Apps 协议扩展，暗示未来将加强 Agent 与工具资源的集成交互。

## 7. 用户反馈摘要
- **痛点**: 用户对 `v2026.4.12` 的稳定性感到失望，特别是 **Chrome 浏览器自动化** 和 **国产模型（如 Qwen/Volcengine）的兼容性**。多名用户反馈 "Downgrade back to v2026.4.5 resolves the issue"，表明新版本引入了阻断性变更。
- **渠道体验**: **Telegram** 用户深受语音转录失败和消息重复之苦；**Discord** 用户对斜杠命令失效表示不满；**Feishu** 用户在移动端遭遇消息刷屏问题。
- **执行安全**: 社区对 `exec` 工具的安全性细节（如 allowlist 匹配、环境变量继承）保持高度关注。

## 8. 待处理积压
以下 Issue 长期未解决或处于 "stale" 状态，建议维护者关注：
- **#17101** (Telegram 语音转录, Open since Feb): 尽管配置正确，语音仍未被转录。
- **#32473** (Control UI 设备身份, Open since Mar): VPS 和 Docker 用户遇到 HTTPS/localhost 上下文错误，暂无明确解决方案。
- **#22358** (Post-subagent hook, Open since Feb): 请求增加子任务完成后的扩展钩子。
- **#33557** (Telegram 长轮询健康检查, PR Open since Mar): 针对连接静默停滞的修复 PR 尚未合并。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告
**日期：** 2026-04-14
**分析对象：** OpenClaw, NanoBot, Zeroclaw, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, Moltis, CoPaw, EasyClaw

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态正处于**爆发后的深水区**。社区对智能体的需求已从单纯的“模型接入”转向**多模型路由**、**高并发执行**与**企业级安全隔离**。

今日生态呈现两极分化：一方面，头部项目如 **OpenClaw** 和 **Moltis** 正在解决快速迭代带来的“质量债务”与回归问题；另一方面，**Zeroclaw** 和 **NanoClaw** 等项目正积极探索打破容器隔离限制的原生运行模式与更底层的系统集成。整体上，**多模态交互**（语音、图像）、**协议标准化**（MCP、E2EE）以及**长期记忆管理**（Dreaming机制）已成为所有玩家的“必选项”。

---

## 2. 各项目活跃度对比 (2026-04-14)

| 项目名 | Issues (24h) | PRs (24h) | Release 状态 | 活跃度评级 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.4.12 (Reg) | 🔥 **极高** | ⚠️ **波动** (新版本引入大量回归) |
| **Moltis** | 7 (全清) | 18 (全清) | v20260413.03 | 🔥 **极高** | ✅ **极佳** (快速响应，零积压) |
| **IronClaw** | 45 | 50 | 无 (Build Up) | 🔥 **极高** | ⚠️ **修复中** (WebUI 稳定性挑战) |
| **Zeroclaw** | 21 | 50 | 无 | 🔥 **极高** | ✅ **稳健** (专注于安全与性能重构) |
| **NanoClaw** | 5 | 13 | 无 | 🔥 **极高** | ⚠️ **架构争论** (容器 vs 原生) |
| **LobsterAI** | ~5 | 22 | 2026.04.13 | 🔥 **高** | ✅ **良好** (持续补丁发布) |
| **NanoBot** | 44 | 58 | 无 | 🔥 **高** | ✅ **良好** (高合并率) |
| **CoPaw** | 40 | 50 | v1.1.1-beta.1 | 🔥 **高** | ⚠️ **割裂** (新旧版本迁移阵痛) |
| **PicoClaw** | ~5 | 41 | v0.2.6-nightly | 🔥 **高** | ⚠️ **实验性** (API兼容性风险) |
| **NullClaw** | 3 | 0 | 无 | 🔸 **中** | ⚠️ **瓶颈** (核心功能如集成受阻) |
| **EasyClaw** | 0 | 0 | v1.7.10 | 🔸 **平稳** | ✅ **稳定** (维护模式，拓展国际版图) |

> **注**：TinyClaw, ZeptoClaw 过去24小时无活动。

---

## 3. OpenClaw 在生态中的定位

*   **生态地位 (The Reference):** OpenClaw 是当之无愧的**流量中心与功能集大成者**。今日 500+ PR 的更新量证明了其拥有最大的社区贡献基数。
*   **技术路线:** 坚持**高度插件化**与**广泛的协议兼容**（支持从 LLM 到 MCP、CDP、各类 IM 协议）。
*   **对比优势:**
    *   **vs Zeroclaw:** OpenClaw 更侧重“大而全”的连接能力，而 Zeroclaw 侧重 Rust 带来的极致性能与安全沙箱。
    *   **vs Moltis:** OpenClaw 拥有更丰富的国产模型（Qwen/Volcengine）适配，Moltis 则在 UI 交互和架构解耦上更具现代感。
    *   **vs NanoClaw:** OpenClaw 偏向本地化/私有部署的复杂工程，NanoClaw 则更激进地探索 Agent 经济模型与跨平台通信。
*   **隐忧:** 今日关于 `v2026.4.12` 的大量回归反馈表明，其庞大的代码库正面临**质量控制**的挑战，社区开始出现“降级回退”的声音。

---

## 4. 共同关注的技术方向

今日动态显示，多个项目不约而同地在解决以下痛点：

1.  **模型路由与成本控制**
    *   **涉及项目:** NanoBot (Issue #2375), LobsterAI (PR #1646).
    *   **诉求:** 社区强烈呼吁根据任务复杂度自动在“昂贵/高性能”与“廉价/高性价比”模型间切换，以解决 Token 消耗过高（单次 56 万 tokens）的问题。

2.  **安全沙箱与执行隔离**
    *   **涉及项目:** Zeroclaw (PR #5702), NanoBot (Issue #2826), PicoClaw (Issue #1042).
    *   **诉求:** 这是一个全生态级的“攻坚战”。项目们都在尝试修复 `exec` 工具的漏洞（路径穿越、参数注入）或安全策略误杀（正则拦截正常命令）。**安全与易用性**的平衡极难拿捏。

3.  **多模态与文件交互**
    *   **涉及项目:** OpenClaw (PR #66167), NanoClaw (PR #1563), CoPaw (Issue #3329).
    *   **诉求:** 增强 LLM 对图像、PDF 的理解能力，以及在对话中发送/接收文件的可靠性。

4.  **企业级集成体验**
    *   **涉及项目:** IronClaw (Issue #2229), OpenClaw (Issue #17101), CoPaw (Issue #3331).
    *   **诉求:** 尽管功能强大，但在 Google Sheets、飞书 等企业场景下的 OAuth 流程、WebSocket 稳定性依然存在大量 Bug。

---

## 5. 差异化定位分析

| 维度 | **OpenClaw** | **Zeroclaw** | **Moltis** | **NanoClaw** |
| :--- | :--- | :--- | :--- | :--- |
| **核心语言** | Python | Rust | Rust | TypeScript (Node.js) |
| **功能侧重** | **全能型**: 极致的插件生态，支持几乎所有主流 IM 和模型。 | **安全/性能型**: 强调内存安全、快速启动、严格的沙箱检查。 | **交互/架构型**: 优秀的 Web UI，清晰的模块化解耦。 | **连接/通信型**: 专注于邮件、Matrix、微支付及多 Agent 编排。 |
| **目标用户** | 需要高度定制化 DIY 能力的极客与开发者。 | 关注系统资源占用、安全审计与私有化部署的专业团队。 | 需要开箱即用、UI 体验良好的终端用户及企业。 | 需要处理多渠道通信与自动化工作流的现代开发者。 |
| **今日技术痛点** | 版本回归导致的核心功能（模型识别、CDP）不可用。 | 安全策略过于严格导致正常命令被拦截。 | 修复特定 MCP 协议（如 Attio）的序列化问题。 | Docker 容器权限导致的文件系统访问冲突。 |

---

## 6. 社区热度与成熟度

*   **第一梯队 (成熟期 - 稳定迭代):**
    *   **Moltis:** 展现了惊人的工程化效率。单日清空所有积压 Issue/PR 并发布三次热修复，显示出极强的代码掌控力。
    *   **EasyClaw:** 处于维护模式，关注点转向国际化 (i18n)，适合追求稳定的用户。

*   **第二梯队 (爆发期 - 痛点与增长并存):**
    *   **OpenClaw / CoPaw:** 社区极其活跃，但因大版本重构或更名导致用户反馈强烈（配置丢失、Bug 较多）。这类项目功能最强，但用户需具备一定的排障能力。
    *   **Zeroclaw:** 处于架构重构关键期（如编译优化、Agent 编排），技术讨论极具深度。

*   **第三梯队 (探索期 - 寻找 PMF):**
    *   **NullClaw / NanoBot:** 活跃度中等，正在努力补齐基础功能（如 Cron 调度、Heartbeat 优化），试图在巨头的缝隙中寻找差异化生存空间。

---

## 7. 值得关注的趋势信号

1.  **“回归原生” (Native Runner) 的呼声:**
    *   **来源:** NanoClaw Issue #1732.
    *   **趋势:** 为了解决 Docker 容器带来的隔离障碍（如访问宿主机 tmux、剪贴板、macOS API），社区开始讨论绕过容器直接运行。这可能预示着未来 AI 助手将更深地嵌入操作系统，而非仅仅作为一个沙盒应用。

2.  **Agent 经济模型 的雏形:**
    *   **来源:** NanoClaw PR #1767 (AgentCash).
    *   **趋势:** 按次付费的微支付网关出现，暗示了未来“Agent 即服务”的商业可能性。

3.  **从“修复 Bug”转向“制定标准”:**
    *   **来源:** Zeroclaw RFC #5653, IronClaw Issue #84.
    *   **趋势:** 随着项目变大，维护者开始关注代码健康度、错误处理规范和生产就绪标准，标志着开源 Agent 项目正从“玩具项目”向“企业级基础设施”演进。

4.  **对前端体验的极致追求:**
    *   **来源:** IronClaw 的 Bug Bash, Moltis 的 Session Archive.
    *   **趋势:** 后端能力日益趋同的背景下，**Web UI 的稳定性**（防止崩溃、消息丢失）和**交互细节**（Token 可视化、归档管理）成为留住用户的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 (2026-04-14)

## 📊 今日速览
NanoBot 项目今日保持极高的开发与维护活跃度。过去 24 小时内，社区共处理了 **44 条 Issues**（关闭率近 60%）和 **58 条 PRs**（合并率超 50%），显示出项目在处理用户反馈和代码迭代方面的高效率。尽管没有发布新版本，但核心修复主要集中在**资源消耗优化**和**系统稳定性**上。社区讨论的热点从单一的 Bug 修复转向了对**多模态支持**、**Web 端交互**以及**模型路由策略**等更高层级架构功能的探讨。

## 🚀 版本发布
无

## 🛠️ 项目进展
今日合并的 PR 主要解决了阻碍用户使用的具体痛点，并增强了系统的容错能力：

*   **内存与稳定性修复**：PR [#3110](https://github.com/HKUDS/nanobot/pull/3110) 被合并，修复了 Agent 在遇到错误或达到最大迭代次数退出时，未清空注入队列导致的**消息重复/混淆回复**问题。
*   **文本处理逻辑优化**：PR [#2623](https://github.com/HKUDS/nanobot/pull/2623) 合并，修正了 `strip_think` 函数过于激进的正则匹配，防止了代码块中特定标签被误删导致的文本丢失。
*   **Telegram 体验增强**：PR [#2650](https://github.com/HKUDS/nanobot/pull/2650) 和 [#2546](https://github.com/HKUDS/nanobot/pull/2546) 合并，分别解决了流式输出时的**消息过长错误**以及**话题上下文丢失**问题，显著提升了 Telegram 用户的使用体验。

## 🔥 社区热点
今日最活跃的讨论集中在资源消耗和系统架构层面：

*   **[Issue #2375](https://github.com/HKUDS/nanobot/issues/2375) - Heartbeat session history causes ENORMOUS token usage (11 👍)**
    *   **核心问题**：用户报告 Heartbeat 功能在持久化会话历史时，可能导致单次请求消耗高达 **56 万 Tokens**。
    *   **诉求分析**：这表明用户对长期运行任务的**成本控制**非常敏感。社区急需在“保持上下文记忆”与“降低 Token 成本”之间找到平衡。
*   **[Issue #3095](https://github.com/HKUDS/nanobot/issues/3095) - custom provider with anthropic api (3 评论)**
    *   **核心问题**：用户询问如何使用兼容 Anthropic API 但非官方端点的自定义 Provider。
    *   **诉求分析**：反映了用户对于**模型供应商多元化**和**私有化部署**的强烈需求。
*   **[PR #2972](https://github.com/HKUDS/nanobot/pull/2972) - Add Web UI (0 评论)**
    *   **动态**：虽然暂无评论，但该 PR 处于 Open 状态且为重要功能增补，预示着 NanoBot 即将拥有原生的 Web 管理界面，降低非技术用户的使用门槛。

## 🐛 Bug 与稳定性
今日报告的 Bug 涉及数据安全和系统兼容性，需引起高度重视：

1.  **[CRITICAL] [Issue #2957](https://github.com/HKUDS/nanobot/issues/2957) - dream overwriting MEMORY.md**
    *   **描述**：用户发现 `MEMORY.md` 被 Dream 机制清空，且无 Git 备份。
    *   **状态**：已关闭（可能已修复或确认为用户配置问题，但在 PR #3021 中有相关的修复代码）。
    *   **风险**：核心记忆丢失，属于数据安全高危 Bug。
2.  **[HIGH] [Issue #2868](https://github.com/HKUDS/nanobot/issues/2868) - `exec` tool forced to use bash on Windows (2 👍)**
    *   **描述**：某次提交后，Windows 上的 `exec` 工具被强制使用 `bash`，导致无 WSL 环境下无法执行命令。
    *   **状态**：已关闭。
    *   **影响**：导致 Windows 平台核心功能不可用（回归问题）。
3.  **[MEDIUM] [Issue #2562](https://github.com/HKUDS/nanobot/issues/2562) - Telegram 👀 acknowledgment reaction remains**
    *   **描述**：Telegram 消息回复后，"正在输入"或"已读"标记未正确消除。
    *   **状态**：已关闭。
4.  **[MEDIUM] [Issue #2826](https://github.com/HKUDS/nanobot/issues/2826) - Nanobot can remove files anywhere even with restrictToWorkspace=true**
    *   **描述**：即使开启工作区限制，仍可能删除任意文件。
    *   **状态**：已关闭。安全性相关的 Bug 修复至关重要。

## 💡 功能请求与路线图信号
用户的建议显示出对“智能化路由”和“多端协同”的渴望：

*   **[Issue #3070](https://github.com/HKUDS/nanobot/issues/3070) - 模型路由**
    *   **建议**：实现类似 OpenRouter 的功能，根据任务复杂度自动在“高性能/昂贵模型”和“高性价比/廉价模型”之间切换。
    *   **分析**：这是降低 AI Agent 运营成本的关键功能，具有很高的落地价值。
*   **[Issue #3103](https://github.com/HKUDS/nanobot/issues/3103) - Before/After Hook during dreaming**
    *   **建议**：在 Dream 过程中增加钩子，以便将记忆同步到外部文档（如飞书文档）。
    *   **关联**：对应的 PR [#3104](https://github.com/HKUDS/nanobot/pull/3104) 已经提交，说明该功能正在开发中。
*   **[Issue #3096](https://github.com/HKUDS/nanobot/issues/3096) - Tool scheduling should trust the LLM's parallel tool calls**
    *   **建议**：优化工具调度逻辑，信任 LLM 的并行工具调用能力，而非全盘串行化，以提升执行效率。

## 💬 用户反馈摘要
*   **痛点**：部分用户反馈在**隔离网络环境**（无外网权限）下，依赖 `litellm` 或 `tiktoken` 的首次启动会因请求超时而失败 ([Issue #2145](https://github.com/HKUDS/nanobot/issues/2145))。
*   **性能**：有用户反映更新到 `v0.1.4.post6` 后，响应速度从 1 秒下降到 3 分钟 ([Issue #2713](https://github.com/HKUDS/nanobot/issues/2713))，提示版本间性能回归风险。
*   **文档**：用户在配置自定义 Provider 和环境变量时遇到困难，如 DeepSeek API Key 无法读取 `${VAR}` ([Issue #2849](https://github.com/HKUDS/nanobot/issues/2849))，表明配置解析器和文档的易用性有待提升。

## 🗃️ 待处理积压
以下 Issues 长期未解决或持续引发讨论，建议纳入维护者视野：
*   **[Issue #2185](https://github.com/HKUDS/nanobot/issues/2185) (OPEN)**：关于 `gemini-3-flash-preview` 的兼容性问题，自 3 月 17 日开启至今仍有更新，可能是模型适配层面的难点。
*   **[Issue #1378](https://github.com/HKUDS/nanobot/issues/1378) (OPEN)**：通用工具编排器（并行执行与依赖注入），虽然已有 Patch，但尚未合并，涉及底层架构的重大调整。
*   **[Issue #2318](https://github.com/HKUDS/nanobot/issues/2318) (OPEN)**：关于 Tool-loop 成本与可靠性的路线图讨论，关联多个子问题，需要系统性的规划处理。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 (2026-04-14)

## 1. 今日速览
Zeroclaw 项目今日处于**极高活跃度**状态，过去 24 小时内产生了 71 条更新（21 Issues + 50 PRs），显示出社区强劲的贡献势头。核心开发重点集中在**安全性加固**（S0 级别的漏洞修复）、**构建性能优化**（解决 Rust 编译慢的问题）以及**生产环境代码规范 (RFC)**。同时，多个与供应商集成（Ollama, DeepSeek, Groq）相关的 Bug 被集中修复，表明项目正致力于提升多模型环境的稳定性。

## 2. 版本发布
*   **状态**：今日无新版本发布。
*   **注意**：尽管近期合并了大量修复，包括 E2EE 重试循环、上下文压缩器修复和构建性能优化，但尚未发布包含这些更改的正式 Release。

## 3. 项目进展
今日合并或活跃推进的 PR 显著提升了系统的安全性、性能和开发体验：

*   **[重要] 安全策略收紧**：针对 S0 级风险漏洞，提交了 PR [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702)，修复了 `is_args_safe()` 仅检查 `find` 和 `git` 的缺陷，现已扩展至拦截 python、pip、cargo 等解释器的危险参数（如 `-c`、`-e`），防止沙箱绕过。
*   **构建性能飞跃**：针对社区长期抱怨的编译慢问题，PR [#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) 已关闭。核心团队提交了 [#5707](https://github.com/zeroclaw-labs/zeroclaw/pull/5707)（移除 21 个未使用依赖）和 [#5711](https://github.com/zeroclaw-labs/zeroclaw/pull/5711)（将 28 个频道按需编译），预计将显著缩短 `cargo build` 时间。
*   **Shell 工具增强**：PR [#5160](https://github.com/zeroclaw-labs/zeroclaw/pull/5160) 放宽了 Shell 重定向限制，现在安全支持 Heredocs (`<<`) 和 stderr 重定向 (`2>/dev/null`)，提升了代理执行本地脚本的灵活性。
*   **关键 Bug 修复**：
    *   **DeepSeek 兼容性**：Issue [#5268](https://github.com/zeroclaw-labs/zeroclaw/issues/5268)（已关闭）修复了上下文压缩器删除 `tool_call_id` 导致的 400 错误。
    *   **上下文管理**：PR [#5701](https://github.com/zeroclaw-labs/zeroclaw/pull/5701) 为 `SessionBackend` 添加了 O(1) 复杂度的 `clear_messages` 方法，解决了会话重置时的性能瓶颈。

## 4. 社区热点
今日讨论焦点主要集中在项目的工程化标准与遗留债务清理：

*   **[RFC] 代码健康与生产就绪标准** ([#5653](https://github.com/zeroclaw-labs/zeroclaw/issues/5653))
    *   **内容**：核心成员WareWolf-MoonWall 发布了新的 RFC，提出 "Zero Compromise"（零妥协）标准，涵盖错误处理规范、代码健康度分级等。
    *   **信号**：这标志着项目正从快速迭代期转向重视稳定性和企业级交付的成熟期。
*   **Agent 编排架构重构** ([#2420](https://github.com/zeroclaw-labs/zeroclaw/pull/2420))
    *   **内容**：一个标记为 XL 尺寸、高风险的 PR 重新设计了 Agent 团队和子代理的编排逻辑，引入了运行时配置。
    *   **状态**：活跃更新中，暂未合并，是未来版本的核心看点。
*   **订阅制 OAuth 支持请求** ([#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601))
    *   **内容**：用户强烈建议增加对 Ollama Cloud, z.ai (智谱), Kimi (月之暗面), MiniMax 的原生登录支持。
    *   **反应**：👍 1，反映了非技术用户对免 API Key 配置的强需求。

## 5. Bug 与稳定性
今日报告的 Bug 涵盖了安全、系统阻塞和性能问题，部分已有修复方案：

*   **[S0 - 严重] 解释器沙箱绕过** ([#5698](https://github.com/zeroclaw-labs/zeroclaw/issues/5698))
    *   **现象**：`python -c "evil_code"` 等命令绕过了策略检查，导致任意代码执行风险。
    *   **状态**：已有 Fix PR [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702)。
*   **[S0 - 严重] 文件权限误判** ([#5692](https://github.com/zeroclaw-labs/zeroclaw/issues/5692))
    *   **现象**：Agent 声称无权限在工作目录创建文件，导致数据丢失或任务失败。
    *   **影响**：核心工作流受阻。
*   **[S1 - 阻塞] Daemon 服务端口冲突** ([#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628))
    *   **现象**：systemd 服务自启后占用端口，导致手动运行 `zeroclaw daemon` 报错 `Address already in use`。
    *   **影响**：开发者环境冲突。
*   **[S1 - 阻塞] CLI 通道工厂未注册** ([#5685](https://github.com/zeroclaw-labs/zeroclaw/issues/5685))
    *   **现象**：Agent 模式启动崩溃，提示通道未注册。
    *   **影响**：新用户 onboarding 流程受阻。
*   **[Bug] CPU 峰值** ([#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125))
    *   **现象**：在 Firefox 下向 Agent 聊天框输入时导致多核 CPU 飙升。
    *   **状态**：已持续更新，尚无明确修复 PR。

## 6. 功能请求与路线图信号
从活跃的 Issues 和 PRs 中可以看出以下趋势：

*   **集成生态扩充**：除了 Issue [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) 提到的云服务商 OAuth，PR [#5602](https://github.com/zeroclaw-labs/zeroclaw/pull/5602) 正在 Mattermost 频道中引入 WebSocket 支持，取代低效的轮询。
*   **会话管理增强**：PR [#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696) 提议增加 `SessionResetTool` 和 `SessionDeleteTool`，赋予 Agent 自主清理过期会话的能力。
*   **WASM 插件系统**：PR [#5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231) 正在开发基于 WASM 的安全沙箱插件系统，这将极大扩展 ZeroClaw 的自定义能力。
*   **内存钩子**：Issue [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) 请求增加 Shell Pre/Post Hooks，用于日志记录和上下文注入。

## 7. 用户反馈摘要
*   **痛点 - 安装与文档脱节**：Issue [#5679](https://github.com/zeroclaw-labs/zeroclaw/issues/5679) 指出，由于 `install.sh` 重写，30+ 种语言的翻译文档引用了已废弃的 flags，导致非英语用户安装困惑。
*   **痛点 - 编译速度**：Issue [#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) 收到大量开发者共鸣，二次开发时修改一行代码需全量编译严重影响效率（目前已通过 PR [#5707](https://github.com/zeroclaw-labs/zeroclaw/pull/5707) 等解决）。
*   **痛点 - 体验细节**：Issue [#5683](https://github.com/zeroclaw-labs/zeroclaw/issues/5683) 反馈官网技能安装指令（`zeroclaw skill install`）与实际 CLI 不符，反映出文档与代码版本的不同步。
*   **好评**：Matrix 修复 (#4657) 中用户对 E2EE 重试循环修复表示认可。

## 8. 待处理积压
*   **Agent 编排重构** ([#2420](https://github.com/zeroclaw-labs/zeroclaw/pull/2420))：3 月初开启的大规模重构，已讨论多轮，涉及核心架构，需尽快合并或回滚以避免长期占用分支资源。
*   **Matrix 频道摩擦** ([#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657))：虽然是 Umbrella Issue，但列出了一系列遗留的体验问题，部分标记为 "Preferred PRs" 但尚未合并。
*   **安全扫描报告** ([#5709](https://github.com/zeroclaw-labs/zeroclaw/issues/5709))：ClawGuard 扫描出 66 个 Critical 级别的安全问题，尚需安全团队介入审查。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-14)

## 📊 今日速览
PicoClaw 项目在 2026-04-14 展现了极高的开发活跃度，**共处理了 41 条 PR（远超日常均值）**，标志着项目可能正处于重要的版本迭代或重构期。核心架构方面，社区正在热烈讨论并实施数据库上下文管理与多实例配置支持。同时，发布了新的 Nightly 版本（v0.2.6-nightly），但随之带来了一些适配性问题。安全与多用户支持仍是当前技术演进的主要方向。

---

## 🚀 版本发布
- **版本号**: `v0.2.6-nightly.20260413.6d037919`
- **类型**: Nightly Build (自动构建，可能不稳定)
- **关键变更**: 包含从 v0.2.6 至 main 分支的所有最新代码。
- **风险提示**: 官方提示该版本为自动化构建，可能存在不稳定因素，请谨慎用于生产环境。
- **查看详情**: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

---

## 🛠️ 项目进展
今日共有 12 个 PR 被合并或关闭，重点推进了以下功能：

1.  **配置系统重构**: PR #2481 (由 cytown 提交) 已关闭，标志着配置项 `config.Channel` 向多实例支持的迁移工作已初步完成或进入下一阶段，这为支持多个应用实例奠定了基础。
2.  **Agent 并行处理**: PR #2503 引入了 Agent Loop 的并行处理支持，这将显著提升高并发场景下的响应速度。
3.  **CLI 文件嵌入优化**: PR #2505 改进了工作区文件的嵌入过程，确保二进制文件中仅包含最新的 `workspace` 内容，减少了冗余。
4.  **安全与清理**: PR #2495 增强了 `/clear` 命令，现在可以正确清理 Seahorse (SQLite) 数据库中的旧数据，防止数据残留。

---

## 🔥 社区热点
今日讨论主要集中在架构升级与新版本的兼容性问题上：

1.  **第三方客户端安全接入 (Feature Request)**
    - **链接**: [Issue #2499](https://github.com/sipeed/picoclaw/issues/2499)
    - **内容**: 社区呼吁为浏览器扩展或外部桌面工具提供可持续、安全的 WebSocket 接入路径，并建立版本兼容性策略。这反映了 PicoClaw 正逐渐被用于更复杂的生态集成中。

2.  **Nightly 版本 API 兼容性危机**
    - **链接**: [Issue #2479](https://github.com/sipeed/picoclaw/issues/2479)
    - **内容**: 用户反馈在最新的 v0.2.6 版本中，使用 NVIDIA API 调用 DeepSeek/GLM 模型时出现 404 错误。该问题已迅速引起维护者注意并关闭（可能已修复或被归类），提示用户关注后续 Patch。

3.  **多飞书应用支持**
    - **链接**: [Issue #2493](https://github.com/sipeed/picoclaw/issues/2493)
    - **内容**: 用户请求允许通过独立的配置目录运行多个飞书应用实例。这与今日合并的 PR #2481 高度相关，预示着该功能可能即将上线。

---

## 🐞 Bug 与稳定性
今日报告的 Bug 主要集中在执行工具的安全判定逻辑与新版本的兼容性上：

1.  **[HIGH] Exec 工具路径误判**
    - **链接**: [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)
    - **描述**: `exec` 工具的 `guardCommand` 方法过于简单粗暴。例如执行 `curl` 查询天气时，正则匹配出的 URL 参数被错误识别为 `../../../../Beijing?T` 这样的相对路径，导致命令被安全守卫拦截。
    - **状态**: 待修复。相关补丁 [PR #2378](https://github.com/sipeed/picoclaw/pull/2378) 正在进行路径检查的加固工作。

2.  **[MEDIUM] 音频解码数据损坏**
    - **链接**: [PR #2504](https://github.com/sipeed/picoclaw/pull/2504)
    - **描述**: 修复了 OGG 解码器中的 Buffer 重用 Bug，该 Bug 会导致 Discord 语音发送前的 Opus 帧数据损坏。

3.  **[LOW] 配置空字符串 Bug**
    - **链接**: [PR #2507](https://github.com/sipeed/picoclaw/pull/2507)
    - **描述**: 修复了 `allowFrom` 字段包含空字符串时的逻辑错误。

---

## 🗺️ 功能请求与路线图信号
结合 Issues 与 PRs，以下是未来的开发方向信号：

1.  **多实例与多用户架构**: [Issue #2493](https://github.com/sipeed/picoclaw/issues/2493) (飞书多开) 和 [PR #2313](https://github.com/sipeed/picoclaw/pull/2313) (Agent Shield 多用户/权限隔离) 表明项目正在从单机单用户向企业级多用户/多实例管理转型。
2.  **策略评估系统**: [PR #2509](https://github.com/sipeed/picoclaw/pull/2509) (已关闭) 提出引入 `pkg/policy` 包，通过 YAML 配置来控制工具调用和意图。虽然 PR 关闭，但代码可能已合并或重构进入主分支，显示了增强安全控制的趋势。
3.  **CLA 协议更新**: [Issue #2506](https://github.com/sipeed/picoclaw/issues/2506) 指出当前的 CLA 协议引用了错误的实体 (SAP)，需要维护者更新法律文档以适应开源项目规范。

---

## 📝 用户反馈摘要
*   **痛点**: 最为集中的痛点是**安全机制的误杀**（Issue #1042），正常的命令被路径拦截，影响了自动化任务的执行效率。
*   **场景**: 用户不仅在 WebUI 上使用，更广泛地尝试接入 **Telegram**、**Discord** (语音功能) 以及 **飞书**，且有多账号管理需求。
*   **建议**: 外部开发者希望项目能提供更标准化的 WebSocket 接口，以便开发浏览器扩展或第三方客户端，而不依赖内部 WebUI。

---

## 📥 待处理积压
*   **Issue #1042** (Open): Exec 工具路径误判问题。虽然已有 [PR #2378](https://github.com/sipeed/picoclaw/pull/2378) 尝试修复，但该 Issue 自 3 月 4 日开启至今仍未彻底关闭，需关注修复效果。
*   **PR #2313** (Open): Agent Shield 集成与多用户支持。这是一个庞大的增强功能，包含了大量的代码变更，处于 Open 状态较久，建议维护者评估是否需要拆分或进行代码审查。
*   **PR #2249** (Open): 入站上下文路由会话重构。涉及到核心架构，需谨慎推进。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-14)

## 📊 今日速览
NanoClaw 项目今日处于**极高活跃度**状态。过去 24 小时内共收到 **18 条代码与议题更新**（5 个 Issues，13 个 PR），显示出强劲的开发社区势头。核心架构迎来了**极具争议的“原生运行模式”讨论**（Issue #1732），旨在突破 Docker 容器隔离以支持更高级的系统级集成（如 tmux、macOS API）。与此同时，社区提交了包括 **IMAP 邮件集成**、**Matrix 通道**、**微支付网关**及 **Twilio 语音回拨**在内的多项新功能 PR，显示出项目正在向全功能通信与金融交互平台演进。尽管活跃，项目中暴露了关于容器权限管理和 TypeScript 编译错误处理的稳定性隐患，需尽快处理。

## 🚀 版本发布
**当前无新版本发布。**
鉴于今日有 5 个重要 PR（Discord 多机器人支持、MS Graph 桥接、PDF/图像 PII 保护、内存代理重构、路由修复）已合并/关闭，建议维护者考虑尽快发布一个补丁版本（如 v0.x.y）以整合这些更改。

## 🔨 项目进展
以下 PR 已成功合并或关闭，标志着项目功能的实质性推进：

*   **[FEAT] Discord 多机器人支持** ([#1765](https://github.com/qwibitai/nanoclaw/pull/1765)) - **已关闭**
    *   **进展**：实现了在单实例中运行多个 Discord Bot 的能力，并修复了 `@mention` 触发器注入逻辑。
    *   **价值**：显著提升了 NanoClaw 在多租户或多场景下的部署灵活性。
*   **[FEAT] MS Graph MCP 桥接** ([#1766](https://github.com/qwibitai/nanoclaw/pull/1766)) - **已关闭**
    *   **进展**：通过 `mcp-proxy` 将 MS Graph 服务引入容器，使 Agent 能够安全访问微软生态数据。
*   **[FEAT] SQLite 优先的自改进记忆代理** ([#1743](https://github.com/qwibitai/nanoclaw/pull/1743)) - **已关闭**
    *   **进展**：完成了 ENG-123 里程碑，实现了基于 SQLite 的阶段性记忆检索、信心反馈和“梦境”维护机制。这是 NanoClaw 智能体自我进化能力的关键升级。
*   **[FEAT] PII 保护扩展至 PDF/图像** ([#1563](https://github.com/qwibitai/nanoclaw/pull/1563)) - **已关闭**
    *   **进展**：在主机侧对 PDF 文本和图像进行脱敏处理，确保原始敏感数据不进入容器。
*   **[FIX] 路由器上下文消息 ID 缺失** ([#1756](https://github.com/qwibitai/nanoclaw/pull/1756)) - **已关闭**
    *   **进展**：修复了 `router.ts` 中 XML 格式缺少 `id` 属性的问题，确保 Agent 能正确引用和反应特定消息。

## 🔥 社区热点
今日讨论焦点主要集中在架构演进与安全性上：

1.  **架构大变革：原生运行模式** ([#1732](https://github.com/qwibitai/nanoclaw/issues/1732))
    *   **热度**：⭐⭐⭐⭐⭐
    *   **讨论**：用户 `stevengonsalvez` 提出通过绕过 Docker 容器来实现“原生运行”，以直接访问宿主机工具（如 tmux、有头浏览器、macOS API）。
    *   **核心诉求**：解决容器隔离带来的“硬阻塞”问题，使 Agent 能作为宿主机的直接助手而非沙盒应用。
    *   **现状**：目前处于构思阶段，考虑到 NanoClaw 的安全核心是容器隔离，此提议引发了关于安全模型重构的深层思考。
2.  **容器权限管理 Bug** ([#1763](https://github.com/qwibitai/nanoclaw/issues/1763))
    *   **热度**：⭐⭐⭐⭐
    *   **讨论**：报告了在 Linux 部署中，由于 UID 不匹配导致容器内 `node` 用户无法写入宿主机 root 用户创建的目录，引发 `EACCES` 崩溃。
3.  **新功能：IMAP 邮件与微支付** ([#1764](https://github.com/qwibitai/nanoclaw/pull/1764), [#1767](https://github.com/qwibitai/nanoclaw/pull/1767))
    *   **热度**：⭐⭐⭐
    *   **讨论**：社区正积极扩展 Agent 的感知与交互能力，包括邮件收发和基于 x402 的按次付费 API 访问。

## 🐛 Bug 与稳定性
今日报告的关键稳定性问题如下（按严重程度排序）：

1.  **[HIGH] 容器权限拒绝崩溃** ([#1763](https://github.com/qwibitai/nanoclaw/issues/1763))
    *   **现象**：Agent 因 `EACCES: permission denied` 无法创建 `/home/node/.claude/debug` 目录导致崩溃。
    *   **影响范围**：所有 Linux 上的新部署（当宿主进程为 root 时）。
    *   **状态**：已提出 `chownForContainer()` 辅助函数作为修复方案，暂无合并的 PR。
2.  **[HIGH] TypeScript 编译错误导致静默失败** ([#1762](https://github.com/qwibitai/nanoclaw/issues/1762))
    *   **现象**：当 `container/agent-runner` 存在类型错误时，容器启动失败并无限重启，但用户端无任何错误提示。
    *   **影响范围**：开发及部署环境，严重影响调试体验。
    *   **状态**：待修复。
3.  **[MED] EFS 上过期的 Claude Code 会话导致失败** ([#1761](https://github.com/qwibitai/nanoclaw/issues/1761))
    *   **现象**：使用 EFS 上存储的过期 Session ID 会导致 Agent 无响应。
    *   **状态**：待清理机制处理。

## 🔮 功能请求与路线图信号
从活跃的 PR 和 Issues 中可以看出 NanoClaw 的功能拓展方向：

*   **通信渠道矩阵化**：
    *   **IMAP 邮件集成** ([#1764](https://github.com/qwibitai/nanoclaw/pull/1764))：使 Agent 能处理邮件。
    *   **Matrix 协议支持** ([#1624](https://github.com/qwibitai/nanoclaw/pull/1624))：支持端到端加密（E2EE）的 Matrix 通道。
    *   **Twilio 语音回拨** ([#1760](https://github.com/qwibitai/nanoclaw/pull/1760))：提醒电话无人接听时自动拨打备用号码。
*   **商业化与微支付**：
    *   **AgentCash 微支付** ([#1767](https://github.com/qwibitai/nanoclaw/pull/1767))：引入按次付费的 API 访问模式，可能标志着项目开始探索 Agent 经济模型。
*   **文件交互增强**：
    *   **MCP 文件发送工具** ([#1757](https://github.com/qwibitai/nanoclaw/pull/1757))：允许 Agent 向用户发送文件（如图片、文档）。

## 📢 用户反馈摘要
*   **痛点 - 混乱的知识库路径**：Issue [#1759](https://github.com/qwibitai/nanoclaw/pull/1759) 指出，随着 Obsidian 库结构的重组，现有的 `agent-draft.sh` 和技能文档中的路径引用已过时，导致上下文加载失败，用户正在手动修正这些路径。
*   **痛点 - 上下文管理的复杂性**：用户在处理“过时 Session” ([#1761](https://github.com/qwibitai/nanoclaw/issues/1761)) 时感到困惑，EFS 数据的生命周期管理缺乏自动化。
*   **正面 - 迭代响应快**：用户 `recomby-ai` 提交的文档更新 PR ([#1755](https://github.com/qwibitai/nanoclaw/issues/1755)) 在一天内被关闭并处理，显示出维护团队对文档同步的重视。

## 🗄️ 待处理积压
*   **长期未合并/讨论中**：
    *   [**feat: native runner mode**](https://github.com/qwibitai/nanoclaw/issues/1732) - 提出于 4 月 10 日，作为一项重大的架构变更，至今仍在讨论中。需要维护团队评估是否将其纳入路线图。
*   **文档债务**：
    *   虽然 Issue #1755 已关闭，但 PR [#1759](https://github.com/qwibitai/nanoclaw/pull/1759) 尚未合并，表明代码中对 Obsidian 路径的引用更新工作仍在进行中。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-04-14)

## 1. 今日速览
今日 NullClaw 项目在 Issues 与 PR 板块均保持活跃。过去 24 小时内新增 **3 个 Bug 反馈**，主要集中在第三方 API 兼容性、网络请求功能及缓冲区限制方面，显示出用户在尝试集成 OpenRouter 和自定义 OpenAI 兼容提供商时遇到了障碍。代码提交层面，社区贡献者正在推进 **Cron 子代理引擎** 的大功能迭代以及 **SysVinit 服务安装** 的支持，项目在底层调度能力与 Linux 发行版兼容性上持续拓展。整体来看，项目处于活跃开发状态，但需关注近期针对外部模型提供商集成的一系列稳定性问题。

## 2. 版本发布
**暂无新版本发布。**
（当前代码库仍处于活跃迭代中，暂无新的 Release 标签推送到 GitHub。）

## 3. 项目进展
今日 **无 PR 合并**。目前有两个重要的 Pull Request 处于待合并状态，正在推进以下功能：
-   **Cron 任务调度系统重构 ([PR #783](https://github.com/nullclaw/nullclaw/pull/783))：**
    贡献者 `yanggf8` 提交了大幅更新，旨在引入数据库支持的 Cron 调度引擎。该功能将包含运行历史记录 (`cron_runs` 表)、原子化任务调度、多种作业类型以及 JSON 输出支持。这将极大增强 NullClaw 作为长期运行代理的自动化能力。
-   **Linux 服务管理增强 ([PR #810](https://github.com/nullclaw/nullclaw/pull/810))：**
    贡献者 `mark-os` 提出了添加 SysVinit 回退机制的方案。这将使 NullClaw 能够在未安装 systemd 或 OpenRC 的传统 Linux 环境中作为服务运行，进一步提升了部署的通用性。

## 4. 社区热点
**热点问题：互联网搜索功能失效 ([Issue #812](https://github.com/nullclaw/nullclaw/issues/812))**
-   **事件：** 用户 `uMendex` 反馈称在从 Picoclaw/ZeroClaw 转移过来后，尝试启用互联网搜索功能失败，且测试了所有示例均无效。
-   **分析：** 该 Issue 在过去 24 小时内获得了评论互动（尽管评论数显示为 1），触及了用户核心使用场景（联网能力）。这表明项目的某个核心依赖或配置在最新版本中可能存在回归，或文档示例未能跟上代码变更，导致从旧版本迁移的用户遇到阻碍。

## 5. Bug 与稳定性
今日报告的 Bug 均未关联 Fix PR，需维护者优先关注：
1.  **[严重] 子代理通信崩溃 ([Issue #811](https://github.com/nullclaw/nullclaw/issues/811))**
    -   **现象：** 使用 `--agent` 连接自定义 OpenAI 兼容提供商的子代理时，抛出 `error.CompatibleApiError` (exit_code=3)，导致消息无法发送。
    -   **影响：** 阻断用户使用自定义模型扩展 NullClaw 能力。
2.  **[中等] OpenRouter 模型刷新失败 ([Issue #809](https://github.com/nullclaw/nullclaw/issues/809))**
    -   **现象：** 执行 `nullclaw models refresh` 失败，提示 curl failed。
    -   **根因：** `std.process.Child.run()` 默认缓冲区仅为 50KB，而 OpenRouter 的 API 响应约 400KB，导致缓冲区溢出。
    -   **修复建议：** 需修改 `src/onboard.zig:2501` 处的 `max_output_bytes` 限制。
3.  **[待定] http_request 互联网搜索异常 ([Issue #812](https://github.com/nullclaw/nullclaw/issues/812))**
    -   **现象：** 互联网搜索功能在最新版本下无法工作。

## 6. 功能请求与路线图信号
-   **Cron 自动化能力：** [PR #783](https://github.com/nullclaw/nullclaw/pull/783) 显示用户（或开发者）强烈希望建立基于数据库的任务调度历史和队列系统，而不仅仅是简单的定时任务。这预示着 NullClaw 正试图向更稳健的后台任务管理器演进。
-   **全平台服务化支持：** [PR #810](https://github.com/nullclaw/nullclaw/pull/810) 提出的 SysVinit 支持表明项目在路线图中重视对老旧 Linux 发行版及容器的兼容性，不希望过度依赖现代 init 系统（如 systemd）。

## 7. 用户反馈摘要
-   **痛点：** 用户在尝试配置外部模型提供商（特别是 OpenRouter 和自定义兼容接口）时遇到了较高的阻力，要么是配置报错 ([Issue #811](https://github.com/nullclaw/nullclaw/issues/811))，要么是缓冲区限制导致功能不可用 ([Issue #809](https://github.com/nullclaw/nullclaw/issues/809))。
-   **迁移体验：** 有用户提到“I came from Picoclaw... it seems very organized”，这表明项目结构获得了认可，但从其他分支迁移过来的功能（如互联网搜索）可能存在配置或兼容性问题，影响了新用户的留存。

## 8. 待处理积压
-   **大功能审核：** [PR #783](https://github.com/nullclaw/nullclaw/pull/783) (Cron subagent) 已于 4 月 7 日提出并持续更新至今日，涉及大量底层逻辑变更（DB schema, worker 模型），目前尚未合并。建议维护者尽快进行代码审查，以免长期偏离主分支造成合并冲突。
-   **Bug 修复响应：** 今日新增的 3 个 Bug 均处于 Open 状态，尚未有维护者回应或分配标签，建议尽快确认是否为已知回归问题。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-14)

**分析师：** AI 智能体与个人助手领域专家
**数据来源：** github.com/nearai/ironclaw
**统计周期：** 2026-04-13 22:00 UTC - 2026-04-14 22:00 UTC (过去 24 小时)

---

## 1. 今日速览

IronClaw 项目今日处于**极高活跃度**状态，显示出核心功能的快速迭代与并行开发趋势。在过去 24 小时内，项目共产生了 45 条 Issue 讨论和 50 条 PR 提交，虽然没有新版本发布，但核心代码库正在进行深度的性能与架构重构。

主要动态集中在**修复 Web UI 的稳定性问题**（浏览器崩溃与消息丢失）以及**引入 Agent 执行引擎的并发机制**。值得注意的是，社区贡献者 `joe-rlo` 进行了大规模的 Bug Bash 测试，集中暴露了包括 Google OAuth 失效、界面卡顿、Agent 逻辑循环等在内的 15+ 个问题，项目组迅速响应并提交了修复 PR。整体来看，项目正致力于解决生产环境中的稳定性和用户体验痛点，同时为未来的高密度部署做准备。

---

## 2. 版本发布

*   **当前状态：** 今日无新版本发布。
*   **备注：** 虽然暂无 Release，但从 PR 活跃度来看，项目正在通过 CI/CD 频繁地向 Staging 环境合并代码，预计下一个版本将包含大量 Web UI 修复和 Agent 性能提升。

---

## 3. 项目进展

今日虽然合并数较少（主要因为大量新 PR 刚提交），但核心维护者提交了多项关键功能与修复，标志着项目架构的重大升级：

*   **Agent 引擎并发化 (PR #2429, #2423)**
    *   **内容：** 引入了 `handle_message` 的并行处理机制，允许不同线程的消息并发执行；同时为只读工具引入了 `is_concurrent_safe` 机制，实现批量并行调用。
    *   **意义：** 这是一个架构级的性能提升，将显著提高 Agent 处理复杂任务和并行请求的吞吐量，为高并发场景打下基础。
    *   **链接：** [PR #2429](https://github.com/nearai/ironclaw/pull/2429) | [PR #2423](https://github.com/nearai/ironclaw/pull/2423)

*   **Web UI 关键稳定性修复 (PR #2433, #2434)**
    *   **内容：** 修复了导致浏览器崩溃的资源泄漏问题（定时器、DOM 增长），以及用户消息在切换线程时消失的持久化时序问题。
    *   **意义：** 直接响应用户报告的“黑屏崩溃”和“消息消失”严重 Bug，极大提升了 Web 客户端的交互可靠性。
    *   **链接：** [PR #2433](https://github.com/nearai/ironclaw/pull/2433) | [PR #2434](https://github.com/nearai/ironclaw/pull/2434)

*   **用户体验优化**
    *   **MCP 工具名称标准化 (PR #2227):** 修复了 MCP 工具名称中连字符与下划线不一致导致调用失败的问题，统一了 LLM 提供商的命名规范 ([链接](https://github.com/nearai/ironclaw/pull/2227))。
    *   **视觉与布局 (PR #2432):** 消除了审批流中的重复 UI 元素（卡片和文本双重提示），简化了用户交互流程 ([链接](https://github.com/nearai/ironclaw/pull/2432))。

---

## 4. 社区热点

今日讨论热度最高的议题集中在第三方集成 Bug 和易用性反馈上：

*   **#2229 - Google Sheets OAuth 阻塞**
    *   **热度：** 5 条评论，Issue 标记为 `[bug_bash]`。
    *   **核心：** Google Sheets 集成出现 `Error 400 invalid_request`，导致授权失败。这直接影响了 Agent 处理办公文档的能力。
    *   **链接：** [Issue #2229](https://github.com/nearai/ironclaw/issues/2229)

*   **#2230 - Twitter/X 连接需要手动提取 Cookie**
    *   **热度：** 2 条评论。
    *   **核心：** 社区反馈 Twitter/X 的 MCP 连接过于繁琐，需手动抓取 Cookie。用户希望能像其他服务一样支持标准的 OAuth 流程。
    *   **链接：** [Issue #2230](https://github.com/nearai/ironclaw/issues/2230)

*   **#1852 - 降低使用门槛的呼声**
    *   **热度：** 4 条评论。
    *   **核心：** 用户 LeiYanhua 指出虽然 IronClaw 功能强大且安全，但对于非技术人员配置过于困难。该 Issue 得到了社区其他成员的支持，反映出项目在“易用性”与“功能性”之间的平衡需求。
    *   **链接：** [Issue #1852](https://github.com/nearai/ironclaw/issues/1852)

---

## 5. Bug 与稳定性

经过社区密集测试（Bug Bash），今日暴露了多个严重 Bug，部分已有对应 Fix PR：

*   **[高危] Web UI 崩溃与无响应 (Issue #2406)**
    *   **现象：** 长时间使用后出现 "Pages Unresponsive" 对话框，甚至黑屏。
    *   **状态：** **已修复**。
    *   **Fix PR:** [PR #2433](https://github.com/nearai/ironclaw/pull/2433) (已提交，修复内存泄漏和 DOM 增长)。

*   **[高危] 用户消息消失 (Issue #2409)**
    *   **现象：** 在聊天中输入消息后，切换标签页或线程时消息内容丢失。
    *   **状态：** **已修复**。
    *   **Fix PR:** [PR #2434](https://github.com/nearai/ironclaw/pull/2434) (修改为在发送时立即持久化)。

*   **[中危] Google OAuth 参数错误 (Issue #2391)**
    *   **现象：** `access_type` 参数被错误拼写为 `offlin` (应为 offline)，导致 Google Calendar 授权失败。
    *   **状态：** 待修复。

*   **[中危] Agent 陷入无限重试循环 (Issue #2240)**
    *   **现象：** 工具调用失败时，Agent 会重试相同的失败操作多达 50 次，缺乏去重机制。
    *   **状态：** 待修复。

*   **[低危] OpenAI 兼容提供商视觉错误 (Issue #2378)**
    *   **现象：** 发送图片时缺少 `detail` 字段导致请求失败。
    *   **状态：** Issue 已关闭。

---

## 6. 功能请求与路线图信号

今日出现了一些指向未来的重要功能请求，部分已有对应的实现 PR：

*   **内置浏览器工具 (Issue #2360)**
    *   **请求：** 添加基于 `chromiumoxide` 的内置浏览器工具，使 Agent 能与 JS 渲染的网页交互（填表、点击）。
    *   **分析：** 这是向“全能 Agent”演进的关键一步，目前处于 Feature Request 阶段。
    *   **链接：** [Issue #2360](https://github.com/nearai/ironclaw/issues/2360)

*   **高级 Agent 特性 (Issue #84)**
    *   **请求：** 重启关于多智能体路由、流式传输和全局会话的讨论。
    *   **分析：** 这是一个长期规划 Issue，今日再次获得关注，可能预示着下一阶段的开发重点。

*   **Slim Mode 运行时 (PR #2418)**
    *   **进展：** 社区成员提出了 "Slim mode runtime"，旨在减少资源占用以支持高密度部署。
    *   **信号：** 表明社区关注 IronClaw 在边缘设备或资源受限环境下的部署能力。

---

## 7. 用户反馈摘要

从 Issues 的评论中提炼出真实的用户痛点与场景：

*   **配置困难:** 用户反馈虽然文档详细，但对于非技术人员（如 Issue #1852 的作者），配置 IronClaw 仍然是一个巨大的挑战，“必须找到配置文件在哪里”阻碍了普及。
*   **集成体验割裂:** 用户在使用 Google Suite 和 Twitter/X 等扩展时，频繁遇到 OAuth 阻断或需要手动提取凭证的情况，体验不如官方应用流畅。
*   **不稳定性:** 用户在 Bug Bash 报告中多次提到“黑屏”、“崩溃”、“消息消失”，表明当前版本在长时间运行或高强度交互下的稳定性不足以支撑生产使用。
*   **Agent 行为困惑:** 用户报告 Agent 有时会错误地调用 API（如调用 convertkit 而非解析发票），或者在任务调度时误解意图（创建 cron job 而非立即执行），显示出 Agent 推理层仍有优化空间。

---

## 8. 待处理积压

提醒维护者关注以下长期未解决的重要议题：

*   **Raspberry Pi (ARM) 支持 (Issue #1339):** 用户询问何时支持 `armv7` 架构，至今尚未得到明确回应。这对于边缘计算用户是一个痛点。
*   **UI 数据丢失风险 (Issue #1846):** 有用户报告通过 Web UI 更新实例导致数据丢失（从 v0.24 降级到 v0.21，丢失了连接和配置）。这表明升级流程存在严重隐患，需官方确认。
*   **Railway 部署配置 (Issue #1680):** 官方 One-Click 模板存在环境变量 (`LLM_*`) 不可见的问题，导致模型无法切换。

---

**总结：** IronClaw 项目今日呈现出“快速迭代与问题爆发并存”的典型特征。核心团队正积极推进并发化和稳定性修复，但大量的用户反馈（特别是 OAuth、UI 崩溃和配置难度）表明，当前版本在迈向“生产就绪”之前，仍需专注于打磨基础体验和保障核心流程的稳定性。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 (2026-04-14)

## 1. 今日速览
LobsterAI 项目今日（2026-04-14）展现出极高的活跃度。过去 24 小时内共处理了 **22 条 Pull Requests**，其中 15 条已成功合并，显示出维护团队在代码审查与合并上的高效率。项目刚刚发布了 **LobsterAI 2026.04.13** 版本，重点进行了构建性能优化、Provider 统一重构以及会话策略的回填修复。目前代码库中有 7 条待合并 PR，主要集中在安全性增强（日志脱敏）、用户体验优化以及依赖库升级方面，社区参与度保持稳定。

## 2. 版本发布
**[LobsterAI 2026.04.13](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.04.13)** 已正式发布。
本版本主要包含以下更新：
*   **构建与安装优化**：异步删除旧目录的方式大幅提升了 NSIS 覆盖安装的速度（PR #1633）。
*   **Provider 重构**：统一了 Provider 配置元数据，增强了 LobsterAI 与 OpenClaw 之间的配置一致性，并修复了 MiniMax 相关的同步问题（PR #1646）。
*   **策略修复**：修复了定时任务保存后的状态残留问题（PR #1645），并回填了 OpenClaw 的会话保持策略以统一默认值为 30 天（PR #1638）。
*   **依赖与安全**：修复了飞书 Group Policy 默认值，并处理了启动时的 MCP Bridge 认证不匹配问题（PR #1647）。

## 3. 项目进展
今日合并的 PR 显著提升了系统的稳定性和安全性：
*   **安全性增强**：合并了修复 MCP Bridge 401 认证竞态问题的 PR（PR #1647），解决了启动时 Secret 未及时生成导致的认证失败风险。
*   **核心逻辑修复**：解决了非主 Agent（如自定义 Agent）因工作区路径不匹配导致无法加载 Persona 文件的严重 Bug（PR #1651/1657）；修复了 OpenClaw 配置热重载时网关意外重启的问题（PR #1650）。
*   **错误处理优化**：改进了 OpenClaw 升级后的错误传递机制，确保在模型不可达（如 402 错误）时，前端能正确显示错误状态而非卡在“执行中”（PR #1654）。
*   **功能完善**：支持了创建 Agent 时的多机器人配置，并将飞书高级设置中的群聊默认设为开放（PR #1648）。

## 4. 社区热点
*   **[PR #1661: 日志脱敏 (OPEN)](https://github.com/netease-youdao/LobsterAI/pull/1661)**
    *   **热度原因**：涉及用户数据隐私安全。
    *   **详情**：该 PR 提出在导出日志时对 API Key、Bearer Token、OAuth Token 及请求/响应体进行脱敏处理，防止敏感信息泄露。这是对企业级用户安全诉求的积极响应。
*   **[Issue #1653: GroupPolicy 覆盖问题 (OPEN)](https://github.com/netease-youdao/LobsterAI/issues/1653)**
    *   **热度原因**：用户反馈配置被意外重置，影响使用体验。
    *   **详情**：用户反映 `groupPolicy` 每隔一段时间就被自动覆盖为 `allowlist`。目前该 Issue 刚提出，尚未有明确的修复 PR 关联，需关注维护者对配置重写逻辑的调查。

## 5. Bug 与稳定性
*   **[严重] PR #1658 (CLOSED)**：修复了 OpenClaw 内部回环工具绑定客户端（如 `cron`）因安全升级导致权限不足的问题。此前修复 CVSS 9.2 漏洞的补丁过于严格，意外阻塞了需要 `operator.admin` scope 的内部任务。
*   **[中等] Issue #1653 (OPEN)**：配置策略被自动覆盖，属于数据持久化或同步逻辑层面的 Bug。
*   **[中等] PR #1652 (CLOSED)**：针对偶发的“任务超时”提前触发问题增加了诊断日志 `[AbortDiag]`，虽然未彻底修复，但为后续排查提供了关键埋点。

## 6. 功能请求与路线图信号
*   **个性化 Agent 体验**：[PR #1660](https://github.com/netease-youdao/LobsterAI/pull/1661) 提出在切换非 main agent 时，首页欢迎区域应动态显示该 Agent 的名称和描述，而非固定文案。这暗示项目正在致力于增强多 Agent 场景下的用户交互体验。
*   **长期需求 - 分页加载**：[PR #924](https://github.com/netease-youdao/LobsterAI/pull/924) (OPEN) 正在实现会话列表与消息历史的分页加载，以解决大量数据下的内存占用和渲染卡顿问题。这是一个处于开发中但尚未合并的重要性能优化项目。

## 7. 用户反馈摘要
*   **痛点**：从 Issue #1653 可以看出，用户对于软件自动修改其配置（特别是从白名单模式被覆盖）感到困扰，这直接影响了 Agent 的行为控制。
*   **场景**：用户频繁使用自定义 Agent（非 main agent），这从 PR #1660 的优化以及 PR #1651 修复的路径问题中可以看出，多 Agent 协作是核心使用场景。

## 8. 待处理积压
*   **依赖更新**：[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Electron 升级) 和 [PR #1278](https://github.com/netease-youdao/LobsterAI/pull/1278) (Claude SDK 升级) 虽已开放一段时间但仍处于待合并状态，建议关注依赖库更新带来的潜在兼容性风险。
*   **代码质量**：[PR #1498](https://github.com/netease-youdao/LobsterAI/pull/1498) (OPEN) 旨在修复全部 ESLint 错误（共 165 个），虽然不影响运行，但长期悬而未决可能会增加维护负担，建议尽快合入以保持代码整洁。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-14)

**报告生成日期**：2026-04-14
**数据来源**：GitHub.com/moltis-org/moltis
**分析周期**：2026-04-13 08:00 至 2026-04-14 08:00 (UTC+8)

---

## 1. 今日速览
Moltis 项目在 2026-04-13 迎来了极高的开发活跃度，标志着 `20260413.x` 系列版本的正式成熟。项目在单日内发布了 **2 个补丁版本**（`20260413.03` 和 `.01`），并清空了 **18 个待合并的 PR**，全部已关闭或合并，显示出维护者对代码库的强力掌控和快速迭代能力。所有的 **7 条活跃 Issues** 均被成功关闭，其中包括多个关键 Bug 的修复。今日的重心在于**架构重构（解耦 Gateway 巨型单体）**与**核心功能的补齐**（如会话归档、XMPP 支持），项目整体健康度极高，代码清理工作正有序进行。

---

## 2. 版本发布
Moltis 在过去 24 小时内进行了两次热修复发布，均针对当日引入的特定问题：

*   **[v20260413.03](https://github.com/moltis-org/moltis/releases/tag/20260413.03)**
    *   **主要更新**：这是今日的第三次迭代。该版本主要包含针对 OpenAI 兼容工具调用的紧急修复，以及针对 MCP（Model Context Protocol）工具架构的清洗，确保了与 Attio 等 MCP 工具的兼容性。
    *   **破坏性变更**：无。

*   **[v20260413.01](https://github.com/moltis-org/moltis/releases/tag/20260413.01)**
    *   **主要更新**：作为今日的基准版本，引入了 XMPP 频道支持、会话归档功能以及 Whisper 本地化配置界面。同时也包含了大型的内部架构重构代码。
    *   **注意**：由于包含大量底层重构，该版本后续紧跟了两个补丁修复。

---

## 3. 项目进展
今日合并的 18 个 PR 展示了项目在“功能完善”与“代码治理”两方面的双重推进：

*   **架构解耦**：
    *   `moltis-gateway` 的“上帝对象”重构继续推进。通过一系列 PR（#690, #691, #688, #685, #683, #703），团队成功将 MCP 服务逻辑、节点执行类型和广播状态提取至独立的 crate 中。这极大地提升了代码的可测试性和模块化程度。

*   **核心功能交付**：
    *   **会话归档 ([#702](https://github.com/moltis-org/moltis/pull/702))**：正式支持在 Web UI 中归档和解归档会话，解决了长期以来的会话管理痛点。
    *   **XMPP 支持 ([#48](https://github.com/moltis-org/moltis/pull/48))**：经过漫长的开发，全功能 XMPP 频道支持终于落地，支持群聊、反应和状态通知。
    *   **本地语音配置 ([#700](https://github.com/moltis-org/moltis/pull/700), [#199](https://github.com/moltis-org/moltis/pull/199))**：为 OpenAI 兼容的 TTS/STT（如 Whisper）添加了 Base URL 配置 UI，并新增了 Voicebox 本地语音克隆提供商。

*   **代码质量提升**：
    *   PR [#695](https://github.com/moltis-org/moltis/pull/695) 完成了对剩余超大型 Rust 模块的拆分，移除了文件大小检查的白名单，标志着技术债的显著减少。

---

## 4. 社区热点
今日社区反馈集中在 **MCP 工具兼容性** 和 **会话管理** 上：

*   **[Feature: Add ability to archive sessions/conversations #701](https://github.com/moltis-org/moltis/issues/701)**
    *   **热度**：👍 1
    *   **诉求**：用户希望能将会话从主列表中归档。该需求提出后迅速在 PR #702 中得到实现并关闭，显示了团队对核心用户体验的快速响应。

*   **[Bug: MCP tool schemas... rejected by OpenAI provider #694](https://github.com/moltis-org/moltis/issues/694)**
    *   **热度**：评论 1
    *   **诉求**：用户反馈 Attio 的 MCP 工具无法使用，原因是 OpenAI 提供程序拒绝了包含 `not` 关键字的 schema。这引发了社区对 MCP 生态兼容性的关注。

---

## 5. Bug 与稳定性
今日报告的 4 个 Bug 均已修复，主要集中在 **序列化** 和 **远程部署**：

1.  **[严重] 序列化回归 (Serialization regression) - [#693](https://github.com/moltis-org/moltis/issues/693)**
    *   **问题**：工具参数在序列化时错误处理了 `0`, `false`, `null` 等值，导致工具调用失败。
    *   **状态**：✅ 已修复 (PR #697)。

2.  **[严重] MCP Schema 兼容性 - [#694](https://github.com/moltis-org/moltis/issues/694)**
    *   **问题**：OpenAI 提供程序无法处理包含 draft-2020-12 关键字（如 `not`, `if/then/else`）的 MCP 工具 schema。
    *   **状态**：✅ 已修复 (PR #698)。

3.  **[中等] 远程部署登录失败 - [#646](https://github.com/moltis-org/moltis/issues/646)**
    *   **问题**：用户无法登录到远程部署的实例。
    *   **状态**：✅ 已修复 (具体修复见相关代码提交)。

4.  **[中等] 工具调用兼容性 - [#696](https://github.com/moltis-org/moltis/pull/696)**
    *   **问题**：Cron 提醒和旧版内部 WASM 工具名称导致的回归问题。
    *   **状态**：✅ 已修复。

---

## 6. 功能请求与路线图信号
今日关闭的增强请求（Enhancement）揭示了下一阶段的方向：

*   **代理支持 ([#548](https://github.com/moltis-org/moltis/issues/548))**：请求增加应用或频道级别的代理支持。虽然今日已关闭，可能意味着该功能已并入规划或由特定 PR 解决（需关注后续文档更新）。
*   **Token 缓存显示 ([#692](https://github.com/moltis-org/moltis/issues/692))**：在聊天界面显示缓存的输入 Token 数量。已在 PR #699 中实现，帮助用户监控成本。
*   **本地 Whisper 设置流 ([#570](https://github.com/moltis-org/moltis/issues/570))**：增加本地 OpenAI Whisper 提供程序的设置引导。已在 PR #700 中完成，降低了本地化部署的门槛。

---

## 7. 用户反馈摘要
从评论和 Issue 内容中提炼出的用户声音：

*   **痛点**：**工具调用的脆弱性**。多个 Bug 报告（#693, #694）指向了与 OpenAI API 和 MCP 工具交互时的不稳定性，用户对于第三方工具集成的兼容性非常敏感。
*   **痛点**：**会话管理混乱**。用户迫切需要“归档”功能来清理聊天列表（#701），这表明活跃用户积累的会话数量已经达到了需要手动管理的程度。
*   **好评**：**本地化与隐私**。用户积极推动本地 Whisper 和 Voicebox 的支持（#570, #499），显示出核心用户群对完全脱离云端 API 运行的强烈兴趣。

---

## 8. 待处理积压
*   **无严重积压**。项目目前的流动性极佳，今日所有 Issue 和 PR 均已闭环。建议维护者保持目前的快速迭代节奏，并密切关注 v20260413.x 版本上线后的生产环境稳定性反馈。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 - 2026-04-14

> **摘要**：今日项目处于极高活跃度状态，社区对新旧版本交替（CoPaw 向 QwenPaw 迁移）及相关 UI/UX 变更表现出极大关注。虽然发布了新的 Beta 版本，但随之而来的配置冲突、Bug 及用户体验问题引发了大量讨论。

---

## 1. 今日速览
- **项目活跃度**：🔥 **极高**。过去 24 小时内共产生了 90 个代码与问题更新事件（40 Issues + 50 PRs），远超日常平均水平。
- **关键事件**：项目正式发布 `v1.1.1-beta.1`，标志着项目向 QwenPaw 的演进继续推进，但引发了部分老用户关于命名和升级路径的争议。
- **社区情绪**：🔴 **警惕**。关于升级后配置目录混乱、Agent 技能全选 Bug 以及“QwenPaw/CoPaw”命名问题的讨论热度最高，显示出用户在适应新版本时遇到了摩擦。

---

## 2. 版本发布
- **版本号**：`v1.1.1-beta.1`
- **主要内容**：
    - 更新了项目新闻文档 (`docs(news)`)。
    - 更新了 IP Logo。
    - 版本号升级至 `1.1.1b1`。
- **注意事项**：该版本属于 Beta 测试版，主要针对前端展示和文档进行了微调，建议关注随之而来的环境变量和配置变化。

---

## 3. 项目进展
今日合并/关闭的 PR 和 Issues 主要集中在 Bug 修复和兼容性调整，部分核心进展如下：
- **PR #3335 [CLOSED]**: 新增 RESTful API 文档及代码优化，这对开发者接入生态是一大利好。
- **PR #3337 [CLOSED]**: 修复了钉钉渠道在 AI Card 模式下的媒体交付问题，防止了 base64 溢出，提升了企业级通讯软件的交互稳定性。
- **Issue #3136 [CLOSED]**: 修复了 QQ/微信渠道 `stop()` 方法阻塞异步事件循环导致的高延迟（8-10秒）问题，显著提升了即时通讯渠道的响应性能。
- **PR #2840 [Under Review]**: **安全性修复**。移除了本地主机 API 认证绕过漏洞，防止反向代理或隧道环境下的未授权访问。

---

## 4. 社区热点
以下话题在过去 24 小时内引发了最多的社区互动（评论数 > 3）：

- **🔥 热议 [Issue #2291] [enhancement, help wanted] 🐾 Help Wanted: Open Tasks**
    - **热度**：💬 55 评论
    - **链接**：[#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)
    - **摘要**：官方发布的开放任务列表，包含大量从 P0 到 P2 的待办事项。今日活跃度极高，显示社区正积极认领任务参与贡献。

- **🔥 升级困惑 [Issue #3288] [Question]: CoPaw怎么平滑升级到QwenPaw**
    - **热度**：💬 23 评论
    - **链接**：[#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288)
    - **摘要**：大量用户询问如何从 CoPaw 迁移到 QwenPaw，担心丢失 Agent 配置和记忆。这反映出 v1.1.0 的升级机制可能缺乏清晰的无缝迁移指引。

- **🔥 命名争议 [Issue #3336] [enhancement] qwenpaw-copaw 别折腾了**
    - **热度**：👍 3 点赞，💬 2 评论
    - **链接**：[#3336](https://github.com/agentscope-ai/QwenPaw/issues/3336)
    - **摘要**：一位长期 Windows 用户强烈表达了对项目更名为 QwenPaw 的不满，认为 "CoPaw" 更具品牌辨识度，并担忧频繁的更名和变动反映了项目内部管理混乱。

---

## 5. Bug 与稳定性
今日报告的 Bug 涉及核心 UI 逻辑、内存管理和渠道连接，按严重程度排列：

1.  **🔴 严重 - UI 逻辑错误**
    - **[Issue #2931] & [Issue #3088] (已关闭)**: 新建 Agent 后技能配置会自动变为“全选”，而非保留用户手动选择的特定技能。虽然 Issue 已关闭，但用户反馈表明该问题在特定流程下仍困扰操作。
    - **链接**: [#2931](https://github.com/agentscope-ai/QwenPaw/issues/2931) | [#3088](https://github.com/agentscope-ai/QwenPaw/issues/3088)

2.  **🟠 高危 - 系统中断与崩溃**
    - **[Issue #2377] (OPEN)**: 会话自动中断。用户报告在处理大批量文件（如 1500 个）时，Agent 会在处理少量文件后“罢工”，即使设置了断点续传和分批处理。
    - **[Issue #3331] (OPEN)**: 飞书渠道 WebSocket 在多 Agent 环境下因跨-loop RuntimeError 崩溃。
    - **链接**: [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) | [#3331](https://github.com/agentscope-ai/QwenPaw/issues/3331)

3.  **🟡 中等 - 体验与兼容性**
    - **[Issue #3342] (OPEN)**: 本地大模型（Ollama）管理状态识别不准确，模型删除后 UI 仍显示可用，且无法手动删减配置。
    - **[Issue #3323] (OPEN)**: 局域网部署时找不到 icon 文件。
    - **链接**: [#3342](https://github.com/agentscope-ai/QwenPaw/issues/3342) | [#3323](https://github.com/agentscope-ai/QwenPaw/issues/3323)

---

## 6. 功能请求与路线图信号
结合 Issues 与 PRs，以下功能可能正在开发或即将进入下一版本：

-   **文件回滚**: **[PR #3346]** 正在实现文件操作回滚功能（如恢复误删文件），对应 Issue #2590，已被提上日程。
-   **技能同步优化**: **[Issue #3327]** 请求优化技能池同步 UI，增加状态显示（已同步/未同步），这是一个高优的用户体验改进点。
-   **在线媒体查看**: **[Issue #3329]** 请求 `view_image` 等工具支持在线 URL 而不仅限于本地文件，以减少不必要的下载步骤。
-   **自定义 Agent ID**: **[Issue #3325]** 用户希望创建 Agent 时能自定义 ID 而非随机生成，以便于 HTTP API 调用。这符合 API 使用者的长期痛点。

---

## 7. 用户反馈摘要
-   **痛点 - 升级焦虑**: 用户更新到 v1.1.0 后发现 `qwenpaw` 命令未自动加入 PATH，且 `.qwenpaw` 与 `.copaw` 文件夹并存，造成配置混乱 ([Issue #3309](https://github.com/agentscope-ai/QwenPaw/issues/3309))。
-   **痛点 - 风险感知**: 有用户建议在 Agent 执行高危操作（如修改配置文件）时，增加醒目的红色警告提示，明确告知风险等级 ([Issue #3349](https://github.com/agentscope-ai/QwenPaw/issues/3349))。
-   **痛点 - 长时任务不可靠**: 批量任务容易中断，且缺乏有效的断点续传保障 ([Issue #2377](https://github.com/agentscope-ai/QwenPaw/issues/2377))。

---

## 8. 待处理积压
-   **[Issue #2416] (OPEN)**: 允许并发会话及运行中发送后续消息。这是一个长期存在的架构限制问题，目前尚未有明确的合并 PR。
-   **[Issue #1403] (OPEN)**: 飞书消息处理缺乏去重机制，导致一条消息被多次处理。该问题从 3 月份遗留至今。
-   **[PR #2506] (OPEN)**: 增强文档和建立测试基础设施。该 PR 已开放数周，对 Channels 的系统性测试至关重要，仍在审核中。

---
**数据来源**: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 生成时间: 2026-04-14

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 2026-04-14

**分析师：** AI 智能体与个人助手领域观察员
**数据来源：** GitHub.com/gaoyangz77/easyclaw (RivonClaw)
**报告日期：** 2026-04-14

---

### 1. 今日速览
EasyClaw (RivonClaw) 项目今日处于**版本迭代后的平稳期**。虽然代码提交活跃度有所放缓（无 Issue 变动），但项目成功发布了**v1.7.10** 版本，标志着产品稳定性的持续维护。社区贡献方面，一项重要的国际化 (i18n) 功能 PR 正处于待审查状态，预示着项目即将迎来对多语言环境的全面支持。整体来看，项目健康度良好，正从单纯的代码开发向功能完善与生态扩展过渡。

### 2. 版本发布
**[v1.7.10] RivonClaw v1.7.10** (2026-04-14)
*   **更新摘要：** 发布了最新的应用安装包。
*   **重要提示（macOS 用户）：** 本版本依然未包含 Apple 开发者签名证书。发布说明特别强调了 macOS Gatekeeper 可能会报错提示“应用已损坏”。
    *   **应对措施：** 这属于安全机制拦截，非文件损坏。用户需通过终端命令移除隔离属性 (`xattr -d com.apple.quarantine`) 方可运行。
    *   **影响评估：** 未经签名的发布包可能会阻碍新手用户的上手体验，建议未来版本优先解决 CI/CD 流程中的自动化签名问题。

### 3. 项目进展
今日没有已合并的 PR，主要进展体现在待审查的代码中：
*   **[OPEN] PR #21: feat(i18n): add 5 new languages** ([链接](https://github.com/gaoyangz77/rivonclaw/pull/21))
    *   **内容：** 贡献者 `chinayin` 提交了巨大的翻译工作量，新增了繁体中文、日语、韩语、越南语和印地语共 5 种语言支持。
    *   **进度：** 翻译文件包含完整的 1333 个键值，与英文基准版 `en.ts` 保持一致。
    *   **意义：** 此举将极大地拓展 RivonClaw 在非英语市场的可访问性，是迈向国际化的重要一步。目前代码已就绪，等待维护者合并。

### 4. 社区热点
*   **今日热点：PR #21（国际化功能）**
    *   **详情：** 尽管没有新的讨论帖，但 PR #21 是目前社区关注的焦点。该 PR 涉及 1333 个翻译键的校对与合并，工作量巨大。
    *   **分析：** 社区（或贡献者）表现出对本地化体验的强烈需求。若该功能顺利合并，预计将显著提升项目在东亚及东南亚地区的用户活跃度。

### 5. Bug 与稳定性
*   **已知稳定性问题：macOS 安装包拦截**
    *   **状态：** 已知，尚未通过代码修复，而是通过文档引导用户手动解决。
    *   **风险等级：** 中等（影响用户体验，但不影响核心功能）。
    *   **建议：** 后续需跟进是否有引入自动签名的 PR。

### 6. 功能请求与路线图信号
*   **国际化 (i18n) 完善：**
    *   PR #21 表明“多语言支持”是当前路线图上的高优先级事项。
    *   **下一版本预测：** v1.7.11 或 v1.8.0 很可能会包含上述 5 种新语言的正式支持。

### 7. 用户反馈摘要
由于今日无新增 Issues，主要反馈源自 Release v1.7.10 的文档说明：
*   **痛点：** macOS 用户在尝试打开应用时频繁遇到“已损坏”的系统拦截警告，造成困惑。
*   **应对：** 项目组在 Release Notes 中提供了中英双语的详细终端修复指南，说明维护者已意识到该问题并致力于提供清晰的用户指引。

### 8. 待处理积压
*   **关注项：PR #21**
    *   **提交时间：** 2026-03-18
    *   **状态：** 待合并（Open）
    *   **提醒：** 该 PR 包含大量翻译文件且已更新近一个月，建议维护者尽快进行 Code Review 并合并，以避免后续合并冲突，同时给予贡献者及时反馈。

---
*日报生成基于 GitHub 公开活动数据，旨在提供开源项目进展的客观快照。*

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*