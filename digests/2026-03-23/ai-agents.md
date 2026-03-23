# OpenClaw 生态日报 2026-03-23

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-23 00:11 UTC

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

# OpenClaw 项目动态日报 (2026-03-23)

## 📊 今日速览
今日 OpenClaw 社区活跃度极高，过去 24 小时内 Issues 和 PRs 的更新量均达到 **500 条**，显示出强劲的开发活力与用户参与度。虽然今日没有发布新的版本号，但仓库中有大量关于 Bug 修复和功能优化的 Pull Request 正在密集合并，主要聚焦于 **Gateway 稳定性**、**多平台集成（Telegram/Discord/WhatsApp）** 以及 **CLI 国际化**。值得注意的是，多个标记为 `regression`（回归）的 Bug 被报告，主要集中在最新的 v2026.3.13 版本上，涉及 WebSocket 握手超时和设备命令失效等问题，建议用户在更新前关注相关 Issue 的进展。

---

## 🚀 版本发布
**暂无新版本发布**
今日 GitHub Releases 未更新。当前用户主要使用的版本集中在 v2026.3.13 及 v2026.2.x 系列。

---

## 🔧 项目进展

今日合并与关闭的 PR 涵盖了多个关键领域的修复与优化，项目在底层架构稳定性和用户体验上均有推进：

