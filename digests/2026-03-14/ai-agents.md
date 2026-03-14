# OpenClaw 生态日报 2026-03-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-14 00:10 UTC

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

# OpenClaw 项目动态日报 (2026-03-14)

## 1. 今日速览
OpenClaw 项目今日呈现出**极高活跃度**，但伴随显著的稳定性风险。
*   **开发活跃度**：过去 24 小时内产生了 **500 条 Issues** 和 **500 条 PRs** 的更新，显示社区参与度处于爆发期。
*   **版本更新**：项目发布了 **v2026.3.12** 版本，带来了全新的 Dashboard v2 UI 和对 OpenAI GPT-5.4 的支持。
*   **稳定性警示**：新版本发布后引发了大量的 **Regression (回归)** 报告，主要集中在内存溢出 (OOM)、WebSocket 连接超时以及核心通道 (WhatsApp/Telegram) 的消息收发故障。今日 Issues 列表中超过 60% 与升级后的 Bug 直接相关。
*   **维护压力**：高强度的代码合并（363 个待合并 PR）与激增的 Bug 报告形成了强烈反差，维护团队面临巨大的测试与修复压力。

## 2. 版本发布
### **v2026.3.12** (发布日期: 2026-03-12)
此次更新包含重大 UI 重构及模型支持升级。
*   **Dashboard v2 (Control UI)**: 全新的模块化界面设计。
    *   新增概览、聊天、配置、代理 和会话 视图。
    *   引入了命令面板、移动端底部标签栏。
    *   丰富了聊天工具：支持斜杠命令、搜索、导出和置顶消息。
    *   *贡献者: @BunsDev (#41503)*
*   **模型支持**: 新增 OpenAI GPT-5.4 支持。
*   **⚠️ 潜在风险**: 尽管功能丰富，但该版本在发布后立即暴露了多处严重回归问题（详见 Bug 部分），建议生产环境升级前进行充分测试。

## 3. 项目进展
今日共有 **137** 个 PR 被合并或关闭，以下是关键进展：
*   **修复 Dashboard 聊天历史重载风暴**: (@BunsDev #45541) 解决了 v2026.3.12 中 Dashboard v2 在每次工具调用结果返回时触发全量历史重载导致的 UI 冻结问题。这是一个针对昨日发布版本的紧急热修复。
*   **Control UI 认证绕过与连接修复**: (@sallyom #45512) 修复了 `dangerouslyDisableDeviceAuth` 配置失效以及浏览器连接路径错误的问题，解决了多个关于 "device identity required" 的核心报错。
*   **CLI OOM 修复**: (@yiShanXin #45537) 优化了补全脚本生成的内存占用，修复了大型命令树构建时的堆内存溢出问题。
*   **iMessage 通道重构**: (@scoootscooob #45539) 将 iMessage 实现从核心代码迁移至扩展目录，虽然属于大型重构，有助于架构解耦。

## 4. 社区热点
**评论数最高的热点讨论：**
*   **[#3460 国际化 (i18n) 支持](https://github.com/openclaw/openclaw/issues/3460)** (101 评论)
    *   **诉求**: 社区强烈要求 OpenClaw 支持多语言。
    *   **现状**: 维护者明确表示目前没有带宽 来维护多语言翻译，呼吁社区介入。
*   **[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (38 评论, 60 👍)
    *   **诉求**: 用户希望拥有类似 macOS 功能的 Linux 和 Windows 原生客户端。
    *   **现状**: 长期存在的 Feature Request，目前暂无官方开发计划。
*   **#45471 / #45440 (内存与 UI 故障群)** (33+ 评论)
    *   **事件**: v2026.3.12 升级后，用户反馈 Pi 4 设备内存溢出、Web UI 聊天框无法加载等严重问题，引发了密集的讨论和堆栈追踪贴。

## 5. Bug 与稳定性
**今日状况严峻：新版本 (v2026.3.12) 引入多起严重回归故障。**

### 🔴 严重级 - 影响核心功能
*   **[JavaScript Heap Out of Memory (OOM)]** (多个 Report)
    *   **#45440**: Raspberry Pi 4 升级到 v2026.3.12 后迅速内存溢出。
    *   **#45064**: 基础 CLI 命令导致 OOM，导致 CLI 完全不可用。
    *   **#41778**: 4GB 服务器上 `openclaw message` OOM。
*   **[WhatsApp 通道故障]** (高优先级)
    *   **#45474**: 显示已连接但消息不送达，出现 440/401 重连循环。
    *   **#45171**: 自动回复可用，但主动发送工具 失败，报错 "No active listener"。
*   **[WebSocket 连接超时]**
    *   **#45419 / #44714**: CLI 和日志跟随 (`logs --follow`) 命令握手超时，尽管 Web UI 正常。

### 🟠 中等级 - UI 与配置问题
*   **#45471**: 升级后 Web 聊天界面无法打开，仅显示 Logo。
*   **#45089**: 聊天界面视图渲染错位。
*   **#44835**: Web UI 验证错误 `models.0.id undefined`，即使字段已填写。

### ✅ 已有修复进展
*   Dashboard UI 卡顿和 Context Icon 异常问题已有 PR (#45541, #45533) 进行修复。

## 6. 功能请求与路线图信号
*   **[OpenCode Go 订阅支持]** (#27009): 用户请求支持 $10 的 OpenCode Go 计划以接入 Kimi/GLM 等模型，建议作为默认选项加入。这反映了用户对低成本、高可用模型接入的需求。
*   **[xAI Grok 工具支持]** (#6872): 用户希望 xAI 模型能像 OpenAI 一样支持原生搜索和代码执行工具。
*   **[Discriminator Layer 中间件]** (#9030): 提议引入"判别层"架构，在系统级别检查 Agent 的不安全行为，防止越狱。这是一个重要的架构级 (RFC) 讨论。
*   **[出站消息审批门]** (#25145): 希望在 Agent 发送邮件/短信前增加强制人工审批钩子，而非仅依赖二进制路径的审批。

## 7. 用户反馈摘要
*   **负面体验 - "毁灭性更新"**: 大量用户在升级到 v2026.3.12 后反馈项目变得不可用。
    *   *反馈示例*: "升级后 CLI 完全不可用" (#45064)，"Pi 4 直接 OOM" (#45440)，"WhatsApp 只显示单勾 (未送达)" (#45474)。
*   **正面体验 - UI 改进**: 尽管有 Bug，新 Dashboard v2 的设计逻辑（模块化、命令面板）获得了部分用户的期待 (#45541)。
*   **集成痛点**: Signal 通道因为缺少 `groups` 配置导致群组消息被静默丢弃 (#20397)，Telegram 无法接收文件附件 (#7116)，这些长期存在的细节问题仍在影响用户体验。

## 8. 待处理积压
*   **Stale Issues**: 
    *   **#14593**: Docker 中 Skill 安装因缺少 `brew` 而失败 (2026-02-12 创建)。
    *   **#16103**: Discord 语音消息仅报 "Error" 无详情 (2026-02-14 创建)。
*   **架构讨论 (RFC)**: 
    *   **#9030**: 关于 Agent 安全架构的讨论，虽然高价值但暂未落地实现。
*   **平台支持**: 
    *   **#75**: Linux/Windows 客户端开发长期处于停滞状态，依赖社区贡献。

---

## 横向生态对比

# 2026-03-14 个人 AI 助手开源生态横向对比分析报告

**分析师**: AI 开源生态观察员
**日期**: 2026-03-14

---

## 1. 生态全景
当前个人 AI 助手开源生态正处于**“功能分化与架构深水区”**阶段。头部项目已从单纯的“对话机器人”向**全功能代理平台**演进，竞争焦点集中在**多模态交互**、**多平台连接**及**本地模型适配**上。然而，OpenClaw 今日爆发的大规模回归问题（v2026.3.12）揭示了生态中的普遍痛点：**在高频迭代与稳定性之间，开发者正面临严峻的平衡挑战**。与此同时，以 NanoBot 和 Zeroclaw 为代表的“后起之秀”通过插件化架构（MCP/Entry Points）迅速抢占开发者心智，显示出“标准化协议”和“模块化”已成为下一阶段的核心技术方向。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | Release 情况 | 健康度/状态 | 核心动向 |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **OpenClaw** | 500+ | 500+ | **v2026.3.12** (事故) | 🟠 **高危** | UI 重构导致严重回归，OOM/连接故障频发。 |
| **NanoBot** | 26 | 154 | 无 (主分支快) | 🟢 **极高** | 架构大重构，插件化/记忆修复完成，代码合并率 76%。 |
| **Zeroclaw** | 35 | 41 | **v0.1.9-beta.140** | 🟢 **优秀** | 国际化完成，MCP按需加载，Windows兼容性大幅提升。 |
| **NullClaw** | 15 | 36 | **v2026.3.13** | 🟢 **优秀** | 连续版本发布，彻底修复 WebSocket 飞书/Slack 连接问题。 |
| **PicoClaw** | - | 49 | **nightly** | 🟡 **警戒** | 架构重构中，暴露高危安全漏洞。 |
| **IronClaw** | 25 | 50 | 无 | 🟠 **活跃/维护** | CLI体系大升级，CI捕获多个高危安全漏洞。 |
| **LobsterAI** | 11 | 9 | 无 | 🟡 **挑战** | 本地模型 功能失效，Token 异常，性能遭质疑。 |
| **CoPaw** | 50 | 44 | v0.0.7 (问题版) | 🟠 **不稳定** | 飞书消息延迟、CPU 100% 占用、Ollama 失忆。 |
| **Moltis** | 12 | 12 | 无 | 🟢 **稳健** | 修复“密封库”失效及 Qwen 模型兼容，响应极快。 |
| **NanoClaw** | 18 | 37 | 无 | 🟢 **活跃** | 修复 WhatsApp 崩溃，混合检索，集成 MCP 凭证。 |
| **TinyClaw** | - | 4 | **v0.0.13** | 🟢 **向好** | 架构完成，品牌重塑 PR 进行中。 |
| **ZeptoClaw** | 8 | 3 | 无 | 🟢 **专注** | 安全加固，引入交互式审批，修复流式输出。 |
| **EasyClaw** | 0 | 0 | 无 | ⚫ **停滞** | 24小时无活动。 |

---

## 3. OpenClaw 在生态中的定位

*   **核心参照地位**：OpenClaw 依然是生态中的“庞然大物”，社区规模和贡献者活跃度（500 PRs/Day）远超同类，是目前功能最全面的集成平台。
*   **优势**：拥有最丰富的 Dashboard v2 UI 和对最新模型（GPT-5.4）的极速支持。
*   **当前危机**：今日的动态暴露了其在**工程化管理**上的短板。v2026.3.12 版本的发布导致了严重的“毁灭性更新”（OOM, WS超时），反映出其测试覆盖率和 CI/CD 流程未能跟上代码提交的速度。
*   **技术路线差异**：相比 NanoBot 的“轻量插件化”和 Zeroclaw 的“Rust 性能优先”，OpenClaw 选择了“大而全”的重型单体架构，这使其在灵活性上略逊一筹，但在多通道（WhatsApp/Telegram）的深度集成上仍具有不可替代性。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求/进展 |
| :--- | :--- | :--- |
| **MCP 协议集成** | **Zeroclaw**, **NanoClaw**, **PicoClaw**, **LobsterAI** | Zeroclaw 实现了按需加载以节省 Token；NanoClaw 解决了定时任务中 MCP 凭证挂载问题。MCP 已成为事实上的工具扩展标准。 |
| **本地模型适配** | **LobsterAI**, **CoPaw**, **Moltis**, **NanoBot** | 普遍面临 Ollama/Qwen 等本地模型的 Function Calling 失效、Token 计算错误及上下文溢出问题。社区强烈要求提升离线可用性。 |
| **安全性收紧** | **ZeptoClaw**, **IronClaw**, **PicoClaw** | 从“默认自主”转向“默认受控”。ZeptoClaw 引入 TTY 审批；IronClaw 修复 SSRF 漏洞；PicoClaw 修补高危 CORS/RCE 默认值。 |
| **飞书/企微集成** | **OpenClaw**, **NullClaw**, **IronClaw**, **CoPaw** | NullClaw 彻底修复了飞书 WebSocket 连接；IronClaw 和 CoPaw 正在推进企业微信长连接/事件订阅模式。中国市场是兵家必争之地。 |

---

## 5. 差异化定位分析

*   **全能旗舰 - OpenClaw**: 适合希望“开箱即用”且覆盖主流聊天软件的用户，但需承担不稳定性风险。
*   **性能极客 - Zeroclaw**: 采用 Rust 编写，主打高性能与内存安全，适合追求极致性能和边缘设备部署的开发者。
*   **架构先锋 - NanoBot**: 极力推行 **Python Entry Points 插件化**，架构最解耦，适合希望深度定制或开发自有通道的开发者。
*   **企业部署 - NullClaw & IronClaw**: 强调隧道、WebSocket 稳定性和 Windows 服务支持，路线更偏向企业级运维 和多租户安全。
*   **轻量便携 - PicoClaw / ZeptoClaw**: 侧重本地 CLI 体验和文件操作，ZeptoClaw 尤其注重安全交互与 TTY 体验，适合极客本地工具流。
*   **前端/桌面流 - LobsterAI / CoPaw**: 侧重 Web UI 体验和技能编排，但目前受困于性能与本地模型的兼容性 Bug。

---

## 6. 社区热度与成熟度

*   **第一梯队 (成熟期)**: **OpenClaw**, **NullClaw**。
    *   特征：高贡献者数量，版本发布规范。但 OpenClaw 正处于“成长的烦恼”期，需警惕技术债。
*   **第二梯队 (快速迭代期)**: **NanoBot**, **Zeroclaw**, **IronClaw**, **NanoClaw**。
    *   特征：PR 合并率极高，架构重构频繁，Bug 修复响应速度快（如 Zeroclaw 仅需 1-2 天修复编译错误），是最具创新活力的区域。
*   **第三梯队 (稳定维护期)**: **Moltis**, **TinyClaw**, **ZeptoClaw**。
    *   特征：更新频率适中，主要聚焦于特定 Bug 修复和小功能点打磨，用户群相对固定。
*   **警示区**: **LobsterAI**, **CoPaw**。
    *   特征：虽然活跃度高，但最近发布的版本引入了大量回归问题，用户抱怨较多，处于架构调整的阵痛期。

---

## 7. 值得关注的趋势信号

1.  **“自主模式”的黄昏**:
    随着多个项目（**ZeptoClaw, IronClaw**）收紧默认权限，行业意识到完全自主的 Agent 在生产环境过于危险。**“人在回路”** 的默认化（如 ZeptoClaw 的 `/trust on|off`）将成为标配。

2.  **回归“单体应用”的架构反思**:
    **OpenClaw** 今日的崩溃表明，将复杂的 WebUI、网关和核心逻辑耦合在单一仓库中，随着功能爆炸（500 PRs/Day），维护难度呈指数级上升。未来可能会看到更多像 **NanoBot** 或 **Zeroclaw** 这样采用模块化/插件化内核的项目受到青睐。

3.  **企业微信/飞书成为新战场**:
    多个今日动态（**NullClaw**, **IronClaw**, **CoPaw**）显示，对国产协同办公软件的深度适配（非 Webhook 而是长连接/事件订阅）已是刚需。这标志着开源 AI Agent 正从极客玩具向生产力工具转型。

4.  **MCP 协议的深度整合**:
    MCP 不再是一个简单的连接器，正在演变为 **Agent 的“技能中枢”**。**Zeroclaw** 的“按需加载 MCP 工具”和 **LobsterAI** 的“MCP 桥接”表明，如何高效管理和调用海量的 MCP 工具是下一阶段的优化重点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-14)

## 📊 今日速览
NanoBot 项目在 2026-03-14 迎来了极高的开发活跃度，过去 24 小时内共有 **154 条 PR** 和 **26 条 Issues** 发生变动，显示出社区强大的贡献力度和项目处于快速迭代期。虽然今日无新版本发布，但核心架构调整（插件化）与多项关键 Bug 修复已合并，代码合并率高达 76%。目前项目面临的挑战主要是多通道适配（如 QQ、Matrix、企业微信）带来的回归问题以及部分用户反馈的内存溢出风险，整体项目健康度**极高**，但也需警惕频繁变更带来的稳定性波动。

---

## 🚀 版本发布
*无新版本发布。*
*注意：目前 GitHub 主分支已包含大量未发布的新功能，建议用户关注 `main` 分支动态或从源码安装以获取最新特性。*

---

## 🔨 项目进展
今日代码库有显著更新，以下是合并进主分支的重要 PR：

*   **[PR #1984](https://github.com/HKUDS/nanobot/pull/1984)**: **架构重构：通道插件化** (by @chengyongru)
    *   **内容**: 将 11 个内置通道的配置类从 `schema.py` 解耦，实现了基于 Python entry_points 的插件发现机制。
    *   **影响**: 这是一个里程碑式的更新，允许开发者通过 `pip install` 独立发布和安装通道插件，极大地降低了第三方扩展的门槛。
*   **[PR #1909](https://github.com/HKUDS/nanobot/pull/1909)**: **修复：强制保存记忆** (by @Re-bin)
    *   **内容**: 修复了记忆合并时 LLM 可能跳过 `save_memory` 工具调用的问题。
    *   **影响**: 解决了 **[Issue #1931](https://github.com/HKUDS/nanobot/issues/1931)** 中反馈的 Token 整合失败日志，确保了长期对话的记忆完整性。
*   **[PR #1981](https://github.com/HKUDS/nanobot/pull/1981)**: **依赖更新：企业微信 SDK** (by @chengyongru)
    *   **内容**: 升级 `wecom-aibot-sdk-python` 至 >=0.1.5。
    *   **影响**: 修复了企业微信通道的重复接收循环、断连处理及心跳超时问题。
*   **[PR #1941](https://github.com/HKUDS/nanobot/pull/1941)**: **修复：QQ 通道兼容性** (by @tsubasakong)
    *   **内容**: 恢复了对旧版 QQ 客户端的纯文本回复支持（`msg_type=0`）。
    *   **影响**: 修复了 **[Issue #1936](https://github.com/HKUDS/nanobot/issues/1936)**，回滚了导致旧版客户端交互崩溃的 Markdown 强制推送逻辑。

---

## 🔥 社区热点
今日讨论最热烈的话题集中在 **子 Agent 的可观测性** 和 **动态配置**：

*   **[Issue #1955](https://github.com/HKUDS/nanobot/issues/1955)**: **子 Agent 执行过程的“黑盒”问题** (9 评论)
    *   **摘要**: 用户指出主 Agent 的思考过程可见，但子 Agent 的执行过程（思考、工具调用）对用户完全不可见，导致调试困难。
    *   **诉求**: 希望能够像观察主 Agent 一样直观地看到子 Agent 的循环执行细节。
*   **[Issue #1954](https://github.com/HKUDS/nanobot/issues/1954)**: **运行时动态切换 Provider** (3 评论)
    *   **摘要**: 用户询问是否能在飞书对话中动态切换 LLM Provider，目前系统提示“不支持运行时切换”。
    *   **诉求**: 这是一个高频体验类需求，用户希望在不重启服务的情况下测试不同模型或切换备用 Provider。

---

## 🐞 Bug 与稳定性
今日报告的 Bug 涉及上下文管理、文件系统和适配器兼容性，部分已有修复方案：

*   **[严重] [Issue #1979](https://github.com/HKUDS/nanobot/issues/1979)**: **长对话导致上下文溢出**
    *   **描述**: 长时间的会话积累导致 Token 超过模型上限，直接抛出 `ContextWindowExceededError` 导致调用失败。
    *   **状态**: 待修复。
*   **[中等] [Issue #1948](https://github.com/HKUDS/nanobot/issues/1948)**: **Exec 工具无法写入 /tmp**
    *   **描述**: 通过 exec 工具运行 `npx` 命令时报错 "Read-only file system"，即便用户手动可写 /tmp。
    *   **状态**: 待修复，疑似 Docker 权限或沙箱问题。
*   **[中等] [Issue #1947](https://github.com/HKUDS/nanobot/issues/1947)**: **Ollama Provider 报 ApiKey 错误**
    *   **描述**: 连接本地 Ollama 时，尽管配置了占位 ApiKey 仍报错。
    *   **状态**: **已修复** (PR [#1983](https://github.com/HKUDS/nanobot/pull/1983) 已提交)，修复了本地实例配置逻辑。
*   **[中等] [Issue #1936](https://github.com/HKUDS/nanobot/issues/1936)** & **[Issue #1937](https://github.com/HKUDS/nanobot/issues/1937)**: **适配器兼容性**
    *   **描述**: QQ Markdown 导致旧客户端崩溃；Windows 上 `/restart` 命令路径错误。
    *   **状态**: QQ 问题已修复 (PR #1941)，Windows 问题仍在处理中。

---

## 🔮 功能请求与路线图信号
社区贡献者正在积极拓展 NanoBot 的边界，以下 PR 暗示了未来的路线图：

*   **通道生态扩展**:
    *   **[PR #1945](https://github.com/HKUDS/nanobot/pull/1945)**: 新增 **XMPP** 协议支持，已可运行。
    *   **[PR #1368](https://github.com/HKUDS/nanobot/pull/1368)**: 新增 **A2A 协议** 通道，基于官方 SDK。
*   **企业级特性**:
    *   **[PR #1987](https://github.com/HKUDS/nanobot/pull/1987)**: 增强 Azure OpenAI Provider，支持 **Entra ID OAuth** 认证，为企业用户扫清障碍。
    *   **[PR #1985](https://github.com/HKUDS/nanobot/pull/1985)**: 新增 `/status` 命令，用于查看运行时诊断信息。
*   **Agent 能力增强**:
    *   **[PR #1935](https://github.com/HKUDS/nanobot/pull/1935)**: `spawn` 工具新增 `working_dir` 参数，允许子 Agent 针对特定项目目录工作并继承 `AGENTS.md`。
    *   **[PR #1934](https://github.com/HKUDS/nanobot/pull/1934)**: Skills 支持通过 `enabled: false` 禁用，无需删除文件。

---

## 🗣️ 用户反馈摘要
*   **满意度**: 用户对 **Soul.md** 和 **User.md** 的控制逻辑评价很高，认为这能让通用模型发挥出最大性能 (**[Issue #1977](https://github.com/HKUDS/nanobot/issues/1977)**)。
*   **痛点**: 传统的 WebSearch 配置 (`Brave`) 过于硬编码，用户希望支持更多后端（如 SearXNG），相关的 PR (#927) 已在近日重新活跃。
*   **易用性**: Docker 用户在重启后发现添加的命令（Skill）不生效 (**[Issue #1829](https://github.com/HKUDS/nanobot/issues/1829)**)，反映出持久化存储或配置重载机制可能存在文档缺失或 Bug。

---

## ⏳ 待处理积压
*   **[Issue #1139](https://github.com/HKUDS/nanobot/issues/1139)**: Kimi 模型调用报错，自 v0.1.4.post2 以来未彻底解决。
*   **[PR #126](https://github.com/HKUDS/nanobot/pull/126)**: GitHub Actions 自动构建 Docker 镜像并推送到 GHCR/DockerHub，虽已实现但尚未合并。
*   **[Issue #1822](https://github.com/HKUDS/nanobot/issues/1822)**: Nvidia 模型支持近期失效，待官方确认 API 变更。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 - 2026-03-14

## 1. 今日速览
Zeroclaw 项目今日处于**极度活跃**的开发状态，在过去 24 小时内处理了 **87** 个更新（35 个已关闭 Issues 和 41 个已合并/关闭 PR），显示出强大的迭代能力。项目发布了两个 Beta 版本，标志着 **v0.1.9** 分支正在稳定，重点在于国际化与浏览器兼容性修复。社区讨论热度高涨，主要集中在 `master` 分支切换后的功能回归（特别是 MCP 支持）以及 Windows 平台的兼容性问题。整体来看，项目正在快速修复主分支合并带来的遗留问题，并向多语言、跨平台支持方向迈进。

## 2. 版本发布
今日发布了 **2 个** 新的 Beta 版本：

*   **v0.1.9-beta.140**
    *   **核心更新**：完成了文档国际化的重要里程碑。增加了全部 30 种语言的文档中心翻译，并彻底完成了中文文档的迁移与翻译工作。
    *   **影响**：显著降低了非英语用户的使用门槛，社区贡献度得到了提升。
    *   *[查看 Release #3450](https://github.com/zeroclaw-labs/zeroclaw/pull/3450)*

*   **v0.1.9-beta.136**
    *   **核心更新**：修复了旧版浏览器中缺乏 `crypto.randomUUID` 导致的崩溃问题；修复了 Ollama 模型在 `reasoning_enabled` 参数下的不兼容问题。
    *   **影响**：提升了 Web 客户端的兼容性和本地模型运行的稳定性。
    *   *[查看 Release #3407](https://github.com/zeroclaw-labs/zeroclaw/pull/3407)*

## 3. 项目进展
今日合并的 PR 显示出项目在**功能完善**和**体验优化**上的双重推进：

*   **交互与用户体验 (UX)**：合并了"保留消息草稿"功能 (#3443)，解决了用户切换标签页时丢失输入内容的痛点；同时完成了 Web 仪表盘的"电光蓝"风格重设计 (#3445)，提升了视觉效果。
*   **MCP 协议增强**：实现了"按需加载 MCP 工具"功能 (#3446)。此前所有 MCP 工具都会加载到上下文中，导致 Token 浪费。新功能通过 `tool_search` 实现延迟加载，显著优化了长上下文场景下的性能。
*   **Windows 平台支持**：重点修复了 Windows 下的 Shell 命令执行问题 (#3442)，现在支持通过 `cmd.exe /C` 调用原生 Windows 命令（如 `dir`, `type`），不再依赖 Git Bash。
*   **能力扩展**：新增了动态节点发现和功能通告机制 (#3448)，允许外部设备通过 WebSocket 动态注册能力，为 IoT 和微服务集成打下基础。

## 4. 社区热点
今日讨论焦点主要集中在分支管理与平台兼容性：

*   **[#2953: Add `channel-matrix` flag in official builds](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)** (评论: 5)
    *   **核心诉求**：用户抱怨官方发布的构建版本中缺失 Matrix 频道支持 flag，导致无法配置 Matrix 机器人。这反映了用户对官方二进制包功能完整性的关注。
*   **[#3153: zeroclaw agent subcommand support mcp](https://github.com/zeroclaw-labs/zeroclaw/issues/3153)** (评论: 5)
    *   **核心诉求**：用户指出 `agent` 子命令目前不支持 MCP 配置，只能在内置的 `start_channels` 中使用。这是一个被高频请求的功能，用户希望在 Agent 模式下也能无缝调用 MCP 工具。
*   **[#3397: After default branch switch to master, a lot of features lost](https://github.com/zeroclaw-labs/zeroclaw/issues/3397)** (评论: 3)
    *   **核心诉求**：尽管已关闭，但该 Issue 引发了大量关注。用户指出切换到 `master` 分支后丢失了 `agent_ipc` 和 `mcp` 等关键功能。维护者随后进行了大量修复工作以恢复这些功能。

## 5. Bug 与稳定性
今日报告的 Bug 涉及编译、架构兼容性和逻辑错误，部分已修复：

*   **[S1 - Workflow Blocked] #3452: Compilation fails on master... undeclared AtomicU32**
    *   **详情**：在 `src/channels/mod.rs` 中未声明 `AtomicU32` 导致 32 位目标架构编译失败。
    *   **状态**：新开 Issue，尚未合并修复 PR。
    *   *[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3452)*
*   **[S1 - Workflow Blocked] #3425: Matrix Channel feature compilation failure**
    *   **详情**：启用 `matrix-sdk` feature 时编译失败，同时涉及 `rustc 1.94` 的已知编译器问题。
    *   **状态**：已合并修复 PR (#3368)。
    *   *[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3425)*
*   **[S0 - Data Loss/Security] #3379: MCP missing**
    *   **详情**：用户报告切换到 `master` 分支后，配置文件中的 `mcp` 选项不再生效。
    *   **状态**：已在后续 PR (如 #3446) 中恢复支持。
    *   *[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3379)*
*   **[S1 - Workflow Blocked] #2693: Mistral: 422 Extra inputs are not permitted**
    *   **详情**：使用 Mistral API 时遇到 422 错误，通常是因为模型不支持额外的输入参数。
    *   **状态**：推测已在近期的 Provider 修复中解决。
    *   *[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/2693)*

## 6. 功能请求与路线图信号
以下功能请求显示了社区的关注方向，且已有对应的 PR 正在推进：

*   **On-demand MCP Tool Loading** ([#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095))
    *   **信号**：用户迫切希望减少 MCP 工具对 Token 的消耗。**状态**：PR #3446 已合并，预计在下个版本生效。
*   **LinkedIn Tool Support** ([#3400](https://github.com/zeroclaw-labs/zeroclaw/pull/3400))
    *   **信号**：社交网络自动化是高频需求。PR 已提出，支持 OAuth2 和多操作（发帖、评论等），值得关注。
*   **WebSocket Bridge Channel** ([#2816](https://github.com/zeroclaw-labs/zeroclaw/issues/2816) / PR [#3401](https://github.com/zeroclaw-labs/zeroclaw/pull/3401))
    *   **信号**：第三方集成需求强烈。PR 正在重新将之前在 `dev` 分支删除的 Bridge 功能带回 `master`。

## 7. 用户反馈摘要
从 Issues 的评论中提炼出以下关键反馈：
*   **痛点 - Windows 兼容性**：多名用户反馈 Windows 下编译困难和 Shell 工具无法使用。今日的 PR #3442 和 #3449 (增加 Windows CI) 直接回应了这一痛点，维护者正在积极改善 Windows 体验。
*   **痛点 - 配置复杂性**：用户对于 `workspace_only` 和 `allowed_roots` 的交互逻辑表示困惑 (#3082)，认为当前实现不符合直觉。
*   **好评 - 多语言支持**：社区对中文文档的全量翻译 (#3429) 反馈积极，非英语开发者的参与度有望提升。

## 8. 待处理积压
*   **#3451 [Windows/wizard deadlock]**: 尽管主要是测试环境的问题，但在非交互式终端中可能导致死锁，需要关注。
*   **#2017 [Add Avian provider]**: 这是一个 2 月份开启的 PR，至今尚未合并。Avian 是一个较新的 LLM 提供商，维护者可能需要评估是否将其纳入官方支持列表。
*   **长期 Bug**: 一些特定平台的问题（如 Cloudflare Tunnel URL 误识别 #3413, Linq channel payload shape #3337）虽然已修复，但在特定边缘环境下仍需用户验证。

---
*数据来源：Zeroclaw (github.com/zeroclaw-labs/zeroclaw) | 生成日期：2026-03-14*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

你好！我是 AI 智能体与个人 AI 助手领域的开源项目分析师。以下是基于 PicoClaw 项目 2026-03-14 的 GitHub 数据生成的项目动态日报。

---

# PicoClaw 项目日报 (2026-03-14)

## 📝 1. 今日速览
PicoClaw 项目今日呈现出**极高活跃度**，处于代码重构与功能快速迭代的关键阶段。
*   **开发协作密集**：过去24小时内合并/关闭了 **49 个** PR，同时有 **60 个** PR 待合并，表明贡献者正集中解决技术债和交付新特性。
*   **架构讨论热烈**：社区关于 Agent 架构重构的讨论持续白热化，特别是“Agent 灵魂（SOUL）”定义和“事件驱动循环”的提案引发了核心维护者的深入参与。
*   **安全被重点关注**：今日新增的 Issues 中，有相当一部分集中在配置安全性（如默认权限、CORS、执行隔离）上，显示项目正致力于从“实验性”向“生产就绪”转变。

---

## 🚀 2. 版本发布
*   **nightly: v0.2.2-nightly.20260313.19835b2f**
    *   **类型**：自动构建
    *   **状态**：可能不稳定，仅供测试。
    *   **说明**：此版本紧随主分支开发，包含截至 3 月 13 日的最新代码变更。鉴于今日大量的 PR 合并，该版本可能包含新的 Agent 逻辑和配置修复，但建议谨慎用于生产环境。
    *   **[查看完整更新日志](https://github.com/sipeed/picoclaw/compare/v0.2.2...main)**

---

## 🔨 3. 项目进展
今日合并/关闭的 PR 显示项目在文档、工具链和核心功能上均有显著推进：

*   **Agent 架构进化**：
    *   **`TOOLS.md` 上下文支持** ([#1417](https://github.com/sipeed/picoclaw/pull/1417))：修复了工具文档不被 Agent 读取的 Bug，确保用户定义的工具说明能被 LLM 理解。
    *   **Agent Steering（干预）功能** ([#1517](https://github.com/sipeed/picoclaw/pull/1517))：引入了允许用户在 Agent 运行过程中中断或重定向执行的机制，这是解决 Agent 幻觉或死循环的关键特性。
*   **文件处理能力增强**：
    *   **本地文件路径暴露** ([#1516](https://github.com/sipeed/picoclaw/pull/1516))：Agent 现在可以访问用户上传的文件（文档、音频等）的本地路径，而不仅仅是 Base64 数据，使得 Agent 能直接操作本地文件系统中的用户文件。
*   **基础设施与维护**：
    *   **Cron 性能优化** ([#1518](https://github.com/sipeed/picoclaw/pull/1518))：重构了定时任务服务的查找逻辑，降低了小型硬件上的 CPU 占用和锁竞争。
    *   **配置修复** ([#1513](https://github.com/sipeed/picoclaw/pull/1513))：修复了仅配置 `providers` 时会意外加载默认模板和模型的 Bug，解决了老用户升级后的配置困扰。

---

## 🔥 4. 社区热点
今日社区讨论的焦点集中在 **Agent 的定义与交互模式**，以及 **本地部署的配置难题**：

1.  **[Agent Refactor] What an Agent is** ([#1218](https://github.com/sipeed/picoclaw/issues/1218))
    *   **热度**：24 条评论
    *   **核心议题**：提案引入 `SOUL.md` 和 `AGENT.md` 来定义 Agent 的人格与配置。社区正在辩论是否应将 Agent 的“性格”与“能力”解耦，以及 Markdown 格式是否是最佳配置载体。
2.  **[Event-driven agent loop](https://github.com/sipeed/picoclaw/issues/1316)**
    *   **热度**：9 条评论
    *   **核心议题**：旨在解决 Agent Loop 的黑盒问题，提出 Hooks、中断和动态追加消息的机制。这是实现可观测性和可控性的关键架构变更。
3.  **[BUG] How to configure PicoClaw with local Ollama?** ([#1161](https://github.com/sipeed/picoclaw/issues/1161))
    *   **热度**：17 条评论
    *   **核心议题**：用户在使用本地模型时 Agent 运行无响应，暴露了本地模型与非 OpenAI 协议适配之间存在的配置复杂性。

---

## 🐛 5. Bug 与稳定性
今日报告的 Bug 中，**安全性问题**占比突出，需引起维护者高度警惕：

*   **[高危] 安全配置默认值过于宽松** ([#1530](https://github.com/sipeed/picoclaw/issues/1530), [#1529](https://github.com/sipeed/picoclaw/issues/1529))
    *   **问题**：`pico setup` 默认开启 wildcard CORS 和基于 query string 的 token 认证，且 Web 模式在无 CIDR 限制时暴露在公网。
    *   **影响**：极易遭受攻击或泄露敏感 token。
*   **[高危] Exec 工具远程执行默认开启** ([#1525](https://github.com/sipeed/picoclaw/issues/1525))
    *   **问题**：`tools.exec.allow_remote` 默认为 `true`，意味着通过 Webhook 或远程聊天即可执行 Shell 命令。
    *   **影响**：严重的远程代码执行（RCE）风险。
*   **[中危] Symlink 攻击** ([#1526](https://github.com/sipeed/picoclaw/issues/1526))
    *   **问题**：即使开启 `restrict_to_workspace`，Exec 工具仍可通过 symlink 参数读取工作区外的文件。
*   **[功能Bug] 动态模型配置不生效** ([#1493](https://github.com/sipeed/picoclaw/issues/1493))
    *   **问题**：新增模型后必须重启 gateway 才能生效，影响热更新体验。
*   **[功能Bug] Telegram 自动重连失败** ([#1455](https://github.com/sipeed/picoclaw/pull/1455))
    *   **状态**：已提交 Fix PR。
    *   **问题**：Telegram 长轮询断开后无法自动重连。

---

## 💡 6. 功能请求与路线图信号
从 Issues 中可窥见项目未来的三个主要发展方向：

1.  **模型与能力扩展**：
    *   **Azure OpenAI 支持** ([#1424](https://github.com/sipeed/picoclaw/issues/1424))：企业级用户的刚需。
    *   **MCP 集成优化** ([#1520](https://github.com/sipeed/picoclaw/pull/1520))：Launcher 镜像加入 Node.js 运行时，预示着将更好地支持基于 NPM 的 MCP (Model Context Protocol) 服务器。
    *   **语音 I/O 插件化** ([#1503](https://github.com/sipeed/picoclaw/issues/1503))：请求支持本地 STT/TTS 及 HuggingFace 集成。
2.  **通道集成**：
    *   **飞书文件处理** ([#1506](https://github.com/sipeed/picoclaw/issues/1506))：希望 Agent 能处理飞书发送的非图片文件。
    *   **OpenIM 插件** ([#1372](https://github.com/sipeed/picoclaw/issues/1372))：社区询问是否有现有的 OpenIM 通道插件。
3.  **编排与发现**：
    *   **能力发现端点** ([#1474](https://github.com/sipeed/picoclaw/issues/1474))：请求提供 API 以便外部系统自动查询 PicoClaw 节点支持的工具和 Agent，这是迈向多节点编排的基础。

---

## 🗣 7. 用户反馈摘要
*   **痛点 - 配置复杂性**：多个 Issues 反映配置 `config.json` 困难，特别是配置文档与代码实现不一致（[#1489](https://github.com/sipeed/picoclaw/issues/1489)），以及本地模型（Ollama）配置后无响应的问题。
*   **痛点 - 安全性担忧**：用户敏锐地发现了默认配置中的安全漏洞，这表明用户群体正在从“尝鲜者”转向“严肃使用者”，开始关注生产环境的安全性。
*   **好评 - 架构演进**：核心开发者对 Agent Loop 的重构计划（事件驱动、Hooks）得到了社区的积极反馈，认为这是解决当前 Agent 控制难题的正确方向。

---

## 🗓 8. 待处理积压
以下 Issue 长期未解决或讨论停滞，建议维护者优先处理：

*   **[#1150](https://github.com/sipeed/picoclaw/issues/1150) [Priority: High]**：Pool factory panic 导致的死锁问题。这是一个底层稳定性 Bug，会导致服务永久挂起。
*   **[#528](https://github.com/sipeed/picoclaw/issues/528)**：Cron 定时任务相关的 Bug，虽然已有优化 Cron 性能的 PR 合并，但该具体功能异常仍未标记为关闭。
*   **[#1242](https://github.com/sipeed/picoclaw/issues/1242)**：QQ 频道无法根据 bindings 正确区分 Agent。这是特定通道的功能性问题。

---
**数据来源**：GitHub.com/sipeed/picoclaw | 生成时间：2026-03-14

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-14)

## 1. 今日速览
NanoClaw 项目今日（2026-03-14）处于极高的活跃开发状态，过去 24 小时内共产生了 **18 条 Issues** 和 **37 条 PRs**，显示出社区与核心团队强劲的贡献势头。今日的重点集中在**连接稳定性修复**（特别是 WhatsApp 通道的崩溃问题）和**安全加固**（凭证验证与 Web 工具输出清洗）。尽管没有新版本发布，但多个关键功能的 PR 已处于待审核状态，项目正在向多通道支持和更强大的记忆系统快速迭代。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日没有 PR 显示为已合并，但核心开发者已提交多个修复 PR，目前处于待审核状态，预示着即将有一波代码合并：
*   **WhatsApp 通道核心重构**：PR #1051 提交了 WhatsApp 集成代码，旨在解决长期存在的连接不稳定问题。
*   **进程崩溃修复**：PR #1050 专门针对非 macOS 环境下 QR 扫描导致服务崩溃以及 session 注出导致进程退出的 High Priority Bug 进行了修复，移除了 `process.exit()` 调用。
*   **凭证安全流程**：PR #1044 和 #1048 提出了在安装阶段即时验证 Claude Token 的方案，防止无效配置延迟暴露。
*   **消息处理优化**：PR #1040 旨在修复消息积压超过 200 条时的丢包问题，添加了全量消费逻辑。

## 4. 社区热点
今日讨论的热点主要集中在用户体验痛点和新功能集成上：
*   **[热点 Issue #1047: WhatsApp 通道崩溃服务](https://github.com/qwibitai/nanoclaw/issues/1047)** (High Priority)
    *   **内容**：用户反馈在非 macOS 环境下，WhatsApp 的 QR 扫描会导致整个服务直接崩溃且无法恢复。
    *   **分析**：这是一个阻碍 Headless/Linux 部署的严重 Bug，社区对此响应迅速，已有对应的 Fix PR (#1050)。
*   **[热点 PR #1043: 升级至混合检索记忆系统](https://github.com/qwibitai/nanoclaw/pull/1043)** (Feature)
    *   **内容**：提议引入 BM25+向量混合检索机制，以替代仅支持向量搜索的当前记忆系统。
    *   **分析**：这表明社区希望提升 Agent 在关键词密集型任务中的召回率。
*   **[热点 Issue #1046: 定时任务缺少 MCP 凭证挂载](https://github.com/qwibitai/nanoclaw/issues/1046)** (High Priority)
    *   **内容**：发现定时任务容器无法访问 Gmail/Calendar 等服务的 MCP 凭证，导致相关工具调用静默失败。

## 5. Bug 与稳定性
今日报告的 Bug 涉及多个层面的稳定性问题，部分已有修复方案：
*   **[High: 重复消息发送](https://github.com/qwibitai/nanoclaw/issues/1020)**：当 SDK 返回多个结果时，用户会收到两条不同回复。
*   **[High: WhatsApp 崩溃与退出](https://github.com/qwibitai/nanoclaw/issues/1047)**：连接处理器中的 `process.exit()` 导致服务不可恢复。
    *   *Fix PR*: [#1050](https://github.com/qwibitai/nanoclaw/pull/1050)
*   **[High: 定时任务无 MCP 凭证](https://github.com/qwibitai/nanoclaw/issues/1046)**：`isScheduledTask` 未传递给挂载逻辑，导致第三方服务无法认证。
    *   *Fix PR*: [#1049](https://github.com/qwibitai/nanoclaw/pull/1049)
*   **[Medium: Token 验证缺失](https://github.com/qwibitai/nanoclaw/issues/1045)**：`.env` 中的无效 Token 只有在发送首条消息时才会报错，体验不佳。
    *   *Fix PR*: [#1044](https://github.com/qwibitai/nanoclaw/pull/1044), [#1048](https://github.com/qwibitai/nanoclaw/pull/1048)
*   **[Medium: SOUL.md 规则漏洞](https://github.com/qwibitai/nanoclaw/issues/829)**：Agent 可能会虚假声明工具执行情况，需要增加规则约束。

## 6. 功能请求与路线图信号
从新开的 Issues 和 PRs 中可以看出项目正在向更广泛的集成和更强的能力发展：
*   **新通道支持**：
    *   **Signal**: [PR #1023](https://github.com/qwibitai/nanoclaw/pull/1023) 和 [PR #1016](https://github.com/qwibitai/nanoclaw/pull/1016) 正在通过 signal-cli 集成 Signal 通道。
    *   **Nostr**: [PR #1041](https://github.com/qwibitai/nanoclaw/pull/1041) 提议添加基于 NIP-17 的 Nostr 私信通道。
    *   **Lightning**: [PR #1042](https://github.com/qwibitai/nanoclaw/pull/1042) 提议集成 NWC 钱包，实现比特币支付功能。
*   **高级搜索与记忆**：
    *   **FTS5 搜索**: Issue #908 和 #909 讨论了基于 SQLite FTS5 的对话索引和搜索功能。
    *   **LanceDB 技能**: [PR #979](https://github.com/qwibitai/nanoclaw/pull/979) 提议添加技能以支持持久化记忆。
*   **Prompt Caching**: Issue #1033 询问是否支持 Prompt Caching 以减少 90% 的 Anthropic 开销。

## 7. 用户反馈摘要
*   **痛点 - 配置困难**：用户在 Issue #1029 中反馈使用 Claude 订阅配置时 Token 频繁过期，且 Issue #1045 指出安装阶段缺乏验证导致配置错误难以发现。
*   **痛点 - 部署兼容性**：Issue #1047 和 #447 反映了在非 macOS 环境或特定输入格式下的兼容性缺陷（如电话号码前缀 + 导致的链接失败）。
*   **建议 - 模型支持**：Issue #1015 询问是否支持其他 LLM 提供商，并尝试使用 DeepInfra/Zai 遇到模型报错问题。

## 8. 待处理积压
以下 Issues 虽非今日创建，但今日有更新且尚未解决，值得关注：
*   **[Bug: Telegram 消息重复](https://github.com/qwibitai/nanoclaw/pull/835)** (Open since Mar 8, PR Open): 多容器场景下的竞态条件导致消息重复。
*   **[Doc: 间接注入风险](https://github.com/qwibitai/nanoclaw/issues/411)** (Open since Feb 23): 社区成员强调文档中应明确提示不受信任数据可能导致 Agent 被接管的风险。
*   **[Enh: BoxLite 后端](https://github.com/qwibitai/nanoclaw/issues/520)** (Closed but maybe stalled): 讨论引入微 VM 沙箱作为可选后端的提案。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-03-14)

---

## 1. 今日速览
NullClaw 项目在过去 24 小时内展现了极高的活跃度与维护效率。**Issues 与 PR 均实现了零积压**，新增的 15 个活跃 Issue 已被全部处理（共关闭 15 个），同时合并了 36 个 PR，显示项目正处于快速迭代期。今日发布了 `v2026.3.12` 和 `v2026.3.13` 两个连续版本，主要修复了核心通信渠道（WebSocket/Slack）的稳定性问题，并针对 Windows 用户的使用体验进行了大幅优化（服务、文档、二进制文件说明）。整体来看，项目健康度极高，文档与社区反馈正在快速驱动项目完善。

---

## 2. 版本发布
项目今日连续发布两个小版本，均为修复与优化性质。

*   **v2026.3.13** ([Release Note](https://github.com/nullclaw/nullclaw/releases/tag/v2026.3.13))
    *   **Agent 稳定性**: 修复了 Agent 在触发速率限制时的立即重试逻辑 ([PR #474](https://github.com/nullclaw/nullclaw/pull/474))。
    *   **文档完善**: 增加了 Windows 用户直接使用二进制文件的详细说明 ([PR #479](https://github.com/nullclaw/nullclaw/pull/479))，降低了新用户的上手门槛。
*   **v2026.3.12** ([Release Note](https://github.com/nullclaw/nullclaw/releases/tag/v2026.3.12))
    *   **飞书修复**: 修复了飞书 WebSocket 线程栈大小导致的 Bus Error，通过使用 `HEAVY_RUNTIME_STACK_SIZE` 解决了连接崩溃问题。
    *   **Telegram 增强**: 加固了 Telegram Forum Topics 和可配置命令菜单的支持 ([PR #436](https://github.com/nullclaw/nullclaw/pull/436))。

---

## 3. 项目进展
今日合并的 36 个 PR 显著推动了系统的稳定性与生态整合，以下是关键进展：

*   **通信链路稳定性大幅提升**:
    *   **WebSocket 核心修复**: [PR #487](https://github.com/nullclaw/nullclaw/pull/487) 修复了 v2026.3.12 引入的严重回归问题，该问题导致 TLS 连接在空读取时过早关闭，影响了 Discord、Lark、DingTalk 等所有 `wss://` 渠道。此修复对于恢复生产环境稳定性至关重要。
    *   **Slack 交互修复**: [PR #505](https://github.com/nullclaw/nullclaw/pull/505) 解决了 Slack HTTP 模式下交互按钮回调失败的问题，通过持久化 `pending_interactions` 确保跨请求状态不丢失。
    *   **OneBot 通道支持**: [PR #469](https://github.com/nullclaw/nullclaw/pull/469) 完善了 OneBot WebSocket 网关循环，并增加了纯 `ws://` 协议支持。
*   **Windows 平台体验优化**:
    *   [PR #467](https://github.com/nullclaw/nullclaw/pull/467) 修复了 Windows 服务启动超时 (Error 1053) 的问题，实现了真正的 SCM (Service Control Manager) 感知入口。
    *   [PR #489](https://github.com/nullclaw/nullclaw/pull/489) 更新了安装指南，明确了将二进制文件添加到 PATH 的步骤。
*   **功能增强**:
    *   **隧道集成**: [PR #502](https://github.com/nullclaw/nullclaw/pull/502) 将 Cloudflare/Ngrok/Tailscale 隧道模块集成到 Gateway 启动流程中，解决了内网部署 Webhook 难的问题。
    *   **Microsoft Teams 支持**: [PR #438](https://github.com/nullclaw/nullclaw/pull/438) 实现了完整的 Microsoft Teams 通道支持。
    *   **模型发现**: [PR #480](https://github.com/nullclaw/nullclaw/pull/480) 引入了 `models.dev` API 作为模型发现的备选方案，增强了供应商兼容性。

---

## 4. 社区热点
今日社区讨论集中在**配置文档缺失**与**特定平台的连接问题**上。

*   **[#496/508 Docs Needed: Subagents configurations](https://github.com/nullclaw/nullclaw/issues/496)** (关注度: 👍 1)
    *   **讨论**: 用户迫切需要关于 Subagents 配置、绑定 和路由 的示例文档。尽管 Issue 已关闭（可能已标记为 Planned），但社区呼声很高。
*   **[#17 Termux installation guide](https://github.com/nullclaw/nullclaw/issues/17)** (评论: 7, 已关闭)
    *   **讨论**: 关于在 Android Termux 环境下的安装指南请求。经过讨论已被关闭，表明维护者可能已采纳建议或认为暂不支持，但显示了用户在移动端部署 NullClaw 的强烈意愿。
*   **[#477 飞书 WS 断开](https://github.com/nullclaw/nullclaw/issues/477)** (评论: 3, 开放中)
    *   **讨论**: 即使 v2026.3.12 修复了 Bus Error，用户反馈飞书 WebSocket 仍有断连问题。这是目前最需关注的运行时故障。
*   **[#222 MiniMax-M2.5 初始化对话失败](https://github.com/nullclaw/nullclaw/issues/222)** (评论: 6, 已关闭)
    *   **讨论**: 涉及特定 LLM 提供商的兼容性问题。

---

## 5. Bug 与稳定性
今日报告的关键 Bug 按严重程度排序：

1.  **[High] [#413 file_read tool_call stopped](https://github.com/nullclaw/nullclaw/issues/413)**: Weather Skill 示例中工具调用卡住，影响核心功能体验。
2.  **[High] [#504 --help starts runtime](https://github.com/nullclaw/nullclaw/issues/504)**: `nullclaw gateway --help` 意外启动了服务而非显示帮助，这在调试时可能导致冲突（如端口占用）。CLI 行为不符合 POSIX 惯例。
3.  **[Medium] [#477 飞书 WS 断开](https://github.com/nullclaw/nullclaw/issues/477)**: 持续的连接不稳定问题，尽管部分代码已合并修复。
4.  **[Medium] [#506 Network error](https://github.com/nullclaw/nullclaw/issues/506)**: 用户报告在相同服务器上其他 Agent 正常，但 NullClaw 报网络错误，可能涉及底层 HTTP/WS 实现的特定超时或重置逻辑。
5.  **[Medium] [#503 Telegram attachments not forwarded](https://github.com/nullclaw/nullclaw/issues/503)**: Telegram 语音消息和文件附件被静默忽略，仅转发文本。

---

## 6. 功能请求与路线图信号
根据今日 Issues 和 PRs，未来的开发方向信号明确：

*   **生态与隧道支持**: Issue [#495](https://github.com/nullclaw/nullclaw/issues/495) 和 PR [#502](https://github.com/nullclaw/nullclaw/pull/502) 表明，通过 CloudFlare/Nginx 隧道暴露本地 Web UI 是一大需求，目前 PR 已合并，预计将成为下一版本的亮点。
*   **OAuth 认证增强**: Issue [#492](https://github.com/nullclaw/nullclaw/issues/492) 请求增加对 Qwen 原生 OAuth Token 的支持，类似现有的 Gemini 支持。这是降低 API Key 管理负担的重要一步。
*   **钉钉双向支持**: Issue [#376](https://github.com/nullclaw/nullclaw/issues/376) 询问钉钉是否仅支持发送（send-only）。用户反馈连接成功 ([#490](https://github.com/nullclaw/nullclaw/issues/490))，但交互逻辑可能仍需完善。

---

## 7. 用户反馈摘要
*   **痛点**: 文档滞后于代码。用户反映 Subagents、MCP 配置和 Identity 定义缺乏 JSON 格式示例 ([#497](https://github.com/nullclaw/nullclaw/issues/497), [#507](https://github.com/nullclaw/nullclaw/issues/507))。
*   **Windows 用户**: 体验正在改善，用户 @neoliuhua 贡献了多处关于二进制文件和 PATH 配置的文档修复 ([PR #482](https://github.com/nullclaw/nullclaw/pull/482), [#489](https://github.com/nullclaw/nullclaw/pull/489))，说明该群体活跃但需要更友好的上手指引。
*   **稳定性**: 飞书 和钉钉 用户是反馈的主力军，主要集中在 WebSocket 连接的稳定性和消息接收确认上。

---

## 8. 待处理积压
虽然今日处理效率极高，但以下问题需持续关注：
*   **长期开放 Issue**: [#195 SECRETS Management](https://github.com/nullclaw/nullclaw/issues/195) (创建于 3 月初) 关于非模型提供商 API Key 的通用管理方案仍未有明确 PR。
*   **性能基准**: Issue [#473 README changes](https://github.com/nullclaw/nullclaw/issues/473) 指出 README 中的 Benchmark 数据（二进制大小 1MB）已过时，可能引起争议，建议更新。
*   **新功能 Bug**: 刚发布的 Subagents 功能 (如 Topic Bindings) 虽然已合并 PR，但文档缺失导致用户无法使用，需尽快补充文档以释放功能价值。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 - 2026-03-14

**概览：** 今日项目处于**极高活跃度**状态。过去 24 小时内共产生了 75 条更新（25 Issues + 50 PRs），显示出社区与核心团队强劲的贡献势头。主要进展集中在 CLI 生态完善、多租户安全重构以及 Web 交互体验优化上。值得注意的是，CI 自动化发现并创建了多个高危安全与性能相关的 Issues，同时核心开发者提交了多个架构级重构 PR。

---

### 1. 今日速览
*   **开发活跃度爆表：** 单日处理 50 个 PR，涵盖从 CLI 工具增强到核心多租户架构重构的广泛领域，显示出项目正在快速迭代以准备下一阶段发布。
*   **安全与性能并重：** CI 流水线今日捕获并提交了 4 个高危 Issues，涉及正则表达式 DoS 风险、SSRF 漏洞以及 SSE 解析路径的 $O(n^2)$ 性能瓶颈，表明项目对代码质量有严格把控。
*   **用户体验升级：** 社区反馈的 Safari 输入法 Bug 和 Telegram Bot 验证问题得到确认，同时 Web 端引入了“建议片段”功能以改善交互流畅度。

---

### 2. 版本发布
*   **无新版本发布**
    *   虽有大量代码提交，今日未推送新的 Release 版本。考虑到 PR #1146 正在调整 `cargo-dist` 配置，团队可能正在为后续版本构建流程做准备。

---

### 3. 项目进展
*   **[功能] CLI 体系大幅扩展**
    *   PR [#1043](https://github.com/nearai/ironclaw/pull/1043) 与 [#1050](https://github.com/nearai/ironclaw/pull/1050) 引入了完整的模型管理和网关生命周期管理子命令（`models list/status`, `gateway serve/start/stop`），大幅提升了运维友好度。
    *   PR [#1105](https://github.com/nearai/ironclaw/pull/1105) 新增 `ironclaw logs` 命令，解决了日志查看痛点。
*   **[功能] Web 交互增强**
    *   PR [#1156](https://github.com/nearai/ironclaw/pull/1156) 为 Web UI 增加了“后续建议”功能，LLM 可在回复中携带 `<suggestions>` 标签，前端渲染为可点击芯片，降低用户输入成本。
*   **[重构] 多租户与安全隔离**
    *   PR [#1118](https://github.com/nearai/ironclaw/pull/1118) (Rebase of #351) 推进多租户认证与工作区隔离，旨在解决上下文污染漏洞。
    *   PR [#1151](https://github.com/nearai/ironclaw/pull/1151) 重构了 Channel 的 Owner Scope，修复了默认路由回退逻辑，增强数据持久化的一致性。
*   **[生态] Feishu/Lark 飞书集成**
    *   PR [#1110](https://github.com/nearai/ironclaw/pull/1110) 实现了飞书 Event Subscription v2.0 的 WASM Channel 插件，扩展了企业通讯场景支持。

---

### 4. 社区热点
*   **[需求] 强烈呼吁图像支持**
    *   Issue [#1122](https://github.com/nearai/ironclaw/issues/1122) & [#1123](https://github.com/nearai/ironclaw/issues/1123): 用户连续提交两个 Issue 请求增加图片文件上传和分析支持，当前系统上传图片会报错 "unsupported document type"。这是目前高优先级的用户痛点。
*   **[Bug] Safari 输入法体验问题**
    *   Issue [#1139](https://github.com/nearai/ironclaw/issues/1139): 在 macOS Safari 上使用 CJK 输入法时，按下回车键确认选词会意外发送消息。该 Issue 短时间内获得 1 条评论，属于高频使用场景下的体验缺陷。
*   **[讨论] 兼容性争议**
    *   Issue [#728](https://github.com/nearai/ironclaw/issues/728): 关于 `kimi-k2.5` 模型的兼容性讨论（Temperature 限制及 reasoning_content 缺失），目前已有 4 条评论，反映了对不同模型提供商适配的细节需求。

---

### 5. Bug 与稳定性
*   **[高危] ReDoS 风险**
    *   Issue [#825](https://github.com/nearai/ironclaw/issues/825): CI 审查发现 Event trigger 的正则模式未经验证，可能导致 ReDoS 攻击。
*   **[高危] SSRF 漏洞**
    *   Issue [#1103](https://github.com/nearai/ironclaw/issues/1103): 配置的 Embedding Base URL 缺乏验证，存在 SSRF 风险。
*   **[严重] Routine 事件触发失效**
    *   Issue [#1051](https://github.com/nearai/ironclaw/issues/1051): 事件触发例程（如捕获 Telegram 消息）被创建后**从不触发**。这是一个核心功能的回归问题。
*   **[中等] SSE 解析性能问题**
    *   Issue [#1142](https://github.com/nearai/ironclaw/issues/1142): HTTP 传输层的 SSE 解析存在 $O(n^2)$ 字符串分配，导致性能瓶颈。已有 Fix PR [#1153](https://github.com/nearai/ironclaw/pull/1153) 提交。
*   **[中等] Google Sheets 写入为空**
    *   Issue [#1002](https://github.com/nearai/ironclaw/issues/1002): 工具执行后 Sheets 创建成功但未填充数据。

---

### 6. 功能请求与路线图信号
*   **Slack Socket Mode 支持**
    *   Issue [#1155](https://github.com/nearai/ironclaw/issues/1155): 用户请求支持 Slack Socket Mode，以避免在实例上开放入站 Webhook 流量，这符合安全最佳实践。
*   **BYOK 模型配置标准化**
    *   Issue [#1027](https://github.com/nearai/ironclaw/issues/1027): 社区询问 BYOK (Bring Your Own Key) 的官方支持路径和文档。
*   **Registry 配置化**
    *   PR [#1144](https://github.com/nearai/ironclaw/pull/1144): 正在将硬编码的 MCP Server 定义迁移至 JSON Manifest，这表明项目正在向更灵活的插件化/可扩展架构转型。

---

### 7. 用户反馈摘要
*   **痛点 - OAuth 认证不稳定：** Issue [#1136](https://github.com/nearai/ironclaw/issues/1136) 反馈 Anthropic OAuth Token 在过期时会导致间歇性认证失败，且丢失请求，影响对话连续性。
*   **痛点 - 环境变量配置晦涩：** Issue [#1116](https://github.com/nearai/ironclaw/issues/1116) 指出 `openai_compatible` 后端若不提前导出环境变量会导致 401 错误，即便配置正确。
*   **痛点 - Cron 表达式难懂：** Issue [#1131](https://github.com/nearai/ironclaw/issues/1131) 指出 Routine 页面展示的 Cron 表达式对普通用户不够友好（已有修复 PR #1154）。

---

### 8. 待处理积压
*   **[高优] 边缘硬件支持**
    *   Issue [#134](https://github.com/nearai/ironclaw/issues/134): 关于 Raspberry Pi GPIO 安全交互的架构提案，虽已有关联 PR，但 Issue 自身讨论已持续较长时间，需最终落地确认。
*   **[高优] 监控与告警缺失**
    *   Issue [#764](https://github.com/nearai/ironclaw/issues/764): 基础设施缺乏容量监控告警，导致实例资源耗尽时无感知。虽然已关闭，但需确认是否已通过自动化流程彻底解决。
*   **[高优] 配置热加载**
    *   Issue [#1119](https://github.com/nearai/ironclaw/issues/1119): 这是一个高优先级的技术债务，旨在统一配置源以支持热重载，目前多个相关 PR 正在推进中。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-14)

## 1. 今日速览
LobsterAI 项目在过去 24 小时内保持**高度活跃**的开发状态，虽然未发布新版本，但核心维护团队进行了密集的代码合并与重构。今日共处理了 9 条 PR，全部成功合并/关闭，主要涉及 **OpenClaw 引擎的深度集成、启动速度优化及 IM 通道功能完善**。社区方面，新增 11 个 Issues 反映了用户对**本地模型支持稳定性**和**定时任务系统**的强烈关注。目前项目正处于从旧架构向 OpenClaw 架构平滑迁移的关键阶段。

## 2. 版本发布
*   **当前状态**：无新版本发布。
*   **备注**：鉴于今日合并了大量关于 OpenClaw 的功能补丁，建议用户留意后续发布的 Release Notes，可能包含重要的架构升级说明。

## 3. 项目进展
今日合并的 PR 显示项目在性能和架构整合上取得了重大突破：

*   **性能大幅优化**：PR #395 优化了 OpenClaw Gateway 的启动速度。通过引入 esbuild 单文件 bundle 和专用补丁，将 Windows 环境下的启动时间从 **180s+ 降至首次约 85s，后续启动约 15s**，解决了用户反馈的“启动龟速”痛点。
    *   链接：[netease-youdao/LobsterAI#395](https://github.com/netease-youdao/LobsterAI/pull/395)
*   **架构重构与集成**：
    *   **内置沙箱移除**：PR #403 移除了内置沙箱及构建脚本，并将系统提示词精简后与 OpenClaw 默认提示词合并，标志着项目彻底转向外部 agent 依赖策略。
    *   **MCP 桥接**：PR #408 实现了 MCP Bridge，使得 LobsterAI 的 MCP 服务器可作为工具暴露给 OpenClaw 的嵌入式 agent，并支持热重载。
        *   链接：[netease-youdao/LobsterAI#403](https://github.com/netease-youdao/LobsterAI/pull/403) | [netease-youdao/LobsterAI#408](https://github.com/netease-youdao/LobsterAI/pull/408)
*   **定时任务增强**：PR #409 和 #410 为定时任务增加了对 OpenClaw 的支持，并修复了删除任务时的错误引用。
    *   链接：[netease-youdao/LobsterAI#409](https://github.com/netease-youdao/LobsterAI/pull/409)
*   **插件预装系统**：PR #346 建立了通用的 OpenClaw 插件预装系统，并自动同步配置了钉钉、飞书、QQ、企业微信等官方 IM 通道插件。
    *   链接：[netease-youdao/LobsterAI#346](https://github.com/netease-youdao/LobsterAI/pull/346)

## 4. 社区热点
今日讨论最集中的话题围绕**本地模型**的功能限制展开：

*   **本地模型 Function Calling 失效 (Issue #112)**：该 Issue 持续受到关注，用户报告在使用 Ollama + Qwen3 等本地模型时，无法通过自然语言调用技能（工具），而 API 模型正常。这触及了本地部署用户的核心需求。
    *   链接：[netease-youdao/LobsterAI#112](https://github.com/netease-youdao/LobsterAI/issues/112)
*   **Token 计数异常 (Issue #370)**：用户反馈仅输入“你好”就触发了 8961 个 input tokens 的警告，导致模型报错。这可能是前端 Prompt 拼接或 Context 计数逻辑的严重 Bug。
    *   链接：[netease-youdao/LobsterAI#370](https://github.com/netease-youdao/LobsterAI/issues/370)
*   **本地模型无法执行指令 (Issue #405)**：新用户反馈即使是 `qwen2.5-coder` 这类代码模型在本地部署时也无法执行简单的文件列表命令，配置文件调整无效。
    *   链接：[netease-youdao/LobsterAI#405](https://github.com/netease-youdao/LobsterAI/issues/405)

## 5. Bug 与稳定性
今日报告的 Bug 涉及多个系统层面，部分为新架构引入的兼容性问题：

*   **[严重] Token 超限错误** (Issue #370)：极简输入导致 Token 溢出，影响基本对话功能。**暂无修复 PR。**
*   **[高] 定时任务 Cron 表达式错误** (Issue #407)：Mac 用户设置“每10分钟执行”生成的 Cron 计划显示有误。虽然今日合并了 PR #409/410，但不确定是否包含此修复。
    *   链接：[netease-youdao/LobsterAI#407](https://github.com/netease-youdao/LobsterAI/issues/407)
*   **[高] API 兼容性** (Issue #399)：阿里云百炼 GLM 4.5 模型报错 "Claude run failed"。
*   **[中] 通道通知失效** (Issue #285)：定时任务通知钉钉自动失效。
*   **[中] 交互逻辑** (Issue #358)：任务未跑完即显示完成，需用户手动输入“继续”。
*   **[中] 沙箱无法启动** (Issue #402)：Debian 12 环境下源码构建版运行一段后自动退出。

## 6. 功能请求与路线图信号
用户反馈揭示了潜在的优化方向：

*   **自定义技能选择** (Issue #404)：用户请求在对话框技能选择弹窗中支持选择自己创建的 workflow skill。
*   **状态栏简化** (PR #412)：开发团队已主动移除了对话标题栏的“执行模式 tag”，表明 UI 正在向简化方向调整。
*   **设置记忆持久化** (PR #411)：设置记忆 Tab 已对接 OpenClaw MEMORY.md 文件存储，增加了本地数据持久化的能力。

## 7. 用户反馈摘要
*   **痛点**：本地模型用户感到受限，主要集中在“只能聊天不能执行命令”（Issue #405, #112），这对于看重隐私和离线能力的用户是阻碍。
*   **体验**：部分用户抱怨“速度太慢，莫名等待”（Issue #400），今日 PR #395 对启动速度的优化直击此痛点。
*   **建议**：有用户指出虽然 LobsterAI 体验不错，但相比 OpenClaw 的执行效率仍有差距，建议继续优化内核（Issue #353）。

## 8. 待处理积压
以下长期未解决或持续更新的 Issue 需维护者重点关注：
*   **Issue #112 (本地模型技能调用)**：自 2月26日 开放至今，随着今日新增 Issue #405，该问题影响面在扩大。
*   **Issue #285 (钉钉通知失效)**：自 3月5日 更新，涉及第三方集成稳定性。
*   **Issue #370 (Token 异常)**：新暴露的严重 Bug，需尽快排查 Prompt 模板逻辑。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目日报 - 2026-03-14

## 1. 今日速览
TinyClaw 项目在过去 24 小时内展现出极高的迭代活跃度，成功发布了 **v0.0.13** 版本，标志着项目核心架构的重构完成。今日共关闭了 4 个 PR，主要集中在对 Agent（智能体）配置、记忆系统及部署流程的重构。目前仍有 2 个待合并 PR，涉及品牌重塑（TinyAGI）和办公界面的重新设计。整体来看，项目正在快速解决早期遗留 Bug（如 ES module 作用域错误），并积极完善智能体的可配置性与持久化能力。

## 2. 版本发布
### [v0.0.13 发布](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.13)
本次更新是项目发展的重要里程碑，显著提升了 Agent 的管理能力和系统内部效率：

*   **Agent 配置 UI (74c3e91)**: 引入了全新的配置界面，支持管理技能、系统提示词、记忆和心跳监控。这使得用户无需手动编辑文件即可可视化地控制 Agent 行为。
*   **部署重构与符号链接 (44ad272)**: 统一了工作区创建逻辑，并使用符号链接来管理技能文件。这减少了磁盘占用，并消除了之前代码库中重复的部署逻辑。
*   **分层记忆系统 (aaca334)**: 实现了持久化的分层记忆系统，允许 Agent 跨对话保存、组织和回忆知识。这极大地增强了 Agent 的上下文感知能力。
*   **系统提示优化**: 优化了 AGENTS.md 的处理方式，改为在内存中构建系统指令，减少了磁盘 I/O 操作。

## 3. 项目进展
今日合并的 PR 显示项目正在从基础功能搭建向精细化运维和用户体验优化迈进：

*   **[PR #207] Agent 全配置页面**: 已关闭合并。实现了包含技能、提示词、记忆和心跳监控的分页式配置界面，大幅降低了 Agent 定制门槛。
*   **[PR #211] 部署逻辑整合**: 已关闭合并。将分散在三处的 Agent 目录创建逻辑整合至 `core/agent.ts`，并引入 Symlinks 机制，提升了系统的整洁度和维护性。
*   **[PR #209] 分层记忆系统**: 已关闭合并。确立了以 Markdown 文件 + YAML Frontmatter 为基础的持久化记忆机制，为 Agent 赋予了长期记忆能力。
*   **[PR #208] 内存级系统提示**: 已关闭合并。解决了 AGENTS.md 可能出现的文件过时问题，确保了运行时指令的一致性。

## 4. 社区热点
*   **[PR #191] 品牌重塑：TinyClaw -> TinyAGI** (Open)
    *   **链接**: [TinyAGI/tinyclaw#191](https://github.com/TinyAGI/tinyclaw/pull/191)
    *   **分析**: 该 PR 提出将整个代码库从 TinyClaw 重命名为 TinyAGI。这不仅涉及包名、CLI 命令和环境变量的更改，更反映了项目定位的调整。目前处于待合并状态，若通过将是项目历史上的一次重大“断代”更新。

## 5. Bug 与稳定性
*   **[Issue #210] ES module 作用域错误** (High Severity - CLOSED)
    *   **链接**: [TinyAGI/tinyclaw#210](https://github.com/TinyAGI/tinyclaw/issues/210)
    *   **详情**: 用户在使用 `tinyclaw pairing approve` 命令时遇到 `ReferenceError: exports is not defined` 运行时错误，影响了 Node.js v20 和 v24 版本。
    *   **状态**: 问题已在昨日修复并关闭。今日发布的 v0.0.13 版本应已包含该修复，稳定性得到恢复。

## 6. 功能请求与路线图信号
*   **[Issue #57] 增加更多通讯渠道支持** (OPEN)
    *   **链接**: [TinyAGI/tinyclaw#57](https://github.com/TinyAGI/tinyclaw/issues/57)
    *   **需求**: 社区希望增加 Google Chat、Slack 和 Microsoft Teams 的集成，以及 API 和 MCP 通讯支持。
    *   **分析**: 该 Issue 创建于 2 月中旬，但在昨日（3-13）被再次更新和讨论。结合今日的 PR 动态，虽然目前重心在于 Agent 内部架构（记忆、配置），但对通讯协议的扩展需求正在上升，可能是下一阶段开发的重心。
*   **[PR #212] 实时办公工作区重新设计** (OPEN)
    *   **链接**: [TinyAGI/tinyclaw#212](https://github.com/TinyAGI/tinyclaw/pull/212)
    *   **分析**: 今日刚提出的 PR 旨在重新设计 `/office` 体验。这表明团队在完善后台逻辑的同时，也在积极打磨前端交互界面。

## 7. 用户反馈摘要
*   **痛点**: 从 Issue #210 的反馈来看，用户在执行具体的 CLI 命令（如 `pairing approve`）时对运行时错误非常敏感，且 Node.js 版本兼容性是用户关注的重点。
*   **期待**: Issue #57 的评论显示，用户倾向于将 TinyClaw/TinyAGI 集成到主流的企业工作流工具（Slack, Teams）中，而不仅仅是作为独立的开发工具。

## 8. 待处理积压
*   **[PR #191] 品牌更名**: 这是一个涉及全项目的重构 PR，目前处于 Open 状态。由于涉及包名和环境变量变更，建议维护者关注其合并优先级，以免阻塞后续功能的开发。
*   **[PR #212] Office 界面重构**: 新提交的 PR，尚处于 Open 状态，需关注代码审查进度。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 - 2026-03-14

## 1. 今日速览
Moltis 项目今日处于**极高活跃度**状态，过去 24 小时内处理了 12 个 Issues 和 12 个 PR，且实现了“清零”式的动态平衡（关闭/合并数量等于新增数量）。项目维护响应极为迅速，今日关闭的 6 个 Issues 均有对应的 PR 在同一天完成合并修复，显示出极强的代码迭代能力和 Issue 管理效率。核心开发聚焦于 **Agent 稳定性**（节点执行、中断恢复）和 **生态兼容性**（Qwen 模型、Telegram、文档修正）。

## 2. 版本发布
无新版本发布。鉴于今日有大量 Bug 修复 PR 合并，预计近期可能会有一个 Patch 版本推出。

## 3. 项目进展
今日合并的 PR 主要解决了长期困扰用户的交互和配置问题，项目在健壮性和文档准确性方面迈出了一大步：

*   **Agent 会话持久化 (PR #418)**: 修复了当用户中断 Agent 时，之前的对话内容未被记录的“丢失记忆”问题。现在被中断的会话状态将被持久化保存。
    *   影响: 解决 Issue #186
*   **文档与依赖修正 (PR #402)**: 修正了关于 `@anthropic/qmd` 的错误安装指引，更新为正确的 `@tobilu/qmd`。
    *   影响: 解决 Issue #184
*   **Web 体验增强**: 
    *   **密码管理器兼容 (PR #406)**: 优化了入职流程中的密码字段属性，使其支持浏览器密码自动填充。
    *   **Cron 配置澄清 (PR #409)**: 优化了 Cron 定时任务的设置文案，明确“Run Once”选项和时区显示。
    *   **权限重置修复 (PR #415)**: 修复了重置认证后无法再次进入入职流程的问题。
    *   影响: 分别解决 Issue #183, Issue #244, Issue #316
*   **Telegram 通知优化 (PR #404)**: 修复了 Telegram 消息在 HTML 解析失败时回退到纯文本模式仍包含原始 HTML 标签的 Bug。
    *   影响: 解决 Issue #214

## 4. 社区热点
今日讨论焦点集中在 Agent 的工具调用逻辑与特定模型的兼容性上：

*   **[PR #431] Qwen 模型 Jinja 模板错误**
    *   链接: [moltis-org/moltis#431](https://github.com/moltis-org/moltis/pull/431)
    *   状态: 待合并
    *   分析: 用户在使用 Qwen 等 GGUF 模型时遭遇 `System message must be at the beginning` 错误。该 PR 提出合并多条系统消息以解决兼容性问题，回应了社区对本地模型支持的强烈需求。

*   **[PR #432] Agent 节点执行混淆**
    *   链接: [moltis-org/moltis#432](https://github.com/moltis-org/moltis/pull/432)
    *   状态: 待合并
    *   分析: 解决了 Agent 在执行命令时因 `NodeExecProvider` 总是暴露 `node` 参数而导致 LLM 产生幻觉（如幻觉出 `host` 节点）的问题。这是提升 Agent 执行准确性的关键修复。

*   **[Issue #383] 支持 Lark/Feishu (飞书)**
    *   链接: [moltis-org/moltis#383](https://github.com/moltis-org/moltis/issues/383)
    *   状态: 开放讨论中
    *   分析: 该请求获得了 2 个赞，显示出中国市场对 Moltis 接入企业协作平台的需求。

## 5. Bug 与稳定性
今日报告的 Bug 涉及系统安全和核心执行逻辑，但均有相应的修复方案正在推进：

*   **[高危] 越权访问聊天历史 (Issue #428)**
    *   描述: 即便在 "vault is sealed"（加密库已锁定/未解锁）状态下，通过 "context" 按钮仍能获取完整的聊天历史。
    *   状态: OPEN (严重安全隐患)
*   **[中危] Agent 节点识别错误 (Issue #427, #426)**
    *   描述: Agent 在执行命令时反复对节点名称感到困惑，或使用了错误的节点地址。
    *   状态: OPEN (已有修复 PR #432 提出中)
*   **[功能性] Cron 工具调用失败 (Issue #430)**
    *   描述: Agent 无法正常使用 cron 工具。
    *   状态: OPEN
*   **[功能性] Jinja 模板错误 (Issue #317)**
    *   描述: 特定模型报错 `System message must be at the beginning`。
    *   状态: OPEN (已有修复 PR #431 提出中)

## 6. 功能请求与路线图信号
*   **平台扩展**: 用户明确请求支持 **Lark/Feishu** (Issue #383)，鉴于项目已支持 Telegram 和 Slack，这可能是一个合理的路线图延伸。
*   **本地模型体验**: 随着 Qwen/Ollama 等本地模型的普及，相关的 Jinja 模板和参数兼容性问题（PR #431）将被优先处理。

## 7. 用户反馈摘要
*   **痛点**: 用户普遍反映 **Agent 在执行具体操作时的上下文理解能力较弱**，容易在节点选择上出错。
*   **安全顾虑**: 对“密封库”功能的有效性表示担忧（Issue #428），认为即使锁定也泄露敏感对话是违背预期的。
*   **文档困惑**: 部分用户因文档中过时的包名（`@anthropic/qmd`）导致安装失败（Issue #184），所幸今日已修复。

## 8. 待处理积压
*   **Issue #428 (Vault Security)**: 鉴于其安全性质，建议维护者优先审查此 Issue，确认是否为设计缺陷或实现 Bug。
*   **PR #410 & #417**: 这两个 PR 由核心贡献者 `penso` 提交，分别涉及“空结构化工具名称重试”和“自定义 GGUF 模型恢复”，虽已提交数日但仍在 Open 状态，需关注是否有阻塞点。

---
**项目健康度**: 🟢 优秀 (响应速度快，Bug 修复闭环完整，但在安全边界和特定模型支持上需持续关注。)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-14)

**分析师**: AI 开源项目智能体
**数据来源**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)
**日报日期**: 2026-03-14

---

## 1. 今日速览

CoPaw 项目今日处于**极高的活跃状态**，社区响应迅速。过去 24 小时内共产生了 **50 条 Issues** 和 **44 条 PRs**，显示出强大的开发迭代能力和用户参与度。核心问题集中在 **v0.0.7 版本的稳定性**上，特别是 Ollama 本地模型对话失忆、飞书消息延迟以及 CPU 占用飙升至 100% 等严重 Bug 引发了大量讨论。同时，多项重要的功能特性正在推进中，包括**企业微信 通道的接入**、定时任务时区的修复以及从 LobeHub 导入技能的支持。社区对于多模态支持（图片上传）和离线部署的呼声较高。

---

## 2. 版本发布

*   **当前稳定版本**: v0.0.7
*   **发布状态**: 今日无新版本发布。
*   **注意**: 由于近期 v0.0.7 版本引入了较多关于 Ollama 和上下文管理的回归问题，预计社区可能会在近期推出 v0.0.8 或补丁版本。

---

## 3. 项目进展

今日有 **23 条 PR 被合并或关闭**，以下为关键进展：

*   **[核心修复] 统一时区处理逻辑**:
    *   **PR #1432**: 修复了定时任务时区默认为 UTC 的问题。现在 `env_context` 会固定注入当前 UTC 时间，并统一了工具与 Cron Skill 的时区语义，解决了弱模型不主动调用时间工具导致错误的 Bug ([链接](https://github.com/agentscope-ai/CoPaw/pull/1432))。
*   **[功能增强] 支持从 LobeHub 导入技能**:
    *   **PR #1350**: 合并了对 LobeHub 技能市场的支持，用户现可通过 URL 直接下载并导入包含 `SKILL.md` 的 Zip 包，极大丰富了 CoPaw 的技能生态 ([链接](https://github.com/agentscope-ai/CoPaw/pull/1350))。
*   **[功能新增] 企业微信 渠道**:
    *   **PR #1267**: 新增了对企业微信智能机器人长链接模式的支持，虽然 PR 已关闭（可能通过其他方式合并或重构），相关功能正在积极推进中 ([链接](https://github.com/agentscope-ai/CoPaw/pull/1267))。
*   **[文档与体验] 优化与去重**:
    *   **PR #1396**: 修复了技能列表中重复显示 `active`、`customized` 和 `venv` 内技能的问题，提升了 UI 清晰度 ([链接](https://github.com/agentscope-ai/CoPaw/pull/1396))。
    *   **PR #1433**: 针对最近频繁出现的 Ollama 上下文长度报错，添加了文档警告，提示用户正确配置 `context_length` ([链接](https://github.com/agentscope-ai/CoPaw/pull/1433))。

---

## 4. 社区热点

今日讨论热度最高的话题围绕 **模型能力局限下的工具调用** 与 **特定频道的稳定性**：

*   **#1346 [CLOSED] 为什么 CoPaw 不在上下文中固定嵌入本地时间？** (👍 1, 💬 7)
    *   **核心争议**: 用户质疑为何不将时间写入系统提示，而是依赖模型调用工具。这导致弱模型（如某些小参数模型）在复杂任务中无法感知时间。
    *   **结论**: 开发团队解释了设计意图，并通过 **PR #1432** 优化了实现，在 `env_context` 中注入时间以增强模型感知 ([链接](https://github.com/agentscope-ai/CoPaw/issues/1346))。
*   **#1385 [OPEN] CPU 占用飙升至 100% 后不降** (💬 6)
    *   **现象**: 用户报告在 Ubuntu 25.10 上安装 v0.0.7 后，即便不发送消息，CPU 也会满载。初步排查指向 `read_file` 或 MCP 服务相关代码，已提交相关修复 ([链接](https://github.com/agentscope-ai/CoPaw/issues/1385))。
*   **#1345 [OPEN] 飞书频道对话出现"延迟回复"问题** (💬 5)
    *   **现象**: Bot 回答总是"慢半拍"，即回答的是上一个问题，当前问题被忽略。这表明消息队列或异步处理逻辑存在严重竞态条件 ([链接](https://github.com/agentscope-ai/CoPaw/issues/1345))。

---

## 5. Bug 与稳定性

**严重 Bug (Critical)**:

1.  **[#1416 Ollama 本地模型在 v0.0.7 中对话失忆且无法调用工具](https://github.com/agentscope-ai/CoPaw/issues/1416)**
    *   **表现**: 升级到 v0.0.7 后，Ollama 模型每轮对话都提示"这是新的开始"，且无法执行技能。
    *   **状态**: 已有文档警告 PR (#1433)，核心问题可能与 Context Length 配置或 Session 持久化逻辑变更有关。
2.  **[#1385 CPU 占用 100%](https://github.com/agentscope-ai/CoPaw/issues/1385)**
    *   **表现**: 后台进程持续高 CPU 占用，影响用户体验。
    *   **状态**: 用户已提交相关代码修改 PR，等待合并。
3.  **[#1345 飞书频道回复"错位"/延迟](https://github.com/agentscope-ai/CoPaw/issues/1345)**
    *   **表现**: 消息处理逻辑混乱，导致对话无法连贯。
    *   **状态**: 待修复。

**中等级别 Bug**:

*   **[#1293 `write_file` 和 `execute_shell_command` 调用失败](https://github.com/agentscope-ai/CoPaw/issues/1293)**: 可能是 Token 过长或上下文管理问题导致。
*   **[#1403 飞书消息处理没有去重机制](https://github.com/agentscope-ai/CoPaw/issues/1403)**: 一条消息被多次处理，可能导致资源浪费或逻辑混乱。
*   **[#1458 Ollama 无法连接局域网服务](https://github.com/agentscope-ai/CoPaw/issues/1458)**: v0.0.7 版本中局域网连接测试失败，但在浏览器可访问，可能是后端 API 验证逻辑问题。

---

## 6. 功能请求与路线图信号

*   **[#51 什么时候支持企业微信](https://github.com/agentscope-ai/CoPaw/issues/51)** (评论: 7)
    *   **信号**: 这是一个长期的强烈需求。目前 PR #1267 和 #1407 均在开发中，预计下个版本将正式支持企业微信长链接模式。
*   **[#1059 ACP (Agent Communication Protocol) Support](https://github.com/agentscope-ai/CoPaw/issues/1059)**
    *   **信号**: 希望与 IDE 类 agent (如 Cursor, Claude Code) 双向集成。这是一个提升 CoPaw 在开发者工作流中地位的高级功能。
*   **[#1298 支持多智能体同时执行](https://github.com/agentscope-ai/CoPaw/issues/1298)**
    *   **信号**: 用户希望类似 OpenCanvas 的多 Agent 并行工作模式。
*   **[#1316/#1430 支持自定义 Skills 上传脚本/资源文件](https://github.com/agentscope-ai/CoPaw/issues/1316)**
    *   **信号**: 目前仅支持 Prompt 定义技能，用户强烈需求允许上传 Python 脚本以实现复杂逻辑。
*   **[#1045 Console 增加图片上传功能](https://github.com/agentscope-ai/CoPaw/issues/1045)**
    *   **信号**: 支持多模态（视觉）输入是当前 AI 助手的标配，用户希望在 Web UI 中实现图片上传与分析。

---

## 7. 用户反馈摘要

*   **痛点 - 时区配置**: 用户反复被定时任务的 UTC 时间困扰，虽然代码层面已支持本地时区，但交互和反馈机制不够直观，导致用户以为未生效 ([Issue #1387](https://github.com/agentscope-ai/CoPaw/issues/1387))。
*   **痛点 - 上下文压缩**: 用户反馈 Agent 在长对话中压缩历史时会产生"幻觉"（虚构从未发生过的对话），导致技术讨论丢失关键信息 ([Issue #1437](https://github.com/agentscope-ai/CoPaw/issues/1437))。
*   **痛点 - 离线部署**: 离线环境下的模型适配（如千问离线版）和依赖安装（如缺少 `httpx[socks]`）仍是难点 ([Issue #1453](https://github.com/agentscope-ai/CoPaw/issues/1453), [Issue #1167](https://github.com/agentscope-ai/CoPaw/issues/1167))。
*   **满意点**: 技能生态扩展迅速，特别是支持导入 LobeHub 技能后，用户表示"极大丰富了使用场景"。

---

## 8. 待处理积压

*   **[长期请求] OpenCanvas 风格的多 Agent 并行支持** ([Issue #1298](https://github.com/agentscope-ai/CoPaw/issues/1298)): 目前仅有单 Agent 串行执行，暂无明确 Roadmap。
*   **[回归问题] 各种奇怪的 OSError/ReadError**: 用户报告了多种文件操作相关的崩溃 ([Issue #1431](https://github.com/agentscope-ai/CoPaw/issues/1431), [Issue #1429](https://github.com/agentscope-ai/CoPaw/issues/1429))，建议进行一次全面的文件 I/O 健壮性审查。
*   **[功能缺失] 小艺开放平台频道** ([Issue #1085](https://github.com/agentscope-ai/CoPaw/issues/1085)): 自 2 月提出以来暂无实质性进展。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-14)

## 📅 今日速览
ZeptoClaw 项目今日处于**高活跃度**状态，核心维护者 @qhkm 进行了一系列关键的安全与用户体验（UX）迭代。项目在“安全性加固”与“交互体验升级”两个维度取得了显著进展，共计关闭了 8 个 Issues，合并了 3 个重要的 PR。今日最值得关注的是默认代理模式被修改为更安全的“受限”状态，并引入了基于 TTY 的交互式审批流程。同时，社区贡献者正积极扩展对 Agent Client Protocol (ACP) 及 Discord 图像处理的支持。

## 📦 版本发布
*今日无新版本发布。*

## 🚀 项目进展
今日合并的 PR 主要集中在**安全性重塑**、**CLI 交互优化**及**流式输出体验**上：

1.  **[PR #353] - 交互式审批、流式对等与安全默认值 (CLOSED)**
    *   **核心功能**：引入了 `ApprovalHandler` 回调机制，在 CLI 中实现了 TTY 门控的 `[y/N]` 交互式确认；新增 `/trust on|off` 指令用于临时管理本地会话的信任状态。
    *   **安全加固**：修复了流式工具循环与非流式路径不一致的问题（Hook 与 Metrics 现已对等），并将默认 `agent_mode` 从 `autonomous`（自主）修改为更安全的模式（暗示为受限或助手模式），防止意外操作。
    *   **相关 Issue**：关闭了 #350, #351, #352, #348, #347。
    *   [查看详情](https://github.com/qhkm/zeptoclaw/pull/353)

2.  **[PR #342] - 默认开启流式输出与元数据页脚 (CLOSED)**
    *   **体验提升**：CLI 默认行为改为流式输出，显著降低用户感知延迟。
    *   **新特性**：响应末尾增加元数据页脚，显示 Token 数量、工具调用次数及耗时。
    *   **相关 Issue**：关闭了 #341。
    *   [查看详情](https://github.com/qhkm/zeptoclaw/pull/342)

3.  **[PR #349] - 修复配置读取逻辑 (CLOSED)**
    *   **Bug 修复**：修复了 `AgentLoop` 构造函数硬编码 `streaming: false` 而忽略配置文件的问题，确保“默认开启流式输出”能正确生效。
    *   [查看详情](https://github.com/qhkm/zeptoclaw/pull/349)

## 🔥 社区热点
今日讨论的核心围绕**“安全性优先级”**与**“生态集成”**展开：

*   **热点 PR: [#356 feat(channels): ACP stdio + HTTP implementation](https://github.com/qhkm/zeptoclaw/pull/356)**
    *   **状态**：待合并
    *   **分析**：由 @starsy 提交，旨在实现 Agent Client Protocol (ACP) 的标准输入输出及 HTTP 通道。这将允许 ZeptoClaw 作为一个子进程被其他 AI 客户端（如 `acpx`）调用，是项目走向生态标准化的重要一步。
*   **热点 Issue: [#354 bug: narrow filesystem safety carve-out](https://github.com/qhkm/zeptoclaw/issues/354)**
    *   **状态**：已修复
    *   **分析**：针对之前的修复过于宽泛导致误报的问题进行了精细化的“窄化”处理，体现了开发团队对安全边界“宁严勿纵”但在具体实现上追求精准的态度。

## 🐛 Bug 与稳定性
今日处理了多个高优先级的稳定性与安全缺陷，其中 3 个为 P1/P2 级别，且均已修复：

1.  **[CRITICAL] [Bug #354] 文件系统安全扫描范围过宽 (已修复)**
    *   **问题**：之前的修复导致 `write_file` 和 `edit_file` 的安全检查过于严格，影响了正常代码内容的写入。
    *   **状态**：已通过 #353 修复。
2.  **[HIGH] [Bug #351] 流式执行路径功能缺失 (已修复)**
    *   **问题**：流式模式下缺少 before_tool/after_tool 钩子、错误日志及使用指标记录，导致监控和调试困难。
    *   **状态**：已通过 #353 修复。
3.  **[OPEN] [PR #355] 图像内容处理循环修复 (待合并)**
    *   **问题**：修复了处理图像内容时的逻辑错误。
    *   **状态**：由 @rafaellin 提交，待审查。
4.  **[OPEN] [PR #346] Discord 频道忽略纯图像消息 (待合并)**
    *   **问题**：Discord 适配器无法正确处理仅包含图片的消息。
    *   **状态**：由 @rafaellin 提交，待审查。

## 💡 功能请求与路线图信号
从新开的 Issues 和 PRs 中可以看出项目的短期发展方向：

*   **生态集成 (ACP)**：PR #356 表明 ZeptoClaw 正在积极拥抱 ACP 标准，未来将更容易接入各类 AI 框架。
*   **多模态支持增强**：PR #346 和 #355 显示社区正在推动 Discord 通道下的图像处理能力，补齐多模态交互短板。
*   **索引收录**：Issue #334 提出将 ZeptoClaw 添加到 [Shelldex](https://shelldex.com/) 目录，表明项目有扩大曝光度的需求。

## 👥 用户反馈摘要
基于 Issues 的评论与摘要，用户关注点如下：
*   **安全性担忧**：用户（或维护者自身）对旧版本“默认自主模式”和“AlwaysAllow”策略表示担忧，认为这对于拥有文件写权限的 CLI 工具来说过于危险。
*   **交互体验改进**：用户非常欢迎“流式输出”，认为这是最大的性能感知提升；同时，引入交互式审批满足了用户对控制感和安全性的双重需求。

## ⚠️ 待处理积压
*   **[Issue #334] - Add Zeptoclaw to Shelldex**: 这是一个简单的推广任务，建议维护者尽快处理以增加项目知名度。
*   **[PR #346, #355] - Discord/图像相关修复**: 尚处于 OPEN 状态，建议维护者优先审查，以保持 Discord 通道的稳定性。

---
**总结**：ZeptoClaw 今日在安全性上完成了一次“大体检”，收紧了默认权限并完善了审批流程，同时极大提升了 CLI 的响应速度体验。项目正稳步向更安全、更标准化的方向演进。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*