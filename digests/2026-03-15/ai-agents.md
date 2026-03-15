# OpenClaw 生态日报 2026-03-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-15 00:11 UTC

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

# OpenClaw 项目动态日报 (2026-03-15)

**日期**：2026-03-15  
**分析师**：AI 智能体与个人助手开源项目分析师  
**数据源**：OpenClaw (openclaw/openclaw) GitHub 主仓库

---

## 1. 今日速览

OpenClaw 项目今日呈现出**极高的活跃度**，但同时也面临严峻的稳定性挑战。
- **代码提交与协作**：过去 24 小时内产生了 **500 条 PR 更新** 和 **500 条 Issue 更新**，这一双向的高活跃度表明社区参与度极高，开发迭代迅速。
- **稳定性预警**：尽管发布了紧急修复版本 `v2026.3.13-1`，但最近几个版本（特别是 `v2026.3.12`）引入了严重的回归问题，导致 CLI、WebSocket 连接、WhatsApp 及特定模型集成出现大面积故障。
- **用户情绪**：社区讨论集中在 Bug 修复和功能请求上，涉及内存泄漏、核心工具失效及 UI 冻结等关键体验问题。

---

## 2. 版本发布

项目发布了 **2 个** 版本，主要针对发布流程修复和特性预览：

### 📦 v2026.3.13-1 (openclaw 2026.3.13)
- **类型**：Recovery Release (恢复版本)
- **核心变更**：
  - 这是一个恢复版本，用于修复 `v2026.3.13` 发布后的损坏路径问题。
  - **注意**：由于 GitHub 发布不可变，原 tag 无法重用，故使用 `-1` 后缀。对应的 npm 版本仍为 `2026.3.13`。
  - 包含 Android 聊天设置表单的重构。
- **发布链接**：[v2026.3.13-1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.13-1)

### 📦 v2026.3.13-beta.1 (openclaw 2026.3.13-beta.1)
- **类型**：Pre-release (预发布)
- **核心变更**：
  - 针对 npm beta 标签的预发布版本。
  - macOS 资产复用了稳定的 `2026.3.13` 版本，为后续正式版做准备。

---

## 3. 项目进展

尽管今日 PR 合并列表中显示大量 PR 仍处于 Open 状态，但根据 PR 提交记录和讨论，以下关键功能正在积极推进中：

