# AI CLI 工具社区动态日报 2026-03-29

> 生成时间: 2026-03-29 00:11 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

这是一份基于 2026-03-29 社区数据的 AI CLI 工具横向对比分析报告。

---

# 2026-03-29 AI CLI 工具生态横向对比分析报告

## 1. 生态全景
当前 AI CLI 工具生态正处于**从“编码助手”向“全能自动化 Agent”** 转型的关键阵痛期。尽管各厂商都在积极通过 **MCP (Model Context Protocol)** 扩展生态边界，并试图引入 **多智能体** 和 **自主运行** 能力，但**平台稳定性**（尤其是 Windows 和 TUI 渲染）和**安全性**（沙箱逃逸、权限失控）已成为制约行业落地的最大瓶颈。社区情绪普遍从“尝鲜”转向“严肃挑剔”，用户对数据丢失、Token 异常消耗和基础交互 Bug 的容忍度急剧下降，倒逼厂商从“拼模型能力”转向“拼工程化质量”。

## 2. 各工具活跃度对比

| 工具名称 | 今日 Issues (高优/活跃) | 今日 PR (合并/提交) | Release 状态 | 活跃度评级 |
| :--- | :---: | :---: | :---: | :---: |
| **Claude Code** | **10** (关注高危安全、数据丢失) | **9** (专注安全加固、防火墙) | 无新版本 | 🔥 **极高** (痛点最集中) |
| **OpenAI Codex** | **10** (平台兼容性、TUI) | **10** (架构重构、Agent运行时) | 无新版本 | 🔥 **高** (重构活跃) |
| **GitHub Copilot CLI** | **10** (UX灾难级反馈) | **0** | 无新版本 | ⚠️ **中** (反馈多但响应慢) |
| **Kimi Code CLI** | **8** (模型兼容性、异常处理) | **7** (快速修复) | 无新版本 | 📈 **上升** (响应迅速) |
| **Qwen Code** | **10** (架构演进、子代理) | **6** (重磅功能频出) | 无新版本 | 🚀 **爆发** (功能激进) |
| **OpenCode** | **10** (模型稳定性、集成) | **10** (多通道集成) | 无新版本 | 🌐 **广** (生态最广) |
| **Gemini CLI** | **10** (Pro权限、挂起) | **10** (GSoC提案、跨平台) | v0.36.0-p.6 | 🛠️ **稳** (常规维护) |

## 3. 共同关注的功能方向
通过对全平台 Issue 的聚类分析，以下三个方向成为全行业的共同痛点与需求：

*   **Windows/跨平台兼容性恶化**
    *   **涉及工具**：OpenAI Codex, Qwen Code, Kimi Code, Claude Code
    *   **具体诉求**：Windows 平台频繁出现 Shell 执行失败、路径解析错误和 App 崩溃（如 Codex 的 CPU 飙升、Kimi 的 CWD 异常）。社区强烈要求厂商在快速迭代新功能的同时，必须偿还 Windows 平台的技术债。

*   **Agent 行为的可控性与安全 Hook**
    *   **涉及工具**：Claude Code, OpenAI Codex, Qwen Code, GitHub Copilot CLI
    *   **具体诉求**：用户对 Agent “乱删代码”感到恐慌。社区一致要求引入 `PreToolUse`/`PostToolUse` Hooks 机制，用于拦截危险操作、强制 Code Review 或集成 Linter。Codex 的 `/undo` 移除和 Copilot 的无限循环是典型反面案例。

*   **TUI (终端用户界面) 的阅读体验**
    *   **涉及工具**：GitHub Copilot CLI, OpenAI Codex, Claude Code
    *   **具体诉求**：长文本输出无法滚动、强制自动滚动导致无法阅读、渲染错位是 TUI 工具的通病。用户对 CLI 的要求已从“能跑”上升到“可读、可交互”。

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线与差异化 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **企业级协作 Agent** | 高级开发者、技术团队 | **Cowork 与 MCP 深度集成**。试图将 CLI 变成团队协作终端，但目前受困于文件夹权限和安全沙箱的复杂度。 |
| **OpenAI Codex** | **模型能力标杆** | 追求最强模型能力的极客 | **底层架构激进重构**。正在解耦 `codex-tools` 并引入 `Watchdog` 运行时，旨在解决 Subagent 的稳定性，但牺牲了短期稳定性。 |
| **GitHub Copilot CLI** | **垂类命令生成器** | DevOps、运维人员 | **聚焦于 CLI 命令生成**。在处理长对话和复杂 Agent 逻辑时显得力不从心，UX 问题（如滚动）最为严重。 |
| **Qwen Code** | **全栈工作流枢纽** | 国内开发者、阿里云用户 | **功能最激进**。首发 Channels (微信/钉钉集成) 和 Cron (定时任务)，试图打破 IDE 边界，将 AI 变成 7x24 小时运维助手。 |
| **OpenCode** | **模型聚合与多面手** | 模型发烧友、个人开发者 | **“大而全”的集成商**。支持 Telegram、移动端优化、多模型路由，胜在生态丰富，但在单一模型（如 Claude Max）的深度适配上存在短板。 |
| **Kimi Code** | **长上下文推理专家** | 需要长文本分析的开发者 | **针对“思考型”模型优化**。重点修复 `reasoning_content` 处理，在处理复杂逻辑和长文档上有优势。 |

## 5. 社区热度与成熟度

*   **成熟度最高**：**Gemini CLI**。虽然讨论热度不如 Claude，但其测试套件完善（GSoC 提案多），且遵循 XDG 规范，显示出工程化成熟度最高。
*   **争议最大**：**Claude Code**。虽然功能最强，但“沙箱写穿透”和“数据删除”等严重安全事故让其处于舆论的风口浪尖，社区信任度面临严峻考验。
*   **迭代最快**：**Qwen Code**。从 PR 频次看，Qwen 正在大规模铺设新架构，处于功能爆发期，但也因此引入了较多新 Bug。
*   **响应最积极**：**Kimi Code**。针对今日提出的 CWD 崩溃和模型报错，均有立即提交的修复 PR，显示出小团队的敏捷性。

## 6. 值得关注的趋势信号

1.  **“连接”取代“单机”**：
    *   **信号**：Qwen Code 的 **Channels 平台** (IM集成) 和 OpenCode 的 **Telegram 集成** 表明，AI CLI 正在试图走出本地终端，通过即时通讯软件触达用户，实现“移动端控制，本地端执行”的新范式。

2.  **时间感知能力的觉醒**：
    *   **信号**：Qwen Code 引入 **Cron 工具**支持定时任务。这标志着 Agent 正在从“被动响应指令”向“主动按时执行任务”演进，未来 AI 可能会成为 CI/CD 流程中的定时调度器。

3.  **推理模型的适配难题**：
    *   **信号**：Kimi Code 和 Gemini CLI 都在处理 `reasoning_content` 或 `thinking` 字段上遇到 Bug。随着 OpenAI o1 和 Kimi k1.5 等推理模型的普及，如何 CLI 优雅地展示“思考过程”而非直接“流式吐出结果”，是下一代 UI 的关键。

4.  **企业对 Hook 的渴求**：
    *   **信号**：Claude Code 和 OpenAI Codex 社区都在高频请求 `PreToolUse` Hooks。这表明企业用户不再满足于通用的 AI 能力，而是希望将 AI 强制纳入内部的合规、安全审计和质量检查流程中，**“可控性”优先于“智能性”**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

根据提供的 `anthropics/skills` 仓库数据（截至 2026-03-29），以下是社区热点分析报告。

### 1. 热门 Skills 排行
以下基于 PR 的功能性、架构改进意义及社区反馈价值（按关注度综合排序）：

