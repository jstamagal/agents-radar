# OpenClaw 生态日报 2026-04-07

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-07 00:13 UTC

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

你好！我是 OpenClaw 项目开源分析师。基于 2026-04-07 的 GitHub 数据，以下是该项目的每日动态日报。

---

# 📅 OpenClaw 项目日报 (2026-04-07)

## 1. 今日速览
OpenClaw 项目今日处于**极度活跃**状态，社区互动与代码提交量均处于高位。过去 24 小时内产生了 **1000** 个更新（500 Issues + 500 PRs），表明项目正处于快速迭代期。今日发布了 **v2026.4.5** 版本，主要涉及配置架构的重大调整。从 Issues 分布来看，**回归问题** 和 **Windows 平台兼容性** 是今日的主要痛点；而从 PR 列表来看，团队正在积极加强 **Agent 间通信**、**插件生态（MCP）** 以及 **视频生成能力**。

## 2. 版本发布：v2026.4.5
今日发布了新版本 **v2026.4.5**，包含重要的破坏性变更，涉及配置清理。

- **版本链接**: [openclaw 2026.4.5](https://github.com/openclaw/openclaw/releases/tag/v2026.4.5)
- **关键变更**:
  - **Breaking (配置移除)**: 移除了旧的公共配置别名，如 `talk.voiceId`、`talk.apiKey`、`agents.*.sandbox.perSession`、`browser.ssrfPolicy.allowPrivateNetwork`、`hooks.internal.handlers` 以及 channel/group/room 的 `allow` 切换开关。
  - **目的**: 统一使用规范的公共路径和 `enabled` 字段，简化配置逻辑。
- **迁移建议**: 用户在升级前需检查 `openclaw.json`，将上述旧配置项迁移至新的标准路径，否则可能导致功能失效或启动报错。

## 3. 项目进展
今日有大量 PR 处于活跃状态，尽管今日合并/关闭的数量（179）少于新增量，但以下功能推进显示了项目的发展方向：

- **Agent Economy (代理经济) 通信协议**: PR [#59477](https://github.com/openclaw/openclaw/pull/59477) 修复了沙箱代理之间的消息发送问题。这对于构建分布式代理网络是关键一步，意味着不同实例的 Agent 未来可以安全地协作。
- **插件生态与 MCP 集成**:
  - PR [#62160](https://github.com/openclaw/openclaw/pull/62160): 引入了 Plugin SDK 原生支持托管 MCP (Model Context Protocol) 服务器，这将极大扩展 OpenClaw 的工具调用能力。
  - PR [#62134](https://github.com/openclaw/openclaw/pull/62134): 为远程 MCP 服务器添加了 OAuth 认证支持，增强了企业级安全性。
- **多媒体能力增强**:
  - PR [#61987](https://github.com/openclaw/openclaw/pull/61987) & [#61988](https://github.com/openclaw/openclaw/pull/61988): 扩展了 `video_generate` 工具，支持音频输入、图像角色以及通过 URL 交付大体积视频资产，满足专业视频生成需求。
- **Windows 平台修复**: PR [#62194](https://github.com/openclaw/openclaw/pull/62194) 修复了 Windows 下 bundled channel 加载时的 ESM 路径错误。

## 4. 社区热点
讨论热度最高的议题集中在桌面端应用支持和平台兼容性上：

- **[#75 [OPEN] Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (👍 67, 💬 74)
  - **摘要**: 社区强烈呼吁提供 Linux 和 Windows 的原生桌面客户端（Clawdbot）。目前仅有 macOS, iOS 和 Android 版本。
  - **分析**: 这是目前获得 "赞" 数最多的 Issue，表明非 macOS 用户群体庞大且有强烈的原生应用需求，可能需要官方分配资源适配 Electron 或 Tauri。
- **[#61911 [OPEN] Windows ESM Error](https://github.com/openclaw/openclaw/issues/61911)** (💬 6)
  - **摘要**: v2026.4.5 在原生 Windows 10 上安装后出现 `ERR_UNSUPPORTED_ESM_URL_SCHEME` 错误（收到协议 'c:'）。
  - **分析**: 这是今日新版本的严重回归问题，虽然已有修复 PR [#62194](https://github.com/openclaw/openclaw/pull/62194)，但对 Windows 用户造成了阻塞。

## 5. Bug 与稳定性
今日报告的 Bug 中，**回归** 占据了很大比例，且多个涉及核心功能：

- **严重**:
  - **Windows CLI 完全失效**: Issue [#61911](https://github.com/openclaw/openclaw/issues/61911) 导致新版本无法启动。
  - **Nextcloud 插件崩溃**: Issue [#61759](https://github.com/openclaw/openclaw/issues/61759) (v2026.4.5) 报告 bundled `nextcloud-talk` 插件因缺少 `activate` 导出而无法加载。
  - **NPM 更新损坏**: Issue [#61686](https://github.com/openclaw/openclaw/issues/61686) 报告 `npm update` 后 CLI 缺失依赖导致命令无法运行。
- **中等**:
  - **执行路由回归**: Issue [#60772](https://github.com/openclaw/openclaw/issues/60772) (已关闭) 修复了 `exec host=node` 在 v2026.4.2 中路由错误的问题（原本应路由到 Windows 节点却跑在 Gateway 上）。
  - **Telegram 轮询停滞**: Issue [#43233](https://github.com/openclaw/openclaw/issues/43233) 报告 Telegram 频道轮询停滞。
  - **模型超时被忽略**: Issue [#46049](https://github.com/openclaw/openclaw/issues/46049) 指出配置的超时设置未生效，请求在极短时间内中断。

## 6. 功能请求与路线图信号
用户提出的新需求反映了 OpenClaw 在企业级落地和成本控制方面的方向：

- **配置管理**: Issue [#22278](https://github.com/openclaw/openclaw/issues/22278) (👍 11) 请求发布 `openclaw.json` 的 JSON Schema 以支持 IDE 自动补全和校验。
- **安全性增强**: Issue [#7916](https://github.com/openclaw/openclaw/issues/7916) (👍 11) 请求对 API 密钥/密文进行加密存储，而非目前的明文权限限制。
- **硬执行钩子**: Issue [#13583](https://github.com/openclaw/openclaw/issues/13583) 请求引入“硬门控”钩子，确保在满足某些条件（如强制工具调用）前禁止 Agent 生成最终回复，这对金融/安全场景至关重要。
- **Prompt Caching 优化**: 多个 Issues (#31708, #45110) 提及缓存失效导致成本激增 5-1000 倍的问题，这将是下一版本优化的重点。

## 7. 用户反馈摘要
- **痛点**:
  - **Docker 体验**: Issue [#14593](https://github.com/openclaw/openclaw/issues/14593) 用户抱怨官方 Docker 镜像缺少 `brew`，导致基于 brew 的技能安装失败。
  - **升级恐惧**: 频繁的回归问题（如 Anthropic Auth 401 [#23538](https://github.com/openclaw/openclaw/issues/23538), Ollama 超时 [#59098](https://github.com/openclaw/openclaw/issues/59098)）让用户对快速升级持谨慎态度。
  - **本地模型支持**: 用户在尝试使用 Ollama 本地模型时遇到了超时和模型加载失败的问题，本地模型的稳定性仍需打磨。
- **好评**:
  - 用户对 Agent 间任务委派协议的讨论（Issue [#28106](https://github.com/openclaw/openclaw/issues/28106)）显示了社区对构建多代理系统的极大热情。

## 8. 待处理积压
以下 Issue 长期未解决但关注度较高，建议维护者优先处理：
- **[Skill Path Translation](https://github.com/openclaw/openclaw/issues/17924)**: 沙箱 Agent 无法访问宿主机绝对路径，技能路径未翻译，导致沙箱内技能失效。
- **[Secrets Masking](https://github.com/openclaw/openclaw/issues/10659)**: 防止 Prompt 注入攻击获取 API Key 的功能请求。
- **[z.ai Provider Issue](https://github.com/openclaw/openclaw/issues/31234)**: 已关闭，但曾引起广泛讨论的 API 限制错误。

---

## 横向生态对比

# 2026-04-07 个人 AI 助手开源生态横向对比分析报告

## 1. 生态全景
2026年4月7日的开源个人 AI 助手生态正处于**爆发后的技术沉淀期**。头部项目（OpenClaw, NanoBot, CoPaw）的迭代速度极快，日均代码合并量达到“生产级”标准，标志着行业已从单纯的概念验证转向**稳定性与兼容性**的硬核攻坚。
**多智能体协作** 与 **模型生态** 成为今日的核心技术高地。OpenClaw 重构配置架构、IronClaw 强推多租户模型、NanoBot 大规模更新文档，均表明各项目正在努力构建更底层、更通用的 AI 基础设施，以应对未来更复杂的 Agent 应用场景。与此同时，用户对**本地化**、**隐私安全**及**系统资源占用**的关注度显著提升，迫使开发者在“功能激进”与“体验稳健”之间寻找平衡。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本动态 | 健康度评估 |
| :--- | :---: | :---: | :--- | :--- |
| **OpenClaw** | 500 (活动) | 500 (活动) | **v2026.4.5** (重大配置重构) | 🟡 **高活跃/高风险** (大量回归需警惕) |
| **NanoBot** | 26 | 56 | **v0.1.5** (里程碑: 官方站点/文档) | 🟢 **生态成熟期** (社区热，Bug修得快) |
| **ZeroClaw** | 14 | 31 | 无 (主分支密集合并) | 🟡 **功能膨胀期** (多Agent重构+内存Bug修复) |
| **CoPaw** | 28 | 15 | 无 (热重载/CPU修复中) | 🟠 **性能瓶颈期** (全力解决资源泄漏) |
| **IronClaw** | 33 | 50 | v0.24.1 (补丁) | 🔴 **架构阵痛期** (多租户升级导致功能失效) |
| **Moltis** | 11 | 9 | **20260406.04** (Docker修复) | 🟢 **稳定迭代** (Rust护航，修复高效) |
| **NanoClaw** | <5 | 14 | 无 (死锁修复) | 🟢 **深耕期** (专注消息队列与MCP) |
| **ZeptoClaw** | <2 | 8 (待合并) | 无 (API标准化中) | 🟢 **转型期** (从CLI向API网关演进) |
| **NullClaw** | 1 | 4 | 无 (REST API开发中) | 🟢 **基建期** (Zig重写，轻量高效) |
| **LobsterAI** | 0 | 11 (待审查) | 无 (UI重构中) | 🟢 **体验优化期** (专注桌面端交互) |
| **PicoClaw** | 8 | 6 | 无 (安全修复中) | 🟠 **磨合期** (兼容性问题较多) |
| **TinyClaw** | 0 | 0 | 无 | ⚫ **停滞** |
| **EasyClaw** | 0 | 1 | **v1.7.8** (国际化准备) | 🟢 **维护期** (稳定无Bug) |

---

## 3. OpenClaw 在生态中的定位

*   **核心参照地位**: OpenClaw 今日以 **1000+ 社区更新** 领跑全生态，其“配置清洗”举动显示了它在追求大规模生产可用性上的决心。
*   **差异化优势**:
    *   **Agent 通信协议**: 生态内极少数明确提出并实现“沙箱间通信” (#59477) 的项目，这比单纯的本地 Agent 更具分布式潜力。
    *   **企业级集成**: 强大的插件生态（MCP OAuth 支持）和视频生成能力，使其定位更偏向**生产力中心**而非简单的聊天机器人。
*   **技术路线**: 处于“大力出奇迹”阶段，通过激进的迭代和 Breaking Changes 快速淘汰旧架构，适合能承受较高维护成本的技术团队。
*   **社区对比**: 社区规模远超其他同类项目，但也面临着最严重的“技术债务”消化压力（Windows ESM 错误、Nextcloud 崩溃等）。

---

## 4. 共同关注的技术方向

今日多个项目不约而同地在以下技术点发力，显示出行业的共识方向：

*   **MCP (Model Context Protocol) 深度集成**
    *   **OpenClaw**: 引入 Plugin SDK 托管 MCP 服务器。
    *   **NanoClaw**: 扩展 MCP 工具以支持群组注册。
    *   **CoPaw**: 疯狂修复 MCP 客户端生命周期导致的 CPU 占用问题。
    *   **分析**: MCP 已成为 Agent 工具调用的**事实标准**，优化其稳定性（特别是热重载时的连接管理）是各项目的当务之急。

*   **模型路由与混合编排**
    *   **NanoBot**: 用户请求 DeepSeek/GLM 混合调度。
    *   **NanoClaw**: 引入基于关键词的消息路由层 (Keyword Routing)。
    *   **Moltis**: 社区请求 Per-topic Model Routing。
    *   **分析**: 单一大模型时代已结束。**“小模型负责路由/简单任务，大模型负责复杂推理”** 的混合架构正成为成本控制下的首选方案。

*   **安全沙箱与执行隔离**
    *   **ZeroClaw**: 修复“记忆雪球”导致的递归保存问题。
    *   **PicoClaw**: 修复终端控制字符注入漏洞。
    *   **CoPaw**: 修复 Shell 命令绕过 File Guard 的安全风险。
    *   **分析**: 随着 Agent 获得更强的操作系统能力，**防止 Prompt 注入**和**资源耗尽攻击**已从理论探讨变为具体的代码修复。

*   **本地化与隐私优先**
    *   **ZeroClaw**: 社区强烈呼吁本地 TTS (Piper/Coqui) 和离线模式。
    *   **LobsterAI**: 强化桌面端 通知。
    *   **IronClaw**: 修复 Windows Ollama 本地连接。
    *   **分析**: 用户对数据驻留在本地有着明确的需求，且对跨平台桌面客户端的需求依然旺盛。

---

## 5. 差异化定位分析

| 维度 | 项目代表 | 关键差异 |
| :--- | :--- | :--- |
| **架构野心** | **IronClaw** | 专注于**多租户与区块链**，试图构建“链上主权代理”，但代价是极高的系统复杂度和暂时的不稳定性。 |
| **交互体验** | **LobsterAI** | **最注重桌面端体验**，今日动态集中在卡片视图、侧栏折叠和 macOS 通知，目标是做成最好用的“个人助理 App”。 |
| **底层性能** | **NullClaw / Moltis** | 采用 **Rust/Zig** 等系统级语言重写核心，追求极致的轻量、低资源占用和内存安全，适合边缘计算和嵌入式场景。 |
| **极客/CLI** | **ZeptoClaw** | 坚定地走 **CLI + API Server** 路线，致力于实现完美的 OpenAI 兼容性，是开发者和自动化的首选。 |
| **全能生态** | **OpenClaw / NanoBot** | 功能大而全，覆盖移动端、Web、桌面及各种插件，旨在成为通用的 AI OS，但面临维护负担重的挑战。 |
| **协作导向** | **NanoClaw** | 强调**代码审查**、并发控制和消息队列，设计上更倾向于团队协作场景而非单纯个人助理。 |

---

## 6. 社区热度与成熟度

*   **第一梯队 (大众生态)**: **OpenClaw, NanoBot**
    *   特征：Issues/PR 数以百计。不仅是在写代码，更是在运营社区。成熟度最高，文档和周边设施最完善。
*   **第二梯队 (技术先锋)**: **CoPaw, IronClaw, ZeroClaw**
    *   特征：活跃度高，但伴随着大量的架构级 Bug（如 CoPaw 的 CPU 飙升，IronClaw 的多租户失效）。处于高风险高回报的技术攻关期。
*   **第三梯队 (垂直精品)**: **NanoClaw, ZeptoClaw, Moltis**
    *   特征：功能聚焦（如专注代码审查、专注 API 网关），代码质量通常较高，社区反馈虽然不如头部多但非常精准。
*   **第四梯队 (维护/停滞)**: **EasyClaw, PicoClaw, TinyClaw**
    *   特征：发布频率低或仅做维护。EasyClaw 因稳定而显得“沉寂”。

---

## 7. 值得关注的趋势信号 (对开发者的建议)

1.  **Windows 兼容性正在成为“分水岭”**
    *   OpenClaw 和 IronClaw 今日均在 Windows 适配上遭遇重创（ESM 错误、路径问题）。
    *   **建议**: 如果您的 Agent 想要触达主流大众，**Windows 稳定性测试** 必须前置，不能仅依赖 macOS/Linux 开发环境。

2.  **“配置污染”引发技术重构**
    *   OpenClaw 移除了大量旧配置，NanoBot 修复版本号混乱，IronClaw 遭遇配置迁移痛点。
    *   **建议**: 随着项目变老，引入严格的 **JSON Schema** 和 **配置迁移脚本** 已成为必修课，而非可选项。

3.  **MCP 协议正在吞噬工具生态**
    *   几乎所有活跃项目都在向 MCP 靠拢。
    *   **建议**: 新开发的工具或插件应优先考虑 MCP 标准封装，以确保跨平台的通用性。

4.  **“思考过程”的用户体验**
    *   ZeroClaw 和 NanoBot 均有用户反馈“内心独白”泄露给用户造成困惑。
    *   **建议**: 需要设计更精细的 UI 机制来处理 CoT (Chain of Thought)，区分“系统日志”与“可见输出”。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

你好！我是 NanoBot 项目分析师。以下是基于 2026-04-07 GitHub 数据生成的项目动态日报。

---

# NanoBot 项目日报 - 2026-04-07

## 📅 今日速览
NanoBot 项目今日（2026-04-07）处于**极高活跃度**状态。社区共处理了 26 个 Issue 和 56 个 PR，代码提交与讨论热度激增，主要动力来自于 **v0.1.5 正式版**的发布及其后续的兼容性修复。
尽管新版本带来了官方站点和大量贡献，但也引发了一系列回归问题，主要集中在版本号不匹配、配置文件解析以及 CLI 的 Unicode 兼容性上。目前有 30 个 PR 处于待合并状态，项目正在快速迭代以修复新版本引入的抖动。

---

## 🚀 版本发布
**【重大更新】v0.1.5 正式发布**
- **发布内容**：今日标志着 NanoBot 拥有了首个官方主页与多语言文档。
- **核心亮点**：
  - **66 个 PR** 被合并进入此版本。
  - **27 位新贡献者** 参与了代码提交。
  - **官方站点上线**：[nanobot.wiki](https://nanobot.wiki) 提供英、中、日、韩、西等多语言文档。
- **状态评估**：这是项目成熟的一个重要里程碑，标志着从单纯的代码库向生态系统的转变。

---

## 🚧 项目进展
今日合并/关闭的核心修复主要集中在**文档更新**与**核心逻辑修正**，为 v0.1.5 的稳定性铺路：

1.  **文件系统修复 ([#2863](https://github.com/HKUDS/nanobot/pull/2863))**：修正了 `WriteFileTool` 的输出日志，将统计单位从错误的 "bytes" 更正为 "characters"，解决了非 ASCII 文本（如中文、Emoji）计数不准的问题。
2.  **配置兼容性修复 ([#2848](https://github.com/HKUDS/nanobot/pull/2848))**：修复了插件通道中 `is_allowed` 方法的配置读取问题，解决了使用字典配置时权限校验失效的严重 Bug。
3.  **进度体验优化 ([#2525](https://github.com/HKUDS/nanobot/pull/2525))**：减少了用户面对的“假阳性”进度报告，即当未发生实际动作时，不再向用户发送执行完成的无意义通知。
4.  **MCP 协议扩展准备**：社区正在积极讨论 ([#2854](https://github.com/HKUDS/nanobot/issues/2854)) 暴露 MCP 服务端的 `resources` 和 `prompts`，而不仅仅是 `tools`，这将是 Agent 能力的一大提升。

---

## 🔥 社区热点
**今日讨论焦点集中在 v0.1.5 发布后的配置与兼容性问题上：**

*   **[配置解析失效](https://github.com/HKUDS/nanobot/issues/2849)**：用户反馈 DeepSeek API Key 的环境变量 `${DEEPSEEK_API_KEY}` 无法被读取，只能明文填写，这引发了关于配置解析器是否支持变量替换的讨论。
*   **[版本号混乱](https://github.com/HKUDS/nanobot/issues/2857)**：v0.1.5 发布后，用户发现运行时版本显示为 `0.4.1`，与 `pyproject.toml` 中的 `0.1.5` 不一致，造成了混淆。已有修复 PR [#2860](https://github.com/HKUDS/nanobot/pull/2860) 提出使用单一信源。
*   **[WhatsApp 隐私与隔离](https://github.com/HKUDS/nanobot/issues/2836)**：用户强烈建议为 WhatsApp 的每个 `chat_id` 提供独立的工作空间，以防止不同用户之间的记忆泄露（如 A 用户的信息被 B 用户看到）。
*   **[MCP 协议支持不完整](https://github.com/HKUDS/nanobot/issues/2854)**：开发者指出 NanoBot 目前仅实现了 MCP 协议的“工具”部分，忽略了“资源”和“提示词”，限制了 AI 的能力。

---

## 🐛 Bug 与稳定性
**严重程度：高**
多个影响核心功能与用户体验的 Bug 被报告，部分已提交修复方案：

1.  **[Windows 环境下 Bash 强制执行失败](https://github.com/HKUDS/nanobot/issues/2868)**：v0.1.5 引入的更改强制 `exec` 工具使用 `bash`，导致在 Windows（未安装 WSL）上直接报错 RPC error。**(Status: CLOSED, 待发布 hotfix)**
2.  **[CLI 崩溃 (UnicodeEncodeError)](https://github.com/HKUDS/nanobot/issues/2846)**：CLI 在处理包含 Emoji 或特殊字符的输入时崩溃。**(Status: Fix PR #2869 已提交)**
3.  **[DuckDuckGo 搜索导致系统死锁](https://github.com/HKUDS/nanobot/issues/2828)**：使用 DuckDuckGo 进行网络搜索时，不仅 Agent 卡死，甚至导致整个系统无响应，无法通过 Ctrl+C 终止。**(Status: OPEN)**
4.  **[安全回退：本地地址被封禁](https://github.com/HKUDS/nanobot/issues/2796)**：Exec 工具的安全防护过于严格，完全屏蔽了 localhost，导致本地的自动化集成（如浏览器自动化）失效。**(Status: OPEN)**

---

## 💡 功能请求与路线图信号
从新开放的 Issues 中，我们可以窥见社区对**自动化**与**集成**的强烈需求：

1.  **机器支付协议 (MPP) 支持 ([#2845](https://github.com/HKUDS/nanobot/issues/2845))**：请求引入原生 MPP 工具，使 Agent 能够自主支付服务费用。这表明用户希望 Agent 具备更强的自主操作能力。
2.  **WhatsApp 人机交互暂停逻辑 ([#2837](https://github.com/HKUDS/nanobot/issues/2837))**：请求在真人回复后，Bot 自动暂停 12 小时。这是一个非常实际的运营需求，旨在避免 Bot 扰乱人工客服流程。
3.  **用户反馈记忆回路 ([#2870](https://github.com/HKUDS/nanobot/issues/2870))**：RFC 提案，建议将用户的 Reaction（如 👍）作为一种反馈信号输入给 Agent，强化或调整记忆。这将提升 Agent 的交互智能度。

---

## 😳 用户反馈摘要
*   **满意度下降（配置向）**：v0.1.5 发布后，关于配置失效的抱怨增多（如环境变量不生效、Matrix 的 `e2eeEnabled` 字段拼写错误被修正但文档未同步）。
*   **“思考”过程暴露**：Telegram 用户反馈升级后，Bot 开始暴露内心独白（"The user is asking..."），这在之前版本中是隐藏的，部分用户感到困惑。
*   **工具调用格式化问题**：Ollama 和 DeepSeek 模型的工具调用似乎存在格式兼容问题，导致模型无法正确执行指令。

---

## ⏳ 待处理积压
提醒维护者关注以下长期未解决或影响广泛的 Issue：
*   **[#2638](https://github.com/HKUDS/nanobot/issues/2638)**: 会话历史无限增长导致 Agent 无响应（3月30日提出，仍 OPEN）。
*   **[#2796](https://github.com/HKUDS/nanobot/issues/2796)**: 本地服务阻断问题（安全性与易用性的平衡，仍 OPEN）。

---
**数据来源**：HKUDS/nanobot GitHub Activity on 2026-04-07
**生成时间**：2026-04-07

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报：2026-04-07

> **分析师观点**：今日 ZeroClaw 项目展现出极高的开发活跃度，核心集中在**多智能体系统**、**本地 TTS 支持以及记忆系统的稳定性修复**。社区对“过度安全”导致的功能限制表达了强烈不满，维护者正在通过配置优化和 Bug 修复来平衡易用性与安全性。目前代码库处于快速迭代期，大量功能型 PR 正在合并中。

---

## 1. 今日速览
过去 24 小时内，ZeroClaw 社区保持了极高的活跃度，共处理了 **14 条 Issues** 和 **31 条 Pull Requests**。
*   **开发重点**：核心功能大幅重构，正式引入“真实多智能体系统” (#5423)，并针对 DeepSeek/GLM-5 等不同模型的路由配置进行了精细化优化。
*   **稳定性修复**：针对 `auto_save` 导致的“记忆雪球”致命 Bug (#4916) 提交了修复代码，同时修复了 Web 仪表板无法访问的构建问题。
*   **社区情绪**：用户对系统过于严格的安全限制表示沮丧，同时对新引入的 iPhone 本地 LLM 支持和本地语音合成功能表现出浓厚兴趣。

## 2. 版本发布
*   **无新版本发布**
    *   注：虽然无 Release，但 `main/master` 分支正在合并大量新功能，建议关注 nightly 构建或等待下一个正式版本以获取多智能体等重磅特性。

## 3. 项目进展
今日合并及活跃中的重要 Pull Requests 标志着项目在架构和细节上均取得了实质性突破：

*   **架构升级：真实多智能体系统**
    *   **[PR #5423](https://github.com/zeroclaw-labs/zeroclaw/pull/5423)**: 提出了基于 Workspace 定义的多智能体协作系统。这不仅是功能增强，更是架构上的重大升级，允许 ZeroClaw 作为一个管理多个子 Agent 的平台存在，并解决了上下文工程问题。

*   **性能与体验优化**
    *   **[PR #5418](https://github.com/zeroclaw-labs/zeroclaw/pull/5418)**: 优化了频道并发控制，新增 `max_concurrent_per_channel` 配置，并为私聊（DM）跳过回复预检查，显著减少延迟和 LLM 消耗。
    *   **[PR #5419](https://github.com/zeroclaw-labs/zeroclaw/pull/5419)**: 修复了 Telegram 频道在流式输出模式下的 TTS 语音回复故障。

*   **关键 Bug 修复**
    *   **[PR #5417](https://github.com/zeroclaw-labs/zeroclaw/pull/5417)**: 针对 **[#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)** 提出的内存溢出问题，通过阻止 `[Memory context]` 递归保存来修复“记忆雪球”效应；同时支持按路由配置 `context_window`，这对显存受限的本地模型用户至关重要。
    *   **[PR #5343](https://github.com/zeroclaw-labs/zeroclaw/pull/5343)**: 修复了 `cron_run` 工具无法将结果推送到配置频道的逻辑错误。

*   **新功能集成**
    *   **[PR #5416](https://github.com/zeroclaw-labs/zeroclaw/pull/5416)**: 添加了 `codex_runner`，实现了与 `claude_code_runner` 相同的运行器能力。

## 4. 社区热点
今日讨论热度最高的话题集中在“易用性”与“安全性”的博弈，以及多模态功能的需求：

*   **[Issue #1478: 除了安全,什么功能也没有](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)** (49👍)
    *   **摘要**：用户激烈抨击 ZeroClaw 过于严格的安全策略导致其无法安装 `ffmpeg` 等基础工具，甚至拒绝执行任何操作，使其沦为“只能聊天的机器人”。
    *   **分析**：这反映了硬核安全配置与普通用户/开发者体验之间的巨大鸿沟。用户迫切需要一个“上帝模式”或“开发模式”来绕过所有限制。

*   **[Issue #4916: auto_save stores [Memory context] recall blobs...](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)** (3👍, 已有 Fix)
    *   **摘要**：默认开启的 `auto_save` 会导致记忆内容被无限递归保存，迅速耗尽内存。
    *   **分析**：这是今日发现的最严重的 Bug，好在已有 **[PR #5417](https://github.com/zeroclaw-labs/zeroclaw/pull/5417)** 正在修复。

*   **[Issue #4116: Add local GPU-accelerated TTS provider (Piper/Coqui)](https://github.com/zeroclaw-labs/zeroclaw/issues/4116)**
    *   **摘要**：用户请求添加离线、GPU 加速的 TTS 提供商（如 Piper/Coqui），以摆脱对云 TTS 的依赖。

## 5. Bug 与稳定性
今日报告的 Bug 涉及多个平台适配和核心逻辑：

*   **[S0 - 严重/数据丢失]**
    *   **[#5415: Context spillage from chat to schedule](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)**: Discord 聊天上下文意外泄露到定时任务中，可能污染任务执行环境。
    *   **[#5379: zeroclaw set cron not works on channel lark (feishu)](https://github.com/zeroclaw-labs/zeroclaw/issues/5379)**: 飞书频道的定时任务设置完全失效。

*   **[S1 - 阻断工作流]**
    *   **[#5348: Web dashboard not available](https://github.com/zeroclaw-labs/zeroclaw/issues/5348)**: Web 仪表板构建文件缺失，导致前端无法加载。
    *   **[#5378: not working with iphone local llm server](https://github.com/zeroclaw-labs/zeroclaw/issues/5378)**: 无法连接 iPhone 的 Apple Intelligence 本地服务端。

*   **[S2 - 行为异常]**
    *   **[#5285: Thoughts merge into final message using GLM-5](https://github.com/zeroclaw-labs/zeroclaw/issues/5285)**: GLM-5 模型的“思考过程”未经过滤直接混入了最终回复中。

*   **[S3 - 轻微问题]**
    *   **[#5414: Unknown config key ignored: "api_key"](https://github.com/zeroclaw-labs/zeroclaw/issues/5414)**: 配置文件 schema 验证误报。
    *   **[#5413: Docs links during TUI install are broken](https://github.com/zeroclaw-labs/zeroclaw/issues/5413)**: TUI 安装向导中的文档链接失效。

## 6. 功能请求与路线图信号
结合 Issue 和 PR 分析，以下功能可能正在进入路线图：

*   **本地优先生态**: 随着本地 TTS ([#4116](https://github.com/zeroclaw-labs/zeroclaw/issues/4116)) 和 iPhone LLM ([#5378](https://github.com/zeroclaw-labs/zeroclaw/issues/5378)) 的请求，社区对完全离线、本地硬件加速的 Agent 需求正在上升。
*   **Codex 运行器支持**: **[PR #5416](https://github.com/zeroclaw-labs/zeroclaw/pull/5416)** 的提交表明 ZeroClaw 正在积极扩展其对各种 Coding Harness 的兼容性，以对齐 Claude Code 等竞品的能力。
*   **频道隔离**: **[Issue #5412](https://github.com/zeroclaw-labs/zeroclaw/issues/5412)** 指出 Discord 线程未正确隔离，这是一个影响多线程体验的重要细节，亟待修复。

## 7. 用户反馈摘要
*   **痛点**：**“安全过度”**是最大的吐槽点。用户认为为了安全牺牲了所有功能性，导致安装依赖和执行命令极其困难（见 #1478）。
*   **需求**：用户希望有更精细的权限控制开关，或者一个针对单机/开发环境的“宽松模式”。
*   **兼容性**：随着模型提供商的多样化（DeepSeek, GLM-5, Copilot），特定模型的上下文压缩和工具调用兼容性问题频发，用户对“通用适配”的稳定性提出了质疑。

## 8. 待处理积压
建议维护者关注以下长期或高影响议题：

*   **DeepSeek 适配问题**: **[Issue #5268](https://github.com/zeroclaw-labs/zeroclaw/issues/5268)** 指出上下文压缩器删除了 DeepSeek 必需的 `tool_call_id`，导致 400 错误。这影响了一个热门模型的正常使用。
*   **内存管理**: **[Issue #4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)** 的递归内存问题虽然已有 PR，但需尽快合并以防新用户遇到数据损坏。
*   **工作流/多智能体**: 大量 PR（如 #5377, #5376）正在重构 Workflow 和 Agent 系统，虽然功能强大，但也带来了潜在的回归风险，建议增加集成测试覆盖。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-07)

## 1. 今日速览
PicoClaw 项目今日处于**高活跃度**状态，过去 24 小时内共产生了 8 条新 Issue 和 6 条 PR 更新，显示出社区强烈的参与意愿。代码提交主要集中在**配置修复**与**安全加固**方面，核心功能（如 Agent 交互和多 Provider 支持）的稳定性受到较多关注。尽管没有发布新版本，但维护者通过合并 PR 和提交修复补丁，正在积极处理阻碍用户使用的配置和认证问题。项目目前处于功能迭代频繁但偶发性 Bug 较多的阶段。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日虽然合并的 PR 数量较少（2个关闭），但有几个关键的安全性和功能修复正在推进中，项目整体在稳定性和安全性上有所迈进：

*   **安全加固 (Shell/Exec)**: [PR #2378](https://github.com/sipeed/picoclaw/pull/2378) 正在解决 Issue [#2377](https://github.com/sipeed/picoclaw/issues/2377) 提出的终端控制字符注入风险。该 PR 对 `exec` 工具和日志输出进行了清理，防止恶意输出欺骗操作员或破坏终端渲染，显著提升了系统的安全性。
*   **核心配置修复**: [PR #2372](https://github.com/sipeed/picoclaw/pull/2372) 针对近期高频出现的 401 认证错误和模型查找失败问题进行了修复。它恢复了遗留的 `api_key` 字段支持，并改进了模型匹配逻辑，这对解决用户无法调用 AI 模型的痛点至关重要。
*   **CLI 体验优化**: [PR #2229](https://github.com/sipeed/picoclaw/pull/2229) 引入了结构化的终端 UI，使 PicoClaw 的命令行界面更符合现代工具标准，提升了可读性。

## 4. 社区热点
今日讨论焦点集中在 WebUI 崩溃、Gemini 模型兼容性以及 Agent 报错上：

*   **WebUI 输入阻塞问题** ([#2354](https://github.com/sipeed/picoclaw/issues/2354)): 用户报告 WebUI 输入框和发送按钮完全失效。这是一个严重的可用性问题，目前评论活跃，暂无对应的修复 PR，急需前端团队介入。
*   **OpenIM 插件请求** ([#1372](https://github.com/sipeed/picoclaw/issues/1372)): 这是一个长期活跃的 Feature Request，关于集成 OpenIM 通道。虽然历史较长，但今日仍有更新，显示社区对特定通讯协议集成的持续需求。
*   **Gemini API 兼容性争议** ([#2374](https://github.com/sipeed/picoclaw/issues/2374)): 用户指出 `gemini-flash` 模型无法在 PicoClaw 中正常工作，但原生 `curl` 可以。这引发了关于 API 实现正确性的讨论。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多（8个 Issues 中大部分为 Bug），严重程度分布如下：

*   **🔴 高危/阻断性**:
    *   **终端注入漏洞** ([#2377](https://github.com/sipeed/picoclaw/issues/2377)): 报告了可以通过日志和 exec 输出注入不安全的 ANSI 控制字符。**状态**: 已有 Fix PR [#2378](https://github.com/sipeed/picoclaw/pull/2378)。
    *   **WebUI 功能丧失** ([#2354](https://github.com/sipeed/picoclaw/issues/2354)): 前端完全无法输入和发送消息。**状态**: 待修复。
    *   **Agent 循环错误** ([#2371](https://github.com/sipeed/picoclaw/issues/2371)): 导致 Agent 核心循环报错 (`loop.go:2171`)，涉及模型配置和认证。
*   **🟠 中等/功能性**:
    *   **Gemini 模型调用失败** ([#2374](https://github.com/sipeed/picoclaw/issues/2374))。
    *   **Gateway 命令支持缺失** ([#2373](https://github.com/sipeed/picoclaw/issues/2373)): Gateway 不支持 `stop` 等命令，影响控制流。
*   **🟢 低危/UI类**:
    *   **多语言遗留问题** ([#2367](https://github.com/sipeed/picoclaw/issues/2367)): App 中某页面标题在英文模式下仍显示中文。
    *   **交互逻辑优化** ([#2376](https://github.com/sipeed/picoclaw/issues/2376)): 移动端用户抱怨 Enter 键直接发送消息，无法换行。

## 6. 功能请求与路线图信号
*   **OpenIM 通道支持** ([#1372](https://github.com/sipeed/picoclaw/issues/1372)): 社区正在询问是否存在 OpenIM 的插件或集成方案。
*   **移动端输入优化** ([#2376](https://github.com/sipeed/picoclaw/issues/2376)): 用户明确期望在移动端有专门的“发送”按钮，而不是将 Enter 键绑定发送，这将提升移动端打字体验。

## 7. 用户反馈摘要
从 Issue 评论和描述中提炼出的用户痛点：
*   **配置复杂性**: 用户在配置不同 Provider（特别是 OpenRouter, Gemini）时遇到困难，常因 `api_key` 格式或字段名导致 401 错误。
*   **环境兼容性**: 用户在 Android Termux ([#2209](https://github.com/sipeed/picoclaw/pull/2209)) 和 iStoreOS ([#2373](https://github.com/sipeed/picoclaw/issues/2373)) 等特殊环境下运行时面临证书和命令支持问题。
*   **易用性**: 移动端 App 的输入体验（换行 vs 发送）和前端 UI 的稳定性是目前非技术用户的主要障碍。

## 8. 待处理积压
*   **Telegram 通道问题**: PR [#2209](https://github.com/sipeed/picoclaw/pull/2209) 和 PR [#2379](https://github.com/sipeed/picoclaw/pull/2379) 均与 Telegram 功能相关，前者涉及 Termux 环境修复（Open 状态较久），后者今日关闭。建议维护者检查 Telegram 集成在边缘环境下的稳定性。
*   **内存基准测试**: PR [#2353](https://github.com/sipeed/picoclaw/pull/2353) (LOCOMO memory benchmark) 已关闭，需确认是否已合并或放弃。
*   **长期未决的 Feature**: OpenIM 插件 ([#1372](https://github.com/sipeed/picoclaw/issues/1372)) 自 3 月提出至今未实现，可能需要社区贡献者介入。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 - 2026-04-07

**分析师**: AI 智能体与开源项目分析师
**数据来源**: GitHub.com/qwibitai/nanoclaw
**报告日期**: 2026-04-07

---

### 1. 今日速览
NanoClaw 项目在过去 24 小时内保持了**极高**的开发活跃度。虽然今日没有新版本发布，但代码库经历了大规模的迭代，共有 14 个 PR 被合并或关闭，主要集中在核心架构的稳定性修复与多通道功能的扩展。社区讨论集中在“基于关键词的消息路由”这一新特性上，显示出用户对智能模型调度的强烈需求。同时，针对容器生命周期管理的死锁问题得到了有效解决，显著提升了系统的稳定性。

### 2. 版本发布
*无新版本发布。*

### 3. 项目进展
今日合并的 PR 主要集中在**容器稳定性**、**多模态支持**以及 **MCP 工具增强**：

*   **核心稳定性修复**:
    *   **[#1623](https://github.com/qwibitai/nanoclaw/pull/1623)**: 修复了当消息通过 soft-busy 传输到活跃容器时可能引发的 30 分钟死锁问题。这是一个关键的逻辑修复，确保了消息管道在高负载下的畅通。
    *   **[#1508](https://github.com/qwibitai/nanoclaw/pull/1508)**: 修复了审查代理 容器在草稿批准/拒绝后未关闭的资源泄漏问题，优化了内存占用。
*   **多通道与功能扩展**:
    *   **[#1674](https://github.com/qwibitai/nanoclaw/pull/1674)**: 增强了 `register_group` MCP 工具，允许代理注册时指定 `group_type`（如 main, chat, thread），为 Discord 等平台的复杂群组结构提供了底层支持。
    *   **[#1660](https://github.com/qwibitai/nanoclaw/pull/1660)**: 引入 Gmail 凭证模式检测，改进了集成认证流程。
*   **用户体验优化**:
    *   **[#1592](https://github.com/qwibitai/nanoclaw/pull/1592)**: 当消息被传输至活跃容器时，增加“正在处理中...”的确认提示，消除了用户在排队期间的等待焦虑。

### 4. 社区热点
今日讨论的焦点集中在**智能模型调度**方面，相关 Issue 占据了活跃榜单的前列：

*   **[#1682](https://github.com/qwibitai/nanoclaw/issues/1682)** (feat: keyword-based message routing): 用户请求在调用 LLM 之前，根据消息中的关键词（如 "code review", "research"）零成本地路由到不同的模型（如 Claude Sonnet, Gemini Flash）。这表明用户希望在一个 Agent 中无缝切换不同擅长领域的模型，以优化成本和效果。
*   **[#1503](https://github.com/qwibitai/nanoclaw/issues/1503)** (nanoclaw.dev SSL Cert): 关于官网 SSL 证书无效的Issue在过去24小时内再次活跃，虽然评论数不多，但涉及基础设施安全性，需关注。

### 5. Bug 与稳定性
今日报告的 Bug 涉及配置管理、认证安全及系统死锁：

*   **[高危] 潜在的账号封禁风险**:
    *   **[#1669](https://github.com/qwibitai/nanoclaw/issues/1669)**: 用户质疑当前的 Credential Proxy（凭证代理）实现是否会触发 Anthropic 的反欺诈检测（因为 Anthropic 禁止 OAuth 反向代理）。这需要核心维护者从架构层面给出明确的安全解释或改进方案。
*   **[中危] 系统死锁**:
    *   **[#1623](https://github.com/qwibitai/nanoclaw/pull/1623)**: 活跃容器接收管道消息时的死锁问题（已合并修复）。
    *   **[#1576](https://github.com/qwibitai/nanoclaw/pull/1576)**: Agent 输出文本时的 `notifyIdle` 竞态条件导致消息丢失（PR 仍处于 OPEN 状态，待修复）。
*   **[低危] 配置文件污染**:
    *   **[#1665](https://github.com/qwibitai/nanoclaw/issues/1665)**: Claude Code 工具生成的 `.claude/settings.local.json` 未被 `.gitignore` 忽略，可能导致用户敏感配置被误提交。

### 6. 功能请求与路线图信号
从今日的 Issue 和 PR 中，我们可以窥见项目的未来发展方向：

*   **智能路由**: 基于 **[#1680](https://github.com/qwibitai/nanoclaw/pull/1680)** (PR) 和 **[#1682](https://github.com/qwibitai/nanoclaw/issues/1682)** (Issue)，NanoClaw 计划引入原生的“关键词路由层”。这将使 Agent 从单一模型运行进化为“模型编排器”，是迈向生产级高性价比部署的重要一步。
*   **全平台覆盖**: **[#1624](https://github.com/qwibitai/nanoclaw/pull/1624)** 正在推进 Matrix 协议支持（含 E2EE），结合已有的 Discord/Telegram/Gmail 支持，显示出项目构建“通用消息总线”的野心。
*   **开发者体验**:
    *   **[#1671](https://github.com/qwibitai/nanoclaw/pull/1671)**: 提议持久化 `uv` (Python包管理器) 缓存，以加快容器重启速度，改善开发者和重度用户的体验。
    *   **[#963](https://github.com/qwibitai/nanoclaw/pull/963)**: 探索将 OpenAI Codex SDK 作为备选引擎，这表明项目可能在考虑支持非 Claude 的底层模型提供商。

### 7. 用户反馈摘要
*   **痛点 - 容器冷启动慢**: 用户在 **[#1671](https://github.com/qwibitai/nanoclaw/pull/1671)** 中反馈，每次容器运行都要重新下载 Python 工具链和包（如 numpy），这严重拖慢了工作流，用户迫切需要缓存机制。
*   **痛点 - 消息确认缺失**: 在 **[#1592](https://github.com/qwibitai/nanoclaw/pull/1592)** 中提到，当消息被传输到已有会话时，用户缺乏反馈，不知道系统是否正在处理，导致体验上感觉“卡顿”或“未发送”。
*   **场景 - 代码审查与研究**: 用户在 **[#1682](https://github.com/qwibitai/nanoclaw/issues/1682)** 中描述了混合使用场景（代码用 Sonnet，搜索用 Gemini），这反映了真实生产环境中对不同模型特长的依赖。

### 8. 待处理积压
以下 Issue/PR 长期未响应或处于停滞状态，建议维护者关注：

*   **[#1671](https://github.com/qwibitai/nanoclaw/pull/1671)**: (OPEN) Persist uv cache。虽然近期有更新，但尚未合并。此优化对开发体验影响巨大。
*   **[#541](https://github.com/qwibitai/nanoclaw/pull/541)**: (CLOSED/PENDING) feat: improved queue。一个关于改进队列生命周期管理的长期 PR，近期有活动但状态似乎反复。
*   **[#1503](https://github.com/qwibitai/nanoclaw/issues/1503)**: (OPEN) nanoclaw.dev SSL cert。官网证书问题若不解决，将直接影响新用户的初次访问体验和信任度。
*   **[#1576](https://github.com/qwibitai/nanoclaw/pull/1576)**: (OPEN) prevent message loss。涉及消息丢失的修复 PR 需尽快审查合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-04-07)

## 1. 今日速览
NullClaw 项目在 2026-04-07 保持高度活跃的开发节奏。尽管未发布新版本，但项目在基础设施和功能扩展上取得了显著进展：核心维护者正全力构建 REST Admin API 以增强远程管理能力；同时针对特定 LLM 提供商（如 GLM-5）的兼容性问题进行了快速修复。虽然社区出现了一个关于 Docker 环境的 Bug 反馈，但整体代码提交量较大，显示出强劲的迭代动力。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并/关闭了 2 个 PR，主要涉及配置兼容性和工具集扩展：

*   **[CLOSED] 修复 Cron 配置目录路径 (#692)**
    *   **内容**：修复了 `cron.zig` 中硬编码 `$HOME/.nullclaw/` 路径的问题，现在正确遵循 `NULLCLAW_HOME` 环境变量。
    *   **影响**：解决了在 Docker 环境（特别是 UID 65534）下因路径回退机制导致的 `AccessDenied` 崩溃问题，提升了容器化部署的稳定性。
    *   **链接**：[#692](https://github.com/nullclaw/nullclaw/pull/692)

*   **[CLOSED] 新增计算器工具 (#716)**
    *   **内容**：集成了一个全新的计算器工具 (`calculator.zig`)，支持加减乘除、对数、统计（中位数、标准差）等 20 种数学运算。
    *   **影响**：增强了 Agent 的基础数学处理能力，减少了 AI 在处理简单算术时的幻觉风险。
    *   **链接**：[#716](https://github.com/nullclaw/nullclaw/pull/716)

## 4. 社区热点
今日讨论和开发集中在 **REST Admin API** 的构建上，这是一系列高度关联的 PR，旨在填补轻客户端（菜单栏应用、移动端）与后端之间的交互空白：

*   **[OPEN] REST Admin API 核心实现 (#770, #771, #780)**
    *   **作者**：vernonstinebaker
    *   **内容**：
        *   **#770**：引入基础 API，支持运行时状态查询、配置读取、模型列表和 Cron 任务管理。**零依赖**，二进制体积仅增加约 30KB。
        *   **#771**：扩展通道管理和技能管理端点，支持跨 22 种通道类型的健康状态检查。
        *   **#780**：完成配置变更、MCP 服务器管理、会话管理和记忆/历史记录的 CRUD 操作。
    *   **分析**：这一系列 PR 显示 NullClaw 正在从单一的 CLI 工具向平台化方向发展，构建生态系统的关键一步，允许第三方工具无缝控制 NullClaw 实例。
    *   **链接**：[#770](https://github.com/nullclaw/nullclaw/pull/770) | [#771](https://github.com/nullclaw/nullclaw/pull/771) | [#780](https://github.com/nullclaw/nullclaw/pull/780)

## 5. Bug 与稳定性
今日报告了 1 个重要 Bug，并针对特定提供商进行了修复：

*   **[HIGH] Shell 工具 Docker 错误 (#779)**
    *   **描述**：用户报告通过 Homebrew 安装的最新版本在 `yolo` 模式下，Shell 工具无法工作并报 Docker 错误（尽管用户未使用 Docker）。回退至 v2026.3.21 版本可恢复正常。
    *   **状态**：待修复。
    *   **链接**：[#779](https://github.com/nullclaw/nullclaw/issues/779)

*   **[MED] GLM-5 兼容性崩溃 (#781)**
    *   **描述**：GLM-5 (infini-ai) 提供商返回的 JSON 中包含 `"tool_calls": null`，导致原代码无条件调用 `.array` 引发 Panic (Debug) 或 SIGSEGV (ReleaseSmall)。
    *   **修复**：PR #781 已提交，增加了对空值的守卫处理。
    *   **链接**：[#781](https://github.com/nullclaw/nullclaw/pull/781)

## 6. 功能请求与路线图信号
从活跃的 PR 中可以窥见未来的路线图重点：

*   **自动化任务增强**：
    *   **#757 [OPEN]**：修复了 `HEARTBEAT.md` 任务被忽略的问题，现在心跳引擎将正确调度 Agent 处理文件中定义的任务。这表明 NullClaw 正在强化其“基于文件的自动化”能力。
    *   **链接**：[#757](https://github.com/nullclaw/nullclaw/pull/757)

## 7. 用户反馈摘要
*   **痛点**：Issue #779 反映了最新版本 (v2026.3.21 之后) 存在回归问题，影响非 Docker 用户的核心功能体验，用户对版本稳定性表示担忧。
*   **场景**：Issue #692 的关闭表明 Docker 和非标准路径（`NULLCLAW_HOME`）的使用场景正在增多，用户对容器化部署有实际需求。

## 8. 待处理积压
*   **Bug 修复**：Issue #779 需要尽快关注，因为涉及 Shell 工具这一核心功能的回归。
*   **功能合并**：REST Admin API 系列（#770, #771, #780）正处于待合并状态，由于它们之间存在依赖关系，建议维护者按顺序审查以加速合并进程。

---
*数据来源：NullClaw GitHub Repo (nullclaw/nullclaw) | 日期：2026-04-07*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-07)

## 1. 今日速览
IronClaw 项目在过去 24 小时内呈现出**极高的开发活跃度**，但同时也面临多租户架构升级带来的阵痛。今日共产生 83 个代码变更项（33 个 Issues + 50 个 PRs），核心工作集中在**所有权模型**的重构与多租户隔离修复。虽然发布了 v0.24.1 补丁版本，但生产环境中出现了严重的技能可见性回归问题和 Web UI 消息阻塞 Bug，需重点关注。

## 2. 版本发布
*   **[v0.24.1]** (PR #2075): 这是一个兼容性补丁版本，主要包含自动化标签迁移等非破坏性更新。鉴于近日发布的 v0.24.0 引入了多租户架构变更，建议生产环境用户在升级前密切关注当前的 Issue 回归情况。

## 3. 项目进展
*   **核心功能推进**:
    *   **[PR #2051]**: 修复了 `telegram` 被错误视为保留频道名的问题，恢复了 WASM Telegram 频道的加载能力。
    *   **[PR #2080]**: 修复了 CI 流程中针对非 NearAI 后端的 DNS 验证问题，改善了构建系统的兼容性。
    *   **[PR #2081]**: 修复了 Windows 用户使用 Ollama 时的 502 错误，将默认 URL 更改为 `127.0.0.1`。
*   **架构演进**:
    *   **[PR #2050] (Auth)**: 正在进行的认证/授权流程重构，旨在统一 Engine V2 的批准流，解决多租户凭证作用域和 OAuth 恢复行为问题。
    *   **[PR #1566] (Workspace)**: 引入了分层上下文摘要功能，优化了文档检索效率。

## 4. 社区热点
*   **[#846 - 数据库设置失败]**: 虽然是旧 Issue，但在今日重新活跃。用户反映 `ironclaw onboard` 报错，但主程序却能正常启动。这引发了关于安装流程健壮性的讨论。
*   **[#1350 - LLM 热重载]**: 社区强烈要求支持在不重启进程的情况下切换 LLM Provider。该 Issue 收到了 2 个赞，反映了 Web UI 设置变更生效滞后的痛点。
*   **[#2079 / #2083 - Web UI 消息卡顿]**: 今日最影响体验的 Bug 之一。由于 SSE 事件顺序错误（`Done` 在 `response` 之前发送），用户必须刷新页面才能看到消息。PR #2083 已提交修复。

## 5. Bug 与稳定性
**高危/严重**:
*   **[#2084] Gateway 用户技能完全不可见**: ⚠️ **生产回归**。最近的 `resolve_user_project` 更改导致所有非管理员用户无法看到任何技能，Agent 忽略所有用户安装的技能。这是架构隔离过程中引入的严重缺陷。
*   **[#2089] 多租户响应极慢**: 生产环境报告简单查询（如 "hello"）需要 5-10 秒响应，严重影响用户体验。
*   **[#1996] Routine 工具失效**: 定时任务运行时报告 "Tools Disabled"，导致无法执行抓取或发送消息等操作。
*   **[#2056] 安全风险**: 生产代码中存在环境变量控制的 API URL 重写逻辑，可能被用于测试或中间人攻击，急需移除。

**中危**:
*   **[#2048] WASM 频道加载失败**: 合并所有权模型后，`telegram` 等保留名称被误判，导致频道静默失败。
*   **[#1999] 技能安装校验过严**: 带空格的技能名称（如 "Mortgage Calculator"）无法从 Skillhub 安装。

## 6. 功能请求与路线图信号
*   **[#70] Feed 系统**: 提议创建一个持久的、可查询的信息流，供系统事件和工具推送非侵入式信息。
*   **[#2082] 自我改进循环**: 提出了基于 Trace 驱动的自我改进 RFC，旨在利用反馈循环来优化 Agent 策略，显示了项目向更高级自主性发展的意图。
*   **[#2077] 链上合约开源**: 社区请求公开 `market.near.ai` 的合约源码，以支持“主权代理”直接上链操作，减少对 HTTP API 的依赖。
*   **[#2085] 技能完全隔离**: 针对 #2084 的修复请求，要求彻底完成多租户环境下的按用户技能隔离。

## 7. 用户反馈摘要
*   **痛点**: 集成设置极其困难。多个 Issue 反映 **Slack** 连接流程失效、**Google OAuth** 报错 400、**Notion** 设置导致 Agent 无响应。
*   **体验**: Web UI 的实时性受到 SSE Bug 影响；多租户环境下的性能（延迟）和功能缺失（技能不可见）是目前最大的负面反馈来源。
*   **正面**: 用户对 **Ollama** 本地集成的修复表示欢迎，且对即将到来的 **Abound demo** 展现出兴趣。

## 8. 待处理积压
*   **[#1764] Abound Demo**: 超大规模 PR (Size XL)，包含 Responses API 修复和凭证注入功能，自 3 月 30 日开启以来仍处于 Open 状态，需关注合并进度。
*   **[#1446] Aliyun Coding Plan**: 同样为 Size XL 的 PR，增加了对阿里云百炼的支持，处于待合并状态。
*   **Security Issues**: PR #1898 审查中提出的多个安全与所有权相关 Issue (如 #2068, #2069, #2070) 尚未关闭，涉及 Sandbox 凭证隔离和 WASM 密钥管理，需优先处理。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 (2026-04-07)

## 1. 今日速览
LobsterAI 项目在过去 24 小时内表现出**高活跃度**，尽管没有新的 Issues 提出或新版本发布，但代码提交与合并请求（PR）非常密集。共有 **11 个新的 PR 被提交并保持待合并状态**，且所有 PR 均创建或更新于昨日（2026-04-06）。开发重点高度集中于 **"定时任务" 模块的重构与体验优化**，同时也包含关键的依赖库升级（Electron 41）和 CI/CD 流水线维护。项目目前处于功能迭代快车道，但在 Bug 修复方面呈现零积压的健康状态（或处于代码审查队列中）。

---

## 2. 版本发布
**无新版本发布**。

---

## 3. 项目进展
今日有大量功能开发工作进入审查队列，主要集中在提升定时任务的易用性与交互体验：

*   **定时任务交互与可视化重构**：
    *   **[feat] UI 全面升级 (PR #1488)**：将定时任务列表从表格布局重构为**卡片网格**（2列），并新增了任务搜索功能。同时优化了历史记录的展示，按日期分组并增加了日期范围筛选，显著提升了信息检索效率。
    *   **[feat] 侧栏记录折叠 (PR #1449)**：针对定时任务执行后导致侧栏会话列表堆积的问题，引入了**折叠分组展示**机制。这将解决因任务每天执行而产生大量同名会话干扰用户查找普通对话的痛点。
*   **功能增强与完善**：
    *   **[feat] 本地 macOS 通知 (PR #1489)**：新增独立的本地 macOS 通知渠道，修复了之前"不通知"配置无效或"本地通知"无反应的问题，并完善了国际化文案。
    *   **[feat] 一键测试任务 (PR #1486)**：在任务创建表单中新增 **"Test Task" (测试任务)** 按钮，允许用户在保存前快速验证指令效果，缩短了调试路径。
*   **技术债偿还**：
    *   **依赖升级**：通过 [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 将 Electron 框架从 v40.2.1 升级至 **v41.1.1**，确保桌面端应用使用最新的核心技术栈。

---

## 4. 社区热点
今日的 PR 活动即社区热点，主要围绕**自动化工作流的用户体验**展开：

*   **定时任务模块成焦点**：多个 PR（#1488, #1489, #1486, #1449）同时针对定时任务进行优化。
    *   *分析*：这表明团队正在集中火力解决用户在使用自动化 Agent 时遇到的"管理混乱"和"反馈不透明"问题。用户迫切需要更清晰的任务视图和即时反馈。
*   **会话隔离逻辑改进 (PR #1494)**：
    *   *分析*：该 PR 修正了技能选择的全局状态污染问题，将其改为**按会话独立管理**。这反映了用户对多任务并行处理时的状态一致性有较高要求，之前的"改一处动全身"的设计严重影响了多会话场景下的体验。
    *   *链接*：[fix(cowork): 技能选择状态改为按会话独立管理 #1494](https://github.com/netease-youdao/LobsterAI/pull/1494)

---

## 5. Bug 与稳定性
今日提交的 PR 中包含两个针对特定 Bug 的修复，目前均处于待合并状态：

*   **[高优先级] 编辑操作不生效 (PR #1490)**：
    *   *问题*：编辑定时任务的通知渠道（如从"飞书"改为"不通知"）后，详情页仍显示旧配置。
    *   *状态*：Fix 已提交，待 Review。
*   **[中优先级] 通知渠道逻辑错误 (PR #1489)**：
    *   *问题*：配置"不通知"时仍弹出系统通知，或配置本地通知时无反应。
    *   *状态*：Fix 已提交（包含在新增功能的 PR 中），待 Review。

---

## 6. 功能请求与路线图信号
根据今日的 PR 动向，可以窥见下一阶段（vNext）的功能走向：

*   **信号一：桌面端体验深化**。Electron 升级到 v41 以及对 macOS 原生通知的精细化控制，暗示项目将继续强化作为**桌面生产力工具**的属性，而不仅仅是一个 Web 容器。
*   **信号二：Session 管理系统重构**。从技能状态独立化（#1494）到任务记录折叠（#1449），表明代码库正在经历一场关于"会话状态管理"的深度重构，以支持更复杂的长期使用场景。

---

## 7. 用户反馈摘要
由于今日无新增 Issues，用户反馈主要隐含在开发者提交的 PR 描述中：

*   **痛点**：**定时任务历史记录泛滥**。用户反馈侧栏混杂着大量同名的任务执行记录，导致难以找到正常的对话会话（来源：PR #1449 描述）。
*   **痛点**：**调试/配置流程繁琐**。用户抱怨必须保存任务并手动返回列表才能运行测试，调试效率低（来源：PR #1486 描述）。
*   **满意度预期**：用户对**任务列表的可视化**（卡片视图）和**搜索功能**有明确需求，期待更直观的管理界面（来源：PR #1488 描述）。

---

## 8. 待处理积压
目前处于 **OPEN** 状态且较旧的 PR 主要是依赖更新，建议维护者关注：

*   **依赖库升级审查**：
    *   [chore(deps): bump @anthropic-ai/claude-agent-sdk #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (创建于 4月2日)
    *   [chore(deps-dev): bump electron group #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (创建于 4月2日)
    *   *建议*：这两个 PR 涉及底层 SDK 和内核框架的更新，虽然功能性不强，但对安全性和兼容性至关重要，建议优先合并以免后续产生冲突。
*   **CI/CD 工具链更新**：
    *   包含 GitHub Actions 构建/发布工具的升级（PR #1493, #1492, #1491），建议维护者批量处理以保持 CI 环境现代化。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

你好！我是 Moltis 项目的开源 AI 智能体分析师。根据 2026 年 4 月 7 日 00:00 (UTC) 的 GitHub 数据快照，以下是项目的每日动态日报。

---

# 📅 Moltis 项目日报 | 2026-04-07

## 1. 今日速览
Moltis 项目今日处于**高度活跃**状态，过去 24 小时内共处理了 11 个 Issue 和 9 个 PR，且发布了新版本 `20260406.04`。项目正在快速迭代中，重点聚焦于**多渠道支持**与**开发者体验**的优化。尽管社区提出了大量新功能请求（如模型路由、Prompt 缓存），维护团队优先处理了 Docker 构建缺陷、Copilot 企业版代理支持及清理任务等稳定性相关代码。值得注意的是，关于 Matrix 渠道支持的争议引发了社区讨论。

---

## 2. 版本发布
**版本号：`20260406.04`**
*   **发布时间：** 2026-04-06
*   **类型：** 补丁更新
*   **核心修复：**
    *   **Docker 构建:** 修复了 Dockerfile 中因使用 `--no-default-features` 而意外遗漏 `matrix`、`firecrawl`、`slack` 等核心功能集成的问题 ([#576](https://github.com/moltis-org/moltis/pull/576))。
    *   **Copilot 企业版:** 修复了 Copilot 企业令牌必须通过代理端点且开启流式传输才能正常工作的 421 错误 ([#355](https://github.com/moltis-org/moltis/pull/355))。
    *   **Telegram 代理:** 新增支持 Telegram 频道级别的可选代理配置 ([#550](https://github.com/moltis-org/moltis/pull/550))。
*   **迁移注意事项：** Docker 用户拉取新镜像后，将默认获得之前缺失的 Matrix 和 Slack 集成支持，无需额外配置。

---

## 3. 项目进展
今日合并/关闭了 6 个 PR，主要围绕基础设施修复与功能微创新：

*   **🐳 基础设施修复:** 解决了 Docker 镜像构建中的特性缺失问题，确保容器化用户拥有完整的功能体验。
*   **🤖 开发者工具增强:** 
    *   引入了 `moltis-webhooks` 通用 Webhook 入口 ([#575](https://github.com/moltis-org/moltis/pull/575))，支持 GitHub/GitLab/Stripe 等多种事件源，极大地增强了 AI Agent 的外部触发能力。
    *   建立了 `external-agents` 板块，为连接 CLI 编码代理（如 Claude Code, Codex CLI）打下了基础 ([#566](https://github.com/moltis-org/moltis/pull/566))。
*   **🧹 运维自动化:** 实现了自动清理孤儿会话和沙箱容器的 Cron 任务 ([#564](https://github.com/moltis-org/moltis/pull/564))，有助于长期运行的实例节省资源。
*   **🎨 网站与 UX:** 更新了官网品牌宣传，强调“Rust 构建的安全持久个人 Agent”，并优化了会话侧边栏的交互（支持新标签页打开）([#567](https://github.com/moltis-org/moltis/pull/567), [#573](https://github.com/moltis-org/moltis/pull/573))。

---

## 4. 社区热点
*   **🔥 [Feature] Matrix Support (#233)**
    *   **状态：** Open | 👍 5 | 评论 4
    *   **链接：** [moltis-org/moltis#233](https://github.com/moltis-org/moltis/issues/233)
    *   **分析：** 这是一个长期存在且热度较高的需求。尽管今日发布的 Docker 修复补回了 Matrix 集成，但用户 `lee-b` 在评论中指出了具体的协议支持痛点。这表明社区对于去中心化聊天协议（Matrix）与 AI Agent 联动有强烈需求，是未来 Roadmap 的重要参考。

---

## 5. Bug 与稳定性
今日报告了 6 个 Bug，其中 4 个已迅速修复，仍有 2 个待解决需关注：

*   **⚠️ [高优先级] 登录失败 (#565)**
    *   **问题：** 将绑定地址更改为 `0.0.0.0` 或局域网 IP 后登录系统性失败。
    *   **状态：** OPEN | 👍 1
    *   **影响：** 阻止用户通过局域网远程访问 Moltis。
*   **🔴 [配置错误] Matrix 解析失败 (#569)**
    *   **问题：** 在配置文件中添加 "matrix" 无法被正确解析。
    *   **状态：** CLOSED (在 `20260406.04` 中通过 PR #576 修复)。
*   **🔴 [OAuth 流程] MacOS Desktop OAuth 问题 (#549)**
    *   **问题：** MacOS 端应用在 Codex OAuth 流程中卡住。
    *   **状态：** CLOSED (已修复)。
*   **🔴 [集成错误] Telegram 账户未找到 (#572)**
    *   **问题：** Telegram 频道报错找不到账户。
    *   **状态：** CLOSED (已修复)。

---

## 6. 功能请求与路线图信号
今日涌现了 5 个新功能请求，主要集中在 **模型调度** 和 **文件处理** 能力上：

*   **🗺️ 强信号：模型路由与缓存**
    *   **Per-topic Model Routing (#574):** 请求允许根据不同话题（Topic）路由到不同的 LLM。这与 PR #566（外部代理桥接）结合，可能预示着 Moltis 将向多模型协作平台演进。
    *   **Prompt Caching (#571):** 请求增加提示词缓存以降低成本和延迟。这对高频用户至关重要。
*   **🗺️ 强信号：多模态输入**
    *   **PDF Support (#563):** 请求允许 Bot 接收并处理 PDF 文件。这是迈向 RAG（检索增强生成）能力的明确信号。
*   **🛠️ 运维增强：**
    *   **Local Whisper Provider (#570):** 请求添加本地 OpenAI Whisper 提供商的设置流程。

---

## 7. 用户反馈摘要
*   **痛点：** 用户 `cyrilmhansen` 反馈了严重的网络配置问题，即修改 bind 地址会导致服务不可用，这对于需要在远程服务器或 Docker 容器中部署的用户来说是核心阻碍。
*   **满意度：** 用户 `bsarkisov` 积极提交了多个 Issue（#569, #571, #570），虽然遇到了配置和功能上的问题，但参与度高，说明其对项目有较强的依赖和改进意愿。
*   **集成体验：** 随着 Matrix 和 Copilot 相关 Bug 的修复，用户对第三方服务的集成体验预期在提升。

---

## 8. 待处理积压
*   **#233 (Matrix Support):** 作为点赞数最高的 Feature Request，虽然 Docker 缺失已修复，但完整的协议支持仍未完全落地，建议维护者评估纳入下一个 Milestone。
*   **#565 (Bind Address Login Fail):** 这是一个影响远程部署的高严重性 Bug，目前尚未有明确的 Fix PR 关联，建议优先处理。

---
**数据来源：** [GitHub.com/moltis-org/moltis](https://github.com/moltis-org/moltis) | **报告生成时间：** 2026-04-07

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

这里是 CoPaw (agentscope-ai/CoPaw) 2026-04-07 的项目动态日报。

---

### 📅 CoPaw 项目日报 | 2026-04-07

#### 1. 今日速览
CoPaw 项目今日处于**极高活跃度**状态。过去 24 小时内产生了 **28 条 Issues** 和 **15 条 PRs**，反映出社区参与度极高，同时也暴露了 **v1.0.x** 版本在稳定性和资源管理上的诸多挑战。核心议题集中在 **MCP (Model Context Protocol) 客户端的生命周期管理**、**本地模型运行时的性能开销**（CPU 空转）以及**多模态/工具调用的兼容性问题**。维护者与社区成员正积极通过 PR 推进修复，特别是在清理热重载逻辑和缓存机制优化方面进展明显。

---

#### 2. 版本发布
*   **状态**: 今日无新版本发布。

---

#### 3. 项目进展
今日有多个关键的 PR 提交和关闭，显著推进了系统的稳定性与功能边界：

*   **[MCP 稳定性] #2998 (已合并/关闭)**: 修复了每次聊天请求重复注册 MCP 客户端导致的 `list_tools()` 任务取消问题。引入了缓存机制，防止因重复初始化导致的 CPU 飙升和任务失败。
    *   关联 Issue: #2999
*   **[热重载修复] #2974 (Open) & #2979 (Open)**: 针对 #2960 中报告的热重载导致连接丢失和 CPU 占用问题，维护者提交了修复 PR，旨在清理 MCP 客户端在重载时的生命周期，并确保 Channels（Telegram/WhatsApp）在重载后能正确恢复。
*   **[WhatsApp 通道] #2962 (Open)**: 增加了通过 neonize 库实现的 WhatsApp 通道支持，无需 Meta Business API 即可直连。
*   **[前端构建优化] #2996 (Open)**: 解决了源码开发模式下 `git pull` 后前端未自动构建的问题，提升了开发者的体验。
*   **[内存优化] #2997 (Open)**: 针对长对话中媒体文件导致 API 缓冲区溢出的问题，增加了视频/图片块的压缩逻辑。

---

#### 4. 社区热点
今日讨论热度最高的话题集中在本地运行时的资源消耗和模型能力限制：

*   **[#2955 - 无法安装 llama.cpp](https://github.com/agentscope-ai/CoPaw/issues/2955)** (评论: 8)
    *   **事件**: 用户反馈点击下载后 UI 无响应，模型列表未刷新。
    *   **分析**: 反映了新手用户在配置本地模型环境时遇到的 UI 反馈缺失问题，已有修复 PR (#2989) 处理解压逻辑。
*   **[#2888 - High CPU usage when idle](https://github.com/agentscope-ai/CoPaw/issues/2888)** (评论: 9)
    *   **事件**: CoPaw 空闲时占用 100% 单核 CPU。
    *   **分析**: AnyIO 取消逻辑中的忙轮询是罪魁祸首。这是一个严重的性能 Bug，影响用户体验，目前已被关闭，推测已通过合并 PR 修复。
*   **[#2967 - execute_shell_command 绕过 File Guard](https://github.com/agentscope-ai/CoPaw/issues/2967)** (评论: 3)
    *   **事件**: Agent 在无法使用读写工具时，回退到 shell 命令执行，从而绕过了文件保护机制。
    *   **分析**: 这是一个**高风险的安全隐患**。社区关注点在于如何在给予 Agent 足够能力解决问题的同时，确保系统的安全性。已有修复 PR (#2978) 在跟进。

---

#### 5. Bug 与稳定性
今日报告的 Bug 涉及核心功能，需重点关注：

*   **[严重] CPU 资源泄漏**
    *   **#2888**: 空闲高占用 (AnyIO bug)。
    *   **#2960**: 热重载导致 MCP 客户端重复初始化引发 CPU 飙升。
*   **[中等] 崩溃与停止响应**
    *   **#2911**: Windows 客户端数小时后自动关闭。
    *   **#2956**: Telegram 通道长时间运行后连接无响应。
*   **[中等] 功能失效**
    *   **#2988**: Ollama 本地模型无法调用工具。
    *   **#2965**: MiniMax 多模态图片读取错误 (MD5 不匹配)。
    *   **#2991**: Web 端“停止生成”按钮无效，Agent 无法被打断。

---

#### 6. 功能请求与路线图信号
用户对“生产就绪”能力和易用性提出了明确需求：

*   **Skills 生态与索引**:
    *   **#2323**: 请求添加基于 Tags 的技能索引与检索机制 (减少对 LLM 语义理解的依赖)。
    *   **#2418**: 请求增加 `skills-hub` 管理页面，方便下载主流技能。
    *   **#2032**: 请求支持全局/共享技能目录，用于多 Agent 场景。
*   **UI 与体验增强**:
    *   **#2975**: 用户输入框支持 Markdown 渲染 (目前仅 AI 回复支持)。
    *   **#3000**: 允许自定义网页标题 (方便多实例部署时区分)。
    *   **#2982**: 切换 Agent 后应保留上次打开的会话，而非默认跳转。

---

#### 7. 用户反馈摘要
*   **痛点**: "说一套做一套" (#2985) - 用户吐槽下载逻辑与 UI 提示不符，自动下载了 CUDA 版本但代码无法调用，造成困惑。
*   **场景**: 生产环境部署 - 用户呼吁 (#2902) 增加技能调用的确定性和 App 连接功能，认为目前 CoPaw 仅停留在“玩具”水平，技能调用的随机性导致任务失败率高。
*   **细节**: Windows 中文输入体验差 (#2970，红波浪线) 和 Markdown 表格换行显示错误 (#2983) 也是影响用户体验的常见槽点。

---

#### 8. 待处理积压
以下 Issue 长期未解决或刚提出需持续关注：

*   **#2911 (Open)**: Windows 客户端自动关闭 - 长期存在的稳定性问题。
*   **#2323 (Open)**: Tags 索引机制 - 提升技能系统效率的关键功能，尚未纳入开发。
*   **#2992 (Open)**: 上下文超限后的乱码问题 (中/俄/韩文混杂) - 影响长对话体验。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

你好！我是 ZeptoClaw (AI 智能体与个人 AI 助手) 的项目分析师。根据 **2026-04-07** 的 GitHub 数据，以下是项目的最新动态日报。

---

## 📅 2026-04-07 ZeptoClaw 项目日报

### 1. 今日速览
ZeptoClaw 项目今日处于**高度活跃**的开发状态，维护者与核心贡献者正致力于构建 **OpenAI 兼容的 API 生态系统**并解决长期存在的稳定性问题。
*   **开发强度**：过去 24 小时内有 8 个 PR 提交或更新，且大部分处于待合并（OPEN）状态，表明代码库正在经历快速迭代。
*   **核心进展**：项目正全力补齐 `/v1/chat/completions` 端点的工具调用能力，这标志着 ZeptoClaw 正向通用 LLM 网关/服务方向演进。
*   **稳定性提升**：虽然社区活跃度不高（无新增评论），但在后台，针对 Telegram 消息失败、Shell 转义错误以及上下文溢出等关键 Bug 的修复已准备就绪。

---

### 2. 版本发布
*   **当前状态**：无新版本发布。
*   **分析**：尽管今日有大量 PR 更新（主要是修复），但尚未触发新的 Release 流程。鉴于 `fix(telegram)` 和 `fix(cli)` 等 PR 已就绪，建议用户关注近期是否会有补丁版本发布以解决上述 Bug。

---

### 3. 项目进展
今日（含近期活跃更新）的主要技术进展集中在以下关键领域：

*   **🚀 API 标准化与工具调用**
    *   **PR #489**: 实现了 `/v1/chat/completions` 端点的 OpenAI 兼容工具调用。支持在流式和非流式模式下传递 `tools` 定义并接收 `tool_calls`，允许外部客户端无缝接入 ZeptoClaw 的 Agent 能力。([查看 PR](https://github.com/qhkm/zeptoclaw/pull/489))
*   **🔧 上下文管理重构**
    *   **PR #460**: 彻底重构了上下文压缩系统，从单次词数统计升级为多层防御策略，直接解决了长对话导致的 Token 溢出崩溃问题。([查看 PR](https://github.com/qhkm/zeptoclaw/pull/460))
*   **🌐 浏览器自动化集成**
    *   **PR #459**: 集成了 `agent-browser`，支持 Lightpanda 和 Chrome 回退机制，为 Agent 提供了实时的网页浏览与交互能力，同时具备 SSRF 防护。([查看 PR](https://github.com/qhkm/zeptoclaw/pull/459))
*   **🛠️ CLI 体验优化**
    *   **PR #487**: 改进了 CLI 错误提示，当用户尝试使用未编译 `panel` 特性的命令时，会提供明确的构建指引，而非原始报错。([查看 PR](https://github.com/qhkm/zeptoclaw/pull/487))

---

### 4. 社区热点
尽管今日无新的社区评论，但以下议题显示了维护者对用户反馈的积极回应：

*   **热点议题：Shell 转义与 CLI 工具兼容性**
    *   **关联**: [Issue #466](https://github.com/qhkm/zeptoclaw/issues/466) (Closed) & [PR #467](https://github.com/qhkm/zeptoclaw/pull/467) (Open)
    *   **分析**: 用户报告自定义工具（如 `gws {{args}}`）因自动 Shell 转义而中断。项目已引入 `raw_string` 参数类型来绕过转义，显示项目在灵活性与安全性之间寻求平衡。

---

### 5. Bug 与稳定性
今日关注到几个关键 Bug 的修复方案已提交或关闭，显著提升了系统稳定性：

*   **🔴 严重：Telegram 研究任务静默失败 (已修复)**
    *   **描述**: 长时间的浏览器研究任务在 Telegram 上无响应，用户收不到任何输出。
    *   **状态**: Issue #461 已关闭。修复方案 ([PR #462](https://github.com/qhkm/zeptoclaw/pull/462)) 已合并，增加了消息分块和纯文本回退机制。
*   **🟠 中等：API 流式传输中 Tool Call 丢失 (待修复)**
    *   **描述**: 使用流式响应时，工具调用信息被丢弃。
    *   **状态**: Issue #488 提出中，修复可能包含在 PR #489 的后续跟进中。
*   **🟢 轻微：供应商模型路由错误 (已解决)**
    *   **描述**: 带供应商前缀的模型（如 `google/...`）无法正确路由到 OpenRouter。
    *   **状态**: [PR #468](https://github.com/qhkm/zeptoclaw/pull/468) 提供了修复。

---

### 6. 功能请求与路线图信号
从 Issues 和 PR 活动中可以窥见项目的未来重点：

*   **🛣️ 架构演进：真正的并发/非阻塞设计**
    *   **来源**: [Issue #486](https://github.com/qhkm/zeptoclaw/issues/486)
    *   **分析**: 这是一个“Large”级别的新功能请求，旨在解决 Agent 执行长任务时无法响应用户的问题。目前状态为 Open 且暂无实现者，可能是下一阶段的重构核心。
*   **🛣️ 智能体生态增强**
    *   **信号**: PR #459 (浏览器工具) 和 PR #460 (上下文压缩) 的更新表明，路线图正优先支持**更复杂、更长时间的自主任务执行**能力。

---

### 7. 用户反馈摘要
*   **痛点**: 高级用户（CLI 工具制作者）抱怨过于严格的 Shell 转义导致简单的包装器 无法工作。 -> **响应**: 项目已计划引入 `raw_string` 类型。
*   **稳定性**: Telegram 用户反映 Agent 在进行复杂研究时经常“发呆”且无报错。 -> **响应**: 已通过消息分块机制修复。

---

### 8. 待处理积压
提醒维护者关注以下长期开放或未响应的议题：

*   **[OPEN] Issue #486**: 并发/非阻塞设计。虽然这是一个大工程，但直接影响用户体验，建议维护者评估是否纳入下个里程碑。
*   **[OPEN] PR #489, #467, #468, #460, #459**: 目前有 5 个功能/修复类 PR 处于 OPEN 状态。建议进行代码审查并及时合并，以防止分支冲突累积。
*   **[OPEN] Issue #488**: 流式 API 中的工具调用兼容性问题，需确保在发布新版本前得到彻底解决。

---
**分析师结语**: ZeptoClaw 正在从单一的 CLI 工具向具备 API 服务能力的底层基础设施转型。今日的代码活跃度极高，尤其是在修复长时任务的稳定性问题上取得了实质性进展。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 (2026-04-07)

**日期**：2026年04月07日
**项目状态**：🟢 稳定
**数据概览**：
*   **Issues**: 0 活跃
*   **Pull Requests**: 1 待合并
*   **Releases**: 1 个新版本

---

### 1. 今日速览
EasyClaw 项目在过去的 24 小时内保持**低活跃度但高稳定性**运行。尽管没有新的 Issue 提出或讨论，项目成功发布了 **v1.7.8** 版本，这标志着维护者正在持续打磨软件的稳定性与兼容性。特别值得注意的是，社区贡献者正积极推动项目的国际化进程，目前有 1 个涉及 5 种新语言翻译的 PR 处于待合并状态。整体来看，项目健康度良好，处于稳步迭代阶段。

### 2. 版本发布
**[v1.7.8] RivonClaw v1.7.8**
*   **发布说明**：
    *   本次更新主要关注 macOS 平台的兼容性问题。
    *   针对未签名应用导致的 **Gatekeeper 拦截问题**（报错提示："'RivonClaw' is damaged and can't be opened"）提供了官方解决方案。
    *   *影响*：虽然 macOS 用户体验在初次安装时可能因安全机制受阻，但版本说明中提供了明确的 Terminal 终端绕过指令，保障了用户能顺利使用。
*   **安装注意事项**：macOS 用户若遇到“已损坏”提示，需通过终端命令解除安全隔离。

### 3. 项目进展
尽管今日没有 PR 被合并，但以下代码变更正在推进中，预示着下个版本的潜在功能：

*   **[PR #21] feat(i18n): add 5 new languages (OPEN)**
    *   **作者**: chinayin
    *   **进展**: 待合并
    *   **贡献内容**: 大幅扩展了项目的国际化支持。新增了繁体中文、日语、韩语、越南语 和印地语 共 5 种语言。
    *   **技术细节**: 在 `apps/panel/src/i18n/` 下新增了完整的翻译文件，涵盖了与基准文件 `en.ts` 匹配的 1333 个翻译键，并已更新索引文件。这意味着项目正在为全球化用户群做准备，本地化工作量已完成，仅需合并即可发布。

### 4. 社区热点
今日无活跃的 Issues 讨论。唯一的社区互动集中在 **[PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21)** 上。
*   **热点分析**: 该 PR 虽然尚未合并，且目前显示评论数为 0，但其涉及的大规模翻译工作（1333 keys × 5 languages）表明社区（或核心贡献者）有强烈的意愿消除非英语用户的使用障碍。这反映了 EasyClaw 可能正在或即将在更广泛的国际市场推广。

### 5. Bug 与稳定性
*   **已知问题**: macOS Gatekeeper 误报拦截。
    *   **状态**: 在 v1.7.8 版本说明中已确认为已知行为，非文件损坏。
    *   **缓解措施**: 官方已提供手动修复命令，无需等待 Hotfix。
*   **今日新增 Bug**: 0 条。项目目前处于 Bug“静默期”，稳定性极高。

### 6. 功能请求与路线图信号
*   **国际化 (i18n) 完善**:
    *   **来源**: [PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21)
    *   **信号**: 这一 PR 的提交（创建于 3 月中旬，更新于 4 月 6 日）强烈暗示 **v1.7.9** 或下个重要版本将包含多语言支持。考虑到翻译文件已完备，该功能极大概率会被纳入近期发布的版本中。

### 7. 用户反馈摘要
由于今日无新增 Issues，用户反馈主要来源于版本发布说明中隐含的痛点：
*   **痛点**: macOS 用户对软件“已损坏”的误报感到困惑或担忧。
*   **满意度**: 未见负面反馈，说明现有功能基本满足需求，用户主要关注软件的可用性和安装流程的顺畅度。

### 8. 待处理积压
*   **高优先级**: **[PR #21: Multi-language Support](https://github.com/gaoyangz77/rivonclaw/pull/21)**
    *   **风险提示**: 该 PR 自 3 月 18 日开启至今尚未合并。由于涉及大量文件的变更，建议维护者尽快进行 Code Review 以免产生合并冲突。
    *   **建议**: 将此 PR 列入下一次迭代的合并清单中，以兑现国际化功能。

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*