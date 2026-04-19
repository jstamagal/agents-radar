# OpenClaw 生态日报 2026-04-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-19 00:14 UTC

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

# OpenClaw 项目动态日报 (2026-04-19)

## 1. 今日速览
OpenClaw 项目今日处于**极高活跃度**状态，过去 24 小时内 Issues 和 Pull Requests 的更新量均达到 500 条，显示出社区极强的参与度和核心团队的高频迭代节奏。虽然无新版本发布，但代码库正经历大规模架构重构，特别是在**代理持久化**、**安全可信**及**媒体处理**三个方向上有显著进展。稳定性方面，虽然大量旧 Bug 被关闭（如内存泄漏、Trim 错误崩溃等），但近期 v2026.4.x 版本引入了若干回归问题，特别是配置管理和模型提供商适配方面的问题较为集中，需引起关注。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日核心进展主要集中在底层架构的健壮性和扩展性提升，以下是关键合并/关闭的 PR 及其影响：

*   **[架构] 引入持久化子代理作业队列** ([PR #68718](https://github.com/openclaw/openclaw/pull/68718))
    *   **进展**：引入了名为 `minions` 的 SQLite 支持的持久化作业队列。
    *   **意义**：解决了 Gateway 崩溃时丢失进行中工作的重大痛点。现在，子代理的超时、崩溃和重试机制将更加健壮，支持级联取消和幂等性，大幅提升了多代理协作的可靠性。
*   **[安全] 增强配置文件权限控制** ([PR #68722](https://github.com/openclaw/openclaw/pull/68722))
    *   **进展**：修复了配置文件写入后的权限设置问题，确保 `openclaw.json` 始终保持 `0o600` 权限。
    *   **意义**：防止了在某些 umask 设置下（如 systemd 默认配置）可能导致 API Key 泄露的安全风险。
*   **[功能] Prompt Hooks 支持动态工具裁剪** ([PR #68734](https://github.com/openclaw/openclaw/pull/68734))
    *   **进展**：允许插件在 `before_prompt_build` 阶段动态减少可用工具列表。
    *   **意义**：这对于降低 Token 消耗和通过 LLM 分类器来优化工具调用非常关键，提升了 Agent 的智能化水平。
*   **[体验] 完善 Cron 任务失败通知** ([PR #68717](https://github.com/openclaw/openclaw/pull/68717))
    *   **进展**：默认开启定时任务失败警报。
    *   **意义**：防止用户在后台任务持续失败时无法感知，改善了运维体验。
*   **[安全] 修复 Discord 权限验证漏洞** ([PR #68716](https://github.com/openclaw/openclaw/pull/68716))
    *   **进展**：确保 Discord 管理员操作在执行前验证请求者的权限。
    *   **意义**：修复了一个严重的安全漏洞，防止普通成员利用 Bot 执行特权操作。

## 4. 社区热点
今日讨论热度最高的议题集中在系统的**信任机制**与**稳定性反馈**：

*   **[RFC] 原生代理身份与信任验证** ([Issue #49971](https://github.com/openclaw/openclaw/issues/49971))
    *   **热度**：96 条评论。
    *   **分析**：这是社区关于解决恶意技能问题的核心提案。用户希望在 DID (W3C DID) 和 VC (可验证凭证) 标准上建立信任层，以应对 ClawHub 上出现的大量恶意技能。
*   **[Bug] v2026.3.12 内存泄漏** ([Issue #45064](https://github.com/openclaw/openclaw/issues/45064))
    *   **热度**：31 条评论，今日关闭。
    *   **分析**：涉及 CLI 基本命令崩溃（OOM），严重阻碍用户使用。该问题虽已关闭，但反映了近期版本在内存管理上的回归。
*   **[Bug] Docker 环境下 Skill 安装失败** ([Issue #14593](https://github.com/openclaw/openclaw/issues/14593))
    *   **热度**：24 条评论。
    *   **分析**：官方 Docker 镜像未安装 `brew`，导致基于 brew 的技能（如 openai-whisper）安装失败。用户反馈强烈，指出了容器化环境的基础工具链缺失问题。

## 5. Bug 与稳定性
今日报告的 Bug 中，**崩溃**和**配置兼容性**问题最为突出：

*   **🔴 严重 - 崩溃/阻塞**
    *   **更新失败 (2026.4.5)**: [Issue #62272](https://github.com/openclaw/openclaw/issues/62272) - 更新时报错找不到 `@buape/carbon` 模块。
    *   **配置崩溃**: [Issue #67353](https://github.com/openclaw/openclaw/issues/67353) / [#67074](https://github.com/openclaw/openclaw/issues/67074) - Onboarding 过程中在选择通道时出现 `TypeError: Cannot read properties of undefined (reading 'trim')`，导致无法完成初始化。**（今日已关闭）**
    *   **Venice 模型崩溃**: [Issue #67261](https://github.com/openclaw/openclaw/issues/67261) - 使用 Venice 模型时因响应格式缺失 `id` 而导致崩溃。
*   **🟠 中等 - 功能回归**
    *   **OpenRouter 集成故障**: [Issue #67698](https://github.com/openclaw/openclaw/issues/67698) / [#67575](https://github.com/openclaw/openclaw/issues/67575) - 尽管配置了有效的 API Key，但返回 `payloads=0` 错误，导致无响应。这是 v2026.4.14 的显著回退。
    *   **Agent 不执行任务**: [Issue #40082](https://github.com/openclaw/openclaw/issues/40082) - Agent 接受任务但仅返回占位符回复，实际任务未执行。
*   **🟢 轻微 - 用户体验**
    *   **UI 消息闪烁**: [Issue #66207](https://github.com/openclaw/openclaw/issues/66207) - Control UI 中发送的消息会短暂消失后再出现。**（今日已关闭）**
    *   **Ollama Provider 注册失效**: [Issue #57099](https://github.com/openclaw/openclaw/issues/57099) - v2026.3.28 升级后显式配置的 Ollama 提供商报错未注册。

## 6. 功能请求与路线图信号
从活跃的 PR 和 Issues 中可以看出下一阶段的功能方向：

*   **代理能力增强**:
    *   **行为信誉层**: [Issue #55342](https://github.com/openclaw/openclaw/issues/55342) 提出在身份验证之外建立基于行为的信誉系统，以识别恶意技能。
    *   **A2A 代理通信**: [PR #68550](https://github.com/openclaw/openclaw/pull/68550) / [#68548](https://github.com/openclaw/openclaw/pull/68548) 显示正在开发代理间的任务委派和取消传播机制。
*   **模型与平台支持**:
    *   **Gemma 4 支持**: [PR #68193](https://github.com/openclaw/openclaw/pull/68193) 正在添加对 Gemma 4 推理模型的检测和能力检查。
    *   **Bedrock Mantle 集成**: [PR #68730](https://github.com/openclaw/openclaw/pull/68730) 添加了 Claude Opus 4.7 在 AWS Bedrock Mantle 上的支持。
*   **媒体处理**: [PR #65554](https://github.com/openclaw/openclaw/pull/65554) 大幅扩展了 WebChat 的媒体支持，包括多种音频和图片格式的流式传输。

## 7. 用户反馈摘要
*   **痛点 - 稳定性**: 用户对 v2026.4.x 系列的稳定性表示担忧，特别是 **OpenRouter** 和 **Venice** 等提供商的适配问题导致生产环境中断（"incomplete turn detected"）。
*   **痛点 - 配置管理**: Docker 用户和更新用户对依赖缺失（`brew`, `@buape/carbon`）感到沮丧，认为开箱即用的体验有所下降。
*   **痛点 - 安全信任**: 针对 ClawHub 上的恶意技能问题，社区对 RFC #49971 反映热烈，认为仅靠人工审核已不足够，急需技术层面的身份验证机制。
*   **赞赏 - 功能丰富**: 用户对即将到来的 `minions` 队列和媒体支持功能表示期待，认为这些是 OpenClaw 对抗竞品的核心优势。

## 8. 待处理积压
以下为长期未解决但影响较大的 Issue，建议维护者优先关注：

*   **[Bug] Google-gemini-cli 60s 假死** ([Issue #36399](https://github.com/openclaw/openclaw/issues/36399)) - 多步工具调用因 OAuth 限流导致严重卡顿，虽然自建代理可缓解，但原生体验较差。
*   **[Bug] iMessage FDA 权限传递** ([Issue #5116](https://github.com/openclaw/openclaw/issues/5116)) - macOS 上通过 LaunchAgent 启动时无法继承完全磁盘访问权限，导致 iMessage 功能受限。
*   **[Bug] 子代理工具加载** ([Issue #41577](https://github.com/openclaw/openclaw/issues/41577)) - 子代理无法继承主代理的浏览器/Web 工具，限制了复杂任务的自动化能力。
*   **[Bug] 会话上下文混乱** ([Issue #32296](https://github.com/openclaw/openclaw/issues/32296)) - Agent 经常回复上一条消息而非当前消息，严重影响对话体验。

---

## 横向生态对比

以下是基于 2026-04-19 社区数据生成的横向对比分析报告。

---

# 2026-04-19 个人 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
当前个人 AI 智能体开源生态正处于从**“功能爆发期”向“架构成熟期”**过渡的关键阶段。头部项目（如 OpenClaw, NanoClaw, Zeroclaw）均在进行大规模的底层重构，重心从单纯增加模型支持转向提升系统的**持久化能力、安全性及多模态交互**。社区活跃度极高，但普遍面临**版本升级带来的稳定性阵痛**，特别是配置迁移、API 兼容性回归以及本地模型集成时的 Bug 较为集中。与此同时，针对企业级和边缘场景的细分需求（如代码索引、离线部署、去中心化通信）正在催生出一批差异化明显的竞争者。

## 2. 各项目活跃度对比

| 项目 | 今日 Issues/PRs | 版本状态 | 健康度/态势 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ (极高) | 无发布 (重构中) | ⚠️ **过热/回归期**。开发活跃度榜首，但架构变动引发大量稳定性 Bug (配置/模型适配)。 |
| **Zeroclaw** | 95 (高) | v0.7.0-beta | 🔄 **架构切换期**。经历史诗级重构 (Workspace/Crates)，Docker/文档问题引发用户不满。 |
| **IronClaw** | 68 (中高) | 无发布 | 🏗️ **平台化重构**。致力于 Gateway 解耦和 Secrets 管理，PR 积压较多，测试覆盖度待提升。 |
| **NanoClaw** | 50+ (高) | v2 (重构收尾) | ✅ **冲刺期**。架构模块化接近完成，新增 CLI 和 Codex 支持，整体健康度高。 |
| **NanoBot** | 79 (高) | 无发布 | 🐛 **快速迭代**。聚焦记忆系统与可观测性，但在 API 兼容性和环境变量解析上有严重 Bug。 |
| **Moltis** | 15 (中) | 无发布 | 💪 **稳健推进**。活跃合并代码索引和 WebUI TS 重构，Bug 响应极快，项目状态健康。 |
| **PicoClaw** | 19 (中) | v0.2.6-nightly | 🚨 **发布危机**。新版本引发严重的 Provider 授权失效，属于“带病发布”。 |
| **NullClaw** | 19 (中) | 无发布 | 🔧 **功能聚焦**。重点打磨多工作区和工具定制系统，维护者响应极快。 |
| **LobsterAI** | 2 (极低) | 无发布 | 😴 **维护停滞**。仅 2 个待合并 PR，无社区讨论，项目几近休眠。 |
| **CoPaw** | 26 (中) | 无发布 | 🐛 **体验优化**。引入前端测试框架，但 Windows 兼容性和模型路由问题仍是痛点。 |

## 3. OpenClaw 在生态中的定位
*   **绝对领导地位与争议并存**：OpenClaw 以单日 500+ 的更新量稳居生态核心，其**“插件市场”** 生态最为成熟，社区贡献者基数最大。
*   **技术路线差异**：相比其他项目专注于 Agent 自身能力的重构，OpenClaw 正试图构建**基础设施层**（如 Minions 持久化队列、DID 身份验证 RFC），意在解决多 Agent 协作的底层可靠性和信任问题。
*   **社区规模**：其 Issues 讨论热度（如 RFC #49971）远超其他项目，显示出极强的社区自驱力，但也因高频迭代导致近期版本稳定性不如日趋成熟的 **NanoClaw** 或 **Moltis**。

## 4. 共同关注的技术方向
*   **记忆系统的深度化与持久化**
    *   **涉及项目**：OpenClaw, NanoBot, Moltis, CoPaw
    *   **具体诉求**：不再满足于简单的 RAG，而是转向**长时记忆**、**记忆整合/反思** 和 **代码级索引**。OpenClaw 引入 SQLite 队列防止丢失，Moltis 引入 FTS5 代码索引，NanoBot 探讨压缩策略。
*   **多模态与自动化交互 (CDP/Browser)**
    *   **涉及项目**：PicoClaw, OpenClaw, Moltis
    *   **具体诉求**：通过 Chrome DevTools Protocol (CDP) 直接控制浏览器成为趋势，PicoClaw 和 Moltis 均在推进相关工作流，以突破纯文本交互的限制。
*   **安全性、沙箱与身份验证**
    *   **涉及项目**：OpenClaw, Zeroclaw, NanoClaw, IronClaw
    *   **具体诉求**：随着 Agent 能力增强，风险控制成为焦点。OpenClaw 提议 DID 标准，Zeroclaw 和 IronClaw 忙于修复 Shell 沙箱/权限漏洞，NanoClaw 剥离了高风险的自修改模块。
*   **本地模型与私有部署体验**
    *   **涉及项目**：LobsterAI, PicoClaw, CoPaw, NanoBot
    *   **具体诉求**：对 LM Studio, Ollama 等本地运行时的深度适配，以及 Docker 化部署的易用性（Docker 缺少 brew、构建失败等是高频痛点）。

## 5. 差异化定位分析
*   **OpenClaw**：**全能型生态平台**。特点是“大而全”，拥有最丰富的插件市场和通道支持，适合愿意折腾、追求极致功能覆盖的极客用户。*短板：稳定性波动大。*
*   **NanoClaw**：**现代化极客框架**。采用 Rust/Module 化架构，定位轻量、快速、安全。新增 CLI 通道和 Codex 支持，深受追求架构美学的开发者喜爱。*短板：生态圈相对较小。*
*   **Zeroclaw**：**Rust 性能与安全派**。主打高性能和极致的资源控制，正在进行 Workspace 级别的架构拆分。适合对并发、资源占用有严格要求的场景。*短板：配置门槛极高。*
*   **Moltis**：**代码感知型开发者助手**。独特地集成了代码库索引 和 AST 分割，专注于“开发场景”的自动化，是写代码 Copilot 的强力竞争者。*短板：通用任务生态较弱。*
*   **IronClaw**：**企业级平台雏形**。致力于 Gateway 解耦、多账户管理和测试覆盖，其架构设计最接近商业 SaaS 产品。*短板：大型 PR (如 Aliyun) 积压严重，迭代略慢。*
*   **PicoClaw / CoPaw**：**终端与移动端探索者**。PicoClaw 专注于边缘设备 和浏览器控制，CoPaw (QwenPaw) 则依托模型能力探索多模态 UI。

## 6. 社区热度与成熟度
*   **快速迭代期 (高热度，高变动)**：OpenClaw, Zeroclaw, NanoClaw。这三个项目正处于架构剧烈变动期，每天都有大量新功能合入，但也伴随着频繁的 Breaking Changes。
*   **质量巩固期 (中高热度，稳中有进)**：Moltis, IronClaw。这两个项目在积极引入新功能（代码索引、重构）的同时，保持了较好的 Bug 修复节奏和文档更新。
*   **维护停滞/低谷期**：LobsterAI。社区活跃度极低，项目方向不明。

## 7. 值得关注的趋势信号
1.  **"Agent Shield" 与安全合规**：从 PicoClaw 的 Agent Shield 到 OpenClaw 的 DID 验证，**安全与信任**正在从“可选项”变为“必选项”。未来的 Agent 框架将内置更严格的权限管控和身份层。
2.  **Native Client vs. Web Container 的博弈**：Moltis 和 PicoClaw 均在强化对浏览器和移动端 的控制能力，暗示 Agent 的交互战场正从 CLI/WebChat 转向对**用户操作界面的直接自动化**。
3.  **“思考”过程的显性化与可观测性**：OpenClaw 和 CoPaw 都在优化流式输出和内部思考过程 的展示。用户不再满足于只看到结果，他们希望**监控 Agent 的推理链**，以便调试和建立信任。
4.  **构建系统的复杂度门槛**：Zeroclaw 和 OpenClaw 今日爆发的 Docker/构建问题表明，随着功能复杂化（如 Workspace 分割、多语言依赖），**“开箱即用”** 正变得越来越难。简化部署链路将成为下一阶段的竞争关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-19)

## 📊 今日速览
NanoBot 项目今日呈现出极高的活跃度，过去 24 小时内不仅有 54 条 PR 更新，还有 25 条新 Issues 被提出或更新。社区讨论焦点主要集中在**长期记忆系统的局限性**与**Agent 架构的稳定性**上。虽然核心功能没有出现严重的“P0 级”阻断性 Bug，但关于配置解析、API 兼容性以及 Gateway 运维体验的反馈较为集中。项目正在快速迭代中，核心团队与社区贡献者正协同推进多项重构工作。

## 🚀 版本发布
**当前无新版本发布。**
尽管代码库更新频繁，目前暂未生成新的 Release tag。鉴于大量 PR（如 Issue 模板、Consolidate Ratio 配置化等）已合并，预计近期可能会有一次功能集成的版本更新。

## 🛠️ 项目进展
今日代码库有许多关键合并与修复，项目在稳定性、可观测性和配置灵活性上迈出了重要一步：

*   **可观测性与性能**：[PR #3204](https://github.com/HKUDS/nanobot/pull/3204) 引入了 `ProfilingHook`，允许开发者通过环境变量开启 LLM 迭代计时的性能分析，有助于优化长时运行任务的性能瓶颈。
*   **运维体验改进**：[PR #3291](https://github.com/HKUDS/nanobot/pull/3291) 合并了 Gateway 生命周期通知功能（`on_start`/`on_stop`），解决了用户在使用 systemd 部署时无法感知服务状态的痛点。
*   **内存安全防护**：[PR #3202](https://github.com/HKUDS/nanobot/pull/3202) 为 MessageBus 的入站队列增加了边界限制，防止 Agent 处理滞后时发生无界内存增长，显著提升了系统稳定性。
*   **开发规范建设**：[PR #3287](https://github.com/HKUDS/nanobot/pull/3287) 添加了 Issue 和 PR 模板。这将大幅提升 Issue 质量，帮助维护者快速定位环境信息和复现步骤。
*   **Bug 修复**：[PR #3289](https://github.com/HKUDS/nanobot/pull/3289) 修复了 GitStore 初始化嵌套仓库并覆盖 `.gitignore` 的问题；[PR #3280](https://github.com/HKUDS/nanobot/pull/3280) 修复了 Discord 频道无法进行 Bot-to-Bot 通信的逻辑缺陷。

## 🔥 社区热点
今日讨论热度最高的议题集中在记忆系统的设计与长期任务的可靠性：

*   **[Issue #3227](https://github.com/HKUDS/nanobot/issues/3227)** *(13 评论)*: 用户深度反馈了记忆系统在长期/大型项目中的局限性。虽然 Issue 已关闭，但关于 `history.jsonl` 和 `MEMORY.md` 在上下文窗口注入时的细节丢失问题引发了广泛共鸣，这代表了核心用户对“持久化记忆深度”的迫切需求。
*   **[Issue #3206](https://github.com/HKUDS/nanobot/issues/3206)** *(5 评论)*: Gemini Provider 遭遇 400 错误，提示接收到多重认证凭据。这反映了用户在使用多 Provider 或特定网关时的配置困惑。
*   **[Issue #3274](https://github.com/HKUDS/nanobot/issues/3274)** *(4 评论)*: 社区正在深入探讨 `maybe_consolidate_by_tokens()` 与 `AutoCompact._archive()` 的注入策略差异，显示出高级用户对记忆压缩机制底层的关注。

## 🐛 Bug 与稳定性
今日报告的主要 Bug 涉及配置解析、Provider 兼容性及核心循环逻辑：

*   **[配置解析静默失败] #3251**: `config.json` 中支持 `${VAR}` 语法但未实际解析，导致鉴权失败。严重程度：**高**。影响 DeskClaw/Feishu 等依赖环境变量的部署场景。
*   **[API 兼容性] #3220**: Agent 在遇到非规范 API 网关（`finish_reason` 不为 tool_calls 但包含 tool_calls）时会进入无限空调用循环。严重程度：**高**。已有相关修复 PR 正在审查中。
*   **[流式中断] #3256**: LLM 流式响应中途被切断时不进行重试，导致部分响应被当作成功处理。
*   **[文件提取] #3250**: PPTX 文件解析丢失表格和组合形状中的文本。
*   **[环境检测] #3271**: Rich 渲染器在非 TTY 环境（如 Docker pipe）下输出乱码，已由 [PR #3271](https://github.com/HKUDS/nanobot/pull/3271) 修复。

## 💡 功能请求与路线图信号
用户提出的新需求揭示了未来的改进方向：

*   **可配置的压缩比**: [Issue #3270](https://github.com/HKUDS/nanobot/issues/3270) 建议将记忆压缩比设为可配置项，而非硬编码。目前 [PR #3285](https://github.com/HKUDS/nanobot/pull/3285) 已提出并正在积极开发中，预计很快合入。
*   **Session 级别的任务焦点**: [Issue #3292](https://github.com/HKUDS/nanobot/issues/3292) 请求引入“任务锚点”工具，使 Agent 在被打断后能自动回到主任务，模仿人类的任务管理能力。
*   **WebSocket 支持**: [PR #3286](https://github.com/HKUDS/nanobot/pull/3286) 正在开发 WebSocket 会话生命周期和 Delta 流式传输，这是构建更实时交互界面的重要信号。
*   **历史文件读取**: [PR #3263](https://github.com/HKUDS/nanobot/pull/3263) 提出引导 LLM 按需读取全量会话历史文件，以缓解多轮对话中的上下文压缩问题。

## 🗣️ 用户反馈摘要
*   **正面反馈**: 用户 *kxsk-git* 在 [Issue #3227](https://github.com/HKUDS/nanobot/issues/3227) 中盛赞代码“整洁、轻巧、容易上手”，对比 OpenClaw 表示 NanoBot 是很好的学习方向。
*   **痛点与抱怨**: 用户 *faderzz* 在 [Issue #3267](https://github.com/HKUDS/nanobot/issues/3267) 中因缺乏卸载文档和无法彻底删除服务而感到沮丧，反映出**文档覆盖面（特别是运维/卸载部分）**仍有缺失。用户 *pblocz* 在 [Issue #3282](https://github.com/HKUDS/nanobot/issues/3282) 中抱怨新的 Dream 过程引入了噪声，导致技能漂移，希望能有更多配置控制权。

## 📅 待处理积压
*   **长期问题**: [Issue #237](https://github.com/HKUDS/nanobot/issues/237) (为什么需要手动集成 Provider 而不是用 LiteLLM?) 今日被标记为 Stale 并关闭。虽然暂无计划，但这代表了用户对于生态集成的某种愿景。
*   **Web Search 稳定性**: [Issue #2804](https://github.com/HKUDS/nanobot/issues/2804) 和 [Issue #2071](https://github.com/HKUDS/nanobot/issues/2071) 均指向 DuckDuckGo 搜索组件的不可用或挂起问题，至今未完全解决。
*   **语音交互**: [Issue #1106](https://github.com/HKUDS/nanobot/issues/1106) 关于语音对话的需求再次被标记为 Stale，显示该功能优先级较低。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报
**日期**：2026-04-19
**分析师**：AI 智能体与个人助手领域观察员

---

## 1. 今日速览
Zeroclaw 项目今日处于**极高活跃度**状态。过去 24 小时内共产生了 **95 条**更新（Issues 49 + PRs 46），显示出社区与核心团队正围绕 **v0.7.0** 的大规模架构重构进行激烈的“磨合”与调整。虽然新版本已发布，但 **Docker 镜像构建**与 **Web Dashboard** 缺失等问题引发了一系列连锁 Bug，导致部分工作流受阻（S1 级别严重性）。同时，项目正着手优化 CI/CD 流程，致力于解决长期存在的文档与开发者体验问题。整体来看，项目正从快速迭代转向“治理与稳定性”的夯实阶段。

---

## 2. 版本发布
**核心更新**：Zeroclaw 发布了两个 Beta 版本 **v0.7.1-beta.1049** 和 **v0.7.0-beta.1047**。
**v0.7.0 变更摘要**：
*   **架构重构**：这是 ZeroClaw 历史上最大规模的结构性调整，整个代码库已拆分为专注于特定功能的 Cargo workspace crates。
*   **配置迁移**：引入了全新的配置 schema，并包含自动迁移脚本。
*   **发布日志**：[Release v0.7.0-beta.1047](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1047)

---

## 3. 项目进展
今日合并的 PR 主要集中在修复 v0.7.0 重构引入的破坏性变更，以及补全基础设施。

*   **[CI/CD]** 将发布工作流从 Personal Access Tokens (PAT) 迁移至 GitHub App Token (#5881, #5888)。此举消除了对个人 Token 的依赖，提升了发布流程的安全性与自动化程度。
*   **[Docker]** 修复了 Dockerfile 因代码库拆分为 workspace crates 而导致的构建失败问题。此前仅复制部分 manifest 导致构建中断，现已补全所有 14 个 crate 的 `COPY` 指令 (#5879)。
*   **[Channels]** Webhook 通道新增**指数退避重试机制** (#5838)，解决了网络抖动或限速（429/5xx）导致的消息丢失问题，增强了通信稳定性。
*   **[Channels]** Signal 通道支持**富文本渲染** (#5826) 和 **媒体附件处理** (#5832)，显著提升了 Signal 用户的交互体验。
*   **[Multimodal]** 加强了多模态图片标记解析器的鲁棒性 (#5864)，防止因单个恶意标记导致整个会话陷入不可恢复的循环。

---

## 4. 社区热点
今日社区讨论集中在 **v0.7.0 升级后的可用性危机**以及 **开发者体验的改进提案**。

*   **[热点 Issue #4866 & #5348] [CLOSED] Web dashboard 不可用**
    *   **链接**：[#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348)
    *   **分析**：大量用户反馈在运行 Tauri 桌面版或 Gateway 时无法加载 Web UI，提示 "Build it with: cd web && npm ci..."。这两个 Issues 合计吸引了近 20 条评论。虽然 Issue 已关闭（可能是被归类到新 Issue 或随着新版本修复），但这暴露了 v0.6.9 到 v0.7.0 过渡中严重的构建打包缺陷。用户痛点在于期望“开箱即用”，却被迫进行源码级编译。

*   **[热点 RFC #5787] RFC: Replace TOML i18n with Mozilla Fluent**
    *   **链接**：[#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787)
    *   **分析**：这是一份重要的技术改进提案。用户建议抛弃手写的 TOML 国际化方案，转用 Mozilla Fluent (`.ftl`)，并移除代码库内的翻译文档。这反映了核心贡献者希望减轻维护负担，将文档/wiki 国际化从核心代码库剥离的趋势。

*   **[热门 PR #5606] 修复流式推理内容丢失**
    *   **链接**：[#5606](https://github.com/zeroclaw-labs/zeroclaw/pull/5606)
    *   **分析**：针对 Kimi 等 LLM 提供商的兼容性修复。此前流式调用的 `reasoning_content` 在重放时被丢弃，导致 API 返回 400 错误。该 PR 持续引发关注，显示了社区对支持 DeepSeek/Kimi 等推理模型的强烈需求。

---

## 5. Bug 与稳定性
今日报告的 Bug 呈现两极分化：既有严重的架构问题，也有细节的体验瑕疵。

*   **🔴 S1 - [Runtime] `voice-wake` feature 在 v0.6.9 编译失败** (#5861)
    *   **链接**：[#5861](https://github.com/zeroclaw-labs/zeroclaw/issues/5861)
    *   **描述**：由于依赖项版本冲突（cpal/rustc），导致语音唤醒功能无法在 Arch Linux 等环境编译。这是关键功能回归，阻塞了语音交互用户。
    *   **状态**：OPEN，等待修复。

*   **🔴 S1 - [Provider] Provider 忽略 `llamacpp` 对象配置** (#5815)
    *   **链接**：[#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815)
    *   **描述**：v0.7.0 的新 Schema v2 导致 llama.cpp 的特定模型配置被完全忽略，回退到默认值。这导致本地 LLM 用户无法正确配置模型。
    *   **状态**：OPEN，高优先级。

*   **🟠 S2 - [Security] Shell 工具策略误屏蔽 `git -C` 命令** (#5809)
    *   **链接**：[#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809)
    *   **描述**：Shell 沙箱策略错误地将参数小写化，导致 `git -C <path>` 被误判为 `-c` 配置命令而拒绝执行。这是一个典型的过度严格限制导致的可用性问题。

*   **🟠 S2 - [Memory] 记忆检索导致过度依赖历史** (#5844)
    *   **链接**：[#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)
    *   **描述**：用户反馈 Agent 在 Cron 任务中过分关注记忆而忽略当前 Prompt，导致执行偏差。这属于模型行为层面的稳定性问题。

---

## 6. 功能请求与路线图信号
从今日的 Issues 中可以看出，下一阶段的方向主要集中在**安全精细化**和**深度学习能力**。

*   **[Feature] Dream Mode — 周期性记忆整合与反思学习** (#5849)
    *   **链接**：[#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)
    *   **信号**：🌟🌟🌟 这是一个非常有前瞻性的需求。提出让 Agent 在闲置时进入“梦境模式”，后台整合记忆并进行反思。这将显著提升 Agent 的“进化”能力，从单纯的工具使用者转变为具备自我更新能力的智能体。

*   **[Enhancement] 交互式通道审批** (#5741)
    *   **链接**：[#5741](https://github.com/zeroclaw-labs/zeroclaw/issues/5741)
    *   **信号**：针对 Telegram/Discord 等非 Web 通道，希望实现高风险操作的交互式审批（而非现在的自动拒绝），这对于在聊天软件中自动化工作流至关重要。

*   **[Enhancement] 会话所有权模型** (#5833)
    *   **链接**：[#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833)
    *   **信号**：安全增强。当前任何 Agent 都可以重置/删除其他 Agent 的会话。该请求要求建立所有权模型，防止误操作和恶意清理。

---

## 7. 用户反馈摘要
*   **“入门门槛过高”**：用户 (#3642) 抱怨为了使用 WhatsApp 等功能需要自己编译 Docker 镜像，因为官方默认禁用了这些特性以节省内存。这表明新用户渴望一个“全能版” Docker 镜像，哪怕它体积较大。
*   **“Python Skill 开发受阻”**：开发者 Jason Perlow 连续提交多个 Issues (#5720, #5721, #5722)，指出 ZeroClaw 的默认 Shell 沙箱配置和 Prompt 注入模式严重阻碍了 Python 类 Skill（如金融分析工具）的开发。这反映了在沙箱安全性与开发者灵活性之间需要更好的平衡。

---

## 8. 待处理积压
*   **[CI] v0.7.2 里程碑追踪** (#5877)
    *   **链接**：[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)
    *   **描述**：维护者已规划 v0.7.2 为维护版本，重点解决 CI 遗留问题、文档清理和语言标准化。需关注此 Issue 确保下一周期的稳定性。
*   **[Docs] 文档标准化 RFC** (#5576)
    *   **链接**：[#5576](https://github.com/zeroclaw-labs/zeroclaw/issues/5576)
    *   **描述**：该 RFC 涉及文档架构的重大调整，目前处于 Draft 状态。良好的文档架构对于降低因 v0.7.0 巨大变动带来的学习曲线至关重要。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这是一份基于 PicoClaw 项目 2026-04-19 GitHub 数据的详细动态日报。

---

# PicoClaw 项目日报 - 2026-04-19

## 1. 今日速览
PicoClaw 项目今日在 **v0.2.6** 发布后进入活跃的迭代期，社区反馈了大量与新版本相关的 Bug 报告（主要集中在 Provider 适配），显示出极高的用户测试参与度。**过去24小时共产生了 19 个更新事件**，项目在多端自动化（Android/Browser）和安全增强（Agent Shield）等长期规划功能上取得了代码层面的实质进展。目前社区最关注的问题集中在 AI 提供商的 API 兼容性以及企业级安全特性的缺失。

## 2. 版本发布
**新版本：v0.2.6-nightly.20260418**
- **状态**：已发布（Nightly 构建）
- **Commit**：6126ede9
- **内容**：这是一个基于 main 分支的自动构建版本。
- **注意事项**：Nightly 版本属于不稳定构建，建议谨慎使用。该版本紧随 v0.2.6 正式版之后，可能包含针对 v0.2.6 的紧急热修复或新特性测试。
- **完整变更日志**：[Compare v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

## 3. 项目进展
今日虽未显示有 PR 正式合并至 main 分支，但在待合并列表中有几个重要的功能性 PR 处于活跃讨论和审查阶段，预示着项目即将迎来下一波功能增长：

*   **浏览器自动化能力升级**
    *   **PR [#2410](https://github.com/sipeed/picoclaw/pull/2410)**: 实现了基于 **Chrome DevTools Protocol (CDP)** 的 `BrowserTool`。这将允许 PicoClaw 直接通过 WebSocket 控制 Chrome 浏览器，解决了 Issue #293 中提出的浏览器自动化需求。
*   **安全架构重构**
    *   **PR [#2313](https://github.com/sipeed/picoclaw/pull/2313)**: 集成了 **"Agent Shield" 安全套件**，为多用户支持、技能白名单和安全加固提供了底层支持，这标志着项目向企业级安全迈出了关键一步。
*   **MCP 协议支持增强**
    *   **PR [#2535](https://github.com/sipeed/picoclaw/pull/2535)**: 增加了用于管理 MCP (Model Context Protocol) 服务器的斜杠命令（如 `/list mcp`），提升了用户在聊天渠道中管理和调试 MCP 工具的体验。
*   **内核架构优化**
    *   **PR [#2551](https://github.com/sipeed/picoclaw/pull/2551)**: 标准化了渠道识别逻辑，解耦了渠道名称与提供商类型，为未来支持同一提供商的多个实例奠定了基础。

## 4. 社区热点
今日讨论最活跃的板块集中在 **移动端/多端适配** 和 **企业级功能** 上：

*   **🔥 热门讨论：Android 自动化生态**
    *   **Issue [#292](https://github.com/sipeed/picoclaw/issues/292)**: "Android Device Automation & Remote Operations"。该 Issue 重新进入视野，社区渴望 PicoClaw 能像 "Botdrop" 一样控制 Android 设备，作为 LLM 与移动界面的桥梁。
    *   **Issue [#286](https://github.com/sipeed/picoclaw/issues/286)**: 呼吁增加在 Android Termux 上运行 PicoClaw 的文档指南，反映了大量非传统服务器端用户的涌入。
*   **企业级观测性**
    *   **Issue [#1731](https://github.com/sipeed/picoclaw/issues/1731)**: 社区强烈要求集成 **OpenTelemetry (OTel) GenAI** 标准，以满足企业环境下的可观测性需求。

## 5. Bug 与稳定性
**🚨 高危警报：v0.2.6 版本 Provider 兼容性集中爆发**
今日报告的 Bug 大多与刚刚发布的 v0.2.6 版本有关，主要集中在 API 调用层面的错误，严重影响用户体验：

1.  **[CRITICAL] API Key 遗漏**
    *   **Issue [#2578](https://github.com/sipeed/picoclaw/issues/2578)**: v0.2.6 中 `openai_compat` 提供商在发送请求时**完全丢失 Authorization Header**，导致所有兼容 OpenAI 格式的第三方模型无法使用。这是极其严重的回归问题。
2.  **[HIGH] DeepSeek 认证失败**
    *   **Issue [#2584](https://github.com/sipeed/picoclaw/issues/2584)**: DeepSeek 提供商在有效 Key 下返回 401 错误。
3.  **[MEDIUM] Ollama 模型兼容性**
    *   **Issue [#2583](https://github.com/sipeed/picoclaw/issues/2583)**: Qwen3.5 和 Gemma4 模型在 Ollama 提供商下返回空响应或解析错误。
4.  **[MEDIUM] LongCat 工具调用失败**
    *   **Issue [#2046](https://github.com/sipeed/picoclaw/issues/2046)**: PicoClaw 无法正确调用 LongCat API 的工具。

## 6. 功能请求与路线图信号
从新开的 Issue 中可以看出用户对 **鲁棒性** 和 **本地化** 的需求：

*   **搜索容错机制**: **Issue [#2582](https://github.com/sipeed/picoclaw/issues/2582)** 提出在 Search API 额度耗尽时应自动切换到备用 API（如从 Brave 切换到 Tavily），而不是直接报错。
*   **飞书深度集成**: **Issue [#2580](https://github.com/sipeed/picoclaw/issues/2580)** 针对中国用户群体，建议参考官方插件优化飞书集成，希望加入流式输出、状态显示等功能。
*   **身份认证**: **Issue [#1067](https://github.com/sipeed/picoclaw/issues/1067)** 提出集成 Authula 进行身份认证/授权，解决 CLI 暴露后的安全问题。

## 7. 用户反馈摘要
*   **痛点**: 用户对 v0.2.6 的稳定性表示担忧，特别是 API Key 配置无效导致服务完全不可用（Issue #2578）。这表明最新的发布可能跳过了核心兼容性测试。
*   **场景**: 越来越多的用户尝试在 **边缘设备**（如通过 Termux 运行 Android 设备）和 **嵌入式设备** 上部署 PicoClaw。
*   **建议**: 用户希望工具具有更好的自动恢复能力（如 API Fallback），而不是在遇到单一错误时停止。

## 8. 待处理积压
以下长期 Issue 仍需维护者关注，可能影响项目的长期愿景：
*   **自更新支持 (Issue #618)**: 允许程序通过包管理器进行自我升级，尚未实现。
*   **Agent Shield 多用户支持 (PR #2313)**: 虽有 PR 但尚未合并，这是通往企业级应用的关键门槛。
*   **Termux 文档 (Issue #286)**: 文档缺失阻碍了移动端用户的采用。

---
**总结**: 当前 PicoClaw 处于高速迭代期，新功能（如 CDP、MCP）令人期待，但 **v0.2.6 的 Provider Bug 群发**需要立即关注，建议用户暂缓升级或密切关注 Nightly 修复版本。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 - 2026-04-19

## 📅 今日速览
NanoClaw 项目今日正处于 **v2 架构重构的关键收尾阶段**，活跃度极高。过去 24 小时内合并了 **14 个 PR**，且大多属于核心架构重构的遗留任务，显示出极强的开发执行力。代码库正在经历“大换血”，核心功能被拆分为独立模块，同时社区贡献者也在积极扩展新功能（如 CLI 通道、Codex 支持）。尽管重构动作剧烈，目前未见严重的新增阻塞性 Bug，项目整体健康度良好，正在为 v2 正版发布做最后冲刺。

---

## 🚀 版本发布
*无新版本发布。当前处于高频迭代期，预计将在重构清理完毕后发布 v2 正式版。*

---

## 🏗️ 项目进展
今日合并的 PR 标志着 NanoClaw 架构现代化的决定性一步，主要体现在核心功能的模块化和服务解耦：

1.  **核心架构重构完成**
    *   **[#1851](https://github.com/qwibitai/nanoclaw/pull/1851)**: 清理了遗留代码，并重写了 I/O 处理逻辑，将文件操作从 `delivery` 层剥离至 `session-manager`，为未来的多端扩展打下基础。
    *   **[#1849](https://github.com/qwibitai/nanoclaw/pull/1849)**: **批准流程** 被提升为默认模块，而 **自修改** 功能被剥离为可选模块。这是一个重要的安全性边界划分，意味着默认安装更安全，高风险功能变为可选。
    *   **[#1848](https://github.com/qwibitai/nanoclaw/pull/1848)**: 将 Agent 之间通信逻辑解耦为独立模块。
    *   **[#1847](https://github.com/qwibitai/nanoclaw/pull/1847)**: 将权限系统（角色、成员管理）完全提取为可选模块，简化了核心代码的复杂度。

2.  **CLI 与部署能力提升**
    *   **[#1853](https://github.com/qwibitai/nanoclaw/pull/1853)**: 新增原生 **CLI 通道**。用户现在可以直接通过终端与 Agent 对话，这不仅是极客功能的补充，更是低资源环境下的重要交互方式。
    *   **[#1837](https://github.com/qwibitai/nanoclaw/pull/1837)**: 添加了 `/paperclip/wake` Webhook 接口，实现了与 [Paperclip](https://paperclip.ing) 的双向互通，增强了外部系统的集成能力。
    *   **[#1637](https://github.com/qwibitai/nanoclaw/pull/1637)**: 完善了 Docker/CasaOS 的部署支持，降低了非技术用户的部署门槛。

3.  **模型提供商支持扩展**
    *   **[#1852](https://github.com/qwibitai/nanoclaw/pull/1852)**: 新增 OpenAI Codex SDK 作为备用提供商。当 Claude 遇到限流（429）或认证错误（401）时，系统可自动降级到 Codex，显著提高了服务的稳定性。

---

## 🔥 社区热点
今日最活跃的讨论集中在**新功能的扩展**上，显示出社区对 NanoClaw 成为一个通用平台的期望：

1.  **Matrix 协议支持 ([#1413](https://github.com/qwibitai/nanoclaw/issues/1413))**
    *   **热度**: 👍 4
    *   **详情**: 社区强烈请求增加对去中心化通信协议 Matrix 的支持（作为 `/add-matrix` skill）。这反映了隐私敏感和自托管社区用户对 NanoClaw 的浓厚兴趣，目前该 Issue 仍处于开放状态，等待开发者的接纳。

2.  **Linux OAuth 修复问题 ([#1850](https://github.com/qwibitai/nanoclaw/issues/1850))**
    *   **热度**: 新开 Issue
    *   **详情**: 用户报告在 Linux (Debian/Proxmox) 环境下，OAuth 认证相关的 OneCLI MITM 代理出现连接重置错误。这是目前阻碍 NanoClaw 在主流 Linux 服务器环境平滑运行的关键痛点。

3.  **社区生态扩展**
    *   三个关于去中心化网络 Nostr 和 CalDAV 的 PR ([#1835](https://github.com/qwibitai/nanoclaw/pull/1835), [#1834](https://github.com/qwibitai/nanoclaw/pull/1834), [#1833](https://github.com/qwibitai/nanoclaw/pull/1833)) 正在开放审核中，表明社区正在积极丰富 NanoClaw 的联邦化社交和媒体托管能力。

---

## 🐛 Bug 与稳定性
今日报告的 Bug 集中在 **重构后的交互逻辑** 和 **特定平台兼容性** 上：

1.  **[高危] 组模式下的会话污染 ([#1855](https://github.com/qwibitai/nanoclaw/issues/1855))**
    *   **描述**: 在 `context_mode='group'` 模式下，定时任务可能导致主聊天 Agent 的工具调用被重复执行。这涉及到核心 Session 重建逻辑的稳定性。
    *   **状态**: 新开 Issue，暂无修复 PR。

2.  **[中危] "思考过程" 意外泄露 ([#1854](https://github.com/qwibitai/nanoclaw/issues/1854))**
    *   **描述**: 尽管指令要求 "静默退出"，定时任务仍可能向用户泄露内部 `<internal>` 标签包裹的思考文本。这属于 Prompt Injection 防御的边界情况脆弱性。
    *   **状态**: 新开 Issue，暂无修复 PR。

3.  **[中危] Linux 环境下 OAuth 认证失败 ([#1850](https://github.com/qwibitai/nanoclaw/issues/1850))**
    *   **描述**: MITM 代理在 Linux 上抛出 `ECONNRESET`。
    *   **状态**: 待修复。

---

## 🗺️ 功能请求与路线图信号
从今日的 PR 和 Issues 中，可以嗅出 NanoClaw 未来的发展方向：

1.  **多模型并行**: PR [#1852](https://github.com/qwibitai/nanoclaw/pull/1852) 和 [#1843](https://github.com/qwibitai/nanoclaw/pull/1843) 都在加强对 Codex 的支持，甚至通过 App-server JSON-RPC 集成。这表明 NanoClaw 试图摆脱单一模型依赖，构建更稳健的底层模型层。
2.  **记忆与策略进化**: PR [#1841](https://github.com/qwibitai/nanoclaw/pull/1841) 提出了 `auto-evo` 概念，即注入基于组的持久化策略记忆。这是向“长期记忆”和“自我进化”Agent 迈出的重要一步。
3.  **联邦化社交生态**: Matrix 和 Nostr 的频繁出现，预示着 NanoClaw 的核心受众群体极其看重去中心化和数据主权。

---

## 🗣️ 用户反馈摘要
*   **痛点**: Linux 用户在部署时遇到认证墙，OneCLI 代理的兼容性问题影响了在纯净服务器环境下的体验 ([#1850](https://github.com/qwibitai/nanoclaw/issues/1850))。
*   **需求**: 用户希望 Agent 能够通过更多渠道接入，特别是极客常用的终端 ([#1853](https://github.com/qwibitai/nanoclaw/pull/1853)) 和注重隐私的 Matrix ([#1413](https://github.com/qwibitai/nanoclaw/issues/1413))。
*   **认可**: 社区对“模块化”重构反响积极，通过 PR 可以看到多位贡献者（gavrielc, jorgenclaw 等）协同推进复杂的架构变更。

---

## ⏳ 待处理积压
*   **[#1413](https://github.com/qwibitai/nanoclaw/issues/1413) (Matrix 支持)**: 自 3 月 25 日开启，虽然热度较高（4 赞），但尚未看到对应的 PR 开始实现，建议维护者评估优先级。
*   **[#1855](https://github.com/qwibitai/nanoclaw/issues/1855) (组模式 Bug)**: 这是一个影响核心稳定性的 Bug，需尽快排期修复，以免影响 v2 正式版的声誉。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 - 2026-04-19

## 1. 今日速览
NullClaw 项目在 2026-04-19 展现出极高的开发活跃度，尽管没有新版本发布，但代码库正经历重大架构升级。过去 24 小时内共提交了 **11 个 PR** 和 **8 个 Issue**，维护者 `manelsen` 领导了一系列针对核心功能的优化，重点聚焦于 **Agent 的工具调用灵活性** 和 **多工作区支持**。社区反馈集中在特定协议（如 DingTalk、Matrix）的交互细节以及长时任务的非阻塞处理上。项目整体健康度极高，多个长期悬而未决的 Issue 似乎正通过新的 PR 链得到回应。

## 2. 版本发布
无新版本发布。当前主分支正处于功能密集迭代期，建议关注后续关于 [Tool Customization System](#pull-requests) 和 [Admin API](#pull-requests) 的合并动态。

## 3. 项目进展
今日有大量 PR 提出但尚未合并，主要涉及以下三个关键方向的开发：

*   **多工作区与配置管理**: 
    *   **[PR #842](https://github.com/nullclaw/nullclaw/pull/842)**: 引入了 `--workspace` 标志，允许在命令行覆盖工作区目录，解决了需要同时运行多个不同配置网关实例的痛点。
    *   **[PR #837](https://github.com/nullclaw/nullclaw/pull/837)**: 支持从外部文件加载工具定制配置，增强了配置的模块化管理能力。

*   **工具定制化系统**: 
    *   这是一组紧密相关的 PR，旨在彻底改变工具的调用方式。
    *   **[PR #411](https://github.com/nullclaw/nullclaw/pull/411)**: 实现了基于触发词的工具优先级排序和参数管理系统。
    *   **[PR #836](https://github.com/nullclaw/nullclaw/pull/836)**: 在 Agent 循环中实现了触发词检测，当检测到特定关键词时，会自动注入提示以优先调用相应工具。
    *   **[PR #834](https://github.com/nullclaw/nullclaw/pull/834) & [PR #835](https://github.com/nullclaw/nullclaw/pull/835)**: 定义了工具定制化的配置模式，并允许动态覆盖工具描述及启用/禁用特定工具。

*   **技能 生态增强**:
    *   **[PR #831](https://github.com/nullclaw/nullclaw/pull/831)**: 更新至 [Agent Skills RFC 0.2.0](https://github.com/nullclaw/nullclaw/pull/831)，强化了 Web Skill 的拉取安全性（SHA256 校验）和归档格式支持。

## 4. 社区热点
*   **[Issue #833: How to support multi-workspace?](https://github.com/nullclaw/nullclaw/issues/833)**
    *   **热度**: 刚提出即引发关注。
    *   **分析**: 用户 `jacktang` 询问如何支持多工作区。这直接对应了今日提出的 **[PR #842](https://github.com/nullclaw/nullclaw/pull/842)**。这表明社区与开发者在对“隔离环境”的需求上高度一致。

*   **[Issue #376: Does DingTalk currently only support sending messages?](https://github.com/nullclaw/nullclaw/issues/376)**
    *   **热度**: 评论数较多 (3)，最近更新。
    *   **分析**: 用户反馈配置 DingTalk 后无法接收回复，仅能发送。这触及了 IM 通道“双向同步”的核心体验问题。虽然今日有针对 Matrix 的 E2EE 加密代理支持 PR，但 DingTalk 的接收问题尚未有对应的修复 PR。

*   **[Issue #832: Concurrent/non blocking interactivity](https://github.com/nullclaw/nullclaw/issues/832)**
    *   **热度**: 新提出的架构建议。
    *   **分析**: 用户指出了 Agent 框架常见的“单线程阻塞”问题（即 LLM 思考时无法处理其他输入）。这是一个高价值的架构讨论，可能指引未来的异步重构方向。

## 5. Bug 与稳定性
*   **[严重] [Issue #821 (CLOSED)](https://github.com/nullclaw/nullclaw/issues/821)**: 版本号显示为 `dev` 而非具体数字。
    *   **状态**: 已关闭。
    *   **影响**: 用户无法通过命令行准确判断当前运行的版本，这在排查问题时造成困扰。虽然已关闭，但需确认修复代码是否已合并进即将发布的版本。

*   **[中等] [Issue #408: Tool call parsing breaks valid JSON](https://github.com/nullclaw/nullclaw/issues/408)**
    *   **状态**: 开放中。
    *   **详情**: Agent 将 JSON 中的冒号 `:` 错误识别为工具名称。这是一个严重的解析逻辑错误，会导致工具调用完全失败。
    *   **关联 PR**: 暂无直接修复 PR，但 **[PR #836](https://github.com/nullclaw/nullclaw/pull/836)** (触发词优先级) 的逻辑改动可能会侧面影响解析流程，需注意是否引入新问题或解决此问题。

*   **[中等] [Issue #354: Service stops working after Homebrew upgrade](https://github.com/nullclaw/nullclaw/issues/354)**
    *   **状态**: 开放中。
    *   **详情**: macOS 用户通过 Homebrew 升级后，由于 LaunchAgent 路径硬编码导致服务无法启动。这是包管理集成的经典回归问题。

## 6. 功能请求与路线图信号
*   **多工作区支持**: 用户提出需求，开发者次日即提交 PR (#842)，显示出极高的响应度。该功能极大概率进入下个版本。
*   **Web Search 增强**: **[Issue #623](https://github.com/nullclaw/nullclaw/issues/623)** 建议集成 `ddgs` (DuckDuckGo) 聚合搜索库。
*   **Admin API**: **[PR #770](https://github.com/nullclaw/nullclaw/pull/770)** 提出了构建 RESTful Admin API 的计划，用于状态监控和 Cron 管理。这将极大地便利 NullClaw 在服务器端的集成和监控。
*   **Matrix 加密**: **[PR #838](https://github.com/nullclaw/nullclaw/pull/838)** 增加了 `pantalaimon` E2EE 代理支持，显示出项目在隐私安全合规方面的持续投入。

## 7. 用户反馈摘要
*   **痛点**: 从 **[Issue #832](https://github.com/nullclaw/nullclaw/issues/832)** 可以看出，随着用户将 Agent 用于长时任务，现有的“单线程阻塞”交互模式已成为体验瓶颈，用户期待更流畅的并发交互体验。
*   **使用场景**: 用户正在尝试将其集成到各种系统（如 DingTalk, Homebrew, Linux Service）中。任何关于服务安装、路径管理和系统集成的细节都会被放大。**[Issue #354](https://github.com/nullclaw/nullclaw/issues/354)** 的反馈表明，自动化升级流程的稳定性至关重要。

## 8. 待处理积压
*   **[Issue #665: Error: error.NoResponseContent](https://github.com/nullclaw/nullclaw/issues/665)**: 涉及 LLM 后端响应解析错误，已存在数周，需排查是否为特定模型配置问题。
*   **[Issue #376 (DingTalk)] & [Issue #354 (Homebrew)]**: 这两个涉及具体平台集成的问题已存在超过一个月，虽有讨论但尚未看到明确的修复 PR 提交，建议维护者评估优先级。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-19)

## 📊 今日速览
IronClaw 项目今日处于**高度活跃**状态，核心工程团队正致力于**平台架构重构**与**自动化测试稳定性修复**。过去 24 小时内，项目处理了 68 个 Issues 与 PRs 的更新（18 个 Issues，50 个 PRs），其中 PR 待合并队列较长（41 个），表明代码审查与集成面临一定压力。虽然**无新版本发布**，但代码库正经历大规模的架构分层，特别是 Gateway 模块的平台拆分，同时针对 WASM 通道、Secrets 管理及 E2E 测试基础设施进行了密集修复。

## 🚀 版本发布
*   无新版本发布。

## 🔨 项目进展
今日合并与关闭的重要进展主要集中在**架构重构**、**核心逻辑修复**及**测试基础设施**的完善：

*   **平台架构重构:**
    *   **[PR #2648] (CLOSED)** `fix(secrets): auto-generate master key via .env on every startup`: 彻底解决了困扰用户已久的 "secrets store is not available" 问题。通过在每次启动时自动生成主密钥并优先使用环境变量，消除了对特定系统 Keychain 的强依赖。
    *   **[PR #2531] (CLOSED)** `fix(engine): FINAL-await support + runaway loop protection`: 增强了 CodeAct 脚本的稳定性，支持 `FINAL` 变量的 Await，并默认限制最大连续错误次数为 5，防止运行循环失控。
    *   **[PR #2570] (CLOSED)** `fix(engine): allow completed event-driven missions to re-fire`: 修复了 `/expected` 命令失效的问题，允许已完成的事件驱动任务在特定条件下重新触发，改善了系统的自我修正能力。

*   **测试与修复:**
    *   **[PR #2656] (CLOSED)** `test(e2e): harden tab_button selector...`: 修复了 E2E 测试中因 UI 元素选择器重复导致的测试失败，提升了 CI 稳定性。
    *   **[Issue #2556] (CLOSED)** `WASM channels: do not auto-start...`: 确认修复了 WASM 通道在安装后即使未激活也会在启动时自动运行的问题，优化了资源管理。

*   **渠道集成:**
    *   **[Issue #2482] (CLOSED)** `Telegram group messages omit chat_type metadata`: 修复了 Telegram 群组消息缺少 `chat_type` 元数据的问题，确保群聊提示词行为正常。

## 🔥 社区热点
今日讨论与关注度最高的话题集中在**资源限制**、**多账户支持**及**架构演进**：

*   **[#2636 Skill Size Limit Error](https://github.com/nearai/ironclaw/issues/2636) (OPEN)**
    *   **核心争议:** 用户 `jonhoosh` 报告安装 Skill 时因大小超过 64KB 限制而失败，并质疑"没有其他项目做这种限制"。
    *   **分析:** 这触及了 IronClaw 在资源约束与灵活性之间的平衡问题。用户倾向于无缝的大型工具包集成，而平台方可能为了性能和 WASM 兼容性设限。如何在不牺牲安全性的前提下放宽限制（如流式加载或外部引用）是关键。

*   **[#2642 Support credential profiles](https://github.com/nearai/ironclaw/issues/2642) (OPEN)**
    *   **核心诉求:** 支持同一服务（如 Google/Notion）的多个账户凭证管理。
    *   **分析:** 这是一个高频且强烈的生产级需求。当前的单一凭证槽位模型限制了代理在处理多工作区或个人/工作账号混合场景下的能力。

*   **[#2654 Engine→AppEvent coverage gap](https://github.com/nearai/ironclaw/issues/2654) (OPEN)**
    *   **核心观察:** 随着 Engine V2 的推进，发现 Web UI 的实时事件流存在盲区。
    *   **分析:** 这标志着项目正处于核心迭代期，内部事件系统与前端展示层正在对齐，涉及 SSE/WS 通信机制的底层优化。

## 🐛 Bug 与稳定性
今日报告的 Bug 呈现出集中爆发于特定测试模块的特征：

*   **[High Risk] [#2655 Routine Runs Never Finalize](https://github.com/nearai/ironclaw/issues/2655) (OPEN)**
    *   **描述:** 当关联的 Job 一直处于 `pending` 状态时，`sync_dispatched_runs` 逻辑永远不会结束例程运行，可能导致代理挂起。
    *   **状态:** **待修复**。需要代码逻辑层面的超时或状态机修正。

*   **[Medium] [#2624 Telegram E2E Activation 401](https://github.com/nearai/ironclaw/issues/2624) (OPEN)**
    *   **描述:** Telegram 端到端激活测试持续失败，出现 401 Bot Token 验证错误。
    *   **状态:** **正在修复中** (关联 PR #2652)。

*   **[Medium] [#2623 Slack E2E Fixture Boot Failure](https://github.com/nearai/ironclaw/issues/2623) (CLOSED)**
    *   **描述:** Slack E2E 测试夹具无法启动，`slack.capabilities.json` 加载超时。
    *   **状态:** **已确认**。问题定位于测试路径配置，非产品回归。

*   **[Low/Medium] [#2626 Stale Strict-mode Selector](https://github.com/nearai/ironclaw/issues/2626) (CLOSED)**
    *   **描述:** Playwright 严格模式下，任务页的选择器匹配到了多个元素导致测试失败。
    *   **状态:** **已修复** (PR #2656)。

## 🧭 功能请求与路线图信号
从 Issues 和 PRs 中可以窥见 IronClaw 的演进方向：

1.  **[#91 Meeting Intelligence Pipeline](https://github.com/nearai/ironclaw/issues/91) (OPEN)**:
    *   **信号:** 全功能会议智能流程（录音、转写、行动项提取）。这是一个跨越音频、内存、代理主动性的史诗级功能，表明 IronClaw 正试图切入企业级办公自动化场景。

2.  **[#2599 Epic: Gateway Refactor](https://github.com/nearai/ironclaw/issues/2599) (OPEN)**:
    *   **信号:** 强制执行网关特性边界。目前处于 Stage 1/5，代码库正在进行剧烈的目录重组和所有权划分。这是为了支持未来更快的独立迭代和多团队协作。

3.  **[#2270 Approval Queue Tray](https://github.com/nearai/ironclaw/pull/2270) (OPEN)**:
    *   **信号:** Web UI 侧边栏将增加"批准队列托盘"，提供对所有待处理工具审批的可见性。这解决了代理在后台运行工具时用户缺乏感知的痛点。

## 🗣️ 用户反馈摘要
*   **痛点 - Skill 安装限制:** [#2636](https://github.com/nearai/ironclaw/issues/2636) 用户明确表示 64KB 的 Skill 大小限制过于苛刻，认为这在同类项目中没有先例，阻碍了复杂工具的集成。
*   **痛点 - 多账户管理:** [#2642](https://github.com/nearai/ironclaw/issues/2642) 用户指出当前单一的凭证模型无法处理多个 Google Drive 或 Notion 账户，这在日常工作中非常常见。
*   **痛点 - 环境依赖:** [#1820](https://github.com/nearai/ironclaw/issues/1820) (已关闭) 用户抱怨在 DNS 失败或特定环境变量缺失时，系统无法优雅降级，直接报错导致无法设置模型。今日发布的 [#2648](https://github.com/nearai/ironclaw/pull/2648) 已对此进行了修复。

## ⏳ 待处理积压
以下长期未关闭或进展缓慢的 Issue 需要维护者关注：

*   **[#1446 Aliyun Coding Plan Support](https://github.com/nearai/ironclaw/pull/1446) (OPEN since 2026-03-20)**
    *   一个大型 PR (XL size)，添加了对阿里云百炼平台的支持。已开放近一个月，目前仍处于 Open 状态，可能因为审查复杂度较高而处于积压状态。
*   **[#1869 Suppress non-CLI listeners](https://github.com/nearai/ironclaw/pull/1869) (OPEN since 2026-04-01)**
    *   修复 CLI 模式下仍会启动非必要监听器的问题。这是一个低风险但影响用户体验的修复，等待合并时间较长。
*   **[#2367 Tighten auth flows](https://github.com/nearai/ironclaw/pull/2367) (OPEN since 2026-04-12)**
    *   涉及统一认证流程的金丝雀覆盖范围，属于高优先级的基础设施改进，目前进展较为缓慢。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-19)

## 1. 今日速览
根据 2026-04-19 的 GitHub 数据显示，LobsterAI 项目今日处于**低活跃维护状态**。过去 24 小时内无新增 Issue 讨论，亦无新版本发布，所有代码活动集中于 Pull Requests 的更新与维护。代码库中有 2 个功能增强性质的 PR 在昨日（2026-04-18）得到了更新，显示出项目仍在持续推进模型生态的兼容性与迭代，但合并进程暂处于停滞状态。整体来看，项目目前处于**功能整合与内部优化**阶段。

## 2. 版本发布
*无*

## 3. 项目进展
今日无新合并或关闭的 PR。目前代码库中有 **2 个待合并** 的 Pull Request，均在 4 月 18 日进行了活跃更新，正处于审查或等待合并阶段：

*   **[PR #428] 新增 LM Studio 模型提供商支持**
    *   **作者**: mvanhorn
    *   **状态**: OPEN (最近更新: 2026-04-18)
    *   **内容**: 该 PR 遵循 Ollama 的集成模式，新增了对 LM Studio 的支持。LM Studio 兼容 OpenAI API (`localhost:1234/v1`)，且无需 API Key。PR 包含了专用图标、国际化字符串（中英文）及简化的模型名称输入逻辑。
    *   **[链接](https://github.com/netease-youdao/LobsterAI/pull/428)**

*   **[PR #388] 升级 MiniMax 默认模型至 M2.7**
    *   **作者**: octo-patch
    *   **状态**: OPEN (最近更新: 2026-04-18)
    *   **内容**: 更新 MiniMax API 基础 URL (`.com` -> `.io`)，引入 MiniMax-M2.7 及 M2.7-highspeed 模型，并将其设为新的默认模型，同时保留 M2.5 版本作为备选。
    *   **[链接](https://github.com/netease-youdao/LobsterAI/pull/388)**

## 4. 社区热点
由于过去 24 小时内 **0 条新 Issue** 产生且 **0 条评论** 更新，今日社区讨论热度较低。目前的关注点主要集中在上述两个待合并的 PR 上，体现了社区对**本地模型部署**和**商业模型最新能力**的关注。

## 5. Bug 与稳定性
今日未报告新的 Bug、崩溃或回归问题。待处理的 PR #388 包含了 API 域名的变更（从 `.com` 至 `.io`），需关注上线后是否存在兼容性风险，目前未见相关 Issue 反馈。

## 6. 功能请求与路线图信号
从活跃的 PR 中可以解读出项目近期的路线图重点：
*   **本地化与私有部署支持**: PR #428 显示项目正在积极扩展对本地运行模型工具（如 LM Studio）的支持，这与之前支持 Ollama 的逻辑一脉相承，表明 LobsterAI 正在强化**本地 AI 助手**的定位。
*   **模型能力迭代**: PR #388 表明项目紧跟上游模型厂商的迭代节奏，优先集成更强的 MiniMax M2.7 模型，提升用户体验。

## 7. 用户反馈摘要
由于无新增 Issue 和评论数据，今日暂无新增的用户痛点或使用场景反馈。

## 8. 待处理积压
目前有 **2 个长期未合并** 的 PR（最远创建于 3 月 12 日，最近更新于 4 月 18 日），建议维护者关注：
*   **[#428 LM Studio 支持](https://github.com/netease-youdao/LobsterAI/pull/428)**: 已更新 1 个月以上，标签包含 `stale`，需确认是否继续合并流程。
*   **[#388 MiniMax 升级](https://github.com/netease-youdao/LobsterAI/pull/388)**: 已更新 1 个月以上，标签包含 `stale`，涉及默认模型切换，建议尽快推进以免影响用户体验。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是基于 2026-04-19 数据的 **Moltis 项目动态日报**。

---

### 1. 今日速览
Moltis 项目今日保持极高的活跃度与健康的迭代速度。过去 24 小时内共处理了 **15 个** Issues 和 PRs，其中 **6 个 PR 已成功合并**，显示出强劲的代码推进力。开发重点集中在**内部重构**（如 Web UI 迁移至 TypeScript、代码索引独立提取）与**文档系统性修复**上。同时，社区反馈的 Bug 得到了快速响应与修复，项目整体处于活跃开发与稳定维护并行的良性状态。

### 2. 版本发布
*无新版本发布。*

### 3. 项目进展
今日合并的 PR 显著提升了项目的模块化程度、文档准确性与系统稳定性：
*   **[PR #771] 代码索引功能落地**
    *   **内容**: 新增 `moltis-code-index` crate，内置 SQLite + FTS5 后端。
    *   **影响**: 为 Agent 提供了项目源代码索引与增量同步能力，增强了 AI 对大型代码库的理解力。
    *   *链接: [moltis-org/moltis#771](https://github.com/moltis-org/moltis/pull/771)*
*   **[PR #779] 任务列表逻辑修复**
    *   **内容**: 修复 `task_list.list` 默认仅显示 "default" 列表的问题，新增 `list_lists` 动作以发现所有列表。
    *   **影响**: 解决了 Agent 无法看见自定义列表中任务的逻辑缺陷，提升了工具调用的可靠性。
    *   *链接: [moltis-org/moltis#779](https://github.com/moltis-org/moltis/pull/779)*
*   **[PR #785] 反向代理支持增强**
    *   **内容**: 新增 `server.external_url` 配置项，优化反向代理环境下的 WebAuthn 认证。
    *   **影响**: 改善了通过代理部署 Moltis 用户的登录体验。
    *   *链接: [moltis-org/moltis#785](https://github.com/moltis-org/moltis/pull/785)*
*   **[PR #784] 沙盒可观测性提升**
    *   **内容**: 增加了大量生命周期日志，防止重复打包配置。
    *   **影响**: 结束了用户面对 `dpkg` 进程时“无日志”的困惑，大幅提升了 Debug 效率。
    *   *链接: [moltis-org/moltis#784](https://github.com/moltis-org/moltis/pull/784)*

### 4. 社区热点
今日讨论热点主要集中在技术债偿还与架构升级：
*   **[PR #775] Web UI TypeScript 迁移开启**
    *   **状态**: OPEN
    *   **热度**: 虽为新开的 PR，但涉及前端架构的重大变更（迁移至 Vite + Preact + TypeScript），将长期影响项目的开发体验与前端性能。
    *   *链接: [moltis-org/moltis#775](https://github.com/moltis-org/moltis/pull/775)*
*   **[PR #791] 重构：提取代码分割器**
    *   **状态**: OPEN
    *   **热度**: 从 `moltis-memory` 中提取独立的 `moltis-splitter` crate，支持 AST 感知的代码分块。这是对核心记忆机制的深层优化，支持 15 种语言的语法解析。
    *   *链接: [moltis-org/moltis#791](https://github.com/moltis-org/moltis/pull/791)*

### 5. Bug 与稳定性
今日报告的 Bug 涉及容器管理与后端兼容性：
*   **[Issue #786] 浏览器容器启动超时**
    *   **描述**: Browser container 无法在 60 秒内就绪。
    *   **状态**: OPEN
    *   **严重度**: 中高（影响 Web 浏览工具的使用）
    *   *链接: [moltis-org/moltis#786](https://github.com/moltis-org/moltis/issues/786)*
*   **[Issue #588] Podman 后端被忽略**
    *   **描述**: `is_container_available()` 函数忽略了 Podman 后端，导致非 Docker 环境检测失败。
    *   **状态**: CLOSED (今日关闭)
    *   **严重度**: 中（影响非 Docker 用户）
    *   *链接: [moltis-org/moltis#588](https://github.com/moltis-org/moltis/issues/588)*
*   **[Issue #776] 任务列表逻辑缺陷**
    *   **描述**: 仅能列出默认列表。
    *   **状态**: CLOSED (已由 PR #779 修复)
    *   **链接: [moltis-org/moltis#776](https://github.com/moltis-org/moltis/issues/776)*

### 6. 功能请求与路线图信号
用户提出了增强操作控制与反馈的需求：
*   **[Issue #788] 增加“中止”操作功能**
    *   **请求**: 在 Telegram 界面及 Fallback 模型场景下，增加“中止”当前执行操作的指令。
    *   **分析**: 这是一个 UX 增强请求，旨在解决 AI 陷入长时间执行或死循环时用户无法干预的痛点。鉴于项目正在完善 WebUI 和控制逻辑，该功能极有可能被纳入路线图。
    *   *链接: [moltis-org/moltis#788](https://github.com/moltis-org/moltis/issues/788)*

### 7. 用户反馈摘要
*   **痛点**: 用户在反向代理环境下配置 WebAuthn 遇阻（已通过 PR #785 解决配置难题）。
*   **困惑**: 沙盒环境构建时出现“幽灵进程”且无日志输出，导致排查困难（已通过 PR #784 增加全流程日志解决）。
*   **易用性**: 自定义任务列表不可见的问题曾造成 Agent 执行逻辑困扰（已修复）。

### 8. 待处理积压
*   **[Issue #786]** 需关注浏览器容器启动超时问题的根本原因，可能涉及镜像拉取或资源分配瓶颈。
*   **[PR #783, #787, #789]** 文档修复批次 目前处于 OPEN 状态，建议尽快合并以保持文档与代码的同步，特别是涉及 GraphQL 和 Docker 配置的关键文档。

---
**数据来源**: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)  
**报告生成时间**: 2026-04-19

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报
**日期：** 2026-04-19
**分析师：** AI开源项目智能体

---

### 1. 今日速览
CoPaw (QwenPaw) 项目今日呈现**高活跃度**状态。过去24小时内共收到 **26 条**代码更新记录（15 个 Issues + 11 个 PR），显示出社区极高的参与度。核心开发重点集中在**前端工程化（Vitest测试引入）**、**多语言技能支持**以及**模型路由机制的重构**。同时，社区反馈了多个关于 Windows 环境、本地模型调用（Ollama/llama.cpp）及 Unicode 编码导致的稳定性问题，维护者已快速响应并提交了部分修复。

### 2. 版本发布
**无新版本发布**。

### 3. 项目进展
今日合并或正在推进的核心代码变更如下：

*   **[PR #3553]** **修复 Console 渠道 SSE 崩溃问题**
    *   **状态：** Open (待合并)
    *   **进展：** 针对当 AI 输出包含格式错误的 Unicode 代理字符（如不完整的 Emoji）时导致的 `PydanticSerializationError` 崩溃进行了修复。
    *   **意义：** 显著提升 Web 端聊天的流式输出稳定性。
    *   **链接：** https://github.com/agentscope-ai/CoPaw/pull/3553

*   **[PR #3558]** **引入内置技能双语言支持 (EN/ZH)**
    *   **状态：** Open (待合并)
    *   **进展：** 重构了技能目录结构，将内置技能（如 docx, pdf 等）拆分为 `skill-en` 和 `skill-zh`，支持运行时语言切换。
    *   **意义：** 为国际化用户体验打下基础，解决了非英语环境下的技能使用障碍。
    *   **链接：** https://github.com/agentscope-ai/CoPaw/pull/3558

*   **[PR #3559]** **前端单元测试框架落地**
    *   **状态：** Open (待合并)
    *   **进展：** 引入 Vitest 测试框架，并为 Chat 页面及 API 层添加了单元测试与组件测试。
    *   **意义：** 项目在工程质量与代码可维护性上迈出了重要一步，降低了未来 UI 修改的回归风险。
    *   **链接：** https://github.com/agentscope-ai/CoPaw/pull/3559

*   **[PR #3548]** **重构长期记忆模块**
    *   **状态：** Open (待合并)
    *   **进展：** 重新设计了记忆与上下文接口，与 AgentScope 2.0 对齐；支持自动记忆 和自动总结 状态查看。
    *   **意义：** 提升了 Agent 处理长对话和复杂任务时的上下文管理能力。
    *   **链接：** https://github.com/agentscope-ai/CoPaw/pull/3548

### 4. 社区热点
今日讨论热度最高的话题主要集中在 **Windows 环境下的安装/启动故障** 以及 **本地模型接入的兼容性**。

*   **[#3356] QwenPaw 升级后的目录残留问题 (19 条评论)**
    *   **链接：** https://github.com/agentscope-ai/CoPaw/issues/3356
    *   **分析：** 这是一个高活跃的 "Bug/Question" 帖子。用户在升级后，配置仍指向旧目录 (`.copaw`)，导致数据写入位置混乱。这反映了项目在升级迁移逻辑 上存在缺陷，导致新旧版本数据割裂。

*   **[#3470] 关于 "自我进化" 功能的路线图询问 (5 条评论)**
    *   **链接：** https://github.com/agentscope-ai/CoPaw/issues/3470
    *   **分析：** 社区对类似 "Hermes Agent" 的自我进化能力表现出强烈兴趣，这不仅是技术探讨，也是用户对 Agent 智能度上限的期待信号。

*   **[#3452] 模型路由 UI 与功能实现 (正在进行中)**
    *   **链接：** https://github.com/agentscope-ai/CoPaw/pull/3452
    *   **分析：** 涉及在设置中增加 Local/Cloud 模型切换的 UI。该 PR 持续更新，是当前开发的重头戏，旨在解决多模型环境下的切换痛点。

### 5. Bug 与稳定性
今日报告的 Bug 涉及多个关键环节，部分已有对应 PR：

*   **[严重] Windows 启动卡死/无响应**
    *   **[#3555]** QwenPaw Desktop 卡在 "Waiting for HTTP ready..." (Windows 11)。
    *   **[#2943]** `copaw init` 在安全警告提示后挂起。
    *   **分析：** Windows 环境下的网络监听或脚本执行逻辑存在严重阻塞问题，影响新用户入门体验。

*   **[中等] 本地模型调用异常**
    *   **[#3560]** 使用 llama.cpp 后端时工具调用流式解析错误。
    *   **[#3562]** Ollama 调用本地模型多轮对话后结果丢失。
    *   **[#3542]** 使用 VPN 代理时无法调用本地 Ollama。
    *   **分析：** 本地模型生态（非官方 API）的兼容性较差，特别是流式传输和代理设置的处理。

*   **[轻微] Web 端序列化崩溃**
    *   **[#3552]** Console Channel 遇到特殊 Unicode 字符崩溃。
    *   **状态：** 已有 PR #3553 尝试修复。

*   **[#3564]** 对话中经常中断。

### 6. 功能请求与路线图信号
从 Issues 中捕捉到的潜在产品方向：

*   **用户体验优化：**
    *   **[#3545]** 在 Provider 中增加删除模型功能 -> **状态：Closed (可能已实现/排期)**。
    *   **[#3563]** 请求显示当前上下文用量，帮助决策是否进行 Compact。
    *   **[#3551]** 请求隐藏/移除内置的免费模型，避免列表过长。

*   **功能增强：**
    *   **[#3293]** 渠道支持语音回复，而不仅仅是文本。
    *   **[#3117]** 语义化技能路由，根据用户输入自动筛选相关技能。
    *   **[#3268]** 自动注入时间戳，无需 Tool Call 即可使 AI 知晓当前时间。

### 7. 用户反馈摘要
*   **痛点：** Windows 用户饱受安装和启动流程折磨（卡死、挂起），升级后配置残留导致数据混乱也是一大槽点。
*   **期望：** 用户对 "本地优先" (Local First) 的策略非常关注，特别是希望能在 Web 端方便地切换本地/云端模型（PR #3452）。此外，用户希望对系统有更多的控制权（如删除内置模型、查看 Token 用量）。
*   **环境：** 大部分 Bug 报告来自 Windows 11 + Python 3.13 环境组合，建议 QA 团队加强对该环境的测试。

### 8. 待处理积压
以下 Issue 长期未解决或需要维护者特别关注：

*   **[#3356] (Open, 19评)** - QwenPaw 工作目录升级混乱问题。需官方给出明确的迁移指南或自动化迁移脚本。
*   **[#2943] (Closed but may recur)** - `copaw init` 挂起问题。虽然已关闭，但在特定 Python 版本下仍可能复现。
*   **[#3117] (Open, Discussing)** - 语义技能路由。这是一个架构级的增强，需要核心团队确认是否纳入主线。

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