*   **[CONTRIBUTING.md 指南](https://github.com/anthropics/skills/pull/509)** (by narenkatakam)
    *   **功能**：添加社区贡献指南，修复 GitHub 社区健康评分（从 25% 提升至合规）。
    *   **热点**：这是基础设施级的 PR，旨在降低社区贡献门槛，解决 Issue #452 提出的治理缺失问题。
    *   **状态**：OPEN

*   **[document-typography: 排版质量控制](https://github.com/anthropics/skills/pull/514)** (by PGTBoos)
    *   **功能**：解决 AI 生成文档的排版瑕疵（如孤立行、段落孤寡、编号对齐）。
    *   **热点**：针对 Claude 生成内容的“最后一公里”美观度进行优化，显著提升专业文档的可读性。
    *   **状态**：OPEN

*   **[ODT 技能：OpenDocument 文档处理](https://github.com/anthropics/skills/pull/486)** (by GitHubNewbie0)
    *   **功能**：支持创建、填充和解析 `.odt` 格式文档（LibreOffice/OpenOffice 标准）。
    *   **热点**：填补了对开源办公文档格式的支持空白，对于政府、Linux 用户或非微软生态至关重要。
    *   **状态**：OPEN

*   **[Google Workspace 个人助理套件](https://github.com/anthropics/skills/pull/299)** (by meticulo3366)
    *   **功能**：基于 GOG CLI 实现 Gmail、日历和任务的自动化管理（如邮件分级、起草）。
    *   **热点**：将 Claude 从“代码助手”扩展为“生活/行政助理”，高频刚需场景。
    *   **状态**：OPEN

*   **[roadmap-pilot: 增量重构自动驾驶](https://github.com/anthropics/skills/pull/536)** (by antconsales)
    *   **功能**：将大型重构任务拆解为增量 Roadmap，防止上下文溢出，每次只执行并提交一个任务。
    *   **热点**：解决了 AI 处理大型代码库时的记忆和注意力限制问题，极具工程实用价值。
    *   **状态**：OPEN

### 2. 社区需求趋势
通过高赞 Issues 分析，社区最关注以下痛点与方向：

*   **企业级协作与分发** (Issue #228)
    *   **痛点**：目前分享 Skill 需要下载文件手动导入，无法在组织内通过链接直接分发。
    *   **趋势**：强烈呼吁构建组织内部的 Skill Store 或一键分享链接功能，便于团队标准化工具流转。

*   **信任边界与安全治理** (Issue #492)
    *   **痛点**：社区担心 Skill 伪装成 `anthropic/` 官方命名空间进行分发，导致权限滥用。
    *   **趋势**：需要明确的官方/社区 Skill 隔离机制和签名验证，防止恶意代码注入。

*   **Agent 测试与验证框架** (Issue #556)
    *   **痛点**：`run_eval.py` 评估脚本目前 Skill 触发率为 0%，缺乏可靠的自动化测试手段。
    *   **趋势**：社区迫切需要一套标准的评估框架，以量化 Skill 的触发准确性和执行效果。

*   **多模态与输入法支持** (Issue #16)
    *   **趋势**：建议将 Skills 暴露为 MCP (Model Context Protocol)，通过 API 信号化，甚至考虑非英语（如西班牙语）的原生支持优化。

### 3. 高潜力待合并 Skills
这些 PR 长期开放且讨论活跃，代表了即将落地的重要能力：

*   **[faf-context: 项目上下文桥接](https://github.com/anthropics/skills/pull/281)**
    *   **潜力**：定义 `.faf` 文件作为 `package.json` 和 `README.md` 之间的“项目认知层”，让 AI 快速理解项目全貌。
    *   **价值**：标准化项目描述格式，可能成为社区新的最佳实践。

*   **[AURELION 技能套件：结构化认知框架](https://github.com/anthropics/skills/pull/444)**
    *   **潜力**：引入了一套类似“认知楼层”的理论（Kernel, Advisor, Memory），用于知识管理和 AI 协作。
    *   **价值**：探索更高级的 Agent 思维链结构，不仅是工具，更是方法论。

*   **[shodh-memory: 持久化记忆系统](https://github.com/anthropics/skills/pull/154)**
    *   **潜力**：为 AI Agent 提供跨会话的持久化上下文记忆，主动调用相关记忆。
    *   **价值**：解决 Claude“失忆”问题，向长期自主 Agent 迈进。

*   **[skill-quality-analyzer: 元技能分析器](https://github.com/anthropics/skills/pull/83)**
    *   **潜力**：用来“检查 Skill”的 Skill，评估文档质量、安全性和结构。
    *   **价值**：提升社区整体 Skill 质量，属于生态治理工具。

### 4. Skills 生态洞察
**当前社区在 Skills 层面最集中的诉求是：**
从**“单点工具开发”**转向**“标准化、企业级治理与跨会话持久化”**。
具体而言，用户不再满足于简单的代码生成脚本，而是迫切需要解决 **Skill 的安全分发、大规模重构的上下文管理** 以及 **企业环境下的合规共享** 问题。

---

# Claude Code 社区动态日报 (2026-03-29)

## 📰 今日速览
今日社区重点聚焦于 **Cowork 协作功能的文件访问限制**及 **Sandbox（沙箱）机制的安全性隐患**。尽管近期没有新版本发布，但关于 Windows 平台文件夹访问权限、API 速率限制错误以及数据丢失问题的讨论热度持续攀升。此外，社区对多窗口支持和图形化终端的增强需求依然强烈。

---

## 🔥 社区热点 Issues

### 🔴 严重与高频关注

1.  **[Cowork 文件夹选择器限制引发不满](https://github.com/anthropics/claude-code/issues/24964)**
    *   **问题**：Folder picker 拒绝访问主目录之外的文件夹，并阻止符号链接/连接点。
    *   **影响**：严重限制多磁盘开发场景，Windows 用户尤甚。
    *   **热度**：👍 155 (评论 113)

2.  **[严重安全漏洞：沙箱机制半失效](https://github.com/anthropics/claude-code/issues/40321)**
    *   **问题**：Sandbox 出现 "写穿透，读隔离" 的故障，导致 Claude 无法读取其正在覆盖的文件，从而 "自信地" 删除了整个项目（2500+ 文件）。
    *   **影响**：极具破坏性的数据丢失风险，引发社区恐慌。
    *   **热度**：👍 持续关注

3.  **[高危：PreToolUse Hooks 未在子代理调用中执行](https://github.com/anthropics/claude-code/issues/21460)**
    *   **问题**：`PreToolUse` hooks 在 `Task` 工具生成的子代理调用中失效，导致安全限制被轻易绕过。
    *   **影响**：企业级安全管控面临失效风险。
    *   **热度**：👍 12 (安全领域高度关注)

4.  **[认证故障：无法连接 GitHub 的远程 MCP 服务器](https://github.com/anthropics/claude-code/issues/3433)**
    *   **问题**：OAuth 认证失败，导致无法连接 GitHub 作为 MCP 服务器。
    *   **影响**：阻断外部集成与 MCP 生态工作流。
    *   **热度**：👍 113 (长期未解决)

5.  **[Auto Mode 持续不可用](https://github.com/anthropics/claude-code/issues/33587)**
    *   **问题**：macOS 用户（v2.1.74+）无法通过 `Shift+Tab` 或设置进入自动模式，提示 "temporarily unavailable"。
    *   **影响**：核心工作流受阻。
    *   **热度**：👍 47

### ⚠️ 其他关键 Bug 与需求

6.  **[Cowork 数据丢失](https://github.com/anthropics/claude-code/issues/38055)**：Windows 上进行小版本更新时永久删除聊天记录和计划任务。
7.  **[速率限制器误报](https://github.com/anthropics/claude-code/issues/40273)**：在生成多个 Agent 时频繁触发 "Rate limit reached"，即使未达限额。
8.  **[VS Code 扩展拖放失效](https://github.com/anthropics/claude-code/issues/25128)**：CLI 正常但 VS Code 面板中拖放文件功能损坏（v2.1.6+）。
9.  **[Dispatch 消息丢失](https://github.com/anthropics/claude-code/issues/40178)**：移动端/桌面端消息显示已读但内容不显示。
10. **[Hooks 系统失灵](https://github.com/anthropics/claude-code/issues/6305)**：`Post/PreToolUse` Hooks 在 Claude Code 中完全不执行。

---

## 🛠️ 重要 PR 进展

### 安全与基础设施
*   **[PR #39515 / #40290: 硬化 GitHub Actions 工作流](https://github.com/anthropics/claude-code/pull/40290)**
    *   **内容**：将 7 个未固定的第三方 GitHub Actions 固定到不可变的提交 SHA，以防止供应链攻击。
    *   **状态**：Open (安全补丁)

### 功能与修复
*   **[PR #40322: 增强开发容器防火墙 (混合 IP 管理)](https://github.com/anthropics/claude-code/pull/40322)**
    *   **内容**：修复 DevContainer 中的防火墙脚本，支持混合静态/动态 IP 管理，解决了 `sudo` 环境变量剥离和 crontab 不可用的问题。
*   **[PR #40208: 修复插件 Hook 脚本权限](https://github.com/anthropics/claude-code/pull/40208)**
    *   **内容**：安装插件 Hook 脚本后自动添加 `chmod +x`，修复 `SessionStart:resume` 报错。
*   **[PR #40276: 更正 Changelog (v2.1.83-86)](https://github.com/anthropics/claude-code/pull/40276)**
    *   **内容**：澄清了 Skill 描述字符限制从 2% 降至 1% 的变更细节，修正了文档误导。

### 新增生态
*   **[PR #36433: 集成 Agent Wallet 插件](https://github.com/anthropics/claude-code/pull/36433)**
    *   **内容**：添加非托管钱包插件，允许 AI 代理处理支付（如 API 费用）。
*   **[PR #39977: 添加 /tmp 清理插件](https://github.com/anthropics/claude-code/pull/39977)**
    *   **内容**：自动清理 Task 产生的巨大 `.output` 文件（曾单文件占用 46GB+），缓解磁盘泄漏。

### 配置与维护
*   **[PR #33224: Node.js 版本可配置化](https://github.com/anthropics/claude-code/pull/33224)**
    *   **内容**：DevContainer 默认 Node 版本将从 20 升级至 24（LTS），并支持通过 `NODE_VERSION` 自定义。
*   **[PR #39043: 移除 "retro-futuristic" 设计建议](https://github.com/anthropics/claude-code/pull/39043)**
    *   **内容**：从 Frontend Design Skill 中移除过时的设计建议。

---

## 📊 功能需求趋势

根据过去 24 小时的讨论，社区重点关注以下方向：

1.  **平台兼容性与文件系统访问**：Windows 外部驱动器支持、符号链接兼容性以及跨平台的文件访问一致性仍是痛点。
2.  **安全性与隔离性**：Sandbox 的可靠性（特别是读写一致性）和 Hook 系统的全面覆盖（包括子代理）是企业用户的迫切需求。
3.  **UI/UX 增强**：
    *   **多窗口支持** (Multi-window in Desktop)：`👍 57`。
    *   **终端图形协议**：支持 Sixel/Kitty/iTerm2 以显示图表和图像。
4.  **稳定性**：Cowork 功能的数据持久化和更新后的数据保护是核心诉求。

---

## 💡 开发者关注点

*   **Rate Limiting 混乱**：多名开发者报告在使用 `--dangerously-skip-permissions` 或多 Agent 环境时遇到误报的速率限制，严重影响开发效率。
*   **Hook 系统的脆弱性**：多个 Issue 反映 Hook 不仅在子代理中失效（#21460），甚至在主进程中完全不触发（#6305），这对于依赖自定义审计和权限流程的团队来说是阻碍采用的严重 Bug。
*   **版本升级恐惧**：由于 Cowork 更新可能导致数据删除（#38055）以及 Changelog 记录不清（#40276），开发者对升级版本持谨慎态度。

---
*数据来源：github.com/anthropics/claude-code | 报告生成时间：2026-03-29*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-03-29)

**数据来源:** github.com/openai/codex  
**分析师观点:** 社区目前处于多重平台适配的阵痛期，Windows 平台的稳定性问题尤为突出，同时 TUI（终端用户界面）的渲染问题导致部分高级用户体验下降。尽管官方在积极重构 Agent 和权限系统，但关于资源消耗和“自杀式”修改文件的抱怨依然占据 Issue 板的主流。

---

### 1. 今日速览
*   **Windows 用户体验堪忧**：过去 24 小时内，Windows 平台曝出多个高优先级 Bug，涉及 `php.exe` 丢失、App 关闭后自动重启以及 CPU 占用飙升，部分用户反馈严重影响生产环境使用。
*   **核心功能重构活跃**：官方 PR 显示正在大力重构 `codex-tools` 和权限系统，致力于将本地工具规范与核心解耦，并为 Agent 引入更完善的 Watchdog 运行时。
*   **TUI 渲染问题频发**：终端界面在 Zellij、Kitty 等环境下出现严重的截断和重绘问题，开发团队正在紧急修复相关 Regression（回归缺陷）。

---

### 2. 版本发布
*   **当前无新版本发布**。
*   *注：尽管无 Release，但 CI/CD 通道正在积极准备针对 TUI 和权限系统的修复补丁。*

---

### 3. 社区热点 Issues

**#14593 [Bug] Token 燃烧过快** 🔥👍 104
*   **链接**: [openai/codex#14593](https://github.com/openai/codex/issues/14593)
*   **摘要**: 商业版用户反馈在静默状态下 Token 消耗速度异常快，怀疑存在后台泄露或未经请求的模型调用。
*   **社区反应**: 讨论热度极高（315条评论），涉及计费敏感问题，用户情绪较为激动。

**#10410 [Enhancement] macOS Intel (x86_64) 支持** 👍 209
*   **链接**: [openai/codex#10410](https://github.com/openai/codex/issues/10410)
*   **摘要**: 社区强烈呼吁 Codex Desktop App 支持 Intel 芯片的 Mac（目前主要适配 Apple Silicon）。
*   **重要性**: 高赞请求，表明大量企业用户仍在使用 Intel 设备，被排斥在桌面版体验之外。

**#10450 [Enhancement] 桌面版远程开发支持** 👍 460
*   **链接**: [openai/codex#10450](https://github.com/openai/codex/issues/10450)
*   **摘要**: 桌面版目前不支持 SSH/Remote Development，对比 VS Code 功能缺失严重。
*   **重要性**: 目前点赞最多的 Feature Request，DevOps 和远程工作者痛点。

**#2558 [Bug] Zellij 中输出截断** 👍 103
*   **链接**: [openai/codex#2558](https://github.com/openai/codex/issues/2558)
*   **摘要**: 在 Zellij 会话中运行 Codex CLI，历史记录显示不全，且存在渲染错位。
*   **影响**: 重度终端用户的核心体验受损，且长期未得到彻底解决。

**#14919 [Bug] Linux Bubblewrap 沙箱权限错误** (Regression)
*   **链接**: [openai/codex#14919](https://github.com/openai/codex/issues/14919)
*   **摘要**: 更新到 v0.115.0 后，Linux 沙箱失败，提示 `RTM_NEWADDR: Operation not permitted`，导致子代理无法执行命令。
*   **重要性**: 严重阻塞 Linux 开发者的自动化工作流。

**#13476 [Bug] Playwright MCP 频繁弹窗审批** 👍 29
*   **链接**: [openai/codex#13476](https://github.com/openai/codex/issues/13476)
*   **摘要**: 更改后，MCP 工具每次操作都要求用户审批，体验断崖式下跌。
*   **趋势**: 社区对过度限制自动化操作表示不满。

**#9203 [Enhancement] 归还 `/undo` 命令** 👍 101
*   **链接**: [openai/codex#9203](https://github.com/openai/codex/issues/9203)
*   **摘要**: 用户痛斥 Codex 经常误删未提交的文件，移除 `/undo` 命令是“反人类”的。
*   **痛点**: AI 辅助编程的安全性信任问题。

**#15503 [Bug] CPU 占用飙升**
*   **链接**: [openai/codex#15503](https://github.com/openai/codex/issues/15503)
*   **摘要**: VS Code 扩展在正常使用下 CPU 飙升，调试日志显示每毫秒都在输出。
*   **影响**: 导致笔记本电脑电池迅速耗尽。

**#14754 [Enhancement] 增加 PreToolUse/PostToolUse 钩子**
*   **链接**: [openai/codex#14754](https://github.com/openai/codex/issues/14754)
*   **摘要**: 开发者需要在工具调用前后插入代码质量检查逻辑（如 Linter），目前架构不支持。
*   **趋势**: 企业级用户希望通过 Hook 增强 Agent 的可控性。

**#15949 [Bug] Windows App 关闭后自动重启**
*   **链接**: [openai/codex#15949](https://github.com/openai/codex/issues/15949)
*   **摘要**: Windows 用户正常关闭 App 后，它会像“僵尸”一样自动重启。
*   **现状**: 新增 Bug，Windows 端维护质量堪忧。

---

### 4. 重要 PR 进展

**#13679 [Feat] TUI: 增加 Subagent 运行时行为面板**
*   **链接**: [openai/codex#13679](https://github.com/openai/codex/pull/13679)
*   **内容**: 在 TUI 基础架构上添加实时的 Subagent/Watchdog 运行时面板，保持面板固定在历史记录之上，独立渲染。

**#13651 [Feat] TUI: Subagent Inbox 基础设施**
*   **链接**: [openai/codex#13651](https://github.com/openai/codex/pull/13651)
*   **内容**: 为 TUI 添加渲染 Subagent inbox 项的基础设施，优化聊天组件以显示新的 Agent inbox 内容。

**#16141 [Refactor] Codex-tools: 提取协作工具规范**
*   **链接**: [openai/codex#16141](https://github.com/openai/codex/pull/16141)
*   **内容**: 持续进行代码解耦，将协作工具的定义从核心逻辑中分离出来，提升模块化程度。

**#16041 [Fix] 修复 TUI MCP 启动警告回归**
*   **链接**: [openai/codex#16041](https://github.com/openai/codex/pull/16041)
*   **内容**: 修复了 `tui_app_server` 默认路径不再显示 MCP 启动失败警告的问题。

**#16114 [Chore] 移除 TUI 语音转录功能**
*   **链接**: [openai/codex#16114](https://github.com/openai/codex/pull/16114)
*   **内容**: 移除了未完成的语音转录流程及相关特性开关，标志着该功能的暂时取消。

**#13825 [Feat] Core: 支持配置文件自定义模型别名**
*   **链接**: [openai/codex#13825](https://github.com/openai/codex/pull/13825)
*   **内容**: 允许在 `config.toml` 中定义自定义模型别名，并支持针对别名的上下文窗口和自动压缩限制覆盖。

**#15929 [Feat] 允许非工作区文件写入（带回退）**
*   **链接**: [openai/codex#15929](https://github.com/openai/codex/pull/15929)
*   **内容**: 修改了权限策略，允许写入 `:tmpdir` 或 `/tmp` 等非工作区目录，即使旧版沙箱策略不支持，也会尝试回退。

**#16109 [Fix] 修复 App-Server TUI 技能选择器滚动**
*   **链接**: [openai/codex#16109](https://github.com/openai/codex/pull/16109)
*   **内容**: 修复了技能选择器只能显示前 8 个结果且无法滚动的问题（对应 Issue #16091）。

**#13678 [Feat] Core: 添加 Watchdog 运行时和提示词**
*   **链接**: [openai/codex#13678](https://github.com/openai/codex/pull/13678)
*   **内容**: 为 Agent 线程添加了 Watchdog 生命周期管理和特定的 Prompt 配置。

**#15914 [Chore] 运行时状态向 PermissionProfile 迁移**
*   **链接**: [openai/codex#15914](https://github.com/openai/codex/pull/15914)
*   **内容**: 开始将运行时状态从旧的 `SandboxPolicy` 迁移到更丰富的 `PermissionProfile`，以支持更细粒度的权限控制。

---

### 5. 功能需求趋势
*   **跨平台生态统一**: 社区渴望 Linux 桌面版 (#11023) 和 Mac Intel 版本，目前的平台碎片化（尤其是 Windows 和旧 Mac）导致大量关于兼容性的抱怨。
*   **远程开发**: 对远程开发 的需求是桌面版目前最大的功能缺口。
*   **Agent 可控性**: 用户强烈要求引入 Git Hook 风格的 `PreToolUse`/`PostToolUse` (#14754) 和恢复 `/undo` 命令 (#9203)，反映出用户对 Agent “乱跑”代码的恐惧。
*   **多终端管理**: 桌面版支持多标签终端 的呼声很高。

---

### 6. 开发者关注点
*   **稳定性危机**: 多个 Regression（如 #14919, #16091）的出现让开发者对最近快速迭代的稳定性产生担忧，尤其是沙箱和 TUI 渲染部分。
*   **Windows 遗留代码**: Windows 平台的 App 和 CLI 似乎积压了大量技术债，从 PATH 解析 (#16084) 到窗口管理 (#15949) 均有严重 Bug。
*   **Token 成本透明度**: 开发者对 Token 消耗的不可见性 (#14593) 非常敏感，尤其是在 Agent 自动运行时。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-03-29)

> **今日速览**
>
> 本日 Gemini CLI 进行了两个 Preview 版本（v0.36.0-preview.6 和 v0.35.3）的补丁修复，主要是为了修复特定分支的兼容性问题（Cherry-pick 765fb67）。
>
> 社区讨论热度主要集中在 **Pro 账户权限识别**和 **LLM 调用挂起** 两个严重 Bug，多个用户反馈尽管购买了 Pro 订阅，仍被识别为标准层级或无法使用 Pro 模型，甚至出现 CLI 完全卡死无响应的情况。

---

### 1. 版本发布

*   **v0.36.0-preview.6**
    *   **类型**: Patch Fix
    *   **内容**: 修复了 `release/v0.36.0-preview.5-pr-24055` 分支中的问题，通过 Cherry-pick commit 765fb67 生成新版本。
    *   **查看**: [Release Notes](https://github.com/google-gemini/gemini-cli/pull/24061)

*   **v0.35.3**
    *   **类型**: Patch Fix
    *   **内容**: 类似地，针对 v0.35.2 分支进行了同样的代码合并，解决了潜在的冲突问题。
    *   **查看**: [Release Notes](https://github.com/google-gemini/gemini-cli/pull/24063)

---

### 2. 社区热点 Issues

以下精选自过去 24 小时内讨论最活跃或影响最大的 10 个 Issue：

1.  **[#23328] 优化测试套件输出日志** 🔥
    *   **状态**: Open | **评论**: 56
    *   **摘要**: 测试运行时产生海量输出（数十万字符），严重影响开发体验。目前官方已提交 PR 试图通过在 CLI 测试设置中全局静默 `debugLogger` 来解决此问题。
    *   **链接**: [google-gemini/gemini-cli#23328](https://github.com/google-gemini/gemini-cli/issues/23328)

2.  **[#23988] Gemini CLI 完全停止工作 - LLM 调用挂起** ⚠️
    *   **状态**: Open | **评论**: 10
    *   **摘要**: 用户报告 CLI 首次提示时无响应，延迟超过 15 分钟，且无法使用 `/quit` 等命令，只能 Ctrl+C 强制退出。怀疑是最新版本引入的严重回归。
    *   **链接**: [google-gemini/gemini-cli#23988](https://github.com/google-gemini/gemini-cli/issues/23988)

3.  **[#23973] Pro 账户被识别为标准层级** ⚠️
    *   **状态**: Open | **评论**: 7
    *   **摘要**: 尽管订阅了 Google AI Pro，CLI 日志仍显示用户为 `standard-tier`，导致功能受限。
    *   **链接**: [google-gemini/gemini-cli#23973](https://github.com/google-gemini/gemini-cli/issues/23973)

4.  **[#23876] 无法在 Pro 订阅下使用 Pro 模型**
    *   **状态**: Open | **评论**: 4 | **👍**: 7
    *   **摘要**: 调用 Gemini 3.1 Pro 模型失败，尽管用户已持有有效的 Google AI Pro 订阅。这可能是权限验证逻辑的 Bug。
    *   **链接**: [google-gemini/gemini-cli#23876](https://github.com/google-gemini/gemini-cli/issues/23876)

5.  **[#8883] "You exceeded your current quota" 虚假警报**
    *   **状态**: Closed | **评论**: 31
    *   **摘要**: 经典问题再起。用户在 Pro Plan 还有 84% 配额时收到配额超限错误，虽然 Issue 已关闭，但评论显示问题仍未完全解决。
    *   **链接**: [google-gemini/gemini-cli#8883](https://github.com/google-gemini/gemini-cli/issues/8883)

6.  **[#23858] Plan Mode 下文件被意外编辑**
    *   **状态**: Open | **评论**: 3
    *   **摘要**: 在处于规划模式 时，Agent 仍在修改文件，违反了 Plan Mode 仅规划不执行的约束。
    *   **链接**: [google-gemini/gemini-cli#23858](https://github.com/google-gemini/gemini-cli/issues/23858)

7.  **[#23316] 长上下文与复杂推理代码评估数据集**
    *   **状态**: Open | **评论**: 44
    *   **摘要**: 随着 SWE-bench Pro 等基准趋于饱和，社区呼吁构建更困难的长上下文评估数据集（预估 175 小时工作量）。
    *   **链接**: [google-gemini/gemini-cli#23316](https://github.com/google-gemini/gemini-cli/issues/23316)

8.  **[#22559] 远程控制模式**
    *   **状态**: Open | **评论**: 2 | **👍**: 4
    *   **摘要**: 用户请求类似 Claude Code 的远程控制功能，通过 Google 托管的 Web 应用穿透本地终端，实现移动端控制和通知。
    *   **链接**: [google-gemini/gemini-cli#22559](https://github.com/google-gemini/gemini-cli/issues/22559)

9.  **[#22644] [Feature] 允许自定义 Session ID**
    *   **状态**: Open | **评论**: 3 | **👍**: 2
    *   **摘要**: 希望在启动 CLI 时通过 `--session my-project` 参数指定 Session ID，而非自动生成，以便更好地管理项目上下文。
    *   **链接**: [google-gemini/gemini-cli#22644](https://github.com/google-gemini/gemini-cli/issues/22644)

10. **[#22855] 支持向 `/plan` 传递 Prompt**
    *   **状态**: Open | **评论**: 2 | **👍**: 2
    *   **摘要**: 建议改进 `/plan` 命令，允许直接附带文本参数一次性生成计划，而不是先进入交互框。
    *   **链接**: [google-gemini/gemini-cli#22855](https://github.com/google-gemini/gemini-cli/issues/22855)

---

### 3. 重要 PR 进展

1.  **[#24116] Silence debugLogger globally...**
    *   **类型**: Fix | **状态**: Open
    *   **内容**: 针对 Issue #23328 的修复，在测试设置中集中 Mock `debugLogger`，避免测试日志刷屏。
    *   **链接**: [PR #24116](https://github.com/google-gemini/gemini-cli/pull/24116)

2.  **[#24121] [GSoC 2026] Terminal-Integrated Performance Companion**
    *   **类型**: Feature (Draft) | **状态**: Open
    *   **内容**: Google Summer of Code 2026 的提案原型，旨在为 CLI 添加一个终端集成的性能与内存调查伴侣工具。代码量巨大（8,300+ 行），展示了野心勃勃的功能规划。
    *   **链接**: [PR #24121](https://github.com/google-gemini/gemini-cli/pull/24121)

3.  **[#24123] Fix: editing plan without changes still triggers agent to replan**
    *   **类型**: Fix | **状态**: Open
    *   **内容**: 修复了一个 UX 问题：如果用户在编辑器中打开计划但未做任何修改就退出，CLI 不应触发重新规划。增加了文件 Hash 检查。
    *   **链接**: [PR #24123](https://github.com/google-gemini/gemini-cli/pull/24123)

4.  **[#24126] Fix/remove unsafe type assertions tools**
    *   **类型**: Refactor | **状态**: Open
    *   **内容**: 移除工具发现和调用流程中的不安全类型断言，改为在边界进行数据验证，提升系统稳定性。
    *   **链接**: [PR #24126](https://github.com/google-gemini/gemini-cli/pull/24126)

5.  **[#24081] Fix: stabilize sandbox and build for Windows and Linux**
    *   **类型**: Fix | **状态**: Open
    *   **内容**: 修复了 Windows (语法错误) 和 Linux/WSL (类型不匹配) 上导致构建失败的关键问题，对跨平台用户至关重要。
    *   **链接**: [PR #24081](https://github.com/google-gemini/gemini-cli/pull/24081)

6.  **[#24120] Fix(core): prevent double server.close()...**
    *   **类型**: Fix | **状态**: Open
    *   **内容**: 修复 OAuth 回调服务器中可能导致 `ERR_SERVER_NOT_RUNNING` 错误的双重关闭问题。
    *   **链接**: [PR #24120](https://github.com/google-gemini/gemini-cli/pull/24120)

7.  **[#24079] UX for topic narration tool**
    *   **类型**: Feature | **状态**: Closed
    *   **内容**: 改进了对话轮次间的叙述 UX，使用 `update_topic` 工具内容替代原有叙述，使任务展示更清晰。
    *   **链接**: [PR #24079](https://github.com/google-gemini/gemini-cli/pull/24079)

8.  **[#23992] Support XDG config, cache, and tmp directories...**
    *   **类型**: Feature | **状态**: Open
    *   **内容**: 遵循 XDG Base Directory 规范，支持通过环境变量显式覆盖配置、缓存和临时文件目录，符合 Linux/Unix 用户习惯。
    *   **链接**: [PR #23992](https://github.com/google-gemini/gemini-cli/pull/23992)

9.  **[#22807] Auto-restart agent on background task completion**
    *   **类型**: Feature | **状态**: Open
    *   **内容**: 添加空闲监听器，当后台任务（如 Ctrl+B 触发的任务）完成时，自动将结果注入为新的 Agent 轮次，防止结果被忽略。
    *   **链接**: [PR #22807](https://github.com/google-gemini/gemini-cli/pull/22807)

10. **[#23340] Fix(hooks): preserve non-text parts...**
    *   **类型**: Fix | **状态**: Open
    *   **内容**: 修复 Hook 中 `fromHookLLMRequest` 会丢弃非文本部分（如 `functionCall`, `inlineData`）的 Bug，确保工具调用上下文完整性。
    *   **链接**: [PR #23340](https://github.com/google-gemini/gemini-cli/pull/23340)

---

### 4. 功能需求趋势

根据 Issues 和 PRs 的数据，当前社区和开发团队的关注点集中在以下几个方向：

*   **跨平台与构建稳定性**: 社区对 Windows 和 Linux (WSL) 支持的抱怨依然较多，今日的 PR #24081 直接针对构建崩溃进行了修复。
*   **Agent 智能与控制**:
    *   **Tracker/DAG 集成**: 正在大力推动将基于 Markdown 的 Checkbox 计划替换为基于 DAG 的任务追踪系统（见 Issues #23804, #23724）。
    *   **Plan Mode 可靠性**: 用户强调在 Plan Mode 下不应有任何文件写入行为，且 `/plan` 命令需要更便捷的参数支持。
*   **企业级/Pro 权限管理**: 多个 Issue 反映 Pro 订阅用户的权限识别错误，这可能是目前阻碍付费转化的主要痛点。
*   **UX 与交互优化**:
    *   **远程控制**: 社区呼吁类似 Claude 的 Web 端远程控制能力。
    *   **Voice Input**: 长期需求，支持 Whisper 和 Gemini 原生语音输入的 PR (#18499) 仍在更新中。
*   **内存与性能**: 随着 GSoC 提案的提交，关于 Agent 内存压缩 和性能调查工具 的讨论正在升温。

---

### 5. 开发者关注点

*   **类型安全**: 今日 PR #24126 和 #20080 均聚焦于移除 `unsafe type assertions`，表明项目正在经历一场严格的代码质量治理，意在减少运行时类型错误。
*   **测试环境维护**: Issue #23328 (测试日志过多) 收到 56 条评论，反映出开发者在运行测试套件时深受噪音干扰，急需更干净的 CI/CD 体验。
*   **Hook 系统的完整性**: PR #23340 显示，核心 Hook 系统在处理复杂上下文（包含 Tool Calls）时存在数据丢失风险，这对扩展开发者来说是一个重要的修复点。
*   **SDD (Spec-Driven Development) 工作流**: 内部 Issues 显示团队正在重构 `/spec` 和 `/plan` 的底层逻辑，试图统一 Spec 文件与 Task Tracker 的交互，这意味着未来的 CLI 开发模式可能会有较大变动。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-03-29)

**分析师**: AI 开发工具技术专家
**数据来源**: github.com/github/copilot-cli

---

## 1. 今日速览
今日 GitHub Copilot CLI 社区异常活跃，过去 24 小时内新增了约 20 个 Issue，主要集中在 **交互体验（UX）** 和 **稳定性** 两个维度。社区反馈强烈不满当前的终端滚动行为（无法查看长结果）以及按键冲突（Shift+Enter 执行而非换行）。此外，关于 **本地 LLM 集成**（如 OpenAI 兼容接口）的呼声显著增高，显示用户希望突破云端模型的限制。虽然今日无代码合并，但大量的用户反馈为产品迭代指明了方向。

---

## 2. 版本发布
**当前状态**: 过去 24 小时内无新版本发布。
*注：目前最新稳定版似乎为 1.0.12（基于用户反馈），但今日未发布更新包。*

---

## 3. 社区热点 Issues (Top 10)
今日新增及热议的 Bug 反馈占据了主导地位，以下是 10 个最值得关注的技术讨论：

1.  **[#2369 [BUG]](https://github.com/github/copilot-cli/issues/2369) 无法执行基本的滚动操作以查看长结果**
    *   **摘要**: 用户报告在终端中无法滚动查看超出屏幕长度的文本输出，鼠标滚轮和触摸板均失效，导致长命令结果不可读。
    *   **重要性**: 🔥 **核心体验灾难**。这是 TUI 工具的致命伤，严重影响工具的可用性。

2.  **[#2372 [UX]](https://github.com/github/copilot-cli/issues/2372) 请求添加禁用自动滚动的选项**
    *   **摘要**: 当 Agent 正在生成输出时，终端会强制自动滚动到底部，导致用户无法阅读前面的内容。
    *   **重要性**: 🔥 **高频痛点**。用户希望能够在生成过程中向上滚动阅读历史信息，而不是被强制锁定。

3.  **[#2360 [BUG]](https://github.com/github/copilot-cli/issues/2360) Plan 模式下反馈输入框存在输入延迟/字符覆盖**
    *   **摘要**: 在 Plan 模式下输入建议更改时，输入速度受限，出现字符被覆盖或乱码现象，必须极慢打字。
    *   **重要性**: **性能/输入法问题**。直接影响用户的工作流效率。

4.  **[#2361 [BUG]](https://github.com/github/copilot-cli/issues/2361) IPv6 不可路由时 CLI 挂起 (无 IPv4 回退)**
    *   **摘要**: v1.0.12 SEA 二进制文件在 DNS 返回不可路由的 IPv6 记录时会挂起，且未回退到 IPv4。
    *   **重要性**: **网络兼容性**。影响特定网络环境下的企业用户，导致启动卡死。

5.  **[#2374 [BUG]](https://github.com/github/copilot-cli/issues/2374) Autopilot 模式进入无限循环**
    *   **摘要**: 使用 Autopilot 分配任务时，在完成计划并建议运行后，进入了无限循环状态。
    *   **重要性**: **稳定性风险**。可能导致资源耗尽或会话卡死。

6.  **[#2378 [Feature]](https://github.com/github/copilot-cli/issues/2378) 请求取消排队消息而不中断当前操作**
    *   **摘要**: 用户希望在不停止当前正在运行的操作的情况下，取消后续排队的消息。
    *   **重要性**: **控制粒度**。反映了用户对 Agent 行为更精细控制的需求。

7.  **[#2375 [BUG]](https://github.com/github/copilot-cli/issues/2375) 偶发无法粘贴代码**
    *   **摘要**: 在 CLI 中复制粘贴代码作为上下文时，粘贴操作有时会失败。
    *   **重要性**: **基础功能**。影响工作流的连续性。

8.  **[#2376 [BUG]](https://github.com/github/copilot-cli/issues/2376) 会话选择器时间显示错误 (1970年)**
    *   **摘要**: `--resume` 选择器中显示的会话时间偏移了约 56 年（显示为 1970 年），尽管日志文件时间戳正确。
    *   **重要性**: **显示层 Bug**。虽然不影响核心功能，但严重影响会话管理和用户体验。

9.  **[#2365 [BUG]](https://github.com/github/copilot-cli/issues/2365) Copilot 重写文件时会丢失有价值的文档注释**
    *   **摘要**: Copilot 决定“完全重写”文件时，往往会丢失注释或破坏原有格式。
    *   **重要性**: **代码安全**。用户担心 AI 重写会导致代码文档（注释）丢失。

10. **[#2283 [Feature]](https://github.com/github/copilot-cli/issues/2283) 请求支持 OpenAI 兼容的 Base URL 覆盖**
    *   **摘要**: 社区强烈要求支持 `OPENAI_BASE_URL`，以便通过代理（如 LiteLLM, Ollama）路由请求或使用本地模型。
    *   **重要性**: **生态扩展**。这是社区呼声最高的功能之一，用户希望摆脱单一云厂商锁定。

---

## 4. 重要 PR 进展
**今日动态**: 过去 24 小时内无 Pull Requests 更新或合并。
*注：项目可能正处于集中处理 Issue 反馈或内部开发的阶段，暂无对外可见的代码合并动作。*

---

## 5. 功能需求趋势
通过对今日新增及历史 Issues 的分析，社区的关注点呈现以下趋势：

1.  **终端交互 (TUI) 的易用性与可访问性**
    *   **现状**: 滚动卡顿、强制自动滚动、按键冲突（Shift vs Ctrl Enter）、对比度差。
    *   **趋势**: 用户不再仅仅满足于“能用”，而是要求 CLI 拥有类似 IDE 般流畅的阅读体验。**平滑滚动** 和 **视觉区分（输入/输出颜色）** 成为明确诉求。

2.  **本地化与模型路由控制**
    *   **现状**: 强依赖 GitHub 端点。
    *   **趋势**: 开发者迫切希望 Copilot CLI 能够支持 **OpenAI 兼容接口** 和 **本地 LLM**（如 Ollama）。这不仅是为了成本控制，也是为了数据隐私和离线开发。

3.  **Agent 行为的可观测性与控制**
    *   **现状**: Agent 有时陷入无限循环，或过早结束子任务。
    *   **趋势**: 用户需要更强的控制权，例如 **取消特定操作**、**查看详细日志** 以及 **OpenTelemetry 追踪**，以便在生产环境中安全地使用 Autopilot。

---

## 6. 开发者关注点
根据今日反馈，开发者在使用 Copilot CLI 时的主要痛点包括：

*   **阅读长输出的困难**: Issue #2369 和 #2372 显示，目前的终端渲染机制无法很好地处理大量文本输出，这在需要审查代码或长日志时是巨大的阻碍。
*   **输入习惯的冲突**: Issue #1481 再次被顶起，反映了用户对 `SHIFT + ENTER`（换行）这一通用快捷键的强烈依赖，当前的执行逻辑导致误操作频繁。
*   **网络与环境的鲁棒性**: Issue #2361 (IPv6 挂起) 和 #2368 (LSP 配置路径) 提醒开发团队，工具在不同网络配置和项目结构下的兼容性仍需加强。

---
**日报生成时间**: 2026-03-29

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-03-29)

**数据来源:** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

### 1. 今日速览
Kimi CLI 社区在过去 24 小时内主要聚焦于 **系统稳定性与兼容性修复**。针对 `v1.27.0` 版本，社区集中反映了 Windows 平台交互体验欠佳的问题（如粘贴图片、Shell 执行器限制），以及第三方模型 API 集成时的错误处理逻辑。同时，针对外部设备变动导致的程序崩溃问题，已有快速响应的修复方案提交。

### 2. 版本发布
* **当前稳定版本**: v1.27.0
* **过去 24 小时**: 无新版本发布

---

### 3. 社区热点 Issues
以下是过去 24 小时更新且最值得关注的 8 个 Issues：

*   **[#1621 [Bug] CWD 被移除时底部工具栏渲染无限抛异常](https://github.com/MoonshotAI/kimi-cli/issues/1621)**
    *   **重要性**: ⭐⭐⭐⭐⭐ (影响核心稳定性)
    *   **详情**: 当 CLI 运行时，如果拔出外置硬盘或移除当前工作目录，程序会陷入死循环抛出异常。这是一个会导致界面完全卡死的严重 Bug。
    *   **状态**: 已有修复 PR (#1622) 提交。

*   **[#1616 [Bug] One API 平台 Kimi-K2.5 模型报错](https://github.com/MoonshotAI/kimi-cli/issues/1616)**
    *   **重要性**: ⭐⭐⭐⭐ (影响多模型集成)
    *   **详情**: 使用 One API 接入 Kimi-K2.5 模型进行多轮对话时，系统报错 `thinking is enabled but reasoning_content is missing`。这影响了第三方平台对推理模型的支持。
    *   **状态**: 已有修复 PR (#1620) 提交。

*   **[#1618 [Feature] Windows 上允许配置 Shell 执行器](https://github.com/MoonshotAI/kimi-cli/issues/1618)**
    *   **重要性**: ⭐⭐⭐⭐ (Windows 开发者痛点)
    *   **详情**: 用户请求在 Windows 上允许配置使用 Bash 或 Zsh 替代默认的 PowerShell，以获得更一致的跨平台脚本体验。

*   **[#1617 [Bug] Ctrl-V 无法在 Windows Terminal 中粘贴图片](https://github.com/MoonshotAI/kimi-cli/issues/1617)**
    *   **重要性**: ⭐⭐⭐ (交互体验)
    *   **详情**: 反馈在 Windows Terminal 环境下，标准的 `Ctrl-V` 快捷键无法粘贴图片，需要替代方案。

*   **[#1615 [Bug] 使用 GLM5.1 模型反馈接收不到信息](https://github.com/MoonshotAI/kimi-cli/issues/1615)**
    *   **重要性**: ⭐⭐⭐ (模型兼容性)
    *   **详情**: 集成智谱 GLM-5.1 模型时，虽然后端有返回数据，但前端界面反馈"接收不到信息"。

*   **[#1624 [Bug] SearXNG MCP Logs 泄漏到 TUI 界面](https://github.com/MoonshotAI/kimi-cli/issues/1624)**
    *   **重要性**: ⭐⭐⭐ (UI 干扰)
    *   **详情**: 每次调用 SearXNG MCP 工具时，内部日志会直接打印在终端界面上（4-5行），严重干扰用户体验。

*   **[#1619 [Bug] `kimi acp` 不接受 Moonshot Open Platform 认证](https://github.com/MoonshotAI/kimi-cli/issues/1619)**
    *   **重要性**: ⭐⭐⭐ (核心功能)
    *   **详情**: Moonshot 开放平台的官方认证流程在 ACP 功能中无法通过。

*   **[#1623 [Bug] Kimi Web 会时不时刷新网页](https://github.com/MoonshotAI/kimi-cli/issues/1623)**
    *   **重要性**: ⭐⭐ (特定平台)
    *   **详情**: 报告 Web 模式下页面会自动刷新，导致上下文丢失。

---

### 4. 重要 PR 进展
过去 24 小时内有 7 个重要的 PR 更新：

*   **[#1622 fix(shell): exit gracefully when CWD is removed](https://github.com/MoonshotAI/kimi-cli/pull/1622)**
    *   **内容**: 修复当外部硬盘被拔出或 CWD 被删除时的无限异常问题。通过优雅捕获错误并生成崩溃报告来代替死循环。
    *   **关联 Issue**: #1621

*   **[#1620 fix: auto-set reasoning_effort when history contains ThinkPart](https://github.com/MoonshotAI/kimi-cli/pull/1620)**
    *   **内容**: 修复了 Kimi-K2.5 等模型在多轮对话中因缺少 `reasoning_effort` 参数而报错 400 的问题。
    *   **关联 Issue**: #1616

*   **[#1625 feat(mcp): add --scope option for OAuth](https://github.com/MoonshotAI/kimi-cli/pull/1625)**
    *   **内容**: 为 MCP (Model Context Protocol) 添加了 `--scope` 选项，解决了需要特定权限作用域（如 Supabase 的 `organizations:read`）的 OAuth 认证问题。

*   **[#1512 feat: 重写 ACP 认证流程](https://github.com/MoonshotAI/kimi-cli/pull/1512)**
    *   **内容**: (大型重构) 完整重写了 ACP 服务器的认证系统，支持终端内直接登录和 OAuth Device Flow。这是近期最重要的架构更新之一。

*   **[#1600 feat(shell): highlight user input with bright blue](https://github.com/MoonshotAI/kimi-cli/pull/1600)**
    *   **内容**: UI 改进。将 Shell 中的用户输入高亮为亮蓝色 (#007AFF) 并添加分隔线，以提高可视性。

*   **[#1606 revert(skills): --skills-dir supports multi-path append](https://github.com/MoonshotAI/kimi-cli/pull/1606)**
    *   **内容**: 回退了之前关于 `--skills-dir` 的逻辑变更，保留了多路径追加 的行为，以符合用户预期。

*   **[#1605 fix(skills): restore --skills-dir override behavior](https://github.com/MoonshotAI/kimi-cli/pull/1605)**
    *   **内容**: 与 #1606 相关，试图恢复 `--skills-dir` 覆盖默认行为（实际上 #1606 似乎在讨论具体实现细节的摇摆）。

---

### 5. 功能需求趋势
根据今日数据，社区的关注点主要集中在以下方向：

1.  **跨平台一致性 (Windows 体验提升)**:
    *   社区强烈要求改善 Windows 下的开发体验，特别是对 Unix Shell 的支持 (#1618) 和剪贴板交互 (#1617)。
2.  **第三方模型与 API 的兼容性**:
    *   随着更多推理模型（如 Kimi-K2.5, GLM-5.1）的使用，针对 `reasoning_content` 和特定认证流程的兼容性修复成为焦点。
3.  **异常处理与鲁棒性**:
    *   针对 CWD 丢失等边缘情况的崩溃修复 (#1621) 显示用户追求更稳定的终端工具。
4.  **MCP (Model Context Protocol) 增强**:
    *   OAuth Scope 支持 (#1625) 和日志清理 (#1624) 表明 MCP 协议的集成正在深化。

### 6. 开发者关注点
*   **痛点**: **推理模型的上下文处理**。多个 Issue 涉及 `thinking` 字段或 `reasoning_content` 缺失导致的报错，这是当前集成新一代"思考型"模型时的主要障碍。
*   **高频需求**: **Windows 环境下的工具链标准化**。开发者不希望在 Windows 上被强制锁定在 PowerShell，希望有更灵活的 Shell 选择。
*   **UI 反馈**: **界面纯净度**。开发者反感在 TUI 中看到服务器的内部日志 (SearXNG Logs)，这表明 UI 的信息层级划分需要更严格的控制。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-03-29)

## 今日速览
OpenCode 社区在今日主要聚焦于**平台扩展性与集成体验**的改进。**Telegram 集成**（PR #19570）成为最大的亮点，为 OpenCode 引入了全新的消息通道；同时，社区对**模型稳定性**（尤其是 MiniMax M2.5 和 Claude Max）的担忧持续发酵，相关 Bug 讨论热度不减。此外，针对 **TUI 交互细节**的优化和**移动端体验**的提升也是今日开发的主要方向。

---

## 版本发布
**过去 24 小时无新版本发布。**

---

## 社区热点 Issues

以下为过去 24 小时内讨论度最高或最具技术影响力的 Issue：

1.  **[#7410 Broken Claude Max](https://github.com/anomalyco/opencode/issues/7410)** ⭐ [393 评论]
    *   **摘要**：用户反馈 Claude Max 模型出现故障并报错，即使尝试重连也无法解决。
    *   **重要性**：这是当前最活跃的帖子，表明核心模型服务存在不稳定性，严重影响用户体验。

2.  **[#15092 Minimax M2.5 experience is weird](https://github.com/anomalyco/opencode/issues/15092)** ⭐ [13 评论]
    *   **摘要**：用户在使用 MiniMax M2.5 时遇到卡顿和永久停滞问题，且并非上下文限制导致。
    *   **重要性**：反映了特定模型在 OpenCode 中的兼容性或流式传输存在问题。

3.  **[#19239 Subagent is not running after some job have been done](https://github.com/anomalyco/opencode/issues/19239)** ⭐ [4 评论]
    *   **摘要**：在主代理调用子代理完成部分任务后，子代理会停止工作，无法继续响应指令。
    *   **重要性**：涉及到多智能体协作的核心逻辑，是一个严重的功能阻断 Bug。

4.  **[#14273 Free usage exceeded error for Zen free models](https://github.com/anomalyco/opencode/issues/14273)** ⭐ [15 评论]
    *   **摘要**：使用 Zen 免费模型（Kimi K2.5/MiniMax2.5）时出现额度耗尽提示，尽管账户仍有余额。
    *   **重要性**：计费与配额系统的误判可能导致用户无法使用服务。

5.  **[#768 Github Copilot: Tracking Premium Requests](https://github.com/anomalyco/opencode/issues/768)** ⭐ [30 评论]
    *   **摘要**：请求在追踪 GitHub Copilot 时显示其“高级请求配额”，而不是始终显示 $0.00 的成本。
    *   **重要性**：对 Copilot 集成的体验优化，帮助用户监控特定模型的使用额度。

6.  **[#19415 Add /subagents command](https://github.com/anomalyco/opencode/issues/19415)** ⭐ [3 评论]
    *   **摘要**：新增功能请求，建议添加 `/subagents` 命令以列表形式浏览和选择子代理。
    *   **重要性**：改进子代理的可发现性和操作便利性。

7.  **[#8619 Native StatusLine Hook for Plugins](https://github.com/anomalyco/opencode/issues/8619)** ⭐ [11 评论]
    *   **摘要**：提议为插件提供原生的 TUI 状态栏挂钩，以便显示持续信息（如时间、Git 状态），而不干扰对话上下文。
    *   **重要性**：对插件生态系统的关键改进，提升 TUI 的专业性和可扩展性。

8.  **[#19502 Windows Terminal + WSL: Image paste inconsistent](https://github.com/anomalyco/opencode/issues/19502)** ⭐ [3 评论]
    *   **摘要**：在 WSL2 环境下，文本粘贴正常，但图片粘贴表现不一致。
    *   **重要性**：跨平台兼容性问题的持续修复，提升 Windows 开发者体验。

9.  **[#14808 Plugin event listener for "session.created" not firing](https://github.com/anomalyco/opencode/issues/14808)** ⭐ [6 评论]
    *   **摘要**：插件无法接收 `session.created` 事件，导致依赖该事件的功能失效。
    *   **重要性**：影响插件开发者的核心功能，阻碍了基于生命周期的插件逻辑。

10. **[#10899 Optimize hot reloading for configuration changes](https://github.com/anomalyco/opencode/issues/10899)** ⭐ [5 评论]
    *   **摘要**：目前所有配置更改都需要重启应用才能生效，严重影响工作流。
    *   **重要性**：高频的 UX 优化需求，旨在减少开发过程中的中断。

---

## 重要 PR 进展

1.  **[#19570 feat: add Telegram channel integration](https://github.com/anomalyco/opencode/pull/19570)** [OPEN]
    *   **内容**：添加了 Telegram 机器人集成，支持 DM 配对、会话映射和群组策略。
    *   **点评**：**今日重磅功能**，极大扩展了 OpenCode 的使用场景，允许用户通过 Telegram 与会话交互。

2.  **[#19483 refactor(session): effectify SessionPrompt service](https://github.com/anomalyco/opencode/pull/19483)** [OPEN]
    *   **内容**：将 SessionPrompt 迁移到 Effect 服务模式，使用 Fiber 取消替代 AbortController。
    *   **点评**：底层架构重构，旨在提升会话管理的稳定性和并发处理能力。

3.  **[#19560 feat: mistral enterprise endpoint](https://github.com/anomalyco/opencode/pull/19560)** [CLOSED]
    *   **内容**：支持配置自定义 Mistral API 端点（如企业级部署）。
    *   **点评**：满足企业用户私有化部署的需求。

4.  **[#19561 fix: nix embedded web-ui support](https://github.com/anomalyco/opencode/pull/19561)** [CLOSED]
    *   **内容**：修复了 Nix 构建中嵌入式 Web UI 的打包问题。
    *   **点评**：对 Linux/Nix 用户社区的重要维护。

5.  **[#18767 feat(app): Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)** [OPEN]
    *   **内容**：优化了移动端/触摸设备的操作体验，同时保留桌面体验。
    *   **点评**：顺应移动办公趋势，提升跨设备适应性。

6.  **[#12520 feat: mcp-search tool for lazy loading mcp](https://github.com/anomalyco/opencode/pull/12520)** [OPEN]
    *   **内容**：新增 MCP 搜索工具，实现 MCP 的懒加载。
    *   **点评**：性能优化，减少启动时的资源消耗。

7.  **[#18306 feat(opencode): add Open WebUI provider](https://github.com/anomalyco/opencode/pull/18306)** [OPEN]
    *   **内容**：添加 Open WebUI 作为原生供应商支持。
    *   **点评**：进一步丰富供应商生态。

8.  **[#19556 fix(session): use MCP tool name in permission patterns](https://github.com/anomalyco/opencode/pull/19556)** [CLOSED]
    *   **内容**：修复权限对话框中 MCP 工具显示 `*` 而非实际名称的问题。
    *   **点评**：细微但重要的安全与透明度修复。

9.  **[#19520 fix(tui): patch StdinParser](https://github.com/anomalyco/opencode/pull/19520)** [OPEN]
    *   **内容**：修复高负载（LLM 流式传输 + 60fps 渲染）下鼠标序列导致的文本乱码问题。
    *   **点评**：解决 TUI 在高性能操作下的显示异常。

10. **[#19559 feat: allow custom sound uploads](https://github.com/anomalyco/opencode/pull/19559)** [OPEN]
    *   **内容**：允许用户在设置中上传自定义音频文件作为音效。
    *   **点评**：增强个性化设置选项。

---

## 功能需求趋势

通过对 Issues 和 PR 的分析，当前社区的主要关注点集中在以下方向：

1.  **多通道与平台集成**：
    *   用户强烈希望 OpenCode 能嵌入更多工作流，如 **Telegram** (PR #19570) 和 **Atlassian Rovo** (Issue #10726)。
    *   **Remote MCP** (Issue #3875) 和外部事件导出 (Issue #19567) 也是热点，表明用户需要更开放的系统架构。

2.  **TUI 与交互体验优化**：
    *   **状态栏**：社区希望有更专业、不干扰对话的状态显示方式 (Issue #8619, #18969)。
    *   **文本操作**：粘贴文本的展开/折叠 (Issue #8501) 和非英语输入法的键位兼容 (Issue #16252) 是高频需求。

3.  **子代理与多智能体管理**：
    *   随着多智能体应用的普及，动态模型选择 (Issue #6651) 和更好的子代理管理界面 (Issue #19415) 成为刚需。

4.  **模型稳定性与兼容性**：
    *   针对 Claude Max 和 MiniMax 等模型的连接报错、卡死和 Loop 问题占据 Bug 报告的主流。

---

## 开发者关注点

*   **插件生态建设**：开发者非常关注插件钩子的完善，特别是 **TUI 渲染钩子** 和 **事件监听机制**（如 `session.created` 失效 Issue #14808）。这表明开发者在尝试构建更深度的集成工具，而不仅仅是简单的脚本。
*   **配置热重载**：修改配置后必须重启 App 是开发者体验的最大痛点之一 (Issue #10899)，严重影响调试和开发效率。
*   **Nix/Linux 支持**：关于 Nix 包管理的构建问题（如 Web UI 嵌入、版本号解析）在 PR 中被频繁修复，显示了该用户群体的活跃度。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

你好！我是 AI 开发工具技术分析师。基于 **2026-03-29** 的 GitHub 数据，为您整理的 Qwen Code 社区动态日报如下。

---

### **Qwen Code 社区日报 | 2026-03-29**

#### **1. 今日速览**
Qwen Code 社区在今日迎来了多个架构级功能的演进，核心方向在于**扩展交互边界**与**强化代码审查能力**。一方面，社区正积极构建**Channels 平台**以支持 Telegram/微信等外部渠道，并引入**Cron 定时任务**以实现自动化运维循环；另一方面，**代码审查** 功能正在引入并行代理验证与 PR 自动评论机制，显著提升工程化落地的可能性。同时，用户反馈集中指向了**上下文窗口占用异常**与**Windows 环境兼容性**等亟待修复的稳定性问题。

---

#### **2. 版本发布**
*   **当前检测版本**: `0.13.0` / `0.13.1` (根据 Issues 信息推断)
*   **过去24小时**: 无新版本发布。

---

#### **3. 社区热点 Issues**
以下为过去 24 小时更新/创建的高频讨论或高优问题：

1.  **[#2727 Shell commands fail with "File not found" on Windows](https://github.com/QwenLM/qwen-code/issues/2727)** 🔥
    *   **类型**: Bug
    *   **摘要**: 用户在 Windows 下即使安装了 npm 包，执行 `npm run format` 等 shell 命令时仍报错 "File not found"。
    *   **关注点**: Windows 兼容性是硬伤，影响开发者在 Windows 主流环境下的使用。

2.  **[#2685 新开会话里一个”你好“就把上下文窗口用掉 20%](https://github.com/QwenLM/qwen-code/issues/2685)** 🔥
    *   **类型**: Bug
    *   **摘要**: 用户反馈新会话仅打招呼就消耗大量上下文，疑似命中兜底逻辑，导致资源浪费。
    *   **关注点**: 上下文管理策略存在严重缺陷，直接对话效率。

3.  **[#2722 "Edit automatically" 选项允许所有命令运行](https://github.com/QwenLM/qwen-code/issues/2722)** ⚠️
    *   **类型**: Bug (Security/Safety)
    *   **摘要**: VSCode 插件中开启 "Edit automatically" 后，Agent 竟然获得了执行任意程序的权限，违背了用户预期的“仅编辑”。
    *   **关注点**: 权限控制逻辑存在安全隐患，需重点关注。

4.  **[#2730 QwenCode refuses to do anything](https://github.com/QwenLM/qwen-code/issues/2730)**
    *   **类型**: Bug
    *   **摘要**: 模型拒绝执行任何指令，即使以前能正常工作。
    *   **关注点**: 可能是 Guardrail（防御机制）过于严格或新版本模型行为异常。

5.  **[#2686 调用工具时经常性出现遗忘](https://github.com/QwenLM/qwen-code/issues/2686)**
    *   **类型**: Bug
    *   **摘要**: 在使用 `edit` 或 `write` 工具时，模型经常遗漏 `new_string` 或 `content` 参数，陷入死循环。
    *   **关注点**: 工具调用的稳定性与指令遵循能力不足。

6.  **[#2695 JSON 序列化出问题 (API Error)](https://github.com/QwenLM/qwen-code/issues/2695)**
    *   **类型**: Bug
    *   **摘要**: 与 DeepSeek API 等集成时，中途报错 JSON 反序列化失败。
    *   **关注点**: 第三方模型集成的兼容性问题。

7.  **[#2409 Bring subagent system to feature parity with Claude Code](https://github.com/QwenLM/qwen-code/issues/2409)**
    *   **类型**: Feature Request
    *   **摘要**: 详细对比了 Qwen Code 与 Claude Code 的 Subagent 差距，目前仅实现了 40-45% 的功能。
    *   **关注点**: 长期规划的核心，社区对此架构迭代期待值高。

8.  **[#2447 Skill Testing Framework: 录制、回放与断言验证](https://github.com/QwenLM/qwen-code/issues/2447)**
    *   **类型**: Feature Request
    *   **摘要**: 提议建立 Skill 的自动化测试框架，解决数百个 Skill 难以回归测试的问题。
    *   **关注点**: 生态健康度与质量保证的关键。

9.  **[#2613 阿里 coding 产品解惑](https://github.com/QwenLM/qwen-code/issues/2613)**
    *   **类型**: Support
    *   **摘要**: 用户混淆了 Qoder CLI、Qwen Code、灵码等阿里系产品的定位。
    *   **关注点**: 产品定位与文档说明需要更清晰的引导。

10. **[#2641 pathetic Qwen](https://github.com/QwenLM/qwen-code/issues/2641)**
    *   **类型**: Badcase/Rant
    *   **摘要**: 用户愤怒反馈模型破坏了生产环境代码，且不断重复修改。
    *   **关注点**: 负面情绪主要集中在“不可控的代码变更”上。

---

#### **4. 重要 PR 进展**
今日 PR 质量极高，多位贡献者提交了架构级增强功能：

1.  **[#2628 feat(channels): add extensible Channels platform...](https://github.com/QwenLM/qwen-code/pull/2628)** ⭐ **(重磅)**
    *   **内容**: 引入 **Channels 平台**，支持插件化扩展，内置 Telegram、微信、钉钉接入能力。
    *   **意义**: Qwen Code 不再局限于 CLI/IDE，开始向即时通讯软件渗透，构建全场景 AI 助手。

2.  **[#2731 feat(cron): add in-session loop scheduling with cron tools](https://github.com/QwenLM/qwen-code/pull/2731)** ⭐ **(重磅)**
    *   **内容**: 增加 **Cron 工具**，允许在会话内创建循环调度任务（如定期检查部署状态）。
    *   **意义**: 赋予 AI 时间感知与周期性任务处理能力，向自动化运维 Agent 迈进。

3.  **[#2687 Enhance /review: add verification...](https://github.com/QwenLM/qwen-code/pull/2687)**
    *   **内容**: 重构 `/review` 命令。Step 2.5 引入并行代理进行独立验证，Step 4 支持直接通过 `gh api` 在 PR 下发表评论。
    *   **意义**: 将 Code Review 从简单的文本输出转化为实打实的工程工作流工具。

4.  **[#2732 Add math rendering support (fractions, fractals, LaTeX)](https://github.com/QwenLM/qwen-code/pull/2732)**
    *   **内容**: 添加了复杂的数学公式渲染支持（分数、分形、LaTeX），并修复了 Markdown 验证器。
    *   **意义**: 提升了对于学术/科学计算类开发者的友好度。

5.  **[#2728 refactor: centralize IDE diff interaction in CoreToolScheduler](https://github.com/QwenLM/qwen-code/pull/2728)**
    *   **内容**: 将 IDE diff 交互逻辑从单个工具（如 edit.ts）集中到 `CoreToolScheduler`。
    *   **意义**: 修复了 Token 浪费和多文件编辑冲突，提升了核心架构的健壮性。

6.  **[#2718 fix(cli): prevent terminal response leakage on high-latency SSH](https://github.com/QwenLM/qwen-code/pull/2718)**
    *   **内容**: 修复高延迟 SSH 连接下，终端响应泄露导致出现乱码的问题。

---

#### **5. 功能需求趋势**
基于今日 Issues 和 PR 的数据分析，社区关注的核心趋势如下：

*   **工程化与协作**: 社区强烈希望 Qwen Code 能更深入地融入 DevOps 流程，例如 **自动化 PR Review** (#2687) 和 **CI/CD 状态监控** (#2731)。
*   **交互边界的扩展**: 从单一的 IDE 插件向 **多端协同** 演进，今日提出的 **Channels 平台** (#2628) 显示了将 AI 能力输出到微信/钉钉的巨大需求。
*   **工具调用的鲁棒性**: 多个 Bug 反馈集中在工具调用参数缺失 (#2686) 和 权限控制失效 (#2722)，说明底层 Tool Scheduler 的稳定性仍是痛点。

#### **6. 开发者关注点**
*   **资源消耗焦虑**: **上下文窗口** 的异常消耗 (#2685) 是开发者目前最大的痛点之一，直接关系到使用成本和体验流畅度。
*   **Windows 体验欠佳**: 基础的 Shell 命令执行在 Windows 上频繁报错 (#2727)，提示该平台在 Windows 兼容性测试上的不足。
*   **安全性担忧**: 关于 "Edit automatically" 模式的权限越界 (#2722) 反映了开发者对 AI 智能体权限边界的敏感，要求更精细的控制。

---
*数据来源: github.com/QwenLM/qwen-code | 日期: 2026-03-29*

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*