*   **CLI 国际化支持**:
    *   PR [#51552](https://github.com/openclaw/openclaw/pull/51552) 引入了 CLI 的中英文双语支持。这是一个重大的体验改进，提升了中文用户的易用性，包括命令别名、帮助信息和错误提示的本地化。
*   **Gateway 与连接稳定性**:
    *   PR [#51931](https://github.com/openclaw/openclaw/pull/51931) 修复了 Telegram 轮询的健康监控机制，解决了网络抖动后轮询卡死的问题。
    *   PR [#52512](https://github.com/openclaw/openclaw/pull/52512) 解决了 Tailscale Serve 后访问 Canvas 时的 401 认证错误问题。
    *   PR [#52523](https://github.com/openclaw/openclaw/pull/52523) 优化了 daemon status 检查逻辑，改用轻量级 probe，提升了诊断效率。
*   **Agent 与交互修复**:
    *   PR [#52516](https://github.com/openclaw/openclaw/pull/52516) 加固了 Agent 编辑工具 的恢复逻辑，减少了编辑操作失败的风险。
    *   PR [#52428](https://github.com/openclaw/openclaw/pull/52428) 清理了可能卡死的 `chatRunState` 缓冲区，防止因 LLM 超时导致的内存泄漏或会话僵死。
*   **回复与通知系统**:
    *   PR [#52524](https://github.com/openclaw/openclaw/pull/52524) 增加了 Telegram 消息的容错机制，防止因回复的消息被删除而导致机器人发送失败。
    *   PR [#52489](https://github.com/openclaw/openclaw/pull/52489) 修复了 Discord 上生成的图片无法正确发送的问题。

---

## 🔥 社区热点

今日社区讨论主要集中在 **渠道集成缺陷** 和 **安全性增强** 上：

*   **[#26534 DingTalk 首次安装流程支持](https://github.com/openclaw/openclaw/issues/26534)** (评论: 76)
    *   **摘要**: 用户强烈请求将 DingTalk（钉钉）纳入首次安装向导的选项。目前虽然后端已支持，但前端 UI 未暴露入口。
    *   **诉求**: 降低中文企业用户的使用门槛，完善官方引导。
*   **[#7916 API 密钥加密存储](https://github.com/openclaw/openclaw/issues/7916)** (评论: 16, 👍: 11)
    *   **摘要**: 社区对 API Keys 以明文形式存储在配置文件中表示担忧，请求引入密钥管理加密机制。
    *   **诉求**: 提升企业级用户的安全合规性。
*   **[#50090 ClawHub 与社区技能生态](https://github.com/openclaw/openclaw/issues/50090)** (评论: 13)
    *   **摘要**: 讨论 ClawHub（社区技能市场）目前的现状与理想状态的差距。
    *   **诉求**: 改善技能发现、安装和维护的体验。
*   **[#8081 多用户权限与 RBAC](https://github.com/openclaw/openclaw/issues/8081)** (评论: 7, 👍: 21)
    *   **摘要**: 请求引入基于角色的访问控制（RBAC），解决多人共用实例时的权限隔离问题。

---

## 🐛 Bug 与稳定性

今日报告了多个高严重性的 Bug，特别是 **v2026.3.13 版本出现的回归问题** 值得警惕：

1.  **[高危] Gateway 心跳定时器失效** ([#45772](https://github.com/openclaw/openclaw/issues/45772))
    *   **描述**: v2026.3.8 引入的 Bug，导致心跳功能触发 1-2 次后永久停止。
    *   **状态**: 🔴 Open (无 Fix PR)
2.  **[高危] Gateway WebSocket 握手超时/连接关闭 (1000)** ([#51987](https://github.com/openclaw/openclaw/issues/51987), [#49510](https://github.com/openclaw/openclaw/issues/49510), [#51632](https://github.com/openclaw/openclaw/issues/51632))
    *   **描述**: 多个用户报告在 v2026.3.13 及后续版本中，本地网关 (127.0.0.1:18789) 频繁出现握手超时或 "Gateway closed (1000)" 错误，导致 CLI 命令和 Web UI 不可用。这可能是今日最严重的回归问题。
    *   **状态**: 🔴 Open (部分正在通过 PR [#51087](https://github.com/openclaw/openclaw/pull/51087) 尝试修复)
3.  **[中危] Control UI 配对失败** ([#45753](https://github.com/openclaw/openclaw/issues/45753))
    *   **描述**: 反向代理环境下的控制 UI 配对流程超时。
    *   **状态**: 🔴 Open
4.  **[中危] WhatsApp 链接卡死** ([#4686](https://github.com/openclaw/openclaw/issues/4686))
    *   **描述**: WhatsApp 在初次链接成功后，切换号码会导致卡在 "logging in" 状态。
    *   **状态**: 🔴 Open (长期 Bug)
5.  **[中危] Ollama 思考模型输出为空** ([#46680](https://github.com/openclaw/openclaw/issues/46680))
    *   **描述**: OpenClaw 未向 Ollama 发送 `think: false` 参数，导致 Ollama 0.18.0+ 的思考模型返回空内容。
    *   **状态**: 🔴 Open
6.  **[中危] Android APK 预编译包缺失** ([#9443](https://github.com/openclaw/openclaw/issues/9443))
    *   **描述**: 用户抱怨没有直接的 APK 安装包，必须自行编译源码。
    *   **状态**: 🔴 Open

---

## ✨ 功能请求与路线图信号

从活跃的 Issues 中可以窥见未来的开发方向：

*   **模型能力增强**: Issue [#48010](https://github.com/openclaw/openclaw/issues/48010) 请求支持传递特定模型参数（如 Ollama 的 thinking mode 控制），表明用户希望更精细地控制 LLM 行为。
*   **工作流拦截**: Issue [#25145](https://github.com/openclaw/openclaw/issues/25145) 提出了 "Outbound message approval gate"，即在 Agent 发送邮件或短信前增加人工确认钩子。这对于高敏感度的自动化任务至关重要。
*   **RFC: 身份与信任验证**: Issue [#49971](https://github.com/openclaw/openclaw/issues/49971) 提出了一份基于 DID 和 VC 的 Agent 身份验证 RFC，标志着项目可能正朝向去中心化身份认证方向探索。
*   **OpenBrain 集成**: PR [#52514](https://github.com/openclaw/openclaw/pull/52514) 正在将 OpenBrain 的记忆操作作为原生工具引入，这可能预示着记忆管理将成为核心功能的一部分。

---

## 💬 用户反馈摘要

*   **挫败感**: **Windows 用户**似乎遇到了较多安装和运行时的问题（如 `schtasks` 错误 `#49187`，安装报错 `#25282`），反馈中带有明显的负面情绪。
*   **担忧**: 关于 **明文 API Key** 的问题 ([#7916](https://github.com/openclaw/openclaw/issues/7916)) 获得了 11 个赞，显示出部分用户对当前安全模型的不安。
*   **困惑**: **Docker 环境**下技能安装失败（如 `brew not found` `#14593`）和 **WSL2** 环境下网关无响应 ([#47590](https://github.com/openclaw/openclaw/issues/47590)) 的问题表明，容器化体验仍需打磨。
*   **赞赏**: CLI 国际化 PR ([#51552](https://github.com/openclaw/openclaw/pull/51552)) 受到了社区的关注和期待，显示了非英语社区的庞大需求。

---

## 📌 待处理积压

以下 Issue 长期未解决但关注度较高，建议维护者优先处理：

*   **[#9443](https://github.com/openclaw/openclaw/issues/9443)**: Prebuilt Android APK releases (Create: 2026-02-05, 50+ 天未结)
*   **[#4686](https://github.com/openclaw/openclaw/issues/4686)**: WhatsApp linking stuck (Create: 2026-01-30, 长期未解决)
*   **[#19982](https://github.com/openclaw/openclaw/issues/19982)**: Telegram messages replaced on model failures (Stale, 涉及消息丢失体验)
*   **[#24102](https://github.com/openclaw/openclaw/issues/24102)**: Fallback chain not triggered on 429 errors (Stale, 涉及稳定性)

---

## 横向生态对比

以下是基于 2026-03-23 各开源项目动态的横向对比分析报告。

---

# 2026-03-23 个人 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
个人 AI 助手开源生态正处于**从“单一模型对话”向“多智能体编排”与“深度系统融合”转型的关键期**。
*   **连接性爆发**：各项目均不再满足于单纯的 LLM 对话，而是激进地接入 Telegram、Discord、**微信（WeChat）**、飞书 等即时通讯软件，争夺用户的“第一入口”地位。
*   **架构重构期**：头部项目（如 IronClaw, OpenClaw, PicoClaw）都在进行底层架构重构，旨在解决 Agent 循环稳定性、内存管理和多模态支持问题，技术门槛显著提高。
*   **本地化与隐私**：在成本和隐私驱动下，支持本地 TTS、本地模型（Ollama/LM Studio）及隐私优先的部署方案成为各项目的标配竞争点。

---

## 2. 各项目活跃度对比

| 项目名 | Issues 活跃度 | PR 活跃度 | 版本发布 | 健康度评估 | 状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (涉及回归 Bug) | 极高 (密集合并) | **无** (v2026.3.13 稳定) | 🟡 **注意** | 高速迭代但伴随版本回归风险 |
| **NanoBot** | 高 (微信需求爆发) | 高 (72 PR 待合并) | 无 | 🟢 **活跃** | 社区驱动，功能大爆炸期 |
| **Zeroclaw** | 高 (分支迁移争议) | 高 (93 变更) | **v0.5.8** (正式版) | 🟠 **波动** | 架构切换期的功能阵痛 |
| **PicoClaw** | 中 (架构重构) | 高 (核心重构合并) | Nightly 发布 | 🟢 **向好** | 偿还技术债，架构趋于统一 |
| **NanoClaw** | 低 | 高 (P2P 通信竣工) | 无 | 🟢 **稳健** | 企业级架构，稳步推进 |
| **NullClaw** | 中 | 中 (13 PR 待合) | 无 | 🟢 **平稳** | 功能增强与稳定性修补 |
| **IronClaw** | 中 | 高 (架构大改) | 无 | 🟡 **重构** | 推进大规模 v2 引擎重构 |
| **LobsterAI** | 极高 (28 新 Issues) | 中 (代码质量争议) | **v2026.3.22** | 🔴 **承压** | 快速扩张遭遇质量危机 |
| **TinyClaw** | 无 | 低 (关键修复) | 无 | 🟢 **维护** | 专注于稳定性维护 |
| **Moltis** | 极低 | 极低 (文档更新) | 无 | 🟢 **沉寂** | 维护期，无重大进展 |
| **CoPaw** | 极高 (Windows 兼容性) | 高 (38 Issues) | 无 | 🟠 **多Bug** | 跨平台兼容性挑战大 |
| **ZeptoClaw** | 低 | 低 (上游同步) | 无 | 🟢 **跟随** | 紧跟上游，微调体验 |
| **EasyClaw** | 极低 | 无 | 无 | 🟢 **稳定** | 核心功能维护 |

---

## 3. OpenClaw 在生态中的定位

*   **生态位**：**“基础设施级”的通用 Agent 框架**。相比于 NanoBot 的“轻量级”或 LobsterAI 的“GUI 桌面级”，OpenClaw 提供了最全的 Gateway 概念、多平台支持和 CLI 国际化，旨在成为开发者的底层操作系统。
*   **优势**：
    *   **国际化与文档**：今日完成的 **CLI 中英双语支持 (PR #51552)** 显示了其对全球最大开发者社区的重视，这在其他以英文为主的竞品中是显著的差异化优势。
    *   **通道生态**：对 Telegram/Discord/WhatsApp 的支持最为成熟，且正在积极回应中文社区的钉钉/微信需求。
*   **技术路线差异**：采用传统的 **CLI + Gateway** 架构，强调稳定性。相比之下，IronClaw 正转向 WASM/TEE 安全沙箱，NanoBot 则更激进地拥抱 Nightly 特性。
*   **社区规模**：从 Issue 和 PR 的绝对数量（500+）来看，OpenClaw 拥有**最大的用户基数和贡献者群体**，但也面临着最大的遗留代码维护压力。

---

## 4. 共同关注的技术方向

以下是 2026-03-23 多个项目共同涌现的技术热点与需求：

1.  **微信 生态的接入战争**
    *   **涉及项目**：NanoBot, PicoClaw, CoPaw
    *   **具体诉求**：NanoBot 出现了 3 个并行 PR 争夺微信接入权；PicoClaw 合并了微信登录流程；CoPaw 社区强烈呼吁支持微信 ClawBot。这标志着“无法支持微信”在中文开源社区已成为致命缺陷。

2.  **多模态与视觉能力的增强**
    *   **涉及项目**：Zeroclaw, IronClaw, PicoClaw, NullClaw
    *   **具体诉求**：
        *   Zeroclaw 新增 Piper 本地 TTS 和视觉模型独立路由。
        *   IronClaw 和 NullClaw 都在推进 **A2A (Agent-to-Agent)** 协议的多模态支持（图片传输）。
        *   PicoClaw 增强了多模态音频转写能力。

3.  **对“回退机制”与“稳定性”的极度渴望**
    *   **涉及项目**：OpenClaw, NanoBot, NullClaw, TinyClaw
    *   **具体诉求**：
        *   OpenClaw 严重的 Gateway 回归 Bug 导致用户请求回退。
        *   TinyClaw 修复了 API 路由的并发冲突。
        *   NullClaw 用户请求类似 OpenClaw的模型回退功能。
        *   **共性**：开发者不再容忍 Agent "跑飞"或单点故障，**确定性执行**成为新刚需。

4.  **Shell 执行安全性与容器化**
    *   **涉及项目**：PicoClaw, CoPaw, IronClaw
    *   **具体诉求**：PicoClaw 引入 `execline` 替代 Bash；IronClaw 推进 WASM TEE；CoPaw 在修复 Windows Shell 死锁。所有项目都在试图解决 Agent 控制系统的“双刃剑”问题。

---

## 5. 差异化定位分析

| 维度 | **OpenClaw** | **LobsterAI** | **IronClaw** | **NanoBot** | **Zeroclaw** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **核心形态** | CLI 后台服务 + Web UI | **桌面端 GUI** (Electron) | 浏览器 IDE / WASM Runtime | 轻量级 CLI / 脚本友好 | 全功能 Agent 中台 |
| **目标用户** | DevOps / 极客 / 企业集成 | **普通知识工作者** / 个人用户 | Web 开发者 / 安全研究者 | 开发者 / 演示党 | 需要私有化部署的企业 |
| **技术护城河** | **协议适配广度** (支持最全 IM) | **桌面集成** (控制电脑、文件) | **安全与可信** (TEE, DID) | **低门槛与灵活性** | **本地化能力** (Local TTS/LLM) |
| **今日痛点** | 版本回归导致不稳定 | **性能卡顿 / Bug 较多** | 架构重构未完成 | 微信接入重复造轮子 | 主分支功能缺失 |

---

## 6. 社区热度与成熟度

*   **快速迭代阶段**：
    *   **NanoBot**：以 72 PR/日 的速度狂飙，功能丰富度极高，但也面临代码碎片化风险。
    *   **LobsterAI**：处于功能大爆发与 Bug 泥潭的博弈期，用户满意度波动较大。
*   **质量巩固阶段**：
    *   **PicoClaw**：成功合并了大型 Agent 重构 PR (#1894)，正在偿还技术债，代码库健康度提升。
    *   **NanoClaw**：二期工程竣工，P2P 通信落地，项目架构清晰，适合长期构建。
*   **架构震荡期**：
    *   **Zeroclaw / IronClaw**：两者都在进行底层大手术（Zeroclaw 切换分支，IronClaw 重写引擎），短期内有功能缺失或编译风险，适合激进尝鲜者。

---

## 7. 值得关注的趋势信号 (对 Agent 开发者的建议)

1.  **纯云端 Agent 正式终结**：
    Zeroclaw 今日重点发布了 **Piper 本地 TTS**，多个项目都在强调 `Ollama` 和 `Local LLM` 支持。用户对隐私和成本的敏感度，意味着**“云端大脑 + 本地执行/语音”的混合架构**是未来产品的标准配置。

2.  **工具调用 超控 是最大隐患**：
    CoPaw 报告了模型返回无限 `tool_call` 导致的死循环，OpenClaw 报告了 Cron 任务静默失败。这提示开发者：**必须在前端或控制层增加“熔断机制”**，不要无条件信任 LLM 返回的函数调用结果。

3.  **中文生态的溢价**：
    OpenClaw 的 CLI 中文化 (#51552) 和 NanoBot/PicoClaw 对微信的狂热支持表明，**“开箱即用的中文/微信支持”** 能在瞬间获得大量社区关注。如果你在做开源 Agent，忽略微信和中文文档等于放弃了全球最大的增量市场。

4.  **可观测性成为刚需**：
    NullClaw 和 IronClaw 都在讨论 OpenTelemetry (OTel) 和链路追踪。随着 Agent 逻辑越来越复杂（多智能体协作），**“黑盒”状态已不可接受**，可视化调试和日志追溯将是企业级 Agent 的核心竞争力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是基于 2026-03-23 数据的 **NanoBot 项目动态日报**。

---

## 1. 今日速览
NanoBot 项目今日处于**极度活跃**状态，社区贡献显著增加。在过去 24 小时内，项目收到了 **72 条 PR**（待合并 61 条）和 **18 个新 Issues**，显示出爆发式的开发活力。今日最大的亮点是社区对**微信生态接入**的强烈需求，有多位开发者同时提交了针对微信个人号和企微的适配代码（存在潜在的重复开发）。同时，核心代理循环 的上下文优化和多智能体支持也是技术改进的重点。虽然无新版本发布，但大量针对 `nightly` 分支的特性正在合并中。

## 2. 版本发布
无新版本发布。当前代码库处于高强度迭代期，建议关注本周日的 `nightly` 分支刷新（见 #2312）。

## 3. 项目进展
今日虽未合并大量 PR，但提交了多项关键基础设施升级，目前处于代码审查阶段：

*   **架构升级：端到端流式输出 ([PR #2365](https://github.com/HKUDS/nanobot/pull/2365))**
    *   **进展**：已提交，待合并。
    *   **影响**：实现了从 LLM Provider 到 Agent Loop 再到 Channel/CLI 的全链路流式输出。这将显著降低用户感知的延迟，Telegram 将是首个支持的频道。这是对交互体验的重大提升。
*   **核心优化：上下文管理重构**
    *   **可配置上下文预算 ([PR #2317](https://github.com/HKUDS/nanobot/pull/2317))**：旨在解决多轮对话中 Token 线性膨胀导致速度变慢的问题。
    *   **System Prompt 缓存优化**：Issue [#981](https://github.com/HKUDS/nanobot/issues/981) 提出的 "Current Time" 破坏缓存问题已被标记为关闭，可能已包含在某次提交中。
*   **新通道接入：微信**
    *   **WeChat 个人号通道 ([PR #2360](https://github.com/HKUDS/nanobot/pull/2360) / [PR #2348](https://github.com/HKUDS/nanobot/pull/2348))**：基于 HTTP 长轮询和二维码登录，支持多媒体消息。
*   **功能增强：多智能体与子代理**
    *   **可配置子代理 ([PR #2368](https://github.com/HKUDS/nanobot/pull/2368))**：允许子代理使用不同的 LLM 后端（模型、温度等），并支持回退到默认代理。
    *   **子代理结果回复优化 ([PR #2356](https://github.com/HKUDS/nanobot/pull/2356))**：修复了子任务结果无法回复到原消息线程的问题。

## 4. 社区热点
今日讨论焦点集中在**微信支持**和**QQ通道适配**：

*   **🔥 微信接入需求爆发**
    *   背景：微信官方 8.0.70 支持 Openclaw ([Issue #2353](https://github.com/HKUDS/nanobot/issues/2353))。
    *   动态：社区开发者迅速响应，短时间内出现了至少 **3 个** 相关 PR ([#2360](https://github.com/HKUDS/nanobot/pull/2360), [#2348](https://github.com/HKUDS/nanobot/pull/2348), [#2355](https://github.com/HKUDS/nanobot/pull/2355))，分别实现了 HTTP 长轮询接入。这显示出国内用户对个人微信接入的极高渴望。
*   **📊 QQ 通道文件收发适配 ([Issue #2226](https://github.com/HKUDS/nanobot/issues/2226))**
    *   内容：开发者基于 v0.1.4.post5 适配了 QQ 的文件和图片发送功能，弥补了 QQ 通道“只能聊天”的短板。
*   **🐛 Telegram 回复重复 ([Issue #2235](https://github.com/HKUDS/nanobot/issues/2235))**
    *   问题：Telegram 用户报告收到两条回复，怀疑是伪流 实现问题。

## 5. Bug 与稳定性
今日报告的 Bug 涉及核心逻辑和体验，部分已有修复方案：

*   **🔴 严重：Cron 提醒被静默丢弃 ([Issue #2369](https://github.com/HKUDS/nanobot/issues/2369))**
    *   **描述**：用户设定的 Cron 任务触发后，被 LLM 评估器判定为“不可操作”且 `should_notify=False`，导致用户根本收不到通知。
    *   **状态**：有修复 PR ([#2364](https://github.com/HKUDS/nanobot/pull/2364)) 提出通过注入反递归指令来解决。
*   **🟠 中等：切换工作空间导致旧 Cron 任务残留 ([Issue #2358](https://github.com/HKUDS/nanobot/issues/2358))**
    *   **描述**：使用 `-w` 切换空间后，旧空间的 Cron 任务仍在运行，且使用了新空间的 Prompt，可能导致逻辑混乱。
*   **🟠 中等：Shell 工具产生僵尸进程 ([PR #2362](https://github.com/HKUDS/nanobot/pull/2362))**
    *   **描述**：Shell 命令超时被 kill 后，未正确 wait，导致僵尸进程残留。
*   **🟡 体验：飞书/Telegram 流式输出问题**
    *   Telegram 回复重复 ([Issue #2235](https://github.com/HKUDS/nanobot/issues/2235))。
    *   Matrix 命令无法停止 Agent Loop ([PR #2361](https://github.com/HKUDS/nanobot/pull/2361))，导致每次请求都携带数周的全部对话记录，Token 消耗巨大。

## 6. 功能请求与路线图信号
从 Issues 中提取的用户需求指向更丰富的平台支持和更精细的控制：

*   **微信/企微支持 ([Issue #2353](https://github.com/HKUDS/nanobot/issues/2353))**：几乎确定会被纳入下个版本，鉴于 PR 数量众多。
*   **本地网络白名单 ([Issue #2370](https://github.com/HKUDS/nanobot/issues/2370))**：用户希望内网 Gitea 等服务不走公网，请求增加 Host Whitelist 配置。
*   **Dashboard UI ([Issue #2213](https://github.com/HKUDS/nanobot/issues/2213))**：社区成员开发了基于 Python+Lib 的前后端分离 Dashboard，请求合并或官方支持。
*   **配置校验增强**：PR ([#2359](https://github.com/HKUDS/nanobot/pull/2359)) 建议当 `context_window_tokens` 配置不合理（如小于等于 `max_tokens`）时发出警告，防止用户困惑。

## 7. 用户反馈摘要
*   **痛点 - 上下文溢出**：使用 Qwen3 (32k) 模型的用户报告，即使配置了限制，聊天历史带入过多导致 400 错误 ([Issue #2343](https://github.com/HKUDS/nanobot/issues/2343))。用户迫切需要更智能的历史截断策略。
*   **痛点 - 文件处理**：飞书用户反馈 Bot 无法接收/下载文件，提示权限问题，怀疑是配置缺失或缺少 MCP 接口 ([Issue #2352](https://github.com/HKUDS/nanobot/issues/2352))。
*   **痛点 - Ollama 任务执行中断**：本地部署 Qwen2.5:14b 的用户发现，闲聊正常，但一旦执行工具调用，对话就会静默死亡 ([Issue #2293](https://github.com/HKUDS/nanobot/issues/2293))。
*   **隐私担忧**：用户指出 WebFetchTool 无论是否设置 API Key，都会通过 jina.ai 代理，存在隐私泄露风险 ([Issue #2341](https://github.com/HKUDS/nanobot/issues/2341))。

## 8. 待处理积压
*   **长期 Bug**：[#1300](https://github.com/HKUDS/nanobot/issues/1300) (Matrix channel does not work) 仍处于 OPEN 状态，虽然今日有 PR ([#2361](https://github.com/HKUDS/nanobot/pull/2361)) 尝试修复部分命令问题，但连接性问题尚未完全解决。
*   **合并冲突**：目前关于微信的 PR ([#2360](https://github.com/HKUDS/nanobot/pull/2360), [#2348](https://github.com/HKUDS/nanobot/pull/2348), [#2355](https://github.com/HKUDS/nanobot/pull/2355)) 功能重叠，维护者需要介入整合，避免代码碎片化。

---
*数据来源: GitHub API (HKUDS/nanobot) | 日期: 2026-03-23*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 - 2026-03-23

## 1. 今日速览
Zeroclaw 项目今日处于**极高活跃度**状态，在过去 24 小时内处理了 **93** 个代码与 Issue 变更（Issues: 43, PRs: 50），并密集发布了 **7** 个新版本。核心开发围绕 **v0.5.8** 正式版展开，重点交付了本地优先的 AI 能力（本地 TTS、视觉模型路由）及企业级功能（Matrix 房间控制、SearXNG 搜索）。项目表现出快速的迭代节奏与强大的社区响应能力，但也暴露了从旧 `main` 分支迁移至 `master` 分支后的代码同步问题（丢失功能、安全参数缺失）。

---

## 2. 版本发布
今日共有 **7** 个版本发布，涵盖正式版与多个 Beta 版本。

### **v0.5.8 (Latest Release)**
**核心亮点：**
*   **Local-First (本地优先)**：
    *   **TTS**: 新增 **Piper** 本地语音合成引擎，无需云 API 即可实现离线 TTS。
    *   **Multimodal (多模态)**: 支持将图像消息路由至专用的视觉模型提供商，解决单一模型同时处理文本与图像的 VRAM 压力问题。
*   **Channel Updates (通道更新)**:
    *   **Matrix**: 新增 `allowed_rooms` 配置，支持房间级别的白名单门控，增强安全隔离。
    *   **Telegram**: 支持转发消息的归属解析。
*   **Search**: 新增 **SearXNG** 搜索提供商支持。

### **Beta 版本 (v0.5.8-beta.577 & v0.5.7 series)**
*   **v0.5.8-beta.577**: 新增**浏览器自动化技能**及 VNC 设置脚本，开启 Agent 操作网页界面的能力；新增**语音消息转录**支持（Slack/Discord）。
*   **v0.5.7**: 记忆架构升级为分层设计，移除 `mem0` 后端，增强会话上下文注入能力。

---

## 3. 项目进展
今日合并了大量关键 PR，显著推进了 Agent 的实用性、安全性与本地化能力。

*   **工具与互联网访问默认开启** ([#4270](https://github.com/zeroclaw-labs/zeroclaw/pull/4270))
    *   **进展**: 默认启用 `web_fetch`, `web_search`, `http_request` 和 `browser` 工具。
    *   **意义**: 大幅降低开箱即用的配置门槛，Agent "出厂即联网"。
*   **功能回归与架构修复**
    *   **记忆时间衰减** ([#4274](https://github.com/zeroclaw-labs/zeroclaw/pull/4274)): 修复了 `main` 分支删除后丢失的旧记忆评分逻辑，防止旧记忆干扰新决策。
    *   **技能工具调用** ([#4276](https://github.com/zeroclaw-labs/zeroclaw/pull/4276)): 修复了 Skill 工具仅作为 XML 提示而无法被 LLM 实际调用的问题。
    *   **思考级别前缀泄漏修复** ([#4277](https://github.com/zeroclaw-labs/zeroclaw/pull/4277)): 解决了 `/think` 指令污染后续对话轮次的问题。
*   **新功能落地**
    *   **Feishu/Lark 文件支持** ([#4280](https://github.com/zeroclaw-labs/zeroclaw/pull/4280)): 飞书/Lark 通道现在可以处理图片和文件，不再静默忽略。
    *   **声明式 Cron** ([#4279](https://github.com/zeroclaw-labs/zeroclaw/pull/4279)): 支持在配置文件中声明定时任务，便于版本控制。

---

## 4. 社区热点
今日讨论焦点集中在分支迁移导致的功能缺失与特定通道的 Bug 上。

*   **[讨论度最高] 主分支迁移导致的功能与安全缺失**
    *   **Issue**: [#3818 (Restore missing security...)](https://github.com/zeroclaw-labs/zeroclaw/issues/3818) | [#3753 (Missing tools)](https://github.com/zeroclaw-labs/zeroclaw/issues/3753) | [#3679 (Cost tracking missing)](https://github.com/zeroclaw-labs/zeroclaw/issues/3679)
    *   **诉求**: 社区强烈要求恢复从旧 `main` 分支切换到 `master` 时丢失的关键功能（如成本追踪、特定安全参数、Copilot onboarding 等）。用户对代码丢失表示担忧。
*   **[活跃 Bug] 飞书通道无法启动**
    *   **Issue**: [#3540 (Feishu can't start)](https://github.com/zeroclaw-labs/zeroclaw/issues/3540)
    *   **诉求**: 尽管编译了 `channel-lark` 特性，用户仍无法启动飞书服务，急需修复文档或代码。
*   **[热门需求] OpenAI 模型刷新崩溃**
    *   **Issue**: [#4253 (openai-compatible model refresh panics)](https://github.com/zeroclaw-labs/zeroclaw/issues/4253)
    *   **状态**: 已关闭，疑似与 `master` 分支的异步上下文处理有关。

---

## 5. Bug 与稳定性
*   **S1 - 严重 (工作流阻塞)**
    *   **UTF-8 字符 Panic**: [#4139](https://github.com/zeroclaw-labs/zeroclaw/issues/4139) - 处理多字节字符（如中文）时程序崩溃。**状态**: 待修复。
    *   **Agent 多次发送消息**: [#3513](https://github.com/zeroclaw-labs/zeroclaw/issues/3513) - Agent 应回复单条消息却发送多条。**状态**: 待修复。
    *   **模型刷新 Panic**: [#4253](https://github.com/zeroclaw-labs/zeroclaw/issues/4253) - `models refresh` 命令崩溃。
*   **S2 - 降级 (体验受损)**
    *   **Web Dashboard 404**: [#3454](https://github.com/zeroclaw-labs/zeroclaw/issues/3454) - Dashboard 无法访问。
    *   **浏览器配对失效**: [#2960](https://github.com/zeroclaw-labs/zeroclaw/issues/2960) - 每次重启需重新配对。
*   **Bug Fixes (今日已合并)**
    *   Link 标题提取的字节偏移 Bug ([#4271](https://github.com/zeroclaw-labs/zeroclaw/pull/4271)) - 防止处理非 ASCII 字符时崩溃。
    *   Cron 调度器 Shell 调用错误 ([#4209](https://github.com/zeroclaw-labs/zeroclaw/issues/4209)) - 修正了假设调用 `dash` 却调用 `sh` 的问题。

---

## 6. 功能请求与路线图信号
*   **数据库优先的记忆架构** ([#4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028))
    *   用户提议引入 `pgvector` 和图数据库支持，以构建更强大的知识基础设施。这可能是未来记忆模块重构的方向。
*   **多阶段评分管道** ([#3478](https://github.com/zeroclaw-labs/zeroclaw/issues/3478))
    *   建议为 SQLite 后端增加 9 阶段评分（BM25, 时间衰减等），部分功能已在今日 PR ([#4274](https://github.com/zeroclaw-labs/zeroclaw/pull/4274)) 中部分实现。
*   **LM Studio 自定义连接器** ([#2669](https://github.com/zeroclaw-labs/zeroclaw/issues/2669))
    *   用户希望官方支持 LM Studio，以简化本地模型配置。

---

## 7. 用户反馈摘要
*   **痛点**: **"分支管理混乱"**。多位用户反映 `master` 分支缺少旧 `main` 分支的功能（安全参数、工具、成本控制），导致升级后体验倒退。
*   **痛点**: **"通道稳定性不足"**。Feishu 和 Matrix 通道接连报错（无法启动、E2E 加密密钥问题），影响企业用户部署信心。
*   **好评**: **"本地化支持"**。社区对 v0.5.8 新增的 Piper TTS 和视觉模型独立路由反应积极，认为这真正降低了本地 AI 部署的硬件门槛。

---

## 8. 待处理积压
*   **关键遗留问题**: Provider streaming 功能代码 ([#4093](https://github.com/zeroclaw-labs/zeroclaw/issues/4093)) 曾在已删除的 `dev` 分支上实现，但从未合并至 `master`。该功能涉及通道 Draft 更新，需重新审查并合并。
*   **成本追踪回归**: 成本追踪功能在分支切换后消失 ([#3679](https://github.com/zeroclaw-labs/zeroclaw/issues/3679))，对于 Token 消耗巨大的 LLM 应用至关重要，需优先级回归。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报 - 2026-03-23**

---

### 1. 今日速览
PicoClaw 项目今日处于**极高活跃度**状态。过去 24 小时内共产生了 73 条提交记录（46 个 PR + 27 个 Issues），显示出极强的开发迭代节奏。核心架构层面的 **Agent 重构** 迈出关键一步，#1894 成功合并至主分支，标志着项目在解决长期技术债上取得了实质性进展。同时，社区对**多模态能力**（语音、视觉）和**平台生态兼容性**（Docker、本地模型）的需求高度集中，相关 PR 和 Issues 占据了今日讨论的主导地位。

---

### 2. 版本发布
**v0.2.3-nightly.20260322.c0bb8d6d** 已自动构建发布。
*   **类型**：Nightly Build (测试版)
*   **注意事项**：该版本包含未经过完整稳定化测试的最新代码，建议在非生产环境中使用。
*   **主要变更**：包含最新的 Agent 循环优化及多模态输入处理逻辑，对比上一个正式版 v0.2.3 有较大底层变动。
*   **Changelog**: [v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

---

### 3. 项目进展
今日合并了多个核心功能的 PR，项目在架构治理与多模态支持上迈出重要步伐：

*   **[核心重构] Agent 架构整合 (Phase 1 完成)**: [PR #1894](https://github.com/sipeed/picoclaw/pull/1894) (已合并)
    *   **进展**: 将 `refactor/agent` 分支合并回 `main`，完成了 Issue #1216 规划的第一阶段重构。
    *   **影响**: 统一了 Agent 模型，解决了代码分散问题，为后续实现事件驱动和更复杂的 Agent 逻辑打下地基。
*   **[修复] 历史记录压缩导致的工具调用孤立**: [PR #665](https://github.com/sipeed/picoclaw/pull/665) (已合并)
    *   **进展**: 修复了在上下文压缩后可能导致 `tool_call` 和 `tool_result` 不匹配的严重 Bug，防止 Anthropic API 报错。
*   **[修复] 上下文窗口与输出长度解耦**: [PR #556](https://github.com/sipeed/picoclaw/pull/556) (已合并)
    *   **进展**: 新增 `context_window` 配置项，将其与 `max_tokens` 分离。以前 `max_tokens` 错误地限制了输入上下文大小（导致过度截断），现在默认 128K 窗口，解决了模型对话记不住历史的痛点。
*   **[新功能] 多模态模型音频转写**: [PR #1891](https://github.com/sipeed/picoclaw/pull/1891) (已合并)
    *   **进展**: 不再局限于 Groq Whisper API，现支持直接使用具备音频能力的 LLM 模型进行转写，并支持配置 `voice.model_name`。

---

### 4. 社区热点
今日社区讨论聚焦于**安全性、生态扩展与部署体验**：

*   **[热讨论] 引入 Execline 替代 Bash 以提升命令执行安全性**
    *   链接: [PR #1874](https://github.com/sipeed/picoclaw/pull/1874)
    *   **核心观点**: 开发者 `keithy` 提议引入 `execlineb` (仅 67KB) 替代庞大的 `bash` (1.4MB) 作为执行引擎。
    *   **诉求分析**: 社区对 Agent 执行 Shell 命令的安全性担忧日益增加，更轻量、非驻留内存的执行引擎能降低潜在风险。
*   **[高热度] 微信生态的完整接入支持**
    *   链接: [PR #1904](https://github.com/sipeed/picoclaw/pull/1904)
    *   **核心观点**: 补全了微信渠道的用户端配置流程（扫码登录等）。
    *   **诉求分析**: 鉴于微信在国内的统治地位，用户强烈期望 PicoClaw 能像支持 Telegram/Discord 一样开箱即用。
*   **[架构演进] Agent 能力模型 的统一抽象**
    *   链接: [Issue #1876](https://github.com/sipeed/picoclaw/issues/1876)
    *   **核心观点**: 提出统一 Tools、Skills 和 MCP 的抽象层。
    *   **诉求分析**: 随着 Agent 能力增强，管理分散的工具和技能变得复杂，开发者急需一套标准化的能力发现和管理机制。

---

### 5. Bug 与稳定性
今日报告的 Bug 涉及配置验证、提供商兼容性和文件清理逻辑：

*   **[高危] MediaStore 清理机制可能误删工作区文件**
    *   链接: [Issue #1886](https://github.com/sipeed/picoclaw/issues/1886)
    *   **现象**: `send_file` 注册的文件会被 `ReleaseAll` 或 TTL 清理逻辑直接物理删除。
    *   **状态**: Open，需紧急修复，可能导致数据丢失。
*   **[中危] Gateway 模式下 REST API 端点 (/chat, /a2a) 不可用**
    *   链接: [Issue #1708](https://github.com/sipeed/picoclaw/issues/1708)
    *   **现象**: v0.2.3 版本 Gateway 仅暴露 Health 端点。
    *   **状态**: Open，严重影响基于 API 的集成。
*   **[中危] OpenAI 兼容接口探测未传递 API Key**
    *   链接: [Issue #1864](https://github.com/sipeed/picoclaw/issues/1864)
    *   **现象**: 探测 `/v1/models` 时未携带 Key，导致需认证的本地网关（如 axonhub）探测失败。
    *   **状态**: 有修复 PR [PR #1896](https://github.com/sipeed/picoclaw/pull/1896)。

---

### 6. 功能请求与路线图信号
*   **认证与权限**: [Issue #1067](https://github.com/sipeed/picoclaw/issues/1067) 提议集成 Authula 进行身份认证。这是一个长期被提及的安全需求，随着开源项目在公网暴露的增多，优先级正在提升。
*   **多模态输出**: [PR #1900](https://github.com/sipeed/picoclaw/pull/1900) 提出在 Web Chat 中支持混合 Markdown 和 HTML 渲染（如 `<table>`, `<div>`），以改善长文本和富媒体的展示体验。
*   **RISC-V/ARM 支持**: [Issue #1778](https://github.com/sipeed/picoclaw/issues/1778) 请求提供 ARMHF (32位) 的预构建 Launcher 镜像，反映了 PicoClaw 在边缘设备上的部署需求。

---

### 7. 用户反馈摘要
*   **痛点 - 配置复杂性**: 用户在 Issue #1883 中抱怨当前的 `{vendor}/{model}` 隐式解析逻辑不直观，特别是对于本地模型配置（如需填写 `openai/openai/model-name`），建议引入显式的 `provider` 字段。
*   **痛点 - 模型兼容性**: Groq (Issue #748), OpenRouter (Issue #1790), Mistral (Issue #1502) 等多家提供商的 API 格式差异导致报错频繁，用户对 LLM 提供商的兼容性层提出了更高的稳定性要求。
*   **好评**: 对新增的 AWS Bedrock 支持 ([PR #1903](https://github.com/sipeed/picoclaw/pull/1903)) 和语音转写支持 ([PR #1905](https://github.com/sipeed/picoclaw/pull/1905) ElevenLabs) 反映了社区对多平台和多模态能力的渴望。

---

### 8. 待处理积压
*   **[讨论] Agent 循环事件驱动重构**: [Issue #1316](https://github.com/sipeed/picoclaw/issues/1316) (已关闭并移至新 Meta Issue)
    *   虽然相关 PR 已合并，但关于“Hook（钩子）”和“中断”的具体实现细节仍在讨论中（见 [Issue #1796](https://github.com/sipeed/picoclaw/issues/1796)），需持续关注。
*   **[功能] 能力发现端点**: [Issue #1474](https://github.com/sipeed/picoclaw/issues/1474)
    *   外部编排层需要一个端点来查询 Agent 支持哪些 Profiles/Tools，该 Feature Request 已提出多日但尚未有明确的 PR 领取。

---
*数据来源: GitHub.com/sipeed/picoclaw | 分析员: AI Agent Analyst*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-23)

## 1. 今日速览
NanoClaw 项目今日处于**高度活跃**状态，社区贡献热情高涨。过去24小时内共处理了 **44 条 PR** 和 **5 条 Issues**，显示出项目正处于快速迭代期。核心架构演进显著，**二期工程（点对点通信）已宣告完成**，同时三期工程（信任与自治框架）的代码也已合并。技术生态方面，项目正在积极打破单一模型依赖，不仅集成了 **GitHub Copilot** 作为后端，还新增了 **Web 仪表板** 和 **Linear 集成**，标志着该项目正从单一的 CLI 工具向全功能 AI Agent 平台演进。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 **12 条 PR 成功合并**，项目在架构、平台能力和稳定性方面取得重大突破：

*   **【架构升级】二期工程竣工**
    *   **PR #1334 (CLOSED)**: 实现了 Agent 之间的直接通信。此前所有通信必须通过中央编排器，现在子代理可以点对点（P2P）交流，这将显著降低系统延迟并提高可扩展性。
    *   **PR #1308 (CLOSED)**: 合并了“信任与自治框架”。引入了 SQLite 支持的审批跟踪器和 `draft` 路由层级，允许用户在事件发送到消息总线前进行审批（批准/拒绝/编辑），这是迈向 Agent 自治的关键一步。
*   **【平台能力】多端支持与后台集成**
    *   **PR #1298 (CLOSED)**: 重大功能更新，新增 **Web 通道**、可视化仪表板以及多租户支持。
    *   **PR #1352 (OPEN)**: 新增对 Linear 的深度集成，支持流式传输工具调用和思考过程，提升开发运维体验。
*   **【模型生态】打破单一依赖**
    *   **PR #1351 (OPEN)**: 正在引入 GitHub Copilot SDK 作为 Anthropic Claude 的替代后端，支持 GPT-4.1 等模型，允许用户通过设置 `NANOCLAW_SDK=copilot` 切换运行时。
*   **【稳定性修复】**
    *   **PR #1335 (CLOSED)**: 修复了预定任务和组代理发送重复消息的 Bug。
    *   **PR #1353 (OPEN)**: 修复了注册主组时缺少 `CLAUDE.md` 模板复制的问题。

## 4. 社区热点
今日讨论与提交的重点集中在**模型兼容性**与**合规性**上：

*   **热点一：GitHub Copilot 集成**
    *   **[Issue #1350](https://github.com/qwibitai/nanoclaw/issues/1350)** & **[PR #1351](https://github.com/qwibitai/nanoclaw/pull/1351)**: 社区强烈希望摆脱对 Anthropic SDK 的独家依赖。Scottgl9 提出的 Copilot 集成方案正在快速推进中，这将极大降低部分开发者的使用门槛。
*   **热点二：CLI 后端合规性方案**
    *   **[PR #1343](https://github.com/qwibitai/nanoclaw/pull/1343)**: 针对 Issue #1224 提出的 Anthropic SDK 可能违反订阅版 TOS 的问题，JiehoonKwak 提出了使用 `claude -p` CLI 作为后端的方案，作为 SDK 模式的合规替代品。
*   **热点三：学术引用争议**
    *   **[Issue #1347](https://github.com/qwibitai/nanoclaw/issues/1347)**: 有用户指出项目架构缺少对北京拓扑技术中心创始人杨元相关作品的引用。此类学术/伦理层面的 Issue 在开源项目中较为少见，需关注维护者的回应。

## 5. Bug 与稳定性
今日修复了一个影响用户体验的重复消息 Bug，但仍存在自动化流程中的潜在问题：

*   **[已修复] 重复发送消息**
    *   详情: **PR #1335** - 修复了预定任务和组代理发布两条几乎相同消息的问题（一条来自执行期间，一条来自完成后的流回调）。
*   **[中等风险] 自动合并冲突**
    *   详情: **Issue #1345** - GitHub Actions 报告 `skill/apple-container` 和 `skill/compact` 分支在合并 `main` 分支的 `deee4b2` 版本时发生冲突。这可能导致这两个技能失效，需人工介入。

## 6. 功能请求与路线图信号
用户的需求正向**精细化控制**和**连接性**延伸：

*   **任务预处理钩子**: **[Issue #1348](https://github.com/qwibitai/nanoclaw/issues/1348)** & **[PR #1349](https://github.com/qwibitai/nanoclaw/pull/1349)**: 用户希望在生成 Agent 容器前增加 Shell 脚本钩子，用于检查磁盘空间、网络或 API 可用性。该 PR 已提交，大概率进入下一版本。
*   **Slack 深度优化**: **[PR #682](https://github.com/qwibitai/nanoclaw/pull/682)**: 针对真实环境（树莓派 5）部署中发现的问题，增加了 Slack 的线程回复路由和 App Home DM 修复，说明该项目已进入实际生产环境测试阶段。
*   **Matrix 协议支持**: **[PR #791](https://github.com/qwibitai/nanoclaw/pull/791)**: 社区正在补充去中心化通信协议 Matrix 的支持，进一步拓宽连接边界。

## 7. 用户反馈摘要
从 Issues 和 PR 描述中提取的痛点：

*   **痛点 - 时间上下文缺失**: 用户反馈 `formatLocalTime` 生成的的时间戳缺少星期几（如 "Mar 9, 2026"），导致 Agent 无法正确判断任务的时间紧迫性（PR #1098）。
*   **痛点 - 盲目触发任务**: 由于缺乏前置检查，预定任务可能在网络未通或 API 不可用时仍然尝试运行，造成资源浪费（Issue #1348）。
*   **痛点 - 容器环境隔离**: 用户希望在每个 agent 调用中强制注入一个本地、只读的 `system-prompt.md` 层，以确保核心指令不被覆盖或忽略（PR #1341）。

## 8. 待处理积压
以下 PR 长期处于开放状态，建议关注：

*   **[PR #1111](https://github.com/qwibitai/nanoclaw/pull/1111) (feat: add API usage tracking)**: 创建于 3月15日，状态为 Needs Review。对于商业部署至关重要的 API 调用成本追踪功能，尚未合并。
*   **[PR #682](https://github.com/qwibitai/nanoclaw/pull/682) (feat/slack)**: 创建于 3月初，涉及大量 Slack 集成修复，目前仍处于 Blocked 状态。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 - 2026-03-23

## 📊 今日速览
NullClaw 项目在过去 24 小时内保持了较高的活跃度，共处理了 **21 个** Issues 和 PRs 更新。开发重心主要集中在 **功能增强**（多模态支持、A2A 协议、可观测性）与 **系统稳定性修复**（Cron 调度器竞态、Shell 工具超时）。目前有 13 个 PR 处于待合并状态，预示着下一个版本将包含显著的功能更新。Docker 环境兼容性和 Telegram 渠道的稳定性是用户反馈的焦点。

## 🎯 版本发布
*过去 24 小时无新版本发布。*

## 🚀 项目进展
今日有 3 个重要 PR 已成功合并/关闭，标志着关键问题的解决：
*   **[PR #615]** 支持了 Ollama Cloud 的 API Key 认证，增强了云服务的兼容性。
*   **[PR #589]** 修复了在旧版 Linux 内核（< 4.11）上的文件系统路径创建问题，提升了系统的向后兼容性。
*   **[PR #672]** 关闭了 Issue #671，澄清了 Web UI 在公网绑定时的使用指引和文档，解决了用户困惑。

## 🔥 社区热点
*   **Issue #690 (OTel Enhancements)**
    *   **链接**: [#690](https://github.com/nullclaw/nullclaw/issues/690)
    *   **动态**: 社区正在热烈讨论如何增强 OpenTelemetry 支持，特别是关于消息来源和去向的归因。
    *   **诉求**: 用户希望深入了解链路追踪，以便更好地监控 Agent 在不同渠道间的消息流转。
*   **Issue #647 (Qwen Code Cli support)**
    *   **链接**: [#647](https://github.com/nullclaw/nullclaw/issues/647)
    *   **动态**: 关于添加 Qwen Code CLI 作为 Provider 的讨论。
    *   **诉求**: 用户被其慷慨的免费 Token 额度吸引，社区呼声较高。

## 🐛 Bug 与稳定性
今日报告的 Bug 涉及文件 I/O、渠道展示和核心调度逻辑，严重程度中等偏高：
1.  **[CRITICAL] Issue #684**: Agent 写入不存在的文件后，立即读取会报文件不存在（文件状态未同步）。
    *   状态: OPEN (待修复)
2.  **[HIGH] Issue #691**: Docker 环境下 `cron.zig` 忽略 `NULLCLAW_HOME` 环境变量，导致 `AccessDenied`。
    *   状态: **已提交修复** -> [PR #692](https://github.com/nullclaw/nullclaw/pull/692)
3.  **[HIGH] Issue #680**: Telegram 渠道重复展示或错误展示回答，严重影响用户体验。
    *   状态: OPEN
4.  **[HIGH] Issue #682**: 与 Bifrost 网关的兼容性问题（HTTP vs HTTPS 验证）。
    *   状态: OPEN
5.  **[MEDIUM] Issue #671** (已关闭): Chat UI 在便携热点下的配置/使用问题（通过 PR #672 解决）。

## 🔮 功能请求与路线图信号
*   **多模态/A2A 协议**: [PR #686](https://github.com/nullclaw/nullclaw/pull/692) 正在推进 A2A 协议的多模态支持（图片传输、能力探测）。
*   **自适应智能管道**: [PR #527](https://github.com/nullclaw/nullclaw/pull/527) 提出了一种无需额外 API 调用的交互学习机制，这是一个极具潜力的路线图特性。
*   **Qwen 支持**: Issue #647 请求增加 Qwen Code CLI 支持，鉴于其成本优势，未来加入 Provider 列表的可能性较大。
*   **OpenTelemetry**: Issue #690 收集了近期关于 OTEL 的增强需求，预计将纳入后续迭代计划。

## 💬 用户反馈摘要
*   **痛点**: 用户在使用便携热点和非默认路径（Docker）时遇到了权限和路径解析问题，说明环境变量兼容性需进一步加强。
*   **满意度**: 用户对 Ollama Cloud 的支持表示感谢。
*   **场景**: 多个 Issue 反映了在 Docker 容器化部署和特定渠道（如 Telegram）下的实际使用障碍。

## 📌 待处理积压
*   **[Issue #683]** 用户询问如何在配置中设置类似 OpenClaw 的模型回退，目前尚未收到回复。这是关于高可用性的一个合理请求。
*   **[PR #689]** 针对 Cron 调度器的复杂修复（竞态条件、内存泄漏），虽然已提交多日但仍处于 OPEN 状态，建议优先审查，因为这关乎核心稳定性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报：2026-03-23

## 1. 今日速览
IronClaw 项目今日处于**高度活跃**状态，在过去 24 小时内处理了 46 条 PR 更新和 12 个 Issue 议题。核心团队正在大力推动**架构重构**与**基础设施升级**，包括全新的统一执行引擎架构和 MCP 协议的深度集成。虽然活跃度高，但代码审查压力较大，31 个待合并 PR 表明项目正处于快速迭代期，需关注技术债务的积累。

## 2. 版本发布
*过去 24 小时无新版本发布。*

## 3. 项目进展
今日合并与关闭的 PR/Issue 显示了项目在稳定性和基础功能上的关键推进：

*   **核心架构升级 (v2 架构启动)**
    *   提出了全新的统一执行引擎 **`ironclaw_engine`** ([#1557](https://github.com/nearai/ironclaw/pull/1557))。这是一个包含 7000+ 行代码的大型重构，旨在用 5 个新原语替换现有的 10 个碎片化抽象。虽然仍在开发中，但其提出标志着项目向更清晰的架构迈出了决定性的一步。
*   **协议兼容性修复**
    *   **MCP 协议支持增强**：修复了 MCP Streamable HTTP 传输中无法处理 `202 Accepted` 空响应的问题 ([#1539](https://github.com/nearai/ironclaw/pull/1539), closes [#1436](https://github.com/nearai/ironclaw/issues/1436))，这将解除与 Kubernetes MCP Server 等服务集成的阻塞。
    *   **Gemini 模型兼容**：修复了 Gemini 3.x 模型在工具调用时缺少 `thought_signature` 导致的 400 错误 ([#1565](https://github.com/nearai/ironclaw/pull/1565))。
*   **安全与稳定性的提升**
    *   修复了 CI 中发现的高风险问题：工具循环中的消息向量无限增长风险 ([#826](https://github.com/nearai/ironclaw/issues/826)) 和内存分配优化 ([#894](https://github.com/nearai/ironclaw/issues/894))。

## 4. 社区热点
今日讨论主要集中在**第三方集成**与**LLM 兼容性**上：

*   **Google OAuth 阻塞与替代方案**
    *   **Issue**: [#902](https://github.com/nearai/ironclaw/issues/902) - 用户反馈 Google Suite WASM 工具在 OAuth 时被 Google 安全策略拦截。
    *   **动态**: 社区正在积极推动通过 **MCP Bridge** 绕过此限制。核心成员 `G7CNF` 提出了基于本地 `gws` 二进制文件的 MCP 桥接方案 ([#1569](https://github.com/nearai/ironclaw/pull/1569))，作为受阻塞后的只读回退方案。
*   **WASM 工具的凭证注入问题**
    *   **Issue**: [#1537](https://github.com/nearai/ironclaw/issues/1537) - 用户报告在 NEAR AI 托管 TEE 环境中，WASM 凭证存储成功但运行时注入失败。
    *   **影响**: 这是一个影响生产环境的高严重性问题，涉及 Secrets 存储与运行时隔离的安全信任链。

## 5. Bug 与稳定性
今日报告的关键 Bug 按严重程度排列：

1.  **[HIGH] 消息上下文无限增长** ([#826](https://github.com/nearai/ironclaw/issues/826))
    *   **现象**: 工具循环中消息未修剪，导致上下文过大。
    *   **状态**: Issue 已关闭 (由 PR 修复)。
2.  **[HIGH] 托管 TEE 环境下 WASM 凭证注入失败** ([#1537](https://github.com/nearai/ironclaw/issues/1537))
    *   **现象**: 密钥已存储但无法在运行时读取，导致工具认证失败。
    *   **状态**: Open (待修复)。
3.  **[MEDIUM] Gemini 模型工具调用缺少签名** ([#1510](https://github.com/nearai/ironclaw/issues/1510))
    *   **现象**: 使用 `gemini-3.1-flash-lite-preview` 时工具调用报错 400。
    *   **状态**: Fix PR 已提交 ([#1565](https://github.com/nearai/ironclaw/pull/1565))。

## 6. 功能请求与路线图信号
从新开的 Issues 和 PRs 中可以看出以下开发趋势：

*   **安全分级 Shell 工具** ([#172](https://github.com/nearai/ironclaw/issues/172)): 已关闭。引入了低/中/高风险分级，允许对非破坏性命令进行自动批准。这将显著提升 Agent 自主性体验。
*   **ClawHub 注册表开关** ([#1570](https://github.com/nearai/ironclaw/issues/1570)): 请求添加 `CLAWHUB_ENABLED` 环境变量，允许企业在私有化部署中禁用公共技能注册表。
*   **轻量级 Routines 默认启用工具** ([#1573](https://github.com/nearai/ironclaw/pull/1573)): 正在审查中。提议将新创建的轻量级 Routines 默认设置为 `use_tools=true`，以增强开箱即用的 Agent 能力。
*   **AWS Bedrock 嵌入支持** ([#1568](https://github.com/nearai/ironclaw/pull/1568)): 新增 PR，正在将 AWS Bedrock 作为嵌入后端引入，丰富非 OpenAI 生态支持。

## 7. 用户反馈摘要
*   **痛点 - 部署兼容性**: 用户在 Amazon Linux 2023 (glibc < 2.35) 上安装失败 ([#1008](https://github.com/nearai/ironclaw/issues/1008))。尽管问题已关闭，但若无 musl 静态二进制回退，仍将影响旧系统用户。
*   **痛点 - 交互体验**: 用户发送连续消息时，Agent 会对每条消息单独触发 LLM 调用，导致上下文断裂 ([#259](https://github.com/nearai/ironclaw/issues/259))。*注：此 Issue 今日已关闭，暗示 Debounce (防抖) 功能可能已实现或合并。*
*   **文档需求**: 社区呼吁更新 `AGENTS.md`，以便除 Claude 外的其他 LLM (如 Codex) 能更好地参与代码贡献 ([#1464](https://github.com/nearai/ironclaw/issues/1464))。

## 8. 待处理积压
*   **大型架构 PR 需重点关注**:
    *   [#1557](https://github.com/nearai/ironclaw/pull/1557) (Unified Engine) 和 [#1187](https://github.com/nearai/ironclaw/pull/1187) (Adaptive Learning System) 均为超大规模变更，处于 Open 状态，建议核心团队优先进行 Code Review 以防止合并冲突。
*   **长期遗留问题**:
    *   Mistral 兼容性修复 ([#1242](https://github.com/nearai/ironclaw/pull/1242)) 仍处于 Open 状态，需跟进 Mistral API 的具体格式要求。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-23)

## 1. 今日速览
今日 LobsterAI 项目呈现出**极高活跃度**，共处理了 **28 条新 Issues** 和 **26 条 PR 更新**，这表明项目正处于快速迭代与重构期。
*   **功能层面**：项目在 IM 集成（微信、飞书）、模型认证（MiniMax、Qwen OAuth）以及多 Agent 编排可视化方面取得了显著进展。
*   **质量层面**：社区贡献者 `pylstark` 进行了深度的代码审查，一次性提出了 19 个涵盖内存泄漏、安全风险（XSS）和类型安全的代码质量问题，反映出项目在快速扩张中面临的技术债务挑战。
*   **稳定性**：用户反馈的 UI 卡顿和关键 Bug（如会话崩溃）较为集中，新版本的稳定性正接受严峻考验。

## 2. 版本发布
**版本号**：`2026.3.22`
**发布时间**：2026-03-22
**核心变更**：
*   **修复 (OpenClaw)**：解决了 Gateway 环境变量注入问题，增强了节点 shims 注入机制，并修复了因环境变量未定义导致的配置热重载失败。
*   **修复 (IM)**：针对微信扫码登录后的 Gateway 重启逻辑进行了调整，优化了设置引导流程。
*   **影响评估**：此次修复主要针对上一版本中微信登录和 OpenClaw 引擎启动的遗留问题，建议用户及时更新以改善连接稳定性。

## 3. 项目进展
今日共有 **8 个 PR 合并/关闭**，主要集中在 IM 生态接入与核心体验优化：

*   **[PR #652](https://github.com/netease-youdao/LobsterAI/pull/652) & #653**：**完善微信生态接入**。
    *   实现了微信扫码登录后自动重启 Gateway，确保插件能即时获取 Token。
    *   优化了登录流程，绕过 OpenClaw Gateway RPC 直接调用 ilink API，减少了延迟并支持二维码过期自动刷新。
*   **[PR #657](https://github.com/netease-youdao/LobsterAI/pull/657)**：**增强环境变量鲁棒性**。
    *   修复了 OpenClaw 将空字符串环境变量视为"缺失"的问题，防止 Gateway 在 MCP Bridge 未启动或 API Key 未配置时崩溃。
*   **[PR #654](https://github.com/netease-youdao/LobsterAI/pull/654)**：**UI/UX 优化**。
    *   调整了微信设置页面的布局，统一了多平台的排序逻辑。

## 4. 社区热点
今日讨论焦点集中在代码质量治理与新功能接入：

*   **代码质量大扫除 ([Issue Bundle](https://github.com/netease-youdao/LobsterAI/issues))**：
    *   用户 `pylstark` 提交了 **#662 - #680** 等一系列 Issues，直指项目中的**内存泄漏**（Tooltip、定时器）、**XSS 风险**（Artifacts HTML 渲染）、**竞态条件**（配置写入）等问题。这表明社区对项目工程化程度的高度关注。
*   **IM 平台接入**：
    *   **#636**：询问是否支持多个飞书机器人配置，反映出企业用户对多账号管理的需求。
*   **功能特性争议**：
    *   **#496**：用户反馈 3.17 版本移除了沙箱功能，引发了对功能回退的讨论。
    *   **#640**：建议在 0.2.4 版本基础上开分支优化，认为后续版本 Bug 过多（获得 2 个 👍）。

## 5. Bug 与稳定性
今日报告的 Bug 涉及核心功能阻塞与性能衰退：

*   **【严重】数据损坏导致会话无法加载**
    *   **[#639](https://github.com/netease-youdao/LobsterAI/issues/639)**：`cowork_messages` 表中任意一条 metadata 损坏（非法 JSON）会导致整个 Session 无法加载，用户无法自行恢复。
    *   *状态*：已有修复 PR **#681**。
*   **【高危】XSS 安全风险**
    *   **[#665](https://github.com/netease-youdao/LobsterAI/issues/665)**：Artifacts HTML 渲染可能绕过沙箱限制执行恶意脚本。
    *   *状态*：待修复。
*   **【中】UI 性能崩溃**
    *   **[#645](https://github.com/netease-youdao/LobsterAI/issues/645)**：聊天记录增多后 UI 极度卡顿，用户强烈请求增加虚拟滚动（局部按需渲染）。
    *   **[#646](https://github.com/netease-youdao/LobsterAI/issues/646)**：点击停止按钮后，文字输出依然会持续一段时间才停止，响应性差。
*   **【中】IM 功能回归**
    *   **[#637](https://github.com/netease-youdao/LobsterAI/issues/637)**：更新 v2026.3.21 后，飞书群聊白名单模式下机器人无法响应 @mention。

## 6. 功能请求与路线图信号
从 PR 和 Issues 中可以窥见即将到来的特性：

*   **OAuth 一键登录**：
    *   **[PR #682](https://github.com/netease-youdao/LobsterAI/pull/682)** (MiniMax) 和 **[PR #644](https://github.com/netease-youdao/LobsterAI/pull/644)** (Qwen) 正在积极推进。旨在实现“下载后 10 秒内发起对话”的极速体验，支持双认证模式。
*   **多 Agent 编排可视化**：
    *   **[PR #680](https://github.com/netease-youdao/LobsterAI/pull/680)**：计划将 OpenClaw 的多 Agent 编排从“黑箱”变为透明，侧边栏实时展示子任务进度，这是提升 AI 可观测性的重要一步。
*   **快捷指令**：
    *   **[PR #658](https://github.com/netease-youdao/LobsterAI/pull/658)**：支持 `!<command>` 前缀直接运行 Shell 命令，无需经过 AI，为高级用户提供类 Terminal 的便捷操作。
*   **防休眠模式**：
    *   **[PR #659](https://github.com/netease-youdao/LobsterAI/pull/659)**：新增“防止电脑休眠”开关，满足长任务运行需求。
*   **跨平台快捷键设置**：
    *   **[PR #679](https://github.com/netease-youdao/LobsterAI/pull/679)**：支持录制输入并自动适配 macOS (⌘) / Linux (Super) 的快捷键。

## 7. 用户反馈摘要
*   **痛点 - 性能**：随着使用深入，**UI 卡顿**（#645）已成为影响体验的首要问题，用户明确指出需要优化渲染机制。
*   **痛点 - 稳定性**：部分用户认为新版本（0.2.4 之后）引入了过多 Bug（#640），甚至出现基础功能如沙箱丢失（#496）的情况，引发了对版本质量的信任危机。
*   **痛点 - 错误反馈**：错误提示缺失或晦涩，例如重命名会话失败无反馈（#670）、模型连接测试显示失败但实际可用（#592）。
*   **赞赏 - 生态**：用户对微信（#655）及 OAuth 登录功能表现出浓厚兴趣，希望降低配置门槛。

## 8. 待处理积压
*   **长期 Issue**：
    *   **[#402](https://github.com/netease-youdao/LobsterAI/issues/402)**：ESXi/Debian 环境下沙箱无法启动（3月13日提出，仍处于 OPEN 状态）。
*   **技术债务**：
    *   今日新增的 19 个代码质量问题（#662-#680, #678 等），特别是内存泄漏和 XSS 风险，建议维护者设立专项进行集中清理，以免累积导致更严重的后果。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目日报 - 2026-03-23**

---

### 1. 今日速览
TinyClaw 项目在过去 24 小时内保持着高水平的开发活跃度。尽管没有新的 Issue 提出或版本发布，但在 Pull Request 领域表现强劲，共产生了 3 次代码提交，其中 1 个关键的 Bug 修复 PR 已成功合并。核心开发工作集中在**提升系统稳定性**（修复 API 路由序列化问题）和**扩展底层 LLM 生态**（引入 Novita AI）。同时，项目正在进行重要的技术债务清理，计划将 Telegram 客户端迁移至更稳健的框架。整体来看，项目正朝着更加健壮和多元化的方向发展。

---

### 2. 版本发布
*今日无新版本发布。*

---

### 3. 项目进展
今日的主要进展体现在代码库的稳定性和维护性提升上，以下是已合并或正在推进的关键更新：

*   **[已合并] 修复 API 消息队列序列化 Bug**
    *   **PR #247** (fix(api): resolve agent routing at enqueue time) 已由 **jlia0** 提交并关闭。
    *   **进展分析**：此修复解决了一个隐蔽但严重的并发 Bug。此前，来自不同渠道的消息和心跳检测被并行处理，导致路由逻辑混乱。现在系统已确保所有消息在进入队列时正确解析 Agent 路由，极大地提升了多任务调度时的确定性和稳定性。
    *   **链接**：[TinyAGI/tinyagi#247](https://github.com/TinyAGI/tinyclaw/pull/247)

*   **[进行中] 引入 Novita AI 作为内置服务商**
    *   **PR #243** (feat: add Novita AI as a built-in LLM provider) 目前处于待合并状态。
    *   **进展分析**：项目正通过复用现有的 OpenAI 兼容接口，无缝集成 Novita AI。这意味着用户将无需更新 CLI 依赖即可获得新的模型选择，降低了供应商锁定风险，增强了项目的可扩展性。
    *   **链接**：[TinyAGI/tinyagi#243](https://github.com/TinyAGI/tinyclaw/pull/243)

*   **[进行中] Telegram 客户端架构重构**
    *   **PR #248** (refactor(telegram): migrate to grammY for reliable polling) 已创建。
    *   **进展分析**：为了解决旧版 `node-telegram-bot-api` 在长连接下“假死”的问题，维护者决定迁移至 `grammY` 框架。这一变更将引入自动重连和指数退避机制，显著提升 Telegram 机器人的在线率和消息接收可靠性。
    *   **链接**：[TinyAGI/tinyagi#248](https://github.com/TinyAGI/tinyclaw/pull/248)

---

### 4. 社区热点
*今日社区讨论主要集中在代码贡献的具体实现上，暂无引发广泛热议的争论性话题。*

*   **最受关注的改动**：PR #243 (Novita AI 集成) 和 PR #248 (grammY 迁移) 是目前关注的焦点。
    *   **诉求分析**：社区和核心团队显然关注两大核心痛点：**降低 LLM 调用成本/多样性**（通过引入新供应商）以及 **生产环境的高可用性**（通过修复轮询问题）。
    *   **链接**：
        *   [PR #243](https://github.com/TinyAGI/tinyclaw/pull/243)
        *   [PR #248](https://github.com/TinyAGI/tinyclaw/pull/248)

---

### 5. Bug 与稳定性
今日处理了一个高严重度的稳定性问题：

*   **[高严重度 - 已修复] 消息队列与路由并发冲突**
    *   **描述**：API 路由层存在序列化错误，导致预定消息与频道消息并行处理，破坏了消息处理的顺序性。
    *   **状态**：已修复并合并 (PR #247)。
    *   **影响**：修复前可能导致 Agent 分发逻辑错误，心跳任务干扰用户消息；修复后将恢复严格的顺序执行。

*   **[中严重度 - 修复中] Telegram Bot 轮询停滞**
    *   **描述**：现有的 Telegram 集成库存在已知的“静默停止接收消息”的问题。
    *   **状态**：重构方案已提出 (PR #248)，待合并。
    *   **影响**：修复前用户可能会遇到机器人突然不回复的情况，需手动重启。

---

### 6. 功能请求与路线图信号
从今日的 PR 活动可以解读出以下路线图信号：

*   **LLM 供应商多样化**：PR #243 表明项目正在积极寻求 OpenAI 和 Anthropic 之外的替代方案，以应对 API 成本或可用性问题。
*   **基础设施鲁棒性优先**：PR #247 和 PR #248 显示，当前开发周期的优先级从“增加新功能”转向“夯实基础稳定性”，特别是针对消息队列和第三方通讯软件（Telegram）的连接稳定性。

---

### 7. 用户反馈摘要
*今日无新增用户反馈 (0 新 Issues)。*
*基于历史推断*：PR #248 的提出反映了用户对 Telegram 机器人连接稳定性的潜在不满，现有方案在长期运行中可能存在不可靠的情况。

---

### 8. 待处理积压
*当前无长期未响应的高优先级积压。*
所有活跃 PR 均为最近 3 天内创建，项目维护响应及时。建议关注 **PR #243** 和 **PR #248** 的后续合并情况，以确保新功能和新框架尽快落地。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-03-23)

**报告基于**：github.com/moltis-org/moltis
**分析师**：AI 智能体与个人助手领域专家
**日期**：2026年3月23日

---

## 1. 今日速览
Moltis 项目在过去 24 小时内保持了**低强度的维护节奏**。核心代码库未见新版本发布，唯一的代码提交活动集中在文档层面（PR #461）。社区交互相对平缓，共处理了 2 条 Issues，其中 1 条关于增强记忆模块功能的长期讨论（#137）宣告关闭，另有 1 条关于 WhatsApp 集成的新 Bug（#460）被提交。整体来看，项目目前处于功能修整期，暂无大规模功能迭代的迹象。

---

## 2. 版本发布
**当前状态**：无新版本发布。

---

## 3. 项目进展
今日无已合并的 PR。唯一的活跃 PR 为文档更新：
*   **[PR #461: docs: add gitcgr code graph badge](https://github.com/moltis-org/moltis/pull/461)**
    *   **状态**：待合并
    *   **内容**：由 vitali87 提交，旨在 README 中添加 gitcgr 代码图谱徽章。
    *   **影响**：此变更属于非功能性更新，旨在提升项目主页的视觉展示效果和数据可观测性，不影响核心代码逻辑。

---

## 4. 社区热点
今日讨论热度主要集中在以下 Issue：

*   **[#137 [CLOSED]: Add base_url Support to Memory Module OR Option to Disable RAG for Pure Local MD Memory](https://github.com/moltis-org/moltis/issues/137)**
    *   **标签**：enhancement, Feature
    *   **状态**：已关闭
    *   **热度**：5 条评论
    *   **分析**：尽管该 Issue 创建于 2 月中旬，但在过去 24 小时内仍有更新并最终关闭。这表明维护者与用户之间就**“记忆模块的灵活性”**达成了最终共识。用户的需求主要集中在两点：一是支持自定义 `base_url`（可能为了兼容非 OpenAI 接口或本地模型），二是允许关闭 RAG（检索增强生成）以实现纯本地化的 Markdown 文件记忆。关闭状态暗示该需求可能已在新版本中解决，或被确定为不予支持。

---

## 5. Bug 与稳定性
今日报告了 1 个新的功能性 Bug：

*   **[#460 [OPEN]: WhatsApp Integration is confusing](https://github.com/moltis-org/moltis/issues/460)**
    *   **严重程度**：中等（影响用户体验）
    *   **描述**：用户反馈 WhatsApp 集成功能令人困惑。
    *   **现状**：尚无修复 PR 提交。
    *   **分析**：作为一个“个人 AI 助手”项目，WhatsApp 集成是其触达用户的重要渠道。如果集成流程混乱，将直接提高新用户的上手门槛。建议维护者尽快检查相关文档或配置流程的清晰度。

---

## 6. 功能请求与路线图信号
*   **潜在需求信号**：虽然 #137 已关闭，但它再次强调了**“本地化”**和**“模型兼容性”**是用户关注的重点。用户希望拥有更多控制权，例如禁用云端 RAG 或连接自定义端点，这预示着未来的路线图应继续向“隐私优先”和“模型无关性”倾斜。

---

## 7. 用户反馈摘要
基于今日活跃的 Issues，用户痛点主要集中在：
1.  **配置复杂性**：从 #460 可以看出，第三方平台的集成（WhatsApp）可能存在文档晦涩或流程繁琐的问题，导致用户困惑。
2.  **本地化与控制的渴望**：#137 的讨论显示，高级用户对数据隐私和模型部署的灵活性（Base URL、纯本地模式）有强烈需求。

---

## 8. 待处理积压
**提醒维护者关注**：
*   **[PR #461](https://github.com/moltis-org/moltis/pull/461)**：虽然只是文档 Badge，但长期处于 Open 状态可能阻塞 README 的整洁性，建议尽快合并或关闭。
*   **[Issue #460](https://github.com/moltis-org/moltis/issues/460)**：作为刚刚提交的 Bug，目前评论数为 0，需要维护者介入引导用户提供更多复现信息（如复现步骤、配置截图），以便快速定位是文档问题还是代码 Bug。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-23)

## 1. 今日速览
CoPaw 项目今日处于**极高活跃度**状态，社区参与度显著提升。过去 24 小时内共产生了 61 条更新（38 个 Issues，23 个 PRs），显示出项目正处于快速迭代与问题排查期。
尽管没有发布新版本，但技术层面的推进十分密集：核心代码库在**工具调用容错性**、**Docker 镜像优化**以及**多模型兼容性**方面取得了实质性进展。同时，**Windows 平台的兼容性问题**（Shell 执行卡死、Pydantic 报错）和**多智能体协作需求**成为今日社区最关注的痛点。

---

## 2. 版本发布
*今日暂无新版本发布。*

---

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中在系统的鲁棒性和基础设施优化上，部分关键技术特性已合并：

*   **[Core] Shell 命令执行优化**：虽然 PR #2068 尚处于 Open 状态，但与之相关的 Windows `check=True` Bug 修复 ([#1065](https://github.com/agentscope-ai/CoPaw/pull/1065)) 已关闭，表明项目正在集中解决跨平台命令执行的稳定性问题。
*   **[Core] 消息存储一致性**：PR #623 已关闭，修复了 `console_push_store` 中 `take/take_all` 方法未按预期过滤过期消息的逻辑漏洞，确保了内存清理机制的正确性。
*   **[Channel] 消息路由与中断**：一系列关于多智能体交互的 PR 已关闭。包括支持 `!!` 前缀中断任务 ([#1869](https://github.com/agentscope-ai/CoPaw/pull/1869)) 和基于元数据的 Channel 消息路由 ([#1889](https://github.com/agentscope-ai/CoPaw/pull/1889))，这为复杂的多智能体协作奠定了底层基础。
*   **[Infra] Docker 镜像瘦身**：PR #2051 提出移除 GUI 组件，预计可将镜像体积减少 30%，启动时间缩短 10 秒，这对部署效率是极大的提升。

---

## 4. 社区热点
今日讨论热度最高的议题主要集中在**系统稳定性**和**多智能体场景落地**：

*   **[Hot] Windows 环境下的 Shell 执行卡死** ([Issue #2058](https://github.com/agentscope-ai/CoPaw/issues/2058), [#2060](https://github.com/agentscope-ai/CoPaw/issues/2060))
    *   **摘要**：多位用户反馈在 Windows 上执行 PowerShell 脚本（如 `Start-Process`）时 CoPaw 会无限卡死，且不触发超时。
    *   **诉求**：急需修复管道句柄泄露和进程回收机制。
*   **[Hot] 多智能体协作与 Bot 绑定** ([Issue #2035](https://github.com/agentscope-ai/CoPaw/issues/2035))
    *   **摘要**：用户询问如何实现每个智能体绑定一个 Bot，以及多智能体如何协同完成任务。
    *   **关联**：这与刚合并的 Channel Routing ([#1889](https://github.com/agentscope-ai/CoPaw/pull/1889)) 高度相关，显示出用户对该功能的迫切需求。
*   **[Hot] 微信 ClawBot 适配请求** ([Issue #2043](https://github.com/agentscope-ai/CoPaw/issues/2043))
    *   **摘要**：3月22日微信发布了 ClawBot，社区迅速发起了支持该通道的 Feature Request，并获得了 6 个点赞，反应迅速。

---

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，其中**Windows 兼容性**和**工具调用失控**最为严重：

*   **[Critical] Windows Shell 命令死锁**
    *   **描述**：涉及 `execute_shell_command` 的管道处理和异步问题，导致任务永久挂起 ([#2060](https://github.com/agentscope-ai/CoPaw/issues/2060))。
    *   **状态**：已有 Fix PR ([#2068](https://github.com/agentscope-ai/CoPaw/pull/2068)) 提交，待审核。
*   **[High] Pydantic 前向引用解析错误**
    *   **描述**：Windows 启动时报错 `PydanticUndefinedAnnotation: name 'MCPConfig' is not defined`，导致应用无法启动 ([#2056](https://github.com/agentscope-ai/CoPaw/issues/2056))。
    *   **状态**：待修复。
*   **[High] OpenAI 兼容模型工具调用失控**
    *   **描述**：特定模型 (StreamLake/kat-coder-pro-v1) 在单轮对话中返回大量 `tool_call`，导致 Agent 陷入死循环 ([#2055](https://github.com/agentscope-ai/CoPaw/issues/2055))。
    *   **状态**：已有相关 Tool Guard 修复 PR ([#1984](https://github.com/agentscope-ai/CoPaw/pull/1984)) 处理中。
*   **[Medium] 技能文件同步失效**
    *   **描述**：新版本中 `active_skills` 与 `customized_skills` 不再自动同步 ([#2015](https://github.com/agentscope-ai/CoPaw/issues/2015))。

---

## 6. 功能请求与路线图信号
根据 Issues 与 PRs 的关联分析，以下功能可能被纳入下一版本或正在开发中：

*   **多智能体编排系统**
    *   **信号**：Issue #2035 询问多智能体协同，PR #2036 提交了完整的后端编排系统和前端 UI。这是一个正在快速推进的大功能。
*   **全局/共享技能目录**
    *   **信号**：Issue #2032 提出在多智能体场景下共享技能的需求，目前暂无对应 PR，但符合产品演进方向。
*   **控制台体验增强**
    *   **信号**：Issue #2061 (模型筛选) 已有对应的 PR #2062 提交代码，预计很快合并。
*   **企业微信/微信生态支持**
    *   **信号**：企业微信消息过滤 ([#2049](https://github.com/agentscope-ai/CoPaw/issues/2049)) 和新 ClawBot 支持 ([#2043](https://github.com/agentscope-ai/CoPaw/issues/2043)) 是高频需求。

---

## 7. 用户反馈摘要
从真实用户的评论中提炼出的痛点与建议：

*   **移动端体验差**：用户反馈控制台 在手机浏览器上布局混乱，配置困难 ([#2026](https://github.com/agentscope-ai/CoPaw/issues/2026))。
*   **过度思考**：在飞书等渠道，Agent 在遇到错误时会进行无数次无用的重试尝试，建议增加最大尝试次数限制 ([#2059](https://github.com/agentscope-ai/CoPaw/issues/2059))。
*   **输出过程界面闪烁**：Ubuntu 服务器配合 Windows 客户端使用时，代码高亮输出导致界面破坏/乱码 ([#2037](https://github.com/agentscope-ai/CoPaw/issues/2037))。
*   **安装包过大**：Windows 桌面版安装包达 500MB，解压耗时 30 分钟以上，远超同类竞品 ([#2031](https://github.com/agentscope-ai/CoPaw/issues/2031))。

---

## 8. 待处理积压
*   **Issue #430 (Help Wanted)**：长期存在的任务认领清单，虽然今日有更新，但仍有大量任务标为 "Not Started"，需社区持续关注贡献。
*   **Issue #1976 (Task Cancelled)**：关于 "RuntimeError: Task has been cancelled" 的讨论虽然标记为 fixed in #1956，但评论数仍在增加，可能存在未完全解决的边缘情况。
*   **PR #1762 (FilePathToolGuardian)**：敏感路径访问守卫功能已开放较长时间，仍在 Open 状态，涉及安全性，建议优先审查。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-23)

**报告摘要：** 今日项目处于**高活跃度**状态。虽然未见正式版本发布，但社区在**即时通讯集成**和**上游同步维护**方面表现出强烈的参与意愿。核心开发者和贡献者正在集中优化 Telegram 交互体验，并尝试将最新的上游变更（v0.7.6）合并到项目中。同时，关于“社区归属感”和“架构演进”的讨论揭示了项目在快速发展期面临的典型挑战。

---

### 1. 今日速览
- **维护与同步活跃**：今日共有 5 条 Issue 更新和 4 条 PR 活动，其中 2 个 Issue 和 1 个 PR 已关闭。最显著的活动是针对上游版本 `v0.7.6` 的合并同步工作，显示出项目正在积极跟进外部依赖的更新。
- **UX 体验优化**：社区贡献者 `stuartbowness` 对 Telegram Bot 的交互体验进行了细致改进，包括输入状态指示和 Markdown 格式修复，提升了用户在即时通讯渠道的使用体验。
- **社区呼声**：有新用户提出对社区支持渠道的需求，反映出项目文档或上手指引可能存在缺口，导致配置模型（如 Qwen）时遇到困难。
- **架构愿景**：关于引入 Firecracker VM 容器化模板的讨论仍在继续，这表明项目核心架构正朝着更安全、更隔离的微虚拟机方向演进。

---

### 2. 版本发布
**无新版本发布**

---

### 3. 项目进展
今日合并/关闭的重要进展主要集中在工程化规范和上游同步上：

*   **[CLOSED] PR #394 & Issue #393: 同步上游 v0.7.6**
    *   **链接**: [PR #394](https://github.com/qhkm/zeptoclaw/pull/394) | [Issue #393](https://github.com/qhkm/zeptoclaw/issues/393)
    *   **进展**: 成功将上游 `v0.7.6` 的变更同步到本项目，并保留了 Fork 版本特有的 Telegram Markdown/分块支持以及 CI/Release 自定义配置。这是项目维护的关键一步，确保了既能跟上上游发展，又能保留特色功能。
*   **[CLOSED] Issue #395: CI 构建产物版本化**
    *   **链接**: [Issue #395](https://github.com/qhkm/zeptoclaw/issues/395)
    *   **进展**: 针对主分支构建覆盖固定预发布标签的问题进行了讨论并关闭（暗示已修复或计划实施），未来将生成带唯一时间戳的预发布版本，便于构建资产追踪。

---

### 4. 社区热点
今日讨论热度集中点：

*   **[OPEN] Issue #387: 基于 Firecracker VM 的核心模板架构**
    *   **链接**: [Issue #387](https://github.com/qhkm/zeptoclaw/issues/387)
    *   **热度**: 7 条评论
    *   **分析**: 这是一个具有争议性的架构提案。作者提出将 Coding Agent Frameworks（如 Claude-code, Copilot-cli 等）视为应用，运行在基于 Firecracker 的隔离 VM 节点中。这触及了“功能蔓延”与“安全边界”的平衡，社区对此高度关注，预示着未来可能的重构方向。
*   **[OPEN] PR #396: Telegram 频道改进与安全加固**
    *   **链接**: [PR #396](https://github.com/qhkm/zeptoclaw/pull/396)
    *   **热度**: 新增 PR
    *   **分析**: 该 PR 修复了 Telegram Bot 的 Markdown 混乱问题，增加了“输入中...”状态指示，大幅提升用户体验。目前处于待合并状态，若通过将显著提升 Bot 的交互质感。

---

### 5. Bug 与稳定性
*   **Telegram Markdown 渲染错误** (Medium)
    *   **问题描述**: 在 Telegram 交互中，Bot 的回复经常出现 Markdown 格式错乱。
    *   **状态**: **已有 Fix PR**。
    *   **链接**: 详见 [PR #396](https://github.com/qhkm/zeptoclaw/pull/396)，该 PR 包含了一系列针对 Telegram 消息处理的修复。

---

### 6. 功能请求与路线图信号
*   **SKILL.md 深度扫描** ([Issue #285](https://github.com/qhkm/zeptoclaw/issues/285))
    *   **信号**: 计划增强 GitHub 技能搜索质量，增加对 `SKILL.md` 文件的深度扫描模式。这将提升 ZeptoClaw 发现和加载高质量技能的能力。
*   **即时代理状态反馈** ([PR #392](https://github.com/qhkm/zeptoclaw/pull/392))
    *   **信号**: 正在开发在 Telegram 中显示 Agent 处理消息时的“正在输入”状态。这是一个小但重要的 UX 改进，表明项目正致力于打磨细节体验。
*   **标准化开发环境** ([PR #287](https://github.com/qhkm/zeptoclaw/pull/287))
    *   **信号**: 提议引入统一的开发工具链，确保贡献者在提交 PR 前拥有一致的测试和 Lint 环境。这有助于提高代码质量和合并效率。

---

### 7. 用户反馈摘要
从 Issues 和评论中提炼的关键痛点：
*   **配置门槛高** ([Issue #397](https://github.com/qhkm/zeptoclaw/issues/397))：用户 `PedroRosalba` 反映在配置 Qwen 模型时遇到困难，并直言“很难让它工作”。这表明**新手引导文档可能缺失或不够清晰**，且用户渴望一个即时的交流社区（Discord/Telegram群）来获取帮助，而不是仅通过 GitHub Issues 提问。

---

### 8. 待处理积压
提醒维护者关注的长期未决或重要事项：
*   **PR #287 (Dev Tools)**: 已开放较长时间（3月9日创建），旨在规范开发流程。建议维护者优先审查，以降低后续贡献者的心智负担。
*   **Issue #397 (Community)**: 用户急需配置指引和交流渠道。建议建立官方 Discord 或 Telegram 群，或在 README 中补充“Troubleshooting”章节，以降低用户流失率。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

这里是 EasyClaw 项目 2026-03-23 的动态日报。

---

### 📅 EasyClaw 项目日报 | 2026-03-23

#### 1. 今日速览
今日 EasyClaw 项目处于低活跃维护状态，过去24小时内无代码合并与新版本发布。核心动态集中在社区问题的修复闭环上，维护者响应迅速，成功解决了影响核心功能（computer-use）的关键部署问题。虽然无新功能特性推进，但通过修复 Issue 提升了现有版本的稳定性。项目整体处于功能稳定期，无活跃的开发分支讨论。

#### 2. 版本发布
*无更新*
今日未发布新版本。当前最新稳定版仍为 **v1.3.21.248**。

#### 3. 项目进展
今日无新的 PR（Pull Request）合并或关闭。项目进展主要体现在 Issue 生命周期的管理上：
*   **缺陷修复闭环**：针对 Windows 环境下 `kaitray.exe` 组件缺失导致 Computer-Use 功能不可用的问题完成了修复确认。
    *   影响范围：修复了 1.3.21.248 版本在 Windows 10 上的安装包遗漏问题，确保了“Computer Use”代理功能的后端服务能够正常启动。

#### 4. 社区热点
今日最热的讨论集中在核心功能的可用性恢复上：
*   **[CLOSED] kaitray.exe 组件缺失导致 computer-use 功能无法使用** ([#26](https://github.com/gaoyangz77/rivonclaw/issues/26))
    *   **热度**：尽管刚刚关闭，但该问题触及了项目的核心卖点——“AI Agent 操作电脑”的能力。
    *   **核心诉求**：用户反馈在尝试通过 Agent 操作微信时，因缺少关键执行文件 `kaitray.exe` 导致 WebSocket 连接失败。这表明用户对 EasyClaw 的自动化控制能力有极高需求，且对部署环境的完整性非常敏感。

#### 5. Bug 与稳定性
*   **严重性：高** - **[已解决] 核心组件安装失败**
    *   **问题**：在 `C:\Program Files (x86)\EasyClaw\` 路径下，`kaitray.exe` 文件缺失，导致 127.0.0.1:8765 本地服务无法启动。
    *   **现象**：Computer-Use 代理虽然配置已启用，但实际执行任务（如操作微信）时报错。
    *   **状态**：Issue 已关闭，推测该问题已在安装包构建流程中修复，或官方已提供手动补丁指引。建议受影响用户重新下载安装包或检查更新。

#### 6. 功能请求与路线图信号
今日无新的功能请求。
*   **观察**：从今日修复的 Bug 可以推断，项目当前的重点在于**确保 v1.3.x 分支在 Windows 环境下的健壮性**，尤其是本地计算机控制（Computer-Use）功能的稳定性，而非开发新特性。

#### 7. 用户反馈摘要
*   **痛点**：
    *   **部署完整性**：用户 Jerryzhao0313 指出安装包不完整，这直接影响第一印象和使用体验。
    *   **调试环境**：用户具备较强的排查能力（提供了环境变量、进程检查、文件搜索结果），表明用户群体偏技术向，但对“开箱即用”的体验有较高期待。
*   **场景**：用户正尝试将 EasyClaw 用于**桌面应用的自动化控制**（具体案例为操作微信），这是 AI Agent 落地的高价值场景。

#### 8. 待处理积压
*   **当前无积压**。
    *   截至发稿时，Open 状态的 Issues 为 0。项目维护者处理遗留问题的效率较高，无长期未响应的关键遗留问题。

---
*数据来源：GitHub.com/gaoyangz77/easyclaw | 生成时间：2026-03-23*

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*