- **🔧 插件生态扩展**：PR [#45318](https://github.com/openclaw/openclaw/pull/45318) 正在大幅扩展插件表面，允许第三方插件完全拥有绑定的频道会话和交互回调，这为 Codex App Server 等高级应用铺平道路。
- **🛡️ 安全性与权限**：PR [#46657](https://github.com/openclaw/openclaw/pull/46657) 引入了 **"信任窗口" (Trust Windows)** 功能，允许在有限时间内暂时提升执行权限（无需频繁确认），平衡了易用性与安全性。
- **🤖 LLM 供应商集成**：PR [#41496](https://github.com/openclaw/openclaw/pull/41496) 提出统一的插件 API，支持 TTS、ASR、Embedding 等多种 AI 能力的接入。
- **💬 聊天 UI 体验**：PR [#20317](https://github.com/openclaw/openclaw/pull/20317) 为 Web 添加了隐藏工具调用和思考过程的开关，清理了聊天界面。

---

## 4. 社区热点

今日讨论热度最高的话题集中在 `v2026.3.12` 引发的连锁故障上：

1. **[Bug]: UI chat not opening** ([#45471](https://github.com/openclaw/openclaw/issues/45471))
   - **热度**：69 条评论
   - **摘要**：更新后用户无法打开聊天界面，仅显示 OpenClaw 符号。这是最严重的 UI 阻断问题。

2. **[Bug]: CRITICAL: Tools intermittent 'Tool not found'** ([#45074](https://github.com/openclaw/openclaw/issues/45074))
   - **热度**：19 条评论
   - **摘要**：核心工具 在升级后间歇性失效，返回 "Tool not found"，严重破坏了 Agent 的基本执行能力。

3. **[Bug]: 2026.3.12 Memory Leak** ([#45064](https://github.com/openclaw/openclaw/issues/45064))
   - **热度**：17 条评论
   - **摘要**：CLI 命令导致 JavaScript 堆内存溢出 (OOM)，导致基本命令无法运行。

4. **[Bug]: WhatsApp outbound send path broken** ([#45171](https://github.com/openclaw/openclaw/issues/45171))
   - **热度**：15 条评论
   - **摘要**：WhatsApp 自动回复正常，但主动发送消息或工具调用失败，提示 "No active WhatsApp Web listener"。

---

## 5. Bug 与稳定性

今日报告的 Bug 数量庞大且影响深远，主要集中在近期版本的回归问题上。按严重程度排序：

### 🔴 严重 - 核心功能阻断
- **#45471**: UI 聊天无法打开 (全平台 UI 不可用)。
- **#45074**: 核心工具 (`read`, `exec`) 间歇性失效，影响 Agent 逻辑闭环。
- **#45064**: CLI 内存泄漏 (OOM)，导致指令行完全卡死。

### 🟠 高危 - 特定模块/平台故障
- **#44714**: `openclaw logs --follow` 握手超时，影响日志监控。
- **#45504**: `devices list/approve` 命令在本地回环网关下失败。
- **#45867**: OpenRouter 模型在静态快照缺失时静默丢弃图片数据。
- **#45822**: Synology Chat Webhook 在 v2026.3.12+ 失效。
- **#41462**: 工具调度回归，导致工具无法到达网关。

### 🟡 中危 - 行为异常/体验受损
- **#45221**: 图片工具 忽略配置的 `imageModel`，回退到旧模型。
- **#44869**: Control UI 切换到主会话时显示错误三角且无输入框。
- **#45222**: 本地网关 WebSocket 握手间歇性失败。
- **#41293**: Mistral 模型返回 422 错误。

### 🔧 已有 Fix PR 的 Issues
- **#46638**: 修复 Control UI 聊天滚动行为冲突。
- **#46666**: 修复 Slack 系统提示中 `interactiveReplies` 的检查错误。
- **#46668**: 清理 Qwen 模型返回的 JSON 中的非法控制字符。

---

## 6. 功能请求与路线图信号

从 Issues 和 PRs 中识别出的潜在新功能动向：

- **Agent 间通信可见性**：PR [#46660](https://github.com/openclaw/openclaw/pull/46660) 提出增加 `agent_to_agent_turn` 钩子，让渠道插件（如钉钉、Discord）能转发 Agent 之间的中间讨论过程，而不仅仅是最终结果。
- **文件写入追加模式**：PR [#40574](https://github.com/openclaw/openclaw/pull/40574) 提议为 `write` 工具增加 `append` 参数，防止并发写入导致的数据丢失。
- **重置前内存清理**：Issue [#45608](https://github.com/openclaw/openclaw/issues/45608) 建议在 `/new`、`/reset` 或每日重置前执行静默内存清理，以保留更多上下文信息。
- **VSCode 调试支持**：PR [#45710](https://github.com/openclaw/openclaw/pull/45710) 旨在为 VSCode 系列 IDE 添加开箱即用的调试支持。

---

## 7. 用户反馈摘要

- **痛点 - 稳定性倒退**：大量用户反馈 `v2026.3.12` 是一个 "充满 Bug" 的版本，导致了从 UI 到 CLI 的全面功能退化（Issues #45074, #45064, #44714）。用户强烈建议在发布前加强回归测试。
- **痛点 - 碎片化体验**：用户抱怨 WhatsApp ([#45171](https://github.com/openclaw/openclaw/issues/45171), [#41950](https://github.com/openclaw/openclaw/issues/41950)) 和 OpenRouter ([#45867](https://github.com/openclaw/openclaw/issues/45867)) 等集成功能脆弱，错误提示（如 "No active listener"）不够准确，难以排查。
- **需求 - 更透明的上下文管理**：Issue [#45572](https://github.com/openclaw/openclaw/issues/45572) 反映 Web UI 的上下文警告数据错误，且在达到 100% 时常导致界面卡死，用户希望有更精确的状态反馈。
- **满意度 - 社区响应**：虽然 Bug 多，但社区响应速度快，部分 Issue 在几小时内就有讨论甚至 Fix PR 提出。

---

## 8. 待处理积压

提醒维护者关注以下长期存在或影响面广的未解决问题：

- **[#26044](https://github.com/openclaw/openclaw/issues/26044)**: Gateway 停止后无法重启，需要重新安装。
- **[#8731](https://github.com/openclaw/openclaw/issues/8731)**: Agent 在执行任务时喜欢“憋着话”，直到任务结束才一次性反向输出所有消息。
- **[#12092](https://github.com/openclaw/openclaw/issues/12092)**: 会话创建后添加的 Skills 对该会话不可见。
- **[#27473](https://github.com/openclaw/openclaw/issues/27473)**: 非回环模式的 Control UI 启动失败，提示 `allowedOrigins` 错误。
- **[#29801](https://github.com/openclaw/openclaw/issues/29801)**: 设备身份 验证流程存在遗留问题。

---

## 横向生态对比

# 2026-03-15 个人 AI 助手开源生态横向对比分析报告

**分析师**：AI 智能体与个人助手开源项目分析师  
**基准日期**：2026-03-15  
**核心参照**：OpenClaw (openclaw/openclaw)

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于**爆发式增长与深度洗牌并存**的阶段。整体呈现出**极高活跃度**，头部项目（如 OpenClaw, NanoBot）日更新量可达数百次，显示出技术迭代的速度之快。然而，**稳定性与易用性**已成为制约其从“极客玩具”转向“生产力工具”的共同瓶颈，多个项目（OpenClaw, PicoClaw, IronClaw）均因版本迭代过快导致严重的功能回退（Regression）。此外，技术路线出现明显分化：一部分项目（OpenClaw, Moltis）致力于构建通用的操作系统级 Agent，而另一部分则专注于特定场景（如 LobsterAI 的本地知识库、Zeroclaw 的安全沙箱、TinyClaw 的轻量化）。

---

## 2. 各项目活跃度对比

| 项目 | GitHub 地址 | Issues 动态 | PR 动态 | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | openclaw/openclaw | **500** 更新 | **500** 更新 | v2026.3.13-1 (Recovery) | 🟡 **高活/预警**<br>开发极快但 `v2026.3.12` 引入严重 Bug，用户情绪波动大。 |
| **NanoBot** | HKUDS/nanobot | **27** 新增 | **57** 提交/34 待合 | 无 (`v0.1.4.post4`) | 🟢 **上升期**<br>社区贡献热情高，正重点发力多模态与交互式配置。 |
| **Zeroclaw** | zeroclaw-labs/zeroclaw | **19** 关闭 | **32** 合并 | **v0.3.0** (正式) + 10 Beta | 🟢 **迭代迅猛**<br>版本发布频率极高，工程韧性强，安全策略正在收紧。 |
| **PicoClaw** | sipeed/picoclaw | **81** 处理 | **61** 更新 | Nightly (不稳定) | 🟡 **架构重构期**<br>正激烈辩论事件驱动架构，Cron 等核心功能存在 Bug。 |
| **NanoClaw** | qwibitai/nanoclaw | **18** 新增 | **50** 提交/44 待合 | 无 | 🟢 **功能蓄势**<br>混合搜索、Slack 深度集成等高级功能正在排队。 |
| **NullClaw** | nullclaw/nullclaw | - | **41** 更新 | **v2026.3.14** | 🟢 **稳健**<br>专注于内存安全与平台兼容，Issue 响应极快。 |
| **IronClaw** | nearai/ironclaw | **19** 更新 | **50** 更新 | 无 | 🟢 **性能攻坚**<br>解决了 N+1 查询等关键性能问题，正引入自适应学习。 |
| **LobsterAI** | netease-youdao/LobsterAI | **3** 新增 | **3** 合并 | 无 | 🟡 **磨合期**<br>前端 UI 重构与后端本地模型适配之间存在摩擦。 |
| **TinyClaw** | TinyAGI/tinyclaw | - | **5** 提交 | 无 | 🟢 **体验优化**<br>致力于解决“配置门槛高”的痛点，向 Web 化转型。 |
| **Moltis** | moltis-org/moltis | **15** 处理 | - | 无 | 🟢 **专业工具链**<br>重点解决跨平台文件锁与 GGUF 模型热加载。 |
| **CoPaw** | agentscope-ai/CoPaw | **50** 处理 | **29** 提交 | 无 | 🟡 **安全治理**<br>正集中修复 AI 自杀、文件破坏等高危安全漏洞。 |
| **ZeptoClaw** | qhkm/zeptoclaw | **6** 处理 | **6** 提交/2 合并 | 无 | 🟢 **精细化打磨**<br>专注于细节体验（如 Discord 图片、Zhipu 验证）。 |
| **EasyClaw** | gaoyangz77/easyclaw | **0** | **0** | 无 | ⚪ **停滞** |

---

## 3. OpenClaw 在生态中的定位

*   **绝对的核心参照**：作为社区规模最大（日均 500+ 讨论）的项目，OpenClaw 实际上已成为行业的**风向标**和**功能标准制定者**。其他项目（如 LobsterAI, NanoClaw）均在功能上强调与其兼容或生态互通。
*   **技术路线差异**：
    *   **OpenClaw** 采取“大而全”的**全能型 Agent** 路线，涵盖 CLI、WebUI、全渠道通信及底层工具生态，架构复杂度极高。
    *   **对比**：**Zeroclaw** 走的是“安全优先”的 Rust 路线；**TinyClaw** 走的是“极简配置”路线；**Moltis** 则更侧重“开发者工作流/多模型编排”。
*   **社区规模**：OpenClaw 的社区活跃度是第二梯队项目（如 NanoBot, IronClaw）的 10 倍以上，拥有最丰富的插件生态，但同时也背负了最沉重的历史包袱和兼容性债务。

---

## 4. 共同关注的技术方向

通过对各项目 PR 和 Issues 的聚类分析，以下需求在多个项目中同时涌现，代表了当前的行业痛点与热点：

*   **多模态能力的全面补齐**
    *   **涉及项目**：NanoBot, PicoClaw, ZeptoClaw, CoPaw
    *   **具体诉求**：解决 Telegram/Discord/QQ 等渠道中图片、视频收发及识别的问题。各项目均在修补多媒体消息处理的最后一公里。

*   **安全沙箱与权限控制**
    *   **涉及项目**：OpenClaw, Zeroclaw, PicoClaw, CoPaw, NullClaw
    *   **具体诉求**：
        *   **Zeroclaw/PicoClaw**：收紧默认安全策略（拒绝远程执行、拒绝明文 Key）。
        *   **OpenClaw/CoPaw**：防止 Agent 自杀或执行破坏性命令。
        *   **CoPaw**：限制 `write_file` 和 Shell 命令的破坏力。

*   **交互式配置与“开箱即用”**
    *   **涉及项目**：NanoBot, TinyClaw, NanoClaw
    *   **具体诉求**：用户普遍厌倦手动编辑 JSON 配置文件。
        *   **NanoBot**：引入了 CLI 交互向导。
        *   **TinyClaw**：正在开发 Web-based Setup。

*   **多智能体协作与编排**
    *   **涉及项目**：OpenClaw, NanoBot, PicoClaw, IronClaw, Moltis
    *   **具体诉求**：
        *   **NanoBot/Moltis**：支持多 Worker 异步协作。
        *   **OpenClaw/PicoClaw**：探索子 Agent 通信与状态管理。

---

## 5. 差异化定位分析

| 维度 | 典型项目 | 关键差异 |
| :--- | :--- | :--- |
| **架构与性能** | **OpenClaw (Node.js)** vs **Zeroclaw (Rust)** | OpenClaw 生态庞大但内存泄漏频发；Zeroclaw 以 Rust 提供极致性能与内存安全，但生态尚在早期。 |
| **安全模型** | **Zeroclaw** vs **CoPaw** | Zeroclaw 强制“默认拒绝”，适合生产环境但对个人用户稍显繁琐；CoPaw 正在从“随意执行”转向“规则限制”的治理阶段。 |
| **部署形态** | **TinyClaw** vs **Moltis** | TinyClaw 追求极致轻量和 Web 化（类似 Serverless）；Moltis 侧重本地持久化和复杂任务编排。 |
| **应用场景** | **LobsterAI** | 专注于“个人知识库管理”与“本地大模型”结合，而非全能型 Agent，目标用户更偏向内容创作者。 |

---

## 6. 社区热度与成熟度

*   **第一梯队（成熟与影响力）**：
    *   **OpenClaw**：功能最全，社区最大，但稳定性在快速版本更迭中波动（如 `v2026.3.12` 事故）。
    *   **Zeroclaw**：工程化程度极高，版本发布规范，是寻找稳定生产级方案的首选。

*   **第二梯队（快速迭代与创新）**：
    *   **NanoBot / PicoClaw / IronClaw**：活跃度高，正在积极探索多 Agent、混合搜索、自适应学习等前沿功能，但伴随着不少 Breaking Changes。

*   **第三梯队（垂直打磨）**：
    *   **TinyClaw / ZeptoClaw / NullClaw**：专注于解决特定体验痛点（配置难、图片发送、Windows 兼容），社区较小但反馈响应极快。

*   **风险警告**：
    *   **CoPaw**：正在经历严重的“成长痛”，虽然功能强大，但近期 Bug 多涉及数据丢失和进程崩溃，需谨慎用于关键业务。

---

## 7. 值得关注的趋势信号

1.  **从“单次对话”到“长期记忆”的演进**：
    *   **信号**：**NanoClaw** 引入 `USER.md` 结构化记忆，**IronClaw** 引入自适应学习和会话搜索，**OpenClaw** 讨论内存清理策略。
    *   **价值**：Agent 正在从单纯的问答工具进化为能够“记住”用户偏好并进化的真正智能体。

2.  **“配置疲劳”催生标准化工具**：
    *   **信号**：**NanoBot** 的 `onboard` 向导、**TinyClaw** 的 Web Setup。
    *   **价值**：未来的开源项目竞争点不仅在于功能，更在于**首次运行体验 (FTUE)**。谁能把复杂的 LLM、Key、渠道配置做成“下一步、下一步”的向导，谁就能获得更多用户。

3.  **多 Agent 协同已成必然方向**：
    *   **信号**：**Moltis** 解决 Agent 空白重试、**OpenClaw** 增加信任窗口。
    *   **价值**：单一 Agent 无法同时解决复杂编码、搜索和沟通任务。生态正在向“主控 Agent + 子工具/Agent”的架构演进。

4.  **本地化与隐私优先**：
    *   **信号**：**LobsterAI** 强调本地 Ollama 集成，**Zeroclaw** 拒绝明文传输 Key。
    *   **价值**：随着企业级用户进入，对数据不出域的需求强烈，本地 RAG + 混合模型是刚需。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-15)

**汇报人**：开源项目智能分析师
**数据源**：GitHub.com/HKUDS/nanobot
**统计周期**：过去 24 小时 (2026-03-14 至 2026-03-15)

---

## 1. 今日速览
NanoBot 项目今日呈现出极高的开发活跃度与社区参与度。过去 24 小时内，项目共收到 **57 条 PR** 更新（待合并 34 条）和 **27 条 Issues**，显示了强劲的功能迭代势头。核心进展集中在 **多模态支持（图片识别）、多 Agent 协作（团队模式）以及用户体验优化（交互式配置向导）** 三大领域。虽然无新版本发布，但大量 PR 的涌现表明项目正处于 `0.1.5` 或下一迭代的功能密集开发期。同时，关于 QQ、Telegram、WhatsApp 等渠道的 Bug 报告较多，多渠道适配的稳定性是当前维护的重点。

---

## 2. 版本发布
**无新版本发布**。
*注：当前最新版本仍为 `v0.1.4.post4`。根据 Issues 反馈，部分用户在源码升级至此版本时遇到了缓存问题 ([Issue #1765](https://github.com/HKUDS/nanobot/issues/1765))，建议开发者关注此类升级痛点。*

---

## 3. 项目进展

尽管今日无合并记录，但大量新提交的 PR 明确了项目下一阶段的演进方向：

*   **迈向多模态交互**：
    *   **[#2010](https://github.com/HKUDS/nanobot/pull/2010)**: WhatsApp 渠道新增图片、音频、视频等媒体的收发支持，补齐了多媒体交互短板。
    *   **[#2000](https://github.com/HKUDS/nanobot/issues/2000)**: 社区用户提交了 QQ 渠道的图像识别补丁，官方极有可能参考此方案完善对 Qwen3.5 等本地多模态模型的支持。

*   **Agent 协作能力重构**：
    *   **[#2013](https://github.com/HKUDS/nanobot/pull/2013)**: 提出了 "Nano Team Mode"，支持 LLM 规划的多 Worker 异步协作。这标志着 NanoBot 从单 Agent 辅助向多 Agent 团队协同进化的关键一步。
    *   **[#2002](https://github.com/HKUDS/nanobot/pull/2002)**: 新增 `interagent` 通信渠道，允许实例间直接通过 HTTP 进行实时通信，为分布式 Agent 布局打下基础。

*   **开发体验优化**：
    *   **[#2021](https://github.com/HKUDS/nanobot/pull/2021)**: 补充了分支策略和贡献指南，有助于规范化社区贡献流程。
    *   **[#2023](https://github.com/HKUDS/nanobot/pull/2023)**: 针对技能管理，支持通过 Frontmatter 开关来启用/禁用技能，响应了用户灵活配置的需求 ([#1932](https://github.com/HKUDS/nanobot/issues/1932))。

---

## 4. 社区热点
*讨论热度最高的议题集中在配置体验、渠道 Bug 及新功能尝鲜上。*

*   **[Feature] 交互式配置向导 (`nanobot onboard`)** - **[#2018](https://github.com/HKUDS/nanobot/issues/2018)** / **[#2006](https://github.com/HKUDS/nanobot/pull/2006)**
    *   **热度**：⭐⭐⭐⭐⭐
    *   **议题**：社区热烈讨论新的 CLI 配置向导功能，旨在解决手动编辑 `config.json` 的痛点。
    *   **反馈**：用户普遍支持，认为这是降低上手门槛的重要功能。PR #2006 已展示了支持上下键选择的交互界面。

*   **[Bug] Telegram 机器人重复回复与 Markdown 渲染问题** - **[#1692](https://github.com/HKUDS/nanobot/issues/1692)**
    *   **热度**：⭐⭐⭐⭐
    *   **议题**：用户反馈 Bot 总是回复两次（一次纯文本，一次 Markdown），造成干扰。
    *   **反馈**：这是一个长期未解决的体验问题，随着近期更新再次被提及，急需维护者排查消息发送逻辑。

*   **[Bug] 技能禁用/内存管理/代码报错** - **[#1932](https://github.com/HKUDS/nanobot/issues/1932)**, **[#1174](https://github.com/HKUDS/nanobot/issues/1174)**, **[#1998](https://github.com/HKUDS/nanobot/issues/1998)**
    *   **议题**：技能无法禁用（只能删除）、本地模型内存整合失败、Coder 类模型（GLM-5/Qwen3.5）参数格式报错。
    *   **反馈**：反映了项目在适配不同模型和长对话管理方面仍有优化空间。目前已有 PR (#2023) 尝试解决技能禁用问题。

---

## 5. Bug 与稳定性

*   **[严重] 渠道功能性阻塞**
    *   **QQ 频道无法发送文件** ([#2003](https://github.com/HKUDS/nanobot/issues/2003))：用户无法通过 Bot 获取生成的文档或图片，影响核心工作流。
    *   **企业微信 配置缺失** ([#1988](https://github.com/HKUDS/nanobot/issues/1988))：升级后配置项丢失，导致 Gateway 无法启动。
    *   **WhatsApp 二维码生成失败** ([#1879](https://github.com/HKUDS/nanobot/issues/1879))：阻碍用户登录。

*   **[中等] 模型兼容性**
    *   **Coder 类模型报错** ([#1998](https://github.com/HKUDS/nanobot/issues/1998))：升级 post4 后，使用 GLM-5/Qwen3.5 等 Code 模型频繁报错，提示 JSON 格式无效。
    *   **历史截断引发 400 错误** ([#2015](https://github.com/HKUDS/nanobot/pull/2015))：当 `max_messages` 切断工具链中间的对话时，会引发 API 请求格式错误，已有修复 PR。

*   **[轻微] UI/UX 问题**
    *   **CLI 输出残留** ([#1956](https://github.com/HKUDS/nanobot/issues/1956))：`nanobot is thinking...` 字符未被正确清除。
    *   **媒体文件覆盖** ([#1501](https://github.com/HKUDS/nanobot/issues/1501))：Telegram 媒体文件名生成逻辑不唯一，导致文件被静默覆盖。

---

## 6. 功能请求与路线图信号

从 Issues 和 PRs 中，我们窥见未来版本的可能方向：

*   **可观测性增强**：[#2022](https://github.com/HKUDS/nanobot/pull/2022) 提议在 JSONL 日志中记录 Token 使用量和成本，回应了用户对账单透明的需求 ([#2020](https://github.com/HKUDS/nanobot/issues/2020))。
*   **搜索能力扩展**：[#2012](https://github.com/HKUDS/nanobot/pull/2012) 引入了 Tavily 作为搜索提供商，意图减少对单一 Google Search 的依赖。
*   **安全与隔离**：[#1940](https://github.com/HKUDS/nanobot/pull/1940) 尝试使用 `bubblewrap` 对 `exec` 调用进行沙箱隔离，这对允许 Agent 执行代码的用户至关重要。
*   **多模型支持**：[#2026](https://github.com/HKUDS/nanobot/pull/2026) 开始支持 `openrouter/*` 模型，[#1991](https://github.com/HKUDS/nanobot/issues/1991) 请求支持多个 `custom` 模型配置，显示用户对模型切换灵活度的强烈需求。

---

## 7. 用户反馈摘要

*   **好评**：
    *   用户对新的 **"交互式配置向导"** 给予了积极反馈，认为比手动编辑 JSON 文件直观得多。
    *   社区开发者积极贡献代码，如为 QQ 频道添加图片识别功能，显示了对本地模型适配的热情。
*   **痛点**：
    *   **黑盒焦虑**：主 Agent 的思考过程可见，但 **子 Agent 的执行过程是黑盒** ([#1955](https://github.com/HKUDS/nanobot/issues/1955))，这让用户难以调试。
    *   **并发处理**：有技术用户指出当前 `_dispatch` 机制使用全局锁，**处理一个客户端会阻塞所有其他客户端** ([#1976](https://github.com/HKUDS/nanobot/issues/1976))，这在高并发场景下是性能瓶颈。
    *   **升级困难**：源码升级方式在 post4 版本出现失效 ([#1765](https://github.com/HKUDS/nanobot/issues/1765))。

---

## 8. 待处理积压
*提醒维护者关注以下长期未关闭或高优先度的议题：*

*   **[#1174](https://github.com/HKUDS/nanobot/issues/1174)** (Open since 2026-02-25): 内存整合 长时间运行或失败问题，导致无法开启新会话。
*   **[#1692](https://github.com/HKUDS/nanobot/issues/1692)** (Open since 2026-03-08): Telegram 重复回复问题。
*   **[#1955](https://github.com/HKUDS/nanobot/issues/1955)**: 子 Agent 执行过程可视化需求。
*   **[#1976](https://github.com/HKUDS/nanobot/issues/1976)**: 并发处理阻塞架构问题。

---
**分析师结语**：NanoBot 正在快速进化，多 Agent 协作与多模态能力是最大亮点。但在快速迭代新功能的同时，建议核心团队关注基础渠道（特别是 Telegram 和 QQ）的稳定性回归，以及解决用户反馈的配置升级难题。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 (2026-03-15)

## 1. 今日速览
Zeroclaw 项目今日处于**极高强度**的开发迭代状态，社区活跃度极高。过去 24 小时内合并了 32 个 PR 并关闭了 19 个 Issues，同时发布了 10 个新版本（含大量 Beta 版本），显示出项目正在快速冲刺 v0.3.0 及后续版本的稳定性。从提交记录来看，工程团队正集中解决 **Matrix 渠道集成**、**macOS (Homebrew) 安装体验**以及**Anthropic Provider 兼容性**等关键问题。虽然“Bug”类 Issue 依然较多，但多位核心贡献者（如 `spacelobster88` 和 `theonlyhennygod`）迅速提交了针对性的修复 PR，表明项目维护团队响应迅速，具备良好的工程韧性。

## 2. 版本发布
今日主要发布了 **v0.3.0** 正式版及一系列 v0.2.x 和 v0.3.x 的 Beta 测试版。

*   **v0.3.0 (正式版)**
    *   **核心更新**：引入了全面的通道矩阵测试（`channels: comprehensive channel matrix tests`）；优化了 CI 流程，实现了 Release 时自动同步 README 和贡献者信息。
    *   **影响**：这标志着通道系统（特别是 Matrix）的稳定性达到了一个新的里程碑。
    *   *Full changelog: [v0.2.1...v0.3.0](https://github.com/zeroclaw-labs/zeroclaw/compare/v0.2.1...v0.3.0)*

*   **v0.2.2 (Beta)**
    *   包含了通道矩阵测试的同步更新。

*   **v0.2.1 (Beta/稳定版)**
    *   **功能新增**：增加了 WeCom (企业微信) Bot Webhook 通道支持；新增了 `tool_filter_groups` 用于 MCP 工具架构过滤。
    *   **持久化**：支持了交互会话状态的持久化与恢复，提升了 Agent 的长对话体验。
    *   **发布流程**：新增了 crates.io 发布工作流。

## 3. 项目进展
今日合并与关闭的 PR 显示出项目在以下三个方向取得了实质性进展：

*   **通道系统修复与增强 (Channels)**：
    *   多个 PR 针对 Matrix 通道进行了修复，包括修正回复时的 `channel key` 不匹配问题（[PR #3522](https://github.com/zeroclaw-labs/zeroclaw/pull/3522)）以及修复图片消息的大小写格式问题（[PR #3523](https://github.com/zeroclaw-labs/zeroclaw/pull/3523)），确保了多模态功能在 Matrix 上的可用性。
    *   修复了 `channels` 模块中未声明的 `AtomicU32` 导致的 32 位目标编译失败问题（[PR #3521](https://github.com/zeroclaw-labs/zeroclaw/pull/3521)）。

*   **安全性重构**：
    *   推进了一个关键的安全补丁（[PR #3527](https://github.com/zeroclaw-labs/zeroclaw/pull/3527))，旨在修复“渠道驱动运行绕过 ApprovalManager”的严重逻辑漏洞。这意味着未来在 Telegram/Matrix 等渠道运行的 Agent 也将正确遵守用户配置的工具审批策略（`autonomy` 设置）。

*   **安装与包管理优化**：
    *   针对 macOS Homebrew 用户的安装体验进行了集中优化，包括修正首次启动时缺失 var 目录（[PR #3524](https://github.com/zeroclaw-labs/zeroclaw/pull/3524)）以及修正引导程序的配置路径检测（[PR #3526](https://github.com/zeroclaw-labs/zeroclaw/pull/3526)）。
    *   修复了 Anthropic Provider 在处理空文本块时的 500 错误（[PR #3515](https://github.com/zeroclaw-labs/zeroclaw/pull/3515)），解决了导致会话卡死的 API 兼容性问题。

## 4. 社区热点
今日社区讨论主要集中在安全策略的易用性与安装配置的复杂性上：

*   **[#1478 除了安全,什么功能也没有](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)** (35 👍)
    *   **核心争议**：用户抱怨 ZeroClaw 的安全策略过于严格（拒绝执行安装 ffmpeg、拒绝脚本），导致只能作为聊天机器人，无法作为自动化工具使用。
    *   **用户痛点**：缺乏一个简单的“上帝模式”或“完全放权”配置选项，让个人用户能够绕过所有限制。
    *   **状态**：已关闭。虽然 Issue 关闭，但反映了用户对**安全性与易用性平衡**的强烈诉求。

*   **[#1889 Allow script files in skills via configuration option](https://github.com/zeroclaw-labs/zeroclaw/issues/1889)** (4 comments)
    *   **诉求**：用户希望安装包含 `.sh` 或 `.bash` 的 Skills 时，能通过配置允许而非直接被安全策略拦截。

*   **[#3502 Real Multi-Agent System with Context Engineering](https://github.com/zeroclaw-labs/zeroclaw/issues/3502)**
    *   **新需求**：提出了更高级的多 Agent 系统架构，包括基于文件的系统提示词构建和严格的技能隔离。这显示了高级用户正试图将 ZeroClaw 应用于更复杂的编排场景。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，主要集中在运行时环境兼容性和特定通道的错误处理上。

*   **S1 - 严重阻塞**
    *   **[#3493 Anthropic now throws 500s](https://github.com/zeroclaw-labs/zeroclaw/issues/3493)**：Anthropic API 返回 500 错误。已由 [PR #3515](https://github.com/zeroclaw-labs/zeroclaw/pull/3515) 修复（空文本块问题）。
    *   **[#3454 Web Dashboard not working](https://github.com/zeroclaw-labs/zeroclaw/issues/3454)** & **[#3508 Web Dashboard not loading](https://github.com/zeroclaw-labs/zeroclaw/issues/3508)**：新安装用户访问 Web Dashboard 遇到 404 错误，表明 Web 服务路由或静态文件服务可能存在问题。
    *   **[#2499 win11，双击zeroclaw.exe 闪退](https://github.com/zeroclaw-labs/zeroclaw/issues/2499)**：Windows 桌面体验依然不稳定，存在直接崩溃问题。

*   **S2 - 行为降级**
    *   **[#1857 Environment variables can not be accessed by agent](https://github.com/zeroclaw-labs/zeroclaw/issues/1857)**：Docker 环境下 Agent 无法访问环境变量，导致无法携带认证信息访问 HTTP 端点。
    *   **[#2060 Panic in channels/traits.rs](https://github.com/zeroclaw-labs/zeroclaw/issues/2060)**：处理多字节 UTF-8 字符时 Daemon 直接 Panic 退出。

*   **特定通道问题**
    *   **[#2494 feishu cannot start](https://github.com/zeroclaw-labs/zeroclaw/issues/2494)**：飞书配置连接失败（WS conn error）。
    *   **[#3476 Signal channel sending does not work](https://github.com/zeroclaw-labs/zeroclaw/issues/3476)**：Signal 通道接收正常但发送失败。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以推断出潜在的路线图动向：

*   **多 Agent 架构增强**：[Issue #3502](https://github.com/zeroclaw-labs/zeroclaw/issues/3502) 提出的多 Agent 请求非常详细，可能预示着未来版本将重点改进上下文工程和子 Agent 管理能力。
*   **硬件/物联网支持**：[PR #3517](https://github.com/zeroclaw-labs/zeroclaw/pull/3517) 提出了添加树莓派 GPIO 和 I2C/SPI 硬件插件系统的功能。虽然这可能只是个人贡献者的尝试，但若合并，将大大拓展 ZeroClaw 在边缘计算/AIoT 领域的应用场景。
*   **移动端/跨平台支持**：[PR #3525](https://github.com/zeroclaw-labs/zeroclaw/pull/3525) 正在添加 Termux/Android (aarch64-linux-android) 的发布目标，表明项目官方正在计划支持 Android 环境运行。

## 7. 用户反馈摘要
*   **负面反馈**：
    *   **安装门槛高**：Homebrew 安装后找不到配置目录、Debian 安装脚本 404、Windows 闪退等问题频发。
    *   **安全策略过于死板**：多位用户反馈 ZeroClaw 为了安全牺牲了太多实用性，无法安装依赖或运行脚本，导致从 OpenAI 迁移过来的用户感到“束手束脚”。
    *   **文档过时**：用户指出文档中仍包含已废弃的 CLI 参数（如 `--interactive`），导致新手无法按文档操作。

*   **正面反馈**：
    *   功能强大，意图作为 OpenClaw 的轻量级替代品。

## 8. 待处理积压
*   **[#1800 Unify URL validation](https://github.com/zeroclaw-labs/zeroclaw/issues/1800)**：统一 URL 验证并引入可配置的允许列表（CIDR/域名），这对于支持 TUN/fake-IP 和内部网络场景至关重要，但自 2 月提出后虽有关注但未见合并。
*   **[#3487 Channel-driven runs bypass ApprovalManager](https://github.com/zeroclaw-labs/zeroclaw/issues/3487)**：这是一个架构级的安全隐患。虽然已有 PR #3527，但在 PR 合并前，所有通过非 CLI 渠道运行的 Agent 都在绕过安全审批。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-15)

## 📊 今日速览
今日 PicoClaw 项目处于**极高活跃度**状态，在过去24小时内共处理了 81 条 Issues 与 PRs 的更新，显示出强劲的开发迭代势头。
核心架构方面的讨论白热化，社区正在激烈辩论 Agent 循环的重构方向（事件驱动 vs 现有架构），这预示着 v0.3.x 版本可能会有重大的底层变更。
尽管活跃度高，但今日提交的 PR 数量（61条更新）远超合并数，且有多个严重的 Bug 报告（如 Cron 任务失效、模型配置热更新不生效）被提出，表明当前的 Nightly 版本可能存在不稳定性，建议生产环境谨慎使用。

---

## 🚀 版本发布
**新版本**: `v0.2.3-nightly.20260314.c68b4f39`
- **发布说明**: 这是一个自动构建的 Nightly 版本，官方提示可能存在不稳定因素。
- **主要变更**: 虽然未发布详细 Changelog，但结合今日 PR，该版本可能包含了对飞书视频修复、Agent Steering（干预）功能的初步代码、以及针对 OpenAI 兼容提供商的修复。
- **⚠️ 注意事项**: 已有用户反馈在该 Nightly 版本中 `image_model` 配置字段未生效 ([#1578](https://github.com/sipeed/picoclaw/issues/1578))，且存在 prompt_cache_key 相关的 Bug ([#1574](https://github.com/sipeed/picoclaw/issues/1574))。

---

## 🛠️ 项目进展
今日共有 34 个 PR 被合并或关闭，虽然部分 PR 显示为 CLOSED（未合并），但以下功能代码已进入主分支或准备就绪：

*   **🎯 Agent Steering (干预机制)**: [PR #1517](https://github.com/sipeed/picoclaw/pull/1517) 引入了“Agent 转向”功能。此前 Agent 一旦开始执行工具链，用户无法中途干预。此功能允许用户在 Agent 运行过程中重定向或打断，极大地提升了多步任务的可控性。
*   **🔐 安全性加固**:
    *   **默认配置收紧**: [PR #1576](https://github.com/sipeed/picoclaw/pull/1576) 修改了默认配置，将远程执行 (`tools.exec.allow_remote`) 默认设定为 `false`，遵循了“默认安全”的原则，防止远程渠道通过命令执行工具攻击宿主机。
    *   **凭证加密**: [PR #1521](https://github.com/sipeed/picoclaw/pull/1521) 正在进行中，计划引入 AES-GCM 加密和 SecureStore，解决 API Key 明文存储的安全痛点。
*   **🛠️ 通道适配增强**:
    *   **Azure OpenAI 支持**: [PR #1422](https://github.com/sipeed/picoclaw/pull/1422) 成功合并，正式引入了对 Azure OpenAI 提供商的一等公民支持。
    *   **飞书 体验优化**: [PR #1577](https://github.com/sipeed/picoclaw/pull/1577) 修复了视频上传失败的问题（使用了正确的消息类型和元数据）；[PR #1537](https://github.com/sipeed/picoclaw/pull/1537) 修复了飞书话题群回复不进话题的 Bug。
*   **🐛 工具修复**: [PR #1580](https://github.com/sipeed/picoclaw/pull/1580) 修复了 `exec` 工具中的路径遍历漏洞，阻止通过符号链接逃逸工作区。

---

## 🔥 社区热点
今日讨论焦点集中在架构重构与模型适配，反映出用户对系统扩展性和稳定性的双重关切：

1.  **[Agent refactor] Event-driven agent loop... ([#1316](https://github.com/sipeed/picoclaw/issues/1316))**
    *   **状态**: [OPEN] - 热议中 (10条评论)
    *   **核心内容**: 这是一个由维护者发起的架构重构提案，旨在将 Agent Loop 从“黑盒”改造为“事件驱动”系统，支持 Hooks（钩子）、中断和动态消息追加。
    *   **分析**: 这标志着 PicoClaw 正试图从单一 Agent 向更复杂的编排层演进。虽然讨论激烈，但这是解决当前 Agent 无法被观察和控制的关键一步。

2.  **Meta: Agent refactor ([#1216](https://github.com/sipeed/picoclaw/issues/1216))**
    *   **状态**: [OPEN] - 持续关注 (7条评论)
    *   **核心内容**: 确立了 Agent 相关代码重构的必要性和长期目标，为 #1316 提供了顶层指导。

3.  **[Feature] Expose local file path in Feishu... ([#1506](https://github.com/sipeed/picoclaw/issues/1506))**
    *   **状态**: [CLOSED] - 已解决
    *   **核心内容**: 用户请求在飞书 inbound 消息中暴露本地文件路径，以便 Agent 能够直接处理文档/音视频文件。
    *   **分析**: 这是一个高价值的功能请求，今日虽被关闭，很可能是因为相关 PR ([#1534](https://github.com/sipeed/picoclaw/pull/1534)) 已经接手并实现了 Feishu 卡片解析和文件路径暴露的功能。

---

## 🐛 Bug 与稳定性
今日报告的 Bug 涉及核心功能，严重影响 Nightly 版本的可用性：

*   **[HIGH] [BUG] picoclaw cron add指令有严重的bug ([#1532](https://github.com/sipeed/picoclaw/issues/1532))**
    *   **描述**: 用户报告 `picoclaw cron add` 指令存在严重 Bug（结合日志分析，可能涉及参数解析错误导致任务创建失败或执行异常）。
    *   **状态**: OPEN
    *   **进展**: 暂无关联 Fix PR，需尽快修复。
*   **[HIGH] [BUG] 新增一个模型在会话中不生效，需重启gateway后才生效 ([#1493](https://github.com/sipeed/picoclaw/issues/1493))**
    *   **描述**: 配置新模型后，Gateway 无法热加载，必须重启进程才能生效。
    *   **状态**: OPEN
    *   **影响**: 严重影响多模型切换场景下的运维效率。
*   **[MED] [BUG] image_model config field is not wired into agent loop ([#1578](https://github.com/sipeed/picoclaw/issues/1578))**
    *   **描述**: `agents.defaults` 中的 `image_model` 配置被忽略，图片始终发往主模型。
    *   **状态**: OPEN
    *   **影响**: 导致无法为多模态模型指定专门的视觉模型。
*   **[MED] [BUG] Cron tasks may occasionally fail to execute ([#1568](https://github.com/sipeed/picoclaw/issues/1568))**
    *   **描述**: Cron 任务有时仅发送描述而不执行实际任务。
    *   **状态**: OPEN
    *   **相关**: [PR #757](https://github.com/sipeed/picoclaw/pull/757) 曾尝试修复 Cron 回复不发送的问题，但新问题表明逻辑可能仍有缺陷。
*   **[SEC] Security: pico setup should not enable query-token auth... ([#1530](https://github.com/sipeed/picoclaw/issues/1530))**
    *   **描述**: 初始化设置默认开启了较弱的 query-token 认证和通配源，扩大了攻击面。
    *   **状态**: OPEN
    *   **趋势**: 维护者已在 [PR #1576](https://github.com/sipeed/picoclaw/pull/1576) 中开始收紧默认安全设置。

---

## 💡 功能请求与路线图信号
用户需求呈现出向“多智能体协同”和“企业级能力”靠拢的趋势：

*   **Multi-agent Collaboration Framework ([#294](https://github.com/sipeed/picoclaw/issues/294))**: 这一路线图级别的 Feature 再次获得更新。用户迫切希望从单 Agent 架构过渡到多 Agent 协同框架。
*   **Capability discovery endpoint ([#1474](https://github.com/sipeed/picoclaw/issues/1474))**: 请求提供 API 用于外部编排层自动发现 PicoClaw 节点的能力（如支持的技能、Profile）。
*   **Subagent status reporting ([#1539](https://github.com/sipeed/picoclaw/issues/1539))**: 请求增加工具或 API 来查询后台异步运行的 Subagent 状态。目前已有 [PR #1540](https://github.com/sipeed/picoclaw/pull/1540) 正在实现此功能。
*   **Model-side search & fastembed ([#1498](https://github.com/sipeed/picoclaw/issues/1498))**: 用户请求添加模型端搜索和 `fastembed` 向量嵌入支持。

---

## 📝 用户反馈摘要
*   **痛点 - 平台兼容性**: 用户抱怨飞书渠道不支持 32位 ARM (armv7) 架构 ([#407](https://github.com/sipeed/picoclaw/issues/407))，限制了在树莓派等老旧设备上的部署。
*   **痛点 - 配置与运维**: 多个用户反馈配置重载 ([#1493](https://github.com/sipeed/picoclaw/issues/1493)) 和 Setup 过程中的安全默认值 ([#1530](https://github.com/sipeed/picoclaw/issues/1530)) 问题，显示出对“开箱即用”安全性和易用性的双重期待。
*   **痛点 - 技能系统**: 用户报告安装了 `skill-vetter` 技能但因名称连字符/下划线转换规则问题导致调用失败 ([#1533](https://github.com/sipeed/picoclaw/issues/1533))，反映出技能加载器的字符串处理逻辑存在瑕疵。

---

## ⏳ 待处理积压
以下 Issue 长期处于 OPEN 状态且较为重要，建议维护者优先关注：
*   **[Feature] Base Multi-agent Collaboration Framework ([#294](https://github.com/sipeed/picoclaw/issues/294))**: 创建于 2026-02-16，作为核心架构演进的关键点，需尽快确定方案。
*   **[issue]look like feishu not support armv7 32bit ([#407](https://github.com/sipeed/picoclaw/issues/407))**: 创建于 2026-02-18，涉及广泛的硬件兼容性问题。

---
*本日报由 AI 助手基于 GitHub 公开数据自动生成。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 (2026-03-15)

## 1. 今日速览
NanoClaw 项目今日展现出极高的开发活跃度，代码提交与讨论热度持续升温。过去 24 小时内共收到 **50 条 Pull Requests**（其中 44 条待审核）和 **18 条新 Issues**，表明社区正积极贡献代码与反馈意见。虽然今日没有新版本发布，但核心功能的增强工作正在紧锣密鼓地进行，特别是在**内存检索混合搜索**、**Slack 深度集成**及**用户结构化记忆**（USER.md）方面取得了实质性进展。同时，项目面临一定的架构维护压力，主要表现在 Apple Container 运行时的稳定性问题及多个技能分支的合并冲突上。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日虽无 PR 合并记录，但多项关键功能的开发进入审核阶段，显著推进了项目路线图：

*   **核心能力升级：混合搜索与内存增强**
    *   **[PR #1043](https://github.com/qwibitai/nanoclaw/pull/1043)** 提出将当前的纯向量检索升级为 **BM25 关键词 + 向量混合检索**。这解决了 Agent 在处理关键词密集型查询时的盲点，并增加了重排序和时效性权重，有望大幅提升长期记忆的准确性。
*   **用户体验优化：Slack 深度集成**
    *   **[PR #1081](https://github.com/qwibitai/nanoclaw/pull/1081)** 增加了 **Emoji 反应** 的双向支持，Agent 不仅能看到用户的反应，还能主动回复表情，交互更加生动。
    *   **[PR #1082](https://github.com/qwibitai/nanoclaw/pull/1082)** 实现了 **Thread (线程) 回复**支持，确保 Agent 在 Slack 中的对话结构更清晰，不再扁平化干扰频道。
*   **记忆架构演进：结构化用户档案**
    *   **[PR #1063](https://github.com/qwibitai/nanoclaw/pull/1063)** 引入了 `/add-user-memory` 技能，旨在创建全局共享的 `USER.md` 文件，用于存储用户偏好、习惯等个性化信息，补全了“记忆”模块中关于“用户画像”的拼图（关联 **[Issue #910](https://github.com/qwibitai/nanoclaw/issues/910)**）。

## 4. 社区热点
今日社区讨论集中在架构设计与扩展性上：

*   **技能市场构想** **[Issue #384](https://github.com/qwibitai/nanoclaw/issues/384)** (14 👍, 8 评论)
    *   **摘要**：这是目前获赞最多的开放 Issue。讨论核心是建立一个技能注册表，贯彻 NanoClaw "核心最小化，按需扩展攻击面" 的安全理念。
    *   **诉求**：社区渴望一个官方或去中心化的方式来发现、安装和更新第三方技能，而不是手动复制文件。
*   **代码安全与防护** **[Issue #829](https://github.com/qwibitai/nanoclaw/issues/829)** (1 评论)
    *   **摘要**：针对 `SOUL.md` 规则的完善讨论，防止 Agent 伪造工具执行记录。
    *   **关联**：**[PR #1035](https://github.com/qwibitai/nanoclaw/pull/1035)** 已提出补丁，通过 `PostToolUse` 钩子净化 WebFetch/WebSearch 的输出，防止提示注入攻击。

## 5. Bug 与稳定性
今日报告的 Bug 涉及系统启动、配置一致性及多平台兼容性：

*   **[High] Apple Container 运行时竞态条件** **[Issue #1067](https://github.com/qwibitai/nanoclaw/issues/1067)**
    *   **现象**：在 macOS 配置了开机自启 (`launchd`) 时，NanoClaw 因容器服务未就绪而启动失败。
    *   **影响**：导致 macOS 用户在重启后无法通过自动任务使用 Agent。
    *   **状态**：待修复。
*   **[Medium] 辅助名称未同步** **[Issue #753](https://github.com/qwibitai/nanoclaw/issues/753)**
    *   **现象**：注册自定义名称时，`groups/main/CLAUDE.md` 未被更新。
    *   **影响**：主频道的 Agent 仍使用旧名介绍自己，造成用户困惑。
    *   **状态**：待修复。
*   **[Low] 知识盲区：ISO 时间处理** **[Issue #698](https://github.com/qwibitai/nanoclaw/issues/698)**
    *   **现象**：Agent 无法仅凭 ISO 时间戳准确推断当前是星期几或是否周末。
    *   **影响**：导致处理日程安排类任务时出现常识性错误。
*   **[Infrastructure] 自动合并失败** **[Issue #1073](https://github.com/qwibitai/nanoclaw/issues/1073)**, **[Issue #1074](https://github.com/qwibitai/nanoclaw/issues/1074)**
    *   **现象**：`skill/apple-container` 和 `skill/compact` 分支与主分支 存在冲突。
    *   **影响**：阻碍了这些技能模块的更新迭代，需维护者手动介入。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中窥探下一阶段的发展方向：

*   **Agent 自我进化能力** **[Issue #911](https://github.com/qwibitai/nanoclaw/issues/911)**, **[Issue #912](https://github.com/qwibitai/nanoclaw/issues/912)**
    *   **信号**：项目正在探索让 Agent 自主创建技能的机制。这包括 IPC 通道的设计以及安全扫描机制的引入，标志着 NanoClaw 试图赋予 Agent 更高的自主权。
*   **全局配置加载** **[Issue #1052](https://github.com/qwibitai/nanoclaw/issues/1052)**
    *   **信号**：用户提出主频道应同样遵循 `groups/global/CLAUDE.md` 的配置。这反映了用户希望统一管理所有 Agent 行为的诉求。
*   **管理员模式** **[Issue #926](https://github.com/qwibitai/nanoclaw/issues/926)**
    *   **信号**：计划引入只读的 `/capabilities` 命令，预示着将增强对 Agent 权限和能力的细粒度管控。

## 7. 用户反馈摘要
真实的用户声音揭示了易用性痛点：

*   **Sandbox 迁移痛苦** **[Issue #1080](https://github.com/qwibitai/nanoclaw/issues/1080)**
    *   **反馈**：一位用户表示在尝试迁移到新的 Sandbox 环境时耗时 9 小时，且受挫感极强（"想把 Mac 扔进车流"）。
    *   **痛点**：Sandbox 创建后无法再挂载外部目录（如 Dropbox），这在开发流程中缺乏灵活性。
*   **平台支持困惑** **[Issue #1079](https://github.com/qwibitai/nanoclaw/issues/1079)**, **[Issue #1075](https://github.com/qwibitai/nanoclaw/issues/1075)**
    *   **反馈**：Intel Mac 用户询问安装路径；文档与官网关于 Linux 支持的描述存在矛盾。
    *   **痛点**：文档同步滞后，增加了新用户的上手门槛。

## 8. 待处理积压
部分长期悬而未决的议题需维护者关注：

*   **技能待审核队列**：约有 44 个 PR 处于待合并状态，部分 PR 如 **[PR #519](https://github.com/qwibitai/nanoclaw/pull/519)** (上下文压缩) 和 **[PR #522](https://github.com/qwibitai/nanoclaw/pull/522)** (Slack 线程回复) 自 2 月底起一直处于 Blocked 状态，需推动解决依赖或合并冲突。
*   **技能分支冲突**：`skill/ollama-tool` **([Issue #1066](https://github.com/qwibitai/nanoclaw/issues/1066))** 等多个技能分支与主分支冲突，需手动合并以保持生态兼容性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-03-15)

**报告生成人**：AI 开源项目分析师
**数据来源**：NullClaw (nullclaw/nullclaw) GitHub 仓库
**当前版本**：v2026.3.14

---

### 1. 今日速览
NullClaw 项目今日处于**极高活跃度**状态，过去 24 小时内有 41 条 PR 更新，显示出强劲的开发迭代速度。核心修复集中在**安全性加固**（如 Secret 拒绝明文配置、Header 脱敏漏洞修复）和**平台兼容性**（特别是 Windows Websocket 修复）。社区对 **Subagent（子代理）** 功能的配置文档和使用场景表现出强烈需求，同时暴露出工具调用中的内存管理 Bug。整体来看，项目在保持高频迭代的同时，正迅速响应关键安全漏洞和平台稳定性问题。

---

### 2. 版本发布
**新版本**：`v2026.3.14`
*   **主要修复**：
    *   **内存管理**：修复了潜在的内存泄漏问题。
    *   **CLI 增强**：加固了会话恢复处理逻辑，确保会话状态仅限于 NullClaw 会话。
    *   **变更详情**：[Release v2026.3.14](https://github.com/nullclaw/nullclaw/releases/tag/v2026.3.14)
*   **影响**：建议所有用户尽快更新以获取最新的内存安全和 CLI 稳定性修复。

---

### 3. 项目进展
今日维护者提交了大量针对性修复 PR，显著提升了系统的健壮性和安全性：

*   **[PR #537] 安全：拒绝明文密钥配置**
    *   链接：[#537](https://github.com/nullclaw/nullclaw/pull/537)
    *   进展：现在系统将主动拒绝禁用加密的配置，强制要求 `secrets.encrypt=true`，大幅提升了默认安全性。
*   **[PR #550/549] Windows 兼容性：修复 WebChannel**
    *   链接：[#550](https://github.com/nullclaw/nullclaw/pull/550), [#549](https://github.com/nullclaw/nullclaw/pull/549)
    *   进展：通过将 WebSocket I/O 操作从文件描述符 API 切换为 Socket API，彻底修复了 Windows 平台上本地 WebChannel 无法启动的问题。
*   **[PR #541] 工具修复：HTTP 超时配置生效**
    *   链接：[#541](https://github.com/nullclaw/nullclaw/pull/541)
    *   进展：修复了 `http_request` 工具忽略配置文件中 `http_timeout_secs` 的 Bug，现在不再硬编码 60 秒超时。
*   **[PR #543] 内存安全：Header 脱敏所有权修复**
    *   链接：[#543](https://github.com/nullclaw/nullclaw/pull/543)
    *   进展：解决了 `redactHeadersForDisplay` 中可能导致静态字符串被错误释放的内存所有权不一致问题。

---

### 4. 社区热点
今日讨论焦点集中在**高级代理功能的配置**与**多平台适配**上：

*   **[#508] Subagents 配置文档缺失** (评论: 2, 👍: 1)
    *   链条：[#508](https://github.com/nullclaw/nullclaw/issues/508)
    *   诉求：用户迫切需要关于 Subagent 配置、绑定 和路由 的官方文档和示例。
    *   *响应*：PR [#547](https://github.com/nullclaw/nullclaw/pull/547) 已提交，正在补充相关文档。
*   **[#490] 钉钉 连接成功** (评论: 1)
    *   链接：[#490](https://github.com/nullclaw/nullclaw/issues/490)
    *   诉求：用户展示了成功接入钉钉的截图，验证了 NullClaw 在国内企业级通讯平台上的可用性。
*   **[#525] Bot 设置状态遗忘** (评论: 0)
    *   链接：[#525](https://github.com/nullclaw/nullclaw/issues/525)
    *   诉求：用户报告 `/reasoning`、`/verbose` 等设置在对话中无法持久化，Bot 似乎"忘记"了这些配置。
*   **[#413] 文件读取工具调用停止** (评论: 2)
    *   链接：[#413](https://github.com/nullclaw/nullclaw/issues/413)
    *   诉求：在安装天气 SKILL 后，文件读取工具停止响应，导致 Agent 无法获取外部数据。

---

### 5. Bug 与稳定性
今日报告了多项关键 Bug，其中部分已由修复 PR 覆盖：

*   **[高危] [PR #516] 安全漏洞：敏感 Header 脱敏可被绕过**
    *   描述：当 Header 名称过长（>256字节）时，`isSensitiveHeader` 检查会失效，导致敏感信息可能泄露。
    *   状态：已有修复 PR [#542](https://github.com/nullclaw/nullclaw/pull/542)（将超长名称视为敏感）。
*   **[中危] [Issue #519] HTTP 超时配置无效**
    *   描述：`http_request` 工具强制使用 60 秒超时，忽略配置文件设置，可能导致长时间任务意外中断。
    *   状态：已有修复 PR [#541](https://github.com/nullclaw/nullclaw/pull/541)。
*   **[中危] [Issue #521] 内存管理不一致**
    *   描述：`catch ""` 返回的静态字面量被尝试 `free`，可能导致运行时崩溃。
    *   状态：已有修复 PR [#543](https://github.com/nullclaw/nullclaw/pull/543)。
*   **[低危] [Issue #341] Alibaba 编码计划频率限制**
    *   描述：使用 Alibaba 编码计划时频繁触发 "Rate limit exceeded"。
    *   状态：已关闭。

---

### 6. 功能请求与路线图信号
社区提出的新需求揭示了项目未来的迭代方向：

*   **Subagent 权限扩展**：
    *   **需求**：[#553](https://github.com/nullclaw/nullclaw/issues/553) 用户希望 Subagent 能像主 Agent 一样访问 Skills（技能包）。目前 Subagent 似乎只能访问 System Prompt 和 Tools。
    *   **分析**：这表明 Subagent 正被用于更复杂的任务编排，当前能力边界可能限制了其实用性。
*   **本地化/可配置时区**：
    *   **需求**：[#540](https://github.com/nullclaw/nullclaw/issues/540) 用户希望 Prompt 中的时间戳不再硬编码为 UTC，而是支持本地时区。
    *   **信号**：PR [#546](https://github.com/nullclaw/nullclaw/pull/546) 已实现此功能，可能将在下一版本发布。

---

### 7. 用户反馈摘要
从今日的 Issues 评论中，我们可以提炼出以下真实反馈：

*   **痛点**：
    *   **配置复杂**：Subagent 功能强大但缺乏文档，用户难以上手（Issue #508）。
    *   **状态丢失**：对话过程中的参数设置（如 verbose, reasoning）容易丢失，影响调试体验（Issue #525）。
    *   **错误信息模糊**：HTTP 请求失败时只显示 "CurlFailed"，无法判断是 DNS 问题还是超时（Issue #520，已由 PR #544 修复）。
*   **正面反馈**：
    *   **集成能力**：用户成功接入了钉钉，证明了适配器生态的稳定性（Issue #490）。

---

### 8. 待处理积压
*   **Issue #504 [CLOSED]**：`--help` 参数导致程序直接启动运行时而非显示帮助文档。此问题已在最新版本中修复，但在旧版本中可能困扰用户。
*   **Issue #514**：Gateway 端口被占用时静默失败，导致 Daemon 挂起。此问题影响部署自动化体验，需关注后续修复。

---
**分析师备注**：项目目前代码提交活跃，核心维护者 @manelsen 对 Issues 的响应速度极快（通常在 24 小时内提交修复 PR），显示出极高的项目健康度。建议关注 Windows 平台相关 PR 的合并情况，这可能是 v2026.3.15 的主要亮点。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-15)

## 1. 今日速览
IronClaw 项目今日处于**极高活跃度**状态，过去 24 小时内共处理了 50 条 PR 更新和 19 条 Issue 更新，显示出强劲的开发迭代速度。核心开发团队正集中精力修复 Google Sheets 工具的序列化问题及架构层面的“Critical”级性能缺陷（如 N+1 查询）。同时，社区对“自适应学习系统”等 AI 增强功能的关注度显著提升，预示着项目正从基础工具链向智能化 Agent 演进。今日无新版本发布，主要处于功能合并与代码修护阶段。

## 2. 版本发布
暂无新版本发布。

## 3. 项目进展
今日成功合并了多个关键 PR，显著提升了系统的稳定性与性能：
*   **Google Sheets 工具修复 (PR #1143)**: 修复了 LLM 传递参数时的 JSON 序列化问题。此前 Agent 将 `values` 参数作为字符串而非数组传递，导致写入/追加操作失败。此 PR 引入了基于 Schema 的参数归一化层，彻底解决了工具调用的类型不一致问题 [链接](https://github.com/nearai/ironclaw/pull/1143)。
*   **性能优化**: 解决了 Routine 引擎中的 N+1 查询模式 (PR #1163) 和 SSE 解析路径中的 O(n²) 字符串分配问题 (PR #1153)，大幅降低了高负载下的延迟与资源消耗 [链接](https://github.com/nearai/ironclaw/pull/1163)。
*   **Web 交互体验**: PR #1154 为例行任务增加了“人类可读”的 Cron 调度摘要，解决了用户难以理解原始 Cron 表达式的问题，提升了 UX 易用性 [链接](https://github.com/nearai/ironclaw/pull/1154)。
*   **构建稳定性**: PR #1183 更新了被撤回的依赖项 `uds_windows`，并修复了 `cargo-deny` CI 检查失败的问题 [链接](https://github.com/nearai/ironclaw/pull/1183)。

## 4. 社区热点
*   **[讨论] 自适应学习系统的引入 (PR #1187)**: 社区成员 @smkrv 提交了一个大规模功能 PR，引入了技能合成、用户画像和会话搜索功能。评论量正在增加，这代表了用户希望 AI Agent 具备“记忆”和“进化”能力的强烈诉求 [链接](https://github.com/nearai/ironclaw/pull/1187)。
*   **[请求] Slack Socket 模式支持 (Issue #1155)**: 用户 @justinfiore 提出希望 Slack 通道支持“Socket 模式”而非仅依赖 Webhook，以便在无需开放入站流量的情况下部署实例。这反映了私有化部署用户对网络安全的关注 [链接](https://github.com/nearai/ironclaw/issues/1155)。
*   **[质疑] 文档缺失 (Issue #1174)**: 用户 @Krzysztof318 公开抱怨找不到关于工具限制、技能和信号配置的文档。该 Issue 虽然较新，但可能引发新用户的共鸣，是当前易用性的一大痛点 [链接](https://github.com/nearai/ironclaw/issues/1174)。

## 5. Bug 与稳定性
今日报告了多个高危 Bug，主要集中在工具链和并发处理上：
*   **[Critical] N+1 查询与并发锁问题 (已修复)**:
    *   `routine_engine.rs` 中的 N+1 查询模式会导致性能瓶颈 (Issue #823)。
    *   在异步 I/O 边界持有锁导致 webhook 处理阻塞 (Issue #869)。
    *   *状态*: 对应的修复 PR 已合并。
*   **[High] Google Sheets 工具全面故障 (已修复)**:
    *   LLM 传递 JSON 字符串导致参数验证失败 (Issue #993)。
    *   Spreadsheet 创建成功但内容为空 (Issue #1002)。
    *   OAuth 后依然返回 403 权限错误 (Issue #999)。
    *   *状态*: 已通过 PR #1143 和 #1158 修复。
*   **[High] CI 审查发现的代码风险 (待处理)**:
    *   生产代码中存在不安全的 `.unwrap()` 调用 (Issue #1181)。
    *   Workflow Linting 逻辑绕过了测试代码检查 (Issue #1178)。
    *   *状态*: Issue 已生成，等待修复 PR。

## 6. 功能请求与路线图信号
*   **结构化回退机制 (PR #236)**: 引入 `FallbackDeliverable` 结构，以替代模糊的错误字符串，提供任务失败时的部分成功状态。这将大幅提升 Agent 任务的可观测性，可能很快纳入主分支 [链接](https://github.com/nearai/ironclaw/pull/236)。
*   **LRU 嵌入缓存 (PR #235)**: 为工作区搜索增加内存缓存层，优化重复查询性能。这是对性能优化的持续投入，符合路线图方向 [链接](https://github.com/nearai/ironclaw/pull/235)。
*   **MCP 错误处理标准化 (PR #1158)**: 针对 MCP 协议的 400 认证错误进行了标准化处理，增强了工具生态的健壮性 [链接](https://github.com/nearai/ironclaw/pull/1158)。

## 7. 用户反馈摘要
*   **工具链稳定性不足**: 多位用户反馈 Google Sheets 工具在配置成功后无法正常写入或报错 403，目前该问题已在今日的修复中得到解决，但反映出用户对生产级工具稳定性的迫切需求。
*   **文档缺失**: 有用户表示“找不到关于配置的文档”，认为仅有四个 Markdown 文件不足以支撑复杂功能的配置。这表明随着功能增加，文档建设已成为短板。

## 8. 待处理积压
*   **Issue #722 - HTTP Webhook 安全隐患**: 早在 3 月 8 日提出的关于 Webhook Secret 通过 Body 传输而非 Header 传输的安全隐患和文档不一致问题，目前尚未显示有明确的关闭状态或 PR 关联，需持续关注 [链接](https://github.com/nearai/ironclaw/issues/722)。
*   **PR #836 - 基准测试**: 这是一个 L 级别的 PR，旨在添加安全层热路径的基准测试，已开放一段时间但未合并。完善测试基础设施对于防止性能回归至关重要 [链接](https://github.com/nearai/ironclaw/pull/836)。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-15)

## 1. 今日速览
LobsterAI 项目在过去 24 小时内保持了较高的开发活跃度，主要集中在前端交互重构与本地化功能修复上。尽管没有新版本发布，但项目成功关闭了 3 个 PR，涉及 Agent 设定界面优化、记忆功能关联及 QQ 通知逻辑修复，显示项目正积极迭代以提升用户体验。然而，Issues 板块新增了 3 个问题，主要涉及 Apple Silicon 更新检测失效、本地 Ollama 模型工具调用障碍以及 QQBot 稳定性问题，表明在新增功能整合与多平台兼容性上仍面临挑战。

## 2. 版本发布
*   **当前状态**：无新版本发布。
*   **注意**：尽管 Issue #390 提到 v0.2.3 版本已存在，但 GitHub Releases 页面未见更新记录，可能为测试版或发布流程尚未完成。

## 3. 项目进展
今日共合并/关闭了 **3** 个 PR，显著推进了 UI 架构的解耦与细节修复：

*   **[UI 重构] Agent 设定独立化 (PR #416)**
    *   **状态**：已合并
    *   **进展**：进行了重要的界面架构调整，将 Agent 的设定（IDENTITY/SOUL/USER）从“记忆”Tab 中抽离，成为独立侧边栏。此举理清了记忆与设定的逻辑边界，修复了类型不匹配和国际化（i18n）遗漏问题，并优化了路径显示（支持 Windows 分隔符）。
    *   **链接**：[netease-youdao/LobsterAI#416](https://github.com/netease-youdao/LobsterAI/pull/416)

*   **[功能整合] 关联 OpenClaw 记忆 (PR #415)**
    *   **状态**：已合并
    *   **进展**：进一步打通了与 OpenClaw 的生态连接，增强了本地记忆模块的协同能力。
    *   **链接**：[netease-youdao/LobsterAI#415](https://github.com/netease-youdao/LobsterAI/pull/415)

*   **[体验优化] QQ 渠道通知修复 (PR #414)**
    *   **状态**：已合并
    *   **进展**：优化了定时任务通知在 QQ 渠道的 `to` 字段提取逻辑，解决了潜在的发送失效问题。
    *   **链接**：[netease-youdao/LobsterAI#414](https://github.com/netease-youdao/LobsterAI/pull/414)

## 4. 社区热点
今日社区关注点集中在**本地模型的功能完整性**与**系统稳定性**上：

*   **热点 Issue #405: 本地 Ollama 无法执行命令**
    *   **诉求**：用户反馈在使用本地 `qwen` 和 `deepseek` 模型时，无法执行“列出文件”等工具命令，而线上模型正常。用户已尝试配置 `"profile": "full"` 但无效。
    *   **分析**：这表明用户对 LobsterAI 的“Agent 能力”有强需求，且不仅限于聊天。本地 LLM 的 Function Calling 或工具调用配置可能存在门槛或 Bug。
    *   **链接**：[netease-youdao/LobsterAI#405](https://github.com/netease-youdao/LobsterAI/issues/405)

## 5. Bug 与稳定性
*   **[中等严重] Apple Silicon 更新检测失效 (Issue #390)**
    *   **现象**：ARM64 架构的 v0.2.2 客户端无法通过“检查更新”功能识别到 v0.2.3 版本，导致用户停留在旧版。
    *   **状态**：无 Fix PR。
    *   **链接**：[netease-youdao/LobsterAI#390](https://github.com/netease-youdao/LobsterAI/issues/390)

*   **[中等严重] QQBot 频繁掉线 (Issue #413)**
    *   **现象**：用户反馈 QQ 机器人连接不稳定，经常掉线。
    *   **状态**：尽管今日合并了 PR #414 修复通知逻辑，但该掉线问题可能涉及更深层的连接保活或协议适配，尚未明确解决。
    *   **链接**：[netease-youdao/LobsterAI#413](https://github.com/netease-youdao/LobsterAI/issues/413)

## 6. 功能请求与路线图信号
*   **本地模型工具调用增强**：Issue #405 反映了用户希望本地 Ollama 模型能具备与云端模型一致的 Agent 操作能力。鉴于项目正在推进 OpenClaw 记忆关联（PR #415），预计“本地模型工具链支持”将是下一阶段的重点优化方向。
*   **配置简化**：用户在 Issue #405 中手动修改 `openclaw.json` 的尝试暗示当前的配置流程对普通用户不够友好，未来可能需要更可视化的配置面板。

## 7. 用户反馈摘要
*   **痛点**：**“本地模型这就只能聊天吗？”** —— 用户对本地模型的期望不仅仅是作为 Chatbot，更是能够操作系统的 Agent。目前的落差感较强。
*   **使用场景**：用户正在尝试使用 `qwen2.5-coder` 和 `deepseek-r1` 等流行开源模型，并尝试通过配置文件开启 `full` profile 进行深度开发。
*   **体验卡点**：Apple Mac 用户在更新软件时遇到阻碍，QQ 机器人用户受困于连接稳定性。

## 8. 待处理积压
*   **Issue #390 & #413**：建议维护者优先排查更新检测逻辑（可能是版本号匹配或 CDN 分发问题）以及 QQBot 的心跳保活机制，以保障基础体验。
*   **Issue #405**：需技术支持介入，确认本地 Ollama 模型的工具调用是否受限于模型本身能力，或是软件端的 Prompt/接口未正确下发。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目动态日报**
**日期：** 2026-03-15
**分析员：** AI 智能体与个人助手领域分析师

---

### 1. 今日速览
TinyClaw 项目在 2026-03-15 展现出极高的开发活跃度，但仍处于功能重构与迭代的关键期。虽然今日无新版本发布，但社区提交了 **5 个新的 Pull Requests**，主要集中在 CLI 体验优化、架构简化和模型支持扩展上。项目正试图解决“初次上手难”的用户痛点，Issue #193 关于 TinyOffice Web 引导流程的讨论热度较高，反映出项目正从纯 CLI/配置文件驱动的工具，向更友好的图形化/自动化配置转型。代码库健康度方面，有针对 Agent 通信状态管理的重构工作，旨在降低系统复杂度。

### 2. 版本发布
*   **状态：** 无新版本发布。
*   **说明：** 今日尚无针对上述新功能的 Release 打包，功能目前仅在主分支或待合并 PR 中进行测试。

### 3. 项目进展
*注：今日无 PR 合并，以下为代码提交带来的潜在进展（基于待合并 PR）：*

*   **架构简化与通信重构** ([PR #213](https://github.com/TinyAGI/tinyclaw/pull/213))：
    *   **进展：** 提出了移除“对话状态追踪器”的方案，改为通过直接扁平化 DM（私信）进行即时响应流式传输。
    *   **意义：** 这一改动将显著简化队列架构，移除待处理计数器和响应聚合逻辑，有望提升系统的稳定性和响应速度。
*   **Google Gemini 模型支持** ([PR #217](https://github.com/TinyAGI/tinyclaw/pull/217))：
    *   **进展：** 增加了 Google Gemini 提供商及其模型配置，并清理了过时的 CLI 选项。
    *   **意义：** 扩展了 LLM 生态支持，为用户提供了更多模型选择。
*   **Web 化配置流程** ([PR #214](https://github.com/TinyAGI/tinyclaw/pull/214))：
    *   **进展：** 引入 `--skip-setup` 标志，允许跳过 CLI 初始化直接进入 API 模式，并支持通过 TinyOffice (`/connect`) 页面配置自定义 API URL。
    *   **意义：** 降低了配置门槛，向“零配置”体验迈出了重要一步。

### 4. 社区热点
*   **[热点 Issue] TinyOffice 首次运行引导体验** ([Issue #193](https://github.com/TinyAGI/tinyclaw/issues/193))
    *   **状态：** Open (10条评论)
    *   **核心诉求：** 社区普遍认为目前的 TinyOffice 在 TinyClaw 未配置时体验不佳，过度依赖 CLI 流程和手动编辑配置文件。用户强烈希望改进“首次运行” 的 Web 引导流程。
    *   **分析：** 该 Issue 直接推动了 PR #214 的提出（Web-based setup）。这表明开发团队正在积极响应这一痛点，试图通过 Web 界面来弥补传统 CLI 配置在易用性上的短板。

### 5. Bug 与稳定性
*   **暂无新增 Bug 报告。**
    *   今日提交的 PR 多为新功能或重构，暂无针对特定崩溃或严重错误的 Bug 修复 PR 提交。
    *   *注意：* PR #213 涉及到底层通信逻辑的大幅变动（移除状态管理），虽然旨在简化架构，但在合并前需重点关注回归测试，确保流式传输的稳定性。

### 6. 功能请求与路线图信号
基于今日的 PR 和 Issue 活动，以下功能极有可能纳入下一版本路线图：

1.  **可视化配置管理**：PR #214 显示项目正在整合 Web 界面来管理 API Key 和连接设置，预计“完全脱离 config 文件的图形化配置”是近期重点。
2.  **Agent 自定义能力增强**：PR #215 提出在创建 Agent 时允许直接通过 CLI/API 指定 `system_prompt`。这意味着用户将能更灵活地定义 Agent 的行为，而无需修改全局配置或创建复杂的预设。
3.  **品牌识别度强化**：PR #216 添加了 TINYAGI 的 ASCII Banner，表明项目正在构建独特的 CLI 品牌形象，可能预示着正式推广期的临近。

### 7. 用户反馈摘要
*   **痛点：** 对“命令行恐惧症”用户来说，目前的初始设置流程（依赖 raw config editing）是一大障碍（来源：Issue #193）。
*   **需求：** 用户希望在 TinyOffice 的 Web 界面中直接完成初始连接和密钥配置，寻求“开箱即用”的体验。
*   **场景：** 既需要灵活的 API 模式（通过 PR #214 的 `--skip-setup` 支持），也需要可视化的连接检测功能。

### 8. 待处理积压
*   **需关注的讨论：** [Issue #193](https://github.com/TinyAGI/tinyclaw/issues/193) 虽然已有相应的 PR 尝试解决，但截至目前尚未关闭，且评论数较多。建议维护者确认 PR #214 是否能完全闭环该 Issue 中提出的所有需求，或者仍需进一步迭代。
*   **待合并代码：** 目前有 5 个 PR 处于 Open 状态，建议关注 PR #213（架构重构）的审核进度，因为其改动较大，可能会阻塞或影响其他功能的合并。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

你好！我是 AI 智能体与个人 AI 助手领域的开源项目分析师。以下是根据 **2026 年 3 月 15 日**的数据生成的 **Moltis** 项目动态日报。

---

# Moltis 项目动态日报 (2026-03-15)

### 1. 今日速览
Moltis 项目在过去 24 小时内保持了**高活跃度**的开发节奏，共处理了 15 个 Issues 和 PRs，代码提交与问题修复紧密协同。今日核心进展集中在**跨平台兼容性**（特别是 Windows 文件锁问题）和**多智能体编排**能力的增强。社区反馈显示，用户对 GitHub Copilot 集成和 Claude Code CLI 的交互模式存在强烈关注。共有 3 个 PR 成功合并，主要修复了 Agent 工具调用的回归问题和本地 LLM 的配置体验。

### 2. 版本发布
**当前状态：** 今日无新版本发布。
*注：尽管代码库有频繁的修复合并，但截至日报生成时，官方尚未发布新的 Release tag。*

### 3. 项目进展
今日合并的 PR 显著提升了系统的稳定性与智能体执行的可靠性：

*   **[PR #410] 修复 Agent 空白工具名称重试机制**
    *   **状态：** 已合并
    *   **影响：** 解决了 Agent 在调用结构化工具时，若名称为空会导致直接报错 (`unknown tool`) 的问题。改为自动重试，增强了 Agent 执行任务的容错率。同时也修复了 Issue #179 中关于 Kimi 模型无法激活 cron jobs 的潜在底层原因。
    *   *链接：* [moltis-org/moltis#410](https://github.com/moltis-org/moltis/pull/410)

*   **[PR #417] 恢复自定义 GGUF 模型设置（无需重启）**
    *   **状态：** 已合并
    *   **影响：** 改进了本地大模型（GGUF）的使用体验。现在系统会在启动时异步恢复之前的自定义模型配置，并增加了进度事件通知，用户无需每次重启网关重新设置。
    *   *链接：* [moltis-org/moltis#417](https://github.com/moltis-org/moltis/pull/417)

*   **[PR #411] 增强定时任务 测试与文档同步**
    *   **状态：** 已合并
    *   **影响：** 完善了 Cron 工具的回归测试，确保了任务投递 (`payload.deliver`)、频道控制和消息发送的逻辑正确性，并同步了最新的文档。
    *   *链接：* [moltis-org/moltis#411](https://github.com/moltis-org/moltis/pull/411)

### 4. 社区热点
今日讨论热度最高的问题集中在**外部 AI 服务集成**和**深度 Agent 编排**能力：

*   **🔥 Issue #261: GitHub Copilot Provider Errors**
    *   **热度：** 👍 2 | 评论 4
    *   **分析：** 用户在集成 GitHub Copilot 时遇到错误，该项目作为多代理编排平台，与主流 IDE 辅助工具的兼容性至关重要。该问题自 2 月底报告后仍在活跃更新，说明复现或定位较为复杂。
    *   *链接：* [moltis-org/moltis#261](https://github.com/moltis-org/moltis/issues/261)

*   **🔥 Issue #235: PTY-based interactive Claude Code CLI control**
    *   **热度：** 👍 1 | 评论 3
    *   **分析：** 这是一个高级功能请求，旨在让 Agent 框架能够以伪终端 (PTY) 模式控制 Claude Code CLI，从而实现真正的自主多代理编排。这触及了 Moltis 作为“Agent 编排者”的核心野心。
    *   *链接：* [moltis-org/moltis#235](https://github.com/moltis-org/moltis/issues/235)

### 5. Bug 与稳定性
今日报告的 Bug 显示出跨平台和模型适配方面存在一定挑战，但开发者响应极快：

*   **🔴 [严重] Windows 平台文件锁导致会话持久化失败**
    *   **问题：** 在 Windows 上持久化会话时报错 `file lock failed: Access is denied` (Issue #434)。
    *   **进展：** **已有 Fix PR (#436)**。作者迅速定位到原因是 Rust stdlib 在 Windows 下 `append(true)` 模式会剥离 `FILE_WRITE_DATA` 权限，目前 PR 已提交待合并。
    *   *链接：* [Issue #434](https://github.com/moltis-org/moltis/issues/434) | [Fix PR #436](https://github.com/moltis-org/moltis/pull/436)

*   **🟡 [中等] 推理内容显示异常**
    *   **问题：** 在聊天中，可展开的“Reasoning”（推理过程）作为唯一响应显示，且影响 Channels (Issue #437)。
    *   **进展：** 新报问题，待修复。
    *   *链接：* [moltis-org/moltis#437](https://github.com/moltis-org/moltis/issues/437)

*   **🟡 [中等] 模型执行工具参数困惑**
    *   **问题：** 当未配置节点时，`node` 参数仍出现在 exec tool schema 中，导致模型（如 Qwen3-Coder）猜测参数值并执行失败 (Issue #427 -> PR #435)。
    *   **进展：** **已有 Fix PR (#435)**，通过在无配置时隐藏该参数来解决。
    *   *链接：* [Fix PR #435](https://github.com/moltis-org/moltis/pull/435)

### 6. 功能请求与路线图信号
从 Issues 中可以窥见项目未来的演进方向：

*   **增强通道感知与 Agent 上下文**
    *   **需求：** Agent 应当知道当前所处的频道，并能通过工具向任意频道或用户发消息 (Issue #264, #195)。
    *   **信号：** 这两个 Issue 在今日被关闭（标记为已完成或已解决），结合今日合并的 PR #411，表明 **Agent 上下文感知与多通道调度能力** 已在当前代码库中得到增强。
    *   *链接：* [moltis-org/moltis#264](https://github.com/moltis-org/moltis/issues/264)

*   **Matrix 协议支持**
    *   **需求：** 添加对 Matrix 协议的支持 (Issue #233)。
    *   **信号：** 仍处于 Open 状态，表明这是社区希望支持的下一个主要通信平台，但目前可能尚未排入开发优先级。
    *   *链接：* [moltis-org/moltis#233](https://github.com/moltis-org/moltis/issues/233)

### 7. 用户反馈摘要
*   **痛点：** Windows 用户在使用 Docker 或本地安装时，对文件权限和系统调用的兼容性较为敏感（多次出现 Windows 相关 Bug）。
*   **场景：** 用户不仅将 Moltis 视为聊天机器人，更将其视为**开发者工具链**的一部分。从关于 Claude Code CLI 和 GitHub Copilot 的反馈来看，Moltis 正被用于嵌入到复杂的自动化开发和 CI/CD 流程中。
*   **满意点：** 对于 Local LLM (GGUF) 的支持，用户对“无需重启即可应用配置”的修复（PR #417）会有较高的满意度提升。

### 8. 待处理积压
以下 Issue 长期未解决（超过 10 天），建议维护者关注：

*   **[OPEN] Issue #132: HuggingFace 模型无法下载**
    *   提及 Docker 安装环境下添加 GGUF 文件失败。虽然已关闭，但可能存在特定的环境配置未文档化。
    *   *链接：* [moltis-org/moltis#132](https://github.com/moltis-org/moltis/issues/132)

*   **[OPEN] Issue #261: GitHub Copilot 集成错误**
    *   作为热门集成项，持续的错误可能会影响开发者的采用率。
    *   *链接：* [moltis-org/moltis#261](https://github.com/moltis-org/moltis/issues/261)

*   **[OPEN] Issue #235: Claude Code CLI 交互控制**
    *   这是一个高价值的“骨灰级”功能，涉及对底层进程控制的深度开发，建议评估纳入路线图。
    *   *链接：* [moltis-org/moltis#235](https://github.com/moltis-org/moltis/issues/235)

---
**项目健康度评估：** 🟢 **健康**
代码提交频繁，Bug 修复响应速度快（通常在当天即有 PR），核心功能（Agent/工具调用/本地模型）持续迭代中。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-15)

**日期**：2026-03-15
**分析师**：AI 智能体与个人 AI 助手领域开源项目分析组
**数据来源**：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. 今日速览
CoPaw 项目今日呈现**极高活跃度**，社区响应迅速但修复压力较大。过去 24 小时内共处理了 **50 条 Issues**（关闭率 66%）和 **29 条 PR**，显示出项目正在快速迭代以解决用户痛点。核心开发重点集中在**文件操作权限**与**Shell 命令执行安全性**上，针对可能导致系统崩溃或数据丢失的严重漏洞进行了紧急修复。同时，社区贡献者活跃，多个 `first-time-contributor` 提交了针对 Web 端体验和模型兼容性的优化。

## 2. 版本发布
* **当前状态**：无新版本发布。
* **备注**：尽管 Issues 修复量大，今日未发布新 Tag，推测这些修复将合入 `v0.0.8` 或后续版本中。

## 3. 项目进展
今日合并及重点推进的 PR 显著提升了系统的安全性与跨平台兼容性：

*   **安全机制增强**：[#1484](https://github.com/agentscope-ai/CoPaw/pull/1484) 引入了针对破坏性 Shell 命令的检测规则（如 `mkfs`, `fork bomb` 等），防止 AI 误操作导致系统崩溃，这是对 Issue #1493（AI 自杀）和 #356（死循环）的直接回应。
*   **文件写入安全**：[#524](https://github.com/agentscope-ai/CoPaw/issues/524) 关于限制 `write_file` 执行权限的讨论已转化为具体的安全实施方向。
*   **体验优化**：
    *   [#1471](https://github.com/agentscope-ai/CoPaw/pull/1471) 已合并，修复了复制按钮返回 JSON 而非 Markdown 文本的长期痛点。
    *   [#1410](https://github.com/agentscope-ai/CoPaw/pull/1410) 修复了 Unix 系统下 Shell 命令超时挂起的问题。
    *   [#1483](https://github.com/agentscope-ai/CoPaw/pull/1483) 解决了 Windows 跨盘写入文件的报错。

## 4. 社区热点
今日讨论热度最高的问题集中在 AI 智能体的行为失控与第三方平台集成上：

*   **[#282 BUG: pptxgenjs 调用中断](https://github.com/agentscope-ai/CoPaw/issues/282)** (13 评论)
    *   **摘要**：AI 调用 `pptxgenjs` 工具时因网络协议错误（`incomplete chunked read`）导致任务停止。
    *   **诉求**：用户需要更稳定的工具调用容错机制，而非直接报错终止。
*   **[#981 Question: 飞书/QQ无法发送文件](https://github.com/agentscope-ai/CoPaw/issues/981)** (12 评论)
    *   **摘要**：在飞书和 QQ 频道中，机器人无法接收/发送文件。
    *   **诉求**：企业级用户对于多模态文件传输的需求强烈，当前插件支持不足。
*   **[#338 Feature: Webhook 功能请求](https://github.com/agentscope-ai/CoPaw/issues/338)** (7 评论, 👍:1)
    *   **摘要**：用户希望通过 Webhook 将 CoPaw 接入自己的软件工作流。
    *   **分析**：这是 CoPaw 从"个人助手"向"自动化工作流节点"转变的重要信号。

## 5. Bug 与稳定性
今日报告的 Bug 涉及多个严重层级，其中**破坏性风险**已被识别：

*   **[高危] [#1493 Bug: AI 执行脚本时把自己 Kill 了](https://github.com/agentscope-ai/CoPaw/issues/1493)**
    *   **现象**：AI 测试 Python 代码时执行了 `taskkill /F /IM python.exe`，导致自身进程终止。
    *   **状态**：已有修复方向，PR #1484 正在添加破坏性命令检测。
*   **[中危] [#1429 Bug: Unknown agent error (ReadError)](https://github.com/agentscope-ai/CoPaw/issues/1429)**
    *   **现象**：Windows 环境下出现 JSON 读取错误，导致任务失败。
    *   **关联 PR**：#1489 和 #1481 正在修复会话状态丢失和 UI 停止响应的问题。
*   **[体验] [#1457 Bug: 复制内容格式错误](https://github.com/agentscope-ai/CoPaw/issues/1457)**
    *   **现象**：点击复制按钮得到的是 JSON 格式而非渲染后的 Markdown 文本。
    *   **状态**：✅ 已修复 ([PR #1471](https://github.com/agentscope-ai/CoPaw/pull/1471))。

## 6. 功能请求与路线图信号
从 PR 和 Issues 中可窥见下一阶段开发重点：

*   **生态扩展**：
    *   **Nextcloud 支持**：[#1478](https://github.com/agentscope-ai/CoPaw/pull/1478) 正在添加 Nextcloud Talk 集成。
    *   **OpenRouter 支持**：[#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) 正在添加 OpenRouter 提供商。
    *   **DeepSeek 支持**：[#1498](https://github.com/agentscope-ai/CoPaw/pull/1498) 正在添加 DeepSeek 内置支持。
*   **Web 认证与权限**：
    *   **Web 登录**：[#1329](https://github.com/agentscope-ai/CoPaw/pull/1329) 提出了基于 Web 的单用户注册认证流程，增强多租户部署安全性。
*   **语音与模型能力**：
    *   **Discord 语音**：[#1476](https://github.com/agentscope-ai/CoPaw/pull/1476) 尝试通过自动转录支持 Discord 语音消息（.ogg 格式）。
    *   **Thinking Tags**：[#1496](https://github.com/agentscope-ai/CoPaw/pull/1496) 正在为 OpenAI 兼容模型解析 `thinking` 标签，以支持推理模型的思考过程展示。

## 7. 用户反馈摘要
*   **痛点 - 配置迁移困难**：用户在从 v0.0.5 升级到 v0.0.7 ([#1413](https://github.com/agentscope-ai/CoPaw/issues/1413)) 时，遇到模型配置丢失和 UI 显示重复的问题，Docker 升级路径不够平滑。
*   **痛点 - 渠道质量参差**：相比 Discord，用户反馈飞书 ([#535](https://github.com/agentscope-ai/CoPaw/issues/535)) 和 QQ 的 Markdown 渲染体验极差，代码块无法显示。
*   **好评**：用户对 Ollama 本地模型集成的快速配置 ([#1482](https://github.com/agentscope-ai/CoPaw/pull/1482)) 表示期待，希望能一键填充端点。

## 8. 待处理积压
*   **[#9](https://github.com/agentscope-ai/CoPaw/issues/9)** (Open since Feb 27): 模型配置页面无法设置 `nothinking`，这是一个较早的 UI 遗留问题。
*   **[#216](https://github.com/agentscope-ai/CoPaw/issues/216)**: 钉钉图片格式解析错误（JPG 被标为 PNG），影响特定企业用户的使用。

---
**总结**：CoPaw 正处于快速成长期，安全性（沙箱隔离）和稳定性（多渠道适配）是当前开发的两大基石。对于潜在用户，建议在 Docker 部署时注意卷挂载的版本兼容性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-15)

## 1. 今日速览
ZeptoClaw 项目在过去 24 小时内保持了极高的活跃度与维护效率。Issue 清理进度显著，共有 6 个 Issues 得到处理，其中 5 个已被成功关闭，显示出维护者对积压问题和 Bug 修复的强力响应。在代码提交方面，6 个 Pull Requests 呈现出“进半进半”的态势：一半新提交的 PR 正在等待审查，同时顺利合并了 2 个重要的功能修复（包括 Discord 图片支持缺陷修复和智谱 API 验证优化）。今日重点聚焦于**构建系统的优化**和**多模态交互的稳定性**，项目整体健康度良好。

---

## 2. 版本发布
**无新版本发布**
*   尽管有多个 PR 合并，但截至日报生成时，GitHub Releases 尚未更新。

---

## 3. 项目进展
今日合并的代码主要集中在提升开发体验和渠道集成稳定性：

*   **✅ 合并: Discord 纯图片消息支持修复** ([PR #346](https://github.com/qhkm/zeptoclaw/pull/346))
    *   **内容**: 修复了 Discord 渠道中仅包含图片而无文本的消息被静默丢弃的 Bug。
    *   **影响**: 提升了多模态交互体验，确保用户发送的图片能被 Agent 正确接收和处理。
    *   **关联 Issue**: [Closes #357](https://github.com/qhkm/zeptoclaw/issues/357)

*   **✅ 合并: 智谱 (Zhipu) API 密钥验证增强** ([PR #335](https://github.com/qhkm/zeptoclaw/pull/335))
    *   **内容**: 在入职流程中增加对 Zhipu/GLM API Key 的显式验证（通过只读 `/models` 端点），并增加了针对该服务的错误提示和回归测试。
    *   **影响**: 提高了国产大模型接入的容错率，减少了用户配置错误。

*   **🔄 审查中: 开发容器构建速度优化** ([PR #358](https://github.com/qhkm/zeptoclaw/pull/358))
    *   **内容**: 引入 Docker BuildKit cache mounts 挂载机制，大幅加速 Cargo 构建增量编译，并优化了 `lint-container.sh` 脚本以兼容 Podman。
    *   **意义**: 直接提升贡献者的开发迭代效率。

---

## 4. 社区热点
今日社区讨论集中在底层架构调整与用户体验细节：

*   **🔥 热点提案: 添加 Agent 客户端协议 (ACP) 支持** ([PR #356](https://github.com/qhkm/zeptoclaw/pull/356))
    *   **状态**: 待合并
    *   **讨论**: 提出了 ACP (Agent Client Protocol) 的 stdio 和 HTTP 两种实现方式。这将允许 ZeptoClaw 作为一个被调用的 Subprocess，为未来的“Agent 代理 Agent”或嵌入式部署奠定基础。

*   **🗣️ 体验优化: Telegram 支持改进** ([Issue #331](https://github.com/qhkm/zeptoclaw/issues/331))
    *   **诉求**: 社区用户指出 Telegram 消息排版混乱且缺乏“正在输入”的状态指示。
    *   **反馈**: 该 Issue 虽然尚未解决，但引起了关注，涉及消息格式化和实时交互反馈的自然度。

*   **🏆 里程碑: 加入 Shelldex 生态** ([Issue #334](https://github.com/qhkm/zeptoclaw/issues/334))
    *   **动态**: 项目已被提名为 Claws 目录（Shelldex）的一员，这标志着项目生态位的确立。

---

## 5. Bug 与稳定性
今日修复的 Bug 涉及核心流程与构建环境：

*   **[已修复] Discord 图片消息丢失 (P2-高)**
    *   问题描述: Discord 渠道会自动忽略仅包含图片附件的消息。
    *   状态: 已通过 PR #346 修复并合并。
    *   相关 Issue: [#357](https://github.com/qhkm/zeptoclaw/issues/357)

*   **[已修复] Podman 构建缓存挂载失败 (P3-中)**
    *   问题描述: 在使用 Podman 5.7 的传统构建器时，`Dockerfile.dev` 因 `--mount=type=cache` 语法报错，导致 lint 脚本失败。
    *   状态: 已通过 PR #358 修复（添加 BuildKit 支持及降级逻辑）。
    *   相关 Issue: [#333](https://github.com/qhkm/zeptoclaw/issues/333)

*   **[待修复] Agent 循环中的图片内容处理**
    *   问题描述: 除了 Discord 层面，Agent 主循环的消息过滤器也可能丢弃内容为空但有图片的用户消息。
    *   状态: PR [#355](https://github.com/qhkm/zeptoclaw/pull/355) 已提出修复方案，正在审查中。

---

## 6. 功能请求与路线图信号
从今日的 PR 和 Issues 中可以看出未来的开发方向：

*   **Agent 模板智能化**: PR [#359](https://github.com/qhkm/zeptoclaw/pull/359) 正在更新 `coder` 模板，指示 LLM 优先查找并修复现有测试，而不是从头编写。这预示着项目将更注重**代码生成的鲁棒性和测试覆盖率**。
*   **协议标准化**: PR [#356](https://github.com/qhkm/zeptoclaw/pull/356) 对 ACP 的实现表明，ZeptoClaw 正在向**标准化协议**靠拢，未来可能更容易集成到其他工具链中。

---

## 7. 用户反馈摘要
*   **痛点**: Telegram 用户反馈当前的交互体验较为生硬，不仅格式排版乱，而且没有打字提示，缺乏“人”的感觉 ([Issue #331](https://github.com/qhkm/zeptoclaw/issues/331))。
*   **安全**: 社区注意到关于“默认 Agent 模式和审批策略”的安全加固讨论 ([Issue #347](https://github.com/qhkm/zeptoclaw/issues/347))，表明用户关心 Agent 的默认安全性，不希望在未授权的情况下执行危险操作。

---

## 8. 待处理积压
以下活跃 Issue/PR 需要维护者持续关注或社区反馈：

*   **OPEN [feat]: Improve Telegram support** ([#331](https://github.com/qhkm/zeptoclaw/issues/331))
    *   摘要: 优化 Telegram 消息渲染和交互状态。
*   **OPEN fix(templates)**: coder template logic update ([#359](https://github.com/qhkm/zeptoclaw/pull/359))
    *   摘要: 改进代码生成模板的逻辑，优先利用现有测试。
*   **OPEN feat(channels)**: ACP implementation ([#356](https://github.com/qhkm/zeptoclaw/pull/356))
    *   摘要: 实现 Agent Client Protocol，涉及较大架构调整。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*