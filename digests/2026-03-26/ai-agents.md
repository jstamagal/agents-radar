# OpenClaw 生态日报 2026-03-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-26 00:12 UTC

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

# OpenClaw 项目动态日报 (2026-03-26)

## 1. 今日速览
OpenClaw 项目今日呈现极高的活跃度，过去 24 小时内新增了 **500 个 Issues** 和 **500 个 Pull Requests**，显示出社区参与度处于爆发状态。项目方在今日紧急发布了 **v2026.3.24** 版本（含两个 Beta 前置版），重点解决了 **Node.js 22.14+ 兼容性**、**本地文件访问策略** 及 **OpenAI 接口适配** 等关键问题。社区讨论主要集中在最新版本引发的插件兼容性回归、UI 资源丢失以及代理认证问题，运维和开发重心正从新功能开发向稳定性修复倾斜。

## 2. 版本发布
今日共发布 3 个新版本，包含一次正式版发布和两次 Beta 测试：

*   **[v2026.3.24 (正式版)](https://github.com/openclaw/openclaw/releases/tag/v2026.3.24)**
    *   **Breaking Changes**: 涉及 Gateway 和 Agent 工具的内部逻辑调整（注：日志截断，具体细节未完全展示）。
    *   **核心变更**:
        *   **OpenAI 兼容性增强**: 新增 `/v1/models` 和 `/v1/embeddings` 端点，并在 `/v1/chat/completions` 和 `/v1/responses` 中转发显式模型覆盖，以支持更广泛的客户端和 RAG 场景。
        *   **Agents/Tools**: 优化 `/tools` 接口，展示当前可用的工具集。
    *   **相关贡献**: [@vincentkoc](https://github.com/vincentkoc)

*   **[v2026.3.24-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.3.24-beta.2)**
    *   **重要修复**:
        *   **安全沙箱**: 修复了出站媒体/本地文件的访问权限问题，确保其严格遵循配置的文件系统策略（`fs policy`）。这修复了当 `workspaceOnly` 关闭时文件发送失败，以及严格沙箱模式下文件泄露的风险。
        *   **运行时兼容**: 降低了对 Node.js 22 的最低版本要求至 `22.14`。

## 3. 项目进展
虽然过去 24 小时有 146 个 PR 被合并或关闭，但鉴于当前 Issues 数量激增（主要集中在 Bug 回归），项目目前的进展主要体现在对核心功能的持续维护和打磨上：
*   **Agent 会话管理**: PR [#54765](https://github.com/openclaw/openclaw/pull/54765) 修复了持久化会话在恢复后的状态一致性问题，并加强了子 Agent 的清理逻辑，防止孤儿进程堆积。
*   **生态兼容性**: 针对用户反馈的适配器问题，PR [#53846](https://github.com/openclaw/openclaw/pull/53846) 和 [#54759](https://github.com/openclaw/openclaw/pull/54759) 分别修复了 Mistral API 的请求参数冲突（解决 422 错误）和 OpenAI 兼容端点的 Session Key 前缀错误。
*   **安全与权限**: PR [#54694](https://github.com/openclaw/openclaw/pull/54694) 修复了 Gateway 静默重连时的权限升级漏洞。
*   **长期特性**: 社区贡献者正在推进 Linux 原生 GTK4 伴侣应用 ([#53905](https://github.com/openclaw/openclaw/pull/53905)) 和基于 CLS 理论的情节记忆系统 ([#54750](https://github.com/openclaw/openclaw/pull/54750))，显示项目在 Agent 智能化方向的长远布局。

## 4. 社区热点
今日讨论热度最高的几个话题反映了近期版本更新带来的阵痛期：
*   **[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (49 评论)
    *   **诉求**: 社区强烈呼吁补齐 Linux 和 Windows 平台的 GUI 应用短板，目前已有的 macOS/iOS/Android 应用无法覆盖桌面重度用户。
*   **[#52885 微信插件兼容性崩溃](https://github.com/openclaw/openclaw/issues/52885)** (40 评论)
    *   **核心矛盾**: 官方微信插件 `@tencent-weixin/openclaw-weixin` 在升级到 2026.3.22+ 后因找不到 `openclaw/plugin-sdk` 模块而无法加载，根源在于 ESM 导入路径变更。这影响了大量国内用户。
*   **[#52823 Control UI 资源丢失 (Regression)](https://github.com/openclaw/openclaw/issues/52885)** (34 评论)
    *   **现象**: 升级后 Web UI 报错 `Control UI assets not found`，用户被迫手动运行 `pnpm ui:build`。该 Issue 已关闭，但显示了近期升级流程的自动化问题。
*   **[#44851 Kimi Web Search 401 错误](https://github.com/openclaw/openclaw/issues/44851)** (29 评论)
    *   **问题**: 集成 Kimi 搜索工具时遭遇认证失败，但 Chat API 正常，涉及工具调用的 Auth 处理逻辑。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，且包含多个严重级别的回归问题，需重点关注：
*   **[严重] OAuth Token 认证混乱**:
    *   **[#53317](https://github.com/openclaw/openclaw/issues/53317)**: Gateway 在启动时会用过期的缓存状态覆盖新获取的 Token，导致 Codex 请求全部失败 (v2026.3.22 Regression)。
    *   **[#36982](https://github.com/openclaw/openclaw/issues/36982)** & **[#26322](https://github.com/openclaw/openclaw/issues/26322)**: Qwen 和 OpenAI 的 OAuth Token 刷新存在竞态条件和持久化失败问题，导致频繁重新认证。
*   **[高危] NPM 包文件缺失**:
    *   **[#54514](https://github.com/openclaw/openclaw/issues/54514)**: 发布的 npm 包缺少 `docs/reference/templates` 目录，导致 `openclaw onboard` 失败。
    *   **[#53244](https://github.com/openclaw/openclaw/issues/53244)**: WhatsApp 插件运行时模块缺失，导致插件加载后崩溃。
*   **[中等] Gateway 与 频道连接**:
    *   **[#44714](https://github.com/openclaw/openclaw/issues/44714)**: `openclaw logs --follow` 在 v2026.3.12+ 后握手超时。
    *   **[#53644](https://github.com/openclaw/openclaw/issues/53644)**: Discord WebSocket 1006 错误导致整个 Gateway 进程崩溃未捕获异常（Crash）。

## 6. 功能请求与路线图信号
从活跃的 Issues 和 PR 中可以看出用户对以下功能有强烈需求，部分已进入开发阶段：
*   **MCP (Model Context Protocol) 原生支持**: [#29053](https://github.com/openclaw/openclaw/issues/29053) 提出希望 OpenClaw 能作为 MCP 客户端连接外部服务器，以标准化工具调用生态。
*   **Control UI 多 Agent 切换**: [#32495](https://github.com/openclaw/openclaw/issues/32495) 请求在 Web UI 中增加切换不同 Agent 的功能，目前仅支持 `main` agent。
*   **Model Router 自动分级**: PR [#54562](https://github.com/openclaw/openclaw/pull/54562) 正在开发基于任务复杂度自动在低/中/高档模型间切换的路由功能，符合用户对成本与性能平衡的诉求。
*   **Agent 身份与信任验证**: [#49971](https://github.com/openclaw/openclaw/issues/49971) 提出了基于 DID/VC 的 Agent 身份验证 RFC，预示着未来可能在安全身份层面的投入。

## 7. 用户反馈摘要
*   **痛点**: "升级即破坏" 是今日最显著的用户情绪反馈。从 Control UI 崩溃、插件加载失败到 OAuth 认证失效，连续的版本变动（特别是 v2026.3.22 和 v2026.3.24）导致了生产环境的不稳定。
*   **性能**: Token 浪费问题 ([#9157](https://github.com/openclaw/openclaw/issues/9157)) 再次被提及，每次消息注入大量 Workspace 文件导致 93.5% 的 Token 预算被消耗，用户迫切需要优化上下文注入机制。
*   **平台支持**: Linux 和 Windows 用户感到被忽视，Issues #75 的高热度表明桌面端体验是提升社区满意度的关键一环。

## 8. 待处理积压
以下长期未解决的 Issue 仍需维护者关注，建议尽快排期：
*   **[#9157 (Token 浪费)](https://github.com/openclaw/openclaw/issues/9157)**: 标记为 `stale`，但严重影响多轮对话成本。
*   **[#26108 (Discord 语音无输出)](https://github.com/openclaw/openclaw/issues/26108)**: 问题持续存在，之前的修复 PR (#25861) 未能完全解决。
*   **[#15849 (Doctor 误杀 Gateway)](https://github.com/openclaw/openclaw/issues/15849)**: `openclaw doctor` 错误地将非 Gateway 服务识别为 Gateway 并建议终止，可能导致服务中断。
*   **[#14593 (Docker Brew 缺失)](https://github.com/openclaw/openclaw/issues/14593)**: 官方 Docker 镜像中缺少 `brew`，导致依赖 Homebrew 的技能安装失败。

---

## 横向生态对比

以下是关于 2026-03-26 AI 智能体与个人 AI 助手开源生态的横向对比分析报告。

---

# AI 智能体开源生态横向对比分析报告
**日期**: 2026-03-26
**分析师**: AI Ecosystem Observer

---

## 1. 生态全景
今日，个人 AI 助手开源生态呈现出**"爆发式增长伴随阵痛"**的显著特征。以 **OpenClaw** 为代表的头部项目处于功能快速迭代的"不稳定期"，大量新功能的引入引发了兼容性回调和稳定性挑战。与此同时，**LobsterAI** 和 **CoPaw** 等项目正在积极探索 **"商业化闭环"**与 **"多智能体协作"** 等前沿方向。整体来看，社区已不再满足于简单的对话机器人，而是强烈要求**多模态交互**、**本地化部署** 以及 **生产级的稳定性**，生态正从"玩具项目"向"生产力工具"加速转型。

---

## 2. 各项目活跃度对比

| 项目名 | Issues (24h) | PRs (24h) | Release 状态 | 健康度评估 | 关键动态摘要 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **+500** | **+500** | v2026.3.24 | 🔴 **高活/动荡** | 社区处于爆发状态，但因版本更新导致大量回归，Issues 积压严重，运维压力大。 |
| **LobsterAI** | - | **+87** | **2026.3.25** | 🟢 **活跃/成熟** | 商业化功能（付费/登录）上线，重点修复数据库与 Windows 兼容性，产品化程度最高。 |
| **CoPaw** | +50 | +49 | v0.2.0.post1 | 🟠 **高活/修复** | 多智能体架构重构中，修复 v0.2.0 严重 Bug（CPU 100%），处于大版本后的稳定期。 |
| **NanoBot** | +18 | +51 | 无 | 🟡 **活跃/重构** | 移除 LiteLLM 依赖引发连锁反应，快速修复供应链安全与参数兼容性问题。 |
| **Zeroclaw** | 39 | 50 | 无 | 🟢 **稳健/响应** | 关注流式输出回归与内存泄漏，维护者响应极快，代码质量较高。 |
| **PicoClaw** | - | **+459** | **v0.2.4** | 🟢 **极速迭代** | 专注于嵌入式/边缘场景，新增语音/多模态支持，合并效率极高（93%关闭率）。 |
| **NanoClaw** | 37 | 50 | 无 | 🟢 **稳健/运维** | 侧重容器化运维，修复了严重的调度死锁与数据库迁移问题，架构受到极简主义者好评。 |
| **IronClaw** | - | 36 | 无 | 🟠 **深度重构** | 处于 v2 架构重构期，核心是 Rust 编写的统一执行引擎，多租户隔离已基本完成。 |
| **ZeptoClaw** | 11 | 30 | 无 | 🟢 **体验优化** | 极度打磨细节，今日集中在 Telegram 体验 与 Docker 容器兼容性。 |
| **NullClaw** | 3 | 3 | 无 | 🟢 **平稳/维护** | 低活跃度，主要修复底层调度器内存泄漏，增加基础数学工具。 |
| **TinyClaw** | 0 | 3 (Merged) | 无 | 🟢 **架构升级** | 完成底层从 Bash 脚本到 Node.js 的迁移，大幅降低系统依赖，提升跨平台能力。 |
| **Moltis** | - | - | 无 | 🟡 **技术债清理** | 中等活动，主要工作在于底层依赖升级 和精简代码。 |
| **EasyClaw** | 0 | 0 | 无 | ⚫ **停滞** | 过去 24 小时无任何活动。 |

---

## 3. OpenClaw 在生态中的定位

*   **社区规模**: OpenClaw 拥有最大的用户基数和社区噪音（Issues/PRs 数量级远超其他），是目前事实上的**"行业标准参考"**。
*   **优势**:
    *   **生态丰富度**: 拥有最广泛的插件生态和平台适配（macOS/iOS/Android/官方 Linux 支持缺失但社区有方案）。
    *   **功能前沿性**: 率先引入 `Control UI`、Agent 协作等高级概念。
*   **技术路线**: 采用 **Node.js/TypeScript** 全栈生态，强调 Gateway 架构与插件化。
*   **当前挑战**:
    *   **稳定性债务**: 正如日报所示，OpenClaw 陷入了"增加功能 -> 引入 Bug -> 紧急修复"的循环，今日的 **OAuth Token 混乱** 和 **NPM 包丢失** 问题显示了其在工程化管理上的巨大压力。
    *   **与竞品对比**: 相比于 **Zeroclaw** 的代码稳健性和 **NanoClaw** 的极简架构，OpenClaw 显得臃肿且脆弱。但相比于 **PicoClaw** (边缘侧) 或 **LobsterAI** (商业侧)，OpenClaw 依然是功能最全面的通用方案。

---

## 4. 共同关注的技术方向

今日有多个项目不约而同地在以下方向发力，显示了全生态的共同痛点与需求：

| 技术方向 | 涉及项目 | 具体诉求与动态 |
| :--- | :--- | :--- |
| **模型参数兼容性** | **OpenClaw, NanoBot, PicoClaw, Zeroclaw** | OpenAI 更改 API 标准（弃用 `max_tokens`，改用 `max_completion_tokens`）导致全生态适配阵痛。NanoBot 报错 VolcEngine/Qwen 参数错误；PicoClaw 用户遭遇 GLM4 路由失败。 |
| **本地化/多模态** | **PicoClaw, ZeptoClaw, LobsterAI** | **PicoClaw** 发布了语音 TTS/ASR 重构版；**ZeptoClaw** 正在集成浏览器工具；**LobsterAI** 用户请求视觉流水线。社区迫切希望 Agent 能"看"和"听"。 |
| **多平台集成** | **Zeroclaw, PicoClaw, NanoClaw** | 用户强烈呼吁补齐 **Linux/Windows 桌面端**短板 (Zeroclaw #75, PicoClaw #190)，或接入 **企业微信/钉钉** (PicoClaw #1210, LobsterAI #691)。 |
| **供应链安全** | **NanoBot, Moltis, TinyClaw** | **NanoBot** 紧急移除 LiteLLM（凭据窃取风险）；**TinyClaw** 重构 CLI 以移除 Shell 依赖；**Moltis** 升级 `reqwest` 库。安全意识在提升。 |
| **Docker/部署优化** | **Zeroclaw, ZeptoClaw, NanoClaw** | **Zeroclaw** 用户请求 Full Docker 镜像；**ZeptoClaw** 修复了 Docker/Podman 的检测冲突；**NanoClaw** 修复了 Sidecar 在容器中的异常退出。 |

---

## 5. 差异化定位分析

*   **OpenClaw (全能型/生态核心)**: 定位类似 Android 系统，功能大而全，社区最活跃，但系统开销大，Bug 多。
*   **LobsterAI (商业型/面向小白)**: 定位类似 "Notion AI"，强调 UI 美观、开箱即用和付费服务，目标用户是知识工作者而非极客。
*   **PicoClaw (边缘型/嵌入式)**: 定位类似 "树莓派助手"，侧重本地运行、低资源占用和多模态输入，适合极客和物联网场景。
*   **NanoClaw (极简型/运维向)**: 定位类似 "Serverless 容器"，侧重于极简架构、Docker/K8s 部署和自动化脚本，受运维人员喜爱。
*   **IronClaw (性能型/底层硬核)**: 使用 **Rust** 重写核心引擎，追求极致的性能与安全性，定位企业级高性能 Agent 基础设施。
*   **CoPaw (协作型/多智能体)**: 专注于解决多个 Agent 之间的通信与协作问题，试图建立 Agent 社会的标准协议。

---

## 6. 社区热度与成熟度

*   **第一梯队 (爆发期)**: **OpenClaw**, **PicoClaw**, **CoPaw**。
    *   特征：日 PR 数 >40，Issue 激增，处于大版本重构或功能快速添加期，Bug 率高，但创新力强。
*   **第二梯队 (稳定期)**: **Zeroclaw**, **ZeptoClaw**, **NanoClaw**。
    *   特征：Issue 关闭率高，响应速度快，PR 侧重于修 Bug 和优化体验，适合生产环境部署。
*   **第三梯队 (重构/转型期)**: **IronClaw**, **NanoBot**, **Moltis**。
    *   特征：正在经历底层架构的大换血（如 IronClaw 的 v2 引擎，NanoBot 的去 LiteLLM），短期不稳定性增加，长期看好。
*   **第四梯队 (商业化成熟)**: **LobsterAI**。
    *   特征：已拥有稳定版本和付费体系，迭代节奏平稳，更关注产品体验而非底层技术狂奔。

---

## 7. 值得关注的趋势信号

1.  **"Agent 调试"成为最大痛点**:
    *   多个项目（CoPaw #2218, LobsterAI #859）出现 Agent 进入死循环或 CPU 100% 占用的问题。用户开始强烈呼吁 **"Local Thinking" (Moltis #490)** 和 **"可视化的思维链"**，说明开发者不仅想要结果，更想理解 Agent 的推理过程以进行调试。
2.  **OpenAI 标准的"霸权"与"反噬"**:
    *   几乎所有项目都在被迫跟随 OpenAI 的 API 变更（`max_tokens` -> `max_completion_tokens`）。这表明虽然大模型厂商众多，但 **OpenAI 兼容层** 依然是事实上的标准接口，任何偏离都会导致巨大的维护成本。
3.  **从 SaaS 回归本地**:
    *   **PicoClaw** (Android/本地部署) 和 **TinyClaw** (简化依赖) 的热度，以及 **NanoBot** (移除云依赖) 的举动，都显示了一个重要趋势：出于隐私、成本和延迟考虑，**端侧/本地 Agent** 的需求正在显著回升。
4.  **多模态是下半场的关键**:
    *   今日 PicoClaw 的音频重构和 ZeptoClaw 的浏览器工具集成获得了极高的关注度。纯文本聊天的 Agent 已经进入红海竞争，能处理**语音、图像、网页**的 Agent 将是下一个增长点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-26)

## 📊 今日速览
今日 NanoBot 项目处于**极高活跃度**状态，社区在过去 24 小时内处理了大量提交与讨论。项目正处于关键的技术重构期，核心动态集中在**移除 LiteLLM 依赖后的适配工作**以及**供应链安全修复**。
- **数据概览**：共产生 18 条新 Issue（已有 5 条快速关闭），51 条新 PR（15 条已合并），代码提交与讨论热度极高。
- **核心事件**：社区紧急移除了 LiteLLM 依赖以应对潜在的安全风险，导致大量与其兼容性相关的 Bug 和新 Provider（如 AWS Bedrock, StepFun）的接入请求涌现。
- **健康状况**：虽然 Issue 数量较多，但维护者响应迅速（多个 Bug 在当天即被关闭或修复），项目推进稳健。

---

## 🚀 版本发布
**无**
> 目前未有新版本发布，但从 PR 合并速度推测，可能正在酝酿一个包含安全修复和 Provider 重大调整的补丁版本。

---

## 🏗️ 项目进展
今日合并/关闭的 PR 主要集中在稳定性提升和功能完善，项目在多用户环境安全、消息重试机制及多语言 Provider 支持方面迈出了重要一步。

- **[Closed] 核心安全修复：移除 LiteLLM 依赖及相关代码清理**
  - **关联**: Issue #2493
  - **进展**: 随着移除 `litellm_provider.py`，社区紧急合并了多项 PR 以填补空白，包括原生 AWS Bedrock 支持和 Step Fun 接入，确保原有功能不受影响。
  
- **[Merged] 消息发送稳定性增强 (PR #2478)**
  - **内容**: 引入了指数退避的消息重试机制。新增 `send_max_retries` 配置（默认 3 次），解决了 Telegram 等渠道在不稳定网络下的发送失败问题，显著提升了生产环境的可靠性。

- **[Merged] 多用户环境死锁修复**
  - **关联**: Issue #2456
  - **进展**: 修复了在多用户 Linux 环境下 `nanobot onboard` 命令导致系统死锁和 SSH 锁定的严重问题，这对企业级部署至关重要。

- **[Merged] Tool 参数类型自动转换 (PR #1610)**
  - **进展**: 增强了 LLM 调用工具时的鲁棒性，自动将参数类型转换为符合 Schema 的格式，减少了因模型输出不规范导致的执行失败。

---

## 🔥 社区热点
今日讨论焦点集中在 **LiteLLM 移除后的生态重建** 以及 **模型参数兼容性** 问题。

1. **[Issue #2443] LiteLLM 被隔离/移除事件**
   - **链接**: [HKUDS/nanobot#2443](https://github.com/HKUDS/nanobot/issues/2443)
   - **热度**: 🔥 (6 评论)
   - **分析**: 由于 LiteLLM 被指包含窃取凭据的风险，项目决定将其移除。这引发了连锁反应，用户反馈无法使用 LangChain，部分模型调用报错。这是今日所有技术变动的根本原因。

2. **[Issue #2462 & #2476] `max_tokens` vs `max_completion_tokens` 参数之争**
   - **链接**: [HKUDS/nanobot#2462](https://github.com/HKUDS/nanobot/issues/2462), [HKUDS/nanobot#2476](https://github.com/HKUDS/nanobot/issues/2476)
   - **热度**: 🔥 (多关联 Issue)
   - **分析**: OpenAI 新版 API 弃用 `max_tokens` 转 `max_completion_tokens`，导致大量兼容性报错（如 VolcEngine, Qwen）。社区已迅速提交修复 PR (PR #2491)，试图平衡 OpenAI 标准与其他兼容性接口的差异。

3. **[PR #2486] Discord 频道重构：使用 `discord.py`**
   - **链接**: [HKUDS/nanobot#2486](https://github.com/HKUDS/nanobot/pull/2486)
   - **热度**: 🔥
   - **分析**: 社区正计划将 Discord 频道的底层实现从自研 WebSocket 迁移至成熟的 `discord.py` 库。这意味着依赖增加，但长期维护性和协议兼容性将大幅提升。

---

## 🐛 Bug 与稳定性
今日报告了多个高严重度的 Bug，主要集中在模型调用兼容性和系统稳定性上。

- **[High] OpenAI 兼容接口参数错误导致调用失败**
  - **来源**: Issue #2462, #2476, #2469
  - **现象**: Qwen/VolcEngine 等模型报错 `InvalidParameter`，提示 `max_tokens` 或 `function.arguments` 格式错误。
  - **状态**: 已有修复 PR #2491, #2494 待审核。

- **[High] 架构缺陷：Prompt 前缀不一致**
  - **来源**: Issue #2463
  - **现象**: 历史记录持久化的格式与发送给模型的实际 Prompt 不一致，导致 OpenAI Prompt Caching 机制失效，成本增加。
  - **状态**: 开放中，属于深层次架构问题。

- **[Medium] OpenAI Codex 缓存 Key 不稳定**
  - **来源**: Issue #2440
  - **现象**: `prompt_cache_key` 使用每轮 Hash 而非会话级 Key，导致缓存无法命中。
  - **状态**: 开放中。

- **[Medium] `exec` 工具产生僵尸进程**
  - **来源**: Issue #2405 (PR #2410)
  - **现象**: 频繁使用 exec 工具导致僵尸进程堆积。
  - **状态**: 已有修复 PR (#2410)。

---

## 💡 功能请求与路线图信号
用户正在积极推动 NanoBot 接入更多模型和增强交互能力。

- **[AWS Bedrock 原生支持] (PR #2485)**
  - **链接**: [HKUDS/nanobot#2485](https://github.com/HKUDS/nanobot/pull/2485)
  - **信号**: 为了替代被移除的 LiteLLM，社区迫切需要原生的 AWS Bedrock 支持。该 PR 已实现，预计很快合并。

- **[Step Fun (阶跃星辰) 接入] (Issue #2470 & PR #2472)**
  - **链接**: [HKUDS/nanobot#2472](https://github.com/HKUDS/nanobot/pull/2472)
  - **信号**: 国内模型厂商 Step Fun 的支持呼声很高，PR 已合并。

- **[用户主动技能注入] (Issue #2489 & PR #2488)**
  - **链接**: [HKUDS/nanobot#2488](https://github.com/HKUDS/nanobot/pull/2488)
  - **信号**: 用户希望拥有更多控制权，能通过 `/skill` 命令强制激活特定技能，而不是完全依赖 Agent 的自动决策。这是一个提升用户体验的重要方向。

- **[OpenClaw 通用插件桥接] (Issue #2484)**
  - **链接**: [HKUDS/nanobot#2484](https://github.com/HKUDS/nanobot/issues/2484)
  - **信号**: 社区希望能复用 OpenClaw 生态的插件，提议增加一个通用适配层。

---

## 🗣️ 用户反馈摘要
- **痛点**：
  - **频繁的破坏性变更**：部分用户反馈从 1.0.4 升级后出现 Telegram 消息重复 (Issue #2208) 或多用户死锁 (Issue #2456)，对稳定性表示担忧。
  - **兼容性噩梦**：OpenAI 参数 (`max_tokens`) 的变更导致多个第三方模型（如 Qwen, Mistral）不可用，用户感到 "In OpenAI's house, one must follow OpenAI's rules"（被迫适配 OpenAI 标准）。
  
- **好评**：
  - **快速响应**：尽管 Bug 多，但维护者在当天就关闭了死锁、参数错误等关键 Issue，响应速度获得认可。
  - **功能丰富**：对新增的 `Step Fun` 支持和潜在的 `/skill` 命令表示欢迎。

---

## ⏳ 待处理积压
- **[Long-standing] Gemini API Key 配置问题 (Issue #144)**
  - 创建于 2 月，至今未彻底解决。用户在配置 Gemini 模型时遇到 `gemini_api_key` 缺失错误，且无法通过 OpenRouter 正确路由，需关注本地代码修改指引的准确性。
- **[Critical] WeChat 群组人数限制 (Issue #2467)**
  - 最新报告，可能涉及企业微信/微信群机制，需评估是否影响大规模部署。
- **[Feature] 多语言文档 (PR #2232)**
  - 仍在进行中，期待完整的文档体系落地以降低新用户门槛。

---
**分析生成时间**: 2026-03-26  
**数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-26)

## 1. 今日速览
Zeroclaw 项目今日继续保持极高的活跃度与社区响应速度，在过去 24 小时内处理了 **89** 个代码与议题变更（39 个 Issues + 50 个 PRs），显示出强劲的开发动能。核心维护者专注于解决 **v0.6.x** 系列版本中关键的稳定性与回归问题，特别是 WebSocket 流式输出中断和内存泄漏隐患。虽然今日没有新版本发布，但大量针对 Bug 修复的 PR 已提交并待合并，预示着下一个补丁版本（预计 v0.6.3）即将到来。

## 2. 版本发布
*无新版本发布。*
*当前稳定版本涉及 v0.6.1/v0.6.2，主要处于修复维护阶段。*

## 3. 项目进展
今日代码合并与推进主要体现在以下关键领域：
*   **稳定性修复:**
    *   **[PR #4675](https://github.com/zeroclaw-labs/zeroclaw/pull/4675)**: 修复了 v0.6.1 中严重的流式输出回归问题。此前所有模型通过 `/ws/chat` 返回 "unknown does not support streaming"，此 PR 通过在 `turn_streamed` 中调用 `stream_chat` 并增加错误回退逻辑解决了该问题。
    *   **[PR #4706](https://github.com/zeroclaw-labs/zeroclaw/pull/4706)**: 解决了对话历史记录的内存无界增长问题。引入 LRU (最近最少使用) 缓存策略，将活跃发送者限制在 1024 个，防止长期运行导致 OOM。
*   **Matrix 通道增强:**
    *   **[PR #4700](https://github.com/zeroclaw-labs/zeroclaw/pull/4700)**: 修复了 Matrix 多房间监听功能，现在能正确响应 `allowed_rooms` 中的所有配置，而非仅限于单一 `room_id`。
    *   **[PR #4707](https://github.com/zeroclaw-labs/zeroclaw/pull/4707)**: 实现了 Matrix `device_id` 的自动生成与持久化，消除了手动配置的痛点，改善了 E2EE 体验。

## 4. 社区热点
*   **[#3642 Provide a "full" docker image](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)** (评论: 4, 👍: 2)
    *   **核心诉求:** 社区强烈呼吁提供一个包含所有功能（如 WhatsApp, Matrix 等）的完整 Docker 镜像。
    *   **背景:** 当前默认镜像为了节省内存禁用了部分功能，导致非技术用户在使用特定通道时遭遇门槛（需要重新编译）。
*   **[#3655 & #4523 Streaming Errors](https://github.com/zeroclaw-labs/zeroclaw/issues/3655)** (评论: 3+)
    *   **核心讨论:** 关于 Web Dashboard 和 Gateway 报错 "unknown does not support streaming" 的问题集中爆发，证实这是 v0.6.1 的主要回归痛点，目前已有修复 PR (#4675)。
*   **[#4657 Matrix channel friction tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)** (评论: 2)
    *   **核心诉求:** 这是一个汇总 Issue，集中反映了 Matrix 通道集成的摩擦点，特别是 E2EE 和响应流式化问题，显示了社区对 Matrix 集成质量的高度关注。

## 5. Bug 与稳定性
今日报告的关键 Bug 按严重程度排列：
*   **[S0 - 严重安全/数据风险]**
    *   **[#4672 Groq api key is not masked](https://github.com/zeroclaw-labs/zeroclaw/issues/4672):** Groq API 密钥在 UI 中未正确掩码，存在泄露风险。
    *   **[#4478 Tool execution fails](https://github.com/zeroclaw-labs/zeroclaw/issues/4478):** (Closed) Agent 显示使用了工具但实际未执行，任务完全失效。
*   **[S1 - 工作流阻塞]**
    *   **[#4652 install.sh fails on docker](https://github.com/zeroclaw-labs/zeroclaw/issues/4652):** 在 WSL Ubuntu 环境下执行 `install.sh --docker` 失败。
    *   **[#4644 web chat amnesia](https://github.com/zeroclaw-labs/zeroclaw/issues/4644):** Web 聊天在仅两轮对话后丢失记忆（上下文）。
*   **[S2 - 行为降级]**
    *   **[#4630 QQ channel WebSocket reconnection](https://github.com/zeroclaw-labs/zeroclaw/issues/4630):** QQ 频道频繁断连重连，导致消息发送失败。
    *   **[#4708 WhatsApp "unknown" device name](https://github.com/zeroclaw-labs/zeroclaw/issues/4708):** WhatsApp Web 设备名称显示为 unknown 并被标记为潜在诈骗。

## 6. 功能请求与路线图信号
*   **[#3642 Full Docker Image](https://github.com/zeroclaw-labs/zeroclaw/issues/3642):** 鉴于高赞和高讨论度，项目方可能会考虑发布 `-full` 变体的 Docker 镜像或提供更清晰的编译文档。
*   **[#4668 MariaDB memory support](https://github.com/zeroclaw-labs/zeroclaw/issues/4668):** 用户请求支持 MariaDB 作为记忆后端。考虑到 **[PR #4714](https://github.com/zeroclaw-labs/zeroclaw/pull/4714)** 刚刚移除了 PostgreSQL 支持以简化架构并依赖 SQLite，引入 MariaDB 可能与当前的轻量化架构路线相悖，通过概率较低，除非有强企业需求。
*   **[#4669 CLI for encrypted secrets](https://github.com/zeroclaw-labs/zeroclaw/issues/4669):** 增强运维安全性，建议增加 `zeroclaw secret set` 命令，避免明文配置。

## 7. 用户反馈摘要
*   **痛点 - 部署门槛:** 用户反馈 `zeroclaw onboard` 引导流程中选择的通道（如 Matrix, WhatsApp）在后续的 `install.sh` 编译中未自动启用对应 feature，导致功能缺失 ([#4654](https://github.com/zeroclaw-labs/zeroclaw/issues/4654))。
*   **痛点 - 硬件兼容性:** 树莓派 用户在编译时遭遇 OOM，指出 README 中宣称的低内存运行与实际编译资源需求有出入 ([#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704))。
*   **痛点 - Matrix 体验:** Matrix 集成虽然功能丰富，但配置极其复杂，E2EE 恢复、多房间监听均存在“摩擦力”，需要更智能的默认行为。

## 8. 待处理积压
*   **[#4166 feat(interop): add A2A protocol](https://github.com/zeroclaw-labs/zeroclaw/pull/4166):** (Open since Mar 21) 这是一个重大的架构性 PR，引入 Agent-to-Agent 通信协议。虽然已提出多日但尚未合并，可能需要更多的代码审查和测试验证，建议重点关注。
*   **[#4353 feat(tool): add GitHub integration](https://github.com/zeroclaw-labs/zeroclaw/pull/4353):** (Open since Mar 23) GitHub 原生集成功能，开发者社区期待已久，目前仍在开发中。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-03-26)

## 1. 今日速览
PicoClaw 项目在 2026-03-26 迎来了**极高的开发活跃度**。过去 24 小时内，项目处理了 **459** 个代码与问题更新（Issues + PRs），表现出极高的维护效率：超过 93% 的待办事项已被关闭。主要更新集中在**多模态交互（语音 TTS/ASR）**、**配置热重载**以及**子智能体错误处理**的重构上。同时，社区对于**多通道集成**（特别是微信和企业微信）以及**本地 LLM 集成**（如 Ollama）的讨论热度不减。

---

## 2. 版本发布
### 📦 v0.2.4 (最新发布)
**发布时间**: 2026-03-26
**核心亮点**:
*   **用户体验 (UX)**: 引入了工作区配置文件的**热重载**功能（docs: note that workspace config files are hot-reloaded），用户无需重启服务即可应用配置变更。
*   **核心重构**: 大幅改进了 `SubTurn`（子回合）的错误处理机制和日志记录，提升了多智能体协作时的稳定性。
*   **可配置性**: 新增了可配置的日志记录器，允许开发者更灵活地控制系统日志输出。

---

## 3. 项目进展
今日合并的 243 个 PR 和处理的 170 个 Issues 显示项目正在快速迭代，主要进展如下：

*   **🎵 交互能力跃升 (多模态/语音)**:
    *   **PR #1939**: 引入了重大的音频功能重构。PicoClaw 现已支持**生成语音消息**并通过 Discord、Telegram 和 **WeChat (微信)** 发送。这标志着项目从纯文本向多模态 AI 助手的重要转型。
*   **🔧 Agent 架构深化**:
    *   **PR #2022**: 修复了命名智能体在使用消息工具发送回复时的**重复消息**问题，优化了消息路由逻辑。
    *   **PR #2020**: 实现了子智能体对运行时工具注册表的继承，解决了子 Agent 无法访问父 Agent 动态工具的隔离问题，增强了 Multi-agent 系统的协同能力。
*   **🛠️ 运维与部署**:
    *   **PR #2023**: 为 Docker 镜像添加了 `bootstrap` 初始化脚本支持，允许容器内的 Agent 安装持久化工具。
    *   **PR #2016**: 改进了针对 Anthropic、ZhipuAI 和 GLM 等模型的**上下文溢出检测**，增加了对带下划线错误码的兼容性，减少了因 Token 超限导致的崩溃。

---

## 4. 社区热点 (Top Discussions)
今日讨论度最高的话题集中在**平台兼容性**和**移动端/便携部署**上。

*   **🔥 [Issue #190] Android 手机安装教程** (11 comments)
    *   **链接**: [sipeed/picoclaw#190](https://github.com/sipeed/picoclaw/issues/190)
    *   **分析**: 尽管项目名为 "Pico" (暗示轻量/边缘)，但在 Android 上部署仍缺乏文档。用户迫切希望利用算力强的手机运行本地 Agent，反映了**边缘计算 AI** 的强烈需求。
*   **🔥 [Issue #680] GLM 默认 API Base 路由错误** (11 comments)
    *   **链接**: [sipeed/picoclaw#680](https://github.com/sipeed/picoclaw/issues/680)
    *   **分析**: 智谱 AI (GLM) 是国内热门模型。该 Bug 导致配置失效，虽已关闭，但说明**国产模型适配**的细节错误是用户痛点。
*   **🔥 [Issue #1210] 配置企业微信机器人** (11 comments)
    *   **链接**: [sipeed/picoclaw#1210](https://github.com/sipeed/picoclaw/issues/1210)
    *   **分析**: 国内用户对于将 PicoClaw 接入办公软件（企业微信）有极大需求，文档缺失阻碍了落地。

---

## 5. Bug 与稳定性
今日报告的 Bug 多数已在最新代码中得到修复，但以下问题需关注：

*   **🔴 严重回归**:
    *   **[#2005] (via PR #2024)**: v0.2.4 引入了一个回归问题，导致通过 Web 界面更新 **Discord Bot Token** 失败。
        *   *状态*: 已有修复 PR ([#2024](https://github.com/sipeed/picoclaw/pull/2024))，待合并。
*   **🟠 功能兼容性**:
    *   **[#79] Gemini 3 Flash/Preview 调用失败**: 由于 Google 强制要求 `thought_signature`，导致工具调用失败。虽然 Issue 已关闭，但用户反馈显示在特定模型版本上可能仍需验证。
    *   **[#430] Ollama 本地模型超时**: 120秒的固定 HTTP 超时导致大模型推理中断。建议用户关注后续版本是否支持动态超时配置。
*   **🟢 配置困扰**:
    *   多个 Issues (如 #96, #109) 提及 OpenAI 兼容接口（如 Ollama/GLM4）的 **"No API Key"** 报错。这是因为本地模型往往不需要 Key，但程序强制校验。

---

## 6. 功能请求与路线图信号
从今日活跃的 PR 和 Issues 中，我们可以窥见未来的路线图：

*   **✅ 即将落地**:
    *   **多消息发送**: **PR #2008** 引入了 `<|[SPLIT]|>` 标记，允许 LLM 在一次回复中发送多条独立消息。这对于长文总结或分步指令非常有用。
    *   **WeChat/企微支持**: 随着音频重构 PR (#1939) 的推进，微信生态的完整支持（语音+文本）已是优先级极高的任务。
*   **📅 长期需求**:
    *   **自升级**: **Issue #618** 请求添加 `self-upgrade` 支持，以便用户能一键更新二进制文件或容器，这对快速迭代的开源项目至关重要。
    *   **多用户隔离**: **Issue #995** 提出单实例多用户支持（共享 Agent 但隔离 Memory/Session），这是从个人玩具转向家庭/小团队共享服务的必经之路。
    *   **本地模型无缝集成**: 用户对 **PicoLM** (#1006) 和 **Ollama** (#75) 的呼声很高，未来的迭代可能会进一步简化 `api_key` 的校验逻辑。

---

## 7. 用户反馈摘要
*   **痛点**:
    *   **配置复杂**: 多数 Issue 源于 `config.json` 配置错误（如 API Base、Token 设置）。文档（PR #1515）正在改进，但默认值的智能提示仍有待加强。
    *   **日志/反馈不明确**: 如内存优化时的提示过于含糊 (#580)，让用户误以为程序卡死。
*   **赞扬**:
    *   **极速响应**: 社区对 Issue 的关闭速度（今日 170 条）表示满意，给予了多个 👍。
    *   **本地化能力**: 用户非常喜欢支持国产大模型（DeepSeek, GLM, MiniMax）的能力。

---

## 8. 待处理积压
以下 Issues 虽然今日有更新，但长期处于 OPEN 或反复讨论状态，建议维护者优先评估：

*   **[Issue #161] Gemini 3 兼容性**: 涉及到底层协议变更，影响面广。
*   **[Issue #1270] Telegram Forum Topics**: 这是一个高优先级的需求，用于将不同的对话隔离到不同的 Threads 中，对于管理多个对话至关重要。
*   **[Issue #738] User Hooks**: 允许用户在工具执行前后插入自定义脚本，这是高级用户实现 "自我改进 Agent" 的基础。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-26)

## 📊 今日速览
今日 NanoClaw 项目展现了极高的活跃度与维护响应速度。过去 24 小时内共有 87 条更新（37 条 Issues，50 条 PRs），**关闭率高达 70% 以上**，显示出维护团队正在积极清理积压并修复关键 Bug。核心开发集中在**调度系统幂等性**、**多平台集成支持**以及**安全审计修复**方面。虽然没有新版本发布，但大量 Bug 修复 PR 的合并表明项目正稳步迈向下一个稳定版本。

## 📦 版本发布
*无新版本发布。*

## 🚀 项目进展
今日合并的 PR 主要聚焦于修复核心逻辑错误与完善文档，以下是关键进展：

*   **CLI 工具增强**：合并了 `claw ps` 子命令 (#1408)，将容器管理功能集成进主 CLI，提升了操作便捷性（代码由 Bash 转为原生 Python）。
*   **关键 Bug 修复**：
    *   **Telegram 数据库迁移修复**：PR #1367 合并，修复了将所有 Telegram 对话错误标记为群组 (`is_group=1`) 的问题，默认值改为 DM (`0`)，解决了历史数据回填错误。
    *   **Agent 运行时逻辑**：PR #1453/1452/1450 针对任务脚本指令进行了改进，引导 Agent 使用 `schedule_task` 而非内联 Bash 循环，并补全了非主群组的模板文档。
*   **工作流优化**：PR #1370 已关闭，修复了 Fork 仓库因缺少 Secrets 导致的 CI 失败问题，改进了 `bump-version` 和 `merge-forward` 的工作流稳定性。

## 🔥 社区热点
*   **调度任务幂等性讨论**
    *   **[Issue #783](https://github.com/qwibitai/nanoclaw/issues/783)**: 报告 `schedule_task` 缺乏幂等性键，导致同一逻辑任务在不同会话中重复累积，可能引发资源泄露。该 Issue 今日虽然关闭，但评论活跃，暴露了调度系统在长期运行中的状态管理痛点。
*   **平台兼容性质疑**
    *   **[Issue #1075](https://github.com/qwibitai/nanoclaw/issues/1075)**: 社区指出文档与官网关于 Linux 支持的描述不一致。这种“文档滞后”现象在快速发展的开源项目中常见，但也反映出 Linux 支持可能尚处于实验阶段，导致用户困惑。

## 🐛 Bug 与稳定性
今日报告了多个影响部署和核心功能的 Bug，按严重程度排序：

1.  **[Critical] 安全审计漏洞**
    *   **[Issue #1431](https://github.com/qwibitai/nanoclaw/issues/1431)**: 报告了 1 个关键和 2 个高危级别问题，涉及 `exec()` 的命令注入和竞态条件。目前 Issue 状态为 CLOSED，推测已通过内部修复或工作流处理，需确认代码层面是否已合并补丁。
2.  **[High] Sidecar 服务异常退出**
    *   **[Issue #1454](https://github.com/qwibitai/nanoclaw/issues/1454)**: 当 `WATCH_CONTAINER` 或 `WATCH_CONFIGS` 未设置时，Sidecar 进程会立即退出并连带取消其他任务（如日志追踪），导致守护进程崩溃。这是典型的环境变量配置容错性不足。
3.  **[High] Linux 部署连环 Bug**
    *   **[Issue #1445](https://github.com/qwibitai/nanoclaw/issues/1445)**: 用户在 Ubuntu/Hetzner 环境下遭遇 6 个 Bug，包括“消息静默丢失”（LID JID 翻译失败）、防火墙阻断和 .env 损坏。这表明 Linux 生产环境的适配性仍有较大提升空间。
4.  **[Medium] 只读文件系统写入错误**
    *   **[Issue #1451](https://github.com/qwibitai/nanoclaw/issues/1451)**: Watcher 健康检查工具尝试写入只读挂载点 (`/workspace/extra/watcher/`)，导致检查失败。
5.  **[Medium] Agent 源码缓存不刷新**
    *   **[Issue #1361](https://github.com/qwibitai/nanoclaw/issues/1361)**: 已关闭。Agent-runner 的源码缓存仅在目录不存在时创建，后续代码变更无法同步到已存在的群组会话中。这是一个影响开发迭代效率的严重逻辑缺陷，目前已解决。

## 💡 功能请求与路线图信号
社区正在推动向更智能和更便捷的方向发展：

*   **会话重置功能**
    *   **[Issue #1211](https://github.com/qwibitai/nanoclaw/issues/1211)**: 用户请求添加 `/new` 命令以重置会话上下文，避免 Token 浪费和上下文污染。该请求获得了 2 个 👍，属于高优先级体验优化。
*   **高级内存架构**
    *   **[PR #1256](https://github.com/qwibitai/nanoclaw/pull/1256)**: 正在审查中的 PR 提出集成 `mem0` (Qdrant + Neo4j) 为 Agent 提供持久化图记忆。这标志着项目正从简单的脚本执行向具备长期记忆的智能体演进。
*   **本地化模型支持**
    *   **[PR #1331](https://github.com/qwibitai/nanoclaw/pull/1331)**: 正在添加 Ollama MCP 技能，允许 Agent 调用本地 Ollama REST API，降低对云 API 的依赖，符合隐私和成本控制趋势。

## 🗣️ 用户反馈摘要
*   **架构赞誉**: 用户 *JachinShen* 在 **[Issue #1184](https://github.com/qwibitai/nanoclaw/issues/1184)** 中高度评价了项目的极简主义理念，认为它是比臃肿框架更轻量、更安全的替代方案，这也是许多用户选择 NanoClaw 的核心原因。
*   **部署痛点**: 用户 *lazer-sketch* 在 **[Issue #1445](https://github.com/qwibitai/nanoclaw/issues/1445)** 中详细描述了在 Linux 首次部署时遇到的挫折，特别是消息丢失问题，反映出虽然核心功能强大，但“最后一公里”的部署引导和环境兼容性仍需打磨。
*   **交互体验**: 用户 *thamam* 在 **[Issue #1440](https://github.com/qwibitai/nanoclaw/issues/1440)** 中提到，长时间运行任务时缺乏中间反馈，用户无法区分 Agent 是在“思考”还是“卡死”，建议增加心跳或进度输出。

## 📝 待处理积压
以下 Issue 长期开放且影响较大，建议维护者优先关注：
*   **K8s 环境部署挑战**: **[Issue #1184](https://github.com/qwibitai/nanoclaw/issues/1184)** (Open, 3月17日创建) - 涉及在受限 K8s 环境中的运行问题。
*   **全局触发器逻辑缺陷**: **[Issue #1141](https://github.com/qwibitai/nanoclaw/issues/1141)** (Closed but logic may persist?) - 每个群组的独立 `trigger_pattern` 被全局配置覆盖，导致多群组场景下功能失效。今日显示为 CLOSED，需确认是否已彻底修复。
*   **分支合并冲突**: 多个 skill-maintenance 自动化 Issue (如 #1437, #1436) 显示 `skill/apple-container` 和 `skill/native-credential-proxy` 等分支持续存在合并冲突，阻碍了主分支代码向技能分支的同步。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-03-26)

## 📊 今日速览
NullClaw 项目在过去 24 小时内保持了**中等活跃度**，共处理了 6 个代码仓库事件（3 个新 Issues，3 个 PR 变动）。
今日关注点集中在**平台生态扩展**与**核心稳定性修复**两方面。社区不仅提出了集成微信和视觉能力的增强需求，还有贡献者提交了底层调度器的内存泄漏与竞态条件修复（PR #689），这显示项目在横向扩展能力的同时，依然注重底层系统的健壮性。目前有 1 个功能增强类 PR（计算器工具）正在等待审查。

---

## 📦 版本发布
**今日无新版本发布。**

---

## 🚀 项目进展
今日虽无新版本发布，但代码库有几个重要的合并与更新，主要提升了文档清晰度和系统稳定性：

*   **[PR #689] 核心稳定性修复（已合并/关闭）**
    *   **内容**: 修复了 Cron 调度器中存在的严重竞态条件和内存泄漏问题。具体包括：修复 scheduler/worker 之间的竞态、互斥锁生命周期管理问题以及测试隔离问题。
    *   **影响**: 这是一个关键的维护性更新，确保了后台任务调度在高并发场景下的稳定性，防止了潜在的内存溢出和崩溃。
    *   **链接**: [fix(cron): scheduler/worker race...](https://github.com/nullclaw/nullclaw/pull/689)

*   **[PR #620] 文档澄清（已合并/关闭）**
    *   **内容**: 明确了 `workspace_path` 和 `system_prompt` 的行为关系，并添加了回归测试。
    *   **影响**: 增强了项目的可维护性，消除了用户对代理配置行为的误解。
    *   **链接**: [docs: clarify workspace_path...](https://github.com/nullclaw/nullclaw/pull/620)

*   **[PR #716] 新增计算器工具（待合并/OPEN）**
    *   **内容**: 提交了一个包含 20 种数学运算（加减乘除、对数、统计等）的计算器工具实现。
    *   **状态**: 已提交，等待维护者审查。
    *   **链接**: [Add calculator tool...](https://github.com/nullclaw/nullclaw/pull/716)

---

## 🔥 社区热点
今日讨论主要集中在**平台集成**与**多模态能力**上，反映了用户希望 NullClaw 能无缝融入主流工作流并处理视觉信息的强烈诉求。

*   **[Issue #714] 支持微信插件集成**
    *   **热度**: ⭐⭐⭐（新提交）
    *   **分析**: 用户指出官方微信插件已发布，且其他 OpenClaw 分支已支持。鉴于微信在中国及东南亚的庞大用户基数，这是一个极具战略意义的集成请求。
    *   **链接**: [Support WeChat Plugin Integration](https://github.com/nullclaw/nullclaw/issues/714)

*   **[Issue #624] 视觉流水线：图像与文件直接发送**
    *   **热度**: ⭐⭐（今日活跃更新）
    *   **分析**: 用户重提对多模态 LLM 图像分析的需求，希望能自动处理 base64 编码。这表明用户对 NullClaw 的期待正从单一的文本处理向“视觉+文本”多模态智能体转变。
    *   **链接**: [Vision Pipeline...](https://github.com/nullclaw/nullclaw/issues/624)

---

## 🐛 Bug 与稳定性
今日报告了一个特定场景下的功能性 Bug：

*   **[Issue #715] Discord 计划 DM 发送目标标识符错误**
    *   **严重程度**: 🟡 中等（影响特定自动化功能）
    *   **详情**: Discord 的即时消息（DM）在“延迟发送”或“计划发送”场景下，可能会复用直接会话标识符，而非使用有效的 DM 频道目标 ID，导致发送失败。正常实时回复不受影响。
    *   **状态**: 待修复，暂无关联 Fix PR。
    *   **链接**: [Discord scheduled DM delivery...](https://github.com/nullclaw/nullclaw/issues/715)

---

## 🗺️ 功能请求与路线图信号
*   **数学与逻辑增强**: [PR #716](https://github.com/nullclaw/nullclaw/pull/716) 表明项目正在着手增强 Agent 的基础工具箱，数学计算能力将是下一阶段的一个小更新点。
*   **多模态支持**: [Issue #624](https://github.com/nullclaw/nullclaw/issues/624) 的持续讨论暗示多模态（Vision）支持是用户高频痛点，尽管目前仅有用户自写技能的 Workaround，但纳入官方 Roadmap 的呼声渐高。
*   **主流 IM 生态**: [Issue #714](https://github.com/nullclaw/nullclaw/issues/714) 提示微信生态的集成缺口，鉴于竞品已跟进，这可能会成为提升用户基数的关键路径。

---

## 🗣️ 用户反馈摘要
*   **痛点**: 缺乏对**图像文件**的原生支持，用户不得不自己编写技能 来弥补这一缺失，增加了使用门槛。
*   **生态诉求**: 用户非常关注**主流平台**（如微信）的官方适配，不愿意自行 Fork 维护，希望上游能合并此类功能。
*   **文档体验**: 用户对 `workspace_path` 和 `system_prompt` 的交互行为存在困惑（现已在 PR #620 中解决），说明精确的文档描述对开发者至关重要。

---

## ⚠️ 待处理积压
*   **Issue #624 (Vision Pipeline)**: 创建于 3 月 18 日，至今仍处于 OPEN 状态。鉴于该功能对多模态应用的重要性，建议维护者评估是否纳入下一个 Milestone。
*   **Issue #715 (Discord DM Bug)**: 新发现的 Bug，涉及 Discord 自动化流程的稳定性，建议优先处理以免影响生产环境用户。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

你好！我是 IronClaw (nearai/ironclaw) 项目分析师。以下是 **2026年3月26日** 的项目动态日报。

---

### 📊 IronClaw 项目日报 | 2026-03-26

#### 1. 今日速览
IronClaw 项目今日处于**高活跃度**状态，开发重心集中在**多租户架构重构**与**Agent 引擎稳定性修复**上。
-   **核心架构演进**：多租户隔离（Multi-tenant isolation）和全新的统一执行引擎（v2 architecture）正在并行推进，显示了项目正在经历深度的底层架构升级。
-   **稳定性修复**：针对 Bedrock API 兼容性、LLM 长度截断以及 Routine 执行可见性的关键修复已提交。
-   **CI/CD 流转**：过去24小时内有大量 PR 已合并关闭（36条），其中包含大量 Staging 环境的自动提升记录，表明主分支与预发布分支正在进行频繁的代码同步与验证。

#### 2. 版本发布
-   **无新版本发布**：今日未产生新的 Release 版本。
-   **近期版本备注**：PR #1601 显示 `v0.22.0` 版本（包含 API 破坏性变更）已于近期完成打包，预计相关变更正在通过 Staging 环境进行最终测试。

#### 3. 项目进展
今日合并或更新的关键 PR 显示了以下进展：

-   **🚀 统一执行引擎 (v2 架构)**
    -   **PR [#1557](https://github.com/nearai/ironclaw/pull/1557)**: [OPEN] 正在开发独立的 `ironclaw_engine` crate，旨在用 5 个基础原语替换现有的 10 个碎片化抽象。新增 43 个文件（7,275 行 Rust 代码），这是近期最大规模的重构之一。
-   **🔒 多租户隔离完成 (Phases 2–4)**
    -   **PR [#1614](https://github.com/nearai/ironclaw/pull/1614)**: [OPEN] 完成了 Issue #59 跟踪的剩余多租户隔离工作。包括数据库作用域修复（`_for_user` 变体）、Redis 缓存多路复用以及编译时租户隔离（`TenantCtx`）。
-   **🛠️ Bedrock 兼容性修复**
    -   **PR [#1630](https://github.com/nearai/ironclaw/pull/1630)**: [OPEN] 修复了当 `toolConfig` 缺失时，Bedrock Converse API 因消息中包含工具块而报错的问题。增加了 `strip_tool_blocks()` 逻辑。
-   **📝 Routine 透明化增强**
    -   **PR [#1650](https://github.com/nearai/ironclaw/pull/1650)**: [OPEN] 改进了 Routine 执行的可观测性，现在会实时持久化完整的 LLM 交互记录（提示、响应、工具调用参数等），并移除了 full_job 的 sandbox 门控。

#### 4. 社区热点
-   **LLM 长度截断问题** 🔥
    -   **Issue [#1631](https://github.com/nearai/ironclaw/issues/1631)**: 揭示了当 LLM 因 `max_tokens` 限制导致工具调用被截断（`finish_reason == Length`）时，Agent 可能尝试执行不完整的 JSON 工具调用，导致任务失败。
    -   **关联 PR [#1632](https://github.com/nearai/ironclaw/pull/1632)**: 提出了修复方案：截断时丢弃工具调用，并注入系统提示要求 LLM 进行总结，从而兜底处理大上下文场景。

#### 5. Bug 与稳定性
今日报告的 Bug 涉及构建系统、通道集成及核心逻辑：

-   **[High] 构建循环失败**
    -   **Issue [#1640](https://github.com/nearai/ironclaw/issues/1640)**: `build_software` 在处理 Cargo.toml 依赖时崩溃，提示 "invalid type: map, expected a string"。Agent 即使被明确指示使用简单字符串依赖，仍会生成内联表（Inline table）格式，导致解析器死循环。
    -   **状态**: OPEN, 无 Fix PR。

-   **[Medium] 飞书通道配置缺失**
    -   **Issue [#1633](https://github.com/nearai/ironclaw/issues/1633)**: 飞书插件在 `on_respond` 时报错 "app_id not configured"。用户已配置 ID 和 Secret，但 WASM 模块似乎无法读取 Workspace 配置。
    -   **状态**: OPEN, 无 Fix PR。

-   **[Medium] Sandbox 循环执行**
    -   **Issue [#1637](https://github.com/nearai/ironclaw/issues/1637)**: 测试显示 Sandbox 调用可能陷入超过 50 次的循环，涉及 `create_job` 工具的执行失败逻辑。
    -   **状态**: OPEN。

-   **[Medium] NEAR AI API 报错**
    -   **Issue [#763](https://github.com/nearai/ironclaw/issues/763)**: (已关闭) Routine 引擎构建的历史消息缺少 "user" 角色，导致 NEAR AI API 返回 400 错误。该 Issue 今日被标记为关闭，表明相关修复已入库。

#### 6. 功能请求与路线图信号
-   **Agent 防漂移自检**
    -   **Issue [#1634](https://github.com/nearai/ironclaw/issues/1634)**: 提议在 Agent 循环中加入基于规则的 `DriftMonitor`，在不增加额外 LLM 调用的前提下检测常见失败模式并注入纠正性消息。这将显著提升 Agent 的自主稳定性。
-   **测试覆盖增强**
    -   **Issue [#1644](https://github.com/nearai/ironclaw/issues/1644)**: 请求增加针对 REPL "单次消息退出"（`-m`）事件的回归测试，确保 Event-triggered routine 不会被意外中断。
    -   **Issue [#1652](https://github.com/nearai/ironclaw/issues/1652)**: 请求增加 Workspace 用户作用域重绑定的直接测试，涉及 libsql 修复的验证。

#### 7. 用户反馈摘要
-   **构建痛点**: 用户反馈 Rust WASM 工具的构建体验不佳，AI 难以严格遵守 Cargo.toml 的语法格式要求（Issue #1640）。
-   **集成难度**: 飞书（Feishu）作为企业沟通渠道，其 WASM 插件的配置门槛较高，尤其是在配置读取和环境适配方面存在文档或实现缺失（Issue #1633）。

#### 8. 待处理积压
-   **Staging 推广受阻**: PR [#1451](https://github.com/nearai/ironclaw/pull/1451) 和 [#1499](https://github.com/nearai/ironclaw/pull/1499) 等大量 Staging 自动推广 PR 目前处于 `CLOSED` 但未合并状态，或处于待定状态。PR [#1655](https://github.com/nearai/ironclaw/pull/1655) 专门为了修复由版本回退门控引起的注册表版本号不一致问题，这表明发布流水线可能存在版本号同步的积压问题。

---
*数据来源: GitHub.com/nearai/ironclaw | 生成时间: 2026-03-26*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-26)

## 1. 今日速览
LobsterAI 项目在 2026-03-26 展现了极高的活跃度与社区参与度。过去 24 小时内，项目共处理了 87 条代码与事务更新（Issues + PRs），并发布了包含登录与付费功能的新版本，标志着产品在商业化与功能完善上迈出了重要一步。社区讨论主要集中在 **MCP（模型上下文协议）配置**、**OpenClaw 网关稳定性**以及**数据库性能**三大领域，反映出用户对系统集成稳定性和性能的高度关注。同时，多项关键性能优化与安全补丁已提交审核，代码库正朝着更健壮的方向演进。

## 2. 版本发布
**版本号：2026.3.25**
- **核心功能**：
  - **商业化功能上线**：新增用户登录及“加油包”（积分充值）功能，标志着闭环商业化能力的形成。
  - **桌面端安全增强**：引入桌面端危险命令分级授权机制，提升本地操作安全性。
  - **体验优化**：修复了即时聊天同步机制的问题。
- **潜在影响**：新增的登录与付费功能可能引发用户对数据隐私和计费模式的疑问（Issue #884），需注意文档跟进。

## 3. 项目进展
今日共有 5 个 PR 完成合并/关闭，虽然数量不多，但涵盖重要的性能与体验修复：
- **避免网关重启**：#870 修复了切换模型时导致 OpenClaw Gateway 强制重启的问题，这将显著改善用户在切换不同模型提供商时的流畅度。
- **消息同步修复**：#780 解决了即时聊天同步右侧逻辑错误的问题。

**正在推进的关键 PR**（值得关注）：
- **安全加固**：#877 与 #869 提交了对 `shell.openExternal` 的 URL 协议白名单限制，防止 RCE 漏洞，这是极佳的安全实践。
- **性能优化**：#812 (SQLite 写入防抖) 和 #809 (Redux selector 优化) 直击主线程阻塞和渲染卡顿痛点，若合并将大幅提升应用响应速度。
- **数据一致性**：#881 (启用 SQLite 外键约束) 和 #868 (增加事务保护) 致力于解决数据库膨胀和数据不一致问题。

## 4. 社区热点
**讨论焦点：MCP 集成困境**
- **[CLOSED] #728 配置的mcp如何才能被调用** (4 comments)
  - 链接: https://github.com/netease-youdao/LobsterAI/issues/728
  - **分析**：尽管 Issue 已关闭，但 MCP 配置复杂且难以调用的现象依然是用户痛点。多个用户反馈“0 tools”或打包后失效（Issue #820, #724），说明当前的 MCP 集成在开发环境和生产环境存在差异，配置引导有待优化。

**兼容性争议**
- **[OPEN] #691 钉钉机器人发送一个任务，lobster回复2条消息** (3 comments)
  - 链接: https://github.com/netease-youdao/LobsterAI/issues/691
  - **分析**：相比微信机器人，钉钉渠道的消息去重逻辑似乎存在缺陷，导致重复回复。

**模型兼容性**
- **[OPEN] #831 最新版不支持custom自定义的gemini中转模型** (2 comments)
  - 链接: https://github.com/netease-youdao/LobsterAI/issues/831
  - **分析**：新版本引入的变更可能破坏了对特定自定义模型（如 Gemini 中转）的支持，需警惕回归问题。

## 5. Bug 与稳定性
**高危/阻断性问题**：
1. **[OPEN] #858 【BUG】模型名称字段数据丢失**
   - **描述**：添加自定义模型时，填写的“模型名称”在保存后丢失，导致配置文件为空字符串。
   - **衍生风险**：此问题直接导致 **[OPEN] #859 Gateway 无限崩溃重启**，因为无效配置触发了网关的 exit 1 和无限重启循环。需重点关注 PR #858/859。
2. **[OPEN] #879 bug(sqlite): 外键约束未启用，数据库持续膨胀**
   - **描述**：SQLite 默认未启用外键，删除 Session 不会级联删除 Messages，长期使用会导致数据库体积过大。
   - **修复状态**：已有修复 PR #881 待合并。
3. **[OPEN] #883 Windows客户端所有斜杠命令不可用**
   - **描述**：`/status`, `/help` 等所有命令在 Windows 客户端完全失效，影响核心交互体验。

**中危问题**：
- **[OPEN] #850 定时任务关闭后，还会触发执行**：定时任务状态管理逻辑错误。
- **[OPEN] #824 问答结果渲染异常**：Markdown 渲染错乱。

## 6. 功能请求与路线图信号
**新功能需求**：
- **[OPEN] #873 给产品用ears原则转化prd，增加研发常用的skill git worktree**：
  - **信号**：社区开始贡献特定工作流的 Prompt/Skill（如 PRD 转 EARS），这暗示未来可能会有更多针对产品经理角色的技能库沉淀。
- **[OPEN] #856 模型切换及使用文档更新**：
  - **诉求**：希望支持不同任务使用不同模型（目前是全局切换）；同时呼吁更新官网文档以覆盖 `openclawd` 等新功能。

**路线图推测**：
结合最近合并的 PR #779（付费加油包），项目正从单纯的工具向“商业化 SaaS + 个人 Agent”转型。接下来的重点可能在于提升多模型管理的灵活性（PR #870, #844）和系统的安全性（PR #877）。

## 7. 用户反馈摘要
**痛点**：
- **配置与调试困难**：MCP 配置难以成功（Issue #728, #820），自定义模型设置复杂且容易崩溃（Issue #858, #859）。
- **性能焦虑**：频繁的 Gateway 重启（Issue #844）、数据库膨胀（Issue #879）以及潜在的内存管理问题（Issue #819）。
- **平台差异**：Windows 客户端似乎比 Mac/Linux 遭遇更多特有问题（如命令失效 Issue #883，DOC 打不开 Issue #815，增值页面错误 Issue #834）。

**满意度**：
- 用户对 PRD 转化类 Skill（Issue #873）和消息导出功能（PR #880）表现出积极态度，显示出对生产力增强功能的认可。

## 8. 待处理积压
- **[OPEN] #711 npm.nie.netease.com registry 无法访问引起打包失败** (👍: 1)
  - **提醒**：内部 npm 源的不稳定影响了外部贡献者的构建体验，建议将其设为完全可选或提供镜像 fallback。
- **长期遗留**：Issue #399 (阿里云百炼 GLM 4.5 报错) 自 3 月 13 日开放至今未解决，可能涉及特定模型 API 的适配问题。

---
**分析师建议**：建议项目组在下一版本发布前，优先修复 **Windows 命令失效 (#883)** 和 **Gateway 配置崩溃循环 (#859)** 这两个影响面极广的问题，并考虑为 MCP 功能提供更详尽的文档或配置向导。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目日报 (2026-03-26)

## 1. 今日速览
TinyClaw 项目今日处于**高度活跃的重构阶段**。虽然没有新的 Issue 提出或版本发布，但过去 24 小时内合并了 3 个重要的 Pull Requests，显示出项目正在进行深度的底层架构优化。核心开发 `jlia0` 成功推动了一系列旨在简化部署和标准化认证的改动。尽管目前仍有一个 PR 处于待合并状态，项目整体代码质量和维护性正得到显著提升。

## 2. 版本发布
**无**

## 3. 项目进展
今日共有 3 个 PR 成功合并，标志着项目在架构现代化和易用性方面迈进了重要一步：

*   **[CLI 架构升级]**: 合并了 **[#260 refactor(cli): replace shell scripts with Node.js entrypoint](https://github.com/TinyAGI/tinyclaw/pull/260)**。
    *   **进展意义**: 这是一项重大的底层重构。项目将原有的 Bash 脚本逻辑完全替换为 Node.js 模块，并集中管理到 `packages/main/src/index.ts`。
    *   **核心收益**: 消除了对 `tmux`、`jq`、`curl` 和 `bash` 的运行时依赖，增强了跨平台兼容性，并引入了多阶段构建的 Dockerfile，为容器化部署扫清了障碍。

*   **[认证标准化]**: 合并了 **[#261 feat(auth): standardize provider credentials](https://github.com/TinyAGI/tinyclaw/pull/261)**。
    *   **进展意义**: 统一了不同提供商（Provider）的凭据字段。
    *   **核心收益**: 将 `auth_token` 重命名为 `api_key`，并为 Anthropic 提供了更灵活的认证支持（同时支持 `api_key` 和 `CLAUDE_CODE_OAUTH_TOKEN`）。这简化了用户的配置流程，使凭证管理更加规范。

*   **[Docker 构建修复]**: 合并了 **[#262 fix(docker): fix Docker build and move Docker to collapsible README section](https://github.com/TinyAGI/tinyclaw/pull/262)**。
    *   **进展意义**: 修复了 Docker 构建过程中的 Chromium 下载问题。
    *   **核心收益**: 通过在构建阶段设置 `PUPPETEER_SKIP_DOWNLOAD=true` 并使用系统级 Chromium，解决了构建失败。同时优化了 README 结构，将 Docker 部署方式折叠，突出了 `install.sh` 和 CLI 的快速启动流程。

## 4. 社区热点
今日社区讨论主要集中在 **[#249 refactor(office): reorganize office layout with topbar navigation](https://github.com/TinyAGI/tinyclaw/pull/249)**。
*   **热点分析**: 这是目前唯一的 Open PR，由 `jlia0` 于 3 天前发起并在昨日更新。该提议涉及 UI 布局的重大调整——将侧边栏导航迁移至顶部栏，并重组了路由结构。
*   **背后诉求**: 反映了项目试图优化用户界面（UI）的交互体验，可能旨在解决导航逻辑复杂或侧边栏占用空间的问题，为未来的功能扩展预留布局空间。

## 5. Bug 与稳定性
今日未发现新的 Bug 报告。
*   已有修复：PR #262 修复了 Docker 构建中潜在的稳定性风险（Puppeteer 下载失败导致的构建中断），显著提升了容器化部署的可靠性。

## 6. 功能请求与路线图信号
基于今日合并的 PR，我们可以推断出项目的近期路线图信号：
*   **跨平台与易用性**: PR #260 表明项目正在努力降低环境依赖，未来可能会更侧重于提供开箱即用的 Node.js 体验，而非依赖特定的 POSIX Shell 环境。
*   **UI 现代化**: PR #249（待合并）显示了前端布局重构的意图，可能会在下一个版本中带来焕然一新的“Office”界面交互体验。

## 7. 用户反馈摘要
由于今日无新 Issue 开启且 PR 评论数据未显示具体内容，主要从代码变更中提取潜在的用户痛点反馈：
*   **痛点 - 部署困难**: 之前的 Docker 构建失败和对 Shell 脚本的依赖增加了用户的使用门槛。PR #260 和 #262 的修复直接响应了这部分隐形需求。
*   **痛点 - 配置混乱**: 之前各提供商认证字段不统一（如 `auth_token` vs `api_key`），容易造成配置混淆。PR #261 解决了这一问题。

## 8. 待处理积压
*   **需关注 PR**: **[#249 refactor(office): reorganize office layout...](https://github.com/TinyAGI/tinyclaw/pull/249)**
    *   **状态**: Open (Created on 2026-03-23)
    *   **提醒**: 这是一个涉及前端路由和布局的大型重构 PR。虽然目前处于活跃状态（昨日有更新），但尚未合并。建议维护者关注此变更是否会影响现有用户的界面操作习惯，确保测试覆盖后尽早合并以避免长期偏离主分支。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-03-26)

**报告日期**：2026-03-26
**分析对象**：moltis-org/moltis
**数据周期**：过去 24 小时

---

### 1. 今日速览
Moltis 项目在过去 24 小时内保持着**中等活跃度**。社区重心明显向**底层依赖优化与代码库精简**倾斜，核心开发者 `fortunto2` 连续提交了两个重要的构建系统更新。与此同时，关于 AI 代理“思维链”（Local Thinking）功能的讨论在社区引发热烈反响，相关讨论在短期内多次涌现。值得注意的是，尽管没有新版本发布，但针对 WhatsApp 集成 Bug 的快速修复（#460 关闭）显示了维护团队对稳定性的响应能力。

### 2. 版本发布
**当前状态**：暂无新版本发布。
*注：尽管有多个依赖更新和 Bug 修复已合并或活跃，但尚未触发正式的 Release 流程。建议关注近期是否会有补丁版本发布以包含 `reqwest` 升级和 WhatsApp 修复。*

### 3. 项目进展
今日代码层面的进展主要集中在**技术债务清理**与**第三方库升级**，为未来功能开发铺平道路：

*   **[已合并] #439: 为 MCP 服务器增加自定义显示名称**
    *   **进展**：PR #439 已成功关闭。
    *   **影响**：此功能允许用户为 MCP (Model Context Protocol) 服务器配置易读的 `display_name`，同时保持底层技术标识符的稳定性。这提升了用户在配置和管理多个 AI 模型服务时的体验，增强了 GraphQL API 和 RPC 处理的灵活性。
    *   **链接**：[moltis-org/moltis#439](https://github.com/moltis-org/moltis/pull/439)

*   **[待合并] 核心依赖升级与代码精简 (#487, #488)**
    *   **进展**：开发者 `fortunto2` 提交了两个关键 PR，目前处于待合并状态。
    *   **详情**：
        *   **#488**：将核心 HTTP 库 `reqwest` 从 v0.12 升级至 v0.13。这是一个关键的基础设施升级，解除了对新功能集成的阻塞。
        *   **#487**：引入 `openai-oxide` 作为替代的 OpenAI 提供商。这是一个极具价值的性能优化，预计将用约 888 行代码替换现有的 5300+ 行代码（`openai.rs` + `openai_compat.rs`），大幅降低维护成本并提升代码可读性。
    *   **链接**：
        *   [moltis-org/moltis#488](https://github.com/moltis-org/moltis/pull/488)
        *   [moltis-org/moltis#487](https://github.com/moltis-org/moltis/pull/487)

### 4. 社区热点
今日社区讨论的焦点集中在 **“本地思维”** 功能上，显示出用户对提升 AI 透明度和控制力的强烈需求：

*   **热点话题：Local Thinking (本地思维链)**
    *   **相关 Issues**：
        *   [#490 Feature: Local thinking](https://github.com/moltis-org/moltis/issues/490) (OPEN)
        *   [#489 Feature: Local Thinking](https://github.com/moltis-org/moltis/issues/489) (CLOSED - 可能是重复或已归档)
    *   **核心诉求**：用户 `Wanderspool` 提出希望增加对“本地思维”的支持。这通常意味着用户希望在发送给外部 LLM 之前，或者在外部 LLM 处理过程中，能在本地（Moltis 代理层）进行中间步骤的推理、规划或反思，而不仅仅是一个简单的请求转发器。
    *   **分析**：短时间内出现两个相关 Issue (#489, #490) 且其中一个已有 2 条评论，说明该功能不仅是单一用户的需求，可能代表了部分高级用户对于 Agent 逻辑黑盒的不满，希望通过“本地思维”来调试或增强 Agent 的决策能力。

*   **关注度最高 (Top 👍)**：
    *   [#460 Bug: WhatsApp Integration is not working](https://github.com/moltis-org/moltis/issues/460) (👍 3)
    *   该 Issue 虽已关闭，但获得的点赞数最高，表明 WhatsApp 集成是用户非常关心的核心功能入口，任何波动都会迅速引起社区关注。

### 5. Bug 与稳定性
*   **[已修复] WhatsApp 集成故障**
    *   **问题**：用户 `eugeneyng` 报告 WhatsApp 集成无法正常工作 (#460)。
    *   **状态**：Issue 已关闭。
    *   **评估**：鉴于该 Issue 获得了 3 个点赞且迅速关闭，推测这是一个影响真实用户体验的严重问题，维护者可能已通过配置调整或热修复解决了该问题。
    *   **链接**：[moltis-org/moltis#460](https://github.com/moltis-org/moltis/issues/460)

### 6. 功能请求与路线图信号
*   **信号增强：本地推理能力**
    *   **来源**：Issue #490。
    *   **路线图预测**：结合目前 PR 中对 `openai-oxide` (更轻量的 OpenAI 客户端) 的引入，项目正在优化与 LLM 交互的底层架构。这可能是为了支持更复杂的流式处理或中间态处理，进而为实现“本地思维”打基础。
    *   **建议**：开发团队应评估 #490 的提案，考虑是否将此纳入下一季度的 Roadmap，作为提升 Agent 智能程度的关键特性。

*   **信号增强：MCP 协议生态建设**
    *   **来源**：PR #439 (已合)。
    *   **路线图预测**：MCP (Model Context Protocol) 仍是项目重点，增加自定义显示名表明项目正在致力于使 MCP 服务器的管理更符合人体工程学，未来可能看到更多围绕 MCP 的管理功能。

### 7. 用户反馈摘要
*   **痛点**：尽管 Moltis 是强大的 AI 智能体框架，但用户对**特定通信渠道的稳定性（WhatsApp）**非常敏感。
*   **需求**：高级用户不满足于简单的“黑盒”调用，**渴望更多的可观测性**（如 Local Thinking 功能），希望能看到或干预 Agent 的思考过程。

### 8. 待处理积压
*   **技术债务清理**：PR #487 和 #488 涉及到底层 HTTP 客户端和 OpenAI 接口的重大变更。虽然不是功能性 Bug，但 #487 提到的代码量减少（从 5300+ 行降至 888 行）对长期健康度至关重要，建议维护者优先审查合并。
*   **功能重复处理**：关于 "Local Thinking" 的 #489 已关闭，但 #490 仍处于活跃状态。维护者可能需要统一这两个请求的反馈，避免社区困惑。

---
*此日报由 AI 自动生成，数据基于 GitHub 公开活动。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

你好！我是 CoPaw (agentscope-ai/CoPaw) 开源项目的 AI 智能体分析师。以下是基于 2026-03-26 的 GitHub 数据生成的项目动态日报。

---

# CoPaw 项目动态日报 | 2026-03-26

## 📅 今日速览
CoPaw 项目今日处于**极高活跃度**状态，正处于 v0.2.0 大版本发布后的快速迭代与修复期。过去 24 小时内，社区共提交了 **50 条 Issues** 和 **49 条 PRs**，代码合入与问题修复的速度非常快（关闭率约 60%）。项目核心聚焦于**多智能体架构的稳定性修复**与**资源占用优化**（CPU/Memory），同时也涌现出大量针对 0.2.0 新功能的体验反馈。尽管发布了紧急修复版本 `v0.2.0.post1`，但在 Docker 部署、Cron 定时任务及多 Agent 配置隔离方面仍存在明显痛点。

---

## 🚀 版本发布
### **v0.2.0.post1** (Patch Release)
**发布时间**: 2026-03-26 (近24小时内)
**主要内容**: 这是一个针对 v0.2.0 的紧急修补版本，主要解决文档和工具调用解析问题。
*   **文档更新**: 完善了 v0.2.0 的发布说明 (#2212)。
*   **功能修复**: 修复了工具调用无法从"思考"和"文本内容"中正确解析的问题 (#2192)，这可能是导致部分用户反馈"调用工具报错"或"无工具"的关键修复。

---

## 🚧 项目进展
今日合并/关闭了 **29 条 PRs**，主要集中在以下领域：

1.  **核心架构重构**:
    *   **上下文管理 v2.0**: PR #2300 正在重构上下文管理和配置，重写了 Summarizer prompt，并主动注入 memory_search 结果。这标志着 CoPaw 在"让 Agent 更懂你"的记忆机制上迈出了重要一步。
    *   **模型选择器重构**: PR #2278 和 #2283 重点解决了多智能体场景下模型配置混乱的问题。确立了"全局默认模型"与"Agent 独享模型"的分层逻辑，并修复了多个 Tab 页面间状态互相污染的 Bug。

2.  **关键 Bug 修复**:
    *   **文件监视器优化**: PR #2300 降低了 File watcher 的监视频率，直接响应了社区关于"CPU 占用 100%"的抱怨，试图缓解 idle 状态下的资源消耗。
    *   **渠道稳定性**: 修复了 Telegram 频道的超时配置问题 (#2280)，解决了长轮询导致的连接超时；修复了定时任务 Cron 的字段校验逻辑 (#2276)。
    *   **兼容性**: PR #2304 增加了对 MiniMax 等 Anthropic 兼容 API 的支持（将 404 视为连接成功），提升了第三方模型接入的稳定性。

---

## 🔥 社区热点
今日讨论热度最高的议题集中在新版本的升级阵痛与多智能体的使用体验上。

*   **🔥 讨论最多: [#1911 小艺频道连接失败](https://github.com/agentscope-ai/CoPaw/issues/1911) (18 评论)**
    *   **摘要**: 用户在华为小艺平台测试正常，但在手机端实际使用时频繁报错"开小差/网络拥堵"，且对话列表不同步。
    *   **分析**: 反映了特定渠道在小艺生态下的连接稳定性问题，可能涉及长连接保活或接口鉴权细节。

*   **🔥 高关注 Bug: [#1345 飞书频道"延迟回复"](https://github.com/agentscope-ai/CoPaw/issues/1345) (12 评论)**
    *   **摘要**: Bot 回答总是"慢半拍"，回答的是上一个问题，当前问题被忽略。
    *   **分析**: 这是一个典型的上下文状态机 Bug，可能与服务端处理消息队列的异步逻辑有关，极大地影响用户体验。

*   **🔥 资源占用问题: [#2218 CPU 占用 100%](https://github.com/agentscope-ai/CoPaw/issues/2218) (9 评论)**
    *   **摘要**: 进程启动即 CPU 满载，处于 idle 状态也不下降。
    *   **分析**: 这是今日最严重的性能 Bug，已被确认为 `epoll` 忙循环问题。虽然 PR #2300 已尝试降低 File watcher 频率，但核心的死循环可能需要更深层的修复。

---

## 🐛 Bug 与稳定性
今日报告的 Bug 数量较多，主要集中在 v0.2.0 升级后：

*   **🔴 严重: Docker/部署问题**
    *   **[#2254 Docker升级0.2.0后网页无法打开](https://github.com/agentscope-ai/CoPaw/issues/2254)**: 容器运行正常但 8088 端口无响应。
    *   **[#2230 Cron任务报错503](https://github.com/agentscope-ai/CoPaw/issues/2230)**: 升级后计划任务全面失效，Docker 重启无效。
    *   **[#1873 Context Window 超限](https://github.com/agentscope-ai/CoPaw/issues/1873)**: 特定版本下报错上下文溢出。

*   **🟡 中等: 多智能体与模型管理**
    *   **[#2274/#2174 多Agent模型配置失效](https://github.com/agentscope-ai/CoPaw/issues/2274)**: 切换 Agent 后模型配置会互相覆盖或重置，导致非默认 Agent 无法加载模型。相关修复 PR #2283 已合并，待验证。
    *   **[#2243 MEMORY.md 不更新](https://github.com/agentscope-ai/CoPaw/issues/2243)**: Agent 无法写入记忆文件，导致记忆功能失效。
    *   **[#2265 工具调用 APITimeoutError](https://github.com/agentscope-ai/CoPaw/issues/2265)**: Agent 声称没有工具，且调用时报错超时。

---

## 💡 功能请求与路线图信号
从 Issues 和 PRs 中可以看出社区对"企业级功能"和"易用性"的强烈需求：

*   **多智能体协作 (High Demand)**:
    *   **[#2225 异步通信与回调](https://github.com/agentscope-ai/CoPaw/issues/2225)**: 用户期望 Agent 之间支持非阻塞的异步并发通信（类似 Actor 模型），以适应复杂的自动化流程（如股票盯盘）。
    *   **[#2288 分级模型配置](https://github.com/agentscope-ai/CoPaw/issues/2288)**: 希望能针对不同 Agent 绑定不同模型（如编程用低Temp模型，创意用高Temp模型）。*PR #2283 已合并，预计将解决此问题。*

*   **交互体验增强**:
    *   **[#2302 全局停止指令](https://github.com/agentscope-ai/CoPaw/issues/2302)**: 希望在所有渠道支持 `/stop` 命令来中断正在运行的任务。*PR #2067 正在开发中。*
    *   **[#2281 多Tab页面切换](https://github.com/agentscope-ai/CoPaw/issues/2281)**: 用户抱怨目前必须开多个浏览器页面管理多个 Agent，强烈请求改为单页面 Tab 切换模式。

*   **私有化部署**:
    *   **[#2296 私有网关支持](https://github.com/agentscope-ai/CoPaw/issues/2296)**: 企业用户请求支持非标准 OpenAI 格式的私有网关（自定义 Header/Data 格式）。

---

## 🗣️ 用户反馈摘要
*   **痛点**: **升级到 v0.2.0 导致的服务不可用**。大量用户反馈 Docker 升级后 Web 端打不开、Cron 任务失效、记忆文件不更新。这表明 v0.2.0 的向后兼容性和部署稳定性存在较大问题。
*   **痛点**: **资源占用不可控**。用户反映无论是旧版本（0.0.7）还是新版本（0.2.0），都存在 CPU 100% 占用的问题，影响长期挂机运行。
*   **赞赏**: 社区对 **"多智能体"** 功能表现出极高的热情，正在积极探索协作模式，但也对目前的配置 UI 和交互提出了具体改进建议（如 Tab 切换、独立模型配置）。

---

## 📌 待处理积压
*   **[#2263 定时任务渠道配置错误](https://github.com/agentscope-ai/CoPaw/issues/2263)**: Cron 任务配置了 QQ 渠道，实际执行却走了 Console 渠道。这是定时任务功能的一个顽固 Bug。
*   **[#2028 钉钉文件接收失败](https://github.com/agentscope-ai/CoPaw/issues/2028)**: 升级到多智能体版本后，钉钉文件无法接收。
*   **Mac 退出问题**: [#2287](https://github.com/agentscope-ai/CoPaw/issues/2287) Mac 版本退出 App 后进程残留，需要手动 Kill，建议增加清理脚本。

---
*日报生成时间: 2026-03-26 | 数据来源: GitHub API (CoPaw Repo)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-26)

## 📊 今日速览
ZeptoClaw 项目今日处于**极高活跃度**状态，过去 24 小时内处理了 **30 条 PR** 和 **11 个 Issue**，展现了极强的迭代速度。核心开发重点集中在 **Telegram 交互体验优化**（消息 threading、视觉反馈）与 **容器环境兼容性修复**（Podman/Docker 检测）。同时，社区通过重构 PR 栈推进了 **Web 浏览工具** 与 **安全防护** 功能，目前有一批涉及新功能的 PR（如 #442, #443）正处于待合并状态，预示着下一阶段功能特性的逐步落地。

---

## 🚀 版本发布
**当前无新版本发布。**
尽管大量代码被合并（22 个 PR），尚未触发新的 Release 发布，建议关注近期是否会有汇总性的补丁版本上线。

---

## 📈 项目进展
今日共有 **22 个 PR** 成功合并，标志着项目在以下关键领域取得实质性进展：

1.  **Telegram 体验升级 (UX)**：
    *   **Threading 支持**：(#432) 实现了回复消息的线程化显示，提升群聊交互的连贯性。
    *   **视觉反馈**：(#433) 引入了消息处理状态（👀 查看 -> ✅ 完成），解决了异步交互中的用户等待焦虑。
    *   **兼容性修复**：(#419) 修复了纯图片消息被静默丢弃的 Bug；(#415) 解决了并发消息下的输入状态冲突。

2.  **基础设施与安全加固**：
    *   **容器引擎检测**：(#441) 重写了 `lint-container.sh` 的逻辑，从“优先 Podman”改为“智能检测”，避免了既有 Docker 用户被意外切换引擎的问题。
    *   **ACP 通道安全**：(#440) 修复了 HTTP ACP 通道的 CORS 配置和路径遍历漏洞，增强了本地服务的安全性。

3.  **核心功能修复**：
    *   **模型发现**：(#416) 修复了合并模型 ID 识别失败的问题，确保 OpenRouter 路由正常工作。
    *   **时间感知**：(#431) 将时间格式从缩写改为全称，防止 LLM 产生日期幻觉。

---

## 🔥 社区热点
今日讨论与协作主要集中在以下关键议题：

*   **[#435 智能 Docker/Podman 检测](https://github.com/qhkm/zeptoclaw/issues/435)** (Issue - Open)
    *   **摘要**：针对昨日“优先 Podman”修复引发的争议，维护者提出了更优雅的解决方案，旨在同时满足纯 Docker 用户和 Podman 用户的需求。
    *   **动向**：修复 PR (#441) 已提交并处理，体现了快速响应的迭代能力。

*   **[#410 浏览器工具集成 (PR Stack)](https://github.com/qhkm/zeptoclaw/pull/410)** (PR - Closed)
    *   **摘要**：这是一个涉及 4 个 PR 的大型功能栈（Stack），引入了 `agent-browser`，支持 Lightpanda 和 Chrome 回退。
    *   **动向**：原 PR 已关闭并拆分为更细粒度的 PR（#442, #443 等），以便逐步审核和合并。这是当前最令人兴奋的新功能之一。

*   **[#424 Lint 脚本崩溃](https://github.com/qhkm/zeptoclaw/issues/424)** (Issue - Closed)
    *   **摘要**：用户报告在混合环境下 `lint-container.sh` 崩溃。
    *   **反馈**：项目在 24 小时内完成了从 Bug 报告 -> 初步修复 -> 方案优化的全过程，响应极其迅速。

---

## 🐞 Bug 与稳定性
今日报告并处理了多个关键 Bug：

*   **[P1-Critical] 模型发现回归** ([#416](https://github.com/qhkm/zeptoclaw/issues/416))
    *   **问题**：前序 PR 导致模型 ID 解析错误，影响 OpenRouter 风格的路由。
    *   **状态**：✅ 已修复并合并。

*   **[P3-Normal] ACP HTTP 通道安全风险** ([#434](https://github.com/qhkm/zeptoclaw/issues/434))
    *   **问题**：CORS 配置过于宽松，且存在路径遍历风险。
    *   **状态**：✅ 已通过 PR #440 修复并合并。

*   **Telegram 图片消息丢失** ([#419](https://github.com/qhkm/zeptoclaw/issues/419))
    *   **问题**：发送图片给 Bot 无任何反应。
    *   **状态**：✅ 已修复并合并。

---

## 💡 功能请求与路线图信号
*   **Browser Tool (浏览器工具)**：
    *   通过 PR [#442](https://github.com/qhkm/zeptoclaw/pull/442) 和 [#436](https://github.com/qhkm/zeptoclaw/pull/436) 的活跃状态来看，赋予 AI 浏览网页的能力是目前的最高优先级路线图之一。
*   **GitHub 技能搜索优化** ([#285](https://github.com/qhkm/zeptoclaw/issues/285))：
    *   已合并在今日的 PR 清单中（推测），增加了对 `SKILL.md` 的深度扫描支持，旨在提高技能发现的质量。

---

## 🗣️ 用户反馈摘要
*   **痛点**：**Telegram 交互体验**。用户反馈消息“平淡混乱”（#331）且缺乏反馈。今日的密集修复（Threading + Reactions）直接回应了这一痛点，表明项目非常重视用户在使用即时通讯软件时的实际感受。
*   **环境兼容性**：开发者用户对容器引擎的“擅自切换”表示敏感（#435），这促使项目采用了更严谨的“智能检测”逻辑，体现了对用户生产环境稳定性的尊重。

---

## 🗓️ 待处理积压
*   **Open PRs (8 个待合并)**：
    *   [#442](https://github.com/qhkm/zeptoclaw/pull/442) (Browser Tool): 核心新功能，等待依赖树中的其他 PR 合并。
    *   [#443](https://github.com/qhkm/zeptoclaw/pull/443) (HTML Escaping): 安全相关修复，依赖 #442。
    *   [#421](https://github.com/qhkm/zeptoclaw/pull/421) (PR Guidelines): 文档规范，需尽快合并以规范后续贡献。
*   **Open Issues**：
    *   [#331](https://github.com/qhkm/zeptoclaw/issues/331) (Improve Telegram support): 尽管部分已实现，但该 Issue 仍标记为 Open，可能作为总体追踪单，直到所有子功能（如格式化）完全就绪。

---
**分析总结**：ZeptoClaw 项目目前处于**健康且高效**的开发状态，维护者对 Bug 响应极快，对新功能（Browser Tool）的拆分合并管理得当，同时保持了对细节体验（Telegram 交互）的高度关注。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*