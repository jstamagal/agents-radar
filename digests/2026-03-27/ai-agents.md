# OpenClaw 生态日报 2026-03-27

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-27 00:12 UTC

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

# OpenClaw 项目动态日报 (2026-03-27)

## 1. 今日速览
今日 OpenClaw 项目维持着极高的开发活跃度，社区与代码仓库均处于“高负荷”运转状态。过去 24 小时内共有 **500 个 Issue** 和 **500 个 Pull Request** 发生更新，项目吞吐量巨大。今日核心工作集中在**多平台 Adaptive Cards 全场景渲染**功能的补齐，以及对**频繁回归的设备列表 CLI** 和 **Telegram 轮询机制** 的稳定性修复。虽然未发布新版本，但大量针对 `2026.3.24` 等近期版本的破坏性变更报告显示，主分支的稳定性正在经受严峻考验，建议用户在生产环境升级前保持谨慎。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日合并的 PR 数量庞大（约 129 条），重点进展如下：
*   **全渠道富媒体交互能力提升**: [PR #41565](https://github.com/openclaw/openclaw/pull/41565) 已进入后期阶段，该 PR 为 Discord、MS Teams、Slack、Telegram 等所有频道添加了共享的自适应卡片渲染层。结合 [PR #42350](https://github.com/openclaw/openclaw/pull/42350) (iOS/macOS) 和 [PR #42307](https://github.com/openclaw/openclaw/pull/42307) (Web UI)，OpenClaw 正在完成从后端到前端的全栈富文本/卡片交互闭环。
*   **内存与工具调用优化**: [PR #48000](https://github.com/openclaw/openclaw/pull/48000) 修复了内存搜索结果总是显示文件开头而非相关片段的体验问题，提升了 RAG 准确度。
*   **语音通话体验增强**: [PR #19073](https://github.com/openclaw/openclaw/pull/19073) 引入了流式 TTS、打断和静音填充功能，使语音代理的交互更接近真人。

## 4. 社区热点
*   **[Issue #3460](https://github.com/openclaw/openclaw/issues/3460) - 国际化 (i18n) 支持** (评论 114)
    尽管社区呼声极高，但维护者表示目前没有带宽支持多语言。这反映出 OpenClaw 快速迭代的开发重心与全球本地化需求之间的矛盾。
*   **[Issue #75](https://github.com/openclaw/openclaw/issues/75) - Linux/Windows 桌面端应用** (👍 66)
    用户强烈要求填补 macOS/iOS/Android 之外的生态空缺，希望能有与 macOS 版功能对等的原生应用。
*   **[PR #54755](https://github.com/openclaw/openclaw/pull/54755) - v2026.3.24 严重破坏性变更** (评论 6)
    社区反馈新版本导致 Express 5 路由回归和插件无限循环，导致长达 20 分钟的故障。这是今日最受关注的负面反馈，凸显了 CI/CD 流程中对破坏性变更检测的不足。

## 5. Bug 与稳定性 (严重级排列)
*   **[高危 - 内存泄漏]** [Issue #45064](https://github.com/openclaw/openclaw/issues/45064)
    `2026.3.12` 版本存在严重的内存泄漏，导致基础 CLI 命令（如 status, doctor）触发 OOM 崩溃，严重阻碍了开发工作流。
*   **[高危 - OAuth 机制失效]** [Issue #53317](https://github.com/openclaw/openclaw/issues/53317)
    `v2026.3.22` 启动时会用过期的缓存状态覆盖新的 OAuth Token，导致所有 Codex 请求失败。这是典型的“缓存未正确失效”问题。
*   **[中危 - CLI 功能全面回归]** [Issue #44760](https://github.com/openclaw/openclaw/issues/44760) & [Issue #47103](https://github.com/openclaw/openclaw/issues/47103)
    `openclaw devices list` 和 `approve` 命令在近期版本中无法运行，或导致 Gateway 重启，管理功能严重受损。*Fix PR 已见 [PR #51610](https://github.com/openclaw/openclaw/pull/51610) (部分修复)*。
*   **[中危 - 轮询假死]** [Issue #43233](https://github.com/openclaw/openclaw/issues/43233)
    Telegram 轮询在 `2026.3.8` 后频繁进入 stall/restart 循环，消息接收不可靠。*Fix PR 参考 [PR #51931](https://github.com/openclaw/openclaw/pull/51931)*。
*   **[中危 - 微信插件不兼容]** [Issue #52885](https://github.com/openclaw/openclaw/issues/52885)
    官方微信插件与 `2026.3.22+` 不兼容，无法加载 `openclaw/plugin-sdk`。

## 6. 功能请求与路线图信号
*   **MCP 协议原生支持** ([Issue #29053](https://github.com/openclaw/openclaw/issues/29053)): 用户希望 OpenClaw 原生支持 Model Context Protocol (MCP)，以连接日益增长的 MCP 生态工具。
*   **实时语音通话** ([Issue #7200](https://github.com/openclaw/openclaw/issues/7200)): 社区渴望类似打电话的双向流式语音交互（Twilio/WebRTC）。目前 [PR #19073](https://github.com/openclaw/openclaw/pull/19073) 正在推进相关功能，可能很快纳入 Roadmap。
*   **成本优化网关** ([Issue #9244](https://github.com/openclaw/openclaw/issues/9244)): 用户提出了一个智能 LLM 网关构想，包含分层缓存和差异回复，以降低 Token 消耗。

## 7. 用户反馈摘要
*   **痛点 - Token 浪费**: [Issue #9157](https://github.com/openclaw/openclaw/issues/9157) 指出，每次消息都向系统提示词注入工作区文件，导致 93.5% 的 Token 预算被浪费。用户对高昂的 API 成本感到不满。
*   **痛点 - 工具调用“幻觉”**: [Issue #45046](https://github.com/openclaw/openclaw/issues/45046) 和 [Issue #40069](https://github.com/openclaw/openclaw/issues/40069) 显示，Agent 经常假装调用工具（输出工具 JSON 文本而非真实调用），或者工具调用静默失败，Agent 表现出“自欺欺人”的行为，严重影响自动化可靠性。
*   **痛点 - 插件安装受阻**: [Issue #53870](https://github.com/openclaw/openclaw/issues/53870) 反映安装插件时被 VirusTotal 扫描卡住，且无法跳过，影响开发效率。

## 8. 待处理积压
*   **[Stale] Discord 代理问题** ([Issue #27409](https://github.com/openclaw/openclaw/issues/27409)): 即使配置了代理，Discord REST API 请求依然失败，该问题已存在一个月。
*   **[Stale] 视觉识别系统失效** ([Issue #23452](https://github.com/openclaw/openclaw/issues/23452)): 多渠道（Discord/Telegram）的图片无法正确发送给视觉模型，导致模型“幻觉”称未收到图片。这是核心功能的长期缺陷。

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报（横向对比分析）
**日期：** 2026-03-27
**分析对象：** Top 10 开源项目动态

---

## 1. 生态全景
当前个人 AI 助手开源生态正处于**从“功能爆发”向“体验深耕”转型的关键期**。头部项目（OpenClaw, NanoBot, PicoClaw）正陷入快速迭代带来的**稳定性阵痛期**，代码提交量巨大但伴随高频破坏性变更。与此同时，**多模态交互**（流式语音、视觉识别）和**记忆系统**（RAG、长期记忆）已成为所有项目的竞争高地；**安全性**（供应链投毒、SSRF 防护、沙箱）则从边缘需求转变为项目存亡的关键指标。整体呈现出**大而全的平台型项目**与**小而美的垂直场景项目**并存的繁荣景象。

---

## 2. 各项目活跃度对比

| 项目 | 活跃度评级 | Issues/PRs (24h) | 版本动态 | 健康度评估 |
| :--- | :---: | :---: | :--- | :--- |
| **OpenClaw** | ⚡ **极高** | 1000 (500/500) | 无 (高负荷) | ⚠️ **过热** | 吞吐量巨大，但主分支稳定性面临严峻考验，生产环境需谨慎。 |
| **NanoBot** | 🔥 **极高** | 115 (12/103) | 无 | 🔄 **重构中** | 应对供应链攻击正在移除 `litellm`，处于剧烈架构变动期。 |
| **PicoClaw** | 🔥 **极高** | 105 (30/75) | v0.2.4-nightly | ⚠️ **回归** | v0.2.4 引发多渠道配置失效，存在系统性回归风险。 |
| **LobsterAI** | 🔥 **极高** | 70 (20/50) | **v2026.3.26** | ✅ **良好** | 发布了含多智能体支持的重要版本，且修复了关键性能 Bug。 |
| **IronClaw** | 🔥 **极高** | 56 (16/40) | v0.23.0 (待发) | ⚠️ **P0** | 即将发布含破坏性变更的版本，检测到高危 UTF-8 Panic 漏洞。 |
| **CoPaw** | 🔥 **极高** | 94 (50/44) | 1.0.0b1 (Beta) | ⚠️ **高风险** | v1.0 前夜的阵痛期，出现会话误删和数据丢失等 P0 级 Bug。 |
| **ZeptoClaw** | 🔥 **极高** | 37 | **v0.9.0/v0.9.1** | ✅ **优秀** | 发布节奏极快，新功能与 Hotfix 齐头并进，响应迅速。 |
| **Zeroclaw** | 🟢 **高** | 94 (44/50) | **v0.6.3** | ⚠️ **兼容性** | 刚发版即出现 Android 支持移除等严重兼容性回退。 |
| **NanoClaw** | 🟢 **高** | 38 | 无 | 🛡️ **加固** | 重点转向安全漏洞修复（命令注入）与路由优化。 |
| **TinyClaw** | 🟢 **高** | 6 | **v0.0.20** | ✅ **稳定** | 专注于 Docker 体验与代码重构，无遗留严重 Bug。 |
| **NullClaw** | 🟢 **高** | 9 | 无 | 🔄 **维护** | 活跃度适中，主要跟进微信生态与交互优化。 |
| **Moltis** | 🔵 **中** | 3 | 无 | 😴 **静默** | 仅进行日常依赖维护，暂无重大功能突破。 |
| **EasyClaw** | 🔵 **低** | 1 | 无 | 🐢 **战略** | 代码静默，但社区发起了关于生态增长的战略讨论。 |

---

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系**与**流量中心**，OpenClaw 展现出鲜明的“双面性”：

*   **绝对优势**：**生态吞吐量第一**（1000+ 更新/日），拥有最广泛的平台支持（iOS/Android/Web/桌面）和最完整的全栈富媒体交互能力（Adaptive Cards）。其作为“事实标准”的地位吸引了最多的插件适配和用户基数。
*   **核心痛点**：**稳定性负债严重**。相比于 ZeptoClaw 等项目的“小步快跑、快速修复”，OpenClaw 近期的破坏性变更（Express 5 路由、内存泄漏、CLI 退化为 OOM）显示出其在维护巨大代码库时的失控风险。
*   **技术路线差异**：OpenClaw 依然在构建**通用型 AI OS**，试图覆盖所有终端；而 NanoBot 正在转向**专业 Agent 框架**（移除中间件依赖），Zeroclaw 则专注于**极致安全沙箱**。

---

## 4. 共同关注的技术方向

通过对 10 个项目的横向扫描，以下 4 个技术方向呈现出“全栈共振”的趋势：

1.  **多模态与流式交互**
    *   **OpenClaw**: 引入流式 TTS 和静音填充，拟人化语音交互。
    *   **LobsterAI**: 修复流式输出 O(n²) 复杂度导致的卡顿。
    *   **PicoClaw**: 增加 Web 端流式响应。
    *   **ZeptoClaw**: 为 Telegram 增加 Reaction (👀/✅) 视觉反馈。

2.  **记忆系统 2.0 (RAG 向量/知识图谱)**
    *   **PicoClaw**: 社区热推 Seahorse（生物启发记忆）。
    *   **NanoClaw**: 提议集成 Graphiti 记忆框架。
    *   **CoPaw**: 引入 AnalyticDB 长期持久化。
    *   **IronClaw**: 增强 Agent 循环中的记忆检索能力。

3.  **安全与供应链防御**
    *   **NanoBot**: 紧急移除 `litellm` 以应对恶意代码投毒。
    *   **Zeroclaw**: 集成 PromptGuard 防护提示注入，讨论 TOTP 二次验证。
    *   **NanoClaw**: 修复 Shell 命令注入漏洞。
    *   **ZeptoClaw**: 社区呼吁 SSRF 防护与插件 SHA256 校验。

4.  **企业级/多用户架构**
    *   **IronClaw**: 大刀阔斧重构为 Database-backed User Management（多租户）。
    *   **CoPaw**: 新增 AnalyticDB 支持，并讨论多用户权限管理。
    *   **OpenClaw**: 社区强烈呼吁 Linux/Windows 桌面端以填补企业生态空缺。

---

## 5. 差异化定位分析

| 维度 | 项目类型 | 代表项目 | 关键差异 |
| :--- | :--- | :--- | :--- |
| **定位** | **全能型平台** | **OpenClaw** | 追求全平台覆盖，Web+iOS+Android+Desktop，生态最全，但性能瓶颈明显。 |
| | **安全/合规优先** | **Zeroclaw** | 独有的 Seatbelt 沙箱机制，适合对数据安全要求高的内网部署。 |
| | **轻量化/边缘** | **TinyClaw / NanoClaw** | 强调容器化适配 和轻量级部署，适合资源受限环境。 |
| **技术栈** | **TypeScript/Node.js** | OpenClaw, CoPaw, LobsterAI | 迭代速度快，UI 生态丰富，但受限于 Node.js 性能与单线程瓶颈。 |
| | **Rust/Go 系** | IronClaw, Moltis, Zeroclaw | 性能能高，内存安全好，适合做底层网关和高并发 Agent。 |
| | **Python 系** | NanoBot | AI 生态集成最深，适合算法研究，但工程化部署较弱。 |
| **目标用户** | **极客/开发者** | ZeptoClaw, PicoClaw | 高度可定制，Terminal UI 支持好，紧跟 LLM 最新特性。 |
| | **企业/团队** | LobsterAI, IronClaw | 强调多租户、权限控制、审计日志和稳定性。 |

---

## 6. 社区热度与成熟度

*   **第一梯队（热度与风险并存）：OpenClaw, CoPaw, NanoBot**
    *   特征：Issue/PR 讨论极其激烈，用户反馈最及时，但也最容易出现“吵翻天”的 Bug 报告。这三个项目正在经历从“能跑”到“好用”的最艰难爬坡期。
*   **第二梯队（快速迭代）：ZeptoClaw, PicoClaw, IronClaw**
    *   特征：版本发布频繁，对用户需求响应极快（如 ZeptoClaw 的 Emoji 反馈，PicoClaw 的配置修复）。属于目前最具活力的挑战者。
*   **第三梯队（垂直深耕）：Zeroclaw, LobsterAI**
    *   特征：在特定领域（安全、企业协作）构建壁垒，更新节奏稳健，用户画像相对清晰。

---

## 7. 值得关注的趋势信号

1.  **供应链安全成为“硬门槛”**：
    NanoBot 的 `litellm` 移除事件和 ZeptoClaw 社区对插件校验的呼吁表明，单纯的“功能丰富”已不足以吸引用户，**依赖透明度**和**安全审计**正成为选择 Agent 框架的首要考量。

2.  **“本地优先”与“隐私路由”**：
    ZeptoClaw 提出的“隐私敏感任务自动路由至本地模型”是一个极具前瞻性的信号。用户不再满足于简单的 API Key 代理，而是开始要求**智能化的隐私分级处理**。

3.  **从“Chat”到“Do”的体验鸿沟**：
    OpenClaw 和 NanoBot 社区大量关于“工具调用幻觉/假装执行”的投诉表明，**Function Calling 的可靠性**已成为制约 Agent 从“聊天玩具”走向“生产力工具”的最大瓶颈。谁能率先解决“执行可信度”问题（如 ZeptoClaw 的 visual feedback），谁就能在下一阶段胜出。

4.  **UI/UX 的关键作用**：
    LobsterAI 和 CoPaw 的反馈显示，用户极其在意**流式响应的流畅度**和**长会话下的性能表现**。后端模型能力逐渐趋同的背景下，**前端交互体验**将成为差异化竞争的核心战场。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 - 2026-03-27

## 1. 今日速览
NanoBot 项目今日呈现**极高活跃度**，社区代码贡献激增，安全性维护进展显著。过去24小时内，项目收到了 **103 条 PR 更新**（其中 96 条待合并），这一异常活跃的数字主要由[移除 `litellm` 依赖](https://github.com/HKUDS/nanobot/pull/2448)以应对供应链安全漏洞的大规模重构引发。Issues 方面，新增 12 条讨论，主要集中在安全验证、子代理逻辑优化及多模态模型适配。虽然无新版本发布，但核心架构的深度重构预示着下一个版本将具有显著的技术代际差异。

## 2. 版本发布
*无新版本发布。*
*注意：鉴于正在进行大规模的依赖替换与安全修复，建议用户关注后续发布的 Release Notes，预计将包含重要的破坏性变更说明。*

## 3. 项目进展
今日合并或处于活跃审查状态的重要 PR 推动了项目在安全性和核心架构上的重大跨越：

*   **安全与架构重构**：PR [#2448](https://github.com/HKUDS/nanobot/pull/2448) 正在移除 `litellm` 依赖，转而使用原生的 OpenAI 和 Anthropic SDK。这是对近期发现的供应链攻击的直接响应，将彻底改变项目的底层通信逻辑。
*   **Agent 逻辑优化**：
    *   PR [#2524](https://github.com/HKUDS/nanobot/pull/2524) 提取了共享的 Agent Runner，旨在统一主代理和子代理的执行循环，为未来的功能扩展铺平道路。
    *   PR [#2523](https://github.com/HKUDS/nanobot/pull/2523) 修复了子代理无法访问 MCP 工具的问题，防止任务被错误委托导致静默失败。
*   **用户体验改进**：
    *   PR [#2525](https://github.com/HKUDS/nanobot/pull/2525) 修复了 Agent 在实际未执行操作时仍报告“正在做/已完成”的误导性行为。
    *   PR [#2520](https://github.com/HKUDS/nanobot/pull/2520) 解决了 Telegram 频道长回复消息被截断的问题，支持拆分发送。

## 4. 社区热点
今日讨论热度最高的话题集中在安全漏洞与多模态支持：

*   **[CRITICAL] 恶意代码投毒报告** ([#2439](https://github.com/HKUDS/nanobot/issues/2439)): 用户 `xiaomukuaier` 报告在 `nanobot-ai v0.1.4.post5` 的 PyPI 包中发现了恶意数据窃取代码。该 Issue 引发了极高的关注（👍: 4），是当前项目最紧急的处理事项。
*   **多模态模型适配争议** ([#2339](https://github.com/HKUDS/nanobot/issues/2339)): 社区强烈建议为视觉任务提供独立的 Provider/Model 配置路径。目前的单一配置模式导致用户难以在非视觉文本模型和视觉模型之间灵活切换。
*   **项目重名混淆** ([#2500](https://github.com/HKUDS/nanobot/issues/2500)): 用户指出了 GitHub 上存在同名项目 `nanobot-ai` (MCP-Server)，可能导致用户混淆。这反映了项目品牌管理的潜在需求。
*   **SDK 重试机制导致的挂起** ([#2511](https://github.com/HKUDS/nanobot/issues/2511)): 技术用户指出 OpenAI/Anthropic SDK 的内置重试与 NanoBot 自身的重试逻辑叠加，导致程序静默挂起 10 分钟以上，该问题获得了技术社区的共鸣。

## 5. Bug 与稳定性
今日报告的 Bug 涉及编码、兼容性及核心执行流程：

*   **[严重] 命令行子代理输出乱码** ([#1904](https://github.com/HKUDS/nanobot/issues/1904)): 命令行调用子代理完成后返回信息显示乱码（已关闭，可能已修复）。
*   **[中等] MiniMax API 错误** ([#2373](https://github.com/HKUDS/nanobot/issues/2373)): 使用 MiniMax 时出现 `invalid function arguments json string` 错误，涉及工具调用参数格式。
*   **[中等] WeChat/MiMo V2 Omni 兼容性** ([#2519](https://github.com/HKUDS/nanobot/issues/2519)): MiMo 模型在工具调用时不带 `text` 字段，导致 NanoBot 将其存入历史后再次请求时被 API 拒绝。
*   **[中等] read_file Skill 与 GPUStack 不兼容** ([#2513](https://github.com/HKUDS/nanobot/issues/2513)): 使用 GPUStack 部署时，`read_file` 技能失败，似乎直接返回了 tool call 的结果字符串而非执行读取。
*   **[低] Gemini Key 配置** ([#144](https://github.com/HKUDS/nanobot/issues/144)): 配置 Gemini 模型时程序无法正确查找 API Key 路径。

## 6. 功能请求与路线图信号
从 PR 和 Issues 中可以嗅探出未来的开发方向：

*   **技能系统增强**：
    *   **Slash Command** ([#2488](https://github.com/HKUDS/nanobot/pull/2488)): 引入 `/skill` 命令，允许用户显式激活特定技能，解决“技能隐式激活”不可控的问题。
    *   **Discovery Mode** ([#2516](https://github.com/HKUDS/nanobot/pull/2516)): 针对大型技能集，引入“发现模式”，仅在内置技能上下文外按需搜索自定义技能。
*   **记忆框架升级** ([#2515](https://github.com/HKUDS/nanobot/pull/2515)): 正在集成可插拔的记忆框架，支持 Mem0 / Graphiti / Memobase 等多种后端，这将极大提升 Agent 的长期记忆能力。
*   **Self-Tool (自省工具)** ([#2521](https://github.com/HKUDS/nanobot/pull/2521)): 提议允许 Agent 在运行时通过工具检查和修改自身的运行时状态（如动态调整上下文窗口）。
*   **渠道支持扩展**：PR [#2010](https://github.com/HKUDS/nanobot/pull/2010) 正在为 WhatsApp 添加完整的媒体（图片/音视频）收发支持。

## 7. 用户反馈摘要
*   **痛点**：用户对“幻觉式执行”感到不满，即 Agent 声称正在执行或已完成，但实际上并未运行任何代码 ([#2487](https://github.com/HKUDS/nanobot/issues/2487))。PR #2525 正在解决此问题。
*   **场景**：企业微信用户在使用 MiniMax API ([#2373](https://github.com/HKUDS/nanobot/issues/2373)) 和 MiMo 模型 ([#2519](https://github.com/HKUDS/nanobot/issues/2519)) 时遇到了较多兼容性问题，反映了商业模型接入的复杂性。
*   **安全敏感度**：用户对开源项目的供应链安全表现出极高的警惕性，迅速发现了潜在的恶意代码包。

## 8. 待处理积压
*   **历史遗留 Bug**：Issue [#1904](https://github.com/HKUDS/nanobot/issues/1904)（乱码问题）虽然近期有更新，但早在 3 月即被创建，涉及 CLI 编码处理，需确保彻底根除。
*   **模型兼容性**：Issue [#144](https://github.com/HKUDS/nanobot/issues/144) (Gemini Key) 自 2 月以来一直处于开放状态，影响特定模型用户的开箱即用体验。
*   **大型重构 PR**：PR [#2448](https://github.com/HKUDS/nanobot/pull/2448) (Remove litellm) 和 [#1474](https://github.com/HKUDS/nanobot/pull/1474) (Dedupe subagent) 仍处于开放状态，需要核心维护者进行最终的 Code Review 和合并，建议优先处理以解除社区的不确定性。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 (2026-03-27)

## 1. 今日速览
Zeroclaw 项目今日处于**极高活跃度**状态，共有 **94** 个代码变更记录（44 个 Issues，50 个 PRs）。项目刚刚发布了 **v0.6.3** 版本，主要解决了 Windows 适配和流式响应问题，但随之也引发了数个兼容性回归（Android 移除、ACP 支持）。核心开发重点集中在 **Matrix 通道的稳定性修复**（E2EE 加密、多房间监听）以及 **内存管理优化**。尽管 Bug 报告较多，但社区响应迅速，大多数关键问题（如 Ollama 配置忽略、安全沙箱策略）已在 24 小时内关闭。

## 2. 版本发布
**最新版本：v0.6.3**
*   **发布时间**：近期
*   **核心更新**：
    *   **能力增强**：新增技能自我完善和管道工具。
    *   **流式支持**：Anthropic 供应商现在支持 SSE (Server-Sent Events) 流式聊天响应，显著降低延迟。
    *   **通道优化**：当供应商发生 fallback 时，系统会通知用户；增加了 Discord 发布公告的 CI 集成。
    *   **生态支持**：新增 Windows 批处理安装脚本和指南，降低了 Windows 用户的上手门槛。

## 3. 项目进展
今日合并的 PR 显著提升了系统的**企业级可用性**和**安全性**：
*   **Matrix 通道重构 (PR #4674)**：实现了 E2EE 自动恢复密钥配置，并修复了困扰用户已久的多房间监听失效问题。
*   **内存历史防泄露 (PR #4706)**：引入了 LRU (Least Recently Used) 机制限制发送者历史记录，防止长期运行导致的内存无限增长。
*   **安全加固 (PR #4562)**：将 PromptGuard（提示注入检测）集成到入站消息管道，扫描所有通道消息，增强了对抗恶意输入的能力。
*   **开发体验 (PR #4726)**：引入了 `#[secret]` 宏和 `zeroclaw secret` CLI 工具，统一了敏感信息（如 API Key）的管理流程。

## 4. 社区热点
*   **[#3059 阿里云百炼无法使用](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)** (7 评论)
    *   **诉求**：用户无法在配置中使用阿里云百炼平台的编码计划。这表明社区对本土化/非主流 LLM 提供商有强烈的接入需求。
*   **[#1304 Ollama 远程连接配置失效](https://github.com/zeroclaw-labs/zeroclaw/issues/1304)** (6 评论)
    *   **焦点**：即便配置了 `api_url`，Ollama 提供商仍强制连接 `localhost`。该 Issue 历史较久但今日被重新关注并关闭，说明核心团队正在清理遗留的配置 Bug。
*   **[#4485 安全沙箱策略过于激进](https://github.com/zeroclaw-labs/zeroclaw/issues/4485)** (4 评论)
    *   **争议**：用户报告配置了 Root 权限策略后，执行 `ls` 或 `nohup` 等基本命令仍被拦截。这反映了**安全模型易用性**与**严格性**之间的平衡痛点。

## 5. Bug 与稳定性
*   **[S1 - Workflow Blocked] Android 支持被移除 (#4783)**
    *   用户发现 v0.6.2 包含的 Android 二进制文件在 v0.6.3 中消失了。这对于 Termux/移动端用户是严重的功能回归，需维护者确认是否为发布事故。
*   **[S1 - Workflow Blocked] ACP 功能失效 (#4724)**
    *   更新到 v0.6.2 后，`acp` 子命令和 `--acp` 标志无法识别，导致依赖该功能的用户工作流中断。
*   **[S2 - Degraded] Matrix 线程上下文丢失 (#4804)**
    *   在 Matrix 中，Bot 的第二次回复会丢失对话上下文。这通常与消息去重或历史记录处理逻辑有关，影响多轮对话体验。
*   **[S2 - Degraded] 飞书列表消息类型不支持 (#4649)**
    *   当飞书消息以列表形式（`* 1 * 2...`）发送时，Bot 无法响应。属于解析层面的兼容性问题。
*   **[S1 - Workflow Blocked] Windows 安装报错 (#4652)**
    *   WSL 环境下执行 `install.sh --docker` 失败，与 v0.6.3 主推的 Windows 支持形成对比，属于安装脚本环境检测 Bug。

## 6. 功能请求与路线图信号
*   **[Agent-to-Agent 互操作性 (PR #4166)]**：
    *   正在开发原生的 A2A 协议支持，允许 ZeroClaw 实例之间发现彼此并委托任务。这是向**多智能体协作系统**迈出的关键一步。
*   **[TOTP 2FA 工具执行保护 (PR #4799)]**：
    *   提议为危险工具执行增加基于 TOTP 的二次验证。这表明项目正在从单纯的“功能实现”转向“生产级安全防护”。
*   **[Whatsapp 提及配置 (#4505)]**：
    *   用户请求 Bot 仅响应 AllowList 中的提及，模仿 OpenClaw 的行为。这显示了从其他竞品迁移过来的用户对精细控制权限的需求。

## 7. 用户反馈摘要
*   **痛点**：**安全模型过于复杂**。Issue #4752 直言“使用极其沮丧”，基本操作（访问本地文件、执行 Shell）被阻碍。尽管安全性是 ZeroClaw 的核心卖点，但降低配置门槛（尤其是 Seatbelt 策略）迫在眉睫。
*   **痛点**：**历史记录配置失效**。用户报告 `max_history_messages` 在 CLI 下有效，但在所有 Channel 模式下被忽略（#4740），导致长时间运行的频道机器人内存溢出或上下文混乱。
*   **正面反馈**：对 PromptGuard 的集成表示欢迎，认为这是防止 AI 被劫持的必要手段。

## 8. 待处理积压
*   **[#4363 贡献者 PR 修复流程优化](https://github.com/zeroclaw-labs/zeroclaw/issues/4363)**：建议维护者直接推送到贡献者分支而不是开启替代性的 PR。这涉及到项目协作规范，长期 OPEN 需要决策。
*   **[#4710 Zeroclaw 重设 Logo](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)**：社区发起了重设 Logo 的讨论并提交了草案。虽非代码阻塞，但涉及品牌形象，等待维护者反馈。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-27)

**分析师**: AI 智能体与个人 AI 助手领域观察员
**数据源**: github.com/sipeed/picoclaw

---

## 1. 今日速览
PicoClaw 项目今日呈现**极高活跃度**，过去 24 小时内共产生了 105 次代码与问题提交（30 Issues + 75 PRs），显示出项目正处于快速迭代与功能爆发期。主要技术债务集中在**配置系统的兼容性**（特别是 Web UI 与 `config.json` 的同步）以及**多渠道适配**（Telegram/Fishu/QQ）上。社区注意力集中在**生物启发记忆系统**的未来路线图以及 **v0.2.4 版本带来的配置回归问题**。

## 2. 版本发布
- **v0.2.4-nightly.20260326.5db1e946**
  - **类型**: Nightly Build (自动化构建)
  - **状态**: 可能不稳定，请谨慎使用。
  - **变更范围**: 涵盖自 v0.2.4 以来至 main 分支的所有变更。
  - **关键链**: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

## 3. 项目进展
今日共有大量 PR 处于待合并状态，以下为核心技术进展：
- **配置兼容性修复**: 针对近期升级导致的 Telegram 配置报错（`text` 字段类型变更），提交了 PR #2071 以修复数组占位符的向后兼容性问题，这是缓解 v0.2.4 升级痛点的关键补丁。
- **Web 体验增强**: PR #2057 引入了 Web 端的流式响应，解决了对话延迟感；PR #2070 为 `web_search` 工具增加了时间范围过滤功能，增强了信息检索的时效性。
- **架构重构**: PR #2068 提出对 `config` 和 `security` 结构进行简化重构，预示着未来配置逻辑将更加清晰。
- **构建系统优化**: PR #2051 修复了 Makefile 在 Windows (Git Bash/MSYS2) 环境下的构建失败问题，扩展了跨平台支持。

## 4. 社区热点
- **#1919 [Feature] Seahorse - Biologically-inspired Memory System** (7 评论)
  - **链接**: [Issue #1919](https://github.com/sipeed/picoclaw/issues/1919)
  - **分析**: 社区对赋予 AI 代理人"类人记忆"（海马体机制）表现出极高热情。该提案旨在解决当前长期记忆和上下文压缩的瓶颈，是 PicoClaw 向更高阶智能演进的核心方向。
- **#413 [Feature] allow web_fetch tool to use proxy** (7 评论, 已关闭)
  - **链接**: [Issue #413](https://github.com/sipeed/picoclaw/issues/413)
  - **分析**: 反映了非公网环境（如企业内网、特定地区）用户的强需求。该议题的关闭表明功能可能已实现或纳入计划。
- **#995 [Feature] Add multi-user support** (6 评论, 已关闭)
  - **链接**: [Issue #995](https://github.com/sipeed/picoclaw/issues/995)
  - **分析**: 多用户隔离（内存、定时任务）是家庭/团队共享 AI 助手的关键，社区已达成解决方案共识。

## 5. Bug 与稳定性
- **高危：配置保存失效**
  - **#2027 (Telegram)**, **#2072 (Discord)**, **#2052 (Feishu)**, **#2033 (QQ)**
  - **现象**: 升级 v0.2.4 后，多个渠道在 Web UI 配置界面无法保存 Token/Secret，报错 "This field is required"。
  - **状态**: 这是一个**系统性回归**，严重影响 Web UI 用户体验。已有修复 PR #2071 针对 Telegram 问题，其余渠道可能等待配置重构 PR #2068 或单独补丁。
- **中危：工具与资源泄漏**
  - **#2001**: 报告 v0.2.4 在 FreeBSD 上空闲时 CPU 占用过高。
  - **#2046**: 使用 LongCat API 时无法调用工具。
  - **#2053**: Web UI 缺少内置工具（如 baidu-search）的 API Key 配置入口。
- **低危：构建与兼容性**
  - **#1305**: Shell 补全脚本输出破坏自动补全流程。
  - **#2050**: Windows 环境下 Makefile 构建产物无 `.exe` 后缀。

## 6. 功能请求与路线图信号
- **记忆系统演进**: Issue #1919 (Seahorse) 和 #175 (Engram) 表明社区不再满足于简单的文件记忆，迫切需要可检索、结构化的持久化记忆后端。
- **操作控制**: Issue #2009 请求增加 `/stop` 命令以取消长时间运行的任务，这是提升交互掌控感的必要功能。
- **生态集成**: Issue #2045 请求支持 **SiliconFlow**（硅基流动），Issue #1347 请求 GitHub Copilot 设备码认证，显示出对国内模型商和 GitHub 生态的深度集成需求。
- **模型容错**: Issue #1908 和 #2029 分别请求"自动级联故障转移"和"模型级速率限制"，这表明在生产环境中使用大模型时，稳定性和成本控制是用户的核心诉求。

## 7. 用户反馈摘要
- **痛点**: v0.2.4 更新后的 Web UI 配置流程"灾难级"体验，导致大量用户无法配置 Telegram、Discord 和 Feishu，用户普遍表示配置字段"莫名其妙消失"或报错。
- **场景**: 用户在 **NAS/Android Termux/Windows** 等多种异构环境下部署，频繁遇到 Docker 镜像清单不可用、Makefile 不兼容、Node.js 能力缺失等环境问题，说明项目的"开箱即用"程度在复杂环境下仍需打磨。
- **正面反馈**: 用户对新增的 ASR/TTS 功能（PR #1939）和 Web 搜索时间范围过滤（PR #2070）表示期待。

## 8. 待处理积压
- **长期未决**:
  - **#1936**: Telegram 在 Termux 上运行失败（环境兼容性难题）。
  - **#1946**: Cron 任务在特定时间段（如 AM 5:00-6:00）不执行（时区或逻辑 Bug）。
  - **#1348**: Windows 源码启动失败（包引入错误）。
- **需关注 PR**:
  - **#1709**: 会话历史持久化与线程回复支持（功能较大，审查周期可能较长）。
  - **#1939**: ASR/TTS 重构（涉及底层能力扩展）。

**建议**: 维护者应优先处理 **v0.2.4 配置表单 Bug**，避免引发大量用户流失；同时加快对 Seahorse 记忆系统的评估，以回应社区对长期智能的期待。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 2026-03-27

## 1. 今日速览
NanoClaw 项目今日处于**极高活跃度**状态，在过去 24 小时内共有 38 个更新（Issues + PRs），显示出强劲的开发动能。核心开发重点集中在**多模态通信渠道扩展**（Signal, WhatsApp）、**安全与稳定性加固**（环境解析、命令注入防御）以及**Linux 部署体验优化**。社区对非 Meta 官方 API 的 WhatsApp 解决方案表现出浓厚兴趣，同时关于 Linux 环境下的防火墙和内存管理问题也引发了广泛关注。

## 2. 版本发布
**无新版本发布**

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，虽然列表中多数活跃 PR 仍处于待合并状态，但以下改动显著推动了项目成熟度：

*   **基础设施与 CLI 现代化**：
    *   **PR #1408**: CLI 工具正式从 `claw` 重命名为 `nanoclaw`，并整合了 `clawps` 为子命令。这统一了前端操作入口，为后续 Go 语言编排工具预留了命名空间。
    *   **PR #1472**: 新增 `/route` 容器技能和 `gstack`，引入了基于 SIMPLE/COMPLEX/BROWSER 的任务路由机制，旨在通过智能分类削减 60-70% 的 API 成本。

*   **文档与运维增强**：
    *   **PR #1469**: 新增 Linux iptables/UFW 故障排查文档，直接回应了 Oracle Cloud 等环境下因防火墙规则导致的代理连接失败问题。
    *   **PR #1453**: 优化了任务脚本的 Agent 指令，引导使用 `schedule_task` 替代内联 bash 循环，提升长期任务稳定性。

## 4. 社区热点
*   **[#29 feat: Add Signal as messaging channel](https://github.com/qwibitai/nanoclaw/issues/29)**
    *   **热度**: 👍 3，3 条评论。
    *   **分析**: 这是一个持续活跃的需求，用户希望添加 Signal 作为备选通讯方案（甚至替代 WhatsApp）。该 Issue 已有对应的 PR #1121 在跟进，使用 `signal-cli` 实现。
*   **[#1092 Support for OpenAI API](https://github.com/qwibitai/nanoclaw/issues/1092)** (今日关闭)
    *   **热度**: 1 赞。
    *   **分析**: 用户询问是否支持 OpenAI API 用于本地模型，认为其比现有方案更通用且限制更少。该 Issue 已关闭，可能已通过其他方式解决或被排期。
*   **[#1445 Linux setup: silent message drops...](https://github.com/qwibitai/nanoclaw/issues/1445)**
    *   **热度**: 新建 Issue。
    *   **分析**: 用户详尽列出了在 Linux (Hetzner/UFW) 环境下遇到的 8 个 Bug，包括 JID 翻译导致私信丢失、防火墙阻断及 .env 损坏。这反映了在非标准云环境下部署的复杂性痛点。

## 5. Bug 与稳定性
今日报告的 Bug 涉及安全、解析逻辑及部署环境，部分已有修复 PR：

*   **[Critical - 已有修复]** **LID JID 翻译丢失私信**
    *   **来源**: Issue #1445
    *   **描述**: WhatsApp 的 LID JID 未能被正确翻译，导致新会话的私信被静默丢弃。
    *   **修复状态**: 对应 PR #1446 已提交，涵盖了部分修复。
*   **[High - 已有修复]** **单字符 .env 值崩溃**
    *   **来源**: PR #1476
    *   **描述**: 如 `X=a` 的配置会被解析为空字符串，导致配置静默丢失。
*   **[High - 已有修复]** **命令注入漏洞**
    *   **来源**: PR #1475
    *   **描述**: `stopContainer` 和挂载路径存在被注入恶意 Shell 命令的风险。PR 引入了正则验证以拦截元字符。
*   **[Medium]** **Oracle Cloud 防火墙阻断**
    *   **来源**: Issue #1357
    *   **描述**: 严格的 iptables 规则阻止容器连接到宿主机 3001 端口的代理服务。

## 6. 功能请求与路线图信号
从今日新增的 Issues 和 PRs 中，可以洞察项目未来的扩展方向：

*   **WhatsApp 非官方支持 (Baileys)**:
    *   **Issue #1473 & PR #1474**: 社区强烈希望引入基于 [Baileys](https://github.com/WhiskeySockets/Baileys) 的非官方 WhatsApp 实现。这不需要 Meta Business API 验证，更适合个人或小规模开发者，与现有的官方 Cloud API 形成互补。
*   **知识图谱记忆系统**:
    *   **Issue #1458**: 提议引入 [Graphiti](https://github.com/getmemebuild/graphiti) 作为 Agent 的长期记忆层，解决当前基于文件的记忆系统检索困难、Token 线性增长的问题。
*   **Agent 间通信 (A2A)**:
    *   **PR #1295**: 添加 `/add-a2a` 技能，旨在打通 NanoClaw 与 Claude Code、Cursor 等其他 Agent 的协作壁垒。

## 7. 用户反馈摘要
*   **部署痛点**: 用户在 Oracle Cloud 和使用 UFW 的 Linux 环境下遭遇了严重的网络连通性问题，导致 Agent "静默挂起"。
*   **API 选择倾向**: 用户倾向于使用更开放、限制更少的 API（如 OpenAI API 或非官方 WhatsApp 协议），以避免官方云服务的繁琐验证和限制。
*   **内存焦虑**: 用户反映现有记忆系统缺乏清理机制，Token 消耗随时间线性增长，对长期运行实例造成成本压力。

## 8. 待处理积压
*   **长期未决 Issue [#29] (Add Signal)**: 该 Issue 创建于 2026-02-02，虽然热度较高且已有 PR，但至今尚未完全合并，建议维护者优先推进。
*   **安全相关 PR**: PR #1475 (命令注入修复) 和 #1476 (环境解析修复) 涉及关键安全和稳定性，建议尽快审查并合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 - 2026-03-27

## 📊 今日速览
NullClaw 项目今日处于**高活跃度**状态，社区对多平台适配与稳定性的关注度显著提升。在过去 24 小时内，项目新增了 5 个 Issues 与 4 个 Pull Requests，显示了持续的开发迭代动力。虽然今日无新版本发布，但针对 Lark、Discord 及 Docker 部署环境的修复方案已提交至代码库，待审核合并。值得注意的是，**微信生态** 的集成成为今日讨论的焦点，反映出社区对大陆市场生态的强烈需求。

## 🚀 版本发布
今日无新版本发布。

## 🔨 项目进展
今日共有 4 个 PR 提交或更新，目前全部处于**待合并** 状态，暂无已合并项。重点进展包括：
*   **交互体验优化**：[PR #720](https://github.com/nullclaw/nullclaw/pull/720) 针对飞书 渠道提出了“处理中”的占位反馈机制。通过在模型思考时发送临时消息并随后撤回，解决了用户长时间等待时的焦虑感，向 OpenClaw 的体验对齐迈进一步。
*   **配置文档完善**：[PR #718](https://github.com/nullclaw/nullclaw/pull/718) 补充了内置 WeChat 渠道的配置说明，涵盖了 `/wechat` webhook 路径及回调 Token 要求，响应了社区对文档完善的需求。
*   **Session 逻辑修复**：[PR #719](https://github.com/nullclaw/nullclaw/pull/719) 修复了 Discord 定时私聊投递时可能选错目标 ID 的逻辑错误，引入了 `delivery_chat_id` 以确保消息准确触达。
*   **Docker 部署修复**：[PR #692](https://github.com/nullclaw/nullclaw/pull/692) 解决了 `cron.zig` 在 Docker 环境下硬编码路径导致无法读取 `NULLCLAW_HOME` 环境变量的问题。

## 🔥 社区热点
*   **[Feature Request #714] 支持 WeChat 插件集成**
    *   **链接**: [#714](https://github.com/nullclaw/nullclaw/issues/714)
    *   **热度**: 提出后 24 小时内引发关注。
    *   **诉求**: 用户指出官方已发布 WeChat 插件，且其他 Fork 版本已跟进，要求 NullClaw 支持该功能以覆盖中国大陆及东南亚用户。
    *   **现状**: [PR #718](https://github.com/nullclaw/nullclaw/pull/718) 已开始补充相关文档，预示该功能可能已被纳入计划或已部分实现。

## 🐛 Bug 与稳定性
今日报告的 Bug 聚焦在**长连接稳定性**与**配置解析**上：
1.  **[High] QQ 长任务断连** ([#722](https://github.com/nullclaw/nullclaw/issues/722))
    *   **现象**: 执行耗时任务时 QQ 连接会断开，且无法自动恢复，导致 AI 回复丢失。
    *   **影响**: 严重影响长文本推理场景的用户体验。
    *   **状态**: 待修复。
2.  **[Medium] API URL 配置解析错误** ([#721](https://github.com/nullclaw/nullclaw/issues/721))
    *   **现象**: 尝试在配置文件中使用 Cloudflare Custom API URL 时发生解析错误。
    *   **影响**: 阻止用户使用自定义模型提供商。
    *   **状态**: 待修复。
3.  **[Low] Telegram 推理显示 Bug (已关闭)** ([#311](https://github.com/nullclaw/nullclaw/issues/311))
    *   **备注**: 该 Issue 今日被标记为关闭，显示 `/reasoning on` 不显示推理过程的问题已得到处理（尽管评论中显示仍有用户反馈）。

## 💡 功能请求与路线图信号
*   **Lark 交互增强**: [Issue #717](https://github.com/nullclaw/nullclaw/issues/717) 提出在飞书最终回复前提供处理反馈。**相关性**: [PR #720](https://github.com/nullclaw/nullclaw/pull/720) 已提交修复，即将落地。
*   **WeChat 生态支持**: [Issue #714](https://github.com/nullclaw/nullclaw/issues/714) 呼吁接入官方插件。**相关性**: [PR #718](https://github.com/nullclaw/nullclaw/pull/718) 的文档更新暗示该功能已在开发中或即将可用，建议关注后续 Release Notes。

## 💬 用户反馈摘要
*   **痛点**：用户普遍对**长任务处理时的连接稳定性**表示担忧（Issue #722），特别是在 QQ 这种对即时性要求较高的平台上，AI 反应慢会导致“消息丢失”。
*   **体验**：用户非常看重**可见的推理过程** 和 **处理中状态反馈**。从 Lark (Issue #717) 和 Telegram (Issue #311) 的反馈来看，消除“黑盒等待感”是提升用户满意度的关键。

## ⏳ 待处理积压
*   **Issue #311 (Telegram Reasoning)**: 虽然状态为 CLOSED，但最新评论显示问题可能依然存在（"does not show reasoning"）。建议维护者核实是否真正修复，或是否属于用户配置问题。
*   **PR #692 (Docker Cron)**: 此 PR 针对 Docker 环境的权限修复至关重要，已提交数日且在今日活跃，建议优先合并以解决容器化部署用户的困扰。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-27)

**分析师：** AI 智能体与个人助手领域开源项目分析师
**数据来源：** github.com/nearai/ironclaw
**日期：** 2026-03-27

---

## 1. 今日速览

IronClaw 项目今日处于**极高活跃度**状态，共有 56 个代码与问题更新（40 条 PR + 16 条 Issues），显示出强劲的开发势头。核心开发重点集中在**多租户架构升级**（PR #1626）与**系统稳定性修复**（UTF-8 崩溃、OAuth 认证）。与此同时，社区反馈了多个关于第三方平台集成（Telegram, Railway, Feishu）的 Bug，表明随着用户基数扩大，边缘场景的兼容性问题日益凸显。项目即将发布 v0.23.0 版本（PR #1658），预示着一波包含破坏性变更的重要更新即将到来。

---

## 2. 版本发布

### 📦 v0.23.0 (即将发布/发布中)
虽然数据概览显示最新版本为 v0.22.0（3月25日发布），但 CI 机器人已创建 v0.23.0 的发布 PR **[#1658](https://github.com/nearai/ironclaw/pull/1658)**，状态为待合并。
- **破坏性变更:** 该版本包含 API 破坏性变更，涉及外部可构造结构体的字段新增。
- **建议:** 用户在升级后需检查代码中是否使用了结构体字面量构造相关类型，需补充新增字段。

### 🔙 v0.22.0 (当前稳定版 - 2026-03-25)
- **核心增强:**
  - **Agent:** 支持基于 Provider、Session 和所有表面的线程级工具推理。
  - **CLI:** 在工具信息中显示凭据认证状态。
  - **安全性:** 引入多租户认证支持。

---

## 3. 项目进展

今日合并或处于最终审查阶段的关键 PR 标志着项目在架构和稳定性上的双重推进：

- **[架构] feat: DB-backed user management... ([#1626](https://github.com/nearai/ironclaw/pull/1626))**
  - **状态:** Open (更新活跃)
  - **影响:** 这是该项目近期最大的架构变更之一，完全替换了静态环境变量 Token，转向基于数据库的用户管理、多租户隔离和管理员 API。这为 IronClaw 的企业级部署和 SaaS 化铺平了道路。
- **[稳定性] fix: make internal crates release-independent again ([#1683](https://github.com/nearai/ironclaw/pull/1683))**
  - **状态:** Closed (已合并)
  - **影响:** 解决了发布流程中 `ironclaw_common` 和 `ironclaw_safety` 的依赖耦合问题，恢复了内部 crate 的独立性，确保未来发布的稳定性。
- **[协议] feat(gateway): add OpenAI Responses API endpoints ([#1656](https://github.com/nearai/ironclaw/pull/1656))**
  - **状态:** Open
  - **影响:** 新增 `/v1/responses` 接口，与传统的 `/v1/chat/completions` 不同，新接口路由通过完整的 Agent 循环，意味着外部调用可以直接利用 IronClaw 的工具调用和记忆能力。
- **[安全] fix: prevent UTF-8 panics... ([#1688](https://github.com/nearai/ironclaw/pull/1688) & [#1679](https://github.com/nearai/ironclaw/pull/1679))**
  - **状态:** Open
  - **影响:** 修复了可能导致 UTF-8 处理崩溃的高危漏洞，特别是在处理多字节字符（如 Emoji）时的索引截断问题。

---

## 4. 社区热点

今日社区讨论主要集中在集成体验和平台兼容性上：

- **[热点 Bug] Telegram Bot 轮询失效 ([#1676](https://github.com/nearai/ironclaw/issues/1676))**
  - **热度:** 6 条评论
  - **摘要:** 用户反馈更新后 Telegram 机器人只能部分工作，检查消息功能失败，怀疑是 HTTP 工具例程错误。用户对比了 OpenClaw 的表现，表达了对 IronClaw 工具稳定性的不满。
- **[架构讨论] System Prompt Refinement ([#1671](https://github.com/nearai/ironclaw/issues/1671))**
  - **热度:** 社区关注
  - **摘要:** 社区成员从认知架构师角度出发，深入探讨了系统提示词的改进建议，体现了社区对 AI 智能体行为优化的深层参与。
- **[云平台] Railway 部署环境变量问题 ([#1680](https://github.com/nearai/ironclaw/issues/1680))**
  - **热度:** 新开 Issue
  - **摘要:** 使用官方一键模版部署的用户发现 `LLM_*` 环境变量未生效，导致模型卡在 Anthropic Sonnet。这影响了开箱即用的体验。

---

## 5. Bug 与稳定性

今日报告的 Bug 涉及多个严重级别，CI 自动检测发现了两个潜在的高危问题：

- **[CRITICAL] Potential UTF-8 panic ([#1669](https://github.com/nearai/ironclaw/issues/1669))**
  - **描述:** `src/llm/reasoning.rs` 中可能发生 UTF-8 字符边界截断导致的 Panic。
  - **状态:** 已有修复 PR [#1679](https://github.com/nearai/ironclaw/pull/1679) 和 [#1688](https://github.com/nearai/ironclaw/pull/1688)。
- **[HIGH] Truncation count accumulation logic asymmetry ([#1670](https://github.com/nearai/ironclaw/issues/1670))**
  - **描述:** `src/agent/agentic_loop.rs` 中截断计数逻辑不对称，可能导致计数持续累积而非重置。
  - **状态:** 待修复。
- **[MEDIUM] Excessive debug logging ([#1686](https://github.com/nearai/ironclaw/issues/1686))**
  - **描述:** 热路径中存在过多的调试日志，可能影响性能。
- **[Integration] Feishu/Lark Channel Stuck ([#1673](https://github.com/nearai/ironclaw/issues/1673))**
  - **描述:** 飞书/ Lark 渠道配置后卡在 "Awaiting Pairing" 状态。
  - **状态:** 待处理。
- **[Integration] Railway env vars not visible ([#1680](https://github.com/nearai/ironclaw/issues/1680))**
  - **描述:** Railway 平台环境变量未正确加载。
  - **状态:** 待处理。

---

## 6. 功能请求与路线图信号

从 Issues 和 PRs 中可以看出以下功能趋势：

- **[请求] 递归技能目录扫描 ([#1664](https://github.com/nearai/ironclaw/issues/1664))**
  - **关联 PR:** [#1667](https://github.com/nearai/ironclaw/pull/1667) (Open)
  - **分析:** 用户希望支持更复杂的技能目录结构（如 `skills/org/skill-a/SKILL.md`）。目前已有 PR 正在实现此功能，并增加了递归深度配置，极有可能纳入下一版本。
- **[请求] Agent 反漂移自检 ([#1634](https://github.com/nearai/ironclaw/issues/1634))**
  - **分析:** 提议在 Agent 循环中加入基于规则的反漂移检测，用于识别常见的失败模式。这属于"Agent 稳定性"增强路线图的一部分。
- **[新增] 阿里云通义千问支持 ([#1446](https://github.com/nearai/ironclaw/pull/1446))**
  - **状态:** Open (Large Size)
  - **分析:** 正在添加 `AliyunProvider`，支持通义千问 Coding Plan。这将显著扩展 IronClaw 对中文开发者和本土云服务的支持。

---

## 7. 用户反馈摘要

- **痛点：第三方工具集成的脆弱性。** 用户 `jamieduk` 在 [#1676](https://github.com/nearai/ironclaw/issues/1676) 中提到 "OpenClaw knows how to do this perfect from day 1 but ironclaw still fails"，反映出 HTTP 工具在处理轮询等长连接场景时的不稳定性，这是用户流失的一个潜在风险点。
- **痛点：本地模型配置门槛。** Issue [#1689](https://github.com/nearai/ironclaw/issues/1689) 显示用户在使用 Ollama 本地模型时遇到 Embeddings 模型缺失警告，需要手动修改 `.env` 文件。虽然解决方案简单，但对于非技术用户不够友好。
- **正面：OAuth 流程改进。** PR [#1684](https://github.com/nearai/ironclaw/pull/1684) 解决了代理认证令牌的问题，虽然属于底层改进，但直接改善了托管服务的用户体验。

---

## 8. 待处理积压

- **[#1303](https://github.com/nearai/ironclaw/issues/1303) (Open, 3月17日创建):** WASM 工具 Schema 暴露问题。即使组件导出了类型化 Schema，LLM 仍可能看到 `{}`，导致参数缺失。
- **[#1078](https://github.com/nearai/ironclaw/issues/1078) (Closed, 但涉及深层逻辑):** Routine 删除fallback逻辑问题。虽然相关 PR [#1108](https://github.com/nearai/ironclaw/pull/1108) 已关闭，但这显示了 Routines 系统的复杂性和潜在的边缘情况。
- **Large PRs 待合入:** 三个 XL 规模的 PR ([#1446](https://github.com/nearai/ironclaw/pull/1446), [#1626](https://github.com/nearai/ironclaw/pull/1626), [#1650](https://github.com/nearai/ironclaw/pull/1650)) 仍处于 Open 状态，建议维护者优先审查以确保代码库健康。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

你好！我是 LobsterAI 项目分析师。以下是基于 2026 年 3 月 27 日 GitHub 数据整理的项目动态日报。

---

## 📅 LobsterAI 项目日报 | 2026-03-27

### 1. 今日速览
LobsterAI 项目今日处于**极高活跃度**状态。过去 24 小时内共有 **50 条 PR** 和 **20 个 Issues** 发生变动，显示出强劲的开发迭代势头。项目正式发布了 **v2026.3.26** 版本，重点引入了多智能体支持，并修复了流式输出与网关重启的关键 Bug。社区反馈集中在性能优化（长会话卡顿）与功能请求（Token 统计、模板预设）上，同时报告了数个可能导致崩溃的稳定性问题，需引起注意。

---

### 2. 版本发布
**版本号：v2026.3.26**
**发布时间：** 2026-03-26
**核心亮点：**
*   **[Feature] 多智能体支持:** 新增预设智能体和技能系统。
    *   *相关 PR:* #895 ([feat: multi-agent support...](https://github.com/netease-youdao/LobsterAI/pull/895))
*   **[Fix] 网关热切换修复:** 解决了切换大模型时导致 OpenClaw Gateway 强制重启的问题，提升使用流畅度。
    *   *相关 PR:* #893 ([fix: avoid gateway restart](https://github.com/netease-youdao/LobsterAI/pull/893))
*   **[Fix] 流式性能优化:** 修复了计算重叠前缀时的 O(n²) 算法复杂度导致的 UI 卡顿问题（对应 Issue #887）。
*   **[Fix] SSE 数据丢失:** 修复了 Anthropic 路径下未做行缓冲导致的流式数据截断问题（对应 Issue #922）。

---

### 3. 项目进展
今日共有 **15 个 PR** 成功合并或关闭，主要集中在性能重构、UI 交互增强和模型适配：

*   **性能与稳定性重构:**
    *   **[#764](https://github.com/netease-youdao/LobsterAI/pull/764)** (已合): 实现了 `LazyRenderTurn` 组件，通过虚拟滚动技术大幅解决消息过多时的页面卡顿和白屏问题。
    *   **[#935](https://github.com/netease-youdao/LobsterAI/pull/935)** (已合): 修复了定时任务在 Gateway 握手未完成前就发起请求导致的报错。
    *   **[#934](https://github.com/netease-youdao/LobsterAI/pull/934)** (已合): 修复了删除 Agent 后 IM 绑定未清理导致的问题，并注入了 SKILLS_ROOT 环境变量。
*   **UI/UX 增强体验:**
    *   **[#785](https://github.com/netease-youdao/LobsterAI/pull/785)** (已合): 模型选择下拉框新增「图像」标签显示。
    *   **[#939](https://github.com/netease-youdao/LobsterAI/pull/939)** (待合): 为代码块增加了折叠/展开和行号切换功能。
*   **新功能推进:**
    *   **[#929](https://github.com/netease-youdao/LobsterAI/pull/929)** (待合): 新增百度千帆大模型支持。
    *   **[#923](https://github.com/netease-youdao/LobsterAI/pull/923)** (待合): 实现了会话内容的全文检索功能 (Cmd+F)。
    *   **[#924](https://github.com/netease-youdao/LobsterAI/pull/924)** (待合): 会话列表与消息历史改为分页加载，降低内存占用。
    *   **[#938](https://github.com/netease-youdao/LobsterAI/pull/938)** (待合): 引入 12 套主题系统及 CSS 变量架构。

---

### 4. 社区热点
**高关注度 Issues (Top Discussions):**

*   **[#930 支持展示 token 用量](https://github.com/netease-youdao/LobsterAI/issues/930)** (OPEN)
    *   **诉求:** 用户希望了解每轮对话及整个会话的 Token 消耗、缓存命中情况及费用估算。
    *   **分析:** 后端数据已完备，前端缺展示位。这是成本控制场景下的强需求，且修改风险低。
*   **[#933 支持会话模板/系统提示词预设](https://github.com/netease-youdao/LobsterAI/issues/933)** (OPEN)
    *   **诉求:** 针对代码审查等重复任务，支持预设 Prompt 模板，避免每次手动输入。
    *   **分析:** 旨在提升工作流效率，属于生产力工具的标配功能。
*   **[#844 切换模型导致 Gateway 重启](https://github.com/netease-youdao/LobsterAI/issues/844)** (OPEN)
    *   **状态:** 昨日发布的 v2026.3.26 版本中 PR #893 已修复此问题，用户可验证更新。

---

### 5. Bug 与稳定性
**严重级 Issues (需立即关注):**

*   **[#926 `destroy()` 调用导致崩溃](https://github.com/netease-youdao/LobsterAI/issues/926)** (HIGH)
    *   **问题:** `imCoworkHandler.ts` 中未使用可选链调用 `reject`，导致应用退出、IM 重建或网关重连时必现崩溃。
    *   **状态:** 等待修复。
*   **[#906 SQLite 数据保存丢失风险](https://github.com/netease-youdao/LobsterAI/issues/906)** (HIGH)
    *   **问题:** 数据库 `save()` 使用同步写入且无异常处理，磁盘满或权限异常时会导致数据直接丢失或损坏。
    *   **状态:** 等待修复，建议增加重试机制或原子性写入。
*   **[#928 登录组件加载失败](https://github.com/netease-youdao/LobsterAI/issues/928)** (MEDIUM)
    *   **问题:** 网易员工登录入口切换流程中，登录组件加载失败。
*   **[#910/918 定时任务与 IM Bot 异常](https://github.com/netease-youdao/LobsterAI/issues/910)** (MEDIUM)
    *   **问题:** 飞书机器人定时任务发送报错；OpenClaw Doctor 错误添加 weixin 配置。

---

### 6. 功能请求与路线图信号
**从 Issues 提取的新需求信号:**

1.  **链接理解:** **[#931](https://github.com/netease-youdao/LobsterAI/issues/931)** 请求支持粘贴 URL 后自动抓取并注入网页内容。
2.  **记忆导入导出:** **[#914](https://github.com/netease-youdao/LobsterAI/issues/914)** 请求支持跨设备迁移记忆数据。
3.  **键盘交互优化:** **[#927](https://github.com/netease-youdao/LobsterAI/issues/927)** 请求设置界面支持键盘上下键切换选项。

**信号判断:** Token 统计 (#930) 和 会话模板 (#933) 已有对应代码基础或高需求标签，极有可能进入下个版本的 Roadmap。

---

### 7. 用户反馈摘要
*   **痛点:** **长会话卡顿**是最大痛点（Issues #887, #836），虽然已通过 PR #764 (LazyRender) 修复，但用户反馈在输入框回车清空延迟 (#936) 和流式消息合并卡顿上仍有优化空间。
*   **体验:** 用户对**模型切换的流畅度**较为敏感，v2026.3.26 修复 Gateway 重启问题将显著改善这一体验。
*   **困惑:** 有小白用户询问**登录与付费积分的区别** (#884)，说明文档或许需要更清晰的引导。

---

### 8. 待处理积压
*   **[#797 微信插件启动失败修复](https://github.com/netease-youdao/LobsterAI/pull/797)** (OPEN): 修复未安装 `openclaw-weixin` 插件时网关无法启动的问题，PR 已提交但未合并，建议尽快合入以解决用户反馈的 Issue #918。
*   **[#936 输入框延迟清空修复](https://github.com/netease-youdao/LobsterAI/pull/936)** (OPEN): 针对长会话输入体验的直接修复，建议优先合并。
*   **[#932 定时任务错误提示修复](https://github.com/netease-youdao/LobsterAI/pull/932)** (OPEN): 解决用户配置定时任务时无反馈的“哑巴 Bug”。

---
**分析师备注:** 项目代码库正经历高频重构（如主题系统、虚拟列表），建议在合并大量重构类 PR 后进行一轮完整的回归测试，特别是针对 IM 机器人这一边缘场景。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目日报 (2026-03-27)

## 1. 今日速览
TinyClaw 项目在 2026-03-27 处于高活跃度的开发迭代状态。尽管今日无新增 Issue 讨论，但代码库经历了显著的重构与优化，共合并了 6 个 PR。项目发布了 v0.0.20 版本，重点优化了 **TinyOffice** 控制平面的用户体验，并彻底重构了 CLI 架构。此外，开发团队集中解决了 Docker 容器化环境下的权限与数据持久化问题，显著提升了生产环境的稳定性。

---

## 2. 版本发布
**新版本：v0.0.20**
- **发布地址**：[TinyAGI v0.0.20 Release](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.20)
- **核心亮点**：
  - **Office Control Plane**：TinyOffice Web UI 新增完整的控制平面，支持管理守护进程（重启）、频道（启停）及设备配对。原 "Providers" 标签页已合并至 "Services" 标签页，实现配置管理的一体化。
  - **架构重构**：CLI 代码从单体文件拆分为模块化 TypeScript 架构，提升了可维护性。

---

## 3. 项目进展
今日合并的 6 个 PR 标志着项目在架构稳定性与用户界面体验上迈出了重要一步：

- **[PR #268] UI 体验整合** ([link](https://github.com/TinyAGI/tinyagi/pull/268))
  - **内容**：将 Providers 标签页合并至 Services，并移除了独立的 /logs 页面。
  - **意义**：简化了控制台布局，降低了用户的配置管理复杂度，界面逻辑更加清晰（现为 Overview, Services, Logs 三栏结构）。

- **[PR #267] 核心功能增强** ([link](https://github.com/TinyAGI/tinyagi/pull/267))
  - **内容**：实现了统一的 Control Plane，支持通过 API 端点进行容器内服务重启。
  - **意义**：赋予了用户在 Web 界面直接重启后端服务的能力，极大增强了运维便捷性。

- **[PR #263] 代码质量提升** ([link](https://github.com/TinyAGI/tinyagi/pull/263))
  - **内容**：将 847 行的 `tinyagi.mjs` 单体文件拆分为模块化 TS 结构。
  - **意义**：这是一个重要的技术债务偿还动作，CLI 入口文件精简至约 336 行，为后续功能开发奠定了更清晰的代码基础。

---

## 4. Bug 与稳定性
今日修复了两个高严重级别的 Docker 相关 Bug，这表明项目正在加强对生产部署环境的支持：

- **[高严重度 - 权限错误] [PR #266] Docker 守护进程修复** ([link](https://github.com/TinyAGI/tinyagi/pull/266))
  - **问题**：Codex 在 Docker 容器内因权限降权（`gosu`）无法读取 `/root/.codex/auth.json`，导致 WebSocket 500 错误。
  - **修复**：移除了非 root 用户配置，直接以 root 运行以确保 AI CLI 工具能正确读取鉴权文件。

- **[中严重度 - 数据丢失风险] [PR #265] 数据持久化路径修正** ([link](https://github.com/TinyAGI/tinyagi/pull/265))
  - **问题**：AI CLI 工具（如 codex, claude-code）默认将配置存储在 `$HOME` (`/home/tinyagi`)，而旧版 Docker 挂载点为 `/data`，导致配置在容器重建后丢失。
  - **修复**：将持久化数据统一迁移至 `/home/tinyagi`，确保 Docker Volume 能同时覆盖应用数据和 AI 状态。

---

## 5. 社区热点
今日社区无新增活跃讨论（0 条活跃 Issue）。所有的更新均由核心维护者 *jlia0* 提交并合并，显示出项目目前处于**封闭开发/快速迭代**阶段，而非社区协作驱动阶段。

---

## 6. 功能请求与路线图信号
基于今日合并的 PR，我们可以推导出项目的近期路线图重点：
1. **模块化优先**：PR #263 和 #264 表明团队正在大力清理底层代码架构（TS 类型注解、模块拆分），这是为后续添加更复杂 Agent 功能做准备。
2. **统一管理界面**：PR #267 和 #268 显示项目致力于将 TinyOffice 打造成一个全能的控制中心，未来可能会有更多后端管理权限（如日志查看、服务监控）向 Web 端下放。

---

## 7. 待处理积压
**无**。
目前 Issues 列表干净，所有已提出的技术债务（如 CLI 架构、Docker 权限、UI 布局）均已在今日得到处理。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是基于 Moltis 项目 2026-03-27 GitHub 数据生成的项目动态日报：

---

### **Moltis 项目日报 - 2026-03-27**

#### 1. 今日速览
Moltis 项目在过去 24 小时内保持**低活跃度**运行状态。项目无新版本发布，主要工作集中在维护层面，包括 2 条 Pull Requests 的合并与 1 条功能增强请求的讨论。今日代码层面的变更属于日常维护，未涉及核心逻辑的重大重构，项目整体健康状况稳定。

#### 2. 版本发布
*当前无新版本发布。*

#### 3. 项目进展
今日合并/关闭的 PR 侧重于依赖升级与路径修复：
*   **[PR #492] 修复样式表路径** ([cyberpsyche](https://github.com/cyberpsyche))
    *   **状态**: 已关闭
    *   **进展**: 修正了 `crates/web/src/assets.rs` 中 `style.css` 的路径引用问题。
    *   **影响**: 这是一个针对前端资源加载的快速修复，确保了 Web UI 端样式文件能被正确加载，提升了构建的稳定性。
*   **[PR #491] 依赖升级** ([dependabot[bot]](https://github.com/dependabot))
    *   **状态**: 已关闭
    *   **进展**: 将 `/crates/web/ui` 目录下的开发依赖 `picomatch` 从 4.0.3 升级至 4.0.4。
    *   **影响**: 属于例行的依赖安全更新与补丁应用，保持了技术栈的时效性。

#### 4. 社区热点
今日最活跃的讨论集中在增强功能请求上：
*   **[Issue #490] 本地思考 功能** ([Wanderspool](https://github.com/Wanderspool))
    *   **链接**: [moltis-org/moltis#490](https://github.com/moltis-org/moltis/issues/490)
    *   **热度**: 新开 issue，虽然目前评论较少，但触及了 AI Agent 的核心交互体验。
    *   **诉求分析**: 该请求希望引入“Local thinking”机制。这通常意味着在将请求发送给 LLM 或在最终呈现给用户之前，系统需要具备本地的规划、推理或草稿生成能力。这反映了用户希望增强 Agent 处理复杂任务的逻辑链路，或提升响应的可控性。

#### 5. Bug 与稳定性
*今日未报告新的 Bug 或崩溃问题。*
*   合并的 [PR #492](https://github.com/moltis-org/moltis/pull/492) 解决了一个潜在的文件路径引用错误，有助于提升前端界面的稳定性。

#### 6. 功能请求与路线图信号
*   **本地思考**:
    *   目前该 Issue 仅处于提案阶段，尚未有关联的 PR 开启。如果该功能被采纳，预计将在未来的 Roadmap 中作为提升 Agent 智能化程度的重点特性进行开发。

#### 7. 用户反馈摘要
*   由于今日活跃的 Issue 较少，暂无大量的用户情绪反馈。
*   从 [Issue #490](https://github.com/moltis-org/moltis/issues/490) 的提出可以看出，用户对 Agent 的处理过程（不仅仅是最终结果）有更深层的关注，期望看到或利用 Agent 的“思考过程”来优化工作流。

#### 8. 待处理积压
*   **关注 Issue #490**: 建议维护者评估“Local thinking”的技术可行性与优先级，因为这可能涉及核心架构的调整。
*   **常规维护**: 依赖库的升级目前处理及时，无明显积压。

---

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 (2026-03-27)

**数据概览**
- **Issues 活跃度**：极高 (50 条更新，46 条新开/活跃)
- **PR 贡献度**：高 (44 条更新，合并率 50%)
- **版本状态**：活跃开发中 (无正式 Release，检测到 `1.0.0b1` beta 版本 bump)
- **项目健康度**：⚠️ 警告 (社区极其活跃，但报告了多个 P0 级 Bug 和严重的上下文管理问题)

---

### 1. 今日速览
CoPaw 项目在 2026-03-27 迎来了爆发式的社区反馈，单日新增与活跃 Issues 达到 46 条，显示出极高的用户关注度。核心开发团队在代码合并上保持高产出，合并了 22 条 PR，主要集中在**飞书渠道稳定性修复**、**多模态预览支持**以及**技能系统架构重构**。然而，今日报告的 Bug 数量激增，特别是涉及**数据丢失**（会话误删）和**上下文压缩产生的“幻觉”**问题，引发了用户的强烈担忧。项目似乎正处于 v1.0 正式版发布前的关键阵痛期，稳定性修复成为当前的绝对焦点。

### 2. 版本发布
*今日无正式 Release 发布。*
*注：根据 PR 记录，项目进行了 `bumping version to 1.0.0b1` ([#2358](https://github.com/agentscope-ai/CoPaw/pull/2358)) 的版本标记操作，暗示团队正在筹备 v1.0 的首个 Beta 测试版本，这可能意味着即将到来的 v1.0 将包含重大的上下文管理重构。*

### 3. 项目进展
今日合并的 PR 显示项目在架构重构和渠道稳定性上取得了实质性进展：
- **飞书渠道 修复** ([#2311](https://github.com/agentscope-ai/CoPaw/pull/2311)): 针对 WebSocket 断连导致进程崩溃的 P0 级 Bug 提交了修复，增加了自动重连、过时消息过滤及静默断开检测机制。
- **控制台安全加固** ([#2367](https://github.com/agentscope-ai/CoPaw/pull/2367)): 针对今日热议的“会话误删导致数据丢失”问题，通过增加时间戳快照 (`chats.json.backup-*`) 和后端载荷校验，强化了会话删除流程。
- **多模态支持增强** ([#2332](https://github.com/agentscope-ai/CoPaw/pull/2332)): 在历史消息和流式传输中增加了多模态内容的预览支持。
- **技能系统重构 (WIP)** ([#2173](https://github.com/agentscope-ai/CoPaw/pull/2173)): 推进了技能池和工作区架构的重构，旨在解决技能管理混乱的问题。
- **企业级功能** ([#2308](https://github.com/agentscope-ai/CoPaw/pull/2308)): 新增基于 AnalyticDB (ADBPG) 的长期持久化内存管理器，支持跨会话记忆。

### 4. 社区热点
今日讨论最热烈的话题集中在**用户体验**和**数据安全**上：
- **[#280 Discussion: Which Skills and MCPs Can Be Built-in?](https://github.com/agentscope-ai/CoPaw/issues/280)** (21 评论): 持续高热。社区正在激烈讨论哪些 Skills 和 MCP (Model Context Protocol) 应该被内置，反映出用户对“开箱即用”体验的强烈渴望。
- **[#1911 [channel] 小艺](https://github.com/agentscope-ai/CoPaw/issues/1911)** (19 评论): 关于华为“小艺”渠道接入的故障排查。用户反馈在手机端无法正常对话，涉及渠道 API 配置与白名单问题，显示出非标准渠道接入的复杂性。
- **[#2327 Bug: Deleting One Chat Session Deletes All Sessions](https://github.com/agentscope-ai/CoPaw/issues/2327)** (5 评论): **数据安全热点**。用户报告删除单个会话导致所有会话丢失，该问题已迅速得到响应并合并了修复 PR ([#2367](https://github.com/agentscope-ai/CoPaw/pull/2367))。

### 5. Bug 与稳定性
今日报告的 Bug 严重程度较高，部分直接影响核心使用：
- **[P0-严重] 数据丢失**
  - **会话删除逻辑错误** ([#2327](https://github.com/agentscope-ai/CoPaw/issues/2327)): 删除一个会话导致所有会话被清空。
  - **状态**: ✅ 已修复 ([#2367](https://github.com/agentscope-ai/CoPaw/pull/2367))，建议用户尽快更新。
- **[P0-严重] 崩溃与连接**
  - **飞书 WebSocket 断连** ([#2336](https://github.com/agentscope-ai/CoPaw/issues/2336)): 导致服务无响应，需重启服务。
  - **状态**: ✅ 已修复 ([#2311](https://github.com/agentscope-ai/CoPaw/pull/2311))。
  - **Web UI 进不去** ([#2293](https://github.com/agentscope-ai/CoPaw/issues/2293)): 因 QA Agent 操作导致 JS 语法错误，UI 崩溃。
- **[P1-核心逻辑] 上下文与内存**
  - **上下文压缩产生幻觉** ([#2092](https://github.com/agentscope-ai/CoPaw/issues/2092), [#1437](https://github.com/agentscope-ai/CoPaw/issues/1437)): 压缩功能虚构了不存在的消息内容并注入上下文，严重影响 AI 逻辑。
  - **压缩导致任务中断** ([#1974](https://github.com/agentscope-ai/CoPaw/issues/1974)): 压缩任务开始后，正在执行的任务被迫停止且无法继续。
  - **压缩频繁失败** ([#2356](https://github.com/agentscope-ai/CoPaw/issues/2356)): 缺少保护机制，导致会话无法继续。
  - **Web Console 出现 JSON 内容** ([#1960](https://github.com/agentscope-ai/CoPaw/issues/1960)): 前端渲染错误。
- **[P2-性能与资源]**
  - **CPU 100% 占用** ([#2348](https://github.com/agentscope-ai/CoPaw/issues/2348)): Worker 进程在无负载下异常占用 CPU。
  - **Embedding 导致 LLM 卡死** ([#2343](https://github.com/agentscope-ai/CoPaw/issues/2343)): 加载 Embedding 模型后，LLM 任务被卡住。

### 6. 功能请求与路线图信号
从 Issues 和 PR 中观察到以下潜在路线图方向：
- **多用户/权限管理** ([#2324](https://github.com/agentscope-ai/CoPaw/issues/2324)): 用户询问是否支持多用户注册及管理员角色，目前被关闭，但反映出企业级部署的需求。
- **模型提供商无关性** ([#2314](https://github.com/agentscope-ai/CoPaw/issues/2314)): 请求支持在同一会话中自由切换不同的模型提供商（如 OpenAI/Anthropic），这是一个迈向高级编排的重要信号。
- **技能检索增强** ([#2323](https://github.com/agentscope-ai/CoPaw/issues/2323)): 建议为 Skill 系统添加基于 Tags 的索引，以解决 LLM 难以准确匹配 Function 的问题。
- **交互优化** ([#2365](https://github.com/agentscope-ai/CoPaw/issues/2365)): 请求显示 Agent 思考过程并延迟折叠；[#2281](https://github.com/agentscope-ai/CoPaw/issues/2281) 请求以 Tab 页形式支持多 Agent 并行操作。

### 7. 用户反馈摘要
- **痛点**：
  - **内存/上下文管理是最大痛点**：多位用户抱怨压缩功能不可靠（幻觉、中断、失败），导致无法进行长对话或完成长任务。
  - **稳定性令人担忧**：除了数据丢失 Bug，还有用户反馈 Web UI 崩溃、Worker 进程 CPU 飙升等问题。
  - **调试困难**：用户在自定义 Skill 时遇到 `FunctionNotFoundError` ([#2339](https://github.com/agentscope-ai/CoPaw/issues/2339))，且 Skill 的目录结构配置不够直观。
- **满意点**：
  - 渠道多样性受到关注（新增 GitHub Copilot provider ([#2366](https://github.com/agentscope-ai/CoPaw/pull/2366)) 和 微信 iLink 支持 ([#2260](https://github.com/agentscope-ai/CoPaw/pull/2260))）。
  - 开发团队响应速度极快（如数据丢失 Bug 在当天即有修复 PR）。

### 8. 待处理积压
- **长期未解决 Bug**: 语言设置无法持久化 ([#1604](https://github.com/agentscope-ai/CoPaw/issues/1604))，虽然 MacOS 用户反馈重启后恢复英文，但至今尚未彻底解决。
- **架构重构风险**: 上下文管理 v2.0 的重构 ([#2300](https://github.com/agentscope-ai/CoPaw/pull/2300)) 虽已合并，但从用户反馈来看，新的压缩逻辑引入了新的问题（幻觉、中断），需要持续关注后续修复。
- **配置复杂性**: 支持私有网关 ([#2296](https://github.com/agentscope-ai/CoPaw/issues/2296)) 和 Cron 功能 ([#2251](https://github.com/agentscope-ai/CoPaw/issues/2251)) 的配置问题显示出目前企业内网部署门槛较高。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 (2026-03-27)

## 📅 今日速览
ZeptoClaw 项目今日呈现**极高活跃度**，处于快速迭代状态。过去 24 小时内处理了 **37 个代码变更项**（Issues + PRs），显示出强劲的开发势头。项目刚刚发布了 **v0.9.0** 和 **v0.9.1** 两个版本，核心功能（如 Google Vertex AI 集成、Telegram 交互体验）取得重大进展。目前代码库中有大量针对 Telegram 渠道的修复 PR 正在排队合并，维护者正集中精力解决消息发送与用户体验的边缘情况。整体项目健康度极高，开发流程顺畅。

## 🚀 版本发布
**发布版本：v0.9.1 & v0.9.0**
今日连续发布两个版本，标志着项目在稳定性与企业级支持上的双重提升。

*   **v0.9.1 (Hotfix)**: 快速修复了两个关键配置问题。
    *   **Fix**: 修复了 Onboarding（引导配置）流程中模型选择的逻辑，现在优先选择 Provider 并过滤掉非聊天模型（如 embeddings/legacy）。
    *   **Fix**: 修复了 Anthropic 配置为 `null` 时仍尝试导入 Claude CLI token 导致的 Provider 不匹配错误。
*   **v0.9.0 (Feature Release)**: 引入备受期待的企业级功能与交互增强。
    *   **✨ Google Vertex AI Provider**: 原生支持 Gemini 模型，集成 ADC 自动刷新认证，无需手动管理 Token，支持区域端点。
    *   **✨ Telegram Reactions**: 新增视觉反馈机制，收到消息显示 👀，处理完成显示 ✅，显著提升用户感知的响应速度。
*   **迁移注意**: 使用 Claude CLI token 作为备用凭据的用户需注意，若配置中显式将 `anthropic` 设为 `null`，导入逻辑将被跳过。

## 🔨 项目进展
今日共有 **24 个 PR 成功合并**，项目在 **Provider 生态**、**Telegram 体验** 和 **工程化** 三个维度均有显著推进。

*   **🌐 Provider 生态扩展**
    *   合并了 **Google Vertex AI provider** ([#447](https://github.com/qhkm/zeptoclaw/pull/447))，实现了企业级 bearer token / ADC 认证支持，扩展了云端模型的选择范围。
*   **💬 Telegram 交互体验重构 (UX Overhaul)**
    *   **视觉反馈**: 引入 Emoji 反应机制 ([#433](https://github.com/qhkm/zeptoclaw/pull/433))，解决了用户不知道 Bot 是否正在工作的痛点。
    *   **消息组织**: 增加了 Reply-to Threading ([#429](https://github.com/qhkm/zeptoclaw/pull/429))，在群聊中对话更清晰。
    *   **多媒体支持**: 增加了对照片和图像文档的支持 ([#420](https://github.com/qhkm/zeptoclaw/pull/420))，不再忽略图片消息。
    *   **XSS 防护**: 修复了渲染链接时的 HTML 属性转义问题 ([#443](https://github.com/qhkm/zeptoclaw/pull/443))，提升了安全性。
*   **🛠️ 工程化与修复**
    *   **容器检测**: 优化了容器引擎检测脚本 ([#441](https://github.com/qhkm/zeptoclaw/pull/441))，解决了 Podman 与 Docker 共存时的误判问题。
    *   **NFC 字符处理**: 重写了 Unicode 组合字符的偏移量映射逻辑 ([#445](https://github.com/qhkm/zeptoclaw/pull/445))，确保搜索和引用的准确性。

## 🔥 社区热点
今日讨论集中在 **Telegram 渠道的稳定性**与 **安全性增强** 上。

*   **[讨论] Telegram 长消息与错误处理**
    *   **Issue**: [#456](https://github.com/qhkm/zeptoclaw/issues/456) - 4096 字符限制导致消息丢失且错误不回传。
    *   **状态**: 已有修复 PR [#458](https://github.com/qhkm/zeptoclaw/pull/458) (Open)。
    *   **分析**: 社区非常重视 Telegram 机器人的可靠性。当前的痛点是 AI 生成内容过长时用户会面临“静默失败”，这是急需解决的高优先级体验问题。
*   **[讨论] 安全性：SSRF 防护**
    *   **Issue**: [#450](https://github.com/qhkm/zeptoclaw/issues/450) - 建议在配置/Onboard 阶段验证 Provider 端点。
    *   **分析**: 这是一个积极的安全信号，表明项目正在向企业级安全标准看齐，防止 SSRF 攻击从配置层面入手。
*   **[讨论] 安全性：供应链完整性**
    *   **Issue**: [#449](https://github.com/qhkm/zeptoclaw/issues/449) - 建议为技能/插件下载增加 SHA256 校验。
    *   **分析**: 用户对插件系统的安全性提出了更高要求，参考 NemoClaw 的实现，ZeptoClaw 社区希望建立更可信的扩展加载机制。

## 🐞 Bug 与稳定性
今日报告的 Bug 主要集中在 **CLI 缺失引导** 和 **配置逻辑冲突**。

1.  **[P2-High] CLI 缺失特性报错不友好** ([#457](https://github.com/qhkm/zeptoclaw/issues/457))
    *   **现象**: 当编译时不含 panel 功能时，用户输入 `panel` 命令会报 Clap 错误（unrecognized subcommand）。
    *   **影响**: 用户不知道如何启用该功能或构建正确的二进制文件。
    *   **状态**: Open，待修复。
2.  **[Bug] Claude CLI Token 导入冲突** ([#454](https://github.com/qhkm/zeptoclaw/issues/454))
    *   **现象**: 即使 `anthropic` 配置为 `null`，系统仍尝试从 CLI 导入 token，导致默认模型非 Claude 时出错。
    *   **状态**: 已在 v0.9.1 中修复。

## 🚀 功能请求与路线图信号
从 Issues 中可以窥见项目接下来的重点方向：**隐私计算**、**声明式安全策略** 和 **配置流程优化**。

*   **隐私路由** ([#451](https://github.com/qhkm/zeptoclaw/issues/451)): 提议根据隐私敏感度自动路由请求（敏感发本地，非敏感发云端）。这符合 AI Agent 隐私保护的趋势。
*   **YAML 安全策略** ([#448](https://github.com/qhkm/zeptoclaw/issues/448)): 提议引入声明式 YAML 策略来管理网络和文件系统规则，向 NemoClaw 的安全架构靠拢。
*   **CLI Onboarding 重构** ([#453](https://github.com/qhkm/zeptoclaw/pull/453)): 已合并的 PR 显示，项目正在将“先配置后选模型”的流程改为“选 Provider -> 配置 -> 选模型”的顺滑流程。

## 📝 用户反馈摘要
*   **痛点**: Telegram 用户在 AI 生成长回复时会遇到“消息发送失败且无提示”的情况（Issue #456），体验类似于死机。
*   **痛点**: 在拥有 Podman 和 Docker 的混合环境中，之前的 lint 脚本会强制使用 Podman，令习惯 Docker 的用户感到困惑（Issue #435）。
*   **满意点**: 用户对新引入的 Vertex AI 支持和 Emoji 反应反馈表示积极（通过 PR 合并速率和 Issue 闭合推断）。

## ⏳ 待处理积压
*   **Issue #458 (PR)**: Telegram 消息分块与错误回退修复。虽然代码已就绪（PR Open），但尚未合并，是当前 Telegram 渠道最关键的阻塞点。
*   **Issue #450, #449, #448**: 一系列关于安全性的新提案（SSRF 验证、SHA256 校验、YAML 策略）。这些需要架构师评审以确定是否纳入 v0.10 路线图。

---
*数据来源: GitHub.com/qhkm/zeptoclaw | 分析日期: 2026-03-27*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

这是一份基于 2026-03-27 数据生成的 **EasyClaw** 项目动态日报。

---

# 📊 EasyClaw 项目日报 (2026-03-27)

**汇报对象**：开源维护者、社区贡献者、项目关注者
**数据范围**：2026-03-27 00:00 - 24:00
**项目当前状态**：🐢 低活跃期 / 📈 战略规划期

---

### 1. 今日速览
今日 EasyClaw 项目处于**低活跃度**状态，代码层面无新的合并或提交，处于静默期。然而，**社区战略层面**迎来了一个高价值的信号：尽管今日代码进展为 0，但一位具备资深背景（曾助力 AFFiNE 从 0 到 33k Stars）的贡献者提出了针对 "RivonClaw" 生态的社区增长提案。这表明项目虽然处于代码开发的间歇期，但外部关注度正在向生态建设转移。

### 2. 版本发布
*   **当前状态**：无新版本发布。
*   **说明**：项目代码库今日无变动，未触发新的 Release 流程。

### 3. 项目进展
*   **代码合并**：今日无 PR 合并。
*   **进度评估**：项目核心功能在今日未向前推进（0 行代码变更），处于功能冻结或等待下一个开发周期的状态。

### 4. 社区热点
今日唯一的焦点集中在一条高价值的社区讨论帖，涉及子项目 **RivonClaw** 的定位与增长：

*   🔥 **[Issue #27] Community Growth Strategy for RivonClaw**
    *   **链接**：[gaoyangz77/rivonclaw#27](https://github.com/gaoyangz77/rivonclaw/issues/27)
    *   **热度分析**：该 Issue 由用户 Gingiris 发起。虽然目前评论数为 0，但鉴于作者提到的背景（参与过 AFFiNE 的爆发式增长），该提案的**战略权重**极高。
    *   **核心诉求**：作者指出 RivonClaw 在 6 周内获得 246 Stars 是一个良好的开端，建议进一步明确其“数字管家” 的定位，并提出了具体的增长策略观察。

### 5. Bug 与稳定性
*   **今日报告**：无新的 Bug 报告。
*   **稳定性评估**：代码库今日无变动，未引入新的回归问题或崩溃风险，系统维持现状。

### 6. 功能请求与路线图信号
*   **战略级输入**：虽然不是具体的功能 PR，**Issue #27** 本质上是一个关于产品路线图的宏观请求。
    *   **信号解读**：社区希望 RivonClaw 不仅仅是 OpenClaw 的上层应用，更应强化“个人 AI 助手/数字管家”的品牌心智。维护者可能需要考虑将“社区运营”和“品牌定位”纳入下一阶段的路线图中。

### 7. 用户反馈摘要
*   **正面反馈**：来自 Issue #27，外部用户对 RivonClaw 的 **"Digital Butler" (数字管家)** 定位表示赞赏，并认为 **246 stars in ~6 weeks**（约6周获得246星）是扎实的早期成绩。
*   **用户视角**：有经验的市场观察者认为项目潜力巨大，但需要更清晰的增长策略来突破现有的圈层。

### 8. 待处理积压
*   **⚠️ 需关注**：**[RivonClaw #27](https://github.com/gaoyangz77/rivonclaw/issues/27)** - 虽然是新提出的 Issue，但考虑到其潜在价值，建议维护者尽快回应。主动引入专业的社区增长建议可能对项目的长期发展至关重要，不应作为普通 Feature Request 长期搁置。

---
*🤖 本日报由 AI 助手基于 GitHub 公开活动数据自动生成与分析。*

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*